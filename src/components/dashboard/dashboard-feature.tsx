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
    "3yBGPPN5ZrgUJJJ4P7py6M7Jjaycitxjxq6yf3jtNVidJGuPJioQnAouPdscpDrheUrsRxoB65edX5TAhXdfLS49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAcZm1QVqdgtuKvbRLa3sxp7bXCuAiiCXwT8QcCwH7CWfAb3GGmXSaUvkFA9mpuRsjjympUb9jrqAGncmX1yxnn",
  "key1": "5tmzMCTLyeZvHpf7yWzN2JcumCNVrwZqRoftx6sBqp9drH3ScFK2YzTET8h91vAK1zEmMv5ddbpfMktamB7aax7K",
  "key2": "nW5yh9fR4cP9fSXsbKcsY9EDikkNDUKSPMYHznRrEnSGkonPaEykopkSNvkssxaSedG62VcPBJx92ts2hrqWbqM",
  "key3": "AqRrz7ZA1q2DBE1TPAXLYoDYYj3oF7q3TvUDQDFfJDhJ5kV7KPL65LMxJ8n3p4XEwPK22RpB99yKUSteTH1jPjP",
  "key4": "4F6GWcWJ7R97JrEhuK5jgFSpKanTNpvatBtFP1vg2WJ5tScfmK23iq7koLtdx7nakDB7unixQbM96q2RyjMzGh6B",
  "key5": "4B9PaKzzsPdBF5AUy3CLDkqjcgrNyVHy7ph6hfLBBaVLFubHRnG58ZoEqmmqo5P36s4ggxKgJth95ohsVgZ6yuSq",
  "key6": "3JjLDk5XLBADs4Rsi5qGmuLoz1GgjGwtVWfwds58Qov5PtWjbftTp9BuJ6WW2cBfabnn6RYUUHYF5kDJ4HXb6feL",
  "key7": "5dVXf4rzu8uNGVBnd8ycFCyp4R2dhUdcHnBXswGmEheXmTxSyNEe3U5JccSoDtDc5sgSSJenyBQAAZAb1fJDZi9p",
  "key8": "39VVTfFnuTyCNGxxUPQwuKGdLDQJwUB4ehq7hLXfnMAoEcjZVhzF36A5xaB1F8HkVNYPxxNe5iT7vmbvDZ6mWTsa",
  "key9": "4ziRU3Zmr2eGwTKbJNPpUtjwHDRnFVsyxrYQ8kVNyqLsNYvVZVz81MDuuCsfm1my1xseExTdK9uAdQxKDbm3pXPB",
  "key10": "4914aqde8sLFQreivSKvsT6r2ftMj27HEFJ6CuA3FmyvvxXnaJzhufxjc82EEZBim9mwyHYYmFYTXR4xDGQsDEs3",
  "key11": "H7SAy36Vd5y2asBTRS16XFyx9imuHaN1i5cbs7zH4YNpH1rde5neWMdaGr1wtMzkbVsgcoqprJWWC6CS86THuyE",
  "key12": "42WSFXscxzesSX6wj2pfYBjqnhYe19EX9ScDnHU4D1Wv5tBdxNu2smTU5uhPgUqKyTHZDJ6kASduyimGGNSJH3Ej",
  "key13": "28cobKpy9tjW8qDZToMnSatQfctppyrySVLinXCWvgKk3arPyzDvzHkQZJX1uPheNEjCDw8ZqK2YRaxxuhHhtcys",
  "key14": "4zKGVtQUkVJ1pQoviEFziwfdX8SJ9xgFrNTEiYWaecx8r1XPfpNh8B7H6gFTk1msyKrAiaRVBfY693bKxrwKKMSZ",
  "key15": "5JiuCFbTBUB9vWh3i5fYEBAMhUc9cnYAQVaiGEr9FbzRULWNCmTYrowbfVwqvzSBo4LFHP7HrjkDYc4Tq4TmhuSY",
  "key16": "5wMJECGE5vmaEB7fJcYo8s6MNKAj3HHqcTFPW54EXPn3iDurHKCqkhidAt86UmTZasm1na6qQABamS5BN1WfY5s2",
  "key17": "4px5pjSZyfQZRu2XqrDHekCa47Mfxqs76kj231w8HpvKF82DZD4wGBgRLrc3gVSxa4ZnRGZvd515wX3nMMSHgMy2",
  "key18": "5y2P7KWe515fBvr1uf5Zqswtgug1bUQyA2B9bHoB2fkAhsqEabHsDPqGSjEFssyCqqgtZpgt79QUA2ht6uao8HMc",
  "key19": "229Y3HJQouumFs76c54We1hTs9MeXaqTGdoT3KNMhtkX47FJVeMbFcTWYJhKx7n4GNHpMGUrsnWezfCF48Myew1E",
  "key20": "4NnpY7vW5ZYn7EwM2gWUaC6XcgBoMUa6VSwXYPK7H2eBQ7jkFTttxZyowgK2kyL3VNRH8woUe1PdVwJfXfWywuNM",
  "key21": "WddWZzmczFdgWK3pJ6SrG8HYo5AB91AqXGE9ejc53KouaJ5P82C7jqgMYZ7mtujX5S5Pb6CgoYHtx4HtTyYnCQ4",
  "key22": "25e97HBgD8U3LVBBGuX2Rqr6MNfJ6SHSZvMAbJwKPYzPsaHaMvbsLRRn7CS6HS8tbq3FYnKqcFEDvFcYV2WznMrZ",
  "key23": "63FHrZAqA3BULrWu7zU9vMjqWqZKfSReqzBYP761PzmL1v2UMryv39AFR1RTuHPo1nTZT8f4qjjTLrn6TijhHhDj",
  "key24": "238mNC1sXro8edqUL8KedjDTwyMmDZ6cXaDDY273ujsMLNHvWqGPiJum3PWcJSpYgL3s5KmpgBWHvRwgyejTF5qv",
  "key25": "2JP79G9gmzGXe9ezb68nUtBrb3NqYG4ECPYppvasVWZd9R2Yo7s1G26RPPHbZ1NfrxVujLLF193h9YYCE6etDtj5",
  "key26": "NMRYL8XnFc6cQw81Fjb3RYcYMrxCFpvAXWhajfeckt5TX4DE7cAcD7thyvFtuNs6rmfALFMLf7tbwvqkQE6GEGz",
  "key27": "YnSkLWD5Cdgk54AnN6hJ8cTZswzfVkNLx3sD1qnE3xzXqa4yqzZhVciCQ7DxtTP6ma5uqGMKwB2qLUCD9YG91i7"
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
