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
    "5mNJCgM8QMikkRckqcJNycjhgnfc2tEUpx295nhbxZynbiS5eHDTrCn4vaYBoPx6epj5j18Vuah3dqCTTcdDMDZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RuRH6pUcK3uoza8LxisunHMnD8Do9bLFLG4f47NoY9RcQphE6pHinW3JStULNb8441vDyqveemU92FAr68nY4XL",
  "key1": "2BsEzgaqHATr8FYd32QNPFxg6rf4NPjEFWCpL4MhYMpTyGMRUuz6tHMR6pzhHxPerY37YSGYUDSo2hmKQVRvmxPd",
  "key2": "C5X73XRXvnzg5EnM7H5VLwA2iuPwq3aXK7yZs4eX6uMiSyXBiqgYj4uaXZURQSSqbm2vPL8b1WC1Z4CU3iMzQDp",
  "key3": "3JoaAnsKEnZz6Ym7EgAUmp7YgGpngazpgCYpiQ1fwLPGW67kXnndXNhjYAXUiocwHScR1xzGVZa4eS92LoEhFi78",
  "key4": "5s1hZVFpBTcdnDRVeciAiaXhj1gAeJQfusSK5e9Znft6PMwm6poAD99HQm5mf4v7nwoTMfuLigjQrJbw2WjAWWnm",
  "key5": "5WkcoBsfuTayaCzE9cHxyCXjsaT9DhgLHR8hBsHqr1o1hBKjuobMo3wizoANaM9uhACrM6nzZwXbWbUZKDQzLdKT",
  "key6": "2z2PSbnZWGttFhjnUAohRJSstgPWZi757WvgU6oALEKZrTERrWHSui3V3UQdLygaKZttJN2gRaoMwhSVG6QevchC",
  "key7": "4GMSmPLmSTGmjuxE2hffdwXDZNZXPNni1Rm6U9R8wqCexesA2Mg54oLUGstU2XBtQMvDXKa19T6upXh5LiEMtC5j",
  "key8": "3g2khGppWozhUq7VZcxkdXcT13bvYggTHgTD6YcKiLxnaqFJ1XzeZJxk9rqSENvscRTEG2iyiASbPxywy136KT1w",
  "key9": "54G9nhhVAxBGcHzrkYND6MEky4ZozCUZ153NZ8vDxpguPBWBerP15TanzMk3be5btp3Zjx47c3BtJbBj3wMrpjQ2",
  "key10": "3jLAxxnSn2noKgCaFabzY8HHBJ4DfrSvQxmE1JFPwTDNzkPr4SZFtLXabisdJuz6rfPoMs37NFWiNHohF6C8S7R6",
  "key11": "4vi5U9JXtj38pkUktNcG8MigJkTHzXwL1MPrv3z11UTT2xD2fXQrNhoeZCcbaeB4gLmo3unPYagTTtto2UNEJ7qr",
  "key12": "5yZkBd1HihbGopakAFBpNfXzyu7i6uwcLD4zViuwCQapVDP7wrinUr68MLkWWBWuauZGSEEiLjwj8ui2i48TuM1H",
  "key13": "NxsbWL17W8NWc2UueyEvt9QCG5xXA99nqd2EchqYgNmSXNTe5FFvVqpzZKpG9q5QanHS7BAViz1itYvrDY8cJFb",
  "key14": "2mVwx6EiVADNMuS963j6B5r2xQwAP82nfxFmYoSH5xEi34hwWnFUMfqyxGfgWxGfzHDZRPeYtMzNvG5irpfjDg3",
  "key15": "4rDfbeCDrx8AHUTtMD24VWo3QE1EGWAfnJeUBAKRRf9G56fykChxZYCXsQWWsvvRfn43nqQ1P4sY5Hn8E4rSzMG1",
  "key16": "u5XAUvcZCFVXhbuwyn4nZLXDqxsV5N2n4wjE7jRSaZ18KhgLBXtxTr7QiNa6mVqDBq5ghMegAgtnAzJvyCMVzCN",
  "key17": "5FaLdGDEf6NDKKMETPukFqxJeAzgW1Q37rTZMmgy1yndebRnpwoUkN6Cd5AudMst5jXjvDYja9WRipjEvFwayLyB",
  "key18": "Csc5JhuswMMdj8fSzLiNH1jHSk98YkhZGJDE8woPVa3sPHcPZW87kcTJAyqC4JD7TrKGaf4NnGf8rbyjTztbz91",
  "key19": "i3LZadNTErHJL9SWnTwZBBpBqqTNH9JvYn8NUkcNcDZfGeWZoStKTUWNJX7rhC9mZpEhjjwkhSkEmdUXYzyWh21",
  "key20": "5vzsEr5JCkJED8W6tz4cmMVY2aNWgYRXjbniTWCfnFm34Hrtt3cNNZLbj9mMEcjL5i7isgH4XLeg7HapmyrUUkKu",
  "key21": "5eQscB9EsaRU6mwi9cdM2nshj21xCqkT1kbiaQEXJwJHSRt1JF3JjnpQSBmsfBQYZMm5RZ8TwKgadks49X7yBBZn",
  "key22": "pyoQzAhojsBNNKFp33o1XW7mwqoQqVm5fMKJoKKmt2cowbNQJKMp8QVeSvW4mwoGEDp4sNEfaq2kx5QTvjmVxJZ",
  "key23": "63zv7phkxvPQiu3Wn1dQxj946pH7kLASFDjq1XZGEQZ63gRrmTfS1qcoYsGExk62snWw2n2BT56Y6mwq5hmcyfGP",
  "key24": "hSeAANFvmCRvqhEtdZqmGekvRURntPfgDHo782y5zMqyb1TkpyEemTAFBFC2abQTps74MgGEHvSWsn9PNbQ8Pc2",
  "key25": "3jmMF64CpqPZLV4fk76GEbiSCh62htb4bDn5KdFJbeJt9AqoDj7Brbo3pvQkFoh4k5YZfysxV77VLbL4j1ozDKZq",
  "key26": "5c7zS1ohnqLhwkU9TWqMgoapB1gRw91RPc98Ny2FXprMayJmac8rVXs9w6uKdWBYwpAsnD6KwoNDDC738HN3Snrr",
  "key27": "67L8H3KMogpoCjb2fhUs4PXbUmkWPp9f7Aa5foBc37XyJKLxyHQ4Ffedjpi817AAXk2griRw7va2tYSZB4keeFZ3",
  "key28": "go1XRo3fg6oHgYfULQyad32m15vZwoGxvK5gr3VZcyfiec5K4eSvR3FYE9PVKHjmf2y2kzGgNYMNQ39HU5GxFyt",
  "key29": "3g6cRXdHYcBzEneFyAcXtqN4r4ZZJgV1QVdY4oPqBgskiT8rd6q4ahcvdAzzP66HniSn5JpBwsCT2UriiWSE7zQY",
  "key30": "5LmExU2ri5JvDRqcKMN5w9MikMdBbcaCUKXTDnPNwWntE8x1vEXzsRFXdg4pdMpVurCznonwvgSqczTHd5XNUVnK",
  "key31": "5QET4KeGms6tjxJN1wKv73oYjET4ZCJZfxuofL92fhHUMZqmDdUXf5xq6XYic1U841zzCkrLx2aHy58mknEMxuWN",
  "key32": "2uaCgepRtsSYHHNMzGFTuzYmgoqzfvEZ8VCGwYzuzT15BcN9QGnQ3J3UyWkfZCdZ7c9F3wGQcndwZ16CKoX8J9Cu",
  "key33": "3qKu7YJdwTpxWg2BJhhsEpsR6iXe3G4pnYpT3nTvtordj8VsUtkpaYUoDCoWgJ3Zft8qoRMAcJ1UfayowX7DEMNd",
  "key34": "4gRry3YMQ4dqsXSiELw9GNxRRAxdbbah9XegsET4zeCZBnw9wUDdrLbcsnRiTktbu4NxeXyBRX4XQj4ufZamRmRb",
  "key35": "2HwZJwdiadCbF5PT7rpHvdoncSxVennnP8hskfTdJaWa9BbwSVvqASg3Sx5rxEVPS4D4339kQHWuF7ERuzKtHGCa",
  "key36": "2MyoQk1JqsiwrJ1ww71Vv5GR9q7kCU1RZKK4Px6TPtkz6XfTx7ApHdN6xugMPt2LgmonAtowx87YNgTsjmcQyMcx",
  "key37": "62XdreGJ7uxoMbjqB3R6eaZy8M1redjzYpXxhYXHzYCxPJMLncXC7FdnY13FY3J45eP7R2VbFbskB43kWHnqDwRv",
  "key38": "22YNu7NqEfnS52yfq8YPXfpuC4Yag8tadVKKkwqnn75J5284FBmFTQQGD5Nu5HA7faTJci1JsMQuKdnikLFrgb2H",
  "key39": "21Hr7jVRb3YtJj7zcgoTurP2bAJh2k7BgBjgCf5Q5oKNFcDVo6kBaKn6PsJPLtmxYbXBMC19tsWWK5PdTkbaFnou",
  "key40": "5VVR8Lu5VhaDvc4XCeTtnjWpu9BhJqdSA9jcjF672bkXbBKD69K4WoGYvgdATetguBCg2QzoYW9c8ZGewMJC8TN3",
  "key41": "5o6i2ddFsG7oMGqAwhAcJ7YmRnsFZQmWT12KZykqnHVnk5vP5q8Y8evyoLvMGzUyVN41NznQP3wY9brf2uYGbwHy",
  "key42": "NCCYu36q6VJzdurVp8xacu6gqTKgDUCRWCoYMk8g1J6AQ7BPuUNCs2r4hFTCV1Awpxe8yQwA2UnAKwmr4LrLmWR"
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
