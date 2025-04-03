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
    "ahdSsEUgt36vxbFx5g4Rhu9Qo6di1uRV8wN1YB691BHPwEPHph7JXfBK8yDdbYxTitqgBKfZkC9cgpY5wWX3p13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUCrEKxVdXku4VaduKU7qQjDJAGeuJKeCrxwPkQ7Uxw1cqozML3YQTdcKQHBizCwVtcpVcJAYhwm9W4euyWdcyF",
  "key1": "4UW415ddTWr5RQSi3UkX8PDKaZ1pwDMCprEPPw55GR7fiuVFFjKrtiHh9Ecx3MW9S4eCw8RBpUmjqiyibwizBGT6",
  "key2": "z2ZWymFR1FFGRdLaNCRy5qnzR7AZHHXrwFjYMC7EAV3ViWQJxeqAHtwCZviW7ipXFTvboRayQ5AXv4KvFqWVYEW",
  "key3": "m28ejALVUbV9DEGxck5ZH4eHfypTCtzdJQgtjCiTvQfZinaovMna3239XNnfDf4b1NgSRvXtbGqJrAGCFnFFeGJ",
  "key4": "f9yvRDUa3yDYvnPfrAfeAE8sP3Lhsu5mZHSC8Y3TRQBRVn5fhmVBJ87up7obuWJ1PnZMoPPadMTJ9zrkoZAe2gb",
  "key5": "R3dZCwH4z1mQkgdqgXE74tYc8jaGLVpBN5wzab6Pc7EgWdKFaMy1d3MdHpdUqeouqtB7UeLAjNMZRtckuwYA96E",
  "key6": "5LbfTB93Qfn8ZiRpHgBu1Lzw5ADvWqoBpPdMFkA161BXYFdvi8nxNpAabqSnoEjxbdKvSENMeDZh7KUmoA9ohoWk",
  "key7": "4kyPeGkkTZy9EdrQDPZxPn3xg3T1uKutmFSHhTBD2VgejmuYNK6ed6t4n6zEtwh2f4hb3hvkUbD24qFa3KQynJ3U",
  "key8": "5GVNPKxVTSpsKMhEZ9yu94JpJDnnrf6J2aYiGaHMabXVATDpGvE9hm7Chbzx26S39DH9Uq8hgDGBQHgvfERDUewj",
  "key9": "5pYzTitGgf42HnHbSM39dQvwcYHBoA2tJBeUcEPXoDRknnra33SACrqQDKNgQ8xijwfsnTL4bpaBMWEKJuGoBWSZ",
  "key10": "FAZzAcfcthvRjrnxStH5z4LpNNJrXSa8neHugiKih3gZarJUjdKHze9zRJJgBpUELjFVGwoD6x3f1iAzBcCJoCB",
  "key11": "2wSXqPrGhH6KdvP22GceMpvdX6LMnxb4QKiWVEYn9Mf2x7bLnJuviMNqUji3U1zPa1YhDxH44nqvDg18HhS9r4fb",
  "key12": "U5HDp1Zs8jCqvFDPJCZFJzu9ojnijzNS8ceQd3hgeZzmsvQafVxpsXpvVJCrigarzFHvECjG3jVFEkHYaEFaTCu",
  "key13": "JQ9FuNGZQ3KRdB18N1HC3dc4u5cYB171Bqc654VsY9kXKeP6tibTF9Y3sJS3CZ9ofKM9QQ4YBNRHYCTrvfwEhYb",
  "key14": "25XQUNSdo9smkwoZTsmJCnC87FnnmUjyzu45bLip7Tt2C6HWrUUfwmyTG8SEbbHJfNFZsd3Nf3oc9DovEd9HzKZv",
  "key15": "3Q1yxqHjt7qCHXrYkdTT7gYtHpwY8c7VoygU7XdBVLDV3BStwVesjqgcTkNnvJRpdBVZQatTWXRr9eMGKyUow3VU",
  "key16": "2uPoN1uzTH7bdLkR7cbr2N7xFxr9h6zKojEzuyXDRiXyakYRByykkZoeyZ6apQ3jSq4NpmgVWF6UJGoyhogMJTUw",
  "key17": "4gyHc2PCF6tGSP3GuLJUtv3Hzhbc7M1x3mggD4F36xNBgeYaNTeAtA6mFmN3EzmnDW7pNSWLaay9wFev7hZiyt9C",
  "key18": "x5tyPtrre1z2PisnaDaF5x1ZPMzDXG8b8pnzfY4MAVjLUfFaY7xVSnvifB5tx41oPWWPygvqwjZbtxFu9xBxGWk",
  "key19": "U5N5FgX5RzV8UofJZmtaA56XkE3PQEKuorLawVfBukVHFBdVdpjfWbQ6vUVPow1F5PjbWLLUnx3g26JNDzttUzf",
  "key20": "2imi7grCuqZqWT2gLpe3RYGUJ7VE1onzC2NmckuMXCaY19AVmydZCcFPf7cYGBDaJTvw5i9KQrG9WPHYiXHozCDE",
  "key21": "5SsiSHTu6YxTtrUBHQaCyaAov1MLufouUPkoEdY2gfhmbkLfLJpDaddqe5t3XScgzEYHLPkiEWbm18Z4TM5sHkgQ",
  "key22": "RoAGesRtPMJxTqzgAtuZQLotuM2eUwRyQQpFDjKziMs6W7qg1e2o7UHdSsvyL2XwVJ3cMEDQBzpEVnphfkgatoU",
  "key23": "3fAuz2XF478cmP2v42GoHTU7JD2C11Kojip3um6hfkahNeJx2nSx7um4qq3nT1NcscKY52uTRnf4SFbiK943Y5r",
  "key24": "2dccFQE4qrwLpvcwVEJpPYBtFz4LukHEkazSUK3FP22qP4ucQChRzSasAraWGNvSPpQsBKA6yuasK3crpDDzVxMp",
  "key25": "36g5kFm11FYvF6CymK5RnHGHFU57HRy3z8DoVQ2mxQAeaexH8V7u3ysJ9C2aiWcwZujeLyPiLtktjXBJdYCZUSVK",
  "key26": "1XNrzvbwNFeKnBVZvjEAmkpZbZ5qh87R9x6coiH5BhhMc8VKJi4BjE3y8cypDWPQxspKA7KzBZKEE4EpBZovNce",
  "key27": "jY2LufDo4giaw7RLXDnc1XeKTizuUPXXvTTMCpskv7CsJaaoPgcRhQHnZGQTdDxJhP7Mw18EGVzR2acwDp7NELg",
  "key28": "AL1mfVKTGQBWJEZY8j521vFuVAh6HKtMdqBLJby5oMXxgnuBGYDkk9aFZkDNucyzMihxeS8GpaL5A4hbepXZoWH",
  "key29": "4xg78i2abruSqMtFj1SEkqZceT3n6XjHNEHPxsFhg4Q7f2wSzR7XqDzqDoW88si93Dr31SAaD85KNHk2p5sx24fY",
  "key30": "5nvWSGNTnQYte8cbPaL2JpgXyyqEQVCgCfedH8mpfmWkhnMWawaruKmX1sXipRswCuVAmUjf6hLxAeD7hWeaCn4e",
  "key31": "4dkdGrwtoDq13XewXjyWrMDUMTBi4GxW6PKpsjecaHHRoYyuKGqLxDoJ6Ci3nk2NZAh7sQveUnG5oLriyZWc9gxr",
  "key32": "TbvGaGyoWwB3csirLCzwd6r1YnzoiC7Ba4uXKUCy7iDj9iqEYCuWmhpsTCgFy6op5HQBiwamZrPc98hv7gRL7kE",
  "key33": "43cWn2Cko1LWtQ1gm5bRv5TCeWRb2i87TXhU2wnmZQeCateVEp2Whhwrvd51vjHq63WSisRazA8upnWD3gtbSzsg",
  "key34": "FAzJiK2pTiLEWvnE6kiEDcdKQjYeidm9K4ThZ9j1rQdTZiPzV36EGGvoS2f6tPS6DkD2VGk8C6b28xFumcJQynK",
  "key35": "38taUGK3oMesdTTTxuHsBBDSsLqR4BxVadEZxaK6wxKxAdZQqYFYwJ1xQxemYXkKiS3ED5tHHwubYmw8S2X1seAq",
  "key36": "djS6JrehwbY5H16zCWtbaDkmbvZDh9qzAgBGfjsKXeqe5Q1xHBtFD89BcFmohRanVf4u8K8t4NF1GeFvny62VaT",
  "key37": "8yqNaTWkRbb84BqXhqFhqhxbTdQabJqncmYTFBwZEsUWQQjmTEbNpZq8x1Brc6j55PyJNxmKgXFKai8sqmYJpku",
  "key38": "3UtrPmmfBKqBEguTBsX8wC9UbBuBSQwxZLHjxT2e9xnr1GB8W5QSgDNy7YtYRATj5uyxsFkfuyYcsss5VB3HBcXK",
  "key39": "3DJx2skYod8srL6nxbLcgL3gd4afzeZfhd2DN9MLDr78f6UDkAjZF2bwkVuB1FdXkpcyBFZdNTgejdMdCnNEs1SK",
  "key40": "3CxjL833jLo4LskXP1EP2uCyyRhkAZNSvBLyZ56wALdE8uiEUa8bF9XGsGfrVLmCf3yH7gGyE8VPTyjArQ5VKxDP",
  "key41": "S9F7HKQp81FCKwBUTf5hyc9cgDFcbfQWDWqmZagx4LS23PL2RL613E4r928jy5RRBHNC1N76AVLpZe71o1LbmzV",
  "key42": "48DRJcmetR5Ny1HTrbmykFQTTF2uqM2FjKLryff1TpcGKXiokWKjm7P9La7Zh5xuqcVvyAMgknYsmm3973Ujds7p",
  "key43": "4QGDL3w1ZucN8DfjBs1rcFByLc1iUqpVv2RiSmxhdYjszidNCmeMx28R58Do27SxUPqdy4nDeFZ46t9g7f9hDKGw",
  "key44": "3eEWvgy7WbCtegquAaiB4BFL9HceiyR4V8eZFk4qZ5tuLPFnsEPqXprFepTnQ2gEuB4CcjQwLVX1noULHuKi9yVZ",
  "key45": "z68L1ttZwuwJmv2xYr9ZcV4mMXUeGLXHBLLvg8h138Y4TEmqr9zNvt5dmR6wwpBHjWtzzv2yN7wnE6Z9ovEeQLZ",
  "key46": "4EKD9oJkN2V1FVxpTX3UxPJhpKwK8f23bJCBCxwztDtdyADwuX9NnwEkpdFikLaw3FnCcYXwXr49mj3U6V9DsguY",
  "key47": "2U3mk2y1JtUxvdnNWBwdjDJXnogCwfTJKkdp6kUW8TzWx9D4jYDa6ei2axJkKghaKKH7uh8eGawUnqg8yzGPkwqS",
  "key48": "3ZKMbRc2uoh6pbQqhK4uUWmnx4AwvmdbZt1cCotzzu23CT1pa9MqBLjRcpgubJpAkcHDVK7BNvBFYwfZnEWAbMR4",
  "key49": "2bTTkrQrzorJgKtenEuVPcrw9npvj2X9rHQSJ1iKz2JzwZ4atsrqJ73VHcJiR2saQEgaNzrntTrtE55vUhPLLxyS"
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
