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
    "aeNGfcGePR7L4o8SPierA9PH6Ae6BuyzjS9sKNDLBuDaJrymKDWz16t8FMLTM5EPcS9XgVmf54JQBAfy4tpSvJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qH7b1fjPMUoDbYLRhwjX5JYPHmpPWFD3L9Ydk4PM7bqxuqvWNBcZBiLmY6ra7W6XaJzKQxTSfUS7Ax4G2a3hmb",
  "key1": "2bUb5YA6SstLQx818EGLZsJwDfyrNrrXMN42fjAt2s7Ux9pfVxweUH7Z5eJ3sn4Vf34imP6Dp3aTCGUJbmyiVyqd",
  "key2": "tur4trGCijaRSMYdtkSoQ8MreVHm6E465Gk3ifMMvfkbtxUgiN2PCWGEUbwzB1HeJ6HFUDFrKWx11Z2uGBxFzd6",
  "key3": "4cptdStfBBtjNpqVCtsT8i1HZuMZUyeZYFmi8uGAvhvsCh64iLGNY9gBcFAeZT8Q5CNNfjWiXwZwG3oZmChbCWeU",
  "key4": "gDpStNAqPo3LNdD6szre89ecMvrgzZNaWJQrPqqJQ5FwDTnTxcU9FvpEwPaLwPd3JgSJGoj7XsLSgfZf61pYVJc",
  "key5": "5NCmuvh7X2JkWpto1x25GGWWJocwb7fF3PpfGUXrd9nLadNxeqQgh4mjZfNtZWDjkHBEh8of7ZTwzvkrhBmjpHi8",
  "key6": "3qr6JLFsGxfnkxEiVTLcvo8pWgSJnFiQHr5u1iNLXQg5f42hGUky9oyh4GBqfWSd9AjZbTFyjAA6A7tfCUhxSQUC",
  "key7": "3cMikECXF7xExEst413gTmUA9eWTAzLjSGgkE1MAtp6pQGA925uC4EQ5Yjxoci9DKw9r1B7xTf4pRmCAqQaQDiWH",
  "key8": "5xQVmQWyLBZdywCQ3Z5aYbez6X7CV1eqipQ4jUeVcfRdZLKjK3N4Rras48dz1znX6Nc6SM1cnpVxD2of9ae5vjri",
  "key9": "u3K3b3jM1C7CW5Gajr3GNKjCtBvrPt215D2nPTQQcCGSJaUc32zZWdvFcuJyAJaTPa5FAx3qJintN3tBeaadKcD",
  "key10": "Eqqo8k1Ws4JW6ZyjxUD7xjSk5fATgxq8gRLPU4944XTTMHpMtDJrNmvJpuWn1RfDZSS5MRRPm1o1s5wJvqVZni8",
  "key11": "CDbR9EsYFpoEWuvz3jJUzJPaHE7rPDncXMUxkAT4d6HUoBEfBxNbM1xqxkPqFE9z17i5ScYGeGmGCfB7iWiiSCF",
  "key12": "53JvzaKP2Uy7cvUCVNCv7ydr1vJ3mpo5gp9TMMhktoTH6RtynvJQBtpC6H2S6J6F17WrLNEYYzCWMgKsqbRrzSZY",
  "key13": "2GHrC7KrfVW7UPSHHzA177D91C8WuCMSCy85uvX4ve5dv6RfuDj9Cj4Qw3Lueh3saKJx6ob2VF8h2sq7Gt1qpnjY",
  "key14": "26E59qJTWhBFE7H8YRkURQKhgi3fSp8We2Eh5k9qFJnmrxjkKVSxBauX6ounfwfhBWNv2HWiZAWk9fkGpQE637iL",
  "key15": "5481mxB5DJ7sgKHteL4McLu617MKjSddC6m4h5VTfVhWD6kuCv2mbcUbfo1AjWMMmZq6ZuntmRBTCocQWWgKUxh9",
  "key16": "4wzhzVyMGGJGQnWukRYtygRgqVEpcxm3to7KTrzDnJWrGGMxsK5rURwkN2pVeJ9RrEmrgMHfAsNrMhq7NtXUWe1k",
  "key17": "3Hv4yuS7zzifF33oa9wHaa1LNADK9GGoXhTjVuuAn4aPW5mK9sHtoEAEEnUKpxk7GQuv2gYATo2MsUNVkPkW2SSa",
  "key18": "21fGAjGboKCVNUzRv8vBcAhBPrXfT8kRGynek4sf6o46EKkeYBzMPB3ddtp1jzUJEPKMmP1zz1SCLZMyB3Wk6mPv",
  "key19": "5MKrkCVHWpoX2dRhRvXppKurQ7Qna3y6EAQ52tFPkaaUa6C8eMv9TFCpEjfky2fzFZyhuPszuNgYqGjmKfnkb7P2",
  "key20": "jjdsZfpDY7RrknuhWf5BNimrJtFNnYZ2pUx5RE6cFKtLMzah2bMBxtYn2XTxVTSeydk6Mviz73yJRaiKFZyFHy8",
  "key21": "36j8ndHGyaUQ2wu7m8LJDc3uhDojn1ySFJR78EtVCEGSLfT7K9imCCCPUPsJN9wN67HB8GuZ53r31zjAiyQ5uPPa",
  "key22": "2iSs2kCgD5Ap27VV7QLZzpSW8HYXdzUyncjVJrwXm2MUwKqoKc7ifeeJS2GZegsDQNtFhiQ25jdfhcysrnRiYQ97",
  "key23": "5j6vgLSwCEvZa9PgtqdhzQLKP2xygGLbpbdFftNsA6yNv8TakdFbnzAsCeJX5JBQS2vb7KyUuJPKx5ZpK7WjYwDh",
  "key24": "4wrwpUb2n32xwmm6rfDDabHGQz5V6TwGQrh2yYdPBV67jfqPnEbKRTRAbU4qRFtLDzpnBHxkt5xYBkLDMJpSZTNQ"
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
