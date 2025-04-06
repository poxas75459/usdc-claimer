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
    "3w8KiL7qjBYHjuSQTseW5B1w6EkhzKJhu3WbcftNBW642TaKsFKmVJZauLkdFVxH9hopgawyeewCmHj1zD7hHXGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdZ99cS8rkzP6Gvbx1g3G7bkwCqbsWopKdpzk3zyHzXAoPWjBSSLg7FhbDLew8poaDr5d8AAh79KMWJdgWs3Y7z",
  "key1": "3tNZs5dpFG415aF1HKtEmtA9kmNA8Go62CzChSCbj1Tra6DyS8BBrrkVeBdcznYYrPM5AogjVhUUXM7BkAbpiqZB",
  "key2": "39CjkNXCQE1qkg4e4ZDpGRWEcXwBDbLrcE5JohmkUNP1Lzw1xg35VKesKVuoAvvmcSWRaNn854By4BYtVYfmCAVr",
  "key3": "2WxhsvKgXq42feUBsUqByhzJuQEaxpEUHZwtav2jYnDhYLhvTf7qs1SbRHcC45MJXBxuUUbah95aP9LM5TD92hpg",
  "key4": "7mX4UtreeHFy8X4g3hRvSB5kfNYuqcpFqSiQr3ZtcVEa4pPudL2Nw6fe5AhrqJZaooEyRJbcr9uBAUKhQjzXWEA",
  "key5": "5a8NGgKpGWdsbiRsc17USFrDavAsLisBqSEpcyyjVTPYSjTYAFwvwaEu1h3Wfsk7DhdFtvNvpYtqkvAyc1Avv8AM",
  "key6": "5mVSyErrz6HahQoqEWqZ97Vxy6saynLHt5t4HGkQWVGYsgB7FaxLo3K4zdppLejLzSGdMa9ZQ9ysTMXj2QbPhnG8",
  "key7": "5mTnoVHh4V2md9u1R6rMWyuY18VvhR8g6grrYm5hfZV7jVokqxDpnboSJTVj4mj9f16Xp2K1ouvYKeHLmM4d3DSE",
  "key8": "uyeTyvWpU1HYZ2YZAXvmqUCWigGoXMjDMsqwLios4qyaHtx22CZjknPM7VAPG52naqgtAn3akDGSCA8FbLLbFFz",
  "key9": "5u8cvnRiWDi2cXZCfN1NXRXDjvagN9wD5m3WSfGkCxB6P4rK4782yBW4sT53drgSm49AGNFxWTBZrrLZ63GoD6LJ",
  "key10": "ZZE9oRHwpBZp1dTDFkKzYgex7V1VY6XyBTdoGhTkY1yaFCQsZjJg3tZBVmntxArYpwvQ8TRzX4X7MxHcggsAFSf",
  "key11": "3E3CRj2JuLcbUPaNpbpNkFAte6Vj7bUFS5PBDGMAKT1YaZZU8S2VJXhZ7LKr73uaFkcmKjM4YQNzoWJboar28Ljm",
  "key12": "5qRJE7VaLNEK6XZNE8WB7ZRUp4WRtU1CGwNJn77GaVFD8sMaQXJedD6aHPFnU6jj4WT76PA9woX2i5CTygVcaxBY",
  "key13": "KbhV59eojjdJe6RpCG6Ey97kJzncWJWg245MJn4Z5PjBmCG4TgL14EJcmhY73emdACL467Dr37p8sqqZ1mCBjLi",
  "key14": "2xcExjzA4jr5Z7TK5eeWMc4zHyapc7qx8s1emMze69WMTj7ZWjgAcQq3khmwTPctGrk97EgBZKGUY1RopwpATUts",
  "key15": "xwcynKwyn3E2didp16m86e2zkb3f6nhYUK6RUnhqueyyPf2nr6Nd4TyXQ3qb4s11enMkBwCN9JdQtgV1qPLij1o",
  "key16": "3LVPVoSJmdoz8qmaShPevRYXV3YAoztB9YvQDWMnQgAapm8HCePQFaMXwgDEJVGQV1tQyLEQjBAJVsZTzgr8P9QT",
  "key17": "61q4uGE3CLNzKJVUTMLhiHkyFQYDxNqb6nfpVev8UemP2z1tbhXgHWTw2FNeykMePAhjcQuChncqjaiyaGPTWMbG",
  "key18": "3QNCPzVfxDRk82zhLZsnpU8oRBnt1sxkYok64rSTu6mAzCo7G2S57MhWPEEanfFPZHCc4ikCGjNujdYvAFNoBdoW",
  "key19": "4gfbDbKuEUnntngYURoeZYakPp4GmSkikbyE8HXzRnxLK6W1Ev63MMx6SAamfkzh7xpNTpr6AmTaNUgkkdKHpP6Q",
  "key20": "5NopRhukcaDp3TKLDTJoyN3gm8h7QCHswz6kiKnAChYAqDsCPgUkL1zC9JfT1h66rn53B6GiwtbdwbeGsYP6AevQ",
  "key21": "3p9FGNi4xsoJUW5hHtxFyUVtByNHuZFKeJPFQPaHiM7Yx1VaeyNKaL1ej89zNHFoQqPn1JpMbhdTssKrWRVPQwkJ",
  "key22": "oHtRitmid8AFBn7AqgqwA83VHpzb1BBj1q7G5D1z8vckwF75sg2cJtUDybHs3EDWsihQz3svmfjNizKSfqdW2C3",
  "key23": "5myRo4GA8QXACrAQr5JTGGDXPg5pJKeLUZffHZBf8FbqUDwZVBNUxRacMCBXbKGQZHzAEsbwRPRBaHxgA7G8PDHk",
  "key24": "3CHq62oy4Pnv3qf14tqRN358AmdajW7Aih66z2mxtYtQJCGyk15MjsUaY9FGzbmj75Vm4WxjRua1ea8wC87gbELP",
  "key25": "6VgwAs4i6awqBprm6QvRfExFxpTws3WC1ewYUvWzFvw8Xhv3bEXDiFWLiypC7ByabQ8Evq7UmWGSTHNjmitsMv4",
  "key26": "3AZqZUQXBxh1PD9QJkFCcgmWx1EW6bSkTHLWH41bf5D6NGPN9RBo8YMjUtAFsWBEHoe8qc7CkhJFJkpj8L5RtvUR",
  "key27": "3E8jpuVSvUtLFGLXpqvXjNV8KxpnDhcUqmHMgu1wUApNzLwPyLtMUCypBwF6hDrcmx6eTs8zT99fpuMmSPKQavKS",
  "key28": "deUo3VmqUU6nUY4KRSuabcYnDheHXbJbisfoSo9z7Thkp2yCaJwAn1gXFWVebeEAjf7NNVjusU2TGc9x5r6bvRv",
  "key29": "55exTjjMow52ss4oGTvG897fMYZZiJ7tNcFsFkGheTZaQ63zEnskGnk9bRj2bRmbyorL8FXb8aGrJC8AdWY3M42N",
  "key30": "5CGc9bTV7NP4UeUXmL43Bpd1Rfkn3Gi5T8XFzXKr7XiFSPGHkX2jsuJc4SXJRktaKkfyURquQBAwEutWPNwoVPzs",
  "key31": "3zSVgEKXT1CHNy3AFoB5SR5W7XdcmYRRhZdWvTwsFuSx9sp3r5JbiGWzoxfXwQ8jjFWEg6WcKkHNxUXBjdJvuN1p",
  "key32": "2s5CD1G5sDqZFE3h3moqdj3ehSR6Vci44u8yah3FvgF87n2D2T6BRZcRWPuUQWHaiBHSc9Ne1c3QBxvWiv1aFbzg",
  "key33": "5aBgPyGHE3b8h7pf144KLnum1EMHim9ZEULxNrDEyLryWwJf1B8fJyhpaEr6YsXdNkJr2h1itBN6iZbDqsSYbiz9",
  "key34": "4WM5cvyR82KFPd7EWnMBeSnxfsX1ER5MnxUGR7c5NdADTHxJYcf7wxrTU7njgHtHSKm4t7LN9XPZBj5zuVHy97Qc"
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
