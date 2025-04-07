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
    "2D6Tc3T3mHd9GEMhwafH5QQYZ1xQwEPmr22HCgGBJKC4erF49uzQ9UCZPDbfw4gu9rbyyEfdzQzkM5oV9SU68az9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BX9CingW7feW27bCWxbCmLKYcau6NAg19kF3QKU6mL11uRtsTkZTzGdzJEmLeCq7xRveTodbk2WH79PQAt12sqv",
  "key1": "2kKUgNysGgEuurvWE1YctoXH4EXtkEVLFZdfLjcg5vjtcx7dYNXuaYoCd4VbPErcfuVdSGsuXBvvtgDux1hPduGn",
  "key2": "2GjWJgyNYZoV4N7hJkyr28SAGwwBp95E4WaXRrJrXmX37K1DTteMQtrVjy5Mx8LYuqnEsFHYoN1eW8jZp6oEtXXd",
  "key3": "3ZeRftm4TdbpNLU2bBSQ2nGjtBFcd4iPqKTCA2SsSUDNeSWJcH15MmgP3smGVG6YDYVtFqHycyjUzBMa39bGhrmz",
  "key4": "TtutYd7oEqwTSTptwhLg78WfmoRWBX3juAEKcYKBUhkbXzbuEoDfEpix5FgxXH2S3HUQXHbM5e7jMzBtoGetrZY",
  "key5": "4NQT7AeWnYuWL8LagndKozPKRCLkNf3HjMTUSqtkUtQsAMkoS8fgGoLFVj4BPcsYjvPm7RpD2tugWnRd28iRBzMy",
  "key6": "67ndewoTrXYNAq4VYuRheunSxYjJPGYyodgbEZwxsUgzb42snPReLN3MjcwxbumrvzuC8WkVCiBvYhuoTPBxYNTo",
  "key7": "CaePMT7We3WdVeugHQSecid1mStgPMg7C9YNC1fng5T8MhRYdSFV51pCx2c9rYC9QPRU7LZiHLzYjD8xwxK9tb1",
  "key8": "4a2354hz1xfG5zaWvVMcutvYjQe3zjgAVYMtsAFSjC67UQRDuYBjuBQ9mqq2Ca7fugPgWvknd71edjyokYHeSyPo",
  "key9": "2vxaUiNvJ849qGKDyBzL4oGsqipjWkkRBpEPyZupE9xauKTEyJbUeVdj8CFtaq46Rqr7MaxKiXz2zbQqr5tmp7M2",
  "key10": "UgAF11KgwLMENtCVt34sb8Hq7zJ7Lw4vox7QvY3z7kWdpPJb1LGLshANXGpixaSpvgWEXS6hcjpgYrXK5zpX2KB",
  "key11": "jK2jdYf4SnwzkRgyLp1kobvUjiL61fGACxHbhK3EjGzXzyVCGCPzvQBePKLmrEzHeHhCANhrkv3z1znCvcP2ybH",
  "key12": "637Jn12iBUJdiRGseDFaN57zBCNGpfedQFKM7imA6ffB8nhLhxigucZyQ8AkCdUrob3G66H7AZq6m9ZTLqb4rNoN",
  "key13": "KMdpnHN7n7UFemxbstJ6qDZa9uCFjRByYmdLLrtPSPFVe4nTcpunBWF8HDkWtjuiws5ygJBkb9igMtRqgRqbAKi",
  "key14": "2jrCpe7PmDFF9qZW58sAWNghxuNSyKCub8AFC3f6WzGuatg9jMRqfknLAXSij8M3HXsAJCYBgwDx4EiTCyb3s9bh",
  "key15": "3CxvrrX3VQ14TPCKRPL8BfVW7DCMbw6ZPAB7eCqbenEAjiuUKKsm6BG4Y7fdhy7xM3ha1uYSgX6e9fcqrnuhKqqt",
  "key16": "2oHidBfFKUP6j2MwmYudxTZHkXumPdTh19sriRrW87oQqByjyyNcg1TJWNBT6FQ6bQZv6BezF9aSLe8xnEipxb6j",
  "key17": "U9EUvj514AKyQAU1RMyU8KNGrWTnD8y5BxGeTWdf1wdNaJBb98DhCqpheurY2tcNk1ouyvMsG8R5Vja9fUq3dcG",
  "key18": "CHoq7qFi5R8cfqpb5YJwEaGjeRhg54jWDhQqPBG7k9YJ8ePwQRuoW9DNW9ga2vCtiJuizvJzfmvs4NwSBUwTXjK",
  "key19": "2z9ibJ7cG6Y2A6ttPYjc4TnCCvKcVBmawVo7HhqdfyBZBoRLD3ph8vBC2bGmn5hXtM4tR54CR66WHHxHMPuwGPfj",
  "key20": "5moqLTZE5ReaGsrMptZusbGfEBgTQgGbeHP9dxUCnmVEmsnbqE4MqZXDFuNJez8Gys5tz6DyyFwM7RCoC3FFR2Rc",
  "key21": "3K2RCNDwoA8jAwJhWwFePGb8A6jRfMDt6e1uhtzhZiLCkuNHj8Ra2Nm9r9sjXokrZNdJ4PbFqQTjgk3wQd8cnFz1",
  "key22": "4bSXfYQHHNPe1KYFwipkczHxJZ8YctrHXMrGr2fRBmLYMzjYGejv2gYNUGCNcogBDJ1gsGYY69CanzCJPkJkTKMr",
  "key23": "5QHsSzBqAAbobUFhurYNftDF7TAhM4o99M7HsyhLDJ6eXorQ3D1nbqzmyafFRaWXpcsF9bDcJnFsaRxFxAjaYWfH",
  "key24": "54KBRpkBQfxKHwewGEjkB418sbi5F6BbzzFLeKf2vA85rnyofTVCBvnYpQrhjHsSGC4Jmf4ZiqFVWPMwYMaju1Jy",
  "key25": "45fDNbKPSVFpYdhtSf5B7gUQ2hwzZPy4TLE5cghk9Go5QgYXqfiNzD7mLABy6cSKVXxw2RWf1nNYBjPchQW853Pm",
  "key26": "bNf3FmyFQ1QEjxf19oJXK8dx3yyuAAq6R5synbdoTC4dQr9DKH7Y4JdncZPK9QNr7nmhzSsCFpymV6uVWkVzgdH",
  "key27": "62iLvoZyhMhTUyxkzcC9EqG71NM2G22tqABdAgoczLZzTZF3vPz1KHBWbRQnaVNmxgKtw6u63tVakB2isB8ZYr9m",
  "key28": "25SE3FrUNXZWgUArL4bywuRSbZKeuo8Z93xUHPtzjfxfhpuyUDGERLdPCpq1ghjtsLzZqHaknzxHWKQqnbGrdjya",
  "key29": "5grYPqXsomae3Y242veAck8JsSihpoSQFpLKfEjfYAPxSjVNcdjuMkmx6Awg3eqYQuNyfX1t3awfQrxuhPX3CNiL",
  "key30": "32FrdCCA5HjhPFbXhkaGpj3L7t4PnzMR6hCGi4bgP2jSrYG42V54Pz1aw7jojBToQeqQwYuoU4CiJtDz9dLNfXmx",
  "key31": "39dtNS4y8GXGBWUyHrh6Bggs4BrZwdadUwTn3jmb5BThi2fdzEH1APNudmRYp9KEVEC7JbuHN9DDFci7LfUC58se",
  "key32": "Jc6PRJ39P1SibrH1g8JjM93ZKqQornRFtYyGC3QM8P1S3w1f7mwMV3d1XGW6FueuUv3pXufseJQVwXYCCu8ajPw",
  "key33": "2jQh47XwrmCwVFVCAhXgVrTfKA6rjMcsh5akghywV3FUhkzR7knPwjDGFsWEFFmPFajsg69KpnpXBpLZ463TPa3s",
  "key34": "3YSCFsXt4LFwexu7UtYogR3vFdWnzzrHqxxcguCRybeDkMfcD7knUeKRHPVQHUpmxxg4F36cmysK2RxtoJosuqAh",
  "key35": "66YVxGhW81MnT5nYpsMafbTPXrLUatDWf5SXBb8yesXEH828FYhAPQHqVxBtUbNqbRqgmVJL6TC36bx8Uv1R85dN",
  "key36": "5pqJWA5bdqfUUNTcxHzks7Jd3k66PjeTYYJqXxe7YJsWohnt5MjKFg3dpVKLdbrfVpFGE5gLZg2SF8YM9dJc3wSc"
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
