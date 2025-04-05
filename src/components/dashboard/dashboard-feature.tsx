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
    "3P1C6LQqnksB7DVdjVDWRsZETQcu5R7whEDqLbTqC14yvZSC3gTZJoGQtdjMLc1JXroz6cLW1jeUsv1FeSpCaCK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnNAuUAEnxjBVD5Mvisz8MfH7vs4Z3SebYgCHUbVWfR4JgqGK2MJYRdiRAUjQeDdAe4nnToQ6oncUKp491d7ecz",
  "key1": "4Pg9LCTXU3z6vtsgnWeqwKRETeQ1hR4hxwXukTLBXZeXwY1xGwBNbq1Cn96bLMPJCiHHMriYpAK7btNQ7ZpCzGgy",
  "key2": "M9Tmkmj4enJDAfrrBiPBhK95Zg65JhoXG7xmb3iMX4FZSdujbwSo8nge2B4nRgC4bSrx7syAewkXCJbKkLdbb7H",
  "key3": "RDEdZKcVV7bhH3bck7Ku3And9NuSYhrAyN3Y9Gavafwjnm9DjeJZ25AY9ffm6boJjMSBhsg5yWQ5k1wR7NrNi3v",
  "key4": "5mmEnHDXbfUjHmeDqRWVX4uBuCesnzhpqiPcfSRoF1o1m3E1rdfiF7biNzyWu7QTeyyskSNtVRiHadadBiDeW8wE",
  "key5": "5jGK2SACZpXUtoJ1hcqvrFGVySamhGLeUSnrt1JPmTitvANdJ5C8f7f9KMZ9RgcCXq2NW9ZaqicXZn7keREew2fk",
  "key6": "5jvDMoSPZDiaLBtqfTsQPTGNg6dsuMLnvufnxyr4hyQBnmLDyyigUKehYRHxNaUr4xgLcDZP4NZ9hCW87HuwZc5B",
  "key7": "dH2unp7asYdm2paDjg4mMoS28Ud8q5Tve4K3AUPXRYC5Mkho6NGEHhvvooK7sGDnhhrdKvmzFtTZZNptXR2BC8P",
  "key8": "Uy2UnVGezCdi4QeemFCpfbzXieSjGZy3d6MwrQ5JLnUkDuiu8aa4UcgXwF9vNB2J7AUYtzsBhCm6uCPjHbsFGLj",
  "key9": "2gpGYvSUX3WEmtF9Co5TJA8stCbRLZX7Y1DaqWVi3WKZ8ud4Dnm1XLvKekQhTBLJWNH5U94RGAXJbAgeJW9C2ZAw",
  "key10": "2QCTyawpzxMTtvLgc9A49bvDyKgBqPXgqp9ryV4tPUzmXD5XtFw7qarXubYfqefuZeZvA7jvJt7465PwK2Vo7QtR",
  "key11": "4VJ1Xa7E4xHNfiDsvyvdsZGFjRRJ28rWvjaTRKDrBRP7zHGWm5jyAh7Ja4patDGtyVnVXbh39QRFN88Nxzp7kFpg",
  "key12": "3TzgR1Kfsv1RJRixTBDU8NcE93J1PLqUsteT3WNZ5bJVSuCyWcqngtyYxFyMFiGf3TsdSZuZ48rfgk1BSbEfNp7y",
  "key13": "2Svh9MXRrxyinN8r1hTCTzMVquch9Vguc3vfYY19GXG8j8u8CmUk4RwXmFB5SZqSCGbGeKRWZa8AMFLaR49X9U6o",
  "key14": "dt5QHbQX9a3t4w1oRBCaUg4686KRdYKz1ZwLGLCRJoiALK6mtPnn3Kpw44JoaZwD5aJ4TvuALxX6CBQfzDRwbub",
  "key15": "3xu9DG57K6XxmJPWbN7J9M2GhKJnBu2jghJwZyKdrsJSBkM8JWkmyzN5k599pJxYE3RwPpGSoeARzJeoVHpnbPF5",
  "key16": "5EMMRRGRr7mfKS2nsvqbt443mcoLoauyeSHhmfsv6zNhFm3hbKJKCQSY4F5kAEg8h1yYanDtBPdLSssNcbPRPXxW",
  "key17": "3wCeDc1m3fsf2vv4Uu6TRyna5zjVc3dum3GYbzm77pf6YEbharNzxn14FjpQDbrQJd1nbPgfrtShH6txtiBivrb6",
  "key18": "FaCf3Mh5wBwEjdaJPnDMFd3KSMZAHrw3348z87aqugCsXZqDAQ5ms6CGES4nptPvmGB7jR7u5e6LPXatS22idpW",
  "key19": "9xUmqqVvsLhQfSMUsHq4SZ6Sgzcmfr8pfDngnitbgaJWZtu3AjGNgMe6X2xYwYeNC4B6GHTFGGo2nchzMRdD3dE",
  "key20": "36jkpM4jvkXNWhZLU8vPcCVP81sPhUHDHVAenL7ScnAcKTtk7dCu5Un7W78cZ1kjCXP4px3a6E67vUmfyxJE7Pzr",
  "key21": "2ZLU7fKEPTLnQg1Ai6M1AePaJQcCXQ4QoVbx2nAneUF4eHqTw4TVBJ5Qk5zq4t9vKhYpnjwQKzhRkKWLzdnbncGn",
  "key22": "3kEnQ6N3b6YJyu9sWH5TaEcNWFtb5QjgzskFw3DXCyC8YrTMyyR7dUEP26rvXyWKu2MvN4mEWQwWaifsgN7zvRFK",
  "key23": "F9gZd7v6ox8tiQfMwihHw2HvmHubA15SgF8nDmZBCKbhSHyzTLvKHJ2Jt5jAn2Ytq5PBN4AmK8d2CGci6zKPKGZ",
  "key24": "64rmK8o4k6WcK6A9YvtqeM7LX8xBYEQSPDqWDkNp9joGCbSZd2sLPNyubHDdYbfBeWEQftuaYGtHxEEovsvVsV5p"
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
