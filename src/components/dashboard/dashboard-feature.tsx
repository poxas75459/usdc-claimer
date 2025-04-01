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
    "5YTfUPpxCZmqXgzrbrqAo8a2KiJaUNUb8Ve5Gp1yrpQmMQHCbh9VhTmLbRKJwpk4shepCyX8kmq28axVZ7V8X2nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YciReTCnDEmmJ4p4yAGfGUmQT3mGVRQaahhzJvb5dTfKCTULckmfWSRZnpjW9czBUDPYGxGnCfQ56HcAomK6SGk",
  "key1": "4NmxA8zH3Ww7VUJR3HEPGXvxRkjecV91Y2guLRzcN37V2SS7qeuMMJXk4ZWHzkGDtPLzRHjVXFGRkYA6YyHuHm2s",
  "key2": "nTutowSumHQergiBtuKGdVYqdBAsxe5qd2SM4LJbJkk6E6MRH6fJcAm9v95JU4zXkJuF4hpdDRzQ7Jn6D2hLm1T",
  "key3": "2kq5CmYWZv96AARkvTyWAQocTLSrfoBV3bT8M1pqci6apKNnr8NEnHrprRpPxqqkcsAe3BngZdsQqmYQjUpfDUWC",
  "key4": "5wrynGgEa9N9GWf3UqE2iJLdsGR95MmmxpcufeievHkfc9RYvsZBRr1ABDePegtRJFWciXx1kxtJ9ArDp6MrcbN",
  "key5": "5p6gr9RDzZagfxZeDhT7Qa3ut8hirPw2e6Pieg8DRYBWDac9uhu1gbxRpMg1T6nrwVpc2Fq85AcVUBcXbotG8j3z",
  "key6": "3qPSgLqEyaoFmi15xdaLDq1uU3e5TiWJvkcExECdmj4ekG6Sdays7L7Kg66k7ZtDDf1tJzwVED6poCsSP6qAKUP7",
  "key7": "2dqAxWy6vnanS9mkhVZJXzHTNBqMEYdJqbLLm4v5AhiTi3tVZCj6MKJbavQCvj4jaABJS4euradvbFqxagFiNmXn",
  "key8": "DDDXRCEX5XSsXB87WwCkxwzbWpNXwEYwfBLSKjRMmi2jTXh8ySGiomVYWZrMpGjiJ6cftc4F624hpNAPpgUqdcX",
  "key9": "3oxG9YPguFqmEkZPVg247g9rbovokxHCRAaJpb8VMUuGXUqano4YrhuTecU6bkbFP8b3H372gdbji1vgfeSXKdAk",
  "key10": "HWAXAyd2MBdzbwHEauWfxGRNgeHsHNbhmHrXvaMrKd8qE8Dyc9RTVmwmcCRgZwK7xbTpAcF5WnTZyR3tA1pq2j5",
  "key11": "2ypiKmXo3UnSkdUp1RiUEXJeakFvfoFbRiMksxtSB5p1jyqcF4X8ixHAq3XCZ3zzonsKKVY7k5aebw8AfL3y6756",
  "key12": "4meJZQPKsh8L1J2uqnrLfv5Y9euiFbjA7fgM7rvX8Nbi3WtjDCKMzjkaWjFc5ySbto7CNHeAchEHEasgNpiAbrAx",
  "key13": "3PGNehJZVjVDbd5yGW9bC4gAns7qL7CtnwrHxm3C7JmvbV3eRExnrK2tmk3XM3EhvLGvXwbMP8zQH69jZwaKuk2y",
  "key14": "Pun7DWZ3NnvLzivkDRhDB6bPdo9J1rifB1zgUbRj3AKs8DApTgTGEScWVSHVDB35jzSf7iwzkqo6oYKVQBgCUvz",
  "key15": "5Q6bRHhurtURoumZ1DzpW25C3GgfeKY8eCRh3o2odi1CANVfDL9nvWDKFYEG7zgTSD3JR1JzUWCAcFeqKzE43QNF",
  "key16": "PCRAQ7PKv4Tw2tDTBsYFPr9adckpXmvvjLayNGAfGrN32FyDLZTsY4SiL47MYNBXrwiKbDdjxPj4nNhuCYRc4ns",
  "key17": "2xUBXUNz8p1dkStDKirkAYDSPe11teHiPeLngV14fezLPQWYtR18q6vs8qe5XNvKcvwXEhGrMuykfjNLZi6SmP1X",
  "key18": "33fPoPvN4FAyAAo7c1NCT5YrBzfV4QDwt9M1kqMK39X2ydw8MPhv7994dLWNokdaBbunBUiCBKFLMJXN5RPqsyRr",
  "key19": "635XwnAuj7T9vU5Xth1cEBygLYDRx1rWun1HEWHbaWit3LJ34VfnNnoPdKVuRut3mXePN5P785sFgvmbTitapZPT",
  "key20": "51ubmZtYVVZpkjibbHLvJY2gEFY4jv6KWjgRQFyUAw5JHHNAtTCdVjhGgPTmamxadYHbeMavUdWWPQTJcuZtYyay",
  "key21": "2jxsEMzDhT5gA3KvStczzezz4ig1XeCZLDcrzxXTvgGtYwicWBzQB5kw9V7pQBAZZuBU41UFunwQYoPks7jnuugT",
  "key22": "4zscqLgCjXbVYV9sgBEajUS9taAj2R6uzZgiTAjwhrpAtLdBt6GmcQTAsM3efDPrKTcVVcECC9X3SucVAEvsuDMD",
  "key23": "aGXcJdjH2cUYbxTUdLyjeqWa8RN8qTrYevu1xpBFGXsmho8zhm5CAVNKnpMH5B7BS8GfAcwKuQzL11VcEFcA2sk",
  "key24": "5VzSRbUkieGRrMHMVdrdGQFWXxipdyAYcgEUHR5pAFUtXpt4F93c71w29Jx9UeV6wCnLx4tkFCkRTDF9EjwVqw9y",
  "key25": "4MA2y8UYPiHEvAZ3o3BMt81xS51vufdpvhrym1DnEzEx9jXbPscSBYy9dCwQZJSZkHdgqwnyPYANPtZK8mqRkYro",
  "key26": "LKi5JhnxqA2ABiU2Zkrc3ogyYeE8S3XmgXwbRwbderPHkR3njcM85aHpHqP3bF5F5EMegUWXDUwLpb4Fhxocktd",
  "key27": "4XnQPgaYxEnhwhvh7Ja8DvfV9p8emtxcFfkujZBVHEL84nu4kzCzTmYZGBZkBZFHj9G4WmMcgTDvnyKXuuMUMG6f",
  "key28": "31yxuwmBqXkTk7xbrxwZLtMVMEs8rvUXJgKTFK1jZyjHu65sWHJ8LLkf6P4v3spG6WPz9C3cDfLzMgYHE6a9uSjx",
  "key29": "5nWS2SaYfPoki66uX9N7hNZfqRixBQPZCGkxvvnJ91S6xsQEkbqoa2isS4WaepH2XntkkeDvpgePYmEDLHfrWbLe",
  "key30": "2ZH26vbn7AKeDs7xJfDe7H4eyhfbPT1PBEJtWXPoa3A6Yqg76pffa8ugboYuCuq5bqfgSPdnz44eo53cLqzs2wNw",
  "key31": "4N1n3j75boyTq1NgVX4cxQoTB6Va9cQ2WExQSeTrmHU3ZmGnkRUEu8C6Q7P2jeo3ap8Uqeuv8aH3s8yAe3ikbUKL",
  "key32": "5N2qCBVb8gJWcQueKTUBNYP6z1QVtmUCFssLVntoSrj2ZTGx9QyGgt443ZKpApmc4LtydfHGibNKeoU3coz98PNR",
  "key33": "3R6AdqngWRMjQxnwiV27SbGf239cdPBQBYqtiRETt8nAHYLRamkze3oD8qDiVxt36WDNeN3rHyuJj7AcosJzFMBp",
  "key34": "55VECgD9KVT1gMiVVcuWyiXp8buhVP8mFtYi6VBUhYpMEjCMccP95BLkeP6y2VaXsiANJxfc3beDTXaAgZPQ1Gmw",
  "key35": "3mRJDYEhecSX3yZf3qGaDrV9xgzsaeZJziYWYKXkh1dnoJd4nZFxgu3ThtjH4zQD4ngoVVYheMHinRMHraTTMDCa",
  "key36": "29VRUYmxQJPzcFsjyxHYbq5VeiEVN9VxhSaT6RUgpa5CGRZ1tdTs8WERrEYmBE2o4GTeRWTMdkvC3m6mVAj4beE2",
  "key37": "5RsLA86Q4PyJ9GUxGfNHPcRGp5wnx5V6d1yZZh2TjGUH2tb4Tdq7oGkWmHJtQzBrfTFnxrVFcUMUJSZYeyHKzbks",
  "key38": "5fnfpRfj1aGnzaTqqDZ4G14Rt53oGU1YfV7dzA43iZcWz4RS1qZ9Hp3LVqJa4qwsk2ZjFfyPNLQn4ZA8ivr6VMuG",
  "key39": "2YkWbHrC9SAiKLtYdJUuPNEP3T75FRCy2HcxzT5jzjjNx6HEggYfcQcphgiNFoXko8PUW5oKxxCfNAC71cLhPCx1",
  "key40": "5WdyW4Dwt2RwLKMb8oBAgXR1nBBoz7NDf8Ba1hrvMV2CnGBAQpEqHhHWchLrbkpJURxfZZAR6iEXifijnAGKXFZi",
  "key41": "43M6vQ1DDCrow9Ni3LwGNw5FDtoqyw7YhxQfDZfLciYPySmJgkEobBc2SPzGj18KRunM95aYcfRvqLUhmJ88dNhC",
  "key42": "3ojaMt7jZGwo82En8sJbNwnFSTxh1eunpBnQ1EB6RDvpm5nhZGRM4Rjj3SdNMNLKfKDA48o6ctdPiYp5ofAPEXFM",
  "key43": "2B3BAH3cUVpa8E9qtW2kWMgq98wKKUCA7piT6AT2MVaD9qcwZBc1Qp8s7HsoX1kHDvhZLbmFdnTxdkYHEw3qFkPf",
  "key44": "2VuEQzWgZ1X1iGQtHaRmd4M3VeBU3T2zLvUDvNm5PTkyNmM7KtoWRDezG4Lrzmi2GJoqnd8uDm7VwjEnNdXNUt72"
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
