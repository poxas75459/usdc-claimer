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
    "37y7ciMXjbb9MtN4Et4o3h61e8zVLWWuJzuhJ5Bt7rneUzYfFcP4okMJBmC9NcQPanyDPkvwKrBhtDVv8dtKAD9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GGBbfHmgnP8gCBdsesuvY1EaCExbSUMNC9VGwrsGskT6qTcVXTgaA9JUoVLKCd1ZhXFAHSjYtJeARnwhs9h6mz",
  "key1": "4WqmzLwQKTDbDPD32xG5tDYDr2H1Ypcg8EsfsoXkJ1g6tLgsaFyxkGQntWTA1ay4XqARfLiTNkxRn87x2aj65we1",
  "key2": "miyGTCuVEXT6LSjJEo6cjAcMLZavmkRBpxL9kRLEUb4qiqHpmdr3g9VYUsMRDum3zT1TDxnWjLmTVKyorJ9CPK7",
  "key3": "56UeJi3SHUg5jfvEj8za54dUk5zGaP6UDt18tNjMyp7EbAmfdJPjWD7SuPER9j5g8Pie4KZ5G5fhCy7kE41vRYeF",
  "key4": "5XKaxZwxFgqyb2mFtFDM3Qwpk7RXHJG1pB1t3tCExe5CB34CsJhydek5Lynqrkpt2QtBekNpBzDtj5ebYr1ThjJk",
  "key5": "2E58XuwLDPBb4WZPqgKbXYZcyLMFijMoDNfyCm2aUTxSmJmc7m9KTEobMw9aCxweb7yzCryjGo1M6X8us1BKvtJV",
  "key6": "3amG8ci4G6uznX6ARZQUKUS1Pvu6VBNNxbKEqmCFsjHnauuvUvDJaJuYnrywST243qMoYYH664kkxazkFGQXqqnz",
  "key7": "5eY9rRjnbX2nm3gL4oBahqXV16JN7XkzWqzYjcDrMB1aMq3dLzimL8Eh6W6pJTwwHy6LVJRMN83meTLB9RqnoRea",
  "key8": "57Mx3RMdXxTrqEf6yqVvsEHZ7v6Jyjeo4TRejjekjeaigiWQS96B7VPA4x5WSZtwBfPHyjGxUiQr3x28iRa9JQr2",
  "key9": "KHovg3RuxVDhcWC2b76WwunrqHRhDrvo7zDy1G8JbH1Hgn5i1TbhutkHdRcDSmwqZdagivz3HzZ1QRXdXeCCPiP",
  "key10": "62rWwgsMaaJc92Z45MM9uLwrbfhYBnWmHp6tvQiMkhcxu7MjXSfLyySwG9ufUrCGeXMLBzrQshKoKTbtwXQkn3Nj",
  "key11": "61dtSgp2biVBDSSe4YG1amxhfiDvsR2vXnYrHuP17qAVFzBPZdoHjKCkBW1nhuMNr8soMRny7xXz7p462S2f231E",
  "key12": "59tdRkmcsByENcwKhbrGiXznVQimitP2TjRah9Cc7uSBuziqe7dugpaiVJ27vmmV6dgQpcKzZr6VBxbHyiGncHTP",
  "key13": "2jmFTw9pbM6SmFk1C5CWXnLG7bzU343eFfkHByc5H9y2Ao25bKo9gzjUzDbnzoUjs1XuHg2d4BngrBo7TTPpLQNT",
  "key14": "26waH8pLQB124r1xswxo5egC6oXfztEvn9N3ZpNnZFEeTaNhP3jQoZtfpUEMqEveJYrnw2XzJyjrMTRGHnqtHLc6",
  "key15": "3pEm3ZUyu6o2XufjHXugZ8Cdogs3FXosL5gCdSw6XBFRVwRGDQ8ahHo12NSJXnECKjiGE77f9tdFt52Gn73P7gSz",
  "key16": "p73Pn3t3LUJBjPQf5F2bFUvzPS2KNT6Tt9bZ911TnpP669FbWhQKaneLLdjz1W3HJLo4Gq9vLaHXUpucBzgrXvr",
  "key17": "5zYk5X9hEWGrwGS74U8osg96nVMsPT7e2LaZ18rXci9TxBEVEsoYZG92anCFAHgfNCcWXJA3BuekCFoweGyoypoA",
  "key18": "5JFJi47vvrQ6bixXXYKTXVcznictLmxvTdvVgXLv6pg1vJ6k8LgYiN3ngEEUJuirV1pXAsKrc221aHr9gXtZLyC1",
  "key19": "3NYjtdWFKYfedDpGjzJEtuCMQ4wFPeV7entaLhuHaJLnpS5xUuHgdLoutB2jcAr2bPWzgyhUoa7QuCUx3czxA5jN",
  "key20": "2kQubB6rToBEpeeDVAhRJjX9g33MeYVzDYmhTfVK1SzaAJ4CuekA4fbQP4Vte1H5Nt6DN5XCaz8xZJN4fMRkFUDW",
  "key21": "39q9QE6ancq6Daeni8ccYmnmwuM7Ln3bzKi9mUX5zhq8w9Trashi4Pt7UXiLgKYpk4N8E3MUGySn85NoyCsdggAh",
  "key22": "Yg3s1KdJsa6AiNavxExVo8kReGykiQkE1P7eMsdj2ZVtTQPRPVvCqFRWyzjp2xtpFi49cTC46LzdmX4nCavR8EW",
  "key23": "4hSjudV94dRxDVgYfzUaLLMj4oELpYL7UyrnuZeBTQFvoZhYzcfHfKy5iZ4Dh9ZyE5Yg9FX68WiDLyVR8pnRgZCz",
  "key24": "576DrCyDSdoL4SeHTnr9FDxz6EcUV3nPcm32oB93Y9uzC5YKHH84pUEmsfYMTAed2KYqy4ZDC1pqDwT8Roh8YTP6",
  "key25": "uVW37r9c8QJa3VpmUUXG6e99sMaguo56UoXTovxq6LjT8j5CQf4TmxKirLErgR87fDx3Qq4pc4oTDDcqzaX9Xup",
  "key26": "5V7LpjijufJVKXZ24hBR1W3CGbrDntqb2m18jnt1ZScxKGrqNpCQ6j9emZmkAXMPMcRY2QSdonWPtG34zsFjkT6x",
  "key27": "4jYcBGJRpW9qGaiX9tsfTvtiE9RBZCRhv8VsfhxWsaRTAinRv5w5fLGPMzHCve1Ftx2iv1PHgYapmRRHD2Wybovi"
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
