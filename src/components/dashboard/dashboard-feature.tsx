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
    "5eN6UjZrgc62eHhYwBvuBDoFhyYjsY3eYZrHNXzCyYZJgszdNXv645uapQPHpD4d5s4pqNVncfeqEhLpeMkm2v3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vhhUvdTb8h37eAKSscXeUyuBheA6aptdkwg3HS7Rd1s5Q6qJFXWDfJeLwbLEGciWUmqXRFCfLybBNPooh5cTUzN",
  "key1": "4u2juE5jnHCZYbzfc2nD9KXfHTiSp9SqbwREgRnHyyo4DSpHukJfkG1eHxKJAQZpAKRqd8B6aYzwm3oDKjwiH8DA",
  "key2": "4xKLhSxaqmnxa3W2h192qpVbu3aic7zmkNJgWRknSimMUkbeMBnn2snSaWFGYs512NbHso2dzGoM7Z1irk49pBQi",
  "key3": "51zZNxDAwyt7s5uKW1h6Wr6odADztAYDczFQrT5hg3d5Kyk4xTU8PtGWSjmgFyhdXbt6HBCHEmidAZEY9mfJ53Lg",
  "key4": "3Sws8wnrg5rKpbZtL6W64LHxaLdSgNqrRQfghLnzSbX3KTtWg2CTnhKn3864aazV4sJb7JxLnyTXKfA3URixU5fH",
  "key5": "4wp2Zjz1j18JZiC5KSNWB2CL5Zc2ZsbHij6fKM4Y9AjxADmSsPjRrr5HgdmvJrsLtxn9QKEWZMp6qAZZ8ZLWCFRk",
  "key6": "YvGZkMg3mPS8xMA6oLWmBtByucnSgjs2u7j2vG1NMB8t3RBLcH7aPAjd7kTmFt4anKDv86Ggt1aDXn582SwGjQ3",
  "key7": "66d9xGAC1yzjXJCzmmAgZsPK1h85M7ATVCmBGMqubvD2DbRXDDsUYJdYrEuoEN7b84ofFGX46faRSMb8dKGeg7Za",
  "key8": "4Q9TqqLGYDeQDM8cTioQFRYEvUz8zyv5sNK3LyriuADpeqP4rDyVUu1omBHUzS9ED3jYqdKT3NRLNWY35XX7w1PE",
  "key9": "5pm2VqsKqFby8px7AeYQy5GSRUc1oNN31e5PUKh5C152xqveAYnkJkCN9WGuGM6KUmfeCCGDsTREMGfXGsAy4VnD",
  "key10": "DZ9Au5LJEKhV9Jcf9k78c2S79YDMFsYDsgBMpABLHK1aJ4gJHuRiat649aoY41p5rCKkymrHuBs845ahMe4qWtB",
  "key11": "3T2ZbBCEoSnVjUjsRgwNu4tWjzVE48GA9osw1s4oW7cj1pWJFyRLy5pHPjm9P4CcWBXYD2qu87ABCGphmQoPH54E",
  "key12": "4Qc7AtyJMiNPhCBEz8weFouQGB9vp7PLF3qezM9VpQMh7PqHbr9dq2WUURSaWG2dJAkK2NrEVZhAgrxHNLmzGtHd",
  "key13": "2h25vSjEdWb3Xw1342TXSB28DkXGKDgwhjTdxWYuxeLcszVCKpGNYp592QTY94wTFc3h2kYhfmErrc3ovZV1iPSh",
  "key14": "2Q7T6a5FYhyikjbHX9dXVSgQeVh46EdQW4nFVUecdDQJ9VQcpKdLF7gKsk27AJMUAvGypKePspC7r2tGSayknrmE",
  "key15": "3dz73ZADcj6PAZaTMYJEkCnhvgFbS12DBnCwfD9KeynNwyAoMMowVo4DvCEMVyZvad7XAZRkgkQHYC3s29XVEkqr",
  "key16": "52oGAk5An4SPURCjQ46UTmV8tKUbWX6Q16UgJhaw19i3pKc8wwc75hQhghT9VUZ7VfgTF4g4oFYSjM3vC9rreFE6",
  "key17": "4H3FPTd1YvtTAqVLsdh2NKNn6qaiFVq84wghCXG8a5K9VGvvxfs1X3rVg9QE7amUapmhPdnUV1zrV9Y2xK3WrJWZ",
  "key18": "4g9SHan3RJB9RLYyd9TQTTtjsiwfaPNTVexDY51RAegWnKSXn13dV8cnupMCGcKtEcF1xN1jmuwozu2Fkw2duggU",
  "key19": "3RvpSJxtsbwoJwooFoevkAmscoi86gWBzdzKatfmpzS8RcJKD8dAf4JY8CdWRnqrY6Jv8hijvV19sdC5TLAuyYnU",
  "key20": "3zwgzkW9UoJdVfymTED4qLFi9u5UVt645YaUGVpT1iMKKFsusw5F96i9Ccf28W5Y38dNivnfi1Y2qPyYnXdDsE6K",
  "key21": "3zeMUeXKoYrudrhWhK6rauiyVk9eZZxZBRvNEJnWDrG24XVwTHuSM8qdhasb26AUGEr59xYXN9pfCsz4Ed1D78NJ",
  "key22": "3YqPdoJCUrmBZJneXJF7DP7g1tdVaZ8XuHmQJ3mn6c9zbep3onsDS1KkfGQEaoAFCLM2PyAXsv1dunTrYqSvtLa",
  "key23": "5Ccd7uun7BqaothZmHgnZS6Zw29rJk38DTG7uiGis1p3BeRpTfVipmgC6qF3Ve2Qhah2cmsD8qyfLHYmWWwXYmm3",
  "key24": "5k4mZJ6y7QShmc8gSZ2wnLjhF7SSj6izP9hg2XkGtPwzqt74ps5r2BKYY6UbpaW39pJW5yHiChFJdgaL4g7UtJZo",
  "key25": "66hE2GP3SYp7Zfor7UCk4UZPVbXG31f5eEbn2Gpnt6a4ZMUdN6SNJJksfbpNG9xtfopeYn8ZBc9NJzvffU3Gxn3L",
  "key26": "aX9qgnhksq9uUM5wpNxkvWWpUJzaWyyjH3Afev2tPcnKAoNBRThMHaMWMucMhb6jCpQ91uSYuMn6fcrjJD1tzde",
  "key27": "3xCpo7So1twatwcRBwwZjtP2NF9uPE8yjmdSqb3PTb4VPqxWfyK38TmsokZuPQruo52s3kk7STLBDEydqqG5sdCD",
  "key28": "26tahG95eX8BToiP164EyWkwDSWpyBfoFwSzPFQiMeYAgaBDmN1ZehKkpGQ3FrRNbTsjzxtHzqejp1Tsr5ibfQU6",
  "key29": "4yiZ9LcFavAQeo8KXpGUZa7rsvTKEzQRybbWU3yiiBN1M7AgrTZiQ1o4K4oVa1Y3hxt1rhnP7gXy9wdr1iMEgYDR",
  "key30": "2bMwLYvF6gJr1YcaX28akBogZWPv8pVxBP9cZUzycyhxSfsh697vMYpbZxYTcbkc327w2jbmewDDW7QL8yabofUn",
  "key31": "4nmoK42zUjXPBV797cUvgGy3b3Cb2tr747DtF3MY5CdkD1fFNxSX8WP9gkesquS2iGQ5Um9ByiAkyXuFHLvdHP57"
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
