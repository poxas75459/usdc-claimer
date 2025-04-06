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
    "5R8PNFcVHB47bDxuAydnw9bAXbr5UabdurERdhimu5azjLRfeCycujZCkfZZ1XTGhfWp9kR8dJvCuEDN4itCvZZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5np64fo6adbzsf5xBbjE1AxZBa7ZXyZ9Y99zxnmSxtDQrZCukmAb5pxS6NDMwPxxPoqyM25s6BHxqWKb9tDvNUgn",
  "key1": "5L67Eqr8g2xKSPfCQzjBVsfsHrKBA9kjzFpk2PpcWbG4ZXFed2qc5Vrf2Wu5c6ctzfNqZqaaPVcmdZWf4Y7hFem3",
  "key2": "67aJH6rRYffXZ324fviLTxmD7YXBHRPQeEdTSgp1EnFdc5wXmzx7daoy8T8siHtxyZDbeDopZ4FVKCUqvJa1YmoH",
  "key3": "3Jmn9xmy4UsKMhBjmBBGTXrqvikGDCsSrfg3YXjgS4NUqVgvCuzSTYmP1XwoxW2ePnYcZP1M7Huen3vSt27AGG8b",
  "key4": "324PXAGBQVh565KcZFu3fQt2YQXat7ofQeedTYNFTQwyjK393wjWZRx8HV3o2nDSPxyC335pr6V1GAY5RYpwarii",
  "key5": "21RS3hiM86FPj1keoVEF67ZjEUEWw9sXQxFj4VCBfxRnw7Bmu1q1tDfZMvqjBokx2LKo43jG7DGyBMJGkFMnRBcK",
  "key6": "3ANydr3L74Emnsroy8UY78HrqgjuzPcUiAoKBWJvRuWrheYcv39rwHdPZbMroHnNpqBLKn5sDLC9zHCF588a2Z3X",
  "key7": "3KdewqwiChftxiwWJ2mpkB6wcpCPvGKLjswhsqpGJkiA7jWRJf9sGjski9AvATkFYS34rVKRW7tVAgnzruw3A5dg",
  "key8": "4brywBPxR3hUhaMZRXp25M3haAKxwSFa9FM8cqBYRDKjexZ8zp63XAyedY7CNzyZ7FAJPdNc1sLTVQBFENNFJpf4",
  "key9": "23b94aazxC291Hd3FxTeJBFSrqKWKpNuEjATG1knim58xxY49ReJqu55X2semdJP2YxpVzSwmACYroLippM1ZWue",
  "key10": "V7s1dy3o4poskK8BgEHkpXSVRauvJZ5AYnrEmB9NL4A1y9C6bmiZjhUg8spLi56nCRkfuQ7CSUfwKemoUxhCYd1",
  "key11": "2nFN5ypqimKo1kYkAcYHuwU3ePi4ob6CzC8Sj2bowtZcjS4jnfqdRkbXwt7niHdKv4wjrjgGom9nJyC9ptAo769y",
  "key12": "25cF2ZBXPxpYvvk2G4DFf6QJc9G62rjPSocibzQxK5ec6PatANzrLuMdByEvQy5mmvGrSBn2bia8cxgmre4FLgcp",
  "key13": "GT62Ep7dMuEpJLstsuWtWmRFEGTGUwCDnLLbxPHTi4tXP819NBEgGKpSZ9FjBYCTjvTFkzfpsK6ki83Fm7RhTmZ",
  "key14": "2UbqfLpN5aLFP9XvythysQYWSzegWYD37kgeww377kn1PJEo9C3X6UhHHKAjBmvWA15FZe4mumX74cKrAp7UtHAE",
  "key15": "2jVNLBhKA9W8aSzmCEJnfpKLKEt21c73tT3qRZmyebJXGEMfEowyCrR83As4mEwmnfMugoHoUuDHNSM31CbBk3uH",
  "key16": "iwBSxodK3jGdhWcPDRq9hkFqQWyxTeNMVosAqQ2vvGMhZuuiLKtWNKuKPp8XRFKP94kSAQugzd9PM3WVFvximRi",
  "key17": "29p3S7brN6vBD4YaNsuQLZTEVmwew6onjqY2mKwSYXf1h7cer4oqpTEukPdp9h5cZd1LKF5UNG9Yf8nompMkguEo",
  "key18": "34kzW67eQG9avSqF1vvfD3CEFWFWaWSrscDXjvdjVf3R8bnx2jJsxmoNvQvZjde6bC4fxRbwxsnn7tsFtd8eumst",
  "key19": "3P5vBMVQZcVgzpUwTWZvxXo5rJeqQ3npxkkDbBPgz9rqUhqYL36MGoPQUDUbbFPSr6mRJJSa9XGHUsCvYEmP7TU6",
  "key20": "5XPfu8fUbb8XttdfwqXj4aDTBAgcwv6Cjpt36C7Py9Ss5XA9eJYVQpT79ypXxwZVYHoVX5qyjD3FKHUfZJDBoX2j",
  "key21": "4vH1xyNgWNgukqtH7Z1Lqxjfoxy55Z1e3ksFek4Qb2wn7PB7Vcw8kZ6S8944Jad4XkJRjZPea68GndfbaDoervZu",
  "key22": "krBTaL9vxA3vSe4ZrXHr12yjxDGXDiwF5AszfVEQV3FubEhQNmEZTfmjwpLxKZTHX9NVD4SEuKLwcTdKAMP4qky",
  "key23": "4ob533Cjevihsz3rR9Kr32S2TQwRtZ1ctPMzcycENuBboPVXBqk7LcYDtY8bUghwWacvbGCLx5SmzJTB3UA1mmEW",
  "key24": "2cjhZru7j75PMTqg5jP4N64LDEszHfGUhe7gQrkGVv6QTtisKJBMeNaYen6gPYLRDwzyyfcGkbjew3oiP8o9szCz",
  "key25": "3Lp9oCFMcaGxTHQDoVFhBfvwTivgTynZNgBXyZz3SdS3DZWeB4c3K2MNq1ZwErbiXwm2b3UtFLx1rQP4CuDUZ82L",
  "key26": "5Hsw9DTBeZspcRXSdSajWCLykTndHLVHocbHkSypAZhPZmSvgRcVC3Ljw1SSLDdamSncc85EBuvgsxbkEVHaVoTt",
  "key27": "5M3Bu1AuCcjH76PbPuzKDsVJzrLyaRd7PPXgVoPzR6ausGVGSsGwEmeBe24sMe4rfsVAwHJjovWQfV3zph3CSLYa",
  "key28": "5r2P2JBbp4tV8SbchHwpDKKx6my5VHrJTMg69MCsunnq83yKZxGexngHzvEFygrJKqA6WXLMufaZxJfhVrA9E3Jx",
  "key29": "46PVLCoc3ybMx18qzT8MVXU53PQ6YyTQZdXPwmtqzd2KLipW4r2Dx7F41fHhMFaMCqCGCenzSzUaMSgZu7UgHKsc",
  "key30": "29kzRMkKp2ggj2hoeDb213ZD14QdBqCYfCg4CfwmYFXMNtZeuZq3B3tzJfKiWuPLMLxNUsuw1F6CzSxSxVq317JE",
  "key31": "42rhAgcNYXpk3iCVESKLLeNMW4R9YVxjUt93zWA9xvUUErcWUixuw5aYyRCePdSdVie4zPN9rB5SAmAh8bEgLmB",
  "key32": "55u4VTxMod91QDg346ZCaT535xYAHE6Prov83U8YDiV8w593dSAFMYLSLzCjJhC12LnAXTiFxoYcavMxrhdnYUkn",
  "key33": "DmHNDDn1LAQZdNotfdVQVwJp6d2rn1u7xGKbuuuTVuhxiP2zK3zH3iXo9GGbfzUn9MCeqtoMSw9iSVR1XR9rqcL",
  "key34": "xno4Pv6WQnAGjLkn7jnoeadmjXgxsQqmbsw3Mdch425tAcutgit7oZypZFq54NB3vHfcs38SFSfyw8JMLPcX5U1",
  "key35": "FwKZJnGek3tSff4ehggQnaHF26aHhurhqGirervc5jhhdze17DXk3mvSxNDoxPzHUEeuEvT3dgJFt7vAZNt1okr",
  "key36": "37B8iqdsfb3HUXGCwd4zXtSxH3cwbFUXkJ7PphazWKhU4n3ampnZ58UbpjzgCL2gipKhKyevTUDQ1WtjyeXxSigk",
  "key37": "2cqEg7LwuvDdywbuU5dR8nhe37z1LENxEeXvfxfJMiCdpz6XZdy9B15jgzp2pyNPiaQZaBGQNoxuk591dm6zfTb3",
  "key38": "24RHoSE1TnbyHaTXtMUwzm4HLRFQTfqNumyFsxDnqnSURH6Qgqq9UscPrNB1xrYnJNxorjYkEhAidDvjwVJVicRw",
  "key39": "51BTzGbb4B1kfENWeccmoMcx4vYEmhto3PDpRMx9mT5RvhE8TZ6RsEha9RsayYnPtLDxh4qBECsghrsxscRtTPwA",
  "key40": "5pn2T4nsnNM2yPgffWQ2DiXzeuNgc2NF6XVZB7hvjxYVASpoR6XmjAoUXqHJFXieMK2eL3xEa1QHdcLWaiVA1Mqy"
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
