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
    "4YAH1Ui5Cqbb7Wchgt66HXRRZSNGUGvk5EE4KbLNUJFNoAfqTUxma41HMxhBZU32wRqbjWLBGai5qpAQGzoZjVGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Cg4jPyeE5HvMDBTRcsttq45dUUpBSVFTHTXbXkTxTs5BwGSfHJMz2ZjxARbeVdDWARhXDoKuq8bbwLL4koRixs",
  "key1": "b5Sv7N4bCM13wbgQacpFydv7M7atFapG4v2xM7quw8cidLhxrhFYfyKEBDQHN8pjdmSiU4XEAmm2eYjH29szRSq",
  "key2": "2WYvfmecmHLP9gNssUbjk59iLQgbBxkNUTbJUk2PokiuRMUoTkEbir9z7PYrvysEhsu6ZwhY81J3nfZXuyeFPt1E",
  "key3": "67e9i8ZGACmaq7aqYY8eqN3eHacppevumEJxxCB3y9rAqyPZpYjTYuhetFkgEHCuAdd6AnAsA47LJngaGy6uzUJn",
  "key4": "5bTYCJAkW7DcboRWDQQDWbN4HMW3ZKCiWNPhHSEJbrLX79cpxLC6Feecba2oNvrmkgUwSVCFsi8RELgVPRXrms6",
  "key5": "4umA5mfJgLNhKukMdM5SEUHwfMvgYVfym9N5yRBC4zuwFQWZLSq7TffwkUUnKgJtjWwSxb57E7yPBcnXuaVmiBqf",
  "key6": "zQzJnHwoTALoPsGEkVG11bBrNouz7frcc3qKEWTJySZ9uPVFwsJYmvMNEbZKJpQe1JRChSxKQMYsQVB4ucMucKu",
  "key7": "3oAofZNF5YeTrnbjpSy3AJepbJ32NBszvns3aKQyguRnv5jQa71q9qcYhFdMzUyffPH72jeGEbN1meU1RZivCqXv",
  "key8": "YaRrtf5e4YeovUKv7wKdwqb1TGrULAHSP8ouaP45xaQbWMNdP47owbLyDJL8gPw9gHV3u2sn5MffPC3kjxgVpnx",
  "key9": "3Yje52MqzTuVGZsDNREXcXwCWwjMWDgyD3FmDA9dZUmJ2zc2hvRjvUsKYS5im83LZfwupTVjpHVRcuDzRYYtm4Af",
  "key10": "3oKWE1XYdi3EY1qcjyZgdUXSTy659FFXgLWqjT3kLSdgQAceQ5AHyYr6iMJE7TwEtis4eK7V8iPhiyDWpHZzQnTL",
  "key11": "2TaQo6m9DRjeJmwjPft6QbTABYFQDkpMbRA4f4YH3s2kdn7S5KUJEwBKWaakx3Xz7daVqaQ2C8S627qErk9Q4JWs",
  "key12": "5pZdZ6WfJuLTcC7RXkVrE7w8XdYMB15XokZG4FFCGAQADUjPj1Bd2wrxdh84WyUR4NVNnUNtyrHVfbrFabv1d8mp",
  "key13": "4eJJhtegiXtePhYsv8wQHLeq1CBnZtGLxyQa6BgbPHbGmtM3K7QKJD14WyZixMUQHz6iepmGChRcBqMXTvGcmaqz",
  "key14": "2cuHo7ewcZ2pZSBANzyAbupYNgU368AjJ6cUzr3NFKomSkRpWkj5awA7ew5tXUzpLyxH7GvneXvJQz9UsoYEWTTv",
  "key15": "wAjdp8oQJ9CVtDCHmVJuWj6DXtLERoNcqBcLZbLYNErUnbBCadUMte5MQGQ5r4tDrS98xyRnV7e5JNrcBxShX3f",
  "key16": "4W7nUAvGkjnWsXcztjVSUo9jWszGydkTmUa4KR9mdwK47ZxrSbe2eCojx6iqFgXx7B7qQ9McW2dENUu5StnQ1LSy",
  "key17": "3yZ4auDJ1PUkoaxbKb6yyZnw9Mv1tGQaj8CaiNYCdJtdM8Fcs1ADj38yTDob1ESsLPUuwLEKqRcMrdQsACqwbZvE",
  "key18": "2xgM9wRS9vjXpv8ebXWGB1keXhSzznxTf1EGsmJJXjyaq9MsKgK5rz8xkCAZ7twp8kSqLUgSW9pP4Ny1xHoKZq8D",
  "key19": "5B7tpqeooFoVEFV1WNUy5QFS35k5ysGUUMSPFMfSrfDMUV2myLPkHjzfuF2RaWVdhpNaREc3nxkMEp9gnkKoExfA",
  "key20": "5bkk21rbFHzYnXwJXe1rRcQzCPAUfgL8K28WPSa9K2FJorkSh8G28FxFRSGnWy1cFJvcH7uVa4BvkQS32WALMmtg",
  "key21": "e6BVEvRDLyFRHLY1roNB84Sf9EYaYDDranhsLbPwWgda5WWw76QK26VpGs7QLhB5PQXTQsPjCNrjH9dREjadMCL",
  "key22": "THVuhopHvDtfosHqyK2LdiipVEunXtcTxzoS2mEdQFEoR4xEfovvugTkYUCHwaQhtRws52bMnyhT1pHp3gsYWU6",
  "key23": "2TNcAtGHS2abBite61v1N95fCHHi8sH8KAZkoG2vhQFHTwtYucDx1g3jrTVkVyXWt7ZKfK1Cwu88FGgSaFzdZ3uC",
  "key24": "kzMFEc9d1nAvsZpX7fmSHSoHMEn8RiXWirxqHyq9LG6WFoY2kPBiCbdvvyPuNzXW6KbZjVQP31rdjSDhgXRBKTj",
  "key25": "2JvvCzc26PYKR9vJWNdHGoaQsVDBF9JNW1wneV5sZ168pETj9abKY3ckSUNsa24fYvzNApwcnB2tdBc4C1S1tqYp",
  "key26": "2bXK945jYF5S1QVxyjQFfytTY1zkVGz17njZd19AcA5qw9g9vKTx1umKxjFqV83VEVtn6iwyZ6gmgvcDLKyJ8hrM"
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
