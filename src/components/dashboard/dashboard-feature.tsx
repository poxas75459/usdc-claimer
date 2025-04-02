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
    "4nmeSQnz44SEJrtAEnb1QkEJxr4dFGH9GN4wLe6rfLr1KQ3vcnpvdnkYKbKmfySyseD5ozrt1JeBPW1TtPvaNE9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3saHvbtv5WmPcaCL7ctQMtLGmc4siQ1bAvDwGfiyKustg8U3cRTfUU2V35guXYXNdZFzxAqd3QB9eQ3sTJDupgQk",
  "key1": "4hRqoi6M5k2n2B2TQ7BYkXsGGE17xFpWqeav2sGYEhqTQH4rtnKB4spbFv5rg29zJmVnLKxj8wxaW8FK2dGrwvVJ",
  "key2": "5AsgUPk8SBJscTsgEABGU2rKGeuuU5kr2ZNhaxJygNHrGF2uB7CUzxtJJeAExDwFGMmpzUyJGKxxDs9Y6usCAw8J",
  "key3": "gJCTBD9yPmZbH8VHvTsu3jCnVFcQc412kG4FGZ4iVisme3Cx9oAbrPedrnhvMPWFW6CrRMDMb1Lq95FYLqg7eF3",
  "key4": "3A7N8MLmWjRLjLNZuZ1pPNxAAdpmyHCJH1SCs36ArvkMcecTMrTX9LCncMJo1aiXDQ2Yfp2Wyqna5zqP5r7zEX3x",
  "key5": "vWBXkQaUGuXDiL9vnMxTjSyWS2NpLwm8zPUXpSfEBo7Y4e83AGzbCC4rNFaQrHgKw37PUDNrDJTRAuVcWWXejZt",
  "key6": "4CYhY4JTxUNsPQPCwDccLFtFKMeChw3wAa7C1LC8Gp1mquYJwH9CWDkmksstsNXk4t7bC5T7oGY2VWeuUunBZs5d",
  "key7": "FXppq98h199RfLakAedeiU5YKvvDjaGbfEX44ejhzNjzePR2hpB4JZJrR9Tsvn8ogETJ2ARTS5dEAnoU6SgupMV",
  "key8": "bk7Wqkqq4sCdhqKBnoxCATkDWLYVivBVZF5dkVpHGxbXNcR1VqF2Pkzczr3bS5Vxo3sbhec3so7iGjGnqdTNQuK",
  "key9": "4HBVT1j2S1sQ3ESvv9pnZpFEdz3aQxb5mMhuXP2qYogPUJAcEQFQRGg6mLtrAKdJW5XKG4R8vtLAgjkmtvtZndx7",
  "key10": "3V1Bxzu52eCgaXBZzPdW89yy5C7QKR98wBANYRBn27nPHVUjKhTazAWZCpdrnw9NkzttpJ4ZWcwxcyEyHjcBD4NA",
  "key11": "4j43SHDfew6mix8b1uzZHuBZxGuaotEhpUTMYGVrYjHagZf7RWLx4ZbFhjW53aV5rvA9PX9eGcZgc1undxCjfN2A",
  "key12": "3aT4MjbqsXBWzLmk4nMuib8ZLG116ZPsrPugsgmQdeA3QEWhWApEgdHS4MKbi9UbZvrNNmEc4HBMBkeKqGbo8Cg4",
  "key13": "5jmDNWxkMm94iEF1iwcxhxysdF13hhbFQsbchHHi8s8moF83zcszrSDN8fD7UhCX1ovhn2rhJtzbYwGBqZ4b6sMn",
  "key14": "bEoa2Wc3LXPXo5e5Zkh7PGvyxtBnnQ6KtgGp2GatNeeXqBnbEj5dRgJxFJWdsvJQSTNPScj32pJs85teZGZwjoR",
  "key15": "3fyzFVxKvj7tjST6wJtf9qnzvsei277rURrmKjkNwhp5CYQFXCdvU7Voco5MEwEGFLMKgPAsNu3581j88ZheLSu6",
  "key16": "444uduQKh9YKtwkVe1FXdHJvaNzyVZksnuyJjT6moCNxfGt6LAMmzSeBdCSAr76jpAWqMysGKTnhsep3zoUnQCSf",
  "key17": "46wyDSrHdaNrrZwMY9LcYfJ1bANTc6Zb1SbFxWpbkWSxhX5WVUcYWHUkqjL7h3FPvfinvPqVz1nQ5Ro3PFMF2K8b",
  "key18": "5qD3RkEyArF1FGmmNongc9Vk68PN1pQ2EkGmxA1iCkFF8tkr3D6fhAp15VYr66R3EikPtFseZ9WqTKw2XrRSF4Lh",
  "key19": "8dNZUTVA4M4zCEfmXAR5ZeERnQEPqwa6Z4GE5VswwNibptYyAJii7MZwyBZ1gyqpb2ce62rN762V7jAz2uiZN58",
  "key20": "4q5AsmmSSQRLqUtG9fQsN8sphErooMTW1vBfR4bmieeuPJ3DdMZ4PE9T5aJmCoHeMoNEFD9n2j3zgvwwb8oPbtv",
  "key21": "2ApzU4aMkZp9h1rs6Hw6fPY1H14tiGXysA8DkGTZ2kip9QJiBocEn7D5SuZEg2cbrWcySrAXnL5FKLhvaQsA74j3",
  "key22": "3tFgUpgZhShAyKdc3P8XwupJKKVbF9Bi4iLEpQiBF9xoNLWGc5MPKeUBcCWZJfkrzeAJiKHfMkuqJkSate6ZBepa",
  "key23": "2gJtcHEQukfByJ1rMnvmhYad8DZhtWprQnuMQ8darr5MraqxoJmNfbZhgm5ouQmq5GQGzxAuEkZgZk3nNGXmDs7E",
  "key24": "3VBtv9eDGFJAZ3kcLcpRBcyPBhkqtyXp7uDJksJiHPYXpAcckKRJDnenNiShWsTBov8p9cjecSvwdfgp33mjS8PA",
  "key25": "3X7gZKxhNmsk8p3QKT285mdMjd7UQTQCFSa3wCeGtjcsg1y6vUpqugT7iDt6ThGjQ5LhUykn7KBF7jsqF276sbLA",
  "key26": "asULC1RuNL8shfTUUA6WzyGMWrzMJhFFSTCkLu6XSL5UZaDVVQ1Xwv7jRsDsn9LufU8ksFVND2t9EQS9Kn7pQrF",
  "key27": "2p3uwJvcqNmB8GJmN1S5VYYbqEqDVWA286ZtidrrcajDiA21pu7ybUH3Fo7skN7vL46M1qSaMPAmiSchvMpwHaNd",
  "key28": "3Z2btngk1sf4xr7wdczxscxR62ceJEsfKTE5BMuJYFRfoYKatFJVbZ7ReAX3QdzFothVdCbC2LhAe8baKyvgks4B",
  "key29": "4s2Fpg1cya4NkVqT1RS4Qcb5Tyb5TpKSiE5uwdNpk6dLw1BYTph86YQRqRBnPUGrPsqE9SAmRrCGGDJkCWaYZ8be",
  "key30": "3A3bHQH5znRajZ1rZZdPAstd4ne4okGXYGacZDNSpq9K5cgFgvtJbRd5Z61TdEBazy1dkVu9EHouxY1jfQV44kYV",
  "key31": "5hXp33dHTwCyRVq48fjTjeSDZqA1NdA7ge1toteSdXoQTv5gkddBpdRSdDQjYcqqHpy3PT8wULyCZ5o9d9rM6A8n",
  "key32": "d5KfqafbZBtAS7LBqLh4WwdGR2tyCDTwjwXHrLKGh2mv3f4baw4XFKzsW2XhgoiFQGbqWz7PBrfmxBZc8vKkg53",
  "key33": "46LHvoq9zH5HFKy1pYvEg8ZKUpRRSQ5jGCcKXobGHBhCtnUyA8nmTsv8n2kxyxtV2MSrMoqcVf5znwsvfHgo8nN7",
  "key34": "63HxxcTy5MCPfYhyaiEs3HvCkisLTdp3oM19AZN5dHf5qEdwsTnBxrzi4rfY5j6ahEnBRswa2Z7hTSdcfHvNS72Y",
  "key35": "4EAGZRsWuDXc1kVusMqzdJc9PJu6gEen9quhztpshbdcq8GoqGdhcygM9wu5FrN9wpthRBibVpBYnQSRuTXGWPWQ",
  "key36": "3AWuoMTmdBFS58YNDBXqga3fYscA6KrqVZh9Z9Z4TL3FD8gKeY1iacmh9xo5cgj5aaxJD1JntPi1pCxrHCCeqRT2",
  "key37": "2y8mJDumVmpJAxg1HswrLPsJ27WQjxgJwXcdbivyV7XcNbYaHDyk4gBbDY2T3w29afvDpBbHsmVr4admMdybDcNx",
  "key38": "tRXeXzuRbmAUg49e5hquW2kPERUDTWLnMJ5PpudX5nV8EEmF532nBs8ngpjKdWXYRbLMxtpBoxe2QYQf1UkS2Zs",
  "key39": "3VmrrU6LVFqHBLDTHKtboBXGNVvRKc6iPmTJCbMPkVVXozKRR85DW8SFjbexLMKSJiftTWG9hn2k1jYZytrUFfCe",
  "key40": "3DjreDEX4JM9eG3Cx4Lx3SSvzgkRyzGLTNoocEVjBZxn2BhRceyXurgDZNDFcDrR5n1UnrVPJqrHQZT7PszigLeA",
  "key41": "65pZZ9Dya4MEQv1gS1MnEW6nXEK8QChcQbH7FbMgdaCvsy14Fo8GafEPGndovcRjDCwgrYcqa1crqwWEBhifExcn"
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
