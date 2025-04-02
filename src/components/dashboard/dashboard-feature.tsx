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
    "4BehbTYx8f8PoFAg82GJRJSdFL1SWKZnwFfmib3BDnvE1Ftu9Hhbn7cgceEef9sSEnaff3TMEHWxdgUpS55GzuDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDsg9f814zpChdUR8BnhFa5bwt3MBiP1Y7sbD2mZDYVbj7F9KPQ5FE8VfXE16fzmX6kL5KfnjHi7ogPc2iVxEC6",
  "key1": "3HP5rxnuH1CbHq6BXrzcWc5esdE22K4Act7oSjXT6pUewgK26SfFYzfmahCHauEF2ZKqzLZCMZd6gRzDVRWMUnwC",
  "key2": "55qNgsCUnG5kodHv7vpuQoLdhRNnZgENb129j4UfMVXiaXUbuKdHX3sfoMUyuudtVWU4PZDiLvM7oqST3ZFC1wYp",
  "key3": "1o6gecfge31szf8FtSRkmoFfSKQpiHzk5pvqrsvZtXPwPRnEQ2gWvpqpVmKKEPsEUpsKB23WwRwaUyfPumFRcFN",
  "key4": "3HR8wFtsMYzqsJ6xnBaTnRZfZkqrxBQYuLsXM7sijQuFNWAPPrRYEXeJkiS7JxB1uwruwaKkPd3AbcChKL7VRCzi",
  "key5": "4ePrbS88aq2LZpnL1DE9yxn2jTs1FdbdDJSCcXQi2BPFTBM1bDjhH65S88eFj8p3anMwVpkR5vHRM6vTPnQp5YxD",
  "key6": "2a9dEotXNKe1XCB7nYyeC2VFjbmttBdgTwHHoa15UTaPY6k9GsvTHkpvx4hAknPZNwXh75iWYFVm1nABuQ6NG3gM",
  "key7": "5gdEUUwagYvM885dJaEKpQHMicwtvV2SJSdnmGr8W9d5HHMrTSWhfkQcDa13D3THoJveHaAJw9X87DzGKz3nUgty",
  "key8": "5S1R7etFHRcS4vHTUQKDfRkdfbJ7swK3g3QQUwgNadp1F5rxRQMDHgSXdkoFDrbYdTtuEHm6PCjWhd3QBoc5HHfw",
  "key9": "4MyTA4Ax7V5m5f96Fc6FBpb8c5E2FhGX1UWHLFMUDUGDfcpEbDtJRvrtAQk3WFz9x1N9aEV8MvGJhb5fNEsJJjss",
  "key10": "t82EHLaj8j1Rbe3A7QbJy53VuHUy4wuY8ZFF8NwzBWYqYCPt8dEEYXwWPYjNY8y8VccC3hpDYB8bL8NFDHXvnzN",
  "key11": "5FDFxNPbcFx7c6eBcnePFc7EYPB8RztM7f5D5hiYuVxtvZ2UTX96qwhkfpn393uQa1wqydoNXfLxYN9qByNUkojG",
  "key12": "62yj9pxcoKcQFzWRKZ6kkBLMbjNhrXbUEXtNfC5ib1DWufVNWoZj3WRgEjefb41AWsabn22Ftt1SNiFbkXisTBqc",
  "key13": "3kbMaDV6TiKk3xPKNbtC6RW9dZhJjw5Si4gR5x7h7hJvbrQTKSr2bcmBVd7LGo6ewVwq8EzJssgBogxFS264m2Lk",
  "key14": "muQxo7DPzNKdYczwBKdNb2HXBtHjXZ6jie94uBnzh2FBjY3sdi9RxVgWRCpyuBzbgDwhSxUxCVXgMPgJaLPVcAz",
  "key15": "28PRe9QxXkBtwLqBzEcXsjgakDWyifSRbngqWuUCMdmLfXYYLungsgP7WH9u5HcPwK2Ss19knrK7to3QrSGDp7oP",
  "key16": "31DE7kGFhtZTYoK9SYXhZqUT8Dhcsy62pGbwGvfgKzawfeML2EFjWxR7VAhErqCuRYj4GcF3ezyh2KexVbsZ21QF",
  "key17": "4jAbS7GHuziBvv8UJawmg9CfHPbimr4CfnbKzbYDNkVaLDYYtLN2kXtddPkDy6Wm1LnLDrs5Zs1aZSHmqfriCjuy",
  "key18": "2hM3b6b417w8yoQxS45P3GiheFj2r5YaPJXMh8tSZaCyZjEYDRG2HVT96Qf7few6iYFn2xwc14PE4hVvN1JrD562",
  "key19": "2KxRTC3UjoY8rWkN8dehJwQAqH46DuvySm5ySxqCA2EiLtZ9bTDJv63qXuHm2gR4nfve1rAHtR9gE4QiX7FXGsBL",
  "key20": "NUFrGkyWSCfUoFcjwzYwYQdZymWiScmtGUqB6sTyQoHrbPAzeRyUcDBTmXqmE4CzHCgeMdDvARFQjx5pPMqNa69",
  "key21": "3pvpLE2FtFtLQCVSUqRt4XANhSJ7h7rJXq7RbBHFTGAojS4XYHgUdvakug6WYfhN7Tb1QNdsbFkqh9sF2qjNLJaW",
  "key22": "5Kaax1XqWX86C1Cd3fVGAJz6MqHEADrkz4JaaFHRBhFaC9yF65BXRF3Exp6A9guBYvv32mYR47DqSVmkLxytSmmz",
  "key23": "37KL2ytbFMfSAFr26HJRJQrVBDd2htpVqyab2jEUfqS8whXQ1a9nzARp1ZfURB7rDYfYxodEDVAnvmFhPJbPVPZu",
  "key24": "2bEcVuNH6tu1Q78jN778YyKubZsAbrod87Ngdm1FCmmrT1MUipx6bmSF1hnrNpzcR27EQ45dsgPVemid5r7zf7of",
  "key25": "5sxSpw2VoDkRsdFXXFn4e3YEVPnudeRioHVfx52dd5Hc9aGMAwws8i6iXKvzbwMCCaEn8diJVYEPK8T3vgG7jEMJ",
  "key26": "FbsVfb9hZbCVFnnt8HYG6RS2pDHgskAkNi6x88gm65JudoT47wuAEpUojcgtNDqvhStyTvUrt4Fb6sfuTQWYbpf"
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
