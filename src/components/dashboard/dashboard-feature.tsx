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
    "3nUpUu4W7qsH5SAStYiSUQ2rRKn9TKbPHSewrK8famrTbiWHdKiSz2SG1QBXbYAMQztYSYxUs9xJqou776x5NaVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63bAAsi7ajEQ6Yg4VWzDKY4uNf8rctfFMBe3vxXns6ru1jpks4bPr2m5UbBiv5zWRnHogcW9VAbjrNnR671ybosE",
  "key1": "ZLubieX6XYnbRU4xDuKZ5ZcfC82ve2R5qD5Nog5YpvJcfdNZR62chMqsfwwcnRVKnXAdwjyAi6GKb8EAUTNEyBU",
  "key2": "5bsceWQisxtJChG7ACvpwQhs5mRjq98fc9jbFphH3bRpceXa61qS5VkSQHA3KCbCCFUxLT7UR9CK2q7vF7fczeGU",
  "key3": "4HZhgZa7XwKDE8KNw4WuexLbLFTJ5F17i99aFs2iiwSsSbfokXHcMHuWZVace1KRnPNY7NeYVq3Uz26LyEQf1BPQ",
  "key4": "3Bin6sTw5NhCNaTHTuLeUsbjMzsg97GLTRPqaN4UL9nbaRdZh84jA9MyRDKc5jeQ2B8S2h2h2GriBBq1k8Y6H2Vu",
  "key5": "5LpdJxZNAMikk8rZCxLgxsNt7NBKvPLm44WLWjp2nvAeSQqBmRVKTPcWCQvk1SkyGskn3fH2N3Q83mESJTyR9EyT",
  "key6": "3bdRFrCQEwrJcErHDEhQWPakxMx6w7a3MrNFNHxJ9knDGzQVtZjrbHFSX3DexkqQMUmP8vmxFgP1uZmydWi3X3JW",
  "key7": "YoKBWRJXVxvBm97923smHdCWjiW7GbMZ8PJWhuqpBE8cGbAHRHqS8GA5QDw6FkwJsYKrfxSxCAQzLi9m9LVdFYw",
  "key8": "4sKVuYQGR4buWVrHf6DZtw1WNQDzyWLVkzggRWkseWKVNakb3mQ2bfmc8AZK9JADqj2yRKK7WSy7344b3k8pdefS",
  "key9": "4NyCqVK5HEWFemzvfhJ9Zav1GgPAfDW4AeSQdxeCvjp1ezeiBwcbACmC6PbcYJsQqMURuhya7U3aG9UamRAgbFsg",
  "key10": "34VH37dwRj2k88F2zxwjYKT989tfgTNcpCMX6BVNjPCSrRtuqQzmugR13ZnSiEF6ZGweeoDUDN1mhMwtq2nKoDhh",
  "key11": "2Uz26ASKCpTgGihAfC8LTkJA7pmy4atyYK2TUH8DpbtRCsbczTVKSjVBNwETtmBCuLuCR7MjQ1NbjG4WXV8sFcgE",
  "key12": "4SKQNKtSeEZ9kiWxF28udwdB4nAz7vZhc584zkT7BhTZdMRL5ha73FLuGyfVD21wWfddemj4ASRjYtLcJDEVsqoJ",
  "key13": "5t4NHmp6K7t1XPRrqqfzShn8Q6G5keALPCVsYsT3iCNx1TiQjssmdo9D67hjyb1Rc8mWBussLeysypYxi81thb4y",
  "key14": "4DUgJjT7NXdRhcE7j3bJWrqqTQnkpVNXVU7hNqhwiUpLiN8iPXj7WNNGBxyrEFJkhgRowhuFT3XeYAhfh6uVu44z",
  "key15": "mHW1EBSoP5PJT5ufSrm7uxG1cQ6fGnYXHyPZgNJeW2Wkqu6NitbDGpMW4acpJ23HHYTruufLd1Ai2sGM2MPSims",
  "key16": "5A2tsdHzc82LRR9KVYGJYDxc1QZRequjJQ8rryTDC9HSZG1ji4xPfVLuLHZyuq3DxjVXiMGX5f1YqRea38fKf5CQ",
  "key17": "5LAqNue2dqU8sbNgZgj91rvStWGi7VqPxNwkBR9m7zbUisff7fZWoFBxJaGkyNE4FyBqtmMJcT3sSSRYmh96hoEk",
  "key18": "4C6FryH8zJquqKiKpXo1aJJfGKxfNAPAgFQeQLYFSr2SEfijDBNFzXyBVezGhaAQ6CGzfLQ41rdKXDogToLq9y8m",
  "key19": "AxdEtQHPdx2XMcWcF4tcvKE6b9mAyAQFwzM1iVWvfwePtGAd4MBcr7WmUsM2ctKsovGawPbRRSqh2cE68TE6Ro3",
  "key20": "2kmkAVZqPusfzbUe8HSRZtGDurANNK4UWWJbKDk4DN5bmmvyB3YSBYyrfYHR7JEFR4NCHoW2MZxFuEXw8MgrY3xL",
  "key21": "3ZgGYBTi7k5Y9Rfp21oFPuVh3g2mBgaACjVgcpoNPfdL5zhKLNUgWqSBENjzLTjPpmKXL7dxiE1W7pHd1bpSxCyt",
  "key22": "8GsaPL7NtvJw1uvguTweoNWkbn8xxdzA6CYDYWHVupr58AZg7et6MiPT183XqEeonvEwL76svH1SXUR9jMNGyf8",
  "key23": "r9nxdnqgwU5VkMHTXgRAb1LiwW3JrHxZiHXMD9STf9idgL5YVEny5sNHzYbi3CkCQQzW1tn9HeYbLGdZBSv8zRx",
  "key24": "2QCcRqB4iGfdFJ2nTD1dUmS1iPfJZaUmmANvQpATs7B3gH16y2ad5u9NpXobE11DZtQixhYaD94X7i5ukMfEKPpa",
  "key25": "5JD53zcR2ghJfpRwDstuPc9PizjsPqA8wdyg8WSVxUjTn74ep6kYVaXEU2zcJq4vJLgoe318Vedy8FquqwmRpHHr",
  "key26": "35NwfwxvGex8S5Jz2ALaoj1Ugk5UesTg1LScCoamGuCWmSrTaqnn3xCrxxzPd2BcAyn9ffrB5ruFGqVAcM9Y444x",
  "key27": "3dcWyUdAQoBGkbgBM33qmV7Fzpyd2DufESryf8tjYSZJg2nTBigwjUcWabDeKZ5h6EZMjxD2tSTaFQApeGg8Fi2P",
  "key28": "APvS6evAwWELktfiqJvTCv3HkEXoSCGkwx6FYnUsXDUCbCJqC6jPwcNBYMPMpxemBxZr8De2UrRzrbPDcirFCKe",
  "key29": "32cQ8ZjpMYqBbpV99Dq1Wu3tjHY7uaHHU9mFQAGVV6XwQfiPfSmtaZAwiHnehwC9Hx19Gr7dj3fw4VLM7yGh7SFW",
  "key30": "3ZNxmaAaMtHZjCcbLHj8w9KbgKxQyk7oW2EDsUqiVXdT1MFVMpqa3k7pT2yEzEBpcM6dMB5NmYqkBMG6wXCFcxni",
  "key31": "26Ntsi9H8JrTBcHDXU8gqBSVhTC5QH9tPBgstGGEbkYZX2f8DGELabsFH589N26AqT6wV8GgxVqUMYASfPBAAVZX",
  "key32": "4us1ycRmPG9qFtmRpRFsv7MUSdemYpzYnFjzntUyDZT9VMT6KrJaDKdax6FTqgY2nJM9PkrbrRwzF96CYJqcXeBd",
  "key33": "3BNAB4UM5JwGbBouPqHEHMuXRifq8E9cqkwUXysd1hg3xoZLheFL9tKGA9E8Cn4yS4Mga51K7mS9Xv28pA4xa9j2",
  "key34": "he25T7XXpVehEVMfgb4iW2eMjmo4cuzHF2Y9boCUcDewaKXwRyeSATFXmRvEmZw8Cvbo8w9QngJR9ykcJMMCeFt",
  "key35": "3QHDTxrFaXJGAzd8TrzXwu77bMk6npBTT493eQriTX5Ht3fi82cmp9SKcR7KWyFRMBYtnhwzpvfezTgZWwqh6v7h",
  "key36": "YsoaphDMC7Ub6BtsSK2By3zo93SfcWhnP6RLAkpryE7dWbxWL6yVPKhNn3d82B1ThyK8aQSdN9h4MawtKdsVF9J",
  "key37": "1PMVRTZBxteUhBeVcR31M61NHzgXxeUkpqvwzeWZRXp4HZHurpbArkPUQZjbatfBjjpC4m1MPDYgPpaTs2kTktb",
  "key38": "4DThpRAfekE3jLecetZ3HUC5YsRRBzEj5jqbYeCbhp8euPuRg8JFQHRdnsZS9fX3sY9D3KSjYyeFjDhgaT1YVtWZ"
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
