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
    "5JPsPGCUMy8rgpPRtDwCDT32EwnjbpupKWZifwDMqoczsxLW6MePX8SV7PtY8MHCrnZhcCuJ2C5ruZthfsZmqUWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52QmFQsst32sbB6kbCkVKdc8s15952yvPCXfFmy8VNjeP7HqxpvsVSQvJBiBVrgedfEDna9DvJv73bavfezCXwV",
  "key1": "4v6Xfu5qexBt5jAJi3TFDhUwuV5CS62yS1Gxe4Zxww9PTbXXbYhHVEuioQoV56fw1LUvr1dn2zB4Txa2uCSVa3kE",
  "key2": "3uAxBp1v7ZdS2LFJxHC4yvozH1zfeLpfk6uLgMShVxWJG8DQ4AUjJMVSjApLjC2M2vjB6B4C4JPRCcnBnkEpF88k",
  "key3": "54eRAfPVgMcfQbm3mYfVe1xzu3ANCzQ7TzSLTohpCHbVLhApbVHd5hzV1ZuPpZejepC73FPWYjPm4ozwQHLzQpk5",
  "key4": "64R1onZzcxzqkXpLWwr2fnxmK7C3xZkD18v72PP8Zs2N669ZBnhBGtj2iz7ENQobYdhtrVhEjHhcnyc2ZufduHsi",
  "key5": "1Vubn9Y3aYRB27tQxAT9FFZ2Mda85YAeZwJtACsMgDojEJrqKUtJSLYTyRMHUgSpSLPC2NNxTPFckDJNWWWHkpp",
  "key6": "5YkGdafsej8EJiZ7KeicAw5WB7wEJwPmQZDAPFURhEHf1JXm3Y9QA7d1udc5tfhhxW1FmpNTeYoeQBE2Z1kKD3vt",
  "key7": "4e1fQmkxS3LeNsnQMjQeW85ptVV8BpEX1ZqhEQRKqftyCDbNBsByCLfbMpxfeDguedTJt3BYYUab1tSMBH4sxapR",
  "key8": "4qjGDNm65Y6m19TkXkynoxD955QVCywzh1ks4s9wiS85rpCQsCkyVjwsUomxr4chgkENVWD3ru7R4saDK3XY8KrV",
  "key9": "4s1yYoRsBMcNdL5rS8qFpXmYtUKFmC8ayYcPVAWptLuc2k2UigK3dTrWdzjijzwQSgGDwmevrLN1tRfnX5YxmeBV",
  "key10": "5En6eNXwXDd7R132JsfDTkHrHrWwnnXhEuWahwFfUMSSNJtBK5XRAdcCMhqbyLiyHzB9AhwkhFC9Q6CmQ927mUxL",
  "key11": "5ZHg4zm5axZzpAehbrnDEKfH8Weh7DVaGzRiD7QRX8StzuqPu7dN7T3JxgkFZ95FF8mScfHnAFBr5A4WksucXGSF",
  "key12": "4dJwFADQoaXkkq8oCBBAC4mCc1no22cYGwmoWzoRWa11tYKFMxzijP6V5LhxS9K5oR7ryYBhwwWAbA42PqQNZfTp",
  "key13": "2qzAAqt7bQp8hhUZtoHLFpy7PkMNUhbxydnHCnEZpcMhBfqvM4BXapAzkTisbrudAkeUzF9ahKB3H5hpCCyYPjJj",
  "key14": "4zA8pckc7Cwcntzfhsg5AoBVSr6yDohPrPKvssSHnec4YBUmvGLETQCxkpGryRcGLQSCZShRiuryEqJT18tX12nT",
  "key15": "5eTLuj9u6FCFsGbzJjtqUQa78KRkhm96NeaJ27WLxxNSDfsSWVhXT7m2JNqxCrBKtF6VoiBd6rhb42ciUUVS2EPT",
  "key16": "5TzxVPerTaKyqcpM4wwzYmqssqgtvmMLwngtGvCVsiav1HERypqhZNFXMSTZ8dECQF1pN3RFetkEiEsqbdQ4n9sD",
  "key17": "3cbwJn8vnQk37hEWWpQdQUcHvyG3vDRSyq7LQyqBA7fZHMQ7He443pxdBCAwc86197397cK6zbCd42QbRVSFF5vg",
  "key18": "4a1Vd9N43uvycxqb7wGg1ph1uHZj2grVrpPC1N7q8iRyL6n2ij4RLbbSUm86hoLup1QjNHqBFnjrsEiCX5guttS2",
  "key19": "43Q2WH3n7LCYtC5dqXQvnFoXRKReCKgB4XQDcL1Zrbrb4cSx1s9Vs3YuBS76us8xGbLQp66HeGc4bW2bk9s9F5VJ",
  "key20": "DMGUcQfvVsLi9Xg46ThNpAU2yCyyZfLYxVhBoNFWVRLGvLoBof4i8NL37Bj8iPTuJTZPQJiLGfyHUK7WBDWd95w",
  "key21": "3U84qyuwmxJpt4z436tnLF5rwMoHx9Z16GF8rRmtnY2FbxxpNQhPRrCoYgChfr6uWtTWJ6HSWHnpcW9WmLv5pddn",
  "key22": "2UE67gyTsZMieLuVKCkg5SbzBVGe5PUSAh98AjWygK5uAaYcC84F4vCu2PrAGx7qeLq52j6zX3VTv5BKnLDcSv3Z",
  "key23": "5t1Skab9GpHptJMGwysUppAeMxD8oYdSFLbn8NUqkQDY5y9ZrLnt2Ex9w47ZicVePTyaFoRpXG15LYiD8QHzhjh9",
  "key24": "3jDTnZXBYdfsRib5V7FuVivjgEYAJdH4zbg46xBzaKx16kUiahReEyG1PkK2djDC3pUiwn7oy7RZ9y35L43iz6Fc",
  "key25": "5hKpyc7XeVdKC8YCTBJR9KPAJ87QiyoKuw1eZYJ25yAZMamGu62Z8Qp6xvYCcBSj6JSj27KR1U4xf2NzY3dcVSAj",
  "key26": "6qz46Gwqs35KGLE3EFBTT2PRnwh3qU9skExeVTJ1syScNecUcZ2ioPYwY38P96JzCDSGS9PVniuZxz59TR73HY5",
  "key27": "4C1EGLu4Apvm9e3NPhp4i1oybMJMYcPTRDQ39JqRnsJyzjDamp3amB5mR6rrvsK2esVj5o54CjUWFmfr9Q5xuiDz",
  "key28": "5udNDkLddyTSNPYnwhGUwKzesArNpEeAGeNvqyvqaW2usKP1RpKCDrJfAATaoJ9hV6PVyCLAbDG2wJJEr2y8hipW",
  "key29": "28VQF7d38BSRKJBnpMpmRu5MFN5E3C2uJcaK2ZN8cQ36ArZqZNNAi8CQfRGauAc9RhhrpzhLWayujVNYHszg5hv8"
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
