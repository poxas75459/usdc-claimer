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
    "7nHvDSZUcU48wNbg6FTHwedaAnYe1T14Whu4hd8hw7yEKnEQ5dka5T3EpEoijzWkrP1PcFFMddaHS7v94UvECG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ehq42q23zv6DRydcD1wZ9desSKWpfhfCyd1x6WNTaUuhsDaBmVjjbBkY6fYSxJDnZhvjEmbanegF89wVAdTpye1",
  "key1": "5GaL1NbgD73MY1KjMKHpDmyHNhg7Jm9mydpVezgYk5pMCtgFMckzd7U42Vtno9JzyXjkXspEmwXnjhHn4gJM2nR7",
  "key2": "23QHQT15ceeraqTrZyZeid4PRmnvygg7f85VdkeiTnbwo7ELuREAASgEKTY8t82efYi4ASX5jo6TFYcnMknYDcZy",
  "key3": "CgaEr9nCE19ReeKCgBeJnMSSLV9VN2ekLrfMNFFfq5h9DLd5esTe4LcqzsCeDERdKqBUPoztMptu51QvFuWxyri",
  "key4": "2FkLmZH6D4CaJ2G6a8ZBL8nP3w7TJnXFkjMV7YNxFaesaY9WBtmgpJwM1Uj3bFPmWBozKRSN94Ee9DiHR2jTYn2t",
  "key5": "3b5jLjEmVXas8sb5pd331mvAyhRyaMn4Wk195nxEh8EDiAmmYMJ5dYHfzhsceUdS9DckEGjjL1eBnfYmHtrRzS8S",
  "key6": "5pjwgCnrpqvsZ2XcHS4AFo7XkuTXQdLPsYjqnz75uBBe1xVoS4YRFyRpygviosj36n2ektMXyUyi6vr7Va1KwURC",
  "key7": "2nFALbPEqHC6TMwUi1dokcd9WDAo6Mv53dYkU4nf4nRwHxzjeNoRqQ4BiUJUriseJvEatxWuhBmrkyJDsRkhtf22",
  "key8": "5ZDnbMnjN788VUHmW2qijWf4wCD48dexSFX5zRZqYLr2BF8YjiFsLt2WXe7JkMzDerTmU9FmiAh2ZtRKJEtvBx38",
  "key9": "63b7cTVMMMiJgYVWZfDmieVKWybCtKetJYrQsnZUQGo1LNfJdJTT9Le8WmVp8vgio73bjyN4pwU3JxRCTFPmSBbC",
  "key10": "3eaE5K2fh4f7wXbnqqez59PjoscrGsU5tHdcpgKAVtrYNVEnStrfG9ZedMnYXQd39cRaMXBjzUDwWadRp1uxUzeo",
  "key11": "3orfZ4QcF8YwHoSop36yUR8XjAxx1RSeMUCgZTGPrnBDXRzy7mu6PUy8WMJsp4fREKwTou9tuGi6ZjqyfEf1tgwq",
  "key12": "5cdX3UHQ5VfigUMZTsnqKzcKE9VqhL3zj2CrxHUVnFKZxpqFfK5LLZUmzY8YHrhT5Xp3BLHMaMnCbKkQWZuH2wQu",
  "key13": "RR8t6TnA4vgWquZXikD1zfEb27LVrTwJsmz9VVPvpNGWKRiRPmQHU71r3eiybhMCHcVGpFUGKXvnNzTcuKrxfWU",
  "key14": "4hYa6fH7P32cdM8ykVSEFbdFKWwbTBju2q2w5RC9NqizRkVE2Q3BJ8imbVvCSrrGpejtQkf7Luhe3EuZaY6E8zrc",
  "key15": "455HyDpvQBLpDWjhi4WzNcXBLQZH2FskrpbeX21im6pzTHWgi7tjbRdWPP8N3w1i67rahCW33ciT2YGALMTtUYzN",
  "key16": "32uGoz8MX8hZdH6VhQZxoPovAoTzkhSbAkksTML8KbPuqVvNuMtcYD88zYdKNKyDSkqRUBz8YdFnLiq41yBkDYxM",
  "key17": "gjYrCao3cs9PpdbQth9pmNZFR2BWkyEg1yCRi1qkEk2HxUj2SgWqVF3MQpTjKpfrxfpvoxWxQvEHe6r6b6QsXnq",
  "key18": "2SfWbwaBq2pzLhHVNfM3cMgLkrkQ6aGbHJDKd87QM46Y58FuYwj3Y5kMGffzD9mqG895ytjcVm7nMsjpSifELKa",
  "key19": "31fvBxR4H2zgVHojqxKW4YBjC36pwK9VnKc2GSotPB1kaNJfhfJuW1d8QhhBnLzKawdTCMvvi7UymKMvd7TCdHdF",
  "key20": "hsdiHyLpZjidSsKs3jsDXpVzF3y4wtXYvabC43yQzNYsnMirpzMaakLg5vcxZLKuvusmWALa79kY6NCVkBjXzjV",
  "key21": "mvTeXeiLLgTK4DoosE1dGKDkrCPFpohGwhm6NyCs4jFLAYbRdLnpvEi7ZA44gQ14Ps5fdbgCdhY4awaDuGBu3US",
  "key22": "4eTQJxDc3VVyfEEwYMhJTv8AMeheiZDq74bdqstVSDWemStesdMBrQk4AotNvK1Mb5ZxETD3ZWrXRTgKXXGop125",
  "key23": "2ETvgWbtBVhZjqGWPzGJdD35ZkkZZ4KnS2zu2kJxWNcK5NcFz4oqb1eaVGEUCnd3RJz1N1GTPnHvEr121b3UGdNA",
  "key24": "2BWhKfDPV2kU42175av2Z75oK55CaKjkXMz3KYq5VUBJYKutb1JWm5wMAGBi4F3CrsDdhNfbDXBvadmquPAzmWPZ",
  "key25": "6krkr9CXMtKYK6GootsJ8LgC9Dv4SqTHKV6D63vkgAmAcrBG6kHxRUtQB3jmy2CM5hZEwoAeKBQgAbAjg2gkf6Q",
  "key26": "613scbyAyGUEZhX1T26N7QGzjgbuQMznhRpLhHUXcAVw9xG5U5AF5mZeCkFu1WT3aXTeLL5yr453gKriKYZtF6aQ",
  "key27": "3EDuRKRzpjiokqguDnCnTd4jNrmTjcUVD3kp5jj4wnJC9Wzoy2E7KWmNyJNscVy7WQZE4knKPo71pTMD4U2KVMUj",
  "key28": "mpZ2gFkAcxYkySa2e8NWN7VWwbqCN6W5V69mFTcHqCPRxSdWRZ4iPUCho2jqogfAr7jDvQR3qRiso8qwvmhsmxt",
  "key29": "WDS64dSdseT3SszAmBu33PsqVNT3s1k4CuoZ41qWEYRChC1SqWTWjNvMwrMmYUE6MaNUb9qVG5aDrmTU8UmCTQL",
  "key30": "4HNSwuW6LM994ecWno7GxYujcFo5rM8uMmqaf9NWJM2DbQbARGvWntrkigB4LfzQnnNpf8SVMUxAEGZD1gHAfZK2",
  "key31": "5J7CzEEX8uNkNyQ8YMvjNjAjeB4PDyUbYwNuinLyJ2ntA3RjyYjNWMeuhTjcXSKEav7XnHSb4GnvxWQNUFhjxwY7",
  "key32": "4VJfe5HgKa6wRy6Z7asvnppAGwuZFnfAQTziSq9gNAWdnDg9gfBCHLugWMHLiMtwvFUmweQ1dUiyY9FM7BSYuExw",
  "key33": "48DGnNE1JPNNYbTjL1dTfTYSSr7GEu6zJNb56zgSbMfi16FBDk7oi15chstp4hQfLCU6yV1iptucQ9Qerr1zXpUy",
  "key34": "3UJuNEig6bszWDTLUB8J7nE8miDGhjqiKGWNbmcNtvHry2beV4p2KLkSxsxfpnk4kKAxDuDCmKdiV5ngm3mdm2H",
  "key35": "2feNeCmRHdxT4Wora4jAQdh1QGvSzjrceo4RLHCpCyajwFNnfTMQyjjMpA25oQExtE6pKmRDoLueVqAFFTAUbHFn",
  "key36": "4PgbsCD7cgByLaFY4Bsjh7xZaWbcDatbjWNZdrUwYuYu9GXMqgFyeEyReapbQUYabVMpFaCw6sweokEJshy7rDKV",
  "key37": "3dfkAhKcmrjgrvzuAQmNDYAQZ7MUshk5nD52zKvu2vCFMNRK41V3XbwtQRKC958u98mqpxQAmddPsrMheNqrS2HH",
  "key38": "3A2Sqq6FtbUfPHDRHaymHuncSrrT5z21qdyoStDFMM4VR1mpjS5bnB4GPaRGS5EDGRjcL2PJJoS6BYhWAKhzvfoJ",
  "key39": "FcCdqK8fR5o9cTjAbxjQmLvAJfYuTNeJaiwxqTY9z3ZE7ndyk5R1imeaUCJy5ppEPYE3wyHZmhbyUHpQsoHhqvx"
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
