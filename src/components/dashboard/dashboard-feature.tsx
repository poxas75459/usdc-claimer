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
    "2HHM15YgAXmhTw9mpJ9ttRfEnziT52mrUFVHGC8Zj9uCtvHR2ZLZWcWHmikiPKJeMECH365tZNp2p9vDFno6JTrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28C1METfSHdH7Uj8QYWddsJFPM8L46Z6RR1MhTF6erpHuqowRe2VP5q9VHR7UYauU9eUgEeLqN2K2Y2Ctn2LMoMF",
  "key1": "5aXKk8h5GvsnbxkmLvottu4kh9aH1y2QtJ9mQprmie6taVuVJHCYSV41NbdnEf61QM3rqBTLbsR5jn3jfYVS3kCF",
  "key2": "5qm62fnt64u2YmPpMcJLeyEkKahMo9pcv3x43p2mMwvswWzrH7dcJAJifvJnb6KcVLZU92vxFP27MH41QV4828Sw",
  "key3": "5CATba7JX9NXEruy7sn9je4LBAtj25dEVggxWG32JqATsVvGMLDDvtS2GtkebbCAxpKypZzhL39i7pBWWwdB6JXv",
  "key4": "59Xi32scKTvfzQEBTP8vbYELNa5frBMbfDyGBL8JKkfWaoRKT2LGf612JcWP29GX9aCYsxurn6Lyfv5ooUKyeLEo",
  "key5": "vWaWzv8jWCnxD1duidnrGRCwjChpcbGkKiXkjhmV3fayGZ1iAjn9wVrstS5Lvk8ZjRzadBTjEWXjUf8PtTaZHB8",
  "key6": "of9E7LUHnnWK24tW5APbGEAwyX3E9NcZ337gt3EtNg4zikK4M8kifTCHrFPHuonfdht3nqd1j6BG2cgjUX8sYnT",
  "key7": "3qPEaxtSSxJXZDtLW8WJhHWXVugZfFq4dw81mfAvrbQNeRmmVPhqdnKftZuZKr1rJQd19xX6XsfHj5SRbMFqbeuN",
  "key8": "5Vi7TFXgWcWYQ5dVzZMtKB7M1ifbjFUoyJwK2gUx1UTh3TiUreB9C6MAX14pFpGdyewhi9umxKs85oBSSTJ6CqLN",
  "key9": "3FqvWrE4kGQCZodt8zj5umWKYkktyHnLfmQoqdgTC2qDfjHSfUwT2g4V1zUg6S73Sa32skAruCAbhQBbeWFaGA63",
  "key10": "5eZHxiGybnL88QVRro6fi365MPqRiRZENYfNnKDTkBzz4WybUEk2o5LJbAerv2uJiuGSLpAvxAQxMmniDNy4avgV",
  "key11": "4EUrF4aGXocY85naNKy7xn9ktdUN34bHUMxsYFyirkSq7eAmGWNmB9h4wW9uQDjRVMP9uGyQ5Q9DcPdHwEzYgPcJ",
  "key12": "3t712bGtenZA8B1K3V5RKXXLkREAcYmS6ee5mQPAQotpJwvP4tvcD1Li6nLR9Wajxq6RyUZyWqN98fpPaEY5ZaGi",
  "key13": "2HSU8sE7vGGGQLMe4PDnXv9NkwezyFHg3aebbi3xojRAhaJZHMaKvunjo1YnxVXkLPyMC9ZD12z3zkZHNTTHyraa",
  "key14": "2AhUnC57H4VLd9cSD8pYTWpBQtP2jnyPHeV7U5auZp4WRQZTGrC9sENk7zUeQ3xvKCZfbjsGci9NkrkoAUhNkPzj",
  "key15": "f8tbBfmF1UaxM35UAZ445dZ5R2XxVZe3MrvccJBC5rpLMmsu2jJgi7X1GonhmNcu2iiGra4nz9m85nr1cNBCJaw",
  "key16": "43CAJQtP3oWszZS4rrNX8MhwxKPCs1xvaPeaJs7GQMGhE74RFrN3eXfEyvDmConZSwUpmFdeXh2osKFvaiqW3mhn",
  "key17": "o6VNggN2QY6nLFYpQT6bVv7L4BXxCeehVsBEu5VDpZ4HeZaxYS1cpCVvTS85AmZkujGHXDWrayY8EynH2cmfHHN",
  "key18": "5UyqLoLmbZJrVHSwW5WYydbDSgk44HdsBYPAerZBNNU2AZynHiMhWERNwdQw72Pa82cUA9i9WdsqnrfvgLk7t7JA",
  "key19": "2onWkm4i7CiRRcCXskANor9LJBEDa28Z5sB8jNSUiiVdU2dhNkU2igy64P8u3VXBm9GLi41yB7WDiPvwNE85oCsy",
  "key20": "3T5drSG2p4y7W7sagT95wrZr8DEKW6qNe3i79rVXTfeCLD3vyYgFoxtTvV9U6UBcXMZjuAxqA2QWbtK4yKmgUdfF",
  "key21": "DJqBUW65Fg5E7ChamGxHHcPcBy3YX3qwNBauNd4PQVXuX18HjxHcc8fJAUmXStbuupuuQx4g8gR4cpJD23SnwUN",
  "key22": "SG2r13D6EtbxiAYWvzVfTSwmmN2TSS5tq7nikJ6fMjKjtmuHDWgT4BFGcHuNEyEBvGQwptQFmvHcjcaZWS7t5Ls",
  "key23": "51Jizxb2Fyd4DDrYkKvXq3XY8j67KWjmZgLdUdAWuh4G79dbzCg7aPm78dPs65Dg7MbKLcbAoEsc3kSygAdAKZ7m",
  "key24": "2PWvAFYhrweFvL1JXCzsaH2j25VuMqhpr8u29pgd7SZVp5DzhoERvXuBKBa8kS5fPh7oSeseitgCwv6btG8e8fAo",
  "key25": "67iyjqxdJFe7fs8epu6aDW2uPabrx4wm8AQKSpSyRZsYR4YPzAQ221dBqBc57CVzS2JMBLU1SgzKQ26LxF9piuef",
  "key26": "5U1gy2AAUr8kzKkot9mE6Z6Y57hYE16WnP1Pupznwx5kCy3M5W5hh4Do3hDEXA7geTAFavGED95X5rjxCXuQcY7g",
  "key27": "3Mu5wiPTWPygeoLa4KLzzBRLmMNZUoizip2vrQ1x9bFXbocFw5WYV8DMGMKwyy9mgC61PG7AsU2t9LxFepLd37Nd",
  "key28": "3e41R1Vet3GTx259Y7PZXm5jdsersaLgkw8FschZi9ot4BAB3M27PzCFuEorBc8aozKDi4kEWhfy2wwjFGkFWifv",
  "key29": "2S1oUCXS34raCsfGWBUhbX4VALFnvLPYgd6Fod3MB9dqD2xBx2a1bioT2ddugDuQXGVVMyu35QLe2EHPwhFN18FW"
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
