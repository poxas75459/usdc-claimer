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
    "5dFF9RZvFN5rwdqjas84MFToSm5b31htxzLyhP2rPXhtxBdvdDCZGfYWd7oB7cUhiAbHNUgGhp37StCfC7X28d9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35yePxBUXMrHYokWpun9Vu8zvBQ411WLzUw2Gfe9KnGfFiC8wSp1tNmZFRazW7qeHUNtjMa21ccUThAvq8XZVjrU",
  "key1": "5gon6Sngxy79q9o1hGnJdZ3ZuuWUhmJXCwPqyfYABGTgEknBWNuy9utwTcd5pQsZQEU2NfHi1UoEcQkEhzmLkBfN",
  "key2": "wL3oKFXWsFqykYgtvDDgSfSvuboG1vp8VPbgCYuqsdTxwkwGDmmgbJzenn5boKk74owgsAbbPN5WPhzgVVmt9hm",
  "key3": "56C9tFM23J23CWiHUzBVSY8AZyL4cKk89UXqy1Yo3cJuuaBjUUCNPPwo4vgBbbc6ZjZ8PdRFAtZunyNd3CFr99Wp",
  "key4": "ertLefatA8E2yJvTmNUo3KWjQ8GV64wXJAUvCi6m2Ny3ZxQDcdr1HFDpJz7UK1nme7bxrMRvv4Zjy2dimqi3nRK",
  "key5": "5LPzLvL2iFMYEVuAJ4dRXEYpGRw3YFh4ojSExdtqwP8HNVqGLUwbbybovSKJ8HDHePX276FzcBSKS1K5gy1y934G",
  "key6": "4eKJitRfxq6HW5pLNZnPuebhPUZcsk5Fv15xZP7LurortYNtL624C1V1MVGnYXCNn3ak2tv31D8Awy7CKZR1sHri",
  "key7": "4mta6fhzYYSRFBL4gNkgLYc72jYnMohAK9dh7vycW8dsEFFoCpfxakuHLxyjBQtwuZEXbVUYqR7nSx9t3nqhjcPX",
  "key8": "64x8GN3ost6HUbmuy8zRzEAvfhzPmv65KUhoCieDZRUAMdkEPPGW3UGwQddxe6feKjfREXm58xDZobxLAYw9TPJQ",
  "key9": "u1ye3KLQ7qxddtY7BfmbTHTFJ2tcTKr2Jz6hskDyeADR4a2xUpYHAXfQxJqfs83sNaGLJYhzb11RAD9oitvFHk6",
  "key10": "2qjQc59HyfC2qdyggKsL5aBH36RUCg6jrVpfZaR2z7pL2fGPDV42ia4dgV3gXZk3A5ahCCdiHsqeGpo7qJDG8gee",
  "key11": "5T5bJnRJfi9Yv9Z9tWWCTdJacruG9iR4m4er6NyhaKuH3XRbjxMmhqXCNXCfWQRi4infqT3DFpmhsagEDBFhU2jS",
  "key12": "2Y7L4ErVKn17WA1w3jayyvUf8iGSu8JbUpNoCWx5VdkpGgmMVLN2vBwBoE8ggkL67gNDCjYJoovD2KbZuPNF4REs",
  "key13": "2tDQNRKu6emnzMJEPFY9NSuKXYVPVMBoWgCDnsAYMEiPL1p7GhgFaB9vRGfBYm2V1cPPSBNwstfNJuwmkLkoC4aV",
  "key14": "2VnFJUjFWSSV3CAxFpjN7xkXnYpwsQvJ69bwbTPgeawUPxaWrhhgAbUmyGtZ2Y2y9vboLwU8rasiiNojMfoS7XA",
  "key15": "3h38yZFRAjeNggfpFfvQwYs3qTH9RdmBikh4knraw4VpgWazKgDQ9LexJYiSffRtnwPiJASyWmwXjd6fUBen8q7D",
  "key16": "3tAkQdgmQKoHqfgs6NYZjLPyKTWCBSLztkssHGzmqrGQtxGYMGc6Ujrvopi1FkeymGV2egNDxBsvdKYyZtPxGci9",
  "key17": "nN2DMm47Xvf2CjP5bKFaeT3vbvJ9BbL8K8uz3uF8ZH6GM7SiUhBWYKCnrjNmxqYiidqqEuCPhou73vwGuiym8zv",
  "key18": "48wbE1bER951E9ezv1WMc1PTu3iBekXffYK9vABJTGUrwXYMp9TCxmf63G8vzAFUkdA4FeiEMxSmWkor3J1Bpecq",
  "key19": "4m1teNPBtD8DxnHZuDQBu891FdvtNi76ZhdfHUfinAUktSEKwCvyjJkiTZTehMRENzGkqaocKXK57tE4921kcRyr",
  "key20": "3u8kYjLhQHEAJZCVwcDcgT57Ay3kWHZwnSp2LKtLBgjKMC2AEivjieyu6ioNBcJXJ26Ek5dGmK3mSP5v9oSBtoZv",
  "key21": "2rRHGANodmGNvWeA3utjEZsh639DnVBWSAeGtcSZqhxuNJgB7gERny5RT7J3k4dBE9FV1D4WUnuznGUKrdTz8D5e",
  "key22": "232sEUjH3dgSkMqXPKiA4uBJ7cUz3BKmQQveSvQArt9gNFQLspSPzaAQESiDhDHD1frSSWTvnyD5EkFd4VPZ9jSQ",
  "key23": "3RxU4QAiZsErRjpXi8BEpF9w5fR14ufHWvvdgwyxhPyR97JnYV88gmViJGAjMjHUo285Mery3oxuCJ1Mp3rJ9wwv",
  "key24": "22SEx4uYpQj6tFj2Vw22FLThLP4sXH721ugencmkYrnk7FHhCWx52BnEBcmgHRyWUegz9QhZvdMm1jyCvCjf7DwQ",
  "key25": "2WXtzyAwHyExeXmJz4bSzaWTXVZjbKkntNSpgZVxMc3WhLUaB7ojWoBNeC2H19WCpNYE5rPCkUAa388QCMycmAvT",
  "key26": "5AJeJHBKi4wvRxXtTZQXeqLBTZ9Qy77afiREUfz2bwJieMq1pPSW2cxC7mXbq5sQDaXeGBTqsXPPujsdWPdZxcxq",
  "key27": "3jHuV8zbV7VCTvwxND4wmiN3wH1vPNH1QXUK2QuyVBhgjCz8JQg5vFtaS5ijvtTgp3n1LeWtmJgYDJn2KgJh7u2y"
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
