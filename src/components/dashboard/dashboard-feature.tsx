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
    "3wsk8q7b182dZ4RLHHXLpTLHBR2wqddY6BZf7xtvQxkyJo3y3cejpwhBkbVeg8TSQ3MLeduowzBsfVM6PtdHHSk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDFu5KvXzY8HdoMMvBBL8Yom9FrtGjPk3TWX614f5a8vfP75GsbEErrrXi8mfNizYwZC1pSyLLFL4vp2U5v5UY",
  "key1": "JEErYYvhwGvA7vDYoKsBY5NdYKYeNBCbAUbm4snJoyzePBagwZKY1RfPRTz3Qiuq8rjXSChdByxML7fqjcYSfJP",
  "key2": "4xuGNvMrw83LDAHLuVJBYUoHmXXU2mtiogrwYmhc2C3koSFbtDrStYd7Ky34kMPCzsRpjPb38iRy5o9wAp8EhCRq",
  "key3": "3rgGoEGTGFqykAjYdGPK7CkbnEdSnkssXqziTaUW8cS1KJUvpFdd3jscDdMq6ENEZFjKny7tvDhgdwcH3KWJfpo1",
  "key4": "38grTpDZQYJQzHpos2Lkmuf7rxggHKwzsqgkXmXtNrfMBU5qDot6htJ5sLKc4xbUjdvoF6CVpxSNSpbebp6paBDC",
  "key5": "22t5uxztYKQgppt3dyXWWVNUs5p3vytyBRzidLuX1EksGEqv3Hgq1GC721H1Y7xHB4KMWm3G6Naf9mhTXjJUcRdZ",
  "key6": "4dk3hzgZghtZhkSqE1SMVYjg6dJYS6XTyrEECUZ21YV3sPmTnKNYaLYa4jAkmfpt9mdWKmEBs3U264tYhGRxKj2A",
  "key7": "2uMgYMHTMoyPt91zPyfqsciaxfteh43uUNJ5KQZJuc9XqSN4WAMg63qJrCJNjqZDUp6AH8FgQzsA2p3Y1DhMwdfg",
  "key8": "5Yyxkr4hXM8Rm4bwE57fBDYYQAnQwyg32LH8r45LT8n1tFBuriUiD2njnvycjWJqE1wDKJc2pRym6xretJTMbkzY",
  "key9": "5CicrrmNBs1FGzsquBwdabverJ3cSeeUAJ25EUgDsQsjjd2KwG5ixfhvzGsARVQW4R55u9kKYbVdrFHGSbHRUkiE",
  "key10": "3G2wXGQR2e1ZUnfvjRgQPQU1TTRD8ThkGmKKzUNETRgJhJkMtYGLU2SQbefapz5P3K5SQFV1iaNmhGmgEjQL1PWe",
  "key11": "3HSNEMS6dtfWZWFcK3WsPUUhf78rWsGocTRFntCAcpQrCMjbyfui4MkaQGi7zuY6XZTY8TGeDaAfZzPsbREBSbyE",
  "key12": "2Amq93znqn9YZ42atQCzPtW96ZZn4TR5qcaEg9dRVx6LerJjbLgksRbb7VbWYbjyyZ3zrbWWUCXHB7iaa4BdCCEZ",
  "key13": "4jmEXRoESgy7HFrAFbUfWabco63gdMQYDCmreucsw3oQ6naLJXMKjC38DFcN7wfw8kXyoE1exJMwWrJVec4iCqxB",
  "key14": "5yTNa2hKMNkdR2UwspExM4MsCbRTciVaSMus8hzNYXLcQFgx35ecwp9DN5W6aLPkF9xCbd7698tXHPVSBo23AU9F",
  "key15": "419xyT6AMR8zwfLw6N4f1KaryUt6er74Ni7ktuoYGr44UpQa5obCBbrFbZvyuu9DNMwcF98gddzEfkrrAPgHLMpp",
  "key16": "2DQetoz2aVE2mYxbTpoHfZHkoyeCsruMtBXuLqMK8YxZf4paZnPZceMU1iUcuMMLB92VmJqPUAw2rKLcyyuCLaAE",
  "key17": "4VJMxhwcG3L9SpwfkhJqLGZBvxwLuejjPHbov7XkDgZ6hNSFRzYMwjYQopkcpAaG2w4Ty4hqYTbYSs48DraaBahc",
  "key18": "4dxsUF3HwtLB1a8aHN4U7Hrrhy2rJXs1uBsEerfM1MZEJDZvpqjEgmi1rdWdPUWqGnN2CFqGgaz7W6mEH42JuWdr",
  "key19": "2nYRUMiHZ32u4oGH9Z6G7oQkvmnGyRibAkMqPGtx4EyQiE5at6KYqVUzLv7nyms9Ndo7EFBd4naXLybZtcaVzMLy",
  "key20": "XdhLA5qWszXfmnr5f6mVd1imZyedYGyo9JaExCe5EQbgqpwL1XsnttsQVbsjTsqDPLag3U6vN4DPeJENxB11dak",
  "key21": "3ETGbMaoDtiQuoHEWsjzg3AaZM8DYsPR7onHeWEZTsZEVYGNwpocbzTfTwu3EpePyQkEJo8CYSsDhMW3Wo1XQ2zw",
  "key22": "59yEUyb2EwVTkjZhJ1DKZ8AbJPRd94Z8Vh4bhwUsqGeyMt3oeiykG5rVT2M9mi9V8KyHh5P2Nk2V4wqwGMEYWDiu",
  "key23": "WsaiSXVyQXEYyxKzQsLqpe4XZdMMrUq9AoG7t5nbwQ8CUBn2ReJoEG7eXyvcxU5z39UGoHtCMCCYSQbrnG7gBUv",
  "key24": "5gA4micPxVihZMuHzGAjBDiBmovtK8WdRPP1DfNsEvNWgHE8rigvYgG1toigRAtWNmk3mBxHDd7nwzXGqj4uPcMR"
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
