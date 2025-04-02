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
    "2ZEB3svG7EhyxxqLDkZRMQ9dwx74viH6zF8Nz4H8qCQ3i7PYG3KNVncSGn2uvFvKTcdEEesrMQCxT3CKnqYbVnhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYgB7MN12et5Sxc4miLzipk7yXtkVFNA8r7QtdLQZjtEvbQs931vYmgPHcZhaS6TYRuU26rJJSbKhaM1SuTkbrP",
  "key1": "63rV6vUWm9uNbrTkFSAtfeTvxHGM3yPowxfu1c7wSrezuhwFshPzRA8Cf94YRrprmb3GeK6kNhp6AubSFmaCmjEb",
  "key2": "9ozzcdKpX31JnKqPHUa3yD1aaqk7G44y1ACM99PuX9SzFuoU7eJKiNyNYRWKXpa3Qo91hq5ZUV3DeKbJCf1BhSt",
  "key3": "4gKW1fc4ZNT4B7N74ewJeZ23AbshEea2hGr5yXLbyqBfLiVMZggg1FnLtwHpZ7XtSNdjs1j58henF5ny4KjPdTd1",
  "key4": "2u5FuxWSPXHyQCLcvLmXFQPtr1foszDcNjF4VSaztDcKEGbykLUTmogkVEe7WueQJXoFaXc6xRujSa2weG89Z9MG",
  "key5": "4VPWiDanWtvNtpPShQNvMNZf1Ek5n2ESSUJHKekkBoVTC7DK6TfR9g9Gsk3dKZF8FbcGnPcXmHBJwUaUoWRdjA5L",
  "key6": "cHX7KmeEvqUqaxPasjSLL1VRiDKwvi1dnh3aaxH4PVhCo4PcMu9dbNP284yVk28hPxQRvyUwMwveG7MviPAV4uR",
  "key7": "dghtG4kQiZfZjGqCTPiHtmbN7FfXjjz51jqUqzi6FFu9XBmagN2cdGV9H8NhJyGBtSRvAUXQ7dTQfFKohajPq95",
  "key8": "2ifHAE891j6c9CvqjmxCS6V9gRu36fqTVaUnJes8mZ9TYnXWFvMkFFkrZne9vi7TzPnEyGtkGpUAdx1rMiLvFc8N",
  "key9": "4JxABdq3UuhZdxUcoM2gx36fD1LP9dyZd4V7kX27TAc8D3H2rDoTJEkaLWPZ8NQL8deX5WR5ZcxDnhJHHsdAy6Vq",
  "key10": "344FyH9oB1W5SLaQ3i3idksdreFwLdrDEc27VKt7xtXc6VUXp8WR28RhB4t98bz559N4pibCSwMEAN17DDDFevdZ",
  "key11": "5bXdzo9jwexBAbtpqg8fY4w3dJ8WquXBQL4zYMuTgtjUhUW75n52Cxo42NT5p4roQ6xdjfukmRYs3WWoaAUk8gWz",
  "key12": "2R3GCiUqVUTXEJvd29Egm1wYgHvhnrRZNGPJG2y9AuJ17TcxvpANZVueBKeTNrxEUpUPon8yi6HffAQmtVQfpKRo",
  "key13": "os3NtZheUF3bMEBHBQXKYm4WJsnpyYSvmBNMWBeHLsx5sNb78HNkrzbS8pU196FK2GqyZF9iN1Lx5X8SLdqaQ6f",
  "key14": "48tgDbWv8aqb9Gb2RGP2w73qNhHvNhbYftWWvvXHNP4psQ8jj7a1ufFpDLx8CimdqTTdVFTqkH8yJanu5PiaZgsv",
  "key15": "34x1q9dhy8yatrQHBrAcd2TEKaqtHx3caR94c3vYrPzBSHLQnqp2SErw1FmWW6RDNiz2nWUAz3JRXbAMhRcSgk1p",
  "key16": "5Le9NTpDpwRA88LsdrJFqAdwyyZJDnDRN7gxfcRaJXqzo2qvy3hFwUkffDeKB9sFBNQu5V65CjzW5aiMrLD389ZR",
  "key17": "3oyirVbWPXbQBZFtKAVkkgo944uouWf57ydRgLjXJw4qEvqXqFDf6MFpJTfP2SEdoBpqdsyZrLecZogR4bvuuXHv",
  "key18": "41h3AUfvDUyNRHgy6NM9sCz8nRVGhY4b2gG8TdoyL6wMAxHgNSqGtdrqfyAKmb8Aso3PyrucbPgtT8ZWQ7g2auWX",
  "key19": "4yFu1gVpAMBhzX4u4FaX9SoBYw5kfzfmiKdBFJHcUKmAcUM1x3qu1rV6zGE7sCAGXDoWqQnKU9w7TxA6AA6mdC96",
  "key20": "42vRyXxAjY6Ty1bkA8Jq7bHQ3sAooooxyrubDcRqtnpajA5iZNPRZ6co4CqbLYv4kcdVjGMeygEhfNdZV9CyadA7",
  "key21": "4D5rS4tAxL5NBuGvnBsegYJTTiyhewr434iGYLQoQ7vjvhjPcTyrCc2N2jk3AGWHC9u2baRTeTV6kYPd3jiU2NiF",
  "key22": "5mLbok9dtCT3QoRsiu32hzqKotUNZuHmm59NkAZpzA21f3g41qGBnknPXevejx2u7QHRmJh8iC27VLeBVtoVhd55",
  "key23": "61Q1JwJoZZowmbivXrp3L5M9Sj2Eb7xPzmFKviSgUwF2CAfTiALZaV5DnKKTcbfRbBNNR792cgjh2oVnwWt5zdKH",
  "key24": "4mBZwhyGYVnfrpX3Y6ch38qxNxeqvtntbrnVvZcrTjHo4Dd3Vcht17iqghQfVJ8hHrvQGtBMynCrKcWDs1H8Xyzs",
  "key25": "25g6XVRm6LgFj6rtvhZkR61SHS4d4PAqCYzUGspkcxFDTdQDTWxR4njaLZToJgKpQ3B8uk8bgBBQQ1xxHMYhVvmd",
  "key26": "5KGsjw54QwsiGJ27ic14RGoyzboTkqJC65RTGTxKFRym4RrMtdDdHi5YTCrwcqeteuBKZRbYjZXfkjjfB3wqPtaZ",
  "key27": "5E62n3tWPxyNXavAQ6CZ8BfXMenAuPHdBvqKL2dwrqyTKBVYXtCHV18UxnESkBPfdqhBv6uvor25mXdBrVfXFUL1",
  "key28": "4YyJa8GnCGifE5VE47ggXLy1SCqjDUyBzq7nV9vQeb2XhMZDS9tvftJqy3ya8hPPpNki63qHaBTTJ6KDCeXGdsKD",
  "key29": "3XntRSUDWxJEDveSuniGLvXB5D64ZLmYUY5GU3F8LGW8KB35AycS6YKcnBK532TtrsWFWR6r3cBKehY2N4q1VujA",
  "key30": "4YNDMZCCPKhB72VYpAQCwU9ECQ8KWCG9781HAfWq88AQNTXf8qHh98ePobYCiEQXJDnUuqSDoxjsJuu9rieLN71M",
  "key31": "3eEDZMdf7PDVvW1HMZMRWbK7CfbYiRZi9V9oetYnYj1yZwHr3dKVZgfZfCC6aUyFRFWp8LceKYvFc6p7c6KSrgd9",
  "key32": "3uSQ1A8vXcrU1gE4DYErhxAkV5QAfp798Saf9c4mA6Lud361owz1AGDmGG6wbk2M72MNUUzRZCAwdg9fsbMbQfEr",
  "key33": "2gfGJar3fyvh4Zkp8mr4TnWmjdK695XNT4eHWjr3sMWaGZegzzHYNsy1u1sELdzK5PPdrUoHyfG6TmvDqrtr3hRh",
  "key34": "jTbwimugAAjs8d5NYe65UZ7XjZvqzGDPdrsy6WrgJQUuGzNMDxg6bTytLPhWyPLnR7MUFLak2aBVDMfVsSG7RrL",
  "key35": "5fjVSqFqwzixTW6XVTrfXGKzJ92vriCdyvzj1oZ8pBxXkCSh7mSprmZCwY3i3u8jqvuuuCky2QyBWVXT7FmMwMw8",
  "key36": "BTUdyvT1MNc3PTaGDYLtM9Y1eE7vtQJnZy6GaVHviTKeMebif6kqRgGd7bcPRu3Mv1g6kW6FAbyzHW5ByKmEWbT",
  "key37": "4Ariv8Wxku3zqoW75HZmp2pwivVQSshUd6LnvP2Nj2bmqAAECJ1rHzXjMS7WnFbUiSp11dFjBhiEUNo9vCfpytw8",
  "key38": "3jtiVrLkB7kwutwTQJoGT9dKRpJdEqWwxUA4SWH4n8jnSqYvRvVipsdjXjvPLYnh4MaZAV5R2AwdqD9j6x4g19xw",
  "key39": "2JdBPpgDUhk15Bc9r8q2NCwx1WL6puSq2i4ofpUQwdTPUZ2168gSFg2A9WyDWKazWjupiKXfModMeNbwy2UBNQSY",
  "key40": "GdKkoX2rH8bzm1TB16kkPqSCgZHaq2J9PoPaAX7HpY59AUn4y8RyZZvuFw3ijXaYtf9wZFdTymhQjXS6ExbKhHR",
  "key41": "3jYukUG8LqQsnARPpotjV9Y3NjeMjktc4F2n6vyxpyswYzTxbt8cqgeheGcmvciwNXQBMzwiK4u7A3SsFZtVTMVJ"
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
