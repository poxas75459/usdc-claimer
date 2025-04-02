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
    "5uTHxR47SthVJGB5zzLkU2bG7iZJqxNBb7a5ZrF53w1SqREVMUKfbsv2iA9eLxh5ntbQ7VDZiVyGAHit89MFeWaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6KWpyhmstvWGtBFzqEYmsduBZ91CsJcLe5r1nHNMhSoCh5JeYuV1yzWufgHTLR9Tzk7pY1xKpUjCdF3Bj4qmMF",
  "key1": "4cTZBcAULtEn73avxSaGfWRi9zrkSP7Auqb58SpZWcGY52ybeikgWDT15E7aAgQm3qfS9ZrsAtV7ySw83iWUPszZ",
  "key2": "2VmsiSC1mhrqawm8Jto1yPB3T2HN6G2RyEccgUM4DckC5xV1tEh5vqtjVsy63xoqDSvxEQitxQKSVt6bVegqGGe1",
  "key3": "39SifzsEpRoYVFbQAtvAyTq6bUsprADeY4vFSXZzKa7WjnJg8amkuAJPkK5vChKjDtA9NdZUg96Qadgb1KmJ81zD",
  "key4": "5F6iCaparV3BW1koXLGAL3NUvN58Cwg8c4uCFtQjtBtbh1uEcUyZvKr6B6pcpSoPMyxaNsQtGdZdPTPC7j5qANGc",
  "key5": "3JBSug7Fo2GdjC1nmZCCKdCUWHQBHVLbSnyehG7bV6SCJ1MHXwN1WMq2FKMhd1k9QrhWiwWo511TgqhBz7ngAi1W",
  "key6": "qRk7Vk2AkkBYCo5QUZLY97ZLDQvtH9J3uBXVPa3u6irecNJp8a4GwL98nrgJkREy5sTVe8TcJ25HXVGfWKtKgYi",
  "key7": "5ywpPrA7sA6iTgdMcTTbeEz5QkU14BvrRg4UQdXQd2FvRhjFjNs1svaYbppbavYcUgMpz5kmJVLy4we8bnTpZbJs",
  "key8": "2pMbJkhAKszQzNJkL7hEocp5mFtU6hQkVxoqt5bPwZLkKP9VsqJ6rWogogga6iJMB8g9MNGrrMsxu3e2iwPY8Vxh",
  "key9": "3CrdfB8iikfZxgF4Qt5p2g9NPzm3udu5i2WLKPiVMLa5XnD4hDSNtw271dMYHeKnK8DqFpdkz2L16WHvRJLQ1ghp",
  "key10": "kPJ6DW8TPcxQXvi44j4vhqSu13nrzDTDT4SHjpow22VjkmjHL4oH8PvrqkqvdanPiBQF1PvmPJL7dbhgPUbxNoZ",
  "key11": "2rnzLCetoGHmXexHUcHwzPdZ1zBDJhqQeqBBcczPnkpScTLZ8ZhTitw5XX1Uc6stbteCayeojZ1h2qoMTNGyHDrB",
  "key12": "4CPNaM7ri53FcAcXhswAfJQ8NXuZ7GdCQFW7CKQKGqhkQXwuipn3jQKxkWCJfUg3MNeubDucRAXZQUpe7odMaTKE",
  "key13": "WMujWtggNM63R6JhcptrBUSk2yHGVpwyVK6Auf8cuXnQrxzcvcLaU6ULT8qgYy3vwNrMfKDZg9omgKiFWfMK75t",
  "key14": "4YQbmq5YiFYnTTQdeaBkrsRvr6EhyJ25W6Y487DxAUdzvfNrnDxXnXJ51JPhiQsSQbkY2EhwrTo5GdwEedoN5ibg",
  "key15": "UBSjEmWNhAYYLfedA2mb1SerJWegQgGMx5xLoME6uYf7wGo8hUpjt3n6wZ4K4dZWrWPMyVgCFUH9Uw52nTvriXr",
  "key16": "AX5HNaKrcQk4vRSDqoZwDPEtXor48QBWxPoKRcwhB9DNyKjf4Qt1ePbtoZov24DFD3cgzpCyFSaBY99PtFKncVP",
  "key17": "3nzabRaKqWiih7TS9LKq264juPKk5GuyHXbRVyz8VhxZi25VM5Uva49uj1EeaH97JYNKdGqThtG9SxvoewZpWsWi",
  "key18": "41T4S63pafbRwg1K4uvKKRWzp8PUnFb2We8q1Hk2o3Q2QYLu8bviD29nExfrZ576qdaF8fTkfRtmqzrw6Ef6iAM",
  "key19": "2g6EtZXtZsBe8yeQqpBnyCKUSNBYz86a5gYdwE6hhp5xEwW9TAhptAesi1x1axUEzWystL7pJXFf15cRNpPPJE39",
  "key20": "5KxVn8KFX37CGEBimvHeEs5GhXwS7jp8AS73dKwvTphRrAwchQc65PEZRSir7JSo6A1vTiDjqZDK7TyLsXRcQNT2",
  "key21": "4qr7CFsbzuUfaUu4UdWK9nSuKAYQeFpHzT1U77nEGYr1WDiNbUgEntnJ6yDYsr5vsAjsGxiLPEAaGuFhtqrNR16j",
  "key22": "qnb7xpkkEKMjFyBN7AgHESEXrnH1zpFmGauwCqJTLPSvDR6Q4CHozGop99x2VJToiWUwUR2uq3xNkHtjeJV64nk",
  "key23": "1Ys2Uur14jquxHtybfxfftPCFA3drXKx4pLGBTB65HSBsSQVZpKd9N4zMmoZeJkr4MvdPkQ4SXVxaiNgow73v1k",
  "key24": "WjSrAXinxnr4fSi2N8j1NRMkw7bpPg3wbE1QDvLLcxdAz81mXSMRwJih9yVqbHLKC5LGKS7aV79rcLq8zDzHN31",
  "key25": "43qPKnXEuFT5kRkFf19cxFw3MnAngwwJogjRtXArh3xVcArybtkygHNYgR8CXSuzB1K5ok1jnVRn1QvvJwdPPUPG",
  "key26": "K3ne863jjeapimTKrzZeeZ64GGzzyXuRizkuvkfKX55iWL7gg5hZeDk863NWHRbEKhq6uPHccv1GZCvGNwhKUAo",
  "key27": "3UHRAFfJkQ7KeYFsWarUPeGz7LBoc86ET1bW5DGAmhQXCkGv9qQttyFdoSkGSLChZ2fc39Zr2uXSgzt1fpXWwYD7"
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
