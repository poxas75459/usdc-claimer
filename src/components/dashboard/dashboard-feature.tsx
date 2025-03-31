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
    "3TQechbk17dyW7sDbbXrZ3dpNyGLhTVaD7cV1AVZrBKYesaSm7fyufH4AQg8wDkMACqmG3tkhaNKiDprHH31iC7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVWxeWSEqVcw79VMH2Jwkq3CzKQEe2KdoCntz6LsK17a2bZG71RWL9JoSQLX9LtNUQgQeaTJCCGEbna423Mv5vb",
  "key1": "3cT71H1HjupS2pNvca7H1bN7Xbns6d9EhuHYUBvRawg2H3vwg3fu87jaoAWxuigYx4jMF78N8PNsinMkkH82sWma",
  "key2": "5EgNvTQ3YrCyHd7fQGDxapkxmEXFVAKEiqdM9tQjm3dPnGFSaZTgLULn1DGGQjEQVZm7GdhDgo57g8jLxjqkoiPU",
  "key3": "3RVNa6jsAia4bXRucYd44YxUr9N26MZgG2KVb6KGiMcpEtWorqD5j7LZk7fn8aMFKJuyU3ZPeYtiJQm1z6Zk9axV",
  "key4": "2GaHv1xEVe9oyLY2nVQWe6YDuieziqjWJ5DESWedkvRXTHRUp29RzGtqh9Jywe6F4DvCqVwCaq5t9VF3KKKKrueB",
  "key5": "2Wtj9e7iuh3NsbRaidXDLSy5683WqiMEYACwxyjgSaDMz8vWQ8PkUtNGrUQUwyzWSg4ewmrsfq1XuPwjeeSQBUcr",
  "key6": "3rGDoUUzCPeYkzLnPRZQg4S51uF4b7qZ4RatfibzjJuCeusGrBsLubMHGpNPrbWWHr4xJDWHQEQq3pLRb9Xe8xW6",
  "key7": "2Dw5PgkrPMxGcSG3cQAginwM4wqW5tBwzAQVFYu8NJA9eNcjvu5393QwTMd3WuRGPCvEyZzRXxrgR774p5yHYrin",
  "key8": "66sW6zWsBTBzheZarsVsPHSdmLAZY2UYzrTwbPeR4SnnWHLRgAvtN3G21oA4RrMWVo9KuVB6SdjpQ11Tm1hvf5E3",
  "key9": "34K9WZqDvKymhs1LzcFJ4au4LM6MHbh49BcEVk9mbVE5VNCzB81Ufw7FY4fc1pY9VnCJrXzBg7TCUM6Zg2PKp477",
  "key10": "NaSKwskEXQkmhFjKo3NSVWtWHbGnfQeehJkk8k4T2BvGAATWdD71Hhk8QdSrVVoUrCdQPPhRTtmFyLTkSHMeVSj",
  "key11": "eWq8i8XCRnDYqD5HPyTkLnBT73AUdStWrDJthySw1fXYNDZJuYnXrtkX5ZDxA7dhSqpfDfuo9NHJYgdrjLB3pro",
  "key12": "4eeaQkfAJD1aQ8taXTgAPh2xmAdDnvoVBWzMYAWyJ4S36ooJwnV4go4WdA7XChJ6n5L7Sg8fWzb2x9dcMCxa6Fmy",
  "key13": "61oGSQu4qev1HRj8pWR8w9EhnFfdAYgRcQB8k1BdT7o89FWfGWi1FFSgKZHWEsLmnGPCP3oPkfhjG8R4oKVb1dC2",
  "key14": "4wffTL3EQDbSMHHAPeZDZQPKVkgEnb8TwASyfSZ5rWSr5dPVN8Nqbi5aVFB8kGgk1dJ7pPeq4YEu3KyoHv6FU1JP",
  "key15": "4dMMax2pbx8MxssWL5TwZT5ujyYfWUXh6Zu79V7x7WGp5zc785WRGYchanLwWgXwnEeYc2L6X8EMRmtnkmnXN8mt",
  "key16": "awzeXhXWcni97i4PwM1EHktkEUKUNCBc53zAwxgRnVttusA6aaXVds8qtZB7C7941UcoFvEAPFuUHsPA7RM9Roc",
  "key17": "37C8UDQtQB6Z3QgbGV6sQCuXkCPyeTRR4RvJyV2cm62JHwzyds8Mh3DJjJ1VaweAME81zAyH2ga5GLiXRrvw6U8y",
  "key18": "2zRpdo8EaB45x8qCDLaxkyA1wr7uCRkRyVZjsadqQZK6hUuCYSgLdQ1rWuSXnxNxFM7YefxQMTJwXnmeb6h9ZKrP",
  "key19": "2tTLEmfouZv4tNA69wSgT1WneMV2GddKheRtXDXbAKpFAeKyLTvAydV4EAhKP9oS8ZfupGhNrmF1FSFK8j79s5Uv",
  "key20": "51zR4rvhtAWo2guCF9rkuFt7BTox1BzHgSWX8AC82f3EAkt7zx73KY6JmHMf86SynS4ggN1TetHSuaGAyEGcF5DU",
  "key21": "61RCX4bX9NsHXFrGmmhK1su82G7yfQWZXMVzbh4izTFXScB1dA2fvX1G85XTMTz3xTTt7BVoxYBUaeoaC17cm6C5",
  "key22": "2gGPum25DCjQPxrtFvscMHLmRc1jX4GuxNsmP3iJeQKxnG5xsHsaUeW3j9sXQxJmQNq3mNovYUoZEPqavNupCfwB",
  "key23": "5bPz4xxojWi2FZGwTaGSMW6gtHTjnwM23ENNALzqskbhzm5Xz5Vm5t2wnicf2hJPDZXjoDa72Qgfc3HMXzMefGkx",
  "key24": "5vx5EfsK6hkBygD4hezR6kfxEMntqisrUfSP5247dGeSJFx3LzFdR99SQcUN4cYrfNRwg9fnxox91hvX45HNihXT",
  "key25": "52CHERoc6vB8Chc8zpzy3ZuoHEJScQLftKq2bzNtCocMvFWBFPTcecVfjHG4UFSuNnJb88e23WYbN3ZSEstf4VJk",
  "key26": "2uXtMh7ZAGRaoR6MZRAuvGq55aj4nyX8cfss1QxPEgEYbW94Utmz4gouqRtvcHwSm6HjAQKtJDG2DkztTnfZsg8d",
  "key27": "3o8ToiFYdYnXzavEjvWoBzb6eRb5rMmnTYFpck3bszziSz6GbtuJKCQUFMPhLAeWLe3MfkGRmeRNZ1ppenoYQHh2"
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
