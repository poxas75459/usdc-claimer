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
    "3REHMFtx4GuF3S8ovw4c4zuyjsBAggWS7Krqu1ZBUeeMD4DVSojrp64kCXvRpWWNrXCxNB1dSQv8CMpQ5UKGBEE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MgbfJxxPtpWTbKBvoUBs1EXZNPXyUVvrpTn5jDSe4xjdsJwzg4mpJu56nYYbPqqefVQkJvjUEYjW1XnbERNUbqg",
  "key1": "5zZRvEvYaJHKZUSPHcaUWoZTJt9nWFT4b3L8rbrU1kR6LDo2Jtbhjqm8JEZ5B5SKDeGLsBMhvFNbrLSggJeLNNmv",
  "key2": "2ftQysSk9SFi1FfK6QGcGMBr5m2dJJyV1XHpMUeSSYssRYbJg1VCxj45rdtC1Z8ssUGC8k1HmcDZCAXxWXfxe7xk",
  "key3": "3E2WaTCYGPenYcq9s4AV9XcsFTppJbwoAaoNeTbfrZNq6DSJH49L7b7wJZBeJ2WUpS4pLLF8d4ni28Mfn17GCzSM",
  "key4": "24JKzxYKFdS3W23xrUK3Heu7Rms7oMLpeVAEpZcMKWfrLf97Ebps8n44s2TRUk7EC3EyVNvpkNVD788ze7SxJpsJ",
  "key5": "d8QWeLMWnvY1byaxjGneFAhWbrhSam3sZc1XW4UosnUWPXLESm6nJmrVpW9MX3wVyMbmt6gwuqgwhikVExKLqpG",
  "key6": "JZdGHYBmnp2MdZEjiUduBXrEib2SdtngWqmi5UTgogYKEQYzad2yiaEdWryjQfrLugpNW9MnCfEA6xoHnnRPXba",
  "key7": "4hZJMrpqMAhq9q9ZidmJzn5LAM77rSchoyUrCB9vtJ2q3GQMSvmiCpQWGPMPyXrHWzQ39bqEadiRXnL7QRgqHjXX",
  "key8": "5Uxo4dDVAk4CAsJQfZxLECS9qT4DdqJQs9maDYx7uNkuWkgQCdVuTBdnPDbFK1iG9q4QotkUmNQmmvRx3gsBGknc",
  "key9": "4DSg63X5DDEjPfyiWvu5qgiMiAqwZQ5ex1GLhw6XuMd9HR9jhiJSq3pwxyQpqMTTbxDfFdYcwJryQLknVbrJiJxe",
  "key10": "3iEUKMYR3Jj8CdTzKVTRyzFRL4oTb29VTxDfZecMo2KvwZexZMKJZDv1WepZr3g6y3HwDAXdnj8Xfs3kLgDzCNu6",
  "key11": "39NYP9mYJC6RgHrtY82q44fh7oMYYYWHnoZ3iHn2YtEda41KTzK6wwfXwME8VnbPakc8YCDPZNfqWq6csBN1hU3w",
  "key12": "4mW8ejcLbQtAPNJdEzvawv6W72aefEKDUFJm6y3v1FmQSEKFbWzaJS3ZufgHA2AuKfD7m6RHEnEMawUk2MBvUd8f",
  "key13": "2axcaA6okCZaBu7WeMjohpmrbgAQdkTc21rhiMQigTsLxXte2AuxMTimsbkM6DW5859SPFVZkoTa7iYCu5daGnAT",
  "key14": "2ouGHfM1cBpfesy7R7DanVrmuG3iVqtiAyrKU8MTu5G4JPJhScmPpZkMBg2sEnL5hY8fmc5UvLuhV8sVfvUwNKwk",
  "key15": "3UYr74wc6Si77RmmFeZXZPgCRSQMczY6vxTApqsfWryPfzVSdC7G7kPbM2q2btYZs5woyWh4cPupHtbqjmpDMYFg",
  "key16": "4393EwKfbSMRd9nHd6GK2rzqXhozS7rfgt7MVAfztNz8WhjkdRY3mAjFdC3yApvaY7Vri3jBoHtjM7mMLJsx9GY7",
  "key17": "3Gqaz97UG6TtfeMFpvuejduqu3cyyyYSG3cwqJUQprBaQRwHADjgCTZaQMw6pxASEwoXLEgDbsDCmvkkhmMxcdzK",
  "key18": "3xymDJfRWu6vrRimdkgQwg29ij7iCyE69UxubjWo52qjxz91orxFBbox6B3Xue59uTxVosXuSrvJis9zZuBNRNy2",
  "key19": "32aaMaBrjN1UC2VQXNmFZQT4H3qkLPEeZqvfheAvjiETNty5wrVEaydmN91v8PX2kSggsWpmtWkvgDnnK9QKqgaT",
  "key20": "2Yp5RvM8rn8as38QzTCb91YAm3k8GmgxBowmv46CMk5UbgeomkPsVTmxi2zxdXhTcbCJtvsAJB8m6k76Xv2mNwq8",
  "key21": "7NHPYedX5xkzJkPmhpyimspKJiJ9FJH1S2ifMYUFYua5QYx6ggYNnbsJaQ4XLkjNBK6ubGqeaEL6b797QJVnrnB",
  "key22": "5N32XQepxCbBJrTqnn7yLNn7MYKWZTyRAyeYaTZGETYhsMW6T8NFsXWHhd3W2sj1Lu3QkbAk3WMeHHXq6QyPWwjy",
  "key23": "4DgVtwz8yDQ8ZfmFpWWSwvWU3t6JVazbq9wxSx7RdYMKheryVDpHo4YAW33Z37PPfTg5ePcrQkVjgj8sMJ2HYVP6",
  "key24": "526thikRnFeNdrFqxp5XDtUhUudtXX22GCuBvVfiye1NxBZskefazK4Ug7AWDi6o3de53Qd87FfpUEND6qpMpLbH",
  "key25": "2REsuc1BBN4N7ugwiv1L1CwHZ8jCvPwmM9snCdbqMG1SJjBUiArC5GQpfXHECRUBsTkogYz2wbNerNh29zjeYf1d",
  "key26": "45ajapbib6vr8jVPMnejszBHJGe5eZ3hi58E2k1AtakDKBr77N13LbGavkgyFW92WXaVhXs8w7WgiHMjgUfS7wDE",
  "key27": "3mQ6ygZdGfC92XuDXzcVAP5GfWP3FmRGGRr11ES1KU9WB7ZqAoSmF41YJZvwLK2pDrkKVCWadz6M4Ga7CpbDgRUp",
  "key28": "5fQ1dvQruUNJc7h5MZ2NKoEnmkGxkiiaL4hgnDN2i1xT2V7ASnLsjtmhpVUf3BJ21kqFjz3SJcSJ174BqjtaMLDu",
  "key29": "2fABPac3TgweNrYv1YnDEroJAFqfrzgajt7i13VrRfp4xAx17TJZtchFDhAbrmeVFbvJ2arLQCDd3jG4Tk3Fcn4n",
  "key30": "XesaPRtQ197cfaqMZhCVe1jBJsRfUMY9UrXrmJ9HPeV4RukhKTtutUYQSJUeVtYoGQVRAugjqiSmVHVKKc71s6r",
  "key31": "2Cds1urw9zDSLNicQrorD1WmZnLxZNA5qpj651AUfdRQsefEMWGnxkh2JkCGHaYtphb9JWXFTtGmTjREDrN6koWj",
  "key32": "cBBaeV5d3p8n6CHdQBBoQqXFuyMJHJAHtrHMd1LC8gRsxyXw3ytXpQG65CnRuXCUTGTpcQetT3xef9MMF82ztoo",
  "key33": "52i8ZoLymiAZiVHjBHdrMCALrdyBkih5sGyz9v6tCgTz19JrVQsxyJ4jMKKmcN45onjZhAk8AUx1hi5AGKjUXeWj",
  "key34": "63ZxP3EDab993istvQShiJPAC6A33yySLUuMVJUSADMjKehMpf5nUNRpESbAjSo3abHz8yqbJgaDN7fLeA2f31YU",
  "key35": "4wWbZf9nbd711tphD5hvNwMovo1ebVQhCNtdQ7p5K958Lcj2xXH5AXVcaQpgTFvtCZm5wHCGLbzP5tj4wDcEDyEX",
  "key36": "3X4p4zPGTkSCyWEh7XwrchNqsMA7v8Kgnno9SYFCvXNM5JqkEDrFarsCTuswJwoBctwDpXfQpxLi1p2gtdz5oM4N",
  "key37": "Y8RkxrPRnov4g1MRzhC6GGY7tBQjCRzvYYG1nrRa9zHtgnhaEBv2hGXBHAWBo96dfnXGvtBWGaH6CriL95c3a8s",
  "key38": "3mH3saP1onmj4QU9LiPNPaCgz4HGdFLg26j9hEmqQGG1UBWgBRmZX3cRyv4vZu7JAP5Pyr6ki8fvM4XM4ks61JEj",
  "key39": "31E8kH4UX1u2xyE8JbPQF5Ga2AkAm7wzRGhmKcXAkweQQBdjupjVNnSmygUUaJ3k4dhNFgVip1cPxVHZdmq1pnkb",
  "key40": "3HyhfxF8QUL2DmBn3jEiRmQ1hz9iLWsVuA5QtWEpkDGQPwQrp3shfxs39yYKtDBUitgEmZN7UbTmoZtXzo14RG8n",
  "key41": "22r9XEn3CKN1cWyLdYkTnrMHR6z3oCbJB8Pfrsg1vnKJKuVAdhjoDAcFQDk6pwDvtk8nXEUtFg9bF7MhKZ9uxaLM",
  "key42": "4jpi9AiVU1wGXTQx7q2GfpBWnUEHpfJwx3kP9FWz462Gs2xoJKMcw2CBWxFNdk4pGYKbAyQhwCVbcBD4LNFyQHu7",
  "key43": "3d9FVmG4UZuHUqmNqvGEQx4M2JsmJazjyjcPB7DScFBhwrSt2rxoxRbgHwQNQsfGu6e8FFNHim5Y1LMdErCnpPUr",
  "key44": "7UGfGP8UCMTJqBxXkstkpNPoFRkyKpBwQzvbT5fvjUf5r9RyeyLBxzdNecJSPBSdBToH5MzJzGhAmsVNxpdvTem",
  "key45": "4WeN2crSVWNFpSoCVicPCJWwRT5ZbMjmWN2GPXWmQsMjD7ajpBZeayZ6Utgh76yAe1hzWvivdwbWXCjDrZTRmrbm",
  "key46": "4z2pgEZYCrpzffw7ibuAvaHZ4Ff1XwMniee22hNY6VMBWPeYZ9AFvdhJWw71SF1CeYgEXvr3vujJtrgWoioeizfq",
  "key47": "2WQ5sKgHU2T5JGfQwL7JtMv7UWLDL8JRjF1x5AERQSs8ZEqSzfuAVBjh56meg5CS2LnqfydCw1oxKSQnPtERvCW7",
  "key48": "5hcFtpedh28mPTnyw74xUxpLHeLWtq8mRp9LkE6LndifNaVoJvKkTWtyUeE7x1X6acTZnw6QEDi2zEgtzctWy7NC",
  "key49": "pDY5PxbAnZvbqADbwq6YkWeYLuhA2Nhy7KUH4qCnXf58SZZ8SbXoVSLfLyDZbFdQLtfFHHtviovFdcTteT6CKJq"
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
