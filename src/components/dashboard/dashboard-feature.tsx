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
    "3hptSg9tAZpiaThvMNVNBGDLBd9ZfdUVg5fKp3UCVeSPUPRc8mDLYZtkzbzadU4ECxRYDYnuinVnkPJKHGs7Lfrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2Co97Ldyh226cp9zAodZPhn8zRgwKVNxYUMLvZfQdcuaPiNUmG8QtmjMz27BPJtPd9oRQVWopB16LxRjfULcuJ",
  "key1": "4r5Z9k5LZafrEXuGhZWYrAJF6SJ2xy5ctxX6niPV2B7kY1xn2YaY7eDhTMRxKNC6vSn5hVvLok1vFKnq3kr5hUKp",
  "key2": "2n2ADLsM6XG5AsUERt4sg9DbiZkpDRrjdrJQJ47wDd7NpCYP5FcwfuffhLc6HyME5N4Nmu8DoYKwPFjWrVRR2wTS",
  "key3": "ZE3ZeNNLBy8bxuFkNC6xpvxdtRNuFtZwKLrWg5jPrH6AdEwgM8y32UuujfpDr5KQ3goZe6jfEg5fdYmUuitymnC",
  "key4": "1v5vvKiHk9kM5PBRhiLFBmLqQR9GhLHskRWPSQAojy4UVGFasZ3r4PnYRRWmkkzyKDGa52idgRf5H8Ds2X4MLzT",
  "key5": "45AeDwpsZnqG7oEarMWtWEwkkGMvxJZZbkEv2h2UfPdRBK9KAt8wKfTkYztkXfSHwnptWfy6ahZng5hDjTrqcwoo",
  "key6": "573m5jeReQAq6roxRhhu9uLNbFeahDo55FsAwQHjurnHfLghBNxo2XrLajoPVETHiTLCZB18zRvJgpyyTrJbrNxW",
  "key7": "5V3GopxPMdexxHaLvQP3ubFsnYxCX4eR8qb6DoWzr6bUekAJ1smS8wWcFkFi7CptK5wPVA4n8aXaghznMAgeNVqh",
  "key8": "5E8XbGwWP9pNAbBoHA9BxJXvRd6P5whrWUxwdWb5bwpVA8pYG6CUcDYvR1yaFV1mm8DERNFvJBfuZhXbAkpuF8Vc",
  "key9": "38He145Bo25sSCL8XL1J3UVBHBr7KW6yyvCcL5iWh8XKPHQfmLYm5tAaRVFeqcSXbHYDPV6gY4HX2DruMMJFYFMc",
  "key10": "3AhWnYTi8SZ3P4wxnFDJDkX7CfsAVv9ssBBjWzGwELerH5WVFyWt2TuJpq2cR8o8QFW1g7N9CxcfqmDtZA5i2Sk7",
  "key11": "3eEcPPW1VVvcxPvXsV67tr255HYEAJdd1CaZNiYCvpFAkTdxLasFVjEhsKmqC3U6LiYyJcPZ1xPJqspoCyav5vid",
  "key12": "47tLp9LBaufxrJWEB7Nxc4CzDThxP6bDkbtZ9iteCPvcnnFvSdY566NtjRY1U94LDraB4vftqgSTtUM9DhYokEqa",
  "key13": "3wvSoSZNqDG9dSY7KZKUfg8gPTzaxg8WMQrcC1JgLpCBoHKyWsBMywBtqXsaSJT7krvTK2g6UDsG2GEKKuCLSuUJ",
  "key14": "4ZzZ3F22iEGSGWdELbmfkPKmf9683huWg1xVQp56GsMwyFvRX35aNYwe5Kq95MN5h2CWA2jg7HY8BeFzkykDBAwv",
  "key15": "46cCYYPgYs4YzC4sbvWLj9EZgQUJXkwJ91uKVKAE5WkYgh9q3BJxmwgEdUXbLDy6BB5zhF3arc6uM2tWUrGMrtSS",
  "key16": "3QkuUPNgEbRs5LDA7BuaDkWwijHnJbY3TbmnhM6Qtfo5zritJkA7mz8wxz4ipinW6Go7K7wjV84fAjt99UEVnhZS",
  "key17": "3HMNyV4gZZacGd7Zq7RAXznp5ubUMRsWcGtAqKhLV33gUyjQoQFfxcnzTZuzEBCXL71897wp9PYtujR2R8eNDSQC",
  "key18": "2Jk8kNqQkUd3q8TvaA79LTumownWRUEykQM8Un2gqsbRs59JmK8VcsvATRkK75WJQ1eK8RYVmbZK3hzGiHJhLcks",
  "key19": "3DoGruND87ao3K1azG65tmKGPNtsBN9Zj3dy5cHjZ7JTN33ebfEEpBBVnQ3i7714dPhBS4aps8R1sJjjHftJxwPJ",
  "key20": "NSzbR1858LjiyGLKnrPsv4nk9Sojhw9LL8d5zbFvn5KEf3H9t91sKJaujTfGp2HAfvL7Tgwi8VWRt17jZFc2STK",
  "key21": "qCRT3m8AgeVQ5jgE2Lz9NfwFQByNbZuoa3UwjA7VoVycnJdHsHyj8uD1mdU1AyZBsK8yPxwty62obQ1ZSJFsh4X",
  "key22": "5aH1fTSUQdPNo885nffB91uwsFn1XwcNaRBy2gicaWMVN4PGna67RiDtpUQTxNHsk3Dh6eS5iZb4TuQ8ti3P27EH",
  "key23": "2XJaDjiHQHDvUPgYAzvAANzoQqhbWQ84oefoLtq9TA9yMLdgTvgVkc9WvkcFsD1xjvUVe2VACKe2rQCbcLzJSCLs",
  "key24": "4wjyfRzdAjeqAwqCG6d6xjxyT3co8FQxd3SmsephCVsbY4xfYacfRJ1Fp6mDiNWG4Yu56DWP1Jkm5NSQmqYzy7qU",
  "key25": "U8Y6YVNr1Bb6wSMnKGbiHwH8DTWjoaG5nZr3zPT7UMcMFPVwMCWUxXLQdMSCALGYkcqG6rW3hpD7rWJoSu8H9UP",
  "key26": "4CsAWa6JUHgubUPJCMeEE1L86VHv6hPhPcwpw4v7Ff6x6gHURpy4k9w7Eufs3c7JnWUSnyDexbgPJof47dp4Md9W",
  "key27": "2YBpyK2mVjht4ta1DeFrjbdtoXxVfe9mREKyA6iJiNuc9uco95qGb3eWSAegDaYR4Zg5uLEm8sNCU2vdAGsyiwh4",
  "key28": "2uvK9Q35ZPnn1kUvHenizTasDuNVnCkNUvstmXGfqsM22VnKzffEDoxb3rDA4iaAPVooi9oQt3framHjakykusxK",
  "key29": "fLvMT5aAEGqQ64A7uinU46LyfpUqQeJ6WUfADvcygFHghJCPkmkN9TSfNVKRQUfUWEDB3Rwgx2eqDeFLukqAuFz",
  "key30": "2taYq852SrrYD6yJkrGSWD62rXF49qLFLvUaYiUkYGnRJiRG3ssv2M8vzQgjyFkeq6rbZtopBLUBddBKDRmRPGQM",
  "key31": "2tyS6Agjf9ffqUj9sw8E9htFo8yAt4n8os8Hm6TKKw4E1nq1WPxeHmad66j3V63uPm9DHFGGVV1uP5c6JyKbW7DP",
  "key32": "2fnFbwQkCJZvR3w1Kjjsp2hy8Hv4LmE4Juse5YLPovvVvtDhZ6kMq16ZoAx6bpjgmKgHpLFjSHh95npbZKrktsx9",
  "key33": "6121CC6CdLggPYoAspWHGvAKaXR3zm25mr4oTGrjt1MmQR9fssppANuaPmFMF1hQf5tjnRDiu4YtJrxSsqrJgaq2",
  "key34": "4LTkochVmcYwJN2bgc9KCaBPj9vNLWDGB4hSbh4UNiHhwA8b8VVw2SCEdPvB1J5K5KDjavnqQhWNAiwr52PC2pAD",
  "key35": "3RCNSH2KNYLu3qLVvNKXLuUzhZJL9JsbWVhtkVLrLs7AVaV8Fg3Xrso2ZkWuefFiF3JzUWBZXG2atNaMDZwVPEiQ",
  "key36": "4ye9VZeG1ZjFD6FuEq8Zy5AfDsd5WpbkSKqZigtAQrQ7dB1WqHQvn6iLzYDnFipAMrWu66kDisdcdh1S4tP21X3v",
  "key37": "Y5h5HC7QeYNVxNzAKPSHjWQK1iDrzWqrMmxu1HaNnuMpgskEDvjKmjuYbKKHQr8gUrRxSNozt6mx63bff85Gpx9",
  "key38": "3wksBDmisgu6nFW5fyHdYEZWH8ctnrFYB4Jn1y5CDwZ9Mk5kErSMjRa6xuSay4yHxhdAhxcei1Q52KnL8zBZC6aG",
  "key39": "3YSx7Ng7wbGEycPBeRfYPUCPTMRFJyLsaZAWWgCH2RmpChxt6rCD3CxeS7hwddp2C3oxNjUSiWBeKwg2xG5xDHZR",
  "key40": "2uuWacuCFnsb3gXuxdXXSDYNvGzggbkgzfdCXkTLDX74nr8dAF8PFiGChBwT65EHGfzCftrZHPFxX6TgxJShXYCn",
  "key41": "5ad8tmAAmYQcz1C2Zi8vw9E4zntuX3CS8WMECFp6LTcpLM82H1iZ7cUWDhmTdxXRZF2kF5TGqQtDrcp7e4kCfET7",
  "key42": "5dCmJey1vCXurvXQHG3i2ubyxQdDkbbvgHd4BoiQ7eWNfxiUuV3moNvHgf28x4eyhG1dzcj4iFJNWdKUnfjYdgE9"
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
