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
    "49uzsKneje6gNMQhtSvtoEaAHfhHpa35B7kdj4M98TSqRDCSir1FoBfThLHaJDr2FurAUXWvsC2k1gnGEPtKg5z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ajnizWeGmbHw5veCz4XiAfCUwN8xf5uNYTjipanZe8ripAEMK46oz8VU18jJiarpPSENGSysW59H8wzLHXJ1yz",
  "key1": "4quxMMBUZgAxj4tFT4uqnRjuuaM6NtTg93NWJfA67Qeoggm1eZSDJr9k48vf4GAfFr91uPNP6ehgY3DmPJHQwhRs",
  "key2": "3bjeXemBXHxiXVFqJfmp7oAeB8arrpsfWoqPdthaH8ydas6nrGtjZToWAcDVfgwynL8Dyb3bqL2MdZKV3FdFRLEu",
  "key3": "2Xv48jNBr99DTsvCwbheG7sWR7Tk39WHVKKJwsnuzfg1yYeexyhYcYh5U5TzsTE8qAyLCNWszJQUSoZfxqEJWo8j",
  "key4": "3fp22E9eiTAydhHkauuM15ekAKdGirsHArvDHo71yMQS5bkaTS4kXbpJ51BKG9NPg3wR2x6JWqUSNBHCsWXE4syN",
  "key5": "3jee5HfAgYLXrpvQv3krDfjCEbWGbzgioSecaqtpys9AmmasVpr9D6riY3bdALe8k7wSb3MqQ4UWMJYhHHEC5bSH",
  "key6": "66Bid1WqUWKTSmNqHWDVZPMqjxXxz4MaF3Dh1TJx4jDURfkqg5srKz5J6LdUzwYc1MrmJw6ccoMHLdMPB3H4q6RQ",
  "key7": "5uNy2kyNa2RyWQGutofs8XydiiRkcQcqd1yRsw7gLyCjgx18RvZF8QK5EZokETWwVaV4zrqJUXQ5uumPuGF42BbM",
  "key8": "vSLFTzwMSUwS3ziFEh2GUnX67Nn6NFTcKZeaYdgXebGuzBgvz2qjNfRqortFJBux67f7CXc9V6YyvEXxwFdxrFi",
  "key9": "4sotkU2jM3z2BD6pCsKdJNWksppCSUFmvy6vomjpZjz7XCwawm74syMoMVcUqT8V3TLzwmZVDtyvQ6G87kRUVPfp",
  "key10": "2b4Ba7kijizLr1S3xNFXJCz39PXSjPqwoq7RPzZHeTiNE3mihsa3pxEapCa4EYgsURUa2S8gFP9FomAyddAPqYFR",
  "key11": "3xg4rgg6gQ9R2RsHvesozt6TzcUwfeM7qxzMSJz8zKdxwVf4St7Fr7q19xYA2VqrQiX2vbeVnKTZYNJGrUwWVoBt",
  "key12": "5VHGYfWTV89YJR5k7de23fbyE7CM5kE9av2f5U8QfHXizTDJrUaEf9rn7QG2q2u6ibeWs1K3mZma1Ej8RJW6MkDb",
  "key13": "4remPdSgqVnqMUEc5RGQGui3t7d4qZ8Ts4PMcqY69ddsAA7ogyZJZHTzCUSW3UsStSnzZTCPJG4P963sUUuwwqR2",
  "key14": "43dMKRUYqVCNfQAJUroc1tmDVoiHuJTRq9xsb61YqoCpJCXU5p7fVihei2UPRdWBKAP76V3pJ3myGhsqmQBQKqVB",
  "key15": "5Nbs8PiWL8gyENJNpZpnQk4mxEwm31F6nsu6skY9ivGZL6pJQWe7mpc86srFus3xhkxw1wd2yKABPmrNZgHX8GBY",
  "key16": "36QCALfy7Z6sfZAmZCZUuE29jiD747zRrYHrA1bF1b6RmGGknw2YieNMjyVa1z8dtShk4EbT94TFRuVVQer3VNWU",
  "key17": "2cHQkkcp5uY3uRDBykYhAsg4jwP3xa7Hf9ezgPaTz7TEjoLUZSohHV6uUxQNYyTMpGocT1mqyvyLBewxF87tWjad",
  "key18": "2rdnKr5UY6K2YByKNQScSPgvvhdhWH6VuYs9jVTUQWWGdgibggQJMCotZevQUMou9hCMNaBEr2211RJV1PAAztBx",
  "key19": "3dfPH6yiKi6bNYdLEHG9k3okXB7YJ4r3v2r5bbnqHMAuzj3VsSVodCMvLt7w8qspMsneUL783KcfNG42TPsh54TV",
  "key20": "KEpcsXJb9iUgPf6r2gDG99NcQG3vs2VBN3EKDEVa8zNEyuSkqtZxMb46FteTX3aA6RT2bQHvZisRQiKdUFQKdc2",
  "key21": "3bzJS7XmniNMAg4SMS7t2xvk4jWeJteuDJJa6UEUDPcULvNDvgHEZWerL55nPKfWNUZmfF2UWtnJTq5GDw8xiJbQ",
  "key22": "5rLHbuXG74vGN3wDDytDWrkdSKbnQbADRJXwMpMQ5GeoNZABZk8HiPGPMQohAx1tzHW2oNJtS4A3qiJtJkeyM1n8",
  "key23": "a8HMM1LLSpwca3WGe7CJw25W9PSo2uUxQGqhDXywmKPnpKvVkv4aR3oK3NwuNmT8WZH5aMtYKp5Pyu43EP3LyBq",
  "key24": "3EffF3GcwBbGp95CzFXfWoKdxtpghLoSotHxWCoQnRf3SG68aEdjMoCrHM6KAEpCD4QBQMp56PSMLuQQ6MzRdhJJ",
  "key25": "eCKUyhpcLGDoxHPJSerJt1eGJFHzKwd4nxDfeFLE9GRxU4rJ5qE9uPURKeoq2AH1H4ktu51wPnE8snz8ihwcXY6",
  "key26": "3CyuCfUSn4JbeeKP9U2nbVtm1rmknb8rJe9TqxhZEkBpgUXQdkwj1xhBatmwR5dKU7cKP7n14QR9hwqKYp3VgAAp",
  "key27": "ckh6y3bwSQ36QSuVSDPjWij3Xeaaamoxs5asBiStYngWj8wQi854sdknB2jV6kRecvurnDM6HA3ANvSA4fWK5w9",
  "key28": "7qudDgcBwdC6c8SWzdSE5TtdEJ2LJ2twwJrjvyZJGMhb4nWeHYHxwcs3kbJjPxuq65LaKBH5tZE3w8yKmT1FwVA",
  "key29": "jYRcYo7zyeGRYK2VLRM19PJxnGzB5jEBAiNCo4ahdcu58RYEeDJtYRsweRGwVtMunnBmTUqHwD8NhdmkPsurJwu",
  "key30": "HDdhrrLUE9AXBA8Z5JxBYJtMKRdtJNM9qTCcEzExcXyr9FjpgRGKEGtnnhy7ZAG3shRGxXrdY1sEFGVJ4DrTai4",
  "key31": "fxBw7c4xQQxfMUQd5yLkn2VDZZKehQByW1Z1ZnFaVAWV5Dudujqaqd6mbThUBEFzcgxBpA5RXDWB5QYn89ssTx3",
  "key32": "4CgUgF1AaGVAB5KQKNe2w69r5j1EjpotGsWieemAFwFt3MY6r1ejrTN8YtFfy9nFKYMv6zxfEg5XH9uDJmdpVkPA",
  "key33": "u8cPMJRZhbX6hzPPQQmFSjR8Y3wHQ5FDZvdMfeYxUh2SE8RnUNDaDmXH7dFmeqGDcuJVV9nSUSBL9jaFbyvMbdx",
  "key34": "2p1EWTsUtnFX735FgTyrQmin8JX4NYJjieV7gRUgmgRC7ENcM9ytFkSqnsSJA27AzSxUJdtUj5kNc8kNTohVHjRx",
  "key35": "4bSuza1PS4hctwoJUqb15nDuDaAnShLzCrJRRRFCtZrvUvzasD4fQxxm6N2e4MNDTARBytzx4T5B1ZKc48vzTpEh",
  "key36": "4Qf3NeUxrGfqCGCwVw2Z6dkg6nvbHcGh1taEBVHjyKyFvtSQJrQET4fGi5MTDCRJmmTQ6c8gWqXRYC4goadzu2ud",
  "key37": "2nnXEv31qTg2wt4hWi5kjVTHm7ioZ5nqiqWyQo6DzKLMw9fyQ4UZpBmxucvXxKbcf5bwYVn2nvzsk332sSXPvuir",
  "key38": "4kDdj9QeQM6h6C6XMow1ShaCxaWhudCdPoFvuBT8Xp1RRbypn6jksUtk8iLjSZ6ofX632XrShtzNaLnMi3e4p2q4",
  "key39": "5DiCXUFnFUuJjZg3TzhaZMG1JnGKztpZFHCB8GV1V1yhYtjCTjpJg43PQ7Gw2KxVfoN3Hp4HQ3dKUbeqdJEMs3kc",
  "key40": "4tMUHM6uq6BGHLc7AEntseT55Z7wwCG3UPUBFMiqUxHV7zMroMxgXwvgXXT3BGPXayfDh2hdKnFoFqvthwvUXqgh",
  "key41": "48wzhnTwFaGFSb8sDybVFqJojA1Wap27VW8otTv713TtM12FcetKWY7X6nCLiurpCZ6nhmA9iKPVQ1U5ES1HYQRq",
  "key42": "3Zr9hqpYSufh5wYk155u8rJswc98vkLopEEH3HHuPAMEye66fK1aZXdaVnf36x73FT51ozHM9Xo7JEemwPtio5wU",
  "key43": "5QKgHuto7e1kWNWYEkAnWYGakSESgnU8G4ne7MqMB7mFJHkLf1spVsMqZ4ovh8VZCzEcGaQfrbR3oLKsbCMb3ypM",
  "key44": "37wwgfbKbpGdXBKm53x6YWXow3eoqW3V9SrHGHwfnYLKZxuuFc1iXetyY9HdMP4XfqchZUroBDxhmz2GswQGAAVZ"
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
