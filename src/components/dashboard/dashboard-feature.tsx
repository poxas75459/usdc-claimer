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
    "5qBEAm3MWQojHPgNzvZbwzLDb4ncFJQE2zLwTRwUmV4cFEesfB1ELCWusWWk71xnFZ4d67CM7aDPx3CEukEsre43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTo54pUBENu165wp8apWrBbAs1s5Q7aja39XodN8wctWhcwhoMBAbHYeYGP29W8rCuKQppFMYigXydT9aY67cb6",
  "key1": "21zJkbSfc1zryL29kRERidawoLmag95m3wmT7f6NehUfdzDj25v5EZQUBh94kYd5y7Lsu6zaFCYhotqehYmaBppk",
  "key2": "5CyiZhHRDTPxYK572mMB2MEUxZ7zJXqPSbYzLu5knYMA4Nn8quK13TLewgFozkzP5wUj26bZEAD2RdXQYwFrTW6e",
  "key3": "3xcFiHhSPipaSMj3kjYhNWzGjXUo6Rx511WiYJPtSAqZwF89M2CDgQZpkfQNudFky9n6TviU5asii19oDL7CMVoR",
  "key4": "5MZwvAGxs1LXS1TiViwJFUgK5DJKSMaz6GwieeX97puSiQwjjdCpWbeKMRf1n4LxrSDMMKmY9wDeNmxdne4Cr7F3",
  "key5": "5JWbs6G6tQzszN9mXPFRWQpei3NfehcCsZHMrZQn6HYPqVMUrcgSDtbXeuGmDTic6Si1PEGnzW8oiPhMj3CZ6qJ8",
  "key6": "2XtgRTSnofvMygJrptSLs7U3BbsUCowA9RiBdMaWJFDX5ArNmN4gzU1CVJT1vB8esmqeDBNS1ZxnFyLUE8SrWgBP",
  "key7": "4DcWU4h6v19E5B1cifzGfpq9FNunkPfUz6UZU2AzrGDQm94XsCSHB61n2dfKzbWBstLvBbM93u8gb63PWD39yDXm",
  "key8": "2sCzkM1ETfLkXyjTc7ubr3AEaUKQNkD9NXLxQ9SkyV3wbSmZswzrf9Nmi1EZTn4xE6c3T52eXvwAeuMECRECuku7",
  "key9": "6755ypQAiHDYSZzpxQeuPmUJg3LdAcpKzx1WGWcR9SzDR5CwqjtRQeSS6ypKohJb8yPYLdDjs4GDXsji4A5frpTJ",
  "key10": "219mo57WaHv4QvPcsRuS2bFxKdTtHBB9UwWEFANECLrkCP4udxZJHNk33DAcS9bqJkC2a7yK2mRZn9Xj2wdeF4tt",
  "key11": "2GX47hUkj3eygM1z3Dpn3MaS1Fw2YE3Js7BtnaqE4c72azrLH1Gqoz88BHNYXXx1g2ConZUv8E1ssstasNhPmUj2",
  "key12": "3oXNMoXjDJKL3XuN7puywXJyj5t6cCW55EJh5rHnw2F84X8UbQgEYArZcXGfp5Uxc3XbYVJU4ffqiyb37CP5ySpQ",
  "key13": "2CFYN3nVqvzfs73R72jraDebnRYsBzen1uMie8caKZLqhrWtWzaz2u4jV9qu7g1q5jJjCUR3zspSLMoMEhC2NnjS",
  "key14": "54243qxkEJLPMveQmbYA2KCzDrjKxWTHMwFvV64wt2iaV2858nQE7gTFJwv2GxRarm7ihSUMqukdkyzbCiQHmYzj",
  "key15": "2rdKxuQjyQWjffn2zLCgbVsLipd3EbhoeBQ6gWWjSKLJnkQMUXHYDFhxLYWST9ur1HRzJrmXW1m4VgkVr9M3bi5m",
  "key16": "5pckPFySDy5R1wAov4dzZupryYBabJGRupfxSkNdMK7eCpZnwZvwgvRQHhRSLCteR18vKYu56eFSGTuDi139JUA9",
  "key17": "oK8F2Vg7dcDchAtzmj9EH7fetSNsp2okiiiqUmQSFguH3qTXcKXYU3vYty2dg68ku1c5jH46wzjoCADLtDbXSJr",
  "key18": "5ScVxX1GkP5J887F4kG6zV8wXkn7P7PoqfTvNTXGbPYZNVy7qCdfvmX5EHmzunW1GRujhqt5dSkckGsRN9gdqCsp",
  "key19": "56xbyB7kG4X9sy1wjMVxWW9mweA4ezr7CaaRHrdNhPEoE2oTLTJiyoyaG5YvAKLvtPi2pTpNaLudCYxMb1r6iVNB",
  "key20": "jkwBdQ6KCKrrVR6qqotMRhBgLqhuGaXm2aAWE38qoBdjz7HxVnuTuL1RxbiqgFyAsrSc8nC1oBpKsQ911ycc4xX",
  "key21": "46hrFvwV5mqJwgjPHahaLbuMz23u4d3jSexZhA5WJXqiXx5zSTAbwneYb589Bng1mfWC5mWW6kEsH5ddRC5KCyHM",
  "key22": "25FnaxbyG8qMPjuCBCpnNibsbL9kTeMmRDrRs537HeTHS4RTUeMWyRiRVKH7g4hduDjGrUVK2UtM9htVq3roVM6u",
  "key23": "3N4WUCfwnUxrJK44qWiJAzrmw6SVcBvjd17k5zwNqBoqE9km4wv8A6e3VNdpdk2t55Lo4djwhAhmUPXnMP9HFwk6",
  "key24": "2Wyb5yj185nGPZGjRB3iUg8dMDoj5trGd8USphxE6Fpf18uhegDzr11P1osnvxkRr1feV6SUDVKDmmN87vGddSQJ",
  "key25": "5sdsYJrBD752VaiCfUpkuLBGB7yLoVsTkmHyvRdhR6HJEhLUisRaUxUMmGmcMKUfa4qz2dCnZtkQynCsv1P2Vi29",
  "key26": "2QmGrbT3HHhKzuyEGezQHuZctgyjcKEvtRKZbQw6ispxPnGCCw1sUfHEgkojT1irZU9NABjcw5yoHuT2eTBUDGUy",
  "key27": "4FrhmsbzxQvrUKwZhbGLArnk39F64nz8PtB18Q3ks4TSpUMypZNtvozJMXP599grwtbuAYff7v54DpDXxQAV7WQk",
  "key28": "53MHsZ1htXvPEB4Pd5PmfXiDdNXFmVy8VAUerzrrXreeSZfyVCgkq4QYd4b2CUkzweNr4RLr4K7P46EmZk94FXwx",
  "key29": "4qhRxsQuWXfywSWW7cZ47HRPBMtmebeDq7Xq62Fn22CwnCicszW7wxZvgS3yhnj9Y7Sk9TJE7E6ZP1VckyZt41pS",
  "key30": "5g5pJe7FEYD6vBKAwi9F9DC2jQisrh7aqEpRCVHizz5LPjkigFY4tpoiNF4tfHcQAgVNnN5jGwjdaJ1xqfmYHJbs",
  "key31": "2HEfJ6AvUqW3stgiVAFQu7ij81i1rRdK9TqYzPrSf45f2zPS6hgTK8xJBZEowBWSnYGJWgdB4Yh2bErpLFX4iev4",
  "key32": "2L8ttbPPE3ombPCxGRHZ9kZis1DGd7buXFWhcSyHSyBM1cEUhmeYB9TVxKPxPQNohwozhiBF2C3RNgvd1ESjAwqN",
  "key33": "5ggzxaPkoLDP2GvC96yiNeFPMfKqRgX4FDBAkAQcHavPfwwarWWLNXFpog7ikkQNDozct5E7AhajZWHhHNZACR6n",
  "key34": "3EcfYSB7TkPbim9sbokMKb27hWMCLLQMrnvN89nEL342TP8ie31GAvjYEkVTDZP7dkDiFNXFrrhGAe8LHyZUrGkH",
  "key35": "3By3vdYRwvAR4a3r9cKoSKTJxLEqGWFL9u24oaQQV8LbeQqTe3Cdh6DkMjHRfZuNBaSTeCXmeYd8wkxqEJmrskhA",
  "key36": "2jqimqGwjNxd9zy1ARAwaNcCX4vqdd1U57rgXHSL9q8EHPb7JSmzH6YSdf1D1Wv4XYniDWZ3eBGKTsqDh7aBZn1A"
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
