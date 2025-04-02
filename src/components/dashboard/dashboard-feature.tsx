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
    "5rb88CHEcn39bgSw91YLGZSLf7pEQH1jp9bMrz83fAYVoFABvSnmu5TFDHLZB5a6UKGyMF6yry1Vw6GuEUAzQ3EC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6uPhTbbQgkaTNsPeDLJsjT8HhK2yeUvR6Axke7qFAxemyLHcjJronJUbe19tLdHhWBbgfpShw1W21EqTGJ83h5",
  "key1": "3V6iFAF26pSCA53AZms5DpGYfGxpLSN2rWt7MspPAhKjkcwB2LXCcPVo1bsTzxFnmzSVf9ZbkXeQFKzuc1GmaGK5",
  "key2": "2Mz6uEWP9DdVGxJVUPJYp4p9vERA2Ug7ViV9YXQbBnDuto9FN3gc4ZdjKer1zEpziSq2URKg1Qfuqi19kZubhWf5",
  "key3": "8y5QobUsffNSCeqG6Q7XQiomzfVPxA2pTdaCCpmF3a2XusuFbzVJmmNFik9hdoBD36dNjtsqLDQzesufnLAzm9M",
  "key4": "5xmvTo9L7uRWGgE2P13sJR3TSFsVSJ8DpXNocmkapP5cbUHqYjRcDZyeQUAj7C6emUdp5eV3SQXbMJihfZhwnZAQ",
  "key5": "21DLnE9kRaLDLfpqJS2bjF3WsyGR6CS994pgR522E43VA8UAeUex8T13pFqoTJmrh7doSJogpAPVuXgHiP4cApJi",
  "key6": "2pExGjoEqws5kP8a7kc6nr595buh4FwiGqZoqNsNCj6hBYAZBjF2HjdkC7BPtCFXYTiZgCnK97wE5nXxsn8TZpop",
  "key7": "5bWkoXuSTydwN4VTcwRajCJ3xbd3m5UAwKKceNZQjbvnf24ccbB5zEcimA9dfukiqXTnxka4Z6taZ3kJDVcKb3dk",
  "key8": "GSaXZ3jEK3tFFPwRYSqNLGokfWcCxXtaNiMrcKfFWt2CqHLAPWS3m7crQWiQ7E6Gt2S5f162UVgDAQ2uCC9jLo9",
  "key9": "3hTZdnG2gkDRazMN6yc89SGrtfPVaJR1VorcRtysg23esCrtTgtCUoepWChJ18jLsDvn1hC7iPDZe2SGYfcYAeEq",
  "key10": "27Wu8ik3hJbPyEHC5SAwotjWadDA3QUd34LoF76Nzhi12UnrhSiA6eW5bKkxiS8rXsHGojT7Rp1W5RGnxoLGV73w",
  "key11": "3crD8LV4chLaySg253GmVidMKF1DWbYN9FdZB4mixm5okUxc8iXuy7ukVbU9HWGDz3Wy1yd3oWuDBMP17ZQWnQSL",
  "key12": "UfovAHwuYENjASuxE37WdsmtYeJCE3QTfEtejAyFnmm5jUjmYLXRLP27XXqdEkdH3UjDur4nxH1TvMmD4Bapths",
  "key13": "2BG7rfqrmwqzjgJEyrXBGkGx23XEJSnWsaxBkFZtEx7pMza85C237Vp2MqhiQFUgfDoRf78FCW7GTKzEMTKM6tJb",
  "key14": "2syPngkpKn8PiA79ho3pJG5RvvdDkFZhXaQjQ5GV3YiDtJrpcKGCCs92ebEEt561kjnhjjkSXNMPgJ9mjVesnFFt",
  "key15": "4RLVCB4T8zKLPRQjt1FadwQHF4XftPx6qjbn9FKcae1oUjUrtYvR5JddhiqQbKpShSe6Cpi791D2hcMnjkJV1URr",
  "key16": "55MckvbcQwFFFqAsrKPLgFHrFCG4vPo5Gf3zqaV1wytsLpDo6a1nLmgnVMjebb8vqoN2u1RBWsxNa7LN2mw2quPQ",
  "key17": "3QYrBGCirvnvDCnh9hWX5ZMa3a4qTxEFs6EFsd2yhdamuh8n7qcdYacGw7SVK5EXVt3xf5uz5MuhNsuTbMB1JFon",
  "key18": "22ndVo9qAJqZ5ZpgmsSmSUcEtoY3iQMCyvYdu1Y3oFLTtf8JsfwzWirBoXQK8MGv1c3TPadnhmfFwgcaJ1RJM3QH",
  "key19": "5j97jwQ6rpPHaEtwueqFmHoY1LPyzLkYih4D2y17FkCmnDtfyvTqwXnUpzMBo3Da2e1wtJGG7yscc9Pi6xauctCq",
  "key20": "jP7aMUjUWeyZ5f39teAUExN561WRKedme3u9Q3woByLzBD3yqDMs1QvtewuU2q1UCDP7KnnwTxz7dwaQbWtr7cK",
  "key21": "21T6nrr4vwkutibjm4hxXyXX5GUpbXE9x7Y5qUnXKP7v3paNBvXHHWDcP1pEFJjTcj3KPoc69mMuiUYGw9JL5SRR",
  "key22": "5xVo5UBcPrv7aKyTnJN5nGdF4i9oABm7Nvt2sFHwdoR3Bngj1BcpKGnGHqizgp7b1YXhcAuD5pQaTUYknPPW39Np",
  "key23": "khpzYwVuhPLNyzMg2FZ3VcFGY9iKGkUkHxgGhpjUwsQJhHmRwjifsDgG2eV5Kbsym5FZWkLAxJNytxUAedKUfRt",
  "key24": "3e6C5DLRoPGFsG9usP6xfYgNUCAUzSWrsHQ9Ae9vRejTT3EeD5FtZWt6tFZGtKWhyiERCzTJtcqazx95bJDQJENj",
  "key25": "e6HossU1waRjRtAuEeUYEkWCWxDYvyd7zLXUtGspdp5Msnph8x5f1ZuCs7hWbtZCMftFvTWFS6hSKKcEYeaGp56"
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
