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
    "39TAE4wbXpry5yinz9kSE8VyJj1MRsJuG6GGm6DY5jhRt9Ct8ckk8LWhP52SCE2L4gZcGsSCS3ddTPz8nNdgpRWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1ZrfZGH4LLn4AXKScXXKpnLcKP43Z6cud4PsUtRFrsyZGo2xz77JgCRDkdeLeZ5JeipXsv9kXepim5GxmfXAnA",
  "key1": "uCussMrQhFaktnUc4pgDNoRaXbCipCUoDQNyMTiGyVPve6VN9nvHFfW4XxUVM1u71xGWVgxDoqNtrTGuFnCPwV5",
  "key2": "53vHbUD5L1T1D3DQk3DU5e6SwAQKVqq3oTX71q7stRupV95KAnPQy5KPRcn3ZnYYuX3svbfQHqe7vdc3cEZ4i9v6",
  "key3": "46xUUGfASUR6heciG3nRRbWmqPNxVPTqNoo699zGQ8VT4mJLFuMx5Y83dWKsrvhAfFitV2szDWkjs5v3xqWpWrwd",
  "key4": "5xurJBqZn1FPMrZCibNCSXBL111VoX6DFca6Vyp2qtgfotzh6dYe2DRpRv5gEZxiwGcAR35QAsDj3US9jSzpz65y",
  "key5": "SS9cwr3KTMqwwTcMYmP6xnceF9LVgsCixie51pyuvbjGYH2hiwAVYA2gXuxnQCtZWqkYVxvxwyY5UAkmxjzFaFT",
  "key6": "Kdj2YqcXUw1eoPyz8h6CwovpvnMz4Z1QFjikFQckm5j6xVJ3B47nsEymksh4oeUHi1GQVpgHuPk52G9nvHAwJsW",
  "key7": "3hqppLvQhuiFjKE2Nqpfq73Ydr51GkUhzty8FNhQCi5xM7URcfSmRSzwHNv9MZRm815Zbg5WTDhHyaVv11TB4EmM",
  "key8": "3TMTrA6UTsgnUVmhXNvYXvUZhYJRbzJvxn4bhy2VnMhiKouKejU9RLeMa4taVjVoyArXkEjUkRmZu3iPyyTgYTrn",
  "key9": "3Nh6hdYUEx5wQtpAoy8pi79Y7sDPNGnECgktgdNxP2jaAb5eTj2hb5Q3fwN6VfLVEqE3S2rCCRad2PdnAbr6zuAA",
  "key10": "34RKU7Zoo4yxdqCfKrNn5KJgf6XQnYeeyg2iGRnxj68nZAapwsUyqDdVf99Qg6BVK2CTf2ijZRHZmVaT7XNKYHBx",
  "key11": "22QiwWP7DxFwREEE7xz58ZdAtpkxUYbUuUCuUWp2iE5EeYdNdFTLyPFpvqbACx8j6u2TwTsvvwG6D97gtdohufGQ",
  "key12": "5ctvUNnNZDykreogQBvKxuACVkiTAAbhXkDsxUnXfFAEGitd3a3aRtAaPcNwbHtBaRnvdpXXsW7JdUM7q38wxKne",
  "key13": "54EChG6P1xuYAzvFRs67y5WAGEAAQ6QWxHtcpcU1tMqXJ4aUXyvkCqNYNgN7iU1bLcPV2iyH2gAnq8SXUePhGg18",
  "key14": "62YGGtH61pyS1cFRfCrftcg4Rr4hZvdR54gKtByh9RtaS31JvqNnsZncMSbEnqBUDd4J46EtfuAYvKX24jgjRmuA",
  "key15": "4a4pvLWBGmHQUADbYmoNWa9o9qhu8Gzwncz3dyRT8HYg9nhAEJTMrBAkBPRGAQkGjUrNvtcrAnjwPyTp1R9yWjHR",
  "key16": "4VSRYvjK2KiiQ15vFSc5WoQRW33botSuLn5u2eZyBr2NMeBBLwFTE8UrvdQcqtEvCPFztnBMy6cCxdtMRjRJaDMs",
  "key17": "5xJtkT1Xqc1xyFw6FtyBxwzXL6XTyq5BQ5oWEQqzh4t5PjRRLKagrGpL6QKrFzFNs2Y7AiXi67Ksi1AQsDmk8hi4",
  "key18": "21vS7aMrWY6E4RsQPsMSZAWgeb6yDCLEhYgZqVGwzVaM9682MKA357A9HmeTU9GuujS6oUqR7GG35q4xaEwJtxTQ",
  "key19": "5zhWdWHJeFjrEfq9h2UYpuE2wTfjS9krCgWZzPXRMts92UKzMkNVe1kq2LGy2QFGqrpzP6VAe9JmmD3n8QpTFKhL",
  "key20": "2RnKMbfCjFfo9QTopFa9GM2MGaseUM8KNcfSGNyh4sw5NFhautpKJKUH4kNZjMTD1W1XzAaLMUkyZc7PB2ucpQcZ",
  "key21": "3GwFv8ZMkxM4KHGfpVeFGsVWHL3SZzWwoa4kve92NrryeGvTR5emRXH8zhC2eh2ecgdNjumk6tukwGAkqFLNsUxP",
  "key22": "4TL4T8Ab7sK9ADRQVxejJ1fNXWZuY7wqGstURi5AvYasK5TcoEX4mbPDGvsqx6PWgN9NeXMzEHSj3ur4meYg7fhM",
  "key23": "CCh1RUYzznRoAvT37ek1dcobSHAUzF4HveWuKpBqf9Tnt3QW4jP4qzwkaCMXPqNtXQW2fzHfWGbjx1pD8toQu8c",
  "key24": "4kizb1QdkAdKYNPNgGMbk7J9gxTCXekeK5BuYeGoVPn2zzQBSCuWxU8Yuh3B5Vf6c2mSTQKxfVFMZXQ1DvqXmcwD",
  "key25": "3h9W1xs3LbKcjQMR9297YsFPcWYR6XjpftSfkqNLzPZvp5kKMkmBWjqzc9vyJnZ2fkn8kDJ99CACD9j6kNsYLSSo",
  "key26": "3qMzPWznPjfL4SHjes9sqUerLfs2fSqmnwTDR5ek6wMVQwSYff8TAQpkiiBFZ66LPB8p1EDT9ZNRrDW4F8LFju94",
  "key27": "kj4aerV5cA5uiEW8yjBpnaMtEWLtygArbW6zUyALZFTCHHRhfcw9rSwUCby3X2xM2KRAyB9BmhSDDtLDSJPAF7v",
  "key28": "5x5PyBRQJdzXR2vbHhgbks6gJRrBboqUxvyChpwoRzbjdna1v3V94frUgXxf3Jq7pEnck2fYNzAVZWzDMrf3jYoo",
  "key29": "5Dr8cH6UHpFwLh4qQd3adnJcaNtgJhLBsXGnYLC77AmGWhpGaSzUqo5wyFUuEqqdezNjFT9Eyon6M833oTEMLXJE",
  "key30": "KZxiUexbkNpdeom2d6T5K2W5f1fcqRy3WoFgVwX6zyXpojvAJMVbW7B3vXLXMP5YF8Lb383GGtDVvje6389QdKY",
  "key31": "54w6s6GhqZs1Cgxcsq8jfDC9osrLCXWJCJByEC4HSJgxK42pZx4iYhXZknW1edurPYbKDHjSjhqFEZbb3VdHSGpn",
  "key32": "3q8xP8wCx8drmfBK2efpd8UcLnbjXf5BQjM5FwG1oAzCJD1VuZPZJuC3NfS8WE2Vg9mF3CpHHcH4PNpPq9vh8yRT",
  "key33": "H3NdsjXdZAh99iy2ZRKttjjKTpnMmBNscN15kwF2ypyzrvo5MuZwPpsGLPdxZgqN9bWkzTFJTNCswskbFmArWZY",
  "key34": "rqGS3T6S6PAemXA3pHzfn3shhaQ47n7VYxXMwLUoVB1bWvJpRDG98wncaoqqbjY6aJ2jtGGZec3aqnzKjEJbvnw",
  "key35": "3rQE9NcbfZ1npgpNtQfaPxT8om4fCZ7Bfrkrec2nenu2PQPP3JAyagp2BU73k8oDETWkGyCW24TPmZAruti8ZB8G",
  "key36": "61jH5XJJfQsp2518PhGL3RYyEhLCoQ72fJPtmhr5bJqkn49AGk1yRiNRmoZwHacwV1Lt7GwoP5fTyc3JKjgjEHGB",
  "key37": "3WxLQXQuXN5WWcQATy1FnkrMAJ7rA3GexY15uLcVURdAwmGNAksEna3NpucGKDQFENMN2idQ3DTwrCAEFbB7hR6i",
  "key38": "67EUmJjz9h496xPggmSc1CM2QRjFC1UeJ7HBA9cAwpwkqsm4JsNvVZxRsiDc1Ad49eT3f2e17dw7MxVAQs4Bp37t",
  "key39": "2JXqyNqxh7N6jpJsCksaybuK7ABEB6deRr64JTQNXipuMR7DEXYeNdMJiB43Rv2ErhfCLAeQ7pem84krgm1dxSd9",
  "key40": "52DwXqYMjrYkg6XS1wwPiyF92337xYnLnnUKHCGqiFyRKJXuuRpfTsnuE8Vrvzz6JchfZo49mdzLV5giq6aU4MuN",
  "key41": "4kzBJxMCc62tsuGWfNcYkQktCSDfajovFGSugJJH4Ziii4rZAy4LYjebpJkuTSXCEsvrV5hFXPokKFXSKM2MJ6Cu",
  "key42": "4ijQ1bgqLZfkReJdWrEkyk1jgPg16UWmBLGxSnEKkoGTTXDmebi9tmvWWWkja5nSaT6qwGQavac3u8EhTXzVf2Aw",
  "key43": "3cUd49kJ3obX5Eeg47fJXZbpP2ByXGcUhvzru2gvYNTtavrkc7ixbxoL8S2A3KcqEQMKxg44G7uF4AF2KbVR9EtA",
  "key44": "5DpnnxW1iD2kngxRfb59v5AG2fK4qP64W38TpBe6PRgDzPcwrQUYXp5a9FGJ52EUwWyne14zLzxrgo5fB9dHiXTi",
  "key45": "NxVA9R45rkw2N2rEofWXEzJeo5L7cV4GC868vCrzkFTCJEgd2ppP2ZLc1eDTjfTEuWoiooksjgDwkLaRUj1v4Rf",
  "key46": "4uTaFY6WWMwndh6Q58srXuGXubHzFor8Pnt2UURdDeeeEGN51CMfmuap96sXWuNosRNfjCbUkcx3dRB7urfjMkm7",
  "key47": "36Zf4wkmhHRctcyh3uGuh1zXcuopC2EguGDDPpPrttEz6J4P2PDJLseVsQpzMmRdFV1QYpL2xzvaPwvvb13uSVkN",
  "key48": "3VDEYybgCEtxFAokqnmfdv6YDx38444U7kBYvYLTem5TmWjYwi9poNVCnTzqusbqRhyyAPuu5KdSg3Cd8SqLnKd7",
  "key49": "JKiCFqjDCyFdVTjQ1ypuBhrqoESk9vcqTqew64QVJJDWbHzB23nWDNqWMNorVVUMTNqWwsaUQAnG96UV6nTHFXn"
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
