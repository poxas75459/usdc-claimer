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
    "2Was4WSFR2R1zVYFpygYhx7zDNKtrn6TBJ5r8X2qvQX5zcW3Ay1CZaSMPTTkWfNgHNCcdTNjjFt6f6Bh3TsLkLEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7ZnWZuDk1N9zZkBiokA2gpBmhiJgyNCi7G1vMkrBgX49FM5owNqCqYsVsLhUSDhrP9WbHgb1gtpo6vSBbrw1Ui",
  "key1": "3a45qA1K8VJZAsfKj7i3B87CYwngv4FP1n6B4JVSjxxcNaA8oUt79jrTe5LhhpkamGHxpJmXQXn1RqyNcgCUnTfX",
  "key2": "26fcotB3eYNSaRzt7amK7fvzReZEYBsVwPpGdsjgBFj2jeiq51cmkpD91NWqy2AGbkTgCP8P5oc9pjwi7stVDffM",
  "key3": "5UUr76HiBsyL92NhrrRew3iik6Z1PEgdP2RUiUfRjCJp7XNNVT6hAcn8t7dLL3h6PDDBXnMSzh2jcwF3rgYUy7gm",
  "key4": "3FuDUvuUdASn9ZsjjThX5ZDC55mMsQxG9ocwuwXCSbMz8hgkvVKRt1BAji7xaCaTRMCa2Y68GgtGWRdhP5yULssP",
  "key5": "3HbP2JtoWRtXg8V5pqxrDFsM3u6f6wPTnuxZb7CdWjM93vYUmv95nniBd92Hs4V13Yfr7Jso4FjF7t7g7GK4Q5BE",
  "key6": "3wbQ1ykExBojBRe4riU7E2b8yE9deogXcxiNuugZP2Q41JTBpKxzKuWXU1FwnGxJKrHQxv1MJBpoaJu8cUeUCK7q",
  "key7": "2HmX5kQCVWZzVcsEA1zgssZxwA9gx5wF4cXC7tTgoEUtoqTuMUwKHSsDpvKP4oTUcows8TyvGTikVEW8L9bihtDM",
  "key8": "2V1FoLE6T4tiuu8eopfYcHJ3nL2APfgbh8rDFcKjDDNvD72WCpLzz3AEpiMgvdhTYY8w5RksJi7sykt5RFqp6WVw",
  "key9": "5SJTVe71eQ4SVzt2nNSNtWJ8j4jYufVG6GR7QfVV789Dy2tmaBbLxFqvwAC3yYZEJTQydTaPQbLRYignRX57Cpiz",
  "key10": "53PA5LzUF9qBfAwpSBX4jiE5cHRiMZkGSPaVDJJZY7Bq3c27WwibjZLHweGr735WeMVQJhxKRmqson63Yj5qPANd",
  "key11": "4sBkGZBvPhXMCxtEEZGxby7T95bccSjQXnJQQqyF5QkRXHiS4Uj8Hn7c9JFEpMP2bzJngg69K88MhSHeteuUEZUS",
  "key12": "65syZAEJ6FnLXS53uTEgE45aiq4XUxeLf6gMhc4KLLsddDVdZqhzPV9FPvBA1RgWC7djrKTcET1kD5pzBQ6GaDSm",
  "key13": "2Ta4eXS3b9uEgc45WyWLPtG1MCaq3ubh79LiKFT1pfVVuixyNirEYdAtwEzTinA8QaTtnAuDxDj13hZujHtP5mu2",
  "key14": "4Gk1dC3xPAZ51xjJtiu2L3dZTZ9xswZPoh9PcqJetd64UwE8EjVUBdYqAQGeNfWce3Vjiwfwgn5hB6QtDci1DcHQ",
  "key15": "2syaiUPy5VKBBsfZDiydQW1TGfWsaXc1q5YJAEeHwT1qPx5nSDsDKYAPEaRFNSczgEVBM97NTMpuv4yyQvZ7EcMj",
  "key16": "4Cmk1fr9bnagjrvQF5ERr1whp3cEvuK2zJFrdFUgKUoP6Ap7JcFBMHB3g3Lb1ZMXdHxhxWxLp2jTF7UvEJVP7PHf",
  "key17": "4mf1KS9XL4WU6FGxTBSbPdXHZZXxiYMFCpexrzLySATRUrSVJMhD8QiNNuCHCNxhoFsit2GpRaQCgSETiLkgR21o",
  "key18": "4LaKsNeyRyrFjofjo7CRoyXhjnrFUiKYApxVBsBtXVCmDgcYiKxdHX6SQ69G9tykGUx1ezuNMiJRMaLF7KjUar7E",
  "key19": "bhTeywvTokQSm7sCE3R8TaGUJYCnnK6G3tTNjbPJvEHuL8s8kR4qcZxFRpNsh1TzpQ8PZUnUcdqRVK6Qq74UJgQ",
  "key20": "4BNMyoMQq5QdLAwhXsJkW43qJPLqUyXzHbmxmRpZUQW515pLhdjJKTQNTN13aYUGoyd6357CJNjbmbweQQRFQa7E",
  "key21": "3eSzFV4c3tTxUHMmiGLE3bZDRFx4sBvn7e8gNrweGFyEtG5sjam45yXwaHyQSE7B1EALz2qwy2M69R2RmLkvdi6q",
  "key22": "53br9fDT4i6tNdAiJ9eXdKQQ9fxYkRiUkPBj161ouwCMyZDUeChXfSx6zipHnu5e61qcyH9DRkQuAokA6X3tLUZy",
  "key23": "tCe6f1W5FV8r2GZDhdCrATiLkgNs5wANx7hXsts53omL57L7GTUANJqxAStJVBU4tCki5MAy9hdBQXUGm9ntwY9",
  "key24": "31Luj3eH2mH3Zjz4mncGcphRRneDDC3pkbsfkQ8k59UwL2YwriCZQ4RorSygj1TdvKEntkbDSoqJvFpk2efj18sJ",
  "key25": "5mZHn47ME8t6tPPXTkxB3goNuA4HFfY93NqdiVxZLj22bYVSqEGC2S4FN2hy9QTXep4WBCTkZ1QCWek44bXT8Byt",
  "key26": "5QrotMGtKcK16YUe1GYebWEZuF1Dutee2bTXU4Z5TAfGXVFmKam7DVS6254Fk8Njtzbr3W6KHWSpUydbwuHfQgGP",
  "key27": "2MkzML24Bn61tCsgo4xQWyeAAmT5GjBGmCND4B2SYneKXqVhci4Ex9LmBMRkPPXn3ZGTjn1fv9i6vp2tDE2CKKnn",
  "key28": "4kx6GdzEK1PvxVg8rNkE6CWw9GdJbJLxEFejb4rc2a3wsJ3CN746pFDV8pi4hV3PaCB6hgkCX9P5pGsDUog8vkKq",
  "key29": "4BApxyEuxZiFpQwwqutkckjsg8Zyqss6yPeZ21Ng63L5jftVPxi76fgxgYhTBpqE4vWjGEGfRaMhowYMQ1cPoMBn",
  "key30": "65in8S7uMPWbLQb1Xq42e9ozumQDHAtwR1uUEUj1DyC92W2kVfat9BDVW1gMzhSK6gEA66EKnsYkFS34LVwjiSBL"
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
