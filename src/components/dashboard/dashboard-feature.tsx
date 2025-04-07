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
    "3YbZcA99T9wcqh2GNLuMjXuaJCi7UXGgJ5DKTdrvW3TUnC6A6FcG86dm8mgeTLazHPPH91J8jwgC6NxvwCT1Ng75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omVu1KKZxrnYJjCRcTXN5ESy6HuiSyLdUT2EUsepmG7d1tAjFxmipza2VMyQE5VnBABg7iVMm1KA6M7hBegRuub",
  "key1": "4qTb8SeMKzw1eZzwDn1SY4rNRZceb2xkvNZ36TYg9vgLjaeTHNf1ofAHBzSkgrnUqgxR5DqQLaqnWC55dJmK3rh8",
  "key2": "4fUJJmJwc2HmitiiwqCD5UX34hx1uk6JwoiPo4H2kZB5WET4WSoCh35uXL4oAszFWBPrYkHtN8vhbVFE5zc55Bzj",
  "key3": "4xxVNAAnpAE8iPQKf234C99WoaTcKLyJ75XzeC351e9SYVtrvzrSrB2A8fhr7DhmknNgBfm29ArFmrwmyzoyjPPv",
  "key4": "Am4HcZbmhnXCeWUVSN8JAbugrAiVBjQA9JBs3ziiY3ERyfHiCUgSxPnbAngAnVXz8faNwVqTg3LVA71Xgqrx6np",
  "key5": "5NcBWyoBGqJ1n3ws7MAdAdwDfiDMNsdj77rsGw9T2SWoMGwBbhitLctU5rhSJ3Gz7TUjvuYrmxe21xHcF2Ke5BCG",
  "key6": "58fSswBzSk2aXTUJN9XsX1HGfUo2NmFZyByuZZkTSR5WbUWShPxcS12nEf8JptUdrHp1QUdhUajBZfTnsdeEzZGB",
  "key7": "3NLgdok2HTfkYew6p1RwYQu1SFktQ2L5FBU6w1J16Au1X1tnP8PistJcWUJJyezsWVTgSEDJ6Fx7ew5JGvK1smUq",
  "key8": "4v2PCji451DoCCibiVDrVVqjYdT1eAJg96muW4UjeAHoA55WxtptG1sLFjgNAVZPVJU5hv4UYnqtEHHCEL6mcr91",
  "key9": "oBAs9uMjkoSAoCpPJnQxMnWkMFhfh3id4DNrfVC7o9SM8bPpyZA5oCD3qdNcfnQJGdNZpuXBdNV27dLXCnufrxv",
  "key10": "XBswWWN6o71keULmnp9rgzDTuHe5DHdgd69oKupeMYiss8ziDM55qFZ7sH2zQcKoUPJKcqKBT9pDD5nx5mDeLXV",
  "key11": "u3pwBepNmMnd83XAUA6PVfp4HYZowHYKav7aorQWJ79Ju8Hhe5MwLS9Eza58M9dn8tNnJxivob2B9paa3dgra1s",
  "key12": "5p1mnGGgZ4294u8XRpAQ8AV3U37YvhHgnua8WBJLJUREkwQQkDKLnogaaCsPSJG2J5dw5FAy9Ka8mvp1nigBQbXZ",
  "key13": "4AbSLEtEVzhiEJfPLddQqGKV1puUxMLEU2hcXxXuvs8Hzq9v21y9bbdhbRZu1xgTFZyQkFcsFCcFNA57Uj3FJLpN",
  "key14": "NTMGfSMKtn3mWmeVMFSdSyNYpjHee1254xzmazA8i5Zaxbs4J7GgSD6UmmrMNY8waugc8z2J2TuS3diQsTtuWzs",
  "key15": "3GzQmCFoLyGpdz3txDFoCpa1DZRBseXpw4xKS8pZ3i3GHTqRJZdp65QHDtPc9W3R4wgYY66u2EyjaZ4b7SiJMZAt",
  "key16": "jwEBueG5Ay3soFf1RWJXb2G4P9S9NqEWiVXGmn4bykynCLe5PwDfeJ6EcLDUJpHXLGuhQF1fcQsJmcZwUJ9je7P",
  "key17": "3ytiuKnAK59rnt4VwfndfZhhc7kTwJryxoVqgaaQ7E4ABkapDXd2N1p9pSGPVNHokXKmM9UFDDvEiVnacCkTwPRk",
  "key18": "3JhK9c6u3MKpVR6f7kZmaAkiH72wE8EMYDKJwnb9QiEMdjuF7VpbVqyy5ZyTa9KZoWCaUaQxt31QTiiLKYCgnWDP",
  "key19": "KQdqFbBoL78tWzDFVWqoWpjYb26M96riuAE3iEKgAz4rCuv6nnE5GuPk1K5QPSkcfn23EX75P1b5b2SH8VsyqwX",
  "key20": "62YuqYyksnivjuhSpx2qqhD4E9P8R6gmMR98c3L6cquH4kyDteFUU3fyPrNcms8jUh1aCGBkvjGCkM9rwjwaAoKA",
  "key21": "4wBooFdLNwPtBEYQeRbYKJzFGKfmxpKvHVNhq7Bbtitqwu24wfeF3nLeoq45Sojh1eDagYW6TJLhjxRabn4RdEAV",
  "key22": "3kFZ8bNz91uGeRHZP7BoZ5rV2tPzAzh25q9mZq5Fmv38CDiJ4qfaDgjf9yGJBMU68WmA8gfufHwyBai9BzdkYG1x",
  "key23": "3wLWK9RHyEih2BpnEScHFm8H6tH8FfvJCEpL3zBqo5uBMqFPsrm7AH6Dv53iGiHdQj5GZWoAmz6WhGVCqKsbi7b3",
  "key24": "24pZxRJmGLjSvWGHGAjJxjweD6Db6zLiqtu6oTKAxQtoGXTkGCwcJFg18Pqtis7bkpDER4z4PegaNbUcN28ZQkqE",
  "key25": "dsqkb5LJAmtf4tTiM7HSBgDJHzUHj1aoRqdEr4MTfwqUkb1cNq8X2LB91XZ8Mp8irDTK6W4msdUnUF5kg2nwFqX",
  "key26": "45qPnUnSD7uuZUTeCVrph2bnYfi5sgFLf21SGck9keynpQuc4P5WdFedsAnc7XzjFJidcA8LNcrkKgBSCbSiNKc2",
  "key27": "5Rk4UFoshHqjCYsKRN1Ap4194NWaLVTpP4HPkXK7YHFGU9HbntZFi6FbXbz2t6ARvD9p7BSh41pH7FpR1vfG7mKb",
  "key28": "2WtrRdHiz4yydhFKhoWZswDPYHrSK2uN7Bg2YKRGBBKjxq5o6tvCECGhKV2kST4VtqjyVtFHgAPLAerABd7jWiqd",
  "key29": "JpPEnKrg3miFBvVaCZVj6exFT2Spo7W1NtfiLUoetfPL9uPBGbf6HKiD9TqxMaYfHBeywzMP6mU12MoiE6yuW9r",
  "key30": "4QpQnLPtwARx9EYBrjaLRLkhbTpVK78m8suKhxNZYP9oUPNppe38BvLEq6HZo7BbkLHKxQgb7vw9faomVB3HfBUW",
  "key31": "3KTLScJ6zuHC2pgbzmEMLGubr6QqDEhCJY4ZcvSrNTT3Ntk8w62og3DBqyRvQca55UcHpzPG66QJgtipWADG5Qgf",
  "key32": "24vjVvX2E58DCT6wP6g9sw9TBqRzFykohBC3yBwpWt4S3aJFSvm9FsqVFo642BMbiAkQ2TokYRG3SsyupBa8uEaU",
  "key33": "4k6rgcCMYq3jtLePJnDFhEfPAGvzxosTFguMumiipSX2YXqr4EPSLvRwimCB3HPBZwJmnosL2RGRysUm8pM5zMar",
  "key34": "5kiJWdimXzG9QtDqhuSCmdPYyrbgfdcfUkpozCH265HpZg2wRmq34d2VkKtc48zKnUTssgCwBM4HotFgBdkzB7rx",
  "key35": "34yFxBF1hm39ydodgtstG96bP5cH3ZTx3RP7UWESVXhBobMzwMboHYYbMktz7wsuCWGtkdu3Jp2ZH1RZZSHU6mX7",
  "key36": "XUaF2CqPP9K8PjpaXVwZGJx4j1etTn3BtvzXnnWuLjbnDpD1vwF7bS8emBrD8vcb6frSH6tvJwkXJeFhJWHwRLX"
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
