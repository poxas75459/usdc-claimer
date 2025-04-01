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
    "2UG7yebgb9HgvWWY2eKyR3ibXrkSsG24fnYbSTe4XKDv591yiNt271nLU57KJnGEeGdBn1A3awDw63deA3ud4NUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2Rx2WJtGBRbpRqp3zM7YLQgkBC2PZNRRrEaQNh9ccaSaHoUv5JNCaeQxr3vaXyvKyehFtAGgQDYej5kWqwCNCX",
  "key1": "3RTT8XzkA2FKaYzpgwC3pQGwUYJTtbggeHrZQcLjUDBtaVJrRRBG6KgL4mwZdvDaU994sejwuf5mZLUnqjFbaJX8",
  "key2": "eue1QfnGFHLfEg9KxrNpDJKgK3oiWE62K2dJ38ewGigzHDV1pmisZonUKGPjtrJ7p5RvK2WoMoCYZvc8uvgjmHj",
  "key3": "3XxWZvhdW1EZyREy9eSHRrjmK2crtpUrCzwJT8r3ssiLX4tQRMw3m9zDRsFryFSm3aeWyDiRNE5yhYFdqABuZAwM",
  "key4": "2dkGcDrcm1mFAuLsJouQACe3GobW2gShA9R8728z3bCQC1ke2BMeEK6RLrGeN3yhxuc9mTrbLcCfYK9vFN7Pzcr1",
  "key5": "3eKw2DtT1BfSRxpf6wCwmobECJew9nMMD6GpLoa5RoUFNCLnjqWGdn1NGPbRdwnauxLSdu7GUM2tgLGLjpatsV88",
  "key6": "5unVQLjMwLzB9GZfTTogFdqM552cnSKvxBspaNamtiTMY2KWmvJThtMErnzcCFxieCXQq2mKDEYTcSWaYuvC1m6w",
  "key7": "qMHQLcrY2B8QF7wx5wXJYfwbxbUhgEHZRi3rGssYhiKBbY3FU4qfpJZNxg1aLv7gJAPPwPDHc1pCkycxnr4Zwj7",
  "key8": "rz6eu4XQQPhFk81tsoCvd6zeBhFRJkmyL9bKPTTkNqSDPc5Nz7D2tT8UJ6QJwWsfQm98on6MvGTuSvJgSbJbyNU",
  "key9": "35Ru1pECfW6tz9sHtjUa5Vath89wzVAzsiiLjn54sqdafNSxcXhA5hiukkEdvSgsSrFXVYSe5xNZqsxUJ1DeVMZH",
  "key10": "i7UnEEffT4Rb9EQeXkWUboaV8kzBfhKy5smfjs7S2gTy6HHV4cXBGmVda6NBhLNrGvwHLBPhMVYxXJenmYhaKjp",
  "key11": "4XcZkYhHKbTMo7471DDv2XufzY1EvczZ2Dw7Rwmz5AZmhUJcPUGXkUqumrU9RTnoPAer6S6hfsLKkdBXPmZnRGqt",
  "key12": "2e59aY4o7vdPDDbRErgj889fzAG3FKiw7JfWu9kRXwEVeUkhYcwwdV9jZ7LJR4FqwTkdoj6nseAHrbrxLBMe27jS",
  "key13": "eFEpKLowP632xC2sisjpHLzwoMAn4EsE2ApheRTNe9DE99zjsvWJdJC8BB5f5FWvQtmQES8T7xk7cgGb6ja27ty",
  "key14": "3VSLkGdNBCP8suU7kXWMjD5yVX3fh7znofSzeFd2jeE9CJYX6TF8fuJeDkgqCDjoYYAfjnMTSaceatmgrvmx12XK",
  "key15": "5vxJAizuACnyNTwUi9rCKtDyd6bBtFyTVZSqSEWQkCyEs9SyV9uh6KcVaQ9LcFza8o8gFfWKMHMGJF9CSWjYTPsJ",
  "key16": "uohc36NDs6C7CeMjvizQoGDiy4cRibTXLyerYRwhc5vumKL7UV9jjV1fkM6NyYNef5mV8AYuJV8KdPrSpvNatR7",
  "key17": "5mw5yBVSQsA9ENeb96pYifco4E96U7pdUNQZngGaBvt7y7h3FqCBKRr6nq1od46gJPJynoqT2fs674Kvbvj6vwE2",
  "key18": "2EqeC31ARpaUC1EAecKL2ZXyZV3VHHD6vtxdepQtXA6GNzCQuMXup8FvtdVczvBLwnCGcS3rtmWJe2d85oSioKPx",
  "key19": "DXQiT4DyzeWL1pjvnHyVv8XzjchDo1jLfv3F9NcAwAmujKZjLfQidtBeTGWT6z8PwikvfmHF244P4XhRg7TwzgT",
  "key20": "4cXeGMFZP9EewAxwaaS9m3kb9gF2qNNR1nvAtXUgri8Sm2grwFo8ak8wTmWzPSbQoej82fLKEfgHwRp81b2UiD7e",
  "key21": "Wy9oyD3qLm64HRkLfyBiCdXuLWD19S9VuaCdrE9zZXSMABJYUVzNNNFkKX6KEhbRnJFwnYrHpx1T6psSk3La8MK",
  "key22": "3LmDTPHTqqbsiLUitHqCnfcRRL6wKuB1JZLdH8mU2TLrrKSLfddPBFjCyBkgJDp6DHedoQ7Nv4UNBTJdEHpjq2aK",
  "key23": "5SEiaXih7bh7JvDUu8UBMJSTUD4UusobqZ8QDFS668c3mbQiKKbdGFWb91rRN8Na7YYiJZU45B94tTzNhmwk5Li7",
  "key24": "4KDCaWcJuH6unqVzan7Z3jw9KfC4cN5BgfJn3u63hRLaUzt8a1Lvkz3wa6S9RShbCbW3VnbNKe7L5kKvGQ5Luhhb",
  "key25": "dhYjmJ862X3s2W8ZyexsBEjCzL3g7e4pCobsB1r8z2hAcEe7FT7K3hjuGJ7soMY54LhVHz8hF5hbX7zptWd7YVH",
  "key26": "c6i8VFejyMqCcw8ra1b4Y4jvmrD1RhLwqEoAnTDTMQHjYRykog5Kq8wzCsSwkfTyQRQcYZXWUzf6q2fg7EzJQGU",
  "key27": "5Qy4gBZUDUQpyFqQ7CEvxiLTQUfxhkhzLmHhHF6W9Pwz4sWGM3W1wTfBUJcd7EUugGBQGXiUNwkXLiFVdjz4aqZ2",
  "key28": "4sfrrQP3k8C3qpdWHr1LpVnQM2bMDsdb1ZaJuDnSayKvkyQRyRKEes9mjHMyd6UkJJaxUna9GuHnGb8X2fA9YN7o",
  "key29": "4ofTEMysiDzNjw9mxV74xQigQd2zhkGG4w6aXf96Zv472dt7EbzKJ3hDoRUxbspjuYyU43kuscFCnND9rwdZKzLV",
  "key30": "3yhFDzp5DN2vmvY1ACMrX9VMkE2CrbdQwz1ujWbckgFnrbvahzdc3LuBSpaaTFfmi2YSKYxiBSi1e3SjawGEPTCg",
  "key31": "4FGtuNqVSButmNumhY6S579nszHg5XoGWLkWTErbZcp2kk7FKCWBZTfJ9X6k369cRTxsciSEq6Z5g3A35QreiPdo",
  "key32": "5UKkY1mXjBeiwZi8sP48H8oUPdk4EvC5ppQp5BDpoRS5VqcifJr1NXGwtr6sTaC6krzhXCmGKxoiWeUy33tHWDqQ"
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
