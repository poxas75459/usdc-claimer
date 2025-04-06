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
    "3JnveWMTFQkY89QqTLXZhizLMpjkoxrGTaQZ15kvtio4dhTXwPf9r4xmKVWyqXtvJ7sf57YdvTSqjpKYZpuMHoGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMTNH8m9PW9SAXVZxUqmtDLSgWyVhTN8Hsao1NTNzUrX4AryJAGxdyhVD38UAxVb3NQcrLbWvrLn4EgSv6TbaJq",
  "key1": "28zHji8VesYTdyjrXgqfjRyDRDodp2ghATWySTMPprJcPBNGrwKrcuheZtfKNEL6m6CpzAyv26mMy9a5cGT39UM2",
  "key2": "5J9iZ4Md5xAMgYR8i24JErWjdbppK5AgAq6kMFxcpbcoGZ3mevGWFRXoBCaUTXbWpXGfv2iFQpwrWk7JMXTRUyFV",
  "key3": "2iEUmpjY64WRCdoLwajAKkXmVkPp21x9sH1rhWXXsxPS4VquXr81RSsArJ1pZy32BeJUm19UNVPdNawUqpB3D1aN",
  "key4": "3852yQQAiKy5Nwb5U5KEVFE8s7AchuZLhA9fDaYRcftpkpFjYZMxZxXEGpFnjsUBEW5oNAT5H5oBU1TDZXaqbGru",
  "key5": "XZN978GiXUeTnUpBGA8Pms58FZYJXvFhbCDiQMhQZHc1TWf46yedBfsAGsmdhmVLfR3fq9jhFa7ZYhmwMPGkRky",
  "key6": "o2p4boMTHoDdm5ye6MFqpKHrYNrm3k9yVbanRKujzPbcRQuitaxA4786GPSjg5MnFVfs2YfKgZzMwkXkJyE6XPv",
  "key7": "3omkm7GrMRjpRa8Qy3ZT5UzyGbe8Q8is7xbUP4gbXAtydrKbAqW3YaHtnwfQVawsoyDmv4vgfyRdBGfjZ6HPGuH2",
  "key8": "5nTbVc2uj8Br8vBmmKcc8Lo69ak2sgh8mZY6BJ6Z1rHcf9WjtwNuWt6j49uwhRNjLxG2ivj5dYWLJJD6Qg5istgb",
  "key9": "4MKyUwdhiHkNGNJ9prmhwGC1tkqYZpbmKggnRGH7XCFgfADm15FTzp18XPNTghMqXdv9pc8QM1v9Go1Wq4kW5iFX",
  "key10": "sqhHdpp6sb7yvZPHx7C1iguqSniFN5BtV4C7GgzMiDxAhrfTqL3oFeFJUqtYjXEqysRguSqmght8t1aU1AfRuN6",
  "key11": "iCd3nPPnAYonqAWJeaBAUwHx9Vq7aYmA1W385Mm9qED8cihVHWJ95jCNAcC1wh2hxUmntyHG4TUDwiNic7EM8wu",
  "key12": "41Pw1tW2nBx2sHtehjv2meEzzPwjRfkFCbaqFExBQg1ajWwohtmZpFC3wz32WeoYYrRNWuJ2eWAGnGPRFc8ZS7B1",
  "key13": "4TXX5neLesEtLUeBxeTDgEzfvEh9cGVxAwKekHYFkiyf4P76o2cxTyPS4RB3bVnbMnBtRHCFrPiEdKTbeZ3U4xmV",
  "key14": "2p1fSQnky5tMw56NwAWXjpnCq1hKhuuhFP9SNM7MxNtJ2DveCMZevQmrMCFjevvzuKxGwC7emMCevoqK2zWgFY3N",
  "key15": "371sbGizN1uQLvfBvCSi2mDAFMNyy2xGH715d1dYtEkqpEfBRRYkXKjZknqpig9EnaY19tuVKH3trZtCoex7c1Pk",
  "key16": "32zrQQ5uRj9AU7z9xN7MnNSxqMsGCH9eXX5LV7agsBbYAt3hZ8FcVfvxbH1j3wKuDN2D1GY1tTA2pQyQ3KLxjEJp",
  "key17": "3RUyCYknd67XdTEFqVbgcyBMdWiNNAxoKw1gHV11KfLzU2qff6me8mDhPLivmUJq7Cqmxqb2bgdtaZzcXNDaUFQJ",
  "key18": "2SZiL7H9EEJe7GEr2Xi6Tj2UmagWZnsBomrSJGDeBCxbfwu1WyENyHdqTeh1P7K618uXAfWjn1hRV9xVBt9VjaG9",
  "key19": "3E6rnSghwv46CHX8NQ4AsLHkKpjSX5Vbx47UNTD7UFM9pYZr1kggrd67zKMFRXnsKJuboBfpTKBXGop9PcR7fLMZ",
  "key20": "4PaEzGpytC5gBLGXneVMc1AG1RojqNPJU3uJDfwwa9ZY2VtvVLFi1a4DeBj6YJuCXmShA1Hx9x3gi9kDJ6axWWgW",
  "key21": "3etvx57VshtZC1Z7Y4R6PgFqDhh5D2AnZed9AMckSrzm3mjpvXy2oHknYHtvv5mnEaEHHwVyeuAadfwUBYrjf23M",
  "key22": "3QtWjYuHTb1qLwdx9einn3KSqSjhjfZuz8XS6kN8vnDYcnGCWi6YyrPJS5A11TGusU1rJvYiheMdiBbRcXgywoPd",
  "key23": "3VaDFgWKQswG8bU5SGmDUm3fCzZJqzqBfkYZZ6hbY38NTUzwfnBjXESENVPTjeDxCXrjNraocAa34gP46QSa68Tz",
  "key24": "S64GjKNcPJ9NCNi9wr9SCkb56zPLXyDM6eAjHbxwaJdVVW8fC4QDqZFm12RiDun3eC3SASPtChcH2GxZWanudTz",
  "key25": "5ekhnaKk1b3U64EG1MJi2LWqthbMho7qmuJsiLx4Do8wmjuoVEuzVi3Q9W4vDbeVt4LJ5wh62RrDbVgTnqpTnRuY",
  "key26": "2Y4DXML1XweAZfuczE7VXYSLJkFxVup6gHKC8v9z8PwoTkkC3k6nwR2XQHNuVv5Gqei3F2vSAZVD1YjbCvxaYQr4",
  "key27": "4dAmL52zYDxLpaUvMcd2xcwV7UirYCgSXb6FNC3rZRGDJ4Ev1zCrichcMi8zAXAqoM2mjfqbXA9UWukPWyZ9WQU9",
  "key28": "4uUyHW4RsydQ5E3HpNdcp239bH6WaeBTUZ4AahRFGDb9uMVtGid6ALzgqgdWXAfNv1RKqwLb5KKp4qtAhQGzKwYo",
  "key29": "4tmFobJ52nmbayE2cKFFxr8GbsfB6CWsjLPQkZcGUm9R5Bty5WoBR5iw9Eez5trKBz6uGeofLPgTP8zwpeYt74Kc",
  "key30": "3yrzTug9HVkQ1KxFywCihk5x3SBw26wFfvZhgicCtA5Vs9LYofi7QDz4twpZoTHQqfUNTizJsp3M3Ng1smH2gX1w",
  "key31": "DNT6nu7AFcaZkzvJbxQg6xDHy6KiA6qo3hr4nhbReMBnt3gPpscmsXyS7GtyReZvHzQACt3SY5WunZVFnZkAWnS",
  "key32": "2X1agg2njW3drCZmt1RxQKgeVHF9PVQM5mj2Vf3b2Mfr6JfHjFVbbe8JcHAdY7YBPtwhfLhcNfKjnB6BjJu7ZPw",
  "key33": "3cUjTc6VWLTeZzbfzM69zhu5qBQg4vuTWpY7VQtVGAaREMJXaaxADrXVsFth12YxtZvjFpmf1ze5RbzJdoJfyjc4",
  "key34": "xs8pdDf9cED9eRWxEfDjBpsZiaDkNDzpNbsisNXawNp8WyNuvGyCSmzDUdoJKW5UJrFqHAZQfjkEpvdk9gkDYPk",
  "key35": "5D4o5Kyyxb267D3PnrWJzSj5MbRsiN5viN9FkB1YK2NDzEzX4ZwW4THeSyT8RJuErSYAXTmX3TEmNe4rWrp1EkEG",
  "key36": "3jSkhCf1M4mD7kmJUMUBVofhMU63BRsroLA5NGbfkni6qr5FLXA4P7e3TyPVK3dzHBfXpLXxNSSa5cMjP4NneetT",
  "key37": "5ZnGfE2xTwys9nUyz6NGy7oVfzxYEXVnEe8yMmgd6fHsoj8DfgHSbmeMonRf6xaBdNtkvKro6ew1vkGaqBThWjV2",
  "key38": "T55BvR7gVYngUhURaU2P4eFaktgCMZ8JQiVAGwFFrLPxWfXcCjeiSeXehRTrfNhHCSSrunei8XvZgeHiKJfCpB5",
  "key39": "2yKFUrruD7diD8PLjy82yTuL3RLpRNyqDLpkRHi9YXBQmjQQxTGx7RFx2PSVRABtRZAH8nnc2g1iFMYqBwGT24hJ",
  "key40": "2pbdKd8SEWWiB5NUYbftYJ1wpdfYsmMXpZowRpSVFjRxRS2Hz6id5FoJtGmLJRQ79fgcdPukCeLQpCpp49VM7JcK",
  "key41": "xsDmezTZhw2j5yJghFcvgC1DkyasemMmcfVzhqyYS6FSnUxhu7jsvDBFqDb4EEPdRpBRrDhixbsjBfDbm46qkUg",
  "key42": "2TZ6FM7MUEGWVFeYyepF3P8n7KCzXiPwBpv9V4LKSmfLXGyXbK9j3GKSyVwAr9MXiG5sGdcD8WG1hGotRNZynEcn",
  "key43": "5owk52Q4HQGZQukYuE8sutHQ6w6CdtEDGSMhATfZRJVFXUaSJRYLJ2qDioiZrEp6pE5LWHs3qpdBEaBTvHwYw3UR",
  "key44": "4EFUWys5kYZbks9FCtVKeHJBVymbYjipe3Fnr68T9dgpfnSa6R41jd9cMEmDRev1D8qGEWtn9ewargtPbqCZFNow"
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
