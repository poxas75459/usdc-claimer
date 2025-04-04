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
    "5cwR35axuoQEVtvD49QBk9ASKdaXU8kRLCQru17HXd7irQmSK2grAnqLhPNp7EEAdZjqUHW7YbUGciC9SJxMWujM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kPbnbG5pBYHD1K3e7zPbsX65RSamoJqeTam3McJTJBunD7wjmQTYeuzBdMXSwg2RgwQN9NNf9Q3q2U7BjUkb8CV",
  "key1": "5VTYdQfsafhDFjPt8jcDRts6Mt9119Xgu7zeojZWRKcqRSAARV2wG7uRJLQNPLwZv12exVP7YFWfcQhpARo2KizK",
  "key2": "3SGW6N8K611qijxcCN9zWBTKMdgao6igeteEHdSuF6keskLvkEgeXp6bngzcHhkJbrcrZWWUWq7XJwuh3D6FkKNa",
  "key3": "416ASPtCR2yhrXyzEDD5nEVjrHDoxpBeKdg4ZV6XpG3n8YyF3HaHQfAmhfEHQLZsMPfGcgo7C2EdhHyHH7rw8kpu",
  "key4": "2msHxzJ5VmPvu5aNSqWMPbyMdtvpAgnNm6UBdywFy9o1PJJcsFmLRG2iqzT7pA4fRfF9oAxS25CmNF43eM1fgMCb",
  "key5": "2hwrDEMS6gNLqAhiuW7vuykXRUVaTMsbSHXjXSYdJyxrwsqDZ7eqjRBKgssr1HvuxXdw2YCqeZh4jmfTAwFhuUbz",
  "key6": "4QbcXakmcPyFoFu5NxyLL78yA2vw2uNk4yn9vDwSrJX1tRmP1qfqB8ExwpHhgVg6ZDjhni8qwheU6eQ9t4wqJaxW",
  "key7": "64Jzhvzj6eKQ8K6zos2YAxZtcfw4CidxbStbhFJ72Bn9DMAF3pyRK7VCUR1i5PDqRdFbCC2nJ5KQQSBdHr8XS1dG",
  "key8": "XtzRfBuu5d83MGHvJGvBUmSnA4RtaTCHnn8Kokx2rsNU6iiYD3PvNrLyn6xRQjti9TRp7RQHA9E96DqwVqWNqgV",
  "key9": "56gXh287D1iJjUHudU6aeW7R42NUvk964fEUTtXS9YnJuDx9Y7YABTLbEeiG3wK3ANkA97V3ohmJUkdYJqP9XNaG",
  "key10": "2tM2yQ3mhUeUiYGTAtZMLoKAGDeLSPpLh2piVGKyns1CDgZXy27wNcGRHzrRPqMgxjYPe3BapwpRiuvxMoWSJkJo",
  "key11": "TPiX2aQjTgd17Pqx2KMVGMkc5qbW3MRgNF6NqYojgQy7nkCo5DeVR2RuxRYue46Xv86Zm7cXcrUaKjRV1YEpzq8",
  "key12": "7FoxWbok7XM5oECUBnHyQ7YtVKsT1nJBb8MM89eKaqssetcErqmfYpPYCbPTA8iCgknVzW1raQdQNavabpaLLQ9",
  "key13": "2JnrSwhYLpsn7FKgL2Zdem2uVHPjK3HXFssCPPrZtraoHpfmFvGWaThoZC22ZCXj55CcF4whc7oJavrvd1XmnsNT",
  "key14": "4FAZC9YG29utVjaf4ECB6WXRPJendDGN9MRdHxZCaz91j86LowtkLBQ2P3uREw3cMZSpWQx8Ddkp78CqowTxUAMp",
  "key15": "3GUfsu4oGZvxPpqr8u3t5a3YrfmqQXUF3udKKvCgnd42LPkNDiAahTXt2moeTPoJ4ueEjxTv9v7fM5QCwaHEMfDt",
  "key16": "nbUAeGP62qg4NTo7sL3h7rma2RsKumWEGma9V5AxT31HepUTVBDfKAkByEV4EzM8UjGzfmDAsJpoMW3yZahceug",
  "key17": "5zw4V8wVjVfCPZM6hQqwrxDtxrj5u7QuuC2bM4g4Ex6ByGXSJzY9bnbx4Lv4EwUC2sJExPqNoapgEQsJjYk2FKrm",
  "key18": "EfLM7QZ2M6HgPdELZ4W7GWiZm4H7HBPuCC3CPVayH58Cq5Fk9SD8iUZBYd23SW2axGAEfp4AY7KcN3FicUuHmpF",
  "key19": "45oFETpSed6bLYKXNEz3g1UJsPz5jAZw9yDXc8Xk1YLfBRzcVho5Be8hLAx4JW2M7atmaRkMXvaTCbyfq3LFdwsZ",
  "key20": "58dGZejQgcXcQQJy4bfutTnyPmjaPzh9ozdt574oDTwpmbKzSy8rTQF7EWZor87KnxLp5xvbnn2Vx6MGsMWSwBLF",
  "key21": "33pqqpy8cyp8HbGXPvUf42usm7MdHDygciUtnvUqHT2nMtsYavhbeyBPikSKSgj8URQcmhCT9oQtct5RekHSMYdh",
  "key22": "5rak14j3Uh3VLKDbspFBkPeWBn99HwFNTByMBbumRQqBFeXKkPi6P8q74wFja2dwn6uv6PzKDsSTnfHRyreDWhYL",
  "key23": "5UaihZi4HTXsANa1y9faFyZf3DPNJxYupa5XCYnzuDwDAsVb8HUzvia4S9HCAkCFeAhbp7NuymTFbyuYoc82dLnE",
  "key24": "3xfCEdZhaWg9ssHXJtTApcsgq6j2jULJxg5onoA26WejtSf71XNBgon6jHDV1o3G5p6B8WXpKesLxNquocVoTvn4",
  "key25": "4QrNkQ5ziEtXnD3MDjN5xfZ696UL6VycR9Hcr1huw7KnBBeGhdRvCJmpH4cQUy5Q5pjRuukx7kB4M2XLb2nmaBcU",
  "key26": "5R8pLstsTCjwumREp7SmhMQv46sUJM8Si4rK8KsH1fmEQuerHofaWSRQ4SsfgxAeqHcJdqD7HBQrcpEgEjRg6y2v",
  "key27": "5SYnvpC3pB2WFqDmhjDNBV2rhFborXWnruvZ7DnWcQaRmgBJkqj1J6Ycu4QbuNV7qaPeg8UzTqgnPtSTz6bajXfQ"
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
