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
    "Bd3w844zMiFXw4f4A6we96HpdKKurq8xfrvzVtzwE5dw98NzhJ4XHuUEBmRk7QmoDHg24gM8acqP1EgEzJjVsSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NqkD7x5thioD5CAEGzmskqnjpfixBTrx5948sn2hqyUgm7CBNDG9PjnbsX2AgRaubagDLaN2EzaccUrWDv41d1C",
  "key1": "T58hA57tKpDHFB3rSgBYazQ8cCwSzmstS2YYWbg69ouGSQUDzhL9RTWbz1bnqPMaX1As781wWWt4egBjFvVuNXa",
  "key2": "KTEUK1fNtVvSnDxxQc8D4XuQAKq6QgH18aj4LnKWszwP3N1hEnZyfLSUa6rsPkbQppoBhbMHS6fsUKdw52oRFmf",
  "key3": "3DqfeaCicBj1KUucVw8usdBLn1obskDNxM51eqY24LsVJ5XVJWidmUR9HxjeDf6o1v1ySrvkRWy2whKaocGx9ah8",
  "key4": "N29dM7DS9VwhaKjGkU6uR7rzSZqBqN4g1EdVGLs2HSNYX9p1h1moLPeRAx6WdXBrKFpXmMtB655BkoCXw6XwgM4",
  "key5": "2aJWv3rzHLP3CBvEsWoFTAwLixubziYfrhgtfh8CRVEc942ZCcEYhKXcRtsw36N4g7uiM1JZpYCCnsdtsmQ7DLYC",
  "key6": "37GZ7fqAU5qYAaPNTKKzPT2uMjiv3MA3uaiKksvKPvHd9gAuyVNF4ECAreoLrjmJMrYrBq49DfJKx49U5Xo9GmB5",
  "key7": "3ZEkncu34Qrx11dD3bCGifGfck94UdSXdhB4ab32EbzkQSgrJGDLts4gGG5S3yKgyuYDtuazKLsweNhgPu5XKuq2",
  "key8": "47216MpJdCfBfovmDyogb7EeQE9qu6tAUucgD1Kv5EvfQEiTUu7xALG4ZS8pYnzhymjrqpHC55NcgjhxPryBttFh",
  "key9": "xx1FXLM2rqrEWW2KTDvSgao47oqojnsmGeAg8RNLz23rCwrSNJZdv1GzC3aWN7eJ37EgDNyqga7EVT5aYrmYttS",
  "key10": "5DS6f2P2WKhYcE6k6Rga7mCc5sU5DRt4eLRPtrBJcfsJVJLbSUduKNsduaf3nM7Qj6gDtB44ipeuoiMVCVrUenxp",
  "key11": "U4W34bPUtboXkk4WpAZsbWPEFz83qexXqn2nzwMofF1gHSJZxDpkciUqL4zuUcYFRLeCxKA5FgS1ng1nZ8y8o62",
  "key12": "3ZYDp4Vk6cEb7nJ1GKiDk4JkfJM9TqEwLveD5PHUUGnUQEhsCVcVDPVq5ww24UhdfEzHiuML7MtmupZLdZ66Umgp",
  "key13": "4EPK9Y653GahLUPnKt8Zwu2cxatUXXpWaNb7qxEVXUSxfYy7GCq7Ht5Adm3SfvyWStJagVE48hxueg5RLWHtfpka",
  "key14": "4jTp5BpBZnfTQi67jjSPnWoVB9mRhmevHLmaYVTRSuw8sS6bs85RGNReQDMEGWA75ZkqfXnjbzLFcEJV11jKX8QM",
  "key15": "5f2ZHkW8PJEH3UFmp6H6KUAoPEwKo2xmGQcy3iZD66b8j3wcw7vCRyEGbrGREgQafkkymt9iMCxay67z3JtkiDBN",
  "key16": "4t6os2gCmW98Lz8hZbfZjcWAMx1rbd4SbAtj2ZvEqBrgYqD4GEoogcvJ1ib6q4v441fXSEqVnZUHYgyaHyS45Cfv",
  "key17": "3KSZQpY3x82yPrEKg3uEMtX91yHLeKz9xZNpwM48pJMHUPriyeRtVSrK8kpJMYvF9E9wfWWXhjwuTPdy6mqZjjP4",
  "key18": "5dZvkuKdhpx7nCkPWRZvE7j2FBpA8Xa4etczJBmEhNE6Y6mdEV2FbnxPZwXk13YTrcA8hXs7s8p9UW9zQHm6xUf5",
  "key19": "5GRiPv9JR5pmXbWGQGzBxLXzE7GiCaSxVBS8Ua93tA4gCWj4jNGdLHwbenCPaZhDGLyBENi9J84Ao78K1rEVzgiZ",
  "key20": "3AmD4teT8GFKSsqXAviZtXnuYBjMn9dMu73GVGdZ7djXwMYSiVEgKrx6itaNU9FrhFL9rW99fypvGDqRNzdTy194",
  "key21": "9acuX2jGvtp29ABj1EECPTL6bZdFkV9WSZJacXx8Da8BwBTkhs2M4p7JCsyDJqk4yPkKqQJuzagaeG4qTwYEm8e",
  "key22": "56SKyMWwJadiJtMCdEV9LABT1saaUtbVPykJCW65SVNVwdiJXm3McqUBHkmFbRFejbpFzPVqFYoGGXeoGUKCSrUm",
  "key23": "2Dw5Ta9vZzGNLNUiGChyAXXUfUSr3iLgnZNHk61bqaoACPp94VA2Dqhn3V1E3FvUwh2bHpZcuRBA7h1hqH1euDCn",
  "key24": "c1AmLELbwr12PRi8LwKBmk5mdGthDNRHhsrHD7wbueKSZ3NABZbVzS6hr1DfGjjQTN2G7xiTNTGbRvGx1SDGbj6",
  "key25": "2h46eTAU4a4SHgZ76VWiFT8gkxxbc797NzndcGQJnL2ZWyeHyDCpQ3QtgpP877WXZFRsZY38EhYzajmUQoYvydPp",
  "key26": "2obKv6ZXHEn4MaCcf7MkAEWkYFin5ABbPzwPgoW7rC6XM7cpPiZhvMnjbq9kAR5qaR1GkexNJEGMabS5UkGM4q6L",
  "key27": "4n7djyJx7mc3ghhiSaGiiczDtAA1igbrtDZEM1FyUAb6pQnHKTBXADX5fF5sEMtVUFjbp967GibVJcikcJs7rbfP",
  "key28": "3TRTZZEfPD6FarnVfSfJpYrpdNL5F4fyGLPg9AKyZpBhbZ9VGyZbK5s2AHb8rnKyguPMgnZ9gPGfM137L4c6dw6r",
  "key29": "24ezZQbvHn3rYyPM1D7hwmrSUDQEb8m4XhpLkYuCVKaPqBBHKARyv6cBy18ZRPpPxy34SW4pEVRz4zQK24EDkcgf",
  "key30": "2eohocteGfGRryfRadmx2fGpGdEJtqVdKYWHyLf8TWqDA1syqMsL6dTB6ZhpmxTkVxCNA1XyovwJzBMXdmn7m1en",
  "key31": "2hDK2XXQfMSgixifshpCGH6tjv5WQmsN4mGHm9K68EYRQvriF8eCkEZug1bxRFzheqifx6HKpKjsqGk2dsNyqhsg",
  "key32": "51jpNQcu1Ve6ziXkUGqumgGDMTjJtS2eQLTzQbv6Y6jJBYEePReWMdTDQEp7GZkvLJMFkPjLj4RztvMYsL7uZc33"
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
