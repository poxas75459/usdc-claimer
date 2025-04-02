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
    "5z2Uw3dv7UHvq6Z2pW1W6aXYRwjtxyUrPRJSQgaTQPM78igY19rZd6CvqvHbsm1iyfDM5EMWguZoeFFAHw6DTyx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QuhnD9q7RGstd317aqLVLpD6ZHKpJmMPXgjjsMTb33HvcvefHkmcFoN8tkc44CbL1qR9bhfjAfy33kSTyFa8xc",
  "key1": "rsWCnJFjRiXu7iH8ZyjZeUBLDHmZrYcAJUFty3R4MhkoTKe7zVnjzaoCH5Ku8V2ua1hqomMsRKy4MRcL86erfm5",
  "key2": "61idvKD1sVhnSiDXefoi5YHjgrxQgd91hWBS2CFwc6d8HFEKsZenaSdsbTcZUaHtrrg1YJ4a14g1sWhokjDPRxBm",
  "key3": "56Cb8yYiU2WGvAixa2c1hdeDRRWj7G7d2LZUuUFyk7mx6JpCTzjZwf9b6pnT4P3Lx51dAWsziwENYuqjNF5ySnuT",
  "key4": "33gWrVcQqhqbjYjR6qX4j4jZfRmPhfcL5LXBsweRyFXWedBtUa2rRjwy7KtG4KA8myGv295LkEUEnhyHkq9Eb5bp",
  "key5": "5ZC8qvExnfq5qv9vnLF9S3X4ue9mjPmKGmAKt7LTeiK51m3CbkJr4X7eVaSsdgZwrxWyXUeGp4NBBMBfnTrk8MmG",
  "key6": "sejX6pcXHzpwcHPovC9DFDN67ShbePHRdVcQ4mLx7AZTENrhipZjysfsL3HfPGgwC9XPNivdknt7fo75LfYpiBx",
  "key7": "32MQh3WJjADPiB6oaxsW6CWCsc2jfaoXx3aFSBJSEqZiE4Wd6PwKRhNdgBYBqKoFPvcYHPVn4vmwxeJiLy3azqu7",
  "key8": "5XgdZ1ZPRiWA4sDFDCiPCbsdUHyV7V4FeTxb7EFP5Z9MG6MmQ7Q6Mv3Sakxm61WLRfxEsX6abbfEJUPvoWmZt86y",
  "key9": "5gQaJBR2dd7Xwb6PouGtzL86t3WVgGQVzm7xVbamA69SPXNTBpZMay6Rh3SpeKCeFpjdFV6UszB6dtp45C4CPHT9",
  "key10": "jbJdn4Jkh7TpT2mJuDDjxfRQrKm2MWW3R5nrURQsekd9FVNmdB69uk5EHtKs5BhnBhP2vEmVkuFHWcdk26GEB5C",
  "key11": "2SpzZvQ18X5TcuLGpzJzx4myMNQvbGruaUJDWihjKPiHT33aK2KUrRBWuJDZnnJ4zSZFuzYPVnsiQz3Xyv6zCwDy",
  "key12": "5oLFZCjd3kEK6EmMYEWzmnNFdS78wjKNCc5wei5fN55TGxMsqPbpvKUBMDzGh3M9BRAGNa3pNf39T8WZN3hLryam",
  "key13": "29pUm6Vj3r6TQaDUY9XAGtQo6tcrieTzgbQGMHjWEhSA5FrWjR1FFiLFCwiHF5cmKb96zgkewdcGNi2RrR2yd44E",
  "key14": "43nBJzL1RtSyoQn5AA3zx5pMVR6bsTccTZ5mNJMYaxcXVibHZq2K8bjeyq8wxjxwedZWGCmkDrhSyF4H1FdMxXZL",
  "key15": "5c1o83GVSXYv1yqonWNobLrP4GH5QxjwiAPGchp4We9MtoBuXRXMrUSE4YvV34RNRS1HqX16urjVpukpuqqqWKtd",
  "key16": "5o4cYirMSBioRYkQSfjXVRXu7XpsthDYoeAmd3E1oVptM5hGwz5XKYXKtUwpL1n9DKdbe8WYsF6zjxHQpdeXxumv",
  "key17": "62ZNHVuPFA9YwfoADgzmKeUddF9JnjxVJ26XVqRHA9TWoSsdBzLBaVuE776TDk5HHs4vkBY2T7y4EKXqHWA27nFW",
  "key18": "32gBXeTPa6srimXHijhDmA1yk6f9JLRx3oZha6ueTS19dquJoWVueGrQX36aEw6wFDi8GDzMyba83VocpQ2oZPqk",
  "key19": "3rvTM8cN7Wi3fHeiGZ33S4bWssjUw4sg7xGJ49T62h5oNWfpvePiCXivVUtwT8Wdyj1VPhrcYzvKngA2dDBEM2Wj",
  "key20": "5tjQBp5NnMdYkZjw1vPD5aJpJd6gfFTv2jbHZbydG1ci7Tv4fgKnxSstuZwrZ4L3EcqtSuUAwNBo9cG3VofH42xf",
  "key21": "5BindeC2eEQyzhUK8TQ9NWYKCNvcCuY6agQk4Ts6LFsgceqZ9eTdDuKrcYB1i7XYSf3eLXo6cui5dEEF1ZJZ927U",
  "key22": "5edRYTf9uF4JAVVjvkUkdj9BQSa42r8KAzU5X7FZ9JVGjWGEVnyj7KYemxKizT9Ch563XppVXut7huQeLGniD2fJ",
  "key23": "4jsnf1NpeCNqigkEKvqKd9EHkMpRcbGTk4hmBAREqBeXwYNj1q7XENfaNyHyMPU7YsPYMVnKRApP6ReDj3DEmBh6",
  "key24": "3QwuX75TxzGYuH1URTrRiquJarX6KY9UrUAwvqqzbxumVKNpZkzAfveX9fCcbocnbAk2ZYgT9fNsZdFoHxG5dp5E",
  "key25": "4BJtGiGxF9smcbxhQpKdbnBoPs9srJXwBPp7aPngnwx7hM1br1FQaVpME77hTbbi5JtNBz2FtUAx2HK2Y3qyLJ1V",
  "key26": "45rKBSrvijYXBSmbxPCsBfUHnobP1sG9YRRYTduaRZqJ5m9tH2tLgYDb8kWZ4r7cHi7AgKJDcDRqUWUdtLe7o1PM",
  "key27": "4TAwi63yNkajvWcBvhGE2GNwGaWspTHn4tkuEUE9xnhrEYyfsuLNbsPtF72FJrXHxx6Jg6GpVMqdbKDLyqaar1ii",
  "key28": "HSkQDa6r2GuBQBpWyjpFQm97T1TfwkKmdgshi1ZpVmpkA9sX3FSxFER7XNoHweSaKeYfQvh2B6FPFZoCKRMkhzd",
  "key29": "2HDqYcumwcRtuPnHwquEsVaZcKeKbb1BQZDAp8Zg6x7kQrXDAWDJwNsGMMyGcwmHJ5hHNtwcBBQgNk7C5dV7ujfw",
  "key30": "2NRagiG6EwB8DdB6ZK2feqAWaWYmvyeuncZycpvpadyBhRg9dnRUNbDaUVxy7g5dEAdGK4mqHCzy4iX11ojUtio",
  "key31": "5NJogXehfiS9rydiSdf6AkNNTTVnJPxD8JkbVcAKG27ZGCtTHXHC7S4Hh7b434RNYXfXNbg18ZzpmHWr9AVD3gMw",
  "key32": "B8e3kg7aajia92SoY2QBwKqniL6mn1nnk1S2s6XiiCpDhAFfwWNghoFn3yzonEvdieg2xk16PiTnTimvtREuMaw",
  "key33": "3nnWV66GtiDXgVrhxGc3xcuP9L94v67Vq4yEkS6p4W96UvfMzhJJFHZXHivWfEffX8xkfdE6s7J9Y8adujEvMV62",
  "key34": "3h2XyoWb4Yq7T5h3C1qyKMgSw9edp9Jp8VNGcEZWAxHkrdRH3UrpW6r6kcsMooBCUHBYsDTmgcp8RLAKZc9xkNUN"
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
