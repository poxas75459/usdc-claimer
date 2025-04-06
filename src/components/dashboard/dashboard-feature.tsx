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
    "31eaps8436QW4DXUJxg7M2pQNKQgQ2KWT4DGFH8yYtGgRfMLoWYe8nykyL8MKoeibSXtijMEvSbzjNtDzBdexS5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37aryA6erSNXNFVTdTFQFZsJ9zj9fe1G6CP4nmwogUSpkpqTBHo396B9JHPbD6xMuB7NW5CboPDDVLsTCQwfkfPG",
  "key1": "3uRpuySJ5BgaWpnk4kR6LkN2HF9CbduM5iK1czsWySZ2M1eX1XXyMujiJRRxKkEykxqG7S197QkvFtzk6NeYdamr",
  "key2": "65VWDvDZiN8dbAsuAw7txLN9Q2LHckJnuqKyoYDad5K68QBBmaP1geJDMYwsgdmntNdGFSKw1S8pTqV7fXzeV8Nh",
  "key3": "5jBs1yagduYa6yyNgkzPrizvbfbXYtw8f1ceZTYTK33UPC3xYV4w2MBMMvprFn2TBas66Vxumavg86ZftDyGgsBi",
  "key4": "3rkKz4D6pEpfYznu5zPXtpmN87uKDU1dJjVmbgonxYVEDVRgbYZh4WYVW4MUKcoUHyHbzwBAAjcCX6yDYtckFRZj",
  "key5": "C3nfcER9UFhrGyKbs64BvNMdWpRaS2z7qZrzDpTTucNTNU2qWs7LqVEtRDcfKNKAzssthHgEj1MRWN7Rz82JNh3",
  "key6": "2k7sHSoSpHctxr3N1pdipP83vCmTiWMpmCYDzHzgwbLafVRHL4zArDEd7MKdACseHfTTrDx2eNKLQpbMBv3wfBz3",
  "key7": "X98hLvUgJRbHc2E3CwtmpCArTf6ivhXKCRGBA7JuGTsXMdTrjNhBT65jNY7njtLNnm6dfb4fGJ81xjSthhq4JZj",
  "key8": "4DduZviLDVtFdXbZbM9Uo2wCpCK5yhVPBTT7JZtNyh1ryR75WtWJSQGUCmVCsLn5QJcErTCFE3RErAhQU8DuyXEe",
  "key9": "446XGbTkXjeW6jshPYhsLdy9CNWykdPRdpXw8cFQMjgav7SAQPLPeLAcNaesAKcUzSrQEN7rqsPZ9TmRuK3DuFES",
  "key10": "3A7ND7V2CnfeE6N5iB3bGHJTTUkkgmo7bF8gbPniTUEi22DpL1W5WMaLA84gJXyjF5WGwLcuzSgFgJsnPcN7S2qM",
  "key11": "4AsmJgVrod7JXsJvRaeGtz4BVTEciK2rP1tJisnCi9eXZhVk5uPcHaHuk8ietPoxTtuLEoyHfy6qGXg8y3zEgqvc",
  "key12": "5YxESX11QaLFqs4ZN43wHAXbYYji3yYr6DTW8izMUA12LPkuQaTb2vz9JLVAob7CxmvRES66A3YaXKhdphDAxXFQ",
  "key13": "4mAE79hFRjsWzptjsxEJvwQ7Hrk9BfbGenUxqC6e9V6pAaZBUyXChBfijRzGuo2vYYN4DDGKdkXZK2mYxpVyvaKT",
  "key14": "jV4wNRHxooyfdiun5qFngotZoSZ6SPjR3t9sggUWfwAjK8U8XTYeusm3VEQ6gHKbRtzdLt6GgutLUqdRBhvoa1g",
  "key15": "4m7GTCLY2QZE7QBFVgDp9rq38WJRhMtdNAk7xbkUyLr8H8Tf5CeHdrMXQzgd9EDaWHQexnt25WNLEcvMUTGcK3KZ",
  "key16": "4bBAxuF4KaAuWKUz16xR5BFFQ3KT9kNZD7bejzoyayQGp7KP4PiyYzPWwyNajTt3CQSFdyshuMqT6h4NkS7gLM3C",
  "key17": "25Pz2HKEoHckcR2xXYa63rvtjDW7jzKnBneyFsdUgPTU936qmEVer77HTuaHYUhtZ9rwfpSRH43NDRu7pbHzfPvV",
  "key18": "4pg4zeFPN5V9T4gDMUETYkYLFMtjrmqGLmxXNm1tFh2DH2CS1RWkQ3nAuErLU5EiCbXFdtpuYbNM8ZLJyGR8y4tg",
  "key19": "29YkMrxj168bs1pX7hvj6RencKX6W5wie7gMjDyLAAZ4N4FhzJkMbk2DgWK59BrnkmZzrqyh9kbp3WYAibiMkwpb",
  "key20": "3vWmf54T3eBFEo1daUazC2QYQrLGRzgpunELUYTr2DVa9CDsi1FkQ1zfV7dJMtKYogMEXpfDFgXzefXmv7HNhWjq",
  "key21": "5XZqGbJrngShSBAS15ddZVE9xdRG1w1ZMygqoUR2zWvhouLtBg8qESQST5hQdfiB7knjdNPYzX2cQovo4nMnbnKG",
  "key22": "5qBQdCFH87qzk7ELRcRubTkknxgr9TjR26g7kTXXEuAvDnkryxWqRSRy4aQhURJHRUgLVsMBc3t4Ln3pyW3o7T43",
  "key23": "JzBF3wLt2xi7Wo7spxcRE2oxcvvb3ndVHZ91DQb8wAGRbLLeyE57d7mEd6W6XeAR2x9LtQdmT5qbzbYEDkSnUDs",
  "key24": "5pid6XoS78HeLCNHqSFSMPQEUfPqMY8oQa4NpeFGpswLUJYVWLhmyF9U6kzrZB9GJ1t6KKZZEqKbSbeNw5cvr1FH",
  "key25": "2TeFiaTDYcwrw2m69DxPpzVYHooW2po9ud1N8eym2KsHuWRajpMcMRWQxxd1xCdjyhakLpLYKBvYUTegJ1y6ZQmu",
  "key26": "ciwuNAgqF9KBYK84Ar6b4pTMM7r4AwA1tQ84S79e4vF4v4ThPWbQETAXoywpJwQrFQZG1cmLmefkXCDfn4gfzL2",
  "key27": "3ao3v9MHLqRecDN1TC9do6UeaJpS3RSK2j9yFu7ME5YpT49H721ESsRPoNnwrWnUXA84hk6FxJ4PhGT59YZ7yA1a",
  "key28": "4yQPKSJaUU49D1WtbMSaK8nbkfb8mJk4133mZed7JPszqHtBMAzw7aUmVjTGPFpo883W2YJW8LPsLemb9udnsEW"
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
