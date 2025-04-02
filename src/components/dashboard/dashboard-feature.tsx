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
    "533qzfXfsNwbntA4jDUZKgsxMmz369eojGpVoD1fAc2az1zGKQN6889p5dstYtJrYHeuKRSppGb7wCwY714Lf5QF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hi83ngy64uP3BZFKqartBSpNWdA2CgwuvpFZgWrrSGvC3YtJzHUKGVaUDsk2YGW4PxtGL1CYZV7HCuWuF6Bir7",
  "key1": "39wL1ns9rF89xSPNvVSWG2DyCSNxbtwivxrwtHZdhLmM9pspsS5wGDDiwZdkvzEmvc8vSo71KM1VzZCrm52PYBgQ",
  "key2": "5XnZw5jYJrLaeK436ZyBzCmqoHjHJRwLs6H34EYwxLUf2K4HQNFCdWrx5acr5KJYE4wZA9QknN727fediN2qApzJ",
  "key3": "4LPqR5GP4hGuhz5GvTM89rVNmAhqkK2deXXFEfn3ek3HxfsUhdmHzYXUC1txVyLdqBRa8PModgpvtDBLzkcLQRtk",
  "key4": "3KHJguYhSxXqaDSZTcDPCBodvUKbN3zR8ZokvFQBzJaX6QJLhuu89tcwvEXAh7pdp1Ewbi1VjixsfkR7ck3LdmPp",
  "key5": "3dBo71H7Kg5jVeTvT1Ma7YUgupotXjidnvqHXpWkVP4QgCzrAJSF2JVRdPTntYkn6KM5p1pTMTxGUNK6Y8jeLQXk",
  "key6": "2idLKGATetiQEZaC2PDv1TZtjXicMpdyDuzaoJbwMFMgVTmZ2Jz9Zb2QkLvDjTRux7sRESjRPmbD9d9uCkeDqRsD",
  "key7": "2ihCVP7nR2c8qFXHaT6ztiPsiyTEviUVEqPXUo31eW9W78Xs6simyQTxTp8dMG4sN62HkFRtt5AqQTN4PwXms3mU",
  "key8": "3kvhsRVSChNKGkzV7fpb5Uvavw67LYe6QTMAiSeHifScSXiKkSdKBpBDQFfriji6tD2gdMBEdxrefZCT9fmR8DPa",
  "key9": "2758VpDXw1YP9LTjFHprxqzv7Hz6Xwq33X4eHkupWtJUnDAfAxpThEz5QNsE5pCWoW64uoMEeKvhSEG66Extpx7X",
  "key10": "4ynaFhJYRZ2KqUGjddycvt3tY85HQaRKnixhvcjT5Vb1ufRazYcEYtVEVg8cE7rsBAGzfBj9hdLnXeNXJK7VPnL9",
  "key11": "ZxpcGBvCb3eVFM36KsTDJwwU2pRxZtGoRLxtfTcH9QQf58WsWgGUCsb7jo7dKYDEGy1GtKJxvqRfupdXo2aCNK6",
  "key12": "4UQ45PcTJuTRhKqApgA2hJwypAh451HjPx2Xsc1mZbTsD18k6zoffqBnVD5H1MxuHP31vnArpb3eyVJBgVkckNDJ",
  "key13": "47UW1v7Brj8jvVDVTQku3pZaFubf6ckGs8MKQop8C7PhG7vEFfdCHbo2zyhS8nGQHqUr68a6aD9yBdZRjsLmrN3A",
  "key14": "4N9WVhQRfbx58HkmNG4DfogAASgX56mYevo5dfAbHSD84kP4bun5JonJb7AHSeT2PzyKJDQZ6tijcUkZW7E1ZHmk",
  "key15": "5SsU9SyUrGHUbFyjznKQ23tzwm3L5E6164QFZiNSniFGexc1ZCVbKi4TcfSz4JZQn1osh84GYQqwtD2va41J9P7",
  "key16": "5RGBydqKGqu5mj6Hee7P54R1ASASo7y7FkBt14rXa5tN2GAJLZTqA8PPqgKpbY22bg9cuFUTvJA8wTn3bxqVEwcx",
  "key17": "3ZZMhfKtC4mKQY5bm2xqfSB7u599MxpWSAX4KfwxhFGhYXeS7P8TQTammi5jjR7SqwEa4HR6DyRVSYuDkAKfzaVt",
  "key18": "66aG6PGmriEhp6h1TLa4WhtyE8h19gvw4VNX8YP4i44UJjyD2JnPuK7dr2rdASGgCDfdug2DZNHpUFBCKbzJGE9L",
  "key19": "2ghVQrigATisxi4ved7eu6Bngj81DdSm3snhAtxXJKrCnQ5Zcjqr3d9ZikLQX1MehrboGwauj7i4wvVeKqduWeG8",
  "key20": "3k9Btrj3xe9RPejeiHrP5APyNZi9xNhwZCKYtoE3xJnjXhxXzrjJuWTQQEZTPNhArZtJUxGjR13BsmtymaFReYDR",
  "key21": "4X8WwmAUSGozhbvwXYd682uqWw44hqMUaCS9p4jC75nR2TRFgSz6TJuNmKdoD63kS6mhJpYNpDDvwTHe2HR8rSCv",
  "key22": "3Nfd1JjUJcqR7yjnfHRXqmxF1H9LghEAjrQKZNqHEoWzrNRAYew8KR3x7fwWKjgN6FEsHPu28D1wjXUobiF5iNxp",
  "key23": "NqKvbD59VKBgRxH2JnJoKHo17qyVExoP6mHPM5eZ4MmZG7w72WPMX2X51WhLTFAKTWXy71iQLD6DL3mMsMc5gnf",
  "key24": "ME13Rpt24iBP4oPionHhjBrW5HHdzqoT65m9jfefVaRMMbgkE31JxLFJMYdvx2K7Mt6Ag7tfHc5zYyzC3N3kDSC",
  "key25": "3E4r11qHni4zpEhEH8AddPraxMJcKAgyEe1QN4FShTx17kgW82n4cyXXKG8CKxWSx81pBh9Zzq5J57nX69f4u1KB",
  "key26": "2AF7wkm3VXjNznTHWMyHDjQT6k11MQRwnHJWphDSzkxJFHnuPp3ypMmehQ6PijrD5K9fu82oSayzTcd9jXisK4Ns",
  "key27": "3vEFjRW4TCMPSb8g4hp4EEFpoXK8DpfbFZZPVHibg2XFqcVaVRzAuQyqFfn9pr7Ztx3cAwobwHquWEjHfJkKwkTX",
  "key28": "58Kwbw5HCUFKabRGdYMo7qa8Q3KYfN9RS4RUhGVbFkxF9CDXaD3HFGzUPS1ovyV6vXDKNvnX9T4PckZssB4NCmLg",
  "key29": "5HdQErLPWiJx8v7Bt5x7GtXYmsTpFC4Voo7HKknRW5YvqgLWuEmLFbQiErLKvdKkoKPfjKap9W2VhB56kkP2giJi",
  "key30": "3uUQW3Whn1WiwxvjXnbCSdi78pchkruAhx2k5GcbtqCbgvnWHL7zdWmADcKShkCsz9sYFBB1NNikSxH4FRn91exY",
  "key31": "56nXVFXx2TrvvaaA719VoTM69MrfN6ZgRXxHpXAPA7bdkrWSNupyAsowMoiWpEdkypXRoqwLLeCtkPSCy5Woysv1"
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
