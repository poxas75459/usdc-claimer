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
    "2YtVt6npMz6t1qHNMwd1o7xq4sbT8QqFcDPRfjyYsDAXBrjFBu8RFZV46JdLBrQnnRb7A1EDBPqwthsxiGv1dHuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c538orfjixSYt7zuNKrEdHCeUzGQJFDS7hBPUFBAzixN3T72H6PgD3YQCoPT8yWf8xU14mzswCqmoq3KgUssPRW",
  "key1": "hffVFpudmLoWZdudbVkd1rMHVa6gjLBEvfcqE6y8sUrZC5B9zmKQ13EZrvDG2E7cSXhbZLKHfPAQgoTcj5bYwT1",
  "key2": "3mWaesoWvgt5xcJeXWeStnPehxxDWCpZJF7gdaHsAXUAesJuDJgfKhV1wuEpdvkYVWMPmsD1Rxs1BkRhUPWtbCfU",
  "key3": "3KzYVo98dcWrmoChuP1hJLW5oXnos5uA4bPfpNB2W3GNZeDcKo6eDs7RqpCYWQcsA33E6Zu6B4KnRiXjAgpXCH59",
  "key4": "4iCLDYdCmmiSP3dXgspX8D5PgEybGvFqN3rEXRJeJzYJfJ1knStYZnjg5FHBiMT9moHsTQZUtTPUbtrApJ94ehVb",
  "key5": "3B1d82hXXm6ca81aUy8SiEowruW6q7pvSujzmgKRWooygBXruzBcsqA19iGE7GwsM7qzzgUqE83EKHVVrEGmavLx",
  "key6": "3HWyNVZ2XeCg49ijAUqBgXBRxAifwqTpgJpXtMRo4t4RGGfK4g822rNZPVKXvrUD21xmXfCXwA5voA4Tcf79reiX",
  "key7": "4tyhtuv69fPuXE8w34MWyLc2z2BxSCzxcHPVspgJ9k5CyQd8AgnL7HoCgTdL8GpB8PZAUuYAbY46o4ABPiWJzVVJ",
  "key8": "3c9Cw1EoD9PaM3SxTUTbcMthgXhhztf2bzPm54mmdDcbCPyooGSxwyv1yiFW1ppeqBoQwqiATg3zYocyJUvhp7pw",
  "key9": "nswbgx9K5NYFQSEaSHRA6qQeK6VNz7FFFQEGiFet4pX1Yj7q3piUx4QEtxQoAHT4aaZ3gW6bAB9t2MVjk3v1oRL",
  "key10": "47fM18AC6kEyHds2RWri6VaiDZsLMy3LJKAso7gNiwuGFwswufswnZKkkR85cCFac6kayf3UXNgZAwUk2pFD6Hj7",
  "key11": "5PhJZ56rp7LckFwCysMAEoXjxgqVt5xEMnguwnwwMSAfVPPPr4FGZU8HLM4ubQUYQKE2XKDpzXdeemv4zDNkzbLC",
  "key12": "3YDAJ6AgbBbErbxKozxGne2SNHvyMGQ4KrmikvS9JPQK5oGHfo92VBFec8D3aKiRm6C7sibusc9mTz5qWTWszzU4",
  "key13": "Rh3UkCxv1v9eNehXZ2hP7GBXpLShXF9ftvKS96gF5cwWvjpAZhPw5uFwReBqfy5e32Prif7kVSw3QT3NJPmLqRP",
  "key14": "4XsgXC1hqU9GZTS3gM1byZfrt2kHouwAHb4GwgPTmaJDLkjgkZH7xqkCZ9RxHiEPjiwiLbwiXY8Mkh6JZMo1cv4H",
  "key15": "obXD5yKNw1Bur2NmBii7dQNjQpW1eEA4d2gCpJuzfWgbi2C3R6JQD5DV1gpKGdp4t1Za3kjMjPuwSYrNaT4hoPA",
  "key16": "3uW7k6NVFerxqgq7eeJuLDFvEEfh1ttaGDvJB5CNznP1Pd3B8sEYa5YhPabLaXyCUiM2PRR1Ac94Ci1Zba34rtoq",
  "key17": "T7Qs986pLb7umwCHjwUVQhgPcrA7qLdKi6jMm7o95wzAYWTbZEKTgFtQGr9z1U2gm7CRUuDPBeAadkHN6UXc3Wj",
  "key18": "34zSgD2y6tEJWiwU9RzPNn3MrC3U2VsPk6eun3hPSRExN57wMFoJ7qmPvCBN58besXdAJsB6ESBLBQgMEAK4LTWu",
  "key19": "24qT5g9BZkdRnE5eKAmNufeiYMdpQFd7fwKDSGCHRTUumtp8e4GTGYRZCFHwNuvGLrpMCzr37AB7mEMxMrXvwoU5",
  "key20": "gNkHHmT487MTwEPmPe2G9v9J24MqjZWL89ZrWqZEXXQeC6RhotiZkRofTe4ovh4AkKUgAR82oS9mrrqFBV7Rst2",
  "key21": "57GLnCGCP6qQPvdWZpAkVKmVBmZA8FENKPyKSmfeHExJNBckEpYpQ3GEiMXwagZsy6E3SNME8UR6MxqDXrmadwJ3",
  "key22": "2nkNtwAifT6gcNwQKpxgcvpSqZijBm99ZsLsGBawg4fzZb6ps9Bzzha7UbmpRumPR7dns7UFtAogc4d4q9zUcP3o",
  "key23": "4npdX9kVQP2tGXfccuZ8Np7PCys25xL35NkuVa9EUM4HLweWGcru8zAfnhq1u5raiWBfmqr1L1AEoGrH1MEQsv6n",
  "key24": "3odPhM6wC9eSuA9Bgi8ke4Db7y5gBJCaHiwt3ZLsemxq76SJ6dkEiiEs9TYuoTVBatqRVoeKkZky7hansJvGxz44"
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
