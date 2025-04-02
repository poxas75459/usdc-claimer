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
    "2WyhzogauumMP2GhpZ5r8UvmMs8yZpy87Zcujvp8fbSWdhzCAMu4D3615gH3xBcVkS75GzK2wbDL65LTpBPqgB4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQptEMbWustvREQCJqxyWGusjUfwgJpVAi6EGsicUQDnesEvim3REFTRCPSuh52dNEcLpQbrFyjSrgC4pJFVLx6",
  "key1": "4tWNXGqLRLD34nkeEuQgpdw5QJT9MZc82RpqmoX2TfjbYT4ajUczUhUgEJoGmGFCS4GjvRKaWfRHRbqPerfRqRLA",
  "key2": "5qTqghUUg5cNHchsSSAE4sciSf54Z6cGutqsqq79agPp6uffNfmymqWWfTLiTCLq8Seha27zW8gUsxprc4eH5VsQ",
  "key3": "4EZBbeqERnKijChJWSemLbrG8izGp4ZkVXQbbtXd9MMrW3Y1vaadYL1YYdyK5CVoR6u4JvAQnSnqNac36V1kB7sw",
  "key4": "4sdHY4xMp9bZSXL4c2a35fu1kdW38W8PtphnvhV7VaGunsEG1LwgBJFxiSeTGiVKbXmEfVFYtfifHWAt8DEiLAYM",
  "key5": "5qvcey1yePdENAddoFJ1MDrCuLhRvwFJos375UGNCbKLM8UkJijKV4533jSEc39w5jQbHDArayQWmcvMHyimf2ue",
  "key6": "5Nh3Dv5fTrwnj2JxRHLyoKoPsYaMPK5WMZdRn2rBt8Z4nrWedDrKsBtJtpZVgU9z1cBZyVsZWaTxa2qMvQtLdUDL",
  "key7": "4WQxpTFRUrqu82LmFv7FQbyTpTSdb5KAh6pnqXP5Zk3z8x8K7adyiPYhFqTLjoZkq9RAT9QEQRaS7jcpL6akrQXz",
  "key8": "qJ6fezZT2bpCPirpKaBvrrzfV7bvfm7kL6DBUPuAs6NvG9nBKtFRmwq8rgFAe8kuD2Ytp9WSqcDJY9NTH7zgSmR",
  "key9": "LvHZv4Dw2ry9poSyWEHezwJHxTFM1h8MkVuayTwXr6ctaXSfa9D9MCzm3YS7ZBGTacAg65eSZmV2xWBSkrmngfS",
  "key10": "4dVsw8E5QH6utQbjmJuVoEiT6QbdHpP96x7FDNg9oTw6x8cqexegUKC1HsGp7AFTGKDi2X8v5KijqeLct8p7maQU",
  "key11": "9HJACm8Xp2Wdh6E8NTUxZjUqpQqZawsrvAXeX5HcBfFoPpZFysLUKombPNFAJMysNLqbNwsFKuafQnzmNJoNEpn",
  "key12": "1XLAZYjDJvDmCgpHJAEQgAPNszYiyCHvU15v8QWY4Po2Ubg35GhgoynX3v8PEHTuCobfn8KatuzXkRdTYjQmkNv",
  "key13": "23aTxh99DSC852uHUHqexNREmkLb4aEyC8kDBBhsEYaPwoZvqKqzpKEJDY5RTzMgAwj3Bzq8ZDhqrM9EXxqwYsrH",
  "key14": "3MBjqwSWcBAnGQeFBgEmgYVejs9KFpDy9misY5AMzv1BeueiXNAMxUs6N4jzckGXNvx83dmMN83wPsAUv25aMimj",
  "key15": "5RJvEq9FjF49CfgeYJFBaSTYXWttzFmmV1xtzi5byHmnQNbHJXzeBDCJKLQyQU7iFE6JXJWyG3SSA9MZjtH9b6bX",
  "key16": "4U2KPBe6XF1NH7ziLwqoQKTPNzmYVfKN3URrmBNoGknFEGs78rM7JvQ71wp5KtMDBu2Q98mjKYHa5VyGpibvyYt8",
  "key17": "ZZ5qqrMzADgbfUfmnkQST2Moijf8svNgNVASA6yxTeV1iVhzK9ySs41SeDwvdHJUe1nurH6STPbB3qFpvzPgYoy",
  "key18": "2fsvMV7Jp5oAEt2rYaoTeqwKiWk2iyA3t7GUpiFA7nsxSeSUZMN7YS2gEnxu2p7X4GrRbWjViqrP4ArNA1x5HEnS",
  "key19": "2ty8ErRsLEF1uqUjuEwBQYyYMhvn2nRnCy4ifPbXhzYWVXtJa872a4mD44aUTKTYPhCbM6QUi1uQLUViDsjrxsAD",
  "key20": "5PUaLr62gCYPp83rjev336othRususHWA1fUNR4yTMCEm2MYzrhxrpj1j7rn4JaaQGtmGZaNLN35N24zk7W7Usn9",
  "key21": "3cdk6qZfzZGCFcrjtBkGip5Ct4b2daQQPFe23tEZPyiZkJaCh8r3HeG78qR4N4hhiHGHYSHbx1kcH5opSeFnxLoF",
  "key22": "4yavbH2MSXUqDVeRUdd6NioTSu9ijkni5SeGdQoBG7H9woSAfGDbxdhqtr5Lskr1XLGUWzTWzzXWhUPnkhJr4UtC",
  "key23": "615UWnXgCP1WwShR7e2fgEtYcGqkaPdDsBVEgmrBnNRGLm8pUpVP4EiCee4gPxyNJreu1n3AVz8UsfBJWoYVj18U",
  "key24": "3fx1Tbdqxu9V7MaWVYC4jz4vohdyyyvz3vg1Sc6Dc2CHTSr7mzCJcNJRYpiRMJ8MPESMJ6hiR1jLTmZumAWUqsfE",
  "key25": "3sYmBFqjdpfFtjAdstjHqBZrsx6VrPU7ufDqiu8UswbCySb8uoG6FuDsYQBjuiWtE4AxCgR1TxUWth7GMtaBBTaB",
  "key26": "5XG99tauRRJGALuLcPLK3wFcDGsQ2D8eJyoNaYHyHoYrdt5gYZYQNKwsteFpPCw7SzKDHeEW3AngnDkKntcYpVTj",
  "key27": "3nqZzw7ADJzWw8Y5xfvA5ehKRkohhKjypFhnrLfxc2zXkvBfWtesvGcwWCdCUq2S4jstuHeRgAWexNSw2VTVspPA",
  "key28": "x3ue3Mc2UrDK9d4KPnoF3rprd2RQFPvj4SdukvQ54sRq34nDoxpbwzjr51G6UMD1kHjp5KPfQaQsLWwMo5vsSt8",
  "key29": "4584E2NJvMpksYEHwNEoYQPoxXVWwAL1CnzPWKKztgQws6fe7h1WMvgny31kTRfUNJbVpSR1Q5vHcFHiyVMCPK3n",
  "key30": "5DRjmPD2d4ptVBtzasZBB5a1s9mpToKGhgDrpyZBbRgPSNe4Gd6zrbyFGLnHz3e9FEgksqKSNHT4oqBLPAezaGgF",
  "key31": "mHTFcYYu6jMtzhrDeShQJQgPokwXdy5U4vUZE2pFNoFE7hG4dDykCyP6tyxiHdZBFfvPbHDYv2L2fwDGKAbRxh6",
  "key32": "4kFkJTqtsnjNsUEZs7tB4kokBoqNFracJsuGjiKWQXPDr3nDgXs8xQTCebUmHPPUYjZVZNKWZqfDzoTDUPyjpDXu",
  "key33": "2FNXzoXbue8Jkbvt9kx95veK7kcspKKhAccK3TMzzaVPJwLBQtgHdg2EC4RAGTrxdftbH6sg3CPNwcsrh3yqdHgR",
  "key34": "BHyH4pCkpxWb66Juhy2N5qjm8ejho9p3RvgrqWE2PvjMHFwyfEuYuEG5nLKtvPkK68WfsjvA3fxALATfx8ix5M3",
  "key35": "46REcjDLvEXwCB53YniqgcTXQLxLGAdmX2bkZjJQEPd3CjYP2kGLiHTivJRQBpnzhEj37ZiR8R4HoVQcsKk7nBWW",
  "key36": "39o56GUHCDBT2J5CmMFs9NY8nsi5u4oFsSeZ8pQ7pS92QuHZAnqbDNn4tt57HZFhYZrCt4uCLYt4mvHcNVgN4q3d"
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
