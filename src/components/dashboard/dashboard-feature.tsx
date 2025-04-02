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
    "2fmacQ41VgT3qZkBwE1NKNLaZNhAFh1XagRoRwaphRDTCSQkdisbUy5a1XGkaDVb1zUY6Tk517p9AeedpnwMoh9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixacQaMgpBwCqJJdBx3YtQPqB9TAn8Zv7X2Ho6Lr4mtq7oLpgB7uUqbXnsGjmVAADq8KXCYe3u2dVSsEhohqnmQ",
  "key1": "2yck4fv6xK7CPZbihfQ3KpniF2aixxX14E5g6DQHfU97QHjYna9c53UgR7ynM91d2bNJzVuW33A9jNFQPzudzvkS",
  "key2": "2VvXhq6mJLzJMUqVSUY7RMV6nd9LwiQefEEQw6o7QHfigQxYxxMtzmk3sgXGsuto8GYtuY5XA4JBs3ZVFsdzYPht",
  "key3": "2iJ5Zhpj8wvcugGTZnhEMG5TDHdM6GRii3zknT675Q1UK11U2Gd2wVQtfUj6dn1XRM8CSVuP7mvqU17QqpaQQEic",
  "key4": "4dL87Uxyp9fbpsDNQ7M9EUXsytU96ANoKPnSNHRJ9LsaXzRzkhfhous7AfhgFNZ8YV7veECKVjSyD4PWLBuwYEX5",
  "key5": "2WxCd2csaLyjGSnqUD5NyWy34m9PZvKXoRvUcadPn6ojKc67s1vUBMp8h3YGTQTu1uFrEb6oSVYsPWDiaXbv2kkc",
  "key6": "4NERHk4EyyrY4tNgRLNyZVQHUoiYxpUs17KNzqrHZCZ6aNbE9DWdghE1CamH2ubxSnACgLFgC423RvSuGbc4i3Vp",
  "key7": "67TsQ1fR22bz3nR8vN67EKnUGH75u3kn5KpHJNUx8VASq9HcafuDzZwDHYx3tnxc5gqJS36ZcxWAKfWU27B1iZfW",
  "key8": "4fJh85wyaUdtJRhE8CJ9E5yAaW38MrfeZh7Cc46bFkiDudXTq6inT7amsticqcrkrhhr2j6nF7NZKWGpLv83hu8B",
  "key9": "3FuSs5nBiSbBZw5gMaHBa3ZjWNoMQoooti2RGtAhcMPkqMF4o1iZuf6dW6gUD1Zt8KtL3J3mTtJsXfJArr8bH6tt",
  "key10": "9U3Smqb3TniPRTP3VVDgY91mZHZ6yDNHXrqkhpGrpsthiXyzVEkRGhA5QAfwSNUgcX4J5ktwtXykVQnhdXjWARw",
  "key11": "119pvGcfpfYKSjqknT4bhSTxDaMTA3tSWXXXd1sCrXSHAAp8f1mXE2bJRyhvu33CyVS8fYcu1YUvmU8tTeVy6zM",
  "key12": "2SkQed6hTSeELV8NDwjRYjmCDCVBJpo7fPBwjucLqMGFoZ5QKFhABNYYDqASESQ7qyRHcH2o65HVkbjk9ihJC8bK",
  "key13": "3s1jfTFrFEJuV9HD7PP54mcqxWk2LsZenuqPXXL3dMmmk5JVEB3uEHcaRHEhB9N7HfrTFVCSytSEbTuAo3muwhp2",
  "key14": "22X3Sgbu3uuzUaeUvx2f5rA6B6fX12nnibDAcPH6veoWpC9xVDjg5pMXpxrPnp619NTBQaTR6D4qYsLocVXtuvJC",
  "key15": "25RanQX8Ej5F6HduoKYgGhWciyJK2xhNLckXKq87rBazq2vvVJmMcxuaikZCX6qqqZbrNjRTme64JANtAPAnAFWx",
  "key16": "43nP83n9oouTfVc9icVRdwre2E2HfapgdTzJujQB22SufTkNWaahJ1GUzyz9pSjssazTk57i8b2QSpnpAiS4pm5h",
  "key17": "4ufZQdezMntUf9x3cdL9V3NZ2pnwTBVxfqQM1S1cUQUiRTgZ6dLVHXdNPRqL1NXLR868nGbYmHUVLdf4Da73Ypo2",
  "key18": "CA2CALe9t9wVzfWQT2yerARSMEAJaa4QderiDJKtcZapxWLFjcpcepCwyCAmVCEBucx8T6f8eShx7XzrjWtNKGN",
  "key19": "2W5CvtygMM9ynAy6mJ6FsiK5PpdfNzW86m7qqLa68KAmw6aKSCthbjra3P7jofLbn7PwiaEP6MEKAAuxri2whURD",
  "key20": "5H3FS6VAnRQNywxLcibhhjEm93QzjqvNtguCe1B4SHFRnEViMAJaWkQWDSdADGQsb1pZMXqcwq3BiGzTDtAYXwnR",
  "key21": "3shw2gKQNo3HvBsWFJQ4bkMGj9gY8LobqBmcwXMUpbGTMQhMhK2j9vr5Fyc5fkqdSahpqg8QQ9g4CQbdAziEJgT9",
  "key22": "iKwMwqwkpGAaZJN6UG28pMTHXhdcKwPs1qYePcq7mgeoeGZFN97WxF3oagrMzTK8Bm9uGEmmamFSwmF7hqgjc1n",
  "key23": "PYue1sa1iGS3EBhGmEwmYphB3sAnz8FPesr8Roj36K5St5FHB1C12Q3XC6kLB9wpnVaSJj7bbQvKoXca31J6pxQ",
  "key24": "tmXhMP7ZPh998onFfRBbtBF4jyMZyWPiTKXo6uvjf1Rh3oFS6UgAAyoN8SB3aUwggiWqdJwYJAxbYQgxhCsFhUR",
  "key25": "4SWfcHnQciCrAemz7uWe8WiAWbbg5fH9KtAMGn5FbCGVmkYnrp5hdd5vDynbM5tF3FVwQf7VqsKRvbD7g5cZDy7U",
  "key26": "4dJAmtF3aErf8hNFVked1iTBnHFvJPXffoY4UaTmZz5qqt9BMZqGFVp78Faz4V1nZvTHUCe7cbEd62ogayKtGCDb",
  "key27": "8vDsspWN5dadXFboVYjthEwrjVBPa4i5GCiSWJSwcNi5239CujQCA8DDb6Non2BF4T6BTWcCx6hKfff2gb577rb",
  "key28": "3vTBa7crwmus1e1vhZT4v2fPNecfCyxM9mGBMYKiyd5qFBYEZT3ycNbpvEH94wMQNUgg1envnEgGVxDZUgG9ULS1",
  "key29": "wZu4bUkvQta7CKea3drUN8ntuqVb7gUzcXoyVeR4PtwCNEDHEak8gk5djCmKo6rnunZZ6tvomni6f3QNaz78wsK",
  "key30": "5R1BEx6ZcSM6uqjtRnFcW6E62Fhp7aw4ppx75LuKSxKUg1oujXUZ9T8Uv4dQtKfMi8KkKWdx36NRyqZysygr6aoJ",
  "key31": "2QVJANu7TPwYtaF4ksm6QPy17yKx7c9weef7QWgk8g9h3NaVpHtB9BfKQC6yCBy5ZXhCMnREmqZ4tkCCFtyzfxYx",
  "key32": "AqZJaCStSHe9myEuu2yNLperS2umw4cweBtP2x6YXMVDG19uvYJdpZd4oztZDv8seVNN822HyJ76Cie729dSPa4",
  "key33": "BRZUygNHBkWeLDGA2mPoYk4vm8vWHj2f9cPNKsj7cboidYaTR2A562yJTbJyde85LsX5CL1mt6Hcrd6tkVZCurg",
  "key34": "4Z6dqHuLiNrnsw19r8fetvHRXGEpifKGbCquZDpgzLr1vT7Bc8egEVESrem585WC3PoXzNgBrxipA9Q1Sa38ZSiw",
  "key35": "4RW6apNTSS5iHV2z61FerdfR9UWzHVje7JRKeGvo1dAM1xSmKWn7mZCwPWSRJUvajSp2HF6Ngf4xLKnQ529wYS16",
  "key36": "3tuZEkwD4Sm6ABcThd3SSHUmGtxpCAVi8u4UFCSbwNJkmr2746Aq3ebGsy913YbATExfi9BmTSUbf8vK7u4UxVTq",
  "key37": "5iHCMn22bReyzG9Wevv2vhfpvmdQWL32ex4qctch8ZGPLLdXNNM7AERmVbGxQYJAbhPc1p2bsFUbiUn8vkAFTCrk",
  "key38": "52pqr7Z5uCuHsmQfMdB4sAXhqmnswwz8xTKzJCbGdWoPZnd9CB49TnTGfPxcyMiPgX4Djz2VMjofLZcx5VZEsZKF",
  "key39": "5VNCWcy1WPYmNJtGvXm3GXFmsCnPH53tRRo9srXzem573DHtEyN1EjPYyeDrFSuKFKe9tJVvhSS3SUugkdcTer4a",
  "key40": "4yK1EZVWuBnygbdiqiAwBzvnJqeVgK9itLjvuRvuadBywgz8o4sa43hHFzZfcxD9YEk1V9pnsAkAjWU7mgxKCWTw",
  "key41": "22t8P7ptMGLc3md5SaF5YyBJJL9fKvHPW38iTTyzwRujuqohNqG8mxouS1m52R2JgDdZAaTYzUbUy2NAiAcRvg4q",
  "key42": "NXWD8s9CzXfkXKoDo1FEjuPHwzPwDczzRAGt8VP11RQD7XZu8PJfRk2ZNt5eHoSYpUGTpMitJyETWbQrsYzg3SE",
  "key43": "5g5zsrqAZdCMtXayT1RbxFXyCv1keEm3KKNqsRqEmithUfvSyemjX6hURkFovkKEXVr5P3xj4xHmkdeRS4iLCsgM",
  "key44": "649RZCNMA5g3tyFTXLJhqeZzxuiPEheFpVwaStC33kf8Zdk7dG3RjBhvjgEKmAq1pGGzPbyYWpHFeQ84hGmNmYbd",
  "key45": "3bde27CYNrhYNCz1wqWYgNqDpxxXdYdawBsjbZZ2JWBWLULnD9gNhDrz3AJ4kM9NA2ddiQYBSPpbpgeRz7fUSaHf",
  "key46": "2yMm5z3p954mbQPTbZCSXiURcjP95U7XrNXf3igLYttGGit2FX3kwKPDcgy6Gc3u4pJNnZo3GzPZBtz62AhvNWL3"
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
