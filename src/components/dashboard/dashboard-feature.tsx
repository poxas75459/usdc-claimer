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
    "3dycwp6MFNDWWNBBU9mikox9wMkZTYBKdMZtUvCdNPxFsEDATjG6nfdUSANKUF7VcqcUowqBn3ARDugphMUgFFZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDf7GgQfCseEfWLRrJDq861orQQDqtecX2qmJv6iJt6exoPUrPpaEgErF1WK8grUnFQZ734sSjnPVmNComvUAjp",
  "key1": "3yDbuwT4RGNqDJkv4EUkyjfHs477dbfPJwLekABALoR2KGrZMXfK7hAerQnkHS36FupDYHjp7ifo6WnYQvrXAWJg",
  "key2": "aajTyD7u3iMYcxjTvYvsEQRqpqoyKKZHRjTCRKX1rx3kbeZ3WWKdsV3hocer1g81m1ZFTS6M3kECdAVHqdjjwki",
  "key3": "25VGtEVoGECgcvEMEzVu9Fx29QEw9PVUoRtEPWcCQCitJdGpjMo9UjZfceVyv28n9wGeRQqee5UYKTG239WE4Xev",
  "key4": "4t96sAMrf7LVusADFdGFvrzeK5ahpTgAWFwc6yxDvi4DN3XWqEzswkYNWcpcu67Jh6EMVPKV1TyuNx1Ab1yE8EjL",
  "key5": "3rkyEQozRzzQ3AmyXSVxmBCQmuoNyziE1FRvSJJyhxyYDixTNsHnKM9NPUipxMWXpT4YbL9Cj9zUJjCWpMnUzFpR",
  "key6": "4fdRDqB4hDVLBXyQXYW2vMbYAYiGHubv6UA1cL4SiSak9HYfJ3aGLaGp4dBUT8kbmHTNnszBLouGXhpACWdr78t1",
  "key7": "2qAUxZ2fbNHL5NUcRyMdzRj4hYJQdT8U34pZoobe4MvdbZZaTDDHWq47JeU8tAK9KUsCqdw64NSHzixxpaiB1rXd",
  "key8": "5FbsZY9vATKQJW8uYyNsS3kHdDFDw9K31phztLkMp6uGx5SRDXyBdBUS4aqg3GhhjLsSSpR5V2fdTuWs16eKrcCB",
  "key9": "Mf64suSYWApjzpPJf53Ry7nYw3MExe6L5CyFU7HbWf6BsG2r5JUr5MKtJv4Q8EZFVaLkbJm7YgeLdYVGb9dFeaM",
  "key10": "TibtAL3b1H6ScuE1w71EgNeZob3PoLSmUwxwGFX2R2rxXpyPysFwP9JR2BTL9eh8xDXzuXki4ChM3SW6us8awii",
  "key11": "33VKr2CweQ2TNBJgtWNPCqgqFE9gqiCNnv8y3T1SM8Lx4JUyzXZvgWdGoyhoU4y9QnrijGNeCRuPR5ybWMuvVfX9",
  "key12": "89YnSRTYAwYM15vXjj9A1k89sr5EvuvhVc7cnBVBjn4NyTe1si2CcqM6sN6NnXWS4Lagacb8oHp4JgoMdt5jt6E",
  "key13": "DotNb1KLyQRWMAvyXWgtB3CKtNBi6eNAnrCcpjoVtrYBkoUEUBn7wzaSigy98wa1KxYL7mEopAgRxEVd84NQsuC",
  "key14": "4gs7pPX743xwnRG5jjzzMbUgVqGv9TenAm6HkNRG6GGV9X1FoQBDHMGfV8SevmEnxkfc3dob9BR3X7y6LxTSEQaM",
  "key15": "4aogXzg77ALwQpJbaxF1Eo1SHMkrQgGJiGKkpJL6eCpWgRZbNhPBhZH9dbZoUnFmASwHnXBDrpLpmDYF2FskqhNt",
  "key16": "5vsy8KMc4uFtwPtYfek9qByBj9ELK4KzyDy2KWzT4eVzrm8XtfbkhD1VHHRGGBd6aAMiypjJuHgFN8im21sfs3wf",
  "key17": "2PWbXM5xhcLFyBrDMDwzoZ5WicesbD4fprLsE4F4BbugQVwya5iaiY18GqgxzGjkyw3T52jZNgQohGfVdUfpJi8y",
  "key18": "5y7ETFfYhvbKdWfiBEQF4GvmP2HSrq6kB3mvkp6GSdxZ6v6e5ssfgBgKxX3xqixyaFQgjfzG5qMbxLxgnxmgWdDG",
  "key19": "4qzuF9xNqmBHdEs32ymqE8Q6nfBfyZajuUNPkTUugTBsWrXHy5C3C5Gq2E56ADMBAzMpcyKAVTetmjfx86U9XT3g",
  "key20": "59YAwU7cF364pFf83EXZQRgE15HeNbQudcDG9F1v9cQXvkexE897YtiQE397DDYZdS16GMx8ViAKfBxctjNkdyNA",
  "key21": "48j4fJ3RjsjwGrhwSAdPzY9BDaeXpoyS8GiAcwF66wdCRardfCCs2oQgLEtJq5VUqazPv4h8RtZ84su3H4v6CyA4",
  "key22": "4S6gHfL9md5mztu5kWR9KcfAGrwDQLPM9nYoiP5MYyei671eLa1NQLmRVpUweitY9iv8xAY3B7PvkUX9ZNio5pjy",
  "key23": "2b1NuE3tfsBqwiJwfKv7Wnr9tPrVBNzkunwhoFzFD5R175gfTXU8Tres27z8KzS77G2xEnmfahtZjAyKViW3Uavv",
  "key24": "tNTzBeA5uVVDe9jfdcQzDf4CQdeuJKzM54B8mvbtMeVbc4mQcTo23LfRJpzb4tkt5WHb3XEwuD2BuP6eqv9W86B",
  "key25": "3zMETNrmr7gw2r79gwXn26dtm3RW8EAiK8VuAX8TuT9EV3EKdrmQ4anAmsRcqnFdSbsr3DA3cy7J8y4o45pfFKQX",
  "key26": "FyZFjHMib7L97mTM3v8FSbeQFF7Q9ar2uj1zKNmWSi2yk73i3g54DTHTqmFLb2GE6L9JNXptVELLUDbUJrUc7rU",
  "key27": "37123ncz3v1kCeV25x6xMBXhUXnynxXWb2LuiwQSPtTvoLApdguNZMNeHHE7FPJxCrUd8PkdvyCfwkvecTSUYnZD",
  "key28": "KV6tgBFVtVHhtV12mbKjDynacLQhddtiSTM76pNs6iQQE8nuWkhpK2N3QMn8FxHYH91FCrigMMorR6APwCxagYN",
  "key29": "4495GuTAdYoxt4D8HQJSXvESRdZbEhVpVZzegUnSn2D3oYDXn8fUNfDWiTAsRvstcvbpuMgstd7AUQ76oU5Agtxt",
  "key30": "2Q2c7PMFTTeYsfdUXV1MYHYW5wtY2ZRoVXu5qFi3gVKnKCd933KRWBzWcb2ReBHknsmLo7RY7SPRUVEtXZVYdJvs",
  "key31": "4EgBpvazbREbaeSvDn6mwmQ36LZG6Ut7kCeeLvVA5tGEkeDedsrkMYYNsyz877G3pGTsjJUB7hGxvYXwUh5FcC5P"
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
