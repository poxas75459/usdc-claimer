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
    "2uAsEJB8yEhKtYe1E1jvdGCxkwpKT3R7uxtyWYmqWfUtnJSzQSfrc42kqQgXEoMh6h4Mjy9jYxYRxtXtH6NkoQiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DSYpE2FCGRohwYDPnFVBtTZrU1JwgyL9bAfD4J2dS8fvHtNnLJcckDXERxfYqudCRj3mtZxFMMQ1hDUDSna6wu",
  "key1": "4xFTDv5xyWL4zKWVSTXghSp4vpvQ9ZP7MGxVSei9AJnwby2D1tHQQyQJe7Mfzn4e2fDp8nYpvUyDWoeUWWo7aQCe",
  "key2": "4k3FX2YyJyeSbSfjwmwXb6cxwoWZQfkXcTQk8LZiMz9r4G3KpXr1vyuBuZ8or4aWqntarVfgizGvooWLq6fuXsHf",
  "key3": "3Q22rbYrD3FdyJykMn4L2z73Tf6kRnNUKQkDnX7BxykywjV1CCziJ5NCe8kHx9ynnMm9uSQre8YB8m1avWbcaQa2",
  "key4": "5VQR2xJ8hBYsLfrExPFsJi5PwzUjHwppVWDjS4K4a9rn5XP8K3LhHJw7Ewt8RQHiv97uGLBtNyf2UuQduk7rGrLU",
  "key5": "53mNCg665xA88x4GY39EoR5ba1qevYP4iJx8BpwP2EqzTfHJfGkwn2URgzUmiyvtok7EkwW9qT4LTJeVto6yK1vS",
  "key6": "55oTELf72NE3pQP81EeBkKDKQ4WYM1WNB4Xep99DeWFMmjLYqGV9nU1ACcyKkcyqJF5PGKDQ6aT5SancdiFTGvrs",
  "key7": "3eethGh73Ln1sVnkjGch66S9Qu5D7BtDWriAkL51JrKg1KQo1CZcRPGyUE6ayGm2E7CknsczM7iN35JYihVdxfgU",
  "key8": "4kZK1oqPHXBz4p9A14KGipxUA9aSfTMSB2v2wSvk7Xdy66HrQqGXUZParZi14b4nsaTb78Hughp1nPugvWgiYwq9",
  "key9": "5FVaqBMoCMpYNoMBZ11azX7vsxiD6u7ZoYezgck6K42UQiT6LLYGWP8iCPANP4KCuzZ7p8AeCdncac1FK18BgifF",
  "key10": "4gkQDvvw2ywmfcPufwa44VZrf7VnErkaBG1Bo6aVhjQbShyNgkPuf73mtatT76wndtuTCXSp5g1irg6Srwkz9FZn",
  "key11": "n7zWwRHqPxpC91tuUdFAgRa9pS34Ex5naBwbCurumoRzDZihzJFw3ftEfeghff8it1rezTTTMQZo6LE9YuVUeNL",
  "key12": "2RjqVp4Kq3Mjod3XLBa8MvDyLri6SgFCrj28s81DDNi5Edu5Qo8zBPCy4MTBiyzKvtdFkjHTLC5SoFgGLkVtdUqz",
  "key13": "2vinripFqFmwb1N8mGqv9qKUhYF48ixMyDsUH54aa658U2dpJY58T32ZHkpdPcCXdshFEkCNiTHw3JHHuqFmJP59",
  "key14": "4vJitAxfznFwz2ZBG1EkgiYUf5qfbrHFP8rzSszq29wKhZvT9YYMqRWgqhimyoNSeuSAERnbjRYormT3JxHNe6iV",
  "key15": "Jt7zDqDZocgrgihA3oYXRcEWiHoM68o4gj9ng7GqPL88nwTEvGKMPxpHCpC12XcGRTgSfNDVnF8VQwo7J3hpQjn",
  "key16": "4apHRxWMhgTyk1b5eN8u4PozqNdTWaoj3DZFXPC6jeg3HsouLzBw7u8j7SvS4uz5yLkQ8ds8tAdx23uu5fWjxS5u",
  "key17": "2KbHRvSMxeZbomgKLYNyhxmLegPEwQyak3Vi5FjyShURdgjkMeBiEVnUARuMq8ctc5S6f3fu68PHEtEjGajwSXnr",
  "key18": "4jQvWKRFa6fBMcVLpdohekB86zqYY1y3jFeWFaxJybUtmyc7AeB2jb8XzoQCh4c74UcfgFEv8NrxorhHVLy6TNqH",
  "key19": "5CGa14JPrwsG4ZLxRBMgTc54a3BxaG7hs9yD6kzdzBRMuGPVa4N4pbP9XiTXEvgusA1xwcDPEWyr6xtW347hCJGv",
  "key20": "pQFpbZUSS86gygVvzrL1FsF2K3NJVtGZGPfhp9bhG2UTCtCCFbgquC3gbxNqSidNdSbLGWSwFKFcYnAZn7SU1Ge",
  "key21": "2QKSxmL6RhtAsMK7aDpsHxNdujGX5BJZp4G7hwoppi8qEEDZqNbJ1AbRYBc9kUcniy52TjkoKvTAEq2toTExH1Mi",
  "key22": "2c6fzhZZ1jEqNp1uPTrDSyPqpKA67zV1ksWbBjaJUnF7T3V2SxTUSgKe6trH3RR8QbfsyW9Evy7nYVkraKLsfmDg",
  "key23": "65eHEUowiebRw1LEn2QR3W5pSoxMGhEzpBeChQvpf1gHgbt9ZLzQrzUnBfGcweB8VoZidmTjMDnLoBSUbCGkmn6H",
  "key24": "1iS2E1hnLaKNsWQAw7oGJQRf2aJrwwMaD9nDGENnL6g52UUmMuQtcxeocGktvVp3Hh2zmDrMaQLNMYXRJSubyAJ"
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
