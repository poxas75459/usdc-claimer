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
    "5JLU1N12oT8gWNkQ2LsBRQUjFUMKMqkpQG7tNAAyoeZfnTjU4SH9kGSW4vGsyKNUQ36DrYCJUWEKQA8DjmkidPBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjpCiWQdtgQp2bB1miB28F91eH7esQViJnk3QSyHR3bxJrVfH5D4Egzsj5zeYW2vNchmradSfHwjs9yKmNgErpr",
  "key1": "5XSY5x8UvYzq6nd8qzQ3xE1F5EDrXor7jYBcot16R2DRzAtzBQ4npt8zgHp9KLu1kh1PnhdVcTtBr6T4k9SWUPUK",
  "key2": "5phUmVtT1LLYM5v8d7vtKXDUp2kcQPXB4BdVpit2WAidurY7hK7XiVp7yTwpVVAfwvtvZZyTmsT8BBH6LMUVPvDe",
  "key3": "2QuRGGWfGRmeEAGa2zRgPTdmF4aj8B8GY9L8n8jBcKpctf7qoV5fnTC4auPbXJQHNfbPfv3GPttDuLLjQ2nApGEs",
  "key4": "66o9UQeAy5HDkjtrdVfhZaPJdb4dLcevHquiuwwHknDGXAJEfcoJDACDWJNGbU95q8qigKNpEk5avK1cjuME6QCe",
  "key5": "5LGUwEywyNvnqJG8wm2BPeLjqs8B65yzTNaMwWVug7JVfxjo92KXWzV7DSreuU2zK8PEX7Dm9aE1QAKFZDedJaRd",
  "key6": "MupPoaeWjwTsnBdhJTR76Do5ZTAWNV7VV2m8Miujgi2ip41htTuh1JdNf7QFdUjPguAgTjKFaJ1jhbU854SW9XB",
  "key7": "5ZbMRTJ19o25eVzeQZMrLFCfnop9jnTXN4FU28JioHS8oTRrCftBr71FTweHHYZX3aZW7uk4YVGjLy6tFbstVP7G",
  "key8": "5YFy3ajoRVQ4Dc9R7A3GDz73DcymyXhtoNth2KuAHtmhHsXzHr1vU52yrd4DYLHrj8Hm2JLJSDDxJgXJjUECDdPN",
  "key9": "2UQGY1KcB6adcgWVoyBkkSCtvEZqVN1mKvgSkFbp2q7QcpwrpSK5ERL79AByWADTACSLjKCuz4QQghfcM7gYkxRi",
  "key10": "2oArxLU9EifJ9u1ti7Vwh6y9b6DSM42grtr29xhmfase7JSyxqsZn1vpy9yNEt7UezgcdTcQtXD6nWgLFdTmyrDW",
  "key11": "5utZYhEJYCRoRuNERHsVLzFs8KHWMo21f9KYzQtR4iZhfJnbnTBX5fbctQCbksj8WqDAZq6rY36bKL3BraRuvBcn",
  "key12": "BJb3Mc7PsjEFj69EwJtcgHDSCF4Hh5UMynvRpVe53QamX82KoRsyunsq7TiHCvPjKs8ta12zcAZ2wc18aLMREtX",
  "key13": "3YZCKv522a8KZdCocvDMJ7EHMN13vNPjq7ZuZW74Xs1T5d8ppHUWbXtgScx6akPpVeNhcoSDwtKdo6vTGM6zc9MU",
  "key14": "49HchhsabpioGRAPXu33oBq9bodTnzpww1nWQ5u84kCJAWzrsqC6ifW2bx8yfVKGHTpEV4RB9WB6bA8RCfkV427W",
  "key15": "5qhjPSfwkPm4w1srZSLYmKrykqvyho9MvBBVgPzVJNJnc1vJwSQsXE2divyUNW5cevxKN676jrEKU7Z1xDg5ggqW",
  "key16": "61mzua9vEuTgKXsTAuwPLu3BcTCLEVEmT35ektVejr96oW8SJg4uobTno31fnc298GnJg8xsLRLF5vqhdut2dHjy",
  "key17": "571hignDWKQfYSDpauXLwLsqxwjVrwY26wSfNK7w3yr87Q2kiJnTMLCK6TZBWQXZwxXUFRECpeBnxN3Tq2HkKUuk",
  "key18": "yXwKaYjq4d7YbTojDxZ9ehrG8mxSon8D5ah2C9kYBVhrdNRqwwJszomNDDb96FtCpEfdDMtucGmXWZvfq3ff5X9",
  "key19": "5Pq4KWbosBj1HdxeKHrNk4xYMaUCFS5ajNcBifp4Ym9HYBLCdpHHjTH6vvMJHT3wdibUKYhKuRsEEvDb5P2mbkfH",
  "key20": "5SgsRUF8z2opQjVG1K3cpzVtjU52JBHNgtZvRRZxvB4gPLoAoqQmZ9rqxZVwsz21XnE6es8UGxb2FXe5Zg5dmiBY",
  "key21": "TCvyeYDa5zRDoVZZJtFHmLjBxbWBPWnbPLcxp4wuNWCmjQN9gdSJt2L98qAeEN6Yre4xsdeoZKzTjxmo9MfmTsM",
  "key22": "4yKG9Ep1csHiUTjWZwCxRK1ZMqmkWaiUJye9ovKqiseLpdnkDb9we53TRwy6aAJwMMX8R4kYcVjRg6g493TB3VEN",
  "key23": "2R3GHTMStDSpQUaXJYcaa8KN2zQgsjrDaJx39Bpjwzfhe2348Ap64GAXsTnyAqtDsfQpWYMssqQgdDbpBcDJrtSe",
  "key24": "4bNRjC1SrsRF8XKPWbbbmcGwnH567rNJ1AcKNwpMSNAKR8R7SLFShrYNLayvTHG4UPExX6W7SMKSANookzFtgyv8",
  "key25": "5vpae6DopNCWocefrzTmMVBeq3RAp3StNKwRHHmkYXuAQY8m9jK17LGVmCziUpArAcPevCGty6QL4TAKztuTJDgp",
  "key26": "25gTGSkNFvqjz8Fe3zzMWxd5XGA8cPQY2n329yGA7QBpa9DXLkf9SDFQ5yssnEViQ6fAjEu2vV7E4hSqMzL4TCZC",
  "key27": "49aWZ2JnRLyyqtSsgUoqmRqMmxAT5QR6WnP47gxaTQsH2u8kDV7qCGDANxz3PUpRFrcebD2nrLt8EJt8TwTiE2HZ",
  "key28": "45Dyyfpi24dQZyC4XYoFqhYtmgpVc4jJyLztiT5wSfrxiHqVnBy1nJ1pVkk252uNvkin9KyDdnkLJ3yhtNCZMMxo",
  "key29": "4rQwxyZjUB26tmVPCdTb15wzYpH82rSaQPkrS5wijvW7De9ZmyNdD8LzNy6BSJMsCyA7zKr2h2quZ9ViWTKrk5hr"
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
