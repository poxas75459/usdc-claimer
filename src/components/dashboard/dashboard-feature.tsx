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
    "4h6Q4xdv8xymMLc3bnemk72dKBcu4vPQCzLVseT43nGNm1rgh69MFkKD5dg26qkfP21uKUtBPLbCYtqDo1bTyenu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ejPT5XrQYDaRk7Vb4aX31Ypv9SyGwuas2DjvADjHfxHe97Ue5r7Dw9W4m6ZrQdTgdRpu9cgFdPrcojU3vE8YPN",
  "key1": "2Cjscsa52vWVk28Arv9S1oLMhZurFKgzgzNDU2R29MSdvUz129KPmfsShxm77sRuSDoAay5zYZaQvKBjzHBgvYui",
  "key2": "2qBNg7emVj2asaEY36rDB6git9bgSxTBxh2H2d8ALHdCbVjDnk9nojrrKswCFxmQBmk5qYx9cgjHaHNk4bPucCcV",
  "key3": "M2bhUb7dMKog79BfbtFmtXHxWqi3rHXC7DLaY67XL5rEzvSf3HTXetfkdsBNstRTS4cfNAjgSuiDhDnHnop4Eio",
  "key4": "51dzBTysgjRdHAbHEdnKECLsYBzKzqYVehuDkh1G7CH3bPtbpnACvhGyfBvMrLUugfj8C94oLGp3RVyDQiTd8DNy",
  "key5": "2DQBZseqUVGvSJRH6gVJSaUrjdhtVNHbuJ27vR8bPKv1CkWMv8pD14NVensSJgfHuL8RyRaX2D1uyFKyVuFB8ak5",
  "key6": "2mox4xNKi4dHMxzE3v7Qt6rBUksGyukf3SsDR7N9rTWKBet8qYCEvLDYmf8ddQjoVLrn9qHiYr4qmGzGDfYTMm8y",
  "key7": "5tF4R5MyivYsiPDBaEgrJHxLP91Wv1pQPgwBN5j31evU4t9qonrmLHiRbWDUQ3J5nDK9vSct9ySGwYvbYye7oPJt",
  "key8": "2UEw74Z2LYB2zwXpbnryzYkaPvekXXjyqKfBEm6zLsmmsMDBimsHMeCobTV1Jh63w2uW62hMd65vKevnt5WhkSXK",
  "key9": "3T2XH9AfiiPunX4FqpiryFbu3FGL9285pSS1wNyNGnzxUfqDj8x4CNtFX2GutM9iE3YvYXguv1Wdvmn7zbzHUJED",
  "key10": "4Byf8fTYKxnW75127jdqgq8Ky1zNyZm8yMwPDw8vTgyhNLY65iyYQFCej7LceKaGLssiEU4N8cgs98LMS5LkA48V",
  "key11": "4Jr3Lz9rtqbpde5Af9DMEyp3TR3xBv1a5YxvEG2vLbEGzpFqdNZZadNe1Sb9hDGs7Y6JN9H93M3K26wjMNGaEKHx",
  "key12": "2Tjkp8xEPhCPjSysM2CSkmqDBuzYcPRvtHuRgyid7BsuiFNR48N8giYEVnLV2Wpj9A5NGXFj3mTVSKXrNfLoSdzX",
  "key13": "5Wsqy6WP85EDaNXFSuq7SphYdJ1sF7aRb3UFE5g1sh7CVk798Py2frwmKg8QNNoXo9cL5PYuFsbsTyeeTnPS7Fbb",
  "key14": "2ZR2izo6ghEjvwtP2eC5DUEeiDEYVEGMSeGDoWBLc6VgBFdxVf3xoDh9SnGmjQcQ7qcn1Mj2UaqWeKCHSnZeWVUZ",
  "key15": "47aRXbDbGzUHQv2xqd928S7FUpSGMxkGyFpXV1zq1N1NikBoxEXABVZnWo2YzAexTyYYAiTAGnJkMNdwPbr6k8wQ",
  "key16": "4nx9pQKY3QvxEWQTHEtoDQFKC3wHHvMnCtzzNsCTyQJviwu6XvgS1H52MuSdytTVkeKefpvFHsuczcNYigr9sTym",
  "key17": "3Xd1Ar5SK9WjFtVNBjHk7fm2MV9cj1MRL9RVs9ojcAuMCryaGmToyhE6y4DCxnpaEH1XoFJFor8FZZi9dqRyz2oM",
  "key18": "4X4XufGmThMGyMHGpnyU5cZFTqprFmGEcyNgoRbRwH43KiZmMtfDPt7UF6Ngc3x56S733cacaZc6RG7SV6roxtQg",
  "key19": "5KhScjCiEsMGZVgioJGPLN7RXZCkHC8NkGtYsCy7sLWeoFmRCL6DCQG8J7CsdT5wRxWJgn8tqLfa6fPZBB19B6V2",
  "key20": "3zeJg63V2KhoqUf5MYwvoizNroAEbLFntiy5fqUGxuW5KHpukFENCL8fWXQZ3gmvP5A6qUVvwgyswWMwVBZ1FRPL",
  "key21": "49yeWT4Bg4nh9tesT7kcCog8zfx62dYrkpaG89eucgnNBrDYe1RT6PnP71hRDMFH4r6sHC6veUPE7NqmdsXpKEG2",
  "key22": "4EBymGcfCbBkfwtVUFrpwdDrH1Tgr2aAY2C7JYe3UYhq6QJGxgUTrqYwxtWGFNnUhHqnCY7J3sSaMJ5Pk6y3TDiv",
  "key23": "82StjGSaSCkVdNjSFwacbjsNkFPvzoyf1peyh7mhZnLLn3DjeFneYW52d3vEwUpwATj5iDXMwj6fze185Gaqsuj",
  "key24": "5Yy5igdNKLyWhCM7n6UYnspAoaLKYgJVc7wYEUR4V8K1mg3b1B18m7ta9BKapRCFbT77fQG1hT9wdShHWJn9BKVt",
  "key25": "5URN2ntp27Mi26PLjRCz3KH37gt3hpsa5KC8riqnr4rC1UefXBL3SabLPv3mYGXUnd61ZgvuJGtf9EKGCtqYQUFe"
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
