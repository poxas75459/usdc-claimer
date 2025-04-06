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
    "2a6t35ppsgMd2aM9AWSoaLNzF12gnqaupcuFg5Lywmeh6DaB3zt6up9THQFUk8QUR9MskcZfUDrpLYFA6c8XGVvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmhT2SwK6xNLFfv4Ncg2MJnzTM9F7cSuaeRPfnVkqVZ2NFv242BwyjHUWzyahGZFyHCKqy41JCrwaDxE2WFUqSP",
  "key1": "4QB5kv6Sy6bxYeJPst9a1rvv3j9pcT44qdJmNgwJQRJnr8igmXahABJZEg9rHn5Y9qmG72wiKvurWjFMVW5JrHpH",
  "key2": "D3hXvBc3SCxH9m8BDP2W8uGsizo6BjTeSm8rkRsgYoMAbNJnYFSNFuhdqnUvDkddjyLuKn7MUrGayRFdGWYfCpc",
  "key3": "5gaizjHQH4rDSumJUpVjfPVgdus23zUauHoy7d39kPGEP38rDLgC3DkFNwZG6yXdRgmWK71K99DqxVWdYjS5H7Jb",
  "key4": "2sCRrXw1Wg9D12z6egPBjNBpuMQzpR52arkbChbh64j2dEQnEtMqcHgdQYHDS6ag28e653PTvUTbb3QbE25JmH9c",
  "key5": "4tNSYzZWiEgqwNwcXUyJKz7Rb2D87uGV7quP6wQxNTrAEhNysWrv36StAdzu2ygQ8K4rV9o6LUmwNtRTqWzLbjL",
  "key6": "UQeL9TJEr4GVmADNWqxPjXCJrL1zknZgcJwPviagoTM4L66EE2Lv8WsFxdLMFrPWqk3XbQih9oE7YTZ1m3wtHtb",
  "key7": "yyYy2xEjcJVCFayKhmd5cPGgqo2hXVYtNGVHgcHn9TPayhVrDd7NH2TZQNmL4An9iY6TSXReGTePzysJcu8MP3Y",
  "key8": "2kwGPzTYVd4cLgGZD2jhZSpeWSPeZtKexBTdg7pwg3Q9bCqa989cqGafuEYuqorF9BZ7g5pjQd4oKRv9CqtFuCv3",
  "key9": "4Go1enFbJCwpcMYxDbLtGCm5JdzKrrGukZaep93nN6CLPzMqKXYzy8huXF5uHFzEeWkjTHnmnZLHp8WjjscaZoTh",
  "key10": "2TNQPQgzTVWpW1VMGbuKTWfKEdHLBsuzxheqxbhnQ8x8zkTXRc2GruuotD2ZY6yrVDjqVXQEzsj8fBcLkRVmUEv",
  "key11": "8x5RMubsouJKGwuk3qgMY8phkgc7XzhMCipdCX1Q6ycwRfud8JDwuD3FZCF1jsHhkdd3Ck4JpWSKxx5dvHdSgLc",
  "key12": "5xfChstCUaTBX6SWWsy5HuxhRQRBEKbnNkgpTPrGTD16eDGmi2dtY1ZBKM4Qgk6799Wqyvcv4rk2BkPBA1xmm1Q8",
  "key13": "2qDLmxismPdjnzAMKEtmjMjuzCYtTcZxDMGB7oBN12hdzZ98fmnYLowFTVsdnsfrVK7JFWTeqePgXiiUWSHSyiNe",
  "key14": "4YGMsoan1rgGJ9hMkmJhqGeesZ6ki9caactvT9c2366cFKCHvcy1TdPqFLCRg3bAVqrR8bhsJ11eQCjBAnq5Eh3A",
  "key15": "2Gi7UcLod5NDGuXYaQ9nUWmsJQnTUfhxiURKY2cQVZDLCcLvGKD5pQA73wTTojWryee7b7nGqL7RsbnUcySjFqsb",
  "key16": "4gzCqgnBGJ4UY2tNz8SheESw63keUaKXfsibcPAg3Wz7FWo5nphk9hnVtgFsZicaM9ZaFvRrVUBU24nGByfJ14T7",
  "key17": "4dh81moJrx4mcviMru2gjgcXeVURuhEP59SGefNcef3Dd5e69fwCZMWyFA9fFeo7DHwNZKtb6TJa8CXXjcWinAWK",
  "key18": "4kHdc3QFonQynG78vKKEwSyDj7X1p7HuqCgMt2bWtcYuzAMD6EeXyZXYEhsToXhrDMAbnHStzHFUFMt3p3cppr2D",
  "key19": "3rytAbzSu3EV7sFFFxdHCLEYpWnc6pfkVbXBLaamFAWvPmVKR3rsm4KHQwjkZ1pVXb9rg2WrR6TeCE7A1LjUFYSr",
  "key20": "4GYD5i7DjhSrvKtdgZP9VQEckQDBv3Zhxrrhc8aq6oRbyMPZFFT8K6TrJFgTUdgVEtsD3CCweJvaNB969qUSf4E1",
  "key21": "pBoKaQaC2RAuAbH4ydWvCRUZCR4jELvmg62uLj1nRo9BaiZkVLg7yFjzZ2tgEVGH4LqWHNsUE4nQU4tvpfxZPfR",
  "key22": "5zgE5rwdu4VXqgc1JLXRvBkZLNczTbtjCznNWLJi8qQdzhnbuDzB7W25Lxkrnav7eREenFPW1BfKp8GCH2XWxC6u",
  "key23": "32H5Q5Fpt8L4MMLTz14XahzFMm5Eq55mrCwiHM1guXuJae4TbBLCRaoYmPptgxzbHRu2XDSGzABWdTDQqp1883mA",
  "key24": "Czpr7vMBcpa1SL2ZXkcxsTETaGvtB5C9aYofJPxMdNWyYveYT7iSoqWJ138vmoebop82pHmphxxDhS6Kj336kFZ",
  "key25": "5k8hzbWELBvea6W2S9tCujxkd9qeReumtzHpShbPLhajDEBMpw8ybYYotPP3GeYoZgLZacyyCmcNQbo4vAPnsEc2",
  "key26": "4a3eG9HW3nipNd4CK8vckFLsmMChf4cBeqYzsjDb2Vqv99UD65n5b8gpQkxEBQWDq8kKdVBF1Qim3uyqQifwy5Kr",
  "key27": "wMMH1g3JhEwSDgi684DxFVq8qwt3dYDSgUwzsP8yCqsjXNEtSux7PBzJTDk8gEAC3r3L1PxQx7vrk3GLkEpGjqq",
  "key28": "2JCeGMZu5J8CjQprjGhju5tYFb6ZGKY4swihpweH8Qg28Y67mCF5asJLfXLQPYfHQP9hNHCZmW2fRwuEwxrQFpaL",
  "key29": "3hsB2yaajTEVdhnWmwiGi2tuRucH33Nt92uPNPJ5iGNUxWqbpSJvhSYQAD8rqGhTtLQkc2Pg9bpCAUs5QGV9u1cy",
  "key30": "4fxDZLNmD2K9bKssc5Ld1iFV69TbhoaCoJh4cRVyXn7M3CXHuTgrPzUzWURNJbivU7G84ky9ZBvk9oCddUzqfjsx",
  "key31": "4HwNy5GAa4fWCPQPFh2Y2Ar97hsp6MDfbGoeTZciyb8kMnFHXzSpzUTCyafSe3QrHzhzRkvpYm34GEiqc5Ckwpzq",
  "key32": "3LBbeNfPTrHMqSAiqc1j1dD9PsUyr5VYzvyx6x4QuieapbmZFRaPhGhGD3Y66pCU35jAH7crve9bSFM91hHk73KC",
  "key33": "3sBFr3JBhBBTnTLvs8T8Cgi1GZcRUBVSge1kYMNwWd19CqzzZosVh8DEzKZSaPm7VjQEy8MiK8q4hrrZ7SopJKsV"
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
