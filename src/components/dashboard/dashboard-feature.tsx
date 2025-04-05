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
    "2udhVz2GjUbyoCTuckoxdgoFXisVwQ7itTJgv2KQzAMeCJ4zkZty2crNgNnxCBEqBkEFSrBYaKPe1wWZVphS8JB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431SzjMiVcjaUTuRpsXUyavfesUwHDYuwVFUVeLQPJkhH2WKWCUv77TJehy2BYLBWAGkBR1DZTxF4fXDP9dFtxNd",
  "key1": "4pwf9gd4qhP1zA928WZeYLk6pRjrzVMjZUvhktK3Y8nvHscQJgHxzCUuuh8PW18YwtRPvmjWtDxdQPpfdLFGU3rF",
  "key2": "25Fu2JN1FmGQGqybix8mGL5H8gwocvuMBCH3nkborpmdd7Wt9HnCPqN6Xp4JXFeoMVWtkWtKS6R5Yvxu3JNPQ2J8",
  "key3": "3ANhyyLc8rhjJhQHcqj2D3RMjeyZyw62dW9uDoDjRyU6wWzjNWNjtYCp28CJsaZe7AhUgbgPBcWUG2K1XWU4AxPm",
  "key4": "572daVFSybPhz9Hd1D68y1SV2odcej6FwmkphPg9iLnNHFgaABWCKFZG6iEoD4F4CLKRVEwBnQ4yBwQZziuPgCFx",
  "key5": "4nHrEkVCHiMEospbaJWjUdLqaeRZkC2kbbiKA5WT9PFUQC8EuV5gi5AFgBWcbN9ksmqiYsed3MhReuvu4RXjhr56",
  "key6": "3PTokPtGx3FYJcLQ7A68CrXPE28g1DCMrr7PsMB5gzjpmdXKPh93C58TDvu4ergFvhXuFvWycKFwqGdHkbYXXavn",
  "key7": "3W3XEsK7CMkWtAHPMLVsEEuAScHZqaUg2pAvC8SXZFjcS2SHuwfdf9NqJzzJfxjbB3U55eF5TwkpnharkqMzb7JA",
  "key8": "2rwctbhpJbtfWVcKqCGgpm1c7g1xLn5vXThy1obqemsc6L5e3jGM76UcdLbySVTyJbxR65VQtFMtfmncensv8W5B",
  "key9": "57rwVw4FukWTJTEGG5YVCAopqiAD5pHKRRNyaTWUmhucYewtrqKzHQpdQniEQgDrvZPKvk5pqZPNJA812tr7NYhZ",
  "key10": "4CzArAcwA8hTLAzN5K5jMzrKYnNGZkEdtohvxwHwifeTRLHjnb3xDaiJmt9XByrojxFQAGXxtP7sD54FoqiTPEN9",
  "key11": "55ymAiFnD4kjZfZx4TDfV1FUZK42WXDvCmhCB3YZiKfv7DAzqP3VQG669Y53DCCGAUk4X5aVhtxstQMGS1hWMbzs",
  "key12": "4AQwMab6zadrwpxrbhytA6bEfVBGAsnaJ4V4TAtzBxTcNphbmNEWVSGGuY35E11Gp5EFshpLkVST1Lj27VV947YV",
  "key13": "3piHWYefTj1V4QY4eFSrZr98Fm3JngTX6qJq3DmFAjfa3w5iAyKn9WAAz5hDqf4Sb9or3Wc2PrJ3Nd9UfN2XyyCE",
  "key14": "3dj5EeDGLKAXdTLJwtfBBsPWGNhKi9672S2uqF63kPhgygLrzcr11VDTa18c2pfZGBrKMnDPjnZxxige6krJJm9H",
  "key15": "zvhdBdooCdwJntjVgbhqUtEHb3r1ZqyKS8E8Rj1vBvFCkT6edX9FL6Lq7ZJaA3MnrWCbpr3Zwq7ZaPFVjT43WLm",
  "key16": "3JLf4Pqf4hirhFrF29XhtBr3ej4dCNHqpRFxYZJ7GtqFR47ebb2cbE9fGmKSQDSVVKtpZpzL4dLMVrWyYrjzA3fM",
  "key17": "5XsBi3HFLeRjW4W1PoXg6aH6szYm5LZAxjTsd5uP916MeThiA8AnpckgyJQzRAkHS7XRqnqvBWqJWxFUEUMNxc6K",
  "key18": "5YpJeGSUA1Kf5LUDS74mMqiCWY9vgyaSN4zQDmCGiEPBcaVU8xf9fnSfNk5fPzBfNmNaB4kHYiyLimZcJG8BDrtN",
  "key19": "YDZdJdA7Yg2iApKBoyNzrbm9zvLXTfWaNhHwSYyQ9TdKVYsKxEiaQNG7qH2nSDCrmBQYfp831quQkdYsTY2g5yR",
  "key20": "pSq444vFyiW6oTs8WAhGiifaeSLQ7CqShGJM4E1GS8Q53N1eJbmUNkkUQEnSjkyHXhfeP2F1cjVSPhGZn3sUVPH",
  "key21": "2KKazeGZbR3eHRG9aQadvhCMiSQvmgQR4qigbQWtGGvsWFLA1VgKLuv5MagBruLnYjiAoJdw1U42CbLptLkpEbPS",
  "key22": "gCDz5e3cTpr4eKBCszxViwXjVA1CubCGiSov3XrCRBEsXFc2Y5idXUemA93jAeYaZWxj7VC2yS78byBimTAmtm4",
  "key23": "5qU4Vdww49rq46Z7WLwUCSSfwzRDEVFFZ4MeHkEatnyyNHd55gyiKPY6x2U3BY53G62dUE2Aj5cHuS226NCGTMMv",
  "key24": "2GYmzZ1VNLLTBo9CbhoSu8SSsBvh9bTuAKbqYVwkzwcaDYBcZCmJKcZQJJFa5TTe54x7juDUfYzB7bXsfPrjxJ1u",
  "key25": "5uBCx5guieF87aoSpSBq8CFwiFQ3HcuPXMc1pnHywKTNDyHBkjStUcPHCGHg66JqLVcPmZvbYaq4VYp9yeVJhiQ8",
  "key26": "61nmQsrWiB29hNqqTVMKBLsPzNk4L73zVPKtr6xsCSKyXzPwMwYnGZK8p9NFRyUTzpPVYv1Yi6eVy8gmCzGpjYw8",
  "key27": "3GkdBZjVRDpKzcKrSAMnC42Gm1FTmVfcc5VNMnF6aJeYN3ybeRzjf2aeQrh7Z26k2LjrAsXQeEq6ejBascJw5s9K",
  "key28": "63vGzfc7MVtFF6nUBMuFDnrTqW69CDMdifGEKjMfLKQ3usxKBV2pXM3cAhg3rkdDuzHpzKM2QEMARN5cct337rmB",
  "key29": "5c6hwjM6bvg3Y5U45go5A1BJ4HzBSgi3cKunCj4epKjTt3frkTCZ1k3TaLLNKgviiwUJGfuSWzJdaaJ2DgBHwE7R",
  "key30": "3XaYDvUmL2mYmxbZ3DBcY6RyyqgwgknXijd97LkJKJZyKqapSpo3mgs6jpaHmA1ZnwjNFr7hi1zeJV8PYCNtsLh4",
  "key31": "2bjUv7sGAxxAHvTs15nd6sw9wJziZCcgdZNHzTtu8wJzU1B5C5XMcBEnDGvBMvpTePZSZ2AHwDqp5kxqBZN33phr",
  "key32": "3qQrva3hyNoxVpgMNe2b2R1rtYQosa4Hxiiza7K1KHbnfMfP84wXdri5me3FZksK8RmWcNac2CmSEgFfDLZADZqK",
  "key33": "5PLHks2YsdsoP5PxB6BsNPKu87bLuBxPKf2zhJNC7xjTnPX6nFuy9q7emfzgnrWvRgM6XrrDDtSY2Z4KmZL5B3bF",
  "key34": "Ciha4g1kf189APbR9qnuu6jkbdmEaaC6S18w4bN5C45fAsPaUeKV9GqUQFAQrNSpjUj6xY2gnehC3ShBLYb7Dos",
  "key35": "BJPtrpuGXZbHPxsiGzuVpXgCTmcPJMkEwQFMunGxbM78Rut9MbKDWRfNKohrzfaQerzVWR4oj9uDSfE3Zsinm2N",
  "key36": "3gVMX87QdBdWp4LZK1V29fAtpqNom6jnTN2qjdYGttwLMpsckBoKb5qkSUXoo4cArr7Wqu8ymXpHME7MU4KqxC6G",
  "key37": "49z9qEsyqo5w5vCWUegAGjiMFtH3MrUfkEZGRbC98GoQa7bnCTu1Yhh5KBSXkGqRz6MLwa5MZ7xhFqaCi3KjcUhN",
  "key38": "3bnCB15gpN1SFm3qY8CwWNranHcfgvitkwbqMmbvUu3bVscJqReFNcmasqS5mVnbsa44ouDDtLCtd5Tfunvw63L2",
  "key39": "4u9bFhCUM5GGL2LmxJZFi6yWLUJioZFTwyWNzMaxmL5badQWuJWxEqE5D51szD3dQ19UWpNKZmnw6QzNYgkoJFrS",
  "key40": "2x7b6N6QHrbm3gzscDaVAGQPfGT16dWv351a7f6QzGGbwzjJm4QpKu1FVNPqgV7y68utPBVHnmsAmuq4QpL6N4v4",
  "key41": "3jCMFAXC9M5oojR4WFnaRUsWugahESrFknhSu6Hbmtg1wfdz1DRr7hM2ccjFhzbKVHYK5SPPD3zLifoVCsm8i6Hx",
  "key42": "5VEmShYxyuG9fBgMCwXSiqrXPzQpaTGqbVHHyfEmVvrEMqTnjjtSFMXjggPCMYrJuWqkRZWSKFe4UufAbpYqUyFq",
  "key43": "3nyVU8WUodipA9LDPKv4imZPdXjCt6fyoa4UnmmDEwnMqubh2mmtN8z9qAcBQEtXsjkBSx2e3C2bfcrW7ixRBdqF",
  "key44": "38PEAevNth6Kpzu1NdPtfzVHXomqiAViUKsm8vPapWk4txHmH4as5GR4djrHFEBF44JXgJctGv1WUZQzzqByFMBA",
  "key45": "4gz9UWGLm2wMdpktugeiMEaawoCRnWDmZes7iukzDR6ABP78kZxNZkrWpDsW4tu76BFXpSmb3xF34T4X6AJEkmJn",
  "key46": "5n8nmxMfsMacq6BPaYVGJBmB54FL3Pdu3BfZa64MMLJo3TykUEP5xrqVqtog46rZvCr9ndYaCBXqimYZar9KFSmq"
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
