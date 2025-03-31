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
    "45vGSqs8tbrYyVqF5o9Ztpzqx2eyUQmumYURCXSDnKMFNEj25tmMQR8P8XYyiDYetABrZzpjoDMAgqafDDx8Pk3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xU48yuxx5qXuGYRDDSMMTkHHibd2LeMtfhpGFRnauXqzxAXc8pz42ZW5FX9cy3bFW8Gv4zSZVcaaBYmSHNnHiy",
  "key1": "5KuTM9BqDgWPWcGyYU73nNQX33pr3GAutSnhvd4CEVEciihbqNsD7uqf6aoYYZePHzbsNUo66BAr9BJN8E4vuyjE",
  "key2": "4fu7DYTznXWnLqHKwXeRQ1KUweebmJeGGboTcqzUvgcYAtSLjBXQwUUNQxWB8Xopdzq5RLjgBzxya5acx57kaMsG",
  "key3": "YBm3EtQuj9tECojzSqc18SgnyTen2RtDqCVr9V7dMad27V47ejPjtJYx16Lg6ZEyV4pTF2XewJuvVTtfF4CP4Sx",
  "key4": "2XzRckhe6VPaENHfsnmE6EbrziLQDwPq7uXCNGp3aEosMBDZovCTnE6avssGQfbKcRTm7boccad8687xLvS15fPk",
  "key5": "48QZ7Mio9f3xJk4Dpie6u4gheb1c3r4GapzEUv4kvWRovZUTS4Cv5zeXrWEJ4emYXFBjGjeoZWp2a48b3fjSEMCm",
  "key6": "5YDRm3mikjmApgVqGVw1G4D5NrRAefGnhaAWDjZmrJpY52bm7SdREu4YWRs3VKVQumstcRdgjH9Y8wsfJKCrWLhS",
  "key7": "2jyPvW9NzeDXC8z7Xiu4ajHygPb2geZEdd4Zgp8Y4TiYZ1AkcdmgC2rLoTxrnaWSVCNu5x2aLuyrjp2gFGm4KVnQ",
  "key8": "65m7ypY9AF6nPQmZzeigXcujeBg5kNjYvgDJJgLTJn2VtxCPnsDgXxqscDh4SggZnRAJ9BGn8r8jXTtw1YT3QGky",
  "key9": "TijHVaD2DcxMR4mBbY4fNjvoDcMZ4K1YW49RXcyB9YTBigSYvN9zVc5ozapCWkeKDL4CzNzfFcxNEG7GstG5qa6",
  "key10": "2npL7jqpK94eB43rBzJ3SKgv4fPEBpsPY3iiVoSZ89psqu7Lk2YXavMqdjfJVEEY77SpsfRLf9URqUjjbri6o3v3",
  "key11": "3NYZffYk9kyHNDfAbDC4GTtdTPnbFdJmMc7b4JAxEVxZcsPL49tMoZdSiBExH1ApYfkofUEr7HVdEdHndtJtnTnA",
  "key12": "jvFiaNueHH8bJeSo28gAGLzUTW27ViVnJ5SCSddKujhKc1ff88TsTCoTqTbJRxYwntE1535mtSD6gD6hduqYXtj",
  "key13": "5xDCpPaVcWwp9fmNeTVEbuAkwwism6zHyLGsctTKy3EaiyJxMhuEXoKkoNQABsquth3xi7gacytyBWt19wRJztdL",
  "key14": "3aHLRfSeoCw4xjmbfMunJXVYk9kJDKxzRoJaVXGTQ3GZMzyTf85kuLkYLfcJmWY1MRk93MJCL2t918eBgixm4R5S",
  "key15": "2RBPDnBRe2zaq4RoLNz1ko7yAPwC86iZkmJ7ek5Tke1DjqWreE41mmBaRciCrmR2L3yqWKduu6PNzRh3nc7NHyTW",
  "key16": "3mGZkaYMRuvsP9W2FTatQhY1VM1x6PABbPjr3VQFGawctDgHhiPiVyqJT6oGLGSxL92dWNZ6T3EqjZSL5FPqUk3B",
  "key17": "31NTQ5uRNHvWqiRsv9CH8Jshdxm2hh8wZhTHiYFBvRpofrufMKeTQw148ZPsje2GZ944gZV6RjYpbQFyFaPYtt1N",
  "key18": "3BEjcThNDfxeBJKMw3okKVhCWDjfY4iqHJEpgTNa7trguEweyArGkMkK35QAh7pePpQUrXjWzVRVpfQAhzpC4f9w",
  "key19": "2rcQgVhrmG8ATXJohavi9QDJrsepcPupFwcf5MVxie6smr2dfs1L1T5p1AmJFkmV2rb6mqDYXYNHptdsD3UWDBM",
  "key20": "4ACakEjqCc1jPBRvQwuPsQ447TVDpSsuESa45zXES7kPED6a6VUs4JDv88bnL2gvgjXNNZ97t2ZrU5BunsMGGdEq",
  "key21": "8K8ymSXgJ3741aDkyimaAKYAZ7TME4Kv9MkBAVDZRBq9cHbH1813vhLd15yrXZ6xA9XSkxcoQTJEDxgs8qibPTi",
  "key22": "3P46pwAD8FFLMhVEjHA2Tms6RK3WqhkUCdNPapjjvoSPywVgxwnQLTyqsrmbRU6QcGojn3rwDDmwe1Q9MUYqN4VM",
  "key23": "2eQLpyMrnzDdR47N9VJsFjC6cBEKYJJq4F7R2CwCinJr7w2ET8aA6eUcHP6nUcFoaT6fAo6ZVm3no4J17R3sAqra",
  "key24": "AxEbVpKaQzvbZLyxgJ8n6x1HPAxmr1tncfmKJwWAWc3tb1KGbLsKZ7KW5EvPMiZRxjfoanD3MtfuUwpgm1cdoaR",
  "key25": "5NVXob37vNWCv19xHtsEQ8BpzBBSrGEJBwNWtpEPCRV828fLC9x55uGVdvorxfZmBars62iurCe8DxWbyFA13MtM",
  "key26": "21dWwynBbuq4asMCo1eoSR8MNxSuyEgdyA12NKrjyhAfHA96VNAM8RX4UEqarhzKRQ2ZcUGtF9PskLWvAaHLJZVS",
  "key27": "t5vGYvZFXdE4EsTSfxNpvfzaAfU92tjv52a81cXG43X995irN7Qerv5g4YsdjmYC2n9m2ELRvEDrMp135kFMqC8",
  "key28": "3PjB5YjFmhQZyoSHqx95yX87j55KmLBDZnfSqCgvDGQ8L5WtDc8ao74utzYyF3Aa3PmmVEGajpBiqYZXQk3GoxMJ",
  "key29": "5xCyz6fy1PXPpLLAcJkrbeRNY2h7qd2Zgho11NUPm4ETYNjjDkdx1aGk5nzsHc41MFzzykSi3vQzL6yZuAyG4e6R",
  "key30": "RkBbUJugBL5g2uS4NLFD19jzJ8yq59Z1cYL6jyYXqpCubdFwuQkrhchVaoExvdtf1XQEagQ5BPunTRGdtY3PeUi",
  "key31": "2NuXZF8YS6TyGVEsjgCuF7ZNGEPiYyjXQG3xHwfwWT56qiJj9AY6nSx3XAUBzvVkNv2Ed2xcgz2omNvJePWG2yxq"
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
