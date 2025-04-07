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
    "31M1MBY1WGo7fpdUqwdHDCuycP37hQcpqDEoFsWcB7PXBwv6X1q3haYAKsX5aBL8yCgtVd3vUb1sQTrgnUVnqTUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JUtyewQfq4KfsGUC3R72KxHM69ef9aCwCWi1G7vbuFAxXtb98V46NRfW4uMywmMswKVng1KgoSQ7w33heanBCeE",
  "key1": "4UKSmoqigGTwMVP4U1jCYuvrQodKAuJVmnmh3nmDM4uznMBihK6MLr6ePHcr1cfUvf2AYa3XSHXyWQ2Cx6hFuiwS",
  "key2": "5HciJbj4AzRqVvq48LQPsDjaama1vjqCPwVFTiv9vLKC8K1HVouL72cjbyyiQ8frsoC3Bwz9EkmSweeGCVYLTdew",
  "key3": "2fHqgtCqbY89s1Q6z46LBow6Kukebmh4a81w7dvVNhCiJjTz1Q4bmFRb3HFyhvDMcwoHahw8nY2EAcrZuieR4bD6",
  "key4": "GKm9CZiR94NE9LnG19dcatzpU8GnbmvrKtaM151eTLLCPnSAzgKmuJEh5ekmrNR2bTvoY1D2awoSLnGE4jVsap5",
  "key5": "wxbniyHFvhZ1N2ud1v4H7ypacDzbp6M7Qm7r1oU6FKDbbGQVPHUX8JGtvVsjvqoM8VmZTY6o5DtXoy1UoxubRWK",
  "key6": "tGHkUD9sB3bVEXLwabQBeAaW54Sf7hYcjimmChywdL99e9RGj1bgtSsWDouNspCTsYpDymVeH82tnx5yZPnHDzX",
  "key7": "33q3m1L6qeHbEXPoToohXtNh61767LBS8W1s7PZJcXbxLUPkusRH1GCnztF8PAAqsxMdT6eihn84na3ebP2yWJ3q",
  "key8": "3Jmv5pjPkktj87c3u1q1F17PT566KjDb39JPcX7wg14BkVhwu3HynJAMTioNZvr6qPaMj8c7zykpdBrnsxpCtjV8",
  "key9": "3BwrEMnb5YWNsgTwqsxtt9gQNg3NJE6kxEPed5cmvKpU1e5vNSLCAB2pWQfqmC6ghSNYvQjgeJF8Gu2yCgzw7nR5",
  "key10": "hp77sbKE3sE9XNQDvBkXFac6iMe15Xcew9FZDDRENr8MLCryTvqGUuNFC48RqbXiF5ivTqj8sbQRdQvkWaqREpc",
  "key11": "3mqTnr37pD4zngz5r92eU4Xp5fAgoegPQM1q9hdgyutDtc3NBLRncHsaXeCZGUEHqGDxxeCw4VDCYr2ubFT9NWqx",
  "key12": "46GWMGLDJA8sbszoULbvQAooTrmmXENPL9EJtWSPFEaJ7PyWLnxCYaajnh5oa1dFSg9Cg79CVjQHauWVNnAxrepS",
  "key13": "5Cc4ZciSiuYLkwwXBBsTJMXTbVB9eEZxXdCYqGY5JV4eJyQFgMTDTUU2rjNhfrkHxPuoYWDnspXakSzKfCMrt1JN",
  "key14": "5rEBZa62WPX6irUMFYEcB6GdaPu5spy328fxz3mku3B44gwnDMNvn97g4fbu4VPZ29qA3vSUECKcNQ7G71PK3i2K",
  "key15": "9S2qMeJUwKwABgxRfcUBvSj6JxuRYbs9hSVBccfrTi4TX6CJXYRe8bL2tDBhz2d5842Y1J5CS8cMGiN7cfdG3vW",
  "key16": "54RNbPwDYGZpThWvztPRus4EJnohuugKSXp2fZD5rEiresK6djYPmt3cHL5RKDesFcKDEZumSQs3RW8dTRMQpa1i",
  "key17": "2WZWfgH5C1xHB5b3zQjXV93JxBVDdXHfTpTvQaVi2c7TvC4B8aJ4F9izbKcvMVYCj8DKSwPNAEvaLHurn1Qh6THM",
  "key18": "3nBrLergAYBCBeqQ6pwD2fuMJdFQhbqR2PBD4Jd2jhXHzp7h4NhpmGztx2pGNJBEiyRs1hWQKb7tHCHUJvVAYkhM",
  "key19": "62dLrQJ4kjmJg1f7ZYCjzBftFqin8ZQVyFBLoGxgZ4FagGeFacKfcvrCrbfy62Eqe4kkSszUmRaqSUUNGSwN4Z1g",
  "key20": "3gXuaicqibkZw8iGRSn6Ybpi7ws8ibGGBJv1pALjfJrUJefM3jzJULuSMVPKHAqktkLSy6de8W3o7fxchBjmP19g",
  "key21": "2ESQbgvE1rB5Xn57YSp8C7b7HLTMPZtNfHo1Eo1dxDa4qX4YybNUFfmoD3hZ4KbSBEajGgNGvjXBURmseHPQ8r9Q",
  "key22": "2z7eQa6i8BgYnGTPp4V4JDrGj2dMgrtoPPwZ4FZWFyQEKRoBzgoHW11qLtVuHeWG4JQmJftHpTVWXoWyBatwY2fR",
  "key23": "3NY3p7qNdmWsTCkGJP6rYKLB6h4iNaYx2cSa6iCe62cqEL9oxyo88a4mtrP2J7ntnFMzwX3a2ecvpoSNuJHV8re",
  "key24": "21Yc9EvyaY3r5QYNixDA5BFk6R4EKZC99miczG5sPCcea8uwJSqu76NRi1c2PS5fAuvWCdPhpMumxPJV24xaPvAg",
  "key25": "3wPk1QxRQ5bnCMnpRGCgsVUoP44jzr7pXSfhciqDGueK7v7zo5RZWbAtt3JLYSSEJFSqZSUpHJ27V5oJHHUEoMig",
  "key26": "hkc1tdKUMbeoq4BSsD31YkpnCCZKP3EnpbtSfhn8NFaDA9AhTwb33TaCYLAZXdbVuofuHFWDdN4DfdoEosb5ahP",
  "key27": "a1tSedVdF4gqUQ3vMTzaKDuJiB87S4ZBBXJT8ZTnDB26ZEAv6UQeGD9msMTHw7Z1qYNrE9yxotKLU9srBRaCWh2",
  "key28": "4zYWvRDMr9XY1Ff4mMXAGipj4S3cRzKYKDbtYk63QRZYwVG4rtH5ACTxQD6G6LUJjfgyKRbxXpGw3wh6vYXjshVc",
  "key29": "3j6WAW3hw4LndMP8eEhKwKCtzR1ZqapsCHZdDm5LJsY4rAcVMC3yhyvkJVRfPSCYcPRdJcWbL9u7Pg2byzHDZJwF",
  "key30": "5mKfgu4b59J5cX15fZtSocAGamTho5Q1DB5e4VVj1C5MDriYPnLnA1yrXfwQTL8txDoyWXEJqs4NRa4hKnFYqaL5",
  "key31": "nmjJBfqcwW29QcEVb3wucNbJTSJRfvBuQz75jAT4ikeUuQvAKzugDpZNySUK4HqLEA3fwQ57KR583oCRDAzheN1",
  "key32": "5QcBKrBJN9yf9EzfLBNrxpnBJqnfmaJucTyGJWiBvaR32U7g9NUgZSES5ovLE45qUobi5Nv8VraTTCFL74LhMzhB",
  "key33": "23eNo71fRXyfEqC3i8UJykKEKhJB9otGqJrU6LaCL1uCdyCZJdLHaYa5hKQKm66YHCbgCV7sEJzkp77ZkhS5roV1",
  "key34": "3BKgvAfWmC4P1NFRWa3j4PCoTzFuSLYmzk3bAJVi36ieCDCUGBWqQ9ESJxm7tbWrdRNRuLpjujKhj5u1wTFsL4M7",
  "key35": "4YTqCr7MHRJoFzq6cf82hnPJDD48aZ2Qdu7iKiHEPCBD1RXxk7fy4vbiTaVhAFaTzgUEX3U4J6TAbBzEnHZSmZ3M",
  "key36": "24YV4iGd1L5qrk8G26n7rLgQM631CnACdFuW9BJUYuxWSWNFsofgipijyPNAF5sqRL8GAeY31oyDo5rREDEPtmme",
  "key37": "Fc1Ui7AuPrwqEBD1sntWMJjycb9S3pMpvBqfUpqjeqYFACgigfdUJJuqc92WQqimM1DwC59AiTinSraPptoMJbb",
  "key38": "4UmuWv2fGyEZrqitTd1vsYo3b5CKQniXA2VEhvwmCPCVERczyRzMys5Vja1m7o1Sinh2zDxGst7FXL7PrMzyutEq",
  "key39": "4FAdKN7j3NNaV3neshMy3RynkPWS5fB3EwHyyRKceMC3Y8GCuv5H2P8ykfA2qFcP1UZtZnMUvHCQeQMyWhgLFrBX",
  "key40": "22rsovvh156GcM6Wibx23aGoJvMRTYorBG2a3UWtAvzrZ2VcWqEmRJFeTko9pTdVtWKDQT9d4NTuBApT1VxspGFZ",
  "key41": "21MMeP4ZpXbSDfMkvccRxEc3h7uMs8k1TVXANqbTcTm6CF33EHJMRpCyar2KUcjCBssFg46Tv2k3yBV1nmvNAcQF"
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
