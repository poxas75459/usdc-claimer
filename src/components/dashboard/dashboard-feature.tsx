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
    "125uQLEvcPDiQVmjQg6TGpY6rigLmfDZta6AQMNfrBZBupqwxF5kF8BginRSmPFCJNjQw9x1tLZVYY9o5cqY7xma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zzDT8J9NgFBgV6TgdWMcyopDRRp9TQJivFVjnPp6aebAXXWjDnKEBSeW8G8kCzL7n6o9rffGvV3C26WhNBGULR",
  "key1": "3QVcXPyETc3j6ezQVzjqhFdkCWLW7unEkjUuXVvPiuEGGN3LMzR9Y7DdLpJzANvh4W4okgtgNn5G3AJpHbYAFuXy",
  "key2": "5YW2Faq93yCDGUWxJaRfXVmfA12WchVjyhvDwyDZLuFEWJ88bbb2djStdqUsypiGS9wUk4nRBHsv9c6Cn9M91HVs",
  "key3": "5mNrCrXhzvQJ8cRwCQDXNEE4daQv3PFWHX3BbPH1HjvsrnWSufBG5EnKrAz7qhBES6rFibKbLHEAgUFX59WkWz1a",
  "key4": "fqfhVwdGPKDpbtYyV6kaAyv6oDZngsX5pxWr8L1cXgFgvYg8ahEbhUQx4DDwnN9m9aUy2onfvnbH7wuSQYb9q9s",
  "key5": "3ZxVfPFBEk8muCP6nuWdFktDZxp17aqYZaXuAPQU1ybbLz6RAWHkM9jdiULv79GAJLzRVGuy7YmqGqXbsXD2NiqL",
  "key6": "4xSRK6whAcDubxLER8BpZ7EupCto4Trk2TnnqLV8YvwdZGUBE8PrTNVLS3DFL6aEQU8exsFSwDbdRa6Y5m9gFvF4",
  "key7": "5sgUc1t2Sc3UV1Q7nNBevFFxDHF6fJqQyCJmazxsPCFzRd96TfAjHpU8BTFgGWHhj6qybXELb7LsV8kd8bUfr1n5",
  "key8": "2yn1mjo34sRi6G6zo8hCCtHLMuTi155wEczXnyH8HF59Ao5G3AdkikfDhJHcRroRXMXfUsNrLky9S2tjh1orDiep",
  "key9": "31R7KY9DiZm8RYZL8uH2YmoLhfE4dQFLTA59G7PTa3VKNbS1eeSVCKCnC2dechfJHhhbTDS45WegNJve1hu9UNqb",
  "key10": "5aX4LAgFvuJwoH8nFWeqZSWWUizoYf7kkqJNPd4dt2tpR7vyGed4XfdKiJsfbCb4k2one2Ej4WJcZwm5qSefAs74",
  "key11": "599yLSAbVAuXRQdJC9uQK2aNQxCTDX4aGACJQ3FBB8ZEfVoVn4ozZaDK9nf7XEzmCAh5Tmg9FdFb8Y8naSGH57oQ",
  "key12": "4Uf5SC8tYJ6yKrzwYm2kNzg9Rzm8ZdkjjqmpqL8B9Fd4XvkmZNfE5H9QkNqjuPVmXcNpeDTXkuftGWQ2LN4mx5st",
  "key13": "2b88MeibXQ37RzCdfEpsHzbTuqznCczxAPtVTA9j5PqK7xkHZytVgSgnZCoswL4V9gQUwo9NciN99XAznzHbB6uz",
  "key14": "642vQD3mYtX2Myr9mtAmHC4HBSaEfsoLYGCUcu6nMBF4hZs8oFYApy6HUhmgAFPuaMAaHBVmYHEEjRLjSYj4EYa3",
  "key15": "2vuQgpCGwRKjFZDshmD9MBW79iariEVacn5H2kY2smZkZgfqL3Rtq2bKBHbsWCgrpagA2ffgNWoMUx7MztHX6aFj",
  "key16": "3FBok63fUGUVB1ZThE19YCASXt47wsYgwsCDspk62ZL8jq8KQmRjTA26nDfCB5pwKsLbKPWqskEp1ZS4LQt9xcXp",
  "key17": "QLRsWVyikx9SKg98zWEHHoSFH632UEBVgFV5XxhLj4xRb3qz8CgnVQ4RoLrJiiKMbCnMsAH3sFAypMVdgeMya6b",
  "key18": "5db6LgjKr2i4vH7wvTMFGu6yqvCUadtWYLsBmTsLFKcTiTWNEURf5DKo2HKRQC4XWx8Nt4N7D5ywZzhGyb8t9hpT",
  "key19": "2Ww3Ynssc8KVhvBfpiM5oNoCHhJgfxaZCqSmh3tU8m2syqLBVSrXoukgHruZYLWoBSj64EFiuSEnkAv1y3tNE75H",
  "key20": "4sMqGSep7p1cj8yMQYeKqc9uD4RUEVtRgsvAPvMyQzyBWHrWTfk3JjxvNmkFw6LRPUMjfBsKpX9Gr7pbwaFY1v33",
  "key21": "41aoYj6UjHwiQDFL6J1v7XEgZu7sHCYaqkBu2EM62agkvfgoLXZnyJSSryCaV3CFrqDKZuSFFHphTo8KiHi8Hyoq",
  "key22": "PGKisPr4vf4wupWnZX732Gxd1CxdCY9cyET1AbqoroLBsnYfFtPaM3PRfYyh6d6kHJ9C1mGpwzVvzVpge7FFo4y",
  "key23": "5mizvocG5wv2VsZGwX7ZQprGJsQu7pSSPJi7gmPmFh24SR81wu1vwq1av599Qgr77NA9KEb8V9HRDGmKf2t2tT2d",
  "key24": "3svAoJZkRqqmTjkmQHjd4DC5bYvoa8w88uqw7ADU4y91EknSqnJb6x3PecS5G9PGWtWFbQweApp7nF5gYuMHayQ6",
  "key25": "mzb91wz2EvN2zGqnrTwhQspXP2VofwhWBdjW5bp2HUFLqG44CTNbNiuqiC26e6DvdTkkNSD6Kfm6ZPtrYsK6RLt",
  "key26": "25sVWPArthuqXtqwSPjX6erYcGvtnjhcbphMtfakcg15V5jgfYb5vJqruRNa6eoUw9NneRNuU5MUbn7RVYavNiuH",
  "key27": "5EWbZ31eTRSotWFpKoLM7maBg34yyWtNcMyv163i1rawgAUXUU5NH26EgdCN4BZtnZ1D44Y4jiNS9KsYZooFPff"
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
