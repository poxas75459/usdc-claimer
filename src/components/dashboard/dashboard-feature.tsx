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
    "5oiRsqMBmNzpPdv2N9eCMEiSG3VVPtduEqSh5XbLJapbsxuanxnE5krMadJezv7Bc95HkA54ctkLnQHoZH3FvNNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U7mQgDUMNG8N1S4Q3u3mb6mkfPm2oi978YKKNJezH9xuW1CmCjnrBkpWVczUt7nDujQYLmcQjdCjC5idBgaXH2p",
  "key1": "4Eig2yMFBCz97aDqDoTazC1fA2dmjo2QLReWciV4j6CqJ51WxrfrqWC5qMbVNWvMmuc3nnoSzuBVppFkJffQoxcA",
  "key2": "QWzygesRt1S8D5VZCrXSQJWb8s67YNe2YiSPWWKfG1QQq21ppQpRQVLMse5FcJmfj1Dh8YRCiQqcRVTTjem7xqv",
  "key3": "M5VxRmAbZh2U2fqFpXyqcQtBZNMfop68WSPnrp1fo9sCjErHCueN1LEjntiK7HPC6f5ZALUauAXpKBGi3maXC2w",
  "key4": "VPhnuaCA2U8yL9TfVxEfXc9QSpCKhUDzcVsSr1HYANKnA5n5KZru99PBCU1TF1EhH4LPd8nPqSLBCdcQDY7WXXk",
  "key5": "4oY47TW8VGeFY2vmZVMfkEaiJSvfUNSqsrWaLgzyBoKRZ7sto89MF5gxdWEHuxKfzr9DLg6oCVUT7Y7C3Tiuxbi6",
  "key6": "2WuL3C1GmE5AypNvZ3oWVwAcSq1GpJks1dP1s746SampN5jYNnKH58mw7nqNhuWpNfMZWcpBEdNzYCXyJ6jsF1x",
  "key7": "2Uo3Ujt7Pt5FXFaQUzahiSJkDfLw2ub61tC9T5gVgGwkia1fxX9S1d8PbmPGxJuD69Hm5DP2uxTyasnCr7t9eXDv",
  "key8": "5Bzv3mhp7gq9j2J2P3mtW39jp3JyZMgGiJcGxNEaBymBts6g8VD5h7NULRm931W2kZoe1q2Pcaka2vueRatS5GyR",
  "key9": "2rFUPN1247rURJx3FbYwjXcwzLaUvQKpq6MjZmFNiwRzbcm5gmjrP2DeU3TWefxgZYKpYkog1h2BM6uKCi1DjKve",
  "key10": "2J9bs4ymYvVwQ3TBFWhETGunHDur2rv7mtVzXzRyoXd3xkda6H3F1F1ABMu1hptTH6K1R7FwPmd1Cqm5LwwQFM6C",
  "key11": "nj15Qjcix7TDXGDqCyuCDbpV47YNYKf3Pore3jMDa9wzuyywnYthU9BiqVSMNXWL8JBpnckNaELzBatep48y2gW",
  "key12": "35Qp2WxEpCPK2B6pnPuzM2fPMWR9DhzcdS1JuNjhZe1zcvEWtsnHVFC7BUBkQEgQvq45AT7GvsBxS9ANEpkuWQTj",
  "key13": "5s4BNrxMR4uwNX5rMD6CHtKdmzFYQdKsj2rykm9BboNvhFYu3qqFCwc5NxJUFJXn5Ay6kYKFRuai3uJHpX3sVzvQ",
  "key14": "46sGGrCQbvMAC8EYjjoLEHMwR5XyJWPEacWRuH6sms734RpiB79A29ZjLpAF3PwWMHY7xRDQzcC5WJ54vbe5TW6g",
  "key15": "4zkQMEbqrY1LFUKfaC2SNRTocs3YPkY1isdyGMFa28jFJkwKbCFNgjxDpPrEKEgZ1PQLWfTEx2jtphygJiP7vqjW",
  "key16": "3pgZj6PLjRwVPRKmEh4RePWNFbXPoyMHtGqdT3iaQ8yhDQbJ2MA89Z7HogM9gxc9zJZioEC3vu124skWEke16haT",
  "key17": "tPagZ95N8JTSppg2CPN33DYqqEbjVHuiExrXRiQdhAt4E3QdCSgzFUopiULYPLg6o2SU8HDkGfdcJKCFPejNSUz",
  "key18": "C1mLsfeitFSVZ7wGfQ2aF1dxXVAXNs2bzBRM4G4vmeTsXRPmZgujpigCgg9zGXNRQwksc218QbCTJTjiNtAfetQ",
  "key19": "3pscXMSoUhkHWpVQZosCxkczvtT2hNKvSZUrFSGYgu3cJepbFdjT54kW14PfPqdpqbPwWNbEABMoaxp487H8DMjf",
  "key20": "3kRo2N1vhAGQj2xqGTs3HCrLnfWrkeBQZg6om1kdZKnWm7w8xfuTHwv4TX8EVh2ehKdMJkNGv5sy8RzQC9BNeES5",
  "key21": "5xj2up2Z4XU7PiWDFeemjYfJPymxY677v5ubrt2ojmY7wunG4j49meoRk37o3CqodpjKSKhFscXPmNfcsKfZe8nr",
  "key22": "3AUrsjMpu9inhRs3hi6tWpFaJ7N5G3E6gwdb8Ha99vYXMr7TDea7qfohmERsMukYKSjwuLSaXzwQSriLb34K6Zag",
  "key23": "5xUi2k52F4ZKxeNiGctegReW2n7auZf4H9P4e3A68Tr5rqnoUUaAuU3yDh7682gUQLR3nCrajhZNg6cz8yKEv5ep",
  "key24": "4am8r9p6GuT5oXq5cPQg3q5EELNNYu41YG8325WSERFZxp13Ff1nEQueDwgTRX18NEU9yREgxQo9EJykj8JXMm18",
  "key25": "5QtVfm7cn9H2AsZddChdTjJMFDKDZfbZkPT83HLiaAzruvHZR4oWHTG1TzTXvjCsy2P2gNGYbTEWTDFF4h4sqWDb"
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
