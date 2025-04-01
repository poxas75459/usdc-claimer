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
    "2j4MT6nYyzS3cvUEzNgv2B5THRZ8sqF12rFiZkoLcLm9SXksAbp6oxUKJtniucxqaeX13DoTe7xwbowmAvd9Ji4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnuacimLtQyrxZ7XPFsvH7EgX9DynWDdeNoB8jnTLqkeTPSqtAk6p8Qrh5PbUQ8HHhYt53rPnjQqQrXUnuaCDSM",
  "key1": "drzuGXmumfQzFeaknNwBN68ZhUizpbUQt3i1PfWrSu3zyjvTeSmxqM99mvTFL5Nks9XPBi9bWkSbKzQboS24u3w",
  "key2": "2eqzHebYwahXm4wTDKyf89evWKH6jrbkshNDNFUci3ELUVDw5WxfQSSmqZeLgnBmN6yKMuiT97ftE9FdnWbbNp21",
  "key3": "Y9ZKQM7jAV9uUsBownr69jRrfZyNppfLwcnJz5Kv7xnLy9ezNSbkjFbfSNWHeeifVM4H1Zzsq1U9c3kgqqxVWve",
  "key4": "4hmduEKSah946mL4DLiasJk78YULVNRP1xefPoGmtBGs1JaK4jmsmZLPpJh8Kkw27zfXhPb9TYAqxQiAFGj86dRK",
  "key5": "65dKproy3jxZNJNoYXNVxDRdMxcRdp48K7x4ahy4HZrWyCjoX8sq9Uf3Cf6nXTJbH8cS5nkikANj2NryDmS8qNwY",
  "key6": "ydjpFykXrGVMQBBpGH85fvs4TQhTk41eRmHwBAbyD2FAFDmYz9yUKnur1WSSG1Fi4pkAVdzRMDoLewm59NB282G",
  "key7": "2NkSPjMpGi87Lhe3WQ8FBoxpEWPUYq4tjESdwh5if7C5Qw9rjjyy6C21gRXZmUKQ7oAY4KNWWpzY6hzqBMe154Br",
  "key8": "22Aq1q3uJvFeP7xYbpGqjVxMdWrLKxbbUgLWhR1EsSkLE9rrV9zYj6xYKzpUnoKrd1LejVKgnEZzzHhREXrp6gvq",
  "key9": "4Ne7xVMz19A8cUoNsg8VGj9846eTNP9GeqFZPFAUGuHT4esSMh6E998SWF3MiRdtNiNdqcMvzXnW5Fg7tVgQQ8wa",
  "key10": "fyaYgJh32du4DCsT1kJAQaLpGmCYdJdad4dBgE4cFiNUnSEd3mFmGxFg9rAr98s6H8NaaTVzAECj94uKxWF3j9w",
  "key11": "3kN49EAZmZrhfFN8frxHDHsMYGhZqDy6ioGt5xhPzu3znJtfqqGQ6PvkExaTXovj3wb4krNAfKLHyBhzyYcEyhyC",
  "key12": "4EBkN41xkX1XzoSVjW4LxpdrTqmsbtM65PWMC1A5qj9YktthkYcs2ihgpX2s76DRsYs68zWKKWdHfQ1vyY7RYyGc",
  "key13": "5wb4tktF7w575DM9Hos7qc5HkqEY6TpbnATxgav6seacCCfcDjUCWxFF7KiAtj9kQmm4LZAzLpf4YQxkN8BmXkjU",
  "key14": "5gZsKnbwU2YLcqJXhmsrTCAfG2eSP3TqpFHPsVhcFwRueYMEwqNbEyNzqNg3gqJ29zyTBjs56ibR9RXKVJYm89rk",
  "key15": "5u2dFVgwH3gfDwQJbYz1QMNRYAbU79ektyN1MMqLwjLDG1ikXpFfdtFcy4V68RZm76C1a5doLWK4YkJTCRJJ5oUs",
  "key16": "zYbWBHRxuSCHKXjZqZmxvdZTiPLyr4oSY6zJsS1EZxNCyqpuiyiwHZuqEej7SccdZ4TMCiMW1nmmtrLmSZ8EeDZ",
  "key17": "39erMnJiHVpF9Cgi9aYadtAo1Bmxf6mNQ128X5YiwfGwGBD5tScJzEA3pbhzRHnzgtHRQzAvSnz7PFXEKiMYEVjY",
  "key18": "6675jiBKJPnNLbWBDgUUVXJFVnyhDrY4hBstH67oFuAyKT6YFgXrqhu2LDonb5WmARuJeAkwQvz2nABDUsw7ha4b",
  "key19": "4dwQF8durB7Lk6q6VW96DY5DEpdCjQzZq5hA4fXivt4t28UPtFLb7J6r2LymCT6htUH51qN1i5LnWAFHVGDtvrxB",
  "key20": "3GzuBcuCZQY3kZvc1KGvj6BzJFNTpzqbRzKyMbVGf98F4fgyDiixq9MdzxcyP3nMn8YhGP165Xf2ZSsNFcKrFk8a",
  "key21": "63kPypL4NQKocDWnm2q2L7Gn5zFPMeh9izEmgXprDYYNwh4y4s6hQ3iivkckFfZVrBCmdG5xiQXi2LUt3E6zp6Mx",
  "key22": "5QCtkV7wc5FEFNLRcDFzVSMMFUFsXnfmefL6hbsZxzNbMwKRuQQDjJKbyEZAwFEdXiLRnct5qJVNotiiY2cpmLKE",
  "key23": "5yi6AFo51TQpz49C2BwkLiG1HVHNmExTsWUEjhck8uhzbtQ3NTaa6NQuvxX5M2azSdtBjXejMVYvnC5yvs6sagCE",
  "key24": "3tdjNoto2p7xQMfqw1apyQjARuiPALrsFFvmFKjLdzy8zriv9s4ZX34xvymBs1v8omacMEt6C2SPtWU5V137MQBf",
  "key25": "XZWsukiKipC1Rk5c6jLZSyiDo87KLFWboJ8EG9LWhuU1Z1kTUa7QFbd1ZewnFtAGAVqKj39RK7CsiK6zkuisA4a",
  "key26": "42B7rQU7HpJWWHmifauTpXXpD2MuM5JFYrKPCRznNKAkBg5rtKWwJHpjST3ffoNfTkVMXq9vCspdebb2FjEWQi9b",
  "key27": "2Q47F9YtzGiTe1fwFvgWR3yZagFg69euUyeabMBLf8i7MZsm66dpPhEMAWQnKPkLFEPudynpv1pAqw19pL5abd8F",
  "key28": "4D26D7J3abKGaxXSLJoQJ7GaQ132q9ovLiMycDXaPxs9wZet6WpibUVG6ZRSfNDM7sawAYArf9rGH6NA2QauRYjG",
  "key29": "224LYcSLA4WRxwE3kb9KBBpZnEWHcwbv2Ez2Qe6pbWmziYqmWoZYThfCXQAsYoReZGmozeGjjU3kFA52s8Y2ozyp",
  "key30": "51nq5xvHh7Jr3Usd73z35WwCcKqYScss2zngpy6ZbXECDEPWDBVQbhrZkitgNZf63ewkYzoShAeW3z7jX9QKNnkR",
  "key31": "3Uqu81cnCjok7hv57ZwrWb6Qw5BTzVPnjNyw6zW9FS4rrAEotYUxh3ecF9VUpfb1Hk8qseKNAMVA6zHNfbGakzDU",
  "key32": "3wiFPa8wZGZnrZyR4AonGRjs9yr8iM9de9fqZmJikzQLrUh4DpeusLcc4Wksc5yaAnXwhdGCUSBRFMezA8vDaxEY",
  "key33": "zC2YrsffUK6MuH57GFcPMRVhkMwVjQuJpvS16BL1qgddUN7zvum9fDhcnSuQvtBKpf6Dtkv5gGjxfSLQh9A5wKt",
  "key34": "fLnYS5quzmaZMxkvfH759HQ5YLa3uM7e92TpqVqG2zzP47ANRcKALR5diVpnpP4QLyBEENZLKW6mgpbfVY4i4ap",
  "key35": "65fWkt7ZkJbMjn9D3rphv4DszPmT2KgueiDmR8cJnKKc8rpRKdRZwu5zYAU7PbZa5uNHGL2dNPaukpiretKQEaB5",
  "key36": "3S84AyrLdsPBU3iWpGimoJZyWgqaRENAy3yxXTn4Ufv8ikNkCYNb3DvX8ZKd9UnjLaWzrKciw15xgL7HQ1wxLxKF",
  "key37": "x5x1bt1RfDS6TfiNVJzPRYj6YwYVCDZDkqZVmsJnvzYezZBpnVCYJDcW1UtRnqFTkuUvEAim7FdndEpazEG9X8n",
  "key38": "41ik29a1oSdNyHquAHxQW5zrD3QNDS2ejie5NGqtEy7kpybUbAZ28hnWcJu3yDpHY4tFBQytfLEexVhnok4t3trm",
  "key39": "2A67XmFV1acZmQV4279F8r91nK3jY2MdqKw3hBXQdoxpeVoLhQzVJazcuGeNf52cK56f1tc8eUuA2mPWBfmRyzVq",
  "key40": "3pJEQXTa3DWcB4LG72i1Jf97JGfL2vWTMe8h3k8gWnWQ6JCUPtYbdJGr6P5HmgxrGDXYXmZw6z9KyyKJB58qkqka",
  "key41": "67iJKtMpM5HWjSJMsu49j3SGQgUTdG3erQB4BJuzFe9KfZUiofFDxoX6AJWPRjqmbrBdMyv6gweDh3SS96TJtGRR",
  "key42": "3gwkQSb8ecGsL4ZWdSAJk1fNVovJFtkK2QeLQhJYyW4NfVgaWqZV1SKQok2B3BfveFsvTKxUDXet7UgM9guyAyV3",
  "key43": "5AAGy8GK1P7u3DAc3fPbU4CCGEFkvXEGSp22q2zWMbv4XAB2S2zhjFAmcaMdBpJc6iAgc6Uz7ctngXGY7KWgd3HC",
  "key44": "32a7Bue9r4UknYAK1dfXz2rJCz5j1ABDYPsB5sBUSzBARc27pFhV1rri36eabQSGmmsDzRY9fLDYGh7seqVFSXjb"
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
