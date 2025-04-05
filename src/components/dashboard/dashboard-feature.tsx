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
    "LzFSXWWXTgyh1Q1k26zKvDHTRHCVUvqSwBjRvcAGWUoqMmJNu1uwnjbfnjmsTBe1SVnwdvoF9bhm8WwrDeY7J43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49PbKWxQnraBDpDeuuds27FmtqjszecMNcwj8p89qKFXQNxQ8ci5JiQ7K58TDnHa6X4BttduiV2NtNFNSry7QX1j",
  "key1": "4J76wjGXnvBo7PZWhq3Hw91mjZHjKv7HGqQpf6TNpxpSTuFWdVAe2QSBwmwaDVn9YR6Hgxu9PCYBSh7zLBEwehoH",
  "key2": "qEksVPSu2y6ABv76qtw9ryxaN7QRmoHc2Gu752H69JEoYQfHqff9mZUxG6P2SB9Bex46APEYFEBj9mudHqsQaNh",
  "key3": "4ZHABFTi2nPpqNG3qLLmb29GLDcKuFABerRLgzU9wRGzPZLzAcWYUgMS1Z3AUrZ6xqaZpTeZiPYtGt8DnaW51FRY",
  "key4": "3edWQAqJ1fY3YEn125EJQxaSpiVKKucErGyRGucS1iWYT1ctTf2iKLj5KWBa9LGxyceXtSuh9TPVkJtoHfYYcH47",
  "key5": "2h6otJNTyft1rch7mYLAFV3CdTE8enbYru7rtRFyq1d6D2vFeCrCPX3xVKLWGgi3JerV5Teru4CXnFA7mDtQjcqD",
  "key6": "3jzGm19GQmgBzZssqgrhci4P8i7KzMKWwoSeWiBHab1d6JVSmmKeSdJxsg3kKZsHoAmnAzvkPsUWD4Wy6m1THGZV",
  "key7": "5vLLd1DhV1qY7fkHnZDWWcDB1Be8oJzriXojvw3CD7pPUwKJEhCZvt55dwKQD7XSfRwrX8JfCX3pWaMw8NpJwC4a",
  "key8": "3LogTgAqcgUWoBc15Z38TTczjt7Bijeth9iKkLZEGMkttnQ5NvW5uo2bFNoGAeEJ35eBNWaha1gSFJrvxsREuh8h",
  "key9": "4j3RTy1q5hJ8qqwctbe7mUUYRosADNonK4XsfGqP4j4R67YcDJGr1Yh19QSe3zAEP7hp49YgjhXoLcggHz8ZVZqL",
  "key10": "4apvxdG4bdBJwXrq1KQADiducR49MQG5Fab4z7cVf2s8zFHXvYQnohFZYFLnsMDiruLk9XvUhT6zgCWhGTgyhqMm",
  "key11": "2WcTXsRwbrHLQvUJEDZjsMuGsaydRtFi6ygTZTCnEFc92DXA4uDHBy9TSX6aHWbXiZrV26XXyb7xu8eQsT8cyH5p",
  "key12": "2vwZsQUa38Cbn7qRVTjCb6ukpyGd6j4B4Kcx6mNRz2KWnxEg1U2ohnhZy9r5rts5yiSosy9obuSnu7M5Ji5qQwR1",
  "key13": "4XKDgRK5Z1GGGiCMZdTMMhfchpAmsj7nbBkmvdprY9YWoF2ubgTwT6aJtLE2Xuyq6MEpJmJ5LTBx7ccf51S7YTxV",
  "key14": "4xmSu8HUFzkgosAS1EzeX2m3B5n8BkVpTPeE5bL8CR8dJ72jchJxhhHrgsQyvhM3sGTXaebGXdL1T9wE2cJYJabf",
  "key15": "ubDYNH8goiTTjjw9sTdH1ktKdLgDZ2JLshZRC3qR9SSje7spfHWh58rS8Rj3RUMuoAGPZAsqg9QVktDGgHVRshH",
  "key16": "3iLSiWmtLveazoF7dfT2xsDkeRAxDzVbU7LdekbEbBhgZyjMYENfos8fVN3U84NXzDWgJczWAvXD6owAcC2CRX2p",
  "key17": "2m4f5YtGLfkNugrH9m9afiPHY17tzsMh7NSticWQs9FsgkBKCqMfXzP5pV2KGtyeBNBcyGJQ1vwBY2SmXYWuwL5W",
  "key18": "3hcEMkBpAuVRupwMMrRsHSTdpxdqNSr9F4S71t9jzKv8zL2Daq9VUTcVPgxuJzrKsKNKwJwSJG5cAqctAssr9CsY",
  "key19": "2swZHC1iZYY4eRRhCpntshQ6FLWSZmPYP3HAVoHeaS4ijxf7GetwfBke568aNfGP28kRm4XQMfsEAN1iffj6igXg",
  "key20": "4MUywnnDTNFwKzh1FhjcS5behwHY1itEdE7aLHU55Josq4EnCQ9Pwyg4dksomVWJQniwUg8MoQt23SZDvHHVdZUP",
  "key21": "2vJK8eKECrPFzrrDEhGkRFTysggFMeok1amnPh3V1Dy91ReaYaVoUganmL6ikBghJt7Epr6qsBEMMCYhoDoXkXJg",
  "key22": "g7aUQXGZdYudZhZRkjWPDtRgdzS6mYZ1iCQUiBKhm37jRGLSzE2XjV1EcYXKbRVJmtqwxMPp6UrRkL7N4JisYDo",
  "key23": "3cn9FPRDtXuwZGZrUX8i7i9rg6Q77CZAsUvLgPdM3ZGoeRC5sCvXYXCMRYTATK9ZCnvDziQsXytCjxf8XMRYXqGZ",
  "key24": "52rdezxc3ezNViaYYFzedg35Q41ZLkajM2cLgW61SiXdJcMoQa6RVwFGthjmPzn2DAzpzvNzXuT1XvsrCYDzrfkJ",
  "key25": "Fy6EDp6iR6FuK9jSjhJFTT8GZWpDKRjrSmgHqfaD7uSwyvLygcNy3gQHi9U2LCWwHgordSAS7ZZoUimWh2wizgP",
  "key26": "3oX96SF5DsKoqiaXvPKC7wnQFQkzwvXjS8WnGkD13ssFTnv4MxS4DFQM3ZLE6WNUSp1Po1cioD5Sfoahn1EeLZGi",
  "key27": "3Y2qFeKYndtYpfncKNCxKw3qeCK81sFuJUBq6HBzyuFRuwMtkVgrkTyyhyeUwrPA3wUbi426rzJv2hgiBRWHXN1T",
  "key28": "2PyF4dHsVsL7YcG3qzcRQtq8oPcKNTDZgu2GhKzAGEy2Gsxp7zcZqonGz87antQ6wTX7u85Y2VG5pxawPK8HdR15",
  "key29": "34Hy4eCnAZskrHksscQpjMSD6fBMQsXpQjk3ZbpSmUmfDtUvvFH42aqcDZQumCtHJx8P94t9GpHoFKh64REZSDrs",
  "key30": "3B9G2PVLiRMVU2WLXNTtCHjoj5HaDSGSuMv74X3ZKV33VwJ4sWEnpMQSeoGxzJVUVD33BLUedzyZTHRM2Luvr12k",
  "key31": "5pKFcwFAKa3BxEfggJnFkngEoqA3qohHVeoXb5dErnrCiKJCmVwJFTT6Dy1G7jBWSqkS4p8L1UN7GitUbeQCBfnt",
  "key32": "39BBnG2gpYjqBvccJnYsBPWyeHozUbHWmcm9ri9hZgEosrRsW3NmBJykUAfEPSPKdEYWSn98pzPfZ1zR1Y33WfrD"
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
