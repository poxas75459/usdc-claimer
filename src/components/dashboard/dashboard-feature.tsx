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
    "2jHoo4jeMKQvq6qMoEuEV1W7GRsXF66RXii8S8Zyo7f5UHm1jBSnPXFRo6WxmPRmEaPqWiaMx4DdtSEtGfZyTYtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iDBAzLmQ9ioCdqjqPqcQQxWkoiBTeKbA9PkK7kLoxkkE4z3uTNUHzPQCC3gEBHUm4yaUUeXAhVVjR6GUT6awCgT",
  "key1": "3huwvj7au8gM7UMUeuAHMYNRKRsRHv1Nvp2PcrvUPxPXkDPvJaH448udzeXtK4v9VpZV8KaoQyRyNRerwTHuYpbr",
  "key2": "4kpsXgKKGcd4EKYcQQUPNby9B9dGx3e4KhnYV4m78HAv13hKprRrianAEtcyXqJ2NAWmdR2bJJ9T8ejNcKUDG6UE",
  "key3": "1rz3Bxqq5rJ3rpt66yw6A3yBuRBDHeesTrnQ9n277H1pfKE79jAMTqb4J799GfnrS7scjBo1Fgv7zM5AipUo9xg",
  "key4": "2FVLZ6N3Z2BoJn7ZbkAFEfVx5G6W6jYrwp7qkB95wRc6FnkgUZAhnbmTgBUtKjzdcQYJtY2BE8VdDdj43ZUh7485",
  "key5": "5hVRcXGQkjHbGGxvx433B2ytziAgcEfcKB4QJSR8XKYSPHoWXLfVXQrJDZVqu91nnEWd8xUgeBMD2LemyG3o64k1",
  "key6": "4DwLZGkzxrMcoubWYeEdQQRNfJTqVZ4pUkqn1njyfr31Sw3KY72ZUAxWaY77AzMqboAZ594rjbubwQjgXn7wCVUH",
  "key7": "4TngSkDYBhWYAcVZJE61pEzsEfGK22EGr6c2s4TVb2Qcww5mLUUCK5HK9Xp7KUk1PTX4d7U2jbKrz2p6CpTv1hbS",
  "key8": "4L94i4hM5t4qWS26edjD2EHghx4Gi2z4JSn5FCVwTsY6KimYP9bqbotFTPwoMZs71q42xyjg5iFTP6Am3ygnDdKG",
  "key9": "2JXcAP3sbaBZaZs8A5ELKVJRo4Y6sSn2XcXvuMAV55adsjucH9Ksrfz5PkxthyKfAqApJ5ydacD8b7QfFNLYJopr",
  "key10": "YTL9aBRTieFWx1E4hKtKQoK11Gaedmmuxf4mL4fo9D7HGAofBYFmb32NgMSai527A7mfyn8SgnwwkauZzCxh3KL",
  "key11": "4NmXSRFxowskUZdVbnAzEhMvQaVFub6MwugepBQsms3DThJKjnpzTtib86MuxRabAwP9a3MRpXFJrScyKfyZL4WR",
  "key12": "3RW8AEycb4CRnByZJfnMn6s7ndD6f9y1m5qAMSyrKWNbfp6GaFU52aZppH2jVWAKUYNkLyNyCSzQQBPKc2KevcSe",
  "key13": "2LyHyGcd4JbDaoToYLkWDY9mmbfQyuRhgkJNJPVGTFqX8wk6qXXphpyJUVUBiXDvkity43bYSRzCHiqmCRadgk8B",
  "key14": "5rH1LZtnBThFbGq6Hz7YtiUhsiZixcJmXGU3npJasLUbNwatZa7sAycZ4y86YNow9mtje4PgKQzb6MqtDzHgEFhQ",
  "key15": "5aQQzkyPSw8xTn5vpKS4mbCy1DQvE7f1Z6LqRn9gioR27oLY2JEf4YmTQ4nz33wfVft2h1dyvgbsSjvsMTMkNGbz",
  "key16": "2FEgsaL1cNiZF5ZrWgCRMAtv3equELc369CqcGcdEedysXBzBuW4muMW2G2U8fBTpFHMNUSv1kMvZKA5XPzLPzZ3",
  "key17": "3MyNE5V6s3GasGQGGWL9w3pmBfFW69VULyYgnnLFAKCinFLDqy7gAj7T54AFn3siVimMHnLcaMQbGbYxzBeySYRk",
  "key18": "wzo9EdiZjjcM63c8Gywtar8J5auWEFuueu7ofbfGhCWTxhHBER3miR5YaMFjmhMS9JrCzAuHkduiSXA3CfT5cw3",
  "key19": "3U6MJigw1xD3CRRRspEPzbQ4xww8XSfk2ALQWTZsWmVnuRhBhXEP2a78LHVGVYPJXXUsXrBQTv4p3vxG4k1AgCpi",
  "key20": "5xs2xBtfxGVQohC4yQaS7JwyKfPYudefoCnkYmigdKAkDJbcQbtaA6HtC7zyLUQLhVVfr461X4kMYey5pNPVRqXL",
  "key21": "3QanhahPaMDESgpwLPsmhiNprp9tP6h9k4DPfpB8dRydma6sRGPTJaoj2tqzL7Ad7LKZdq3YP14TX29QefBcoCKz",
  "key22": "kfJdDbrHbw7UcVfzS7hgEd1hNwD4qUZRWheTbXmY7Y7cho4EwFKPpe9JkbdTj1Y7u1bkCGEYdggZz7V9jLjvsxC",
  "key23": "dabPLQmd2ZYTWzdEH4nxGcZJFnkWMkitSgLmGpViApmMq7J3UtEfdMBUnrYHSkbcj2ZpiXobhuJKCdByL8iLBqD",
  "key24": "27XbFVL7VoxDWsEouR4wzTiRTBvNKTwLFxBos7AupPj7UZJeYmxuMB6K14nuuFX8ZsHngf4qAQ8mf683MurAsiaJ",
  "key25": "vtHPJcStwyTf4k2WWjZwEWqKYBqYJmsP7Jm9D3v2cBKxE4oY8ivqqaA2uMxNKEPCPxkbu4T3WBQV8B68vSwE1p1",
  "key26": "59b5FQPMcNJm6xL4LrczpPRqHUH2FwB31Q8vzByxM2zmRpDqx86jb3jNP9DWkzCDevi6udy3uy7Hm8h9DC2QQk6C",
  "key27": "629P8Yi16bN9CNYeDvSwwqvApNXLqRbELonDTB33RiwAqbdQBwatgBtg51L1pMgn1M2HNP88fK7FjBE5Wi84pSti",
  "key28": "3VZy9rQHFBSfVr31FmuvfLTqYU29kfirdnbxNGgFBu8eH9CPjMtt2X2Uj6NpvPAhWArJtBswAChhFxXYmMxAL63J",
  "key29": "3JUimpS4PJk9dDjeediYmLkqunPVGZ5Fjmc2DfCuormuxzHJVcjcCp18Xptefoh21WchwNU8jtNmsSGARUyKADxy",
  "key30": "5Jw34AVnJDNSNmu4J8oJFPMwRABnm5WNGV2Jef6kcXCyYtdcdAFxdiJQxkcUgcQCPnhqAp59MwP5BB4NifbAoNUm",
  "key31": "3nvH2ZQeaNsSLoF1AnpfPy5FpJPfKSTFfDbFCPDMYYnnaYE1KUgPHEiLyqmRdpE9BB8SiUK2VK2e5WqSFTZq2X5Y",
  "key32": "4Pn1DfT4C3kgWN4PeqVPsgUNGa54ErrykjUSvpP9B6FjsmtsfTQhMZPJXEWvGHXNadU72X1MnD9jpt25Vk4wVC2r",
  "key33": "2bssak1Ap97vB5cHPXbz1SQKVRCgifk7s3ja6hei8n5XPgGsbbWHFqWJy2CMDJKQ2EGBagohvuCVtuj5cjbSQCxG",
  "key34": "4yptC7hMMCa24gzUsfpvuMxQEdUpNWzzo8JaeZjUNPE6dgFBbgxBkuFeAVbuVi1MSFQ3RFHjHQrohoohPenEg49U",
  "key35": "5GzyZeYRFW7XsGz35DeVsrAwxcVafphGKb41r4L9KDMHjsnJVPaRJFPedxNVCwozswadKpSodVtW4v8P3r93nqGK",
  "key36": "2jUydV6pQVsobfcSTuK81kiJLPD8ns6XbBYCB7Yci8EvPiNcsKkf9SMDJVWAqv4dKmTH83qow1v77RxFHoeJ9Kmi",
  "key37": "3pRJPq3ezJu1mVuiXWuqT6cfVJneieJqjEbtZLWWkerKxTF4VZTDdPQ7CC9WocmZ1iSuayq8sMFYiUD1RSXoMSEh"
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
