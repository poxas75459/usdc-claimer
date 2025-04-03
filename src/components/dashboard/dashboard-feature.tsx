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
    "3bxjL9hokLiMqC3rvJr4SK6tYkHNo5GuLWaN4vVB6v55XsBuPB3MTKcitkVHH1S65nd7P6Fmd1AGF5RwPyA3AuCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61uzovBwh16YGvQVqbQayMTh5pn7B6m5QNWRfDC4Xz4cX8DmChkQBu2pTFMe4sehtQU9KbiC4ccjTkr11cngeivW",
  "key1": "Nie7J5rxMjn4Dcthz5jxgWvzfCoq6sXNfDvkebkxoCuQbr9zY4YmGmxS1tbBU8x13KLhDBiTbXbM6QwJD1qxDUT",
  "key2": "5pW3cFbCUZTMTzSt4t2BmjfiQb1e45cX9wMuQvJLbmAMghSVByKwyZhx2whE1XwnPLCXSWVdvQ5VtyD9sHMjDTP",
  "key3": "3qYWAeWhaayWqmdkvmm9PCC182yczsY9fnN11uLHFDGTijYpeD26ygKey2a2gD5boRDtGRuHZo4M3k9rAgUtj182",
  "key4": "5gHEKoDz58CuvAQSG7ub6Ua8JYMaa2xvk7Kv8vd4biwa8tMjgk7BtTsDpNvnVBRxHGCYppD6udxuBoCxEM41vuFS",
  "key5": "2EpQyUyrWXn18ZAniQAGB6zpFvQR13hdDVWddm4rRY4j2nZdV9VDRDzSEjeuvEBHsVS7TCitu2DbHajwm9FcFAKF",
  "key6": "5VUBXpgRVnpxLgv1a6qUkEbSCCSLW8GoXGRPE9YwoBmZDXeheX5Pq7GCuHC1VF8ELGFgFyHfsXfrSMGXrhjKMhmL",
  "key7": "3S2mh4XPfj1ojBTdmsjdY2MTMG1U2DMcrn5UGVzDeggXjU2qpR6EyET7REQevPTjicMsK5qaskk9BnGZePaqBTTU",
  "key8": "63S6yh4NhVwGr3fSHB9Nf1tzUNbwVHukT3uJ2HnkBDontk5BmvhWCgW3BiHwovS55zRgxgGJYVWDSNRYnrZMZSMH",
  "key9": "5AXnWsXDC5K5iKXxp8gtdoKuwDCqyRcPqdFnufquesBUATDSxsiHJzNckCpYkfFNvMgqqU5VumBsUvA6QVHGAZfG",
  "key10": "3MXHB4n3pJxonUzMBcBeubbmXN8DoXzeYkbiPzNWgu6NuJDTzZiXcFSB26Z9kCoTyQpC2jrWVPvmKC3vuTGPDXqW",
  "key11": "2JinUazaDm1DdffFBBoSGNRPhkJgCg67nW7zztvyKm7vqtq2HimNJfGr7KLLRBxroxeNsNPRoKtJH6PoxKoWwj8J",
  "key12": "4yHy3iPNiqkpKRbnAWpCd3RFfHtt7P7zvXwPaphmsHbZY39zKTwuixiJZx7NVwn1NafeDk8B2MsckzCT6FCFBPHj",
  "key13": "66w63AFwYhYidokW9aUmrQwiugiBMG55Sf6Cs7r6pYbq4G1TGfiSSK1Pr3gfmVudmyKKSTquAw7YPojLVsrUF11X",
  "key14": "6NykcFKYR3ng5D6zggKhvUub1xxk8NzwqKUaQJAQFt6zPCe7BtyhoJCYGt5K7axTgQ2BXF26ud3D5FwxsiWHbD4",
  "key15": "5Cjo1SWDdzhkHoGtSHkrezUzjYFJk9qXUrV3jmWNJtiJEZw62crBnVBpgDvoPCcr5RrgkuxGQ8Ehn4JptQYs3erG",
  "key16": "5Q6UvNAPAQxiBqv1aWs1MZVcYavi97WeRRKkz5J6A49TFWXzL1zYcUP2kVESUe478JmqC5T4ouL7HHo7aL2PKdbS",
  "key17": "5XyPVhu3oT9io5mP8xEJHWzgYkXmw2tLNzS1Qodw5cM7E3WdbTBxybiwUvqu8wVKdDVWPeVC1n98SsGc155hhcJS",
  "key18": "4hCQ8zwbqvJcswmwGULjVD1depuh1p9iVpUDQDKPKC8UUu5JxQ4yD7zj8ghisTXyA9tMYJam9XcBhRWYNg6vNhTH",
  "key19": "2c6gw6Zaw628PTpr9RUJQrfroxxAJ5rAUCSzRmoAY88EK5rs9L3SGMEsZjk5gxhp652vagLsBpcau2Xp1p6XewsV",
  "key20": "4q3Ecab5eBE5njHH3k5iyLXNDZkBjFdLkYvgBWjLcTBDVUkYYnsNopeXso3iceTXfe8wBU27MFFUkiiaAtm1Tjrv",
  "key21": "5VUdVaNU459moCExhhuzwBgUBXKUv7kV7ySgBAiCkNhuFDctG4kbDLmX5kmyiJ8pwBkRJ4y1sDmKELvQ7mQNg71u",
  "key22": "tMXERDTZVrcrW3Xrxe5kZS4jushKa5PZAu3ab8WAW1jBuQHtzEVbKEXT3NawwRGLtT7WsiE8BuSFAQCN2oczC95",
  "key23": "5CSeXA75HXeYhNH2dedQESSnbjsgkQehmFbv6NcXHoAhbnkPy851D1Qgp7sX3YmowCAMynduWG7NUKNBbCtUhYMC",
  "key24": "23nREqfeLHJo5acPMWTjW4QBWenGTPwZ2Y3x2Rq79EGKsQVqrw1yVj5DsdKtVHmMvjYEq9dSX7ZzxYjy7S3CwwAm",
  "key25": "3e71AudAYmLnwKVZegtNPv4R2sU6GtRLUBX6HJnF1odRLtEHZdBzX66it4HQSvM2XDRTZwnqHu6wXoeywXbapLs3",
  "key26": "5Jd46F1YoxyL3iTYKvJxgWMoUtvFctTb2xFbZjorNFfWAkyAPsx3MyBPYZVxLogtZz6Htv235HrRHuxH451C7hef",
  "key27": "p3GFpjnbMZsLLBzf11z5svsEVAGBD4EcebQyAeMBXe3oWv6NiefMEL46uHkDsSk9gqyaqbqHudKKpSW23TDDpQB",
  "key28": "5N3MvzgFqULgTtcFksH3jFounSYqxy1rCBxj3bPiksJvg45JF9R1d6t8RuTAmokuJqaZdUYjiaPuerhC9c7fDoMN",
  "key29": "aQUrXsYVEnqrmyBeYBnR2xXgLZ3rEb74CvcaLJEmSB8zNuUYLTimkJwDqsF7RHykzYpqdeAjTnzcUbwhaTMFoZL",
  "key30": "dMQwbYT4snWjkVy8p59sudKPh149BwUDvhfzSRyvmBmVi3BK2n3Z5rNJmHvexcgvC2kHoSxCu9oCtfjFHrq8S19",
  "key31": "RAVfPtCJGqqTYTPMWorR41qL2DWmPNhPu59D59uKnGUHwMAYv8sxR1LTmR82w2GnHYg727mdrGfhF9a6xLJEqyj",
  "key32": "3DrVhuN3VS9Zoy2dPjwCzqQPyB4as7TR9Fsx78YFB55fcD1kNatHUQHaW9rqUJHJNBr17FH6iD29KQe5EHYz8oA",
  "key33": "3SBdVMN3Y6ihTCaK5byxEMehYXmXur7BWjNQW7pkvvjF6juEdHTeXbTbH6ZwCcqPf2BZXgLewwZzBnZyRKcuNN3x",
  "key34": "2C3ifFju9RSPCnJnrkEG9bHHNy8TuibVRriJm4z9UBCV8S12jXns8oUik25e94caaocdktYoXS5L9gAaQRs1BVUW",
  "key35": "6PuwYGqZ4xCW5Gqa5sGb95KtirTxM7GqjHd83DCdDt9NaDMRL112c4R7sBXrTVQYcFgtYfwDnqEw932J43EQH4e"
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
