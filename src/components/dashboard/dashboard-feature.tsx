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
    "5DftovfctwNvThh53Ugwn49EdziKLPsHo7mgC3vFAP1qR5bMNn8anPo7qeqgXAEYaFFbtasxgoiqMjLyNi8yPYmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61tFYFgePT7NCiowCur2yDQNVhDNxQYEjY1EE37o9gX6HuBSgXWfaK7V4kvgacawezts7UyryYsqW4sni9RrkUsi",
  "key1": "4qKNUvV7q2T1WibR43yHYoeVRbETkmgEeBE26v1dUJEycrN4FFfKU94s7caVSAqywFbpLJpbWwqM6vmg9gdoxVmd",
  "key2": "23F2Y5JT5YYZZQxG4STEqaC7wFKj9vskmUxBHRhJYLdtjYX1aY33TEeYSDiTwh3d6RaPoRnu7zj6nAL5uUUi64qD",
  "key3": "MCaGUNmVfqSyDLVCnQSjooymqnDryfw6yMuRhQHRcHtpqbYFcjpweUFmPkBaZM15nS2zDkBguQviTPtkTNWQ2M7",
  "key4": "22X26eWjzHp7j6sk7YmkKePw8F5tUqH5xgDCmHkcoB94XfBXVcAkBxXrVJUVxxFvQ9YnA499soM39bqG7XwdNs4H",
  "key5": "3zisCZrTEhymMCssivpB95phdpj7wCkBrBwJsCWCBELf2XCeXuJehQaY6CJJFei7BKj2J2KXtucQ9pFAg7S3FV3Y",
  "key6": "3BC8N5mSA3fJFZyzNcsZWG4NKnZb778oJLJtaxzKBXVrrDdu7mkvqkaM5evqZ3BDivqbgtJgaubwV31v2byKkbvT",
  "key7": "oaXPKRmUEZJwtRNivKdENdvFXhDzhueHa4UaJqNzEdXXG9q2WkVYpPPEw86xRog7vgq7HmiBA8rqqvLm5FNAxtu",
  "key8": "5wc157MsLUXoNGwPQ142Pux5kzh6icaVKq2MGYdrpBnBuPCo9V5ihH6reLnTLrp6XLsTzqLFKRXAKcR3Br9fnDKh",
  "key9": "31Rp3DsUJuptmPYwCEwata2ajqVwzBCFBW73fASX9n6YAZL3i5i2jUjQvqVx7sEwTfPgCVt9ewu4pWGNHVrJhewN",
  "key10": "2ERYqAbes9LTnvBSwtkobYDKhMANNfgZF6xi3NN7bvT5ebDRRrrkRKqD5AYsx76dRei6TkWteHDoXSf8y3tJDLfJ",
  "key11": "4UqFmMJr9euhfAneprbBcSjWUFymrHKQBzSrVzGp8Y8tRrXBfJyGS5jJVNHQgDd4B3aG1K533hcEXNTS64pN2r29",
  "key12": "NQDPBwazDpNfcCQQL253fpxzydrCz4TT2jcQjpLw7wombieqqJKaS56qYMJMJFQBebeaV8fWQvKALspSqipYFQM",
  "key13": "XsA4A9ZC7LbHDR7HJ45gfZSJFWMr6xMqnj3ZNaqgnB3eYuPzi8Ur8ompYigqRnPMTAytKuDZ6cTsggF1go9YhZC",
  "key14": "2qZwpn5dZK2F2n5a84LYQgUoarVCXGs44gSTafz8fyBzw3tn4txPRMgjw7LL1Z12AHUxTuqYkmwaSd6vyVxQGz2X",
  "key15": "uWtgxqKKiXUcueX7gATGfXkYDRe2ATsbeBHZcAEJ3dEaWThCGTfFhEXuPgrY4ABLb4aAaiczFcsvBFT4LJbAZJJ",
  "key16": "erZrtzj3sYWpmZESnCrz1Ck8Xhjje4pETVpDWo2VwfAxyQmsUeHbMQLKJsRTuRnAtwRxWetnxXzaVQTTvvGqJuL",
  "key17": "mTs5x9GSg1XdXftaaz8nBv9mDCtdyS5nijKZqc85NN3nLuwLR8HgoAeesampTAzrNxDFaCBmhALmx2jmH5aG4VM",
  "key18": "4tZXJpBU3uWB64WdhteD4YcxUA6Z6T1Ah16F8yxgifYANZLzQujsesAdUQngMZDZcXMFrqJh8TMYasVuSi4mmDv5",
  "key19": "xFfnHaDDsDVJvJAn6f74TYhwiicbfXszVkVjmdCwR1PHQd7GsU6C9gbXXsuBHPw327U2TYZqPdx6ERpDU4Gg8qZ",
  "key20": "5Whx422TchdxghedeJBxRfd8K3fMLXkTGqbFcRTbbCLYPsmBws2UnhEQMAihZhKiZT5HvBXJxGGsmTcPeUbsaL8S",
  "key21": "21dr9htdcrFptUbQySZyNMH2BNHzx9BjMt8fCc1vorVK4YtFscBAPBkyUPLPMeHrGArBPmdmubSnLj85eEmUFK9W",
  "key22": "4NzTAR9TQ6acQiMvqczzQXekRAcraoqXHNZdLhsp4QM1HGQZbRDVzVtw6aZhgx25DUhfdj5QMwtaRjin4Ttgxsdp",
  "key23": "5EkTUSjq9okGbf17cfX3bP4eKXV6h4Ni8Pc4E6waAkjCjKjp6whwQPry8xShH6nwdh14Yw4q1CrBxEqABa1FLwtw",
  "key24": "4Y13oBRQ5rXUgTHbfggGg7zvFWNDcNkLH55nVrXD8q79LcKwTT9ZHr9HiPTBVh8kkhcramHkLZHUMe2wBprJ9QXC",
  "key25": "5Bp9MhERvrUYmi1sACAj6rFXvKfy4XKNehbqHdDenAXYMzgWAcZVE1WeqvRtCAWotB25N8FGgf98AD6SS6stEWn5",
  "key26": "KL86Ku7NLf7RN5dWzUiU7KgY5Lqf24ujU4DCqXG9acar3QUDNvQq3dJKDUwc6YGxxDY1FvU68HBNt1345FsUdBm",
  "key27": "2rcrJdXqqWKK3mmhhxVkRCHNKvbqCx4k8ZSVFnyx84tp6ZHrsfpWBv9CjuuES6i7UJBTDwruvi7vzrtmuYTYiMHV",
  "key28": "2r7oTwGMXo4N7jJ8CjuAU5hAc98toV3H6R25Uk67M98ZrjN4A2c1DknGGaaNsj6cea5AhWPWdnDEoAh1KY6UdHc3",
  "key29": "4NXK23LsaV1uLgoRYTQsyJ3ZjQ1jUsLZQTk5F22GZzZ1Azm94FQZwPWfrTUWDgoctdEy5KCdyGt7BAuFdQAS9SxQ",
  "key30": "2EgNK686Wn6YEhTa8KtnEQCwCVyQf7YzKp7CwP43EpuxxEXECFeCRqso7YtSTZ8vqMzN7tnMDy71MV5scex8fyPZ",
  "key31": "2k7WR71QoC1tGuXXxsaWBd4VyMJ9d9S6apYNj2MG6hYsRyV2GpjjTcHfDrYVhYMvQuwnjRJ9HvzBPdQF5kbrNuV7",
  "key32": "VvXHd6qb2w9ooz6EBnGN2mvUqp8HtuJLfm74WNrJeXEb9CoM3ErxfQS5FhK1Sov6apPjZizsYPBEpcM6Vj27dj2",
  "key33": "GpRXzAz9P9wFKbcL7MKapPpWvmag65oByVEt3fEjrG2AwnvRH71823WJXhtDDMoJos3QJGzG3TyezbqZFZE4oPK",
  "key34": "4GXsg2gefvGg8egJhbG8zndTMZxyfNXjBtgCVgh6utkmK8sEuLJMkAL7FSa6Cx3tZ6u1ydkjHiyask1LsMxTzHPd",
  "key35": "3BW8d2rxFubdG8LwYNQBgcm4pPEEyS4wGRzbRjpWyngsYWsLJDEfzn9HDiwnyCP5wh7chCsL7UF2sjw1RJaYtmLL",
  "key36": "4Yo1HDXJcL5FMKJmpXxt3LTHZRGtJCVJTWK5XdgNfmi3n96eViaXuY7ahxt2zj3pNhrN3fFQTrqFQfu7eLpe5ZVo",
  "key37": "2qonpb34UnFQzRm6fJWzQVEaPsen73zT7bqpGKdCEb6vgMuzm2xNRK7sSoS4xP2otazMRZ2puJHNApkTUxZtAWCq",
  "key38": "zABqXFgwvgVx8YmyxQCDQHjJ7u7iBvdaMdZCWv4DZFM3pyUQA9RKK4A8k6k4FSxyQT3WzXdEK5GmkBLZB5aBt5i",
  "key39": "5XzPLSRKQCGu4BEK7XjNBXULoK4zNHZcxxnymv57Z2tJjNFbBD1YoRaryMEnkG7qE8MmBiU7SzDbYgBianKrHTR7",
  "key40": "5J6FwNmPWohzuaaFBDrEztmqydVdDU8eEx9gsYZ3vUqXXort33Yg5BDHMakyDEzut9ds8tURbmemrj4riyqb8jwX",
  "key41": "3LLJfaovrZNXT6Eqb7V79MBBmmVHWchLQkcNMvz7a7aSLbxYKNiXFrQNNYoTieir2SZGgh6fk887g7JL9ddnYsam",
  "key42": "3NuQXRA6bem2tAXMS1SQzkMn2Rm2QG3RHNy6T4hPKGs692scDUetV4y6bVbCETBiDC1CWv8C8VayAZ15cx36tSnp",
  "key43": "MtPhVG7LYrPddBVfASi2GacimhQ5kw75NcK1644ZU2vk3W1fFTHB67DnXqWqKy11UPnbYNp6oAGutbv9eG2XEek",
  "key44": "z1jDm3734bCKY2z2C5FVnCwhhDwET6qmiCYk7ECpQ56AQyHuBGQnhEq3aqd1yzZm9BNXEEcof2Shh4XZoaFDuop"
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
