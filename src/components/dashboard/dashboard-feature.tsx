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
    "2kMbwPKHVg8ipdLDscj5p3HtECyPBZVUZoru8icYJgWhYaH4MSJwYgTzinx23McLmWQtPdfQ9fm1XeTeuMN8uvWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnuEeePaz9wZX6ropEp1MdeCUEFrsfTqgnpm7vezQyGdkZMPWNnd2YqeT6jZTTifHU8zASETLJdX3UfnwNTjSbu",
  "key1": "4Ax5NaihXxSSNkWdXco5PoUrQzKx5zX2tobdeteicki3rrosYTHtcz9R5mRp9i7h1KjbCdCwK7LppSQFC2StNf9V",
  "key2": "5etkPbixytVMXnaNjqd3sK2N5USktjCiPMLTeeZA47sgBdn8wSaCDpTh2A6xY3p2ekfSm4mabiw1uKzALdAfFdCc",
  "key3": "55wmgtSnjEKurk5LmREz8vx9BX6iAJVc6mkvq1yCaLGpHAjRYHL9keMuMSNmcoxmPttFTrzF8j1i15tjYwCJd6a2",
  "key4": "45hwJiRQ3unHhu6yu9Rv9QdEwEf6TwSc79BRL4oKmfUJiVvpgphdpVZvUV4hVQ4JFrDXMBb6D3T1dXcHqRAcRFgX",
  "key5": "2bkEiYNokqCCQtw6Va1y1NnWU3nyyAyv6EtQnEbtDNjGkAcJjHTivCwSzBqcE1yQgzRjZXiNfA7rB3qaUTbT7Xzn",
  "key6": "3HgAJrfq294pUTqZ8URbSZBxophe2z7pXm4iiKqKL2vKJnsfnN6Y4WdKfDg9F98yjVq31bFW4Y9tuvqngxMHTu6U",
  "key7": "3HQnZkQ4kz17sx9THcNfTDSRSBPcZ95NoUnMRSt2Yt1aiRvL84FahbiV9w4c2k32FYQzmBjM4pW7HeG842KzrGk5",
  "key8": "36khVQPeE6WKoo2GtDxPsHzwMcHZkxwugAFvVTsLdmfPasjKxARja6YEsU4qztFbUDrk6MEXot9DSZfUGiAZDQAd",
  "key9": "57mHUdifB6EvWaxMAmkQuHY2o8U8V23qJ2BekB7dgnwJ9kCFXMtkW7D7J5oPMyFQiCuxoEiBPE8VDjrCfLsY16NW",
  "key10": "5wtU3Apy7eXjC2JDsmHuSK8ke8Kh9HBSzZwW4dfngkwYPwYiS41SZpz4qLborCMsf1hrGAi6DUzp1Tw4jFpqdLx9",
  "key11": "gCwNMws8jCegfysxKRFyrtMEu84AhJVmvGaJp2mMyKf6YrwCkn1MqPukYAU2m2ETjmJCLSs4h7ctUoRxGLE4Xie",
  "key12": "2tKbQ8Tm4i8gC23q3eU3K1tmb9AohrPw1uumUACHzUkbWY5TRUQpC8EorPfna18ZMzwq9fqD1r4aS1maSqyRYwuE",
  "key13": "4Rj6P8Zzm7qcBWbRDUBN6iFfzhqK1EfR7kFojqngk6pqJubwfWpdWC2DdBQP7xyC2HowzgY6ShqhhGMHdZ4VgMZ3",
  "key14": "5nNevzzTq9GnMTpyg8S1VCzZRQXnLgwc4Mwx7BCkeDZotZogaVphxL3XiTYKNiYW1EZ5P9vJA1J6Szcqy3dKDNAr",
  "key15": "4BMkh6Ufjg8RkvLPdzym9BxY9vTzvWUCxSD8vutQX3Q1ScbvKgk4eafE7d15i8u4VARCvGq7Lu4T3Fb8sDmHhrM3",
  "key16": "39rVsRnGQ1nuC2HdNLcJKGrLMci9HiHQfjiBXhDvM8ErAPuPoi7rUjiDCGAqRtfXFdi9tVytqLrtgbRRTcVcxxZ5",
  "key17": "qiaWRA9RFzpr8xARpmHRvYrPtgSGi1KA4nqsdMeXBCdcH3DrFkEddmHxQvTKZzXUcN1Hz6aSyG9mPtwWcFy4ju1",
  "key18": "5cprAbtiNALV8cbj7uw9M8ZytPoQVUxPejof4df51Pm94QzM83qUPpkqFFmYPeQsd2FKbnB3u6ezmL5hwnT7fsHC",
  "key19": "4anE1xb4haZTeTGig9CZxPCyh9DvJMyJApC3ZUT3Rprbucf77pHsQnuEDMQL7jM3H7Syb21cqHtViVR1QcdoCfMC",
  "key20": "3LZyYkSsMqp5idkUmxGSD4LgGEVGaa3Qa6F4xdjus6SGfdz2RRi54ZRfUpTdo5jwe5TZPoE2ApcdkVxnym8wfqLr",
  "key21": "pEcBo38bbEyFWF53tXydhkuU9qqeCGU8QWm3AYoxJ4Pnf1uSjKPW2fidQrYgSR4ZSZvWfwUG6dRMfEH9EKBEeDB",
  "key22": "2W8DRv4U8bz2XM4syi3RgYTtoDLG32AbUy83AapFmpq3pe1XPDB8iKx3eNetJMf1ECCT2NVs6BzEtwdLpGja4vvh",
  "key23": "44FjdTfTcHLZE99Qzjhmygkh1YNR2moJaEWHCbfPmSTGQT88ZsKkmGt1dZ7jsAoLfhPxMBRNytQUFyUeyNtxhvGe",
  "key24": "4SsXVP9yE2P32KNPt3PWbtgeJvRWLKineEC4n8UQ5CEjbqWiLab1DFV1otgVCvmbjkmSSSPxFdQXhmcVPuyzCip5",
  "key25": "4uzv1g6jMvnA9UUVXV1pVxpn9BcZRrV7Xrh3xbSv56oeNqK1wXzXG3uqoXPiris4svRNHMXM7tBTLS7YQ69Annjh",
  "key26": "KxGbNnaqwGRYN6YSLtuWZU9qFNZVft1K7VoMY4StD3qhj27ePXrE31sYSSsStDpbkQ8nygfsYryye6rjLN35bam",
  "key27": "5Z43f8b2bwLc1MsE7vx6HuG6AGsuYRHLT1i6j63TLHtFfZUtC5LxEN6aoD49aT22vxcic6YjrpvMwMnxkvT581gW",
  "key28": "5egeXw2eQ5vH57u1peZZPYzt6UTysM2MdWaNQFZy8hNS8fkhs9EopjtV3y6eqszi23ppFengpbqU7PALoPW7yWZ1",
  "key29": "5RMuXdWTaDFG5CSvPZKmLhz5gvbGWe1tW1uiV5QGDTX3NXhvzg2kmVqvLPrKnKKLxzVpozz7p6pcZS6WuvichAJi",
  "key30": "HKNrQyBFLsxvWomMcSj99QB8MqoQrtuERgXgkJkYyXjLp3yAtuphuj6b7Tc6GSuHjDgmocmDwGxD9NVwcRT5mvd",
  "key31": "5aQq6TMqK87YFqLkcJQNXXtnZDjVRsyBtCtgzTaGUiYneo1tnetYMKuRVwvXujD7gtoVV78jrYTYhEpfubuXwcv4",
  "key32": "5mmysSvvQX8DnPbDZoAFQSjaCf2nJyVnXRdVPJUU66tMYqNZJvEWgdofML6hs5PAnve9AviZrkKiusidCGQZcqj9",
  "key33": "41pQt85oEzfguTfmpiAhsncWx92F7sF6fQiLTvjJ9evQ3XE9hRe7kr9B6ekk2bLAKjRfpXvBJTr9cWHMLNqWeouv",
  "key34": "5Fpeu3QZEnxLz2k4CTkoXSZzLYAEaXcyBRKfbRrwsVq28r8FntZdX1YF2MUrMEyTctQtt7HjotoWwub3TfbGNq79",
  "key35": "4im1UDKFZi3TngRuu2fCCcESRnVwYsvpk9xBJuVvb6WSHyCVhaN9ap7hhmpGFaEDZbtmJKMT3hQhQu1TkDgzdThz",
  "key36": "2SgyfEPJjWHjT75zUTLzdMgangqrH1Lw5VzFXPGn2xqnJeswiZwU4kRpd1ardKxDHMkhBZTubrJu6zEehsSfW4ZN",
  "key37": "346tncwHEw26XkKZU2PTzF48fSxUPjwUadkPB5rBUdq2yJJ3ZDvSXAF2n64tRNZD6Z78ZMyaZVz5k49A1DzfpYFM",
  "key38": "3iHuAJBhuvP6ctTqQVACisX5bUHryMN35z7pmCSH5xQUHNbjzZY2idPKvsnLpcBBwizWteTZhYtr11cVd92HoXY9",
  "key39": "Mq8BgEP71RRCVFhEYSaPa7QP6Ttx7wBaBieJX4duXDY1CumjUwVG2YEeP2Gq88diDzmirv9usvLArMngNZahJPU",
  "key40": "2YbLBTZzXXsc3UwtHUiyG7dQnyNghJtfRJJLnYbDaLDC9ahSumM6apYDwTUH7aserrLXCSaz5MJVdPSr36bUayve",
  "key41": "GFKKPUaXgjEL3rqTmKXrm915zxNSFEepSQ3axrpHC2zioS7CjTY6kKvkr2LCPBYNUNdRVams62vFtbQXDy2eHXA",
  "key42": "4SiXtVqQdQ3ceTH4EVg9fHQ5Dszba9rV1ZXH1WGzJ53Xkokv5dU2Jc2AxPrVTfimQYBSm1s4eyj8ZmH8TdLguNAs",
  "key43": "iQw52mBD7LqKwtzDkn75mq45i4wf3bGnxnb9Q7y7m4mrwCJbiEPe5juWPzbsbpeczpCh2weXeK7kPUrEKoq374F",
  "key44": "3kNJVGGi5pGnKJ9NQCmcRtmgd3UnSk3hkrSJj8LtBi8DcdyuwE6YZ4a2jeYEmVbibzoj3xLKJKpqH1zk6UwYLxNU",
  "key45": "27PWy1rx1YcFCkHa5z4AutRdda6SCs3NyqT824eazU5fyk56iGDU3Zhy9qnVV4Uo2ga6B7QtFT8HphCjnFha3fBc",
  "key46": "3t7K6WH5SjQQvSEAbPkRLDYRYJ82bViUx3cFeUGnoax9bUhVzGn3LCduBxcUwqATLi4p3t5KAhrruJoysYNx1Xmn",
  "key47": "5CmT5DtxqSE8r2NeXsAdkvQJHNuNKfTPXrjNi7wV9LFSs55iyBXCq5FfNFMUki9ULNrX1fMCL5UhrxDjPsNmw5Sr",
  "key48": "3YbZXeov4AvZDj6x6AgFgVEk6yDnQB4zsQcxzq8DtmeaHSgkZu6P14foAwR2jQXiVqTPnnmaXFMqKJELqUhJjwdC",
  "key49": "3b4ZUEieStkHC49VQKoZLBzN4gfy82z9ffcQhfFvxmqisPYE8g3K2QJfwccXPkKBsKx5ecnjUxEFh4GNXv2e7uXm"
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
