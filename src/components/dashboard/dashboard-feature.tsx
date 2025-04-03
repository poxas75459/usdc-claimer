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
    "2kmBdNhGtSMEJEfAcXojt1aF6MyvdeE7UsTXhdDWPrAzgfCxbuTmSHtzoyE8uncNKRAGw1hA2dkmicCVVFJBwjxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Z1XndRAAeaP8vzZFtfv8NsxX9qJBFtYVhNNCp23GDhN7UHvwf29XCgrw6KVe2RE5PWF6rcv7UeXEaVtgL29cez",
  "key1": "5A8r6ZhQdbtq4piM2onC8zfNeLp6c4kwRXzjVXwaMzsvsCQMgJHHKK44xsuuTFycx9NEqiRkZ515oMjiSkTXws9Y",
  "key2": "2bjbrgHUTCC26r8WpC4zL7rx1B7U7QL9a6XD2HHFznzG7fhz7YhBG4a9ztypucnVKN3SVBLLawccFyKL4Rn28qPm",
  "key3": "5jnu7G99rJFumtGTEfz4xGUBgub8Huzk5eNEfTzX7gHcTYE2x5QMmJ96EA8fhHGmoR9H2WbHbnQdkP65wqoS7CZN",
  "key4": "4kCFge7VjkhUQN7HaCZWgfqeAiwDf3fKkpu3jGxQCUkCEoeFKu3Q4HSZBHgWqGmjV6ymheCirz8kYVyBsvdtazBa",
  "key5": "3G5UnmjaHCAT5hrUrYPuigbQonF4QTc9JBmVQZ84MZT4koYJyC7grTWCDNHG9sVDTMRV1oZSNxraYgDDKGUxkZYM",
  "key6": "4QoTxpP3sbhpyu8g5LuFMPhpSPsw18gyajGUMWSeEfcgkmcWC3tgzBJeX1yvWiTBeDwouowZaZrWypuSB1yvZ6hE",
  "key7": "4PyjAVY4xp6vDndWSY3L64ZLw9GjEMEq9mD9tXwua3B3dAePwUZW1b5cqc6nTkZVbarPhVhEtR3wTpmBsBLEZd6K",
  "key8": "2kuP7dtW5A7PqC9SgS1QTru3UGRAAGx5KGN2uzCKv4bQECh7ijgMxKGJvDFSpDi97JskwtD6neUy9vn96eXqbFeY",
  "key9": "ei7FE3jHUpAmyzsmQAWcAyvcAS112ecmJp9pVvgCgMrW7gaC7J6GxkbDWnn9xscsKF8qfZr5Wz7MLMfHTuoHBhw",
  "key10": "5QgCK85drX8LpubtmNYWsY52BkwRNUwaqYJgrFAog5s7Mj9eYncBsw7111jouDS2JxKG9MoYAeEvdGrCcDhnH6UK",
  "key11": "2vLUiaqfzHbpg15PKYNTr7bLdRujdwWzsMvXDEaitHMf8ajmF5ZrbvfJwwJB7KH7qGE2joiWaB2MSjHgteKjWBAB",
  "key12": "nHzAs2q7zrWb32j4KsGwag5fJb61KfvKHAjSRYUKh1xz6z2bHCknzhPGq6bc6HfusMrGBoBLVaYX736qynbJ9iu",
  "key13": "8QncTTZBEaRGNMnTrKFWP9cawskGBKjxnsRqXsGZZhMnXGbXnWqmHyABPjQJhQtKDYhrgDC2X4Chmmxt6wkRj26",
  "key14": "22AWACXtcjmhFTpL1hpzx4WYSTNQjZ1FV5jF3B3VXYwWuC8q5EkAybFC7oLkj4tgtyLPdzUCF8eeYHd856KdFDnB",
  "key15": "3Xp2bkczbcg32cMZWTQa29gd3tMcWNMU6jrkvJrNwckzRDADMR6Zda2sitctjivvK7Tm3AaPfdfLVHaohiyHt1i3",
  "key16": "2Nc7tD8yvHyFhVtBS2kjXdGM8u8h6izPEGwGrWNZprYku6cKDLTozdg2VKXWMmoNYkJ9SuYKqqd5KPW38RWPAcuh",
  "key17": "5UutxgNAYmZc5qH44MjjKufhihMNQmTPLdCtHAC1XrqVn5bcRHUpsGFuwv7Pk3xj1CYt7u8B2tKc8AaVCTEukScK",
  "key18": "s2BsC9qWQcFPTZBY5Y8rbvF1ab9yKR6CegV5AekHcRP19AGqagXKZ9axeucDggHDSMFBamoZaTmdcaTrDwn8Ff1",
  "key19": "27ar5Q5DuqmB81fkgShyRq7mvtVomEgHo6KBDhyCXihtkLiEwkcp57bych8pKTQWJ4Tk5s8eL7Zu89ztE79rkLHN",
  "key20": "3QaVvSjcdWAizBBpT9dsMKjsJRP4oWa7R8Ft3g7WcqYmDpyF7BVbovqJ6CYNKhSPdR2RnX8NNQg25VUrLvFqBCCt",
  "key21": "5ws1Tut3hLXKaStLc9jXbpbUgpdSyH6h2a2VAHWbm7oRcZ9XXzVszzaYbFcSwLCA8LGKFhYTUmfTriZRuEsm8rge",
  "key22": "2LkpSeCjZU9RAThDvpG3LoA2AsjWW4MqV19wgysNN29hfkGp3vA4xjqxdJcQnz4fJySXvxxXeYAr3j8o5suC5GzV",
  "key23": "5uok8JKwMGVq1URkCeWBwSixw6PdnZv2oWg5wWzLHCNgV3mSJKhiAwE4QfQpz4Y8BcLoDcRUqwFRq86T1qRCiyA6",
  "key24": "2NoRqAiaBwKGx7yRbpspwtkGuuB76xHVG2zuNxqkwuLHZQxBYEytFXRYyMFTuoEEo6R6rqPYoG4affmXyAinY816",
  "key25": "45SUj491uqXi8UnyXwPMBQMmvx3tw6pEm5xPQJJQtK3iv3X7QvLyr84Dq2e9iYPrbq2hUqU7gxzXaymDLvM5Kmqg"
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
