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
    "3hEddy6mY1GqFVR5yW7N8BW4psdMjJicsesrH7zknCuuSR7UdcAKn3YRfA7ff86bPjfCMwgsVUePXmKtr3q8QtSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYgureYLPeGtXkTis9eqrSJXw6MSJzkZBY899FJecGj4jdgvopsz6guFLyYbzAX7sr9YjC64c9sgptkkzxutsHK",
  "key1": "4pfh9eeUFRKSmwnAE67YzdTi5A5EnT82hNLyNEkYvVsPyq9E4BTs7o1JJo8HoNMUDPkbWRUwUBC6TSfYEdbres2M",
  "key2": "5pCAxxqoBHUxZnKrFsHmcb4ebtd2ZxZSB9CCo3guHNzzztmirdFwWWduTtEcP61oB55NwNrz7Q7k9eimdLGunoFK",
  "key3": "3qEJjqrJMu2SxKQKAEei2mEQJEt9x4hQJ8oVDcZJ7ay4bRHfV99N4sJ2JUmQ3GESW9XRJcYguQAesnXjjgkqrgtE",
  "key4": "4QDGU2Va5p8J1J6cnZzZLCudMz68KwRxCUr5iRRR1ZAW5DGDgcCrZRcYZPQDS5oqtgpRCo1BiXwJ4i5HZ1GG5V8V",
  "key5": "48cXATGLUHhVodPDXjaomrLjNxwxC8Shy1TnUebwGJFMPUeiGKRBNbX5iEpcXYp3x4M2ysiXCtMwBrWJz1ZfEgNX",
  "key6": "4tPCM26G8yrGmxTc3KXrqpqhUGZL9dt8TPZvK4DCpvZKLRNGZ9Fam8JBnD2mCCy92rfS63EwQ6JhPtYX4fHU35RV",
  "key7": "2WYdu4XH2iNfQMLdWoZ5HvLDWzuw1fmek4uEc1i5sSWj3GkawCLnTsBrddJXUjHvBg5XgX5HbTAYJXLy7iTKyKEi",
  "key8": "4zKqeWvTyhkJ5GFGEguU44YhiBjkrnwtsapHP2UeDJATwXcfQ9e8GBQnnUHNcz2KuEsnmcpxYLoK5qwD88uSTySs",
  "key9": "5MWyL77B5wxeZfy4gVsyxDcNeU8N6HKYAyYVv4qusSViLE2XHRHbErM4BfYidD1gz6E3C6xdUho3d8Xgu5tb7pUG",
  "key10": "3G56bLqdDnUr1mb5NhcTMh94jhqPidevDfbgLtk96JLUGAr5Wyb1W3r9Zr7hVG5QCpizHPZMLdzHDfux4PoohTiV",
  "key11": "3zCNk8yBYSxyYM8ZFvzKswdV2BDpg7PRzceZsWgSxZjBnKh8pzDy3B675DoriV99qVuTnH6LSJHHaKBDv1M66UAp",
  "key12": "3MnqUSwaM2P75PjPDskJ8WUHdpMVarRvc54ud6q5DCw5ht84j67fGiiN5QxmSED9AGcbeAemXvnLwjJ2t16MbKCG",
  "key13": "vjat2CvVdXQTsASJh5FhcznMivgJm8qjVTr24RhcQkU1Ueyj5JXGPwQvBasd5X81QvKqWJvk7pje67RqZDeovem",
  "key14": "3U6UET467cxvwJs7wksZHBDwVYQNS5J2fNSV5EEziVNTnHddjNEbQaYUaNDQo5tArC2wAf7RZWb59vuMKMgUJesh",
  "key15": "YhiqJUZCaNnz1FnJj2EYpHQBq3JUVBgCYiCx1FmuSKLE3DNPzoBNsdb1GpfpfioJ7QCp2ipHD39iQjXFkREHqEV",
  "key16": "5SfSiYCHyGYYNxUoi4H8VgUhTRGfwADjKqYu1qe1MrNidFePQuu5TuYchfbUJLMGVEhmooZ1V5NVRRrV7CD5Ms8K",
  "key17": "2pikxC7WuLWhEt9xp2A2C1wU1Eo5GGocmxcqhMoKBqmbRQZRShRpkq3piUBW2JbkJ67VErHevFsjguPj9Ej2aup9",
  "key18": "5rjsaNz4Q5VtBptWotsLYVWT2RCivre4GjpUngiDa4ujUBw2UmxCGWbwGi5BCFiZ2GnmfavcdZ7Z1mfbnS2tZBKi",
  "key19": "4hTuRuvYPQQj5bfTkuZZ1pPpViRXqF4HASUoiHhdtLeEy2pi9nb2qJ983jHsAxYhX5dXYYfJ1uW49dLjb1KqDEK7",
  "key20": "3Jfb1upcVn6ZHNzusHLx9wwYutq5GbL3ddbrFJx4Y4gBUjf95d3pfja3JWrYGpTqeEecQtFCX8r6sLGY4P9iun2e",
  "key21": "2nvBMXi34B8BzATjPA6UcoVU2Veck8SypNJaPKDHXQtnvKjs3gASAKTRnBJeaELPbdTZiadhm2CcY1w9A5NVQxbz",
  "key22": "3qVksHuqyyVRhtk88iFQ1iVN88NV4i54WL5xv7b6eKJzdar8UyK8M1AMyPz2dSqSKtejArZxRbBhscShJdYcrswa",
  "key23": "v93oPApPctL5pLvcEay56sj2AZioUg2Wujs74h1RZWZFgijhFZBv5W4tYPcgMTpYNcq5yeK9dEbT2MFeDFWwquK",
  "key24": "3BcREqpBW6nA4Bhx9j7PFzohj9e8tfmfv4rA7o1YzfvQT81bMrRL7u5XxkTxzrz8pcEAzg2VzbqF4xJ54iKPKY2M",
  "key25": "7cMuaJRCQKQ9vrkr4wYCsNUF5jYtxE8XcmV3ChuZxaSjt2TBrUK4CcmJymHuTgVYc2212CXVFezHajdGasNoUnr",
  "key26": "5JSLKJXFppKqkijedBi58yzegkpXMdBuy58F6YsKcTKsuGZCLCaMUepCg1DUoVKkR7LyKy9kJw94jrecjm29syoa",
  "key27": "3sFnEWqhsdq3jYTUM1yiRga3RrxQ1K6U78TB849AABD5UW5jWBbkxQSoMh9qivsCKRMYYF8oPqbHrQC7E3TZiEAj"
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
