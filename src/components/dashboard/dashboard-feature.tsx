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
    "fHh96TB9w61KbQBHCDjnao6ZSNgJZYBj4kJW5tXu9bdarqbZaJNkrvrpgPytPSj4r8bFAQaxk69VCoJhaT6bD3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515XaKP2AvSKZpdLCguLV6QrRtc8uqAaZhFy6xmiMF6fbJREkeQ8NoCioQxLLo86zGJkSTQpEPBxrTjSPhtcZhv3",
  "key1": "3Br9cq2dYqaL6niuys9G4Sh3sYc3yEPwFZ6WLa5uevvUJ7KjUVZgWPEgxijufjxQ35w63BWzNA3TrFfUyydZ5G8C",
  "key2": "4cjQwhaAY6rBnBpKzctQoNMW32nsQVDuSJNQF33jx1zaxgewjDHLcsd3N6UwbJdgMJwCWGim9KYKynQThXdwnDRn",
  "key3": "5FiVv82Y1ygjkQNK1RuJTJC8AypHUPc17oWN6QXCz6aU9hCVwtFzSVjFAzF42M1EbrDWvzjewZjzziKRTDQkJAzx",
  "key4": "2kf8eJGrSqY1pn6khBtiRs5WChpWAP3KWsxpwn8pVLnQNwDyHGM8BHWU2cKqZVtZGtFAjnJxgTFfdUPmxSTWuZtk",
  "key5": "3BVKkW4jHgWrW4wjKMQ5vivHLAgP7JKFCF1hgpvbyYVRb6nqqS3BQuKCScUn4HCsrDeBR1J215QZnn4vqysYhd2X",
  "key6": "2Wo4T6TPN7PhMnMsaxUR63AvctFcWtqAQ813FsVRAaXJQkg9bxdYvmex4tCPUJ2et68xJtzgLvyni1358vhfeZKo",
  "key7": "QEiTM6rzSxqAkQKCQBsbQ5TXiVgNewshXsEnJFRPG6sFK83XejDLoBVYbBKbwKoKnbfWMXoeukEVBe9efC8Hmzr",
  "key8": "2yM4GNVBZeF2Uiq5pN91NYhw1agateF8q5VPvQnFbAKx2YMPubzCZ7MZ3yHNibCi4wfiKMDtjmC4biHjRLaCNBrG",
  "key9": "2ALWBRP6v4emZA72oWP1L9Bpc8r16BA1ekgGntMpQR8j9PUmSs2Dmmiv4QZFMtpjHkpSQT4f1EitU8CL1kJ2MUsy",
  "key10": "3dZvBNfuF9Ds7CXAKhqJ19UknfCDyvEMSM8FvE5cXg2kw4xqmYAP4bVbw5athUFVvqgmMrxawk2NzBsCRURMhVRs",
  "key11": "3AkCLjM2GdJL44cE3fqLitP96m1Rnm69gM7i1Sp358MMQySvEgK9NQG4xfMR4S227ybyN3y7ZipGW8oHYgnYZWem",
  "key12": "3DLPcbrXnZKNUk5uyh9foT5PhH3ZaM24BAhPuRFjhGvYinzJLU7cAwBm9YJd4kJ3pfi4iNmHshcHHaaVwCn96FZX",
  "key13": "2drruk4Kh2tC7nJKDU3chrFqATUtidkhgXUWAQxAfSRFPR7QRX87Z2JfbM212mQtqCCrkQ7vRo6ZjTB2X5Ey67ny",
  "key14": "FgjnRPQFW5pfEvmwTvgrMLmP4HKpC8PidUQJGym7PdSEpawiy2Jjfv5okq45AfrLYcx6RsV4JGPzA5pHeeRPCN3",
  "key15": "i4BRDAQU4Q4vEL8uwqCDKt2wShaAvSqtVXajp1Di6z9nMxjsusbbdFxZ7FPS7sBUdd1p4FcqCd766BLmNG5pXyc",
  "key16": "bZYFJ6VekEvzkXNCy1F6ZVAfsx3BM9R6KGMzVxv8Tko7yMPQVNh8vF4YhBZLGUntCmn9oE4eJrr3jx4s4LGmBqY",
  "key17": "3Ck3KdvU9i8GtZ61GvrH7K9cHSP9gLvQ2uzoSoKRXQhss8aef232zsrJnzTuqMuh769pbafGyA18SDHVV5RXCNEi",
  "key18": "3TBaGEA5qfgx2GX81nHDDNp1EuQsYzTroPZ5qox6y7ckPvn3WAp2CJnDR39Zz2QAgKb75JedGhtpva4ATTEXWdTj",
  "key19": "4WhiYVeqRFK31zoUhLbJkMC64oWW8y9B6RJsxFrmhpRfu4gjQFRmh7ZRVZmPwzJGfXvmFdJc8ouvqTsA4tP78wg7",
  "key20": "4fiNnFK1XJ1N5Ti61ry71enqBt96VHR7aBbzmQzpk2K3b1RSh23td2JRJLq8Fhr4pwHywEXeah3wqyfYBwFgFGAS",
  "key21": "2Ju61UDPZg9JqUPpMaWDArXbErzJhY3UfVWbCiEnvrAwebWXjtTUXquZSEJRVBQYcVP4D6VQYMounH74Ui7o112a",
  "key22": "5Mqdv54nypZwc1q5uhNSe5N5VYXrKDooErx9Q65RQXTgXWvQvvhHvAxU45WcVQSFmwKCg9A9s16Gj6wpVjNsg2SS",
  "key23": "3bY34PYJ3LLC2BAA8Wt3B7X6gxDuELYWJAC84gP3bgePxe97bDDGcsvzybttETL1g5UYtMb5D6ewU1RtKVdEaAUz",
  "key24": "39n2gHKKaNpWzUBcCnYMjj6XYtFBYemMLeSy26XdeofFBhnbn3ujMo3eZHMgzbpx8Z7oe4b9Qr5Y5dSwCk3sSkvH",
  "key25": "5nLXgRHGMNSrpLqmfMEpBarnLG96GXBgTWR3WSFW6Aa4zGyc3CpFV3Gk1MjHBfdcZQVnBLZ7QaGP5ifwaDaqXmvr",
  "key26": "2DRf7d22QQMnJMwGCXdsN8rhwhoB5W5BY4YQYETJVdMTW9MHbuEihJ2a16FikQW5wcjzwxEU6MCTwpxJQqfKtuEG",
  "key27": "5NL5MovVFtecGrW8LcD4gwQpf7bTGGa2hSBGg1Hm1B5WaDAqzeKXENmPZ39bSmAt7gn19xAnow69NYoi9uC3PxfP",
  "key28": "4f8i84n4PDb2gvu1TniJr3VzjtmJpjpjrEaVi1UqvMhaMHeGaifHZUmTisnRhXRETdkeemqLL2DKNGk13w1Jir6t"
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
