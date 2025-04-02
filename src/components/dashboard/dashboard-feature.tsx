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
    "54nHUTUFCaYjhoc64reJBvM5XDFUxyQ3Pc4e8GCpBcLvr91Sqysy1ynrsrvRW9B77KNGhSodGrmJfAp7omekm2hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26jcq96QZZ5QueF43VkQVkhXkEt1UtXLrpG6zzQxZ5gRmdnwct5PzVj5GGaDpNfuLLrxBeqUuAU3iBdpB1NSufR2",
  "key1": "5KuJh8B7hLkM6JnZghT4TJxHWJN51eEn65TpQmSfMpjofcJ3WsZMt4kj3DC6DkY99wDuQJZvvUPH7uqHSNqoGUKs",
  "key2": "65ZbZkvJXZPPoqDCFoAZysFhaR2K27YNz1bvCxe7EkhUy7gTXfZP9PFnVtVi5dQNjm4aK7D6aFpHL2XdhyzfBHyy",
  "key3": "kvstsqbRN2TxdzXYCKSPH9kFK5k61k3oeLVJAqxfrzvy9j9P1t2B2Y2kMoGAhnr4etJCXcGAAop9TYwEAquGPrt",
  "key4": "2rfc8CTwediGfyQyY44X2Em64MgDrvvqBcsknaMUf5WbVkkUSsqrpojmmf8oooWUhZXhPHg1oThMpMaJBW7cTZyR",
  "key5": "5mXqxgq9qNVtm1SD1Kupo8Jhpny7Ncpkip8rQxWjPJVP4LvXJP7AGc7xFe9vLU8nDbtKzmvhQQ964XiKcjkoPtH8",
  "key6": "5Xrak3vboVAr6fbK3mVwKNgTcdFSoxhweYzzPjMRzW5aSztxUvten5U7HKWgMQQ7PG3PmJZWXhRTBaDM7kTyvtD7",
  "key7": "9BX1QBjas3ySHGQ7vj5RhoP3sFkViNSRfGGdtfgMQbeym4x68U8UBu4noasn3G3s8wT3joB1pfWXMxjTB2MnaJr",
  "key8": "28TefXGFk3UzFhQXZ61T3mPr2drewCVYD16sAbrrWn8B4MDh6brpUx6VSUMY7N6g1n6bstm7fFG83cE2jFgvyQQS",
  "key9": "58G8u317Wun9cdt54nXcT87V4XKYDuC5qdBk1uKph3bXGuPGBKSJqRDv9gcAdno7RbHnjFfxJpfgvALNc91T6buM",
  "key10": "4EAhr9k1FSsYexoDVNFymQZ28SgogRDJRnrJ4n9NZtpXcauDmLzAd1XdE6ixEYPB58L3c6qQPs6GczA2BaXeo96a",
  "key11": "5p8VcU15ewzuFKtqUgx5AEP4gnn1rfkNeB4tatQ83YtyU22EJY5T5rShRGaL9B8NsALqNUp8JbF81uzhqJeH3nbm",
  "key12": "wA1PrTGz5THeyZGkrn4RhH6zFaRs1PQdsNXVCyx88Z79YvNQdBf8U1zCUBzWMj5ZpKYdbB6U26YAsBfzFvh1GeX",
  "key13": "33K4buhBsz8YY7tVpjes2ciRu7oL63DSzvkto81HEJ5Hdnie9NMx2wwGrxdYuxqKTQbbeWWPwJ4mkdegxduNVf6p",
  "key14": "5gwbtz9QEVtP4y5KgGzTV7DuXKwCF4rUEbn8BBhxvHVAHSr3WNp5DHBJ48Zraz4z1pwwBRuK2pD5ifs5hkLH3Xrm",
  "key15": "2WezqzBRRYJhf5YJMKX6Pn5GghJzt8yormJnEnkCsW6kDdBRrH9j3sxKM1M8PypND2uW73XMqshD64kDZRofYfQY",
  "key16": "YWae6hM1p3FoogXkSLtbrsZX9JosyrCQSuH2Qp2GVEGF64HhpvWECZ8TPnznY8QPmMqSSBiVv1XLaQ2L6SBjDis",
  "key17": "4W1q4pUo5Kf1T2KudrKBY8WYumbGPMWmtvrL2yBAScxCTuLp6ZJ28tzTbUSGVSLi7zZi4ouSqGXroNt5HnMVkT5Q",
  "key18": "5hxzLSDz77dJdNGGmv3FGXBtU2iQAGaMypQnyqWsYKoSkemeysUh2KFTKoEE83ouuF7ao2AcSPh8Q9A78EBY1j3f",
  "key19": "4wwgnRghs8GNy9BgLYfWEA3EpjnhcT5cCLxZMfAiyeb77S3cMM3i5uKGN3HPTDjHTdKQq8J3nR7JKwiDPkykKQjG",
  "key20": "2wC5LxEqrQ6zsMk96cD7QGpw4jzyJrVWG19xGaCvtJzxHxrqEbQod6dwEmwkoBZQEQG9mw1q6veH37JNXP7ZcSUW",
  "key21": "4z7hCiGmHHhQ1c3AE8cPWHAvUS893q6MPer6SAoVQhtd9FVVC76z3NffUSPn7J4gDUJhBokwtEHDZvpokyKvCNaZ",
  "key22": "3j4mWnrngwRa1TMHCDWswUxdG5M9mAfH93Yh7eRMQgfn3NC6LwjQvA5SAMdNJpx4tTHoPgDFrgJDbaRu4e43KF4p",
  "key23": "6heBCSBmYi3hC18cJDpiXgw9nHUurpdghfDHbDMj2WvC3Wf9GMY3Pu6JTuZkyp7tMKV8nRJxtUsxEDUB3iE2UAR",
  "key24": "LeaRc4KEA7snpoeEnATguWsdRMG9M6MG6RyrBxL1YiQN68vozr6LD1QRimHp7nLJYRKZRmozkw4hjVsnbiGwynk"
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
