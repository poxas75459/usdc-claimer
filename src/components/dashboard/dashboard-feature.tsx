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
    "Bz4o7SNxJt8qBQRkgHX1cxqmKaweqbSb3D5GFt18fy5BTmiASvAk1VH6YmHsKQiJBPggb9vJFbTTsnLxTMrcKvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jory21BLZNRn2vsQbn36drkVsCFRjHJzzUGP5sbWbvNZemmojjG513E4LTuiAGM2isACnm3X7RVHe2t122EvVpu",
  "key1": "2xWjYpV1MRGio9i8jtBHFMLWQHXm7EaCxd9dcyZupybbUXS4h8gH72XS6Dee8buQJzQTW37xUsTmwpEjjBb8nWta",
  "key2": "Wpa5GfTfTe9avwMPircEmf27F1dceahrDczDF8RtzbwN39WMQYssrXXrt2syirJ8jSbXMzX6VjVRyyNZNNeDoQu",
  "key3": "3tTsXih2s9yRZQMoaSLpco3gLyjHfPM4PKo9TzwE2wF9qks4XQrrpWq2xzuLyoJPTdRAD5dMhEy77LJxbsn37Sos",
  "key4": "4Ycxs9yDJp6q5Dp4Jo22mQLa6GPsgoVvEmLAcjAowzzuEFkb18AEJ7hLT5rUe1cvCef3XwLnzU11qM37muYtGFEf",
  "key5": "61edskFJ4YoxdbErR5ea7EwzpZSxHca1HXm15Khgc678GvLpCpvz52bj14Hot9b35oc9JhpadKX3a6ySCzdT1zDL",
  "key6": "4AFM6sd3GQf9yTHL37bLyAzDxyuzdTimwzZETHkAGqbKYAGb2bHSQS5Qsnb2FbjoGofpZG7fPy3Ke19nNjBG6G7B",
  "key7": "3sn6TsJadvQJUx3hEByFV3B33A5Lrt5aiXdTESwWn3ZeuhWRf3Pw4mHzDX82zMs8E3QtvR9RLwy4x64pwYCfxKik",
  "key8": "TvUybZZ2HmNnLDsdSaxRNyFCpeGRV5h9psNCtwdntTDgegBck99ob3gGbMFj83M1cQGq5z9wQn5csRMum1e2qin",
  "key9": "5LXqiMDrbwcVXZZcqjgoSaDamwdx6XShZUTzQPomZB8EtUmNUZ63uYmECMUrDxgDQeMoKDqR9dKwm31v74dGHkaH",
  "key10": "2eF8Z7aasH43JX1kXSYpUWK5Uq8UU9mNNNmPfBDeDdu4bXr3WLUbgED3JGka7NBfvP957qga1wKg9jn7EstktUuj",
  "key11": "47mc84gtZQnzGTdfnEq5Z5ag5KsPQdcSLebDTc2CYwznm1p1KV1PMmYmKntQNmQHgC8M8T9ccwwjZyVoFkpJfwSA",
  "key12": "LThKqPDnpNw7oTD5fgdQw2tUMpw3WTeAxHYQDtpRgKC8hdYPxLxgDcJ5JHV7vq6DkymKksqLKLZL6S7cPdgeVij",
  "key13": "3XhM7xqfd7RFbds1saE489QMswDisWihkX8bbkUG2oxXUUDzuvqv9qrp1KYXWGL9FsCefQRoLQCpSaTDxC7zLdZk",
  "key14": "CWYFDTt7WGZHsfcH7riKEiPui1Ff2B5biHbB3nauCdBSHyyGUz9aTaQwHrrsQRfPjvPMJvN3AGSfDaqqjeTqit8",
  "key15": "545kq8zFRXAAKwBMgNG5oNSFZfrktdGkGgndwMsJcc3yVMRzJ4CMfHNqo9WLM7ofCjRZet3QRFX6Vr5ftYvSRC7w",
  "key16": "2TzCannSiyk1Xc4mVTZR97tjDeUybkhCxe8YfayPsQpLbHSNAdn1FTPBHcrQW9VjwRF8EkrWGuHtQzXaMRpxn5xm",
  "key17": "2oHzf9dS2ap9RdVz9eo8bJgmC4gV4PEjZyjDdim7aGZoQHycyWNYKpmG9emUuyH6gMPvTn9ZdpFoZ9TGaz4hfHhK",
  "key18": "4uTBDL65cztzYwfiu2nq4cvBtu6HRroqyehM8pSPo1gTARuY98VgFiDqrr2vwDwqho9Z72H1ijtZdLeR9d2hkLtb",
  "key19": "5Hh1kzAut5fx8FJmWsr5ifqNzqKC5f7izW3H1Fja9k7PUwJYvLJc55yhSTcomwz19N2nLPtjgA5PipaS9WmNrtb8",
  "key20": "3DeHKotthHiiveybZNsogG8VgGHaouJrq9sREBm5ihEjEwWMFjxNtF3i6H4KfNg7PDsiBBh2kwGvcFcxfiAQTGde",
  "key21": "LVZqrBnS2kdPkan2MQbpdYWx3Ja5tCzkQ47tNix6DEUVvFFRUPtEYsmiqJigKakQtYfzwocQnp6um4XRQFn58bx",
  "key22": "5Bx8zFXV5ozPjvqz7AvE6ZB5V5zcUyQtrdRfHUnBMn6EFWwJs8HAZ9ie2gQnGBsbdtj55znFgvfPszu8QFS8Y1sX",
  "key23": "eU5HWvZ3TiF5TNjnwfNdXGZ8icdokFrTGdz47Lv3EFD33Zi4qJ78SVc2gc8hruBmgqaYjrZNEWYxNcgFL4iqDE8",
  "key24": "67ERgpxiEeqzgXewT4heFq7h6g37ne1MbbFMnLa9S9aMLe8JUEzngYyZFDZQETfwcA427PpEXKv4qwBkwE9ksmNj",
  "key25": "4VPhSL94QYfSMdTPehhL9kMDpmuxgTiMJgf51EPzuCZ5PCrFCwPec9oD8FhmkzoXZhrFGZbh8AcV9Nj4Z4MPk5sK"
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
