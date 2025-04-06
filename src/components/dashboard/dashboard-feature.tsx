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
    "3htHkc3JSpW7Wo8LTgS69RFmjYfgt8GtxChqDgCT4Fzgs45pdZNMb8tcqa9gSFWrJ5xoZQRrhucSnBCqeehm6yo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgsSJS2T2o2z6JWBm899t7jz4JP16vWY6tQM5rQv6oH1gnCcuinKasje4CnCFHL13vWQmiq24huE8GxNSZooSLy",
  "key1": "hYdAsgozZA8aqkqpruxsKKDs4w58dJfq3e2V39hxsBVwbre3HG6ViEHoLPPnuReeeSJfEQ7V5G36ceeCwX6V81o",
  "key2": "Q22hV9XUxdB7ETCijZs6Rmw8retfbHAABpsR14BYRnyv5t6isjNJyxYQDVgsN5cVBdYeYiivMojRgHWSyfsoWgh",
  "key3": "5VxEsR6iwSo2kivo9vFe9dHC9r3KdTfr4rbX9ZLsUkKpYA1DGM2DrDqjRc2be1pmJsQTfDUAPBX6aWZe42HtJTSg",
  "key4": "3UxNd4DyqUXyc4D4QEze85XEuSX4Tc2M8mLCKYYKHn4iK6Q4ejcck9m4KxeRYzZEFLoyt1gh2QjR63BQEQAMTroC",
  "key5": "471rjA72AduWdeQs2bjd6dEZkecPVxX5UizzrPLUYEDASkjN2T1Nsd4GCT5RMPhfkLe6WVENBkdTbteptXBUpeFg",
  "key6": "45jytMDS7RCYDmZeLngJ4ZDCDm2GL4bUgbRdngfto4G3D4ahwCdV2ZLwCrQVJJvttxm2u5paAssX7Nme55HPGijU",
  "key7": "2sn6kFBjTPgCZXUctZm5q6caE4vUwai3Ei8BDc92EseDoTwgWgQjoNL38Qhsq2qsvGnKifgF5EgbiffPPEt7xZqb",
  "key8": "4FfTzikUKrdWTH1Hp5RF6P7PAcdLNDm7WoTAXFtmMXf9kEASuBo9Uaf7aygnrMZ9h1ZmFVdCX5Yv45jeu19Aa2yj",
  "key9": "3gx1FeM5rhxUNW7eig6ppyBLqfQpoaCJ5uu9xsvKUNR7guUqZ2b1fn7AVB68dK2CUDNvrwMJWYtyo7PPw9mNV6YT",
  "key10": "5y96QGVvuZ84gp5HKu26J9HEc6EXFJsMjX2mAjsP4r7zyVX5pLhFBfSeDnvzg1F5rnVYLankce16L6sV7znUV84r",
  "key11": "3cF2KaPnh8fWmXuzX3jQRVsXzpw7qSPfE1tokBgERDxTG5yh6cRSckfxEGnMVyvUp7Cr5bPX1wB8rTNA5yWjHJ4r",
  "key12": "4Z2dD6ozWPAzosMw5TFDUTbmUBYQhRj2gJoNy4KacPW6G1jCrZ314ND2MJMzLnSf3nfytTYUDEppRRfFGrpnFrkn",
  "key13": "23ksKyz9UEZwN8ggbYqCrxmNgY7xnwn89sCQF2YJobcu8jqf2bRQbCA6XWNUr2osuRMxXFTGrvKANes3k9BaArTq",
  "key14": "3MKxMdBDvRQWnNWbqozEHSRRboMvpjpnBMR9CrwQYsmjDZyWZ1KnNdW4e79JHm99aVEagjV3qhybAz9wSPZNvXE5",
  "key15": "5hAKWswg62aEdeihQXrLav98BV2wCs3LFjfzF7wH7siL8inYh4U4wkPiYQFypzAJQpMqEDFVyNsGrAfSfKDbrqQR",
  "key16": "RgyvemFER2WjVzH932QVLPxLfDxWN9zgc8pmQAinQgpzkxBf1FJpTBsTyMZVDa9pAcEsJq1ewFmyy2r5KiyzdsB",
  "key17": "3emm77fAMLAvWskQfqdXJbGyAjav1sipQ6jAoXHRPFSAkFtuonhgJDWawyU923qAZ3i99VtPmt1QVqyqUSdkZbWS",
  "key18": "4xKhmRRynJWTM8Bqad3X8MLoYU6YzYw6253qQGzkPizWGyir6hCnzD9L8V9BqEGA8D4Qpihzi2r5hCYE9iujs4pC",
  "key19": "46jZGy86UwGEp7xGKB2NcYV2zu8xD5CYgw7yR7W44fZy3XAPEGtwYK8grkJH1o58XXzhWJftEfNgtb5oEeLJ5ud6",
  "key20": "3wY1ovtJnkExnUDpj3bnzhti8mPhaRTPxf62kG8XV8gFNwFeJ5F2EhqNZFKM196VR4mZX7hZtxMMVBswvnrQCCfY",
  "key21": "5uiPfMiwazngyeE9LwNTuHP4avk6cxy3s7g7TYCwZnnnRmHoArLxqrC2a4wb2mpPqJpG8smhm7XBmfgmLqqJNwFw",
  "key22": "5FB9oYargsQQNzN9ScohxXYmKAa6GARz4iMK1mmpPj51BRjY3o5qqmk5Bd3C8EHZY3QLCDWWthdos31hymXccFZT",
  "key23": "3XoioGRyJRboxQF5F8DmTzzBsLJ5pt3L8LzazbacfmAsofamBP3gLKtmoeKW1yN5xh8fWtvjDW9HqAatddpT8C5F",
  "key24": "2qnjRGpbWLziHpz4kzHWi7MJBstb1gcUMy9wFHGf32YsxKJYETCRrGREWbFJkY9zeUcmeZ6PjzMVZrWnc3GRRPM7",
  "key25": "25ANZL5WcUFVcZuZRDmdiAtaPRRSwQoTbPXD2NWEDd3QokMHxbxKtTUJNV8bdQ7NbJqGke8F9t9JXiEbhCQZBktR",
  "key26": "3A7vKWr813923SjeNHWR8qFGD51SFJDUbSe2W2TQuygWT2Y783R4vMevExUGm2tmRWfN5L9iJPDbKrdNqjTqWnmR",
  "key27": "5Cs7srNbfgshYbafwYTkzSnKmUmHQdVqDM9KhskkzPxRA3n5N1B538dnmT7SnSa3GaP6HWEUfxz9GtyHzswLcafk",
  "key28": "4qJZxzw5Z8Zpa8biHRDKNE41snAnGGcvc7WFoJAYc4Kzju57VT24ZD1sQYuQ52pCfvmmd4pw9GLKj9PYkHZUBoK1",
  "key29": "5gGDpBNSjXtroKQheUtTQtNof3PcE9Un5JpC6eHvDmcz7Xs9thtywDY5YHYVhknQrHqirLFsdnrWAzD3dLUi3oWx",
  "key30": "5bhycv998ehuZ9EZCFG4bv7rXdMK5BsJ4Th5yj5cS1JJngMQ6iRS3iPFBJgXUfjKq4bmfFAMKwvgP1PJHd5nWgPJ",
  "key31": "57iwmXMNQtmQCZfYguE4BgsASzHZsQGox3EPYNY44wwYTs3zv9XRDVSJvSduxt8M3Dntki3NpgvNAJ3n6AAEXZzK"
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
