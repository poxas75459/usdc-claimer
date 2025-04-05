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
    "36iiD9t457bGQRasHAX9RHDUFNXng7tJnZsAGFD66jbqCaDFwL8614Yu8YK6jQkvmaYVdiLCvxxsGgjRcp3oZKoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vMX1TYjDarJt4fyYofwCXXQGsM3ZEeNvb7DDQ5AR6dJKy25B1rezmvRgMo2rdX8nTWBjX13kQpJRDiMfpYmgFw1",
  "key1": "2cVvpa9PUX8dNHEE9zasKhxcqziuG3v5fNwKSvqq2f5t6ttpTn2uWmuL5V6sEex7wAYb5kWdnJq3M4TJKbWFHAfS",
  "key2": "2gwJ7qFCPxuJcwfTWxBEY7kuvxATY3Cz15pwwxPKM39JctUWUxdaopSGsnERGLVAzAPKbsqRtap5qLQJ6PZ62sVT",
  "key3": "bfZM7kMcWSKRNBpkLSKtYocdTJYpAyaCf4Nr15JxDcRUy33h8AkGivnRGreZe1hkD8iqdsVGhPPBVgm5zeogTr3",
  "key4": "33bn14ZQycK5yvGQRnFzdHQzrSuaR2aWADb2GrUEKkVt17vb5qW8Kr2KDQc1pxomkMwkT5kiaH8qmSbJaDggTHFA",
  "key5": "5RFxFVebuRW9wVF1cErYbtz3sVxUsV4NoCVnvD6b69N3wDAT2ZCREZsxFWKLNn8PEh1pr2LNtX1GRRsNFJRjV2SQ",
  "key6": "4EkCBV8zg7hvQ69asNkYq19SjHwfqNqJb9zMWztjosTfgXScGELRhCo91k5DLh7HJN1vaML7Ybt3fc1RfKgJrqR1",
  "key7": "gKpcdp764AuiBkLDi8kehNER3jqdwmP7QrsDuheCd4HxifHpKLP6sitAPgmBoFnTyTU6C3fWHN76JsuE36NgkjC",
  "key8": "36gdPUBnsR6KWwkr3c2Bn8b8XHZMayY2sHrNf9riggPJ3y2WpE5cPA8RjVgeT7hZ2Li8fKN6zrpX6QRzuhQtLenE",
  "key9": "2ugmqcMnMdyHHnEDGxQ6qBxMxmNG578GqtX77MpVeAYmEnfx2rtYSPAYpphhes4juDoWarZJbFg7U1721SCk81Ef",
  "key10": "44z1Y4L8xiUTN7fME2wfXA5TRbJbvXXBqD754ktapLr18m59gHKQqtBszZdTswzwZi8A8384qYBwr18UhcUFTaxC",
  "key11": "2iQc62kN6zjVhQWZUjCSD6DmtFPEERLseECf1xsy4X8aYkaVVPLDWCTpgyfK9dwDygZLTbFdS6mb88k6jtYD267V",
  "key12": "273NQ3kxAMHT1XbMkx87rPKpRpaHe3Qp3Uf5Dv693hpAeRugtbxgjoAjBkh1vLDzqmTTX7ZW8suLFgfVLQvrntHx",
  "key13": "5LdDM4e7RDE2Gd9RzDPcT44BpM9jcrAvrBySih3hJFNATt6pT4LciNiCT8UsxyiJ3t3P7h3Q4Rqfx7nbYi48tKRB",
  "key14": "6CuY41vxHbJJLjW12kmx9ji5peYs88aTkTV5ZBMEv2hwQnxPV7mModHR4gtTdjku4E9Qq4gJm8dJaZsUt7mxjdf",
  "key15": "3gvS1p339hesCCB24jfhqchJ2SGmDrpbQ8YnGeTFjujhVJZMx1at6g5EFAGdBr7XVNXpFpC3YSJMh8rF56TQ7UBU",
  "key16": "Nc3g9NSM5o8LciUy75DDqpQr9AFmWKRQg5yepvU1F8sQVdUXedvtzm15EjtBRf191AWJGGqNZnUzMcsaQFUVTQX",
  "key17": "2mqnQYjiUhGh8FnHCo94ZRYNp5Z7wNEX1PDuSagN42EVzGpAQeHVDDnN9dyXFnBwttjJk1FkL357a3VXxGupcG1w",
  "key18": "53pWeSDeBL2VzpMvfRb4Zrjoa94ShuJmpDSCBufvguExMCVhtVdwb7YxFPPCrBTqrUpnei1Ghf3BxfEp1xxJ67dA",
  "key19": "4fLEvzzMRoqmYX888NZUh7HAvYxLgzvmSMiVvrGeuPBVNDqaHsLMqRwBnX9Mu3uqX3Uydeq1453e98VhDEuLxrMR",
  "key20": "5a4GrniPXthuAvAd2tzPC4eb4rCj6WwgUqGWTE1usPSDGPNKbdry5jYEgx1e7DEt7Vif8swKeBHUqNfRWDh4hy4N",
  "key21": "LULiGcDwhHBEdjN8r5GT3mNGyZi67rgeuAnxReHyWtR8tnFbHJQLYBZwP5M6dQzxP2bzw2x2n5uVo8dricggivL",
  "key22": "2LmuQ25HxQZasSJHzGHakSj8WVYjZQsJ3WrvuAoniS7LL7yqRFdBzw9EXmgoXncdqxGHRadez7rggVSTABGtsmkX",
  "key23": "5odZAC46bBAhpeVPBPtWNnsPbznNCc2CRCkNv5QV3mbYEPoigZgdNkSFXkh4Q5RqdcxwmPaQcFTnaE5eQeyV8yEE",
  "key24": "3QWUvG62MhjuXS6Lp94PnPxZMwkNokHa8J4DcCG9t6aKSqx7bQGoSnVTkCpPz6yoHCWJ4vdNKXneiRHZADxaeWsz",
  "key25": "4Hnx26ST8v8LN4hTUEuLy7GdhZeB4cdQkxKGPwCrjxuYCpHDiLxdayKUaJR2NB8YhNTU7FVHmk2yN7tRUM9RoFiJ",
  "key26": "4M3mHLrcKFgs7zgFqCa7doQ9298AnYYjyAecTTrHXJ6w7a3b865MupRtv6SoW7EBgrMGq4bNb32BBtX9eYcbcDQp",
  "key27": "2jTiEvuDHm8ExYCAbNUJDb2mJKfzv3zy8qGctcZkyxBonut3don1zpBFBJBbrsKRkDjFT7zR7UEUUML6izEPbbTv",
  "key28": "5kQaucxDKUgRG21PKnWdGzW7enCBWjw3TfqHiqiJvZg6RGSq2DY9aSQvJHq5KyCzrbH8578udzSXT73ENuxUCHWb",
  "key29": "2wxPHBtqyfa6fxEsvKVxaSxoYvsgJ3sB89QqWBhKkzP8345wnUnRwWP149oMByCPQC2EDYBAMC1geLxuPpy528er",
  "key30": "4Kd4qps1PxCcVPr4LDrXENu2Csro6cMfdKaHeCRhKjpkB7R7opxyaXVi5xtifuTv41y6JAy777is1KQsg78sVUMa",
  "key31": "2vV2DfTgbRDdwNVpSoxiXXDg1z48SxzbG4dDTV8WfYLSJdzqoph8v2z2vX8gvRoAAd7uGC4fFhiP9TT48PW61tmL",
  "key32": "4U3zWB5syLoCzxrYvV45Vbb6LmyHeqpeY4DT2xuwsieUwhjgkGYfib5jZ7Dhnikp86L37DDgjbxh16PZNUX3NTBB",
  "key33": "5ZvNWDdmmdbxAmxzbdo1MK2yrZt7bKo7Cr1wv2JRoSyt7zWBcfaS8rnAKDL3r26DK7222bYK4htTDkA8yxzPM3U2",
  "key34": "5oHG98yaqxG7V3BtBrR9NVvCyu7MXJkiWeH42pdQoM46Mod8dfimJWbozfNAxDpBATg53a4mNZbACWcfiVyNgCAD",
  "key35": "4rKTWrjn2Fhn48Xn1ckekkyNUQNPDAEzV4Hbph98SdG91rrjvooW8wUXqPDB5QP37QMrt9j1yj89Jmr4KPVkvu3f",
  "key36": "3okpAbic8Y2VMtdSUr366bFnQtTz8AZECuoGxab5JDQKDVndSroPLzRwxZYJwMTjwhRXTLe5yw6Co92AXFzRRXtH",
  "key37": "gYvGa4dPvpKY5SgJGeDUAafRGQVjn44B4Vp9zxNdDq41WruS3DTSPTJdk3rYxTMz4pHBzxP4dpA8StYFSbpXKNs",
  "key38": "3PKFyVaiFENNX8uLkeqJ3NcGXoNtyEPjvuTZ8QQUFBBAHcqqm7rZF8yaarSfERKYJJqqpCGD6hLLcBKJ2RoAAcKU",
  "key39": "MafQ19kWR5MeMchxydyupLu7kriup8mTNhZ1eimuXCAkXNUqhjyrQ7iXkcV5JNqjUmx6PEt1n8mUBoNgGozazpH",
  "key40": "MrYqXtGZRdBbf6SjwWZDH4KY5GexLthjkZKtCtk6CWL7nAC2dJ8XcDbsADM529Yz3HyKrqt6BAnYyBm1SyQvSE3",
  "key41": "4mVZ5hbWB1h3Fxoqc9TpgsUMccdM37HTb1em8LxmwUabU3tCJYv7mUZeuC65bUmhrwMcnWkiNwyZYXirWKR2VcJi",
  "key42": "3scjEMU4SgcEo8gxYe7Q5en1ntqp3gmkfqZLUT8H1dKtjotsZipGBvt5iMCs4w8x9DdvtDXaMkadRyLybSnCUco2",
  "key43": "35Pb1MeXxHYcxjFBNnqzFS5QJvhizP41McsEJxLPYGWowJogALWW5mP8mFWUsaPExy8L68inu1akyBr3sD4t46S",
  "key44": "3yxXNeVemS1C2i8AhDmwrasE3fdQoWTGFbSjGuGasc9zhtJCaMepEmpiiMgsRWP2fPwLenz3JbKuNX7NPQNP6wui"
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
