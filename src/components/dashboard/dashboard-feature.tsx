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
    "TEBu56sxHkSbYcxXj5urEinHRoq1eyMsM2Mc6ujfhdxoQuN2gpPap5DhZV1SPjLQC8RLyZpn5zJoeJyHMiJ2AHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UjobSRgLhJfCAZt42UynxYrhZyJBC9CdGH8Sfvtr4bycs2oqqRkBYsvWKZPGiZwhRq7MVRPMF4h9HCMK7Yxcqdh",
  "key1": "4mvu7zNqKfiAHC6Jndo1J5KZNbVnuuBp1N49gbyYRAK3kLBfGdG9uQjUuD65BhAXa5HL87VHgwCpTY5YTA8NS386",
  "key2": "3cuWp4WG48UfBUUqj6nFnX9QgeoAphP7n3UiL7XYC3giBXmRSo2ejVJP3TMjZAsvQ4eJeoNzcx9YLVpX9cHqSk9i",
  "key3": "3SP1KSVQzajonqr9JeQrUcdg2UrQxwZoZS6ZviwkgBdrkfmRZtAiBJEB9SpZFxHGvK12181bkgCmwZAwMxSgA8Va",
  "key4": "7sRkE995afePdvczjcJa6noX1Lun8nNXGQVMVtWHbAKSB9ydH97n3TGtgvMw6yjmmCkQJiLgzeJCqQDDRk6PHr4",
  "key5": "4mjpKSU8xguJecBQ2Yc3U6Ydo91m8MY8Z48pWucWT9Qot7jJgzUgytzzbs6xtNUytULX3yBm2e66d4xa7S5hYSws",
  "key6": "3SK6QCSLi3RktXWLdWfJtb7zSgXRxNVR2fNmWwtV274g47wSHsRZowkbu1AF8sY61Z2Nra5jsTn7KB3anuprouXF",
  "key7": "4fFfYtxnEsgSE6AAxNEPRGrziutg2wsSBbhRNWMuKHEDUAz4S61q4r6LM8EeKQjPA58cviwYBCDciTt89YdzRJoT",
  "key8": "2oeLt4gjVJv996LFHLgqNXuwJY94rUiPqxFzyUergy5cf6gJUKjcixb1YBnRnuvGQk2j3LwisvVHkPXkGR6H444F",
  "key9": "xxP6JrfnhsSXCi8iaLDGvqwHaQaWwXdj5mSo9BbXzWCGxvsp8LcRdNS5t19CXjqeGNyNCPoJdwGsBonFYFa37CS",
  "key10": "e7h1Awi1o2jumLx56k8MJTN31rCGtywcnKMBZ4MVNuBCnteTRZgAtegZvMJAbdVTabXFHXSiZ36hESZMexbULXK",
  "key11": "2hZjqirtESQWyqXCEAJCeifaf7A9BNaQRtutP8LbiFPnHnFhbg4PR38VkKYGnbzE9vZYyF8xL8uR5JHSu9eQ7TS9",
  "key12": "597Sf7deSACMHMfMrgDhoV6dYuHYthmFay4oV8VQWPvrjpFqX8rYMCYHGPxRjjCCvoyBAYbvfyxzdKdYmG7n7gmg",
  "key13": "2vLF2hK1DiajJ7kYwgNEeGuUS2QgksjWZchC2awRFJGiPZPW8H1sFUraUSoceyXKkM4wKXzKuyAo4kHxT3oHeSme",
  "key14": "4eB1eZFQrfnbWiHhrDr4cvYT1v8PzGzbrKX6vsfUyXvYkPexXcbapzFyK3NvzTTEXqFo53Xn6NnK4iTwKE8Lss4W",
  "key15": "2QdGEb2Yvq47vLDMoXVMX5SQPh92ZjAwakjrjzVYtVkc9wdH9pULUbyiHhoYjzJJHpaWHqcvdDjCZqESXFumvexc",
  "key16": "3jWfTwRF9Taxyn9onE8R6WnbeJ9NU6XK2HE6fpanDi8ZMNDmM2bvDV6xC24PKhRg3AUEkFz2mzn6dj3UJQAyyLTy",
  "key17": "5B9XMABhPXVEWhogbzimrRcB6o6THV6PFJxSPR9tNpUs6epjsXTAMZJd1x8KHdfT4yMd5BuPpU1zKrAQ6pwXE9Zv",
  "key18": "5RWYmVKapjwKSqx7naDs2VUi5LCS94rLxUP7sowbq34gf1NsNKrTcmRo5UgizaFw2xEBRrVhLWPmzQS3zUgjyByy",
  "key19": "5r2PXjruU5n3qq1iFBEKeYrFmXrV2XPxrMVcA2iFRAKLAGVXS1CdfR3wg4qjmMu9qHznJGGqmCgUhKfLxgW54xei",
  "key20": "5zs33dVwLZqnnUgkGqgp3JxDpmNERiSTAfNwS6WB1h8ijTrzvnTwp2tAsPc2s5zsv74A5qSygrpAHrTj5o1JxeXw",
  "key21": "4A33nz8gkP2bLL6xi8PKeeAqAh2WqNKPqkZbdY8pYuJ3Mv8zyLpkxwMnqE8TKx3iQUHBwkBgFAZCE52DmYaFivBU",
  "key22": "49xXq9k5PpGgXac5wc3aD2xnSYzjxaifz5kCA7VzLn9bRaUgfhrtLMVCQsy27ua7ZnKwZpTTQJYLWDYs3kag1AZ",
  "key23": "54qLPhVf5JLxZ22Ay7nWeT2nKjeFQpjTDB3BwtE5KsxVCkUuNAEQKxbfkGSHpqxM89GFdxAz5eZx2HbR6dT26Vtm",
  "key24": "3QATUt4R37VJ7fGongUZB6jvQyWDuX5gebkZmpx8gt48UV1mFWsEHTjgKQfYFaspgWq1hKzb1r7xTwC3oTNBuS3V",
  "key25": "4S7GLcPUsvQEdCt2R9xF1jFMoR3jKaQDJYcY8vQv4w8wmL5z5xbGBi8BZk62rNnUW993mNXvzdpFp4ShJyGNK8pG",
  "key26": "2xVkQtJfEvzPXoFSiEoDYaZSXL3aNcrQGAmkeKiNFwyJLNbueiL1Vq7S1XJtc1g1aqjcFYRosGLynh6e2Zf4ZFAq",
  "key27": "2wAK5mTYpYcN8qGr9eSJJ4TGm3DMR2USAM3BuAKbkuBPhTLfHcpApFWaocsEUPpCz23uVsxJzifrJ6sHmFkq5314",
  "key28": "3dYQ7Y72ePMkFrpmHvKHvsW8VUhnH1rg7LE1VfKMobCsNwAmfbt91NM2MhpuMgGu1WjaFMKezz5ZzDMkTaRhqq2Q",
  "key29": "3pugN7gf8776RT436KFSUTDxjhr9KgDPN2jYEAmbvjKqXyWpqkPLSZv3H9oRjH3xFxeqrhp2sM8wTqCCw9UYHwVQ",
  "key30": "dXKWDkZ7JJPMEfYp8voUGku58UH4Zy99TY3e1FQJnhZhvWyKnxtnXjtAGDhGkG43EKM3Ab1GpdDMMqoPeoyz9ty",
  "key31": "3cqvJHsshXUXgNeAtci221Z2pLfooFkpbNuPcHD8Z5iyZuHdGWadXCxpsof6q6r7scQnay4KjgioaPbfgqDRaLj1",
  "key32": "ioovUE9Y7QVMiPD5cca9Jqgidfb5Dy8nC3NWAhj1jx55SwQtxwfZ3caso5XPwyhi5z51v1Tak2GTB6D2QXykRnd",
  "key33": "2rkqXb3iKyzp7xpnuWfe24yTAZNZxhk55kwyM87D3thzw5AtHwbyYVRm8a13sUsDn9A43JhkAJ7ttDzTZae7eVJV",
  "key34": "5j6MA23yUA9QVtXSYrDE9hvWq1X3F3LCgr2CGP8eqVhitUUW6pzKBAxm59W7yvcFcJtdCVVom3fLAZKCP5hPDHS5",
  "key35": "5rh29qEctTb5rdGp1prn2cKdDYA8rAxENahpvj5bGy4B5aZPhK3VAcKPkv4LAhkWa8nSQdt67mkXn3mGkpJpKE6W",
  "key36": "MNWHENVD3orYnLN6NcCWo7SBDonVg4zHvQDqNwBE27KaNyfgTnaL3e14CpwzEhqjKssPUNhF4dVRcCKfZXJK3Ct",
  "key37": "5c4CgVEUUYcVM5ExpCcP7P5KDuDv4xzNZyrAs3AVUvhBgC3Ne1h5KekYXw4s8FjWFXN28qTCfHm2JWn8FdMvAiWX",
  "key38": "3MBRzR2VM1rAu9wJmmWKGSqv3eXpnBFVptVKe9yg4V2PbQ1NouaA8JxN9zKJLpap2DFhW1BhcZpJNW6KrJbDz1XL",
  "key39": "2Z4LCYQc4FJBH3gqh1JkfFCgDcRT29dzucSnVrahr5jMVYFTiLdNG8AWBYkmC8pynvFg4z26BDECJKDr1Z1iBTtu",
  "key40": "BodcYdVxzUkBCo1R7diSTiGJNGLJJmjoswHJm5kesE2n5WDN9BX1CamnfGdUZzNNGPGshmVt92XoDzN9nW4rU7d",
  "key41": "GmYbK5bLRcrvwMmU6SPRZuv8BumZHjiSnh2hcTFr6S1MGCHwsRQQHUyCj3732nGgtxLdP6bx3xv5Tdxpz83NQ8J",
  "key42": "3aR1eqYjFjF9uZLktkumxCXQqa5k1jh1Y5BFSptmzNpHcoNPhRbvXwzLbwxjELa4an2i1Fg87hsJxAB4GRsp2ZNK",
  "key43": "3u5hAELBsEnVDMa1AuFLEeTLqHbNkeEc8u7hJnYJ3oPubw1avh4u23CJrn4SgkZBPmRngQf84rwBTawGYfhsWDh9",
  "key44": "5x9Z1wgj8owaSpTYTW291bbKaQzrDnRB5WooG8WW7XMwr4YmS8Ga6MFXEaABdCAvLQqKBsc5i2AiEwVakrFQkgEp",
  "key45": "5UFvZ3YSczDnF8yw54mkK6igWjTPHSbq1Tcsemg5uZbZ21TVqfELHhakL6ESQ9d9rQaNcLBGPPXBcSakbpVT388n",
  "key46": "4RDjBoPSY8C8Af6yRmfmQp4VBe8rPMixyHgxbXCnUbo4N62Zj7jEi4VUuyqNHqPmiH1D9amtEusnaiWJ7dZCRnvs"
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
