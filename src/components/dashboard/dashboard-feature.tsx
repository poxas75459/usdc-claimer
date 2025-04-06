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
    "XtPE6aubs2y5c9zg4fs6QgnbmNmoNDHsoBLhh4KoQrXRyZD9Et5eqcAB9bJeLuiKSwFv7Urchp12u9CQmKctGL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQibXpLTZtHd4FbqbVfW2sgMjxkEh9NomzWK3otHeBGUDaWGN41t739yw7QZQs8qezNCfuZHWVXp7YbY7jzMsQE",
  "key1": "2VqEDDnp8axFTgqUBkpSyCCoHuLV17BofPbBJ9QX1NQWiSCtyttjvD5M3rLhyq5C2eFQ96cm8WSwtuQQnDbRtvfN",
  "key2": "u4DPwp3UDzeb58AsA25LVk726v1PkLF4sqbg9p2EauzAHYBsNnjuhUjAowqQSVXRYdN6DVuYj3iSpN2kZ1ab6pp",
  "key3": "61ABzxVg1WwQ3qf77seoUPopYg9xaxvJFpYgQs8uuuRgwaVLj1PXhxLih1mDdGrzrouxHMfZqpXDnuhCRPXTmw8y",
  "key4": "2RvMeNENEjTffeahHHMPjPtrVyLovWRm5aCEr66uqPikX9cjRWkHoZpmiungFFyaF5G84KS9LyH9V8MmqW9X71hi",
  "key5": "3WuELT7y4YVfDU1H75gCG6AFh1KRbyt1GdTwLWoQNwvgAaWsvHDA87YYV8h4Sr6KhJ6uKzJg16VwvzLKgUzw1XLg",
  "key6": "21Ex5UzkiFKxTuE3BN3mZQxDeetYyouHwtYsPkYyHBaqT21KKfEtVtFywehuEvND5H735ysjg7iF39eLCmJDzZet",
  "key7": "59haMbS7z5wZ9MuS9d2yq7sYWXpmKn3TEtgyQubjkPNEgoaCksYihX9QxAJb2qB5EWkVy5WjmW37DEzHJRBRsc7K",
  "key8": "2ecLFUceVe5CzDfhwGiH1mdXSVo4WNJorfyMMp2mF94z1vSxkubAB5RRX2bZwtpAQhVFgXQcLihW9qZHNt9ckqn1",
  "key9": "5E6XsGaLZoYAA4ZQQwM2YuzAAonyDcy1Ks25GBjKFRiJkD5ypWB28q7Nny9zXahRxrRmF4cqjypCd1p2esWMqq2r",
  "key10": "2kWW5q7nT7LALrfpbaaRRnULt9CDBQqgzQRoDK5JCF6NxoVCYAeCEpGffMi1AkoMekCvFPs3QCqavNvP2txK52JS",
  "key11": "mDknGHwYSW4AfYP5s92GtetxNeasWUtDkArNHXvxTaqUbZpDd26BV2CVrv8QfBytXC1xojnwXPixQeP3wLhe2Nf",
  "key12": "4gskosTZJhiMGsMeaJWuNqy1DXmLd5XxoHE6TDDuqezVy7BgAsKgyU5ugVj8XVmr4Bi69oHpZoADggFNZtNN7UJ5",
  "key13": "4dsHK73LGVtCwJEQ8AevYnBimAc5AqLx1qSnRDyPigwDBdEzJGzd8TbcH2UbKiQN92aTFPzuSYizQXYthTjyDGA",
  "key14": "JrM2snDYEqJy2xkGoFxVCyAXPaFZhstS21dng5vPbKC6cUT3ywC1M6pNJzeaVaPDYGC9pdQE73WMg1PPyXAf4pZ",
  "key15": "y2SUWDYZGprhL8jqKSCm2RKTWSUdXoSGpFYhcgbreS91vr9xT1y59fDDsVwvoZWsYE9BkabU5TKoPGb3C3V9ed4",
  "key16": "4zfsiqutHRPDV9mMh6hc8QiY3t8U2mcUUv75cJVjQGmmUt96RYLax39gjN3fE2DqDwRH4anZAADTiqSQmRjeLzjb",
  "key17": "336Rpt7SkZmQz1usp2Uvm5wBAdYE9wt3vQEMcKiHmL1FhrYWrYVzSd8sKxo1y9Z78BsLau1thapBmzoGuh544VRX",
  "key18": "58mPhVGmHbnB34tSUFxaNcpfHXAV2hjGjp1dtJVcUU7cq4eHRMFTAvtSzedsL5Zk9eZADvMYZ2jR1uzn1SKq7xk",
  "key19": "es42xxsNZDQHhWqboJ6LhLCkMDhbSK269nGUAJQwuqhntuAYfP8QGpmFs63GDNtpyHx6K4JPmUaFsoJksBZ8DwZ",
  "key20": "RNZgdJcfYpRkawWAXeRZPhStWaz6w63npiiBnPSP8iMbxc1prtUzAQhnrBh3rWdkHvJu19zELDbMTs9dqy7fa2W",
  "key21": "36CXRZfy4ReUbagEx61g2E8q8iGM3E9fP2GVZBmBBgTjsBcUFbPq3uzx94UiJrjENvPBz5U5hRVdSmwBBLzzDBAL",
  "key22": "DsbyLLBNTwjB3VmEqjrACKaN2niXFATCsiNYeoXHrzVb1ncYJUMMyjDCXH3AQexKf9LaLxmT8X14CCgv5c1PJqw",
  "key23": "42TZUsB7SNWkNzCMPHhjqT9RvyHp7SX411r5JtNiWGu67BaGp8p56u8hXq7sPbTf9d1VP8gZPEDcPWD4y1C4wVe3",
  "key24": "3W9UWCHyG5ZhBHfoRrDFrevEKc3KrfVKK3E4AS984LP5BF5xiQY2WBtqVQsjDiYvLWVRnsdFPn4kigwcua8HXR3J",
  "key25": "M97RD8RGKqic7w9h77YGTbHgyK21hbuj98LK1jwYcDKg6cF83SVcPHnDn8qYexzf6vD5PyNs15JsEdiiDxq4Xmk",
  "key26": "4wD1HASnkThLDTdvMgEUpYmsnH8wTKaUJjpqjWnTSWwxhkWYjc2QZ95t1VHoWyLjvgWcQWL3wgY1LTsgpxvbm3ZX",
  "key27": "3zktyJtK5zG6uggX1AHNw4s86Mu7EVArejYLjgiQkshHWyJNLPnvihUQGKG3vEH7GZesUAJk5fr5noppSGDCamxH",
  "key28": "5ZmPn2ZaVWDpdWYEgpUyEhcV8aepUKVEUvW4X9DKKjqFgrYC8C5aP3iBh3QDbfpFEdr5aU5kQLMREtKa2Hgfkqj5"
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
