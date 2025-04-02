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
    "3YBrVuYr4dahkZehLVPCSggxTTGuC3KiSNn81j4Bw2eqJAYsRRdJbtc5tgBY3Saftub7cHdbjiLBG8QbhpyitZtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wh67mhNBJFc33pMjgtApjcvDfsbP24dpeVaqqRpcELKG6Km6GzZmimhWyoA9fqQFV1dEUC1p8BVYXZuv2KzkEbt",
  "key1": "5g4yR66nAJngLUw24CBW2AwZR21XAZuasKVDSSP2qRKg4Sw6TukFo1xns56Q21WAchT9UnndZbcsh6Y2gYmwrr5Q",
  "key2": "58vAbs9qbGBJBdPwe9EB1X9mTQA5PbU2YVY5io7VQrkP2ZLoPe4UfCt8LDb3vns3qumt4rSq44yP2uEBjU7MJEBk",
  "key3": "2fw41jG9wHjc1Zcor1fsSDSF3hUdS1uQmKYfCp7MrkQwwEGrDn8m7jbnaau8fPfWF7xxXdyCBuuyjYg11Ar1DmCW",
  "key4": "sfpBh1Xnjvsxc3gPMjH82VBWw3s8nDL38a9MEP6T6RGm4kLVwbztqNchnpVe7STbhGVnoAW49oJBEunbWTk5NHt",
  "key5": "374bF7hnjPL7WvuMJDWVrWRMHqTRctdi3k2ibruZrxsF2gRZ7wDLLyMPHpGcm7amtDcPMmFGBsBzofzS6U5YWw4n",
  "key6": "35EAYmoKgASD3Cqmp4KoFbttCBJWfAcsaZhJGCTABXTbRkiZ5xgfugKruXHW9BMRNW6DDjQsupc5brrDVZc4ei9F",
  "key7": "zj2jTRhiMjRh9MK4SCBayacrNhWZe6vDL6SSib9jWiHCV2mZNQgjV1KKNvnMQNc1nG6E6SysA6gvqo4YrTSpFNt",
  "key8": "5ewRuGPxEQFh3NJUTHGyvDoWBVshFZMdQkq3ueWwj29e56NQByuTZ45cojjXL1qMhJaRisCmRiDueUorqEecHsB4",
  "key9": "3tze7QB9pUYa5eBhXckFi96FceZoMaG7tnvp2Hem9kpnvG9uhTpSyEr7k5zZZ8c8atj7Z9Z6DTmQ8KMyZvshGVGi",
  "key10": "2m4t8iFxEff76UVTc8wBDRLAbpVmxG3XqyEaAsrTjDhGDCjsqBeCFYywRPQJrYdzS3LghVwubg1DgrsTW9R8zTxk",
  "key11": "2NW2f3sjnW4sLp61f8nqFXmounmLWemCn6XsLmvSLRhr8WS1z9mcxAK256NdZhUywm1iDMBgmEKZYL8TxUubVDqt",
  "key12": "5GsniRXQBQ5B3JUehaqoqM1xPzYCzDWookcSZmuPRrw8mojauEi3prxu3V1ZhJAE6qKF6XjiTSPPrRGZCPy1fMoB",
  "key13": "2si6DNui7HezuT6pSB74AzfMK6j85BA1nr1176HQyc5dYzqt6MRRe4wg6zDK8qrJXJXpwnGzFEk2M9L9PSneREwY",
  "key14": "46UWTzzSBMSgbPGYi8d1JWQ1UehGQaZEX3Uu2Hqf9ZVWUyocBzcBXejeL8rXc6bX97fuJCYjS5XFZqGDWS8Hd5yT",
  "key15": "5qTF7dwKg68gFsxQKYgHciCQ7TMKD8AyGoTTvh6oxGf8VU1VGX3tDbWsV4o7CZScrXA6f9egLACJvFmjbcTDYNRG",
  "key16": "4zt996Yk5aUsofEFJP2quSs3Rty6sutQSkePDxhA4KC6GDTKAofJ3ky5ajstbAD7qufj9uVTDtUx49fdUoSBXr1h",
  "key17": "BwhHEYn2WkX7AGzKuSjaUYwAkuZyLzSwkHpnyc7JbUum91ZpDgRFCwGVMDBmh75hLCzG2NegS6oRcR4L1tTAjeX",
  "key18": "48BSH4LHXdrr1pLCEKWEkWf9efF4j9jPJAqeP72qhdDPQttCVJFoJQ15pmaQXUQ4VCg2dpY2LF9tBxsfksvRjRTU",
  "key19": "3WrmkFhwbZnWHHWyG43BxGCuk7fsGFmottihXt9httMx49XEUWf1M18Tp2VUmHms1p4UoefZVCs7dFHosu2SayGT",
  "key20": "3ejAPRmmFTP4sWFTjJnyaSqVBZKZoNc31C9CxM11dtDDdXH4vXif3pPfskVtmuKTtbW3mV9kZg9tsY6N9v6W4bSr",
  "key21": "2fVNontT8j72MZrfJAhGoEmfwGtLRfmix8mXH2rS3mnExftNYuRtUV2N3sok5ccJ87uPtQeNk2eaWemxqpXZEgrY",
  "key22": "3Uu8ojjEm9FtyJB999eaBYgrjyztPYsw7cS2FH8oonk7ojKc3jDY6u5p8JoFfEwg7cKTDXaewbqvUbboer6JaGdr",
  "key23": "5Ef4tQovhyBgSGHmVfpC1biqWsTCyos8n6Qwf9MqJUhp9ZvZQHSrfzwHsuuUge2vggZrxLmbWvuZ7xdjR4CrkPtJ",
  "key24": "67Mi2A6t2FKqkt2fbpXSwKoyTLvxa7m6nbz8Lnz418ns9RfY9qhSvmoKAqZPHJySLymKxy8HmiH5V6iUVXovc8Z4",
  "key25": "5jmi7RKRzcmA2BMyAgy7cxW9veugmo6WX618hxihbvtTDaTB5qtpkx2owJpCs8tPu8GTJcxrigJq1NypbEZ2nc5C",
  "key26": "5FGneRJBkXEgdkihEZiEC5vNVwuvhDbcJJpRdu7JF4VfgGhXBR8FJQLULjUP9TP7qEDVFtC31fyjizc1dsAcugGk"
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
