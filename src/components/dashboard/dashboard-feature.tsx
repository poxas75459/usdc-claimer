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
    "21vqZ5JjP67XN6cj3LhsbmNdC8rD5TQhb1qWiCYk1zKZXtk5bXgEQiF5szQrWd99Gkrt7jtP5UcTYdxeSgMJ9xhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVidkNQ7g8UVj2kuBHx2TNtkJKaJtqVJ75dSXQmcPGduJpee3M8h5NX4LFAu9aMB4C8HseGQ8TxbAp9qYSnGDh6",
  "key1": "61iDCt3q9Ruaip1NWpX8xZ75t77eVhUw89Y8mWs1pjSJBfbAbE8bAiAZFaH1QQFnGoNr4MyDUfdHpuTGoZbp4gbA",
  "key2": "4do1L2ojKHK5h1NDJ8PPYcdP1EorbbQ5jENXkVxSrDQ3mUUfcn9LNyBwX1MsqcPR6fnkFjwHJ98SgKFgzp6Upo9N",
  "key3": "SL3QKkQQrsRThUyJaafZ6Jjjb7rnzb4yHBB8aeioYCvGd4rMtTXQmEPpq6vbVGVzBUkxAR43oWyEebcsTLw4bpz",
  "key4": "3MzFhNhWyEuHo6vwwZLAMzVWWGmeTRoZ6KGEozNRc6WUZwTP61uqcfi9zWi3n7Vpow1t5h4XN5HCaXFteCNQKtGh",
  "key5": "jxpuKzd18LDoLoHfFt53cdADCFifu4XYQbnkYFBcsL6sAuyWvaNPMB4zpj1stJvzLXeuuSCANHwgd6Nmu5hs4ae",
  "key6": "47aPV4obUoqEs7Y5VE2oXbEt1Wm4VTPkorkBjTADM4MLo53vsoSjqzER9mY1sm8vwGJMqcYLzLfPPt75e9GuAWmT",
  "key7": "384utMit4RVGhqtuGx14enCDB7WzdFMrRFsRAv5kVSgKRGvDsvXXN4i9dAwPdi5sph64T941DSLoZuKXo4oEHyGe",
  "key8": "q24u1AL1qMGFLwHHkq4Mwe2nQzDa32qSwizfajK8PeYjxTrsw5HKwNrtWTjXybtFB6Jg99PqVvLPQMqj11syTXp",
  "key9": "5tnQfvPjZZkcHePEabJDA2fU3iz2WrFn654XPHf54QqxXffEJtjGbus8iHDLYPVkN8zDTPSScLdPHbxYooAzAG68",
  "key10": "2iKbzJ5KDwGovxRatBmb5RMYBp1Pd1CE2URC67w3oZUd4z3j4aQtHRkCzzhnfBENx1gJtxpXYoxLNJZ3Dz1BMr61",
  "key11": "3YPKZu8BxLqk847a43yFjwftLtPpCKu1wuu2kYhLFFD4xnPUQuUqkz8zFZtepVy2nnpKzKEZGg3tcUG9BxxGBmL6",
  "key12": "HAqaDWzTENL7TPnafK39zcWbM573VY7PJmgWZjgfo7NEgSWMkymQU2PKUjnNGFXPeP5mvxLNWK5qU8jCDLrcHht",
  "key13": "4P6SXaKSievaFTXRwg6pJhWAV5wMPk9o33jLhKEzekCDCjdhwjTx2NMBPxFGJEYumWKCFjNUAXbLAW72tdxpU2Rm",
  "key14": "3SrzTNr8AsDjsnoLtVDi3LRR8oX6fJY9tNYpi7ymh62gbcs3oWFCi2sLFkMNWv85sVav9rEyExjCq72DU5u3BnSS",
  "key15": "ci7gsXUPAL4Q73Sse2fVq4Xth2gXcWYK3qH8ZREgERiiKntBiMQer6CqJmjGeii2oDq5Vmve9oTVMJpesefBfdj",
  "key16": "2EoYU9BmBbr93Kb4dATycCVuaP77oyCDAA8WjoWs1B1vvVopPic8dZCCk3MosPjV5DspugsXoZi65rwdTW1ZD5Uk",
  "key17": "4nCQVBWzZhBXmry97V7hdSh9C9mdKdCeT59kYfiSjmNTGy3oss7qFhbLvzx9xCdaddd9TcKtosHgqy2H2THtpt3e",
  "key18": "2BP9W9261d1YLQaxLXbc2YG2kpLgWWMDqfYCppTZFVMtWZMWFVTH9RMWXyWR5UipgV2M3RzmvqYrfXZmo7PFE4c9",
  "key19": "4AmD4mvVkkXHbvCExYxP3BRi8yZhtzqxpLjJoUfnk8D3b17DveRZfcUwymGAQjbunTVCch9eASbjVCFcp6LuRpYX",
  "key20": "4KvwHmHkhx8y9QD9pKNGspm8FoywmcLA4DbvEHjBEuVx9ckwchCsrWJwcxEZ7wRuZm71uXUaXFpxfJBb19JY8A6V",
  "key21": "5mTLBRyrQcfUVcsDJsTSqU7DgxPwCJvU1oAcja4L88btFK2ijLxGGLrt236fNq3kdbCcjx87kDCPNmRPuS1W18xm",
  "key22": "jK2Bwd1swxjXtFihdVCXpfGAbbTuYME5MCqiGUvQZ5Bc2EXgHZYnDrAPrTUkZpv6rxStrG7ymf3DNCpFUdLpKjv",
  "key23": "3N84kuggrx1zgoo778vcDVN7Wc184GkXLtvZcKdGFJpvZUQSgWFyCKXUuNfVzUHeUacde8FqYdmb9FXGx6nD9zbQ",
  "key24": "4tychbAFpf68hY4RyntavTmNf2yx6TvRbByTPHmAdHZPeEJiGHwiWFQWQxR7QgBMAMfcHZTYpDgZyjD1srovmXww",
  "key25": "5GA5ihQWsPTRGFd32kdoDD18ZKokN3YkbNT2uVRkonBxSoxE8pRUtZvVHGN14JKNC9BWrHscvfaQnMAUbmYHt6hG",
  "key26": "54FViFMmzW1Aa3eFwMzU2SRNvUZGFpo3RZkSfNJhYRsDa9c5MPXr1pwKUWLk8BwJwYYJ8FDph9hp8siKdieUqZnC",
  "key27": "4pC48ti4fcu7PgJuQkmWLgDcrNicK8tWUijSFy7nCPRkyaho9h7zadcfiLoUKKACLQm9Ejbc6EZWJ7jV8i74nLpc",
  "key28": "2jmS7cLCi4qWh8byFJwuScd7ysMuRhLhnpHf3TpjoWzV8esPvkZ24VfMNonrMbvy6vbWpSM1QdMemF6VpBteDA1a",
  "key29": "JEb9g6k9cW2L3FwB3ZGkJWtXaGhLM7pG8zNS2ZNCgpFE5p2dbz78p9zsWUDHsifSGjySFWRnj5gA9ffk4nkewkF",
  "key30": "4SgwEy3Q6TGqm6pxBg8MWABP8RRiDuqjtCEfmVavL7hprb8eaMt9VJ71xEw34j3Q7wEkMqLJrmhwjXuhdTovGu6w",
  "key31": "p95uda1cCpjtowr4uEGArSKQNoysRvezn3PiN59mNSUwXZpbmiL3DxDtmUPqKsUAmCPwS1PPT7H1zYc7PmDZiN7",
  "key32": "3Erinh1QGzgqJSMN2XZPShGzSfp5CHBN7iqn9jfDLy6kzFaMxNGamAWgEJTkRPx7ywXeGQLjxdbLvj3aSiMQTNA6",
  "key33": "2uJEbypXpBv4bqNe4EBvLywCnWysM8bxrvij1HRwowT3pBoYyVizrQohbjyg7jDJzaGKZtd7PsZtw83BzVj1RNRt",
  "key34": "3CtXcUV8hXwDyFrxBAy65J3txAxqV49XQdAkASotcbVZcRd243dujwc5Nj2G7ha9ao4VJA2irJdmicNL4qRT8BPX"
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
