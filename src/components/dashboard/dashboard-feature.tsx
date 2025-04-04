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
    "4bqnqcqDPsMmac7P44n8GdakpQwQJo1UvFA12LoMiR9XNGMfRXR1YvVSxPo2q2pS9HqvusZd7nkZ19xFga4Hc2uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2aAyE5nw9w72fCEpVPALg6bkC5qk2mE6ZCiHgVUotzhU61vDo7iPV3XHaHjxvTeE4ngvjt54xY4TrJHDtTpVDv",
  "key1": "4E57tbbNS9LbTu9C27m7UH3tyTVaPfZCjW1JnNXyJw55minmeR3rm1fRes7PSt8CdULhqQWZJSRk5DJupTSrPFkb",
  "key2": "3HX4w5uVsMuC6mrQW5YDd64Vi1EgpdJegWzgs6255AZKwjRH2JGhbRwutouTJUY4h3hFwRGAaiScncpnvcBoYVFS",
  "key3": "FFKVnBBuVsiDBBWtAYn4jAjN6GHTph7rPKjAp72suef96fnBLApQJqjypks3b89ec1Cxf1xwuPsLJxMsVAqXb8g",
  "key4": "2Rg8BZB7WDrwC1RzqHwdf7Rx7fWTuzHkHDDKoU9tmxowjpb1QrdDzdsdSRUzmGJ8uQoefHrvWkP6QgxCKpkKQLLC",
  "key5": "5eDAw5vuY6ZWdqX8yCumGbL4yDUrN8K2iMctcNQjSMASWGtDjppVzdYa17rEYxSF5AnSy9sP4P7oJrHtUmUYJa9U",
  "key6": "Ch4fha8Zpt3FrYr42DtUSiXqUo6dMRodMofWLfHw1qvMFmXTUDppytR3kX4fSNJLKfmXys2znZBAmQQqrBXiJ1j",
  "key7": "5YVJHCqkNHnS3dyrUDdnsr2rqCSg76WR76Nw6JED8JQpZsWeDrkXTdnKH3BtJk5JPce7sFV3KNqgg9tDiU24ytza",
  "key8": "APPRx7b7yKfWDu8tghC2DBJtmZPA8JnN425CNXdtkt13kdLFUAMWmR5tk1bVhjhaZHrpff6Sx3niKnTjEPbgk9R",
  "key9": "4mrk4JzkRBM6BryBYc1F8oMcpUVWgyqQJMLqzeuCiFLEKVozizGKEPDW37WgwbuW6Xpou7WPMtwKU2CBcqKuGZxk",
  "key10": "3rSKWAtb3eFdVG3q3pSxyPzP4865x5LsqcYzyB7x4eBSNMtLhjgRxg6ZdLrEFtmLLqc8qnJ7JMWxipNQ5ZFXktNn",
  "key11": "47E8f6PRAczE3kHZxr6kjJdf5G4TN6cqN5kuAamiHsXwL21e3UkiKtERBB6aXPPqapzbTna3xwfxoaMe14ihFZpY",
  "key12": "3sKKsLiSES1EWbkMhYewDRD9duiXK3dT5DLfAFQD2dqiS4XfSJsd7JZDL6CJ7Lc29At6eHXfpbYTfXTgRatzjMQT",
  "key13": "2tMmHSjeNDPWatdsfK4hVPPKXnLTbguaQHtaY9p3eBrjx93pcWPemwyvduGFWFS1b6Bgdt4shNhrjvkjt6Qx6Kvo",
  "key14": "3Qhk9f2hkbJfcwHuXjCLHbFMUPX2uHhvaRyCteobDwDnCuRtyVS4QuWXwcPGxUFA7QbvaatX2Ufn3HX6Hp1RTjfw",
  "key15": "5SPbNfeNPFyrFSCRP35pDzDDY2Eo7q1QgKsqoBa6FT9VdQoGdrhkqXpK8zryX6Yh8wwuDuPjaAG7at1v3kZ1HCQn",
  "key16": "4BcWwR7CNFfuzkfUt7jCZpELYJK5JnqUVSFtwAVXYdbEo5R4i5swPvusBksKLfoWfEhFzHEpoF6jnhtuLmTH6RBo",
  "key17": "5HKVAykQoFGpfie4wAMttxAKBhtkS4ELsn65MdHyjgpRgm9hWfbv5xT3xPCRBckhrziKSCXhw7fMyuY3xtLztuZP",
  "key18": "2cjm45EQWfnPEuYCJnd9oeNKonfcVrPcBuVAyApuNFqRgEdjFWe6tteYix6r6eL3PVewaQYBjaeB6DVZCdPJSgvA",
  "key19": "fBT3VgiRxksBXXD69hKntk2eEa73gNjNGaGk41UvbUwPmMMuBmKQppaz1uoEQPXZXJreLssq9LogfZ8W9ti9TqM",
  "key20": "3WuT4GHktk4JRYiqe45LNoNcweRLmrg1YgZ3s2Q9A8FeiVwuUnErUq6HtzEiX5Np8PVTMSPvLC9o48ugrGLRBhUj",
  "key21": "4RUpPJh9aDtJ8DRHAZnavmvH3wB7H9GbqF6XP8PHYj54wqJrdMwNx2DebFKtPEu8cU2MT4RTKVKNPS9UgVPZJBnc",
  "key22": "5zpjDRs2ZzB1Dc8rZ6kRkeiLboq16DDh6AjtPd4kgDANETsEEcBSvUMay2EQhCqX8vso6UJSdPD5NToqNoav3wx7",
  "key23": "4jXnaMeZCCCztVqzukbzudQ7oTtoyQG4rEc7bANtGZJg28nJUR2hCtjuuNaA35fEALAkCZPhKVcqmqQRDJSr7PQV",
  "key24": "JAAnqMTsQjayzBGpKVgp2biVsi2hRVy4GqAvbtRer8nxsHhuP2vFJSgTEuBz6r8vVn3G2EPjeWoQh4dJMC3rUxE",
  "key25": "5RQj8KdHPUnqHngmrt5MmfseEwWSBMAM1ofZua4NdKYNfZwu5p8bWe42VMNHWhTUyMoonLZWJnqBNdsvg37n3U6p",
  "key26": "2CzmSBmij8A3g5fmuB3p3D3qjLZS1at8zvNqjekY91Cwidag9naAMpF4vgYszCe2x9ZYW9zEStDdRdGpxRfreQiP",
  "key27": "bziC66kbUAxuRK2w7B84in9UUQUhQgE8moNEPgzyACnJLTGHgUAbvsLtMrH1Rw34foj1dBsH2YycY5HSTUtz8DR",
  "key28": "5WQbD5bc3caoEpTRin4dzbkuedAHh9ib177ceRxTww3Xc5P8fhKyVCCzMeYrnSWXaE8H5KZhHngkFwCzfZQmkFzM",
  "key29": "2yoJZ1mkkJX7b3dMx4QXFEmRm2yKsPq74U7qFqQNnnuMzuyiE58op7GUpaNdTtareDWQnuatU4nVQaEjB2zonKmG",
  "key30": "5xZ4Ur5SpAQb4rGJ2NfDpCDvy6A1pj4HS8i1MUbA1zE9hHdg3fgQYLSybMhxLvjErFrirUZtAESsFDbazFfPJC7z",
  "key31": "4pGV6UXyxz9FXmbUca3NtZ29Yf7QQPHLtButbaoCfQsNJHKf51CbTHwfDwaRxVNTALjTdCyr7U7fph3eRaj57FHq",
  "key32": "3yE8psC1deWdZzgcFMbLcjHbJ3gxKwBSTCRFgwV4u6mzZ5EMZMKUSAnzTy13FWbPomhLFU6LMdfJ7qvsnkzCvhV",
  "key33": "4Vky6YgZ5L7UUBwTM4Wu6DbfyaGD8hb7nvKb3uG1wD9WUEAJi8RBNyJzLD9m9yXG5RuFt1odPs3Rqw2w8ew5QXss",
  "key34": "5CXUXjcwRiUEUYwdKDfcWSCHDDvZhcsRt1ZZUuowL5BENQdnPLitdzRg9iFA9MS8hpt8jAzwF9Gt2JjVszTd8zRz",
  "key35": "4WZq6Y5SQTRUk91XzXDeEPHxuuKKTRyCGBS21sEkY5jgo4upRf7fjku55MZEKvhEmDNJVXRH6eLJ9NBoRLKbktfj",
  "key36": "5Yg5UgGsWi3q6cCxgJFRz8gqyefczdxwLo92JH5nEi24B2zHmHzbYfSJEBLxHqr4iYBZfvUZ8UnF78M5JoKAQyEx",
  "key37": "2kYAKEG3YK7cvKAnGpqtg8JV3zW5BaDkCXiDCWsJUhKTLfQ3nZAJfTTW3bVAtjBj19joC4rX9TtQPY8U9tmrmSL6",
  "key38": "5sBjmemDBCfkBzeyTb1uCh552DgiCyVpSwo9DyuGoT4zusTh5cb8HkSYv1qbc61tu1n6yVnLU3QBNZK5UJM7bPpV",
  "key39": "3xyKLaGcUQJdt2sUuHane4jX6sYPLApuRJuGvWJZeye5Ba1AgzJWsFtnp1kuKkToKxRRzUsf42RDWMywbfVRvBFu",
  "key40": "5P5SdbyFNtc3BziaXMwD9zyNLRysTfZfpB7zj9KbiuWHhGXzdX85eMHYqEvQnUghGXacR5hQPj5FPaQ7CbGxP47p",
  "key41": "4SwzdQse54opaPP15ev8CKKjfWLk4v3yQ4pvvSoDydARGxroMJjpXnBf6snceTH2BCEiqTQzAVFP4YBXWoViyE4w",
  "key42": "3vR6YTPMBXjNHVboV3GcN3d7voT4QRAQPE5kPWpHHiyT2goBo5gQYVYXZWYKjdcwUQkLLLndEn8DHZ7fXWeERFcL",
  "key43": "3crhLHsGs7TsjdbrF5Ugt8h7wUwvDpGog9TunxWBwCPZBr4uHDQVfcivZkrDMNVdMTGkrv4iDtgX93NiFrbbVsGo"
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
