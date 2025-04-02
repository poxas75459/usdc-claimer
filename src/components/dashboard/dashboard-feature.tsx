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
    "5WesEhF7PLpW6ejNo19tJWCaomTeRRpm6M8MKULZxy5bcfX4Z3ena8fH9JJHM1GQuYV1V7wZ4iXfCaJCYakxZUGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQ7QsKi9Sd1VHLfeE3Df3dfP4heq364eufNKMj8F8xxcWy1s2RNshAyJtwtaU13CrRHsngkh6wV2hRAXpFzksvG",
  "key1": "3FY68GrouZPpfM8MBxhoCwUsyMSKTMNRy2yYp6AGB3hQQZx4dN1awQy28UmvvPkY1wMfmKg2vaCzhx1z9zDNP71c",
  "key2": "45i5ii3amD7HCT2ccsYRobnpzKr1AL3aPDwyZmjs4LikcxovPrpkDsYBcHwRM2b2tWve7xB1hcq92YawcwxqAA6Y",
  "key3": "2PA1b3NQchiUexkQqYRUL9oUoDkVvd43cU7L8pHRMCrnL1xDDZqaUfvVf3KM3PoCF6hb2AWxxjeCs6XrvAK4Hfxq",
  "key4": "2TZvCMyY5V9dvz1AJGsuW1hucUiVVWY5fEiew9yFiF8kgyEny1DWSyLaDbYH1kpMwzt6eAWBPxgUrGGYQfBEZPtt",
  "key5": "Pab3XJupEwQJ6hiLW4P4ErTNm4HkJaXb5XrqYDRJR6tkferccMsY9R2gQAnPz6d7ZAC7gftzjvpd5qz8VrMrAcH",
  "key6": "4MVWGttAfdp8eL9cSBGxA6zCMryvQ2PHemoFxrrQ1hy73PjGBPYRdAckLekstrXePurMCkqkNDfgadB2qKGztvQi",
  "key7": "2LsXBK4HPMyQoB9mmUZHgXtTMixhyRuurfwksYoviE31F2iNntnSzjJ6UECKSLEu5RKvM4DKDzEEzCA6gYn5gxBL",
  "key8": "5tChQNmqs6hA4w9KWi7cEPenx5YJo3u14hZBTQznCyjFgG3V57ARmBQ16j4bZ6owZX1oQbR86ksT6ga1YBGvZYfX",
  "key9": "4dbdMt9ShnkDFHxfwnq6zmD24oWMnQHKFm28dUXda9sQKhMfTo7e9wREzLxYNZqWZzT6C6vxVsfCxM9wU2oayYqQ",
  "key10": "63LZ46Ma9bzHHFyxRM4ge3ETcUESysLBKSdw4PjZGKc6BbLQ6zCbHvDmABNayvfe3L4EKQDqhH89jYipdjEjWBe5",
  "key11": "2M7yKWVUCjWoJRN3huKrVyd8kkrLpVh47Ki7r5YNi7y7DULfP8Jaq1FEfLud4y7nM861hoyqEDP7sBbPjSFjB1Df",
  "key12": "H84zZikWUnPCdNwBoGf9ZXbBCBNktQGuzHvfBrz5GrYr3cCCXndfTXT8SVUWntSYxWVEutXfj2j96GjFN6WjSau",
  "key13": "38j1kEitvTmnVTVVgB3jMit4VvSGiDfBZEcHqN6hPrGFAZMv6XER3YF7eFQiRJiqFc9QZWr3VESqcXK2TzzHu3Pi",
  "key14": "5xYwnUC1KdGn72Ri9GWQEdVSLGyksa71ejdm2EihiQ4o3fhLYPbxfera1JJhDK6CSoHfzmKUfVudmqRKveLyuNVP",
  "key15": "2nLEohZ4wjmK9sxc2SLRytUFKQDNCtD4By5Vkm3KsGRJF2NsPVv1SmhMW6qwPrqpuCF7YnK7UX5uH6Cx5KRUwRAr",
  "key16": "3vUfWH6d2ey7FXjNndgLSRLQNue2QGMm3VmNbGy8D8sJUjKVw2PQZZvvz8NEtTYwC7fgDXVFPQgEK1U7Cz37hmVM",
  "key17": "2L3TrgmHoncgbQgJ1Kg8KycB5samwvBm5QGpi79CfSuW2XBtZ4VyWy5xN3q25t4KT2LYL5g9S1tjJxawkGtXySmg",
  "key18": "KskWRau6VqDgSxoNMrpd6hK9m4Ukd4B3REMRqTbxncZB4th6EDtkAE7dkZXF7EUDSyLnNkbzFjQcd6rrnvLqAKz",
  "key19": "45QFmZCEfeD6Qs4c6Kq1KGYCeRphgUc8m6vj91tiK3TbPPLzD7Hxe4vj3KrzbuSqU7VizTGFiS2M8E6NBrhuoeBz",
  "key20": "3ybnUpjUUHCDDeD6r1eG3v3pSgHoqi2CQ1du71Myd4N9PBna557Nmw9xzrVy2kxVZfFvZvLMAGRRnX9gxGuv8CJz",
  "key21": "CTEDN5rWeTzLWc3wwGAe4XvqS9LevCsWENoRsWRrSFBH1QwwN4skkMehvJXhydWsoHp4XMxtpN64NLQrc7EtyFX",
  "key22": "TUGqGexzKm6zTDtXWENaTGxedmCJMEAdvmcFSXgYHNUFCEZSpxK6SijZMbhLcJ2W5XQAPRyoudRuQZ7LV9yjU1H",
  "key23": "7TvWyhgjj8B4zpjJed6cW3wmdNLQSwkKqR65UyHvNX23D5U6Gk9NGE2v4k9jdcqTHKwtzYJ7YoiVvDbYNMm6eyk",
  "key24": "5YAhKsyLjW9Wit5owErgFLtBTkCF58AWHjUsfXsfGNqYUDPW5K554rGZzC449ThdLCC15WidvmqB8SWx4xy65S99",
  "key25": "5skXq7jfvTV4FebAbhyX7x5dLXQhnbY9yL7HaNC7xrRBQA78hxtgZ8z2qtYaQnaZBTWycfqb1GSRQ6ehSDeiTXPV"
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
