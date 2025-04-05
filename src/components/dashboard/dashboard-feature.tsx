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
    "3UXe69K9j3TKTneQ4VfQDnrzo5i2Gd3ejCdvvBgCMH5qcLY4PKUabj1Gg8bkni2pYsJMHbeqdKQ82sL1Lnwp1ni6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rhS1P2R6SW7xHTKvafWC5HSWYGAphQtsqmWwJwX6y28iG6kRxfvMURV67Jj6rKhPmQDhWxbjKmU3r97BsNHr59K",
  "key1": "4kg4eBf3zBeS7n3DhgShtEV2KPk2vRWVE47kz6NrGTgCmgbXQP2Sn6PLDsiH6ejJWpfj8zUjbnVT6Xq6rNc71W7n",
  "key2": "4pCmoi9Q4xQ6taaX199QnyFR3xdhy69TCtGUQwVYogxJvnKzhNzm8a27PLHyg4axgyANLAYu1irojCnar5WDyDij",
  "key3": "5Z7rn6TAzoFfrCekq4qNqp26Rgkd6aQiHN7iPEZSj3PMUYA17xFZrTgL96yHKDvxCXbx2p1AqHf5UtomgXuZZaYf",
  "key4": "4kSuxAUskGqarcXr75EpHo3ZPQ57KKMrdQRfqq45iubtJXzTJngxiV6jzw4o1qa765JjXRJVkZrLYtpGGMzXTAUT",
  "key5": "3ngNExUyS2msoESmgsXZhMHvEmMbVX6HXkHbN7S8wWTaUTe6Wc2REenZshxHboVGqcXLrCVnphRx5nL62wUhjqPq",
  "key6": "5gag2MuJCEZNvaaYuH5tfcAdYc1ZzkeHzWwdkjczx6xfvLjhVVENfmN9UuWXnhmwGL5CfvPPMeMbBUiAfohmYsX5",
  "key7": "4MFXCVkg6XPmmEUDGRxSyd2pNkqzuPTe8fvLPhbRaCoexRaTpCkMndFW9Ptgp4mLqjTSrZRrqJo37HpaYVy1dVEG",
  "key8": "3D9N2Q6w9ZSRfvsvKU4wrYMNHM34H6X2Gixumy14wMCnoaw5Caowsb3Udkc4xPu1kQhD3xdFFpc8rYupgCuAgJSP",
  "key9": "5RBeRVXsfvYVfojHfjHUXsNxCvKK1yasNw22ApgosFy1Uxu3ZpeSefUViXNE7MnAuZQwXUZMi3WHkVeyZ9o59GAP",
  "key10": "5MffTLfHRzMJcGp7CSdgsFuomh65AuxdP9Lp4qkciLCnxhnQt4wxeyZWogKvU5vNJZQRzfo1MPYcrYELbnCP5gSW",
  "key11": "2mUpqrr2LcdB2nXm1idEPD1oPsQnn8dEruJwRLEdvXd3bzgu8CMoBFKGqLSyVuN7R1GRWLhKdEPeEKoKvu5rWscY",
  "key12": "5msNMQcQ1xkVQZapvYXxTXbYdB98HYeLwbMx35TdgDvJDbVxPTsYueYNyPnf5jgne9rivEtFMAazgu5oe2YXBnYK",
  "key13": "4oCpRgb1C3FEGo6vzN353EQG2tQv351h4pTCY3i8UEW3aGXSHPfVU6eyLrN93siYKdzcmF29CDw7t5TGRyx2VRNF",
  "key14": "2MTJVBuPBgTxEEMnmCdPExfjBRVWz7AKT5AiDXEpz8PKSoShkPyv69reeVVDawmTysfKKaX4betDgDMU5wjcDyPP",
  "key15": "5j3tgQTDW4Yg8wW8ySpJ5tWVwdTa3ED7WvCesghUa4w9SnvpoQ4bHM4xejAD6UuDSB4wZ45PTRYnAb8jrspSQVfY",
  "key16": "4FvNa4hu9yZhLdCvZNPB3kzedMTcqYjzVRsaJrLVcdiS18wbWzwgkVJqMH3s29sjnP752sjYanz7oHJPRF3z3uv8",
  "key17": "66vPdpykNHJVrLehiaEo7HNsCbVnhNzT19HqTJ84ZKv7Y9BDrJG4uuNTKdvSRvK93VhFcFseJRaVXPKiUrKtu42n",
  "key18": "2XnJZTUhksbCo8Bbbi6szCeRFNdM3eLvCaunc6ZrYW7hHD5ScTHYuBt3kVBntotGiNtBfQSBWst1ht59cUsPAm6t",
  "key19": "3YbD5Ea1vvK6xA8kPpcSH9XFM2aU9Bwqu3ZXKs1PqpKrmBDqoNs4sfGqhhDAhokv7Ht6mDFrGYLv2hgmYYC18WdB",
  "key20": "247M79ibJjcjqZ1R544t2JG1M7LmjyETNrX1Pj3v3s984B1hL5vH9wtq3he2FDNq6cvvUoKnZBjTCoH3cDW49xR4",
  "key21": "k3yciN9sJ5tYYhDbU4afX3aUYyCFTiDf3LFgznP8dohY8bEYw9CcdZJCCkrPTTj5i7SpRYrhf7ZKP1H1vxjgtxZ",
  "key22": "4A187niwpHz4pyF47jidGUdaYjbpwfp3NMAv8eWHdb6Dwu8mQ9BMq3SJoxJMRSWWjxTFn9qPdiGCczy4chpxof5w",
  "key23": "2QrRcqhxLWvMBRkh5iTGHHjzaKo1uSD36LdMxxBsuv1yTNtxgUpCH2spCEgC49mGdDgpdUnWbyMthwmPP8Sjct1h",
  "key24": "gAC3qQGwndzxkq81vGWVfuKb4P6t6yCKtM5z6rbgijxAQBLhxiTgEWPVT3yTX6Mgj3YqPmKyGRKSPtaTeM6JYoj",
  "key25": "494ESt4Pfgr8NjfT2B7v1Ycu2TqVd6oBTCq5njy5QNGaZgUFAJif67qksMNdkjam54MZmcWBAQGDxGfJXnD7iW6k",
  "key26": "5dRFWN3S5cDNBgZwpZAAjovmzkojBbrJKhMpJbfWM5dTq3yVkPhKdjiMFzKANCFt5RZuoeRyWJCY1wtV41YYT7QJ",
  "key27": "gHo1ofzqaSryVskNNJSdKRH8GXe3fRenFMmiuF47zh11DqEvq6PiTX8P6goYUz79yHJvP7MwqwS7SZp1vt8KhEB",
  "key28": "63aNVYUbLXh8iHp5FzHa2vGwXaw76yVRv3hd1pxLvDSriQR172Moh4CwisPTktGtHUewRCEiWMrvN9bLZSb1c4LB",
  "key29": "3y6qVkXcQcG18A8FWVdQc8JfBVQ5JBQNBX1KDhqTYrVJD21iUimr3kHo7hNA3bi4UpSwfvZj5iSayp3DnPxfVee3",
  "key30": "3vvgqf8kLM4VESF9u75taG73pcETxG23QNuvtVoPa7hANTmg7hUAC7cEc5QwpbbojamGkpKzSD3E4khcWBhE7Axp",
  "key31": "a5PqU1aRiKZMU2fBV3eWH9KfXxVbdVXF5YuL5mnWXNow5uapMexmoTPs5msBCEaqMdU9e1hWUreXmjhxdML7y1S",
  "key32": "BZhcUFMXeR3ErGiE6WjF5iuK4Ki7KsuQR56JtVj8BPvswv2cBXQ3h32sM1zcDJBeiC6M7dbFeUtusmGbxrUd9Vg",
  "key33": "3H4YxJZry3PLvoB3apez9upsyQ9S9N3dAZTCDR1Dbf9exKYsaXkRgyhTVDP9f3iBSHTfnsHrVDETD8pEenUJezL7",
  "key34": "2hKu1Y8aqQG7ExfBM2gktfCiRfScs6qDAgoMjUsxi2Gc2pQKhL52yp7uN9mpFXhTY9K6PDc5WwTjACfQjkF9ctK3"
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
