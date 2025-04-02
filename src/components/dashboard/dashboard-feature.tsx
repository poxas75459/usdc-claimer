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
    "53GovjFtFDJq2BtUYjHwz7L3MoHJxySSYPVrtuVX48anJB4fjucSJseNW1g3W7Eu9aADQ7QfYnkRc45FCidn3AVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31vGTa86Av26msuLFgbexFhKJBdoFZqWepiJDNKdey8FKGokZQZXybJZ2yfdtxVs3aRSuiG1hxwwXZL7JjHGQ2tb",
  "key1": "3cJ8yy9pWkuid1BXe7xsdB527rXSyNehZzJgo9ib3SGac5NHEB9ghATD5xbkz5wvNkixTcLdWj2q6o5zc9TKeA3b",
  "key2": "3cytXiGQJ32Wx6VqERsDCHuDH9nR3obaCVgRstdA5RBQXcSKWGX3CgbHSppuYxWCmv8CStAxSGAHUmmNje6LRceN",
  "key3": "5Mo7mU2JNiZet8NzC4p4hcS3AtN7iT8hnPsuSRAAumZWCj8BkJgR1CgCHHTaMH5HLZnTQgvre76Pz1bDicGNWAkM",
  "key4": "4csjhWX3TqF2bJRk45UWm7BcE7HF2ynkoD588ZJxJ4gHQrQAYcoyLrxygfy9Jdgpw11AeodfzewR6eMbpKLGs9mW",
  "key5": "4D8ew3pAVWtyxYcqNsqBj93EQLczfJ4pvQfUHepixxdLQgKtFpzkNqZdZufHC7vGZKBSyoNKfk4cLGkiyBAA2BAW",
  "key6": "buu3vM4PTQSXFYXx6NLBUY2xXis3hAFLVMhVh88iBD2jMsFn8uuT6T1eWWpMA5QRPYYdSNYiqFnqmx3SCWwHhp2",
  "key7": "3mNYh8k1dtssWQwhmtczuH6vWiwkcJiAhb5QYF6CACHb94JjUEj5q8NVYJUqB5z43mLCBwDfiLrs5GqytVdo6qUr",
  "key8": "4zmPYvndQU79f8sYisHJEaPEDuD1VZujg33m38qeWSrYPHecRnCqDr5f5wDDBALeTuYpePwm35hQQPyNuFooMs5M",
  "key9": "2SBLQ3imurTkaywnqRJrFCB4GzP39fLP7QUvH1QyxkQ67zkPdM7fqC42GoqMb7UqgXPqATnX3dLNKeXHabMdhLT6",
  "key10": "3mjtBg4AHfTcanVgy8o2mGVvnDYzHiEUYyMKVDssxjaxejVJkSRPtw6n37aJa4Z6SFbvfyNRjqRsJQwSv8yfzfxz",
  "key11": "28rNrWNwmVWPu5tge9bMgb6Y3UCEEXMVWyBaHo8CqZ8DLPEEVseVVU694hwGaDR7zz7Hc8Db9QNya2jCjhMM9ExW",
  "key12": "nU1bSEcZCLRWXbJSPfbBmNmPRDaH69ddVtwCvvyLZKL1gM7fQFvEDZoWN9U3kzpN5YapWJqRS3PHbsDLkpi1hML",
  "key13": "43QnYentV2RmZ4WYziMkTX2FxMFcTRUv5HK4oT6b4dEvXA5sqhN7ftXioWcZMNCS7y6miB5YEriHVjzRspsc9yY7",
  "key14": "4qoxCYQsYbGPsoXKJmy5PwuH5dgKCsTx2vX1g7QPcrFYhrZnfgvPXFsk7rpz339j6k8XeQGgKFZLCiX5Qmbd8D3i",
  "key15": "xJLCttXKvDrFpCW5DkqgbWgYnXTJQHYQoLBrBjcWUYeeCKPYPTNE6CskUgTdXHaedW1wifgcHCSDJnayfwEabYg",
  "key16": "3az9xfNbqdEsQhiQQ8hfTWrxnNL9rBPzbTTdqqavrkb5av6YjCAVSnCPTKfXFQZocxaDeWCDjTDLBcL4uAS1sp5E",
  "key17": "2CcUkeTXzaWGXdm5CKALGx2AofkuQYUWxGyi5xvjRSmTsbPSzf3sK56oRnRmGhBVrUJwxEB6uh5JihxdSH7tVMd6",
  "key18": "4bofKRpJw1uRfcbwhrypGChcUbDp8TkUaq31fr3urYZogD94dUqn6ckPDgMHXpSejdHRHNfGfhGxgdsJrFXC5Qvf",
  "key19": "5tjDKiRwRapAaRrQKqaASFiA7v44qjxsMhdGMKri5G3UyWMamqyymnQTm58NLfCHGjP4nPdw3EWnizPtaRCLmdwb",
  "key20": "4xPGrYpLYY8zwawuXGJ8bzGQttCMPwBtNCfbuJY5aiLkScgizDXPxFRoPbJw7d5Fbpudwufne5atznmmExRayvny",
  "key21": "2XVHa3qxE4EkAr1Cd8En3ER5iT11zrBdhhFbDwsttPCGv3BJ55V18KNyXJ4NpUZjeLwqqpuDXL5Xw1Dt8SmZMQs9",
  "key22": "2BybxFJ83MGWYNj3kwnE8YPq8vccTRfpsn5S1zijpniLKsFWrjTwUp4V1581LLqkFyim7vVfg6ZqXxA9eChZohJS",
  "key23": "3KCsnsrj7DgCVvySdUrPrMSEKsKgXyKKD53eQGM1kvqcLLECYijMxP9fp489NSiS8bQkAbCMMhTEfsCgwXqArJ9u",
  "key24": "35XJoVDxBvFLGx3KmnszCtFE69PfijsmfxnvEZaY7D5qAsgzSwTYB1iJ8NCbsAdGugzCoCwWhm5yTc2Pj3x6Nwu8",
  "key25": "2TKCHR9R6FUtgf8mDTVU2WKUHghuW3b13osWFn3W6F75LuYhrW7FyfkTjzvsWr7t7yqHSR8Bwo5jWX4cdVHqsD2n",
  "key26": "5xXEqqeoQvaRWFMaKyNqhJgQpxvr37CfAN9ubjz7CtrMfPNCTLhpRjs4KCBf1Zv1xAxr858SBW1i4wvbMmWF1KGW",
  "key27": "5gZVy728bD6iPg7Lm87giE5hy9rqu6Lai8PqPiJcjBAEGZemPMD2HzWbQKGESe5tNS1uyuPGWvw18ZaAx4yJZduA",
  "key28": "4HeJJ16JLD2DxhDePXkP1SQesVJiPyDcTKvfwfky5edWgdXdaKTDgkBZ2fUvJVpnDpsnPSGhNKQ7jRigYJYPnbtF",
  "key29": "teM8vo5vKqXcCU8PuUBGh53J7xCLMSV2rvGFKFutNfDMGiagFBRcM8KubQwwrq69Mnt3e3bKFvq1gXJmyuwTS3Y",
  "key30": "cKRGNX9WdbUWwUAAEGJ6kKk4YAsp1Na1beEr1f6sdN7pvQ5x3KtHNFSUewbjhyPi4kfZywGXamVEq6JJGYdVTcM",
  "key31": "3cuXoiQyXr6eUEzeWQbj2qwU2EJS6fDU8GqcSQ28mSs2rEwFVyZM2DEkNm6kH2LBhj1JRfbqNuK1c4gRxpkG3H9G",
  "key32": "3MktEZU44Stzb2vCPSXoqbGBNRXGMg7cZjtdzRr5wUBerpb6MFeNED3gYVY5mdGUT9rQYNqyHX4hzxuFZk3z5YUe",
  "key33": "4JxJ2NsSH2zL4pbdsfcpn4G9uXU9sDboBeTZmH9x7qVZgi2ihiXyxeQPYuJsoWr6S9NXEA1vF1hNbtipt3oqztM1",
  "key34": "5rZSM2v4oqRRT6TnvbFCsFidgv1AcejqN9vAKhPUuQBupqfP5CGnfJgAVzbxDmSbMm3UooZbJU1w5M1shwZTg2Qr",
  "key35": "4HHtJxmSw4LPfyGqTBHpLDxSHVwAGxS6tgvrgNJNvap5x75stD9F79M1e1YqTeqyos3tww2bxYECFFM1uYKQk6zk",
  "key36": "4hzDSDx5yhGYDSYjc4FH6GyJQU6diV5R94MPebSegYenWfvyxAkpouR1hu9CG8bBgPBKZNDKWVAQKfeQ3XAMF7zx",
  "key37": "5Q8Wn8pmGnxBP7Ro4D76di1hgomtAhNyQsy6bdMNViVhEUhuGE65Xb8fiBJtBgkBbr5vTEZfLq5VnVTTHQtmTt43",
  "key38": "3m1YfXcEWAq5pHBixVcZNCaTSXtnhBG1ZJ4A1UEAGfBWzXoM3KycFW9x1A1kXmD5vJb51xcjQfgPXhnkFuSyQVJf",
  "key39": "sDyP19JDgCGBh4BgG2GDM2KzD9ZKLN8iNoXbs4yoYrqRc26AGQoLciCWWEvVsdVx5Y1hSZ558WEGJLiRWMXMkoZ",
  "key40": "j8VnwfUfM61SrysS3fgWNsJSc1P9m6gFJUeBe7wbLWSmhoErXhYt1cBvPChuVpeuWMBABQMytPKGjM4yWr6cHAK",
  "key41": "2YPfQV1ENyzmMoQaNSoQ7wBDiBGGiiY3oVAXctfuYvGeK8EZNCNZB5Vh4VqVgsz7CqaHQPnRpnyGLnMrVYksXaUb"
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
