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
    "21mmBBB5YnjhYzuh4FYi4HwfwcnNiLbnk6L819T2t99yKeM9y3taSGx8PYGnX3rLyoFkK8d1zPvyAGvrv58mLdej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tsggkvx9WE77dgohpgekFBL76ZUfTsy3pw46rTNEThwhUDC198KSdkmcBNpQVy6HBXY33Y7fzmbE3HzHX5RA5JM",
  "key1": "5Fjt6Ls9A1mypMjaWtacpTSAk1JXYjUMxPS1XW87f2x4swSVGu27dW3FiASLUa3xob2kHcgxAVRbCjniiBtDF6FU",
  "key2": "BvBY6ZtPNbFhviUeMXNBApqALHXh2E4aERS7QP7534SZ2AoVC9bwSgTxKwKmT4NDoZ7AEUMc1sHPJhTvoXAppMW",
  "key3": "49rm9pw1LveXmaJH1esuQaeXCZMDEwv8ncbsSKvGrMWs41hqpGJfD2ZCTDd1Lk7x5z2o4VP21fDthoYnJo1JQJHu",
  "key4": "FTKdWtsXQcGdXiSQumKNuaSFoywMi6MDHNkLp3cR8bfmFCDr6jQ38PRD1qMZayuKsKudazjoCdNB3Z6qAX4nCfU",
  "key5": "4RkSZkktcukcb7YvzyX7PGaMRYwh51JG4UyKns2p858CCRP5fb6P5j5K1w1UhRqhGTh21eRtsKNMaHQ1E1MqxLRT",
  "key6": "48o7S5U8qnN7xk4jSrGRrV6wYRMo7aSRXrqxpjDMmDHJFkZ2gQd8jVnrJj9MfsnRxqZ5McNnNFWhSXXY6e28U8EU",
  "key7": "2eK7MQTLyxzQfP6HzXQsUwLpt1PWkZ3uQ8Xx8euvBpYPaZfovJNHugXg17XXLgx5mpmaqhUtS1Z3dUjRy2qNYW5E",
  "key8": "MdwSuN4P1cB4gyk3GHKekccyc941PqkVzmUEXev8NWpwYYxge5BPPeRyp1XTJ5qYHS5egDYKq78UYAzhtk3yLRE",
  "key9": "4FeVZdtCoQe9JpVhAjkvsqivRRB9gFPX5ZzJHgzL1Jpe2CZQ9JrbUa5KmwxtS39423xPrvqF9bahE2cHpwbar5Kh",
  "key10": "2HWj56EdEh1KCyd4TJ5AcbSjMi94KphVuTyrj4N2VPmjmjtBvc3yAKzYbwwoxgBUyQ3bWHe3GwyArSLoCd6FBZVT",
  "key11": "3RdzjupBgErB6MZgEm7AUFz8Rj4toho9Q1uF7y9Dxs9gFozs5HRM5x6kHNqHQqfQyr8AGaAYKYx2th3395FcxG5K",
  "key12": "2zrdUbAe9DxkHBB1NAgmLUtch1EKGkwvarFjzXZrNVJSTxAh4xYmjmULAFuG4mfs33qeb1em4aukVsBvFMLTRckg",
  "key13": "2Bo6bWxxE5DedMis3pNbcnbEiCT5z6jPivC1JHSR8PbkXR21YKbypy7fTrw5v6PU5oGJYNYvcZpbSoDZ2mGf2RKG",
  "key14": "5Q4Xxry73gSkQeAbZgXvmZKDsYbA2Ch4tN4aeF841MGNPSqqQvjdG8xD8P7Q4zWRLkS1LSu6Yy8V9dra2EQrAcuH",
  "key15": "3qmbvsdRtRrAkKjrVp139BT8s3CdPXGaYhqLNED7wEoYTGhtwHiVS4sBKYFHgHs3Y8dcgsthEeMD7L6T9eVmioM3",
  "key16": "3ScKw6PE7oefWKxjXHi9YWUyxL79cTuhdbxiuarAfS5RFWE6WrxG6bq26GxvuFabRUWfHa8TG2p31pGbMcJXCCXB",
  "key17": "2t8epJGmmY9ekSj355uCUB49argCchBDyjQaC1EKmbNwaERKkWF3qkbY7FjsN9nH3ZjeM83D527DGg8nMFktfaLK",
  "key18": "2kK7MQQ5YW5HJuZu8qJ5TnzC5ZjBU4pD9rcHZeJq8TdMcXFsTya5bHMhVCFZAoB7McQhFQB5DQ7HtBDRv87NLW1g",
  "key19": "2C1Vn32VX4QUU5gNTr7cPic4k2kcWy6oUhg6qnv2DnnrHcwTUwBt6Enpocw5kQShmVXxV5LJ4gmVYTri6R4TySyL",
  "key20": "2YRzUfomrsykrRs8JLeL2zvqRmKusbnGyrzoAaThZop5UodVWRPWniStHvgB2WsjvgSQYwoaLAtLKM1h22Swhmsk",
  "key21": "pm4BUJ5rGHdDWi6LkGX6wiGfUa9PUjWwLuDDXxcARfWdTxHKQZav9K1s29KzdE3xNmeTJJBYRT7bjXPKbHggG6E",
  "key22": "5JUDQRsgkq7pyuy7MWQ1MoAQGV2bVB6EqCykco2cCSsUjg7zKYUQwcs9QrjMzdUPGXp1ad6ekrvPGSScsE7aFRKn",
  "key23": "kbihJmFaAhnzjfhwe7L73g59cXUnkWVoVMX6ZaksMZ7zvuN6dc3wSMdAQSswwxCrkpqKNwyH2RAaGf9boz1wJwU",
  "key24": "64JNMeGhongPGG9hnhDAVfkeEQxB8NcPtNvFzUpudVjSAZoQRCVgPNnMPFBW1izmYLQicBUGnSKgySmkT4H2Toja",
  "key25": "3c9y6FZs4QMvDNXNcRxQqBXBJpKRaRb23syHvrf5ML57B6A5z3XG54nzmBGunrXffu2R22d3acxrGvXqEJYg1PiJ",
  "key26": "4YMw8yhQxySqoeWMftDAHTDQDmrBJgXeeSv6LGYt1cUwAM448TBhSvPvqfq6PT7DpNHdUo7uBYb56kdGmkToNATj",
  "key27": "611qLfBWpyKoC19WiZYx1jrd9VjdSe38yta8HUwK5NRkrVD8aGx9LBW4qjDxKyrhYheJS7RtujVpbioRnRyCHduF",
  "key28": "3py3ygTvyUtBdsPWCpYfszhCF2D1doZAVrWkMkxmvAyepe7mx8T8PfWerPyA6SAt2DQrk7g42nebaJVzYcAhAUBS",
  "key29": "5jbzF5WVxU2dd4coRTA31UEnsVtfFdDw5T2nxSfy3thTf7hvpW3SN8ABsLXVYfwdmfLP8u43bS61zfpaSyRVK4iN",
  "key30": "3NxgpMCpLNzKWtAGHSLRojzpjkSaBepoivG6o7Kon9ps4LBnX1E6Bj1Zf9qFATWzq6ABGmEtZjkPjwMp196etKaw"
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
