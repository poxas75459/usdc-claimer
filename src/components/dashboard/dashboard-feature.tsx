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
    "2zs4EYx87YXdKMXurGSDxUxDYCTDm68EsYV8WQToNaLs9p8qCRM1AVzETbDaDgrcD3AbbETsDiU8XXnux26yKMQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1NTLsEEATNQie9Zm55fL6pcPtFDcyP6K7ZX69Z7pSY3dpFartbCSvaH6QoJwJHrak7AP29xkea2KAt6FnVwjxb",
  "key1": "35WuHGadT1NxJNi2Kbj1cTL1TNkSyn4RNuS3z8ubpbit9JECpn3eQ83ZbxhsCfdJCy37bhhfcJG1kinbrsECMJy1",
  "key2": "Hu88umgmL1BGAJe1v3aG8BHx7V3vxUgrRpNXxUsBJBJ6qMxQBGsHB34X8TK6SDEJ5BD8jPTd35d1fDNktTLb4Cv",
  "key3": "4H3z3PNTwxymzjWUZgHyNnmDF8AvXxJzNEC5V1wvigp18MZY9Vi15C1HhwJr6G4SWZpav4VcqWpHY6Bgnq1Q8gFe",
  "key4": "3S335ziqFLytP8bCd7e4zKc3iqZsT6G1bFJZ1Bw49Ym1yR9xqrGzCgiXp19F1jhYCt4TmfnELT52vSTY8bQKFRvQ",
  "key5": "ELvTmZ8bWC8accskizoFbSCPDyaYytNKRb19utjBMsqrLzXJsCGbHudCuAH7QP678RHfvEyjmR7fTj8YTLBA4YK",
  "key6": "3Ney3BcTHsq4ttbXARAdkx29RRUJRVuMCdpnmHQUEw6cNcLDbXSa64gakehh81NZXFcAKZHaVjWNyUVcHibStaCh",
  "key7": "vaAihpvLfM6KxYowFr6A6HQ3P7V7J7dj3wA6WXdczpMtx7KYamfxYUi6fRcbvDbrTqjvhoo6tKpqZi8doovhpEc",
  "key8": "v5G3WwvF3ZxeERoq3rfaDNqWvXVuLtxnaVFNQEacmQfEyNnJftvf8srC92QewDr1bjmNpTQbuFQJEFbvc9maR1w",
  "key9": "3t9peAxom6W1HGdv5rUcX8Y7EEnKgFfb5HRs7b8jZNsUULb917M86fNw2oW8je6rgvjs3yHNcVNbPSTgHY4gTNka",
  "key10": "3uvvDNqhUNn3pDfWqp9xoniFrSeWuTve63Jh8pdhTn6pottuWWP2NSByxQpmPCprmC2aTbd9rTeTH894pPCNL8v9",
  "key11": "3jWRpkR4369UW51tfPnSGeKHhQHtw1qWyP4eoeU9PSEjbgFBAsNtgaWUaEP8vpeUMnxVeX6AsizkWyqYmDiH6cNr",
  "key12": "4BM3AQXSyE2AotfQRk4N53gQwW5qBGWkU3LGGLnw4sX2WqKV3HjkviMowkSknCVjqiNaBaGeu8v1hQwKdGBLuvSz",
  "key13": "3kHCq73cwEXhTCzC61YCdBJshTqaSxH64ZWo8k2dRAdJqgjnVhMF1XGrvJDCDdjcgY3o4iUVXs2b5FUFd9YhZHzL",
  "key14": "4VzE6YfehttW5ykS7HBuBKEsWB87jcN2QitcKYYjX66UijMTpVGRHJN4HEvznyHeAd6UombmGzEXX6oAPRYsPgeJ",
  "key15": "3GutyuyDkxz7ZbSzSKQccpfawrdLzEH8zhNGdsHHgRg7TVhdhc5eD7FipZxYbGfaFR6keVxDqPwByZFgU2R8yPRN",
  "key16": "yWS9KcWh8vXR5bwtvaSHar9FHGU2RcN5Zcd1YbLqM6UoXHZNmFCKGTGhhor9C6VG1aVko17Ng5Z9i7aJLgvtF8n",
  "key17": "37kF9bVNkCzCAKFiVm9zUajgknusuAS62AAU3k8fY8FFqhoVezvGesLGRxnUcsGH4CBbd5ibGByaJG824BEcLHwp",
  "key18": "2m38KoNGgPz3bTB3rq1bpQsn4dc8QNV8whjcmujBqwMAqqa29JgSaKtz5Mw1NiLSD1XzY6pHuacLCgRhpLWLiWzV",
  "key19": "2bidy5u4dS3UqTneivuGLcznqWDr8FMwtnRwJewoUcDyfw8fhd73AzhrxR7d8Snrxpe6zmef2EnZs5VEFUgSQmBh",
  "key20": "2hfrAA4gM87mVcWr9cdH5vXoH4NKkUKMT2LGEKimJFQRHCgEnrRHnr9WJpRo5KuiZWQZ9bfAcAD6zfeUxDTApVDN",
  "key21": "2eoZq5s74fes79rtLTDAg88J2psSMkSYXNns3PwCxfzvGfMQQfJS6r7uja6vDRVLHWLQt634fNsbbm6thXiUWu2G",
  "key22": "5mjDhxP6mqfXNEnwS44xv7Vv6srArQES5eK7i6wvKK41w9EDYXwRUsoSU5K2k92C7z9geH1vuXnwnKBr5S2t1iq1",
  "key23": "BKRPfzkM4Da5qLQGFt9cTDsgkDxVGswtp9ogR49gsEvAoiSj5zhwMD9CXPK3WUaiUazyiz9upvws6256wjtUrPw",
  "key24": "3BxfTA1B3kRaXh6ZUJCXSQ6Ho7zFZpV3qaXtzMh55tsJggcHJXf8Q3C8dHkErxU4oDYX6aSNo6Eks2Az4gm82JNp",
  "key25": "3eJ23VFyQw5eX7f7bVXvoRHHzDQzEviDv7nyZPkxrivgZWRbqmS9Ba2xajKyakeUn55EgdYUwdKeJMNNFwK8NUMC",
  "key26": "2bpHL232QoChVaCuU6UFqQBKVVRfBQs7eGVTx3yS1BJkgQdAdcoM6dmVXs1hatg83MqjxTpzxeWF7k3ZHZYCKZ6D",
  "key27": "5TyG24WNZG5JPx6asG7Faq32gRjANe7KS2KnGEEwFrgLhPcnxTDn4Qma5juBKNAtysXqaACdd8fDKubzgQCrhD7i",
  "key28": "wMtHRfRtMrJHDERy9EF99oCueWg6GPS4nWxoEtXKdpPoLkUdo9h8EDX127JcR8bDPaz33jUk55dcLVcBUjddJcm",
  "key29": "3pG6CM3dzveePQbNj1d4f1Kkom544AZkY73iHf96spqAJUZsMKfESRfuBJ7aignNHaHc3pjP6FpuBVMcJKMa8PDd",
  "key30": "4nfHTpN9i1FufXRHY4jYYoENTeka7oqQbVJXg27cEJyfvKpDY9TMrm6M6wYcJDoHDqKr3tP65yNHTw1nj9qUsfUc",
  "key31": "46mdkqzFohu1eJ1gFZFdqymUBQWKBzHUDv14sRmHEopuxzwXCjXK7ANeVFs7GgjAhy6GWkzQofqkfMfhU9xFhwx9",
  "key32": "2AexZP6rcZqdWVvWmbfWU3uwPcbGh9NhYcKjTkAxQdQaDk1EuphV4zzjVKR9SkVzLuSGt5sLz4wYyRoHFVLQQgoi",
  "key33": "4h9LH9Wxgn7XAz3LmK4LwnXFeyh1y2QeDqrGhsyehWpVkwYQ6JgfYXhMrcSky7nXg76AGjrwjV4giJgEEXBSMadB",
  "key34": "2bZKVNEAW9HcfyaXGzPGu8WH2KuYCXXR5KrD4YoWe51ChkNAzMYrSkTriYKc6DP4p8yHhRYsitU93rnWdNt5cmHD"
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
