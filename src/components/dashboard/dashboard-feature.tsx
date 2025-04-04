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
    "39xXrbX4ZxAAmLFtpVxaLktX8YvTMsocNLX8iShvtFdwHan6qTrQC1x3BXPqAuyX2zwiFjDbCoAxjprtbQ5a4xqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qp9dUMcaabaQucPCdJQmrskvJVtXuW1g7fn3pTFqDoN9o4JreXrZBL3GVrt6ExbGzw1EiZTG6vYY1pnim5gUKud",
  "key1": "3xEpERZFwmF2cs79hSagTBi5aipbF1ZvMAk5At5dhXPgSK8hcfR7vzHuSwda27FyzpYG9kKHw7Vz3zWWVBVDHJBy",
  "key2": "bAi6KHPbPGbG58dWbphBuBkVNg57zryHvBkpCNf6GNq9c1ndKB62tzb1nxijiXXZ5q3MT6Yvy7PeekQpd2PwaTM",
  "key3": "2PEjoRQ2FHpkYsFSHjC2mTamSYG9AzZgKgXAd37NQAEwrczehWUnmuh2MXCK9am4zGRikpys1ZDAf7pnrNRZw1SS",
  "key4": "47pp3NanxNEtYHzrqjTidyHSjPDXfmf5zR6admZ1qdoyT1kgQqUon8ojQ5c1Yv6m4H39gxYpTyhzU9Yg7wpgN3i5",
  "key5": "3982ehB57YinZv9JGScJjNpib3HtLyQTi64YK4adr3g7K81vPrazYjRQNyWjNKECtQwzi7CLMG5LoGLi4H49V45s",
  "key6": "2ragyJYE9x7a9zeFYHiDDTMpCeyYqdR9WBjsoxEuvNx4jpfAfWMLCwxh3iikkdMp8ttLBhZyUpUZaWnwBnTVsnD2",
  "key7": "5NYpgGmvy3GQfuXeHa5WD4SWLmGcW3of7nNVc1gMVY4taupt7qckRnLhHZEWAmo9aLsXmgrLmCw7LZM7PctGdRrp",
  "key8": "4q3tFiDEtQTYRAhq8aAbdxAAWn97ZzJnDuN4t7E7rEAScnDMwdnfjT5ijWSajXH4ug2pdmBgBg39cmmiVRiMyGCE",
  "key9": "3BAPcMPaUvgvdPPvRQugz6oWQnebQ6wqBMN463XuZB9f4GsjxzE7tNZYGLsPP3YUy8Vn6yc5U8mfQFckux4eXN3H",
  "key10": "967sS95KijEXGur9RbXifAMGw2CaiDSUkx3Xcn7mBZTgCHPjRAKgk67kxSG2ALWMxuiw1fTouGuHoce3Fc9Xqri",
  "key11": "4NZRW7egC4p7Fswajq7BLtm4QYYMjmkdPtESzsoMLJzsdgm2PtGZXDC71FPZpeUk1Ac7rh4i3NzZFa1mr9sgJVgH",
  "key12": "2XLTkYdn3FcfJpuX5tF2BnccT5b9WYJzhpmMzrxg5JRGY7zWwm4zgmvkyTNQ5YbucKxDz3rxAEa9wtLBBcqUWxHu",
  "key13": "5J9Zbeui25zQKZvnP4QcqkmFrTQxQ1aTXTCsPxNYYC4JY9Z9roKfgArFtuEsAKhb7yfenmLaVGJ15TGHxC78we2b",
  "key14": "58ShNMqRXfuQD9rLZ89d6FMxyzmmKionF3qzZTTiyoxYE4Go2wxiQ17CVnvyvDJEJx1YN8nY5cersWVpfgxSJ34W",
  "key15": "6121LC8W81MABWvvbHtVXRraUkSWtoo8JB1URHMtQGYarE1s5knkU1VGk9hqsuUwjHeP9gMRzpWHrJpHACfBZvQY",
  "key16": "3PJMBmFh2md9SisgUhJgkFEGC1aeuZ8faeQZhukFsUrd29iAn5dXo3ieeUvt5Ymfsz7ZofySyWuu9VnHJ35NSYhe",
  "key17": "3Fqo99PBPFWZFB43fEveViEoXpXt1VHMqDtna1YxWnzSDFbnLpncvofTh4u7meNvAenAik5sgrABHw1eA92dF84L",
  "key18": "3dSRbPTP1aeBPyjPH435GhSvQz7isgH9FMcPQhkUDYgm3yYsfYUEcgHgeY6gJS53wgf2FrMviYDqJ3piTHh9pYWG",
  "key19": "3B2VdC8vfHD2uQzEpeDYMGVzVY2ad6VqMjuNqp5UD2Mc3eDTy9SKgCMv5CgJhgFuegvpt51h5aHMeG61cDjY4wfB",
  "key20": "5K7g8Zq7rvd7wyVwppptpP4RkR3jtvrzKhgKJn8ziXxQnFnsULwmsoeLqvLE61aQ8HsH62nbPHjbasbrSX4Pw3yV",
  "key21": "JSvhZMkUVtpzDMteBfYpzFYqxnqMTFFNXqDh5qi6x6TBhbnD7Qjz2dH8iuuuJBTGA8u6fz6GQna46a9yce3j4ne",
  "key22": "cM3TV1McZjHiL446yTUwkefQFs2rLBwBZJfwT69d4ccwNkg2dcqQ22AX1WsvQC1ovWU2p4ud8n5jrz1SYPodoHi",
  "key23": "22gj42aAwrZf6zXmVGWQy79bGfQcFGroLp85k6JXWvtwHZtcAQad5xoYYMA2G6qm8JwpywN2q5DUyK56t1NvEDfw",
  "key24": "3sffRbEHKGD8pHTVpbeumPXoxLRBKcP1C7Hs8Ycr6upPXHWk468M4GPA6HuXKBEXzq9tWF8JP728VRfvnaEDq6YA",
  "key25": "4ZHR3hAeDHrgF2Vsr4cJmRW7Gep2syobCLiJWyHPZmhZA28KU3nwd7gkDzWL89oWHgHeSV5y5DtcWJ2XcUyFMudq",
  "key26": "3ndRg67cfEnp7z4zJ7ppbM5vCaNXG4EQtLkXfoHc3JnDjx34Gweu1jviH6MmuFRT1gnuc4L3hxeAebPFhCYEx8Gu",
  "key27": "xTAzSeqt2fdqZeFiqsPJAKP2kYgUSVGzA5DFTWngH5nCCfQPxiNYbg1qaX4hiTR5R4EB8gGHbxAUVgP74ctPVWp"
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
