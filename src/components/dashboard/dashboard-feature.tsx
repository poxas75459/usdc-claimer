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
    "32bj15QGM8DzJPMSXMmGmaaNAvtSxNQB2ZxfJxrg8e3qycWgTEFzHbMFipaXwhExPTSq9hNZTnEFGyntmMA59p2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaG3ihz7dNKNcXwYsESxzuawZAnEMS5wyouGVT5DoTFHvQeYgfn28Ztyo2dRDo7AmvjL7fai17abzFELAuVd1TA",
  "key1": "2tCAGy3H5HEKv4KjmQBGJ11MGJYCyCFczhiTu2En77K8FeNuYbP4dF71c1XbXturLhVTH12fX7CxVX2w4wqLb9vu",
  "key2": "27CXFKKqYqvrFCSxDswTQiT7NPSQMbT9oizigTGR1NQtyzzpUoydJct7azuW88SQmTvGW9713bAHs6BtpP39RbG8",
  "key3": "2Q6xxKaiWxJupGnJ6aZQqL6X3yxgPtUHSUCSa9z7brECCzEY9xACWh21QmvDanRWARa5N1ZvsmuAb3pZQXX5XGA",
  "key4": "2X5FszFx4H2vAB8tjjM5PoPx5yHBstB7D3uSo1WpWdpbUJU2AKBjBwYGU2wAWs8j7GESjamD1msx9iWwBfFFRQWQ",
  "key5": "5nfQF8J6rsrWbumm1fMdZGHtNvA2dvzqjj5ZDenaZirga4CRAMRYoGihFEv56ttHPRFETqC9sZeUvKwDUspZYcrE",
  "key6": "5DK1ztudeZtYdxZXAkDFQ37Lec5nT8f4dMV2EzMHHErmWRodv18o589bEEpfEGb9B4ALHAUamzoPDpctLkWBQueU",
  "key7": "3ownGRsVLXJg4C3eMUrXcHnuA2PRsGYTtB4ryYRW9H3YRrtBCEE9S8auZ9WM4vv8M25boiScDNf9cm9qfukJK61Z",
  "key8": "5QN5ZHJuFBFbqrfMpGcNDh2jYr3NLDprAbUyPHFPCbnAFjhkyutWGKKj4NiFQ7aCYJscc9BCYtJmP1Kpy8RqvnJx",
  "key9": "4kTEMDCSrViSvJBhSs1qWQpU5gAXXEeE44erSbrzP2hrckQqsg3dsJpPTdowv4hH73YYM3nJoneo15mvqqZU4pPi",
  "key10": "4nr1S2prrscx4R1TK8XC7TKgEcbMMuqKYZFsBYb9i72JcwsUpEuV3t7GR7ReQe5hcySURoCwFpKZRvirJyskf626",
  "key11": "66ky3kWiyFii6sAhLoFJKAbNxMC6XpatHcBoxuewcif37TTgbEve7U1rNWEjND5g7uHanSthjc7Qt2g2f2N6vbxB",
  "key12": "5geYZcREwHAxV3QTSjzmCjcW8f7gjYsEFbHe1TfrtW56WQQYbJdizWM8mVL73pfVGhggLttWnwTSwQWEeVoj3UvB",
  "key13": "vp1DKeeSFwZJUPaXTwJK9QCC9ChgvLeesJu6VwDBu8NJKSGTLv1VnX5HupyRxTmpR3tgcgWq8XXKX4848oRwnHa",
  "key14": "5kPaLRK2UhGYh1Uz1pnzeGcA8SVjo1E1JEgawEPW1MsaYfDQnUEnptJR4Y1pQYvmJDL1CYxMThjeUn1GVXsR9uga",
  "key15": "5qj5CsyT4YUhkg4EBrCBdC5dbGWFQ6xuNRj8sy128tPFLXSnDF5vq8e2n6FAHW3kNXWp4Gm5b4YyPiEUpeJauNGo",
  "key16": "2Dn9zMMfctrD1eXsFSYkUNfEgvpZLrdxaFHWHZ2Z3qt2Q9iYBinyBrC6dBHsCUyzX2hrQyHQnKcvf2TAgRsgtoJy",
  "key17": "2NMkWCDEP5dLnVA1AnTdw27eSx1ANzP7iPuQWz6Lze245gNyvCvVfM4zWXPmB1NT1F91QjcNiZffsDe3rzK59KfN",
  "key18": "5TQ6SLiZWTundRFxd1xEmMcZFvZXqL1Lt585gu3mEi7LVsM4NQpV2bJrMuEv9XcLkq5y6x4PhoT9kFNyT5iLdnbd",
  "key19": "3BR1sGqHqURkAeJ8kzviHYbNHjQ1Aam6NW4V9EE9QEBoEnwLFAnSzML1GrmPqRfUUuE2Jnh7DzF1CeE14PcXYQoU",
  "key20": "4QnC4G5evuVkjDHQJEXdCWFxHMEw3o5R3Jt7RbRvyijv1anHAigD5D6fFPyg755MmiRREUhrFf56Zg1Qmf8F5XXF",
  "key21": "hs3hg9viytjsByrTfDZ3jEEnDNRvZSGpwfeZ8DzxoPacvvU1gEM1MVxHuuh953RYEa2oP5CzDidoFpArRHszTrX",
  "key22": "4CAa1TtAQf24vGZEXLbBH4ejqK6K7oeJc7vjd98kJmXACwWr25bz1tWKuXtrLuazRRgaqeuCMgyg4CWaw1c5fKFZ",
  "key23": "3jtmX2tbD2mN99QykHnicLq5RFms8NmmhHytAhZac99anRpuGGjjVZkX2rzLCBeFDh4WHuTwUVNXLqE2rTnnuWfC",
  "key24": "61ZQ92CWdjhiSjwo4T95h4CNShoUB8JkeCKWjviLYF5XxCZeoEFr2rmMAqAsUZEyoMvWDNYmeEAW96YeCRSB49eq",
  "key25": "3GQ1KuUYVjRtBu3qay7Y5td5mjAFLypjX7X5WyHfbqyU853ycY2U3R49Ghh9sJomKL9mwtNmLiLxEA32EUmsiccE",
  "key26": "v1WV48Z9vJJ699zv4d4GLZ4hGE4jo7EtJWxFoVorfqQ79ChU9shibefBdA7UFq8cNvmE3JqjBVpjHKLkQiNeUCX",
  "key27": "22FupSYTMuy4j7n4nS4xbsxoeYwjFNFaJd2GoPnvPQ5aQbmMCjshHeofvhqD1WLPMEAHRPxTmCun6mgzzs5MUwbA",
  "key28": "2BVrq9uEaV3ArQXvoeh8dZWckckrHc3dsb9ZoKx52FtLrtbUJNTmX2iQ2CpiABvb7tWaFzYz1PpLLSEEPQGXWsNP",
  "key29": "A5pFUDVfT2NKSdD5dGA5uLfNZ9VHbfuER85VK7wcoKVo1GVn472ZECEktwdMeQyb9bYGL63ibVAYZV13nzYQxsm",
  "key30": "418vvbXUssf36hQ8GP4bdQXLgNKpHJxJEwN11DW3dqmisiLhsWa71QVK6A7ShwRdsJcrNHuBByZjgc1ijp9LJ4Jg",
  "key31": "2kwZVt3usKB6havBeTD3Y3bKauJNUQMqqLDPU8EprjS7JRLfQWtbNbP3JiToJWoFo8q3VsYD9b7MrbvU91r3fMho",
  "key32": "39jHekaRJGfNVbKhRXSM5eRgABUhqjhQYb5FvaP7urD7LDQpFmFrZ4b7LfptcB9NXUXSwt6BvqwGbLLmH4enhvyS"
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
