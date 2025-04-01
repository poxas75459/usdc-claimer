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
    "5PZVpcBicB8RVmQiReZowu13j9XzvLk9sgwK76mo72wx21Wzn8tokn7prUsqeF1S3YNHLoJi9DmU33u9D1s4SNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T4hJcdBciGPch5gmogBsHZ3S23oL2m7GG7suqgXjiPjzo8ap3Ga1E3LBqtms31mzjhHRuQ1quyQ98xTFx6Sv1VD",
  "key1": "532XGFThTxSgtNsaQzaikmUXARbXuwrPx8wuFCBkKKLV2KSXmXdG6xeTAjUKRHVMoHqhJiMATb7onFRyWwbHJopT",
  "key2": "zggByDZEBC6nRmFpfb1C94KhbFz67ajJ73buuzy6cEtcXtmFcNnCukBZxqfAxw37L6shbsnGLuCWGDFVVP14T2G",
  "key3": "3QZcpP99V1fiwsRCXdNRQFcLmP93KnHqbRnH3h1oyFDLNHeSGMG6qUmrPnfyJ4WUNPA6zv99pEpdg7qHcgfrwzL3",
  "key4": "3UoAmGU5yGjbtrSThNWsWikWnPqkDjCUiwfVLWsSPCsVjiNNAstCoFT7HpG8BZW4syV6X3NTRFLcNcpUNEjouUFL",
  "key5": "2oQXsW6PUBjZtfAX59tKunJooFtLtAriM5thftc9zHi7jbPxqEcshmDWK3tKKxcJ3tKn6tJuRWPr3GEvJY8rS4yJ",
  "key6": "26HdnRgJXyuZJw9bMo2iSfQG2zBiyRqeCGLv4qoVGoQ882CRv1ARP7CUAVrwnmJjLtf7V5ts58kNBuHo24SBi7YL",
  "key7": "SJQaNSFkBFbQVbHiq22hVSaWHrsQXAK25hPkc6YovHYgJuURH8AfJDyjNSFqkUTNadYEqEfu8irCrJv2Z49ghy4",
  "key8": "5KspWaBeYj9ZejGwR6CZTZ8M7TZ9eqX8KYbSnpUbvPHqjfkXUsVmqTL3Go9Ri1TAgGBLpEuXxEfoth85L6CYKsMP",
  "key9": "5e1hAdMuPu2QTUazTF9RsAUWfspUHNcuNy72FqDNj7Trw8kr2jZosLcFE5RCdokaSqhov2X8KKng9biSBrYRYZ9p",
  "key10": "3AfQhW3t5eLA4Yaf7j8ccXx1DYUZhD3BgDN7XzKk3AMLTSvmdYEesMatkZ2SYNJg9dgHuWkFZDpPCH6Bvh8fGx2V",
  "key11": "64wfScrrPphJq8viZAJVvcPmjLkuitqhwhKhdSzvhe5BQ2NwiGa9n1X2QdChnZVeBLPYtnpuFXdH4oNwm6a7BWMf",
  "key12": "4xiQ2KQoyFedu6EvXfw3PAjAVNnZifaDf4m8UHooiMZpneTHtjNACqRYB4V9AP7c1p2BFZe8pB451zxXti67nEAG",
  "key13": "2rN6bC34VChz6fm2DjfjZWP7ekYz6GHEDqydUuvf3yUxb5WvKV8rdw7dsPidNJoPwCnU8TW5WSPRhSvMPBTTMKdC",
  "key14": "3zsT9x94Yd7xJDuP7Hm3rcputQdcrvuBCgML9SCms7ePZGxAU4FASnQEXJTsUSb9MLo4yThczVkEaKfA59f6NsT",
  "key15": "23FwcGwUfn15xdLDKpN1X2NGN5Ez6rkwALReSaHMiDGaBoJ1LLFD7Trnt9vDWsToAEWU8UTP8PnuDFS9CjLv8yQ4",
  "key16": "4L8YbzRxonbzowDuNgWXkT4krYXWimEJDMahRPQQqYNTFui8Ficfbgrr586kJrB8mmfHfywC3LDxKQuoisK1yRv5",
  "key17": "4LUbVCiWRbQZDTA9x5UKYg8NhtVo4qhApvYtHorCdmHXijTLLq8JkxZHd6Fu1nb1x9oYRcuXA7DYTZvLbqBnRbiY",
  "key18": "2vVjX1RWiAEXCNASxoAicUubmrxXaAQCt3DaRP9Z8Dzg45accWW58YQwqemUGBeirztPj4EXAA28L8XFpArmjDsG",
  "key19": "4xKNDNhjURTojDp8piHpA9it1mmVwbeYqru5Bbt8RkUdp9j6PSKunm8VzxpbsjVyzGT8zRiVsnExB4kUufLo5UZm",
  "key20": "3U6mVfLFfpvj46B5vwemGkSpgwfJM6MQTEseREJTySzWidVzuVfGteyD3wGLt71VmuepoR7AyFB22pgnt5eFRZ6j",
  "key21": "47MnK2ioPDDE973U75uHN4YRitVxVWh7Uyc8jL7gPNhuFyKc2iuuvQFphGY1TJQTkVdCfRNtPGWx2QHmZwM7FArT",
  "key22": "2NaLZncgLXqq1QA6FaFkBb29SUMmJxrxUBFno4suoac8a5z1fdgkgWoAjL7Sk5xwMjVVKhd2qoaAsWwAfdW55nxU",
  "key23": "3EDmnLZ6vZSXPUkKKu74uarhMJHvBrVkWEiuJ39XdVzu8EAq1XZz4CxyY1eAE6jyhHY8DccJUPhNddiXNoqhsa7x",
  "key24": "3biYHaW6pncygF1kxNABWoPSH6WQYoYF1LpdrwhoC6rQXcceMiDsgCYg3vNHKyjUMZKpvoU1SohBPNQbixD85r9d",
  "key25": "6Ay5Q76eS472NVp8pFtqfYbCF9dbbg5HjBtj8rh9DLEua5ykgrRZgduCmoY7JcFDtMsQsjZiVzEWkX3j19YAfMz"
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
