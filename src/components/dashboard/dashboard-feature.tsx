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
    "xMFfrueKEECm8dR41h9zJZJrJkPcK9gjpUetqNcvZ3mAZzG1bQFgSVeEbggQsMXFjqpF3dNf9i5ohfpfc1LDb3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RrXfRjGYPRa8wBVRfj17WuJkBj2U7qDY7ipJua8mmrNi4EztuN2ju9C5n8WJ9T95X9dM9Y6x5YaZjes69LryCz6",
  "key1": "3cbPaPpCnTTLuvSkEzYugmE1YLWwaNCAnQjpg5nmQGdUBT7aMTBKLs6kheS6pELffwFV7wb4VkQRdgLRC6dZiW1X",
  "key2": "3tprDeKoBtsP1EUL3cBqzRXRTLFdteLL79P8Z5LUSavvC5HeJ2jsX84MTEYdoZxSdMAVy7aMnUCS7XYjYLwNGuuH",
  "key3": "32WsLb2GRVnL8KCkdpNyokeJ1zDYXZCbL9LmRzsPCFUreHY9679LSzicMxPVCPL9UGocbS9hy7rDCetdZBkpMwnL",
  "key4": "3KLFLzLD9HPdRHNu1NPqXmaJjybyTD7rQUjziKRjEiZo9ZXW77o3EmKV2qQMcAvG7veywfLqEytiPeEBmKyfDM4Z",
  "key5": "8Anc9PQG5yyCuPFipxk2NQ9aykDU2U9Ym54BE8F5QTgCDRGF2qMJ8io4HtQvZMcsoE2bng4c52GwMj9N2JQpdhC",
  "key6": "5eveuSynVV49qEpkyHdVMSv24W2GUMyydfAeU5bggTw659UTjUR9XryTsrxKtYDyHtcZpaBxktbnZwH8JSM5Zmon",
  "key7": "2sxF4ktcrJ5z8EwTAuwicB72RjF1cZqH1UsjTHz9Fdwbu2z1aWdmmvrhGsUKUx316Ra3K8gmTwuoZmeBQyy8REsj",
  "key8": "2EGesb3XoDKgBW2BUzUDN9ie9q8a5tY9jynkx39sHKnvXALT1BAuXgLa6FeYRMzHdjPFSX1Di1Zm6VWSqNENUBgt",
  "key9": "3NzuaVLB8YnAAuwdY8hkvnuNurXiXxBnpomMaVHBipN9TQfLVGfGwwNyBjkpE3roFGZeMgc3gZDjMF5vfAuqh6NV",
  "key10": "UnSuxwv3FaFrRh7TrJxJqb3u2TzZvAHk99z5VGcBooBQCcbzgUECxsLUGCJopyq3A1wUvdcxzAERd4EDF4CvV1U",
  "key11": "3jg6tuaP4YZJLz5yY6hfunoGHbgkxj8eYErhHLcfrwFbaci5P7NRfubvm8dEfGArCz6znyamfPHkKkZCToLw2XE4",
  "key12": "Eudy294L1isASo6GaFJNV4rXqMfbavE8GGoEA7uh1eT9Cx4vwHtnP4rznjxuNzwZvXG5LbgAYj3HTPV5qqaYnrm",
  "key13": "E4Q7NobQMB95qxGVUKjTev9Ha37eREk85ffc5USF3SZG2vwDExbRW6epsBwhFquPsZVb7aa4bVLCQncBYaFkLCs",
  "key14": "3JvVwj9TAm7xPMSVPppySCcoAbw6r4azmVD9g6vxMnRWxVgoat8nW6rPzUVQWCgW9vpVgMySJsakh9czgmcdY62h",
  "key15": "2U4AFqAxx3VoH94MJMNQeSgshkwUH44UMh4jNmvi2xaKyADwthixjkMew6G3XCVn6DVD4U3WgijfsYtYnG2BuzHN",
  "key16": "3W1VaH8qz4YzzmaMzgjN3kVYroXaf5HCPoH7bghCHkUuYrSVKe5oJvoYLGowjff1rmz7bKUdit54Z5deYnRn8NgB",
  "key17": "4bkhjavyZzcxsNXdFnhMWSpNmwnXjmR6FzanDowYZJD3vzwFhnXCJ8LMHWTJEvLAUjBLKNec4iYroYsfx9SAby6n",
  "key18": "61G2FwKVAchaTK3pnkobhbm3jNEXbdzzkcwn4cdgfGCJaWPARiW7FNgyb3K7QYEoymJ5FxPFAdXYDVeRQPgqqJD3",
  "key19": "52KAnhwYkverz3e1iQ99oFdMcELzkuRBqFepJLNBjMv5bKf2g1pbpgD33CYpBmpswMmH5MUqVxkbsBg3CL45fMoy",
  "key20": "3X3cNdgXqH4tRFN4ZjosDETYtNWyNFLnpwv1fBUB175fF3r98eGLaV1jAUhge7qL6Bf4J9Ld6FXgtHxj2W8UcMgT",
  "key21": "t6VVPDqgRzKhzXUNyZATc1Lo7zmAsY458aimsfJ9wBJSTbZ89gEGAnYRenM6f1HUhX4vFEinkrLqYqHQGfPXYam",
  "key22": "4tg9LZg2nB8GHxac41PXM3U93Ua4uV4UCNSDZiJnmAoXjxvLxpnoPibepphjNrUkcHqynqp3VAM8RmgmMjxiWs2m",
  "key23": "5DzCiWeQrXWsJSyJtFyTSQtQF7RhBWfgCNeDyfB1ZNMxU7sWubKpKZGb237tnc8ujXbfSyA7K1wBLLVokWNi9jVE",
  "key24": "2it1piymDpurLSyxgZ5WrvkjJezB8Tg7REfkF9MZLrtuLtZqdd2ytJeVb7H3Eyc2dV4iAY37mj9PJGS1BBFgbQg3",
  "key25": "3u5C6DEfWgZvAzzzTRv14ihefVgYThJKBXeaEuev8tYU3Jkqf7xzB8QfRkzMxJYrPxnotZe14r1prKMZN2E1GEwe",
  "key26": "3426uxQjtGtkqjTSUt6eyeUYPnW1MYxyJXHh9NF8xLVVAoPAPxMXqtWZZKJKeer6bwoXzjwmKSG8kRyP5Ao4nsPm",
  "key27": "kcKJmC2MekSdcbeJiaL2xShkZci6GtspkSinCBvtzLBVk9EoHygML3C3y2HabhT6nnZBuze5mDoiScCMDdjsoXp",
  "key28": "LkiYAZUyGhvhVxxgwnPJhxzMVb2P2rHCEiG3HatGmrBupxWX4eFnzhKiAp5o5g3nKD4QWBaLdBrYpb68Ez33Ncm"
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
