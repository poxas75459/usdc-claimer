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
    "43gp5bF8mbugNiBUnvfbkFhEt31JWgpCBtgVeZg8ReHnAMf9NnHguaq1AVBfReLN2MoxvB1sThkh6ywaCQL84KZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnax51ZyYhweMnYsm6o8BPFRugNCjNnjpvNxnwQ522VWMzzS8bMPjZgmZ8gucswJ98tnPxjXNJzVX3e2xARF4MT",
  "key1": "5J2thfrWFnqvTBrQQcvs7iWQGQpX968nNrz1ci7ME4XCFPnbxGRgsCs5ZeRwtcvrVQ4A9o8V9rSWfYoHK64meJ8X",
  "key2": "wvmLdanFNBops7p1v6gcUUbVizpFAxiWHqrVD4WJHVrpKhAgrAL8JGhuBzE9XbseG45aRzKtiPzzcbHUmHUvfFG",
  "key3": "3MJezt6DxDgFgSo2WGYTkY9mRgY8iMxMMKDwZZzM2cUyD8jkKfcxijo8enVmpbiHdUjKyvvmQxkQ7Jtv4pKKw6Kf",
  "key4": "3NqeKzkrr3y2zhzJP8iEKAAXTifujUgbYTJ5gpW4j1TtrtG7h6NEBqv5p3kpn1u4tiZ7CnCsQ6YQx2MsLefjBi18",
  "key5": "qndh2PnveuY7oUR28BCPDS1xFKUz6Nvt1Do73YVRd2TbhrZANivhiWgVWYKwh41Dks3dhrpeYZZANQgxHfhYHCa",
  "key6": "2hGCvK3SCTb2M6rhzYTaeJJx9hVVvFahuK5ygkbZKGhu7Zi56Vkeg7oR789qHxc7erU7TPLaRp7MMFCEhwWhdom9",
  "key7": "3zMQNMiWVbHHndexy2vc13VV5p9tqYZ1DpFvfgEA7cCZR4w3Gaq85QSvSgxzHgEcLg3WPvumhygfXxH7asRDFXsi",
  "key8": "5pQsTQ7k2ySXMD9zJTrhM5fQiYgTaJYFZExiK9VWzGptrHbagZ9rC7onUAyzVmVeA7TEtGi6ZWsqwDVRV6KZwSkc",
  "key9": "3zqyY4WVsd9wwB7ci5KoxgHjEQ3mY8LgpHbuaxB5oZp5R4tUMPvXKrmS5J3woXd5j4rBKqKjKns9sZbF9FV1xBg3",
  "key10": "4ETTNwGWyemBr8zNqF5zPCjwFtpeyWCgqFTBNARfZyGQhJUPsWpy1qEWaSVJnAVaKyjuWnb162Tyg4z7d1RfqEBC",
  "key11": "5c1gVuxW6g2bpskZCuyM56AKGhRoiaAtNtFfeBYWRw8j89eHLqNwQvh1GTKRfDFaBkSERB8Fx3iKYsMZMUm3nZGz",
  "key12": "4hH8YmeVuAheLYqEXkm8sBzdKQ4j5SFU4wN2LN5mhGNM1ohJtPgug7Dd1K1bJSCaNu6XWsp4KbWDoedNtaj4Zbk8",
  "key13": "4NENenXJ1PHYcou2SYMe8hjmGyp4bWxzBBohXFcQd7CeiCZK6fkuQ5ji1219gJ7iuTgpGER8tH9g7frqCY1n9HLC",
  "key14": "2J7rPVs5HRFLovHiy4TjscxSC8TQfARu4UXnhorr3fkCVoq8XSfkxvszZnczawe69Te6QZpBWhcAgBTChuo7qjtg",
  "key15": "3tusNs3GP3wtvWpZ8AdPtteTE2yYTgw925ZdoVG1zjBf1XLQHjKaG5Yu691zthE6z6Dq4TkSrvFX5CXyVTrc2m8K",
  "key16": "4JMzssMDkiAj6nxoSWe6jf8icWjAeb9wLmbeuFXTq4i61EovPxGCjYWgzGnRcmHN8ZYDnkd6K7tn6sTM7kf8nqVo",
  "key17": "2U9eGErs6kRZKYZ159C7gyK8aZWzf5JgbHYTzGFfQRaqqMfDtkPvjta88WgjxHutswEACTesCmTbtQ2DmYeR2mjk",
  "key18": "28wPFwi8Y5FjyVhddsZfFXVX7LJGpoQ7Gu959mpPsJp8WG43PNXsp7VjPeu1qykwEQGpw7KLvBtKwQd6UdgAKJ4s",
  "key19": "3hAoAGurxoJ47rNNhm2GN4AwgEEk94ixXLmJxqjARYryJ65695fF9XJfsfj6sQdSteMavsCu9wzUHRxrt42G6MKe",
  "key20": "3wSwWHA5jwBg2pTuBDWBcT6wjHnbBbfLmndAPXUqduVimXzpH8H92UihaGhC7htmNEdmnAHnUENMNekaRLggbLVY",
  "key21": "nFsVWL3CytFPWmHErUG6JaCjgEpU1rHodC6Q9n16fnYAgNMSAkX3x7YE5KpKWmTKHRi6ECkRUb6xofeNmNRn5i4",
  "key22": "NeR6tGLDrSUvm9ypcAwvTjkPUZd3n1eBu5hNV5mhz1hWhg5RXnbNZp2d5B9dNviKK9xdmHwn4f5eC8Y6tN3cMuD",
  "key23": "595zwqkjMyp3AmxpuJ3hsc4W1GSdcfsAm56NL4WJS3hsaFH8TWDPmyvBdvW38oa3KCfiPyqUrjUpjEoMyhZkBhch",
  "key24": "3HxSZUJ3DV49GfPrQQybN4vFFRjwwUh7y7h1eaezfZ8mQnfpMLqySUmveeDDwuhPYY4YvMm3WKKRPNX6wAoabd9L",
  "key25": "4BbC7uMsyUw6hp356n36vQHmjen55RDuoJwa2hJH2rPv3NK69vWaSFiDWz1c3m4juHaX2yMuzPWPtcuCNzujD4qF",
  "key26": "45ijpkLbeE3QRTa4XxFMypEaYt3B6M3R4yBpPBLdmk3gVacS3UbRCFgZDQz4j7xAgHrUYVA1qwtcf17EZqtKmU7N",
  "key27": "4jVY8GQD2hGPheN76sgkqUUnCSYDaAUJUnyUh7v8fZrUXD3twBFiUi3ottNTsiqWy7cPaGsWKe8ke5dcf2eUVvRU",
  "key28": "45J2WXiECWxFmA67XTgRDvQLvYMe6EvcxJMUeqibYHJ2EhdnUZp8KptSAQLWjHhgnRyGpwzQFWjBohiofwR3KJpb",
  "key29": "5tBTMBmQdVKc1TDz8pPxMbycgb3B8HfjTjadsibY8u1LmACJbSBLnKxpTs5GgX3F7VWy2gLLs3UPW1yLn6vywXg7",
  "key30": "PqZV49eQJLi6qqhD1Y33Jo7zkdhoQWXTBZkj1e3g9PEJbFi3rBohpa88V8JpTJcEB8kY1tQcxgraSi1ssfpfr78",
  "key31": "5kivJzWfY67Nyf1RogPrZiQ8EC4deY7qDFVwYDaz73oZTWfDrsGc96BG27ignxG1RNvuXVa7W73dZL8VJYGASSCF",
  "key32": "dV6s5fC2HRiDy79rXDt6mC1ZzS7MxPVAogdkp5qTmTdzk7tTMJft8oBaMpXXxkhcXkX7ci7AG9or3QDUbUkb2Y8",
  "key33": "469tyH1g9pkaYdUPrijK38JHzjWtkG3awzprFUobdH6CdKxFJuEjENoPq7bh5vfpNVWWvpL5nq1Voqo85fYyoceR",
  "key34": "2j6vN4SRg8srCbfN3Gxok6WfFbJJGFfKXpRNGtRmhnof3FBjNiYPc3ELxrHWm7ckbGF2vyMyoBzAKX8bNVBFytsd",
  "key35": "5frRVnAWTHGBKhqezMHbr1UjvNjWGt5k9E85CZ8CLiDw9snqNDLqGQquEuFo1AzgtC9smxPuPWAHXk1Ld8NBMZFY",
  "key36": "3fbZCR8J6r4AHGjeS9xz5faboxdz6nZTm6BVMit1noA31XgXBvNwSoCKpUqgT5iydk7fRjxjhzSY3n5uoa9YkBCr",
  "key37": "3YvwhwGDUyerYfrm15t18iMj7KPUU2b1MJyF2jJqhWfvsR5cfZRTW9MuVj72wnEHLHKc2m6ePULK7pQaLP1YTWAX",
  "key38": "4vtJr8ZBGZT36gj8PPFuVUF8BXRu4vn5HtsuPgVY5VfyprkNU6u2GsECYnGcHSSr8N8nTu4sCtun7JTEV5414pvg",
  "key39": "2GpLb3DVy722k2yLG5cew3GGbQCEZi7oXSzUihAPUddKc1rWgPf7aGbxY5S7ip7TPDsA5ch2UKESnZMi5rMa6tNF",
  "key40": "2eVg4JenWtUKS71bDYX1w23uR6VJGWmqWozP8wiPwkBH2hykHajEZZwkd4gsRef6h4GKprCtoYs67F1zk16GGPtF",
  "key41": "2fsoqGTS5jjtSXmA7bTTvweWE42ZKE7kdrFkmXJ6kBobA2MNGN3yRYjeqVtn5GuuC1jw2HSKrcoHRzxNgdg9Acn4",
  "key42": "4e8a4zV9wgdp8T8cARYCxxxxbD6iyUb7LGhyQ7z8mfgEPJ1ZMLvo7193Wc3E3a4KtV9Tm5wVosJxdbe6e4juNou3",
  "key43": "X84gyRWjWBVvAPEtgpRnfa2jnEQo8wzSJQD4H3BGXVkdcrcqRraBy5zJQohvJSc97iLw9uGRZQJGFFqFUc1w2g7",
  "key44": "5nAVuqMcL1MUBdd5oADb4XrZ2ktd3xCey1LL7BA9JkbaehDgfHxVpk1eJuEoRT7Z75UbjJs1dshy96SaW6wExMG",
  "key45": "4aiBhVQVakQgtRGJqTt5RzLoUt5X3huZ3FpgZse1o9ymVrQvTp99pBDPzcrJFUHZaNGf7M85iNpjUSr8rDLDSsSz"
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
