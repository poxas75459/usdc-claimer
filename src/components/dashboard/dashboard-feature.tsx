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
    "3iHtdE4ddoJ9pwsJSZ8V4feFXdWvci94NJpNbmStrfx8eX7otU7gZYPh1D16BmVN7xtRi7grwZUy1kCzr1Hbb8mH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TefcPfwTtW6YwfLeYXCrsxg1WbRrqd2FyRitpjmu1JocebgcbanXvz4c7mFhTyPfu18jWFFAcMZyQTFuWder41j",
  "key1": "5HGBW7Hq6BySn7x12DeZKRFK7gv6PUY6th2wQhfoDLwkigMAt9ijVx1rWVair5jhKwdFy89CxZWZjXVoEua4mNmM",
  "key2": "35hQKue5t6zxHp52wb5GUW1H9ct92pGiBrooGgDAcQSY9fCixDNd4WnJbkGRyfn9hQ5tHG6UD8UTf1k8GqHLctUd",
  "key3": "2TzF8WwU16sKpX8sv3c6UtQhenje74iidvh2RSNHJ2jqhUaWQuvqCZmJSWMYs1EwEkPXj6unLsTfdngPAF5KHPen",
  "key4": "3XrzsN3QWE3f5KSJMNpxKq9Mjy3ksvJfFGz4wKjSparsSapzV13h6MyMTNeDmv2DqGZNrNLQb5wsG9ksKSBJRxCH",
  "key5": "4pNC5BcaxH1MPtrTfyBQAEz4qViTfuUhum63YZdcVFHrfRx6dx63rwbN1i215bo2VidRnZYnAMDjjicVbwYENT21",
  "key6": "5kUtDZzhbgN95FegMKXrb9HkoLT41FNqGr6SN3XtjtEUz72om4eE9qrQo4bP9Cfs5mg2RoQnEcHL8CbBcAGFbH47",
  "key7": "3tMpzEv6hkm2y3WMFoc7M6vyfVTyftWJPZczBN4KxcvU9SQ5D3EZLvMjmM7n2B2pNq7XDAR7B64shhgKAtjghCNT",
  "key8": "2R6cQzZK8pLpYZmrf8pxUreeVMnZiAdkULMf22P9Dun6fRzap4xKgZJNAJqcQZYm9MwF9D6ZysZ8QPD5bSfKsSDt",
  "key9": "4xSdXM4jKATQbek5sk4txgG2mrN2REkX3e4WjgEncLYPTnedEAJ91A1ANLZBDrU4SeaUeMij6738uLmQGmSUUPrr",
  "key10": "55RD7DLNhfmBuEQqefzFJwpdk1T175K5CJTfMkGrXjNmYHbEcsJ8EeJ2wWxopjSiPWegGN6L2UKT5FuF3i4Z8Gxa",
  "key11": "2pbzHDiQZQwD7duBVX8L9FpmeshWSjR5vpNhusRU42m7YFitmPFY6uCqBfZvvf3nJ6zhEpHc4QouNn6ZRJzxcCDo",
  "key12": "DM6Wm1ym2FDB3P9za6UTs2apLuFiHfznZg3KzEiCHPaitoFbf1RD2hW1DXcB2G1hSMk5efVARscqb1ST4xSnUfD",
  "key13": "2Fu4SMzCEPcd7LCcRecsNSFC64X7uUquN3pcLxxqinjLwn99nsWq97Mgeex7Zx2xzpimrXGyYxuQgSf4a1Eiwo6A",
  "key14": "mmJVAcoDbK7gkj1B5SjqMk59YjmucfbsCXUZpUeJpiz8jnsSijMtS1TUVb4L6SprTXahobPAjodTaEoKKno3pfE",
  "key15": "4JHbZADbXJJNoM8eD4SmefkvybxusnVQWCvaneUpUgENjuBGe43H7tkXfZUaYxf7pA1zqVzGQ53DcUzGgMYi9ERz",
  "key16": "66d11MLBsKBkERSPDy75het8vsvcbJw4gsJ4JT6Q5zPmMwqt5UvkQkyn1DmibRQfDRf1npDiMKkBqerXH1BNER9X",
  "key17": "2PHD4cvVMbCKbsHwb5TadHWcDdKXBrdwaZRiHH4rcfjYuAo9bnCKHYTh6MqToSLDRXjgqeM9aXYZgyesT856imSg",
  "key18": "2T6MQjD6TaxLh5psobef8BD2ymigEACLpGUwd7MZp4LKxkW34nxUbEhuLwinpksgwwhETLUs8A77hFx1JCMPfcN6",
  "key19": "3niX6bsWEw31R9cLt9o9yZ3BL1CEn4UHJPatr42g2nuy3WpEJ1A4Vdo2mvbxPw3foXqFziMhxWrsN8smUjuCYr9B",
  "key20": "44hmVKs5JZdKWiij5RENCc3SvQ4W82TFHPRmFnEL5rLmYiHMgUrqn7Umbdtto44wBnCaQgTX9g9FX5m2Bv9rczaw",
  "key21": "4pfLoFEmTJQrMwCZqLHTAXzdUt9XPYjtpFGmBFCia2QmVgRtdDJwfsqA1AFFoKka1dw6xptXutzKt7mAncL5tniH",
  "key22": "3pFPnMc2Y9x4qmANFZqxGr92aunuucbwN1pCpd5LbsYQePRCG5Be8daUzsEZmBQMnLUjizxNj2GmEhBE61GwU24P",
  "key23": "2ZD94vcdQ1jiZtCA42sRH59EjX6SZUYXmXoYeyiynJZeT1WhkHTb47zvobRtd7PSNvpmrTVSYdcugJjAC2mvEnAf",
  "key24": "43qVm92CHHjj4zUvytDqyjQzcSzq9rvhbRjUM96d66pPHiRmDHmXUNA15FvTEmmeVCv3x4GYtSoHxfPciJvD2d9x",
  "key25": "4hMYo3REwoXyPnb2bw2CG98P2Cux9U8RGY2P2deZTpQ1xCyH8eVHXP3qbWFDK2xESaE7CLz5VKMywADg96iejoja",
  "key26": "U54Jr65k1o4wyEJGwMe4oyg5rwqRBGcAPFCZoognUzcTwSTQwkcUX46W2iwe9SocPpgst9CtBhBx9xzLW1vkh2w",
  "key27": "2ytbmieaHHDfo1nYZ5rNGakdiUdAxtMdg5MAoBGYoWmA7Dzan9uYEJaorqxfPHdZqNfqgL6adofXnujTuJfbTN4b",
  "key28": "3ixo7aW2gWudX6VFGsHhCfQtkYaxLeH3u93Lv9eKet2SoJnCvLhJ9NBvJDp4Qd67uJgaLyyPuR2t7oJu9jAUD8Af",
  "key29": "3jwfGyhfTRU3iPQGMu2mSMz1Q8XPcfxhFPrtwGomtAK39k6ZKm1cgmME5tU95qxf5UbmgmRFkN2TqEAgXRbcmHHc",
  "key30": "2LaVV4d25ZzDb3LhZw6r9VgJa2T7zzv1hV2SshEPpmm3Eioiq7CwkEksXevk89kC16hcLrCVcX9iv7sssu1QKg95",
  "key31": "2eyvboD2P4imA5fsMk2RMSaRh72uLnBWYxH8xgFX6uUbZzf5N9e8C38rX8fNR7k4UPZtyUDMFdaxqPdvfJgQMh5j",
  "key32": "5ykZy2A6FhVoDGpKqFoWFCCV4rQQjD6q9kV28s4NmLbARPQ1LeGQRqo4997AThDNknXhYTgmPUuZQwvkLE3QKwoR"
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
