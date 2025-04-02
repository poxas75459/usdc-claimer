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
    "YFMuT7iua2oaHbcpnGpZdMqfneERwXMn66z4ACLLECrzTBqYR45w7e1up9qbB6kPDnfXUyD7xVytMuPybYdubiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xq3fnqyxJcgKwti2K2h1a8tMLKPm1fRV4wAuprzbsdRRaLw6FtEfeAjizYQJt5SsjXbizeDZDQqFkGBGvewH1P",
  "key1": "444mrxWwHMumVq78nW1WbDgWPdYp9xUi74D9C44hEcELmnvANdcNMHeakEhrpdYDrigwHy1eporeD5vhek2JsLgY",
  "key2": "5hqHZwwv3bbioGFrmGieSMDRAJZjr2r1Lh3oGZ758XyRMnCkzPhFg1VrbiLW1drcYdThmtWExhFyyRzAyQFsuYwS",
  "key3": "4pnxtX69tA7QRbHWMWZJnmX7cSCAWLrd5aqmKdbqYFABqpiDtNG6oERcYr66C4GuYSS6F3sDUvt8qoV1hcJ87jm3",
  "key4": "2UCyZKSnAqfiSsgMRvxDCdqz49eeRBCAT43pK1kJNLHMKhDUZFNgjCKEYCvbZ8nmDbvGiHoXuao1KChDodeyRzPh",
  "key5": "4RjJj9sVCuwdbCgyRjdKFpxqQrfBqnP3Hi6kiW12wrxB4q4LyDGapWeqp7DZjhzJi1s6riAfF45QMddEuQztr1R6",
  "key6": "57BU3WhvPzNq4WjrszeG3GTPzM2Yqbkiffb3PbVaLzUNMHYZ5EhaZut8uuYuJRedWXdsc9CG1exb6P5qePq81rVd",
  "key7": "KQLVPTbmYy3qf2E3wNbzL8zPtDPuVJWyRnRj3ND2ir26KEBdxHVSgJtBQHUcydCSAWY1ussDuvwfFCcZDTJyRfZ",
  "key8": "3qJA59yb6rj7EqNA4TidjkQJEfQTL1RK4NTNfXqNayUTLP1vpjBtfbQadLvbAoVdHkCNusaiuBTwvconXTcK7gpD",
  "key9": "YSj9b9M2oTck4C5P8HJxFEageiBo6LTnWDtFMxNB5DcyXGn5QVWA5KH2DggUDVtjpfUxd6zu9qc3T4Vei93qTmx",
  "key10": "5HaWx6mJvtBFhKftJbAoFdTweJsVvL6QxBxGti3wkYgP6xVaWPTiLe36AopppsdN2rz5DV6vuqFx7iwQ2XkF33aS",
  "key11": "5pm8dNSSh8fS4uUvu5JDEjDd3PB8qz7u2XpFMW3ykFsS7Y5ZYsxJoPrABVqKLDGmCHUrc7SCx4UXBudnMswknCC7",
  "key12": "32QeVG9BFqZDM4MvMBXwQd1cffS2Pjnx5bqsqSahx7P1Vij21Eo7pQf5cL67dZaR2dd8BJ5d3Sd5pkRZSQY8V4Sx",
  "key13": "4kMUcqouhxwWSJsKfqvbaEk1BdqcyuHYnLiqTGPRRkYnMNydXXM9k9PQbTXzpUGbMRMpCuGTg8W8VVv27mxQLtWU",
  "key14": "2HCAmumbEpqtUUv9fWxim87AXRTT1TAnUuYx5Lg4M5am255HFeWzLo9uZQpLoh5aD536m8JXcCbuA66BAZPQPy2n",
  "key15": "25xKcwrkzGfC2TLTGZ34nb5GujU8jgRSwdUf2rT5dc2cQdSLdqtmsQCoFA2WZrAb5DwZw6jv8vJ6VHhrVREwHu5s",
  "key16": "5fYY6CN5M9fjLVKpSJJTw9wtsVu9DsSF7xxXaBXMVgcPcWykFhuRmXu8Z6wHjhPyaZHQJAKa3dd6ek6Y8HMVZHZs",
  "key17": "5WVwmg5hfsQ2FKDbhuapYBWXDySwaJkaiJj9DaSAHQecxmSwWK72UZHgMX4FnryRJBziTDx5E1wRNk73RGpXCChn",
  "key18": "2GMgV2qBkPg1iZwEQ7kkFhGHxbE6H42U7e9HsinizAGY6rbb9VvayEkPdNgfvZ5oKgf8QRRp5wvGkCj8DN5JJPKd",
  "key19": "5DAwB8GdrC3ZtBALAnqFwo9uhKSSYbLBhC1QJvcPiKKYL6RXVcRHFyM3nvL12z8acMaJy61BcGxGhNpjjChgrd4W",
  "key20": "DXwWYrEB7pxqev8q4qc7nzgPWYvPs8BmWgJ4QiqmRxcbiRo9Nd7VbBY8DKaWLcGYfMxHyYCYNUAnYtGkLAAoMDX",
  "key21": "5mwDKbCgP3a5hZX5NiSoSZfzQgtoKVyyhKCvWbkU6XuHUddD57fNymNFycuKmXLGVrrmQdGV1YEudec4fagpZB8B",
  "key22": "3rdmd7Exvya5XVpoZhJEauUT8BRM3aCWwebVm29mqW7zGz8GK5p1Njfg6WdUHXQ1dYNRkJsRy1rkqAoccWNUZZEU",
  "key23": "3P5efDgE6DNNKztSRNfpV5j8ige62EroZLt8k3NJnbSMwehA59tx6zDh6qshL73p1xbm6ZeWXryijWR6U7W4Sznj",
  "key24": "44nB5vdBhgEv3NfvVvSFJSguQpzcfphbah4MjcJ4oxEAhLoHWWRWV5xUQrG5AyN2JK3z5u4cCtZeeebWU32R1gqf",
  "key25": "fn4qaXFUc22cT36qjtayw8UAcBB1G8ZanRusNbbC4wSETzbD9F1iKzmshA8U7mEusqVJdkGJxTZhhTNxmdKuyt7",
  "key26": "2NRjLWBWjstN855eZeBugbVRfTV2s4q8V4uLHjaQB9HKHyyM1NwwrqgHtKWHAePvbhYD52jLgmTZU5u5QHsHLRYn",
  "key27": "4a6z9uD9vWDuDYm8C5KWBXWwqRPG5shhdwE5ubr4JVfibjU5oUKTcBQiQbW3oX1GBDDERVHfsAggW2tHF4rYKeGz",
  "key28": "4WKbZ1nWA8HSJGbX8D93oY3aT3nsK1arroBt91NLqdkFRa5DSj8DrnwzSvqq59hsoghHfMJxcSYzk8GLP2WFkC8d"
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
