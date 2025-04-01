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
    "44Mavp9GUd2XTqdogjtzv7v6aGabuCnWXWwV3E5QUg8YrmLs4yXRGsAfzuCKSQP9w5eZXNna8nJ1NZCXWX9pHszm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRH9kSzxxm5zY2PrGJbinPJARkYuRWTPM9UQLPV5H4PkfVAYa4Azn5M9fBCAEfBNVAxExfRzizjmBjkjBLKtfjq",
  "key1": "5UxxFRKQduFzA916gVVFqktVJNKLX6ap1Vh3Bczba2Pt2nG4C8HXZSX78FguaJavQ5DzQWrVBDAGjRc5Vhtc6hTR",
  "key2": "HBaxfkzfGeDE91zwSDEmed2PbdKcjMufFjdsLG3MBj2xapXEvLC418MFca42bBgeUreCsAe8sX7QEFdhENrdsmH",
  "key3": "avZb7oXNwHMExSXJx7NKCCsrjs6NRScpbBb6z67UufVU4rnTnDrdLLf58PokstmgaNmBEDxzgVQ24EMyjYUvnTF",
  "key4": "4phzhk17xAPyH9pZk8t8tsvZVHaKNtnDoV4NnC1rPzUCPsZbuAxn7XngaVRrqxX4MpAyssR4crgpUc96tUMyYfqg",
  "key5": "4woZ8vs7NrfuP6a3VoiqFx4CsEkawyKcLKPZjEcjrRhpuEtv4mmRJ16PC7n3SLoVC4NRtVqmKj1vAyAyXBmHniRG",
  "key6": "5Xbh5fj3PHVg8brDRPPTE3EvRTFSbGuEMgvo9gGXnsEmmAwppAdweTE1XeL3aW2Jb3ysxBeroj3AafpwgFvzt5Sx",
  "key7": "214weBpuS4sQ9gZVYM2b36qARRmao1jKhmhfoJrAfiWL9RSxWmj7KtBF6GxmZ9nrM7WzvZPozw7pxZi8qZbpCps8",
  "key8": "55bZuDe49rVN2i2Q38bRufj4gVqg47YdVZJtPy6fPYyBSvhzwBm23BRsz8ZQrsSc5h8YzNRaxPCbsgkqjD7v2M1G",
  "key9": "2wBFm96QbW4AiHg7qY4BpUPJCmxZdCqxkhp6cYrgHCQdytr7uF1HGQTWJw9GhxYa9ABQtDCbMJgCK34WnWJkLG3E",
  "key10": "5AfPXfj7Uo5KC6u36k946VTuQ89Wc5F1sDtR1GiUYXgWKqTi1qGSN5Gkkg9rNGfDxoNuYbQaabh8PWBqfqXiyLaZ",
  "key11": "27N18wCaTKCvfPyDRZa9dB4xYaVNP6skVCHS8TEmtNF7fxdVHVZQZVRidQKvRy7KmQ3WBcQbV9CXJfsvhUxmEnN2",
  "key12": "4sCuSX71eAXMz5EQd5hy6fHwVPcz1EvANuuTYdqugdfbMZWXpN1ii3ERgmFqUyFVM94Nmh6ojwjsQNB64Tk54HuQ",
  "key13": "23gnvsmMvrR3F3dQ9Pvz25LNU592Vm1DXmKF4SPZcBprcAihEGDznDwqzSiE7LtjmYFDjmUYPs2CaxH3XkvixbcM",
  "key14": "61H7YLVhmSmHkSnssbtwLoQAAKiKw4LW4kBLKytRSiKiJFQBWAqKCF3ManNsmGNjxzfy3hvLx4K6PuqZu3F7hQUM",
  "key15": "VKh8tGkRu3aVMAU8jzR8dM1taEgZ4TXwQHK8mTHThcGyqxLvqbWYWHkJ1HpwYhYnux6vhhC551BL9yQAeQtEDxL",
  "key16": "2sZ3xmETgUfKRZHPGcTWWwvyEmiKhqrJDQby8oLsQvs8h1QoPRaBNUKbH7Ks8s4PqrPdacQoiiXXTyCfkrrhzsra",
  "key17": "3LCYZpQ8WYxNxrJE75G1WVTooZ83TAaY7UxXm3uJLRARKbyGWzgpN9Qk4Um37gcNPTEqmtGrzghcbDgVBo3hStTL",
  "key18": "37nmST8fqkaT31ZMX2bM9hx3b72Ntn81cYtdfZc37qRUdYbR986s54Wx4xssNUTC7n2zbcPxfogCKQWqSwitgnc",
  "key19": "5LRTfdzySZxGsSdzEWyvBFYedDuPyTxFniu6mRh4mZqeg7SfA5dTYeUshjA8HxaCZnQ5bPHi96e6RBbbRJytYwd6",
  "key20": "4YHAAYAkWwqoyZJzoeUBPfsJzJzuqpBuFaAXhyuVGFsk4rs6t34rATh1c9e5zgMYyUdGKWZyggxJvT5xrm5Af1xh",
  "key21": "dUeifuot4ZyAumc5EJu1CkgQ4pKszLZ7yQcz5GfwQ4DbEMVsz4Mn1YQHjy8JBZrRUxGn6tBozv2PmF5tEm8kXM5",
  "key22": "5dv1FzgWQfVw7m2KU2pN5sRDeTM4Bz2cJkFK94csRvJ26pqB4tfMht6XcGj8XML4s9UUbRq9riVqUtwSM8qPM9AC",
  "key23": "v33VFJF2Au2rNdjRdtSs2u7BZXQCRTv5bZyoX9ho3VfEeoiYPVnMYnCGPmezuw5uepgAJE4jS2S5rpkT9ydkfwa",
  "key24": "5k6DijGrLW41nVshCnL7YKsBmKvxT5H7uqDiDeGuC17hnousPiFuJfEaRWwZRoJjc1p4WwjaTw83S3hTrUas6wHc",
  "key25": "32YbxYWAEp75c6BEV8LxMYtY6ppUNfn2tnAn52cNUxv5PNTMsDSUnk2LELZrQKqmYeaXRhmYo6Mv25WLdpstUp26",
  "key26": "zHqJxKZmZhWtY5XrxKtAAWZEQXwkT9T6xRNNb16d8RTiCkmpfHKSMrzo1hNaEsHh33tnuVcm54DipEKimTrBt8n",
  "key27": "5idQXGquQE3VNfiW6Ye7PVFJqFfAa2SiA9LzLFmh6yeu86bfCcqcFyJ7oVVvft47yNCH3BSSQrG8vwYbVUx9i9nn",
  "key28": "5Wp9xMfLXTVrD57tJKBKKtAJgG6fjgsS7QjbRGM9jHbp45ZWAZ1jr7mCwjunrbezucAj1HuwpSZC8NhWnypg6aYi",
  "key29": "27VMihu5XZNnN7afRQW7xXkzLJ4FYoorzVmiLj8sGZDp4FsxoekQuq31fgkSmH6fjBEeHxfiEcrKjtXWZ8wrKZ9a",
  "key30": "MNdXHT7BZwFUqAwZ9CF5mdwiNuQKNr7w6qpqusXRZv1i6PK3ZAFxCZmznkPDbzc48TYRjXjjZ39pS43kGw9HVN3",
  "key31": "3gwPjp5CudcC4pWb9pzTLP5XhRZjkC3LbNRGpLK9bPB1NGKyPh7pqQxtrykrgYZzwTxG6sri3kNLfp2BEPDvnGNW",
  "key32": "4bQJNmk6oq8aQRDju61KyBCv1rL9udu2ajy1g7QGQbWp5zRfEU2Y4kYoMAnke8cARZCqYqBAt3zBdkJhtyYaZWH3",
  "key33": "4WpWRbTF9QeZbZcJ6VEdNmmPW8PYLcYLbQdaSTBh5yTfGi6vUBMUTnUJqVLRNmJu6jwXb44AGEuT7LpKGqJ5LCC5",
  "key34": "3FdLcq2MphbAnwQVGw8mnvPFid1FnjdgrLxYmmpd8vnMUH1cFWp8p58bYgP5oFhbnB2iqugL2TeSQFHNuNypKsca",
  "key35": "4ztrUuFpKW14gNHebCHiGqYQUco6RWoA2pNsXZSrcYm8QXZZetZWfXKGvvopzpj9wQaNLNGyDqF9CHrCqBFMJxmX",
  "key36": "53VC2G98c3fbNar88vNMchrom7McugzgdnsKF3RiNcnHJDrgaC1hEvSE9BkNgCKpoGbPThYRddtmLpMaQQxHFZsu",
  "key37": "5qE3ctuLhHURTVVWPUzYuAo2yE8cRRRtJpZVyzB4vmNaZcNU3WnhgoJiFao3vk9BsRJAcoFkvR47ehjeKCptMstq",
  "key38": "48bD2LTJHp7Y9iN46CTLqNb4QUujDUQ8aBACj5SgzDcMh4x5NEtrH1wsgXDevr9vZQDoXL9pAuGS9rFA1ktcpaDP",
  "key39": "HHtvNPZNRyDSnYnj9F7U9WNgb7whbEVbjZQxNHcx9HdW7sQqdavbWLJi2gyQaoS4tAfjFoTd1UHBVmGD5UueQyZ",
  "key40": "3p6WG4BtcyFytDL3yfG7NkWsjuvXnR4zGRRj5XfbEhPkgvocb2sRCNJ5bP6AtGRLNdfH49EkNURg1YkQKfn5P6kU",
  "key41": "GHtvHErkB615XHqvhFKF5Ksf7CPNwiKrJd93hPDWMTGfyzJHoiLgioDPeZFyXsJ6xbA6a73atsPinDCewdRSaBU",
  "key42": "35fQ3Uj6hu7k7zLUYGQZQSzFtWUNeU8rME6FE63ss1Fuovf6US9gk4fDLtPxCGUxiZ1A7BTZtufP74grCm4xb8K"
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
