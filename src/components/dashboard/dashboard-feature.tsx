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
    "2jUJ2bLi5NYGj4Jr4UJJAVQcVXkKqyft92eqbzQ3VG4BYALV5prdfcBUiSR8a5duRm7Sdde46TsbkYC785Em2Ug1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcx6eAsKcLBpZfPZir8ZgLEHQuRTfgqYrwttUihUNK9KcELUQWXtaAbpvKmhdrPGKA1JDhyPEiFB6nV3hNRx7TZ",
  "key1": "2eA9DCNLGorpU5AEu4MCMwhiioNsC3NtvPUqrc2Q14fLwn7piJJMLLtaeMqRYogXVmfEsDJwQfqJKFfaoGoCtPHX",
  "key2": "2tkYYg1TUhjxz7qfVVV4m8e9NgMmE2TaRVw34Y9VWzUTgHpJVpWxtYGivG3QceUx5Q1726Ak5DvwVXcYAzkUNUcy",
  "key3": "3MioDvFU5FNn9PnmYyzp8AhabfiAS2FsSWFMQp8nXLhXuLLWG82xfMYs9pEWyeB39GomoYR5aCUukH678BYbsBc5",
  "key4": "5VwJ2bMyAVQWHuChesxzpaRxX8xQq3LsdFVSZkCVyN8LYu7NJd6GwhjNjsMEqcepnUN5x4udC5NcNNgDwZCvNimb",
  "key5": "573aE9EcgDAPb6yHX53GApfvbTuPykGsPTg3AeLEnDbhvJbjYSZeL5fi1jTLYLxcMvQAQntDmh6qVNYd4vTncmXw",
  "key6": "2UDTZGat4VnQrmUYmbS9pHFu7UnDvrgW8ECpdAWnz5z1APFDJJLWZYPPb1eFvGD3d8DzeMjtCnPjishTk7svmpPj",
  "key7": "3w8r4MYk2tH3pJ7Ebva3sfoi8w4cHoe83axMSeprsTjdjSm4bGMGcE9zoqkpy4uvjFBaMEGh93hdeQdVLFWC5Krt",
  "key8": "3peqKQrskmMkykbi39TGJLqXXdWvTfExRV79wFLAjuBcyfFZAf55ULxh1ckkWBUNoXz7xrJ522FXDgZJzfr66vEn",
  "key9": "5GRA6HxJsUvGkErFxVPJHyDyZG4JHNA8qekKQ1sW7z7Z88HTnAbMP2J3CwHpLBqyxLjhR5xnGVMcTLFAJ9HGrRqT",
  "key10": "4obFTJ7XpXfBuagn7Bxsj4NUAK6u2xh9aACGnRdDR1gyB7VrzTUcPbG5h8vfyTSjztKtPqFsbyZUZ7yw2vzCUiXr",
  "key11": "5VXD9fdwbUJBWDK4ns5a9RdP6oRoJBSnSyuLtuo46VMmDoHzkBRsHsjAbHbeunFj6HJWjYysxJfcGx7SAUYFArK8",
  "key12": "53EsPYxw61y7Rfbr6FHx25rmAJNpDXUJvkp2gXaJioLuPriaN8bvsHbAXxoEMK2Xc3qrwasAGEKkLVbf3BZZe36Z",
  "key13": "zkh8Me69khwDGGBSJv8mVKy92AtjYVZ3ouZrXJ5qoQtJ3CNzTFiQq9kUCWZiAQ97MrndUrQc3xfnHRzqQnKU2ca",
  "key14": "31WenhpUJH31ry22M8FrNVfBgYEF4J3NG5Em9J6g4JE4QBjerYL6okyZ25xueP9qJ5McE2zCt1QASRZPCwBEBERF",
  "key15": "62FH2Hrddtgw3QAZDtYcTDMzyd63CpHffctMV7YzLUrv2KJC6L6YSm57baxahdPDnx3tJTuJvB1hcbSKa2MCQDmh",
  "key16": "5MMhFeHTrnFDgpEteotpjDgkYvMfsrkGPRVWQR84ZsFNm5nyBECWf9VsigmpbzbcGZdQypSc5SnDjJ413RHy7Wab",
  "key17": "XCBfTsZahLqfAJD8hZtDLNNySmu7p5RWrUHywiX6LUnmP134z696j3MaoTEJLgyh8fMPNJfAxDySc4uo7hts6qn",
  "key18": "3rPGT5LJw2QKKb4K6Zdirw9vQ2Gp6ibz7fpXWer8kBsyZC3goV2BgUVYReRbYwbpC9rCDY5bbys8zpaZ3SmXnDwR",
  "key19": "5Vop5sgLWFBNTL3BysLujWpeSccw9SQvmJFgjGHcGhoqr4dhB5VgbcT6NmnjcrYrpSo4u7qKuLbVtebAmL5UDhSj",
  "key20": "3ZGfkjoFrYCA6GF1XEzh8kUxPhNjF1KGQtsnC4hae3cTFfAVt5uF2gfSQS36iu66nK2NVQcW2pf68jy8qHEmBrMt",
  "key21": "47MPHAJCFxY7kHYhAeu6nfgJEQr1UBRSq5xsxPzNjn262SegGekHaXA6Qk5qZtVVyGCxfvPKGdiy6E48JcxBpC1S",
  "key22": "56aSat2ioEvhZr8uL2djPAk6VGLvxMcLX85jQPPFvjmf1odYCTU5poyNLvmaX8mzpWU9ZzeUVZqNp7HB3Z3fFQeM",
  "key23": "3MdKdC1BzBK29Uz6cmecZzCYQCFpFn4UDJcV27vgZGeHFeFX4P2RwQhkr3LjccZp9kDeFDB2KZxcHR5sLqcr6DRr",
  "key24": "5ovdsYpWLb4MVN6Kx9pNcSkC7T4MTT2CAWFQ7EUg5Ck5Q1uSAGmztgkMyoyHNmpNdiPBqriCHK5mTAtEdh551ULx",
  "key25": "z3KXmFu2zJBt2LsWZSHC5SqS5rdamsDm5yHpQFhvvbYUA7Ch6gg9mDcrHm79Ck8i8Pt8GdrR18ewAVosgRi7i8n",
  "key26": "22X4p8URXyPwoak9GZQbBZtW3QbXvaTtqMEjfAWrbjyjUGdJZ93WAfYK62FhvghxAPPivVuZuiwWgy4jagpZLvsQ",
  "key27": "38h3uhQzYtAsHxohpgKg7LoGKZLMx31juJnk7Nmyeawm6HGDM6JotFfH8hAZxx3qEbHSmr3gUEjyQgZNwtnkBFno",
  "key28": "4ht1K7J4JqKvxLtGRFGVHYgNq8WitFxVsv1ULWqBQEfZM3ws8iT3QdyyaDFrVGK86Uax4kXY18KFcL9rt5Yrc75B",
  "key29": "2UjQ3dyTatsgrChEnuCQGpfLJN73y3Azh4XPyXPsfMsdxStc3YMKYzUDdioV9mtV8AiKvyzaffge62xhUw32Urg7",
  "key30": "hEHmxuXvxQat611JVCr8FbLJ59ttNxaZ3yvRhbsmaJivHr8zetJbodg8G5N8eUBtnp7kgtwumAZXbv7odV2RSGF"
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
