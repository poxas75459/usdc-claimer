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
    "5Xkd6P3S2pEX2fxom2EhYSQpGsFiLjbTrxAZ7j4aACGrfZTFK8689Fa1qE2ks48pbNHHf98tJKMGbPDQgEiN426j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39eH1oaAjZhNanrss8teTdEUwXTv1ABYn5qyHtmd14tLGbttdf9CegYuXyY5N9swsKpL3fXNi6KjEGmNC9pNsg37",
  "key1": "61BQuFAnBZBAjyWZEGXzaUfLs4d9pN4Gd2voCEz77aVzeG9AZapNv2H17pyn7ZtorhgsviracAqfS1FsDzWAvrPD",
  "key2": "5jjVECCMZHCmznStSvu1suEq77wjc1J63NTiX9Sbnmh6Dtf2BDEic1SmLEwiRgvtvscx6bGvFmjVpcKH679dbr74",
  "key3": "3dkPWRFfeGsAWs9qtWjF78xT1i1jxRMPDphKgyYLAy9LjW57xcJLZp9SHtQX4M8dnL7g1HHmxvk4BL98JhB6ZU8B",
  "key4": "3tygiUPonKo8SVjqX8tmG91X9eadHLgrh5xYDez5977akd7V1VPpJBWwN9yBKVE4u11Pgd3qxV7nXKmxT58Y16ED",
  "key5": "41wfmRny8dpw9QXCXqBAVPTCzfjMnzkdcqFmZCLJ9kXgj2QjwZUNYTGxnjvS43Jst1Wgd8UoFWUDbZhvFN2PCnuc",
  "key6": "gbCS8S2zfUdmbp9jKk2vMsSCnHZoanbs8bmAXbJimaaVXtbko5aSNF6SQtwgwqbZxtgL5aagcwsaZNMfPeKAX39",
  "key7": "5rdEJScuojJyBSy4qawXjoGJw6eDAynritUcCyHnTWtrWK34tYcitZwPZsGDQ6s5gxUJmtccL2md6rzq1ETWTMMg",
  "key8": "5BeifS3CPzwnL4BEsoeMEJg5XNQWCzGVf1ijAQpmevyGbSMwvSVCTj2od2fSCWRL25M4UArBKfQzYPG9QNnixn6E",
  "key9": "58QkpTopbYbngPtwpGPqWBtmqFEupNmMNUhti63WHKPK7BeCBeQDBcSfm9vYPqasm573TvCEaFiKLuysPpcyMjjN",
  "key10": "5nUsVTENyauE8eatdKVE2Wwbox7vTAXah4xwNfhWHMGfcg41SiA6vWus36C2hbVhNR6P8HD2r66YHhV6mFmGfq32",
  "key11": "26gsv96kJUnXoStAfbNfx5nxiGsuuKeQvuBX6sPL2NJDjup56TjvPnqsUS83wK8D6hVemNkk5822mtSPyk1L1Kf5",
  "key12": "DMJYN6c1pfumQ5D5cM7P8dRbVjo44gqV8KDdBaVB8o21rjqWrNzzvaJEu2Je9GLzYPx8gYAGvc4iRexTwgrU8xH",
  "key13": "5sDJK551bJoHpP9K9JscAFPMfnwECYzduqbj1816qASS2UuFJPrU9cQgbsdh2eCtRheuR6YnUg5vTkehuCsZKfL1",
  "key14": "5TVU6abzV7gp13ebFU29m38xM3AKF8E5ao5wne44c9hm1Tn4TBJBGNQVvuF3nwuA3wxSCeyLA8zuc6JgrDfX7SuC",
  "key15": "D3aCgMdQvCLGqtbJcVXuKH313YpPMrCTZQPjeoxGbAknskUkd32L9zU9pgYSuebjcpFABAw5nC3cNvscHfpALbw",
  "key16": "4BYsSN9EwKYPMmioiXVBw1Cs7tqNaPBD97Nk2VxasuPn5aNBbEipTvRyZfSs5nHhSGtddTPyf3Vk1xq4gGUo3pZF",
  "key17": "3mLs7fJ6LrUrmaTpvK1k9Xri1J4JysuxTZDa4QDTX81t1RAkUs7tmTYiTgRHuCEHzz5cwYpHrb4JbhA8kKUeaQ23",
  "key18": "4C93whduHwZtq1ZbGLvGZXjj5AqdmDDUygepRo66hrq4JQs2K9vCTsuAoNBtcdKSZh7bkKHot3NMP5fkufW4W8sv",
  "key19": "2xDsuV49muBUicJdFQwVKagB7RvVa3D1agfbKRfbRxkUzjfJBoDXj5xCHGLhx7WpKjEA2w7dkZCyNm8GYMpbMP7r",
  "key20": "2vDoHggaGDthWBYAF46qfSB64hMskgPYy922Qdq8D8TwLsbwjf8iafabKxjs7Dv4tjtLC92FAVExTAbD7Qq84m64",
  "key21": "4DnjJT4qDRxEqyrL14Gj4uT2kdeEZQPg5ZbzBvRawniC3qUeZjmgP12J7QQ5HN5M33NP4iwfS9ss9eVQChzEsqwa",
  "key22": "PsnitU8chR9FVXnX3PqAZ1WoaPCHGW73LvThxMT6UNgyaUjizkmeF4oLfewmYDHdSSUybXDKJNzpWQsnoy7axAp",
  "key23": "4xkvTSYhQZ7coVrXMLRUkCBFDAms4WfvTMYauKnnmzSmXi1gtXsnRauDGTExMtbm4xXvf88FxNrtTvbzBWJ6DxXP",
  "key24": "3DRPWWVnofTaZpoXVSwU7nW2xjnDs3PBJncGKi5UtDyewiofw2Pif2UUQyX6mY4Tpi9hGMEeaShZrwztrw4kMjZE",
  "key25": "3hnye2U5CrW2utnNFnmZ92AwkxuzdbZuXYcrZZiUAAdrkHpxACvMYogx8sNaXECrR5gwvUDTYZg8q45bnb1Hrfse",
  "key26": "2QXWLXVTSo5pTWZ43rmwpKJqD9pCurUxZa4KfU3c1heYziot5AjcCQWTJb3kDkudRbsPMWnaDxbtVZsgMhUom9M7"
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
