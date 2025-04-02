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
    "2LXE36T4MZbYQWgmWtzSwB4h5XiGrmjziUpky49MGYNjBkRLfZ7ZUjaHjSrCMhNN8RNBZtb3nfhMX9CuBau3YJGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59zJq6ng5st3wBgBTfUYMuZ6cM1N4qhhVEwkfZbvsciWHYwUrcx5kB6TtE8asHcs93LyFEZTohrf47x1R12Vzasm",
  "key1": "gYsD1hdkQF8Cnwwu63aUgozTEVfR6fvid5LNPia1Mo9c5uiF9zH4kPAwsgZ5at6ecMbdhraZJdEMHZL5YyqGssX",
  "key2": "3GhiSA5cWnfhigMaMUXfLTExYsnFSK136Ccrhkz8aT5msH841p7suEJBYfwgfAQMQXyYEiigy5faYkgVbdG58eKB",
  "key3": "66nrsqdXiZfPompVmUSpfpJ81ZUfx7tsZ3JCQnpxn66TsgQGUZaNiw1dcsqzqiCzfo5Dq17wngDjVYLiMfUF6xkG",
  "key4": "Gm8pgGLHY5yBbNmXdrMq7VVCwQYYWcjV6LshXTxJHK5pnLLqQxMyrrMXbFcTHtv9QkQkEh8C5KXpJSrtV5Euaow",
  "key5": "5SGrjHDa3pQ88XWzyyVbYSDbrJAdEPxbWmm6w4mzJo6GvuSfWoNVJPABTdmKKJ3L4rtnQqe3uDR2VxzRAy7SCBMR",
  "key6": "2ZN79bvYrbUpSFsua3mPY9nqDHWTZkxBzEF8oiJiXGM8Cj7eWiQkPVM9Z1WcwdmHEWX7ChMegbyuijsZzFKFos2Z",
  "key7": "ELXSi7XJUdgT1pgYL4Sdzmt11sutDgyvefGLuFZ2uA6DVrTeX8rPJeTDsLHovjA9PEonpenJWwB23phBGrsmXgy",
  "key8": "2AunwPGC5t7etam17PnBvDfcGp1r1iXcBhKu83GTMv9nw4ZUx1owc37CQaniP2B69VVEdVCYJyrK8HRFHukrEU2X",
  "key9": "39k5hbZQC46XYSW5mkqXDJGsrtyzDHhu8vPqutc1g4b2dwxMhumkXAWkt7fUm3dZLfK1V9XM9iscvK2oud7bjebT",
  "key10": "3GBU3scm94dqkCPSvrBZaxavkSBdBudqCR8cuJe34Vs1ndUPRsfn6n8pcdU5rcgAYL3Zj89VmbbFGZFfCXE8NCRv",
  "key11": "2RzRiRYHWowsj2yYFa8W7WtE1dDcqqBvJLU4gPYdFHuCERviDe8MjBNG7LajkrHmLK8VskMHbWdm4sh56BadWAax",
  "key12": "4hUPUqwVRLVp1D2j1MndcRLRQ8hBc12XXHtaYMAoVQQomJ5HxHmPavuR2KKp8T3r4fyWLt2A1Ny361prTRYhkTyN",
  "key13": "5j22RofJouaL1Dp1xuB1G2XHzDGneNDafpJRuMNiDL2oVoyDWrmp4srrXCemvMWcDtSinLmpJuTinkT9ypSWVqFQ",
  "key14": "3NH1PchhpjxernK6A9nYd92G5W1vR9PMZJUW3jEaXu3VXGiUE234sNSDusbaLuSu2cgnvdhrryWjfvkT2WPG1TeX",
  "key15": "3dJSGSoCGSoLagRxFBSEU4WK1mLa9ZHqvtn7Ynt2oHnN5TaETjBDpWtPgdirtniukudJLrLjVKQUauTEKW7wRCix",
  "key16": "3bjSGBUDz5WxRopgDp4aR522XdKLS8fnzmX9WFtK7W9QyY8HyeVLixiwZnsvQGqMij3Zgd7uwGKwLsCZpJxttKUU",
  "key17": "5CwbVkV7ipEQ9d7hhniXvufkHTQh3UBBK5GjcPZoQAoUactKugSscHbaZiHNHGaPDs7eaW127kgQEdvQGxu8h78Z",
  "key18": "41JzdF2qK5xWbwrpoMKy5rDwz1DWmmhvEUgUjMPbpKnKFnykM7Q5YpdZnkxvJt8tFMvbXAAvhTKkvpbw6RcACSMU",
  "key19": "26RULNuxf8r4pbNQbzvBDp8gE3geCsxv8S78yXSQVECPBtUCMpCfL1co6mHn9fqVcseBE6sMWU9Y9Uic9HNWZmpT",
  "key20": "3V53AnV7p2aNUpqnYy7D7EEd9NcMrRxbta8Rs6MWHm3ao9VvzXhxi5s3P5T1eTexWbTNa1xXyqErwdjvrGmT6sfq",
  "key21": "4ytYyrTJJAfeu2bbEazH1A2TbawxxXvHRShiquvTxZToRuYqEtK4xWndU37UHPAKLe2xeL9HLVPxeytFyfaKBoYw",
  "key22": "54gVhFgdMXbXA2Mie89PEL854YGGqfbUduYMexzy136s5WqrewX4DubxTT1g8zum2M1coQJyfNuNxnGgPuGPGRTB",
  "key23": "4sm9EYEHmSosGCuZTA7onNGPEb6uyRh46QBNN4MMU8tjQSopRNwajTPmnPfSedh1xFq9X3Hsq9T4yemkCKecf5Fn",
  "key24": "3ePfXdduQcYGYdFELPn4e3qMbhTnkUqkvNP4pEEjJa7VabUzod5Finvd5DY7CyY5MczcQAJxVXp1MA1ReSQ2qmKo",
  "key25": "4amq6Z5ZFp6zCGoVabKzAdqM9eZhb1XPMCHbrTC92VbvdUh8AnAMqWfmhn49Tm8CyDWTQcLM6qFVchYd9SDBznyc",
  "key26": "5xqnTuQEMh6Y2BuKSFxxwgM5xmFJcy3yQE5gDEQJxzbWCtxPyJtMyzAi7JXCGbjPpNHbdp61m6mx4LoAVpGWTEYN"
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
