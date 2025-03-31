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
    "2hDM4xrDiJR6ARLr5f2eGi8MB8mLciek5jV8gq4ZjiG6Jx4pDemyh6UTfTyPjanmoq9fZSH7NHKgfUA7FG1R42nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sb2k2kjt4eRSNkiXDgY4vVm45Xm69oqS6TmoJnnGa4FAMCXEdbrBnnDRLzRMdfpqWuUd4KNdkj9dUAxHsSvW1DJ",
  "key1": "3cbPUeqiAC7Gf3W8gfd3dwMcLuNfHCPRf91DxdBm7Kr2JoaJLBp5JCvYBxvXj2TzMBtv68sSpRGeCp3KTu5VdQSs",
  "key2": "5mNpVuc4bVHAkP4ZaqQxBc19vS1CoRoambvDGCqJVKHEZZvpALwfwbjAGa5PZ2eDVMGQESrHU66CM1maqup5p1Pz",
  "key3": "2rYVhaD2b3RU9LouePCyjhkZs6F7awUAs92hP8CYmDfKGoZAaMeQJp27p6jF91jVQFrKF6Wf5Pi6gkHeLp46KW8G",
  "key4": "5MstB82Q6vCu5v8PEtPfdNXCAHYNZyakZ6PLsuNVmBtmnXbyxG825VtfRi4FU4WKcaFfXq1f1LB3jowxvHyqoxkV",
  "key5": "2b5c6fUH97B5HtC2z3UqjNvUCg3up2EjMRnmLdUYi1fCLnzcpZ5kBQGQvHm2cq58jY9NgrT9p1Y7vnyCAbXSVoDR",
  "key6": "4EnA9RTxu8XijPLHpx8ZQApKendeWgAqUa4nuqjXDQdwX8Rj7BvqfnYfSWn3f6owMf2Hu8Lkdnm5sUv79gztQVxf",
  "key7": "3PjnWtXurvsriG1pDWPrRJ598D2PREEu9viT1jfVdJy9xp1z84rdwiARe5yqCspga7S4StVqEjBo6vmgr9MU13d7",
  "key8": "SBeZQAdsCPY2JVrFNbDrk9oHRz9RkQaa4P4nBmf1vCoaoUn5RoY9Je8JXgWb1Nd1j4GXukBXyqgiZsvsWQFv6DK",
  "key9": "3siozfDwVM8TepwxV6Bwiworp3wbjcUc2wh9XvuJa3SFLAoEwxC1qXaV8hfbRQVsXMm1nPGAsziB9PP9dC45uYV7",
  "key10": "4z9nNcaR9xgKECUg2x5MkVA9At2G2U8DD1GgH5GaxS8cjB7bd9KUzU1QD3oao2aUse8tTwyhVjmKj26Afus46Xoj",
  "key11": "44LZ3PVQZBbv3N3W8TL6CU1pmQY4UdGxUwPxyxAhcQtWJgM7MQu3uTDpasRZsnUhx4ok4NjDX6ARZgmnZL8y5qLf",
  "key12": "3BqLFXkDXcbdQ2dvmL2Q99D5KHDu3YsjKGXyuRMG2PBzmkALoouvJ4nWREkc8XssS8NFxNejmwG6eupGGdxJHcDT",
  "key13": "5F1NDqutYxX3iJBfq6JBvSWvj9eYZiBJpeoEiTqZuH9MdMQijam174a6uKbK5CwdiLUCPU1q2WD3FwDPZgsAY3Vu",
  "key14": "ShQTya6dzDo5R4ZEN7pDUNy8Kc957brNnYyNepkBVP8ouRcRmD6pAfsxsQPRb5mE7CRyciqJ3Daax54155Y4dfa",
  "key15": "5ur9kNFoArQSSKGBWzcXcSpEoUosi7TnX97ndYVTzyvVTPAFCZMYTKphGjcojCsSCcfHn8UGBxZCZJ3UF28SMSNA",
  "key16": "277zbi2H8Q1xAXYJqjFDgJt2o5T62Wo7FAc5TLUikKvowQktW98AVY1dY5R2QJzPwXXBZhs3zuXjvRfxhvGhQSpx",
  "key17": "5L6x4pTNjHrAAk1b82CHN5krXG4JApCgcVKtVhfvQ9xhx3XpBXx64tqtY9xq61GkqQ3hXvTeXKXA7MmB6ey5wdWT",
  "key18": "4jDBK6CYXH5tWSm4pvLaYeyRL6WZwD7jcrx3rs35avcQdy6FKJ8kUGsht7gEN8vfT4KE33FJMRnQusLxrGDT9XN5",
  "key19": "5vH9V6inkdoV54WRm9ieJVm6CgMRAurNNSjjNUbbpJFw2K16Z2FXEnzdH9WGV6WE7Ac8cRfsNcFDf2Vg695emuwf",
  "key20": "66Gt4NpWmk2StcWCAZHQa9SBe5QwUfhgcLjHj4WEkdUqTRam7ke6KLVHif9m7XntBtaq7iEHjUU2qZJ56p2G3Qya",
  "key21": "4ZcNwXwyR5AXv18xv6YsMhDtuFzicvFKo5Qdzo5VT5M4Q1en3dKVYVgFbANpt2UDv3QzrcsF8T9N9N12KB85Huak",
  "key22": "MXFZBCZMNeWGQDpgVryosVmKKpAGroHQQnB3A3Nj5u5A8zqLshr7sBcLmZq5Mcc2zX7gerHGtHPBNwXbWR8Mzzt",
  "key23": "3th3tdP987DtA6HADwVFuVHxAs4dja2MRPW6gJZykX6trfXPbkG8mTbpdDJpmQbtW77ECxhcU7nV1B8uVcuC9QUm",
  "key24": "5UBL5Giuebmhdud69RVbg5iBw7gxvgWkjnwd8qzckvtW52XerBKChNYjbYu5pDunbgrYB8G7MibSGvwRcUsNmpBT",
  "key25": "5HR7DADknJdpJxMuLXL4mdhvTJuVQ7r6Vz3vCeffeZeJZynGMTGCZzsrYmUdeCvCDnKUTNpjkSbRwHPKT8YG1nRN",
  "key26": "5MwWm6QKGFeiPCDhrwFRgW8RojPyUQPbjpEnVAe2rBeY67ieHs8WNB1eFCj2yvJ4WEKtVEwbfE6Uo71MBSZBsc9e",
  "key27": "2D8sWA8rYK4KuEY9Qp4McqSpZh8vGugiJEtiHcL9EKS8cznxkAkoQ7frqL8T6edUhYGEtcYoWKhqe3GttXKkizxB",
  "key28": "37fkQgtAzPN5kme7PkgKoR3LxCa8QyVWTjtu1Nc1bZdpHKjefeFTA7tHRkfTpSgzNy2URftJfLoqfnafFXGxeUt",
  "key29": "3cg59yynTuv35yy4w2syB5BSiiWbe5gcd5cf6wwDvMsz2aQtPFZfAy6q2jVZoxG11Vrnscbbjc3a2BnCaMxEBNko",
  "key30": "2r57afHuigBj29MAqfjyXL8wYd2KFFsCRGs9cDdVS8ZYqWmwiq27xbUdtS1oHnE1FF13EkjXDRLyEjUFx8mjQ63v",
  "key31": "L85EHdCnAxdC3T3KKW1iunFzVwhR8WeFSoVrSPtAvbxRtAHVsfZpUp7TpkoPVfGCJUgmJCbG4RRCDCX7whNBHDx",
  "key32": "dP985NH2FuDtMPCP8sfc6PWang3wevNnj5EKpk7Mx8ucwwMCPp5kYbZGtCt8JpP8qVjdQ3i5E6kKajFVRoMYrQ8",
  "key33": "3F4wuy6ftyrxadEFrknZjBxX4Hg7dVsrNfJ3Ka9gp8PN9bfFN7Wk7MWuiubEpjcDZrdVsV3tNJVmxMnPKLJkhDGe",
  "key34": "25A4UWXQXU4yhkzjyHfLz9Z4uJ5pu3iihYYTiQZ43pfs4wsApJ1SydFAxkgGSfGaYZrLekKmxVHZXegTbQehJZDE",
  "key35": "2sCFCDuQ5RD4yKT13t7eBrb6LPPuz1deT2dXDa3yeTDBQqYMga8v52ZCmWtnshE5x1JiK6BmvpWgVa2WUXZS53GW",
  "key36": "4rqBAQZuaPynA7cAsxPaAQ5WS9TBSQ4e2Co6m2iaZT62KE6SjJRrYwHX6zBvquZCZY2XXkUpUPvR74pvB3uF9f3K",
  "key37": "VhYXJddYgxkLyk4xSSqhsxgmHC2yX93Hji7eE444mrdM5RJ5YzB3CJpFnXXtuYhfqkWcMMsapiSLcesFubTEWH8",
  "key38": "636UZgHYnZyi1AmEjMNtZbtwRCWxFL2zf1zpTBnRtcnVJX5kGJLWUXXMf65dmJEkKGGmzjjSiyLfQXDVKvABxHHe",
  "key39": "5EZgH1ebwpZkw4Gfpmj5vFMFmkNF59o3vHMVLhnRfNsG4CwEFFF8hPPV4GdZCHXufGPCECY9AzJo5mS8cAuFFByj",
  "key40": "fKLMisrsjEMjfksNv6VHNhQpSN2DEYvZgC38yBeCzbNXHZrmfHiBTeeK2PeqQ4kivRNNZr7qR2Sc83nG7YTmTRB",
  "key41": "33Dp6ygHqQDKW4hQ3eYfr5xsy4CKzYtRPMnNM6PgRPAaWENczry1mPc3HEc3ynwnddzzYigbHuhu6uqJ7TZgy2wn",
  "key42": "5hFxBQznqFetKPm8uEHUbn6YX63n3DQQxEYWCVQ2LPrEdv3E53iTqkFRqum9wQuGCNNEs7UmeXFpqESL2aJLdDpE",
  "key43": "4LphmgzUNM4goFstdQ6nmAkW6TkRgTMKLPsiQtPjVVA8GVBDFGJsCNC36Q1z3YePBcsEQEDFruyaPUVgYnDFtXv7",
  "key44": "3xdnzpVBzbCb9sviV9Uo5JtGFyeYhN4ALkUnt3J8r6hg6V6K6xTuTag6dobPMXuUcU5wm8UczHfjMtoxderhcdQt",
  "key45": "4agi14MQzpg5fs9huf1x6tmRWH4Hc4wBNpnQipktjC6WQuDBtGs66wJKi5u55LKHvsEXSkz1rM2zeoaQsgXpjMyS",
  "key46": "5NgWECf6dGSxPA1nY5UxTcDjyTM3bvKJkvjsudxUCzeJ7azFz4NimGso9REdV1N3Fzx2exxRQqfXHgTrZSDQEzLe",
  "key47": "2KMJnSW9DAsn2unNeT6fTXHU52cCkF5VhvVuXNZXhK4ykkdvLwiBrdJexiYmvE5rA2cZpLDUjycviaLfU5vgshCD",
  "key48": "4mD6thC35MAoDZbJe8zXuRdrBFTJELKB9512foPvgg3hmX3DVyzX4WpxrJJTz86CAJS153wRQVgNRbSR3aRvvGda",
  "key49": "5GbRcmoMH6wkMz8UETQjpFaU4mUbWRqzjD4mSu5YhoNtEuCbR4aBqNCpRzVZi4K255oESDDGWXQDKwUKsDh3bQa8"
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
