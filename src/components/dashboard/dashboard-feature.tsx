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
    "ssMzq48VoBiSRtu2SDHXaE9qthNzgprXwGTMvuXHZNDQysA69yDhF5DbXF9s25EwNvhAVcQvpXgaSeK5qkX3CJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wiNvbs9ic1XiRxaTpZ4JPRT8n8DLFMJMa5bC9dHr2yQVxsCP14ucK62ajZm1hvg7jLdjGrkA8RakYh1FfJJPYZ",
  "key1": "4PoXUNL5B7XHY3EV6qL3ibRzC6cDyDTf6BWUWYegjuCvwfRFAa2CTibMX9JbHTZZGZ25LTEatpvkjX4WLCxrBp54",
  "key2": "3997kcNQPgLc6fxa4bCH63EXXVAZaFFqyVsoWzk87vvusZKBH6nSEbmAbPpLD7aBy1kR8MrZmZZ8Hy6BwFtecBLz",
  "key3": "5b5aZYpTGGD5ajhwEjgtaFAbCTRSyY8rdv84bxV36RNvaJP5RRBxcWZhGM5PhwHRj3ha2rARgDDyUr7yRJjEGRze",
  "key4": "5VYxjJ9dovvBHxraEggKi2zRYfbFX7tVVj3x8DzAjKbBXEvhwbQhvNiUrXwvhZNdqJSMffFs6EUhDvhWRYYJiTDR",
  "key5": "3BQrSdFFPn9uZjznAgk5ciGaxUcPSkh39k5WSmzKxyEQ2xB5173LfD8UsC4xmvhfa2Nwv6xw1JwheFFwzrQkvwDv",
  "key6": "3MRaoheqUQTd4RjFfw96m117LwANBL4GAtcgTqYwux2YnjYdkEGNohuzGDic9tCZBG2KtWAP9S9yEBTGpseFDTZY",
  "key7": "3Jxs8txCpV6Pu93YALh3YspLSRe4ev9Tyet6gNKu3iQChBWsk882tPTt1iUoDvqGSzzZsan6dEcZWXXvT9fKnGLh",
  "key8": "45s7AgWV52K8cSiAg9F2WK2RLi1LwDwBNeD2MduJKq538JMnskzGrJ4Y1qcEm5TXMEmSAgajQw6c7XS9A9kN2Qdt",
  "key9": "4AEwQUHQKstWw9H8yRiURKidastvsuN9i2jrrNL1YJ4KT9Ssn1BqXppshBUS7aTUyJGS45JpRswtFh99VTxoNqte",
  "key10": "5zihVCVQxTdRPG272aPc9SdK2NzkPGSh6yXf4ryoC14sDXLbQSXdZEyi1PUhCNCn7N4DVg6512VWAEvNpNBLvce2",
  "key11": "GeBWDCWtDCrr24C6QBAvRzD2DKRWZeyXZ99MW9Nce8uQop4QzL8CobygBkK9sWpEwCvtvWrLU8baLbprLFei8Kf",
  "key12": "58cK3ztQoEGcYz9F6XFZni4FSHWns3pb9wMa7Dyz41kZn9tGsWPqUjPHMUkQadLK4eGrMKZxVyNfnAv7qFuuUDnc",
  "key13": "2oRybwBB1AjrbHo7SciSQpziZP9zkRTWuASSdGGzcqrpdijoNanPhQLYmgFVcvD4MLi5hWrS4AJVZB85QnnptYNm",
  "key14": "3s9jXxixX7mdkTUYc98Q7vu9ombznn7SRETDbZ3cUzyMqQTahkbnxo66TYTPDCLgpBZe1373UsDVwDa3dyo7nqgT",
  "key15": "2RusYtaCjqEBEk7qqWwytaMeGT9RiqniHrJgFHxaS4kWYdmGaJYwKsREhLTL5KuUjwvX2QqCTjX5LtLVuQSbevwV",
  "key16": "4rVnbqGx1BzE4Pfy2Z4iJiKBWqc8ediD519Cfrv4CzDCG75obp6xot14gV8pP27Zcxz7TjP8Gzeuakcq34Q3eNc1",
  "key17": "yzJqvtPTPFxDxeEiRupnQzTut7yX7fXdyrqQUJGgnYxCVpwdHkXupCJRfNoKz5W2Fhauj15wXZ1FJ1pb8aZigi1",
  "key18": "4qkEhmLif947ijWWUyVSBPCtSnkBeM17rqkju6fLBcrN6em3jj23umMAgq5TMkyV1MK6huGJ8MvuuHSXTzWht45u",
  "key19": "zg9o3TSyLtWPZ7Wq4g2FPUPTEvgoA8EhvTYexBbPZR9gUySYXGvUNCAqb2WAJC6d3gWVze3bG2Cy2VgNxPQiRrP",
  "key20": "3fKD84ACJsnNYofEe4Bp4VXUJLiGxTnH2kR2AvtKbxnJneoWq2ahvefXoVEUVR26yeb2uEbcNVXkrLfxPcRLCysP",
  "key21": "3JG8mxVhZUuRbSPwTaBtySdeodknzvd4rm8MkpbzMComcU5wXmy5Zp5ui1RaSdvyi2ZbNf6wiyjPxAYYRodzePLg",
  "key22": "4W49D9ykTf8SLTH7eGCUNm2o8QrNQjWeUTzRWcVcBHQamYR6HgEvegVDRo4jvcNxZMvp1cBZJBAr7Hz1ydu3RDjJ",
  "key23": "4TGQZikxSbympVk1S9BVUhCWDaUKoPY4eJ4BGzsa2RLDcQzzLgxmjxJTJgr3LAVd4dPpZdcLm1aJP9hYTYQH3QXw",
  "key24": "GMYRnHztt885MM96JHmsw5VsCtYMwds5e6ZF6EfCYMx4Lc6QYSbu6n8BfaYbbKCYnbWJPYT97r8AQPZH9UhCXxX",
  "key25": "4UCa4RgQBrRJsQgJwKSDQGTPY2p5kUCwz75BkGb6S5xXhFA8Exhe8euVwMoRmxqpLp683tKfXa3gMNC2TXuhjAB4",
  "key26": "wUFCQPErFs9LgutAMaE3L5Fu1udCfixDauNAK37fUBAGXx1SEgrWUygTfd66GfcjNTDbcuAY9DTXCBooyHf2Qhs",
  "key27": "4By78Kh2kDUXAJjohM1U5yzbjAoR67vN1jGWTa1UHywgBELwWCcwra1rD79oJaUnVmWo5cfQo1kEKY7jko59Fda5",
  "key28": "4qH3qhpRCTf1iV9D2opzpwMfV9HaUeBhe4i8jB1SbkE9FgTDM6B7D6PFLuVKe8YRncUgKxbKVEmZVQYsjxxVZitf",
  "key29": "3XtBCg7aZnGn9PnnqtPBBarwxBUi5vbHv2rcH8sF7yWpYom6q6wdEVdZyuwMXpzTsi7HHcw1t6w9KGcUHARCi6Un",
  "key30": "4bjrRGuwRbFcAtCzxTdLPvsTqQtquygWfD4TTUVhMZh34b65ooEs8oso8HtSupWpVPUBKVmV49Gspops2CmWivor",
  "key31": "5mH1GcS1cJMC99NEYoqtVM3Uw12ghs36m5VB7svAkqCEKm6G8yhYsPyTdNdtJrdnTEdiC8CyC1wHgm91NEZFgvNm",
  "key32": "5U9zLECjAqm5yduUAmHb73LRTZvo16SzrBdC8t3Yhxnu5y6enWSsbnh1Zn2N4x5Cv2je8FSx5YpYkeFNiE4L5rjt",
  "key33": "376sN5UZM2WaYPLVTc1MRAwjDbFKFjxCsX7cnf98rt8GyuMPDDgsDDz3uEQFmk6orxd9A6akyfMPSvTE2EhcpKyn",
  "key34": "3rZcgQbcd9QWREekUZ16NFGY3JaA3pfUuBgFKy9eRRth6NXVQwXKPeimBJCcNTLpsaRSmqSwK7LWW3n2iYv1gf4h",
  "key35": "5ZTJcDHHkmUuv9rr8uraHmoR4JawysdJNryk5WWbCiMB5T1dZ7XwH2a2pUJxXNPJnhncmRtDF9DJ8ApBAkj1diyJ"
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
