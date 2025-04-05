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
    "3nCdpb497zBquDJy8hMpzmw4Z3P8tTeqcJnnx8cwFS9S8aYUmnxPyEkBtS13csWVeqNZE6zYA4CWczp2896VaujH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKx62a53cz1CNQzkwiSYV6AMUe4meuv8JcMzwWorTBu4A25QJUuC9E4ixx963MvSYZ9H7NGXtUjgNtDQmNncsWL",
  "key1": "4Jb2wxttoF5rGyoHCkSYKmLYy2fTwSggGH8UF5X6YsUpHLRSfvrLwnMc8vmUZa9dxpFUTWnKE6nFEmXVNCcLWGST",
  "key2": "3LqWTz43YdH7KStKYNSGmgjgCwYwiUunS49uAyCt5KrcyrR3C7E1ZzrKfprpRYHRB6FNER7s4nBog5doRTgLgakz",
  "key3": "62akoQuUKn9JzLD5yPCWUcD5t3nLarcK6373oN3wrmQPoAUHrdHgEjHvSTH3YaN6CRFSnRqvQ5bcL5vZ1GK5tJKC",
  "key4": "WFbd4rQguZPsrJpeSPUnvRVhYjHDQxby5iikQV5kmhcvnM8uyEYFwDTRRNzfuXNiQM84iwWPV4xmuRCXRQDnQZb",
  "key5": "4kFvoKjezpHjoVZYzT47KaDs3XdxrvhfvHiKPmAbYiveUjQmwtdfXTsYstyX235XKoLfxwkH144Qn1g82DgSS7MK",
  "key6": "5oY22Cy8Ha6Nb1xjKuFWLRXFxGVKgkm9J8cit6wpyTKTUDjNUJ5LTXw4gmKwiH6YN85zdKa9q8MVseJXEh37uxbP",
  "key7": "49QVux7SzzgZTGZCV58BC2H5fCuiiAEaESgURpKNxPqAM5xDj3eNeJahFQ6p1AYCjC7i5Lwpt6Q9RDzUxtzD1EQ9",
  "key8": "4vKe1EMqo72ZhtfQLT1vDMHKp44xrYncyCm1PJXM1jDUezNjpo1tjt5ubxYPRpse7XUK6N6G4dy9qu4rxHyMDf24",
  "key9": "3fDzkPtCuBdJrCuTvz8Ye8p3B4KjZa3qAQtrUUZ66p5FmCUSkrPxxywwoTS7qCLXQoKKzHQ6cn3CUKNJrx2fMhHp",
  "key10": "2Ehon5p9X3j5ucfRHY6YRurEfP7AzEXyGzRhmwskqK2bMvsNSRFzz6RgfG3GsYN9L8uLkoxnUjM92ZHNhu8w62DS",
  "key11": "ekh1zAQtcLNxjhagFHVPfi1qXPQ2PZA4nYMVFtxxETKnJN1irZdonsBScYcZ9sjoh8E1yn7PdxoEbTw6zJreYM1",
  "key12": "2fAMTVDAE5zGq6edTYv4pGa6zHDmQYGcMr3WDLtiFYPuRr8jQqsPdd3QPT6g1X49oMimNHpSGYbt8spTmA6gDMF8",
  "key13": "2dusv6L8PjqH8sxJDy4kfiwV7jubgTiP7gUQjcjet3yTx25N1TeCHH9deD5yAXhEPN853BzonnusRwTdvPLuY5NT",
  "key14": "5kzhSiiFM5TvYRRwwiZCT3ikhhfCLC5fdMLvbwsFd6RuVBCZCa9nFcn46gA5pqCkzEZFVUEXjn1usUFjxxuspfUX",
  "key15": "4vAc2kbigUaf1QV5FvYFNzPCUracRmLQoabcDQF6ipWw5F7a15GN6X3MAY1X9xykgW9vKKzozgzyQZtjR6vm1PS",
  "key16": "5TbDe2dpLfKujmjBFHP3E4zT8bFsdJKhhtQgENE3uovVUbMh54RpBhJgVdNRcNoiQa7TT8kwDqZrbHQM8WvS7f3J",
  "key17": "4iCYoMfByPjwqg78zjNjHWbBtQ6oE5swceGsjEpXnnUgeUDLHGeF2vJBVivWVTECV3cWjcL4yFuqmKHTKVAs2mxN",
  "key18": "4SPRrAHTnRhqz7iDqAzNSYpKoMfegVz4WRqojcFyiEg2QFffUosjdLfS6RZv2EQwWYM7FpwB7pGxDv8ddxxYi4hA",
  "key19": "KVPP6tMcB8QaM2TWbVDoXY1GUEk8BjZ1KaVsWNgm7GZBrLNY9i1bQEwNiN2mqVt3zchrCRN1umBehVYiaYy2h2H",
  "key20": "3u8a2csYTyDJSVhsMtcyocPra8qMfqHvyEjXHoYa6D22nTaQcNC7wAtKGuSWrF53JhzjwFZYNMBfeoVRja9DDtxQ",
  "key21": "3TeeN7FQ8twLYHrD1DSCLgLVvm68nGzW7RrsLSPxBGhYu6t9dWvC4nQAiyUEicgFiXcfguD3E3XfpTnHJUYPhkYU",
  "key22": "4vie7GnWKuqbLk9whwiv5fmgBWAdpfGvsGdfoZEVygy4nvWb84R5VWdrjed7BqwBXbfg5STGe1vRHgYbEovtoQwB",
  "key23": "2znKQWXTJtQXZdPsYjxUU3R6SFzD5w6nmfjBFojZC9rHo8vZvd7wrqNFvQykMscQDzFavc4Gj5JzKsK9FMEYtr5x",
  "key24": "4NNb97tSwrgGrn3fDuk3zQqyhZKLQQdzwFsuV81jeP8NMLdjW8Cvke4pCtMH2JaAyYooEAzNs3d3ESBwvYjaguig"
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
