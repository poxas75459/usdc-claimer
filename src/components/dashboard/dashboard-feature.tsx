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
    "3Tf9cw7FEnJ8KPQRupw19Xo4RejRVyZ76fygTQ6X3KokqRYFZTZ8cvAVKRTpzkghinH6T4UTmuBqvqjs1BZTi1zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdZyXBLCzJFboTmpTMNyHG13Jvxb8ifJ2X7iLhbshQjzbRbk4syjXkgKqnnD8qNS41RYgQiLS9RuiCqWgn89EP9",
  "key1": "D8PUczbzfWMruq51BUq81dJ4tvvpAomFSFN3rS7tKRoLmwnpqj98eCz9WSbzFUAMTktmebsxMYnfXHAAjRnDZRu",
  "key2": "5EVzwMHpZdiuKanH4SRRvNRTibYrwy2TZnBJrRPApZjy5U6rZKsvcx82RFNUXmwt5YWcuweD2jFLBhBSZaKWYvsA",
  "key3": "3xU5XYdJPa2tZzjcAmkeKf9P2YdgjiZ1B7YPz2g8mbsWPhBFZpBxseJqwNrJf3TcHXPJggA35ZtrMN1v9JK2Pw3v",
  "key4": "5NYZ4kBC38X7VuC4egCvxrkTggeZik4VBF21Ja5U6pJsypkzfC75KR9xdnNyM6XirhMD5T7vWzWH1aYAbFQ4NRvo",
  "key5": "1PeEc9TxBS7rJFasKgN7f8L9HiGw4MKAgfPT1m5HsLHnaw1fT1jV639X3XkWVASs9un9oUdDwMjPrcoGehoPGak",
  "key6": "3ky58uNFaq4toa9V64z8r6CcmSsrMgSpvNhma2p1Lm2WEuTKwpABvjg7XfG74D8sUdcssPJV2r3y5uDs3L2q9S7D",
  "key7": "5tBEdkVxb3ZGiJAZyabxXwXBXzEbGDKTzUC8uWri5Nr8T9hHT8rnUjY5HTYTtQWVZFQkRJLYrCXKi8QwahZnz52J",
  "key8": "48UqSUVmZFsJa1kY5ALrnKmMvw4o3gPXaQVWD8MpYEXb79pj45WrYVXFCtk7jFEuDfDULfENErfCxKQnETV4My96",
  "key9": "2DTNzLMbVLAgEyiMcJnE3PkfVGaq6vFhFm6DkreKfBHVNW8Xk2Vp6HBYfwHTtp86N1YhkcA5LnEFwuzLjHPheyYq",
  "key10": "65KCs3ubXMdbiMuUWcVS37xCDt4Ntg9SW7NQ5iG5DdHFdU8LqUeNZL29dFtaLJXLNs2XJks81dqSgjQ7QPQBNwsn",
  "key11": "rg6GNmbiwJ9YGBDVPk4DMKdUDUNVMPcBZCU5KTmVGcPUeUj4XfnzL1EEWmLYmysLUfceU4j3zzuSuMJfnjRdKz5",
  "key12": "2bzSdsFvj2QwYY9RkM52qPTV468cxMMDiyJKmTm3UZ1UAheMMAVXh71rX6xddiBfHNMxqPYRTXZq89DQFM85EsVr",
  "key13": "Wedy7i8mCT4gNR8BKcey2E9J3N9VKGcf5ERy92ATBF8h6w3gdDdzrzAj7kQwpyUzUtRLxJVGaJuYCTht9myG7LG",
  "key14": "4V9UefnpE2n8wWwQwVADKxQTremqdrPKQvo7cmyunMXs9cLBTgh96fA8iVNxi3wyYjYL3Rg2sTN1GKmJeo7DnAZ8",
  "key15": "RLWJoYSXeAb1xhNitJyitiTZ8UDBkemBzkyeCctnymjJ9QmAusP1WHpyGbVEcQCa5gUEge9srtUyCMiurx1V7fQ",
  "key16": "2j28e5FPzm2jb8Y6rDujxWtRUMvDbaPoP9p71SRzR6ZxgsRsJHhG7bh91GHVrBWF1Qc2AWSCxdikdqyFoTYeovFV",
  "key17": "2mVrcwtBA9zWrJqjMsi8M4W7q8xMKQBsMZQUru3Gmu91LHfHAC1KYqb8N7ga5ZHh54rN6x7MEsVFYc2nK3PeNpka",
  "key18": "2M1LnhTRSG2ejb7JoEucVChtX9naaTU3F2JVypiiA9bnJwYDkegCBqgDStNEsPzLwbVs4q8yhHR1C31HQTXxG1VM",
  "key19": "2Vr1Nj1ms6pmcTP56L3ZUoYCeB7AWfFePbugHsqxJzj9cBgQx4BtjtiYzuBZB8PiCAKm1Q3FxGwuD542AkjvRK51",
  "key20": "2qkz9cHFsyqMsMLWPQfKL4QKky7pejSLvKcZa7sW65zEGT3FuCkELFB5b8uzAwdMGTBTf21jAvxbe5iq9xbM5cPZ",
  "key21": "5uqvesuygKvaJKQRMTCwVSQiZxDjjBWMvK8akWsZ2RgZ3z7g3zzELg8mEaZUwmt8vk9kcQVRNkgBdvvXF8rLQQVQ",
  "key22": "5E75cScE9oPTcFNVis1Yc39DVtzf81JicGQJjddvXjKZTfw1rVEwZGPhJuMbXg3tZGYhReEkX7f6MQzaq4nrrNs7",
  "key23": "4L9V6WWQBNz5ZBJFhFPz4brwu2E9i7oEHBS7UwXHPUWhfZL1kkMWT6uqjHT5WzErmE32kTXNa9YuMYWZ59eTofGA",
  "key24": "nAdm4oU1GWAAouUomYY1fdt2zSqEktB7Zczsuefng1oGy8MrJXs5UeJ3nadGJU2Em56D1fDCKs75MWpnHQmthBr",
  "key25": "3cKf1LiBHfHfBnxxbFMk3ZCLdTteUZH5QBSAk2ZE5jFRc1FP125GcVivLmcRsxUBudrFqx6LYQ9a46xgDWhpXikj",
  "key26": "qZ9FYHfi7qDpJ4qajJNMCPWNBbe34JLF89hR3d86hDK3MRRaY8xABHwe1BH6mAkNXZyPVASzxbUFTRvTnJN4SBN",
  "key27": "5JqDzqZepPvXrd4gWQ7kvnUoLRGjXcLUu9xJHo12DW5pPHFJ1P1SSZTDEVcbgTVkjbmN3M5CcA5vhGGygdtbPBoc",
  "key28": "2F8tbC2gPLQn1XrJzKpdEK94Rf7RuceK7BnQPZRxVi4WjhdEnj8AwcpTN28STNYrBfh3i5X4gRULupEWvG9EwnF2",
  "key29": "TH9NAAH42KZf6P4tQzAT6FiLJXKC7kvY3heWkNkmBaCsYsUKEPRpbsAwJWPwBaXz7TCraHdzNZ53VPemGxGeRmG",
  "key30": "9XUzwpZv9R951wDaofzJjP253pdP3MrGbft7P4UKbGnoP7XjNagJf9VTbjBjc9gMQwyG8Y97XdEdJHaXcM2Mq1E",
  "key31": "92nktBRNbnAdjYPhVPeK36nempVYKfcdoMWBGiXiobxVtiYiFf7pvsPAYRWwJYGs4pTBxAnK6GDvEi9QnzKSXVD",
  "key32": "5DkFfLwvSH8yXWEaR11hJLdTi2f8QXA141jiKHt3kvNANgvV9QQqqQabVEeVYg4X5YqHjQGbH3B3GXQDk3YriVeo",
  "key33": "4ua9oHXXFsmsK3GTX2oWzjLKoTCB8twewKGF5mMYm4AnZda6gK84jySR3Z3EZuVX8otycmP6TfVxonH1795Y99Wz",
  "key34": "zvNbicR6PsMcb84nmZwsiLEze8trfMQ7zBedZGJMFJBm2c617rZgKSuGPGjZgwwYg93SD8gb1W9EBcgcWhgaahT",
  "key35": "3u7UGDvB7KhamqbMCmXV4Lz25xzaEAGewYLr7BwZEtizGxKsYNDbncAvQ1s3GxhdYPb1io8w7EnLUktnUJyCKZUi",
  "key36": "vNs3PARPFyksJQHGctJFcoSQds45GkaMUCq5AvLzwV8T3TuFE2TeeH4mfNF6KbFg9eBvtkD6Pn4V9L5gkU5Tung",
  "key37": "2gHqGJynG4oQTHCabaeYUZY2tgoTBmuyr3RyTESPR1aWZAnTexZb547GNf3HUYK1jBVbMRystvz3LNz695c4Ri6E",
  "key38": "276p1gf4Gfww9gVBNEzd11jELELcBsg749jUmBRY21QsSYEf4FXJLnGe5h5tp39dDQHaENED7oKhg9nKrZ3cR9jP",
  "key39": "4sn6oRbcDaGbjuX2hG2WvGfVpBiuf9B21fiZQxFFaWPbRi9vkmvkHAhHjoofJDjdHXfRVaAQuVhXjFkpTX5DEEcq",
  "key40": "5BykvfbaexwYsztugzvTywvUSZpyDzRZ5DxmpzvSRPHvxd9dnJaAhkjV3YS8cF1KutL7kw6qSWxndtAH8s5nm6d4",
  "key41": "ShiyEpyVKQwNn36Z8u3CDJxxYGcXg22bByrx61WcSDYyKHqFbmrWirCzS7HBQ6H3FtcFjN7PV1XqxkRNjKGH8Qj",
  "key42": "3Z1LmyEupaqA9EWL2uKpjAMf1xDFASTRTLvjGE468uJHFGUYH62dhPrkUvXkQLdXcVkBfFNiS5kygtQHcajzUCSc",
  "key43": "4XHgVkyUvPVvYZk1SnGp1ftStR2iEQJFJSwaNBmRet2SscHP9GKKQiVG98vTCbedziMbQGnWSHawxQZ3pZgdRmiW",
  "key44": "E6nWH4vcnALV3bQSfMYAKKUrk5smuo4SBiubN74eCCj935yMSsQEVYNfuAVdRp9SX891BrBncEtzTyVqPbRPZVP"
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
