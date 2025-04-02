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
    "52AbLAA1rCjpJnsVWb921wWzRQgrPfMNnFoeSUr3Jq2piJpMkVJkEueDzJrEERsHf8FktUmToP4VMo2WBcJuaKJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gzap6uwQRi78cNNLkDFEXHUErLw6RQN7i6fNYiZCw7BvAh9FM2W3FvJCHQw9XL8FNWpVaRwK1RUhby5ANsmUYP",
  "key1": "4EK2DdFoCWQkinrcBLDdcuWa3Fbs89QM6XKTFDP3rY5JA2UJonuCSbFtTEqUAMr2U1DaaeeVrQpoEqh1FymsA31",
  "key2": "2B7H6yJHB5m7sN5Dbxmkvj31ecdD1ZYK8T5mek6Dnen3NS5GsYXwVguLuuM7zuQbCP8ua72ST6Aoqn3zNY3jwxxf",
  "key3": "4sZvzvCSX1xp98ftDvy881sk4bQHktkRqz3JPDWXp7jJKC4KzUVxk7ko1zc6HTBwNMxafoKqs6kyVGxsBaVa4Xs1",
  "key4": "nE2E8uYzPSyVTnQ8KD4u2U1gjQVcUYHZf9s24QjoszbCXKdBFgXHh3FKyoXbWNf6Lb68ZQAcX3dfnuMBEAdm7QR",
  "key5": "LdbembwgQSUP3wr8sf9c5LMsvj5qFCKHVP9kNjMEoik5Ss5XmS4mNKWS9ckyT4gRGFgzgGW4ZuQ7FRpYUS12EbL",
  "key6": "5mVtHJfN4fLrqiXf6CwLwtW3t54SgWkSfWV9QEUPoXfiEynmiaGBwz5HhX7ibaZodfHDpuxT7VSbJdgQUUMe7qkk",
  "key7": "2m82fQgxFBejCNcPxXTAA718fpktjH5XnsjHVqedfdtPEKiSVS9R2tDGLXYXjQmGhNLoGnvMDmPRT58pp7apVsf9",
  "key8": "51nLoH6jv44cuH3SWdQnPXiobjHjG4HymTDe7Gbc139qiYAMk8ui1aj6y7h3GWGMR9ZzC8zp5MAyRfD7swEEeHyo",
  "key9": "5BxNf7UBMkPz3vUdNdub1cUQ1qViVq1paP8v7mA8DaXNGP2UgAC8mPo4w1iKqFT3u4zBgi3CzUHjoYpGAwFWrQjK",
  "key10": "TiytT6XVQS6qABxjKruLQoninLhFm1Ua5ndKCRAE1YkSeCwgjBEZ2bPKHXizexsbUwz9X2d4KzohX3ZenJ13LZA",
  "key11": "6PA768qNTJv918hicMzYSgRd1KLrK3P3zswqZZjXLFB5N6naGrccvpUFqnTq25UX4DC9JuX4xtCqFPJWUULoNvv",
  "key12": "67fYTNeDFPh1fpXeZmYVJBhPspBn65zfBx5UoyBjuCySLp2LfRAHgikXAkioNb3L3qpNHNkkV52Y8ETcJngf5arG",
  "key13": "64G28ABHfhWhaJuPqLqCRRdBX6S5qYaWGtapHoSGByKBfhxrCug25SaQu68Vah18x5FAFsNjAHaxRHM49dW2VziC",
  "key14": "TSHKQKRLrYCxm7FkrZv7WmxcTH6JPeWVjQ8iLEpzscqbMzkaurDZFryR7znKikVsPco4DFsP1jEuvK3qXHKrCUu",
  "key15": "45QpCFV15CsbvQAHD9PJTjoACZ7WyWxe6m9LZUxsMRujXyRSWHQxud3DLwPHyzFJyfABKREkuLMWqDdHqJUp9gin",
  "key16": "3o1z7SoUGC2nH4sH2b4kQkbRDm1Zuh1Du88EkpighEVCmnaDphCdCcoSGeyuUWQtKE4nnug7KLQZeVwsied74kHj",
  "key17": "466XAVBHfCzf8fZp18Jx4gZkfbZ8WzojmmuroqvaoNxgfatdLgVA8H9FsA5VQ52yf58h7owxGE6833b5nMNQMxc2",
  "key18": "493Gg7UJiMtPiMvTQZKEtzjY5zAhoDCDChj3WxByc2Dui4abvNxVCA6xfi6uffSaBSmH3UHeB9uZZXiyK6YRzrk4",
  "key19": "3WbNaz2KNKmc1hVfEymp1niNmsNocDmGDmKNA7P3HXT6LdmSSwPnf9LuTnMzGWXtgUi4NCTgkdBaRgdvHo1PEMf6",
  "key20": "22Mh3P9FGq6UecE7Y55qrWWaXLPQB2eCuqm54h6NUmJNhnENC6JC7z4azJa7jhdWKh2LpBpftWEdZbG4EXdbHp43",
  "key21": "BbGehHkdEELGrtBfyZJ8Rvw47ftBSUFqRVpdNSoLvLZB45hLKkGDeD1QS4zM5A65JFvgCJXByoRYRsLQ41WyqqW",
  "key22": "2yyh2KPdJ5MqFTsyzQEFS3eRQXvAqCnXq5XJwjuLyDyQ9KXE8ZXasZi7j5rP7181LmMJsS9eLJHaehHkLV3Qqgw1",
  "key23": "mQqd6odgmQyeVPv3HGrY95EK6kReAEuSao32ABmpRVUBrCrRYPZLpTXFRXc63JPL7wyPMw7o6Hz7dDHY736LvyL",
  "key24": "2yKermsffCud87L2doLB6CTgv2jqhiuyJ5gvzmxDchLvwjRUUdjtdsK6CMfk6s7CTdEigrHUQQcGS1MUG3WrDLGa",
  "key25": "SmV9nxmmqhxs8wbXT2DvNawVzKxRm1tqEYBZ2vmAUaNxPnHSos73czVUcfFuq4xkNJfPaSPqFkDvaCb9MhgyzkD",
  "key26": "3GyPVSPms5oJ9ZF8upHR7S2C6DZhVeLC7qaLdZ3zxx3LaZq5YvvExEZujRaQVNefuCmDLStVwPt2JL7KehZ483tj",
  "key27": "tQC81rFMLHqZsMAmG3UnrW1bgyPF284tNGLt2d7fXHDcvajj9LuMFXer9EtmxgJkRXkf5rhmxpqsuDHwvhoS35F",
  "key28": "dFYuvCWkbHwk6h2japxVBJmXgMhL27wG5SFJdj55ArbpzgCMH5gJ3RSqZTxzvkZ6ks9t9K1WtiB8gNnGGqfjrsp",
  "key29": "2iLRzF2bFtWNQ6STEbcmBDj2FDePWYhBtFbQGowycEWUXvVXKjW5C9h8nAEXF4c8Fjmy4VdoGLD4BVPKQh3CjAKs"
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
