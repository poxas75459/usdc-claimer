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
    "5hAdWF3jV8ciXQqUDHeW51MaA2KoFY7R6nEejTMQCQU2PqxWyXcmncX5pMUqDGq7HC7mooMexygcdCGL3dmD45D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbzrfeB1ymNcdJ4Z7zgp31choQdjERDXA3FhVH4dMchKFhzaBKQmscuHzXqnozdbZ1a9EuL1MSoETgyaDxzSW8H",
  "key1": "5Rk6J3ad6Z6sbbdZGzMaBTeTuWYwPpp3dUo3DcwrB1QZPc7XqaQdNE69Q8eDBmmByju3fbHhovAb1sG5iJoXjyGP",
  "key2": "4yi6vxEeESThKSUTYzNtqGz4vLksXfnW4Fk79R7fGtfrNNwmuhmWqDcpHT2dgN19vcnWrdakmhKwXQKUo4NDqwr2",
  "key3": "2bbFS93iDHfCxvYT97mYpjQ1AeRsydDdSjEaWp1NgYLtxwcSgqRa4qpkAEkumeugCYfJpcmEJEL1GtvG8nx6B4b3",
  "key4": "4SaGQcTWGcLjiWf2nXme5191C24AASYgybErgFwixACmEfUmHWUczMMKtfAj3gv8oPuP3HPhuBXWNHGxCbV1kzyb",
  "key5": "4DFxTxsDP5CvG9n9SQp1doejFaZiHrd3U8rFi97idqeKxNx3AgKcaFTCFLQMWkSjuMBAgBXq5BTPTFFsJ3m4DqY7",
  "key6": "E1WteLYXfR7YSbSaKrBhr5WNPZCoEEqarqLJDevNiHFRxy3J6kt9hhjyq5qa85BUskvfKHESN7be3iKSpQfv2z2",
  "key7": "5cQucxef1Ytzep7KtxxGcPRSHyiwH1HQBBEPrZ4ymuVxNX1qYsoF17aJUnxpjXcq7zwTBmuSuJ6etPHBGBuucHyv",
  "key8": "28CQoT4bPwr7YErMoFV6yJSZJqx7jYYn6tzsy77wUPBzmZezULripWEGa7i63CyEinBdHpqoHgHcven6C7Lb1cee",
  "key9": "eDdCDesahpWytkUvEixWit7TCa6fSqYF3zny6Bk3aq3TQvf5wA2oNEL4z5VqkgBVe11LqViE2usq7fSWwECvXu5",
  "key10": "5fxqqCRPUDUkkntcJfP74DwVRtQkTE5p5rpJbRAQ17Y9GosXf6edRpoqWteN8d1hVt5mvpya5vd6hmhvB12WWoTf",
  "key11": "3bhS7D9X4tdFX58irk5TSBwP8ueS4jDXvfWXkAzpaEKbj3qMM2K5ebeA32ZUQ36PaSmwcCPpgTTifXiNRtEgZVt1",
  "key12": "2dqvpFEySyFtE3t7pU3ExKT4DbdHxsdugsBb1TcYE7LQdUvdsD7NFTE2JiXNDPoPeAEzd8zGtf2W3naDiTx3xMnm",
  "key13": "5xsmmRU4uxQDGSi2N2egig77H5XE1jRDbk86v1nSpm94qwynqrwEaTWxnFsuesHF1yMSavpfUnenxJz2uVHeYnea",
  "key14": "227u8THfDiuHuFC5vtNCNdr3XxrtS3W9EYpk4ax1Co78mUyWb4vzZZRqLK5gL931uMbnPp6aqJbt4KcR6kEfparY",
  "key15": "4Rab8UA9TeUY8mWZ3mmepGJC4KvKQXkN1Ho2fxJnKKXiT6FR9L65agvqPL2wXYhp2D1ka5DaZ1QegbD1YK1EqPZL",
  "key16": "ZMFZU5CQok4MLFH95EmhQi8znc9PuTTrFjkv4cnn4rvPZNZLWfZj9DvzZiKa1skddEVR4WJ3Rvm4SeZAZE71Mx8",
  "key17": "2A2Rt87RRd1RrXxYjeEGNg7VkJiBQx1afU2JUQJqzbScDAmcstwfcaMsxrW6TRzgaRvzBfRDHt4EKuG9ygSrt2Th",
  "key18": "4qu6zwMrkjyiCciV1oh6iHutXRGWR9W3y89tvdhYt958uYqWee2SNSDAJ83VbMPmZsCKpfKjumx68T9vCenriXbF",
  "key19": "3K1aSLcVHCo9AvmeLnHk6AWtqDQjyuxEKtZwBgKd5vG9gBKjqTosaJoBuM8kKDLw1zaMc2mva63gXDG7K4PPLpD4",
  "key20": "5yVKjsA6UNGT9te1oM6Md68z6SfziFhpiPSXEFcEXYy9dvbnxxvmpPVbBE1vkDA1TR3FJ6Z9DAsrP2Vk24Tc1FU6",
  "key21": "2BVvCNNvPRnKxuUhip2U9mEpZqAAsUvEBvxyYQRHfSPSBNhttVZsxna4X2LjNrBEqyJhVKjQLtggdjnLbmrZ1oHu",
  "key22": "5eCEzLZFtmvRsTfwArYpUCyJz8k5ZgNYopXPRr58fGxdRdUfFGH6SzDRwnfVAU922VAPRS3s6isajxuXD2oX5P2c",
  "key23": "5CNxfsUtdSSHzczRs1pMTGuNvtgfDaDFLwuMT4L2PevDxrnDiMgXovD81CtdMMbBN1kEwLQnYYzPTdpRtw4WT9gM",
  "key24": "5CjgS5FSevwqftCEYNBfwEjTM2wREWVJzYp7UdcHsENqqBLBAa6Y9L2sQNT7y95EUoPBJpDvASsvHV9h3ENaKoi7",
  "key25": "2XMoU2TgbxwUB2tD5wriQEyxrafiQGFRRcdRDJnXTwNT1PBkmsPG2LCHocAN5xmoNroZsfWDGbV1snUJxJB8886v",
  "key26": "5NpCXHtTHsesaVjJCWhYfCBa6sK1Ca9373rDVnCmcHBWvJ7qNT7sY4XTBMy6k91AVDLUJofXYY85mxhahrxAGJuh",
  "key27": "kvV5ZCZG88R6moTKsUVfd56ndYJCbKer8ESGqx15ewBtwwRMkvGQKZEADSK3S36zY2VYNgJv8UGpo4Z7vrEUaGU",
  "key28": "2qdo8aA6xA9AjX6A7y5Sc8iACkaUiXEogB47hQNWy8Cf5TY9Kb8FDn1xuCVtmfDXYz35cNX1cb5J4MW9DUcrzGtE",
  "key29": "1w4kGSW1bJB7TgunRRR72uBaKWgHeJFHm3y2zkuqMExU71P8r8vQrGX7rib8vBUH1m7Bqup1ZUNwEqKxjBP4EG9",
  "key30": "3xHeBZKD4EJC3HWGezr55GAYFERsb6fo1jp4kXM347oRu2QTNAEDWPnB7epow5m7Q96NcpDTkWUL1VdQCzGZNNEf",
  "key31": "3Au3vfhZbcX2ddLsnfuavvHw9nSiUM9MMBxwSDNnKFx5Yvczv3N1tmtFAZqYLncAy9RKJrVnqxyRpvG66rRo2ZEk",
  "key32": "3PFwAUmQNq3JPSyYw6hnVSZKsKtFpchdr1ddkbDY55ZwGYQb9Aiucotqe3xeyChUcsHD2ShPd7tiv1rCxbmQZGyw"
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
