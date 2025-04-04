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
    "JkWi7dKSTVK26pTC525yR8ubSeMCsdxptiDpLvsASxWiVrwVyuW11B6dZ4J2jwCyAeo9bhb4dp4Tko3W3Anndpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwngeUrq8i8mUrWKgnPrUxq5GZa4in9Mzj9BszGYKwyjm1YzkRoAw1LC5JpSYUDUomi8eqcJce7WQD6K3X5vATq",
  "key1": "rxCaMVFZapMVgNzZCAqG6YaaXwLo88XMhFYAjCtwQj66LrUrcWzNBC8JZpFiW2QuE4SvkBS8vquiTX3BpGpQJox",
  "key2": "5a3HpdE9tGc22cdR6q1NQ8E46itmcuYiEvqBknZCZmaJnLRbGFVqUWN6ECniCzn9w87Ry83u1rEK8ta7TuHKjXzx",
  "key3": "3cSRkvtSCm4HZKw3S2cck3fEUuhSYayDHHjpnEGFrsY1CiPm8BAHgdGrGf27JaJHsAoZdijJPPkY4h6DLU5enJXc",
  "key4": "4MP8JpArTEbdpaqAgMPH1UN3qm6Wu9TtcMjLnPV4uFrrraVzuqBAM7oGGxuBkRySgXcFoKeGjnvNUpQbfHtWN9cd",
  "key5": "4yjcjPvKVdP95pCUDVDnrGYBuG6mP5AGjWEAiC1jkBX2usktvZpXgucZU7Q3eKQGd1J3dUp7FiYcjpE78dPLYVfi",
  "key6": "3nT75diL681WCrvdZcBMS6pmXvA5AEVxdKaEgPPiwnBGHZJVYxkFnHbdvpTxGC9PWQDZooQU6kQ1AnXoWHApXfcT",
  "key7": "4LPAq1gzYi5wyqiztZSFMAUuBaCnx63jhktZ7xf98AZEhJbQKxTghjW5MsGPkDCKERTMnoTr49v65E871Dof62Bi",
  "key8": "24PgLS7noLWXrwd53raHmaLzwo4ZyWT5kgDE2opboEZurUwexJJVw8iRk53WQePcH5euoUduCbdvpUmzvtCtBJjZ",
  "key9": "66NdMVoiL13SWksFupL5AHchU9eP7GbE22kPVwAcSoqHoDDY4FzFJsFU3qQzsftfUvJzT9pBUUM4Yh5TJHj9i2FE",
  "key10": "LmbdBRFVuaXoNY7YFFEkVyELfKzpHubFCbqybKdxWfuLPNYAgn4pK9DXyDgiegJ5Acbwvu5joLHxUaK1P4ecLeP",
  "key11": "64dmo6dFbkt91ALdHgo3vCKzg9HwwrGGAhqegXVE1gvBETQKjJrf4kTt2TeVbvKHy18Z4sh6FbKQEA9anjMxvzTk",
  "key12": "3riXQjwxzN3xycejguNWmpr5ap9jPUEvcd5DCYWHiveAdbRdwN28nKJSh2pWQTbacAaeA13eBNur5vX9Q5Gs83CW",
  "key13": "2fT73HjHfYTmrUapDPAg95kN4fQp8ku8Y9pWny2UZoMKJDDNxZoBF7TPyVEjZXVFFsE55xF2cQekPbXxWLnaToW6",
  "key14": "3axVgbVMYC6yxf9uhEDHoDLver4CLtL1sP1YzxEK6sEx5k55cfM5R3ZPVMKfSnsq59PmMEXxTXhS5NqfW4jnYCkg",
  "key15": "4LJ6byqi2bwT17NQLctT15UQ8NDAJqFJTovXhCRzXmh5irfUapz92hNzXJsDXDMbNQd7bysrbW2aa74xRss17YK7",
  "key16": "57VegSzfqRwKneNeRW5E8thaBYEU74tQ6vanw4mBRrf7JkU6KonpT4fsgCZo6WkPRhM4yLc7UMHLdqz4jXQEkDr2",
  "key17": "3eL3B1Babafer7CRUZd7xys9Q2wGJDWP7pf77UVhCCJTf1Pssjv7Lh7yCpPor9FkoSYkqSnR1TUxtFjjU8ZRDKzU",
  "key18": "4wxShKT91wLwEyCcp72ADFNyGQTzr5ARCLDm8EEVL8MwHNtnAezGxs36Qbjr82yZk3ddDkVvRXiDUpFKvwyKYKjk",
  "key19": "5RajF3Kqu99ggALnDe7VENhH2etqp9K6KBubQic6g8Fkw2yjFktq9hLdw5DVT4YHBX4PW9gJAXzkuuBB6wuVsLhF",
  "key20": "4MumTkGYHknrLw6oos22hZbwAyuNfUn4nwTpCWr7uesrpqJaXQBBFXKd9jBMgQ4V6dcKst6c2BieGWzoRa8trZtu",
  "key21": "541JawPqgF6RV4BT8X5MWt7mws59MD3ZQmoENc6y1ryM27SJE66GuQdCvCinERcekX19nbHQrnZirqgjnDqUNhZz",
  "key22": "37ocFUJeD8x7biapNPtvD8Ey4sezSCxKufreFRbukAKMLaruTVo4Gh9rpnSp4bDA9YaPbkZsFRcUVHF5rzwYEUe4",
  "key23": "5vWAT1YRqJWYh8cLvvxTprEFMsytg5veHnCdysZGjM1Aq1rEy4dAQtEUjweSYMiEXQ1Aj6tVLQxkVPskBGw5EDQZ",
  "key24": "GJSQbSSYX7qAXZBdynTxnRk7FXXdZehTW72vJCvjz9frHSQYfcTjEYNU8bmfpnfNaVXLVBHJPv8VqGHZkY37n5P",
  "key25": "51axf1RiwfsPv1zmdBJxSmtyCTjkU7Fk41aF4vcsjHZShikJprpKhFRStkZ4njPpg41tuUiDJPWGfLurser9V5NE",
  "key26": "4QZeXTmVDAZng1sbwRhm4UH7M1ePzyG6TgKFBSFeAQukk3S47Da35AnumHV2jD7a7v7qhjVjfQtBF8TyE4Fa4ivy",
  "key27": "5mHArUiSPXPHHztWuShEe1taRnd38BMbGiE5UhVKh4v7croxQzwxJBiZPJc6y2KyFxMVfSqr4GBNMUeavGduTUcw",
  "key28": "3QhWhyKeE66NELxhq7m5pyqcLjNEkKTgDuWHBMMaR9jZSoEmU8YXtd8d4DmJufWgLEmNSbKrD5miMBCEUCmSusS4",
  "key29": "55NYah7NBrCxpdxNEEv7VCVmicrF1cUPgc86WXC4TqsFdAycZbAkpMc4AqjFDefQZ1CNtSACaQ7LYq6DJAwC4dgu",
  "key30": "JzSKrVcxChdh2Bd9C9ht64WBcimtdNfq2vUyQ1SaoDbzDsY4koxCuezV4hgSoJxMYookzn7hQP7MZ5YUmrCGpsf",
  "key31": "5hiq5zMhoKrffFZ9LqpqxZ2zLXxqKZWniXn9vErUVF8aWLWZ6VZ9eeBeeN51cuFvpuL9Qek2hQWeZEK28krFQTiK",
  "key32": "31Vd6TjhNm8ePMHTgGCVrGsKJ52n1xQSFTAbBVwFLsEzMvPNYfjGyFEGeSiYVDXfngiLft6zC3UUTEPX4V3M7Jrm",
  "key33": "2oFzxrcbUYfEj8e2dUZVBSuXfxsXiMBuEZNpbyEwatkEinfip4wSwv9QwaG5YSu9LoRGy7kkC9JKQh4Zfqdwu5A4",
  "key34": "6717uxi3TYe9H1Dw4HQucwSoqrfPYTiwx39rYTPo8C88GST7UxrnCuBciDWjzhkQ2N6AKVV2AS7jmPYoXGrFrSDJ",
  "key35": "5ntkH8uqxHF3eumMrXk6EryvvfbBv6U6rgvZ118pCTjBNbXqiVJGH9UUk5Na9cC4w9uLkGTDm3V2WcxspAUrVUhM",
  "key36": "3p2CmrDhEQEDNkhgzPdEHsSH2m5T3u4SacHGEUf4qYToQ3XbfnR9GGY8AEoU7tQK4TSWwzqC59iekCWdu6KgVw6T",
  "key37": "28EUJ1E8ShniaVSbFmFE7UddvN7Yoyq2AEopw9Ff7TypfLgPGM8h3Nhb1656fhc2Di2narbkvo3fyio74few3cRX",
  "key38": "4SMTi1jDagC977zNcxDxUHuRPX2Ji1hPWUEsBtJQkyPssexxP5Lp27u1766b2BwGuYZohS3KvWhuukzeyQPu4hRh",
  "key39": "4QWnWpi7Akmm4jECnKvpbBVc64PZ7kDgvpMCE8HehDidtWYtJLoLC5qBsew5Q77RqrdbsjRDU7RqqHguX4k26Ep4",
  "key40": "4nCehjBYfwSbsbWJ7i4pTW4v6EyE1kzzakYz1akNArz9LxTeVLGvmhpxRnWPjos1SgHM8W6r7iCM6A61dhQPydVb",
  "key41": "5uXGpLQrP7XKZ3HL2eHPcny87DXhTJmEALZGW5D2pTiCHG6oGrkaSrf1ZoXvG7bzJBpNAdn6YvSk8g7QbW78A5Y",
  "key42": "2RodfyWX64p5kyCFTFMc6DEkZSPbiHvDEQdiLWC22aTU28BgyBMt9BAKFfHGkg4P4aCpZAbWm227pSbJGHTqA4Tm",
  "key43": "uP4iPx8vHrwjorakTouFqLX2VNP3jkra66gqXGbiL1yP1goG8AB41CkmRyN42pktiZQt1YWD4hgcbyzd1wKBNUg",
  "key44": "7bTkEG7nn5aDYpjNAkZwX8qdwKHcdfBxF31aHKAtzhoFu5Rtn73Kgym1oef6FHzDmUUCU3BpYNW2janf1JSoNV6",
  "key45": "5u2sfSY7dcDAnRggTqT5373upXzuHubRJmbXPwFuvSJBA2tX9m7MHa7YXaAmjGSr6ZBvymrcXtBVzWdYhhY9B19A",
  "key46": "25LaqUBoEwK6eWTtbkTuGRFAaVLCp7xmLjVS4fNZ8KfJUPFiR5JSUWJDEEvjoGPcXgyGws7kKHhPEwh57j7Uzgiu",
  "key47": "4RtU8BNnHQ2V9jrtGXnyBiVYs3zgkJW8ionbDkRUYpiFGhkZyF931xGnHKFqHETbhjHUAZRkMCBcuerGAA5cxgTs",
  "key48": "4mdtTFMGR1Xzka4TeQDrHaX6aJHp3HpSK6iGQGaHa4WApmHgAe6pqaw4xCVpBKgouHhLnnNP5NSkkPfnqUNJg9BN",
  "key49": "5trQBHn9M7YEzVjDNQGAkE7eVUGz2pbUbS5hTdvA966aRYtSSsK6nEgDtKsmdYjUynaGpXeFy9TVFWEoiMAND8dQ"
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
