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
    "2h5gUjQrjvLQfAbPzm9xrrkhKP7hbKidZjq1w4L69AqiQhmmmEghvWHqwwt4FsLqTCPPEV828x1hCaP4Uo7BYHYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TNeKf1uX8RF5rbsv5C2usdBNvU88CSitM8qso6ZmgSPXXxBDwRC3y8DuwmZGZRLpVk6n5gimoYq49YK3EVAJdK",
  "key1": "4PvfBvJ3Ltg7XPyF3d7sBdjN3kDMamDXEWGAekjhCLWbW9tuA4BtCMKH6SuwUt7H51mqzDem31YBMJvQJnVT9n9x",
  "key2": "25CsNtM76CSAacA89HAoyKKHg6BkJQace5rTX35kZMqAUwXnCcCMWqTEvRm35v2VvyaUf8JUQpXqSTtyxKkjrKg4",
  "key3": "29hqxLNDxJt6YKZXDxryj75JZs4ZzvCYZqvjyvRZapQDewMDyecXDCUCCyjoDNShMgiBLUSMqn4CGb5JYqpjqERQ",
  "key4": "2FvXjQEU34cvJ3HvogCUhJgnczyYhnmiq7rtaX3Q3MiwEnXoCLSB9n59xALrVo4WXPoPTS8TKNqWMJn5FZN4L6AY",
  "key5": "5ZcVMA32uZDHMAea4Rt4wnTLrsFAE5nHJGPQTu6fiRVhpBLBxbzvbS4WkJV8ScaCXrYebJioehTW4TQ32dk6Eemj",
  "key6": "2uNWUcsLD1PpY4T35SSKP9UU97pyobWvLKKjGUDaKu5dETx3tZ1DdQqNjpfGCeQgRx3wZn4Z824FLMmwudRfFicp",
  "key7": "52bX3ZyE5AV2UZNSsTvDr6qGBs9jZgswDhSjhpdppuzKAQqGZ2ZxfHY3mqxrMzGM8uLMVDHmiFNoaVP8EkDNChrC",
  "key8": "v8MX4kUF4XGTUBKZmjc1HF1FRaiGbKXe3UEPRnmDo4AuXwYPuBVdMiXTtBXFJTvggGAvJfNmhGcqz51BhtEprS2",
  "key9": "zxzGY3YGekoX54Da6boUv66UvJxLRcXaTZDMGhYurqYQjufF4RxRgP8RgiPqQVVjVgboW1bRKaGmJrWcZ3s34cA",
  "key10": "4NBpSE7UAu2Xn8rGZbdFPZ3ERxqMhYyfBRKeewSVrYgoyAUm56scTapHpcQFy8hhjTbf13w5aeQAzwnthTxkgk6h",
  "key11": "4YcdJq5nuk2mWHCDR9n26C5Wxsc8HMUmp21TKwXDkFw7zmpD1zT6gYVGtxmKj7FLhEzTCeVCxrz38YdS1voenho3",
  "key12": "5Vx59wHa1AG9CwqYdBFB31SfUa6Q31VTxiRaPtxk3cdtAYmXRvrZLgL6zxMSQprQyKhF51Q5r6bfj41uLAFN99hR",
  "key13": "3GmiPt8JV2NVq7PM86gMB8ESHZ5kCsiSXs1MdZSBmBiADcDrxVKduc7NjWw1iYFxv2HktPg2ntkhoMi39RoKf3VG",
  "key14": "3s4f99aK3mvMHWGrfXpyT8rYLfehe9ySS2ZXcwefUPU27xCv6XjtvUFtAoAG1s84m4hiWga4bxRWBbdkz5QZWZYK",
  "key15": "3nb58CqAafqY8XyMjnv2CPzBC1BF7qLBLG4juwaprYFgEtVNuyhLFYfRcLLt2yVzJkUnRrxGNDnMFQK3VvjAVBoC",
  "key16": "2EuEGxhZp9LM5oNp317YkrkxRBzpScGrUmPfWhPSfsm7az4EXuuJB7VRYgGRWqbEmNeH1HWJ7vigYAXBF7ALyjWK",
  "key17": "5xmUXo3wvELeZBm7vANpoguTX19GBNT2m3oBQJTaf4vT7XCdxWRDvKPn5oT9dPtFqHGXT2CgswyViZ6sTpoSzbKj",
  "key18": "M6ubb8DR2K7AzFyDvqqEuw3KoRD12A678iwevbVSPMQ8qA1dfAbvziQa7gKJToFkmnZ6ASNgeJoF4ZZNqnGsCK6",
  "key19": "3ZWYspzs8G2vYG6xrpFvyy8cC6gLWuFf94oVSyAnsEj27xa1CatskkJTQXRC7sTtHScTU1hfCPLcx4Wfxba3LdDD",
  "key20": "57pB5zmNrmx2gS2jp8cprpCRJBE8apcxVSUSfkQTkTqR17dBvgDtJ6mYZLshZbWXDsTN5PVYvJ4ynHQxXQLnFrdn",
  "key21": "2K5zNrJCZJYNNSAvnaF6mWSzfz3hMJ4RsfX7oKTPksn4zbDDWGAe12g3uW97CFvMwYcHLSyBBCq7sZvk4LR8Qghb",
  "key22": "3GaMyUV5mgniL6epm7VukoRpb2oUGyvZjDUkZuCPAAbgoWjTPxHR4FWPBaRXWrViSkzXXaYkWakiH4GFknmZepPC",
  "key23": "3frf9SwqBqoccagsXNKjGnVgrsmX18pH2Vk4n9mBofnpruppoW6sLbq5iain9Ws2cba3RWtCXTHR7kXSaEyNBKXp",
  "key24": "5Z5XbHDzGi3UysibETQP2JFmX9Fv3iw2S8TikMams8h9eTMoQtzCM4CrKCsQgyA9gyR2auVUL9Uz7pb18S8Lnnxv",
  "key25": "2dtCUdCsdUDkAjY3GYRCRDMaU6tNhBmv9NKFUceVoLJitVQWa86YnCaUUSze9JvZxNSLLJRT6bocaHgvj8SiHSPg",
  "key26": "4hCd9od7rv3p978TYD57v4uECWDFXA6rsGN1nXXKNuzu5Lu4wkiRiMamGhKw8WsjXeT7isN9JPk3Fith4FBD9gqQ",
  "key27": "3VJ2S2avNV6fem6T9q3fGHtcMg1YbtKB7o4k36onq4woDittc5uSau9z5fvaGx2Wa8QcsiQ453bMFiarkbRky68D",
  "key28": "3aTNPxY7uFLcn1yK3bMoDAgiw7WahgC3f8waqHzULzVTzoUdXtS9pwvYcnwNMJD11FKfWhRaFVyXKV2ZEEvzwNQW",
  "key29": "4m27gcDteHTkSkK7TK1M1ENQ9bKRuefGq78icG7hAbMHk4hehSUnjp4wJ7r8uDB3Rs4Eo32p7RKsuNWNbJbKZNsR",
  "key30": "Cd1J1DjERQr5X1yYFtBzgFgjLpWDG96UmAPvnxU4abAKBwohDuxhQHJLVmmxHM32JGDTCnEoRCBUuaRxbgj8Mnj",
  "key31": "4huGjRWgr8847jJs6z87ZXD4BzNV7Rr1oE9rr8LeUkAkisuFDpxtUnTDRTse9YsHthopdSadP8aM6stshU19gSz",
  "key32": "5umVod35tVawbTkGdBAz75H7f8w2zAVz5a1kyoKWurcfayBDwpKRhuUGAX7fFErHEX9hnDCP8JJzN2fN8F4kwqhb",
  "key33": "2wXiwCxkgthYD4sYjrjnQLCiv96XzEiVV4iaapQDtWo4CRnfoq95Zs9qtZBmkQj62Js5NGiqjdUJsWTad3ME2e4c",
  "key34": "3gxj42Fjr5VeRNwcRZJzHXpVZW3H8dF8TqM5KPpzFfMUGeZtQvBadzs3m2sRSRFL1N3YaCGqTUuAmPgHMwEwPnEv",
  "key35": "2V4Hc1poFTB36uAKzQM1wSfc8Nz1K4T4ioCvLe76sX5YNBTkoPHT6xpST9oCLMRUuxXp1E462aYyaaEknxoRLFmw",
  "key36": "2ZHn2gcd1xUFdmSmFGkaaUNSguKLb619N7TRpK8QKC8kB1ffgSUdQ8i2C3CgCGHbksFT68yatJg86CfURkFGq3h5",
  "key37": "3eJBqqZbcRBATsaAMHGmHXkxZqrJmp2nzKA4naz1xxvcbGfb2A691N5VnnPebdheGzxJzrnGEiMHtKmSVwyLyi7a"
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
