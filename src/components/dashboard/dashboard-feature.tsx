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
    "25SXpZ3Mh34xc9upXHdg7Yp6khod42kyPqvgnB3PQSE31TKrDwAhVniWhmAtREtifkZwVR21PjfZdt1BcQ3Kia9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewmFqBA7STCE1Wq5jBoZ7JPfYkgW4wasd9hfLVazidJBFyjdnVJXfQnoYaiLEZ3eNZGSC4s4TSoHh2ABzQxeqG7",
  "key1": "wSXtEFf3QjCXCxPtfo7WDQCeek4HQ7ZEb8efbsC8NGphPE4cMaNiTAd9KeWyk1FhdskUmknp1vvBjcUsDbqFuQX",
  "key2": "4i7mVJ4LMcRyMdAGtD5FUUD4qoCJ1EJB8s5uxTzpnWqNQVWV5djTYWP1N9ReMUWZNJjifJAjoKYpNbGhzsrwS8or",
  "key3": "2zP7r4mUQr3HqB26titEgJ34G3kmL5X3Sm3LzUKeHt8s5mEcNM2P8D5qDZrnXHeqpDzyzohQMpQKXBKstAvvgChN",
  "key4": "hY6UaL98bENhtAntFj5LxJZc1Eb5sXN2fZ8TQoMXwjXmBLb8KjDKABdzo5vPr7nrMSoL23Qaa24cHvufTprdHKH",
  "key5": "65i6rjTik5YFcTtg2KKmGXRG2b35tFoaxt2gy6uFiLp4YVKDbU31B9Z5QaDqdYzB4UTof6H1Hk9aDAwzc41F5oJU",
  "key6": "5GbAr8rsXrx5n1FBrVQGhdBnfMmhSahiXaRNyM3wmLBuzDeh7UTwDEMPJvvy5oTaprEiBUESPGx3u6VojRrAwvby",
  "key7": "3Jc4fKsJT15VeiVj6WgDM5ZQg2s5dfkd3h5ZtDu1KeuebEYENXGjG7QbZoXrJrZePNreeBYAYG6t4SYAKyt2Bygk",
  "key8": "3Ln8mTKnpbNM3YA5Zzd3KvX8y5fkHxakDrC2BtC8djh5rJ8nQYgdGpZNJh2oNdRBak4inQVmmqiu9yqKozScgTmZ",
  "key9": "35BFWr7a27XyPJ6PHyStRS3B6gGrEPWt3nsjQ3FWsy45NBS1pFpk4QZLngQrw5dPW35sFdgSZ6zF4vZRV3MbufrF",
  "key10": "ZjHrVjxb2QebmmqACwLo6XywB3THTG2dNGvccL5WqMP44uhjeJ9S388uBiTf1R3uoKH57xVJ2outzuSS3UKco5N",
  "key11": "55yaQB4SmyGD1Z3mwrPBzSBiimtxB6nFqsPjKTGUDLigm8ifzFnWuJnREzgaNusVYDByKMVoGUKACjKwCsaxWy32",
  "key12": "31sjGkm8koUdBa4sEPzYNBGijVsUf3NAG1WHR24CvHzeZU91mKK4gQYCMrW66o8Nje7MHTJ17DJS2YjCrGMHqibp",
  "key13": "5gMC828pWUWeLoJSty4SW9hBWGr1PwEqX4xJdYBGy7CisktfESkDgCxrBRH28kTJiiC4ANJy8Z62aViH3RpiooLH",
  "key14": "2qFWYjchzqoNmTEPhRWxuCG3M7MsXYrLH9v5ndrV4HzxKsMJmnNQc5GMru58e9mJzeYt8B7RgxgeULG51E2YDbCV",
  "key15": "5WeVgStuyL2sZ7225Wwk677yhmdRDn9jzFzsE2gqTaGiigck1S2Zeg4WKqjZ3FHNGsc72XU6dLowMxQrs4JgJwXS",
  "key16": "3NEgtJuBdEwapc5NpW21ukuDm8sLRfAY1mey6kjHNnSj4TfMktpwwGkTDsB1CPknbVyysrShcTeiM5FHXmesXSQp",
  "key17": "5bqhkFQkoakgtqMF2jAHz748aCEgDqj31ELcPK65toTbLfjs2FWG4hnPhkpsNmEjFvBcj1q3SUhRgSAMmehJp92h",
  "key18": "2q4AYt3Vk1UQfweiPdsXXC4AmN5tGrJyGcpwpDafbFoegKmdFbQ53EkgzzhGpgw5G4ds4B4BTyb5xnxGoxk5T66m",
  "key19": "288oCSzTN1J8m6iJrdUB7ChigMHsQ1DsEduHhD2PZmJvPnJuwRX8GAvPAAcTxyT6cSVM7LsvJv9e3A7UQG1jse8i",
  "key20": "29d6domH8DEx5UV1D5VxHDZxCHXZXaSNBY4YRektVJ6BmzL8AVQDzAqA4GGTUPAyMezf7LnYcJxy8y1zC3SkjdrX",
  "key21": "5uoTMgwiFEibqhpgx6YJkzFhJwi47FFejGyRCffXbJGmYq8qwDGt228Zh7YAXiLkAbc2kkqSEP2d3nocsj1zraQp",
  "key22": "2V9fc8nP4gFiyLWtY3wis3yjPoz7d8eNcSrv2qBSwUDmXDmNe9EesRUDiFQpEbuAv1pBwRRf8p6WJe1swvWTp2FW",
  "key23": "55JJquzwcc5d2rCg9k917ZAbBEL4AdEJaMVHFJCLbJrGqQ6JJgBhsPVVqTjzKaLCmuzhXzq2XnpWX4igx5CiSMc4",
  "key24": "BUHmbu5rouJuA7bshKFDMZ8AoRnHgkb2Yo6pBRi1ZiPY55RvfqgZJsxisTjnhiiiB8hhrtUaDWX5HTC3QtJAvWf",
  "key25": "5UN47LahYiWw5CM25fsPR5e2mbw8GPHRsDhZbbvtTxMsiuUgAYrMneZmwG8jRraTpkgjuynYkGLM5wmB7fkvDEGB",
  "key26": "3upMJu9emMyfUAaKCtzYdSmhdogTzZ8NjFkY7XPnqJPU4FXe1tZGiDPf4ded1Q3gejkTBqxujyq5ihkosopo4QiC",
  "key27": "5Mk3p4BDbgGcZ8dEH7EhKgWALvXXPrgdjoCQf1uvwATerzMKz55RUXyCfZAeC1u7p1g3gj3jyxko2dtVfe8gPj6v",
  "key28": "PBrom47uWFFnWZarLKhqzzJrQKxmf2SnqdoGu8CdYJJzFFhkNsPRwM9srLorqTR57Q1dyBUiSQVqudcr7iaJUi6",
  "key29": "PSF4miDSWskMpAy42FCQMk8w3RQtzdmQy1rnpFVLkyxjktcm58bPVM8yodx6w8o3f1s4o9d6osyZ5WhYJiVjpmD",
  "key30": "2WAZEY3T62AwKuj7rjjQp2LS2F3RdMBHy2kSpqbRbZP5etePGqMnGBJWuUMANJM3x18vFJgofJPNB8bNB7jtWB9j",
  "key31": "2YqBSYQfkeDSd9zQY2Juj2crRj9ThShFJRvGbPWCNggMs7fC5qHDi1dYKprD6RacD9aLDiWWC2khCtVGF8EULrn2",
  "key32": "4z9LdtquqTXzKPsRYTcQkRcQnNeLkoTn27duYe4HEBUPEHDdctJYLzaQ8C4biS3tkCcpEQ8tZMiuuQmpC1D6GTSM",
  "key33": "45B8hCorypvu9ejnMJAM9yP7ZueAyQn9si5c88jom4LAfxxSdaNnZHYMBMniWuWHWUXrW3MTVdo2utEvyYQS4CKV",
  "key34": "2A6WcBKPVjWsTEPLU8ZSdvioat1k4XQYDLBoenxzBv1snRyuitFDZKdzjfB3qES6aMiQ8WFN56Gm79EdtVTyadYZ",
  "key35": "61A5Hz2GTv2xWZPguAfJdpjSwq71JM3KAB7da2TRRiVTn18t41GFWgDuMPx7P7yEfjZJSRRJngWMRWA9xiARDETp"
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
