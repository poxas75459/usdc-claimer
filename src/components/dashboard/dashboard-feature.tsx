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
    "4oAqqZ3uqPN1EmnJm5LqSnTmvKkQteYc2G3NkEFVQ6eqawTYRjqiPmrSSyvpAcZRfDKrQMFu3e8Y3dkhBRvEVocq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAKc8vHeXmme7NPKSmGFxqz1RyuejncmMxkznqmiPxr3zmGJEdBm36JWZphnDrjnVxFfrfD1WopAmjvZt9fsGym",
  "key1": "5KeRWFeWbM9DNty69FeeDjjJAJqEfbQqQpLjuC9ZktQBahBeMnFXiwSatrrCjZNCyjFm7X3RvxxRkAyMjL2HGxYn",
  "key2": "3pyp9DZ5Wp8bSoMcNazHhSmqjwCci79SBRNVEkSqieDMBd8dnSjAKe7bcusoBQdMBbe7WZFi8kTMWUwc4hn6rTFW",
  "key3": "TD6eqpYfeirHnbM5jxEvopv2MS18gTBFhkaCfKudqKrHif3tMN7o89m7iNYz3Cfxpr2bF4DaupWka2Uk5NA6T7n",
  "key4": "2HakztNmn87JG4kAGAQNKMspAt1pnSjmLwp1v5MAq8c1eBXB4SLi5UAQkNsmhVY61xe8hfcRP78jJBRDbDdyxLhf",
  "key5": "2gjJiqCZTvmhYLGkUi1SvB9dQpt1ERSHFHhVoQFekr1VGDzXsz61suy5WivQLn24fgCFY9sS9g9HhQECnR9cj5r",
  "key6": "5sKVnP3Qd6Hd2UUNHLrJjNNyfG7T5n3Xdi9s1dfM2oKKxq1ueXQoNbUMLWc8k39s6nag8BkaJmoViwLVTgY24rp2",
  "key7": "3YYtxTkThXPzYdCVcNJSMmv2VgJitjMcHCg1YkGmGVamCAz8HQBRCMSvKDmbafmJEqnYAYwTwMJkHpLoaG1SJiKk",
  "key8": "5eFqaftCHMJS2nyYs36DukZf8Uia1Fmomn8WNHQ7bQyU4pQpgw7c9ssDrDUM3p1aWsRpd9b6VAEZ5jtoYfnztBfo",
  "key9": "2KU7XBicpcqXeN37XLKiAgsBbszU3gLAg5sWKzKZjVCPiF2d51q8LLV9ddb4ZaeVLL9FB2U1CnnBM7vSqw6Nsk4e",
  "key10": "4Bxn1MjoXcYe9JDeyDuKdGiTe2iaikhJ5HoExd4k6ze9DBVjb42MDRJhNqEeestKk1hKBYrdsCUs1X2eTH2KaDzw",
  "key11": "4BkCe1pAsxRpBHCTG2V3LCdQkKTxW6G57VgG5RRwFuwXu5T5z4X4BBAMkmdT5B1hKC3QwDe1xxgRLg4gQSw5WSke",
  "key12": "3LerVkxf1MjXViKbsrDWvntBK82H3Qw9c8fj36yKPi3eb2nUnfpSctxKZansNgwknFLBpoNLPviE2baT5aUT3WCk",
  "key13": "2qkoZ4Tcpf5MJLGERn3yemyxbSfQ3WP6pETB1u8JCZt4L843SYuSGkh2M5qBCeBHps4aSYMFNZbLhMcBy8NN7pxe",
  "key14": "4xMAPuFB5bdVDFgw3cwBx9oDyJvr91fRQTLJmB1JVH5HfiezCQYgoGQiqMPUT7BPVKN8dM1TFrNLVQjf3s4BRQeJ",
  "key15": "46h942WxdH21TJqKoS4oL3cyrQvA2ncrxmU8yiL2oD9qCtaPjbo6og41wD84VUREZNhe82SGmiQxrGGS5bwN95ro",
  "key16": "7u4Pt9oGB3xi6M9wNkxjHbgxSm4MUyFjdCnNY8enNJwCREvAbnxQpADf2aH4He9HHYDpuKMFraHs4r41WBR8jgY",
  "key17": "3JMkPxiTboeNNPtFp3wSJjzXjB8mhErfDhVRef3CQaFPhDCs93G94snxzM7Tvm6SrPnAgwaZ9FKgyyTkz768kmBR",
  "key18": "krqAtFVHHWY6d5bBohT4YAGLkj3wgeuur8jf1wcUF6EspptSEBBtNt2b9F23xrvhDuPoYtxPAnmecf6uNBAS2xs",
  "key19": "5oV1PfnHoXi6XAfUQaWSd76FVeCsXs82JZ96hbhKjsFysZKbC8CHJDasjNaGQDVFjR4ziFUhfEra9eGnSsHiDY54",
  "key20": "4dKe47oCGAM4EPhb4pbzTwyXcB6UV6rqwzBjyCbnosYZii4v2CkWqRc2LvhtTz89JCCmGhAx6L5qCfkaeHbGmdcL",
  "key21": "54Yw6sw87s24RpRpTKrHSLixCRTgamz8K9DSKTJaU8KGHdtQpxEgSZYUxrzpRqgepxeAiZFYJwrS3QpascSor53H",
  "key22": "i4QnhUrXonYhLCXyujaWJzXe2FWuF1uf7RpwrLrHvgEAopV6fe5R3adQhBQwGf1dKWfchY69D89wS7CVcjipBwN",
  "key23": "2bD9SvNHsfR6HnFw6ACuA8QQyR7itoq5dnvpP7cfTXJEEitLrxA9m7hKkbZgdnp8HW1uw51ua27gFAGPPZSdhbmX",
  "key24": "4UKPWdAiBewhnuA5E4Ky8FE4W8GVKEJwTgdKHeRoq4zPTpfFKhsj9qZY8Aohtp8R5gBqLFGye92CV2cxoAZn84d7",
  "key25": "5vTt6jEeR1P5BUsjm3oYnZuZ5L8uoE9dsm4Z2RsAbfLrSynbnLUg2U8XEz2CSBMLf2qQLs5rFzF9FhxqBcf7F8BB",
  "key26": "5bAfQmKwZZ7y4X7ALEavdAPheTjHprUWit4bgfPvcNhD2PnZWPth5iHNdShascNPtKup4FMmDy12PQ3CruiTzqGR",
  "key27": "u8VC8ec6MKBSKNF673AXss6gTCpPQKh8axaXX5RpGXF7ozh8h1GeDMvB3k8QwVDML1wPfkUbhPXmo4tVvYsko52",
  "key28": "4RF5pf5VVvnrykrA3GUACZAfQD1oXghNXMGLEEGa9qin67EWBm2kPP3X1XTEvgPJw4kJwSM125xcsayNXiCWwhLL",
  "key29": "2J6juoLtHMnPrRGAvJgGABjj97ex1DK4rN94hBkxHbXrwjjHcXJAPPDnYXu8LVbLfz6BcXZsZbMCeetibGjzNRs4",
  "key30": "2q1bKTxhjJV2yJ1FRCiEfYrAn6aduvjtmkZWJrtbYetvUcWo4UEeqqqBySCibEgQYdQkyUhUEKKnGp9HBnUYL5Tr",
  "key31": "35ufibVVxCxVofmea3R4uub8GSQijrN4fbxi23Kd6pkesnxPwcZqcFAwd97GshRBsR4gTij8hRmcubz5HLLSWKJq",
  "key32": "xubAxyLEuahrRxgv6LBZJe2fw5SwhvhtJXG5SSDHKDv1iB5GwALqF1N7M3HJdtwf9owDhJdUFcdYhn8QuRt51ZK",
  "key33": "z5dbM7U7Qv3fhrwb519ReVUUJyCEjjxDpy5953jWpYmPc8h7EddHmXivuTU1oNm9ZTcS2NsXi1DXXppsSRxU7X8",
  "key34": "3AVH19rfXKh1qGQEKcsE7ByNoGXCjAhkd222c6NzqmEk74PPrhVGHrvY1p8Y2vkhhF8apSNPkibXb5jXzsVauGEB"
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
