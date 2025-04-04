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
    "dVUJeEtZAmU3z1u8cxfkhgsfJd714pZRrztCvnWTJ3fH5ugA2n5jmhxurAj83RHdm65v26dnp9gME8JihknKdTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNedNLfMKeLHqnJafDuw6cpartzjq62bu9ciMKVdavECmt5CmNd8kRwwRFuXVw8MPbY8tR1njnby5B2kyBpTTTm",
  "key1": "5K3Kgf7re3g29kms2JNUAwU2Lza7kCYf85tCvdAwsSHzVk46cHyrSRp1usjUDHfJQDM4GpyTDva61UPvra1BkzH3",
  "key2": "3J93faTXE9CMSPQxFx9qsHWEHSwQ2HEvVpP5dw6KGNBd3bKwq4vxsaa4tPt9iagQYUQXiizSJYVZ2hmGXePgGUGj",
  "key3": "AiR2AtC8LcxeEKCJGxmCxZHuDzS5eEL22e2aHXgARvH7biyYWqfpv1VNtRTTqspV5HZTigDABj7PatEnHRgQ2zD",
  "key4": "58293eunu7fPNnghAREGBZ5g8jADyD9oXgYohDjHHn2nqkeqp7HqTMnSQGj9RS2XXTny3zg263HLSYKznFQjFMXS",
  "key5": "3Kk1md3fDxCRmw9Wn2RzuCJEHZzZenmdxXbWru9rn7zErbrCwnqW2URoKCKnVvh26eq3nLvdAKSyLVsJByndSTe9",
  "key6": "3kFqRRFMfucWW6hxiWFHjLGaJsqA2KVm6a6qhojZKF2LpTbihSZ9CCZRFHF4nLn8ifndzaZ8xZmaRYA92iB1fNmT",
  "key7": "2Q3xVaA38kN1Msj6du6MTAz8kCLDy5PamPa8LNiBcfnBy7kPMdLVbnsgN1cyMZdrSakSvcqmknnwjLnVDeAu6Jak",
  "key8": "47zCgBz5owBRGGNDSxEdJDc3T9ZzEjQ2nHWafQ27VBg2gD3aygQGXLVswRocoHQCD34zygeH6s2NojBs9kmkiyrS",
  "key9": "3rYsVbbbMWVibdWURSGgPAVgZEyt3AdVZ2GWAtvdDBMKvx5afNTo3reZhZrwE5yRXMDdH8Znp9ag6BvB8Gi8Lrid",
  "key10": "qnAnRLT8RVWcnCQkfk2MDiP9MN5kvkW2wC2fFbujuBLU2rKoJX16gv82EXoEgd3Kx22xPEFPU9WzTWThpkTSMAZ",
  "key11": "5dBTdYtJDVRX2hLAunw5psYMqEQ3ShsQqJJwh8kYiZaKAYPUhPqmFyT4BzYFxtcHtdZbFWwUxTgQ2pp2fKsySjBz",
  "key12": "2HbHL1p5EbiHNPuFzuae3qsWo6pdD7Vssc9Lox25VEKv1k6YzurKDktK5u43mhx92qzNJLLHUPkb3tUYvQV532ny",
  "key13": "5T9rGUZsb6T5geyyqqS5JG5BZbtBpVwnkZQCcwyM9m75CN4UdLsFgVy5FAWy6NCHhW6UAoQaciMkGuBqRyGBgd2a",
  "key14": "3MYa4GLSMT45UYd5SESXb7qiAGi4JUhPUtYa3rzEbuyGF2eghBtC5DM3qotpBivHSD9HDTAGABBaq86STGWjPxDT",
  "key15": "4BdEYbLaQp8c1LTv45SAb4KvaZUcFvHnBBL9zBsjFzAWhxkgS1VGncDANvzSYDEZZpDkChrvxhjDucPQz4bbJAfW",
  "key16": "ZzB86Hsgre1Esv6FEEp6qUsAFwjJGhb3jN4HPXB48DpfBoQ775Abi7JWLk7RZHzLtWaoYtuhJQuNa3Sifx3amwz",
  "key17": "25RexnE2MnP3sFpo76FSzcMdiLmP7KJfSjmDDnD8cbnMv6tSqPbG6QHRwHFgaVmDrDsqoduauNSN3aShPAB5dth3",
  "key18": "gYoAEHLGP7M1DbL55rN3H8BfxAdDENdecMW5kbTEWTXRKXkGpsFxE7DXxvhTPw7jkw13wxSXLZrgfdQQTNLEueT",
  "key19": "3kS9hvhSFzoa9JuaTq3Dx5wNFcGSB7pxusw4yrppRoNaesbxW744LWstZy1VQPxwgXBXy63bACwagR8o5Dr6yKGv",
  "key20": "o5D1D8XySy9694gXrjSJo5Yt1iQJ5vgtRvj6biwzY7EHrqFwHgg2BZibgRBeSzgtRxN1xaV8vwsLcPXccVkDKaG",
  "key21": "5Nw5n82N2GNWqmbwgR99Hxc3ALfQvMgR9ZborHhhQf1D4iauoPucnJcpc6XxsqkU6RdUy5kR3pnZfsVXNzAW4uev",
  "key22": "4ftGdhhweT3pPDDLdibBm2AVQ7JqZeVYvxonFzAfTGqZRb1W3aNs5LsFZTKQJPDZq4uhHdvYJYMLby9EC5DWYhcm",
  "key23": "3chk4nnUBmAXySwxdoXWhkGJKpF28pDXyp557L3X9byZetikGKNBpnzNJrF8JvMwfJubZQgxuy2jFdJXj4bVvquy",
  "key24": "pKYF141iyqSta9FKqmn6UTH1MtZaKNH3PRtCmxrsaS39NSx618z11dtU7NChJURcaAuuzhMpcitWQAkLzHE6h8U",
  "key25": "4Frw5Z5GdJakTSMpA3ez4Cn7qNbFqCN1sCsqrN1A8a1whmxfgcxAgJc9FRCHFRpyRZVbY6NZdBTGAQp1FRNWi8jB",
  "key26": "2E5Dz9UAU4SNs1QmJwH2fjf4DhAedzvuSHCKDf6gyTfmz6iYrxQJB9MQXePPJU5XgeKcC1bSqgHU83rREwhsFQso",
  "key27": "5C81Eh3rkckAwBMqAP4KKyQrmepNJdpmgpiBiwToPZcfK3yYR9zRL8rwBDraGjV8beyP5CjtqTDxD6Dbc2RoyZTB",
  "key28": "3om4FEiXFT7NekwfFypxAqX2daJXrHNtqxwyX1krNNezBuvU6ytbRyGJ5PXuiZcGzJm8g6qgE15rw9d1ibrrnndc"
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
