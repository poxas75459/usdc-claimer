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
    "xfAQ4zyNzSHqbGjiNzrdYTNKewKfqrwowjg8NFXH8KVmXFcidjVhWPzXbJXJDh5WbMQpgAaovUE29fudVi1YaGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3k4PCNxAfwWtdHgaa79xZvajHRUuMrhnCdZE9DHmYumtNJKUm1AT94Bpi5EzazAfwPpMWYfuhwbowh56ZAUP3N",
  "key1": "2kj3B4ihB2Cwcovc5MEmd6XjCYEAuYv8tJ2tD13ygfWFybdyd6RD6H3CH5VgTBUMqy7C921wYSRFPzenH1dGdj67",
  "key2": "5hZBeuZcuAfmD9tDKsNauq3Rk8ph7HbaR1wqrxHc5omhtFi6sD8FFAciV5SGTpGeM4fPwBvp63AZyFJu9YczrJYD",
  "key3": "MjaArk2VKXzoEUCDXKMEBCxV4d2uPAuBFNTCmUSeZmqJ2gFYjJ41r4TmMupM4FV5fscYqzgpwbiYQacapJKJLSu",
  "key4": "2YKVY1nUx16mncQ96DkdWkjgBgxkujV2moAfSmh1FZjNRxazL7qDNTmksitje8PdXV99tzLGbcvBhTcEVyTeYVws",
  "key5": "5tuuGbn3K3kJEeqVLjaYTTopVTxF6o8JoMYW6Po56RGt9H67P5EAEAwM13zhLGBAupsesCLw89KAB9BYuqkDTKzi",
  "key6": "2GoJupRuerHybZZ74RT3GqrfwtDirKP2GdF6z3z87xUPXVzTf2KrWBPiRLqsSPkArjudW7PqzA2yiLvC6Z77hynX",
  "key7": "2bxexMJwWDG1UuAfHLVEWyLdTqEL6Za8sWCARNmPFnrEKENcd9Z7Af3d3TvECdxksfa98B2QNTp1MTjzKDy9Da75",
  "key8": "3NUpUfo3feTqvCAAH2pzxw8vZjDPM2q7Ro3WaPFQWWyQT9uCyNzVP7HFScop7gc1zNNNeutg2Z2kWgZukpMQZfVQ",
  "key9": "vzfDSkTf17oTBauWWa2uQEdaHnLHfd1dhVrPo4KyBx99GFobeMHd53wJM1L9kHEQ7D8UML93RCT31xteoFbcVsd",
  "key10": "33LpnwCK9RMitYxmX7vnVqhPNLVK8ioeerzUVkApdyo6LWGj88eEJ51VZ1UEfLnBtAaGkmvYVbfhFDdTutv52MBr",
  "key11": "3U6fc7QkFMZ74JJpTTz6CXFKdCyiM58Q8qmbRqGMAwkrjUrrpXDSqfWDsqZCyF3vkaLRsoDboigtHAKFgi5pD9x8",
  "key12": "68KQEKptJ2ixc1r9r1nK76PN3pMwbrx74Pa1kUzHRqGmtkaXCketzHJECqVf28f7JoP7VfLayGG6WzEdcPRZ8rq",
  "key13": "5VV4odbvP5EX5J3G49D6JxS7vwUE7aZGp685kHg3vPQKVBCL5arfd8G5bLpzcDBDqwX8S358CAJ9na2YTScWCcmj",
  "key14": "5DxEWxWKJaXS5RrdL6rhP4FQ4r3Bau7q4m48CfwLGq2qGddggz8M2zrKMpcg592atcetoH8iGCcVWmivtAk1BjJw",
  "key15": "6CtsX7n1HS1WcRrM8HVy6b5ZSa9m4SGuicenEjqiZMHcGRmwirqtSYh7YYfZuFjQLH1LkvDYvaz1EQwohkgjbyE",
  "key16": "dAh8qZEgGL7HXMbDwZkTCTVP4oC4hZLydz7rbJZiEEFT33PCcSEsSBrKroQN6Bnpb4be4vmgEpSHv2Ae1bHudkk",
  "key17": "3EmwdddEMByoJtFzoHZnKgEuMLXSn6M2Gton4urXXZ7gjkS8Cma451129qcRZbnTetfWXJQ2ADh94qKSJBaNJgWR",
  "key18": "5gfbQGkhpivHCxJa1Yrw9aqmQeJuQEcVgPonWXb513NvvjXp86TJ9guBZWR5oyQR2pqjGVXadcPnspgBHqhfUS5j",
  "key19": "2x3A2L7psFFThTVuX3ucrVcRZy6d4iGW7AQTnhs3557XkqsHLncLp1FwNDr1YB1Qm7Z41f1LVA1UBPi156z3PBRo",
  "key20": "2fRye3eF5Xou6sGg4PxRH5jeFa1ynJPrSxzdXue4tUrTSQXAkF9HCups4pe5abFBf2tcbVtWzzjfKeo5RsJsY8Jc",
  "key21": "UA3CPiRBR32LYAbNKJmSF5pg92siXsiAGmQbShj98mr94pSYyPbxHjrdC4tsFkUC9g4jLhpK7952T39JAArQk8q",
  "key22": "3K8ADye46L9zbFHZ464bvMz5P9zH1GEzAG4pgFTwh265oErg7rN1uQBWweyYg2MrtcFMgzhX8YmX1pubLFSxMPmK",
  "key23": "2JbbjP4s7VTa7iALLNYACsK5PN438LFA4iXDPBre8YWPCp4apBv9WmQx48CvMkJ35JB29YN1K6svr7i8U1bXDhB9",
  "key24": "2ueenwDPTsg36Wrp8BK5yWk9Yr8N9bSj3rxLaVSJ2gT4J1e8U4Tr54QVQWEAy8mptDwYncWdyrgwmbzbNtc6sRGP",
  "key25": "caFEMA5ynFCfwA95RhC21JyvCqbjkAepGiCGJzmzyJzfUFQxVp3Kp5JrTbFn8LQcBdN8mskeLacot12YoPW1aUp",
  "key26": "4gwkzjERYRc4Cz4M1Fwjao92m8TqH7iFB4L4bLHZxeYowuX5QnbuuZ3TzupWTzvXJQCYkhhpjjSsDLZeBZJ3atd6",
  "key27": "2nnovZmT9699vUfkgSHdy6B1SNKs71WVcDDAFMmjthJXxt9fsTHbhBnVFb9UAMHoJUWFowSEZRz5bLFFEoYtFwQU",
  "key28": "4y2aRzggAuj34Xb683GTtBEpHAyBKUW45ce4UvWtp3iu3YLuH4mQGRFkgJPdGEYDuPyAhwRDcgjFYMhf35JgkkkQ",
  "key29": "43pbT9SgCEiqanAmZGEyB9XC4VTEYBqvdscLx28vbqH3yNP9MUfnjgTACb4wEgtuKwmapKLtNDwxNH6jdY9fUhCZ",
  "key30": "245nfR2wEQQvHqv6kgp1VoLPqYG7P97gYrYPRCFZBi1UR1jfoqqnJawn1vnTy7cmfRJi1FKZPuRXyvVXTRtThSc7",
  "key31": "U8gvidJDiNyyjGQ7pN595Cq5VnJ9oqJGaLXRGMjUeqHmnFx77g6rNQopZxWaTHae2bZLUgog1PYLS3Vbja1zVUn",
  "key32": "2yKduZLLtKz9HMQHqHi8ZUnbxHbiQSLax5x4qnBMLeL7iueA82Z3gpCm8oHsiog7vnPoYFUZKo9WfrQRs29BXRDJ"
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
