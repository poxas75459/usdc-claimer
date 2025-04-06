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
    "ykV28tXeCXvunpFAKzSfMf8a7tzYKUgKpbNebcF29dy3tWihCu9nxz57fp75ryDZiHwxEdZvQqEPk6zdUNr1nxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41RDTbL7pLvhtb49Xe1mjhyP38Ce4DEnV4WwhjTjBYfojBYstnyLtM5QXowYSAVNTE5mLLysCB4zhwXsXZmLgVKH",
  "key1": "4rKVX9YR6ywFWZJVeyMBLtj8oYapLVbeWG67MGXfwk2XLhv5M2Dxj7MQ6rtutcUbyRERfVdUsdBChzDwS2z9mVpL",
  "key2": "4r3e3Du88Yq1E7iPV1kmUJ5kutc9j9tRZKcv7CyPZrm2os2WWCNQha2KA4cmYS9RFPuX2B7VNa9khRtd1HMUZSSb",
  "key3": "4kz1gQ5XGJAx7CFmzHmj1NWJ87bt6eFbwrMze2nUT2HLCypqDyhdaUHrzdEqbYa3HyYnxEQbiw2QFC4uXHTj4DHb",
  "key4": "2mvYJzfQw86kSHfhwK86TX7gq7HpuRVU1KrQ2a2JPkQEAahJQRhgHHxVLot2DZyvYaBhGNCiqxWhpNzmyeCKGdnp",
  "key5": "3cXeCHYbrXSUwaUVmJMD8xs9TpH6iGmgevUWCLzFaUsTCGNBycC5Cz7vYoYQggsABgVDHqMW3EDT9qmBiSoqpzrR",
  "key6": "2zhEs93ck9fo4VQXFF5SjeFYm9Z5iPRUNmAVE6RnkxdmZnXyHwjkerDfToDi5qCyUYw7tfK7GQmczZL5j6FodtQo",
  "key7": "45vhawzaGmFP2TtWMMtWRkHhPuVbhG6NFBHPXhbXRrXQ6cB3STjgPpKkDQB5AdR5GQ9sC93cXiSYvMvhMeZCD63a",
  "key8": "4TY9t6ahc8W45EeES2KQuQko5tyqwWAhb14rvWTScA73HGUCQasFD21W6bveuB1EdznVeAAvSPfng7bGEyfT9U4i",
  "key9": "4F9sxBEpEUeJaMZ7oBDfk7TFnq6n874Q1wYp9kh7PzMqTk73hvGpCkoBQmp4chDyRVQEemqACokrAkdmxHu99PH9",
  "key10": "2u5Tt3DXfR6w2ikfq64Bz1xDcPUzLr72A68fsZg9fWnXmF26G7UuMUfQnh3RQqGSFYN14rU9U28d9MWSSiRV9JXe",
  "key11": "4eQqyQYGyTof6EmVNANs3opVxSM3GLCuyNphwdBncdDvNHc9hhZSS35y3QQnivka7FqsfnpnFR2qmLxAcA7312Za",
  "key12": "4VXRHSEBznhBhjEX4NdDMhLDuFSxqmKmh3p8RNm1VkWbEfbYysYJ61HgeW8zeQfoc5xnovNQTKLwZxCaeeKubXBn",
  "key13": "wXC7uQjYpNwm9yccz3ysuCFiAGEXABYoUQ5bhBkr9ozm3ELzj3VK7UZjHxcw1EPgPf5RRzNerb2odV98fHHV3Zu",
  "key14": "KDpSQjUhmeeRB56EpnuAuBmBEmJG9CZ6EwNTMqk44Dot3a8TeYKKfuQwtaZSzVfmB3JUzXR6wacwf2Zy4zQtbB1",
  "key15": "4MTRs2Lvmr8jx28KszbuNsZaLy1puvtTE4uFjvYdc4gpgPhpGcrmbtN48ebbqot6o4fPwug5Q3Ed7AMQk2JyC4yX",
  "key16": "Ntc2zq5hbEFTYr7RqZH4zEFRpnk4W6qUZkcAYMfYtGb4LaWxku1MgoG5u6owQqi1L524sbxojVeSyUbNo4wNCnj",
  "key17": "3xKk23YfxepigijPBcLHuN3MJXZWgjsV2MCSkHb83jat4Lbamd54A3UqHq52MsUSNgKUsPro42WGkauEiPacyNKA",
  "key18": "3qYAhJdbw4ABxi3uyy1tp9AfnXWJsKoMk4puiVyseAxX3eYqTX6jaE7FzFMkA3so3j4bFph8ibP5sjEhKUpa4z7y",
  "key19": "4jY8kj87TvrmjopHDt9qFRpmR1jDjpMj2NHb72XX3D79L5eTLL7nTgJrWyxoANRU4UdayHgYqHxah1cj5mg6rs6a",
  "key20": "3bJb4FXbaoH3PNVU9H42mNdyHkjz9SV96RVt7igfekgg8kS5HKHFdourt93m1UihttoVYhXZHK3BEYVAic7aK59K",
  "key21": "41zRafoWhTXJWQ4xzgJWH4khAZJdFLoScfYGNPfQjCTucR1mTCuXRU42JQweLrEqtpGfzQueKB1TmyPT23TJEMBZ",
  "key22": "3zGhDRKN7fZ18pCJfX9RSAnmY3YRLCTYF9JfCTpBdmSjVpgJmHhYBCqfmY3MuiD54m2rSh9772eyNvq6qU1y52cW",
  "key23": "2DMuNsrexy2bLk3FrsmXQv5Js5FPQZd1L5uhHQQMyu2fGCnfiV8ze6kuR27RkqXzvBMXnKpSSMCEZ8VijGskVnzJ",
  "key24": "yNbRGAVCJWzjNTQnBzNA8ztH4emxNCJ1z1abSpH7NXXVt97bT1JhYwQaUWmnnotWdahG7Knq3BznpZtqcQN82oa",
  "key25": "R3sqbSVCkbL2SeaXB6SaqCFVFsJEAR4CRT1dnof9eKgygwHMg28GPMbEuAtGmULUwq6ccdM3wJv8QhDqV2MDBTL",
  "key26": "3pRnKMP53EnxjAZpiP7hxyeBasPRjZ3CoMNaqKQP7eyuWgAAL7WkgQqCkpnsAB3r2MYVQDyLxXqRgVqUDSh9AJRN",
  "key27": "55nrZxSnasQ2geyanfYDrinUFdKBMSwm8DdNQo1tMBMCpC7ciUf8xMFoc6QaKWqv2KRSqRQukmcErivDW1MBk8wh",
  "key28": "5GaxbGTyQaYzccRELFtadf3nVpZcnC1WKqKxxzHy9tiT3ScB5xbTXF58tFySJYaoAYGRoTsYqe12fPwym1GZhrpP",
  "key29": "43DN38qEYnYwbrJUGjL9ZwVKCr9G9GVUCXM37gCPiKFhmahWfK6gw5FRgc4W76MoABTdB9edChqWhB7vC5Em1S8w",
  "key30": "3pFqCVdjLZ3RkqzeZqNsW8eGRRQ7pUv48tPaoSqGMzLTWLtUnSj8KKbvH5G8kVVMXTNciA5GhkkWLhJro6uREUKU",
  "key31": "3WghtMi22th7SMnkD6T3cE2jEWqksdkPSLq5Sc7nVZXQbHHw4Mg4TnrJYDTfNo64T8ZjkbMXjtQaQK57LjRyppAa",
  "key32": "3bEtHXAB75z939tsqoyFDxPtqVCt7fsn1s1h1VPWibTB3a77YkgvuXnhHm6qCpLpy39meJUQFWjE1UQDF3c5JRSR",
  "key33": "5FcNEQ1J6VjENAEHqpbUaxELiEHfoNSB3eyntrN7NRtixmQ7Zv52hXGbfp3K9Mt4yoX2X5iA3nRdWM9BMyLRRnG6",
  "key34": "7HQ4CUPBRxNktgdUQSsWvx6uXKSbazx1XbkMRMiTKFjhfUKdQ1R9GDGKSrbpKJzk1ZkMFuN8RzPuCduaPUHprbs",
  "key35": "anEsJemT6AswZQ84mHQWqk22THPSR9eJKfrDbKeqXbdfSYZQ624XQb3es4Xc3LtE2cmK6G2jZboTmadFwdT28vc",
  "key36": "HWvjeuqr6QFdCibkaaxQme4nRCNrjHs9vbnMffBbVZ7kUCQ3ohfAEwiTQzbcbqkcrSwto6LTwDNxjQyaPFDrswt",
  "key37": "5tmAiyGK1c9tmVWTHwq48ALx372dCyuvrx3pS6pJzmLWGF41uV7cNMD3rF49HVcqvmHuDpGawtb6JwMgKdaqu3Kb",
  "key38": "3r6LBftut3DLipEFF4UXqyQAHkBDeuCRqsftk3YtJeHW5cV6Y1vxh2dsAWiXJipqudq2bax8zixFesJrg8L6ZNtN",
  "key39": "53ZPqN3jXG6boScJtD2vpEGikK6nydoakiFG7a6TiVCsoeZovX7Nm2tFWxz7W4GykfoEEQCDcnJf7tks5PZhCy7R",
  "key40": "53fAYhkzP4QFxc2qTSedGPgbEUQ2QTVSpKbw5c4sp6AW5PsmZodVF4Xbsv4M4iwMe4GbTV8hTjjMHQQVkRLJdY8t"
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
