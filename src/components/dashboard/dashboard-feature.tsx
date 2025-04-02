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
    "3yVhtPtqT49QVZiGuXiLgaMPyYQNaFjQxWjBGGGDFKEqxfFQRCDtmweeXT3Tw397iPmgAtswPkSMzRW3kScJAaw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhYKmf8xpmGsaW8SVKLkggKD7kz6ACtZFhNhq8nthywsmAuvm2hugcgZxyUgR8H49fydwMFsaJKwowLgG9b6j4U",
  "key1": "5VtqyhTSiUAyMMrJ3eytmn4178fQ2H2sNHSUMmwbJScgZcPqVcqa4pGHPaNsqFcdrCMPvXdELQrnGiFuhVCE9SbX",
  "key2": "XvEK4VKrBxHtWrdCtCCu62mgfzpcGgqJS47kn92vbcrQHBtYC9WmyJwmUGpJUaur5dAGfx4XM7xkaGwayAzvXKp",
  "key3": "49sjXTBToJH7pGW3wCHN8nir4KNdEbAFCLGpvuMdxQeFys5eUy2rFrmQk9Nv4o9tND1Rz7c8avdj4nWTdz96bKbv",
  "key4": "zPmrryTUCJX4yz2VnrPR3YdCAa6dBqRujC9e3LTragj99ye9e8ebznL7miqW8mc9rrW2NcmTrCGJiNqdrEaEBT2",
  "key5": "T5WLWiwSM3otBLqrspBYaki3JSN5rPXgiiUy2gjiUQKLyqYwcnbCXgoUVqM9BJghSNww93xQqSU6pDPuHnbc4qb",
  "key6": "sJWcrbe5pH6TjvRLhRF5aVsNx7dc8ZZ8bGW1235kJ7QhpxxkukEpxxfh88LmNqfPhQQMxuQc4Q7MJkA6w1cvSe8",
  "key7": "44HRsM2ofLwwPMkxMP3hioRLurEUWMnkcup446gY5ZgMRm9Kc9Jt1CudjkumLZ7uLcDb79nsNAPk5cEgVCKeCcBe",
  "key8": "3894QvRxzCgRBnzUTdp1ReN6YYdFT2kM7taW52Yj5cNnn3QkebNExwvwKetfEEZsXQ52p4MRqayM1XP5NPZxGrfy",
  "key9": "4B9xUsYiSMynBwD4hgkHyVg8vEJysUHZA3S7PHH113earFtaTnE3ZrpK2gQwU2s5QoKDKBhT8oNXgSJGawjKgH4i",
  "key10": "9vQK4fD75oviqf8FxVQZNgNkzuQCBTaan2iq7CvZZF5amxmEnYpTxrZub6AUFTc27GSFndNxdWK5Tx79zoL686B",
  "key11": "6eVnJZPCMEbBNpBjUtkNEbYHuQEj1puqB2UFziBGdgNAaxnj1y5wkCKqJY68iayu5SHLXcEYmWcPS3o4QZpLP8D",
  "key12": "NLLyW7TNsq6nswyfENJF1Zs6fr6SkxaY3MJLpA6bxqt2BhiPMmRLJkTF96URsjVdhXBCpxmBYqrEQt1pJ7e13He",
  "key13": "3zFxUMDuermp2BumsZMPYpKY3cizkiqBak6EKDwpmVCbKqdWhfBvqmwetDt6kXURAHHhpg3ht7Y3oCKXLQSX193T",
  "key14": "6299Xe7V5j132difcsAZcedusu6ZAuYLmNq5rauzB7FpyBsixGFwNAaFTwuw7UmsqXvN9jTsTT9LdzBfZAfzG77h",
  "key15": "5yUr7UyNXFFmYUaAhzgcagJPsc3RpqLhWSKfqReAHcr1dFyQ9Uc7fYd4cTcBSW6mJwpisjPPc4PzXQHeure3r8tM",
  "key16": "4iyYwW2cVufNAmb1Z5WpF7NLhfATmrYFMgWoVSgPDmLqnqqXPmchwKL3FguqU2CypRYgsmPLAH8aySjDmYJzRQtV",
  "key17": "2nH8KHGk6wKRE5oGnf7M8Jmr7wR79YGT4KBT6BcgZKktRvJDKnLgYYaJAkPv41Yq9juTzEs2KUC4FjmPBoGt62p3",
  "key18": "4WTy5Ww6keNDHyRZ2E4iP8ijFqyxdTonnwG9pPZNivdvAH4KTRgnYyyyZYgt4wa91xsLZd3Jz59Z4pku3fiGtqP7",
  "key19": "2zJSHk5QdbDTWFsgFrRUELxYD1p8VfWQWZ3gSnqNQFkBiHgKpfb5pTcE74cCPeGY76st3NLRK9rp7JUsSfWkhm4C",
  "key20": "3FyQ5Vhw7NgBwxhJR5tn2B2Gf9v5HuCTzF1jfkSZHP1GL7SrhbfAsHiX4hwE4xLsmwSuoqyWtgRtddWvgAvPKbmz",
  "key21": "22xP86JGKkdZzRJnReugF9ctEk4ExjXVTUrvxBXtDk7sTFag8yqhqg7mc5seP33gDtA5PfAHte1ZmyohnNhQB8jZ",
  "key22": "2LNG9ZhCqJybX42jkBdTw52HN2rrbp9wyMbDmt5CPCsJdYvEx1hqJmbXWnJouxEbBtCN11fBCYpgn8dfskJriacb",
  "key23": "4hYkwfEDPVS8kmU1uv8ZQugKJDmcbY4sapwkd72cRUPbtxmdfZev1pxu9W5kteojqnzhzg6Ts2R4wXfCFah6Q7yS",
  "key24": "2X3E1TnndBZh78YVD4PmsjYyrcbpwFKoE27wMCBi4FZSPcreCGbHEV46BqRVFVheTEHL4fmRdLCgXdYiou3772N5",
  "key25": "2QutvotjhNnNkNy1KWqRnzaRLm1V5SoQoW7u9iohPK6SHFxNCvjCTNpnmpmxwA1Pwt9qBYCxZpEHNENGJ6eYxW1U",
  "key26": "3qNgD3xLTb8QKdonDGdivUPGCNhQkqGvW6pPPMSSJhUep8nAvN7jXg8G61kfJBmEQjzXfm2yqjNQULjBNi2BFecR",
  "key27": "2VjsZAMGna9ptJ6r4bEbSSweMz7CPmqvQh99JWGByyfuM6FpmpK76VqUG5TTCbAoNdGiy5iBNAS8v8ke5dn6Saka",
  "key28": "5TkFFK1xd1G65Nqiwr75bwpSPXUyKMFiZcWoZeQf1wpcrtGrCZv8quHEd2y2uGzhdvoNcpqDAf4iSTZUYDUbb4hm",
  "key29": "4M7FwZMbEyFwkQArYWmaQ9qCkrjGedtf9U8LcXrLrUN2LSHV7KyT4j8Smo7f6NYkmvvgj9H6ejWy65so4JVwoUnz",
  "key30": "axpum4T6ojCNG4p7gGXFrqLcgKyYrKnefSi7D7QAxLF1N5LZ19HwPqwcBGfaGuarwikFEKFaZEURKfSbv1i62NF",
  "key31": "2QPYEALEiaLqD8ncAMDSbqGMhj1SVYBz1Z5WJitSHM6e9yRLE9GrAaC5tFLSNiyXfWvHthdTe9rvA6iyEmT72qXT",
  "key32": "29Mx4GrX8qVoAi8YLG5f3uoUZtCMTrueKtmAbsAkAJHBojUTGdUfnh2FmfL3BSmmgHAAkfNrp6V14atJQdPjbDGL",
  "key33": "jAZAU41ZTt8z98doPRZwQX3FF9uY7dUDpoByxM7EM5ynF58xFYvUU5yc1dYXuQDiA8bV9RdtZyvXyGGYfyjUjT3",
  "key34": "243bEYxdRBaHY3VGVpZ2DJXB1mPnmTEfKU5nVVzEoh7cmfZpr94Ucc4uFAUwhsBEXohnNCNswDJydqM73ZGn3e6q",
  "key35": "SDiia7pS6gfV3G5kKfvo95KKdHMacfNTkvAnGKegPmPzRgjYR2cMhpQj3XMUsk1smcNzJyYeyQSjyKxSeLFD4mu",
  "key36": "5pjUZpkrzDLxwHRB8uERZEvfQyg8mkfe4fyHVK7FVBkFzJ5ETRmj7DCWqVGeorZEB3qkAUyZhX81dcnadncRkajD"
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
