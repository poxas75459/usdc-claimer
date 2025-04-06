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
    "oLAftkgCK45ZUU6bUaeC8oHW2EVbtWrbmz23cQoAsYQmazkKvd66kPmye9oV8xcBWZyLrdnq7t8FqxoLGoVNukD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjUEZ92GoseA7HqHuQb1VzgTf8sZdNeTyde7SnxxdKP8b7rr1ocbkZ7sTNFU6sHsyPk5iMhSSZnRwuoBi6LsaAV",
  "key1": "4yFfis2xxAbUWzXLfag4YEFirz1b5rVqR5JqQn5zmWr9LScK6W5AYXyBUrytKPeMReQeqpDiCSZweBNM7HtG7edW",
  "key2": "2Qwr2Z4Nb38dLTFiVwfrKsJU5TN9pHqHPULHH7NyfH4zcPrNv7Q3Jx8dT9p4KboENUiNRkTepQyxFmSqsoipT1EC",
  "key3": "5Knfk6hZAK6eYofA4Hdn3SV3EVBgHrDQ2ARbyZBrZJkL8tBcc4BnoLkHML8t8ALHkbeEdU7k4XD56wDoxbfWvriP",
  "key4": "4ymxw41BbnQhn9YDYtP5u7QCSQyw7E2KsnFbz9tejrTTMkHPwy2jx3MoW3EdTjQCwsDwoL3WirUviyeHvnRZvBfx",
  "key5": "pspmThgEa2mXpwMmyZS37vedWcnMW2vaB5ywyN15SqTGa6viCn51pPWXKSaPD2S9ox1t8waKBN3Kpza64careqG",
  "key6": "4riYFM6imoSFeKpgox5hp18Fe8uZd5gFpSDn9Sry52XMYcNfTrPLqc3Ku38CM98QW2hrPwnTpZ8EJCw1U2mkvNZU",
  "key7": "48koeAkDnzyrgtouQYjFVjFzTo5ehxRJrEDGMGRTUyAe8b3zHfwyoo5nKim2BqFYCdoZ7wKhsY7pvyv19QJGFiKq",
  "key8": "BWt7vwjyanw47WbaqqH3dtPASxmSWgCsgkeRdFJtYnD6BuHNs7GafTbnrBzErbPFDq82jkBPvsZdetB3LhxBUbu",
  "key9": "xFTJdx8nCoaYAZDsnvXNUELRyLUD6xQ7UmxJMWf7dgQGmh8eTKcsE4ijqnNHFQFMUvKKRjSUUbQmPgaxWoibPjf",
  "key10": "4YeXRyQnUWvisoRe8boGNFxq6M8GGA2rKhF2seZMFxKU1fzoTyu59zRg8LhLjSQGQHZkhhojGvtQaVA2EUvnHekd",
  "key11": "28RdqPvAMeTPE5m31ae7Ue96fA3SyUs5rsJQzPC4rFmdEwU8DLXiCfjKfdPVoK6h8eC6xbuhSApg6SCBbww8Dd9d",
  "key12": "5WDbfLqtHFvEptTExnz4mNrmwh9CCDZvtfuNDLixfVxsxb5HA3eXdDEDSsbSonmagV1t4xbycvgr7G1aWupcaEHE",
  "key13": "2qdcEfFk8SEvR4bvnbs17cThzqe4wEGbxUCSF2rzebYYwiLaJ3d3XUiP3bPbueGFbn9rFRTGnqUgARFGzj4SJytw",
  "key14": "5WwV2j9aNpC7NNxzc6Ng3PEiab1sxpjknzBd3sttivcqigCVGfGqqduaZX1jBWuh6iSY51SWd2BLcU4Ah9wHbv7v",
  "key15": "5jLy6cdktNjLh1VQp4cWnSmwNn4QkfvfA8p2yeqfu2Vft8jxTuGPByXBixFExbBWrbw7r72vpJDojVSNf4LvSChV",
  "key16": "5JGucPmGzp9B6dwAKa7GUKiqyKNps6sXqLvFKvkozJ9jKxj3ZirLCGLdbnEuuD37Ha5vthwJG9ix8eNRqpHytoRr",
  "key17": "5m3ViSjiEhvMorZBrQ8QMXPZ49rQjLuKK6fEw3AxsJPLd6aiZiYiorjgsbwCN6i5cd9cVSttAZg96Y7BkkmVSNP3",
  "key18": "2Z7CimQwXGY7B9mSVPBrKZEPQoAjUia7zqdMpHN3d2XXGVF5fZFxfitzfHWAfRrPxnKnsYfUACkkdXjtUr2KfDgA",
  "key19": "3tY8RoAwTbmarv4V7y8kGyvc9VVH6YEinehzAJK67LH3bLsZdjLB9HJPNQ9dpqeksfxDqEQFigPFs8uhMjULaUHj",
  "key20": "59q6xBe6x4ftFBnxG8GYxeoRFNrwToMYxav7NwBxkZQMC9neKSNgrj8FHopC9yy3EjfYsoi76mySeuL7LgXjSCQ4",
  "key21": "4et3GzZD1aTeTmoSeWnFA4P8e2LY7CCBwEDJezsgi65viDNR8cHVzjKyXHrnYhWDagTn9axiUk5VhEqUaHZExPFs",
  "key22": "2p8wn5rXeAHZTAZGJAbao6oSjrNWhqTVVeKrKgSMZwnZiBJijE3N2pMvtyPcNFdFTBd3Z89UoqktB1NDaW8KbSHY",
  "key23": "2jFe7oE6HS3VNjvMhM7fpBnZLjXs3YnG2rKAx9Q8dpenNYCrmWG41eVTJSntgaf9r332zDpF9yShk7iHDEckrsPd",
  "key24": "4GXqA3GF2hujMAYKh27STph3LupR6KXdTpYYkKi31cJT9Daq29AzhDjv1GcbnttsLzjkhsuNwcEP6ywcRHgA1nKr",
  "key25": "52vsJhb7JWvnTS263aNhiYfUGuVMhqkHbEQ41vB2tf9s82y43oPdHkHWH94skKkz67R8akZ5Lkiom3EsnZ4upbU7",
  "key26": "64jCAwg8FKQvybfuWJwucm8hDKDWMkKzE7au832KuoBtFiYB7CkXpx1aGJfztnzPWUAQQ8UvQ5NwKxdPVvfyzHE3",
  "key27": "48K88tFYCNYHBpP8Hqo4tRf5bf6agitMQxwZXWhNyM53tbQp1cSbdWsE3CgaswpTaXMWscAUQZbXsinCLey2NXii",
  "key28": "4YETmkKu36PASA2RShmmaSDVSYpQgNJKuothVSr1S61mkddPFjRzrgGJ5XH8ju135rovhZAvRxeVgKzTVothymbj",
  "key29": "4xi99A1GxRFr6XuJAZ42zppmV96EWsZ6KHgwXUZsdAvq9jG8o9uztPQyMiUBq1h3dWGc8NhAHNtykNTdbigqsHp7",
  "key30": "3YDzWvmzN2n8z8pE8A5vBucstTUQJtxcsvKse8XzPosqY3zxopfEXRRpRSZ99r7N39RyFdeorWeWxSAzpCS59DYD",
  "key31": "4NND1LYhzyBT66ENYmWPnzLhGkZpKErNWvs2wa7wg8PDakRt1kbmhJEjrarupapKaPL1cduuotDoWhug6paYTWF",
  "key32": "4XKRZt3bTb7U9DV5hFvsCx9jQZTnPyixybj1Tna3XPfFeG1MvBce5WQQkrFk3sfBbjkhrJ6npKKfAv5b3R2iFDPj",
  "key33": "3k1uPh8i9UkGoSriq928WD11ULTKR6QWbtPD2xv1FTNrcDuAdV2Vj6nEUTFcJ7Zi6bYYK3bHbXwoJQE1qaDbqsZj",
  "key34": "4M1LwtBqgu5LoisrKjtaRzv2xPo47dtMvZM1RxeSErs98VvZmZHpJF8BVd1afvGTJpBp2HM7sSaD7WSimuUKCXsa",
  "key35": "5Q1dATv5vJqnKjCaKSs92ZgtqXFCuqsRq9Q7JPe1Z6NR4RzmjiND8hd8jf3rw6z9CkhxQ2XG2PkQJF8Eqr3FL4ec"
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
