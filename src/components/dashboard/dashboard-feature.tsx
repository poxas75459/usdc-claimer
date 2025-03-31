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
    "FiFz8ptpw7X9DPMrtqv68ZbAUgWYzqKpVkAJNJLJTDFMacPLs1ZjA823ZQmJLNmRmy7cfmnpcSwLH5ue5qsMgJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cj6ZHrgiDVnYaMjr7rFhscbrmRvQjT5zybNuTqwk3frppsnHwDvYmRjCJwKayEov1TZCF3xvV9UDAFb2FokKMDT",
  "key1": "4NMa4s2Dx1ShX8UiJjZZQTVeNLXHvdKb3yJwJ8rppiYiPjj8s5LMJeZxpXwWFPN1EJjYZUkuNvTJgDKwXgmoxDAk",
  "key2": "4EykxCPs1puXppvjLYmwGqaTZtHHTgvLCi8WQiHbsq2gzgaCXL65hksZbnBi3yNsRqQCwmwJXQtAXGnxobE2zaVd",
  "key3": "5qdkCq5jn1YqQwpt7yBeDdJ6DH1mxHHpXMXd83U2ZijM8KHLUR4NnvZ98xXWVsujLHYxvWTq7wt52MopAwHJhERG",
  "key4": "2ghDYxoQxayovvFAaL27ATQvT4yJs193smTxBNugCrsQwABb4QHRsmnxpVYFzn9whxrkt18z6ZW4grgPVFjhBKmq",
  "key5": "4HZmBmfKiC4tEUAvrLR2RguAicErpDPSX5sx694BnFa69HWAfE6Q3zx2ZPs2Y8gUaKRLn9ZvH1LLVnf9zv84i1F",
  "key6": "Ygqw8vrnBuFZhKnMpLtuXvQuSYykM8HJDZzEe73qyyEYx2S2Y1x61X55QAMtSjK6tyfmPDn42B2MHX9njDikjJ8",
  "key7": "5W5u3FKEHpKSERtdjJJHmtRwjfrQJ6gabD1tVcvXLq7JuYqtPafDz6moEohGTuFc8zgHjdnfGVviR6R31GKyVwyr",
  "key8": "3Symjyqy3EwWJaXhXVu33msu8pCdEQTZ68CCn67FJ6QwvyppENoaYeiGjgjqzkx4QwbDGWmgc3nhKEHwT1LawRDS",
  "key9": "2ZC9sBC8gyRk6N5pnFDSHPvKFq7cJDy6AZAK4pGJSiuWZdNcLFXqSHTBcMz1mhEKtR2XL8rDmZcNozmBAXUF8TyH",
  "key10": "4b27jSoN4KvcZsMk7yhs3XSivCm8AYPQ5sD43NJdhBLESH1pXkTieLHevW2hz5Xos1Q4zhwnW2Qm8Cgck97N8nX7",
  "key11": "LsVN2GRicDU8i4fvZneWfoJT3KFxfJxdQXwBrLpH6BNtsQAugCWkmBNgn5XepakK6UbxmCwwRzZB3vF4oUcjmvw",
  "key12": "q6nANF82C9CPt4toBS9ZG2gqGqaQd2WuX6C4ZCtCp6VjwD9FLXr4RnvvxBAoXSdUnsrvi94XhcqKofCpwGobYg2",
  "key13": "sdyPRSP65KfwgELeCXrTfWMZGczT7R28REjKowJ99Ftx59B2DgLKim6A2jZfQq9j9Srd7e4RVjwM8ZmVH4K7952",
  "key14": "2qnyd8aMLMkW6tYNpGfLF9SSA6HmeZ5gLCuhwSEQRzk5ychrYLFZvX43TraE7xF967cjSz4VmuRF6gsD7p25VcHY",
  "key15": "QeZdBEpbWMd7AGLoDskPhDUrBF4RsEVK3QeG4Mh6DwY8ptyeNUW2MdxVA4PnRDxwFEzVhKU2jyEpiz4meVVEbbR",
  "key16": "5iK8MqpfA5bry3MHnURnNCK9oZASywc7gypsfcKQyvSZ77cMgGZMcziBBuue88nkhGkiif7B542myWA1sq9ofRVi",
  "key17": "3ChGj8yKN4zDytuEpW7QqF4HjupsQZiNH1QsWi2siEURbq9K2WpdnafKDgq2u56G16mg43zfP4ZDBmjcaUcQNRtb",
  "key18": "5bcxZ93yyyakcKJqebPY1dwM5bJgnQA1e6YqxHXQrr2SNkgpscXYkbke7wK6Y7ZV7iVTrFANHiRZP8XXrCtjKHNb",
  "key19": "3G58C6xiduc8rr1jXB3QEaE28Q6Mhh8rJ11RKk23aR7yCdYQtJPeucNXRy3TMNQfZZxeEryxEXYwRiAnQxoAJ12v",
  "key20": "399uRvxePGNY8Q7hAzfWJNFR83gWCWoc4mHB4dAkLjf8GH5euw791FKepouMxwFLVXnSdcxCG1BKHEk52RiKcyzR",
  "key21": "4Th9bYQFxbJiwqq7EYrVyYpkQSt6kyShyYfCqyyyftf8SHz5bRdvJYvchqwZtkBvXGzKuNez7kB2zrdoAsMNffRY",
  "key22": "3gzJTBv4hdgzdUmXrG8R7Ha2PNsbhELrfDczdkX1rT4y3E2VvZ9Pez32pNKGCTgzJ1D9XEa4sxkG65vxSZ1eLrfx",
  "key23": "Jx1jiS2d7nstg9VtcFa34k7Sm2Rgsb9Tidj1WxjjimTfP5qj1pQzgW6bpKTPYe1LBa4R2iTHGEw4NLy7o4d5v43",
  "key24": "3i1SiM1sDDouSH2sMjV1ZXumzdKBMc8ws8hD6qec5KgzuPyPd4HNMarAoBQt4J2pCf5xLXzCRBVNDgtfnnUmTsLv",
  "key25": "vnnoxU3t4Gyh3qfGLyUw6ESVVYd7k2sdJBdG6WLz1ofVmnN7QrDXWWTb5inqTChYumC6H5SH9dFKFuvP9a4qp6E",
  "key26": "R6q1kLqhXKj1wuWpVsfmyBs2sbKaCE83pHfRd45B1ZHWTxzRspkFDCdEmDnjCgFu9vXdg2et2R6MTGpZCLzFPHu",
  "key27": "26UxzDshHQcRBaFLHDR3cFMG5wB8ESNgsP5AJJ2B2pKZDXcCSzybCX6GGCUXHSwvG2XCFdssyaYwzbdrVQxxNUm4",
  "key28": "55WA7zKYHZrhFAmU69i9PjUv6vK4Gommv2EdBTKKtbU3egyk6CRNqY1UXTkcihs7CsvHoSouDWRqcAvqLicUxrdz",
  "key29": "61rTpve52HbWvrpuYpFCRTpUkDm7DkA6tGBZVxzFRSHSmTtB846f8UvrJniG4Wy1E513va1dJfc8r2jn5r6XZ1Y6",
  "key30": "2xNZ1CFz5a6pXHHB6XYZQYskGBdZLiRt5PcbMT9x6axBtHb9vFMDPV6hffDUoAGGZxvCakCkShCzifsydZGmxpwM",
  "key31": "Amh1Rw4Ko9aXs41SJQifaNTzmyBfeVhcFRaCpiWwu8VgkHGEoEUYj949imhVhtKLCKTQaUYFpkzBgvyJnbhhETJ",
  "key32": "5Sc7Wof1kGtfQ2MtZYTs8LposuwtgK2f23QXuNg1gL7o6UknKAmA4RnEeY1nbVHaByMhs4J5mE8HF7fGpki7MU2z",
  "key33": "33iu6cuc13Wo4LfeoBWdDE8378xTzEyLTnVuYBom19zw2p6DW2TvLrbe182HrCLiAVZLQV6ZPbAJX8j1Peq3FJuL"
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
