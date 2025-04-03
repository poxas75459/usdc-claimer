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
    "2zNSY3Q29dF4DSXPM2Lvnmnoj5dAuCE6pyRbKALRFaqMLM7DFAhS1CM5WXqCxKXzNxEi7owCmkXjfNgp29jsTda7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8GKx58X1PPprAnNzcPhK5kYccXhBnh75cU5BSqbYo2r7msjdSvpobMGY37hpQRUqPgYnngEhN5mmqurvqk8RTs",
  "key1": "2ZRWf5csGDv8e91Bc5Z2xBH2MPmmXZ7xtYJqHztE1y9yNSdzSE6MiHAespK8xRo7nBgnhbPSqosktPbDFyS1WTqw",
  "key2": "PBrLHaZ53GYKocxDb8MhzSpDciCh66TPT3iEtQTSaN4FKx8jD4XKTLXb1u2iW8FHJPiR2QE9PCj2N5wZJBxDJ32",
  "key3": "3UgJRc1ShAcGyKcXP2GpQmao79hP2uCTVMFYaTuiDZtTCWC5geBEpQEuVYhsQYbgNonkhPYYfmNsF8iNtMMkoAFR",
  "key4": "2SqfnW3D9fuBmPsb1Sst4KXVWwRmV9STzXnisZ8chPSafhs1DybM3ygn7tWoJqYerK82TPUU7ankMNoJyyn3Cf3s",
  "key5": "3nunBZCU7HGsMzhKUBuJkev7LjL4rmMS3B7ixvsm5npZ7ixMEiqTszRAZaRSuygwe67XVJ1SwUm1ZFftrXXSxU1U",
  "key6": "5RVsbwKTC7JBDbY5NvZrUZs6Zv3wNnrh5XhqaoCm6tthygtFqAAGTJ6AV7XdgU1D1foQCoHimE8Va2SHtwDs7yVw",
  "key7": "2QpGQbfwvWxYZ2V5KpEw3qXiDtUSzUJ1W8gZ1p2S6SLhwBwVWzstrKzFdcNmoHytGeGUnPM7vFNyfQZUZz8FCKmF",
  "key8": "N1pDtqwtWXxdgqSCMXiejunkj654MNmDKzgXJGFKPbsp2AAXiNEgwspxCMF5DZPCTKGMqGdDVaemE6Hw4bfDYGi",
  "key9": "eAPPrfPgHb322MT9kKyaNPr2WhqYyHRB8Loi3v1uwF663SqdjUX1DNudomsd23iw6BLwHXEKTdPsiRMCG8ueFdV",
  "key10": "4UWoPjsY2Vgsp5Pvh5ttVfAc6sz19BR9skLk2wFZwuToreNJwGNmEpD1LFVau3e4Kx4Aqqn6fMY178Qu3vxf1S1o",
  "key11": "3ndSswc2yKEq9bc1E3XU2URdu6zzfzGRZDxbCRvGiBSWfMzM8sC3RkseaLxq9BtwWGoKV1YwvJghxRv4S5LQN2jc",
  "key12": "2MG4DHmU1px9ZdFx9zKczBvHb9pHRr3pKyfDE832VPfzJSUnhVZ4u4ySf3Vk9eTMhtCHrWXXVUdohJmR9XAnwmfp",
  "key13": "4Dx3pzLGbBNgtYCPUsvXu8FLhJnZBnGikDuv9W1zB7LypdVrs9CwdEgf6N16rKNKQGkXCY9NFAj51Fn17rooMquU",
  "key14": "5snDK12GicXomsoyiHaSE2TUK7CgjowVkKqu7f9qPh28iWuRGZMHKyz61k6Z4LB6N5gEgCTwxYqxf8QvifXdwfkR",
  "key15": "2Vo4TUmuSqvQiwgoW9KeEK58TK9rtUuPEN8AkP1a82RZNzVwVkpxxUoU6JCPsPGGEoepUMnANQ6bUdRC6Kge5d9w",
  "key16": "Hick3CU8iLnTLtqUPQ7zeoNehCV6xszjZS4Jakg5cj22pFT6kGfENd5srWH3Z7K1ZTdkjoFbq5rAhxMghMrtTiR",
  "key17": "4TEGoTqPpKXFUSFDx3t9VAgnZrSD1obQHbcJ7vJWxZz7zfseTrisw9AU9TbU8EyG4556c4eKak51sjjyuNw8xZYH",
  "key18": "3hCocki72qqbVuzwrwdXuzW9zVxThNr4DXsMTe9g4RFmF1jTtQpF9XfQ4QJYoW9DsBCtsJckgnAoxz4bYeKTyVjD",
  "key19": "2uFz738qUT9vg43oCFBXAPejxgdBEUX5on9rAfCHku5NKaf7eMvnsXcCqcx7Cwz63WbG3mbsFQYJv3kCFyvQVBMe",
  "key20": "2ns25gHv4HsE14oHfap2xdnmY4EN1or42bBEYvPBRZj6jZRmjLVnhRRRuze3EdXa8KAWDbDfpeAhwki6LWtLqrTu",
  "key21": "5qsRFkQf7vwCMiPrN3PNjnEjMXySP4F3McbuaYYsAmiZ7iMQqrYSG7nBvBWw3WNH3TRmtgvZTdhgUjeYHhnpCy8N",
  "key22": "yr4rV5meRkpJ1dErqrh1FZfBySR2hibVxWGcxscGqTi51fvWPHKuL67tfVKSy4PgCmnkp8agZaYzmdeQdqZLLtK",
  "key23": "ovpuMwhtPf4gW5kwb7TVovW82xjk92e9tQCZxDUnhwwxfwEbkP6HfPuFHRQraLgk2dqpdU1ixnQUtWPLU1QYC4k",
  "key24": "4WF8uQvhYXmCNSTnbtJwxYcozRy83ZDNySYZBK2sjaVzFXaHAQddKhhe4eP8hSnV4kmRB91utycif41TxR8rzfKC",
  "key25": "2Lszzq2m8V4Fdj6B4ZzHKprAos8M7HqvJUp8wg9ZVvQuRa2FdVPPRyF5ggBXjZVcpp14UB5399PiFqpwRMo9AQGK",
  "key26": "bsr7HHCwdFEMYqdY15uYReZiGs1a5hXVSQHoaBtfnw5kniYry6quykiX9nzpqBQgDG1b4mt3WuX3gX3K3bmZjwG",
  "key27": "2SFfzWBnm498So5gq8nRdp4M6C53dEEYpXz1dsp6NB8MhLHy5gmSGrFbu8EpkL152nsnhTvp3LmzuYFDc9wVHQJ1",
  "key28": "3pDYtQxZPoWNDnV9rMZq7MtVV4T5qfAsbtR582QGNMATC88RsvE8e6LotnR2pTMfax1DFbRU4iZTzDTthkaqTDEi",
  "key29": "3ZLkB5z5VVY63zheENdZKzuVHWfXLyL7wK8KBuD9yKnx3d9LAXkU7Non4hPUfJkEm6TTEP3p9Qtf3wVXJQbzsrvw",
  "key30": "24A4nyJrTr7gTtTjuvrxWFekPzLGx8ufC4PssbrPBXuVNDKuYUWbbgHPgNgo3D6dGDd99cP7BmAwaHZUa23rkGQo",
  "key31": "4si2kuqNT8dWfBcGGNeH2uF3ZxLmWNVbEmgMc9BLaku4AtD2nnHPv18nDUMp6nsGFr1XS2qJxoKYXj2pjkN5BhYT",
  "key32": "511rtR1exyTi8q2qLBThiseAXkbqsUovDv9n4kq5Gut7WDP4Q8suy3YuTdhSS2VaVJ62DV5wTfGYdhk5N7c7XRPc",
  "key33": "2hYVfaLkpf3ayMgrCTgx9L6MdgiryzkY3jsFU6tr1nxr32b67ZiQZoaZjme4emBery3G3M1Jo1oPbvsdmQuvYnTf",
  "key34": "4owiXVMwYnJ2SVg75495KYGb6Sx9JCrMCeanmRpt8uzYqjvn1Z9gYvwBmim2ahhBMpk5E2UMtkeiHNwQDT4iuucB"
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
