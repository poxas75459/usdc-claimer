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
    "3ua9LUSYWALtLM9914AiXBCT3duGMdTPTtnf4FBYQoNNpZ5tyD4x9d5DMB886PxSe5eRCsknAss15gLv9mAZffJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PypZLDHKAQkepX727izpwXXhNDg1T4g3Mj7CdNkaoyT5Rx89K9rC6DXrfrikXN6KcHax7hcCpU2kTfBYGyHzWHf",
  "key1": "4SSj6o91VANs7R2gNup2tGjZwE8XusLVAvZWvmnWdSuAxWUhXPmCXsdHT9surnkKsa6GDip8Ls1YoUNeDUwaqfcX",
  "key2": "5b2JgYcbEDhcSNvEeLgwT2v5t76oDFRwv93frnKksTJfuX45TywJWa3B4qFTzsE6XCvf1mgwPWQDNy1o4tGjKiqh",
  "key3": "3dXeR2HmmnVCL5EpT4kQbwUuqRjBSuppGehAy6hGH41mzRb77WW3GLq3RmFXCCzmUQoBoekC5GTC5CdiwfXeANU4",
  "key4": "4e5ukunjkVbWyMXgCiTXziD9TdiErwdp18iV8PQtd8aPWsktXy2MaYXBizqnX91TbbDapWrhU3Hjacpzqxfkw92z",
  "key5": "61y4dqYqRej4gHwWzkBuhZmmnxBVrGvjYmgHwWUihrFZ9X9EzFXcoQQ3DqXGjoTiY3EXUCRqp7RBUnV5Faa7XbHP",
  "key6": "2fa2yDWF7FaxoJNqRGiokuwKrQbP2G24JH2uBa1yMXprLRZBZwM93BHWEm66ycnGiDDqFiCAAUfiEs63F26aPwXG",
  "key7": "44xRPMQSekbbwXiQfgvvuUrAaqwGibNuiaXaCBYaM9F4Y5LhQUPJLb1HP9bJ1Jk5YvniLHNP4WJv2qGZMaF7T95s",
  "key8": "2MhAndzT41GA1LSVw9skhpPHJEpiahP1fxNQsrtTAyuN8toFCoeYr8A6cDGVfsjrfgkjPrDcdY2jzqfomdkNPb2d",
  "key9": "3urYwZhCXmQYpNc62vUrdBZJMkrzviuCaCqUsexEUFCA18FTjqzDTJgK9WMFVTDt4bKkaiH8sg6RJVmPaNbdnW5t",
  "key10": "23EY4SvtQC2jn9M7XueuGum6mNjkNpyoWr4S7p1aATWRWVycwn3DNBVHjkKUTLT5BmRj4VDY8UU6o7HcrbgokNLg",
  "key11": "2FUGCKoBwpd8ArLSVWUBn7iqpkSaZv9DVk7pnhMrJ9WCPxgVdVJtUbXmYP2SnXA6F1e5SVrdq3RYQ59FACByWN6H",
  "key12": "JHsSCVKqP329JB2gjCEyTTQwaAKqXQieUy9Z3NbryXBhq7zYTUvxc4hi2BJ9qC1DFsGCdANuHRbzDbnyY9gsUGp",
  "key13": "2knZwdGMWN3zJMjdi9225VAumq3ue7UtBSi4Bfn8CjXgbWJYR8vdXLgZiwMSwnmvBBztbzPV4Jnj1CMsdZa2Z3Te",
  "key14": "3Ddqa6MejWPhoh8x6PLai4a5cy38mdfonMPebXApA6gB5LV5AoafzXXcyRZFcgpXe4SSovEqpywhomU8FVtXFck4",
  "key15": "55wJAGqErsVAAEJodLVXtjA24WdBoGFm9mJyWDi4QQdKz1VZ5WqzbETvQoph7QRhrtUKmAUJ2EypC5gF9eNgxUXr",
  "key16": "3vq9JcUZE6nNGNZNfiNwnN1vvjVeiNCpt6kNwamqBG3HmXC6eMwX1cjP3SReuppSydmXpumqNT1kb9jKmeiA5Eyi",
  "key17": "41VyCJqwmee2LMDdDd4U3ntXzbzx1bTBWqH7dHwDTAVX3qmEmjCbkRqrQkMXh6SHETkKqWr9Vt2SHyP3Gq4Ai3QA",
  "key18": "2fqqjuZwVcrJc22itv2LiJTwfZTiAyma5gYQNHx3CE9PgcQyqcP1VULHYqCstkPD3MZf8AgUsr9JxzGUm1siRJ3v",
  "key19": "yLGrowv4Ny4puT5aTQxfv7sBDNryLBhbRMLQHoXtUWRjeNDLbd5KgWJg3zjF9G9bsjTcG4BpJ8sLzvJcGw5ZpVY",
  "key20": "5dYuLokQBL8ywupuoxn88xrEmSCNiwmba139qfEM7Jrzx37RdPvoks6EDcCK4Vv45RmQ6F7eNgdTQp1596yGrNqK",
  "key21": "4LMT4DGQ48nz1We59soDs5KUtbneqvsByiJQxg3ujascsyqWANisLx4ixf2eq1Uf1Ah6Hx3u7ad9SC5fk4YtEvGR",
  "key22": "43yfefdsEYsSJGJFRGdpis3AxXDZa74WnKnRUn6iafSHT61qLuzd8arhq268qvBTUxbLrcaagKwoaP7Tf7NSCdTT",
  "key23": "3ed2WLX3uhYUa9eHQN7ciksJuznshxTRwNykpfX4qCPcHgE2Z3gepALFxyBpokfq9p7vSKMouG6EXdTaiN6mot1g",
  "key24": "gVdjCCUUrNEEKW2cwnsC4VTQ7hC3ktRLicRTpgR2NksQubWBGnXoywQAzo5RjckfEwdxSFuYiVLxirgoPFNF3dq"
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
