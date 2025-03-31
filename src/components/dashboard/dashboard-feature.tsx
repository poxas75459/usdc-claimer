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
    "2VW1gb4wHCP3TrEEJPmNJVrrxrVrAUuJXsT7rgYXKmKW8VQhVmDzYUTYMvCh9dpFMBG8UKedari7XrXNdcqFef5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tSaafeeNvQo9TDxnHRnwaA5Pasx1qZJBYHowz1Erb4C5koqxaFxQCYZxAfamjBEVvi1RXHSAsKrQeQEyVVeLkd",
  "key1": "2GfPRQTikpxUmMQKBkwVsy1cKMuxGmoxTyBgwVCFWHxoQHErVrHeiNBV22gjQiqbrpWB6VibReusjzkF6n6byEWZ",
  "key2": "2367xeXVx9nYMV5ytm9M6dxMLvB5ZRYZJiDNpr4WNpC9N43xWphkKUKMgWWTZzZC5Cro4aoiy33fYBeaJh4KM9M7",
  "key3": "3n2ahQqcVVACTNRNL3eTU2BhPVph166Bick3Ldh5qdrGg14grKcfKvp596hufxnz3PgcZKB5SWtg4ioZaUqhpJrY",
  "key4": "3nWFEdzb3WquAHGdnHFbzrfFqnCfw2E7ht16CDgxXvk8416jQ8zrhAvjhb3uukZqB8wA1R6FoYKjPXKbBzyi7evy",
  "key5": "3xzh3Qgb6eemhDRjGKTLuSf7aUxEHaSC71crmhju8XTTsDHEXkHXGrYKQMcCenyzYzoDFMq3KQkwiACDqfDtvRGF",
  "key6": "2myuPz5gMtgjgNMRi3XTbaA8BdDHyAjtmAHLAK9TCRJafwDP3kFbywVu5GzDGjm33y98qh4LCsrgZHvbUJnfZCkd",
  "key7": "9LhN3NZpLFxyWcu6aGH1WEqwjTfGfZVt3mWoQxJxWkjXcP4n8NZ8HhgqrschfjAu1pg9NicXAtiepnDZ8wJ7vNT",
  "key8": "2EAC8ZYEJ3nvmScQTC9dvqocb9zDdPC2Y6eCBu8ySXpHmwMPDXnW8RMFRUjubtV8WKVdbmv4cUGypykBycQrphWu",
  "key9": "3U9ezxKCCTpLGmUB8aM1Y8aistsGori1utRJL2fRxau6jthZw1r33avVVA82kBa8MnJeMRhFB3J3kHmZHoXoRBnD",
  "key10": "3ZnbBSpUasqMXbRaeRZVurH2Pe2Pwuig9YHRGvntTXPRSGuUGjo7YdZV2LdyyDWvFPx7MEmVCgQ1eya7CSZvdRCT",
  "key11": "5zFSWUG3BGogVw33A5R6WHUnCCByuaLH4QcsDmD75yHjmdnaMPAeSnj8Pv7T6zJpTJ8iqNTheyoq4JWHx5tfpadS",
  "key12": "36zpPnZDYg1uPPTWtDJ3VdBrLtHUTxDH3nV2EYL9RSw4JqjczBofAVSYuQRgaA1QjVXqtHzqya5VKHoy2nhiYu5G",
  "key13": "3hL4WNqKydtCxQrbL6W2yUrAbdnrMzAt6o1YcH47kXSLmJJSfGSH9AsCAseUA6stJZeQUdmbvaBxY5XdLsihgNWs",
  "key14": "4xPMeFQZPyDgQkUXQ36g41v7iKwKMwUb4eqLk8QSb91xAwBEA8xQrePxd7YMpc2qdXz7DRX5YQJ7aLYNNarMmpHv",
  "key15": "5YEnXwyhPWKNVLGfKj6u8afMKGHLM5DpeKVnGQRPp1y8DiAsy3FN3oASEyjCoX4HXuYZ3T2qnHwKmHC7DsfnBuQZ",
  "key16": "2pWQpx53WpTP9HJPdqVYCAtb1ppLTkWy3SUR2CQD256JLqfiNkDjwQuLtb7iLasfsrHoebjw1DbegoyjBodtSWF3",
  "key17": "4K3wsih1riWm4kwLo42Sa9D3HqMoPTdjD2G1oPh3iMQ4BdXxbqKgR1WM1VJFbUAdXg76waJGmKeZAAveE8oEcgVx",
  "key18": "647kLF3wQsAW7yaMALS6BpEfhW7KB3LdkfVtRboToY3vc7v7Ly6khcftUxnMrMhmfSRHL4oesSZoBdSXwV1SYe7J",
  "key19": "KhyaUPYN8tCGPJGw8GvGzscX4BDMm3V2P7B8s1wktedTDbwHstaN7TAc2pVYYMNttmD87gr1rSLiw4F7xsDsSVt",
  "key20": "36ge9KWEbk3UWmBuEwb4va1pCNv3duutA6usEu4ybRJ9mh6GUNVVyWTT826HEgZU8XBzvuxJmdLH8uvjMTT8pNnR",
  "key21": "5XkJX9CJVojtroDfbMYiv7A26rq7Gk3LZwZ2BepNY3W8bmLHZDyFGvQnNqvFSD2Cq61oDot85RQvyoMyouLw2P4E",
  "key22": "2FsMPysLyPZP6MgmxuqM682CRxZAwpK9n6tcc4t9SqkZAZrMzmZUeqgScJJbp2ZvDe9HdA3LjD8Qe56XxYNXvhGA",
  "key23": "4grJrftAsTHGbHhQrrTx5arpVZgL4hbKyz3ufSXFhqbwqawXSJMLRTRzs5nVgUMGAkwh6RzLXQSMn9nsvYvcsFe9",
  "key24": "4F2f3wxzjaEw8gVy8XuzQ8k1YBAJM3P7VjPAWF8xWFrkzBsyjA12GsdEydeh7sYC6h9CfkkyZbBiVyNDj2tBsZT3",
  "key25": "5zZYraznKKTVxPF88RVk2NSsEfZCMTHTtiYoRhiCudjmfUxhsh6b8E3ggrXs9Ww39AP8dgZeFph1jc3kHZF5cHSY",
  "key26": "UVoDELfiaoePUAj9Ay35tzQgf7RsVPDNHA3hzX5qyPqToSjbmgFnh8vxSLQ2FscZ9D5dgGsTpMJyHuSmGfk9V59",
  "key27": "CoM2RqXBRdkmbaxNQLX47eBLFPyiGTjPcjgnAWPRRxDWQR9TogrEHySYV82iTRaL5JFu1NtzmLDC6FWr753DZJd"
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
