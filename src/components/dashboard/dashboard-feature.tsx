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
    "5551rRSk6ngZjnh2D1tRGZagKYx1xnZxxCxjg8ik2Z3Kxzoh7Tdb93BtCC6UoFxsBtc6QrKmpDXNdzSPBqsaBe4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAeiw14pkdnNbHwdLjdtrNhQTHhU3KBinNj5S1NLcKbgRPrrXnGHWBufbLV9etL4NLewHLzqSamM3wHtg92NgxK",
  "key1": "4ZntfNtqku1bMACRqkipxRWYU71J94ngHdaLxszWm55idfZHk1NVfCj8iwZ1aobsy17pBy4ccAD3GLb2GAiz2FfG",
  "key2": "4W5AZHBazVUtcsGbsNZkFavz4Mm9cPHr8UFGuGTw5ADfzTwqEdoqWvGx1CQZgk262xBWtFoavmsUP7C5LVw3vZJM",
  "key3": "2cTXdKiA6xpH4bxcdqrVtULSK97iuTiXEvfcDZfVsT75P5nvqJYAixt2pNc3PbHCSmuiuVPGpU7PET3zHLPoeANL",
  "key4": "4zc8TpmSeu83hDjW4FRj9HcGy1J3bQjs5Vbu6AowTAvbKSuagtFv1KadWSDs3mhnVeXZvY1JoaMBZeG7tP12H6nr",
  "key5": "5LnPwEp6sGYjEmu1MwaCkAamhLz8yxuWtZBbUCxm6Hvyt67WQUYLqYZxjzrRm6W5YtwPqYV1R8KxwswPojYn7Thp",
  "key6": "2ixPyqTyoz3VVSCNhdBPcrRmkRH4NRJReM5y9VpRCmP5BXwyZcmEdubG77VqMVpq9sJMkxVVSZCGxusDCcGwdZN4",
  "key7": "XF5ZBh8216ooTrRNxVi8X9x8tcRUeB7xrp7JutmRdNG8acdjoQG9ZkwXmsY7FfcFewXVWp9g9P12LsGaaTfxYzX",
  "key8": "3DCW1LnN9MbT6Zx827oeEZJqaRwd7YHbsyEjFfpatiXr9scj9jxq6hdeaaRNLf6Ywn7jUZjxE2q2fTA5f6h52G5p",
  "key9": "DBtacXjFSDGKLehxBcQ3KnkUnrMF49TMw1ccaQCY8WxDTrgq5nwtWvcSbtrAGDNBp9wB6Nfx11AZrNzyCtSeonE",
  "key10": "4LMTsN7yn45Juzng6pXt835HSVsyEXD39W2d4buN4XdBRJC5CnT9e2K6YAyWikRsDffdaVjCYyW7k5WA2FUszEVv",
  "key11": "3g5frDMLtQUvfAdub6YaYsXQCeHrAL6sYDv9iwrSyG3XCDSuhUubcRtJvoHbqPndeiZTQeMzf9Q4tCHPJgTJkd62",
  "key12": "DACWcsNcybakAstwvYtD1TT2bfV6cXcfvgETFodEgkpK3zHW9Vj1No41SpSfX7HCcGgzT2jL3m3baZJd6Bkfxu5",
  "key13": "81u5h7CM2NebWf2D1MnEK61A7ZFRLDZxdyVbDpwgho9XQFfGjwGC1VTmDTWvfYY7fFzNrtBBVoRFx3gctwovwBK",
  "key14": "4NNR9SdhGUEU4PMfJrAKFBdMhbX39X9MNud1YTGhwW4ftyWbTjYqTjiC26KPiRPMdy5x7UHVqq85mo9sGXsVw9XK",
  "key15": "3NRGkZTBPSpk3RZQGDzbgqPRWq1RR2XCyVvz3xmNfNWjTFERV8gyPauvorLWZQgYsUtcqgHM8w1kQtWEfJvya6LQ",
  "key16": "Jo4FQ3zoSnC28QyGbSYfp1QowRhQgsvHcfahkEBimpcDzR5T8uzXsfPad3MBMExkcYKygQQCjJg8a1PiQ96zYha",
  "key17": "5LRVvNNBm9x6LVaVNdwW8cL4w52KWBC8V7nTuA8WPkMqxuk7Z4FX6VneDzUGAtj2LdJHXJE9zmbtWqJbthsr6HQq",
  "key18": "5a4FTFcvCTrUhddofSxr5RqnUvci2UEPrNZEWsHapYSyS3iUo9xTFNXY6qnk26Ye4ovV7dWeDfpjcLwjzd3pxbgh",
  "key19": "3eNXzPAQ2tuf315MQDSp3Eb1JxMjy8wgfj5kYdQrUwe55zndvtmHWUu6KaXX8Feqdhuiix5BFKLoXCJ8ut8f7FaG",
  "key20": "ffw5198BGmLFdrPCs9K51PuZjbDgCNHc3D7r2PUctH2Cuipib7oM4knCCy6qSR3HXSFvE9icDGXfDq4ByudnK9g",
  "key21": "4VF8Boto3JC8385xkMF2gVphp3CDZyKkEThHLXFWt6pRJYuSDYUR3KPQF9NhPp9PRWgBmd5MWUZA1Ucndd71NXo8",
  "key22": "5PKqaVWN7T8y8YEZnSrXdvyXx2Rqn6JTqfocpmCLjQMmDBEiBbLVSqbP1ZYGxJLbAnHQuoJ8YN4rTFaq2WmeKAdT",
  "key23": "5KcJ1C5nMTLsMbDCTeoh5TCWgQSarLsQvH3bhkqDau4iNBisJZt5rbFcsep3naXokuiFZrAWooGg5q5SugpmfJJb",
  "key24": "3uJtd5U2N858XTQk7QP43HcwAqs8n9nC38MDJF6rJVbFDi8qAsFRwVVoMg9p6ymZ3MatRkRR1LPqQg8sEyaRAvzz"
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
