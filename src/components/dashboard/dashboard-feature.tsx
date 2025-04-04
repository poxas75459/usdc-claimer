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
    "4wCyk4ETQpv9Tpf16hBPVgjYxVFjCAKd8DW7jJFk2Cdd2ESeTQucEg2ZHFCPoqDaTsd4nuNuhGmwVQsALf65sfqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QxbAgv8wqDWYDdqATAhg4KpGcjb5bubWkJogBQ9FtFoDpZVPjunxJcaTk5wJUmRHwtMCm9UBUZZCGzTiFc6CeLK",
  "key1": "5NAX1ARTDdVptHNuGA2mujWrengf1hWYTaxnNdrU9SdEBPW236tDNKXsXFJfAQx6nzFWYgi69w7ifqyabiCiaw81",
  "key2": "4HvmdxfQLUzUPzNU8HqN2ddTkH6koUy7YrTSaUPaE1PaFY6uLXQ32h93BtysAfst5Rs8jek4HJfz3T3GM6WWsFGU",
  "key3": "UDTnpYu2BTKjhxXMXYaasugBoCsipko3Zqapi5Wi8EBvtSb1kCACA5eB1sQZvrxnjQdQbkVWtUcgPSeZPZ2U5oQ",
  "key4": "3ymJ87VHJL9H1nCympxCKpmrx1xYmFRt2Gsqg3pjiuiam2ybXyiD4WLY7e7gMAXcYqNoum5ohiB9iUGmKb4mJR6C",
  "key5": "5AvxCKLijo7wZFiPv58QApUgNUqhPLFmjc8VhQNzPi1NvzusCboAhkQqyp8Tek8HaoDsXPytNzfoAUbx9jh89AAM",
  "key6": "4FC4JV5EkG7U6U1v9ujLkrWxERD1zdthBSUFYprRYWQRTGUJggfUA3Nsi5ZpzmGsDnny3bBLt73a9kuvo1aQun9S",
  "key7": "4Gy1AFLE88E5G1XcJHQjjqmgoqQNNXTZ4Z5p3Z6uo5nvqJEiAnDvfTGT4LT48WeNPqkYc2H1zXPK3uWLNtdpMS2n",
  "key8": "2eXACAwnwoFjUQDg5HP7sQMk4tWk755epwnEtavpF5GeSS3rF8YAyo2aNG69uTrZy1svbc9ans7pKuf7dsBwzHPU",
  "key9": "5m4Xpe2kJjVSFGzVdeJ2BtPrtrJC8oxNpJyXoCqdQjwj7jitnLhNenoDoo8HoB1dxievpLtH7KZ8Ti7LzbSBFUG2",
  "key10": "21mF2VatoHdi3WDmM4oqEXduJ19JxCoJ8dVRXQ3acHzrcbiJ4fNqwuMyj8bpxsxTn59DX3gM6JbcxTPspRvGZFmV",
  "key11": "44MJvpjE6je5Miy42yKafRi5eDPrrgTeTqjfziFziE5WASVP2Qw3CPdwuv2X8fYMwC5mUAWZhFxNhyTRKCrdxVbd",
  "key12": "5N7zM814SpSRBGRjwL3ze9Cfa77RqwdPhEbDiacCyMcm8GWSWycztTzyhsfwF4aiKaoNYHLxxZrzsKJYRwzzwvui",
  "key13": "58Hdv5ENcsfGZ9UXiBPub817gFdX7nuGrrpak6ykWHqbPbjLVd6yboFvNfkteA17EBXofSm8XShtRL3KSgqKjUCQ",
  "key14": "5DaifpHEADMDfyhYXKxxRDsnnrFxxYGDBFcyQ5t5MyPjCJMoFBRRQw5DVfAXgMDEPxZwkAJLLRN9ZsQGbakfqbMD",
  "key15": "3mLLStqMpeAMeH4bQa9KNSqAJhZRn4opevuzJyWd3s1XGwUkKTidvPkX6C6nGtzTR28YBnjoVEuQdWvCsLs5WaHc",
  "key16": "CBQwW4SamshP6v4XqySuRJkZm4sMDYFEtEhipQLYPfEVy1sFUcoKkaJtoXPFBvhfSYY2QYz3wEdZQYh9zaLrwDD",
  "key17": "or4XBKV5tRGZ9jaAxC6o8JsQxPCfEJP3vi1JwZMVP5gNi2YWnbsX8Dh8RJRXBVVTXshjFcPNgez9vSBcThsGCGM",
  "key18": "ugv5uAe2u5vfQUcY4YAK1eYNnLeevn12rEGmcmY6MaVEjbFZbCH9q42oUBzVG6YDurPpYfsuf8LyruYhNq6fqgQ",
  "key19": "3mf29dN6WESipoWxNNzA9cinmTe7DTXqUPAHZmEtGSKPCPT3ZrEGAqLvsWt2ic6zvNwBmDc6e4nHHZ65zreJoBrg",
  "key20": "9eim37knNXuV25hSD7ALUgiz3SwD2nYBsQx3Z4NDHajtTGSmaK9octFBV4NgeaXYLBiDqqyagaqNtEgev7G1NoX",
  "key21": "4MhTfCQUadn3aTaXxEoeMMjSVt9QVmAoPeb54VoBx69LkUipnzHyecjGnffufDD9kymta8uV4Z7Cqxs6zD5Zqj8W",
  "key22": "7mtycsVGYXaELYpe7nw8RWiLAi62Hk9npAH32xtaJKSD6ZJUKUsHnkWF8E25NDKPcNu5N6LB3eAZ9HYQ1CtWf9M",
  "key23": "5HTJW4AEZikkKBLXUDKzkz9ov7TvxJA8scgWcBpp8BTL9rVccwcdVyrdUWyvmsKeBVkwaaUSBXKXf4Pc3mbL83gK",
  "key24": "3Qzdch7Pm6YHpSzdF8MeGsPQXh6uexeMRahK64rgB7zLWPWtxLjFVom9f6toGnM7oaVmVAQTqojstWvdgPU1chwy",
  "key25": "YUxH9vU42ASPvPBjhA2eYELcRptWg8PJeuHjx9xSKT2JcpJwGFWZPkZWoX3SfWfTnUyWPpsPjL3EzMe6ZX8W6Hj",
  "key26": "3jjS6tacSVsuoz9VHjeMwBFEVWh8zGQKg15D8xnMjo3LkWYtgPTpANK5zJ6iiGnWy7Ps4eeqzY1AAagHJ83MvHMA",
  "key27": "dke3qxsgSze9ywPYv1yk29n3R6D1YSGjW2GjaCEGu9TuBLK8znGGSZh3xxSaeGhFH3sNWPQSYUNJuvHT3uFTuK1"
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
