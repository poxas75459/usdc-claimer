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
    "5EwD3uGXQHqABbLsmo5iqnstZ1WV74wotfrtV9zxQkdukJc3f88kRU19Ce9uqRFxD9Di2rAkaZF87c4nzeHCUuFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35t1P2pwNfApfVhddPBbDpsGzArMcq1Aevw23YDoDHwtCZ16jjorNZYohkpx884zYoCzYvgCpcCRr1hPpQjAnk5V",
  "key1": "3zzCTtova9Zhh1skffPAhoTV5Q7mSVKVw8CZ4boZVH3Eo5A4KTZiZygiDkfvpuqajcFGftL5CW8VEEtsb5FQdKYG",
  "key2": "2Q9dxxkLgfpqSdWgmTb9RNXTpqHv1LQMvD9gqYLPGMPgYdyDEVH8EnSey3x99tTHLV59mNGeG3hJ8Bxtt2U4735Q",
  "key3": "9rQMNgrRsWWqewziGjnmnguEwqNoVmW3dgUbHC7jiieP3qMX4wEcqPkdyMPDWrDd33Nea5FSrAQEJLpzhG99Sky",
  "key4": "2UdHEz2kWBKe4ZDhSiTdaxn9ByyfayPvh8sq9SJYWSnR9dD6yLxz68EwymYwT24XFPWtBZdGkoWc5uiUBmoEWnnh",
  "key5": "27qdZ6rdYtuJUDn9vqHDfBEMdNKrA4Gn8GCxNw1oJJ1cnYqYw65pxkMHxcScMqGQMpkuBCdtqoLWCWuq8HggPNB5",
  "key6": "2FRKDq7TiKHQYCf62caomZMyAzJ8MwUSJfVdSBp4zf5Vw869FB2AoBScmMStLiUPXv2KFzLfvstzvSauCDFvk5xu",
  "key7": "4PEA3qkGv5rePnZ7kvPHgJ2neJoZpBGxgAALCPrYcFfyoZ2aL39BoaekuYJa66ZLK87fAfycpmogrZMc5zPHhAhG",
  "key8": "3LPY1SZ8KTVBjzFweNbAW2TXVnGVuzuZQc3Hyw4uGbHSFUg4uUSdMKEfUc7MahUenWeS919SiA3ouqkqdqtCsXtY",
  "key9": "D2mG5KUxr51gtMLjm2K71KD7WXoJxgMcJnQDt8qR7zZGs5YjEVXMv2yeZhsRxtz7Y3UhudMzG5Jbqfb31PXgX4A",
  "key10": "jBqotZb64dHZCCGmQeytwGYK2m8Ys1rVZn9kiSkSSJ78vJt2YECSKNHbVyx7R7DsHhrknyPJMfCBFfNrpjEVC4N",
  "key11": "F8dN2aHszNvBKaTwa6M68bLzzeRrHyX7fB9iaUJuwHiwd91VT5SvB5BmwJrBk4p4SxkFZX1TqtZGAveMi95qC3q",
  "key12": "2zdMamJS3MN9A995GVHd5fNMd5Q7UZPBpHP8fQoCEgX5oP2rEGhBkBPCUPuYEfTTS1qQSns74NUG8Fk4gMT9piBv",
  "key13": "63JqxnD2kDEdPZfi8FcR47vZ2wEPcuniRRKcLXTJ4isuYjzPekNVgyQbqBdaDVuYFL2PD72G5L8WsvUQPzRpw9Y9",
  "key14": "4GUBZZw6KSo5B3vpxGp1X8D8piK2ZDW2LeXGrbnKKCQF38zktREAnPBmemvE73BwUV3pVfRJ9xWdFr3LvnXT1ZhX",
  "key15": "5y1P548JazSHYPVqfjPyDScvwn6jxKnXmoRbUhXZUtRYCQ2gR92UcGL7jvyf23yywtzXraYXnK64P6MVPBGNEaM4",
  "key16": "4Hqb8ZXWE9HRrd5YeLQz2yvXxAmVfwxtkX6Wpe1o5B3tWZoAFbEkBsDvWpzZ6NbzPbapQYEdnfE19wrkZ2evJ1TQ",
  "key17": "3mCcQ9HPnvCE9ftv635yF2r7q9FCWVj5FrSy43KdbhniALuTZFDybiEM57jzTd2pbvrwENvL8YS2nA3vLosxpGwu",
  "key18": "4CW4dx8ad25Tb5suy4erEHCBey2U9CTWdZpemAML8AaGcEBjkdDoBupewxW4GUPsY5RS7Dfk9wSy5fXwhNvD6adQ",
  "key19": "4mseHaa2wvvMHdyoTZnjbZxekcrPS2YhM8FjRnFiTxeZhpDkzXCTUsN6yTmcwHPVS8tXACs8njF2mqAj7dz5BeVG",
  "key20": "5jpxiucCTdKTiy3igBXdvwVWivUMkrBpBAV7oTKeFzBazZGMfkSWSZaCTGXKvWLkr8XTq8TMGTixBaAvUWaeQFpn",
  "key21": "vgwPchUaT933taXEWyByHHVp7eQnEwr4725Xarwm8YFNxwHZfTX2RYFgphoKB4VLrGx87oyp5DYStBkvvuU3k7v",
  "key22": "46tDDQwGxekVZMXVCb5P2VbDTvbMPyjrESqWrgrs72EnZH6RWg18CzsaZhHJxjVip89k9jmcikEvRdbfj4KSyC2x",
  "key23": "bGqDVJ9GSJueTybiwksJoFoj5jG3aMFZVrwK4T37QLvMaaTFQX2fWaM8HDYjrWSK1tsH8AnQQkVGwLP9gHUdMVy",
  "key24": "5622GygPyAvr7DX21kKFGerRVcmpzn8GQBNvAUxfkPRM3CXMFhEWYPaJchWM9QyDSWryvWfkgFBuotNu8v4LZqxN",
  "key25": "3uvaRpXhY3L3ATeBy4UBSF7yczxjKMrXyWL5J8CzwvM9sQvDtv1R7NfEcugt1HMkykRWN7gu1cPNEVGnjUrTCUKd",
  "key26": "34TGzkJEWtXSDdPTH1MW41AXsUtRvLosksu2c84PMQjdmM82o753CXr5qCERgv2ss6yjBtoHNcoynwVkNxbwBvu1",
  "key27": "4mTi2d7PR8ZW5o179z8M1aFmLddKvmYKq2kqKJccqSXAjPDLA8FPL38nGBuC1D74qnyWnU1ydng8TX5GLM7yT2NM",
  "key28": "61iFHpQdsnZUgWDpjoej17u2fwHSPzgmS8GyQgcSyrPb1qMz2WYEfBvgJDk8ovw42ZXdqgXUMyRUetV38rTnHgQr",
  "key29": "2z2Aqq1v85uqBQADZYywxAAEhMfvsovqfkmFXGAvRVxAtD4EzW3fVHLjxETcVZ5GXtKoZyw3ninGquZTSLdHny6v",
  "key30": "3uJvFTCp7A2GMGaieg9LS6YuHg2tZGUpFsodHEWeQ5iXFm7Z6DhwwkNVpaRUBZCFXXRyTVtcmdMjyKWWPZHYgSLe",
  "key31": "PUiB98jVYdiFEzcpK4cfjXDWyVRcBXTdphRCWTV1djBiCnxNZfeUqvYjqqwJcsaMw6yYkA6FhTBk5CPdB6Y1NiT",
  "key32": "3VBzKeyeZw5Nt8VF14trwntjV1gfJDrdxAUPjdxCvHMe5rEGRAoLn8waURixceQgPg2uFimsjuuKqMjEbxATjKsh",
  "key33": "5mUtSAc7RGTKFxm4NKYLKkXvEy4oURCyZAFNrVJUHckzwwewdMC4gdDvWzrmEkWCW5nzhx1ZPPs7sn1MSc3yXuGy",
  "key34": "5nVWyf63KWBArAx3b24ATZDMmUazVrU18E8afhe6GfwfwjYi6ykFhSh3fvkGsqMhtWFLUn2d2PfU8XxubsgnXvP2",
  "key35": "3KSoiag6d755pZ5jPx7PjcweghPqBN4nJeKZjUQJVKugdXj7tJpbrPrCm8Bh59MQJt9yNifi3s51EdzDmkCgF2rh",
  "key36": "4HNVet5pFjddQJHtLcuTggjsHuAS3tYu74E3dM3rxtFQ8xi7AZcTchhJw7NfaJWGNzJtJEmMmi8e8Vx1FX2bdd9Z",
  "key37": "2bd3W8TG5N4n97EMzXdjCYTDwDQiDd87voC18fPhiALCbEdVnK628ttBVz2tKxDorYCyBgcN3pzrhKeyfifJ3Ye2",
  "key38": "297d4pAxCBHt7JhzMCBEps1A6ybK4QiZy7FFj9gMSW7dhHR9EJEjQRXuEU312BEXaENLyx8LYPihb9nKgwoujrpX",
  "key39": "2z2iiLAXx6niX8KKDAi8e5Eb9Vf44psxmQ62TKsaSTwGrKgASJ943cgMAR85csH39R9UNSXV5JPFLnuoCYFoVjtM",
  "key40": "3TMT27Rnt5j6anFw7tVUc9gzyHCFKLzxLLQPEHwU3FyzSfKXVawjueKKTSZ1fFy6rkuY888tCrX5C6TjuKzQ88Em"
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
