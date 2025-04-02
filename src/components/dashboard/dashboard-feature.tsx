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
    "4V6FYTeFiXEfm2HSL7u6PifwrmuGiuzeYVnfEJK2omKuEPocdX6FWtphCS2Y179EztxzFe2EoWTCsQVmh64UYrT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YD6wB3UTLiZUwhaLQGuFFEfyNzjbJBQgjsowSEqWz4khsjQhA7sk5nxemeArVG1cNb57JJRjktTssDKgtx2gnJa",
  "key1": "4TLBPQ63Q4GGiGMTY9dQvLoMaUBe3jdFJnr2kTCUZvtgBbuCge73Dodq8iDwad7xwNQ8hAehcY148anitr17BE3m",
  "key2": "vKA5hKRiEnoTioDvMmdGS8b5v2ndgG3nrCGky1ESYT3oesABa63hUnDeQEwjr2ptNWz2LvZbBJpb9xfja6QTqPX",
  "key3": "4QRbV5G2GQnn5p62ezgsDXMhufnYWUq8U5i3NHiRUfF7NXAwST5nD7GRwpJVnRtUAu6a5DNyYDMqyTaHNzHrc8xW",
  "key4": "5H4M3vkP1z8NU6bcUEMMreRb34kxXce3PQAzXpNt78J6xTJC93gXUTqV3REsgBexRHAKitq8WusmWuNyLmHb4iuF",
  "key5": "5ET4TbN8bBzx4xGn6MGUQE2XT7KYAv3BPWEqLXcwSBniDwDQQfo6Efqi5S1MQ9SbBkUx9diTuAS5p5uqvPazehRu",
  "key6": "5n1TA4NBERjTTWhNuM52TRZhypabBtJKbAHMqCFF3vyqM6mMZZcDPkXqrJNtScwJ97ruykAc6FZfjWDqKTaHGVGK",
  "key7": "cMTgzWhxvRtSBxYREaB5EwZKMcz8JGFAaCy2GwQ7cXqK1ehqrb9hFPxaMC2nZi6KFudB4MSikPoDRbTTYdg2kZ7",
  "key8": "KPacGopDuWqoTdnQQdouqVQjSxcqmZqhRHxLdr76KwxFziYq5r7asf8puSFsBomTPKFtuw1RmzH436LwUjkpTVs",
  "key9": "xtFcCpFC899LqiVjGUWDJA8EMDUnB7YfhitAXpDRVw2wyy1FkmCo2PiaZYMq4ozf1oYqwk58aHXMjWuNktJoNv4",
  "key10": "46W2E4j7v39wNiLfdhDRu2gjQjEeoL2GEyY5DEMstKeZXJM6HK1R626oPXEBp7iqF1DxSyRKeiGqK7BLEYSDv2SG",
  "key11": "3Pi2rZGf6b8bbomvTjQKhM45uYVLFikBaK4DqoUFYoDeVkBuKnXSzqosKPbBQGzaNXGe3wDDz5Ef7ibCdwaYghDZ",
  "key12": "3uuVh5P6avnZ3zKz8QY7rbePmAbZGZkX5VjuuhoKgRFcLQTS5928msmVTeFTekxoLuBcohHK15mSLnu3FndDkUiS",
  "key13": "5VyhKt6YJLAx4CYJFhuo6s9DKtQGE85oTPynw5jNsYrW8YMAuGHsaJtRTtbKVrJ2N5Guh3F8Cf6VvE3XdK6eftfc",
  "key14": "3wXSwFD9SfbecYHB4g4gtNApCVQHefoFcV8MsYaSXojqmdH8fe1ZfqnU8gu97TQ5XEyh4U6NDeCGHn9tKXjkCQkn",
  "key15": "2ivF9yaF3zv3NWEqLYfcpVAKbHqn4Tvm96NP7ekQunzy93h3bk9d4eKm92Td8CJRJhLwtxnir58pqQTfR196GwBH",
  "key16": "3PBFebjX9qVqWEB8m5SHVnGT9J6sRaG2Y9WLB9sVdGeCEiincDtq9Kji79ZEaAvMVbCthHxSUF2xJ9BwwJiv6h3Z",
  "key17": "4yG1DtphTqggmh2tyaXdo7s8FeN6Z7396rf6k1zTHQEUFmbXecqSBESeyugsqZgjC4sm5NNo3qM31XQf9hfJVXzy",
  "key18": "4MHon1eXVPSuenHDZ7DQBWj21E5dSvVtCmM7FTDxm53mVdMW5eaqJfqjuksBv6qoYWDKRTGZp88aR1sex63w2BaD",
  "key19": "3jXquvdA6DqAg7ADJTFBzCGb4Zmm63VTUVKc8AKbw63tFWEnKXKFxqF6KEPSSoaUAahYoucN2RHguoGA2ERePwNk",
  "key20": "6EqyuM8NQQJuM23PrD22ZqcUA7sw7V4hU62xUdxzasZ5MY4rV1Wxui1LDvun79tcChYv6dveL1qufgdocCd7afR",
  "key21": "5s45NTMTwQjMudWfHWpNzqTRy8v9Bv5C6eZFBF4gZUGpJU8fB6ANc6tFzB21Agbq1EyBbTwe5Y6QSYbBSYyTWP1h",
  "key22": "3x6Z2xR4Mm7kr3pBcieWAsGBXotfEeQPTJFHxgnaRHDw51ZM4MCWo9xTG4SAeT7AMW5b2bgNrL5J5gu9B6GF1act",
  "key23": "4Gvcxh4CSpd3nqoAnpV5GmzQ6sw2mZdbGVvKMoUFRmPLnNkWpYjvP8XFZUpsYMehMrJ3GnbZh4Gi2CxfpgLrtXES",
  "key24": "3tZg2yU94yfksaTWv214qWwN1MmzvvwyLr7BjmwHiBh7sLA2DeUw3KaUDKxGFMcvrMfUozU2kzueXVWtbERDNGdF",
  "key25": "r8pJFjEgsSuSLUs58Pfo9MSCZsBpX8MdnRYgbHczpdwAsxBFGyHs8xEyfPVzdSmhgrwAyeSRXMScmjRihpcgTHY",
  "key26": "4j91uKGqpVDYPzjmiw7hG14w5pP4gCBnFdifd29swU6rKCZcL3G2FnDRF8W6UGq92epEwabc92Zk8cBTpm7byzsP"
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
