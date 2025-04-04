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
    "7ADM9QG7aB35EpQw9R9mpdhhKQReNLpn5E8BUaDnfhPCxoo1ZKwHKHNehqXuZapauEs89ZdHemReu86BgZ1SS6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWd9vGAahKnpySV3WrZzvyo5GFtT3FSfqkSVBwsMutgXEssCra92jHKmZvJnJvbDPuypikmSeSfMDAArTPxF4bV",
  "key1": "3eSMF3416QHPPLKvyaE1kUPHwCcUFawVz3UuNL9cZJe12g8pSnH9aJiMYnp1jL8vgNoFsxFgf8u9FJzRtQMDmARp",
  "key2": "VEyufh6qedYCLHSKPoh5RnvDHe8Dso6TdD4bSEeUijikKRnENK6LeSARzCuFVQ5ACbpMETXVCKGwxVswjFU6o3J",
  "key3": "4rHEJnH68APKNjLEV6qnNhaTLFquWSK89syEZ3xaXjuLtuhoBg7u1Zw68ngi23G3NdPyJ28cpBN4yVRB4NU2jgZC",
  "key4": "5DE8sEJ2Fn5RB9P1LPKJreaqzzazHqxY69UFzYgYLvLCyCnhzjm65KYXiNGzK9kkukoV3g8sx7uT2jb5CzY2GmH4",
  "key5": "rVAdqsmX96TdboRZxdZJjqmTdv6snqWB7bDpSqPQhoEs8NhcjiZGbW6NKhpyGiXxuiJRcVMudp4LfqCtXQV7rkb",
  "key6": "3vuzH4QJw4BjdJL7rgFY9pdJkRa2dut5bZomyvzUrJu5hE3rQ6GVkctznCuNYh6cqpinxWLggrj5vMRdBd2d4rtx",
  "key7": "5YefibssPHg39Ag7dTXmrx6gMZwwq9u1g8kYwkZDdhAjhSx2RPkiqWgxikSn2fdZ38ib8E2ArVa57ZMtg9FCfeJC",
  "key8": "ULcr8vpMR4P3gi6yJocXGeZdxg18xPWFxTQYHFPE19YnHfUM3WnBFi7GmeBoDE4qsQKw47GDGA9QMmJ3jCu9LMB",
  "key9": "4THMUnGbHazLDiSm3fccuwfZ3uesH8K4dBhgLZeToHtnvGNqxWTqk9cqKTWLzPXSzcop1PTs8KqZ97oC2365VG3w",
  "key10": "5EusUh9rjnGNc5Q4YJ9d1YfjtqDA6DeVKdHkSXdbKJHbnSNu7Y9fncopPgfWCJBkMyGFkc13ZFCRTYRufkDiq9tc",
  "key11": "Hxw11YjGqvL5wo8BBmNNNVHW2bTifrZq4fiHbRr6SRQ8hDoaURQiEXJHRTDPxM3ZAuPGHP2Vb5pQMpe1D1TukbY",
  "key12": "4jfC3vgieCjMCweZXi9q1cfctdyfT3fR6hbMiDQimofty1hk4S2qukcfzj2eNFoX4wEXzGWD5ENAucPMNBQntMWZ",
  "key13": "4jJZMC4PqN2fJz8sSP8hUjDT348xDwcRHxhtASz41189hCVWjWhN2cadobkf2CuBjhVhnoFmpK6au8eRZEBNrczK",
  "key14": "28cT5a9n8b4c45EPBTCgv4XeiKkqvhZxhZ2QX19RJB7KUspRHBCjFEj9CSgW6vs9Tj65gxfaWsjmYvfaarPs3VKP",
  "key15": "4t4ZGQQ44JWnAVRFRmo5RKm9Lkgyp5eZdigSeeTEMtL8Qo4PqVryEHddceYpGXJ2ZTQEjAqjYLkpgVgVrapQSK7G",
  "key16": "jUxRMZDxF3n693PsRsNjsKbAxQEj4M1zk5SYKdoV19yDzrKPb33T8vLWLituJ1rrdwpd3fo4QRde6kEmQXD5iwf",
  "key17": "3rEryVbm7AsPj6btbqBT7QJpNbPjaseBsD7DdYUSSr3t1bKfKU2N2L46YzWVchTg6Z48sapC99VyA4SPJ1AiP4iX",
  "key18": "2UksqSoTK4VxqqHCGD96Qq1SxAA45qx9R1YVMgQi5MpAuUM1VsqxRKHN2WGYdz28LNmKkGHprEP7UP2hr8qM7MZB",
  "key19": "3NbTpCHwvD51U5SeMb784fhNViXpKRWRDSDMoa8i4PjT5yygwLekBQ5Kgy5VdZ7BKhwJVTTAwRQBg9CYffk1bcyV",
  "key20": "uqhoE3gvVH3Ra5HoFmWCbM4zX2xpbE9zkRBTxhSVxEmZvMV5TYYu44UK6mJzrqtsG554d2Cr9pYbMSUF3wRZ3xc",
  "key21": "w9Ui51CFt8bk5Ma8ELiEwpMY7fVQTWoHuTwmNCpRQ79KPTckGh8UkLMKnL18b593j4SbUp1QKifdnVTeK69FXX3",
  "key22": "CFeSdik6vH6TW91RJAAj74HaP6pRkdKm49gkuv67EvF6NB5CZiCpLpcAy3oMMxGZaQNdTrcZUjv5QRrkGSBFt7b",
  "key23": "2xSv3Z5iYC8TnZKpfFX14vvK9SX6pDnqgqHG1GkwycR55ziC1SCNGuE9VTzmv7pVNXFz8kngyyzbhGBXGMfNbQjv",
  "key24": "4wS2U3CQs3ZPqp6fCgTY9TvQAQHwU2Lcvx5oUDnQxsxfdjQd7Jts66JbztCKbXwHu5AH8Nh9Qom3uUSGJhAxogt8",
  "key25": "R4rZ4YQCbkAFUxNUWAdguMKZdVoUrYhmmpmXTiW2pUePaUqcrRLHudvjusHuojKdEStNWiUCgf9npJkm9iiJnBy",
  "key26": "2jjixNcLhARLMoxFrqndnia3MfknrHqWpoai143rHFYpA9ieCKvBN4zpAcXSsBs3mVee2ny5w7Vx5D6Nhn8haZxu",
  "key27": "yCL1kDddJMhqwfKG28CEZ7kCN2XWiGYabBNKiUCvFFWfaqHJsQbzCMLNTqTpUU5Ag6kXXGYwrwpkW9LRntqPb8G",
  "key28": "4G25n82qE2C3Jr5Ty7tj68ccBc5ijqgUJVv3MAzKn2dBx4LdYuhzkZyxmmnJyidZwEkRR3rD7gxLWwGYso99YJHQ",
  "key29": "qqrJrpWPeJju8jEWAcHTdm18ra3Sa7oHuzPMbLQvmG6d1BtzHiDgyS31mUraXQPMhpUpZw3zqbZG7p83Ldxt6Rj",
  "key30": "4jPgZTQ4i8w8xZPdxz1ozaRckUwX5PXAWRUcEDJsD4Ahvbk62HWubGR6jvvuQZ8YDe6edYAioHKH9DQBNx7BB7bw",
  "key31": "35TNhFMRYnrouUpPBSfixHZC4qSgzuzAy9XwaVmWiH3TB7FK8WZbamQkft1fWktmtXTtu4AroKuwMoEKqtWqBPUY",
  "key32": "pnKY71FT6xrrq4VhjnrXYrUqxBhsbKF5NrM78cifctZJk7gXCbxUYosya5zWg6mcEXfyfVLCW3RFfSMkB28u7rr",
  "key33": "4YZT4nbyCuEK1HKTFV5Ctdd7DP1z5Z3KwoiRL92L3zJkyhmPTrcxWtE8GWJJQGejAbiGAUNis72aVPi8y5AQVou1",
  "key34": "2ppX48ooAh2vN1qpkf23h2ixoMLTna5WAHAMunnb6L5wHR3cUvQTZ15safqmr7nr9bZEQexY1j8Zb3T2ya3i5nb4",
  "key35": "3R1JgfpHPZd2RDXEhx2px7PfyrQ4x95uvpc5MzXxvVjzamaJfQwa2CduSarp7N8S7z1yPSasfBL6kBru1qfTXZn",
  "key36": "3uDUttUtgfezHXpFAZLFZdypzDBKeVhrxHGVp2Zi5nS5QLoHDr32w3deqZktmUiTABJTkmzvbUHWFqgR2SjBBvoe",
  "key37": "aMrTNwTjiYf1pcdkmA4c7bW75UZGZh8QnPZoRNaApnUN9p4a7QoT7sHcG48iHMM8d6664raXgvynondp3bQLeEY",
  "key38": "4PRmJxhvyzdcXvLwa56zHH9NQMST63UnLcgjcStciZ9V4ZfVxqNrqFHnWfHPdRPrqwX7XKinVQnyyU42814NTAoy",
  "key39": "4GoVydLRWjUZt9H1EX4m6UTa9kjJqPR4hrjAkbZfon8SxkqdfAXx2HAtRhdEnrjrvKT6PpsJNewj81ovN8MuCSq1",
  "key40": "4CTvNMp2itCH7aJar1sssJ4hppoJFSG9uFiWHobtJmHcLTz8724nAZ1XHZvrqUXY9gSr4odmUoxGxemX3h8XsmS8",
  "key41": "2aASb6on9pURk9qagpSJm5W2vaQ8oEMLdRGjntkgGaE9hgZ9NmHpgUXxGc3pQJ1dDmh3V71aCAZT8fX7xCxqm1do",
  "key42": "3v5KAQf2g3NRUMcUTi7eajkKoW2x8C1qFkfaAyVZcEWT1dnbofncc3K328byBNtWQ9qvX9kU6GN22kW4wGV6RnFt",
  "key43": "4JXNiLxxYRJpQFm5e7pShxE9McPvyspd4Y2LBsX557zo5HQ7K33yszywAAgyy1J8ap6zv3ApT7hXJori59GE8Q82",
  "key44": "4wbWZFkbzw1m6E4FGzE2XebcF3e4JpaRojotXRpEWRQpaSPDECdHisEK987v9YFGpG8wi8FWvfMGaBAg15gWBDua",
  "key45": "3WWFtB1p1oBtBRvad35kFqydnfUtLNTjgzmTzpeeikMUZotxDtf3V5cePTkqRtuicbfPK2Uehq9y9tfE3PsexjR4",
  "key46": "3vg7PG3j4xj95kv2KX7zFzwMVhhtqnUscF5SqtKCQMnCACG3uNupVbpo5y4Cy6DnanWNZW6RUkGt4kA63MR7S8pt",
  "key47": "3KeCNEADVZ9N6nuSU9k6tgjUa7j2xKn8A7mZt9NuHsH8puwPWqKbipNQuScscAvWAm3pdZg6FyyEQnthMDxRQPa",
  "key48": "52EtW1oSEeryn7p5TCaHoRMEwvKbFLtiqbq6Vjq8MYWkz6gf8BZYCQWvwNnQuYc6h43RB64szKq1e796EK9wHpG7"
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
