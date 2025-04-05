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
    "4S92A3b8FtP3DLdwMZwtMiPM8ikX6eHqioCzkugQtxZsE4AV1pcmPpAfmMZrJsXMePUmToMXC8BfjgnJRQPp5Ds8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kc7SZ8rLmkarhAZkFSz471kDF8iW8c1j5qMyQhemHrCc1NHWSydvU6VZsbcbdbjm9eMNnHvkqJkDdyrfEECmQq7",
  "key1": "5oYq1GTcmxy85Rf1CEP5R7CaWpJC8fUyVfeBEYobwU7VJSdCm6kkTM71mS8XT9tw1MaTeyTAjHjcJioFXacQy8YV",
  "key2": "2utCNDepf5iWVADpX2Hz1BakVwGyBspmeD83LvThxQfkPbSchYLxZhNkVponGmXskVXfHa1DYHuoNuTyNaBu2QU",
  "key3": "31SpaopTfY9GGMrEJ3uFvvXRm5GVjQfXK3sEeXHHcRYni6JkughX9eKrvvLrLvLWWiY5JUNVUtppvAyFQmdPP84N",
  "key4": "3mBeLzTMKMQmisYLpN4XTuFgCgvkjPQ5s7RAkB2K8hvjn5waCmby4uh84MApu8Cx5cXHjHe2FN48iSf1kp3hj29E",
  "key5": "54Nvs9zobgQdy7WACzdNJhbvQEPtisZN1gipVCZkqE9TE9ZTiQ4w67SMWPrHmjC2f1jdjRA4xpYdVGC4xnWwtLQ2",
  "key6": "5awc5RXsdegP5RRYCy14G52v447BJvv7p16CeExhp1g3f3q7oDskQtxYfVt37VGQRSm4s4kYeJArQb591qJBxEKX",
  "key7": "36kzprpgDtfEymueoBkYAyv3X1SZsEGLu4mPTRurBJzxZGEe96BNM6bwuCiBs26ipWs7pTFUDvZNJZ3Ej5HNjK3G",
  "key8": "2dA54XXnHRqskpkW5GywHX62gnCA9KHL83VYdGRjj49seqrmx87jtMsYBYSbdnWRfWmTMfs1Y9bEb6UpntDoUbPm",
  "key9": "3V8GPqTjLfBqSxdndybzMzqvXCjQL4Cxj4cYRMKKeAVFEPxYQC3yBHfr9FYA4ZYgzCU5a2LudW3qM1LN5DfMYhye",
  "key10": "JWpSMaNzEcYfuLaS2MaAWnWEh3DRvRU1aJoDBfABL2BDmy7Kwz9QkSKNyyhHnfgosHQ4QyUUQQkNCxb2wsBJFqL",
  "key11": "3LB6QnsawvQRtYxpPKz3u7b3SWeRP26KTxTiBtBcRchSZK2jTir6d8QUiLjTkxwVHM2foDcnyet4SJjpp2E1wRRm",
  "key12": "5RRuKpgEwyQMQ2bfrKo368XQP4zseSSoUtVzJxy35M31f8mk66WEPBWyuAieCRuKRnKhdCsANEtLkCz9tyrVXNTb",
  "key13": "5KZjwWuooSXeiQGcrinL9Z9qAA4rpQJ38BkDzkMfQSoi2bbARfoorGvveij7m2A7U74XYUhKr5Z9e3zJkWRT16iF",
  "key14": "4qZ5VMJEr82DKNeigUBW4JHceCF6qPVL2MP1n4CmgpW6jPFEyeegup3VTmEsr4TPJeGLkBymHfUdAkfYqYGRrgEq",
  "key15": "3PAr9dxT7kroJt3YmLZhFTh3whh3gtuT9nRDpYp4gPc4Rg61F1wTqnnwEYKHnpuPMinxfTcojwzGtnYe5f4tgggX",
  "key16": "mLXT5wKobT7yLHkaNdAJjGnAb5fYk2XP8AehNyunyqGJmRmZh9iB1uFukBrFhHML2qguPBdK7WgZ51szPth7dbh",
  "key17": "5o7K1BWQKxq4xmu1yo1yLLs5HDV3Nomwmf9RLgPHjGohDR2fNLuCS1wP4g2oGYVvgD4enqovCYHZvxVCgR3HLRv5",
  "key18": "4VNghfVKSeHbMMBTXMSutRsbZy2mc49T7fRTnHPEtW5yAozztcxpfuYF4DT1hvnUUEKQfjiV6bDCWamHsC1DvzJ9",
  "key19": "oEGyJg5RRLjieM7svjXp51SfWan4H2cDQQDwQQ2bQqABFmg28GitjQWWZzsxA25p8dDnkN91Vmyd4Q4FCcQVPDp",
  "key20": "62KpsHeU1e4jTRWoGodpTzRR29AGEZGm3AB2Dp14maMka6ujpMyKSJAWrquzqddSuwX94GNTECTYJXB57zdTtjpb",
  "key21": "3R5GX2LWeF99AdKaq5pKDQM6VnyzbuHirjZMWRbADZJmaeusiT79ncadzEBw94p279wkQCxRpYdf5u5MzJMBytyv",
  "key22": "277VWdB42tfo8ucVaAQQJgyNKKSNQTTKGAVMdjqDWinNDjXxvA5NgoBJjYc7LyjZeQP4Mt1KkTYYNHseTUNJPYBs",
  "key23": "QpqgTAHo25ywHt2BxnENxvQzFpbkA9khDE3vzfchWQC6BPwwKS2snFHvkT8EtYG9DtaD2ytRFiQD9VGXdneTK1G",
  "key24": "q2V5QSeFrv3pSs8shyZ6bw3BTjt9CF3AKY5dYo5ZMy2EeUGJxCm5b26fN1vwnARPhUyjFEgTPWvGfr5qtvBu5kv",
  "key25": "2qMNZCuXrsG98MXqTQXrgnTcTWeKd6o24QbxxJM93cmThz4MVTgoNZy1NBnAnJwMY1UBAdiEBLX4Fyc4vz4FN1CQ",
  "key26": "2W6aRdxGPj9wJ6vDbj6uormdUhm18bmfP6hWjLWmbosyLN2hcYye7B4oZzA5QTJHuzZDF6y1cU4yQoMR58BvwWKQ",
  "key27": "3ebkd8Qo2i67ZoMjpc8sbQ55v81Zotn1LxLpnu9D9kSoJHuPkiT1cCgm1x7maQdUJ9wCCERov931nmpBBovsWFYa",
  "key28": "fhqGEjYMbZjsJphbjWbHRftYbgQaiAeuXsjmwNfuHdj4NYwtEG5fi13Dg5LkpvPLa8TSxrCLGXvsPL1KoS7Xz8f",
  "key29": "5EwYky6TWCECCwSBY3Ub6EocnAu66AGzoYyfeo9aWWx3Mewxjb2KWCueinPVccbhD19163K2UUzPfs2vVSr1WNYL"
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
