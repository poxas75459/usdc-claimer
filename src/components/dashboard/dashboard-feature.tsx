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
    "HWT5vTRXfcLCKXFAxPntbFUASLkUXxi68ir63qxuG2UM7mEJDya5MUTz75TxfnwFYKsfwSGkff2D1NPDGFumeE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MMRxLWRYyArqe6gYRZNKkNb7B5N4siRjjdYVtFzogStDpePWTYANXCdLJHyjNPUhTJhS82trHNfFSnhh38zNJTh",
  "key1": "3HfFXB7wvK8Xu1aL3wG6MouJUJ5NwUjmM7B9owD7WTLjAwkDZh9ebzEaZVT7Mh8iZwSc4WDi3q5CzF4dpvW1bLy7",
  "key2": "3gW8JvifmNM52NphcbzVkmFvbtm4uvt5QaheEKiRtjXcnoN6uvTBT6rp9xfvJUZD4Nd8CMDn8vpj2m9pGcgJYYbw",
  "key3": "UbZRJesQgdSAQeDRnoY39388fdpN1xk9eQ6rMMgrYw9YFdWtRxNo1ZqVt6BYXQiiBXQ2fe6h4P4CndYfyEgRQBx",
  "key4": "58rWzX3bvq5Pd5geB6mxEntjGpapRgcigRhVTT43kg7Nh7W7xtPxEsjM612pyb9YU1fi3cVyzNaCtPiJ3beuZCnj",
  "key5": "47EvtRyQ1Se9RBhYoQYnMV6tpDc1mFD7Z1YDZjo232z7FuVf6SL6KpYgEjT86W4XiCi4BN5R2rAhq7ZydpL4aMhD",
  "key6": "2ocd6gyF8uphpKYWhSBr99kNvJYA6pseZz6DVNAgctPfAN9JiGD1KE3fL5pFRMYiCJNc6YZwdbp4GJzpeYxSNrmQ",
  "key7": "2giqf5rHdu24um8xqMoLBgj5SReozbYMbCjZsGMxXjuc46QDpsLwzZ2Kin9hxbWoxKmkMbGQM265dP5zFTKvRH8k",
  "key8": "2B49XavbDusx3ncfkbKsWpN4xEugZMVxfLmjUdfe4ALFdvfr8vRuTxHwQrN7WEJ1xXm6oMbiDtwnoCNatgYkJ31x",
  "key9": "4PXgzGWRSX8UZdMrfMydSpPwEcjY6TnMJYG7Mjjs6486nXdsNzAGKtcQztcoKRSzyz8vkGnw2BCcWBfqYwj97Sxy",
  "key10": "4cnByQBQt3pqnUuxkaUjRGppbNJ6TGpQsxnMsJ6zAjXVpfPeJH4edaXVqaeg7YsueDTPnVXn5ZBNfbXXDgmBJ6NH",
  "key11": "3suACiwD3wM2Pf3mnuXDqidYQhrBTN615fACG95Jc7TcEnpzg19trgjGbxhwCkRqja4Y14TzRskxwq9BLjCj7eb2",
  "key12": "5kjC3rB6eW5oxiZY2DWaVQM7sSRoLW6PLGuD2F3Zm3fg2nZ5VHaqJmuHpBZMvswEVhtp625SVQcc7T5Fg6BrcC5S",
  "key13": "2udYp11wP6gD9Xu6NNU74y83z9QXeMJQKdER9K43jEis8XahLNbzGC4YFqAVPdZysQfAGLyjqjJVwRgiULaVFi4h",
  "key14": "UzzY4dtrnrbDygUK2EtakYCwzWSWaYBFXJxLx2dZLWzG4WJNdxGuqteHwibs3RHhUyByE7DX64oQQUsQRQWXd8v",
  "key15": "525aFzR7eHLjujYGRpKFTyuSvn2JPdRESbGjBngsz2wPkwzQo1FyWYXZ52hmAwHRWi24PiCtXVigMNhm1jjv3urW",
  "key16": "2qhj1uppkw4GXrsYeENcZjUJb7vq9Dc7YTdSRLLxsBMaTgG6BgqjWMEUiJsL2QANG8ie1wDyCK399sQBWEEY3QVk",
  "key17": "28JEfwGP44rFPVPRLz9SKiV6V1o6VgBywYr2yR52cq6skxGUy5XnzeLotptooC9j54BGnKGxyvU9WwUEugbBSAzq",
  "key18": "WP7k8N28MDFxR9RU9fZihgBtQwj9kv87sArpjTN39sfrkvCHid1AZjssNKFCnd7GCd4wpi2gg2VC6bmsmW2pVV3",
  "key19": "2ek66MkofMTWsfM5xypgaoZqggmbfqc5dLqvUbSefxTGE9jweMRkdEY3N46VRnegML2U2NzLtw2w1X7RpA6vB4M4",
  "key20": "4ALZbhQX9ftBPwfT86bH2vDuHwAQQy8gAPQwy4a2vEhVjXcagjo2ye3iHAQsT7CpKkFuPQyuSfBS3E5ZEtyebSVd",
  "key21": "un8tmkisoc8EaPm1tYzN14fXRn5ovMAC1SxGdyqVfHshehyAeyLK75minXr9R78BDzpFngYhf8bpWgPu1HdnUed",
  "key22": "27XgDJG2Xqji9MbqXhoD5XbmzquoZ8dYu6psC6EUYFQsvbPfryLkm3oKobmKawwQttqRcvM8nb142AFbjzbnGoj6",
  "key23": "5bGMqVaLr2to1CnWdmp1UTadbi4UAoBkncfAac2tkLD4K4n2Sq6oUzGue8AwGgoqLPBjanFcqqoS1dfJTHhm2FvK",
  "key24": "5ZD9yky1cuunygibEfZEUFMx77xEhcbRsgdtSuyGnnpghUDU12iwdq81N2sDgLoNDgRq9MyT88p1DVsNkPUsighx",
  "key25": "5M13EPGpzRFZLfzuqDWdTX7PpoZeThRjuoJRsvbZXjkfoG3HsfjUTvQnqwwYNYxMBXJ1aJJyUxUXePYjf7DgjMv2"
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
