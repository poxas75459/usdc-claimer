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
    "58XBeo8dTjjJzxQTTf8HTmZmfBLSLLjTFzRckSiN3Y7Q78UpBUNtaCtwt53G7Mfw2g7pFBmcM2sJS5BHa5sFSxhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h6VZN5RPUxusmGfjAYjXsa4SytNcSFzmHsC6Wdvu6evrKgfATAj1TeXT4C4hJLjX9T73jqfYC5q3riqdNA3zRWL",
  "key1": "5E4WRB9SSoyTkoeeTs1T297VtHFZ18WuyUfx4bVcjvtTdo9ana53xbTe3UZR3ToVtf8zdzWTmCVfo4nSQNUJCrt9",
  "key2": "2nZtZNS67RRNtjDJ3oLBXPkdd6xxFaQ85NxpGBvJgp6xmejjmVCMzuDCiBFPr5xgJZqqV9Wr4jjdq37V4x5PLi7q",
  "key3": "53Pcf8yunRX6ymZX5BL8KpF1HAzjdW4vM8Fc68X8jnqH2DiGF6D4Sv8EFuk2wttsSgt2wg5fQ1U98McSCjyDoutd",
  "key4": "2VV9naQ3MRfYF4aL9Tv9sVP3B4oawkq7Qa2U2hjAZ1vneGXkhgNRYsy75BgL9XZZ5hUFXu7TyDFik5VfxtKkQYQ8",
  "key5": "4WAWozq2Fvd6GkfdA4w379228CyMGs1uZtBLq5JJLKuH2ACtC4G3K1HiNh9Jam2qufL5foGRGJfHLCUpC7fxnJnp",
  "key6": "4kr11YMVjzHcJVPPkShzh7F3bw6MUVEBP5poPNr7LHBkZGLP28E3GaadbWZYRuAmBuz1qEgNmAgh6ZhLLCBvRdJJ",
  "key7": "4LW4hxQwaVAEnZR3EQkmsSxF9g8DNTwJnU2uAiu8pzbkewaArzokgUsF5joMoemLhwnEQUadKuHsmwwdjrrpzgmN",
  "key8": "5oho3s8pqbiZdBCCrxX4MHFP4yAnbXnTFSPfFJVnQ8eQr8dtaRKVCYUYoXPrKtj7XRamuZnT1rXehQ7qYtVR53mA",
  "key9": "5uHJApR9NEx64i61rCtPx5QCBfnQwYREUxL7bFRYXUNNdG94V19ziDFYJCpdd4T8oHcpqXG6vHasoip4VB3Ppz8W",
  "key10": "4JShoiySVhCMcKAYYDDjS5Pk6gNvdCNwbJ726JJhXikmog8zWLLYLCn3A3eEvwSQva9QZs9Fnm3ciaSnKZnjm4wD",
  "key11": "Nyzu1HLKf2qKETk9R1fDyggciua8gAuNA7Ym85iTJCTFgF4XSe3fBnqapFd4FxhSfcRHbqqhQGyPdQc9jScMy6u",
  "key12": "3fMykPHAKhF9JR3sN6ieUYaxdJ9szgv2ZmryputdUPrHMBvJRnw5iPxpzShVyDqHoSH4vDvZYQ4T3eXTW223Bx4S",
  "key13": "2fCHwQbaSSBpgP8KSLQDSJbPkEH3xURQ7p7sb9HcmeNFPhyb5LE8KH3SMF1WRcDFgiPs36Fqj8fPXTfnqUVVKaAy",
  "key14": "5DReQmm3R2z4jeyrQWuqbzqwHkRGmCDWLka5ev4UC84WZDtHLNFK9THdb2MiuXU3ZNCGFGBLbfSg6eWFh4YCvtBe",
  "key15": "5oC4J46qGwhf3rYpaVCAaz3HhWKUGQdYFiZdJFWUYLk4fmZA9feNrxcirVeopB2FisSFPgdLiAH8sCXieqHWMEXY",
  "key16": "4az38buzHLRd8m1jkVYcKU4otBYSq15q9D8doGzwr9xxThzLkd1eRSrUHz7h4RPQ4U2hzguW2f28XteLdE3WvPED",
  "key17": "4uKRp2aspL25eq4JUP9vH4m6KLz47rYG2fCg7nrNoAwTAxCjaXKLwqygPjxsXUoueotyfHdZc9Mas9LXQAtZtpGL",
  "key18": "vnpvbBKP8W8s45LJQwwwqe4QH7FttwTaSH4MbuCikBiRGBPUcnheCYAkzTiX5Jp2pKKssTphxv8mnyupFnkcc2T",
  "key19": "oSxtH62VGcSRmetHaSAGoD8jXzGZYjfoiKfR9PkRWK7CZjkfxGM4VEh9nfH7sUdvR6xNGymrCeG9MX5xUnHcDue",
  "key20": "cWDrpEuqLb6MLu53uiMhCLnWem1sL7PxVg1YtAgoV1c4D3T1cnjAGCJPtfHwq9BrECNbyPh47FSNE7Mf1cMR6AV",
  "key21": "bk313w2kDvYor7smtoPgkVxnStF5WQo53YU371tHRUr1eUtTWnyfUPEFCLvJPYiWhddazRY8EHSZh2jQDfNPs33",
  "key22": "4Ge9VVmSsoxvafo5MQz1pvxgjR8SCGRbAGMBVFuVj9nLwVBDEixnptAS2TrV391MWvoykeNBnVP2iZSvAoXM8ACz",
  "key23": "jCX2FhBjFNA1P6ppp2dQryiBNnAjw8D3q8pzWi99mwWk9QDCpzo6JjzStbMdnhftKXyqDiJ9zoUPcFZBD22h5nY",
  "key24": "3VhNdwPM7iPLfFFCsjdvYpp89jipgnsiKAxjvanR3nYNSTPkWQDHtfAPwUbqXBiud9nWM8ckkFGSFwfNNKmdHawQ",
  "key25": "4ox7TsZhr1x3p6t54i6xNb8yE6qQNQstuHs1X4c7T3uE8NPx3hV7M3X13HK6H5UNrowNfv5irSVQZhmjv78uZgNJ",
  "key26": "DrcGjKxYqE36N7im3o6h8tM78o4C4CDcjFUHcSFU4xfSt6KgcUPAofer9ssAmtSfqeRokPb3wic8R6RnEhUYWZ1",
  "key27": "4iQWR6zPjLsno75cvbgpMkaoGLuXh7UjEjfw9E2wAjQ7MC3fnBhipmW7ceNLMWf8id3awBx6PNRrsUEFsufApUHR",
  "key28": "4yWG9XA8C9EocEHx3Z6vXAM2TD2Jh3cebvzcWUBSY1QgM8s19DdmyQuwMuEL4tRMY6zVR8SYAwxqJwPUAAncABWM",
  "key29": "4T4DpyXaN61EBYHUpNvJEMy24J7q1EkGJ4Pf5rbMgEMPysAAGGJLWkVdNFdxSNVGr9mvHPcyHTAVbxbU5U4JH5ns",
  "key30": "GnhFyvpKVb6oKBVA1hwrGP13zABBWhtnRU6aEbCP5Mn3isME1czo83VVM3ibeZhkNnBsAdnVh38nbKnSo9GWwiP",
  "key31": "KuJDk4wS3ZUnydRsNCotpH32ZD3YeUnXLHzYAUW1t1Rds6N7knsrsQ4sg1J3WG91NgaWmn1bk9QzwoVB3S6JDbQ",
  "key32": "2THDz8AJov65BR9ga8Q1VFBUZwPniBdvvRjK1318Hyjk2Nc73kyFa96mNvJ7BHTBgmwVVgqg561kJN3eta1EkPAS",
  "key33": "3GF5uHZ4v9kEgyJeyJAm9UpKdnh4EAwRKiUJNXHyzLnzvEBrtpX6aqc8EDj2RHLWcCRhmYqsrUkzQLaS9yRdUNSu",
  "key34": "ZH5v38gY6iqyaRZFMWMG8ECprCfr3uz28rRUc78Qc7ADLDfRMbsRJ6RKYBFNeR5WLgXjw6goufhtky2sVr9Z4Bt"
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
