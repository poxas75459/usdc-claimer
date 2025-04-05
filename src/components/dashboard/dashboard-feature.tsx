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
    "3HxGy4EfPCjNnYSQmFeVfKHxnGTmdyonabjuZzsu6GikJCuscFgaYCxF1LvgtQ29p2DmG88FLiCz4d7xXYjYNDZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69fcKq5qhDKwiNcjMVAUcapGc6g7RJ9rqVFLB5LkFjfg1AmCe9BJgpxwWaWzt31xJBJicHVRKGjNDwWSfrK3mpw",
  "key1": "38SwMyTXezasv5cyoayhVrBQLDwBeCukD19hhY4HBedJAe8EnRzRpFxNSozq1RLSP9UoyTcfpkKuiUPp3REX4BcX",
  "key2": "5QG3ZFuNWrmYukvWwTaeYfYnp8CXuMH4wDDAfkPGY75jHeLCz6iDRJi4ooqnhKJNMgZURx6QwZt5NDMVxJJwc4J5",
  "key3": "5k3CsATMde9Hb92ZuGMM7EQCa93TkNRVn7mSunoSrGVhg2bRnyksvgajsra13JHnqgzXoQdVFLUcKw714YDXSD86",
  "key4": "Mr2Vd7sNsyhe3ynnpn6GAFGnt8JUekJypNT2hSTxC2qvtEinwpYu2V27q8irvZhdtxJ1UuMcagghQFTPAcBEXQo",
  "key5": "2LxE7PGQ8aZ7iCVBdtKnXdBw1J7CxGfvDQXYZxuJgFG8ofeMhcyk7ZpPJb3hpuGaTSHigAWtQf9QGFusVsSWEY14",
  "key6": "on2wNbXZiNi2VsgJ7KqMEM8mv1op53u37QHLv5GMjrTMvU4nF52b9XTNE1SGbM4LM1cA8yEZRsq6moUsTNAvrf6",
  "key7": "5L3oQ4jStWFFdqZX3K8wARgSsjc15e7LGaUvHwZTGHGruZNypXfmdkGpvEpXNumRCtgBg7Y2QCK7rtCc4nRTAAsf",
  "key8": "5xFErtNfpAk6hVih6b9p61Cfm9WZW35Piiv6LEvDpXyf43pAUZii7ejyKTpV4LdVkrFeWRu7SVuyYErde4RjaAEt",
  "key9": "5Rc2sVAANyPkvHcGcH2p6JdPCjpsezvRzw6Wsnsq3KtrkhSh6swH8satvwvk8ETTZqRk9i8c4s1o3sN67tNfuBQV",
  "key10": "39zJaSZAHAGuvTxyhiePsuJPwXVad35TtUBcbEpCiHpuLbqw8DAPp9iywUpbWh2Sypo4FcNvhXY7F66nRNcMFjcr",
  "key11": "Z1tJHShc55sxFYJHbEctM5hmKGkcxJikE82hqXrBfUjFP3oXXs6h3BVxN4ueXnN4rG7tJefj9fqS8db8K6AKmDL",
  "key12": "2WxyzAWswiHtXRVPFyXqXv2ndEoUGtYLvqAmTySk5tPqsS4vbGEkEjJwCBzUdBQm1TESoU46fy6dxEVpuZbXmMSV",
  "key13": "2jmJaLGqSGsbsCUQueZKkX9kKkRtggeQm9cGsQobzPK9bEnZimu8tGYn52Fgh1j5crFESFPZ68638YamcZ4NPtUJ",
  "key14": "5TgJknpgfJjmFXA36wVuyFf7atNUBWR3oisPbFXratUwaEcWptFfVvUWhuGVjsKRfvxfKt2mcfGfErVmcw9eGDXU",
  "key15": "3SpCB6YobSGgwy1vhtQCS9o6guFB3E37TnHt1bCty4FmCJ4apHsaMFkZ8Cruckf7oCUdzjKTASi7fNVCqLzXUZiy",
  "key16": "3NPGmyZsdd3RH7U3niB3EKhJ3ww6V7Fo7Bw6nt682F2f48SLkZ7EbNXVcFvDqfK82dQc8QSf92gjT9psKdK5tLSk",
  "key17": "5j1o54yjFMMLC9jAzABvsLPVX9dpEB3TprUbQY9JdX8nwjR5rZDySwgpEvSG9UaEhkkgnuk5wFGt8Nmy9iGh2hJ1",
  "key18": "2nduhH3wnuFuctB485MESEr3Ch26KhTAtozyoQw9KFsmxUTPkhvshyLXURom2P7A3E4QfgsaNJRAuyQrZQjfSaFi",
  "key19": "5dNJ71poMvhMqMsMJXEpRpqb8oux4ABwE28Haxab3Jvu6J4cpJ457J9GBBNkBaL3fpt2hCUT9wn7KpjevKGdUvoC",
  "key20": "4yd2CrhnBdo8DSKQJx8HDDWucBnMGYmU6nyYXZgNTiG4UUrj9iJ5YYX6FbhV92BUTwUwAbbJNya2iMHoGY9dB31k",
  "key21": "5qPWyjnjj7ZgM1dLT8xzVY17qJg2MyTizYvNxABUA7BHV1GaarSNKTjhWQnzGVPAuMfNWKWnTmCHNfAgt2VvaSuQ",
  "key22": "2rXCqt8KNv5JBSbu8pBKBwF9dMxbe62PWEm41Qx1KMtuWSiQhU9mzfnLVnu7hPgc1rt1z1LF5B6uZyyBJ3JAqSb",
  "key23": "52ENPXSojbyo5rKDo2CQ51EimjvtzABkd3QjHRPyJ4wMVt7tRS3e51LNMGvNjoVVBoLMgAB7J9xQPf4LbHEcXrCG",
  "key24": "zFJPwi3JG1u4qKXVTh8cyzBsUJSroDoV6ZVECt9bicEm7QqaUc6TWYvP4sm3N2cV3BJB4ErUY5Yuu6TuGVB4cQE",
  "key25": "4Lk7TUge12g9EuAbKJxRpBrsJ3NC5pNimkNvKDKRDme4wbDc91HMfvq3gQ338KTLewivFYFofADsYn7tx6Jo5jNF",
  "key26": "4vmrpbLS7XgxD8ZFY8rVdeEjJTf4EQ1CFDPWCuvrEiiLpgD46QN6pMJdundHLg65GQnjc6i6QwNdTbWqKDRJ1vaz",
  "key27": "91HdBZVcCdxrebisd3t2mzh2N3qeZc1wJ4BNbr7k8rhtvb9hZpBHP8Gs7n9VwM8bXVDbtvFTSJw3QHV12CztH5a",
  "key28": "3tbPWpd5G1os7Sqaw9Ugu74GXJUjtVXNsZc5mTcM4TH1zikYKzTrEKpx2p24419ffZXWDAcTAmVyz9CVZbJZy1F1",
  "key29": "5rUecRrN1YC99b9XB3Nj8rKkNM5hPTodvwsXCaWgRoTNFRsLEfA7tmwxwXsctJRZL8qgPTayp33NwoCuVjYj21jw",
  "key30": "4FKbcBov4cTXCMdpYeLUUKninTHWb9tWZt3vvbw3VK1HoApCvzJ3ySdjdcMduRfmC6KYeNyBnaQf8sgjfZD2R6qY",
  "key31": "4AUydm38NJyirkzJHTUpqnAZWRZ7bnUvT7YjUQ5yc9F1PsmRJtsY3wp4s4KNnE3M4ar7vepjiUNGgjMsDA5vhGeB",
  "key32": "2NUA5YmFb4shhutCe2VDioExjWJWte4xRytyF5LmqXHagBvtHNFekkE673Tf8ZBUFBADHrQW5Djqi9XFqUvND31z"
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
