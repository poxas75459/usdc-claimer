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
    "296m1G8v2tsrdrCZnvCcUMW6f2cvnjJ9xgySG52untFqVHArZQaYLsfyGPfqTkrFCxuxsVHCWauEQPCLeDYqJF7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ndmkm7t77yzRdZBcEA7t7uDj9wM4VCgACc8FVKuLC58YJBYLYbB3982h5EyUDEWZ1YwLwwHkC8urWtNZZsmBzVc",
  "key1": "49QHfhz9q9nT25CVhkDT1h8EyaCH536NCKgJ4n1E1XWUsCmjktwUxvVn5c1VDfG3nA7LoiRoK1mCe8GJjPSRmjCy",
  "key2": "3aEEwHC43T2R33Sfh7WixgASGUNxJkfwQyyEZbYu533FaTE4QrDtZDn1rHsq8WgKmwiExi4YgsGFVFuek3uqhqRF",
  "key3": "5vaLrqVNUi1N3ru2nhKUaJcepHh9coGcwr2VqeN7QHDBvHRH8sWrfD8jqyyTW5ak3P25HmCtsyn83qoqJgJgzTsG",
  "key4": "3uwTKHFbHeu9kUcQ7i1ssdNNzFuxgw9x5yhXiV3FXeiQDx647b2fowtt6DfgugQ6E2rwWF6UysK7yesuUUoKo4zL",
  "key5": "4ou8FaGafjL8ZXww2eNQr4mLMrWi6WU6R3gBGJS416o8GcLsuPCiXMtjYfxxd1by59ysGgHosY5w4ipb3ypkHjA",
  "key6": "4KfT7aWUJedMeyysYrdrQGUnnPrn5GrSHnc87fQfGwvR85cx5idssACZcnD1tohquAPwsftFV6Xi53xrAyz6F2mT",
  "key7": "4fkEPkRMvSaAgCspzx7KemDDUhUCbJcKnRiM1AhJdguNV2pKPXEQpz7nwXZ2s2eHmrXvp1LS1FPVydYZ35o2oizM",
  "key8": "39YwybcDnpnMtwxVnQM7vJc6kt1iekV9QgdgnSXPPxMdXfG6hAEzqFC9GG5nA1JKbPwsmcmXGrAgrVjNsARik7HF",
  "key9": "3ygKdc94gABcfwcKN82UkhUKeL88a9x8tZMPvzG71KLW1cTU5RCC9WZPhe4zptnF4AzVye8EmC7GcJ3YVTZEkp7z",
  "key10": "4Deve49t37ZRa4aGngN8gv7EnYNboBDVvwRV7YNECkixfBkwsX4L1XJQ68nnTgfT2X91Z1red8zX4sESwKKXYmys",
  "key11": "3f1SKPoW16ArQEdGWAyikVRedVjcMYBN2b5Tz5gFMRZhKB7U8whdP1bedvo246xLBofyZrMv8AsF9aoUcbQePfxZ",
  "key12": "2hsMAmJZp5nqKvokHGce3vwevKmPsPupgnBJF9xYigPMemYnS1ENgcUU9H4u5bC5fZRNfg78Rjqg1q6v9dkekty",
  "key13": "4jC2mVYXgCabPQUKtAJJFJ1QdhgGchi2bUVoa31okQEKquChV7oc88xeLUujgQb6LMuvmtuoRPkcTkQgWM16xBVj",
  "key14": "3Svj1TFcU6zyyvXeGDn4g2t6SRhgq2TjXJR6f2aWfHMcq2i28XATH6HEYZMoKpLYtTKuvddCKmJxhKLhawvBCb31",
  "key15": "2vkKLSyW7JSDezppqJt8KCpw5jq5YwgKn72bzEs9uM1wkjxB7P23wTdcXWheVj5mKKfJkQUyLnCxhnqL6paYbr9C",
  "key16": "4RgDM1EcnUr2a5cjvT8iMMdWKJxXBWcHkj7F9SwxijRtUwbipXzZrPGuTZnE4p32dH8ZBCNzrWoPDa4UThfqCZsq",
  "key17": "2TrPuWUWRGL2VmNp7VbeKoWogXLCjyYiGGoi1GbVqUQrEoi6KGzUbs71D8HHCvBLDitHrJAvntGCPLQSSodAAXEq",
  "key18": "2NqiqUXkjCiyCZTwdyP88r6hX4kDsTrysUcMkwxCC6tewVH8MGDjA4qnnhj6fyEaZGknXE9u85mhSjSbNDFBjUWp",
  "key19": "3JrVyD8ukiZQTp8YkidUGzjEanekcn4nJishJLaEUqbAfK3zM2jdBp4XDWLNLL5bWJ8txS6ReqeU4Fc5QSgL5RyL",
  "key20": "2i6U3o53H6w7z7K5SMjuid1MbDZhsie1hd7YngXp51e2h19smJKBrWJXdCk1jYp8c1RAWCitZ1BLTyCuU2RpLtXU",
  "key21": "3banWH4BTZZqtBzAcspJehi7Y6pmyF3n8cjkhP3wjqJPfUH1YiKWfaqvTzGCHHPyeEy1x4uxBjnvmY2PnuDrhF7b",
  "key22": "4VnCHoRhDQpwVPcWMBvBRxXsYjyt5dNG5prCnnHnwg27DZenWB47AipF1AEZVzcpNwtikb24ufWtb3GNe1adS2Ha",
  "key23": "27uFfY4MCyVtSaRgw7e11FreQuLJ2EnPV7SEvpd9RZuXru3jA1cGuBkaSJcjKP41bo8tbrupAqwcukRJHRvN6s6R",
  "key24": "LzHKuYqdvZFXnwCKjVv7hoFsGf3GvxkDrdkQwPgsFaKoP6A3VStayGFpXbTpuZ6TnQhYWrsyiE195ouuzKJJDn1",
  "key25": "zAq4iUpgtmva3hjLVLoFZKLT4zPVMWDV7wYMysLME3UfS9eMPRCNSXg5zgQhG751moM9oSgg1e73BeZSrq9Vz2o",
  "key26": "4jwJKDPU7qeJ29ycKxJuvuNmUKeKAUVsy7sj747kpzjEjczBGejvXSqK9cxnKPqoCsqhFLaZRoZHutTAXkDHxaBp",
  "key27": "4FwgqsA8bHKKBHZXiqj1YGeK3hMJBwjP1fUwDx75QUWGShMZdago2a5LQ24y3btYDkSVmiRYM8nXsq1d8jKb5grw",
  "key28": "52HXrEkpFy8endpbrTDJ5MjAhvjqhZoxH8CCeAMvuj5k9dyrwtfbbMZ5URvSHx99L4PsbTxUo9Mq81MhVvFqPJQ",
  "key29": "2Ej9LTwXP8JuTUtV7TRPLEWNymqgLxjSBrEkMiwaF7BnWomWB6FDdUxbnRTEph7kQBJ8sopjfMmWPTNBojAWbXDm",
  "key30": "3yt9rBa8HNgUYMKEFXbAfsXWiP26iNBYFA2deNchjEGzA6cmyfrSm5gsxrGhW7UQPThSwESYVw5JkCkhLTX2L6gs",
  "key31": "5nSb4p4MfVWFJwt2gSZnM55ruGaHR3S4tpGsZXxuMAdgZ5b2M5QRwHBuhu1csAu35bMWqWuoyEnDWVFwSN5fHtRf"
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
