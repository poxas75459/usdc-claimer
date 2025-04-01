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
    "5JUgZNhnjL6repspD9jqvovBYmEbiVYxHeXygLHX697Wj5xe8e4g4XebhH7oMSzBncKKNrN7boqCduaLsmNcwMgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nNLeAFc8wNgv6uMuUsjeu5cM2rrNoPGZA72HkXqBHV8iPhvqfcC8HXxdoUVz8RwGdsKzSMELYjJh1sw9enVnri",
  "key1": "hekYedtKi9id9TGz3qPTTiLSzDxUbeMrEHMfRj67qnhyCcyA7c6xPe7v63p6FNcTPqMUHxR4mhaCnvPwvgkTrmf",
  "key2": "52wxTYqmcgx3dG2K5VKMUGdFQZLxEQLpb1vJ6FU2ZDDAzvk8t5Dig6wZPSy4ykfN62j41LC9JpoLJBuyMxbUgxmG",
  "key3": "3YRVqyaVk7LpxZiey8bjCrn8Y1ggkNwxiJn9vowhX2wFVLUiF1Jpz3VZHaE5z2yXSVzAk7ox59XXb5F5dd8bNa1h",
  "key4": "51GxapQhuw9bCFWCbk6oQrW6ZCBpMRT3T6sgoAEAzuZV3zH2MWyr6w4SaMpqVdZrrzj2W5tDbtEeGMZLLBUQve5j",
  "key5": "42cKBkRMk1CzBx2V6TnD9EcpyCUas3RdnehN7FVPfSsw3DkvtmAP7WiRDA8HRbqGH821RiX6bjamChc5hHu6zzpE",
  "key6": "FxfCbF69i8Hnk7S2zPhifnEB9zF5idcTPfrgAcn5eCzHzLKuFG8b6bmwCphRYFCRZiFuN9iBdDmirxiwMmMEPkE",
  "key7": "3AGhRNx2HPadRKFYrDM76XsiveYFPvQNax33AuCPLbCVfsmefbEMtJymZ2vDP5SbJrd5ntZahs6bwpFkHn73vKgm",
  "key8": "ArUK7LE7fJKV2fx8Y9UcBLPbt8MNNqpMn1wUUcnxanJJ9pZLG82t2e2KyzoNhBx93SodJUrmzH3qKAssVBWLd1w",
  "key9": "37FYwvickEFTog9ktTtD6yNRefWcUipPwGUPFZJzFauZ8QPJKcfD1RFuMpzAoG9oUgvu6bEZJBmScpEW5P47Xwmj",
  "key10": "3SH8mGkm45oNYTF8zy5iqsT8LSdfkAzULj9ucMzsuWJnykAo2xFTwFYcGh5GGmXyr2sPzSyjx5fLPcDF3oS8QSAA",
  "key11": "5pnxj8kco83L8ThZNb27eLEWbb1XCenoNV6HKqbKn1jm73f4QZouvwjcBWGX58WQnmztNWb6cEcWfT4Se64QzZn",
  "key12": "4qSc9FE7HWcZWWq6KWvMxXmEt6UG8dp29bTe3GHJ1GkorheKy7LdAmQ1RiyVzCqQwoc7H9quBRGaaAMWiggFNjAy",
  "key13": "4S7pZkW3Yv3tA8vy9XMRZu3cGoddE2k6qKWNDfX7f3j4VbJ58NKqJEUpbnQy8y2rDKejVNpJuYUJrDQjba2Kfh26",
  "key14": "3nRTPbaj8avd4Y1P6vcH6C8D6vNip3wcpuyJ3BBMkFZHYRCjDoTrLSNBaetZu7VFwmewXGW4ED9vTUGNqeqtV5Yc",
  "key15": "bhFyspDTyU6UUDXUhLutMZPMDQfxz29cxUJyMVMsSgy739WALtSkAvJWc46GgTL7qH2F1ZgPoWGFs9UAgWBC9g5",
  "key16": "3TXMVEN58NEymdgNhWQqz5AG8vDbcKmnf5XctzkEkPY2xzkLHxwjzsu7kfErC1xmnkx1Yrd5Kwr9wmcRLG6f8yui",
  "key17": "3kAouxFt9EpfWhEZ3YBGaNNiTmdWgSNji2GVMejxnNDoberEznUAayM3WuvCTjhBu8BZK1kvEUbAhFe1vwSHzyZs",
  "key18": "4TKjokpSMdsUmxxHfTMXSFZ8h37VYooBjUsU9TULf5W6iRhS7AGfpeEquK6DavzynKFtZz6pDTnPM3tev56jserh",
  "key19": "4LAgPEMGwYKAZFTd8LHWezMngGUEsx8fTbrog95YKUw5rGthNa2c8wPAk9zMobXy1zGu8bquQ4QFpz1QaNjdqHfK",
  "key20": "37jPivZcouNSJJ8s3vC7tgFqNXcC8uAyJzN2HawSn2myYDPMDKjhR8Riuu58EsgPL976xDC3zsi78uhg5fffKLQn",
  "key21": "4LepaujeMc8puHhXB1t5rHRfBzinduVhhbhK2QYrZF53YoytXYGYiUubgeUPFKmPQaZbXWjcmgjsnMHDwEg16roB",
  "key22": "5N16dDfbs54uu4pxZWbxgmABdRK4iDB9jtnjUDZuCdS2osi3jn8owAeYqSmrGzm4TxdUwz7vZPqkQXorDQEn3HHx",
  "key23": "22exErzkiXsB6uFhPBGM4sSAkngA87TRqgnN9J98RgnEgkq66CxHDWd2Jb6n3nVNXasw4iwY5h7q1c7u3EBArVcL",
  "key24": "67HWcHrs1d49S27kaWoDt7kVctkbw3SXzsiFkmcWSc7njaLjRPZ59PVoKPGEJRqyopifF74GGNcjdu3CjgP79e66"
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
