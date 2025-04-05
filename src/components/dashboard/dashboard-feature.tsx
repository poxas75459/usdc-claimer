/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5BdpJZHwgb2XumaXq63NFhieqkuKj3a3MAWd7ReiCDMsdeS3neozVKc29gRx89Ko2tTHmM5H3EkqztVRGc5xDVkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dwKnCpjLJViHs3GqKp7jPDrBhhPMKX13ayDEXCKppBxkr5Rc4oDq43R2gihKHwuo5pAiVszpb8oGceuRaMx2Ri",
  "key1": "324qrGxYtTiesN3zhwmmCKnNybHCieBwWmoEtvBoGpm8yw7pPkRGS2pnbY3Tw441eh95R9qv5mc7h6hfw91pnjuN",
  "key2": "DGdsZPZ4xPUGfkM85YeWT9u3Xkpb2Wfg1WBZCFV4uhYT5vq6F4xviar3jbZC47WyCijDeLTi9LH1ZNRc3iyQqbK",
  "key3": "5MrbjHTH8quYopcw9mdVncrdQFSKYtdTLdEXaR9oFkWL3BoV6UB1fWDFrhvGCPDzYkeLovArjqdKKD77L3pLTrww",
  "key4": "4BgW2Twqg99KEYd2hzQQwTKmW9CsEG13crUWZAWCRwrtMhiJXdMfUjzxV42yn196QKZs8hiEB59ziTbkvg9B1SDf",
  "key5": "Tisv9NqefYd6i4ZNjunspLVTH51SgtQP1BpDLvA9xEnTkUMhpZR7rzSRrQXHERXCFD1beRUdE88rConruWeCWcm",
  "key6": "2kczqswAXDBoRBLPbW9QGmV6EjJY1pZV8m2abzySrjaqCmCtjXyyFqQFRCxCpumdgumBe2F2QSTaBzw89iyvXmGv",
  "key7": "4ChzvHm17LyG9yBZhC7aJPB7qGfMTkKDHRz8r4ytTP9cNL6eAH4DEbzavrW2vTfwvJRFj1v6U8KfvLWqEnn7p7HD",
  "key8": "3VCCQGcxKZHrSxbCSkSfyvtTVfVoFpZoXALT3vD94FwhvQsfkYyCpmEgkEnVotAs1VFMvyvEvGYg4zSXLbt5roEK",
  "key9": "2P6z7Sz4CWgWxsaM6E8dgyCobCa3HkQTBjfbBZ9Mim3XFXsrQLrJiuqsvPvC9ST46Ys2EZaW8argr42XiSUcDMfW",
  "key10": "4h66EBbS511U1tJjVrMQ9oTyuXxUZbSqzamzLBxNXQkw8KaNKTawnG6p5bgM11wZiFtYVbqztYkEYihe4CieVSsM",
  "key11": "41iuRXGioaZP7pFbxZHuibkRB5283NAcm7cn7WwUdt8ft9XtRPTEksGupBkGaJsr1eUZD6QL24XWVofi92iBEJAz",
  "key12": "28wWtZaqvjPkGfZMnuvnDuDbdVXp5XoMxWDBYRnL2kmvmK9gSa2aLDMig8m8XMwA6tk3Vy9m1PD5jtr3Bo7EbLZP",
  "key13": "JX87wLrrGWV5YLbr9L7T1ibhdbzMyRZeEWf64smkBDFVDcDT13yWfJTvYZyjGwTMkJGRaPt8aaNgb4PHvHsRM3r",
  "key14": "48n5h2tdtdvzqcPMwV6PcayKBoSoUfKKMVVrUh2BZxAyRdcTmSE31dojUXh8RtZWaYsr5AiNPsyWQtszLA8TdL37",
  "key15": "2YQw761AR95CE2we2hqjR2gUYuNoREyLftgkpGi3QsdrkdJRovnRm6yez7rKkfV9DwHxtLJzdZf1Qyw3NF1vMxVA",
  "key16": "3SUfo69KxELWGtUbnKqu4yMyBi1vZPZ5QqLPLsJtpDK3gfkagvaqwS6mQ9iKx6kjm8q7uLnpKg1wp5iNozgJoVs",
  "key17": "5WFjSGu5zt1kzeUGPnHCmfSQLaSatdSmXhxnUqF5WssHzFuZAXhMEKHy5zZaLGAMJcDkfbmQrxRmScP6Jgxc7e48",
  "key18": "2SCT16PWnsezHewwReW4SNTHvYZpKfeSwKKUo28o9B5eBCFmrG1NRRh1QzJvT8q5QTQfQ3RbMgEh4y4QWiLXEbfS",
  "key19": "Y9YKnoGp4mn47Uy1PpXjZm27M2AYcYzEDCjoJbLKZq6aBiqGM4D9mcqFuy5FpXdY2ihcQruNBFXWpx1TyHyieLm",
  "key20": "kTB1pJJ3wGzUyCSwhiuzwkCGbSa9KC1BY43gFi7WqoMMrprERJARX8utAWd5D3seC2Q5GZB1RfkLbCNBthZRN9z",
  "key21": "3kHWsE2g8yfLHzxe73G26R4jSCGZs44ncqcxZyDXTVfYQXDKYyBJYyHHJEX6rSqG1Sw8MypmsNgZWe11jZ6EGk3E",
  "key22": "2ky4y3JKvNANfMPfHtcauJ7ec1gvNj6h6La6tdwRhQwmHGL82Kr2tc3NzYUEHgJzs68EBdp8xUhfosHdADh83cQZ",
  "key23": "iTbMD3KeuayHpapX3zrZmQVF7TWczdjtug5assARzEyKyHt5Rx5MdQXvjz6cUNzMkUGf2Bc3krXbQNVv8os2Tkc",
  "key24": "zQMq2c7y9BJTX3SkQ41h3QHtEUMWrCeXQMdbw1ANuNqBWxxyU7G2Ac5EbVLtmDUgH9DgFZoe1Pc62cgYuWigcGD",
  "key25": "2HCWDKH5FPptezG7NmMwMUZ3J54eyQ8q8JuewrEZJHkzLmjYjNoVV75FtLYvW9YiorsWpLSwC7VCjpuRtWWRbFCA",
  "key26": "2s9M42zjPNrnWB9iVBDuPApT4s2P91hBCPtD7aF9cu94PV2FXfHR8ore2nmMP5tn3iMRCJvjLyp3fcnyTUBMuYkb",
  "key27": "LwrB6cBgffPUzuY5Jr32NeGMMn6A54TrJW3tTzXGp2vVqvGnK77Zq3coj4jUposAsNhRNqY3kPJyf9U3u6T6jbt",
  "key28": "7cpEeExHLJZsDJSNvny96jwWoDeQNmntbCCZsVUJo4Nv1pyUUPFRaMJ4Jg3WjfeXzp8wFmX65myLD4EkQ7HoowB",
  "key29": "2rNNCEGScwyKWsrZZbqJaRtBASiY3VPx2NeBUemJU8rWeqkFQQVp83ZoVB5s7HyNrGxUr2wUzsTVJuvsQGGtjdvN",
  "key30": "5ETykAp98NbXtUV7MRcNJLvDKiUph8NALuKetYk5cJnnkST89HskSnYBrGCxwNVhRf7mfYQAPxA5xBprJGRrYgGs",
  "key31": "3hLipAoKA5KQpCGNhxoBbMbapK6prwoxfTwz85QBjDh6oqDUc8jrJojs1KJEAXXEA3Hh6pttcRZ3D9R92KNgiRgi",
  "key32": "2KyQWgw6NnNb8RnoYt7jX9gXBEduu3WZ3ckVL4hGnqA26GGLbhqpjnTL7Fnbam47m57RXJNxeGquEjXSnqkGsmqp",
  "key33": "2xpxgQ1S69WjTWB4B9MW4nCoxgatmQYuUzg1n3G6hMWw8XAjRCmyzjYcypDJQDFo7Kc7oBkGkjxfHkY1mKe41Rpk",
  "key34": "2NnnRSXms94vQcPMjfUFzdL9AT17153gALqxkg5k7KhPc5s9hcDeidJPvs1TFk5vS5qMHnsdcw5WMUv4qYmLKfis",
  "key35": "2VqcUntfwCdtJWTdSy7T3Po7q5u689bsT8Mfqbta3jqv2Asm6WHK5oXPSvVm5vPWDABhqS4CY2Fp5jEscFr7PEbe",
  "key36": "35yiNTtwU5jgqgFK4Zqz3j2pebNPBqvr5xLtQvUT12eJ8ScWkSbA3yzAajkxwffSfaw1vh1tCyQ65LThUrkxyzBr",
  "key37": "43KsUUanTXqik9e6u7vkF69LpNZADqAQA3D3buJnTgsz4UEHzCmbE8ZjEjw7DhML9StFEv2JJwCJhjdwvze55Wci",
  "key38": "4GBoSQ5eizB56WLSXoPZjMKvTSXdRtg8vjsH3y3SFbJ6yxdXJ6uT8sbRNuTppBsDCuNx3SFtenidknX3Gzy7b5Ja",
  "key39": "4JqEZDFoJDaM7vLhogzva78HfZ3NuFiMQ6qRk8qxqxvB7X6XEzN2bbB5rGXQ5FJ8Ks1cuAsyd5ukgwNaGDHEdWpq",
  "key40": "3BEyMju3v5mdkTJpKaKKtnkPbYDQEa5necKybAbvDBfY4NRRyNt73MD7aMrtrzo5UPpTSSZzoXoedA3oZpfgcMLH",
  "key41": "4PHzqzsWzT6rLnLbNstT5jj6tfNKWw12xJvFqQm3er2AKYjx1TF3HXbaepZymgP1Pp6vfJzEa9Dc5FJq15Rq7ZGM",
  "key42": "3pSAsie7BLXfmK3ESdwqex78HTn6ezp7gF6tUzX1shV1VqbTQBaDr9ERej2XFFhnQspudQdX7uZyzkiKZsNuq8Z6",
  "key43": "64yMeh7QvPJrP3mCE8E9AAniAbBSq5VQVfnArAs2a97Xra3eAmQAL6yLjz5NDxCLKvAWNLnmNBae7kux86m35mNa",
  "key44": "2GTUZkdeLBKLADE7fPoYPqGGmN3fK6UPwiXbQ7HH98YUejYjunjBAMtQ87fCYfvAn8y72pda5sPCjuaWtorZ8noE",
  "key45": "KArmuXkgM9UJv4gjpMm4SHaicUsKGNbbi9zuoUgDw4eybAqdsd8nk7ZX3xjfX1jCq4pbemfrkzvLZg4t2isGsvL",
  "key46": "2Hq1uKwpcngLpSV3QF4gpNjXVMZkoQfsKmie8uiFETL229Mkwwci61UzJ1VnCnL79vG2ptcnnjWRAXs8m6AvEyJG",
  "key47": "2XAnG4nCKEKckLnqxdvTAB2G6bbyFPZ9UBBkRMhiuWqc5n75wAJkLB8Zg7zVwJAeE8sFPHVGH1psNaT5TVnCZWwh",
  "key48": "5cXvRPSXYBFS7QVyqXyaGbRogT2wTYbTCoGzirQbjYProLBfGJ7GwPscyYYYyAj9FJC5LPhckjbtkYEcKhmhTWZ1"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
