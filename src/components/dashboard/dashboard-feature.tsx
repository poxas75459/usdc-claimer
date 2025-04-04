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
    "5y4jAkhM4WWyNz6R3U83FuQ7qufJiYgSM4SUYTaHWDM8W2TaGU2ujUmeSdnqquV7gUiZiWmJLceQ5j4D3ZJNqY6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Z8tFfaTcCRgxMQbYxEsboRDrFYuS27WLLULMqiyQLp55YEy6MKGpejtXYQqtTVGeESV9sfAMiUw7qYYDwcooA8",
  "key1": "4omnEmA4u3R18M1MHDTVMfncvn5kbZYLHme1dwN7TJaa5cGQsR6JXpaMEiFkXX3xM7Wjyt8uVUgrYFskGUsLbuZu",
  "key2": "5avTgJqNC5ramoBC1FSD8yhRrZiKTvtbGXRX5e6sKPGhHMZKMVRakmTYN2knGiDv1nPkgAHMwSJA4DgPiC6MdU3r",
  "key3": "2XUEfj6ZTnafhRQSwz3mcNmkG5piMvzZyJx4rB1QjkpjTBT6JWKZ5pXFLYm7KiKagpPMNcA7LS83YrXracGaGTFN",
  "key4": "5rAWQtC9WFPKMgFBDLoqS32QzuFfBiKCwoZW3Qm66NeuXEsQMjTvtawb2KAo6SAKEVeixG4dn7B968XVKstotAmS",
  "key5": "3eAF2tjiphLi5A39L9Ax3Sjwvg4nResQeQhH6XZX5zXtDFEjKyEnz2632Vwo3LMo1HwDixBDDaxWv3vF9YtNc3R2",
  "key6": "5gM1iVaFXHS1rYUaPWRSsup3gzAPZbD81C6qTGpKS5rAKE63FC85qcfGRAXJwbt8pLf1G1PBWKBBhy5wu5jFgGeD",
  "key7": "5FLp9zDZFtEJxP1SXqCiYmyAETWCsudZddxvvcWe8WeTKRHmYbUMz1DEVx22ZCNFKU17XgKicU5EH2tAgNPRv9w",
  "key8": "3nyAwPBPXTH2erMwjQdZnag6FmeioU5H4TuKJp4cxLt8uhdA4jKiqZepmxVXefLJUeQAYGo85f2twAkNvBYSJCAJ",
  "key9": "3XTDFzBnEeuPCijiqLpASZgLitRJfw6hY9Yr7eWXWLS27hutcHcPBur4Vsz88j5aKcX6gTLkvfQbfMqXRaJatZLs",
  "key10": "4ZMdm7ehuYpWfx9Z38z7CPYUGDHovK58fQvyHd6Qg86WAuPtrvfzaZJT8suq7wru2XhfEoocyZwbVAKPCpLzGSsD",
  "key11": "QdbRjcfvRfCPSXxb5N4C2uF2mj6L5LNTcVbsmiKnGVEKfYEb1kUgH6R7J3cpe2Kn2kZgS5krMFehs1nv7Co16Md",
  "key12": "3MVQjnu1xVY2XMCav3FaUc5fG5QhiJtiDZAYZr8So5DxrNYGPSHx6fyTGcRdcaDr6bYFB82ATHLFRwb5nq79MCWy",
  "key13": "3zffESSfrSvb1kduAq8BhpCAY3MuGBqSsNSv557cenXsLdy5hUP26D191xnd6mhX8EQZqgv2R7gV4nMLNqkVcsgZ",
  "key14": "5bqFT1qfxcDmwkWTZf7zv4XxXwMxbNgRf4QALUw77cECzxhDig7tUM2uECKcQm1oH1HM6H2jHA2E2CRQg1kbU5Sz",
  "key15": "2kcNAZMxUfvCG54ZwYYneCdzvRo5DUSdzkGEMhxbST4QHzfDJ2BWALDuD3bosiSvNzzgg59VVgRLLAkV8hnfwrgy",
  "key16": "515tM2hP2YwUJHXmWoATabpfvcMNj8rpbf8Js6oFq7xX4rJHgGXutJuX2CdbuMrXTEcTiS86vtYfQMvJ4bE43W1r",
  "key17": "4wWEJRGgaphBHV8UWEqfw3rp7KVjn1HVugs8e5vd5EecuH6E9xPR2UNej44k6yaxG6xNruJF322Hd4WrKCXZK2Nf",
  "key18": "2XSxqt8yx9dVENp2XmnrvETcbaW4RzhpAue8NHq3L8ERX4ARxrDj5RfHrKukD3dLps5zgKXQsvFwn6rTqVJgbMV1",
  "key19": "2GC9XXhTogQQdChk498SJkmJePrXSRChMWU8F9dcpiUL1J3Y9Syu69zDDefHaSuvUCD6PnBEvFThfB1PBNR3eFtP",
  "key20": "3ubomRj75jmPf8a1HhG95tKsnEvwEstg85HV7xCMBh6zxbeAi7PZ314vepeXPoTTNUa5Z5xYd9aj3Vw5njDL1gs4",
  "key21": "4wNjF7Xf9J1SzV91yyTYH9yWkxHtZ7HzEvtCZ6ary1ECBgv6ZKuDgXaJcR21L9qHdVuyeuSvMCwjtUjrTvZAJ6Y9",
  "key22": "3egkBBZJMcXSC4bGubP7tmckSWckZNKZNzVWMNhFBQTydUnWTnDsw7djhJdZe2dgTA7meJgASfhJNVb8DMLJwYi4",
  "key23": "5Jq9EByyTbz4mTH4R5nnL45ekf9PVWG7fNwWu7ApLu4MDkHtyvdSLcoPUNi9kKBfoUVbVJ67AHHATG4J6Az4y39Y",
  "key24": "4awDy5FVSzbJxZdKczNvG69pQkFaMMiME4xvpPmJf16Up4HaGzb3q4gdzYojnSH7moV9DE5MQaU1ffDuNFUu3Vbo",
  "key25": "3nUDu7LPAKsUf9n4kyGNaQhajoc5KZAiZkVNiyE2RkFc1oVatNNnL1XrY8P7KSCAucP6SPkG2iMaw77vmuqpzAma",
  "key26": "3kPiLRFMEmovrJzWmWc2t6YZSb72HDgK8KsHM9VzmQREVfrQ3ZbKW8t3LetTw2MCrbMP78m2iAfDPuwEghWy5EsR",
  "key27": "3QdvMnGiqwaqceB39gNoWjAx73rCTHzKjYmkd6JLrbkYDHqH5nQKcwYXbnZbDCdzd5j47QNQNFSmG28X2f5mJZZh",
  "key28": "2DqxwGUkeDZRmN4fnfy58nofgPq5HdzEmo3qtPLNLNNXpSR1txEBaaPa3iCRNACBLshQaC8ELVVwSxBmyRph2tEs",
  "key29": "3YR8sWwwh4WXHFV7h4sPb6xCidz1SupoGxsRMH4CTwfyRVpNb2LzV7TYDitKgMhpk7eaznbDb34E5iGEgJ2VFDCZ",
  "key30": "VnCsSFKMpJcoHBjSg85NaajtSHRpW19ynxFCgTN9y6dK6U8EP7kNcmJeEeKfoGQv6tQC2GRmSiPs7m9CkNKYti8",
  "key31": "4daCoTboq22josdFhtbQsShZWBgDW8CNjSnHXiyHn4Wh6cmh378nuPhp4JcZKrZZGBhvHQq1BXQRtMR6Vz4N2gRx",
  "key32": "HeFEN72wE5UftTtj58Bu15hSJue1RaAr4erWwDAqddxu7JLeyaDbMRAbTadkzmaCPFyfvWzp7wy2gnjiXnhCwLq",
  "key33": "2SYZXvHGyoq9JLAgreYpcDDSfbHGDb6zQ9cMpTNPLUBQ2F9AWtczu1cBWEFeEsKNQacQEX1vDorakVPowAHTPcm8"
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
