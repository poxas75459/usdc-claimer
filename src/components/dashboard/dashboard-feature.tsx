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
    "5NV3qFxD3hsQ6z86bPaZW9kznCHEd23HYiUHHf8QqsQNbqKkBbYDwtg8qyJr3ZMWgqmD2qiJHzr13imtEJfJrGFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Nt2dTSYRfuVtTkJa2JE8UhmoNgRe6YfoL1YAnH5G1jWYTPg6xB1LLDDZNK3ma7xZjTuyv1uiFNXWv8LVtrmX5a",
  "key1": "535EfQGA3cTNh6sCjiarW6VZF7PETAsYF1Yu6A6UXiGWEBHGWEopcH93mSFTQM9hvNvEZXkD9a7AMuDbKPSpBATm",
  "key2": "5fAKHRRpEDScPR4B2Fr1AV5gbhH13j398iDjJdn5scMJogsCwRK5S1wE8VDDVdSTNx2cxMr8yp47bycjhzKFhHxh",
  "key3": "4HUYRkKC4P5FyFcdSXSRRSyVJT5eq44ec55SU9ej6ya4T6T7HE21VpAv7Q1Wnxp6aoZVJrik9UrxEPXMvWe6pPdx",
  "key4": "4ZRyo4nMucFjBeW2EUEKoFvwvftpEg4u2sSRALtzuPwGoWEq9mvKTzvjNAAG8a4G5R2MK4kwUrF1B2gRNEJToMRa",
  "key5": "4UN3gcotf6Xx4fXXE1FqhLWBsi2BfXcSmZ9oN3Nsig9z6XJWzjn9NaDBNNVjmD5Tca6P94RLuGfiXT7io3UWzXA5",
  "key6": "37bHcm7qxJWxDSzesYgjdndXHquu3q8v6EkkiTj8mWaEJYHspveVB9c6Yca28t4mDzwkGxVC2zEqH6bWciwPrbqs",
  "key7": "DVJtsNAmJHpk3rgRjdu613kJYDw8JbFZXM3QeQRMNwCBAqQwy7Mdi6gXnJiQvhnA6o9TVEpNGTvpZAPhG9yee6Q",
  "key8": "2F61VLnKRjgqRqAmT3Dp8MpX41zmErksMmhMACvZbdLQTrkLnzG7frXaVy5WBsGM8en9fPM4Ea6Hprf2NH5jNGhv",
  "key9": "41dX8NmJffsykLgkjrkfD6WjGMENt5rdj542YJLGKB1WzWiQuD3PYnJpYP1A2d5Dm9oHk2T7JzFTS1VpD7vNqtgi",
  "key10": "2rre1FxDjgHf9FVnbDQ19zrQs7hn9QjjedXrPtFNNUHtSNWGxD3F36eoeCG87ZbkZnwTTEoHaXduvQjcTnQ3ZTdA",
  "key11": "2jX9BK1ksN5yexJGGrLtVMYcXLc7sjZCQsSTopAPpzyCqf1XELdToTqMEzs4cwsUshqM7jf2HmECaKABdZ4TCUyk",
  "key12": "5LVTztrLNfBQcDJopMqDiHTBq3BJkcccaWjmVbjcR8i4KrsDyvXhMZ9DjnNvJnuanpCeWvCEp6ckiHRZD6ZcFaGw",
  "key13": "4uMurjp5gQMun4QUzyVxSVb3Yu3PyZw4GvomcHjC1VqUCX7EvHbStqtgQUQQEdaGwwbAiodbUXw7p19rKpRCW75F",
  "key14": "3dcYJQnkXixvYBUDcNA5mGSnW7Mqo5V6SEfefHskdttQimPtyHzHgRRzk6HHubTxEfYqXmCoMwS6THyayjakeSnh",
  "key15": "2tbZ1dDGiiuvwNvajmJ5ja5iPSohXPmcxLsqs2srcLtRVnjyb6MSj9CrxRyt9rgFaaNrPp5HiFTTeUsD2ZMYLTkJ",
  "key16": "4cDanLcvgGJpC315HXE58M6HStSAisrBqXCnQciYeBfugw7pFNQvo7UfZEknKPA8CU1AeMnqoCKQwRsDoUf2qdcc",
  "key17": "3PC4AMpcDEVDehR95TnFLBxjh1XE1LahYeGA4YVuwXgDeFEDDJsNSkjKoHTHxekB9gQbQpeDNNGUKQ9cngeT5dNg",
  "key18": "27pLexQzDN7oaNW4bFU8pzCgEPJCLwWrX1AEcvqprhFAKrusYWARmaSESBHmCKJpbQee5f8DxZQ6Ex4g7xCWMpTX",
  "key19": "43xFvZDccBekX7vZw5b52cVVxRwkdN4oWrsfYzAJi5jt4o9YAwUC5dC6vRp5wm1KNFNPsNN3XX2Kn5WVCULUy8s7",
  "key20": "UJGckya6GSTZ45wPjtmApkEk4vEUwop3fiBMYRC5q52MTRqbShBtVVAoEdFPUNUjV2Zie57nMpuqk1NpwZZiF2b",
  "key21": "5VtyLZDDNimFj5k5mMdipwbH8v4ocH4YFTntB4GeK8CytZrGpnZQuMJvNgWXgjQJsyG8YCSGFPRgB16u2hq2eCNZ",
  "key22": "KCN5JEi7Prw2RKU3TxHKE6xd5gqmzenez1aG5CbvcYBkTix9oAqY22yXmkxK63s3AFrM32YAEWxsaE2vzfXtV2j",
  "key23": "3bAnx9CSqBxgpMcomqfsvyE532iFzMVBcX4TgsvUjL9XhVGgDP3HTybbfTpVjaqF7hsNECY1giTKcpxZRdCqYEm2",
  "key24": "rWBNqCDaCMb3mGGeNd4TaWDFjP7TjeL31fgMjvaPAPZNXVdRykR9WPqXuFsPRvQWhSvTf6DrMMnBofoGyBaH4Mi",
  "key25": "5fXtgwvnE6VBCYzcBybWq52eQwGSNDYartqHg29LjKPwWGgJLnd9857GRjKNArt7ALhD52orqcZD1Qhixj1VrAuU",
  "key26": "T6gdLbMPffoou8PDzMrWsh974hUD2hz67mLeoqMb9B12rEbKgCsig7q3VLsL7Mtb5PJuGooiB4NdTbGSg8NEWHZ",
  "key27": "2sJNiptNdCTTTR7qaaSyZ9iCToosisU2bvZghJy6UCBCdWzeX6DwJUNHPcXjaSUrgYghbAXkK2rhuc5FkbkSv269",
  "key28": "52ebZuGAssVnJNddCYz8zH6HftS4v3v4SCS7v4XLQmAgXRCQXYm1N2yy7TaFHCJXQro8JTq33uPKXKBeZMiktHKy",
  "key29": "2tLdDVaMYAF8hwJusQhbtgVh1stSdjQ8LcvDLv3siPKZXb3ayGn7Lifn4q8S8k1Lo6zb4LeMqBCPvaGiyku7eQzR",
  "key30": "5he95xRerdKAYqMich32eHj3CPTZFYXAJhxgXW8tKhcMynB8ciqVGSarVuWaVLCUZ2Z5nqRn3BLYJwxVB214EfiQ",
  "key31": "2dGzukkuCKbNpfBn4etj65x92mjHE96caLwGaSjZAn4u6wJedtjX1k3cKJGLdMpyvDmcdX9r8neTESQNigfbJB7i",
  "key32": "5CGZnDonQTcoPGeAXPgVNiMjgGqWv4V9WZNbhiMSrLhsXs3KM8sCxaEUMD54L3veSUvb3bFCdyNhHRP4Sf6PieR1"
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
