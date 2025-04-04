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
    "2EvToZqqE7aq65cJPeRKUYkn3RQ6UNeb7E5Jxu1bWpiyyj9yUzEjQB6htekM5oKWfNXY236XprNAHfavQiogHTVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QiANZxwbVwmDqe6tkpVUD78169GNyQasRfNAP6fzwKgEucbXH4C1SRxRrX4vCocWA8VnyH3EFJ47kjHD3oFJwGT",
  "key1": "4GgDfvw1Xv3EqwveG1wSW9eP4DDfN17L6mrFF6MJ4pucDCzXuSvF8WFS2FsLvDEWFRXMsmHFcoGs3DSh1JF41CGJ",
  "key2": "4eqUBcBxS4Ept3nhveDQJaY31XaostovE3wpFA3vWFWyXLdVcpQusrierduZMCUxZCAPRfhWo3pqtS85GB79TaBY",
  "key3": "3aHaP369N2NJZMTT7Qu2Ha7HScAzy9gVFqTNEUAUu59AGJg7qg9RT4sgWyU36cQ7xPDP4kwu8TX62sj7xLBzVgW8",
  "key4": "2jmfqG14BCpSamwPGBS8Pzt6nYct3i5fj75qWeEt8RRfWGjXdhk4m6JVP4MGcUWv55MFuzbUTwpEM2DH7o72XMa9",
  "key5": "5FSkgGAsya6MHzJMLu37zP7JaaSLcpjZGXDus9HDBYREbXsij13uc7kDLtMCQsGJcS8TGCdxcMPMAxwdtBVtZPLv",
  "key6": "4NSxRBERkYJH4SbqaqhNvektePyjSFVTVJdnLBN2FYgSt7y8noTCyR6N5VesrerKfeYxzHCUxr5XJwspz7BYkPxu",
  "key7": "3VGx6DVKXHxprFi1osVBFuh8tdTiuFaArdiGnarYdQNikp4amjJfhAYDec5NdRxYfqppY1MyDpr9rqL3m6qkN6wr",
  "key8": "P78ag6mHCjS3xjsX4jLi7ySoYdULm24USVtSCtsTkR6boLVnZ4HjiLhbQLCJWHM3rfCZkrn8swtDXQE4PzqFMYp",
  "key9": "2gcpDvq68irGqsm53VNvH72ziD7D7Gthzx2GRtMwvusKBq8VNJ7qtF5gpTsWwjfsCxpG4S3wUs5UVSTLEEDMLpUR",
  "key10": "2maqqoifBsJQj1FMaRWohyaduarCDfN4xR5L6mw2ufwZkCtCf7h6f14q3xtG5RhCck5yNun9SDhhaBNegkiVtTmn",
  "key11": "iwSAxRoZWTxtVwNWQALB9k3XMNheLP6U1uytfcdzcLXBmyCtepEGJG6ZzV8tCyK55cW9ausaYfJAsbcHpxP6KJx",
  "key12": "FFWw1Gst7T2E3pHpNQmnbjvZ7hrUzMWYS29c1XWiyMonZDS5GJBzbkUMvArndgP3GURZHqxSSLVLDC6Hvbzk32x",
  "key13": "3xLeUkxRUKwbRcN9R823bURApev3Bceda1V1Hx6BxHdf7xfVBhdEEkXsLMvM7A3hCrbA4EJy7ZfHgws1BiNNMTVA",
  "key14": "4PD44AcQphKfgrkfFv9Q8BAqanuwiV8iqaYdg1tqHucYKEoFHsxgRW9NdpL3jtG2HaPWQnwRu7vUMVp9GSGUdc85",
  "key15": "3N2emwKzqMUSQZswJEZheQ9Tj3xDZfMCVhdR3a4PEsacmatRqPq4AQwusSTyQuqzycoNQGNzae5hmrQy4hw4nPhy",
  "key16": "5dcT6S2ugL14DV3ZZwdmvwGc56pz1g4cD7EwRtKMdvqzkbeubuNxxpbB5UtJfMbYraBPuyK6mxgJHnXQsFAvjLp7",
  "key17": "2drg11KNYAR2XiU2MoU5MsGaj6gE3w3KZUW5KkYZS3zEPfsg9faq6K3MAoeo6pG1xEGSYGmxw22ZVfqV2Rh6mwyp",
  "key18": "nkCRLT3PRczTMskjceUznwSJCJyu4xfEQQJqGU5tNqT9yd9D6NXdrgLJXJPrZwdQGDKL8LGbK7jtZDkkfxSqhwj",
  "key19": "4HQJFgd79ATuhsqPCejczZKuKc61ZP2BjMah91h1WujnSfznG3DPeTok48AgoRpy2FwQMT8UQYW14f14Ltpv6siW",
  "key20": "5R3mMUAWLA6iSPmWTs8KopSmSdwNnfVZeEDxgZNgAGTb3yXHCCUANU1dpCMPD5Qh2VFuxhNAaj18Vp772HsHbq7p",
  "key21": "3hi25kGHQzQ4BqTueQTUkZ5BVvsk2RHXPRYxjVomxEcnmhsyYkAEcpJWnYj1d7qH2gKbQcqFePLo2hLRYPgUboEA",
  "key22": "2uv5MVJbRAhg6kZFRwePiKaDm7cM7tDi7LWt9bS2kyufBCBuZfXmS6N7S7QPBtBH92N9jEqF5Y7iD6tuPe7ofT8e",
  "key23": "5gAhti7vsARsWr9CsUgUVAsr91Xe5wERmFLeijvTdvnw3rypdev5mB9T8Gjt3T5rPWAS6SVk6DNrcrL3SHKpHqU4",
  "key24": "5H5kxBqiPEaLJHUvWz1j2KdAnPgvV8zgoXfT4NfLrLY6kJKh1DNHgeSX32VAwHo2EZXNJFHHSUFvKR5U5Q3ij9BH",
  "key25": "5X3R8ttCjymSTqe3NbgoWXgXcaCZ6gQeVJBHMyaTdhyuzbUM2cLgpQRU6Cs8nRnV7duxpk1AnZ7GRo4aPv44JG4b",
  "key26": "2PiobwMc21V91xML87oAet1ATRcPz1RJGcFcVF8bthhGYtavDsx2u4kkogopkdSP9PYLpdrrE43apm8uf9pLJfYi",
  "key27": "n1gGhabRKDHMeVdxY4uoxwfq6ifiBL27LsdCvtADpU1jyStsbLsGnysGbPN5TgKMCqdzVoXJwG6UZgtQhKfgmQW",
  "key28": "2CekkCCdsELYbaEUSjDfVk6Kf5zGqLNDoNFUPbuka4NgXkej1wgkyE2U3qzi27wM6e5dKuqQXMe4fGc6Xx9vkyzY",
  "key29": "3wZZJfusA2fTC5ZbxLykQkHC4PY3LgjUz9tpiSPhD3TVnkEnu5G59mP4jmDaDvLTkZVr8hF1CLvTbEPo1SYqWG5C",
  "key30": "4TSDDgcRAEYSx77j7VWMEeWpVEAParrKr4d2WZcSQ1qtzQbFVmVvhMmAzGUoGfAgK9Qd7hAGhUi9q75Ah4VrtmRo",
  "key31": "2m22aBdoTftxToonMkktjzoxGkjW7HkHZ6PYhKTxSh461nr2dosZyQrdTaCAirxcZ2MnUpu8gpi8xajXecQL1qfv",
  "key32": "3L3fW5ijpEx6fJj6Ebczjy1Hi5dL3kE7hxcXAnCpXbLYoUkeUFW9uXmy3iS8JVFQNcp7S7qGXoqQETKELNmvSwzv",
  "key33": "55FcQnE7kEYnrXniqp9swgzeDX5CSZ49tJhFSG1HSbVrh6bQA7VpXzCNvK5VFTK6K9d2YrEkCFYoKPDgAbadq9nD",
  "key34": "2pU9q7hU9B34LPBCzAc6RkUVPsrkwWzhRUBhZ6H5HUsirGs579M5iVUtg7gwrapcEgPSs9FEvEwrMaZdRwgnSpN",
  "key35": "EUHyoYeDtoeyxvcE6UKa73RaeZ4EutFbGDpyfgKAc3AjUL62AxAPvjseagFRSnpmqYrTMNN35MnisAif9ZycLYj"
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
