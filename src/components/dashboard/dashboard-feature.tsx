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
    "4wWxHyWbG4Pqy1WneGz58X4TW1GaHGW5xDUGbrWtWTsJXQHNyM7V4kKh8NXPjQjrurTSCKU4NbGBSodzTSHhGs4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Udg9tX7AAmnvCq9fZFUhVTE5cKh9v7VWFNuodnJg6rkujbRfFr7SGim9uicBhhJBBe4Rmghnu5CL3f2ycy6ya1Z",
  "key1": "4nDzyqAMypw58BNtqjBbFmZz7uiyi4jM5PyQTmq4g1wWtEX1sSeyowwmJyvy2gue12mc7Ucx5YstLoy7oVm95ewM",
  "key2": "49kgG6MBeaR1ied2mwtSy5AjxrCMYXZ6xBZ6VznQgzWF2L99oVAbQ6DemKgguVpGXffhCCsbJVNxLnbDhG5EPah7",
  "key3": "3BzDBUUJbtr6uYu6zim6uRUkREvYPyecWzm7kEtX42bTP2C3NRDzBAdXnbXT1WzCPJY9JDqUAtw6kzJeDoKY2n9v",
  "key4": "3aegtZMozJKE14EMYnqQ7wRzyyQrHsMRguRjxbueNhmBtU8LwqUxBnXFT7qrDwAZ1VV3Ert9YdSKAy3TcwHivnRE",
  "key5": "5eLwXyv5WS5xqYGDRaK43Q88xzCm8Q7Bd9fvjsdczhoQbrQEicRxFz8rpytovsBGqMeNtw4DFAtGodGp4zbD2QHx",
  "key6": "4xk9kaXLeTZkdxQjuKuQQaYAWh2WahPvCYJKJR3NUcAkQRUGbPNReRWh4xQekksUVQ7pQEEn7yqtogMCpzGWBso1",
  "key7": "3aJzgAgELFUTFw8z882Qpaj7K15t854grVKvMiVpZr9HFJCCafZDb77iDvj58vwQHYpU4c9hVEPDB7ydK69YuRnb",
  "key8": "3WmczjuS9mpJqXk6pmVpmt71Hftf8JU9W6M4Lf9vo5ttqcp6bM8QzPaYHNxnFeu9mApbVdxqr3sdMpFCu5An4ch1",
  "key9": "LSZNXhT1R1p8t4RistNYs5ZnjYyvJQDyRtzbSK48pdGsxNsLBQcdiB2T5ybkAc1Ua51jj6eY578e8S5ztFtME6s",
  "key10": "4T2UHC7XFKs3qQYGksF1h1MXMDVUsaPf2xcH69fUkxCifzMGtMvYuETCqSUSB2M6weGn3P2ctJyoKzdVJibwpCG5",
  "key11": "2Cmr8oqERmm8ipmGgcHYzQouMH6tkAR3AqHfHvFT8wjQw49XDsJNGMCm2SQEbiL7XLBZqLNReP4iDS32bp2Z7qAv",
  "key12": "5ym5xDkCD8jSJ2kaW1hXx1PNJooDLc9UQQxCLP9dk3yq4YyKSS7U85x5APYejjUrLfR5kufLenhRHKMPg7NLjc4Y",
  "key13": "46KoWsbZRFai8UWGAYTyT7eVzRP6Cv86bdwqeCZrfxairPcrSvB4TbtMWxLJmeqcbNrU1HvvMwKjPsh295pBuNG3",
  "key14": "ZyRMHBZCMRrf7YjMXHhVLB6YxNM7a1qKrQRp9sQAK6wggywXh6LrvXKRjeHevaLGAHRp3TqkosvpN8rk5xvcZHW",
  "key15": "43JZWTCiSLo78DcSiSerPhLMkjn2By6bGN5udZwEzjqrjr6PdAX3mmi4yJ3RuvceRre3EayJWqpTC8J5zDKbpX7E",
  "key16": "5HAG6Qfx8nrdd4zMCuXYJSpZnkLzemeZrv5bhGoHmU2h1C8oDDVdTeApCpsPdYvJ6Sc6UT8F2s336TXf9A8hhmPu",
  "key17": "47EqS55UBtPtoxa98owJ5W9jbAafQbvGStYZUw8XMQ35CBcnaZeemB1d1ftWC3xYVh6b9MrRMCudCMUY3aDMBkzo",
  "key18": "3pWPtH7JyxYumR8e4kxgAFs3fP1xtdZHoFUrTGE6Vqda36vNxZcf5BVeZ1K2SLTcwMnd7SywSeNkba1R3qXm3EBJ",
  "key19": "4Z3NzVerxBPbFwDb7uC9dKjCX5vvFfbcrQGcgTF1RVhYAqSYVmf2GiJ932dvMCafqj54kYWo8q3YKDFV8w92DEcj",
  "key20": "2Q9TbdSMY5Bnsmb6fgwtdPnSKWdcEhPuPipayX2WSHqngsac6rLt2SDFMPX6Wqm4tUJSRyVS4X8Mfv6zJieCvBg1",
  "key21": "55ED54uQLDk8ZjyRyR1tkLgvLqHqkGrS5CMbLxpC5uFevJxBzLHYJXoWNHeQ5ksoyDfbfcMFx8yvP5B2Y7d9Z46b",
  "key22": "4zX8PVTQWXijBg8UJX2bo85uird4EmVx55CXSwBKxs63ZjEaBV4HjkQsxL1HVfGWkwCkkUEudUKjC6iWFEhsjXjK",
  "key23": "2cAyVhHpqaJQUGunjhkt2ypnJsYXBjL6N1D4Jz6o8C3rMnwWhpSY6H2P4QpTk3JTAnjvCdohdoxbTVdtHKDS848A",
  "key24": "PjPQuhUzM1rEcNScq566sRHAWvxRK3VRuhCpuEieEaChcXJEu7qBpp5Ma9YgkqbXToNHWHJpAZQRTGYNDGmFnWP",
  "key25": "65Bq6JQ82ypaoTsDjo6EFfLUnYTcX8cRr3f6hB5E6TZotKCjRukBy5FLEZmT27pZQVnnmD274qcQRvtBMFVitBpR",
  "key26": "5kc8Jz8SfxxAFojcQnYM59eraSzvmECPBYh5k9VwUpdfywHKddaG52XQGT1ytabf5iAQBqqzEWkXECp1WzdnBwwD",
  "key27": "phKZ5nAQWEzmLzC5Pv51am5Kj6CJoJJdXjv8xPPSiYX9tTRpTK1KCs6MsDgVFN1dW9k6FKZr2EHB31o2Ay2t8Uh",
  "key28": "ooFwo8pDpuUqxmNDnbG7WfEDkrMvejtGTmJTMajocDGFNGaYD4dAicR3gtp8FqRcay2CZTmKVUubsyvHiVBWYe6",
  "key29": "3ZADkCijzmsUfEztctJrWw4gTJTZ9mmLY1xo4Bbj9XRBHffTo2mTT1gWtRkCXTRMHZvdUM6cipXZNsnv1vkfrGdw",
  "key30": "2DcC8aDdhame2CsNpjF3vLExhw3mrBtwce9v6PWsEFoZXa2RcmPbY6P4mSraetcKp2GAdP73mhnb6L2vTi1TfT79",
  "key31": "65NRnKa3Rhr4duWKbciTkA5f8tNS5VGy8ZnWvkvZQrStSesFME5s9oihFgLqKZjhweTho5pkjahyKzyR3PCj1RoE",
  "key32": "yMwHe5xEzUrqhhcAijJCNy5jnMPpP5cu9HHcxhsUKYiKP4ncXzz9qspVL6dSnJ4nyTTsmr85gdKhCwQNFHmuFFa",
  "key33": "67pXbB39KhL7XfDE8EtXneackYooL4MCR3Re7bt7HAek82WPFyLEMkXWSPrXX8BgrGss1gtxWqMx3JXUu86UB5FR",
  "key34": "21J57qpXBuX1YqYsmE3jNvLUWzFKq9i4wkRjqnfQcqGvAAdZd1pAV2EdNnDxwkgWqe6Er15TmkwF5TxrMqUCuijK",
  "key35": "3yu8uUGHGx1E2xmRRfD6V2fqfBqMnPEQA6Rbi2crUJsHT9tVGWpZKg3hGRFBE5uL3rcnKZ2sjZ8NdSKbjWqhEfZG",
  "key36": "deQuSuJ6U6Ud36nsVeAqnyPXAthFwqZh3XuZy4AzWyHY7kZmhAXaved1GDyYsHSMRrbya1HyzjSoZ4k1maGnjac",
  "key37": "573Bvi8sd1YbLKC6zkvbaf5kDQUmR7zUTtkBKTuUcFrFPB4qHMZynxpHdHqGpLkDf8QLUzv9tWAKFkvUwUY1HR87",
  "key38": "2Xi17A56LDkaDFznHySazusS1PhRzsx3ujjKFmw3SMeRBBztaYRwzDB1UFJ5pKUp4LfXsx8CSt1Y9qQcwJXcvysS",
  "key39": "3o1Vxu51gPyNjPwrE5BTLmoG7keg1S5ak6zcNxZ5ZXpX3Es6BqgQZJFJgs1dncyCYtPCgAnWLcHUDXf16eu29feZ",
  "key40": "35hLPLyTUF9mMkTWDifawQEiZ3TysY492XyyeGfn6pYHUEiN9wBC6b4XRDhCjrvYYQS1LV1CqoM1bjFEMmrwSWwy",
  "key41": "PfKooCPDDHa5zCctHYMmLhFK5RDBDUNc8BG3m6DU6AefcSapmmvjreuSeMAEstzR5CVv4hzoDbLvQzUMrvybtq4",
  "key42": "2xeedAJinKsuzTyuSTAKaeUsZNkcY9KJRVDwK7y7FMYX5h9AyTTAkZwmHzF5wGb9HF2BSDwrjSLBYWHwK3czc5jY",
  "key43": "3FRt44X4QCmberSJeFrXtwQQukZGtXZXLHXuuawZ7Mx67r4bdfFEMvB8dhC97ZY73EU6twupHTLVWjeR5Jy9wZta",
  "key44": "3ukVc1vAyTfSrznN8cDc637hJsKpRAairvyeZTNci9goS7LLY9Qn6jgTdkTQqReEkgfkei7epUk9SEyZpj8GU4UQ",
  "key45": "4fyde3vEwfMF3oFYQbR8WhNWnNafycSyZtyG5U4b34C1UcmxoNeDKPfrR4L7HXU8SRwveuGvFRvY5kGFq1HRVMSu",
  "key46": "2rythA9NMepzTQqjBgfnsoHD38EnJu2Poq5ATh96PYJBsgSvKqoaxHz7kYmo2JmMqLYn32as51HckDaLiGk1vay9",
  "key47": "3M26EZgnNjNJUJeAqfddmPUXT7pjxEzneGS3zJUjSoCtWztrJNQ3deuB3vTsaMgHoQX6W9S8P2St3fjCLk4xso4x"
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
