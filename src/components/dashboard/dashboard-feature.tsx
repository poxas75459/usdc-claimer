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
    "3cLeBrSWNU7cCWwxZQgxwstTzD8radrWNErTKZRAh67uFPDQmu1DwKGtZrTNxc6aFxoQpmVFSsSSTZ74Pra2in6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ViWneYdfjtuhGGA8ed8tSTC7vyv42qmk379zDy5FsK57kL1sbqyQDX4TjzRZuPHMKuSV4ZPduwjeMF9uaakdBpW",
  "key1": "55MmM9sW5iJqo4BHrUzmLyG5eAso3PhgHZhkz62GfJ9ByBCQBTsQjZQ4bpNzKAGdZX8e9F1aCCdSjbD98r4KKymc",
  "key2": "62w1U3dy1JBaUtXF2XnV8RXFmjfNHmqecJPZsedVeg1FPK6hhRM63EqZRLzvZoULu19iY7JQgFanRsEZnKwhgsrB",
  "key3": "61RvTzLeVKLksre2p2WCYFgx5vs4PiaFVcs7zcHtHdonnuLfaPmWfq2c8j9F2wgcbW7tySX91tM35WWnr86wFoXS",
  "key4": "3BRVZWrwTiXzY8BFDr32h7DobSd4L2pbRxhC48bcTu8u8NVaZ3UpKkKmfnyBSUyAHUMiXAx1Qz4uffCaGLWDceaK",
  "key5": "65AGG22LQzzuC1aenFqh5jnj51gW9F9jy4MtLpLMGsdurqFVUXv4Eu6EK9s9sriyv19iRC9FrvhkwZus5h2Hckq7",
  "key6": "NuFPSsn1gydkz6jS1AbeEQMYg4pgM2FdyraoWaoM9nN9GGzY5fqADUfRfcKavwVzPgCs1sijP3CiGK5WDqCqBkk",
  "key7": "5xCn3gvWffnR945jEGwzPtHrLiN8d8zAQy2ys19jhdhW6sDHCvn7CVpgGRAg4ajYxVuuYgE2CVCEZpW4pEKJ3yP6",
  "key8": "5q2qkaWd7FfJzptTuX71Qv9KQHpyduqkFAVk7Nd1Vk25uhSwyQ78oiDUEBo4ACnpxjbqiyt3qQGfQmhbDLxe1Cbf",
  "key9": "Jb8p4rdifkv5QQBx7ZQQtzJxZa8KjkAXa7EeakpytPhEwwzQRgFUNENwt2a41yQyrKSrxYxQN8kDipt466bRdNC",
  "key10": "5m5uLRp3PDiB8EFQhR9woRKdjH4GFBTur5MXXSb83pSN22MuD3abVLVybk2YaTMkeYeY5ZrMEXBvEbseKhzUsorx",
  "key11": "3RmkBe3uk7yzaPmuEXxCdpS3dUSnVKokhTh2U3VaGxBqyWiGZU2gzwAh3mvsXkEgMtKmMDyeg6YxEazKeoHxHWz2",
  "key12": "2muUmxnnTbyQoqvZdS7EimnmqBCS2CxuVou5PCKDcLpbyhFcZQLRba4YuXRPxmgiRYhPKrR2cvFZZP214V4WZzuR",
  "key13": "Lz6sEbyRH6E8AiHtXdw4pFtgZdbFpxnFh3Qphf7K9A8iE89FXmgVCXMh3dubeWNhDYkZ2Dj4XyPjbtTj1SfPJRX",
  "key14": "4MhapDuDP6ohrj2evDASXMNLow9ZAFLjKe2viTmW926sPQzqN1NFGfhxT2HJwpQws6VXMa6Bgt3cCxFmc1pkZcEg",
  "key15": "37VfVG9uiTnn1CXzdBnescopu2xLQ1CxoFRmSYwf6J476FH8LUkXmep5Eqec1bBhf5X7EZXSM2cM5pCVs1TuoK2u",
  "key16": "4Rg4GYCh2iHCXM6bEuFzDc7NemHB3qPYCRfiEeRGmuCYXRnJz6UVAUUUDFs5ju7akSGY6ZEiqpDn31FN4jgMttKt",
  "key17": "yWZGTS5E2Kqfvm5JEr3MVNbtFHHFz9qLkQpLYeNBj7gyhbycqrPkUq51JM3UpNPyen27Q4dHXuzwKe191rRL4gs",
  "key18": "47jcbnqiitGmqAKTv3tyLnmoaBg5i92xzP3DGmStkKhJv36aSf1jrfrDZBpUcXty4TSBgVCuvRrxB7beBixTtxR5",
  "key19": "3E8M3t9uAxCPVB1U7cLLZs5bYNxksuEaLkfzseXSVTRAkeneNgiGCjA87SrWmGPSbchzaBQmvE5TTU6BbXpoueDf",
  "key20": "32ciguER8HVb9xNCvRwvJq71jLEnpaFBqwfE3VLh4G1MLfbrwRGZ7FnWFM29YYtUszQogXWAm3zFHpnQtDx1atFP",
  "key21": "5w6Fk9uvdcJ5WpqSWKy9Be6zzokq1HW1YS1Nv7gJ4PPBksr9kjPSpGB1jryRAZTCewhEXTR3x2cZE3qFkreMFFMw",
  "key22": "3uaT9Ed4w2yPcKjthQhLj6HfTmz6r6S7YEP3XvGqQkSiH55PTgQvKNoPmqxdDVD3S1CZPBY7Eh5h47SAteHYfCdv",
  "key23": "4GZHecxAcZ7ZJQbdWyUjshbJUpDc3ErZsuafujz1GuUbC82wYerFCq9XFoz3Yxew2NYdyHFWLcR4XH1Qco5PNDtg",
  "key24": "4ySXhKH5zzvWcNygxvySi5wJWUN2k34L26PR7czLf8oNRFbqLSBwwWdtBZya22KVQ4hHur4uvtcKojEyi1scQdL2",
  "key25": "PYrvWh4H3aye5uAtisKPqXV9p28m9qNzTTs7VYAxQqQdDZ2Y6GhEPoMKEvrTFo6stQEYu7pz8BHuw1cNEaCWDuU",
  "key26": "EA25mLKp6bxYUC6m6dPgngpnVoDpDppabtjeqLb91oTtZghpXhZXjAzjGa5p3rCZxb7Vfiv8m55iQ2kisMMgsj6",
  "key27": "2CJxFN5MMHHwonBXwHGdedjFEEvqN8rZvVqQh1nsUPP1iHrxEnyvVCWDzVrp5uQQhZzb9wz5Q1WcwsK49crG6dJF",
  "key28": "2akKgUifJspP4AsgqG6SVUDmi9uf7nHSZ4o1Eba6QbQ1jgXXQjwq7X7i7deAR8RjMnZNUZNfkMa32tvMr47mwXdA",
  "key29": "4AtEjbfyT6q7iCfizQnQcB1GofbhKTyViLRLKCREJjdWH1zTaQvJqx9q2zi7JsV8G7g4euag8JboydzV3r9D3JTy",
  "key30": "2gguwC8PsZYdvkhfykAhA75fzvUqKEksaVUs1M1aKFGFqXnhVCh1rSBz5JYqNuH5wmQ77xPGguCXKsAFWHrSJimX",
  "key31": "65dwvCE3JqxuyKzwbWRsDQKWEhNiiCU8ndfqKMQbzSr7FcBFyYZoRUhLD4RAfEUGE5Pr98WZrkR39HoaJs8czYkH"
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
