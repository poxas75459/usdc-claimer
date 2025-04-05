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
    "3CDf9V6uaJB9kvzJ5H5kM2BEoHccRZsBkUbZh12QRynDg5yH6qQ6qCU9J2J9Z3AANoP5q87uSJZF2JsULn6Geciw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUXhgKoTWTpKiFDW6TSS3NgCyoMUo3vnB8Ybf6vJmhWc8ziCwcxxWzHmAn64rGjth3V6q8a8AujpENADrKK3B9T",
  "key1": "BZfgdkgKyankRdFetLSraSDUbVqFPjMmZRuzSYHcrB9KXHZrFiZBEvJ2soYJHoxfQbLha1Jxky3UY8M4rz3nocf",
  "key2": "4T967kMdWraEbBwHf2n8WaweYwTdEbbYVsQUFtWSeFZ9Vm6GvBk5fpevKkXpS1GKQaNSRSVxSBLQFX1nhX4sNvEa",
  "key3": "TMyoG3ERjNrZ9tbHHJWDzGWiqWEbhWZE7AwD2rNRrV9EyQipM2D4cqc7sFSDMTsp1bbZeDpjr2wUqfZ6D8NgDLT",
  "key4": "2AQSywDusguTHzBSx7zSy5MY16VCx8HkYVjtjeZjywh1jv3TH4rWxvYcHN9ADVEXHoBdEZdZ85NitouoZXix1LBB",
  "key5": "dDtEkJTcF2Tfx8dRVgCeW4vvJLz7UHk7NRuu3u43vdSAi31YRrFRBJP3FWazGUNpWHKN9o1cHyoM4a6WGAbXkSw",
  "key6": "3MntUbeLBmPt2th2sqJ8o91B8cEDq69Hp5JVXEEMkMZcVKXKbUbGg2eGuQb6uLz3oR4FJ17ZbTv5ZPsirTPZdpee",
  "key7": "2fi2BiBBiK9czGBf91AF75N3ViwijSbR4MHwFBUv1QPF4VA26wCV3dkVUN8yRCKruEbRL9d9wWFtQtKPm2ogTUwE",
  "key8": "4UuA3zskJa5eJ9CC4sRim7XNJYy4GGefHXa35GU4DkABTNro8F71hLHczQW6JyNCy462KVpzwn3BDJiJYAJkt9zD",
  "key9": "5wueKnLcyhjDbscVcXshGfCjm9Qs8QLXT8uxBfZon6rjy4QmUZzom6StBB9ovVzD5SktGzrZCfnbACe7JnwSMvHv",
  "key10": "4ZSC8wWWc7LijkLQ8AnLn4QKaFNyghKwmMa8j2z9k11hB14z9b3JehWL2pTiHpYg6HtXszo9dhfh36xAKV6x3bPG",
  "key11": "5XWwQbXuPPqfYzAg8bfxeEQnwoFQL7RFsKUZJ6uJucuWxj1PZHJkWLtL82X12K9kYksh1fpKDsdmZDRiTeu1WZjQ",
  "key12": "2dA7P6WSe4FHg8ZnUPR8JQwLXt3Y8QHXAwqgKWxUGqyzknD3jaPfb945jJ9itjzv728QAidGGu5g8quQBDAa3HEd",
  "key13": "3KWBo589ifNjVwauM6Jrou1YquJuNJFYoz8TCyEGvcA5CaFUwSb3snKLtnSi8Ce5oMUpScWEZFmWT6WVdNeY6szP",
  "key14": "em7zJLYmrF7Bvrh1qtYokZqSWDNofyAj4ckBEGymREZZvSF86YJDrH6E5xBhPeJnaibgnbSxGciW4BLnSRMbwvy",
  "key15": "4KUXACswXRe2hm3C2avFoZ991jddyYLm6RSiEEqYJ4Uot4esfofHi3DmE3GrwFLV8qi8JizznJGCSdA3Ke8xFQtJ",
  "key16": "2fsH2jY3PP8KKQRyVfZTFPntfthGanaP1RQy8TU6H1YppEk2Jqmd2RrKytJp6Fa2GVRitzKfH6182G7xpcxEkfSk",
  "key17": "3YKsSHN776HBC6YGgLpPNQG98EFT8nhRbTMqVAXgbCQC4cbfjxHRQH9Vfb3V7UgwZQwWvNv3UohXXDUk4tcoccih",
  "key18": "31ATzQiEpJhkgQqswBsdPrYKCf7qpza69GByfkJzmF3cHnB5dwPGLa47uUGqmqUcCPzDq6VbPTQXyno1WsjTRP6a",
  "key19": "4EP2z8DrrVbiz1Zb9XGVPdAvPMr97eFugNPzbnQqA7ckwfvPGEpbBorRGxSP1qDposotnnZDxcgoZBPe7rAEeE3i",
  "key20": "49qbg2VCRHsPQdwQ2sb8XdBk7CiBqcMSQsRUQPP5rex4aZZWa8uhXk9Rv81ccSnGVwt7szuNzMHXGxcnjUeqUByp",
  "key21": "3wa4wjs1jjQ9BA6C87wTKKAUUqrR8Uh3tBvenuFZiZvymjHFM7VJECk2HHvEGZp6Qd95o9Eqakdze19QchdyPrb2",
  "key22": "cgi9T3FVxpVXXyr7hQkhqHksroQLGHNLxDaxBQi9sHNkhhWXaSQ5VojSQKf3CZdms6CTau68unKe9x7hVwZVmvr",
  "key23": "66GRaP6afzDbnSDFcbDkMDNMVHdPMWvDLEPkSDkQtH2wSZKYnT4Riide99NuJuMqioFsmmVMUVReYJjeVDt7ifHh",
  "key24": "2N9cxUXePWeVuKis8mLMfaX4o9sCU6wsmD9LCPWxgtiSo56mW4hD6ckutoRPTaEPbbg3apKxwD9FwFHcZrBMcVUe",
  "key25": "4pWBmwJAyzdWtqbgun8S7VmDFhWzQLnKGY1s1d1Y1B6Q1tn6i5HwgZNHeKSC9SCP5B7bnbFNAoVp15fXMFGbUMLi"
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
