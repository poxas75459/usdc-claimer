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
    "JtHS2yNx6xSjnAJJ8Jg9fvv954Yb21uZtuFw2yJJnEShgaBJbv2vzb259MWnwKraYGiG2m13JsaFCjNBLrEUSm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wTg5MZckL2a89mCsJXb7wZkWGQ5qfVK4QFJNo48WiD6r4xvHewNvSUNFtsYbHcQjaCXzwjNZYRHa4n89r49fyb",
  "key1": "58a9D12cV9iNFDBjW2EhVygDmismUqjmvN1NnTpQ22j3bCoftjdiK8VQr5F6BA73PRsECzouZgUHfFKDGjAUZ7BQ",
  "key2": "4TSpcCFAqGXaPhHnNu7HiJekbGfDjsksMYhMtpDicF3NeFyKS1DGRdLBAWGMmfJBNt1Vh86dFetD5tN8S4dbZByF",
  "key3": "54UbHgbcotuf1AdNHNq4VuNgiHetVurq8ejw19bLgHVKGZzTBArDPFB3asfKqJ7HyyKULtSE5HgXHrTaPxcaZPo3",
  "key4": "65EHSyj72xwt39SGq45dW9mtrvjBA2KVdaQU9Jk5fdr7gX69dMShRANxnscVLZEPCjpMssQmNXa7jLNBGcR8Vonn",
  "key5": "m4utyRLgzstVeNH4JdvWuJUGyAuFte4pHyn6djihgxQ3emzHXawCA1KL66a7m4QhJ3vEcyy2Aw8SMWDQ523q9iV",
  "key6": "oK8KdGUSMhSz4VonYGoRrL3CCdo5eyM7GrUjbHs3mADoYLVRyZiTEPQFfsoskz8pQxrdNXF7CNPBChuhcRemsyP",
  "key7": "2GpuN7q7Xw1qVUZdQ5bQeCm5ANwhhkYAuuAe2bWUKnZAfLnNbq1Lbc7r8jCW6LTnSwUP6h6q588TvmcZFTi3isar",
  "key8": "3CNdqCSqzzDaW1jyKnb1nFnCypDa91vbzwMojo57V3m4BKdaro4vQcrZ5NCN9h8b9DGKU5MYM5rBVdxdJTZSm54h",
  "key9": "TcRd9hEPiBPgmhYKkx55YnC5zF9FbzoPUcXnNWep1zNp4UmK1uMFReyqDn5xLk15CfU4GmsdCcStGAoHTT8FVsB",
  "key10": "47uwPyNdE52dSrPk7BKLNtEwYezPyB8bT936xkjXrR16ZeKHqyNu4f9jEJyXFCnNAAAPpgsnPaxAgf9rHNcUDhq3",
  "key11": "4FBCYDVm4jLPREX8ZHpTLgcPfnTHuzezDk9gouyvnNyr9Nrq6HspZTYTgU5FbUqEVbX6oSkT1kafn9MT4ABJt9TM",
  "key12": "34J9gnUrphdZoSHctaeBYVvXYsviYqNErvDvknXqmBNdd13cquuu69vHSasy5T1hb9UrKr7PbzVUv8GCJw1HbhJ",
  "key13": "3QrtXTM5EAnFn8R54KwNWbVEBXZNB5zbEHhs7aQuXhR66vT2CSBuNYf8oC5HMWz3r1CtaEJQTzKYmn1JkpEhdFhb",
  "key14": "BsZHAJeTB2e2fYiRuBkbn52B3Q7gRt7QvudDUZmfCbQqRL551a6kmDh3NeW4329XE34aGaLfhz1YyiTV4orLwHX",
  "key15": "4Mrvd5KqFGyfaMEWDoiPZboPdGi4D8cAHqio4DERkUuoqkNu9MkEPKc34SdUq898rQrYfcGW5whcnxLduspzE2y4",
  "key16": "5wacyCmg9rJaJcqYcHyuJ4Jgkcze8cyeoRAoyff5jmsKg8AuBJ7gdeYjgRWdFFhsL5pYTJnZuNUAU8FzLBdcJe9e",
  "key17": "5phQCXd2nutXmgD32HbjJ3xkfrTV2Po6B4G7akVck2Digo9M8NjAFEn1rxEa1C2SvgEBnVnJJCqVqbR6X8hm6SNq",
  "key18": "4BUFt5k8H6etjQwUJrNgtqtLoTwU5N7cLVbv2uSAa1bi1Wmg56TZ6egMWsivJ3Rzgzg95gpCUaVoNBr8JRCw1uae",
  "key19": "59ahBAKR7bLAyAgkAUofDcri89DSZKL72bxuRvm67gz9RoiBiLj9zR6YEN9vycyC9FNGoafh9WXSm2uyFyzL6Rbe",
  "key20": "2gRooCubr5L321P9KgHdn3bTaYJkSHCKNHn7GtNvtrkkDQsnJc4cww3DQWyivxrm4aiyrqTTHj6FPEwHVSgLaLou",
  "key21": "4AzwZ1fi4WUPRTRytHgW4LECeNEkCJTRHS1v7Dmwz2HRzUXUHm6VjopGr7vSaV4JmbGtA13FMtmYiEZ7GwJUkiYV",
  "key22": "YpHjnziNgfR6woW3iBhCcJHkPDiLgM4LRY5VVLfpBthoZU8PWcjiUTvRZxQGXzE1zSqVNG4meaxSRT5N1YT4Y72",
  "key23": "f2VhVMBHrLAP6sJ19Aq3uztDU3hi95wvVipJp3PbKEb1cxLUAvSKNgRp4ZzrHsPcTzS5nEHGucfWjhCH6QDiTYt",
  "key24": "2WNhEX69kTYkaSBzJrTwrq1R6hiakAu2kB3n8QnGq47jJbrkyBwnfSQScz4HVxuxdgBpiuJyGXf9vY6fQ4w686fP",
  "key25": "Tjk7zpGrhXU8zEJgfFLq4bZVtKDHJZf6e63EDhuNeSLq2vngTmSPpR9gfKhXsyDxD6GfqUwWjhH1K78St9qmAge",
  "key26": "3dQj9RP6KQsyYE5xePxvKMqjyDNAGjqb9dAgpQ4fg89Rf76HG8mhqWumKqwKPAmnp1tP7TkYtYW7NAb5yA5RCnQn",
  "key27": "9SuSJMtCPpf84xXBDVMma5MNUdgsyMwkWDC4D3K1VN1YrVEkf5LNAs6SXe9roYt2fdUoTBdNMgNKe2KgSoSmq3v",
  "key28": "3FKQzfoYfB2CU74T6YnUhAXhbtFkx6H4RSjKcWXJ28u7yfZHAyFYuGf7iqA4aVCfGtMaDJNSofo6126pk4MTBj5b",
  "key29": "4LvgTcuoz4ff4vLsK62DpHs6kEMRyvGtAERzreGH5yM6QAXX5qJfXwSBzeaTTHYzskuCYpcG3EqGDaeYjZg6FkQU"
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
