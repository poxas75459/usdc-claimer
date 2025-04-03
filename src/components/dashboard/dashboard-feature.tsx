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
    "4knryg5gsZC9wn8aAr24eKhubdvDw4cyZdsQf99Hb8ygo1anfHmvAQwLV2zgrSZbR1ncuSVYcf1dn4e1efX9KXFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJ9r4UkFBCHX1aDfejJAtDxsn7bRL1XVfvw3xgzvrZJPWXnvwc7VUs4ETMhBUWYiMnxNBbMYSpL87XUHfBciWwW",
  "key1": "2zN2ivffXxLTTeoznmrdSfFiKFeV6ntj5TmG3z6rVf69QyEujNKjFkUgUHY7LEKyvd6Rfi6f4o36sjVui5LxZiwn",
  "key2": "LUYfRVA7Km5F3cU3YRQrsMrqSY2t8r6pJEzgmWDBKPaLZNs6M9kCNn2eUqdGND7X3ZaLQYoWTW7Ej38268AsmSq",
  "key3": "27qNXdjLHrFGxTACBY9mCfyJmRdbNCA5hvMSNobHxnd9kh5Fggf8wiE4wQaPQ6XxxRm3Tdg5CArZ8q2rtoGDAveH",
  "key4": "569V9Sp58HtjaTVUz3Y6XnGVHWrHTeVsh5JuUuXFmEfJogBaB1WhHFMKUwY7hhiqkHZrNkUqUUYiQMSLWs7q4u58",
  "key5": "4CikzVzoZLpdUvytxm59Ls41NM4i8wjsFhRN9GfKQWee9AppFAb7DbVpgwk9Q1vHvvdJJDkK9YspqjzWNKW3d3Bs",
  "key6": "4kgerFk4fDXL7emF1d9GzPoHj4cv1STBv7Ew34n2Mqi4ewAtA5qWY78fLCprtYqFAHRvQdXKR7CUEkQb6axfYBJp",
  "key7": "5mmdeMZCqWatLpydQ5X323hJFPFs2J3B25Xkb3KPZF4eAu9eHR4PMKh2tZ4wo3ik4DsWKr6PUnuhjtqCgKikhkzp",
  "key8": "5XzwBYx2p4hswzNDvtuvMrkDBGn9P6SbjpD4fpyBLeWdz9N84bF5SyCQRmoi7UXqVXBqTnCZKd18pJFegktHR1i1",
  "key9": "s7GriZ7V3AFhBtbroX5eQmzLfxhBDumKJ8KSme2BrWmXxRKn6EATFEHampEftrCKHF9nWP2QWZeC4nr4p2faUAb",
  "key10": "2wcZYsAhaErSZGSainGtoTKrYvdcXtWFwxjbmLCznN5BZNoRqQ44L1zKyKLikudciS9MnvfZvQhNfsyNJvpDV61t",
  "key11": "4EYPSzF7hC5dyKBjLbwwso18WSWN4CwHHZvS2PTvEbozqrzJvdz99B4Vr1NRfLgQ6dgUXSz84SZLjwYGW1TVAchT",
  "key12": "Vhzb3jJbvUWpHmUdseG1eczqwR3L5GB4DnbK3G2H6gmSDquN4M8jrfkVBp6Rrbu3Ftqu9bh4VCZGfxcSG3J3Tgb",
  "key13": "5Fzn9KAqtHcNqFsMjcJ9GW4VFkLhxfFVUdn2gEnuM61hE3qk183nhNaah2nRFBbUJBzVGpwSXtojR2G1hu8oDuKr",
  "key14": "4Qc23CzXx3vhMCrBLsnWhsZD28pKcPjRrAvJsfsZXJ9icphrTz5FQPCufjF3GuZ1LN9hR8LLkVXuuEZ7AufPFGjP",
  "key15": "biiSxAh4cJx3W7qhdYvrrZT3m44ujBxGXuJ3JXgsYgEuFRZteQji3QNphQnSoh2A8vxMLsCQ2EmJSNh3WvQoeJr",
  "key16": "291FfEgb929rBSbL9HQQNuRCi7aRZhUvf7naPXufAxjLEPJR2rbQSdM6MLKYUvk3sMgwDUtqLmiYreLH2A6QS2kf",
  "key17": "QGNAnJ15xugSCjgWf4ddrKmJgikE8Bpbc7LGNTtZRxMP1LhbauQN64vRUuvp3KCEn8VQQUouGbYX9rgUXXW6k6N",
  "key18": "5nfX3r2fpjTpX3CK1AijMwGBPWHTv8wCmp9aDc56vSu3xwSd8mmuCmXfqXFhSCGtmS9qwxf8vvJ568QHzQeDGFwd",
  "key19": "3srUj7ecb4L8P3uk9DwvG7cGjBSexiuSSyk2gwv4yG8YeRMKyhbiSeqpVydfsCKgPGxi3hfncsK1qa7EFZNe38fy",
  "key20": "csojHz2cPEZRqPRRUQyqxQJ6Nw4JHifxVYAkeRqQSzLhVyHuCMwULwoXSGYja1Cpe7HqwYx7Zb6GHLtSQs6EYgz",
  "key21": "bPYhnvb8Qb2rS1cxkDqVgiTNiFcTpLVhGgwQSPDNJHY8kJEMe8K5aQrsFGm7GhsZuUbXuhanScustL1w7NEfdhV",
  "key22": "2VJme2xPxMmpDy3kfqBras1MiQFhiUe5Ec45kEzsocrNBPwcNbeLaQBYDjSUULrWoEdouAUbwYDixxd6U7dmLTCy",
  "key23": "3gZE3cck7Cq5Wo5SiNmyKuqnrSDVeSfXR4BBTmkGduF2PU7vbwCLfJMPd82pn5Hsm7aP1o8PMn5odBknT6TnLH7B",
  "key24": "45WBTv5sDcsoU6G642oqpvpvrWz5D3NJhemy63WhEzjcjDnqYgePvXcJxxAboLAhRqDyxhf9qrjXxHtFZzKJgzXJ",
  "key25": "4fCev7YPfgLeTsvxHoepTZKrGNFRaPSuG96zGSQ8xAKzHe9ZVZqwWxb5wVcomFCMDv4NQrZq4JE3TTtvcEoTYkmu",
  "key26": "VqEfxvwiVQPiVsL3FFUcozye1JyLj8KGS4H3qApWQWiHcXAxskt7oWtR6yV4x7sAonqu8KGTaMceP2CbSGS6qcW",
  "key27": "461bkXUrbCbBKqrhcwNQxfx5imZXsESkdhmCXRT4MBboGyEwRGKGj2wQ4wEGfub7DzAQFUbDwivViyve5zShZFbK",
  "key28": "3ATfQD7Sguz8JDmdZPquQWiLaoCYo9JtaEjtuDPiDQr1n5YAACprjQ96YUeLvNnxFuDMfctxJt9Acbob85fe7Rey",
  "key29": "D3uDYxtubVzG1UtisrmSdfpYEs7smQAn93wAydmmuorhb62Khk5nLpx1sWM9bCrWE6z1HuT8vseGyHg56eKjD2M",
  "key30": "H3W8iG2wUJmMCZnpGrR6QUF2g4nqirmi6P8i5T9bgsANA7x7XDGzqfgzzs8iGdH71ygaTgFAoSBsqN5cG4PxAnB",
  "key31": "2y5TP24RAVpr8JzwJW3BQ2BXPFYo1z8Tjkpyhys2zuwsMxyYenxYoiMYBDrEp6SisTJgpovBVfTy7tL73SpDx1ov",
  "key32": "3nSYLL6CH66eDy5HJeJZMrcCAkBnw53YDFzuXUp7j1qxCfUxDrfr5eSqQrJ1rzpWTVsEYFUXweRNVxC17stUNBrY",
  "key33": "2mMHzePrGQ8QxWaXTudDh6ugiiuNZjSZe8YmqFfDMQLyuyti8Ma4kW311xVBPGFp4VSbJopkgVkQo64XJDvMb8CF",
  "key34": "56NqBnHZK6KJhk74bC5PjzssBjV6xWE9ZdMQGFJgbcBy9bvHdyV16a1X9S5D6BATycs6Nxe3cF3BicJapCsfk5iC",
  "key35": "4atz2TbXcBHARDCg6FVbRNX2bCcddH2VpDMuFNbRADkSEoNvTRvfLkZKtvY5Xcieswcr3a3P8sjjURX4dGvPneWy",
  "key36": "53sKTw5kHV4CqbkGzEf9aTG9AScRWqN4TUpPsRcHjdnhEx57vW93CHEoT9Q43V4NpZSStX8cifAYZ8cUGnTG9PUS",
  "key37": "5DvEzvvN1DVndFymxRfwoFvR9hykWeJJN1RA49E7KHJT4hyYJoMpkvizxeFgX8jRXodTUANR5YAeachi3ow63Qgn",
  "key38": "4iJ4ph4eUcfYC8QWYwBa7y8Ma2mGQssCG4S3ZairBDXCqE8f56HDAF8LrPDQsgKAFP9xF2FfzxPEPMo9jRU9gm5s",
  "key39": "2vm42a3a6pGizAMC86w2Exsnn1XPHPgqrrSbYKSwSaic68QwWTmPDz3WXYZsTLNP15gffNna5AbMPjD7pwqaYYk4",
  "key40": "5HHDmqbLgcibHccCiQYkPHTXeGNWzgtbrq8SsXNNmcB4Q9fGAei3nur4Hw3UQRQajPT2ennUaoNy8MLJ42yAHZTi",
  "key41": "3Y7BKHCQXAya1BQmRyUZocCReDG9YqEZgMNg276DYSrcXxdiU1j6PWxNytJsUzQ8rEtNXkGSPDkT9BWf93dMcDV3",
  "key42": "3PVj59YhdyvgXM9BBytRQbxQPTKSscwik5Mosi5vt89TuYXmEmCSbADGT9fyhud9W3qDx7ua2rKwENFzMXdwdnsT",
  "key43": "4HMtULcZEm6JBedD9zS8pvdk2daTt8BE3FCPz7qQ6JdJduRsZo4bKgL8poSK8H7gcG3a4BGT8XaScdF3yKBCwmjp",
  "key44": "CUuPadjEHBRdTrwkvZj5raXqBiwE1Si8cRCco5xGAcZVdAdntPQ5C5Rr7jsTtXYHjfGgsMF9crtSdVfEEeuwZot",
  "key45": "5AerPxq42bzZmgcUmV4tuLrSBgLt5L4PfGwGfb9kMWq7rhdwxrUhXGN41uU8ryz27EYrxRrS6NM5PnhEEtLngwT3",
  "key46": "664Mt7EUmssyG1XocLckXuEfWr5P4869Q5z6C6SVXAFq7kgivq7WhqDhQnsFRczMut9GTYVD7yPc9mw7XY9jSQCJ"
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
