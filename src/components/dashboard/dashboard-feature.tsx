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
    "4vaYXfrRc6hcagyBFJ7svUu7yhoi7DagiBawW8vyg4UMZ28GqC5FsXoFdegwN5NS1QmcAX4kP4M3wJLGBTzLUkpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tes2NwrpavynjH1RiNCQBsGRP673J5zTLKzrvYQPyoeKg5vxk3yNzukoyc5WKGADGjG7hJdS19mhMf9uEgLrZBN",
  "key1": "JB9x5gVhaEW3obKZXksabi879s7PQak4RFHZQMLfDhL8rFiHPN8i6s6i5xBM2MNJhhKAcUgok1CJ1s8phgJE8QN",
  "key2": "3KJ3vJyvyittsyg3d2A1XsQJMqSTFktuG1kfq3Q3nXCS6Uj4b5XeWerUWbNdNZxjKFBMrgYfFvHDoU4otfdBcx71",
  "key3": "3ptHn6FjKrHhjGzPsEdTzigkhxrDNMD4MfzZTF6d49vio4ht5CMeg6jEkr3TLb4Tv65uq3EKQB9rcxFsuyJdNmDG",
  "key4": "gcKEQ9R8CQdfyWMJyC9qyhiThoXP8Fq3VYjNfBCmj1MPEcDVFnKGQNRo28qWoNxNUrfc134eatbAh2R1NiHVXmg",
  "key5": "4JoTbfRYF8vuf8NZkPB7QSqf9Yqo24VxJfw3anrgsGBnoJp59DiE9V1ry5LmfB3DYHtmhQ5EVkimTWybLQLhC9hJ",
  "key6": "3axbu9VYYUtySkQGZvp4oRwLAXLNHDmy4tueAB1qs9AtvcWg1fXKyLG9KYqXiSXeqr3J4epfyRaW7EqkdxyGNDLM",
  "key7": "4KDWUUVqSTXNfBMxFf7dn6sYmSjDucYrUBR33HuczvfvhkXrqQYNxGMDGskL9HbQxjKSv4JJFiSkNN9pbTaAmRsU",
  "key8": "2QmrJKMwFZeMcLSBj6ERRNQhKnioBA1Ce5ZZeB9tX1o5M2nQt3swfZMBwK55QUNUA84JckejEuhbHrLApUCSr83M",
  "key9": "ecdYJD5R2yCtiPimUpNm5u3kQUfAwGQNkrCXf2yBP83H3DyKBHrX7Jb7aJwRjv3SHDMU6xVkd94yn6TEDPpWTZk",
  "key10": "26cvx3pMb7D2kHFwM3qQ3EHXsX5y8uCAnxP5RqEFGwE6yuFa9MzyMCjhqry5hGrZpzdwC2jfV7BEzrJyjB59ZfDg",
  "key11": "22B2dm74tSXqN2WNn3t4KQ2cxoeGmE5w5Q9jDBvysSZ5gCqxwJWfzfp6FREnuJd9Cmd4BsvQJh5HZyddH6o83fLe",
  "key12": "rKAoTxqbAukGtuHe3FJRprH2GJ9HJC5JJLhssvcruZQtU5BNTa3Te1y44w8fL7aVDwpx6mVUp7k9rJ3xssf6cUF",
  "key13": "29ea5oHvoHHCHnnSbCdbzLbohkwyCXyqdtjZ44ByoSFb1CSAjYjtDhcMq8eeKgcFncD242n2ZJPGMm3gomtq2SAs",
  "key14": "XYWWYARgxDL2xLs4Pjgsj5VDfSGfR71RRhbFFm2E2U93n4NMoYPNzJjq6DMvS6woZrfNYR4bakvu9GpBG1jpejY",
  "key15": "3NwLLMY4A1obUHiYCMFeJnA28J5yTPrmustH2q6K8Gxx7zMukcJp1f2eq2p5cRGdZLa3HK2fabWcVfLz6hWUvEd7",
  "key16": "5C8WM5MBZqkDmLn2Kf6Ev5DHXAuSj68LTZHC9McXkvdbBagwixc7gSvc3PGUp26iUTvJ5RoJpCbkCwrEJBYVrycz",
  "key17": "RHaJD6mPiar6KLVuV9vbhNjiCP4fQJdVmyDvEoBEt7QNnRmDivkcYkL1qf1NkpJoWcma8VTVmLqima69MnQJ1Kw",
  "key18": "5AQ53pTKZ1pwTsiPDAgj3Ht2Xkhnjgzo7LoCiH7Tv9gkwntyZmYUqfcMK4fNvb6geMoVpNEeRWJhryGJ4bn7eiax",
  "key19": "3muAB91jxDopoD71RYtPh5An3MsJ48QFhxrRbUU8oX9VhZxYcgyyAWhYhAyR5zopomVDsbfpbrCKzeNLzNP8Qe5h",
  "key20": "3sqfkYDegA2zhrYUnRBBpnk2fcwVJRuNpPtDMnKg4GQ5HMygHQdg3VdnpikCck7neaBxHSdRxioW3fXXnkGKmuXB",
  "key21": "4suBqq3wHsrjostSbvbKu1o38uftH7MKcT7JCMYKL46LFbAPmShnYLtahjBm456aQ1GbP9uRxa7mLxEhrpCXc6c3",
  "key22": "5hF2dQVLvfSTt7HJBmxiJicZs5KopeBueGQ9URxgVYVdksNVDdHm6pq8iMrrK529HVFVDUKaaEm18zv5d4Q7irt8",
  "key23": "cRodQqXo4aNZ2KYmjkY7JnVGRnv8VGhcBEBa2yb9f2dbrcS6FnRN8qd36uFksxA3Vz9V7CHjBiGCSzJKvDaTmfP",
  "key24": "2V49ekQd538Crq8sSqh1MzBHsiXVqx2PxfS7pDWtDvzDvPA1GznksNtZM17FvYR9BDEgrDRLhtbfurLF9pL3KRLM",
  "key25": "29xD2r771YAct4JwyQpA7ZXQtDacPAeW9o7Cxee4rF1q8x9BfmtF6LQTqohg3SeAjBxautF5oJ4AfHPkYpeeu3jD",
  "key26": "2YaxKTiQnMDDgsJRDeieniaUvVzK9cTqr7cGGpdvjpGsrB9L9ao6matuiswMgTSnJHGh2WVASiAA6djEJqpKtaAi",
  "key27": "66LHMTadckUwMghEH2diQPvUnTL6ntVDB16xZD7VAHKTApD6RYKNus4KsKoVCAJFK1ZGGe89yPxBCPheoUfFh2mM",
  "key28": "4vZTTCKLqMv3pMtSwk98XviJE4ovgSdHMbksVLN5pEsT7UbJ681dAUxjKhpXZK7mPEMisHZHSDDrZuvQ6Txektt5",
  "key29": "4CvfwHsqNEW876yb754RSeJU1JRsKgo8g6AhAHTfwHgtQE89QxopC8wrF2qegPdFuTPKWQmb35cPTLzEwemiZw3z",
  "key30": "JGaRpJiK2nwbXgXtAejtqKbuwa1YcfnbcByFji2RQEVkaMFJ9F6zfuXZkSLJRypqo38Je4vj2S9bV2xZL78vDpi",
  "key31": "2rVD9C5GXCEYgSUEED9fAUFofE8XmqMRAuwTeNzQsMjfwXhUY3sA3fpTf3TVU7sLYnugRUJe2uAvRTwcTjqpkNpD",
  "key32": "2gWQnwQYELvqZNLn36AeFUVFHbnr16AWhHKCqvshmwnTPHDB7D8hFegwWyj7hUaKAvB56q4kK6aLNgm4ErjHV7aP",
  "key33": "3hzweSiGAbezD9vp7uAvAshEZpEc8qqPbPtepB88EScjfp2eSCrQiRYiHdyMLRptnG37aHMbTTKNTcBqQASraEmB",
  "key34": "2GF7fwJioyTV75VrXi5xZ5SLPtzFwaKKKXxvvGeAwBYL8vJ2ujvSNyN2t4d7rfrQnb4f9LPUtsWjTvMRzksrusjF",
  "key35": "5ioNnUNQVqPWWpkkNrs51DWUBx9TacXQJChRSDe3M1xfpxm5bxfACYxrzBkgAmA8anrQRzUVJYPCUqWLLD55RWVD",
  "key36": "5aP1nSfv6nyKYfdasaoQhH41rGLSWKb9yXz8YA3tAK5wyK8p9ZSHJbKbaBsEjTYTe9FCabS4u4276YLhysQrtJsy",
  "key37": "258VQWsRxbyQptb3ryuKne1eZRhJwJqEAHBzCSNua8hmYm1aLX2qkGX9JdCoruWvayxBFh1ycxq6aPSY6n87LSQR",
  "key38": "374s1wkPbnEawYKYdLxfxgwSiTx8hBmRxGsKioxuNc6HGKBYFqpu61rwdSyi9hNu1abuXWG5rLXSayMb6VUrnreN",
  "key39": "NWfcFCNpQm3wVh6KKBRVYxWzXunG9aH7LgQTkpLMw9TfSD8Jq32PCnYq3HMmo7FVeBqwJ2GfJC1ssGyG1kqbDZB",
  "key40": "27o2dLNGXjuGdKRZVgykn9YeTKGVcKfhAps5xY4UC3ZpjySjQX1bHoUg8uMJ1quCSBLRdAUkSkn6ovmdX2gvMjvu",
  "key41": "345Fmzg6HsBGNCeUHCJY6V2AkXc6xQ8JQSZ96nAYEw4rJjQQVH93LtoGXBpqjfsLDvtTaCazv6VPR3azJVQnXKTH",
  "key42": "5yeHyhP2idTSZ7SaeEWHtTCmGw7US3n5TJs8Kw1xrwqJqYoDQUNzAMEsGHkVVJ7yWcM4QCosFKhqcvCwSME4yNe9",
  "key43": "3VDDyocuX226owpswo15QRroGDcYvZGdBbF3rVS4Gy3Zgwyy2YY55RLNRXwTMheiwkx71Hu4KKx4PQjStgnZzw7Q",
  "key44": "SFCJEoHFNADnxbPqzarka9wUDdygaNEjzS2vQ4tdVm9ddj7hKQbpXumX9i2gvdCaaoidJ65dEAgLbD1yRJ2qL86"
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
