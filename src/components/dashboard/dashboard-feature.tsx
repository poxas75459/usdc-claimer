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
    "3ARLRy8TuHaqrKZb8ujdxWTiKTxrZZ8qBpjHvhKwjjUby6JrXTcgDoMnJLiitT5Bw55AFbfTde35Mobz6Kgjp47E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ktGXZeeqsmvWp4NbpzLoiyuFHQvDWmDVYKX8ve9SX4MgAqsuzMzMBp5xwEwXrsubYPXdnYdwMQ4QP3JTB5G1Es3",
  "key1": "3Kn75QDjKopkXHCytPFAjnTctnBToy3wGtJutxnjjakrYYsif2qWtZYfYea7bMw5eJM3izycoisUQPRdyC6khrNy",
  "key2": "3VpEbMg62HrY54r8gDpLsp554Qt1QsEdsEBqL5rRFwu4A6D7ATXZyhhFzqRXbm3BhXY9Q4yfVWftJJEwvnHidtSP",
  "key3": "4jGLAHfxznkX1VyL34f1xM7nsSjymXxRU4zaq7yDAzo9ik7p7HZ3UMJjr2K9NpSan3grgAEN9yUrHACuABGT7FdX",
  "key4": "3muTFhDgjFdxNLVVURVyFDj9ovTsu14egEmSQuLvBq52i5XprhGptYn8mnfXrVgSeFPAKEYZ51YaSPbwkZYASrHg",
  "key5": "37HomPqbEMQXCGJpyjLyMzBD5EDiYKU9BPNWYVaMyzesLNZnqyKGQ28tY5FrCjMNanqxbLizaCSdehD82TLdTeGn",
  "key6": "5u8qr9aA1CJQrBqXcPMz6c9QNVg9ZVMkmN7KM3VvSymgEbLYun6Mq4MjqmXN2ie5LE2HsJ8ntbCBixVprY4bcF23",
  "key7": "2tamkE8RwvUBZc3QUYjXFViP7PEaAQia8YU336evWxzU8a7fX2KCMqCA82ZSDbUM69N4aasQ9pWanbFCeHrTBTXx",
  "key8": "vpuc9bnWUSjGzRkZxaWduoVWT1kdqVuuv9ovTQ7T4L6HEiBbcXLSinXPYSDSN3gM3Cidy1NgpvFj3BURZQL1KPF",
  "key9": "5FtGSqJaEzV3mM8KouudxTXfEU5f7fSjvUk6ekeTBMiDnXQQPUMLuQQSPVKGpU6ATsdSF1C95y7WwCdRAMn2iW3t",
  "key10": "3ExxpZwkBLsvbgmNspFc3jVmn9kpcY1vF7y8dB5bGCPzv2oTqkACPzreQwTUdBdTGRrbQZgrb1ZX99LkQr3J1x2p",
  "key11": "2PmrStdGwAn8E2m8WyYzpKhjubqWAWzHXCjXWL77EeqTwVUj2Dqp4f9oY7DgGhoxunN7UotsdPs13tk1RtTZPB2r",
  "key12": "5L39q5aMY69s1dZ1KNRAqVGYpNrvRd34hQjGDxZudwmK1EDQ98jFSJ2i6LpovtctHVW66takQUmd22WCfHRm5UJY",
  "key13": "4W8rYuMaAfQgiPCBBW637uaV2Z3qt5TmFb3guwuti4WszfVzDrFxMUpiZWRHdqC2tLD8ro4k3vZQc4Dze7ziXk8q",
  "key14": "2BHHA3dCg55SdLKNWkTFrQNb1YVMPN7fjN3dDXP5P8TGwo5m4jUepRGrdeSjbWBUULcr5WNiCbvAisJmWTpAE5BU",
  "key15": "282PqG85s9pxtrRRpNuaf7YgtzcVo23w4e3StJNnQMHf3hbFX24hpuR4kTitkfe3tVK35qfcUDqUt2BzMhFLMcEc",
  "key16": "MtCNW9kP1VA4RJ6Bw367TvoorRgh6YGPgNHGLTHHKQwytVvcYp1U3RJWZaLvXrg5i4Rw6eN9BJcGck8AcmPTn1D",
  "key17": "2RYBhp99NMgnMQHdmD2WY6zcxiXD81AT1wkR8ejwXw3hGMAWjDWWcUtRwiRArrE3xfhfzLMUPnv9GCY2XV83jUBf",
  "key18": "4taYiKnEdQzNbEDW6LmSF47qxgcUwk7jcq1HJvGLHrwZVaZu4DhjNe1N9QLvKeemQrb1JdxPvwriZW3hohmmFYLk",
  "key19": "4NtYxaiFBRWPv33g5tNSFcPnzCD1UEQufLTY3qbeBQX5kDC5cX55mVpkDagsubWxQVTqCwhUzhGqjpBFedt31d79",
  "key20": "zN8inFacdfYiAzYQYUfqHm6XaoxqKUngNyHH4KWpqNMnFm9TWJ2gTJVZPYmKQ3QriZLAcRJ9Ja7KpMCdWb28qx8",
  "key21": "MNBZuveziTLmbee36W8kfRh9HKzoDfGbuxWTpCjiMdFcQhpm84Ay1gVVt8Tact8Vy4r6h8n4sbKXLzza4wSnFmw",
  "key22": "2YoizBZf61Z7XkF2E2puZy2QGmJDAQVRcxE5ZE2rChTSQ4PFfXTqwxnQRmtM6TDqNUh2Bz84YWV8knq4FuPGqcJZ",
  "key23": "5fdgsTTf5jtLHAiU5L2d6jDHkNdP2PaaXsQ2Zq6iVvicx34p5pSJ81VYQ1Lm8mQUvBCkfK3CbvsFLJdbmkQHoKLe",
  "key24": "4vZGNbwvpkURjoV6gHRQipWYxMR9V6bbETVevCai8FRh3Pu62fUuoj5JZBxNAaXCK5jF2V83gXZCKjsSrQfUQ7cj"
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
