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
    "5R247DjhyfscMvjgxeeAcQ5rfP1DdvyeKDyAnTqQ7Pehw6Q9TUqrikqC1s9gvdPHwUgkZJSP2UdnJ8LV4N4kDvw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FRz1Q286toWyV3FurBmBzk7SwbiBriuip3YjgCWBStt5PFJ3RQNaWShh28qiV2Be7rssx86rBnouuvpU2xpZmxU",
  "key1": "4ZnxFEHuLaHfhgLxTHsYrbqGjtUn9t3AiBwXxXuvmmZy9iqV4Y96a1kDUCXYzgczhht93F8cAPUHSQ27vxBQd8W5",
  "key2": "38eedihu6QJugoRRrmSBnPNK9JkDRGA6c6j8HTx633KvJuChbmdRJ7qpomeRSERUVAWtnDXnbDEoGQ8wG9HAM68M",
  "key3": "22KgUmCF844vWRdhYfJuJngjdRuA4GEj7EgFw6hPcqwWFJuoiXJmRvJZKcUdETu5X4Mzh31zEKHMboSNCJsiA5Xo",
  "key4": "4aD9dVcgXuGMCqyqJPucnz3xkEZzX7KZkf7y6yx1bsr32QSR2fhKPDoiQvT6v1N6CiVidM37eMCytdHPqLU6ZiSW",
  "key5": "87ig55tWfZ9NCnkUMS2beMy8UdqSme9m8EuajdAc9fEw5TafAVR1AjdndR3qbRmPRYvkf7s8vH2mNQxncafJDKq",
  "key6": "3MdGuaiX8qfQZAfocfXirDVQHLDNoUz28Cnhme1tws6mFK6vDXF9CqFaAJ8Z4BPykUWRQyVVvGnCqAwwau4B15uU",
  "key7": "2KEYvB9jrXTEF7vhtsasReC8LJkynZ26urziKzZHKU1agXAe6tA7vVTYU7NkWPo1SQTHArfpHgLQmjKgkxah8V3p",
  "key8": "7oD1jsADDy7x9ryerRTz3E1q8cnQdEzvUEMB7pZqkHw9SWaVg28GYr7aPuib9gxaBNN1dLNf77fV8hh7xgs1U9e",
  "key9": "44QYPCvwJS1NNaeb6X2J6SKwxhfmtSuNyHKxhDiTydkwdSER3LZjxSHypL4tdH82cx9Azdb1nf3esqcyubjYL2Bp",
  "key10": "3pLgmMdx1uHoW9s4A2wBtrvzaCGWG8N2pAz2TEEdkMXiBPufQJAN7UMcQWB1wC8GJNxULe1FjjXz6h3k3pybiLwr",
  "key11": "4RVuzCT3EU93Dhpr1NxTVprr69YdZNbVySRXRUZVzAGGPMRs5p71kJMLf8bx7odz8movoWgWCe1B41UgsX8q24Xc",
  "key12": "519KW7cyvfpCfQ1XU5HVYAyMiKHWC13hfY68jh2qpdvKyJCaCSwLUsJyDaWLU7bZ2hJ6X5Qh5K73ahe7Hej1agR5",
  "key13": "2S77THHDh6PZMEL2MjsCsRoKHXZZn8CJCFdaMYbKB1LsPCe8YC1Ntt4oozMZZTvtEKkV3hUzqFxwbUmBUpuTatN6",
  "key14": "4gAwmy1hyk75uievnJZ15vAkCkmEcDzpRkeuizCTqBPRt8RNGtEcT6vkKKTPcyhL72rFwgzQ28UWfZ3hnfdxYX9x",
  "key15": "5jZR9oCnKLJf9Rjx5bBYE2p7gAX6cBE8iehc4b4eZCB3tscwxx86Bjeo3ck9KAtvScKFHptMSMAgbW8aBM6YPqv6",
  "key16": "2TCUyy4Rv1YfGsBoit3ashLd6q1YuLrxQDHGExdPfcsJtonYVYPT96N3dVoNpDjpkdbsFfu6G1hSV1qnZjQ2w5oG",
  "key17": "57DnXBEPFJ2KsTzPg9JhZHiwLnkND4QXKV7BPs62tv4dakgQ9HhTG63DcQd5h6t68Yz2n39hK5Fb5YPRD4JrpSVj",
  "key18": "27Ceonh9jNKifsdoL5FvxWF5sTRkrj9jS2qNiWA1tSrzSUnc6ap1BqPfRWCtSchZ4xj9ZH1pEvYnDyeaVQqhHZ9z",
  "key19": "2CpgEaMc5sveHmgoBNhyoU9iZgmA2uZGAYFKgcNZ4mv9Fy5AqosSuL5Cos43AZ6HELRvJRTbF2y8nTuDZBGnXWNB",
  "key20": "h6s57Kfxtdg1Bi3wCx8A1Wn1ZbetdadyYZcEXC6Ujvmnjiw5dF18PMcNuPeHraDXAk15WGPX5m7CjiUDM1ke25W",
  "key21": "4jKDS4WKHP6b7KCdoeoFZHCcAg38tgRmm4jozmF1r7GQkPVPyUsKkVRKMqmMGwmCau6YBHKWNjjLx7SFJYZAbik3",
  "key22": "2tnZhfVR5nF6V9SYJ1Y76ixWSCc4zJcwxGuMALnmLLjpBTXR1KHZAonjXETEn5EgKGRvAAgFihA71fLDyscEa45H",
  "key23": "2GL4onEoLhSpHJMPK6rpG4spr14hxYaG2ZawNErAyXPopH2j9juPxuMBGv8tYUWMQmQzLWUdQZQrDuZwK6FNZQ5N",
  "key24": "5Ms2qHFNcdTmPEKWfVRSqpp4JKgwux6k3wMM7pQWQtXZi9Vpg7tZLEabSYzPZXpsnCAWqj6kUbBWKgQbGLAwnqT9",
  "key25": "2hoy9N6FMi9bMxFvEyp1LXs1uX5fQ6f63iAxvEscDErwoycM3iiGWcLHRVhXp65YCJRkxefdzdX8uWDxKBhuyeje",
  "key26": "4kabjq6cZcnbKGZcUxzeC9jZcNj2tqcV2yGbaMTfXgbggiyngFeWDZgLQEGj2VmpVxVgcS5zBL11qiMk1TdxyFLo",
  "key27": "5V8XHYLcTsmokwvEfmaXvduvJ6ebR7Jw4cuR5rqSoBnm4v9XLvRR4wcrVKV32DuMX95pv1u9DdfX1MDe67qx9CM",
  "key28": "67HXCedeAMJcYg9sspnPdhnaahLfZm4N6ZWJPSTTi6GcZ2iKJXHEsvKf3763zcPJ9aYaoHnczYLvPpDYK8DLXR5A",
  "key29": "3BKAGguSNnV8KJuSa8in3zsrRvbeoJ2Q54YEEGnD2kkbHZcKh8aW4ztEp86Bk1tP5KsDgm8oWU5m4v8Fyx2dPbrh"
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
