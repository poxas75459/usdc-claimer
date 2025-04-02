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
    "4MyVHCahgC2MeXjvbK7bqS7JtvatGFfEpZwjNuYyYXH4NUW7uqY7NsXL4KC2DJvok1KaXiS8cBk5GskWu5ABVKNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uag9mjJZ3gk6pGkz8vomDGWZgMxX8u4XkfBsrp66C922FnkAyRMovW3ZL97o2a8LuBrJrqJndKacNfHA6XW3UXM",
  "key1": "3QrDh3482XPgAWkSARuJkXjGauHhYgu5oxWHA3s6sGkg689kMpJLHKcwjxrk6tuicHHTPQofN3eRsm7ew7v6M8jX",
  "key2": "5fcukNRUy9qvdWGU8VRGdxoWbBbaGyauqWjWofaU11wCZxDEWFxRuLzY54MannyhzN1vJP6m1L19z4to7Qad9WoN",
  "key3": "2NscbTwSLnL4TNswexSPp4jeP3cDxZsJonWLhPAjZQbjatjhZzngqDid8QCbDRvZAgDmpLCTnkdNtiXXGzsQYD3X",
  "key4": "5xJQKNkvuTv3wjyBPXR4TkNZjHXcbTSgBCPCHVHWmwiVRfYBuhAVptcFZfNfDqouBQFeQu7MaNTbzpmZgfLjTMcz",
  "key5": "3vpB7Yd9PXQBHzL4AKFefhvNxWGaTgtdiNHM99gPHBsHVhdaqFp241LAAThcULnz8o48q3uNCE59fTHuvtucGgXR",
  "key6": "4s532GvAuW2p8XShb5zx6EFyVmC1iLnw9pEY7mVmXHa8HuXyGsZ2bGanDg7iKbz17UKHT6HZnSa6DZSFP9zLq7dn",
  "key7": "5aaB12U9hbiSrWQZURhi1Sk1JUSgdFaRYoEUbz8gnb5WarJ8gkgMdizkGy467SPoKCFjsSNNKdpB26ghKk75Txfn",
  "key8": "3Goti4Exoy8JAWchMjJMoQm35gn5HwbFTqtCWsjMAZWjbqoofXfoH8tGdx3f1BteYb7yXxmf4uJW4fTTjcKmy37p",
  "key9": "4D9GvdxrquxZ7tkBTtU6kc89eF9RqNYi5TzNZAkPqCd8HqHvnsVzFMpiubNBEYV11iq6cuyPCC2dDxMPYGn1Rhr1",
  "key10": "Rb7pXGz7CE6LZBF36H7ujHdV2hvDLEwjko9oe2QKd6wgV3zNFihZ9N7HjfwApc5g82v5md7G9xZBAQVCjGVV2s5",
  "key11": "2jGhWdbLo51wSGduLsxkQ3CASyhaNVWxFyYHhQ5Ezr16bd4xM3V8Ae2Mn5E8AsD4KHWRsPqXzwzGPRpvHPQswfp3",
  "key12": "2p2EE8mtsLeiCY5f6ok9Mh8WXBR6Lmr6sCTnRqFy9R9YBNvJZkVrSsch2ySUrLFdDDbVpq95WmTCdbZMuumoja94",
  "key13": "ydtMsmDhUShAHEj8oHaSZ9HLcyM83RKdRKdgQ7y1d1pLB26p2bWGYcxpBU8ddJqYBUVo44TGBcYurmKTAzgWV2j",
  "key14": "AwzAQSvrcUG6MCLGMCjQrMgygAQmeD8eoaJXwbudmTnWj8M9b76RZiEWSP8HiwJCtk38Ts1bFoqsU4YKszNWT8H",
  "key15": "22MtRK3dvEzGvqwufiEfGTJV43HckBknKweU6Gco9kM5ySKPcGv38BqhLPMoiArCb6AnN56xxtmmecFPiKPpjuCu",
  "key16": "3qzTbeXN8JEa3dnXAerRcwi2eaaJFWqANCX2HoXoHToCdNMhMgrxp5enHCEpDM9VPhcGPkQ3sYUeRq3EHujkYYPm",
  "key17": "CvpBuAE4Gz1oJDthXa3tp3hSSsw9H9BCCU3NbTX7sjz3TTxC5AHhLobyL5Ghzu8rjUtS95SotJJHdRBUfFBgpJ6",
  "key18": "3VVUfdGrX3E9KzUNUbtijbbhNd16AUTXppvbjyszYdY7fsBaaG56qdgndhddXePuWxqBCXbLsq79ec89GmyCfnCY",
  "key19": "hXvbHSrYphT4YrDsLd86UnJhQDpoPsfsrUBzMk1gkHHfbiQpJ5oVbUsNUoMCP2xKjFdGCCYQ46K6FV6f8CjFCxC",
  "key20": "4X12xhxVViqaVAFqpeL7NUhVr5D7dBWak32ELhckJdJ6yDABZMo8Y9TL8CTBn8KB4ktk3oNmr3RXTjptPf7nPNWN",
  "key21": "4Unn2X5TpKHVeB9MpFBZxf4X6mGVVYxJWR6bCaKLw3ZnB1D7qQfu8Ljfx3H6P1L9GG9yt5HZnPzw2quXUVaSiAGb",
  "key22": "5tawT58upoQzNxEMXmLr9jgY9DsSC6CLTvx62CZPzM88dgYkEzBWuehSU5eFpCn8KfDeuH1DuV1Ekxfy1gB29rnU",
  "key23": "2hPZTaJMGsrnbRoMinakFr8WZ8Z9jxjc3yaPrP1ktM5Ri3EzbQJWyJx2iBNAfXLNgA8FFsbJvwdH1KHUdRHevC3m",
  "key24": "3tq84s5TBQpYEiXRLefzoYPU74brHvKMNLA8ycn3VBwerWokubjV6RQ9vS8MW5DBE2pcWvzjgNM2SLjuHmpfPYMT",
  "key25": "3sC22RqvgSAzcUzUE9XjzN4N6QVBfVzkkofXeo3adHiq5NmfxSQD9X5jKvpdUUo9Wm6XUhywcMeyqiwdXTc6dE4y",
  "key26": "f2X7yTthYbFayXTChjECYXGRxTgwDgvP9pjaAzaEGXeSy7RQKW8Dn9yJkVrQifBCZbwcreo7ukCgEuJrWhRzFg8"
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
