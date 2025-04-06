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
    "4CbnBDn6wyL5uQ5Ek6H2ef3o7HXqfB78d882W5W2GBmRbPLFcxk2NZ225Gn7BJCxsNpxdcmMj4ZitEaDkxvgS1U9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R7g8LrTwXptJkBBJfYKZBRCUyPjZXD6U871zu3ycGFpR7kBstKpoFpPvPydu3GNLa7oxZq5d9jgW4oHD1s3R1Lp",
  "key1": "5D4HGmrXyMxoTuuSv7AcRbFAootzLh7ZWb19qV8WcQx8dA2nF61bGzDNx7eaCV5TTXEEMEwT2rnC8Td5Jki3Qs7J",
  "key2": "2KutjZtQvq7zAp4EjKu7cGdDLevWXuFUwwM1m2AXW3xJJCo8PW6aE4EBXXe6XSVcSc19TYKyYjtcbJpttE6AQQcb",
  "key3": "4J1itRJpRnTfjbbuteY3gUV32rsUpf9jYyw6yGDuEAecqHNVBpvtPJj5CEGjvJxJDJJ1DBa9kffw1NDWEK5Z38a8",
  "key4": "uq8jK1r1DScLkJLEyWhKWvemY2JZzr12sDvza5jM2aXvaZMirTriviCKLZn4PipvX99PqzEgqN8SuFWic6Sze1M",
  "key5": "3TiDUcQwTQKU28SkHkz7bykWeZaRBpgqJuUWyjmD7Bf4dJgaxu6a51ffuvDVpKzELPV4iRYsTxo8vrgjKksmrM9H",
  "key6": "3s3Pbd8frEXrCSt4J1g2jvCcbBzW2BWo5EtUTPmURtpe6e3TuiPmjM6TtkGareHgtBw2DNTHoYBsT4XkybLAnHVP",
  "key7": "2t7roZEYWVCxyT66qBqGdcDaLi9VZ4B81DuxYaBCL3UiZpnhSJ6Jiy1wV58LJcSPa9nvu25aWwKMAs52523V4Kng",
  "key8": "4C6Fahw3rBS2QNqPHnKx1e4yMAaupiPbGM6wRGFQZPaCpofnCNmkjcJ6T63ov5dogqdYD5d7gu8iujuoNEHUmmTC",
  "key9": "3KFNnKAS4ZNPpTwsVhLewd6Q7xt7mjKREDga4J3iPugij4NvS1eWXQTTQksCxesT7KySgB7JcoppvP6UPB8WhVv1",
  "key10": "59wSS5jm6kZ8VCFBquEkTnR5PcDqKDorWvwaXk2sVgtMxc3eaAiHMyf9iEA3SiVWBuySc1NkezYPCyzgwrUMVUwG",
  "key11": "9iAtCiPA23nM1ozahP4Ue6vSyyzLuZf4L5V7ffFwuHh9tA4pM8N87T7tfbxLxXnTAB8WyM7w7gArAGLdS8Pb1nB",
  "key12": "5pyAG2WpeoG7vmJ8uwkmjSHeWapHHYNGpCkFLfGMAJhVxiSnCA1rjbt9xDkFLCFTa73nEMg9jtgEfVUXJXruTD9E",
  "key13": "2qXUgqCshLEuCJuvJhJY6gteqnA6LMZiXvjzPdehdybThJDibBScFQEwRtRTPHpiXPSquMNux54EQS9WqJGcfQgr",
  "key14": "5g4bP5bgAVP1cgWavjYXT1pXZBMAS13uFjH7joEEiYcJfTngWqG5suBYrCh2yYjFVKjsCKgeAPfrfUPAPuREoBBe",
  "key15": "4A74JU7AsCKiZZwKtKhrGxspESpYdmgBssPiaAGNjMbHBL6ztu7a921xYQRBLWjP7dU5mYd7W3PVZSu5VdDHKkS",
  "key16": "3jpHLbo9wW57WxAj7xuEfDpmdEE83JeK7YwXRP5o66cmrmwpYQfPQ7VF2AuPNhF9q2eZraQpNuucTcebHwsctUe8",
  "key17": "3UPGNN4sGdosdem6ZbEndmpcPzx53NadWiLsaSG6xqErzmE5LCnXgmXn27CQ1e1yjaniXwdzT5biXGUuMGyuyoC4",
  "key18": "3RXKwEC5kNP7gHsioKg9pQc9Kd697Zcygc7tK4HLZVfhHsoDaqpTsNRd1S2wi8AG7oykUBukLyCVaJ7f8FCLCoUg",
  "key19": "2X7vEFTdp5AyuRsSH5GGU4ygvtfCSVRKZiiHFkYCbGVDA2TWTj69SFHZwRxhR3ZCnoEVy59K2E2n3myZoCbtQLEo",
  "key20": "4rjV44QsSLzPmj7MFQQej5CxckoF1tF1KKHWzSiis55KNCrdxzP7aUBCDMhPooGyTk2EEGxHon13Sqq7cosPEukV",
  "key21": "32MeVyLACrY1m1d3RG1yMbPPAFGJ4MyK7GTgqwqYjKE3aNSJbRLDN87S9NU2gEZMWLuSqGWLgR5vbiNMn9iHLkAm",
  "key22": "3Sa3Lf2docNZJpnvStav8AWNTqqqFV72jr92PJtnE6DXKi3BmoaQi4tTDJPNsGuqTy2dGuvE9JjNFbdnPFc8VKrU",
  "key23": "3b3DKbrBrGiBoNbbNao7p715Gi6LF5wPuxvcnaiLTQ9Afkp8Dr8ayTYfr12ggaZymLaojioP4U4G3a69stpcsf46",
  "key24": "5DgTbxPnEGC5ZfFBS23Yjg31xynzFZionebkWemhtFxkfnRTxcyPkk5x2YAqJpVutFXjkrXcobrMgYzVGL7ePq8d",
  "key25": "4DQ7VHNgnkszp18auU6xARifTGsuvvHQdfdeX4tijgGiaEmDiBa2EETfjFLBui1FLnnt7taR95fRzZVRTRrgRS9s",
  "key26": "hAtCkt9F2BdFNLC6Auhvnb8fNUpt6CsbrjirinhE8mZR1zyF2qCLjV5MqgneKemc4fDHN4MzUmkwnjxSpY7eSx7",
  "key27": "64tLAYaRx9JRxVkBSwi4QJnsPtRrZMKsEaTxJf48ahX9d5tBekpuv9MeDJpHqi4crSYYwWrNFboiyAgyvo36Bfji",
  "key28": "2M3uhSuJ3CXpu2tF9zGPRm1R1yLMdnbYxstsNjCmCzm2PNB53PwHLvmUgt27YbaMrWTcbSScxvuLCEexjZiqiqr1",
  "key29": "4zMkSdHdXNEmmf2dAipT5KnaSt94ZaFwWAvC6Ubqu5fW57T9QrFBrAUiV9hiqfPbTsJSUGsAMwzJPXqhLcnEZWP3"
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
