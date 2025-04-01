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
    "YkPJsEZtKYVo7JzQcd5mzyrJcuYzBbDca8HZKRV8znsVNTkqwK38ozYDEF2q3271BHk5H32Sw2C6itZPvyKwL8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVF8Xj1ky2dCZjp31JYsYVY7kWXkPYonGSsN3SVKXxxa7NKxeZBhUWpHUvuxrt3uV4BN6BbxSUKc2tYLAVtnNEK",
  "key1": "5EG2EnAnnP53jwXb93YD8CaZZUfDhYH2tL3LYUGP5EXbh541nFKXNrGpR7PvemRhz25WbD5LnhTZv3U5sbUjHEGf",
  "key2": "BDxBjd6k2gxAs8qjiQwZ89NrjEomzpfZDnjSHhtKAPEgzpW9GGXZucGojPMvWobiTys4ykCA7tBjR7p71WsQwtU",
  "key3": "3P1ePNHQrT88ykPNFu1UxmPesapviWBenCeopHaLA4THDRa1eDku9WFzNXxqj1LXiJrRAxe1HpB6RHMXjDizVQhK",
  "key4": "4sJQCjRNoqYk7mmBhuRKT2RwygkzDmUij86fDoPWD5ihsEnVHvoyKeoaKNSRGdkGyddAwS6e1KpJTTeaKWBEwMCe",
  "key5": "2R26dC6tLCJoeFWeC88nYYBmrMhhHZw6MPxorUhjDLw7jWwEtTHyu3RmgGtuWg6act3JCyXc8o7Zbne9hNEF1GuQ",
  "key6": "35oNCz7mvNnJqWegAk8uCr1eWa1LtFrDUUeYRrE1Caw6C9gmiEBdiRF8DcGiRzfhap2LaSjiSrPMNk7fXixtKLY",
  "key7": "3bxwTJH4TwTMAVjgrveoKeLnPpLYfrX3zyvkFQm1ektthJyW1majT7WSJoSivRdN5G9HVpp6YGrhvbQyuC3Mbhmw",
  "key8": "3TU3kNe4DAKhhUqAFgNBppsuAUvW1zcQ3rgYw3daSMEexYs4mSEYu4DiexoRHccPg8vn3p1KBp8jGzArMVjYDUAh",
  "key9": "YR2wwznoHoVqYyDqjyFB3yKEBFnxfbaxSujJrUHuceCyYwYMUszpcyQ5wnX6e4KurM5zU4eDTAhBEVuanvsrEde",
  "key10": "4J5Jga1CSKK9in5CBXUAoEs831feUgHVQqzGGzmm3YVW1zXXEMLAmXvaSh2cboq7LLFz9GZ8qXVLdVpkb7zFKeYt",
  "key11": "63iuRyT1xyqBy8VCQqijVg1qNySfQ7KjVNPjw9mk8sweZhVYkW5QDWVUD4EQnfeHtUPieFfbwxed7PGkyU1NkW6P",
  "key12": "gdkVvwXRsDYzX9Q2Kf6gbCRyQT3LVYwfKBAfC2TZ5WNUs98MgiuPqQ6GZ7amCd8gev3J1AKriLYdy1pWJpA7Uhn",
  "key13": "4tFYDmwEKMVVbhSPXXefzBye1ZNC84nhhZp4DQcamxPj65VvA1XRiArX13edwddWRsnshp5B5KxPqGvzU6i6qMcN",
  "key14": "xoky71EXWqpe5nEaYGgwe674VQSuTMcMwqGrdakgqG4gMfLfvVhr8AxwuXTCM8sEEdvNvgx4EbWsCpuGQPsSy96",
  "key15": "52RnrytYbVBAgQCPm73Dk7H1z6PeBcdqWQYCoKT1jKsRFrrahAUMhZ9v4CKMuFtUP5Pu4gDPrkwXPYKc6JhSfsqo",
  "key16": "5bZMCTw51qhNgtL4D4cFD2QcLggGjLey7G8tv9DxcygF4LhXeE7UYJa4ERgNpvx9ebLGCCEUtjxzBwVUNDMnsr8A",
  "key17": "5HYoztefD2BAmW4jAMXdXznkTpZD1mt4tq8tVWbXzXKxVp1LrDZtHd8MTjfVvZibCj8QBB6cqK288PUQDXyUFD62",
  "key18": "4sLce749scPWkTVd4hV54FJnnfJkTHPJXRozHrr5jAMkkztHFsmagjJeyacTvQvjFDBkkLTW9YzBznHoEcpjBRg2",
  "key19": "5w9yVsSPKkX6Xc3DBpt7msLx1WhNfxNgDbg7PtGyH823cbw7ogAfSAencTzvsRCDHwh5SyTjXu5uDrbkMBBjgaKq",
  "key20": "oW5Z9TXp2ByY7vMcab1AAKQLkngZb1DBiXZJeNG9AE8kM8pK1xEAmTtLSGYtbp9fAcSHs9dDFPwYRmvikKFmQR2",
  "key21": "2tAPfrizEiecnyScuK3DipjgVHZyfS5MqeRmUGFdstayXJhUKX9EjTgpGcq5Ybx6vYNfJYdGozzQTqRa5FkMXPD7",
  "key22": "5FQDAdr3EY1ur2jtrFFrACoMuzNpTMKuLaFpTw2ea7qwURhesmhXTFBa1u8xGeZyDyn8vpkm9DDwUyeZn17bTfej",
  "key23": "4Vj3xLxnJWtRpPMNWPfRvRiCKxve3AZemQbYBnsCXDeeYUyt8aMpYRPCZ4seyUoeRG2ymU7HMt1JhdrWTdrtrMcw",
  "key24": "4N3kjsg8THdWaZZkBUH38L3NzUhZY8D4XW9RTF44gGHU6xNmKenfifPx9NxR5cosVje6eT4y5iksXcHWJd9t2pxq"
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
