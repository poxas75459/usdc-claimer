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
    "54wYPYcaK15tNqQL2MUuKeHqRHeHfacif7B8hLhpsvEfEzAgQGUSpfwfjyxhLoCsrs94n17Y2Zwx1UTmZTsiPVF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QapXVEW5NRNtyCKJfHrZNMsJ735YX9B4Jsqj28CoH4fMKzR9cQwBeT4AMZXuAcyfgHfCHmyjD1AkZmh8MWYC8Bx",
  "key1": "4VehdhcYaoFMxM2qyETLyeNAXiQt5fpozttEN3T5s67d1krnLFHVKeEKMwrCBJr5ENimYYykkb4xXfHCqgFXFbDU",
  "key2": "5uZDpuAMVcm6uAYH8XSFWXABibw9Effgerp9jqs5LgYedoTKbfqSwXB64bdUsu1DKNPccdyLbNoR5bG7mhiCWnv5",
  "key3": "2rAQcsNZQnUzR7wemmBu8Pjnq6s4wwiuD5Mbwnr99LKTuzJjrdorNZg5tayuCHrNg54fDRvgJ3wQdCgxgERkxvxu",
  "key4": "3Jv51gMwZkDETmqdR3NzQNz5f3a2BE9hCqVKGAioPjNpekvVhHacxQfYRFfvhbjTKmH5njKR4SMYbnr5JbMfz1bL",
  "key5": "3rtuhV4oijUJoXDtuZYHRHRKMPBohCRWMJuTvP8HfxZnnX4eW6VrZKEB9AdFgDZkXa8p1T8JHyWujdKyoFHndb5w",
  "key6": "3jEe2w1yPbwJZcjtzs7aufWfauUL2AgugHN54YPXDgCv2jv6myhjzuyZR8paVv6oC7db79n8sJ9gVSdx7pGzBHvq",
  "key7": "5nmFAe9R3G52BejzRnXmFe3wW327CGLb8rVVV18WrmyThAXkmJo2WD4KXa2mrC4PVcthKxGyiLMfMauZgL6w5box",
  "key8": "5WcZVebwQt7mv5oRFE2XR6HT24G5XwUpaykx4uD7nea3ZrHXwP798SPETHndxiGWMkgGbbL3wqnuJPiXoHiSt88P",
  "key9": "3DLgVW1y9uFfH6XPjc5oVCyXGkNNHcSqasC7iFZaRLrDPHtKYT4tvKPvjSsU2SFSiUmFw6FzFytHqMEzDELPhKBo",
  "key10": "FjuqhMrYkBTeJoftdM5kxfKn2iV2MoypaNR2BnpXZi7kWnRFRBLyp377fdKQgmFG1jV4zRmvpk7aVvqRE56dSKn",
  "key11": "3eXQL3jDWgvHgLiYfzEWJnfLEUVTJgrs5fcdsfBk6NKixSKdYo67Znhv34ebtKCWBfovN8rZAbPQi14N9LLw7Xhw",
  "key12": "2wrqPmPU4Hx1cYJJczCzYf4tsZF3MQfp5eatwq5RXe4ggbvCANrBsxG5AFcFTd1BrkwCP13aWzQ8hRJhffZiikBp",
  "key13": "3655gXfHTFi8CyEWSNqnuyjahcK4TAx9j1wPNGbghQhe8Hbgi7F1juiAXyJYwqRTgL4VzCUxMguBCXtePaHnsZuN",
  "key14": "58ZSLu8oQhtR4N4nqdnZqVMnXSFP6aivuR8nvAHLYSKRgYFN69QHbFBjGHyTr7fwTP9SXBxC5nDok1ndsEweqNHe",
  "key15": "1299YPbU3X2MeKNTH7Cr2FcSQ5A238Giba2dHRwmBhpGaK5PehMewfrg9bupCakWiktQ274K5kNH8sCG8gcPFmL1",
  "key16": "5stJnc2ehPLi2tA6dS6xFwhddCiFV4zdagFro8tPKyU5L9PnrPBnADjAsbABnc36teaCc6c73gyQUR5H1d5N6eyj",
  "key17": "4j9bvXxCqxxQdYCpvTpc8dQ34zAyJNB2td8dW2HXdGBYE3BeGYs1oDzKFW1Fxc7RWp5aEcAoDxxfHxzrpWyiD4Qe",
  "key18": "5JfAvuGJfteCHHa9Dy1oEL2kgbRAWBDT8SJLkKw6qhcnguDoikEAdrxTZGMtn7iaq3ChiYhUbEUi8mcPM6LUrrZ3",
  "key19": "5ijf52cdxHkW6ynU6ug9asxZYdtTwEbYTQdubpRDgLq3yWEpHMJXa1w5VGuEKoGzwGpBZcpHvuQhi4n8CSWW14EJ",
  "key20": "3wVB5RTvkguHwGYSyCndzn3Fsprpb7qEmv14YPF8WBXpXCVr1acntJptrza3AzSVqDzVPZa7mg5diZbs63GbqXHi",
  "key21": "31UmkP3KC7cFHnmbDHhwbAcUwEoF5a3SgtxCouAc2x4NtRGGbs6FPEpzDt9iHyDyJsGVhMdA9Ua11szxC41SFRjP",
  "key22": "2W4M1wmHNRdVPpBF3Z2qDVLmWDNeWmL63XnEMEzVRLKoaHNhautSHvprCij96DFUpkuFjKWyxrR8mu5EERe3uXaq",
  "key23": "5w8PLNiwkjHAbJejdFuk7t6LZEJPLSrirpitSmx6eA7dNHSXG8mP5ksnHrS2sfDxLLQq8oM7SFZX4LgQ4PLbbjXG",
  "key24": "3YeH1op7N9ti8rzVimc6V3bfnaaBHgLqU7anWbd7qnP4b455UTDdbvEsHfVq4Zxz9wMDA8MicbWiBCMBZCTABxPD",
  "key25": "3mFSCiX4TNydhRPSeZRcWjpoVP9oeFncM3xN7NhHeCdD3Qi4iAaRLhj6WCVYEwn3FyWYMSiddXR4mWbv5Vom9gFo",
  "key26": "3G4umxi6pYq722tw9TxBnLVboHvy7NH3iD94ywEx2YR7fWLQYmHKC1pxHfQXNgkrtFswPHfSsjBHjEhce3VBGeDQ",
  "key27": "KLZzHLzmX62gncFQsZiAmo9Pu4cdDKezMbaDrP3vF79cVGvwLN86Xgkh3Qyp4B7u4a1LohC5zhfw1DAunbReBYZ",
  "key28": "zffHUTNPsNSZwic2KFuswPmcwhD5xZfvn5gfmCJiWZU42NGL8FmyUXHcBJrRkMDHyCvYEib1FSqvEVHqDdV1ye1",
  "key29": "q7L1JuBkRNNqptZiKEWD3RJpmsndQqLCE7ymYMXiyj9mTCvWZ8DjjAmF4JkzrPLDHZFnBP7BbZrmEdiebJsfsLc",
  "key30": "2qNrcKhHTZTV2yG1Vu7zETKnb3rbRp9MYs1zEjpDvfBeoBaaV3ZyhVQs2sAQquh78iEVXUq2wUbJJjgQXgEkR4VT",
  "key31": "46CDEitjrycjDqUX7Y8xug5dShfVUAt9gUYMpmByNxGSGR2NYN8DdPGux1zyNWu6awqAGfSXLNcQU7U2H51xqUYq",
  "key32": "5MWzgc9hihzxHYz5FZpgsJwRjLnaVngFDTyMnqPQfMNYZoPLaVRufyzAGPbHna5KJ6Db4LnjZ9YvtzkGoaquV6t",
  "key33": "5yCJmnN2VQz2AdpYe75Aj25Xdahp1pPQP87DbQ1JgKjFfNEDeFu7svu3jaQsDbuRdqFfLmx6t7QfNXUz4EamHBrw"
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
