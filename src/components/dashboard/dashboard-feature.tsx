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
    "3wUf351rMkW1Bo9TXYCpaa1tZ9998HryTpu9C7rUCAYrrocyCxmT9AxScgYmbJcphFW4gBDeFXbDg9B64S7PZPdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhSbPg13ig6vMtdaP6TuPQgbi9HJ9xwhGtfgkZJqxEUK2B4GjPwUfQGjGALnQQEQPtSCk6r2qWhjswmGL91HLpk",
  "key1": "49in5w4MMUx8YZpKmWDjSjLB8XFwK6ELt1Y4HyqkZ1iTMfEbpDbPPJNo95CP4AWeHf4qn9cwzhHFNEFWYeNfxQK8",
  "key2": "47AtCxnhszWZLsDMRk1EaGrCw6RNBidrWUwKj9qfqyhEUYsTXGJCL3o1xvqLBvzAKru5m4Cr3VNiEAxfupW4dkUh",
  "key3": "5Qsp1aoy6aLFapVreD6uQvf6nJa5zETPZHvAsU7i2fQwRMHs25SoiyHRmafgySeRMYvSCpUaHX3mJY6uS8mAeWPo",
  "key4": "3F8jh84RjDiPFHYCtQr76mMrgNocyNCanivVGWayZy1mwVWTkNe7trfAh2wCrxJautGoELd7pTZM98AYAzDvLpNL",
  "key5": "458BJ4FQMBqSCDNgHq1Dpa4ThzMoh1LwiZwHyVq4zCJAAQZdH28pebQTTVbMoyx5HjRQ4exdK48TSiPsC5awdVe",
  "key6": "39obLXcY9o3PpXMxE2emxwYJ5eLDEwDdLx5s56zGr5CrtsGt2LydSKwDHV6s63DJpQrFJBjiehS4BJNGmJr89NaP",
  "key7": "a2kdrmbMcQq7zR2Suit2Bkka45qdUXefwqcYaeywyXKXPuMkPuV1RKRGesnyZKF2HZrBdHa2VoeV249hZN2HkvG",
  "key8": "5uQXQqjXaupp16vdK8Y8MfPKbGSN4L5hYnGBstei57DBv61MUsUnsnWGLafmXwZL5Hakf9FFsmg41KhJZ4SzHMRH",
  "key9": "2kvhisDo1MG5AMpvq4UoRxhqTeAYeR6SUSKLYyTbFZ9vcah1J2TSuocgYTqBhpPRV764duF1m77XYiRzfdxFMpcH",
  "key10": "5EWCNA1X4bgBundSBN1KpxwZwhYWTA38yznApxfxvfHD8vJ75dY4vBYjz4oUm2jcpmBBfWJFdsW831Wb4CByyJbe",
  "key11": "38vpLnfWSCjxXobNpLp6BM1jXHEJAqkGB7K1zRqwS21WJfxwYrKD3D494yfTGChfusQcEZwdHS99iMgXDdQCwfL2",
  "key12": "PCxRXRtPWoY6Dwwf7LUFzXvg7hzxUJuxcByYD11EJXCfnvUmqgmvKAHb4X1DSf2bx26Mnp95jEtHhfhwyxkLzjm",
  "key13": "2mE1wuGxWXFpgHVL82hfajWyx4jWTAn5CKtyzjhtEZ4gkwp8x4u55drYX5HGdQoYMo8vXUdvfxzV6ZBGxPkdsohH",
  "key14": "ZjxVCAHVBhN6ZTz1EXeF7i5FtG7wCh2QyUVhmsMVV4ieoe5jXeoYPqJ5TwMui1ApHnydrQyBNwaJ6DEVyTguShD",
  "key15": "3a9J5iEiMufNTfmKGDiFDDBvud8sMdKJcFqJGNCSA6qgW3csgtuCERpPC6F86uw4fT1VkC9f4Jr5cH7R3qbaA4aB",
  "key16": "2AkWPpGSC4HJPPkKqUfMWExm5dYH6EfJvk9DEivrF844bAgdmxgpQccartSchRFqfRt9UxZhyUpu6g1xxWLe2Pd6",
  "key17": "Tyf9SoyYWN6sgYpDt6xGjLWnjdTyQJGw9QXThW54mitUKkbhq1c4EhccdrHgLo8qWw5es6kf9ewEbB7o1CbYHGM",
  "key18": "swWe7zCRoCNFNBthmJbk31QyJ1GKnVDzLcM1BE79TcvD1RPZ89XwXN87TVQ3n5HbXPJy7oM1KYEnkWedHDGjMTL",
  "key19": "3oFkfUFX1PoyL4TbqDPXjHZpM2Nb1GVDgvF84RsFynjqoYwqgZ4FSnxFnnWgknUHxktvDN9PYE9phX8SKXCmdhwe",
  "key20": "5ewqq1Vmm7REL2psZkPAVoHVGYzL6gAmYMV953Tc3RKHxFtJza3Gmqqc7xNr6StbzBxzyV31hLEsFNYFMWYgLhfd",
  "key21": "4PCaRqRfaaPovpzu3c4TXAzFhsbbi3RDX8myt4McKs7QKQm62z2bDAeFYBm5kBmYb3Lsagb15UhhSzS8NZ8nEp16",
  "key22": "2R5ZnTzCdQxQgQMrqSmkfFMcFQqDjreSiYap5DG5jRa9pAKbgtU1k5vEacPvRQqS9jkNtE7Cf4cWbJvVYVwZyCPH",
  "key23": "4jbayZXP4MQdtBnWbPcwLo5qzbHJjC5VSqWyMwzWi76RyLGa8GFXZjaKAARAre8GGerk1Xa1zmoCjBB5yBvunrkx",
  "key24": "5YHYqDLuzGMq9wgwEzVkLmuXSVfwUqzg8WTmZ1M2KLyyutyU8hGkf2aKqA4WSdwZWHm26qQ6SwMT6uoGiBtcmvB",
  "key25": "2bfK3XucsmyoVBaLD9LrSj1PvSkALGyKmMRovWTNVkvRarVypEwxMWndUSrXW3guW3WviYedCCARJkTyt6NEJiTY",
  "key26": "2sYi2dF8BMJ15BmSgHor6zGCxXVDwZFVjJwbxMgicLusz86fDkmjSeeoJYJXnb1t3UeixKNChQcCmtREfZrmRbdJ",
  "key27": "3EbSozGYMbbZ52CQc2Na5q4Xu8sSR5X3k3vVQpEubtvsUawaMiATVHtnrmLUaK7iFhmKiYbTZ387o2ELKR9aiqMy",
  "key28": "5HFJR4ZWXFB9jjTc8v7dhty8CEKVEh2Uo7A9s4FSYLBpAUF8uYCme7ExqZ1SMsnJ2RgZdY8jjFgBoRkDxpR9DFTo"
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
