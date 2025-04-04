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
    "3ECAnqpdjPAmJUHwUg2vaooSxzy5Xfp7aKRJ7t6as38wQMUyMi2x1F5WahCbQFEZeVYZ3mmmU3PetrdybmC2VSRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E7oXyVAfctYe9ttBaijL59idgDU6udjkUxdTEi3Xk3fpUyXURtmutaZfGwgxoz2jCaNQnfDWBDSFQ31qEJWqBh6",
  "key1": "4VBaaH4Fqm5FrrFeLRLZgXjFB3v4gZ7Lu3rfZtJNP8pgqmJnf2eVrp7mhLHPp7FiSZqssMXRnxvVqhfaC8Mw9wL5",
  "key2": "2zY2EgKJDtAyL2vWpMC4hsKiu2RqSAL13nYXNR3FysroVuCwccx5gUh2iDuHJLkfRagJs7VACZyzQT8ELzWdNU2R",
  "key3": "3FwgZCCr4LAsymh2XV3BSXE5nTTs6AgBgEUUtqT1F6qCuDoD9sxFPK3HangVaagEDzzPu3maEySySEWfDa6Ta8Ti",
  "key4": "5UrVTuJ8LLwN8NTNjgokzXP6QcMu3JQDD8kA7S3wRvPaeJhmxY1FqcnR1tSJcnE82FUmhZsyGbuqhnTHeS6CibmV",
  "key5": "4X6wVMqCWWk37v5dt2oD3jchjhEDVRmRTUdbgX42PHDGRWRCVwcBZgqkaVtY2Gy6gtVEqbRs28CyfGvPSSZrsT8F",
  "key6": "3WF2ehwFRvkPvRvZHc5EXN8eUaevBMzWnHMb2kkTxNAyLRn8qE6iMLesA36kdGHD9inyCuABhZTR8yd9Etxf6G2A",
  "key7": "3XenzwVkmvJqR8kdi4ip27JVvJDRDbbw3zGkvJ6W35gB7rhrA9W4ykHPaCYYWy56ttspZB4BqBLHJE32JP713Peh",
  "key8": "3rnEsFfGZ1TsMeMnDMbKVjvQXGi2bjyQzUokubw6iFoV6Z8gEssfzmbXCxEQxX7f3qCRYKbGg1XjfdPzYrLUT8Nf",
  "key9": "34F6k28zJxKMsbs5835zJemju6UhdYQV8bJ2TYHpzvVTMGHnbgBi6nUnvchzPhMtqgtdQmsAYDugcsCgU4ynSQVe",
  "key10": "4fPQJtdTrq5GWST5vzmnFM9VkgDvEFYTKe4L6y6F2uwAm2bLUokxYUfcjb3LtezsxNzD83r1zHcG7qdJDdCGdtm5",
  "key11": "4YWqZ1zsHEW6BV6DRJEzekXa4ATewa5u9EuxhR9hkPRww3TuuUxZv2aXtA4ttSwECZDmAxbufbo5BiBctwPLQY4Q",
  "key12": "1JYL4wbjMnZotUYpkaP2ovaqzK5qSW515NApWxTebL7djmVMxfzV4r2X2CDfV5MjVEyA9EieWiy3ErGGFBAKHnx",
  "key13": "2E9XD2z538ir1iJkaC3LRTqzifbRj4NZGfZzEndSEYg2uuCmYkAM5bJrKUpJZD65hdBF2kcemmUFjkJ837AF9Pjf",
  "key14": "AiQynUoNh5h5yVndt5FRXY19RtUAYSRKexGYkeQ8x631Dy4WTNsk3YSdQQzqsVW9pKptgWksE2C6J2fBRCsSRzn",
  "key15": "5nVrH9Ds6pGqksjoT194BMAzGCMPtvay6VT4wvWjyix2GKfAmmTwW5f6HhqSx6sauqRPGp53CFbvzfgiZF4vPsqX",
  "key16": "3bSPeqm2PJb6DcgP1rfa7nTtXyW8VacLKoXdmTXMUzcYsKnoK2W3xhU6NTWVvpe7rgi23kv8x9PmYKuGCazgAiQK",
  "key17": "b1numochgSi7A2B72qbajTS1WtdD4uYKFoPuzx9MgZrJh4YabUEAS5zoV5SaLxakTvv83RdWNY2Dwabuvtfc1Ar",
  "key18": "2BpptjmPCwwDK4sVdU6qE37PANXECiZQp1SFtWKHudCeBM1BXeLKDWudtK6AfBUTQxRYRoSBfdyeWZgxVTUid5Yb",
  "key19": "48GeYUcM7RnK8ySrNXtjtdVXWpNMdtThSBr3R7NjaCLvHKE9Dh3xgD6QitzCgEgou4kbXs8P2n59ktXdnSitZHeU",
  "key20": "3tXM47AUMhUBe1KqHXTp74u3EnzmLNaRBE4zoicd8Z22jzcRcsFcAT9Pqn7iaccAxjEfXH4VBbwA6nWoYgfiJyG1",
  "key21": "5o7LBjkqr6wEdeY9qUcCcnLt54mfbbiY5ZAKKTFbAb65EiiU9JgQsrVrqao54yocyVyBW1nymTbPwxdnzL5u5Fyo",
  "key22": "YnYNfypGEUTDfEKF1vxhQG4wZnWmBYVvC494FdCBGrA9MSwrLa27Sg9mrEqdQXYFFS25qKKuA1KtpZ8XbeaRg54",
  "key23": "4E7inLowZ8UsoWYsjQKFoXj2Gt8kCX9jSk1yGNjsyJB1jeJVF7DhFm7XsgkrErntDffwzx7mQiZCRitVrJo4aigb",
  "key24": "5w6ZeXesHNsyLswMiJFfN8zCHkSwdrbf5QK1CeQtYrQVpkPu8TDDwq4g85hkq7wPYot3wLSvG4vhan7GJVAzVJWc",
  "key25": "jY1cJehd8XGvi4VLBDQzhwFESJP5n2iPe7CBTKDJZQ9mj3tDLcgWyMo1SJU9FRi54cQ6xuKguYVC4EsdJTpFjYR",
  "key26": "5JYrdZei63v418uSod9eS3yKpFSNK2GU2QdijojkXYTTE1LDkx14R2s9uiS8NUvrrp8B3xYByMdE13BRfrkMRo6v",
  "key27": "2Uo5S3pkVMomPX91GHso2YyAWX6YTnrbwL3jvgTTiLUA3BZN7qwdPZkieboTRDQUR6hZVxWfiXJw1FvD98GBXUFD",
  "key28": "492Fv33KSinQ7LCRvhUxpTsbT8zCz6erB9hw12AnZFeVecw4xvBLpbXpcxXeRNojJQDJjZtDnXHFs5iLg9aqFGw5",
  "key29": "382GcnepM2Ss7UsqNB6fivjnkbhTCLcDj9hcrHYMESCgMM6ZiBRv1tVPb27QUm3BvqKRaWHYnZjW2LSYzwoXGQZb",
  "key30": "N28UhXW94K87aDTvzpRSDUi82YFSnmFw6qXB58tYJFsoxLV5bkgdY784gdZJnRBrJiUc212B5oqPenDL55KHRun",
  "key31": "39g8uRg4KWDtEZRjQY6axHQFTdhjHQGtbRmAzZvLHbnuweHsoTH1ufWsvQfdjZ8QLEmNgMVCgiruvsqVV3e1g32F",
  "key32": "4bdBUEo5Bx8Nx29jhrVh28wBb5vbqxuSYxjQyERtCdvkT2v4nZ7327pcAvN3Et9oKxgpX3fLY8n7WbmZMzsAvesq",
  "key33": "3EFaCDKTqNDoQbSmB1neNEZTubDJvs4LsDREJQ6tzurmPjcusuafhhHaZxAkve3oCMZpn7R4A4vWRpZKsVafLhcf",
  "key34": "xUSNBACcEBME7oPTaVEQCEymyBvaPtaXyTekWeB2jKkMtJ9q5gyCNcff18ZAucqXdHmvY2RCKtagS42bZRiDk9A"
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
