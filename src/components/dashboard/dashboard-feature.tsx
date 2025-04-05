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
    "4vrdyGBxirYPrToLKGuChMdZR5gQQeyS8JzxudLWoktvwCFpdmSLKU8u2zDdFRELiC7RUhwWb6bTjExK8Qjbeom5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUy6WFWBnMzh8kwfFtimUteHjkGjqbUTamcqCaMEXEsHu5FB2SND9MnB9Ah4rb7q6TMYusdTfXjPDSk63J9bjr4",
  "key1": "2NyogBva48ZPJtnY2Dzef6iPZ8USp4mX6Wa5F2gWybPQVkrvE3aP2GGDqZt8aNyNyfyHbtD8UYdeTGCe5S4BfWWM",
  "key2": "p9efmtRzDZwsFZhupJyFoPxm6P7eBj3CCiqLq5vMgxLTG2Tzdkcf28GCgc6CswJmNbfyciWtDTEERp8gUybo2S1",
  "key3": "4wMUZHQFis7HcnGszkGv5FGGMBFDpEv6BwWY2TTbhheyZPbeG3j23XeVxq73oKhiKiHhqmCYLoPXRTVPRvNyN3Ge",
  "key4": "2gN3aM4gLpujohzYyoy6dnrQ7JPHFt2MA1cih15HMJLFfN9kuy7KpJoYcXwug4oMx7SVNaWYHLcZg11NU6uCkHWX",
  "key5": "kSZ4ycQBHtuHyQJkX62SNtjmJQ8jkJ9xLmrcUTTWpef14eTGzkdC2jAKncB4G4kE19qmhDCTXrfcxq9snLTnowj",
  "key6": "3U3XgJRAtXLNSMweDX2f9BaCUt3zPZxyEgtz3ZjCruwM6YPU9rVWrCugV7ngVVxx18h16U4Q1CBZYLKVEn9TG6Rt",
  "key7": "5dyrNY2D4DDDUzkp1wPqBm1H6CVKcQJzPmTLkddcA9VdieEWQ3aP3cRjJBtpCeTcBs99ZXaCdQoSJg3ucXCYuJEV",
  "key8": "578rpFKkaGvyMqehCkiXTjMq4CwaotVzLkMzjWTcvhik56xvnwQoG6QJMy8DGXjLDA9wYP5SjTrHADxabE2a1Hg3",
  "key9": "2zegStzcCM56GT9whJeFqnRQWAUhGg4dnrbtCKGtHsmWBn1ahrXdmtyZjfFjNVvNGxxrAs8V6NEjrimckRhXmpjS",
  "key10": "3kZ29EQfH2jtvPSFxqg81kcsqVPZpoAcKCwraj7GEa224DSkvfj8hgDbo9xar3Grj2MugjiGCisvArHxfGpd1bYM",
  "key11": "2imPRMDMdomfAT9ivbbRyArcrgGxHxDJdAk5tSkbWMyf84z376udejPsvZxjsGUeXqheHMcWFiRJCvsd28xxZz6W",
  "key12": "2SDCJP5uVoYn6HT3SUPndBmBRnXSE6jcxowkZpeVh4mBLszcENHkJV3S2WHLTeYx8vUHyC2MUc7gu6ridz1ekcis",
  "key13": "3jH8yrurfkpVWkcN6yvpc5uEZTTb9G4nha7YukptLbpc7Y2S1qUQib8aLGta5gPNbx9nHDofw3Uo8vMN7TNRT9YM",
  "key14": "3PrNarNXSL44TVgLTPc6XDEsYq7wLrQ6oR3ZvJDKVHD4YNGXi5xEoGXuFCcK3fyEtpDA6P8ruxjjV2HXoo9yc5KU",
  "key15": "3EHQRUvYdLxyceQ96cNbjL9XrkM4qwpBs2CjfHwZE3FCoph3cCxDujyJerj2xshgMFcrw3EpscBKSeqpyY2bW3zg",
  "key16": "4rhNyx8hhF38S9NekAeZqsQivU69Nk5eDa6FBMr6vGZ9P2J3rHgMS6hPbqTiRSBRzi2YiUTzjyJyTypCmi6ePqEG",
  "key17": "21foCKLpyjygRd58192CPtGkuWsktDZgu5JgZR1eU4GVq1SQrDxnkDLAKyukEfezMkgrkMSyLpKVsAe8LixS5RZk",
  "key18": "3ygU2DvdnMUU7TkMfQjS9L9PDG3kFwZCcqZCUoMmp1bnvVFrnQr9Z7m7KUpSVwNetXa5mMKsd3xti2wowNr51287",
  "key19": "2RpBcsTLsDHd2koMBdomgeRF7RXKau8PAEU8Fd3ZT9x1ttxgsuwgmgLadzcuGNYqLvYcbyEij5QTvsdKTWhL2ktt",
  "key20": "2CVS33u4SpQFhcKWPiKVnMWpGGfFqGmrbLtU1WbcMUUAi5Tbqnjc4bRbEotmiQkNkossA6T2BaHNptB7gSGdnBw4",
  "key21": "54dYC3GLfnmVSm9U34xUwrc6UcsZUZA1t4u2qnGnZHKEq44qY56tPTJpUJS7aKKJc6Myq8qL2k9FaewR7ZpmzVPn",
  "key22": "PhWY5SCynsK6YTmiCWX9PAdGn7SzcAmPYwC2e46naN8bDeBPm15MJjtSezwCofwirHZhkTzRJtDyT5CKzbtcHR9",
  "key23": "3y2Xoajhur2gjCHWXpAaTYkujDRtm6nUizp6us1aN1TF2kRtvbqCtT75yU1BWwE4ZMVCwbAwwtPJ8zRHVgYLZRFU",
  "key24": "5gENur1BsAgGiDd8RfGv1vxQGRzB6ZwEXtov5DemrzpctNMbKxSjZr7XRknVNH2HTCNaJipECrW4trEFHdQukfCf",
  "key25": "4bTxrE5vVbc63wmtb4QQdkF3QJYT43ZZAjLwwCan8Du2Y3CTeHYEz78bu8TooEMV7vsH46yD86bHzxzPum3rEDBD",
  "key26": "2m4ybc97Toa1KMMSfx5BYY6HWqTNzD1fnAU9M7Mc2RU1pQo9uL4ijGrm78Yp6S2HHaaPTFhSM4KkJY443sk3ENd6",
  "key27": "4UyDskcaT4Lc4CqDpAvahix7WKUzonwGiVBU4VXQjpnxfSrGkWjik134YipRHyjuD3SRXAM3SB5nrPg3SGgHfKHf",
  "key28": "JZh6RrupMZ4J41FDRHEfHjWjWt91d6AHJ18tbLBeebz31c26QDBrr4ko8im6PEAjBJrvTiUZxUcvpQYJf9ZgM9C",
  "key29": "9iRsWm3pCMue83zq2khPJqC7s3F1WGXP35Gr8f21jgwXSGkZKQJtqh22LjP62x2wsFoDvFu1azgfcR3Ho2F5ArL",
  "key30": "LTkiB8mPUNDGE5SHmkjHZxfNttzBX7Mba1GJjgqQhutNyUFQGS3LBTLhJqjV3v8dfSMaBf5zYTGxRUH7tMCj2ts",
  "key31": "2YyURxkiZCPFQ8SEeKKLuXCB7uwaxLVEK2aQbwhm1kBDJ66b6uMUa3PB4pRT9yRBAmPvoee6NDjPY129MBRp7x5E",
  "key32": "29PNuStv72kUysJmn1hioKKhEWpmdJSJo5YXfPpEMFffU4rkt4pUcRep2hPwYTrNA13ZWkZ7FnKLQHS7KodxSTKS",
  "key33": "3mJuDKDxuYhGnrSsWaZjUzh8HUHwxeQHTNiTtFmhSaFVcsQfh9fcpTytpbepJGDEs2LUjBxvGcmF5CvATno2DLXp",
  "key34": "UYX8FCmVuSPC36RjVVhVJEqRn7GupM68ofBhhQeP1hS1y9UBa4sZ81SAn8NjR72q78QbqBA81pqBBmy3HWH1oXC",
  "key35": "3MxS6W9HVuf4w3nsVHmYNC8dwhDxY29SWTXy7SNcPzadXvT9rTfNyxJiCVsFd5BexWc1QDapP52jQ8464iErtB7e",
  "key36": "Rg1JPS1b6Edd9QChwRRbD7UBU14cK3Fp3W1UH3d94bDHGQpzZ8Rv1WWDZHJjhGuChk6g9aK282y73STG8ogRfi7",
  "key37": "25kamkjtfLVUvNVFjKQSZaVfYWEDh5fK85hKzMZdhxY6nCEMmK3rcmk1fNLQThEryK2qNr3wDXTys7SLgJB1bniK",
  "key38": "XAL5mkDUhMExVfiYyEXMENsy38awD9qwBq6aGTjWSix1Km26n49EbfiVvb9uFmJgHsTterxD9wLRhZK6nMTtJwm",
  "key39": "334xGsahwKiJiVPhKj1yPUjBXaYRgoDfvxcbyhtqcPnDPCkgUioHJDN7Lkue5MeHBwR6paKkdHHKyWoy6XGDhmUd"
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
