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
    "3Jchuvv5WbBsBXQKxfUCPsfcFa4CHyMoZ8e6Rx5uPWmhDs1bFyYo82sCK6P6mZYZqnTULib29YJzhrcyyTXsvrHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2LCQuLRxHytZDBG9BnaxLkwi7t2Zw6M36zxmVnHbkwwf2kdUMQX945BitWe7MyTSXWaLEphHGJhAAQJLFDgjWK",
  "key1": "3KYhYoaF7Fo5G8XvUVRjnygQiUU8S6z1fRJANy6Uz9KiPzD8qeDCXEu22Fv5EU8DieqamgYirbqRhPDowjKw2KnN",
  "key2": "4e2CcjwMW5CFAcC8G1qc4aT8vXi1Rfwt7ZPXqdvtjqfUhFshKCdcvXuRXHjGBQcmRZZKMxp8u2Dc5WJbeGe2L9mT",
  "key3": "3PU2y5Bg5rgf7WgpVCE65jSdDn7WBDB5LKMW6XRRiJdBkS4UiRLUhnNijuWEW4dyxK5EZjd8tMFX6H65r6t8upCg",
  "key4": "3GkvvrRbyFM7Woibu4Nkrn8osiJUejdWgSMCUnZHjMimPXwWEdVxqT3ND2xizNs3ELadFrvDwRJwno7Jmy3g8qTJ",
  "key5": "3kKknuoyNYc7FbC89ppqnMef5pe2HHm3Nnycc473oDhCySADbFqFzvcLX9MncuUc1cesBvKKE5NsYDxKCSPFbG4o",
  "key6": "UaMWyowsWbPdC3wqYnrkMtqZafvs4fGWL4ag3zgRoNYpWDQt1T1HXuXe6ETwB1F9mrsxWTycsckRB98SSmCZ6yB",
  "key7": "2fydspgYJjTtx2PuBMpN9pFdXQsAte5om7uZca5mH8zTNMu7xqc5pGDyU4Qby9nNBR6GTparqGBCihsae4muqcip",
  "key8": "4CKVjjmToVJj9vqnxxWHf3EMaj6qWgkdavpACEPbMezqdzq1CLQR59b6cSdvRPKWQ83Q4W2cryFnSsddGDupWstk",
  "key9": "3nVV1rdRPmuVqDax13xcv2ah2PLuVr6N3qJVhToQGVe61hbh9i4oSznYD5UBbed7EnLRKdA5BiUUPekyeqXUn6eW",
  "key10": "5kQdxd4V56uN1DrJ3TBPxs6EBpmnRCU1Hig6C1DXFEzCLsDiYAxQoNacPyDSPeJ66asquGAs1FrFqwZKEtwbUCut",
  "key11": "27qwAVFp9WkqGcCxCaHZaYVeGVKyGEnTyuDAaN2srBpNYpTJ58LMXRnzv5J9AvqyvQpERFXtKXUaz8uF856qn96P",
  "key12": "R6J2zPZpFZfgXzyZ43WGv3nNUvU2krCb3hCoW4J8zLTytP173oKLGScKgujvkxEWxeqhPiREV7qeCs6WrazncaR",
  "key13": "2ZiXPPrXcNTQMnRL5HC9p53m4ifK224QEE3RNWYLRiVw8awa4YyVCSQhoz4hL8RfPjtuaLPtKxSBvuebSoYbLpJk",
  "key14": "24JYzqXuZfqzfpn8bne8aVUsFLpthevBGeMqmKSi6iZUg7MJ8o7JJMeNGs1o4gipz7EDjMRwp5SbkdQAP1WiPTTX",
  "key15": "3bv8YcdDqahN3fTjimvBj2hEWV8nDaC27kav69vBDjGwmRw1XHpBNFHcRA7QGaWdLWrYZtGc4EXVaufgZCgZKD4U",
  "key16": "3E7c3tLusnDjUHLSnTHkTsAxY1Ut7WXfPscoHxu6k3AhFYm15WunkXXkkDeKbGKa9iePdAg5BRmFWLPPc1KYsoCr",
  "key17": "4nye99UFpvUvHBtgGHCMEQePiJ1GBWkJohxYm3ohvwJm3k4VfPbswKU8Yh92xpuS82Cgy88ajE5rE7Q1xxcPn63X",
  "key18": "KpnhJHaKhdgiFN3Xo4YgVL3w9E7f7jdUgpbyAzbyfR1gHy43ToUbjE6asQjpoAvtTzthyAXTX5ohab6Kmj7rFFK",
  "key19": "jnDjHkRu9s7wM4Rz4ErcFbuGNhSgP3gLtF3am3U5d8Y5EsfRJEaBP9LdL89amR4tYPjcKzVXxYLSYhK2myHL7AV",
  "key20": "32NcTkZBQSwP2Fdd5NyQvweppbNGNkv5Cy8qzYGPEuKjHhcSwdidPyAYXJxLgp4WPRTbmhDAHJPUAZ7CxumHLRV3",
  "key21": "3CAA6RYdWHs3bexV9mLM9p8TT97YiV3Bz5YrioygTU139Bhx8TAQfcrY7gLAcBFYRNL9SavSrKtpDWDn5FzmAnx",
  "key22": "4jZTcFVZTHsWiFCKGo1eQCpN133rXbAF7xMuSE34M4yHXA3zWrDDgzS2WH27MWrXL4PzsagFjoAkHMLN3aGW4x2s",
  "key23": "3bYGhUV7Qqdpmnzo9qAdbFqJ9Lzib8nzAoDNaSaoKpY5o5FxSUHi8uMCKFoo8cBQMxSAoXARE4HgwwrAYoX3Mxe4",
  "key24": "3PmqKDkSeELFwKsirTRyDSqoErgeCysALqP7EDtDwWfpt41t3WYrYvtiPwxcdvsHajuktYaRj5qmwpSmMcd7PWDG",
  "key25": "2rSuAF9r8yoXwixB78wmVjcr8iUKnVebNGHJYEmtaQ6acCjFRWHgbaFLA2RBMnTA4KnWngJatBCyVh2R5DGjcSGn",
  "key26": "PYNHccBUWjsBpyQFtk7NQLxZrudpWADTdZg1AXDubUdMyEAe84UdS3qzHKqmdBWFspDmtt1Tzvaq7jyKmBrnjSB",
  "key27": "3UjEVMnBj5ZRTG4tQ3SfUCzeK3C6VB1epqSy9FurYKnZraPs9KnqEsUaAVbxreg18Rscycn9aJpeVPs9k39j1SMH"
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
