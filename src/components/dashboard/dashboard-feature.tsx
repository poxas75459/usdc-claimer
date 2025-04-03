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
    "3YCjqjmjcg9QcS4WFuAC3Bvkdb9eEW6bxUGoFSHyMBPqC6RRVbyv4h5uAG3wYaHffztvE5eLF7SArpqXbnsDyVyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34yue8Fzp2zFix4pcPYwqVhD3EUHN7bFBFPcRszjg1NsB7E3wGoCGPDm9j33ttGiuR71qLzgShZUjyS6yUFsD8qX",
  "key1": "2e59U1oC8MNVJRejxiG2W7w7yUQyo9Gbc9ZM6FYwZsZt4FEf8qsNJch8LazV1Q6ESPxbER5xNnpJoow8LWT9F7N7",
  "key2": "5QhseghHGGugA57S6ic8mkFhfCZswCFv1s6YKn7Gz2HzrujXJQWgxHphSTJy7gVuT7Z8j9HMx6KhduFhk95TkAJv",
  "key3": "2K8L1R6D6ijKo8juEvqzQtECRaE6vjpoStSy9khMgP9otzoCmxtrrby7YJ4X47H11SMeGTjAEMSSjBYZLuHJD9QS",
  "key4": "67TiMiNgE1Gx1kVb3Wkwv5mychY2BYaPNDAQ5C7yR5goJZu8PFMbZEzeoYonRoCFD39655EKrHkpEW3gu93L3fgH",
  "key5": "4qcRw6Tcx68oFqb3s1ne3o7vLM8yQPCBQKE8iJjL4ZHKv8kZNzXR9yopH8jPcmhAm3mJBFEUSBDfaXuHbhMiU6Gu",
  "key6": "3sM4pghwdoyUHSBTLCGBZ4BDEV2CM4QobZ2YgAgWtayycVMtHfrCbHTFyM9qdZLPJRmkHwogyskU7V3d4YabAQ9s",
  "key7": "3GNHWJnMmMDsY1Us4zwW2bL2GYvsenL7ZrHW3GJis9R8UP4AiMoKzHc9aPCbigu2EXaHMVRrfLkkvxSjkbPe665q",
  "key8": "3n5UpwyTvmUvo8JEWZaeP8XUEGSU79ncBTLjQtKPDDPpiucYdRffHaD2FpS3JDm5WKReogoYRrDDadBKxQAW1iaK",
  "key9": "338mMCiWRzdadPsjrtkwZLBYnWR9Be26CR2KaEaJ98EAaRiH3924foV4RbaYRP7rpEG2AHw5LDBwE55ojwxkkLFz",
  "key10": "3rfSBnfKKWJg91R4RYR82xRGw2Sc8N6KSrE8R3UBTWikhLfA24sdtkxn4Z1voLZR6kawZeJ8UpD4oPa1H3PjCRrM",
  "key11": "2VkYUZoHjLtGmKxXU1PdUsUtG2bf2q8KW2SmhPkDEFHg6cqsHy66G1CJY3UAtv5MBaTWMxEuB77JbkTeVfrnVESW",
  "key12": "5txKVBpU9rMQhNVhLTtCic4567wquvkRpkDvWdVsAqzqShjDZ96XnKkkW6BeLuNc9Mwoo5fLjBXj83Unt5g9FTx1",
  "key13": "3BFCCWr1VsJWpfczWN7fC9P9G3GwwP8XpTPuB3ViWQzyF7tqKN3bRzQvXk488cwiNmUsgdaH5MYCRXMD9p7yYXnZ",
  "key14": "4orDCv2RYV5pFNjWmNRGDF6kNi57MSmfVqTwVzReDiMbQ1LtxkEYpShDZwyoLkEBDwMStXjShDR3gSBmBVusyy9T",
  "key15": "5kqB4HhPt6j8QHqCEGiv43H3Yx7GJssVxjFR51icVjEc2LikXWBRNk363ZV5jmqZhP5dAyFHp2eEdHYpoWfu2Szo",
  "key16": "3wyHCUfGxSJosEbgyjVYNvgoeP9thL52AQA2euYRtENme7YmM99FweykjpAozbmCC8yCYyGwmycJHMhktFpBuZG1",
  "key17": "2UXtX4fBouL4pjwkZkSwxDSmyPzNxVJWW1XVx8Q1kw89TaozRs1hbnqnTFvA1BfpeCuUEymYzwTK64bF5g4M3AqE",
  "key18": "4bufpAGXte3ZKw2CXNAchDTXSnjDFpVdSFmWbzrbhLMXK9N8epKRgWBofRynotT53dNETi4gHREgeohwmHWu3qDm",
  "key19": "sj3kPF2KFDnomrTVyeXHmzrEouELq4HDJF65gHaFLyox5NnBfEKTzjP43KS7jJCUBpYeytWSLMLBHA1iHFwQ4y8",
  "key20": "5dGZq4SUJ4anghQewEx8MTyx2nKp4nrASoJY4qDDqF6YrvgvMZGynuMkSPmUWzzX4ibF2vkLdhBUfT3gpP4LJP5e",
  "key21": "Qw53W9pFaswRd6SnmbdKzqfByQjyeUrmz1XYUfjbBU9BYAQb7Fu7CtutF5KiUxTgFyMqWtPJXaBccMzpeX7Pid5",
  "key22": "261DsuTPzuxDThNk4QV6k7UPx7xsAhEMwayge3QtPBg4ZwMsQe3GVjAet94nrnFB8RadPp92xb7PxywbAJs5sshN",
  "key23": "2p3pvs5hxkjxqBjzpyfEocD5oZuvHfC5pMrAaEq1d77g8a8SJG3v3nKeJHRfzFeDbrKQkR5qUCJsiAwKxYiiLLT3",
  "key24": "56NstuDZh4LfXMXosYsPTyWURGG1sqCVoF5Vg6v7NdLKpfWu4vwhX94oL2achYmUuhXDrMB2qvo2GGd5gLswcSdu",
  "key25": "RDZdAqCdiAUKUeScgP9M6ELhKsdHjAHRJEnztdYwg25QutWSnRzq8xw2DDMtMHzmnohknztCBjCYFRhtwizZTQD",
  "key26": "3ssE8ZtoVXBmay4fFfEQteyG4TboLkwLvhiHzn7MyT1MUrfgN4nKCgkH2hAMrfe9HBZdCNSvfWRkiKPK75fzRz22",
  "key27": "2KjW81Zwocf4fqVbUUd8SJnNBFViGR8PKLvxanhXT1T2VmKL1idGsMPRdNVvNAaMVrmDXies55jv2z8S9hgE4foQ",
  "key28": "4aDtEzgNkSSJuB5atWS1qdXRTgSN5bqKxKQN4X3Bife2zGAwMpxMwAJ69b1bZazFZqJcfMsFNafVGRundoGxMWb8",
  "key29": "4goe71Lmxqi7tYJEzC3ncHDW8TisUe5DAVn1bT2ejvg4si5cibLajqWDhndmdb7bQFEbZc7e8JhZjzagLfJrg5JZ",
  "key30": "SBaMVxNNVuBKUgNaj6SbQayE96QD4UmKC6mo5ymDKLm1AEUdS7QiWgYS27TJL8X2T4R1W1XxsyruN3mSHUETWf4",
  "key31": "5YSw5NCYQaTYvLJh7gfeFNudCjAPdaB9kFwduBRvsuv3s4fdgcxNebUVv5CTQetGvwespMQgxkiYAMGnCeUV6Dou",
  "key32": "4CN28rf3v1ipTd7LsFzvu1zrtHXxCN9jH2HKygxmS7w1y3AtriF6TAEBjYKNRWekfCU5nJUVAL755gSBRoGaSEys",
  "key33": "48ntQPWMHPQcTopAhWzqmNg2hM9KwWSeDSymqEVKRkPdwt6MnjNhFFnrzC4fjbCGywdGP97aEdst9VBfTGtvE14P"
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
