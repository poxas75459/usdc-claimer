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
    "2zu8aeKx6nvg2jVzFxMRbkV2dPjyhvtgLSLWvQQHzi3C7T2Zzauh7Z7dX4ujJuEa5X5d9V11WbQSch96ysNBiCDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4b6sTnRXkemKwSN4X9gWwL8jhHUaGHvCNyhgjuDwuxMyX2RtGAKhS2NTnWa8krm36yNpfTRNReau6b4iTmzUWn",
  "key1": "2Q16ttPouAVJbEHcvHYUAz9AZFboBKq36SvxonsFtn3i3nERjK59MvHcfpf3VNCPRAKRXiAZXfpaCc9rShk8Kxkk",
  "key2": "5KTwtEtST256Mamdue6h4CWizR8wdj9cQCLmNXrpifvNNhzyDrnE8fY8sCJrkiDfz43S71spjCzfoBJkx4LSfffM",
  "key3": "3a8Wyy9vY2CiDURUR5vVJvDWtLcHJByhXG8V1up3rNiwFSSPuMbeQXSoxyFDFtAYRWrB2rcz5ZVMyamwZmxUtiu",
  "key4": "3UBsHqXpqZ7KokDpSHRSHshn1DGdYWkYAgiqysGzSWqKd9gxp5ZMGE1Y3RudoH5PwpTwK2QbLNyHP47ScSMA92SB",
  "key5": "3kvpxjFEeycPzkLB455zLR4Zeadi2cVrPvzckuZFmTZCnNo4yPw9swbo1duAUm6hf1WUbUVTW5Epuae6G1KB7Sgi",
  "key6": "28PjueTCwjEebjqQzYLFcm57dp6PykqxvXp5TLrM91g5Vt39Q1SCmiWpFLWhTy3akessENbAFkwYQSjeuM4b3NzQ",
  "key7": "okVXRXsk3jXJEBsRiJJrXboVNhMp4MFzZ35Ckj9k4fJmzXLEVoaSJY5ZNGV2dhEP4Ecty65LLyo1dxKVrjLUeuc",
  "key8": "3wvGD4iJbHpQzrn2FL9JxaccwU4RiTY57yRKJyMU9kMYd5NaDMVATs9j6PTZbYVdUYJx8s4n6kcSpFv6eDNgbYXn",
  "key9": "wkZ7AZpgvaVnByQSBswt8Vh8BoiA866hgrhWMsR9UQBS7TN3YmEffWW8bM311TMJhxKcRNxzZRxkznXSVB3wWjj",
  "key10": "2Hjax3sGenWToPDD6hGhfSS9DAE8Z2cvX2fa1LtuSJmvqW1gsq9xkUhNX6MLeEzW282e45gYncNoyQLwgdfCErRM",
  "key11": "4ZNQk459YPAdSFymJYuwAPDPT7p4bu1kQLfJBEankbuq39zEWQ79sWtjWRA19xhpMBJbQj5jh8eMFPgXLWGNatc2",
  "key12": "rydU8UNhb1uQN1JRkG2vWpwaP4w2Q2cstBs3S225mPS5SpdWnfqqL5ZqReGogwnaLTQHnxq2NeLVmZpZCVTcPin",
  "key13": "5SdZA3JWGqEr5LXnAApVtWDsxcYPwBmSrqS5AXwfd2tkGcvMwCzP5AdU1i9dGPcA7e2Zdfa7cMhYP9EBee58da7W",
  "key14": "25UaU6s7q2A4xMVoFU1j6JAnXUGVBTtRBUsixEztAq7ZpW8DMTjRrG7bD56J9W8Gvf9vrpJQ9SY8pnuwMjSxB2Ld",
  "key15": "4HLtdsbyz7DqgeLTSqp9KCsnpmP2mBUyU3NxYWeDAPS25s3GjGYkxaDVZyL9buK9xonDdubc6cXRBkVRuN8uoRoZ",
  "key16": "49gUnN8yop2uy49rinoF8qE16staLNMv8JZgDqYVghasgMJkMeHkSnoz8YfVas87XcdF96APZTBZmsWSobkx2G7K",
  "key17": "2pYrR3hmf8obtPfkBFGNF5qNZRh6NRwQ6dyhtusPELvkzud2ERAVhNws6vgCSfgUQr6ZsJ5myiDP3ihgkE5BcP75",
  "key18": "2Mn8BLgcP21okdfoq9DMHUv1i3TQou4HdF4fs8WHLpiNyN4Yiijz5EsyeeQruvbgWV8w8nhBAYdDmbgAomb5TvAt",
  "key19": "4g1mJHr1hewkkpvRoSQy7xxbFZNh8zW7cXrNAzBapRJ7HZCvvCmF7nVrqbrHDf7MDGpWGZ6pGrwrRr6RxdEs1wuY",
  "key20": "2peY4XTRiyoQMryT6vXvkrxifUVfL3TDThud4HeVGHt27x7CHXGDZL8XVFxiU5daMGu2NNgyqoEfW1Nzf63sL1Ht",
  "key21": "zxTVG3ijwoDAiJ62LPrKLjSMppKYGk18xm77wiprwdvbhdtMq1ge9KWtj7UDGAnVDMds69LxexABtbg2MYhsJhW",
  "key22": "42TJAUhi9Ma7FZi7qdmb4JEhbGteYuc1WjXTrFYNiXYRfiMQ2qWwrMHrXHyEFr2GFfzgwRdBPW5db1Zy3pRrnx98",
  "key23": "3RAhnkKoUnPwe6NoWVRC184YtSZa3gmG4aZjg3cUGPjmg95GPnynq8tWS6u8hQxtSqvZkURP6B5jZwLkWpFas3Nr",
  "key24": "UFGQWdec1VawEeoFFUBpBjFvdSFkcHTkaaYAstdWqhEWHFHa8LFeQBkzyBTzroKJHT1rwFtnS6rpHwXPEHxi9KJ",
  "key25": "4mKJtugPSehvPCaYKvjbExr3aNWKpG3zWEq2sfEMeCgVQyBsv1K66UgTHtdQqfS18rSD27a1dVtJa3ehhaDjtYez",
  "key26": "2rFazk9G6SWfH9dgAWedZ2rRzsnBTRFcPqt34Jvyt4L7HGRiuqgX1UsWATTJ92fx8Ha6MQZ9NBGJX9VxeYFCKygn",
  "key27": "3DFPPiP25FRo9ft54c5MXTSEzMq4hB1MMbtTLmu39wi6StrBmv9cfWmyJ6SuvRfHi6U4QzFY2TLSNeJMUXyvwmqK",
  "key28": "5tUCZmv2RqJ7osh4gDJrmC3N3WdjLmTscRCsPd3Pceoa72NE4GmNkTncUQfaSvKVPy1wfMLHjjLyjY89muVHftJs",
  "key29": "4hBdS4WbQj7VL2PFAvCF6wZQapwrpsbtomd2kjwoMvvv3qeweRF4TJHPC3RUvSeDkxyeWk1YANG98X7L1j4sEDaq",
  "key30": "53qYbWSXNAkQXCGhkvpsbq6pmWi8bwxvdFYp3uzuemThbi8zNH5uiaLpi2PFX6PZbdNc4RsRKUACDyjTLHBcs6JD",
  "key31": "4eUFpK8KFRt6UTvDiAZKVhAuRoMr18GxpGbvk1azHorE7P13RfoG35aHAzoUT1jZazVZ3smgMxHQqmSu5YoktXZs",
  "key32": "rj2PxSZcLpkBYdwTJ44gnwqWK3h4GfCBmSkg9X5UdwQNqRJE7kEK5eCSEXvMdKB6m46MKrrr4Fj41hEQXb8npRC",
  "key33": "oz6SqH8SWssNLr5pGZuDrKvQ7dpPRfBkfNZ91Ke9owDbPdQFMpYjyVSQNr4PPKMaCRUx5YHj8bGmgf9knQ6t5iF"
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
