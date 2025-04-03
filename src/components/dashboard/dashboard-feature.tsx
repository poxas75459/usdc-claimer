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
    "3DwGKAeW1BAYWWo25DQkJa91PkLsCPsQewUv4rHyNBpYPBnoC3iwjr8zBx2fdJtYSRDBwA8KY9W9r1b7SvQZk6fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ck5BuQar1NRFo75zy3vWkEHo1k4CBnLWg8yPaeRVfyZbce21a8fW6Hr7g3NYKqvbHK2ENopPwqB1Bj1RcvxJxa",
  "key1": "2PFCngHW4nE9GL9GrRQQ2tksXRgvHyJdisQfGeMMRJByPVAZxq8ZPz9BiwuRpqYUEVNLzqQdgh8Zo8dAFiWaMekL",
  "key2": "3ruAwrv6TXTYbGZQBPthsb3kRuWwyvk1h1ZhjksdCRozuXWBfjc7j7BoNqojVSMaye2asRoQQTPqZKHxHoxcRciC",
  "key3": "87muS2TdFQ3yPtUKnDWiVPAB7xcxtmLYzg7ZAPgnstxqinbY5ViBCKmxzbYoQJnKSZR1hSYPMuQ9QPfTGP7grXC",
  "key4": "4tj88rd6mPJ8uUAf3n3mGhaev66udrj5dGTtN3yX5CiaFCJ2TaKTadEKQy26S8sCTTPaTpdQgQti8KjbZUQxMCKY",
  "key5": "5LsvSA1C4ygAdyeebejumpPsPkeWvdDtsrh64XW75is9FMk9qaC6vgmSwuxYWPKzKQdjST2PHBnGPxh5o79jmy9f",
  "key6": "3twAR3ZWQAbeXuVDGvm4kzVeSHCgFShwFSUYPnsbURXw7QhsLDKcYzzuo8nziLUjYuMynuz8K8zphucJNp7NoFjy",
  "key7": "4NUcy6ZijLhP5fR9WJgkH8SvtDix9FAtrm23QYX6kS3tLVYD8m31zFwdLsauzJzxtPzAhEZSnyLjvdNYoCfsRMU",
  "key8": "3JXQUWGiSBuEuCWzge2fT2uC4uujanXr1cdD16nyV2Qnr1QG37AoKaz29ZRnuMsfWCczrngSaw6YkqXcg6YfHbyk",
  "key9": "5GgG3QyXaUxsKM8jQ82V3ubh9CiA9uo14W9xYDArxvRkHTJfmiE8xUrGpmsPbhTRBsxNUe7uNit1Pt2HxLwgxizd",
  "key10": "Qv6yyHyibgvDg1TSJ5JZ3we2LfS4bZ2jxasHE3mqm1ZFwKAsf7eJLKbScyjEY1dPixituma3kJbzPK7ox2XtbvH",
  "key11": "42T6t8mGhar3MHLsjytdjAjfnjfh3tP92HQc3KLXA5NivcUMVo7cLfAadnryJy95BfTyt2mionqsUW8JqV3rXWHV",
  "key12": "4EQnMvji9Qyz6xHepY7ng5tzpGhq1CogVq86aBkBGUP8K8BA1gnAsSkeTgroqUvnK4qghQ7wWS3XcdKvVkm7DCjc",
  "key13": "4GHmr3oykxf2hG9EEBxfsMv198gqEMAG1ySfooMqALaGDBN3TEgHUCpZ6x9RPsdxX3d253ALKYpQDMozW9JevswQ",
  "key14": "4ErEG2EdnbgjLpZr7wCitnu5aEF4if6o5jAk1uUsBXJGVSMNeDNWzRVRpBRiXywDfuuiQ3Pje6nhAo9AW3uEo8xJ",
  "key15": "HjgcgqUyVMyMSXc7KmCowdGzfzcwUtbofjcHA5CP1dwLZVhqtRGt5aAwCNezopunCLcrSDGc5XVRW3VUGTszcPk",
  "key16": "3UgRPpSjnRXWAu22ihLDJKasE9V9kZp2ykid5ryHunTfPiG4sKzR2HgRRof93Xmhe7iR25P5vs721wwRxURibaNf",
  "key17": "tBrGCHLLTK9nfyPxcpCWe7tWEotXYNuhw3bW42tnZ6AtBN5sci5W4G5frwwhS2gmhENLgrZbHfuJgxU2bVPp2H9",
  "key18": "4oxrQbcJQH5uyrmj1UTS29dyvFaJvUHsGQeJ1c7zbKt8U5r2F6XC5mXArEY8A2vumsB1KR3gTJ3qUqXxY4PyRPyo",
  "key19": "2MaXtZCenGXVr1g7JKD4uRYmi9G6BchDGwA7KiJgPq67QGAn5eLNVEsyM3E9YQRK8USwEkCVshKeMrLsjaPRpFAh",
  "key20": "34z2fhbzYea59qtNXu3jtC2LPJnTaygz7FUitPDgyTUWVvwQPyLDsiLJQbcgHaYaBB8z1CCj1wP3zMRBaSzVmjiK",
  "key21": "4uUWMck43rgPD2DRMonLDf1vC3iqZcZYwYCDKVAp2J556MvUqNM56uE5LkK9kj5zAPxHcZnG17TJ91pLLoeqAJBP",
  "key22": "34TQKXXukUNCnofguJ5rXfurY9uMYdjkQZsqp6qfppT1iXEjYVFt9u1jgapD8UftjTBRQXUB5R4NAE1wubYFxrcy",
  "key23": "4hw2LD1FW4vCBTAWceAEUM2qSFycNkBoFr2a4ZutgUH3Az4vqykhk7qrzNnsr4cWrFAVrdvm6Joh7K4Po3z8iiiu",
  "key24": "5qSu3ySKVv5uX4uSb3YeZERDrm4deDMtBA3psUBY88aimKMVG7okQp8aU4DTS9UVnkhBmRDKPNh7KHjqREJFS1Xf",
  "key25": "MZ3joqJGKRJ7Hcjt6VFUq38KvjYeu2nvbDADmPtMD1W2ezFUhbQrMxXdPtH7JmfbimoVqhkyK13FsKxiJSRq7so",
  "key26": "5pF43yappjhdKcuuG5frktnk2UAxHa8fqm38EWynyE6edKVEN8es1KeJghPpiAS5UGt6Z9LdGZryN3o7mSygG6bs",
  "key27": "62r6WzBV1gFeQvXpBC4c97YK9rk7YJJH3Du46Vu6hASvJh5wK4udHcdTubAxxpGWuDf6bSv56ffQAGwf2pz1wmg3"
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
