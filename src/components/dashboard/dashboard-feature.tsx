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
    "3r5td83DvLoAuzQgHzhQFhBpyXhwNXTvB8Q6eCT6kPWdPDAhv7tLsHDPXfk6RdJvu9uLz3DXUQ1sxaCBn9mASvoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whSAsUmrAwqLKPF2wXyqDbyZW9RAfaSaHDiA5xfYzuVXkFzeQXteARuAgYTaE1tDSQGUCypBnFGU6mJQT1rua6C",
  "key1": "21yCcMwmtf51nVzPxHZi14YJ3a1v1E3sCj95CDEWRRJCFKBaqTML2W55kyrWHHCM7ZUW2Q8ryStb9oXr6iqYLkc6",
  "key2": "4Ggr17SiL4SQwzTN6b3FsRPyCpGPaHBTBXvG7XamXoKA9S1pUxnrh9WBQWsGWRBToUkjbAgPuQyonWDgN4RAdWRk",
  "key3": "VNEUCEhMrk7oSEFEjXtAzPz7r4gmAeifWwa8nhguKhH6yhUnMAsao3N1Qagua37cwsiLjPAU3i4KzqbMLu3JHeK",
  "key4": "2jb7zyZuXkKDLkVpmBYUS7XgmxXdwyEhoWfNToVvrAgmRwE5P3NRX3GsMFYtceSzcV1a36v4tJhKG8xj5E8KvmUM",
  "key5": "3bS276vbNnibFCtbjDhZUgvS59EVPVBfA3gGvDnR3xXX7Br1XP9dLpU94xiXpWwakETZJiEWoZVXgbGG1uqwzuu3",
  "key6": "3Qy4hMLew8Fy9ku1sL5tSbvGdEcQ83VmExoa3YbCa2GgAg6FJPQSUKYhBGTKBswYQVVKSjvsu9oqnzX4mJhk7bZi",
  "key7": "5RKyusfd83gSGK8EhvUFVSbKZibSKB6sbgx31uPXyQzpQsaR6WYSstR4EQkywuW12CCkbcCtbtWj5s6TfLeCntnp",
  "key8": "jEXmDmAZEkR6Rwn9Aukz3oN784jrqJAhDSyUpE38LWrQLyg4fQGqKCR6P5BjN9LRf16fpEY5JFKL24Vp2p5maME",
  "key9": "3PDSfnTytg4dX1FuBUE2LaiCm9iEq9NEcq3hum65REeC6Xjwv36KAMhJDht4YPsH8XFDcxs6uPncZPbFF4yeuYBi",
  "key10": "5a4jEbzuJ4FFKvBBirLkyWeBbkY3cZs67yHP3dCzC3jGGJSHdDbmsdYEZEvaMxzXjKr1cW2K67jpPHCNVyWSc2pb",
  "key11": "24uMV5txdyndYNfxMjs6wM9NDwc7dvmgwaDKCb1G7r2prfUsRrsrmL2SrmCGwjHCeqrEwbCp6febBUJWHMbcGdSq",
  "key12": "3RnpKKv7fM6NnTMPYLbJcT7uK9FX9sQ8jy3ZZnp213Hx5sxPkq8jQVDXsJW7qGcaXV7rThwS5w4wANrn21xygfnP",
  "key13": "3JRDDsEYGs3uKpuNZLnTafXCHVgEPHA2g5iW6ey53WhqeNUWMkZzVzTQqMveRjY5hMGn2R9gVnyc89o9k5Kbss7V",
  "key14": "4ysnvMEHC1gFvnQg9pavZ9MWvWrTKtN36QGrCTvFfEs4bAkG31uUxgtwyryyQKcBraHFv6nvcn1bAdEZoEp6qC8D",
  "key15": "4tiawKaPdKUVDEUUvDuu8N6A7E4TwFtCR1FXoLwnYubDQujyzDxsRMjtt6tdHWVZWtQVc3pDvtBEL5X4uJSGkrTX",
  "key16": "3y89RfniyBDv87VAUKFunBRHVN2HPyGJZYBBNx4knc2YruuXKRondP8wKjkLKvr8FrSr37t2wCbWm9EDuhaKAbcF",
  "key17": "3QbZcnHopxuZZA8DeLoG8HqdSCfzFsxuFFCFNfYYGefHi9NwSqztHXaSfHgF88ieCrbuKcgd2o3p67YRM2VhztgE",
  "key18": "3LSSeGCUfdC4riR1QtvYvxDMEfPcCpUzMrCegegYZ24Hnqhp9mLyW2jTrXGBqdz2rxfAdXrnwYi3sUEbQhterWMp",
  "key19": "5U6bpJjzEFESqpQXf7PiFFJHiHrkX1fSaY1o7Cjw6d49usAKp73djhsy6Wq6iDAdGZYYVzCS1hHFeCBKmXEWEwgF",
  "key20": "4FusqjU93PiKNDkNq3XbMsD8n695Fj1cmHNYnFNNWiym1VLhoCabfAAKzLkbPE9xFQ8yt9sJDunPwvuA4dGxQyVS",
  "key21": "3yXFSmdNvbeEze1gL1Ca1c3xZpxFNSXYsAnt6kJefx57VG93B1fHUhzXnzH3G1o7VSQMmksGi8QaS5LEahoduqzt",
  "key22": "54J7VDTYo4jDoEvHfkHfxjBKLbV1VJ1yhKCW9yxSsH7M9xifM3TsHQ1m7AmwA8Xa3WgdBN7YBvM3Uq7Vu2z2MduC",
  "key23": "3XdPyKffAeDXrcv4uoJSvD9GGJFk9PDThFVzkp1hKKnfF3RDvDuQehywG7ojnbhoXQcPbqFrqqkREmwKvanKDzDh",
  "key24": "5LxnmjnfK6wpB6zVde4kLDoLcWfjX8uygQfHhBXqptVxHu5BYLe5CqpVtkjNBRVVaAKvyCaucKrh9Y6W1HdmwWxF",
  "key25": "2xwWD3r6FKw5r5sSqD5ivjJVKBE2fxLrjqEHSXJfoGtPYRBuRwfBtsmNkPfS5qdrmVHZM1gZyUrBz9UbX5dNfyVT",
  "key26": "3xvAJ683q4mFn7FCEu2i2worDeJvPW4EuVFkwYrodncZe2QhuvJyYB3CXVoJKFS9STcEygJqBNcarfZmMe8cqCKR",
  "key27": "5gLh6qRrP7caK5vtyhL7ufDZNRbFRDur1irGE3paoT2oNkqWdoD5xBWE4EkY7xHPJgH149TvAbbH7Vcb1SAio63F",
  "key28": "36iu8PZveh1mg1wNfdt9H37SG4wPxuRo92socLyEdnnZhSskaNa9nAHbm8ogu485niB8mAh5TcqTzxNP5atbkADW",
  "key29": "3BDGr4PpTccfmGDvxmmdndce2xp6mJ2utoXxtdk4bR3BESs5byVgqxyXqGjoVtFUrKvWW6MxxZLzj9d1tVpK9Dfa",
  "key30": "44WqcNjThtKnrBUv6kRMKCZd7mnAsKrHVxE1FXxiRERcb3VKEASE5wGa94CFSdxKENUxNiSvutn5qPpMYKFw5P6s",
  "key31": "3aT6agMhFESFvB7WAqMP6M9WdSZAKYHWav8WL9L75xnkx2dtMhVyN4URkcp6bsFEALq7HUZj3NWyyK2VW15tWxrd",
  "key32": "ByX7R3zY75vUUmRiwunvG23iA58fhngpBfzHxDciKm26jsCi8xdsbYFEqHa18BTWAtjXf3LdAZwPnPZ8Rn8SWgg",
  "key33": "5vWUAUR5Ji6naGip7YcHVJQNDY5h2Ee89krPpCbatki2Y3e87NSx3aQHxNZcxt1hrErYtfuP8MyYoLsFs4TAqjeb",
  "key34": "359UXJjxsCwxjhUNePeXen4BHF6CWJXA5jRJSSj8zFPGDWyhJSk4Cka9diBQCSX7LGSMoAyvhCpKpidwXDPd6Van",
  "key35": "47GiDmjuhQkz8E2EziUdKBtdaLKKvHWsHt21oFsBEKeNyY2ULD6qH8Lh8MzUxA2PuAz81xMHVPMXHCNRp2yyYrwY",
  "key36": "5g6AKLdf3D6gTUYMe99DBNoKJvHtZJuM8jANphswtA2GcKBrGhaR21AJoU6NEge461yZ5hQfaME74dUR9Yv4jY85",
  "key37": "66UG9vnkqzVfuWMhs3JgNA9kZ7DJTRTZvZ37hng8gj7fL57peZ8f1atb1NXDEKPUdZ9JaGtHJLck67DWT7G2578H",
  "key38": "54QKdU59To9xdFRZdaij3HAtmsE9NBm7s6jATbSqTz4AaY2PVRacH8KgsLDyGUumfpCACePh3mjMuTcBo8d9uBoF",
  "key39": "jJ3HAenGn5uEfwkeCrgAYgQ6NtW1GrWvZxiUS4herdqAHomCcoi2UF8q8SbnXa3GU26R5MBg98mkpZB7CRxSxj6",
  "key40": "4CMf2Bg91J8iQH38yEVPBpuMnk3TigASfKC5aySqiqsum3rCgeZ7tMgsocCfRn7g3C4kmfkMdwp73oTcpgrn8GxU",
  "key41": "64LZZNDSVConKL7vHYXehPeUHeuXxajbfuQ6sjwDtsF3Y8S1rBhfEbsmXLoBe5ra9DEuzdKAnMVc34BEzpYBsKMt",
  "key42": "3AvvsquNHWhqcR7KcMC7Z6eCkYz5Be5sNXc26q6QQJyR8bucQ9SEhQu3RW37LQ4jSiptdrFF78pH6wajqqtYaEk4"
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
