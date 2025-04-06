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
    "3kDUCuH35h2PZjtWccyChqNrFZKSKN6iFZCDwZBdP5Ah85gQVP1uDoDwaVeRqKyn8GGtctub1TVd2AYwQiRZDuCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578ryRjTuKhj1EMMr8hrA14qebkaHZhXDxkwcuuvoyr9bDqxGmsGpGdNyuf2CgFhuq4AbvQNkrXTyQFgajaV17q2",
  "key1": "3Uy5nHp4pbruCZsw2kLPrbpMbSE48hTvrWY2NF97vg79rKF4cGe69932VxTRiCvsGZ2htQduZH4zgKjxhDMPyrMs",
  "key2": "3wzRRoqJ9P4ETVP6JC5uoRfVhHf1zcwDf4k16gECYZKGBZCWvjubfv6tZUg5geDgGWNB8Dh8rJPvRcXMWyX72hcQ",
  "key3": "3dunZRjCM4aPtjTD3vM9A7GxBW8MyZwFCAULtLYhFF7fZGmvuxRoAhaBi4toVZZgWKKw7Qfy3M38xVrVC1abqsYc",
  "key4": "UxYmrXjNJYVPs5eHPbmSfZvonR39iuEqbZk598rPr2QRjDRNPhhZJq9txsjmPXs4errvNmTr1shoUxsX9CLfR2E",
  "key5": "5hvLhiJE5Rs8DmKCiQ3DPQAw84JimnJ3ALhpwBi3NEscXReNUYoY8iEh6TzFyyPgMJw5bhxeAgNy772ZVCoYKcXt",
  "key6": "zynBbEJuWbvsgLHiDZ3cTrsbK7uFSF2vwyNQTh5bUwSBkX2HduBkaHkJY7EeShm54Cn9X6VQhFfToCCJC9fMSHJ",
  "key7": "zw2BYTMAbEpPrVFfQgFHCRncHyyDPDqtNjEVFVweTcSrDX1TgDvdLDUF9tD975dYihcMei4W1CinGt6bBzaGqvR",
  "key8": "t8EemxqQEvu4WyFP5Lvmkf8tQF4w9AqikLPudSfMgXrVuywosHAgSFqBxGF77h9bpboUQeZJQQNza8RDrxXdwbx",
  "key9": "5sjH2fn1XC7Sfxafg8Q6RgQdjp7wepKnGxyKgFUkh2sRo9VG5bZQvcebSSKLEfBcDRkHLLk2Q9PN1TZjerRR6pNr",
  "key10": "5ZhAmo9TFYYDNEyv9r6QqpiVhwRa3nqe1z6BgyN9ecNi6wMuhSfvj1bmAdxS11miSzsgooi4EdFRNusUs3W182e7",
  "key11": "AbJhYJV2qryhwgv6zneLhUxx8pQijSJvBrNeHVXFzVtmkG2vFpM7UiT8jxWRuAfMyTm8KfkYZiwpkZDn6CWzxx6",
  "key12": "2unNoz3PxCUGsmFRFv8bQQkzTVwkXn2dZX5GMyfwFeceMmYcMSK76XFGoGmt5anuXo1wvjeM9gLEn9xvuXwfeDRL",
  "key13": "4C7sZUKQy8w6WSXV3VYSp42bjGHC52AUciGLXen7c8hHcLVSd92vX6AipxUh4iBVGrVkn4doRdxQDYJQKApHWtDo",
  "key14": "XK6PjvGtSxhN8as72uo5rGKBLnSNL4sw8h9g5QVPhB2JsD2wKZchDmWTJ2EofYd8c2AFR9fmTwZ4obZoEAMPoaN",
  "key15": "2gP35XG7cfjF3qSrjx2DTQbwwoV12zeYx5z5apESwnm45T9qvAb7U318h8otqzb9m42ffLDeAcvsj1g2PXn6EscR",
  "key16": "5GE3vvLRsSnr6qpDFpRBZBQnF8i871up4KcvYFYXUzdci5nmuTjzhgT1zo34ace5QmiBYmTFHPMKNTs7kMJuhdZy",
  "key17": "5LFxidMU2PZQ5PuJGeQPHfTh5PEUuMUZ9spcr8UDkASLGz4ATQCJRDRqAsXc8AZg1jRp1AqqnsCijhs4bmvuYHuZ",
  "key18": "5QYTRfxLMThD3JVkgWnwsNXMCgFdECnZcV39mt78t3oDeSDEyfRJKAQUoFRHWA3vt6LM9N3WesT4sbCwD29LEn3y",
  "key19": "2n9QQXgr2ZyDhBcqSmrdjpyBiq1iaVizjcUEwRFQBuTCYDCcmmR6e3tKcfA8oBmYXH9Cy69MMC5oHY6RzLVFHFsT",
  "key20": "5Nd3rkPUW4ogR6qypVknrM9VXboUAYVwNi98ammuS39RqDL4e612qdYXE4Yr1uf56LNZRXZBz2ECRMebGL85e9hs",
  "key21": "5V6SDaJbvqsZHejCoRKDdfhrWLb2QYfQZ3n4ChZfs6aiuoz5qzjvmKBYGbEKazAg7KgabJPqix5WDKyvXpaCa3io",
  "key22": "2MbTu9ijgbBknq2JGiLWy9tX9aawyjLPimcZY45gT2VyDqB9RzSo1ZPPi5stNT7WhtBsr59rG6cps1QoKiH3tU6K",
  "key23": "5ZZgTeiwGV3wNVBJ8LcgM2EeAuCEPkJLuxFeTNnXqCf47MSZ3Do4esGf7co54dGmQS6YotaBKj39B2MdqPqcJajM",
  "key24": "5s4fE51FfTszLHmdkZquXLKTDG7u3dvaWMqNgfFfevX4gwqWJoNT29H4nkFH19pBz4Wm7N5Poq9shwZntZHj2Z9i",
  "key25": "5awXDZmnV95Ve5DPa3xxswSCu6eDKCYfpr9AiyVf1Uo2KHS7gSRMC1hY8dD9zTuWyUMWy5PEL3sU56x9zrZfXxLe",
  "key26": "5sT5ZSfoJPeua4PosfrSHbrBFWKnev2oMT8E2ycJ6N9uMKh8czs4TcViHTLgbTydVXhyrvymS2PVkM9GhGiFGKXm",
  "key27": "4tdj6RDzvUY5ZRptGn2HdGw8HyaMhComMSMxh3gPchvmcha1mQiPjBW2jEuiZ4mbpRkMNthjXGcQEiniJWi1EPCr",
  "key28": "rcJ5u39WUBafaVV7RiMKyCbE7HGkodKxXg2t72KRME5Sfd2tc6Z3itj28AHTYhD3C1AyCj8MLSsqdAyoeFT2br9",
  "key29": "2vj2LMf1xu8XGG3rwekBvME89dEY9hDvn54Nei9svwv7EmToAjNQ3FkPBgYUxyj3rNc8tLtE1KBMbTD5uVZU1pWj",
  "key30": "43VJDJi4W4i1buxsSYCE6MUZJ4b74R9sumNemReHRH3wcfgZgqnuFyvR4ELdMvgbhjth4g9Ddb9NGGiYxxsk4xxJ",
  "key31": "5SkPD2AjfBzE86gCqasmfHjDgzJbNxyfxUhVP5yGKd4EgJpGmKF5WvyxFjcbHFnFVfTR1gWEEbsJbGEMjSSYhxnT",
  "key32": "rgMDwmKJDB74qX1rs59bMYKhp56F4mWajna1zv5zyJGgTxaLXYBS7ad3fT77xt9MJgRsmjWj4uHdrZnC9aCZXYr",
  "key33": "2gYpvDs3jcBzo19E5bgm7zDtSV5NrE1G354j3vSRERnYRbDbw81mgwhsLuHVGgA4xayt81unbnv6Dcdpw3MfXVcw"
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
