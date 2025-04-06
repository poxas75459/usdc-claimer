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
    "3xgQMBgVB1StTGAQPrTL4KDcfbfLs2B88MLEFDD76C5FwB6gMzoakYv8RnyM6VqvxQn6KtArtdk5qUrecF6gi7A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZaC2Yj7C7V3vnrBVtAVfWAVD8mhEkfY9seLUAAjX5u7tiBWHbQYG85d7sNndSR8tNNJEYEsDVZ6MmDeGzDJq49",
  "key1": "r9bzsHqLciznSFj3iNQjAFwTk9Xnc6SCpjrCfxPLhxpLXjbLLQhbgEMNP8zZsnSqFSDZzyMqArKtGWdptwts8Ug",
  "key2": "5mah2krefDPK2Nv42Ed3HsszJX6KWUK6vwbKNeLs7B3goLduXwVpxEFHp11zaMhgCtiMds6zf4rwTJWbTifrnPbr",
  "key3": "2RLfKz9SFQY6ZfZd9FeApgjJefR3vDDVpZfHRKahp45PXj6WYiNCMTaebQcyEvZGP7qZX76XLN98vT5T2wsMVxPz",
  "key4": "61QB62teMCoZhFAEkmKoXDSoG8nzhwaNdbVGQPVrLF9G5LzseWCdvNYbcgQMA4Yw1pBUDvaKTcJwEgx52cgd4dHX",
  "key5": "2V4WHmWQLuEeSiv6YGmze3Zpp4ByJw1YA1jrawkYZj9Wc2jH8ByDkubHESykKiVZPvjUzZACfBQj18NC3C4F8jfy",
  "key6": "3LJPp6CUAS3wupks4FfjQxgfLc4nffpL5UrqU7qMmzxkoACvgxGZvFkzpqKZeVLbb91fuuQYu2ujCYhwZroqjTHU",
  "key7": "5f2d7WsQyjFXXxVr3jZAdYZJEx3TCDyv5nsVuSrpAHNzTRLLffquK3mdmPB9F8YLdcQ3c6Qv6wVkYNvD79JmH7As",
  "key8": "4Q7uwJ81oQ9JuVWYCKjdrHKXjx9xhBZYBpM5E3jPcRhSVfF93J6Z3EQXnUG4whne6Ekq2dxZPxEKez2mzQzCcQAx",
  "key9": "3FtmfnP4mmGNr6KxqKmDQuPxVXLPgbBTDtusiQ5uAfq6Wn4iexZoHVkKKrc375yg9nb37Tokx9pKUknnVwScYvjf",
  "key10": "3JP9PRi2aHSXvkYxrDpSs95sn8FRQHTFVDj1PZpxxJ2YVthmm9QiMHjkodoes9M3hFXu9De3LwyeZYjtVp4V5xw1",
  "key11": "4NsBtoJ7wwWoN6kVkRfX9eLVc4cU1GRNHpmGidfLWek3r5NPgQnyYyPUDMudC8xm12HXjRBP8fEgQRsaogF4Nc8",
  "key12": "QZ7ona2gbtoPbRyuR4inxW9ZQAxkqQQ9KTuRi7d8tnmQQuPtDCVTmjK2oGTzpDynaD4dDSv874ww1Cfs4J2Jyfs",
  "key13": "2h9LD35YceaMxG1uvUpP72M8VEZ8kkJvpK7DJ66Z3LdbgPHynF97qy2iQEdrYqXoiaxm9QmpAErim3YkQ5BL8vHb",
  "key14": "vinmM5oiGoayXpJRzvtD9nudzsT2RL9Gc5MgVRmWV68VbQzjvaLNcJus1LMoH9ZPetL2ZtfG9rQMCvB5seYvcHK",
  "key15": "CxdPp7u5G9fJSFN6KVpoptSzxRnkFDxmpiLBLdfGN8z514B6sYCmMqz165ispYS4ZducdxpGepCG86DYopfD2ru",
  "key16": "2SKW6TArgnJ6bavAQpu5Cq1KHhnsfod6aXjxP2ymrwjckiKx5sPK72oN7SNUD2bbjCuFtCmgvYtJKHpopqSgT9qp",
  "key17": "5BteteNoUtwbopz449QCBvAtPASMajHi82MaXmjQbpxxaC9yu8DDxTkdjqr4wkRXkmRPUAQ3rNooUwNt35JaiA8Z",
  "key18": "Hx23egtwmWNku6qxFBbAKuvUivsszcNkqqgskajaakSaKPEqMCVuuV56orXP2LdqL4FZeJfhkKkg873GhXeidre",
  "key19": "5LY6Ph3aLPcVhpRtAcj2i2d1numV314CRwmGYCVcZHCoCjRTddcizoVtY2eA7xqPjsv3LZ8qv5AHRMbgamvRehsj",
  "key20": "59NEonNLbUth8XKxKjXMmEoGjh83AYaXtQVqgiFzAk5CbrgR1YnZmk4Y6GrkpcZQZiXiwS5G2WQRBNXNqPCombDA",
  "key21": "65DRYEKGewt5fmRvdKhXcMhJfCjRbgC1jvwDqkqHc6WkezrqRhhHbK7awx8m4gnuc8HKkrnSzCHULjUJyghECnLx",
  "key22": "4rhGcLNqwpE2mEnXFWogbuThG7vAoMmtHsk7ApafoNveP8CuxX5SuuS2mjVUtkxsm61VBaCcjrqNTxW1RUJjG7pP",
  "key23": "2N84Yn723c7VSZT94hXQ3opxinzW1NYWduh8WUSnjtWic3v5TJEcHugJuXi3fwb9qieufcVawjaQFi7jpxUabboV",
  "key24": "2zrBUe3SnhVaZCptTzmaVuert4YEBjZZVm2UFu9LRmLZg4WsgX4MtQY6wPWmkwrURQSR8oKeWX3nGgAqRZUqhzAd",
  "key25": "2aBFy2oUQNDMUXWyTrPWpYPpxvdYTvsAQvMzocT9HmxW4U3hmwBHSLP3uEvdppPsp1MvjgopYamUR9WgHFyzADgX",
  "key26": "3iUyVdGmwXEZmsEqSiQ8AV3RpHdeMg3UgcGKTtCis8V5r8wAibKVWHxdJT1yWS7Nq7HAioWbxBGE6u8diB7K45ri",
  "key27": "44uqgBjWMNZNgV3gJxyATavYzUyAoeU5YeFLyrwgr7tS4xTRWzWnHC7Wr951eVpZTo4tupqPuCDeYcB1xxSStBbf",
  "key28": "3ebbvodBdw6Jh38wed1ovdb9r751FxhbqSSx1UsK1JJQirTkzqnnRErCEtVyFpKj1P9KhYii3LSi51WZiy5G7RJQ",
  "key29": "27aHhkJHToxAPdVJNTudEpmkCeopXb8CGEcoVmwtQFw7xCjqbaHBBQSWfMLGJBZQFri2zKoT2aydcbPD21rhTQBG",
  "key30": "4v7Z1RHvzj5QYGmXqPdraLcVNhsedDVsnXybaRyGJ81HJKpbuSa8CPqCT4Ct5pB7cBs2PaCh2n96XjCi2bxFMsV5",
  "key31": "5zZ55a4NjPy3aWStfJ6kyVHG8gqJUmBTGVZXnR7Q7E1zU6KNb5qDwwM3iGWAF6znPmnUrVdTX7hLgRmpCvWZbCWA",
  "key32": "4cjK5xUvQbCQComQxHPm6mHMfHUtv4pMMbn6Km2SLmc2Lkk27TL6owY7fz64RASitAdkFM3mTqf3wheMbT4oXXJR",
  "key33": "2waXuBNDeAJ2nTbLbiwHBe7bfpyQP36nSSQNEy4tBaqrbPSuCsdYGzGbXRQMMyhuosKvFhL3V3pDVuGEHiVd4oPS",
  "key34": "5gi8aUjMfj1H8ssEpaJm8AoEFDLiXpPLJrSCEJLsWcWqrUFdGnxFc54dRyJhinUwvht2tG75Ec89FMvxqPz3N5FN",
  "key35": "48Pn3JZ2Z9aBrzbWRmj9gSfiQVztciBZmxzWxkfqWZDLgTuKvXxrsDwbMuKkAdXezZUPQLzeTZcoV1m4Df5Anhr1",
  "key36": "41CCVSge8iRf9HtDtJMvXN31g2qd7QwCzmE35bZxU9Wk4S3koQ3nFhUuPDN2QgZfYfzoJQk9MvGvTjBhxZMbRdVR",
  "key37": "3cNpUJdskwBnGNoMeZWPXWSRJy5nNqrtDtvm6GQE4qFc6Fgc9GvqdYSMq8CffFAi9nAybCSRxboqd4cdjynt97Tx",
  "key38": "mmJFz4dVGt6ex5Zp8SqRBg5UGmzUDcT5yz4xMEUkrdYMdxreGZ8Dm2qkGKhukpEB8EAdakxhWfwJYMjPeuHsyGZ",
  "key39": "2h7rw2U5B69hbESVMXnetPsLNnKF82Rh85kXkYmXYXEfeTUfWpG2Jj3PF2zLx7qJ4yN8Ch7L2eB7vtRpdUHXd31i",
  "key40": "5hm3aSMULTKqxUfCztSMbDBYQiEAp2QGMJTNi6CuEiVw2AdBHitqvGDKiQQGfyr8YZLK9A96sNZmHYdsYTSTG4ZE",
  "key41": "3S2HJQBHxZxV5TBT4xRMLsRUd48BeHTKQjc2gKjMWEar7fspxdy2dytSHoLr8bxtYVgqpCBcUpNdgRqZy68ZBUws",
  "key42": "TYmiXQtx4cboKvNBqVa8JycRTAdTDgkyKZ2X2gHsj6MTi2AWe3rAXTKi5TzmdZJTjFssCtjxZS4PuLSsz6HrASv",
  "key43": "5QuXbZZBrkr5S8rj2DAdpqasE3nEEDDZrmnWVeWK9P5npAcJL2fZWhJmKTPoUuEY7wuVm5e1ehHMqJMQkaeBvvQa",
  "key44": "5Bn4LTL3VtiCuak7pnEQD4e12VJxFDVtyke3u4RqF5frHnshbBXyepnHFrvPHmLHi9tCtg8Dstb4dGnrY4mwTZ5P",
  "key45": "3V7rvtr94uTjXsCJYBGMY5UCHA4poLdYFciLCbf5mSAQspJt5XJj9iKFa8xJVA7EVRDfjujp1y4dwVP3tFarpMFn"
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
