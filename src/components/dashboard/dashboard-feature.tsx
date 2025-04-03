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
    "AnnBzz5vnDQE1cUac6f7u2HL3uKsMFppWSZv5dSwQksuyeGZt7KCZMDDvr8Rb7UhZZWpJGcqi55LBBMxnVePdmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61KRAbq92GYUiApXzNnocFD6akDNkmSAbEB8raduvuCG7aPru1W2YTmdda52MPR6cgNHDhXVb8Jb475wHUofKnLD",
  "key1": "5kYXTRdyuUPEXYSD7BF93pQpdR5n7FqfaSaXPkh2GD6ax41tfCer5UuYAh59eUx97TCpxsYnUt1L1HFyzShY6vyw",
  "key2": "4XNmxLnizoNcKrtEvm9DGaipZq2nvAC8rLJL3XH9j2tGiwaHkw6mJcuHKr5zJPNVNBLLUeBKSjbeY6ue7s2jKGVA",
  "key3": "3yMD4cdWWzD1wNkoRU73gHSb7pP1bTMbEcp3dFYyjTmNNXPrBdTJ5ALvFFzvfdy7Frm6GZMqs1wsVnA8N3kGLZxv",
  "key4": "2DaE1yKNAuDo9bwrSKJpLfZV5ouNQWm5eoth3zP7dJZzsJzuTDC4hxyEvukNk7oZ53hc9BtS2f6UjiT4bqJZZduK",
  "key5": "3FcKs86wbm7VycfaUB4KACkcM8zaugquQtXJQUSbvaBrNnDU8F3UAqCrW28jP5Pe9SgQWgXk8SiM8yn5SadaEYUS",
  "key6": "3g8nSq5o9bncKYRN1jNi8JY6tWM8fDBFfpNjMse3fz4FV7noSbRVHgJGQNE4FsjwacTaaQpomi2xdMj3KDVi5ZCB",
  "key7": "5xHorv1q2oNvsEGZSMxTavyVNJ1vrrDNQ2pxiQGRh8az8TJLyJpg5P2wESp7nZDKuhLHuYRofsH6myhkMWW9nfbe",
  "key8": "5SaPDMZREsiMkXuSuRnoFmkeTiz8mrB6VmAAm5uubsby8wSzdWkPhmaNkTPavbYcpMU6AdQhWXui4LzXGNucG1Hs",
  "key9": "4BQAMezxdBHiPRoXyfxYzbwbyMWotthicrYPbssRqXspmxnwXwYczryuxQYhU8SdgL9WdbfhWWD4pMzYjopdusmA",
  "key10": "25UEcGKWtNsc4qJXupzYphQdZDkxUTUH7RYzuDPMJ2nego4JJ5ZzLToNUJiyyWxyQQoBr3jWNQuCr4dz965avDeo",
  "key11": "2VncAM3exLjBXN8tw5HDQFaF8HbJ7v6rj7hPQM68WG1JQW13YahoBG7a7M7TGE7tFHYRoU4STErjv3UBPFCrsinE",
  "key12": "4vjjcmDgqNRx8oybqisrJesGeMW3EMwXCxo4LkGCXT2oakzDkpsrqjW8kGSMiq3qKDDiS4892ivhccd32t6oBEyN",
  "key13": "3d8n1NvS9im8n2J77i1BGTvRazkjAucAPB2U4W1jYs1TX5voTSfEaic5pVN8sobETvbJvTQ2YEudYSXj5bspmeuQ",
  "key14": "2gnaGaWuiJaxvZdo87EkbsWYPTznHc7qHn7BsrWh8w4m7t8j4bU7t14v3x9seoNhveXdwCectqD5TCX6eREvozF8",
  "key15": "46Ly7p7gxz6rKGBGJWtZL98UeDn4TZneDSEyT69JMTV6tV48UNVtaf6Urc4q9Xx27YpMbSua92SHBFZg1NYCgiBL",
  "key16": "2i9vnT9cnh61VTcECA9GU1bz8VxWKKUHi9dF6N58594f5YyqpuZTPrXmiiyTwev6PhPZ1VgXQrKq2ogLQ974h695",
  "key17": "4rrPc9NEkSucQndJgc5uWRmUWMc1mmgrBAxRiBZw43DrDhXCXoXDGTA3c5pbaA52J7R8oc7HqKwiYtVy6Ycahv6r",
  "key18": "2i6rWFLrinaFMcanjd2SjfcpLPjdWT5yBhmUQRB3Ku5tGJ69DEd4yi5fM174DLow65r1EFPLKrWyH3BP2DFhwus2",
  "key19": "47pkfmPMfieAKULTuBukimq3jWSk976dAHzZXivPNTgyPqN6oStCE4MhwfsuRQzuthNMAppqY8NwdPmif3FBvfCk",
  "key20": "dvGabN1pV3ocdkRUzQgb13Avzwat1rsD8CQteUZ2oyWo3CKJJJKgEUHDiD11PNPR1YZAPJUiufbXHqYryjk5oFJ",
  "key21": "4SMwGCXVWteXWXrHE9d1pDDsTjeS8u11W1jN1UvAp1SAgVTs4hjLu41jap6p7g8Z6vApYbk2xsUkciPuRNqCVtPK",
  "key22": "5zeFJeapnandVgxtWR1BQGrHZFB8QawC4neH2TQAQhyPS6z5znytLCjPWxrYyV7Lh8xZAM5z6BAdRiHvtnB1KygW",
  "key23": "4ty7Sck8omFLbxEFsa6pt7MZ1VJDiUtbviisdU7DxVBzYjYNxE9Hfh9mr96Xiy1pBQRWXw9j2pQWp9hyJsryfqdC",
  "key24": "5TwRrVrSNpXicj34w3CqmUZbBWnqsCtMxwp76bRxYiJ5kbKwwhqGfD5KuwA2jmKTdUw33obphx9LzNEjnzztRvNM",
  "key25": "5JSCmyfxG5mzuWnh915PeoWXEhArQeUqn87eLNYLfzV2rZ1FXkfNS7Hp9AaxJouZqaWhMxArL26w7Ug9wzWZ3cXG",
  "key26": "4sFtFZH4688VGDsebqDCgc2e7y9W3wqsa4hASSFKhj2F6m8PsNHCfyQkc3u7zcX3xJV5RNZjGi73JL4w96Tof5KT",
  "key27": "4VrKzi8vCjtuFxU2i5gNF11nNW32LDzKxKpdXo8zEBQdCnyUBgHVjBXRqcnQTPmXSvywwQeRJVBxA7YchjNe5sGM",
  "key28": "4td9Lg12fE3ELHsHqXvs6vJMc117MEcz6wzx3nAKhnbT7SfoGRjbyvE2PFA66uQN5VD43nqfGNEcFm39A8x5mkXL",
  "key29": "3R3vTK5uiHT8JkdK4WqNuRZ5b6X4b2rkxeABx3VS3bgnkVLDu4619ASU7BVeJGLHRDEkU8AVGRWWM48ge1rsL7Qk",
  "key30": "53wQgJr7ahXKJEqumFknLuzoTZVFbDEhnaYayDus6g3xPUVbqEVafEUQbUeJ9FssViWdTf6hy3LcgJhy33dpovTm"
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
