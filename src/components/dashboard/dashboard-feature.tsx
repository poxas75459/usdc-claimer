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
    "2hvbnadiTFEcifgSYtN7W37kFmzPYDC9eJ3XQ4M747xDKGcuyhFqLiyadUsHRSYs1GxxpSM1iJDdNRxeBkPHEn88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YVr5jbvHs5zWrYQKLt5aZ4uXSPvNmcMBn1pBChTY4rN5pjLzpbGY24NuzpDnWHHK6canrQNGryxumYZa2gZTic",
  "key1": "2XaEPDddmWzEXdfsRc4uoQ1sprbpBH9FDvprv6eNt8KAvRt1s4VtT6KVQiD5g2em1xjpzqmwoUxpT7uA2KEEHbVg",
  "key2": "4XZAuZRHNeBxohyuGuW4x2yBTATR3iZXPxZu7dTwAxc7Ng3k3xarZMPFrUWwvkYignkotXewPYtVUeVU7DohvZQd",
  "key3": "5sZQjukytknPPUUrW6kXYpBKa41C2VEHaSdzhhAuAN1ZGCHDDRXvUdJUnNysN7spKc6Xq3xypsZYX1dBpAn1qvxV",
  "key4": "3hMakrvM8gMAvB5j55Q5PY7zW6vmy9iSchCJbugtRtezZZg2noxWDU8goFXvApMSMkjkr4pnjqa4zuEcUfsnYxSA",
  "key5": "4vnHGRZ1Thrp48X1bsQKjC1JCVwji8Q5PPc5puwTH3oYWxvp69Zkiy5RM7A1JuMQHriNZFseBhZ7GWFfivsKjCz3",
  "key6": "3XJQjn1NH22ogv35GmqBa4h48NSpvZqkaMuMVfpfH3vvWmYSwzdfmdcobNkxrvhbHg6UWTMALUcXiBMZQaRknPCr",
  "key7": "kZ8LHeAxSnqUYqVfKqdFVDCREhbr1LSAGh6nvUQExB5F88pfTVVJnHSUy6EGUvEMNGpK8aq5SNA8gKcERxrkZ57",
  "key8": "4bUX9jt43vHL5Bg4muZyafTbMfsigM9ZQ4g77uqimPCtomf9HYmkeLDihPdaQhPzLxixDatuHMXEYHpabNgb2zmj",
  "key9": "5G6qqrnuSUgLGQHTVZaZGxjkTKYXHhf7VF7vEMVZPSccsvNyDp8dELpeHFpNg5xjPuAKCkPKuk4LL1VftepNymbb",
  "key10": "5XXs1nZQ9zCoo5zxkuj91L68rfshEsv1F8mPm3mh6WZb4pfmK2UpVxssAjysyBFsJmAtonrG9HxwPFe2g1QX5PnY",
  "key11": "f9PZUggHdnE9xoGpnD9TU5VJwifNLBQfikUVUxyUq6FSJGizrZrJXBJWPTjH1DuyTACY9A9qnhwmERAFbcJb5dA",
  "key12": "7X89g7zb2ADMfW66oKe6sR7XLpgzMmTgzR3Y8Tjfri1bAweQK4BjTN8BpdCufnCsySed1AVXNmbD3e9Pcy8ymWk",
  "key13": "4mbPx72Trd5Yj5HpaeSA3KxmbeeNa64js6H9yJRbfFyrc2dy8qcKKVBTkSNMyQxK3e9xwGcQYNyCDkCFuMbagMTs",
  "key14": "2cQ6zGBKbpR4MxLpALoR851hS7G2RmqjUhuBFjrbNhTMofm8aDxwyoqzWcYN9Hmr3rURZL7p8cXJf2JppEvTirFY",
  "key15": "Sxu4N2aVpRSbHHY7rHzvwUFRV5rzi5EYxdnx4uyPBC7Cn2wccSknhv2Ag78eKi8EYYxbn1QkUSsacvZRLFCEefe",
  "key16": "2VN5fYtAVLtGyzGGY6BRknY9zmoRmgHZExwRnhrUNqjZXRRmQRhfMrgtFDu4s8JbfCFvMb8yQX2JH3Zsz8eWKckJ",
  "key17": "22m1Squ8ogPitQEijVKccwYDVTY8YQwpCSadYFaiS2X7oM2eYMuV3Bq6d2D5vgzod4zn8KTHhbVrj7DxKAtSTN9h",
  "key18": "618qKHyQAjuLt4NGwa5djmzghAzEiH8cDbdBBDrDxUhQBKcnFs2KNqv1vjdtaVDRzUGubqxia4CPbX5yEmQ5ifkp",
  "key19": "4tis6Tg6fGsbYuCAtb5oAx7Rg3LkWY2qXGrAiHmCKEzc3aArnTVS5nQqHo7LHNjPA9aThnnShqL6vtbkbEti8oan",
  "key20": "5XcPJNGn1u5HYPaGCHdVfpDGTU2KH2216uPumv2RPpvNYo5jkENtuAJ5dWsQNNaGEGxJ18Cf5JyZhgBkgCLPTt4F",
  "key21": "4e3BpwYVcG2YsoBGV1Ma3pL2irafApEcfWUHyF8ySWt3sYMtBSFXsL3UyVL17KfawfXh35jyNp76wmC51yeMdvF1",
  "key22": "qy2ES18VEMuG93bb2kbTR4kSPYhzboTNFeSQwCwgAEiELMA5iVYpidkc2uekzo7UENmDUjXiuphUmpoD1xrhoqr",
  "key23": "fmrBRJKTnUF6Ff6RZhLq2vy6Xuub3YqZr774oUSAciu6LEbXUruUczuwJLLfPfF6UzrdbKTU3BFi9w5t4fpq5ea",
  "key24": "py9bRdAM8E4bcuG22KRv1E6EuGk84V49GZC7smCcu1FqR1zpwXDPMwxy937a1aH8pKYvu3ieQdrPzwJ1cuG7KHe",
  "key25": "4WDiG95MjSKQaUs1fsZTumXFcZ4DwNDRuwGfddZrfiRjPy5dKzmMexvnPj4J9UbSAZm7YAjjcV1fpS4kKB1RxS97",
  "key26": "5u95VP9jyLWvjuKAHoPBRGjJa6Wsi4Qi2i4MAKJqZTL2MSyR6d8ffuUiGadWH71LMQCdYgFqrupSviP2rQnch3X",
  "key27": "64JWLxj8SxUVvJPA4DC8qLrrWMsgiKqjBFj9NM6HQZ4BTNog9fufc9ZR9bkGrV6e2nuKDpDaY9yttJABjEX4m89G",
  "key28": "2ERdFBFnjzR6XfrW18HMf4KxRhXdBx1T4T26XtFjvcybhCqRRuWRae2NBCx3EVbE52nimhSd5FVUsWTLzfkhejzt",
  "key29": "2EKWL3439KZ8m2Z2YwMZv8vap1EPgDRQkoX1XX9AR95F6GxSLNYdniTGPvtgE8gfFW6ZkwJFapJ4rnQECnMBgWNH",
  "key30": "2ru6x5d9jGpJyBfv34tCKQPDQ2mhZUKxUs2o2uiog5uqefHrcmKHZshaWHtaF77gJfdVomDPkD1MQ4FxgiN7svyA"
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
