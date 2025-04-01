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
    "hw8Mt2atcfdcvJoNcjBHoxbhuqJdBik8ppKgYaEakzFzokVgEpfWYUeVgUvqbm4zzbGw4ukzgghGBaqtMVMB4dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyRGkmzTNKDqTUvmb5aeog1iHCmy3yT1RCpXsSg6tiA2ZPXyGCgj1yJ31TBuQujxe2VRWrsGxVfNYmmTMGNb1LS",
  "key1": "54hiY9kpbseAWxDsU2SbLJvm1hG1cBZ9BTFkMjHiY6n67BqpjBk8BHsiFaCiusApbK28ANmLxsi7iUjVQRf3Zhjo",
  "key2": "2jzKS67wtGHRjiQNWDnXcAHfUVdjPbXQCcsmBQFTehgpPQnfJQtg6jHTZF821XiS7CqXKKeyhNKfFpgaAKs3EidZ",
  "key3": "37SWXXDn22L1FjhFpwzsrC3oKpz5NEKX4Ehawsk1upMQukTpAnydLBTmbgQgkGAAEH8YvxWFeWC9KSXEWarXN6sx",
  "key4": "4DvbfqUUoMFVgtqPVZg6z1Fo4zjd2CZCrMzbE2ociDiUKAscBDTS65jWaciBMMRR8Cc9TrqgkNBAxSRwUEAVt7mZ",
  "key5": "2uRs9PbMJA2CbCYREYhWwFYo2cFEx1H73rCGTqXUzxPNeVRSX4mfv1s7d3chViYvyTChHdYRGH82eAmdXADvuzuY",
  "key6": "2Pw1h7Hp3yizYNzCE1BVbgjoyHMwyzoaNCz9cnzhCWoNSn81yEGqsLkyYT1MUpNAUtnSkh5UZyukCDGdZuESNYtA",
  "key7": "22cNo8rCUeuF3EEVnNxDdejztUbnkfCS6TVZHXBnBoYvNf6BnQKxwBq97QNbTqhbcFmyXvKXFZTa73jUid4x6nMu",
  "key8": "4S8JQh2BE31AYb2jaGhv1sWE2zV1fe4K4km2Juk2otPdsFXH9mqoJmhPYE4KaK7wQeP8ZgCpiSJiKZPBFVcQqd3L",
  "key9": "ntABjA78Ff9J6w4yAxkpJtyWTwmqPw7iUpST2b7awpZQwq9RwDMSXrfwAMyFRMqTe7ogRznstfjYpNdaJVjQ4f9",
  "key10": "5nwZ51HxFX4EZ3z7uTMBYb4j4wnEx9BEzKbkVowTX7ShDse9Apd2JYBMvF6byVBv3JR9aHwFFzVrRihoRckZUqUH",
  "key11": "2kofb9Xu5DecBsY3LqXVvpknd1JBEUfX4nfHXTNPsuVVVpmCSBebUbRcGVujHv2arksAJe86rP9qneuiCsHBkkvp",
  "key12": "2Rm5CaL8mtdWejb3Yqwymzs7pDvVNN5YikymDPABguKHWBQmf13imJ3QnxgzfNN91o9haSoMNmvnxFdz9wfGDUQk",
  "key13": "5of4cozCo6WjKhPtr4ZDeXqNfk4ZnHsMPXQ9aWnzHsgME3sMbrfbm1TX9HAcFS6gtdYynZMXABXp2vX74PJnWiJe",
  "key14": "53bkfBm3Jy6FqPS9UqKnj5tsBE2Ss6MG3AyfnMBK8gtZ3Vw4BZFtamnsstW96GFJpZYTwpR9vwUJKWVbAZuS2zuc",
  "key15": "2Dyx3gJs4drcvTaP8xzNgfaXbvpjBFwuCZnNYgQXTeuBUj44iWjyRZ1AgwUwgXCwjSQtPe1ecxmPhJGYiMcytHMY",
  "key16": "2bKVeS16qs5kQ1WMYwn2ii2HZtWCQrDgX7vDKigXMm9xodQuiSa9WexqGaqQSHvY3tWADDLDrWgkQtXXiaqmB5SP",
  "key17": "5hN7tMgo93h6A7f8S2rrPaKc184btYurhvsX2rHyGg4NU5f752VggJ54WRADzMqsTfe3meepARcTnF8jP62Gc9pv",
  "key18": "46yP2Upju7hcVZ7ebgqpKh6QNGYEisY1mUTf6HC3AQdLawkTHmA4N8iatCcNJ8JK4jf1nWD5REfRHAhsKLCWmLae",
  "key19": "4WZcE6r5VqK1pCSrnkDyPzQCbZvHbkJBREnBSFVtffxSGtvxhf35QMDLWiJv7kht4XtUihdfmdMztAS4ff65bjFU",
  "key20": "35yGXigvGY8bHymmUMQSsHmF6G4yX5CAjM2qrwe5wnFixy5e46wjhc5rvNwGDjpDx1JttmTHHBr7Ymtwavwdt8fJ",
  "key21": "5fk59twzvrwYW5ZKGta56qPFB4gwKMfavxDsyfQoJaBUkPWghixumXFzkKn5UersPDUDjY8WhrLLpeAsjUCENKUz",
  "key22": "58L844XmhxTmaRedVykPV9ihkFQYY6MZ6sRwV7hshjhurpSUUidMeQFCnz49Ntokfa1v7Ez9zTwHLAFUJZaJS88",
  "key23": "44EfinDwG4ccjGQzvWx53PzYmujPZTsBu5oj9xPZf6Gb3uUHRYpKBg8FsjUdQpQ1FjsLv2EAHyHJqmGcDUCsBZt5",
  "key24": "4XHFGtwe1rkFLNEZDgNudy2yYdXgqx9k9Rop6DQvRRgn8XCWt4RrND4vTUdf56rc1dig7SdDk58x6YmM7mwDPGWE",
  "key25": "4AF6SU9C42yoSVdiQ2atorXCJgkHGhBKwYkSmsHVzQ7gw5nGZEhBxLMUGuQAusgAXVDetK9FZbNqyXAtE6mycXhD",
  "key26": "m3ms5pwVjzzwTVcz6fudGunEzrgSrptUYstLGWcoBsoMZP2wKH27xzwxPW29Ns361jQE6Ddqx2ShZAWx7mWw7WX",
  "key27": "3yHVXYR5M6t5wpptBCWvZX9EhsYBoF9VZFS6GPqwdDH3KBBuxJJSMHrEun44K51z89g4RKbNEkvFXrSFXQssexMS",
  "key28": "64iigNPX774S7jNACEGfKBtskYuNtBPBf3ynVkd39zkS2HE4CjL7qYfYBny5qsySBb7cy2QVfF8DkE9E5RdJ2MLw",
  "key29": "2oBzsGwbDqyod38qbNcD1doipFN2AWrp7paeNDBe9SY7rWkcZCXgybFMxBrP1kD3KLr5zZ8GPSbfdZcvMEoAn8pq",
  "key30": "4QvrxRfAsW6CBVts5VpzXi1FezMbL2KQYE4yfxUqWtZGrevvf5UJAZFFmDZP8XBbeehfHBR5gKCPBA52zR8hF7sM",
  "key31": "42RKoNwDNkyCTRoD8aQHyuNdaaGVWNJchaMBrckJguGMd9dXN9LsDPRGnnPHwsnHc1nuuvHboGhS2AyJaHYYTs6x",
  "key32": "2diMuF71pv3CZWrjdbJtMhXHmEFatgcDUT5MRJ25MVzTBq3A5KsGwnLr72T5wQ6JrFvJmJ56byEUAhShVaQ8kmhC",
  "key33": "o8AhgWzRbtBk7YSjyHSK7h4nJPymx2bvG3oea8Ed6b3Pm6FcpTZsnkC5zijb8YrWsaazXcF6StSy3tC6B3WVZqe",
  "key34": "5kiHzSuskjaGi4AH1bN5hMHGPVCzLoeg1oB4tVUZXvPbxM7fKtckxawSXpUvquSx8qvgLUVWPEuiq99ddbzeqSHa",
  "key35": "3V23L2J2n1Sw7HvRNBcwuafM5QAEy1QMURCGarKU1WdobMxPDRZa21rfLiuKR3rLixLYC6FfngbCJJ2KA2ydGDSu",
  "key36": "4d7BN6W39CyZjVQ9sTpZTdQ5FHVw1nka4HVv1FEAztLzGayqZdCpemVFudbWEF9cqScJG2qQazov72wkqWbJY6ob",
  "key37": "5yschsBXHJApUTL7AQ8Vn5aXbjveRfr2GQEs35gTELqzWRUdcGnJGaf3H77HiGkvDJJxXXLp4mPMQqgpaE6Q8SSz",
  "key38": "5qLR3Pk2NkWBgK83kUxFX2AuK9zyrbUhQXgqvFnmDy8eFXq9SXzQTHhhmUC7hobTnHVNzkEtsEsDAfLjBnSoFbdA",
  "key39": "2YYeXUt13KW6ve5oqzyFV2rxzMqXQt6jT3RmXLV4FS45sQSU9Mxhb1EuxxqoRVM68Y5S4yhbNMZ99ZP3mysRwEWt",
  "key40": "4y5mzu1P8ucXPr6XF31BCwwbCqCbNsW6uqfK3EC55y8MZjGvfZdDhK1DwFkzRAaDFpdsqwBgmXWhXYoN3tuDtzYi",
  "key41": "4n5xGdDKiKCdW3DPrnE6RceHajNQKjMWrXekot99GidqH8xzkkQkof39MLBs5Rc2BsPVuSHnY2SPUwozdVtJeNjL",
  "key42": "3b3tKisoMT1zFMjxDnAsWvmPdqKZXC3dVD6GEiFHgB45UgBqKfsuawTLc76Fic9qx2BaKoQMd6EFmffcizr1nuia",
  "key43": "5d7vanKBhMEWYrnhyGtuyJBbbHYbvVimwwF9dJpDsBbdwKoCvku6njnHGr4VkTZ7j627m3uJwufnRpYNwPCVk8nt",
  "key44": "2GCJaeRAfe1M71FRgjVnRrNhbQe7MDR52VfQ7gQunNndRXTfqBPUbqoT7R93Mu7hzRWLnR55TiXR4hKm2jJ2uoN6"
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
