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
    "vdEfiFbLo4DBQCmbk6McfjiX1BHfXL9LP6LkHgehEeUrc5Lfdgm3G8yeA87SHAnqBnCGb2esvnVGK8DK7YUDACR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBPudJ4aYuwqneceVHWJwfx1MJDizM5pz3jELN3priBTRjPuX3yUibNmfqjjJTRipsa1WbHebyFzT8wUBxaumVB",
  "key1": "2hfrVP7xEN5jSoYmc6wa2GXLzBowTDw5u9UNsTG7wd3E5WSo3YWUvSQfhuoPrKdbcQa2YNaUaGHnzDVmfVEGDf3Y",
  "key2": "24KoMHFcrzPZtBgqzGxaXw1K8s3KQN7CcBWSfHTVFNVCYrwg9s55HwHS1AqKyCEhvwy9zAx4b83V6wTego7ahVsG",
  "key3": "5g7714G1xgoPKU3FqJzCtz7K9yWJUBaEmjp8M1vzBxk29X2mugsiqFTtB2MGHiDipFuThmYXemCjyNkTduPXqqn3",
  "key4": "3bNTTjYVGVWLJPCq92EkJXNfeb3VakRvkRTMUqCfyn1SbGH4PJh2QbHnngMf3Ju6KESdpQ79bZbSp3h8ehKRBXsU",
  "key5": "2PUPibabefFXDnhpFDK3SdViRhFj6rNg16YzCSo4bDhSpr47Aynp7gDhuAfMrjPBeoCLQhEKatF8AsSY4ANpqTVG",
  "key6": "5JKBf8CBVc2NcVWpq7dHq5YzVfw7moAHnjhTv9s27U1wMG6FsRHMpPHyQ7MhUFEhjezuhC64JEAadzYsm3Dr4PMx",
  "key7": "4T5BhNzKnbqThHYA8jrcvoS585tz6jnvb98S1MxibdatsQH8wNWq1gRipwxBRmqb7ptocu3zBfJ9KiQnmGaDcqvn",
  "key8": "4Fp7pX4uCmR9i5v8hZZsccodJt6Q3KRt3oandEY2F4pohmTeJgr6XJgoBxMuqosg5dhWGvMqQKd8Z8CuqRomuA9p",
  "key9": "28U1uC2oGvUSfMJuSYUZtNpHHjNbkznZ1NZ78DHcJ9uzugbpfayGHjoHoyKQ1MmU9ZiUQDdKQWJBPLsw98LZ6rht",
  "key10": "22EreGusteRhJLzfhfoikhLHivpwymKzFR9n9uiHDRHrwihNbUxc8QuvRoXVk8RwdohgZng9fR6FuHCiZjeKCSR1",
  "key11": "2V3N6HzVqYnRnytaSX87xNX9j3zd9NYnRrNPPFtETWA2f34rSUcTWu6jaAs3D7ug4oHPpYtgHKovDJegJ8D6rBnr",
  "key12": "5HGfWUeXefnFPApWwarejmRktpjfuKB1YHf7KnTmM6sZy8fFPXTYmdmjWiF5rnGYcmzkdCGaTuqmZiTkas9CFGsu",
  "key13": "d1DPxBvpQbrK8nYdg1fQ6yq4C4BuekExeNDTpWLZ4q5Xgpfws8YQcbzKA4yoc9NnavLQmSc2PJyBASvX1AJZJuM",
  "key14": "5U4gpCvyWog8EjW9L5JxXvhpsNyjhD1akSVU8q821i7dc65tPg96t1haWqEz7NfoRLi3ifvtnJorE3ZzetEGxQNZ",
  "key15": "ukEHKJiQiW98yZFmefaXzLZNXX3cSNo1DvZs2eA4YkWeqZ6iw8CZeZVrgQrtJ3G8s79DnYPz3RfwSgphDbDAYBS",
  "key16": "3kHzSGZUseeKn81PKEFbpKDmpxWRrkRVdGCoFVoiBLHva3VyVTFPy6vAdno3gsU4UfU2Az6GBefT4SmDCn9ErxSd",
  "key17": "5iyrtdwa19VSNn2kxyeayHoLSDUCEUME7t7ypdQLceWfDpFnTu2c5C7fF9PRLLE7yqD4vgs9eBCGkEj8xt7Wx551",
  "key18": "4KamWGjCDg4JYcECSDeVNhSGCN2zas416Do5ZvN442fs7veJuj7LM46cjNvg8dUuej93pjP6urFYHQbeJhrhkNHZ",
  "key19": "hX28MvywaPGC2uAtrjZ5dyjn5GDPtjZ4emrN8KRkr43EZYFKcV6JYwGPctsAhuQAb4SqfzFENepxTNzzC9mjFdq",
  "key20": "yPNEe5EzFVFwDUhbexx2MwtGsTNjJNGiV9WmLK5X5LXnrJLAN5R15AXpqm1nJsm4qLKUk1X14D6syphbLBJDAQq",
  "key21": "67feg3toiByDMpTFDqrpmXyra2Bgjw997VLrgXZtujtiuH6U9mwhtFtPoXY39ynL4yVmhuYRbQszU7KSuUmftEca",
  "key22": "4xTqucd8tygLQiGnUkfQUt3Fqj2vMnjipA6QcCzVCWrWvTYGZps7o2dDuN4SqUXP7avK6bNsAzdFtfoH7JJm89Vf",
  "key23": "48KioCwaonNfvJ2kX86LDtCYTd4urTUccLsxKdkuKfRUJFkWfsxPyPv1hGgKvdUnihynirNUgtyH9TjhnNG97md4",
  "key24": "2b6E3Koeph6689dWR4j8LkNcGhgdQbm5Y5HeNg1qdBLZEq2DVMkPTueGT77waxd2VsYgoHCvanAqT4jEPCeq3SfP",
  "key25": "32d38QAdfnxUCkaaFuX2QdiSCEBH8F5XRDBD6NZTVGuJcanHwGUndyYzVToJxosRJuezL687yDnQBMKTKhohYpPr",
  "key26": "NtuUoMeQwMTkGDSiX2xmUnGLsVvWnvWdCUoUvovGbKMyBiBDqoUVRrrtjGRC3NYEaaZJo9Xebb5vJ7ciGEavAok",
  "key27": "47xbsmkrhsgmMowtp45pWkyaHrmNhQR6AU1reAdTEnejDBeTpvo5S1865eDWrEFDTmopCN3Y9jGy7wfqnAa1KNPi",
  "key28": "4xfCoVCs4pRvLW3zkd8YDcBy6CeoTnxQgd7oywXLFP6yT8uG2wVHnprSpqdCirsMhjBTWYmEyGgxc3WEG5NvRFjN",
  "key29": "5Ph4xQ8jWVTvupPA6yLFRxVGjtKWSZArmQNbim9K5TDXdWmxrBCDGc4nbSPinrZ1WHWphobkHDCa1urCCugvkhze",
  "key30": "2k7E4pLnhCRXTKDx76JsNgrrEkcQdPKR6oyWtDQNQFwkXs2wtNfCgbv3cbcuxodYjLuFQK2r52sTQywiWLGULFrP",
  "key31": "54ZWVoC36cuC2tose9PrR9CUQUo24MeKx8TfdHSsHe59fZQ9eR3SfXd64jB1PsMYPkYzzfvmYZg2q5jUQUqNPeJT"
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
