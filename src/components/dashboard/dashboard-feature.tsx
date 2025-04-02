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
    "5CFQw32Dx2E8ihMddrxyCSRZ8i1wSU5z2zonS6qEcmongPSjcZ8LkrRhHJhMvWkh2CPBJQ9iKKCuw5KMgoVGq64q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52F9L2FSrt9vDM8PC42WqaGQnMPU4mQhgUEZ8mykR9z8iaBtEx7zZXTbkrAswCuDJTh1oJx7HYFDmqpC8DSXztxa",
  "key1": "WNZ3uv6fvRrHdCUjgGe85k95X4LdxwUEYE1vXZCuoTQiQkCL6Q9ygQrKWvSrvJd2uYqT6FndZo7czPxHQgpNpru",
  "key2": "22hP7zPFau8kLKymUuMejLnkLeREKpuBkaPkP2RC3YRL8bN42cJ9xGGw7h9viavGd4FxkLNT93ogWedoLji2e387",
  "key3": "63FmFgsGhi1YhLHVzj8hpDmPALc3XV1vKbVRMdNi3eeCB8qJEr5gMjjBCs64EWVCqb3QbyJY2D1uD62XtnkHg7JW",
  "key4": "5ycBbVGjEx3uExU4uJ9JCUVW4GVgqayoeFwR89RhxmdNMNhQqWHxQrkfSME3FKr4NdmYMZ6kBYRNP3uZyYEuEFTm",
  "key5": "adGvigGrwkSBiNuWULks1pL3fiy6EvVy98ivD4MwV43jQFK7TpcyvsLS9qNtm4pJ9S9wcHWtCa8Ma1FcMkTp42x",
  "key6": "4Y49Lz1CT4EGYgGMAPMSW5eLSarbrvU7AFt1852SweD92hLaekzDVYR1XhHCDwUNJH4mHYtw9SeQVnothKUKPcph",
  "key7": "5syNffGtco2oMSsyvboh7GJbEDzMziwfsBMFNBJdgFfbiiExSroZw35KTHDmrCFLbdDPgHqzZyUzzt6YmKAn9NW8",
  "key8": "2EnQFxfuLm61qdD3u3gessRNjZET3KYHftk9EcZT7EA4uvaV5ZGA1mWoqoUcMjCm5MUsePgWLvxbfCXcbJtyLkyM",
  "key9": "5Sm2MhSmuW7fLU6YnGkHata46cxNjD9cKTKFSNoDnhXZ3paxHcstKQwMKYNrEMrXRknL1m6fjRs7Z5cSUZCZbg1A",
  "key10": "3gTR1bjNQ1wRcZi8ZRREd1JqgUnB758yTvHDEdahL8GHYrqRrFPaVH51aEnmk9ed98ZBM9hPb2wHHEqQnmkh3VTb",
  "key11": "3UL3kM35rbxjnXN46iJnVCDX28y9t1KYqTeSay5sLaTAtEbHyJtGygsLD1jshRiK9Lfdgxe2Vqw82ujj5mUtwL4S",
  "key12": "3SoN3JqeAjYu5NWEwhjsytSqQubezVPjndoR9pp7wR8A7m5hTtFzMuFYWqBWXzzLPhJ4f5cWGHrZTtDb2ztVWWnH",
  "key13": "39EGvNxZPzAETUTJrs1KcjoeciauqRQuFQsxeVBcmtd1Cz7hRMccpxqDmDR9oTgnUX8sPBQ8x5zR7AMXLH1EmtLV",
  "key14": "4dyoS7DMr1oA8FNjqVw6vKnVWfwyEqqXb2L8KsN9BaR7XgRTPtxHTm1j53HJU5MsmaZk5N8pmtn3cmYGWk3JhKgN",
  "key15": "4jJii7wdetqdekyFRU3httADCzhYbhDyGc9EmAdD2bdhTuwkC7r1P4ocsmCkkWtGhweEynNLW522JRPmehrFqfrr",
  "key16": "4kLBUQAYrbekwvogVmRYeH5VVjaUZgQ9AWhptUv4JTCpdZEzXEyKCizT6o5ZXtB64sZkxMBL5GPwFm2tCdT7mUyE",
  "key17": "42TSFERpN6aPo1WBEDBwPP5suwUXq8zH69o53Mi67ZB1ams9jEsJhLMpCj8nhYHNGATbiaENCmrVYK3paL5bpMTA",
  "key18": "4sLUDNoG9uzbyhCtN2sJqUSoq2uteg2HS5isdN5rG7mLqtz96bca35w82NBrWeZnTLHUNgpHeHQx3V222cXFbEik",
  "key19": "3G7R9KPUu9igTTUA6ZZzRsiQjRFNYKm36GmsrZwoSusRQnMzEjgXEfGKFDzkVbqYfvKQsTRYPkhdAodAkD34FwQg",
  "key20": "5Swyb7RRUditoCC6fokaJmmVWVaMAbHwjzd1prounGr2TAeN3BbotKPw3bn6uENBVsj9NQktiEipPUvUuKuXryu4",
  "key21": "4W8sKnqU5tVNx6UMkSNt5Nfp1CJ2P88PrGM9aGcpbJRsi5QT2oGJMuvs4veyrawAsd91ggstWE2yyXRiq9sgfBpj",
  "key22": "27mEGj7SKzesVR7qYGoMzQL5qhExMWtceLU9cZMd7LZjJ5J2ATFv8xLKjroWHBhgfUo8rjEBfLKoPkNm1HQJsKN3",
  "key23": "5avBxswe5qDpDVwxwcv4Utb9uR4dmcawPRDsuNh35qe3HBezweTwUc9KY6C6dyteH8LY5YNWQbwgZXRjbYLW3JBy",
  "key24": "3wvARa6uiHF6P6PqX3fvaVyZ9jX2WSE7KceAvaoKfsVM1VPXzmvcZsyycfe4q4n958To1dcm1YFcdj9Ua7BMWJgf",
  "key25": "3sxKkZvMCVNWsFonX18DFgxrptW1DHrgHjKoLzhRy7wN6s1FuQiA8a6c9acm5EuRrNAB5VkKF6L1dUGTr6aCi1YS"
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
