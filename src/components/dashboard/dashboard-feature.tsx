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
    "5AHwo9uwWd4xfEqkAiwRCsuAZENQKvBfF5pB459HvSwwTNG4wshmrPYzFq5hFjvUGZG3TxnKvyU5n9PPXeknCvPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTL3mdJDsJjp26utWwWB31q8Hpk7YcgHM8XUfKi3zMywcii9Q3HbxnVZCT5haA54tqzKP3apqMnz75FDLhwxHAr",
  "key1": "U8njUuRe6MCqGhmT3DsJZnPTZx4gCGggKkPXvtPMFtvCr76jeaZdedNZVcqx8ZAEkepuQUv4UQ75VzkuDC9A5S1",
  "key2": "249NVBiURyzFcchg8H3Bqv4UUci8bwH5qHLLRdxHdRY3JcQKSNYqPp3hwbGYk4F8LvrP3E7uqRPRsF12ZwCBBc4H",
  "key3": "3qM6vMLHu11EUSnYViNQZF9miYSSQNibjDvhVben1vXHCsEAVeVwpUKsMbuTSvsSGiZdZLbd2NdqyJqKvBoAADG1",
  "key4": "58baUzH7gsH4qygoiSn6o9pFJmXsHYGYzFjn7ojPkrXhFt65UNELesHB3efqifwdUSWczkxkfhyR4NkRPEhmDCNn",
  "key5": "cLoGd54MDqqrjdK9LmmMZW96PuXPkbAcEwaXk4xCFHSaPgBH5Sr494sLSNKDcRJBzvQaarsf5JecoBP9jskZxPi",
  "key6": "4HxspBe1hM6EQ4YQ4AWPzPHZ6QQ6b5q3bicKyrw2GKziETiMGZ2HsKYXgTGRMmNCDLDiimPDGTjV8o3JxAsSURf3",
  "key7": "2BjQnGmmy5MTPNfnXRz2mhNoGwQK6f5KRMcp76LD1iV3nydRuq1CcFVRMKzwvFJGhqn8yMuVPJK3vEKESNL3TBvR",
  "key8": "4GWbCn7uDK4cKpM1vDaFjVsgKTsy42DWDnWcSb25JAej2d3oQrRsebMhceT3wE5cMNhjsRX1xBLCsMoTD2WWkHX3",
  "key9": "25eeaNfSAXA5vajNJjpeqPYZdPpfNuY76sd1d8XacrkmjMKc1hiPBSBoQ7nCZoTJEAMpYZjWPtj4iiG9Uq2FyxHp",
  "key10": "37byotb9nT1Kzf9eYFgTMqa9vYsudjXvnqzVg6jWNmcwZQtHJf7eegafhik7vmh89c5rUBVFgZrDjP2LtwfAhFuz",
  "key11": "59rPeGTvr3fkc3LBVZ3djuhGKvPnYRqatRD6CygMeMGoTNryrJrwWeuHw1QB7D8paQFRjEPe1QS9YUu7bTBcDfBy",
  "key12": "4PQ5XP9bKkzwY9xqBQSDpmFWfHSD5edzHqptEc5sQk97Be5jgNm66vF8qVnjnxoAgU8uGKdvos1Y5AS5vFU3UDqt",
  "key13": "2B9vXdd3D97uNpq6bXtM1pbvLm3GhLSBKivkBNb9ddjLL9tApXsbx86z6qHJ5HCckjyRHfWruZaFcFkbLNpRirW",
  "key14": "5un2oinc51HrzZyLYbkig3gxZ54gXfRxahYnQhW2APGN2oQbzw8eF5RMoAzNWqCYpsnEKWz92HzZzBLG1eafB3Gs",
  "key15": "32K8RLfEgCEdgtGivH4EpfHWuzbb7BmikREpPGQtCn3zGYs1vgNAuy2E54qsmq25LWkSXGjtpDv9o8F3Khh1KztF",
  "key16": "5TDbGpnWZbBubdEXeWU3XctsswKVgYtmzfv6ntCgoJStdTHdpi8hN8yFTMCejRjCkvyigbwjRBhC16UmZ5t4UZve",
  "key17": "2ZmuFNCTBp1Hwuti67oKbaWr5SzLSAcnWU5uFg4Xag2z8mWoMdYCeTr9K7iEMXv5aWYofNBRTP19bE6uA6r885Gz",
  "key18": "5WWrvCokEb2LNVcUzjim9odEoM1VtwevQqfxzS6GqAA66inUyGFJqQ3PsqDmmRQtYyP9a8H71zLVQX7f5TsgHC4r",
  "key19": "63VseHTpXKUa4dQ71hRh8g2VAG1Lf9yT5qYBoUHwF54Pt7pD18jBQCAojEuVhs7xgibJzBeWmrZboq8dXKcbaNtz",
  "key20": "2v6V4HJxqxiZbnRRpeiD3pyCKhLhnT678hZ9PvjshY1FEcrRo3nAaJMMdQavVeJYnvPMGiTg8v8znUyy3oU9Qe9S",
  "key21": "5DA9qTfEdppXmoVook6u439Fa5iWqkSMkuvaKV8nxgtZE5Jc7WgWqqM2Nnc4wxwEqsaghxq4MyEnFY1d2aJ48ruq",
  "key22": "5Rwwb3CUTqXQkgS9tYxXvAhUW21bLF1wNrUXEH5RybtYhu7tu8mumSU3GrGs8c2gAHPmKQfjg81ZrkM9mAG1ewJu",
  "key23": "45BKTsQjs4cVZ6diucq7fVV2XpE795aLU6zSKAXd4ZgxSCGsQEQQmGoyG4kwGZrvKSzKJFtNgF1N15aYguBnUeeZ",
  "key24": "5FGzeQqHLe4nuYThcHfrfYJsMyFQAo8RNnWVDvPUCJ57gxakwr669DoUq21MozYTDjoP11MJQRS9yZvgm1doz5nX",
  "key25": "2Fzp5JB4o6ZnAfbnaTgo46JiG1NSkqEmzTsCVHaYvkfX3fF3ePTgQbKKFAYdL3PYRUiZ211vTGJhjFmu1yS5Gsaq",
  "key26": "BTtJ5i84w4gqN3zfGeyiMHqjn9oZ8xNiiVdPtEHaA3FivhNRp9huXDTcekvLVCuXomk6JwzXHJMJo8wY8WQYGWt",
  "key27": "2b2o3tmmDZ3LGr2PXQCJ7gBYv9C4kHZtxwtjFaVtuadQPVQcDex3YxF3286kg7nMZBrjQPKYrmntqjXsGx4LNzNk",
  "key28": "4quYYfhixaUx7uQUdni7k31xSQugBapGVisjPLtpfCXguWyyuZABfPJTjW2MvZXaJWjnSgEFN3KAQG28K3jg7J9A",
  "key29": "61BAFiaDyVwwhoK3Kh4JsguVKjehAtWKA4g8UmRv7vupaD4LEtyHhjujLW74VYh387NLMikXW1FxPrKiNP8D5Vb8",
  "key30": "ag974kbdbLdaAx5JctcVxMjn41A81tnY2uZSqxZ2L4pSFS3qPmWk1hqadfxTWE45cHGWUyGgdFPHCcxj47KhuzV",
  "key31": "5kLNo4qf9fmNG6kCK1PgrL6YnBt1Y9WMdNkuEEHJZwgtrcs1i4vKD7hi9HCgycGP6EeYy18uV6p5Zeuw12duWqgA",
  "key32": "2Egk5pQMZZVoiEMM3hW72hr9ErTMEYgTbkpnGtEq3NXRbALLXrG5ZSvKfYZq2MrHKAy1kbUoPg6DkbwS9hobPZHZ",
  "key33": "58kmB2rYZxYfPguB3JxwBCKPhDivcPwN6oyBYqx8DdTHRjoQLJ5n9gqxPwFHY6gh2tKCfZPKvtAwMqaYjDnNc2k4",
  "key34": "4Pb63cw24hhAnuQ5kU743ZL42a7kwH4Bnaxv46F1txVKmb5gvfNdk1nFbenHfQ3JGvXWsSGr5mXhCjzJqyAkdmBo",
  "key35": "cSXCdjoFxy5gWRmTQEx7hwvTLnE7KcNY5N4RN9Bh7fkcVfEQopuDLdGECYxxyerL3pXj8TZnDgpm6S5z7WdYxAh",
  "key36": "ERRgrVmBf8pnreqQ3fg3iyahpyDMaVYYcXPMGVLZSLYaoP91b7vZ2pnReXrM5fZWSzNpQ6V87M9gUuwM1bgHP48",
  "key37": "4BVSa93zzJgPdYaAGpPH6gXLSC6VQPKobcQPWKtduTVTEm3MmQLwW6574qkSVpYrfRxQaPJQuHJwmKkgFbe8cajP",
  "key38": "nGHVue9atYpdZMSsNpASr27y2e3cVesN9KTQqTTkpSur8F2YvKUfrAWhAPQ1JMJ6qjzxQyaLax4vJqwgu5ebeWX",
  "key39": "3DBQ7RXeEre4cTDaSe1HsX7HpzQgGeVauQaeCi7s4Dh1chtN2pvcLZEv2863BSr6uXvHehLzMsHAsayELyY1c7xa",
  "key40": "1zpWbyCihVSB9PHbT55D1xtiC5xrL9txx7nr12rMHVAUfief4VTm2Djy1T1BJ3LMHM42CwX7X2oGBEMsTJCra16",
  "key41": "5J64ghJhrreHxuCA33rUrKipDm3mby65EPceah1z78CbbeWhSDaHFtXKRaJPKUi3PxSQKL4PP8gWGYWDekP7n2Mp",
  "key42": "2MgughHmRgP5WEpgsmB8KJ7n6TAoMysTxhdfkin24tc5yWg5pxQKznnpCKKWWsbSixF74DFTrcjtL3Nut8YhpMfN",
  "key43": "3cWr82qcwhGjfgKu33dNFdmHGbQ79Saqjec5aUtXhaYddL6s8mBWywtkdt8aPAfLR6gbBhQNqFbFjUinYEmP6Yha",
  "key44": "5hkLdj3Jqn7TouPXyRdvg26YryW7hCgJNWKSB9vbD5tkGRK4EyFRhqksHL2QgdMr5h9b9bETa5Yo79zU8hy5qbAh",
  "key45": "3yQBZG7YnrMFTG1HuT7FYXFyGY7i1dcXDSq4BPepfBjEWcjgArxyk6RmvrdidXxBivYMwMwo37Aqf2gE2ew7n3pb",
  "key46": "XM5rou6mmwMkdeHXAZMZxRRpxyaqtjP8HjKkLC22xNcAgokvS39cqz617RqYAKMSzWs2Wc83zQtbS4VfmbNxpa3",
  "key47": "5hVPRSNnfzAz1BGds6NxkpJp3XteiNGTD3q1xWAhw6F3KD8Lm7je6GbMiVpUaoybGNmQvo9MeMSjcaeThbE3wi9A"
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
