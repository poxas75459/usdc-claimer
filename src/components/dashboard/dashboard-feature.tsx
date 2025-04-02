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
    "48SV2GRvZdfU1SCtwiFUg3QDutHJPsT8gHKaBEq3z3Qfn7fRsujv3JPPprcEXXewXB2hsGm9FhCeDdyJdM9KYQcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBK4U9CzWtxQBUMVxd34F3emBBFqMzHJhjE8pxxmz1bLKdH8WWGHEkaB3Z5h59vDmnA8zLgVfiFYALe8FZniqsg",
  "key1": "PsCvdprbCiZKDUcX9nWtdtGwSbyhd3nRG935STnqFqCksGH2VMHWudgxzMeDiQ7jiHj5YrKBUzovwKYofr2qot1",
  "key2": "5kReEoSMXJALTCtpPoYXzRG3xyRn7yh7kRCK7q1UybDGfGEtpcvJ7fgUY1UHexL9zuuYy14Ax6L64FNAnYMRnH7s",
  "key3": "JRK3cwgbq6iE9xxF4LoX1yePADVJDxZrpxm9wEn3K1QjouoGJQjrzERUyTLgMqXsR1YBhaqFkT5aNdAzEdt45TN",
  "key4": "2XKGdpqppmLCRXEJqqNwjSXxqXqcgcBGkKTEH83mNFQBMYeVt7fc2MQ8QVAHJUitbf8C61ogGMCBVvLAPTxYXYVA",
  "key5": "449Ak1XkKvbCj7g5jLJTESuw6KhYPvL2SsjxB2eum7jZ88pH6UbCZY1TYZyPC4nhKCnFkxXfuFmTVJBhVubBaAUt",
  "key6": "4HDuCpdxHajTCdszbcb7L3k5w2UAAhQx19LzKmyaW1xSK9kmxvWTSCwXVXzoQGhcRs33ugaH8KmRmDixJvcatKo8",
  "key7": "5gJzSkfh9vUrAQnnJvHHzvg4ULyE2K3gNkNgZpqqrmvVPggD6ehNS2tQ1F3vFvP3GuwyJtoBnqw5JLKqJWRLKfyo",
  "key8": "5R13U2WJtjFstUQmamevfEpk943dzZ8TFditdw9XVEvxXgByVdytTZsGrXanqWvaHsB9TvXSRpFwVvUyBB34zUyR",
  "key9": "2ZMu2yqH7y96CRzucZiVj7FhSnBBewxtA4MHQMP9uc8pG8GcA2zp9uDMZgWikXWiLXEuTHewXLgALvvBYZTRTqzQ",
  "key10": "LxB2N4W4rCx5monEh9t4TvP5qmp7b6C495zB4YptLRDHafVcMwd29YqUjtBuvo98WGasjSkTnUuq6Gu9xu9jhnC",
  "key11": "5VoPNS76WCPCC3Sii2WRAd85WoXhLzT7LgefkbtxuBeuqf3SVF7weqrVb7FxP6qUgKUF6tBrgWkWYDJiohhJ7dVy",
  "key12": "4yUPw3R6HsEqc12r5ivUEvzbvgiiYpS5itXaGVuFX1LiUGhPHapsoC7TtK6U3ESRHYxtERXNgkUW428wx8XtZCyP",
  "key13": "4k8cjTtvUPgAkPDrFLRjg9XhMjDnrL4EWRYQCRQQmNi2dvoPBfAsAas7pz5miGgbbAnhyzksEVsuwVJnvrM1ytjN",
  "key14": "2Vrrb47mAuUEAvW1Npgtd3fAh36hDnCqd5MAVHZUoFzoztz87bGMxxwYAxwaKbbT28nYQfRfXyzDSN4cCLyk9bDA",
  "key15": "3aHE4ghto67az3qCqiwMHkvTfDRyPnhBwEJcMdm3bVojqnw1QKA5Pbb58yHu6EEnsjAqsXD2Pvzw1NnyNBzMPaTx",
  "key16": "2ihwJrpy52aJaw9i9N2zCqmFEWPeXeVgKqB1dv8nfkyE1V7RTTYZrn6Lg8fA4L5efPwSyckadLo2MVWBTRnHZErC",
  "key17": "2GSih6wkgYd5S5ua5amZghvqvj3w9mgqdzk6bzqomY1qnwh1pp39mdjLLxgXESmoxBugZRKFBPmKRdPvqkdjMXGm",
  "key18": "2atX6LmPp7HYEgNzCKebTEn1KFcCEbDo1SKsGGTnbnMH7XiesTtoTndDNfqZzMEQzHrkcD6CJjEB2uzy1odtPQVP",
  "key19": "55xTCVG99ctUZZ1qNzQvDr21fCdPdfAsJPzJVo1d4DUYYbDLAf3BT9H3g7jRnmBE2PJiX4ubtngfs3Rx8SJuyfoT",
  "key20": "4qiUBPmq5EaFDEvFe4zdKT68TqCVdSCbPiFGGTm6KtsWsqxsaS7mYStyGiEoeY59BL2rru2u7ihqkg86RF8WKs2L",
  "key21": "4uvAjAf6ajdvUBdwJDkWgJquGeVctzrnt4Gts8PRxj1ne7nQqigAaDq6AxSLrQmfUSBAqjjy5WeHMxfCUYSQavBf",
  "key22": "5fKA8uDujH7K568e7jeCiMvDneMk7VtpYKAQ2kRDpUXkUsZQpEcSByRBX3ZkJUHSRe6udTQN5yqnbUoGaZtrg139",
  "key23": "2co8ApnqfW8FMQed8DD1v5jAnHFK8j4Y8fN5mKiPdX9NQD9XV4qrNk1iaj3uEc4ts9cFJ4pgybNNNLBMCR72vrge",
  "key24": "4DqaVSBHH1atBT6iZjNm11x184pScTzgtMMgZdkm1D8jyyjEprDGW6CA7xmxAipncdeP2cDs8YCfy9tVonpUQwtV",
  "key25": "pJzLP69vAXnHYHkQTvwBNU5A68Wj3QsBQkReguuSs53LJ7Q8pAHCpC3NRx6KBLEPVov2hScsFtBJkgSMKH1WWY8",
  "key26": "129Ty5uZnSPq35mPixRUFp7NYkEh9e5Y6tjjjybWGWuqFFXRK8iSNxAvtaS6hhSYJ9N8jSUr1PaW8XQt4GQFxBbR",
  "key27": "TH2ZJSgKmFWw7YEZvWB9cypecQhn1Vc3MhAydGz4zRrXJpJ7nzTwA7dUNn7gm6BErvUrU8FMckvVNpbuxXhkKrT",
  "key28": "3VeGnXPyjw7EfsZ8YvDLWyv9UCgERweWxpxFouhiKtjyQDG1hcmr1hzWzNFJp6Ng9cjsLteo4sDvthbKq7DcSzV2",
  "key29": "yJoGiNMCYArdR76qb9Fb57oZB6R6i8wYZQYvQr5JGeFsoHY4YfFm4z4CmXxTtN1xAuprd5EKT2VPM5m4q3ufezn"
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
