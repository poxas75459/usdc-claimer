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
    "4BXL5yDJQcsAhAUUCfqGQj2GLibx4HwZqZvZ96F5KyVhtXz35zodQBh1z2wLZkyisic11hddxNw5T3kaNK2NvujN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34h6X8y46W6aZVydWYu6kUSk7BJdtK9QegLdpzoYmEiLUFEFH4TF9pg5GbewPTnHnnNc47qHhEEb83DH3VBVLzrr",
  "key1": "2WRtkhreErKxSvnwQj3CmhYasSawhRGpzxuTheSiq2C8g4ygadDsAJmKnv4jDYqKSHpW6FcCCiz74EnBqLm53m69",
  "key2": "2ToVZCoMwxQrnqj9QmrDNrJwoCY4KztsjqU3x2w2XDHAk84LUvY8Wp9t2uXp8ZSKRedVuXeAQkc7jDtEQnxz8MLz",
  "key3": "3Q9AYFUkHgfnFy9nf43C9rHjM7FQ47GxFwhHjmBCceKDUzAdugqvLb1Z3W8PRvxHdTWJ59JN9Mbjqz7fqbrroHkM",
  "key4": "8LFdXXzs4BpiKpmR32hjZqkGCNw7BAwBQofsfbQGEEPDqeqBW4cUJkqzKQLQFWyQ5vdGMYRRPa7xHboeeJWsc2t",
  "key5": "3sBxLEYuecKz3mf4qzeyDqN61BrTsoGSK9y4gmGUWQTdGM3vTNJ4KNvj7e5DTS8WqVyzq9psoF99MNxi71Y3qErv",
  "key6": "2CyFHwuyVwMz87tAdxnCjeyXSjPE5qfodPnzRoq4AXpVCpJKRGdxb19EtBGQVxrT7Q3YrAZGZWTJXmcW6MyHr6Lg",
  "key7": "4cVkPwGpx677Gzk41WQiqzsVzYrjNitER9dU62FB9AfAbAoLSc2keNRMLvaCA84nyRunR7cMDn4dVNu2sqxgMdFd",
  "key8": "5gXCHxnra3ADYY1rgvY4KT1Vhkgt9iUcGUbpWkZvTj3cxRjkHhumwXjZ4j3t6d9sJd4hiH8tRDqnsxpwpDuNo7Pi",
  "key9": "2aSv1SNNNTXLg2Wtoxc5AToriZdZhrgxU783yGe97hV7MVn6budwupoiqFZ8RzFi7uqg981812vBUrzW7H2yerhG",
  "key10": "Dk12wMebCb5sB2C7Dtj1r5foFyDjA6YKARs8SFHouuvHGiVU7WTVjbRryQqjyLAKkwABjnBm5oUe61iSRWuCFQu",
  "key11": "31gD9c8brikzPu9vrovgBoUNcy2ga3P6uf8sc75LFo61WsmAkYwiP1f1b4qhkSynYcnjaCaehUVz4KGWPLMrjZiz",
  "key12": "5EteGXojqZdM7sLa8Gc1z59wdee8ePbeKncCWWxraBVwiA5CCh7Y7xsgF11PQFpKS4Z3kV2Bq5s7d5RWdZamFR2Z",
  "key13": "3EcFVBTz24hMzryjKrncNwdu1avDSbBvmaVPuKk86fidDDHw47fSq4CamE94g78hafFzT5mfghNutRrkQuL8VedZ",
  "key14": "37wdVxvuTgpCmtPrE53Se9zJWF4vihmJCzCb8kq1DTmo57JeoAXoTkFxq82fGaaHRS1R8rWCAUHwcECHe36X8a5v",
  "key15": "3TrUrYhMwMDC2BdTDmNAXnaYCRpVyTJNfNopZKcdNKydckpn7eiaRjoFNfpxzgXqwEcUzHa37r82NRjFFetzo4Sx",
  "key16": "4BEhJpe1gxDc33e7ahPeZmpk6UKi3ipGN3jgLRouDB32EK4Eb7vNkzhBxgfZwduYdAMeAjc72CRF8c4Px55BuQAC",
  "key17": "58m4Erkdsr9DDU36UDZNdjRAiVfWxt8hBbR4AhijcH14yiqHbqJgzoGZw1R7p7D8byEc87EWY8CyiG96jZeYcmPV",
  "key18": "42yhNNGximeVRwq2E2LQdTqzjB7NbuSki69Vhb6fxTdN7ox6UgeY7YJ6YWCEngbeKBsv9QVsxSWC6y3L5JFGBDqS",
  "key19": "658DvVZVeLXWvqDeLekNetvRpPKxWgqzXDt3zW6xYjDJ3MRhBcBRJXbAdmCZoCBsP1Eq9VuBPACLmwaZj7tyRqUX",
  "key20": "2aC3t3oJ9aLYHgfmtotk5QVtaknSWUnRRFbSmU4X48Ymu3DTbFcq9TKGXHuYceXbz6996JxqHbpHJgSEXpMxhgSt",
  "key21": "2ec2rWtkiygqZ1GoT6XNHvzSXEQLphWEZbh5CfPK1pKeMyBL28EAKJjWCj9UixX58owojm5CVmB1tozVzc7a7cTp",
  "key22": "3tFa83RWiCaVLJow14sPQ2BifFHJ7rwj9SrjtdWdv7qj4KD4P29XXK3s7vxmHPV4XEkTkn9r6vSKcBpGw4ePtEev",
  "key23": "3fj2oDJCbxaKVdb2TxYh4nUfwxfpoYeuAnsAAhNQinQ8sot5RK9AnVzYkKvSHaTkGxsLeiwmNZu3KAaTk8BA467d",
  "key24": "3RUBA23r5VnjH86jx94U56KWeGAfjVrtWftKGdSRMUiwzxUT9n8jz3VdBbT6TLTxyVpPggAttvxGR457r4q5nmWq",
  "key25": "5rHuQgv4xdShWbCErxWM81TgqHvZQX6GGN9HGAb1ByxrFyVD7TGzicR1GRzBeehLtH6KbuVTiXmabYT456fqnZ4r",
  "key26": "5DZyLoaH1k2Lp53NixxvrJsvAxtVdSsG7rTLeejq2gjYx5PztiMf6Bfe6hA7xUcub8VaASNFCdPUFiNVLz1pwtLA",
  "key27": "4crWpnFxqbURM8h4hzAc16QVpp3yKVfyRPjztWWdAgdN1Y76dWFjz3CiYRqMY7Gjc42zvGEEURt85Knf3vrtQcp",
  "key28": "445V1bsyFMDssi41Erak86wn5J2cDAVwYvCcGTYMEWmEMnzfNZbfNVrZxsL1rPaFW2geYsmX2EuvpkCPESQBwR7d",
  "key29": "3JDgJYkvF1YfmNA1D43CvtQBp7eYbzKkhRXKMnSp6opSjWR8nSjTriWqXeJGhg6dbbr4iJHxi1uKiRdW6XreFt9p",
  "key30": "PS4BTHFJwrk9ZZSF4iPUcpuCRPhGqSjvRqnNVjekrVcnQPvuDBioL19xyN82jpPp4DXV6NCCv5pc2uak8soZVLE",
  "key31": "32BLdzLHqoWi92xpEmT3AmyzeQH4Vro26hBpcTxT24i2aHFzup6xbKxAvHJ7M8YqSwmwBs7kj1QyLSuatoYP9oBS",
  "key32": "2k1yWh649cPEU7R3Qn2d8SbPAmGBTzCGaUotcrVFNceWdoZFyyR4HDxzibBvU6e3ZuVwrYS4AjfJkZyHpDEj5N1H",
  "key33": "3LM6HYzuLprFeWvcuVrMsnqj8n4dodf8qThQ7qDDceYt3452VosCnBafdkvXDd3LSdGSRWr3RhsTbMsZWWyADVmx",
  "key34": "42rawbs5enDNqkfn14ZsEguE6AHMjK3bJjiuxGvUDq1kdLea62f8A655Acy92SPtzArgVJ75NUx9HkSmiGPmpuB4",
  "key35": "3HQ9Yz6aXaAT3LLhzR2T4dvehRU5DB4dTLnJvV5HvwwyA8vWkH6NmYSQrDzqrTrQJBNwRuVXb5j6Eibk5bFJxPZL",
  "key36": "4coSnh1YoY5BosstXbqYhaB179vhmq96XEQNz8dARZjuqranPV5cz3k8sbptdPqygVVcJbh3WM7athqoitEGyWhX",
  "key37": "5tQ7Pc8Xm8g2Y6M374UHPfSM8UmEGF7FAG6q6anjTATRacZtKagRzKWLLgrucV4BTpNnBJtEZDardXtTQPDWf1TZ",
  "key38": "4Ay6SsXMDycQen3ATLUqkaXDHTyQSf8FujLsEBsw91ckTHB4eAsRMFAWNw3XGskUgpN5VqkVyrdrbz5AdoqG1iNT",
  "key39": "JQ3U4xxv8qeujBntvLLZv8KoaDrNekLpZ3fXKEqvrmBzbxFPRxHpxRYvXTFB35e4QW6tFdf6fV2sPAbskJMv5E8",
  "key40": "3PgQAUCY1xikCQsUyftavHheytLqMP28ByzRXwJS8aVXbchmGgjkVjRGcwd7GSddAHYLeRt7fgjVkdiMvFLTWhvv",
  "key41": "3dgcjYWLPDJ3LjiH8zMDAEW43wxuBQGmjjBks7kWycdcUvKfB24cNyCaQKmJswY9xMgohAVcu1aMmvb2NLHQk2cA",
  "key42": "5EMSyjCAR29KPqpp1wqxQLN6TfU3asmmtWpoYpTpNNWpQ4CiVoTVqJ8thKoRQiJ64xaPp1i2myZaRGJkMzee89t",
  "key43": "5jWSKDprVzMRP4auL4EdbuhuHtdpV668XegNqv6ZFrGVQk233Yd8zgNdJ9FoG4Dj3R7h6mRUPGrGqreTPgM8YtoQ",
  "key44": "vUdkbc1cKMA8efbQreLk3BESWAvRhxivPRCtnDDwpxUcSjhW7i3Uj4JATSMKytRWXirVxnMprTKVu2DGV2moph4",
  "key45": "5bxADCeWpDPT7KTyJ5YbDyqL5PHXJqV3KFBfmR68dcpHCTvYVarU5QQkLzuVaR57ZMM5HfYtZaaDJRJGQS1BT94e",
  "key46": "4mfFtx1aCpCJVLpXf8MRcuQ3PdYApxuykZNdYTrBJ8wQ7dFyt1KyHGMxgbMTZy2y8gUko7YfhBuv4icAAjQGfA7v"
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
