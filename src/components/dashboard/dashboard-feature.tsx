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
    "3DhSuL39wRfFjfJjLLwbcnZ6ufE18u71pfbJbdtLCoRtcwm2AfxCGX4mNNJJ6uLjtUCfA8Nt8uoZX67jvq1LJRhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUsXR9u6jMmYpX8bxsHew22EpyBhY1gAiR1UKBK3UCa1aUa3bjz9ui2q4aGDmsAwyCUgcNFKoEzhYffkWHjS5pA",
  "key1": "C7QSFptuGQs72NAxsyiNpRLDr73xpvtfugXZ4v9jR1Y2SLd7DWiqK8FUnZkJSnENQ1U251wThWbpZdUQgbSqJfi",
  "key2": "5mL48X7yH36r56G12m8vRe5cFQj4rDWAQExDDpEsPjgFuFjYWvD8Wykftdsj2WVAijDb567rBUp9d9qLJU8oruDD",
  "key3": "5X6PKpqGQEHA1bn2f81PZTaA8v15sNCke72u3auEBd9HodA7dHndF92QuXG4YXdf9jTrukmrFXsNNa7y8H8wTbDD",
  "key4": "4kWouF8Ygkhx6CKWCGK1a9bnfqM6KnFWcDbwLAGys7vtpA9ZTtVsS4b5NPW6PZLCpswGy5K7teGNvFLBq53ByCYs",
  "key5": "3hDHxop582R2i68vLmW6WXG1LoBQ4NzX38opXRM1wUyCJU8UQSk9KwUsKazyxAhRimtfHerCAS2ZURNVCLg5W6pz",
  "key6": "FmQFGYfdAi83B2HDK5netMTSG9BhAUFBGSSuVbZqr1R89N6yueASgR66s2jSpxxikv37sr4b7BfpReDLSijUzJL",
  "key7": "3j5DRDZzesSiqczLmvgQLRQ3nga7zT2GqpsMfeniTkr7xqx8r2esCF4PWe9PGDzC4Dr9HE6MwMYnDgTZmusrGwt4",
  "key8": "5nu791s18Um999jEWj6F5VkSv2pDCPy8KPMCKEBUikR5SFv9rS9nseh1xiSkwZQBfksdnzfXdwZ6MssuAjpUT8YG",
  "key9": "4uY9nZDJUNefVKyV9qE37J84Dkr9pbSNoxNyR4dQaBRGFMSMKTz8RdkyTi6zGKkZoy3VUf1CYW2bTYeL1HBXrEWy",
  "key10": "3CyGvWVWERF7QKzXSVvmhrixj5NG8RqRHwpMZFquZopQ6qbSgtvZrGd7woREGGqP5Xi3of9ZvKSzm3rA4YwC9wqt",
  "key11": "36pGYy48aVLFSsCzHavXpFFoSA1UYNaBfKXDNYCTrfxpGYy8W2q5E1BBHpdB9mD7h3jCN1zeUC4wW7ZRk5mgjmAf",
  "key12": "3G2MoHX4zhGXzjY2yy7DmeojnLMJHYD3jX7LJtBv2F1ru2j4rWQATvau4nsB164VJAuLZPQH7JTp6ZZxaYtiacS",
  "key13": "4JNLPsEtvsYqKS63ybjmJCqd5HxqBvVvdjzCvFtKxAjY6vkyKERw13LxUSeBG6KUuy7pD5w3nLXZAU8fBrD7GDVy",
  "key14": "NctiiPMDK8pPJvxVvj9RWaGfWCjtCamHurJCNXYpHToadtSofyKnGebb4Qjne9oRxyRnjWzr65w5BKy2VkiEkpr",
  "key15": "5xCdihBK455fKADriwLcJtBoVKSCR86JAf3dYQ6bpT8e2r7RoSs9vUmQqVeGy9N9jraQZ5AcCXXXo9gonnsGsoqu",
  "key16": "33buWqryRoCVQ2XSXEGbGemVTcKtawwdJC2dhyqa813cSV4mymP6KgW5kvzXaSsLz4MZuNwWaauBrgAKJCNbKdHR",
  "key17": "4qw5WTRp6gaqKRiS9tHBRKm8XRgivtVsxGFRXWu3LT9rjcM1qB7unbA532L6tfZseDr9in1pqCWzPtYaeFDxU1nk",
  "key18": "3Tb41JuY2xSHdeofa8i1mDj8h1y3x8mBsPebK3KHbwZxJsptsJUd4gjcEthPsfPUCTGyC45wBEYpxdBcYEpv8XfP",
  "key19": "2NXZgqbnyhB1jNaNiwE8jbsUpoLFCCz2hUcuKGcbrDKq6bVLRQNcef7rqJRjf3wja8S7grFpANN2J8SxFDeeDbfr",
  "key20": "3HhR18TJWU3ucR1Ea65jbSkJanBCjesh5Kt8dzLdS2VmzUSY5YV58vCE4sqyhsPSHzMBJQDguzEmScQTP1ybnvD9",
  "key21": "2y1SRbDTJ84LygdZqCYM9JXyUwSgoQGuXaBwhXDiNLPTL66QynWEoUZPCcid78Xw8vxbuzCqYpg4uY7h9hKMM8iY",
  "key22": "3VjWjBP4SbwRtx4J8ZaidbgHkq6ZkdbmUNHumRjSvWT2AXGNwYX1qXP6dD9C6azjNsdjDkgZr6Wr95qN393m4xdc",
  "key23": "3HitviPM7bf3W6XiAAzRmgAsNWThUNrdSaGgxRQisKuW9RiMt49vrus3WSfjtWDW8KnAGaEQ6gRx8RquFo4SNLwG",
  "key24": "3faSEVxGGEQuWu83MqXLBVX4RXZrj265HpovMiwzJTW8KPKWMdUdKc6BT1L3PYvBcD9z7bigm6PxAq8ZgYxAoE93",
  "key25": "579PbSTwNqxeMvEsMeJEgrUmXGBKC7DXF5dtYdptMbV8A1owrjXvV1XG6AAGht1WXHNJoYCWQRhDJLK2Y8nSBnig",
  "key26": "2ZoGQ9vdWgyj4VewSmHC8YtUicn2VkpAxJDKtLgKeF7WNZWmG1sdcCgxRbKmKNBY5dsD7hWWDP5Cnp55HTKb9498",
  "key27": "4taseqdPtxenHxo8obNo7JUqkwDnuyZ2N8ykaUFgXhnamNkeNLVrW9viHrs6hSzQwvtqWCBdn1QvcNoBXLgNZ4vR",
  "key28": "5w61fpVjLX74EvhG3XfFUraaPzsbS3efeeoeS3YGx6hYn3nrBpyvTCHh1QtvNZVThtWHMeCrPhZa91YALVaR2BsL",
  "key29": "3uUcGnu6UPfNgYM3GzQYANU1gsGFdJFwiiKNGQUCkABJPfx6rBqHqe3mbHj7tYYdMiHVeXNsQtcTUkb8GbEpLt7T",
  "key30": "5QMcyqHcfEEt4EwZ2SsiP2k2yFh4MYdyJ1QFLCkcUetR7VL4GpVWAZZuMyXzJk2wJv4MkCE5YodYg8SF47T2pGJe",
  "key31": "5L7bshkgrLWiUE1YudTwmNsutxFbdPt57dsxFgZ8kTDmVdKnWwju3So7qJpPDNxePtnomMyq15o1SCeq7wuNACgL",
  "key32": "3k6Vx7dDx2JhCeoMLAvnrrD7uQvkHQ3UTySqnbntEh4X1xBAvZsNXYzD87jERnqybqHdmGB5rCEWzhCrnQth2qbN",
  "key33": "ft2nJm9nVni2N9GX3rktgeWJepyRhJR4P175kJT56Hb79dxmFKDe7YtvwCp4CkLcrK8V5N1JSKxRuUe3z2yBbKj",
  "key34": "CwS3aowGz6btQwx7BtiJwZXyrWKi2LFE9J8HcdqSKxhCJ3efJb2MFMYQMSFHY5phVCLXDNWusc8fzGKJKF5z81U",
  "key35": "8A13jUkdpSy8PJBE6CqbRUVhxn12PynN5pcN8JdDPdy2juz1RdHkvNGmXrqZHXVfbSzScVH8pajFiSXUanMX9sg",
  "key36": "4DTEnnAcaxgpWY5G17zjD2yp6rdfL67qQstxZCmb57v9E9V3hXNfdPWtHXYQ9SFobuLvQKga8PY3w85QbeRQycWR",
  "key37": "2pYw6cirXJmw9gamxfwhASHSdHzF3fxbhuxz7XRpxDA4QW6teUJjRvacbUVxidab9NxwN626aAZfHNCkrKQ974gv",
  "key38": "4ano9QU3csvWcguSEHBetu3ErBWSHzZi6c1CrmyM9D2oQpoGnmBjTaQbXfBDe7WPLWx4wx95WG32GtgwmqVCAgQc",
  "key39": "2wRZ7sfVGHok7ZqZwev6SeaHFTaBtE79MAnha2uxPvP66Pf7X9bshxbevpP1HtNSc7KRUKpREfZs7jTdg6JWPDYy",
  "key40": "55SMvUJTfPdx1W2kgaE6muqEWAAkXquPxgWsUhVqLjvfWDjmgZ5tEt9qgskkyQN1DA9k8o4oJYCqb6dgzEGf2hKM"
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
