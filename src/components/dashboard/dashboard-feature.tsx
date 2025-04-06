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
    "34hGTPfhGUu5cRvdva2QAPnf7NAK2SQMhQG38sqHqL7mhRFSToGcD1MW9eFkZQiBYbeN7XnmqqJ9iqnfxi4vEvpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JaD5XQHD1whZSwgL3eWK2bbPasRX5xKozq9vwWKJscAthV6cCZdbkvH5WLQAzfiVHV9Nnae6PARMen8HqgnVkeA",
  "key1": "3Qe4TiguqdoKuq82zSAiLgmK8odHLuqJshXeaKX1XQ9fFkkM11zM8dypkWffQNhW38njCNdWSLGnegysTxQ7jUny",
  "key2": "4z5C213KpqHuqGQJ91kS1B6b4hWKnbAeYP2nA4oqiGNAnQyuC4U89gzm2DfBxatopSrFQfbbPXNmbgy39dTtCYMV",
  "key3": "49pySyP9MCizR1F6fdKkU2XZL5BmfrZREmjknVo8ydU7xaLSjGFc8GZANkfZnyz4EbTiu6WVgMgggbE8wLwQZVkd",
  "key4": "56mMb6W27i2vktJoTTNQm1QHGdHSTToTzHaqrT6CYijxR9kqwQHXkDUUEuSh1FPwt3VSD8hhCZk1R21wsmJUgEc",
  "key5": "3VubSRA2xdk59xWvFWBcPu9caibyKnRsEtTy2jNs3Whmuff8xNh76UVn8WHB5jNrrN4X3QVMXrLFQ3yqeqZx1rPB",
  "key6": "3XY9YAHoqhGE842uJtqeyg43R9g3Yh7YFVydwhp131QT9cF8KhsGr1MHtce753XS8eH4MJQ6oZQWTGX3DF57Q8nJ",
  "key7": "3wcEB3NuzdTTxDNVogJQYAj4bgYkRm93TC9LSPADFkQX3smQECbreEbQgTXkajv6adCsTUULA8A7bJQnJqravZ56",
  "key8": "24KLykQuCEKCFGeZS4KiRwEL2MCYs8s8uar6DFj8BdWr8X3E8UWbchF8AvHABZwq3YhhGwPtnP4mWw5rPjeKdfMX",
  "key9": "5yiGaKVzD5fe2d7CejLtscgQReBqX9hvHsoUPSoYwxPhVGBsck6pc5bvQswDhCZ4RE2iis6xDwCeXXfTwVz98ySC",
  "key10": "3XatNVVAUyWNENAFdsKXNYCopz62Yei7h9bQ32Apsxkgx6BDEhrtLzSvn6w6dgmZcxshtATa1qzmqXsaCHqnN5ap",
  "key11": "2mPoamkmXJhYaFNo8i3BijBn9ZHvFm5RgBdD47WC6KdnSgfUUDfv7Qvm3PEGMewieKr2AmMkuFouiXrpfxBJ3tvF",
  "key12": "65k8xQGCScfowssZQaEErVQPXgcH4ESk371rckC64ahZafbmEBUxkDZWz3Yy6XGzWsdFDw6DeCUP8grqkHwTybCk",
  "key13": "2LesfusYoNEnGxJxoZMN15rtHJyJhJvdMiheaDweuumC4vFbYrdmTpeDyBHTtuYkWNjJLA5heV1ZmGFfdAezCjsT",
  "key14": "5kMhU2ne4KRKL2jcMavyS57zWWU6HUKUeZAquJ5XUs5e8NTm6RYwCLepdG5rprAL3dcgbG19rDTL8JGkcsk4EU6c",
  "key15": "5u5gWhfXkWcz8hgNNhgd9jowDLC3sJ2NUpE7guNtiRV5FiRwtkXpRJFZN5MD9PMxm3Q4gBipCwSiHaLDpMse2xUW",
  "key16": "4YtVj3aaa9ZgY83E8PpBs17aBHkmuebMSYLrQyytKcvDnENQgPBfB5hR9VMfbwTcDkR3kQwJCbqd6W2geAirMD6y",
  "key17": "2KCdvbLH1cFwXKoAWbe6YCFdY2ApfYxooA779GkbfP7FWXHjkLqu6X41ofuibQP9d12WgFM2jMZoJcxtNSeXuEtb",
  "key18": "3Uth6tuiUpDUw25EvPDjdaEuGdK5wjBWdz1hUsR28PJsVUbZjsDsg6ngCAJ5sSR9evLNsGxn5Q46Fmj9gYHdVXUG",
  "key19": "3cU3b4sztWPjRsK7zajZwfDQxoe5fdX1WNXGv5CJ6Xh16SWWPZ3xLp9JwJyLN57nAPptnuX9zwxDegZy4UmUHaMW",
  "key20": "488KJn8ujdSZtKyifU2AXWxvtgCt2csHuTKjatR6KTLJVGjrzGMp1zw3fLRe6sivy84wexrmxpbT1obzYYBQ7wpe",
  "key21": "412vYeSasTb9KSNUok5ZQnqgwj7R3q9T8na2NZhtJG3ZyMkVkpKMRzPVGM2MxY7W2wxxZUv7MUVNzuP7smYRFc4N",
  "key22": "2GobfxNdQL3y18pRDz36yK7E3SxQZwgmxFk3HDeAj9iHtDwMEBgLL9NxYZm23fcST6S6Tgc1yaSnwWXAiY84eX7w",
  "key23": "5g3Ah9g5MXHa7DNs2BxU7R1B577p331ancJrGo3R46fVy4umDPmauGH26B4N2wUoKf7Jz5289ju9qyr8zW7XVduS",
  "key24": "5EfLMGvAZxQMuvQVfr1qS2K4k23kQfCvVFA72GqwCNqnE3SVq5ckcmaS4T69pydxUQyqdTNgJw5ZuwzL1YswDQif",
  "key25": "2fghv5jrRmPCoeZjXn4QrVkzYjX6f9DoZg48TtUJACUPFV2U7Jt6VhMkkCDpeqRhXCQLqnemoMgouUeM7mFMDxSi",
  "key26": "NQ4z5EXYktKMuKegfyMRxEcwMpUkQRRabEYLiqVtVxZJ3Hdevs8bFjfkssbmKBVVqkCnMSPZynXuprmjYbAAZXg",
  "key27": "4GXQmkDaBncWtvSsSZiUk85Rrozt7Pp5SvpDnTSkkGgrYtnYzXN3a2prJNYsSyt4StWRiaso7r33tyxHdQY33UjM",
  "key28": "2Mj3kwffHPtcbjypBXQC91qphPtE466rjbEjtnR6MCqZo3LtGfPC5T9TmEpSCZNCDGpo4H9nBcp4WHTqt5f2VQC9",
  "key29": "5NmJ1hFgoixzXQhzqo9RCSpzYQ7e5fW2Uk93sTLVJv4nmtGktssqxTdGDdYokEg4b9F21gZxa4jneYyisMLeJgvq",
  "key30": "LrGeutFZS7ZASYq7MTcJwPwbZAo4u3hr9rE8pGwTuTNotnU9djFKk9aYsKxZkTvCwNAkoX26aRY5uZNq61jbgpM",
  "key31": "5wAQGPwMa5XwjGSFMYjdfXt1Hst417nLMecZsHynYYY9xvQLooYWSKar5Vq1a25FVnHPUj1pzBLCrYRSYqLf14JV",
  "key32": "4bNh5fhJ3cW2A93kbkKC3ty8pFUXAMhGDRNjWvgov1xgby3XpeQTSaNUTdYw142kRSjo7qwq2GWET2Z18RzaEZDB",
  "key33": "3Gff43hEgjgaB1APDBVqicJ94jbf3MN6afMvrej2ydHtNfgHoZqRfYDj2FHcXTd7M2VxPnCvaf1fZQtP1NDTKB4J",
  "key34": "5NbhN7ysVzHqqTToFi92QHCAQdo11mL7ZsE7U1PdQ6Goim8zWCKFKcDBSLcW5DPvzmUqtVgkPsPZEGWr73ymP978"
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
