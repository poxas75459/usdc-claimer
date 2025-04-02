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
    "4wYtQPQyRoVqkZFipHsTXicrsycfaiYjxTmnrLzXb1SaQQVmAiMrQ9UvSHQaVQtHYsJ4RXwMh4KL3d2dq9cC6t2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7RENzArXHpiD4D7DJbbYEQe5WruLkwZ1JqSkLeaSKFGced3hCUDC88yxuxYDqTQowvsBLTHavmhmwRXSE4bVYq",
  "key1": "ZueVtTfc58RUkGvgjT5T6VfXobc1YdVy4G8r7KtsFphivXefeHfVquPG6Z7LQWkU1H6X39nLXWzeZCbCVWkMYn5",
  "key2": "43srjLuzz8wR9W4wax6F7Mj1XuXgKJVqDMqY5V43nFjfwQJA4xTCQPAGt26SuFvF7TQquwkuZVh4XfeA2XGTFxqT",
  "key3": "5jZ82AmwKfpvyXVXvquceTz3v6PZJtXqfzWdMuvzVaJihn7oZuoXTwqUP5BGZkoeJqq4nwWUMM8pkdRqFAX1GAr2",
  "key4": "2CdpfzPpgwdqGwvGcFQWv8k3xw2fPL12kH6EUfA1SxRtLU5n5oQEd43VqqZUgchu5WaAugd5TGjn7BtMFdXnVieE",
  "key5": "4vXMP4RfbyX8xNmMnzTJW9R6YrEKVQaHZKpcVRySAzZbs5YWWLXDo4attoBCf7oC84jc3CaSzoEDgmCvfT2gHth5",
  "key6": "56iHVDwBF4pCwrjxAkDh6mHoKEWeEgifKHs1EcUwBPiuzyt1LXjWj63AAa6jtjyXz7S6WRLpWvdVPhQji8FdGFKU",
  "key7": "kUaKbp79Ken57SEwb7QYzMKMH2r5BMUMvABacvxmd2wFnrZYcCPm1bkimkB5hPh7MKNvVxMC7Cuq6ABbdte7NiT",
  "key8": "2Nd2hxRDHHP8EFEMZBwSMU8ReHqToPqSWKbQ8JNWAqfEN8Euse7SQgF66xRo8wgfP3HF6w6i9W1W2UQieq91wp7q",
  "key9": "2qSfHqEvUVMQVqpA8srLX2MoVCZejTmgxRvboqBCYvrueEuQ2NTpbFg2f4WLv9KQGn6msyah65cQENcXTQuEBE7f",
  "key10": "7BKSuUTtkDVWRranJaceR9tq1psWXDJtYRSPpx7t4arVhaUvzf3YoFAGM93psrPUaPxyuT1HX7PuXrc2KPebJpu",
  "key11": "2TvEi2jBH9FiCCgmfCohcGkUiTCkZqJL3gkG1uYydYGUxzLAftDuivGZ3acA2JJebjesjTuUiPgPuzm8xvtYVZpV",
  "key12": "2aL4Zvc3kGHdsxUnM1cpXnH9A32wHDj4Nr98nHBzBQgm5gcm6rw9HSbi8mFCsr7peSF34F6YuXd16fE39k7gQo72",
  "key13": "5LRzg1JaiM9xpYrF7ikUbB1Eagbc4B2fYydSNcryckGf4QX3g8f8t2jNdrgsSpCARQAADYQTvxGUvBVyCV24NoYX",
  "key14": "3hsukfKp3du73CHUapz2vbfvAUyEqLEstp6TTGArZeSYU9Zkzyqsh6KWciS8ry1DHv8x2avbarfTjtwCDPD84Xu1",
  "key15": "2XLnsnwwpJ84rGbRcSGWK7ekgNxX7bEeM37cy1z5YkDSEqGXSYEceKhSJbCaJSXU9sg4rFoPDenrLr9q4FfSuL9h",
  "key16": "2sAKcG5kTZPCLY7c7tobCymvDVLtDx9NkkbEHgSfb4vqs8tH6Was3ZE2a9cXFN8nhsmmfph41F2CWt8jorjQFQqC",
  "key17": "4ZsY3ZsjY5CNc37fb8SsF8B1wpjrKisewYK8BPBVzqZdr3XJXgbVuXCgM2QU3imLbnVXgBg26BbdySqLTs9BXwCM",
  "key18": "4WorKrS89YqDrzozS85GRaWsbbW1veAjzbxeuj23RjXMDicAcDr6k3HNyBqqnNfM22ycMD8VPFM9hkY6e5VD27hR",
  "key19": "2HD8eZ5CSkr5MhUhHGXxjfBoUPyZvpjwvyKd9gLhNaTtHucHc2yZBQg2bKZoYs15zPZMxD1J4GcspyijKyM4ijFd",
  "key20": "38AsRDNbmyEcuhcHSfx3qQF4RBFMdfsRjgBWidXJmSH7zj1znbvNtW4ft9KJ1NrZXPX57wo9ifYaJiGo98QLrAMF",
  "key21": "xRPY37NYV5Av8jvhee72dBb4yv1Adqz2ZnW4gtJ4Pzfwf7PQqVt7Eoyb2UAie2p5FkujRSS6fjoXGYjqT6um2Se",
  "key22": "22E4r8UVECmvnNRvhYVWp9d2JpMEJibrBH8aBEMzqVEnhGzGd32tNeNYPAw8eGWiZ7o1qgnH5YCSi7yxm5Ez5Syg",
  "key23": "4RzBth22BccNGPDYiTmqwTBfMpt9W8fhrgzi1JrbHw45iq7a7QDtFvRV1AQSgA6nsYV91NTtj1ueN2eK3M54WN3V",
  "key24": "Mf47hPwtqoUx8erFDmwRHiGJzcVkwfW4dGqzBpDcfJoJxefXwJsRTTKXbNys5j2vLrgxkaqMke5vuidLX8eG9MP",
  "key25": "5ty3diniU1WFXW69uvaWxbcSLqmtttMeXXViBSfSpZhAQCGCiv1S4X3d9d1bRm7nP7tf2gt8XHoNXGjU1nABuRMD",
  "key26": "5tNRqJ2PoQYNrfvbYAEZVnK89ZLys8wW3fz32xmvibQpXA5TQobDh53bF6noGavb5BnyGFAC3n8NzzBHhzG5LWtf",
  "key27": "5Acf4XwjGq6VtEnMHMS3uwCCow57qrxXLCw6gEHfNjXpS2GKL6GHZuQAumUqXExVUfnwcyT5KUExEAe16K4VywFE",
  "key28": "ER9JmE1wgvaxVaSksLzSMvBAKGpSdSx1Pmc6SSniYMDWGYgV2Abxgdn1t1LT8rveoWi37creMCN1gu5yDZyGdD3",
  "key29": "48KnkE6ePLSFEx3L9KyZ9RkVHJ2oVxG9XnHbCuoyo4epHApoYpj7qMLDfniDyLaqRvB8hRt4ar5EcLEUsqgKEok1",
  "key30": "3LdmeeejrGY27c4i9pfdoMUa1nEXUP1ysu2XBN11TPSMUyVahGhgVb47YKVAzhUxANrAyCqcQc4Dd2eEGyz8NRew",
  "key31": "55GNn8GL3tKdpCZtW2hVbiz6ZTDByUJSHzsitfmAYhTH45rTzaBjjtgquxfSbYKJTZ7syBpDuFwYEGwKmBj5npSs",
  "key32": "2Vo7Pxqq9jHnPisnw7hS54TFeTciCMKTjpEsB2mfrULrMAWG5xJFJzU6WQ5XpYFeT9DH5CnRMkFiUGwEr7HEYBHr",
  "key33": "4bSDuy7F2aygD5z9SL4E1WYnu2Y6D6nBiaWtyVAQa9g8RtdP55vTaccM6WQBMxUT5dtniWwNypCPC66MAKwCEsGp",
  "key34": "5eSfYwx5LPzP2rSRXeUoKyF8qmgGrURguVWPLUej2zjc6ze2H7tTdRzxK9tu3Vm3w41kG4iP2bvYupiFiscfoNoK",
  "key35": "29Gn3AbsAKusFa8645Z3sbz2L9QMfFW1E1WPR3RpRgdeBYuqbp3us7UjduuyCjhsTMSEB1S7Ystb5BMRNGW4iDcN"
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
