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
    "4vzVJLqJovhonA4FS4KN2ZeF9ugq89HWXy6REt7zZb7y3BB6yfD2GdjWGophFrCiGW93a9ujhoCzMjz9nwH2moJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxwZcJvgyP7WDrd8Pni3axUpZbfZZWU9k6eXPKafqdoHscnWoSaTLg9dPEWvhdJuqeSXNTsmakwwSRZ1aeokypR",
  "key1": "Ssy7vgpWKRmyoCpEPyg4G6dhZMQkSFFDNfF1nHmFKU1tHBsCMw9Nb2CdfmBneP8rUchEeWZfbqLkWsiLjhhMrfT",
  "key2": "GDCzpujnN7cr2ZgDwf2DSTKWW8ygYdcSui8ukZKADds38ezT2UV2TEowD6sPUj9CxbvpR7Y29a6t9oQ8VpfPNnu",
  "key3": "5d3prKkv3RfHDTukDjpPLM5S867rGJLHNUnk1ZZJiNQRVPSG2vifxFSgkhsjGcFfgdCYoPX7o3UAwDdvZZ8bbku4",
  "key4": "3kFboBcVyVeKNHzX44czCtcSXKUCmCYPmXuZhg5E25z668QWKxQDH8jUmfMfy8PAQdfGQVyA7btvpFaxznFNr9Ut",
  "key5": "5AHH8NigxCaxmQE8X3xuv2E2FojnYW2zUCfH7WP8KNrpUFE8BJXJyaw68UUv3eBKMVSM4LPiS88CDBS6LnwdQeUD",
  "key6": "2S4yae9pqChU9EDoxkN8bpxHrW1aBrpbA9Aje8KSw44Ky5b3jeLvg95KD8cK2o5JMTzqhMuM29wcD7GYDHoSZp8X",
  "key7": "3YhSps7Wk9juJYK6G7Ywfejb7XknhGuk9g8fupQWurJVR7i4TMDrxGRupt8P48386yypsTzoHAwVCeD2fzmLa1Wy",
  "key8": "Ve9cJnPtG8v8Ev83MdwC9c3hcw1mio4FLbSQd3JgQSsS12fjLvLRnXc8P8oCBFLNM1kzpkB9mfvHHXRvRwrPTvs",
  "key9": "5W5UEnCJpBywfPnjWEPzF9BFEEPh3hQWZLfLvFgbc63sXtTGjcgKWddgwbKZbhUyqYKjXxH7bJtFRNkmN6wwZx7G",
  "key10": "2qmBKAEkiU1NXKHYGVXS2YrkPygvR8191RnU3sQRpWwf1E2CoFiWreRZu7ZXCCkLb2BWQjoq5fNDTb9csJcNsJEu",
  "key11": "2EQJLLcV4KiMfsSmLorEoXvUep6d7UY5Uz8ERADjgg9DJ59shcHSCUe819UvLkMJ3sQtF8J7YaorKwp6CtoE71Gc",
  "key12": "2pq3sNxVtd4y6w8sNJvBqvgk42rNdTG9tPu4twLt7VDxwLcghijVSA86hQtXCEpNFgwa5jL62jTvqX3QjTarXNyC",
  "key13": "2ScboPGcg74xj5jsnbF4PZpvxyu8gG3cNFptUfy7nCG2T6yNEJLjo97jSiG1VuA7RPkzBMAhYWJPX9m1DgLpRAS3",
  "key14": "2oUPCTjJvqaeagcBj1HLvRWVLEsX2gYFVNbu64mZaMkCN8Eek4gSonupMxkW5WtqNVbScF3e82u48s4aeTnsR5Hf",
  "key15": "2uoP2XYjF7QUU7cp2oYY2xpmxtE8A1CgkvXqJo931V1aBzEz5mzcKyeZ6eaW5JZG6Yg6BXURdqBBNUgDJUNosMKo",
  "key16": "4TmwKsror9nSGgtArPtNRi8GpG3xKYss1ixprt6FY6reCaYzbKbj9EqBRQbLxM3FWDgwX8zpMAavK7m9QxieYetG",
  "key17": "WqeMMAFR3wUEiqCzEJqCbBib6YN2SwFPhDBdq1u7oPJckMkTXULBjSpDxagZuE9tDZH32MJ4oHGoKj6HhhYUeGv",
  "key18": "45U9fDQbFLi2RwR6KzbcuCHyoHiDXDbbzhyznk9CR2en5r4tBhCPvmaqXVRGLRGceFtoGAwiqVNj9LZawoXiSVjd",
  "key19": "4S9Lx49fKbm2cEQn9AqoWU2Tjj5Be9bvEiYh3ryfFQ5VPPYQ7oqy3DTd2cRipcKykvrw2XZiA7Qaeuvr7owmTqxw",
  "key20": "2roABQDUxS7RVnjwTaub3yVZdp17cbtE9NrUv3y2Pn9V7RU1UwPW9MYzQ63JMAxGGg6y5HqbxLRBzmQyz4viDQQW",
  "key21": "VXB5RJjJvoniXPVSQUfvWcc5mGqjyPLzAoVuAReSUKgB8Qz55cGCN7CnAVMmoFHicGLu6rAi7EX35BvoM8hQ8GP",
  "key22": "3mHDPqj4cagoThQnw4jP47fH22vP8XDHngj6Yp43kXPjKzojRTsN9zKbMw8k7eroLnPw4Be9qx7fMrZ7gXuDrorx",
  "key23": "2xL6oQ84tBSFhWcWhE1YS68dxqLNAokRxJFVtEJTb4ahvGr5vjbDwCEnWFJhLs92PaKHeqHm6qkk7bTXHMRAAjMQ",
  "key24": "5VM4eds7SdqPJ8Fabt1CAu5ZJ7Ws7qaX8ENwNoqdYqz3mFvcfqbHexSRgrd2ub7Gh3y6vrEwRRMGEo5hzTRStfcT",
  "key25": "4fr3ti9Vh1KdstS3feEqscHSeNcq9gxmRiX76T76U6mFb4kAfoLEdy5jihithNc8x1v4o2E3wGRjQUtmmSSoxfsy",
  "key26": "49PNfunk9gWSyD4AdLoTfeh5K85MkVncGo5y4jNSjnqRkSJ6phicsDSxDKrmFhRkSUNAGsU41hT3bRjEXcYPfqXt",
  "key27": "2NPdQ6rz7LEsoSAtxbhUtGjQ6vxpqjuS7SAku9zobrmNhSP7mSH5gWYUZSpU52GnK6Hd2XntTRLcpv6SzgMkKGuy",
  "key28": "41fpNn5fuzcg3RBire1LupdvcS3tJa297r4tptdUh9vsKtT427V67LtCZRF2tFQMVKyyAW2uAUrPoUnebDGFU6HK",
  "key29": "3QbGYVJqjLVoVg1WEVt2LS4X7sk7Njc1C8w9wjerDjtEoSrvHrzNZtxbNXKC37SbfQyccWTmouFQZ7Hpmm61GXAW",
  "key30": "2PBegop88QWRGTJrQiJHH1kuaSzL3PEbxko9vkbdeVWekaWBhwfNgDRpEhEYcAap3hpFkbw3qJTeNVSjSFCiWiQq",
  "key31": "3rAUT4cApk2829oDE4yE8vFXfPwmiT1xFHuCAu56Zhu771GaQbtoTC2J4BRMSZXGAMWxwpK7Wn84xW7JACtMUyot"
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
