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
    "4XRjVoQHsFVYNXYzXPLPynX4xjDvGCdhexGKxNqodKzCyFsTQ2ctS4gDCfjFn4JtjnNFNTGM2EvZutQTFcA7pa5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UTadbq2WgztgJWEyPCBgMdS8TeVGnpynbaEAR9Xq54QtqD3KwNdFe2nZgCryfk5Go4WF9E42zTSL378cD9Zm6E",
  "key1": "3iLn7FomC8LMbXGx9FpmmRsbbFfAyn7xtbwwt5rcm2r77Edk2XqREEZcvfpxFoRo1r8qKZbrJEVr8o4gG3gHGRYr",
  "key2": "4CKCoebJfH2tHetygAVpFBp3iNospu4dpAnXWYvr2fTJn5Rw5AjkJpJ6AFr5qQCiZdfhyWeiU9NrQ1qSoEwgjhSr",
  "key3": "JBcoTcDVyFk2NWCSDYkjFx1QoDWzzm1MhgiVfNWQBbyhDedSWqEHRf9yAGruCxHbkrPAHZtWbTibj4WsknfUmPr",
  "key4": "wx3dES1d9C3kTdeJDWnt6E4GKVQfqnqc879hm8ectRzPccZxX1UV2Qev9mxYnB8eHiByfRZUfJZS1mTBzSPhyha",
  "key5": "2bAuTWztGSrfDw1kTxvRqxf12SodGs2FNVvAadMcigL5Cr6JEtuwPVdBn2g7hg6iEr2E3tGspzq6Ui1cQL9X6yZm",
  "key6": "4hLGVpdue9hCo6EasGrkHwPQU6pCsTGRcsFrXMwuqQ57fGqrDXQU5VX7YFwfewnky3hUtx1q2JwXwtVWUsrs5jn2",
  "key7": "4RUAMDNwYi5zGFScnCdRZrXENZoexcTqZY7gmbyj3rBuLMu9aVxDyj2vucmS9zhAQUj5LfKaqA1dgTY4p8XHMQLU",
  "key8": "3Yu5X62kfdMEzeKvXQhbLqMKrsFiv78bDvFuVJiatoV9473wBnuincq1xdWXgTyVk1P7wQPwNCdspCcHWoM6NFrE",
  "key9": "4ez4ZR7HHKv6gLuiE9EiiKySwpvyV62w98HV5mzcRnQvX9oqYwgmqsLYcW2nE9wx2oMVn931NUfzZqTPTTovNnYF",
  "key10": "4ncmKWZigEbFhLVvh4nm2HBrRQf4AwW1ZDV8pUGsHp5WyNZ3iBP4byiuQV2xQ1XuArEURGzjTq9JGaCekj4dKrNH",
  "key11": "35SEcMX2dcT8XH7mhi6jCGXvyTQ7EF8XMDhsSs7nraDbJHTJd4FZqaPj9Mu4qe9ChsfYVKWa6mjmywFdbUjcxiZp",
  "key12": "5A4LFANT7DvE7YcrCAYBP43afN52WnwY7LN4jWgTZBpsASgztCpHYcndPYj6c1gvGVBxstEvxJprn7LWfvtywstv",
  "key13": "28GbXxCYnXrKdg4L7Z2tE5CmGygbsf2iQorbzLvARjpaArU3Qf9Ff4Y9P52e2n7hRCNqL4K5DVSF6dGhM7SVykpY",
  "key14": "2RhF6xKoNEEPYmoBwx9xyeGT1t3UHVrovAnxc7zWfTQqfw4vy7ZskC1928hteEa7Z9vbW7LdbPuzUtXdkXJ2t6eU",
  "key15": "4dTHCDKu29QWByzgwWoWiJvu7qfBZ6CgmtN2jxFKtYTr2wHLNekUuF9eqokirWdZFxb8SGaVrDpSmK2SxGrSji8D",
  "key16": "Kpcvpy1EGcsqTStj24vgM2UHPsRCtzEBDM5Lng2paFsgQKSYuve19iQP5ShakjpKU9XY9rRw1VYkKPPKUpQ49dM",
  "key17": "4jLTcyosh8P7tLfhrM8h5WAnbKBAWDTcAiW2e9m6dixBtuRwfRUhHHP9h9C3nnJ3CwiDQdgaZtJSZVTC2L7Dx4TQ",
  "key18": "5Fj2T4GE61Qxwz7KhoFS4eQFKDnkfmGmuE7m6kgYsRZyjgU8Q6VsysKCAYY4AQWxncGQfz2AShfqcZ2wj1mChdJf",
  "key19": "tFxNrA37mZSJVg57eVSFxtgBQ7MpgjjpKcVeLVHVk283BLRoRk7w5ZMLz2QWeEQfdWwusgRDw3KpPzRaow8Ngbb",
  "key20": "pd6UBafUBjtuNUHiTU6S4BqugUn7i9kQGA9Hj81iqaFqe7RHDMqtLcTSjpwG1J7J7CYMPw36LwcKS5akYfwRFqx",
  "key21": "5sP3jw9NYULJ7mX7i8TJBUAKmvfnAiq2T2jR2cVMMYpiiiPxxPwXTYNiZgGfJ3qLsdFGVVLHAPD9eanLabft94L3",
  "key22": "3eknVkwVRjXLBv68R3Pc2JxZA1hL4REEq6giDRpa8cn25xWFW5PkL8jNQY7cgUriC9gUh5PgMBhfHvfE5Bx3pL4N",
  "key23": "3YPRpQh9qaW4th9RtVrezfPWXXGBsE1MziqXV8t1EZGvsgL1MDrTVG4TJ271WWQ9uDynQhhj6VnuJCSniuTQJ96X",
  "key24": "3GPfCjFn4kfTdvGoNrpzqmD8qCGSYv8r6YYWs2oB94P4xyUFaPPdx3WNDNDTzawPa5CYryJmtyVdQYc2QvjFb5dn",
  "key25": "5y8WykXcYE6x566yT9jiHL8huxsBNAA2Ut2vuYZAMnBaGLUHukZ2dHtxJcoGbLtqJVdbd9EGhzargA9fa5BXYEJ6",
  "key26": "HP483wvW8FXAMHG19xr4xr3e2S8qbHYwip5EyxFi8RnabUgv9CFKQQ8WWf4FGLd9sDJS27Ez7WF2rQVLwpoKKbs",
  "key27": "5KjdjjuPpjUwg1PCzxvjrApjgKf25q59kB2gu3Mb9oiRJpVaxmr9R6eBwKrF2tuFHM67oyj2MzuXSNuqbga7ek4f",
  "key28": "4KJKNASKES7YNeQ7tSWgS2M6s5hd8xP5v6qwpkRv1ccUjrUd8PyWPEBoSsh4KX6UZYZKjQSaUH1BYeAW72tVUEdm",
  "key29": "3WWc34R2QJPkRCTbbPz6Rhqsr5UCYemrYT8qj4BNczSqQUP8aUYevAYystBTGWB6faxWamtdxr49Bfm5JMjJqJrZ",
  "key30": "4aQ42kuVdqnPH7FCu4vmyCpuUXVEdiHy8TceDFZ1o8gQUPcpmQ6ckv8kvZdWriPZQ2Rfsbp4sQFPWJtiNuoGRnug",
  "key31": "XDZAN4hmSXwwjBA8W5xATZ29rkK2ocqXSRT8JTVomQAmtMjM7jeVcZvSarworGt5h3i9sncs9fhoVSjU7b1Fiv9",
  "key32": "2RxcXbMEwrPHMoDhMiXuk7AKsSrfNLCa9aT27Bj4DVWHcvFThUxi4k6FKuhiAQi6MY6XcKVMCMisxBqxn5ganvML",
  "key33": "2YmHkMngctzXDDCYP8ba9gBtSavv5sKLMySZ8kKBmUcZtvb5STMZmZjD2ojgNChhVYqdzJ4BokjEVmnc3UFCe4aH",
  "key34": "34v5TETAYPMaJmd4jWRA7YNUGw36JE4Tnfti7vDX1ZBJKG4EN9uVtbmXkDwXZtutXq1XK8CfECdtuokEj7oE4dfr",
  "key35": "49HsbP6vNr4fpz2cpdGkSvHYoZDBtYd6LHh5S9DRs2qx5deL1tkBEwsxkq37RmMse7UpsgDQy76AxGQv2Z9B5obV",
  "key36": "4QDYqwmwJUhDYfehPAaTfDkxjo1iWPZZPrsenBYZEChQo9eFKqPz5Q5mWH4T4UnHACTnKu7wXFwUNYyQYKVaxrAZ",
  "key37": "4SW6Ro1bWS39kcU3akGS2MUujaXJDY8MCEy1cx2oQHA9sitHcE5RDdq5Yhwpmd6MgTcJsRB3o3dQQkhMV4Gnsh83",
  "key38": "2pr9aPyaMRY4E8hxgEWEa7CCTwuQZ9DeWBhfauSaFjV44F7TjNXKGhTzBYaRALDDNdqSPR99UDusjMhZxHc8UvJF",
  "key39": "5AcmizugLwSXHgdSVKyTi7mCRK9P7G8xZQwNaz2y3wiz6dC7zBoon4SUx83zm1oN2NUdVjF2kdx7CXQH6wj5tMZT",
  "key40": "4PQputgebFzXg7REcDDKpYVVYoGHtGV7DX1StvSs969sCW7UjjR52T6hJe43CquuZpvbm4E9N3j7izu17PCHw18P",
  "key41": "2oR3kRiLZTn256GtdYX35AiB3pzG9q2ePEpBqcCRkmmMFehg3BAp6CFBegfknUe5tqFFnUhcR1XBQ9RrgSSospY2",
  "key42": "3yvhxBmS6FyL3LWF6ehp7CXkFKJ23HaFKeNWGWMRfVGg4X9U2q3xgb3by7UpwNry9cyU2kQ8CArbPDUbQ9odN7Gh",
  "key43": "54C9crS5NLfFwteqtJqPCm5V2kv3rDt3gWwrEJj4wyveATn3YMMCPJuuUrNvCiVQhZWSYrp4QBoP6FoQc4rvu57d",
  "key44": "3SkDkREp6E82qEgLnfWq6M25G9K4hHdsnaL37VpfofHX1z2U2yjvR8cFS9Assbm2ArKMdWEzuta6Lq4gE9LamwLb",
  "key45": "5V6xAL2NYo3jxSwiTaXYT2yaHUZZr3CoxrwPGKW2m1jrHnP3odYBNY2UPKJrNda2AtHv9NF6YEHv9i4Q1pU5dA5V",
  "key46": "2TfHhmxREycNH5FLGPVwu3wzRwYg9KG3nbwjg7pxjFxBfuS4BMwiXcWDRcLcyfWk9ckgCr968TPA1ThoQ21qd7hm"
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
