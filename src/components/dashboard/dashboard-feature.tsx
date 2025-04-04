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
    "32HTw3Kuw7E3AaJ2pAeAvbC2S1fJ8PeXBFk8g2SEymEiqHVjBoDJVMJhVKh1Z3qyFm184pyyYY5qshtcprveHAaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YtTLax2PUpbseLPE71FUbDHgCKpMsyH7di83QswDscJUA6gGYmDmFyTbBc574S31UF9NArmNk24p5JoxPEx3Hf",
  "key1": "5TTMoTu3h4DGKFTKpydqM2SfL17Hi9CMkwUbJGy9aBjfPfzx7crHCES6K2uThN4pCVfG2tM6KfyzFjamKJ4dQ8DS",
  "key2": "5KWLsDGwYzNKxcrca3PWHbzqeee3fy8xsRt74S3kuuJ6QH1qBVwjKyLWm8KE7ncoeCMPMt5grStFNaMXNHLarCPE",
  "key3": "8RmcoaYB3GiAQh6YKyoPyh3Xg3sHf5qsYMtBWdqZc337WmPSRCSD5kXqGC4VuvAWj8CMgB7CL8hH51c2KyjvjeF",
  "key4": "52Y3UsJTZgdDKkcvT1v7EjC3N63YGpkfxYzzxMTWzM36AKLBBx1FWmEXJdE4NphVHgF3yUG2ErAnEMNCms3vyFoZ",
  "key5": "4ndh9JzsvgPGzArvTy29Xk78R64ZLPJEgzuJZqn93E5RKXaJLJ4AryUPxD559gLxGp6rXAHJSGwxyherRvotTGMt",
  "key6": "2K3VYUtdd4HQQbx339SUcK2aqdwkbFexUrNgsQFGRid2NsrxMLNV2azixNtjr4xrtt4VNbGk71XXUb49ngB7f5Kr",
  "key7": "4hxKHufsVZdd9bgfxbDSoMbbe3WC2ujT57BPEqA2G1Y5FESFvhxcc7u1CKihvMBHKLNYRzXyguvVDkmPfdQbzwtF",
  "key8": "4Es7fiA5pa2VPmHrb7KyrZGVHH9WRdURfd43mLUJVEnu2CSGqYaPwbqcxiLf653TYnmCvrDmfQeETAvdiYDFyCzE",
  "key9": "4gnQk18NBuqrzpcAEbcRJ7P2oCNpRMmqbwawdpXtoyXZzwgopoUpkDaYv7RJ1cSPAVNNYGBySxEuhAvwjR6Dq4Go",
  "key10": "4kYexSbCh4da8in4n9yEFg6kAXpyYpWworB9iqUZnfwqmBpnXBmxs1azWng1X4Z52b4GjrzNTeRGXYnRd43RhuHK",
  "key11": "5Tj12indKd8AcsXMJCjkp1QkGkMzhjfnyNbfdU1cPuw19qL5BTRAG6TR3R3tVvA3PbseDA3Mnanz6LBjAozUTAh7",
  "key12": "3uKFB7aJFjmqmNP6RM7DXtcUVqVxwFGmXCYGPZ2eEYk4oWFzcyegTD2dcmYuPCPgsSiTJmwiomKLkbXfDtxojmSW",
  "key13": "53a7tna1K4dtudajzykmBQS34EmRUusrb9WWW43ALj8ksz776roSnGNMAjp3D6neuo2DnBGQGvyrGxtMQqonYM3o",
  "key14": "3ofFW8W6cRDzp926jA3PiSCJU31gxHq3DqMaxZkwkjbzedn3LQfWs9TnZgWe3twYZN3fagnHzJQtsUkHSgzPryVr",
  "key15": "3uucWc8bt2SMTLp3vbzcyVYcsC3bXNGjNpwpA9ZWxGxaiMCTXXdNUHgRxMvnqSvJFe8RAuj31aAoZ4accmwrTdSC",
  "key16": "37AMpFoYCU4awWmdmCUB39N3ocQ3VRCzJqQiXrHQMHewbZ9ipo22j35vMqvMA4PZCfBv2jV1dawmSVMVy7yzfFX8",
  "key17": "tPrsPL6r6HdpgWeeTQvkttC5ZrsTYoeNSXC1Z84dLmPf6U9y1oXcgFutvfYAztqepfiZYn5UqxGstsXo4qjNa5J",
  "key18": "5n9AZzaxyzXEtYRgeUEsPiCGP9FoZogLXWkRQa5TDpb5xujEhFWPpWB6VRR7D2DFTEkgLwLTHDkjHqKkoUofybtw",
  "key19": "5XSeBoE5bLZssKeNdZqPNrBRhvaQRuM4XkXVkAkDypzoUvmh3bjJUumqcBpr3AuXESHKa1TyM1wv1k7SiqT5AmZp",
  "key20": "4wyiE71TL2GBvZqJbCuYcnSAg2ekvD2QcYztgZyVHhJHiSVrrKTUqUb7PdYF7M4U68V1HDdT4RiQ1PAt5qK9nzYS",
  "key21": "5sthSkHy4pKnnvc5Na8sLpF6ac15JJ6Gqqic91aAPENRvoVbFEYEQH3i8pTzPqZdCigTQUMMCevr6tfnKWzLNzga",
  "key22": "54DtDz73VxH7J8DLNXKSiDyetYPFrdbdizYrNhN5CRH4rgpb3r5tHeomvVepR1p9aaZ7oQ9xejYdoJ7D3HBufXWJ",
  "key23": "3VcZ8V2zF5f36yyb3xtLi9G4uahNHA5jCYiEueK12cTu13AZ7fygyKK3TnhnjuohqJa4374ndyk8dhYXxu97Gaiy",
  "key24": "DvpVpwetQVsLbv7R5jPStyEByrACvRu46ZVMw45k53ADsAXtECHjtHyob4WjnukL55UhPXG2YfiNdJTyxtYxxby",
  "key25": "3XeXzpPpEmAwEtWhANBfHXtcbDCCvkWnGuLnK9HArB9FWLN4YFkP1nM1anrrMszrDhBsxMHWkTLfSB9gfV4frddF",
  "key26": "y2r7aEYRL8n2DMNRiUS1k3zvj9ie2snvdDhgDm744W7ngGJTMy4pQ7JgopW3JZJbypv9CUYGwg3oYxJ2DShSAVf",
  "key27": "3cJUigrmR17Hs7tMza44t3PFz5uGgGraRtFQKEkDMm53NJzVWfi4J47q5sDL1hVbREpW3EARfvJCANm2EGErDBXH",
  "key28": "4Z8miacfsuXP7oGsAf6PmAzhiG39N4tpaLp6svMJMwcxahucqmB2WVKeVGRruBXq51ECVxZRCeNFPqzF6AEJ6zFZ",
  "key29": "2s8CzBaBU4XTFSUVhvw29t8aoLGTt2tZznxQ76NMMyf56r7eqBj5B2wCTJ3yEh127KmkRmv4JxeQ6KsmfjK9omQn",
  "key30": "3LjChG8wwdyH6tphAhd33MkiaMiAmbJ44djfWNna2UgCVHopi167PREk8MWu2pBnboJ7a39HoUh2dy2WFxQhBMHn",
  "key31": "3rquZcfZLJnmVvw1SZHBpjL7YNowHiPPEgEKWEVymAhgixHr1gMiMf6Z5VdsEK5dpo6jBZE2dsjqaQds6ZKF7V9x",
  "key32": "3tSXuX7ZCKCEqav2HwopVehaYrPJRTTU2437S6MxG2Dn5qTWkN7r1k8ZsWGbyNyfNpXTArHqWwhPX6TcTx6mV8EH",
  "key33": "5gcbGt9jZgJG5s6CW3aKJ49P8qopbaNtGBDioR8cZqgMb1YGMxiSthzhFE7wUN5xhRuTYnw81HjoFQgxfsi2x3t6",
  "key34": "4u3guTNKiixbRbsUoEBV9eGRmJayxMbugSRrhDrTGqYwtQZ36zE6HUu325PReFtmuYFEmhSTo6aimE48VFrYFsgF",
  "key35": "yVucihnaFdGXigj6pnsojXutGCTZ1fJMJrXSZ9qedb1fTb2JgPA1a2o9h9DxZnZGZMNfhp2T2DLDCtfDdavc9PX"
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
