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
    "FDrTL1pNxyVZfobutMSjq3JjKf4mqKyDWgspWYixRhAsSVu8ZFoKCPZqiPx9HGuMyTzQA362KBHnvuqm9atK9ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mtgmc4j8PrngoEz2yMuvs7e2Tot7zBVmU9mF8DyHtjfrNFBtZqwhroXYLpE3PkxdMyxCEGGexR523jxAwC9GckA",
  "key1": "3C8CNtcG1g7W7PFWhsBgd6JKk4dQsNRow8BLgHRsBdud5A7mohVkYf15N8agcWCQK2cT3JwFABo2rhZsSgk1CLNg",
  "key2": "5o8N8b2vSrTcRZqiwTTNUBjtJCVX3esj57WDR5E29CdoKiBGncdi21xjun6ukq7AZSo6HPDvZxRqc9kHf3MC5SmZ",
  "key3": "4LbkWpdvASos8o2yZnNFNc7oF7qUCAGLLvZUe2rRAQQzkg9fSof8PWbK7E39mskGoE4Lvv8ADmk2wMKzduuwhzzw",
  "key4": "6VCC9P6EQBp5VHPwkFM738vLxsxfJYgSpVqcHfQZGWSFxbYZRMShwwzM5GteqbStvnGSQSREGczc4ujQKdNMoP4",
  "key5": "3BLnCqU43x6iB95s7AgSdsDde2PpycSG54GzwmfCJjRHZEhSr48YvZAiJn4vCzEKt6NFChsAoWWM46EnKqUSRwmC",
  "key6": "26SSDJyZV8FiCXEgSsw2AV3ZcNWSE56aCTmUgtgPmzVisCgEoRTsiLsnjdQa4Zo9YzN6FPSkbmdSb7SgNBhn8LDC",
  "key7": "2c8YTErb6tGEiqDND4n8tWb2oNHr6tiRAGVvEHpbpBGTS52zXmwXTaLnXUmb6q38aS7gh1bzW5xsusTpKjpo6MLr",
  "key8": "2NZ36kZ5D1NmsEqWfjAufa5k2RdtF7Q9E8g49FfNAsfLSJr1Xfx9myZVbXKocFLVEHxdUX8AFaFYcVc5A5P1Dxkg",
  "key9": "4X6E8rW1itiy6X7rxhxykv3Ai7KPsjD36C9uei8ErCpjiZxmYJJaoQqbZfDJrg6dStK7b4agKAGCR7Jz5ugadRhy",
  "key10": "4J8311C3c4eWsr3sbDbQHmT7P9SpjGPgsCzBvwbDF4HRxabpkcYC8qT52YDmkRCArQgFNHBhrXjg7c31UYPR5izg",
  "key11": "3pnYoTANssy1djGpAe8a4A9QGzA6Rb3FwMawCrdLqsAA1poaaKeU6MFtrPEtmKzbAgVkJ7koLyg729sVE1tX2g7o",
  "key12": "5NJ8FB7zJp1NZxaLbN77fG6WEs7pqhLg6mpiiiHqNwLkySwyKATtcSvhJXJQ5AVSLbfXxUW4xkjMVBsGja9afdbE",
  "key13": "2kdYsvYXMsNNwLWiYie7C3npSbVkM2c8Vdys3neQHBZm18PUgF44yy3nGmugvVYFbGKDXd6grvrqbezPy7B9sc3A",
  "key14": "3A7fC6y3bvq6HDjuRdY7FHzGUgzynfWj5PqWixXARedpfjf7n4hBupGCULjMEUrsAhGheUPjBWN6YZDKRNt2b3Wd",
  "key15": "3aieJDDfbFJ49wZwyQesLE29FvgYUiMNsViHr5FaZBr2Nv78xYKkq4Z3MjMv9bQ7Dq9K12PD1VTjFvxqbBoyLJVq",
  "key16": "5SxvwXmpCRS36xzs7pSrsShk7J43aAEsqt4XLCQUieAJSCsATZQsrcUxNUR6c1gyC3ijd6TjHYMoHXCmFQxEjRvg",
  "key17": "4wUZEghAyYWhVsFDnMrxPmWUGGkiK3TK6Mo3NiZhfkNGSmn1X3v19pUzHxUGD1i7fh1uSpd4tCs9bNh5KzEMdMt",
  "key18": "2w2j67yGDQy9ZihcDtT7R1D6sK21wDbyetjjAj9YjcYgaPLpxSSHzVQG8t4YqWqdCxd2qwyS4fZUi83wHGiqJ4cf",
  "key19": "3b3KcXyak7CZSCpatcxaMynMA7ei11JpZRyC9MizyFcMK4Xmmd6X9mTHvVxYWCFgoFSuDKscekWwkn45ps1eb378",
  "key20": "2VsYjvsNkzPJBBP2Lisnjo1WwG6fuSPJyAXDuyfMcszfD9gKVWoNLfNPBsvhFLsAVYarzoztQkaecsRxGEPmuoAQ",
  "key21": "5UVtUivBR6iMy5GXPE8z53UXMHgBZVn4U9dBSUQi9sJzrSCLpPsUKGth97RMCah19wk48bWLSPK1H3TpkSAd3KiJ",
  "key22": "48wNBMLejdGjmbLGpzomPE2EdzqCtEJnUQhGHQABeLGSBZZiNEMn5iYhRK2ktvw7YgesSLHrZ5JKLfVus5yGjQXW",
  "key23": "2jgLdBEVeQ5H3eUDqX4nEFyfEYMtZzN3Vv7UgiAU8fwmm9tw9ytmWxY7SDFhHWUgmHjKXs36Nrcm6wXqw3Zs6FD2",
  "key24": "2AYNwUzpgFcp7mj9TUqryj75whhsNkYZT9WXnEafDbpVWwhnhqqM1a1Puw5AdbNsGn8eo8a4E3zM7Dnu5bk2ha3W",
  "key25": "5Zg2UzHhTXD1jvkhMqEXgGcSYoGjZDQFn1Gm8FK6KKfbG5C4wc9kPgwKaXBioe4y8iYmJRFvDBFV9Ujw8BYHYVTP",
  "key26": "53cxWNjcYtj2iQfCB97uyjAzu8q15J4YxboH6VfxJAyEfRf51PaFo9GttHLXfaY3MfX1QWiRo4CcfS1fDSVjRPLW",
  "key27": "4Hnt6o4EqXEdhFdgWA63QoP1yS1YawPmoLvmu8HcM4GTE2hfF3YBJdFm1TBZtCchycteJ2KABDARtnEqSpA4RpJS",
  "key28": "2XTt1TSPPvedqL8tTG6sceSsJ73uxSUGDx41Zx4bopoX4jb3SCGSJQ32XToTwAQATPApvCZn6TPde9yVWscqu8Xf",
  "key29": "56TmDjp1HRXaFgoBBqSxiis6fV3jSTG2zPqE3h6DsQBpP7Lbvu6pLtti9vGgYqRcLAJvsYXGwpAPfb7Sn3iedFSn",
  "key30": "2gKtw8QPVRM4XnVmgQuphyBUk97tkesdXZ9CKRkmMw1MTeDQVwdugZ23VrXs2nLdXF785mbHUvnQa7gbJuahUL8F",
  "key31": "58915gqWHVcz9cLVMzD6aJQZYd6gsYsqEs4i7ez57F9e4fU3WXjN7Yw6b8U32ZSxrhGHWQSim4AJS1NsLipzoJ25",
  "key32": "4xHUPzdzNeanRvxhtaWMn1dbJN8LLgtq71VXFmpowKMd3LMVbb2L7YksrhJXU5Mbw7BoyT1Ep7mdLiedk9xRQnoa",
  "key33": "DbbMewmBiRkxazsPcuVY3voWacA44nwTdgkgA7httGJQJzGvMwMynsBR7Zawnzj3P22AdaQgbPTPZW1qnPASqWB",
  "key34": "2FHqG44Gw8nJVM8wj79GYrZ4osq7PgdzhdnN5LSjWSLXKeiX2myfy6uNYSSh1Ywnoxq77h4KQpXqWc3EHRcryPMb",
  "key35": "3oR5MNTwDSPg8XzybL6x5sHrM2xx5M5eKTTp9fNmsXSrKzNTXpVd3Ji7nUzRZ8UykgDWZnPdzBUNQ3t6yYYvPRP3",
  "key36": "4cdT5GXjeRQwXrh4GRZmRLCKfqgkwV9PXYV6weoJKpGJgrWF7an8dvUu1Kp6ZnafGCLxNp7WdhtRi3SwS1jJWN3N",
  "key37": "4XNQmLH9BQE8Dyu6WBYyah6Fx12E6SJBKLcBtmnHZqqxXL28ibAeWnTP8kZF1UeMHDBe1ymHirWKwGhwQYZV5Li7",
  "key38": "36VRsacNWDdAYhXBxkoPyPer7KMaYwpWj2bkVh8JUFMuPPT5eHy5ZEKKNpYEG7TZPw4BL7VpxMBNCjwc5DH3aE2g",
  "key39": "3HitbgYsg61FRjerxMjVc1NDAcb5xcVFv2e6o2Vv3EzX1Z1huuW5eMH6qYMnUmvmtNmn27ir8Py9ANBxxmg585xE",
  "key40": "4diNE4x7JJ2S7UhJVU4z38KFaky6b1k7rErnBk6TjtwffmgDFboXUhjUFaaxcsm2QTYS2MTok8b6ebGFd9LuQNKq",
  "key41": "4XCzvPjm7WyRt4ECKgnK2sjbiPMzrbmCoR8K7xNLXFwdaG64ZDqMVT2pSQ4NYyHCrFc3scSNngDNb3kKEUgEqRSq",
  "key42": "5D5nPpS4XFHaDYN1MRDqUbhrL9ydMJVCRSJCtpiSQ1bHozzy59TQRySu9bw6BFZDYBsUeRpj1gQU83j3YKesXZdD",
  "key43": "4CZCdZdPpvDNky7Fj22auu7VVi4LT84cZqz4CJZFcDG9XZfS3BT3YsbKa64GZ8qrwrPejbw6ySGvQkrcKD2VpsBg",
  "key44": "2CXmxYtUsQcvHnY5x9eWSnuepaX13VyBbo7fApT2nVPB2Z3GCscx7B2HGPnnpyHwjjAcec5br8QBe6gMPZd3SePW",
  "key45": "zT9afx2xF6gk4XPG917WSiyXg6HQKNUaEQJpcH1hvRNLiQG4K7dXjSUVSfHLhiSN6znx3mNYv5SvziL1ksE6e7R",
  "key46": "EGhLxBAJx61GBVLWw6QRkSeeKTUr64MhZHuiPWggZ1cv6HjQyTq6FG6GioeGC5g3LrZZHD8tEdUcdw2XoTsbjmz",
  "key47": "3NfrbJhDZXeaXTWj9Co1fA8UFBwhBfnLEA4f1p2ujvqay3KSvQpXMRqvH1uEbyRyLW5XiBe1kMJvX1rUW51Y4RFA",
  "key48": "2WMN5JFhhPn6xienz8h3F8S5mofPQ1KDbYboVLK5JAy3pt8mt75yWgyoMf5FBWZr8K69F75FhXkjJjWCq2vMmPtY"
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
