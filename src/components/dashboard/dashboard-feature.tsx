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
    "3w3rKBSef7tMnP9TRQmzNX7GaGLLh1R7XwBaCLw8eZ2C5PS8fuRJqx7d4mazzUir8PfGXgHe1FEKfdo3ByPtza1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43hvb56cChsSfgLo7hA4JkLh5ryEBEcMM5PgWH3QXDfSvCN6QksSau86DGrq7XitSxc6BBogkpcgYuMgGARWVWv1",
  "key1": "5EHobWZneGg1QVBP9vBF16sHJCd3UKdZtCFWZd1GaL9ynSug3ppMBD2JrrsQXeRJ4Ehr6sSR3bgd3pNMjtZTDdH",
  "key2": "5PoygPUizTUWKoAJnKRhNgwd7bDUawsqYt8PFLW6eDt8fjWMBxDW7978uB8FKG7KgjvLrjVwPX7hpHQxTQwrUyzS",
  "key3": "5FVKrkdvKfNfttbAcY2yBErvfdK9ym6k45EQBbwxJNCkrqwXChKAbxE14KcFdMweRSvKR9qk5PxuvjmWxUYcRiu5",
  "key4": "655Zs61CVr76fHK4GuQANFueoAiE5LaFwSmCatnnYFuAuagPGGPWGZfB1J94KZsz5yToWyxNn9mcs11zjg9yoH9z",
  "key5": "2idcYFdf52pq3k5JAtm1U3iQrbpc92ZjFRJk5aB48jauiDw59dJzK7Wf83nJcpa1xXeR1t1n5yA7w23HBJE5LkP2",
  "key6": "rwvpCWaHhs4Y9Lxpqz7xXqtXJDAPWMxpAhviRVe2cXf6WD6QkD7WHaUyKaUXbtqhB8x7aSqvgVy7tPFq5FfPBvU",
  "key7": "mmsVfNQh5wtWUUEtk83tQhismbb9k1ZZyhTFHX7v9jSwvCxiM65HJKhV1k6eTNGEhHiTv8KAh3xcuy7tNV8QDnx",
  "key8": "nroChnURJV6CCWrXiDD1buDt33KjryyfvEwK49DgmbCAFzSDBedD1kC3A4QCF5mNrgtPksLD6Fh3mJNop8B4hCm",
  "key9": "SYh9zLUx3QXLLvhWfe8sSgW3h4aT1iAT2garWXBA6LcczB83i2C2TdET1QayZfpmkFqNxv4sjWEGX5VdzyN4JHT",
  "key10": "21WVEtZN6ctwpgTyewn2EKqyJYaaD7BgAcEURGooPi5Uw849Pdsr7HkoAn94NFZKGjenSdQwFKRXAwbsfubz6KVs",
  "key11": "4SLWhiePkbagpYvphLCAS9cEtgGRL5mVtUCf7iuoxNn1QJifanUnLNiWrPkZ2VMgfX1Z3RrgUr3DknNsuA5q8GJ1",
  "key12": "3eKgJefZyTcC6WWommM35RKQHKLB65vawCjxysmHstDw4V1d318dfPmunQXv1ysMnDv6ieZhcN5MKvXFLM4XFcEH",
  "key13": "2pXecuUDN9ih9hruB1s5mhh8VrYWLn3ZVmCRaQGHjWoRKBX3UrTuVEHwCdGF5WP447gK4LFvDYP74duhKEXXGh35",
  "key14": "2LQRyBzXDwK29QbnaFrwHX93JiftvRbWQ47RH5P9JT8RzDBJiq2qNRN3qB8MEvY8DoG7SSG4tNd4KApDAe1KApUM",
  "key15": "3LubHUJF8inoRr8MC8QZ7Tmujpaudr4t1UNQMZ3qzDc2N8FGWEssX2Jxfpmd3rD4bdVFcb2Zr5A3HKFa3anvQ1Km",
  "key16": "4UVYVkwL6ANnV95VwnHR6jqqWpKwRKxbcnfyFyLWDi7xzMN5hCTC2VSBu3ys5JoxhUgD81xKiNBanAZyMTSffcSq",
  "key17": "4s16TUGM8PJQr5tEpV3pbb2uPH4w2tiSp1knJ2TdJa32KyajYwJ22gRiy17MYTi2VbVTDVRLMsjnBo9eDa2TjzuD",
  "key18": "3f3iugx9Ez9nm8pSYLCDA7yXFo1szBjopiRtRjkWkaWZg2veQwRhzRAxQdHqupx2QnY3esfbva7rDaqvpsPFMAof",
  "key19": "3kyiUAzWTAwjkEBRtYLHz8qs3iXZCCuEo57jF9zfqcw2vkzTuRjWW6Lk4YQ2MAytfqgoujsJogNxwpyVg95PPoyz",
  "key20": "48fPWznmJR8S32HjaBgeZBFUHLX2UzXJkkA5BMXjCduKDjo5Eyo2QcDBMcAEZkVRsAXLSiTU55HKNipvcH4BMQzP",
  "key21": "3XMBHdFfSAHJ1GXkLZs4T7TS2mpzYG9CYrHHzj4dKuiBYeSike9nmE81venAYJxUzVB5NtQ8Dx827W7Z7rtX281i",
  "key22": "U1hprTHyNUncp6xCuVxLUYnzMLeq2NcrmSkkvMhwUbENPMnWiJiyaf2JRAKiVAB5CsuCZPLJ3tK2yKGqRmLgV4t",
  "key23": "ZyPMo2ZefxHU78nZokbDtzYc3SpGmeKZLkgsVdyQYofdT7HNwm4J7qfRd4TP4F1mXxq265NFdRyQFgrpYiBWrLP",
  "key24": "2ps64kNecdg8WyDsRmYeGJ9oELLhEfqBvJLZtnZeu3oRqjGzM9uvTwcENRnYvwjJ2XTr5pH8eN3ByF8JdSQL8xzi",
  "key25": "7PW2LZ8jHV9bBHXUuTzvnCLSHhaykQ91gKbcqWyG4kxBdpX8H24rd5BNS6EHUQKG2j2icdWjnCGPdQtdRJcLhUX",
  "key26": "2uXVqH27Rt5KvhkF2KBdcQLTobJt3gwMkE1FE4WXEnpeiPbzUZcn14q7a9PMuAtKtfKvKjZmXjoimuGF4MWE1AV4",
  "key27": "4XHcodGzNZarkpgjeyXfj1x7P3Hn4esfqKPDVq9tn5mtaDgso3hMXdMXfEavRGjzYM7oR4A2kef2Gyp1usVxSdUo",
  "key28": "2kFCqiDDPqihYqyanmF2KKqzK8NHwTxk4PyZ64R1D3Ap6NXTfZyDFKPFcVvx7fLQeueKAktHt6A3W4dbAw2tX3E",
  "key29": "396gusbaHpXDygATRQKhxwMtsWuVq79ZocGcCuumWXnebKRxKs2WRpAQELDYmnrVSysdLTwGUXhxt7UjisiW6ZA"
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
