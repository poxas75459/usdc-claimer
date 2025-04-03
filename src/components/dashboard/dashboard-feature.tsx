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
    "3fQG4AtXHc1rn8yMZyUsqrQtz5aB8wtqfKBxgduzkiHRV27wJgG2i7LVnNDrjJ2yttFAfksvqQ3VV8FQn6S9BVAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rghKurbzHckjx1rF3ShYvteozZop2mjXr8VWc43MRhFwwGnTJDdkbtz7NxMX3kevsaHZiap3LUw4wxKchA2VoEu",
  "key1": "2qfvUFRiUTcW49EUbF8Jxto7PtUM5RkUKqsHnMH4cnWtTGvbnz3yqZqp7Ft3AApPTLFxCpPnyjrUb7LgK1FiRdGS",
  "key2": "4yKZbo3PKXLQXCvkhb6vXJ2YtQT8C5LMViuBsm1amJraRj7PrJwTJXfuhFXvWMyGNAphzp3d2FEgydPeGbUkpazQ",
  "key3": "eouGTooAPqcYFAzYS34R6sUhV4Fjei8hqsFhAxBc1SwH9i55XGfQSdkdKsy5zYWaoSzQBb6LLGvkRPkDacR3gLA",
  "key4": "3rt3HCUix5Ji19Z9DBMQPrRkncqYBGLCjBpC8ZhHbcWxCACqRNnsXfFA2GH51ygVZ31MAQtLmJdbMpoTcwdRmWHH",
  "key5": "38Zc1ZTQL5SpgLodRrVUmQD73xvtQCX2R9k3romY4g5RNFbDrjLUSfF9no2k8f8Vu8gUgMuyDdW9ffweeQWqeBaY",
  "key6": "3NbnRRayb6Wi2Ezpx8ErYGXi1m7sJiTwbWvNvgMMZFneZEDMbjwxRdXHm4FptWaoWJhBnhKWSFykySEnXwPNAHHW",
  "key7": "oREy4f1qDyHchUeeQ2sELPa6s98xW2xAacqyGbgWQvAuCp5RieVkgjztyaXYDMzGMkBNZxhJiatRRRmZfYyVM9L",
  "key8": "5b59DutRiS797Undkp6kZw8wwiz9icfjfXjgBx7pEdvvSjLMmVnx4FP5CxnxCDQBSEomHid3mxodvEvavm7zuAMv",
  "key9": "3Es76vexk8MNQKKAdkdoMsKtNp2Q6HPgEebrGFyuth2ZWBJHsPEVdYFG3RcHeXSkj8CWx5y1rfQDDvAn6Jzv7fn7",
  "key10": "3KVs3exYq2vtv8NTHtaQusptNb7KNKKbAGnrHgfmeCkUWB412Sp88drbhvX47cv5u67Zp9Xw4oHu1ADwzbLSy5PR",
  "key11": "3WYSNLbYZ1CyyGBJZC6BVJBw6VCd9uNotKcrQxpY3Gq5aW6UaHMCeFDbgGchV3NfqZ5K3cFe5C7rf9eSWMQLAonV",
  "key12": "4egN9TDypn13toL9CC8zCdVrwbNeVdn5FpGSWfGNhAj5PKnvjiABXaRBqn8JWTBYx7EnLgJ42Ad3fewMnhCukziP",
  "key13": "qSBVK6rstTkym7GtuHe8pjXGKwBqQXDgYEaZnwMtaHVGqAyyDcreCzJwoPsgBDiXngtGG5CxhJxorJrjQea7BVn",
  "key14": "3N84GqiHaZgcVxkB16YWYN8FTvsxTW4LyVdLFJJX4BMrS4Rc4W45rEe5MGEXzpQ7sSaid27jhbVHEkp1daJ2LsPX",
  "key15": "2UQoMnYbKp5xtmS5osvNRgFBfvmzLY9XNSqeGyfdUVY5x1mEkRaiUopch3FnhH42XueYTK1FycNv7TnXZFfo9JVr",
  "key16": "3d1EYBtnrdCGwgLwK7Va5oocvZvnNqyeuV9GGGMmpM4YX9Z34nLbuLHk5wBKoNRBC9hueaEbMnvaS2ctJE2A8emA",
  "key17": "2M11CsXcVjAikbRxfMCmwnZaLHWV2Q5cvz6t4HjPsWPUhe5YtzzGEXdkMhAcxXVhc2ebMKLPyptzDwdGM6QqG8uA",
  "key18": "2vWRFDokBPfmG26Hso8ZwXnMp9pxRixjMPqteq6fxY8PNPXwuNsAarATyQSCVGUiActiWonQBTUHGG6H35oHQ1Hf",
  "key19": "3WLDEeW3XioVJgyEEDeWktpSqD2Eww7hB6DW9sa685uorYDP5KR3axcB5693LhMq61CD8nkyi9eZmk55joAWNHNZ",
  "key20": "53ApQfy4SE9erFE7pYTAmnUjQSU1ndQzsRbad3rAtdZLRWxsMafHRT2kKTkPAsxhCiXSVhF6PD1DkYcZ7nLhKsc9",
  "key21": "5PmChtP78VvfHhfnqKVWa6wzWifTJyUfxg6XRpfcUsoyDQtWhJ1PqGETyntTcDM85YX6fbr9qsErzokHChaofDp3",
  "key22": "3Ea6tXMe1nYnSN73PfsnmaZbs2DDEfr3FG5dXxueM2c1dJPt2eUBE3eSh4YSPwjhTJWeJYd9rb1pZ9ENNZqSBm9d",
  "key23": "2cAprU3e9Tcpmc5kpc3rNPMRG5LithGCDdUfHnDZMjjmf2iqCD4h23qmVuLYjHqEdaNXZzy3Q1Jay5m4r1cRRKaQ",
  "key24": "2hzkwBFJ9g5CTgx9gjwengKweLZb9bMZ6kniLg3gxF9d2vZKeb8nyrpXKSLie4yMdCbvGXskSZCykghK2BzWP45f",
  "key25": "5XdZRdfZenyfAxuFuFyzkztaKRE9vqdkdg24JoWuvAaBPgnvAji8aNEJ7HL36N6Y49ksXtnSMneF3gnnDcJR94MS"
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
