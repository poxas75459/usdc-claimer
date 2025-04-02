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
    "mbja1Zf7Np33TcN7i3XAesDwydFQY6hpWXDQi7j9dcEVd65ke8GEhSgK5d7bSStYMyAQBctMqYsz4dNnVXn7Yu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VRJoYStN16fSPwWVWY3fuSksgPgh8TMy7L84hnbiD4x1Gv8h7iPBEeWWguNhZQjrQdd7iEEDbEveLLjvnTB9Hb",
  "key1": "R1Kpsrm5nTZyfZDNABnpbzvsWrNpEcggeDGzroo6gUHyfJq4VDuWkcbUF3wx9fbQSyVf4ij3sWFU4eL1gPyrxPU",
  "key2": "5bv4sqrqwwztYACgdp1LqroMp8ofmp4V57j3uWTVH4rw8PifmojxGiPGySirXVgDivg5nhYn5pmQgq4AwdczNbZi",
  "key3": "4zUTJxrZSyf8QEMoDNMjWmcXi7dE1ifjHo2qcqKYzkiceeryBBNUGSqSQ5e5yvTie3tdP9BqM1WfRvp5oChfVJfA",
  "key4": "51WfeQHfgLP64iCk7bGMZzVhwNnUuaFhGhb2XFy5zgVaHW4ZgAT7i6nmCGBhnGpuciAoH4qY1Uh5TKWmv6x5LY64",
  "key5": "N5QxTm2fgLuvQY7PKPMizMVsgXHwsxg6pw3BHupxgorZgNhqJGQQJ6F9K8VTNKeWvzXkTk7XFm4XBn1LqTcNAWX",
  "key6": "iasABbMbox21qMHvnKJXzFkKPXqp63h1qimdfNZk54koVd9ARZxgzfQbT65FqXfszAwtQt4LnS1GTESHA1LhXSc",
  "key7": "3o3Qdz5BZSjSuWBinwRmWgJhnbdcD9F5aNdk1V26QX2ypkvq3FowBSwFfuJk7fczs26X6tFwRVUDFNKZP1UME4DE",
  "key8": "4UtZQkjfqo9t2myR7rkb4Y3Vg6YtfumoU6k1UcUrnhvSsfzwDsBAznDj16doZFpgyPHQ5FBbQaa25394wf25Rcrj",
  "key9": "5Lz3CeKnuq44bBmhvSdLEooQsBtozBLrHQkLqqmat4uFfapvRWxaC48iECS5AhFyo9pqes5S6gFS7f4u872fiFTQ",
  "key10": "2v1JyhWXQNr3kBMMvLFS6fwGb2HiqBTiRQSVQTTU7RmJ4LzcvpBC5WND9Ga9ChMQtf4yEkMxDFsYC7sYWyR4rrm9",
  "key11": "2UcfkXvaFiQ77jdrMgnGj5q4Yy5fvNDDw46EoVkmrtfPTRY2oZphDe76NfcEkERMagtxf2aYmVi8fVe4QCGpcKyN",
  "key12": "2RdLdBmEHSVD7rMn8yoMz87mC7A4t51mvX5r67LHAfmEm5EpKVJU5hcb2gGKAZjZwpuxjSs9HscJdsjrzwDhGj5b",
  "key13": "2GzyocbDC9BgFP8pg4u6PDPVVeVbGL97cv7ic9kcu9UVi4p4si3iouXiwxLpop8LwJpSZrEFMiwnWFTiDSgWAnJJ",
  "key14": "4A1ar9fQdPa9NzmiHcjFTmouhoB7wFVZgbGmfLkJyKHqZzJ4vorwyGwDZNB59qgxs4jXfUUGG5JGG3bpf1GJKEiC",
  "key15": "48dE4XwJPjbQvewjfufLLXJAuE5C4RegJCHzzWPaoTJJHnafzU18KCojnuP7Jh2iTHWH3nmDLHXkEK2p22DALX75",
  "key16": "3ynMmTcpLhTxNCxkeZNkxVq6CM5hWfk6zShGwZdrCGVCekrnB5q3zLu31a4WJzWPooVg5LSTeg8LcWH9BzDzjyoh",
  "key17": "4CHQv9VVSWhE19jB9bHtG8dkjLWrYMssUMAU96Mg46CTzFNMcNH5Yh9emFmeQxqZZp1cKnyQF9TSWPDe1xTGYsK7",
  "key18": "pxWNDB1SeAVRbd3PWMynZ9qxZygnVXDPeDFrwGN1Zysc6giiSfboV8exjXRUi58MeuWoWvmacP59Q7dvRMAB7by",
  "key19": "3pb9uAkgqKbfKSkTcjTWXs5gdSkCaKYbXa4DFecMPuKDJgNy3UyyqHyAMiLzrqNLmBvGene3fkuRczW9C5nK1axj",
  "key20": "21xijcT4MfngS61vmXaFdfb7iYKQaaMufdCxm19f8uHQEbxnfquoDEq6crGByFQhJmC6hy6YQCLVV71nfB48cUyk",
  "key21": "67qeUTxWgW6Wm3vKEPpSi8zHMRXhVP8TXSFEmw5Q5vPNsF1pFBub45kDCQJGZrhQYxPVBCdyPyZfSLeEH23Ct1cc",
  "key22": "4GZV6WqBTteqAv7kT54ZK73easqSrYJWdtJjSkV3MVRLYhJ9W4uffYPhrUiVQayjk2QHkSG3MWqS4U8joRhMTyQa",
  "key23": "k3CKWVvFUzmKZdStoPUt7uhmnd5mKSC1vhjtmGkhcX8CcU3SmUNKJDu6SDVPPE92S1khsTtji5L8atXgCBVy6uf",
  "key24": "sPAXkTm4k2RUhPJ9vTZsjMAW7hk9AEDzAAdMgZ3trYjcdKwVuvwnkeuVvYWwaUpWdDeGxdGFQy7rzV8vmvnxDgH",
  "key25": "XHgWXoXPq36nNYx4gkZCSaXCeMrTuHw9Ee3U3Fs1xyLdqB4NMke46hXrqHwd53azWqZ6utfz1bhFjevUSF1RgxD",
  "key26": "3L3BwVEZFrqdMdZYLcP5FEfzWyYQwBEXkymfyip3GiKH3SHJU47fystteWgrL5cgZPuWVsS8M851JqSL1d821mN",
  "key27": "2Zk6E7KGxH7mkyVAeyhBY3S25gpj7q9phs8zNEH6Tybj1a8bzreTYP5cyHkjeKjtxTFHUT3Bgq1zBjh4j1HTsb8e",
  "key28": "2UWVwTAZpMH1jfJbyeMNpiGLhkwxbUmCbe92pJRtvrihLFxTMy31ccH9F41YAR2B3Yt55JTgRuS4ENhd4DXDFTVe",
  "key29": "tnCT48PFZjnWUKuBsYxogTxc5nJ3Sqg6kHtgonXtC5DSuPJMvxLgTRFqQ86DgrFQMtqGyNU4WocAmSkoqiEkt4G",
  "key30": "4uT1rziFie8sUBCG3b2eDdF6fN3JuLMGfEKk67BL8KEywPktUKj7s1TPaHpcFk5mkvyv5x4NkD4ji53bjgffKaRK",
  "key31": "5c7DApbuLcXJCeBET8vwDBLajdmmYYUE8D8gxPweDC2AtydLwmPgE4UNoGaRhnkWBjrB1k5M7VzgedDZ2w7WDYMk",
  "key32": "HdBZexeWmgpjXQCw7eq4BodM79pBJtM1Cri1CkQrzFBEXTJwSc38eQ2BwmcrVDRG5ddWA4FV4BmsdUZUGfkmNLW",
  "key33": "3upjJEBgL4tNaMkqokJhbWAFnBn2cCe9fSKVnaVedXJDS4GhVEpZssGiPBsWiZPBsmcnkKy2xSW7vH8LVu6bXnWK",
  "key34": "2wpgEPcTj4SFdsJ46onBv7U5g9TrkE137WkTyFegnpZ2r9JEtgBFL9TAh9SXVgZt8A2VWWg3kWCRxot4xmdaWSKk",
  "key35": "25Q8E1gxX1FTnp5WF2cs8V9rSyXmN5fUCvPXD8rBTVwg7a3ip64SYy8VFbzjokgYRnFhCqcPJZjaMzMso5C8xKiT",
  "key36": "59JR8dK2J8EPJtQLLpYh9JP6B7YeHyrYjjYSSvh2p5pVXeeFhvMRnCUu2Rya78EvmonVeBivZTXxtsgivFmsiCQr",
  "key37": "F6KVM8upNqobPPyt1kopuRg9gfrz66Y5q1Q6VoNzqtRfCHXSNCAV9zeCrNi83JewaHxNCcfX1rnsKYFyZNeDpeM",
  "key38": "2FPhiCNrdGo4JthPDsrZ4YxTW2FEyVhsdmdyuxbhf4RvVtSXXqYKfk6AqEhAuzr7tyMA2UWPxHFBW8zNKUJjtE48",
  "key39": "3dU7W188ynQ7zsZfwzAqHEZuPq8WkpB8VxeWZohpRkxdPF5ZR7ufgLNEfKYPvvjtqf3VW9J6JELooFqGzK388VoT",
  "key40": "3RN34K8mHAhs7hAgAZCqf8xLCFnRzL9Six3LAC1ubdprSGdQVyoKureBn9XSRLvYWNd4m52KBj3kJpQKnPcJbAKM",
  "key41": "4HC4fjZEoqQ3mVmmLexF6Gmg3TAgnreGJw19tP7mt9T2SjjBBce4v9q5jqvcwXnsBmmSnyWEVywwEjubBFtoYVjK",
  "key42": "YY3d75F7F4k5DDGopVBKNDR4ekeCoJcGVbC7uuBCPkFMzjqapUwNKw8oWK7nVuim4ZQxau2MuwG83xxARncNzkE",
  "key43": "5bbyJS3EAwcpDhoa5198GGfSZiR47vfj4MTuteLcWSLMHdJBZYJerWMPh9wLiGqTWY6uq66mNU4fwMf2Bq9M4mWe"
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
