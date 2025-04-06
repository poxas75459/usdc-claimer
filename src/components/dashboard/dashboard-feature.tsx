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
    "vJ8Rs8dwF8WfjbeZHAaS8qDVwU3Uz5oEM2RNHCkfvqPvnQ1fenhpBef8Rahtq6rvK6RFM9NEQpMEAgGdcwujkJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLXoVzT4x1kyBwU18gTS8tnQWe1KR4zvCqJmSJJ5Hc4b9n9TweWeGxRz4RcnGQopGtwGY1kqxwJejTULpAbnrcP",
  "key1": "4RXsvRTsWANfdWUcrcmHYsWZgU8JYzZPQEAGVWGfx3GUWPsnvawbMeb9pWw4qDQ9LkyfbJjXKsLfAh1vcgaZy6k3",
  "key2": "WorTsYZocsMwx69X2kfZQ7rTdafiHuAtNkkrbuARRBvsqkBEufifM1E28LqfP9a4APQrAgAJmvNcMpfwMe3Wdft",
  "key3": "5Q5DnsduCmN8ACVLpQom7yeoh3SEVzaYVTwaYKEmSnwoFfHJ8ANAw3k5Y97XcoV8Zx2cV9t4J2QjZ6iwY7ANWgv3",
  "key4": "RuhnxLFuSQqpvfAPsM2KAxpby4bMRrskNTeWKQ8hPgHeg1P4KpRVeUe6SvvcSvHKoSWbBn62jPxYnF6G8cSxoyj",
  "key5": "4AAbHAu5ZPihib8c8zGmtHCVHxxNSeetNahmKr5hzXqKVmw2nyDZTkDUeRSpshMjkjQ9VC3qEMXQ2NovRXsex9iK",
  "key6": "GX9zd9XPshCoj5D8tv2Ud6dTjDuRaUB8MgXnPUVjNM9pakATkKR4USCfH8Z3HCQmJGvM8jpf3LgoeGH71LtWyuJ",
  "key7": "2fsTG76sHivvnC12v6BSQmSERctAoZyM3GdcmqmUUkoRABDr9odxKVSpNFVGzR9ntD9tnGnni6UQjQr5yjLVaHoc",
  "key8": "PZCNTZyNztCabFZftm3V85DVAL4SEet3XiTUPztUATh4Lf4zdDiqkfmbvKoc6yArWdNgd9sU1biKv8vuAaHnaWv",
  "key9": "4kLNR7Kg2iPgc74JmeFH5WUpjJkApHp2Pmx6sAmh8WF8Psh2JpTe56T91dG9C4bLfg9D1n3rjdZyFUkpVQZHp2xp",
  "key10": "4RKCAjJYosDq3UrZSeVHFZT6nu26VPf4B3t6JzM6XsXLQSqhvWZ2FdPFnS3WhJnqL3a8gv4pYTF8xBmr9NPaR94j",
  "key11": "5UGSghq8TAL8cJVnqQEM5BEAFTuMVihhz2gZMFf1BvHTqFidmzWiYbzk8xgaS6kJCoA2bAmQeuXkj6N4DZGjGkbo",
  "key12": "2M2v8oBB7Z2tAxGwAmeywLvLoSLchhccL2v22y8JfDmpBASkV7VpDbtSWzVnRv7LzQfFfSEGN343Zoo1arfrTKF",
  "key13": "nzkDSB2EW2wjiCMMvvQboteGvQWkjRBB4WXoqfPoQwMKXFaUksK9FNwd1UBgFL5QbvcMDK4XV6CA1SW5Ltw2CzW",
  "key14": "2cgD9Kfq48fujQGerkFxUy2nd3w8ANi5DF86yDwyF36qmMuDUKTtKohNQVVYH8iczd7pMMs1dmREser6xe4xWFLX",
  "key15": "2CWU8jaoECDjjJbUA9MyiZQdTptfUW1oSdaJdKs1oyozx3hEbj5V3JgxicEBy4MtLDvdYra4EyB8oBxXDEARsHmo",
  "key16": "3h6xjD1oeSRoyyL1BeZyhv8hVe62zNdqapzy4BMBNhhmQkqCg9iwAqZkmSnqcPXZRABcsCFxtgXoxqcRecMmvCuc",
  "key17": "QRsq8C9jsqnpprJXPD4pa3Lu4VXaZxziYrJo9kxTtoKGEWDjCDbHhGakoFJpsZv5Pn7vNV87VXWJxDjHhbEkCPZ",
  "key18": "5bxS6th1LWVKbuGMgmUGsiizzQyJikdgvjqrqbVpuarNtNcenGHBbhFpdJvidcRBq8RNE53EP3vqnPGkXfyCk54A",
  "key19": "VSSuLUkxxttDxALdK4YLB1tMACLvWQvGcedNV1WAw51dfCQqmg4kJyk2UXNEgvxq7hP3Ht4xvqMdNhAoVE9bJkC",
  "key20": "mwSdZgtArazQmqkQ528SJ9wqcAQ4xVVBcZG69Pd636vwgpGysAyN5nuo2j2YfLeiJoLUyDqSopjiwtx8EC4FWA3",
  "key21": "5Kb2v2pLYgg4gshtWgPY6kccQKdy176SAAG6DWuP73LTGm99jx5uBY4yZD8z6kfRv8w8LMeC4oYwjbKDkEJas3hv",
  "key22": "x5Eymmvpv7Z1Cg78Cj1ApAKJmKnx4QsfCGTgdxpio6z3FGUH8vg9epMshsin8dSiyVPDRbzPeE1Ug58LwhtU1dX",
  "key23": "3AjCB9KZ5aUH86jMfvmvz31HnoSU3WFmwyUU8RAVj93hB8ZKFi5xD3LciPfSekJ5MuciYpfvHKDK6HizBAiF8aa2",
  "key24": "3UXG9eNk8Vw1ALcBfbmMx6hR6Q1kGkfrBhnNH4oKvzCW9rmtxAiDkJt4pthTTnu8SBit3iYwQd9jUkwC5pRrgSxW",
  "key25": "4cf98cDgUHABAcTMzSWYBNRWbYxdkRUWcqiZj5FRXQAE7EK3pp55UQwfdmCAxFhx1r9TPADdE8g3Q1ak5AdaABtq",
  "key26": "Ew495azs6PpauDbhkgjShQf2ZATbEmpZrBCpk4giHiYhWPYmRNDKkuATrGHyQNquVoQgcGMv1jsrEpgnnjQyERH",
  "key27": "DkfmCxQcGEANruq13fLkdfMdsgqtbVEDBZ4D3ARgTnx6z5w8yYnticcmXnrGHU5pUeaLekaCRXsycsMRpMYQoMU",
  "key28": "3FxMADiuxebteGXebKQTNxGctFuQdTrVBTB9gPpfW5CxDNXTNwg1CwxJF7Wkq7YopKTZPjC9FhaMftdEiefvqg9z",
  "key29": "3RVXWZw2JYFZFLKoAVwMnWX41HeViJredQ7TKyMekZQf1dQjx2aDzjyTPx5fX9qtiZNBgz5Q2idU1jzKdZfyHkCv",
  "key30": "5pwj4P5KmpTLLNjHYjhKRsAS9FHSBWQs27yBcyYEGe5gXeQsszZzX93ZqtgiYKVp66fpX2yxLwavUmYHMrA82cAE",
  "key31": "2Jy7RfPsF5ac2BdvhHwvMQkmdeALv4dfJPKRUmixuMwXoBYrNCQVpNhwXKts9bqCvuwijW2mFpvpuDK78eHTQ6gU",
  "key32": "4voztYfRRPMHK3XLMaPzVokziRF675JpeZ9AUoRVZR9U7RVuTUZp7kpMfFjDBYSaqU5mdpQtvhEVgoEPGESjTBM",
  "key33": "2zqrBVrzhs9WG39coXs8jAhjyunSB6G2V8s7yJR24SR3GmBMB3Mx63UmhT5cL6Zg5WfqgJJZHWuEmV2Br1DmFJ53",
  "key34": "GqFYkTCAiEMFj5rmDzNo1mkfJW7axf6zYuDET2nNwRsFKQ4LFr2i5cXkuGhLWK9cftf9Bp5gYDxiDnnMjFTcC3f",
  "key35": "4PwuNftnALMuGWLXZxpypRNKtb2C7WmxhxxJ8bnMq47UEvVnCQcep2z88YrgoMSz1bRDLuFdZrMyjf1dWx6H2cuv",
  "key36": "3hQYSbQnvsBTNbfb9CEv1SpeUxcozEmWzvwNNxSKRaRGTNAvJyvVJuHC1SBxnPTqnujuszfzw2GBaPNtDDGGwpLX",
  "key37": "44RgB6eMKC7zL1kzDCkF5oWZM3Mcp62C3txWZFgfna1Pch9Hwxdtmq1SwL9u9ytWnmEdapSrZHC54xBfxkqm5gDF",
  "key38": "25wLjfYu4ocrzAACDW2FDwV3YFu8JUfT7UmTcAztbiMaw9qm8N8JfzX5Bc8VYRL9TuGVBQ9NgYZHdYrt21cbE17B",
  "key39": "2aaMhPzjoPZCBLZGKek9MLirQq3J1iAv6U7AEX2fN9dndmYw7XjMV4hMLQxW5LRVJqkTuAE673i7LdNPavR5gkhw",
  "key40": "3J6BDkLhYxGtvCaa4rDP5NE7DNK8yK8CF9gZgUqr9pDwuAyWYPuD3PVF8NggzRE9km7JpAdciXUrQFpYDHDSxa3S",
  "key41": "2eYB1b8KPuaULcS9DecPb6RC42AuiNSra6iLeRhWWzftVVbRh1sk8Cj4hCtPT7XqDCugPg8oAPx3HxckwfXxkhyy"
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
