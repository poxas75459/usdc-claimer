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
    "3q21HMxBiebP2BJX2WMQs6MYZuEinb9fTLwvd8ScZhEhXsyXVdiEr9jn5zA2sH5GieXDany8ScZN7p7j9NEpb4WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pQFaJiV6X4cha18ohxVDmiVPAC4KnCfz4wPfcMiWwciTyCS2jHgvEfWph9dfm3F1Jc4NWqksJepFd36tHmgUUq9",
  "key1": "3NoRF12SmBuywnjbZwmJjKZR4uGYykHr9PTv6eJ8h9oVaGKthZskBfTK6REKYM4VyNjjRGE6X2uM9Y1aKkpj6HXw",
  "key2": "3MZU6yEBwqMcqDAkGaqBzkwnAFDxy8x9vwedY2niy33Yega9VwsrBeEX9UWDUVVx3PgiANabuweeMNvtMSZdUxdw",
  "key3": "Hp8MoNZriNmewQj99WkjHTcRe6agMLpmpje2MBLThLVzqETakafjUxcjLb7fGRDH71NBpcPXCodWgWxnyziZe5g",
  "key4": "YwnhsBZZqXkUBXPLQgRfeaUyAX2acjcecWXhYVPHfntotMMff5XQDYaYjg3r7NMwGFGNDRHorag1sTdjuVp2Jop",
  "key5": "4mBX4CpMWs92qQTLHQrb4e2iiouqDKdR3MTUoPeY16AJ3ycxmWGeaVHb6b7yYmVShBTztuo8LT2ZC5DMN6kj67wB",
  "key6": "3UyV4NW1yca5kcqeK6DP4vV11WMyUkt2SuqdekDUrRuZax9MmWE9HC9uRi2uSiZcqgyGNW3Gg3Cht2nxL5ZqgL6B",
  "key7": "41b5XLPcpCbq1pHt5xkq2UxHtdHsmkD4M7fMqYXAt25n1QHr4kVs3jM5rTcNoBupNMFipxFCrN7CXdZKHGdAn8z8",
  "key8": "3fD8mCQFgdqZGeQcmDH61vZWcFtVM9suvJZkMELphvPZzZjq9xKJxHHH9hfsHVn43B4PuX4t7BPJrNLJws5ZfbnV",
  "key9": "22eYk3ZS8jt4ty8VxezMCG3iYaMUE1x4hYdZNd8HsJVXNqTjRdTFhT8mdbM3S4oKrWcDsidrVpTPYXV7Qx7rkbgy",
  "key10": "5VgMqKo5hLocGLjFNaXYtxe5wne2EkJrSpQgSKs6pxtvy2MRv8Hr4jzLeYBYXC1GSUq9SB4CBqqPoXw7R1ouRRX4",
  "key11": "4cy3d3qn7GdzZtAJKspDQiTg4n1WBwyVNzCUhzt9w4cX3YVtaD6XHEbuzgaWPVAHQgLcSddzRNKZi37BEjkEXw3b",
  "key12": "4hPmFiKocfdMpYdSjHvDWq6jXAJypU99AL78QmHMtsZAukRNwQ9UmAoEgbexPNQK5kyHVeb5KXFdRpHf1AQE6Etq",
  "key13": "TGp87Aiy9JF2DQvjoemXoBFYssE6scoCAKnvkDrEMv95LgNfVxpcfMCf2i6U7T8n3dDti22bZs51kiAWhJKaKtf",
  "key14": "26o5BX7wwd8queCaLdpamKsTW9UcytsxGmuNjZ2tg6vFdrRTUrbuRHpM25th2D1FrxoqPt9maoHKcCLzt4qkP2Am",
  "key15": "3xzT2DfXftRp7vypCxjmhHfjcgrDxXPFmDyfYfzV35tDogjnTWkbpcDQd1ephXY1ASvUWnBiuWdiDKSzFdCzrRHE",
  "key16": "vWdmdDmQzWWDrQuFTzgVXRSAdvkQKxBM9sACARTjMmTyeiLRvScsLbxfJ5Qh2DVUHKe8XRzuoTkRxmKLP5PcVje",
  "key17": "35u4epsSNfbHUzNy5wGkMV4ThNCeWYpZcewcZLBbczSYg9By9wNQVVJfRT4RxRRYTh6Ue8VdwG55JZRFzEUeuzNe",
  "key18": "45x4jXVxQy2MtAEhCQcK1PZ5seu9Vvma67LLxi1c2h5RHZWMcyFUbvaPmqsGYJP4t762txHKYFmMMKbJ4LusrEMk",
  "key19": "5WajmyFdY31gPWZp9cLSViBq6u1fHxy5kNGNp4n6M697utY54YMfTuUD89iXqpaNJPgrmFcxNbsYRxd42CFaDQGX",
  "key20": "5GryCVvMRgepqh3jF6i9VoMRpYCHbn15aHzQycx9aW74fUSfP4X9z5CjmTR5DUwezUv1H6k6zc2wybuMLNSKitTc",
  "key21": "34oFYDo2NmUrde8sjPBumT6dXNgzta96xs51M7jXQ1j2pUJVDDY8Nsri5YEgewYhqM2rK3F8Ws71EtrxZFHabW5s",
  "key22": "Kjdo7ijJQUB3sqi8p7YktMR6htkqutncedik4qyqcotYiBrFCxdWo48EESmvo7sYrH3EvLTHWkr7smJ89qXbtoM",
  "key23": "67YYQFi5nnagzTwMAiSYRbvqYpWaDb1ez2QcxbsKr9oktxM9opyYJzfzeB6kfUW7sDNeCZ8cTkUdBLBwP9f6nqgm",
  "key24": "4LzFPM4AD8spC4k6bzLttCGHPHsZDnaZihcxEfGiQUcdKfK7fYWpaT6w4NBPANDbEFTQU3kdnzDC3B2pzzHJtpB2",
  "key25": "3pw21ype3rFmQRGmXj6jeXJsyitdcUcEs8SRLrnMt48MfB86tmYjmETzPA26BNVUnMuZAy5YEdaZ11iY6HMUj4Pg",
  "key26": "3NJ9eX5gmaxyseHngj1GpDoRTDMPAoYDRFUCHAT9BAf5QArzoUrHo6Hzq1x4tbaqSbaZRncX9vhUCMQKCQqFBrRC",
  "key27": "3o7WgCLoLZoCfNvc3PVystcfLpZEbu7waT41xw2fBgCeoWwpoDtAVjKBB5dNBcfwp2tq1CKZQTKDzBPuBLaBQKMz",
  "key28": "3xYFQjM9hGjgCffSDyewXMYa1dEQ2AZSFLHUDey3hTJyeDaz8v9Q4wjTxqhjN4DxnGKFjysLbJgrjvrsXuDSFXTr",
  "key29": "5UmAVok8w1jDPbA5AtuivAjCogSoHYYp3XpS9stbd1h1FBrTFDfUUtnCuRSKXxXbei8CNqiEyenpspdvCPn3tfW5",
  "key30": "4osTGimM5ob8g6ydFsBEyQhJeFsTSi8bm4ovboeipzJT711rBkDmGy3PFBiz7xmLChF37QgZxfSWDoyR7KzPoq82",
  "key31": "5chhWFWn1Ftb18ZfUgFUigXNpym8w5MDjuteohNoX4pGj3GjxxXd1FzwfsPTFGU5AoTs4vY1Dsy8VUDLSHNNEtbf",
  "key32": "5ERrxhDYC67vpovvBXmQz4212koyhLwe5VMZxR3sTZkuqqogoLigimt2iS1RzyHAmWnTDdDoR9Htz4Y7Bvx2Aj2m",
  "key33": "2rF8C8y19Yqaim8mgQsrLEKFUjcWkKtoohaKKwB6tGZHYxsZtfdbeD946upg3P7PcnzgcvHsJphvj6nxd3M6rYiv",
  "key34": "LC27XxYmoumWoiq58H8ubUoryvs93mrjxtruHWGYrvxuif4P5W7UFhTFhHAqZqb15mWtJivLXuYC6VfoFfKxPFW",
  "key35": "2pEaMJSb5fS7JPbwBJ5865J6KJn5X27eC92Cdg4U2JriXYf2xHziShYGyG7KPkMcNWg9L7SahaLS21yX4zPnFxuP",
  "key36": "2XRD3tYak5xZLJF9riRqiVW4cd5DXh6EsnyGuETgRBEvZrFg1JwW6QmBCAVrqCcvpnaRrX2QQbtpUUu7Pa3ZX1KN",
  "key37": "249LszU7uEDVhJPxKRFPD5sGUJyUiX6NYGfv6vsyDvXBP4U7nPxnf2xqzapn1enpURs1qMkTg3Tur8ELuM1arrmm"
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
