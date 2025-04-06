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
    "5RtgPWXsk8gt85GnbTFoYhJaZQNhVXEATVDHRdYGXDUqrzQLHVFxypAoparT3fnxqVwESVXXsLEaY18rDV5Z51TU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mEFA1AJZPknX8nssZyu2BYXef5rQjnHM7f2SQ3HVMwa3UPqoLiVGGUyAd9Am2tHcuDQd5vp6aFB3yyptC5LafgR",
  "key1": "52nqTSFPggTNSyuWeZxtHuCnRJAVbBKgatbs12NXqfr7VzuYx9QRcRQAhjkVNufcDYoVKnosG7gY3wRezJNLYvoE",
  "key2": "4q7vL2KpaWXPHUzsHEAVsBwpCvfWQV2CEQ6R91EYbaw7R5FFSGDcx62B5x3Eosvs3hgbW8uzoMLrfRHxF4A38TSw",
  "key3": "2NdYVLZvPwxHs9NCc9CucCPeHQGhvRmcXQvPTnFBfuyi37HgXWnoPqzWCJ1om46DbY2L9U3LFCvhy1c5h3SKccrj",
  "key4": "2STfzUCaMtgxrgz2HTpYrgVgtqh2Chid1n1vcZj74hy43YPAVkqecrdjmCHAkY3hU5pnVw3xGFAcyr1djJ5oP3UK",
  "key5": "37bEP5xYcka69qmRUWGoqnF5UWnabe3d5ajnzVhn17GNGsAZyPM1gFaqnAnwqKJRDJLEbmg2GJVprpW2xjca4bEh",
  "key6": "4c8P6ukgtjA29Lo2MHNdoVGzFxgpQubudY5FXagXAmix9Hg6Yr3tRY4axAfp3KzKCVAmGUkzKjeQ8yjeyRxGSCNJ",
  "key7": "2bg6rzNsyeS96G8En1yd3yD65Wz4nWjcbmAuX7JPLhGDkmXzmBWhqbKPrQrv3tTUmh8Dq6o9kGJeRCGAr3t1MRpW",
  "key8": "3tj5HmQygPm8bFo1UhFo7V37Ta7eguxFdnWboXvpeXxZLbt6zj1G76GUZyUu8ioN4dkazxnW31o5bZUMJJGH8fLj",
  "key9": "3FRCq2qhA2CumXKSvhEjNkR3fVgJTNwPv5Yz1fwnZzGuqRT2anxsHcAkcft2oPPtkUdv3PkbEspphbLxHiCUR6jz",
  "key10": "3GR1xy3NoaNomVCuzF2ZYDMAbTg7Ruy6W1XSkYb1dihSAMn6kB2Yjxs6YZgu1A6KREk1rBNgY2SsVipGPP9XyKtb",
  "key11": "3gpvJyRTJ8P5btCunTQDxPZYDKai1M4q4qiYApANviv4CuRoNhXghahN4yqeqRCyeEYsTptUKjqt21RdeBPp4ajH",
  "key12": "2Ntz2cBcdifHVGCs5U2aEEeT58dqbLRT642LxjACFTW8epfjSeXDB1KsUDxwy7BRKvKwVsAmyoAV4RE8vgdaPLEo",
  "key13": "23HrFb2ccy5Hru2UnKB3BRzruXPdYTT5nASxbXAm473JfWxtSJHC41MWZw5dQ1Em3Zz2GmiAfrCEeViiJSwbfXPG",
  "key14": "b7yB9NSpCcaX2wTo1jw421sMxmwXPZ4YiMS7i1wLWWLw7awUj3VLtzoEasiDgYhZrs747uwoLXn77hnALEomdn1",
  "key15": "sbBd659vK5AxJXiCby8osEqpJkFnLhugcZ7wnKidomrbQYE4xCC823xPLFvsj41oRCzEEf22VjViTG7WnWPRZdg",
  "key16": "2tHvHN4EBj2tv7nCUHeQDGLRf9opvpa5er5pFeX4s4BETT9tWkEdJxx7XLVpRzBB4Q2g317yFcJwMGNv9uHwZy9e",
  "key17": "4KZxhtELADze7EYcT8RG47NApcZMtGCU4M6MU9HegwBC6mHKVFRVDNvo1MebPDAXoM9NsTFVD4yY5pgDmBwPmaS1",
  "key18": "332sBLHwNJG8tFBJdM3KyEbwKpexd1PKVvurE3NGMcgY1qyw71Dk1ZRWEAfNio7D6Lp3m4WgJYrL7C3dQTerAcmN",
  "key19": "4efhbrXbnC5s5C4KV2SEhXuBGmavZjwgWiMHCYv2nK2bSZQCnZDuGFXJsxwxKwcYfagzieZUr9fnF2NXqVgSaYbY",
  "key20": "5QSyVtiQqVkECBifmLem6pszDPPRcTf13GhruWptktHeP54gro2wz1qEtHGVfJJ64LVdhW6j1MVG9xH7NQW2HtbB",
  "key21": "zqBsYUwzJ4xGZia5N15xo5GWnPGX7fqRw63MEPQs5h2XhiLDLbQ3QEJk8S6Q88vA6ZGiybtecesJwLruUKEZz9j",
  "key22": "aAvMzy4uE3FBcfBZF3mU78tUwJd1xibjoLkJGf1KnjfFmvfyvZFs1iQUVRGjprZJt9YMhR5c24o496mkE3Kt2wt",
  "key23": "5JvZ2mTudACXSgYsNYN6ymTLRfRFL7pSA3zPyTbEiXSpVyGASUeePnEqeYNJfiFTXX6viuCqo5ATZuVovJfZzGf2",
  "key24": "3Lywnkki9vpTqqDRoVPyaDCqYvHNkNXNBcBrq3pwLScQ2ZmcNB8Rco8tUwVViCV3K3YcCHeSuUeUVo6zd1mEXnL3",
  "key25": "3svUXmqfTRfLAr5QQ8osgh1kBiJH1m9SBiPqK1EAR7ZYyubE5GDS34hUd2eFL51DmsvaxBvJVNdML9KvHkPtrWAb",
  "key26": "4rmjYCj3rxwo7kFGwzTUr1paoAB53RqYsJ9rTTutn7Zj5QFULsR3r1n1BmhwGjFfkMDta539m5bZBevMChowyXe",
  "key27": "2i6VA8JYq5pGLP7UharV3h8R2qmSM3BtWoDJynMC4hPBJ2UNLjzvS4Yim4xHkteAPY9zZgeTCwWknpjFEwjjiriL",
  "key28": "43RbeFAQoFf6Zmm4R7FdLLSmCGovbCXhRsRz6zmP1DohDWvgbzJgQWntcTJN59R2GJZP9mYzbJdkscNQRe3oR7QP",
  "key29": "mAPMRmHUrJ4CbZxxXuoaANDfg45998DVQ3xJ5pAqhp7ZKyUvVb5ibH8XUrsrs9smrMU1wHuVNafGixd3YMDtQui",
  "key30": "5t5H8mDg8tNEXypKmL6etATeffCHT2zJno5ciKEfFR6Q7PvjKfDEY2QgA8dWiBAJGfs6LmbMYVYVLEvc4tuvSuoq",
  "key31": "4Xw7JPsFxKLRKBNkfmTHZNQWY4A2zvccLn8gD8qh56oxQeugvfuet49auwsuzveDpQmzsLYYe1VmP7YWqHDqc6ad",
  "key32": "35xNj1JSqcNJL8NHM3NojaWz1UMAjxYRHoKNG8VjspJeRfM46PHPm9BgQhEMyM9RxvtBTxfxY8Pd3gaaJyaJb9Lv"
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
