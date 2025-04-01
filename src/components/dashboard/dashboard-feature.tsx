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
    "LvybcFG1VNt4vw9y4FkmLSYL4ceZH6VrcNWUfz5BjfuwAQJTXnNEVFsv74JPA4ZY6TsiY94n1NU7F86ff1z9rU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VsNHfQB9na5CVFuVSHqN9fMoujYvBSxnQeCvorRjo8EdNHCJZavCJHkCtr7sJGm8QGCUiWAdV8nh8ihw2dnB8jK",
  "key1": "DLyTku5ucYBjeMttenVuoZHughWUbRcg4F3kRZpDtz3CE9GoPp43iuMUgzGQzwRpQ7Rm4mpepYZYYuf5ssRs46L",
  "key2": "5xdt9doHqiUf2mdEcD5yz6WDP8khgcc7NRHPP4uLKmkysYa8qPXdGh48x8jBvcNj1bqA63DeBjFYtmYqtcRNdo84",
  "key3": "34xeQAFomSjeK9m6A7FUhReuCxes6WEjJnfxgrCqfHZgwYPqLGyLqiysYX2qBWR3dJx1wpk22wUFfZ8XQsoPgoui",
  "key4": "kDqaKSUUpP7WtPYkEtJhvjnAV2D4nj7U8SkqNn5mcGGUhmH41LY7wtxAfXTmjZefsRdTtfEW8ihLfiV14Jc5RXF",
  "key5": "uxvm5i6DrHRB1N4QvjvkNWXeTshr2TQddtLQ8CgwzfxcYB9gLMo4x1X6Sx5FEg7TqnwVWuo7zmSfGXrs3cPRUvM",
  "key6": "42emDte7fkia6KhyYCycETZpHvtngMgg7vZrBX4dC2KHLMGNYxDJrqxMHVK4116dzyWGYLLgKd8vhKnCZoeHBKN",
  "key7": "3wr3d2cE5oPVqfLqbFnwYFerJQ2BhamnjxazeV5KuJ92XSSYNjcKNDXY2nuEQCd8eyzYU7M5bZnY4pBNzUKFoB1L",
  "key8": "56SkUh5QdfzJpKfRuDEPp8bYneiPFnzKwUhsmrc1oYyGniMDKkEM3ugA97cidiBwybK5WPS8dify5FU5bKVUD3Np",
  "key9": "sa2wia3CpDpaLjaN1qcSBXJES6hgqRd7A2VYM5nP5p4Myc6PzaBq2r4AaE45Cry9McWtvSNCU1MXv9AXZ6SDWsv",
  "key10": "545EvQbZRWxUwhF64rVRQ7v7Ho5QMy3hCjjg8HUrtHDTWkTw986PLd3nukJtLWcQCTEqPpPci8cBM8ftxQHPvz3a",
  "key11": "273PdgA7CpwBgiB433CbB3wFs23EVPgWTzBSVKLas7wHbEdgdqHA89RDb4gSSDw7wLwGkzytYtSbyARjvnbDLNgm",
  "key12": "4Uk45bzSmJcpFbiPRFDFJnzSPmEedij6tfPS1y6KQ39jyxdHMQ3FmFN47bkWiDjbRFiPp7MUzJPA2EzXrcNqve3h",
  "key13": "4pffZLRYZHRKGVsoPC2kGCPawhzAcNVDfm68qhn8TmmWbyBQeiFQFPyFh6qKkmk98YMoGNzqG23i3QwKwYbzttyk",
  "key14": "g19YrNsEneiVsTHAz9gUGG5AnqcTuRNdXEn6KFxp7DqFkkLxwoSLwzjyWrw8zEL8SafcdGSVvNB9v4DMo1tWBiw",
  "key15": "TC4WXLGc5uAucAhqVTV8qCKC9AQU2uQxvgnrtGtcXnEEWcJZB3WEVJtyubR6TLpQt1hMBKS7gsvDr2M4L3M657z",
  "key16": "4QNoJr2h8THW8FoQWigFVqfao7xr4WDBn8CLfLEtvDicAfaZNVmK1kQbNeSzAP19rYz2njkXoVpNf9FzXAsRS77Y",
  "key17": "3YyDAbFkbhGGLHa9eAERVYtbVoWrRkYNpFS6L26PUejaeSjWVSmEF3fLrLCHUn7TehACjWWXMwDJF2QdGfxG7qn1",
  "key18": "2k1LReKpGcWCmwn4Q4k9YGcQaFJYGDdgnRGbNwHp3rkR2GDQJvherFXFbhmye1xFpL53xXJcBRR2y5G7tQEEvkEA",
  "key19": "2Pkd3ij2Td2jeb2bqSmsfBMLKKTn8n6jjz4mEuhVvVEp7oqP2kXX3ryjtMmgiBFVM1Lxbt1nLAR24rTmbqShQTCb",
  "key20": "gwDscZ2eMo9Vkyn5uTi6UtSxYKxi94cWYx6rTWk3BN7huvsJ4ZjSkHhmw4DQpr5KURV2bB5bJJ5hZFzXMNntToE",
  "key21": "4s139FicTUNHze3uKvs1CyXQBh9Hicizzxm7wErQDheV9Fyp1rWbHw1uzW1H68WhteGPUS3iM168QqmcbdcHdHnj",
  "key22": "2g5oGp4Sm96b7amhKQHPJYTf8nDhdmoyMrh3rPj4he94Sezn4Xhn6dVSZBzCFpTnjabhaJogZ4goPyWdw6c6Mm72",
  "key23": "2o6AEhF9xid277VeSRd5FGX3bjgsdYqZvBc6d1c2kruVFVSshrCr9mFrArphdsmV9h14Jis9yAs5muLW9rmzoVma",
  "key24": "tkkngiKiUV7hFjccfUuQk87Kdr5yeWpknFHvP7jp19RfRVHjubwrMeRwJhxBCKqgJmJraPNwAPSYrRx6ev6UK35"
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
