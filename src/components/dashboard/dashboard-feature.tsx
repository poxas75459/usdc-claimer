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
    "66kG5d61uHf6EbQ9k3RWquUUHzdVGMP4dMNxw21fmLVZN4spmkwpAZewoKupUyf7ChZ5FrRsGyz8Se74kWCPeyw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcfwW21C8FSwFFegdY5owy2mFxVmempD4mffyQmsvixoFoi4ve5mnwVxEPWprJxhPNC16N3YAgExqnQ1TeaXUN2",
  "key1": "5ACo8NsRE4StAV9Fo9m67e2iQkutEt1gFAAKUTDQu2spAsTuvKVsxwYAA48g3YG331nKdutWhsr12mBfCxhwApeh",
  "key2": "3H5jXUzAzbniDWDy5rg5dBjUNjESekbBJ7CzYtaewuQE6279h9v9KGAtZQE6xw9hbtsHN1s5iZUodFMLsWRnjjm9",
  "key3": "5qbTe1RSPsYUm5UujYU4adgEaE7VAg3PWtEncD1oUQYSvNVyZQaeSn2yW8Zz4jV97PoHPierjxfewBCjbcMaoPoV",
  "key4": "3UPS35Ftk1JcAqAV9HKGtJGvLyNzaastfazww73uQC7kBddpPWYC7RfV1YStMiHV4LgYq5Z88zqY51G7x73pRsAG",
  "key5": "4mdiZXToSeo6NZSDivu7qF8tCXVTs41muvkPjyJHSRPUuVGr9nYshdmV44fo3dzqvApdo4EZTERaZFnG5uHjvn2s",
  "key6": "og49qNLPhAUJMHTqEe2SXVUfE2XmaS6L6uBiDZLYcF6h9TWyejq2ZsLVyBuYuDwaqHzJa87DBvpsbdNa3eEBJHQ",
  "key7": "rC7TaASzVowyNsqwEPxWgzA4sMC6Bu7cyahNxp4szy7kwF7K8hHDxN7hSBr9vVHrzUnT7kxJMH58dyrMCnTetBu",
  "key8": "4opsDJCYYZGWuxoBws2QXY2YGqZQb9VR9WwJftbqKMqf7tfKLuaiQErMqsLi34BcBBc2LuGM8BrtZTw1NkA85s1M",
  "key9": "4ojyBQrYMNkGdqFJu2PDpfWTzcAwgKQQ9XSnYG4zFnrUZ4eVFHdrQM39UUCs7CrEKC24RxSAUqmuP5FgE3KiC2i3",
  "key10": "3TANEKLjNzGnMMXckU6v6buhT7NrvTz8gF5sSAhW1FmTFWb4wexiAfqnDTAE86yZu6iCAVQiJVQQbffJLkQy17yd",
  "key11": "4JPf9eGqcj84tGrquTFFf4ZZjQeKSvktHPHVVKopXYSQE5cti5DxFrpqft9Yix2jEBVKzRZGdKKUHgwAj3RcGbap",
  "key12": "4kefSW1Pq5SfhMBo5F9dWTYZZ7mhuV8SHjYwkU1Xj5bpZZSwY6dHMsFo8CEJFzikVz9UuPDkGoUY9MNfqMdGENZs",
  "key13": "5TEq7ozAwHwv6AwbXtqWP2nbzhYQeUPojCUz4NutzNmqhDCquNDPrbJo1pTsoeUJnCD9x79WiitXCxaYihb5VPHM",
  "key14": "j8SkhGAbCw3UK6Z5SXYhWkAbrPPb4Pff8FSRthbCBbrPNPZzzoYEypPdxNFMckKYESZeofGEsUpQRFowpW8K36G",
  "key15": "4eHFvzeCbA6UTKGyk9K6x6dLpdEoTxPjsJKuAotD2orVvuFuizow4JM6T7XRtdvQ5k8eHmFFCAF6QUhEzht7aahc",
  "key16": "3jmbUqbkM5sbrHReBm8nEew8Wr2faHZvHbcHCuktFvfWxQ9zr3hY7VtJNAa13tUH2fwdekeFd8qRwex5Ns68ZhhN",
  "key17": "22vWNcc3M16ZeZGLxT9xmmgfr28m9YrvHT33Ukgt2NvHE4s3YUR2ZoMZQ9qkUHhndoNMwDmY9d1fpKH3exxPx4Rc",
  "key18": "4YpVMAbEuWKjPM4MgX88DQh8ijExaP8V5vBQ5AfFaHQAGLHxNYr9ngiAHvN2pGD5mV9J5oMkmsDdZPu8PPrPJnz9",
  "key19": "4meCVb9iYp9Jz6Y39ekoLCkBVfZNwyUSjDnPAcGcxkL6BJozTSR6A6eWrhQo9N5pUXTHFgu8vUm4Yf63q78mJ3HH",
  "key20": "55pseLdpqwDKuzJuXzh7WGiSpF1LrfNpp24WRz2u8V1qn2kfCKBGFFzL94nCYGdoQFteo1DEWWeLFrexM1ZnPGSg",
  "key21": "4qvsKu5SBf9jPVAGmpCYs2dQNLAaSfVXe9F6a8mrwPeKzs5tQeKP4TAx2bhpQaZnkJAToSh7Aaft8K77vec51jQn",
  "key22": "55NJ75Qb8TayDiAKSfNdwkM5FsTQfAVaeNi5zuvVLMYjFM9t5SV87EnxeDc8sr24NRshQtizS2VGnizdEedjymiu",
  "key23": "hQ6fVCpgxrfrDj6Q2Nfv6sYEJWP9upgqbBFe1pKiDisYv88HS4BZjDh9aNCt6mH4DiMEnfukt4GtWs7QJ6NN4x3",
  "key24": "5dsFaYSDbFfrxwkW43SaijCxxo9uE9jRkMVUPbMmRMUbgLtaX5qunmCmZrpkLEX3c4iCSvpk3ivbxqrYmDEjLajk",
  "key25": "vmfNsMi2M8EgabAndVqayeW2zTwF81zEDpA2vJ6F2JhojAVLY9BYCDfzjKSg28HG3kNcyW3FdgZH6EauNTji6Es",
  "key26": "4CX3vgL9C29KRF1E4qm8qmoco4svUeoAMEd7TCX9xB5FMfsy4wCuo3EsB7k1bBsxyYpiQNGmVidiUiqE3v87GmRn",
  "key27": "3Ft1kh5wjLmPdQhuXGFMLNeNfaQUHpiU1D7mftHFjaRQst53uVBnvwSBV7wW11CrWuTVVDUWeEpQkCsMAF8xyQLP",
  "key28": "TQHw2b2cAymmxpBjkPfkDXVsh8JmP7BDpK7XhBaBj2VPnUFnahknoNqttxW1UAh6u6pXPqYXSdM7VvcGmNDF7E6",
  "key29": "5d2WTjirfXdKvBpZqwtSd8QBYncRCrD5YTHJQAg74ZtPy5GXjVW2QDyj2jifDZBZkkprevhbC2bhMg8FiHZXYz5F",
  "key30": "3FFhrT8mE3yLwsnAVNkhFybfHq41wYuvMyJYAFdWFBEgvCkUhXUmNYmZES1wTP9DGZ9qXMegZNymQa8XLjWSKR7y"
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
