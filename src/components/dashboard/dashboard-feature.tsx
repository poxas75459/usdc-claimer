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
    "59g4nnabPuL94nRSi1JAFAS4Kd13csUpBJe5dX2CS1NWFwFH266ZGZ7dkF9ryerwREyPmVpwhk3qK9xWsNrQM1XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLkDvbS6ewVNGLLivSEXbL1GNBS98eDd21QJVsPaVkS219j4LAaVWJBETBYXRBsRzuAfn2UAcJqTvSok3yMRhw1",
  "key1": "3ogmDMU5sHr3BEqZr3kw3yEfEPq1CwMEZAVYZS2frmiJuUJXMJLkuu3BjfPik3EBqsZVqEEJBFgy86Z6pGfs5rVm",
  "key2": "GsU9kw45kezvanTVZFbzfnfsMKZGyPD63Unbk5bqTREivftpqVrmH2oPJCSguSzMAZBrm2adpnhnadRhapbPTft",
  "key3": "A7zJ3nztt93mR3cZSkWh1Te9gt1KKC22yZkMtynRNucJxyd2Nbf2vdeGLzPoNhk5zmgra75YNPSdEgeatz2BZBH",
  "key4": "3WFuj6qMyKjYi35p6czZrUa8Andh2GDEx7be9YBV6ytKUXdeZxNTasoWLLZPMFt6qbdN21WJGTbvfMnA8Xi7zq4g",
  "key5": "2TQrHDtzVandqWhasJT37658VEXbt7ZrRBgPCL5zmgKT6CEEoAMw6iy2tCPFHrpE382m5AWrdaNubGWCFDuH1k9k",
  "key6": "3ENrrEX7UTWhFN9RgvKMdnV51oxC4RAnmEm55DvExU1X9bgrC4UBRpnJA4DqEVaAHE3u6XZUm4BQHCDSoPbKfZDG",
  "key7": "2ZWT2QWZvgSBgUGtfajAwL28MTqf8s2NhwfQANez7G6L752rFVBDFMGYQY1EaavD32Fi9chm37QXc7r5MdYNd8mN",
  "key8": "5Xnocn3fuQkH93gYXYXxRVrnHfaP12g6B3oPJZTKcSQDCL8c627eXPAQMSn8PNDups31wmuCrBkBFiDxpnxH9VMk",
  "key9": "61yhs3XMhSSXoHqJcxuVhquFZDZ4dpwd8Gzva2dQ1PBzHz1KCp42aw4SYBYa5F6NfY2mrmQcnBacPRLHjDL2gp25",
  "key10": "3maWp78MCusskT34X2AquN9DqrwvTCd2BvkzdYFAKn8xw7XNTCdL9CoWUfa6rowah9CydEcDDdaUWb3wALcMxgpf",
  "key11": "66EzQDyS8JpuXVoeLsqk5TM4QsH7NJPo4LbBbdwn29iRAv7rWfBkyWQyUKYCZkR3p4NDUGLVkcMw4gyQrwKuFFqX",
  "key12": "126z8VVfHEneNeNb4ijZ1Hsa7Eq2oW5qhPa6nbc67FyKgm8yigSB4dwHPX9n6T1otzeUFDzyUxZXbQfx12ibbdXW",
  "key13": "3Dc85W5MEMhqHG7HCUZSxHfCrxiztYV2oNwCGHVpmxe7wahvvhUrPqRysVNdqT6KJRy4SU38ehxjv282QsWSeKwQ",
  "key14": "514WZCZiRCQ8eUEXCaEV4PTQapt7VkNJCBHUCinbS5TaJC6Mvjw4RfHeyNSxC8CEroKaTL3Rw1zXTyWwEMXvnDu5",
  "key15": "4hysjQntHXxc966ZsCp2jm7zsNZJNFHefatMEdm9pQ1xngAc85drkCTvUeRw2H3U9DnXfB7NypXzhjcEdrMo5nB5",
  "key16": "4e76bW8cyPKskw3Vqv6h8qoWf9L3rMKidxBY2VXnbSHhiZCYtyGhs8E3fYHYVUmzJWd8Um7GJJnpPhP9oCHDsVFz",
  "key17": "Us8Y51Jw12JW1BZk46tpo32xKLU9RL6QZ9yS2q1dh2gWggshnzxNXjZXRJ9upu9h5C34kXJEbHazGfeKN68BUxc",
  "key18": "4mymvwLhMaEmsu3c1A3cYK8AnEGJiJ1Gt52a5yERfc8WGofbrHKATjTBKfucVWJerNjc1VN4wTbWcYpXsNmSD5sK",
  "key19": "xV62rSdeDfbGbvDYxrqWwjCVm44jtbwDNAcSCkc9xcv5sTAzUeLYBPxHdTZjaA529MxCxxChNRMzzPXSShbczhn",
  "key20": "3saUTVm3tqEoKGvZ3wRwbQXuBXHvH612PE9bhrKD3yBtAYHBEW95z4JeXZrze6dvjkqbjuhHMCrAmTNTB4P8uAYn",
  "key21": "21tfg3jvP1s2Lv9vL4Xiy5i5saxa91nEVSLqJbKuvzGLeBN72wBhoPivUnVpjRuM3eVbfq5pYV5yvXAvxju4eybj",
  "key22": "3bdYZRB1bC9Nc2j7tYbR8zqgjjyGZwwSwsHy9L2V3ZpAsyBzsg9fxuJmKKpS6MmxietD4zuaTT1fAhBJdEm3uZLE",
  "key23": "2jc4ceE51DuHskUSDDc9zUhySugX82CTTkzdGveSWp3jyEL7Q1Lja1PFTifau2Meq2iKtJmLwPyUMW5w9J4TvyNv",
  "key24": "5RBxjB8VfiKScSLm11wY9gDaUMzFnWLzCyAAgHKxHe89tT4KyMVpqURkoQBXRzey6qotQLpKR3B42iCDTRzCWb9U",
  "key25": "3ABUZCmDqKPjt8GNcfSH6GogvFpuEQzrtwQxNtJizMPT2NUX3Jj6HRvmNRU7VxCxjJp7vBNKXka8375UASzoTWNS",
  "key26": "2VJWqd53aVSmuErtQjYM5iXVtSRgAdAYY5caPLHTd1nHZFwcsu8TjARAWGBFFiz4GQNoUT1VE6dF9Vg1xWSpPRRM",
  "key27": "3FMR6tLoEPJL5EQgCtFVRgPpueEg8aMiYvHTVfM1UzWCon8W4z7gwdaSS5aE2NjMKpYbUzYyruXWR5HokLoEp3gW",
  "key28": "4CcAuoHNkbT3Mk6tQya5epMA2XH5VXzb4rF62YzwNDxAhfuH9qwwUL1Skfrr9j3TegH5v8dqwDiRto7poNRXBEsd",
  "key29": "2ykchCXNYq8GDBDroQ2VtNM6LJzShT9GaiQAp7WqQZn2gP3qFsBLs2kDqfRKYGygeuTFJ2vc8Y45DwePDPMD5iVp",
  "key30": "2UUJkB8fTSZXitagPvf8zSyoLUyEqJwVTcJ1HHBu6KRwh9K3Fy7JmXehG51K5pS4kpmhr8fU1TaLCLyEDjKxYyiU",
  "key31": "2vF55XGLCPgo2LQxFxAsxeD4V2Gjb3zUZsXoe4WEcDfPsnw9KqA3fvq3tfg7qLWQnEavAJSZ45EMYFqyYW5duDXw",
  "key32": "3gDQhTHtzsHqQYZztoMsnwrszWYxvnENcpajh7XEofVgU6g28oCbnCtzF4z1gw5a6DbJ1YSGLD42oYGTKyLD9fnU",
  "key33": "WiMCUDLJEiuvAqy88fAHJ36sef3ibPjK7CmBfNZ2CGDVvhmQLt3VpuU88kcY2fTqks3p6wfozpUzosT3YcWt1pc",
  "key34": "4PAhMa7tZuEne8vDmKvBH3wKuDEPNynNriG7yNtsxUH9n5ixdpr1PtQpybeNFvrzc5zMnGnMxyUTiPAW1EFgRpmi",
  "key35": "5kTuqj7YJ81TUqTRkPviYYsh7BBYGFwhJeAhk9si95jjxtzKi6SGoVGJfmqqpptjYZGbjQQQExTjovuRHpu67dn5",
  "key36": "5nmZY3tFh1C7tAujxAq68J8pgEYDVotcsqcoRRTaaTAq7gdvjLE9Hdo6FdXoXLxBUa74UzUSAZWnsMM4nYRP9h5L",
  "key37": "3QbTgSbJaCkXeDZsjc8p17KavBZhDGiueLYXWQisJ4hnG7Yspw9SRmeK4ZoRtMrZkGvti2fYtCaPRUxCvpZ363Rf",
  "key38": "5Wu8PUWo4gXWVpqepnCFaNJ3QM7CvavFPw7VZ3D9Yp2UnGLXRqDkX5NWxppiCPPWdFMzhMTENc59RfYirN9Rwt84",
  "key39": "5mAt93394EhcQEqyqd49dYJVt1VmJEogExgk4TjyAizX9cGUUfidNbKPqS7q1wjrxF9T6GyMPurqEdTcTg2wmc8c",
  "key40": "3kpAe4Hm1fjduP3DUDfmS3nTsHJ8KH698p7p2EywW2GLQL5RCsWo857PfW7ZuB6KXpP2Vzz5avHcYvocBwVMpfj4",
  "key41": "3Zon9kF7g6NNmYMhDeftyXC9KTYWaiPMhcckrYADtRXRzHfTWVD7nwMvvax626Knx5zVjid4u4WqtojwHYfrU8gi",
  "key42": "4hNE8WbRbWM3FNXQwLVsrVjYHFCJFqmSgVt72giHo3CSpGrGq1kiBTyUVKe9qTKEarKww8MR9C7BtBgGBNuwwbSK",
  "key43": "4dCARm2iH98KSMeLJMde847EWwmERN7JmSKUG8b3L94ZGrVxy73eB4AStcrKhfxLe9oo91VjKjAgmeEAdRDTbnNx",
  "key44": "2PjCnHJmMQqwajTQyyaApECbTtv43tQZJgYMDQgAuCRibxqM9h2DuQdcjrGEv2JvwvF1e9ZfVhANjRiF91nAR4eb",
  "key45": "iH25jZdX4e9aFDewctPtic5Vxo337hwF45jHERnVLrjUMEUact6YYxKGTAzTWDYnxzTBZhnyMYcKtuXrXAFvWTD",
  "key46": "39kxL5bMeGJtjZi9JDjB7ehAv5SP8oqtN3enN6AjdPjL1H2HNXiBcZJ821BBPkzk328Ex1H6ensJ7Vktqp39Psm3"
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
