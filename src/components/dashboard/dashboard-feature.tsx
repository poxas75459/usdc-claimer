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
    "5RCJ98H4syTjt3xuAcoGTL4moxkWzBv93xDvPJtqT57zYrbALXuCVN8kH5KTKbaRzBo9PM7fSmSThi4wNnBYxooh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWsKnALwj98xrQwQLvnD72W1jGgNt5xNTBkgULVgQ8WThitwbfd9hrmkcydxHdLJrZdbc1ru9v6pv2EBWTCduoP",
  "key1": "31D5jVAcr6NbQetojMW5ewtf1UrAx3KeQJpVfoTRYsRpnemRc2HP7ictWov47TT4vUo8oMtFdJradjvAsCMULkFR",
  "key2": "21ekiTrDWAXGVi43U9warPjHH9f7MfFRYuKKrs1d6qR58Sg355CL6rpvg9WLErSbdC1WSrN3M413Btg4EjxqomNQ",
  "key3": "4LnvG6LAo75FkNCwZZVXfJZYEcRW8iVH6T4EUS9vneKSHabtqvkQFutWLbo8Wx9a26diqshzM49BhGfBdQdGuPgV",
  "key4": "2PdhHL4piBpked1V8VXxSpCAdxeqQ1cfBaaYiJUKpTub1h9UEL6DQWrQZxQMsYzQLY6RcuKwNxA3yFegRW9taMcp",
  "key5": "4zSZ3yd7xLhGwhUsTkMX8r9YYJRbTR2xsc89QdMz6qbSs587XR7CA16x1SDSBdrXgC9vHuou28Rj9z2w22oGMVDq",
  "key6": "2QJ5Hgdnsdxcxi1XjLrZTYwvxZyUWinw8yQj6hpansTuKcjsL8qi8sQC5zSESD9nc2dissrFfUJsUtC2sgSb5uv4",
  "key7": "4PxKqmZpbcUCkvFoL2kKxZfyfWkWJwX1tTkSXeyBiheCzkG3arZPoneiP92fphLPZATH1hV7YJGYcguBXe6wW6z4",
  "key8": "dYzxKcxTEJsZCZyBybaugkJsD4wpyx13orzDgtE2AQ4oUjmSbA1EWpyDaEhzWHwbfjKcEjk5aCQ5jo7Gci3nGoB",
  "key9": "3yLS8gfYNwAiw8hZtwnYwQgz4Jr9vahPJA38LTLzjuaggafeXjfLRFCW9Qx2VVvzdiVYV9wmxuptxo2k6Hqvmnyf",
  "key10": "3XCrGv73vx7vMh8S8DCuaM6axJNhKGXmvNuHhC3u3Czb2YF5n4nNGbS2VCjfsofzgLBu5tC6Hw7MwhTtvGFnSWhd",
  "key11": "2Mg2vGTtfhN5uH5LPwUbcnXwzCpdvEBj4M2JR5hW8iMFyEjXrQN4PR89tCQwKS6oKiX45dEubrS644Sgbwyeghp8",
  "key12": "34CRKRnhrWzaW7WAYUUSywUJXqZ5kzeeNagovqmfT9J7KbSr7VmGtdQmhc9cpCu4ifUxJWVbzUvAJ9e7AHTDxjy9",
  "key13": "2bd9qVL86NK7EbkyVqRE8DVnNbMszgt4c6DNsJhMqDUnEgDczNsGBi7ZxSeuNxoeF8k3JKJjtrwMrHr8Teo7huYS",
  "key14": "44siVecKzp58u8KafnN6zFvbrPvS3qWu9vQLtLdacurmQwH2mVvM9zajUhj1cp47xYfcE5spYhq2FhG36Xfu9PK",
  "key15": "2CmSSbbeMiMRpvxPJxLZ2BxxFEvAU85s3WjifbfJpyRLFDYJ5CGkbroik5UnitSK3XruCSha6XYtgi7fYMAcy1y3",
  "key16": "21x9RPbc7FNNt9iy4TmHow8Xnf4VfHHe2ZMMLHARMPpdbUmehnLGcAEB9wm4Lmc82vGJmCW6eBUQ6Zu5G3iSM8S2",
  "key17": "BGH19DTNLt2SAJCP9nvsCqCsmPgEFGv4WA5NVJ2yuwkA2hbaKcsHQhHQAxZLxC69Y3VfhWbkvtLHd4iMNhv5czZ",
  "key18": "2vwWAWQiUMoK4dtHY9AucMQPVxerUWjfNLyAWGJJuHa9oCJ8VHj8HHRJKcA8Pckda2Yxi93Wkchv1TYhJRY6vPDV",
  "key19": "4SZngNFwjXomX7VWiGG6mBcaV43ygaNCpnUNPNGRarUAZGqxkxWxBJxmQFogt2WiqNNSxhUikv6JsQGkU6GtikRC",
  "key20": "BdGTN83rVqy6dmegGQF32VC2cLk6dUcZuPQV2mmJAgPwn83chbmRFysAovCmWpX3mZLQWHWh5Q4oJEyjECLXHjM",
  "key21": "2pUycRyNAoEHpPitE7CJdJGDX7BN11XmhANY3Tp5By2CE3vVsG1aTPwgBAXEAAzE55BBQNQU7JvQ2ynF8RiztF8i",
  "key22": "2SATqf3jC5X1SjdCGnzfLz1hskFitTnP75Yu7SjwxSKb6K1VKAXdo6U4nbFgh7dkWyZ3sVs4xjsW3KzyZ1Edn3qU",
  "key23": "5fV5ppoLVmJc7aFyiepsj941g9CZsbqELH6uNr3ew9jstUwsCxpgyNMXjeGc37Jr9nN2LH6BwiVo8zvjGxH363qA",
  "key24": "2bDhnA8652M3Q5X7bpqk9LXbsY2d7xhgG2ohqaSbBMvyTA3q3JsuVuLEkEdtAPBDknTkz9rwNFeqZ56cM7xceCjm",
  "key25": "4TFmqM1c2eyCsZFk2iG7tXenpZ2N24uJ7RuaJW4drDZEtmegXxYJb8kpnMtHfYb1Z6vETeS9WJikT8ebH9pV9q2t",
  "key26": "4CMZyZ3eHHpAFZBrRkEt5K7F7uB5hxr6cdYUGm1QJAdjkNFEuTyzXs2Sabsw6NSbH2DCCnqYNXXTQrvTwkPhczYH",
  "key27": "3sqB4QQCGdgESix3i5qFoWC5d1bgMutbwoV4hNvTbb2rHNAUfeFfj5dCjkYVyC7xFTKs8sFNYVQGSJKi2tBpbehE",
  "key28": "2He5hTpUp1wFm8A8ENgKeTxfiVxawXiy6erQEyJk9B92t6k9XCbhFkheUcREbchoUHg5A9S9epEgkcX9oZ6XAGad",
  "key29": "UWzn7zKDgV2BtwBBDc165Q3x3gympCr19Aw1B8UU7BpVvugYTtFs1gsKvXxKUatyvL5rdaY66sKBuStyP6wXcgF",
  "key30": "3TLNT5jVFzdCJmAK1SzwMwVvJx9Aiq3A3fad4WR3yLoeN4WepoKxfLvNr5H2TRkZyyTgpaAKCNzbfqjkvTS5hT94",
  "key31": "nKEy9VkYJJVmgGHDJjYzTpNoPZRnKTPjmLjLZJRUGNaDoPNfeHMof6wRCKFhP24Dxez8uh4qzZFdathzZskT27u",
  "key32": "4Z2W5RjCRf1Jtm7mck5o9a8f7xJ8gHscVTzW6zy7CmxaTxowmGhEWJ1bC5sNYTu2PATStQVeXSRdS2Q7UjyXN1fX",
  "key33": "3vZvUZcjhxjqDpXVSUcfWzcUEj4jpkFCF5a6Ek96RaagmnwbyTBBJ72sFScZurxTzCPYA8ZXNF4j2g6etNQASm6M",
  "key34": "cW6gSvypRyJiG2N64uddXNA1hFNPJbhwjdHK7aPp9pL5PxR9Epp6H2mu1yhBNGPXNSFUaqQcQNtxEYV5GaT5tyM",
  "key35": "g6HNu8DjhjhtqThvSXDjwHDiRf7EqVctp8dYdKAKYvwSWz2cvejGdRnM9aY7KbuDhFQmkwVKfTpV1Ns1weS1dY1",
  "key36": "qAWmuHMMEigt7W4cT8ATNFmi8gSWbEruYrqeYCKPjZtLv34BQzw6874cA2m13C1SVmU49t2ALETWY7o88gHMDLd",
  "key37": "4nFwpCewC7vPQPUhxUTHjietYGLD77TqgnAqVMB1QuZtzW9oFkeHuBMk6wdZeas7DmdZKzzYQygWWECD3wknX1K9",
  "key38": "5QNU118JUmY6JHoBR8mKGXcQjWDNVtWhRo52yhYnEjRLYmfYW1QEU4NXVHRohwjwF9mHmq1k3uXQ3U5Ms8wcCato",
  "key39": "isGd8tmFNRAYQtMZV6VuVkBgxPB66VNsnjUzhuEXT5YKb3W2f3ds262MDLkWbJmErRv8XZUuqSM8c3vRiVevCuN",
  "key40": "412eqLib36S9ucP9m94SZUuM37xvXCH3CtFaqXRfrH3KxvsGekpU2iGzZihEu8kAswVGR8E55g8627y4koWSAB8N",
  "key41": "2ooVTUphinpiFAYZsKEAYjuqsWdq22Wy3vvPMz7iiM88FxzfH9i1b6RyZkpxseWMAvtnkX3CeSFZ42xBMHriqGCg",
  "key42": "LEaGwidfzmrefLUhUbcKGgag2FRBsXENDt5PzArLqBGkDRMiX23redZPDt4c17iwJnzDyxUURdmvevnFPLNQ6c5",
  "key43": "54KDSaZiSr2LQmPoq2naQ7aLL7A22CewQtiUEJaLwwsAdAAk3m22zGBuTgvsFcitBN9ZgHVtBeJryMP4BhSqEsk9",
  "key44": "5ybrCypC1u7HbYGwY8qVUJhqtaA7QtRfG1TJeEbHePYTspk6WMmxURP7hp2G5SXsDxx5JyMqbKUGdND3HQMDyVmu",
  "key45": "642xkpzRy4KHnfyijcgYdrZRk6Roj6q6RHWvQEB2KFDTysQBYpaaBjaFRRLkK8qTV9DHhYGrG34FvNYyxRZ2NR4z"
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
