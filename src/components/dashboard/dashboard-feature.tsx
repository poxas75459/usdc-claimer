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
    "4grsiBEHGj9DL18eSw45KjUvEtAbz6zSi5bsDCoowfGdynzAoAnvNyxBNr3SWzDXiC9mGgkDgqmoN9NqWipZVAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6b5BpmgSr5DwV3jH6uoLJbVvM8tc9vqyCb8ihwdKCnFt4YgVW74T6rdC7uEqCs4u2uccavSb4gPTCDboWKDtupt",
  "key1": "EhhdkjSDXDfU6ejR2qC6ku5viPRxW4mPmEUT3rCC5CuBMXfRaDKPAdwphKSXGhX7srEdtJcY23jFP4M1ZmEcUmr",
  "key2": "4Y133fM49FEhPNARdRf2rMioWBFDi3xZHQKc7N9XA3Tw7sYMuY2SPJor9f6T6wYYudY39E9VmdtkTkjJRMRaSUoY",
  "key3": "1SV1r6NGC67SXxK9qnvsPMUkDthganwAGRuWfxYXm24Xx5WaNnRDdRH2vcEt85VE2wxZtMbM4mvksJb1k7Lj3Mc",
  "key4": "66pVtNvhx9DgnqrZhux44xXi3vCMn4FS8RnjgURmwAmomY5wBUdGS2eSzERqJjdXJ5Pro1NGqExdjAXeXzHM3UER",
  "key5": "43qUC1wMtNmhzCeKsB2VdbH8JoQYBR4DM2TX2EfmjVZ6E2EWEfLywQL1NfsABZ8MFp82JzLnRXzDMkxBhFdcTtXb",
  "key6": "2yW3X2uVJSAU8KLtkex1EjrVk56pxkz7ooWH7Qf6mEK2vz5bxGwZPYiv6BFTdCvsEcuxjZvVixAw5zAkjG3tYJ4L",
  "key7": "F75Kybaz15kpUheNwRW5oEEQrQd5qygF4rhB2aySGUQxaerQoiyrkWUoMLBr2wuqVQsx1ZbJ14n6iYduJTWZ3SL",
  "key8": "3uvXqbkeptgV2PuMBic2GGQJkhc9zGbhBaf77cxTsKJNCP7C1EmSTe8u9euACTcTn44BGuX5mX5hc9RmELbyv8Uq",
  "key9": "3mHSi9yyoH2i6wkNSTkx76a4uf9Ah8kQrbcsyvv6LL3SHPxJB9ktq364fLhaXBTEqiWxtVVzaLRDsSv3rwJKCsqR",
  "key10": "3xtcqrwTRFPZdh4ptyWX4JohkdJ26Q6CxsiqVdJwJrGyeB8cCWpkpyc6KPV83qRQnHwqTbYyrtmYnYb6kEuDM79y",
  "key11": "3xYZFFhDuKzhgqM8zGXSBaP6TMRyJckUuMix3LLxngG7ziiFPE2yHiNwnY5RSDu5fQcMtYFht8QBiFQg8hqwbCqZ",
  "key12": "2GTAg7kruDkq92fSAR9pJRMnRGPm2MiGNJDTfzGgDbithxomdTQBChTL3CnhcwEzoiq4uJY16C9H4Eyfp7aiJWXD",
  "key13": "4YT1Xtq7tDLkbY8T39Z654wjdiB2UTwFehgbiqp3xq2zxB9yodPSzCQyid2agjcWyZrK75JdiFzVq6NbFoD2xSmY",
  "key14": "2tVXFXbCMQtKq4NUr6mwdmGnj3PFtAjCF3yLEuuGxcGHcNu6wsah2a2jUAD1ZpJjeZbgRqqYfppW3BgLjKYN5pYz",
  "key15": "AkmkxprzW5WUbeLubATSbo6DrpGb1XnVusQDKvmW74kdLFNroYLLKH6UXdiUBzZprR6yLVKPm6ferkdGn4T63hD",
  "key16": "3s74VusBaD25guLMEiHJwPknrscf8cHgHwYw5G6pLDCM15CHfFx1ArhLj8AiMFNXa2mwm64VzxdtajuR4rSEGRAV",
  "key17": "4QcGyNSJZksjbheb2JYc5h8fPfnNFb7TNyUuMFATzyHN1JYUA5tjRBGpXgD8gnCTqPFNujbwt3iaBktm6HfQCaVA",
  "key18": "3zYukMVMM7FDGKetYoFfw4JZ6kWiYdtCLvQnaXMUnM3S7xrJX6hj3PNUdPUSKUpgNDhrajJgRdwYrZzdeRZrbDF4",
  "key19": "Lr1eMZaz9sjvbjHdmocQ9wjdHiLm9Haw9f851u42fXRPGuxfUuEWJBBiLzEM3YLxpp8rSRaGK3C3gVDaVFamEPq",
  "key20": "41jZbZGqNsjR56xofdh25yVqFvZ9eAMsLQRympoW1sBvw9qwvHXUn25didbrKG2v6i7iSywgdEtGhmHG2MLg1zKL",
  "key21": "2syDX3obB8cUSEk46qmrkRNmbwnHuLWwpcBngSup9HRbx3bYWQBcBh7pubDveFp9U5D9QzKeEGuW7sSVxLYJ12Vy",
  "key22": "3iMRd8XvJTnHXhT4NcV8x3gon1Bhvz22zcjJCqwrKMbXJ5GQ9gTuLnFMXapSPd94mjaNV7X632tU8mzUmGR6BA34",
  "key23": "AcvVRa7TjADghsWsfbR8nwBUvoZe847fpnBg2XEpgz32L8cpnnzJ8CQqbW6DXbypFG7n11oKJFpa11EuNpT2wXs",
  "key24": "9GcF4LoQVQYv98XDQVT9qgMDom3qmQtYUx4kEEZDr1sNV2tFv2fjgqipnyQokqGPUW5oz9jtzkPB2sXiCsc4t4k",
  "key25": "396o1gmryMTiKtbxuKgUqMP1KsRHrkkCsnjS95B65xntdafh8vb2dR5hXihBpnCixyHmTQxs8RLsnDxCx2HVcsES",
  "key26": "3fgENgkDCwddHxhGgfYKFPWcuiFBf65p7sBuYzMacADoDDa2n4bzYr2RrRnSADznghipZGvL4zuL4uyvSLaMEfrD",
  "key27": "4E7AgZaPaE5nkdU1YB1jXxomCTmUg5VraMX3uWsUyxTRKbowHbzDB4iSQjJNiGDEnCZdNwmriwcw63UDzCNcu7bK",
  "key28": "5BDFvfCmV7SZ64sgzPwBcBNCPBTEBSFtpAcpixvwxxsdimSXMDMc75P6vcBVGGxM3yxRGbJYxKDW6DAd4UsjZjkf",
  "key29": "4JcnLN3diFeo27SJDTrAfAQLwfqV8zKfXFRdf2sUwcSPmR9TDCzJvuqanqxHufmXaVZWjbUidpAmCuuoZd6YHLJJ",
  "key30": "43SvyWGsub6ekmFZ2S12uQ9yqGf9Tv87w8zPsh8PPFm8DdMGcy8SBxYWfARkMKbAWmNn17J63tgHgeZDs6FjN4fC",
  "key31": "2tfGeup54t7PqspvVHzxctVEqbY9kPGL4ERqvy6QnCN8xfnbbvMzomtcWUsPs4Z6ckzym5gtKTPBWy25pWxMnFNB",
  "key32": "eFXozUkRnaav4faPciNxcKjCyGsu87aoGV1Lu2drBHgTnSXyz1avZ1XDB6yeQTd3mkiKb9SHTrYG5V1sxDVNHyQ",
  "key33": "3cccNshtdHsxtrxbK2V8zn2AYqTfoxPcq641YCBpD7ERgoJbJuRNtn4aNY2yoTxXyDE5LJgJukKnjX1xXsHDmtqE",
  "key34": "3ZzvbSz8eeFLstYnsscdqjXrxH3pLv7xY88zLBkVT4dKVCF9c5ryNU4gjjN8z8eyh6yUXGx6nhNpEScqtz6h8uYw",
  "key35": "3EN1QrCUAGK6Bt67AezxXDT5x5j4UKLQBAm38oGpPxarChbgcioZwhUN3mHS4PqNmLepW719r4AsWchxDtyZ5RFj",
  "key36": "nANV7iQCuGQeyUydWHtAVREGNsuXbm8pXu1vfVK8A87iqGpir2ef1Pn4Q8ygvah3HWQLZt9Satt95wBgDLfHNph",
  "key37": "5kDoxpFBXmgG2x3oUUn6gU52hnAxyS9UEqyeHsLYq4n8ombAyWRBmpiLPc5q8QgXQSWEwSDio4awwDD7HCaZHABq",
  "key38": "4oXEriSi45YU7ak8qPCKR8Gi6wMpKGHRVa4e1MVkH8eZ2Qvt88WgQQ6RaWs9w6miCkdTCv61XgzX4UGw2KYju1DL",
  "key39": "3qhXYyeQ38WHziWSXMfy8rHsi1gsHuLA9aK3qfwqL6a6Y9tR5N4HzYjPT3GofM5nFoaHFoDL8bLreewzhKd8Jff3",
  "key40": "38HsFmcMPe6NcLBdSmsWkS14VQDpD3SizoP72xt18CZeZ83c89kKZ5qgTZyhCKLxF2VGDPvTbRvHSWb4nmNCiivE",
  "key41": "3mYhXRF6ksDYmGgSAMb3628TeSttqd6YdabpgaabpViPPbjDtcNt9VFeshSarFtmfs9fZYZa93zpTYraV6FpL23Q",
  "key42": "uuwtWaa8ToJnW9fqhxwHenXkK6A1rYQ6K67sf6nXHscyaqJdEYbgFncJAdFKf9fmxik2HiLEaYRSUZH4Pc177w6",
  "key43": "3Dad9w5e8BqxT8orCLckLsJeSzaftasZAgB5Tr3tFQnf9Nv4M9iQVmP6A48Ybyauc4tHGnaYopGFyHxg72Nno5xj",
  "key44": "7aBwVFx6TsLQjR4xqHthuY6XP4gFQJjXTBsiiC8a2cR7KiHVbjdDe8P6g8BsV6HKo25uC9o3qLjgHVARDtQkzWF",
  "key45": "32tYATwoJAZWxfJQ4T8LprEDXopvf193B1RYWkifsBwvkjdhdxTHPiCCvPsbQDgbWeGVRrxScUwVzpkhV2fv3djJ"
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
