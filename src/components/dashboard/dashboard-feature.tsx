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
    "5boNwmMsQQztd8DKp3cki7AdUCahpipw4eDnru8YfL6f4YBvbMFHwfyEutgKAyEpT76UqAwc6m8Pez3D7wX5uysu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQ79bBTkXyoyVdD9QADx812hcGm2S7zfnVwCywuCn3yeTTB3FCrVMXTjSrjqtUygUaBn3cUaZyEdsaQVSubKFXK",
  "key1": "3JMF8KvpRGxsN6RbQut3q78znCdYhdDszbe58fzDTJ9b4pShvsjvqoWjhqPfeihdqnBeYFPqUELmEsVAS5pxceJX",
  "key2": "8cP3peESKqaRtiQqFzg7tTiWH2wfqXANTxzfNMASq9obsoFaC7ZJ4QN82okcNCaKKrVLqqhv1Q1hZV2XYvBshMM",
  "key3": "2ZKmafHTY2VZaYTw85WK4f6Uci7CzYjqo8q9THcUQoMpAFKi84VexRQDJZ1FaratfShnzcFLCC35ecJUUdRMth4A",
  "key4": "4asALZvxd4q6wEBb3dQcm9sYQTScuG61c8XYMKFW29wzWRfQYmHL8TtPhZ9a6T3e1jteXPXAhbEHcKC6VqC8FiGo",
  "key5": "uke4QSUhrfKSuAhKBk5oXXMuHUYNVniZdL3edEbe4N7PYNrdi1W8CzRxSrKiDf6XfX3oB1RmiqvUr7SRL4ws3z4",
  "key6": "3XVGRy8co52Zan2cxSN33TmuUAqZQwHEivdEQeXyFj4PRKsWjXjQxMY7PdgYawqGJh8uWNJ5bt3x47zuGstgiqnH",
  "key7": "3m6cnNXqAxPrNPMHJQQyihvNPuj9erKpV6rzhmjZe4bC5Tbtr1F4xG7ThayQspeDPzYeYaDZdzfaEWfXcDQquPA1",
  "key8": "4Kn51h4zp4HqKWzZ4e5N7wkheprfxMHKzHy68JpEY7ivYzB93SC1oCWDR7Wmv6f1BTLxp2FDQbfqm6CxaTV9q4Va",
  "key9": "3g2LWp5HsMd3DFbKtWdzchWxi6KbmjFxppsyKxjmskaYEChME3cvpjeA1oPabYRcTTdFqLnNg3SpeQWdVQuRY7WQ",
  "key10": "5D4Ucf4PAGGJ13XaA8pVifXRKuUpds7RFTVGwH9hnhoLdmxe8d7Tpxk6wgcsfPzDpRtmR4gZDtogmLaKBh17Qowf",
  "key11": "3fovzVDwGE714gtw7Nvh9BYScHntr7hvYPeo7uyakHymznj49ceAFdP8VRNYuwYVAmPZcs3C5DjFftF7jDqwgGH4",
  "key12": "cfrbYtwTzKqKsfCCVcME44QksJBSmTvr47zjqYoiWonp3rZG2pWQa2PG9pntqVdvhNDP9MviXngbH9X4DqShru9",
  "key13": "5aZeVBELCYQxNFTsNQn1xJv4qo59WejseMvmm8tunTPkhttc3eJ9Fr2autTy5hJy9bnCHSdtZjowxUgDHqDwG1VK",
  "key14": "2omFwHyK7iK8MYAqnBUfDXDKwxYvCmtfhNEo55FZ5QHfNTmhcKDzNgT7a1UFwa6ePjfobERayMGLGz9KLVRHoCCc",
  "key15": "3JKG9o8u7PZKnJWj4bioM8pTfCwTyJy6b6fKzRTsLSbLP7NdweqDMH6dCKyYyG1Pbuuk4Bs4NqcThQABUwyhihxv",
  "key16": "5GYPEYFS9j7Hwy2m8Lq9Da5ibJF9f7SE2sTfZ2kXKEHf1Zsg5Cx1DRB5Y3VnvCdRDGfh7xWBE7QzU8Aq5RP38UVT",
  "key17": "3qnAdmvW3834XCG8wCSFnaR661vaxDEgMdUBZc42RBs5gvQw4WMv1jWdXAnhbowbc6SxFcyip9K4x8Mq1rHCraS6",
  "key18": "39dBcMUJTfyHtPu5G675pL2kxy39sXU47Yfj16GNDbNztvdCHcWAYDdwQyM4SujHmYTtpdEWNXdV1Jq977c6Z1s3",
  "key19": "3hAsS8BcyFQ4v5RtN5m5hxXo6Bi9Jc9BHuuvTbseyMo7JBuxLDPeYRwdbMf7Qhdx55UmUkgfXf7PgcjhqzfoPNdr",
  "key20": "4chZALQvGoLSN19oK2ewfEtzuxTEkxvfDoXQHfbFKyFreJ4E4q7m3x23zmcCGhVrDhWbMDsdPs9PpycGKCTY35NY",
  "key21": "xZU9CrDt58oNmqk5oaV1kEEiSxDSUr5UPBw9Xa6yWxeqJErvG1uPFNH5XpKtQhKH2L7codHJ3eoTn3jqJRPcttm",
  "key22": "4kGwcLgre3X8kNC6GJNxeWc49WgMY5Upju3nbJUii6rYWCSPp3FoDSEahBTMjKzjKbwbfa87Kom9Hbni62UXDg5X",
  "key23": "2ouzdjSfvPgJtpkkeMa1ouLm6Rpir6s8Gg56K17emonqsvCrAX3zdRGKh1XjDVhLxrVk1nBHCLCPpHJE67DtbExP",
  "key24": "3ySZ3bC9RWz8JhyT7xRrh2t81mGnSwFNpGHjbkQmSGDYrBvMtKctF4XDXkt92viTsRznJrxt2nabBLFttsR5LCyk",
  "key25": "2Z1xpv2rro6yB9MG4TXF4SZt4khfdKuNbSzp4ZZs3pi6kAXU7SAJPGHmXhBfC6zsX8cQA1HGo67TTcMC4AtRd4SH",
  "key26": "BBvZWkxta1ijDnmVVGgCNmGgdvCjDUXdxpYfTXmBQpStjrp8QZMbNQxsDHQD84yYiJWAQFnBY7ZXrukcQioad7H",
  "key27": "2TTXA9RryTreL6uXjvXM5Py4y7YU5N3E24vYxM8rkMsZ372ZUGfoQp5zZCKGzehJcYnwpJ91jJg23e5WNG57nCep",
  "key28": "3XmMWfh242aJf8sonc9bVC2BGVZGW93CBnwYan2wevZp6yNYSBcnWx9FkKdwm8cPvKRSwRAw5kDEmHtfpgxnuZrL",
  "key29": "44MWvwKfcnsu9nc1rUj5eo8PJPWTaXUH8ojfTdRjmbjBuEt18U1ygSnC1amGti7eddLAtVDKL7hVAZk1GM5cL34K",
  "key30": "4DWU7AU5DRnH5cKpELk5XX3LykKECFwGAfQq8iYK7j2AZD8XKFhE9YdAAAnL2g6zN2XwDMCyTHnaonhCL7TBJKTH"
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
