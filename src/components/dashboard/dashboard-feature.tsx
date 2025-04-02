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
    "5ECMPkQYd5Ees62Uc7HqMBA9W4ZiXH38TYewQ7gs1psY3W4bpp7C5jxXygULc7SzBwnp2hY2LxLRkMjUhhJgQaWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqqCoZwduqjgMyNExdCayLJDJgC92pdBKsTi8jytjNJwnXbxLCoAr11DkN6KBDFg41aQ8gMnFdp6KcdZxeEZMk1",
  "key1": "28S6o5wLrBcXfckUWGWrcKZWvaKcCrvgMG1t2KmtCghX18q34LD7cM1sfyBNyRfRhn8we9D3oN9MYXh5itCvDzUf",
  "key2": "Ww2EB9fzd2SjZKbp3A4ZN1FoyF5ewY5UUEV2GKqEHsh4UcpfDwYsAaoLdpkwdwfPr1YQrtvrHcipqAvQ3cz7y8D",
  "key3": "4BkCGxMokp7sY2ACnHRxoh1enitvXDsDgWJaxCYkH3xhpC1M8PCMTgf1xcTCf3Gv536Qx7JxLi3jeDBH3CAhGAWs",
  "key4": "3MUmRftWn5ovBwDMiCWadBursPSDVQH8hpeWC6qZUyu4TVpiai18TmAKTLVDD1xBZMv559nRugMtGAk6HbgsFKmQ",
  "key5": "3pTRA1zNBR65Mv4acUpLSVuKqCLGvZ9CAxtj4eSr6uP1bMzjYm5FhEc4vWyFiiYM1m7AM1dfkRY5QfnXrjQuX15s",
  "key6": "3VC3aBbY6DPtoCPLsLKmDrfheDBdJam8cBoNXC5XpyiFaXygp4K9PehaGyLZdoKi3GTybRCoWfSD66a24hDuRNQ2",
  "key7": "N8mGNU6o2pYMLUqVm9HunJbfqKqVWeq8baHFVEkomN6wDSUeir28Z6VQjVfn8XNGDqM6tvpGcmZbx7Si7Rqs46J",
  "key8": "4T7oeCQcy9N6PhubuXg4q3L7HViMrdWtAjDA5bNFPeRWKWxsnj7yRH9MJkSRWFqeGddcGRRePwesau65N1YkpHVJ",
  "key9": "b7FCwnizdVRpTr6VGERkgoPVmRsn9nBbdLvLNaqAwUFBGwDiQJf7XxfzsJpmw2z7ckwBRVYXDc59Y1v3m61HvSJ",
  "key10": "41F5BNDpNwi86HLHCmgJWEznkqk2BcBXcn3jrSzDWWjM6bSHS9p3zZ8pDRoMLu4A6ojEM9834WFk4uBt7GNrnHFd",
  "key11": "4oUTXy5A5giGNcDvFedHgL9ZuPLgByqucHzPfLw6qvCas3rHJSJT6UR1HGzhiVYhfG6QKfYGjyYByokMrxP1a5yG",
  "key12": "61m7nHZi6EtiBjN2o7882mqJY4Mw493WRZeTFu74NLH8iSPJw6SLVRMm3GRRGELVqGcs5oAbRnnmv99sxujmqpjw",
  "key13": "3eNaFJ2Hbb5TEG6S3DZB3SB1GysdKbVqJExjA3vGJjzVvWXmLHcHrt6Ps3JxHesiU4p164ur6wFqbPGf3sGAFGA6",
  "key14": "67d9BQaB6SzvbFQxCQ2phJ8htCSyYs49yERqCG4rLGr3reVp4y7UekLSVd1LtsS2RwTnevECcvnRHywXf8FtLJwu",
  "key15": "3smYjtS7ud5hRnbuf7hD8PNbktFtC8pCFqdxvViVVQT9mwciVUjEexAFAhjTGW64PhtkRL6TyAS6FDqo6KKL7ac7",
  "key16": "Fhi1fTovhz3zTPCvU6n9SjYoPVdyBu4yGSUMzESpVQrVWH7TQ38jv1hhwZ3yGNKFsA9Uw79XiTd8YDQp3kixum6",
  "key17": "YJLiowSjzMug1XyFEXH31y2soWG8XjPdq7HS86AcHv4C1ELf9XpcAsWjm5bHN4Hv21yWjrGpzD6R9mCxVkbuyqc",
  "key18": "4iBb2bbi47UpDmh4hMUxfrcYz2LCb4yCRJ5HYatbiT1Qm3FXkW5C3ZSTVYKsypuMvUzUtikzQg2NKrTPrFrYJSg6",
  "key19": "jwUVA5T6joeCz7FijzmhtoKTzbvMZu1noQ48PA7c6D27rAdbqQqFB1XSqKHjQ8Ayhm7bTZWmagGuHPAaAhE9VEb",
  "key20": "4a1Bg83Tk5Q275EwRcSaPR5jncNHbrqSU6njZ95sS6h3rf533QVRAWikfgT5hRtzLaB5bAqPa8VtMcf7BMpAHovn",
  "key21": "82izv3HkSGS4vdqxiB5eM1CvJiH5b1mowjTUVw78gjRdbYUH1KTu9bx4T8yrnvvCAEMnvRc61ocsMTn1LJaWgmx",
  "key22": "4ktjXhNMV2bTFDpLdhNXiJDYZmSveACLbDpMjafHBTK6Cix5csHRtesqCyREAm7Du6yB31QiNPsatQFYLnS2gXXK",
  "key23": "319xEDiZLexdHfQ4cX1TMyg9GuNcSvxkTiMoGTNDFRktjhMTF79P3DZUXdKXnNJjKzq86V1m1PALSy4ASQ3L498a",
  "key24": "5QNJZ5emeTmVeoafVwpZrvDwfahxXXBDzUu7vDndAffHqQbYrFUNUNaYnnuivATvYgbL6A6gQrzHcQZiAL7mxHUw",
  "key25": "46p2oZPSC7HzrHXrxcZ1D9Gn8QoaYUewkpGHm9n6wL7PVekm7S9iKhU2ZB1TDYCy5oWno1JA8johJpeMo6wXnotk",
  "key26": "fwi1Qc9sGXkvm1MWob1raPk8F4htu83gDc24nmQG7vYGAFkkzDbxjSLaXFztvNU95gUvigrhskpb6AKQTvKtuBC",
  "key27": "22uaxHaAjzHeER6u4DEYn3p36uYLsngwsk8qNTtoWrgf9qj9thijRLR6izuFr9zngtyCCBr1SjikCamdg7d5yp8h",
  "key28": "4fVSnVXh5WfDL3qEFsGaB3dfmENWU9EuULnVMYpxd1mnAgZNrFm791mhrfKYHhVrAktC6kWnJRpSuF612Q7HJF55",
  "key29": "4mCF7xg2dmxgrT8d8yS19eFRhvZBYKNjzVLNe82z2f9AjFvwntTwxpSsy7Hv7LvfyaZDayrwaMvyaWjNYaMSUsDy",
  "key30": "nBKvsMvtYH1y2S7o8LKwV5jSyjg9WfZyMbkXzHsePqt9DfDeeH87kgLW3cz2Kq3hFbtcGkB9sj483EvUEu9x7zT",
  "key31": "2jaSTZWQzNZg8E79PbjtyhPniySQFjxgXzRt6y8uNZHiz7xuJGZWsFQbanmp5jgYnXE6zm3iynXpCr1x7tbALdsz"
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
