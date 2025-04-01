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
    "5GVpT4uqSqc6G1VHPyaUd6xGzAjpSvDqndQ6ZmRws2Bp5pJW9UNTudMtGbTUpQDDG9KiXUQuTBuAQAmWfBED6xJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kah3uXQAcTtcCyirK7fHLrFCT1X2VLcWZnyBUquuXRG5tALvc1hsEi2zwn2gPyBMt9Vg8xXB2dSyZSxC88yq8bQ",
  "key1": "4ViasPpxNnP1Dw9BinSkY9dt865WwsETc9ZcL9iEvpZZod5An39noNuK8x9EenPsgMoVjtcZgS4QkKFXhtP3ngto",
  "key2": "2M6BysNKkXgN81Yeov1PV5xRJtC6bGgJ72TGZKqN5nGWGc4KjqdY6oYWbBxqkqkCLnLdWGBYr2ckhu3ehGLeczKs",
  "key3": "Jz1bQBNaw3gmNFbvTGu7aw4smTwCzyjRtxcBeELbueUXMou5kJm6yDCGQ4QRSRMp7xM3JnkvxViwP2p8un1U6KM",
  "key4": "33mnsHdej2vJ2k6oiDxhWmWYcsuCDXz8rZX4o9wRWRJkySLKi8DdcGqVLBEQNaU3VAH7gfAU2uWnf55nf56qMDEx",
  "key5": "GSb2bMf6EhSWGFB22PmaRsNnfLqamdZsqJoKFjnd4wVsXfa8hBAQG2QxmJ8TyMLFAjvAzUo3dZKWmcir2oFPb7S",
  "key6": "4dsSrock1wse3ALxaamCJZoSpi2PoWDNAS9Jivk9BEjcPMui8jiGSKwJ6vhS437ZnoSC9vZjjw7MH2qLJm1KpUxg",
  "key7": "3Uz2KbYkLn4b9vRFujBWzpiivLkV9EGe5nkw2WKPCXcgiEGJrnezw19MdPxsXMz7WEDzVY2Tqog5PczZaDTmCdkU",
  "key8": "4ZvjaVoLtzbTJmNWBnLcHDzG1KtisRcdYXNB6JYVAFmh5n2THdunatZt18BHYhbjwsokLofNqLigqLYC5fiHd1cm",
  "key9": "2QccaCYsaSCQvKsoqektyrWUQCCWJQhJF8n9J1u25L3G4tBmCS8jcWTwMy71QoSwxixBN5L1EfyX6s1Hj44FjQtX",
  "key10": "SC4zmv44CUQSnGpqaZTbbXAuvnreeXpRTosu4ypoxP3w6wz3nsaVt8ceLee96QyehwMou4KRwSqumZo48qi2G1V",
  "key11": "5nMrpH8oWE4UPJSnjjUm1fKaEfVPhNQ9BisZLGJdjNYZQaA34gSRDiA3WZfJC48z8xok6gohmv8QbcrVLRNuoD1L",
  "key12": "2AT8NBnoLik7oaiEJcQuPb6ecjcCTmpWS7eACWorP7dpmSS4KdhfCTBgSWAz41EuXw74Emq5zgBBdTDW1PJTWegq",
  "key13": "35qM3HRGzh6S7Dif7CsKNE2nFb54mnQzRTt8JxKCLgP4ZD2egHHPcucpw2RvPnJP9fZJ7Ra8vHj88vbgiviRvzmy",
  "key14": "3vBDtA93NLuTjWagYoNbZeMDGsRqzTexuJVvEaEKiMfF28FkkS1fZUKUPkaaR3hewbF8C5GrpqKi18wFjiCdDC1M",
  "key15": "2vB9XRy9qGEC8fBgWAXWwjUQdBdBmX3LMUUSehx8Tt5SoHYYWwKRHgUb56tVP2AyKYjUHykAQyFtCAN5zrYo9y13",
  "key16": "4NvFi15Ns1SKZ8yGEbpupCnYRoroUmGZYLkAj22fCnpfGEByH8Xgt92QkNLdYYLgW5tmkezFZZJLoqPbTq8p8Fcs",
  "key17": "4X47rLZchYDNsgkkHj1LGbwmCphZb9BwZBr9mt7Z5cDYke9WpdF8VyjmkPXGrk26tsrRRdbjyuYuBohkiMTibajv",
  "key18": "2hfFqe1xaxK8FpPkjWqfrL2xMuA48Wr47UFuKiFGjVK34YoQgTbRMnAUJFeRx7ED5cvexwmbyKeC5QSQ73spHUyd",
  "key19": "2NRj6FBFGhbArCVVUJUmSGDVrkMHvohgmrcch2GhNd9o15co1e6t9Gp5Qe3hUbB3uPg4k75NTw8GnTxffYuMCDmi",
  "key20": "3pUUwhpZNNQd1Kk3cNVb77dfjFUbhqJhk3azatRTZ8SUV46oWz5ptaZvqJx6ew1rbNmJUEwmbeCGikphp1i73qhR",
  "key21": "2cpjp8V87MM6hTUxiNX3ExXaEyWijH6Yu7JWWPvdA2npkW8ynDKZJA75W5YNsGoeTjPe9bdr87ZoSYwWqQpNhf5L",
  "key22": "2MJszch6gkekvXXxTKNCPMrVTh2mdXA5V6XQYcqXDe7SgmJcF3LXL979VAx2KhZJSCngsHUg2PLRDtRvQc9ZaqfW",
  "key23": "5P18bPFQvzCcEUmxe2nDaNNELUQ7UA97QbXDA9mWBj7fijLcNMroLtavfj6fqJz7kvxQzaqehnwCv7NEb8oZvdg8",
  "key24": "3o2fH4vGKBKHSvfcDamaYdGz1GHEmvDmDL89PML17bBv3zhirs799L6zMFXVRw55kfkRTvitQbnemXGbVhMC5Ayo",
  "key25": "3rUUUX34jeS67mYxW8PC8DYzJgAwoQnSCeDw9xAFfP2M2nGmswmFonR1YG92SivCSseXfTg3p9XUGuNk92XKJJvU",
  "key26": "5oWqSw2Nst4sfdWXFQakX79BqMqAsKsvXctBAtUcv5miLWfpHnKPkspY2B65CQXVf4EUbHpvPtmTwKSj4VxvhvJh",
  "key27": "3LkPmYWNAfH3p3zozR5APPLb3wCg7yaZ4XC8qFzAQ69HmNWr113iE82zVMF92sH1q98TRpmaBYRapSgkquP75k2U",
  "key28": "zg6L5x8Pz6EAHvrv3aDPkyW4iJCBgC1u36S6qbTFwEM29jHQta6EehqCY8fiuMyETYEqMp4ZdyxFbSFw5QLTM2f",
  "key29": "4aCWCrzAz9bLHFN5qkgttfNErBxmxq6MwfgsFkdVsR8DTbVCzK1p7m4vRhkgXLQbNgjLgQrBNZryb8fHMyCg1QkN"
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
