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
    "2xd7bmGmr3aAurP8LQrwhhAjQ5CLyyFuyNHgqRos5nfi8TJMmqbw9fVmMqGUowHqtcmTAwpjAs9u8StjJBhJbSVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nc8n8kn1mjYFCDzzweJwkJur9NxrzEQGUhLJG8Nr2KLyXoguCZeNGBAKqRoNAP5RFW62cgrj8hXwz9uPFt66zvh",
  "key1": "5uYeX6NjQ3c1rFtMgcjZ7mGz3mHXci1gFbsuL283K4g2xc1jmYbZ6XQsKBZoXMCE9evwHB3Wa5ve9FAmK9cbaeWC",
  "key2": "2VceguJexd3nwig2QExcHmtMVdsNTDF4YYLKm5kRV7Mae4iVRENUQ6rHrcZ77XyMH6g17GQHEmnGqmpEgNRCcEJU",
  "key3": "EQUyNc15RVr3AmDQZmXMBAF9S6CsK62ZDzNJRbqKUKRWucKqBmoWUVFFp4z3pdELbn66xoKhkpVnMGAgrA4HvuF",
  "key4": "2diMZy2fCPwPiEuKLUoBBNySBNbQxw5pf1XaPc8febXMjw6rt3QqJooeQBKRsj5YntFCiEyvksJ1zb2QTjsAMTtT",
  "key5": "p4QPAoVBXtBsduSmyMsnGvmHk3Xp44tu1JTd1kHJQXCrSkSMEvTKw214h2LUtcWQJbopdy2jp8EbZXG1EB5Xk41",
  "key6": "3rwauGcCGWRSVwEfjD1h3F32o9398gdrKJ9gg9UGgoJxo7APkiMC7bwjoyijGknJTS5zMtAxa3o8ZX7JQXU9AGQT",
  "key7": "Pr14AHLUYXA1grgJ8HTF4P93EKFM4rVzSgDvRzsJWrLZw3YdyvaampVokrhB9jv9NQcK9nDbwb2jVopCmZ4XsNg",
  "key8": "53S1mjBGZoYTTPCHGaefGsbw3HkHow4aZB2LqT3w98jVa8MG73V3Ri3rCNtPs5UDiQc4VCeJWvQwLs81LX1QrAVv",
  "key9": "qjXXC418Efq1fVHYpfV1WNwgBy9ofQ6FVnMFWRzovRMGKrDkDTmv6evECgFhgL6fmTFnLTrNPUERyuTKmmkEudN",
  "key10": "2ca9Vyfz84bgKzDeBqNmfewE7ua9VZWMcJ5vXnRUv5eAPxcQJGGaKGqQumoMYDPUQP8Y1pu1KdiZbSYFXL5Ruqwe",
  "key11": "4uchLymhqC2taagCkXQmu3mDYSQKFFQFrgPAFp3M3iUxUzJcEeMzfWa8RaQpJLebDkUbzDP9X9QD3sWTBfi8Ds1t",
  "key12": "5Xp8qZ5tWVRZ5mqX8JZ2jkQ7t6gXLF9pT3SVu6rdUqEwxj1FmsCqKqWELQDiusuLK2wcEEbyKWJV53vWMFCWgoYn",
  "key13": "63Mc23p6DqcwB4yNni7akZFmbEWebdFJpbFSiS2dQvg11Wqk7PUsooQqeQkqGmuAPYYzmusXRBLrVDjw6NMroAEh",
  "key14": "3S8zXWdA3JRQSJi6UGEHpzVCy6QDpHZG5LDydZNSsm7fxaWwiQCipr6TmMpFgiFAdUTE7WmFZH6SvJoAo9dCWPK1",
  "key15": "53yxnXRyJ23g2nHYcuPBXjAqjic9CqAZUCQ1m7RoRuJPY947UDvTqkFesb2c2R8SvrCdgxTmdhiWgz6RhArRNrbm",
  "key16": "CRjFNHjc9JMPMHkjGaWxAqx9szQdKGiXUzcaxR3yKe1KyfLUXSZBAtQbAcZNdangFFdj2hJ69wb3GUds8V3eBGg",
  "key17": "5vMDhzbGHxWpR4ZrkwMp7WNHHqwu2Jf2ww6TGaePtWURBurEUXr6kYYFiFsMVY1ixe9bWixo4bRAq37i8uwpMfrB",
  "key18": "4WLc9HCvBWDHU2P1zHGu8nUf91aCtSndpDWEpvzdawed4y8zfdY71EBwQRKrP12S8L8MsriHS2UfXxQJzqLNrKPC",
  "key19": "2qcJagSAWmhNxaqoTrWefC1e6EtmfpcUzcNWCHUWbJ5HyK6qVsVZZfnzctFR7utaQg89TBfp5t7SoC3HVmbneAkF",
  "key20": "3vVCF5HYDPXeg8HiKejgk55iHjpyKw8rePdYAVqrc5g5tVu2DUFRUsFqwCkVaqVbLJDheCc7fq6TJDnnVfFqyUkS",
  "key21": "5pCpMPq9M9oJ5wWJstdjyFyRPtZynsmuyiGPYaA8ax4UPfswLeZjtC4ouorqKpS1M6j6YuPz3ZX6Jtxo4VJ8SW7y",
  "key22": "t5ETjBXwQuZvuWZceRukAR33uMcSr1UFMWHCfb3Hhxvj4aAfaSG4TxL5yrybjdUPj4Y5cAJQTUmM2aQKZTkbppv",
  "key23": "Ek6FUL6w1SYABHaq4LF1W5FCQP7sKLM8KtiM726u77YxqzmevgS1oQB39tFrCAttvbrA3fcLnHmT5ReZNFkYBPa",
  "key24": "2E9J5oDm1MUYr3JdEy6PoCCYbWLkNGPxdpDjMdQAc76J6zSa5jESSpn5xB8GrXPN8qcfd7Uv2ceMTbpjc4wQJVsz",
  "key25": "4Jza2iUMqmwCQSjsPfSMFJgcnk7AwtWxDy2A55bLeLpV3QmBHZyTxGKKm1cjaNxLSVQiHLCvXEpEqYaFYk7YQrQH",
  "key26": "BfCgJ1VvGzTX829E4arbzkibGEtQR5NMqwCP8Z3vEYfozVXnkEdF5jSGVB2XSbBpSvavSRNZzjkfaeFYNtCwVP1",
  "key27": "3BGUJCVZ6XXmG1ApR4PBjaXajnRAeWmdfsXCRFmrrPy3bSQ3b7kiNvNEvqjL9JzbqC38XSqEUZhwwFrym527dkZv",
  "key28": "5ojDPiHGtNs8M8Wya14KZjPikcqXxLC4TALoWYxT4HYj5Mphw63ETeP7KjRAwumFGnDKpf1d8nhMaXoxaxcZf4rc",
  "key29": "p3Yz3BdFaD7U9V28AxUmtEQhyvQWukXVM8s9JF1ADjMbuhRgJHoJuUaHMrcPGjf5pZuvij83ivq7vgxRCy4Nzfb"
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
