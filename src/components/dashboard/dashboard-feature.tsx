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
    "WPUBMSdBJ64UoEFSC6htzVRq9KbkXE6miHt9BT9xjbxojFv9NkTzH8LF78jf8xDYomAoDhPDHzoHDGjLbGrVQDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azaC3atF8VaA494hXGfpCpGhCn8UrvMLG9UEQSyP58aMTV1jkopYpdpavEkvRxvsPnEQihhvtyK8iSBhfaPcHuT",
  "key1": "4QrD8a14EmuWHQLfkp72bDGfxc3XhnuM1wifnoTBDtdpiZxky9kffB1MaTvivc8U5drdMPH1PJ6A1x5c8XpJUVKF",
  "key2": "Vpv4vb6QQjVcT1ignsuBdQF6uivMeRNrrKtPZUP3sX2R4H7wxvkHcd2cPJpWUC7Gc1oNFVjdu9DwC3EMUYEdStD",
  "key3": "3zpAZ9wZ8pRnErVLmdj9PsSVDX8GoVEubRHjMUrAK5fLkFFZkbkHq78fUinoonDNRwurXi4pXLpWaGNtvc3H94Rr",
  "key4": "5rS49SP7tZhrKbniaKPhKHi63quMf8hPKZK3gPQ6ftGLi8BDCMy1YE7bjA4Pm5aPpizREADg4usMmYEfTT6EheWP",
  "key5": "2dALwiGxELcLTN4GdKYT7SHLFN5jy2SJNuYQJwQ5DzcDamyBt2Dmr827gKQUZQMHvzPgrqUfWUckcAXmLBV9aG2Y",
  "key6": "4Uo6MzG8WqWbmfC9vfJYysS4gNZycpgWhR8TrMqxpxDwaGswkuDuEz6bCnHDGkD8cESDvkyjNH5iPS2qykt8tve6",
  "key7": "5aNkRRtyMJj1tKLG9MQgyBQoaWxz5ikWWdZkFkVovRvPAsL34z6NNuhFrv2TekvuYU3Wg9drNBR4Bra2N2uLeYVz",
  "key8": "ByX9KbBEpZVxDxBx5iroRi4Uz3iyUB4nPSWwMQ7ovapu1McpN9VjURnHkqESZ5L5N2dJwf6ZadCvEwvPBDNPvRP",
  "key9": "39LsSHqBSts7SFKSSUpYpBqaP3kSHqP2fpCGyLKqAKsXqA5TtheF5paQNXGLxNcnTXy8stDXKMbbHLWEezpDM5HM",
  "key10": "4Cx2cPRWiSqiwB5Edy5vPiPKioHbysNkkUvSikDZ8zH7j7gERQczjiWu1FjQGS3Lb6LjoRPZ92BrXx4mq7a1Tsa4",
  "key11": "2RXoNP4sG5iw7wtNN9CwcYKBF8GXqFvG1oMFo3ZVXuwumSBCrddGJHg7iG1KXCaaDfhitr3Khagdx1ZBthASrXff",
  "key12": "3Gqsdq1DMjPnsnhHos9CsiMh3KxXaWnxRKjfVvr6YNM2aT3PfifgAu1uXttkRAsB8x8HGGAN6EQp79QYvcZVcQyY",
  "key13": "243QukfLWjiYym6c13hbmNsXyFYhXGiQZaax4zTY6vVv2xvqU5u6w7zAeG1ePJMR7U59X7qoVSz66qZmbBPSKTru",
  "key14": "3o5kXaBnSWydrzbdjS77utbMRkZBrww6bgQF8Ja1TQVCHwAjpFV2U29YTKCsusYWEjD85J456MFexootURM4fhY5",
  "key15": "3mjThnmQxVqXaGMDAPPFBtpyr1o7imfGKoz4nYpF55C37SjxUqZBH4gFPRsHVyc5HEBvEqcKt42eK1FsuUNTUXZA",
  "key16": "4t7aM2emBaREcj9m53KqktCowxJYcGEXJCm8N5Lyx3mbL5VwCjxChTkYSZbKwyNNd3QrcN2qzwypTMYCX8ssWKis",
  "key17": "48YorJKC7qVL4E4vMUnE6G9UwTYQTUXydQnMNwjjAdUYWiArYQGhvHtWEHTdzu4rR9CZyZGnUyhWnWxw1i9C5VBX",
  "key18": "2gg1LNQUMF8yJYC6nBSaerSfcZoQX54CWrwCXV3UF5eKDTpprdud6iHoRWkMgPZxELC8h6E8qxqBuqVbujd1z8oF",
  "key19": "5DePk1Pof1MDxmgGZk6XqJwS6D5LabziwQt8xcsv6m6o4yostvaSYgV5JV4cdh1d79L4pBeNsmoqduMB8Xk53967",
  "key20": "3Pjzpxytj6atRLMkCwAsTvuT2C8wCdgByEnLTgmn1cGEHn24bAvAqQYcTM3sfWPwMTijN7LdjvCQ2HyeT5sNDPRF",
  "key21": "YkHQg8KfBY1qW65wvYWmXf3oiY3aJv3gpUGHhZJyHdXRr5kaRm6zdbrRFW5ZvEQBFyiArykUoE8anvvEZKT7FDL",
  "key22": "3JvhfonzEZccSgvMb7N7NkFw9A64XagGBdqq5hArv2g6aieA9wcsikWRbHNLx7JA3xp5cJamQqMpwFZTFBuSWuAt",
  "key23": "4s4QRj66g1U5AvUKWyw8Z3m8q5PN1Qm4ZRiiWG7nDwoD2pBDGFyzg5crZKCjNFgqscs2teqdY1yRuaM9CQGHQJoa",
  "key24": "5grcDcrEVa7MsZryGLvGTrXyVQkLpmbQgwFwnzWLA3E2tQ9YxHYcwtz6RN3ngDQ2krfmrExaF7X9dWdeQ6UNVxeZ",
  "key25": "HMWN9EEAFuoUmQjSrag5vjin3LStBWXhLZQtaijHhm3NLNoQwn7CmdMGycVrgLzoMupBZeNPNLqdg8uXr8FANSc",
  "key26": "siDBxgSpKTPQ3AqsNR3bUvfizoGkGbWTe99tXr4FvWua93DzqLxWVjgeuhTSKVJKtdZ7Emy22XwEGePwRStuZ4B",
  "key27": "5E848X8vJhL7tCfdSBdWfroNHDTtAnSUqWNRRksGiqhgfq684jh1prPBx8jyXE511sSFNvooVmTPHrmr6gapgZN3",
  "key28": "2RD6csPrKdTfCKBNsVLxsw6jR58QUWpT8Wri3XRyVW5cb1cAH68yeJpPCmdyTXi9inm1o1g2ejiTPWhxL1sZJHad",
  "key29": "5bHwMBa8hU1r53xHNvs5vrwzidJWEfFQP4skLL1KNRrQev9bimyZM3SVpnn5dft1DC7KRYne8zzqhaBxbR8737GY",
  "key30": "5ebB9TPTKer8Tmkg9CcnLYDJCj9dHuYtZqcKZyUV3wjE6rNxGtb88WcShyEwKsCYufjFDbFAFgSFTQHkcDejmHC1",
  "key31": "oU3YMbCUG7FxGGei9Vfn4JumBgRw6y8pTbSt7XcNT5veDRyJ5RjM5SxGQGZR85Lch4MaQ1qHZEHuzouCHaV1vfA",
  "key32": "YBdiPKsh8WMQfyLfuGRhRCoiwntvm4MVg2A4w3nALtHgjtYAzVxss1FpcA2JJ8JxFCSqGjAbW3qKQc5Z1PSnXGC",
  "key33": "4db94rENRfdCoMM8rQYGggVyjSXQqC7rV47CAvZ4NgueeU71i1zK27ju74sbmwSRh5n1Q7pRgQAMVVDVByzPTXLV",
  "key34": "2HaBZddJN8To2ggbgEkbuXu9vp1A3Ei3CPHvruBVYEbsNfy3JhSBY37RDRouYiUaRMpi6Cg4YaweoDPwozGetoSQ",
  "key35": "22YNdB29nc4qVXUwzgCsxZtTRX7RmS5dckcCzFRytKJCh5DLzkcL5GNGwmocN5apJfX4rAMwPSLktTxcNPaEnNSM",
  "key36": "3zuV46zemTiAWpobGvraXpESv1XyiKUqW5S7kKECi2hxhLro4RgJEHg31dV6DcAGzyZPjRXwf51V8ee8WaEexnJH",
  "key37": "3qb5mwKiY128VciGxC9m7WRUxBSTfBNn2u97nenYFDdzfDR3oraKFgHeybKJAHzbmX6W3jmRz5MeeuUrUr7dzWZ6",
  "key38": "3qoS5KQ9G71Sth8jNEHXdRUoipBnu1Kv5chCPTUbkXvLjrLqaayTXFzN1wSuNhY1Bvp7mRzhN6dLTipgUJCy7v2a",
  "key39": "2GQaJoazmHnpCDvketLLAXGgHfZ2Jk1eP1whTsQoETXV5c22gmLMwrowsP15RkThz5SSU8QScs8tNtMCW2QhiyWL",
  "key40": "3qmnNxS8jAgGfcnVUtWTinzrhMLiKf6VwHuRAuxYBzCUB3wzYDPfrdtejQYhoGrE4tLtAg3D4Ldc1e4ruH5cEzH8",
  "key41": "66gs4fge7CErsiQEzKzZB9BRyRgohKNLKdJ2W6KGto2VycCbkmZSYkEQMmkDovZUCWM6z9VPwst5azpewYuqYoiN",
  "key42": "5NA84j9STKRVhRswTWFNoRGoRV2JDc9zP7xrQzZwukQyBdsMqjpJ6ETGjqo9UZcemwf4WRJcfrqMUERobRLVxy38",
  "key43": "4Rwnyg7t3VAf6LXEnVWgrywQq3tyRctaAfCQz3LmdPxUWdg53mZ19xkHte8b3XJSRPo1e7wEL8fTcLVbBCdv2yJG",
  "key44": "3HhEZfho7CyCH1t1VpF5MDqWUEfeNi339nj83nGvdHL2fLpH8obSLWZ76ADAGPQt3qeZMYwcSfUmL1hLuarfwCoC",
  "key45": "4UaLoFsW1qTUE8frvoUUDmTZ2DSkCaFMYfFqMYTd6iL3f6CfN6r38KVYQZn2FyBY6yNkNDdgC8yhWwTcLem2eSNX",
  "key46": "4vw4Vk4sbXnAhqZqMGRtqtbnBT69nqFQ9YKMY3tbs3oJmsWeHwCA2TVJmEddyS7hsAcGfMQQboiv9uNrkVNgWvEV",
  "key47": "4Vjm3xA1Bt1Chh8itcaG1spZC88zVUwtABRPaPBsPb6RAVHDWTqy2wGg16CKzEZFAocDbBmXUvf9UDK19tkKWewg",
  "key48": "66ArCfByAfAYVGfdbJaeJbdgEoMQNgf4nQo9UKxXU7s5fDe29EGXJHdSEdoS2yTZWowL4D7e9CXeHvRJWosLg7iX",
  "key49": "4BhoVKHCfGbZFMvu1YjrLTTNYr4wStDoeS7DgAdX99D2cY6jk96JQVP7pGZZ4zbfBTHpFRe6ADkBajdioQmndQ4g"
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
