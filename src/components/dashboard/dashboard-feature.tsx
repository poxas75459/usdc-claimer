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
    "CCepALwmtqXBxYUMxW7Yhh7KhZMCwfohfWZXCrG9DsxBA8keQKbYDEHmp7RZSxN5voCnxp5GDucL6SuECY4ihQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QVLfkGMotPWGBcVdayLy4ciydfzzyyobbDuczaPBkdsZFSYJwu8M9s5JEte8CciLCyPhwWmqxCgA8RBFER8AAn",
  "key1": "i6p3uJj9w6EzmX8o1UQckYg9qx61iKvaRwrrAdTNPV2o77indbcmbN3J5qas81GrB3C2RPse4tZEqQYNpDjWV4B",
  "key2": "26AmQEDjdV8NY316WtGPgrD5dyUA5s8XvF6d5JPcBsga2eAkMb9g7MRM9rua5BrVAVS9nrKANm1FG5cpVDA9CwSH",
  "key3": "3vLoAhd3uhmT2sk6vshnVoUXEV1MrzM98eAqMSN96EruKKhaQUZ3zkAY8GsRe359mSJ4VcPkbcf9pWZdmkTECq2j",
  "key4": "4nhpiUrjc1vuHtHKMp2qyZFGrZBM7Do7Nz3mFiyurskq717AEiX7EnXiPwTbnMwPFKDu5BdmRnTpbegCpLJ5RqNh",
  "key5": "wiLFdwd4jyqUUTkhKn2TSXnFdvSKj17jx2iidcty3nC5onAS269MWARwUyLCeNpKRGpyi8MurAAZ2jvRShGiBwT",
  "key6": "2xiJD8pmwt7ZhatqXwEvBDTwaChDJ4r4eiLWLhHoccq8p4XieFAz11urAVS3ZaXEDnUzg7mF7GutqH5FFZF5t32v",
  "key7": "5SZDtV6ox4gAJ2ryz1VCRJSMFFPYXjHB5u8gbRvLMqu8bdKGFLAz9mWiH15yxAfk9PN2TdLNaPCsLqAtTDuEkHui",
  "key8": "3UprsS3bDytGaaRnW97cwgT7yqXXbHRqPaGcg2Jeqru3eRHNsySCrVj2Rv5uBqaQ8rU8x7JrXwQKBopgozx7MZou",
  "key9": "2FkxqoQQFRrPcdadWuRXqfMYSvtLY1PJnERiWvsqTfo9vxRo6YizEAWrJQpzgE6SyYtpncp4HcqNNTPHNMc3QJbD",
  "key10": "nTFtvBEMiTuu1dH8awhbyjWLcmrjQi4kqMBz6cZ8moSpvztUoUx2Lmw3Um9VWiagpKFvTcAFF6cLQC5WrwT4zTM",
  "key11": "3JGJc7qpnQnKXPuEqttfQjBxc6RHse5BTKLDqtALgqShXfgUHfTYpnf7LugwRgjccVoWeoGH8Pz9wNJLvM1vC82d",
  "key12": "8wEP6fxGcorunbzdogAHc9FNK3faNSadHLctf31LZHNu8uxAAWRwdu8zkw7Q8Af3KMdbz5kPzV9rra47Q9bzaGT",
  "key13": "4m26YAfVPtZ6HYtZihvdHpThJjT3XSqr4cqp2VdEe125XAThConM2GPu7NeT3Rvtd2jczm86sy2amJNdBSvCqG2j",
  "key14": "4vpZS8RCZR9QVKD67KwLUsjgmk3xz2BYA6tb3omWopyqvZtBLRSTcYzNx6AWDzpeF1325D3SYB8c9zd1axeT9qy7",
  "key15": "2vEixBorZZrFzZfsotgy7rSMBwoFhGBNW3YHwGPK7eVa45qozsC5z9gLKFDoJ6XMW12pjS5FmSm9Z4wQ77rgexas",
  "key16": "46VYZ61qYgbmqht9byuuseibSuSZqZANJk4Ue8zofgKVvW3MB8A8CXiLpbaX7zK1zJx5XfH3bWQCKuCjQLwrYtKE",
  "key17": "5SziBcdVoMmtkc6K9vBqe5f1WkZ3gf3dDKxAzKR4aYdiUnGHUbEdRs5P2x67bWGTPeHuQM621ry1X2XjbSbB864h",
  "key18": "4PVJ8V9GH6CewpyPez71YqMzQFY8GLoBmJht8uBQ8pQEpiK6njgwbgAG2R1fJbhYePCNyio6u4uudvq2pTxAZarj",
  "key19": "5ZBJftT9jWVKYMiytp1vq5H75ohmRsRPpSt6odpNtWisuDXiSLPC8YUiiVg9rMgNajKz1DB5jT7mN1Nw3MLDk8HW",
  "key20": "44f4TqyWUwoM4xAeaFgr8jZAWZep65GziWGspijPKySg4jgW5ZE8ADvqcdozVGSJKgShN8fJSN8wo2r1fF7Uwrjx",
  "key21": "3mxjdSXZP7cqWtpFkVjCVucgBzhKRgnACXpBPFRDXtg5pM3hVSpfmWpuXENXTvbxTTYgdyqYatJRDTJLukpjxNYv",
  "key22": "62qQti4ufkbBoTHaovsm2izE8Q2DeHFNYvANTcum9hNNqFjTdpX7ZmSCHg5XbUehdF3hFjTE58it8i2Ypnp5GyYV",
  "key23": "411pte6kRW224UkzB1TJXoV6VQM1ExqGxffNaVKr1NE1Yv8Hve9Bz7C9hzaujxgCuNe4goTJfqe6gJV8sUv7E4zU",
  "key24": "3hqtyqQgjn4TK8KKBbPQd1enziT63wRKcb1TBY4qvcMfbTAxMR6A2gsbmJCdRFcJvNvZxGJZGQg9CEgHBERrxTD9",
  "key25": "QyeiojtFGoEG8ZPPYtJwtcGLfMGuExX6ZBy1vWZkcTUD22tLd7e1vF3pzmDcd8XAuc2jrHgtSbeyRWAbYWX8L9Y",
  "key26": "3pAVh1ttvqXVVLo1ksGVXzWdeWygzUqvniDCUiN4phNUafP8VTtq7fd8ai7fvBecbvsg7TBadvEY1kCBBQneV8JJ",
  "key27": "44v9pkmomTTDNNBQ33p5oqJ2rCRwi1tAWaPNVPFRHGmtZJ6m4QtugbPAN9H97DWFQALtorQzmsvZYLVD9WDTATkS",
  "key28": "5eE7cMbtSTkXUSt3zw2p8k6uCzGT5SSfMfcKcBMqZDcDKagPF5Mg6bdkjKNezmbjNfDhUJJ8jWpxpkfjE798voyX",
  "key29": "5AiPgNFTSuzrqcTfW75CzeCHeaUGF5skwyYzMyKFcY5jpS4L8tB4usTSXsZzDGUwF2FygagkchN2H3v2uAcfpDDF",
  "key30": "3rzrwG8faRSYzoJs23HAMZXU3ov5gnvPqZYnHy9k8Edd3U1Rv4rWE56qfthSQWBZNACunZrcfHTXUsZKbfEkEd32",
  "key31": "YVQYKRZXpUZLge5psgGgPKYWvrFPryveV3rkVM3YBgeENPvofeBfWK8khGUkjWN5siftiTecYfmviqpH8wDWyfa",
  "key32": "3FaiAZ3f8LYv3hcwKkvDG9pr4e4XPDvn7twHCZkdWceUVvCi9S8PTw4cSCiSNCK5VhShpH6KXgQtVTRDfkfXBvwg",
  "key33": "5QKgu4P7Q7ttoGmomsw7trxKR7yNS2DKJ2bq7ZKzdVjdjg3Pk2F6LT2KokNHCLfyy8vDkccphBoe5mWeidRS6GaB",
  "key34": "48m2b4XX4AowNAL9eEYw7g9q1aAsdy9zCrpaTqFXfewsH2txd5RfxBvdpYEkJpj5NwpbesgMv7Y3jyRsDq2u7RvT",
  "key35": "3USRehTQLKipZMrw9gz9UjJdxsBkDRW7XEVFKFU8EwczhUH2nskpXeaNfZbK4JBCfbnuEnvJRZvigubTj8pbnTwq",
  "key36": "mLPY5mpjKNAM82VT3qGJ7vLHGStAL3cVmJUGn9A969w8zQrqLRmLFQzx6WXXTSReQd59X8A74WddtQmXbyhKkGN",
  "key37": "8HqbzBT3FFzx4FZfSQKYYXuoHQtux589v33TVEDuzhY8Nxzs8CrCMu5uFn5RmcabeS9qaed88sKhznpswPFLGUQ",
  "key38": "5ozpUE6PDucKEMWYnHpkhzJEGtGGQcv1p7Nen7dymkE96MJwdxFkSzDZ6rPmzfGRAjg4pQQFQd9yhvcNmbFftG4z",
  "key39": "2neaB6KVp9ZPCnhZEdEYVFbGNySzPasaVRnGovb4BfBNK2iU2wjYmzVAdAg8QTqL52piyLKUW51VojfwC7GbXaMZ"
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
