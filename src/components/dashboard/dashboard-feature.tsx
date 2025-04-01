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
    "mREXCzSZCA9fpd5yXKkb2z4RkkED17EdefG5VaprbFnZSePMWbNzQtri7G7Kh3r3k43tvSKFapXAzxuU3QSFmPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEuxSVf5MpukkLJVMpcYLRVRFAB61jRrMayQm4CuPo1SSisrPF8G2uURZcFG2qLEAeGje2UnkfzKXDAez1BtTRz",
  "key1": "3W5XAxNGUxW6KwpYEpoBQyzyzyxtowxQ4MvzV7rtKcv5CGLByMxsxH2X4vEDGKn59JqkCB63ZzijVnS6BwbVKJ5f",
  "key2": "utvzkvAWkGnsn9cYMNeR8mcLJyNRoksqWg5EQ94LMb1u5sZFLxVYAYrWSCWWz5fPFRPhnUrwYzb3wqbC9uzY54H",
  "key3": "3QUPmbUxScVX72GrvzyyvPVgGAoPasXNzsczeDnFiYt7eMKGTVennmJG3YqrRaeUbYp9X2PmHmiketw7om5zUbNV",
  "key4": "5DMbUJpUFeB7JyzAdegCurBUWV9fYMGyLyNjVSVHaLHmebNqBMnkbWUo8hL52CLRV2ntg5NQcqo8qPgo63UQ1sNY",
  "key5": "vBenoxrPwPBdbX2LadXJZvPuqwQsXE2Ux2YGBTmpddi5PSteJv9tMYnwE8LDhQGwCWJa2tMHjrPDa3yUvYiqRv8",
  "key6": "2327PMZL7TSNNHzK1cRoumEkcWEG5pusn6xF7ukPjGCbBoAQmgvob9qZ8cx5WXSU4kSaty9z5qqQDdpi6yr8Pw9q",
  "key7": "5LjznhzFWMbySuN9eW4Gx5oDxtpLgqjpAhTYRd5Kv5AMU6W31C1RdAvWS86JQ24WvRHxpXqkptv1EJBwNJ1eLrWF",
  "key8": "3gs1RXPfpu7CZCDX7ppSUQ6NGxCcMGWpsbHbcCBxP5ZZ8k94e7bBWHTZ4xAiVkbjFnF4fpPQkPh5BHnjyWt4B3WD",
  "key9": "17EUbCq7pSvLTpDCtxxykGotLXEMnuQeDMBvKzxMHSTHhb1J4ZftpgmGvoXLKhuW6e3QQxLHtajFpj3kxtDrFU2",
  "key10": "2VP5vN6WXdd2McMTc3qv7PYwM9NYsSPix2qi22QWVmAUKHAAp2pfhH2HGa4Ho8kJCiVhs61zo55h3kaDjCvsePBa",
  "key11": "4VoskffNasnez3AgJ4S9BorafZRdowxMjwSmec9N55iKBb7QMAjUTdRqDKMhSgoLZsZ9gxpKxBZ8aRWubnQCpE3N",
  "key12": "xZuKQ6NDq7pr4cnietZngLguv5xqLarV3C1VfmRCW27ZD9qNLawnQaRjqXfPvYSi23R4vpYyn1TXsh8dazQ2639",
  "key13": "63fMbkHPouXUbABpJpAvXqpCKHDWLQvS7tSEihcRpZmVV4RKg8ZRjhsXAQ2xxaxLmc9W432SGy7ydbBqKTWtcqyy",
  "key14": "325Py6eY6RwXWVrp9SaDiddK8JVNjep8eREoZN1XcS5KcMppiC6yvG7eDwYr1UoXkjqxkZgMKSacGyJw9sgfYyb",
  "key15": "pkEMJzLyeuRJj8cQuaonVpjSXFA6PcaAtziZU2W6cW3tXLAzyyyQ9fHbK6rbrXBp3yiC6Tv3sz4hkRcrsCTaQ7M",
  "key16": "5RuPZ4EeNniBL8EqpuahQvJiMBhXoc1tEYiboTZ3LpvJXtb646QKruyV8Ktz1X8SPPaHf2iYspo894xG2YDWzD86",
  "key17": "3CX8scLcGRdoF21faJkLiGH255etvBH2TFrnrSFLDi58v7gvATKPe2YZA6pzLZFEmzfZ1pw3YZjCRcz7CihTEQxt",
  "key18": "5buLYJcMszg7kLiRfkDynGUnfoXJPKFGw98LLhw15a5tZEdgBFP6pJbQJV2h5cSEjvfB2yEVE6S2hyp84cHkY8fA",
  "key19": "31JnQfN8kPn7eX7ChcKoGwtNr3WLUVEPttz1B4UwH2Wa61MwQLHaALJavs4QpNmMU4ejxz96ecKBBpE9r6RDBmT4",
  "key20": "3praaaZDHwUUVYhPxX5XEmWc53AuoQGK6GAZusg3zwy9bo1pSXhoBY4QUe1yzzBGa3vdzhTv7x1fKhoq8NqjMDKi",
  "key21": "2iXPcZR6NpHmpnf3yF3nFrVJXJJ3ewLVeo7i4kuCdAR52RTEELkwXwNmr1APkEoMQUmjMHnjV2pea444mD3eVXHw",
  "key22": "5CyCG3kFDWJAyxnoo6e95qbvZMnpSkUC6sDDNRnMnmbic6matBwxMAAkb8nPXjZqhVgyAnkTxdNKVeyT2uBR44FX",
  "key23": "5F9dLpLkhGhqWPG77qs388KTm9DYpUHPVDSozWgQt4asHjRAjDRhKFuEs1z4scP225V7kGiqodtzVy3LjARnH5wy",
  "key24": "48F39BCLRiwnnrDHJcdS6ReiWuwT5cKgVDsMDMH9gZzioCQbS68fcsuQDt8npYTsKiQ5N6khmzKm17gH1CAak55V",
  "key25": "4LGNuobGgeSVdo9YswE6veimKVLPFxSrVCSsN5qMhvfwSCsSUL446sh7jWAMvZ5c1jC5tYiu5vscaHA4x1yeHj5A",
  "key26": "3cxMDKVLAzH4RdaGFdHwCf2h486Xq5jpZ9ZPGMTiFgnvVasMXoA1PBDiUkjNsWnTpqsE81sxwovSYPzjXGkXMhCn",
  "key27": "5Uroc4Aid51cbTYNRzpw2Xjz3UQCv7mEAmKextcqpChBDuc3kVT8KfB55DvDeQx6D3FZHAUt4GU7jPPUTh85cQx8",
  "key28": "3SZwXFZKL1eNAjUc5bTnv4s9uYd4Ds7MUvQDBAe5UW35HcL3NeHdbpRV3SLLuMzLNs98x47fUzyFAeS7LQGEiSwc",
  "key29": "3TrayCUVpdvSrKxzyvpLQe85Zf1hr4VVeAiphx1oTEDqNkwWsx1Nz6zfpWoStSQ9X54tP7pUeb6GU16zFZBrYuM2",
  "key30": "5QgXz3mKXrY7Je9tvzzZWHrrLEWzw8MTAFZZGHtqyek7FjzwKkaMouVj1YeU7utJv4j2fNrHsv1yfCc44n9MPo5s",
  "key31": "bJw78qEZCvY652z8Xa22BskdSh5R2DwJbKpQg2izxXpDMfPXj5VPZsvuZM3nNccv79EsDShVTtfmmxZA2v6eSvZ",
  "key32": "35fESReFLQLfXykmPtaw7iPgRExuGothxuAywioqFyCXXAJQ59z8GSZSMJUU5eVbjqn6Se1UimkCB3Tbv9SNHSpF",
  "key33": "5FM7v1746cncJGoY5QEZ2wXD6qfNsFkp2iTKqZyi9vkZGtfDtS4R9vtAYfBh5JZ2MpdBEHYxDugtzh1o6pcRr8j6",
  "key34": "2Gk2vzoHdoAoYgryUMwHaEj3MPLPmbFYNArzxvgPKgy6suUrFgMbMq5FyGwYLh9FTcREsum1WkuXaApqZTAF78pu",
  "key35": "4yNw7NnX7UtN6xiryJ5xWBBBQijBxHei3otHkKE9y8RrgBb4ju2d99pbr95qoPihwKv4WY25uRQZstJb55wmjnkw",
  "key36": "3mRjUDfibRYnvcD9ajqb5ipLf3eRkmVUDhFupkTcQkFZ38iysafPFgtmjMgHfyVrdawPPsUBHxgX6Q3Quuo95f6n",
  "key37": "34SUvvRzEnG7q25Msjvh4dnSLtuif9gBxGR8hiE9vjwQ9aKw5HKsc3hk491FXWvn7cfDnL3to4QPW78pciznXh1N",
  "key38": "5ZS7Vx5Wd3Xtq4Vdx5GpWfvGDHg89Eqc3UdF1xr6Lokgy76o8LYs6WjzwnKtco8dHjJdjtHcAMzKn9N5qwKKBDeS",
  "key39": "32LWVXRHTAVpm8LwCT242ib1k67yU3dKnhE28riqrbkSN7C8fsimzpDrCoX5s1GNGjxC7pa2AM1JRJsaG4yBK92Z",
  "key40": "4z2UEQpARQvFCGt7igRk3kYXv2SheVmao7AhXYS4c66nRj7VGE2Szug2JvPfKu4eHNQRntfSy6wQ384Gd7h168Wd",
  "key41": "5fkkHHHb8gDpEkhiFtMTgU97MMM4Np7j4Kp6xNov5XghFBeCrtsTUwSSDGdRJdUpeQGy7t9aogQZ2zGKudRRCsxj",
  "key42": "NH9ALeC8kLHcRWB8zrFnRSzE6Wdxa4TNypXqESaT5CYoJj9WU9um3XszXbDd8aFd9Cdd8TZg8yYiboD12EFPxyC",
  "key43": "63m6pZvEPkhNWw4t2xoDcveYwnjW5Dbr9TvaM9kxvCxcCzLib6J9a4WFiowtyqGi4Nu3yotRze3BzD99dbETJ2gp",
  "key44": "5cZ8LNP6p8NHgWyrVwKbMN8zRcgV9qYE5STo7AS52q8ZA7di1pYusmrD3sTgpuhCcs4981iDZTAKoN3FryTAfgRw"
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
