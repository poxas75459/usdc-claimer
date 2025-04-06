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
    "3Tg1YzXH5iW3FV4cq9avdj5uM1BEJyCHHhCrRpMfgrR5fcC5mmz2Skd8NwQuvHvEUNUdqMPk4uqqm7y8VdETZUGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6wYd1ZmaT5rLJxW5dT1qo21xDRQ4HHfyLKX85ryfbiA4NpTsokRpPpProMqxSVnwWzBinytxRnUXCs7mXdnuty",
  "key1": "4SxgZQzABCGvbjrJKjn73p86L6Fdt3T4DGHibom3DbAJARC4bsYwYgx9geV4MJLH3kCjmBTkHV2QcjRp71rjc3Jd",
  "key2": "2EBHtQ91s6Mr6WKpJahDFvk7CFNiyBZTwacnMkBJgi4yYi9r3LS9YtRNftygEEiqKmRVKg7KwBDG6L3v7TGT8jSN",
  "key3": "5ypEPgrcjadjkE7vkw5pivrGkeoKNpVWTG3UU2e3aygaJM4f3CAWLV1WbHmz8K5h1htTLb8KEhhVwtkU8jLZFgV",
  "key4": "45qkbW6gqeb2ecScAmz9ppPqjccQKqmhWdVA412aTNvaBvm2VYGTvTxsDnMsDfLpqic7bjt3tTtbXRbKwF4Mxbyd",
  "key5": "38m72tAsUeanfbgBMyKtjHw2wUQtnym6DH25WivtKdktjpHPHRGcxD4wxQieznujCbuE513sLVN1m3RDAXuoJKtQ",
  "key6": "3pciTjKRfgtgQG4sdzJ3741Su4DQo6RzHawHg1SHPDBgK5YxBpYf1Srxsk5Hhsj3C6xrMAfrmZChTdptb9r6PFn7",
  "key7": "3x87kvxLMYmPkcwezNAG6BGnf6x7QMgYUtsGCSRUwkfyApHLULNufgQrAp23qNZoqLT4puAxjG8S467y6w2wsJeL",
  "key8": "enbYxRs8X5EwcYSmSVGQBuPT9Ex1smUJWYBt8ZuCaWt9GR6b5e8rJSLxNDGpW5TSQC3do74MCyLKGdgtcue1gGx",
  "key9": "5Qqx8ZSyoDseBMLw1kvWrvvonRLQiPNhaSJjEgrri5RDVagVuUZKRHTRnSPtgvzpAU2b479nGbk2S9VLviQUWtUD",
  "key10": "3Cog1UqsuU9y93gqg2DBL5aKZZCQT4HmjkLL42feoEDho3NkgTzD5jjNovm3H1BE3GxdrEhhz7Y2THyzF6sZ2Rsp",
  "key11": "skXwqXT9yAQArmv3gHgKYMxiS33cAf7cJeFuQ44LCX8PZZ22adNyq3KVFnrGzEtTwNg8TsninvBM7NZU9oopSrq",
  "key12": "3weBvPNfmeuZHuhQXgHajeiwQ4BvyBaiTA2ZJUZwmZpoiXoTHX7iD8hDRtvesjv4YhcmTgmbstnLkaT33RyWTXbc",
  "key13": "5EQXF6jMK1RdbgDLxa67mfFseWPGu81dZP9a1visj9zHXgzfP4VGoXwbqNRuUoVC2puFH1jLjfviJS6Ym3cH5MN",
  "key14": "48X6ohyoSma9weRfvYk5kAEskdbgYMfthLDkPKkDsEQtonnTzqJYyD7z6sDcyhRXSUJaVYs5DGgwiUXt1c91ASFz",
  "key15": "3HboyotRyaU9wWbgqSjKvLE9eR1tCsd45aAAuCvs7fgwxcDbaSvAvEW9aBPteRjTJbQBJYyKVzNoeNxk4S3bDuxC",
  "key16": "2nzeHhAyChAeRWoK2b8baYw8b6JPrzGRTnrvpJnv9jQMaH1vPks5DaZrvLVj9Laku4fCb8RK7TeHFX44ThMci58A",
  "key17": "4RAwEXv8a6b9S4hPoFKpmZRhDAzLLtLfzjmgfJGfpggjyinjsqMH3WWFf7rMp8d13txbztnCp1uwTvhPZwFTw8ue",
  "key18": "2XqNa7LqbVep6yYVcdTtGtGBsMzawhbKwVktei93EWfP7yuges99jpr51SxxKa67TxBiRe7moiedff9SKtJVx7Tz",
  "key19": "5HjZ5HnvL5KjwK6nYZE6pN1svqgdgULFCrCyShE3nWTfCgwvwLhpTG4YGRBNHqLCZe1HjvsixjPvzpK6SfmPTRsv",
  "key20": "go9r5JyVq88n15ToGMskvK8w1SmXXMGkWoVArjVZnxCaj2818ULVGVVAo2U5hznFLR7Z4i8fwDqsMvXXi4XPF1w",
  "key21": "2TwGK2yf4hhRdcqnHsLL88itEC5oeKhC2qXGRxYxjsMDZ1CQpm6bF31c85p2pUDJCzgxaPWHyVBJPA8kHqkiHt5g",
  "key22": "2Nwc3QEGFuTJSvqDDr7Ao1Sx9Hi6QRPYDpmJEne2JHbXercJr1jf9V3p3KV9qZL8Z8jNrFtBTN42kTGrPFR9Fi4V",
  "key23": "4VAy1HBHSvftRsjg1ByAVL59es8DwrPUiNiN3QrKroJUa8AaUfSF6sVRLhKf7sMoTNv4mYN65RfnKYTSjTgkpnzN",
  "key24": "2SYhQSj2CHxLN3ueaVYLzoXEd4xiLTbQbfrXHZ5qEzA67hPW64WnjRdjQtxbA64SZgrDoaUw7B9f8Rd4pvzvS7MX",
  "key25": "33Fm9CRyEzosNVE8oxzWV4YqpL27wYP622PkYPyWuneyjqx8akaLbM3zW5rrLBdcVT3EGY4LP7XgwsZc8H9g42mn"
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
