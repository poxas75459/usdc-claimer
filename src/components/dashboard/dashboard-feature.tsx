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
    "5NWWWwRaJ1Kn6DRPhWCRjNBXp4HwEGKdxX5wL3yLAoyqZ8qBvZqLYWYDuz9jqHmfouiVsRzR683vmWihiy8Xoj7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59GZGAET11Ro3L4F6eWmVnP4XeBUk8KdLyJJQdLoUSqEaPEcKVsHMGDdy1wUeQAdNDjG4vj77edFuk4Qva7wAwa2",
  "key1": "2BqqhcePQBjNK93bv11VkaCAzhvooSHFrKoyvYELUJhFHVpfMkKaFAur6NVNEW5cNRo9Qu1fLV61KRYMSeTQEJsM",
  "key2": "2fQBTZbzfsJsGdrTRZmJJ4LoQeKek69kjQDEn8DYsuaMxfFAZkkMbpaxuW1BAxotwDi1rGTeobSXzNC4GTnRTMoo",
  "key3": "3JuQBwUbWazmhBPqLrPgqs1eMVESDrVoTr1yc8w4EvrW4h7wmfPwxDUCmQqU9exF8kAZmnuc9dqeg43PCq283jiW",
  "key4": "2qEzefdK6dgSeaL6fEy9mnqnGPNDYzKb1rAxYiz74yKnoz4C9oZ9JoHqLRzCrAwGsMcLwop7KHqjSnMAj83Ngrvt",
  "key5": "29e1bmTgc2jFEF2L1R5swM4PAgMeFFxVZT5nPdJCdW55HptwmkH5NNv6YznB61PLEbX5FH4NGaFcCdyZLijXU6oV",
  "key6": "4iv46gqVmRjYCkmkBUmemk3FyVqukEbW345yGfNS3Y4mhWwhrytuj6VUHNJWf4kc6FPDAavxFhgebByXz2E5hEP",
  "key7": "E4HuSYL3q3dcSZitsZbymGwyxejsP48iYHjoFEbCry4cngLPZ2c5c2XKsJo1g1TAXDKT7UDTU2r5VssazZ9wzW9",
  "key8": "37r4ZLopdZVzY3uUDbEWzGTJKBo7JhCoZqfCLu6PcEgon2NmxXmfRGrY6gmhrNihBtstbizp9eXUceVc9nKWXnET",
  "key9": "5RSftQQxZoY6g8dA8YDR2fKTmUHwMXZPYPUH3GNYs1DHXTas7jmRMyz1jEq83B4mmKyZkpAXy2dE4mwwgeKR4eWc",
  "key10": "CKUo2s1GhTGs3NsxQpySU7FVdRsCcAp4v37nyzQF3vu4c6K7xsYa1hEkn9XzXd5AvwfdrEbhjVJCheckQRx1kvC",
  "key11": "3wGJDw54PqLoNJEL6xPLastucpZCsexKCbZd1BgNaCQm3adem8uwHBXmv4D1qBqCEDSquHWhw9c2uDTGmDHzGc9y",
  "key12": "QLrC56hBSCGp6h43yv95eQhT5gzYM1661wcAe8QsNXbBNt4GcA5XxWUeYv62SGqnXtEb311HVY7Qr2UCTVwm3AX",
  "key13": "3j9PvULeNC6enxz5ssH1F5MkGVWKi7tDXFNhp9GY3adbfqid3o5vHiAWSbf9VWa8ncepm2CaaGK4SPzF9ooC7aF5",
  "key14": "5UPTB9C5r3igmXwULYFctro61pzmSWj4Nz3e9zFXXgzp9Jw41BjSXZBjvaRRWCouzaU9KTA1MsoWEX5oFoX6f2mQ",
  "key15": "3SzBQL6fkkVkBdRVHdUYgK2JSbfR24b6MAWjiPS9Ktj86KsBTPma4Ew8T4zWctFar5bEV3SeN4wje1mRa6pKmi5e",
  "key16": "4eks8Qcou1sqzYchjyvKCmacoD3nLRVzMvsQ1GnDk6ekSa3WekA4D7joK475Mt7aUyw9kav6DeTrKaiYmhcSbGSx",
  "key17": "3NS9Q8UnSHpGETDCSo687iK19zrgtPSG7RVLxbF8Gr5QA637mgK1mKWvUbTKGAmFH9RqDcULuN1AgA8pvVMvWgZn",
  "key18": "65aKSXc54E3njMrxpM7SwKz53KExckgthqmU6sdrdxmV39bi4AzK13mVZP7uaVPYWvXimRn5podD38GaohVb6oMj",
  "key19": "2cbfUmyit73L9jrSdqQc9vhe1YScKF6RALEsC4PsgKwBRB8KTsVGTPN3i1eC26NVDorDgyU5cPEy7EBa8qRwP2YN",
  "key20": "53xACpW6iLzoctTXSKmZ2VSC3ezYK2cNG69mUCLzXJBuwVDEG1i2RMJ41dvGJWrMHUXvLLssgJ6bGBEVBpE4QUXE",
  "key21": "duguA6zSRJFgJ3mm6VZs5mYENst4NFoJkUeQds237LCdbS7x6BXJ9K6bBNLUJdAdt6FY99gL5FsiLBLYsHCWy7N",
  "key22": "UYQRj4WVLNMmpJboxSbHsxa1psGrs5aJUCzC8My9eCsnLEmefKWLUSpyHjJWZLyPZnBv9aoLsEQnt8Rn1dv1DgA",
  "key23": "42f3prfLThf3rqS1LSqVMSRhZc2z8mGN1CCudF4XAUzcaFrpNpQUVZrNxNsb72XB3a127fUvBA72MhAkorHYLMfH",
  "key24": "kKacRXBrP3tn5rqDEdNLoLjvsS6WJDsRTvGomRySigww7r5iBRqG12ZnwuJrZQv8YbjJatm4DFYHsESi94XBh9P",
  "key25": "4oQRUDycSn8AcBT8RBnregHrNRA26ekHJNwQnTzYbbVf9rUFV9c2RSPfKi2mbq4nHrNDnhWoK2DBKShfhjLEe5nN",
  "key26": "3Qnbfxi3xzTYu5x3dhgYXPqGX5bsgNNgXdWbq9HRD6eUZD9L1CXUMu9w7SEuC9rYyVan7WG4axYbLAgnEiMBrSGc",
  "key27": "21nmJf52HTVcSQ8zV5tLBpb9VxSW9Gw6nescusJznZH6dAyJ4hLkWrQQ9AAxQabFyiDeXxT2HdSjXhVfYjozfhN4",
  "key28": "5Po9mHTs2ryVkqdgEqFqFnwe9ie9iRqtUp38td3nZL3AHpPNQo12RtTz2nb9LR14GK1jjxuvmFbdRoEJQwUVe8zB",
  "key29": "3NthEJQ1zAPqCDasvqY3yMoSgvkAVZe7pL7Yznmmg5kspXVJE3acvXtj2TgyJwr4AvY1jTHZWKpKx7qw26MdYxJH",
  "key30": "YtPTWkwBWhmUjgT5b9CDmHUe6tSnweXP61PnGnva7x91FRATtRHsCVh7Cwwu5Ems1hpEY19TwHpCxeZShr3c62o",
  "key31": "kn4yY8wCU8u6NdciUFmbycKMcPx6Kz282bADnp9b3BaVeFjjDfqDHCqHawiyYvV5b7RCYqp8dYjmC5mBvofCk5G",
  "key32": "5Bv6Qc9nYXWWdw5NiogRjreRD73kq967cqjDxhUkVdMCM9TCKn27f4HHZHWaXTFQrwCFHAXNwPXqxjb39GBCwN7F",
  "key33": "2VTeQnSYoPWFK4ShgwRKPUXwyaKNxbhZ74XGVYpcZdJ5EvBfZTt7s3QXPv6m22j6tqTQmvpZfaGfWz1VRpKWUefw",
  "key34": "5wptQrxcRmFVi5Vr5Jhk6XzGLP1VsJb18nRcGfgMmoBJGhQXgVAXhvwF556efpnB2hvVSw2Fz7M3C2HFcVD8pygu",
  "key35": "27JfBX9jG131xttGL8mVh9q4gwAEpp41sYKNbGTL5r8W4dxfLCJb54f5fTDfFuoCMf92hrgFBSUcCSXpP4w8fZYD",
  "key36": "3pt9uhuGzVwRqU6tcXqaPJZVDnAuiPhgBnudDKRiu6YVB2ZKWuwV2qaXqBJwkVy3czdBtJ1hJT5AtgcfGzEuq4BG",
  "key37": "5EwBt7j4reJGM6eJd8vahjZ8ra1W7upJMeWFnAJG4ZZbidq65DCMjni1sUpy8fdtJnH7pNsn283UBFiMx2X6BL3n",
  "key38": "gWVYtwCCjWBHewot2KgH8fp1vCkTbytTncPJX9DmPyMeBm369XPD2Xd5V7pJ6F3fYB1p5HKSEABYmnvmrFXeppg",
  "key39": "54xrMdfWDzmarrBJy1oCakdKtsaRqHMQinjyecNfD12vbfQhZ2ba659sUYCoxfQEnv1vdTNkmfmEFDRo9byTSQkM",
  "key40": "2tLsjnsc5jHMTqL4u7nTqyYRVLQHQxP5EVG4Scss2cnj81suufr7m8EcnKbqdzdZrUK2dEHQNFdvUz2qE816t5Eh",
  "key41": "2ACk6SNGJKsZrWTFDu6W6t5aGhmDMQTetXKZLDnyz3r2VqBPnqBTDaQPz9m6UdftEGF8QE9Gv6u69mctHjRbioyC",
  "key42": "5rpef7dHswtw7iTYyhnERxkuMMniNdJCZ78njbzX2YQhS6HTzboL6c9X39Tr5EZzFcXgd1JCgZNdrNqi3JwobnXh",
  "key43": "5kahercNxuYbUrxZFq4NDBJQaeNaXDTc3fDgCkzYDZ3r1fU2Np5ggKSpt3szscHT6EpXMWy7WzfaR1VTQui5an4R",
  "key44": "2DoMgFohgZ4EhEWvkMyNwK46CnNHm5tshvokuiHZcyvEQh3VfcoKo8yPHFpo2WMVTzpADErvvfEMXf1XxUZkik57",
  "key45": "zdC7VuHeTygr5DqdNccNPAWSygK1yMPALZZkB3nm8q6y7TftcgGTic1isnbx87zv2KQiKZiiTyhNkyzN1gnyHxj",
  "key46": "5zo3RqMM3aMufbpMLmYZ6cktWwjoxtyu6Hqay1Eqqr3xabjmgG6N3LvdojStQwmpMX5KXjx3XsLjtvBLLJNZG6CP",
  "key47": "5Fif5G33eZcztPWFiSUSnQvKez8guKJjdXbQT94uCA2JSmSnMC9u6FQ7giZLCLFijLbK6yBUMYZdUzzvFNJe6fvH",
  "key48": "5AynJNprU3KqY8C2Ccv4h63t7MoHM51jg4oUXUw1FXpznezmC2GKjEijtkeVJpQPHWxnEsbCACrihfc4qiLhQitm",
  "key49": "EEZ1fkbWpEDvJctubm5PHBfZC3pBZQJ9i5QfoJKjSychX9pTHi7K5N2qAh17RnjpMbbqF7PVkmZzXxYtySy3nZB"
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
