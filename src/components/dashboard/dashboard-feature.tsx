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
    "4nvTFVrVCe1JGRZrtRWiV6NvyxN95L2tBtoDPk5TB6Awe1r3JNTsSvVvsF8gj9doMF7oQvA69mWsEDuaM5r6eNgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QbigUnTHZsKRQjLEJWhguvd1973sCEtTFvUfoYT9rk89dBWFZ3HzmEYXBHU6GViaMcPFDNmRFkKGcRLiDUDENkz",
  "key1": "nsnaXtnfKPKHwAApwGF1fUfJ5exqZr41mWmdNLzX5uYvbbeNMePySmDPZZ2GMyKzTSq6jdVqYbfc5u7Nna5RhA8",
  "key2": "4SDPfzRBjG6bWofjYv9v1yPSHLnkG1L3iarivVBJBa4hQJKWiQyS5taTj7h2xtR1xEa4rvLFumkQqKX36WMHnBd1",
  "key3": "3cBhE6p2Vxq6gki7LDgxsLm1py75GMraz481vQs4QF94KaUaWKuhb4HNoX5sUnPZDUAqTKgPE3ohi3cZgJr7jDNN",
  "key4": "2TPpV9rTXgJMqijrEnuYxc7GUfrSsDhHSpt3BsMwg2TD2XqPBZbuYkpPmXCpAx3ev8pLUx6aUVjtaVLA5577kof",
  "key5": "2eL3Nmo5YbuxCEwCTKgfHAwgPWZnJZtFSYFt7ibNxRrsQYpp4HjMfs6ABt74Wxdkf7SZR1Mpur68AAxpieVGYgSh",
  "key6": "4npa3bgwfuGY9bPH1Dh3z6AkxdBsKAxsw2DhiTy5F9qjFfqSzx8oocQ7MGbLMvfAsEDGs7ZfaesCgDbNy3AsW3jC",
  "key7": "5Qdyw3XHb3CNTZrA7Q4eJMbs5isoSXocNfyVC5Trc9fDxkhgWPa5V8Yd55eATz1F5eT2kJPWZ8A38Msf3ZpGxNiV",
  "key8": "3hhG7JrUxRhzkUdzG4CGKwaZu8cvtaenFYFjtysgkBz1cqs9c8n2sYrCv6Hhb2k9NFXiRAWvvmSpuYKanycuSAq",
  "key9": "63VjmoV7mVkdDCcMmKo5d2B8zQoN4Zc9N5oPg4i7NmqUSseuqMf8zyy2SsUXgdqVPUXm2U5k95SkT7cuEoAKZ1iZ",
  "key10": "4MQur2dCyaqxMgXisxSkDcbATVyi8yWnzRVmxsSJNYhZ2Tn1yZpwgbvr8Urk9VnXA2UXW9YZq1fWFHvjM9xt4ofw",
  "key11": "2Ykjx2Jkzvyh9Mfx8CSAFt1isMeVYJyxAfYivz1jbT1fFjaruhuZN52afZqTHefQukpicE3NWZEDbFNfqR5D29Ff",
  "key12": "3HTGd5CcxF8STooZeMvUSoGWWKhin914B4xPTtUbvPbZ925Tdet1287phTgCs85vN3KU6VuAyBzXe5BU1Cw8tx18",
  "key13": "PgPfvecwJT7jHqS8Ht33mpepcuk44YLgHZ2a3f4J175k8qth3nQ3UR35DDRKi44vSrRLEa4Lcg5rGuiGNfcJPEU",
  "key14": "vfHWiMWDAFX6ZzguFJADwHnYam8Wev2ZGH7LVTj6bTdjkfWJEhzgdsvZjzHzHcxBJzJ9oMJc6Mk6BQZBDATp6h2",
  "key15": "3n68Go7jwhna8fCQtFgyqEETTcYoePWRBQe23nWP2ShR3QHSJcBoCRENG1fTbHc3t99WsvuMkAMTYL1dwjUmrvHq",
  "key16": "5HWk1BBehoEPcnmnrXYE5GrXhQcJRMpBdaE7eJz5tYXFsuJNxVeCtNpu353U2KHqiDYyuHW1KV9jYvE6FpY8toME",
  "key17": "5rRjBh3JbAao3JhcDq7RixijzPsBkvaEDpzTb7WhT2dMxTuSdUeH9cBA7w6RtLreNnHQAXJg6svQM9G1WmLdd4Zq",
  "key18": "X31bxJEyfzYegMNf3eJ8es5oYbqRvgFSqi3mCQjSTajkVGeujbaK6uhwQzHeRp4sChaTgux7o5KkG7M5F9wZCfq",
  "key19": "4yXeeBecHF5ia2g3egTF6Ta7rbbr9d1ksUCQsiDHFNfktHq3JK6ftURcxHDZJ1LubDP4aM2r2rW7YwqtGBV1dxfA",
  "key20": "3bGERHdLkQMv8HPEGjqVHkNQYMfs1AweQrNPFRMPijmvkqEBnXMLLe6NDctNxD3RyHqWvu1AzwTa3qtWwGmTijMd",
  "key21": "3gECVnT6vvKXnLWtDBHdzzgSaKsxnW1eoBvJkLJE9BfBWXnjeUsA8cdSo61F7Swa6MSAC1JAmo2uCtdDxmoTDBMh",
  "key22": "Bp7UR2sQykDq6D8DwsBBBtihCBdR5kdbHifmqX1gX6Mk1S5sg7nWiBhghUW28uZDDAwcuB2Jw5bnyaShj6qeHQg",
  "key23": "2ixJfZ8xrH4bqiwFPwJZnEqgn79vYx2b5DTMBpJBDdPpgGtDbTdM6pX99vdajbarn3WdQBuPd7L2N55eqimiptJ5",
  "key24": "3ij32SHVBwGgZhWhGhrtHP3LJgXef49ZqJwpo8zGCNWPxZALCP9a852QLcxZuMTgGinE53zRxZkWUgk4iGiK7Uwq",
  "key25": "4soCJgxisaC5kFDBJgHiATwJHkuXc2qAsSN2kTza87THieBb9dCwf9c1Uz6QVUskkcuPjRPFwpzntokgzki12AW3",
  "key26": "2cVu7WMdGSb4ZWxHUmVKTnVjMYXsbBoXpKWQjD2jWSiX52cmFdGY2f2FUcyPjYHNPnQXysueykM17zzeU9DErddW",
  "key27": "66VuycXN7DNk7Bn8Lri2wFL4jatifqxiQPGgXp744pRoB44tWAA13tj8PeWqM2mkuCaXVBXFByi2JA9e9AFrHsG1",
  "key28": "2R9PLm9bF2n1jsikMqmPYon2LaX4V5QyzHsqxjUicDww8Y2NzPAJNTrFHVBjpEettfqyUHX5R1AzsBfzv5gd83wt",
  "key29": "2HicTCkqusponS8Si7SmsBZYw2TEmcW218fDnyTi1vMktSbUTeQ6Re8kBnMfsmZ5PTVz5nqaAyUcKQNf9jjooQFc",
  "key30": "4XCGafAMvpT7jPRTig26SvFsNuXeVSTFkP42wrKTKJk3MS3HFBGBNfHGut17EbfFuEM4nMCgUwQimuBr4899nTro"
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
