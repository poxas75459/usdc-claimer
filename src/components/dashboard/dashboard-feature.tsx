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
    "2XaKo8iHX4WuErzBT2XQiaN3HFhhVXbCXtqZPDZXdsKALP8pT96xZE8TxFSxZfZBUpLcYXwJ8gxzunX7T5nnaJU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pj1UdefP9CpofcxchsC5CB9bBqfsTNvqChh64zscxQUFbNTvpJUGE8RbY9JJvd2KPArVEiSHTZNoY6fCtE65Y8A",
  "key1": "3ijrLhMCL5WUD59yTzwfJKr6jq7dFMW2gwYxDqt68m53kPKwZsPHTiiNUBSJEm6Mxak8hPuRmR6cnAKWSAfs6Dsf",
  "key2": "4F3yycgcsjvny3fwPGKtjjUSFhBbg6bsGXdw7mEGXfFRa1KbLFpw3KX9mVVKxfURiiXP8JPvueD1WvMJHjzXCE9U",
  "key3": "4tVdenrLxDUmqFkYRF7bziapHcKb9ZDiVEyN6h426JF5HyRqMC8bgpgnta7o5twkowMV5zNLXY6bQg6iVHWAN25k",
  "key4": "4zxKk2nwA9RWtbUwgndeTmoCcgg7pcVFTu5mc74ishbH46PY9LymDpMRWB6cF2WgRfMoENUVjYAGS9mTbTJyMreC",
  "key5": "4B72uv1GuyzPpoxhz915mtijs687ETS1kzhLYbogYD34DoMjQicrj2pcgD3BcoetpH7ntSbrtRPzuvfeTbBFKZs",
  "key6": "5vzaZYvTyx1FHWEskVCEt2R6MVEs9RBDpdMj3WQwCgTU1PkUfiv2MM86Jms3BKW2YKaziPz3uiXkS4mTE45TYU7F",
  "key7": "5aHvFgkUE48c1EomVCXE4vjQX1ctbwe3ghiPHKjPNmA4Gamco8smu2h9nvoGs3EA3Tbpc6H9XKRXbgzph48aeYrF",
  "key8": "jV5C1CNhLqfKWMsFwEY7QdQqw2Z8xKMb6CEA7obaXJd3bq4mkZUXdqJBUkYacLRXWKomdcZHGzGSp6vDLARXGE6",
  "key9": "4kZTKgMUFs5i4whYaExhNnetyL14eYRKn3XhVWXiE4P5oErsSxNk88mJ2id7araZdtFzXHsyqExDCx9Y4WBanDBv",
  "key10": "2LPx5oqMs9NrBvzMBGnCsbEB8A1X9pWajUsQf32pLFjjk82EuDXw1KSiAUzxUj6EyFGkx6Pc4m1R3AGo3qPiFN4r",
  "key11": "HBgifggHby7Zu54q6jJtvVUuz31CTfzjUtnzkoBPW9yzGtVY3hgJHArUJLLwMvrKajpaMTM6cjNrdniL6mZu4v6",
  "key12": "m948rTyn1PRXqxki25RFtRqwNzeGSiXwTuEjJgWobhhoEwwUhmX1N7Zb95aBTyjuapHqZtf3KxMCfSLnPuEgA2K",
  "key13": "5c4kQXUxgWV81Pjx3n3YxCEpnex3LnMpyNiCNCo9m2KCAFcfWLW4ee7vE6LSdSNHbSahJzLKcc8EfbRifysmGTc3",
  "key14": "2XKi6jKr3hdF8iE3sCSQ3NyzNuXrNEJ34xvNvE38YPBhCksjw2XPtjGmb9zy3ivnMijqe5TUoRjo1nC1wEWdFLSL",
  "key15": "4ugjaRzgHrzLGfkmWZTL5KXRY1emuGyKPdGu5VP3Heu95jScMQsaPWwkHxXjPJX3z9bbWmBwVmp4FdJGLLqc3iQd",
  "key16": "3ha31dbUwkDg8axQVjevEYC6QxA1dhwwsHZdJYJyTkhRDKpFggDVJAqkmLocVzRKsxMWqAn9maX9LeAShxMd2SUn",
  "key17": "61M6TMoLSqBZTMiY3gVscxXt3XDSd6DVhTmWUiGfoPw1hqTpEvbMnmJoKmDy1SyfGmPuPi46tc1acx41SXLktZG5",
  "key18": "CnfaRs6w56Esg8L8Yfb7JVdR59PZVuFyk63tKq943TLm3rZpixVUk3ut4YKq6NXfcE9cx1Nj148vR4pbGXEE2vN",
  "key19": "5gALmKdBYNLghQxkJZuynPUHdtitYvxaosycz23GShm4FTHvh9BrSdsgVfnGp9RfvDD7wUFsvfLUxvMn5nD1Z3mB",
  "key20": "YwbJ2qfs9jYSqi8CDgvjM1XkAHCAZbL143Utbuw8N6PN2SHqLJmYxfCKZiJbZKzecQJRmWnrAfduaBpB3UYYNkN",
  "key21": "3px67MspFmjAZwagacsYEqdHCBKozPXuzKL4WEg9vFvTLJ7ZwF8f5qqipo6Zi5oZ26bbXZnUgBzmS35Ah8yyVZus",
  "key22": "272W5RgFjZeAhGwHPV6YkyEuAdwWaZckV4oJjyqTajxtGbY2GFTecysjk8ShWpcCPfqYcR6JJ1kK2t8RkZ5qfCkJ",
  "key23": "g83RgkicNZj7EnDCNz5Ue97AXgVM62BShKBqbY5KTLc71UtvsuGaiNd7i61kprhMHafv2Rhq5bRZhNAYPjAnsvC",
  "key24": "3mckJfNA6CcEpNPAnjv4jRSLrhEmY5cxK5Zbe1PwVNLyD5EZZnRQ6dmb9hnoRSTPRWNKESjdhX2HbfFV18Fz4sYT",
  "key25": "qRW3XsAPR8GcLP8EhA1RzXoFBeqN8V9JvmqkNZbcTunjcGBxkPS5wSDGibo8DNZxpgSHLbvZWm3N8mG81hp11dY",
  "key26": "5BWB3LNLJKzz428V2xNciB6iYaYGVsQzCw6XCab2GcgsVaYSuKX4YyVaa4WXB8G7Hs6Zb79hqRPxYKL6Wqea22KJ",
  "key27": "9fgYxu61Xij1vpp8v1wzXHCjzsCgU2MMtfSJEGLmjxS5LHNXyyzdKmDkU2xGgffqthEz3wVjWehBXkyPDLtHND8",
  "key28": "NCF3HJUtTnvHy4DY21eoavR2uJLnTDakCKRAn1J1ztFwd2rhAVuPXB7fBFpFDjhm9VsHtBcUudiWw1Q7KKdhhHo",
  "key29": "5MMUK16DjAkCYrguCREgLif5MvZzTv3CgdJ6B9yZANiGnpHskUX78ENYd9eLYerTHsB4BAjreYyJm4k3hHVp4yvy",
  "key30": "5w3D3r2X3aATQsjbQGZFhaykxqxsJSJpvWsAc4geryLfFhCqfMVDexTgVW7rd1z96JYnc2hqjEtmjdUBkTc4jVWV",
  "key31": "4vDwAxzRCXFHx25iQEnPxwFNx4y5gMeb2YTzeSiYvVqvLSMHPPRyik97pXPea5Aaon7izsZuVuHV5LpWtbMZrjsQ",
  "key32": "42ep1gkvwk8FyaK3t1VaFyo41FhLUeAxMzkaw9tPWsy9NrZ3t3XZTf4MfNaPFUMHAT3Ua36TcPAnwqmweC4poZDx",
  "key33": "5k6LFcqsXatTUzyUiaF8kV6UTzKPuefk6FbPs9tB6VqScxoA2715rbg8PUjUiPLZdQvBeLKGHeUU7qoyokUiDVkf",
  "key34": "2g9RzF4cJUWT2ydDaVeb6zZ9dpKbUncDxZfFHqicyA3zzuvXuVFUPJNDNFFjmLYTFcSXkVT1L7JkjpxaSwTzCsw1",
  "key35": "4FwpkumJHhZpsR4osoaeJx6Zn1Rw6nP5sZQMTdoQchUnCmTrAdoBDchGqpKoiTdkRypndbJANgLAsC8AAB2jioW1",
  "key36": "3yWte9uWZTbMNNbLHn9SHb1uF2YWjhrAJMfkVFWsdsZAaKJbeFYb2RU3dnoARjzRfyjPqdpHW1M2Np8WAzN2VpNm",
  "key37": "5c1x5xjevLxfm9T4LDd6GP5bQSuL2Wu6t8YU8oQsdbLNBfQcwCd8PmLEUkkdJm7gR3zwmkWWr6JFWjxZqBi2SdzT",
  "key38": "2wzDscPHyooFSS4A4UmKkQBJ98xU1Rak8f7qr9o6dpspC8fvv4wsAxnwwWF7Y4iwLHkTGmCvt8dD5cSTvE6xQFNK",
  "key39": "4BxdsAKErmnA868fAo9AhDxaS9XdG1RP2j6xo3hsEQ3CN9C7Yp9hTCRevvgKt5LqbXZjsbWjR1zPFgztNyDrG1wn",
  "key40": "4teFfp6rybY5jGHWjgbNHgsKaw4peigTXCcegLBE76ngEQGREL85VZ4MX1RoycHidTBVi7QoaaEMNaM3fAGYdVvk",
  "key41": "4ZxkJTemi2ndPG1hj4h4BgvYg95Mcuhpaotttoemzdvzo66seSCZYraRZ9z5jFymQrcHaL5NYyzASJvcUkGusAXc",
  "key42": "5sffpwQYr1UmfWp4DG1M1txSgi22gw6s2HRWPiyQYhp4tRhrGeQQCh6NHje7G4w1yrva2oaBenzZLcFJ33bma7ob"
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
