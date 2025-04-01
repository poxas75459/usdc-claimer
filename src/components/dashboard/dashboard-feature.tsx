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
    "2NdTHigqUBqU7vQtzaKBE64V3WfVTQfKVQDgHKmbC7iSqmPRBbMBKBVJ57H2Tgr5j9oZHcyCdbdtVvDWoZzzijxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28eP2hzdNswGgcQ2R6PLTskusHXVKZssub6J23ov9rYvzCJeEgU2RAHkyrFvp6ijF8L2jyQsZDU7Vdr4uh4pBBwZ",
  "key1": "36cUmw99WjHHU9z7yByeuu6S72fiB2y27gKtrgLJCXFwFvupchPMjsW64MrHLRbuNuvSrRLkRqYmGd1LvPAhRUjN",
  "key2": "rnUDwcnrH4oYg2XuJ1AowTYXaRWoJG95NgsXt9jkAnYkTgnf66uHWFAnxVQQNm9k1VZqVujmPiVXCMYUyW82yrt",
  "key3": "5jmABvDNuY8nF9DALY1zkWVMrXbot1ZBwDuLr81vQQWCMinbAJ1b4cpTyNTjJUF8dWXfDCKkMbZ8g53u6hC2EoKd",
  "key4": "hFRGw6SLRvgAw2VWjxyAPo2trNNBWQwZUNg7ZG2HcnsQJYd7TDo813w6hyikHkffpn2xxrsRqGGm452GUNDwQCQ",
  "key5": "2nN43bPcxUmu6zJvhmBZp4EXLLBNiPp4Qc8MaaVFAjpYyznobkBoCKEtzogyiTKbpJJzX7SJPAHZb2STumqnUaY2",
  "key6": "Pa31nfkCGoMoZ6RHNrw9EKqomRxMxiRSHcK4BJnVmCRDatGC82BDGENbgnTVyCzvTaQpr5kv3ynjug3W7ocRSkL",
  "key7": "5QJfPr59PHYEnuBGtiMuGHwt24pbdCYmZZTBgrtP8cmRNw23HU5RJV3kzEpeKVd8FYpffuykJQaRNVPQqPNgU7QQ",
  "key8": "tZ3Z8CupChQkfVcJLHMxrwDbhNDzNaHX2ZjaJ8oxWZrC2c3kaJk8GbBEKe46js9QF8UvT94sydwkapj6XTrBiXF",
  "key9": "5wGTc4fcwD4gV55819cbZwsoZyVjerZeEnxn21NgEJHhPZwW2PmgP1VcJHPXeN1J1xPDepQhRD6QASR3E1FwWrw2",
  "key10": "31qtRenqv1q6g4wh9VTNeb9sahu4pRVaNRa9u3KGYuuSa7FUpCrtwKKngrSiEueX731mKCjwYGft6VXyreT5zcuQ",
  "key11": "5LbSKoppGv7AwGdp5kKB72K52WZcHht3Z222NysRLGCLnGaKQ73QC6RLffg3qDSPekyDq6FufaoZwFGEVGhRnPCi",
  "key12": "j5ceH9kA62wGZ4nysvLbi2CQWFSnEJG8QYKSCUMpnNonh1mSops3a2Fhk4GD9ZJxr1EsaC3r68v1YbCpcPXMt5M",
  "key13": "4h9GYrmwxBavoQPgrY8AkZMwhKBKihwvZBG3p3NKQs6AnD46R7oYyPTE3hrsMDJpbPQQzMxvVLmnrvYAb9hBFj85",
  "key14": "2wDvqxutrYhdR2jziYqsu2BHekH5XBe7idD3UHbkWPee1CwKz2wyisJBSZKQAy3JrZ6skzYHFwTesVyyaAPqSxhL",
  "key15": "5XDsQ52uLidcCxWqqBPifSLSF4SKGB7MrvwxSat9JCh99wDjAjhNYfBaxotvkLrtk3aj2fMbWitiEsJrYDmqRc97",
  "key16": "5zWrsiMHHhPCQdHiMB9Mem5HRQXSSU5Ze2Z7bLhK4NX9m6zPAg9nyEHtjeTRFnyZJAveUxYo5VnWYAGkE8i59iJf",
  "key17": "5baKnphpH7tNjdvHkH428FPuCpxVVpGHZWYfcqwajXNQxeLFcnJuFrQqncFpWH2xrrtSBPABchwR4XnFYfEJb2NZ",
  "key18": "21D3rvbCXeW8LcgB7dxjtL1M1WWheL1rWUCmPvqbZLrKQobnBrqWwBv2L7S7xEApHcRppqkCvodD9YoB79p9c5ST",
  "key19": "2webvz1YWJqmt2U2reeNDErrMwHK8m7VbcPC7Msv1CdSkzMnhEXHbysf3bRCRt5ax8C7C3BMEPgoXvnMgX98oeeN",
  "key20": "fW4Ha9VFDC2vdyvxaDrEe1paP1NesXEkSV5n4YzsTqWM8NHSxc2rxNtZW49NZXHNbzS85FR6LeRKKykNQzmFfps",
  "key21": "4edfztx1v7fQc1c5qpMzF6xQTAUkXpCpDz181Mi5PmdYXCpHdyLs5jmBRFxFZyn1w8pHkpa5yWDexnMPkf9Doby1",
  "key22": "Rnhc81j9jQvtLdA3aD962tNioSo6m1KnWnQLRFt5YrzNHh8JfkpQeWyQPrRLioBANFPyXyn7b2tSPVTdU7TY7er",
  "key23": "5jUwnAVxiN6XE4bzgTZVDwDLj53wX4tQmNbuTJwsVSn3hZdtMNNLsLm9o2RaCL8zKXjCij75qb6s3Nh5ipQQFbTS",
  "key24": "3EhHfP232fY2EFoXDuwv3VCZa6ERgscN2rUJBbfhkSHMS34PqJziT62LSj78q3Kj8Sxmyj3iHiYwxjS5wnJvf7s6",
  "key25": "67fFV3Ctb3sYnJh927riU3qUrxN3SqYPqCKCHBBMZbyz7wSHQzZjde3H5YjnVPp48kS7JMDa6fPmMQrnJqhM75p6",
  "key26": "KeaXghPJTHS6YFWp1uXCSr7GUofBZLEagTx8e3RNDNGw3nuYZy2gidzZRhLFL8vcKcizG3p2ZZwLXWC53Kd6CxT",
  "key27": "5daMGNyHegFn9LeprA2xsK9RX2NpEhWbfLw4gXo6w3cads3573Myiev2ued6mUZmhbu4SFpm3G1VDn3DdV37p6bo",
  "key28": "MktLmqY3otw1Ydgb2m6vk2wJgecVkyuzoRdypb2nkmeUcRnfbH5b9FGZnNb3Y7EZRRwLdCPuzgmGDKegrbHchSp",
  "key29": "WMAEVRWr3Py8rbGdwYL173kXSH4fnhczTkpaiPtTnjFs4Buki774kA5sThgW3W15NFFBbC2Gr1wz9R8K6Yp8vso",
  "key30": "TJfNkpqZPxXVmPoVWT32ovqM17Fe7YdnJQaapAk5W1xqYBmKqdjSfPeeewaemF4J97AuMto6gJJBSQ3dCb1oFzr",
  "key31": "LHuzgtd5K2Hk8p7nxVTotYeRbP1CwL2EXDHbpdQUX4EbRB5crK3NHCPpxAUpea4r8m178NFzFbR2GuUGTRo5apS",
  "key32": "523TxZbaF93xjZayWGbT28G6QcxoG5gEzGKzqihCa7d7fPfAHiQ2mAseEukQBVX1x4oLkafKUymronRs5jzAABY4",
  "key33": "4Bcs4TxjgCRTVstqaX8Tk7eEJbNZ1uYA2Tc8u3b5kpMsZQ12MKmjeYmCSHWPw2SNjAhCfDkXs5n3gDfie2ztiLy1",
  "key34": "2ptWEehQmgZCiRwm1aV6UycGpZwen7tVYecjLXhqc2dxF2eitn4ZbX3MLeV9H9PefBb7qLTR45Vv4qc25jZUkNjS",
  "key35": "29ADuBR4EGqPQd8QEVTXz8bBtYMPzvB7GCVJn5E3Z5sPqb8aUeY81EfxeingvYk9FnjBzLxXTaJsNCRq9uZHSBSA",
  "key36": "4yxdqjCzaThVmMkRFoA3j2nu933DRZaokoNWbgjayeM9sz9CUdYdmZrJZPabVC7yiPneT89jNtxpAQCaQeeDNxNW",
  "key37": "5YvC4jeZNcrpH9ftng5BpoRFjBAQNSfp4Xtf5rfTKtbkQZtJiMNDqWQLuad2uUh1mgoDAnPi3ncW6dvWKRNQEuhv",
  "key38": "4LRczArJj3RbjvWq37QhEJJ98uUqhUU1Lzq7hcA8iF6Vs6UYJp1WkPscXGFd1ZBuMnoy8ntX9GYnbtHUKt7pcbgJ",
  "key39": "3vfNvtSGxmPiF3HncPBPCrMZVVDEJsPcjCMupoM7vhaYezBoFoEmKoowPG8Mp99vP3eLpjR1kx2QQ3Uzca1LSYqW",
  "key40": "anEWCTE3j6No1dNsTdYDGgiQnQdQuH75fnPmTcWNyPo59kcaP2WjWmd9YpEzf8SMSqR2pJisShGwQAk8cfdAvcY",
  "key41": "4fbQfhDmXnyf3mi9gT4m2nD3oPfQX1ikDPBQbfHqYc1f42snnhxqwAHC17UqQ5ToQ4jCjTGPzZM2HxvLX3pueP4B",
  "key42": "58CF7CUfk2MR3KkhjRtHYBFCPsduMVrkh3WMAfmN7E9xzLrmfpyPwNoFyqoGB83pToo8Me25fgHdnj6jQvj2QdN2",
  "key43": "5MrHRXfkeAq8PhiwTjdQcbRCXPTkkxagAv9sphWD6gnD5wSTih7RHbQKPs5UPUWzMhZFUnkxTGDFLjZzWy2sQpyK",
  "key44": "2QkpBiteVTC7EZviBGprC1So7g46oGhsvp5NjdxFhR4Mgfba3uBnxZhqiR2eUQFe4d9M3CP7NKTHmz2DdBC8pNXT",
  "key45": "2dHDMkrGJRGv3x6duxfoxm5LfBZRGbsKBNhVtv1f3oByovskF2kmHuj2EVZZPAnU8DdWrUsuFerTQpxSyX85iwXX",
  "key46": "3bVL8ou3TPiNTBVsQHaAggMY9XZdhRY9cbaJHqiZtKNZVLFmA3ieJuAfjJm3kNvxLkbpdnhza8gwH3X26fubpaW2",
  "key47": "V9wFnAg36tV3giLDeaf2TPd2h1cFAjM4u3Hcb9p8bkFZjQWUTkk7ij255QbCiQFgggS6N3Sjp8GL5CADYLnrNX5",
  "key48": "5zxPUgpsdrVKoTU9Ug9nPXtLiL3ezeG8vwyGQ71vGzN8y9hN2ErWACFLyPpvrdY5VKaLThaxb77rfXPNdXo8wrrn"
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
