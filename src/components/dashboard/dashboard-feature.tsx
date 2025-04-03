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
    "4k7byB9vY3KHkda2hguvMY3UckBmYjhRTvRWqa9aMC7TtFidcDKXJTpcFQxzZEzvDnAeZ8TiURcn5MzBzfHoS9rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSQiyySy2A1ioRPYGxpTD3aqHWjC336GdiasvHdxyXzpjmoenq8hJCczCTCUM7KKJhwccu1JbQMjw2nKpchYEZf",
  "key1": "4coa38GUrknrM79fzpBffEozKptFURVKp3UaUmBKdcZJf12HVzCMhuK6sAo9sQpjrVjivrUV7REoFgjsXvoY2qAq",
  "key2": "7twota1NPfZSuERcPBeLbEFRiojwBoDLHEkjAzaK75xRVnhb5Jc8fBJyqKTkPZhf9Fqrsni3jqfajVyh5hNKw81",
  "key3": "5vRkbsWLBFnZt6tUhWSvd1HaZ9rtC85LeSh6womNwLTyfexin3dWbi4nbgWtTtj9FV3heC59c2yiNmU9j2BLe2MU",
  "key4": "2fGThjzU7RXxBCfLWDb9fB9kqUgGE1zD9ErTynsHDUwUmrknUchX12WesaHb1RCpVKibmKAMuErQudf6affKdbSz",
  "key5": "2zrhEp2HXQUbkxuNZgBvqbuiyxRDPqerxFe8pBUix8XVMypihY4j8bCTFcyiZn6kbmjjpNWcyhbZGd6kzTE1EXtZ",
  "key6": "8xva9S9BUwYzhu9xWABcdRJ1BTAdKPVF4kMuxgsxSZPG6LoWnjckC2dL68JrddZPiikjTe6oGSCxEA6avPNMhiK",
  "key7": "XBhfYMU1Ff3UKvGLvsEvJEXjterAwbUEN4Mp5ZEa2Wa63W2AarLGRXxUZzCm2Jx4dG9y2i2uisMSZbNegeDMvjc",
  "key8": "3fsSpDE6EnTZMz2G82R22GT1AiwGKq392KcATVBUAuKNMxCfpH55hb2Q8jhgFZ13tU62noyv5DGk2RHJBd8uG1np",
  "key9": "38Zyf9bnVvB7z53YrqADQtF9w8eHbKFoa6hStMMKaZMzK2agdyk3GsB4Lo3sEG4jP5xDMSwqsuPq95NkhaTzCYQG",
  "key10": "3A1creTgx4E2T5TNfRGVyTvKbeYDTjKmmYWXWY6rQyhwWuAncdJKLihBfGdnvJgnyw8z6RVAFCETPpA5npzbe5pr",
  "key11": "24xDJuymuDRLwQaY4KRpk9TbxDacTwF8KRdT1svzra6nqwAv2bidUwE7KpBZDhSMjBz8nFkBwc7cp6fJzuHP5ByR",
  "key12": "3ACcmwSH6JLnNnq6JWPNDJf51v8CoMfzgnALvTg1nf1TmaBX3BGagAHeGbdBrLNDoiD5ogXTdWkWB24vVN7EjyhQ",
  "key13": "52h3mFwZ1WzEJb4sjKedCH1ruiDCQQFfqjJHd6xAz2LiP9PRDdR8QUs4LcjKTaP1uXBKpL7cbgcBgbaqBLimq1sc",
  "key14": "4CwZMWvRxQoyK1tPo3TsVqF91DXEDquZW1x4hXo9GjAgJ6vWvXAkQhMKHTkmg6RP3DYuzidVHib6GYF4QVacKJvV",
  "key15": "3bdPokj8cmXpZDgKFaZeGFRNQntF3sE1EGHS1dM3o2eAmEKRFLqZJjkfkGUWL9eFcQfscKPjeGRabKGQU4Ur9zFo",
  "key16": "W8y1yK9Z7UPEnLxxYinKgftpYzA3DgF62SihTUTtQNECwJKumSwVVTLxzRnb53JS5vMSY4MghQsrr2Sa876ULm9",
  "key17": "42gQb8tZJ2dtRZBWpz9zbSNycg8P6t6Nk4q13cmjHb7pa1BBv65c38apezVSfzDYKtZJTinSQHAYrpszQBbejhYv",
  "key18": "5ZtYjofhDYA78jZQDfyoa2ABDVH3GNscPAu6bcjx3W67AJsVLndKRpcm2Wzge7xCbF5vGeGzB9SiB2bnbPqW1haE",
  "key19": "4hpG2PEJEyy2ofaSQRktMqFj2JoVRzJNyMLLyjMtXDQVzr1H3D7tqre2HVT5B5N3BPXbdkqrx4f1ubE2xRzpJDsU",
  "key20": "5DFXSGT8E4JwSBpG44e99s7iGm7hHy22e5JaZRhCjFyFcZ6BEW3e6QtoH5szz7H1dDh3TpjhqD5dcxw8Z2yaJoSy",
  "key21": "3FCXJbPd121ugMeo5oASYikfkYjvidWmqJT9vKxbqTWpjEDpAPzkJ3ZbeuPs3UpCiqscsg62mtVbqGh3v4s1w6PD",
  "key22": "5oV7X8NCCwtFdnQBS37q8QmDSYeGNfoG88HjCeoedRQiCEt44xT7iBRCeZjFVv8ARAYT678qNqTjM9gm6c9aVHRw",
  "key23": "5rfoctUkhhDeZvHonmjFycVTMjKVBb9NWfY6xCHJWmyBd7daq6PHVNVWX6rZpHas7tBU9fkWpLvuqjvA4X4AfMD6",
  "key24": "4RBzMYyMnBcaLs1rQeRc84wzzAV2FUwyEUJwmh3V5tGLVFiMLUCPtzVc98oQaaA4g1YZbGayK1zYfXDpn3KJ4ZNh",
  "key25": "4QRsHNsg3M2aujTvH6nuvdYGoddYwELwMoUkmkJ1iibNJFY55Z9jvM7Uo6wYkMfnamUaVkt1cYesA3xNAk726Fey",
  "key26": "4c2ZSS3S6rK7H1YyJdueSVczWykAouobecKJyiuCbfmmhHAqTFyknxGV1ZqGzTzLkwvu63mTpyLnwBxJk4J4KsUF",
  "key27": "3aj9GjovVUJw3xk26qhpk9j15c9Fzz6gykkrnzcBU4iWpYURTTntdpLUsjn1NXezZR6SMjsbGpWVZyLeFrbMQ3on",
  "key28": "63x76M8crYZESEWhL33fC5nnemgDrpUmMLXrahMHhiFrtzgfDuF9G13qjEunuwUczv9An7yw8LeBY9evFewq7xBz"
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
