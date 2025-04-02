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
    "Uh88iCiGbbsoyD5NWNcYs12FaYM1FttJtje46986MmhqMZrZHW2SsdgXgbKhKfNNN57cGYaS1hCVLziAgkZVwKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQoeGWeBnciBDzytXDvWpxWz3VK4eZToSAzk53W11r3QPq8Q7bRVLncgjMYnQxX7exTYjkzmX4Y4VtgdMBYkvfk",
  "key1": "2BNaJSW9D9BXAH8eALSZGqrujfAaPwuwR233TakZvavaoGi9uvKNd2mNgkh2U1XfrKUfo8GS2H2vj6ECuX5B2dU6",
  "key2": "5SUah1Ju9fSom6T98du2Ef2kpiR9T4QCH9tZ2dsUiMCCo6DPSzEukjhKNb4H9RSxQFAT7s23CeY9uEUjZ1sjsVVn",
  "key3": "3Vym2rX6uiaxSLhDunYiaAVc4dZhGbm9vqgcwgzQUiGUNqBygFVaoxrmiPEKw6ooEEXkJtY7fUn8wNdzK75G5hHc",
  "key4": "5Q4A5v7G3dBn6NcL2cu8VqEPBMQi5nhKZ98g8HbcQBFKKpdPJwGnuBun9rpvtW7y4oMEg3pm3V8ZaGfJ71uyznHV",
  "key5": "2yPqzF6qh19LPWC5kerNvjzUkm2g4mmXsDKExnvYyCePtAyYe23Rvm9rxNmwhuoF6VAnzrKrHJXuCgFsCVCYb8WU",
  "key6": "66NpYhurEF1K7eGLowcV32MccPj2HN6DSRQQhKxLqxL4XbtVCCm5PYGVGfgCsm1YasEsqRw2wsyXaE5zFSFnGM1E",
  "key7": "4VRuVV8MzXVvFDv2xvZYtU1Kx4tgvKisXrqd13gR4bXi9vQWHZJngAiLXcbdQCnEgqooj9RRWs3vdjaMyoPUeGgP",
  "key8": "3fiecfEMWJEturppWBkczXBDqD4hTcGmiEozUNC44DFnQVUjmc3r2FRyPDRthS2vKKH5zKyFvZGGK4xc2nyritKi",
  "key9": "2VnHJ97WjW9aGTukxqEW4RaiKtNY5adNXxhF3HBakSfoAmkdbMcafaGHqQWwKdb6aRy97Q34hVgSHbrThHZTp9TQ",
  "key10": "3sosejAqQfoToZZM1bThXK9v9pJQeDgEoime5YyMunvhTfQ6wUz4eyfPx2CPPtWDzgfNoVgoiscUf4CC3UoGspVL",
  "key11": "4Xo8yfg3yTuoChpkSESUqVwNysimGT7SKrZ7cWXaJNsPLPu3LroT6UB992DjMu4kMNEyzh8DzV9Kvq3pan4AhKcm",
  "key12": "5voETMvZnqSF6NsrrV2pZCMaxe2Sju7b689nGy68VzQWJessDtwiEpxi1HizsY8sLGrqfaZrLfB1quEdKv7FBYZV",
  "key13": "kMgUq3su3EcpeksH5uLBcxUfHg4udjHgMJGzCtu9uvUUQvM8fQnq3SPorHS8S6YscMQPAyRCDUM8TMF1aBU32wP",
  "key14": "2QKyoWCJwiFzEpPWFGHiCWDhZ5XBFYaYoNw7KWrwNHFZLG3sTxkjxwgzbFAJEyZWE5XFRyH9WjnJGV6TCXPwEKRf",
  "key15": "5FsTgP6qVBYZ5CAw2Ur2ozekRS6PdonBWpFJejqg3CXjf4wLKd88HeUJoXjkofNqEG2fvapMzaHzQshMLcaLCaaZ",
  "key16": "3wUEXwik2FvCLz9joMsPCXBbxQbACvxRy9TV1GXq8x5ft9uk2LPJTBz5vu3VCNFCccuRUouCCapvKAduaPkoTHoc",
  "key17": "48DpL2D9dxKTqWQedUcYUvWFYfjPBnZbeLeMGz73hvvx5LGQnAgRXGZH9xWhwHdzBSW4j5uW3FTPLwNZTFGmFAJk",
  "key18": "2oT1kd6n5SJqs3RkwqADXBaEiQgrm3VMu7cUcozq776Gr2tixSoDAKhK3mzLKo4hm86obYcpH7rsVCEEGXoNiNd8",
  "key19": "24EhXbiqpGhsTeHWWnBTn37Atzn1Mgra61FByT2X3HsaQ85PxTKDgwhojHnLeWsxdd1CY8MNNmgZCoJUokbkmH2P",
  "key20": "2tDd2LwsbMBXJ39EuPP9nLeMitqsyUF81K5N5AURSq4BSfpGpvpFuA5f2qmNBze429UGtbU4FmozVJsxvsrQT85X",
  "key21": "RJ1Xko8pWxCkkLxmLrmD3hrqan5dbXNujW7zzMsMpQFtop71x63BQEnTqbpnX3PJzwCzzvSYQdkBJkp8dmetfz9",
  "key22": "44fy4uPcxwRXVmcrGnefp96CRyfBsKrs1fkjv6V5yRhYsFEyRzbHwa4jzFpemp53E8X8HbycJwKxhxBC5p2QDe6m",
  "key23": "47Z4MA5rf7vcnkkLAVyjg8HDSdP5S1cnLyV56KkjbsbgCsBs4gACEG5549LVwVyhhEZkj64BcKFKGzD7CKVxcs3Z",
  "key24": "4avHiyNWQsr8j6tkSodzDgp7BuRUBjqL7owTyZ27eNVuvmuNyei1gQCGGm7h8w2SQ5wwq8ms8pP9RLwi7btizSoX",
  "key25": "xN648Boc7DfaQnjboqdzkD9YHfb6vQgY53ze6kvJRfASUWQaGp6K23UFgNyb5vZhCbktV4taQL6iLL5RWLPihBa",
  "key26": "2mBCANScuWLAnPjyzFNMstowh4j3edUwuLMED7HDTTPkovH1Zy83NYtxu4ND9LwrtmLNCM6bRW8D8Shdm2eY6dQR",
  "key27": "3BVW2Pj57qqXwvUXqtPURang2TJhoQsYuBtnsJvSf42Y41opLugEPp7soHCodBYgyERvtujQN7wubmjAqEnnyVQW",
  "key28": "5m5wU3eikbXHVBruEbYUuiastNoJTb86SYh2wVkLHhsi9DJxWyAnBYNSax16PiJn6vebAEhYQuYqkssjrkYjrHnx",
  "key29": "3kXyiV51aJ9UdXxx3pP88GQhrRUXN5HfFE87mLxX6UWd4RpS9dKkALzpUAtzQhjzdQQV4JvMkYaxcSDu6PX4ACtV",
  "key30": "3sBp7UjLaEV51qndDWZ3z6U3wRdDjpAj2sGiZxKGm7K7ATgJ8g4zrp8U8j1bgdFXePhu73xqE1bn1JeAgqaZ51Nx",
  "key31": "2mCb6i4pLZDu7SjkqmnrgngY2FgiaSPU53kypwwo1LvLctZ8r99uZKxBGfG9C8NctFYNVQ6NJ8cHjPEz5NKM1of3",
  "key32": "5UE4bRsgdVx6ZC3WMsmwL8PtVUAcKyNjHzR9PcWeFZ1xYqiV7nWrxyCnUStJzpguKMDA57VH6sh8bHhP1c5fi96G",
  "key33": "5A7uvRQU15YpTx4i8ZyCH5R4YyJCyKnS5FfNh3bp6iA98ffviTsQEUvp4j9fKf6fyowueUwgRCPwn867GMoS6rjZ"
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
