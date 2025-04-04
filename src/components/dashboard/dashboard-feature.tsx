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
    "2F6dWmmqnTxD8Yjt66yYyNbs7RXvukVi1MMpyZisNxqfznNj25fQXZHttc6HBQ83eDFikgcSHYuaRoAPmfqrNvVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1LNbQv187Vsa9EDnjrhjKGfg3sWuMWRVcsx34Ubx8WCFvbthsz9b93D2KtGdeUZyXLNomKDfYmqjsDjJjpRHDn",
  "key1": "7RMHzz1j4asW6LyARiwSvpmGsRWq4zdxpKepcePKXvXAbC7RYrmArRaSxbefe1JYTGirUDiRLMYnpasedMHMc2B",
  "key2": "XQBrB1C7JAB7v1DLamwDbrSoWYsNcpPTqxLBUNv5LX6zmQLCNgwgFMXqtFwAkwithRdFx4Krp5c9XE7Zimd7Vxb",
  "key3": "2PrPPjQVvHD2pdxCcngpNWEfAUFnV1nu2Xk7eohqyiPCqrxMDct7Rj61CjCqoyMXhfCLdVDNdakgpxA1bKTofjXQ",
  "key4": "kWQ6DXkK8k6NeQ8Us6X3sK3rvikzv2HgwV9r7ebYrZTQAivAQaWDKDVJ5HYGfcuH8pNcgxCg7k3gp9dfrjGTYDy",
  "key5": "3h466mUP4WgvinSuuC693ead3BoEtfCTHusXyyyDXb4tcyxrDGk3SowUSXcga5CYsgnL9t9jznnBQZ5aCxcr3Y5z",
  "key6": "4GMLdwTBkokdqLAQPRed8Kjrpu9w6xg878HH5NzCXEQYsMt8wQ6RBgZD5FuSVciWHJtekwCejCtnjjcs93tEvMcj",
  "key7": "jiKwGw4JEGgHSYwJikEVjsx4eYJWweTTz6FC5bxEbBHzA9KcykxVuuHA7c9saVgkHwru4HaxCGhKKhZ7jsza9V2",
  "key8": "4TSXZkXGivHkC9T6MhtGWHsgJ9593VaMPxvkxLBmSXxxVbnajUPgHDUYfyUP1ZkUBtMju44wtnyzcbBHq867MuEp",
  "key9": "3YNm2RuGSf71Pfo6Tee36RPsS8uiHFXewsKzqCcGpGRSPx9dD4cpZd5RYnEduuks57P6yHTeywMwhUcTZLvV229f",
  "key10": "66XNBTcd49bKj5SgJVHzQWNM6BJaeRqv7szEGVrd5F4R93CKu49gx2s1rfWuqFfgyPo2yMUWjik7AQPd7JvRpe8B",
  "key11": "4KzPKrZgLHXJ3aE8wfmwMzZ9hF4xwxtgYgpbiHcM5Hwd7jYZfTiCViRLy4JzkZF2DjxPAHqg6AvvzNjBk4QSzxbe",
  "key12": "57pSQgmFBNZQ51CUMtQcTdS7ntXV4epXu7aQXBuXeRxLk6hvNX28hVvUvEmUMUjBYE7mDFqLVZxTenMNo5Bezodz",
  "key13": "gTDnYEjtmbmM2M8aChjEcJJoxMS4uvX571CSAG5MbCQpmDyp4kitzyM4hjtfsPhkNJrpk8Cs3jsCz7GEPX7aVkq",
  "key14": "4QFYZYT1Jo3SK6TWRNLrSAe6aiEe19ArjjLcBHXH4RsVhRyqkcEM2nT2LKtP58V6Kp7dJU5FWYizV8CQwEaKpavu",
  "key15": "3kueHrzXisUVqb8yMPePCcVmspHQ1AYmJHGur49BZcePf2WEsEHxooD7XbD2xYzq3otZLHQdBCNnLsSzMchvAFjj",
  "key16": "2Y35j4WxnXgBhvW4fBTfedfTtBzwEk4wDUBHwpkT1Bb1gurF7ZrZEmLsFiydFWrUuzxARF2dPWcN57DV7bPZM8Dw",
  "key17": "61ezPnvWamUBcmRY3hvjNznUK3EuYxrrnxMRqfhTp4hsfatexhaaUZj4W3uoLXwpLTeJ86QBxW3u5wvx5tet6LDB",
  "key18": "5DYV9P2oiRKmhjQqR93PtC7DbK5ZRWSmwbJWj37kaZgjJD5iBC2bXaHMRZFmexskyXND2Es7pB3MxnPghaxh1bwC",
  "key19": "565DRaCiVvRrszZrGaNy2cD5QGXp1roXSVUB19SHJdcWkPWG6fTVpCSVyhBrZAfb5pPsAdy9RaS5Ut6sAeUnLjuV",
  "key20": "5zNJaVdyKPC3AupuvvXbAPxy4LuRcT6nuZrr6RJDbsmqsnvGsmJnGgnM8ryQ294rTCzZ3xXJktMFe5bzVxsfrphC",
  "key21": "8qiRqga2SUuu1E2NVKzjp57rKtqp9VdNGvGFBvPXSEamrdbJzwEJ7TVwEjmrmLaivw9K7jxbgmDGu5xxggLfkQ7",
  "key22": "5uK9r9jxmv9XyPsAeh7kiHvsphcVFqV5rYhdqEjqjuM9dAqn9t4ZAGuMQFrWKm4Qr3D3hvGZtBS2WSZFJsyh6Sp9",
  "key23": "32vx6mEf5bqsTgq5VTTh7U9kU3Bjgs5iBVvTH6xyG9MR1tUK17jrCMLaDu6iT2PWcB57LKxocJJLVPj3FuyWy9f8",
  "key24": "458NEiwJf7XDn8Vw54kY7c3f47LAbM89EXrQPjLp29s41e4t9UHZ6WqwgAxm4GEuzvR5TF5KxMEYY6MpWrjEGEos",
  "key25": "3q6SbaPMAwCyTXAy42oVW4b43z5kikme6XW4f7gi4Bi4T4rf8AkWWHsr5XCmX3SixbtmcGeXVw49ttDCXbWqFxEz",
  "key26": "2WThwH6mBynP34rGWGxXaFUC4ofLaRGkfEmUwKfCtTQ7mwU5EucFahmC3kKHznUBcmLVJ22948rDvKskgrn7WF6Z"
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
