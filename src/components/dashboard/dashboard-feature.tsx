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
    "4YoeSuAyz8ntHn6hyGGoWt1nXP9WbsEscijoGq7D2aaRKDsUoGLzRJZ3Lu1AAbZYoLyZjQQoSQiC9SBgKJ7aNCrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61z7WH3k4LXaoLwyiv3GQUjBUsfPKxYuw7UsjtyUnJyAhuguP2vpAPDqmT3zQ1qGVubAtwFiNMYLApM8msk2YvZN",
  "key1": "2Gbrd1bHZsnDTTq9Uz1upCu3CANckJ8jvwHd8RS9R3chMmUhdcCpWepv94oyuS7JYJaZpqyR4bHQzY8dThMkstRM",
  "key2": "4pDZSvnwYLpZHxPNoRuy1VDVyTn5mLriYBAFx9N4sqM2CUKHLiz4qX6Zt3z7AmQjSUGDnVSqfeaS2mbsn9jUk8ne",
  "key3": "3jbnRgQEwvqTtSmcKsDtH1yMyRupZ2upv7BpTk5KE42RjJz8EcE818z6EGaVXcvECcHB1ycKohigQqYGnqAtqbHs",
  "key4": "4RmKwnRH15UuseJ1UuQkv7EA8ZutA45RJKhLyBsTa8gFodKsdefCisGbFogi8t5rhgEr4nWmRuv3U9YfJQjJpX2N",
  "key5": "5LzSdayafDKcGLw9kwDJQxY32NKaTTBJTrUjSXoVZDoeDvxtbH2MqP8t49MdzHQDDH342pXq53mBNVBBbBqYDHMp",
  "key6": "2zz27K85D5dfpqviwZJ66z1WMUGQtrFoxggPLCSd91JDN66zsL9FRGXWUtcJ7MCyNja3EjEL2mqFPy642jhHKk57",
  "key7": "45UNDVGPQPFhfjiWZAeuzp8P65CcyaYiEz8WvaYwmvpc7Z6kEcWXaau5XcXzELaHK1NEA1k1fG99PAcdUbrfM69a",
  "key8": "4G21dufcjHkjNmD1WTasuBVZ7AnVFx4A6L4VJVaSKPgRixMZmJ7CqYXVbhPXTvyRH9ugt8zWJifHYXYN9euRCEk3",
  "key9": "zK8KCPyCdt2Mu8fpt7t5HcBSrSnsAJQANYCNATgGfobmR4gYeawn1gTVTRTnwYzAQoX4LcC4PgKyDnwpB58jNja",
  "key10": "4LwF8Nc4A8UaNEhUP3WRKcEQEzucEPKbz8q2aZuT9kzzghFUgbdaE1yyyiCNjnjr6zxpmeHVzU26yYFVvRavuAm9",
  "key11": "4bgY3jHZAYcyaGKPE3Z31Yo3yc1KwRjb2Fkgpya1rNMrmwuRC43fb5ZPrqv4ZpsUBswpNsbZJ9Cd1177td5twdAf",
  "key12": "3LLvWsLGuzi9ehLn1oXLJutSPrEm9vpZt8ykbtKNWzCMvqmF27j4LKqWhtwotUKsbzYwjGsDKXtMYokpdnVjsh3S",
  "key13": "4KNPzfuFviwVniMWsbCEX6XYAs8akf1V4fDqnQS1pwBDRYgrbupwTXujbttTC7unhz5aV8caffXhox7TsVLkq8BP",
  "key14": "3xv7iR5Sk66Jk9bZw9HJpvsEyzcQJj6x1RgNWGyK7QKNQFeKNemoagy2kdZxcEXAZ4NYBxX4F67R5WYgthKwC7FL",
  "key15": "4QUYPTTJ776CPdxpLtUrGUan38Taf9GvXqvpGGwJb12WYoBj4M5PDbD9Zqh7n8mc6SVuMngjqwkPm6sSjLa7F4cP",
  "key16": "5aiQdagQfiaQDDgPnN7s9QBwB4VJrEADFneyPGdHL29B39RrfMCfV6Yq2Qiw2ZqWT8EgbMmL26YuFJ3KNKTovBns",
  "key17": "PT39gcsvyujbUwsTMQSFvJgz6ndGFHcefzd6cPshGotPehxNJBsThRcnc9yX9ec9TtiEnMq1hyF59cwkp9XayDC",
  "key18": "371TCUQhWBgiWVmLuiXYT6sudE2QQRT4npUHTPj6bVPAS5Miqi9rpoUKtbUFeKHqi7DoDhgU3PMsEkQ9dgypdhZC",
  "key19": "2sD3EJhVMoyaH51KiJAQ6avca93nMBdmwVrQFZb6smMjqQJ8c2xufdd58LB8JVpbU1irJjyL2nruDnzzAdixsmpn",
  "key20": "4VGPiHZCLzYxFWxQcK11TPWgTcpPJbR23MKWKytXxku1y3EYHCd6ZfhXMuFSygB785JvC3DzLmU4dkKsnNo8prqB",
  "key21": "4A2CBi3h692KfWeKBJjK3D62BgBn8ELicbZmi2xi6LBshuZuLQMpQszJCxtPRuQSJQ9a5pHXBhSavuxWonwDVnMQ",
  "key22": "2pJMDYEq5V32KnbjtknFt7bbYemtpfMxgTsbEsmwWFo3fyEexk3LVjJHjUzNFhC5QQQRXsrzsy84QBYH2nEm9ATQ",
  "key23": "4gT9osPUu5zk4Dv33mXPP9hXeN24pQcwybQpGsFuDpreXJqqSiW5BCggpwoTTeYuaMRA665bHNJTGgKcfMynLZ9A",
  "key24": "ioVvKif1PB3N4QvpKkZgGzCUMiCULVbDfcpjhuWKYHA6aKhiu1RidezXJfG1vQ21ViL2UvDVR2KP6Then5cQkan",
  "key25": "sWFeLJEFKgUrt3JZhE8soHQvyQjkc2uVdwAbpKiNa5U9VB68gvkVAcGdHsnGphcCKLwxH2zkkGmXGJtTv87HRS2",
  "key26": "25So2tje8zxo5jeU9w4nPFk5c4m2tVJbYJYC6Fwk4dV2Hc7UguQq5fJbwthTbGpffmTwPejhnXFaPKwEBWiV4Nsw",
  "key27": "4RAA8Rc6Ew2Q7y2fkeAHypjxq15jHEYyEpkx6kyf1ypVLaJt5nLA3PRByLJ8Ux4Z6DoCh2hyvD17hHiQDxFZhJ5x",
  "key28": "5ifmypnUTJ69NKDPAZaruGx2omWo2Ux4hGbkXxcBmJfG2nvAG58VAFy12QRE8FKfx9Ay96uE4XqmUbxCbKFj4r4c",
  "key29": "3dXYvj5x7y71hCqhUtvmrZJQDyj5Dcy89sdsmKVMmqZq1v4LdmJV6QQx4q4SQM1CdHVRdL1xzEm2xCBLssMePsS4",
  "key30": "5KZpkcq9gALcinUppkyUV1ifFrjdX4ezhXo29wZhQaAvGupyrxPF3LBgDN77VX9xHTrvcPSJKsRGwM1iAeBWUXTf",
  "key31": "2yv7CFhpjQRYfdJjGjLa84nxSgQ5aXqK5ha2N4jjnrqtg8cd4a73mUTGTodzg1qNXWdPAWXYmNKY5o5n3U5eztTf",
  "key32": "2XCJNgZrL2pDeJ95ck2kB11i7UcJXx6ynLDFBYReCRXLxDFVPPPDt1i8qsGqRsNHkk1Cy7j4MWDVdSc2k4JgAC3j",
  "key33": "4EMhgfUzLgWkDYMZmXLnfaGLHmwg54MpgDY3cWRr7ZHzYGvCVKPDqLu7RXUbVwz22uKk4daCyocT76KimvWRLLR8",
  "key34": "317FmQ2G636geExyBzmrFJAwciyijEaUf1krvqSvdv5sbnPKKs7Do4NJ1kfVmZF5tGqJCvAVY6AhWrPNXBQDXnHg",
  "key35": "2bLn9S46GGHPdzt9wKDDLW4kR2srneuhEao4cVj5EzrFYhboXuTYiZDAN9LyQqR9rT8QzbAV9i1bz46rb5iGDwVG",
  "key36": "3t8ALgWQRrFh2VpJQbFCdGbCMdk9YorgZSkk1WoVVXUD3oZy684FKnBVKzCFnnHeABYtzu19Lr5e92fSWGjpiLPD",
  "key37": "E6n5dJqW5h6ax8DqG7D6VzXM8tDvvHSSzaLLr9A8NMfLQ6AswqxTp6LYXY57rXCHMqT8p5tJ7kYEW4wfk86XUWw",
  "key38": "4KGEZTvTRtc9LBtbmFNnrwUcPbXHyBRMRqEkUniNW3uuhbL6GPB4cBdvsJT2xpxb8Ewhc3emwFYs5umsHWugoKCX",
  "key39": "24wyT36rotbAiuTK9ZB5rEXjnb2dEx66A6p3BvbPQyk7nv6pg5g1Hd9WsLRvE5jwm6ndgmT55DjuwWouebMk5ZXK",
  "key40": "3ddkBquRdmHPnzvMKGrsZwVujm5E4gZA3Q7yvRiMYcAF3AqCY3hJZ3un1KoctywxXkxBzeP4WgDMs8TwQ447F5k6",
  "key41": "3kAKus9nJ8eV6ae7ANmAnAJYGh2Vi9LriWTB5npTL7jZVKVb38zwWoEzJthGKnuTquA9hFGzSUB6Rge5zaQgo7b5",
  "key42": "5DmFC35mPEHAqPdkF3rUZ9UkHcqr9NejqT5buUcVZm3ajUvGs2UmLp2mzdowe7soAdcvhqqFyaFjqxbgZrpF6upB",
  "key43": "4XapUH1yJX6NfXZAv5Jj96UVUVHzFU1K855NHvitT4vVzmh44FfMKYzpLeKryAnwv9XpUQAmfcx7oedCvcwjVJSi",
  "key44": "4rB8sFqRiYppCQ98bLBjcvpr2xVKhkedp58fW7FmDUA3oUkW2VP8eVLya94ZtcvzMEEsyqgnjb8dRNvJ6X7RcBP3",
  "key45": "2KPZwaaoT7xe4ARH6MbnSTvRrSmgTU5P2t5xkqyXmLPTg827sPVUxvavLWaTh2CZuHTE6xwEAWqBBEf9q5qYMbB8"
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
