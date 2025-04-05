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
    "58KJqXwgMSLmfwmN83tNipDnFSubVP2nyWsrGm81pnajimehcu5QqPEjjLLK6XzJvt1gWBsrbniqcVmVK9DbbAcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5584y4UvHwyhYk5SSBpA35DwDBze4rLqPvgUG6DhWZ8r83XCXX28EvmG6mZ5vDkfQfmYkFivVayWCgfpTZBHsCK6",
  "key1": "5nTU2rrDxNUWkjzfZTCsyr6LYvk591VFkvRaWc9QpbhSLoRVDhNbo9cDj2rhSg3aEERNgfUPZF9KDpZPpbmhNbr7",
  "key2": "3SPYSuPtQ2vGsQswcVtxVFgPr11iPW4kEpSHfV6w9EeNGyqyHMHzs9dZ8wid2p1pK4rGwWU23wyFKccMZrz9kkvk",
  "key3": "Dz7r5RCDAt26vTQ9mLpkntBzTMnK54gxoWANv7KZaN5MUVkLiCQpVF7FKuvRP9HQ3y1WFmzP8droThyLYYyu7SG",
  "key4": "2bd5P8EV4p9dri6LWh3tq5e6Gjs3c8jv4JrCi92zPGWDXRPup7WaUidsCSNJggZJYZ95Z92iLvbARDSQRCPJ3fDg",
  "key5": "2LwE59UVMmCFLmXnGCKx42p21p57DSLxJAvDDxv7yaYp4RTG63K6ijaMxcRyngumuGnuUZngK19Y69ma9gjXG9Hp",
  "key6": "5wtAT3cKb2LfMhpQVLfYivrDkD8z5sMmuZQPkKqa3V4xhmrDrkrXrtcBZnm2UKg4EQxVUQwPi9WUwWe3FFqeYkBB",
  "key7": "62U55t73EJqMPJftgDgz6ymkx5uJ36nfsD9JKFumRVtHbqAR42RyqEzSF8a2uExh2w1EAWKTZbSmBnsbmC57dDWT",
  "key8": "2Kt1NYtzUe1E3v6omsPTTfmzQg9KUBZMDxLro29AF4uU6E8EyAx1tvGwaUSgAMjoL2uxezqGPyYBo9kU1BAu2A5F",
  "key9": "HgjkFBeozqrYdk3xMhfJSu1d5rxUijf3rhUERrKRLBcxk6wGt4sVXNvQZ1ZF5VadUkW1nBCqR8MgcSQkaQ5b4pQ",
  "key10": "3NKkoivPHKNLtPxNzttQETzSmtaKGLxEsM29yQkutJJvvf2k4gcDM11ML58gBf89xad3t7HCf8JGzY8ZWkDeEvWv",
  "key11": "Y7df3WeE1bb9htUZb2i6YL52UTG5qtp8AuRorDbRC2wzweUPaGE87rnAvBXU4nYc8yUG3k15KrsBRNFr2Di2mnH",
  "key12": "2dhkYBvhgyAWoecAZKC7UYEBifZ8x1mgvDnLoibLeLuFFH7LAbJthW2Yu4xbgmYfMprjfvLCSfdSD4PRbYhyxP1G",
  "key13": "5BbpoZUV5Z9UkaYMDKtaFcVGn5ShTArZzB996hDKbEoV2BezMb97QXtDpFYiNG3NLUsrEkiyyytDmdjv3Dwh9isB",
  "key14": "2HCC4E9WAujwCmfeXFycfrhN3fKyEZy7UYJzvhLBAQokdeJD1ofiMRnNKmwWMtMGspAui129mjL2vVnidLGPxjGB",
  "key15": "DLqCKHuQK9RwpHHd4asicXo2DdJdHHaCkFrxZrVmyUuMuSLy7RqAdayZ5uJc8ke2nravnKWL7yRHmr2BMvb13BP",
  "key16": "44qFrg8GwbRfWsLnhwqRt31J9pipY4w9rWU3tHTJgynM3sKmEkUsLmJznYg3yfTxPMd9D6LN3jJBX4np1GcPjLgV",
  "key17": "37hPzbzXouEQHpfaY9NWKSTFjWrr8xjv1R4UrSEc8d5MJtjUXt7TG5FkUThkZWhBnmogCMX8yShuMGQQ928PYsjF",
  "key18": "3ZafBguA1ZgcARcS2SAYiRhKtEQNa8tRGvUjGFU2jvmYP3YHBMh4721jCHs26rpKyuBgEhsoP4VcKh5ABYEr8a1U",
  "key19": "4ENzUy3sU7Dx31AiTPFh5TaZfK2LtQDegwKrN9rVBJTJcK1Mxnuztc4qP4XbWypRrJThZcnjvNSHujg8Ez7Gue68",
  "key20": "FD3YnyLjxYSAZ8rECkQP3BHMJMLrSnVxoMYdCNksrALs6H6MidRVwMxCKpVPg8AucTAXfwjkshLTCDQUb5JCHAw",
  "key21": "b4cKjWRoH5ogUQuVsZ6opwRMrKkULQag6XMDGKjDcYhfUiN5GPJ8J8JRwXPnxkToY3Z9EJ538RDbzzgayybmnwf",
  "key22": "4ttrVMLFZYNC5ZHfg6ftngGupYN97WRcZA6Ws5QQXJ9ttKdfh4VW568VkVxt9qeJuy38HyouAnY2oXiz446fWJX4",
  "key23": "JzekN5gCB27kvVjDbDD6Wzymn38NUsv28WffuUSNFYn2Ea2YbC1G5SLnEbNWS5RFZyKk3joPLWUX1AUM9LBnMJ4",
  "key24": "dwVRVLzDK9AKnjPhnhUq2e4cqREB8X83kGAZFkEKCcpog3MB9qyqM6TUoYyNZ6Tx2efRYL67fjFV6aUMnGjEJd5",
  "key25": "3ppbYkfJdt9cu9mHbVNDBn5hnygh31RxKistp6AbDNRHzZkEV9VE6xcC41JQYHD3S4daDCntPEWD2E9yKr9LMpfv",
  "key26": "3iLMhHpTyK8eum2fRJyZBXj2vfaeGhhSzKbziBdHVpyLU8gpqxJ5M1idCbWUjQvKShv3a9rZpMHvRCr1bYFcsACV",
  "key27": "4mpNXNeGphYiUc2XYAx8vG8HdMpXLRyYjcxxnYo33cffSzq2F1jRVauz7xuxQjgyBSYRuGm9Vohzrka6ZX5thwsH",
  "key28": "25efvcgdu2E7uwUFCdJv17GgWwS6bpm6hSfcF2E8hxzmqc2YAWaThPSrZE6WdS8Kucyw4AVPwo8YRcVTJ3Mrwit1",
  "key29": "4Jjps3NacZLU7bpYmrJPpimoFcvdsHRes5wNhq37dhj1zgtZxxkfnzo1V4pnmm7fi4yykFp2SJ3nGh6wJth72UVd",
  "key30": "351sszhjWiPbEePUmrQyTxpdqQ2UwEzcCKahz9oX274QKkLVRVeq6fhN8NdTSPQZB7AH98UkjYmpRjGbTSDAR6Pw",
  "key31": "3ywYzEx1ex39pX7C7asCfmgzHR4twQHJ4rrP6Tm4DTEQdSa5dK4U63Hqf8f4zF4DjQ47uk9PDGPLALeeL2K8eA37",
  "key32": "4PbHFMYLLe4Krj2SyW1AmHoUz9tr3pBd95vhU4WnzRMfEJNeGpjaPZMsKBq4iV6xpK3GsGKKQJhEg89AvtPZ5tHe",
  "key33": "4R62F9749NfzMGENem4BvAsTrrZ3Y2cUmzGZHQ2VNxShBfcQQgkxkpxXbSyre2w336BmJzUckbRdok1zbPgxLa36",
  "key34": "5hozEHUqpPXdCnGhsGLv3L8CtVjEqbZBuYwFTZP4f5kuXoqXnGMNhx44BYycvB2EvLMmixPv5VaiJwJtoXxeoPbG",
  "key35": "57PJysiwv51zYuPfb2pvjy3HBTitP7nwVu1qaNyL4jnJ5NKr51EAJALSpEpnNbYdFiVikC3qq9FxM3tiAqc5Qt64",
  "key36": "3iB8CsFniFuwdmcte2dMYdadCiBaeaswBiKUrHSk3XuJ9pLYYqHiGwbGYMZabRxbV5HtxcdfdbseV8cfTdtXMeYX",
  "key37": "62Mp7cD6YPpttfHjDippciBTS1fCTb4XDgMutGqjQDHexo7Mj5BVnhNt3uYVdF4bEy8GydHfPuF7g4PU6ghbjPJ7",
  "key38": "2rqKVzQUHL6AwAvrpKv1xqjxxh5esa5ZrPzAYNwf5T26Agt276KMt3ySAhr4SoFyaduLV2N1SUxQUoQf871vwWdm",
  "key39": "5WBvzJ24mxWkqicZLLupLVAR7qG4YpbNq39BCarvtAxYmf66H17EnSDbJVLqTzHqdxP9HhxroiXWqsBLe8ChcgY",
  "key40": "pohSZRCqY2fJLsW3rKqKCmD3ir24GJTY4DfZ6NHgpKkNYWkMwSejG65JWd8xavVo1RT3KV79Six5wAmCT21sxX5",
  "key41": "6uJfzHL1EyrS526vH2vicScfW9FZSWj1kmZ66MLSFfD4wXL6HkWagAfwgTftbg34B5dXoD2iXMf6R2nKLJzVkdB",
  "key42": "37DDvBN8Moz8g41f5dLsamPwiDCaC6R3FFzQdzcc7sASv9XsnfgA5qGMpqr9DA5bZY8Rpq2hH3tobLPhKsiXG4SL",
  "key43": "4YHfs1HD5mjy17tLRBJNjebYtjBHJtzarwRouvgPs5VVzBCX2BMWKDMErKHYZcnokwyjg5LavY61oZp36Xi73BM7",
  "key44": "GS7izN96CH3bUaiSfi1sS1rbz5orFWjFFwnxnp8bJxLxGTnqFgW5oSc3SL3xhKJq42MD9YGpexPsoTwpw58Q4Uc",
  "key45": "57FvMKAtdyWJK4Lr32mrv25suq63xeeedito41RF7oBDwdxAHipRt8SyVpAdfcDLmmWkwT56mdK61tz16TWtnWJw",
  "key46": "5cHrVXC2TcaiE1eiNXYRdgCEvNmosAxry9e66q5zs3QKb3RsD6dYP7GqiLFhMvhgDPEhp19eVhQ6nvpNGLNdC2ho",
  "key47": "5DynD9KARojnrWKVug6GvNpaxwB3Z3h5CJZCFnLHwNyzK2e1dfQiHFRja6gdMXfp3jydpYF6n3ri1PJE2u18zNdX",
  "key48": "2CkbiUS2Yo7G66BH3uSUDfKbvGvoHALrYbC2K2pKX8CGUW9NFACRb8e6gQWbbNVCkWDWF3mDRpaFPy8oPGGmWnKo",
  "key49": "2gZL3hea4tPQnC8iz3rGc6ExKz5ENdy89kCXUWo92bScEic5zyRt8LkBnLk9W3fMwz68M3ukr4aYpKNABodEVnyT"
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
