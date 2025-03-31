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
    "5bbq9UfdtTRwRMSPfgE1WzoiFuesajW94CbBhWHJtA6Y9vndqKgXxUZmsiLeXXKJL1N2S5PCdghkJoyTq2mxkLLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUYViR5TtvZYWgHhnwWWxr72ExE5ZM3UviMJVTnDxo14XLiNxnuh62ewxNTfdPSC68AXRv1ZEq9YDAgs89eSywQ",
  "key1": "33LXvD6VBVcmi54QuV5XpL9RnVkpaiL6QJqY8AgkW6MjtVSH1nyeMJtnHo2NWpxCD5rjLbtZmrPPGSGACKiSqfPJ",
  "key2": "4GNky7nw5UgHzMtKKBNLPTkZ2Dt5gWjyfTUF1EHPyUuUcGfHrstesUGQWi8RaAb7bbRLUimg3AZyqeodJ8u2uHtj",
  "key3": "4ecpHXuAFEaehXgf1KBTA7jCYroUUmm93MJ2YbQPr3oN2sC1RzTDSncvwrKBqXyZouJfeWjiT8b8Wdp4tyEAAKL4",
  "key4": "VJMi5HBiDKN2oYkNQLzJKMYz5mvHycipSSJZgHvwtifjVjCC8L3yELTnYjGj1cUQ4kxej6PRDoJi5rE3VMiJ4QE",
  "key5": "YqThnmee8p38dtvYoShsdboYgYhsEsF6PPgzkd4Q1NPDVNMdEC9RUY6wweomL5TuNhFj6gcsJNmjBT56u7V6Nrf",
  "key6": "3VkT3osTyb8DhCPK5HL4DzVix74H3DYXhuMC8qT2i1D43w7fy5qSdTBBDPMemu45kQ2YjzVXybrfiJQphCmAvcFP",
  "key7": "2hf7rEwxbgkgs8CBkXxZRFexEvpP1nKXET7F8mojKaHA5AADFMdNxJdFajbtSMmoNaLuTyaTxJnSYanwS6HLbPyk",
  "key8": "4568MtAp3UZH6YnnwxgFgJsJcVsSy6SwEqHmavuWcD3Th9xE4aUr6Rc3xARBsmvDykE6quijNDfEiNucfmw5KWuN",
  "key9": "xCQaRK2Yqr7i8EkaubAsGZmDLdVgYWXXsMvmP4FnGyD5PCdaMEsg9XCExMW8bAGmdx4i5TgfU6Brkz9hoS22mG5",
  "key10": "4JNmSPEXDV5Kz4XERvjbC556ZFeCzFx21i9UUybfipDiakvhP5YX1VfcELXMprYf42PYQxUNbTYmuUsdQKNxoAu3",
  "key11": "4u2MMiWzDQ9aTpt9UVMibT4SSH1tbD85Wq5SsNsZgtAtJxFsna8kPmvMZPRThTnqgFMbsFsEmJwD2hivue3QkXzv",
  "key12": "3mPT6Svgfs1MTU2fUBNx2LDapt9zzKmu5DeccDNAz7X7CmBiUPuxK32omjpew22NRdyTBwkLt4hwPb1NqW7K95yp",
  "key13": "2wNoS1YvWfiBLiCCa9PSTapDXmgAuUiSSypNAu9vbJLwEubv2bB7sLJLivJSeb7ZVmL5TGHD1vPdM2br6DaqJ2Xd",
  "key14": "5boTrj98NgU7fF5sLqFm7i3gBmTqZQfFydnVGndHuR3a5q3fd1XFW64Vd2ZJphfejX5qxNbQ8uWkb5FrmQGZa2ZW",
  "key15": "5uGPaNSCm4LrYa6hoWxazdwGLoQfsKFUD9p6YDj4uEpXHhZcCcKir4PjnU5Jsky3k5U7MdKQJyPEbDY6A1EQAB4i",
  "key16": "2fWYeFX7ixK6rQ2jJR2fhJXtSpQ8s2s3NKV4fdymezkA1GphwCdKZoqR8zoLMY5SsLw8riSxuZXQ6DSYWZtq9noE",
  "key17": "4nt4EYnEiQ3NRQhFuRbQhLorUic5AGexR3ryG9587t15TQL6318LWPJjkeExxFUpz1X29soZsPT7N1SCjCiT18VU",
  "key18": "3Q8JL1ZnEkrkV9kiHAZtwCJ3jBUfNxfwwzDnz8BeS9mPnAMXfTT5N6qJPscqhsnuf16zwfCtJACaWFj9E6FyUrc5",
  "key19": "3MGqkjYk5atMseon2ApZfTrrETUKTDKSqxmMsV1CeVrLiUanmn9fEkLs8BGoCoaFDwwx37Qx4PnrD2G4gEb79F1i",
  "key20": "3Sc6NusMWwK778c8Nbx3MMJn61Z8SeYhXSkYembEkWDAc3B1BeQ4ztpqxRr3vG1Xf9E8tuWxeehzji9WCc4PLzHs",
  "key21": "46thmbz9dsQ1B6zxiVW6BZ2N5xzmyLmieRA13kQZRvKRmiX2qqQfs7GJb1Tth7ULbfpqa8oL6vo9LYW5VfTaqRyg",
  "key22": "5yaPCtHsJVodkQuqqULLoYxQQf6ENwGjD8n1oyuPdzkHjxP3ayQHRXinXoNG9VVaSoWLVrmiRDbiafhhd87Y5r66",
  "key23": "2bs7X39dn6oxKS3fwGw1w4nPr39oYG6bGLSexTsPcazLXkT8mxBt17KRTWnefPzoGd1XZa5kaKKSn2U7BqiYYwfV",
  "key24": "2iWSmUqSiit1p6k9MKPqBnusWPQjsHkNVhJT2N8YgBGRMRwY3B91uUcCuSy7epLhbje5dSjgFxxGH8t9BkZUEtvN",
  "key25": "7PPLpqx1xx3EVKvEGi4BpzACKrU7tC3Dzi1RcLxr1yJUwn5MXZJSHFmLZiFNW7XC8SRibzedAuMBrdWA9EcoEJA",
  "key26": "3sLFJMVD3keFHnaLjgnG4xLmKasBvNK9vV1iKFFvhghTHqX1Pcrmhqf3fSZAaiSyYf92eu2ExxzmhRkk8yE853uN",
  "key27": "4vdmCGWY6xyoSAMyeaeSWQKrVK8o228ETpZXtfxyGPXJWjad9ZCxbGHRvcwVDPA4RBSvVfayqeEAJFMqDNYYpp7X",
  "key28": "2TZSeoZ2X32fbXw6fZRwfEURPnDLGWL4S7NQg3dCbJWE7gJGhtdnzDAYZx15spkfNDGFXZLLTnvzNgsii8b3Pobk",
  "key29": "3omQcCPUWUHPmbnJAzNBQaCmgB7VGZNvLB58Uw1uqLswBuuXu7uVXySxgPfHBe5LdC3vNw9kA1RyWXW1yxbdtQq4",
  "key30": "2oNRsExuN23Tk4gkGmW6geT3ZSTyZ4vwdxbnQ86F75Vy46daxVXUDT19oPMPS5zx9BL1UBN3jrtJgPn1vW9Ztqpm",
  "key31": "3ynh6BJu2qt47RZAMt5Nf9C7GcftYKtzBKQE9cbRjBYwirigcGCM2LG3aHXsUMFbtp2PCpZhmGF3zWXFu2csMeCz",
  "key32": "5bb8rTrswPbsxkzCxkyu2gdJqzLhgP3qc6x1XWwhaYKEa2hqQVoEwMVrHcMf34Da8N9GZY9zdLw2FFwkbK4iN3Pf",
  "key33": "3LqWMJMGwimHXnKdaRUA25tpFhMa2ukrotv5gZu4R5Wf1yHVjVUa3N5toadzLztCQypJe57bYFp5tCcAPMQttp8",
  "key34": "3Yd9GjWj6rrieWvQcL2rgc8uPBf9wU4Mn7MvCnau9ZdzP4hewpNfRxV6wor7PspNi43nYWKhNLKYt45sotuJndV3",
  "key35": "4UqRYwanXZN72iyP369ojQnvoNdJnSVqKM8zdceD4jbWXtcgzh5SpgVBn8wL29m85MhFXH9ZMrFjXYuho3kkmim9",
  "key36": "Fansr3JkYqUR6TqpdHtQAfnSdBrYM2WwriJTtc6VW88yKLZ8kxDZVMB2ca1rbtCiDysRigTk4vDjteWWwx3fzE6",
  "key37": "5jQ8fPg4KtC34QYLLtCgCNC2F1bR8BAGhTg4rc5yeJRyqbZLfDrj318eWn53Xcz83P4enibpxLf57AUhPRpV55rp",
  "key38": "AhscHgFQNwBJ3JdbYZqbto69fBHqobRya44Kj8TzfsYqoyDaaBXXXHp3dguNTyESBLefwm4VnN6JoCrfJpqEkdB",
  "key39": "3sQJYdqK349FHUAkz319tnN9TvF4wL82MRTAtVD7vpUt844r7wJkzstdmtiGLsyokipciP4rTc9MPbXYrfmz5Pj8"
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
