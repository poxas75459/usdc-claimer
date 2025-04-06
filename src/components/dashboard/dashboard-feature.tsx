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
    "5m6fKodELyFEpEPMYrihLxLi2CEroriuBqKwrqv3NRuVYNHpyTeYmPMTSAvX35EaXqHbuACQRoucdQDS2RfEeNho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EpPgXstsYHAMYcEM6PpDt2zxXGjgYMqEqGhftCYVETrVKNRoacHtuKXRmaB2AbbhNyf69zAhmp49wbjGcgnfamB",
  "key1": "mE4iQAfk2X3gCud3Y4s784HFAWMX9Xsd1o98hHx5o2Xrx2tKeM7xdHvzqmWEngvjRcAty9JvMeMw1rrVhFs6Hcc",
  "key2": "22szMVYVkRzS1YF3CWtjGATEugcChMv7M4XqXXsiPHBvhbeJYvXg12RxgzSdjtRbJgaf71CiDp9DGSNjzkDidXRh",
  "key3": "5n9PAgmBcivRXwykhizdKaLn6xYS4Lb4SnEzQFe4tdBBJgVRS6GZvpFx58L1bGcn2n5cmpxdfVbw4qha2M645x8t",
  "key4": "44v1j8SHGTXPtTy51i3Pt5wGke3WNxBM8WN5BdajwzDsHEVQzJToixmxCuiEviov3y3wMxNGWcffcg35ErKSRKeZ",
  "key5": "5LQw5kvJ3WYZhvfrUFmVU25hJJ3hvUjEeruahZCozH2Zb2v7pWp4BaXaoMLJfypvjF9kMcChfxPeUG1UGzhXFdcU",
  "key6": "4i7FCF3xDi8TBoZPfPtt3oHKXRmMAMKQGwwLrVEJjTLMqpPThP5BzqHwS7Rn2qRxvsjTn8Ci2rBgRqTQ9TdVXNMs",
  "key7": "tX4b997VXjzuSdyYHgtWswbo86kSqLKyskRkpTNXMXzrX7q5qtYUVFAcP4aMraByjpmQbBmRLhsRioTgUjVJX9g",
  "key8": "54Ws6Tb8TKnECizbTsvFtQArT1FKwycBDMCBAZEVY5QrJ57MTc886LwSXmnWdoxyBZMhSfMfEnPm5wgUKSV6fQbG",
  "key9": "2rHMBT7zoy4ya7Kgrib2ochwzoi16Ddih3JgjEDZUT4kuLZhQb1sBgvQ6KVQ7L19HX8zMFqMMXW2MbpwomepVFhR",
  "key10": "2VeWY5i9ZRUjXQdSFVj9RwU35uKXhZ9FGSpd4LD1dQXYBno1ZJYrDxff6A5NTPX8JPzJEMNo8BKWnhZ1qTmz26js",
  "key11": "32eKSr7F8CunmUGauuBHr8g5bNh4wTinnEorS9cquYXv63EviN4NwpvSUcDtwSp1mzsmC4gziMAiZE1AqrYj1acJ",
  "key12": "4VqXHbGS7gsG6aZVSSFZB2VVHqU9jc44w1i5no8KGRPcvZ4HVV4XvNPdRE4H887Y8nviQoKZqZtfhz9RBaEpaAtn",
  "key13": "5ENH9nUBoZHuBiQtCEuXXJJN8cWmeC41xCUiHUVn6x27z3FDEiSJ25y8C6xZcd8428brTfXoom7jEeW7kVZroU9u",
  "key14": "26gWqEUecKzNq8EnjbsWacLLqxwdhshkE42T8rEq4A977vKHCsyB3unvq32N43fbkEErpLEHAqrYEqNwzFZFQd6u",
  "key15": "c3JBV218cTmcY24ALmdDESD8jptqheZA1Cud8foLvgWqgMY79KM6Yb8NRxvkotzh1cTBiwVGG46x6Pebwo5ckSg",
  "key16": "3522QgvAZqcHp2mJ7gbqWMNQNcLpRag5fnZGVXdWyzH2DkWAyJkHBNNUk9kRYXr9tBCoK9J1gqpWfL4QVamqnAUz",
  "key17": "8i9xGFVVt8Vzrtt3DGp5uvcZT1psme8jx6WmL9wZTm5GXQEeSdtL1ev6h8gXgdUFewXHnQ6qD2XgyrKqhb5UBjT",
  "key18": "aQPAHuYcfbeuVcZJQLWQVWYfxQeYHuEC6zQFA56ASgqCgGU3kQYcjdVDjsfwUH1XeDx3FYG8BXatBHZ5U5omDM1",
  "key19": "61byKoxneUfwGVEdS6bxowZqmfSPYy5bxYiB4jkW8ESrx1FK1QZWp1dcvDBsaYojRLSVfxgyBoQUxQtcag87D7Fo",
  "key20": "5n7YLwv9vdasHsVXWtHdbU8y8XSG6e5qcm2V3XQYdKrgPPESEjPQt29LxhQLP3hocv92kXGwJAiSAXetnsk5ztLp",
  "key21": "4k37psY2DcDoK4KZhp7XRTz3q273ChzuJMfKDaaoNpFXKS6BoXFzQhJDmkjP3rofZqqdk1pZbBiznVGNJzAav1hF",
  "key22": "5gfdNYTsg4PXeUfhcxJHwgEk4Qoh4jP1PmfTGfDK1D7tHJhUpW49cz39rj4iDW8u4wwedM7v3RynFK5NgypW1Jzj",
  "key23": "59U13gvsk6Kc35nGPQtJqzk1tTN4eXNPT6MpjezRbd34aL4rzm4MS75ghNqHss75EW82gsnyyu213Zmd4YDT4Hu6",
  "key24": "5UeaLDoPqVXeTiGLnWsp4DKSxjmzyyR21HkGsoYw9jasaPuS4B1Yiz7W3KE47xCPu1UWG1fPrt2ys8GpKVmEm5EA",
  "key25": "3hpzBED1ZbsiDzAjjV6KZcn4iVeSYXeYzzjMnoU3o1CZrcmHBAo7yAprb5GXdF1HA1u9mtEUz5vvnfhqysQK39KM",
  "key26": "cNJcRTSACh4MYv72xZCz32F5JfXkYrASB6wN1Ym86HkyJufAFAyvyNUkyG7vFgcwkboQVkFJYTFXrxUEjDH4vpd",
  "key27": "g8qdNYkj91yzig7Qb9WPmNeKs328aaYUZgLxSByD3B8mqSKWu7TYq5gEv8MgGcckqQXLc3xjR2stLEXPPTQhrM9",
  "key28": "3vYshXgwvhymfiNF6GiJab3Wiym33UhCjU8fpyGmPkGC1Yb2LgvG6rD4KmL6CVUX6yBEsQSdgh79p6E55JjohBL2"
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
