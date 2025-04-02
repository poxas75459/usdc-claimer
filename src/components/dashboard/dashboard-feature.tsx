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
    "2VVsucfDvMNrgmgosioY8VKTHQxCQSPMuZUDQ32WJSWNC4gmAC2aVGgRDC6sZ2cSubjAHt2rB1vCVncomAzQuu8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsN59dBcbwWWsYFbyJZpG4nNPnjs219a7MT1QoMyRnVbBszmVCC41MZGN2YypKuQibNN33c9duTWMB43MQV1D1",
  "key1": "m5gFvMSVpsprWRHezso5kdTSf1KjokNVzdYuQ29wtUXXWuPm8XKs7K6PHFRwdQ3johWpVrjheV7oFZMvBhjW7LX",
  "key2": "2ioYdYEKrjXRs9hS7XJjR67ky2gREYFKi3f9FRT6wrVxHhkFw3j3Gi9uFrbVpTeJtbgxrJa9bUbm3otUX9RdgW3N",
  "key3": "bVmsu9CsGGwV5La3uCjc18ghVRdhBMQFkLS2azdz4QKm1xyuyGyANexcBpWAHKUXLDUnx7Qxkfwq6WFjyCDEbNK",
  "key4": "2WFWKmtudKMR4C95uakEc1tcQsBcfnm2GY7xV9zwdxr1QmX9v94B5RinZRUf2rg37neJCEVf3g8mJ3TCQt9JbcN7",
  "key5": "4HAHgzSyHwXtQ393MP6qtcC7hwL8pC5coXVd9FGNq43sDx1PXfHh92dSkdziVXKKs1NTU29HopEnkDqn2opBuL2w",
  "key6": "3xEbwvPHck2UGDeyMMuRMXRZSpsmDp6U1SfhKhZvEm4DhUo5PWNSdpgtDoeF3gvobhm2pzRvJ5ZKHy5QJqXvXmkW",
  "key7": "pinsrHkCKaYYjHimgDJLxzdLYPfkHZKiM7yDjX8GrkKHF5MkVGeBNcaXmtt9uX3VCFbzZbew8ffcqLTTXayYD6N",
  "key8": "2XHb4omV84vJXBuXRNiUv7S9wN5uQmx1xAMNEkXSiTG9BntaThfZn1HDrLy4xurtamc8bhtbLZisCDrPEiNpCx7Q",
  "key9": "4578vpxwAf47pcCMp9fHdFFgmCWBAxVCSo83rUYSwWaR1PeHxcrp9LfxLpkGz6RyKxSZt8qzeVS8ozqDRaEsrNh7",
  "key10": "622xGNxBeEus9dF1WAvutZC3DHkhzpV3rFkJFBB9jMZEgRXMXQSPoiJH9WmUfdwLVoJ8425j3ju9yGTSq41a6drn",
  "key11": "3CVpKXAPJ3GzEFpT3qEptaB3MviqtBPom8UWBSXhGwAPNVrRCNTc1i4xT3Dgzaq5wZ3uhbKGqjSWWzLNCwPGRC52",
  "key12": "61pfs7KpgfQUEjyMZtiqRDmD8hUWsbd8kFFa1nL1nWnmV6P27614bS3hSapMCjjLLXQRkeweY3DgtGX9raPfCarA",
  "key13": "3faGyzQgvguWdQq6yhmmiu1emoMSRRR4XXHFYRuVprTEqimY5hTkaco6ZEhoGuVsCrPcb5A9wkQz2q3WuVP36Utj",
  "key14": "54E3wotQPULpLbHgjHmTzvLRBut6MgwsbcnLBm16XsHqa6kTML44c78cckp5FAwgi9xvdj7jLHATpVcCfqUVmCgf",
  "key15": "5gN8JtRDXNrUB3xDhZijcxYA9EDQHD8LgMFs5ZnJwCgkgPuFB4BT1M64cdh2tvPJ8scW1i9AEfCMKXi7PPznZG8p",
  "key16": "3rUF3fgrcaNro2zdnW9xSs3fFipt3nE6Vzn76XnzTCHe44oJyFTCRPGcAM7ksHTBKTUbZZi8LpRNLau29Cw4CWyB",
  "key17": "5WoozAZzvUiFA7ioFA8JXgHEP9X9758U3Rw8PWoZWBnEAZBNpM6GaQkuLGBBY8j9WWESVm5tdv6TXKiWbC6A1Ami",
  "key18": "2jkT8vp9cJ3yAfrqMRVqmUX6AkhPiywB1mcYhUX1gKXg4y28Z59p5QhCekzDpJAyUcXEbzZGDvfJvR96yGXtPDoB",
  "key19": "2iQBRxMyUVqUx6KTBGSTUgL1X1Vro5V8jQRwMuD34dxzpJJzWdnD5XXcLWQgS59bVNx6zgSNP24SqgBjciTbp9CB",
  "key20": "4JXrrsFnnDbqh8D7DQ1r5sDFMVMVB9jLx4N62ZrQMYVQCk4Md7XuZ9aZydK4oyTV6hzRRF252UiKLGXfcBtLU5F8",
  "key21": "4GSLAyWjPz4kFtfujwzDs61n2tSrNziT5LH1qfFznvuruKyMxaLQZXrqcvoqEWaujuJy3zkS3CJAX7uhJVKs593x",
  "key22": "27J1BDr92nNWiZ9QRpiitwwox9hxFR8fKyWD43NcnjNgWNSwMo7rUdL4kVS2BFx9Uoez5hsQEduW9nKLsEsoDsM4",
  "key23": "5D9L8KUPvgC2vZYBQGiFD7aL5omhCvSsUHMFiAcvcbWdZdCoYp1BvP6FNGxSs7FEbUqNC1MNrVLAfgQeHTwXKxLa",
  "key24": "355jnEmgf3D437RhcQNveF9uPNfjpaH6rvGe4xupZYzn2RyH9gU1V5TByKgUfeXEpo4Wcv7yFMYmaUHSdW3rQHRP",
  "key25": "S5qRQMD9Zre3ETsLPqaHKk2eK6MtgSHT2NvDgN912GM2Ks6dsiqNqGgSihesUhH41pALFhePNVEqtCFD3Uw7wPR",
  "key26": "3PcwjaXV9byGSZ3DtmfVQRYK7LhHesCmmHdLH99DGSrixSXko4C8cwu8m1rcQCJKBS3MeVimjZHACX3taqgT9izk",
  "key27": "5JtopBgGJcqjxwF3oQF5z3o9d8HFeK6EEdDDFXyewMSmRWfeF5Jb7qagjgWKA1yEEfht6BseP5Cpbr8w1XwfD83k"
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
