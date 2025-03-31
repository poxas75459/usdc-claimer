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
    "2huVfjRcGyZ3koYociZqV1psJWA17YEE8L6F9vgPwHkFTuMb1TqCfkmEYHx7eUZrvaW31yxXTgXaUcoyweCqxHen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Gfn9nBS1MN8eBC8UGyWDLg99TRZFZndfmj926NarTHqouHs1CXQD29cE6qLeB9X5sgH4yBDkHSHp2ardGYRRCX",
  "key1": "2JbY64oMDfh969NAbWkfYmTnm8E2e8CjyEVMhHpMCMuMrX4BHmrwK8d6tXbQoijhoTHHq6Rb8mV3NxfoUy1cbPJ5",
  "key2": "3Gjz6Lt3NURX7dwCPWo8SBwZ1Gz7mEpTmqx5dQZiveSJKhfjsL5znhZifLS1ue7Ro9nd3EHs42RZ5sqsPQVHp2am",
  "key3": "5d15D5pUyhKJt63d94JSH1VDfTVDa8KiHhiYEHogaqYWyFgXQXPaEp6FgWUkaroxtytYrtYYTAzpSJePKVdYfYJL",
  "key4": "51WSyDsiM3jp3EmkJHUzLVsojwXfdxhogPnX5eDaEFRTdGSjECHXUq6hvj2cbBbtWPVytKFyZsrNPQ82yvj2oS5M",
  "key5": "5BFZ3q2PZzpX4aKPyWPZ5gEUxcswvFHaKHtop9afT8qBXgXUfejxWaJBgmGiGLLsVoRfRP9tXTpUjGHbnqgQtke5",
  "key6": "4yH3zP1gcu32bZ67S8z9kZakq7yownMonmA55KpCKfPkGW1b3uPo4vvGLPTbs5wPujTAYZYWbezGdMGsh9otwP1Q",
  "key7": "3hP2FhDkxRDfXQuT9t9LvK5NtBDXUNaAxLvpKxMTXmbwJxsVH7M2ArdSrbV8rZuxsk7zgvahasXEs2inTZsN9U9v",
  "key8": "5sBQUgLDYaXxBA7hxDXcPKyh2t4hfEAx3ceySu69YpLEhAP12zRAUAssZAA2YCowXuJcZKW6bCPx5LY1xiPHY2ec",
  "key9": "5yuBoE5qgqrWMDAXXta7JiqQvvSPyzuoEWbaoAmFmz8CAuUMhTzCUHpr8M92UvmuWVmDwb5uFYv5WS1pyoKiseo",
  "key10": "4BJ8fudSdcdQV8kUCtrBtSaq6Sq25GZZu8Ep9X9ZRKzh5UnprmuSQE5rPAHhCWCak2uLdu1ZUa8Le8VbQBeRXjjk",
  "key11": "4NiFLGeZkfFemuWMRPag7eGh2zT7aUQhu7riSfJmFFoEhPPVjHV8t5rnjEmXRm4U8UtqUQaAjMDmRiwzPNiFVQcu",
  "key12": "59N6HL1mRq3ygV2QrRTYonnEp3b1Pc9U96fZNbxuRecNmF3Zsbtpna3WSYbLGTjKiXEsLnxUpMBXULmK6qg3WD7n",
  "key13": "2aygvZM4WsZiKtVvoodDUBoGymfyanFc1NzzMvnfB11Zk2qbqDSEDJPCgzjd4xoAhg6oA2rJ4Z18NovZ4rT1A6nU",
  "key14": "3nRsbFv1UetK4HJiwgbpEykWEaJPvCdVwQsRccmTLNsNCoT3fMoRHSqnmNCgTk1kYXXC573XhPykT7SVBtW9wZEj",
  "key15": "2tqPbnAFpyo6VUgYHM1W1s2Y9UVaVWWVzQ2fREc5NEnAEjSmWY21EKYJVMZXZJS5kNMkWTGFbFzK5bQN9sSvUPFv",
  "key16": "3G2giKpoPAbhyhRVTCmGnoN7Z2QUXKNyCGBAmbDA4rN5AkuRB2nJA76KJjURaMDW1EU5FWhjbTmYVyntZ6CD7gSz",
  "key17": "5AZJULTvbVgBvqFRcn6jbk23mL4doAd1BhsZ2aLE6XnPfovXw48XzvLu84b7Gmf2BhsB9EZXp29uxquobU8FnGK7",
  "key18": "5ykHE9uoDzz9iuf1BimNgBRiQmSKBcxZsKCq1zTpsHKH7A8S6FmAmtAZQY1vCc9ZbUHS8u4eXNc2Au6fFEe6QZND",
  "key19": "4eUSNQdVo9yn5YtKgGSxAWj6M86WjWqUoBKjHgVNEVcwLdL4rK5waZk1u22NeasAiwrmP7uTubA8LtWGAo4YVvbu",
  "key20": "qDnnMRHLwarekH2knqdAMAP8jXVfmw6v9MESNG86fof147Mm9xBMiY7kGUvkgStKLJiuVEQ5ZfudkpXsQTgxC69",
  "key21": "3yzmDr3Tore9fS2MXnbev4C8ywmnXAVUttJ7222BSAxjQ2oMinduo8JDN9bzH4jTbodKCCAWUDe4XVD3RfkWeEfk",
  "key22": "2nwry2jCahRV7axpLsb7fmtcL91DZThQzaeho3hDqGbLSR1tLtbZE5PuedrJAXigJSmuwc1qsUGVD6CC3f6zNU1y",
  "key23": "KqpcvnUPd29YXdGt84Hac1AdRJ59zZwhHy5MUcrXTGn2r9ma9Hz6sE7hFmXuDCxLyVWGPjS3BWT2PDV1gpx9CU3",
  "key24": "2SVhAfr1HZBBdY7cip84D4zPhoPEffaGz6YmiEkTETMC4DMwUwakkRhEnuR7Gmgy3RRCBpsrC6HM2uUwgZ6kcq41",
  "key25": "3YZWyHVEYgnH2wGnByUcttRrb148bxEwMEUqix7gCxXycBZ8eQDcbZ558tpdCC5Aghz83ZNCAYPeHPuMeNjHDH7J",
  "key26": "7JFhB7DH1DSoJouoXLG3fc6BZbYwvTjpp4RWRHraft1TK6gfKw6pV29DwAVJAarYgbUxJaGvtwiVbgEa7t2Cx6A",
  "key27": "39byqTbRkgmub61p4AsJ4jcXCEwi7akQEek3DPj7ot1mJrx8aw3hVVJSSiD8NNkyfVNGoHdwCbDNrkKsbj4Rzdvu"
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
