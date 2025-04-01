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
    "37ysiaWurBWCcYXLugFgFcrDAKSQdzjyH2YYppPMra6uak6kHqjE5ZNF99vTMZSa65Mgf9sVspCXRCawgeZWNZTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVsJxqyfRrNzmLseSFNYVrJwojow1X7FtSSaLFxuFLU692HQs2TgCEcBnkzZBcphP1VbHkeuxAsAszSVVFSxtk7",
  "key1": "5WqVSKCB8fHpHcWHrPoBXZ4Wz3cWgX6hQfvrhjAufxELQQAXjbPt1Ebnj546NSC7CHe2BgJZode7DBcqaSJHiftx",
  "key2": "3KFhdEshLp4Fjca6vsNcuW6jwjkc4PixX3QZHtunchYtgCsSTGv6WoSjgMg1zG6Tfej9qxJy9RmqJAc8oMvLnnx5",
  "key3": "4gGVC6ZiULKBAvT8xvTMsJQPzikGh1t4yYnSKyWJt3GEVZZ5LqTfo63LgHP9ymvRdanbNM8Y9A3qKT72EhFXVNTZ",
  "key4": "447ZMd4HagfVjtay1PZc5dVjJqWmGBn6xLVLSU1eVegibT8fxkvpn8DWvN4YUUxm7cDAwN47AbPtV8TYVKnCoBQL",
  "key5": "4SqezpM5DBLsAnDUJzcZodLN8YVYRdveWNWNYGWcmsc3g47o2tNeHcnhxwYKkf5Kt1T6oaJGLYb1ifsHABwJzVFR",
  "key6": "21xLpfs1FcCGEq5998WyGFnEFUCu4MqD41M8rrMVRhBd32MGot2Y7At8DgU8jNsozNkb3Ny82q9gCo2dLiV9LbCr",
  "key7": "35cCafxJDXmkfndpZmmhtD1f41WC6PNqWKEUu7eDVexpzuoP524EfCA6iRAbrsbRRx7ouBzgvnh66vEXT5susBeY",
  "key8": "fefb9zvv5VF9CDT37pBrRXrdVvxg627JPFfrcmjqkvWmsvALgzbCZQrgQQ6A9tMMkCrpiY8digZMz673mTVQaWk",
  "key9": "26GTWemicBsrE7UZeFKLT8s5gHV8cC9ieUbqSv2PysVc1PmJgh7x16b85fGiDyhiuMmUSH91F4oMpVrMJDLgartS",
  "key10": "24MQcYdY2AUo4uc57wqozBi85TsqpvHZyn8bWri8cvVmrLxTx2sTvUVJdFjpG183JsttyVJBy8bA1qVxAutniFpn",
  "key11": "JqBzVRqRrNJ1wKPmYCtZNDwmk1WcPF5oyKKDKWptoWvVWdEnNdjVZMx18GX2Y9ipkGEa7Wht9PZtL3BNvuTecEf",
  "key12": "2qvSSxRHW6F7HPupR2KPX9fUjrgpC3DAHt4C3g15s2MUQvohFZV4nnGJ5kztkC9d4mFFBQrPF95MxWoabq9MJvrt",
  "key13": "pJNxAyWoUKWe4wdHcmh1vSzVoLWkcUEyp3ogL48QgZS1ftDeDeqMwqooPESfJ8wHVQrsgu8kAFYnsg9nhqDdeTd",
  "key14": "2Wy1TvXWqwwoZnw8GChnoAEagdZYj21rHf47c7xkkvjj8AHZhiYGSyv3e9uL6KpWnEbsa7Sy8PXDXTieCh8gZzPq",
  "key15": "2MSAfzZxJi8cwVpXjY82DBdZYnSzksT7nVb4pWX56qcHBQLtBvii1a9LaZXtubivJ88MTJFY5kDG5j9iCAgUhEf2",
  "key16": "24Xv6dwoiQm5gbkJLYSE9N6GQdhxd2sXyFv67fP67NFmsBd1nKvsofFMFZoKdphe6wXUFnw2toTFvxvTCrcSCsBc",
  "key17": "3xnmRrmv4TvR63dt2hSbex9k5rxrTi7QYm1uZmVahbssdESDhFdSTrVK2QtXWgFDRKe9CG4L7xXJ5yqvxP4HK6ds",
  "key18": "G65z6baFqq6GNWQkACGiLNGDJArRHKmxRWX5baAJtdBGy3kD8tUwAMcYa43kKqgxMWJgT7t9u2CQyKq1Su6LnrK",
  "key19": "X2PMPsBBewwNsKtvBeWRTdPQmdfLTvEqukfHwAZ5FLVirHnETDtyiSYpK5tWQiYGUkckparnRr1Hzd9tPsrwdKS",
  "key20": "5mcvmhwnQDE9JwzZTFUP7thkFERBGDqAuXjQuTsM8gAdBUQvnffwr7NFdtCZLLvzjkQAPAh2QTJjucNmnBVctHDi",
  "key21": "4k9yjpnv96BMxtvmnCdpmPWTee14jYM1eS9SPhA8QMjcf8U2JTnS6bvzYmZcWJY8dkDSyPqrcucjChQHGjac6Pwj",
  "key22": "2xkrvor84CACx3dpHkPo7rdJ15uv9cjTdAnCNrt9SQqoaacUjV2JcibFZQow3iqwiqRwdWGRXCA4i3S1H2Hu2atA",
  "key23": "48SjDtdD6FuZ4pFE2MMau1gn5yxNFdd35NAY5G7sBuBnEmwLsvjiMjGuYqHDLvCcVVAY4EVn4KFv8SFFJk4EjmFX",
  "key24": "2kg7tVxcahV4bDKMggnyg4xNhYwPVGe52uEuSLZbVmykuJZKZBgsZtsarE5eNmzgqoPvod4i2L9A6nCjRfjiiPgr",
  "key25": "2TSiGKkgmvDsoFfeJSLKqmjunp999nzmc7oH6T2beJAFHU5vdmJa2WhtuzUGUtQJ23h9S2erJYK1Y2Q5C5wvDV6U",
  "key26": "2qdsxVCH4uqxZhwerZGxgYZww89i4mEFdbyPwGwskysy2tHThqEhKEsS6pUHAJSPRaiqDaBgEvw2YD7XEC4Xsv87",
  "key27": "piU3L3RoTvUGfe8zL88mXRsyJucmaikfVCmo1nWp9WqVHdpkEcWcXdoKrC2XRYXcTAVNm28QNekd82ebS222fTr",
  "key28": "3B9yX9A88oYfCZkp8ijBwMz9jU483YaPFx1xDRpxkw9mFGdduifHCCzTGSpwusEzSkus8h4MJc2kPQBrw5J3uHzc",
  "key29": "5oCknwaeGkiGayhX1nVXG6FpqQLh6t36i4GcCGvd27ke7zqG1YxPXc92Tkd3sY1ZQ8ZdNPULiES9nuncLAanzeeg",
  "key30": "5L7Lx2gre3VuZVWJ31UUJhD1WA8EBeYi6cGCCUQMt7cdjHA3h8vcVS1pYqHLxmwaXr1ApYMycQnrwhbfdAtmtu9x",
  "key31": "312JVhUBi6LTBvFKcA7i6fMSzUm27ZELJr1Qu3fnp2zY1C4bMvWndVWBz2akzUfvbaNdcH8Jyjx54iaKWT3cqdcX",
  "key32": "5eYox4dRagLRF63k3gociURWu1PUaRZv7LH8jF1SHjATj66aQWATXtRfLjoH1Z2EpJB2c7HpP4W63GJepMNURhGq",
  "key33": "5tQCXbaeV16tR4zVsYbxJgs1frcXTxhWLTg1xSHhSqpuoDKMsWmzg47TBJyRMtLiovG8dPsnz148FfQiPHK8fQdi",
  "key34": "DQzGhL6w9EvZDkrUhkGRBALp2gPsJDTY9z9SVNvxiVGVV5rwKhH5AtYN2FBovuSpfD4dVKhjsZQV4HhqPs4CvXX",
  "key35": "3dtkjW9cbMuJSkRmdViPCEbaT1PaSnh6qqxGKsgH4igGB1dDrAEzoStAPPvtiWPCA8WwwKN7KhGtBRnpxQj6n1ZR",
  "key36": "4pPNb5FSB7r8CWq4UztBDELmq5mt2srk7J4X2PH4eSjQckJCDzV3SCCoXdgeSRD2oYEXF4EPWX5czkBHLySxBZe",
  "key37": "2g2DUXrxw1cRruFz2tSimyMs2pAS1yY6bTokvmA7PfU7AtFUQGiBFuLqZB4v1w3xxYGtqTLWX7a9CZTBPgWf8mrr",
  "key38": "3C39GZMDTmc3CXN6TgrjYXT7UKYe2AzSVDBeefECLEmiP5rHT7TybTczVzgsEV9hBAYocB5iVfJAsbfHcveUM3i",
  "key39": "57jPD3Yaahd1Ypyv6RMm92ppkn5EroRrfPs1vy8SHoWafyruvepNvqzti5KnvGZoHAXvCYkYo7yfQTsBZSv7WpuX",
  "key40": "2dTb2WiAPxP9YwkmUBKisuAuf6LArYgvQ8zNmAJXVcU1vnPcEQLPmcuxUWPSK4dWTN4Vbft379Jny5dsiBo4wygS",
  "key41": "23ZGYDVgVQAAjaKYiCy1i9QN9xtXbEzu7iJXxoryk6gycHxSthihrV9jT3fkeEb1ybRqcuYLFfNfiJcip3hj3rmA",
  "key42": "4sMe7iNhSSBouW9pVkz62HcFBHLwmAxjKw6Red2328C4BcfD1wiXpwpWjhKvLiKXRmWHTEF9rcreR4vFkoCrS1jw",
  "key43": "reDT569HN7J62vyzU6fAi8e7f5V6BuDJS24mvGhhTr2yZDWbDYSLDfyg3c1yRCTziKH6fHmkYusfCepRNg9T4ou",
  "key44": "3gD4qckGv6KGZaRp8mLfwtQh6U5Ad3F7Wd3h1L2GdS4X6b4JMBkVR9CB21ToAhhU7gmihJfw1USomvdh1AUTijRP",
  "key45": "98pKhjkKCJpMffWeLsCVJeQUS6vDJwqMV7j4SvNVW67jJV4ZHwwHHo9aXFAYJLht9haHaFAR9yzujh52xgQ5obj",
  "key46": "eri6SZdeexagmNB5c3umayuJdrYHSa3EkC8czUzXKBCzGWAoxukCs8XC3dXQ3F8zv9toitDdyj2aRxB3Hia8w2Q",
  "key47": "3n2WLS2tQFXubYWuTvvdo89Mo3KkPwEe4HBqJi73VnbK3guTefkdNAxu387vsPnftyMC7CTcimfxnqbgwYMjZ7Ej"
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
