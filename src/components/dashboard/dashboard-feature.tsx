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
    "5coxo3wYiZMP1Va4bXtfS9tzLQumHwR4PqMFTZaDeWfAwr8bXecmiNiVfPruXEUtgCs5EYQHT9GhkhQF8CwtYciY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McXfN1gKuqEJj5XLE85tw3Juk8W7vgzCNod9SPhtQY1xFY7jSmeNihu8ai9ipXgN8ZM3XQSTLw6rPcZHYaThQgD",
  "key1": "CwKXe8sazgdqpnVonCP6F1osZ8ffwJcCRfsvrTwUmyiQmWNqSVtXdRxVHJ8tdq84GxPDkKyWr4BcyPPimxM9koG",
  "key2": "3YQQUrKGgPkS1TjLrAmH8iop7fScM23gSg4fqVYoGPFxMbfWKMCv6iNXNVBzvuxRhcf9sGKz6FMAWaogmA2Xs3Km",
  "key3": "5bA5ApgZELS3Bu2gbuPMLja6zsPewUDmS143MSyZRf4wWPm7VSjiMBXCmqTo1YdNci4QEn4JpkXyPAsYCwGD7dv9",
  "key4": "4L2HSpwPYRSqVhyvpkUCRrYiabPd5VULaHsK7BY6X778Tka8Dc8E73hiXRc1SHwMwakwN6pqei2mSFdVQgQihsvi",
  "key5": "4GaPABn3RqnSo4PWsWcCpf7786GArHQacReu3qLsiKFkzVuRq9VvoQjYN6SD3QjLLDGhsFQRmQqsUXZzfouTsmw2",
  "key6": "4CLuWasCZBMUM1cBXLRtavnbb8Q3qezKeHoFfSjFT3WibebBoAEuodrt4i8RWfQ2KMn31tgn9J5cYgNaAK8oyfmP",
  "key7": "3TzVhEn1cVm8ykuJ9EQG4Hk6ePG3NwcB3owbL8z7sJZBqkeugcDBHPFx6yhwqhPRdm4SessKFCVpqG37fAtWBUSf",
  "key8": "FAR9ZRS9xzsFgjPuhd1ZZ6ovPfNshiseFoH4MRa2Pd1gMC2fyzGvus9sA6TzGabgaE1PHtUtHLwaHTY8ByzQu4m",
  "key9": "CGumHyVcorQg7bPMUvx9FtmYvTwCmVwExh11qZFkjYoyPJEh6FnS9m8o2itgzGh48gcYMiAwvPSdVEaQks8419C",
  "key10": "2S2eUMXaZuBZFssRWZUKR2TJVF5zEwavk7Vu79bWrHYEYsgHzgM1cBsuPQWuSFBTsi1cU1zAQxxWsY3Z6wErw44T",
  "key11": "2jGCaFQTV7x1gAGSuD9MSRnQqsN5gwHaWQZ54mUrTKj5jfHRzcznqJ5GL32mEcc3MZNxQu4aB3jTKo6MPZrzboQn",
  "key12": "bPL67gKuM2hrNc2XLTYCMiT2Y38UHvSrfnV8frGWVtgFhSC6YRngoHQ9RW7vc1hLp6utaUCLEPLqpxXH1ox6TwV",
  "key13": "4zzZ972g6jLkpvfRnSYtycA145JHyAzjkhPpvcbhaQVKXEuQiKGWdFUSLwy1ixg7oaejDFX2DDL42GTt8Bkp5oF8",
  "key14": "3YVvV1NqPaGSXrUEzn8KgtMPGKZXbesiU1AjbrKEMAcHzdPQr1MVdxaewapg7VYbohxg8LpWwQMJMKNUyBpd4Qh9",
  "key15": "3PJwnhFqA4LM2HbbmZyF6vDdnpEDZtdkCXAzQdpRVTJGM9ANVfb9JqQ72Dn71eURCbJEe2z8mJf6NhCTaG33aZDZ",
  "key16": "wBczQtd3VtJUCdcMe8N9qT6ohgzpY2KJXvcUEoJ89dWfkuMJ5BrVHr2L8TYZeUpqFk7HqeEQu7whucoBCo98ZnN",
  "key17": "5FFR4ktDMDW9w98hmZudhWAQkWC1xByoJuenXXBmpEDZzmXsP25BuDXhPXvkHF9ephTmy2kxEBMssX5HDdoZUMFr",
  "key18": "5MLZJ5X4HkgTtaaDAK7vABcJ3ZvRQL9tKj8mcVfAiuAnvAAJcMyaTs6Fif1zgRLmNZBg45iU22YPEtjixoB1mU5m",
  "key19": "551bBz4DkrkvvV7ADLvYAzJgEAmhnJdcAfq5LLpRiby3rnWSYjMs9aHJronAk7k6nxeMforRM6YqKrmBDuYQpYKy",
  "key20": "2Awpn9ARFLdoh6X7XBSFjqcyhjuiTN4Q1efjxtqn8DYd6wmzrEH8vF9WEiHrLWKatsiFYf2CC4uZvLgMFJQwHK16",
  "key21": "3EjBftoTwuGXiK9aG7Zfu7cAp4DvexkKM3JvUV8wpbhdpMQjkPaXgbPQcXLBZywqxeu1LpBoeRjY1fRmaxzxiwCr",
  "key22": "4w4hmy3jK2sh11NtSh9wgv9mnoG5FTNQs13D2JsdZTsHYrSFQuDYHKq9LFqRyAe2xfwy6xgYLwkzDa4CGxEFysCe",
  "key23": "3TG1M6XwFgV7eN9sgRpwGEDWPzcTFRg1LbSYL8ExdiSHqdVSA8PiHrdiW8NQCcDY1XjVtqM8GSGC873T2qKYLZXY",
  "key24": "4Z1FUKQqQHyx4Ba6YYuadpCdTnWYK4XXLYzeH9RaCsomrAVRCEMByvAEm1K8xSBwpm7gUCgZ2mn3gbRwpnHDuMfA",
  "key25": "3gVNAHQPSoQXYzhmbP6ZFYM2svAVjmwbywtCEq74Ho9SLn7ZYAACjg1wMjyNrQ6y5o2SBzpUJ7YHNZtMJrjy12Ep",
  "key26": "418ZMFzdee71cgLVs2G9M98EJEbfg83gidGiKzY8UCq2fdBvJ3PzEkv11o37tGoaUFnDkpgzrwHfsjCXHBZZN8CP",
  "key27": "4DCHt2GgkXCAfy2VMEBoLpWhtWwCAA5MXy59B287VM6dMH5kgTarxoeuCKzWYJmHaAdLBL2fHMcgCR31aY8D2hGP",
  "key28": "4gph32ivkNidhigbF3SqNZJefXSuVhnvwPD1KAATe8xycjNmBXVEiToZVMZpu9P7zSMAd5RGh51vzdjMiJjJRwjd",
  "key29": "ESFxTZY95kCEoFgzo96uVWsD8SYHG2Gx2sGmACGz8LRbBR6P8UxhUZihG5k5FiKzXBtVFrXNdGskj1vtEPPmiNC",
  "key30": "412dxvR2hWfGZ78sejAoBbREfathchnCEcjvXmWrx7itA8J9vHD73nbd1M43DTUis5AJ6LFYb3rq5xpDz7W1cczN",
  "key31": "2EBTbXcrpNP53TztkRRyRFkCuXLfP3UQkLDT6nKXMHyNW6jWqGd1EK9WrJ1UG27QC9c4qxMg6g5nXM3i6M2iCwTs",
  "key32": "qNqbvV2yBDgdZbQtAckGYSxrbE92owKt3sz5QnyJeQgftqsfY31TgUDmExdqc5HPUqvH1T4cynZPiaNReGuSPG6",
  "key33": "5RREcVZQqEhm6uvWq5DWi3j1Q4bJJt8VaZ2Ksjq9RzY2s5J6TXgGo6TT26v2PWF3MUPxHd3drbBmMR6DgUTGS5MS",
  "key34": "4Yix3EnAZmqRt2nc5FpuCrR6XqDpXfGA965ifHLTndGYxksvuFB8XZUR8uYpc1yacWRzw4N2y9a6LuYUK4Jb7A9f"
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
