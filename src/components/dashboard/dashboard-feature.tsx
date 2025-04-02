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
    "4YRzDXDWxpSuzHQpnXzapQ54xujG1TJJEJ4yWk7GRxYjmCzi8B2yYxEP25hx7o3Kkogqni76UfcrFUUP7cyCpsKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNHkTfYoMNVFJEV5MPu59Zfof5CGjLkd5focxPc1X7JqV4ocJvnsDMRTQcZKNirCBSqNuhWELTE3gyJzhY99HRg",
  "key1": "4Qzrayv8cwRbQ6cV4UAWQ7anhtFVQ4ZYkYweRQuedbgqsDYa5hxpkNFrqhxYZpUXWFkhFmuVduXE1JwTyeoPqXLx",
  "key2": "5ZLrhuLdYJ2tJq5rQfiimv3bfFzNJjD7h7viL25czftBubYJAncxpeZLXxQtfuxdZzdWwaPp9BeswHgveFZ4ptt9",
  "key3": "3s6cyhWeRHREEPjfqvEAFUNtixmhWmcESAHcgY6hGjpCCkmivEF5aoag2yp2LQ1yeUUyji7DWduCHCm2y4XLP5AY",
  "key4": "2xiHJFLuJkpa8ANiUssEj88YdLwUC4xHMFiNjBdm1YQoZMobuNq9YbYo5EoYxi1DTw56f8jeiwXdKx24PmHCZpz1",
  "key5": "29wYZwqN86wkRVdQFkNr8FZe3cfLmLeap8N47xkCXdYeRHJZ3yuWpU8pPcqgfjvjvBLQrv3WG3ey8yDvyYDLfqfi",
  "key6": "3sdskMWmuDyBSMkFJq2SWt7EkvHCv8mdjUDjAD7Y6CHUHtJNuVWEYgj2ArCZnWNHDt1BGQJJhFr1q2F7zLxhWvSh",
  "key7": "4BUUmZYqHtw2qYGJA8ngujbxdZdZaddtsrgejFjC25rUoqiabpz6JVcByuTCwCvy3d5URrx36j4oj4PhhnzT41TB",
  "key8": "2N1MQXYuqfKvbRy7F6ifWfjTrKRdDDceHA72RGDyCwqi9CiLo6K5nhgkpTnMarjrFC6DFmAzFnSrVqbKaRz2v5aQ",
  "key9": "5fyRFx1XozYLfKuibs6vzmCtHDCzBCm6pJznqPXxwu4S4EkWiqeao5qgzsZhcrzgRUdxaa6nV5dybTHWbN46fA3f",
  "key10": "5nZiTRYTcuJWncCJpMDJdmTU7PNbjN9aDtu7EfzgsZHgUfqS7AhzhcaAnutECtYTcRQjQN7kXHLXJGBu5FXAPY3n",
  "key11": "456TUd6K3bCMmUs3Bw8TY8v4NMRTovQh3NqGFRzQU8LGrkogSzRBc7FMWEr9AQwwhJrKM3jUPykLfcruoVurnCw2",
  "key12": "2zoDvh2nCQgDGBZNVSjFLQDdMgQ5RNoKBLCkadyW5kWbz2GyMeZ2bTogyfqUpDGQD9ywbPYPZgt89DrikS9cj2sZ",
  "key13": "3FMKnWm9N7uoAVrvJcRHsrZ8HiDLgV4YJQCVQcxyYp2L3JCNCm4vAJv3FVqotHyunuJQ7CYXcuWT8TZ4gpbpJTrs",
  "key14": "igZKgo8i7Xffet5NThpyWirPgWSmp9Yugn7smbW2xMTj4BefzGsWPZWs7txJEJAvLVjNRDsCZCzPNQHNrg8PVZP",
  "key15": "DR43QHiZxQvf2YrQV443mRusUsydor5mjGweEZngGGWrP1ApbtYoUjw2hPfEtpvzTwiY2MQj9ohD3wAuzELJFeE",
  "key16": "DD6hGQJeiBKW7mHH3pN146Y35WV8RsdR3JRLMq8FtGV6h9eXsaSXJ95hSPFJzZt4KF5FZDxsVsnw9yXHeSC6cjR",
  "key17": "5UMtT18jvyAARBEy37ATNpcPQJvo7vt3E8aim3X9a7qjR2wwkXJBsCQJWS7oa9wMquDBZWNUtoPJ4Vj9YK63bn1T",
  "key18": "2we8RKq1o5s26US7bicp4Ackn3oHDRu4ft1a53k2XZJZDNV4ni5XbcYXjKpBHs6awpye51p1WEsBUpwwVwu4Vrwx",
  "key19": "46zFj4qhzTAKa5hG2PmCE5JgbYbdvBWf11n1opqZY42EAGqSYM339k5dpeZYDxqsB5v71ezbzFazdEpYwxK5gRnU",
  "key20": "2Uz2gp4d4Ri81RpzaxzkRSK1RqUiapPsaEpjVezaFuwvAEtmbcD19dY7ZfcViQNJ1R2qoohdDJXRtgCp7EVoKDLK",
  "key21": "3V8UviRHit83qkseGCHY9kryFazBz4Dna6nsh5R4vJdqTbeJMcWZvhqWFdwLanFc2faSmDqq67TspjUbq4siFCjN",
  "key22": "3NxkTJNwDC348PcPmYaULXnX9NUmaVbfEu5Myb48G3q1C9fH7j3tm8QsxLishxyvASTVmc2Ence5ZBNz9i49gP2s",
  "key23": "35rJzHc2maajPbbw59XcmGSPwgkuF1hbsxxNa8qmriP8MLS14fx8EyCMrL7LPga9N9StARf21rryck1v9xT7Mptv",
  "key24": "Q6xCeyXaxEbFxaDaawDp4KFa92cZe1K8ARaGdMgbiFbQgGaHq2SauKSvWEUTUeh6YgCBt5njL2TEj9Z3q1s42Bi",
  "key25": "4TQPzifrV83nF58VRLyidDXRTjhWAVBHaGi3qchE1j8jtF6Tvpz93m4ANzHWQhd1tVJt5MKdT1rX6sri7nHGsiMs"
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
