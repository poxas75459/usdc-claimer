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
    "55kZHkrkDX6p54aqvPKZ3BQUhytDAXFLzotgiws3Pr6FXqcZhLvPn5rAPzdnTAo7seKrvjF99qK8QY2qMaYa9i7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37SJ4ZvUN5xTcFEhQ22jHXfapBU6AiwdsG7xg6Lfp5WsgsBLhfR6khSQrEaGXAc7ZN61odHdEi6kj2kRBreRspjb",
  "key1": "3Xxty32VKyPCA6GJoE1xhmrpCCGHDWFnxK62M2Pr2rpfGC2aiMACwjYo2chBzkSXmVFhvizsjvgtWgAxeJg5ZVNc",
  "key2": "4bHqgyThXpe6hRAJurXF8LefBwc5pTLv6TWWgmBCk38tZ4S41eUs5dfc3muDeRkjXbm5MonG627orapM26iLRRhM",
  "key3": "3ZqwvjyyPiJQZXHtnc4c13r8bRe71FLHXvKSbJN1AeUBQrgvs5nYfpEgTNt3wyoE9qdRSoGVkfxdU3a2SafHLVJL",
  "key4": "3qc9KJsb6T58vTeEbV2yihdmwAAmbdYkStZfsHnQgLkJCooNSaFA1HKd4LNJSrp9D9PhqjgfqPYktRbYYz7DXfyg",
  "key5": "2XuhScgMvZnHG1zAxE993KbbnDxgs3b3DSC2S8S7WhoKW3NnvBaRgiMnnP8FbdURkX6q6uiRvqcSaiz6AfZTuR7d",
  "key6": "3HNNrabRfhXgXn4jChcjqpPPDVMmk8VkxRgj3t9nPRg4NPWeeyKj3SwKWTArYcRx4ib5XmikHgDBpHHrK6ekgveV",
  "key7": "43XctvusUt4TpzR3eyPZKWWMXe3khzsd3bwy5Q1NYNPfJRnqSxDKwF5FpY13ivcDAY9NN2yPeRwbggJ7wzanq3UC",
  "key8": "62QCMD7kkaztAgtZw1yEgcJ9ECSPfnTtHHfdWiKCuMcsYdK3bUX7CHtejCPpD3UQwWXGoVeeAmZA9pvMihtp3F1q",
  "key9": "3xewCARnRuGSCEgdggeRDSu9TK7YaBJL97rF3XBiR836gR36RTkfFmBmRTgDaUPW6gaKn4w78rJgUbtmgxKVwxJf",
  "key10": "4Uwux5wzCH2uKGnXEUaDR1TUxEj1C8dP2bm2B2zBC7Zqa1dZKsTKjA4f1RRHJ8BBrBjUSzeaa2CuJpC7i7T1uAzA",
  "key11": "5E7oGzS6wJoRc3xHz9RgTnpatjrFDTbRbxAJ46dQvgYCF9xsRp8VtBGNVHc4X2h7gK3EMiX6MFZiJThUVnLQoQYM",
  "key12": "39MPnPdAhMFS4Dwk3En4bHQ5HcBrFBEnBCQgJG6DS3zm33y3gay8H45Tjy5HYHY4fGzaHqDeSuEZUz9yPSxvHqyp",
  "key13": "4fjnDEADHhAmTt5vFSWewVWWpBPSx1PaVT2WrxpvzALTMaj189dk8NYFjp4vMJSXS96zG5LHvpjAtTgu5NZ4nsgf",
  "key14": "45jfizFbwmqe2bSavFrHEoii5742Qps4SMGCEYPcRaFbYPJWtps5snhyJ4koYu634fTiTapcGf9ghWVM8iLe1rhd",
  "key15": "3q4DaQTNnM3hzgzL7aikhZWNMnGT32ytu9odkEMavuEDuoQnCE8YKgzFQBDGJwxhJQ8m6dP7sw46XMHnzCnQLVhD",
  "key16": "25HmZEDYq3zFFqVHanv2xNVjkmz7MuZxYrMZfrBVoesGqevgqQbCmQtc2VdKxd4dgySwtfGXB8Dzo11ForizhYWi",
  "key17": "qtrrGmUfEvquSEU1D2bgzEXS7aa7VaZXhB4x725qE6WpcuNmbDJf8yqjuhL6gyRHLpiDiGArosi5DngUkxVmw9P",
  "key18": "33bwowTE7oqmBncg6mFEaLScAfTCqF33TSWr92PWxiWuRnUQSJB27hPDWs2CEda1XvN49mEbhKJL5DkRHC5h2jCA",
  "key19": "4UBbtpRoNXidYeSBerEC7dBdKhEqLTCQDyy9Da1DUNJhFGsjC2inCA4nN1QFWdRR9VeaSqrroehs9PcEKPMwUwRw",
  "key20": "5t9X1GRqUT4vA69AC6AYTQdSia6YttASzJf5NLd6hTVHDLETjVvcUVrWwrUE9F7o9SNZSmtGqxbFKw31NoZcog6x",
  "key21": "4VJMNmpmSFJwjki457J4GoXecK5HBUdRTD6RVdz3tWjzBRrLHq6Vjo7TYq3Mi7ECg9VqAM9wPPL8Ecdt511kq5Uh",
  "key22": "4V8o9L1ZFfm5oS4JEQCkQEY6EfjpuqiixnbMg1wqv92fznXMR2neZEAGkQYKRqRSuhJEMTrko4RkWos5k9UmbNxD",
  "key23": "3rRimKQX3wU67Q8sYpiHH49b2f85BUDfW8MjUKU4uywfKxfrbYK3AMzTT9M8PpUND7gsKgdspDmSXQtvZUa1i1u2",
  "key24": "4t9QdbGi6Ujpr3Wwz1UNZAQdUphFxbsJ5jcAvrZE123QQsaFe2z5E3LM7yAajLs6NBXQ9wWr9V4prugQiA252cma",
  "key25": "3h8tPaVuTedV3gzBcY65dXZrvS12YyiSScPWe8x5CLcoHRGRjGwfXZgLGeLSTovSVmLWEN1mZzX9y1mZhzQAEPWe",
  "key26": "2Wg6S6ZgYLkxnwTsJkzcFVagbJ9B5uNo3fjm9jbQt638JXHekdZVPfwtvN4TG2aznA3aSzJvTZKmwDwTwdKs92zm",
  "key27": "4N818dwpz3Jhot9ofXy1sknpU2dL1ELzVd5Wg9tZRiKUsnU6friH7D5VvKG9naJ1T4sN7hKaaUCvQums9VPbiHh2"
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
