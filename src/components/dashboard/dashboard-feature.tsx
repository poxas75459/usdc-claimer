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
    "C1udhWahMYkqbMC8GSa8NfRCC4Vuwwtvv59AD61VBogqZBz1UcCt4ChP39pcQDCa9i7CsSSr8ySrRor3Qo9M3XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUFojELhekPvAUPx6bzAPP9XDgrFjfYgcMAgVGqLqFqGLbaH7suYDBnaBjEtue4zhKXxjFeUQ5wpKfaewCTVfKK",
  "key1": "3fLUyj9UMXcmnYDCpCiUXsWTvFZv3F5ecaDBaFuvVE9RmJgwgYmryoBYuygjxXfoZQkAzedMvXRV4Jbh6eaoSd62",
  "key2": "36TX75tu5GWmgHvcyF66zXH4cKm95W3CzFnmpbWCvy2rHkQakQafuSaEyKV9ZiJePXZW3dgdEe69YLN6wdAFbF8r",
  "key3": "umfgEyKRPRGk7FjeeRtY5Kihiws3u8g6ncpfpCMA1FPzzonSNv9shU1ZUspo6N3Ymac36tjTiTT2bjZPu8reK14",
  "key4": "5Z3P9ofjk1Z1CAug1pAK433uMjYz4iNamL1qNiGpKi8LN2XkiH2yum2HzZMQWWXTvqJnjFiFmYkGBNambxKcrgWy",
  "key5": "tX3YjWyHJtqU6sM6ZpM22vnuNPqCxqi1ULMsJLCzoiLRdxUjuYm8AT5jFf8JW9Wro9HTsLavqRG2szZWnWAAvzS",
  "key6": "4dc5MUyTNyt16maWsbZhHYuBCCqD8qkebG8ys4QEoPPyCTh74JpmSEvzuVdYt8Nm6SPxsHfcuQDURLmDcCWeMFfA",
  "key7": "4Gz16DUapyDRdSMmZJp67TY28Y4QNYaTyVkPkEDY4E7JBdRXfkHwvpUjjN8TeAPiuYy2RuciyBeGzHqbj2C7AxEV",
  "key8": "4Dy3bDrAfhRWbrgof9VHSbYrDC9goRnW551dd8wEJyF2m93PP3Mxj6rHCzzdhxcrVm1vAqaBEyXzs3JY8x6DV47i",
  "key9": "2JXm666FxczrR2ECwa5N8nyuvLJ7AkKwANe34mghinTPfZGsS6q13k9KxiSyFGYJonMgYQ4UcYZgSLoPb8Vv34f5",
  "key10": "yuVro8i8UWAkXZdrDgxBgmSkbTR9PB6JVLJipY6SunchJ64vYrk2yFjz5MnnvDS1Vryz5tjQy3t4ieh1Nm8KMVo",
  "key11": "4ENEM2LhDNdWBwpm1GhvCknST9WQzhSdA44Q6vpCjGsdKnfvE3tYZwbNN3PS5sFhwMfKbFpkj4pVAs4a5tZwbPq7",
  "key12": "67UVh9Am1FSDpMHEmWMTavDZM3nzVFZAYxUuR2Cjv3UzrZCG9aSV15tNtjfFjuAqd6VnfPAYYEzwy37sHfXc9Uyx",
  "key13": "3Q5Gn2BsLpT8EKu1cHEeWp2QEkzF6PbP4QCQPvsKRiuiDynd9AwN5sAh989kgnawcXzhksgZSTTEsT3YR4opLk5z",
  "key14": "5KhtufDh4uLY9VihHAuc1h74xLBmnx6GFfWcKsQUL4Wr9YiBRddVVW3giZGqvuHwWAvfRjBeTNe8Eg6iqSsPhAGt",
  "key15": "57BD9eWNJEX6EqRShvKve2TSNHVZ53f9QuVqvLz875pvq3hvZPsUuB4BadLbPsBnM7z3x6WVCXohhd3J8hg82oUZ",
  "key16": "2nkyAKEQezdo2HJEKyqc1CnwKVT7Lor1wapnfugSiQCs8zzGUMfZv6XX2QmDfXYuqR4d5zYWSrM2BEgrJNacfAsw",
  "key17": "4EA7dth4XB46G9pJA1B3Xb9jsjCAexUtAT4bSTrWYckmoZS7k2ZtPvcaMjgmBrk9Std3svQ4fnoSYG4xp7f8aez8",
  "key18": "XvFf2chX8Mo6N6sSsbvdxuE2FXoVWzuDFNEeMjd6npWyeZ6P49v9HTvnRAp3VHABqcsLPg9xG5Xt5rc4dLe8N99",
  "key19": "4XVgE7eYnM6yNYGp1GpqkXTFEgBkoNtTQf4sea2UMkNAYecea7CSGJ8FgL4Cdoqh2f9vohm7Evkw5nBXd77PheWx",
  "key20": "5aso7pFksJcdoDGLaprVNxLbMBGzzWM1U58NBC9qRedQSSuQzZFHihi1zXFDbJVG9FbdULryEDmcaezyEaFPnTMy",
  "key21": "5cU3kXR51KQyDHagQnxJwNwgZFMuoBiW6TRzEXzxPMQBwRLsubpz8EC65X7MJ1LdNZtk8ygzPhzE2UJW9GqdYUry",
  "key22": "4X3YJDxGZExiwrATh5Gkmnbp2Ddqfe96q4CQCcPDhuGcBwQ7v4t5jrvRcUUc3R6n5MhkwWuBEw4wDPJbycpZzUuR",
  "key23": "mftpz8hwWetMvt5RyzaAQtuMkKsDguWeFsZCJ9znBNtUH9ov7pKDBUMrMJFMqeiqonxcEU5bKJL4dp86hDDDAkq",
  "key24": "Z2e4RRdGqsT9mUBS4WcTMXA6TQX76UwpBsrU3ZHkJeNbee4quQf6aUUWVYu27XV6YtBs1AN8g3gQxtF88LAbsfT",
  "key25": "3b41Fy4LmqQmwpBKtzcEE3ehRfghG8bsUbh4UK92cf3pXnZUMWpJZnKeRkKuTCMT8sxZX7zKdzSZgYekU2R7J35L",
  "key26": "3gMDauqHSXscEWRFfRWvtyYkc3Sr5pcXjoeNM8nvzhpwD9LBFrREqnw7y5LYfpjcJzWhQ9TUvxeMwGePtbaxZ1py",
  "key27": "3CPYCY6ujNYmhsBDfHjuPivw3ZNYtYzAmR3Q8SCRS6dLwz7BwczbGE4NdNHv1NQ6r4nNAhadDLsuocjWKViTEM8z",
  "key28": "kEh8QUr6bNcFnnTBCf7XS7VRPtYbjz5g2LSRXC9ECb9YaANzsUowmaLDyMLua72MDxnH5suGbEs8sx4VjEBmwD3",
  "key29": "2M7dhHwZCgLHkZCpHvZMnNGFg2jvxiaCfvC3TpAkkPnScrUMsfAQbMB7SxMuz3euHpFiqjNWqxgDTYN8wReHjMfY",
  "key30": "4UtDPVTFUnst1tCEXUp896ZGnJg27e8T5sjn7W23iHhQXQrPTN8H9uRGenzLMkDu2Sw6g1u2M7EesXPhzp1GcoXu",
  "key31": "wKSqXaa6n14i9wToqmtVxmT3rMBux5ePnho8SZetskKJ2UFU5R9eCnUaMdnxP7xvn4jRESRcyJ98HuWHApFh9Ry",
  "key32": "2zf8P8F8R3Sqe2jxTKd7R8cEjg7KgGd5n5MSCA9nQJekDFeEuHXzb6Rc6NefGMXuZQZEEPhX5sCtZ1SbnUgACSvb",
  "key33": "2sapiPUDnRqi3sdhYAMubBoswWGV1D5aDXgkrh4mUFtxGu4Hq1EmqeadKgRZikRMtBEqqXesnp7okFuJ1sz9bx5a",
  "key34": "2QHsPzgj43B6Pr4j1KcHcRCxQTzm2K5rEePEy747FpfnNkdx8sz9jE59iMG45LkNodT4onp174byJaVi3yPhGTTY",
  "key35": "2be3gZQEZyHS2xp1hSToYGpAkWX88V1bTREpaaCQuSkCvsb8ijTAu27qMiucq6YM4fVREZqyxGf793StD8sWpnZH",
  "key36": "3F57PtzcEFzckJDqcbJFjReBTgTeb7zKHryfR6Sv8CMZYSi1zfXxwi8or9heXrstJZPsVo2RXiwLCvwhtybqRzgw",
  "key37": "M3ambh9YZfoHEZioJStqE1uMkQEa6pfqjjTKj4BQR4V1oFYyKragcAQpYLqG5GMYQpu7koACRcqk3CzJSSYsnUP",
  "key38": "2ZW7aEtgUZ8WqvVXEZhTevJunPmTccr5jvGw3Z7ssaoRqaPeU1VJW6ZPtPkbWYLSKs1VroNdDEnwJspEVEpLScjS",
  "key39": "44iji285Em3EBs1S8pq5Ndr6UPWL9Gv63f4CKDBVdxXmb6rhG8ZrSupyNvQTndaFhYxEu4rfCsrKeS6zSeHjbFWu",
  "key40": "3XrokJjFFAZQBurF3a6x4T6SVeBjVmcBMW2h5Rb2vcefgGCWu3Qj1NWDPGLVtKSTX3zbFW65oLLnFwg8YtWYfTnq",
  "key41": "pQLPYj9P1RztmSEyhw26W823MUWCX6WbB38QgMjre8cYCovga5yAaS6vetkrdtTsWNMqWCYJEokvkNnL4DWNTGb",
  "key42": "5CXqcxNbEe5SHCac42keDPR4AwYaYWrNfRUnmhFiwHHcYu8xSNaB2pJfSQSA5rmDEYQbXwAcgPFJTdP4tEf1ddwa",
  "key43": "59U7aiPakJ4knFJ5RdoKML9u9QiAkBU2GEF9RF3JQ8eAWWYMzYVBeTmuRxqFsYQnfbCpSAPpymVnutC88ivsEKcP",
  "key44": "64PeMbdG9tRoxUeroUNKtTLoEwJVToQJ6E3dyK4UkGyqB2xJp9VxgBm6CmNuY5uTqvayzLQ7oQPjpRQoSMgZqnns",
  "key45": "3ojTUFgEMVgf2PETeW66Dk8T3dAkwA4rZygGn5XocKcC6EbS7vzZRaccF2jUZvwq2UVmCvod88Kqu5rGcS1vEgfQ"
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
