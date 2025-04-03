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
    "2RZHBxHV2WB6VRqJovxcFn5zYhnf8WsWaEzyy4uExXe6psXycR59QswexhyEHDAJ53sXox2U54jQEYU6ytfG9ANG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBEgCKN2MEr5PbXzc6ZggdgX5VYEFuBCoc3GyX5MtaoAP6M3gPFhVLJDkqszjTuTa6x3PQiPvoeC4MDHzZ3ych9",
  "key1": "2TyTYdTrYw3Szk4ykUH5WMFy6YSsHh6oNGAQbbcQVYXNwSuiGU1Zm2MhhSfpD8NzHqnNvQrh7RhvWKDkgZhH9ojg",
  "key2": "4KXMgEZ4Jy6bwoLwEry4hp1Toi8nb4ReydgQPyN2A9prF52hjZgXNQxjaBYiEqjpNqou3F2sG975gRybDN4uoUx",
  "key3": "4WznD7ikqXEGzNd9zMsQSEP2fXan1ERMpRYi6pUCGTSvgYaHFUYukMKazajvduPS95BnZUNCNmbNvCUwn3mXjeDB",
  "key4": "6PUGQYdPUBKeR1SLBniFnN7e5jSpTZMn1hz6Umn9qRLqLBgp3PG86XqopaJJCXZY3EcSbLWKydQso5Pw1ZCvdtV",
  "key5": "5Sj9Dx9o6BmJYkeDAQwp733s48Xt44rtdySSodRnN9XL48GNAohuGzN1GvMEQ5pbqy81au8cvcHHzwMcBDGGAyxg",
  "key6": "5zHJJXVrP8BKx3nCd2dWnjws2wTKxoE2Uu3jP4FD6czeTL9jDRZzc8DhKq641MkE7LzcW7KCXL26bEbXC64UXx9B",
  "key7": "3XfhuRVzGUfFHeNsaxtrUJMcjpgNG4182QnDq14yBYqjPL1MPDQnePpiPXXBZuWbXx4XkGgarLL1r2FRyfTnwcXi",
  "key8": "49apYbDSQJcMCVrEa9q9chkCPAmbxKmfhiTjwjDHbHBpuquwCp4YucBJcpp2cs8ndCg7qm2qqDCKLRBT56azpyAY",
  "key9": "25kqf1EZ71PMYoYjmQnP9mNsHXDbhQEaTBqsmEpHkYjxYGTN2eHA6h4T38887joPLG83iiSUg6CPXKC4Y3MnFS9k",
  "key10": "5TTDSHT8GwDJgft16Awy87MttxYEGNFMWugoUyQVtkKHgmszMu9bKL9ZKrJgbkt4eC31e4NqEyQRDTqFracTXopq",
  "key11": "3MLrkRqPpJpZmXqpmJ3PW5jTbERb9zSUZgfxCEjjws67wwmLFgQfqurVU6Foapei2Yk8HiojyyKozt6nLGPty2Fn",
  "key12": "2wnRPuva6vdaoUmt7Rgec8KVunQmb7xNKpn6Cseq6vDmcoW5YkZu7jTjqxH3ra9WhG1kwSzF1JrYtJ25uqPqdoTy",
  "key13": "5ckvt9huzGcdxJg5CnPdMWdjQaesCxA2EUs68AzJotjfxTWkozSumzNYCWjdgxuSiXMkSkyfd42iGq5iMP16MBgp",
  "key14": "3EvdG7tqUohg4aXpfDTLipT6Jsinki8v8Gdvj7mHR6WHSMCA6QDEiBucwuME27MvnnpR7gA9vH2pTWbNHbibjxfN",
  "key15": "5WXvnzgvCTV4LnqsTEuRC7QuuTrEGFg7RMRjsAW1b28rBsYmAGUqHwXhNJS5pqkBTNvyZz1JD2wRVP6ZxorboCua",
  "key16": "2u7FP1YGuYY87VQ1zNVEfT49gjNdKRgy5bUHGDgL7RZz4XCJFoTzCRs1DtH5G2VYuwwNZgv5R2MQwkvqgdq9eUEh",
  "key17": "2yHV7XB5nxGBsiGaTD6xgqyXfWQz8tTgssWeyBtgTdP7TnAngBVHhDSW9rod9393kySrNnao2tn3R2NWU6ERAnq2",
  "key18": "Mm8g6VeXZCBMg8HjtzP2ALrTCDKWURxQHBkk5cSjs9eDWBZVF9raD66GpQbzo8n42acCqfT2dpBcDB9hLYDWwMF",
  "key19": "5iHuN3gLGLCk7uZ6kngPnXDcdpwbyvAt27RFLbcheutHuvZmtzwpsVjPrPd8YehrcJ518caU9hxvSEBMxpvQ6Agz",
  "key20": "4RNoojseyFRq9RMAySXXWtpumw9hrvnoDPZDLRk2hvpCz9Gn6EqxSHDq2mjcE1NgaDnULAq2WVNbStoM192QHwbc",
  "key21": "4VWUEGBiaD1uU1GZWgboJm5sCeny4RDgpoj8Df3p1UE7ye7pzrne72RxPBpdsRnkRbnbWTpcLobV5FNuykRiHiDg",
  "key22": "5ejUB5KxXoLNcWKEKCqNnVDod6DhBYJj3F3TZos8vCB6Da5xKoVZ4Q4G9U1F3wypRyLpppSedaQc4ae8YqUJnXwc",
  "key23": "5AxbQquFCv1EvHeA81eyxbHQS3E2ePyx5y63pubaz9TnsESEMbjQsS5ij4yXT9VX5DUnL13ybEk91RSBAJbLxHmM",
  "key24": "3jpmQYaTZZ4WRDhWAmxArNH6xYeACvUQirLTGnWvvquXA7CaBQPn6aak9o3uw9stoWUyVZAXVPDbWCBQmLQNdZxJ",
  "key25": "4T3dWeup8MmcXdQX5PxoejJsNb8AQF8s4swU1kX54TdpCMsnWKwxfNZGPmPssWAES5xQhKVvdGGa2byUL4dKMtKM",
  "key26": "43NGFL6PiEEk9juE4Vvpd6U6BF6L29gBghWt4neVVgBzAsg4vrzXHosbzVzFcwNEcwrn1jufd7vA9SNh3Ezy5nap",
  "key27": "2qxNt8ErjUqoYh6Hucpnro41eiYNocCTU1dDMECFdozHeJBozXyXk6Gnf4AcHk1biQNT147k4G7KAZEsTG44uvue",
  "key28": "2uowVPPupqu6vUeAf282ZywTdfUDJ418KSWAbSHjVCVjqaSTUr5es89uE4WZzKVA3ZEdFrvGWShe7RNFvN1WN8yy"
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
