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
    "3MAVvkPE6Sf2hnZU8ygyqYhVT2bGmtX9YNZtNPTpyCoXJHaW96uEQC8dSSG4Huco4CrX2mPXiDxoEvVdXESnYWch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqP12jm6e2hXBi8GCasZwQvcCtzUc8wuzfncU7YG5Eue2ubVBGHa3y1vQ9Lb1UVTk53QtDQt5Eo6KR9MCzWL1kt",
  "key1": "FpKQ79NatsgNYAUEerzy4DW4XMUwjRAhjrSGKJgzaep6UQMDCcXMVVaucsm4vTuQrbyGzR2k9V2ifLbeVoX8PVK",
  "key2": "3GrG89a5fqDzWgFdC9CsA9FobtRPouhx3Q6fbwP36D1DJ1uQSQq9PMckY6VRLfMEHjAReeTfGAHpgZHdbvpd5cQV",
  "key3": "4JpF2QsniRdndtexCRgvg8CB49mpRikyfKLUHHHfGhWeTn9mFGucuCZGAnPLso4qab51bu9MuiAFBrqUAUfAze9U",
  "key4": "2oJhR5Uh6HA92AAXkWXwzQgeJeibkGKyoj2gXthiraBdQjniumFR8yrfz8kfBEkGKgQm7p3Kv5fqMRZJajdrsQwe",
  "key5": "zKwbcdjnZBCsePN3d2jAQtvNK96ezvVZ7mNCqa3hyLnLHANBZkktRczXGHZkYKq5Mfv6cUKFMjv3ktSVo5UXwY7",
  "key6": "62A6DA3wGtiwEJjDZWRy4CanAT9hnGAsJYarhFZ6mkg52TZGFSpyTgZUrLioxcfjCfLR7z54zdHcU3rb3WJg5AGn",
  "key7": "3VgR3yRVGHGyeZEmoUezyjmbGkXX3pdt7V6gau4svnuZEZWBu3Hwbdsb36xsrxGErdXer7RjJF53GKjdetvtwVW4",
  "key8": "HnCktZabZTzhZhByzvn1rA6y3BQzw5GQHgSfaXiq96BCWMAQh2upmmaH229Xm5WB3Tzo9G5JXacRYf8DhgZeYin",
  "key9": "5xWGGe5o3RppY17AyKQWjtgcUnVEpKyRLvPth5K8bNEaPF4SQMMZwBNFN9VC2MZUozoEAfV7tc9b8qn3vNErTY6b",
  "key10": "5NwxuJpBudExNdNkq9Q9P8SG4LY2FB7vDQm8aaNqtuBGU1Ef8UZ6jNPLTxyfiYEazU6ppDneHa3ozv7qTLbp8wnB",
  "key11": "3CW3nYPhJxD2zDhYRUpSNaRwbv4dM9krZo1YyTPp8VWQQwsHAby5KmUkq73kPPxWWoQYzDYDQ4nyzdySMdb8oRCe",
  "key12": "2DPeXroZUtnDrwt5sAmqxcv9UdeECxh29RngL9ZeX3Qd1CCMTvBdcqNNB5DYtSdEsgzzJ429LtMZXauaWsDLBdeq",
  "key13": "4aVke969ozgAPL1Ee6vQkNA32ScyEC4VqF4phASobVpQc6Mrv3pj2rkijtvGC4Ap3Ri6p6845HCisEFFyJpp6Vtc",
  "key14": "64UWniDWh1w25Nx4rzXLZVfFTdatWq3RzxrPUqQeQV3X6jnGrr8PgYrrGbhYRci7oyjSGW4oDqKfz9iT2V2NX4Wq",
  "key15": "Kfi18uGKRmMjPHWy9nBq5Rn4auYCCvbHJ9s5ytXy7pBRzcrAaQzgq42AggMS2wVLa9MS1DJSBGmkWmPnTzE4oQ8",
  "key16": "3PywLjQ2N5xniQcrAXHzug8uvkABKZuswQHtDzbaLmL1cnXC2mMQF9QJFXsS9NS3pjTJatC9ZxiB8Pv6fKsyPQzE",
  "key17": "2eC2FTP2NfnDfwpF7YAWbEucQy2ywbRAoGuZP31gmmSExL62Ettic2i5Hqc7aMQW7vhDdHN9zgLUVSftFZdfJbcY",
  "key18": "2pLoXepzifReNqmknYGr4R8Dj9uJ2wPJAXHNnKadz8Fhma4CQVWckqHxwTVPBmiC3XsgFtMXersXSfW1oZPYPECd",
  "key19": "53cNDPiEjjm6CbBZVYJjzjGJUmhG765fERoaqoRdn1EaDCGpU98ff5MqfZvQAv85rZsbfzQ3LcJNmg4mg4bEeFvj",
  "key20": "2sDGyMAmy1bcmgtgbMNR1LF9zRWXzQdktEd6AWsh3XPrKgjdVfnmV1rgCeyXwVjdRxbpx9W9wtwg3PjGcwcatdy3",
  "key21": "4f7HFp1e2c4DXHB8tewupuLMPYwtYiS37VNCaeaUCjgqdAUCoUkMmVaMo5dYUD7RbK2QRFpCYtyCKNkePqrhFzxq",
  "key22": "2543g3dsB2vcWmMjzpFw1nYthDXbZN2dw6d1xkdW34b1gL2YDiSTyahSu1wPZAbLRzAnz8De7hWBi72cpUC6wAoF",
  "key23": "5YaVc7TSF7ojEjscMVR2mHbacQhDXrb5A4cJQmemsPeAjyWYewQaqA4Kg3F7mhAeg9jwN3NsqeQPStb8wkkqQDxm",
  "key24": "XKQJy3EFjevTy8XWPVNYKGSNwE82YY3Y46KohZtDs9jkyChCipdF83X1iGFah4gYtRucZft2Ec1vRzh3mEHYo6x",
  "key25": "474jFtNR5mT5EUtNUGkLGw2vDas87hATLbnwYA3NpGDh3b4Jh3HnuSggJmpjXY7HRftxBW3ud8cP2pFsfQi8HhRc",
  "key26": "43yBuSVCz5dMNkDkwCNyEX7vtNB7ZdqHx99DaXw82xyP9X2N3ZLSMZNnbDhQEi9DwfU6XQ14bWGYvewwLJTEZH19",
  "key27": "2LSVC8o6WinP3wtp9NAUBZvUPEUvzyTuPUfAPU1a9hXgisc8myBQHFcuB1Hpzb8cWDMjc6yZyo6otF7i3ak8nYP5",
  "key28": "X1xMZq2ijo9TTM9fnsyFxX7XPBUaxQpiCyDb5ohWSAmjdy9ZJEGsuyeGdVN6muKwTX2QM57f4XMP41izNyF2xu5",
  "key29": "3An81DCnwe9YP6MPcVPmz3rYM5eUF1nzbvdXtny5owpXGPf6aX23sVaNDCXnzw9QvJZZNvdKZ6VTYGxUKoAFsZZC"
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
