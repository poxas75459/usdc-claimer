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
    "4Lgm9sVsu6t22VBfEWScxwGLPQfGfdHTPPK3QfvPVkoUfLHmppy6UPVkqcrpKidFie9KoexY71Mcan4mEgQdR2uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53wA5GMdxqUAttQaTGfQyyYXBjHuA9HxgiKdhGZx5WvKawdgdK5y8J9oayb1ZdLTmseJHUYNqnqr3nAcKbNXEDZg",
  "key1": "k1ZhmQgiwcJvDiRQmx1tLoauJtmc1tXD5idnoPa4rGd1cxg4sGGACmnJhjH1g7JRjECyFrVcSU8UGNkf3ntbr58",
  "key2": "3s5QsCVRK4yQFs141ezKzZCrf9P8SSAFnKJcgkLMuj3HNoKBGNQTaTgDbLM2UsRkn9uxk8gXrALabjvLC1PCogPF",
  "key3": "4Wi9XVLAkoYT96Q41pZaewRCXJ35q8eGvLaBaXEYLqcFQgZ99Z7W4QYbrALdmeYmRs5pXPy5skXRYLdRwNc2ZzX8",
  "key4": "2w4EGBVH2MGkneAMfNyAKBXhTdNihTHmbKD6XDM44FeW1QTriovWvETdZ2FRyCxDm49SBgp3r6fbHcKipSRKF5VH",
  "key5": "4S6kQRE3wtEtchY53re9tS721EXV73x3yMwVudnW8e94mq3FBu3Y6qXxFVoJeqU2oESxxiUe3m8GCec31g9u3a8J",
  "key6": "61C1qv7DNgKEXxZ4uQ4qfHa1zxo15zJr3ycUktEXPdywMct463FAj2C8BSR4tp9Mf9TqPrrEqaw3FC57kVz5uizr",
  "key7": "4DNQirKBKZjDguv7Jp4kgqjbqfdLYKQgikAhfy2yzJuADfHqPWzUo4L9iLLvGJVDfMaTB7HQqKBqAVtzNbty6E7X",
  "key8": "chX9raff64YSz7wAG7khXbrp8bipHkRL3ujtQBDkdBzvuqRnVWeoSdeaRUdoydxsmozmFjUwL5TjDag77B1ofP5",
  "key9": "kCuG9D2jLenepPL4h1f3DVoTuHWZsL6T7Kr7uCiaYKKsHdjyPgjSmJmM2VvpzZYcV2gWYTzK3coLT5P7fXdVu1w",
  "key10": "3c3HLbeTpi3TpoJoLtV2DUTmJ94zA3mF3aAcb2NC4Z1r5AVRCWjZTfJggMa6yfSDYv4uSwsKTSLpdwnsBrb4berc",
  "key11": "4mPr4WaxyJBkgG1isSFkeXqU6eMg9ABhpUp3JXkwRHaDFnPCuYYnZuXvujtpsBQvgiufbWxCKNmexnEuy9q7qDrT",
  "key12": "3iKZGhVDZ3TGR7rvNbxywWGG5AABEQVmis5adTcgoWVQHSqJK1c3k5tZCdGEFJRKtnyYZhg3r4KZcrTURtt9XV9J",
  "key13": "4j8EbVHcNSt5x2n93YDBBR9oUUDoxtNSERpPMrBWH3eHQeKZu7qyp6DRc3gQ1CdP6sWJ85Ub2F6AZWHkEikcCtvH",
  "key14": "5DGjEo1tHA8Ry1Fd9hCJGZLxmKWfM7GQsAQTKpfqaFLMiQ5a7wvAU6PvMCoejThP9q8RDX2fPeapMoFfwiHf3Mrm",
  "key15": "fkuPSUptpgLC3kxTjuF61zPW9FJfJeyJwuiRFMZ3MoSfrohi8Q36k68UYupzNnTiHF6gjRjjZZRYCviGsRjCode",
  "key16": "4PuZdhejgLBfY2aNA1DCYQZ2ed3gYa8WYc9Hg6PcGkFf9qx6Ei18hcxvcN71zo9YGnnE22PabHib1DGDPuVSka9E",
  "key17": "2aYx5rqZPMWEQgKj29bH2C1CRuZx2nY6y9K9kpktZttkBDEUBBBDTsASqxNmAdBj197WKY7C1kAZ7H2GeGweFVhz",
  "key18": "3B6ewLQ9ywVgZADW1qa6nyBndYMLPsvPnZVRP1ChYw6qtAkyvzVkqouV9K2CjS4QCAT6effQG43evUkUdsYh5M8a",
  "key19": "5ADVHHR7Bb6fHq5TjET3xCwJ2iFnCTcbkEhkAqPsbSwhcXmrwuNQGa2tXRALnyD96dPGgMraToqaPKwU3L69RGZ9",
  "key20": "4wP8BUc5MePUPESo3fS4ijKUfvBPWGKsnESfhr97xfw3wtt8gwB7Sjvp2KFPmyr1DxfWQVVxGfURrKKahNBAnn8T",
  "key21": "51CnSh8DMSkB6mLPqvTx1MRUZpoDzG5YkwXvNGxFzjN9wg9mGGthfVTFEoGrFTmHfVbo4eAm2ixfhPjNKXCpfEnq",
  "key22": "2Y8Ktkb1s2GrEgy2ZVgwCdDEyGr7qzKPSehhqTZW2W8psUaKSzZi9qaTvpLPRJWDgn1v8Ei9vM6LMLcbXEACRSkg",
  "key23": "2W8umNDuwi5eY5ZqbmtDrALAtobkJ94KokVWoUBF5NWGUTWREG8uGrz6vbiW6DA7F4S4x3pf5ww3v7SChVrzJbek",
  "key24": "4hEQhrSuWnfKkcPHWnqrFujKjgw4VWhgZDTfFYykbw9SxPEMxU2MfGuMMprngsghP4oSnR7SiKkqZZZGssZ7eBeW",
  "key25": "4gMT4XhmJjezbp5RMNqae4ify3BqNArRbuzjpkLn3ybZnvHejxeWGgJMsER5mNzyBdFUQ5fixNkiiegDmh6pVzy",
  "key26": "4R5YsTWRYTgEeTmLuMRXHmwkAbG6fBwyywimC2cJyF2uCXxyQyypYCYpUvSrXquaG8xzq5e5AnU99LcU6LBTYUKh",
  "key27": "4zJvGqFyBwmbhK4RKcvF3Ge52eGx58cQELUKcxV3LXj8bZc4ccy4cF4f4KvQeTawH3TJc6k3xmLNHN4WT57ncCSb",
  "key28": "7XtM4gZY5VGKkKc1yCELGB7pQqr1Dp4T7aw7qGPzBATkShLdCCsfWjymGp4LwxEkTD83HWtJL5WfyUviA8viFJN",
  "key29": "4HufviFBp2aQSeK6Fis5dd4S9MLAGisHSb9wZcUqvvpwLjEyZkbqqk4dBX1mUv6mn2fMFdPxbCMErbAqoQSheXBE",
  "key30": "4nQQ3Xoy7x6b282MXvU9GBWn4skspBW9Woyq5wkpPvHJ4Zxt7XygmanNWWyv3xnJo78fTXTxa5pAbH1rPDtFeuTN",
  "key31": "2wwz17yjsWGVS27dTrZotQJguQkCpeipJdu9qBVjyP1wE2VEqKbqrbJzoB7rgzQCCG4yV18qS4tufd1kLMvv9sHN",
  "key32": "2H1y4w2mTjif85w6CpSmTccTzmJqMT3y11vLZMaJm6ft8ZWriNM3hDko14nMb1pCWRDmRBqhTdD9h1mDiWboULKY",
  "key33": "rcX2c98k4UtzmBRuw9x4PHAHh99amtUsvQU8GS5bjzEEvfQM3xBcFH8nphtkChgb17Zd8GhyJRVVDtsPXdpajcY",
  "key34": "2EGMNnv724Rh7YQpGVNbNd7UVgzNnhGRhAnMkdMQXJ9jrBMhF2FFDktvNdmFrotNk1wZm9hi7BpUSvTqMJhmZaaE",
  "key35": "3JaxMEA6AQdMp6HyACN635XTtyg7UXjc3DRVc5mo2zcvWAQLCa3oyBbwiN2NfDySjqAi7d2H72be4RWgGyMFyFkT"
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
