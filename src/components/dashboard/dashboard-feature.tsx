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
    "2jomHAbPPjsHnVuiGavSZDg6qxa2WxxXiVYxHLzuCCXyJicMx9jJhS88XSqE6wxxnhLin6NcCSxuaDfQ5kC6hEW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JU1MbqSWFMGrP8tEMrhpjzEk2xPQkhojyesQDbRScL7wzP9oeJY2zJ2xeoH21FBq6EpPFozP1dZSfAJngvi2ADc",
  "key1": "28sRvtTBEQKYu8ur2G3esihR9mGZW1dTnAVBkLTjjRRdzdqKqC5N3kxEMjDG9svVovctGfsMZMSi4bu2uXHUvieo",
  "key2": "5tV1jxWDQZuRbrZitrJLpTdwcYLh6GRKzGSd2Ts2jBUyPsy2fmp7wWyaLUAeLLqjixCQ6w8Fd8ggfnBRQV9GdvBW",
  "key3": "dvfuCcQUrAr5kdUpYhPr4MuVGz5NJVFV9VydDHzBSppYGLuMWo1ZFmstEXc837abwNif9UwbXqQXWvjLe6FMMdt",
  "key4": "4RH2U41KiNAcbDwsjgneivwLTfnqyMwMaFFFn4AKMa1m5k1RU2jFGCs3AbUhBCTgHMnEe1qwMKAk3W8tYZwDeaPo",
  "key5": "KDBa5N88HnURxDt9qn7BjdWC22VdgRU9xS9ppwd2vqWcHiyyTYcbgrTMhbWvQp6zeLRnBzGWr8p7YwYwTvnjEA4",
  "key6": "4M8fDkh3z6RjKVWBX6xwF9QgrSiyweYoEL4ojUsry9KFDEcpacJLRxZMBg9BHCB2WWjdQDLPNQegkCyQoz7jnqKn",
  "key7": "2733M1jL9ata4R1RkUVr5hQsDAB13WSVhCoJmtsntesyLekqBP65CRF4ysx3FvtmBfBgAn8nSPDYP2eA6AC5pGpv",
  "key8": "58LfmnCj9aFRXRAEVyA8gquwq6gMSN2ck114PqU9cKrPAuQEmYHPHcz83HjK7hzBKZy8RRENrmuJzGajcZL2qwPs",
  "key9": "5qN176sdWNFGSnzcYJX9Wc8ZVyL2NXJxFQQZGoHfZ2w5daCGG5fS6yrYS7Ax9pQ2SPUGhhdC3dCQY46NXQQeWhBL",
  "key10": "2HSdKNgi4Lg8Ho2Cyy3dPa2TwZuMM2ZVW3BwmFXLKAdrEZG4TEFRXZQAj44phxCGErd2f7JKR1guyDH8vezpdDvJ",
  "key11": "4QE2oNysKYtBtoixxyY3AM2Vt8MuraMHS5QbYTgTWMSc1HVUV8qmZkJNyYjbk5UxqHaoifrefTVsqRaAcrzHRU16",
  "key12": "5Nxzi11mfjGHpcVXX65Lh843pKzB8cH6t3PbRpZasAaAHvWYWBeSjVKGTehBs1bDjt7LBuXwkoDHGBGN2F3qZUca",
  "key13": "5Vafk79bwUwYBUPpXHxA8RYLYfx4cc65U92bKyDRaZKnHV3Y2mFzrPSeW9qvoFNkJdgPfrBUd3XrwJzH3PXGh4D1",
  "key14": "5grEhwdxUZ39LXM5YirVACsmTdUTYbXh2gYv2eqR9LXpz4nLxENe9oSnmoQt4KHrwKM5Q9qXK2LGUr2NoGT41Fqi",
  "key15": "4LwE9qcEW3r7c7ueNREpdKcrdXqXMEE9gnxNe5u9wQr2Wcua8rfWakV17CUTwDAbmtbLdPVapdJKdnBvE456Pnu6",
  "key16": "2dBGHHGJT5P8dCZtXb2oporBKBCCFueHkpyn5DCA2bHKj7QEgUAcGpVn3D3nNN9BJjdhAMRxDbnZnm4pAiVjEAtM",
  "key17": "3ZoyGXHifLgJ4NFip9GRnqXkgizjUt57c6W4rEVnFtPANb5BMpocTAgV7tfUTZYeumjYZpVEa5njZwr4cswkzcJY",
  "key18": "126mC1URZ8cdu6Cyf7UR7dnBGc8aUyiJZYqymQvggb9r5NgQxN4d6gTPQmaZYtnpz9Qtu4N1iGCx3GnxVvMUPY1B",
  "key19": "2Rib61qPQJXjNCGiKGVmPTf8Qd82KGuVvLzmT5yQshoy7xLNoPygLYVKRzFyu9rBdXrk4PMuWLPchHZWcPUTSQBG",
  "key20": "4QStkfvXy8jaGAEMNkDX7ZHUEyACqvPT9TfE8JGoAGt5Wv59vBZv8VPwV68QyJiQUyeyTmENTSmGeA4ZT1n8VGS5",
  "key21": "JGdwodL5xUquz5Xbq1uERUaZK33VMqHJogQzaAKZUQ4D7hNE3g9RSCwfN2SQqDxPpR9H6oE1DJhW1uGh5Ge9xda",
  "key22": "5Tuce7LBEjUPwihYfrFMKvNHJEjJRd4xHaeGEgxDD6pN7SKFCNgRCKKMuN9Dv4y2oB49USsHcotvLngiGecNBq76",
  "key23": "4BVRHtmiTg3EkLa8JfrXAMwya6dmXxseWjhgwEZWcLqJmqFmxcctWSFm5NCPoCwr2CdCDWrub6z27riHn396SW23",
  "key24": "2RfHQ5QwsoV1cYEQP1uHTTeoo4ZFr5xc7uf9kmvQb5Hp6a9EXAMgNsPUxMtEbYDhoMJMJJEKvq8scGLcpaxbF7hh",
  "key25": "SPnQ88JuNYwbxoHcTPboB8uACn4XfCGtQuvATxrdFqpv7RPdGd5AJvUwMQYmNMRVCohFTter9aGejWaYg2Rg8yZ",
  "key26": "ipHiaRHB6tDLzHnVc8hgZJd4XhTCBtFKHoz4oys2DqyHJJX2MNCqJ7KHpX1XJRJDkCrNBY174nhuELnHdz9vYxV",
  "key27": "4wXv6P4awzDzCwQ58jDzfyuKNjFWa8WvBPSbgaeMjK2fCEgQjZsS4bogbDco3DfivGwbgAS1Hcns4rgqTiGtksyP",
  "key28": "3wMhvCD7jycR6fGrVj7iHDrJQR7hHAoApQUwTXvFKPd8yR9UnqyEjzYkb3hzp4ZoamdzgZYVzy5PRBFMvdtPVo5r",
  "key29": "w748UEy6HAJ3vBDjhry5Zp46B5QTw7ToEvkKP68batTcoD7yYBLfDSiidbfDteTP1C8TTtkuymBdZsH5c13jhLv",
  "key30": "4mytfY9wnamNsKuWgF3UfFRf2Axq8Fw9WdHS7WprxDCVLjVuR4TtoFXkDW2pfVgH38ArWs9bEJqN4EumUZzrTjjE",
  "key31": "28Ss6FNzmHqWmDffMaPhGPtRs8jJnRpPASkfiA9jhJdZGWWu1J3ztY6p3VayR5gcT1xyYoqWsdspgkWkG6qgMXgn",
  "key32": "k93B1M66MAsydfnAkTbPz8Vk1y8F6A3TfBwMWkjHQSLPLuZ9iyFTTxecos1Za77ToGoguzttJDXZoibPzNu9zYx",
  "key33": "5p7bG6LQ2TijWSq4m5USnwawdDA3j2LCncGNpWoZsNmxYsNA4HQLwQhsdu4gxkjhdT7WDp2V3E1eh2ppArKeqi8m",
  "key34": "2RNbP2ictauVAjdao2xmBEq2id1urbiJKrkSvHBfQNx2XVcwxyEEFaxyNdmWHnTAyMPbedpTQTbYEu78EThvrmSe",
  "key35": "54RrCWoH4bQiEB2orn2x8ruvg9VsmtXUPQkdf94BVQ3sQYfWcqj7rrmwqfoKtLvmy3jiQm1rxwfrXXaJ4bVekYP",
  "key36": "4FvFqiNAZJBmBjQFLofZ8HrNU5KoRHiKzEq5ja4QYmK2xZh1D1kEUUh3xSD8ecEaRM9WdBp9PVz3yjsWk922Zr2h",
  "key37": "2awZVFyPjesLptiwYXn6awTjmm1WQy5fKo8A48K2H1KFMXTAiCk5WyJfbZ61iq1Pfo5CYausLNs6RmWSBDzzazek"
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
