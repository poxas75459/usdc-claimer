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
    "4cAGhczyZu2BHrs52turZvdcjFuHggR9TeHjFecZmS2wWzQxZzDLwsF7DN3dGPuUcSHDkZFa912tbyrujM3FkjSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXq9jLUZNvpzoRgrtjqqp5fw3cKCtjAcoo4QS9L5nA4bxucjZzBY24oM8Tx9Ryd157Nv6oQfjzAF4mcw2CLuBx5",
  "key1": "33NpB8GAn6QjzZA5CJMW1Dx5wD9xj15vEDUzxfXefp2EFPqEAoAEcTDjSCpWwXw8pW2j3JUz12qWfcYBR7U1VCh5",
  "key2": "4UJfPLGFGKSBi5Kco9tJgX3QaMUjnxNVSo16TwW8SnXWGnNVeGjzy4f35vFxv4Z6yqwRtbSSn5GKTePankrLsK1M",
  "key3": "5L3TTWBeu4bF5ck9yeuycbseLnhKxqeZC6BoQCjndbZaVEykKAJLiam37t3zEEz8M2wYyEY9KQPG5w5NHzRPkSrq",
  "key4": "32N8u9Eta3kKDktsGyFhtnKAbCYnj3pxa8KAA5KceYH4aArx1Jiqddekn1R28fMbBLc7GMuitHrXSwsSpVVgkZYh",
  "key5": "66n11UAtUuPguttZFzASgpz6V9u5d2KZ7u79PGQYYhiV7Q9tBP2ZTHbuRp4BdvroaPrpE1QktsX8Fb55QNcbJqe8",
  "key6": "2aekinRAmA7Lc16DC9ZRZ51CqVpxcYPmo6dkzG8DXSXXeirCcGMeg7kZhSGExPe9zvvuQwZXtMAzGR8sGYBv7L4b",
  "key7": "3vTD8LFDhmyNG91PysJDHKP3aYzrpQCwxrGhAzXsxi4khJF8zfqPE1W693aecEmaz1RooXB1sFjytfuqMY9ZJHnL",
  "key8": "2EjvJDhCmNURZke5mbMJX6qqcykiZwR5meiyzsRJcGvSnvvkcuzPNQ5k6hThXw7yLAHDj29XbM255ZRMF9HYbL6x",
  "key9": "2QtAALsoUFhJJdpPFv7akbKgGcaxPCqX84k1rYHroJ6LF1XmD9DNPNHM2EeGuht9SbcFutDp2vpJKw4b6CRqxgfs",
  "key10": "4LUUzYojd7fwZyaHauG9J9ZjXsvnZCpFgPfdUYYpneEA4s9rRq53q1DvRRDgBuaT47wAZaMSkU65UpGRrMQ4e4ru",
  "key11": "97PLvhjVhKAbGFW91KieUww6Qxjhpy1zS8i7DJE9NVyZCWjjB7RBEz26e2wKUu6mquBQ9azA1fHQhBpbXeiXBDe",
  "key12": "2vXtswTqVwngiXMzSNXdUBTP7MUzdjgkBCvAVXLmhRk3UgbRjvptU4RvfWApwvRjW6z87885doZUhgycR9T7ySeN",
  "key13": "5vR5ALvLFzvTZSELNRXLU3LQWoVJyNgBohJ1rTGkgdHiVU9RGuGsozCPvXLD2RnroCL84NDw4S1uVDfnH2hVgCyu",
  "key14": "XDRbvhqGHdzLuuZ8q4Y9Za4u28X1eP5oy5twGycm7MMKudHabnjSLytihaeoWtPvv4bpnTdirhgLDLj2WfUxDML",
  "key15": "3dkrUynjQYekdG6E8uj1f7ByXRxa7eZEYf7NijzKZNK9RdFYzBDyRzuJo6YDLbVKWjZgKSajCT1M3x8ETWkPFBAj",
  "key16": "5WqgXEP5abMQSDsyvU7gHnqXPDogGdv7L4EVnWhXvMpqvx2VhiK6dtamFG5WyTrnSwd7TAFCdE9TPG2txRXc5JYC",
  "key17": "4HvN3pfEjon8UZVD4ERvVQRCtENUZQrXeMwSvu8Nce6vmzZyV9C9SDDiQkxmeNRMhYBvHnbnaRkv8GVMk2v78e7B",
  "key18": "k6RqCZNdGcFFGEZ7iijrXv4pCCCJfU9BVprff8JHofHBqNyCyyFXZ7pZX266YDjpspYDmWS8Uub9Wj2PzZsHSqk",
  "key19": "4mEvXTRGRTgZLi3zmsAc4T2HkjKckPbTvhD9BsVZkgNADgA8ThmHDGdaEZNEEosx9csSy684jGs6EuFEJcNNTg2w",
  "key20": "rK4rynS8CSiQid1PKNqBDy3z9B3fgNe7faGMeefhsEzRRLrTFYstHdV1s6bRx3Bz5brAwxgAhsCFMUVhT8Nn9vE",
  "key21": "3ye8xqCKaf4ANWGXh9twiyUkKP5WyaNH6Trz9j8NYCLCYNQpgp6U4CjKcGRoTuopcCEJp4nRUx1AMivs1nM1J4bP",
  "key22": "3km53bz9YmM1Fa1wdLeJRQABwkeynfaYGDFg1dQXMLcTEYJds5LUZob5GS7ab5QQtN5E7fPDK85652GxCbYvgden",
  "key23": "5BeNH6Ag76tjbeWomCLLKCMtvRB4RHbHJqmSegCuxHHc3CyUqbVMbiFLfv716jjVrhn8snwy9bSTgHYHr2HfUysy",
  "key24": "2LBi49Jzb23pwP4xDFu7hkaL1LWmCAD3FFqGGYboJfkGBpi7hkMdmFJn4L2SYVZ2CDNUFioXFWAKJ3s2ekDdNn5q",
  "key25": "KwB6FCDAWRtr3EZdn7Jnkdb8w4h5Vm4Fb1xXkqX3ZLk1eT5ha6ggArW7ADC7o1e4FkZYvY1p2uspKYoVc5Q8srU",
  "key26": "4SZaXLwDtzo97NveaU5gwMBxSBuEsJhzpj31d348R85NzbzvJEtfcmFjbyKCwTfdkhzWowPsmn9hrpy1WiR2NyzM",
  "key27": "2odCkj7neWQkr6ZkgguEb1unaK7WEGH98xeFM9hoLa3sgXFDzJP6QA3XGzutubRbNrViAm1whGy18nzNPZsrJvVz",
  "key28": "4K3yqiSQZwY2M9TL7ChWc3ktxJEzJUjRo2ezc2zBeLD12pfAnbr8vyJp2p9pPjSYWihye8unu9EW9WE5z9sRgDDX",
  "key29": "2kvoutHeLuSQpvVvQgxhrWC2extmF2sSrhKFRyUwDVePtHVWSxFTxRFdutNXLFbiNgcx8UXP9hmrfyLedcG6FAND",
  "key30": "4YPvhsR8w95158Q3pPupJnQq2aMyy8JUY8YF9Qw6fRm9yZtPKroKZJ9homANRe9FbyogUqnhCTcVVN4YGDsc5wmu",
  "key31": "5YhTDnjAqWGRXn3npatN6cdU53bJQxtvZDi8o38DqYkkfbu69sHCF557nTQzfmnH8BPEh2m69kntJ25h4ac38JbE",
  "key32": "3XhqKXNYgqfB64i25iUrC53dsFCE4c5XEBMvtTizTUxtHJvGVgJL7ARUNbZMRcCqMLQa1bdryR62njHt6rAfJcnx",
  "key33": "3NAKY3Nc9i2dMCfRveDQRCULTpZog4LEG1kngjEKUzdLTvD1msD2XaPcArJp7Hi8XXfnbrh8U7A8h8EVRXtfTko2",
  "key34": "2qcHSm7mRAfSYSPY3xbLuiXuuSY2KcdWHw31KqiFabFW2xHKFKgmtpoE1pkEhryvG7VDWiwFyHo78q7CkwqCnatp",
  "key35": "TwkVpihMTNP1nUjXcJZ1ibQcWsqFVmEWToSXTBZuY13V9Ns9TQAdhSMD91Q6P8nuMg6NSj8JxwXHMfnV3wLuqpb",
  "key36": "2acnB1xLHd8rJuLpJfoiCR4ECDn1BCRpS6Rcbr4cwECaZodC4H6sTFaHPLtveSPRAQHMCaQ69FY9VtBMqYJusRWf",
  "key37": "24LGcKaA3EmmKy3u6fUUYn92obsU7ibRgWauoeWAg8YFomNa8saafwBiQJUa7ridi3q2hgw2kNqprcqYfs8UQisK",
  "key38": "5pTEADZiax1vQH7jqWntHPmz8XDgE6VMqf3b42BUDCzknjxDnygYWseDei6WRCTb8sEvYWPnZtjuBpBZeJLSsdaR",
  "key39": "2twsfaJJqbbZizJYycQLZkgqhewsjFMbmyHEkyWxVEt3ptVNkiW6hTpfNv16fKB25zhRRGxV8HjUjRKw4HLZR88n",
  "key40": "4roPoj4ZVoCoAbgbED4DytzX1dNJASUGBB8ZPJdqFM3HiSvgXmdbNqxHqboi2TWYMeHeTdGZwcs6Mzr31vjXYMMn",
  "key41": "2bzf4VdvRGJbFMhfk9bZctAiC2pxrVUtJvv44QBKkM9Uhm7d3FxRAMfcZEZ7XQoZ1qiHdPJ4CdtDnYEL1bHVCaYX",
  "key42": "VSjN8x5ZSNsVNjTocLjbWcvtMtnv4CXS3LVSGgi1rtXRz6jqz86dXDNEqeqduzYE9SwBtnC4YLZzzfY6j1RWf8V",
  "key43": "HqNLn3vKrnb3k5TkAoFeEHbDUWnQectVsm4D9FFkLeeDYun2dRfKxUpoBRvCC13SvJfhYb7hQuBVoc4GuUDcDLh",
  "key44": "65Se7d68ynVf3Y8aoPPD1p5S7Sb84ZMzPN7G7eaxRzFzAkhfNXokoZpsEoWTgRrM4PhfFmteDjSeQenxDy2xrM9R",
  "key45": "27XcEVjwUbFniL7iXQ3r1RfMUuhEXLAwt8ZpjX2A8CR55EbNV3LW2mFPtSfPnK3D2WuuKvQEGfSRViZmT8pkcaS9",
  "key46": "4nxZdSvKRp228ttZVA4HwksEiwAQ9is2a8Ex4vpmxjt9Dv2K8udPBntzYP3RjMqx2j8hQGLw4YZbvWWJFn45n8wU"
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
