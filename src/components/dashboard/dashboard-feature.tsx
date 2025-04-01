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
    "5CHxpFFCpe6F6rK1dq37FuntHTNquXAVFBN9q63zPBCNkfMxvqvD5w9usg2cx4Jd6omf3V8ELbgJ1TSn8FkhsoYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1VUWxquLEfuyGVGvnpfTm2iCL36zqwsCsqptm5US76TVQHzvhEH2aGA5pHovA1dNyoMc9bq8mqLLJzaad6mJmJ",
  "key1": "3ZHEjoKWYMrqZtu46rJwtr9mq5Y7yvyyVqCW5ywVadLbPVYNpx6q3qhY9AcRsaLJwXBgU4YRVFhdYTkbrAQdiEvr",
  "key2": "4xkDDk7p117FRvCncSnjkUUyacsf1beYZGY69vHPwGXQ2w9ZuJWKckiTCpi9Rxeb7nERgPb24ihh5nNbqadGLobM",
  "key3": "2Yv3zUm9jXT2CQNg3ChhfoTLyynsSgmKEFS9yCMNTv17kVqSThE1rj6juT9epiweghXzig1Hp3RxJpB736uVnGdw",
  "key4": "2Xc7Cgtk1hf4hb4RoGqntWLX4RbvAMtDjAsfPMqur8CXjV5m131d7Bc1BJW1H4mH9gs1XkqR5KSXLdmc6kYmZgJr",
  "key5": "5HFTwDzF41NnJMtXDmKReXPk3BAiY2r1WvFsgNncyxbr4sKSmfCMh3jPHHXsyeSutJYdoSu9Ch5zFYU2izydQyx8",
  "key6": "66DaMfpoTLYL68U5CuHvZCtQk6bXwDyZ1wUeTj9Q5V7NLVH7MKYfvvqyWZ1ThBwShkgr24piEhBdgMtLb2LsauUD",
  "key7": "2J2PJaxbrKFktojANpz3uww8CNSnHj2vyWJJ86fAMkcYut2a5uFN5n5e3iT8UPFcJ26W3w3gzydxZTRW88CmucmJ",
  "key8": "5nKAmmjRFFr1a4gXvJaGWSQcELCnkrP84Bd9r1xZdKPT82TxVHqcdxcnNBhb4WLvqguvq16tWLjhNjVLkzsoSD3x",
  "key9": "4UHVupAThHXB8CubqYSA2ihGoitQbG3ontQ3eJaMr9UCnWQaxvDj6P3hNxzaccFdj9s2aHPhZ5rt4xSh9CTQ87n7",
  "key10": "26Hkg7EwXvGYjFgSK3bJCSMT8RnazFW9oTDAoRxUqC3nj1Pn7m4nkXBzwim736xZiJr2Ht8GPweMc9C5jQE3xKku",
  "key11": "2YDhBFRpcD6LKyCcCr6pDbVpUrhVwRLoF5CPr9Brx6tMPNb1YVcbLoDcfg14VYfwxyqDe2wdFT99oFgfTLVTJ6tg",
  "key12": "425d2fer5w7VsthHx9DE6BkA5UFdiHUtdsp43AtEvefvSBf6xHkFqoF2SZjAU4Qj4GUo14gmaGx6BrcAxvypUMiS",
  "key13": "5pUDmPM7TiEon5KwjeH6FdCiipoUMh8p1RsCyKTm4xWeCreZYN4c33bC4QkVS9rmcGJ7bmpKd9TQPK9eMSRXhZhW",
  "key14": "5bpKpHUetVaFvtcDc7aFMNy6UX2dfzXR3dN1Vkkk5at19ctiNkG2Z6rnegoRTvit92uoVB6BQVXnZ6ooqygqedys",
  "key15": "YBh4zRbX4gXqVrhPzykJuXFLTwG1WvDL9DLDeJ2aPEf8NK7xYVP9xkz6bTg4beRK6w1frpPmn5GhXNExC7Jq4jt",
  "key16": "2EX6WH8Z8zZcGv9YbhzqKB4MXFwE4CTWdQMq9DiRorDRpu8QSSBYYKtm3X23Kbj6xYPrhTUWkpbgZRxTxtZ2cdBT",
  "key17": "2NTVKrWHixEoYSaBNt11xdWXNYBqWq79kaVgC4DX3q4CvbdghZyxqtAbVQMdwfsXQ1DG8jsAoy1KkQe8xtiUV5sF",
  "key18": "3e1qoAgNTW5nFaK5mXwVoGgiUzaFr8RCPWK6N4ASd6JXkGKkLoBHVewKPzqBrqYmRgobLL2AvsAvpkbHXNFi8skP",
  "key19": "3dQHgpEfXrdSeRVGLp67Jk2cujyJsgry4FYR6go2Tz5TALodC4RWCbgfDnKYTZUnRimCzERT1vrU7v8U6RFEBSHr",
  "key20": "2p1ciXW6RDjz548Wui7HGhqiakm9s9fYyjmmwhmZNKHwdugirwmnnLCg8ixvTgSAF8uBsXNRoBhQxWUPeiMEVCEb",
  "key21": "fUQb3ePDRGAKXdHwNTDBSAMv2E1Q8dmMVZ1ZUDrazUhx9Jtz7CibJzAuRGkpXbJ1uEj5dVA7hrrewW2tZxGD4DF",
  "key22": "4z9biXSupUNK71U8dgPajkizFVNAMC4yuk78QKrc4YoAeKMcxPDLshtu79VnnkFCnB1DFZkfayVNeNB6WR5Dsf34",
  "key23": "3LWQxrrbqGMi9djFGcf8MJAVu6N5GUaZh6MMnxAhUpzwyonvUHGuLi71zjXpoVDhfUuENH4mSKpeci8jUEDyAuft",
  "key24": "2wSL7223U2iLcxCZa8MT3qM4yST2NgsFBBkmkQv8ijmwHU1gDq3UVRwgNG36NroWnW4k89S5nczaNuy7zXCP3DFH",
  "key25": "3gNmGE1UjFtXSr2RYs68jM3mYimfWAeDoF4mfT5GPEqk6y5P2DatbZYttJ6cTiqowfzrCZTr8jrJkmYTz36miWaS",
  "key26": "iFRWhqz79Ym4iWFptpjQhj2NsgYqLNWGjHXeoWsUf8DeeSZfLTahnQJQiby7jp3LPQmk6J9c5RKK4CTCjeRd33y",
  "key27": "FXWLDiBXWZgNuQ4ao9N6xvSp8L92T4hLtGWFGsX7e2GpHHD7rYeDKz7wjXmQEZdkfhAfHh526peS83axTc1kuNg",
  "key28": "64Xy3DNNUd1RKZZ6CrYfHSN1cndWybMs3XsJxeuiEwtSQcf3eJG3ncKR9qhAwH9FQWEv4ZQF5tF6gBPdSMGJomY2",
  "key29": "4cVBVzGQ19SwxJ5PuiRXSEQbQLwAcKZzu5nsYpaYJEZjQgFywjxsd2Y2Pdx4QJpHxmLPy5vC6TsXnukGPUZJLJWa",
  "key30": "szRLT5HBQmQDt7noohQPJzAATy8vxwcqmiTRk2e3hmgtnKBzxaHkXeFcchYkvzoujRURyqK1467Z25dzxbSxYka",
  "key31": "5tkBY9JrcWiLv2Ya6U4MKRA7F498tJUfQKU56F4kYJyHYEtDpsj4xLabDMfSXtRnZYtG8U973x9hKbdH6SixiTpD",
  "key32": "561Uz388pNVC11b9D5G1sPnHs41R8chmPDXe49gJKXNmeSRYxxNXkcBTFRPghWpt9nx1855Xy24n6EZWjoTLeKUE",
  "key33": "HQa5QwLwpYCjcNj4s2FLN9oCJp3qLX2gki2wf2ZxVKZD4wxZ44dNx6jL9zw1cf7a2eB5Jr2Kp64TQvkwjBRcUjs",
  "key34": "4N2YsWf6kM3qNsQb7V8JoW1GVmaQfp6nfEox68qejE9Z9AUuCrT8iR1i8LcXm3rHavax85NEFPm1eRU3BMp65xmg",
  "key35": "5w8cg1MSVeAm5HhnVaoG5TAG1iwcAtAu1gJGqqCcqLti1td4EDDmif9Jh8q17N2MbHbJnrF3mgu8fqYPXgLQAPQm",
  "key36": "21sfSQCyNaNJcPXn3nQXnk93MMqhWqiafWXuMFm5FxvyQAkMxZhESGam5zYkc759Fc5tgZMBefyCinGFYZyBprZ7"
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
