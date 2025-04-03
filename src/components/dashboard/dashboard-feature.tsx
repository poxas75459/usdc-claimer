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
    "1u5cTvq3A18nGedUKoB1bYSGqvNiArSR2pZEK3HbLFb86NTvgSU2WKeMFfjsEhASB1Y9Sp299nzkXcGB7thYQBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asDH1KRQGmsanxQjDAdK52d6czJoPdG5JUb7S2rBAo5PGaPe421a3BAFrBFkdPkeqB1t2kQgG9Bxgv28kbbLhJv",
  "key1": "4gbS58X29XVpfp65RxszjgZfYVi65cz81zfgSRtSRfLMcjebej28CSm2T8txbC5C5LtTsBKXVU14faD6xiQQ1oH1",
  "key2": "4JWc6GikeJ4TVN6QQAUDtX48J8XAqjWiEjLNmTbPmZNzba9pJwVuc1oFfn2i3pEG4sHjxfqoMVwiZXdKkoVxzKAK",
  "key3": "4oRy1T9dU6WaCFz6gtZCnnGS6tUuWpveYF6z91nVg2zFNnthqhZgCC5PfEjWAhCPZgFon6e2w6Gdb1RJPQQpAuBf",
  "key4": "2Y6uHNymXMi5gYJBmvUHALfHDDBW49Y8WcqPDQzVgwpgDySgCEmFzysQZbn673VKM5BvGYRzUPLBmpbYnxerrw6C",
  "key5": "2VKRE7PtYAy5HGsEzDs1Vzzr3yiWpXRYxEdfx9emryXoWSsUeZZeqNg1AKk2ZVwAqa6XTDtd3kVLbfP2yKibAwvu",
  "key6": "3wgS8Eh8GwzrcL41c4KZ56PVGtqYZxhaeT6urHEiuZsR7oo8ck7PnMspdzyAsz98oueRvXA5mhJHeq9j41YZwdH7",
  "key7": "2cFjJK6B4gWh3vHVVC9pPyPDRDqvQcR51Y7L9wC8MEmTEYfNrrJs87Ebe2TZ2943VbuQqSZ2neQebSEKPAaNUJsL",
  "key8": "4QoBmWUQ9bdpC7kQiHNKkZKEVQ9s8BDdQ6wv1W5SPMZKC4hMXiHcSTkjeV2PdhntGZrjYjfqbCDNx9npEkbbz2Lu",
  "key9": "4UNJSDNT8EH96w3ztFcigUzRGP7cktfXhg2eRa4B963Dd5NFj2GRRphnHRaydXsC79151Q19C1PYQeAyo6kzHhxx",
  "key10": "3gCM4u3LxeqvfZqGxANGkeS55TkEAKri5hSaPBFefoQJf6ie97e4fb3XSA8xiamdqYbPAUDrXRdWo1ZH1ze6AQfh",
  "key11": "2nuocEKVGEKRCg9H97HDiAxnc8tf9XH2oYc3M1Xb2Wg7SZ7jxe3Mzmw43HYyFgooCR61R78sdVqY8PDVYkAfkuKT",
  "key12": "mQWnSpsCxJ8zshdv7iqbXZv3ikLZR6mN2k8qNXnPNF7zynbS3XfXPcjdxTBGt2F9ZBGbMGke6E5GqwY3ao4iBV5",
  "key13": "5LyuZABWHfGK17WivvtZVWfB4wP6trLM5scLT8hx6ietRkQeffGH9rFgqJyPoEqw1D5LRqGpQUpv4F2KUsuibqTu",
  "key14": "492smQDGP4rpAcixwpUvh7r2ot4DoGFN7YRjrN7A4h5dVx1d5KVQq3WFtYwMa3LJDpGWPoeztyVn5AEdmqjufwKD",
  "key15": "5QnGaheF4HMp1fd6n2gdbWZ8gdpmNGbreQGcQMD4M7vXy9533N3jJKLVaWCKDRp6mHdQJGuE5kwbQdZKDXAHoiuW",
  "key16": "3YmntwiEDKPcocgSL9azxj68Zadj8HUPRuUHYjkp9xBTCWik6LcptDNHscfYfedTaHJFjB3qt3jRuZ1S4wZt6Jdw",
  "key17": "3KnL4na8d8Q1R3gQvRUPe4JML4cqCViwop4oDrvmbhts5BoSG36WzmebrqS7MJcYiBRCEakHVP3TEVVZU3AQKTQ7",
  "key18": "5jhfZ7uXg4a3xa6Yndate6q9ioij5e4Q9hTBy9R6oHPaffEGKvv1u7rtKqxCcoyAjkXdwhdx2dSk8U6VpCjhEfeu",
  "key19": "43vxsNhRCthMKpJNLmSri6QAAmxctxBcK6gGzH6jFKZ7EneecWDz5HvyeLjTf9GqP5ntN43xnhLcHuuXc1NJjsUX",
  "key20": "4uHjcSQYRouBoABkC3ghxPxij5xubWtVk7bAtXM2m54eKoT1ihEDxayMpZJnZCcyCABE4RmUWkZquQg3jaYTD98s",
  "key21": "2ocqFkRQtukZxuUYvfsUasiGsKbXuF6zKBmXdadGjvgsmTn5uy5GHNDx68Zn6p4jAGvxTmf4eY8G4SykTwQuw7mf",
  "key22": "4TfHjQiUouSMALXgcmoeZoZjk45gLrPuGykhKS8sdkBpBfqqwtQS8GzJgAkJ7C8KPoeVoa18jJogQjviXqyMtY2F",
  "key23": "2zMb49NUjifDy35cxSRfThoK2TxmSQmrdQ8do2k7jp6iwGzmVji94tqkFfKWfpgU94pvtTzrHBCFY9dpTNe5LETb",
  "key24": "4WQkiPNdUEHjiu6EYuKcovaYrzJx43yAPbJ6ZgD1Rzjk6ia5wiB5FVjR38UMiGMR4P12HcUP7QbsQMZLuhfuDqNk",
  "key25": "3AYibuKfZ44Vm5xMUqsqcbQyUxSqDRVG3aCF2bccjrRdT5zJHCkuYkm4Q2ucgoacFB2x7DAT51w8z41d9LLvbX28",
  "key26": "39YopzhhX37mgwgRBzBvFTVhXw2iCcEWrvmC3vumueFtbHkGuJDNX9p4a4rLgTTgxGFyAaZyrj8jZ2vphEpLQceY",
  "key27": "5DcZjxiMXUkSeFovPmxS25U6JEYU91ijU4Gaf4Av9MemAJSzhMu7FvmuFtgPxqB21FyCKbfrvcbcpMfFWhPeAhah",
  "key28": "3QhNwd9wxvXcDgFQ7AmAXjzoKGWUza9tqmasEwFSbZmRv76vKbvWJEQA1xa8BgLoT5jQFSHWcB98Tg2Nc5nWcpuA",
  "key29": "hhd2A19HYSfjGMGCtDZ7SvoF12UUhm4DwWzd4wZeQYDywfS7Jhz1nFrFuHnFKnME6eAgqigszBQ25AASGVoCK17",
  "key30": "3j7Cv4Vu5ipGE6gi8bRJ2pzH85Mzzp45ZJgyUZ2wdcu6e5b25wGEJNBEXkGQzV5zB8JM1bMrJ7x5Xt7Q4xyS763B",
  "key31": "3kbLJEQ3PQsW4NrsBJnBt1VAhewqKb8pDjDpjVUDKqoY2yNT9LFqDDvPZWCWnW9X2PMi6CZmi4yiBxQKUmP7PABs",
  "key32": "28Fv24JjuAJgmGD6X742dbLPRHgJvHiTbWpNmfVhDeSzumDwGkddb414YRQQni5QDqp7p7p3NFpKtWAaN3BM8pNF",
  "key33": "5a5eFmAqWHiucsfByP2AoapuDizdVtZnXbbcAPspay5RMcqfT8GGeZ2tuZWCGrLnDpxX35mhZtsWbHwMTbiTEQbS",
  "key34": "56LJvfBkvWvShkBmz96Bj8JW1k2RZkk5CuBNQqgRWc4Tg6Ey7QFtLCVYB2awyuBXFHhWYoPKWXTPEHb4nyrz2inE",
  "key35": "2K1rNWkgwy3ukVM37TG4eifSE1GbdZFGwURwDzg1yt5cbaUuZqJ6WEyyV3rVkP9gYuRFCgzyTkLfdpwqv99REU2a",
  "key36": "5X5kS5gCAHyxuSstDvSMZY4jFpqusr9omWXjZsQbvH8dEmGdUUkytTUi7mLg8PXtRjTPY3NXHNyqoEx8uHqusoXg",
  "key37": "2qVMrJ3j46H8CSZRzpG2CxxYwZuZNehT3kgm2n7fuavhrqVnLcwsTSMG13uzJcNV7TT87k2GEZtMaEUMJ7YSwwgZ",
  "key38": "2Zzs9kx1SaiX5BFFuuNBuTEvZN2JgFRtaQKdBc1LuxzCGY81Ppmo2i4x9CFykyEjWqyfjs76z3EVdmkceV4gEcxf",
  "key39": "VvpzV8cgWoc8q5rmRS4Qj1r3EUagsVZzj1K4Ug1EB5B8CnAJNa3VnPYNhv3gGvC89iyUMVJh6VekukDCaeH6DJU"
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
