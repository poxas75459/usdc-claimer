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
    "4KR7sR8RGkztxMjgknMB4UX336Ym4hFLoAyPdLvofTzxvbrDuaX8ccKrLmwHBe5VpHrPofwkQ6J1PS4nvzsJGttf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmQtGB1ZGULSRhnUqqMRyFf4DRzpmdP4JJ4suBBi5agQKA6kadHk5pJGQWNu294hpZFjf9L4BzE9rbCJZX1nY8v",
  "key1": "4WMmkTpe8fTL4WM9DscVJtAkYVYQAwL365EBnB7P1D7Si1BruAnEsKFg9AydbzgyqgDqyTuxR5hk77BFJBLw6q3",
  "key2": "2ZbscMTFcERypaGBYjLbLUvZJTV7Jrw3xw4dWNR5kuVZxkCnhkdaHpUZ8FCPYh5Cctwg1pUqY14rVpCFzvQX6k9M",
  "key3": "dSmMpuZ5BQbeGnVinvLmzz3aS8NT1QqgLDtZaTMF7eoq64852KYmPELRmHaum7Gj8LLbYpW2TCB5t1BA725Jy7T",
  "key4": "4676z8jEiXUfgZZXaowne9VJiVSq8ck2HEMpyAzAjoUYBDVaQnbco3HrCVsx8FmCtbvUchYUEs7G3qZ2N4L7Kr9x",
  "key5": "2iny1vAtYkKa3AVm6uuH6HGxJb2GF2bsF5NbXXYXLipHm6pnMuFgfvDvhhddqEVmWaeugh3tDSSrWGZE4ip3MwGm",
  "key6": "4eqSpjsh1HKqUagbsoKb7GJC6GHwmPff7LPvfvNBqvN1p9cVCW32phkp6x1nEioT9MnoF3ZfvVu9q45YdasyXacH",
  "key7": "Yju4LcRfw7zjyja6rpyf3vFFsJqmQcLFF75JBz6a4e7ZFoSDXGP8nJvAv6bVnHAUkvwRdnDXPuRRmD2qh11UUqb",
  "key8": "5J2PPiovSBY1wk3b17NgqpZF72zee2oz8J8fJNgRW8U1QxRRcUXbaPf9oyo4mEEpThU4BYVNHRLC1rBstb6YZ277",
  "key9": "2Skgfonfcc8V2augwpQZV7DCYKRQn8zG5Ub3Z3bXH6iZ34S4QexBUhhJ6zmrWABdjkf64m9KL8P3tFDb28ryrQ2J",
  "key10": "28SP4hYuaPefwg2dfbgDwCdaYLbr5n6LUbarnjovRYpx2cGx7Pxb9vY1dsosU95fw7N3gunvUjuvPSoWnZojeW3v",
  "key11": "2cGKh1X6usyxtipDeX66fvoaaeWr1k4JQwPHRw5WMGvEm4VJocLsgJZRKbvPYFq9Xc8xp6EacuUwkYazoqNaeP5r",
  "key12": "5MtjZWBsFM8m9eKbZAfT4rmaHRa5HbsjkvHk9XLYGbn8U4b4uqBG9kEGtaw1H4us91T3Rc7vcqGCjJWGbhBn9fvE",
  "key13": "bkK3jWMbxv7e2NWNW5LfNiHbCfqunK3qRNHrSydKfXwwCffvWA3hfZiEX8APumqvTXXtU9nPCs3zZH8eeeYhM45",
  "key14": "3ouymeioNfu7qCwLkCnbDyLLNkHoNLFLUTU46LsmHCAJGGpLugtk6ZXxq8mpUDSzziZkEFm4zdLyFPxBXo24j5tF",
  "key15": "3ys9LEEY6ouvm8f455gcQAuVhr4yS4z3CQ4u58cESqBZFZirpVmEebXywjmjwPvj4sRb4owQKLs5zgM4RwHbr5BN",
  "key16": "36hHEmn7acn56XE5xtQ5AbpoRvt6P9WiiPZsGN5YooihZoe3f72dYqrkUcpwA7ka79wp9kWhmWzaH2WMz8UzijYg",
  "key17": "4ZNDk5xC2P7Vwe3sEFopu1AeHgxYzuCHENWh9pB92M4xHUi8nE9TMm4T6N3YRFseFFeVxcDENABKsCHx9bAyfqh4",
  "key18": "46skzDAq2jDv5yr7mfhz8yQgRoDG49PxRqX7chvwasCkmNZbtvqdwGeRhEwrwKSgFd242dnKNP5F2jP8yHx4UUry",
  "key19": "3Q2ZGU1jowVnLxwzgvf8haSefPokrfedzwPvLQfoPFRpxJ6Udvk3R4yEZYdDy3EJrUsXE6RMhKoxLXjrkFzsWySf",
  "key20": "4vvG15BopioMqNC8XhruztRagUbujYszwKnUwtpX8PHn5wCMVhxRVdrroLc1r3zRDXVRgJ1ib6gmqiLrzqCSfgei",
  "key21": "AbsJqHy6NRcuTb9fHUhogAEXrkKRhHMvipvuYQTRSGWeZ7H4p9TrPVwJpb9K8YhC2cPCBi6bYq8WFdJTCwVwXAG",
  "key22": "5JeaCDEZKJhoDqTFvrLzGSfEgo6avvJ2iEuLD3y1aKRLLZJ9z1uu5qq63WbWQrxuC1z5gfD5HzWV2ccfdVsWsVje",
  "key23": "4qtScdcfKf86RZX1gtJKh2z5vwLbkN4j5friDWRRDV9a9DiDowJQTcuLmMmFQSC3t4dVJWuBtSwHAXz6dTNx3GFc",
  "key24": "51vn1kyi7GVudtsppJEzSCYdFWEJSENGfXYrSdvC5wTodCQqbcPDYYw8wgjUgKndfPW2qhJb4jY47sW3muHss1co",
  "key25": "5gjMPrD5wpVQ5rXNRa2bQBYHxNHz5E6iCkhExMKN8MMZVCjiE93N7YkMrRZR5Ujm8aWbQYcnq1w8o4PvfHpq1z39",
  "key26": "QBWjYy2CaZFgdo75BQzTredUtFYdQyGCT21ZCwkk9L8P2pDwyA8FMxr5ExWq2LwMCjMBmuFTvqMkfNpCdTPWaa8",
  "key27": "yvkrMZWM5CD62TZCGnaNYxFsGcDTpjwUmhwAVKcpsiph1C4QA8qJ1a5KfCz6W3WvHnkn32KQPUy4yG7hxHa4N1f",
  "key28": "2th7wd4pm9de8uTBmS8BTGeRvCATBzBPeioNftQSvvhz9UFQXBemVqKEEqd4w9FVfCC35hE62U6UTuW2Nn9Mz4AY",
  "key29": "4oxyF5DvGRD52tKW7TQZoNrq3XPBuwhgE2DiX4HsnaJieTyLfYLtF87qRrwvSpNHNyuJjCDNuuNbKD4KL6ySTx22",
  "key30": "27UkxhtCo1fH8whsoawKAP3zSgYkPeGKQZRop4gVYYZaNZeRGikowGmyk2bVHvbV66fSZ6jUnumB46CjYYXBN4Zz",
  "key31": "2SagLUKMp8bgaEhKreneC9dwcs3Lwy1GCSzyh4z3DKC1KBqyHzimaFfg9TijiuxhWKgLsWihiae3DfrWectbvHFG",
  "key32": "5y3kvu74jniFnbaXtEu7Vy88NGFUyuWSAHXdspWHFs3oEzdLH5hwv49sbzxvEPn9ScQzc4esHU12QuxArNQaBsRN",
  "key33": "5upNkddC4jpSm59GyRtjZKKfzGqf7gVNuzYmENxpJUFmMPdZv5TCNB8TAVRQdSLAdgEf7Ps6XLERHwdSGdf5SWAM",
  "key34": "2MvmtwSL3zRuvUxmxMkRdMhbvzMnBm7HJxoUx5yushKQBBDLuH3aaTe4rJZtDQXi1kgpUHtx7ejbXZGWLQf1qj3S",
  "key35": "38u7ca5q13kBUSwJX8vrnUB1AiQYp5Spyamkt2tH22yEtL7FP1U39VhJd9LB4VSvwKKYU8qtWMdXHa94ZSsSDoKx",
  "key36": "2NpGv8fzvCY2HAvBaGv9fqj8B9c6EesD5Hohqrk5EvULQVQsKZmwDpBvmaXePv88hXSpBJ8j63xc6RiJefb8StWb",
  "key37": "4jiDUgDteZd9XJn1PRFquazTtAZSbed47Fe7bZQTuQvKizuZvMYbpykxNoHpAVkyNJYN76LeiaHeyQd33CBd5eKG",
  "key38": "3kipddv1GnQ4MXCE1QJ62vqQTSWESFjQ4AGA99UoXF1cGpJ6kUDSjQqbduLZP5DxPwqrZPeJs5F6iDavtNZZYd62",
  "key39": "4cYVmtr4ZyBnzFLtSeSKdvAewJ2aaAyWGEHSetGqnSeyvoUNX2swoZCBFhMXz2abqDzpkwkpjLSob4s4YUAYiMhi",
  "key40": "4SN2ZBwmnEphPFHwzS1155vivKSi21WhZmMwryax1nGF6JFTmQwZZ5ZAzVuhDPydXGmvw92bmbcbixqvJEKAqjNn",
  "key41": "2xMJHSRB8pELuGcghPHcMGJkH7bChPvyK3wgfFGTcvvFi27ZBGdvrQJyZyD9CCbGm3F8c5KENqUBPT25aqYREZ46",
  "key42": "5g7PbLQZm1SGbS9veJoWXwU499P21Kzft1cVKFmmojmhaDUWX9XJtr3UNRDfyD6KKANiQEwP7ykemZCSXgUmTiTj",
  "key43": "27Ena3vVqexitPubNogVLjyrP7fCRGRYK8pFVjNQ9S2dCML773ucayWkufjMkm36kTP4q6536uQbnL4mUvmCnz2Q"
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
