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
    "3FsxXrXpBHKaPCDQjLmJ3hbiyioY1MvQ71eb9UcrbkSL33ekF3KkssTkbXyC2aH18PeKJchY1y1DhmgYNN3AfHev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K8aqxr8LG8AQUGj5aiFDySH7UQpqWveVAv5eAG7ododfnGuCWW54Sx5EdCWAELVA3LKDjtDxu2xbQnLKzshgDyq",
  "key1": "21jmvrfywRAawxd8wgNWjcgwb9wkTXtQDDTNJvfGPTm7g2K3yuRANieRB6YJDs3zYGJrujydiENT4faqrunk6cwu",
  "key2": "38Qh4zawhdLtjEjFvjZcYgwmazXKHGrdhLbTxBYMqNDqhrcXFWzF8MAdkHmxUmdqcGLBfXQbpnqUAJioe5onNcJt",
  "key3": "5czFXX7kcCjTCwZQMxPqRU1AADqwYhbcQ826azqTcXxKW48rGAXmwXXrwpcmEqPHemJb6vS1FTbKkmfDzUv99cnA",
  "key4": "4aXxvehh5UkfKNqc7Q7kP8mG3pWnCkAc4LZUqccxKP9nFTbuErL5FUvbnw9uo33ejiaUf6goYueBgNeT7FbZkqT4",
  "key5": "2Fz37hSk9XyNXWme67DsYb19mopjUeCcGwu71ZjV5gQ8pP9dPvmAC8LbQMC1vDjrs53RGPbiYtN4dmxZVM5eDeDQ",
  "key6": "4Zjb9tJ4t7pcJzVsj6zqZnrD3gf6NsihiyCViEV9LECqSjFaHi2RgqVTHsyVPv3Uh2BZZouDS83N3nMJMm8xzSJ6",
  "key7": "3ib6qrypcxVe4jJyPZ1q5aeuXA7AJZ2kAXMFf6M9nT6nF6tg2WrcyQks6UXDXXfXR8XDfQqzammuPypVrjDy3F8H",
  "key8": "3oby3ZFC4sLquhQFGttGnyQXtPWfK1fo9vNSCYLype38pZm6fND5dwzv9AWTGCSEy3b4ADTNzTte9UPPKzyXcscw",
  "key9": "4a8hN7L1W1er7YSFoXmmbGVuv8HsDre5Zi1SVvL1jLarwwo1rCLQHWTcvefG4niQqDj5dHCHfg76z4ZfpwPx2ziV",
  "key10": "46Wnfgy6X7YgnX4SjNUJApATFJoJHsobhtrrNvSmHPboHwifYFMxJoyPsbdx5gx9vrvRfi3H1hZoSwsXA2wM8MGT",
  "key11": "5N2tUmrCQxBZNX6ftHMiGqqhEf6zoukLS93KgeFuE2iGp7WVvCBE3aS8dZjR97Pc52ikkas8kU94b4V2gQikRqJK",
  "key12": "43FDaN1tPhwMdtShrgG4EWWoJ5T9EeHRU6T8TsDx7vEEcpvw44Jqpz21LCL9GkMa6D9Sc5jNuo5CLzdEu33NudM1",
  "key13": "5W6U8afDub8CJ2yQG1AoGB7aH1YCEUzRsp8ranNJrhxDCPgMDgJDPmHymTauKVbPQSKDgTMsvyFrqj49UsAd3jjD",
  "key14": "2JW7BzasJ1nDdYfX22qkpiz9ZRr4DpAdPDH9Gxuv9yY78gXLpJxk31X5LDMm7hGQhr87in5or8ipC224GZWJC9Wa",
  "key15": "36iNszw5fxj1GDMPpAk5tkCyLBXajfHmh6r6TsEd3jmrCapAtNUqTfZjoVsMy3owumexJSxofmwWBrRx6ZaT1DWv",
  "key16": "3ArXmiv7tH9Nqc24TfAGm7zNNwUXjmimxj3xfSMQLdREJT7WqVthzRfFyTqmcUVWuCGwuAr4q4YbSRKpUyhwRuhV",
  "key17": "W2ydfADD5f7uzraAmsEU8PLNzprzyGJoAj9CoVcNPo85fsVoHTQhUeSq15tvBe8eW5r4G6TxSHWyhR2doXUu9gw",
  "key18": "2du22UbdPeL8TLRb8hvVfb2LZTug67qgKfRvEo6xwuYzCuD7WhZ3Cwb8SXrM7wuEagiCF5zfisMhCU9Z1YQEfBQh",
  "key19": "5UgKaT8ncThrPCCWNo8bVHFXsRDL2FGy4VHTi2FE7vmR6QL2L3nhQqmAPNU4RUR3GXEv5hCZ66FjWSu2mj7LP637",
  "key20": "3bUTiFtubqkaYb9gu8evnbiSUrgNN9e6p6FbH4QhugRL3qncFfwLV1cH9EDY6nkTPKM5uxU446sXPvKgGSZvTzeX",
  "key21": "2HPKAW31smRxQgEJwi7343CXNpSVAfB9CZjf3S8uhtYAESTCEbgbboKw7fNB5MEMdPkktNh9RsotuT4yoiQwRf3p",
  "key22": "55A7yiop4i9Nn7f6StJjqxu4834EbRFZp1G1ZKYuUiduvCPv5Q4oQdyMqKx78WwDRTbvm3wMjiA21zcfJsGhk2D4",
  "key23": "35NFwC6D9BrnE3F9EaCRkT6ZKCPBR7wqRqVHN94gpF6fxFyBPNNCpvztaXVMa58nbKYf6fJiyj8xCtx7cjQDtCLL",
  "key24": "3c2na6z7DC8o1ES3aks3wGstoHBkt2ovFf8Vr8rXFt7QptGAADBtkHM8RsTQujWGYok1NAhBDw6odQiWLdGU2AKQ",
  "key25": "5PzYhAjgN1NeSS1xkHez9YNtVoRE8EMw7TiTzNfmCfFhJyeEHMg1EUAGUp6SvkfUB4TuGd11XH8uFuEPfXivVErq",
  "key26": "4m3K7RC9cYaUxbwCQwDhoHWuasWEetAsJdTTHZqnU76SinunptKaRDk1fs3ZHAsoovokctZ5SN68m4N7bb57xzL9",
  "key27": "415Gxmbx1MerJPX9nHLZdqqiypS2htNicqwXXRomgxi1AxoBcxeMNz5Hx9Ks5pUXrwK4izH3qd9xNN8EZPKz1RML",
  "key28": "5wWo5DSisY7qFf2QmaGNBRR7g5pZ2ckVorpEkCT5h9dyvzQ8vnesLNXQSteR45tipdT5yqd3DXpY64sTqUoGNbSx",
  "key29": "266VVsV9Ba2V5PAtmpsuUsDdo1AUE37H8Q7vEgV1SU9E3nSspteQpZdxKW19wJSUL4h3YmNJgFpKXVBYUE1RkcWV",
  "key30": "Yw17RgdgUxPu6yjks3NuWGLunajrFjj9gR8U5XPjkjMagYBEdkmixpRrhMn2Cakor9KqEt4C7vAFVpDJU3N2jsY",
  "key31": "3Hufjj3PA3RuBV5YA787ZJy9CVJQ3GJPJNdybr4asgEsgVDkHNNzH8icLTAFhF79DH6aNfkCQuW7pJwaziBbhjQJ",
  "key32": "5kbeY6dDsfBwQB63jNnehuJVGAU5F1PRfY6hUxAC9QMt5SDsddBhamFsYhqTNVPVpZEfF1Br7ETVtEZDsBrVyc97",
  "key33": "4Apgdi2MMZZDZHYaTbqT44iPCRD8Bo6mth9sxtLfpPtJNTQ11p7tCk47vLa5BBcFZTGfLbUPLYSQrBc83Da1obPM",
  "key34": "128QAdyNbaF2qjTRA5DK11R1cRfr6c1CBwxH8nh1VD3CBoYTBw561cBb9iv6QPcPbVWxMyFsZQeQkM7YDBEnhKsk",
  "key35": "33vhVaEVWF4RdZhLyqwH1HhtpV8asbSd8DpoLKzgwTgZACDpFGQa4vBKdTs31b7XfRYyifMcVKoCujVXK17wKgaw",
  "key36": "3BqRrhctRykh9vnoVkaNyfHXNVDjDafKbDh94XHbaThT7HjBDF3dTZK26ax1k56cRb4YdqNhjZbhucucGwLYJJZ8",
  "key37": "4KpCVkDz4USrUWKxab81sLAoiEZdwYqTYgWf5oeXSwGCpndJ99g3UsaMsE45p9inWqNLFdyFimHtkRRt2HVATJdk",
  "key38": "44C3yJzNajigDwRPwuY8TPjVwD2SczTpixxN67QM2vtN6FmJyt7YwMaYJCSVyUQPfXSrXhtPyiKfwnCnbxPqHR8n",
  "key39": "RM13N2zgvuRfDJLsiBaYiHh6Tjhhe1d1YHk9oRLvdVy4kAV4LHzfbvgFcnqFndMxj6WE6wxAVTX8pj8MtV7WGFu",
  "key40": "JM63h1MXDt1pMUfusyThGkWket3DCwjoachBocuHZCqP6ZeUjQQ1AsdHe2jTEr1aV2NpAimEFydwXy1iEuGgZDD",
  "key41": "5TkrEfEBmm4PoUTJpP2DdTpyakeS7NM3FQm78hYxE1GHPSntThFgeSzMKVD4hNs7jzDd9Srw3kPvsxLBerM3RAxG",
  "key42": "4spTobSka6LVmscajNB9qnnsRTLSb7QyokPdH4wug3VRAonEpoESMfqkJvMkD1EgLau7SnJ4mGLHojyqQ4GuKEea",
  "key43": "5eBbcz8T5LqPCLroYxw7mBDiKghPkwHrjg6fieApQqfaiyktC1YQVfrrUBNenYb3L6Ps51cm4JjvnXrsX3TGYDAk",
  "key44": "4nQ4oyxwAxjTKnGo2f9uANbUBAbvhJcKBVhqDiiRcyYyoKjNWLU1yAsUCCQ7ejYPZ5Mxy88hELMYQb9YaVDp7XXD",
  "key45": "341CgR9nAuVkpdxsJpBJS6FFRFmzdSVmCWdxnAYZty2Fx3TMm78ropbtjSeXE7kArH3KQyxDHgfx7gLTNn4b1rXh"
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
