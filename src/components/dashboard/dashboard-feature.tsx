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
    "23yTvCz2b6TmhuYnTnEHqgg6EVQ8EXQJKfWoi1uGDsLa9ZWo6afCPVBVLN3ayjPcBFj6WxVvcoG6FF2TJs4o3rp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNPTjoW4nfcsTdvoimbBirngATPG5JcX9uFpvhUwVsf18nrjrxzxvFd6NG8DDpE47nk8x4F2PiqYQftoDy67ceo",
  "key1": "96yg3EZoZCiEtEeY5WNtF8SeJp5YPV3RSb9tRKPHswW3CaKz26T6SVhdXAQdKSbf3jufgHaGPqJMz9x8tCkE8o9",
  "key2": "5Do3wTSP5Z8FqeC4ev5G2xq49U3v5e9ACvutTpHM8588E3RdgM6daM58mSMRfD3VmFPWFbcEGZPkU3M79Viqbiio",
  "key3": "54RRLVjPWG4t8GkAfq5rM8qvXYueixVcg2GUBeoyG3a2Bc2jvm9Cn4ETdYL94oYPfy9WnMZ9vP2rZq85kp1Q9xsn",
  "key4": "5B4ymo4rvk8rCUYoeq3neYMRu1pL8M5crRvTdMaurrSXXTWtaB1N6ED5U1LxvgCeDGDBhb4TmFE1sH2sfFLobosJ",
  "key5": "2B6PXmLf9tsyLrK5Jg8QprBuZptznLJep9BahKDqiXmNKhLzRYZ92q5om8s2kNCAXZg7BdCqgqyG6A5wxTXTzjL8",
  "key6": "3PNXwexCwSSQ3jhag8XqFYx8hagWutDLjEtAk2NcLf5VVLdbQKEtW6gqvKtPyRH2tyBy7xU3ceW7WNdtWP2VojDB",
  "key7": "2VhxGcSimBuvJ6dFwkNbWGiCFpZzqanFXZBZ45jqBY3SPFcbo5kaRHWuyokPuahyfsbCbwmYFQzrcwfBLeCoxkvv",
  "key8": "tDkHKeYb7KiEQrjascumwgurwcSvhctJhWERa7AgQFPymgHT4xnVPNkkc8dajDg5F5VUwbdRvunMwp1qNShs3i7",
  "key9": "64DBU7V6tY8mjV6XSoppz8ZP5GAsY3YXUS6KyxyAfYD1C12gS8sCAsipqbon8aXCfyyEVprzLnMLPaBKSEVnmHKq",
  "key10": "2RKfnTeNmK8GrKf9QpvDbfGehdz7MtRgXrSvykqALersbsxvqvS4ewmHYs6x2SFKi66acv5kCkrWfMxYM2b6EQK",
  "key11": "24gM1wFtnVjxBqfGwMy79682hAHYYP5VpWEH6DEyTVXuQn3ac1mRm7XV4VtCNRw2QvYM2T6zhCP5E5rnjztco8Mh",
  "key12": "2sPREYBNHRPfdudPNqcpx2ZpwepbUGRQd7Cq81ZaQDV1wsJfMyFa33RfCZXP6wgr5bX1HRtdmqWjaJP9nZ7uaezH",
  "key13": "3EfN3AokqP15EGSdRERZWeaUS1mk364cYeiuBBfZ3ARcSsnuP2r9aQ2hiL55VuvahYGGre9XGfX3qWwycfYj6dPp",
  "key14": "4mDrscXmjABz8qR9uYA8k1Rs8ij1iMBpeLTW7n1B8ay8KXU2sKRGDnQWB6rcSiznNdbRG7epj2Vzv5mu2W3CRU5W",
  "key15": "3DhiTENvWwCiy9cRCFe7RLAZ3YGNyYSLyBPQ1aWw4wdExAKsgMk7pV6ArHXnW3mHJNSBTGkkiqCRQZQ428bTNKJW",
  "key16": "4gbLEz17tfMA75fAKAVMAkMFtYv8rM5fbgus5TcKFsTqW4eY6pU7HVmsdtas98d7AEe3TKXg71snL2oan4rjBNiA",
  "key17": "3vjCQjt6pLMcUC5ywfoJZjJTu5rTBBcffKmFP8yD5R9YKx14mkQ6apLYGWbJCtCWZQsJ7T6BSfwK4CFRyag7i8fZ",
  "key18": "2PLV9mDLGokmrqkmMttR4PWrB3UiJkWtexaPMbJQ2Tuhdc6uH83h6jpCNWJNL3HHQtiuHx1GuML7CpDCKQWbKfXY",
  "key19": "3H7pMeSsxZXKCsWYkJjFMXGAwZLnvVniBYoJHqC2fJDCrrWMUdxb3GeCo3e1pJj2Mc5MTn5KpKE38C9uM61WwaLQ",
  "key20": "489XgrY2Nn7sisTSByZ86FxJG9W66UMKe9XetjtM2Tt5bK7EEMjSw5bWK45XpnNmrLZ9LP4ZpWtV54aiSXgdEcgs",
  "key21": "4AchXR9DkypSBv4bRVAvQB5CCuvJhoZzCUsUiaNfTgxDErVsMWp4gqq51HQb1AFGHiaBSvUfWDfhi6Pqq9EUJQKn",
  "key22": "4JEUcM9qYhpF95tvdsQp17NeksPtd9a4PoZsoToWur6qb8pRvzpM5g1PcLa83tgVAnZ9RrKYqJsxeFERHMk1VNgN",
  "key23": "5JYJzfwmVYe1fQLGHU2GLdDXfPCKfQcbgusRTKTZWRGyqiaUwdKpNnknBYz79b6vp8JTDyomMHJBcMJiV5PGxSCM",
  "key24": "UNHS9s7SdYDUxmr45Qbt56roQjuzMM21MivUtTzVyyncAeH169mV7pnLqvKBg7JQeDgiwPfUTbt9Tj9sgXY61nL",
  "key25": "3Au8kJ8YjXaZz64ot3Km8UMu9MvgEcSeqs4WMKWAJ93wbZpepbF2xku5XL1dUppbFZr6vy8vPfFtBjrEbHztVQVg",
  "key26": "5FJtnaacWoqc5vLuAWScfMsmFvqhaTiprrgi9anLCKTrHJq7xaXGSCYnvSbFWRFNU5ipm65X21aLwsGpNjsMazhu",
  "key27": "4bSmu7YUh8Y3hgyem2P7vuerAmXdsXUJ4JBJiHoEysUEnfDpYM7WzQnAAFkrmzL33USYq2odCFxcqPAacDxj2Fxx",
  "key28": "62SnfCmfdQc2EPV2M38KpME6v6yc9nwWDQwov4fYUyAVhePzHRhB9r8Nx88shGB3xJKJqrdtSzPv2eQHZpLWWbsE",
  "key29": "5eSh7jmMJ7gFHecxDiPz6VyrPhDHt4KTXLSWZRfHBm9Xea4Y3mQV9Buy7hXbb5ZHH6sVGFDGutcvSNBsDyzVbusr",
  "key30": "4PATW86HXEoRHGRJCi4VqfWKDTd56sbpqfHP3DSGapHu9wgxUXJbeo8LjrPUYPbkyzmdBk18yAvhVmvKxHxaxSuq",
  "key31": "2Lt7fiJi9HEsQJsTi1JmCCUCKhtCWpVBmSGwLqfUjCrd6TWKhmck2i5A5QRsvzAkn6U8dwKC6MC37FsXCF14eLhJ",
  "key32": "sH3xTWJmDPCDVC8GGDeSjFXbq4qVrhqX6bdggoBenQVPFucoQtC9wxxNVnS6ws1DAXSzwN4NKGmYDD7XwWPx3xE",
  "key33": "53tv3b4fehX5pRZNi3NZsa8zVbhADoY3T6sEsAeP2Pyy1KGYu1mBB8mg5kmLwoWToe2oa6e7QdzqmxydJYFknGec",
  "key34": "3ovY2163CQwU4tJix7jJi3BA6StxnGJCZVHKnz11m2SrJNLSaCD7VwxwiXjFmd7UKJH2FMZnAY992FA8fJ4zNjgi",
  "key35": "xZi4tFrJsgbn9rm1uTvjNGvKfCqYTSct9e9TXC9xbBuLKG1W29wUry2BXU2QvMYcSZsKLEyxUFereQbayFhJLEN",
  "key36": "3YZ5jC2LKMN6Vzj6MHpv4aZWarMSxTi65LdEzF8jXxCMzacPBZQbbeUw2B8vqK3ScPRZzDWR6bMkyzUp3ZTFg65e",
  "key37": "zCQcaYWtCkG9ovWZxiR7PXZvnJgxpj1u6chUgi7yDB1x9kSETXRANit4xcsLXtu5vZEUDDuGWcPtGezakbJAcB7",
  "key38": "2i3ARWCFJtoAy1pjUT2xWXc1drFHZF4RwGXDB4rb2pMCQG9HtxYFbtRSxZQSHmE9qTFqDfHzivPmSUTsCm9kaWGP",
  "key39": "63DW2aV6qVqrxiqPmchotDiHdgqVKdv9KxiaKkyihWCTnFDh1xLbKcvXfWZ3JDaeDARzki7nFUqDT3HAm6fAYDAG",
  "key40": "2J4i9E7iicuWV3eWyzkWQGTJtCz9ZEg12zsxbb3RztabEaUJSry7ooH7VPEnwq9VfqYHbrcXAeoVuEiqP6JAE2oF",
  "key41": "2oruiviHPmR7GETfFPsTAkm9XvQwhKNz6Ct2XT9FhTTzkSRDHw2LNVVN2ytjRxGT5SuXRpSNq5M9U3EXjSNcokbv",
  "key42": "63XEtKHiw5tWB5z8351vvDbPkbo9W4mEcTKEnJxKZaRaQAaLZrSad1wCtGFVDAwYmiSUYWRKkEJ2CVbChReEYEzb",
  "key43": "4HUMiFifKV3AN5FvQG6PCwaSN51cr563kGu58e69qjn1RyAMCtWeSg5XA2AQhAH5karAXqFxM7aTUVx1BLEh56vH",
  "key44": "4SaH1QSMNmEg1HkorvJMa1KJ797z8ZDhZ6xnD4M7SGMAVTmmEBkK5p853csq98G8XMk4ZNGt3PJ21H4Kx9RU6whz",
  "key45": "3zU4oYyLh4HvmhCgfS8bEwrfdFqacY8Qe2p4xUyEMpvp8KEbtpQc4Uqy4C73MtJj5J8NVNuqgXdznD2Teq7wwjea"
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
