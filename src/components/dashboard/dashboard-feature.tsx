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
    "3UZ7BqUJ3PmnTNwTe6aCBvtCpbbm4XVPoXgMEL5usMyn2YQd4gpdPrAzCZtzwEmSGMTqHzWtkFzxUkvd8msN4Npo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NxkymHeQUadFeZY3P53n1SPkwdu8eFj5imn7ToSswGh1CPnA5xxQb536mnbfjW1fHjAHeQdJn57MYUmnaWtUhTn",
  "key1": "3NCqT9mAhbjTPov9XRqvT53VZTzYWmxGjP1zjrw4Ty5PJp53HVHtrKb9SnyYU2oYAUfS9GCuRdEfsCeXpgjWMZw2",
  "key2": "j8CMHqxoVHrkhterRmgjHFfkKatpLPs38sZqyHKQcJpC7oBTLbJVpz22dCe1yHYAhyoWExHx6ZbqJP2EjiHECxK",
  "key3": "HVBq8jKwnwtrHQnQR3hVTfqSfDECZJjECuzBXTbcpq95qgW9DH3SfZhSF8dCL8q2j1PxM9qv2exaiaTPNPz4F4x",
  "key4": "4PkLTju1qBsKbP46erhegceYgKSFH6uvPsMA1dLxLuKmnKR5UZX99KbKFJRFeRpApYhinBoZgwbaHmKSWzSqH7M2",
  "key5": "2p51tAwEyz9gzpDJsX6RDuX4GwHp9iZEWww8SfK8uRCMhy45YTm4z1qvL2CMHnXym9pQxeR65dkPeLhCwEF71hff",
  "key6": "4cTZ9W9iDyC2L3cceV6oeJLB9kugtbMEMM6d3JXZ2viX1Za1qrrX6bzR5fExUVwGbZW3PKoreAKaySE7GnAhBRnb",
  "key7": "5oxaGTGVv4TLo7Y3e51HZNHjtHtADReYdmNWWydaYGCn1WDRmDsZyYcf7bmTQAHyrZZ1zFzD2URrASnRN5ikwhMZ",
  "key8": "2cWSCGVL1sqWe5xnSgxp87g52KA6GzTqxujizDNQordZVKwS4wPFbUKahzwPnT5yvdeWJjGst6GSVRCyKFm2c8PG",
  "key9": "25sZtzs3qGuQPhdZvDiDKbzr9ohkmTy8gXDKgTLuQndsRj7TPM9CXVw5PDfcGYZw4X8aVpy42FTxteBWdFrtaGi6",
  "key10": "35rdZndtYN6mE1RmeZ95gWxpR2dyLUxBatc6w8VtHhftpPPCokQUTEHCUscsLzykfVs9CjpwFz7xWsMsrJeEAGgG",
  "key11": "fArjiCXHqHaqgwzGYhSXkvzBNb7BYQLSgr1a1PpvnP1dsAaTPYCYwkRRHUUMKzR3zqdoicg7LnfTWM9aPUboU2B",
  "key12": "nAtnDS4fJUTHm8i2RZzrZHPxcRZ2bcUqDJLbJWJSZeRrtSfNpbxuWFDGyxrPzZJhC19ggDTwms9y7kRoFKLAnrA",
  "key13": "4STHBtJrqwBHnmg5Yxo2dNeKGXKBHrjSvWRmrGgKZGmDiuhhnsaVqMaFyxvfGRd9Y2JEUx82NaQxjVrx4Y9UHSqY",
  "key14": "34hX6hthZ5mjsJ3my1ibCxBkcNso4pRR2J7a8zJiEDaZJ5wUdqYBAVcGxvrDQAPkWLJx9RDBU8oaH8tppA5ddB87",
  "key15": "47tFabe4zHZezymVB3cs2vmC7Yg4dbHFsmN5vAWQsGwNbsnWp7P6ds5rjNVg1Bt68bjbZf48zspfrfrApSh8tnM9",
  "key16": "qVnfQrudsWkKEHBhQcfuJtgNGPJLnxNWLfjiY6U1ngVZGxMYuLMcdSWLmMUP6nUaJRT86MZXXysdTaWLcFk2Xh8",
  "key17": "4o19qpJWq8Hj6Lz6ysTL2Sydn1fgRYM4K8N91iumpK7sr3cdL59hSD1oqWgZF7NuzCms5xpF49oGULCfe7CU6Xnz",
  "key18": "62AWCrZxAmdCutQG9Ciy1K7X9Lwyn51ifXYPjXXcinrQ7b4pq5CuCELcKWQ9yzzih2Cpxwdd7F23i84f7FUtva2h",
  "key19": "4dte8NqaQTV5Zg6nnujiC5aCuSZNxAzj9mv36aV5MTJYoFJjfNXxWFetqZ7xuB9F2dvB6xBFBVaz9AmZqqGy61YJ",
  "key20": "bkEo8hMCBRiqZhDWHnu6EGs9joojd92nA1py6vVYHcyNBNhPGgt9VtK8gy3K85P9SWaBmvdTHMpDWCF2cEvuHGb",
  "key21": "2HkHiYZoCwHcy4ZQc5AsZjhkQXoFdJnztSQiGfMVVippyGo2e2fjeNXcjUfnsduCnz2c7Z7mf12ch79AddrCHCL7",
  "key22": "uJhTMqjFY2ijGgYS5uGCA7D3UaXJffGwYaxK6sQXVLr2VQvDrEeVQa32XTMb4abYV6c58eqeNbapphkS8x2YWQ1",
  "key23": "2No3cHpLfGAbM3EiEwUzPHBd56wWhKTgN26vdCL79QQcQXd7iFtt1Z1NYSeBU8aoZLDJn5L3EJuSRwMP1FJjRh3h",
  "key24": "qoQWpVmtsPC8GuCWwSYjZVSdNRExeAMnzyUWbDwe2nR8HytThtqgyPxRAMY3FXKQJc8pa6gEqxyFnhghh4jk8Q9",
  "key25": "2QUc2i59coawwJ6HBAVXGpXCFyrm5FgMy46QZ37xduSTGgzsdYb2VsKeerEqRA2uX7ez2uiX3RmJKBNXqak7LoJ9",
  "key26": "2zeg3pfAcj16oGHWMTNw6WnbEpNMafX46Kt1yYZuYZ5Mmw1rc4CECYTpfXWjruRbDMEUhbjNH7Uu2YQ6NQsfHGUa",
  "key27": "4NFwYDtbtwiVz2p6uZoHeBWQ9ruE9FwwWd7VmocrHGqQqF4ZwpckL5qgLG1PxfKsXiabVeno28S5zFSB1RJeRavV",
  "key28": "JGquQ31siAa4FcGkxJodx7bP4GfXojmzVPA7p7h5fEtWbwx8EG1HSwsu8txVJ4JQCxeTEawGncMH9qKFcLgLq26",
  "key29": "2qUY96WCtdMST8uKRbp2GcYob5ZdBfVJ9SWtZEMToBo4xckVfZGNPKRBuP8wP3DFT4Ae2v7ToGJja4zQkMasoeX2",
  "key30": "ccVWdrcSwQWjhTKeF5Pzv4kW8bkAbLeUkofSogDLQP7XEK3op1CoWaqPmjvxWb8YJLvSWTrFt85qn3mddP5DZTB",
  "key31": "zdu3CvTa4bNJoDCZQDU5QqyYKuGLexaUn4sPGs3A1w7hVd1rcCVJFdKgZXAw7Mao1HUAhYYXeVDmC8QyrbyTBaQ",
  "key32": "2yqKU35hCoK7tSurtzX8LTusU2ofYwPvNtA47Hg5o6oDRXREZaVci1aW32VfD9oS7sAHmYEwormzXzCM3EJFwFkW",
  "key33": "2vMTVQVaRWSUmKgwanTVQNLrDw9ibTNMmnG17RLK1QRdgb6VLcDsSbWb2LE5PNDtPtR8RXYGYrG4jeXGHEME7N54",
  "key34": "3VHUPht22SDcDB4AHk26RZcvd5i3DWqxLd1pWHDeKY4ccZxKmTmgarye7yeBtai8wsLuVUNMY1LsrbqMYRh2rDPP",
  "key35": "2xyjKtYgDXdJcbq9w2NZgbt6i2CfwRuZYPNbryeBjyhkvK3NxhMtc8rLb8xWGTfHVtUzHHau6YWg1Se2EjAicsh7",
  "key36": "5PmZaX27H44zxtdi7AQnBBQhCJEUvRDLvico7rj4KCpMgwDdsXABfk8J1QMjpS9Wf46hJzSmFtQAAQGYBMQQWRTj",
  "key37": "t4YFKk6bPz8ThdG1Z2JM15qbYmSv5NpRHQMHaPovqnaxBa86bAq8mqndy584LL7mXYgXSACEe6gTVRgGvY1P2Kc",
  "key38": "5NJYockAsJnoqxaSwK8h8iZEXARMHJwRqDXtzctmGBUDtLSpDHShCSKxAfF58Ld28KHAMrkXPdHQBQhditZgiWfe",
  "key39": "5kgBj4HgSWyDcwK4vfZALJVAAimjQ1jvboSHxGvircYzaF1CYY49HVtDFcT8CifZHnXM9Wu4mJ5g133zhLUyi5Nz",
  "key40": "3DtPgeVZnchdd4DDmghD4abHp1GzmFWmmB15v9ESvf2KYNvQiroXT79NZG25pRmAyTijoC49cKrfLufJdRjEbi4x",
  "key41": "45ArXp5HwPkjq9fpLwcd4ad9JotP7qJsAuHH79M3bRzwucRBnuhbS2nhr7uuYUFMDHtxFW1wmGsKUprL3uWx6Nv8",
  "key42": "3JpXiRcEQazA78y9peGK1Xuem2Was67b6arQf9UAhKs3FqbHU5eiuziUdT11KFdWv2GbVoCnr9PEQgCaVh98J3NU",
  "key43": "KQcRQnKpp86k5sj2un6tbTDty4BScmkDZk2PykeFsVHHFaRqUcPtT9yUmaVS7tUqUfy4wKviaXya3FLn7mE2oSh",
  "key44": "2FTX5SSuQdK2VXUxvjFP8JnPLJJWoHzDSrph9mwXArqHRwsWXdJKyD1L9PPq1wSbNWrkjwAFydmUKA4ENhEGvoAF",
  "key45": "4DHJVw2qtU528W9WoqrHLTVqbLfosAYdWa2nDQEJPf1qvKSBUbz2vBUAbfXPJWxzG4JPuerEHTK4LG5N7WRQmv32",
  "key46": "2V54fhfassV6UppghLH8iQZsdhAnCdwGHgHCowsM8ZFL23pPx3SiD24rRCRvPX8u6BvkHETCvg8B12jKQ8gAVsZZ"
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
