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
    "39jQXTCyQXEKKPEb6YGwm2gsBVtsv9JhDJBaNuLNMB7zPgne13adNCv8WrrcDqzMbmWpj6CtY5x5hkwJdrXpVeak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xEUg4WWdtBfW1XfQE9MHqhn61BL1iFGeQ27AFdMQ2AMRJEhDCiXZPHo9HjVeDk6vKEwshxNJDgdhJFyVBaX1u8c",
  "key1": "4Y1psK4iuYuQttGdhgEUENg89VP6Zi7eifoP6zB6Wm8Adx7NuqxYU2ANjyHRhrmoUY1M89TNGL9KcsYzAh5e2aP6",
  "key2": "4fVuBz8izXNUZK7ACzTzCTGQdRvgMYJX3fWVtyR6h8YCVHBzhRorRBD44iN7FQsiYafqaEDKbzkmMpH4RALmuqi9",
  "key3": "3pnDFJHhjHJB5RwPrT1fZFiJ168gf1xENHxKVsBUfJ3YVVMfYPkrtPYkVpaxNiT9Yh8ReSuY65q43R6aCfM3d6BB",
  "key4": "5JpjkHJYLaPcGPgBoJa57MzUfH5qU5TEeF3chcjLiUiqfrKdAArC2qcqRc41XdJrFAkBiFysivUGBKWCyAHa6wuU",
  "key5": "44ftiysZA2nW5xh3Fm8pMoi4QdogwVoyukoSL78cnnavkP6n7hPmux4JoQ3Tvd994MgBrqiQbJaxdKS9RqtdwtZG",
  "key6": "5toFw4AJ9Kn6N2wTKzt9mSQJGTbFUMR9RmADTDP1CNCP7wuHPW2wZyDfdLURmGdTKx1b4v75r1aEeB11SNi5G6Di",
  "key7": "25XKkY3BU8R6GJuUNrroCGevZ35YNiDzbRbczbZNd8Z1wLW1xkd23NzwrpVPEw7weoUhSgAFMVpA4xsr8hyzW4us",
  "key8": "5t5BQC15mEsGM9vtdQ7sPo9s5yF9ZJebxnSayFykGcibfXiMWyfHSRC8b9hsQ9FV9ANLVbFsH2RgE85wpVNAtii2",
  "key9": "5SgB1YconnuYyXvK79ezZPxkFXC9tDHqaqW2vJbcbRCNEkGt2hM3CuSbYy9SpqRBhrFZcgW3NnZpm6knLnZ3QBm9",
  "key10": "5y7mpngpwBfNBisWzdcYRMAHsNNUzBHtmAdydWKSjbFLufXKr5fTBPbT5hs3LrGqQsAEeFwCM7NoNe7fMNoVtb4A",
  "key11": "3T9u5arLSs1wH4UMaJ9dEHWZdLaU3Px54sc4P7gFbiyvzp9HBBBxzbsc3i2qbt4hFSMs4C2fm8hEbQqth2QS87wU",
  "key12": "2ZHXreD48rx8VLV2sjXhvbkbxz1gb23XCpDb6EhYQZfS8cDvuMXWcTsbhMbfizmK3A9556xQGTZoxon8UqJh6mEG",
  "key13": "3sovtbVK86vF1Bz77dQv7mKy2MzhhrVT75qETch4gGzCeGf1ctYzXV2eRzEsP59vamGSNBWd9u24imcSYzHkEVWF",
  "key14": "rvZjZKDMA2HNB7vDQJ5XUHcfEwGLpzxv8pXFB6EHUStKEVBwtY6LWjb3jWrTtx6MgVN6pTayP4Dk5HnPdwgWCpW",
  "key15": "MkdPn86qgf7PPqRdJyVHNmFVAqPk9pVnSs5TANAPTZwrNhjmuiXwtgogNvby8k2rbcu35t53AtUhRaXLUSQ9Jgt",
  "key16": "22VSvTBNYieCrzLNEeBmcm1nnokKmJw4LRJKR3qX88PW39VCvQ9uVtqYKZnUUQkxtmPKUMTgbkRVcrkGYhUKx4NU",
  "key17": "4xnHhZnPyTQhUg1zPKLUk91ZtciQzku3dHr7AnLeExTMT7Hh1MqmUb4ge8Kq4FUAh8HZ4FMhw7WtpNNfQSwnA52k",
  "key18": "5nNJ8MtBNiM9evptn2xGwE99pmrjHHKpJAj2z9yLHDEv2NgWq7ibE1x1CWSHjngQndEmWw7AncGXW7WypezvSKrg",
  "key19": "CknAsM6WCm8nE7yTFDJ8pMTghVof6ueTjyX6K6oePvAXVqnb93XB3UVLZygrV8S3MwCdkC5LLcurhkjCSefxDtS",
  "key20": "TshKrKcPBXLowP6nbY3nSkQqthu4Xy6HeYPAqrbi6Cg16hJ9ecuLCc9owGpYnqhx27WcAty6cm6A6zyHrdp7JoX",
  "key21": "2tn1tzmYupMzhfDemiuNCqwmBQba9yFyKwcTjW8CudtNGZ54WyKQZMA3B4oZsVBiwdQeaHWeheXWhZvB3cDv5ceP",
  "key22": "363DhJGeiB3r9BpbxMnqRMox8wSjS2XMMsASsC7N1bdkdS1JFYq8MErpaawhGAbyEYCzL54FSCKEXwCuHZ8b2t4j",
  "key23": "4V1cLdxHpjFWsn9uP2qY6SRbhTfayF5pGVoHwPFNh5btptjqa1kCyZR6AicoehjLh3EBdcFDJazSpA8Kb4YqYPKK",
  "key24": "34MwUv6gM2bFJKPK2RPvRSnian21nXmCrn23gkbzny5syYFMTP76JGZ1kNjZCVcT2BKY6rimtPBctnyMuTxe1MeF",
  "key25": "3iBFgjZ2Wt3f9FUUiVMYMYL9ptdiTGcyfdDUd8CmtdrPeMvotcNn6567BAWURCmCy4swZV1xLQ9c3dUjQTkhchVD",
  "key26": "KUCsiLvQyvgxLhEbQVs8qq4YYvZuN7nKx7zrzGSiWcGGAZ3iUBxBfSyxR4M3VkFBkBJs7urAqak1w3iKLxvTxVp",
  "key27": "4mcsACaMDBNzwB9VYt6tHD4HMSVrxWysujWGpFK5viLiFugVo8Udv4bCTZVA8TDoCav1uQvzZVfQFf51i1jeZsSv",
  "key28": "25LbNwQqSpTbPbYbyRgvxhF8qWFMpvSZRPNjeNub2XPP31rrarvNwDeLec1yt7FA26i1fAo2RNMkkXPGyVdWQdQR",
  "key29": "3WyT85A5wWaU5VfNCmeJdHsXswPFc1yoxHaaTc6zL2wQVUUioGDLmSyD8b3gk4LpcbwSpbKfc9eYJ25ESmWMwkC7",
  "key30": "4GNDdRc1RvRz6DWTNSimoVkQ4okrt2kV54dFWB8g24KxLcnXoqHbJY9BYWF7aXhGv2T2u56n6k2qFN8XcvaL2LBx",
  "key31": "36UX443pCF2qLxqgR7WAJVNdbq3YhfGdBFNmu9St7XMasqhdJ1t9EgFttSzVVskUKuiNesKW9SSoxmBXrLWGyqSo",
  "key32": "zzh2JVs6VDig9ZLTHP23cFVFkPwE2NDKDf7HRcZQyDMdoh2nBRa8ARTkkJPCw4ddVv7qJBeWFvUHcdqdrS5rzvd",
  "key33": "3n8yGKNY5YJhrxBfAyz2iL5FBoCQzPyZa3yMZRHArieYTwFpKzpxicVD78Ju2eLGsuWsf9PBBgZzFuczTx4vPJsh",
  "key34": "5JSnRBbWw6FHiyKk4zWJPg1Gn12c6WXc59GT2XB2xcLBeHKFaGXYeLfPt5MAGp9cn1jg5Tit2LChmfY7KyAt76yR",
  "key35": "a1rgoVX25u8KXETG3bcF2y2rZPABNqJzjdrq3LhSjxPpY9PhKr1Uxb4eSH4c5EmGcW8TdwD2Fj7grFNJMXYr8YB",
  "key36": "2T9cQiE5qgoN3MXJvejdyscbqzZAfnqbVUAkiFPn9mB7LuWCEtjTCG6bn4YFhuyhzQvA42y9eKrBKoS2kSpMisk4",
  "key37": "5oawzkQgmRWZJAdQ7WX4zQh7mSLQmegAYgMD8MjSPc4vbB2vXQxALLDBKxa7kqQepdW4HWDLXoyYQKFHyyG6Uq7e",
  "key38": "zv4k9tziH9Rxjqvg6fSESRqdwro2W6bcMZiktzxGRpNupnXrjkCxWZHU5m4VLUB2oSs4zRGgzPJTygbas2BxHwk"
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
