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
    "4f9BXC5ufd5eu7zvAYCXbkphs14t7LsCufeQBXevaPbUMZps84aDsSJtwzf72ZV6hDhR1ZXiCnTYRyhjUkhAuwMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQAspKPeoPXdmVDrm5TMLWpLqEXCxCr9tNfPD1Kztz8P7pkntC3Vax5jon68CT2uQW2KHWyjjaHTwYZAaewkgu7",
  "key1": "4VZaxVJ84Vtddj1wugJoR3uN6q28LnTPrhJrAHBLxqzbNCMXNDKLgTb6LSgDP5tGWPACV3tjSwzkZCWtKjdhq8yH",
  "key2": "4Sfg5YAQhMwJNmutGYszqJRG2heKp7iYUK5wvTs8kZjiwSLGkNkfWYJSNfvG4y3LML61FLQEyM5V9gxoksXUaspM",
  "key3": "FM46ok9DiM4i5UGeRNnmoHQAd9XkZmJKTQVEQMN5nHyTB2VyVe1zvknNnYruymcAjhszoefCs5Yj3W5YJzrDuXq",
  "key4": "ssjmWsbKx2YB1TAB5yupvZ9gx7Ao9a1KuJrixYLRjoB8ejgwoQgPzgMeYRtfpLQpXc2TEbcwpU2S93c83vx3Sjz",
  "key5": "4MR7NFkoEZQmBqirqHe7zS8dLVXZ2rqT9FVN64EdMAum8PxBq73ZeArYQoEhtDnYyZp7eE9JnGTwSSDyybjhBWSZ",
  "key6": "4RRVEV1AVBeQQTyKdyDgbkdKiKxuWAbxyHFhy9jPSDL5u9fbtG6LWiv5qHQ9VsyqccoRi2sh8qy4ESKMG2qSwdb7",
  "key7": "3eNyEShnkZoN1N2qBo7Uk2z1c4We3QcoHQdmiGrD4q8CW64FiChHcC8b82j85k9rHst3HXcoKxfQtqW7RC5h13Hh",
  "key8": "3Eqj8Whe1iZV7mmXxNnNstZo29GoUzDDaAtsCeVyrUFtEDeJK3t6nGx6wX5779z7do6sCnxiuvBDVRNv7oCRav2T",
  "key9": "4HcMMGASB9aca22kM7mNPaUJSd5gRPEetv354Xa8B5ibmrd3UYgtyept2hkYzognxCPwUPMg6cYe9rWUS51sUTeb",
  "key10": "37aBMdpSLDG1ZB8aBHraj9SCtx8ksyCWryne2EwVkB8c3iwoGiHeMHyJRkkZmNUtUNo68Wh6gRt5ae6CvaAAbZwZ",
  "key11": "5Bdo3HviHnX9nDAZ8Va2NoVPRyFEM3M982vcDNooERWYWPteRGmcXRmC974QnFGnxFniorwrwegR4fMgvYYZzLsT",
  "key12": "2uX2QDUzHVLzuqMwEoDikd3MHTRubJujmvnvzj8Y35gtcc8wPTgjT9tgidhn7bVCf2jv9dkw6eA3yCW1wF4cEDQC",
  "key13": "4TZJz4tWVCEAQBZ93G9rfFzx9kh1nmwq5SDqHVh7aovF9L8p2rHJ2TojJQ8gJVnGvDWdtxP1C7UsUvZTctZCVhKG",
  "key14": "3uWVKed8bMLdFoxem1rx567qdER65wBddRZWMuAE8nBGomu11qvbRDSusrEpKNrhVZyoxP3KrdwQtBduqxwu1biU",
  "key15": "553aErhKSFH4idRuagy3YYRpfNcWGR59YBLvXA6C1Ge3pTVB168nHEzL7aR6XaoW1DEtvP7vePBomDXNyWXe2c2W",
  "key16": "4UQVRuUsDJkm9T5QgCmu6Py9ke4bDyx3tidK2DmWkqxh9mWkyGCFVt7iADZTvmaFNKGWHtRnxEtz9gTLF3CvD4Ty",
  "key17": "VJhDywB1BYgP4SPmrk7Tn7Rk1DssfhmqRB4TeKipiXck4ibetu9wCuCHUJQgQeJLkz5w4XU4p63FcgYh48EDWtS",
  "key18": "5jWcAfAmRnV1r64baocxB1rivpDrp9uHNLhHY484cHpDuEHVsHAwtqFrABxhLHGd9eVpnPxwmfVmh3qXFUufvraz",
  "key19": "4yWHS6M7qsFY32kxnf75RjXnFfTnGCYg7UUzRt4ut2KNtMThiQK77PZhDvu4PQ3AAqB9qf764QXH1X8WNSZvrEFo",
  "key20": "fZx3zoEhRp56nWb4cf4b7RTjHNafu9YVHFAXKFksKbb1K6JnxKofgkukBPSZ1A3UvFPpTi9Ha2CNtGZ6A3QveA9",
  "key21": "2AeELv8ymJYH38fSBa7hCQjejvRthMDCn8dK3Y7TDimafkEdbR9s6KMGSbPDmfBbau1GJnHxmte9mJ9rpa3th5NZ",
  "key22": "5uYZWuUQ6HYzzqhjnWQXoei6Mpkv2wKFQFg5AoHK3LNKAxJXjyEStBRtpkVfGf7LrSvk6kjpWC6MJdHBcyvrsTw",
  "key23": "5ZxEvryfS8dQG1dc9Y55hgDMJEjbjyLWoTETEG92VF9zdsss4rDxkBQmTWfDNeu8BM2qriEHbirqqYPAKf5MpGS9",
  "key24": "5jJsrYo86cjGgnitXktWETWQVETq86ZhTdQcbu4NYAvhuModBApPzsNDJ6RSvvKnHnY5pFKfdfvcPstQSfR7ru2D",
  "key25": "22x3xia4dQi95DAV2cRFCaV6DsYeEDxEa9nwDEZkkiLByUwZfxvwzrSqs7HqLQA913gbHkcdqrWUv4TwgGNt61W5",
  "key26": "3rRK8c8dR4pRfDTD5VZr4wZicaAvaHV691mbDJarXkFCycwVXkBkxuea6TS15DmSBKYx6uqyoXMKHrcqCQkUhpLE",
  "key27": "5RSQ7xA1RkACrFSeLstpzSPBdbhaSLonULV2dz6cZ3izn87PSr61xDnrNXC4da3YGcw5H7pVkEVvK6qTG4EinLK",
  "key28": "373V7KqB35NwiLCpZ4uzyzWmG5pbYVyjpD5gGwc5aJUjiZJu9Mjt3uGM4Uow3q49MGphNNJgovbCFciti6cfQDQh",
  "key29": "45qSaijEvSY4kVNNZi19zZKFq9kEpkXtZomJZevGE2T1Co6c66DwfGCwqmcrvbTVbctxp8DkKBcNsoJ5PMe3qAXL"
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
