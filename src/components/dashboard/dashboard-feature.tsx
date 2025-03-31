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
    "5aPwgzRbm8ZBqF6ZBgrNxM41o3JR1anC1Gmv2KwSKN221GDPH5hjPe6YcXuswJyNZf6x12WV6QBBVSc14Kc6MX3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KM8X4Pme2CDpWo2hZTx3c7ugbFHEAeQWHTZanfXmRtJuh6APjjfWKbu1Q26zq52sY1SbSVyywFNNFpuX7eHHP5Z",
  "key1": "46qooRAmxNkPRA8uMFqc9W8t46r7qShtadYL9xKDkN5Rp7xStEBnByxvDsSj9o155gGr6WpVv9JbmJxx7Ec7vrmh",
  "key2": "35mQgTUSySyLdrfKVMardLJus4ysfpVvB79Lbp9Xrx6a2D6SDMNC95d6UVYRkorfTsdoUJKzxyo3rj932E1ZBris",
  "key3": "2L7hea66933eXQRKyxy4f3ZSHvnNPJ9mErF61jyJ6DyoVGWNP4py33SyAJDw1gxZAdyjz22ULQVk6BxpDJA8FABj",
  "key4": "5ZgmVZcPCRpNeg36yT61QumhVBC2gpbpvt4x2uHNmTce6wwxstNKfnpPbiW7VpDAziBwoALThQPmyVczwkmeikq3",
  "key5": "McNJhusaqjPyb3wZJMA4jcpHaqeo4Np1j5LcDCoSzqgN2S9Ydhv92DQmN3ZQLmQ6zMN9gneETuEdj4Cfa75hbMS",
  "key6": "2o3Qqry3HUNDngiS4QAcmF996TjSkmCUemy4hEN2cG3U644FT5wdbJSL4DqhgyNMmRh1NT9gnAACGYu6t6B8os1s",
  "key7": "2vxL5QpFqUCzbjm6XFNriLFHkLnAh8qKwhyXG9F8Tqx7aQjxypnN34hcBDv5sTiebZVmaf8weyYmvQzNYhLQgVZo",
  "key8": "4ZP8R2Wnw21MSpeueHZcu98nW8iUgoGo8yJH2rAgamNVgXGQRZVpNxTPTR7pqLPck9b1UGkGiYuCEDTMqN117KJy",
  "key9": "5qCY1L3W4GrFyrARMC8Behi3nihx8tBh9PzkgoYwq6JzRDT9u5htJMSofzgeK2N5gWoKoJX2uGNkpmQxiQ5C3RgL",
  "key10": "5NDHqgEdSMgMHstNwisTS5h3ZHHVk3oMkjGA4PnTJro9agiWZUPDncVKK8CJPGMcd8zBzWS3yEfvCnPbcrXDViSm",
  "key11": "2qmx44M97H9nGvfAPdMpUUxosPtS6QZsqpCpmtRReJFG6qeFiQQdxzptWXgY14J9DuvDnmDFijMaB8ZrBysBRhT2",
  "key12": "v2wwwfeY3cRwjRony37YAun6bxNkPHt4f3TZKg4owcw2QYag3jJpsvKn5dp8LmEjgrJ8XCZEErLbNR9rEqMDKDz",
  "key13": "5brgZdJ5NWyPW6miNhL2qeUahDTqvajb6JChFmwVDpEYz6SQh1CPehrMqKhQMF1BAvfVpo231v6h3vGHLeVM3nto",
  "key14": "2AgcWpg7AikdAhHaBx5ixihc5bucioNPg1GpBagNsXKPKkCBdoSbNDQZCHZnK6auVRntRFX9c21A63HHZw6K1WnY",
  "key15": "34yzRVvBT9xc4qs2TF2tfQEnqYGapPisTRzQ4mC64fdhkUwbjgW4tM2bZfeFUcoVb96mLZJFpnXpmXiKPc7q5HK8",
  "key16": "61TAjBWYW6uDTvL1LWz5yjeakreC4u1bCWoMsvLiMb9VcP9DpHkVssu73BQdHzLMxy1weSFXBVCaUQnBuMvzsR1s",
  "key17": "Fy8WYEqkZiAQAyXDLAGSymzxS5SbYnBfbggLhGoHWLP7wHkzCZvXcYmwQSSvquB3Xwknkg3EGCHKHNjhHPSw6t4",
  "key18": "33BRj8BGXPwfyoh65dPXsjQTc8wRZbipK2Unn78kv7xKWfmGhDmEZRaCCTPqudu2F5ws9SBETrtVCAgoaVdoiHmQ",
  "key19": "315g38YsryohD34QTHnRHdqXuPGrGeNVjvihMRtq8wKiUKXtdLi5QJXSr2FkdhgivrPsxXH8iJmZD8KHzGmpKAdm",
  "key20": "5JaCY8NDHNc1zJdh8heByXHmwxjBNcykskoHSc1YrFUwXaWy2iDUPX7crJmCYn47o5YwMJdRxzGt6btrAGsztEe6",
  "key21": "59gaBbhwCrKEzXtftt33XzWVB66pH9iUhU2SnoNQCU3nh5Hin3bzr52N75Kp5p3Cv4LSbdH7ys9EJC2D7vpNkoFk",
  "key22": "3ENo3WcSk643dq4dqnHqu4trkCv6xqUvZJWsYg6uUhJnbqfS71YuK9qkuZkTC1jVumnFtmevReoMu4M8cbKGcQie",
  "key23": "GAf1MTq43aJjZkmkB2CV7KTpeCuBUE3LcFkgWsYfe1GZrwWuvWrtukaRyGducEbkJb4etzQsSucfybQSd1z8zWs",
  "key24": "2fi8BJGQPukVx5Pjj66V56S295a4wKEv6U2pJh22PLC3LkZgTBbRjLAPU3p94fEUT6euiBz1BSDkMMooSRq5XgJM",
  "key25": "3cySksG8Ubh6umtbryHqWGC8Hqd3mibWYvWToEWviTPSe6nJJ2psVWyCRWBkGc6bSVAD4jTDhQMbDZCGkVZe8Sj5",
  "key26": "3dJ8yEcvKH9PaugCrE5mfzxivv5nP8zSWzFWMsCCd38yPJHd4kLUmSDnryLEp2ozTASqg4eWymtFTa1ACZWbuw5F",
  "key27": "24wbADHDzDwuAeH5tDP3ZvH7sYk8fK7w9CtYNmPskbKsimHTSWhV9sxxhwTubJB6LvL7fjP2v3LbX3cs5DQQqYTd",
  "key28": "KVNLNbx9x8YUzwahhz12uKF3M1DbMqVLirxJG1fMK1kPVaVpooEVykx7QGMrNPZp8DYYniiM4NLhWuPJvFTMzYn",
  "key29": "3iPa2L6WWxx2ZAF6NQNqJoonxMUvx43s5E6j63NUqgqKLGSWmPhbiJCpb8oEjmT5GSgSNyvNPSgi9f2GvPg4gikC",
  "key30": "5TnxHMDZP3KgKhwkpj794ybwu4ZuaMxqck9gDbGGdHoBph3AYadtxBg4SuvAj9td8HueMJJ9sYzF1wm7eCVKAC8E",
  "key31": "4A1XZM7Sbjx2SNXZaKCwTtiB8Wkq14ArMxoVrjFkKwmYuJDNKiqJYZaYVYAuQcKiF7hQkuoQyVTmo4BPgHPMtWyT",
  "key32": "4aCC8bTurkkdbhjWW32AoLuMHcVEXjyQtcYdYESsn3FHqpQvdCmJJVgw5VPYvKmy6BbhTFiiKZ9Q76f5o8R8z2ZT",
  "key33": "5wEHXi7JvV36yZA4D6dRhW5QKY7dTz3dyUy8g3RGFJuEoKFM6yBuAq3UYULeLm2ipMCryYCNPqnvwbuMtNwDDoEY",
  "key34": "zZK1NEwBYnLpXygzen3WGc9AUW6q4YHawPUDE44RSq2FjGoHjtCmnXpBRyUjG5vChT8umiWXPpjScifdF2eKdSp",
  "key35": "2jyUgmcNuLZisFaG7D8QYKjvSrgc6Uxb7m4KQbw9bYhUNYZW6m9gZZ31YfN2mX7FapxzpKmkdokywaBxp5dz7U1U",
  "key36": "5venxtD6svGM2URoK9TjrP5uf8gYTyMseLkXTxxXWjJ2Lc5rCqia2hc1gdpbHPEyKjzn4uH2WxiqSsq8ePQM2QTP"
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
