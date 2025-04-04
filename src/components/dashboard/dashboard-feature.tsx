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
    "2XNsh74P8bouvYJSTxHLc4HfQTxaE5kN9JJKTuJwZnc4jAWANRRMUgT5wumCH9R2UxwuGPmambY2z3fkWfGTVRr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgEGrebppzYTyFFYyLuChgvdLjvak6aca6SYUBDBGtLWVzLw3H7CAsXYadywCHeUif8hRc72tvuoWDAr5eybVwr",
  "key1": "2YZHvGUiEozHGxedJKCfJidrWV7u5U9xsdmRWxvCfDz1jj3zDUNQjJTwkUvFrytGLpvbnKbj943xSiB5JPVKYQyf",
  "key2": "4hMAD8F5Go1bwXy6GFgqpqTwsqJyo8qfmPeeuh88tNVPNQcznic1KcUYscASoPv1rjGYPtzhs7F7NsvbtTVcqYyh",
  "key3": "7iTuKgSTUZiMMxA5EiUfWMFieTgkUyhecYxiVSRdWeoq8QoPVYrz9Q1ndhQgHzKVxQ7AvmYZ8QCoCo8xnHupHP6",
  "key4": "41vz36JddiPenMSWi6mpTBGmdDMHFP5WfADb1aSoTpnKdeHya7yYdQaLyQuKDj2xavJZuKwmqckczGwS2zLFdYtb",
  "key5": "QWzWcsqmV4tufoSkZd9dCKhuZZHSifaDbPHe7ayophsZ2zWVFjEABaXvNPnbbqGhsjk51K8CFvY4e7w7kdqnb7U",
  "key6": "4jV7gYZX5Uid1nMrMoBAH1472GfCumQUgg8FJft3Tz4PAyvSubuVhxinDufKFY99wX9skjuLfyuKLGqXtVFGFnFG",
  "key7": "45XDdhbC3JZGmV9TXGYtAQH1zdssuyiURzYRaaPB5prb81G4x1t2PEpBZaxtTPegmyGeRipwDhtBa2Af5L15hPQ5",
  "key8": "2qZg5GsEQR2L2mf8bT3w6ueLT8iy64kN228HvotYehrdttBYxDtaaSBuwPMTChbosjsNXLZA3iSrA9geYuHcxDXM",
  "key9": "2q6TGBEbjDDsSb6U7XMDMYNzmq7a8Ri1RcoKEf244cbXv3eqnRMdemGDDkEGtVTRaZcb82bhH9tTfJNedy4YpxVe",
  "key10": "hujVtDfqnWzM9mehyPxxNgUVQtCSakCMruZmCjNvBVCCQwtQPysbgd2NMLSsVWwnuYBs8mvHQxKrLhh7ZnqvH4H",
  "key11": "2PW3GeSwEtEcbHj89xvhxJYWDeDXaA5peZPFdt6orXQdewgfSqdwYf6Jmgg5eXtVt52HS12C6emiz1QjHbVJx6Yy",
  "key12": "3nXcFTgTyr4zmN1oXaf291SaVS8ijmto6g7VEbezw7TPaS1Vg1N4Mow8d7WUnhrYeqFQTF3vzyEybGTqVWeaxsby",
  "key13": "381dzKiZgSH17STU3cSpZC7RWCamPNmZJraXCTASSPfah6MxmoEgzY6bHPF21t9pFYapXiyLY98o3627B3T7yAg6",
  "key14": "58WBqzTgZxSktteKxhVoir2WF1rmHqshHmBuDtFccku4nYpmcwPUe3Ps3EFdBiHXbim59eDZgWibN5dh4Sp6gJFd",
  "key15": "5AyuXYX11kJGp4eHePTLpkPsKY67m4rQribaZzmqNb9XwWEYmDbM728n4JEV1xu1LAcetyvsMsPzg1JbP7q7SoGG",
  "key16": "3AY8ja25tyLgdi697PXBTosKkCC8Zs2xZptsaMTSBWshRcTnijrWwQupQ71Ro6WhSWzc1VCjsZHZGtmz1wkEEb4Z",
  "key17": "2NZP7w9qpAwgjQtSeu1aGpCCaMiu7oop7Q1rfpKSPenFYig8VTX56jRsyJEXgAVzM34ayzB7mEoGB1rKTB8pmunM",
  "key18": "XDc9jx1q8SUKmHY2pPA13uc22iH82DS3mtwwnCFng7cKKtmZkPf47LjdYNqNGwwStr228bcve54F3qDdh959HNz",
  "key19": "5hm9m3NKJGHUURwpf3YmqoisdBjojf4zNdCas28mA7sX9z544FjU7v7Kyd1opGQHZzRcz8qMdDGJYxEjw4WEaim4",
  "key20": "3kriTZFFK3aUDcyhHLj2JL3tBY5MFNdHePd4rHgwH6ggpaUVKNbTY6JYPHDFq69TsZxV6rbGFLuEAaPhzRunbK1T",
  "key21": "3ARnNCH4nqJ29fqw4NQaZ6Sq7rDc1p8pRVDaKWbw1n4dwjy6M2WfFqwm4asua22NCPq6MW6bdAdKzjwnDFJ7F2Jc",
  "key22": "4mQ91R34ZZHKxEpGRg69mGHSxAFyWYHQGJ4vRqUi5oyr7uL4YwMVQxrwbjgcn14fzBdCYWGDhR4RhyFuEYBV5ZMK",
  "key23": "4yGYEQhnUhuuu3ZQqcZeTRV9Q3DGKQoV2RC7Q4At3VZG3odtiQ9icbHKR8QG7gVqJrgtHKv1LCHhvuWYe6SATxRH",
  "key24": "saRZFmQtoU4Y5FqETgtV71jQrqd2bB35fCzX943H8xoKfBXuqxkBf57xVJZ29fSYpiA9vzmPwGNMMaBwHHooJ2B",
  "key25": "5zCTQ4RjzoFruGrSDiJTn3j9kWVCdYzCfuXUaVdFtXYcWGLqeYzQDyfXGXSkqJyfkar3jcocT8GhBE3iT4Snr4FH",
  "key26": "4Wu1RNRwcn7kruB53awEpbLLA7AU3QVq9aWK4pZz5dkhqJE5ST4HApzwaiEmGcqt8eZLJKXY4Lq1TmgEpKCnvBiC",
  "key27": "2Kma21v56BhokfMJCPtj4W9ryfwPVdCK1TTpKBqdNdu6vQrDiirAm8MrwMrJuj9iRLoJTDYYpewcJJyxAgfnKzrV",
  "key28": "Bg5yDPogYJXjkozUynMCnUQcWkekWAscvvb75gpzLJmpMqczJmXy2NEzfBn168QobbsMPEMagNZ3z4mxrqzXADT",
  "key29": "2nQBQ6Spr44m3qcTiBAUujyZjSxUJ3ErCoaTBCYCQyp1GXXwv1fPPxa3zWkeP1xL5qhRbYfqVUVKnS4ibfoxS7Nt",
  "key30": "Uh6hAufpMom9sRRinvVk5rytJPstzcvpUVDhonQ17QFPnQ8Z8NY5Y4gR2vnZdcDAq3uSfaUFJRBg9m4gw8zqzzn",
  "key31": "3CgCR73Ei9A66C854aQAwXd4571ShPTbwvtBhVzz57TFLt86uTPUAaJC5h241bBHVqCuvuTrf1JdboNuzubPUkPu",
  "key32": "5TSYxQ36HGXefJXXPVLvXPQcYLDHkjRQEsP7CYENZRRP9FUHxSHYJTDBC2D81TLAWpAKB3rjXodGkzXHzmRkhtwW",
  "key33": "Z8BJuoPJm2Qot5TdoGYgZqP5zdRjxVbPJ8x3sXy9vQ2HHP2xZv38rw9x8orGfS9sQvm7Uhq6HHtZZbziaKRKrQs",
  "key34": "2WUVQ1rygm8CATHSmMt16FAJzJaiUoPkqqGwQT3DBJ1xgn1akkPJda4UApQefKvCApw8mRXaeqqYoDy8CmYmWbiV",
  "key35": "2XneKVB8aeQAJuFLmVTbdQYzYFo59wyuNWiH9YPofijZm77x3NfxPUeBDfvQbipS3gDgAxUkP7ATWTDLcuMWCCF8",
  "key36": "4A6bAMSUpsaJrg4vibuPj9HEZp93fvw6B1aKV2xguNq9vwLoPTAYNWzTomdDGJPayk9UCxPCRmaJ8smKtfEmWQrD",
  "key37": "41sB1RyHRTjsYcDU1se6x84fp9ndgcFnX9vWEkLqdkG58M26oiuPpLsgRPytWRvVYdxCUyTTaV4TVD3Y8y763N7f",
  "key38": "3Ai7pu9Utpn7SUemR6tpfRSA4kZE6anwG1CDeeDrxVNwrsftx9CMNSxagBgtCBZkw3bQut3Qif3NXxBT34APaZKp",
  "key39": "3HP7qQzRkMMZ6nmUL2Zo85ZBTDf98Cr7p19CsEyxFSPoxf1BYKN9mYAiiW7zTk6qja8pGWMaE1jKTYtpH1afuzd6",
  "key40": "3WSX59ew4o12NS2MKktcvwK6CsemTmmDzswJPt4yb8MAFDCstJDnptX9A9AbLZ3ivt2pHdmtCv1PbjXaTf9MWDSi",
  "key41": "38XeBNAk8LmcPs3J8CV6FRNh4bW3RXTbfiG8YAoS5kZc7iyXXLP4EEQ84bNTo6Cg8Zs5DnSb3xUH8dyJc5qPDh6Y",
  "key42": "42MgXSS1WiRmAKwff3eh3wXAsqtWtPf4mwP2TFrfpzrSZECpigQKJEtPVtMZY2rFEdS2v1aQGH3Pd3jPiUyEbe3r",
  "key43": "61dcUU4SJpjNnyXiMcNtf9cBLiA22smtSFPuiTb2q8S9xTHijcxHwJ7idcwBuAPRHqwmN7b5dvEZRQ3qCLLX7Bvr",
  "key44": "2J76WnKKUhF6zMTK3KMLnYte8LR29iJcNfgMunP8RW87LwnkunCN5VM3pHHZsx64DVYGM2pe39RhECsgg5R6DPNw",
  "key45": "3CePXN2Sj2JQRW7MqF3dQqQMaiSyiSQt6zKegsDbmWVBv2rsQcb5Eu61oN7dx2e9uk1SVwoMKQCJZvcu29QNrXRC"
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
