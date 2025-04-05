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
    "3PDR3pV7gznoJUfu5kZrwL1rSrjKCNkdekubCzMqnkiBiEjBdFaRCeQzdk2rGBCrrLvVoPgQrhpfdVp3n8hWEiXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvwtb1aKceWxkezMXqbG1kWZWARtUEmD64Vm58KLd7xJ2Kt2eGAvWuv1uMdVFJC5UhV4KJfZJM3miWgjXaBrwh4",
  "key1": "CchHRwGdct4iLeCLrjn9TqB2wxw46EGdYaUBGnLW78NnrxokGz4noK8Jwj55E9FkjEeApqyXMutdKnLDHUXJ8uK",
  "key2": "3FPRE2GT8neCK9ws44HwqKjibQR1z8mbot3btoVbewCXibMsWKeeoc68DYuJBknxeVenKVm8CtxtXBPKDRKTUroP",
  "key3": "4ZaHwfaBji8D1CLSzAEttX9RWm6bksbd9GffMEXoPSsdiSgeV17k7midauRY5Vhyav4w7tV8fHWxn4auDWfwexah",
  "key4": "QizvRe8kM6G1JeKjnqykyBooodLMnQPA1iknGCAntVw6SiJtWzSLL5pX34jgveoCVMbD6yVDwwWwpJ9PEYh7bsz",
  "key5": "47EJU463Z74GtmFq9n3R8NkB4gKrNHqo9eKDztbePFfc61ZshNx7NmWX19KTSjaGA8vNajkc6QjfYL4jdGdKNkhS",
  "key6": "wjq5LDvEPCmM85r98Yt22oaLdEp5FCk76tqwrhpWSXjxvEWtxhN8Q2AHeTTrB9Kr9gwUgRvdR6gpd14kmd61FE3",
  "key7": "3qhF6eSXRfL5p8JtvdMHBwB4YnxZe53VqWrnD8mpQcfZ72vuTMHitVFQsmdmccR8UZ8vmPhv6T8p6yCVga3m312b",
  "key8": "jCHNYDCtfzG5rFsDEoPUxyYfntuZqrdczXUxLdEHX6wDicnWe29m9fEzHkA6SfsXeQJR5eWVavDFXQWHkR5Bje7",
  "key9": "v5bmdwmoiuhTMsXGzPJjoAhY4b1cziv8h1TtrNUojk3qeK7FbZv6zkhF94KuXLkcwTHabpgDc7n52c1inPYJwJt",
  "key10": "5BSkvnjc2mMiE9FpZY2KiBvgNNN2KtT2K2F2RPL3te4yPTHbTXQ3uofTBRM1Zcxao1qew94rmRvvtJZKYLEoTpp",
  "key11": "3zHUJVwZ1yMVv6oHPYcTRsPpQpd5FqQn4812udMnHrxVZaANGFgaGSdFNqQ6mae2cRLbMqSRrLypyxW4qRndH93a",
  "key12": "2vQ1MeF1z4XgQwjXg67EyaUCUCL7xo1S7iTtfdKwN1SJ6n6LSzZh8mGCDPN36eeGiZva8Q5Thb3dtnA7YPy4AmEY",
  "key13": "299WW5MnqXfE3uk1oBNQvCacrQNpX9dJoznjFnQXavNucCdDAWTkLvSFQtZL24LKzA18CfGYWxipoJ3biap277nC",
  "key14": "4pRkR4AtMAnsMqbbrLScvyDQfxLtGnMzjt5C2QjBEXgMGVJLv2jXDBGhrf5gY9Kk3886rBtFsBtmnxoqKc5VX6kP",
  "key15": "4HZJyDrmiQjnr7uA4h6H4YSQWFLTxHNeebneetDY5muWhQTnFsr7hPKV3cdENW5hLj1TGnGhSgstmK8KyHpwWVgQ",
  "key16": "3gdQ5kYEFk3sSefgxzUsorY6P2qJVtVNKYxLLYb6CqRdXU1iNs9yx4suVvCKK8WbTakVNimWbphK2cJ2pLCmjkpk",
  "key17": "5vGT7ZLeKhp4UBemwUftQQacri4JdvCS4YEEMoRVYxV43evVCGeJDXZWVTcityUL5X6GzGcUEv2GfEjnCSiXC9gc",
  "key18": "3ypewSyH1EGg5Waxt6xhzXQouU1sxZTo5WC2zfQaCmUXvTcRvEdqLcHiR5q2RbGSPxVUYdLS4JoD8L4TmdQ3a2XT",
  "key19": "2vghCYMY6Ux1c2HWj5wgv2bvWXfFYaxJGdd8eHQ1PE1desDEhYqdfjwkqRKr2ppYzf8HpDTaFkoEUe4XQ8SLwexj",
  "key20": "4vqzu1MoczBEVCNysgE6Cj3KnBhtYCS9am4PUxvKkompP3GAanyLp3D4iucGvPQTTnP6ij8D1UZdnaSZLoLW3Mjn",
  "key21": "2KfybtZzYpd9AwMf5gzzkroqNJrQ7exbdK5iK8gjq8cAkDxEocXy9Gaj1sBx2aQxTrq1zoMhbwnK8wPpviSFMutC",
  "key22": "5Jno3Z915B3u11b2ETCYTQuYDtjLKHPHJLMJV4wfbVpqjAvN3pn3gb9qtf9AvEUJLc8WDdp1sz3aWsN36c3TQMPj",
  "key23": "26dSSDn2MdSbg9QWKPmTxb2eHkmAcbpcppd1dNduLn793XF1uVw9b3rrEgxAJtohBZjmVZxjnkS37KnQxGJbwHv2",
  "key24": "3vM2cY1Zg5tssqZA7iXhymM5G4N6kBCXoiLypo4WkozxoU2u9jqSTTjCAwQSev9MvNYf89X1xB298tnwDPaVTJkb",
  "key25": "2XyDxQHBMVvm4gAmrHgDiXFEtQvfA3xSbmaJFwy86TDGmbCUpyQtLQDwLo5LtGo9JFAZbD6YSwCig3xFzApABVji",
  "key26": "3drBWgCRnkKjs5zYHm9YiG4P5nZqgC1NNU6V5sQmKVddNB4MeGGco6zM3nZcXfv4AW3bNagGR33UkYkxsUXFH1Mq",
  "key27": "59fFnv2358Mz111isAYihez6JNmJgto6qZ3uRufKXzbVjvWVHFUMu7hz4pHDa5s3c4cZPkH6YZw4dGQnY6e3mSsm",
  "key28": "4TLB6eFcK8WYJPmmGAgU4MRLSTCXZbAssEf9FuGZJ3ciZ6eXcYMU9X4XVdDMLR7rzhPp7HDPx5pjcEj63X5B6ZkH",
  "key29": "eR42rPUjby84rMQBzMc1S2z5FeNz5iV6Wev1AovGD5pFfLBhQCRkRY9F3y6jz6X3UTCtYpy2c4itzkhHjafbiDV",
  "key30": "2zqwbXZfVk2ww6qDKMuGHKnk6o4JcTySLNabqGHWyNhJJbwQrNzGRSTnshwkg5DcqcPScWuz1xYodL45zGdxWQuL",
  "key31": "CsW8jbTETHQiEb5b3qJTk1gBxWTJrBqDFzBH8zqPUiepvem5LztDERPCnGfQQ1JSraLyiQQxhkCZy6jw4sZ5YS2"
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
