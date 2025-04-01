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
    "56EM6Szbi6iZeWJmReeHjQE7bxMWtckoqe9yZDvBMN8mdC9f1t5gFgm3kzTGnZEaDHK8ezseAFp2nVYjXFpjyjMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLdQunFkSPxNBB1FEDbEYFRicR3mP4XAGobzTqWjfbf73jvAtwPuPCPcSjvWcucURvfAb8Ww94qN9h8Y3DrSbJK",
  "key1": "3thVxoX7cFYC5ywkoCYqb6B5hZ6gXx4LvC33M62b2xvwSpaoMBN3avo7dcBBPondaNFve3DkLFaZUbmsvWaaAdAa",
  "key2": "FNzvhJe9eZpGXK7Xu7FdpCDFxYS357Vj2fs7AtNWpFbJnN3Kagq7ZZJhQVqCiX3Yk4w3LVWBZze79nukWZ1ktNN",
  "key3": "2nnHEnxGDJLMXpVzDo73PgW83sjTaDBzfjgcjAUyTwiS96D4Sx7VVB44pgCN8EosRJFs9NoXuxNrWBoDAFgzuKMd",
  "key4": "4Pq84fEMa9FDbUmcP8f4S5fp3nxaDqfcqYenK3X4QgxuBVxTKtYVj7e2YDXCn786evkAPQkCMs4CMqmyHsmkCcrR",
  "key5": "5UqNgDTgr2EkS2c9ozjVruQsTL7wPGFS31aSxdfCi8yoxBcR1wboXiGPZQEuYerNq9zN2dcSEREcknTKzozxuQBK",
  "key6": "5BDHXwN4qMwpajBS584n6cqCucQEguHwA12dJ8o5jTpVqAkgg9NTdHdVt4H8PNqpBsBwazz8QSP9xqZnUGYZCCP4",
  "key7": "4xF88rAeunSneB166czU5QqWJpsU7EQaFbGzKp9xKvpUTrSvL35eKKF6dAZqbMFfjwg8LKLTuEJopcwxdvwAPjHR",
  "key8": "3zb5KEi9C1hwtzyGDpvYb2GJjdgfUW4WSXGT7gxrNJinYVggeeJV55APBogvvCxLXZbMhjgCt4Fb2aF4xwku55PZ",
  "key9": "5wd7DYcQUKURHK9JBTUDrDqXqzrPRPsbgRMz9gS8KpSSCDLihPUGqym4fa2oynTvubrE9A2Kbjzwcd8tKBynN8cS",
  "key10": "B8qTFs8Wrta3H4noeqiWPUNLfdMv3KJWgyL37JGAFmC5noSKvaPr5NmbLcFqT37ssr4zfddvxapnJSpGt1X6Ho7",
  "key11": "fmLrBESfY9QDXUhRuNNhqj6unhfW8TpAVQwGP5XmGSLn5WLUMzKF52v1tcsNm2JQmuHD3ovdY5byZ6zspBJsoRG",
  "key12": "2AMkBgzEPqdPJxXe5EgjTz1oePEz9YAUybBE9vxZdei4yKK1LuYisPr7fpC93L2Du71AM7WprV8pGeqbC426bvff",
  "key13": "3A9vk15rxb2S865wozBPbC2A6aXGneVDFkX8bJSciSdPSuU3uhprdA2Fcyg1k5cNixvhtNFABf542atSX1WUtWb",
  "key14": "3QfieJQy6HhXiCDqYb9hqPy5bkeUtgyPB7qp1VDVnDHtGq2ivCLh7XeWEi4caTz4tujKbimjto88LNVP7xMRyPh",
  "key15": "32mfFogi53CsPTDytpxfw9fb7MXDD9KwNxr5auxcULXZKesFtW3VYFncBXL7kGdfjn6bkoAZgLjcA3nmZs7jJvbb",
  "key16": "5GfBoS7TgWtA66QQQxKS28PTNnrobPUPD5AKim98wNhUJY1UgWiRgXkWNN6HzqZSwxSgoC5inRECgb5SdJS3EieA",
  "key17": "49f8rjZVXZPuwXn9wBYSP7PVxnB2UvrWmhFcWgfMUkyZGLBCQjPpiLcVVKGduEQthXM4gH6DHa6cSQ2DZu3SADeG",
  "key18": "xdbY2p4UoSU8epEHf9fWvfRqAdzveFZYhPwwQ2XcLtaJAKztUJnc3xzC16y8geL7baawEXGPVTmo7jMmpCJCf7D",
  "key19": "53zch9m5gcCQscCjbezFmGTdUxH6i3imXMt945CBd3TawzUtiz6TWoGoUsWuJegEuuBPFTjkEWZ36jUrquX1pXFZ",
  "key20": "4HYpgBBCypMm13uMtXVHP7BZqU6QQXvydN645pUmPoGaY3FuwhGiMe9a2CkkLvz64sS2Yb9BhrzRihWX7uN7X79m",
  "key21": "5pDPm5pVc4ufuNzJMdjTuQ2yW598qK1FBh4iwfoma4dkJKutkUuNJrDEF8SwMHFCs51ufKTyfeeRadxgsh99wbyA",
  "key22": "5HMfFsPv26KyZPgsags8yhbptcZCPZC3m91PyqZxKy6MKou3p8X9QSWqLtEC6irC4n2mPtXkcdwUzxLPoxoZWP8g",
  "key23": "5uSr8UhEQcThHmSsVL5zUi7szmoUNXH9ktQFVxhn2CuUKgkEZbWQpqB5J23Nu2rKyWvFxEqAeRxnstoFwDjb4fBW",
  "key24": "2jDxrkEX4qCkLEDFHPq1oknj5F4YDDw2TBEomDnunWJU2dPJXhT8tM3duguQ5RkYjqdyGGfJM2kfrmJzvxKxjYH1",
  "key25": "4FTD3kk93RgBjE85qxpK2FgokhkK99M2e3EhkjbAfwwuPPKZS7z9fmwVm8s2PRFiPUgoYMb2EKFVQCdDUYwju5ag",
  "key26": "4QyQYiDGvfnvCzBYn3657qE51G28nAuM1PSZawvcosrasCwSKVMrmPz76yUkCydzPUgkQ9NwwBGA7yuNqmt9HcXn",
  "key27": "26nv6FQKRXBnt2igH2gZsZzU6iyUB9zWtgxTZbWFWwqNu4xZp1Rkgr9wYbvCXDdzDjHp5Yq2o6gFHXeMe7hgibTy",
  "key28": "2fnS5Nbm4ft8JgL7Cagw5SAAtMngau5ST4xEmaLTbo4qPx4i6cVvePVwnadaC5Hh8Z6V9V7HLcSq915ic4fxWNtJ",
  "key29": "2dAEe8cr51jmAXSThdfZiLKSqx3KmqqPMFctRk4FmJyrwkRnTgCnMCZDsk4XQwmk6QNafpuNpPoJX15RFDp5QVUf",
  "key30": "5GuupXrNmM9LdPcxRU7G3FpLuXzEBvUbU4vb2u4kxX3oi2SVnoSodg69xbdDvJZZknqAE52R6zqiJaJxbMWGthHA",
  "key31": "41omN2gtxoKF22hPGfXTVLwXFzhnoCadzFmC8u6hugqkjBjLZgaBNFNPgxR68X4t5SE5qxUjsTBPynW32jkLB9Ha",
  "key32": "5qocAJNmeJu9hHqYdBsTHzhbUkw9zH3CyggwcseL72m78oMTAcYFkDBuoJQxKq8H8CBjFkPGe9Be6Ea4WqJ3oFX4",
  "key33": "2z5jiALFAntL58hS2udVyYQG2TLaQyjW5HageNLE6xZ7pJoKYpmCaqLVV3APFgGA2xeSYc78v57FETdsQQ7EAABZ",
  "key34": "5QbkvwkiSiSRek2e6VCV6qV9zEx9GcPaF61xWgDhZf5XE5XwSmdW31PcRPahnJFNDJffqbQfsQxzNAMmqa5rN8rN",
  "key35": "8ZU5F6e1uyf9rDBJEswBmocYAh19e4sDmNdaVyPNZMLNMSDysuGEd6wVhQ1m6Lfzr3dVN9vm1J5VK1E8H2xci6e",
  "key36": "8skxJewoU5tyqyZ467ZbXwju2RBrHwM5zAj5gZZoLXC38Ra1KexvBJZS38nTobwDi8zZx9SkfFXJbmkV5kVcfgf",
  "key37": "42wqgEKDXNL5KUiybzZx9hfKa37mJ7VKmKtwkf7jw3smuMuhbQgXDQgNCTLNMftyvTLNv9Sj3YVVrVFftga5tfSb",
  "key38": "3jdUCxtPuK9zyk3a8ShHZXPmPFZXmW4Jn8W52Kwt3LNDhQjLXf9duZmq1V6qCa3CzqQNGpR6teuHKUrf7yB1nNLL",
  "key39": "3Q19pqMekdAH8TUWC3wwfYagavWFeTt5NM5uUC4uqiCTBefyXyostUhvEeeg6WEj88m6AHyJQbEMDaQXy6Ck8ktK"
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
