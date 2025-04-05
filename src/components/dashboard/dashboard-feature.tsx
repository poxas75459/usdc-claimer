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
    "MdM8abWWopeRQw7UwpMkZG4JWSCeEre4XQd9gNjaFzcdKb8dBCUogBsc8TUzY69CunEANAdED9DmG2bdm3iE513"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65jp3nBmfJwCFv8vDHqFMbmKLyDGqwwxxv8HLTdmTn29YRsotw3V8qEy8CcRtkxr2V2s25mw4JKGha3yD7jUJPPe",
  "key1": "3FFKAYpbbWfu2x2k5jwLw24RA9Ptmz4PEgXb2GJ1gFzfKBFomPcH6f8VEWgKK3b9TnDFtLH2uNK6ApNy43frVaVL",
  "key2": "YGGY6RazxumwZnDhyk5LDAt2UBJkchh3Chz5wFmQfVGbmeaokQxSe9zqTcL2MJyRdMeJnvQopDB6FCdJ8jkWDyP",
  "key3": "4Y8LF2kUkcVVJtio5g4i4Zv9fN7GDTYWG1aF3QKZdFcQWJhbq8H1CsDAXPWfi7Z2ru2UeuAf1wANcCcAdpWkizo6",
  "key4": "4ru41UdCkXu1Mdi2tcqQ3LjoDJh19Um7oxJBaU6Z44viXBeuB2BM3cHzVJPdUeJaiHm7FKayNhXuxzkQQR35Cn7T",
  "key5": "Y1gXBfRHn5wZuqYP9Lwk71YTY5BRswdfAgxgzzjuKh7go61CJ6NGHCgt4weGfEGAHBQzPrQpBKyz84TEUrQ4hJm",
  "key6": "2kKeCnXjbG8jZ4Qqa1GgdKeoRkqjxPw6BcTzkbXxCs2oRfBLeZZhCtduKhJwQhDVBM3G9JqaPoXRXfgb6Y18kyqo",
  "key7": "QM75b7LdAKpVG8RD8RX8MMtkV8kmGY3LchaqgYGv4fBNx8AVPZXb7o8gR7QSBqpFZpsYWqfYHgvvdrKXxcy4YPU",
  "key8": "3ze61DoZJ7zqKzD1nNYoFJrc9ruZQWSc3piLaGk12zzSbistLtj8SigYvo9ukcDzAQQdsTcUMFZJ7JSkg3TX5cWd",
  "key9": "2bP2koEMHWo2xaoipf9x4G5YygSb5mXnbRQ5BibCRLeU1VjCBXCYAJaVy5mh1jyTMA1wDY4ZkwWZo3CWSSXu4Q2G",
  "key10": "3eLyXG8Urk38subnNEJV7zxGeZiuNtjBGRPYr3ZvYp782TeugA2PyrRxHc6TWHw5vSw5XueTeGQUjjxkxHMG8Tmq",
  "key11": "KZ9ojLEGV523Q66oJS7PxW77wD8n2Ea2Y2pG7maeBttDtPEVbBf4tLep6ActKpbQB3veqhz4Kkqwz5pTYgFanay",
  "key12": "2jsG7TaQBTHHEuBGQfx1RxfHd1Roxp6Biintsxwdh5GggxPrVf3AA2RiKBMw4uCfTCdZFpYX6soFugPBkMZ6kCbu",
  "key13": "4BDCPewTi8SxXtxAvCCQpQ8AcgWL77tncqMWCBwTP4t8oHs4fkKXaiSMQRp9mm5FwAQLo4eg9VgJGNZ1ywQAabZ4",
  "key14": "5NY5B7wrZGa9UgJrU4qDgUwFBPUtK3oHUCQAHrubBpo5NDr8GAibb8rFEmBJyKcTFrq8KJxVk2vjRJewhZefGQj2",
  "key15": "4o34KnUC7zTfdVpooZwWAfaBq4tEoyMYGiKoTHUMUzpcpwTPZWhuRjpqcvSwMEjhHnUbQZKV9dbWePCyqsgVZXia",
  "key16": "RWiQKusS3kA9owKJ2T5HntD8vVSfSVx79yw66hPuZNn9MGwn6Uf3KwqeEVVfTRDpLf6ZHMqhoxdTwmeEMZ3dkce",
  "key17": "5bvptYkmJHFyVMFPinLMwNwbuKXwDRRgXnid2Wv429SKkMQwKNxoFT2nEC3SNQEXrT8MVJvLW8NA4bZn8g5cw6dD",
  "key18": "rLFCVNYvc9Uu58TR4kqGSfb79v7CaYv8KPDQwBmnaVfBFmhRzNPrCsP1KmAQSpZeEnHcr3NuTyhGEzrBtxtPbJL",
  "key19": "VwoUsbHdw6SuVmJiNie34gee9i9sFVGMj7YiX23SXUDHqFzr1GRMvwTBPGHGGxBkuCasEkhSo5iFqf2MDMrV9QQ",
  "key20": "5RzFKvshbRVXJ6rvAMqkyKAwFmZ7g3EkSfpDAWgKv7YA5Rtw24v7jgGhBSgDwQKoYJ4QFFkCMaECLsvH5dznxTZG",
  "key21": "43eM6A1AeSoFmKcxgEgiXSbiDJPrAGjZgC2CWce42NLh6Duw9LZh375jPSEZeT9zxP564w8muM99udG8ETY4VJx",
  "key22": "3pnZX1YVApC2PFBgdn2nYwSDnkuVxZcVPg4vzjtzCNtk8SpYfd9zJ9F8KQXuZw8wiQwQrUeSncjgNJdV4ArbhnxQ",
  "key23": "4TQyMh3q2mDXthWDRSsufvKXUDStn3dmdUcA3cmu7mzVb6qZRqKcAWhAabGpRfYFYxbPUdutsH64n3k4mCHUR8UA",
  "key24": "3XGuA1ZbKK1eLAmLxmmsgyRz1WGnBToAwT8N4Nu18A5Bt9CggZxjsN3H3f2KBwoQBfBybjYSSzh7kkfeFKxFqRfn",
  "key25": "3V237Wv2PbNZJJ3KsLBanhRfmTKfzVdKyDHdpkcekqDM8sKVA31m38aX4AEaYeuFJuce5u1XiZPcx14qkciF5k9Q",
  "key26": "67V3x9ondszzvRmtM2eA6bQt2JULZjAhNeVNauBFC41L4SjYWfH9HyeJ5eFKuxsHw56nKEbYRpE3L9rkW943CnV7",
  "key27": "2bAAR3wpCeeQa4FAdH5vttSwG1P9uUgj6aUwKgqje4oKt5FURskfrF5H1HtfAZWHVEjPfTAdQ8nqi1oPVjLoMsH5",
  "key28": "5SpjvRa4UvPcWxW12zPtRvVppo9K5Y4dnoi7P7R3qwD4FqkCfW7AJM2WtGHn5oZJ4xyeajSaBTag6WK7MUzcHDfy",
  "key29": "3xuVtC6n4nGQ6aKfUHAN88VNyRp2CNh7pzEpDBF3CEAUo4hg2eTz4irZDWfRw7YRqySgMH1ZBXtAp9hc3DagjScE",
  "key30": "66Rp63bNcGPrnR8iY8tQTsHTp8pVjL4FtvCvSTAA5RKQuJUzqgcjjdUamxi1EFTCCix9SBxsV2ZQSV7ZpXJ2oFyk",
  "key31": "X5WrUBzSVc7rYLBoLdKDCBHC7w25vJ4yNfbVLKnaBmfofzhv85VjM8rGjyDxyFJJH2MSHpLRtjcF9vPXMX9Nw3t",
  "key32": "5yUWEFb76AxjADwcShxEVatEtjkDWDAL6gDy84YyiTeQygN8jbYFqPV7uCEWFxx3NUdmJmNVexNP5jQq99Ysa4MR"
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
