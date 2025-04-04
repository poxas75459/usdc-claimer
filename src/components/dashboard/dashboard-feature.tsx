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
    "4VD4guCfStjnG3BJWQ6hmuyk3oSJYweYR3jKhgJeF7YmEg5rCoYpTAxuz9dD2T1Krje5D6KGat7HuXDamBuK8ow6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Luc1Z3GeWMfJAkT914JRFBPEkT7EFerNUpm8GFoberYxaUt4jW5sE6LvW22zLEhdfcne5JhTSPvXLmWE9mRwMoB",
  "key1": "3y8mfPqG2HUgdcMeZGoBc3ufMzAQRcR1hmMAbKACb1C7QL2KQatxFX7CZ2ednWz6RVR6zn8askX4rgRbPqRbreWv",
  "key2": "5aYjmNw9HfTmfSrdiRXCNabGT6uvLi2a9zJw5J9nqokTwB2KXftqJCnNjw8SWDWt3jUAFugBFWUXFoUm6o4q38JS",
  "key3": "2CPNBKNn9Uew2fQruo5Mc2netdZi72HZ358VwyAZaHg2JZ2URmwVsqSxrbLa7KxU7xroFPaiwCCn5J52CLdasCBP",
  "key4": "5upU5JyPuCaawgoJSeZ3a4yKg2EnwGvhyjYe8NCUvsbsyTRxcQz1pKvwk6phfdCae1s6ygYeMf583mbg2ybiiLQv",
  "key5": "3HnxSccNkvzS9yn1AFgKw7tmbcD9D8X34MBo5fpMsTxVMa2hnVKug83EAJ11TmZrvjX4AbCditS1ASDTzyXv1gMR",
  "key6": "5E2zQMyG9CABg1ZtAVu3Md8wp8uKdas7wFw869AhUEPG7vEmS19hGZfGmuxvx8naiF8AM1VfmD8Kw3mqy3ziXykK",
  "key7": "4eGTaMmkARmVtmLdEL7mH6gzpuBT5Bg7gWKRKT9L6Y47BQNoswkEemH7bvjSFuJf5YnHYFH3AWmJWbFhuQRd7FiV",
  "key8": "uR7W7rtZaBXagjjdabCTd5grWnrkDQgFgj6zXAy61SfbShJiVhLpT5mnpGzt2xVMG8DM1Taxtb6LQE8R7mYy9Mh",
  "key9": "9ZVqMzQ5TKHRepxEfz7uAwCeMi2jg5YAUELhAcjz5X2yVTX7Mv1jjZATb5gAQSRjQYU63mr636BmBok5DdwdZjb",
  "key10": "3pvGWJBiNqDsaWebwQJnoBxiWiKtAzMwQHFs95eRuh37PPrr2S8JRn8A7jCB2UFAKUu8YcKYNCCf4HLuvWc2SYz8",
  "key11": "2dtZamX2ApfAqxbSSqZoYxA3t5s8hy9w3panUwwqmHrtcNPFSkYqpuTyjXFDa6etx2zejGAPU6ZNd2mCnKoL4cxj",
  "key12": "uzbSSFY3WWMr5zXdxd25uhycvcpVYe2HFQWy4QqqHAWc5WJsnAg2dPLFH5qjHa3oKMo7U1MYbfibLP8bmUA4Zv7",
  "key13": "5xPXCZQ1qQx1DbDBGMSrGv4nYhT2XcExR7PTKJaVBw5zzQ6J3k6tRtQqz1YMZMJrJ7hqGgekoinZt9tXzzDRGz6D",
  "key14": "3C6qVn86s5sDs8BP25VPFK3qcySa4ETuJJdwv7TZVtYfGvkDdLbep4sNESsTj4aPsBQPhc1hrW4PU2Y6AC2fhK7z",
  "key15": "56zZKR66gJyRA6ttCfMsTw4XjTatLVTfgQan8WKzXESF87P12dPz2d1rF7FmS45v6rmjcPX1obkwpQ1jfSKoVbqV",
  "key16": "51gEkpsoRoqmsoBJfXfJdCMRwkMPUKf5U1aYKoiV5CirL5tpx3SsTPyg7V4LcJUYM1i6Xi24AvZ18pTJhwk3NiMa",
  "key17": "4nEc7Fqt9NisQvKMzJVfwjBUNwYB5CRYSNrXZEjnnHmUnzYu5XhFAw2K431NA8VSkELMHrwELwssjyXMjeNiPiaD",
  "key18": "3auH9fyuLooNdZ3Yr2aB6kqvFhDdPpGdexAWrrdB6tJ3K71FF8XKXrjjrMz6D8JNhu5wUvRasTxLVWwnShqppXMk",
  "key19": "N8PJPoMtMJ1A8WWKUdrvt8BM9EVwjKmPwMvhjqK5yso7kdPPAs5uqY4143m87FcqFSVEuL6dvQg5sFmPqNudXjM",
  "key20": "iy5cGsfJpuKrwz5eFqKF1vAgfJWmnS1Yjdnvqqy8c19cySmLciec6HxdNYXVxkJdjyj7B7Esi896MVRZrzFX3KQ",
  "key21": "4tsgGE2nsWQ7pP5Dk6CjZJYLsCyJjqpMM9tL1yhZdkqz8NRKELC5fu1xPufe6LSB5BbqbS6xCkf7VVibBPF7B7PP",
  "key22": "5pBA8se5gjfV2nuQuqQD3KeZPRWG4xPxFqDyHJoWjzM4hi94CZA2Mb4LdmFCurcxs4aXGhxVQAhU79EkCr6Ep2Wg",
  "key23": "2d1Pn8VUkMNZ51Ts2Vu9bbwW9sn79a2xSXhjssQcHDUhtX1T3YsZZJmkqLrTcvgucDbR36vCXbF6wVaKUb4QcykR",
  "key24": "5EsF4PCTGfJyv36RGi6ck9NuCkXS8wzyf7TPPJR1PPHoEe2Xy4xfg8eFS4TCSUpmS7Dsp6tWE9V5yGAN7TvquuzM",
  "key25": "5VsweYrYje2KtR93QajudSsLu3QPWGKhQ2D6YPgHNi8eCcvpU6PLoc2nYP7mufo2j8ZurgGajdtwEVQJiV7k41q1",
  "key26": "2YnBPKJVL4Fc1rquEZgUt5miEgWKZPfz99wjpikNm5WNPkgR1rynYpdhSyuxvQTu9tYBjBCTmiNorjod98GZDjYJ",
  "key27": "4aGaZiVyP7U51VSnh5vRCWEWwUJbU1Ni264F7KCtVhCfU1qBGbQ8726YKp1wYhiDixhuiCGU5e6pCwgFNk3ibdm8",
  "key28": "4MUFKVje5sqE4NEMDRJFQFZkzJM3su4Su9WWZFCSB3Ara2iN9CftAeKSRr6bpCq71wMKYj55Ab8iD6urEG6KJ2cY",
  "key29": "3Eo38KhWv6ppXQf3FYNwPt9hvJVTEjMepUp8rbgMXxduX9G6fA7hEeFY18KsfdVHnJdhSfPu2FKAtPhjNjfBEPwb",
  "key30": "4wzBvd9tsyiJYmsCHxpawxa1bvsd3d6pty6KTkVjYCJF9Wtr3SCUYJBdcdczzpiJQyRULA11jzg4Uwt5Fvyeh6G1",
  "key31": "2oMkzPMYrbbGPxrDhkwKDbzWXqumPXaeDZqco2SfTXUzj2BDnzMhxSUav4PsZdQFC4zACnDNes2Xfczaef6Vt6wo",
  "key32": "4Lhcf7BnQonMC554FVnENfuxKqHifPPYkyZg8VprcVa5VUhSLT7Y6EWBXrUaN19cV1V9RfUhyEJJULCqJC6YkNmt",
  "key33": "642SxNtyQ9jE3JUNc8LiHwejW4FU7WTAw3NYR5H22fvGeT9BuUV4Xkq9hUuwr2ZYDqBHp5XjJVYHXjX5PgTXBW7n",
  "key34": "2VPGEng9mDy4Wqv9dSjg6QouDCcwXDpVe6MkQZTHpN3hb1yutpRPSsxNuzs9nDGgGVphqiLAApQkEg5j3s7y9aph",
  "key35": "4NYT3kWrEtocJvndAmRoBy34VWzJQ4Ffx3nZmJ8kBbbVknfvRPufhmfnJriCtZijzLyqZJWzkQQU4nbpDefDMHsU",
  "key36": "2t7pvfaVvL6tk3QqdTXQzKqUBs36GJhaaQ72MFHCbzCdZJ76phqkTgX7i4PsNYewtMjC2dxRYQTthVxqAJeeh95V",
  "key37": "4UTmMoVAeJrMsbWDtiZT5KmoC7csQ9cVgXvSW3Mqz7pYZxjQR1BDC12BLQ3W34Kf22VRTPSE8Yxvk9NpokbRi6Et",
  "key38": "2n2xj7z44hSyZbe3xYefgDxKTVVhRQSJE859MWe86XzBAvvGVcMTCMTFm72skkCK8mrakvPk2Vk8StEufrXWqupn",
  "key39": "3mXTkrDdjYtx37uQVgWqjcq1wF5GJNGXgtEk1K3k7f1uhEREkJET5UzLwYQom5DUpgtei6KU8P7BH1HcLpEtfjvA",
  "key40": "zxzBEZ8ZX77n2FRiSKcASTW4n261uahocqvMHsK4zDPYBVH3cPsH166ngHe1QjdFf2jVGDfg1bz9UYrU736pWE3"
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
