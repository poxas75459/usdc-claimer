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
    "52n2CY5wCd71nTQU974Eo6asA6ejfc35cWtmRpsojWKcNzeVpJydeitDpTbBwDHmx5EdPJwC7DVxNgkc2ssQ1icN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7znPs1AVFABaqXe8UJBd2JHsreFFgnhgVxPVkJtdksoXofJ6esbeiwvSjioQjxn2vg2LNmugQ9HaZ8i4NkDSWi",
  "key1": "51YifKoQqkRMsaozw64ssrkEF3Y3t7wL4CUxLyygaXGeBhBykqutGzTXfRe55NbQB6FChPSmrqTMxMRRpdUBogvc",
  "key2": "4jgpztA3g6tPrbJ9xfZsabcF9PjYGD8CaHNV5XZc379jEgwhZVGiAidgSZBH8fbBiJhrQr3kwaS6oHoUCfZ2wMaD",
  "key3": "2KdHiSvpAFG67rd2ownbbbwAyk79poQ5uZfiAB4B97Q1AxiDJH76yXtSojJoGjNL1mxjmGRkWH61hKj1N2QVh5JJ",
  "key4": "9oEASKC2a8r6ujpyWkmbCLvtTbQLrFAQ4Z7Dc5spAHPvtRupwPU18fFcwg2t39X8AcbLQRYPjn8MpUemACo4sgU",
  "key5": "j4Lspek54n11EWrqbrmWjFVMpxetiM9zaEverEHVidefMtq9oXb5vTycyDxYdYwuTNosxZFCSPqXvcoJsCvgrxZ",
  "key6": "2JoYPPPhLLsg5GnZfSD2P4y4uxGfX9eA8wTwKa3aTQSLwxVH7QwZe5NonYcCHijK4RkYXVwedTdJDdm62pwUBDR8",
  "key7": "T5oHrCkQCkVyXZityP1cP6VzUkD36WoPzpTmfBLKAWu6ATNSqCFjupBrYssfZfMGnsmGnPDy1j9BvpDfEhxHNez",
  "key8": "3dXkK7QcgoFSquux9u5oeComC8fLYyep9fcDbmqVeSFHiBArVbHHotpfGR99sxDhEMFrrB2N9P7xwAHTLgA4TNJZ",
  "key9": "T6AJmsLSCR1dUi75zSSTcRaXt5ffXAmQu7U59Mz4Zp73ipHJieSJEQYtNwoqszt49GbzVdxH8w77Bb7GpXNsSwu",
  "key10": "33nuqPhnHfGXy3q2B48UNbTFyMqDMuuVnML3MCnxHigN9c4ypk4GKEB27ZakYpKkFqhKL7obWGvigxwPLnNU3W1A",
  "key11": "2UeBMRAbdHoC6VKJBF3kmX3Uk7gjbn2QuC2jNf2BY6AEFUFab39LeywQUC2aQj2PSngNN4Xee9pvGZvtnUkuYUte",
  "key12": "KvZ8SpvFkAmvHEBkQ8oKRkQsLAGPtNTa1K1TuS3mHGWJCV1xGUTVXhGnBfC5PefK6nuh9K44u1beL9pgEnh4F8w",
  "key13": "YjLMa9oWf89rMeQbQAudpFSXzzyezXp3xUojFaVM5dv7cxBC7DTse4sMfYVjpP5oBnrpqnuQ6StBhD2zxg3jEFC",
  "key14": "2vTq6PvDWkzNueWeCXQRw2kq6SmoKWHPPtzsYfmDUN5n5kbaTmvu3MmHy2WJcb1daC9U5MoSVFGLbdTZSipwXBqM",
  "key15": "bmSHWty54DCdjXE5CpemmuWZQ2FDnDNn2eQBfwecV25VhG2hFm9rzih4pFmZ6KmLBTL5YMRGKg8idW3qQiG1mp3",
  "key16": "5eD59Cz1MkjXJdGu1obcwUjguY91M5h22uPXKjwhiK7yxMpetwb1xZpozHX6hqveJqkyd4g3UBAVPMxPHx73tCab",
  "key17": "2sVwNr4zV5p9m3W9j1uEy8iDyGp4Ld5wPd3Y3pyKknS1d2aVsZytxg6n9BT5Td9tM5j5oWCHtxiZ3NiQVPEziJVr",
  "key18": "2PGCP8E4F8yiEr6UWZRZiQPh8N393bPC8XaHy4rQtaQAr9WUyoKgDgQLBN2Jncco6SnXbkQgECmcnVNpxTof7WMM",
  "key19": "aZAUGrE2ooGXRfDWoeyCUgmdtUhSfYbXx4RKgFFmnbepwwTuymvoDLGQtAVAkvUPMNxvPo2XZRBZRaqSNSuHCnn",
  "key20": "wYGs1m7wXRBFxU66AKR5x7NQaTiAGEHSMb1gaKFVfX3ZtJjHaWyRVjNgWvx9m7gjuvjABaDd5DKv3hEFLtmCuL4",
  "key21": "3dfpqyqVwXrsE33oU344jueLuCA6xQdnb9JGwqKzDgWi26cJ6PfrQyyDUm3LR5hgFf1hhm67EPBd8GFwJQmP2Ev6",
  "key22": "5fwFzmrBC6gePUJ6wfV7KbD2yjgeTtHVU7RLEQdAZBnqLeXjDDyMSiSTimcHoPwJJbBBEDoEboXXzsiSzXA2w9ab",
  "key23": "Y8hoW8uNFPPdfSuRrpE7BdatBNfzJy1yUQe8cD9ZAgV67LixdhUDrkYmCcigxo3mhKd6b1u5HrkpK2nRVPMBeAF",
  "key24": "4TJwCkUsXmgr8JETW7qXfZyzs5BWTP1cd5KKUN5us93LAvyk9Vi7HAxfqFGNtY4FuvJf1GYrgo1LYqv3VEwwyBWt",
  "key25": "9zs657GroWPjuNt7366auZLoxnjdAuRxFybHpMHqcPiba6gBPxAkd1595un6m3XYL7dLGrLW4YRBXT4sWA4u8Du",
  "key26": "35Lj6CDb75cj3jPHep3CYvpkuFfQP5vmhhth1pSsEYJka4kVzijCSEF12JEAzYE3pSZRYQpgE1N8WjkKb8pE9wsx"
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
