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
    "5ET4AY3hSDLGw3HFK3hrqcAZH3KdzTS184i6V1DGrhkPL5ifWxsULwtCSNuA7X1mpJ9oA3zQ6azTddrv8MwvbXFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qxj2HrbuYEyDrjyG27wG3Gepm8NSF3VATt9su3udQiimdVV6oQZyboJgZgVr92MgF1fgdtTX6CuFXZwJywMRbrd",
  "key1": "2eckQhoK19tues6KgxAT4HZFALVxYkUg3NNZGtk7Baw3FwbMR5khuuQwG1wuu1GqX2gdyX7FckzisGYg9BsDsJSj",
  "key2": "598LPGac4dCuUCvGbkbhRfWizL4CJSeuxJoiwVuNLvPa4LXTN4qzYGVBw4vbnL3kdrWCZWKVkTJ1LTGBq5biGLd6",
  "key3": "2JLK4nPhaBWKJ2eVbEFw7W2r9PvzqGay2MdDfPYF6eCddS89qHEj7NiDWypd8556VnxPDQncTDXMRdKUCupXrZGs",
  "key4": "4K4gHQFiqJGSJKooJWD8EY6NzEaj9hjMT39kvx6fLW9shw9NNSSte9Tk6Pk8vbT1sCbJTmJQvWPQBRA9MAjZcgC2",
  "key5": "2sojG1L4FP9PitaX4nFbDR9zGrpyoTjhgyAfP1Z4kYVi1BzN6DzuNMa9EJCtHcguAAPK9MwtWrXVAunUnkYrGzgW",
  "key6": "3ta7xJ88n95KCgEWioXSkoV7Ca3mjV8Kh71fdLvdMJR3ELDtLkwfAfWy3aqwPor6xL1Fq487UeKYESgKDt57pN8",
  "key7": "2n44rBp1TaGtreTzURjA4oKtSRw3JTg2uPeMmVBFZjAvwM4wrgQxHTSjVzk1sxoyv4e8A72fBpBnSnek6z6HQzRK",
  "key8": "4jmt4hpHeAZkyi75n6U5kxY8N46fPKBgMoKPGCRPCFabrBLs2nLKhpeumP7f6p6Hb2ABS152SKUKLdrUC6m4JpRK",
  "key9": "2yMJnMQtfHXtGSbPiPM5BWwDbashdkAAhKQgQQR9A83upQfJr2ZizCWCZWxYzKHVofC2x1jbZbb9ExVTVHM8uv5W",
  "key10": "4oxvQdTuhF2SwPxj4PrBxSjfqbMinhCXwx1pD2t6AdXqST5hATindPv4WEsPtrtfyv3qCuuowT3oHkEBEH2Hot4N",
  "key11": "44qfLZE8xpcRUeqCjNGWjoJcrzpyWvGkys9aDF1R7YYasyfvY2ztWZ12qSedkYsEtnVTbH8z6T7BhRqG82GBoJCA",
  "key12": "3ZApZxmsNbxycP8oCwYCXXS2dWPXzxiEq4pKrp2SddJ2vwy1qA2T4ECTRrFBNEe85XJeZvMWcZpgHKYtGif1cYwy",
  "key13": "3pqaiAP31DJ1j6iFaWpnRq9xswXcAwq7EKjyAGUk1HwErmupiLwhHgsw43x9yYq4xAavZFHMmbKWK5VSZKuHwXAi",
  "key14": "2CF4PPwfemU8GZaCpjxccfCx1ZNwMLKGEkdYMikvcZ6gUrcL8XKE6sD3KcETWQSvPZRmMRQgASCT7UKR6WoUx9JA",
  "key15": "48Q2XKMzDoTZX5wr5AUw6tKq3V8x9VbU7fN7FV2HX9wMTQXdYkHFSL9HXsdtfehuiJZKTzFwsKBdLk4dm5VsxfuC",
  "key16": "3izKsEvw7uMtVr51cYoZXauyMRyU3WqqhXRjGCpih3nh6kaKgSVs4xcniHRjVdJZZAP8QLYFqjyhVBdmppX9uTLQ",
  "key17": "4TMiZUGpJWZL3muC1Cp62HXSFycVkraJNd66NoVaewGNcGX9kCbMGUmyzQbnBcBHjrgk3sHN4j444h3ouf2vukK4",
  "key18": "Bc7vwh4k4HAqkz1mJMybpU9TJBBc7wZzyPaV2sn5tNQndYfMQGsZkruM262BBFuaQ99ekg5gDUijCqwDt1ywW1k",
  "key19": "5iLTwFbkBo1bBQx3r5xsipdeMaKd152VXENCsACo2ezAc4fP87BGxDtNHU86nweFf626hoqj41AYwK2LLUjVUSpA",
  "key20": "uAnEf7wULZ2FGGJU4w5BgDhhZ69wgiJjBhazeez2ezJtajvWAnMH5EmZzoKJtuZHAyhu8rMHzEMsVxacaMXViYK",
  "key21": "WeNtPwgYENGKVRhsvz3J9AfqMwoKHxyBkcHcEAWwzK1khKSkbp9RugmLR2RchGRJBft8TxjZ3dMgPht2dE96Dgk",
  "key22": "43ogF9p7WNZgkWvhicVGtiQfskEzcrDCu1qcvJwqVDfWoesuqYhm8rUAy5NwbLMWNTd1baNmh7VMzbDR5YmCHPvt",
  "key23": "5LZBR2L1SUNcJZBa5Y2F2J6soLXc72i7AE8sVS33ShB2rPzngEgtmYVTZnxbyHjSmPbsxW4Bdz3qGp8upsxp5ZNS",
  "key24": "4GdnT3t1A9eurdEg34TSM41Adve5HwoDZaoPvds1eaMFPsRGwYVsNSLE1vTrAWaUEHd5ssu7UPa6nPqKBNmRHpb3",
  "key25": "2BKY1CqHHmt7oTKb2uJxyECWURwPAVjK596SWQT9VqzXUW1mtHbtdfdb6FrLfKNQtFTFgHuT2o5VRLDiHXnitmL4",
  "key26": "5Mz6P4Jx4UrXsX9vkGYU8x77uTEAThM7kCCharKm2ThFmripyAeHrfhB1rcMqTvEWxU9x2ZBiXid2QAjqaupssw6",
  "key27": "2gmZMZuTZmtoQHN3Re5cdf75CqRveu3sHPa12K78qAZYDrbZaQQ2H6rQYFhAJJcqVQnS8fW6JMpoyQ9TPwzYfPzG",
  "key28": "3CLD89nCUFHkR5hyVAyn4UfqHyiu3nqium9aZAjPtBB4iSbpEHoG8vhkKwt5Y4yPjWeGZfY9p7GDVnnYf3SBMHQq",
  "key29": "3hVsoXpx2vFZf1uLq6fqRkWvYWFNCAHCd12CvUavBZvzMJLsP6ZrU1DQMB9j1Q3WxSPh5CdcWvFvnXSSsiAzrsop"
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
