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
    "3JwUnJbhhjzch2QRJLYkLvQzdNhBYpRXRxh9q8LcVycskbaAa5Kc54GQguTNNHzWZNNqaXDGe12Xp6FsAnxHULhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrCpRVHcLHKrBLb7sFDSWvUw9YSahLf2j2bTPdQwFLYbsLixaSdFLqRmSW7FbpvBbg5dLASRSmxai6t72Ejdaw4",
  "key1": "2XyUg4Y1kK7ABH5CVS3b9uXzmHjUrzYJHg8M4uiDmd6wNp7cBaNKjgHdJBioh4nS3p7tgbeYHYBcdunnzyX3xizi",
  "key2": "5nnHcqDHDRvQEam7wuJm3MjNoytKs8ZoYn6e9BhB4bzDnNJ1Sxv2shCyByR3SctTKuZjCYvnjsFJXv2XfR9hhZow",
  "key3": "379rEYXLTjVtmXfF3rAaWcZkM2n2J1PxuZWoEbi9tjcEzrrVuQzN9NvRxPJ2oviKrVNUxdZgeYL8zf4Ptggtvo3s",
  "key4": "55jSit2iBoTxyNUg2q13rbJRUttj31QWP4jWNEW9FfeNrfmBK5H9DNSo5tvPKHBCXhb4ySCRnnvD8zZNmyu2AEUE",
  "key5": "bMbbVUR4RiyP3NtjHvsrUwpygEtgfoxJKNjtR5WaSsSVGbgCSVEg6HoBz1Giq6UN7dc3qd3VdSAqe7RN1x9HHoW",
  "key6": "2fTqQ6XTetxgkDcrare4kythaLCuPSUdxcramJ2hgkzJGRon74o5gSu12tQXpY74Y7Nv9sEwGP7V6cWTTPq8xyGD",
  "key7": "2DpF2KwPZw3QcrD6vbN8a9QauhqqeWGrmsybm9YQfbxx1Z3Qt5NhYD4xmciepGKEwbhVUVKpXc76pr81ar6bMxaG",
  "key8": "3vDCio7rJqkMN8b8XLNik7DtBWfbRoModsaxqrQnXADiqbAvXR6itziYA9AzX83UYKwXcnD8brVeWEyd51vp9qZP",
  "key9": "62YDmQfPG6EsVMpVUEZA2ne7Nn1vDasg1niPbhxd1uorG6CieWbbBG9wxFNELpgHhkXN39YfHTdNNAXAGqDHNeLi",
  "key10": "4jjVeaaWENwgtCq3rVYgXXTa4F2EHvTb7Eq5fPdhLbSqPgALuyp2G4fE7ryogQ5R23buteYkSM4xbH961egxAUM3",
  "key11": "3iwpEN1ZbBS7SaYC8gmPuZskfCvhj1sj2BsjCNq2UEheLdxb3N7uvBNVNVZCQdsR5Fsn5xcmVkC2LexmpDbgj8V3",
  "key12": "c3NknF3XB5i2UjGN3U1YzdewJF8zADgrZYgQ2WE5Ymy5HboUyrChHdVG9n8YvvDHmLoEuWWBGWNs3iRhqaGFctp",
  "key13": "3JtaEy1XYRSjYwWFFvdURuu69PdYpPUYGadcms5eeeeZeuv1BhUqyximSiucSLER49LsSV72UoYoJxPuvqoHngmS",
  "key14": "21uMiRK5jXRk96gBvXVaA8mRMbDdpSgcELUvSQUrknNQoNeuhxTaFNTKxTiY5mF6yjDYDz2uoiZCzLAMvd21MP7X",
  "key15": "4M2wd6vKZuJrSSxFHA47hgfmyL9kK1jjkDyBs2ff8adRdqoqdN6knsaMsMx1juVR4apwfSFwbudwP2kmGy6B5oes",
  "key16": "3gBLwXgnvEUa2yNA58wKMfzCDmCMo2XGj7HETtiE8CeEzHskCtXT8TMX194CfpL2GanMpagxBRt2YwrBpCA48stt",
  "key17": "23FKCc97QxVKGi5QCtuThPHhPcbrr5FDYRFTtgJRT4h3pV7ocwyfbwF2t68eoVFNQVTt1CfmdVGD3RAaiytFX9WC",
  "key18": "3Fe2SA65CaQh86CKzftgotEGsHGRZAMLjJKg6GToTvwup3586EM5FDDVo8nn567eoJaXmLdBk1PhDsrLDtXiczQA",
  "key19": "5YTPqrh5UsMjQjuQU26N2ha62yXWR2vdjVT1nNBLhLEDuLtCTts1BVGYi6NB3GUvLBXJ4Zg6kAbRdAch79c5w25X",
  "key20": "3nfs4W92Ls36nTH5TxseZPBg65pMu8j6zkSyAU9qex73fAk7snyJLk2JEYoTxz5pDUKt8YN7tn9EwsNBqwfGJdRK",
  "key21": "5rNKa8dNDW1TxoyXuRfRnZVRMG4SZuDVoEcQAEszZqZorGRbzKpp7aRH8PGKqTAvCXSXpCvKNqqWckyqVhFERNps",
  "key22": "bzrkA8C3PVJ9TSN3MuTS44K1wEY26tQzattLqeTaspgNeRpvBqrP6XRRPF3frhWQNsmNTMCzAMujvJ7wDKrHFNT",
  "key23": "4iFA8KTQqKwZJmygzrtKmiRzftqV53KLg1YzmWfw8F2coS4HcLC9nHWNiVoyW8LDF8RGhumLfkcJEYB4NyGGc9GU",
  "key24": "5Za3eyczpYzpAV98YsR9vftt7K34HmVcmeNyRgnJbo7EdFyQ2eQC5oiQUhEqGiJAc53sVvbXb5Mhi3CYojjPTFvy",
  "key25": "58CYFjVXBpUvM8pbsXY8eT6NtKLRrrmcDY4YCcgRBxLDqNDTq397GytHxsGU4cAaZvoed8R1jX5MThWiwDuyqSQw",
  "key26": "3ybmZxmSKdQFrH2asmNy7Upa42MPEBEfW9d3TsLR4BKGoUFurapVLtGnxeMnExeGhCD3g8D1Jk4xiFhpu2bKmhFG",
  "key27": "5pUkBsMWAeZSyqznEkNaTJFzJcNgLi26p3B5YL8B1ubrBNJn6TRYnABERR3hK3AzVHXtj7awu4JgHnyuZpryCN5Z"
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
