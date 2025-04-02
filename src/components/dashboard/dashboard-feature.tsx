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
    "5PkC2Z9RhzNs9cZ7UQZZaR97uJJuAJkjDDjZKgRR1MciZ32ZAS5mDDGHYr7KC8oSpixNnQM1NYrqXb5R8LR5W6FM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQoxDFLbiZ5YEWhesiFRjAV9t1bovyKbz7b3FxkDVzDihCrNRvYhKjwbDWK8jEMBxBnzCUw5A3HTVRHYuBVAg2n",
  "key1": "Gja45KQpZ1fq8VzXzWEt5VM6HpZHt3u8ntWnzpAHPyR5v7doNjUMCnkj8dDdkKJYVZZ6X5iZWV9AN5YQjfNExCV",
  "key2": "5dRz23JE1rPK7FeTxCJK5ffSAf7uAc1AhamomxpRAN1HuL9cvKdMHGbfqgtYcpSugFkJvGPejbwicjLSbSZu4N7m",
  "key3": "2UNipwi1hjc6Nn5ZixiTs7joinMGD7yTxTjUgVyLtuFDbYVQTsjivSJb1DSvnhVHsRvMaLgsHqz3aJGeGDm97gtA",
  "key4": "3U9KbaLMQvJTgdeRRP5fhKnWqQ8YCpR3ZwuGCV5VJF3HyU5vNBd3Trmii3v4PRfkECcD4k2Hmo8nhMTjWtV1mZ8F",
  "key5": "4ND4DTAjuPSW4JddSFq89Snq4w5oM4pGwjJ8XajcZ2fPX42aj7YxDCgZ581Mox66Z53BXj7r4MsUV3nygK7gckwW",
  "key6": "3wS7jM3jNDEdkfnaEKANRMMDJe8o5QCZ6eTevHsvWnnmuPj95dPzGGzDARh8KSNg5iCCQtZXSqRED1Q2vFbziqfR",
  "key7": "2RG4SSHdjQXGTUph3KAYbrWqbMdtVZ3xL7DfgyzaPYKwZdH2wxJn3c9f6MSBHJufP9VRA7WE1PiZXeDKQyxQV4bk",
  "key8": "3wDect5QZdXuD4EfCtnRnpshmeo8JEsbj62zCTBu6jiqUurqieCzA1ioSdfotbP86iuzv6Vj3w94m5TrunMugZrm",
  "key9": "5ju3qTJFfbGuM2KYJ3AwseyThGna81MTgxVt8WyXmhhRJTM11n4bSMcQE32wNK8B4HiMNsbFEw36GUqVfpZkNkmu",
  "key10": "4XzvCanPweePRm3Y75TEowyc6pJ4CTVY3fn4HRi1zyQqgKQjdSF4bKG5nw9RXbc1wVeRL8cvzZwTTdJysYKkW2k6",
  "key11": "BbNaAizkMVH8HWtUizAqvGNrnWiKknMkqAsrEKbw9HU9MEna7s1qnuWyXH8rmmTLo3d8Vp38uehcNm9ahfExkLX",
  "key12": "2BjZLGjSgY7H7jVJSXq5VBeDMrwLUEpWostrj9JvAKiCCN6wBfBoGE8B7vBDfwhzVh4TZcJ12KVUcUt8Tj37sLCV",
  "key13": "4hbz3qpJgyQwxVDaiHNm4aR3LHcnxSGzAW3bFVQ3Lc1F8tWRXQmsrH2XqmZsZSXJGB1EoYazUov1B88YCDaHpX2A",
  "key14": "4n5JAdc279NpW2rxok8CZBjF1HPbgGRj39qewMUbKZheuD6fhCvWmJTKLpEg4jnRvZwNyL7qtXESGXScEpCKTSdz",
  "key15": "3QfqBeufQCgj11fxqD6n8cKv55B5rgVgnPpRm644egrsnu7mvxuN9GSA2GewbXAjfn4fV8zavkm7T7EE5Nw2QnyE",
  "key16": "3DzuRigoji7kEtWVrPJBUQiHvHWBph979BoX63vvMa33Akx8Vozv6FuLfwwVC7pJZdLYkGNDKN4hC2Djp9xCZRTx",
  "key17": "btCxLx2gXj7Ykg44m4hxVV4fzNFTRrVCsFwrRwcqdjvp9UvvLEJY7PGAiQoJJ5Bxk2B8i3DUA4sCg63EQU1oQf7",
  "key18": "2zpg6zdotWJxMucXBufxurG1MQEKuBNyNkJo9FZLB8suC6K1weeBtbxyC14sPbwo7ozrv9ibgYhNKP4AqYujHSBB",
  "key19": "4ymebpkJP2G9Kcd5W6trLrYQ27PQY2ARxz2YN4xdRXXgrNfHc3aobHHvC3pDLCVgvmyjiVJFZG71ATTc16PuoHvU",
  "key20": "2CJjxfyJ9eSUujuFBdXc4xAouuUTBCRYrU8ZfdtU8KT4tUCf9sXopaZNwPeSyNfBCEyGGT2ZwpyfsjXFvvYUaE4i",
  "key21": "2Eni7CbksgRVten1FocAKCaRRTR9ysi8bunnfN296U5edUWM4yDKixCiBjoe8utMFGMUfF2DXb8a1pifCLjq5znR",
  "key22": "5usuKB6dfbEeEv1GCudJ3Aipbvb8qxZWoGdqC8gXyEFNwS5JictSfoaV3afmHfLQs3yNLdRpmvjtqnQ3jS4w62gf",
  "key23": "29bJX52t8V2LnguGNheJsSPjCwCaJLosUvaM9PaBGk5JZieFAg2agJ1QtnLhnNt7YmMdAokpiuQc6V7iL883RMTt",
  "key24": "UiHaqcsrn6H4VcDPxCenv3DSncqbofpyKHVpDz8NeMs3HFXjq6jjXgTaRKX4ijErC7oncFWnzGLsBMb44Bm2maM",
  "key25": "61fU2GWQNisYR6TvERoM643r6uqsG8DMKWYzcEKyTC8t1mswpMj1gDdKwVY9KjMKFUEDUXNQoNAqkzgnf3AGa1ra",
  "key26": "2cTziG5umo7Lg1hMKR5YRnw4fgf9VJZvM1rU1sHE7YPnCLgu4sLtjyx4r6hWAxxD8cQSnyCspQh26VkZuF4HywPF"
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
