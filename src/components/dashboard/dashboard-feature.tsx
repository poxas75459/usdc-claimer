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
    "5PFnJDwHqLk5WWcnLegkBM2SKURng9GrqjDspvTq7MZGPVHgRCmrNE3rQTqDhgaqcnExqFATbgJ5dNhEc7poSU11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fY2kkj4Qv8amqt6JMfdVEE5bmR5BZTLJmkPrWWV1d8SNkpE6ERusx8UR6Wc7vSMRBdmEiUxmvxQTrM6WNyMbMoL",
  "key1": "5YSezPgdD2QrfXm2ebkvSCZdHqZ8NWzKwMwiRcLvXnVezjxmVqViznYwYXftJYJmr3Jm7yqrR2FWvCmiuTKZq1dy",
  "key2": "5VeuNEVwg48u1kMj3cgHWFifsspgEjUJGLENmrPtWvy9SH6PqVxrVEmbAaP2GRVjs7LgqP9ECNUXT2dVtEmswDuc",
  "key3": "4BpyUVGSitJXQpwm3agrJhfecDfgknhKzin9VFs9eQzYoos5CFo9dELe8EWNTBZfYsNKFPVe74aefMVRfaYm5Tq3",
  "key4": "59huZQpSbndThyQv4xh4o1LAJ4hagS7NbQUHBdLaDTAvrAjAhNpEVnqqTeHFP8r28S5FroJ8m9oAWnF4Qhyx1ZLF",
  "key5": "4WxbtrP8Gi6QC4cKz42uARnaHyvh2wQVXPNKb8rkZKuAjjvCfVyuT5tdb84yj79yW7GWuETWGtdnM54pP3s6cN6d",
  "key6": "5YWFnAkJMEcskuD5p9aD3iA4LeG8U8XVt5kVvtiWuQw2EyadZk66XK4j3RnoJTFTfEwe6JjmVxr6PjWQM6JKhAbb",
  "key7": "ectNPrE8TMUcrMHeRDs2oLrG4UMEPPT8RiTUYgbrcDxe6BcNUjb1K3kEzVcsQdyrptDFZEce8p7u5F8KqwqrXqJ",
  "key8": "45KatjvQaVaVRH6jpcH4VvknkaLD5eutqb1ZYQUf1kVogHjAtqGTePH9XTfF6zDUckkR7DyTkwQxwKDftzV9hE65",
  "key9": "4Rkt7thHXkNPBpAhCs9rdcj27RXmKcmApbXrfAHKponaGBQAUsyG3CL8mnYhk99bZgukmFrKNZPoRUzh7UJcj3oo",
  "key10": "8yA4X8om3m63JTpv1g92c336SnZ9mHfcZ4587QxRQod44LqbK65tMqqcPHJakhMAwrqB4tYz5TNQAbyH7YMcRg1",
  "key11": "2eWucLaBRPTDkDut8brigyQwtysu47eHijhj8hW5djPfmiXubWdVoEnE2dQ2XAAQTz1soe2qoZFcsBzrCW6fpecp",
  "key12": "63tDcH95CejpFtkt6nztZGzVCuh6arzg69nNARdXHDxQyfd7F6UToNMVy6xELADQJuUAovPQtFL7cd9ddaFouiMT",
  "key13": "2dDMhV1Z8NAt6LZzis5wXpBDSxe1k1UWousJgyaTGsuiEYZRmxY1s33csqDSUCj3PCQG64qa1avigfCmerot44gS",
  "key14": "4Y4NkezifZPQMNjZhyp5bUj8ixAoPScXzUXvVLTFBJBsbse2GMmzTDEPPhCWQcMYuXPbU9EK92SGBR2VQ8yYrQ8D",
  "key15": "3gRauRMNTxdwNQd1at4n67T4tNoweS9nsqzpTnJa6vRmjRVSJWhrbbDDCaRdcDvNjdUUJ9WEXx1KH8JQKE4AP8mt",
  "key16": "4YEfB1xFWu7GNw9JvCrXW1dKzM48YotfAxjgWCpfz7qBaPf9uhAycxqjcyHSVo9aEKsZrGoKwJUVWmmGrMdJgh1d",
  "key17": "32Uw1VbPVqfBYAFpRHzMC3k9J71EU11ai4UodBPCdfgk17KqR7RdGbrXkURE3LQbNPd5uuNzyd7Zh77tBjrJvP5F",
  "key18": "39Z5vwro9HxkuJH7hUnzKoSsm9nxghQse8QLM98un3M2KDfHo5kd9zRoHEC3HVGix6AHiZ74VNxFgRLZJucdUuFq",
  "key19": "TsDETCbmy1GfZtwFYLgw3V2b1DQUCy6Fdcp2h2k3MLMFFToFKSethYeco13uGeffG6StKkCCYLkvYV6nEq9BzYS",
  "key20": "21RAEaLi94MRhufav28a4BEWggVAd9bGgheuKseTZyQKzMGXDg2JYJabndq1dBm7SPaSBSQvTxQ7iy6m9Qq8n1XF",
  "key21": "H9CNfwkpUPvN48umxL2vyYuXgKBx5qbumTD7uP1PeSsdbByMEzjpeeqw8pFHXx5NCCr4WSTQfGQ7pc8R5taD8JM",
  "key22": "4cBdQee4jwCL3cuJqz3WKuEogczQ1ncoAkGUdrCRnndnJiq6Bx497KwPCmyXxyyAVBaxQkkqCi7qeGSUzXv7Nmfo",
  "key23": "2tffn8KovLXKQ841MuzqiiJb6k4xvboQj38h63rnXKk3T1rKw9UJmXjohYixpNyamzEBPSLar18BqQyFouY9sae9",
  "key24": "aVziZYSSknpiqdtwPzDbMyprFyKmzkrzdXaXrosbHF3BYmdNxH1sv2ccGH3gFr7UjK7WJAoAERxgm6oB4iT4GSj",
  "key25": "2NSZeakG378MvemBCmStZDu9aGWQi9s9G3Yz9H8fjkNRVexZYs3kRewDXXkRXTYNtwRepLugsRyYswYfibpVueZN",
  "key26": "3oP4kU44hoqbWBye51ESMhesepZpSHgyB2u6Tvkm51v9qoVXLoo9o2WYVVDgVr4zetYWoqYRcQ3pkoFJnEERGr2n",
  "key27": "hxyKntA7a2CP6t8S9XwvF9JGF7aL5Peio8opyYU1u5s6noQCC8aa9Cg9W51YdY658DKFHEbN5pz8zewFAMS22Ux"
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
