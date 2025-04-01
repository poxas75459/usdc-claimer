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
    "3jXUQSR7jFTBpdjEodvgeRHBLaniMCn3mGPeydcXfXtEsqV73CwtpwXwH9J3EaJMEFfq9gjf51GzSv3L4Vhh2fV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqCELCVfsVAUwNQ6t9m29z9v9P9DB9khL6vaa5XN81QnmnR9yXWrUMGwFhjoanmjPy2AJBnrac9dFsj7kAivD14",
  "key1": "sJvcyB9BmbLNnhoqxc16YZdALG2yVTQjxtziykBw3hziZFbcaP5Zbxwd5exCfeijmB6hJzttwVGjuShisfSCR8S",
  "key2": "2cRVwyi3vh3FrW3GM1t3zvBqzx1zFv6UHritkr4aJTiLspBhQpPDcrF7VFmEnwypZxBqkBgXV252KvjajPju9zsN",
  "key3": "2yiENHAKhijPkLMPfETbSpDAn1S6PPwJBdeVhL2H3fLaUWv3DvshejxMZXdR6McuCbvxpw193NuTGEzWm4siM4si",
  "key4": "4KxjTK9XgqGjxCme9r3h1hASXSY7AUFDthzE9JFFFXf3t4ECmTqePeU8p4GxYFPM4zSjAb3dG75sJT8CYr4TEvdt",
  "key5": "3y1PoioL2Cxvsy7cyMiuErbaoETKiKr2yVGf2baqBaMD9q9pHFU6pS3VUUSEaavaQVYZ4HDiRfYcB1E5CiUCusCR",
  "key6": "WRpW9Gmn1C8MePvj5VPmvLPCyiEwKVT7Kn57MVbATL4HHV4NDwtjBPktN6RhAjUruh798xxKrpg9Z9LMFWqgBbA",
  "key7": "2QexWby9Be1yLhZLEQKYezUA6UQH6GgRSBsqL5Jvjha5a7iFNGt7eQT6hcUuqeX1QYizicxco19A3n7cP7mEwrnK",
  "key8": "5kzNRxSjZUBMNHexNyiEMXJjmhCtzNA1YaWrG4vPfmV1eRq6G5KQy423F6N516U1D563dEsSWZhwGigpaCi8y3VL",
  "key9": "3MwJJy5MwbmjgccG7fB2KHQNtXnnF5LtbcJG4RJSSxSBSGpGYc4SxmM7qhxb2UF8RAfjEd1mAbwsv44bnAQybdx7",
  "key10": "2AahzwYBiujiwJSn4vFtQvzr2vcamj7sGjmkkagChWUxCxmM9w3j4mmUMmxpaGu2YgJx963TiVXoYrcoKzEkEaJ4",
  "key11": "5VXGYnV3RQFgLFe9NMLDrJ1WvzswHHS8u1J6mDJp8udUFyvvYk9S9VaYmbzSv9kd4xMzv2Ew3Hc1xHbKVz7os5Ez",
  "key12": "452TFt1nvN4yZcgbfK3B9gBhpnKWFmUL4bmXvRzBZuGH8msLBo2KGTKcRVZu3FPz1QVirgArDbxUwJ4pW4QVuAgK",
  "key13": "yb7whYhEzsWTEBXh7yoGkAT8Nw3Fcn4vNFZ2W8iZ2SAa4WvT9C9SrU5JXBrgSzg9hnQKcAJK2UBi9x9CxSkycqY",
  "key14": "4HWjFPp95Ak6rQUe35FgiUjDsFF3ptZAzz1V1mEymodT1tWzkWmg1sq1QYbfHWVQsJ6ZmYWLFhBHzVVnUQWsNRqv",
  "key15": "2eP36pyu8kbbnqbxWAb5CE8XHamaRb3tGujihs6w1Q3MsHLM3skh9hSEsRLy5RJUf8JLv47jHuo39ue7Z3arYEST",
  "key16": "4aiwBYgsBuo3wBMQxfuyHsCBe79FC67nJda24AgmRwPZyFVqSjpgBTVzARJqbsvyjkxGaNPvrfmgBGjxnFGSPpKy",
  "key17": "BMzs7JbJwzuPiRsGQHHt5ZcmKaZVEryJN8Qh7FEaw5zPk73PFyNUNNsP98cgGdc6F6DsW8i1Mj2P415CakrQfb1",
  "key18": "MxG5ZUTwhNRefvRBViwjFytKQjDgsVJUfNE1UsN7Fw6WqeS8Mj1H2ciKPV7PY7LEJ4Bif9G2SXCMcHf1iZFcNE2",
  "key19": "4gMabPLZpEdsxLEgwMxiK8CbvxbUEcBbDX6DokP2Xn5PTavuP44517mdLL8rT4Z7G66NLQNsZBWbCg38bDskUbjW",
  "key20": "5ucPnnqTZ8Tg7HtrkKTi2EP9eBMgvXWSoYEnzkJK6qihWygn4jEVeJ7VZ1aXXAQvhPMDuoQyTpwSxHDGDAFrqLYK",
  "key21": "4pt27gaVcPRDyMwQZPi1GicRckvnKeWcfCR1T4yEDAQ6yyxQxheKMu5BGpEHb5GMJCdxud6qLon5ThZYM7hJQBZp",
  "key22": "66oLTM3shp1keHAiGDPc3vXQeGvR89TmEnknscJ34rx2yNFX4BWmQ98DmJ78ESRYvxaJuZpTyjSRGzUMGBwpggJN",
  "key23": "2dyNashGTfbnEpHa63kvKraZ5jRiUEDiATNvLkwsJ2m2WvjmvEnyeb6h1ejrTLuHa2VPG52gJTMDszHQTmSKWWbZ",
  "key24": "5xZiddXztQnMseh2JtxndYeoSi1vA42r7kqSZaWQzeA6SpBGAwWC279NNcuNm6fmvkbzj4BF5dSHjGyzrfzTABDz",
  "key25": "3xNC8vKrEBnt35gji64RXsN18bg5WRUB7VBThJo1QRZ4gAcB2kxPt5RLT83oJn8Nu9GDkw2d7rNtHTbfZPTeH1U5"
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
