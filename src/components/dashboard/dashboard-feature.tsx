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
    "3wKAhUY1ZGpLsTBU1ktrpe6tTEjFnEGigH1Wv3VDQZHrcHsJz86QqRbyXW4Y5njHaHzMqvce6RsaTCsdRmQK6H2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYWCwfmWokMSqJmaKaFAFtkXZ8NzcBAKyvj41bqrNPCCTBC9CzmbJP6PGrCWVdA2BdcxnqHNWbpXfFNpA8cC8gM",
  "key1": "3ePnjXHtc8uUkzShd9LZm8pRJKv6WarryHi5yhSCuM9JhN4ebM9unrtJbES6UvuZWR92NSAoXcsw3copnhgFfEz5",
  "key2": "FmUjPRpTQQ6qv9DfdSQ1AmJEQKXTcJb2dt6nA7egukW5QNcA9Tfu5NijnpYU5gTmZ8H38NSH2LmePemxXG8bPHt",
  "key3": "2n6FHSNx3AWgdgC8aKKPpTsLhHyJLGyjWDdQrkHBxvweJYrUkJWVcDtWTBPexcR1w1Ci5c6Us7FhJ3N1Y4BSuEru",
  "key4": "2pCsjPxfEsUYWH6BEc95AVwqtHekXdFbhFNM5Beac4S88mSpzUhYEaenBPVukpuJjxnAppyLHRL8SNvdRgAq4pwK",
  "key5": "3N19LkfiAi6fJFWwC2XfgXUeQFsRJJ4XSzpqwkRFSRKWZoR3muksQvNJWs6Ba7sExZbdygHnECwdWbtnobtiAJmR",
  "key6": "46BHC3mVBJwVCDhLkx95nJpqnofbiysooaKAgaVeaAyXri7ddeai8yJKB7D23NkrxyrsUF2MpH2w6Pbi589cJFYf",
  "key7": "4Yi8mH71SDEhfzLSyQ8XHCZ2CRofvoW8nrJZ3P1zYWGmGJLJFfcNeYrwSv4EZLzu1bzhMRo3f7LNoeYn1oU7R4Z9",
  "key8": "5XFbLAcQ6by29CaENzP1gPs41EZo4VtRj61XDYHxvvhMFMASZaWEkYkKMPWEvZP5S7gmPbFUvZD5TCfhfYZ7o7of",
  "key9": "5GfbeGEfP6sPZBP4zuAk4odVBmDkr21EhcHcA4GPAfRYxrsYVU4cY1cGXkYo4QaseJcXWjgcyKjS23HMRLEL1Qv6",
  "key10": "2u7mPeVAFBGHGrR8ABkDcz4xmr3CofqB6mcwsRTh9wkVpVrpw5pfqtciPquYvqwAGp2NqoVX9JisuK5UvyEYDxS1",
  "key11": "HpJ1BPrmBk3m9dsxSVMLvJovCZjMNL5PF5U5M8vXgmvoPGCryZfw1AS2Ymjt26n4ThjShj2Bp3kZjfgXWA3SaMz",
  "key12": "122K1oY7ewGN2G9PyGJdHgg261GGh2zdRoRDDm5uDfK2s4BBUGjvaJWCPFnwxRKGzvytxn4MwqeeWBhndQHBvtvK",
  "key13": "52Gh8nRxweNxvVsgux3jNZfPXtk9auLABPRiCRRuBs4NP6wLj86DnYhiD2asWuLZ2XhJrpRLRMyHd1pMwr5nogHm",
  "key14": "3G4Fvdz1zEE5gP6ifaxnS4w88KH58UpX9EmVbTVXVL93UrHXRVsnoFm9WeHUAm9zyeR9RDpTtgFeq9HoaapmNGt3",
  "key15": "2r8tTQyrBVm47hoCZwKohN6hzi5pHHmaB7EikcSRtD24UaZbHHzPBbU7XQxL2XgUxjmHdY83abYSM2mrNhuhEkxB",
  "key16": "44KzeEwPTgHRiqa2cbaCuAh8a9JbgFzHQkfL6HPnuvTkQRhwS3BXNmo9iebEA64CV9iWxtjGGrBQTMyhZEnbynLb",
  "key17": "3UfH1QPW1L7fcaXyNxJXJ172iHBhuGgDeBPHTuwjanfnp98MR3iauw9VTsA6Q7i7vig2Y3rrku48EZDVKCTSj6V5",
  "key18": "4ktWxeWxzmzzQc7cmumC7Do3pduB4E6NYiLkd2pJoHjGWphRfanDAt34A9bjv5uxS9JAswTzDkeiiQGWrtA6rrXy",
  "key19": "YvgzeWdjSXMX2Uy46tagZjcTFJmzAav9pTqJMysNfXhRLtFVUHmh2bm2WrumMVQLKg7mvESjCa2XVobDn3HmX3z",
  "key20": "5bYGyq9JZSXijHduTC2ADLTLcmZX9KymC5fBDfEx4x5d8Jt1E96imvDX6c7tMwfztq3LtfHme6FuwtRPxAQtm7Uh",
  "key21": "51ayfeL2ooPdVqQTxJxUxzyNuStVuKGP1pUAWE8KCFZhr1r1CAkEYyxD5yFcgUP8ruJu3hMcCLP7ScK5yznE1J55",
  "key22": "2DwJNt4yYDwVzcv9mGHHAz4BjBtTeJbuZrSmxzBDC6qyCoFBeWER1fQh277Uh7AFSqcH1jqbtCaZW23GniTfQApQ",
  "key23": "33AmhTp16Gd7tzt9kEpTpDWCexYcTbWcmYAE2588ko7cFuDD5h3kCoqmucQAD25xEBwPWp8a9GgmaSvWfYNjr7CL",
  "key24": "2AjbszAuTGXsmGj1qDC8y1Z4mHjkD6tg3egm95VVASGVrBdCfApdfE7oVgWe6yMp9ncVUSqvJJENqToQJL8jfmPJ",
  "key25": "4TJXkyrjsmBXuBA7Fr49hs5kdmx43aFFYS744UyAVU5srA1pbHbF6rGmsFKF2ch759Xukps38EcB2AKV2Wrg9aPY",
  "key26": "k3cgqXacqEtoRzEbBbie2q1ygnHUMvkWxTU2tabLd35EUdWM1EzsZBssXbLTLdKvjM8W5WPPLm4ouTcawxVSmVu",
  "key27": "5h8J3eSrZGp371QYWMPSbQgB3MzojCV4tpeeG9CZ3uzGXUbP38D63aUgQqSQ6K3aPqxCMeLXndJFdAafbNKiyFnk",
  "key28": "23pit9PqVnimBiu8o5ydQvBA73CxQFnvvjdKSV7TyiUAByuVGDw9EaAPSqiNrytQ7DAzpedEhxTvSMBhjHT9YcRH",
  "key29": "EhYDKBLrdja5dwi3FmsodnG5CsSF7QHWhLGGax1SUjA7r6vdnV5n8j7jupbKGmzcpe7Ej1DdC4CeeWsYcgtRwRG",
  "key30": "3meZKBwjDrqJKwHCJbzwAr9FHDhkkdkqYNFZorJobrZuR1RpNQKKsDDkYoK4Ldm2rmLwPui2oEPBrGPTExPhZ9eu",
  "key31": "4WtxDP1hnUpzBwwCSwDbXJpTK8PaTXSAGyDYmJUGZ4KnQucUUasJv4Xqdk5KCzotyd3Dfwt4DKWWvDRmvkx9J7Nv",
  "key32": "5u1x9YFPnCkLjwHKr586uBzSfc4RzT4nmg78SYvQQgxhSzwkMDqFTYFCLmKY6oP91yz5KtSGDrx8W6VxM9hXozd9",
  "key33": "BghZqtyk2dr5iwzs1aNCmGw24a3iKVgYGYUc8s1i3Hi3V76nz4yZ4467vyxWB6fKLty3gBYQD1xW1N8Lfhpdgqr",
  "key34": "5k51pDKszSPfxV4e8DcfL8zX4qqZGV2eVU7zbv3eXLtpEmo9uAR2yg2ddHBeqFThF2iCf2myb83STo2iXSzgzR5j",
  "key35": "M1sGwjQ6X99JabFxhrnJTrLA6stVbVdzruvmoWCJ11ifhDzMtLEGJ44cKmTy9gymxkn93Nnmx9Y5CqjgFigb4LE"
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
