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
    "3taKSZ3bmGrEDRRvNaFArLmoYkG5mcvGGMqt7eyZzJkEBpkYhsMe2JoHvULV6bT3wkv2pHa1j5Xb5urrgA9ekZTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3Z7deLx8QWB4dVmzJ3tui6HZm9hZrc5GBiXADFHDRgJm7Ak5Yy833V86Ywebcih2zJ1r2DXfC4hoexih4Mtd27",
  "key1": "4aZfhELcvA6A6ZuL9ukmE91sHiDjBgCZ4GDpruG7rG9boZiN7ZXr8xvRCKJddGofG5KnqXtpuBYYsx4J4AAhJ8qu",
  "key2": "4E8ueFbcsmF1ena82CubqNYqcmBN4tVV7KLbjSV5UJbuAzsSuy5UZJNSypoQCPt9amyMVdNGiyEfaRSpCbAEbdSe",
  "key3": "5NNDVCjsAVZCqUySsAhWJ438Yyibm9HbszoJH7hikigmnU8n4vFBZCYGeGzzF3gsZGq3FfX6ddMD597JLB4wtSR1",
  "key4": "3sPy34XKuBsmtpwhXYPwhukjKAhshdU54VWGfFy5cGqJv9merTcs1DQDQPY4scf6PSRPjvsjC63U4T2dQ7YBi1Xj",
  "key5": "3ysVeRD22zM1nEmDBFmvxWYn7w2YJhHQfye7MZw9kzwXVEjgTvveZkXdw4nHPCBvePzAdwrsnwgDDqcUbrc3yZqN",
  "key6": "9Prp8NgyhJ4vdoPb9mNkEGUT2SkMTJCSqVrYhTngTc3iNJkuVthMUq7CnG6Fm1mNvDdPgoVSBGHi8JSD1Qzxxtv",
  "key7": "5hFNhi2e36EwvQ71hkURdGcxJQwxwPteX9ddRs759awMvqPAx6hfgngDiDs7VRrt4HBBm7Y2f9hU9htk4YRWcXdB",
  "key8": "3zpPFhAm8YNCw9NZrwiYicF1SwUgGcn9F1QSFhCWamyQ6ErxQFy1t3UQFSzTC8bx578DjoFF4jyDR3TtQnQb5Ab9",
  "key9": "4JHYnZunnm6NzxpT1CXokQWZtwxehmt7CDRERfJ9edh9eiKaBFMFaqE67DWhGiVQugFaLNEBBwMPbAHNBBE5JR8L",
  "key10": "3XjGqZpQBS9s6jNxci2UXSPF2rNbeniVHYhDN5ZVzMfeFHpFU5nGRK2rP7FPgPjmi6Lz7c44EQkQsRBh7u2YhVM",
  "key11": "5kDiVSzA8aFeCFFoXbkSyQEoL6QPcDpq1zXcNuXdfpv5KMUTNv6fEYBrEknF8N3Q33zoyzdYfK7RvkdzG763xaxb",
  "key12": "2mGZE3oKx99HbG9ir5GexoYdB997DgdKLFqdMnyLXRhEMJUhhfnFvn3Xr2zynxn6FFhif7xaNF4ne7Xcvg9oyU4H",
  "key13": "3XicafeewUjJmV1bmfxjxsQXHLsL7FUf6PbkfDfqpQRDUaYNkjG5QUrfNbs2axndzA811EforswJWnFVUNdkHD7n",
  "key14": "ApimbnWevbUcXsZjqXTbHnAmDsnpzcAQbCFyFuBZcmhdm5J5ord5Rfoq2sRXS17uJ7tkTuxFvt5qZ9TKbPggubX",
  "key15": "rNiRbY1bjJj6YySGSKzFzxwNfH7K8ufyEtTrrhCQA5KRLBTkq7hLFgZtPdcy7tDNLUJTG1DxknLiQqr7wAuiSa8",
  "key16": "UyYDGzpRVch9gwhGVqpLcnyKRSrgitk7LgCq7WYhyZHbdiEffLATXqK2e7Bpx7zmZMhceibP56ubVsdE7Vh4G5B",
  "key17": "5d6FnSFRyq69oVXXpEsQeA8eAxwfwCi4zkpSudmN6mkZHGGZoM5M6nMmhomJxvbRFJavDyp3752v6SFmsMB8DmxE",
  "key18": "6S5dopvwZmXZT4ZX4LNbDg4NcsUk5eCqgxkvXdj3UrPTahAC1AqfqDaEHExCNE9EpLdLAUXopZ3FV17zwm4KNaG",
  "key19": "2CyLYhJcFGV3tfdgXBsBZDHwvj3pMnU3iwJTSTz3tJBCdmCe4YFtogg4a8bL66dvQbFVwAe8gvzvAzoTxjhFUqac",
  "key20": "VZWXbJJjaMq8hiYyVrjoc1Q5vCPqhwJdGJN1YVjcSRTU5UmiyZaeen8E5DqfXGZbKWNAfpjmqh5ePP786gbniM9",
  "key21": "4U8g5763kFJZeF3b7EZGSk4D8s3SFZPSStXMsWNJfp6XqNrji8sEXJKJUNDKJBZ5T2EJS53aDWxGULcrPGdg8xDk",
  "key22": "33HWmY917gzVVJKkrPdFzjvXoQCy2st5rQsf17igm9hV1s6S9uuqrawAGqpbp6Y4TTcx2jjr8bx6ZyZJXBHEF7Lr",
  "key23": "5rxzhvhdp1esKcL277xfjHC1QefvfC5ph5AVi3V3eM17roSFHhBcpj2VeoXzTttd676bgpD8ymp2nKGkLBuDsVNG",
  "key24": "3LqduAgrZAMq1ArdEXKpHEn5rZ7yvrpxznXpvQUnDzuP4YPCW9bttPGJHhQFJGZkYxxj1hRQqDv4SBznu2nDXNct",
  "key25": "512UHA4Jr4jpbxxTLkzGduUUbpFt3eAwtS1cYCGSU4rShpy263G8gkLZRcASgucYZFbp3EvwjYjMJ1CsuwumgtfD",
  "key26": "2F2DvUydbvxcb24Bsu7PnF7W3fjTFZKxBbQCnoMv66aSBPDohkLMZSpRZoxMYt6hhKBEprmkMYUxR6Xx9vx73jZ7",
  "key27": "5WFpBmUEfVu3JjmR9LMuuCA5sUKxB6HwyiUCUW9BCY7LtQFe8Anek2LMxyZM3ZwV67sNMvQ4sfobpEAKhL5JmZS7",
  "key28": "TE17HmhzdooDXS8AwvHwQcEnoytitjTEG8KpGGUWNZh18ECBXe4BvoFJbVV18haJNd5gmGHaaZtLHyR9EMSgA4C",
  "key29": "2hB4T98yPGgCoHaxoCVTRnPnFaAM2BuQNmjfh7Um9QcZQWkvixD3P8p5sKTi5gm8Q6zEReHizZ7yC6i832tV5A7F",
  "key30": "5vhhgqBQzo9oSRJxE7KPfWpHzqoy7uPqCUSzis3CjXER4GtxyyEakt4KV2c4Mrv72gCSL69zMyxE2Gcf1sFuBXwN",
  "key31": "658BnSJiLPn7RmVuFZGDRZ4QFyfHw3gagVy76ZEbYHsBD8oZDgwEYutR3kWMWTYiRbnuYLNRC2gaz61vc8YRxZwV"
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
