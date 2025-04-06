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
    "3uhh9qxRECJVx56CEt3xPZQGS2NjGrVeQcGR2sVQEJA8p5kjeeU2BNrcperdP7QRbRevxufTzFqLcwKp3fHpAqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpv8rxMnZwBvVuKzMdcLFeSse5vaLGEjyv6u9gbENiv8p6DuCYs11Qho7ybSALxbVnh1bPqkeqSSVb8MRvuoCum",
  "key1": "FYQFPUNtKDWTf8oh286MonacF73gnPTRvKsRaeCjJijGz58655DKYriFQcJmpd2VZPonMvrS5CTcHcMtbWocvQ3",
  "key2": "3Ei2V2Bixt4mZgjtrZJQLaM6ixiqGGyUJfJH8GXPA4fNj7zU7pAKr3qPxjDrP4qkU176KMTUwuknnjNQbxTuyRiT",
  "key3": "56dggLjc2NdHZGEXLRKESk6FmdMgok5MBBYAPzF4bYjpF3BjRfpibqpohbjsMoSa8EsNDLkEm2uNkxmHF77Ppx4A",
  "key4": "26dN2whB2A3eVAz2LLSLkn7tRDPYYrpBddUQNuwCdU1Dd7wEcnJKxZPuYsXVdSFZDyRuunw8JMe7YJm9gcGeik8W",
  "key5": "23VEj4vJQov9rUmqTEBJk2rpkNqeBpQQJ8YNwkyscWwCQutv1QSAzDW4LWW6Rnsrmo9W2mB3RgULDFrdcNV6Dq7M",
  "key6": "4TsufLqRsLJJWxhaEo1HbPHchtXecxyDMu6YctpMkEB56gVCePpX4Gfqxi1jvCYnQAoKYQ4Gpuve3JXpTBuvZ6cs",
  "key7": "qqBoYzkq3oSQJJomNmgSsfhuwtaPPdgicUWVbp9ghNrG4R7vevyo7AhvCXrzZKMRZ8EUrwsXcE454uQQZG2sbrZ",
  "key8": "5JbK65reTbCGQCQXVEEbUi1bHi48XSSf1c3svE7cYj5hJkxA3ne1jfQk3fLa71diugLV7BF4GTkZ3rDAQg37dnxe",
  "key9": "47tfCEjxrar76LqpZT2BCrTfZko77bgq36FcSkKZbAa4GH7igLSzHiWx5512ESRgkBM82X36nsvjdZToR6YykToF",
  "key10": "55pTLgqikuexK6pYWQFk6evb5kYcXXHVLhZbqCiCiF2auFT1whUmG1tbGc3HyMLUseQvUNUU6JoeeAE76Tw8qRUc",
  "key11": "CRpzhMW24idM9H9MgKX3v13r2NdyTYRyN2cuA8jfHCiVZ4LaKJQheVXqz5GTYCaEm8wYrtcgMXKpRfuooQnd2x8",
  "key12": "3xKKTn1mNhZNwKBDgFyG6rSn2vRAhJkQ9kJUfkH5ysykgmvJz1q2bsAKDLpoeRmZExBftXbS7tnQzDd2Qg9rGZw1",
  "key13": "3NBn94LPR14p3DydNxFGJnnAoZNWvMc6wisKJHeyHqDtCr11LT6itN4vjX5xSeyKMp2b2MSvw888QCULPX1uttpX",
  "key14": "5KyD7dKiYct5PZbzCtP8y4fYxF54vxHAdgwbRRVWj5hUHfRFbBxMsnehHnGPaGD4n8TaYNC6hftJSJ113tgWs1t9",
  "key15": "4xz1AxShHuBeKD4cUwiw4wEuNdAHgW4LtRpaaoEdAw49PuMmHXRLqF6wXZhmscaCCqWfgZuWxF2uhEm4osXzcN4a",
  "key16": "4xhtamjxRkDG1hRybcMjgcMZ3rQTMURZxCYXZxrh46XDB2ZN7XdFKGvWw5Sa4EHChMXpN73idB5uQEtbJ3C6NhMn",
  "key17": "5h6rSc5txUEimnp8gcbCwAFDokLkBmDJvthLBnWpZi3doGNW8WSAbGvpWuC6zcAGa4Z5pv5vrDJMB26V4hvsTsKz",
  "key18": "33nbdT5ZMVsPWdUrpeV22MR9rgRJDyU5P7VjZePnKk4kHcgiQFkMFWWWjDJyR8BnEHJCv5vMa3wughKJpiLAKG9u",
  "key19": "2pJfYrZSoQtDsLo4kN8kx2F1LkTDPgVqQUhtcx3kGbgGWGT6dKNfRGGSYoZRrK1rPYiUBE4bFy82rbjFstMbXGdg",
  "key20": "N659ZyboyDfoKbwuvZiaL2kA6H9Xp2kkM9wSdWrrfstScQEdbEMZB9817t4rLwW5pwxsTNNC5jRVQ9Sme48fCFr",
  "key21": "FxewLNmEReTNZjvgmPbyumWsbLa5hd611sXc9RE4DM3GD38BnwZQGweuLYx4Fman8sQX8zuPobkGTben2KFBGMe",
  "key22": "5p9aG6z8THBUeL94AuJgARb2AqBJvsfx5wNG9MwYWJtBmL9of4mGdBFqbhk3tijf6GxUzTuMuKKxTAbHzTy2FurS",
  "key23": "3bXEUcHgELu4eig2F8cjtuadhRN11tKeFy4CaUny9zt5LCaCmEPTL2HmGFXEiJNUUFJfiNviKNwHHAcdwzaBsDdj",
  "key24": "5KATXkJAoZ2C9MoQdgBf4ESFmCZPVrqM4NyXM3Y83d8FCrmanpa9z7WxvsLyS6UnGbZ3i8RdrmZE9Rj3a8a9UnKB",
  "key25": "3nkjubjGK8CPkwovKjAUgWn6kZ5qwdGWGNBhuL1mGh4pQxvGJFKmFTuTv6XwUc2GTThSGHc61PwNdPCAyUvgGfYJ",
  "key26": "4zEUhXc8dCuvBDBET7j87mtetzsCeFHeBkYjpXQ4NhsVBaeSBWeCXxXRb9MJLRBde4b3EPqhR9d7oM7GPkKra8HS",
  "key27": "5QH5XmfuiaLtjF4Ra5KZQZQpzuXUGW57Zznkh7WfUB2zdQhMBzjuZeUFCK2s2YvNw8JgRgjGiWtsefojwmsPL4kx"
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
