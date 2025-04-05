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
    "4HZN4C8ZMEFkNtQjvCDr65sBg6Adf5Hx2yGYS5fpj7iMBjNaAAxxqGGmivbu6saQUCXXR5tf3hpxR2R5gLhyNnFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Dcr2visjomMD8dEhgHJgrM5qYn8mXDLaUza8efLdXBw61T996t7UefzGKf5BAh4yVhd2nE3zY9xbxw1nY6AkJu",
  "key1": "3SKw3Yn9QxA8RG3MLLVvdKd2N67C7SehLewxWPZbt5gaRcEX2UNgogmkTE8HYDSgjvMj9WnZ1PzuYCuv18CLgJjc",
  "key2": "3rqXR8jpGr7nc8yrdtRW4A4EReChDPGywcfmKj2qeigR8Z84cfNtSokfSrRiPrteq7s4V3RMMy2t4Prk7FgCBujg",
  "key3": "wMSNniFRduKL6r6tdUFNfxAARYLz8ePjatQmTx7eUjCtzGFFLjVZuowAcRMoWfPWkNRQiKMwNe8o1DKYxY2Pxnr",
  "key4": "641u5uHr7MwGxUQSgDcQE9aT1yqJRw6QL9Qh58sDRfnjmaypPZqcXPeqTMwHtEd7RkcKz7f9392YJryqmNgXqGJs",
  "key5": "4cVDCbD7uF5tweFuffvHtiYsAgneBwF82EkSttycEW1TfQCvtwRLf14jHeGNgycJMorhpANcg6E3GMJgxi1SS5eU",
  "key6": "5ZSX4CZR2b1hCTEhUD4msGYTLB7zkLEB6EDKVCM5fkQCeAsZ7M4H54hvVhiW9BNdEjYEt9qXdArv22PtsTdHMUbN",
  "key7": "3LUfcMPCr3bi6aK95jV1GaoKDgfZkGo1jQAC8wnY4ehUiyWqKKGF93bkuuDkJxbZfZ4eaeMYgiwKhoRjCi7RjKb7",
  "key8": "kVaJeTuS9ASEWJtrKyHcbfiQJ8r7zGErq2hYGFutmsR6BQVWP2TXCaEkAdMLx7bMMZKdFNqkFuk5ynFZdvasnFP",
  "key9": "5ZgpB2ZyZRSnagqv2z9xbdHS1cJhzWKeCwgmm3eofMiJQYY1SootMy8Pwf9SZ3He891ZHV7bCy2ks6y2S6F3jCn3",
  "key10": "sJa55Ac6bamtNYtsKPeCgByYvPvStd6xrfahxtg9Yh5XADTLefhtKKpi9qCwsfLH4R3rhpCPER519WeWVypPFDB",
  "key11": "2VCj1AC6pvfXi5pi3VdCpQJEzbDnnvBHKcCk7wLDFBJxZxoPNU3kiucFDfzeLhc4nLu3WDwD5vv6KGfsBd1aghPB",
  "key12": "2bWf7Q1JSSM9utdFkeeKQj5LgcoR5covRV3NxbEJhzR3sNp636fdTxyQU6H24YvmAAv8QKoP7zDqHo9vp64jV3FK",
  "key13": "3mkdZQNtvMmuR58uYNcaTL1bxajNT3un9vuagyv38STzkf8U7NhDPfnpG94u9cecE8NRAY2itsvHD1Zo2KmspxHt",
  "key14": "3uXY5EnJGK89YRgivyAiXZp6eoDLireW7dvcMeYNg3m7cZfuL9Eiei9bQnC95eqBAWtG3QiFaWJ5PhpuJYmGfnEC",
  "key15": "5y95XQiQ1eV9DqoHw7FcaHT224xkrNzzvVJ48zQZ6HovDKmkCVAgYH1qkeAvN2gHYeU3982ctTkDd5AwpyiLeRKF",
  "key16": "3pL8VZ8Ma9Z4heUnav9phQHZxQrBsmZBDbL9cXjaH6UZcqwStcb4Bt55w2n4Yjf2TrFBqaiyyhMuuwL28HZhZxkH",
  "key17": "2i7oNiZhXjWwY6twzrEKKDwss4ihSCghXyat1gVhfK4YtmxjVoJe43vPU6LpQHWDBqo9dUWmaE29zrHEEZ7VSRtL",
  "key18": "2oZLYm4BtWg5xVqNLoPZGW1CF2oxHsaSGw7EdmqcspJ49HGZPUzr2m4bANohmFfufF2hSo6Zc6K8Q3E8usiNys4o",
  "key19": "WXDQABVdNMZmZRgwfzgi91uYBCnGrzqEoh36E3fMXAA6HN4b5sPf5uetmXDPyk48CnQzhkBwa2VoXFeRiiR6ZeL",
  "key20": "4YUGmhmP9kfv2Fh2cRir3CAR3oEqWK9GQx5Nb4KbjffMScFBjnvJs6pynXqDu4x8eTK9sxmHWA2mgJgLu1XoDyc6",
  "key21": "4dx6Z1feH54JHTcCdDQo7jHoVuhS1xFbtzgJmgfqrfdX28m2aQt7k9TYf9Po9HjzzJPUL39hpdSHzwQJuYjoHtJr",
  "key22": "UxcRX6Zj13qdkk4cPewRMenG3aVgSZT4rppyJCZJiXjMJs5kgxTfeLghhpFLseEHuLFV4LZuR2RjNsmz89LG9zt",
  "key23": "4BU68GwJbkzbvDgnXLzWnePBSqkYA8C8RLvorJuSvHq4U4oRia3qZ6zm5QCfb8uvvDTdH8uPBB1YcioV3KMGno5e",
  "key24": "5sbBBMwNmeFL1txoeNRVs3h66EwSe7mfihrSUe4PmswCSyrgtsaRVmg2gwgpyANBVZ5y5tv5RuaRf8Pegvprstrt",
  "key25": "48C92BXr3EExfJ4kPXxAwd3K4Ft5QLZmQKL5FrYYqwrqgXC2B5TUxJL2HqHBeHh2p2bAhagxTBVCGywBnoZ16GuP",
  "key26": "3jtWStp9wGkBn41oPJmsozuzKhKz22rv4t5Znja49Y15DhjtEa5eT5sZzUo7SDU9q9BWejUajP43ryTSZBvmav77",
  "key27": "4U6QnptD3RkLkRen5R8F4L8uJRMbJGVXvhWCj7Hg6pPJ4f2U5cQrjJopRTaifpL1CehLW4X9nGoVKR5pthYxK4fi",
  "key28": "57FTL5vSLDUB9XFozs5o8w6HdFvaSSVkw1rByVZw5GQQhmqU8GUfZ4Vtx3udrMzeGyPvMDmRD3Ao9HBHXGn4ADAz",
  "key29": "aDP3UwZ23aLzFHPNKpk9kxpDaBj8fPiJiRqC5rSsweKikFoM1SyXb9AzEexHVjb7PUKp7yxSSWYYKbC5DFRrxQw",
  "key30": "5equCZesLjcgJNsnsGgcgCzbafm2wsJMeWJLHWmmSzgyfxpji3dpRmbLzKXCnkgA9uCQig4JKXXJkYkWJ6jMdF5e",
  "key31": "34rBR1Jmm3Gtm8gfheXCY5wtAnccq5Kap6Yv5EFHRig6JdtoKcm88JCEJiGMbAWreYGJAirAh9G6Sh8NNXXa273Z",
  "key32": "3thmiKY7sepZwMfhvP2ugyFi9zRDG5a1NJ6wz1e2JCCdenXjcDoEPM4noT2uW2KrfwATxaqSgb1Yu77yuvq2idV5",
  "key33": "2UmdogtiU7aBe9z1Wg69Bj3AkcFEcXt6dTMER1qtyZPefXzu2qerpQE32zHqQPWvHNpKEkfAEorCGdKNtbmxqaZC",
  "key34": "3gu2BsHw7C4ThoCKcvn7jda3mKHPY39SvCBvq1ihvYu3FHbW5PCE7YjtxHiLB4b641oMKDaPkwZVeRgfBDyQQJZ6",
  "key35": "62CSyMPLNJpzVkadRjwxKLLLUAkyyZHWXj3rYNjYK2VgaopbDroon9sHcndVXZ49TSwafVxscbaM4ZFKea3b8bNm"
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
