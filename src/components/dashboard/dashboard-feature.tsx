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
    "Qz4fbQgpiBcM8uz23qB94E7PrzsModUqVUWJW8JvWy6RNMRZ7FEBkFVWAsB5nuKkhPytUwRLJgFRCMWYTWMa45Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkLNtxjEx81XoWRKPK6B2i8Z4ezPim9GJZMh7ai5wQBW4LWrcUJ6WVG6jjsKcR9iN6QxdLpXM4uVBeRKJpw6VZG",
  "key1": "2HktpumMyparaKXpqo2w6k6uNkz78ALiJ5nMET4YXUCLvy6JgS5Fy9eatoCm6YTjiJJxFbgwc2G21jzGhP6sVuiC",
  "key2": "3m7Jovw9XCtM2nLUD3Wnz3v8aWf53Wc1S5JfxMoLFSyQntkue54QExTEZDDx13JvJ3o61jVa6asqntuCYYesAGwq",
  "key3": "4LJKCUTTWvrLeBtYq29ixmsJNx9aGHh52RVk8Vcqh6cumiz892BnXxTM6as4Dtezvjx2FcKsbfc6n3R7179LW7Rk",
  "key4": "Cn1VgKGvVgsW5yBuRaxF3FgAxzXyYDgHtPCwcuRG88g5RCvR49rPgQKUF24oRHrh6TnYVRnJh2MBgFvtd5v54CX",
  "key5": "EwG2EJyZmeFW4KkAEWkZa82PyXbkCf4eox2nBG8B5mr6NHPdJe696JCYCpJVUPqbuijWFvti7HkZ8dAWByn9fcV",
  "key6": "3CWZUiQanSgxAK2ZrRaFc9eq5haexMHzqKSTMK6BBieV1BT4JEZdif9qgUJtfCLxjFgMWM4zaRobes7wgjBVw4u6",
  "key7": "2b3iEVY185vuPn35spviqs7WqaaXz8YV4SGt9SjfjzESfWVMiyWHX7aHToJMLKsqBakbBLvgo7YTMkVM9JPT72yU",
  "key8": "Sf79E9SXtib3fTXyLQN1pjKHwH2rAnY3tNUpa8tTrSBwMqd86rTuw3vXLckFz9pvMGrMw11DkwkYzdHv71ka9R3",
  "key9": "3LaA91YyqgBSJ8b62WPbB9p9gFGqWZuJZcNu3BcT1aphwPS5AyXYQNkd8QLxpakcYsBm3ExkEuLq14oKywjEJRBb",
  "key10": "54K2yJoU42Ld7asnbcF6iTDEaquSjTZkBYSRJ6gPbDYvZoGMeniwKn3wra5rLiLFXWdzjZaXudufqZ8v5APycfsL",
  "key11": "4HsLD3s7SeztwNJ1vnMv2N2uVi5JkFNv4RCJirVRVCFWP5fDpHVoFMZ41HCRdJcY3pELqntiN5f1ZNuJNEySATTb",
  "key12": "5TQGkemxj8dNvNC2HpKADPExeThb1nQvC9LAi26ZzetUddj85KXchDfxE7aaQbKZEuWVzF5NtAxzUs21eNWfXoPH",
  "key13": "iz2Bi9omnTh3zeo8skRsVuUmehZf3zt6RcGzuTmPsmKHFngzRFc7McKpSiHEhb7QP8yEr2sJmswMAxubedMBDfi",
  "key14": "3DZJRSghEAcmEoe9CBb762cAUiZ93Wv6Ce6kAdcPdmN2vAFyWQgfKq3roFiDU4GTv26CK3eh3rmrrGibZisU8pir",
  "key15": "4VFfnnaqccHoF2utzaEBPEDDrXXeJUWDcjuHdyMKGDBDfhQ9cCAHCTL94N7REVGpLe19WcteoTfho8uFjHT9GjdC",
  "key16": "3VDNSbJXcEoFYfvjBrQpxwmqAjRHd4KncBQeMAB1e2uicFud2Dbf5HqCHvzRWMW74HL1oYQDQ9i6nymCCMVtUYPR",
  "key17": "4aHL2mw2zXV5r29MmbyouWjMMxiXPJKHgGA4Y2NtBVXsfy77uJAV8NXwmZSeoXyg3frUq7mo539iYtufPz2t8Qv9",
  "key18": "3Dx3wpZuRfqBbuAAvWv1BsdrqmdwTKPnKqCaBG4CAX85r8zN9Kb2WM6DQ3orR89XGjN8pZzFkt4nfpioPwoxJb9U",
  "key19": "2LRLFN7wucpanRwXnp159tdb26jvR73a9jEFgPiBEME8BtdkJGntGY11TkUWwHVpmxaW5s1LHzqXBfVJhEmkk8gJ",
  "key20": "3qLF1vq7BebXgsmNhSnmkq9ZaYvWBF59DTwgmLAFqaCLRGS4LRn3SkMeq2KgpPjmPcJvScAZnDrKJt9y6ZPD6U3h",
  "key21": "3vf2cK8iFgc6zL7fTkiWiojmgL22iHmwoWTUBexZYa8p1LVRXTiHLtoE8Gvm2jSFZoUUMCbsNXMaxAr5vgoWr6z6",
  "key22": "3Uy57XBj9D4zDAkisoD1EDhFXkR1mhU8tmc1duSTmSeXmX8fNMwCRAzmXjubFVHioCERtyXZ5m75BTDZsazwJ93A",
  "key23": "5ckAismgrX84qqru1ZBudhLdLinxk4TadZRgczyJF4JPGUjLmiehuauCRvDeqbbsUAz4gE81Ea6MLYNPeRLTQfGn",
  "key24": "2QjZMaTFxhNbFp87op8jfSh6hGF7Pzkc9WJazMU7rcgAePUvvZQBDSN1sqB5JdCn6AUf2rm7XnGrhC4MU4sn53pv",
  "key25": "57PRSmPMZzwt2MEtMmroQESu1KfJDzB9xzNAbGg4yJVKryXGZhhc4b3g2Uo6vyG3UTDDkoLGRTvan1v9zeGLfxgS",
  "key26": "5vGvie8xtqu5TDpfaf3vM8AsRjn5z62as5NFMERtuoc13vcYNa9h6z1tZFvc1TsHeAQe4tKUZ7S3dUV2vuty79H5",
  "key27": "38c8miBWQgaxXbb6wUiQ3eZt3KzC6c9GcQvNMWVk4v3zW78oQZbFajLixLTjaVEhWXmXDvWJWxKPHXtWs9fjMeh6",
  "key28": "5hxAKG7Q2G8JjzGXHGF2ZYMaEi78NFzsYJJHLcwPM7uF54HxReUzcHuJrZrSpnxfrcaeo8oW348pk1c6LyCwztnV",
  "key29": "4xC63h8V4SnM76Ldf5HHtvPxhD22AAd3fJzoW2shhLqL9Gr8d9DcxrqkRupKk6omWu2KoLE7feUhqELTzLmVUQpB",
  "key30": "5ESAQE2EjzV3ddHLW4zcy6daLv2xXcViMEZXXTsdEayMAq9ViFR5PjhRxfer3TZ8F2e3svXh9bkCCDrBm7ubK5Ap",
  "key31": "cb6hpPiZwbE8ouvi1D7kjbKvbe4mxmB8KSk3inxSqQmDtvUKev2qLZmYN2gA6BarHyG7RPrxLtyXq28LiPq662K",
  "key32": "4bSAheSusKun487Q8neFJK9JJykGabqaE7FyEBBnkjcKjGsPWEKZy7giAajJmw27FRSuXkYyjxbPTznMk5VfyT6T",
  "key33": "3gEv2L2fhXqxBA9QZnXJAXg4pf4CM2ENFUAwzT6Rm8FRmdnKiyZf5GcwqxviMoYESdM6Pv7YbXhoViCpbakUZMT4"
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
