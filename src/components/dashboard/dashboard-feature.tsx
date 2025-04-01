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
    "4PePrCGETNkD5tJkionqWB1in5BG5NhrBA9MPBUfThQMJ5uZgb8ouigwX69JqGLaXoqFTctmN1avCbPQrUmBj3hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48t4vH6J4Et3k6nFhQhcBS6rAAZMRz1JfjLNt45zMtzWMidSapXLYTwrCcJpEizotoZR2mi1CCAjVGUoNyi5mbCi",
  "key1": "oj5rZdXeVHZexJkE5ygzm3THnNJYoNirCrSRmgh998DZr9KKidvEhqX7hies1K1FdSt7YGRMWAvTGjHgJ52Bq8r",
  "key2": "ADAg6bjGKujFg77jecaVeiZ6xFwvXKGEtfUKXjBLUzo7WCL6YEYnXWnZgdfUpMaEMvUPNZCXxRCqPjv75nnD5or",
  "key3": "3x5JhKwy1jDhTNCuyw6wk129y4EdzH21NcoP6KAR3Ysi54JGPCuUfQ3j9eDEBVTH46Bq2AmrU3noLFre1jr1oHmN",
  "key4": "T6768UHVdLPxfGttSRNbZjTiTVGsZJttXo5cBqxZfyr3s7S83aNyEX9R4o8NDZMgAnQMjgFCM11Xp8XVt6UZfTH",
  "key5": "yqg1mjMdDuaUkyrx7marGb2v5BCTrx92JT6kc7ded6Qgf7W9YrgjSoan4MuERk86k5Bz82zuc2P3fNyRbhfWnZp",
  "key6": "4ni9YK5jK1erExtgx7UwKnH6m3NWDS9P7f8M4twAffbxyCJo9YXkpGHjZuaX4rMK3K7Lez21Eq6gfmZjVRuuZRu",
  "key7": "2E8HB9kQ2E8jHDRcnTL9QNWEePCFhnU8EJ3NyadbefoxiRPZRCQ5GWzL3htk2rSHyegZLnj9xQHw9bst4S8752fb",
  "key8": "2D4ohWMviYBFvykvKj89abbYMRS2KQtgSbBQ9KH27wHdArao3Je5XHE3jpftXJwRL3H9YnTmXssUCvX4dnY6PX7P",
  "key9": "4W5dHhYapoHjDp8VA2dn3SJJLvGGSM2qpeZR7vGSSKFHAY3k5ENoGg5Vk72XHW94XbMX3tfFT4RDhbxRLgi5fBx3",
  "key10": "bAgQYoT6xiCPc9aMR9iaew9fQybJvRekLzz7U55afxkP2vq932Q8wF94U8gKsKH6X9VLne2qFq19UK11zK1EZDh",
  "key11": "3AEuaDbjQJiXViykikgCg2GLmcxD4MPkeqJezY4BrcGdqQLLkvTiJ8xsioVCRp2xkuBDeGbMTy77g8erKpUf34A5",
  "key12": "U9U3QPL5z4jBPsqAkzFPzurUhu2hzQCuJaQFXW8AauUC1kbHJgYiLUsa51kE6txziyrZW4xWTMX8XwpUp6ba3jE",
  "key13": "3VkX4xTTLNt5jZo9ALHcm4ZQshZG5TXXQshcfEpjFPBAKJ3dV6ogeTrKXj8oDWce2WFfqhd1NtdVHKP39EsBQbD1",
  "key14": "33iLPqUEJBNETagDRsDYQPnZp6kh5VsibiqXYBBmnVYdFtsE1R3JoVGdDvFWauGX5uDGdu3fRSVi91x6qELBxdxw",
  "key15": "56cbc8eRXyeTtixCFW3AGRygRWVZFwCKezn1QKLh4jMdottZWddpMShxdV2iE29nnQNADbDesrKi7PF4bvfXyUGf",
  "key16": "3Wvj7tWYTU1eBRx2Xn6iBsU9k5N6P1FajBeySHq9TCEcMKsXbBiW7dQJYJm6T1PcnmhcLv4ZReMeiVEWPD6R16iT",
  "key17": "2GinYRFWYAGYN3nyxDrqzfos8omg8hARgMm1LVjLD9kDJjHL6WcnzyungVoQDpkNgLFx7btUFhPHPz2JQw9ngki3",
  "key18": "4R2FdGLKqZPaSd9LDqiYeTPtAw5d377xY3zpCxaJ9DuHytXjWADisN11dcmz2ThE6JRQ54QrS9nDs6HqXNtxV3rt",
  "key19": "5GAA3zRrc8HhXvqHggdGH7eB4F3xV3LkqBkxhaq3uhWNkfpKo1AgSyp3wwES91dcHmgmkLEbDGsVSTWyMrDeQUkM",
  "key20": "2r1gE9tu51ZhGfLxwt1sxDjAFoUrBPpLpPJ4eWPhCnC7o12gdzfJ9jyTnVd8q6JxWWuEobRUTirSKqY2sSURFpbN",
  "key21": "4FjcEkcYvizSAFZiF5JQ9w6wm31gpvasAYiSP82bNyk2RJDgG5hDZ8Coo4BqiqZjShbDKrBeaHD84u1B2ZmG4ymb",
  "key22": "5fXonDeSJc8nwiHbGjPDkUS2xqahDYVD5sXEsNrCNSHz1ii7hvvTzwG4j6iMEskKh7Kyvr7RTWeansoazJYxinGS",
  "key23": "AHvjy9GnBWqUXJEnRUcXjkQkKwnrNcFdJERf6NY55bjNKQBwR8srS1HaQwoQFZUaJh3MxexaCZmFN5gWgaJgrbM",
  "key24": "51DHqBwTDaSnZRxzxQ4wAJMGh5HP9uwNKdepwT9ScDYrhr9C8XkcKgfBK2dC6j7cgtK4yvxJCW6nCNNJ4pKie3oF",
  "key25": "2ip6tR8nfKDCU97tNcMTJAMm5c2FHC4Yqqcr64PnaRPAGAATfdw2kAfZbLUF2fBejLyfW5WoaHfJHn7uUEB6pmz7",
  "key26": "3LecqwVKHyEiTRv7ryZxdj5fZU6x5wcjYgAnCP7136pnayGe5qQsK4xQKX63Vdc4cm9jrs4WHqFw61ZhoJHQQyaj",
  "key27": "2W6HvNaQNkZpHE7Kq66twNfns74LoozfnkLvxkAiGsApzLDPjqcp1BAPFHFMDUE9eZ6zQD5bikbgL4X6SgSqQtSu",
  "key28": "49xXQzUBYJ3QX5RLKgPQvxtDimKFc2SeqDR5eJ62Mu5hMRMPghhpDgyhJDX46M2KRcrXRo3zER7G4FEd2ALazSKq",
  "key29": "4uk3bc8pJh9NgRPGTV5VN5cE7tjCovr1zkQz6sCd9Mnn1jkW9LXorsacGzkYLwxy63UGD257pQL2QJuYhdQsXEMm",
  "key30": "C1D8X5qZvxgzWGyuAJY6z1bC9bRbrHthcdJ4zBKwnW8Gb7G3KV6xYDyLVBm7nnWJgL1oFFGc9FJ6Px4k8nGFhYh",
  "key31": "3h3owbuu6c1p7oHK7F5A79JY3vFLniv8yKTp2KZ2L4tD6kGSWoAE6uShGGzs3GYVBp6qRhnqQJa44ka3FVKGizin",
  "key32": "8kbNjFCXKnTCKZGdLULrL9N7RqJg2P6fZ44L9qyxD9dTHBBNTTeJypWHrivLaPM4wannneWXmvu9okgjuhqLM3S",
  "key33": "2BsNVaHvgVUB4afyg48z67etZ52GyS2qJGStV8VUYzyCNcASMpJ8tknH1pEK1NBpRbZ8Heauxaus68H4Qx1WP8vo",
  "key34": "3VvirtEj1zbUnu94Ya3qgUH3kQsscERF2tJMme8y6izJX4nsCBDspyk44KBCdSZNaMc8fdvSgkuxTyae1UUws5JC",
  "key35": "s5eCX81aS9EsqeA1QJPaKpLjka6eBMp1VX3PUQvctiggr7PaL7UE322okdENmcjFNyuxUyZZAXkd2DT3Z9ZLasJ",
  "key36": "5BgYLfQdh2mrMHLKLC1k9uFwxdczkYEkp6SZ6rjjmDFTqRXYTcUaqHF5ntJaXqDkwo3gTdZ13hESA89NCpp1Ccxu",
  "key37": "5XzrwJszR96g3bmfF2P467qLsU2go2fbv42SNakUjPuUgr5YfepR2iv7UxKQKaAXYQASPpLH3toxoB4W9kkNoH4j",
  "key38": "4xSW14vx9hpW6ujTqW5KkeS6QB1hdyLXnYUqUEheMUEPWPCyvausAQ9fyieayvz6B2gvgDeiqTJ56BDJQoJCf9kK",
  "key39": "5YEtotxPGW7iq1rEdMAbWefxQKeGFkXP6o5c4a9dKpqD9HB2C8qSDdLKSpb8XxmvBDhZjPcshmFL6CamKT3f6yjP",
  "key40": "4vLMMTw5VifSsuWb7Ug2Q8ZW9CpDKoBgXkBy55mKu6UpXaaa3mJBU2fWxiogezSDcw4vFL8y168tQ5W6x9AMKZB8",
  "key41": "46sn23PK12dRZZHV5TZihnhPq4jRspNwQwtQgZfDEB914zH2SFWXVwmc3CP7jbncXRm3XVVaaY6FW2a2PpVYxkjj",
  "key42": "LbaE8ZQv8JyBP9UwePCV9MQ3XtMQnz5HA32PAYnHUa2r6Xn6wExnh5BpSDuktkPUu3rzXpKSbm6jrjs9CDpMtKr",
  "key43": "4KpEdFcJBLWZZghFZnYCbJDYfFreEzCWiZCR4eyqoMt9BFDeQbHxW9vdBz1b1TVe2zMwEDbHp6DgDfGAE1jtAk5f",
  "key44": "3i5mACy9HA25p1ZgnMEzcjAzL34BvT78N6grLxAbSohD41RmybCyW6b9cLBX6AcdrGjuFej999xefCod1QWxLQrV",
  "key45": "2PpGLmko8Y8EXCrrkiM2VpumRGfadGGMwdaHgJtpUXVfoenb4kHEQHJtDJXnWkXkPgUxTVV8TVL8UiF8xxZE3Da",
  "key46": "2aQo8C5su9mQ5HrtqDn3dBdm13KbXgb96JuDSVqR3mPps7oJBbusGQoNNmknAgz8Rw6fviFhgd5XRwtiMw6Re14n",
  "key47": "4QnMkCY6FUdLbEw8dEQrrXuKqN2V7tZoc4xu8NnoXxSpKBYHZ5MuZXnyT8MYRKvYGkRfoHZ9ijFFc6ZpPmHWBJTA"
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
