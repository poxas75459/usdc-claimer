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
    "5i6hrkpQkhxpxSBmgavQwivjnYiP3QzkrToZvGW9i7r19bNbZTtjtu9zDH42wyygH2EpX3Ah5HxzcgwNwvcRjt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjcR8CsMdQhRiJWNaA6HiMLkfrJcqzMrVch64gQQRAweLVeinEQ2Yk9L8R9JpbRSoSnKfP3DYmu9WRd1h2ejoqB",
  "key1": "3PUBhGe7j4DoL78Qjjs6arcLUQxjY12wVkTnisjYeUJvJ9WbhNWmcJQJ6CGE1TZ3gJnuV27KCFWyFhBqkhdZUq1o",
  "key2": "4UvBXbTiaKH7ZwNTAEvTYMBSuhfK4zYCGh8Gr2trKHstBGmC3LN73iD8wwu1NajVGzUnyKRqzVBzH1mRhWWNkhwv",
  "key3": "4ntgncFq6i1U5cncQckDumd7KVwe9jE4kM1CeS4YAihvcFSv7xER8VZetiiAw8kyCcS88Gf3QR4FgqbaWuDcmkHj",
  "key4": "43XN1UrwFJkugzmY2558fQPDm7udDCmULPFYXobptSDZcDxA6WsdtVZN88SKy1ZDEQrCrtrqtK4v3XSwhzjSLgUJ",
  "key5": "3QqfN54FuQxAyh4XiPzQ9iMCxWhAf2xr1Sb9U6bpZYiGQVh92t9nBstk38NLjV4q9A4y44kibQMKZuAJYB3ESVyg",
  "key6": "3EMnzk5nB4UEVJW2GdVAJMGhep9v6Vjafbd8ZAXMK9JqUp7T97aTLJh2CMsmSBAxjNM4yfPYqStYqkoVEg7oy16j",
  "key7": "48qQphrPktkvYYJRf17iAVNAvW1MEGuUcwGJHpNJxaJh994KGrokpxJ9JwJnivW4FV5xD3Jwg6SbjHeRLsMZ51jR",
  "key8": "5gJA8F2V22E3HS2uHNwPh9D695imX62XRZJ66GoSa9FbjDnaQGi2UxwTCmrDN12gTCUq62CJrBCdftRUs4HfMrTg",
  "key9": "3K95PFoBsVWSP97wTMAQLa91GidMvxpud1SRep4Rrva3LaNUq6tycvW61eejigdfwXQcnsM3cbHQkPZhbPJtBv9a",
  "key10": "yGYzNGKn3Wk7TeT7JmVw5NPpHiA5HmiNTVP6HEUwh4AoqfXAnmr32DujThumvxzcGzqx3ZcdcU3WtHURRwpDcHn",
  "key11": "hXCHsJXutVabT6Yf2ds59gizaENrm4cNfLifqbCd33qB1j3tffq8b3YMGDsk1tbLXYS4QoNwf3E1osknrah3ky4",
  "key12": "4cqQVjktqYAMuUmgCujbNe9qtPADkUtDVAYXHyyJzDdppkN2JumrL3FcPQ6YdoLHL2EfbzZfWn28kvygwC1fCAgp",
  "key13": "3yj3JWP7tAeR1Vg3o1aWFWjsYWMACBPeMGC9Zeto7wj64Mz8JUfWJgNruZL7E4Ly1WTX5Pzt71vfjUknibPs6EZK",
  "key14": "LdksUSYGpQppMV5dWv4WvWKAYRWEZBPtAKM52gV8YYdJYVxto6tNAnnp9C6bv9UDCDxqtUNBxjP1ehfvtATGVN5",
  "key15": "UYPndeGQLJLkvn7zjJx83HFwzAM4BgPd3mdRSVuUdFd1FkYegNA84S5RL6TwDoEMWeKqYkEwMyTNLVLQYYfdcic",
  "key16": "5p2kMAqTx8vrGNz3e6gKd1eBp2xreNhCCXxMwhKN1Ry4DGdxS3VCrZdqWoeknMjyNuDZeh1RaARRTpGYUazBgbkv",
  "key17": "2VLe9saZFBqZgP9AM3aDpKAsyD3uFn1nMVPrzqyq1wbVRHxvoA1eRQ7RMqt8SwvYao7p3Q6PNFfNQNxykxCdRVmq",
  "key18": "3MzVt86rXWQiG56NZva2JVA3a9Fsu6EyW6MPKYkmFaYiZw6JY7NNiDNrrvUZd2WJmbz9JCQncyxVzR9SUbPHhYN5",
  "key19": "CNZdcYRKs4yrfbmD2NhQjbu3YRaiD26tUMkEcjAuiX7P4LTPj3eMD6BzD7aWG1wAS2AAEZdmNVBmMELYavhgp3f",
  "key20": "2yNQD6WNT9enUgHvSfbzyT1ZSLn3i1AGT7fEzbMh1rYPMLQBJNApfgn4CJdN5e8EBiadgmnawet1WYXe8n8u7APD",
  "key21": "YZjfZPt57nNSz86Ue18DBLmP7epwizxN97x8p8iT5f5AbRxuV5vopcwNwq3Qwb4HnSKdryHhjFJjtnhXomZt7po",
  "key22": "QH8UbUXps83VcWwaQc26rDpySNezXcCHm9eXD6WQt8Mj2FxJwae1zRFGkqN5F6PbCbYskL8jR4B2hRJu7dPS6ux",
  "key23": "5mp3wG7gZ6m3XmCVD1PXYPJr3B38WuFxdPVkEkSQDSdLU7jg8qXmj1Y53Hj2kygFC7cVG6U3kKtxMMUrNEkcGJoE",
  "key24": "6bk9aVUJhdVuRPR7ckppKE4Tenv1SRwMukMyo5BhRhMoARqv5zqc1HygEWuJeEqgUJyudmzAvoDHaygDattYASv",
  "key25": "d4PLwcPhN4qdg7USPQyiKTAPSrBumxXSctssFh7a39nZHAsi713NfWnG8kKKP1dKiQ9W2xCFtBXsSt6i5zijru2",
  "key26": "3TfD63sE4ZuwHqjYev2B3YzmhbPzoKyw2tTBsPi12JKBS5mTeXRqaPD5SPLhHePnw97KkyRGk1v7rnx3B2myvYWc",
  "key27": "5dgcxJ1M1RKhnmRNLeYpYCKKRrDCJ76tgZJAeDzgYMxBdVtXZ5wvcM9qwjj9Foae8bNYkB9Ab6zjjmUsbscVeQSL",
  "key28": "4Bpt5XrBYE3FVZzdUA76e8Rjz1S77stzUSmcefc91G6x3ZF7FshWzRNSWy5M2EzVkyZkn7GRSRERJDjdjXdiPjn2",
  "key29": "66fqKFbZ65UeGuaqkzPqxcET64yDC7r5C179SokdY7E79YunmEkAURa677RgRu16BULvhpbrR8nA5X2FK7MMwGGs",
  "key30": "5ge41G9qnujd5fBybQMQx1hWAZsedy2bCZrGZRKAcMrhVeE1FqLA1mTiW5bjnSSnVD2vViAZhmUP6wbmC33faQQz",
  "key31": "2KEFotPRXGBYvPBUfhqV6pZ9Uxdw3zbAbE1XQRg7dvV9meP2Bum7MzSiNN12rKA242gJ1458F71nkRG9iyMqHAJd",
  "key32": "JFYFoZNNg3of4rG7Gw2fJP9QYdZcjbxYemXReQUuLSPVs2viipXNyeHxmk8QmsEVogWcasjGhPw4NdBnTQJSmVD",
  "key33": "4KRvbiAesCmkYWCz93QELAkX1151kGL5JGgXrsqLSNiuk4jhyEFmzCtWPXdCji4zjwZ6ezftNwEmkFM5Jnv2NyuP",
  "key34": "6gNwafKZW3ZafCGCJ7Yp6HY1Gpuub3QNXxRHa7sptKPESk5hnjwSjjExgKd8AXrYG371CpmbeJk1cXFxKTY6Gv1",
  "key35": "2zMfR7yDe7UnYtrkS6aq3Uvz1Vr9U7nHbv4pFm7nNjt8z32PHTjwviEjzwQDBoHvTJTqeB93Bp2j1bRBNca7zLhW",
  "key36": "2ywmQAqVs9XXUuM3vjJnGpx3W2mRnjX25XGSfNttBR1Nw7a7EGxNRSj74e1HWB2Fj8p6YF4goiXM4E5eKSV9vE5Q",
  "key37": "27teA2X5UfuLc2mnJz6oWkf7yqhu8wuT4KTfVWWAmvBmT3LhE6QZNscvtjrDREyCn8AHkm2uhPYZdsea2uw9CArf",
  "key38": "4RqahmyMdoUpLPdAsXQ7W5gJM3hptCQELherzXvB1dBCbW14EV7WD8wvicD6yw81WLwSgF2qRCbvihtkFVEhsYPy",
  "key39": "oVdxEe1jsVsg8vPWM9VhAtNgZg1c5V5Wu9F3KXz9NzX5k3mZTdZfmL8AhyZu73wzvcsx9TBvZmiThmvyGbzwu2M",
  "key40": "PxoqoTJdj9FGRF2FeCJ9e2nGaLvsuyKHsAhqvPVp1AFuzfnEJh9gt8L3yishV3A3GM7kDtehNEGeH4RT2mn3fVC",
  "key41": "5uDUBL8q8U5W2YJPxSXNHxN4xcHi16836EeB5mMguoDATynAjQ7fhicPtTgbvuBbKw4hKUrmbeJoTTkr3kwUsqtL",
  "key42": "2BKQPPTdsEKZEDeX7HZi9DSEXJa1fjke55E7BEGe6pCPVWCSvpeipeVzRMZJMgt5JNXCqs22Nb9pd5SirPEYoiyF",
  "key43": "uTfFY8gA24PiPTgPF56a92YYeFM84vEKGgDqt6f55YLULpEtsCzZUCiwJk1gWDzHFPU9WDsMU8Fd2CrekL2QfBe",
  "key44": "4tK8rHSbgA3LK64Pd74Pc1eipWPsSECaVWY4YAoC87uM1TatJYwn7Y3Yh8ARoCNqzAjaWYnVVWWyP6ZaC47pxSes",
  "key45": "2EbMMz2weShHKmp4rXspmF1Spm5FAbh6A3yj5VK2JH7x6dB2dgAzS2TbPutMMhpFzmd1JM6UpCvKWHcjkibM2FjH",
  "key46": "8pjrV2ts5iotcddSWd63iV6DyYEjRGiVRmdK7dDY5M9mYo3GeimXr2n9GLpe1gC97mv3gwPCDRjGL2vQEQRRnTT",
  "key47": "4RzyMjm7D3TsH6GjrBphvS3DzhuFup8J3TRpceudoyaehNGkJrqTifGbXzsEWQ1u9M4RXXFX6uc1yA667Vb8Mgiz",
  "key48": "2MaD8HupSCVdqEhCfd1uCYKABRye7E7mrAMzJCE2ogH3FzBUj6gC76qUyU1q5rhwp2GRBcA2tFb8W9vj19XrWd9L",
  "key49": "2S1HbSmLmQcRYaG9nyBK2rwDfXTPFT5F8L5LhXARhgbLQ2nucCLJ2mCv1V5qgnZF9giB5patyjVfX7ZghmLR9DYg"
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
