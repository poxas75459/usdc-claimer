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
    "399Hn82WvThacBbqzyffzEMfNfz8sN2sHAP9CkUYR6fuDWyiG4V2hMooNVfWQoibFjSyE1nbAReQ8LMksH1aySGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3eETMba1g6PgThbnuiGd2Qs9BVgZaqXh31C3dwQJYaYJihjGNBiddtGg8zJxwA3x1yghXFFeu3KsUnLqjL3yX8",
  "key1": "kxPGHbBrBH4stTLfTw53LDqkYZtXc7VdivdVveVo7jZsDX5GTt6PEyX9HqegUTEQ8T57D978MRAcspbxAuzVAVp",
  "key2": "tTj1GegkNVFD6BHTZhFjQpjKLjTT2g895kcrQP9AbKcXGUy6bNA6Cr5QxVrboUMf6GU85svQ6QQARPhsoPPsuz1",
  "key3": "3ncCZt89coSdKur8k1fFdqpkwghKbjUZfoQBSFqq6q6rqntnTbeGVJKsMufoFbuzGqPTwyjgnB2aggpTrh6TwTGV",
  "key4": "NBHJ96z46WjwNMYmaATzyaEDSpsPmqUnPVb5QFTChYxfErqwRWTeDtPya211UvWeejSLacaQ8ZPsCTG5FHGiaiv",
  "key5": "2s3fSmZdqBS2VqGfVF1gzLBtfUZ6B6PXTtZrV9TFTtTgvA4kSVVFpcZjHwamWJVtNo6LhiShDXVNHk1YU8u2PFAX",
  "key6": "4FL2TRpxKtBkwTTAqrz7p65Ai1zBvnpiQnyyaeQhELDocEJKUzHMspZUDo2wKyaN4H2JzdwGygwQzrQWmcoDXH7K",
  "key7": "MMHy5bW41AqFxjy2oDCEVUzdBE6TzqLJ77Y4e4DABZtpo4DTz7WEWmLUtnU1TWwbAVpZoB2YA52pUXgBM8T29Ue",
  "key8": "67FtzQiLF8g5KBqtx4RzoCm2Rip3MKRWjStxPdbqqVeyj9BmTSKGYWVt3AJZzJzGRxtfVifyeRDHFsQkKMzA8yvj",
  "key9": "5PLynQb31gk3AnziCGrJxvLpyobgTnxtnccSoivFKNv5q1mAe2WeT5P8dyeyhoXRoKgH3CSx4mToSezfTD5GdjrV",
  "key10": "srdDLjV7EbF14tjADn8KR8BiNQb1Fw9gcfGAHvrFkg9qHeLYNRw2oY1sCarwb7E6RotnHJ8EGaEhpzBVRCiyHpv",
  "key11": "QXLevsqKTddbPrUEY3JPJ3rvuQ8dw2WKM9ntzBSTj5VUxHc6DsAi3wec3VZnDFRYEXfn7nnD9z43TDZytDrJUAx",
  "key12": "3kNmbL2WNpLXy34qUMqRBWW1FXSbig3ee7r79bSotUbt4UELn9M7kgr7jhxxBNafECeX961FWmtU2QkD5ZMN43A2",
  "key13": "kArynzKpVry3MNJUcNyNSK2jqW884G6GSQj8HMi3Fr2Xd3k1aD387dvZyKfGdK3RQG53YVvnhDGYZVqsu1ERG2L",
  "key14": "5bwaMVSjGKuG53Gwm67mxe1H8pZ4moi55hquvEWW9KUn1A8Lx7EU9LYCN82MvvtidqbfRjfH5yLqC1Y9CFsoDD4J",
  "key15": "5Y2HAq7qxtFccxRPyPfJkpCsnG2jxdoVA6CEGnD7D6HnmifULJ4FKRLA6RZjC4F43NtTDZeXmCrL7qfkUWfzhMJ6",
  "key16": "WAcEKMnYvn1ocRGBeM7GMoFH3stqU6CVQ83gt6JVe8V39HXgpUFiSMAoc8vWaWVa5yRmnM4kdaLyXfaXdZw9ZN4",
  "key17": "4Z5sqdJxGojN2mXrbWUCxFm3opdTPgfCRVcA66KXjpWYspnenSvPJNYEJSpPZi4myLi55PuDqCzer84EWFE7xmUH",
  "key18": "vvZqmzyvUCEgy1KA1udoNLYX76UdDmEfVnFUVGcVH5siu7EwLG58nfFQ6gUaibWEVmX8QhLcUCLpmahsboKbDAM",
  "key19": "3NfjLYGxRNEzoi52BwhgGfDUoYheSMhdrYLyLW9SuF1xxceMqUhBrvkdrVaokhHbGN8BfNTfR9GufDuCsJp2G4CC",
  "key20": "FMCMjB85nQyEJdRUdW4z1YbuKDc2LbXD54mLZtYQkhFJbLmrxFGANsU9tBEYSP8SFmPgSZTLqjSxCkrYD7wftQ4",
  "key21": "5PEYyFuaN3acK7vvLqtppB6ZfTtScdNJ4KLkZbeCYVFGVawmoUeX2XdfRL637AMK7RP9aB8dN2DnjoAqJ5YPWsqx",
  "key22": "2vS2SXKBD7WqbivwGKwY3GAoZLxRudAL3QjRzWU87Lo3bWBFWMbCG5WY3oVwjxRbq3K4hHGaeoHnwbiiDXeZE5Nb",
  "key23": "55oMXf9SCFQj11NXqCmAkXmGoFh376pRUGBPSFfyL3cEZHHbVL138RbuyhFdAr1M9FzgsVi7ifu84avWRta1ziWS",
  "key24": "3JcEzuUCTpMEP7rByxfTnLmFcE19Gb8eCfu8UobtphMVjopYSsGMXQH8GF3TCMTKVydqweWWsd7cTiN4accBwGN4",
  "key25": "63xaFjp4DzZUG5FUABU1eUio8cJVHr2sP74juwZrgVBmCM71b7Hn5AcMupzNtMusNKa1Vh9tkRpDE85RmLkv1kXE",
  "key26": "oDe97gyRUTmA4xCP9AuQbsqovKDKW15ftMDyca4ZjKR6jwDaaiX7HfELx7VV6ohVGxrurnii7eNUyWjNTEcSNaL",
  "key27": "3eUxGJNhiHYafcVoJfaCrmVmC4R8bvxy1JZY8uYHSoySubRWhskdRba8RYirPAvXxUYqC1XECEkYWX3FW6BZ41Xj",
  "key28": "3uksPY34GtemXzy5S3qs6vb82unwxwyDc19zwdVnvjj7KdwSo4ABnhH5J35V8rSQorZFRdRxmDkGtxhswZa4ueiy",
  "key29": "2EsTwnk56Y1wYrgE3xyFdpBWNzLZXRLJXUsCSFnMGZe8DTqRQ3MpjcuiypGEws4w1HRGYDK86ioVsyTySKYRzTTo",
  "key30": "58w8f5iqzy6vG2efSk72xavHC26QSvU9fPJ4BEuPyGe6WDSVKVNpUdzzL43Xrp1imjZfwzGcRgMx7qt6aeBs6uky",
  "key31": "PjMcDkWxXYXhJBFSjKt7ULGVTiZbmKLgLNVL1vGxUyrVGxzhUGTWd1q7P1m5Fi7A7BPZEMHK8ULt8HKqbjsKp3A",
  "key32": "gkcWeVPXv8vUFEyGo6HEZvB6exa7WwAe2RxeXq96pxMWrCSi1m9TLH8BtprYme9axesrZbbxpbhrWwKKHf1oJkg",
  "key33": "2T7Z7CVU4uj38CKQPAopAngYrLFuJxFrRGJHPJcdis7Pmghfu6RafjdHBKiHsF6dN3WRZv2txUCca8tKi5q96JxS",
  "key34": "4SDQEt3mh3TRH1DtMzBd8mqABY1iqqmcRv1j6GSjmN37X9GGX9KCgNhy6u9BypcA6KD33N5jYvimrEFGpSbKtcoz",
  "key35": "5vqT2n5Yw6MovwDXyTF1y2dka2D1ggGTTJupWjNY9bRWD7dfVD84Jg2pBnVtQ4qpPDvxoXEsqhzjhVxmnt5ZDKVM",
  "key36": "26jdWTyEJwV41L2WpBaJxgcfUT4STAen75sPpVmriYpVumcVHHJnZSHeAhmyB8rL7ZYDd5c4ZFsuTGAoJFii1zhS",
  "key37": "64NbyB3U6pZ6ZQmeBQ9eLrLoDHh2ygwt4hjfNcRiuKz1SqT6RKtQ6GkncVme5F3D3UN1e7Pfq9FazGc85UxyVoYz"
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
