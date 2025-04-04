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
    "38gDGputjpf1ZkTnzKzYrFEaEqXRCQq8R73bEz46mGUEBbFrzkmcfdETmrtcZbN4DLUKQLHvyzuF16HXtMLcBGdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RaZhR6nRh38wXGzndNY1BGBznhxacsqgtq3qq1XJkbmp1bUxeMEnpDMKcpmTeedjCoKyXxDWuaa8HSbYdUwTn7k",
  "key1": "5wfRRYnnwe3465LXv7FUiDKTJ4BtykmwBhEFnyDDRywzSFsi3DUSmKdZfuMc8T1b8ZvVfRg6yoW4QkJ188VW1ziF",
  "key2": "Vvesc7evUvJyd5Xk1bpBmowsLKPAtXxL2fw1svERbdsHTicPRgq7KoWm7Sam57w5Kf8WquEwmyB2kp87u3RJ3nn",
  "key3": "5BVTmqottHrJbNJoqTvC6c19XYCDiAu3qKR4TGYvzhGrN39KuL5cYDtFJZv4JJDZ38DADc5DUxYmonA84p5QQBDk",
  "key4": "waUMEEHT5fgFvVm3aypQZaCGSz4rYAENZLN9DD2gfNp236nLdkwe4HpXxWYZAMMSHFtZycH7LxZXMaw52vB7gyf",
  "key5": "4Wy72oXTsvF7Rcr1ToHiC691KthRaHK7nzq44oyu6soz2B5Xnw2T5gAvvzj6B7HxM8fN16JMW5oASb6kSgRY9yHH",
  "key6": "2GRCQePWSDZerG36UZjwDP5eHWB3EW2sC8E5U8j2wkgYK712G5aUJcXRM5EAgNTv3d9HZNGentZ9pevgySaximwh",
  "key7": "4PC18ELpYL43m8LgjN3nPpSAFoh3GA9BGEq4f1uzxbucJaGnAExFBvU7Pc37q5PbEVN1xPaN3fZNuetzFnyQjmr4",
  "key8": "67RuKXy4X6WoU9jvsQTZpZqSCnpcFGgPAsSX48CYdPwD4i3ojFussKzawYwNx8Hf2cqUuSu15rBzTzZEne9Rgpcc",
  "key9": "5LAWUT1YPDcVdErouRr81nuq32stKy6vtYPYxLkWZmghbqzYmuNm4Q72wGyMNN9ebi6Utn3kTyoxuQYgsHbYwhow",
  "key10": "6KsWiCNJaX1kRJ4rGNFTAwLzpo1U8ZPxwjyURnCYxJykgwwDevAh81DVvUYhWJ4xA48sWLsJF1rXQtejq4mtft2",
  "key11": "436zQmK4D9rBBMxfhEioUqiCz3ujURSJgqapECXTmnbsxSsP4yGF5agCG6NPEtrvoVSfRT552MPdVQaYz7EzAsT7",
  "key12": "5ycDJzix29HkvhdrX2HaZkaP94mWMjSEnvzLi9ZPmhs1XEeks58PYny6aUfrRx1ChMWUxzHitDEodYHqGYUd2ie7",
  "key13": "4Ao2SLGSoxbbMPVPiHtMUdBW8dryRHnYtgfX8ASYW2dyJsX7hTu6f6nJGac6ebuT56SZXJbGNA5pmUtwmUsKtzCX",
  "key14": "5A8Un1S41YxXpBKJ9SEhP8hTUYUHnb8HAisi2krGA4We7ipuBYeJUJVJfPqYAboRu1GYzP4NroH1KzF4eiMhDKRg",
  "key15": "sEM9GZ189ZDtMpvnQWDnKNKnmiEcYGB9Unrkxja9ueNMHA7VEvcw4EopqFHs6fp1va5ekTveL3Ktja3Um9gvo89",
  "key16": "3aG34GfAJKTupMKyKVtbdtKm6Cb89zerVQBn17zg3nGZ8rnNLnRRcgkhc3fDRReawSWpoApQG2skAzuvjXjwqEYA",
  "key17": "SFTmRoMnKjpLqfhzRzddayJDJa11reMQ8i8TTmr5Wk4nBg8ALPMv6Wk7YS7sxehQ3Gpckks7Q1xmeMAKPibDN2P",
  "key18": "5XoQ9bNb8d1YeyaUc7tE6ZZi1e6Sb9LdDTJsdMAAzs7msAh2nUYgmZn4PyLtZUoFbwb7XmEhc4eatmP7C2KiowBi",
  "key19": "CHSESpPZS5miVmSqsZuaKcFQYHcsTwjn2PuG26E9vTn1yKcm2XuMrL6tNoU2vUJFyUaBVEQPZGsq2pPHECrcHbF",
  "key20": "29CXYyM4oSebX78FZmJCqEuCgoqjcXN9JU4axHc4EgUDfXnVRZLDE3jDGFQHL637Mobi9GkdQJjfCCDrD4oPJTtj",
  "key21": "PsTP7Je9YrAHhBNaUTG5w7QB6ve6FD2zxytWAkRHUvov5AhTANcbxeHndM2NoxuLVASjiqUDgZwjkttMmi3DsP6",
  "key22": "2F8Q8sFnFyiGs289k7Bb3Tpdf7ZhCgNoqVafPt3w9pPNx1qL89kf3gc71Jt7WnuthNFdhy5Hzezr2a29uWMZyocP",
  "key23": "5J1cUgpBXpT57gKh2YXANsz1yUaQGTwftFqAaA6bmv5X7qsGp9Vk8gfJXD5UR6ofVBKpA5D7nxARNdvw4xGpox7v",
  "key24": "3hja7UAfzj3bWU3QdNqHA6NfGM7V5asaQCq55fhJbdXD8akcBz1mNcAJbro6iEmEtX3pCUZ8mjRv13n4SaswQcTa",
  "key25": "5C9Ehg6qq45GN2EiskCc7iaMZ3eC8HYyDSX8y3NHbKc9F5kZx2T7pNegumanpnFvPNE98zjQfVhX3rXtmzDecY1n",
  "key26": "5bCv7voFA45AAQfiZVNL9yEfb4EDFrSHCoZ5WeL9ia1U4m9AdfAoBPdAZu1UJFtywhgzB8GrxQCneJQiGvPp3MHz",
  "key27": "4RSs3hcgcxyDtXXZfR7mqYYE7MPAoGppJVPme7uhwLn3e27SeQGpxpsLrqh9wGx321wT6Pr85g2f7HT5n1aEbmPh",
  "key28": "2EPCPnpMwxPck3xWyq5wzK78DzNdd7Q9G71nBGrjyZMMXozQ5aGJwzBbF2fT391UoezeisXTrgWuPKP3vfDxNAsa",
  "key29": "n9fqCaaGCfba7xrhM8ucBqwFGaWu2cSopacvcdA93YGvwuYZR4Msy1Nyu8hfyKHi4j3cEmrg7URRR71ut2QzZaY",
  "key30": "4xoYxuNtvdfs9Z6EwjiQb385XNXhi9qDh5MXiK2rkUGKFfXhNBHfJcWC2usVS2zhvudnU9YynPu54HdF7vN1PHcF",
  "key31": "2ndmRM3bfE4bvjiFGpVyFiMPJA4rjfsyeAqrBK1WtfkWTyLVhLZjkxjhx35fSGNUM8J842ZHAXEadiGSihT9VPQK",
  "key32": "5CAW3aq4RcBbsP7VJXK4JWrtVma7QkuzuExEvPEQgj5UeJk9SGV5bDAbwUkgYXtmxhpP7seE9evsPZbLMC3YRb75",
  "key33": "DErNrPMB55SNQpFiKrTCYgm3EQnRmQKCPtFDHh8KnLYnR2Vm5sEtakDvoezd7uvBsnAdM2kGTAV1iW9FT9xZuuA",
  "key34": "56sHrTsD3qHmPYpDLSU1DJBZXsCJbTN9m9YVQUD71q82wwT9R8Vq2wLQprekU3yxhBUEG57Pjq5XXzVDdDGeSAQG",
  "key35": "PgNontQQ55J25VHiDgLrMvNEBeYYAHnSK88LuuUyQ2fFRJvXWfHWDZqgwi4nmdez8sfmaBSueokyncbEZFyrjmn",
  "key36": "5SZ8bAFbUiTXc5KT2GMsNAEo8zafNtrKq4np2YRR1UBz1uSi3vyamjhLs3AFAdsrgqawfFwThkD5gzThPpqS8spk",
  "key37": "3Ghch7BNtaEA1PTWZDmWUFb8kmdg2DUfN21vRTMeq96AXrZkyVVCvCdyA1c4m5FburZy1jeK3G28P8kFCcfsfx64",
  "key38": "2iVwhD5d4Jhvy8epUBNT1G7MqVECjMLStKY19Vt6fL6NHhQeuhEEnBQKSFcaxtJi3iYkjBm62vPVpfZEGitjpspy"
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
