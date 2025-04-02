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
    "4JdG56eDjhqs7tjbyuxfzsnBSQdy1kDXfWmxhyyn8aa6BB8y1Y6Tbg5Wybzts2dPBp3aBwtCAp7sNZSFaR2ftQZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqzW24E4RzN5ph9AAftXoBjUy3SCAtBVtxBYbpNKQ4APyTV8ShnxcSse8PFQhSdr87G2UfxXjRiYGSsbqhRwHmo",
  "key1": "52whx56THFgBR9duPgusVBcf4cy3oe5TJpxZgHdPpSuADwrqsPTBR7N1W5pEcSZNYRy6Yb4UTqzXQjUjkpUUjy4Z",
  "key2": "3eWzgRGixtCpkxbXUwmMkvccB7YTWdha4AerXTpYEPZ4TviE8WDi2fFBHgXCqyMtr5Wu1xdP2QvJM5JpqHGt8zyy",
  "key3": "4YPSxMWE83bCiMr6Vr333ZkAxxGAyJFzLYfyePgSBem4rSBB1FxMXCNd5LgvMPccEQ8cuvcV5aX22YgqpeWWzysB",
  "key4": "2NNFoQGYctTZyUkiRfB79kxqWBc6wwAVo6A2iEUSU7Ta7oV9MwrACh6iwzKs3yqumVSRChCjfzvZqaKkjtNgWfx7",
  "key5": "4HrRqMtewb9sqZUCc1VdyXsyHtoLcZbqvvC9P6LtKVezmBNguiJLC3VHWNLQgNezDYGBoEW3DVcrX65mkMdenhUD",
  "key6": "w4ttdzajvgMjh4YXnrgSw6fLMLspupNMAbaALxhx1c8rVZ5BWNjMD333DGykEubMWBQCwdfFKYFt7feM5fHvVAj",
  "key7": "5z3xKN9QGgkip5eEuHzRRs9Sb3seX7ujpvgKnvPpTfLgyVuR4cHprSRBJuqsD53w5cQ2V5E5fM4E9JpEDYj1EjoX",
  "key8": "58rN9iPrkhGNtsH3gwdgVo83tqZHvEwwU9ue8mK8AVYnRnUMyGu7o4ESLKkcmFg2PoyS1QC5e11szBbQazW5YNNv",
  "key9": "97gPymsmEq8n7AdCssPz3TaNT7bsrB1Lm8ZpqVbpD6fDVV9HddkPh7duae6fkMyGeiMLppMBeDQ766f7n3mcbkb",
  "key10": "2Uqh6FbtSwFEteXDCEaEghZ7E6UkQKuDdsq8nc5ogaLeGQ8ZDsJR4YzYqEqfxiagBGjZEqoaT3Y9pn4HQMhKLHCu",
  "key11": "48HJw772yZENgE3xJpUvvJivkvg89NWJUcooPiP9CnVkrr2ZdBeNkwW5dSWmMjAo9dhXGdxvBhc95qRUpfdZ2hxg",
  "key12": "5ukUNj8vJtt8n9coo3scE8WdmHP7nZGGhAQr3WpW8wEooiMf4eXT9iDH6n1ngxgXVBqrfYU2k5gCQKVZW63vog2j",
  "key13": "4oKLeWWojPRcxZxSwaVWG6B12guXsUZC9WwYBcQy72h8adRT6CzN7BomYHGPcp6g5EvFu9A9oQWjBFKwcQvY6uqJ",
  "key14": "2EJf8sdz6ud6zk5j5dpEjZ6Xx3DSVCF2TeisY7vRW86fMRU2oH3ZkD6EQa1jvrNzReDcJp32gg9nDMcKuByB5ENF",
  "key15": "24kLhRWquHrVrMAse3HjJebDfhCgTyLhAwJVPAVVRbXA2SVGKoTeDaLhBwMittfDV5xCos2xw8atQVeLDZhRTkDY",
  "key16": "EWmuKDiV83oM1UmABMj4uLCB7TbFhc9QapXkiG3X6LYKtxHC6xr7UMQrCRPvS6pkknDiBM9AxyP1Do66s4UqKP7",
  "key17": "2GfokTPniBHqy5CuPLR15xavtQkAM6rGzbiZjqnQUL2Az3GSQ6hDPsyYFS9yGCtuUNwzjzTh8U3KXEMqyQPn4LsW",
  "key18": "2oNHampoqVvUzBjE5W6xLVQ97pUmSEZ3yurgoJJZKKpGcPqkqSLifn4fNP8wbUVCiSmJDLGioZZF6weeDf8xJXDv",
  "key19": "5tfCwr2s1TDji4qzUHMM8bEvcLt6evyNWSWbpBHXxMA1vWq91kDFvJZfyagqLutFoyAWvseQtC1p1yDEpGtQpv2z",
  "key20": "62Qc9np9Fp6LesWGXmeTXvUrWUxc2HEnfPooXEBzA1t2AJ822z7g3sn7cM5dkSzE31zyZchDs9HfoYRZNeEJQwFn",
  "key21": "42pCLCVYVefX6Zc4BLg3bTm1JHyDRjCDnehh32iuYHw3JG68xyeFtfiacmETLNSvoUJaJX1n2eR41pKrekes9Zra",
  "key22": "3DPbGA3Rnomqhe1C7Bux9BZ9uyQYV8CaKAEWuWbbsba3PNHGiy2fJFgMMphWVFQDaP3fFmo2Kn4gHBc3ZFvSgpfA",
  "key23": "5gpN3fscrfJZmbPx9sgkmFj7NYyR8V3VeTw8av6MCt8kFFnGEhhncYJCKWkCuBJaZwWDESFVT14qf9KEQGj9LrXe",
  "key24": "p5AJpaEACRzh6o9sMFMnt5bY8ccAJz7CH7p4FjBySzzABSp3eBfEsjQXxAdx1XQgY25qLjcCQobpgDj76V1Jb8D",
  "key25": "45S6xFfMGxZBgYkrrtTeQ3CME8JMHcPvgKPRmoyZ7iwL7JDoyNK28mvQnMGibNMSNeNVUwtvmF5zFR6xHSbbXqmP",
  "key26": "3TmDjrxzmKDPa7x9GC47ho4aBG1yaQLACbXkDuJMem5YYJfPjGZRN1tRitAckv1boLSNEN1KtesMURfY2KDtsGSM",
  "key27": "5tAHGCJWUrXrXhDUh8kvQxzLVUNKmDmiTFoo16oDRSXpx2VeKhadijk5UCm3UwoE9w6SJ8CvYdfHLnnWm13xt7w6",
  "key28": "5fbyB6YxHQj9d5UTMjZ3R7ViwwHDhbAJg2p2GX5PqaoDdotszp4X2FrsWtdZUtjHnE51YRGyL9aNKZkWmKCE7NvF",
  "key29": "3x1F8rDTGkHEhV2y6q86JMeK7UTexDrfK52tQEn7RiPdULRE1Xiu6dF9NojBATGrGVCkLTAYxqdJCLZy8qn2FDNV"
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
