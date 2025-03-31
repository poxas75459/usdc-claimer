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
    "5agA3S8foYok6N4bdQNahjyTqDT8MRzAgui3aFnmxrjfWccn4CWxzsBfduLXmPDDbHmgcsQPBu7ZgBTCAtxfMFnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yk4t1Xip7NStKAsVTZabMXLCQefDHoGkeNZh2gqXkhcTnihxG4BSoJwzkwxKTzx91sBNegoWP6q8Q8TvAGtYu8y",
  "key1": "3fNKVtjUEnGSASjS1ChTVvdq5UPekKYrJ9cshJEwmZUUMngCoF74HroJGqKuhHFzvpJziABVNBYGJLKXtzkCAvuT",
  "key2": "2Edkr2pK59SyZWQgKVmHUNCNg12aPGBPFvVespi46WbzFn38H8Q3MbLbmMGzy3J8yvJ1NtQ6YodMk9MWVEH44JA3",
  "key3": "426mBWnZsNC6RKVbs4DuWf1uGx2JQaeEro4G5Ti3qXaCHXrTVqaG6ezkPqjCWikKWAcfX4C5RopSKbCh6VCZSMKY",
  "key4": "3W81ENbeY6dA8uv5dx5JmsntRmkZHqHwJhMp4WTjDYJE1BBiDMp5dReheeKCLmrigCSYRP8V5mYYAbzf8HASShXi",
  "key5": "2uzw8N3Tk6PpUM845MBEqrKdddNifeCiKqcmGTd2AQfRfwxPcz1uXywN8UrRq7jaqNKBrBkVSrfjffS9nV4yzAbu",
  "key6": "3WbXEUHxr58BbJo1cfD3WhT14FUir5qXBKv1VSXtuiJevu23eme9EiyTsAJEhbqt43n4t9ekAGFxaFmMVYoMUfRL",
  "key7": "3MSnn3268mPBhgDXf2PNctgAHpMQa5D4GEByac9ihNjxMWoa9aHUm9jxUGaafdmPwTvejcZyoupiMxnbYmr6sbsp",
  "key8": "5VGXHsFs81YvxeeaXQ6HDerQBJM6SvKS2vUTE9LWpY8RuQKtmBJmfCotANhpQJc3Q62uvSDGrSBPxLZmYS4L5cY3",
  "key9": "fuUeF2PtA22jBRjPmAehFCGvT6gC42NDjFUbPjChFcqBNLnkKdAbfg7tutLQo9CLKfmgqiT7uzM59UfXHkUaVNS",
  "key10": "45fFeHEBoLtTjBaPYx22ZXDQwPAFhG24kaxaqUbx4pufSZkmpzF3TPDLpfsBR3WFY4KxhbQXzYSkN9ZLD36XzqKF",
  "key11": "CYtVuxu4SSNnnBD5KNwFrDmttnQFV7YKGbavSD7kNeRQE4eHYwYeSzT6nNQEJ9dNhDFfDc4QgzfKPeHvRNbEMUF",
  "key12": "5kfH6Jfygkxn6hijf1SMZRZPmGaKzT6rAzQBrBDj86eyh2Zuofoo4NQfK1Gn1b3Q7xEpijmvud8F8ibob7xYrqPH",
  "key13": "u1acMteCPGNaWMexxYhKeBRndjSLwb4M9V8DkAJQ9pUqA5YRF13oko6KpS6CgSd6tSB5fmamLjwo4SVnFKhm5VZ",
  "key14": "5S9HDMe9HXqkuCM4eMkhyo7ES2FuouiDXGujKfYXGQym3RC1hzAZntKCDPto4NXug7b6Xdn4WMgwi1cjaCzAwUDT",
  "key15": "3d94vwvvCFcVmS5sViMjnLEcS7HExSGPH3DsxuvLuwxgtY53Pd6Ww1LJVknc8CdB9RDEDEscUDX1PdtSdgZ12HSL",
  "key16": "2ZFFkyXBC13kYPw7PpTexsPdHsGY3TMKXvxsTmE5MALSzkXYdyuo3EtA92dn7DWUvy2G6GVKLTfumoSDtGREWAgU",
  "key17": "47zsG5ziSnNB47cozhcXvQfCh95ATJ1BqKwYN1HzhKHc27r9QPmKTedHrMC3hWHUDVBLznTia4yA4dAcMjwic2sA",
  "key18": "5gJqQcMdnq1w79gh7ae1iSTiJTjoaJSWff7jnQmTCLQ25n5nXpV1Mw1zPziMpU1sM6gmZZW4pjCsdft9TQpPPthF",
  "key19": "yDJ9x61N8fTdjjzcSbxQeHGFqN3ZVTcKbzjiibMtJDvHjhja5CShUe3YRGwRCFJzV2bvtuNe4Ltwj36XZCSqQVj",
  "key20": "JJjxxgkArWuJREA6sC3hAgfhFmfSFdnmqXokXapv3NS8ERqsG2ULB2iAoVV95VmQiF2xNTPAZFodnQjyCVbbpqb",
  "key21": "2umBK8L3ZAfiQXoucvNNwoj83DQrFjhJ3h6ebCa51rhFxgvdDUGn7dAaGNbjUWYnjZCvJGzN4PPUvsGngWjKvsVx",
  "key22": "5ZZ432NBvYBrDUGs5KHpHvekzyWnvqWo4J6aZH9yfiFr3fJpataoJkEyKuGfbfrXTAU9BVV1ZneacqvoDP8faNSc",
  "key23": "3DHMPoEisnB8ewu9SMdnsphKQhnuA9CT7Nxo1ke1nrJD4mFZZqbe4gzGuWw4xfppCRQq3ffqqrHzBNXU8K1LJm7D",
  "key24": "4x2rwNMSGY8Pjwv7jwyxjPGNcnmtKYmiJ8injVLxgonBNuxajLhpTqKJ17KfYajB1iniPexxBSGCHcmrYZJcLhM5",
  "key25": "232frs8dBKEkiUsogVPZtjFAydQJLqfTiNPhY4b9KTyQy2Xpip2GoneXLvnfsh8H2FrgyowudYv4SEvaEthuFWTY",
  "key26": "2HZUEdZJ9KfcukrnASPcq1XGWTP14AkW6bY7vhE4rh6Dyg5ChsX26PjFzLqaU534pQF6gH5jxSmdRSgoXC8yqSdx"
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
