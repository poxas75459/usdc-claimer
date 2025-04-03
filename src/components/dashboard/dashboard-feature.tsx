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
    "2W3wXmBhqbz6BQxc6qSwurKa3wsCpu3J71dVxoycrno9fUZosZwePB9rxHpoYYWqyK2aUQijSdZn7296LkMccxp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPoLvuB2Tjq17NSmk3HJrGD7kYih68XtHQLvgUy9oLAgT1ruJnWkR4M2PcQLyqw5LBQJEZWDn51NjNn7JWksEDd",
  "key1": "yR3UiF2QovQ5jTtbWY99fagUWHNiKtWxgiDCkH49x33vGWmWav9japRck4FrQ9pLxLwerPUfWLUN3niUa3D4z7p",
  "key2": "5MZCUdoede7BGEjqJMhfxt292YmfAkEZiHprjn8KGsPaiqzFB6Z4H4SREjipvWuZNZkKcBhCgrjQcbnYvPdyWR6R",
  "key3": "biR4Dwgt8y7aw1ffDbqrGxB6sVXaLVDj4RiBk3aawgtK8oyugQ23Ta4Y7Vzqt4HvtRAoQQNuqs47KFAgr34DbL3",
  "key4": "5UoZVjrc8rgENyKSAwiJPUuweReBFbmW38iVY77bSFCwHFPGiXX7sBQ5wksoLse5UuB3FhUWX6FEV14hZZBDmZgk",
  "key5": "3xUDvLZNXKxQPWJRC8DSi6Ba6AxVRkRSrQ9xP2J5ZeEknRM9c2DSQjeXyVe27csPxNCqEL1zptMALnYosf7yAnGo",
  "key6": "Ch8Qjx36aKgYE3knBJqq98VSNad6EiCjXD3zYi8QNS9voYUYkMjX4Mwj6XwqR1B88QSvKMWovWHqfTbfkdnzkJw",
  "key7": "4XGrFNxMJCebJeNVV4TKkQ1v1aoMBCkM5SYnCRKbQkWkiboPG1zJDxCMtaZKpj1fwoqjDDTNzX2ixJqAdS7Q7DVG",
  "key8": "V5hZpmRn9eDuKgNTL3pRTVoaSV2N7VhBeoX261kmHaa9NQJqHtXsdLSjPqYzfiL2cqEjo8tGEKGygGLxG9NTURA",
  "key9": "2XdPc6mHNRc12ePHE5zwaiXmp7yaiDrk2nK1JvJZfK9iVf67AKr8Q8ccqMMx1VesfqyMPZZkMG15nt54e7NT6hLe",
  "key10": "33eH7NVxyXRrXdkJnXiUTfey6zNCoNXanJ9eWzowUq4GiCqhehUTVHLcFEyFpibSH8tFFkpkKKuKU2MvE8BuWwSC",
  "key11": "3xiFEbMi9vBvkHk2GKjfhsCvZK4Lyktp4qhWYTgRvaX365m4hJcXebfmiVmeo8kVfLV7zmKNX6fcysvhVrW9e2tg",
  "key12": "3XERVVmehEogmRvbkJS2ey2UrUwsCt14CAqHVYzUkfJtYkKCGwanE3rzYx3qCXiwxn8mjnSb7R2Msip3XEvYv7T6",
  "key13": "46NweMJtkVVLEeofUBPmPzkh7XpYw3zPT8q2qkPFvrGeazcmzsoLNnaAuJwK77P3THgL75fA5iGSxkFed8QBfwre",
  "key14": "3h62x4Pa2eLLntEutcDBuhoztBLnow1qHb4rdVesyMSYfwTyoJsxtfXn6wd4NH4Bb7K5MScYWxKnQZTBBy2JbV7f",
  "key15": "pCRgg164AevwMw6WcMePBb551aUtGUN8xkGThKLkgYXLAHrRE6v8ir63v9Ufu33b88hymkUemrU6TLbRaLm2TQf",
  "key16": "5tZaKHFXi31w1pNmfU3RNYewSw3T2CENB4oLNN9G8cA8BgujHLgNm8a8VFV6Bs633jtv3x5RNRkoAirRiXcF9umg",
  "key17": "5Kd9q1WCRAuo8fGXGqbFByXqQrVAu2K5AsX94ZuPZFyk6WTL2KBke6YHjobi9fHgsaUVHG8dAUAs7Jkkqpk7Q1Am",
  "key18": "39HTt3DFHo5ZZhg8PQFuKE7GFM7AxmRRoFEV4JuC7nuudUHY8sQVtAtSgomJF3pBmpMZj3JuGLrPbxJu9nUS7nBL",
  "key19": "5ShR88SnJGkjiffHZBpTX1jjysrh3nr3uEmBiUFAMsS7sTVD6xRrLgc7VQ4MTvVWVEk6eZgrMXbMtNZVap2aL57H",
  "key20": "2Yque973fazXoKvYJDMzrK3Z6Unv571BKgZ4sApREwVhZLDnCvAu7y9tX9V188gry5CghQmB6qg7VTSLvDUcACUw",
  "key21": "BECV9PE6LmivvfBdTTZkyU5mmUuGyA12BifbroDaoLmDurB8nxRKi9pUqB3sJ5jKZUXuGUGDrHd58QhoUq3jBqy",
  "key22": "2Q7x3Wdw5tdxrtDrDstNpCB36Fp3rR2zxeRoht8TUGXoXt1mFqDVTS4scfgUFHQCcKFRKtQa1rLfUzTD6pkgduK5",
  "key23": "4gPVCPRjvSAjiX9NHHTga3F2aMQGjoA7DPx5vGKzsn8YL6daUyY1iRgkXT3cbQ6FkDWFcmuJfiKUWoTD71oz6KDX",
  "key24": "2g4FEFGejx8SA9fUddWVrSKd2tRxP2L7NtpdnmZcNtht6ohrbw7dr837jBHcpwwL1whtguFaY3vF2a1fD6779Pwg",
  "key25": "W1hFMqzZaiekh5pEcpV59Zg77X5M8wAsC8ziV7RKoVhNLvJxwzwUT4KNMNNBMtnpuEQqf67ywtU713r1ZqWxPV9",
  "key26": "ndc9dUzo3ZiaoNhRZvH6q7b2bQgQjgtLtJPB8K8WWnhstfLHpc3H2T3rEw2inqz3rjsSRaNCJmDR9bPntjedNjx",
  "key27": "24Nd2qVnVaD7KMs3DnqSz3MHNBUSPvFNJ6FfnR762Hk2ZQFUDDV33wvCJTotz9RjUY8Vit7N7Ct23FmcQobDLeNc",
  "key28": "4fHek2AkQfi7LAkedkFJKABa3owNNnNHJ2wiXrTauqb9s6gehm2hgyo8dFNrYkymBFRepVSEFp6Qy73UP2rDich7",
  "key29": "3dcCUH3L7dxbSJrdDsuMw5toJC7T2qYmBLYx5cCviKzSCTC19xph1DMKWeXSFLZ4ZHX6X5mH8LpkhrDoELhJLeYq",
  "key30": "5TvQp6bPFv73qqJLSeY2JQXixdjrDh2CRLb6ny76vta7kECkSbH1U5msfvTJLo7VtFHBrVL6HPh2NNSJSUMc3dDE",
  "key31": "3CF9DQAeSfqBAFSBkw9YKS7PzKr551GQvkAjzRawmcQGxck9iccJhDCmRNj591R5aSZNksPb2FtNPYh636nRAGMe",
  "key32": "4FFL2wjcA1KXdrGF9XA2MJ1i3L1VJVeXHQNP3JXp6ev9EjbqoZgU2NmBWjoBmRnqDaoYfFNaugS1CqPKvcTcHsq5",
  "key33": "3mCpmeGsnfKpAUWUoFT9a9fJNJj9fVTxQY6eXWR4bMbrRrdQ2CPnGUmxnUgCH7yCUXHPLbVV5EpgusXAnWGTFz9t",
  "key34": "3EoMyRHahKbC8mCmw5b1qdPaSjFoc2FGvSqWUi2mAQuYquTx2oLbuikvAQ9fk4b6XYbKG3vtKHV1pXhRuh3CLg6M",
  "key35": "34WVeYjYYsxC4sNkRPiAiAWtkGRiRKvV3ooftR4T67kgqkLYbSSpUSntB3CCjaJp1dtJqt2vxeJNbWgvFzDzS8oc",
  "key36": "5ch67XLGxqz12wcDAiuAaKfQRoDcJShohGJjpFKZdkvsPJpzfVDJo93zQUevUvjmRECsLUnYRJUcEvmuggG4gUsM",
  "key37": "3avwWqxNmzZftGXzhPZHEVePEirYfJP2j1vnRLGunkoHAq7wRrExrD5LvGNES3Seiwwr2NYYruUxg18ekiTQHCU1",
  "key38": "5Yz1LpTzBVnRtzFimEQ4gwQojexHNMPqSjNNAv3eEonqQ8JUBxPNwhfGbP6av2YNQVeF1gw5aQLNHjGZx3w6Tz7V",
  "key39": "4KtwHDfWtkePZaomz5LJ44k9Mn4sA5VLq9RgCAgC3pLeLF68cmchsL4LAWb1oFLeCoiuugmVRhhMdzFVfFWPm5RL",
  "key40": "5j8t99BBwxvosePADVHjoUQYdZ4qWK7nz1hJUZ5VHszaFCVDnKKUDyAQfdMv4eH6RWo3r4xMwDH1umXeVMxVgqyt",
  "key41": "3YSGGyVNeyHt1x57F3yyEzbbXdFcd1XJM3YBFrnNw89cw4EYYUeb8oHef6Cn6GAkYNhWcrXjzrapTK1PR1TEB27U",
  "key42": "3ibvGqainfiFTL8ivxAh9b49sSML8VjrqJPBAxDDAEHPwDFRjAGWHdH1jQJjvcfDMZH2bWqwaUiCYtCbicHvRJ1c",
  "key43": "5FTTZ3Sfvyqax7ZdnG4ZWwwWkohm7tDvZ9oem7XBfykHxMuruTkQ7uGTEgU1u933LXVXjBD9AkGfqeiFezY8b2xw"
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
