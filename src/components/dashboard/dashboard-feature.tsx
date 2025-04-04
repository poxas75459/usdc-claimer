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
    "MkahpZ1FWMcfVp1bUEJEJsdXdZLBuQw8dPJjeQji2KS2zm5jESmdfXEpbGdeTphsYvnh9UDGpASfHmLxM9dF86g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i85dygxj4VkVfDhVHYD22nGi6ReTmTuvMXAEZ5Rp8BoU8LwJ4GnLBDBHK9oDkYbExNaGB1JKRkK6RfXJGV4xeZL",
  "key1": "bTVNXxCVRyKjh8xVhfeomEpG7spHpAcKF5XB2msGfu2aM31zYtT94t4KUzka1adzmUHDaY56NRMHpsXyL1Sha1F",
  "key2": "5Yiur72QK9HCug6dPTHntmhu1Pj2rtXBBYKwx9w7Va2h2y3yBqVexjem86eFVfqdFvvqSbAsEiXfAyc6PAj67f3X",
  "key3": "3piHGHT24sWiNX3PGNzH5fJKaoVbdY7n52FeTMCUa7698fQw7NmZeE5Evw4wRkRNBQ7UJniFMPaBx3o34oRUamq3",
  "key4": "4EqTeaiXjhMoeMqQFYqjKfEvExkkVonyyUxGk5nCibLuVtENycB8D36FiQzaNMwu3DyE2HJ8hBmpbyJadaPgJ26n",
  "key5": "2zGog2SXCtzrCL4NFq92vDNNKHrYkZEgcTHDxzMdkSFG5bKwBrdb68YYEuUyobtZJaTcijeyGMWxj5LZou7LSBdy",
  "key6": "CQVMGNSdypy5ngCnJxA41KsnamQrCxMiSTbZaTnAmqFv2BinKM5MdRehVtYPcJNtGSyBj8LXTGE2QNT5WLE1whE",
  "key7": "4ZygZTfzVRe79uEDHHDeoUvKQXvkinn3xxyyUcWeKV1k7VrubLDYUhECkSbwp2qBXk3r4zGCWJvBKXAmfjiSzUAJ",
  "key8": "WZybG9wtNAx6mmV87WnE8AsxSVTvCm8DY9NVBficFNEu4kpnwXKnYC3CbjBgxkeSrE3DfHjiDuvbmcudNY8eXF6",
  "key9": "2uzWKEUZqC2ofAY3guTtLkfioJCJfLofQxgETx2Qi1chohHv3diPJAT1q45AuKRQepQW49tjZPsULYeWfQZnTijU",
  "key10": "3PR2McMje475trk5S4mGNyWu4b5XpbSGgZ3VgAjE4FUQCKikGgrbCc7TFZvsTu1KAwV7ni94epirh8uNG8CiPVHx",
  "key11": "43BQdVJPgCyQUTH22MuWDKL1vUZ9GE1M6tFqCKAjWQb9QxrMetzju5jRxviCPrMtMHkvcR8gJiuHSEqhBzudMcrB",
  "key12": "46qZB31hdWH3go1hvyTEMLYEyNmkTMKiUd8h6kaK7x4TSDAZm4xvRjzYgvkhHvTd5xrkZUWTEFGASCjrwUo657Se",
  "key13": "3roEP31vxFjcb8nX3A9JiAMSvaY3R2HDpCHx9qr957SKFJ6wztBm7ztzcYy9bV1gUeChciUCaQ5Gbntdy7NaCGCe",
  "key14": "4b1r7bTcN2M5Cyx4A2vkoGCAkR4vojxVSdojBbCo7qvKSqKWPfZXT1p1VVyc579CwQetqECWAw2qLZDh9sZPAYMk",
  "key15": "QmVbrkGFwbFuoXzhWKDWiKvWXhTsUTXoiwuoaYCdsiHUrjwNuujGrsYzyL4bAMshUU11wgM1M82rpoc2zhMXCKZ",
  "key16": "3XsbrdPHcv8FX8mJj2Y3LUH5c1LmWo3HjyJVNTT5uxH2V7UY3hiX8GgXGHCnHmLD5FZEwWz2UTisfGSXyiJrq1pr",
  "key17": "4vR9LRQQq4e95KyAbdwQgA3BtiyEeN7BbQpTtTAop55BpdeLRTnPXx6gVJXTrDcEshdVtRceAUwRgAvc4XHQGGBe",
  "key18": "VniXDpRPeHhsFyBSNqxcYBimwEJD3q6kBx2GUWQ65UeSe4XYx2i7TLaLaU7k68t5N2n11kUyy4FfjqT6ESxj6Fo",
  "key19": "5LvCNWdoVnQbWVVw4LkLchsFCBT9pqnWZM6AdXrsaRMnhf7vDvxkGebcQ2SVR69qL2Th2Yf1zid8GifRyuyrou8P",
  "key20": "ri9oCioiZ5YrDQbt8vG8W6JvgKg9EGEe8CJMDqk8z5YL5BTGzBpPsa1zxNgaARnVDaKCSruMxMZXKKcuonNDSC5",
  "key21": "52N7shKSz9F2PiMHs2uS4uRw3Y1tZCT48akGtMvZkTMfbFHpAuU5k9PLKnXA4aQ2SgowXP9YFQmuMSuGa9pYymrC",
  "key22": "5y2Kau1hN7VYUDutwx6v7h6LfgC7rvCy165bstRbsDrW7q93eoF8SA5Yzay3uEPzjDKpHPAvdiHiLx5N8e57n5HH",
  "key23": "4uJDWg2DvjM9YwqPG5wpgjzun8cXDjNwXQBmQMFxnP7RAtdDfCJZYsszBAikT1Ka6v1zbSJ5AfUEc5Hppopf7UgT",
  "key24": "3c8tBd85DVipEQLc8fM4FVi9pYTGN2NuExKEt8Ze1bgaVcTWG2ycTNFHvt2kDqvgk6X3Bqb4KnEWVBTq52J6ofhM",
  "key25": "4CyKK768T7Uuq6qUT6s9jwWNqzBvhdDMbDun52rgUR5dgjxTviKnZwChc2XT1xQkcmbRM5sY8nxDqZqW7QKYHnue",
  "key26": "39QUV4bKXDPjETXrYsj6YkbkJgn2w9xypnPWvCD8EDGi9oVPN1utM4fDMkLfEtvFKb7stJM1m2Xr4Gf1dVdDRT6y",
  "key27": "8KAtrL6UgQaQdS97HbfDcJGKCtYR2xKeDtekWRq9VUzcNN4EFE8MS6a66XMA5wECAY4QHenStRaa5fmx13Un2He",
  "key28": "5K8uXbdfsskxnpMtrQCFviSoN7u8YtQqiLTLe8iLrGB7HVGPphyZXvrwmL1ShBXxg5CC9QLuKoqEeUGcsbEYtm4C",
  "key29": "45E9Shhi8eBJT1rDBo8zzaE5nRPjmPvFwZBqE19RCFG9A64tKbL29TNGWC1xRvECU99dLTrAgL7rK4MWZYbBonYF",
  "key30": "4ot3C9SUvrkPTZEzX9fC33GmpcEjae6eptZYRWT4cTwK2bgJ4ex2DJLK9wZrJug9ziZnVYru16p6nJMkKwnptJJZ",
  "key31": "2DkXXrP22byFQ8e3GNtHr86vLQWe6BSS6PeknNNhaUoztdW18u3RfA334PsP5kQXvDYndNK2vzLrhV168NMJYw9Y",
  "key32": "2YZbBSo6E67ere4VZjeaAJTeoQPS9Wkgg9qw2EcmM2nVUgHVeR9cLVgPmavyHiCJYZDyxdDUjBSPXVLbLJVrzmMX",
  "key33": "4XZrtj9X1zZBv7DSgNw6JYMNdirTL1PSZjrh6a6MX8xL9tjBAnabCpRFDJx5aapmUm1Jx87moW8CGNqkzNN4yv8",
  "key34": "2TbbNBSiVDQ9vQTKyeQzndwTJ2bWhPFpki3EvEJqqA1p7hxCSWE3mYTYRQxobSg3qGLSwPm9cV6HHuizxhUQdbAb",
  "key35": "e2NJNo8rRNhoFFLSCQy5ynBAWyjpftPyQ6vFi68VVYfmb1D9KNGwuuYJemWTq3U6JCzbQeW7EdtY35bPWLcznM5",
  "key36": "3fU9LKMuUhJeCETikYNaqpyQSY3hATgm8bjSmqwMYPEsukVzhrP2ShsrYYNHzxgnpshYmxMsLeu2NtqrBcT5dBj2",
  "key37": "5XzX1aUXM2bWF8kUAVWbi7iigM3YgC3tRs5Eo55gqUA5LgryFNkkDYupUN8RsJzLFyKe15cWMXJuu1QVxqtqB5ZC",
  "key38": "onCFPzKoDKNnWCuzRp95WwcQ5xq1hrubFgsgKWdNaZnHhj2qmitqdQ7e9aMz1cuRiWLDp8Yz6JJxoL7ZQJGbJ7G",
  "key39": "5fb7UAirX9EMVBFeN8BgdUX6YyTz3cLpw9s1nGJuxg1WbtX21nDCJ8LyKBPXH4WV5JqYrWvwvHatv61oiKLFneny",
  "key40": "sLT58ccaGVngYAKTUu7WcVHAV5mPzJo92bcMRuvgZ9RYVznDeMNkPpaj2wGorokDifSqbjDZGaSNV29G233ShDV",
  "key41": "ZVB7ivybCzkK1utf47J2GV97g9MdLNuzMw24my6SUC2q2pg8PgaSYfv9qXHRD915ggjs4qcCyEDLP7KLpKaaPUw",
  "key42": "54omD5XUEXkyjGm2omRV78iiTfg3sSGrWBGTA49nPZZ5HwcgnSEV7exuYqbkYWewgXgmC8tpMsETHciBmmMxjwVC",
  "key43": "5okS4oQkJDdovJuoLkpVs75L3phkzLArEERNKPQrd4YFbj9VEyWfJHBNwYCKj2Af2jUD8bMo8hQXfeKiuVLofnZ6",
  "key44": "62cYisqQRD7wWCa3mzo69SJXUABuZ2ucpaYNGTihoMmxd9S5ok61aszkNseuiK4dtUeurDeMConJhe1kidjspbFM",
  "key45": "36BUaWuDY2Pv4Z7FtA3w78RSpcrjue7MbAYBgFnLFqGEwZL1chfagGn42cERo5UCBbg92ndFvWKZPfaDC7KGH1HC",
  "key46": "2Lqpo6QFwDyPYbTynuu5nvXD82N7xmKwFCW7PrGK96JsFMeCH7yp4jgGEfGghUiphLGJbuHJBoJSLm5GBYa48yKG"
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
