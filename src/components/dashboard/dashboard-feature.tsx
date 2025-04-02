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
    "3EX18tSEmFaFLHZuxupBbMoBMGHbNYgDXZjcd3oZbB8qAmNJ9QEEXwbTcnpoB5cT82Ey5gDKYoQZUL9MQWMWhb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYRqqpi7USwQT6p8L1uPDPgRCzb3jfRwmjA6TCe8dtY4KiozMJ5bTd8xkfYiJLpSMnv4mrePDhCZ8wC7mtt2QWE",
  "key1": "5jFWmJbpSLTjBZ5RBsojgVPJt1idcR6F93j5BrrDG1QFtgGmHSvEphxiAod5XJTr1vgbxE7uTpMWrJZrUQJvogMs",
  "key2": "327cvakts3QrhSuWBDWMrPdqWSd3z4JMioEgoRX2JYDspuEhD9LaXVD8kgcku2SVvK7z18Ri1XLphFYYiWNgiGh3",
  "key3": "2sRdJGXxR2s8E2KBy2wHN68gFza9B3vsmgq3grDJuMrtiZqJURTjDx53ENc7ppRPNzdL2q6XVr5dXSja4yVLqZHj",
  "key4": "kAqhJ1HGKC2vMWjDQCvQNyNLAAsqpZUf6sVBtsSHdRjEAoqbncs6GHPcbBbxeL8i6gvmvXsFs5ujm433rYfcDW6",
  "key5": "2nPneepz7E24nKS39knDgvLATDv22cBz1SCHq6mVfmaCfjSHz2d5TQ5ArXgL2eLHSimMdWpTmXjqGGWEQBQz5inY",
  "key6": "xgEZusFVP3xJ2NzSi4j94pkWMvxooAvjPKQeu3NGmdU7pbS7MtLoJJHbbmXyq9XTWqsVGthMa99JiFDj6gRDpnj",
  "key7": "27WxedUMEzzHRtDbSa7gyHHtgZAqmC5hJbtEoGJJergK2sPVec9wcLtbaCwTzbce5wxykanQDsauXCQac7xAqiu7",
  "key8": "2jWoc2DBM4HESam1i4KzFMXbZvgW8acqjaaN4wqDrtYJ3Hf2wpTxY4rx45FWwhX8T96S6ssz8H5A9m4fANKoDN2v",
  "key9": "47zE66STcShz15j7Sio7hrK2JGq6QXp8vksgXFbLNCruYJ67uXVKL4VeN6cmAAPhhFDEjk5u8eaZVCnue7REVj8C",
  "key10": "34TXSA63BwgtFVEtJ3t6WTWj3svEbrqGU58FXC2S76AjhcvFrWAt4Q87Q9KDMk8Q7V9QwXWoWsrgeGbzvQ5xvQMc",
  "key11": "3NJW4rSP8SWjeAFbgpqRfSut3TUhMetwZ2uvnvnysJiBcE7m6NTvTP82sykQnYm9f3G9EKhRqdDDJvu4PKihZzJ9",
  "key12": "5a6RjCbY6EaaCzZGvb4UkMrvJ5s8KLFhtvQPCqCkWUTjWf1MpJjawRFzSnZqr9dGSQEiHoEsBvVR5Qd15z7RjjmR",
  "key13": "4cPDQ7u2BrBVVS56aCZVUprJLDgS9s8yB261ZAacZt2kdo7PSatwR7MS5XS1Yf4buAk8oxV7uH1nN9viWZA5MbUA",
  "key14": "rs4cdfSCpmPBgGF3mPWmviqmAd8UzgroEtSgKtf3w1BqwtSDtCpUx5EvpZ3fTcHXGHyWvrBLpM4Jykf1xmVdfVS",
  "key15": "5NbD1RQKVXXgiYLh1ZB6YGESHt1aa1i16fe2R1yJus4yhX8Ek9rUqcTXVdGyuuFsyuPQanuPoPer4miN126EJ5Go",
  "key16": "3T3UEvrJpxwz1sdp1S9McdE6v3fdewxEwK19xHUZqSqQPxpQYuqYeJZvDDQV26U3Fpxp9YsmQaobN1ZaBxGFroPL",
  "key17": "3xGgYK3ktNqPpL3W8Dk8YgnkPtRu8ZGCu1DdMS3UrL29yfE7tKh3iKqMvaHh69N7A9MEuKWN4PQEAVUWHTy5ZQg7",
  "key18": "4n53iHdG8e1Nw5mzUZrWhAKGxRWVpp4ghDjFTV4aNqG5Nrr4qGu7fPVPourGAgmd3374TMdLfmnigzJzZ3a1ut9R",
  "key19": "2xQb4BWeXAT3KH9acQCeWEnKbS8qonqb9uuy7k1TcF5XQHfkEPBQptEt1yQDZhbiEHb9fghU3RERz7nttWy9QT2g",
  "key20": "EJq9foJoABgbm5bgBy1nXtQhUEwPEJ7EKpWuYDHtyzGbbXuWQPQzPWy77AfSXSLNAqDaurfqLfiaCCxyfbqhPpC",
  "key21": "36E2VgYajhZJbbuDUJZ8DrsKVEET97P67eDR2QrqQ3C9jMu16nh1dQ2esgkSPN4bHe9mqiTRctxLfc5jjWkpV2Pj",
  "key22": "mm9eEQzQHrdEjMgwA3NF2Dn5z3YKjwmELcwyJzRQDHPGFqah4r3VSk4qBzW4otCrYmKetDR8st63kgMU252SL2b",
  "key23": "2NBvezUPV37DL5tRbn5nMkAm9WiPfToZ4qYgwoQDX56V1SFkoRLWKFMGvaWdRAnb4ZLrwZ7zCui4Y38ceXVBsnYQ",
  "key24": "5KbNBwaBkH7GvtrEUo9XmhRrzHCrFoikZbrpXEqszoKjW55byCssdKuDS7mZUuwvTRJsCKAajgPAEdjmSyqrcmcj",
  "key25": "3mHEwA79XLkceia1Aka6RxtHiQW44Jq68ii68qKo8EfBhCPPwFKBP7Lmfo28jnKoxdvCfXAfkUeprBZtjoTqaHxA",
  "key26": "39hAjxnuw4PwiTzGAqJvJqfmNt5GoC491jnejCbJY7TYHpPZvCeJytbXWMEjDwpUThqvbPAheWDwLV4PcFVYdHL7",
  "key27": "5AfpPmUDENuTBsi3tYfqKwNcvYZsvYBka9MAJWKFzoFKRw2gmYeF6YA5iZAXbYXY6gTZ6Qk3fgUGEYzCucKx23aa",
  "key28": "5Tb9pQaPQQkPJNptxrNpDoKfitZ8AJgPVZaQGaK68HH8JANuVyGDRwjF4GAf8wmrogZ96rd37fQHDoPeJEo6pCFa"
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
