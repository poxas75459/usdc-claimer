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
    "54Nyd1LKPzgKMvVShnRw2mw54rGCWzp51pghHw3tG2iNEmL6kRppxnQjaJL8UKtoVtbAega6yvgSWnQajghYsaso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5kgvSikfYTm76xNpugKNUQ7638tV23Bxni9S4Y1N8hH634FfYq6fsbABzWZZ44SkyfuzYRwKcuYyKCvC1rzqV8",
  "key1": "5qkXasW9WTTFprJDfqAWkJ2MenQ4t5AeNBGGa94HVQdjFE2dw7fRDZDtHrQbJ4y2XVadKq4cbNBtk9bfhi52ZaF7",
  "key2": "2BAGNuMEsAeiQTsDgA6t2psihAMnzgS35f3FAfcLiw4EjbhpvoSHp81vteWA2Z5EtcCJq5KrqF3riogMXygN7Yaf",
  "key3": "5DJZzNhH8mrg5avCzNhhJjQv8dqoWLQvY1mWszFTpwYYKcwJUi8JCSZW5kXzN5b73JiGqG9QYSm5yK3BekgUXwW6",
  "key4": "4RngbMQTFcU1qBpXirekabq8kQ1WaUjrpobwkyEBChZrSny15UpHJPLThPMpYE4EayvhRMinvbkrYBQdnfMBSat4",
  "key5": "5Vd3Bk8GRsgjEGqhN2JAm9rLaPQ22EqctbjiD2msPJBGWEMxXs8BcJSSBiYmZCq1JmV9NaSzGq5ZSCrBUEP6Hb8r",
  "key6": "4SSN6p8AdLChYcsL3JY4ivok7iBdD8FYXj2WJBCrbh2oq2k57eedbduKpZBXiq1UmuhWYtf8wXdGxdTuPVPN9BK2",
  "key7": "2DHzWT78AhS1qYkpdgxRNjpNEcRbD2sEWSynoPp2TqNtpgCofN4jhr5KMi7BfDS7S8UV7pDTxRKDDghoCFtMAmLw",
  "key8": "ZGuZzKmp1MJwNDhKzonMzLssNF67fCM6WrAqow9Xr3jv3afhoTXJSnbZKHFEA8JsecMQz4v1XgJ8cF94Gz92gyc",
  "key9": "2eXvMWXAYxzUQ3oGV14kR7zCrgDUsTduCjuM2RMWiBUhTh3TJAwfArVhSPgwkE8KBdU933uPFsGZySsBovH1XEGi",
  "key10": "Tfkw6KX8QpjtAwtkwqVeZuxEAk5g3WYvPmmpbSNzMfF2NkXVc3StEq3cc7VbcpaA1vhRTRedmVgyanjaVM611Pd",
  "key11": "4spaQzpLRcpQumWdZVRSJqaGP9ptpWDWsWDxph4G9xSehg1HuyWjLAjeM25wUYXFU8F6AhGZTtf29xbrfowVanqi",
  "key12": "4zhemEAYqZNne6kTQwLeJ7po95ZkAYqKcGuHCC3vXqWwaukYTiEdK3iQXa7SfnYW5xk7CKSnaPbMZFGuARVBF3cA",
  "key13": "ok6EhnV9RJVoPMyPJFcMMszJCspr8t2UicNaDAvdNwFfye1n59qvbBb3dUJMkFACBb3JKTUAQfERN4MibUX67sq",
  "key14": "pLwXMd5t5G7scgzL8LjPxfQEZKPSM3DsL3ds3dKMdUWKHDAzwc7cgYd1qSgsVnfFbYBBdKLRZztwSN5CUNChsZk",
  "key15": "35FFYHZcPR9hnaUtqQErt66JnURKKUsMAQ1RQgjf6K72Uc13iue7WSEMNEYdo3XKL6XCT5Ptfmr6H2gYYyYDTpzn",
  "key16": "5o6PPvktpSNqbV3BPHPSYZp8pUrj5bEa5Vg4PQR5whjUskurmQDkE5G1d7MiJvMySXxpm8qhkGzR83v6EG746kyr",
  "key17": "5jsASdLWYhZTu5EuEZgZi16vK2a7RZcTXTkc35YX2HUUXBPaU33weF9mcKZJwxUfjEPksnXXkfDWtS5WdkULHCDf",
  "key18": "4FsRwoYRs2rZzq2vm1PzYLDaoTbZebaXaRtrEuZzYGfQ2BevwdMjApR1URa8mWaXYCnf93D9fgmHEofDSKv2iL7y",
  "key19": "D2YV7ySNbZE9FNnNQ25E9VhFHfKSug9DVmngSP8U7ZPRTUkB7guGzyvqiFLawt46FXETAwgkdkSuRcyp7X5cuPE",
  "key20": "5zF5oZJDbgQak6mAFbGTDJ2cWsoE42Fnfu8rWEWtVbWsTX3WJ3RhJxzQJZ2V7kcfAUiE72oYrNSDLnK6x5vWXFU2",
  "key21": "4VCSjZQdPedvJmxoRY4mhjB2qoDzW8FdHtoEzGLnDKCY4MfHu8qQg2EeEPogaNNEU5yrFwF9AzAFuKduNacAAUKu",
  "key22": "4gdZ7tyymAthXFgaKQaeUTQiGmQ7BbjgukWgyB5wCFVh2qfeBXKBDAczG5yxXkMzucxiNg2zkVuhgAJnTz5Nbk8D",
  "key23": "5djBqa1xTU4WJ8dTwynQux5XrktpXA9z7AzK9nDGd9Z49WjNcsHDMf9oEtyRBJ2RUT4tbWUQEoFbxpoF1q5stfpc",
  "key24": "2kLeeta8SczTP1wd3991TKiy1F9RBjdkwovJ9ueFntAniXw9AEawLoAnaCKBPcHgZJomt4CfgpcQmB3ZqHoBZTjQ",
  "key25": "66VWeKHw9tmVEnNbHFHkjuQu3etqczBKh2GGdRwL9nYpApxBSx9GY2BF1As2w3fgLRbM4aByYxJBiGw3i2nkZxsH",
  "key26": "57KkWisP7ZU3fTmtf2KPjS8HdRNYLrGKJuzi4ec4WthL6wDJfLjTUrg4eMzJAVvu4DLCn3o8pqJKoyRGJkDvxcqQ",
  "key27": "53nMz1wFucBYoQ51CCGwRHw23K7beAYV3psPy5FRhpYAGMFA3sZd2p4FzpwMcx8GLLhDt5T6kr1mWMyX4t7gwcCx",
  "key28": "4rMiHZBg896kZc5kCRc4SGPznhyw2JKFjAS3dHJXiZvv1AFwmFnXH3jBVx3mDe1QAHpQwm3Nh9b5Bv9okc5EENgQ",
  "key29": "3dzSeVtV4mjDYDT57kHyphCHwFzxTWycBz3UVvG5jnhxRJVJ9CMuPc3GVhDQC34s4rVw7QqxKRE2CA3jELnW2BkA",
  "key30": "62fq7nVkaUCXwzLWAvAPR4vehd4stPLkQ8dPc9mnQyrkDbwySmr5FTaRx2hD9YyVNogWZi8jNi4Ek4JFMsDEqRVL",
  "key31": "2XBEnj21GNjVmchCjwX3gDVxS3P7aS45YTAKZPv93UGXzk9nVnCd5dWhnAAEX3xJ4JmAZL96A3yaQYFx66otiLFr",
  "key32": "4MxBgtR15fHdxCBihapEjnnMqCaFXj116DNSSGQViRbGxQuv86ZSy73B1vQ4oDMCKBWRfwYxf6CX2K2s16dQ6TXK"
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
