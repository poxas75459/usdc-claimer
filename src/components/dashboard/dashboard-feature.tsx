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
    "5a7g9LjopSnTHJ3w8tguu6u4Az9cXrdRsuLXXdSFZcJUVD7VUHs2hPY2HJRHUZzGZuvBUHdM7dxBoCeEg6hjzPw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2txtMixJyCSdnaWyGJJJkcCW1MHcummdSHaFfYDT5PrPLjWzMGSMpjS1YVgCubeyYtrbKcFp1k5zxxWRvcsQF5FF",
  "key1": "55rwEA85nzCG5wgvgmSRJTyPhPcNrCj4i8FopKUW68wzkzUswB7QqeubGLH52AYPdN2eJDas4un1ASZkBqtZgEYR",
  "key2": "4KRwuGELxmja4yKyqJFLNuM8X85G1NdHwz5LBUY3eTJsAv8cXQbmyQTUZphBn5HSt2PbiRT1bDX3dc8uq1Cq129J",
  "key3": "5H2VDqAwLBrs2GCsrSQbpAYox1zdzrsy7Z8Fa13Dh7UhaCtijphEZKoWrvxb4UvbUCRuVufBbqtkRjr4nca2wu3q",
  "key4": "4nfrDQ9jvGzsajdWqg5dkjzc9dYtVjrXtKnv8yuBsxmWAvSMt9CiDQqH6g9tTQk8PQUe3j3WgDM7B7VaxB8gT9tN",
  "key5": "4oCGJP5Epcgx1oHaP5ooQz9o7KBLULt2dEttrdYHnQUiSKGZBgshn4z4UoxpwHLStahQ4KJ8mt1dtrK2YbfmFeAt",
  "key6": "5ryK8UDkVJUeXBoLu3nemddJHqHDRn1hV8pDfazo1KKwbLqMoSgLUh2FGfUetZ5YMF7diYSpb2MQxZEfkQ8Ngb7B",
  "key7": "hAAzrp9er8N2DgERP2hiUWmUamf9HD29f1xtd3aE6SeMnv5os5KsaCu6VyaMmfPmrPNYqFsuiRXK99eaggQ3Loh",
  "key8": "4BASWLmjxbGL9u7Ngrc7L5Cd8EpNqnouxKbxg5igXkWFd3UWz6TddtSEdhqq1Ehwvp4NkihM1XJsususPZiG6Yzd",
  "key9": "21oBEZ4yvzJZhJqAMbXDjf9HkfgWogT9VpuDDTMCyMBdwJp9H4GdMEPY9T7gMLX7siv8cvM7SJtbBWnL12d19kM2",
  "key10": "4d2jiyMocA3a1FtqYKeQL8x626nHFo4Bo7DHQLkSCXHLLN7svfETAzFeqasDhiAGj7EVgCzgUXqdRgCdHZ3PuKTD",
  "key11": "664GtR8zDZSxqUfSBHDmwMGbxFAdWrsWSs2SRaPb85JCKdPHMvE2JrSjiWpHXN5hV3qxipr7y6hXWpbD1CTvz9eH",
  "key12": "4PEKZowmYHBWipLPj9bgZr1L27ia86qMTWW7WssKLTzNKDwewBtzyJVraZHvURHPjqw9b9wj8msCsJxipywe3xkG",
  "key13": "4WSco64f5cmrypaCCtBJk9vjPq3wjzzm16a88Uf1pZC8WryhEigVENjnZ3dj2FnNXAYfTjiQ4EQe3hyGkd52Mnty",
  "key14": "5h1Rdx7XU4Y1aFpuiYRfrBwnhjkgymxNHKP48kcD3ne6g39XBkatE7thNeUZcRMNuUdQcrfDxoLX3uvALo2uAegQ",
  "key15": "5ThwRcz3i7FqXM1giheQ7nV3nzwLEPzuH84LNpFsZLpagGV4QzGDsD8Y4D5xpyMVTDrcx56upuEZZojrim6wJpFb",
  "key16": "4MEE87CrsDZkEAPBXbdCH7AgftoP84zSbZvetyb7MtPEvH7bXuc1AL6uFqSMLxdJe3JEcDeiuEV7656wyaf4zr9G",
  "key17": "23pUD79GQfi3PyWThisUrq1sWrUXPxGqwgRcBFN4iTFrhb3khztkPwDRyVyNEbnWNwipWgrnqT91DZjKLTPiToF6",
  "key18": "3N33eB54tyskFJQSSHv5sccwA4yf4YdapwCcWkRV6scNJJUt6Fp1M9bioxPhMvXe171QLjCSqTokorb1E6Z68skM",
  "key19": "2k91zvs9iJXSr48TFGdnrVaNHa6LqUH7XXVSURYZLYSjPbyopZj6U1BH6Y1MUp7D27LMFmTpkEy5NS1uuDFZMMh2",
  "key20": "2TXwfv3DYFZi6eN9wRunEgnmxHFKen8jo5zNDLjLSnmf36bUGXCyvQe2bT3v5K8zVLrYi5UgAsbFTeier6hwCzwd",
  "key21": "5AVp1gKtiYket2AX5PhhVW8mmfpYpWh2Boi9ALknmM5sG9iXgPB1FAKvUEbW3LTt9q48yY6jhFNT5XpyNnUTBap9",
  "key22": "55Rw7t32JHKtxvVcW71pbAeqaQFSgzWoHpFQsDehuFFNJ1rYq7i5UyzCevyX2uZAuV269QiDGR7CKwyAK9qSbiZN",
  "key23": "3Tnw2VZ8pPegt53C6GX6BCygNYd2fhJo92j1gRkXQN2xBYTuTp4JCbU1rGhFEsMyUDwyBN3wMf1hDdkZWy8Msnr7",
  "key24": "5zCpWfXB9q9djv5jNLeg9KA5Xgd32unSSE8y16aLiqEKmpb93YLfJnxvnAkuUdPdqza2CwBm6xoB4VDAwLs3fkwH",
  "key25": "5AdGji7VkhwSexjQpDEAcvLBryFaETN9YsieC1QeAZGn48qvqqwLs2hVxJTRKNHYvFSFaHSLoSGeufzAgS5SEy9e",
  "key26": "25VmFeYjgqwMDMkSchiUUnLbrz2JKA8mfaakAMfECHWufvTV3Y46Z9L1jK5AMjwBHk7E7kwUMnbsUifZ5qu3fiRE",
  "key27": "2ovAxzdG8UH3FLcvetE6G9t3AmP8n4onQv9ouqZYUbHG2oBGPaDPu7c5r6DuAFYRMeW6drRcpWY4vRqEG5Ya7HZN",
  "key28": "3F5gavNP3b9X2hR3caitnfYrRj5dB1aC9rpc2ET8Mw7saUAzHMZkLzg6PZDzwH8S78CF5UBENMZRi8P644FRBGPr",
  "key29": "5R8pvHzrtddXKFWYY1WuqVUN9PoPWahjFFtd2vWnP4n3hxQdn1kBABXvvPqB3CS2b2uhjDenhPwvfTMZ2DXByxtL",
  "key30": "3faEY9XgFktRcngfjE6KjKR1VfGUqQYgeReYBoG1dLM2ci3srmbMZQaTDtS4Y19ZZMo7FWQqyNhXCX1jue1ePWU6",
  "key31": "4aAfmUNPMYVBaGwfVPxrWgPkNyF1ucRd7WkhZK7QGNYXfdaSuX6RWHhoKTDoW6Y5ppqQESFVf2oKCxh3HV7CmVDr",
  "key32": "5aoWHY9JuyPh3zrj6gkTi9pJqyodtMDArNZHfUrVkqj9ZhgycLWuj7ouoU1s974SJzMJk1bTN5f6DgZUfXEvtbar",
  "key33": "4sP1mrJUfjFsi7VHwjP5RWibGka1ewRHBAynHXbUJM7qN9aHUMg7y2SqiZ21SrvXSKW8exfXZtUGqqLKxPkhQ3DQ",
  "key34": "5Rm12g25G5gmSmM1b3Q6G36apvXU3mtTdYDnRmXtetdi9Yf6i6FoRJtvgntwGFDXYBfcXyBBBbtUc1At9d1oZy9x",
  "key35": "4tyFGG91DwXKNCBJ8XSFYuTwy5KyDWwpwBChL3QjahX8YuU2zy6jenaKXYqkfdcNiQR31z3UDBPFmPpRMW2Uj89r",
  "key36": "64HebK3GDnUiutK5pTPua5C5fd4sZ63f6ZqLxBnXPZb8BYPmUAdD9CwGFmHhNXFciJb4jjP7dzQ1kHserQkRyEPz",
  "key37": "2X2qccb6HLDLMGYcdALzdqgEGgXT4c8yx8wjxJYBwpPQpjw3PyQbELoWQwcyg9HkTysmdy5iNvYNgDwfu3ko9Q8M",
  "key38": "3YV2V5w51vZtwQXdAh3YdchJrn3FSKmewtfySkULPZFxRRxQXmVAiCc9j2JPdmbNW5wXy5ATMs4WA7sQJkHWWTqo",
  "key39": "4mjHJXLDifgoop63ierD3d4FhJo8Mvyt4pfc1x8MfptJ85xe9dSGv5Zpd3NLc4LZyN4TpUm5vNLwtRzLpVN588sX",
  "key40": "5Fh9x27qwzBzfrj6gocQxyQoPcDvr3DjCF6iQoKLcNkrGULsigEZMMsqNjEP1Jmi6BqKzucMEMVyS821eMdnUn2e",
  "key41": "5MVKqkfN6d3gKQ62UcrNKNuKQHzdgui6jkNMnnWdhQs784mMfKcwir4Ead4medSsRzTWyPL7r6LBfJZvahkj9tRK"
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
