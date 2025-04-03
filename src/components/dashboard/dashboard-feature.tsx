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
    "5DBheQxvba7szAg4LiLPDt6kG5scJFgnY4SgqFYy8xjWpRvWSKY2hgYefG73iUYkKeK9sNEiPt9Uy8Nzs6PGP7X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JBJUGfH6sQTDYwPyZbH1Rqc8hp5eKrGzubuSJepd8sYjBz6yUFby8fLaj4sCxJDKwQ4BNQLuJ2PbzWvgTz2biLS",
  "key1": "w7o1TdMfHaE1shbukiXs98aRTdxpacTQZrXFPWHFiucD1EQmFeNdKRBHSpYTVcT7FjeWEY1ynVmixTJN4xk8TQv",
  "key2": "4JCavwRXLX2dBnCcktxYXooGKKKRhmAR1wJmexGxqErkvPvMDtiXAvFSLhRVZyp4q6Mp1iNNCCAKPZY9Hvry4foE",
  "key3": "2bjqfavSVg1MuHCzJbrBsGKoH8wtHFN5LtdKZ36VwREJfLs8zkGYrQ67znVfHDYGwkuGm4u8BzQxGiA6WBC6GGE8",
  "key4": "5P5oqi9tLdw3pzGo2RJDy8E7Qj5NzKSHM41Sc1ej6aH5Ay1rDYStc9muwqti4tDEXWVJsSpDK5L8GxLxS535aGVC",
  "key5": "4mjyjjV3NgNWKFxxxesVqsVzVkFAHkzCUUUxu9Hb9oHDZjuMwRTsYjTC2wXURiTMsBTPCFkm3EhMmL5PaCNbaGzq",
  "key6": "5VnqeU6oxk4F26U3rV4qLjWd6LCyftUoEJfvtTACHA28Ur7mSRSzfyVyDEvJgYPM3D2nopQEBPaxRgp7Cs1f6ev3",
  "key7": "3yRmzEyTYdkvHVaeGPnVV9pRVJp9xAEEdYcn5t5c2eT6w8KrNDWJWof2mf86Va4S1NMJvKSdHR3j8zsNQvcisTV4",
  "key8": "yN5VLfpWTk2XZfA4Ne5DK9yQp4x4NVqRdE7xfzpkVgt2eDCDF6TubpEoDgVbASRwD8fKwH3eaTJRaonUvBcKENF",
  "key9": "4KufjHy22VN5hXLehyC3J1ui2p8uyFBgx5KubKWFckNsVyKiryxDn4PitN2Eg3SqrruqETtn2wtTJMk2xYhfB9cw",
  "key10": "3YxYfKcXmCKuZiDc9gz8rP4uKLpZRenxdabqaSY8WzbCoXbzSQz7CMEUqF6cJ4kDCZ1xQRGHA6vvrmeKtU2GUf5a",
  "key11": "48V3vgTsuCKSdQZ5Ke1nrSsfuxHUdFetzkyGbBc5s7wh3cZBx9B6J8aQofMZqzabRfW9oxX67EJ25ULormk65aLd",
  "key12": "cBJ6B326ooHpWhrSqRxkT7SK7ZLodCUkdL6gqnswWdgHCpMsy8cpmoDgng1rUbhqhjXKKjkmZzDiySHkKAg1x1V",
  "key13": "4aezPRdxsGQumn33iwzWVrvCRVa9dQBmp4AXyio4Z1dLvMnCb4HQKkVDfNW3KAsDp4Gn4YUDwHhJnEthfnctSQ2j",
  "key14": "55PYTzVfCVWaxwqkqtVh3jqCGer8aTjwC5GWYvuv9J3DX1cPGgJ6hqKgDWTHjGXVhdioGagf5k4jMUaYBey4W5ip",
  "key15": "3AfmGqFN7fnxj1EUGoYKufpuZqRYwAe3yaf8YLEDfAWBbf4hwvLtxuct41YVcSmamRhZqGMKLmfb6vLpsbd17HZq",
  "key16": "5R2zE7wQG48dLWNRSKde9bsJEFeiB9s4x2cbbyiAv7VzmuSLf2HozKijMPSVnosjC3X3r8TduMaFuhuMncTDtcdy",
  "key17": "3qMcTs2DSK1eYPnfyDkfdmXsf9YAu7pSsCqavyF1yxZGeivhBN863WV46jiTMTsc1cbiGxgXXBr9EjbPExeMPnvf",
  "key18": "2rRCTmQdJWKmnns6a7nSgagoLmWCVoj3Uw93wurUfKz3gK5hSgHciqesGbm57LWN3jeJ2iSfJxkbCbPUZ7EzaMT2",
  "key19": "YQjWpPWVFrt7ZxzRzcg4yfeU8L25bxJ6t4S2mdBvQGrk4qz3FWri239gcggGcTbj1SZfU1NiWTHUTiQAtpo36uD",
  "key20": "31NEbvVxCxw1iNoawWmR7znYLmAFVUxvhy71hczcnps7fGzYtqEE34kDwyeLiPXQfMosF4ynPWHV8DznDa3nihUC",
  "key21": "2MYiGgtr2SEuwJ9DePCwUxiyirS4Wnn6T4SiPQ5B8bRqJUk46z2u4W2wE6QQQTdSL9JHBGb5rLtRwKdE75abQTF2",
  "key22": "2Mea3FnBoBevFZg5MKrb6UuWoh5AwLZKpowjG8diuxD1nPM9zwVKrhyvYdH9jkiacwZgBnLXCQVUaFCA85HfUjgy",
  "key23": "5fB3aYodArZJGfUQzzwWwqEFQwDwcZqTC72gLvcvBnYzejdMWe6HzZL9dFPfoMP7UgFVfYZAY7HccK2zB3eHAgTW",
  "key24": "2LBVvJ3iiW2L71nFkHpdGGK795o8KomFQwakt3BnSgu81S8Hffbcj4nmR1Q288v4zxi7A5aryPtRcgqhmXdd1H9y",
  "key25": "4xWHS4qWpfZ4PFkar39UGyE4FwUpmmrdtMVVQfhGzRuunNY96b24DBe8dYqKKK544NYwrWHnNHb25oMxTqXwB78n",
  "key26": "2pyLLRNLcC9Zzt4L5gnpbcrjqzjMUxFL3ijgJEjWwJ2kMk4jjc3iqnNHS3n3dDqJeSHvkf7FjCuQbzHEk6CNQuU6",
  "key27": "DFEgpa82qrgWWgTdvE6E23Soe1oonscQApy2oMWX72pDPH9rBXbRCyMitXSCMqSKuwzdLiW7UBQnub3CaZFbCtu",
  "key28": "5gtC7bG8c2E2CYit9LsQnQKBW3FfGUsBdpAtAfn2JZGfE4a29JDGNpKYsgYtL91JeQ1gn3jvGfWfwShm7MbjGgf9",
  "key29": "4LLseBCoAqvP4gcHy9psgQbDJyJt7QMZb1QZgvwTdWY1Q653tTNm1Kc8Ukj2MvZPgy4pMextohYETq5HxBD1e7o",
  "key30": "2k8L5YLpdKnrWtV2PbBJBCXuxUuKy28Wq3hhN47vLEbGkrQHnMfPUNpUpUR2r7tjwtUGj266BWrBB7VAhXViaoxS",
  "key31": "nCvjz8EM9HXDksNHMt8UVnSSsegEJkTN93bb4ZVZmXRqbxqErr2RFNmPFQ1cfQBUgvVKaGwjo3eBhbLUBPBywKc",
  "key32": "4MNsQcmhezxHwN2FwfiryVmAmDdaHUu5St3wrC9XcGh1riPYBqYLbEVn6kdDjZB3VLo51TsUFHoMe6cxCUyVkrdR",
  "key33": "4ouocW4qXt1ht3Eva5ccCQjwjDXFjXJXZi6MDSdXNG9oprvik9vw9mdhPbJEP4m1cYYy6pWsYQWqeiMRU7RL8JwV",
  "key34": "2jMKGAKrGHjktp3Ku8wNaEiNKrh2brQrkwDpHo6j7Heso6mymFUDE5SUWys863LQDCDPkqD7RKLCJA8ce587dPU6",
  "key35": "3PtHEXo6xWMpThygnbJVw1j3za9KsYJgH2cxNfRrZVZkyfxzFdpbvaThxv2FFZELEf4R78RRKJ15isgfU8Qduk3p",
  "key36": "4SfkK9Fu6ZG59CZN4R4SVRZhksLkiuGzXiRmmco26Ampsr9F2sBaNRKZ5kAfNugkyRAZSxQ6AR5j98kXuAj7ph5M",
  "key37": "3gy9cxvzBnAVjYF2JHusJUDhhMnYRcRQBKA6nCaMPz8zLvjoLMVuyRpxukn9aeXxJ7QtWRCFSdPjvaouN3uehiCm",
  "key38": "2UQpbrEKZv2VyYJyGW5s1WLcMcDcuSeBUUmZUkyLoc6PMjLmPsGes9bzCe8r8bTbq7dXHgvocMvAP8jhzkpxu7fv",
  "key39": "zyqat3YsdqiK7gpUXrHi98PDRxnf9ERCHaesEyRu5w18HrBgtetUX4R56ysNrikdFsHvyXnEfZcsSu54aeB6AGC",
  "key40": "5mRqExdApskqU2jwt5DKcV3LRRekHXdbUJ3PToTYitnXB9pgXjb77dY2pUmKMMWHWkp3Y5y4rvowoBZJjFB242MR",
  "key41": "3evJfsJX7WMP3bPKTCniYw7ssdQfGyxvjw1yvvgSFRMoqL5ZJDVtcgWHUGKC4qHxT3aGcSX4awuWrvuFSZF7Mmhe",
  "key42": "3rUQpdLsivhoY8MjvtQN4UDi2BbwUSZwW26wsSeL81FXeN1VXvUmSDeu91PFqKFAo1LCr3pgmVmKVzMoRdGa53ah",
  "key43": "4CZKMAoqmPVt5Ei8jFnbbW4qjg6jBijuaY1kP9spRcouUL3vMekWM1vKEw7AE5WX7jUFCsykfEieQL8cJS95yjW4",
  "key44": "21BwCbf7gZcV9EdtsaN15bbhUoyda8FWKx5wDTqMvRsKPUkRPJNXfc8zqB5E3afJy74uxWuSZCHn73ZBU7vL3FZN",
  "key45": "LXf4My4TxsWRL81kWGZLWcCH43TaouapyhTCwSDQoATXsepQA16Xr2joNHSm32xq3HULGN7mauTb6TAL8iHjfJo",
  "key46": "3uZ2vgm8bU6chqrW4E9pSWj9pvLy9vYeDSNFrujspdjLYCqNpiqQfSf7SigqQX8k5adknp5pvVjtY98Fidj1W5Rm",
  "key47": "2deuM22afrmSMTEPo2ThA7UDB8DjMCCQDvBT2A5fpqvMmq6dU27eKKevp92rpqzHf54iagA4NsSLre6SPKdD2xbm",
  "key48": "sHTBUrc1uLDSp53WVG1P5RhXLYG4dEBLEX3938q9oACBt58E2DqDizvaJ5qPvH6kH131UhzRDkWxVKD1nMwnEhH",
  "key49": "cQKjwgsDENLCVvUAFuxmVuwhtqm9Rk8YiSPu6qTvCSRwUEiqNSWCUQo5wW2mtLzbczyaBpij1VJnxm7JEVYvTqL"
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
