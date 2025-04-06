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
    "5MncTHqKBJGrEoS2btRGkJYd9CxvUeFWwTLM9CoMAfUeiuwFQS2FGCzjsFeeBobkDKREVZmYW7buqTJLAxW3mA3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B47pQ7o8B54yzckLR8FseUhdd5rFpLcp99vzaYg7dTn5cA2ctDq7jgsTuUexFebfpDV927ALBXt2gNarENFHjp6",
  "key1": "4HhuygcsEXpeNGnLEQZezQ5opkiAHmXTXvTvspXc5CxV5vMTugZB6f4Qq4WRuBThFKGM2LTdqjWiDj6xMBiKCJvW",
  "key2": "jA1tmgW3ZggVfbUcC8yaXNB5MyTqTHj9re5QESm6cW8QN7bG1aGuMJDE4iGwHBnaHcC3dPabFEZoGGQddnU1uCj",
  "key3": "21Nsk8T3K1iiJ6XKCGPfQ262mYEjwKpZktYjchxE2Si2PjCiWqkBZXRKhCZP1fyC73BrhneJ8WHFq1NQr1EN46XF",
  "key4": "2yhbJTjb2dQdFuD7deiaHWQcmWAvPFKsqaCWVPAUonnTfQ7LYcHLVszjmA91kxu25dMyjyvgNhVjBW1XRrBKfX1P",
  "key5": "25YRXvhU2NWnjFmbNGTvezC64FGuPRGCnLc3Zcwpxnoib8KgakGWPzAEkfgXpDMdNS5eMBT3CqVjV7j8c3by3KDP",
  "key6": "gQgvbEUeUeX1yVH3NjxPb3tQznjSAwg7YHPFzirsRw3Vhryvz6BurgfdjLdXriiMgCTukQwuBaizJivxYKjYbWa",
  "key7": "4wDfGYnyWE7eSrBUF4FAh5mtT7T2q68p4vWn6c6yyQHbfHSAwEfbCMKWuvhJBNb77FPVufks2XWxyEKeE3pWCyJn",
  "key8": "xQ6AGH8Uv5bbgEo1owbbRngWE8qvPC9aoJnjx3PBq1vfPByHHmQQHUyHTJt2skZK9L67ZxneqT6XLEL66tzdoZE",
  "key9": "2jVDtpcB7efXysAa8LDKGBdRj8qdkfKSSsFdVMDyRE3EyaKYfEJKJfc9MMjUXxiYgGWfgdycWHnm3yXFZxuN1LP2",
  "key10": "2R4EpU62Lby3sWpzWV9NnRebGFAXpKxAzcmGj35ou17zHRfmXpjfPpp7MfvJ8jTzrLTbqwnrZkBY2wypwbXVujMU",
  "key11": "2TMvQMC8dRNjr7CH9WFoA3cScbMuHukgVDSrD85noS2zLASF5neFKoGDDBgmgUYw81XqfZVjxbp3NMchwmncevcF",
  "key12": "5VSSzRUBfK2BYgZkoT3SGc3UgrgVuhN8vqmQMmkHqJwWxx2utys6vQnpPFZ6Bo2myT1VMeLrqZpKjQDpkHNQ7gAA",
  "key13": "21akSphMhmQVrFkZvUihwSAB3XpbsrS3haDqRsKqmd1YXZXoNUkLfhma76xdr7ugbx8PUMCiPhTR8djj8A7DgPrr",
  "key14": "3PCFnE8qBJFzNVqyUgc17FQmyb4ijkAiik7QVRQfVx2NW3bfbzbtTE1besHGAeoQC8Zy8w5VNovnCM7xQh6rNHCM",
  "key15": "4ZGoSvQT4LgWYYi3Pp2n7FgjN1846koPoAztwcxUrc6xkUfGF2tUTvoZpTpS7jQFqWkUzfKZ9VRLtLuoJrk19YYK",
  "key16": "4ZkRiJFjH7Xcv61mxhRJEaoQigAe34sHUJB6jihs1Wp24ajh8p4oX3S2PUZpvqX54AqhfCaCEgcyZEayFBLXzCSd",
  "key17": "2U2Z1jvWiy3QWaz8DGdjypBrwWDpXKv6qvrmtEyrzkNauHrVjgiFFrERHwKyiYaR2kQZ6fo2MMxsmmweLqu6QLP9",
  "key18": "5mn5pf6GGzHxrJ9WeyQHZf94aEVLDa6ypgQ3FRW5TGXZua1YLPPJ4z5Af4jt2mBo3G4Ta3uTrBhv5roFT5ZLqTv4",
  "key19": "5BF1UqhbH1NfcubBjaGNmZLL5A5T1iavK8mvQUTie8oSDw16BCgqNYX8Jq6oNAqZorHBD6f9DK3JBRmAFr5rJZoy",
  "key20": "5Y42F5oY3SaohYPccSzNZeEZbb7f2x4xzSuLrpARRKLsGXLNBQGU5WvtHUKtHKm8BtzpW5gHG7bpVJmvQVehGCJb",
  "key21": "52pFGi6JtTSrX6Dxo24oBdXwYM4eWQNwX9uHDFqTtC4NgK8zoySKvstrkB5swGjFL5GbFN8nqJCGGVa2JiVky6pv",
  "key22": "49XGCKRwy3RrZa2B1xTPuQ2M1NGZC86X2zgMBZihATbuWb42mHrmrmTPHRHLgwSBMzyVYXjKkJi6oBhvqn4wBKqz",
  "key23": "wgmVR8GKS5mFKEQeGtUA4SS2YTCoFV4RgY1KTNzzWPrQL2drpTNfahfAi8eZiMzD1pDhf25ai1yvxQXudrsBQtq",
  "key24": "4V1nrUxbt8QXAP5u2j5yss2ciogveQSR6byZ9S5qLxMseKwVhaj7LMdP6a5LJvQGDyTG263Q5Sx2oZRE2Sfa76Zc",
  "key25": "4e8e1CpnEq7vDomKqzPukyPzyB5sGXrgZozd9xA3J7HU9NNHTcZz18B87VZXzjtoa4HaGf95zfJoBDcq2v68nWiD",
  "key26": "56jsaKNULQRATFbisxd7XZbV8XFwcKtxhJykbqQu2JkubknwTpjrvEUt8VHKdqD59tB7iZbwqS6BfUEPum1AUSm1",
  "key27": "4DhZNEjLs2iHKfqVcce7bAehpAkephTDjb47bqrotsLJNUtKwLNtQqRaVYj1cmUzaPibpbRWDgEB6RB8U2aca4ft",
  "key28": "5Gk2jC4DXyA9Ss3WrUrWgPLfnRu9sqmAVmNvZvo8gfdyB4P1LcTGsFNzsCXu9RMFg2Z8VZpznK9jBuk7PEg5To4U",
  "key29": "4rdn7eYEku6dUbr8vgSGFxLThuvh6kYhn9SCTtZJMXhLsrYRTCWhjGG3Tt8G1APpzLRSnzRR1ev29gDfNoetqF3K",
  "key30": "3tbeFYjJenJeWcyMngqvbbmYhXR2VgHrkRGsFR2UNRapACrXKB48VJkXV3SwJeY9uZDpN7KiP2MH95xuYDVFLCGF",
  "key31": "2NUzANcrz7Zp6wRndaVFXsLEPa9qAZmMqpQdPNskNJYFSsPJYAeiMuu3PHn9Lx3tAcagxV9fdh6yC1b2cwfn8Ndy"
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
