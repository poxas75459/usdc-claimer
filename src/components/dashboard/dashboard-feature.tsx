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
    "eX817zty31MYAH5ETzHZZk7PWhqUqQZatQP7WcmawKhKGPZ4eRRctqqWrRMbzmyA9tkimFUWbvnZ3f2oSp2fpcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fXF8joo41z2UnXeQfHzdwqmyT8W647FPg1Zkm4TjVTRuQgCBY77iXjJzePd51pEvDmnECHJ7eQMUErtc3zY8qY",
  "key1": "SPWTG74pSJ6xranfvuiKiacJqxA637KJwAn7Tg5hpcSH6B1W5bVxQsX6Gn2rQes3u94YKhNRPGboYTT9vwZHY7n",
  "key2": "2vQaMvH7KRSEwn19JFt2gfxieZpwfDJRHZgfGSdWcZDaZYnz2Nvr4Vhtm5Cih1mXmKy2Xes9czVFjnhHpM9xV8DZ",
  "key3": "2s7n4CYS3gwiPfrdrkBsEEtNgNZU7jjHGQsRA8cF3raAUut3e9ZST5HTLDPpadqye5quY63vRsLgsx27QHZViLsv",
  "key4": "5oLYkDhryYBWqCcJRzPEd3YTZob7fDeqtjXLxnEHeoD3hEqX6YjrYTmJ4tGkq1ZnBCAAyZi1mvJVVsMA6k6M1PCd",
  "key5": "2N98QXDnU4rQKFeCTGfTbHGdsr2t4XhnHqGgGiYAfVnuQez9Xk5eMpbs2BCwx6BPo93K3Gu4vTxVkTcQdXUVdtAq",
  "key6": "4KsrohNzozMyRiuAS3jboFeqVewci3ofbCgu8zTQrw5XjLesKPkfMpWe58kC75c4GBxw3TYe6hAjYUPg1D9x2XUQ",
  "key7": "2SK4KjmTu6Bvcnpg9aS39JRFnzu6E7QFquPECxh8LT6Ey5C914zb7EiNEXQQB8X9w9jYBpBEBEi6Pzb1WY3CYNJ",
  "key8": "5C6d1wQLyuqxUtmYm6FVFF4Vv7J3VfEdBeqUedycJmeJ8cDeeoxbMNqNAhQnSQH3sNW3ZETqpPDy4hkRPNxToJKE",
  "key9": "63DwQDZiZrVW1owXu6v7W7hCwWCmGFAmxgHRFsXSBax867xgwbJn7KffDBTj6ENFHMNczMKba2UH1SjaYckoiFe8",
  "key10": "2RA5oTnmzvLFgwWbBryy7FWB1dJAQPhp9Cx4SwaNoCLxP2viWWyQfHiXjkgSEL6Yeah3CyUDdJU7o6VdMqyHemyT",
  "key11": "ZYpscMiJVHVkRbqvqwAH4RjyCdaMVQp7R5GbTZLzXBY9oPJwKtVsdz3xjpMuvADH2BubJ96sZn3MHWW5yK7etGm",
  "key12": "3ekrJT6qiY82JTGZn13cGEdoov8vwxFpjPRKyaecZNtnXEE6Xg3EjrUBf5EJQRamuXdfRyqLuoiS4aeWBmshWF4y",
  "key13": "5woTzKyKcvVmwy5Y6wQZPmyFw7ixbRCss9o6JPZDZAejQspGcTpuyW1FQU9RbfbrCoVDN1L3wtK3knhypzPSsfrF",
  "key14": "64Ef3qRUj1Yo2NM23WGBK42ru6P8fd7v1bU7mvVm4ALc6rqdjssTuDkL7g3w9w2fcoUUPufjTyX7mWFxkVpVb9vy",
  "key15": "mq1Xv4RBRbvBNT8igSBuPqueTtXn7h9JPYCCAR13aWBo2Viy1kwjKRgTEymDrQsCz68mnyCugaYHJc1YGWVL9UP",
  "key16": "3h5wC85m4EooursgjYpWGmFYznNZ5kvBY5X6t6Qd9KtwBYGofybt6gzWUYC6aoGt1ZrBkm268iZCGxbhbPmcmHYf",
  "key17": "5cs1DGH2KC31N6nuyBLsCki12etMq72KU6VWPghinMmV6Q6AqwzDgf4wWuShzgAvUykmFJMXrAtJwK675rZsZSST",
  "key18": "B5PfseSdWdR9FdXwvaaAE9D2sfDToKhVRmX6pCCRqViTfDu4c44Rpv7amxobonJniEYMe3gRGe7QVh7EJC9xXGJ",
  "key19": "331bJ5Dp34gqJgoqsasQgR3zmS1RvT2te3rtDNNXCa8nmgMdWaoiX2ezMwWocnoeb2zScLoWBGaRLV3Gw8vGkrNj",
  "key20": "2aTeSm8n9dWr2QWM1gLjamvvN6ogbH45oeiHdVzJPBPWkyYy7W6vpjB37PWyhC84g4nZaYAiYH5dE37koZyw5ntk",
  "key21": "RpXbvrEjgABB5g1YQna6QVspH36Zxe6piNbyx7TsdPEA2fZAibytm1H8nr2RiFGjLjrjrAiKqvQMeotZTuDWhBu",
  "key22": "64bVHLGbQQjPDtXDYWxFoxmTSywtyaTbWcmNShgJ3P1V4wZQAVafrb5hDsHvVkhCxrSQwxj4bYcWnWvCPwjtqMHi",
  "key23": "5QYopbre2cGoJGQVY35cVGCU7SJufKzkqhxtbJDyDLpZMAqZBnbL9F7RV9YUG6hsxkSiveyksxQR2nPujX1Dx35a",
  "key24": "5TWVXkd3THBA86RVvzCNfNvo6tBbJAkqNozaqTq4jMcVK6JNghPcMHMRJvqmeTCGETcuosa16GRfzFXJNy1Y7vYm",
  "key25": "5BZ7HX2CWQXXbDUbiNTbgSZtFykGM3dH7qWuTnRVRqTwjtsDymyiux9cv7yBp8UfGKuMj98n2PkbThcXpSG6j5yg",
  "key26": "zymnkZ9HWLzEWSkSoQWefWe9NswuzA7Gposang21oT8ngt7u7fFxg6488irSNfbR9rfZazRZQJNYUak8EwKKzQN",
  "key27": "LvYphTax95JWakb9nekVaNhFRbikZHo9kAWsdjR4irU9oc8Df4sRdQLUSSf8mzD71rGv9md3oUoH2xNRDyYd4q8",
  "key28": "5ok75qGNp6sqkRJSFpWVNCDxrkmUvWwsrkMtY3tQjPAYpm3iZodU31ywz4xedLuGoopDWZRzMjxaMhtsseDznGcQ",
  "key29": "2ywaVYMA9DcecSAzaxFrb4Ay3vtFqPCiigZvam49KUbsAgqCSxwcsiKnKozaXCdr83NuzYibavFnHxgbH9cnYRv5",
  "key30": "3i6VoX7AtWsPYQXb6ED5Le5s1AUGJEMJQF7Mri5i1hu6fck8FqR4Wo7xLEVs1BCbumB4HWjpguXgAKEHmuDe6vav",
  "key31": "4cRdyDRFQVjpxgAuvjpudXpBjEZSQhJ361B8Pv3eZVk8f7mvdats4hti4K1rt1dUcTFiUYExRXPLrNdqSbzdqbNC",
  "key32": "5uYj3dthaUtvx6Eg15E12cSDqt2p1PX7CgHBU9DxZViRvTfLCPvBZ4t1Mj3hbL5UactMMD43xJkuL8skKqEAburt",
  "key33": "4VDBhhBuefdqsrhMWFr7fQ2mhaXRmpz1P5Nw4HbiMwuKTxawWUAdyjBFtzmwCNE6NP5vaJqWJZJxDisd5viGMRVu",
  "key34": "ehxkKmuGoDrgmrBbEuafiGxvqUd6ExvyKmuzH2kBo2d7ikgvyW6xVsNS9iygrJd2qMJxFKYoS13Y5aDrAPVmnMz",
  "key35": "3LUT12GQ8s2fFtRsSmo1ZjM4Lrpf3xtDeg3TEyNNQhCAF5cxZ9oC3TwgaXUYX1Q77bFSH5JcnD9sky5sM1ZXK28p",
  "key36": "5ncEnH9htqTNPsoyaEC9Prh3n15BUozVB7mbCHRjSGHrMCwmpwJN62pMM6TtBLFtLkrUaYrRcvt5TtSb3eBwMd8r",
  "key37": "2Lg3dy3jB73yJHKKC6TLLVbwQnXuYRprcKvdyDo5RuN5P81mYWvTp89aqAgfv7RunYrxANm9dxaHnrVzPcWNJv1s",
  "key38": "55Ak8voVJXiNewe32XT3wKowP5CUenhmnjj8QuktJFr1u7g21GmAvyJ8T7XvBVdx2BLvxmbR3PwU4DYGycbb7xFt",
  "key39": "3KA6CKpFhQ8n6LuQTtq4GUGhTxKXBXoEnv9R6VmXvxPZb6JpnNkkT5mvLHTP7qjebt4M289cDYyeNiZBqaRRc1VR",
  "key40": "3Wh6mmSnF1TGDuF395QE1B6E5fQDkZBAi6TfCwT7NqoJGBCFcbXUXXz3i4ecWBZeS14rccJ2gsBMucqUUgkWg9wE",
  "key41": "5bJXCi6Bu2i5qK64XkrCC6UTQxmaBFUiJfTZJJVRUrR7wLMZLD2WjLEj5g9qniy7zkETPCZbX9vPhgwf3EFBzPmD",
  "key42": "xsvn86Jn7FcWNubSnRSb8PCtdqp5wK4otGq2x5u4e1Mryh8uhK7ExgJPwWZAvrKfBRUdqWX9TESuAJnbRacJsCB",
  "key43": "w534juvEp3a1FqeaHEELCeJ68uaHPpTJejKBwbdhmwfu6WwZZrLkg5HQ91tqT93dXNqFcrU4A1LgNcVbmEMSZKJ",
  "key44": "4x4H7bRSeRu4p1jkV9fWpjRddjuT4cC9PM6qTwo55QB44gzcwCJqKxgfAJADujAerQRAsR6dgWsxDey8LUaBGSAi",
  "key45": "3QcFPvXUzjc5gCtdvS6i1jx7vVduu9XR4d9bun1D6evUesS2iG8mKtbXsqVtbefhmQbhKNNGegUvtX5DQoqbFPuc",
  "key46": "51pQ3m5WsRv8Cw4HbmanwChrPVw8ofgUdJte9dChpyCLKJgAtN3G7EqWp9wNFjEauo1nE64rLciqaBdhUj1UzvD3",
  "key47": "LBCShYGmNEmjP4EbeMczsGqemTYV55JepguFsykZy98zrn4iA1YzCY32cnvwCzDxRuvRZDbSPHKMrtLYs5WYk4W",
  "key48": "4ggJwirDPESqMWvJLV4cSyR83bRCMA5GwXjoTeeqaFSBZufEYMRiVbTmMZdpokbDQmed54cKsKTm3K4dFaG9s88i"
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
