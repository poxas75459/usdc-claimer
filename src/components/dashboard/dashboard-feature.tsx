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
    "5Wq14Dc7bKp7R55Xxt48omirBUx1RWLeDzUAiRFRC2VdjMbWMXTFKUHHKqfqchiokLvzQQ8TjkWvfTLhUAZrgh2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qfBMpTwHfqCUBdGTuQm3Nk2kXEe1Lv9bRZyWWifBF21ELj4h4nv7Goth2JmBN2zcURWtnGWkeNSLt7xQrLeGJbV",
  "key1": "47nEVgD7NMYvtZuamRdFpghVmzhJ7wyFhFouWe8rm6fb24GvqVSmZeFVTBXeNDVKq2f2QgMUME31gZSr5hcCMaH7",
  "key2": "59rHfHJS2WTT3ia8ugCGzH44bKKgrLuWSwiFRY6Kfrid7ZRFg5aEAeJ7sits2JkhYmi6CgTSFdFntsNujzgAxTWe",
  "key3": "wcAEMa6E1C3RRDc4Gzc1tBMkvxwA9GP49986CXn3AQGhbS4TAEXs75PZcAnVvFBLB9Fvz4Db2Mk9jnkV4XqnfHX",
  "key4": "62YTjxtVUSiZst28wTySi6hX2Jjoz8LaS53Wg3yQDQi6civ7fTniQpMxaTU6pjC18sfndrbTuTB8hFJAfRAbpF2J",
  "key5": "33djdeWbyfaBquM2jBEMWXSH9rKH7xzwUSqvprM8gzCys2wfUcBEjNbTtj9woFyHYCSYzrSgL2ifNrviozjV8tcY",
  "key6": "281MG1V7KwseNa9ETDCrrXWN1qYGFvc7HHsWhx9PHLz2EXz7CFevYF3iYR2gd4Fc321SpjwLhbTKsdiDJVbDEs6Q",
  "key7": "vrX1M72tevKDP6snZ3pBghgYaMNfPNU7zh9XASxBXWDBySfc66WeuC5tZ2rfLFFatDLhsabvfyMsM2DgtasCgPP",
  "key8": "faRi8Xxfq7GVVtpSp5gre5KATbcVu3hgbKdvhVooC2d2kH5Ma8XwW4Zy1EnPzBy6CACUgFcRbtvZuwKFZhFULqx",
  "key9": "KEkn9Axhw4BMPaonAEbC7eyL5ode6yXjSRuGGbWZSZgy4BEQNkTQMKFnjDnzj42yYMC8LykMszxzV4SxizsX3s3",
  "key10": "48BQJHYiUgsDFrjGn9MjQVrT2eMHLN3HDE4n5G1cFHNM9QTLp2vcZP6BUy4tqGX9tkWwaUyfPBbcySHE9meGDVsg",
  "key11": "4K8YyLfBY3JEoviv3tLfd7d13rTvraoP7qgApwa941vcMVr2zvHP7h1UazAQKxUqeoqmafsD4QJonXS1Zpwo2rPJ",
  "key12": "5n4SPHDFquSggS4rXRyAjfcQTgWLDpFmstu1huVU7xfD5oagpoERjZcyMPyxJHPuL852TVVewSWq1zsVTGiAeXrW",
  "key13": "DDkii433WdXUVCEgiqLkqwS28bdhnJMsQpVvQbFHN1VuaQSMv1VhKZ4ZpFb3nRTCGNREZ8F8KzQbnvVngv865zb",
  "key14": "3uAk5aKACQyxi1FVMHK3cSbofKpFTZhEMxgeDY6qTMFsiAHPmSnfA5M8j3dm1QC4F4BhkS6X9cLBEUZhtjoxNf6S",
  "key15": "63qtEgLkZxh3Nuh7GpcGdtEd5KeNV2wA4hPXq8arNgtZ13aajXDwC2ZYmSv1XtVMDcrbgR24eSvtxhdDbuqKJD9y",
  "key16": "9GeW4pQFZucSktpV9xXJs7jVapJwBGLYA4qmFzYFS9sfaDtihkDwbTzZsq4PVhQE7bMwk39dWmPiNoaxtf778V5",
  "key17": "3CT2Uw8qKvUn3HDZ89Rpd5ohRdcyijoPq8paCH7j6fb1Uzs9mo9rLeUoUsUqZGAGpXPuwDoMZCAU3eA8KvSqabzp",
  "key18": "pJwcz3JckXkMdgL6AaJeHiUXo8LGMpr2CZvaWHT3cqYMjveyBJjHQaDiVdwsg939GzBLAoyW2Y6PtevPgRz8U4h",
  "key19": "4z18MvAHohHZ4PTQgRCKGQxYm4a2SGBapKBQKDoqQGF6c93Qdy34UWqHVjks5rGfErNCwYSHZ4PmstxPKUTwYgk1",
  "key20": "5wRnG3TNdRPjaAPrGhDtAzgwEXwQo48efdMquqA2obBfk1PyiW8gbtQjMPHeWTJv9uACsBtUZoUc7qMBuY68YUWP",
  "key21": "2asb4mMrTLAXNR27JHZbRtRC2ERwt1sh22VFM3XWTAfBCRZWriV5imVAzG5NMbZv4YZua7wzYdST127LeQUp8rGF",
  "key22": "x7e7BiCatLrKUyD2LxFGAqSL3SJReTtnRpG9u9bKLPASLuYeN3Kcd7XYfcK4jQ13ABPcgRLPVoec4qqjNQTgi3b",
  "key23": "4uK5aSoTd6GEGUetnJDt4aZbeevYVhm33ij9XeUs6U4L6KftJrBJspCLQ7kAdeHkGxxKa9FM7HWocGDJYdXAA6D7",
  "key24": "3sP7AZXFgZs2LBYcggNNoMZUVEJGwXYTQajfGsvimwrMxjpe67gqpV5LvEPdrNemNS8pEowrBkMX8spSijFzuXqA",
  "key25": "5v9DMLChDgw6VYHxFufVsG9qeeCh4BJ3HadTq8h4BUwSJa5Bp2jL5XpLTQ9wzYHVB6BLA3cgHwVSebPZbTj3v6aD",
  "key26": "54qmHrcs4a7LXampKi3EKEqVp19SzgmnM2geLaR3qtFLYtBZCiYMJxYt3VJNZ7DM2dys4RyVEbW8gncibWeVVLCk",
  "key27": "mZvLmRDtiJxK2UegRfN88pXS1gyehr6RCFVmYCbpvyVaSHJ3WG8rzyF79URCwfM1UMXM3QYfT1wk7T7CiqxtLKh",
  "key28": "5ompnccHwB8wcAFSDQapPrYKp9qzTYc93SjaHCAC3xLnwzEExh1XJUJeA31nKVC45qipBLmAGS2cAdeUG6pkRUsx",
  "key29": "cxikgttxFNLj2ZaWoL27zz7Sx5iAv8GkDV39kDrSX6sjvkUcb9aN6NguJahm6yztXteYQ5oEHMYByPJjGAAHkPm",
  "key30": "2j9oLVB6HvGAZeW4HrvQYBNodJseg9eeKvTdGEBJYidQwQJ4hNk9hGfcQx6Cwbv16vQJacRWbKxbEVGUNKrx6gMY",
  "key31": "4K99K9vjN5KknDeR736tkDESkP2T6VtYD7avEHyRNoq8DGP1GmCQ5TquZakyqXGKapU86XcW6J4go4joxRqsgDX5",
  "key32": "21myjGk7Ydk8zVYdDd6c64fSdpCyHU3rMKimAP8BpxKVBninjTUtM6vApWcfcMvcvbd5yuDKPP1srXRDGtt1BSSi",
  "key33": "2yghubTcfL5phhyrxFueZKRNPdmWEuENXaGbBk4WP8WL2Z6CZesPupvJxBAgS8R5nngxfXVviHCbb9g4s2DepAEP",
  "key34": "2ggzWYvVuDkHUpgLoFfzocxRrC4KfgRr2xLgPF6PFpGWnHdiKDzXTt4n1rPrEtHiBBNtu9UedszUVfaV1VzEcXtS",
  "key35": "2wkfgmj75kud1F2tpWkaZj6qQBMJy5GHs2V5rzMRLf7ZDi5HCctdvXuFrMy4Ab2XoT97WdVzuu19ENQbz5eqPFtC",
  "key36": "4opaMk2gnqHfUpVSK7kdsugjP7APuEnAW1F9hicrdSR2txxjTEs7MxucRnWrWatqmQ2ozMT47TPgRoNRprn6BdYc"
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
