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
    "4bTCaBpAttLrpiei6JKosUz5tdamGFEpsxSwxm5Si6Z2xfWdhdemCTKtLw67JdMfdAefWJmio4FDZTiGrboeGbG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWFgRmhXg6RPCenqKwyLyUFV9ftY8YA6JAvoBHQeoeEfFHRKBUiTiSFTX9JcCR7SGCFNLPihkof9PjezwDLD6cE",
  "key1": "5pBaqkTy52dPcN5HVP6dTCF7ZGQhtaxHGvBqjp9iRWxqroiv37bmExareSBWTpbkoYAJHzkRKFuNbdL7rcncS5kr",
  "key2": "4nGocL2ZfG7z1BpEG49u4o8uRLLRNGPKhoVmTP5dLcFtfGBEuCyj2TxAhbKvHfe2PPby7rRLGf4B826YCKFuZiGU",
  "key3": "fkhLziVJTVWeQrbKnfrGzZg1kUAnXm9Y5eQ8EW2iV4REKh2QjUhW9mG4g1M9du3gM1C53fPycG7JEyZHSmhbfeu",
  "key4": "42Eh8z9hAJt6RXZ6DRavbHqMh4aJqZA2H5goEuKGGz4SAzb8VW3pdEJLaU6eBz95CbVK3eav3GuQzuuDXVKDZg5N",
  "key5": "5JNXJ2NS7xvvAeg9xgW39LbdAoBmsDNH28DUTbGyuMjJxGwKEzhTMPxE5XPZuHMj1bqjB2xQxMw4mMkMsjcZZyt6",
  "key6": "eUXUXRb58A9dqWbsU8euA9vCEgLm7jfhra8Hqpf9DhDAs9yYRW7SAZj1ahAzPuiB3k7xQG8R4jDEK1XKtG84N1V",
  "key7": "mZFj2p7eJk2vxkw5pvUgetAaXr2hfJM2nLfSATc8Cmbw1ooa1LEJwEscyf7f8Mk3qQCKvvJ5GGDGhqBao48KZEA",
  "key8": "4an8nKDkj4k5jMh8y7StJKfpnAde7wzrnnfXpwnDLd66zHHLUvykLmQv7VyBdyHr5MfaXohd6A86ciguzihJrjkx",
  "key9": "5Kojy2QuFNgDD6dxKVY5aNs2dj9HzyGpXC8LQgmcNaFPLcKZSFw564D3LoFeSw6TDRcmSafL5jSLfzh9aihT1ZFy",
  "key10": "2vgcTGDmURM72PqwmtFX8EtCbVjMGviP3LsG7uwuNwrC1uJKG3CpozXDLVebUWWSck5AZr22KxvvY8F4kqQfkpjF",
  "key11": "2BiwMi8uEN73k1nXZhomZuuV17g2XK7LdjybSztqtvRCLfFyg1MXz9BocV7xRPooDZ4iHS5Borf6yUUa6LJLoGo3",
  "key12": "48vcNN8gsZVgpJcisKuDX7RnKGiJtBqSNeNLQNBKpXApYLJkhz8Dp2TbwXG9hDEkroo8GCWK9LUVPwWGtcAAS73Z",
  "key13": "39Av7Sakn5t4fajZBdGY8UzjupweDaVyBg8jAeNVQqLJ5eSZtjRRjtB8qTrCzMfbhF1GEM2ezrTaVCnoVc4NmreC",
  "key14": "2VfBC9jWJUZ4SuZ3HDnfRREBReuF3pW5UVYJXUemc9negk4gHdq2bNcz8bT7sq1Tmrkdj19HskQHasm1YZ599jEp",
  "key15": "4uNB9AZbFeb8Xqhuokh4dEE4QhHf3McSEbQAv8CSnW9s9YVDkvKUMXvHKfYZtA3EsR5jAY9hA1Qr6wTWmJ8eSYF9",
  "key16": "3zUaQC6QiWV5akFyWfS5sWogrqvuoRSPgKNArnU83v4d1nJfYLKNMm1CpihTv4MRNzY9yGhhyuJgBZ9t96GViLBm",
  "key17": "2nfy6X9PMWApH2QSxwH74C2gZpEMDquiNZXexsLyi9R5n9cxCebemH1FbYfoU933gmARo6GsW5PcZBcsGNEyKL4w",
  "key18": "25gCpC1sNkKjLBDPt673k4iBwXG5MBx4PpcupwQPZmFycXkT1vkSkdyCkZ9LoyHMbtLiERWAMKcGfkz2aQdizUpk",
  "key19": "5cHhswVJGNVQFcmaffsKnAkLXoxc414pzAPLxqa6Hr1WfbFcXh5UK5tb9U3s71qZBgaS53GCdoxkx812xw1QNduL",
  "key20": "C1vSZ5SNBg4TsFCUA1sRbGLhMAKcmz7poTwe8qhveLHmYVTDaK5TVDhPmKiRg8zng14UuTs8vAZFFUVLNSpfCqi",
  "key21": "5iaeLkdGk2AyWR95ypzMPDAa6cdu8bGL3DsxovpNAc5sGofuVtqRd2TjLLg7NVP5G6CpALerQdHaqBkseErikpf8",
  "key22": "49cEuTPPqTpGnEe9Fmk5ha1bLXMEZgKcf1QiVs2goDiEB781NzHhZc5cb8VQZWNLGdwanYcqpHbvWscFFURX4xuK",
  "key23": "2k3ZtJNd6YteebfjNvqNW2oP4e7HLAQbBVb3HDLPKnd9gfnewZHFicWbU3b4ZHGxQdi3C7ydun1h9MMGabyJk4sj",
  "key24": "4SBfMZ7PkmQ5vk5AgTAA656C8cbLLXsDqZM3mfLSj35RZyDGZegJLrJhJ3nX86DwQUJxXopxU2Q8PEdYPUtGhnF8",
  "key25": "4x1Su2Yeg1Z4W6Px2JrWaiBHb2ZjK53obdKoxpRyWh1yUAHXN7iG5UbDjJirJH4xAWADmMK7pRiW7zFRzVCNgFGd",
  "key26": "5RB7DRCmU1f2WDWJ6irsLyBX6Cq9vEDkHSVScHverkUGWmYP4tX1fP7qA9HxXBFmLjKyE6rPwH7A2v8arL46rYpS",
  "key27": "3945KYQTsiQL1v9yMVaSzr5PLLyZ2XpX6FGyNSkD6KeBifPqDChwan796VSme3wG8Ym8AkWXuoR7CoqaNyzGK7e2",
  "key28": "3LkKmzqZCEBfpY3xaLgz5y2q8E576f8VVBp5prg1R357LDUPv2PVevziuvjM9dMwS7u9dMrhsfjmqxmtqrpA72eS",
  "key29": "66aMH3nvTf8fv8cke9vgPeHyrSh7jbKBvtv6148UnUJhYqBeAGEbho7KajB88bXarURpQu1NVJb97GHYZ6mcDgUU",
  "key30": "d9UvKRT7aPLaCAaTkJks9WiPJy8tDZatnqSi7fFRiK35mmTK1vhCV9nKApEc83zDCSGG5rzgCpjXUkPNsVJqf56",
  "key31": "4UxihVdMM6hYkWvK6U3swgH2PMHJfhEgCdsZjabVNxoRRgX3FYA4AEsmUyGxfz1d57pSFJK7Avwxipz8p6XqCLwk",
  "key32": "5p2kgnQspHpwNWF9TZRYYD8VzjyzsZCD9HJk41i5FXPeDPyN9zjWc6oBGgGw8j1dEPUap1Px28B63pWNWrBbrg8J",
  "key33": "4bx69JcopFk3r4c3dur6mCADXiZbuZZfsf5TcEbRZ3frrEc6TUzVyHzgGJcJw85ne3vhShs6dCcSMct1fs6cvy5e"
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
