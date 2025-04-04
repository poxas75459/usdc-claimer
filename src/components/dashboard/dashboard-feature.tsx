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
    "5FsQaxAhiNkpWm4HEw4AxHy4tdqvwrPrEmX2EWaR83ygE1wpDwJyK3839yXSyKyCtjoEPyoyJe6wmvR2ZmTAd4jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUr2SQ1vc4UC4rjRxaarML8sXfTMJ6g8eQWZYhGJC2UsWfimMsMhtY41giRhDGti6hPPJmT5TJ3jQcXKHtsHMc7",
  "key1": "5Y3NJWCKxdDdyKNbECMsfwTjbFPwtJbsEL3WYTZnvWqHgeDTZSHjG8xvnr3iaqZo1xJBM82XfupUxtkmKP43kDVE",
  "key2": "De4d1gz8TYk6Pu6HYVekyza1JqXRDJR7KxuVm9YRD7FHJF9kgu9PD5e4kdyoe5LkRTRjbn51NZjTJpTPyRJVhoc",
  "key3": "5SZDkaW6Gzu3QZyGHxKTD9gWJVb3Dwn5hewreTZRdypu7sJJWSPVRb5HbXJKbv4BV6gFsd9Sy9CFE2rPzSjLW7yy",
  "key4": "5Eo1j7Y2dLMbQ1qTG7CH5k5AgAZQhaJ58XNkU8NrdY8UNL4U9Y8XLGZd5oW1y9YJq8bVcmAR3sG7NMiAvt2xk4f7",
  "key5": "4DSApdKdWyrjCeeX9xLrQdJWq73r3wb1xPEx57CbpnNQ8grKn4mvjwHToU4hfAstcUQTrUb5e1MkrM6VJ6wnfwQb",
  "key6": "4JGvy8j3ar1CGKT12JD3cTqxnTFdC3Nt1bFPpbqcxG6PSx9hNJ95SeWemzosRvupmhkW4yZGUsDTN26MAZMdFU7s",
  "key7": "5XdB6cqwdGhZrTh9nF4bZCUYJ91c8CvmEHd1WAMjKJLrV3y49Ggofj178qSVd4vrNUgPrs5rNCz6mY6A4ZQkd1BV",
  "key8": "3Hujm91y85jtsdiUeiwRgdTUB1e4FC93yGWSgWLgMUsGuUmGxcQQgU7K68n84293DmXAFiqcoYW4m6HYKmFyCw8S",
  "key9": "4URCHZG1va3S1cK5FwNDSSSdaUJaucEoYd3QVPyNqFc4nfqDGuimXAufgCTP29mvdyh9jd8xEZKGwxPMpZ7dU2F7",
  "key10": "4Way7bkEFk1YEXRpTocEBm21azAs7VoscVipGeami5bDMUfQ9YStb1d1jtcKCiwVWHLCVZJ8ig8R561yEiiv3N1T",
  "key11": "5dGFxYfLgKZr6foqv6QKjJpXFyR7oSgcAuZZ6mwF3FENPF7sah55VgEGPJUQRfaFeXA2uBrJcHNdGZC3Gf2rxfKF",
  "key12": "48krLnpcXnT6LbGCUVMjYQYqfXEMtt7kUunMvKQoMWRRMYHYsLhbjQD7HfuNbqDS8r3nr3JRMG4BsuvvwSDAAwd9",
  "key13": "5AKGk2P2uzFUhWSX7kXr4B846HNjvmYCxWzSCSY36UbsQX8Nq6Tt5q9uQ5q7eactv55kBnWwGX8VKBAtRiSpMx44",
  "key14": "26ivaCo2ULHXX7Xezy1SAM5tKT6N9K34CXt4MWFbZvQSNV9McPWBV1FesXTw6ZN43bJsdzztH8N1nqBurVe6YoL3",
  "key15": "4BDRc6xJmcXkKoDiLtWVuk8ukAAThVwkJ6k65Y1kYFGHmzVge1aPXu7Hd4LATFPw5ndRMBvy2ZzitW7JhxQHP4u",
  "key16": "xq5UZfSWYoYCeRkv2zdUbQXxUjqYYhYxdNnCJcyEFxRFZge3amAcCvK2Yp9Comax9rRFzbCzHN2yLEuBxZhuEwc",
  "key17": "vY6yBGTTeVAMFTzucL6FcDhquxj6x9hxVpNpwKhfRdRFr3QFPKczmCBHCBc5jjXpSkfsTpDxH7ffxJ1qDuV5Uih",
  "key18": "5sieQbTRDnEivaSnJedh6cXgozAx49CrQet7ksuLQoX8A1X2tXvjzHHRqEXKgRQi4jfRu6ret62fF3wUHmchscVs",
  "key19": "3n5MXqjaWjLWNqU4wKaxaVTmaBy4PtTvW7Ncq2m8HLdHmeivptsuvqNwhPam2mcRKzDzHnW3hNDJ2MknUFPc8aN1",
  "key20": "5Z2TMKMLsU42TrEWyUtQu55bNZggAePCQiosjU78NoLpxTYbkUSB82oVTTvVibG6uy7GN2UGoCx3pEKKkrgpnLtc",
  "key21": "61JRhvnPKcBuMRAzHG4JphnroZ9y9jCnbpYoAdrfVphjyEnnEehcieuppmchLLmSdzaoPUGfAutVD6YFgdqwPehh",
  "key22": "3jkwhjufueVSfMMzfauzKcqB5iUAETeXYszRfvRFbxSLsoFujc1rLR7Q9azL8Zt5FrS24JazExXgcXivY2CRiKgw",
  "key23": "e4y8BWt5b2qPAVKuQgyew3VNCh4vKZDG84YRGUikWBFusKWumUFpyRDLgs11XRJJdwbSUx7VAC29BkVpEYeMcw6",
  "key24": "2ef8cHj4d3hnTEnXNDkLxRP5XZTiPueZfc73DNYityhVR6waLbaWh2XtWjLuKZQfMFtKjne1gDN3QfD9tE5Zzmbv",
  "key25": "2zLqj12w6hFFoases3nqecVzVcJPFZ3Ld7DuPz6LnLSnS7QyQR6xditmDour1kD4djymuet1SgTc1Ghzu8VeoUwh"
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
