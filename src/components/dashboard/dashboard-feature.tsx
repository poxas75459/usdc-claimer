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
    "3gp7QWjYWCrL8E67rKD7oxM9qrBXaZtXiQHRtQhmoRzNfrpNzESMFJ1h7cYgrjBN8JQe8dedjsfap2Dpi5LMs7TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hrMG3LMAfwcMkAq3yJd4yp3fi9gCN1d85bhMpSKMAPspa3uKvadPA8CkQt3E7k16eahYrKcXxmXuvVpxKwzKaZp",
  "key1": "2cgXPs4zSdE3owFaqwmLJEYHU1rU1gKEE988obzDxyVDjepCVoxXYUbuxpSLVnrvrw11wtG1edwDnpRKCwiCAyJe",
  "key2": "2NGtTeU7gLtGPmGLwKk3QFGPssnAAncBFVjqzyDGcJ5jt3iemPcahkixR3dLww843kgXoQq4SGLD7tnpVMsudaNs",
  "key3": "3Ae77JKVYASwTfvPubsy5t7WBSLu3gqTURVhKdhgkSJM5h3CQomCPXn8hLqCNbAq7kk7b6NDAvuuL47YqbsVw4Ac",
  "key4": "2MVZoaK1sQwDzKChtRuB6HAkFmNxC54WbskRSPCah9DEDWhewmSbU4G5K1hzvNxjaZVHC7sTcrXjL1H48bC1WEPR",
  "key5": "3QoQt5XNJoqJq2Jo7TenzFMHzdwn4FNA1P1aFGfu6UX6SwY17pjKi3msPsAESSmjLMet3rBvhgQdrmr8iQ5a8CV2",
  "key6": "5bKWDFjETJbM1sjBNRuVh1fHncS6s9is1t5HQPWvAqUbqFUL6CgyzncQxZxYy3PFKSqErRoaWZrgbUeEPwNZfbk4",
  "key7": "4T28xQmrgUnJXSfhvLxrXHF5gjWdWzu4yzmDUn2hvZxqG4wvdyUgZ3SnqBraVfycmsmTNTj7z5TqjmauKfdwrQ9n",
  "key8": "5gVzDjGtytBSA6XPY3nqviDoLujsMvSyCVxjEb2HTgvdvuiDRrCFq1utNvnSNjtbdzjCde5iavC9Lny4FE4y2r1R",
  "key9": "mgibmHDgvDFCoQmL12hbFWrRm3gzpyzXvmeGJknBGan35RMB4iDKTBY638YhFxYyTD8q1a94a4wkAMrhx6533Tn",
  "key10": "156y9AdmXrDfXfP8moU6FGLmkA1K3M83BdynWcXc7JJSLfw5Z1TLTjsjVfq395eU1q8GUQM9EVp2cqC8ucSHues",
  "key11": "eQvCApmQ94vvrSQ256SCaXvnTdvx43sTvrFWwhJGPyR2J7ykzgDGRQrpaU1hXPckm8BPUomTunqz2xHehcECUrf",
  "key12": "EKUxABSAjmfY3xhQ779K9YMWHe8QAFCxVFu4MvcDtJEUgHDXG5bHoerGPu3EBd1ZUDnG84imCd2Yxjq7sC4DCKW",
  "key13": "4aCN39YxrXt3bYa9Cax4RnwWQEsqLkWB2PyjFq52GCao4EEdVvLVSS9pWxzAJt9LTnAGpukyhXZdnp7gE2avaJqv",
  "key14": "5mUcP7xpXxoFvL1AK7AXjvVVwfpqc25Z8gj65duU1JRq7CzsXmCs5hXDjty1hZYEvD4YgZnEuPMo3SzXUEALy4YF",
  "key15": "CCGeyXTLcg7cE8V1rJSDF7jxvjAPfRBV68g9Nup8RBaXQ5sP9vXtRFF11Q3JjYDrV7Q5o3avcSkjuFYsFiHuvbC",
  "key16": "4bXyfXkp7fUjSMLu9SwR4t1k5DwKTDpw6kwHVhbY5TezV9RYHTtK8Qn23U5TzZQcHLjhNdH3qCiMzBBdoVwXLqnr",
  "key17": "5Ggj2sDcHLuWGjGZG3NxSFZFMk2BdZZbVQz3y7xXxxHGXMnWDETHAFHTSUTBprsy33Hkvs9e7C6ZyzDUu38tvZAu",
  "key18": "VzzU382BRT1kPks2K5osp6JsT1E9tqqcVgU2umqR5XyXKMWpRrsYLzDLoconDnouz3cgXfo9joLX9GmnkiPZ7YU",
  "key19": "5c6kVUt3wfpptepb9P4A9AVrfHnRWTYzTMJtAt3R1Z6MpR4TJmXKfaiuWKLrae2C7ewuTqpGUKCfLD8CsqEiKjTu",
  "key20": "49NsYtm1zVxi1sgCSh7Zv86PDZmV4JPDoLUTSZtVtiVqq7buefcj2xBFgARAGY2MkJJPnnFrR1Nqjmtgn6uqxatx",
  "key21": "4MbfeELDkUAZeUCcZB6fUkbiKSeQXfZWchvh9UBVJRuaJ6nhpBVNc7xiovELhywm6eSVag8K5rRYCRNndrvs5YGs",
  "key22": "5t7MbToFiKp6rSFcYTdeoNhwJb1pvEakpUC5ZYjkMWSCTeDpgy1wra2RJaxkQcZse2ZLNrApqxH5hTDVmtbXXzPR",
  "key23": "pNWWWtfL2w4k5N3obAoqVygVijs8BwNev7dSJNBun7FFAnXWZ7aAGFqWw5UzfV3iJuxgDJ4MQnzdodD8swaYRjg",
  "key24": "4n4RdoKoSTsxEdJBEHLbyg7kJJcQxdyBk1NGtBiPX92GaffTeEGa2fgNuVafXP85dxBo7NPz4QzzdNt77mbdwRW6",
  "key25": "2wLjv41YbqhvtdeJUJZPUhyoQcaHHaiE3kmbsnW4uzv83kTfisKLuCzkagv2EtAvgufVxECVu1NW5tnhxo7HfXqZ",
  "key26": "3XjQw5JiXmroy5t8FvG933YmFJmkz8oTY3JzGtVud3An8CEz8uNuW3GbVETKQLdEWGWkZM18KCpXsCzUM1y8Lcbk",
  "key27": "BiwrCK8Xj6LEmfLYYf43tjyf48mohK46GH7EQvZnCM6zUTh2ejc7WJEzYg88gKQ3B5bnMjp3wQt9UnaW1EHsdXJ",
  "key28": "5HJfiAcq7ssJD9ghrCoU7BUDEVu6LtsfesPJESG74FsiTt8p3WKaiMgisR1yBHajVLZP7ksTjjGBNM4FcTBSap34",
  "key29": "3YMwtiX2EUiGf6afZjt9DTawLg26HkbyR9Qkxpm4Wp6F8rAD5KsUdBCFTLCWNNtTUQD6C5XrdsXtHckwUgfnbzsq",
  "key30": "4GGzFApEcuyk3PzDGrBSzK8CgJbKsHeFCCHKUCmEoVuhpfzDskJ7etcKhcRaz9AE5SWCM81n4B2CyGr1ywHrAXT9",
  "key31": "vrxXwqWurpLjmXdkyhEwsyLmNshoJxbjGdvmL79SL9EngWp26EFQ8CwHjBqi7vJ24Y4KGmJ9CdycVUwzjkhwQqu",
  "key32": "2DgDsjWTxNrhCmUQeT1aWfWnNTTnmTcu3HZX63ckCV9UaFHG74ySRus7K4nqQxbayZcmDQEtutR8iaRj9ag8GU6R",
  "key33": "2hGTvEgUdh3BLEiXkViUxbnaobhv14qnhyuwT5rfu1gk4r5WDjExGGnqaYeZmDQRy3vx8ebWUtAJuLbasiyC2D4A",
  "key34": "49J9YRkf7aFK68y2yv9wP2CkzkuwixkJaZmXiNg6cV5BfX2i3MkVQQVD3gHQJyaFURiDBtEDfjFYwhySLRxhLwta",
  "key35": "4BSup3xDs8zXLcKQrLP1dtSxe3mvRvyfPfyJgQRWSYnNjKyAYGYXp5xDskL65RYWo5S17gTQkJo26QRZ2T8Sjqx8",
  "key36": "23EjHtXaLZZYK3RNVrXLDxu7vedPNyLywnze7b5LYAnTNWbjNUss2WvnSYoGzqHviacFNxJEWhnrtCMXRK1e9JRU",
  "key37": "31JQog5HfSqnCAoXrdsnskzxZmr7VyTUPrprAgzHgYzaTqiNZwMBviiCvrzxkofUbjunPecWjSR1aECrNGPDfh3T",
  "key38": "43esfCKAgZpzP1XGCyfC4x2qPXgY4u3C2qtmwyF8aC6JZoiqRrdVvqEajsFUmaSwvPkZWwvaVos2KTy3k9xVFbi2",
  "key39": "2KSfo1srQoJ6gLt1e5HRUH7ADmhkcuQx5taemsFXxwXcCnaBj8s79BAU5hstRqfsaiavdtHzaMvp2RidvYEQeBpb",
  "key40": "5kDqLnFUFPdteEKUkS5wx8gwX2qvxgGhAnNqnczZny7feGgWJCji1XpKaJdoY6pV4PkCxANA8Ae2Vpm5GyTRBf2H"
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
