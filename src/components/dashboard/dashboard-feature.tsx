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
    "3i7zWR7SuqTJBS5t1goyd1Tv6k69jCqFTez4bCQpHXg71jucjpapFQqW3oTsqQjEmwd7FE4vau1G8YGj6GYLd9GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZLyBNRx69QkHsvkZK5K8fAgLpfZC6yA7ugojzsCqaFET1hUkaDzHzLA6tZevEwUyZUuvKdvP4RNFodf8opS4br",
  "key1": "2ZMJuxjTcJ9XStDjczPEZZpnHP9AWGVoCHUXLajkaZ9qeUszKa5BuCUKRMPNxsS9CwhMzmivob77ZW7zcoowSNMd",
  "key2": "3iHjjGtiUnEqj7T3FzUyBsTDW6fRq3KoGuMZsju7ohabacxrWoupNQ4ShQ2srgr57Rya1Uqd1381ZysxYE6i39P5",
  "key3": "2L6iDQLiFnxFHo6rLpYT2x18DqX2B6BDV3SfaDzBmtc1aRsxHMiH1qaBmVm914LDmV1brX9B8VBb6RQjyEKqfRAV",
  "key4": "2AuXVgjEzgu2ogDTVC3UYndnV8YJtrJ2qD54a24pCwheGCqYNrB3J7C5FYHLAfiYzg5v8QNad5pt3a5EPhLN4Smg",
  "key5": "5iPbmDo2PmU4Y6UHAcnvLNj5R9TxGoCFTKfngCgk39vNBMdYyKccimjgjWrBfFADHaLd252oDHvqKQv5Fmez5jLj",
  "key6": "3T6ng4wPY1fsSUN2NCu9gFcc3PVTjBSCfxnFvHEFCVM1TPob8CqGxP8hqgA9ifaRroAUSLyEH8RT5L6kACsoJZsz",
  "key7": "rEDxVD2nNupirGPmzZg3AAJr7jkQN6APDbarD2PDXD6skPhXLWiyEH8Kq34kXeqQB4oETa8ydXQVFaLYPMnvYQe",
  "key8": "52aR68mwNA6PHaptpZoUxnYG5iqSBdeNQVJQmvoh93iHrWqT4mqXs67jedzCyRu32JjD9cy2fumSuwFmMUnmjHf1",
  "key9": "2A12NJECwC4ikQGgPwQVK6WPKFtqoQw4opMhkhSAL38m5mx7KjPYTutK1qKhPq8iDsG5Du3HJbC6DwnhcSFHEa5F",
  "key10": "5cHNXz8uJs1zerjiSMmsvoTrq3J99QMTDLfgDjtv7g7arrVacyhYKjUzYHit23cc4yQKgs8NQ6Ub9g4eBxpRMf4S",
  "key11": "63Pz71u9q6fc6DUbvdaRVLf11uJ2UGUCc6KsjKPWk1NfcA5BzYhcZqLvhkicyjW5BYhe3iBmJADkJfSE7t7iCpDF",
  "key12": "5h7Umowtfn9u75YT4w7DELbxFf7gX8WvFGth5bxgbdFXL5He46HhD1Nt6jhh9A58mT659VHcUoFveJx3ZMnSWM4r",
  "key13": "zwXjNra6HsSMdDMgt8nGNFz8wWWHP6ouhsgBrP4JbxDkFSVMG2914BecpjCKY4qZuzXYCvZH7fxGacb8Hot8vQr",
  "key14": "4wNBhV51HnFQ7QuKW9fJJgnUTAKgnSC8aHaxCbLFp9eQn35KKEWEMEdLRkW5CFVP8CzBM5q38KZRqoQnkjNfKu9H",
  "key15": "2jGuR87gnJDqnzqr2JphbQ13BXC7qdmMAfzfeW6YhEBLTARndRwHkBtoeSimNCMkq5ckBSUyyscmTna3EUv19YWG",
  "key16": "6DdRDSrhM37NToCCaRMDgYi7uLUzVFk47SMqwYazMvSCDXadvEvG6bQMVCDKGdqrtiNzYSHuYgdk9Zqzz4TUXWQ",
  "key17": "E34fD75fAwpJzaiC5hFQut5aFr8AYd6yf5QHRVZji1GZeegPbMonAz3ZuaaiWgj8nrd1WKKf1X32fmypesnv2Mh",
  "key18": "5oMpycpevsZfNNRb6ZJSDGLXE3h27zSbFy5syv1XS2caKWR1EQbD2yKSrTDNZWnEqERQwU9sABW8gbJuY6QmAqjP",
  "key19": "5n2ogVqGPLkxmqxtUq4QaqkdcrKR1z6cKV8hpiSWF7YSdhuWkGkSiXaprPC3gnzma53KyiSy8DHjsdWrSuSS3aq7",
  "key20": "3B1dgxT4G9aKNxBu4d2nShKGxoi49d2hjbvFUwd8ygrTf6FGZSJya6XHrbH8QdBjiEpinPahogxHznkctjfKWGhr",
  "key21": "3usrGBDPRZVTPpMCfq4gk4SM8JfS157bJ7hs2us95oaK4vgQbrVMyhUxJzrnLuPcwGcuT1vz8XQp3oCcNWMGRffQ",
  "key22": "Rw7ZNVAbsb92GCDUALxJw28tnE7pDU344Dm5y5TYPr8bVdtrfQjRHLdP6ftRAm34YJM5eFFH5eforEBU1W5fn4J",
  "key23": "2UF13SyfGkk6ZXjToPc15gxw12WUQ9BgvXhBHDohqKLmNP6Qdmzv3ypDprWxo626LVC4iNZtUQtG9c31eZj5jiYK",
  "key24": "vNT9f482HCcjgKxs7hcANhYa4gtVLAv4Y6t8WewKUBNZPbkx73jCmPgjq5cu7QJdJ46MuYTrMk44do4StU8nCQR",
  "key25": "Xvg7DWenM5gAMNg67uZ8pVzqvH8chDu4cGAmAHVE1gDUabKJdcqpPqiB1mK61QHEF9CpKmk4yLqikKfHSijS9QH",
  "key26": "3YwLaeykTPyHSzMntLoB7KF6kw5rysCqrov9zWFCYQRQ4fG7ZM64MJCpZpHgfc6fSvRjMqmdTWbmNiCGv9YUsCuT",
  "key27": "121spo99yEWks2dCpuDdNaQPjmcgWUtugsDqDas1oHbrkHNmf8HgP3y5is7TRtxpWDXwhJrzwzgSYd4UHnsJqJg7",
  "key28": "5PFy88g212tyqHS8bXXg6DpzEyUxvQBi5f5pjd5BvbepJFa1e4xNwyNbPqjbkSa2Pj4kpwBVfKRruosekB6BQ1wM",
  "key29": "392TAm84AutU2rWNUETaRZfB4XJVGnQ6BUxN45VbSUXiuGCUkmWtk2z8ypkUsRsLJFWdXcAh56xo2ooNH7NiBqz",
  "key30": "3UpyrRZ1CMtNWYbZYHu3T8kyXs5gMk3hLVZV6qGiKsV3K9811qDi6kxYqmfTrxYkg7RPLHCQLRdfjyZWT21puVaQ",
  "key31": "394ognu9tjihsyG5xzFomSi5n75Bgv6uiZB2gyw5vVuJt2p8vrdD1yzaoCJJETSGFHmwFEgmxFzjgVA7kEBgyyvH",
  "key32": "5dDTVo9uKQJndbU9vCm6PHKd26jyt1mdeZvpEhc3veYVzrZJGYwWTL2r6pVrmbJPvvUbRN5kHaLUXQqK5Bt9Lnab",
  "key33": "3RFSARVEAdAMTK2ovFHWdi38Biid6f5bXTbrMVxXNbapAdyHHYsmtwwBw3GwQyUzTavmL4q6bewsjUe28Tvj2eu4",
  "key34": "3u7ZuLjrWELvegeibaAb1FoEdKYhwXjyUVayJ1zrrkTyK4eqA8TQkeSKtWMGQh4vMPwxu9W7rwkZH9FKMYor6eyw",
  "key35": "2PrV72jf3TtiCzbhafB3GmsALH7Vv7QgNQyusXuShgfUfPwgsuwNFBwbeawgSAzBg4W4g3oxw5cMza9643FFJvqq",
  "key36": "2dbaYjEqfR18uWFtroLF1zNifgVvYRTAemKZGGGZkA3DU3M2T7wc6usnRKo12nubzpSzfJkC7UCwz249QQxTeubv",
  "key37": "37CkAf9KTi7fkXvwWyCkRpp4hitz7YC7XYKhPUw5dU3QafpJPTFQ8c4xFxLoH5jW8EtYur3ZGL6eakdjxpX9AQCH",
  "key38": "Be88HmsfSWMeCuPtAfrm6Vk7X29m8CTVvFB64N4ytd7aKv6wBvDs78BjxWfayKxiS48tcSQt6px73eczr3xGnre"
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
