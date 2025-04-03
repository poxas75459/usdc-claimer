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
    "3mfSLMEGfSZPApuUR8Xr77NZj1zusu3srXetWixrsKegCkhcybNC8qXMfaUqkhNMF4Kn8pZLWamXfUCJTuGHbcXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUSVCE8MMVhjozneBkCj4X7McNsouxJTD2F6AggC8fqF9AnLZihj4rHAYpL2WMhTM16TLpqXk6SoepBVq5kKdbY",
  "key1": "3Tyq5xWksyLHvDmtv6iQo4G7nB3AfSmjYAwES3YDQHednXgvG1EiNszfZhiQri9ba7znmbLzEPfbuJyz3gyNtUT2",
  "key2": "5K6i9DLAVw8HJCTxpadMqBnE8138s5k4NRomUhysXpbEDRkikXPkCPjKrWr9MvdGsQZoTohzLuT4BqDwNWZugQr8",
  "key3": "Qsbyvvd2TbQwUYhjEiyXymPU1V4d97LhLE5QEytEj62dDqY3vYAR56JySVpGCcXattcowMxVQMqjkBm4yo2qHJj",
  "key4": "3r2Hs3FpXsTf4yd54G8GBbr57aqmQ8PPdHwtg7iLfmZwBJ2cVxWamVgFaR1rmddP7YU2m9F9Ghv1hjfuTcH494Za",
  "key5": "4rMURatHwdScSUCqd9zmUTfRc2yCD5mwKQhHeBtvUnymoXvtkq1zRWSJZuPafpXTD76NV2tvBntfgJsgaAo4XUda",
  "key6": "336FppYnzVnR44bHauY3S4mM2WG8MzFHtSbcD1RvueDJhFuHUkuEaqDpe7NLBy18U7KWFxdRrhJEN4qWUnPbguRE",
  "key7": "2rjtnYD4QifHGywznQ2V6q2UHEkPoQYsHQGCp8VEGtyzNf278JzLxkL6jQFWjL7MkP5QKPqNdNEpegR7FeU1Qi37",
  "key8": "2F1X6Mo5oNFx9pU8gP67PMGGt4NqnL7NmGw5E5fzNke9uazD2gPRKAkuG4wb5c6JXpbsia9XjYap38ibF9uud7kd",
  "key9": "31fb9Kjb3LWyyyKaLh4MUhcQZT1s7ukVM5MhWkRMb3KTqnS2iffGxTvhELTigjGfKRNq6Mwn7pku4vZTiDZrcGTG",
  "key10": "3eXdGALfiRfSFfyGjX6SzWTgvWhtVQSvPePzjVnDFjLn8drmoV2cVj18EhRLiwmBX3Mnfr5siayoeQpFynrdupDy",
  "key11": "4LgqgSRcKocNBR2QPMDmWBKcnN5PdfEin2Yr9tftEZJUjhbfqtY9aH4hYdHvfzS6mQ5u8sorjmtMupNyD4bvzwB3",
  "key12": "5wr5bCDGETPvXi2bbHtd3er8mhcerpTW6S8nNrrbpL3WsedrHyG3scvhbV7twA9pdTR38ziih9jvvF9gKzr9XAeV",
  "key13": "4T8LxWbw3ieVMrb3zbKnQdTE9aYDUS3yLAHfGGRDokfQ2EP3cgy5f542rRqzD2VDTAvMMN1VAdxaFyUBh4gqLF9C",
  "key14": "oBzNTUGbTcjwR6yVE84prSJuWF6YFzxLUf9KpPxw4rXrjSnw3it4jgTiJBdP8nKZaTGm771RXiuzM7Co5mKJAKU",
  "key15": "31MnAhpPaP3UuGLJZZBLQJJnPbrevXZHhnGzG18vzUdYA94jCU4Cw6CP9PG4A5bhSevTx2QH1j9aT6VvEaH99qLb",
  "key16": "5P33mSHKGCnJvjWPp4MR8XxcVPLHd69k4H12AkjT9WKz9cmv22cgrSZCKzSPXmD9EuzqiptYyQz2UGGURFfLRJuT",
  "key17": "4NnL6CC1Sx19Gpb8QXHKq5PicqPcjURzYfsKbcC4KwbdyZWGQeSE6MDEdsqH5Phg99ZtMtj4KypKe2WUvxY3jaK9",
  "key18": "3VwguULwEw65U8CWAS44zQSHMnaSQvucF3CzgtuBJr1D31b19UZ8YPqsiUeQA2WscVLjSNtPy6t3bBNbAvxa7Wqa",
  "key19": "4hE9sBdAxjFjFrwrEkqDXMoKgUU6HAJ5i2gtNN9NwiNGmERpBiVmrLCgyBZM4Ab2oxN9NF2N5ztqVqbrWHaYDZAS",
  "key20": "3MoizRsNmLUrdmgb86nGsHp1KGeWhTQWeXcLUtGCHSyWE5mjoHGkd3nU4TMtu969TbSHAYesz7NUvmH5iYGfRhik",
  "key21": "3LE3nXMYX3UKomyfED2yZB1Muyo1LAyKsDZYzogzDNjgYTEX9TFbJqP3cnQsRXFS2xUqLxFaaBSqtAsWZiaRGd3b",
  "key22": "354ZZxf9RpXQF5X35yMUKef2o3PQRGNjcHic7X8bNhxwZT1qX5JbTsiRJTzzt2WKsXNnUVTZZujZtPxdCT3ehiZn",
  "key23": "2e2hdCrVYmneQRzLdfZGVSkQfHL9tKFTb7SPo11vBTMtGZHzg9qfJVXZR4LxrKSNCHLgnaQPyTU4HzvoBbbhksSE",
  "key24": "3NbFvSLHgSxnoCCF9t47YPhPGL1jo78ZbmvMiApyD1UVvWFLBwRGkhRvfP1AGjX6y2VMabt8Ea3iptF9P5xUc5oW",
  "key25": "3Q7iCrFr1AfHk7bKC1GTVHQGeGXe54sB9QeqeGZiGrz3RhEXFQbvpoPEg4xGrf7CL18NcCKHDzVXc3YGwCXbiQcs",
  "key26": "42sdCNyfLBZCkDHREVSxrghHsMNzxJ2ahyqxeMhohBJPZoJHjGxxVrJRXYGvtubh19pR7v54hUvuy55TbiT7NwNU",
  "key27": "4U91y1WJP82WNRB1B2EPqgFQn8z1K5KwB9SLDfEfu8s5A4TAPsGAL2Ua77B5mRcBkR8gFEpmWpsNNSHuTjc6hzjU",
  "key28": "2b2zyJibruYG1ktFHnZqaS8Nhyvc87Umr8aKwijx3UpmJ9Uqb6Dv8amtv5pqDRNbXmsSJNLoYvbwgPeUzhYZRYr8",
  "key29": "R7zUSK68aygAHQ777VGxTGb7VGMz1atZHvViMt6PGnhtgnnCzFkrAGSjbKoS2PrCWQkNXJCTxWg8WhJLxdtdeyJ",
  "key30": "5xAJ68NyMNuLBbH5y1uhnhDP8VB6q9XLdhLD8eT88kxRJ2UAx83eMkbFzyt29gi499LjUdGRy1B1EBp3j7YAGF4V",
  "key31": "59wM5ZxG8qcNGAXheZnP7AW71Dw9jQoa3LLoZGE1s1JY6qZnWnstu2WAuoqbiWTYjcVW9vKWSpTcLPJViaefu7Mf",
  "key32": "3VZJoDm1SP4n48fGvZGLeUyBZ8Vtxmb36MRp7gr4rKUyWPbGWYn3JcpnwRrsaBRpxEH8vKq865B8r7MsR1PVkW25",
  "key33": "2qr924DekSZyi1bS95cFspmssRNchuoB9MmYkVR4Ef6pN72JYjezh7oK9o6tvnACwVnKzcZ5YUhMHjdgMDAFGYMw",
  "key34": "2qwNQ7MRof239PYfMhMFGeGC48cajyatgNhirmWwkq5JfAASayRucDqKs29BdPsRP32yheZRZodPSvVswK1MS6Bk",
  "key35": "hqAaE87b7SarZkFSouucWSYQX8dgG24TkHiFK9jyXqgaSt8wNDGv9nC4VDivr2kTbTuCgJfAd7VGmzmXSerCEnz",
  "key36": "5A4Z5Jds6egi3XK1kVphE7CCiNGCMG54f5kouDUD16DxA7ASkMREmKxMwxkaHwKhTogqPLErwH1zNcZ7YypRyVBh",
  "key37": "TuZtsbu7F2LSM4VjsTiotRwxPtFJjaVkXYxMTUb76hZtQxehiog8jPEDCTqBZvk18gWZFDSpgKZ9w4NiqXPkHE1"
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
