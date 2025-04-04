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
    "4iMibHLJ6swjPYpKc9SHyA6HmTKF2JAvbwvKVKcpbS3TZbzWxm2QYQ47ixBatAtgDQQc88TUwqWxstTyTgc7GpjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4AMdRjE3BLqG8uTXn75NXsqNoMgCurwmoYoc99DcdLheTnSEzNkZbDZzPUZ7DJqEwZFAYv4Anp5f45j9LPKcVp",
  "key1": "3a5e93eDxGQsHmuNV385atyFwU7jFDfBJeCDHrukCs8X8cyRLyNxM1KvtnydABGNpfqxiLuLB9wTd68n7RAjXD4d",
  "key2": "2BsBTTdNBdcYWi3m4nMSsBf29xzf2V89bcZZPF4sYYVpXQzGNBSxXSAjxgD7LUiSc4qaWP5g55kj8htVmXrYP8xG",
  "key3": "nTqE6KYUBfEJcA2TciivbpyoQCBmxMWuPqLiyxv1x7TMMosKZKQ97DHwsBH4SWHEPrfG23QUxX4sMiZhAEAZZwn",
  "key4": "2iS6B6zaP3TX3QWdJvAMn2bWTb9mf4CovpmMD92vFuGn8GKTUyoHWWtyfseqcxJQN1xsULPhavkV3DzTCYJUEfih",
  "key5": "2uoPMgXWSK1NTN4ho9hsbaFQbRJnP8vGawUPAHWbqmSzJwo9AkF7fhc6nhJkTYDVjEx8f4VGFaUyJR1r8gYxU2XN",
  "key6": "2RJtwLh3x54R2emt9H7ymrbwC551qeWRswRitHgjfBS9XK9B1v9xTQx595qcGiJ7FTRKDTWKHD13Px3imE7rVUP1",
  "key7": "3MvVX7VQ5CNAyZyUbzrjfHs8N19pWFrezYxq67xM8KWfoYMJJfC2JUeVUPUV6x3bSKuQ6uNPQ1kR2wXvXQT462Mp",
  "key8": "5qxiFgRQJVwJ6KVUc3URqHdJnkzGJ5BqaVdxd3s8f9tTutTEyyk3nCGpjPFY9PPWggi8r33252uLmLdZScB64XHj",
  "key9": "VAQM2bKLkxgJytvTWvjaCzz9EjftpYZvuywTHvgk2Z3RarUvCtneF4DiwSKEdJtcBPX52bcwRV1ro65qq4J9u66",
  "key10": "3t7jWs4PXSrBtpQhK8HFYAXCY4W1TWV5fBXZqqgzsKTsbPhVLr5f2w9hYNsXbbzwyGXjhtB9GWKhDLFzN8Hr2Gc6",
  "key11": "5Qh4hs3YEk5SyCqes3qifYbWPATWT3LH9gXwFZ9SGinwHdoPpPrJyt62xotvBWWagxLweYdCTx1GEpNrQ49pVL4U",
  "key12": "B1uTxjNCmU6DvQmd7DiuzhVQt2mawLZbcMKhyApEMNjYxpTkYy6vDedAXgecxv5fTEX4sENSG4x7s19PxFJkVca",
  "key13": "2RkRVWkQ4CJakio1wT2vwprMaKtjKvxL73GJ5vaW2sKoAPvyRVSWWvcHtgrawfixRMrDgFSwfio6nNxMZYD9Ps3p",
  "key14": "fx2QNdfTDdkmbbzirTxyTFusEetq9TL73gQVqMy2LUc2WmqyJ9cpfZtRerzRjF6Cv79ZoSM2huL9cqRVPQfhbDc",
  "key15": "4bxYz4yn9wxhg5DjzHT4LAEk7tGDiD91Nk7YfbS3YnLXbK8zDbMK6c7poBVyHRvY5ragzZj84BMw2ehkfp2WP66k",
  "key16": "4agTtDji5UTup5PmCmuYGFQYpjmEyqodYL916nRs54jZCKSSZUPDgE6e3jKnZUDR7u3L2uGVfTnnuSQ2ExJRkrgf",
  "key17": "mTLwrAgAEH7GAdmFy9SoRLbfGG9tFmxAoK3ExByoWom6qBZe81wqjvyY1MvYhxjViq49qPE8KRP2zfsQGqNf18G",
  "key18": "41UqvxWQAkCWkrbbN69n9Mti6GWwFby7PupmtBreswM4xcoMJg2RpA87VEgkJrdcsvWiCY7sxLcMZRE1gTfAVGGP",
  "key19": "2EoLDsfwFcu5B3itZRDWQkMuKMSnGiuAC5zvq7i3fRCJ7A7BThBMvsbMKNRDGbr1Rc7iK7Uj6oAMdyC6hRQweCV1",
  "key20": "3gDzwauY6ofddZKsSuExWhDGmprLt4aetAmj16JhiVgr5d9EFqtLnkv7YNMdYh8FfE4dMU8VYUoVV9yKfNuQNF4A",
  "key21": "2KtcsjxMdH8vfEf2hG8Voe5mcxLnDn3LDGVb6pDDM5xVbcJ9zJcH5MSgWYEEdoxKtRekz4HVjQhFFf2G4q1zcDYK",
  "key22": "3fJBaC86aaDUyPDbpq1WtZJGz6b8GGgkmeFgfNCvezLuL3bzvG6M9w6pfyUsYbCYkg5jhvKo9AkThobAYgcnNgeb",
  "key23": "2p22Pq7DZ5yUV5RyvQnaeNvwayXFjuNVDgKaGXreUWRptZu2yvVVS6sPV8ecBhbFjM2WbGPCqxhin1bEPsZKYhUx",
  "key24": "3owxxfEhVCi8knguYSgnqwuteF5ZoDafR8tSLYVn9GgGgi1Q21KVE1imd5SZFyj7JAttWSojLhYq2aRBBUUkDWoz",
  "key25": "5NhfqZfHdgkqhCkQQw7jx9sfELEN7nj64zHUFinCQmsM22yV6hsAraQ5WmDEKbFyyUPZSuB4cbFPDu2mAPo78D74",
  "key26": "ACGYqQhmmTwDFnRxvPhYZWhARhcfp7w7q1XUopDHfecsS6aqKWERvkRnSGdGYvvN5hJgwdoeZSE6cWD2cp4kNB8",
  "key27": "5y6YDhyuUeqVFuCQXJej1nXDpuWRamwRN9JgMvWgWjZ13DfyNDamMiBsStqYZabet1bewqYeRuZwWb3an2qmoYEi",
  "key28": "5REh92v8mJZHX3ZEPQEofWkJtNKbHcJ8ZRKb5UobafatL1fpwedpWbwAyhK7YFmvdrMKkEoagDRwRF9xSKCHKseK",
  "key29": "3yuMFSPAsnaxZPWhBQUu5Cu87ZkpJHh8cj5xnWCQgHiWRAZ8N5RNjvFvqHAtJCooMCe2abd2kXJTrhKK6eKnik6z",
  "key30": "3oM58MTxu8PyqSshSbx3euCSLdyfeGutq12jKVAvRJEjKeMoegse3BpPtSJnZgiqPgzrpEDwRhkyRAbkb9ioz3sa"
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
