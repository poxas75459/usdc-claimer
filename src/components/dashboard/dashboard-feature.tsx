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
    "85aKhRSjW29pSxQQ19jdJguaGPbd21jwowVKdF2kJkxWq5yn4JndEHPCNnE7x6RmKWzXF3PGk6mHEPaSWDmBXKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZ6kUkwbwmXnKhkwY22jxFo9GJcr9TR3zMUZa26qWmG75LEfVjGRJAehcKfgntvdrfopBKgtBVxnNfbbBnbExVw",
  "key1": "2CZcHW2CFE8jiuQFnvhsTw358UVRpUdVmyiWURrgCSbrhVUaiFymmPSAn5RyiEruMbkgdpRDYBAaeKMm17WpaQ3u",
  "key2": "3CFQXWu2pPY5zmEsQtmTRbKNG4Pg2GZbmsNxshP84ffhgGGjiLJZjEDHPtq68GwtgRcQmp6gxrxGUW7FeKKABmLv",
  "key3": "4WH6hPmJQZ4SnTRGG53CLaNqi1qM2BvBppXhR9Tm5rGiksd5DcxH5QKFXSuFTUC236r6W7k1rchdQZ7dwBkYbgJ6",
  "key4": "72tj9mSGKr5QfwB4ZiMgBm2qcKBCB34KiRvZki8D3baGqezzFHr62YYoGH262bsD8XvJ6d3hYM2s9452f7nQg8F",
  "key5": "5DvT9qqUrTYYBoMfRZpebhhz3E87SwE7UkjX8A954aLGeoHkkSDJebDxrdvHoJSPheVWFybS1bRd6kUzXv77W5Rt",
  "key6": "49MvVUusQtk5gUK2C1CGSdARQG3yhR2cjAPi828mTjHWNKs39VzKStBpYtSWB3zDcPfvReRE3PSzjkX7kgTmv61T",
  "key7": "2onWxSHRwVJsx5hvNci7J35L3XUvRVwTuMEjNMPkRM6s2CWHCpykVoB9wfx1PNnJkryarcpHWoNapL1xuDQCVJ3g",
  "key8": "2MTa3XyNfb1qHUaRisgT8brh2DJ4aHxPLp2bdhQXJ5tWYLnUcDaVQh2Yoye15VW8BFMvZxSLQmNT52ixegygkV6H",
  "key9": "5PcHuDTtt7KeciEqz66NTgddrr8J2b2px2pN3u5Gw1jkqQG3fLnotP6GJkWRjwtG4g6QktNddyjo36vvZH1GW7KR",
  "key10": "3L4dxpoaHWqSLaHqE75hCYnE9J7uEh4YT6ieqXC28ecDDuPnHCH7h1migLUdpuJw5dfXZzzG4gW1wZ4qCLfAkP6n",
  "key11": "561rUXEKJNDcoeSF28nV4YSqVhtr793KPPqUsytNkJztz2nDncF5UGS9SUajLtTKdCHHs1iH3Z3r1gfdgCPjBxcz",
  "key12": "pT8aRCZLa1XsaNrwZqvkaa1Bxisk478TjdffrNhPsuQ4eGrkYxuxxqghZsNg4a1Sy5Fx5YoyXuhxNp567tSKtJp",
  "key13": "3BEBrMc1a4PSMhRvwrYUUmnqEs7Gf633VR12TQA8uoHugUN7Ja7mJnaX5ZJUutq5KDZm36dKdwXo8xB2Wy85WPcH",
  "key14": "4L4uQmPb1WnJSPMt57a824CytuHwbgU56TVp8ddUw5hpZdKbnAqCbBRE4Qr2eGARFDjFrw1mYhAqw1KqRHa54xA2",
  "key15": "26FtQebAs8zRZjTivHFtEmBen6Nnpye9Z3xbqHcgMHKgUw3df9P1nQzoi5SvA9Xvzv6uBgNdj6tP86ntD4VpGBpY",
  "key16": "2CTyqwKtpFA8s2EWH8czQji8gJS41w3NsHRYozxNZLCFjcRasGsNuEarVUkLoDoFzbKFHsqpFDDV3gamLJoWLbAk",
  "key17": "2vNrAF71j4gdaJMJnEKVPPgzadjYLQ86XeoL6xAo34v6LD1J6qrFfJmWzeALKi4rYRXxQyjGQhEMpenXtj6bwRxQ",
  "key18": "5rKJQnPzEW3EfCtTcd64vqFxmPer18wkriDGAvP671nbkL8syLvmKmBhbYhGomx7AGuK5sVgG1BhnQ3r6mD1uafm",
  "key19": "4kxcYTiiuwp1t3726sY3AsFZY7SCwvGftDor552JEAcDHUPEcup3YDNTHdrg1TDkFgZbdSKrBE1eUqcdkWfy8ir4",
  "key20": "4assJJwn42B4r8usahhWooD5fmbzGDUezE5AHCqW95HY6aYBDbbpuqwzK5NA82tUULLMiq6N7UEHWc1v11WquNDF",
  "key21": "377m9xzVXjApb1FXTEddqN1b21KibPFWM4VUp4Hua5brm5TDEhDNdF3tEbuou6S4u8Z2S64bM4ofQ5rCENBmTfXT",
  "key22": "YzXGArTGerW1k8kdpbaToAxgbCrXjoX4ZLtmFFY7zox7PJemTGAowCS3j2eJcZkbjE771M2uaYngjP5cergXvFc",
  "key23": "33SBwmda5Q2sD8dJyWLn833EeebT8SjpjpZF1ddENaZnkcHwt3t9aoFg7gN1VCXBEWoZSigSwsHZ7rqw7xy1QPkQ",
  "key24": "Yj4zSo18EppsEsmenXhZ9nzPCLLkhuwUu33AsEHXznLeA6cwSYTLomAYofjyARtoxnDddwissiwwWdgmv38kEQS",
  "key25": "5d2yyW43EM2EPFz1qkCfuXkXr34x7C7PWPRx19Z3DNQqC2bzCcp6LmhbHPoS6VvcpT3mS9Cyq8nsZysXHpv8Kojg",
  "key26": "qQNHsWDPwkyemn5xhRbeiMaKNxepqxYpA3gfU93wTbzv1EE2vyT9SQy3BxiRAAdEEJiL4QRsX941jT3J5YbVp9Y",
  "key27": "qw2QmHMzJsG1nfijRE5uez7e5vuU1ugAbLi2Aj1bHnnCHyzW3PtMVnLYUQwdAtFaSzzdjjtcvNQ1y3jPAAV6Sbn",
  "key28": "4xfb4Mk8mDkqzKZ3RCwhm4bNu9LU6VWTT1UAD9yLaWXwUKuKnt9rjmBxUcTV9PRyf4eiFDxeMgB8cczPMy5yRYzi"
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
