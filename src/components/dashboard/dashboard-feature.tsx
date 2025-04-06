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
    "35BiLV7JXzi3ppr5wXyRK1qJzGxwL3TxDV8Cz4YGazGNS78ckRxAu7s5gny1CTs3PUVsmh7BLoaYbddEPamE5f4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JA9DnYSS96b1hCF3sm2SCTKYc3D9jKFqijoxVn6aea7HCKfb66qWwxoFStPJPMadf69QuHVfY31eKZrf7ciY9p3",
  "key1": "5FDJmYZAFitu2i2kFxVrSy8wPXX5JCtD3UezeKU6twHrh1APR3BiDxuhLQgpzhNh4ZFwhSsXnYFWE3KtRgSroAvQ",
  "key2": "B7qoj6V4Ps466sPsuJxQLXHstP8JDHvebnyDRCvZWzUAWmYFWfsT8dArrdTXgZy3digQacrybKDTH7cWMmVytoe",
  "key3": "FcLiuH7ixjgUeuxtmbKiQ7hjYRNYGZBe6RFbc8Nf1VNcZzAeVPcUfrKP7fgxAfptYF1B54dk3WSmZVvccs83zG6",
  "key4": "GnuwaTrWWjhw7YitcYDRDN7RXNRH5Ed3663ufiME78GYRZTbkUZToW1QLSejpff6pbbQBEKutSmbM7Cte2FVUn2",
  "key5": "Bj7eQZ5jsHjQHuGWbr2UmBt24Y1LokuMCDrVH18iaqbX9NmA3hZ2gRHE5aSizDeXSPZp5poXqoa7WK6W6XNRbMG",
  "key6": "23315Jzy9xNkw1RoU95HZF1gGHuA3nBCHLdSsFKk6Gu9tnY75Pmr8ScQWwJGn9q3AyJZjRiHQHt3zkVB5nTeKa3v",
  "key7": "3ZpAUgvEhAWE1e96ry4TcTh3cvv71C98CJBi28RUhREg38xzCGPKmKU6MAvkGNri7U4Gw4SVrgRbdyXLiMpWxh53",
  "key8": "4pQJEvjBrDgUQ2wpaEs41wADzfGw2awa27yx5Qgwz8G2a9LEAXKdiqS5FYpwpNXFLtbtGETZoEoaTBTUGunCKeNm",
  "key9": "4c2MRs24q9o4m1Wm5kDU5SUMR1zauPvsrRyFxEWA4XVjQ9ooLiwaPFjkB4ECQ2PiEefRNmk5Vuns6AsiK8ANuyH1",
  "key10": "2Y2uq3zRTbobP5eVgh6PEkb2uoKSHkSjcjrXDZrxyFgfvwudXBKAKAbfFoaXzdWpNFQjkZVrSCMMdz45tXd1T3XY",
  "key11": "2zn78RHAEyZWWt1bzCxKkMyHJvQgnBUhonRMf3UmNMCWJTFFhbxvrXdcaJjm2NAz1Xmy3NpVzFydo8X7xGS5voPG",
  "key12": "3zVVLXjS3LQ53giEPrLNs1oxFU1XxFJfyYgsdJXoz4EXRPGwHLLThj6F2nQ4G2sXnuMadkepno84pyoYk7pa764V",
  "key13": "4xERweuJbn435QQ4aZy1ymZXMMxRpHzXLTHB3kDNckHdnkW88nMJWdcmeK7Y3wxPaJ8owpuAuXnLstfGNT9FDvLM",
  "key14": "4vZ1Fo5bnhRCZRXqXHghtGnEW6anp13McRvCoVXex8qSjxpJWArmPdwJ8Mdxx3bBhWX8eGznE8qp7CsNMUoShSeq",
  "key15": "5MnoBvkQcdArjvtWYphSMjpnsktYkxbQbxyk4H6cxotcf7MK8jNQtRcRV4X3GAARVDwvEikTgSPN9sq71G2Ns3gu",
  "key16": "5QN5A6Hw4ev8gPW3P4ANRD6a4HdMvPa7Rm8W9GwRPPiGK6X41GBHjrfjn82UCaR9otavY4pG4XvsWmQSzpQJ6QiV",
  "key17": "43hmLsVBpiHxnBAPmreXZci386XibRzHUjdgqe4bxrr5BTdPNmKYRR7ngmcQpT5D92d5BSUYH7m8NVxBQgFW49Sr",
  "key18": "2txZJnYD2GPziSW7CkM7ZLNefa5xhsbi61AEVt9rfuSjw96uYiUNXpRttojAeYd4uiefPizsxmZuxUHD2gRrkab5",
  "key19": "2QjRN2w868CetB1TRCs9FKyfThzLQcARbeePwnaPUaxZRKsgA74Y7SzqoCXTW64Xhda6gLUnLoBbecWt5G91h8dC",
  "key20": "pwzjFk9MXdBMxSnzawa7ru4enwh7yayBihCvmWjCN3cy8C2rdE1Yzov9gu86ZaHMybaHojWdtRbLb7Se85XHdfE",
  "key21": "UUjYZX4cxfg3Y1dacmmd6fz2UEwMb1DaHvgoksJno9LESFNCstCsg8drBPmSw1PmcP5EksZdrTpw5XqbLMupKdr",
  "key22": "ZYmBKw9gaBu16dKf7V7adeKSAwKmSFebGQdik91hGS4fhbTZLvMPJ96671GRfAv74L5QAe2nFzgMsJ2bR8VgdDS",
  "key23": "5WquWViDsGNkeSPS89aCmtivVrmBByCYjGcmgLjSmXtFEY8MS6uwVqyVgbnCv6AtMJyavbGtrtrLTQqM42kTWtHj",
  "key24": "3yaqL13P6epQmkK77nKhJYMNKC4uDKwnteP4uyGKwDsXssws3wN9rP2wnhKWNMJvPekKbKj9XYgEU5AQx8TCZG1H",
  "key25": "5GBPTpXfbn5NDfCGAxkz2yFdQoPCfz8speh1fCQBpb97NjZazYzLzW4hjkHVFYqfL862HTYGFE9HMyWHxkg8C1dK",
  "key26": "5BMnPZScM3ZuLRmoixa9UEUszBuFNM6aTHpKW8gapcPJxwy1ADCxGqJs8qHY6EQUT2jNHPpenwzQ31ix9LvpKvXv",
  "key27": "4pGwfsdNU5iJMHEX3YrbUsPp2QeREJGsMbq2RSe93NyfWndkcuQEw4M26XTr8WABwujkaX1mUMfChVEW4sYyv8aE",
  "key28": "2MGWuExgBvdpMZ5sdHPmGgSKfymMSA6d2QmHu6n2QEghgbXh4tfXawYGcw7P6f1FhUrus95Bw7zr3jJHmGSXWo4c",
  "key29": "4Eg83uv3XCLS1Z8aGxpuwgVAYCzxhKwJP8gs7ofaaCbQnpdtEXvUqJkJVXvFGDvyeazfXVW7Gf2Pkdkf3zqihveJ",
  "key30": "2sGFfLoyTHufbtHrAiRYVWc4CCqeoLvv3uayHiZgibgSh5xdNLAC8EuUckCD2LaoqBchhrUGYrvrbrw2NHEUHRKX",
  "key31": "nvWaJQiYoyLNSSWHEtVbE4YzS9EnLkgSB4VuTWyXMTjNo3NMMLeU4s17XC4MJFVmceW4S1EwVCRmXwmRXEFV4bH",
  "key32": "3KRPKCSV5WZkXhqmkBc1r5CGMo8S8EB8fApcPKD7ZpeisTSqz3Uv7htuenKmjfn1Jacr8uSXCJr3MMedceWM7NEZ",
  "key33": "2sr1HjUb7KvQz1pAojMwLgFdrqAVfxbjGJ2onipL9hBd3PdjkHJ6U9kD9vSsURFNYd13oVRriZFErcBACUAUaAmF",
  "key34": "34BKNhYpW25hBZdfDeXC2FKBRtoqnYETsfy2xpW4quMcXeDAbcQB88eeN3vZvBMTYt5JrnvkoLRuQoGBviz6VzNt",
  "key35": "2jVbZtUh5h5Vybex85twe9krx9y7iEei7PaZjRreHNBNBadqBc6WnRpVtcE4iSLfGZiu4Bo1qjfp9zvziZ1HH4rm",
  "key36": "2PMUpdDbvxdgb39txPvLLZwv4WjeRCpeGnF8qscbqBCJrPuF1fNffSUDKkfwWd1bVinj3mhtBhEaUrkrfTenJCSx",
  "key37": "2wTVzsFuXVkfmDs6cdsM7yKP6xwXoQ9JjAB8wu8ATyF4KrmGwn6HEY7JsN69m7SEgPg2nu4Nqs7WECGQa8hLaV6j",
  "key38": "h4bGYu8BvmeU78Gj2Uhrppq93zWEr7siRPXV9xwrQKjhMdGQDHeQf1aSpRzSETLDTbpzgyQskG5wgv1qyL2ZMvp",
  "key39": "3yh1GpPabU8QDh7FDZ9Qboq9ZUM4wpQQhFJE7pf4DSrNbZ6SRkfF5K18ss4rY66maSFhKQqYggYqyjsepgGDoaXU",
  "key40": "4RVUGLPZmB8TYLXKdK4UUwenQEBGyiFnFXE8M1fuhjw6EDtEyLSnn6qVSVPdhqvfb8aYtgDdQ4zFCLDerRXKQ3Us",
  "key41": "ArNrQzrZVFM2P8sFzqQ8giJMU5aCupLY4Kg9rNkkPD5FfCXGHo99Y1Fe8rurYbE3N6HobjemHJvVVhQ7ESVb7sV",
  "key42": "32dgwzyiFFgNqtuGeqQCWWKR1a6pUTkiH5SdiCkVWm7HhBnHNKweDWcJw1TyGxoNewBcy29WL43wfAVRqfXGK71M",
  "key43": "4PX3VNvkmN83ppuznKkh1JsFrFxaAR5FAHKoKywUcQQEgCXZcDV69b617C1vek3483uipfVn3iwiSQkTVbyprUvn",
  "key44": "3Hj8bvHfpLVv8fzZEDJ5BCsF7wqeikDSa42hbu9XfbF1ymTBZtt9XTcm99phmKxFg1PXDVyaQGbAbQemYJ1XMkkQ"
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
