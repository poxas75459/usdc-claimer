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
    "4yVjXtpCpmt95gAAd5uR1VvvrJVZeE7bYVkC44V3xVX3g89wDuwbhWGgZpJZQAn5owNwpqV5n1uLHWko2V6wEUUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "211W3tXV5AfXfhf548JAf6LqByd9Bw1uwyCErJBBkjBjCQyQAkrmK9EscAaF8p7VjQeXjY95bq6RVCLzdCSLsEcU",
  "key1": "52tLL1eAMMZohwcQDN5JfzGnj8DcLAnPfYqaVSoCbk1LsLEDEScoEGExYretcY17UuNy5pQ4XB2f9JrkCGMMyYwF",
  "key2": "2verrp5HtnVqVw2yvnMFjjTT9KjRBs5Y5SKykvr6yM5VjbZumHhz9bbdiq4q2pvmmFmHyCcphpqRaxRL75iZ7xCe",
  "key3": "4AEe5XskJSJJgcANEr7r3D8YcLS7Dvwn17cY6dpJQQWFBXnHYmxrLsDGV3X3EriTg9avRyCKm9zdLwiH3Z4HQjS4",
  "key4": "5rE3qF72Nq1VVLh62Wm5c2RR5iznkjErK9um3ZoYVSZ5Ka2EetQz3hcPHVGsUccZFE62998PZ27tuaByRtRmU2Re",
  "key5": "5n1gQZRprVcjz4L71yJ5paFXKm3WfFmfbaXqBfbUB9jm3BvCjUbxYxoHznw9PZKFuKHWr5LHfoaztXq7sqF1Xyso",
  "key6": "z5XHnTrWbKgf6D4PhKHdSt2GYvZCXETxg9AQLUMqTn9ZqdMehSbKjbeLbwXd2ekURDCGXRG4Csg9x9z3TmG9gH7",
  "key7": "3uTqYm25BapgdDigPi7QUJjLuU3dMEamFdWeZGpoScVxkNzkcUxBpbMM9EbLqiE83HiaUDymQTSKr65awRdao7zK",
  "key8": "3iPiGQ7r6L6oJy6sn9KpV2UXibpaDnJ2dx7MhYy97p8voVDMLZHU4RaChyvwf1cAb4APDUALmFzh9wvumCrNz2Et",
  "key9": "2Mer3kVV3uJhttTytZM9WsxtE7g9JCxcUjYqYPSpHjdNzhsfzCJYp8VuLBPsp76Btw9Cumz1cKJWNoQY4X9TdydF",
  "key10": "4pnZS9TJY2bytwVyJScC9huyPL1vBkYZ2XKJEM8Vdwzu5XHJEH1xKwvB4YnxohPmnjX2Bt1ZR5BqqbQUxbQpjy37",
  "key11": "2RBA6N3UP86BmGjJP6xuqqD78e8LGJRbjcw3WDEbcCa99dYkVznqkRqAWdTVRZ7UkE3m27FKKDWHbAcJaDCmKXLp",
  "key12": "41WuvBbhKHDx4mDXPgE4oRmLAbh46osENZ63msLfi3ALNL9YFLNoc1vg42me3yjsU4ZvSJrQDtG3oxi9Q2uyLNwb",
  "key13": "2Mzhbn4G5Mp3DmcwxFqzGGSqWEx3UufAkHrSk9Fjuw4dBdtiKyqAVzZbtau1vvrPTVvL1ay46TB6Hyhctz8ppHGv",
  "key14": "5GYVCza2RpgggijRGZ5S71bNBW1Wo7SdMD6vjUaq6sHL8ofghG8vdJFndkBvUC1s51mgGG5Vvu5gAqqSQi9wHHbg",
  "key15": "5cFFrcywtYvLjUoFYGNPNix7gtyn7DSEkoen9rE8vsEDLdJPKQiGNTEZeLmxeZbxN3fE7J1ksm6ygDxoUFeS8S7q",
  "key16": "3SBSNB71XoVrvsVjRu9sU9a5waWgod7p6F5ggiJkTBDY2TQh6GCDQ9nq2xMQRgTro4ZMCNJDaZgY9YNQqCmC2GcU",
  "key17": "2NbYvjtudujkMGxMd2pXeyhMC1RWnGeD5ki1An9zXYC9roxWTUE1zbGuXCzMDduxcEEFsPzK94Mm9qx5FaxiVAoc",
  "key18": "5nwd9kZ3EZ9quR6FtFaNk4Ej7AJ4wBzCRDqm4yRXfvDXCNPoTdW7qnG3P3v4JGnWkAAWLxeZwSBPwFoyL5XZWLRR",
  "key19": "5CJYutxMsiBGW73himssQUUcSMB8eajohjDDv6kMdr55hWa2vczm1ungbRdeypVkXZ6rmU476x18EBcqaGDb83j9",
  "key20": "2fnxPRswTPr29T4koo9hqyN745Rscuiy3rSUkrsBUUvtwyZBC3BRspdHmDF4P2LFugv1bXKv1DVViTQw15fniWxi",
  "key21": "2nyFFov5Wf5dofuNSdwJWEtWy5nZ56Dfdfk6B3rXZDqvPf7APSVYZWKdQTAZoxCNTzZUZsJRBoRpbbBscTgF7GA2",
  "key22": "5ZzRMHcBcVgroB6M6nxbqbiJy3RHngLscaMUnMBTrGMNp5DMvLbBBHDQUEB5orZUPnz839dpoLVf8FZXohkkgjPo",
  "key23": "46YVZqff2RDA7TPja1uQsX6wQGo1ZXX4o39ZeUNfTqqq1s1KVku9Xf4ytF9ohNVBBmFJE2wgjzGH9jsopE627mT4",
  "key24": "2iYHscKvG5QEa5yMz5bERMXCKv8gfB4ffkDbYYLyaZagknJeFJ4SXhmyfngqfk8A13J4xbPdokL5xn5MUbA3QjaH",
  "key25": "5akzCEerksAwEMrvtJxURVdKYzjgc1ukbcLSupMgKPG3fHhJR6ZJQ5UVLvczcdNbQtCXQt1AU4EjrX5EZac3viwd",
  "key26": "5D4ggo3QjnAB1Lxsvx5xYzBPi3jYtSPNABqgWioYMiU65LBk6SYbbSSsb446AzN4wX4XHohzcMYQuD3io5deEBhB",
  "key27": "3c5FygE7Es2ui2FBknXebfTKDgSnRAn5Muqns1X6bwUMH2aZB4Sx8AvYVKpLsSR17amJJYYfYdryuwXf7kdvnxP7",
  "key28": "3QuXUpEnAEo3WBQ5vADj2srJAMoDSqoVmDuPqRmFawZjtMYZYoh1Rh62wpQkGBWvfXgmvpUnhfgsA2pmcQGKHT5o",
  "key29": "434iwyTDBnpMVbzwDzudchzuW7UADC6uWhnLmFLWXQeAoXjYszyd9TfisSQeBGBL9gaRjgCrDWEYUYmrjNzCwSo9",
  "key30": "kwBWgAEYHCBnHurF6arE9opp73MUCkRP2udjxWGgxurYFJE4wT7QbAcnMZ3RP9WUrt8EuinbaGsyLLjNwqeR9yD",
  "key31": "2p6yFXdbn1nqNXJvdaVTR6HepmECq1tpdsudM2FAPd4sVJhRvqZpzpvtHufhZNhUdefMLnVSFN4giyk5iKpf2DoL",
  "key32": "5Lq1mGBXyewNp9W7v3M7kLeT1EfGCGM4dJpsFBvEgZi6hfGoFWb3yEcr2jxsnis4q5UDM7cpRML5Wpp9wctH3Te1",
  "key33": "2B8CZJ4v5u8x7jDNAMYjvUHUUKA8BjcJmC8veRMsKGdMUmsLKd33pGXAswqKx4UcmEsXSYT4DnPwiJG3cRRCTvqS",
  "key34": "44kL34VVc6pwwZ2K8EBhzqMp5a6x4JDnVpe8qo1pfCowdYE1F4FWQFTPBAZ9iFv8skKT7MsoX1iNTmpr2gkW4Uwr",
  "key35": "2EwaqHqiPRPrv7F55LhKfvbQ7M5YPfCi7f7y55W1io5aYQaAoakoEpQ3qP34zZEKqMF6y4msQszqgz6nwgAKrGgv",
  "key36": "4gJvzw1pAqyLqpmdza4HUgYpnDQUSXPu2dFBoCg1hMNbJ7RWKRmjEAYXaNNbKzGSaQaG2KnPbJmCj5cAQtr38kG1",
  "key37": "3bGVuwTrSqx1aTiXUCAm3Bdx13pVpyx9iJrfZzVafL8bE92LCfBu2wdCyXmP643vEsLfW2PXFRBZQRyPZWwL8Eze",
  "key38": "2s3zsmsKirc9jBfe2T11VqA4GxnAFBXbVSxYMV3tnHPdMcTGjwzfaodpZsXf4dQd1Z2UR642TNdiM4bCNdQgqZBb",
  "key39": "4TXXR1EFActis2AE4D2tbzJf5FxsqAxGHBdUimZpt7TsUyJ1Wg5tYLVWe6Po3GLZuJsnftnk3kNtaxaHiRscvWr6"
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
