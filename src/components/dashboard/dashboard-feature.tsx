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
    "hM7DwTVo3UQ9XmyGkVuQ28VWFahe7pQkdfe2eMEXorztVuK895xqKmneWygLU9d7JARzPGQxCYbiFoMD9h77LLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDZ5Gk8EJtt84qSoWDL9xdy4ArU6pJaQ55qXNbkpk7okXKUjmvHrKXAPNt6JcCbiDyGLD7L2C7JipZWVA3qpN9F",
  "key1": "4TjaqhwuehRpw6qdiUvGr6cLgoPaGwEsRNeAuF4eSAMfwdm7J9HRA1ScK6gyckf3uQmG2xcS1vn5AgGaRXesoWz6",
  "key2": "4AyDcNVoMpBSKegKyRTCerLgSUzqkFWhPERFfPbekPwcKdfi3ehBGVB6vSpo3KoVSkyXh9SZutwvLNJkp4KNrBYv",
  "key3": "4cH7sky1y4m4CGFeQCWQGt61YzCpj1ecfoLz2X2MHvReAeX7vBHuASLZivUeGXQsHikDciBpW6Tg3THeR7zKwWNe",
  "key4": "5srwNQ21hXDTcC8Ti7LJMZG2DCnefg2qYgvUY7Z8mpydcX5JMNA8kPK9fqhr1zFXMceQhzmo5fmp5WapcMD2ZPa2",
  "key5": "2EJrYenu4Wjz5Q89oXuouHhqy4KG1e7D7JWaWnXfK5xSJ1ihirLN5MWA933ijpdpwyiTbcXUBhsgBHus2C8CTFp4",
  "key6": "3hk9tqnH6JTk6kseUq9zQZ7YunGFAjzmfbYWuDvKwA54Fp3xZKDZ789RXEPNbiR4pMYuM1VgbD5mb8V6GSbE9CJS",
  "key7": "2JTrRZxMupNTC7VenYCtk9sohCXX1tbcE5ZGYzZ7xnFjvVthHjvRT1uvkNpPdDy78Fnh86K4YD8uqSW7bo9Ljkfb",
  "key8": "36NNw9NPDSRMGezkqEHwacHPTEuG1Qm6zN6XB85xthYskLuc13zDRTx7GMjrZsxoRDU6g3PjG2BobAxwg7JrEbSw",
  "key9": "3ZS4EchKZyvEV8s91UbUn8AegUNF7hgHgJZvCuoARG88W83oFA98tamiVGv747e11YgYBxmomRTq3ethmMvZp2C6",
  "key10": "2r3d7gvo39k8bjR3ajtUYqoqknriSWqDLH2MkZKSpLkETQkEQ4AxdyuiXgAHzKwrqD6skFefJfxTx9GEVm6hVKbW",
  "key11": "3gUiHrgirjvSXbHDnRqQRiFWRRTcfz8jxBrpG9jePqcPNnHubjAyJCybZp4SVomSC8Fe3YMHcVmPRzMc82qcL8MH",
  "key12": "3tGzmZP94dhFM61aKExJc8inVm8mYf5eXcGYcGsZKmMb8NHk1BvVwExXXYcHCLzGjideeKByd4bhzp7jZgLsC52L",
  "key13": "5fZ7C1uBFmWHfE7u5FhrfzE65fLEvyPu1U1bgDNBKjAaWhDQs6xcxt4MM9icn8EUri8N7tGeDbmHCeYWX47y2jKR",
  "key14": "2bsUQPLYKu1kSEgfuCeYG3Wpaz7nGTHbmPiJ9g9eGKotmis6i3nL2sZhdpxCQVfZqUW2V5oB8Dpu4DCDgypVB9zt",
  "key15": "5LbSuaDZWvmf5p4HX857jqAheykeKK4XcaLiRhX8AjANAwBitoWBbuJHKP6KDotr5HKjeBRrH5rrv2SnhiECFRr6",
  "key16": "BSiHimri3t7eXD69nhGbXekw9LCY6jnQrEpzioq6UVDCHpxVM1cohmJF7HC6K4UH4NGxBKbZqie6QPZGrtTruSb",
  "key17": "5T5p3BTyyUhTSyCtyUsfEiDpoB5HwsmfWbP33DuDRPZgV36J7EAG8VXJwpjW8NApVBjR7pDv2uQA4bzLqNWtzw9g",
  "key18": "BEdvZgogyc8oLnadca5qJ3p6sM4vim3mkwoB8dv33XfSKpKNKGNWXasM4jA6CeBZjj94ZvCGybiDAMazQZPB8Gs",
  "key19": "4rGY83k2Lw5MmFYrWbMhUGUf1wV86bGH8VGx12iHARLyv2M8byuMevHTX61vogAqCZhFvAUvJsfvfYp8nc5xg8Mz",
  "key20": "2FaQBCAfwsNDnpcZBQ8C2k89jG7SMbmS2c97U7ZQ2jPCEZgejdkaYx7peDwesjfDBbhfJZiTUEL1mWB1AGC3NrPH",
  "key21": "2ujbefJN7QvmwSAicwDw7JvtkAo9tALXq8DeZpju1nk4KDn83uLwWnJodnEnZ7K4wXXPopqTeJj4F7T4zXsE4rAW",
  "key22": "2SCnJCsrE4CZHBqxvmANCw9ePoUb3wKuubcxsAbCRFxBScgJpB7V21CUuwhdZ6VaApVJJayP7SxApQ59rGRNMK5M",
  "key23": "5wJe6AkpSprQunsw9EX6DecEYJun3yMREhob64TizkbfyGKyYFDFVJTWPnrkjU9HJmEMiGNFJiSe9sbkJBgSs5ZZ",
  "key24": "3Q8ycAZZsFqZ8DNY75KYkdy7s74G6sw2Fj3ZedUHsirJCneysY3GV5M6UorsARGt4kjHa1sSh81dAxpjAB4t8obE",
  "key25": "3ABXKPM3ao358uuEF4BzknmTPPFhfmPeeA1payTpW12yQmg8XLvv5b7nw7ZrAs8VTZzKMLGPkLdcV96qcf9MWUEr",
  "key26": "5CWWf6hesWg1xaaQTUTghbf1PjWDtn5Wg28XxUtNww9YMNWyEeV7jpzxeQ1AB77XWZMGqaHZzrHaaFCnegun54Tu",
  "key27": "5xZRfPADGb8HAQPaEtVuat621TxUUbihRMhgaeA5Zn3cubmXqsb6fDbLmqNjMGNSgue24Eqa9gmUWoqPBCxksf3c",
  "key28": "4Wit5QZkS9v4hJrkM3KgBzaZJQJb3Jq8Q4CjVpMJG11UedSGqGvHVbKRzLhGd8EVMdtenaXWq1Bor5WmSrE2kWpR",
  "key29": "2HqsJ9C27j87jPVwKcFibmZLsFe4SaHDZfMmJ6uKSNaF5rmrmpxKtirjotT2msZqKM2KpMRWMxwrPCnfmS27FSLD"
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
