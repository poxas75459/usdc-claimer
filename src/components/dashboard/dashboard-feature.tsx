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
    "4iqWark2fsLYGt8cNVJx3ZVudaJQw8N6VgdjB19CmS61EbLhgRzkXTrxgUHEsUmJj5DLeQZ1auREjQ64n8HosoUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5Nq6VRxvCVtUWdjjpWgDBfMzgvz3NZGPrGnbHHT7HYikLpBwNHnNkrGjhuWeQzyAUst7BKWWhpGbghgEBZhRKR",
  "key1": "A1fSVf2K8PuWv5Y7JJn6Q7VecXibyE8EzN1F8krHgxu3LLgFRaqdzu9MX79kT439bENjV77wGgGgJYowKENhWTr",
  "key2": "49PHE12FwbbcPTv4gccQxj4uvcDLogx3byCKzV1iozxz9ZzmfVYnrqaqzKhzDRPBsjr8R9VYRgEP32TkBaKym2uC",
  "key3": "9pBAUoP4zFD3HYA5q8HYnRZRBjnAZqHUm53othHyVsShdEKaSJ1yTxZaUNuGEX1FhQKVPQHWAighTXzgJogSfdu",
  "key4": "gdtRy5xq8MqDrZ5Snr8aShPmPz3Q95WbDTvKZHNtjbyhGpQCwUb8hhsobDj5E7tsjxq4sVUiCUTWtbiK7nQV9DA",
  "key5": "5pyQtNHyUeenpgbS6WKM7PLsw1rLrNnf6sMZfMg1WNjfTTPzcAviQJ9aEnTr65CnactPYy1Q8Uuk7X41EY3PRejt",
  "key6": "3DYTzkjAegwMPR1YmjgXG1dWLDPF6KQ2yokAzuR7LCsDpityLUcGYHnYHc9vKNLKUKVYwZ4uuJNKLJDpcuVCBvhV",
  "key7": "43asuzcCExMZKoC4y7pTefzegqiK3DHQUB2gZrRxekAmFbuBMWWEEnZLuAoUBSeZXTM4DQFhD6QzCpy894UkmKhh",
  "key8": "yndWBXpLvi1UBNSWLsTrPRgzUNkcbrmMfSe2uLehqFoHzPCGLS3WG939SGDCcta1fxRFcg7PCJi3FeM5Gfky9fM",
  "key9": "9wfekb5KD6VNezd1URS5asMD2XAqUdweG2HFpSBWAR2hpJ3gAUKYx3fnhrRpsGjVWn2a2gYr9ssfaf6eAVXcNjA",
  "key10": "eY8zhvz6QDPZe9ptbmM5hVfRWg5EMGSADYP3RXLcML2NPLono2MHEnVtoZbt4cJHaUNi2U9Z7C2iQ2X8C5C8KCP",
  "key11": "3keXqfAovoqBZTxsmmqZ6xJ52Etvp68RNcEShMF4yZRHzAgiZnboEhdLS7bgDmhGcvcpY32xbSa6u9xAKnFs7jgR",
  "key12": "39Udd58gc9tFDWyPLyo5LzPGzoyNjG6Hr8EQN7CvjR9oFx16riihEL9CToRDaceKKAbTnQxhDHpQgfTNRAt74aGn",
  "key13": "2B7AvWBFzw3tLkmJdGv23FApei8Lhx6SUUcD4cgP2uwNocgHEg9Bx5XoUvbUexXTYkosM8bXihBS6yW3pvzym7Qi",
  "key14": "49cnxLaDpKUAe7M5t9SMZAZo1KANFaYhHZYFdtgtFHHLZrWvYiSP6hydXGheVPhYdfVoVzfXwBdL2ZszShPAy76t",
  "key15": "eZmchpcM9NDRApEZLTVuZ39WsjWS6LpqFruwcbq9hytoi55LQhLmExzTBp2hqtJ2F24j5mThdeXFijN9DeDgPxs",
  "key16": "5HYF1kGYYBzjDrugpjRAcgUD63t9JRuuDNTN3nxgdCtZ4GHSNvBT56PF9dc4Q4CMoFrG5Fwb8PsKSUcocmwYFZ43",
  "key17": "59RBRZeBRZCvLkaqxUy7LU77KoZ6xQrhcudB5NP4PzL9jRUAcH58A5ZbimdozwrNQ4mpUR59pLcACHkiWdfY1G39",
  "key18": "3AHjQWoEJCBsVn33NDWH8HjB9YxgFYigMeCc9nzo2iEqFd1ukAexzwVwGc9Mm1kbcYJDMa82B1Ub9NYCyrPHduKR",
  "key19": "2sTUfZdbhip2ZgqwLJt2n6cnYdvPvBMrn2L1eXgJtYu3ipDpP5cPNXuzGahXrkwumaU7AinYDUkdWW8261sD1Ydj",
  "key20": "3rkTWaPYm6ZALncyH45mMXxCDkDW9kYu2gq9fBhcjNvK6smtRXnJnsd4FptMYKdZo1b8rqtDM21cKUvrk6rPUm6R",
  "key21": "5GaLweR91Z9LimiZhKw1Ah1ASSRkDgnXukNLAAdSmFhxgS4cAhn8AkSCBLyF9YUkS41yBU2H14DHUSkRb1FQYQoL",
  "key22": "61vBUW9vsZGymaRQRuVnbBQK6TySoZExVRXNwnxkKtJePrHHZdzTnMQzNJFtVK1bc74h7sq4cVcvKn9yxwgtHgcE",
  "key23": "2RY1RiFApZYCKo8PvC8gTQoVpBi7LNvAQLrRbaHuLpgnXNDvWyZsPWb8yNRegJmEALZgkD7crbbioAVb9jbwMjMk",
  "key24": "5KNo4nEMJ4f7CFiA1nJn2rPBixwbBEBfhdoDFw4QLLz3LWrzpbtPXZyGv7r3HgXUgNp37aK26X4sttprAWTMkRxw",
  "key25": "3CDwGtatubo5BCTXNVB1rWe9Ujxw6KeLk2UidcyfuJHpkCXHddQNNdQGYPXz6SkUvHtMM4294WbhhFaTYg3fbDw3",
  "key26": "XDwFJooqeSEJgQg9Ddsygqt6tDHf8jYAaTK356oiyLPG6oiAFB9M6kyLEnX7aNGnES3yzyETTcg2Hc6mMkSV62E",
  "key27": "4QekXvewENy3DDHjdKktRUN7e8VGwAfxQhz9cfJrN7A4sr2pABUSEL7AhstVe5YWkwL8jjdpn2wEq8dv1czjnUaA"
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
