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
    "257ggZnRBdZQ63HETnNcvKTpB1UhSCGwjzWFVaaA2EEBmWk9FocNCPMCEj1m8j6rzp7UonWXeRPwwNJsXw6i5wBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwaYkkGdUfS9xywR7nJxnFvRsgFnuossnr4ZdXQNeNxK64yZHc1sBv4Cy2JV721FWCpiJJsufbiNLJDS6Ui4rN5",
  "key1": "4kpRPom1MZSzGnMZDcMhtANZANaFfmBCPE841xBsjbASSM9GNK546Yh9Vniv4fv5FbfRRQgDKLyuyxQRC67d8xrt",
  "key2": "VscLWDCEjTLTFzjjZZb99pcUAVtHHK43UxFTu32xahrCtqHn8tr7PE573FEUJiVC6mFQQL6BHW7bozGtycjDM6r",
  "key3": "sm8Q3b2BxEXqa33HhUxq64rokKv31gb37aFMnu3JvL445SYVk923TvqRmg1i4bY759W32XnJ5mGjdvt7jmeWrCN",
  "key4": "P7yH7iPujLPXzrcD53iBqeLYQEgDxAWGQwUn59SPrmAan2QT2RUXpv6Tg14KnKX5Lp8DJwSModi3rhgSbE5H8rr",
  "key5": "2sqyde9AmJsGDan9JdyjpEtQqPjEJHpJ9TZoFVjjnL2zYDnTZGtG7NgAYcUKAmXMsYFRcMusZzscubU7Gk5rA1mG",
  "key6": "XKnB6PEQ1o84rmDH7UfztJWVKU4MbVAJewfkMJoGBrwqiVsPKmJrSB3m3n8GinCVtdqkvHqKmeJgmJ7byjNZHcG",
  "key7": "5i1nXWWfb5X2DXyXsAzRCuXdAy1e2p9odhnSXHFdRCjWqe3EQ4vVt5GUdEeZ6HuqMTAcxQ2ptG1huYEMgkwvxe4P",
  "key8": "2KM32wP2ro4ytuCj98sExsoY619FZ3mDykHxrGMhnwQZ58iuf5KooU5jBVemyzrredCx3TDkNvFZeC3mJb1jYWp5",
  "key9": "2mb97CeRWRYnvZjHpgKubAHaVUhX7PbjGB8Sm3G71MR2wxpGG8qfajbnGXKrrDRhMXCHKovMdBQ5iXZH5u3HFoin",
  "key10": "4B1kVR3SVWLr42fMX4h4a8GH59VgtV7LbZJAmf4QBG7FLjuJ3iF5bjZ8NpW2njpzpMyXR6UbEGNrFEngYpVZ5Q59",
  "key11": "5ASLFiCxevtWvAaVDa5bNZgMyut3D9nbmbN8QMEpPJVp28ynfLdWw72EUks3Ck8oh1mxuJbvpUTrrvrriHxHPJ2H",
  "key12": "4fY1KuJkUhjBW6pmxNRJFNzSt3sb5Uq5oPVj322vgse7AB5ZAbMBKNBumsDEJLubv2QqNuAWEKGSut555azTB8xa",
  "key13": "gXi5h2D3PWDUo8EhSgbZfiA8HM4CwGYDjwMv3xdBRBgz32sj3pQoXNyCUDw5bs6BgXb2QKz2HFQe1SmdJcVZtxx",
  "key14": "4FxbHvFGXF5iZZMTHzAMsv4bj87R5zn54y3joV2G7H9s1nobmanq2Pry16my5b63GYuq7KFpZxgMT8GczmZWiDTz",
  "key15": "67b2Hmhpp9VFiaxHMFFa8XM6suWtBJUztqEfWcDFGAtS7hwY7N1DuHjG8GhCxpmt52A3NN8q75KAcaWeU3SSiDZG",
  "key16": "3aoiP99VW3WzH3DgPK662GVJPczx1KaahD8owzkeGxgWVvdt1w2guHnWs8N4vUMtTqeTffz8xCmh1g4UWTcUr5nE",
  "key17": "2MVfwdHFZQbomGd1j97PPiEcCKFEQuR2Wd8ctuumbBz4Mgn6fYqcBso9mPjbU4WFDEKeL6y4KuQAp66BJatMRsjk",
  "key18": "3qDamQhTxRyTdU96MerhJq7yrgRxtsNJDsEZvNAtm15LbwR2nT8gGjJL69KPY6hKCQzFDarq5urdfhLRdqQzpUnr",
  "key19": "5gtCBkepLAGBZnkreHdyRN25PS3Ur6LF4qHs2cfmSi1UTp2gR6Pm8s8XFukrfnPSw9kULXGz29HJdoR9Urp4GW7L",
  "key20": "3iSuFJciR7MLsmKnE8sPVVPbBqDJH7Uooy6qhs9HRe2EPCio5grd1wRYqTcxPpJhPSgVZRpfeK3MkwcNNfWEGTZx",
  "key21": "5kxUVv5ij8oA7XYN7p3GcwXpjDrKWTzJi4zqHBM3LTJf3PrCrao3P36xhoZJLdQr7qpiD9kmMvm5iWTiuZW6K6nd",
  "key22": "5U2gTPZpMyNFEEdYpiyBBHMWQu926cGW2XezmkS1chEUgmh3hQMDo5QufZAhVnVxn1UJevHbbXwNY15iLUKvsYZN",
  "key23": "AXe6Zpg8rL79EkRSzaan3uKGJJMpNdFAWyuBaBUxEVgcWgoT2cumH7EwiKwKeFDPrvLLsKA82jZ4pkAvUKeCgFG",
  "key24": "5X2ySv2iugKtRyRhcwuZkN55cyQTybqxhXt7kyWnimGtVeW3nsn8EHDs8q7mGdmFdMmRqCSZteW7mM7BmrJGHGXB",
  "key25": "5tpRrPzsVZPeH9DMnNzyZZNgnV1o43utzrawhZtJEtp14HwZ2SAUsxQUZWJhESjXkQUQvGKXz4NTdqAkHQAYpMwV",
  "key26": "5EkPXhssyubjcmrfvjeAVHbXuJfSLkhXX6kJbE1sCNx4AmswmHM8MCaDbUkVmgZ31LLgkW92YSLTfiqrqYUBhuNX",
  "key27": "4qsdbYbUagp2h52GCiWsh9jTi7FF33FseYz3PWErVLuWp2zF1hW3TfRn18QPCS2wbx96NrdcLJCkvo9zcKJw2ZhD",
  "key28": "2GGFfamdn8FGoSfUcC98BohR8fzaJbzLCqYRJnLKj3cuQwnkZg1jdwHwyJCgLeTxRbvNzG27kesrAEnMYNys3qmx",
  "key29": "4L17u3P4PBZJYDwSHto4nH3nt78h8vZVoXynzX1c8UjXfXYhXB51LxHcBwRnUHzcYujLb2jSG3Dyh8jkb2PWX2bj",
  "key30": "3VaVRYSjwiu7Rg4wjZxuiPVmhrUMAQ5t3jfFhUzAaBqPVit4gEDyMtnDaV1LEF9aSZ4PEbevHnDYJ3hXHJd2pfUX",
  "key31": "48cTc1MTpkJALFgDbKDNxkxhEdDQPrKa7Y7oMEqd7na9H5TV2LwomZZi8shxRKXEcnAjmAgJHg2ngobsVkCh2SMU",
  "key32": "5LKzkDxNyqs9VmCZseTxNPu6AV8at4YdEMmkMshk9eWachNxrcfUDhs6mCubqviycH1WbdjBvSZCmUkDta1NJRvY",
  "key33": "4j3DnzQuJV6oeBicxHaHRuf1BY6TMwWPrc7A37P4yKkmcHFd5scBDzkvk731sX5vSWYEskYmNp3za1h5UWDf6CRD",
  "key34": "2BZSkxhCv5sjUvWYYNJmKXASvL4ALpQSqJ3ffF89aCU3bQMMZzXoEA11G4tkNDs47Ydos8DQ6cBvpntvgzA2cxEn",
  "key35": "4qpqpxbZS9wt6UbocYoY5qfMrPW1Kd5wMewN4HzrJZUnKJejEywHDa2cD6PRHbQJY1cQPZzg7Csz6jMm9fn1DqJQ",
  "key36": "2dEXLoev19kGAGp9sKCn3CereJ72NuMG7hR1FHAdj7sqHJ9orLY8UbyeMfdngFp3UGfBp2XCoWGaF7PeBjTgvM5w",
  "key37": "Rc6kX1jFZuKG33uCDxFweMaMCgNuKLmCceis5YmNXdq4hxDpyTbX6TVce3iVyQExzf4tNk4pE2NnhbPhYp7hWrV",
  "key38": "DovEKMRrqBEzpD5Dz3cWM9ecpxZfk5k38sGub9JWAMAZ9dGJQ18jpfobCu5edPUfRvT1YgUnoRyv9k2d7pU8YqL",
  "key39": "4kNJgb123zoER9q1tnmua6pWaADNyU9rSSebj3RqeUtwBPaAPkGf8bXjZeLm5x1zYZfLA2GFJ47AMkTh8V7BnHVG",
  "key40": "559v8t67yXyWPEM9bsZkXyHeZNSzMnRhCEWUmJ6rJEVRmSTy2zy3ZR9uCjBK2pR1exeheBsDpqTukembvPoUKzfU",
  "key41": "2nnm9itJUZRdDFfjtY1GXwS3HxY5dByfj5xs6uq3CyAshdCPp7L9aFKmdqCxSkZv1US9kWHbARrvRbNh9sZnpgDV",
  "key42": "3tBV3LQbnwsZZVy7DhwVkiukfzysUzFCwQsVrbnyruvCpX2uZFZv3wXhS1LHBdsyiYVcHRgHmQn3knWze1VC9B5",
  "key43": "63pYz8FuD74cb4ao4bZp3ujHqLptp7mAD1aygYHutSzHhmdax9eoSstsRrXGKPuFEwdv1aazMifHbWcZn3jfoXnf",
  "key44": "2gKbhkAAmDd13aZrhuhrVNrpFHQWijYhat9poJhajeA2uM68kWKy9gj5uhUa2WBKURy7wUsrf5rvLUCAMtzRW6c5",
  "key45": "2X3LhtwxhbnoyxF7LExPRHhV3WjLDXrJynbPXkK4vPV6bGvuVpcZfT4p7XGisKTkSDfXVvLm4ThvLm3ToqbXaT5U",
  "key46": "3oTb8bUnFkTmWQetXCiDYnSVb69UueRHCdWz5QUvoPMbFRb6FYeNuhM6REJUfdKXMmaVcjUiw3k2PAe6Z8bwLG3E",
  "key47": "5Xqi7oASuTFPGFBGJgVw9TVBragMYTLn9THCKa67tLukvAbF2pSNPNVC3wgGybxu2m7BP663FFvFQeYZyBNmU8ka",
  "key48": "3U8dzsi8kWNFXLcjwXktXsGWQLJXYKC3zQc77zRbENKuj4iNMidHxqsZojgMbgZydpT72US8tpo8PkGGozRh4djJ",
  "key49": "3v9w2UGdvrZZa355uXittTF3kcM1Rbbyb3vqztCRCSFuB3Sc39SBYZ1ds1jEj5zceLM7GvpZgbbsDByGj1b7VKyp"
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
