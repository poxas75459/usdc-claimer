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
    "4sEidPQCA6Rj6PLf6uLaojo2U4k4dfxTX7TbSFTCcfQbC1fgdEqrv3qECWSWPAYgZ6kt7ighvZagqXnXvTcsb6j8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWJ3ixc1LfdPggXCWov8pMbK4oXguvqXusNBYqTCTK9p8SSachwYuiGeGjpXfCNZ1TcsdcwpcAVzVBDGymWNCbu",
  "key1": "3bU7hvobFMTDLXcwfjFU6JbZ72Ppbd4MoLFSdzwHMq6VTc68X5haXNxEdLdDobYZWERs8BwrNBMvebvDosK6M9sa",
  "key2": "4hG9qk4oEq8GFjkk6RVyL3sUZ5cAwXBs7sC7882De7P6UX6jp1gTcqhwDuQdDrW8KJLndNX7mpiDPi4RW9BSQCLc",
  "key3": "625tzbL3CBypPCzJi6SkgTbfGqGByXaWBw5U2vEfkBrgKvukPCDCrKPHoDtcN7oHPzXrebuiChGmy93UMYn9NZEo",
  "key4": "5HGAFp4iQM3KW5TgP3x8dpFVcok85VKv9KdjGQPDBoDsPZZu3DJnWavCedy8jRuyuw5kToBNU26TLjtsaFGv3rLo",
  "key5": "3oaZEBKKD56rYy2Ve2Rvbki7sJGxyVLJMN9Dq6zvfBS2esYYmdGVuVJtHoQRKknW9yJa2FC2Sk3Qa5zcM3GQisaS",
  "key6": "YPvScjngRR2HbUo7z29WQix2GSBVqz7NwyxcfnMuPsUiqgDoo8hbTxWHU3cs5dVFwjwWPqMuC5DpQXRiRw9kKiu",
  "key7": "38mScUeZYMwTmALwn76jXkkF9awXke1eorzrnF9cfi9xYqV2ZeXddypzQmbKw2YKFcpKnsNUfgYXUNHRAjoAmkBZ",
  "key8": "FR9EJ1v5fdYxWQfXu1DPNmuwEMmzBNKpmUXVunam7Q6W3okrauJNYaBhPGx3p61bvyV5aHBDAM4dJeKTn265JJ3",
  "key9": "3gzw4WmZFUFxqeif6cHDNXS816bDByf7JaB9UXU2G7BDnfrMYzv52KAZsw9wZgSdH4GijsoE8XRywTTtGsyXAjLn",
  "key10": "5QHH3EnZ4D4XvrcLkvLiuGJx5er7K6b7PJFKgfAx1NkwvTBLMRM58pBsXJUCjTxEUQCeb5bY6JBsDpsjZkoVBkM6",
  "key11": "4aXxtmhU45KFQjd3eycTe4P9UUCxFt1uyKNQsubVtEvRFQzm24gr5HtMTWcUpsSqEHQjVuoFasU7ZGQzKcdDWGKm",
  "key12": "4RdbqyJpEuyKXvLuKknUVNLs9QuJfmvRqEVMdHXNjahNwut8rjg16KvdovoLhTdMpwZ25bfuYQy7BHUTDqj5dM83",
  "key13": "5NDXpCsaxe9yWWQmGsa28onSf2fHqFgQyYMVEQtNKNJUduKhfxaeTbxbWit8RgmnvVqK2eagmxRs9QpJEZjJ5N5t",
  "key14": "5P6daKkEcaCavpWCZrjRdq9AmG1EgKi4qY8ZGcN16ac7aWUKGFyv2iEoXyrp2JowqAQHdPCAmkdQzt8mYb8R3pax",
  "key15": "2G5zMSPhvFbnaxBwmxoHPM1sqqTH8NXKGCXWkRFDbCuuWqvrhAfLjcinbN9ucJ568hZfxGaNRkMjrBkdHzF7yPQ2",
  "key16": "3dVbcCnwpRVkjeCFXuchrwcPgWjg3okMEV2xtv1mgcRjSaVsFWkw5x8WLgNpYTVASuuropEtZnPHvVpjcP4mwMEv",
  "key17": "5JbneCCSNFrSjqX5dQH8JsZyj2fCJwY9218CWNdUwwqtqTcn3jNN8t2aFnyYpgeALwarWjEqDtwzuW7at1GeCtN8",
  "key18": "3MiWZUnjYrmhv74ywkba2DbqunLMnJFerDZd5avovv4G8AwkwTLhU2gHWHjSCA431cQRcpoaAHfYEyayoch8n1q3",
  "key19": "3dXyc1nYRLaMX1skXZP6T4H3AYkghcZdY1Q4b9ReWDwLGB2eDCV1KWLdZqKcTJ3Hptb8UWFa3J2FDkAmuSSHDgEk",
  "key20": "2Exr2MsZNopMD2puVTADqh137f9LZaZHQfsyZnbat8NtiEuXY18gpBq5Gvj2He3xzfsSRDUNortL4epkc84q66Pt",
  "key21": "2HsuQFJXumYmzXvZDC9NtKgcosnztFPzUrfvivSM75dy4tFVm7xaYPPKCLDtemFPJezTL4tiYR4DDLG6YqCQF2wA",
  "key22": "2mDMdDEvBh5iRiXw1rjNzQtz5CNph3YpzrYVZoU3YhgDrk22thcYR9rbqFXs3nZT5AHRS76n7gzKuE7PGxWrTPKo",
  "key23": "36WgmePjtuqnkFvLYwrWPN2diUTPZSvD781SBRuhQe4QsCXnx6EjwodJPjC8ueJBiSzGv45sdNuFv3SKGqHMCHSG",
  "key24": "3dELD5WSYiM3QNME6kbnWqzxBbfJ8iCe6S5ssP9xdknbV3bkN8DN9fukwvKFozxAmCmSkMbdoS4dLisXAxAuZitp",
  "key25": "5Y7DW7Aw58v8sevMortxtBwPUfnDkwkSz8v8d3xpChwBfLFxxjXwKD4iFSXHCNw7mG3j6RQGtWjyMRFc4SNVhV8o"
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
