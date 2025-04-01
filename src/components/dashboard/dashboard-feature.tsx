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
    "2kPXJzeAKLHYJoqV6Pc4mBXQYYyP1FD74wGpTH4apki3BN6URxpVSJwJw273HN67A4jWC9ceXNE7GarvEpE43Ytr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aJDDZowjYd65uDcDpwoQPDdiE2bcYgH4St3Pvv2evbytJqfKDVNp82bLNfHfkqdZXsJowqChFfnvntKUsvzXmwh",
  "key1": "MA6Qwj3fbQy68FgRsiT4DqYMk1VtxHNa6GFpva9rJvMYWxyr2WzeUDwVQytE69KFdn7g8fB2Je5WegBaRsbQ6Gp",
  "key2": "4Pa3mFwnnuXQeEmTPrmzxXe7cPb59aUrYghS6kG5mXm22tyC9bLffJzhCA6i1bWxVi7HmfFqGcFJPmCCmYnsZkjA",
  "key3": "64nNzLGVbMEJ7QEgao6ZJrT5aKFZmd6NrPWC9YGsfGMd1BxAwGLjJMcfEzQJYhsz53ps5RBgYCsaf9TJiLtLAqFh",
  "key4": "2h1ePWFfFS8KYqftEG6muDqEjm9cZbXiRog5QhkGfaec12fkk9xcKQmfuspKZXj128sVA7sbeD3wyD5sCpmJEPEt",
  "key5": "41KG2kimdudFVFVpn6NgPKzwjgCTLVeNbEF87aed4qFWtiJt8DE71YC5mYKNorM7KWD62N3zeKqyY8ZbEfqfqmAf",
  "key6": "8UaML7fPCix993Rt8bkwDURpUMx49R88R8MyFhSBT3tBu3AMtk5tL9nt5XVTkpWj5nQFbLGeVYK9BnQ49KUDP81",
  "key7": "3M1Q1pn22Kt3ExCFva3SVAmTaoHtDtYPE4oQ1JV9AdXReo9LvLQjvhPWTB7Dcnor6j73jXaFeQD36hdRTrk2Yuiy",
  "key8": "29rDDj6Hk4CHcmoY2UB48QVzoGR7dLZDdmFP92HiKt8pwypKj8TcLNonYe635zgcBQwTVHD28ar5fzv1GAV7w7Ai",
  "key9": "4vdrs2MgTUuyt9nKPndJ4d6ZisLf2C5hHzfN2RSa9FZWpzQnTx7P6eiTYXATS9ALNHZ7w28rjUbAjfNyxt3tLBSt",
  "key10": "2NyR1P2gn9DQHz8WFYSBpVTtE7JXkMvXLvj2HW4mKG7P8ak5ybi4YBN3PStUjJoQUk7evCCAHuXoPEb7ZHwQG8Up",
  "key11": "33cY5NTCFZKaKAUiy1bYU4fVMtDsE5G6JcUVaobNjrcx4Ssri23G9yDHDnCHzdr5tFK3vt1LZY29ao35zRAWhvjr",
  "key12": "3Hx45AHKHe2yNFLFz3SPujxfBvU88SzzxSu8bpo4kUfhge6HhpDvBhZP1kqD6bbxmvHbqNQSLwZkCtRWNABVd7KB",
  "key13": "61GyfL4axmrtVkSqyaJpgzFZTANygX2zf6d8YyVMFqTuyJYTviBouutDafUutzedt7wZ3FniVZNMd2945NpizX5u",
  "key14": "2R8eqyodkPF6cMNox9znyxhWGiGPMiSi3LorqbrvsuNUUC4gzQ9kXzM9TikJkYpFievBzJKgFZjuzaBCPDz7pcvS",
  "key15": "5AwjnBRRtoYTdoQDknnNdtKxHB2udsmbKeYBi7qenBPdgKXt34DkK9zZ7Nay3Yp4VsnimsoV2yghcMwGSZ6zagic",
  "key16": "2BSKavVtxLJPCcV7SrAEJbvkzDCVLB8BgczgV4iv6RxKKBSo1P8rqDALBWt1mY9SJn7wc7MykFWwaPLYLeQCHDJR",
  "key17": "GHHRcM65Z18DRzbpgyWXcvHEwunKpQHjv4MzvuiRuVwwqyBJHeMLXxDVowTGnXLEopbVnTUZX41zUcUyD4GMhWr",
  "key18": "4kzEuef3z5D5WwosvxjHDptYAhyrZqkLUjfjaAGiSH3sLw55YJ6LrRjjycP1XQuKe1nfrS8o3TigDu7vTKU9Ravp",
  "key19": "xZrH51fTbKLxRGcjHuipkswzzC7RiVTCbX8ewQcVMqxjCPebU1UDMYkQNyMaNNkwYpKiAd7CZ4DmaHSmxECnFJX",
  "key20": "XihscZ62xrGUq1fiC5H94shEixtMJJToACwGuLcmJrD5da7k2pcDG27QkpoZvYZYrdovncXxurvFzSMqE6zkzS8",
  "key21": "25Q6pwhdRXbWK6VKMnhi6r6SBrdBSjZPNv7JLEvjJrUkL9wtaBsARBG5NQiqk1FRW1qaKaW7jDocdtEUoZMHtYDK",
  "key22": "48tcTTowUKMMrAJ3wmnPbxqesUvZkqbVNhAZFUKaKqQVsWEXTigrAUdDAeX5zB81sQsZJuZGKPkt3p3o1uT7KzqS",
  "key23": "4gwmLL1zBSoANwRPfrT53tib6fcqKW8PjTXpwmzRLEja9d6tBxKvXBgjDfEiECmFc1ASHh1mVsNdfauZDgTWzDTs",
  "key24": "34p1FYockXvR7tLSxzoPxC6zpZmEc14ejBEEJHnvkYX6XdzMYohpj91gMLZVoWhmmrNAYA4QzHUzYrpe22wvDHEL",
  "key25": "pe53JXVZ2q9GdENJjYBGpNpapsHTd1V22mCxgr3pZQNZULRtAsEY83NMxi2AbX8xxb39dksT47cqqs2tsuiaqkd",
  "key26": "37h3JRqA9K2DJiBCQcCEXUi4fjNq4CfykK8gM1xq9ihAiLcpzViwrPv7K4aop1Yh79L8LzJ1k2XPrny467DQeE5X",
  "key27": "5Gu42N2tjZetrqbDpKWc34YqJ2c9zkWrnoJEiqoNAisLq8StuBAMZbgzMMMujoEfbBRzDLBhW2WULzPSpEA3ko3V",
  "key28": "5BebYVZEyRE3h9Br792Z3rjcpo9mF2HvLePXuX73biQvCDmkDtKK5qakYTK3qWNcnGF1wu9syxcrgUJWJEwsHVKr"
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
