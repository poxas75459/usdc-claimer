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
    "3EuwWV7ysnoNijMZnVpYyMA1yZSYe4BjExb1KKXbegE8hy9FKEkKFRruKtpeaqnZSv2rqVHHwLgvfBYAKfmRSVW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPQMteVJj8XcTkf4Pzj2igHiGb1YxeSqFr2mVV71Vroj1KCarWSG93uPfYt7BcdDEVLiWiczeRUZPfD6PoapxwY",
  "key1": "4AcYPYZAfJcbaQd5Vs3iVvTYNuGABUmsux9uvbPVntWeMW7w6teTmbQcHprM3t9wAFE3N5N7KvKJENNXzq9bNDrv",
  "key2": "3keeAb1moa1eqr44XeWJ37jhBzVNNCyzHJobz7fXbZjPFhB3ejd3Z3jMEYC2LKmVYVrqVf9qgPResAWcB9wdJpra",
  "key3": "3rKXAG3h5XMSeKDA53DWrcjbw9Wa6DoKWhA9o1xLVokyWQUD4ejXsoPwuwJj65vgFcFQxS5vjCWTqnQnUvT5yf8G",
  "key4": "cB7RsNQBKJa23btuXEZwyKtapbZNKvBzuifxTYkixHnr2VFr1RrgykFoB4pMzLZZM7hoMts6xkrLczEAM3ci5hw",
  "key5": "4kWeLHNahQrhFmfw5yULBE3ApYS9Yvnkvwydc6YxGV9YfQecTBqYaugmBuEYAgYFQbXF8XmRo9jSeuT5R4pvMyZC",
  "key6": "2bSmwrQ1KKgx55tNPuxR62bM1q3Gp9fPw3rop1WoZnCpiWy75UpkxfUsG5nSGELtYQmdbjxPBAhHuReXiDAKPV7X",
  "key7": "2tSHAyXXsaviMCx2SDwdhnSUQKGoDLEymBQffaxAdQKEzQgdJP57h7tFghTGQGRAEG2fZxXu6zip7iBBiSFVWnZt",
  "key8": "eXeWSy9KixYwXzy3LuXMNut3TPBtV5TCGxNsuccLvZCcjkkmQ6xKXcwtMwzaiXfayq3vUYd6DPC5LphuZLGGAxH",
  "key9": "R9hwg6AZsufSJgfR9Mx8wtBGVCizGAJiaPEeGqrDC768vYo7BRvJgcxgNcWbSM9TN9y3jVhTPEdc26iyKFuUrW7",
  "key10": "59mXqEEvCVe551Hw23UZyXYgmXjoy5S2a1RvjWaUezXkWF7zxy3qfF14DFGsX9MpN64QjHPGeNStGvebv8rSWC8R",
  "key11": "3FMbSGjTo622cHoThyJRF2VdpfeAHRpordJqncz22QxWnhfFZJRQEPNibtwy2185fapy29x5EmVz1QWfdDGh3qct",
  "key12": "XbWRLWnts3MgT4iW9y5PBiq7xBCtjuFLETXibgJztQKYgBuYVugM61oMg8J7apX9yKLBdtdSBeVJDmSCBZRNJDY",
  "key13": "3ERCEkMfyW5zpftnc5D4kBy2MyLMqmsfYsLCPctyJcgCMckU5eDttDvvKByh5eghM6JcmhV8rKNNLyzAWyC71zJJ",
  "key14": "5Bir9jYMa8STYbQzcxqPNKuLf41BetsQYTpCF47C9A131tYpj835k9vr1PywgBjKCQ7rBSigE2auoTWA1XFgsg9v",
  "key15": "4U7T69dcdRkV2gWs9ToLNKuXitcHVseUGb3vuVdF7oxfTJaaeBiYVaLH1HMdqznvYtV9AUbQ4BDVi5AiRujLq2xB",
  "key16": "3nEBkDyigRewypyCmWJEVDW95oS1UW194eDmNoJSe2L2yfUQVUUTYHGJidTzrMiUxBUhG2WCQqErXaq3K5EQva1E",
  "key17": "5TdynMPqoVX9fgXVHiAMonSgv6niGfQBUfTLFFN8KR6HiGd1jUNg4Xnc7gB2pyg9kAApCj3vXRQY3yNe8qzHPSAA",
  "key18": "kSXaobhHVERmKDWy72o5iDedkkZXoASWbrbZNEqnNoc89pGjkgmzZXaRcYRezSFskcCNY4Pn5qnsXKznC2xCxu2",
  "key19": "4yPpfHYeRfY4Y8JiynVnEwDaX6wtHCeXTgt44bqER8izmbtguD2oZ2FRWGnTqB1cTHGpyPM36iRHDg6cKnGgcdoV",
  "key20": "EvVYsBzAyfeWxTonJLA49hxvbFB6hZPWNppRt6S1hETEBCqCikZJRwVfciPhJXwy9f7zPksdZjXaNTDqA35sw82",
  "key21": "3335tah7VGpqUycSy5KLr8wjkRmHsL3JGw5XZPmUB5jYA3X6FQtoudnTNXLTec75xitszfNbTGjxWt3ZfxTjRUJ5",
  "key22": "635QNShSacDAcE9h8zpe1S8QuLrVFr5MuP5WiofX7mSpnEKWhwFd4irBkYttbHgWeRBZZQwpDZLz4tXDkx7usgQd",
  "key23": "51P8BELhVzkggK1zztNTgDjqLkyDX2CU94sFabaSwcgePgggB6ZwptsN4B6iFpM8yf7hR2HXT1upYhvzKUHKcDTY",
  "key24": "3rtjZWmxyFFvQjG5si5vfkYEEfSeeadj6jXaBKZ3FVsbExwntuGBmyTpZPoLBhYP7Mevk9oEmFfpHgC8mEa1NtgC",
  "key25": "3yFBSi8k2botyyizLcuVPSWcr1BnU7NCmZgFPBJvkbBpnNkVDS1t9sKBayyMxrvJfNN9zG97tCiR3cvt72pjxLqb",
  "key26": "5MYmnEzrgbZyhCMVGLSykX1Z4Q4PaHaqxnifT6vALQBHAFnxcQuyQrjWgwSNAmczshaspQxPo5HH1KV6wZq2mkPF",
  "key27": "42mssMHbtBoPLFxF1oFqobapWGZDbNa1gCynUYQ7UVLjL7v55fKyPr1EbQoZpC3h3NAtwuUmUfRyqiVqj33FFfQg",
  "key28": "3cXrWVZKv8fgQAU3bRExVCV9uyJJ8rEAD8QH1ZqtvUevyGfRNRcmRNiG7hvPNKYktPuMvXsETMp6K59znJjT3XJA",
  "key29": "2gxJyy5HYuNYfaY21irFsDcSZfJjt71wHGhtZ9e3fhwZwqz7nhR4dwcRep7SgS2FZCwKaD1HxKWFrsvLCJA25yYB",
  "key30": "2nVkgMsT7XEyPpc48oUz86t7iTpFped56iYRpHAa1cGwZeREMDJ7cjSFrpgWQLET1X9YFThHR4mqHfj9rjL1AFjU"
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
