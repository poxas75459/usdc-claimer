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
    "2T547cSap6Xe3sSUWdkwSpsASNGhnVCZJ6s4zdfPYYvuVdLmTndSGBPcWNwUPhxFhDCttziQ51zSLYq5fVho22X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJdBXrrXHpfv8s1AaKotz22p2SasTD1TL8Xy8DwLbsfkZZrviBSE7MPATyAu3NnC7nr2NoeCWMBR3b9vjBCMkNg",
  "key1": "5ryoLMmovSEgbNa3V21oAkGh4pVmwDS8QBSjVYE4csxb3GrmJMSp9aJAcEqDUcLL6VC3Eo5yfpcZ1qWkyfyBH1gN",
  "key2": "4fSZwAwa58X9h4d8huFRzaqDGU6khzdsA4xvpci2NbKNAgqC6QPNMp8h7wuBH5ZBP2tLK7HBmKevQUPfNcP3ieUM",
  "key3": "2Jp2dyXLYJjQptEpinBkWdHWUDRbkkdHvT5TUb8cv89szvSYMoHDfxPDA7H2J6YMFFBJgFRXDyBARGLpvQd8rUzq",
  "key4": "5H7RjUqrdsrZhdfShzBFggWwLhcC3cdxXs467jBrvh6w5776J462a5D7wu9A1AXzKtwohkq5aCQaW4vo4nf6xfnj",
  "key5": "CFF2jjnYNA8gxqS6XVtTQkgKrrFmQZbsmohG16HJceCgZT1njn27r5ed9LVtTW5fye3UeTZWaeWmDniLH5YUxMA",
  "key6": "2c8S5cZBmeYFh6kg2bHhmNgAibv6E39XYfghRJut4kfNaYZSLg1RV7JpQtPaBz7ziYKVz6rvknhWWN6RohkEUCFT",
  "key7": "3RoEtAaSWERqm93eW2eFZRSA4zZr9ijCqerKPyVw8PBDKysGCV1Q1GSfVpwKZE3miGgiW2uopWccxXcWa3zUs6Za",
  "key8": "47kZD61q46NyWfD85acT4L7nzJHEUXcGMSHR3kmdDqbRetRVyREME4bCk5t9pFwURr2gQX8ne9sjN8qtYH9Z9wKZ",
  "key9": "2YTNu7A244rpURhemiBTYarDpvrdk1vonMczhQDDMZvLg14bgrEsv8hLLUE8yyTD6TqxknGiUAGypmrReGwqrCM6",
  "key10": "3222uFzZsDsF2zYufNcEN6AaPrr65KJRYUirDGEqavE7pBKCdWAoqxaMuW1Yv9oXbJsDDsXKmCvuRE7oDc6ur6Ri",
  "key11": "5XNzqaqBGvtAiefWsHZ2fpJsMXgSj8Bw2YKpfi8ZGgoMeQek7CFyaFmmWiGP9YeGtkzoXk9LRckypVweuF2noLcy",
  "key12": "2yqQSDwpVm8nvPtfbpkMu38KnP36gZeiTryTBTDFXBXCQAvbWLVVihPUQ8sjRstVBJmMXSaNRVyQVmE2P6VymHbr",
  "key13": "5d3fHVzGEsfXvNZfMcxqk1KFGSDhmBm2j6dZEr4Z9pBuJDn39Evv7zy14ygN5NKimGdTCnSt1gpdfgtCBDTxoWjk",
  "key14": "35TSUMNssSSUwJPar81ntmgTfqi8XWRcSu4nWpn3HzPtRrt4umQMMw72QhGLv3hsLVRuCCJ2VjZEmqdWFak6u4W6",
  "key15": "5GiLcjrCfMYLLU2uWu2YCex9cWRqjndEgLRS5oSy2haN1kG3dcrtsee2SnCpK2JVk7YedNYdP64J1E7wcDue7mSD",
  "key16": "2MiN7XPMcvz9A23RxbKFqVcJ9pEFJw4JJZtaTF9b1wPL9UxFrmpoT6BMdneUhpNaAqXLdvsjLL6kT89pHAVzJVM2",
  "key17": "5u4mXtW6W2K3KFKQpkKN6xPsDbZpcd53Rf1mLZMt3VhhU6LrAJ5LSNmhSTA8hRnqYnhy5gQkURttFjjiemAvaMBf",
  "key18": "3BMZ4wmdV5Fq2NGCx4aJ8hFD1DmB8spFcWXfUNjbrjhYYSi12Jingq9GVBKVNh6DLN6prmQK1JgnjVDEgEPGaWkR",
  "key19": "re2MYR1ddb1NkcneA2xseA7sLDnF49qTckekftLJ1W2NeWD2yaGmxqRu3y3rWHfdDrH9irBSfoYBEYh8qQYnYPY",
  "key20": "59BcrwFA2PYBPoXzyXhq9cgcv7c3yHZfJ8wNk9Q3oSx1MZxBBKz9ayG7BK2JAs2aNUAjExAwM87cLdn2aGtMTTnx",
  "key21": "efvJtSkRDLp8hCzJMiba2Kgj6Hmc3zhrJjv8iGo1U9MWfTkgkgTpCjMsb4AMcxxeyZV9EzjN5FpGgCcij5NZ7QA",
  "key22": "4qgEtUB95rFE6nrAgeKY9BJxWDDeGcWmokAcMvA4dH6qudYj9SY1vrZqBy5VGCtZY2kSbogkMEPHTePuiUMSuCpk",
  "key23": "YUi6C1MDriHbZ9KzxB4uYKnqKjix4Li3kDt1xHCuCR2HWuH4MXM48NXwdNkNbserrUzda88SbBWaMyL7ZcDqHZa",
  "key24": "5v5funevHBbyt5t66DKRSYLWfKRePm8ZYYgJdJMLEcGbVmBFCDmNzhEmdwoENUP2gcMbgZWbKx7YWkLTonW8CVjL",
  "key25": "LxxZp4x9xnzEmCtPQKpjATcUAkSGm3poirtJKLdc6buyCa51T54rLpi42HBfn6KmdR9kjrrAMfPNCYD1s5W8hxi",
  "key26": "5EBkMgr2BJ8ZrMcqsX7GsBwL1369neK9ycnX6S1MErpGtMwUa5Bizv6DEKvgQEnCvgYLZoAsxs6TCvyMTUVUKMvZ"
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
