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
    "5JA1eyKa1iAsr8yvhWH2Put7ThVqc7NYbLm9S9WepfVZ6Vc9fsRaq8jhSVGSvdnbng9rvnKxcD1w8fSxDPDoQk6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WnLJdWfJkDRJhdMuJRAxNYACiN8tnFmky2jgbUZ9QZLKmqh5dgsYmLqqJ7KHvk1o1vzjoxZht273MpkZBNSHFvZ",
  "key1": "42V6z8zngcvXxrjUGzBb2tjk9ARbx46XcqtqzSzHyonTGLxQqxADbBWtbhDXde5FHkbrbkNM7zQamrAuYXV9YEr4",
  "key2": "NjgKi8CyWh3HCS9h2qRZrpg8uGeisjwkpbs9EU3CqARaek7fkC59MwZXh4eZy7rBMECanxxbcRHwTjtofLnJ9jp",
  "key3": "4YR23PcFTbiFuDeG64QhCUyBHU3rxjrDEQqXkQf83aE9CU4V5PQy6jNscJFMmm2sZXjFvUi1ag6MVjjfbhRporT1",
  "key4": "VXBe56HrV4JsnLfPWYQrHoJmzVcjwQrRNPnxjyYd7hZsZwSHkLKUDzQ6FpmQzvhTWG1uaQNpH9ngQFAZm6f5num",
  "key5": "2PC55VMoWFsMjPoJA7Yb7dXsZ9uynjz5zaqfVQoEGU2K1CtZiA1REx1SZRJ7emGUUnXpPHev3wX5B6D8vr9BTmGU",
  "key6": "YsxZ6RfnsVBsDMxMb6KkmoA7J4A4wVuJmvT62D9y2f6Zn6bTHTRT7YUojtW1hcQMAy94eEj4vSm72zTu8DLsuMu",
  "key7": "YhzMRoTYNsn8vYCRSRsjQ7exq6JXu3G6QPqFRB284pxmb9bNb42AJu9TNmmTqDY2JouXx83ni7GFMY39uoUKzZH",
  "key8": "3MTbk635RcDD5qKZyBhPJ3ePkVj4ZspgnwM4EFd9x7Qqhp4qjNV1khks49gNh5bSXUW9JK9sfkaLPgWYvEvMTm2T",
  "key9": "5iFTBeVcAdcKFg9a3xvjaj92pqqoLna2RTXnhSu7SpNrqa4cNU3psNqbKuoUUjkBALXMes3dRc1VHtUxoXa8NQbP",
  "key10": "3kCe9MRxmDfwhuoq4euJ8zWGF1g3m4NgjfwxBRBUwUFK3f4RPwuwAZNNLXrbPzYUJibEMyZLRT4B8bqiR3ANVU1v",
  "key11": "4Zkt4t6BrLw5EXwZpcqLFC1BZcTV5AgaBHW49sMCSEcEjRJE3TAYe2vTSGFcwUwLRiY6Sd6HyPvefZR8rZH34KHT",
  "key12": "4tJvDrGN3aTiHPbdB2pLHhkMnH2WitVUFS2NAFNo6KiBNXm3pdANaztV9zQHAR3S4wLnW5zuHmPErBBEgpnEVyet",
  "key13": "2hhqoPYTcnxPHeE8Esj8RqKemNo6UPSDu6TRtDJK1zNLWrYsZRaVh8w8vYsj56w1hnW1DAxRd2rwJ2cqUZsv82YM",
  "key14": "2Dbcn3RM1Pwn6c4pEAzawUBS93Vikc3cf5k7ehY6S9B5SZu7xbzQomF9ZD9mdEhDY5D7n65skFJ1WPArDypbTiEN",
  "key15": "4PnGq1SvkuGCChC6hdUTCdhVmaU8Zay2M7gAzFfpa54HZrZAZ1fix9hxF9iiX159XVvdjBLQQwHfzUGYPorbfPjn",
  "key16": "4oorRYatLSsgY8iDAQT6wpqJQvyhpnrmnUoY6vK9WiCTsEWsteVM8yKxjAvoy5uRCaoJcQiz5CeCEh8cEmJ4RczD",
  "key17": "uSghejtasEgK7mGGGxDQmjpP5dxMdAvCd36yopezsM1NxKjnadMuCySvfKFnfpLCVt5z8Z9qBfHUivZ5hS81jqt",
  "key18": "2uAFicdKwtqRNFKsLXsyFcLZnatfknqygL4ex5si7aTsKsSDTeva34ZhdjU6EyuAPivHgoEweBSVNkKMjqkoKURq",
  "key19": "5W2yPGpeWpCyGQ2CwXrkaYzU7h8pFcVuQcpiRfBahYo9aN4jo91xzCRnzD6uaAaYRPqi2USJinjLLMGd1QEvAgML",
  "key20": "bnUUSs7heF8jXcRQ64tSwJAoJvgDM8kE5VvyLQ4GXhAGuKDcReKd9qv5DT4p9UVj8BG7gxpy5uecWDhuqeoPUHJ",
  "key21": "42SEFZBQs88zxT7xbjXy1n39VSQYU5stJZaAHXhMboZ2TVDGgf5iRZoyDZEZn2otX2pn6yj4NFkCFovZb4HDTJxa",
  "key22": "3PhnLrWbLmDxnpn8sHQyamosJJ3WkbhVNCxXTQYcBp91pdaYR9hrtwCr8wexoMQr5R1JuwjFAPBbxNaUM1YpeMcK",
  "key23": "pFhV75xkDRrR7kBkMiXmZ87oPADnzUqAKv6b3XrKxS4n5tTpaKvjYDJ4cuy4r9XxxHVNbhJKmCinaWJhiDTF9uB",
  "key24": "k9AB2AUv71EUMvv66AfxZbn259vtpop4GScNxLKbMvbLa8U92f3mpLYtr8gikLUTAV77WKAZyp6VHQS3SXfEJF2",
  "key25": "4G2f3N6AZ2M3ATDP9TH1cVmf8ffMjtMF2pobDM3LbYvkm4iJtjUdADqrQrexCLDzMMicPqoQJ327Mk64rJfoyWJU",
  "key26": "gkDzo69URHxXtUCGj7VYCFZEXnDp9mZE5GJiKkZEtRyMNS2ZM1TExMWkDe9XJWKX9Geu4XjXPwH1V7EkJcPqtmT",
  "key27": "4saUa6NRjALsqPrJyHoecFwSiEt6dyFwJ5TmzbBhpESi7bUtfGATBCriQFazgc74StXoYNeHgVFTafcvuXLrGHww",
  "key28": "21gL2azceM8NKac8SPB4EQk2dQRW9koKADnB2qNuevzMjakgaFniCCAXwFwr4aMyKFi5DrzB23JzzuEdtKfqWD3a",
  "key29": "VdAb56oT4XxziduSmmpASrhe63X9EG4ta2zJYbdethHQvy5LuznzeABPbghjytM2EShFvqR7weGhVWizqNUSfWz",
  "key30": "RjXJrLvmifYWKFJbA7R4d9a3B9WTbbsTgimCaycqdhgMWwKuHP8K62d8WCdWJQmTbjs38CUWntCegPhU9ZNMYQH",
  "key31": "5ath4KW81CXfNLhVrGeH8CZKTRQyvFzcn3uyv67qTYwdTzNM2rdLAZCFxxMQREumgUxSxMSdwSgTKb989XKXZ8fj",
  "key32": "5rurnwA1i8YpKmmUMsh4aRpKonLyChJ3qZcWPknyGsUZ7aYNKJrb1SrHZ4azxMM6S1JrGGEs95nchiQXi6KdfgpY",
  "key33": "2LRDTdYXDs7jhHz5AvxvFVdECFZdSBNKHqKLUWmGcL4L7YutATBk4rKzaBb1tPxVCbU5Lr1ECDSjg3WnZVFzvfCL",
  "key34": "58Pz1NhWPeozsPjNHm4HGGuAe6JBDZoYamk5RJPsTamT2xS2cKwHzj4s6W5HgREFZGUnWgYCvtj9Gtc9cUXVs4ce",
  "key35": "5mUTSD2AySJWruib3XukHk2zHfzkVR1rhqKiJ4pJ7XtEpxnQnrZTs9BjaZZxt9MQwctTc5sqHt8W78A86aBegC2m"
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
