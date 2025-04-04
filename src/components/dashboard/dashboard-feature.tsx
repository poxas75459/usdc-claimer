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
    "5X282rQGgANaYyjQ92WFqd6u8pW5cXrAb3Ad7Hp9QdgDitkDexHsnYh1PCbZcBdUFxA4LCmdrhaL7k6A6NfatCo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5va1wR1crshsXDLuHwJqr6F9zGFqZyfE1C1sS1athhvRzfcVmHd2h2tACXPSCbBhsh6pkF33R8ffuSg9PmzTk4XF",
  "key1": "4RKAx3TvLT2Ys2hRpEj9Y9Qiw7SkmEwJAXmcSzBDqrgscVuQDnE9TWm2pvmhn3fgzYeE5awEGnEjhwRkHLABY94M",
  "key2": "61kpD3J61FCBsvxXNzywMa9Ee7XBV4NFx2hGR4qESCz9b8AgDjqYK2sawL7vx3xGGAP2y7eRGFcR7meXdZ9bDJNz",
  "key3": "W6MkvyNWeVGE7RceWKbKLxMrYokB8YWGdhsx34cATNYedQzsYTBZS4v8akG4UxV5nyxKrcqzJgsTxHNYGTEybvV",
  "key4": "2pPb2eBxUcNJBUbm2qvG7R7CaM1WGPPMwAn9TXZeayBuTcp58yxSoMwaaBEsEUzQbQTNdm8za6HGwByXCnLhRFcU",
  "key5": "3YERhC3pFufvq8GeYC5XYn35zANeMeGe7pduCY7a93PWsZuVUrc11cTn1S2fm9guaMQxE7XQuQLS8TXYVkLHuiBR",
  "key6": "Ramfazk1C3tAz3HZPBFuEnGyPztGQbuZCRSiQPcF4HNeVFVENegCyGDmcdmDejpi1mCCWEmvGXWtFA4HGSaVjJ9",
  "key7": "5vFbeapP7fvMxP5Xwg5L3MZGsbjQUpPnFiF6SVMBpXgjJhaziRpGNNs2kQb5t6swpjbGpQmj5juH1E7DimfgdPHN",
  "key8": "ayGBXh2djJPcHMLW8itSF68GGTQXPCsmXKwuK3bAM5AgcQJvg32gb9c179q8PCgUH9Zj3ULtf7hZQMgsiQbZHiv",
  "key9": "5a2BT6QQD3SAYerU6e6Y9C2th6VYRqbvM3xT4JnnXHm54FrD3GgRpZbq89HTgVutQK2gkL6o6QyumAwnh2n7M9xB",
  "key10": "5ZNKMjuyiHpG2cRXbcwXdr6uCwUpA4Recfue6QcY3EwbBuytxu1nfi4ZJUmR239wx9W4n2CriJAmxvQmJu3nKtVL",
  "key11": "5AB5rrJFMhBiqkUNxvMVnh9GFWyP7N7FVStQvKu9BmXiS46SH8rwabvip9LEivaw9dEixmxPijKoVT5DYtKRukdu",
  "key12": "5yyrBPMuyiQStGAzLmDpdsX1dbeceGPH7aWi4DvsgF4UYZZ8ZLWBjTm23UGfbZntLjkV2RjpYCSTbMCCqa7YdcC8",
  "key13": "21wKhGqU6GxeayCUQL3cBpRf9kLQTN1jjZVd3pLLgxu4Lz7k9jGGGLsyfxKKDGuQEBazpc2uJkkJ4kQD1tczKpJG",
  "key14": "dqZetsUfsbN86nYJL1pKcfwppHorSL9mrVbtSDDzrynEV4CG99NsNNeqEuD2yCcfGMD38JuekA6CfksCLeqFetg",
  "key15": "3WsEg5t2MWrhFxHAAYZ1PomqGH6W6G5PCfgQ5oPRq4Muf9wejfG99SiVRRtzvbZRa67Ft8GRtKxhBXZsspLWCiLq",
  "key16": "E3GjZ6417CV2yYTGmR3cDyS9kWZBRSAgLbs6XdLU8WUBfWGYR3xiG5St1LDwpC9oYE5wNsA2jgDYpM3R1Ep1VVq",
  "key17": "5J1Pb2PcNEuQWsQvDVNPWpi96R1Q1gFZyHhz6PbZPLn3ru8N9KJu12exK9fwqEb3m5hhyqnh7Ch1p1oPPFVQghCM",
  "key18": "43Kxr7ku8n29A2iM2UJsWLwNqMduRejUACmLzMa6dmnp8zPp3W765TwWPMPx1hWtnGrvyHWJAasCCvqTy4WxwUis",
  "key19": "xc1zJ6wiReDvHk4YErFx8BRAt4L9Zj64YHugNqAhps7VEwbyeXtXqeqkY3j9yKrsw28n7aXa4qL82QVtEN8VzPY",
  "key20": "45sRsecujw6ZuF4MaFXdmYXaggnZ1bWc1oGYQ5QBMSffM1UEnXzhmAS7dmbMU8DCSDeuDLDvJSruVcJ8xDgT1PDH",
  "key21": "4TtmJwsZLhgpp6q7dLvp1oCN8K1ozRApQzLFD7yNqPehTc6DMNnHYTnESpCs1EyQJAZtFv3VVudVUCXv6DJvCoas",
  "key22": "4HA8sttE714ARUJFX59i9Unecem1J1iNHb6Dg15cqmSvtGv4hXNLZZs9CG1yHYMHQCGSYGH9qUuwVQFNXFDJMmx9",
  "key23": "2bVUe4JRmqBgUnmvoYDc2iVVKGmRMqUzvEjXzDMHRw9uLPqLy23YnT33LExDLtM1xE2vM98Vj1vYPcy4b9wbKUYT",
  "key24": "52Dv45cr75L7ob2g657LFcmG6jZaiiAHA9oqK7VWGkf8F7dDV7Bu68bTPonAvFUJcyV8yc7TTYVH6NZrMGdfg6sN",
  "key25": "2AQrKu1mU5dT6cp1FST2otzLrxiNVCp32ztHVF6hjc8GGKdoEkLKD4f6Jg91hXq9xkvRTP7GcqUwpTQgy8c5ooq7"
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
