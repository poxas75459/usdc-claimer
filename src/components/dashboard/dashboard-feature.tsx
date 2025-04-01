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
    "2Cj8n34dUev5FULQ45Njrh3sqNcz3qpBJRaJEtXhf8UVtxn9XYMLag9oy1RWHMEKBx32cUrjDvb2JJSo7pDt4E7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgN2pFSvYNjfCJibsZwpnxRYiMGfH3sYDr9wqeXuzxnoQtDTx99HZ4C9wZzEooCTq2c1q37q97CBPHk9gPf96FG",
  "key1": "DTXUWBXK31NvDrTectafZDUkGd2apsHr2P8hE6hEEtZqGfH5xtDHE3bSu3XcS4h1T7Tv5RUcJz194YqaB3Pj2Fm",
  "key2": "2URtEcjGrFL4zsqBeTztrjJxBgAcqjnhd7dZgD5SSAqRoGSc7vjvL8gGv7adiYfeteWDSaUuMZVPeSn6faS61h5X",
  "key3": "4qPNZsenJb1PntT9AWqzaSsysvKqvnCRVTTaASs4ABjZNA3yZusHhH3pmhngK1toAaFh7W3RJhqeoKNMEPanagyL",
  "key4": "3sK3j634ogsGgyQ78nrxVUTnt8urBtwHN1x8trckyZyjKkozuESkZPJSWnPz3WYvJvfXk4xk79Fm2ciRtUfKHZxJ",
  "key5": "2vDMr2FAe4DuW6WfGKbGPDx4QhqMSaNEkZTHag25Y1WNv1vTKqH3mkAiFjZr1dcg2sgDQBw4enToS5zLadjSPU1K",
  "key6": "5CpVxg5i7Em2JkKWv9qyLWFKTt2tzoLJY9i6fG2nHeiogS3LWpDEBUYh31qjtGtJCbnU56anV3kSmP64uZxNb1JD",
  "key7": "58FvVYY5ih2KkFQtywyZCy6SKSkWCpV1JabZfeoH7NHrMbT5fL5VSgaVB4q9eHzgVF2pr8RrhnHohbGYNLZVCHh1",
  "key8": "3HjXUuq8fZzm3KeXfwoQspruuR4Q3y7qboMBWQ32Au91Pv1bW2vSUswuLRwQoskRnNfc5Ncy91r6TGxCn1JNgRr8",
  "key9": "2EPNWU2Nt3KHDA8ehJ5SdH2dFWRwYnGVgSsF61nkWUMnoZHPSu4r5wt4eKrgZLnj5q1Ue52KnpMBQUnNZzVLvjBq",
  "key10": "kve6qsHex81mHP8HfB2qtwXVtuTbPHhyr49QqfZFmUJrRuFnTh4juoZGZny1d4upjQq5EnWfqFvy7W3g7AWHo26",
  "key11": "3JUFPCXc16fY1BsZKf3W4qukE8NpZbdpAgFAGhDTS1owEcBbU3fRKm7hXBE2SUEkDEajmKbWtjweRd95jubL92BP",
  "key12": "5e7VgtpAVgyyGsY2tAs6nJUX7LYC88k2hJU46CV4yWtfJ312UwrznFeoymipuTZonkvqyg85PLuTEqBL632MXgtr",
  "key13": "3kdsPRETe3m7ZLYEPnBrtkxJjpmCdckfKcKaKS6CsNdyyVpfByFuVaHKw8GcNaJPcaQ4K4Y1Fwi8UFdj8p9LMHpD",
  "key14": "QfzaAoHkEzzk7UzPpNqL5prYd2CxWC6ZV5g7rnBSyxmBAxcrNZCiYhnovu5Rf4SGx3GLHzBXwxTVwfnQWUyYAik",
  "key15": "3prN1vmmpBAYKU2YjGNribJ2uwg6qZuGZsANZcGtv6FK7XTWz5m2W6DuiDEbGSa3T85NSFfRCUFyHt1Qwre3gPWV",
  "key16": "37VLQsuCer8mzxoZZp4CLvox74UzHFYRVaepnYNoQ3YoKD8Axf1zbDTbtGFJkrwZErSR87SFE38LYJfTv32satDP",
  "key17": "4KCNoczkXAGkwkL3YEhDn3PasTif9nTCyLcimZaXm8J8Rfntbn5WUuKDamy5gJnJWaUHf8Zr44J8X3LvEmWwLG4K",
  "key18": "2yZaK142ztcg31yAW9e4pKAfokdWG4UCB6HwX5ZptHyb8DjXtPLnu5fefNYTKhzbHBrqdGdQoWY8EV4mqos94eG5",
  "key19": "mMiYzvtoHjvuhCqPCgQy6BMK2UvDe1nL14uCPEGZyVwcnTTXU3WTPrehiRq5BUUUjJMaAzr7Jhc7aEimtjqPGeS",
  "key20": "4SRLp6XL2gmtgwbbVmEZ5zQ5qKE2ehtjRWRhGpiHxpm31fHTt38DimXqzjwKtqDG8xrsNKkez3rNdmjmVraktzkM",
  "key21": "5EV7d6DuZCtNJYzNFkZBRhkMXaKD75eYtzaupqfxjbBjqgwYm2wVEeQACf1q1i5evg1VGFFbMm7CFeMqrJyKmPXo",
  "key22": "5NhqjYeG6pgjMbkD6vzKRHiANMpxdQKmaKevPW3sH5dRpBdxszbPFG75pYBR13wfNm5it9nwNzyejMZn29jMX4Ej",
  "key23": "43Kc8UwPbuQZZAKwTgWabp79BaxJMMNbEsMNeXmAM7mae59BznpmG79JHLZ9ekmzNYVZNQyRrfSh5FQEgbbsVXgA",
  "key24": "zZubMxGw8f2jEzYfTARVQsua1hQFmKuLRtQ1o7YCM62VTHzrVgwKGdikDqMUjNjKtAQCWAR8iUcmiTWXk29DV4r",
  "key25": "4pcjhe465VVtWFafKykgnkMhDKeVAPtimeeowzC4hzyDRXzYnCu6qR1kvHcCvwXSvwkZbhYN5h7vgcdUECce4S8a",
  "key26": "3nmVATFkhyVTWz7R7LRUSM7hmfKoA75aSAu7TeKwLqFasiUzWdKrxmTyWa7ADEfy4uojLXHdPzT6HTPT9Adydd4u",
  "key27": "3m5yZZGFzL6z2vZjhVAYtp54bRhnECb9SBF6swqUjP8WCEgojsiLnndvaXc29u72GvQ7k48eBF2GzTxNowJf16qc",
  "key28": "3RsQq5GZSknSdMe6c7G4nX34934SwfFd59hTSXGMCHtJJjv6maYGsx9oK9awyGh3rZ5vFQ8n22FJjaC12nQz1ybz"
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
