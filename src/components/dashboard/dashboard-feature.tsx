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
    "5jmBXy8yxLdYvQom1yrr9arEjmyRAF1FVvTGLvRS9w8foJxDxTpg2FDuwxNkcpd1CH8R22wKrKU53HcvXyrZkEu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363p9GL8aBajaWPPsp2bi1VTngmFWDZ4r4EMsEMEgY93VbNhpLD9TGHK2zNcpuwyGDemWTXWsZccNDEyaB8MKNcb",
  "key1": "5S8dR862Tpj5jZfiqXybipwmDpMES23d3kwF4vXPE3cx8j4GgyhuJ4gsrRuoU6UwfNB92wtsjteFDV5mCBe4LL1n",
  "key2": "5TYknqfdgMP5a3mkciusxjnH5Lz7yaQtH1HT9VH6CHM4mLqCBfEDyzfS9MyxdTyrreSBBmGNajcNdLMi6WH4qjvp",
  "key3": "62FmRPukqdT8hp3phiysmJqikipATJkaLH3baPPBxcDUtwpQ1kgGNaVTTuF1bJ6eT39SajAdWR4x1ovFVdN7ZB77",
  "key4": "2hRcDV4JfwWFrruCkxsYPuUnrzYYNLdkrn4DeCNpvzcMNzYW8GkJBPQvwbzTN9gFjAMpifyAXA4AGPe2Fu4q6a7h",
  "key5": "2MSn9G7x5JbMTZsDBTqojb8nYHRAj8AtaeEkNHaQM98koWjBQR2cFc4E9xRxPs3vE4FM4Fvvw29PuEUaRpsTW6Jk",
  "key6": "5QaCR5AzkkUrff16e9kXsrxg1KyGoUtrxcujdjijCdYbbRnNJmWkBEF6rcZiVp59Pjm5gfBLvELf8h9jEfUaTxnx",
  "key7": "4ZKw3VWWUEdVS4TqHM6yBhRN1PKsWgb375q6UCrcHxxdAQEGeENm5Cvi4Cw8oxzeHmNUunKhoMuYYgrgF1aeVFky",
  "key8": "5HQ2LfT7HHT1DTmL21df8KVRxXem3AJdp6E77qwJLioQEKbHFpVz4DEbt6bmSmaKyHpBHKu8TAk5CrVSK4778E21",
  "key9": "5iKVgFigdBtvPmxCmVEtDvoS8s3kdmYR24YXiUytFP4eAtL7FwUtxJgaMo5FWNGM2GCgu1tXnEUGfEzg5UYG56Eq",
  "key10": "4u1mWjizRn5rYu3FbGxqK9KMBHej4oZZjUMrzuQvuR9bBbymVEkX5QfDtjRmPgfz7eBmjGmaVMRzM4LxdPjkSE9f",
  "key11": "58CAjgWC7NTYoojZcdq9JfdeFwq47ZpW48w2PmDitLhExocR45pb29iEYn9SXL3nkLjrKj1v9D99NxTpXhWWcGLh",
  "key12": "2BQWh5MS8dR7iVcZSm3rzufbXG2jHEPrj1NZkMCMXmYawP1dKsyrSBezM4i1RjFfx5B9PTVhmyehMqJiqeJD4k1f",
  "key13": "5ir5Ndduqun2z2utmUHiu57uZqJ56CL29S9XdbdjceifQh89ffJgkAkfvajoSXNXykNJhLCXB5B1vsprmhGah27h",
  "key14": "4jZUCRrCYprMf5p1kj2zGt3uzii5djmw7t88WSVcNp31mNKKoMtXRv13uUg5vLexU5B2icsaKxFGuBqLwEdFvz8Q",
  "key15": "5k23KtTPaqk4tPDjXDESV1u9yVFPN3BoZ8RVUeVueM2rNAMJpduaJDF6uKS8SJLrohs331ADLHP4hJJa7oNwvRpc",
  "key16": "2pMM6EJr6fwGzo52zi4PewxmV5omgHwyhSJiNYUqdC6Y1UY5YTrZAGN1iYaSZhUjCWovL2JeTPXyniNtiLKta8FJ",
  "key17": "uyTDR8Gkrqs9TdxHqWw7rcg5AMeJmDGrcpxe19RocJYMbknfEJL7ZLeWdii4VsqRpwpMibrdTNSuzdF48nvxk9y",
  "key18": "49mhyFmKLKcZC7WjaZupiVzvovCzaxmDEUYBCdRZDxCXeo4yNbG2eqsJVioZ2fDJjmsT5S7Qt3eqhe7CEe7GuUmc",
  "key19": "39FaqWvyeNjmjtwhTMSLReTdJ7NT4aGfPctkfqPxXDXwEpcybRbKeLE4vaV2A6WzdaUUDVscR4f7r53EP6j7qdBh",
  "key20": "4k8CHESPbuxbrN6feYJWCSVFZg3iiGmgcQSiaAkv4bwU7mDhu46PoP7xgsCy5srQgu4orZgKLsg4y7d1ZsYo5oLY",
  "key21": "66yhU2whgYu56uT8d6psnEnG7Q7WAkjMNHFH66VXdk1eexx53wLcCp7VbZe8MZibJp9v2SZHEnut6P78ZaGyVgT1",
  "key22": "5WjiB3YCed5wjp26s4Nji4dq9uYFecQPsu1RyhR4pfVjtxc9wXy1sVHd8zH953fc2o6qY4Tfe2LnF62UAqCZa3RG",
  "key23": "4V6bjd6kSHitUAqidz4tzJ6Z9Ue2dLkFJmH7Co9ZANKYi3vzR8tqZMsF6xVc6bGPgEAgdYxfkPKrkPWcwEHr8gZk",
  "key24": "5sxpJoiALXr7JLLcaCmnB5QD7cDqPNjSqU4refdRV9jW6rNSEJYbnNfBdSvGTVJZ2kQHHPNVgmf7syLg654wazLT",
  "key25": "ne4H1dRwUrf3fmo14ubbkJai5ztghAzDgoPYuEaMHqS7uYCqzY28g7cycahPxpKfAtEZZU5hSe1aVAMWW4T5C6L",
  "key26": "2yJf2kHcgnha6y1K9GRpMC9rjmieu4BQggEBjfGz5pLB2zv6wCs3Bk2wZKn86n4LPA3TCRctoxpuKBuhnWFbtBft",
  "key27": "36KSL1VKYne42nxuFsSRQZkchr3SEW2nXwsd4aWqQTQf12StCxtF7S491ce88x8hqP7FCcFVZUasuniSfmJFKKDZ",
  "key28": "4iVpJVvFS3cUJW9VqW3cB2Yzj5dsEKaj4JqRWKNZJKE9Fd3zmBHA2v3mti54cCN6yXz554Y3daDzvTbzXHuk7Hji",
  "key29": "2FrQ34H1b3rt4vWv6x2GgCiLunbBY4RERFsHVDrwPLWHLTsAYV7iSk1ZYHZNxudbDLz1qQtLKSDsTjznGK5N7KMU",
  "key30": "29hPjgCP7rgzW7m1X4uqXNHbR5y5rWw1HMNdo7k7C3wyPB7edzWmdi7ZHweDV6KBZ8YtKvNbWAkvJc6u16ium9Tg"
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
