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
    "2xeemetHaFNj78YUSF529RpN7dzPvJ4ceeZZmE8vaSTUy94RZzBuoSCC5LmnVQ6bygFVnh3bRDvVYy9KpzBNVCeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kx9dEGPSuzD5kPjAJnDwqiW6zGmav3msjcHCmtZ7cyxmMrakXykwnVxHEU9QhdGTJHHfosuR7F1nWS8A7nU6WsS",
  "key1": "4vjLnBWuLdipmFgqgd96h7tXu3k7xrJb6LNCJ1DBSPUzWdVRJxZeQMhfLx2dKcapdk4PckYF5JbtPhQ47FXY1DAu",
  "key2": "3754Ppgfwy87iyyKH7YRtBYB2UXZXfbeDPsEVMhjgPjbYW44xC8ipjqMRv4wRF7Yho3N9HguTasJwYEGs7udjrNy",
  "key3": "4PPd4X5hM32u3kA3vtPktkz5eyepyhXY9eV912jKHaKJYwY7SWb2WY83vpRtEVvrb83g6j6JapokNtc3oBXaJqkd",
  "key4": "9i4RUGWs5QG99VkHunj3uwUfQHQQkY7okDEQnzL8z2Nq6ygrmg6BzLfoEiFzvNEKdRfudQFvK6WfxkJLXd9P8Wm",
  "key5": "3mp5fwEGf9XqADk3koWhqMTV89PMUnuPoD3KsNv3SMuPJ1BqgEHPBkgTANHV7Cy1xmm6YAQriGEbE8adNfBxE6qH",
  "key6": "5PPcp4MkpL7TYRyFDYrP91yDn7Nm6uxdBJfQgYsW9SyxpDiMEZmMDKnDRkJgL32yALh5jrQkiyNaiHbAFXDiL7HW",
  "key7": "5bBB2vXg9mWd26dfiNEicgdXHCLCBZ29FjbNagayW52k2sg8MHNeDvFoBzXmPqK81t15Tzhtgqmg6Gtt1neCZ2us",
  "key8": "5FTY36xTBWHnuAoghjiP7Wh1B66NFYmDctG6dp2FB5HQ4vBGnfKtqQPvhr2YzNUiewa31WCHBQ657sJxx2X1R5Vw",
  "key9": "4LJwaqPHCoqztfatZjPQKNagNFY8J6azmTU3D75YqvKkAYSK1w8B4HMDUzHFVAas6GaXen9jWDBGWVNbGtrMxM8f",
  "key10": "1AWNZ162eWKowuuewLz5SA7gC7TDpLws33zbYzPbFDWF8PidpSKmYKimzQiUrMVKeEW4Fxy1N6obXuk8mhwxmFE",
  "key11": "poVfdCugxY68639YcfYSro5wDMKQAF2RU2w7uBk3Tpzyx6r19Gj2X1jikgJQNAyeeQX7tFPaE3B761sETuGsTNk",
  "key12": "3zgNaqivkmtXrCDCrmQMJ3XaQx51VKouRe5J4447FwFdBy6k46bXdYcxbLHY2jdazLAqNPWiFRo6MJKQ2dVpUb6N",
  "key13": "2dzPzQWbS511oW1qZGsEeN8ShecWjmLn6pNJUnVGFLGyA5eaS4u4tBVW4MvYqkVAWpDWGcRZnXYWuenWHRiDNziE",
  "key14": "5ADToTRWUs36AUNv7jHDMJoo5LEBtNTKX3LS9oypwiFtG3m8Qopyfn13SntjrxFYEy1Ya21iFddL99vhaJbdq1yG",
  "key15": "4AZEWrRqBFDTKsdNk1nY4xQaCcnjjFBUJn7Gm1XnWpKLNUY8oPMjuV4bdero2gCDAsM8sZfiwYD5N2sq8oeJcWCN",
  "key16": "5nAST8iCDPVFiajvaaHSm6v2fVE8iZJQ9FmPVLxpc2MjUjMSbP7k8GfebhgsW1SG3ZkGAp6bFhgGqL997FChEnA4",
  "key17": "2hXPbrW1QCBWh11kFEmJkuFk4rKCz38ubKq56gzim28wghf6eZnameukoQ5S42VByocJnLDpj2pU42n3EQU4jhYZ",
  "key18": "5q3XbYZ92Ts7XjzFaBoXPmj6ymcXmiot4hgVdcLYtUV7nbAUWjoj6q3qaG9rLWUU1bNkbcdCsK1vo5zb3gfMAsM3",
  "key19": "2HhTJPW7hMacHjXg4U9LMuiregWSif2rRs32Um4ZnDeD2D8QeT35CDCvJWqEbar1tyKB31mX231q6sc5aLjdtrQg",
  "key20": "5gfUk3dtwPy1mHqmBNA6FbRR4mnDFG6DY8sLCTEcp3QqicYSKjnPqRrK5zLz34rrBWgXYuLRqbizP1v6dgLbSarg",
  "key21": "47j7ov6YA7yMai6uNmQWiy6TL3A4tAdgvnYDpizPG3TURcVUQzXHor8NEaGeD1dHAZ2e3bxUArcZqAHjaroYTjey",
  "key22": "dotBLTyPDgWeD6fZ7b6ni9EBjTcni9nCeNfUqUpXM8wHJd1wyk18FzquW14mu95EMKMynCh8X33tBobb1A99peu",
  "key23": "4fqcNQSR7jTbK6A3PSyVWEVwd8tqSCpRz7mHxHYPixcLAS1cLgUbwttnVG1kJ5FScBD7Q848qTc5TDSuy5KgUGAp",
  "key24": "4BMG9nvka6ezEfCrqgbYRiSJ8AaC2RCx5pVGkFJSERT61R7DxPXJtaKyjbzBXVkCAYSExqem8DadwoGXBn1GBb1g",
  "key25": "45AzEDHcooNY2ZDGABeshzKdmzbjLq43W6sa1TXT7FmyUeNqRHA8Lo4DPQJGwJoF7KANPWP56D6SzZys7yzfRMvA",
  "key26": "yohm4HAEjCdEoXDWf6hyQfzKS65DcaXuRJh8ZemccQKSvpzbVLQn8W8cxswBatAR9fUATAUFnGGnEUxuVPgiwiy",
  "key27": "5wfrm66FYRkQJahC3rgxQuidM3UZwyr7YucSewGPGboZa58xjmJfwbuxnKrwUBw3LkE5eqHpkC5GbGiaSN4U6yKx",
  "key28": "4aqhmMMD2XcZYUDuY3vUP2iS8ZgKCQqrJfRi4n26z6GuT9RJDNuaeT2oice5huoxjeEAPDVfkchaJZjWAumEgHq4",
  "key29": "5vyeNbVKidkm8zkZFdtpwzYori2L5vrbEAJpcYbbBvoxZacA3gWqSdi5RDZHYkMTVK1iP5QLc8TKnTgatxQjAuH8",
  "key30": "2f5AHZjndqUAiqikdMXNbwcc9H6tUp6bXNTtYh5XKxETHEzdx9x59eDCfW4cLocNRVrrkvZWrRjrX9DbHawCqSVM",
  "key31": "5tngdoWs5UxS2wFYXd4YVmvRiiMrGw5NtQYTtzM9YFS4VB6jTcy94xUP2CQdBh4jwHXsP9rnUMgweexsVQxFq2VJ",
  "key32": "5ukYid9Y4shnRdhRGFHh1w99DLtFv8AcAyccBosQXuT1GZ1KVgangQmmZYHMLY77ZLF3dTTVmGJJpPP2fHJq22bG",
  "key33": "4xgt2tVYdiQuZEAfwvpUQiPPUrbfU67twsVhYPy49BwVFwMoWg3L1hhFqQZVJNziHd36zEZUyw4WL51RtTJWJSvo",
  "key34": "2kA2kvtjbx3mrFgfw7NRLRiyDUW37KxaD9oNPDv9crZMJStE8mtBDzUshijK7G4b6bMC3wvSvgULaWACcrAUFmme",
  "key35": "35UcxHozm3BFFYyzeNAm31bc3gVoD6VtXCbrSyU4syVqH1Mno6HZEMYFNKXqfpFgPTysjErsjxmb7X6vmtXTtxyZ",
  "key36": "5V8HQxH8qYxYiS7emnY8tw8wYLSC6XpC6udfnk8QGXMcj2X9JksoXZm7ijPJdwXeLByE9K4uMDBuaMJyoX6oHAqe",
  "key37": "u6sVe5eReUNXP5s3NHrrfrvgJUyLprYwg4zWLGVpKhnKfqCgsGkgzNamst3ZYvs8pwezYuqUny1SQpKVpWesEVB",
  "key38": "2Jh7xNuVFeNVyHcP742gUPxgMjt6xraFhjW1pkZJRuHaDVVmpVa3kexwYJaS545fzaxBP9sTKGFvwBQ1jfcMi1vo"
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
