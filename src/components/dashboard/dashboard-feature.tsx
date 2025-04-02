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
    "4nWhxARjqCHfzDTrGMvtT2s8mYaj11dbZD3sLGEduwAujVEfTPR9Mm8MPBfezfUs7BVaGBeUh89XZdpHVXGXUCbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fponCuaE7nZbkSK7KYv4LpCGgtDu3ku1QfuwmBDgeZYLS9Zofz1Vp2SqJEfckgDrYeWXx2Nu9ooG2qvvYNFL2Hj",
  "key1": "5M13gbY6saEcmoXyWhNFUELcqeZM3FiBGuZLkX7jxqcm9M399ruUxAZTRVRaRAbef1ZteUrfVYyMeLPCUEEw5S6D",
  "key2": "2SpXCgtkLtb3nmBpVzgHvmZkPkNcRDNR26Ans2LJK1BRdb5WU9KT7UKoWb8v7Z3r5yqqZMu2sgzpABrnn4mZkyNs",
  "key3": "3fdc5XpX8ZPBqY12URSQSSTwhDaoZ8rVKTLz7ugVM3nyMKk8nv5NakCS3i16ySSA7A1aTDVoSDYG1i3LuAHk81eX",
  "key4": "2YUtw1ZWcxqS9akXj63DTaJEtZ6b8ojesaiisLrYCsJYBp43smCjPDJeNfJBckjgwM1BPnZmMHvwajMa6CbMfJA1",
  "key5": "3oTG4ipuYqWswwRnLsfCqNihKUL4aFwrtKWz5S5r5dLFNfqPBnfmmCjK8YjHpgypjmnFL3EPeVxQos6MozGmt9wJ",
  "key6": "2ybCkFBNXJbUAdtBZJuiJ1PbRi8qF5wYJs3bJ1KfdzYhHGxMWsDHR22AzbxR86ADwaGU3DHz3TjfU5Dm4CSsaJFV",
  "key7": "5gejsNdmk3zq6nKNDgPyNnayHL4GZcxS5JpQrYfNGZqBuLN2ACn7k4hQyp61179aZexKaV4Vhun1pNDWKRB1iUaA",
  "key8": "4g1t3dhLRoxUWRbg2zSo3sabyviEPdDaV9p2QXTDaGgyQGEQbJcgdvxo4RERF8Q8hvAf1axy6af7PVYdHiyAt8k5",
  "key9": "46Cqo4TZr7XNwghs9Dq4xPKp3vESF7oybvoa8uHMJ7ywxUquhjdG37fmYos9gRz63YcdqUFTMZJyeFPq3F6SbRdC",
  "key10": "RDJ58t3tQwXaTE6Qg7fHPzRnpMggwe4FGPjGc3BrPntiPG8jDyhiiNqgGJFtAYZepD91a5sbXcU6N4Z27iUFv5h",
  "key11": "35des9nEz7MCFcgg7nbTKni9hYjHqoPzmWBsixEL4W98HSPRdeEegLKm76aEV6Huk3Ro5iY1dCnHftfD5nKGywFK",
  "key12": "2BrtdmhxeV6B1f9xvM9McfEwnLtwepRq6QM65LHauMa71pVRBVd3oQQDhfSKHuEisx2tb754i2w6XsBewkktDbik",
  "key13": "2TfQA8LTuN2KfxxLFjb8ZKbe64bcEc1et61ewNXHhGepyaoJynaW2qjhbhyRGfLWyfzp7Ek5oLjSSuUnyiLKNiPf",
  "key14": "32EScmvtDe2z6h6vT5mjVnnP2kancasd2qWPxd9NtUjNnqUJqqqgWsfUxM7NApMedb9HXh2YLgrwkL68zxdrg92u",
  "key15": "5H3nJ1H8zwoNFVHWDkYxq9ZsiYM8kibWAG6cpNtZTtiunxjSJp1Hu7gbXxyyaGsq8amHvjJ7ak56LwEhUCtKNyuV",
  "key16": "3MaVagbX8dcQ8ucnj8KecXNEHyiE58WnSKe8AqimtryxVpmwXWywkqvJt3MQHZH5qsn947GAvf3PAEwsxxQsHr9U",
  "key17": "5gtuB1gsB7aswWWEGVfW8ExpdNZ1HDcyA73UcWkkvFGwML4xwQLW3YPU8zMRHhKMRRg8sJfwq3LPjeSFKMFd7g2h",
  "key18": "4ckfAMNns2vQKf23anfXx84YzahdoWWxWyhAKfbK3nZ14NYw1BqyHdd98cUgvVrMSWgesVvQWqKjyx9BnYSXHCHj",
  "key19": "56sxvkjUx6UQmriBQxqBp75hCcndEi1EjtwXscDmxE2HM8GCvCqzD43kZPG9MbSybQrhy7baaAX8ia35vpnRkdvN",
  "key20": "2dLfXP8vAAoUPzspYXqGc1oJbPkGPfvpkS93WsokRHdEMRL7E3fWYd3ssZEVvBN3cRDh3GF6k8kyxscZ1EZEH8v2",
  "key21": "5KFTSSHXZNLP9go9JKMMauuBsEzAGM8fCuVNMFHWUJX1WgsYo4AVteiHbqaSGf3Gnd8Y8uRbmWTsorCmGE1JuxMh",
  "key22": "3wC4AdnjpnfXTcb4U5a6egBQQ37Wa9YhokmcGcBNhU3sqnxt8E6yPgz9Pf2ToJ5bkZ7vVM9w2L1Fqxy34BcNCYB9",
  "key23": "2aEK1gTaeRQU5cipkV9EotPho2NvxYctDuPUZZwygFfJxkemhRSYmkaibjiPGSBTWSJEh2qv1zS6tGSewKHCmxYX",
  "key24": "2kBzqPxhj24dXa6eqKri4UFCmd8L6NVxEYMiuHz4g1Gx6oYvt2PpJABrt27PWB5aGYBJeDJZ8R2wKyzodnTGZoPa",
  "key25": "4TW3qusCUAiwjtQQfTMHZXSotaD43UZ411KiTSWvPpnPKqizuomVkXGhTVVVD5Yj7Fzmf7xHkcHzn3GRY4vdg9xn",
  "key26": "4AsXJFGFLoAMYJ2gvHChkzdsbFU39J4oyeks18Kz4GvBbuDj6vz39UTcF99mJ8fqQ6QufxrLKVACjgUuGaJzqryv",
  "key27": "5kbn4nARsCCYrDkfSbfnPMuSKc5QXoqkZ363AGKGXFeLFDcEpjzWja6q3NDuFbeMzjsyzr3aZLX4WrGo9PXEeBuc",
  "key28": "5ZdzZGMSVJryXDy8hx1hBFUPUadAFjr7LAedtRvcMLUxzwVjsYqte7ZQPZAdcDQ2zVseDSP5qMtQp9Fya5wAKhk3",
  "key29": "3PENYDbfLJsxs7drzbFuVbxrjK2KCQGQYegyBiqNgDTiL2mxbZZsvnxTStSyz4LC1VRrH8bpW61gzGbuyPPQifo9"
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
