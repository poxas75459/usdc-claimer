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
    "3eizVBZE8sLKEWc5mamcA7Rwt1EeknEL7CB3L9NQvrsHNuRH7rtjcpyzJWNN2jQWxQeYuXHpjuzJmnGJgcimy4VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbPr1baCzAdF8KUJ4kZvsApnmnCUP9TviD19W2o2ktYFoqsbP5KPCGKUHvKm3oY9SKpvMMNiXDMjts36sy1Z5ui",
  "key1": "3CD6E4MNRYJGrm9iPkJ1caN7P7Z71LtdaTuyYcBxHpLhR5jGb8qAuuyd47tHH79KJyv5Xba95Jk59WXijy1nEHuk",
  "key2": "3XXu8gfs5xxchJDUfzMQPeEqXPaCsJiEitaUqJqjBihaNiMfKvPEpGtvSxfX7V5agsaSedXvHuo6hKy8zJKQ7N31",
  "key3": "3hZtoNxhyDmB49k1ibr7MgWWi3fSN7WRkPt7TuS596cv4EGEY5rD1EFdkQFxhZLhwfZH94dWWUe16BL97aL7zt1V",
  "key4": "GdK8fWfVa8i8qyZCE7UF1gxuNfxWofncF92f2i9rcnUxre5sFodDVqZLChiERcuceTfxEh6YsL62EyXyey256pu",
  "key5": "VoAfbJuJ7g9GAzMjnYqgVf24MWULCJX2EtrYZREy3XGkeCZdFQEEgDbumW7S7ur37vu12owQKbikXjmPX3tUwKs",
  "key6": "EKupN2XSHk6papmb9GYYd1nMG3NxCv5XU3so6Fmxug5t2FinNA1W81LW5YwSXXuqosWnimpfp8EUPGQkJg3JQTH",
  "key7": "4jmXKREduZTxBPebVByxLsvHyuFu1f27zgbVkCSpUFAtrmww2mx1wohETwfPX65ipxGz8S2mSWo7qhFo7zoYrEm3",
  "key8": "sf3ssah4BuiDbxYJ4rHfqihamjFzsVdiFPZofN8Xzb2CrPgntpfpEirHnWv9Xg2UfTvcoue3cEVwUiNT7ap9RB1",
  "key9": "m24y6cDwyN4nnQxQ66RS9Tc7naNtXomiTa9aqcx4LSK1VkzZgakqEw82FBy26aAneNFtcckfLowEN2gmD96S8in",
  "key10": "5DXmBqoEUvrQEzu1hq6qRhfpvCsbRmz7tzEdNsmbVniYjwKSp1spMs3UoUPG3yFH9AMofmeyW8GmyxJypqQ4bCp9",
  "key11": "3qAv8UmZJJaVWgCit93LiPQnUU69GxHaRF2rWoXwbmMMY9SVWpFMbefnrN2n1dyrnPxHQ3y8Hpx2zgL2167fFe1X",
  "key12": "32tFTW8syMT8a2ceZTzZ2oHxPvBCZXMWzTEGHVkYPVZshLSdugx46GkmRJXCzfY4krkHoCj8Lt7ANK5qBraEEDUU",
  "key13": "4U9Vr3NjvcYQoLgA2aPVowxyhUkYzkH5yjuWYvot8tu9cRGsoCc6EeatLBTFFAE2rkkt8BjLkZd3c3WaLUBWTaN9",
  "key14": "5sUNPoaqMEZhQhH4RvnmJmZozo91hUMyTyaTYkkLbYUHWucCHN6tprEG5PUFrNYqeksHt9eP29sdk1U91qGPctYP",
  "key15": "49TPSZ1RJtYcqKxoErywWBtBqfWoRpazzQJX3a8UaK3WVWZt2m96M86iKQEt7TdUVDowhH2Q5PPSypbDSEwfaxNN",
  "key16": "Yu2GEq8tU2DEbAJU8bhAN77mWotg63vcDMHXGNw3LF33foaZqjGKijF6JZgdLkuUHa1Mm1A47ZWGo5EX1ZVtE55",
  "key17": "4d2PAiNHtmoje3h6Pwx5LxJWyQ89GN6SEoZbDn9omCMdCtjrnGxFHUHoyrRrwoU6CScU8YwncVDojkXSWJJVt3hG",
  "key18": "4XLkbqri4iN5LzSboa4oLC43EfWLEDcHEHfw8Hsdm7ZyS1wMXBERHHUJDLykcW9msmFWsGu7YRJb8CzGkc78tkkc",
  "key19": "2cyF2GyvMsvt5Jt1jDUUrj2DFFNioPMCQ5BRFdXVeZgx9tU6KgMNxi2pdimLCV4zhyuY3GLzeQsrmFTEabxVDueC",
  "key20": "2urm5ULHNQjLRq9cenydit5v2mxyzUaUUKrU6B6dUXkBu32Y1h6B5YDSnaY4mwsFLsBPGgAjycD1tA1n4PDEQgFm",
  "key21": "3jUXhJcnVPBvA2k3yWod36SYo88urk6Ts8gWSmUfoPFC5gEFr9kBmxQurY3AiHFNmSm4YiSGuQN2w2Qs7GYKMV46",
  "key22": "j3sWsZpLvXTpn3Mf5dGeMqig3L6Y2E6bhM7JaT6Y77raaPE3kKZf1H7vuB97sR9Z9zvX7bfU5cDUjTFVCXcTMRD",
  "key23": "5zNhnWjKFLTzwM5HAw81WqzBoNUZksEkCH5e3KR1AwquP1BZsQPgmP6gbgzEDXiNw72V79hMQhibT7VZHSva1XQM",
  "key24": "2bh1FSk7PSZxzNb296oRNwKFR1WjcPqwYMcnjSakcU8Q2XkcoWzbMoRnCBQ65Ub6uEmNPJSo8KrCSXN3ujQqEur1",
  "key25": "3uWDjGcCE7ySvHqAhZNDobuxFKgUXzS8KeATeDynC1fJSmWvDNxTTjgmxXT6meQT8YHBKafv6iT99yuQHpBVCdBx",
  "key26": "3RXx5w7EG7brze1z3aXZQa9wq4M2gc5D6sJBAC6F482E2zTCV6D4ymiYsju4YKdU4jqfRTkL4BnMKH3sZKoh1YBL",
  "key27": "5vdAXkLR43TSSLwLKaefhLSb79ht9D2yevtTmHTo2yvdUQ6BYXdfYjdZAQKoqJn4RL8CNPkYBfQNAyQ7pwFV7p11",
  "key28": "4XC94Txt6dqa8TnQLKXh2PcgRQgHLBaT4CDmzJcdvrPE12uwBCwGb1E6WNcAqx942dJFPtYm229DKAEb6JLhrR2A",
  "key29": "LMMzfKzhKF4Lwp5Jy8MTKoLFec27Xskbu56ckeDFBWc6dFDBhg66o35EjHpkVdR9ho51NiwmFmLHQqfSRd9kVot",
  "key30": "2sfr7aXEHSJEggCbn8XiL87YnwwrpTsceKgmQ9KWnvox6h4WctxJd2iEFMtiBBCgFqY4Pe55E9xuVLGct4sa1zxZ",
  "key31": "4iEBpq3SFFDkQm2fmjiuyTMiZ1i4ZoJB9ZBdCam7SWwAhX284opZQWjtkmcrizjnHn5AFMgGHgtPDLh8YKJhnoh9",
  "key32": "3rat6tqDV4RhMWEbKizfUNtHShp7YhcZGuQ8921rz33Abv49q1eAqeqsPhg1NMXzFdWuEa5BueHp3NEdNVcWxSgB",
  "key33": "SXAJnyjcSvpE56hLLTLxLcntGw8vcBdvTZooHj4wqjdyxwd1MwT59HXaor6ovZAgupZkkREJnNjDRJQtCpvh5yb"
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
