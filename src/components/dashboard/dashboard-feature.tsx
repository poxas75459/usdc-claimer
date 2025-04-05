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
    "2qFmPi6JnPn6JzZssZxW43njtemdKuz44RmKjPYRVvdb69aUttVxDqKgyWcr1RvUYrMCuSDvCNmV8WLj2NXAKm7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beqiDFZ7MqLT68VQyatTAY4zXc3h8hY49Ght85icbsymXDfdrQq2zG39b6EMaH9stoWj2oRofdRrpQHzNZbPqTv",
  "key1": "5pCqezi2C2tJ3Hyjg5i98SFG4zY3YxBspNL8M5CpCybgFMhKXPdTBvBDeGWX1bnRCaGZzap1qYGcMUuuZy17PiQG",
  "key2": "4cQb9tFQewjvdSNfUMYj6QnYB5qTByZYZcvzn3fEbmyYsvQKtQ4XvCAtExscWaB3hUa8WvAZLnbxD9gzUGfWCfo1",
  "key3": "52NQq9EomETNC7Rwr1JYdXXdYRtnwiF7KZx85QLJZ2sevo8oGskr5enx5PxNW15NLRZM6YtgVy3RaDA2zy4KBfQA",
  "key4": "2KYwckFqEQvv1ZC75WgMyrBHENLNGRTLXG37WEkZe31zngt6fuXzrWw4c7SrZp4wj7cv5NRW5SHV3Bsw9vpaQCCx",
  "key5": "3MDa8vfLcxbK22yzEcbEZx7FSTrM4a9E4RRWBSNkVzsqfkCnpLt97kvGtRWsMgaaZ5WLX21Jpememmee5oHpE2D4",
  "key6": "ipQg9yhJ5rx9mP64n5ePwXFC6ET9EHijk7bdHXvxgVtvJCCuA6wojBeziBay3j3TPWw85BoSNuAtVFeZrPBbLoa",
  "key7": "66C2pvQajtZmtHj83b5Fy3ReQweaaBrvBAYCT9s2RFMAVZguvRZWGtXRv9MY1XDbWHgbUSdyw1qSaK8e4w37nnrk",
  "key8": "ExzWDvgWwKf5E7cym6xDQkCcwiRihS9VFyLDnepE8mmBbkf2S3opZeYTaBpJMgfC1yJAGVUbbspiy464bpxaVBo",
  "key9": "3rC3RVEkzQKFEoR9PFX5UedAb8C8eVPGvRi2WiWB2dpLUYP9ApBgBtDTW55uy78EbaypA4kAsvBUpQHZw17Bgsyr",
  "key10": "277cpMHCQ2jLwoBfPMxbbk2EtbHq6kJYfriB1VAbEovra5PPh3gdaK77LnkBfu6mbCsGYJuuu7nxsdwLZoqTZLU5",
  "key11": "3nxP8t9TBRDzW1RUnPuR6ewQNbGFhF2NMNckWipMue53kSW44By8XiPd5Bdw7jvWzQPKEv1xf4xWNd9zbfGJ39wU",
  "key12": "GaHMm9BU5XXtyBDFizQtznxQK8RFHKRqoALZfZkCE3xCYGQ2W1GF1PfGoMnfCbSAxVk9tNfWnwCB2jQLP223QMo",
  "key13": "4L57ndwUF5KupgnfHbiSyDi3RkMsVn5GcQ2GSgZ3ShKc6jzXj1LkHX9K6jRZT2DEXUJm3koYm8B4gXynntR9cqoB",
  "key14": "31EwYDA3SdrQyPh8CVs2DS38MYADRUrFqfPDJr4UtBoDiwDvdhnj26hkGf8BRw5b1UmyjDQVrZ62fKZLx8Xv9xKd",
  "key15": "3Tv5TGQ7QdX9WypyVhRVc5WG2uhMQAb3uu7Y29nKb2RX49JHYJ6xzvhNwn4TR3Nau56kprJ4GCrJKCBzcaa8ZuEr",
  "key16": "56m4BuaRtT2ZB2HpCgD4HRP7Xsdu8CVNvjKizxpSKuEZQappvKZLwTyTDLyXmAgRYkz76VpBzvezh7dKQebqwfkD",
  "key17": "46X5noCtMbLdxddhZh8VyqfU9M75kENbxSJvNTQTqXbWShAAgvhKYGAMHhp6VXQYKwvw7yCNqPyM8ERidpwQZjqH",
  "key18": "5oHYJozwh7rqg5wBXUgEJLh8q4BrJar9qQqC75z1794Epaj4abNeFq2y9yqbYdZ3dF6Ks3Ujm5whio9c5UeA3f5g",
  "key19": "3hxsMVRLgyf2JuChycHkVDtoDsgJRBvsTqhA76vdPQEF6EP6xdguyJvRjxHUXy4dVjuWdi45fraB3v2Ez7WfJwQe",
  "key20": "2vw54nvBf7aabD99wMZEuLrXfV7BrnMWkKRig9WuyjCRj6szNPZnrM3UThvgGgPG3byv7G4cn1hfGdoFoob1SDd1",
  "key21": "2H1pR7jBhRXsj1LsUxfp2cuU7VbpeyPVZGvVWtWS6g3NYnGKRU4YXkbk2dgDdyUTyNxPiQypt6gyCjxt1nNhN6DJ",
  "key22": "2tLvABxM9U3e452Z5CbfBrjcmqPRu7k5kESwhDku41Q3g3JXcMMmvQuUZBet9gt8Ht5PBYj3hNKtfgJmbNAhDwjp",
  "key23": "2F2xBvgk2QVwwwRTt5sPvTx6W3bQq5Bwr7KmgetNFveptM3vxLxXDdi1GHyTjx8TdGBtJ1TU2iaExgk4ab3sqQK1",
  "key24": "kqG5gsmZEsYvaaMotWE5KXeK5skUb2ivoybwaVJN67ULGsjM8uYkRq2DnDw8XopmhyuR9V8jp2PJ1EwSREcjd53",
  "key25": "4U9wiZPcLrLNJhLGsvdwcU4BYE3Xr7JNQjr99NpndWP9X1HTWFjfKnEAKYgpCYNgSzCx5rsFZm4FBxuoMoAr9xbG",
  "key26": "2R3RewkJ39ArH9pz2as7dJeDAzs9ZVs4tgh7FurTEiVBw3AhQG2epmNyXCZyexNrbKEDGLNP7yH86oPVqnRwz7RG",
  "key27": "4RqnugkLZSijgEampq26XJ39tP9ERYxs2zdMC7mv2ChyigtayLw8Q4uN5Fd8BU44R3zv3KQ54zMZi3A8fjqcdeH9",
  "key28": "6agpH7BjWZvA1w43MHgPVSuumvAxrD68KKMHcfLj4TPJZ4rXCeE8HvoXRsTBUoxUecnQrE4igoaKM5VNNCrfgbq",
  "key29": "4BoUxF6A56rnRP3Kyb1zUBqygaexZofqA1tvuaEEoeUYgWpRDBo3VW7u8GXZkjJ7f1k91wmFTzpxbbvos2ADUbWj",
  "key30": "5drgSAS2JW1UMg3zyJiau16pfHSsTQ3svUYox3z3e1dJULbbdbzSCkGTzN6oLkFT5LQkmPYgpPXqYeFeBWdLEjMq"
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
