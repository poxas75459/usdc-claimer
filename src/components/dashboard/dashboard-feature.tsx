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
    "4JmXWXsixsTEHVPhQmA4YfVVQYShzMHQjSi8uc29hJMD3wfG7EEn6NzgQ98439e4WYt9HuAT2zAws3D6Qg7fwLDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjVY9Kn44PAfmytAeNbv9sQzD8cfXjQeBoJdPH9xF8Nvvt3w29gsP4Dwy7NNUNNbNictUpiPtZeZtaUXZeZuaX3",
  "key1": "1LHJZdudb7T6EjUEF6kP2iHVjGsVS5uqm9ThLcAuNJbVjhUoj21VqUhXx7XP5BDy8MeAyKxYCW7Qm7NKgC5KP9T",
  "key2": "wZwwDwa42kFsgeu1ykXpS1Who3BTfrTvgmtU1pvfUuzbB7ut4GbdnGH1VqC2cYLBoj11GjA964DvaH6iuVXZYdd",
  "key3": "5jqw2G4kYLsXiE9e84FQiJww9ZjHq4swGvgXNaRsVckCizLEcME3oVG1rabHEjornFfEmReZ63QMTHq1iCf729e1",
  "key4": "51cXVC5FSJDEew1q31muMpHAZ3juAJK4iofGGnD9FpNAQMC5uVawCk5aryWKHGmsTX7v6kUjv99u66ruF4xYv1Vq",
  "key5": "2xsHDcsscp3yJVAkFCHuUDoKz2USj42jHSxW4DsavSW2h41Mvc68gdjqZaahwrjk1pnmxnjBbMhVsVjuE4urMhR3",
  "key6": "5RG92WQdwcuzjimKJn5KKYZY5imLnzoUtX1LsJo4w633QnCs5RfMX8j7TyW6zXuUsH5YQ2LTZUFPEGfVTAbrdr2n",
  "key7": "ub4PBTp5T5fQFgxtJhwW9aEN2qN3G5stHoJfER88ezDAU1wXLtgXGvZF8SY42W7Y9tLK8SVggQpGs8VBm7HSJ2X",
  "key8": "5xDK5kzrC7uyeuYLkaWZczf75Zzud7nM9UQqy2cmmVLFzRRNeknwfdvqEuAYsj3McKge8psWizZq9qawGRtxpA5i",
  "key9": "2JWG1yXWYkWPsmJ6XyzAVQfcwgdBE5QwoFPBkiWxeW2sgSSpbwVJ8anaXjbP47i4xoinUjgLFcCVmapo5F6afXDX",
  "key10": "3ZNq8Rq9qdZbcwQUSoRQ1SS8jrzV8bqQZitgCmeNXBCHnAfC25jiJth2SDSpy7bX6P1ApdpP24vTVebMtdCqvsdu",
  "key11": "3Va83sdZq9cXWuzzYPwy4xTaJ9MSq3qZvGWs6dwjE4CM77nX5tMZXdk3EbEA6gz1fbS1GsBGatpCaE48NU5r3Woy",
  "key12": "4bS9UvP4va3RgXXy9PnvDekPdTBk7EopTWa7je8QsMuvtDtLcv8P3cPc7GAQXybHZ32SyuuLR5UdkEu4EVwquxgq",
  "key13": "5Sj22pnaSbdFUoY1SUq6jSNymTUrrFCZWiJhFkGioaJJFZLaoPkSHa66oJJWHn3RK9yGhuyHm6J4VPrSUttfxJxD",
  "key14": "KBbZCKgmZvY3nYJUuqdEoBCA2rqeUjuGuHjV4ZWDsuYByNhuxXkfrtRRtChUorT9MACWgWTvUpAV1VB9gv1j7oH",
  "key15": "3cm7hNMvRWVxXxwgTu7p2S1eZ4PGoozkKmTCd7LMCEsdKMUaHMVDFRBTfyjvKeSApvjNRWzYzUxdG1SwDpubDUFx",
  "key16": "4ZuPD6DKKcGuisSD4K2E6m6DcCVLjJWiM4vrphW7w8DGXPsGceYbRevvWrB4BcFRy71uAxuoaQAN8ZbyXLHagzEp",
  "key17": "6rAbXqTicfF9cip3M2ps51xeyiHFdGLtttLsUFpxxVSFbjZZ9yeqmoxB3JqWMGo1JnttpKtwCyZqc2K81yzyvc3",
  "key18": "4AExRbxMftxWZvPbCYpeS2tTfv4rjb7QsGLrtBfffdRRhpNm4Hr3VUEMhkFK7jbebTwMU9cWPz9eGfU7k8jZScTX",
  "key19": "3uDLf1oouRuWRvxP9idHtoNMkH14MgbDRPvpSMvtt2SM7mRSiNoMvmof935mVxK3NXZJsVQn54QHaDUzzre8jcAR",
  "key20": "58LWPNvhwp3SdP3RTZgc2pako4kC3z3wAn4v8j2Q21mndMm48XUNXwQiHPRLbMXuL4KJN2GqXKzGTEXu2f1fThJ6",
  "key21": "3oAQJKShd1FYjF3vMZD3a4Kjj12QuESK3QQaWUwMvdyCsry1kYbYXarj9Yh569rgo4wxJ4YxhADJP7Ji46FfiTAF",
  "key22": "44c5HxsDggNBrk9gbuGgiVenRD77wqUgH7uqZgGvpftjnw3hQPSjrMRhfsr3LnzfJhGqKKcerkAXdE1XJjmdUxsb",
  "key23": "3Kvyy88Tvbiq7SRkCGbGH5po74eFMqaRCAyMtBqSqYuJ8h5AnG7Ng4fvKopsFWjsNCtUsUg9LYL91gNobyzJp5BR",
  "key24": "2DxKKyDxJ18e4QqdKnBjDXRAM23S7MoynvyPBk5gMEQZZAtXTuSZK8eajSkAHw5dxWUAYvBrn3p63s3SFy5hqQ4Z",
  "key25": "4ryX3QbnHm6gfVjbJ5WMBDygN2wuxjbqaJ54dChkfph1cE45sYG21LpQMKGPa2H3mFUvUa44qGm27Ce3fb3sHvKC",
  "key26": "SQccZWddWtqbS3me8TYRhkGmRt45HLqx7WjUf3Y39yJrDyd3q2Tw4ZwU4Pzhfg2LbMv7HYMVK3SnqRa9xsjsPqK",
  "key27": "4XvexZ4fmhoeksycQxzRum7m5FyLzJqSdQ1JMK7xWuxGXw3d9MzKUe4rHB6KKyxgCbpyrRKvd1X5q4X35srGuHbV",
  "key28": "dWkNorH5oYwiTcH1QZ1AsqRCsJSwFnVBvJc42bk7rqZxRLibKTJUW71hCXr2CpcvWwaHiQmk7srH79yr2Cjbgtc",
  "key29": "26yWu3e7iiEujbMuRaJmsz8pmESBX5VYz4iMf6FvTYKjowQMqBe8p9jkdfPtgmEsKA4sbmmKdYcDQax91FwYzVqC",
  "key30": "5LRN31ojnr2RZzz19UkjMuEcxPpE6KFuNeir5YzRykw3cLtrEtUBXWk1Ves9RbegxrqG3HeudHuAgYxK5ME2a3ND",
  "key31": "65xHQmaUrhjAtVqHotDXUuknBhAaYZS9n6BDKNxAcDque9WrhLeXy491Ec4RM3eETJ87G5DkJ1fJUUPs72mvxKZy",
  "key32": "3892BQvDcSpXKtkCME3oPrzCRFUmxEnvU9X3BQdSVWMFrHTjzNxPyTMXPMihCruQBmXpPwGUgagPd8wQzQpA7kaD",
  "key33": "212TXje9346Kyfbe5pCh5ussVKpJsYU9XparJyLFHh5SQx3qQPQyM9iwL8dX2dRxa9Lg7tpeQfCGroANWmE7U8gx",
  "key34": "2tcJedrTGVhMbgHVFoKH8k7CY9JkTxqKDgQ4vBkjiw8CSwgFPcc2JTDen4L8HFHjEM2G1H96cXsmYPTNJYjasT2G",
  "key35": "3E5QRiJ1GfWVuGH5XwC42ep7ugZtXyqHm9LPQsQN3QnALLhH313jeZSE8SXiU9htChvXgsqtyCdy3hAWW54Q8R8t",
  "key36": "BGs9QocfhqCoZjX9SQif94MEoSDvkrVSuKQPSK9WvApYGdUfAvSoDapfjULUNy57x6pzKFde1ToghoxWQkwXzN1",
  "key37": "45ypkrrPXeMRqfs59MqeDhYnyMKWkwTnFBBehTsBPs6Act4qqmAyeo5N1qYRhxsK8J7Wf87KyYo1HqoRyDTwnhiS",
  "key38": "4XWmTPNpQubJxQWCARyaxNF48YuYPtpXynwL777NdEXpeSHYhW62xWei1CMJtBvtU4xkZJniNrjmX4N1Sc7HK7Kk",
  "key39": "4oZ3fv7N9f2HoBLtdY1TNAR7WVLk4EjeM7iisfcEEypfdb97hGnNvxnM9rALNKmjVtYeXbRY1D3zTYnx9PgREMqE",
  "key40": "2Xnrw56iWzjNhfJkNaPBKjWbWstcVYsL5babnSSTu2joHPnKjT3z4b9xVauzWZcuzRBsFqE7soSeA7BMWpWYSYFj",
  "key41": "2EZJgPRH7XVkAFYjRvHfqu3cGDduT5wKh7cBn14FwAKDL5gHT2BN93XUGEBtBJ5KBVnryKiNKPTCbzGuZhFHgGSc",
  "key42": "229WHJPmqa9J5qvrUbf6ZYqUSQKYukYQJ82eYhLujtMoXpVfyCfpibcELS5waR5p5qguBqTwnUz5pg5dPNuGB5E9",
  "key43": "2B7BZfyD629hQnyS5tjLarZ51RG4tgFjAoubyoGf65FaKAskoysbHeRRBDSGusz7EU9CJGCCUxEDPG9LfvfkTKkB",
  "key44": "2rSPypQsqFKuVANRbHUEQSYugAdb5r2ikgLHZZpoeDK1WnG7zSqspbAMhBhxEGa4bSGJrgSz8mxMHbdWQrYaHtGe"
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
