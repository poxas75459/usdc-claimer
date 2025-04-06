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
    "LboHYLerWHzub59vVbtbF8TobiZpbSuNgr1WfZxzAqMZpjVuwkyz7ttCbZe3xY7PWmg8VWprr3wGikCRxTDWoCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4as8vr6LKBaGthJAnWVsbspKuriR5e2hn6RTX2v1p696maA6KLyotozYGzM3fXrLAy76w6vNvdG4QzSxGaBW9ieh",
  "key1": "62PdLVLfoXPNbEJzHkXEx7W3WEW6JyYvizGsBnzuBnEsJpDD4bT4UXhgNuoR6yyyc8YiKfH3Xs3XGcdeqTgDSiBu",
  "key2": "56LHztemQNVnWB9vndLWR82dy6RdDYFTprCp6Zx4XVxy2yyNYtZ3zwapqy6opSfLG9mjJfHfCYQbstixXSZuV7ek",
  "key3": "3ZKjNEXnF9P5cKcY781qtvHrwVTTQ9rBJ3ANygB63Ax21NvGmbZBqQm9XuSYhu43YjvQWje4YPynTopKPqzLXaf8",
  "key4": "3vSznvfN16fQpz5QNnRNxJv6d96gNVNkKhEx5guUxoh91SsSRJW4MupquizkjVN31RjPwtohjCMCPPz59C4XyUPU",
  "key5": "3aPt7ShXA2JNMkmvqE8cMMyYF2gd82z3K5FxwLpo765rfg7WNeigMff1jBs7MaybYmGjZph9zaEXiypfF8c8dz65",
  "key6": "2BJ3ifXG6N3fNWR6UqXV9JuEH6qWgd8iHkSrryY8LXWX1exCFaJ8TVpBnBoxkWKCctLW9CjthYJSdxMZGCsknTn4",
  "key7": "3gAt5xYYxVAHdQFy3FRUF74ReHf7Szy4Ujn9u4hWSJyovnRSJx92uEjjkfRcmWmmtzNSwxM9uQkB73Ad99MZGGkK",
  "key8": "2NM5EYwjVPPWqyvy4A1gwKGYvtg91SChe4bRYNsKcoRDGxHqHXx2knC2jTL63XTM161g8mXqA9JkAkgCPn3UFkUT",
  "key9": "3NdY8w3Vh7eh19BJTNoyVivzddGazeYc3uYKCoqUcD61aymk5NfvgY9bz15Symbgkg5WkdNeGpLYz3DYviiufvWD",
  "key10": "31mLSXNhzXynkACJXhsL2G8xJnQw63yovzdMonmduTbhnA1cHXNmt3SiecbWqm7kcrQFFtYT8iNuFPeJnQubwGW1",
  "key11": "59acHcsCftzrQumeaxoprPo9D999EzqDPDeHjYZwn1D4eHSEy8z8jRF58zF35JBs95th6LkzjFh8ro61eqRbifHC",
  "key12": "ZtHgwN2jJaSLnz55d4A7dBHKADdCjGG8Gkd64hNjvaFKBPKr81ueo5nfYWmHGsMFHBNeTsBEvGsJcKtgGSoTbZ4",
  "key13": "NioNSrwUb4STdxJEzqGMu3R5vs33CccAh8xJCVHhogb6UjT6MV1Ki5v2Jo7SmfN5Vubya4vhmEAKnGaHZhANcxR",
  "key14": "2hnvrAzwGHBHt7YGNuEUBCNnwJz5meBJiFRJGqEa3z8APj3uAcxbernEQE5rcjSo65ZaJZQkNngcAeH1uKub1fcq",
  "key15": "gei6cbi76ZmuiPgmN5dzWdS8TKG4R9twNooMCcwvEo4oJf6j94qGuob3tPnepMYdq7WbC9XMivc5BSmcJEFoMuy",
  "key16": "3fjDVd9xJSUkGgUuBpnWHzDEignkc7avpVg1Qrdz4mqowA6ajfWhi3aaJ7GS9gp8TitN4V5bcf4VLNjqm7ivJLCi",
  "key17": "5dXaFLemnssZh5V32Gf43KQkVRAF7DWqb6Zex485n9LcqfodqhHESGpVz8AT7W9iKasucUKcQcFinxyH5cosdHJk",
  "key18": "25EWYGUuZ6Sfnxjd8YYoiaKxeVEhh76taCjKtPfdy3N2qxmGEEev7jj9H7ZunZEj5ZQtHUfEAouKbmz9rs5THrNs",
  "key19": "2uvnA5a8ygoL87cu6Uy9yEQGBuWyb8cq2ZjTeETLBbhd7NBMa7RLCsnVH7vDPc4cmhp5q9b1bmxdWDBsKTjYtdrz",
  "key20": "3hQ6PqfjubxQJvp3RQtGd2V87rjDdasvZNdP5iHGTUQxvjNmQumRzSSBgcRKyeybnN2cw87mhUELrJZBZrMuGmra",
  "key21": "3yEuLkiFFSynqZaK2PX7dCZ6JJMzf9SbaEZpz5no16JQhUmzJnQoPPr4Sm5HB2cz4zQBvkJosDbv16aHwMRL7k21",
  "key22": "61nGkybmB2ZVwJYXAWEy6udfRsuVYfGVjypF6zSPUKCYqfxGR9wstTC7t8aBj6LVjPM4a4nnHurmDw9AmtX3WSxu",
  "key23": "2K1Eow5KpsyK7U79yBMat1yiv3u9sm4dhYEZwAXyLdZwrbXgK18seScJrex72K5KRqvr44MhYTxyTzQaxqJXG9vS",
  "key24": "3KG6BdRKoV8AGzxJ9Kt2D31f8RtuJUxT6cSqqh24W6SLvzYL1W15hxw2kGXJWfPMedBGAvPXN8ogzU1dkMRNyibg",
  "key25": "5qjWhQDjn9xmPzveTtFs8Bs7mxthVR2o6aT74YAjAWmyZHbXtzruku5yopXhKpXriydH7EBdL5ofAbjhxTusbHhx",
  "key26": "5mDMTDMvFJjMkGW62U2ZiCG1FRFwMJw81n5XhREDtbBXRp2AdWM1M4Ram5G2Qw2ZaH8BtnJpzEVVvnhs71oxGdaW",
  "key27": "5iRQugB7yoVzzuZ6wp3nWg3fMkePRYsmw85y3VCrZtqjrbV1MxqMLbN7r6ArTcRFwsNQAaGFSHUENvDfsFZ6kpNM",
  "key28": "5iUbkzsZjjPXaeQDAascgrrj18y5Qu4v6ZSi7byWZUzMAD6zJRAqR8sYSFJvFJ1fHxkYxhcW6DpqPjHBjhA4Zwdx",
  "key29": "3baGfJx5G4fxhrorzxMw5MCgFatoMhPqzVbsYrE7LRrWmPrcbSgoVSorCkt7ShoDvdYYV1CbnUpE1JxUv7kXkCae",
  "key30": "3xjmMucdX8DjA3mxciiC7WckmSurUvjbedf3bhY1Yg4r7pMLoh3iB4FRzxSshNdPSudi8M3otF5WV4BR3aWoPcmw",
  "key31": "7qJnLVKvHR9ntMisoWSjD63PXhMrNCrMcx44cnEnHDrDevEB9rcEQ5QqfYx5zPSVRuPEKM9g4YCSJaYoHqwTWSi",
  "key32": "5mN7pf9pbomEn7djRzYzNDjNdpkAJixign7aKgpjS321k1y5ZwPf3pCF6MGsFN9Gqd49Dm1DNawiwu2Sf1yWTyUN",
  "key33": "x9soeRMUqHAC35ehCCqnTpbxLEUXowgvC6BrgDXEQ72SEuabdaEPnNuVcSEri1ei8px25mxPGD9hBvEg6NEcU2B"
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
