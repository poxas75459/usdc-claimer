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
    "3ScHp67TtqgpLZQxQUqp2J6VsKwTYuw4wnzNRES97tNNxuagWYCY65Q4XrZaBUjT4ZNaxQBAvhimxuhriEdyXAGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mxx4FwUYRvdNRDuWUXmbiHQ3vC9Z683Nc3dRbYpoUatYejBU3hDtZ3HqLVF6VxiSuXKLTZ3xvWr6FBaBTgwZQnV",
  "key1": "39Tz23U7K73wWdVHrbRCMs9gVXXQ4RBXPtknCDBu7q1CuEnWbNaW6SVVRbDWgskrf6QRtaLiS7tLkQhFNQjVp3Dn",
  "key2": "xoCxFstNLELEKBKrcKmicik8Wn81AqaMLSRup7saJRmbzFxi5WFsJ1WAvHCKyuvjAVmA96FhG9xE7HFhSkhh2JF",
  "key3": "4uYNmPrr1wZQnJivNT38RFme6HPALUnibMXrwvVfQQBuvcZ4oP39yZk7Et4tXGfQhAdRbVteJEVu8McWzwm9zPs5",
  "key4": "2y17XHbWcLEcmB8YvmzbR16wizJp4UL2K9ZvmtvfA7eocSNLs8KWDEEWBzYXkrNbd4Xpfv7FcyaYW4mo68KBDPJw",
  "key5": "5ncGqbxK5srbqZWY27QVazZLUp9fg6cAA3VgGzfi1HCCx1ozryoz2J9EcHBpbRQxaYDVKSPVx8TXrUjMPEGPrev6",
  "key6": "TcDtL8EkKGd6mWpfysk4CV18VdiJ34mfeFbuJSZL5YtboKUEwJ3bBsAt9We1CqFrtNZXBuxuW6GRVQeptEnJAkY",
  "key7": "24YgFVYSrng1QhzC9Gkx7mgS1Dm1Gx2LzYVM2vbEb8m6y8efr5EzR4Y4twZWhYmAHGyGanLEj238bLRdTJ53ZYzz",
  "key8": "5xuq1imML7WFXvjgCrej32cCEuAnN6eFFxeyuU18B1pX16QN4LuHeQ57Ki69H2TNdsEt4samQmnXkdrGcrVhPeYo",
  "key9": "3oCXe29ttvmWixGHHLpXUSRdjQHSjayVrc3PopVX7jUGv4zgUyaKjdT79eg6RC3gv6GyU1bTWf8DCq25EgJt9YzT",
  "key10": "4FgrbFmjcgNVDwq7LhUTTh9yxkB7JxWXue8eggLHzxAaWEDnRrTRExpQ73ToZyjG1CkZWYc99LzT8rgiuvdq2dLK",
  "key11": "3LJh6vdyjVSyi1S7F3qc7xFsUPsGYthYWbcBiiC3tdrnaSrDc2176em5QQ4Ys4c8JrU7X9PKTmvN5DwgTUwKxoqN",
  "key12": "4WvDuprP3x4H5gYbyBRvg6HdYUL4wDWSVT8tDqcA6GKaot8ugagktz2rAAEksehG381j2sqxQmC7mK7hA7CUJkCu",
  "key13": "Z2PFyPyXsDRqT3Z1obpEJKHXDr4X2NqFqDY2QTriG7RbUnsMcR1jH6cCxbdKWrNCwurigA7KawapHd7R2PvyMsU",
  "key14": "NAar9Q3wAesCDNPYTsk92JNL9cPBWrCBqsrVvCUnytvjXZ5iq9eeKkMEwfz8wV5ZDb5WbTwLqqfJWhg2XEHqucG",
  "key15": "3Gwa74gWkf2d9DXwg8JY1TUBcouLWhTqn3EnTf66yg4rvqXvjzUy6oLMUSudzz1WvtmakeLVru67W5x4xS9afWWp",
  "key16": "5N8c7dbZsEN2ME2AmHmj1Ng72sQsh8NXTtPvhV4SeVzVX1vh8sJmQTmndGdXMrGiAqySv622xqj7ctogMy3XVu9H",
  "key17": "464PP9jhBieQSpN7pu59BLpzgwuE2LGeNBmCebutgy7oK9xoDJfzyi1uRBL17AZH76qjyzjSKPgxH2HyD3Wen6jb",
  "key18": "yXVFVNWRisXVwjoFdqBwd52LYQRUYv3ev5e3rww5nTgQRZ5yre4doqUKSMKD6RqnZhGDfon9uDmnuGmyrVXHPvU",
  "key19": "4Z54srDVLoc2KpKN64KMt94ViNJgdR3PdXbURdZMfW64W5uk6HoEgGL6YZEaNi9rZetSmdKtG6JqLpDHWewFee4z",
  "key20": "4S7hYxvcZigaT26zY9bGNGWWiAPTzNLQwBahYR4ESskvdE4EkBNQQs4uGsF6uvDdu3XaBRuAPtvDrU9KknpKdcm5",
  "key21": "2hYdeBoxTHHM8NzNshfSjsFMqjpucw1Qk6Wc3QC6a5CW2bUuCZ35dWNyuwNTha3wjxpAK7Bg1eRK8uHCkVjg6A8o",
  "key22": "3oPtudaxbGkJ615wqef3WNwoyCf9ZUYDsBHn6eHf2xL9MykVGwQNSAvFh9Xqs3NRRU3LEEuADUJL5JdkkBJLoRPd",
  "key23": "3sagFCtgbWjHwikTeGWU2pK6hdkcGvSUy7bzCd29hs7CnyPApK7Neg8Z1tFgARVqM3UmXYf4F3dYAwiH9UYQ7Lmg",
  "key24": "AxLbEtHSPEdesXjCgdDp7WxbMxyqJ2cvXwC4dUX1pe2w5utZqhoM3Z9uGxkfA46TFjPMmGv9SpoeXCmkJfdJMPs",
  "key25": "5LJwb2eebTJjKXrt5T9coAu63akn2JAYskMnsdjGWdfy1rFKRcXWWttqVDxWooMCJjXhYNyedJfd8TZXBwkCDmh2",
  "key26": "41xrvH5Z5AUJDEX8SC5GKK1MQKeioT1vP3mQAgrAMfqVkowsTo6KD627Nyzr8eu6m5onjBZERmM1o4A36Ch1WNNV",
  "key27": "2JTZUgFkdNuLMQJncCjsuSN28s2jMfmJh3BvCRC19jQgaB1ty39fJAh466njXWGPUTBWnnHvaEmbuu3WmYcvw2nH",
  "key28": "2Ew7Xu8fnp6HBtjfS7vUgjKKvP5K9MfWgL5BYLFcorQChCpmiQtPVvqjGxLJ4xrMg9wK4U3mwP9CEgRtfTF4qymi",
  "key29": "3eCNdBeo26Sz8b8gFiHtx4XsqG8Eom7gFSYDRK9FWbJ2P8umfFKXRQGcTNqXH1sc2TigP5R5sAxrKwF9pu3B5Rtx",
  "key30": "56BSBwq6efNib3Nj5EoBYu7UodunmQr8gbnWVB8Fwx5k4Wjywk9NBdEC3G8h6EZJSZvi52NzuqzrdcWUZt5a8E2H",
  "key31": "2F6TxESQ9aGFidLnMa7Qr9VvmuEDj7akASPqD9rqA7DBUhPNEdjSRxUMTuD1se4nd6A8zwy4coDbbjY5CzcdVnuC",
  "key32": "2sQzHTnMctZ1KA1worGNT4HZw42zxZFdKc64szwHBjnTEWDG7CfnyY5KwCGCLSmX2fkY6Qvm2m65vAN1hjWm1WK6",
  "key33": "2TGoxMbxMQsuYgpFnG88jTK3DMADj5ceSnj83xwcoCYhdQTmk1Bw25GzuXxckMSTZNapb7CL463siKNcc8hHSjv5",
  "key34": "2obJyvmLruYtf2T3JMz4bj9e6csTzh1nwqMaCXaS7z3D78aLREjUwFLttU7x29quYV2En44QSNdov4TAm3SiKknd",
  "key35": "43BVaSXUWXGUVsMBaMP15J7MCmd4yRgRhPmqXNZvkXofcH7gtkGXSkZGvLrDry16ZaXG5DHxaqvb3oz2SL8T7n7u",
  "key36": "6hWYM8QiPsBy1amu8B83SdtpTJydBKbcdtEDk965Wp1sMxdYZuibP7KazUQYTEJnU2YFfSccg4KS89AHR1E46BB",
  "key37": "UQo3EK8rB6GvN6j1HpsckjJVxMcWM7oRYucegS9TZN9PVuEh1MtEMaEx5TToBhhoxR24HuQEhbDPSGmtBXDgejE",
  "key38": "SqdgpVPvVH4fVCorvCPmA7uYGqL38zUHgcsRTMK58gp8PfyxfconpbjaX3ngqUdBhqZZcwwSg5fuFkWYLh2EtXf",
  "key39": "wFUTyYYNF4suANenZ8R2KobdZwBTy83zohfjSkJ6Xv2naDCyJM2D2RoT8eh8iKVF9nntoEmU7Yar2c9rPTr9nhE",
  "key40": "2ntrPBkt37hnS4sWGCBGJo8PMvmYqivzk1w78skM9XHKFRWfvnkquHMFhPt3HgaWi8GMWrUW6cs1zS4bCj8rTwLM"
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
