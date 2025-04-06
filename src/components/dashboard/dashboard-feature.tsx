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
    "65VH2VNpUbazgTbQEjmHVDsTJnWvAVrxndMqE8PfE9Vuykn84WwXNeDEcy6c1G13wNwFNZkXAZ7LrWGEugHsag8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kMfcjVHjru2QccD8d293muRkEpr1XSS92CKfDZg1GpgA31c9s7RmRi2WtRboCtBomntEL8dmoiQotVxA7vidJi",
  "key1": "SkTfSz1hqgrrnPGb4HzmmhHbJz3fNE5ecA3AH1xqPiuRxsehv7aCmgZ5Y7QY1zxKR11KKpHwpBFYrW7p1nLsEDw",
  "key2": "4fNbknT3YUaFYH3u5ni1rcNUy9oCndLhsveEV2uYSYHufExehnRuRNYArbdbN2bnA7fLLXTQjgsVDtBG7R9Gaped",
  "key3": "28MRjqc52ddvnmxgeHAFmmkwhVbheAb9WJ1RKb8uv8QufkuTWPXaidj1X6RRe2B9i64ApAGGKBxuFKs1nFQM2Cz7",
  "key4": "5b3zHpoKhfv1CRr2DLs4nLSqZmQwq9iKZdfhmiuA6KvoNx7nAgZj3VYwe6kmizbGppjViGgBfhh19WfcNUyrrkw7",
  "key5": "Hp8pnhc5SUJQ26Kbq16mL5MHbtoJF9rcWAcpGL1ud4hZ8Mx62jFEpRuAUo1GszmdHaqh7VTW87J1Nzqzjc3wMwG",
  "key6": "26n496JBsmJNjSasNaZaPN4viyFzu9542priKfTtcGh6u398GtvaDN8W7kHDLMz6Hnq5pg2ys4AuqSxYrLdkmHqh",
  "key7": "seBgKpDXtWxFMR5HYJrFefbnqdYMzPcvTAira1dEz9Gq17CFZWoaiyAHSzWGMJVPbbgct98RonXP6XhkxZvfbRz",
  "key8": "4wQrEpj8ZqwcpeDhRovhGWQ6tqSei23RuRVuM32wXj475XqTtSC6Y3umpcukQ59bWjP6oT937H4SqLQTc4ndLTRt",
  "key9": "5DYQ63nGnojqFtj4A1h7AVf4sAy4rb7MYZF3jQjaFajnWxZE3VVY1sFt3KCRZ7yCuu4Tb1NKLmCenx3Q4k7jM8H3",
  "key10": "2gdZua9CBejpuhn4eHZ18ZPiGRPU2SyXLW88ncg9F8NBrZ7fTtLcSAy5w9kdi1mM84xk57sZnwHTpR1okyqGsJ8q",
  "key11": "5EZA2Q5ozQ4Rpx9Fa6euWAHohRVvacVZNGbDBQvzhT4dkn1cd1mSjswFC2btva2hLrYW1ZDfv2vgsiXLFQ1RVCrd",
  "key12": "2A8hU6pXX5bv49AA7ckDdwTzEgWcKeNo61RmMr7UrTVBbXLDJQxGvHizGtj58HF9uicCerbWr5SQ12QHF1gWFGr1",
  "key13": "35cEK2zUSySAuuoRBRQQ8bKrtbhvGHLUQLDHSE8FRjhcanpxd84nDom3y6Z98bzCf8JmjtopqZH6LQX8TEiKWs2T",
  "key14": "3AtWNQgcfwnqvat3KwHzBUzrw4MojcCbEhvRGQotr2oACTqzkHGiSgqex9RSXnnKJXNMmCU3zzjif3bf2kgGBFoy",
  "key15": "5nA21XPMqUmnfFQwfeyfB2ekP616CxxtT6fzdhpYKXZDHHtoXgrMKZW3XZWCEKJH9c3kfBFQHr5s2XicRqQLL7oT",
  "key16": "3bPUgGubRCqTd6RJbttT1rybbnNj7P8tUnXonUQccW4YrweR4gPTdCyAiuWizrtnmcAE2RLpb3SJX2QYnub4fiNt",
  "key17": "354NUm9udCXTgr8tLKofhaZveW1UbndDMtDEi7ffccQz9bW95yygD8gcPA8QiWuJefPGa49DZoA2kna9Wu4L87Xr",
  "key18": "6xLXwooM5EtcUPFkgEMj8J4g7mhGktntPcTiThx6Wrg69ev7SUqvRT4HuM4YkBZ1P4YvNw7tjXKWcxqwk6vNrpg",
  "key19": "4MeGwipJ3LsmrBTbm3zm3S7CzUqvW9REAzYLf4mewZSkGPnbvubkBYBWoMkzYSnSjmtMU3udXXuvjF93FDmcHd2u",
  "key20": "3E4N9yua7QHF1MgsNwnkxXoWoddWYqToDUL96i66EkWNB7mEtJ3QpDJXmrwEoPXe46g163zxqRt9r4gy8WHi3FYj",
  "key21": "KfK8vArPSMufpu513w4x2CytdHZZYpF7cdTFTkZHhjeAYjajLthk4kfyUfh23TKYL8rGKaHamm3WWEs1NFBm1XL",
  "key22": "4mw1TzJpc2ZvZF1rViQUVkfURc9NNVhFob3D5YJ5wBpaa8JfahqcwESTFNPLyhjfgzkSXsGgWUWS96vK3BZRxw4Y",
  "key23": "2pe4nn9dq8i7nzW9SyVUwPgvmcwFpJWMivx8BCPFo89YqiknCtbxuSjrMFxbun3iCPog6mYNyNeXfE5XUTMFTC7P",
  "key24": "4Jaj55fhxEE69K3bYFcQ3WYjQvGC2sASP8wXYkHxJMQwLpqX8nDrjqcYvDFqXpxhBD7VbhfMyKwZVCKfyK9ghzdn",
  "key25": "4LDzKbBd1nrYVy1Drj35TGjPj2D8cXkGVqjAEt8S1A4zPtENmZfsHZJemftUTZqH6oudjBvXa7VcPuN4bwuBvg4w",
  "key26": "5ByYWPuERUFtUR2acmsn5xuzBUPQLKfvTugMB8VpfvjV91ZN6An6mwCpoeRdvGeDnE4zNhPgwPrDya4ZWpweEZst",
  "key27": "447h9hPJUwZ3nZWoTXca8UK7h6YPhGjpR38975ztaByg87AmqB4EPbmhJyHKBg7ebkhvRTToHPeTJM9kWp8jZLa9",
  "key28": "GvRCt1g1bGw8FiMcT6qe1sMWipGaV4UK1nbykzRSW6u7EvfKNUWqqfmEkKcSb4d2qzVeSiDyxXkVkGFghqUxoFg",
  "key29": "5dRGQ3LcKesJ2egBx36j8sYmrJGtWM3YrvQi5Vq5bExeCBo9qxY6U5VjtbcTake5n49h6Wr5t1BVabesShH7Zwh7",
  "key30": "53Dg8hAP5zR3heHTGpTaETQ61pDeQptCB2J8irttL7gKueXwMabZqB3Uw1nXLwycLPa72df2ofUZAgVz9TYhgWiJ",
  "key31": "5xPWu8gpGLqimov7DWPkwS4dkzd26b6uRrtyhbVvFKQsp1kiyiBQe2ueChR5EkXfXwGwb69nnuT3bMC91vXgywwg",
  "key32": "4nfSViRbKAsmnahfbJyty6UWj4NCQ3Y7qJpsXn7oXstpQq2Rwdej78PYY4G6tg7VByof1ecBygonWMTXTnGbEqfJ",
  "key33": "5Zq43CZ3Xw623irW8KCu2fLbYptzfZepKfHGLBZPF7piBaEELJjd3PpiTZ823bsaiRNrg3XDmApjB3CSZaJVDcAD",
  "key34": "5oeVspqoPZSnquEFo7yKyJBZaXhv8f2yGXKFS9ejPhakfrhsE3pKdBhkTTPbnwNkAZamnDXxfWVAGcYLLBx3SYsE",
  "key35": "38nf38JtjEHkCx6kpTM9po4zdkEwVAejCZ6yYLUUCdCaTRRdHyFmmPLH2oG4R6xBVAm7zpUxYxbYzJ1vZzrdP2B8",
  "key36": "3R6RcVFEdjWLbbR8JcdKtYNFt9PdchH2rEZWQZZTmgTzFopvGD656swnVvf2v1udmRqHwr5hHxWmFPMghxo6ZcUe",
  "key37": "kkV1CcjUq5gMjdj1uc7PhXAQWP3aU5zshmD65RAVu2gHniZaU4Ep8PSHKkcrK5ZBaxZLD3MHQGAsk64udxbe8J2",
  "key38": "5CVJTBP3MT1ABhDpZRgc9CCTu7mjtmPD9i9jkhxzioC2aKQKsTwVwkYVGaf547Sm2QE9iJTZd1y9p7YQhoam5gPT",
  "key39": "3eCDmVGiT8AyoHKCw37KA1SagojHJeSASS63K69gKuDJJait1QxsQrQSZb5D9KvEDTHPGLYVmefgmBoTaE6yXQat",
  "key40": "3pe9ZNurFLsKZpR67ZYHJyPo1Jw87vLrF2NsbqJ48e3Excf4Vry1kqf2oiw5fA1S3ZfwJUUx4smo6YWwx6ZxxVY6",
  "key41": "4ngHGSjYrz9jSMewgH2fMTCaJv2zNiT5rdFJRC94J4y2M6Mhcnrvf59S1bscS2LiRW8LeWVQCwmFqLmDDHUA3PQq",
  "key42": "975EzEd2frBKqFzMtsVUNDnygReh3kF6mHgQjCckvfCLxavMDhTdiramujXmRdTJRAs8ojDm8XFy8NKvAThBZ9S"
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
