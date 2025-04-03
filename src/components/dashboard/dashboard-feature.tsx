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
    "4Ve1hmF8jNYrReXp3wkdxy2KhPNVqwXkduoxmJ2K4b4k2wSkyrHwesVG6oqyxc6nPhnqKsjqrAGYwRpikUqGF62U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSzZthyN5vZbuZkUirmF29hHyrzWnenaWt2aMpmA8pBeXi7miCmVehAUcErxTms6UjA2s2VQC7ic7qeADau956R",
  "key1": "5xdS8Uet5Bm78fug9WHMnyFzcYteouD9f5dfoVGkzHzZFB5WNUaKCNAtTkURGJY9Cs4XfaP2evxuorLhTrfmGUfr",
  "key2": "2iHw7xX13Qfkpnh83PdbH4Vmd2sLVfBALEdf7hQp6vNHBZRqvEpUNtN5xitsk5k9utfNipt9G6RoEFPtgLNc3Zwk",
  "key3": "5QBKB3U73JW2wEvanhV7bw1zxiiyHiJhQQFadNWw1Jt6Tjm7HqGoviQWZ3Hfz6jrExU3E6m52k6XAjYq6Q9qCjhv",
  "key4": "3WDhuAyPkFs5dYBUoxqBdBSEu7bM5jGFhd1nL5E4macwhRAMm5MmfvPYJ18HwGkBoBYpafyNBsHM3bZu9NCPpV5x",
  "key5": "58U9AfKXE3M2wW6Gn1pYsixDWPQfdDVFmek29142L2whmiDBtDvXP6YkSjLcLFY8vp6RBdCM4CqiXfXRk1KpKeW1",
  "key6": "4b5oLEJzoHVYRU4ECDDAHMygn3FrXsWTAJDnk7neL1PJTVsEoR8VtAoWYByBY9riBJj5E4zBsh46mtoMq7UbeAeR",
  "key7": "3Duu5qBBAUghU1814TEDfs4SiWJdSRUsX3pfCQJHy8uUMCNfEoSpG74CKu7N7SM3Fh2231t8qs74v6FYzfbyicyW",
  "key8": "7g7e3jyLAoQQw43S7vGmwPtHz8kftsc5hqbnzrdaLZT4LfcjhoV5YsNoKbgWP1kZ65PCPEiWmT885UyRJLYG1nk",
  "key9": "2d9g1i4t4NFkX9nvBiVkzn3ii3tacCNEUoyxy1xt6TTdk4LwGTWDDPJomHKTe7bbJMUwsdeffQvr5T111rNFpw2A",
  "key10": "2aTKaqvFkJ82rCVThaEZqntD3JZwdgaudGyGv3HYuWH1JRGHtg1fiuzqW61H23oZz7KF3PCvSoZXTmtBgdZueuzN",
  "key11": "4ZBo7e1NfvJfaZUzGEMsg53tgBPHr6FBvZvxZR4PNNUwjFSFKP3kDyjx3EuFZ3nSZxhPD2cfjaiRt1HtBB9wooQ1",
  "key12": "49rnqGprLr3uPFbzHe4cmHiFge4okdsy9i3wZz5fTfSC3Pv9tJxRpgzZyFawwgzJDL3Wy37mAhCDL4xSXPRqAkKs",
  "key13": "43YJbC24NEqZeYsHt4g72xhFDiEZKXhBeMLJPdG8XETcAhLYAUW5VFn87yqtRYdmAvhxfNJsjD6RyucTZuB8BkR2",
  "key14": "5tQHLaBFxJuP2BHQj7eK7u5Dr8BvgR24FJXBeVtZ8YpdnjroxKWM5hkgX54NGnWZL8ERJ8HoNpFVVka2qsTRAXpx",
  "key15": "38SFh74ewtEX261JfZzjBhckmH2jrTpF1iEc5k417LJQZnzfhGouakk7ggc7gp4iVYnKYBcfnf7J2bwoPyK2txJC",
  "key16": "5Cw65TWr5nsihcXo4to983XM6RnProYbbEdaXK5g44u5Ntpn22rHe5TR88C7HFnenvcbL7zXc1sgUwdiRXvCcBoq",
  "key17": "xERPJdGbXEQh1us2NwDA6GreKe328sjEaGDaf9Se7j5NBqDwwZhbvxXkp1hpZSx46eoS1mCogsswWZ6BVVyyyJ2",
  "key18": "XLqTQoVoXKw8DbbNBhqdw3EnfcSLe6LLghZrFBSyVHhVJvv2xTFRL1iZXtoxTMjb2d34Bf862EfrKCwwD2hXnxE",
  "key19": "GozCRzsUNMbxkPa1uzbV6xubKwktCCLmrAu63FJSFHQtKq3UcHa9htqrHhcyajxTsjW3yPnyuduDL7Bqqd2JGzQ",
  "key20": "4w5pYrYNqE7uivBxSEqR9WLm6obDpQCrBJdZSwojfRiG2V5SpMNqRJEoZh6LePLXE9mPmdhoK8Z5wdHSCC23KiAm",
  "key21": "wyZYneAreW8xhrtjQgw6VE3BUgayWbpPxksPqZZ87bkvrLcG6zo3XpvoLiRH2hqAUwEECkJ354z5rqYWAkxgYAU",
  "key22": "4ba2KV44ZDpTYSnMzHPA3NsyF1gGYtzCVG2n6t8kTCbPs3mAVaEAS3ZEHryRD6d3r9k4XvuKMGwSCA27GX1x69qT",
  "key23": "sSVdTFAMemyAJmPakh4hSJsaXv1asXZtn54YPPJNEL82HiBjBPdJiJLciEd6QB76Hf4mU4Vpv7agp7MDwRDiCjJ",
  "key24": "55sLvR1gvud1PvsLHT5rws8NQ43GAJ7ZNHpVpkEiAunyiuHfQh4ZLqJjXM5AEauS5S5yvPT22tbJnbiNFS4a4i2A",
  "key25": "4bVcnn534EYBf1qMQ5qJujEEnRArMrZb8c1N53jvYQgs5Ltn3n1DT94yTBixAv6NhgWM1EQozHH1rkXDkJ5t5cmN",
  "key26": "XwNJfHQFVWzZ8TV8c7qpi7oTAbkErQ36FCNiQRYU8sMG6k6gyJDUB2LdrLeZLDz2h5wYR79aVmKPX6KZzXfcm1p",
  "key27": "2pGXHwRDPck2Jd2cZULNVMTixFJxxwjmTq5GTL2udKsLBC9EJGDun1AzgZCjdFgKfBANYgphVTTWMvLPpsNAjHHg",
  "key28": "2LPtBnznhcLWiVUZQyM8x2gDdCfgrdCVMCsZLhP7noA8vR6azAyEJrmgnZNu9KxJJWH4UseeRWBFSus9izShTRVh",
  "key29": "3qAX2DzngFS5uX6XUL85naqBiiqXraMG1X8nMWa95YB4M51kBMcrFWx6CEcz14bBgWQvTFtxk3GAjo1stznzdetK",
  "key30": "2bV8ypCkGvnwVkWhHB6cEqcaLwL39qmBGfBZXrcA2Untyh8QgMKSdszkSvZBbHCiMNUACqfTzANvffTLGWFBqkwu",
  "key31": "4YmPjC72KpbW8h9785Erw86e8F6WHDxoruNnGV8izjLch7pfdFunBKBtR9yzVn9P9fzNwaVML4P4t7FVDHkFgPF2",
  "key32": "PtWgJcQUEgWcDonHWSEkUFuWWuMRgLhDRyzXjtfVcqBbFeBHfRB9RGw682DePMNXNe6Mb5jA2jWzU5JAUCB3trd",
  "key33": "51pA42nNZg5P7UEckdMANQUXLFvEa87EcoS1Jgz9jUJiTpQhwqERkGyrUDccYEJy5wL2FLTbPJvUmVZ4WFmfsAzG",
  "key34": "WRxV7awDzjYchu1yZZvZgkidMKur4GtjojXBQETFpDi2RCyih2TGgH7eVssXWseextVeaZa7ngny4EHfUpJmGNF",
  "key35": "5UA17wEYNTHAdvmULvbgLWGpvavynRFacvyFMSJ14iZZrxH9sAF3P6nm9BrX7StKHQ4SHfEp1f5CfCQFiEY3YsXk"
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
