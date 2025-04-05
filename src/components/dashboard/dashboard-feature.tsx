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
    "64N4R2CVUAvWozSDiQjy9RTHipZUDvYDLkj8nEJrDSqZ4SESqjwJndDuas5nTof8LPXpZNJj2yStShBWTXS4RLEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NNECQhaaoKtxLu8gSmXNzc7NDVPpjVA73GdPVeDLhChta1BNPr29fADXs9JPXo7548nDEkSR8jUcLnEGihCY2Me",
  "key1": "5VRnsNefF4XN6idXALu7QbCdpDUyHRto2GCPnZb2Sb2cqEuQ4phZ7MFVrd2wsu8RmcUmkgZmd6iESi7L128vE99L",
  "key2": "42nqHpnMH5THnh5dpnXE71eLHGR4UhmqXgLg6gWx2fzCwQNW4rntcqCQUrrVJctaJtkuF7uPZHiHwbXStoNFjPbH",
  "key3": "5NmaNgqGmR2bhVWqQ9B3wCC7w8EUdy65VHCEQULuVZCLfGd85SCgAUebZ5951meD8NuMUbKAcaDH7nx8QGJL3xiq",
  "key4": "9JFccBw1oDZBzM7r7iwgDHJyAfKxMEszsknJj3XUc6DRygmHTrocA4aGLF2WJ8w6o6koBeBti6UXFiH2yA5BKg6",
  "key5": "4Y3trMJTrTiSHZnW1fvX4jxmomyQFLj28DxNqibz1VgWn9TMQNix9v1HoC7m8Cg3rb4PTFjFUAUkMuH6ehMvHttZ",
  "key6": "2cUDGN7pnsmk21XcmU5YkFW1nUtDNJn2DqWcekhd4XB2Q8i4c7Wcrvd8Fd1cuy584Y7mVLpxBAZqwAL2R211s7Hi",
  "key7": "ukAts8NXZWK1wArJT8BdnCjUocqiXEBpFwy2Yue2F3YKUkkX22Ge34QAtGNEGA9kGU6F1BjdqMt6RURCGBEvf8q",
  "key8": "52mNXeqYvNPvPA86M49JV7W1c3cmF7sx8bHGtvuFSEJUig6AcuQ8qgubeobojHqBEg6k1KLfCHiSug7XFnV8kVgE",
  "key9": "5fqut5HdorFBqXiBDZh47hJCfST2xjRLE9yFXMEn7Es9Ap3qXmiy3XYb849CVAobtJPF6iBYonyLKL3G9MfQ2Cp5",
  "key10": "4UAK3TJC7DJEu35PRQdwK6C2gJmk3y94DrTUAJxRiPv8i8NWE9dLDGbDM1YnK7a5xrLm8bf7fXZmpw1wCyedsNoG",
  "key11": "d7aUzbozRQCQcX8crjVnb4TcDS4zG7czeyjZdDz52eK9Nrgeo6JxXwbvy1EMPZSEky4WLfpa8PEDZfowYfqWy9x",
  "key12": "5udiHGpyCgLjRYzD2NqawiJVuV5pVHpeRFVUKAPqvLyy2Jxk89RxwBHbkn777XdAaeh8NbkoN1AwR8PBuxRfBHLT",
  "key13": "4PwRGYQxQseYD2nTNFF22cHZaoQtJH29nkVFdyXsL1deow4t2AriJxunv4eRStbefiv9HqEsNbcv55NB2GrPrEGC",
  "key14": "3T2goJNzygrKKbSc9MjdCoEotxAFYkdksbtmXgqMY3isMGnqBRhNoJCo4KgJSsnpZ5tWhkKnpg2kxQQ6qDYMEzSE",
  "key15": "tpJc7nSZyaGSWs17mpYriFYx1nvUbTU9cTms7z6ax4KnsXL1MUAxfXswDozfDfcuYtPhsXPsRZbfFPe3rhFyuDv",
  "key16": "4xXJPWjHZFqbTvyRs1a5Yp6BorBoTG7YH3ZvCUoveCJQDtASQHZe9CKA7CKvazAqEQXHMSJmEuUi3qFZazwyzYDq",
  "key17": "LjVFkfDgZ49SBhC65UqwSsn3dNZE9eqWT2mtYPEGg2SbEXdnWmYZb3ptFtNuG3CaphSDGWnGeN44Ni1ji3RDmSX",
  "key18": "QnRuZEpy6HgpdUiGuZhwR3SKaiw5GQnf4betyw7ZhMgPSDM2tDHV6wVziTJS26mDpicrgdwz5xE35hC2m8gHTQr",
  "key19": "4aBVxdQF8u9heNPpDyFwcW7wS45Cz4tXCMMQ4DFPKyM3wdSW8fk2Mji3jA95vf4ZruHBDQQVHvnsr55Ft5Lb9tCd",
  "key20": "4HaiVDCB3ytVmK2XUnpsjoxWvCkDhHFUeV9W6GCLEz5KHZmS1JLhybCMk15mrNo9JRGi56ktnVjSSEN58hB7Qivz",
  "key21": "5TD4NoHfJEdESVgY98mT7f6WXVC89PsychuxcB1NaqEWrNRQxN4edTTLB3UQUNSniERfK9UTGrU4rPRsAjdNAwbn",
  "key22": "YQiBeYsaEfT8ZkwhH2Q81YVB1GdD6aLxFChAUXvTRCUcSHe7fqFYdtLnCQP56wqF6X13RiDqBv84aXf9vQMPGh1",
  "key23": "kSiEtoGeeKMxL12JnkvGnKoFKt1s8RhqGejGP44JdbC9ys2TC6mq1yHY3bqG3YWdRPCbCRwGMyfQj2LunpbSGUh",
  "key24": "3tBsh5ZP1BjfyxBhoj1gS6nCPg1J32vTrMUBLqH9G2mRt5kVc7w8XpxS7oSGcj4yaXHyxY4vcf7XhAoz7Nfeh8S4",
  "key25": "52c8gfyQmGpP5TrXroygg35Cjxy96jLZfxeZ7LATyhTErT693zKaLHpq2pmcruiQvy2MeqLrz6D4bg2j4J7PakTr",
  "key26": "5NauyucHERGQQCLG7L6ksd1AyL9KKvxpi3tU6y4tjyvD7UwaCYLsswADPPjSK18d9Lf9nKLgtg5cYRehmmpDMTs6",
  "key27": "2f7s9yTw9BGrD2booUXHdXs6cVFNdXQPQhbTg9K6v9xkWZ1qnwmmRmYaFR9Vw6Utnfv1YHxonwxwaZcHJuMWzco5"
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
