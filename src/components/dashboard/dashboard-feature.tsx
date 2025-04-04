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
    "59qeu4gReX189FjdVu4cExehiVVCGmEkjRTPSaWNA7y85LGiHphgRM7bywh77wp4FjGcgA25k7V6ueSChuBTSMG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1i31tKw5GaCfKdJdgmswFC5G1ca2ZStXaTdLkEBakvQgh1XPejrFwEqXrsrBTSTqQuFfHgPV9iUpi4eUfof3wS",
  "key1": "5eBLofogBG8kNTAoFd7bke7R4m1RRxR3BwjPXZEQ7ouu6KLRp11ga4sJw3qbjzvVCgp7HVUsAjWEFEhk588VrWGu",
  "key2": "4tZ2dTVw38JWoawXwXsDhKtgWyXjnn4fSqrkAAvALNNE8py2UkPaPh4LN8K7GabKYegMuCd9nCfy5TCTEKtqNk9W",
  "key3": "3u1gYFaMep8JSqW5yEvqMvtYMwygp1fQWtuaZVErgmNhPTNzpUe5YazAECm9m1jtKEGsJbebL2b7vgAjmTqeKAXG",
  "key4": "2XhUru15GHnHtLzRKCR4DhoBY61hmrBh2BESs7ce7aGdEwB3KBhQH7A81oWSGg4PPYhyVV5GjoXgu1mK426unR1F",
  "key5": "3r8uDsEYJ1mXJBAZUnUsZ5jo3n61PUib9xMLS6wVvALBD1TJhmusqrttbha79KPLTqR1ZNjhfaoFnTrVPt4yg8ga",
  "key6": "3R7zbYmMxuT3s25ZVaEkKmfERucSQy6Y3aRafGLBRUVQfwFbXUyMXXkFZEMFWERuZwt39ydtELcshhZauT749jW6",
  "key7": "2yAmbHcJhR3GAgfZn1vRFRzSXUxSshaZBiiQKLWbCAfkfXVQ5FzssS76CsbpdVY6DAeVESeqHQ9HwVRE8Lrr7FGw",
  "key8": "3vCQiKJh5hCAweChrwv5gE4N4VatVDGc4ibFSu1mLEQVaTXTtU8yFyANR9aiQr76bNwdEUtn9LgRXeVrebabWrur",
  "key9": "5urmXTZvhdUEuGNEnD5f3VFmq4buDKh6V63A8M1Cgfhjq79HH7shUiFPSRX8QYrPiXZPRWsLe38fpkX5qcY3nJkC",
  "key10": "PHFAhZMe7f3fRcrtWfFRscDxZrESjdsmEoviff5D51fdrWmYxeSmzcn6jp5xnPLDw7h7FoWjRF7PJRrvHME5vxb",
  "key11": "56kTsFaQ2CMnq3hXGAu5D2msvS8fqFaHS4xxxvHZBJZfaBT9GRz4C4WR3KpsRRFACss2Ebkk1XvQHAAd7b37Tp6A",
  "key12": "49FFV96QgmRc9sF41r4AUAn3Xv287FYiLNsi7xzewakHSnPoTsDnUnkRmPAFaksKAaNxk1usdH5Q41kDrKCMd3a8",
  "key13": "5qstoN8RSsiVWtCV6M7pkfC6Gi4diEey5hCks54qrez3sh1Rer8feUeKKxaXp1HfB3eQeoAbDBUyFqDuscHnQ9ZK",
  "key14": "25t2qWQQVQVHN93NZrhEhhQneWaq1HirvfzAr8TQPAGha3LeH1hKXiPqm3BMRtQ2uNbLnYbodKmMaGXTsz2GKkt4",
  "key15": "5AnWdHD2iKqh2Xyk39QKoPRbUotmrRjev2x3tVt17Z3CgpjHojp7jwL2Gvx7kyiLqpGxSTZyUAkBDWbtFhKs6j4J",
  "key16": "4KC1AS5n3SXZzwDFxef31pG9URPBTvX62yNVKzsHydy83V2iX2yoEer9o9VrC8n4A79Gr7CQ4Kd6yuoysdag6o6w",
  "key17": "5RmUixVvbwfPtpBoYMoMekjhnHZrZPhaiiQgqBppvQpFR1VYjEA3pvoq8TjraynzXcMHLB3VJ2qmrcSXyXJjXb5P",
  "key18": "pzQWfZ9CunBLmdrz8Gp8Nsv5vLZz6eFhwLjCbTCHPXSDoKvFQnBqXAytE2aLPKXLigtVi7nLUTbyzyiHaW5DNw2",
  "key19": "2HXhboQJ9SAzvSKqU6zjy34eWgPXYrPfrYaU83A9huwWzb8kiTbjxgLwHpb1Ma6dfpbDCRWnyAeW7GJHvGS6WVV8",
  "key20": "34v32TS5gsf7YqNEt3c4KstcwW7qKwA7WZneirhaNJpm8kkKVsyw1B9WNF5caEQ8e2QX8okFwdUBqQc5L1dx9ifY",
  "key21": "5x6YVkytUYgEJ9ew6UBroKDfmKWVbnRmsYmH4f3NJAKRLtDySFnChiWJpaMQf3CcKhtGKUkzEyH9qnUt86ePjRrh",
  "key22": "3HdGTV9wPTM9Po7Cc2HVcrJRq7n16kFQm3FnFrakmpd43Ztt5P3gGq5ANBpMjyfGYbYnYMqG6nHg7PmyPjkqzM7p",
  "key23": "4x6H5gWdNajJHW9L8d6fWttGyH2QNsBUbAf2bNYQ4tYbCRTTZN6rSDcYuHxRw12YCriqpKTJzo6KYMXmpzhcMMg9",
  "key24": "48XHm5YeunuhL66SXYzoLedpVYh1rJc15yCxzELakBKknSBg3xXLA2cXwSAMey8ntzdyoyVfMs3NL9LfR6rq9FvE",
  "key25": "2aq3pCFawGRRweRuTmLoHg9bnPKVGRXxcR7nvkoK7QBnQuUeVydzpnQnsdXneA23rwbtHtkH1t9Jhi91C4feUGuu",
  "key26": "dksRrxkkN8MYpodrJFKPSHzDke99RQ5WFK4jNVsB7AqH7ZxG9vfLEQGPTZp8LZ5EoJRs4HFxRboVFmSnhkdEMGY",
  "key27": "34EKS74UuaHFSkY5mrEp6G8eJZnSUfP83nAb9CGbHXTXmhxkEnWv6cUEjSc3GDct7XrRTex6SVBP3WiWHj2RrSTv"
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
