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
    "AL5NbTGiDfQT6GGmZkXR8PMwnvC65VJ9tZHyAxekafCyGwknWcozLgtSPVzn7W3TzYD78SEPotgXBdcBLrdJxu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYi7HckDGvUYsj8e7gBWNLwzx4UjHKVd7D3R1H4h2sgWhfELR14bcyY7wUjCMYzdhmSbu3AEgYkVnpgNwh98dRD",
  "key1": "JvQ4Pfn7aJHV1UoBbBqiqiAP44kyFgFkwWoyCDTNWk2jTnpE9jbijHXXtxkfXibDpWAfiKfDRDS16qMZFgLmkho",
  "key2": "XmkqhVtZVRtX4LcfgdJEf9h4udkv5uPLdoEGZYp4EQSEH27G7wHA5omby3hB1cQrW46PbWw6gSRQStajD2ovygE",
  "key3": "54iNRHrUPXQnqQPENNpoYEvnsPmroJTfAFdaYxPArWvsM7pYoHkckW2KigsRUXFCQa8QFqSpBQUqNT5NQLdkpBTN",
  "key4": "5V52Nbsry6Lng7m1d42Pagee7zt1qeuqk4C9qMMzdWW6rs54V693mbLmChYNw4YkXRz6LcAgj5yUuwvhcEVKNJQb",
  "key5": "4EnY4FkYN6sdkWHnPKrgL73DfaVADHNWaJvo3e5LYGrV8B4ucc8v8HBRr8b2eeckWcje2DHwxzuTZ7mPRTYEk2AQ",
  "key6": "2YfPUMzp4zpkn5nvPsAbJM1Pfs6BtHh74jhEYui8sa6Sy1U2dw7ZAtLtqM5Be69A8ttVUs8tRHJVZuGJkamMmknx",
  "key7": "4c7Xz3VJiT9ftJ3aGTyg3SjHmDiBNzKj1ymGpeYh2Cjn81X4vYm1hTWCsTTG94zYsSQ6MJTEhwNuEaNC6tQYZbwD",
  "key8": "4caUVNcgM5Gr4gC1h9d51PkJgoWmDUEgkUC4fozu15GkWMEGAytjeZEGANFosv93EGRttwe5KnAabBqUY792Hq3P",
  "key9": "5pXr9SegPpo7EALp5ALEpRYYLkxYjeMvPL9FRGgrvdCJhdETmNhkWvTwYX5mMU2d95nrYAUnGSP31CDefp1kpwKz",
  "key10": "5sni4MB9DY23As3YuzWRrC3ZqdaaNygXa8PPbzB6gN9ZBjkqbwkeTXgwquRSXG9R6NLvwUWSiESqJeqmFPUj2f4Q",
  "key11": "3iP46sC7uq6byXieGj8Kxi7JVJ7UaGXjNPMmj5Auir76ygqf6ReyLYjGjw19Vqax7W8YtXp9di6TMMwNbqsx9ggN",
  "key12": "25QM8gwwJJvSdM2XAaFHr2fagPKiFzooPd7d8dVyUbRCNotkK7XbtxYeRc7GTuA9ZBnFFfvDdCsAdHgoizkozC6u",
  "key13": "5PMUCFh1ESELdLxGqq9rBmjmCRekjnxsKXfnBCPfYzzSs3uwGnNhrZ8QHhTCbLpMvcDpHpaoJW2j5WgwwqRtAf1f",
  "key14": "3iJ77stLsKGa3dQmgrkmGjhuhR2AVThzX7kQCxJANgpaEW5qBehVnUL78NrkeBBMy43F6uJQQzoieWukxtwe6KGc",
  "key15": "2yhjMh71NLeYRZBpQ9iVykPREvRnaN3CSiNKozRknMsA9pzZu3nSqKrEf97crz7BxZMEwsaZTEMhCHQDinUesqzY",
  "key16": "3D2bZppxTGc9McpyWnozfCkVJawKsmyHqUQ3BMd5Gww5TeWJeCPEJKtaaUQ5T83rz9Ee5s63T1MawiViL5SSdZ2s",
  "key17": "5bqE6quWUMx7j1Dm8m7xFYbAEDAYPhdJE8ej6PMJcCsHRtG3RRGAHCqD4Rx7JW8Qtd4Cmo2mMvYr76tcdFbhHvfS",
  "key18": "3h8G5ExoKdjq8zHNjx5V24dTuS2PNdwiLY7UjkgWiYa2rUsD5SswHA2b7DKq29xuiiKpF1H69T8qKQFYUSjVf2p9",
  "key19": "3jNUwYb6MR78wymZtZJZb8hkSwv2NJXeoUo18NHdAf7YQoSmyfBUq8riJYqQbZEe7fZhSeAYayJopiSZNuAam6TS",
  "key20": "5bBve92c2rGombSDYxrFvxmrrqE4X6j1QYzcZsGB6dAz6KeY5dsxPwvUooYZ8ebLBrmAmfdKnuVXyTf6LTUiTfJp",
  "key21": "3TbxcjXaEUuywfFHDTdWXB3bC2tDfkgQ3KgqvxdNLyjNdW8UuuZcXKRa7dqnGrS7AfiH12j8dCkma6MbzcYngbzz",
  "key22": "27mrfAhfrX6SuX4perZ8K4XKAWMaRBR8xxanVwNnadiccrW7atL2R3MGNPKTE35nj9QTfygZ4mgc6CB5zSwbMBsA",
  "key23": "3fgHL96VF3JJhURtvBVPnB9z95sfuHnkCRWPMCJBpats5SMrKKR5TpMU5aEZKfEJek25Pqcbj8zqhnMY4MJBLt3D",
  "key24": "3d57unSJbqucuMTzYAtGsRopCVz7aQ728ygKbBThAuA23QquWmqxx1rAsTVg9XVnCHme2njuhvb1RDnFK6DiY4Ww",
  "key25": "2gZEJ2KjrBp6kzY6hX6AN9Px1vqRFXNqJSa2NXR9GJjMfz67mDtkZ7KU8QVh5ZSjE4LDbAZ2wESx9J89iFPQJGTp",
  "key26": "4d2zz3XGe6eKFgVWnRhGWvscaQH4cmqQbdkTt4W1vFwgGuqMTYbv8UimqeihYf9kHgaKdmDhB33DGB4KAUP7mpGu",
  "key27": "2LGSEzjHSd1hM9wEDyk1YM9zMXsEAb4SDQFLNke5HQeteZykyCNQCWKSNFANv8cupx3xv2UwjUBMLuMMLuXDCPf3",
  "key28": "5CYiRb8bj5h5zUVRmp8oHNEzRrzsHEM7FtsEhpDTpHJMXkiScNXvjh39uYmHRmamCwUCi2gdjLoG9ur1z615Vebs",
  "key29": "2V4a2vX2oQDjmyBm7PVLWVhSExy44wX4XxPRYBXd4ghRVRRkXUboY1UBhP2yDG1AszreTjjhs9UTpGJBQDmc8edF",
  "key30": "3APhuHhPZkrNn41jiRZtFSq7dWH6PjVMgHKYzMsqB6stJfY22GAoz9qR9NKCVMzqwp27YQhCjP9Z6QRdsB7K53Pz",
  "key31": "eQrHPb4y9hV8es5ja2r2yqWyp8HA4yGLQq1Znrm4dxNEJudtt66xP77aN8xsk5AXmNTEX1wHkrPEetjm6JZif4r",
  "key32": "25f7yN5qkjhiHdJ8Qk23RHFPkMww3GN3cC1PF4ss8RAFPjDsZwA7zSgknup7GsjGEBGgqhWGgwNxQTG4YULjY3br",
  "key33": "2yeEP3oGerTv9WWhcpuGqZAXAjWeNDvG3asGw5KFy9GxHZwwh8L7m1YqJMMykbcYVTxWMGj4fkEU5JBHeZGqnedQ",
  "key34": "3qoYPQFspgMKNLj7UV69MfQx7tBMDuT52aHiuz6DhAjrtQqCxWEGWHXx2FLxSzfqaKTwubNKUHWiqdYGpe6LsVBj",
  "key35": "2VRGcLc2K8quXuYbrA7RpjFVg6HfKxPMgLVdiFvVF4hhfechDuZKSTnLREqjkhoeCTpNszCR1jRcaKiTRFUiZpQ5",
  "key36": "gxcsLnFKCLbXJ3LsSKVcj681awkeifz3pa3kpBexQEbLRpqbDNRRWZ8JTgqLWJ4T45sLuimUDppxXtbdHtj7yFk",
  "key37": "UzwXZfeAgNc5mnF1DkakjusJQ8EjgFTg9sN9MFGuyTCmdvDTnZbhd5TrFQRoZHgfd5PWWyqiW3LApvBseZf3Vtu",
  "key38": "Qm6UF74e1h8Dz4x1TFARD7DFUQogKBrRtZtkp6neYDZS2oZXsfFKLkUAYizHvcEyyyggSHGfDBJk6ECLqhjuTPS",
  "key39": "5J334RPZmWb89TFLrDBtaV3K8UfxJ5YHi4D393YHPZfnRtJU5xpWenZpmkuoqbWvWpUR62Zf11SghFJjxByZCHaY",
  "key40": "25aZzBsuSH5uP1iaDSYLvHmdmdVHit59u79Ge2YARDy9LeohbrxPSD7gMgGzGvr2bFqWNyUiAPp8uDGca6q6TLiQ",
  "key41": "2SUgwwhmYA5dvghsezgNFhNDejd81PU8MakE9MNDNG7QC9bKLVfZKT2fQyQZ85CevFgG8Yn1EAVH9xvKrLUbT1PS",
  "key42": "564qGeBc2vH7WwtcEtDTKpgPsr43g4ZSPX7ZGahRRZtnMijXhSHgrcWQDV1GDJucLXQW1S6mgywEjN32pW4afy7E",
  "key43": "4ekrthxdfgpFkTKhncvDW5N893mcScp6XTR8KdfzqAXeoKWueHxUC1ZFi6jH5NvYWwm4CVr4ozgjMjHaqyvvrR3K"
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
