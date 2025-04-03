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
    "x1RT43mKRFXF5p88Uk1vmDXjrAMNf1Cz9vEYRh244iVraZhgSTjMgGtF2v5aLwiAU4ypiToTkuTfPon5mmdFKaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPVyJwS4iEjwRkY67vksQtWwz5NZrM5FXZH779kkkqkXMjESkeuAE2yqAsyT9f3VTug7Uf6aZcMopt5Fem5sr1h",
  "key1": "4nDzzafsUuYh8rjzLcrGJwQ8M4UEVvmGr7K5dDBztHSW6oKse6HRfhaXUwCtHSSAVDc7WYCMFTpxWEBXNyrshJ3o",
  "key2": "44Hg6YZyFxMcgCNo3pjxDwXjMEWMzqPzLJAMT46mxvwDbiNeDg3X4VXm6utuX8upc6kMx3dk2aJNbJG2S67vUDCW",
  "key3": "6koWrDCJw7VUAVF7c3ePSq6hiddTx6Lkn3KsLFCbR1EgoswcfkDTNbtJmc43eMKrheZbAKKn1oGnyeqxzDdPq2E",
  "key4": "27PksdPSY3ZXttTak1d1t5B1u3sNpwg48G8uFxfe1n9i8UVakDWKcWJAL1Vxoo9gXjkoqstaLqJ9WKHixFVZXz8u",
  "key5": "59pLeoVVm4RfmnjkqQN4rkNcM2BitLwZBevhpt6FbyZmbY2wF2YBgfgTU2mNq7PB23ttopszcu3qPmDy9d5yjpHR",
  "key6": "49wdax5rYfEtKHX5AnL89aX62VPLWiKicjnkm4tcLhbe6NNasjEAhX6XFdoATUFVCSAW6TaKdHsB1wDHJRQanr6T",
  "key7": "2PJz6BzFbrzLqF49DsSmtwCdgV3BaXtWfCXM2hWwqRzBwsQjXbyYjN7QSy1skgBeSNUcMYLZauX9J8yas7AGtv4R",
  "key8": "3PwRZ16uz58varSuUSCMEnAvFtkWKkuraM2KYJaSkpG5kogE4q5b2onyUbWSzed48a2tuFPmYkt9s6jy2bGycdS7",
  "key9": "DDw3cJWUdnur1bgvGPnmEchMoaAF6PFkTXLHkq1X8SNGJUUW57JMc6Cjv2dFNXvtN8KAWqytM2ZPr7MVxpU1yD4",
  "key10": "5C7FF4Tcy9MtmAyCnwskrN7o5PCrgjsMtuzGnTLN3ADXXwyJc7oqkZhdm8ETCfufzUPVdPGZGgTPTiRnzWheWrAq",
  "key11": "5QSVdC88gyKbqvDFwEjczyiwu4fgXXxjQAhizWcUk34fpsoLypNreZeZckMs1SZGLKNJ3r31cWmRiGGvdimYqvhK",
  "key12": "3mydmjpVhEJgPtSZBhcrbAopFLnMX2EGaEqMNpgcvaE71uKe8H1jwA8TnFVGP8qoEndD2TM7a72TnfVteeazJz5k",
  "key13": "QX2K83CbfGtFBCgwSMRNmVVytQVE6MKYMpGSu3YTZk1RNrwJ9hYVXFEFqRZ5KnGWa9MtpL6w9c9AFc8QrNhvBSb",
  "key14": "2kNw5ckpXNPRTD325rwonWm8eLNc7CkaZcJ1xDMG2xueaQDfibME4DLWEPt9tpe3ao7bXoq7XwdFhxiWdtkczhhu",
  "key15": "A4ovhFu5d3SxFyRKa1mwUWJdC9Utv2Rvc7CaSqTEWJzkoWqyzkw7xJLpdJ1roCkFjWi3tBr7LTghrM499BTPaMf",
  "key16": "2KQkguazrF6MEtUh9vNJRo6aXBJTojUg1ZNhw1UBSMyYGvzEjQvuSiwJVZc94HGdX11P49n1Y7LSuN3KP9sqbWdM",
  "key17": "Biqe3Ahe2hT4TCHFsfwxdtM6y3USSZmSjV654XNEPjNE2FF2e2gZaBYptpF8gRVAD3p8DyyoN7wL53j7DAudEQH",
  "key18": "5U6ujHQq8H5VKhsLpux6BmbrzPd7VPsKwGB8vFJELVcH5YkB9yeXBw8aUaLULwkWFr4wuLqBeTr3JK6SyPMJEMvM",
  "key19": "2H4GSTm8moHGAJVQCzKznuZjmq5mSGfxzKC8qUfU4sttuxAuLT15FpgdaMfEkeV3J2LQw4yhXRYPBKRZ3JUHPwEs",
  "key20": "5JSJDzPbDKt1ETVfuEQdt7wfZ9VRfAbbZk3Ca7o9sfKA1eHDEsnuQjFL2bGve3rFBNKRdpW9atKnkkktbATr9Xvs",
  "key21": "337CFSVSrn1p1JHaPrMoRk1QpXZzqru63T5UpK9FE9ZiLJxhHtMnChpDT8XkQDb7RSTqkFqvcGqyHWvzTz2LJfDM",
  "key22": "9skoSrgbMFR79KLGVZUBU339ZvPza2YG86u8EADhymUnoRs2s9Qccco7PBDdGXJyG1gZKsis6vmQffRxkt9rsB6",
  "key23": "4gG78ncV3ThuHizXdZ9mTfC2E7XiURb7QkKB6e5R1cizmk9rE1BESHhf7x2k1Bn2Bijku8eZ3wtRiGVpuAoxXDxx",
  "key24": "3cxrktMnqeTurVcjqPN8KS9srw5iKvfVmfgzFvyvFaiL9APPhNZsQ1tqthdBti3K76yqPoyMEzjqNs3rQhEPLv9Y",
  "key25": "ATeFCUuzpyEBETbrRRSEWW2oxggXvzbA68fq369TZUenjECQRVwK1uEWwL32f5vjdcy9RFemERHtzWPK24ErTT9"
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
