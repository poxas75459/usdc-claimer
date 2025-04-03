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
    "2jbwc2GUEXJnWWTxpetFDAoUwyKDAR3TS8qqnDU4agdJ3yBT82DgP3WQhTVmbGkkQzsVuwbUB5iM2pvT3fGxCNg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1RzuEbuf26fMa6KA1JFqgF2CGhfSC1QCZ54qgPADoiaH7axbt5j3Ju7P2pXnm81HE63nHHqecqk1o1gUQ23zYB",
  "key1": "54ofFtgLk1HBRrGgoeWYiDFXqJYeKQeT4ahKaBTztq8pRyuoUcB8NceK241VpSzPxKtoGE1PuUkZnSUsKihzuBVC",
  "key2": "5Hr6ux4Q8VV92vADKcS78EpUQJmJLkFd8jGDBr2CsJmHbS129d9B3cr7SwZt1n9punXChyxzbQhHGwtFyaZtdebf",
  "key3": "2CVvQKMoBHvFS9Twx8h2t3cUvxkvk55oPSE8CSAggLkX7stH5pRa2SAJ69HCBuinuxA9SsTgKqPLRG1JosonANBY",
  "key4": "2oC73YKo3pm8ZGXBEaiBy8VgPGLfAPeKH3V8JRUfixsFMDMt5ftk71LsyZY1rnm4e9nppEGa7ZNLGZV4CRQ5RTK3",
  "key5": "56QebjPzJ5rnhAt4kibEGPBJrQeJheuRq54YgB2a37j8SLkjpCHQv57LQujg8DagJeuXNB6DvLimCYfQ1szjUnVE",
  "key6": "6awRS7szd9hDXAJu2e8op1opEKQ1SV69X6v6fRLRN8qC8g8zSc3zHu4qVwcxMntbeXuPsoDTtt6v92j8cq4pxxu",
  "key7": "3r4YnVCxBJSYn46iYnMm5GhAsR17Aa83uQnEfCEBP3A4cLygoSP3xPMtbVNz8dSfy1jz7UFe1MbfVVCg34K1AwNm",
  "key8": "3SEisxWtohCdyeCRrPdLtzwpBdLxvi2jRtwkAWoYVygXCaRjpqaZPXuHSYsJS4vyFruZcEaNtHxWP6mNMoMe2KjF",
  "key9": "3iiBcRftELRttaN5Qy53XqY51NyzQDvparUezDKUmRiP8H8Cw6aw6JcJDomFJxerWASxJaf7L6rv7ZMYJnpJzWZK",
  "key10": "2QS8rVDn5vwSAXjTVEwMC4aqc5WTUeiqh6UM2CmPtLxLYJ2XQd9QTsjAAgRuLKAomXqaJbGGRshprFMtYqd87bTe",
  "key11": "2aNPdQP8QnTDjefoVE95arhkZ9ct353Ge4863uDy1w64qvKaojucbsgyc728a1bCytFVSej8XNT3sfZuNYgGcH8Z",
  "key12": "2kpKmZiGYmfwkmUAEKE2UGHUTkEumq33paNdDJ9iVXv68WhYaGnjywfNLezvhrqjwoy5TbJa99M6WR8ydGioZK5Z",
  "key13": "58d4VdnPufUTzdUuCFk9txiBDkLFoDbfnksm4NVowhibhXVbRz5u9WcBLznwzKhJwiaxcJVkRVhBRzW2YYHk9iML",
  "key14": "4zbpJntSTnrTtFs5br9y7nxcXJMQDfAcWNXN5EH83hyNMp9N7ZZ3sSqkJXcDNo21MbvxJuiLv9zGcH546nq8UT87",
  "key15": "3boVqtugk2E7j2rMAfn35s7An3S6MJCXYsK2tn9PvLHLv7SSCDjZJEYCJQ9iBW4sH4VsjjJCckPnWszt6kVXdDkp",
  "key16": "5NnbVMYag4KAs9UMSt3e3oKZ6WWkjCwbQXS2Z185g7HyxnQTxKh7btvgutPFwWiyHamz3TNWftTYctmSpWHs6fCS",
  "key17": "4AQMrV4RMRce2976iNmzZ3sVxxs36XEXDfLqtCuj9bEJ62TUYTEi2hbv2hAdbDL5u7ao3ShmhKRbPh1cJm3BYk6f",
  "key18": "3ikD43xPPtmawYHeBGWky91PpKpTiWRfqS8VJGizJX9uZ7wvdwUGcTomJrSiW5BeveWvg2uKP8Jp8N4zLwv7gcbf",
  "key19": "5RvvU8kNmTQxg3m29iCzDmCeDarXEbuGzgc5rFMHMBFUcGP98GLYmBgwVMGGREasi3Aw9d5tLHvyYZ84eHRLUWMb",
  "key20": "4ZxL7jPj5UsgNFBDZQfbcPXJ4hbDLY18eKMz7P3A44sBpsom3Qbm4LVC4AR9Up55pnm9nwTPq6nqF3CXb5ohhcpP",
  "key21": "5GMtocVjHux9aMtEY6USpfew4kXGC3qFGerdS2YiMBmx7qAHcWKTNp7HBsxjYb9DBjEbJUD6g8yjWBzrbiYDoFBm",
  "key22": "5sc5aFE5Zop2TXLgrC6efYRN6DkJGbkFYMMb49cNACujjobnPPjqXFPfRv9NYpyPMDvPxV1X5hV3xsKT9rgPg77P",
  "key23": "5Eq9QondPSTnrcEgGaz2NyEtNdkdnNV1Q3geprBWRGyy2qLK8PwhroBRGUzbuAvaSpMQKRW3na5TGSaz5j6Cebh3",
  "key24": "oYGBncfCS84XFTnrRiZQx5tg5ovBN8PGxK5AgbxDoJoURgjLdmZHEzmLt9cTSEo4YpjnvuHSe5ksX74HBHsKxj5",
  "key25": "49pcARbqNMELVAfweMN2s89141gh95U9xsnQNSwMfqhMsBjENNoKAnbD8rYVUumL33RNpkXhwsDoTVhZsn4JXQoq",
  "key26": "3HCPP72E9uXxazpbcLCVhWeXDhYd9kXUAPT8gXWKJDiigQBfrVxS5s1BTZAZx85fPU7xPWkKCT7zf6iLTiHKGoWv",
  "key27": "2YT9CQgXUwSUx8wJ6rs1n3xMDMX18PNDWejeYnt2gLmSsHB2PYFvvUVVAAyNfwT4mMGjWDmSTx8d5Kk22zHzgD89",
  "key28": "3ytiKt3BnbooZ4XucQLcAr6Be9XfXt56HMak2P1xc9g7R7M6PJEhi4uhw5vnaYRQx8cfwARmyBaSFkdqUq7jh5Ro",
  "key29": "4nGCLzHGXzFXBm31QXeBwgReJ6Vp76dHC5syj8M4YtyUghfPsNKUQpKzp6xWjNJpxT6FSCrYYD9ATLyyxnmgvmwn",
  "key30": "5jcNrjxU8LbzuTtuq5jd73j2aSa1miC1p9WgTymcAiHBsLhSf8z3vNY5eFxyMGLLtb1i3EP7G635nMuPpiV2Hn9g",
  "key31": "bb8ReSf54katYSpE3nYinRQ8vMKrxXq2tSVomerPQR7aEuTsqT7Gxt6c8fDMGrapmF6V6U5Gdt6GfaaZq73NeMG",
  "key32": "4wt42y5Bvj2uP73mTx8dqchJfG73RKq9tJeEWb4Y839VUHQNvPGh8ws2mDq4j9jRutpE2i7pKYDA9zXMGiZMw4Xa",
  "key33": "3TXXS6yEQsQD3wE2H9UhfDKvXisY5AMfpqvafw7uU5oU67ZXuqRcNH3kidZGshYGMa5wQDTpweseWdpbrBU4gvjK",
  "key34": "5AntHuEZmc5LJ84gqUm4FnWvuqowgxFKd8EKkWfkYqYH6XPq9Qp6mpBtS6UGNxuCv9Q6YqK5uGEKvNKujCBmYw6M",
  "key35": "41hgnUo7QNkzjykWjVEHzbm7RnxN6guDAXZgrhosEkhhcRnQpRuR7sWf2RAFpnmZES8STSzzbWh3XnrtTja5CXEb",
  "key36": "3RiZEAvgw1uvtZZk6WXawYjtm3n2wqeftHXTf9XBXLZxUkBPiua4zDcTf7vVhNfSUEbjNWhRUFhMUHoeg9xWSFQ7"
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
