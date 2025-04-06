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
    "58QExv8PzvpCzVDLhpVjv812fNGQMu95HDxkbXSoAqUknUrVqV12A86Wrauz2ahkCb1H7BzcWaMYavxv6GAhixeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ui4sH6Txi9cFmPqyCMfwyenT9t8vRAjN2m3m32npNVgvkT7khK753rmNe4hwYz2VU8hnfhK2Fkr4HD8bzdWBfBM",
  "key1": "AntZoQPXtVjbmSjwG3F4tZsipfRyvDxKqrMSkfUbw6Zg7eqKzKLEYG4CpYCSwzNsxxHEF8F6vHfWaSZ4CXiQCEj",
  "key2": "2V79RPVc1ZoAabmTXXjam8vUzuieWGCXrDdsXBPrqpKTy437cqQ4Rxovwg6gABQ3g4wrmuRQuVaNJmSSqwxUc7Yb",
  "key3": "B5yXW5JTxwfu1rGmRGqZkPifQyN3kDovP7gQGdWfCM31NrnMvNZswwf37qq2wHQ4GshpZV7aXgqxLFvMmXyDa8B",
  "key4": "2wyzM123zxJ6ZuomZHemVAoa3WpYK1KcWqCfh9YbGTfx7PMmvsENiAtEot2nSoXE9DrMchs77bd9iEwMpVDe5YDh",
  "key5": "58a6iJTu9ju4ERFWK68CBS8yQn4LCNWoGt9pKc3JBH7Z2jHUGTZLk557d9UVkzuJT32555MTtcrmocN4m2QmHnXk",
  "key6": "3ZMyPtSvjT8RV8qz8m3Z2u4zdnTHb9GKHaoqYLixyCc2XL3XfuEWNDz9ux8ejKgpB1zWxRkDDrKY6Ek4qaUUATxp",
  "key7": "2r8i74xYMHXqaU4GYkZLWaH9k21x7d9iyrTg85w8izCmvZRRUop3pACTFrJAdAXg93jyezNQNQ31PLvDrkVBvCN6",
  "key8": "2ZwXrNyrb8g7eQFJqchmeziP5hMi83yPmDa74h9FBzk3ZJC3vVge8e7o9pC1fXtbLhVecZNNB1y268mFZADHWrS2",
  "key9": "3QZSo8ZqdAqCMPsHjNFqNXPwXGNVA8cCeDAXNi4Vghb68zQQ68DQmpXSKjbnGL8i1PBxSvp8Gg95vUYmgD8rrYTN",
  "key10": "661Sw92Lo2681YisAz321xheGxYVLvQcVzgQGr3gjpxUYz2UvR9bH3ewNmQbCmUyv3fuJe1TXEHNiS89B5bfXq1o",
  "key11": "5uMCaYSpd3yKk4xPeV5YsVknxRVuaVZqUZeCxVn3ipbTruXeVzizyjvxMvZjyVeo1oWNeAur2AvUGRxXqfzQm7Yr",
  "key12": "TDkwT54zBP11xc9BEdEX41jG29MZpv4Qi5d5h89PX4qYA6dQEv59x57kmyTf2x5X1EDDK7vBV6ua1yQ7HGD3oTX",
  "key13": "3pxnTPTQw7rV99q3KwwzNdGDpwKnUhfGEUuuG7yBtXXhAq3hEqg6uhtG2Qq17nuiNztVMAvRynbJK8Cjwq5ZwZdM",
  "key14": "5VisHqi4TVZPwLdPX1LvdbtDWKkKYUt6mFMA5ecadubcuuFQ9SJFZXuBchmjkEyF8D47xBDWCSaz1C7eMkSo3b1c",
  "key15": "4HuW3LarbSfxJzxrHMRjyePE8YqpyCJpZynw4DYtvrBDifycUL4xngFbKRV3zvHDYDw7EZuocsGRmec1cEw7WYCH",
  "key16": "4NGtULu3yfze17YtZkog9fA47MPkrXAkJVTAm13CaotFbCC5ArPRKopocCzUAw8HTin7gsxiBzNcWY2rdwP1iAFm",
  "key17": "3DrnbDdk2P3CiNxVrKTEEm3jowfhHAQzY5cnvWEWsnMT3gdeSJyqnkocpxZoBrkw1adc3AByB6jdqAXJbbTJagB3",
  "key18": "46zZ6t9EN1rJof7CyoxoHCnXKNjV8yCQrpqtNoW8uuKLXWjcfPKqwUbu7Us4KDCinZYVvgPM5hrNH8s9dXK29Xuc",
  "key19": "63z4NLACjh3qzQ2b3i8oYbhTGWLTd3VjvrRUDGy386UQbKMYuPpAYS9cHb9sNzpQ146P2Q8zy2WHNuHDip8con1i",
  "key20": "5dB3r87EAq8h2ar5mJwAo3MFsrWgT9ukDUZ5JG9HbKqfqoRZT1sdmKDrFspK3PeYgaqTWuvsRxrWCfULcAXrY79x",
  "key21": "64Bq7wC2YskyXpmzyc4ACmYaJBBpX9PTcAqRg6BmhumRRMqAaqe837R3ixdAwovLfGLzHxXoG6KC3wZFiw4Py7GM",
  "key22": "4MX5WdGCZDmnCxXFcdUA2z7MnBMq5KpHudrVhVcLp54C8Hy2jubrPGdvEF7sgMYNpuYBjWKV4SKi1Hd5qSJC7gB3",
  "key23": "5WmXa4cWdodZWvedsZD3dfgixVVDpv9mpdXhwDs8AfSxDmKSrM7YtPYrSbnnYKA2Tfc5GbmyBrWMogsr8g18f98G",
  "key24": "JyMCc1iyjp8AbMYe4XpLb2QUxQTu5hm4GRXVSoZU8cf7ywPATGp4qaXwN6WGbpBJFMypMdSgqBEKyyYNxxLp4Gb",
  "key25": "4svPcm87nGZvCqyPCUpVAEkoLW7x4qWANxknKtkEPPqALrcdnZah81W3Mnkpqhc96jW8cEEiJdiS3hUDM3cNe9CV",
  "key26": "W6gg2ARA5oTZYSSra3B4iUgb2tu2RQXHcsA9oAsRxWLnEHBtfJjDa3KhDznSbZs6CY4mKo4NuHnbZf3BZM2HiZ7",
  "key27": "3MzraMQaaNadiUpxx4idEYBvxsbtFcEWuBJP4CjAcPtVLpVoWyQoDMRmPuzVBFpbL7Zz5ABUyticJdFb7zJCxb8e",
  "key28": "4Li3p2qGmcJ8v56WJ5oQiDGZzjygp3vtVb1PzcmbY4wEu2t651s1Bhep2t7uR8yjc3ZA9e4xmK8NQLjPBHsLeFNL",
  "key29": "2fsZ72EpBYXsNa4Xb83vf3n2rrAoZH49w6R2HzGWLRpgKT7YAWLL6Afyyh2S9bNAHYd9KF4AACeixw96HbgJbRha",
  "key30": "3HGxgDkn7vc7fEJP5eL7URNQ2hK9VkrdxC5ab8wSNvGDAWBCFQsHsmWd1GuTog5qC7xjg8BBxgw6YUnUiLaCfrvq",
  "key31": "2Re5anGvfsJwKYsLyhG2SyJYYkMB6bHZQXYZWbXFN8iMnWGhha5XJSH68vMgeyMk6JUifsB3ZLogmEF7Wp526NGG",
  "key32": "5fpcETNRjHc7qvcvgH46YCaPJDGLdWpBZUUcJdg6qGPisPq2erUYCPF2yggefMKjTCAHq3vMNYAnZfsaXhpPsxzG",
  "key33": "qY4Sy3gYbdWgNe4c7A1iLAKWi6zeq8de6qKwLFsZnQvyRu8JbBK4Nk8d8MB63AqWFbRaB79vZAQssiqW8edtoMB",
  "key34": "4JCxYA9APFa4s2SoScPhfD1pSM6keSpoh1dSQzNhnHMgk8VwUL8s7kjcyDbXDHwvfo8h4VeveCZuZEY2Nkeoi3Jo",
  "key35": "5Stw37fjZ5nev3G452xcCnpeCvTW19kdp5YWHRtGXT87Q2JMHJBRdm9ZpHa6TygUJZakLTeh2toXpKpiyVGq29w",
  "key36": "td5N9fGzhGFLSZFYC4RdvCR8yBqGTwPRXdEfi6GQGJdzM1GkiAZvnqM3nzprL31t13pg3poCyG4XvzHXEo6zQ1C",
  "key37": "y7LS2Q9SD4pUstfRxbdpGweoVnWVHF8tNE9rw6FStdJgwVutTjGnoLcTSoZh5YUkAo9fEVYT9bKhDuqrSUKNwsP",
  "key38": "dCTUac4N29z4C1F63v1QzBj4HNxqiderTc4bx5YKQmEhu9oxuvZyVwJxwrzxzSohb2T9156UenZvDWbrVVhvCXo",
  "key39": "4AzewAKqLXTkVmjEEky4fNw3WPQDuuQughWQYUEmHL9uUcTDL9H53nMPBd9YYfxALGC5yaA3W2QB3XeJBWnsPCw9",
  "key40": "3tH1akXGnx1ctfAvbgchzK6ihSazEuL7uYVcKTa6c4bvoc9Fo8iZ5CDjsUbvoU2jVqa6AhGbPUBwdykQzDxAZfFd",
  "key41": "3bkQnnt8PygtAJUv8k8KZttc3j88h7W13dUhnPqZKNr2UHjEhuBCbcajEHrBdv8dzcDcXvixAFPcn4SDDUegiCoX",
  "key42": "5Kk8WrnyktLUwMt5aHuKgXHs2U6SSWFicEhvng9gYuUjJNTUD2RYhq8eefpawTdFfWszNV55MF9P39g7TGJKaLTM",
  "key43": "3p8AZXpCRNmtwHdE5BiMS2m1Q9yBum1AuNkDoHwdpj1zA7L11mFVAV5EMoapgwev3t59cenzoFLH5qoBYHvBABo9",
  "key44": "2F9VsYnSeaiqNyyTrJqL5u4qnEXHqmT59hFLrGZDebpG7NLW7E1PA3zZDHT75bTo72GWdXtmtrVWVZjAsFEsJipF",
  "key45": "2vQfML7uaPsvoZxVUhtGc8sonBXDr5StuJjvuans66vC59NPxSHJdTfFoFAqum6GaiZzbhAN6yozLqo2Rc1wUVfg",
  "key46": "5s4SA1k3yYXe5Uj1NqsfYM6bk52F5VhEk51r96cCPuR9AQfszjZq2JPELDGPL2fUT48nzK4z8RcS9vYRdbKPvYtg",
  "key47": "JE3vXEu8FLJpUewwT1ogfe26h7NLJGZYKfZJrQYdPPkZyqd1rzqSqkVVvyi87k1MwdBsP12XvneDzYUKEzA2dZS"
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
