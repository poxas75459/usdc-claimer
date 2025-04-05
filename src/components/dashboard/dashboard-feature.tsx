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
    "7LBH8XmuxBB7nmpAQ2U6ok8SLqJbbF3RiM1iwLQW1MBZvNXhrLxULCaQqWNdhU6cfJLwdtdXRXPLyoTKCyQefkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHEiKYmsqmVi7688iscor2E6skFa87iybCxegjiMWrsTJgXHFQnyu9kPS2vafzjUzBw7AhtHHB3bmHN4Gcy6dS8",
  "key1": "2cHe71FbAQV5u6Jx26fZRv3WrecXp9NBgT3U97fuS2Twe9BQjBrDR9fYjLCEXP9P5chZRkGsUXXeKu9uA9j8GbCF",
  "key2": "WFXURSje4HQ5TdWMWoxvos8AE6MipPEVEn1rG3r2Kb9Myqh6EFt4cqhQSqmhnXdtEPTCEH2Am8bTnqb1y1XPkx2",
  "key3": "2wSeLrqNgn3YHgB6cd2XQK3jxMJwR87LG74GPNKup4ynThNUf1nYKWsLQk9eUh8pcprHhvwr1ZMtxRpCFdFk4jWR",
  "key4": "3gsKF4Cn616QBbxXLCCYYBiNXmaPjmK1gXbrgBFe7qkEBZ2qPifBRzJwUcWWJqJvpb1r3QsVwZKsiuc3PQx7tawL",
  "key5": "3C6B3abHgyXd7uHbFxP2UTMfYBW45thA8abKocnKBRfS3X58J8ezBZZiyEfsRgG9P7Yy6bCysWPVhJrAUtCpcqDr",
  "key6": "5nR9zPBekAZWfv1pEJhCgoZsaxfTrs5FKsGfi4Vu8Dixo8DCwYxWkyMWDkc92TcEBQxZvphA9isdhZgWgV5AzswF",
  "key7": "2ZHnT9n2nxDu2yvQztq9vdwhDpbZZGZ9xboJdPJj4drS24GSQG6aGdhtSNv8kY8eMfZ1LnYyEKeJBbvNx7nM91T2",
  "key8": "4SWVCUcGNvXUyvQok4D7nYGGTiTDeVQSmiQijvHX6R257TepPeGrbJ62BBYXsWSgnc6vVotBN9C91HRP8W1qPVft",
  "key9": "22Bq5Y8N1A1RMJ4WscPx9bkVWMFdTdChUNS5LwDxt8qU13ihUUenyABQesKDp39zzrugZFmQD25ZeNP2qr7175B4",
  "key10": "5fwsNnmz5ncLE2UNQQtdpfftEyDEnJeaB4uP68AePLxrK5cCZL9a6GzP9MerGJ8YDvoaemP5gW7ttedxkCJETUg",
  "key11": "52mQLoeQw9RgV5EaYKSPc6JCCGRJL83ATQGBUUKD4iWzHTwQhicug4UQiKiZsmDKNP144J9Qqayar7Ynxmh39BVj",
  "key12": "4BfWdAyQ6dhWL5Dqz6TMzm1wiBGK46BpZJnra4LpxMdNMvrPNoESDxbHqLCymkkYLK14MCrfTo3q5YJqj3HT1gg",
  "key13": "5oFSgfiKCiB48oAkwt3yQeAVzxJoJF5DnFCdJePnmBhSoPDpmMhyvyz6eKxud4EMXC3cK5ogdj3epdYQRzjpyLZ7",
  "key14": "3mfXmd5fq1MRRnvpQX6ovbmDuzXskNAnTzUcEmHeQC72tTho1mMYhYbqMHd89fG8h1hMVKKAn1yk9om4PQmDdVds",
  "key15": "5DUarTfZcmeBaCdxKRopKiLfsmauUyfzc1AAhLoqJPZsVMUnLPcVG7uE4K9YG8fe4XroftWXK1sY6WChHu7GeQUs",
  "key16": "5pi1VtwUZ6etoPasYUK5m17ndTRJTUQvdpFG5JJEraednQqTGJVLuAvtiuD7BAcKySpvB6YjPWfMaCB2tVLZszvr",
  "key17": "zKrnQ6QouadTQTp8gUudkuas54LpT4qn4gadQW8xBt3a6htT3vQVmJy5hbHS6zve3SWQhuqK1cativQKMzVZAGR",
  "key18": "wbWHaHWR61ExoeenudKzJ9mtFRHWkt7h3cxuK869MpZroz67n74LVxGPX9LW2z3BeWscXWAkMxcUNZsAzizEnSN",
  "key19": "3X4bESMB8G4R98d7spSGNEGVtJp925mgPiHUkPqXzbZk1xNWrH7GrCwVLB4hoXZ3Bj1BGJPqRoBcB16LQeuTHudQ",
  "key20": "WtioqUQCzMTErR8pmxWwMXdkxRQGURWYBpWbtZQw8trUgL4CnRvzDTbDRAGRD9YjTeV9352jB6iQhWfcFSUDrxd",
  "key21": "4X4hkAVWhPczBHAX4i7KES6DT5Q2uwGX1aUK6F6pZjWBejtimsZkm7hP5SwmjK1exaWwTBLmoFNkizYoSYkactWp",
  "key22": "2TGsoEsy5U6JCqWmsMVgLSiyGU61CMRcSDKRSG96nYGdeKcResRfEZ1nZtf4mQby6WSCdid1a8ZcdkiVTCupMnCd",
  "key23": "E4yLH9EiXXpkLRLAyStfJy55WdRsgph5Cnjgxm2bSyo44AaGJTB4ANmxffan6fqwfMW4AHnQgzBBcZZWMsZrtss",
  "key24": "3Fbf6xWhw6uvfraoWbdZ694caaY2DxG5FPt4B3DvcYzvNqH7XUg8c2UzTF41vpaf1FEVQrPiNQSpJAx93zuqeriv",
  "key25": "E1weWihQBPpHLZ2qMRBKF1mT8zcUB72UGEUUcTRdVkZeEFpd7oXKkpqHqsuFrtHB9HE5wu64XKkDqoYYLN2Vfjj",
  "key26": "4mbHH1i14x1XP1MiCXhmRhEQ4kN2DzSrNGoCjLKbJYsPLwSzXjkZtTH9qoUnKQDJjjt4qvqaqewKjspRfxDeiN9Z",
  "key27": "5abEBdb9Bz3Xiq3KeAtNSFnSmfjxdQQzSX4QkCwUBZ7bAoHcfnKfpvLRQZ9YqGKSXjJdfwtFNdNmG5dP4KKNyZuB",
  "key28": "hesCnaR6weD62PotTLtSSqxKUWbzUxTC1sXi3i29nK1ZXzmRvDEnZ8DKWmTPQ72tbVb4SDXTUpskTVWPYtRi8em",
  "key29": "3eK4miA517TLp7cttyzgTVeLE3sAXqDvi1R2Rb7qteBjgweve6nKz8ohBxxbUiNTD1c8rdZQZFjqnBsWT6Kswnus",
  "key30": "c4PVbrBtDThi4b64T4UxZabdt7cfeejh9aKKspBZfJiQkmafP16GoMWB5RuiUWzmgF4mV4ZqJgnujLZLSwQLsT1",
  "key31": "2in6ESFS68fDDxNpx3y6nkrU2JKtm5YMw1Ez93n4VtQXzBya7Jf7ECVVqbtcDMTAxfHVVSCeqrvCVctru6ews1wg",
  "key32": "4MH5wkRD2sKPGCnwczdmUDYEvmpoy6Be7KNRsCzDipdjne3RmGqdWNGBk7d6M3ZVrsEYXaLBn2eBnubdWPcgvMwW",
  "key33": "4oxoaeXcnncgTZQqzVjspgH4pBHNDDrGVHhhuHVGbsiY8iGcyDAiHqks3uUjGX4rwSAzyNy7WvP7E7qJ8QZDaRsj",
  "key34": "5pH6R7gJq5jTSaM5HUGVihPNVDPcSekLHSFeJyiPQmffNU9uW1z2PxS82Y3KkKTM9K2K33BRuxJLEXCwtRdy6koB",
  "key35": "4LifKNK1WC9r1WCBW7fDRnjvHrKcNcJuBq3vR85PWK21VMbA6xDCwhwyaTRLxTd8XhYfFYC4be8ygrNRBSr7NBBU",
  "key36": "4F5QoHLMMLk51XXZSHk8GgcwGchkeCd9cknPeoQEvWQdzLwkWyyUa8Ewx91s2AGzGVHW2jAppQaUFsC8FcpfNTje",
  "key37": "47LrbXjSWoYURPnmsY7BWpKkbL799WtwRLmHgLJpKHwLUumKxim8jJGuDhcpNX3XLU21MBum6NT5rVfbkxM9sZHB",
  "key38": "2CjDWSR3LHxkzDhFS2xwYVT67EiygrC7QU4sLxya7RBRshq4WDsbF581bNNCzxzERBT39ssMNQvPTDerqodM2Hf8",
  "key39": "37nU52ZhsLZo5hqn4WDXbbPwqjvbSHeNt4dubVu44DV8o7VnxMQkQA53kHFEnZt1K3cxRM6eMxpNtVmG8cVC9Aa",
  "key40": "54HYDtEoqXdnR61JicNy2B2mfAQ11tVWUx7wzQthg21i4MLx4qxAHXQWGs2Ra75QiTBUMthWD5q4R2eoFB88rKQA",
  "key41": "4Y58Ptw2ofTfgPFLL5BMgrULAHfTFspfbgTBs4EC87SvC5USzzMri7pndfjwKGhAJ4zui4WcbBERfL1awZiG88RU",
  "key42": "4RxBVuWyLRarXvWrBvsWvvMSfdkVEJZQGcf874c5agr7uQrG6jS7CcqVhE38zbxQPNcv9UBfAPG1SZHwNH7L7e9X",
  "key43": "4bYWXwgzRGoACoTiQFDE2GRG8VWPjA6UWaeRPrWGNBYgZjxhEpovLmKpmifPyH8fUKN6R5KDjErZY9wK6EhyG8z7",
  "key44": "2t9FLAd9ajGaFRyrTXymoqq9zZYviFKGLL7qigf2szrsRcgWbysikvnmQ7aqqsygjnESp9ZbpvhZqVvFqk9td9QS",
  "key45": "Fw1R7D8HvsZeV67dtnFfqMw2KV3SdDYjfV5PXLy2ZdPvk7nF9Ziw8i4YdVe6GZqVQf6ApoFZnPWafMX18EzJPa6",
  "key46": "3xPswWTkDJQWhHAugh7h2yYJpX5GoMHkp4MKmrMw8rEZ1vHS6en1ZTBT8D8nVnstros7xG56WYE3cYH89NvnZGo",
  "key47": "4rsSwKNAhG4CWdJk379HWZNZqMZz91cTZQs5WQa1eT2tjxWWEwJgR22a8kmgkmHEyfVBDafJYjeSLQBfwcJHhZoy"
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
