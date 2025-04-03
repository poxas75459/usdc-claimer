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
    "4cgTkXYyBgHtVMjsbAWYZShpnzFYbG53yqcndbU9L9FZkzXhZ1ss4A8WqQPgsJCzeCwCKHrRwAZSPkgfJLf817p4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ax4AQ78z42mtrWfVscANFEcLXrpMRnwr6XCYKjQJmZqLzD9tHTuGZyJi7GPbNT7pKRSe74KY1GHHWyahZPf2odp",
  "key1": "w1Nf64kES64rJtEgFXPSETAXc77n9L2BQSaeVd5yQ5koCNtkgf2SrFcquZ2XGc7zkC7hYtAaAXWu35pkm3grvev",
  "key2": "2Vhwiq1TEsGDNBbo9i8w3eQ3peTuT8cQ3M2Er7JUhCWJeqiD1YPEGJcSXdZEp5NP8Tckx5gtveRmjoJkkBCFGzZn",
  "key3": "2z9CJz4ALkrjyj7K1G2ZbdFmfnZ78j3tjsbKsAZtt69RTKT4A96yciDSoCvqQ8wW1N1eyQMw1DJVfLW6z5btQjxP",
  "key4": "4Q199S6g6t2WBB72CeJLz1bTcuKNSg47wT1NRZPzBRbzgSbzsVSFqRt8xgziRas9q2ZkunnNuHteWfXkvaExNqXe",
  "key5": "4cJ4ZEW8hyQpVWxU4FCA2ZURZjsHQehPQdZDM7oBR6f5cvBKR4SGB6wdQ9KdiPkHycmnSAPkV9m1G5uPrCVgdxb1",
  "key6": "4zVVT3VHZzaUu7GK6SRncoRhXDDWX3BC4tSCG1tZfKRu9XPEGUGNbiWsSjoSJj7DPvgQVCheskUHU5F2ypLD8i8b",
  "key7": "ZVsHqABpFKSWB3LbeqxF5m7gJNBbLHZFdmRwGuQywYrg2zEy4VyzQKMAxgFTtdH8wSmQYr8c4R4GrUwrFwpAPVh",
  "key8": "4FxcssFWEKjhB9H6AEFxBrhzzVz8vnqPqyqJeaRyBziqDZ9PgRRuYmaLp9V5dQtCdrCST9UDtmnb1HhFr5W9gkaS",
  "key9": "2ZPHELVL5dMkDcrGd7LxGAr8eDWeNkdX5GjFmLRxqx7p6zV62C9ASBjUU38NhN1pAwRXuRnkgm2nJt3BERSP5LsY",
  "key10": "4e2LuXK435PaAB4g1GmLC3rYSiwmUbJ5x7Tk7MhAdcgW27QtJBF3zaJ4rghhDxfxk5zF9tQvf9q6Lk1K82fj8BhQ",
  "key11": "4zqDvX4dBzTtwAyfrjeAcPK22FTZ32ByA6uCTPTRadswRh1FhDLvF688kmJTwYHNy3zT4EmL7ARQLQVj5hwaFLxX",
  "key12": "3hY1qGJyJeoCEYkjnCXdwaSgRZEQyCcWwm4Ze5V8LRUu9W8fcMuNTveiFHoYFx1vMhq65BXAEW1s6gn8HnxyD5s3",
  "key13": "3o6qWiWoD2moG4KEMBta8WqQpBQMKA69BdMpubEctNNhKkFjSnz8adhq7PHKRBK7g5FW6bZk7y2u8QCBgfMoCUTm",
  "key14": "5dPjiGoc6WD8sDuxxUsZ1FLaiEAinmUuHahQRdsc4bi1q8mWsnyKC5dQSqytH6SQ9vCVSQWBYBPW8o1mS53MqzV9",
  "key15": "4aMnQFFtkAgkCCGMXAqNSQxsVCztrTmQfKCwVSPBc5S5cfcsvNSMRfdPKEs3jQSdCnWsUdbXYBKj4QF1GLfDXwZT",
  "key16": "5qJcp4U3gPg3k7FbJbZuYusXUDUL5g6pktBkAZ3gymQuZt8f1CyhWeyyQ8mzTxnZGqSc3Dzqhp8A3hzBChaB8qo4",
  "key17": "3FhifRb9U3pfJDxeX6QMZTvJEK59dYT6XXWekhzxHcdTTstMivWaMymc1uzzfx5QHtUkbChUQheZFHiQageymJyn",
  "key18": "NCTf13Nhv3oLGWmw8hdPyz6vXGmdAFmqpHTpnmaxn4WFb6HkGhZQu3A879AhiU4jDnBrfb9ToPSLFLbPPEoLBP4",
  "key19": "623XXM1rVyXyzg7tzrABPajcWB1UnbF2TPw5yXRyhbG6yGUnjyoDdpPPq47GS75dfLZ4Mp1w562rLaPBSP3qAU6D",
  "key20": "2D3PpZofE9CLdQvuApzuRCU6rUhgKaCNwyN1zugyXE5pCwHNqy3oT1rnGgEEDMhHesFyzPpCaSmNXxDc4yxhdTXK",
  "key21": "5xcEcZ9cGabaNYg2Psb1ExzZYx1uaTdjrAUf4cgLS1fDPgDsuURy25CKXLGMCxxnWL8rWj3C5jgUpovaCffYrnxw",
  "key22": "43TEkGUhNGqZNquodqpBfrpL7QQFLez2NH1XNoQns2apKPiCc5CPdS3272uQjL3tzmugVK5ons8zyZkADXkpfdVr",
  "key23": "4dY3iKKG8yZEr75Xt2KqcFnrLJe45CGMEkwdN9Nb3NpmXWGpom1BkqQLUPnh8UcMWhtR1Z4gqr9qHYPvU9TfUewY",
  "key24": "65QqhZxbMztEXACMfMbFvzGu22pE3WSXGhzVUBjiWrXKCsgi753oWMoGnBjPeeybjnjYm5ymvmbMcbv2oL9jvT6c",
  "key25": "3X1bXNEnz4n25uwXF9D7AAynb5Qz619GnayZZZEFPGnBF43jCFX85cLNYAjuZV5vx9oSniGLXaDMUb2iiZ9Ji4fa",
  "key26": "4N8eDLf9YHiGyFnFgSBUMWtaVgBhJmBrz4A7KSFuuFQL2V4Z6pWZ2pB9fJDN32uCVBiswq2YsNmgpXkp3mJqQ5nf",
  "key27": "2xJkwEpvg4seGyPHZya6NxDdGaRzKXCCqLEqGP7j3CKNkriPGm72gcb9XCMUt7DjJkD8scagfFzRnbxZY67d2v26",
  "key28": "3ybukfV6RHb5SRhRJJZCuUXRFqTGdeipe6sPzZ3Eiv88Mdd5v7UHh8fjDFb6pQU8uG3W4sQaLrA1RpFpZR2Zx3db",
  "key29": "4cv7uhwYARAYXiJd1VFxLTETxoCfcajkbuDUZUM9o3TXmUZviZJ9r6LBnuWsYnMYv3M2AqTGca9efQN6Sp396b5g",
  "key30": "4tBfaaQuaZzr4LqFA5nyiWqgwk4voxzCkieXB1dyyF8uaaQmryvD6tbc1f9QcJckZEK6tpnbQyqAwCFRqasMY4yy",
  "key31": "KMvJXk66KtFeEN1pWaSirwFNh8YjtwTnTSNeWZd62b3y1Xee5xKmpJcgSNj9kiPR9Vxpnsjz4M7LkzgJGSGDHkj",
  "key32": "3U6v2TuzRmfxCUEeHxBrWN8pFLymwkwdu2yTVdXpKU13oiFVP85BYz61Lt59wuU7GeNrbrVE5yH7a9U9eFAptqZi",
  "key33": "qLf32TA2JxNigeTAvfdr1dajz9k9Lv9CEm3UNAwXW5eergBfpah8cbrTNkoxAkCPGWpKLmzheaQss2mi59mtN7T",
  "key34": "4A8QpuKHJscQWczhBFdekctF3izsGhVAAMVtCYXjAuYNDtVfRvh8xp2mZhxg3TvyGvrUEnVaKfcrKN1FeGJA4WYk",
  "key35": "3H8wpNNeCPmtsGdeNP4kr8RFN4uGbAKfzoRtqTshyUhw1s6dGM6sZF7BZHHTdZNX6HWrMZsc3o5hj4hWvC3RukLG",
  "key36": "399fUvgraR5nPBfYCPU8ipddhefobKJvaA17DcyxxJ1mA2mhgmTdXRCnxYLEt8MWcob8i9qnPJGmuPCRN1GqVNJg",
  "key37": "282TFkgZqkzDEwzQaLdoY43L6vWhyFV1DcfS3z1dzvKwsjd7gHWKRLGadx8J9TCpNkCHFExX4ni8876r7AsQGZw7",
  "key38": "2B6j8LkpWbX8G3g7XVZWNfNmvevado1c5xj7oSheXTkmz4LX6kNHWH7JC1S7UyHVNGJJMaTPpdD2HK5G1hiuxwHK",
  "key39": "5AVgQtUhEq8LZFxKwqdNgR6M3bn9t6kQsCfY9n9WWFUqs6ATRyf5zKLMioUbsxBLAh2JLcp5NdtXJLGB5oBeiEVp",
  "key40": "37AgGABbbHNTT299TfbshV6E6hMtLC5otbnB187urYEwtZshm65c6STXgKdkCukAjjqvoiHUrGa4C5nobe8yVSKa",
  "key41": "37xiwXrbmQdxs91DpxdbsPT9Vb91L754qWNoqvcSZSURMhZEN12zteNdXBvhXErFTAtnotj6UjCQckkFvUk2DwcZ",
  "key42": "3GbqVnM7XRJTR6P7nwkcGhZNyVUL3rZWGZQBgVPKU13x14RFB27XcqioiXF2qJa5uuQYD7MVs5RUHvNxsg15Jy9f",
  "key43": "4PBN9s5JoLe2rC1uvd9UWXCLm2SHUcSNLTG6BzWGE8cXS2aqWSp2JWKjvy2N388ffXb4brkg16ZS2XJdZDuKyjyR",
  "key44": "5PQUv4gCzQZgHjbeJULNYDh23EZ5xsoWbQSDaHyap2V6k9sXQ1CdAcfsbbFg5zjRbEcoPxrQLXCANb4VDNWYcyqt",
  "key45": "5gEMEMHCFMWkHdv2fgYjo9Pietop7dKK4cpUPq85DdNuCqHwrCMmdkiwzqds9WMaKxk3jrUPQ8fk2uK6ph5no4x9",
  "key46": "2H6yDB7kxcLMSfoymd6uXGwwXobkdfspXZiNwnN8ad85Dq9UTRp8WtGdFPXubh43EVqyXbAGxetga4NzQaYjTunL",
  "key47": "3AC6FnUJaeKxd6BHBPhTbhqVG8pWetkxparVazBRM7BWhsAzySPDHixStNMgdcd2FuKBBkKdG9VD5e27Zfrv87S9",
  "key48": "5XbeREXs28ti3Yj3mEBTJkhToQRNt6fQL2sTiWm6Foew43NoRwDdQBoGgKCAmzriPN8h2Q5E6mLx9umTR9PsyJCp"
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
