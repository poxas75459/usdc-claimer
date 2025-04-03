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
    "35qEuS3PFmQxo6ctC8fuiZLSXpwu2jbkVa9kFD4DyP58Pit6LHddpGgBgi8QNFqeiEdG2SKsgdRUJd1EDJSpKDhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVBjDnDuRsVumbrPm8w9t9Ftb1nrAKXarjnjCuhsCwEusj6C3ZUmKrE5VB3tx7wqFAo7yr1sqvUf5VocZuvQAFB",
  "key1": "4izd7jwe2SjUGP8dPeG48gbeU8cZC5vXP6WFQtHRxBeQVHuKF7r5DosaofSUEjX53zu5SW8dbLRaC8XKCGdqrEn3",
  "key2": "47vygCxbYitc8vRuTZGz8iEDuVUo9baguXtjwwEC3YBs5i7xf2T5Wi6VJyLu8JNSY9e7Uvya7Vpcxvbw7sc3GjeZ",
  "key3": "5N7Cc4VeTJxA9cjPzeAWxo9jvEUn2im2VJdVng1nGP1CD9GKYe1HYda6vrM2UcaUvEfbWZTTTdEp7HJE4aJxHhye",
  "key4": "gqVn4UbvDWYEGZnDksShtxGi7JRUTWCi51YYcbsWfnYVDgv6MivFYHs3USoMVgioYvBE6rbArGdSgifPXGoTAim",
  "key5": "5HY25GS5tdDp31zYTiQN3jwDHfNdarNX3YE38hkqHL5geRcR3FPtSjSqV8hosDFUtcibQ8jU5V7EKSEc1mH9H9tL",
  "key6": "6x5BamjBPR3UrjFKbSPfx4732MCKZ6D2vktCTp8aGtjEKrQuy7rQzkv2wLKyTTR2eQ97Gcv58qDNLfpgPZoNX6v",
  "key7": "6gd4QZKVWp99rxJ26Vj9MQgNvCymc8VDakiFcsniGb2paiNLjNJAAVfiyvu53QubrZSHn8bJyiSMW29jp1VejiN",
  "key8": "SXHgryvcBjys7rwGJHZ1toqP9zbWuSRmhXbwZD71pdx2Bjeo96Laciewp8Q6incmSU5hK8VJSssEJSLH3LEMhbG",
  "key9": "3MdB2FVyEVK3BhpBKtQuihHGCESkbiwSKG3qz24ixoJ1JXqMvCo4bidxjV3i8NftSZfcdk4puKH8GuUVpvvae7bt",
  "key10": "5nAzaT2SgvMByaH1WQhm7jH39YphKXnA9E6UXy5a6Ys4tgUFC8kCnrnN8YxVvVvrbGDCZaat7sUQmrd7VqaHdg3N",
  "key11": "2BSSAEMLa45JER37NFo4kR69T3BetkNDXihULPoxBKrAQa9ThMcGJZ2R62Bs439ZufoGTrPxU4rgW1BT9tsdnCd5",
  "key12": "5syYz2V46ABLDYmAJr6c14miyMFHDHtUTJmmDZzk3HPrGiEiSSmJtVmZ5PdzAL7Hcdx5HXgRaUnZYPgNRkg37kpw",
  "key13": "53fULmtZVkULDCPPVPrWkNGkKS3SJN3WEgMS2noXBepDsaXhuyGVEMkjBFSLNYWvGwCS8ueByXVs7bCmLcuqatk5",
  "key14": "4sDYRgpRrYc8QHnFfs38cbgbvC2cmmSURjG1f6cW5PwPGZrcEe5tj496LgyFJ5SwU7G5x94WdRCCfN3LPVRfmzcw",
  "key15": "3R1iR1sVshmdYCDNQUiWoWw4BSAfsNPTGXAympjeCvtST9ZTX1bYpKG5Zd6GovGFQzsPhYV1NhUe7Jw6oDPvKgjx",
  "key16": "3i3RtDeDomTNT3eRsZaA3C32DgssbAZiDvBn3oRBwZfhtJaDVYPhoX5NAUKd3iYaymUNasDj6JaZVMepSue7qD5B",
  "key17": "4uwySEVc59v897Qb9h7Z7GeddbjxqEfQr95cUrEo4N4kYy9TPrXCr6yZsNrxeG6siS33X1poXSXTA8kd4gnr8QsM",
  "key18": "4sC3yjDZB6gUCHy7Wk4K3BkC6sisFuFkwVKVFdnWGJcpYdtJC7EHapk78h5SEXvJHmfk9Ku3M3MYkeVYDu5YQ9Xg",
  "key19": "2ezvPJ2aJz1em38XwVuGNHNNx9WcbRA9djk2tgTetPA8s8RW4xEHbdAXj3doAN4TRsWQk917bk6JMmtq7vA36Ayd",
  "key20": "3oThT4hNPAvbFfE3iWpUEGgBLVFbvnLjguy9VVJUN11N2vZB4Gk3N6vgsa1GM45UMqa92swx42fzPez4EiuSWqUX",
  "key21": "3R8x7B7hz2iAttVMreTqRhF5fn6hV8fvmoWnZDCKgcJdHtLNKw7xcvak5Mra5ExXd8aXWRaBuqCQLV5ajfBc3tEr",
  "key22": "2f6jqyF94yxDXU5Y8VFo8fkkvcGA3fGiy3ra6fHX15QXZydp7hmW8byKLqg4c2tMpj3V7zAY4kmft7LNSkdDeT9k",
  "key23": "57SCSgX49MZH3BDj1FddkxH91AYAjHpzS6kxccFijsJWceiQ7pucaytgqBbqAXtesH477G4mHyHKyJasGiAeNDPs",
  "key24": "2nZyJDsDnEaWdC4L9jwJzXHD5nj9fdoqcyfJT29Lpa3FTs9Bk2jf8X2x59cfeeeRxLVwcBgixQzPhXBrbYxJN7tw",
  "key25": "Yg139T3u8oPogw8kPhky79acz1oMqok6S82hNXQFJK9LATh7XHqDyQuQBupPyDpvZDqoye4mMzWFocrhr5PgFar",
  "key26": "5tPRJkgPyCtqbqUeY2hcggPbatFJRsrhraKbRPZU7rUMBZGM7HJED11mMqpWvH7Kr2D1WNgEDJ4X21yKcuePQb36",
  "key27": "96VipLt5Q5eFKyyUUQxf3usf3nqGmJjGsfGvtxUPL1QSW89JsZEWtaVocdVhCdbtzSBYgJvv83bLPhhKgbgXz6a",
  "key28": "3QA7zwXn6Ed1Whk8XpqqeGF1n84xJANTb9yCCYtppfeLKenjfFtgkhngL1LrqfXdoQkgYehrA4DNCyKrcgGrStjW",
  "key29": "2hbLmaobTgyCLugLLxiXPQfzdhbTnni3aGPcPDrFHAyVzngZW5QeJyiCeJRYaUHpTNihz474C2GqXYKDboqjcH3p",
  "key30": "4DbtYgMF6oCoZcErWtvKrQpMKLiEXMfWizpFyp2cReQfcT2D6opjcKrcQArFhsZdiYMPL3h24vtcKMfkwTnPFmZM",
  "key31": "46EvhE8pVfuMdz7X4sLKpsUwxbtG5gbi8RxoZ9giYHvQoTAmXW3QDQNNi9pDev6nSd2449P6NzGsHhjHCfX6L3Ni",
  "key32": "SMSgX23EauQwxq5AaZQ8kod639mmLsAo136vgYVhbbNX335DWTJzxeM832ztrSy8c3nsCy5GHJLRQ5vhCv2h59U",
  "key33": "2rAmQWRkgj2x3SB3gzgHS9zEjR5MtGHEoP72bvSXFqZ14UBtKCSa2Y4N7qLDzsQ185brAaYVJ1QFGqHBynAS452U",
  "key34": "5JSExXYL3iaybeRCoK25dydkbsMLd4ZAV1JfDq6vD9dTeMZXXSxHdjJ4Qc5JQYetQx3doji8eUTSKcbeYZuQroYA",
  "key35": "eGQok8dGJkyspjvq78YYoWYxjPwDFvB6VYav83JGpCB2UAU8hCGRf9g2fuYE586VS5uZNb35nDzYqERo5RpJsoN",
  "key36": "4dbaCSfrFZAVRNuauecccHqCg1JJJ2fdPXJDaqRRFJQbyHyjMa8Ag5a3wP7vDC5GgLQEshGM4jtUjXdvMyvbtTRN",
  "key37": "3jC9BB3VP3EAnddD1Smi5YCfuiK1kHZBP7Uz1FzP4HnCZkw8rW9iXwYqmKU4UkX3AdaEr1XeZmouYmYhgBvJh4YC",
  "key38": "4wz8cwEkh1e8QAU4RdcjfFssa7P4ofdhttZ1Z5qLLWR3K8df89wm9HRafEuCzaUtPH1bGePFeZh7svNhXJjpdsZ5"
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
