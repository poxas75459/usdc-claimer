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
    "63voSsXqF8BLtzBYvAE13traq2xXK6LQtfZbXQJSagZ9Pr8pEYuHwnpwDKx59erwgHQGq2WtMboQQLrhELPdr19S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JugJPBKDBiTahUUc6DZvH2HodmprTitgmAqgTSd93QPmXGzbU5kjQP5nWdeFtRBqE1WLbySA73Me4oV1V96JB4w",
  "key1": "5MBPzGeD5iq3eaa3iadmPhcKUASzWTBvNsuh8RrSjRNawFiv7xc5tTTY1UdMNpjKKch8N23TvVtJTKhdgX6UPzLD",
  "key2": "2HwnaGBqmoq6BL4RcwJdBqhvGQHZ2szF5YX6zs5GGXPQf6dKuaeonXWMWrRHNRP5WveytuP3p3crx777aH3s4pZX",
  "key3": "3iZKiZLq35KAVWAAfPEWVJPsdfCBFQ9jsnUsCFtJm9K8MVbB7LEgwSusHZ2BnaNMmobmJLKyJcW1k2pJp75czDKg",
  "key4": "2nvViBKLBT6nPZxK9Z9HWW2Cfjp18VD1fRbuFRxPwmFYryzLeXo6Tq3FzoDLk86uVZvCZkwZJLUrz3HfaVLcf1Sa",
  "key5": "5PBu4rVgTLqqHVVadAMuXX7UR5E7aKnwBQ6y2VjDzeT1SkHCt2dH5fJ5YFiy7sgJd1kH3m6sRAZJJNNXqMwzh3mu",
  "key6": "P43mrDTrpULMWx17JijuMKHbMVgTmCJvTF9GeSYYZ91StWBasBvQqWWsA7dosxR3nS879nGmqdSiqqXMjeEREq9",
  "key7": "3pB38vfAgcvxZoawncwjzq5fceYHuSkeymybT4TC47dkhEUztFro9HheRPLSyEW17Dqdj5chaxfDCpjQfDZYGMPE",
  "key8": "5tycxUjqGmMHfyWJYHeGjgJiSVwnAutXQqF3MGQ516o99SbcVmCDonFgr3n3u9n3tBzUdm7RanZ5J995fQkrQV19",
  "key9": "3JqW7B2oe5vWfJNhgeGx6bsGpyLfMTFXy9L186m7zArLjBcjhNSYrRrmFfWwnStmyqPh2kxZfA2BSD4mHwYGs4Pf",
  "key10": "33r6fdmiWqaerytNbGnY2t6dSMGDCKV38k3iny6BgD78eFfm95dJnTTAkaE5mkm2EzwbZ4EeTuRYZA7egqkV4PxA",
  "key11": "4Pf4myGPzYTHaEkb1zHxHz4XwbYMJcUksqV2f6NRkvdcAivxqErry2xy2QPEUhp4jk2MM2p2z2TmRkd97NrHTLJE",
  "key12": "4PTfVzdtikp6wsSBLLwrr5atJKUTanaBMHzKcud6nnDMD6hd2wDKswN2wZQJpZ72kyKXUYVAcND9M2zbL9S1XRwJ",
  "key13": "3fxfXDLevcH92aCnLuqdx5L6Xy1uYm9T1Z3vrNA5ghMr89QBnKKddbYZKXinutzcL7b7fgJwLLNvDeh6zrM6HqHz",
  "key14": "4nKyMJrrdnSZyJU7YsztkPTCooA6SWrwcFBhdYEuKeGUb4MhgeAdZFpjBUA6SB8xxKS3K4YCrDch4o3W9ZwG628Y",
  "key15": "4aVmdvEUHD2cLeG38ptTxhaZjjiQbCf7v1YJuVaK6daVEUnmEBxm8ZJ23syGu7h5LhU6XnrdG2HKkT3k591a3n9W",
  "key16": "4JXLmbo86QLJj6xATCNXYt8ABR5sHwWn9fw589ZyFgRKmtf2ZvjehUVVLkP8vkszG6aPXqVi4cnobNxbQsPP621g",
  "key17": "5rU5fgfRjornG8zq1JE7XggvUNwyf7N7SuFfkRMneao39HHLgMs6bn3uMaVQ8L1mLR4Fgwt3VKbDoL1NcWBYKRoe",
  "key18": "jibH479CEJ5SyoBUEESXxxDDT9NvuPvJg7CKwr1E3WE1zGprnUHTC5mkiLPcG2XuJ27novTE5fbDq65yVnV4ecd",
  "key19": "65shWgkau39WNA371keet5Ftr2TpYGjM8Sz7hQyAu2fdRGELNQzMeP2M3FusCsZS4yPuwkjoShQY2av7JTTqVnvC",
  "key20": "ngPbF9edTADHRBbcQ6CiuLpFGwLnhzowbpRo9DZkkfRwx6dQPd5QkMTQfAJ16dtVHreqbziDa9tLMUF3JNoeZog",
  "key21": "axZewe1WXe7HtY3zg8Pye9WwSQTket44hTWpDQUaLChviEgceUuZ2QiZg6vnAJxAZmAeumT351if1La39PXhAhV",
  "key22": "3QCPdLHbBrW7L84H2WaFNMayFYPYTRLFxnCHjh4tqe1BpMChra4wLewW4zjcLtmp5aca48L18mmhW1rePehq6aU9",
  "key23": "3rtZvXuk49sHNeLUVvohZbqvVCYAADnNZhPJSiMjjVftwEzw8RpeWANsVgwdD62kHhYqU5c3vua4ZUGEggUY2EF1",
  "key24": "2fagBEPBSF8EQH3TBmQk5paePkB3L1gcevZwgi22rDAd7TTmZzWaos6JEmTvi2utS9wKPbdxeWQK8UP1nFzCHxA2",
  "key25": "3DMGbFPBuNP2t7FNjHtcBS284EiFTViLRJrhxDZsjvv9sg5uSiGsFuBXt13LPzb6fWekucBxtc9PzS9teyrpQF2e",
  "key26": "37eF319AuNDhFjbHTLyWBpYDXh1CiXtCi1VLKrbWrgFnshM2sASEgioigKhPN1H4GXDBDJgK8UGKh6peyNGLtNBC",
  "key27": "szQxZiTkKNHxXwXgbSfmHPdvj5GufvLSp9iZLxbouYZjV7WsMzVmSWhn3hZ22qKRwqNKbYynXoubmAQsLTGrKdt",
  "key28": "3ptNa7f3D3YoXoj7P5Ax4yRyodnqWDfM1EvSbSZtdft2vK6x2ZPt7GBrWyRr9jM7Bitj7hKmEJTVvrorpRkYQu8g",
  "key29": "5oMWD36JUZcwesHDFpqcmm36UAjNngVoZeFAD6jkzHTnh2w2Te78WdhYRvcH9Cj6EDN3VU1HLoqg5swS4aa4CdSz",
  "key30": "TQNnAimkp7WanJ4N3VFqRUjH1azLUFgb13fgPJr5K49r5mhD5WnhKuVX4XWekTrZqfbsNYkzkPV7nZVPYaodYBU",
  "key31": "ciSvT2nVoW3RNxCLj6vJoD6donH8LzxR6pBjcENNqmSg43YtxFcyqKUJApzsESSQCt97NfjJhEjLZ4vNQ6Ln8Bu",
  "key32": "4AbJ4L3euJgg8VT346tDM1NyTibE1EgDt7k8p7Rd2NpsMtEWy6ikqVCb8KXCSuqm8Ccei49L3hacsQX3q2vcZLMR",
  "key33": "44Xcwz8MEUShD3Y7ntVPWGVKkjURewP8K3gdRQoRrDaHo9DSL9PBPH5wyZF1Szjo9UXWaF3D39aUYYRvYAisptBd",
  "key34": "4kvMEjgxB7hWPexLV6im6pRUaZ9xoFeT7fGapnVm1yVRsxLChdzCtLeFKNbs1HEcH5JJzPbq1cQsKhbXKYrR178p",
  "key35": "3JjY1dXpYVVRhdGpU5fUX5ww7oAd2tvPKvAvx1G7oWiZcQJJ24xBbtDgrqGiozFMQAKtywz1rDiDEMVB9fhgHmk",
  "key36": "U3VknDatPDFMjsGMAyn6qLL65qQh4mYDFUUTziSUzafWbf3BK4HRjLLqdarMDjMqEDmN1DnWyatZjQxHxYzAAcy",
  "key37": "kxRCMtqMQr1ouD4Bn8XoZf1YMKrqzaQTFpwdcsGcz23xzmAd8Li8pamhCtguy4YevjsW6hZfo8tzaTGHuNtCZHw",
  "key38": "4g5RCBrQMQb2T49pKTxqXJSg9et6NED4RG9bPhHSi5XAmaNFD7nXHeR2owAWTtQ72EefQ6LnfSNGJQ6dxrPcwiBX",
  "key39": "4H9n1YmBV7CUnUhrTegQoBpJPzDCkJZ9niFTgjKZ4TydsUGbKsWbUc23s4guT4rRPwVwn2HjRodAwipRMDdVjPxp",
  "key40": "3ddt9xo7VyJrQmCvETTziWAgK84MyXw6krHjo84ynPTctpVrXjfWeLmZ6pjd54AnpHPSMtJxUiQAnki3WHsesVsc",
  "key41": "4XbzMviKkffLj4XVWNekQvJanGb3XwjLzYBTEnQKf8aT1quRJimzEW3huSJ1pEa3yMqrrZQMCK4UMN6WVYRUA935"
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
