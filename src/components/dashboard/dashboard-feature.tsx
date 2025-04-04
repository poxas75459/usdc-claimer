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
    "5LZ9dbcMSSwMmFMvJj7F9vWgAC7xnyXBCazhVntbdYvranZWyuWwoPBhjYb8Kjnt22vimLn1pJB4pgTXoJJjiZe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pXk47WEnsqobivNhd1Wg9P6n2RPUVLYu7oD6hPr686jbKH1S41eDkrNYKdLUQdbJoVAaMrfmxBRBtsYTE97ExQZ",
  "key1": "5ziXkUYt5QEAtJVfHWrmqJmCPdMiRVU96WC5Xutipj36ec9nD1uDxVfw9P5oV8DSvhV2tLrDyZHbaES1hwEu7mJZ",
  "key2": "WzdP8VFVXwo5DmvsTsvF99XRax7tbqpwMvNuVAiNHjomA2XY3pjmv9EraDCDTQzJYtqYeJLwuy2EwHSLhYTfVra",
  "key3": "2HRN6hYxyXdWRTPBaG1wbibDw4i3pM6vvTifP39RDuwfifFH2uVYnT8K3mMNVLRbhyTd9UV4NvGS8emsvBuM4TiV",
  "key4": "3T6zoufbY9EAkrf5FcwYeioBNvL2jFvFH7yUT9RrzbaqWdY9razdzLcFj55aahPkwiVJ3ACNV9d9hQVVJzFKnkrY",
  "key5": "61i15T7sQbVTzyB3d9uHR7zHHxuxY3cX5UKReW6u8cwHmgyvSamuJoxk8LweUG7ksTbpJXmhxhuA3WxaWVymUAT1",
  "key6": "5CQBKLYw65XiXpAPXCdU4qyg2eHKgGUTw7HMeWpUw5zo4q4wceX35EwzgrcFzeh371LKysNoGppTxC5y4tQ7MVCU",
  "key7": "45X1UuNwpKxMFoEqa1RUrNNaP37DCNPxafT78Fq8uUzyuxF5NYxAgzT8ZrxRmfRrBhoPjr4rkMx5qzt8ue1JUvDm",
  "key8": "4ymZcA28uq9rS1JTGYnp2Fhff3JwND879QMcJ1VdoQiPhWhh4cZStbvfvxjg1ERG4MdXiikF1pcoga1MVBBvYrDS",
  "key9": "3YDhULrc9wvb1aUC91ZLYx4oF68dTSdhARnLtxJJHCgFZqEwqLR7sJ2q2MDTnuSwRgR1WqSrvjZAB2Azk4jhnqQx",
  "key10": "2Lbkarxf7ythnhXqGp2HTKVjEnqRBu54xAKWRq71XtzXgnMzRNHZper9e5vMXNoiEyF8mtbsxb3bnHV8BfFMZHAw",
  "key11": "59DZvnKpRBynmnGgDHNw7PbBx3r6k8YwUhAp7GsULYJMbXrVRhGpdjrxE31TYoGoubcs2oRB76XcG4zh6QKxWYtc",
  "key12": "2xo598tGbxUy96HkUkT6eQt9STmU7hcVAfsGi95aaUY9AHdmCg9pV26nk3A7XLNbJXsdwFepnRKiRnYf6NcFFexH",
  "key13": "PFxg5ZGMsEA4YaeT9q63NRNkzFhgFW58RjDJeycSmeBtwGNw4cT9U7nJoh8knVKgKFQyuQqxBXvnKecUjF7nPJ9",
  "key14": "3GmdXWqS9L8siyFrWZysuTiHWqMbJgvMVNXHovza3P7tFG2gDHM2ywWkPXgLWbYh18Z7mhuhiCnyKtbvt6qH7xk2",
  "key15": "59YT5UGTQnvRwpN2Hx2GpXSkpDKe9LGzcqCfLgtBghXAGfbB78gFiVD7EeCrpKRq2hpZiZHUgBAzpaEwRnNxkksy",
  "key16": "3CPjnpNUjDovkCFEqkmSnD8cKE4HnHAAsCjiLn3rCF3XxbQS8Si5AkqE7CRcP1hC324azm1JagzEAppWySFCPpCd",
  "key17": "46Kr8yqvDQLijmFWDC2KGwdymy4F6veRieadkeppbD1fJ27jZbReJs6mGBG1Y4iMALL5t1b82FRYY5oA1AmJzUyj",
  "key18": "28AxQsK8NwWGMLW3r8kui29KArLWqAfk9qBLwxD39XN6627BHdK6Zqz4bwFGH6vauobG9Ym39qt1W5EuZcHsANok",
  "key19": "5AMNxhiPyGoT9esGdSMsbfwTPjSHqq3kNYGieF5GPwmfg4k4VDxoBAkRbiUqh7jWrZ4Uq67SHN8YJkBfp5bXSVgf",
  "key20": "q9GwvyzvLdHXxWe3GdnAZsB9NPPnFBkz7ez3gBfxGSZ6GprxEoaChuf4UsYX773mtTQX6WdweS8M7tMwv4EnMK9",
  "key21": "5LNYdCJgx5W3YdaL2KzvwWeGAREms3X4LHNDyKKjJiWst8G7hXRYhwyfaz1pVxXETc9K7qWULSS9ZPtqv1VCwZ6o",
  "key22": "5nBFit3WKUyTA6bfHJipASg7ig6FmhsQBe18ZfVKYm5cFg2MLeKtdUQmmqvSiQaosu883RtAR3kksp5KHeLXjRT4",
  "key23": "3mozHTDHJta7Lb3KFMGzsYKz6R5ZY3zQd2EArHVFwnzfH3PsDwCJJ4t9vx8pcqdyE65HYPvae5KpaoWS34BZtBZ1",
  "key24": "kN3jTumj11nxBwNuSZbieJ95DsmxwBTgXhJGWWRgZrbqQYakUx5R8AvCV2r5NVNNLkeLKG78eDYMb2cBzTbLqaw",
  "key25": "486mjZo2GC8Ptg78cb7JCiSEcGgEoSq1etF4gySFBHoSG6LUHtb2KVQ5HioVyFQQrFyYVnGmsnivnRsXwSwHi4GP",
  "key26": "a9THo1qs86qTiBwK9VprfkY1mgmE3TQn3DhMntgXL3mCERwbYXzvM1acHUHKbSVoATWLcmob156DALVghUnD8Uh",
  "key27": "4okMJDvfC1BGEt3Xx1sAQT1cDp2xsVvidNnJuVVqqHboZraH5iE2bNkgy9tRY3W4PLZvnyYEYSeo6cNVdEesMJav",
  "key28": "4zmrp4XP7mmiCn8Xv89oYWPBWMi4TnW9cFbL1a7wUauHkKBGm2zhsjXsbdnG1mCXFBmQwqbkfRDanj9DqcnRKBSa",
  "key29": "4HekghLXr9onCnywp7raHKUqtFLirzMzSdVw1no2SCFaZjXtpSJjwjTKBswpNJssvaF7aMPyMfD23cSRv46CXHST",
  "key30": "2TbHWLjgUVAGDxjJ3eJCyYr1vr4PpSi1WxjWbAxdwgKmiTLeFKihYfAA9wbMwxFivDWfvffNmZsR5LvAAoyq97Z8",
  "key31": "4ZzYGVGZg7LU9BE3MEhGVuF9ibZGW63ricuYF2MSPwCVhSAkGK1imaKGUnX2hJo4hLoQgvrvFaaq8YiiVwfqw9T",
  "key32": "34LvLkco41iz8SKMcuo6hVFV2fCtyBpRiuy7dTh3zkAKRGzMZEohjD1HGn8yzzFj62BxrL6m3WXxBi8mg5iag4Jw",
  "key33": "5Ce2c9Hgr3siQ6tVcLM9KznxQZJsbxECCctfjkMiSNdREibTLcK2vHf61pxr491tHyEh8p92M9JjvUXigHfVQ8YR",
  "key34": "vx51oUZwEnh2yMVmDm8kYdtuhd9zisQrJfvaSSFEFR49HHBe9J4MSzi3iCzDQ564hkkWVR7oeoomDzXEG7XMEMJ",
  "key35": "4F6AQLwqduT9e9VkdbTXpr2x9xBSt8kxRGkVdYZ14jKEuVS6pZfeWp1p3ksqYz8ThgkHXzystiznnYQKFuhSXs45",
  "key36": "4xnhFj9TktGjyoen3EHmaxhaaH2NgikGXJr5ar8CDtcF7gwWtKUdsNDJ6QqtDTmJKtRsToZnMs7hfmpqcEck9eTf",
  "key37": "4zyGxbkCU1fZWZ2LymqJXK2Hrcop7sfjDbzb9VuCiLi9pkZJ61NDBZj338JJf4V9UzEgGodqhfkRsx2mYHVLeafQ",
  "key38": "3SGM8MTyAfR9dibSG673ok9LYo82jjJYRnzBvLSk2bv9Daudxrdvs5mhAcXuBicDwboLoMuMpHKBMa5FjAEuEw5y",
  "key39": "2u6QEJDd8SpjqWACaGh1yWGjCiYkTrbREuR9fLieaNAzABkFo86sxjXvGEtpEXnzncjQjHfbKgXua5Ajg2gT9qJv",
  "key40": "5ZvBbZY21KMKScSauFvPmWjYAaTexzo4tFEyZ511uH2Fimnoq9oguxW3MJCDqtHE28MUEJANxp2eavBpzCGNTMto",
  "key41": "64hBHzcNpT3wCC4nbRSF1oGN7kVx1x7bDoPiQ1nWvUHVyHLht7WLshLeG5oAQJz137ALhiKr4evJAsjG8HjkCrUB",
  "key42": "2Mv8aeQ3emwCnmmN36iFC6hSqZJCDhf1Xbeu2ZxRpug8XB5xcHGsXJG6xToC8ieqDMJygLHL1xrwNqA3fWHHJeec",
  "key43": "xfh2nNam2EWLkAJ1rhvXae7r939kmBy2899Arim5NxURLPnRrqhXzEn8pwxavop3AisdTpkhRDe6ktSqh7oexgx",
  "key44": "2RpKUny8AsuSBKxQ5ALePe58p8AeVzjTsmHG2jMRJtRQbpxiu5JSXXNTQ46uZ56Fn6tPd46rVzZeN49iCY87L3Yt",
  "key45": "2tUx4CJva6bUjrQ14W8NngwcLaB6vMGaR4QEYykFFV6V9FgDVXx6xxUm3prmFtf6p7p5aE7vzvSnbZW6QFHhhnnL"
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
