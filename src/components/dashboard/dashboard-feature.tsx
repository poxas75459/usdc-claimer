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
    "4yrZHFg6mSEPgjLKaeZB22aE1MQMNbkTTVMctEwHs1Gd6wLTDHahaTGpStnxhwaJDKKDyVyt727zmm7xiHzzG5Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5V1A2k86wqYCK8YqvayFTowNwD4Bufnmmftcnnfyy6j31F6go2wfsGQsd4S5oUARNoGLQFDXF4Ktc7Phd1NCD5",
  "key1": "4Fz4XTGEpBq2Uh8nL4oYe532SNeBhtEYKKSjMr8EZKFR2FnP6GFLBYctH4eCGjUmuMAwThgSnGTFyE3EdccUQZow",
  "key2": "2fA9wKUQf3J3UjRjhTyFERLEJ7oYbxt4KdHus6xmDXGstRzkaD3DJnbzbXrzW4KuMCNyfXinwTXkHJs3hztRV8vj",
  "key3": "5hm2nNrfkVUbSvxE145fadgJXvgBjQku5AA8u7i3MRsEHx41k2pZYYM17E4oyRuQ4avUue6bxbjoFYB1c1NkunjX",
  "key4": "4ZhNYJBnQ5wrUaJbTSXPv8KzwMtT9vcTjPgFnshLUeTAYcYY2YF9UB4TzTQb1Buh3zC6KBW4hYgKPHWyePKfRD5x",
  "key5": "AvSKsxK6qDP78xaPtfkQuCBbPzLYeVWEJodjWUrBJGZj2VBfJsw2SJgNqD9QJUYiu1Wi7bdtTv89EeC8XGfQ9ra",
  "key6": "3P59PM4bs2itUdiTTNepQMMNsh9HbCGV8bs4uB8mDfgBJ6TEBEuB42fuFnEwmvhMdKMN32WPDv3QVik6W9XkmMig",
  "key7": "4fEcw4CKs2ViRDGpeFHYKqwbQtkiw9gfa9VRc4bvU6TLHtnFmcKHGGScPKhNsvcgmJrHvZLuJbVodPgmiUgLGFQv",
  "key8": "6266pNm889RA39XxgMBMi46a1BcijV8SweH5vNtX2kJujuPEYz4MuUKF3ZhbFHybxopJD5h7LcKok8gd6c6UUcBP",
  "key9": "39sft8ovvB3K45sN1eRPtGqpLK8dA9G7A7NG2jpVy7sAFi1BgcY2fjrUUYPJz1mxSCc675FwykYaBWty8yS1rxeS",
  "key10": "2NmGz1C1eNrQPY1etzVJwgtWbtkUmRodHD237QsT1ftVP3ahytztQ5KomARUkzXenUYzz1QGAJUXiQhup1G4dDMD",
  "key11": "4dUXru2wtMuvwb9xyJGkQaho2WKDevNcJ8HLuCuPbnugXBtYoGZgx2Ny5N7HQoTkrsjkw1seKKkGwatAv8GdJmze",
  "key12": "2L2UsZAMmMPWk86hQHhycfMBG6pQgZiwWBoP97ScrgWP346Z3EemTvsjveo4epjBd25PSfQopt79tsgwXdwSYwFC",
  "key13": "5LGCXfcFCUor4emkYmPLXYyiFwZLVpZ9Fzaf5q2zbQU2BWtNwpyZfKkFEHcBakZxczrnj68SY6mjYn2cTcL1sQi2",
  "key14": "4cj9FBNe2gp8cQMcnEvtZg6Sh8fco5JR6xKd45aUisAe8AXXacGi47v1Z4nUUfXtx15D4cCw9n64RHgCTj8XZFh6",
  "key15": "4vtk4boYYN66cvkS8dtonHX2yTWQATNKD9yYf6TXtaRPqeb3FffpayQWihv9CkhSmWUVbdo2ke2rifAHbvbcGPGR",
  "key16": "3Lmdj7tWACBC23QwTy9BSkh5q8wdDLFksza2e7Nhd629GJbYXhScJPRfEhPRpUe8AJBPPCqVvSqoNKJQ2CixQGdo",
  "key17": "2iF8pVF6RwxxKqDuHoVdRN9um8NnaeRG3q861az6t5ceCZtLy7uyZuEMizfsVosKLJ1bcF2WZdMSa2pAoKrAQrcW",
  "key18": "2HFzdNExSvB4tsui45vFS7UuUXFkouiE247hLGmkW42FF8YCyQbGkR6bY7XYKuzWoJyCnw3esqzWBiMy1am5cNiE",
  "key19": "qtUh7mVo3DJ7znEamjoLGprsTU2bH9Y1HMPBSuCfR74B34Ug87SoFpgSnNL3od4LcpQebpzaAmS72FLZoPK29Ha",
  "key20": "2ey514hva5N643iqXW6Py3b5yjCt7PTKVjfDcXmUjPgtLRSakYGModfkhNH9Wkigui5aEUfZjTZRt5CLriZ4acC2",
  "key21": "Gc4jRVMKUi6pigjG8xFZHGdfn2e1C3Nk1ZQP2wa1rmoQKVjjfnYMQExCUfDEvJ26LDY2gq9nydGm8S4Js81rXew",
  "key22": "5ZGRcFwAjDXGvFxYPUNqWrTE7NsCaUFX5L9teCDFF2ynHFRMRCXtFkWdD4TXKH1vRV4L81wqJCnytNx9mLLghNk5",
  "key23": "3ECp9vEj9exHs7654JykggefnSyUPuzNbsR8tfNUq7cfSLJpf9xVAdiQsSke6PAiM7i5SSZRdAZH5M8SCfPeuFyK",
  "key24": "2mNM7o3mXMqnBjFo5yCMkDDCeeeuTHBxUWjnu1HbVt37mprd4S6MCgpru6LcAd7ToRwggrss2cNy9g8WvgEFf9kE",
  "key25": "3tsNsYDT6aHMW841h1HoxobJp5n7LSrAXyZNBUkY9tx3Cp8givkdPtKsfN28LCmSt2NwozEEupj8bZwMrexcjXSw"
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
