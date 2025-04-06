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
    "3sHBGcMEXrxBh2jk9Mvnx1vfyLV6gPUCbXBJhbLphd6nPhk6G3RAqLAPQ1gdLXhekLPCyhRqrZKVuS9DAV6s7tDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDfmcQspfv2NLXsjYnunENYa2qmfvbZqHhiTFydCQ3SwjhtNyaAyE6LCczyqMQzcMwwwvnofz3k56M6CcihAcPE",
  "key1": "4kj1gu3o8GpyjK6fq7jAyreDMNAo3TjXSXFDSu1TpcbQ8XQkfuYtKbRZPapwyVM6NXhz6eTJ5h9G7qbAZmGsymQe",
  "key2": "2vQUgeAUsL6PvuZ7nQigUXp2hZKP7E5Q11omMRdUVZXXsNwSHZdV8FfdsAsW4NYpHTzXVwEG58ergg5GgDT5AEnY",
  "key3": "5b1mgVER9t35YZCVSxRzuM9oKDXdQAMduvvs9pvjLy4X7SmUjsX8B6e89kLRUCBg51TfH68zFpPDLqnQg88uWFP4",
  "key4": "3dPmY9qQb2MpLixPZ9scvHGTY5qAHtRFyAEL3BPb1QDjcFpSRSBav3FKrx1XkTqsJWMyWiihexWYKZiYzqi4LLRg",
  "key5": "5Vgajp73iZeQnVdHRPoFmSNYFgHdwNEepfTmgfw1NDbqn1ZHp3jefF8N6hfmoDfBcEiWUfAuQYzexuyu4eikLJzc",
  "key6": "3sazndcr1AbjXbQEUmWLVd1Qe9rwhtEen2Se6xAQq339FHxX825HmLvoA1yTrpd8c9E65ScqwNdKxuPcTPLDDARw",
  "key7": "2DiNDH7g7SvQuoiVMwdpT5rLxjeuQiywmkFiB8Qq3QTNPYajKd247UcgNgvXRdDkcYotrbpEK7nvRcxZBmPiAXtv",
  "key8": "5KU1yTcf6WrD2d3xoCvnE1Hi6qRJmPJYuBdCEyuxJTTQkakUf78CCDiNNooG8vjaijUcQYUkHjkbCARPDthVE4j9",
  "key9": "418kcXRKiKQSXXZQmxh82LLZDwP3rxmQysiN7fc3bPe6XGaZo8qepeqpA994S7K9mvQdkcEBEF2ZS73PVJetTeCr",
  "key10": "ynKnV3SHQcLtxUG5gCRyrYC2cfFqqUdhAqcmCaA2nMVZCGrKCgVzXsUb3eXgH916EXp8mBtF9hbWWK4N86dHgJi",
  "key11": "32qv72dLSt4o2PvFYn6LWGGjN7sUryxpkWoFLBnfMCLHE9ET543V1MbiEBgqFVyGhzEnKQfJU2BEXaqerLBhknrT",
  "key12": "4ZuJjpUXRhrP22MXsMXkWwpeKet5PV5uNjYKmFTQNSuydxED1wDQ5aWcFAutHJhzSGSXyTo7moVQut16FtNgYzC3",
  "key13": "4VnNqFpAZZwMXUWaf28FVESUweKTmGwK6GH2pcuqEwHKMUM9sDWbX4XzvuTiNHW2kxd8dhG2SDoPMCVbzkA2k6Ev",
  "key14": "4mypv7QiNxMZqyHmvDiBs35npLACRcG9CqmWjtmx8ZtovayHacHNkE42mmZP5KCHbroACz5kbW3Ht8s1ZZusKn3n",
  "key15": "51mLUA4HWUKCm5bHyDQXBhyBJ7kFtjQPSmQan5GqzZ5GfpBRPVA1YRjSEZjQ5gurPsJp2QuZqpHbM9g1UH4kj5K8",
  "key16": "3GbvmQXA717sf6Fnv9d2tY13mvkZvXLg5hgXFjcFqKDsxxEMU6JDSKPnmmwbAJNH6Mzk58i2ZmJSZU2bV8jCBeGo",
  "key17": "34vSgBwP9JSxcYLZNDCX5jANYbCCrsFGxYddwspWxR3YrfwgVbrraLJYxZzVghVmJ1tcqKgkesFLvmAbLsCPrtFt",
  "key18": "3zGGPTMBu8Xu1BPja8LAGU8uCTjtMjWsqv8hXTEyp4E6K1JuyPZws4LFED6aLiUHUvxsN8NFzG3US8GovSjKWp3m",
  "key19": "3sGCDQSssZsmqtCE8nS6o9Np1hgBo9THvrFiyFj4rBGnRDrkSB68kgNhX85umNpAQP6oj7ZLakbbASzbF1UB368W",
  "key20": "4CGux5XqCPEHqwTGfo3XfFQXeGudRJkPnJwGi8vSettq5y9HNYCPRcaKKqDdtUtLKM8HbfxR9o5H95s2tHj6NYg",
  "key21": "geMf1HS3mRCnYtJ6PKv8MNgGVoWScAd42hEvEwEzNhTW9gLQFUuMwFVRecngF32iU37pDHbTohsXzoqGReXQ7kv",
  "key22": "3Uij7LnCoCeoPJa4oFeVTRXK7epb5Ve9dSvbzsDpLQeoCeyo1MT6KjbR5Qhv6ggJ7BXUf4RUhhmDP5VNS814Bfer",
  "key23": "5VQTqUsuUhAiZqvKLxnuCUYAEjauhFdxeYnGR7X5NxpScERkns6HfQiwghc4ZubdqEpziXatCuKtZwvrxrMemekp",
  "key24": "2fuzrBCSgCc5GqjiWkuEG1gTSzq8HsuLF1ehzoCQQjN1RYnKLaed1BFj1n3bPxgiSJCKhMbuw4c6rR3CAhhgKb3h",
  "key25": "4zQxTnykk74ZnY3WM3aFdzzZpYMiZkysac3nAUoZ4tpETo3NPoippv6RVH78tKeH8e9nkzUc7Gyg5fCQtXNE7XVt",
  "key26": "3UDaRbu8sZRCxM1JgjC3ZVF49sY98NwHvskX4m14NW6G5cnZdMextsmkN6dL6yPk3EN8sqLLGuA4GqQz9H5CcQaU",
  "key27": "2aZnjqJKVNC4PiJwcp63c2oThL5y9Cwvxef4uW2W6hin35AKe9FriWJbQE7NT5bj7nc1MreraR8Mn8HuY67Y54po",
  "key28": "v53Avjm4aPtQg29dP8XqPMwL7HXbNeZx3xZwvdTNotMyoiK7F3iGudSzSmM48FjNrNw2t5DoWQ8HNQCHR9oZUnC",
  "key29": "W1sMBe83FsYHxHQFJpZmMoUYVtid58LZNEMx5quGMHfKP7LvHKFgj1oTqzXLxHNVG9rLp6eVHFYJ3XogySG5f8B",
  "key30": "5oovsHdAkpQBkjebS9FQbUvcec1QuMg4Qx6K4yUSCoWqpwbnV7UHmMiHUNL3rVYziaCQiaeaKG4LZsMj3tNaJW1P",
  "key31": "5yMhPdCCxhPuPMFc6PSZdQr7LEd21svxtXsJDgSyQ2YdFpbPPVsMsCHZ9XWHFHUQPgqHDjfLJ3wqgnQQs2h2NHTu",
  "key32": "2pieHgJsvSMCZFpBHqbL8fwkGi9sAYkNmUxd6WVwv5PZtBwnS32tNbWkG49AVxEdn2MFyNzPZ28aECh8LQZbKj7m",
  "key33": "ZQ5JytCKebeGmqvHjc178kZ5GFpJX2eDa38pCMkxJvzDfcfKwySX1YGrEnwGBDqKmq8o9oDLrzuQ7xS6tAFDUdM",
  "key34": "38Hum45Z6ck79KtA32F24cC1ammRWVcXv1XYNDC8K26Wpv8Yt8zFxwzdSPn2bDpPZBQk1DGPYjnGWKYN9aAHPZbu",
  "key35": "5pNNASPDU78sT3E5CFu9xbjUzpUcVL4KsASedqFwgQ6My3TbAp7VCFJgpkXfvdp5jw5K7bkTiYdezpE17HNnzWhQ",
  "key36": "3XYWgz2mDbLpiCx6RG6ChJ4Jv5Zc1tfJrLhjmTm6bmFCJhuEfTNSkSi7bm5YxAePvusxzszMiHShXT9bc6pXVssm",
  "key37": "3CEM1yN5hbD1Nid2UQEs13awqA2bEFS4pbFVqy6CEPoYUWt3Nva4zPtHS42xUqQ7nC7LsmXiD5RfNLg6MWZwoQ2v",
  "key38": "4981HQR4Q5UBTXeqVcHHZLfbdPCykCGdHkcjgS8wqtGwPHaSkATNKbvTW8ViRdYL3zFfH1Xw4zjad382knxQ2wHg",
  "key39": "4MrTfun6EGDG6BqLqcC1gmbFSuMDagtze5333Ex4hRBes6U79QbF7LgdHNmrU9mFzfHSc8BX1z3nJhB14ATEzZvg",
  "key40": "4Spig5eZbo2ih7u5sQAEdumzhfrhmvbWgwZx7rwd7q9rcTYR8LoURx82aCQ3M4gUc3Qq5p2wZiPUyTEKsNXPyF99",
  "key41": "4qDmNwSS12ojxeEKwh7MgsmKTUsVJPTbXfPwdtWuz86qUtvHfurhz3aq4v2XnFeHtwt4uVp5CNmV7cmEzR3KzKm9",
  "key42": "3NeeFgEpcntsGgiXfMj8infySEUgzgzsX1oVV2gFL6vbvd67vCoaXNTiafEun1TkGktpiwKV2V9BrJ3yYrtYsZvT",
  "key43": "3gkG4vjnyDb6i1aj1FVdbNjAAgiEiSRdCLyUixPaqxRs2u1TTwZ15s88g6GhQSACZaM7AVCSnZYdWfadtQ4anLux"
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
