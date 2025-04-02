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
    "31Z6LxxiTZA2FThaK3z1kpVdRH3CFLfr2R4FZ8tpjEkXhHm1SPXNXPSbQ3gT6phzVbPS9PwAQ5xi7Dkw4dys4Ug5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHbd894DNjUdWeUbVgzvuUr296G6VyQiwJ1jym2jYobcP5rrECrpXjy8632JnbW1jAKPgzUKTZaxwfLmkHrwk8z",
  "key1": "5H4BB8AT7e7ZaBLk4ZBLbtCffbtex3gvkrns2BJU4qprENQfg7w2Xr6EpeH5BkZ474DaMj95qd1N6Jq4gDHrV1eh",
  "key2": "i1UTa9DZFHxaZkGAu1UMir8Jsr2QdVE4dsKQQizBLvprzMXge1ZTkpQY26mKUUs3yxg2rywidhvAPwkYV5Dhr9u",
  "key3": "5H8kXC5soNDHjQ7sSEfBy3Z6iXL94sfPf36q7kTNMQigQ6DYEtL9cgTmMP3AS71o9SZMtria8X7miBHT4MxUHHVP",
  "key4": "2j8FShLhjoGdtfhaNGvsVgqeWNWMwHpMDL7SkCkaUWhoT9wxjHfqSo5YjZraYhgk4J4zg25HH6aMmpgqi2hBMHdS",
  "key5": "D8Q3VZhTRfyJLhboABZqeJ7DfPyBbshqB2VszRFGS9T2udexWbTvZvxhn9WedwzNuLevRVEpMErSWSxJhWXLAXu",
  "key6": "3kDViPdwY4JHs7nNcNjzhLiptkKiswsguoApxj2FyBHq8mV8J7UmxFsLYvKKpX3EnDomZ3hXSTrM1o4BX71WwvQ",
  "key7": "5xTnyeF3ofgXruVv8DCH6pNyWeEN1rzW8W6GDtKFTWDB6N9zFYxqgjpVmoxctYFHPTWqoToB5BrVwwPVRQzpnN64",
  "key8": "4hx6AnHYzdud8Jt45HcGvdZFgfNn2c2sCZYYL7yJb5uMtghhCsqHbNVo6xY8L94ywAzxZUzVaKJ9rKWjVJRGYTbj",
  "key9": "THJKr6DDR8AdPU1P6Az3cHLY2JDJvCgCULmoxrfHV5sdEaGG6Gj652cMvEjPEw7Lx8VUWMtFn2pJeConJ3jauFT",
  "key10": "bMKWDN86SCG1Zfg3AfYTv2A5LU2RY3Pby7V6yMsUXNq26CXV8izj8SDYSY2SGfiUdPU2SWDAbjLRmLoDqDyGaZQ",
  "key11": "5KimNvUNFrPGFqQQxbaPXjnTByjtVqWjgALpMpFx2o8Uvz2tBKyMN7VtVsb2xRD7fsggQuzBuGviQ6LxjTGQxWrr",
  "key12": "5vt4TFFhhJaGcVaLseW5xFsCbyUbxcDYXWXtFRFBTUT36Rjz6mfg3ZaiqTUYhVKWYke18Y2Xo67jbWb68DHt5V4K",
  "key13": "33NfMsGb2kbqgybQvNK1faL3FGTxY3eWgxTCtrB5LumS5xGMYJfQq7Nrj2cVj5ZBX6Jr68Q3NkJNWZB7bKHSuZi8",
  "key14": "4XuNJ5ncskRVbCpqu5ptaV1kQarkaqvNRPDww1u49pPtPTXS2YzHQoKNnzecDiKFDUiP5AYsXx4tQdAXywA9YeCW",
  "key15": "4kixMpV6BXgThGrWFXpQoSqZL2L6ynwH3g83X1A3FD1TPKbrmeYL58AEzwaGs1StnXQdNxuKf6bMBoP88i14JqkE",
  "key16": "5hMv9azhtcny7fCoAyGxeJYyx8W3TX2zcxo2EerTCssCCkDQ4KRGFjZq3Uvpn2ueskUn3x9LMwcNYjJqbKnW5t6D",
  "key17": "2WyTmCLrh5NfTdsdjPyM1Q1TGg48SSV5MteGdQwA8n2gfWXA1p7bjizW15ScXfiPLxHQkE9fgG6V5PqAX8T76gSx",
  "key18": "4wNtfK7s8JJdRmEZzrp4om3cuEzWJB9J6HLiRg62niCxBM7ASePFD3ZEkvXqMkvrWZhK7tZ2iYcpHxdKeyw47bWo",
  "key19": "24UwrWFfqHN23ZtLSRTJUEUufyfqkHNGvqgyxXRBycdPEuWPiDsgHBGrSTyM8puchY3MkCkhPApRMw6i2k2jzsm4",
  "key20": "3uk2DszseR34xqQEfyhE9MTeF4LT1FL6PfHkL8F5F8x1wECFeuerTVMwDv6EBfMCc2ueK1hxGbF7pYzYuS7xTqjj",
  "key21": "4ACHYG8X3CqtA5iKTof6UfG1PsuAeoc4DRwqeNbrpNW2RKQ2YKNznwqHpDaJjASsTFo88XG1811dcEg1UQLhWND",
  "key22": "5FvUgz5goQfhoRfuBPLECtR2Sot1f1JePG6AtCuQbyK6TY4C68R5P6NgDshAb9qWkx4UbdCzqSDZyGiCXR9VfQ9q",
  "key23": "4nEFpjhuB9tMk95Zrc6DKPwpGepVs5LEhKM3pVGGwse63MrrVPyVqw7wUH7sV9vaL3QZfeNJYNrfM7erWDCgUGQG",
  "key24": "2yydYv2fyEqAxVdbfqLCYvnnT7gc4Xj7jdD5aiVoWQspWJduUbLkWbJ4NqqquMFWweCSFzYqKBMzgZdBzCvTthM5",
  "key25": "3uawHpF7Zs12PWJ7MB3HnAFthPdAjRsrR3Mi74ycRHxkV7fa7vKKmGDKdYTag6P7NYacrqdzdQt3V8qyUaWL4fX4",
  "key26": "RYkCCf9Zw6JqXheLKYpUWoPt4zttrnAGSVD7vYMtGJZRzzn2VKK2M9PxBqmM9j8DpcSHidnKmrcPMTapgKtoPEc",
  "key27": "3dHBr2EoivuFzeVVvAQDr4fs7PtTWJ241DRsfKdrbHTtbkyuCxEYaM2YDNDguexzo94BFEbunZNje633WjamUphP",
  "key28": "3bWwuVa7GddhiKKZ6WjPToX9yQnLwmUVwXksN9nYd2s7WpkjMrcEnQayJpCKjhsM1DEkcqXrPZ1gQnVbYrPmMBZH",
  "key29": "5reUh2erCCLkEENWTLE8mTdxtguNjobWcnmTap1x9HGdyLRRr3skqoyJ9ugPBzdZwmnZf4ke9k5qmYZnGfMxcLDD",
  "key30": "4v2J3vnud4NASw3e31C9yDiXR53bng1hAssopZUCARJaVuSgYdZWSjD7jpvQgBjFRSP2ieHEiJ9EnmkPqLbjZpNQ",
  "key31": "oz3vqReom5YMnEWJQEpzGteK3jXqSuYGsoCaSC5WgguUrjjawkQS6JuVNDCw9jhMkDKgQ21hF2c2kKFitQMycEu",
  "key32": "2jxGXo79LVhkg8E3PzS2MEV9uZMBcegedrHoK1s5KNzaF1o6qm5oesHpdm6fHNz3hgwfac4HZppd2saybtvbD3rX",
  "key33": "5qUXeY7aLS3ZZKpxkVbcdFgfaaXEZdsmSWEKchcg5W7ZxkJ1Pjig5HvgdsBUSwGUAtwgtFEXMGVbDevLG1t3xxzq",
  "key34": "346HabWsjsrFwHafhKHcejaBGzra8baMQQwrZ4jYZvSqm6ExJeA1mBJt9fARpFPtPiM84vp6W5r7HSN1QboUb6qQ",
  "key35": "5AF4Q3EyWTSFBESWes5H2cGyPpB2uC8AKwQM1agNpyCJ4Z4rXN6j4A2qFciDT2RkNHKepmP4jpwTRPAG8WcmtuNK",
  "key36": "2X7QJUUEGH4wL1aXwvHhLwZNcVHJ6eYCNTLfVeANnJg2QHa4ydpX7XgXxiiuNhaRy8XLE8eQv6RtRGUKg1y4ZSKD",
  "key37": "XwA1HuVZGoDaGJwzpZxYA55Exx5ZJR8aqe2kXF8puXy8tsB3z4sLmgogK5n8Ki6on7rQBzyXWxrc6bLrfrHFYx8",
  "key38": "3w1836ZwENrZYK4EcFgKjonBdHhp6QBQnFHfGyHCcsoy7xTgsPDQyWdYsMFCdMEzPG3TbihU6tKwvShFziZKQzVH",
  "key39": "aG2pffe4nd4tNXSqBb5VSg44SHqZfKT2GnNGbjUFuu9qmZ54fny4h5UJdTcbTUMxMmkz6ctzAYoK4koeE4Cb8HR",
  "key40": "5XppikjkyTzARZ5DfcmKTi8jC6fHiVPjhbHhEyzWoFKogAS1ZRGEiw9DYWgKyLaADaYiNR4cF8XuqUwvCabvSMxr",
  "key41": "3W5k7vPAZapYiMZAkCnnFWx23mG6kRWQdh3qe8ktNgDngHt6cYkLE7vLWNmMZMHAMMu8iT5mnBdVcHGR5DVyHFBm",
  "key42": "5Ty6r9Gmz3wJ8UTD2kw4PRsXBVmNs8UaRzpNr1cfpur8YvhksiZHvC759bdDUfsvmfUnYwq6Z3wozpnj7erf2k2K",
  "key43": "5AwunhViZX9hy4SXWWxbnBGQ4KJdWrKiL9SRWJMz8MPUXew2mVasLHiN2SbjcMpNh1jMZs12L3vqCwKRKnto31ub",
  "key44": "3A8eWHNUjTAy1c7skbxFFTZR9UYMjhuqZZZzsdEvjnUvVU7V7r7GQ9bcSjHf8wcc8N181NSJBuZg4gdbVfKZKtZ7",
  "key45": "5FkLVs2yKQuXo85saSuWUzcTc5THJXXDKXUS6uAWVEBZwXicFxLcMoexJw6eRsjTMKtbueCYZn6YYdqCfDNb8x9e",
  "key46": "2GiSNpqsE2mT36434wvKY8UamXQ4GxLijXxowCiVYDuoBX6qNggahvzzfLiKKv1bPfFrySMJNsjJ3ZC7QemwXHzC",
  "key47": "3aoWXgBDBWK8Hkqerp1hbrMchFYeMPM1MgdSno7Eje5X6f1SuvvGe7KjHK7rBLuZnqB3c2JUrqptezG8T9iijqR2"
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
