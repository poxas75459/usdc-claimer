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
    "2R9QF38HyeQSZeLrEoj6hZbXKn7PnHNDodaGRfu2uv7yqx8ruYjupzgrayytKfbtSczwbRN41MNyD5QSgmhwYJFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfs5cVS2NJhMHKbNEj66g78H67SxGm76p7WeTB4gJRfSKvtckqi7Ej3sbwhsvvJCp83N8sufQ1QoHEgKX9RrZDe",
  "key1": "2m45zyrKa4aTou7kBzSTKFAFgHXBWqb1EtjhcLDHDPNfVeann263ewdDkkJoaWNfZ6j4qGUGWmrL5cyZHdrxmjvZ",
  "key2": "37QSYs4WZYwqErALdHBNNc86i4MV6bwbTmr85obHS5d6ff2wh3SzotJQproy72HzJ1nwCkWP8uw1LRvF87LwbypF",
  "key3": "3AGD7BhcgBxXyTgUMLppJLsmM2QtipKXMGmVkKFCfmoydugnqpJxogdHi3bzXhV28L7nrKpXWM8qX7P7sXmFPVru",
  "key4": "2GUMRUwR2mE6eMEWB5tLgAg1Zkx2MubSFDwtC1x8B2oNHvGoASFoUykoUs3n4QVf3rSoFRGHKFDTHj3ahAW8GhY7",
  "key5": "3gKeQhyzVRFxVVSFzoqkLv9A4FQ8dRWcv6R5XX3iGFCFW6t6pLMorH7PZDb8rNKM66s1NFDPyd1MBxh5WARUpb2T",
  "key6": "2wHpBMRkqkTobnPxTA4uPZfydrKx76jTnikF7Qnujm4P3pJTCky5p1SD1uWJCoXgYtJjpmvYH9SZjMvJFUBgVYS3",
  "key7": "3Nj2Xy4uqRU7QYt6ucDR56RDABaetFguBuhCVaH3GgJ1qenoLXf5RVMFJk7YTGmrCk2EZ5QF5NUDPNnAZ4h4bC8Q",
  "key8": "22XMZTZm9sheUHzWJ2DELnSrpfMPqWWxNM5rmVmZiLzFGWydxTG7uxbFxwyBkH5b7eF6mQiUk22xKcsd9etFfbGw",
  "key9": "65HQTJtUrLGGAYPug1321erYM3ZmfWbrQk7XqmmcJNaaUZ8Vw7AXzWYHfV3xZCqLy8UfjmqjQkk5kphDKAsTCKBV",
  "key10": "4Q7z3TGRKCvPtwStJ8AK22P3wYnt4YGS1whhWpJxUhmTyCJNmP8zJ8DZE92z5ZGH8pdAjp6BHsC9KLNuMvzLSofQ",
  "key11": "4K83a2h4VjWYrrPXpauRXvAXSkgNQxyKVgZRCjy8EdZGo2GgdoU1S22t1bvEULXxaqGbFrjAbhgBXfuPmSpe6byz",
  "key12": "3mHs1mPH1Gjr6iX3cXAtxux8WUuSk83kRh9Lu21BxpDwCuwcvoXtWvMYS1HPbcxs1Ets8rZzTr8yQpW3BEp4DaFB",
  "key13": "49Mo5eNLUdbJMdPUXbUZbH46TNfx3VSPo54QJQNzkFyMvjRLqjjst3S7ojwqbfBHU2bpGevNkrEimwBfGFwaJM58",
  "key14": "4Hzom91ZYDjQrbkhRrdukWxXwAJPk75hPr4AFJYLWJEx6apJdj4BVvtZkKj2g8LR5gF6cQiJrrZoQi1LW1fi8UQj",
  "key15": "5BZkErGZKQtpDUYd1ACo5wd2ZnrxfceJbedsh5ygk24UA6eEfUdciFQpYnJcKkUNgfk7oviHaVTds3XU5rvRzims",
  "key16": "55bFcngLpVjikdQxxtcFAtEFvPpb8DVu9ugsNSZF55vxgWjgYdgJvmaZ7X1cCAfMvsNrYMGuszvDkDiy1hWL6F59",
  "key17": "5RapdLYXe3HzPUztuXmzvWbEqK2KGADFQ7VmhFtL8CkgHpiPz6sNeAHqHHKBdFLJjYfctj4cMmk4xxsQ7FS4MHQt",
  "key18": "aj1Qpwdc5cokNLYZU7E9VoRd3RtuaeArMAMWk17zMJoWyywP2u3A6eNhShKzn58uxseLvtdo1ciD2WHaavuzuhS",
  "key19": "4ufNot8nGwPi8YsYeqH4in7XPYcpfm3XNasu4UeybnW2cWoS97jxcdSwT5LuhWQKxSDBBpuyfB16Fkmj1QeCSob1",
  "key20": "5ffFBPYofwC3XfwKogXHmri6stZb9e22sAPpSbiM5L7ca7TBbipdB9rRUdHJpmtgy97yj4Dirf9bvDgLR8u2Jufn",
  "key21": "bq5D9Ec3Gw3BcDLYBUFAu8mbFg2XDcaTMijrbHfjWcggDvvSP1WaYJ5K9ghKrRQQWCsdbbw4MLGGyS5F9C5RcWS",
  "key22": "2e6mV86iduZMtYEYRMizFZamt5CqT7BNZBiMofDJkvm9JM8dQEF96ueeQA2C4Hhwt28afwoTih1m8uB8jmUYS4P2",
  "key23": "2q48VReAdq1NwDgUDTsAn7hSRLf4HtRiJ3rJdorYyQxLHrCvbcjNBGuPQsf8QKHZF2KCsusgADuPGm5fFsbhmZBa",
  "key24": "5U7rQm8ZxVaAgN4373NEREeXo8N7kwu9iTEbjrZzZn6FuANLqmPckGrv5PJDSJLDNgWpYFhBiJaEei9Ed1Zi5S5t",
  "key25": "4uau68Lnv2fe3QhriwMS8c7WDEUPJ3MCK7wcoWNk3JCenqpA56w4NJyjmaST8rHkqL8AC1cGkPbuuHVuPpzdRYj5",
  "key26": "5CbupAjm882S9zqGtPRrHxtr9nZ4qYZQy6QqFQ3WvPeNKXLsGd3KuSPrPnxYAugacDcpMX7RHrazgBmgQhJrq2aD",
  "key27": "5X2b1qBVppcCbd28mkv1t2f3rqSawEXpLpgsmt7bvZ7L3yxQEonGsKWNEQJMLuyWKz1pDzjKV6r7jEJ5pHkpnxTa",
  "key28": "3jGx3wjMJMJ2kZ6JXpgw9QdVTRGBxDBYUwrAKsYxtwkexCsC5LwxnXGtEnT5chnvWoTYQU1rKVZg9pZ4wSZzSFcK",
  "key29": "3qL2npKGfGLfkP6PQbM4Jwa8q1AeFoE6iuKMGWSkyj2Mdvv1FNr1miGuVwPss9x66rjwmvMmtNKHsu5xqfmCGgKR",
  "key30": "37bPL5zLgHEkKQWTfv9wokSPzQjoJjHwwSW9z2iTBsZCuDWyw2hk5xEGy1xkG2s8NpRrE2aFCbsyKRdkHkDSHbJb",
  "key31": "54H14HfxACvd2xHQKVC7HCT9LPPfn3TbUJeggSvJmyP62KtmKnJG1Re6FJUnawbVXieifTmPLhYKmrWuc9pV23UZ"
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
