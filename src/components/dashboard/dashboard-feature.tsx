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
    "tnAoTa7pZMQQztjWtQknwot4nsNzCerZizXCMKpELpYYK2ZvLNUUP1pM9z2UiEmc96wjDvAvCVBkPikSyfVag7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XX36oVoHM34HQ4UFcZe4wgateGTto6hQhESnm8AvFiC9X9SrFKZ7eXA99nWpgbxwDR1io23iR7Nxig5FUKcbmXa",
  "key1": "4JVg62khw98vpo9GfifRARtEh2mkGRj5TuqvQrw9ZJnPbWuEPS9k4uRUh4pxXcyBzL7KkSG5U5js5vj6rTh5KULp",
  "key2": "3fcUC2M4FygXyyTEmnjwSC9YDyAvGJLfcW9mHkkGTUyiAffJpz9yPqKr9nsAVTUZCGtbKT4ES4jvgEZxrJk2PwpW",
  "key3": "26LSGMghgP7BPH8xGRdAEgv18pcc1NtMzVHJssPM3ch344icFvSdYNksFQmE6ScEpwKQ4cx5hx4tyqKTpgW15oSY",
  "key4": "3WRnyvoqp32z3UqFxTnLdbcMDpKUqbow1TRqftCsgr8vGkLC7s2qufZePtEXoUSMdiDGuDL5Nii5LAoGFz6KxBTE",
  "key5": "2LLkP3e7tNFEYf52kNNxFgY4ZiAK2wpcCSf13MyG65CYyGJcjDih4v6L7KYx9K3vBnyfmWXS4JgTYKrZdtHkR6MN",
  "key6": "2MuU7LJhKeWpsTPBZTAHxe4pN7CSaSkAPgyT8Fkje5y8aEHpfrZB1iZmnEeu3MR2NQjjvRjKApjm1xDvF8upTBZw",
  "key7": "5VivB81ui52gEp7dBWNtTD4HSyqG7zicLHmdR6JNvKqRAukCLaKZ286DrRm9SCy9gR55Ps3HDRaLPnEpiR5LHsP6",
  "key8": "5v7BMZy69HGwLi1XqVSVFnQrT5umL4YY29hKQegAmDJQouM1eWDCyZ42JahWxqykeiqXjb6rn5wJh6JqSydWitJz",
  "key9": "3NukvdCp7TtzAjgJv4oWN9uR6NLCzxjqyuFF8JgsbSrgeZRDbLQJxRMX34FQVUTGmBzAyAkidYrbZTabwFHWjAVL",
  "key10": "67BuFXjNSjdSwcdHjZvW5qizg9TnKBm8jAm6g7MkRPbeQ6UhsyzwFPd4DhW3CDCMrapLwAcMYa2ApF3WTrMTbwAW",
  "key11": "5wPEo4ERL7qkeDu5KnNZX4EXeQKSSXEVYetLFE8A925kWHmR1Ht45NLgssCEuAwMh6MkWH3p9kGPHp7rsLJ12f5M",
  "key12": "5tcwC9dDZu3X98KpqKojVT1GhtuchqG2xJB56btSRLU72RpA8Dy5gBziFCHmpn6X4hSp6YgGEuY6Z6zLhH91WVyn",
  "key13": "2pwXa2ujWsQuM4hRqswujEUAurF7J4FAFi7dnormHYdf6PrextUc7viLCYFwNGrTdiXu8y4E46ZWDdAJwbULPi5m",
  "key14": "3twp9tmFu1W5KZMXm8fTvop5tG8CDsrQ7LbfyLtZu7DjSaPDXY4GFgJnQWLryvUNDhnGNaGXrHS2pTub5j3FB27o",
  "key15": "4cxC3ZN4u2okuh84cVWvkGfjvDGi9VncLBM9t2WAxDDAYEnnCSbRx4Fa5QvzbgdqEHdDnKwpXYgfJ9yESyLYy4Wx",
  "key16": "ije5Y4zYA2hL2n69Go8SANMxEs6zyKGRFmna28V9jeY53soy8WdFHZXZF5WMryTizYhnCpd8M9x3qVhKjAij1MQ",
  "key17": "5X3pbvtruBz1bSXiP5Eds72W2Vyevz9QixA2HCfdTW1BbG11xxdWhBTioZzLPEdsNwi33BWq23h8bZ1G9MtR9oqN",
  "key18": "Tm9DtE7KoPJJWn6XTunK9Xyb6roDteEz584XTf3acs8Cv8M9cSJjscA5bPLiyPPpR8B8SA69Vks8ZJtQJ3kRxDs",
  "key19": "4xaqJy2CcoJA964QUM4b9X2sybzNURi2mgQuXgW1WjaAvB2u3B6p3xQwk3ukn3wRtTD4uffSLK183GyLww3W6pN",
  "key20": "2hNzm5XKsiTWneLbTiCvPzbgTfkKPxTveD4Uywgcuhr7okeDgzZ2b4KhLGcqB7RHUCmRjQbGkBTgKjrCn1uPTtJV",
  "key21": "5fEENVw2jXTGYXDfWt9akCGaUtoxu9yzVA93Jjo21MtFNgXS4nTHToYqNvn3NQyJPN2sRfh9gMpNFuRq6qScwb8u",
  "key22": "3193YLfuALkK8TLFUHpmTUUvE3UZ3YtXX2DwtQXMXueJ2upe89unfbancV5i9gPoVHVn3CkFAD8et5pukgHnbGbG",
  "key23": "5xaYnZvsfquy61gebTjFp9bQdtNsB3SZ1fh2xBKh58YLCZ1zrvvnpuGZ2VFYTWpWcHDS8pH6MMzQoyFXUqxDZLie",
  "key24": "3hB8WdsC8Q2cjTXu6trXVtHJMdpjM7Jp7AiQfL65m1UwtJxepfHENgdR3QiRLkg9926EnTKqWWCYzfNbo5FSu331",
  "key25": "qDxRhAj1oDHkK5eSWHYZiwKUmctL16TGXeCLoUzYeaNqZPLgT2EDJ1ERxx32zx42S9dQsBZixzekPmnW2nyCMJx",
  "key26": "UkVsLUcsUnrGodur7nA4AbuhmZSRKu58KX6pdcAMqLtNx239aXvvdG1EKa9Vi7ASxLcn1i8ceRMS4eAT2q5vdtK",
  "key27": "3hbbEX4JiJrdreb5FRN56aXVBJpV2NRLQudUuLuwFyo3zPfvgwaxgVgMy5fnS2J8NHBC4VkAGY4pGPY7i6Z9Z7XP",
  "key28": "2oUstg1D5VHJZ2SrAArHmsRG2NvAQxXuApycXadHvJ5mYE8ic8oZrPNcrHneHtn1qTDS9tpg5kzTTviYZNCimNnd",
  "key29": "51bU5o6JLtirV5xRV8XSVWeEAuC4wjMVp6AbEM616kcqR6MbCSfir8GHTuX6Xz5bJ5Pkbwc8rNarmfV2hqQmmuJD",
  "key30": "31v56MUhD3d3yvUAwCqSVw2uQoNsfGMQzskSRStTyQDA2Ny7wbFBvtU5p5EhooS62PEADxnWCfXpUywzehWBFLK1",
  "key31": "23HPcaGAqfdmYj66uDeRCHwqpajf4Ukq2YS6KLzezCtakfJnoEvCDuPUwvU1yyu6EWiASgBFhRGjc1KnhzS6DJmg",
  "key32": "jHSH5N4hYe9bPdkqegNvavqjTqY6mPCQSeC3YXSNbUCkVq6FJDAxNe6HdbLJuZhm4qonm3nMqYawmASf1jurc9P",
  "key33": "2s9nkkXozg8WU3xU9mtiQCKEGE3gk51wvet2LyXGZ5nLCeJjEmhSf3FbN5aj9yz4T1VHFDF3FxjNUj5aKmjWfFYu",
  "key34": "5N7RkQ5aEJy4M4ZFRVJHaPioDukWrjuRqD1avp7sjDG1KPGMLVa5aZngX2jL5w7w2Xws2HUkWSDpwuKkKub5vw2G",
  "key35": "4RPUWc83U8pp1kJp5mDpB13aWuGuLWMqD6iRPqWdhVeqLzcbtE5WU4d5B1tcUvspq8Ydw5WZn1ep3xqEL4dK9Eez",
  "key36": "31St4PoHnHeeDijNmMdnyjgahDoX3P71wo9uTRx9rJcsvHEY7S4NZrrGQ1p17Xuyz4oeRMGa5QXYcwc1xHmR1qxn",
  "key37": "2g8xJzRanjpymPEVQ3cCwY2Snbghr2NUGQzegEAsChdw85WMUgrNyapYm52XhEKa9neUiMTiVcLMrrH1v55Sx3YA",
  "key38": "4JFUVetzcP4UmtWcWs2axXHc2SGME3aBNiFqKAxuuo7FK8Kv4ChJumgKZ2akM4McuYv2r1Mb4M4FBDv5biw5CjUo",
  "key39": "Go6oTgsrAdudo5614oAfGkPVrG5frCP1PCzHCDw2N4tc9oDWVP9gweGpQ81wQmNUVdRJVkWTFp1tGUKFR5AbA9t",
  "key40": "5iJbrGdfd9EBbZsLRv6WjJN4GDD3fz9gwD6a5CaiwA1MvmRigNeo2uLQjUryW1pyeGdQHkmQoQ21ERz5GDZ1jXtN"
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
