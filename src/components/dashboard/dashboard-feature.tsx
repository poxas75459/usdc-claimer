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
    "3UmrzS7HNqBXVuYp3SMt88WcwLytD7mxreVyx66W3A8TQBetDbuYkdcYibcnVUGMsmYimzsCxBz9KoDXV2yyfUSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTEyV3ue4gwTFPCW8yij6kh6xQhB1cfaUpLNAsyEdDJBq3VQ2yej6pFztXLgZCytHfaNqL8pqLxhLPqKa7AtoQh",
  "key1": "3tDAhguUmoMedybY9Z1PWebmiEcsk2sZwJjMozK7CwEQ38QGCH3KbS9qKopTH9mGU5toDurrwJcEtQxq1tGKvbiL",
  "key2": "dW5ZV8j8uLT8ABzxwdx9mC7sEvhj59CEa41VxYHxEoKRfAf6wtvsGLZsSp8rw2woXSBKyCqwbPWj2kcS5YgJNVj",
  "key3": "3jLx88f8whnpqTmqvfFY4PLQWDgUQFYy5CFJsnWttaAZDYyxBYcyeFTabMtchPYCMQKatViyMp4BwkanzJyW3XVo",
  "key4": "2ojyyHBwGFCCWp5hqj35Lqb63VKJdGjVjQRJquY9N6HTT66EHBfKdPsGRdJdHFMR56rgRMXjWgUV7c2zLcwkeW8d",
  "key5": "5iZ23rZuam6ryR88pjMDdiGwcPAPiRMysMvPxMzecE9rTA9hgj6Vn83kXXPBksh3npiJNAfCm6riq6wrwDG4gwVe",
  "key6": "2QjotkADqfHneAdeAyL18H7PvUFA1qcf1sdnDhQemT8f3P3LhqkhvGTmcYGNrni6EAAiNmQKcnqWzFRmqerJyw4u",
  "key7": "5BX3xDK8E12L1QfGTMYGt11aWL4Yrb7eh4fRe7o1kvKYnedweNxHzddivyWCwfcBFaVpd4bSLneMvR8RdyycgRkD",
  "key8": "372uUMjH2r9ntLNz1ATcoM6RFBQsSfmqVtYWs1mPqvM2yk34J7Z5ux6HFAYSLmx2S839byvczPQngyuDhYyN4Hdn",
  "key9": "4LUwvWRrC8PAzoCWGsTvFYjPG4bAYBBFVDNEPjkJi2Z6UCcjYEb3131n5F9w8t6FEutQx7UVLBom189EMPaSLucR",
  "key10": "2oUBeJk4E2DytUnqLndX9h81VcAErHyZPA7HmvEY25mEm8Zp26yPYHNATgzhmw7umbL3qC8XqaPQWohANpHL4ELZ",
  "key11": "EK68MR53QKq4KhPvbjcZqdL5d2RrEugwn6wQ2WB46VwnWAVYahEWp5zX7xRnor6E1My8zHDQG6nFE1ZRTf78Xvr",
  "key12": "gav9EDjuNpKCzREYMiyXvVaWHrQ9hbnHEy38efGDTynjewJx8kZyyH3EqkdBABTC1mHVAbWGKYxApeTKWviJa96",
  "key13": "58oVz6aYVjosw7mCdEp3wF2nHPUkbcMeALd7Q19q6EjdtfWzCVUmk9GAPEnk5eDubrszsmGnxUp9i6EadoJ4tQu4",
  "key14": "4Dc4wJCXjLVanEYnw9yGnb6MAVr6QmLq15MUttdLz8F4PR96ba9sQiipJ196nHhLY1eA4oyZwvu8Znut1ZLkcCmz",
  "key15": "4sUp9ybPTqJLfeWAWahF2wmZSoAppNHbHfgh7rsyAdedpaKV7BZMXsuxt5FkPuCRd5jN43QFr1L1aMT4SxQTNrTk",
  "key16": "32VxLdJd1t65fBF1B5coFzpEsGRVDMCek8mnG7FHXMaWNuqMjNGR186n1f1nzT4UNmDdxG3pggjxosv8r1cAjJpR",
  "key17": "3KLt5EZPHVd22RRmkWEEDMpMW2tTtQPwWvg6DZ5vApWMFGF4T2md4wsjW98iJKVNLiZBVjn1stgFtADDxWS39Zjg",
  "key18": "2dHVfyTNKbJ3rgt6cU4TgUEGAuKsvDb4NsNQaTK77BgUQUouWAWurktSRQMbGbMqsvRS8iWwbi8aMTLGVefzFArf",
  "key19": "5JSKGaizL3jgtK6kvWLbmZmpLiVymeuCB2bTWj3BDjauvRzZSbM4MT8MkPnAtbrNBbhr4UxkFZs1Px7NZYERUVBx",
  "key20": "3fijtmca4Q6TrBHxaxWgh4PGmSjqrs2pGScTLa6i6qyDbwx1DCx7Crq92P9vwFaCD9pXErdNgkxSSNpqykcEJYeY",
  "key21": "NjudM88VFbYpS9ggvA2rgo86EFwSe2UayR5XBGLoxaEJKcYwuhC5QhKAot3za8xEr4J1hYJfeWPeYKCcoWYKRvd",
  "key22": "22QtW8p4Rh2PMbpG2ThcHfCbcJbisw1Ty5TRgyarp3ZNbNo2yMPYgbNkDkrsBuKMkmJ3vRKDDEnfNBPtw7qFTqTW",
  "key23": "2fLBSyevrJqrRUee1DxYstnUttqk7hMEwKYfV8xbKAzHbXS57Eedf7cCWPkDdLHaMiZ2GkTM8FqEHaHvvpvfNvyp",
  "key24": "57vrTJivHT5iu2uhvSoqS2P8qVsNuiqfYK2eGgJYHkqAozacsvEL38aNEfCQv25uAeVez3StE8fWA8y673JUrTH3",
  "key25": "3EHLduep6Htp4TYbB8PJN4Jnbrw2exBrpRYniS4dSD8WJ69oStXP47nKWvGW4fZ3TqS5YHBKCQ5gg5vtSgs65nMn",
  "key26": "4n8ZbafDPC3HzqxR6pugDmsQNyoA21kJ3KXamRMe9DpR5itMwszF3AfZeiBCJTVSjcEx4jkKRezSYJ7YgeZjCcgC",
  "key27": "3ULqv3JaGqyakbvQ7K78brRqvDYU3kNC1kZc11VkYos9giKeXoajc8MCncjoYDEs47q6XG76Fdv9X8ReKjMjPHuf",
  "key28": "2YFhffZ9D4p7nzCPXBCQntVe5DJVBRpCp74KETLz7RcabYojJX91YTXkAkTURFghDsirzJTFwr342CFNwHzx7Wzo"
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
