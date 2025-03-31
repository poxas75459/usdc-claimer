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
    "5BEE4eAhiVoxAhs2eShPsJQp7B7wAiufqcn1A8VtowuS2rbSMi5soYzpzd1PcipVSH8Ra83Kojdk4VM3aM9HwxGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egVuHsTpBudVzAkyxfiTiVzPsxGqhuHSdoWgB5mirin8yD3796PsCzd1EY5imEw6sdjDpK1fBJ1uWVcc6DfF1XT",
  "key1": "5MVpjczqC9Kx2jTsd6rSghThUmk96r2bncuymE2mgxth7wGb8MbdTLYwYHa75cF385Ed1jezz6hTx1x1B3dbPSa9",
  "key2": "4nPWicQfncuUfNJodtWCqgeKh6378nN5jtgXQHJx94Ksynyhhr23WVb46afNdYmFppqnp3cxegCDrT5Hx9GFyT9q",
  "key3": "2DztbjXQHbs5reu7U8eZdhzhU6djDyc5yaLfW3ar9CDjdmxc6x4EpYWr7NGAUmjFU8ZwK6x9Na2pYhrHUZ93ngkb",
  "key4": "hoKZW1LrufFjrzVnxmtoAoxjnppKoWyHowNijApuhgXiGMBKVDFkBJPR9fBPEghmCR75HsUSMtJ5xFnk9k6tq3X",
  "key5": "2hcbJjLRwS3hpjCazEwpoicMQtVdpvSBbbH7rRnLqNexWv4hEQ3AM8si92CYMuDMUdL9x32mH1UUy7TEvz4LNVwK",
  "key6": "2PNT1DTDPuUcJcaqPMZUbkn6R1snDuERjgnmDfabLkN6H7fs86csfuZeYaTSgpupJXXwXVPMYNWsY3opfuX8sJJr",
  "key7": "3fnNZLgxjnC1it7nt8mNmQMgfrt2cHJugMUKgxsenrUyPup53xPZrgKepkVsLi2fd9eK5pUnNzjjNEahfwRCBbwg",
  "key8": "3ErjswhrgywbXpKoUNBtNEZPUvy6kf2V5UPcY3Uky9km64tGpYyMFcenDKiuwNs3Af1EapHJMcye82TjR7fiK4mx",
  "key9": "gR1t7DgPRiUyxuuXuwqMrZcWvVFCPxSnw84HweQ7XTzNd59iDzkpwQJ6Sqdz5g73hY3UoGW4xPwp5xsTqhcGPde",
  "key10": "2Jr6FLFMnQ7geXmFbvQdCBb5AuraeMhd8zFcEYNbEWjpvzp2AMrP4YcNf1rfZx9tE9GEwC2RptS8JLnRxptrUQpE",
  "key11": "62JmWZYJU8nvnZ7QXKLQJpALPjJ6KWJ1heiFSf48esMqQUHXc28jCuHGP9UKCvL7Na59F5TaGqu56EJL3Sgyu4UQ",
  "key12": "4k5NQmwehnhBjv4ETRx75Dj8nazc64T4x2BzPbfCNJDcK6WWHKE9zXvDdGiku9tqRedqwJyYp3zdkb9NbWQNroCD",
  "key13": "44EddhrzaUUaH4zp9TwB3f9FsKhRRY7HMA1uzfTFzvUxQLQWouHiQwveomSR6w5Yf1ZWa7pugDx975GyKbiL99DU",
  "key14": "53UXZGSZ9gBBT3m6nGoYSSXutPVSyjzdrZh1xe6Fg63skrWSZo3xzYSUCtZZxHhg2hR3EKyrwYQYYrCDCUWFUUPF",
  "key15": "5qfPSfVTHFuYJdhUXd8sQLwvkEndH6cTbh5kY8ux7rkBdzCgjb3PdmC75wgSHWdSiWDRP5DNJ73nz2mqFMBUfwJo",
  "key16": "43PbGJUUeibNV4EigfxMUxE7nL2vtokULpJTWtpB7xBk327NUUDTK3XChGDDSdQP7Xu5XKhYzWPw3ZfyLP9y9doQ",
  "key17": "3BnDHrdZsAGAU3kPzWPhZjR8FCf4kvPD2pHoxfmp7DuH4Vwd8uLfGGyvvYSx6Tp8LGvnKFtRM4XzTVjmkHzmfs3M",
  "key18": "3HtphF3L7jsSZGCWe6nZYGaUzxbygbDv1AyvxkHZBbMw1AxzEzpya9BadUhi7QYzhtF9mVQEdPHu8APxB9aYuB9T",
  "key19": "382iRiSN4B9wkquPGTfVkXZmmVNzF6tBoGsDNCvu2yaQMKajP7GFoK9ErzKSc7FsvBiPBy4jtToeyR8vno2jSgT1",
  "key20": "5ep9MR9vNEbuJmzEUZmF42MikgLZZfAnoXpzCi61r9Cs3jYKqhjvGT6KnfhKZ8E1QcqRxPiAU6jiqCm4iduXUWHV",
  "key21": "2qiHvaFj6xTgw3PwEnoDxZiYT7iVkg2H5cvxHFpadeNkC3dfFAJ6XkmNpAZswAwfJ4CAUACsuRykat3repviNPw7",
  "key22": "4sGwVaeS7RwR21TkdE6mcutZC23ngzkYFUULqMLfaVacF6dP1DuSb9R7yCbXVAQWWbLh8jZRQY6BobRWdcbJ5KFC",
  "key23": "2F7vPPfZYFRmZmA1aRNkk4uGS4HNSjLN5Jgi7KfWcMfDC3aPX14satfkRTQVuTqtmPshTeDVQd8C5GmywF1qiWYE",
  "key24": "3nSKY2pTur4Y56FPaGCcsvpnop6xHjwDEbdct3k9Hj1mEtip8xvAzA4bhW2vo56GwqdaSg2KbW7y8VZ494QbXH2S",
  "key25": "3ojd7LK6jY8MyNs8SAsPTBw8SYw5yA4MAtH4RkgBJPtq2Jf66SgXg9WpXmGUscVk2jcBrDr4Fvs8GEy2XEHdsqvi",
  "key26": "652nvpZvcUMG3cLPtvjBahYzugkXNq2Fd6ZSLJK8urye8FUVt7AXd5jFYwyervttqe5PwYNVE32xdKA5vj7Yu1wj",
  "key27": "3yEkXCL5pESYCNMv34UzQawFJ6BhQRBMcUBa8d64Hm79RTCqez5Jhf8KnGG9CHjyteSKrPmzvHabxVpbUWJkkH4T",
  "key28": "66pQDBVdU2LZQmYLVhLnCD52zViBuhbKUWzqfL9rZy3dBoSoXsF9eYZZG6xzn9pBLGenuzaK4ATxzYwSDerVcNgy",
  "key29": "2o4fEsXi8jsmHYMdGYXArb8wTHVSM5hCQtWF55yspEa2Vy5wNaRn2x2DWEFG5nxtTXAjp9E6afrt6hAYYY5JWtTU",
  "key30": "2jq1DqithaiYFm2eFpSdBFGkKb3mHip7XuZaJdGTH5ewP1A5Y5R9WNzYMWZkuLP3aHed79Uyvp9SCT2JMJfSG5PV",
  "key31": "2ZWhdZiDDz1PtR7JSZxzS9VTMHtUqR6o2J4CAwPYatuNzzh1Jmd4M67DYSDmHsk33Wzii7z7gzAKrfMbvaN5CWqQ",
  "key32": "FnbdeEmmfp2ZtQTjLFpAS4VtTD4jwrLf1jSXx7rD35mste1VAUqqKesMnKwhNcGi5ZfyGkrDxBZyXnAR8TJiNQh",
  "key33": "39L52KjNhvC8ZoU1CRkm18Qi8ZB74bakQVwFbcGryDkKBT1VuRReBE9hYv4R8aoybpVQMm6D6yEVjCKpRxVV97AE",
  "key34": "4ssA94gQdB9vxyURatpwkbAyLNMXvYSv1PxBLkoqQ43NejPb1tqzWQbsa5viKu63SKaoCn4HdB9NN276ZmDEhPog",
  "key35": "2KceWms5jqRzHp5ZFKDrposrMsmEW5aocPoKXz7pXYq4yFnRsa3SyqUwSpFHrZSz9yHNPP8gZBEF9y89UzzZo4zj",
  "key36": "3uzV5VhUK2wQA6bmVPLCSJEdTPbwZDqnqmnpvsg6hu8BR1cBKcA3NsqEe5YsFJ1F41CsZqkH7cCsoKRHfcmCNCLP",
  "key37": "zCEAUnNg8zN2G3QECovCtW4wSGKgizGUjoqb6NudsU7aB6NgBfUdqGSos9f8hs9pWGiYbhsMtb1c2bVrZuJmqdX"
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
