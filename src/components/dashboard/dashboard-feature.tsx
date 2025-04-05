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
    "3Z7nyiaSTmo71oPkXs39ZWT84GjB1hrmsAtFGqWAuwr8o6wyjNETKdHnhFJVDVzekuVB325mUMHuVdz7WHc9hb3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q691Nk8chw1ckeuAW7K3BkvKcyXbYNq1Su5XeAdtkAKSRCh8EKaqYNEhjZ9h8BVacQAnQt2HbnpVnFPU1q6GeZH",
  "key1": "5X9m4vwR65W4XG7LFn7iRP8g9N5TLDtVgtrpy1Y9EqJRvEwGYuDLAaBCC74u13h5pTszhDaeepzbsqpLh1Uhcv1R",
  "key2": "4DUkiEZpKrsiKVJZco64iku7a6xfduaRqaypdpQQ33GDSWRAVLvoykyyYso392Cwdf6fJU1A7YQtCwLZCo53gV7o",
  "key3": "25GXqqWCaKtDCL9hKqfQ43dmBDcvUchTMLQcYHkGQyWaHNfXRS4Y94UsTpHyakBCm6xYuCRw6NQNAQRHnJweEene",
  "key4": "635mLinBKBbiDuvxfEvGXcfdeRf26ush3jyWAV1sq3o4m9JCxU57szA8uMMsfG3g85R7ZirpgS7RthxCnKobtCt4",
  "key5": "2rwjG8S9bCJL6Z7Cr9bDKau7u9VYyGSS7Q1KR3ueSLZMgt9j7NWvrnwzfyC58gLzbj3PpqWiF6kuUakw8pk2zy8W",
  "key6": "4PzJL5qDigaZefEK8Gpn4Bo3eN4Qt5BKZ4KhUgX4Ar2eBDKUaA6NvPej2gQyUuZkSSNbHUBP8se9S1CosVctzyJU",
  "key7": "4xobL1QLKDWtdanCt2FgzwVtWQCo3LWxgqQU2T5vvCPjAwmyeRiwvB7Xf1YxuH1x4Y6w8yUFyVGzAwMpXotSsueX",
  "key8": "V82QfArEdomXj2Yg4i84fgceeSTwKhE288JG62UeBfHGJtnPL9uBx54Nphvg3418oGMH3yBPo41uVD4Pf33kpuF",
  "key9": "3XSsY6dtTzqpnjwjdyXxk9qf4xB9cBfTMFZYauXh1z5A3RezRzMaFQWp6EmoPCM1fNUvDXbbZFTogLcEDNUwiBEn",
  "key10": "c1vsKLbbBL2Ld4xfhM3pm1eVRH1hiMcdU2JuPCYnxsm4nPV6v4UTufxZ7D3twYVArcpUk82c6WY9pZkeA1WKP1H",
  "key11": "43LypDBoqVf8Etzdv3gXM4YSfTrjTxL33hDtqyT2AUCNh2iMoqg6W2PUaayMGDR7fQg79wUawku1msKoY2Xx7FYH",
  "key12": "5Y6hBgjuC1RtrFwPnWg7Xcyh7ZCvfNnYiu5bqMsrKRRjgAcnygHCgDiv4JUJn23FiwFR9F1cLDrnrCFamG7KSNPb",
  "key13": "5TG84Ycpi7o56AnwAhbVFK9tnjSkhd7Woh3uTT3ZD5Tzp5DomJzrrWRAsSta4gwM8sY8Yh3j1Xv7bQhTSBjAG2Hg",
  "key14": "AtHcihVtUXQ1xj64MUvStcntX5eS4DLPVicvMMNbVBBXbibVaNGjdMKVYuiECfCuD8N6TnNaWeJNiXFsHnojM86",
  "key15": "4aZtFq96NU53GxrJqWCiTYQ2oUYwuwucdJLWDVoQvLGZHMShwFaGEQKtJKTS1zsygwv7TLZNjWsmrA9U3iHi3Tqp",
  "key16": "4tte5SUAyGn6vmbtvfzB58EYb1XRnLhTCBNuwJZ67737vDPcEajJN4xs2LJqDSrg8BkRfb6pNBBpYTMnbQDm2h1P",
  "key17": "3mUgqs637dF4ADSprAzmW6yUeSAegJZjL4mW7UnxL4hTWGmozLLMjZCXh7FDEUN72r1LViT4mrWMgRRNq9wWoeW3",
  "key18": "41gyMQhmv2yVodYYDJRNDgUJqAThcQa8cHDZf9JCNEcrDr6N9yJaAYuGznJkomAbP3Voi3EGcsGSmcp4aXn7QNEc",
  "key19": "2oZPP6wDxGjauKQmZSWxwr5iSNh2o9EeCcbgUMMbhMwf482W36oE2B4bpunMRtMJuZ3gqwLYhwUpz352bAJV2oJW",
  "key20": "3miGZ7S3vdJrj6AifStGMdkM2PHyjKToBzT5hiCZDRRLuhGF31nja7xRhvWsadFGmREHE4rdgkjSUR1SNP3LBFBJ",
  "key21": "4h1ZkEe8uGGMZCe6GNW8bCrUdSDTaKSSGV8R6GFv6o3kKKv9XHD6BzVp8dwKn2L12s55ARmmS2C1jaXYvApqZnko",
  "key22": "3LgMJTMhnbawjGfM5tbdLgqiVPQpd3B6UyfEkW1xEkrUxygGhmmqzjFRJm3reVhbrMwcvNsZTgpUbwA3S5Wh7Zv3",
  "key23": "4GgeHybeVP1eCML1yfvHp2PRcgNxeg9XcazR1n6tUKWrkNBe8vQRUx4KEfXyWi3hSfRR4iKZnfBko6dAW7F1ReZk",
  "key24": "2NNXpn4aoYfqEcvzoEwL4bZSVBvrb1ZCoSARhG5Zz7tRTtTxF4DpVQHNDx2uy2Q1uby6htSSocSLP9fuqVbiVzvc",
  "key25": "MbxpgC6pK1YdxTLULJAccFEfHPD9o7QBx91VZhG1rLgiEgoeE8goRTMHwt4ZGNVqsrticYjBqrRb2VrUCFQB2mV",
  "key26": "5G1VkBgBJBrKYDqaLnaVTyugJbi77xuxuDo4FjHgz6gNtkgPm7zQgDfXK8eDtVKg3N3eishocZzgW5FcKWawRhbo",
  "key27": "2JWtWGHNKK8BSngWpRjhSJxzuNKWCc72KW1ncKmZ6njuGfBNxjGue4Smmjx5Q8qfstt1BpahcJg5FZvAJBoPf9ht",
  "key28": "4y8QbrubNWPSAv5n3854gDq4r4wj9kJ5g9rPfiygFcJKqJh6zpeBAeC3SeX8PymGJC1ePaYrooGF6S2bncmyXGZN",
  "key29": "2KQSGvW9t3zeBZWfWrtbUjNyvwdn8jf7KokEoUcHbppXMZyB3gfFGiRjP8JzmCmBncM7UuJBYvA2EBJ5b2aTTPqC",
  "key30": "2x26qmBMP1xntqi8YhrHAJ7wniz2LWu9uTR5ywTdYLYAHBAW3jHuaafthrqU79FV58suceYuqjPrkxNm5uvyWH39",
  "key31": "5Zzyt3MBhuY8GLCWyfzDn9RrsFRvjFJc46WK8TSWnK1aco74KSYQYhtjDSy9avSLPeUYbPsUgN2JBqUN68USNDrm"
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
