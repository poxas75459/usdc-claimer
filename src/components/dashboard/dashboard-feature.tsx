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
    "4UiuNUBwxrYzL6gKLjmAfkPgP7EKvmY4sVmRe7oRZhhWUKu3oUjvT7DLrqBzQKCp5NApepmYqnrgDT5PmGKCwV8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQA57odKuMFKPA2iPNVDHsf3MJ9QqbLdVST1qeUR2aEyfoqKxEedRiFyrAJiPQ1nB5qZn7oc1ZN7CUHsnNZY55R",
  "key1": "26pyJxvF4zJVn1SxtcA4faHQ5BaULReADprYWbPsxoP1H3RKZmRudZ9yMVqxJuPtiAj5nghWvm18JfcxW2PGYLqV",
  "key2": "GUehbmq12i6RL7aeSxK3ZGJq32kXcN5y8X5qkm8qRGzyr93bPfZiD92XsX3KdyY2eq1vaxvGd8eemm9iTCczXwR",
  "key3": "2PeTwckNnHuyrSCat1CdoJpUfW8Gzh1ucE94Q3iRGcGg5EXTs4GGy4sNcZU4Lp96QdQRvDKbaCttRU9bJStM2mCb",
  "key4": "4CK9JAwaXr4zRGHfHMzVEooqmeawpHFHw6EbXQn1rSmfg9bAZKt6BJum65vLdoZkFw6d8crBbNHaiVv5aTt4LEye",
  "key5": "Bp6x2tzSiX6FqLGbetu74i1YmmY651495uEY1mtjQm2R7YsvaTr1dL7WTPGQMoTEPgxmeTpk2XLciYeNVgZTYGm",
  "key6": "5SeXT3VN4K1iTKjhHUcC4Smws1RKtB1oak48TvsnBdMGYQAuMpkBywq4DUBfcQPr7NTJsVyjHLddQd5xU8s7mNP3",
  "key7": "2rJph3S1ScYF6Qf7fwWYcREsU8hMS8mtTvagyiJiB8dt45rAsU4F7LrhoNw5ErLPa52mM6s9GJiDBywRGsTUL1TD",
  "key8": "2xbHkRqn1mG9qM5iuRSXXryWRdLxu4iWuSmt8vCHN2gK2FstGmvaEcFGY31rXXi2QupSG5v2k33vfkeNaJkfJNiW",
  "key9": "49EtsUvx2cAXo6cBjWDNUwq1rcsfR8pia4SdyeQCczoQRjVhe3fYHwbUNbG249THSfwr4aE3vbhtd7t8ufa6K7Dz",
  "key10": "22mzv4uJSKRKYJUMNGDc8g2tjfd4jakgD5La2iSKBmCuER7y1f97UqLkB5GXboVDuw7enamCyD7SgJCP7tmEdkFp",
  "key11": "5W4gdcyfiMbmJz2NPTgtPSbPCRpyvPmQdXUQLdB7LBnwzVs7bi8HsjrZVk5snmV3eo13Zk1g9iRH2nNXZDNVdk73",
  "key12": "3QAeSsBy2NQoJ7JGnRYpX5ek9vCiLLjdJ2YK3uHC4cd3RPNLH79tMk14B8svUhvnbgK71KA8NZ83Wa2N9QzsPBk2",
  "key13": "4h4rz4yhAMEdgyD9oSichaqJqButJhEyt4MZGr1hYZTqNFPFT2WKUvfu5vvJwspk8YWz2hj1auCQfHDC7pmyZNfT",
  "key14": "3M5eTGAN7NcbUEK7gNN91qARsn9YAvbs6Mx1YRGsfXnxjSSeXAMneMQmz38XDDPgLB9Jt4EgyH9njmhosjVwyKgS",
  "key15": "3ocknG6bFij1iELLGs4xRo3TvzYJkz3dJBhtVQeSPRhEMRHiTDQQ8Et5XAjFr2MzXMd6qAR6D2GeXLq7z8JpWwfh",
  "key16": "7BK8zxWb45bRD9GQA6nhQPjDuBfz1LSzrYHUSTLjw3J8zGU5rHL8aMFubZeQe1kj5LPZvaxZD8cHeJza1trokBL",
  "key17": "3mLbg5xUgkowMgsKRjhwbKDmsDJUrubVXq43rxVtRws4GQFJov9A2QvbocpE56HcDAsErgmax53hbP3Gpf6YnYmc",
  "key18": "3ipF2iKcR3MhCuy2MsHQ6Newv7KgRfmPDV9pxRtEezuhtwwXRKc4hEBSx6zN5CUn4xnFLtgVVwLEBPpFcNhaBMvE",
  "key19": "5yTpSH9SjZcLc3YDUAGt8fuYmT7zJWCF46kjwB4Lmun2Yr4wYBgiA57YGjsdtgCyZTgK1QJKDjAJ7EnDbvmBJ4pG",
  "key20": "3k7QSkh7aAzvgH9N9KaWf5sHq3ZNvhFQK7C9YhHjwhbxsmpLGJeVbx6fFkhrcnwvzQfZ4RpQVFBeZFuYFVrX7Bqm",
  "key21": "3jrhtnkmcj6NKYFd9uDAEUdyej9jjyHkjA2GEXzWqdPxtGnzVTWvzHW1efGN8NXK6229QqnEYQfhJ7LXvxwnwtmu",
  "key22": "5nAM4RH9JqB9w5TkomDM5WgMVAa1cmZ7iELhdfgPXd8US34TR36VyaDdNKygZTwUk4PK44rUtorL7LYVYY7jxUSY",
  "key23": "2BspABBeQNNKB2pkHLAyD26pkm5Fb3T8tHfKR3tsvLAYYqBcbdLPgMs1xB4T8x1ptWwzuuLcye4vQ4HQnUZbU2V5",
  "key24": "4e3k4BmvtYowXVMX1s3pjHHF6qox8WeryjwLVRp7YikfLu6kDWoJowaHpz8J1BmZdCa3fxDhcZ1pP6eJuiGPJNbL",
  "key25": "2ZL3vgCKH7MARtxANdunqbxk1UicmHj7n9j7jhcQvwCsKqQCzY9jvPiAHgGgGPCxpoXgwNZdC1pSNZJwV4ufYJie",
  "key26": "5taAQvz6KDBeJdox4XCkpYEiBmUgsdvN8RwjokxfmEQkpYXhuaqhv2wgAWSuLcDLMX2qvppQ71Ni5KQCd1rpnMQg"
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
