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
    "5hKFqKtphFkXn74BLwHB7YmkzRELP3m4R9YSxra3ZRkehGkBZrEbdtGXU5oAbZTzqJVHd28bwP7n7ny6dGvhnxLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcGaNL6eNx5ZadSdpzhxWp6iAdhjKjbCgGFvxG3uFD8qzsSfhPHuvdrqgodAaNWQ2VBsPmcCXvBoZ4XP6mVzWCb",
  "key1": "4Hs89CCpuHaqxjgaN4ZPmHxFhrLK6QrBz9ghYjFw81wjSEGyJRCtFqGS2bKwgAqrH92f7YfSLRko6LQN6nPdvbux",
  "key2": "4bQVcUGSFr9ih87tP3m1N7Xqidw3CRJiMUcqPeyf38QoRotiWWJNCKRCuyXGYvjV8X42oEHKD2VQA5ciicZHxCHG",
  "key3": "5oQWSXqMpbtrAFh6pKjAFxx7NwdJ8vV5fbUp7wsDoATyACDCM7gBZbBUq2io1MBNktqeK8NahVLW7XXAzF3G5Gti",
  "key4": "37nhVLuxB2eXY3wdQVmaXfPow3b1nCk9kdFyUhZiQRZp6zBD8yGfDxcjPUzdeLBatwZGs2oMPG71Dw8Sx8WCkoJp",
  "key5": "5CUfK3vrHBdrtTP7YX3D6htC6VPA5HNke95fLegWXoSjBHZPRAJVqmEFh91JneWSJeLVn2aBJbJC3cHoHAuMasMM",
  "key6": "Td7s9RZTA3dLiYUMje4tp5HAVQLCM7VqEivDGMFqKR4exorvCLVoZ6xzMTQx6W3kqE644w5PxfT9Vg81DdMn8S5",
  "key7": "35ZoMvrPixM7Bd7YHXJ1XyncCd1kMabWxHUThqJMfyVvoJTof5b41DkFZqcX5SATDskbe83Lra5e4hzhRM3w2iia",
  "key8": "5hYUtegeLyFL8WMKt25q9KxNK35K21cHH8MuUy1EKLkv7qBtRhrjGe1f6meRqFvZ9m2dGAixmTD7wHB3NtgMtRFf",
  "key9": "5KQkkjB6CQvXAoTcASqUFkRLQXqR75Leqkz8Z5AVmk5m5iGKWs6Bs3FkMoSXATYU3XuaY9GPwwWuoTh8hSwt9J9p",
  "key10": "2jpQWygaxmAgBqK4YqSmEQfV7xjt5GwWDp5WAmZ96VtibQSqnFCHv1AzXT9WSqczu4CFfqFa9yiDoqnfXyZqyujt",
  "key11": "3Wgf7cNswNwNM9qJVe1ELfSbHfangRAnvVju1RNX4iSKZVimBUNYH8WbWrBGe4Uu3A2fV4HdU7ha5Kgx4r8wKxUZ",
  "key12": "HddrgZfayFdR32BhwbpfVcYiPm8qZ3mJLFi9Cmmk4utZYRbcdMekoZE1i9q6tFNZ8fUrARXd8vULfkXX1FoiGzP",
  "key13": "2LHCHpF76T5DHRejz3HgEa2WCApYFTJizEgy7AQFJix1gqtC27jwH3eYYbxcL3tw3DLjYHVzDg6Ank5W17KzU6YF",
  "key14": "3FuQeFuGxFR1Wk57S3FjezC1PZwZ8peABtdsi8ENvjPADFUcDA6kd4RM2xLDpkdEmMANGBKyTFwgGJpi2YeqNeEc",
  "key15": "2imPLSbXA9NsqsNrQhm9LF2GdpaS8wizt7aD22qFYaV3efnSkJNAazuzoRGtYH1crbnbFAULUvaAPXQGtG24nzCP",
  "key16": "125yBme8hGiLeeNXPeRqwT6iZ58dLkW9ijY6R87S68XbADh9sAXgHyP42yg2TfKnqnzpUsyPHu5o3PSUexjN5cHV",
  "key17": "2BAQp3TEmdPBbNWz1ZQx1LJvv5G4qkB5HcxvjPCuzmcqU7vCfTKuPECu5cEsod733kHkSLJKaTuYmaytC6zmYE2e",
  "key18": "3UJ7JnNHg7S8DnGj9yWdN8DhpfQa9dm29oRdiwmB7jkGPyQWiTFxcHAikwezVxuB7JSJPpEDpJqzmuoki3Er2Pie",
  "key19": "395q6ikeuSoLBKDmc3d45tKeFJHmBFBAji3woLoPZbuvUgu9Np6w8AozvdDuuGsKGr6NSFXDg8q7YawBz2P1d1fz",
  "key20": "59Uhkj98VVBzbgEtysZ4YWz1xb4z8NDcimE8pY2cMjdxhemdCRKeZVqN8ZFWizyKuk9wfTq79CHXFDUdxVtRFqF",
  "key21": "41gAbwYDMBtpwyJKuo2T1CRnj4if7p8XsxtkpLHBRyjReG4c39RuvBRuYUzXmDxThfnWyYimGppuBN35cqjU2q9x",
  "key22": "3q9rCCAtQxjuUyDdFfBrTphNC2MRDx62UGHJ7eZvAQcFzb9knQYxhrVXkHJBdF3XcwrwjotGgtJq3VARhcK1GFyb",
  "key23": "3CRcoy5UF4hohEUKusyz5ohossyawuBy1c1z9jUWNCnhXoggCRhquwbFGCXa32hTVSHc3znSXq83m4tx9a6C27RJ",
  "key24": "rwQh7Eg9468znJHnnDL9PtYGtUhVjpTNfgSRUs73gQeJGeyqfYjR77sfZ1ersFBiGJAkWNB5zYGbpuwyyfWMiQK",
  "key25": "2W6UEfKnScmd672yUguhQkRHmbbBtNjxcC58fYJYa3dE8MiWYaNzRrndbiccwsLe9FUDniiGJpjkV25WarHDhPEo",
  "key26": "Dg8VBQKF3VHLzq9M5xv19txyPQyNAAW7kLXU6o6peHheE8Ah4fQDwCNWyz8221V1VAcJW4o7xmRPCa3tTW1mZtB",
  "key27": "2TJNwQmY5kdCZRScX9N4AXvNYbWFzoYYoYTCTHHZ9hLQLqytLWNWLBKZNqK6KYHvsieM4HP3DrfiEJoLokRAKnct",
  "key28": "c8Lf5DgED7KPFVjBF4Mb9gu6UVWftASh2EA5nZUAHqiP5kFWkzbNVE82YLhh3U1g3cSM74svALttJNUoy4eVUsJ",
  "key29": "5xcHwPDTEZvvhke8mrx5uzspQJfCyyg89JxjT1e7QZc4S1dFiBsgR7TMBwjdSoztykr1hsXAC1zwjcycNR5Snun8",
  "key30": "5cmEM6MuA72MtLAxqf3caJ7LSi2gX4LNedjDGrhC45ibmQ5N1nkRkUJ9k2tG8LffsTr3Cxp1K3q41FiP2aGRtZVV",
  "key31": "2WqWphEk4VpvgAytf6dbB9xCHFkjUnArAFPizPH2Eg8hxmDNY625jsgXzgtypvJxJyUSJwGVmssTixF2q2qVtdNP"
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
