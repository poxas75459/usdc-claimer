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
    "58En1Jsb4YYgotGznTexqaeQ75W2oz5MBfuRNbuGrNhYxedeNuVRvVuHRiMCBoRLx4yQ8Ybs3H1RBqdp9j9EvW6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yBjkxvCigHfwUJjYC4AsxoaMhJrLjnaKyJoVRgfsie2J23WYK9WhVLNDFYtf16JAwhZpuHNcpKGAsBjoQ76pfHj",
  "key1": "3D8u9RN8v5AbU96zjbbbGGYUEQtxcabajV1w1cx3g5cgkTKmfzUmyLQcFS4uGas7JXju4J66JQqMSqUJmrbDKh8r",
  "key2": "2ii56jXkuiEbaBCv38MdEsAr664vhQ2ArcL6Aj18iMdMVzuSbVZGNgiVyEfGXu4JGxiuJ8sYDsqq5qBJjbtrx3RN",
  "key3": "5QzWwaNdsp5f55x2U7mgGkQroqBciGoDJKT3uV2VchzSwqCKaTR75n75ByUb5RrJyQ3kyVWAJmXEHvhj1Ujajvos",
  "key4": "5JAtwQhgwFVTK26bDcL3ZQm87m7MScwFw1xLyPVj2APQzCJunu1X7vM8kJEGEPij5vzydo2P9dN73rFNbwoU7zR6",
  "key5": "1XZJM8qUHVqEsNd2rJvArcBS2xsKbBbjuBMDMtHexwSX7bN1QYjc1dqpRL9Ucw8kiB3Neu1aE7tPQd4hKuMZYje",
  "key6": "5NjzrgCkVvUeNpq4RkQeaWeNnUih4h7hhrreNCDgDZDm48Q7P8PzWomPvPbtzvB5HNaT7Kns1qjEoo1XZF7zLqLR",
  "key7": "4MxoQQKh6rPNJnS4ErRKdXdjaVjDkYyYqzRn7gtbnUAxdkKXE99T8QUnkJ2dhS8aT5cLxZpsbHZeYffhGeetyxV6",
  "key8": "3VgumPSy8DBzzv7fRSDjLn5Af1mWkM2s9Sg8MJdiETy1nuAP7k1Fim1L9hq4kCmuJ8MBVEWDg1JfPsciFamnF1EQ",
  "key9": "3bGpsSmcxVhHZQYs4oYN44LzmPJqUcgLD15j7giuUbiv7rsQkJfangRV7f1LbXDtFSQ7EuojeuUXyiBQZDBP2H92",
  "key10": "4cemC86rh4gDPJ5aRhHGYbzYPBjsFdmmRW721nHtiNfegvXCosqnZpMzVYvQma5i2VXLDRxhN5xXSGa6GggrWAVo",
  "key11": "4KC4kuCmDJBsBz2WbNSLxE7wsZSLNB2rnRmWaZj5impxdafHtKzW3m9Yir5VjrBHSxzNxYFuDWZ3aoV63CCFS8pU",
  "key12": "4G2WV78o5QJSjkDYuQp17WssDUYXGQF7fS5W1gAfBMxX5tMbAVqmjoXns3CRWWd3M8QVyNJavn9FoQoZSowyH8kC",
  "key13": "3A2LXvkDy18xeG3uynvFiVXGhsT8AvfRN8rTANDKUTuadaUbJa4KRRoATJMxg74ZNkZjQD6DtTLLCQvcBHAj9wUp",
  "key14": "guN6zbBg3sYg9u8Kkf9EdFVsUPVBG8oE6wek24bdBVeJFXJyaBkNRCThNTccSeP8LVLGTtWBobmwCQkoSLHhUHd",
  "key15": "Uk121RrbUoP6dkadGJdF6h66W9VsU5c2VhSnQF44Arwkpbseb2UM6NXnQGxR1tD2ERB4LQx2eLzYixsXmkvCFv8",
  "key16": "4ECsiuivwHwHgdmdVXQN9hna3pWLZDj1CagmzjA2oPC7wF9zE22P5SABFcgzpi8tZvvaUpmW4UkCioVnyxP9mnUF",
  "key17": "2G4vLoWtdevvCvpcYz9Ezzc2Hn7AbdYjpgKUBtg6758ScophWwY9Hq1c1LoKvFHsEhod8axBe9Wt7hNUPq6dwFAG",
  "key18": "4GKea2MXHMvMP342CGPG7De9pKadoH3Gg3UV4owMYANmKHshXmTwQD96Yyn3BzSDBiJhFWoLnZ69iUceFqCVuADc",
  "key19": "47mYfvuS82JgU7fWwdwUaLgRXmJbSfDY3ZN7Hj8fuYjUWe9yaovGsSUFjKx7CWDFL9VR2D2q96qVMhFFYQ7gCwMZ",
  "key20": "25o13QcGiUEvUEfQ4BHr4GRphSMbKrnieJbCSK9AQqTMXJcyHNHpRnC4A72Uk4x71DGyJiLMiGA92KEjmWDvD4f4",
  "key21": "52KUrSesAd8YqAzckpRDrQQLXszHwuGXXbCVjjBMPL6RQzNYrtK4Kg6CrDuGSgyA3nNEWfkHuRtyzKNkMypbFWeC",
  "key22": "DUfHUkTThivzfdSyYX46hgvTm7rHHz5aAKNW9gCsNsStJAJfeQYNTk7FEujHoWCwo4UtoYJ2MT1t5mPgi4ioFD8",
  "key23": "4U2f95G5rMMWExSqUfdwWQXz8mmd38AdHr8aBxoapbtov2iZ8gsBBcJX5JP9JigA8MoSTbsrxYDfGQDegxEhiATX",
  "key24": "2914JZsFydEfryyhnCohD2UU1uFiVWMkNV67PbPmwPaQBBbe8DgLTirNwyodAWQCXothJW9h4SYfoioK39qYiVgo",
  "key25": "5xQDtk9arA3BfyaRvECaaknAMB7M1BUnB5pc2Bkon8UHHWMttZXWsPTw4fgtLzw4nK7pZkymNSVkv8nMuakc1gvN",
  "key26": "4UZ5SJx8u5j6xAq259mhCK8mrHT7wPFocNt15Z1URgqbABHMkhteiVSFGHDgaWpjtjrY8nWPZpuoMmtxyvy3rDvS",
  "key27": "3a8Sxx5gx3pbVmbx6yjYSyFq1QTjwUcE7fWp2QN4EmRQnzU9LJP69KiwoHc6FrkJyKCADpVnmNqWRyFhFFXLvV1H",
  "key28": "59hSgsqqEH8d2SiSvoyGfHVrwJyifzR4ZXKndfM2TugdJyCuS9iR4FxKonhnoEJUkSWsYB8GX6DtMwwsYFdwUaE",
  "key29": "2V4gkJuogDEjDmPBfofUCyoukM7CXK38dJd7ZaRMVUYTG4EJ6JABsw1NecKrTfqpPn5MLPVbikvs8yt3ZdBzx8H2",
  "key30": "33sT5zuzu9cA4Q1VYpbA7SEmjrMH8E8gb7zjcD3HXG2HJPcUNfJM9KRjoNaCWy3ArXvhLioxeGGokU8peRCiD9qb",
  "key31": "3zq5nSVg7RonGJDfrq61je3aPybqcbyNzPgVvC8B7BtpGHjSBgTru6oUm2eKx7YvVabzhY8VBU54oowmKq76VaKz",
  "key32": "49nFMTreLrKxKPFYoK2T8k9tD4s3aswxpPTVM1gpK6kKqDUtG18uEYRzmfATQ3cEXad4nHzrvri7Fsfva6HfFtq7"
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
