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
    "43xo625YPnFNVmRwG1b7zgxWhb1i3rd4SUToPsr7i4BS4beZbX8iavkpK7nNKipRp77RKSuTkEJk3mrGj99BB9AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abqjhgzDg67z43oNmwM6iA8rKvYqapXq6CuAZokieGAaTRgTXtvpr6MLwQttoXS35d5KvMspPg8hCWTyW6sZgMT",
  "key1": "3yJAAgtAwBXpaaxrRqSy7EdWtcQoRDZxLM2dUFdLHMtoo3rg92w4g4QifXZbTvpxwaWmYW7Zkn5igajdR9KRiQPm",
  "key2": "ThuFNCQFq5cDoANJLSsWJyFWdwEXNwJFx5o8mBfR1ayMxb76YhejBEadvcjUiZQCtWAN77fHAgdLrFuYPkYooft",
  "key3": "34JaoUhTNsVj1VkTYtRGNmQYfYGGgzZCzT13J6AhWRXGPUefKaRRiRhXywLCWNLy77711LA8UUCwTDdGCtLFrRb6",
  "key4": "5kVprfCQZYpFRPQyr1HvDPUcvc6Gj7FDYugZutAUzGTajqruJigYJiHQx2jQYzPQWxR4oMBGZenN1eZia6KAWpmc",
  "key5": "5WoQiz15dciYA9MemXbYkX9ajQmGobTbcYWbiYiWM4PN8EiYb7AYi3yRSqhyDYevH2JmVtz4LrwG8tb22MVCiK6o",
  "key6": "4FDy9V6say5pUti9xYBHL2UC4nieq8yEviQfp9wfzPgekGHcHauQG6gYoaMwNQiGMcLessCmMfcsVdSX8CgFrroJ",
  "key7": "Yb4cP8HL3CHSSg79mA1Dj7jTQNfAgvZiPoMC3DnAaWsnukt7WmVjjwRcXm1T1PF1hEG1hwsVKCfdWAd9EhKC86T",
  "key8": "2hAzWZkmRdBrN1MA43abvPd79YutjmCjqwsugLgqdA97EedcQkAmnGc2TNervCHmyTrnc7cK5RUwGNxvzrmjCMfm",
  "key9": "4nYgDAjXCcAy9k9AKfQ1nF7EekWuFJNcZVSQCHRwc5omRTr3iLkG6o563NeWwmgPxYS8j66iqZzatfuEFX5JMbYz",
  "key10": "s6ytoZp3a72mn8fkphA9VHkacXNTwf9gh1KTxiCBxWVz2mKABH9NwH6GFXHs6Zu6kbx3qLuXH8hHZPjVgDjd5ab",
  "key11": "2q7nJJpc2tfh2bKmSmRYE7NiKD12oQnpzLK8LuyT3fFqpN9tszxccqECadb9GWmsiJBcDNqVtUTeqBtEa2dBwAHA",
  "key12": "3p2G2BY73AXd8h8Tht4Cujjrtgb5eAzsdpBVd7aKbVukSTKktgxc7ZApJFdbiU38Zc7yEqFT6PmacYDXzqsCHYfM",
  "key13": "KoYTrFiW4MBSM3mK7FESGSFSpB3vzSmqZdd8fUU4u834394ZcsHYAxkL2K6n9YnLgcu7WFKgcXEcLGYTsmPXhpQ",
  "key14": "3wrqEDN3pdPaQ9iTan1151Y4rxKuoxPMeoK9w4sox8iuZkxE4uXkNBeXfCeicZHUqFkZig7ajnALWi59ViYdAdjM",
  "key15": "2oRZpJFi8GYs6GhDyM8JqQk1grGqzu6CMhT428i6vhEfPXnW6nfGbv95x3jdSpAEFfK5mrHc67E53wdbZ3KgSir8",
  "key16": "2Y5aJ3mMmSjpr8HovaBjZ4PHXkh8hsKs47MGfPeKeVwfbZodqq36Es6iRDeVtq6JNLV6pLV5zjF7LzDp24zTbtQy",
  "key17": "2G5aab6udi3jJYnr9nTQ8rBM3u5oETCcLPKsGr7NXFJ3ifgDiRCcJiV5SwHUFtTeuTrCmTNWTwZNfef3uMUJyGj1",
  "key18": "6WMS9GtH2fbBEs8dk6DuRia51P5EY9rNwWEMyRR19XBnQRmzrpjWhzjQ8Bd1XCkZLPcpiX7c4WfZjtcAas6E5nk",
  "key19": "4YrSoJ3tnj33ur6qh3JKbRP7wi2JKF6Tmh4FUHFatNhfmwy1FsqduBwiWyLrBjdk2zAWdkZ8NxanyzNu4VRjN7zK",
  "key20": "2xojRQKQJf2qUJ2wizXE6reQSfgh4xor6JwHG17rQPfVn55LcUYAJUj768Abn9QBD1dbwyds6qqy84EaKZHz8pMN",
  "key21": "hxf2sEwCma6CgrETq1ETorrWKVweaqAq6B2vNAPUmXQodnhXfjMb85Jb5Dno93pE4RvGeG4DysZ4XmTUor2CjxC",
  "key22": "KcnCYRzxkAWES6fJMoSXBt2mLK7x1X9pCcsJQRn9EAQrTcSV35V46cioh2T1EgcpsYmfW445hkVvdjzbd8GK6qV",
  "key23": "465PbJYSf1NrwqEQHWMXHovg5xKe3QXFEeNVirgfxibrgdvNsudArsCVr357SGcB4Wu3gbnmu1RsbHhBMsmLdGXb",
  "key24": "3edGdNkXBZGhSJRadV5774RvdVR1vPfZJcsMeUgsxwQhHpSLVcHq55SgJGNUnuMy2TenFGj3dsbFX6ioHRt9f1Kv",
  "key25": "271CPTb6EkwaC47pCcd79kiwweK9hdqATiKaXp8RF2G51s4QdEULN1SwdNx4WRrHDnUTrC1Q8Sd5CXNaet1W436N",
  "key26": "5ti4NnYAPbMQ4XSjSaZtuPRhxqVAZaUdzdYz3e3axUETAcsvZk8kNwd6vBAhhh83Zm5c1VMaoSDpN5yUSc7LkFNp",
  "key27": "59wAAcB5YAceXoMVCaiK4AxKx4AmEnKWi7XkPzpGjZUasKpige5QonjTFgKgFR72fB8erM4EnAABb2pzudPtXoLj",
  "key28": "sfoDQzhNU3gDx4KwqZBfraXhHJbf8kzrmFau6vTQaWok3Vay7UW6SwrtXHz46KACaacTVWVF36ivWGrX5wKu3nm",
  "key29": "5cGnDdbhVLaj3sLxsX9tRyJMGRaUS1y6HBYq7nSXNuWnMcxuEv7eJwUD4Da9s2zDH591UAePj7cAVDJQzPsV5eDo",
  "key30": "idBPJVdjyX3pSVZ7wTnS4ALe7YirePG2pWpzyaUhrREmB6vTuojhoo3yojHG3sH6ZyHe2BQHG2UEYgoRsyuLp4o",
  "key31": "pTofyP7FDvP19fTX9rg6WSgZ2cK2z653JPsDGnNCdnCe3ZgvHKcuB673By3FuJsxPbAMKU6yubHBVZa9zUWmbG6",
  "key32": "hKitdAdgBi1iwAGpTGELXfJmBjsJSux6VhKNQqtFyq5nmD8j217NdrQEAUHQuABaEMzPaxkJ6sTkqJBv4AA4RaH",
  "key33": "5UAowd27D6CMGo7w9LQydCyWtt27ZKYjrA5rG6zKkc2kWRMwQzgBgBvzW2NYz5Vb1YKwi8neeoq4omoRE1CxHu4h",
  "key34": "4H3f6SErzPK7V8H9FEP2yjTHQ4vY3LLyuHje6TgCfLPsZhUpVhpzWP3fM6Ci8eYvmh3qFKUPjz2aYNfFD8M4h2qf",
  "key35": "61zokBs6x77WdCKHFMMjPwif678KUEFK2vEU48xZoPZnqgTN53QfLUoCqb2LLa1scRDooWqSPisrT2Tt44wkdXrS",
  "key36": "61NYqt8gvKiECxpP6vYFJsQ31NC2cb7hXvaLyyseVmVGQQHy8QKGnw3CCiE9BAHNv7Tg8zXPEvwZMidxurBwYUpM",
  "key37": "2mk7E2SjJCxp6MCUdTi7TRbCRKZScJaSQ2LHGGH6Uf2B4TK4LGpuUtbLBsRux69Dr2RoiqGo32wDezgZZBQ7cTtA",
  "key38": "3b6dF7UQpL7NqVeoD4asQaSjS5jDiyZ2Aukso1P2RxTuUVD91fSBNSbv6EoMEegjirDmXoNQ6hmCZxhsY3mt2CQk",
  "key39": "5hqwc8MAnNWqNX6tHkjmkLsUZ3ADDnFCMAKwV2ndKwXMFzGgvH5ujijn3pWkPKbW4rU35jcowZFL5a88cFh35WhJ",
  "key40": "5TzE1ZqhodSZfADpxsDrmmvE2NX3R8QjSByTsnsT8udygYqHzsRkAesCuy8QqEUTkwjEmWjUYRvCLQ1ZF4rBbPfj",
  "key41": "3L7WRZ5RGBiq2VXdGsGHWTn4i77mfywM8KHMrd46PfFXuAyotnMG5RdRZZAaFEhQtBXFsygvzBMKzFTLwuuEcJnn",
  "key42": "4LbHCLFGmrQqttKHbwkccAYnpToJMYy3aZxXF5U1qppQ4TTuDuqfE1FUufMMbTThLb7dmKuD5CcEqJdv5LExNKaP",
  "key43": "4aSCMnJk8eN64tgYsNKMRMuyu6SuUqqyC31uwLGDV15skKfm3tx3dTfcawdeF1r1imvKdLCFGbP9Zomf1VzL8oay",
  "key44": "aA35UctGXErwUApeT6G8muE3NZAvqqX52F7ADGiNPTeyggomb4yd5RKQCkP8mZt6atCdz1xj7wFRBSXViHkGiwM"
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
