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
    "571YPESpj8ED1M13hFwM9bqzYi6YrMSoe5Cu9HEMsfdz78QVyAswd2DdmUGBNabYxTBpWoLDNctNKgqztDUkVEdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269wxmc4gyaiwSW2Jd1MmoFdd2EctBSSppqmi7KmMcsHrdLAmiH7VVpB9tfNdwLe6tXosMR5nXZH3qF1RaKDZhha",
  "key1": "2a1rstktWPGuCcstXFHdK2UfFshQ2fM3g9JXt7pHiY18DG2kRKwC1nRm9VirymsL7yCNHHWScGq7UHMaVtgPNc47",
  "key2": "37yoDvMr3z2dXADCE7eFZyWWdG6dBwmB7GJw5LLURU8L32f6UxNNBQF732AcsgWA6qoEmvN8EWeWtmdQZGowRcpJ",
  "key3": "2KtDJXXe5Ktnror8qXsdWjjaFJbmLyhkrSZFz2EABGNF3MMJ7JmLTp6wGemNjLrn53ZnTScUJc89CQ9KtxYEi1XV",
  "key4": "3xayicHq1NUFwhAMm4hXGBijrxXDUJsrTPs6fax3EsQ23sekLmAtZVjue5Fk2oMt3DAccyqhBhKXGhFjFh1N29Jz",
  "key5": "5A874AahtJvQU1d1gTMEKspwmkbwBFiNTAVUhEpt7HNwzwVuZmR4PKsD82XF9ahogG6f5SVfQvSbVPhqYuZr4k9X",
  "key6": "25mBkxaNhFBu3D8BPSZJm9YbuD3nJSb6J9c9gsn1xhS33rHCAMqv8sZcsXXtBFHrTt96FpNN7UPfkjizvajxv1ts",
  "key7": "4TwpvHx3tCgWmTzqHGPtdN1hBzcvi7qJpJGFaYLWqvCNWgAeHDtXErP5BKKBGWeYo1GgeXAAT4kV47WHdEq43ZZz",
  "key8": "3bGqX59uby1cwihTgqj6Rw1nh9WMvThQ1p16R1AGN4CzxwZ7beXcrQidUtHTngzEoFSUudn4odkPQfaVFtvAmnoY",
  "key9": "qZug1cFSwp3rFkCGfPLwWw2veZDp7ZiosVvAT8fskRQMqbPVQNAGv2VqXYVyxkeEjspQ8ZWvXhx17C2bmKsmRU9",
  "key10": "65xy94NNGmXPJfd2nnaUpKAM8mFpiRpzxvSpLfcvLzkSvJawFdyUf5zzayhZSruM5zc7vnbd8Bw7spaukYyv1SM8",
  "key11": "4tN3GNuniL3byh9D3MzZoHEaoDCXYcoc32sFvESamNo3bvYE2Ddk1iAn3opGYHdiTb5Sdb6nh8mMpW6JZHoejGyL",
  "key12": "3kV6yN9BHGBiefdUoPgEcgHQcz7cxaRmrtSn9nB6B1QDxsDZBXjHENuotTRtj9VcbxLp2sHBrdRee5gbqU1GVenz",
  "key13": "4Ge9vhg2zpfQaYsPjpWSn8jNMUPaVvwuVgBwVR1WaKSiW4S7icmBV9vBJHmHfDb6r6Wi6koq8Z67hbr1hFWHsfA2",
  "key14": "guXxficAnNEJj6FPxqVRsw1Q6LNQh4Yvu6EXeDraGxmGfvsXVEhpX3zrGfUAqZVwyFdnALFVkbRAgBfcC33FyNu",
  "key15": "4PLaRZXDodaMR4YEV33RzcFR6nFCZgqxDyBQFvQQ3FVNCS4KL66BX5HXvPGoxpmtCQvKaFpjHoW86xapzV4F2FMS",
  "key16": "3a5E1wK7f7Rea28ubPpt234Cioo6kWQnukJrgA6DJM8LBCdcn1ZABjTBubzjdFMFDu5ASqP6LhNZJBtNQMYDp4Zq",
  "key17": "2qmmGyryLK7i2WHSYLPcNNMwaYuR8Uss6ivt6hStMSoMVViXTdsGEZ7diRxtv6DGN7HpUBha2Mi9jpjw2HnkUwpj",
  "key18": "2RiJGumhTGTHGhVtdPFvFLLPkdvetYaSYrBnTSozC4hQYx8onxUDtJDoFm6pC6JJF75Mhg7hZUft2X1TsVFfhhLm",
  "key19": "4r4jzNarrx2AquPWiNMrMmWSFEiZPbQzxE7BS1H42sUYb844ZmCFk8qJbhufvv2rC2wCYoShFbLCt1NTKKeyDfUY",
  "key20": "5p6nJoLVhYdSRKKKrNwc1mLqRRbo73B1ceM5sp89fpD68SY798hHab3uKjkR1Dv4bpEH3CKYcsvrMVXZLbfMYvpA",
  "key21": "3YdhybozhT2fwpVm5Ne19AN2Xe5xZzK7EaFtHBfoPUpip4zPMrCyThKLUyVKCGswXPxXwji5sFqHfSa9hCoG3NY5",
  "key22": "363jkFBb4iX2Cgzdigz58ga1FMsmzGp2FL71Mr4zGR3Th5ExvRgnzngZRj8TKjR1yL2oNS9LgtQsp3mLowcGUN1j",
  "key23": "5NZRebmAL2zDEpzaTkGPBjqTujEWPraHXEQdsosAw7Bzvk2QKbmTRUZD8zxuQE3XiFeW6h7m6dF2zSXa7VEc1Xpd",
  "key24": "3SkGPtRdAX64tqrhjBh3aSBW1kxmhAzjCWasYwd69P3UkydWxb3TrTTAXkx1sX3kVcWUyX1RGxCYhT79vKRmakyY",
  "key25": "62qU8Mcnx8NUBw1GKhNQn7uhXqypkQXXejdWprZSbggJaNUZdcAgxfjzutYjHYWjspHU3yyZmzDTXyzwsvWEstav",
  "key26": "2AfeGGRtPCawmc5u9vFAGBpKh1KjuEZif6bXB4KwKaDdKycDQLrezxVDQVKPG8geUndStfBTWTEYRFcr4pSZx9uT"
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
