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
    "485VFqf6a7UWkaKWCFntUabsFnD8J9KHsgByFMoSWQRFeKxjYHve4eBBeqqS8kagzaPV7Wjuz1fMyFdVJphVUmi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJNU8Mc93Z5wKSvfGk8Na3xutJKsB4qFVEJVSTwx8vLEBNxGa3fBg3goyVxWMRLKfN9CMnfLRvc1G3k4wsiSPDD",
  "key1": "2C7DX1fWzv3w328W4UYcXWejWabBd9SP1tZeNV4oY9nE39MqQJxNecPzRrDff7z6pZkPaWqNWf4BcktoTpUQmy79",
  "key2": "HFTXxE5mwu4WuimMuictF3gYwg7LMCv7UEec88faJ3oX6QgFa253Wdt6wpp8jdkcrsQtKpNhtvxhBtzPt1Bk4tN",
  "key3": "529cuxCrueqtuicUrMNNBXZBVUzoiv7CLmuNnCbnMYemASJiNcwApjEMsU5jTk7Mvr8fUTczoV1qskiUNTnoQb76",
  "key4": "4j7wmYCbhv8sxZpw3tne8KwkZNeSSVRa6hPHpL7CcjGDLvF7E6EPSxmHbmcx1iWqiPJEj3vNSANXbdnmrejUufJd",
  "key5": "2LnrPCALNUVE72V98B7uzf7AWAFLsP9Ftm4UT6Z8mo6QqJZRDjiMxd19buvmd1iUb7y9C4XLyi5riCiJNxQ6bbYi",
  "key6": "5Vcnn9u4ADBYYNAWaYi9taWQGpY7Yji7vA7YrzhEP2vEBHVaWc9991CPQpni73Lh8V7vFy7rqcs7zrRenEst7q6K",
  "key7": "4hnvySMRCRkFBuoBuhv8rnB6oB5kbmdsFe2MAYf2xxLArVsSh22CXYjtaBSUDoGSFzhHAdfAZR35okZvWHJtPCwC",
  "key8": "54wbYwnYkn8jKfsmPc1CPqe3zA5Rd8vm8515ugwxHQqzMyFF42SzpLCSzdJs1keNi45bUZrVtKvYA9aHS2AEpb3Y",
  "key9": "2LwiD8L9ToMgJtVLe8LMTAoK43PnrPpPvvigo7ZXcgxU7o75iPa7cEWfzYgYt2VacG3trzf3kXRxEJpGFAwA3ULe",
  "key10": "oVUNA5AJ3bnUKN4WV8GGwJF9RjiWPAvFTTKKkY1259r1MEZPfJzvvAjNkHxPRqfAughfUvLbsYPAzeNM7KMrNbF",
  "key11": "4WZVWqamAJcxUxa6vDLbFcT5i5zeg8MJhdNCR3iv6FoBjmzxNpbEpwzYnQpEhKFYGY5x4nQxrmD2EBTc4DnHUBj9",
  "key12": "sNt8kB1KHMxg1Z7uEYd4cxRUVK8y945fFDEiXy6KcmGB8efPx2z9UDTCurbNXUrnPNSJ1nWSjoiM63d5eERmKUD",
  "key13": "5x88aXkMV2QnNwGmdUgdZU768U31b26vsjSuZ9LNaHy44V7kGCAizJHJ9SKdAwFm1VuTVX7v6r5yARDohm8oNBjk",
  "key14": "4oWcUFaWCWqidLk9vT7JLUrYmUnSbcYdpTMsBeucz247wn9mUu6U3u3oKkVmCjazdTBAjxsqSfnQRq4rYn4zjrCS",
  "key15": "2ZYuiWdCNERmQfPkWFUsKfdBLJUMpsmMe4TfjMveeytwpk45cTgo1ijcw9fjbrmxKFyStvw94LJ4SxWDTQxQqEYS",
  "key16": "4qtvEumdAbvpDqdHXzeKmS6CFb5WT1mGFWWDyAUHhYqGhMVF5rDGQtVGhV9zofpzbdZaBvnP5NsAFc1bkLs4NHbQ",
  "key17": "46u3w2pEHMnehzU4CMMEibgCWNXmhzVW7Z9SR8ipXsMdp6bBP8zXmdA9cgfXqcqmyAoVrzqQjNjLBmCYaBqtAxLM",
  "key18": "5mGbpsKadfmd6kPyJRwphsACgyjxHU6CJ9aPhspzGyrQY6GiizoWs9fTNrkKZjWTELkA6NJtriB2TavS5uBM7Mtn",
  "key19": "5gwjy6ksiEkaTVMfqYAispHQLtfRZqRrQngA16UsTpwUKyALouNBQu7uGF4ysMmYPn3VgsHr5D62NBKFNLtuvHKt",
  "key20": "2SVsfXvxah59ASpCu45BNU2w5rjLHV2qZmc2f7yPKHFhee7uFDSThmMcfGwMJM8FYoDjhwe52vBdSXS1CScEV3AQ",
  "key21": "3BczeoYZFumKMPGPTa1qUT2BWeamauiQhMH3vTg669Ti3o5pJMYQj81qQ6xJmTW81dsJgKGjPQtZA5Dji5E1samy",
  "key22": "fpEv9EmV4sj1YQVwRybTeBpGCPL5S7tbqXbM5SpDtvqFdR4Zxgc6QVBbBy1JsgAso8apDjGQPDLeQQQ17bpDRn1",
  "key23": "5jE711XmCRYL5wtmzvCSWfxpY5NaWSjpQQuvnripTbQwLhPt51uCkr3NKs9mc6rpwZWxhkUTkJYVk33f3zxXTMPc",
  "key24": "4xczQnjEPA51rCTAXiCXRHXR3VXCzbSgkPn4911J26ELmJWeys9zHuVX2N8ExhQsLTTUks1WqCwApUEu23rU1iho",
  "key25": "hmyh7y4PUftpoGsUjFgDyX7b94PD2aCgfHTNDqD4tStfXy9AWmpNPwPCTj25wsVj4juu5b9uVsPugf9UmxUfXmm",
  "key26": "4V2wDD5WWKPrdAfSaNiP8RPgkXfB5ox3mxXX7Mgteh5GC9vHyVbMBefxUMhnwWuwcVmr7dBhuJtU1o4PvmGFK255",
  "key27": "5jYyZMcxJJqvoSEt6pRpbSESmi4dxCF9AZwoHDvW9nbGf4ba6Qz1h4GQEv7qYPZEHrDm1Hk4ArGuRpy7b8fkNW1b",
  "key28": "2me2u8bg2RUGmLQY7xcmJHdLRFDigryinUDyd2EfmfyCExo6KcfybAuT8FbB7PwBXdRtcYDdYAFZbdwJaTMMuB2S"
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
