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
    "5Mi16PUJFJuruQEgY7xTymfyf38Q8oncN2DYosKNy1B7sQjYZDgEAyhSoRWQdevsRGuaTeYmG795SyAn2WdDrVF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498yMj4bhGYiXv3Wppe3Db7LSCs47U4SkSC3cntdqGyZXh7qAZ7z6xft6D9WYLrSjqgGRKJSwnFt8gKmRHRp84yE",
  "key1": "25J2hB912wWnM9EEEGehH7wn56iwcD5p3iG6fin4guBJAtTBvyzdNAhdmYuEvNUUejRh6e87mzxjFs9bpwuHLjW3",
  "key2": "59h35smcAsPGshU6GYQ4mS52HvTe8hRaeaBRJTqUEv2ANK21HVbmpmfKXM7DgnmjFby1QCRbZsWHNeBybXPmcn2A",
  "key3": "46kaF4whSfA54hQdXtPDhWsugcxJ4BJLboF9gYGYefyNYeTCP1eFR8UsTKu4n18VVXQCfWvEdbVziv1wGvNb7dH8",
  "key4": "493mSDxTBmemYYgVgjcUKweu1jPgcoHCiywXYgDoGRxEhDmBNuP5gTrWdCNS2cb2MV7VqPZTc9usVav1BnyEuhfv",
  "key5": "5oe7GKPVSDhk2D26zoY5bWKv7x85xnGyGLWw1BY5XjUbm6kuEkfiiLXmKeh2xAmKc6tNAvzfqN3mpXCd2JdpzevA",
  "key6": "2TFQjo7FaNsrMburNM2aWsRFZUSJHjofrt4wa8GRmEv9LLbFPexRymFgYcjBgASEbnyFwaTAzgW1k8rWqJuZMUud",
  "key7": "5nLBNXUApKqcXomnxF8JWLox7VUL2KN98ovDeBeX5vMpxgnJMrFCuXMnd5w1SwvAaLBrkrFeE96FUppgL5AhgnDd",
  "key8": "5m8RXmVd2zrLeZvjicxePuby3cjLKcSo5EKEyYi4AY1Su3K4ssap5p1co8ErtF3BsKGaBhhpfLDqwZmDrcGRsFtc",
  "key9": "4avnd4jYKT8oGdmjG7eF452JtwxGNWPz8utKASGenPFSKK3Y2yuJ19idwnMbwQ4zeoGDg6Rzddsa9DxAHX9gHbzC",
  "key10": "5hhKiS4X34Vxe8TGdAh1KjMNWauL87gxaEWfdTzhzy9Fe3jJSVRANqqFDsyV5PLSYNi4kQGPuv7Qin5Ho8qnVzcH",
  "key11": "uzpUpTbFuUAhnn1fusZf3sgAeiaJTUrwncZJ8LcE7oUm3jNAiaUyXkVKJqr5ujgvUw9yz5ct7pRs65hjwJRUkse",
  "key12": "4i2NATKghbfNKXW4dE7VZBu3MvPEkGP2yxe7oP5Q2xqaZNCDPQ4jePg7M4YppZ5FD9qdvNSMfrjiAziH1awvvVfP",
  "key13": "caMARrDBjjNWPyvCG1yBNMqRyu3v3ZiuAu2AZ8warThm4yquEZqhEgWcqe8H7BjBB8HUe6WurKVFY68b9NfKSPn",
  "key14": "2rAgh4axBCQEV3fX3PbDwnxZQ1Ti71srGeZsNV56XJe3p2H4MDD5b6ohWH93aiDtyfPVYcidvNFCPhbDgnoRniwJ",
  "key15": "2ShUA6kENA1Y7e6kc91nyZa85RtK8rhGM9GtzzyaAwj2QGLFWGmv9uVrgBVJSLMwhooEUqP9cxbCpMvy9gwTtg5J",
  "key16": "jW26WYM1YN9dgGiVAaKJGQipgWxgAW3539jr2tHov6CBU1p1Zpp3by3vX6jeSBH2bBL2jP5NAMYNvPXZDfd3Ma5",
  "key17": "9Q2gGJTFSVQJ8dFZLTY93hC35sarx7hXC8CXjLZhwLyrL3vazPdy2EX1yJFMqKFH9kx5m4TZpWTSQB1Wh1uETr4",
  "key18": "4SSGhAP588CfgoS9NUS6no9XgdngkEh1L9tJz1tK8FwYLBajncse9BPnAeqXrk2JNgXnBXS58J9LQHqexXHeAMq4",
  "key19": "4kcybfcfsxSZXWUSrUVjKmLWyFsxVRNjeG8xrqKEqf8igB4ChcdZoTseB28YSLhQjWpBxbkzh8fsSLvB67hkQV14",
  "key20": "33iS2VdCmyqCAyUjRLUeTwumvovbbkykigmtyixwH6X99CSuoWDTR6xYAGcUPJees7MRorB5VqdAWwgSdQbdSKQb",
  "key21": "2n6NqFeHFETGHx4oA7VXBh3FxYMPYQxBNGwbRH2BJHSDWE8N3M5Rx7kkijspRshCh1tngn6Hoic19v6JUUbRTsQG",
  "key22": "4siMkqnf2arhbzYTtbeHKTXPUDj5fay79rZpFPtfe3d4ScFd86vRtHF3huBdmSTw1ZF5zGyTDrYTmjMAYaY5hHJF",
  "key23": "jgR3cqfRpzvGqjWwjjcJMDoJd8KzqXhbq1k5fNnBGc3jCiDWJXpe3TUkGiSPP5omuD1QvdRLgNDY4NfDVBx7dzG",
  "key24": "5LCtNeSPWembGyXLEt6h2ie48TkYzhkdNBYNTNp4WzF7YcDWo65C6waziHUneSmRVfiZjurDMKtN46h9Peb9KYxM"
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
