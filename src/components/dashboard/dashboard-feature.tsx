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
    "36R3MMChF3tN7eYx44vxL5VgsgyCMyX6c19M6Gaa2dYdJYf9zbqDbUaLqMo8xZ9Z5w2acQ9Zmzk4W7LCDzUSFBMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28yveTHbZzejbeREPjhXP1LskYoWngeMqHEponPeoFkJ5GbqQtmiVX9NnreopNwfcYucetKsNd3ZEjixFUdZ6PGe",
  "key1": "3dVbApEbdf2BrXaTfDka3YMZusCZQMvVGsUW5s4NeK5gu4DsW1FykThA9YmVdNvbKMivMHsbZS4VPzfmjwQcC7hJ",
  "key2": "3hHoJD9VMLu4RBdFc5avtstgriaWCkpWKzARwUs4KAu1aTjaus1NhPtQch1hcA4pF29LNL61q3SRRCsJLcVAaYNy",
  "key3": "2ttN9uAktUtVUFEyU71AZbdpk39KDMXk3cScQVErSukzRUHsW3QDwxcFFqfeQ7AnaCYanqvdd6YGa1bnxc9kU8Js",
  "key4": "4DtoYeEqkBDW9oAfQ3t6ssDwcc3p8N27gqdoCnseQLwF5yBtdEiuWvoQmGjkY2ALizgyDM2K15ikYaXaMfwFmRwt",
  "key5": "2rVBwUZBvdC877ysFwfZk9k2B8LYDUnyx8qz5yDqEsnVc9ZzM3QVYFjTAGmgBGFVXf3e7R5A43Nb9aAE7Zs4xqdY",
  "key6": "54EUK2PLCShuwLYxyM5kWGgKP1AkjD175vinUn54HuCyfZsnckk2jKMijpVZDmDDRzBpzjLTvCteLj4BfeseRTgv",
  "key7": "4qswfn96BokFR6GD8AU5P47V2U4YGytsNxHmAM1UwwnyDfk4mL8K9UKpN8mMqpotokMcWkRejczwDazujp5YL5NN",
  "key8": "5KqVg2vXxUL4sjNY9mASCHjnxZPLUKRvxWAMaqHJ38vsGV6ieXCDUDVJcTGwFqvQbcnX56ga1LXeKVKQTPmc4E7",
  "key9": "5Z2AYGRNuXPk2oHBsgB8ThpEqkvzR692cG8yN3Nvm9GF3LQ8nUHe5s6Ccs9jwjkQ6UDPtsEbtosTavcZtvsqAGym",
  "key10": "5L1xbTh2G589XvzijPYJpxmBsaQ8NTcEfWaM1AYEBRtfTx412F165Dsa7RVD9r4a63XYkXQMENFjje7CBnAJJ3VD",
  "key11": "bd8kicnCPzkQFZdJkyPxfazeFWZm1tP31AaBTNjL98zqhdbv2wzHXshTDcF1joHKA5GArWfaJTtSPFDo6JAroVS",
  "key12": "5EsQsaKf9yn5uVadxt8xuCcCj9RrazGGDTrLqAyWmmYXJz5d7kW8aZ2qobmCwznmUYUj1iZoHG2JHVez4hy3Rp8o",
  "key13": "63gKwksjEM5d4juaZqDnLb5o2iAYo1bzViMW169fNFsJeEbfUoAw5AynJUf9xa4GK77GTgZpKntWY4gn3g5UYcyh",
  "key14": "52SMe996DNaUzkqukyQXqz38xJePvwtDqQTMQXpZd4BpJCeCKaY4iwpf8Ddq8KXqR2pyaWGXn37Swvqh78HWoGt8",
  "key15": "3AMJPSQWqDDqpMJ62MjouiXARxNYFxsAGApFrauykmneWJhs3QRsNWwSSv7ptj6jwvbpkWCF7uNroukJuS7hhCti",
  "key16": "2bNFr1S6fivfdidrNSGpyGpMs7skNPLUGWMxk7LBrsRpB31ujSZcCtxDHQcqA6GuMW2Sf8r6e7bmjQb3SJGvfGN2",
  "key17": "4aMZvJz2yw1G1kjdEveDP7x75997no1QVtMNMMRTMDYHWwT7NbiVQmeDQuLvWqvvPSYs5MoSRXWKeAFpKqStQyud",
  "key18": "XUekocfZuwozfJ7gacFAVFo3xkBB93rbQDWs5jZwar1RHLFmFr9Pm8EVHaWu1Zgpa8JowfLoMvc4ibmnvsyW6bH",
  "key19": "9tHo2gsDCrCRLVivkD3YMDBfjyjHz5tsG9zAnH4CkKR4XGvYZS9roy6ZgnPiqZX47cMbVPJaGQsHn5JPFiPdK3N",
  "key20": "32HUM4TAwp665Y7Uw9qabXtFYftyXZ7TKU2C2m3BVDiEL6h6qVDAFGY5EZxeLdHBotUDavmDmAKiU9R4aNEi96Ue",
  "key21": "26jgDBTYCfA4ab5dh4rKL17EC2YKKmTo86FwbDhJNetdnD4JsFgaUDcezKDLQsdLKjn7Wkkeomk86onnp6BJWkoa",
  "key22": "3vnH3VsWnRSbJfQWKFcaXuKFrcxHWz9qvMFAp4y5Tojqxx7GcRGKui5CmAjeqsbcmsW6hy1a9VdpL57qGzkoggtm",
  "key23": "2xMn8d2p21KEDnzA9aEXAMMUXisDggUfqgpF1FvnLUCfBK1RS1xBbTCggkGCmMSK63Kuwa29dDTbKspqqLsqtFn1",
  "key24": "369Tr7CMYuSRrACsSLS4TLoNYVDJkr3YomH7FxPuMZEJ9onSyKMgPap6KmAdek5BuqgFpXK7YLg99JF4dVgbxpnA",
  "key25": "3CBShY5XiMvrGh8CGWZkon55oDL9hTnrEvggKN4X8vGFjjMGYZtatBq2iLy6o1KWAMFbU2GqNdRNtvads8HDEcJc",
  "key26": "5QT6FZdNjToVQFWMZZXPvNM2iAyrNCuYcw4Va7cqALZ6m6tFKxvB5EnMbg3GinWeovW4gCizcXCkVc6rcqamyNU5",
  "key27": "Jr8REV2LGMjdyMLMfEFannxHSmEGbXztevrDoLLizavJgAypW8uafCEtY1FSibeHTteMXftiTvkxgxqdZhgD8tU",
  "key28": "uBcyQEiLSakNhT8bJv9sokjf9mcw2oxE8skQFif35mGy15X4FLdHrQBseAPyRmTe3LWRH7LnmAdtKTDxcGQa9uk",
  "key29": "3bun9CdxH2kdsrLAj2paqbbD8SkgccsjmaZNArVHQz8cCusJggXM5X3j93SJbShj4296FCsUQoQuHQ75scoUAiJb",
  "key30": "5sVca2tVqm3wbaTTx9b4UGUyAziGxMJxgZEb8fToK2msZPWPSzUzfEMbxiyih2YGciygcb7F2y7wsCxihfNto256",
  "key31": "39cGEpFdrXFJVZXpmqjwKjB4Tx5vd5MQYryjFLvjPFSHhL6ENk9fy3RkiBdGuv5VprqA7HfcXgLJK77kwTyeMpk5",
  "key32": "K5nTcM38LKrQn86rDVoHYsXsMHpHNM8c6dWGcwcKhrY2rE5v12eQiEPx8KYbNjbyDCKYpFzPVvMUm4ncTM8a8iu",
  "key33": "DGCT2smhY9eR1HsZpDY4nQ4prCLbz8nnhBCDgzkjhV8FesCPA8KezKUuMppYje1TPCsMUgEwmB8TaoMDHTBHprU",
  "key34": "4jTkLDDi5UF3rTRpJnmryLThprGMBQ4rCjxoCJkH49fbP5DnKvbhW5YeUvqmKW9NRM3mdCHbxuoyZdNNHyXbJHdL",
  "key35": "42UReNvQnB2SbN6n1D4Cfw9hRmxrjAkMCEKpZBHW3eaqfXAy4RDUUWvinz9yxb17mKmTy8T74XUpHDFSX7fcQwbx",
  "key36": "5L6cSArWK9cQZc5hugeUH4QL4q8ZWJekTZxwJT8tTySYjZGrCXz7GRwa6FwTUrRHNwvzgvHpxPpGsBzak5e8UhEM",
  "key37": "2cMhSVUFzbjDDZopPTStcfSBi8pqyUT3vBLJceapcAnQMZ3DS5uGfE59kSPwWbvieVvh35cMwVAuu31Cfiie1GNi",
  "key38": "3PVAfkBrV6BrxUrYFnKokiJZtZ4C16PtkPgYBrsVuvE8SdHHWRWFfC6EjJQtyk5tYuooxGWMXLFihF3vsByoUXB3",
  "key39": "3RwrXsM5ENFgdmv1CnVQLoFGrkcsgFtTtUdLhwiaGR3YeHNXZoMzkxfa4uaYU1v87x3rPHdtU7QVFfEVp7A8jT2N",
  "key40": "hg9dmBzFhjeG35urt9GQocnaw6jH3an6qjTMZfPV5sAZuF6f6H9iw1GanD5TJXpVuWevuUVEGE27N6Y3aF8vW92"
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
