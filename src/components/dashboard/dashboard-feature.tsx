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
    "4DvmW8rti4GtqTyU9cwJantBCv63BWKNGLmfjHeUE1pTCSzMYWRnEptFC2vgqSbnZabfS32UAwoDgo62wV2ntfYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gPzd3io6RftLU8FTxkkBE84w77hvbpFyaeZ6YezpLyHQUbt6ddzPDZ5XH6ZzNqvBEMPNGEhWb9C17HJBmVaVvon",
  "key1": "3R2QGTLrfYigCus1S1GWNBPgcz86fCjMgNxhewoY5wS3NB8REyLWdCya87MA9zhdbjtXmj34GsuVz1E7XoBS2rLP",
  "key2": "5dGKz8DMQxZU7r6bUE8TjZxB1fv68qMm3zK7R4bDE4tunKK6VEWc53a3meaxeQ23MvzcF86Pp65sMxwPiGGp2Uhb",
  "key3": "Btpky95M8LRWJdz4UWXjCpf2GZ76bQRfA659tWKBHNHzRRjoXsCVoFHNrxcq5MvY4ESePk4j7qB8jsSrDBZPkXU",
  "key4": "4YHF4zrtMaX49TcEaR88efqJsfkzwPWQHpRABFTsLuMzaGEa3ntk742oUMyiMJD4pWRf5jhKQxYNXv6eNHwRXeTs",
  "key5": "5pqYirAqksoyRLmP8xTdx7qvrJwAiPvJu9G28qS4RBHj2uJFxPSj1vpZ4MyRXfwaPF6viBrpCVxjBVjcdeZpei2Z",
  "key6": "5rqiKNyJU2fT2xBsmx3pTiEaiiV7WL7j8ZPXQuSvZ5Ln9FGDG8sfBCV5tPVUXjc7jutzwDfovf7YvhGSXLiuQZCF",
  "key7": "hv9zjojxSpWMDihL7br2vHGE9bPDbBXetpQ5y1miu2p5uLRYM1JGgXUppd2vgbNzogvWbhSdr1FefZkZjxAZW28",
  "key8": "35jf6adYnL5a4x1SEX3RjGvn1Aiig9yjuh77H22gUpQWGtHNVePjD1z7KZDoZCSd5LKNBYQ1TQo4oPWiVXtaN8gh",
  "key9": "K6L72WJ8vVcQha8Ve9BZ3B3TDW2dfr1rkXdbzdvswGvxYzUvX8TCNYBfofnKmDM678KcTSQJ81AJuJcnKcNt2Jc",
  "key10": "3vQV9ktyCzM2QyeJFsBWLfGA58a8p4cvwDeKpFvkn8kfBXd56z98ypg3JDkZy8jq1b2cUvvpDjAMF9BNEpXJ1f1E",
  "key11": "28Emg8GM38kH4NGNKfD21SW1eXekMA8sfoWiNjHwoWPs7JRBEkQLopzudBWJy74r6YwteeqNx5dqfQU27YYWg9Z9",
  "key12": "Trj3F7qF8XHN1XJGsvEWBansFtaN7JWh9YgcPgaLjsmjw2PNjydb4RiETgYzPVWqWRE9AyNBhzVwCriJtNWwqgN",
  "key13": "2GSKkEd7BQVhGunTG8MdytFdswy4RMbdRhCZhx9RT5jvETAL3GNqViiLEktjosZVgbrLQ7wz1taFMGMvCAJtZSVY",
  "key14": "3f5Fmg5t8BoibrqqiZaBMxKX5JjcxgyjhPSdpN6qpgShVhNzR8UNkJcphqVMPhn2JACjt1DQx6Q7aQWnAoLgxohp",
  "key15": "4LLUTKvAcYbCPVUCNVZ9bmHGuWzsS24mg9BryDM3y8iA6f7PCBAGA5jGYvDzFFdEYhok6xJwPKmhzcqou1R9e6Ak",
  "key16": "29TLZS3xBTYsJmPWsJqRpnwg1DuKEFs37cgMSAfuAmK7fv4ZHA4by1q8d4WwSwrJoshefNg2kpogbbAnVX6nhPWn",
  "key17": "2sjJ483qmmu6bYdniuFn5dnQ6qW5VWn2JTq8gQMhK79UVgZFukJdt1ZS1W7v684SJk3Mv3Aw1XnQZM32ZJwvaT5G",
  "key18": "28yeaXMAePwzx87tvt61KsHWRHeWARskRCrD9srA3WzSR5YPmX24JnQ58W2THbSgnidg2vWdi8T2XRyWv8U2ypYP",
  "key19": "f2kzmWQCpjy4gAM2CFipgoaM9k1euMb8aPHKTLYJzQib8vSHTo8HiutDiSxZhTPPGyX1JThLLkfwzfdDn384PKE",
  "key20": "2akz4k9cTzJCp88t2kqjRgNGTsdCiTr6skYkM9tYfBDE1o19iNiVf1B83maF8ZfjE4rj3VNXSPkVCz22zvLuoHX8",
  "key21": "NZammSFtvDAXjh8vcuQyWmVwtwvvYHzp1JjXpk4fv6VvmR4j9j92aT9wUEafXxbEM5NWPfUdrpbNrEXMKKJFk6S",
  "key22": "5fFdqR6AxsyMtfp9XjvsPGB8fPAqAZzhTB8k9RDb1Unb8kuAnfh7qTWCdGqjXwd6BikcnMimYkP5GMqWPjkPxgTZ",
  "key23": "2EH3r7T6E3bLq2zmUkLDJYVpVvr6DKA7rLzthxsctqVxqKdRKEgoYptYDJoW47Vea6b2oxS1pEPkYrwGu9oaRDVj",
  "key24": "e4j3tm7SGJBQuaNw6Zyxtax8vB4SwzZw3iZEHcHvhmRv4jp45EMUhHdxcsNQezdPVXFh57U1m7Mf5ica8PKgDVL",
  "key25": "5H6nMdEyhEWrtv8qc2R3Z1xWm7VB2s637JffvzBoqYPBUtVF44V67wBqbjZ6jf2WKNPDaCFLCEB1tL99VvhexS6u",
  "key26": "3dxJskiAeLJespnG5RLQfpvQVMKkjU6Ky8nktLrEtS6CaqVRe9TwVgFMdVEBHSwtTDhj8LqWWroGfvSD2b86dGcE",
  "key27": "43TLzYxLAJoj2jfLmaTtHeZS9wPXL1mpfdGr3geSLfUVb8MryRkRLi5tWe9HGqWGbh7hRZ84N2AWaaWPxkiTs5Yy",
  "key28": "4CJvoX3cGXD3AscyeWFGRw38Mm6yyXQMcrN8NhVe42UmZarJ3h8ioz9iBLMAMyqBmBELYxSA18SvKiGPwDusPP3d",
  "key29": "2WRDprM23N8SLUbCKKGjbgyB4Wcn4AKc3PganMeZmxNawyTUDz19zbMHtcZGy3VLNmuMS84aNFfg1gLSy3qsZhrA",
  "key30": "GxUjhFcUG2TZq4BLSs9sCA5jhr5ZMRz5dx4BxnUiQHYVN8PdMoitoPVyKNNuv3tV5evV2U7UGJ31oQQsVveZsmJ"
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
