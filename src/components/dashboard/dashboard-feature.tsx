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
    "3z5oGuT3L5LzMdPECsCQxgya7MEL2rd5ZAf2D5E5Xi6tbwxtWwsqiHqJZTHBimrhgdwX28aH2E71fqvbBeLaPboQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379rMuUkcL6BcntDNsdU9zTCLx6FXQPWyU4sxXW66guZJj7Auv6bJuCDaVpesgCge2M7rk7iaw9rP4EJNDMKgXQU",
  "key1": "HRSrEUqW3cgDe7vXiVGCkVLEwiSCp1njE1bbNNxzjXBdj3S9hm7TpbeJDthh6W6ebYHGBBSQfYU83cACSwHAcT2",
  "key2": "3fmqMwctYAKZsFnbLYjcF2BrYtb6Sxn23QiVrsXvXtCwAmu818ehS4KoUMRhCft5UFD2r131p4TFGjLC4XpaYp6L",
  "key3": "4szsfoCVqUUWp2ysdvzZGso6LW95nTSNgpKQFv8fp6YNwCfg7qRCZFUApTRWcZWzZFtEmpvytAD2uwjqR25QqCfV",
  "key4": "dNSmEERjR4WsEepk8SqEjYYCH4RTxcUJxtvu3reEorf4UZTXLNQ3RVspY4vNWMjnU7nybEZXn7dyB26VEzFaXyA",
  "key5": "hivKePqUoeBo3ikTNoF3KQ264ishRNRxHERaRfRc24k1EsVJY2Xw4JnZrxDqBx9BhDN6abpzUHw93fQoeS5yr33",
  "key6": "3KbgeT8v9Q6rHVNKKtGK4rkfCjQd4EHHKaPfcwwJdBVW2hoHf77JrW2BeQxskt49PZ8B581B3swQPVGbBWP1hJh7",
  "key7": "25kaZqNhyHvU5zyAW95F1rZwDoHapicZh7YQR81qwMMqavH7eZY1awKupjw1v8EcXhNdq9rwuFXCnW835SSTCYwj",
  "key8": "ecRoue3FNKbXyC4HReUSKL5wasMv8SLFZZ9iSoc43K2bVJXW2rvcxvgqE1XKwfZTk1d9tyLdE17ZCQH6aQgLfXg",
  "key9": "5nD1SmmF3o1KVgAm2uEtpSY1K1T7zqyFyrho1bnvkq4L7j41NvA7nFehG2p4XMVkAeLMqTxciap7ZDrzppvj4bNo",
  "key10": "5rfrA28eVcvzetu4CNbUyvFc8CDBGfeiXXrDUhoFR1ij1VkF9fBdgXQjPsyC5ytKNBxRiSqKndE2xYmV7MxBgoTf",
  "key11": "32nWrAyEGXYu4kE1ffez82DPV8B1uxSYbaDmjrsv7RaWSXsAvXYHAybXaKsVo8KyFR21HyVMq4skhpbhWWGE7SoD",
  "key12": "2N5C7C6BKpB4iQijKBZznSEFh2yykXNGJT7fvchh49jZys1yN6RqyCsA7FukFDexXZKLyw5cLg8ZAEzKPLF16jcJ",
  "key13": "RFC8kAs8u4usuGVV9VZM8DWZjJGRnYCy7g7NT3kjxsCsTTpyHjBFneUbpcW2GByUGWSjB8eEGZGZvVKYzY1WuP7",
  "key14": "3VYQqgQxkSx8iJvFevQiz5QYjLM8P1PDXWHbF67rx3FBiHKt6fGA4k6krJmVD9dwpYnT2Y7Jyuks8SR4anbq3bBM",
  "key15": "3JzhR1BEZ2taEEEJ6tMxEmy55hf3dXjHHq9qEK5qELseVvsRDH3hsriDR9GK36GZ3eijGtSysbtkZ78kxZDVGrsK",
  "key16": "53t8WwV6gjrU1e7HB6rmxps8WuRJY6KDqUWEXhadxqYr9P13ULsZWQHJmEx7ZetsFTpDhoaNgLpFa1rmEL14LtyK",
  "key17": "48voyhj76edbFr9w32gcCm94X4Bf1vaEd494xFzGGFgRdGy6pchEzfQR6Pg4X2vWtyuVqka5vkKr5N5vJEqoWKtJ",
  "key18": "dB6dp15bXRKXNmbBTKa3GDQTTtLyEGtSRXzR7YgCNrxowdfBdpJuMXBc4QgDiUtzE7XLKszHJi1oHm9bNS1SNf7",
  "key19": "3QqGqcScShQHvLtH4R7r6HEE2Rxm7f1Jqodmo8yWpuboCciNLrvEbk3QtWU8Jk97N9bGTN5SUfrcNJFxH6japT9J",
  "key20": "4dadr9FGze9MtJWprPNJDSobrrxZUtXtgh4UjgangsNmLuyp1j9tWMxpWzLyJkhLXgR8x7E4cQq6xaKDqdNLRCPD",
  "key21": "21xrHHid2Tc1bWy2mamrDY8g7uEwdHiMci5dRNRdCj8wfjXsE8Rp2s73GJY6fnUKTZpHt6ejSz8NJKgSRXyHBsWk",
  "key22": "4Y2TyhtBJPoSbnX88ch66p652aw5jicU4WmxVpTgrtt5ocAfND9peWZDcFQsLha8G8X53aKf8ye8UYfNrA5nX6Xh",
  "key23": "48ryEBR84GyfuAvujJx9iDVCNEDxorttyeRiRJUh1bJB9CkAigAwNCAkuTr63Gz2CMgAmJqrrxLqZkqZUHH8v8SD",
  "key24": "5PgcqtDaxxfWWLwRptBg1UMYaWBb4WhMckqjoqv38q3zCn7YvqZn5jMSkqFFkAu8xya8xdF1p58TaHSrUrtKTpX9",
  "key25": "5ReBwS5cT4xETENYsJeVka9zsLQHTH1DmSCNK3MtXgkBA4ZroKewNxnXiLFa5S9GiEZP4Jss2S9rVHhtbcFzuVYV",
  "key26": "34NKCkjoygwYvCNZBJ9h6KFypPahTTwrpu5ngG3xosckUh5da1BDUrKJ9D2UKLJKC5LYG2vmsdUmGvBHtNSdKzCV",
  "key27": "4KwG7tApYC24WqHXmdHGq41x4eEaKxcjHsmQG94hPHGaamh9ftvA9AVNtfSxfQ9Zaim6mJArwRCh9CRP6GbFTXrr",
  "key28": "UEtkuZKUy7oYw1fXfzkLPDwXH4qHva4T6UHrU6cbMWyssxqNiXALjM1JXMGUfvahHhajDayBrwhfvsZMFEqDASt",
  "key29": "4f9AsayYRbCrUvNPUCPG1kZqccw5gqnRrpKrqVj3KA6hN3J6TmCqNdGxghpACuRfqgz7TzpqkmFW4nUCoQovZRmY",
  "key30": "3f4VJrDXMLtiewQ7psc7V76CZj1LSTLBhqU3Lf4ekm5q4MXFpy1YYe26tn22upuiu5toqXHm36M53xykubQCzxs6",
  "key31": "5dk1EPCiwaYdQs3EiHXKGRyMSrCw9qdNte1cJevVfZRVeQbH9qBY9mkJqaD5H8kp5o5PLSL7SThx3ecXYiynjawF",
  "key32": "PHbx1CZcsXx63DoPz43aWbDnJhKEZEP8zVm3T7eoetFo2ens1WkKwcf2oGiAZxUDRprtuBNQgkPAh95JLnrMmp1",
  "key33": "2eChSykBhAmpEbmNYHpiUSFh9PVZHN5pMu3JvzzhGMVVEm3yCqVNXYeXhAVZvwhhts9rRBPLfu7CWua3sgXo4tyx",
  "key34": "5FWqLsL1PiAFMH9RfwMhDy7rAjTN3VqViUW7ynGng8gYvU26j7GiCSGA53tNeNTHMc6rAZpDcANdZopfUSaTwbem"
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
