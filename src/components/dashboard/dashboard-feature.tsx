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
    "4sNEe8fWgFLCTKerALobrzvsMxTHSP6k6D7PgChpfMo3QNsubJc3fWTZJ3bwF5pmM4fLNJkSW8n5FJx1ahnjrCUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHS1TUWmeArYBDTvTzdLWrfBztnD1SRvMPjzTgujMcVG5Ug4mW9QcTRfCWw4ptA6fCt7ntYFxGXpLkLaZjbXAFP",
  "key1": "AnWHYWwrRRdVt2bLSF9N3zUH2cdAC2aJ39kSRAPpF5HGBwdWrSR847shZcH6gBZ3PLEN3QGUN1RMPBp4zME792M",
  "key2": "5W27VrMPrzY8Wqtp85mVB1GAV3siJ7sb1PkQS4ACJ8MP9hq2FTcY8EXWd4p8QBRvcsvJYFbQELj15UuCFCRn5G6U",
  "key3": "45HtztnxtanRFfT7o6nFBoi8CS2BwwKi5ZMy1qYHmeeZWyfNAFvtpFCSGtWD1PDhydDSow3Jhr7hXta7Tm4A3uaD",
  "key4": "4MqnmfGKJY54NKBSCgCHtio9HFqMgnUBuq1Vo7Su4MyTdYABgMgy1bxSqhFXXpyMbw7Ran43maGQXpmJ6JrmmDf5",
  "key5": "iQd3vdboPWJgDRhiHAqMaz7QvsKoWLB3kvpfgTLAaSrSbqbYZd44HxFokzu4vn5hRbjJwuKojDrBd3SoA76U972",
  "key6": "3ZRch8Vp83hQV8V8nPmQB5ei1bU4LnTtAB8LcCzXxd2zjqnCo7tPHzYAaKN1AXCLCZz1iLjCianu3rBgh3h85RZL",
  "key7": "31LubnjvzntEwPp9d42zgj7XVinT1ra1N8eFJY9a7Joyv6MYZAxPH66aGJ8ZcF27d2L2fesbUPE43E29F7qiiHLq",
  "key8": "2SF4p6SrnZmWpikDmbvcYoHuYnugAngcTp1q5hFPLCpmD1Ch4zkSJQx6rQbz2neV8ybhdQ9AP6R9F9sKAWcpgnnB",
  "key9": "N4PXf59TfCCPvv2nnx1cbFtwj66NxNn3LnfTke7QKRenaQjpahLjiWmWbzSp9E1VpjzceoN7ZgTcTzog3jJz8ft",
  "key10": "2ijuN52tQW1FGUwpzMsy55ZMDiavNSN22h8wHosQDGkpauZHo8Ky6gW54guhs8KEkBNY51AK2hzXdVwV6Fyfj6S7",
  "key11": "5NhPgrdvBxp2qNEEFbKJAANaQ3AAWbDa8oMYF6QFLbbcQFtQvmu89hqgcbukx8nbdTpU7eCafkzP8toygxnVgV3d",
  "key12": "4RKM97f82zAbefKzfx1K1PB4mRG333dhwDv1rKcGZ5k9LoZPobMrU9UZSDtHxxkdUz6kw4gFknDA7ADfwrvoLxTm",
  "key13": "4GPRXvTn9VzxyBXVZFfY41Me418dTBXcYkYkpP4jWhwf9H7jEADHqwM8VEPiKjUMtE9NrTX2ps3xuR8idiuigYK8",
  "key14": "4YFiu6JouPSEsAjeT83S8hdBW8aLEGHv4hJvr3BUoj7pfYVZC3cAnnMEDj1Zy7mY33WL73RA6CTCkb3wEEi2Bw7h",
  "key15": "4b2NunpuWsthSJN5z3Z8S5CEa41Wz12KNUSGELminvgWbobPPsjCmQZhuUHpHmSzZ4vppCjJeYo6LCTEAxYd3Pxa",
  "key16": "4ZcVeKQsfwcKZZWwkCqyY8GyBSjoitBSkijRzMnvd7foRMfVWKxe72iD3RWKiLdspepaTHxgGUPM6eGWswkBPgqQ",
  "key17": "27Pb1uVWJVnxGhEmYQ5MzQf5xLUGXrwA7agi2X5zYewKx3PXz3pEGzpkGUJysxvLcFfzCdvEc6K2NhEyUqkXwXKR",
  "key18": "57orfVvC6hSxDCs4jkRHTpGHPYhtEBnVMpiN4XCyFHbjvkJjQDxtd2gKB9rYJVvEfw5TYRVkXaqG4fwPDBwvHqey",
  "key19": "4aWacmG49EezBBowi5PKiPcscybwyNtFU3yb8zFJGmgUzGMvxTWLm9RULMDf7mWHKBUvhWw9o89mVDhcukddxvzC",
  "key20": "5HaiGqr6dHjUhC4Mw3RPCPpuxW4Qv5zhhVxVjvfgS467Mpeednma9V5NZgH3tR1w5n7oEBeiQnkiaC3ki6axdBpz",
  "key21": "3RaFUxuCWeaSTT38qp8ZBenRfPBVGbzZ47fQE1UfEogE5odo1t6ZQVT7sqr1y8MuUdsDQxLw78SkUKehQox1wMtN",
  "key22": "53GnyLUaMAjgiNwejGFw77SZVt2LWbBbWQf5ThV5spefn7EADi56bB7LtXuZvpHygRC644thsF3FDqkJ73Nj6ptn",
  "key23": "4UohbFHxbin2UmonMQrMuebznKU6dBbf11szHgD5zckAdtZ5SR249B7FTxjXAcoPDYJAmhacFiT8RZrx4eoDPDsV",
  "key24": "2HJTSvRH1sqax4LoV3UctTUaeFkn5DMNzVrGL3YZBZyEaA9pWTimGHqaTHLB69rArwc3jVMjRRHyf4fzYHa9eSrr",
  "key25": "2qjaon76Npv3ZqHPA8t8Tr6XKkyB86cNcSJAt8ABxELF13najMsQC1kauQ8z4VYBe6urGX8aJs5DbWJ1gDWU86rP",
  "key26": "5qQMqbwKShH6hqZnLy84mKa3m4Qi9Q2LdbiA2rb5raT7xGJUffSccn3JUR8ydny27c9v8yitGqacRMZK4o9ykSoV",
  "key27": "2P4BqHxHu8DDKNS2Bu7A5LShypyizeY1js1JWP2G34r4PdXDrhEoyGmtUMUaA81Ld7xSehvz3R279yskQu7JEQCz",
  "key28": "4worP7ZKWZagBuarrEqeR2aaATCozae7R8Ywu4cB2ZknFfV2hKsstgph6kohthxpkcVzbZdeZbB2QB3krNZhXNYh",
  "key29": "Hk4Z9ZT9jEG9iy1Rt3UsMjkkLiYqGi8NKtgDZcZcB2BY5PmCLjWrob5F2mBeNjd14TrHVBwWMDo81782bSq4azm",
  "key30": "bRENzMBDonfpraE3JHxETRYdRmeGDkgmaEW56LDthqVEPDhWzBFtQJAJ6sxdKLoZusbwvFKBCX1oDr6w1zmMLiZ",
  "key31": "61WBuGU7LcBHV8cTb8xrqFpwXXVEmBvCFNRUbwvG2T5t64ycdhrud7GN1gMcTza17F1pp9pJZKMgmMsqcZ9dwcJp",
  "key32": "4VveX7tugtg2mMX9L9DR7Y2ePE74grMeHefNxCZZy5YUT1SfDm562CHpW7UXwS2Wha3wJhbrd6md7g7aamq3VFA",
  "key33": "5xdQtFXVA8JRoLebYKjRkwi59SdG9VZUqyykVeU8tZchp5N8hETCRfkwWW9849YdiJextxP3JvkFXGguQSMNd671",
  "key34": "d9CEuTGaWkFAuS9FPYb26sj6xNzPjiQASQE1oEfr6NckHfyAt9BLt5y2fTiQAiXPBjtBXWMiwfXVekJCSx2ELeC"
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
