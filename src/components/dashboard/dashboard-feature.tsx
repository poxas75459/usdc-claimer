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
    "ZBCkgDiWL5p6mDAx5GnehWds1qGgHN6dHocYypw8a2Ut11ZPVciVb3YJTz4UxfQLZx6mTRDwT1uN4kW4fCSFSx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63rM4AjUPQoAqGuz2AAEQLXdvqdiS7W24XUUfxP1UwW6MPvUXBvMHaR9gagz9afDXAqpmbgtq3UgGTU278AjBCr",
  "key1": "4bQaSaNtBinvSDiCNoZwjmRynUfNsWQ6wp738oNoF3SaSQF3N3KibzNQLQZUeFqq6KigRBqj8hg4cKViAthsJBxg",
  "key2": "igcQtNx6C5FaypTXEqcoRiPofog9H772TibVTE5vhU43FKvvLtqA7YhbXxVzfCpC2SNR4MZ4FXtuHJ632PY2jZi",
  "key3": "52TQ9WgKzaFhumM4GJLsmfVGDCNGvshHTv4kUpYaPkzCVwx7VEKR6nVg3JSz4ceyByY3umfNb6uHaU57Txkzzuzz",
  "key4": "2dFDs8fKRXX5uUytBgX7GqxC13CShTYq9PPQGouJGgnyxphWb69s2znDUmiFGhYfRk9v7mEXjhfDHq3r6wXWCwVc",
  "key5": "2sYHkXojqJfh5tbhxPbAPK5p6DNAGFvLdSfw1dFenzALaPRENMTr3WpuufHsNY8sETB5oBUoJBjCDCXyR8yChtHo",
  "key6": "43qj8BRWTUceX35NSwNPdPntwY7jhYp4o7cFCrnv63yZXomSVphzMqHshzVCPk4GffMnz8sacZVwxj9RmdsoC27b",
  "key7": "2PQ1Gb7tV2MhWiyZEnDeHMen7AXwEs5eRRgzAztmW6RYFFwhXPSSm9bt9zYGYoDFUa9qxR5sWeP9xpZdyo8cDazM",
  "key8": "4DCtHgUP8JizvRjrXVu9Kfoa2f1EDtqRdxB77U5YYXyonyEvhdqAMJ44rVHKetygKvdh1NMSwDyUxGRNhVfhq2JB",
  "key9": "5Q9sGuuLXEy3XKHZddXiziHqJbogaWDrAnxGtFeDYMfjpKiSw3kTEYL7cwqGYnKmouhTgpruqE8hYFHpvpiYECXv",
  "key10": "4YQafC41hjswL3yqNs3CgVv47643dM1vuXM8eqYv1P49pUnMUKmSto2Bc6gVWVCKkJM4nHoY7wG858KVe9H8bC8H",
  "key11": "58Bi8VCpTP9dxVhymnpnoH9yEbWCCvu6g7Tgf6mZ3E2EySFdem8LjPGZfBnY5MsqBQ53ygcxRSLkUMwBqamq9RKH",
  "key12": "jB2v23NhsdxzYZtD1R7quVZgSaZCPU2siRAn1DQz3zzmEFnkggtHm239YUqMNEyHSgsrgvUhNQrUPPykmGDB7LD",
  "key13": "4CLrSNMuXhdjcdruSaH57WrDoopCrSiQgDgiDLESwJmmHi8wL13bRqbjBwmptxSSZQuAXkaeyZ3nEwuo4wtRb62S",
  "key14": "4Mq5brD7X3EXoeXNMqYsWmrq9br2DHauZiapPVfmadtuM9BZM4m5T2faSVCSqi6XXBq19rr6Kk8dQeZZxKRSkTY5",
  "key15": "3BeGP3dVqyU88DJo9Ez1mW2Dvb6KCSuSBWM5nBVqxp5vwSfHxW8mLL9HH2pFK3ghBdZhUHdb3xJZZwBeBH2AMboj",
  "key16": "571vRJP1FYXMW2Pnz35Wh1zuMJe8c4rF2rtznkfssBnQxDMW19dDu8xRcfMF9hMsQDYcidcAByJaFZdXWR8yGn32",
  "key17": "3xxHX8WWmPBPAZJfWRLueXvugiJvgJR5w5grh2SMzqqyC6MpYsZVCSCDcEToeqCBL2xfXnzYkSRUetSvc9kfUjPs",
  "key18": "2vxX2TPgebrcVfS8FW7ZvkLTVdfRE81sGeB5LgvDLyC92zxuCXdPvebqjsoXddMrmzZHrrkV3SryBffXz3ay8bLu",
  "key19": "5yVeYLReCAQiT2Xz9CQKrcbXq7QAYpzrzqk7yp4Zo1Z6WMjbYRmAHoqKYmscc4fbn35B6bhoAouQioTssdnE7UCb",
  "key20": "5c79oCPdqJ69CS96SBCfeW4mAA8uaaPkHdNVu1ag7r9JBenpYHBQdR5QbFBm4yC7WoQsNMNt7qtripMtLT4dMVdU",
  "key21": "3A8PybcT17YEqzckvbKdDKBMWtJnUydv35CcXdwfBmW8Wp8ZWfrzvvbTyDjbogTSRtiUevNWSQK3bxwwvvby9RTu",
  "key22": "4raA4WhN1743sYZzmNsaDKqajAkMjHxeQPx4MxQZajb6eXfarssjV5c9P5CxFhTtDMRBzw2GT2Y4JUGP8LPGnjTf",
  "key23": "4m6976VuzqmeYTVn9Kw8adCyjRqWUK5nx9BN9ZMyzQsXEcMRFF9pXD8yGfNwARoDxZZCKrVTwtkwFnCwdx1MyFtS",
  "key24": "FReBbEuy1852gJ7rKyPmsahXSrBn369gTjm93yMJm7DNStZtV9LusrisTzTdHKnEAqtWFPNk2BmjKNx2GJLSpGf",
  "key25": "5TCTvTrrVSjDG7ku7zRfPwA7nemKqbsXzjnmSj3HgreB3tQ6onxEzvzddrEvdRwiPy9vr5czc8Kzfwbh7MVHUZZe",
  "key26": "3QHicbgK8fWdnhRkeiSvAfZ95EpBaHnYHLTtzTC959qimBtQXZHodxrZpvVGuTrwJs19UBc4jBKbCZGgMaschrzj",
  "key27": "3LzUjvvXGZFMXizesNpVRHtwtSv5ZGB1iDfppCKEgNtFAUb7ozx71C1C2SKKsBU2ocJnqgCCBHeJM75neLpTFZeR"
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
