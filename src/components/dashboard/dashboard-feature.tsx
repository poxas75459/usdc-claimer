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
    "3EKuqDEmE51EYU3gfrGNGw8arQ6aGAsDSNAx6ZjJWZaWFADEUZahtGE2ebyXxsz7wxF29FNv45jtafAv22pH81GB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPfRNNT53WwMX7RywmUc7R73kGvKNtkaeQgH9KcseEZegLTrV2vH7cWvjqXRykFGiifhiY4er7bmkmwPxqCPRX2",
  "key1": "3h2vUEXvsrvYpUbArJKE4R9yjurqN2HRHLjC3udCDQLbKvf2oJNKFDFyjrcapLrfiPoULvkb6ADrTw5FZjFnHQA5",
  "key2": "3mgka2gKuQF19KqqeZmSY2eJYrMjSRSdqFNWW8iH5gyirrjfqSNEMHwNMkUeSynCaHo9ywyaDUMu7hre6Q5DdtAN",
  "key3": "ATJnJhqtcYN8wKdBdqYzDAiohiT3obqaLvYeHeb8gj7VgfA3oA8cMu7Ug3qEHxLrFiERq53vCnHceda8ieULfES",
  "key4": "578WjXyifrCz1MN1SC3gp4vJ779nQxgA2aK2Fzu4USTv8uaudRAwoeK3mmZ1M6Bg5zsykE1juC6Cah8do4iqBB1X",
  "key5": "5zXKP9eNFBSSmNA2RkdcqD7eERs3dts19cfTov9aEHyBeb7NfF4wvYbx2DJtLebAAvjpxGdKnfYbmUdMMjYbTpci",
  "key6": "3zKocHPzzdMvD8t4S94KDR58uqWYPMRwWugKSCG25CMC5UepvY4phrUwbdv3EPptTZMFbq4xsXMp8diSc7UPENR9",
  "key7": "2R3iqKbgspTmNCrwH4ZmAQuN2eadkLg4vCkRashUNctv9VBeZHmvMmxZUkFHaifDcthSySoqkVxDvQa2hihYk1XR",
  "key8": "32cAVnR4BbBXsMnuNKanzSYwsz84Tk6BrQW6GUEN8hSGCjRnZFj7Xx6zYZA1PCSL862MgJzADN1s1JcZuz81kHbS",
  "key9": "4mwr3xA8RNkoQgVJE5H9YmYoyM5VUDiUTBiNrc8uJhtFj1pNCaEoZQJX76d9EuwRQVS8XHLgDcmjSUyRScKUy4JT",
  "key10": "hNqX1FVbEFwkiETPj33wiywQtCkfBqyJah5ofLfNJYLmnKBW5Ri48uJfbSUMw6vYnMy5NqbdmurCNWoNCL6N6Fh",
  "key11": "HWAKcEVsziNJPB4xcHvDbSmLpwojPQKp569U9sAfHupJU438dSkWEZrT6zvi5VFPRQyBKpAPKdvfX49h1ckVth6",
  "key12": "5MZVBs36CGGaHbMRYnvetKjnP6y1skihqyKQzS4AeQKJp79S9W7mD7uvZDmboUM6FmB3MrGLaDBQ9YoKyJPYaNJX",
  "key13": "4as4kNcdtC3qzabcvs2KUAyNSrTWPkPi9LboqC1HyYktNUbr7wCRnfY1vfPJ7KssE3mLKMsDc3cavCVzMcUfzCNo",
  "key14": "4wx8G3wvSCa27etQAeGc8T1C1qfmpmtCtymZ1xJd1t3ySm6Y4rRkXLtQPQfB1fML6PCtQxTSnekdE1U3HZZGphkk",
  "key15": "4mibZUx7417FJsRKQBWwy2ReboyrH9odiGi8HPwyu8PrUCzLM83ttyiJYgYZqJpWqoA63x5eysyX33traGZvht2G",
  "key16": "62iWNWuSq7mrjyULKkkm4jmiFBGy59CPR8iSKw1Ve6XpiDa8U1tHhquPGoHamzUQWJLX8qNuiEvoNeUnCAnqKfJz",
  "key17": "zW5iz18Tr831CkAHuyaGZCvaoe17E3N5yR41KMPDxL5XzX2aoYdT6pbyvdxDTBa2gKTfZBM3MCz2UNCxGCUtd83",
  "key18": "BVeMzNXMCcX6Jwrv1vszRdDoAYqRtyHgp4ecJK2m7sc3oMsr1rvwtUYkBppLUVxzPnLx5ppj5aUnkkbezTGMztz",
  "key19": "3bB8p8f6TYpJcVrDbPoAYLYNiFBpwHuau8JE92gzZssPgmpPkQvBZzG64FnPUD2UoTM6i3eBk8B7xjVn515kGq8S",
  "key20": "2E6duqhdjs8eZdVviXiKsTvx28ynSPDRk3b6oSpGJPAMsRhMPYWGUmAUK2o4gm4oNefdLZrQ8epgzfDSTCCnCDU1",
  "key21": "uZvSTzqVJVTNxTLQzG9ev5vFtSe7r9qaYtMKNAh2r4o1djeBWaUYDJL8NyuGRZsHWAzeY9RCU8SHTrSA4SK9d38",
  "key22": "3Wb8mm686PfuHejt8cLe3dfLJG93yRXnZNvqH3MsznpzyntgwvvKJuKJg5FDYdmws4mfGoC5ZRVGac2P1Rqr4xE6",
  "key23": "4XHMHZdjwiXzLKP9QxDrGPEFZdCqkAVbsSG2H9vTiZ5iVRhPUDuGvKwx8DY8hx2djyZzXDzZXLWF8BuXhicsqG1f",
  "key24": "h3t4qGy9dmH1YaLkiGHszJkiSoeaoVw2ryjBgQq9cTt6wAipXYxdtQiwHp1rSkzVuRYZaHHnioUnL31QQKuqWbu",
  "key25": "5YotjuNqGCPXiwu4vPSho3tU5qhXRbCmWfSh97LrEFiQscRkDkYGw4HMykBAeTUbFrJM3bf3AjMRbywkFMTk3o8K",
  "key26": "2esn2Anee9NFaG1tcyN5XPaiLChBy3cEGnzCEgZzLsh8EMAw4LuiuGMwtVDWW7smRS7Lrmbb8WaUG1sxyaqSkvxu",
  "key27": "44rfjp7Vz44uBuzipoDA9QWXvCX3b6LnfRUfGCEyPgPP8yWGAknXYKjgCnQEyStQkE4sCDwiMYDibzoqebJ5UoS",
  "key28": "GyiXLGEexdedJXMN4L5hsV6xqkxvJRpqv2yvMyynxcbhVRFjDnSC197zyYjFwXa3HhsJh6mu7zgroqqysFEsvRj",
  "key29": "6NVTwkNa3jxCUHQXPnh8pzex4XAmcnfhiSPPpYapyoscCiViex56LHqVjYPQLMP6rtZ7so14vsKs4ANcokBtrjs",
  "key30": "4Fo2vFXHF2Jn4nzRQzsRUXQXCYDzuxDo4rqPxU1HXwmFrQWJAd85eKYUS5WsaK9RkLP4ktUc6TTLqLPau9rUvhYT",
  "key31": "4rkpzXQFr9qbkphLh2wVEXdExDB2gBnrG74D8b4kHPfEjQJdMwz8Sx5nGE3xmy3HcMtZ7zzLVf47VdHGiAF5yLaN",
  "key32": "5jJzcePdaRXcs25bBMK4g8GeoMTTjPdYrQ2Kxzo9ZihEB1DUdxfSCvZPJwvPZYt586kUyVpFR9k131uhzn8xb2eV",
  "key33": "vg6aK8qGp77ryGje2qzsPwJh5C1Xqj3G4HrRmjWoYJeM9Xm6u1n9K4eWoeR4uczTMwA5CAk5rPRMn3EYk2nWAyy",
  "key34": "4tGY93kKQRndPS5uzSQTQjMFQFP7bJCWrxV6ubiqmNDNN7rtrTjDJmKheaaoEuNPuEYhGxLnpTW93Vj2qDQpzMoq",
  "key35": "2NAxqBNZbSa28m2JaVsbP8kNo85iuhSvVcP3kiUQ8KvrJbFawK9WYrnLKs2Vs3PThPPPWYbKAC9gFtabtcvwa9ra",
  "key36": "4FZRVAgwmMcYyE2FHybz1HWU4HXTVkyoRttrnNLWC7gwfoqYjNNqXw3FUVctLe4hGWhmJbTpEA6X95Cajm9Cuo8w",
  "key37": "41XK3zSwKLAMfuh76d9554MxMnMARp4gBy5aVaGTZN1MX6Ku9FGMzeXU9s5kUhScPr76AGniY3omwy73Wyjjznkd",
  "key38": "5uah9J6aiZa6zwCSkoSAh43aDqPgWfWJ6tWMHdVxVnPvvDkFgD94Egnqv6CM5NHdvHqnwVAWdzQhJx63RSuUJzf4",
  "key39": "5qZL43EvARwuA2oQAhgKK4Me5WfvS3MNpASY9gLXDTEmpZcgRZ6LB2adj8KbrMfytZdTK8NVotvSMoPnEzLG45DK"
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
