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
    "3dLRpn2X87S5y2NecuPfXcsWfjXtdE6yLtGRVz98ADEpnAe62FPa1B8Lt3BQR2Uy6bTM2tj1qCyvYNiBYr5SAATr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvpNYsL8zQ8zyrSMSnq2mgLd8t8dW2nFpG9BFwLFkbtMTJ3KkPLXbdRP6xQ4JMaUqgypmXniX23J8VXFBLsFLsz",
  "key1": "3cshNp5QvE8WcjbnWvc4qtV72J3nxcRCN4KpzLw4AaGNhf2LGnr53G6r5Fkj6GVKfoSs1WB369WUQ1eN8Lxbx3oh",
  "key2": "38ntW5E2hadKeHmVnaDKegSc7jW99hr7gn627vacMYQy2TZUvWAqgcpyYPnuh1HqooTsbMWbejtpgds7WhGaVgf7",
  "key3": "2ZxZdfs5JuWWJsURZN8JBcQsjzWRxAttLYcrSgRiv4Avb4bxAobeXrFhNbosJGg2n9HyyNMMRMDw6LyRLRKQRB6X",
  "key4": "3SdC9F3HHbreASgjx4RM7tPhFFFofg7MfAyxJjpLjXAECWFGaHGFDyy1x69X6HyGz48qeeW9FLWRnwSKwaJHpHvi",
  "key5": "5XVenuC2zsK3hxrgq5xjTshQC9aBK11qpUjFQHoygfhSrn19JuZKVAcPRNAmkx5pftN9XTv1sCVGHq9dK66dhLuC",
  "key6": "3DmpMz2a8n2UkLQ8zFbSqk3L9btJ8aoMYeb4oescJojrBKbzKvvgupSHrnszNENHBC2iFzieg8N8Ca2BDbNhg6rm",
  "key7": "4uQjZWnVFBLZhnVMhkDwnSBiBSVtC4zBcAYSNFYgNFkUGgBZjmchDYJ2994ibvALfvgMs8RAp9w2UPSqr9U1RktC",
  "key8": "4qL2ZLWcsh9RYBrnYGcc3iHMgwcestuSMnvXgJsSRo2pwQ47CoL3jXjQLrka3qpk4dAb1Laa9QvaDkqBtZe35LZY",
  "key9": "Kz8aAhKGjdS5Y9D9xm1DS3v67kFtb3tFMnVhhNXaBwADqExJU4yNVy7bVUZ3qckyKvNx99EN5r1xFK59nYLiyzw",
  "key10": "2GPcm9uX6wCTrggRyrQhoQNV3NahgR9thqQaEHYeKNt5LULEFRZgppPrLmDN6i4uCyrQG27c5Bda7XUfQCLn6Nzj",
  "key11": "2SxWLwTELSjwKmae59QYWvCe3sXX2hW99S7qzR2kdiFA5LHDYpAqi99E2aJ3VS7hqYKrfSP8S6QU1LyJZjspJMny",
  "key12": "2D7bZoDT5MAb1K6rf73UvAEpjCatPs9PeKzhPS1odUMbfvTDzGDD5J7nzHpysDYBFDXEoUdUyo2yUmLG7s9ZJkL4",
  "key13": "21HEXD1TCfNs5QcvwA1AiQzP83wQ2BQv8Yuq8VhN3iXoLRiugNBT8HcV73ZX7MJHsMvTHaF1j31UeNJVKZPrUaf1",
  "key14": "2wb5kdvrDzp5vSBrrdN3iRJQpT7Z5RzAArokzJVnVJijjFK5epsVxWqTCyqbYry2a2GXjNi9CrRXTxGyZXp5TJrF",
  "key15": "5YszoDicJvrrLULx41Ndv4ERT9hXTCBXqTtT35ENx9rkPn34rhBofpwYBsK6rTaYgaKwMB128pyeZTCBn3bi6WWb",
  "key16": "52na67eqpr44F18YXVwjNQPyPueW3avHTVCzyj2f4KmJHbJXpz7fdoBQWL72EQTvDEw2XPYsM8eofvNj4RNmouzP",
  "key17": "2vMwBusuv2zQUk9ZsXzQ2p7xZCm67Umj5yGJZv8bGPuBQiBucw2s859FMhmUzJu8woKZ3Wy68s47FNbXefiEq7Qv",
  "key18": "4o1JdoR6z4KSPxW2BxaN8gReSvyxxR2MGxgtrNvRVYBtznfTp9nGz89jgD5gYZnefDRGXej6yRnM9zJPvW3NaD8L",
  "key19": "32hfybyXWPc35dUYUe99e8evp14Pxji6g4aMYLmtceLrwwQxs2HcaaeAJWh2fxiRPb7FD9YuTV4YrWwuAG9MxmTU",
  "key20": "4J4a8U7bobutGY31ZfPZDuFdPAGAKSZD5NuTGgY7rfKCKp5jHac1pUE4sJxjch2jeqhGJqEt1a92wc8UAJQa8V4n",
  "key21": "2SRhTZYxxzbEz3jbWzuMhEvgdYrA6rQxqCdJ8XtpAp1KRPzUePzFsGzzVFMKPQxkMgs8nUgMayrSBqcf8ArRKdYC",
  "key22": "42rDQk1Qx9R1ZEsJZtYyvqekL8NyRjAb85V5heSAca3n2JbRHifAHMbdk4XKFk9mgPcUtTBb1zDmTw1Xan6DtF8L",
  "key23": "5twrL3YDXmxxCvR3S7rmNHdfnX4NfPVYbaMswkgdsjpkYYndCKNQgu6qMMGA4GUBDBJvpEBw6FenwuSCM9Twbiad",
  "key24": "3o1hQmgCm6zEomthZB6AHhZaeyN3xEy9D32obu44bA56FBhADT3oaFziQ3CsNLN4CsRSSL13h6xBxEeve8C51iv2"
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
