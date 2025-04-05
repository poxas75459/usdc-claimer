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
    "3zHDsf446pZbX5WKWPMWaTLScyPHsXspH631VEqae7znHPyMBrDoAdaDxFccb9bhnY68dNRgA8a9uZTYajpLCDqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uc2B4KARqAzfaq6qmrfAfjKTuNxPekCJp6HzdWa8eQwQgqGxwq59o5xLet5hapUYVxB6ZtNw7wpo2dZHuRGyrr3",
  "key1": "3KPj4S1vW3r9Lk598dSPKYRPFeeuifuYQsvprkfN41iGBmW1P7k6hcwndT7mz8fCJhCLVG5WCyBd4MFQ2zYuNqRD",
  "key2": "4HwNYByiG9p1tsZXxNQE35YnGwEP8h3D1VFK4mDkY9PRregfj5gAEpCtVFc54veRoceDKMbHFpXGL7gAV8rznczU",
  "key3": "2G3w9f5hX6D7LaghEWvvUUQxzxwwSBeARAV1FGYykXuLugRZypkuKVYYNjEsbPAsRwiXhawjoso4X4iprGxfcRbE",
  "key4": "3dvxrBoAB6t3pPnCQgUS2quSM6Kjoha7RPe9rHQ4YQrYZ3QvkgQKA8igYw26oAyxFEhUVP1n29Fe8dQSdYyr7F8",
  "key5": "3M9s6QcXx23CzAPnKbrd377GNTKLHDfcxu5bs9CsFjmpLEyKTpxk7SLTYXqihNzTSL2rU2LypBH98NmMDyAsNdWQ",
  "key6": "2RFuCBXDU4oWYPAQ57rQoUqbDDfToQ43nxSseSVg6EeXhmWgHMtNADZJSZkMXNeMUDRRVC6dwxb1oe9ByH9FH2eW",
  "key7": "abSXxoVRZs38J4yUnBMR9R1s5bxBv4jy1YLFaza5oFTKUmeN3dx37nNeocFgrSdWWqdXQwpbKpdWcE1fPYXsqzt",
  "key8": "3JNxjQvLLDhaNGE3sQXFdmDfLMrYL1yUF3sAqaj7HYs9ukRwGPxNz9sKyHi7d2cgoUfKau3zfA8ivWgxM7c1GPzV",
  "key9": "5ejm3f35We2KCu7ix1y8fsUQNbNvULTS7t9FWEqgrHwYD22pUAfKWBZbnLbopCvzYSsRxTjSVju2ZMT7msXkNbVh",
  "key10": "4EooDk6HcaP4K3GEaeDBT772AQdH6neY9oabhZeU8Ygb3ER4S5UEpLrqkpRhfig3bELnjze2HCHjX61h1kv2JwZg",
  "key11": "3AbS6RYuZ2giJ2gMWLUTkiNT1cKtNfZfd2YxGgzuQ7tSABgV7vh5bwPAjPgQeYN9mTa5maeS5YmGB5P85EMgJzX7",
  "key12": "5SmEbwxBtPXgXZFmAt36xy77KqT47TZSY4VJh7Ubzv8qDvwhp7s53h4x6h7s2Gq36bcm9F9tAXpuqLrDhm9NCZKq",
  "key13": "2k4WjUYuwuaLfrEAmSFr4UvMFYiEBjYuRRfGKZDFAciKLZYGYcigkF84sUEe8hE7tKT5Y9AEzZymsnx6wwm9HNGi",
  "key14": "5GDL4gSXxfd3XyMdDAkSbfVewcmNU5G4KJprF6niNodpvM26XzqPQGdhYvLYYZjmnNAFgMyvekEYGxwFEyFe68st",
  "key15": "5q3ErytjyUv9WU2Mpn5pVuRsUmzbZGcwaHe3a5TsUHYiZ9gD2ydW4QdxPVUZJGSCtj7ZU2Cqz1xRCjCB3sn3WNkz",
  "key16": "4MQJtk9SBEs5z8SkLCYSH6kEhpTbYAiQBBNhy6Jh2PZUrJVgLRJfRA88fQQ6xe6ER5HBs3FA51zM6NnhWdmFDphS",
  "key17": "2UU3aVGnQTfh6Bem3CM9KXSwdKbsTxM9GJwqvGqx23ouby3yBPXqT8zZ6DRKTfcv7yW3Wkqhp33BZFq9YDKvcL3z",
  "key18": "36CmjfJdEMgV3GgK6RUzyyjn7jpY9UPAoUB2cdE4bxRGc8xF4DUaR6ySbAzUrw8bAgaxVWN23tdURNAwiGaHiKyP",
  "key19": "4MNQVgRVSSpqtUpFErgSEj7EN4uJmfEUWYSWqfwXNNZZGHGYpbEiLMWWGzqznz9odGVRQAg5rHwh1X8aUgtpQKoj",
  "key20": "4n9toeHCHw4tiuEqH5rfxRA25xN2ComWoBpDGao7TfpkkbQq1Xo4tBp1iV9W5YyqW7nUsFXacUtgV6gyo9FhkwGu",
  "key21": "Td1Ab17ZoFVqCvMphT6VJimiukyncWjUAcz1rV7jGACdT3DRjBrb8xZzfd7DPMagiXyhci7de5G5QbUaS2AshXX",
  "key22": "ZUkZycUeq7tpwPoanYwyYMat6zRAPiRa4N8sDUoR2ryUEoDx1EtbquVbqm2p3varqRg6ZjUtFQSNahEoTPv5grv",
  "key23": "4GogkP5fPnxs46hqRNMNV3u9qD6nzV9aayHX1vSrLKT7dYXMqeWSCxkrzLzvRVpkB3iKULsNWGVCCFJEuThFsEMN",
  "key24": "UtRpsH3pRWjP2ZXijtRVsXkSoJ3XgCpifW1iFBcoa9FSvjCaUCvenra3rGcDQT8z1187XVfVjZueRftb8vZAUht",
  "key25": "257eESvwRk2wNUwEUBbjxCiUkvoUXNmCXWwSEE7qHrUQaBjLZwA7qNMENfWu9vb16ibt2k157nhAyaZ5woYv3rKW",
  "key26": "2XNeDydr9qLGdHwgsHC7r3mV7KLD3xZ76gxTyqBTKw8wfwgvdcLxQLTsY6RK7msE9zTVaTMEP14fJCqjZq44vn1w",
  "key27": "5Fygy489np8yTjs9mtmVcSe4JmdEfVq7EBX8CHNBjW5qGJBUgUjr19cTeQBwZJM2U13N1HArJ1jd5QvLesgww3qR",
  "key28": "3QEDEL6BN8nwG71nxt2AcwJvLT31qmHveLGkjZaMHYGu8dqvXwzGivrdtcacezCzLe9pEMB4JSm5QgbKV7hobEcJ",
  "key29": "3d6FX57u3BQVZXdL2USayxEoimEMmnX8Ci1we1f9KdE49tFnSmcnNH36ZDeFDzVagEVciGLB7u7T3LrG7TFwToAQ",
  "key30": "2fJodP6Rn9D1gdWqVjBLWVBtvXHn4EQCZkHsaxj7sjNLy8v5s5ENwtqiRkqCufPt9bycrruEPMGVVfRfg9YaMyNx",
  "key31": "4aHWgfEGdYQRPpQQvmFRnx28GeJ5ZGUQmeJhjVTX68pxGkFM531hEzDEafgekHei3nJvQo53nDni6GsHWwwAC5M7",
  "key32": "7eyw3Qxq2ZgsCJnHAbjxRS7exwiDwN6dE4BN7MUgJhSVj9UZsu3LY6uMkSCp2NvxxuPrL5v73VpiBHKCU7RZUur",
  "key33": "2Pd7R3iR3i5kXBesfMsXmkEUWCa32KefKgZeb7dFLZ7PELGbwAw73AubGZhapjahAS4sMBu6RZJnvMEbdPpbbH23",
  "key34": "2gsd9QGB6fRqZzqBG5vu94k9xdijGgRhKkbS4ftAjov98AsFPCXnbbQ7QfrJFGqkWm5ASwPWmMDLeMAeTKfExqp8",
  "key35": "3yiDt84pM1F6GzCwscsWypbRUttCpxZ6v3MBuHJfGY4ZW8dkRQyk8drz2XLybvjHFXjvbCeXTrhzEfWwrXgwToUe",
  "key36": "21HjXnWxxEyo6s3VCeFByteafC55XdgpW22Ju9LFq3ZR2DgcKNKsshowt1FjjQXbad6pLbh8muyEzvCimXwNxtJy",
  "key37": "4QbZKV5d1wAwzucCim1T2oYcUZDQ4i4gk1xJMDf6HWhX8DmF8evKtrieRyNVNKZXYRRkfWgtD3dHrHDGhTfjpzM4",
  "key38": "3NZKrEDjeKso8HbNTkvQV8GR11sV7XVe3BXX9nUQT6ExiYSsBNx9MBoLFbiVJcbmhxc9kdA3t3z82VpdvLZpDWYW",
  "key39": "3nEDKFonKKnp3rrx8aDepezVrivZR7VY9P9nGq4VFFCQ7YZuPnByjPTq3eN9KCPuK786opz72DeyEPtqvx1bmJdY",
  "key40": "4ULYZvgr5kHCP3oRFKHXRvP68XzkPGYhS4t6Umm7ELtSsegZ4p9561XPrxfQEvjXBDp9UZUBNsbEYW5tUPnAvWqH",
  "key41": "343ZD44f3JCY4fi8bEeUQSPiaxb6wtp9HPR1amSL3U7J9s31kEdgqDur8uNq3BWGgXhsfAK3rBEYwPD7WRvACdbs",
  "key42": "3FfDLa6itfGRMKpf28E6gTY1XXh8MbRLikZBoC4D9aqcJx9NUnbjknQ3kxXAP8E3qpDX6JFxghYA8BUSPLrDbwBS",
  "key43": "44bg9NPzY1zP5SfHT2LyXtjd4DKsHr9KQCUS1BhsoyfXGb7xQPXhDY6GUV2S6Nte4hB3mhWGmKJCvfJVXZBSStbD"
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
