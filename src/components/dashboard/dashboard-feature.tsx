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
    "5i5aqroZPERtxFivVoym6wiZezRJHQN522ZNvaGZ9vXYQXMTbWj2VUWK6JtYyDebNeG2uX6vBjb8ViUcP9rRQpH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xg2PMokMxj57UFgLEwRXdrc5kAd8UxPoE5dhRXhpy6D1Ar7X1tvGa43RPoFnVSowuRaj7aDdLCQceY7Mv5WkijM",
  "key1": "3LkUSXcJEeva4SgUG7xyt54MD9rBTezdhAM8iti3LuH7AgDR9eQmTpeutow4XTA7iq8n83fWGy2P7VxFVE9zJ2vm",
  "key2": "2aGnypZuGj62BqD8w9T7DmA1ejEQJyqrx6kXxLfxHPUYJ6RFhV2ixQAZ7qZhMYAs1f7qmP7FdrLtMds7j6Ykc5E5",
  "key3": "2mkAc2bqnCn5hwQTfjnekPWkCvBYvkyjpGoD4khF97Rwj2vBZbNPu93sCiSk7h891ECRkWccbeyvGmeBJsBYsuTu",
  "key4": "22kWrnt75tPj9dMb5twdCEY5uq4JMNxqusv9tKsj3Po8maE1gdtm4uudFuhsPGD7xcAMPUSoiuhzQvgd4W3Jkz51",
  "key5": "61vvDhNGMo2wKNeidSrZY8DfuU4m6PRs2Z34DKsPNpmgWR9qxjwxJAk7F3TmsMUVyorrVd3ouwRKhJBaXRKnM5Xx",
  "key6": "3XsEuRqw2wSFaCL3cKryP4kTsjoKtbEfwUMYHfPhHFftFs67Tgk1bKfD6mgainxx8KHCqB92eXxuph1C3yoGGhcY",
  "key7": "3oRYfcn7avBNbogUBzY6DfWJTs1U9ph4TLTa2YaxSLNufRHKZDAcLyeZsEWpX2JCqHEAp93bC6NSd6iiZLxN1wb4",
  "key8": "533Voz4Uboy9FyJ9hiVZw8vao7eXzqbj7JpvLGu6YT9aBBTu9kvj89kmqhTfhCqzRY35QiWB42wWkd3p4fppEopK",
  "key9": "Q9cJirczPrS3w5P96LYiQ3kJQqWq4Ye84Rqec1utBx3EXCPMVVH7zRoVKPNYXRcbRBGCdtdbGQFptXLwBWD9uqm",
  "key10": "3vwU1nmtHHaRXnpMmD3JQomgnrGCico74DyMyfKpetBuUFRQAgz45rRPhYKCPwfzHTxhXgZ4NE1EQFacuMHAXmbL",
  "key11": "4U4Uh3Ny1BYPxLW79nVsmeKf63YBUaCnrozzjUE56J25vFdZsyHgfgcMic8CcfdHgLzMS9LewgQYshs2tEg8cCYz",
  "key12": "4zEGnrKawDkrWkNshrpjYQAbKYibgzBGEqcFv5iUnbqiMXW9hdZbyq8KYkYfFjEKvG8gLcLmaBwbLr5JSfaWkEPY",
  "key13": "4ypCFf6W7Z2NP7RWKKB8fRDo1ZEveCruEot9pje8PaPh6N3vSAKT4jEmiZM4inmhFGGFfyThXpQzdMkSBg5A3XxH",
  "key14": "57dDKHr9Tz6CDSBQMJNi5FVCNpKWsXMe8kmw4E87jT4wxzFbBohpwkzL5rDaPRpJR2mtyC4P57Yn8e1t2c11igp",
  "key15": "23c7twrDKtwGZ2wkGhC37Xx3S3mX8uRrFUv5n2kx9tM83g9vuWDKn5ib5K94Mqtzy1qzU2BeFXfH6Mu94ugPnrmy",
  "key16": "hm4fj1YJ7TeW8QezqaTjAfDrTXhKYnU19MscnawqDDUVBBE1PDHCt9B6u8mPB8TcENFpQ4NStAqJAmCYH8AohHi",
  "key17": "2M6ZTzJhiGaydgcvmL55v5V3QB5JEeNJWxpAsLEwUbvN3d5942CUAiAoy6Pw5drBxTZrxedWQJ2tdxypNAKhWrif",
  "key18": "41C6UucjTGT9DrCKmGcRAJP3FQ48d6Tb9fgfrZYsZPmTAJPMUComxGam1tDtkQ51z1bom8wMj5PfXhu5ArNEKNkP",
  "key19": "62BQYeeBAtdcxizY27sTuaaRMtRXedkcSYPE4S1AKLxL7E8n5A9fSSDBiVqtM5aoKgver7qRjCMDJZMmzC3v41Wd",
  "key20": "yEeo5GtKHAk4qemtdCYrbZU5R2YnWAHqt5sn2PHpDhtLQXxTerdiyZZskX8wBYL6bh4EGNp4H2yvjrGjUWfvzuK",
  "key21": "5HhSAnFXtxaApgyhwVJVrwjksZ56JRhqc7LjWmBkg2281jr8c5PMTExtxxbjKU4EJKCtCGWrVXLBfg6e8xULCAQU",
  "key22": "4zEeDLqGEiRB4oN6o1SxVE9QrXsXZBpAPqShxNHtA2s9mSPqVNgKH27urZYmj8YQJ17UrWnFLYxRtkpabr7tdaWh",
  "key23": "4ZLQ3xYy6B7yungJ4aKDPqwcApmbEdgkHpgYMYkPEdUZ4tFFMnrNfHfy3aKs4ea8xhnLLZhqp6N6GLEoyKARsxNT",
  "key24": "2AeXEVmY26G8E6e1vK4KYV1JsqWCV3GBCqQr7C4gg6u74cuMGnNKizCdCpmfZX8u3V4XaUGV6EPvNTAEsQeRwA3V",
  "key25": "652tiwE1Xe8Sv1MXkfdNib1GmXAfdKsqjrqzQEjAJANub39YR5stZz9d7nGNxUSwKbtdsTyNXbwDbbKBNL7H3VuQ",
  "key26": "3oMCb2Nem2zEHNNHtqvVpmehq8qwRrD9cQARwbwJ5p3jJwQJwJFWpJh52LUym2XcWGG6riEBTLXGnk83z8fG5KRf",
  "key27": "3Mh4kWuQWaoAwLzY7Jjfieg97HnSS4ACjozuGMmgwUFufmB5NCXFyQDWZpoXNJCkmHzeXR2mzJHG2W7g7NeArG1y",
  "key28": "4PkJaFFXbsBUTLkZinJv5VsMrEzCrTKD8Dyau3ksndC3txZYKhJRVxs34zkft7kd4ESv2HzkSg37Hwur5vHAQYQv",
  "key29": "26uiV19mBJxEzufZeSiGDL1hMRFg69Busha7CYV12SKS68YpRpAs8MoKqj1bVU6nQqahh54Kd8hxm6pJpk7dMrvZ",
  "key30": "2bKRpCKwa85izsV57ZmUG6XoRWhqMySrG8ZSotPF65fVAbBvpQDExdt2UnC6cmnfmkt8MM3Bhpy524NuA8DMCuK6",
  "key31": "3922Jy3GfNh2QWnZstaMXqTw5nfLLBXcqNHv5gTTMzfDPzbtaqopL8wawgKbmHyGY2qyXr9vErwEkn8wU1z67FNV"
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
