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
    "4hPNhS5CeqUNgxpshLw23KDRA7UiYeyzJeiSrnuVLiEK1soaVhDfhziaSCgtcBDPxtKBbtxPsjL59dG1zLMd9pMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ojW7Bnu7qXxzyWMDAJTivWBkpSF1uAbGNpgMa5tFGifVvtiAS1Qv2uKSTukvxhwqZf5UetKkyYxgaHFVMYviv4C",
  "key1": "37YmaMEmTqw8iUY3yFy27vHJqy1RmyLGgsxutn8McD87YGLcX2LytW6xp5dfp3DKQA88gyDfU7xDMdZN7CYWhbMB",
  "key2": "39uWqEm44JCuDxvw3p5pyZ9WXzm1j6KPCdW3FeVbBjpjNcnhWayre2qchKaNpStzRLCEmyCS9PHBDr9xyc3dcgpp",
  "key3": "5JbUV3JEPcFkuVhsNvEwxyCMUpqmkcQCWjv5vhTe8BGpheAL6uTgsQUTNMx7e73UvM1qZjqaPhNLHyW6FjssfitB",
  "key4": "ox2avqHMe3oJVWha15MPPChQay2TipV6yEPUxKCk4DMwaFS8gJdVgzUkQg48ZS63AUKauuhdwB4sj2dXSfhGRdr",
  "key5": "5DEqmJTWK5LNZLwfranVdX9K9RDVAU8igmamqTbvf7WTgX8QDDT9C67oMtJo7g1SqUfUkWBTxbz6XmkpNZVAfK7m",
  "key6": "TT79vN2gaEj7kmSAu3gpWb7exZKhCaCHDaWC6XFBtwbfpj7H2HDyikdoZLTti2WRVDdidEyWjmXE8qufR6MnyuE",
  "key7": "5pkaLXmqJ1d9JwddUdRnQ6kY5RrRTuB2Huej652Eoc3tfAPK2nNzMZdatqbMbrTgrrcSTyXz6BFa7t8kYWep1J6P",
  "key8": "4GoakPf7KoCsa1ZeeGWQ7kSSwiPUqbDJGp2fFGNMg7ZGMB33VMkPUJUV7bFS5cujnrhqc2JC15YckZcx4eHgdkxq",
  "key9": "4GTYRGfVcCdG4fcadeHrgi9dvxGaDv6ChVSd1aTVVfArMx6vco41untFuvXjJLRqQP35CjqWXNrqtfjkcYNoWNQi",
  "key10": "2ui23APKLWnwoN4TzLAY3mjR56DgCgzGfvv2EgBoHFJ27yHmqXrhAMnGVRLeXgsmDdsvA4HpF3TQC8akgiL689DD",
  "key11": "22kxqKBPzUo5wPpYXV5QxJKPakqNhXECJZ1B5myFGmD6Dcqq3TEmFou5tVB2BUFLr6svkqZ5F2znNVqTk4wcm6U8",
  "key12": "NVv8LZfxRoYDxgTgdefjSp73KfwKtCkvZARTFjg6nwweU7cucQCFKeZ9ZuskrnvFELgyNfkzU5JRLJ2tAS4Mepi",
  "key13": "2jXedwwpDDAmaHaduBGQKYhRck36GG2DPiid2mG5oQEPBjNaYy9wG2GKTNVt4uPkqWCAYgbcTrsnmuA1Bjq6pfUi",
  "key14": "31vPJiY9DL6SCKmVQmEZLKBmGG7jLYCFj8FGr4U8ubQshjPsDstAwGgQgo4WPmezivL9YjsMefGrV9E1fWheKyNj",
  "key15": "2oNAXXkF1YPn5vbQZcpfM5pt1xF3CUP3vC5GtGPYY8Q1AiKbWT1BfMHNc4yCn5WaB1H2rwq3W2DJpfjam9B6isik",
  "key16": "55vTTqXXHRBU6M3Km1NacJy5V12tRsH7dpgibhjNSQRCVKYwV4ZMJ2oWdav3Jud9U2u9M7QZjTs8ZgmheSSvqP2w",
  "key17": "3cUjzhyHrK5mLS58R7aE2yz2ddr9mrVXgwvRFsVVtrtGH8joAGSuje6TPLc9vA55tdeNTRmrPqNoXuGj2KybvUW5",
  "key18": "4vw4STfSShy7SdsVamopBJ83bR52GwibiussutYpa64LR89YXsiJBMMw6fYiEsA6NVf2JaB8TCbfxcYYbTE9ytTu",
  "key19": "5cCS95qfqz4FxihLTHR3hHJT7oeaqPuMtDbt5ABTncgCfgsnG2LYKcjMEsyZmNT7MsVP2MENsV1SHmrttApqKQEP",
  "key20": "2YqCkSCHSTKj1HYXd3LMrJZ7LHWAmekZSwJGXPzXjJ6nqJYrcF5LQbc2c355GmXyvLUB6yuQMznthga6TiUFfzE1",
  "key21": "2pmcvxFd5V2G2VdmYT1CnSGXMYEwuqdZvQPMgMywEw8QFnTgAMNdts5Vzwv3WcNYcqwaFAj5YPi41fwZYaCZignD",
  "key22": "4DZYLqR851c5hbyR22sex2keeSN2UGYYUQKc7BFoHCmvU8bVCcreXbMYPhy3uzGAeju7fLTGofxPo95GTH1U1Eyh",
  "key23": "4aGkpjdoCynuoD7T2nGN3sjdDEkwWpCtEBoiDpnZDvWuZN14wYBaRfF68iqSved2LE2rFvSDMWytYpHFmhpQduym",
  "key24": "CCJ17mzEMydPpaZZ8TMQaJPnxHWKPLdkYWj46v8sqoDDpmAr8puSfhpQ2AxZk9Dnzd3ev7iMN7ADuctpU9VLSdv",
  "key25": "3qtq5Xr6z3GntyWmJQW7vbuGf5pH8ftTbnQLEkkP5bJ9J8nHwP4Zax4XQQrGczqcfD5JyX1bLfRzxvJHUHBdteb4",
  "key26": "5fRfkZTtUrUxpGKS2Kutr4wwfaXQTTyneQW18JkgFpf5N9EufySnxjXYxi89XWDhzETTcpNEsuh7dm1VCLXH1WKL",
  "key27": "ycVvWRdKbw9FPehb8rr686XEQ1TxWNsrW3y4TYoz6cUneswMzQ9FfTHdFn85wBaPjRtdMCzRXnjLZkza4a23Ngx",
  "key28": "5HjucFfw57zM1dPyLUisd5d8eKwsRsi7DHsWg7RzEhtmzrHvAjB7ihEH6YbHC6V44SWNDX1WQsXcJm17fqZgCxec",
  "key29": "5uVmxH1zoG1oHRYqBd78V5k3JxbihPSZ3TsewJdvwBLtuyPZNLmFpTtTA42BdZqt5mGRToiaoj9jSwqi9Xi3Nst1",
  "key30": "4SwnagPyF8vUMEAst6h6E2sjrFY1fiNiiuqt3F9Abr4qrH4528FZugFnZAeSZXrtJ8rqnCmSihWquwZVHTLuMkSJ",
  "key31": "4cYU42E9vRms2q2g2X7nvy8Y5k5c9yiGGpedC1ENXKzDHvQMbJswKKJ8529xqQuF1u7C4hiBoyjqj4Zybs8Yu4sW",
  "key32": "5SePG1gPktW5wsfJY26Tmb1vTY8b13ob9w2X6NEELjg6VaHLFx9gaeWiocgnziaKdssARy736Up6S4fmJgSRQzQS",
  "key33": "3NW6GS46CPDWusm7o3oTaYjSd93Ppsv8W9b65U1abykUEoamMVWFgiuPmaP3Tnf48CsA8YCrph7UqrHkHjautAoW",
  "key34": "5ACZt48L1Q9Z4H3nu31xaWAr1BWTCyAkqGsNuyFkgSFM1EQomGsyzUsWveEDQTEPgeX1a6ZYGugMbBiLbNEtjWwt",
  "key35": "3wpGP97JRiwBTaMLDNcRtNZTiqg1HigmK36r3i5FfX188f8Ls7G2zhXoDUQBe5VadEgKDq4C11MqonKeJirW4RZW",
  "key36": "qgxfkccQazZEGmezLxuSZaujaAanFo6vWSqm7W6bLeg2BRBTFotJKgZRkMUE8vZgtoH5ddN73wcW3ebv5w5gdZG",
  "key37": "5JJQSVi3tT9YKi8mDMZxomqNqYnyjgURNN2b5CtgjGQ6C7mqS8fiaUuxFHs8dEnNUQcv5DrG4Vrs4DnexjHoDDP4"
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
