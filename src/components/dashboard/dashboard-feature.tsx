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
    "3LLffdRjgdoC8sx7ca7ubLxGeLUaBEqGYB6qfJUAHrNHYuBq3QRWLPecBayFUavPofu8HsqVD84r96CRYtp5fkuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hS6fWzWnqb8vfyXNZYVEb1dwE3X2MUE135BiFuPPTV494RgFzUgMEtUGDnfMp7GGaW47QzceuSeb4jDR1Nekjck",
  "key1": "44NYQsuvodZ6b4pJ9yHC3cUnH7JqSnDno2ovscpjjHR7jKa16ET5DwgHRQ5nhFDMQCggH28SeqehD42xcJnhcatx",
  "key2": "5wbpABWGYjoyj5f1ExNoy4Zm3Sny94Qsqcyy4wTdKKvNRtYhvzrz4tmmo478pdS6Y3Q8DJxT8vPGML6SdUaczifb",
  "key3": "5QyepzYwiszf8DNHs1WCM27XDH5L3epSWCfKjEqxnqm9T7PgXfs9xG5WtfNUbpDXdUdxww5jHDUdZqE8DuGTcE8x",
  "key4": "2LDHmygEHb5ZTCjQGdVfoUV7E7yd9dDmPqRcNonwfuskWxVVio33gxcTr7V4MzpwNZ7C7jJdvPM6dDJP1ME4FNC7",
  "key5": "4HLUw4PncRbvj1EmZheBhn7SzPPqXcBRBT8pDFNmreQwiKBUMouQmXUWA1uhhHWRU7oV8FXZ75LxE5RzgEmb5s8f",
  "key6": "3Yref9oAjCmERbFdTG83UWfshzUr523DaLQHMd44MjHcXwDsrYPgcDZRUF2AvPq7VYH2vgV7yryJ5jbnHmbTV7Kk",
  "key7": "62CkPdQwHqrbRjB3s3fMmjmS36511S1g1t9jVTzHDoZib4YXgkBLhkMJpCTPa77HEjmdn2geB5VAb5tTjHGA7gm8",
  "key8": "5zs3rtzcbQRihYQGHBS6jZD2y4N7qrs4ckPPsRfQvbj7fnC6aUppq8ibWkjv8idgXwj2LMaREazyogXXf7AYvN8A",
  "key9": "4gb6tAhT7pXv4gFArLNJ3w9QKXeKhn6t1NuU8Udf5ri1RaMuLZBFVMVLHaHBgpA2FMVQuiGBugnWHnVUsqbNNgHE",
  "key10": "4ma5m92mQZCmCcV4w6co74eUW1MrJB3zMbaaQW9qnuLG7Uh7tuqq3QLAAeYpNV91bDc6Rbpx9F5vk6UdA11rvsYa",
  "key11": "nfVFsb2r4GhwW73qniPG2RjCUHCdatkz8FxPA1Pfry4Rz6Nwu7SahaS9BeHnxHvs8HkmRTGfD23gYj14qnVS6Sv",
  "key12": "2YqLd9oVpywvCZyWrCZDWq9NsnHCxoLeZegitL14Y4uuvq58fyyRSLYi2EgsHxvPfbnULo5zrMbtaHxBK7cKD8fC",
  "key13": "55qyFA2ArdvcakJkXLUfgYdovWPBLn4VQj7vKvFZgp4h6sVPbBSdc2pw4J1FUhmMoBaeEq3bCZFoSeCpNQb5uxk9",
  "key14": "VtFvHcP7Qi7c7AmB2gHkS6DdPaGFgAoYwUVvpxHVrW1ggbbJPRmZrVPpqRsZY4AowqAgYLZcSpCC82Svsb5qjWE",
  "key15": "fThJuXt8uVMfDoE7Ka4n7daPwssSpueXzNHuQftiJSsm4QGUP77S7FuDXYp4neB2QRE5r1LQuQAKLb2FDLibgFX",
  "key16": "SzMWNVsejGVojusuYuYRvS3GTCPpduzkeyXjPyvYwNQRYeUqrcHP32xfGBgGNCvH7S4uctYVjktW9BeQu878aDe",
  "key17": "5CB6nsGbNC4CT8sQjJevnLjVqhP7LvqqZkNH5kF45EhrLjRcV7ffxpeX3tzvyXnu7dzpWwvvtYwhdeFeBCqRnAu5",
  "key18": "2q1yYtZYe5iiu9wT6LiN5QgGSswbDJTGrU6pAuBsdXSPMyxPwYsDXpzXJdAHJwRr1vqnBNfYP1Fb7J9FuFHWvGRe",
  "key19": "5PFcJFm5NJePzkEPB5Qj3ZsiVjhakJC8mhVo4As1anfXgPLBNnkr8ziQ8dBxtG2qtPYc3Z1Q2EvQBEM3U69SdXLW",
  "key20": "TMvVQpwHT4Xuf7V2eYx4CiL7JRyo5r9vXcf2dqzGeJYBBLJ9GVxfRrP5u516GEGf1hwa67tyKx8QvaapQmZ1Lgx",
  "key21": "3xdxXztJHkqxTQR3xQNQx1hihQfVU6r3DaTkVAMsepVqUgjS2Ny9GtFotstJs7fzWxEcQbKWKvwHP3EpHmS7kSRv",
  "key22": "2ERvHrYygKVpJsa1FQctr5nDTZN9z9xxspPJgfzA8wrQCcBjd5SuTKv6XBXTrDhVo9h7XMJvuGbcC185vkeiveRo",
  "key23": "5nj6MH845MCMT72PjDpqLzGzZLQpPHXBbTnRSgWWJ2VLx4vq1wwKDDtT5cPTLgJ5NZpc59DKPvGLxXgbMM56BuRA",
  "key24": "5Naz1Tp52tnFj7W11a1V2PZaDsxGSBQsoVNCeox77SR94PX2KC6rHP2GoS376BezA8GfhQmUr3oJxVwdEcVEaX9B",
  "key25": "41U64ywDufDPyPm75WJxvBoRepUYRctiiPB3JLothm8poqdfmTXkWorUS4WVCC7zSbY4dLYRThRjzHZXNUW51xpD",
  "key26": "5cxVsz68WDNVBdzwLtJ26URy2cSU2bSu9SqfB5dktRiCHiGa1SAyZ2RnzMAwVXoMxoNvQFH3w8TFqoDNkY7uowKQ",
  "key27": "5mCvSFRXgQob7bN3e6QeLjR1zokwMzRqFpyjoSSqjyythd8vkWLhaHgBXqKotxoMMgH5CsTnqjaoQfqG6mv4GwXf",
  "key28": "5XJk6FPfECksVhKJHG7YDEDiowakpazfG8VmqNN2m5Mi4XLvMHws5LqYwyjPU43prtUeyySBxKwuJTgytvCHp2CM",
  "key29": "tn22Z7qB2s5zQam5eariS2GyGuKdJBPVKhq2nBGwV81LVpibjnPJQ7P4XF1UQbrA7sPB8XafrdQY9H7A2iViseJ",
  "key30": "5nXTocwYFX2qSsaHFSNdifTRudNBULgdJRaYAyHnxdxyA2X6WaxC5PW5wKQ2938XHw6za651J9NjgggxbKCN8FKz",
  "key31": "5xDL65maPcaWxomNuKNJS2W1xMNhhJJEMyJsbYojQa7MRkL5t7FiZeGL2RRDteEiu7r5rognnqkG8j7VExi5AggU",
  "key32": "4iDAKigFde1uCTr3ULJikRw5JYYCiovwjkaFB64hb627j1wpjMxxgWqzhhyAZCjz1KhhHFaeZDW7f4NhoFmF9rQu",
  "key33": "47q4ki3qnvqgvybHUaqCUC7t7ijTYZzxthxVUo4FvUBeftrvVSTHupzwHuEP81jpP9A5r3gNas1Sd5wKfkLb1GbX",
  "key34": "5bkCrYXT4zCakgPD6XRbJeZsJ4ZdJNzapp5yJV7iyXRupzRvhvKnNiQXzBB2pUNZTT1RT69FDztd2npGBYn1mkkC",
  "key35": "ym9x63Y2p6BP3LvnjzfuFZHd7y2BeZAFWRkA58fHM6WVKuJMyA5H5ch3tqduoyndYQgtcpzt7n81HpNuYzoRynJ",
  "key36": "4akCCEC1ZBAG2AqyZDuRgsx5efULW5645LnfsaF1MmiWYhwo7atPRaWLKwVPQLjyeZQ37gMVxXUCYtdcvKq2UX6Z"
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
