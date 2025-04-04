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
    "49bbeJXvFLhUiEUs2EqKYYeMP6MH52kuKkV4USRYS8Hj5bhX7W1KaPYuH1r79MciqnpjFoon9ekEYeAUskHnjv3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ge2XT7SpW7ktu9LBBaheAtjg2Wpi3Wt5gSrC4ZcVQ5A4KNWu5eezCWwxbo1Xr4VPfPEg5Vpvdv5y7qBpRe6RV8",
  "key1": "XbA2uesTTexJxUivCK2U4uair8Q6Bqkq4wK6fDe52sXskdeArdPoUfwPgt5mKowcEtDTe3FFSCLsXfagCLA2RGr",
  "key2": "343WA2Fo4YZMeuudH6EcYFmY9P8cap3miKxWg4kdAybeyvcyi3enMmMyUjEz59FeSL35YjbaEEcYDAFCVYRDWAv1",
  "key3": "5bETB8csrKkLJmqeHgJ5jdfC9Y6A1DSikjRHstJhKyMuEzX4zRSn17fZDjqrgk8QHYEmzZacn3UUXWmBy2s2Pv9m",
  "key4": "5E5fUC95k1R8qoRP6Cy1AU7UpHtugfp1nyQhnhTcrRrL1WhYBj1pLTJCBZnbdEWah2DbSASbr1NUMvaK2QfJiBv9",
  "key5": "3gt1vW2pVHxMvDoiursRhzTZfyn6t1T9rvcGJ9KBSG99sFivkXQrhRYpVddbxyGytJxx6JSBHeB7Py1rECwKYUnC",
  "key6": "5V96Pc1oHWnzCLFJxeVz7odY5x3P4vJ3LNoQDVoMxuQgbF4MJvAJxDnKv9fANpTAML3qsmDcLiPrDhz4iVX7JPkx",
  "key7": "2h8EhV3W1sHo8MWm5MmezszxtepknwtCn4NHuEb9UBPvEN56P4ord8mJSMSkd99KNVWJeeF8hmRURYwCVYrdk4Tg",
  "key8": "nTwEHbT1B6yEPZ4ALczSdH1ff3jwRpXSUnMUzH9Pp6UPe2pxGN9ALNNZJ9wvo7qd4SkGBEH8VGdjS6Yppiw9aMz",
  "key9": "QjACb8Tfz2nrmwYEG9fabdbLjkLGhJ3FP6ckgxqHz6DeQozKQJ8aw58JnCX1QESR4QFBz96zEyE4Yco81mhMm4i",
  "key10": "2ienxHv35cFDrzXAUwKjVTXQR74Rk26J8PuxbH78F8hqDnf6Wk5RCwjKnXEcczTUpucGFUXk9UB9ESPp6gX4YF7",
  "key11": "545xr6kAvB3fMRF3jvUk29MMGQbJeU6ZwccidiTBKPusYnmJBtykVnbPZnZNASbJcgGMGmVispyjtuGRvXBpyhFt",
  "key12": "3ZBSDQzWroT7i93yV3zYACSounSn7YohztD6Y53LnDCzV9UtgQndcWT4i5FuvbEXH99Lkp86zFMzdTR6qZGe9uBL",
  "key13": "2MyndVqLJgCmqhxrnM52LsB5sjBxyUZUH39LErQSM6MNDTHcC1eZ3wkKfrFSG6eH9kYPZHTnu5d1Zq1iwRA7wbN5",
  "key14": "2z1Shds6MdXQhk6sVymRMhTTABNPGky5Ac6jzzD66AH7pboCaBXYvbFYMBPhFhvn6VKPr4nBv1gSVmiQvgdgYWmU",
  "key15": "4SyYpnUReSamosMuMwjph5xdVjGHR2RSxfArLWsh9oD5TrRcC5xzSZb9xYmM7nrz7x9o6cTtUZEvsmtjVeBgp7Dd",
  "key16": "5fiqaEWfXXF6Y7Q5PcFFBo7fzvg2rZAMsLYfv2LaNcUXvizf6dzMYjw8xXQBCbkjDEiMMiaoQjGhiTZLeHWEA8T4",
  "key17": "5vJxAENhxYJY1YRFjHeCbKkhnaSV98py969DPWk2gpsNZYfywCo5DbMcqg77Gwx5M3CFeXHyv18BiGhZy563CBU9",
  "key18": "vU844bigSC45qpsQyhNqq1Li1D6rDkZ6bW15gfWvxPTbeBgu4LsWFvnQrCzaBa1pHYK1BjxWBABzodaNgKJCRg1",
  "key19": "4LA5A3xAmtGjrmDmfNCVorbjS212LhCHsfhc2z8Pbunjy2NB4z2Zb7JNZ2ASY8AjYuUWfqGQeQihLrbeEk4QTGrx",
  "key20": "3QPXqvLuyBpePUtoaCPiSQbxCYmBtzeD9vsQ889WDUq7FZ6F5HWC7hhKP2bBQES9LDE2LjLR9TePbTh3z25QVAgS",
  "key21": "2S5dAzjUJLN47WXFBDDCajCy2H4vBjPya1egcAZ66ebKwqBUAekyQkB22xiF5PEiYhhErH91TxGbQiHMYgC7m16X",
  "key22": "38xD2tANPC2RBkU6qodXKt5XUiuR2Pkk3SqQyEjpFD2uvaBYBgCgUHJxpGgHVpFVc73EvZAm1GgAAttfornxfPrR",
  "key23": "3dphKGFLNEHiG89Q6BP9bzS8yVBdnyJuLS2dH5Gt19vEzSWMV9KhXRvYWWxXu4dVh1EdGoj3RQJrSNGB1N4ayv2X",
  "key24": "Ffcznx8tbXTPs15tqirEzyhUoXZKYgTMPWpuEX3mUik5tmeFQinvKggERvtMKFThcwmZcrDtQghpxD6hAmLuFfb",
  "key25": "4PLJPpAerBTMmL4W7ji9mGmfBetv9yKc3dxFiRtKMN5j4Vfssggt5WSCka3KL3aXPYJJ4jMX1bAPwzUDFbaePQx5"
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
