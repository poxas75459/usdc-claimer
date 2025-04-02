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
    "53vA2nThrxY8rTy8TEoWKemAg8qJDE4EQwksFAtfZShwwc34BV8htVoUhFP6ETJ49u3id5nUx4dpT2qJZSdmXFFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMMpwr86tq1Fdo52PqzFG6WUUSKBeLYuzV73BJjBEq43SbmePSThf5Kb6bvPqNFjpcievc7LbviaAkLN9noxxZ2",
  "key1": "9XTDnbgELqCzYe5Dm9xU8p96FydwKKCwvXK3g199JxbN4pBKxc4vE3t9QHAiLKVqRcKSeensVMtbmUm3kbZRhfT",
  "key2": "5mKtK6CCaKqQck2PYbuM3uba6UsCvGx7wocGfdrTgkrgJvac8apjb5BCfTzPVYL5gwhr75o6fREn5jf81vFKt3rs",
  "key3": "4Xe1MpprM4bRJR4BfTH5zuCrpaja841psdhfYttYcWk9m3vHBEbxauASnwVtb7QMYaKFaDAyvgWy1nUpQ36pWxZw",
  "key4": "2u8Q5KoKTP3BLcEYPbF8NiPNoimAbeaszMgZ6HeGs2MeYxuZws5NA5hBqgYzAwZ3m98qdKrDtx47SLWH27vHEswx",
  "key5": "665wv9Wn9RzBsofdLG2ry7QQdvrgNzBtL7TLJAUdHJBAYnRa2qqCzzoZoPPuPi3vYFmEUqfFFGnK6kwCnpUPvsnx",
  "key6": "3QP7v1LAhTczFq562vWXvcERhm2rLf6bQW7sS35SSjNou9jQGfoztHqC8TpFrrzb2hYv5YVJgxjTeKQaznHqJ54e",
  "key7": "3EEgLZngN93rWvMgw49LxaTsNbjkuoRcDos5MtWAsxPqcGnpkveRG5DDTJB6rnkzUH1tXuSKC7PxbGLtKUqspRqf",
  "key8": "QauK95h6D1k8qeAhgCZoyht6ZbMtx9bLH24E9bgRbz3qB68fGHUh1mRyT1wRv1uhHk99pYszNzZ3ubbaob8Aewk",
  "key9": "4wVHbRWmH8hNHvbvnafvmdcQX9XDC6bGLwBrdagKVeUFRPSvGq1SACwy6v99P58VRAoVuMC8zAdUfRPuZH4Cb692",
  "key10": "3YxxiEQbQmSgp7rEY7FFVn7cBWetbMHWRnUDVphLqikLYvsL2Uiot8tzbK9EVKcL4T4Y5vpgNFN5hFJqcoUV8Fme",
  "key11": "2dqb2iJkkuZBiWmsdJaz8pxqJjY3Mf8H3vtp213Wh2LmNi7jh7vPaV9ngVyAkDVA394926KhdWyFjwUDXrkgGhZo",
  "key12": "3ZA4zHz7TNfJQiKr6gjbnvEUwrwQ8CCm5K1zBc7dBCay2oAs2rCM8D5h6k2EXDULhU8r56Jtx2QsBj2kodkTcPre",
  "key13": "3zTmtfzjdCBimMC5pNTXcLJeC8251yG7KAfNn37aLQ8z8cfieDox9DaPjiZNWFizXEYyvoPnkzAR446x1eTwbe7R",
  "key14": "63TaS97FQw3tN6e7GVEZCNoxbyeHBgK8NGFP7bxD5Qfyn6nXg1i9zZ7vVHXNqkszAhpBnn8g19BYNQX5mL6KqMzB",
  "key15": "5NtnvHtsZv8rRTeMvn96FHj2KZJosV1aEuttuvAmmvmFTwcZfZnLTfxnMrwKEfUWeB1RAdZYcf3aeAJobDjG9gmZ",
  "key16": "47NhEDrCvTj1UEDCof1AAimDmHntV8eMmUqZzAoAFfrABzT6qt4R3nMQQAYCVYP1GfMw5u6JEngsC6yoPLgi5oVn",
  "key17": "4k59odEaFEAKQU3noU8U4NVQx4MfxoYuVw3mxqHedCVYV7J7CqgMkaTukYJmKb8GYbVj8mHFReBiPEDtf3rsWjtM",
  "key18": "DHaiGiEBvVQ9PophxC9674LdPAt8FTYWvmF4VvrvW99RG5gBTV2dAa74oETNTxNZXJ3ahpX834FRoFDdfLXA69j",
  "key19": "3kZKLBicT4bC9Ec2PCV3npoN9A1Vp6rkTLUXWAGVdqxzzCceKUjTPZ1FiDyxmaqpUumaW5URYwM9AHHARD63XMhu",
  "key20": "5Tu2mN6ea8SqvGX7QTPrhyADqTtQ293fWpj2VUSZnM8sBNSa6bYMNRfB9fKGq2cmqMbFmiMMkoQdNcBEA71EjAbD",
  "key21": "5CE1aAhZbXHtv4cXq98SaRDhEzZR2oy5JqyfWRawHCMxCEam8efes49GdCdZ9FV386F5z2uhfpixMZQGNgyhCNaP",
  "key22": "5KQeAmaEAJXj7wC5WrnLPkeiUpQsYtq2maVqtNfbyPnxXy5AUQGcTuafyqeq6KxnyiCX7fVFBfpWTxQmU4i7HEVt",
  "key23": "34rHuu8Yms9dCrNYoeSt6C1149tHbFKUWiZuycdnS3p74CcXFRmi5jA93t1irGBwJeDisBNtuzctqfpnFZFxsDkp",
  "key24": "67WDyBny2bqQCgXN8vkp2LWTHTfwCxMmJBaymGJUiLC9rjkvCz2M5ouVfhV7YNbf9fjhSC3JzXaP2K9FZYWJE6gC",
  "key25": "ajDSKkGvhX3T2iBa5UH6JLJoStX29dSQCNFkmK74oR6hkSM4YoiVLZ9Aqv4sRw41wUyuAzBV1R1FUVNHtqThPpa",
  "key26": "2iENnCFWrLy2FsoDrwoo48KEKS1sQHXyG7ALQtVUG4GuyVSQTcSmcoKyr7ggmEkuaRVQJRLD6T9iSsW1vNSHe7vt",
  "key27": "3SLzC6qCykAmzxjTF1ajoirh3H1aDy4GNwtSzGySqoPX1yHzTpaweYhfayc8zj4XWx5cbLVYFu43GDVAGAEAd37N",
  "key28": "4jmxhERF9rjMDTbfJo3ESZyjeGekcok5jQSao5VWmiuiU7NR6YH8CMyzNCEpHrG9Dhrvpv8WAWPQ3hpLVhcGpcfh",
  "key29": "25aMTSYCpaZ25EFQ1u2hVaimGTh1B23Ht5CqX8MGy5RbQcHv6MgX7cohwCay4inZGYkrtstPnxJmw31MNzu6TRq2",
  "key30": "LKc3ZPatdhcxwpjLRTLZ7gxGD21TocXWE2n9BdQzSsGQ3iJGZBt1M7tvUdiAb6LHYkMhaDnvXmC9p1EAwSt6Bqj"
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
