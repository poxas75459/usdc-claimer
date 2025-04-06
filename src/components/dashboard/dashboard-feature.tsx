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
    "5GFySNUGPLDP4wtCgQNdqnLmwhF4oBjhwXdj1Y4BV4XK1Ynn9zsi8xr76qkcAbKDbJpKnKPKbazirjhzNW8FV9Ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2327UzEeqKUMX3t5kuBoiESiyLZXgM7Wmdnf7ihytCpAmjTNobnZd5GZUZKm8tGB2pJ6tL9mt2SrQDWHa2J5QRhX",
  "key1": "4wv8SRv4T5TB6HnsNqaGhCSWWqPUsV4QqrTPNpbRoW7oM1BNeCNawTnxGrVCgf89hgyWcQ8yCXwfaQN39U6DAvz8",
  "key2": "21miKhpBrMc6fibHhc9YpDGoekqes697U1dKrKnbHWYt1zyjtU3FvZmzvBiHDXxjQfa9t6AYYzZzSdQeZseafQnB",
  "key3": "4vXQujjcjz9BFpQUFaM3La1gjAayKaomU5ALUx1RFqDXTU57sJj2eTaGYuSm59gNGUshe3vLTyXNKE2HEo6ByxpF",
  "key4": "3dabs61eNgBT1jDf4HnTzZMioP71jHwjKrTEBsvgvDfi3AeDKPXg91cAPcyfJXbXDN5kihda6JaxaX76v6DnvYKt",
  "key5": "3QXVT3GHHZYw8n7zPQwTMv8cTF7g5hJ65NnZLAK8SNGoBjHK2XmqUSck5qFyTXWRAkAiZiv347aDGZubajPZ9pbe",
  "key6": "4PCP32GBqv76azaGUmou7KSwcHAkyU6PBrWknx57WKutMHR6VBCeYmrXYcbq2xzPMLiqWJM77K95AgChiP1Xnofq",
  "key7": "4J71rTrAZQM6wTUxmSoLGAb4b5nzdtfNwRux3ocFk1woAcUvhfm8kNKUkfuncwSUz9H7pHUsxouX8kaYe61Ngb31",
  "key8": "4UX2rjAc2vFCbh88eU5fKjyXZG8NDK2p6CwtGAyArEWa62gig6rXghBwSfnzk7Sj3Y6g59wR6b16hjrmtApGA93Y",
  "key9": "26jxgqW3q6Uhdtna5JpXarZdJxcomwHY3CNmHE2N6Xm78k7JNN52n13bvn8bSVXxqVWULYYb1E9X1aHebRXScgbe",
  "key10": "4Bg1LdFRQXjGE1Df1nYcocgGK1jU1kCQnp6BduHWySaJ4KbGcXxCJ3hooYGAKxCMK53S1CbEsGfp5p4bD9qJ6Ed9",
  "key11": "KwANd4fMcQnaxk3J12AqLpf5KcWMZwHSBx4Ut7UL9t2KVRoLktwpU3atnQjdPfnM5K5CHvDyhzm86R2PCeMm9kf",
  "key12": "4gmKXfEppcyBd8wwoQda7EW46GCznnAF3pepZF2PdCUoWMr5SBiaiQsxF3NfFNHwFSssp5CijZkPxrM7cbkxFSHn",
  "key13": "5PDnF4m1uYMxRHwcZwoX6TkfBA2j4Y6GmYtzBbfHcf1PA6wBJb71EhbLNpQwH6oYydcaFX6LUmof19aXBEjXbjfy",
  "key14": "3bjYWXL5wJEhY2i9bNf684X3VbFagn7CeQ9Ftz3kAc9cRU6njZRow1ef3Wv39XQhGb2Bst4vSiuerZLqS9JFV7RJ",
  "key15": "566iVyKjCrcttNaiMQqUPECiMFxzZ4sfCu3d3hdqTiC1mof3rkZxvUimHd7R1cXtGoTys7KVg9BbkG6Kr3ugzF31",
  "key16": "54Tz4LMnJpW2S2k1Qr3cgWTmM46REmTrDcWGvqhfeAoJPAW5rND2eXS9AVn5xZh8yFnK8b8HTfZxULdBDoxcD9ei",
  "key17": "2waG25GDWDJw9ce1Uo6Yzexr6ocNGiTzRDrEVFDoQqc67jhLeomPch2M3TfKR8AejWy9JBwFyTgZxsPdYkLTWL8p",
  "key18": "5BAjwx8w2s5ADeu7qkV1d74KQu8hhLd8V2M2JkTTsVzNZR6ZfyvNzGziXMqmwWx4uZaWHmzTay4aBqPDVzLoWfqK",
  "key19": "5By4EJ3YuQRGmve8UeXq9SDFqymqzT2dXW4tqbqpmWCjYcBcRZdYAWdc7zumoHLYTHXpfUve95h8PZAC9rBLkaVE",
  "key20": "4e35DtvBkU7mGVDMb2TFmqwc6bUM1EDEhQemWCn9JLT8jaYtgT1mdziuPws9bWzkZnw578FMdcZ4p6fV85Bn3FmL",
  "key21": "214PCg7v4PBS2DeBCb7ZnkTEPZrhBVHccEgQRNhNuubfugfSTmmX5hNNGYZPGz5v7VvBnV9pMvZZCJBsiTGGAZy3",
  "key22": "5sQpfyGirdF4d4sZNs5Y4atgXkUDChyQvXqswcXxXsqi4MAiJGzAkQSxioWtQZ7do5fLPFVbqaNCNfotxLWe1faC",
  "key23": "4izvQB7p8eZhd6w5HeoWDb1bGEy7qcpKa5X16MAYJjK6cpoieLNLmJA1yndN3A4jTNZ9iEMFSJaYGNAYC51jRy6P",
  "key24": "3pgbnCQtQnVcGmFw9hxuwtK4JYXfZeYneHjRXmi2w2DCLTn5hKhriJfLikbvZdmAn1gsRrCxjAq6fgdT7JmoXSYL"
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
