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
    "2XXuTdRLiXLyAqznC5EnPiK7nM7Z7C8EdcjaRqHSFUYSRts77TxksNHwtWT3Gtx73cx1AgQiQ4Y8nEeDkBG4mqLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRcsqZ54swgiy4g6ipG9Luqr6Y95cQhMPhxYTF8grsBGdjaTAh2mM8XNP32DGJUQvpcHLtM9LgfiNgBF5eK6HAY",
  "key1": "4m5pYwsAyzSNW92RMhU46PHTcnhhXZvvhkLhdBwoCzf2ftFyFkzanqakaRg5bomcakcehThgHZ8ejJj24SLZiy1W",
  "key2": "3F7ZpcjRfkJ95G4UnrwZFttJxXcLd7KBsmvAhqNNcAXkHVckAxFMKsBTeHMcEK29vuHdPUCc6d8FSSLVWR5Lf48g",
  "key3": "3bhUG7cGdXLETdip43JJCdxe4esotfhzkmoXe4rFBPUp79XKfo3herA8LpAVpkoR43pcSESeJZctreGmJgVbbQ1m",
  "key4": "2Mk6qD9gzfjVuz8SybBzZSfCDDqyHWLCkg55PjgoTrJmWC4CmymHfbFQrovqr1xbjjVDbbQ7kyoHuzp27w3KfzpS",
  "key5": "5Jfr2oaa9QX6wrMBJPi86h9ZQ8bjxyDovPfPF1ZFjK86UPzUmQQPqfy81J9KiVFj6EngZii4J6N5Y4LtzJqh1zoB",
  "key6": "AQpNfGLAn1jfiynrs3Y3VKEXArtje583CCv42DNfCtybpHnL5Vx1m4K21XuUijJa9cv8QP7uBEvJbpQJcKq9Smr",
  "key7": "zpGF5nN7H4NdqitGQce57Rk9eNTvuLRJ1eEBSd8WJyikpjBj84AyoF8M27febYumAG8UAmXLt6voSKpAb4osUew",
  "key8": "5512EKAyMA7kZR2cBozYuqfeiDLBr9HrEs3VtEYajLfxPfCPpkQbKk8wB7TbVU3qyNhHqeqww69UdPGoAf2U3xRd",
  "key9": "4cMQYXjdFsARXVWtERHsUGofbhPYFJQZJnPAgyw9jrgGvanvCozVEW1Muq5WDcFxBRa6HketfHABaSBTjNCAKzVN",
  "key10": "39YqtsZXDUtLmbTSfw5CJURQ5bC1opQScMFT77sNnhm5k1Bh5u14dNkgqmFYqbK14STuJvoYUvcPvWxAjB2qp7YG",
  "key11": "5WK4odiX8QLynQZDZfSJgSzfPPEoA49wxRxrdh6qPK5cEPDTUjyVoC42nAetFJhBm1i39Qw8JCvWD5s8TWaHhfw4",
  "key12": "2DEKFDWRdT73ZW1pHHnYLcoUm88Zqd7QqhHwZJ3krA9tuE9tE8VYnorectbeZGWPAENESzaRfAsiUT5NDfpmHciG",
  "key13": "3D6WNJwo749wTn8yQeJWQqkMrLEgjZQw7nN1tU5tua5LUHeWPx6aTv6Ce1HzphrZ2ChhRywaHvghbeHPZp55VahL",
  "key14": "qKXyMpuAvsVRTfzwzRR2oYRDxsrdPAVWVxfiuEixG7rCJzX7L1ykYCtiJjWhyLo6oJio2VvoNVzjWTpTxR55XkY",
  "key15": "4mMGEMnCJTPJzcapkCvWuBRSvn2aS8eAeoqFdZDvwWEQyvNFfN3BSHAEfP7V3iL5TS4FbbqC23exAf7fYbN53Ayh",
  "key16": "QeKbveKAprNv7XKQdSvnduEVMHr4EEWbwXsU4hBt9j8nGX3e4jQiNpd4McFwFpJfu1tgGnG5o6N8hdKsdX6X8yZ",
  "key17": "24k83G9Lk5W4hhp212Zx58HUaw1WndNePD1PvPC62h7Gog5cr85oTVWtv3adpNcY4smTweejbMCVPb6xtB2hq5oB",
  "key18": "28veXbFKuo931C6fqKrjtirKv3wwcDGYUzXPwgwkpqv1KLmui8EXncqG6MD2pqLig1ZZ5bZZaFa6UBjBNfXEQeDJ",
  "key19": "RvvPeFx41bsyKzEXKKj8XmukZtc8V6F7h28vTM7iEsV9qpWS39tL8X1mX5i71ctREQovyEeX4ofCsvzfWBEUVfJ",
  "key20": "47qVxK4gwMuoff48ZYAbGxcURDUjiHh2j8YSHVXaYdjhauk7AAVA2bkfctaXm3NFDJgbBCsnUb63JbsfETv4cgLt",
  "key21": "4c9N6VZagU4LiGREhy298mpnMXnxXmbD1C2D7LKtzynJYgPdGxjeHvk7oeBavLkXaUiSbqau3ysGGF6vDMQf1HtB",
  "key22": "453S73dy9TpRLuX19x9nBokLEhBcitxDK1aWS7AQ1t92cixGGo2QfZbVhW4s5soqofSmCGawr4PMaXmgn4z27xNZ",
  "key23": "2uCxvVNBtcRjVsKSaqa2Zh8BBsXR4ZsAQSmvCq3Ymi2rnEHpyn5Dh5dNkvqUXRTWA45NGbEGpyzUTVN6mA6yW6Sc",
  "key24": "cvb47YE2BnQHXGjwKoxa3HVBF7NbKaR1ehZC9GWDeWr7UQz3K2eyF1h3UvJRat4UVGEyziM1Ue4Qm86fRRA5NQi",
  "key25": "3GD5FToZG5XxfRghUddga8xZir8TPMUkUTcak8roB5rp36SWsrL75tCxz9mqbFNucj1Np3ERmSQZ5Yuy5Xe4Wmsv",
  "key26": "29swnRxfzy9WSJBnbzWb9g1Cz92fpFkvGnePcLm2ugSLNSkL13khfh6LDBiDSAG1CuD6oUHNewqs1m9utnHMRUCs",
  "key27": "zdJJAV4xWVAQjH9xezRYuivSmhF4NfeBB4kShZcGxHQiNe1DmCVoEXny5sTK4rNnmePk38uqVPLA2jF39ci22qT",
  "key28": "4qR7rrzcKhhQc1c8PoPw721mtEZeagbhAmwgyjnsrTeeBVzSWqkhBDAc9grQrLXmhStqsASGkoTqiUT783xNGzik",
  "key29": "52Q5GYCQjfuZbFT3o87PWTsDiFmj8bp3XBiFJiNHinyx5C2UsJat325hPqyCCsZGHqUBYMtP9gcP2G91f19irBRN",
  "key30": "4RPJCGVnVumquVonskrx4yo1VfjSGJejs7RUt66nmXhG961HCycAs4V6ydqraDFoJ99EWnmXezP8dJV7dXnQCPV",
  "key31": "53kaXcm36RuezGJjNbweiWto7LRegr9HAExAvyMzJfXhdctZg822NhuwxDpYxH6P8ECjjsWWnhB5MnSFJnL9ZwS1",
  "key32": "2UVKPoDsQZVQcgKbwARrLZwoHtxZzyNJM2sFkBFkJdV7652yXWPXjZZ8pCNj95wpw98mp9pELfaiQm5sFhLi7tTX",
  "key33": "3FBmvCLZ7N8vJWK4C49mwTEFwgKJRbvP1Edd8JQj4rdt72kEHQmEfUCPfBkVWnHEDuECiGWixpfR2V6JAnqUhx8g",
  "key34": "5sTR3hqpoPppbVEHX53WBKRhsswhLgR7e1kCeFdhNPzKDqT5ZykoG3wYJHMZA3L4PPj4HagRKECtFjxfBSohHMyG"
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
