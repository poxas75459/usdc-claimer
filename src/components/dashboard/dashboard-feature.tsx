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
    "5sjiC8FW922K4FHAhiBhaeurs1mceheUDFzeQJHEmhMR3jq1NjoomsnT7toDhanj133V5HqmdZGK2hZ7Uw2dbh7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ubu5e1fez1ZA8wfxg163R9UQrSdrT2B7CLoffCYmd2ueVUY9hsSYqj55DR88LyCMNzqVbyt7MmjyjyZAdmkLQbV",
  "key1": "4DhAGPqXJG99Mi9BmfrFY8f9ETpx2757t4WBRbnBoyPXwM7UcxVKjjpZBs1L8JrKxv5EVdbUrXPQY14yWab3CSpA",
  "key2": "5gGmEKLJd5YqWD4uLKonLXFhQXPGwCJtp5xnp4TmYw7shfCaQ4yD4WnYpjft8gNmLXrR4Zn1oSGD1BPRcTKZ1L8X",
  "key3": "2vgxUaZN7ueeEELjceQekvdJMLNNmAxVEHxUkwJQfNNfcmo94ZQXoh2p1zx5AtVv2EigCtY2NL1qcDDBoT3Dmqpg",
  "key4": "2wc3E6Pwnn8fbGWFuNW8S58ruZzt3XCiRqNudkkD2jPfUH2Bmu1va9ETmxmX26NB9SeoVshrjp4B1Wa7WVLGHa2w",
  "key5": "2oPJeCqSMCC1w3pT23cR6NPb1JGyVNJwj2tKDYeFsMmL1cx1orjATpEYTBN8nLDF4mXuN5cTyv4ekD5L3AGWsDZQ",
  "key6": "2BkbdR5cf2SBUiKWUPMemZHURSeMUi1SLq4qqXGdmAuWey2J3QUj3oRKrMZL2pAod4HCPgqdokPqHtFHY5pW1xoi",
  "key7": "5D7tyguTeJFXNehr8e77XDfoswf7FmvvTGBRH4uQibjxLP3jKqft2aLGMqdYN96F1CMNHnexoAd5Cez6f3PdPKaS",
  "key8": "5aVawt8wrYbygpTnwhFR8DLS5WpopSL6vYEWp3h33Mfh4VyaHHaJ5SCguvnBN672XQxVSzkXwyG1XBjeRCD8PpWB",
  "key9": "2idwJZsVDvaGbgVMQKqa2SJuZZhm9o2bEXmqtjqPUjJCxkU9Ars1kcL5oAaYcnTeNboCDdY4YCkiAcQwxZjfw3bB",
  "key10": "pEwHPcYK1S7D1MKuVPDT2P4PqKHk52VugcsEZafnzCuKJw62X2wDXnNty4QcxymWRg6ibgbTuMj34pfKqMnz5AX",
  "key11": "55XRvq6UWcCnybdQAqBj4CZZtpmSULGKJkmo8KWSr5BfEm2Htqse6osY5wTRduhBZua9o6b63FYnMgPpwcK5gyDR",
  "key12": "HDcPHvxDqgDvZrcFUFuX3v7nFr15nNykYFoyJaQwJ7NKVi7eMh9mQF7DFpCpumxZ9XMxL75eU4xYt5oWCuYFTie",
  "key13": "57FDHfmupJcgDf8hDyKhtWzK8ktiuS3AfBBxq7woaK1HMyH1bYGNYC5wpr4YBA9dX3XC4oW7eKdk41Kaf5BDrRTj",
  "key14": "226LtDkwwkdzXPzrtHduAreUZQJtdANJaSY4m4sfAm5HPNrtQ2dYJE8aWpeoM8onRo8ae5wZ2HZyLabedCPcjjGV",
  "key15": "58qKb6Rf9FnRKPcwTEk1jpYoVY1zxwxjhU825Vf12M5jh5nXa63YLCxWs94dEQW4Z1qXX2vCd9Udg9MdZQZsaxQM",
  "key16": "3VwCcCtbMB3nPRFD9efAZ37kp9deyBXru6ibvazy127YQg98Akq8wS1vagbYSq5Kyx5vW4tiMXbp2V3gJiXPxt4v",
  "key17": "4X6cgSatzYP715LZdF11i5Tm3SiJ6s85SsTKpxaABMP1aYDC9PkDMW6eXsEd8GiiLMRU7ECCJjyKvhMobFMincHL",
  "key18": "2mNCenqU8qG1BKd7npWJNj7dj8pTwGt1AyphnxDeSD7H6w6nb1ibrcCgnubKZzTth8qTijKcbavwicRUhMo6dsnV",
  "key19": "24Jkx2vSvKWKJQGzNb8minGguyRNQw5431BcZcogjRVRKmWHMkCwp4Y7GVtb41oHGppFYAQRKXUXWMVSSYhii4P8",
  "key20": "3tKf6Dnb98Up85cUbN2gFNfYicUGj6y82EinLJbnRvYVjDak2C9AZHp48K9eRsggwH24eS9z7TDRhgcRGVynqNXT",
  "key21": "3kRsgxt8ueCMGkKEuukuMqy81Bi5eTNMUYvZKcojERJfyRUFGFzpehB9xkXFh5mXMi9spaPa3dt7cYfsgtPP5LNq",
  "key22": "67XvtA8W4tarzMPgW7HQWc7h4oaskcMVVXrb9cnAayk9XJ6NwvD5vYGGxYyb2gQJogyCpuZyLdLFwQ9XShn86Y3t",
  "key23": "4DizUWLHGWUR3ZNcg4oswxUHKbx3zVrtTxbM8Kx1n3M9oAw6PXX23zY5h12ztFbjmUUqkYprLvAdrSgZ25wB9riR",
  "key24": "5i5pa49hPBXZSSicPvYVTVnfQCTVAqvx9vpByRGJLunP33LSfsJdiS6XzZPxyKrd4adZLBLzhJAEbQYXFrhgM1PP",
  "key25": "txLV5qV4jHhPQ3JLjtJmoWy5iaAQHi44by27SYeudtvYgsHkVJVDdjFYYS1fmwZYAwuSasdbJPWVueSQX27VANj",
  "key26": "gtjC8qRNbDYiy2Q6cqxCrP2XhE4WpCLpjCweCLc6mXY42irksdhMQze5vZPvjPVkLoWuSRKvj4JjQ5BAfHr9nkt",
  "key27": "5pfRyHs7egeePzBguYzRpXWTpAFb49aPop9U8xQa3e7To2rsSaZ88h1AbS8xattcrXBqv5EfcsnV783ntFiATuyc",
  "key28": "3gAHYPNWCWPJnBHHuSGtLB1e7Qk8PuXY6mFYZ44jtcoeN6wFLbbTN8Y2yq7GSYx3Zs6khXjkmSDrAP7moMZBvJJn",
  "key29": "2PxRK9L18vyLkNu4xdF9TR8tFJWa4koMhG3WaY93HBcLkG7LMUYxUQtwhz3Y5TAQZqAvkkC8yC2xetKnsXMZkBBT"
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
