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
    "5KECWRK5adVV8bqT54USnPxdd2VQfXFcAT79ihRLHpRaYrfpu8o16nmG4gmQxWFdL18a9KtbR9GAcriU1auewxGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uG64DNP1Hc5YaaCns9z4vLjXjtj35ZrU8Zs4YKjsSyuQ3gPdLLLDFZRiMqnbp8Pks8muwQsoD73WM1De1RfELue",
  "key1": "39jDncRn2ZN6tyRU92uhfxcrsvCtPpseYgAzZYhSAQt2Lepp9DAyaqYtXMQbRsQjxSNFJTN1tUhZNJfSBQCagqvS",
  "key2": "3Az8zE7QdufdnsZdAKUxsr8z1C9L9RbFfg4AS8z266A2jcw8PjgC1SGsdWa6VCpD8zEX4MLYKP8eZ958FQxQ9rme",
  "key3": "46P2cVCenwbL4d7XfQyKnF3bhqxGKXMgD2r8ixBNwxVhs6Fgm4eHgGFNac4zSNpaNSvQCQ5vGG57i1xRRTx37PcU",
  "key4": "5VgBnH1t6L5uEPvc18ZWjC9QskNouBpW1E4DLpATJqGTD5BgCBzyhDJzsvphQ7EpB4bsfEKAcYFXLmpdRFgcJ3PD",
  "key5": "5pzqmK7Y1shMomZYZC2919hEY6vgZf3hhiC8dWFwqH4T9XFVKTfDwL6Cs6cZ5J3P9YAVj4mSdztfRj9QNWdnghYe",
  "key6": "4EMBcdGh8NTXYiYfjPSyMhtm6zSvHd8vYCsyGbtRoDGSSQuJahCWVDzTsW4ZSMXfGrHJsCgY5seeTPLBzMemHGED",
  "key7": "2DCxe1vRyvQibp5iq1TB8fRrdy8hjjvUFpYSXkd3C8LX4U2mFsiFeXmkC3rnPfpEJy6bkqiofymC8i3zh8S7aT2A",
  "key8": "t5AF4AJBeZshquq7otE2wFQxDeJoGPajrq6hKxKy3Cfu9x3iC5bDYTmL9nhFTKdxwZ1QrmKiQmrbJpUjVUvMvTj",
  "key9": "NrEVYYaP9kK3couDg3QwKc6sTjFoxtnpv78QivobKbRAjmwTrje5bmwRgCMkFJNr6Ke6fjNuZDTf5x9xvEEek2v",
  "key10": "PWjARWLKP2re1xKFDwpH7auEFt5t8rBdhYhYKMtRBs1M4EWM11sjWBtiUzWPb2vJfYiEdGTwiSE9pGTotxVKeEA",
  "key11": "EQj1TYtBmnPhErfxnCX719M1QeBRbwMkZjfyrHvNckVdJWYtLAnjCA25iESEPa2Zub38UqAPHF1HjED1dqVw56C",
  "key12": "4Lgx3QCRiis9Kkk6LyX38CDm2JZ73pnCthzhJCqfsfnNM27foWYwPdYHDMYWgmA7fKZ4eWZJ7KMdTs9bUt2E1HFc",
  "key13": "4DCHw3qq8C2ubGvtgXVtro6LwZBKGy59s838UGfn3q6QbAMgGnvCD2AhPU6MvsbCuTaifn65mD1NuX9EzM7q3hoZ",
  "key14": "3Lpzuc3qZefTexSjxkWokCq2psTDaBf556RezzxqLeLAqF4Qafyyw3WBb3Mcs1a8zkvmanpktubtLbuzTfG4AzNm",
  "key15": "2ekpSrYimH6tTFfQ7dcsq1eNfxtr4AzcgPS2q3wM7UASF11Q3msoEjqb7Nf5payvQXfnwTieTZNYKW2RheNmw3pN",
  "key16": "3A5BUzKpuL3cB3KZup7FxrVesxZ7MqJKJkHCjbH6HjvrpRPub5b3mFe228K19gQGeyNotpKAXHQLQ3jQuHA6Z7UN",
  "key17": "5mqvRQzipg1TfRXFqmX82txetYHUMHT81G5ZmwcmoHsHqWvFCNZQi4Y7pF75VX5bEtj2DTFU1NjuFemYTiuVCWoQ",
  "key18": "23b5R4ir9wdoskyW9TQddBdPKPiGU4Q9G9Rf9npxcdLWpoj7oSAV4V9s6jQMdvMy2KX2ULWnUbBYDQs5ZGGXyDpi",
  "key19": "2dpgR1Y4J7LJqZmJ3CULm58bztXWqb9waHnmskjPK3d2trPzXA7WWxdZ8r6j9Guj3Fqviom96vzPV11VwQzUCpqZ",
  "key20": "UvB1Dm9sq9StJVWYpVXAoaXdKmhvk1sS5ArGCzYgQqYrHLehpUg8o1KG4LLB1pN675GLo7NKsAL6mwvgwe6c1uq",
  "key21": "UjtBAhETYeAuoUAsKj6BoTDQHHNrHcjdJNQV1KonTgtgKdwf1Dwrau7YLG9W4S7xyEcq5q8fDwbfqsotE8mkmrF",
  "key22": "5v5D37QEvHEgdwuBhgoCJARoCMpdNocrbmsLSUkSGhyu22gWMAviV71jANszA7RC2FxadM9osdQBJRxcgwVTKJMF",
  "key23": "5VTVmKEVKVTkUcrcVsPASKtF6x1kitq8YSZEYv81r2X2Mt7DTBTifmkLV3fYGKLfzMeF2nRnhchRz1GvEMRxvSmA",
  "key24": "4sKPr6SaiAZEuz2zm7hJpoHQRwN5pezAf2awZtBgFmc3dJJDk9E5WbYsTg1pGeAXcNDP9m2gFtTxBtNavkK4QHWN",
  "key25": "5ZGUzQJXrjGuWx82wFz6Fn8dDsawtLYgw6Q25h21ZTLC56NF6tmQShd67RedepY3fAfgAGEUK274mmFWkp9mY3g5",
  "key26": "36RDuVNZNVXH86mrk6dVkYBAgvp2RoMh2TKNq8yB5HhZDRrHc2SsC3fVTBFGakp51fZhUViw4rt6HYc4Np3RRNYh",
  "key27": "bML5TZvwLopCeYQj22iNox9qZqBBNG4y74gJk5vyk8u8ri44xE2M1YDkmBcKxWL6hC1XS3yAuyVRjw9k6qVakyb",
  "key28": "DT9xHSWGj4uLaJgovCSD13PwDHSpsvySjEJYzS8HQeCvqWi8eXop4KG7buUjZsLsRZyVbyvHWxk7e7NfxQ7qZaL",
  "key29": "2nvCXAttTGpRw2E8tjWwyvcy9YfHYZ2taTpuHSTPVnF2avAh7Nzx9me8xpWwLusJhTUMtrKYhvCXB2CFFarGyzM4",
  "key30": "5v82deGHFh6mD2DgCs7LowfbYJvj4X4pTT5VbxHV3v1UwVoCtedMPpvNhUQGS5B27U35GjJ2oRuDVbFDZerPfAyo"
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
