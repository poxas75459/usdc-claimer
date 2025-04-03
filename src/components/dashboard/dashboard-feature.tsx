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
    "2EpgN8ksexDAPX3yJSVV169QNqb5tbSGyJ5m8V2easC9QqQWimbkhgfsqDFfvwnYyaCCEJFzZrT62dh67Eq3rJhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfcsesaYM78RYBz6SjwADQTfBGJurgrQQSacCe9pnLixAEQCjWBKXD1XycFDf4DjQpGsf1FEDcbkhVSBWRk2ed5",
  "key1": "f98yhn82dZDUJBrwsStzitmh8GEa6Jx8gdDPTo7NRMYCD97Dnqbe4dEoswVLqHKUNSCBjY86vqgbBufBBghY3ix",
  "key2": "ReTEbLyBRWPqTDRqLe4C2iNYQZ4zjhqDrKQQccFpNnWYy8dGapWA9CbpSoGb7hTJ4GyMCigJfMwCAPKFggBrRMZ",
  "key3": "2UT87wJtuhJomQspCVq7MHjJ9evNxsAumY4cbgp9QX729CNxYHzoDWa7iZtCSJDL1aq7faThz11wMoftSh7zvvdM",
  "key4": "FBgmuCp82VSgBTBF5SiZZkjroYzNBtHCkksoHv582Usy3nX51RKF3Ua6uEPsmCtnCtKTfeAwzMzeGQvgPhvzt2a",
  "key5": "4r1A3o3TFqDB1Nx8Fc5LcEUECneojAYE8M11R73jfirWdVZfXCiHNf671MpJnbx29PAH6pSmp9EwS96gFu2suy6P",
  "key6": "4be92xy1pAZZD3p9q49YFESxRBdivHySKrVhjKYF4iRbsaDW1jgGPYoQJQFY5BFAbGQmAS8Xed1mMwdWgzpLdYA7",
  "key7": "5QEEbRcgybukeRV26Jjpto5ACLsV31Qr1vChWAKZ75r4LY8PZmCvc8HHZgFVTqxufPc2Xd9znPtdRHpnm3nNRN2X",
  "key8": "64m99Z2KZQSLvMk6pw38D6LMbrEHDahCydiMes7gJYbwwLEhBjNem5CMka5wW37KPHhju6UTRotMKnVWKCvvuJ6C",
  "key9": "5zGrFuX2ncJndvvNCu9snYC4SxUpztw3fkXH6tkvVoZtv7LH65J7ojcKDCanXDhrowpVkW3RNtP242ffR3UCSMgK",
  "key10": "4Q8gHWK5QoP7vJhxLuLstcJAQLuL9XVHRhWaQ2Ha56bvR9w2HqiZhrSFHjYexkungaT5WjUjU1d1kCd2aXzNLEk3",
  "key11": "P2ADVL1AJC4VJZvgA57q3MbQFXKQSjwCJcYCFdzAfbcpF2ZJKmrXbnV1L7sNZxhWYN9npFVPsVwPd4MK5Jojbsj",
  "key12": "W85GyeHB9UoV74aEYcA8xhmteWGMztwvjcRuHNb3QKoMKtudSm7CGT775UEpk8Ljt1n9owvVAQWneBTeMHm79C9",
  "key13": "GY1pjt9JMkZzzJ6WxK3qaBtrFocAkXBXJzgBy7SXEy92fZzjombaaLfSVmYPbZUuscSmzdESgWkKeTeUKmAc9Rq",
  "key14": "2i5ceZtq7Am7tKe6Zx1cziDRti2XFH38ouFNxb83SFZEg2x1znFQ8LDT7qzWcR1u6S1b8V9Y6kZCB7QZcpTx8Gek",
  "key15": "S2Yq1BBuAU992qvUDHkcqPNJTDSDqjPbvBJXK1aos1VQwPsn92ZBXEtMUzc9wGUtMfmeVaQMPCHyt2rcp3L2dGV",
  "key16": "hXR4kbnLwb4oJG8c65T5iRfWWfwvqfXjDqLUkb3q5U3xuYdrYEoQeHuyb2ETEPKhNRMC6zc8VgQG7VQ3tnLZA1g",
  "key17": "44yHG5YVdVnyELkNt2dDkVaVKUM8FuWRa24QUfCjfkhfsvo8fbveBuPtH1oifTRtSMutM2sR89TLY4LbM3PxSEyq",
  "key18": "3dFhT8DdKQXT9mdchpBm6YtbUAB4Atwgq1idde495c45aDswEiKHPzb2ynG68vwC5THqWu3FQ3YkMA8SQ2r7tWfD",
  "key19": "5SZ6NRHMWn6QF7mFc9zLJg4hFh6oC8zEZu7Q8nf9FA17FoSTL16WkNNzppKU5TYnV1UD4wkqPs9uhjEWWTwazBtj",
  "key20": "2wLC1PjgQ6z9zAaxWdUadz6JvXayyfX6wjJnfoXfCK7zNjojJhty8H1mkagepzcA98rxbbaSeXAQL4ywMTZd89AJ",
  "key21": "3XvWJ7N29XswFnRbiv3SMGXnndS4GoHVMJeWcEsanpK7mSsPbD5hKFe5EybabPdVmjsPKAemX8voRPHgBr8UuVdK",
  "key22": "5ZQovRpQ3c2s6GEoSgcHkpevuuUS14UCqVQKr1JaWP1iDepkShiwcxtPBi9UNkvNhUPvBWSZ2G4RPF6z8YWuMN5J",
  "key23": "5BZTEzn2zK6bjCt6mYWaNXbMNrh7TDBa7zWj1jRNr5yhHMYuZfx7BMWqrcdd4L6BNHskPhHbhWYKwHsHwetNmwkN",
  "key24": "53HiPGYJoWd9neCHVzqBy2tGYBujGy3UjWi9ctvg3Wy9G5x8DP9mGPVexWyyUwg73pXxRjha7tLoWe44CYPXY79p",
  "key25": "3eq8AZfLAbBcNDhNRysL6oRzDQCaz3ec99ocJ6eu8C8pqB4THhBJTFKNtqtcBG3ybJgcuCwRr3seqjAsP4DjqiYc",
  "key26": "37TNdv6kaXM2wsrRsUDczXRbkn6WUfjyiCptEWkJ9UEsnWri6ob7YjJSWk2hq31XaVibDBDAQZmZ5hn7P3HsmwZ4",
  "key27": "2twR2tZVBJG2xgvBmjqhtWg6gjCxHJ2FcDFGccSQfAsBoxPgPHhKEuUmA3cL7S1gw1jZ62oh2T71s144WUQvioAe",
  "key28": "3dq18UmXgam4eEVpKNRN78gfpddbRrgxSS8ku1QumiAj4giQ2NBWy5U9wcNfwQFKbEnEAZh736C52vkz1Goa2vmz"
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
