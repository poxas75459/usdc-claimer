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
    "4EPnzw6TyUWubSowvuwRXnAWjvf1TVdC6ghxxyqu5kczH9GcVt5dc3Z1NRtLzMTc7dj1rL1jejxKH2W1Bagka2K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FcxVukA8Bn2Q9Gr94KoFvo1EDKcQvuLcMJwCcpXSKQcnPHvTYACs16RPXCt3XdCdx8b4hTRVjzwe7q4rkPRw7ms",
  "key1": "2E9DiJ6RBs1qioJkboWGU4RYBH5eDFp9DwyiZTnwbJTVdThvSbdqxALyR19h1xF7FeEi6etaYzCStFHZb7F9553Q",
  "key2": "4sFw3FipZQxsjQMe7o97myRicVLDzWCvPqc1As9YYojvYNUEBo2U2LjahaXmFM7gUx6bDWNpQj6qeeD6qaCw7rZB",
  "key3": "5pe4J6jS9UrkLb5UBDqazANfE3FqtYJkTnMeEkmrvpnkch7XCDLr3XXoo5YtCqV4aH4WeGKaMxjwAjo9Zp1mKbHG",
  "key4": "8ii9Zx8UtGadWwwgz88N3SiX8HQKzVPAwpQRA5Q2zcdKmTQt7J3wBwfSEvDstsU3w9DaQiHt5w1Q53UP5MYxZzw",
  "key5": "5hhY9u89Nmp7G43djDiqqLfGUD4oVm3huNqWuqGvSfW6Pa1S3dDiurFebMpHpunJnvf4nEt8u2mXvpNYRDJVtiwt",
  "key6": "mTBAn1Xenm7YbcxV1cQvRKz7KYKK8v1SBy3UTFY6jWzy8sbyz66BBpnVaPHuua3PaLAXBYboEZYs81YZXKnG4PH",
  "key7": "2dfeHDyS67okJjhKaJeYz3Wi7vewLzcGMxX3UPsYJj9CJoezdA9AFYPiRg3tvbUp9fNngAi4Dwybn23C5LxxGAKt",
  "key8": "4WqoPU87J3TQ2PNaEnp1hL7LjM398AevfxF6iF48QTUtvFMUDEES3BHad8boiEYCrgTVgWh8jnwL9fZefNiQEZqr",
  "key9": "tnXut12WgQvYFatKAJmgQJuGR74tdypje5jKSmfHYk8VGqnphY7kaVjJDrdaZPHvRmN9zMQTkvztfRy33J1R2tc",
  "key10": "dhy9uE492BvyBwFs77eSLdVYcrV6N9rpUVc9jBrizAxhm3m3odS77H5NoPquQHfU2ii15rgtqbVUU453iPBqWi8",
  "key11": "4TLmn9g8dfFFw9xg1qnbBQpjdA3dTKUZY9554fpnLTAUTg68C6MqE1DCjUCVPLxB9zRa6PFSYbbnY7c6N8EvS1MX",
  "key12": "5YE8X5eAu5JsMThQaDq197apgNjhWYsu1GbktZfKTdPnrMffZgooaCMFHa4k2uywSFLRAa8jDzRLMPDAbUvREkwq",
  "key13": "3DjxDgq7kcTY1EQL8dVqRNmosxAntqnj38osLXjMdfB3oTvy2BEm44JgtJWk6kUdwGWGuK2MLMZfr56RWj6m7JkP",
  "key14": "3iWPMrEqK4UNtH5Aruadpkjd3HHgeCAcFbPD4uYx6x5fTDadmjnhNvdK9VPUC9Ubikfo8HWbzXAZNjxjmK1wEXph",
  "key15": "4k3LCWSwjkY1U9UVhDLw8VRaCdyoCw6B1oUQWfaoCnRHZX41vXzRGhP6n28L9UTnY2QVLewPNWq63RsNYP7p8xFZ",
  "key16": "4Xp3tdGS67meDvN7CrQk4wJ9VEmmcxogb3vntbxPtVjg2pdz5Qw74Ua6jEvMSiADS7udR4wM9GdyAQR4k7oAChhU",
  "key17": "5rmJv5R8XSDYRCiqmhBzG1mWDGjo5gjfoNQCbtXvkhCxkpjUwszL8PBe6dS5k9333P74CnMYLRw91itxUpx7eL9H",
  "key18": "3aDcgSQ3dGkWhKzezU2183dihv719879n3PfEA1Pitssgq11RvXDQ9xAqRRqfxiSfqK7orTVoTCQPPmKm4BrLwAX",
  "key19": "UmH1A54jZJ6rdkc9zKjxxnS6wa3S9rnj7uDcadEUMnoDtjsCoXepfMU9EKt3iqjgK8rkB9WvbuURTXCCLSBsA4u",
  "key20": "4PeNCFLa8wwpgcmQ6YBzcmgxpiRm19AdjLqW5dpWCVZK2jRbTUtFX4sEfPJBVB6X5sioxxGycDGehTh2izWSCeq9",
  "key21": "XkVyB6GayBtCiHM8k2qMkehHAuBQshV2RZXvuLhBAGiDs93rdff83r8LsXi4FdSgMk4X8VvehXiSLE7LfD99Gq1",
  "key22": "yZYgd4a9MjKaV2icDYYGYCFxX81ghGN6YS6N65upBy41FReGSNHTf1TB6skwmUNKZ5HSCeJmaiybu8ZuTUwDLRL",
  "key23": "4gUYiRWrxbJXYhokuKntLFufECjAjadNub9EUtNVPW7h7gYDFBxFNGTtg4qXm1p8FyHP5KSjTMcWhfijJoQpPhVq",
  "key24": "52LmbDXbcWcVmJcTgpmL6ev2eASDZUkgXUffFXmU7X4BfwV9UGkgWDsCexzsetCrKh4UbKE3GHz2CiswUGynYS9v",
  "key25": "61XR4aT3i12YPdG1jKSM5yZ6KzQMtMdSHNzpqgADfzAZvaaUr3Hr3zKDnNFioKsd98qbUpygSLnbUoWX6XEtFhEh",
  "key26": "5Ag1LNZrQkDowMDjXLUxZDZ8sNVxKWDoFWDBXw7bQZZR59PsR7tGNvukAgJ5sy6Kxrx5MnPH2NigyZJQWMSoadZ3",
  "key27": "2gSd1c5U9fa3yS5BcZLPaTrRh2VRDcXv3XEFEqJGdJ1HUSnNwJTMH1xUtVxHsXEAosQPydRo5p7gmeaUGoRbrutY",
  "key28": "2aJKKBx4pqba6pBiFFYBHkZhuTNAEfFXfwdJbNJ9KMymohvpdsqvQb2EGqe9vt5jm2gnUD8f1dzSpKNutBc4gmxi",
  "key29": "28WXYbyQ1bN9hyqJ24GTkHgGd7aTXumrd97naXxLCDc7qYztofjYEJJzKPLLyeV4kWJKnMasBtCuPjoWJW5kTR4P",
  "key30": "2GgqjX3FHKHsvFaKhhNyXDdA8yqy9tuRoyXrh9ZFRTkr7JmTQ7YtVNPmPKdjrjLNSAzH5UNbcEAotPs36e3m1Ltf",
  "key31": "3EAWrorCSueZ6onN9pe9PTouWZyDZ9eyFzKBrCCTkay3jJDXBeqfJef7H4YJTY4LvbhvMiLbxcxD9WS2beXbziwU",
  "key32": "41upRRtHny2HLkfbJpoFDpwpTufdVdvoKJV4cdcDYw3pRCfB5QNW1xC86KBdirS3SqeQ6SGLbe6b4GcKqHem5XnY",
  "key33": "63C8ezPxFG5jozbQ8mYLWUCPsvhRnMc15B7MrtMDs7u7CL1UW2VUwsoqTSeedFmjSTfhVy7LsACtcGtwHmY7NT6v",
  "key34": "2Z4YistUgLF7fDGqX4Mwh1iGTtRPp2C9UM9rt3U4nw8UJzHJ4htfY63RYdWgpes7BVMEZeXeHvCQ57c7nz6PtWck",
  "key35": "5qi2uaTcgB3Q61kzYWRzk9AasCKmKXmVDhSv8kXjpD5SbtL4Hrw5TFwoqrot8otRXmVkbnW2w62j6Y7W69o4xeJM",
  "key36": "3uP6ktDSKUooeBZZhemVdKKTfBcbX5yhCmWCPMdmp2J2nBRgSBkkvURdE9CPGMwkQJrkmCVnQdt1mZepkvmGfQij",
  "key37": "2VYr6U47HYfAdaumY2qRrqRjNHx1MEA11AtrgvmFshwzauDDHJVSx1bGCcV1EpW1NYEKmc2tdjvqrvSFYFs3cxoy",
  "key38": "5QjBjrYyA9opDUzCADbBoDATWnMgWEjbCFhdfFu5iJLJ228pQTjK3mQ8Bawc4vjvBHa65kVoxkkSzz7De4KzsLXV",
  "key39": "4Wv5LevB8Rn3JVmfMw31Y9VqQuj3x1ehjttQ7acMneFjhVo4b2v5VKsSDNGHNrs54Wrj6D8G4P8DHCYGKoSHTgiM",
  "key40": "2PvogYKSi7vv8mciVRb2pTXYkAW65wsfcctCfKUwxVFtWqLy4NmMYQTCTDnkcUAfH7pQhN2pRwDDZ37CTJ8xqyKv"
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
