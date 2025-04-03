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
    "67Rf9PLRK1dP7BVUpExXepehj13jhxTedxkkepiAof3gzspqc6PsxhAWQxJgmokzpYHQ7r2MEQ7cb2reBnXbpJ2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhRbdipYTiMb8MKWtTSJJbREXP8fxa7GhqpUsdYsma7we9zf1TCvzq91H4Liz9pGcKyHBWhxmtACvmnM58CrLN1",
  "key1": "5HWB2PJCayUHig8BZe11hQhBoQ6iApU3BWpD16R1ovY6umG99GNnSEqCh3b94wVC3h7fSjZ2EaM61fxrqkfWCC8q",
  "key2": "5Az3LUjnoJ26ZTmid4WxDuifDz3aPf7XLqYfp1Nq5BuJbuH3cVvj5N2hB1aE5b7XUtPbLiC1rJj8hh1D5zdoSaGR",
  "key3": "roc2EqqQQujoMTGJvE2NNnHfpYYifAnytpA88bzJkEUpgoCcf16LaQ8BektZFFuLgb2PBxia4XSNknM2avxHne9",
  "key4": "2LXrt6L4kavMhFjDPTiWpENddgG6nwHHo1ERmSt5ygaLBwmMGu6Beme4hQK2ZWqqtv2RR4LpSSxLXRrzGSKGHF86",
  "key5": "57SKz2i2kuuJ66BnkY3cCF9stzJPYfvcoL7qkLoZ8WwTMj1z4k7XgxBrZ8D2pTUANxptqbHUNVh2Tt7tgtmuxHXt",
  "key6": "5fLRQtA8D7PwxWQAv7AwSyyQgpquwAt3JXg2LC2bup1oDpA4Ea3N2ZM976KijHaJ7FrkVstbS63ZZaBtQuCfSeKt",
  "key7": "3cKaLi7YD1W5xLHuRNoyqj3ryHQJQLMb5AAQBBsht7PEL4bBJNagZ4dpkZrQWdS2C15qHtVbpaHudE21nFrpa8ho",
  "key8": "2ZQ2NcJCSkCCjM4U61AHWMm4ehA7dLLxXiwtf4ahZgbiyXZa3YeftN8tzc69nQUTcny1J6FAYFvFVWLeBiFenpyb",
  "key9": "5q2RP5wXkDbcX3JiSKN9gxrZ3jn7HBG1NXCaJKcjht7Fbc1z8Zp19HakkcSB9Q2DMuLvgw9xj9Gft6LVodBocht9",
  "key10": "67poisoDx9cDkeFT94VqpGQUCKQzcZzVqLDxTmNmAUj3ttLEzXMqz6j7mCoShtwq5E1noakTYsRMABkNsu7cspsb",
  "key11": "5E6g4ma24qBdnkaEwUtfmecAvBncfENpcR5SmFUFBHY4HkyK2s8eYZx62Bq86yrfZBnHrntGKxk5FwQcgvHzkWHz",
  "key12": "5cUYHEEK8tbtWoDn1z7m84f6zQL11TuD5XWkMK48rUMHszpJLmsWZJJ7ybDbrPkoB11HJzJMYZQdAXg4fi6rcRGL",
  "key13": "5WurAymvdeQXUWdGNw8AUT4EhLSp9xTGE3XQoVXJUGkndJXsHDwJThRR1KJpUHoU1adnCY68NQcEEmm2RiMUC93g",
  "key14": "5VwQt42ZGWYnaVVssHiuSYwu4tE5EKK2G3na6iCq7Y2WcnTv8JAACRozyZakQrcHD7L3BLXdfHxGBKfm6MWQqXUT",
  "key15": "cqMQ4CtWW9Y7he9q2YvGNiq3ge17GysdnqMhjqu3222uQf4udaByXWKsuWUsGjEd3cgUVx5pwfVMwdapgP797zz",
  "key16": "AdsHyHJACx9ZuakToh1SjyCyJXaGqU7miApYQwDybTC8GrW68HqNYrZjtF15nVh4phSaeuZjNC5LyrDbQKV22i1",
  "key17": "5GVakSJf5CpsAKCiN1QDaDGuntGhXLijroAH24hTGm44jiUGi7bo1kvx4MXNYYhJ2rVaEgHGRNaDP9VWhhVDQSYY",
  "key18": "3tgtaeGXvfPdGafKiwgdsYftJpoXhBYeA5Qpubc6RK9UQyvWTPP2enD5hy9xnbsopgxQq5zbCfrsoLniJuNmN3Au",
  "key19": "2xhekuPnx55vrD7nENP1g9qUeTkYoet4tZBuUFdAChexJ7vvGh9LUSxYSZfv2TNXmn4qPxMKxQuifJKE7ALRMi5b",
  "key20": "2TfwE4NQbxgpi8vFUUXkWMc3mf2SmQtsRG99d37Bx8NE6chrzNqbd5cwoVH6vZogvpRUfGJ85nF16mHTjKiNtDG",
  "key21": "GV6EsXHehckCJQYNAg6CdJAJtrhTpvDVb64RWzoSBgwVq2h9V4k6cyufw8Lv12E358uwqQad7vJceU1LtBGgfqK",
  "key22": "4Mz4hLYCmtHxW9CDySBY1tJN2xGLLJYsnyqrmDfWRmpU5xp3GYZfntEgMC83GkZ9FVk37LPxpC4SXBUqr3BcXL4p",
  "key23": "ysFfQfGtjApA9i45zqC9vXB4CjXM3EdL6TLpbDZnsWMBydc92cboHVuTrpWgeAnpjqUYhpEw82RhKQ2BQCzRdZD",
  "key24": "4yombAgpLvCw9KbbGFoVsEcAa9PVLBRzmkxYNqfaPiuVW6hze17P9VTNQDx3hzzkPGCKU81xqPgTUrQNzJ8jhou",
  "key25": "3CbNrdafERewPBXCzZCM98Fk8fPTx5VuuzxgWyMyTfRvGcyy8EWxYKNB6d6hq9dw8hvEkioYm5c8iUnwqbVdWmrt",
  "key26": "3hHDmbMGF8W6oZPv7vW7FnM42aSHuxhEVRRUJUwtTMmF1E9DeHyfE2cd5MN1ZGyFydWFYYqwRCuLzT93TMC5Jv1B",
  "key27": "5jta3YmNWUySDNGzJJcov5xVyhjBvhb4kHhG4zwYDJasknYJoG3WFQ4jhBtcyvHc9AMC4MqZvRjDUEGHx7GvTZ1S",
  "key28": "2p57UmN8ND5oh1oZAhLtpg7WVBm5GDy7X5kyZHFt6f6yyy9PD7NpAbmfF4LkrKmnNNh9AmHS5RAuaPjf39GPKatA",
  "key29": "4qv68vMPDCxfdKxz1K94GzG45kqKFwufKue64srfdSEKvfakecv1o5CVKyKXQcCFZQ2xSucx7MReACpD22ifW392",
  "key30": "319T5SQsBViosonvbgF47CNoCaH4m6f8xR2JZSaVoMKxi1mG5r2rNM4GQzG5z2NvfNhZNvZYgiE2Nd3KSKy7FaSt",
  "key31": "LWfasatA6AP7YEGEci5cA19H8JtT9bq9TwuMJYsKjrLdWqS1i2HULVw5mQDSEq4JEox9xJ1Bd8pCCneZ6bzqryh"
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
