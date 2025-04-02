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
    "5MMioxpb69fNCDANmrUV3aTddzyd5KTAy6HDnUfJxmGPZtFsPb1gFYJLLaiamJY5Aqezq5mgzfdAaWJVEGRjUHGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3DC1jpgxrgv1PLeZiVgBRXTV64oQyFcRYFavdayZSa6PXD63ttFqqCo34SLNihUH7VPbFmXDKSLki11Bc4xUp3",
  "key1": "hyqgoMddZmVRM9H7J3mZ89tueBETWQ2truwCXGjam3Dsnt4Kuf28BPpngx5cvDta4HpgnwcLNqVYhoBGJPVWDSo",
  "key2": "58Q6GudTAgwQKCGUi9gNjjrQJeLC1wPdHcar7Nd2dkXNnjG4cnmk5WpAbGk8PXsbENzNg5m4b4NmknzB3o9Lz6bF",
  "key3": "56dobcR7nrE3e6NeSVSsjUzSoZSc9oBQLcgh6416hkX3sefsjYVV9H2WrJCS6BfjwnvXScZCg2fdYSEZswWyWj14",
  "key4": "VfgjZeSL1Ar6asV2XT3cqd7D1EpRiDg7sr1VNQjNKidshfVL5QwahXNo7Q36r67jTGjBBXaknSMKGYzg8u8g4tr",
  "key5": "3LYkSsgDLAH2L6MNVzuPRjpWqMU9bPCJ1vej8ziQK2pSa88MYNwu1RfeSoDGRVYVwiB9cTDr9LBtQ2vHSxphn4ZT",
  "key6": "2vbpZZpb2ELCA9wJ4mDYcDPBNzHFuZTKXvXGxbkVjzXoVzc352gUchaYogJTk76JFofzQmZnXEyAKbQAN26p7Zax",
  "key7": "2CzUFVhFeKfZUUXA6YrPB7eMioLNh7ad2RjMVLHSYEnJHobSUaUrTrmYKSWnZbxoegXwSveyLvy1HF1hLdZYkDk7",
  "key8": "47fRuTpKzfjx7Q5z2PqnXJi1aiDzEjSdyTCsDvhfKuW2ehZj6dt3YkAz4pVdoXPQvDUWdP5aYKfBNLneEjTL2bMF",
  "key9": "2HQoUGvhWMVfkJy69yAN9xTormGmXvnHBQW19uMVTi4FByXJE6fv2nLFkGCA7uFVTPKrBBm5fAaYkHaA8iBqXwkX",
  "key10": "2jZ88Q2foPhXihzLwGdeuQXCVZhVK631Mn21PkJrGzFPrRLQJpPqDfRtteTwsMVYd1K1wvkbYGEKZhiMrABJp42q",
  "key11": "3KWbmM6z6td13hArmHA6RDFLaaDe1LK1A3czPfkB9UsTfbdmrYiXLtFqr3L8fqCbxxXnHbMtYWcnxjug1rFPc7CF",
  "key12": "4NKAutGs8Zi2nvYM4xCvPVExjQur7ZZvSshaRJcFqxJU1TBhwZ6LrchTztEi3k9sjMT7iJxx5WV9rQWgu8ziQWKM",
  "key13": "47rZQp7xxzU45WrN1bSSAkmgQf2iVLcoEnPxZgGpXCCriHY2DoDkZp8htYHyF9WQcEGFQkAeMz26DVFAiU92ewhm",
  "key14": "3SNknTaCUJFphYSNYpuM42AXLY1kKM9UaAhJ6jdyTkxiAU87uA561XhACq2MdwXkNmw19PAX8eQDDNwtM5nbm1pa",
  "key15": "35jJtqj8mnSUFyiz6RJSvZNwyoFAzsRf8PwawLdiQJo1ebRqEe4irABRxLcP2QjexJ7wqoyaadm9LawrxJ3GQrLE",
  "key16": "2BzAPmsGWfvseE9P1hauS5vNg8NhZHkEuAe92ZXnZgALnNmPMJewDcRpLNzaDXzS4UuJjHWpULUmifeXKEWm7kmX",
  "key17": "5XGDAY1VP3uYpCPzrim6nQ7BQQjT3W25Thz51eL3RQLXtzi9Eyv44joXr5Xx7cMnvNy3vxhJ1dcn5aM6PPKP4QAo",
  "key18": "2bmtQTJKBzuf6aX4CXr6Mn75tFjXN3VWEMyKce5cmG6BsAMQphD41SoaCnRvvws2wEmEYUjA23ta8ABknVGrrtn9",
  "key19": "2bu6hcWCACbE7Ee8qCk3KiFxfY749uYuYS4cACZnsucsbqcp8u3xZTcLpF3bwBbX2av2kjeArRtH2JwerPpDJUoB",
  "key20": "4SDnNejzV7ZGMdMX2rb4592j1drQhKzefPgjwLzfbdy3hvu7XeW2i42hNNmh7Uv2kiSw7mRF3zsffzrpWXEYneiL",
  "key21": "3qWLYEQ6M6HiZ1LYfmo9wpDj6Nh4CbGD7doa8Ti3t4EnrgAxniq42udVm8F9J2wWJuxbquT977p6URmZHQGKfkdv",
  "key22": "3zbB1hTWGziWsfSGkYVmfrtn4zC52BKRfhWARg9trpvrkQTHnUqbYhDkuC6KxN3cpdzVuahk16GspFSyJVnyByLb",
  "key23": "2DG5tWttjDv2nYyVvEKGsNeHvs3iiaYpcX1HGBVghVfx91nDYZQ9JnEQABmHjv1dQvuznjcDwYR2N3pS7UTx3itS",
  "key24": "3vDHQtRCmhmsLJRjbEPwdFvWVQrEH3iV3oFS2Hek3e9LKgr4gFzG4rTmwerfvkh6u7G24MU8LfbutL57pttrxYsS",
  "key25": "2ZHjhpqPycRwKWbrkSscY61E1jRCfT7veJ7WZ5yuSZugG3bWzQeDcNcmWxWN6SCP7ofEdQfr5EDE7UpCGcFL4KBr",
  "key26": "U4UPqaU6CJ7xsxCVcFU6DDsBnZvAYk8znuCVxPXM3Rm8uTp5VvY2wGwBRCESNzBP4Zga88Gpc3TLmFtRZ9zAwoh",
  "key27": "4npajzknJgaTgCc1GE3GMkEdVr3pixv8DvmnvnAkLteSiqDSmUfGZqLZSMstpM5q33GpJW8raSYs8XG3AvQhi8xJ",
  "key28": "3ncasrN7Uj1yj859nZtEC4no4UAuCXhvhvqrSKzAm5XeiZGTUUewYewmUfL9NidsPXFotjyF11kS4bqeF55DdJEJ",
  "key29": "57tiF5QQgAtt4yn8GXk2Q9PYrbp4T8XVn9jKifPwKiesDb4DnUgTjaZCzHEfF1oM1FP47YiDSGwYjfm2jXXMw9Vs",
  "key30": "4ppVWZXkb1bELnvczfkUUuQptGpVceC5fTgiyQmASzcv5bMCHpyAY6ZezEhB2QmcVvWJ5TKSkRaSnZ8jTJxba25p",
  "key31": "46y7UBMmR4RiZZVhWr1WBDDAjEkxE3bceeAhF17eAhY3SuqnTXqNwyTvzKiNNrRysFUPFM46Jgg6Drsp6RXML6Zr",
  "key32": "46qM7PRfamptUZbygTwGaVUfcFvSnt4Xo4N8nYvDKtesY3yBRzqLGQQyYLsBdSfNkDV2eqaJfXB2KE4KKVEyth6t",
  "key33": "4pcnMB8JGSNmSYc8zUzyvB3u9sEc5m96gV1THMguAvZm29iYbbLwy5DpD9cPTL6VPyggNRQPtA4AGjHiymv4iYBM",
  "key34": "m5MiLJvnJyu4xtCNBk7kU1w8Khfen7VVG4y6zCWhPQcCp5Kt3AFKdujBeu6DD23tNZ1u8cKgiSW7DhqPfoKEzKE",
  "key35": "24uErsiSGyFN2RopHieYMjq7rrVHWiUgoRoDFAFBccgvK3soMRQveZjFskDLB3b2fNU8qaFLzY6VB3Kn2RGsanvV",
  "key36": "38AqqPERUm9QCawDNCCfyu3mjQ1cXUEPFUmotavNEcbH4Hp2Mx2NaP6zEk5fs7CoJovxZmUmEAJKQyehvNztcSQR",
  "key37": "2bYr72N4v9qybDiNqqfP7dVPRwTGe5XVSkLE4Wwo43uVamqfVME9fj42kBqEM6PzEKra6HTs7ppC12J7rNWwBFoT",
  "key38": "5xjhznWZ5zzGjLn7BMFfGJjNAxu1VBE6BH8v2DFSqH4wh9DqySfUnjZKiJksz5e2mhWq2ndK4DAFancdLM7LZ2yT",
  "key39": "2gdT9KxtcCXUV7k6pftSjK7g5vHFPiiU6kMgi6LVCGztsRbd7iCbwvyDeFCjsN4HddmqBkoYbQwuHA9KLyTPSiUG",
  "key40": "4N9obUDjeA4gAJbVjjdLWgvAmFmZAJEcm2frk9nwD6APPHj6q94CcRero86fJ7zXWR1RPEgeWv3byLnZzaZEkqoa",
  "key41": "5JinVtLjgdVxqrWg6fvLMXiY26dfRyeLemrMXVWrf54zYjcw9T4h4rTQkWeg7aT4rrRFoRiPBDhNALA9iyDQqxfY",
  "key42": "2y8ztq8RhW4e5rUY73wVzwfnn6oy4hifFTuMRv952yNjk2FXxFnppkSMNiAekNVXANQkGe7aiR2oq1ySbTsEE7X5",
  "key43": "3N6BjT6yQvra3rhq8EkXSJDA88NuYiqJeBDbGrBNKRsET8cu4EdceksNgiPzJSohvYJqhytVT5x4G19a5gGRZDMJ",
  "key44": "5L7KXMNht25uJQT8CBJCq12PgzEjyta2kkWbqZXgMr9zR3BNfWsPeYWPisDRhx3toWDoPRViYwLKhsAcBNc8qutf"
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
