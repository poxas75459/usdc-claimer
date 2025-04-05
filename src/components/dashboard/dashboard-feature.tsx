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
    "5nQTjNG6Q7rXoGzRyrGyFQrimJNAcxUvNiZnV4TL81JtTUzaoyCr2afNSNTTaeThFnoqLwmvASUno27JwZgrN9xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uggzjAobFnB5jJU3jv912U3e65Yfme1UtLEBuhFdrfLfijiVAmXmH5nDbHV1Gs35fbUGUfczunSf56d52C8NTey",
  "key1": "3gK2T55u8UyyhY7spxFuWh2u4zrYE4yxfmSgCs5pPdwa8XSQSPcmAZkP5Jham8u5rThf2V2YSUMpChMj7D2mtapJ",
  "key2": "2Jww4CsRQbDBgSkoUak2zo5tmGGmBf6jj5G6PxJxQPmhySykhan8suwVaxrjwPZFCj6mnDZuS8rkSPSmLv4qgbpD",
  "key3": "2HQnGTQyNv2JGrnw6LXj3Sj6z1E5JMxxMqqTu4GmREr4YYCVZ3XJ6SYnKoUSt7oxHxPFfU981Tmt1fnrdsQDeA9a",
  "key4": "4a96gRMQX7kSXSiTjRJF8i1x2Rb3AAy1NaKYwFfHxWy9ZkUMbE2Ash5Me2oL3PdFdhGnKHerQjqymFbP6hHhv1KJ",
  "key5": "2FTfwSDyRrG5LSxJzSZHGt7mfPM84cTz5kNboD6EDiJHsi2Ds9wkSzD3wa4vGshhG4JHnTeJA1zkhTDyiDDd1d9H",
  "key6": "442utANGLucCcWp1gSMSidDuRfkgpcvGm9exELryfqHGtofpDm6g5russe3rd4aaJwgHCK2w6hN528XZFC8AR7TR",
  "key7": "XKQyvdCSeicDhV9K435Kqde3wgNtv9N1ikgCkSwp6Li6V9zJfC7Qza4D5XtdtfxvAAScD8Qvk4ppGPeLpFYp4zv",
  "key8": "5cPQxxFB6BKUt4GjgL6mMXssGoNhBWg4Cmk3krBRNoiazt2TcALuMQL5sVkPXoH7TfgJXqX5FbgEYJmt9PLnad5j",
  "key9": "PDV3TRSFG8asApoHLJ2Q1WDFf1N8Yviwubg8kb5HHmAMnQvAMM41vtpFTkLfDziTq7W1PH97x7WCRXybvWfTcfS",
  "key10": "55aAP2K4HmzyFCP2yr1oDWVwfQKJGfyqY63puTEWCfZKWoPcDvitNCqwPXMwNQyBGBa6VYQK6bM3c9svK6XPxhUu",
  "key11": "2dCQhDQhFa667hisH8Evvmjxbrk3hzRrezhJSjYgaQKK4hyAY5GDiaz5EzYSLET1xXTpSG6isxq57KFJep8yXcZH",
  "key12": "4DMXonHjmsm5LfgJjDzdsj9uzM2LHyz4dtqvZjceGUA2FUqfvDu3NisLzRmM6Nr6puTAk5kJYCaQbpa3yGoVWNRK",
  "key13": "2YVwA3f2aSMBjeZAYGoiQuLZczyBg2xsrGzQETuxQXfQwYrUutPcd1Rx1n6625Suj6KQisdcZoyYfbhEfAKiWLw7",
  "key14": "4ZPgG32HW1Xn1vQ6pLp5htbfnRJP1PSUJgY85e5gpCR98ZLvKLA88aXYAHekA95ukjaqRx9arP3hakLpScXy4caP",
  "key15": "4oJMVjNuRCHNjeWSzLyhZ8Lkre6UD5AXGo6EExxY4gUFRHj1yrRw2VoBZGELCLXfXnTsyg8zsM1GQ3F14XbfV9BA",
  "key16": "R1YMkoPux19NX5HGFeF7u2uxyL6GgRVYCUefK9sR6hcydAa6UnpY7TfPNkpXPUh9rT12gRtAxsabtVmC5imMjQy",
  "key17": "5BxpVSPeTV6tZJcEiX5C7Zp1jgfLHiK1mwTQ7m5QzMiUmggy19xspoBLpj3cXPP4poUcVq3AxBJc5vqHWSo5LD6T",
  "key18": "4HDmAJfdWFoJJfg951dRPvSEqaKkn444bboPNDRouDvamwKA6QrACSF6hTVERzRS1AzYG9NtLuSYB54urcLAbfaa",
  "key19": "3UQUisuUko838i75eQh55ph7Nj2DtWBH6E2CqPo7zFyVaxJu3RPntcuBmJMQ3iSDEc77sGqdQw3GpwpcNJW42Jo7",
  "key20": "5ZbRM94kGghfQL4v8sricBiUQ2Md6PiNiKAqkhG7M8dDCS7nVBJNAckdS9E7zuk3uSYYq2njFpuw6YijgpzwD97E",
  "key21": "WsRqccnz8TPfzyUWdRXkow88x2DUSzVnxBSvYLVPEQAKj17zWPFmcAiSJJ7dy1mowC4Fnvv9wG8QR7KCwvNzDDt",
  "key22": "3YSZWb1oPkpzZz7jHC1C4ts7VMf3fUk26pnw7Kh1sGM4geejHg5e9uT2E1jqS5FXztLrNjUTJJmU9GqaeUQsDuNQ",
  "key23": "2fVkXPf36UNR7uCTnQ8B1PJGdaNnLVnsCeCmq6achRDASxiHbDaHztmuCfGtV2d2G4MEE9VkxY3rbc5f2HKhv29A",
  "key24": "hDqWiYczYbQpbLqtf1bmyq2GZ2VY1dwMxSmZEwtMvmMQRVc9XkZcy1tGRsrEWMyPExuVRZbtykuYcrTswZP9dmF",
  "key25": "35zE8BcFB9Nqzu83RGfPp4Fi2gcPSk48Ejt3xVtRtV4U2oWHKG5JwknnEoUFQdZdquMZCo3ux4BhoFH1mTUXtRaB",
  "key26": "2bB2JYL8KtiRVPQLzpPtRk4DtHniUj8SjG9mwRh1WxiWPp69isMdQFiCQ95t8jxb5UUxnVC2RD7dnQwdEjTqfPvu",
  "key27": "2mQum9NZUAErPEgERWEpSLgKZHQWrYfRUwQG73H3zrDrynWeYPcTKFQUqFX3axenUUNQmFQ5QGauHouFFGoZVFkw",
  "key28": "54bGxshtP5qQwkHdQwLBnsdp5p2mXbmiMTw7mTv648GtVuqZ5ftqLkUk6TDh8SBgijwVcSNxzVg4SuFtpPK4iu3y",
  "key29": "2bywPfDfE8DoJVvvF1mZDbUoUKPfHxEtJUF26WMAnRYwcDTmQz3ajxoKM7dLTZSNYvVbXy26JM9iRiCcEioc2jUu",
  "key30": "g21zGpcHUCTgQuYdMmTGuXsUXhxnbeYyYugY8YSWiPkSKup1SG8Bnv6JNduXjyCsvqRkhNgam5Kwb4XoxAoEag6",
  "key31": "5zUxhAdC5d9WQgU3B7b54BRGQG19mfrLhQ24yHmYnGSNrdAYKsymNMz1M26F6ceY3rH2499F2H3fMhyWGcvYQut9",
  "key32": "5Xn3cFbCtE4rPQnH38rC42bkJTLiqyywhfQiseyKx42dAUcVng7RPHC7Xy3FUbTaU8C8Yk7ZLQgztQ2pFocxXXSB",
  "key33": "5PPntDK7yhTahnNC94RmQ4WpQCsop2Qh26vUG6RvxkvzqW6jpH76YSMQUg9Nt9nE9WzyGT3Q9fKAQNVacZ4HR5Lr",
  "key34": "5WC2aP33Cb7C7gNxgdBzi8ofcVMxCYnkH3rYbhdT9SRRTkvWUrXYfR3Mhov8LaFSATpyGmHSLX2DT7Rct6fnfp6D",
  "key35": "LxwwCqMqbyjALsEAM7kjBb5zCqTfzwUjLdtk56yDqfuVXhf3SaMP7k1rYjVNbLAUUFqfq6gzGQP2SXjYEqYNHQe",
  "key36": "2TebEyLjueab5FU4Ya5s9sNf2n6TPn51sMjd1xk1w6KdP3XL4UVgnbCTLD6UESRfXxR7MDVCD3U9EMxQDMaaGQys",
  "key37": "29b5U1pU9VSjAYPShGdvQKgtgnYXvdNJc9EHpau8eyjE7SLjFXrYE6qZjTqQiWc7RSu8M3csL7LnQ8KdksDwMY6N",
  "key38": "2KCfK3CG8BSoQoR87JiyKKLishRg8ZHkJdstjAAZK9SiV8MBzcVWCzuEyLywFqSio61NZrKSAN6WrYEz7MbC2vrv",
  "key39": "2RUWhxmWCzS3esijFukes8fB1k1YRnitGcgqze7xUtk5CWC5YR1GAbJ2ekvGtyqWoohf2AW215aLff3YGvQYGzt6",
  "key40": "3W2ZjrxHUkLtcDsdAvtJU9KEh7bzVNneoy2UVaqdjRaknx51s8AN7BcgJVNFhhQ4cRQuiBjVSYhvMPA1FXRKQ7V1"
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
