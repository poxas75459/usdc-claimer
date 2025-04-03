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
    "49McrzMUZPJPuqpePwt7Aqk2S8NPEpe1BivsY9WMz7sp4Jv9s1hb2bYPLoMu5fLsXa7VoeTsi1db1fhghDTjX1g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVvkynBCUUQcEnZmD8rFHFPcpdWZtzLN5pBzMyJkMMjiCUTLmkLvuq8fF7pbVihj9ghRE98QrreoGyFnvpkdG7v",
  "key1": "3LNAz17E1uyMdTgAqB1sQeA5pWUMPTN6Cj55ESawsMr8dEC7nSKLuvbJoVdkAkrND5U9YuiZFGBsUmux5Akf3yrM",
  "key2": "RYf4RmPLUXUKjdkEke8XM8E6xqbgapVfFiAW82oc5UR3pnkED8FnyinSF7Ln71FCXb3KRje4rYkGhJJc4Rd1RRz",
  "key3": "48dDLtFGP5thiwhPVSCyqHcuaAWvCzeccKMTZeTck793jkN3ppxQa4TGTu2hBhtr34qCXD5pnZdyB8FF3RPxFBeN",
  "key4": "5z8CnfZQty4CXCPpDuCrqkL9PGNiHknyBTSzmSifPmWuc8qU3wci795kpYSUyN22cHAfPvWFdiLPFCHnaZk22VAb",
  "key5": "3FZnQhg6QxQu3iNsTsTN3zJYAZFo5zoH52SNx62mVusKcRzGpan3hYWtY9UsKcb1oTyz3DNevPRc1tMqZdwQtNx",
  "key6": "2GLo6ovKnb97ppTt4p1ChxeoSyfxZTPmoVqLPnXDpaL2iisaLyurRyvmRfBbpEdDytzFRNToGNjKP2yZLtc7QaUd",
  "key7": "4eVeFPAxtamCd3tBJUFipm2h3dEEHp1YejzNghPtwy6PKoGMz4GNjBExPiNnFTG3SuiWZsyV6Lkw4uxn1w6HLDpy",
  "key8": "4GeDjE8hMCaWGPkYL2JP15P83HWMK1WJj7rxwS3Lu52S2eVFHHc994A9McJRuawor1jwEauCTLBGiC9Ej5QBNZac",
  "key9": "GQB11XhqKVFud3zQXpbv3vgiaNW4BszZrEPuh8dyQ3xHqMbd2pEnj8ujwHraahZdq2dh4Gqqo47Hqkbn3m5au9L",
  "key10": "5nqRWsZCDek9JFcHAsG1eYBD3yUSnZbpbg7FpmxFEHxxMiyB2VvVDt1P7XbtZSPyy16ZZK5jsKVx7GYE1rbMREMN",
  "key11": "2CMBumw1FDJoLemeL7j7hx1gY6mNe87FRHeD4pckYYQLughpwY58mjEceeRKDpQxehUhYDWSpYwdUQdjTd1jriJc",
  "key12": "4Ug84XAmVrUtcddesozVVsG8AJfvemdrFHWoyMtNSUGCwjNQo1JJrFGBDkGzvXrWQXrjLUbD4JNq9GLdMdcT6k1",
  "key13": "4PfdgDMxKRcGmBNaiToqaGf2xug6HTeBMsyrC2j1W5SuFLKkgmBuYSEWuwEi9ZeZCndSXuHnu2uUvYmhUjEP8g7a",
  "key14": "3ai12eLdtfNY86hY6q5PNS8UmPVfPFaduSJEdB58Y8585E99YnzShVoSboEzNEHu86qtDhAnkNFxijPrrEU3hXBR",
  "key15": "4wFogS6TrfBLZiXPR2ASauhv6KkP1cv92CDxBG8FfztocXFJRo6jQ2dJ4xm1cNNN9qFd8qGrpVFpemfdQvYtQbRP",
  "key16": "25KvJ9eSxWTd6whEP1BxgQ5GioC3txdNNMRSY94MAz587SruQYRXvnRTqkZmUopztSamHwLRQdapvUYN3WNjQskT",
  "key17": "aRKBW1vwzxDbM2sqptQYYoSvksmWZXzEeQ4CfUQDEHK3rev6BDrEwU8L77srhyPTRiyyaVGWwP5bC1wgJ6JGUsv",
  "key18": "2F9NawzWDbsYzGjZBQhmspBbYheRgqDFeHKpsztVsqzQ1dpYAWxbPshoAzswYmU3UkEraa9N5x8TzCQV6CQhRhr1",
  "key19": "3rMYiqzfr7QhCb7FNYNwp8NHvLH9nCm1UBKHpSWpi3m7wQxLKu7caHhD7iMn917bLJWF7FP2kST9qCcZf5stgr4n",
  "key20": "5KLe6gzxi6xC3LaKJuFhRrCWNdAJxc9UvMcKJjRbrxEc7dAgi4yuPeshu5vD4BnFLBuG2Rju1khaKAP1fPaym2kT",
  "key21": "3dm87VFc4wj3oLmaS1wxKsDheTKENP9gyong6XN2HKgRfvKDx83g3JjmNdLgWQtqNRAz675yzbAHBFAQYUBc8W8v",
  "key22": "2378PwZ8kJhdyuMncKxxGQG8eiyZ7ZAiJZkK5t6vyuYZSZgMajtizdPd7PMrb39FZXzp9KwJVoqnJN8TxPtS6Pc1",
  "key23": "41mBy9YHjPYcbe3vGM5wtmCNknXx1dwnNQ7ZstwppRzzT2UggVPjUhtKMwN4FCSPmV9wJHFBMKdPh7iTf1ZUFMuh",
  "key24": "khDKpxoTKxgheWVGHN8EzVzdTh9zjdVcwjCrGTuurE2tGvyM8BYTTiwXrZaqnLavhn2C4Uskwp4FqyTQXzbpr77",
  "key25": "398sLw7RVU8umP2QKY4GiN98HbDWwLh7sKBBFhXQZJrv7ZhBazjbrDLAxGJC3XgnKHuL4ZbWJZoFUMnTAT4AaKrD",
  "key26": "SCNLNazss99ykHbx45ohgRKFWRxkMXm7vpfg7PQZej4876vW1c7FitGGFiBh1oVDEJc8sLn7v7VkXDV6ZcyD3Mm",
  "key27": "2XMw4qSpmUVPyt74V9mUZiJRUHo6CxtPwcxoZnfiyzw4wmW2yQ2wXdAmf9GqFhXJ5qsnHM2zbRsNKxvH3yFAub1B",
  "key28": "2TiiuLjkUPvaicuE5i63NguDoyVvXoCke5WhhbbfsRHd1c74HUWY1FXj3yi5h57kBYAoKcntgN1j2dbVJocEQATN",
  "key29": "4BTZvUyvhBq7YMg7dzgCScUAveiwq9ob15WTyBKFSooSTmbBcCMQexuVhJ2kXCmTZkSXe1NXkLGX5KW8TXJE5PFG",
  "key30": "31yJFheRm2qcdvsyTNmqQwv4YWSMozGRxuu4f6xDKhfac4YDwgZymCVtS9KL5PM6GUs5ESa6uuoyi2dAXcSR9qDK",
  "key31": "36B4dka7dwqTi5CCJ8T5GvptGea5kSKiAWN7WQ7npeopDVRMrV5D4pNEtqSVwRQZ7KrUroGHi9FgPxgQKqVEfro5",
  "key32": "3BiHR8n5w599KgsLzm1XCzpnqxY47eSrnku4ZzEBQvv829J3WAMwBGKLypCtr7eJwCmkPJXK6YrzidUeaecs2JD1",
  "key33": "4ECTha7nY6JE7hzzw4fgXQEahrMh7pvC7Khiy6f1VkCFU6akXSYPLEPj4KssLYFdoAsgKNxMsPWSyfD1wwi7ZuQK",
  "key34": "567yJEzpae1Tg3mpxQQbQQj2cYfMaibjZ4PzNXX5VnoPDNSPBA11uftR7rZ3AtkE6f9A6c3jGNiSTStSph2K7LHZ",
  "key35": "4WBStUP8sr4PgQNfhYTWiMyA4aGAcQtqQmjioMbUUmUN6FWJYuWStQ2p8tToXMhB4Vx3owkbCSZxDGcwkXrvQL5N",
  "key36": "4GK1NTEuPr8b1XyaUwtHm7ZS9eCuLeVSMg8ruWjcsK4Qj8ZpQeVfBm28xcXhxk4C7QnGunn3WG77xVSBraWH9sWA",
  "key37": "kk8u5ijh1wq8QaHX48eEiw34fr8x7y46wxfKHxJiqaFccmcaMPgiWvGYMUfe1mg6QkS324MESKiVFZ3VA8heqoW",
  "key38": "5WcECNuUywGyc4SRKfZxtfvYTbwHhP4XXPvQVnRq7KNp6v52zcSq2gwABM26supmLrLK2tYMhHsxtYCDvXMnpVXQ",
  "key39": "3UJ7DtxcaNfzL2za5pDs9sdEw8dNwzbpHmFsUkzBfkbQzrZd1YpF2uXrYRjA8pLW3vSF4RoGHpTgGkaymKf2EY2y",
  "key40": "3da8g5Kr9h1bXWjbVmgxCzA9Cnwi2WnKfajzwxw1sVDBocKaBeSJPSw8wFRuvDeSrRYKQCLsAJ8UZctFrwYPJdGj",
  "key41": "cKs9eTU4a1Vt4ER3Nv8NtwPhWWA51ieKV44yN2Li4qoWfnjuRxVdrmKwiLZJmmb7YCTY6xTssJoo8NtEfeFo6tA",
  "key42": "2jqLQXVq8rKE9TRKVuGR5KW9Ye4VHwEtshRMchLoZAXRKuQTq32husLvbeVmBG53jwosnXBpNCgb1BFGB12wNYHX"
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
