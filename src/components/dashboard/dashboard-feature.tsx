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
    "2GVit7gSJUkKRLzgAhy2vxfrABXbENb8SkdYqxecmuWmdTG4C7iYYbdveP6obqJ87U1unEZZSxneH3q57Sp9znNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8SDteHUrDieKHgTMn3aFLYrs9n6nKGq1v7d7QpoEgBeL3vfDbhkp4gcedcQLP2HmCeEhpVThhr3i1qwnmRE3KV",
  "key1": "4LafJSu2m5F3x2NqG6FVPZmWJSmNCse8jkdorSmwPvcc9W9d76ZA68omKHKhwuTPtZvZ7RuVG63ursUf5JzNW6dv",
  "key2": "5yVFrrX4eN3YGh3Leu8YFPgMvhvvCVow9bzNfJcW5cWGJHKm2QRByqG9AWwEkpewR9Ax7UJFD3r7WYG6urBxWCCC",
  "key3": "2jEjZvXDZrS5vuCTKCjcBJ4UHYi4EGcyvVvyWazbyrf63JBqFdCxJAWvLa8qmiVZd8TycWx6GhKMYs1PwvGGL9eY",
  "key4": "kPw7ga6TnvGg5ksjh1UBHkn6728wG8uu16wL2h2ajSN57PYH2PzakuSUZcWrKMucwwyZgqqUwBStSjvh79g6QXU",
  "key5": "3tqctmsKtK6ffqsGbnjv9RAtFXVcLLmL8GQap1ZFtTG3AqS7CkrFULsHarLhsevAjuLPWqb1rgHd6cFe4h4Dky4u",
  "key6": "2tEEpF6DmTQdtwWXdVKpHy6Lt5rbsKW5LwgH1zZRuDE3BxeLArZYpp819CDz8a4CYGVFvQBfjmSum9Z6WLGbXWA5",
  "key7": "3yMpqM4PDf5pT5K4Gv2i75PioG5TVraaw1vnZbaEG4qnFSUeTq2QYExoWTDfLm5iPTXPL4ACRHJ7GQdB6qvapFNq",
  "key8": "vdB8sf85w9w2NVyJHE1FfJg8JuuCsbGkhmmXi3hCDgcEmTTzmHYGW3mQAny8BDrwQhRM82oQ8rJJMLG2znA78f8",
  "key9": "5jv3Yb4UcmJs1nLLTmAUFrZabVa9U4DTf1KQhKnzesMjecB9SnGQWy5LoCYYQiWbEYc9regoETpw4uo17zzdpxYK",
  "key10": "4RhFG6unAFZ1nbVrxqBShGPtfiPx2ttsc4r8Vt1YsfXifGkMGoZ3d3z2qwkPhJjNCKWw18fDZtBXFwT25FneGZDc",
  "key11": "5xT4Qq4edEVv1ZJS5dzfgGCTaHgdFfpeyD9zMpH8SQeg1AVfRSrQJMyt2GKagGbNsGL2CjCwjQasHpJDS9pz77Uk",
  "key12": "qkciKnPHSJPpUdzLSz5B9ZgtBfupiF2duT5gJSCnL7SPMqkz2g4rJfqn9ZpQiiEKYnxPC2pf5pNVnFjQVJDUuRQ",
  "key13": "cUkPZZSgXQyjaVWbUYk5weasz3EqALzZ4sDoKRbCAt2Nr7yDfh39m4dXdYUQGnAuEaDPJTbftYEkjYWePgUBotY",
  "key14": "3MsEnUKFo4q6rGRK4KQf7HoAfRVRhsN3EqPX32xAWtrWeHoWZVUEQceignK8YhWBkGba1J4xPHxNsheo4ALmi8B6",
  "key15": "jdXPN3UbqJ4BepzpcmV5vp7Gvr8g3notViMa4ANnvQHHdv9Gv5uBW3zXyaD8QcDkamJKsuZ3u3Fh1KsgEvPAgMg",
  "key16": "25tpKNdsz7jbzHP9B6ALnnEaASjB466imz8G4ny6qhKJddtMfkwErTb3ifePnG6X3JyFkmwQKiFbUf4ah7i2cCkw",
  "key17": "54DSHc2pTSgmGi6oHG5vCMRXSFFNNmwbQapm8GhzGddrnepAkPLBboMPMHoWuBgp28KEgz1LcPMUt3oRs8DefQqN",
  "key18": "ct7AFmAfd2XuzPUWBEdJKTeDUo9hawMqureHWHk259vkZ4p1bXvNwGFra6eXCc72ChgoAvU61jrena242jjzjVt",
  "key19": "3ujjFPAuKjYcNi4iWMWRWfKPejishpuyQUnJrreEjj5dG7aGnRnb4NiNi8DzkhA4frUCLF8nmY9oCV5mPkxtjGbL",
  "key20": "3rsqDYSLaTPfeKi1koKMbLWiRrBJVeN849Hp8zJ61sP4gaoAmWzHvYMqXsmKhgn3SEd3jvCYHMA2rFtEDUtiiWa3",
  "key21": "3LJj67FpBn9BAisyqEqroVG829JnKPLsW4VXVNKKo9VSgwZqiK13TQfeKx8se4SkafE2X3wZuDZCLcJLFSX9niYr",
  "key22": "3juiiFwo7WFbW2aXUY74k89nPFeoxpgGbXLmZYhL5XQNmissumjkWqhQrpf7MsoZonbM2jYfmEq6sRAzL62SuPFP",
  "key23": "5ZY7HV3ZrKEeBYsQvEjk7x4pJmsvz1Zijfo9cD9NEN9mS5iQ6L11hTtA35nJemqFboizr9XmQMZh7xxwSivM6Wa9",
  "key24": "4aKwqXgavJKWw8cYAJtHh4Mc5NmFZr6BozLJcY6U2LE6PF2NDEFMn6W432kkwBfHp4ghsAARFnGFEu2QuDTWuM48",
  "key25": "2a68vC9wmoHZLyT2xgbSu2viKxveXNtsPm7SC76MnySck1eSVD72AvFipsMQTS9tK3rJRK8qzfUxffwpUAmJcw4V",
  "key26": "X6c7vYwAgeUsUy5YbMMLH5LKNn5EJ4zGsbnoQzfdjzYTMFdB1CS4hncPZrcabB8cYmK2afQgDwsikN3eyUmh98G",
  "key27": "4kURVggJfw1dSoUWFEf6vYjf76KuDjdradjAY8SPAHhj5QjoUUSVnxxtCwvqf44C7xQqzSA2W1qevtH235trdY2v",
  "key28": "RpbFwqST1yGDhAE9SUTdyGFQUAAddYXgyAg9P5SR1RDGn3geYWvjkTW5LCCnT3Zn6wLHhD2QqDpYgPMFomTtiz5",
  "key29": "3Vv3GASjJMwZiWWZJtdp9XZvSHULyfdA6mjQA3DmV6FY4veyCjLdYSt2XGeHzqBNvpensp5JBtna1t7J8TkLzuqq",
  "key30": "5eDGQxsAfoaGyfGZiif3QqMARFPEKi4i9oUGARj2MP4cqjLAQznDoKgZVXjzADstfeYY9KhurCCLF21YGik8XeU6",
  "key31": "51bqrbr54XKMqf36sP4k6vqFdxJELAP61ndPVDQbgucM92CjbQjDQzmAnQZCY6SN2BTNbQPFVH9Ji1vmNj5Nibuo",
  "key32": "3ciVhYCVHubVTFiVfntGwcxiCs8vWgK1jG6Q9wX5Kfo1XwyZ7Zow52JXqtDKwugnAgWc44uxri9j5NupTrGYT5g4",
  "key33": "2cGTfJU3XGw43QQR2w6Vvg2GXtrKnYFEGLBDxA5aex1omtoAFmnaBoD6ocz5yTJ1qFxBeMH2rGBxt6JVSDdPxjpk",
  "key34": "5aryBLxXxkd9sJjgn5YG1r5x4MnzqRU436UxxLt3tMXSvsbZuWFexF2mYZ4g4eewrjnfMUx7H4X1VFBaqT7wwb2n",
  "key35": "w5obppYZ5DxYsLUcmKUCHbZyoHmkFJt3R6RZJZwzQa1v5D7jMoDZM1Qrjf1y4mYqbSkrwSFREoU5Cydzon9yPGJ",
  "key36": "5oP78hKdxqXt3YXV7ceHvB6VyGs2TsdQS99KwSchqf4Kswe6iyiE5mTfjRkL7pyqwyygfJX4tooqqFWiWTrt2uEe",
  "key37": "3QofmF8L9gfiQfpq1U8YBoHjuVNkJGYT1VQHXGHTKBvfRsnNbEVqqW1yhCXfcUnioVSXRWywYmShB6YqqnGxhjw9",
  "key38": "2SyRZZPth6YCN5gdsEwSPTfLmcsTjJTyarRvTXkUnfrC8T8UqhDsHCHa3MBHyjasad933GBG27tG56uyog19hHjF",
  "key39": "3udCXepPqpUQXvtiYQ7DuNwtVZZhuV22Ftj9zFbCRVf6gBz2Z2oHwdbopoknUUEWbAoNNEJ3Jr7YLGpRX8viTU5D",
  "key40": "mEhgwYvpzTETk5cUnBofJ2wXTLQY1crVpVu89mQv9bYM4Mpv7wcMEiisbFxxHu8VrdeJcuPpGQ2EPhG7Q4EZm92",
  "key41": "2LnRMMgvxnuspdrTbts1gkkKS8Yx4DtbNZnTrsk7YVeyP49CtdMHKhR44PQf4wn4P8N6GPu8AjtqiDmnE86fuEke",
  "key42": "2RMfzZfhwWruCW89CSq3fq7bZKDoCmjGAbEjkxvaUmWADNVGCdWqxfgDvUfXjP9Z7gPTskcoFYiWfCvGiXQD8Wwt",
  "key43": "5pg5ebSDu2bSFjXRdTDRJXa46M2bwW3vY9HRqp9jMnfegm13dbop1TAtceK2ogFAsPiyBUCqve2DT1Mdj5fhFJBC",
  "key44": "2Zif6koc7yZzrL4b1RoPGhJ3LHjRxJKpKsTY4yLb1S6xkSoSf6YZXFuBFdb6mEJzVfH93r11rpW3LiB5wMcEt9hL",
  "key45": "3yq8VrNM9EFX5dtstsYqKZaRHQyveRbR9V98kWViVShbkERbbEeHCQwVGojCsBwas6WHp2iieDSLXMF7ktocc7nd",
  "key46": "2hhcPyoNtETDJJaKGTBPZgbYT5SXwF2ky6ncngor58JH8Jp5KmkBYZx5opMPBfnQB4He1AVbaWmLRUyC84dPFhTL",
  "key47": "56iUNRbe5oJakx6v4iffciqajwKVwpCwRDkHLvFHRHg1MavCDt3HEkPeaR2grL2xcSBzGBWVp4NTtFTwhYzKKkTW",
  "key48": "VSPbcZybspzcRikbAC4MuDq7VyyYJA5rLBjzgcGM5SM5YtJ5LgJ6kh2DkicaFzwmtadzBWuuE1WZESQkD5rWzym"
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
