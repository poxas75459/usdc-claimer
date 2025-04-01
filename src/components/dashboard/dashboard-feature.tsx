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
    "3rrmLN5f5Ub5X1q5wRHf2v8mcBQ8JTi54gTgat9FXAVjj6NKoJ356QGRrs2U59mc2TeoPowb7Ri9RMmPNythRL6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7Jx3eSy55bwUvtE1renjxFP2Vge4m9MjZ3fLP3bdkKKVDNe4E3BxpcBpxxBzaeTuoYwRr768qHYhkH1Qy6JJx7",
  "key1": "12ExZn39FmDFtBA2qm2o7ABEmZEvUWmp9arUNLTPBikSXdo6P3aFvAxZjWmef3q1Rnfc7TWzMLp5Zijp3P1Uh8E",
  "key2": "2xme4Z4HM26xYJA8khtQtYoSMLveVMjPnzbCrzqrfDVH3CTswUsSg4haAesYBet4XMEvsXqkv6WuuybG71xP7ebm",
  "key3": "37jAgTcLZsSdre4BYYeGBn9jERR1MErXUvWDc8pvA1Cigrmq2S1N6w48R6dtUwVSad3VZC8mVWJxmxfi3Kaz8BPF",
  "key4": "516mjedysndS2pxna4si2WGKwdjeX2jxkm5LexC1HKb9UHaMTrxJoEj6XRVneA3eebP3VydNj67XcmzYq8vFFu4H",
  "key5": "2yhgi6AZvHW3Hcrwh9MWNoXnzFsGgQAZevCt5f84yZ7JAZprHZShhC2DCDEu6as4GdiPFix8PXssiPcocfHKD3B2",
  "key6": "2FaHSWk6FzL9EsAaiigdGtvLkDqPje9gEthmz8Nsg6JGWXExEP5KA6beFCB2Qf39hcxnz7N73VoD1vkU9BK66rr5",
  "key7": "26MuwVYomgxh2Xpju7UnAXbReTLn7UqYBw5YU7cYhuZ7yZU3kWr4qwHeMyMg5qYqXUb5B1vX81tbRpbrp2SmtDLq",
  "key8": "5M8TVNpNjGGbfg3VHur3KDhTbPJy24afXSKiDocfHBi3S4ABjV3dfEXuYJuij3RZoTjxrm3i5AqBtRtK5bXDF9j3",
  "key9": "4Pb3iNJJwoAVGuCkVAvb5reXG1SrLaQw5drqzQSZzuABzKYcwCfWcQiWZ8SP1gFgpHn93AyPzHurbYW9qXcqizzE",
  "key10": "4iSG8JenZFyWHC3bQc6itksRwUDHhv13knQzUNcUqPCGC7CpnUUmBihypXsYZCC8ijyubyTw4zn8ivSFbdwEFso7",
  "key11": "2nPUAHdCZV2KtZC7PhpLXuRcNBzabHasxkgqN3H9mdHEoinahWGzx7autnm5PiQAFjUWFXbqYLJR6yK2HGHQbd2J",
  "key12": "5PvdAtm9rNND64z3aHV57tQnUTpoP94XBGGHxKM1mLWroZgmUShqwCGGEKH26z2r7CV9B45ovegRrRe4usUMp2N",
  "key13": "4isCkeqits3Nahn4j5phjMo5j8jk6szqbWYSAiPVR3hWmXwLiS3ZDfu5ycEvEsc5PX1zo1YjkDjtas2oupVNc5wL",
  "key14": "3SrrVwN1d4MXLBksQMg6nVS1qGxkdELwAQ3wjqSvrDjqYoJx1aFvmGq43UdcaLGtuZyZGLuAptaAeWtk9YwytnkU",
  "key15": "22dovBVkZw6boCLceph1xWKgdpd8eijhkvQ4r55w2B8bTbnejr9ZA3XBBwRqHr4v6ZG6NH6hfi8NsqKE8dmxQdj7",
  "key16": "43cqPefzLParvKY46UkPgf9B4PaTY2z3UEwKRN5MDCUBe2nEkc1jLibohkGNPVpnaP4An1DYCrDoa1WMKKfYfSHo",
  "key17": "3Rhk2oCKHg4WwKNxNXnF2Fk3BmM2qbQidnEpTEAhHwBNTnGbQeU5FLCS4xr8thkVX8aqN6KbdaUSYi26G1dUtjQL",
  "key18": "5qra534d3xZY3M6kXR3NhoY5L3v7s1fytMWDYV2Lak73djajRgYYWxjeYpTLE1FEgbNbCfVWiD8MJozEwZ614Rj8",
  "key19": "4TtTH3qA5d45Qe6TxSP2NFRNdW1HvSWxW3CBBmcVb3keDyunvXZiHj3mAAYDYSyif51f8pu1aLRfLkod6mEo6jB8",
  "key20": "VZcGdnHuK7FMdCNPQQcukBtGjnNudqWyFB1hjvWzpvNztF7F4K31ur3bDGbsgtqSJPYQ5yLHsPiKe6hW8aKSZiT",
  "key21": "3USHN7uT4XSdcUdb4rKa1JStnh4xnAAjg1ajZRaQHYMpKSmBr8CCT97VtbXet8jFcw2nLYgeDJK7qFCUd3a6uypT",
  "key22": "5okVQQMaoWA4jHAC89NdjQ4yHM1tEix4i7NHPb38Nu8mymG1r3qt11LkedgYsceRwDYf385GfcY5cgpoprnwSZzu",
  "key23": "5p29NFLxZzsZVsS2utYWBsZiXtFzm7bhz6NpxJCvhyydycTVHkzx1eJEFTFDs1PXv7Uyz47gsj2vedvAsxP4kH2W",
  "key24": "5eiey8PCgZJDqac7aiwgcUPbd1WxZc89tH5753L2v4hYkF3wFm3XCHVtZtytrMKsd3xAA3253jd6JNZZofRuuAev",
  "key25": "53AsxSvgB4gE88JcnMCcN1F89PDYYJpv2i3vizrHPCytAH8emhNd6kN5hWJNPr7bm24EtHnobxxbXL9s6X4uJVNZ",
  "key26": "4i6fqXxELr8NM4d1AbD5hre7bx17ETaxkXZhnVhwfxKUGVkmarJqggdD6NnQv9f3hHSTmqHUTNpV94XmYKUEWVHK",
  "key27": "3k7gyPGKr7QXfuue7pfFVcRJ3TgYaLE8dHCjuEu9aN1WMuLC7DbAqRqWQNbHEEb36JAzLH9uE6YCyesvAukTPB7H",
  "key28": "5vSUyGCGpsFaiCPyckAErkqAyGr7yDZU8PJdgjMUo371tkj9fVH4M2ra8ZyS5AXVwtQmE4yggZkJJH4n4j8XLdSW",
  "key29": "3ddxgUKkWGyWwVyMPGmKh2vuQUREECD7aWhbL6KCADBJ5PQeZPZ1B35sEicF2tT52KWMk64zJ6Qms7uzY6Qn5b77",
  "key30": "2fJ5TmAziqTcZ2cnTLptDeH6V96rssLQNhd9BGFkdbMuNC7NKDjTr6xMHXfeQhSXUjWPuous3zf9kBFeoYtw29j7",
  "key31": "396wocR1JMfbzXsMH9z1S2mswjSqo92ULiFzGGKhP5E6dv1M1GeDZADfBwRATZTkP1NiLWecZQd14Gj2yXbZwJ4S",
  "key32": "bCtd4FGmGp8qAZQfmuGSEkUxSvxrXkRvUaXTbR7YhLLGNfnV9fABJAVPgMevMuR8L6nh6D4cPJC9myLd99YZ3Y1",
  "key33": "3eNhUTDUm8dNDHCauSBex7x9mBDVefwFVgRbigzpMrRrHGxU3vgc1ib7B7AFYR8kEfDR5EiD1BLuE6SZqSeFdsFq",
  "key34": "ch3qZpx3dPtyczgigTKBPqUamutqi3eZiV56Kazt9V1hUrrU4YiAfbk7Z3nHZ5K2SLxtnGBvaz6oSYdAKMbAQGx",
  "key35": "2BqhMtNvwDQk5m5Leh7qHQbyFbXbKKuJ55cfo9iMdMfRu89mhbhEvxgL9StxfWU9gekbZ8oG4FcfSugXtFVDC4kz",
  "key36": "3BTcTnweeHEBjCJh3Tya5cuXAEQRvrywRGnXrToXWkA53dXraHNqymCD2wiA9oEz724jRvcaRdcLDfRe2ANt9FKk",
  "key37": "38VhBUVtpHL1pcqCznhXTS73SoJuFQGJ7BvN5SANEUjMY26gStYYbynPwGK66v4zuAyU1aZ1j4jM6trUYJwSMHui",
  "key38": "2H9YsF2PKvwFJx1AxB4rRMgZWubAFNxHADcjvxvd6FBRjiMJdFmNqmFXR4MUzqdoBgtJaVpymumHES1cfVfdYi6L",
  "key39": "4vsJe4cy1d441MLsJnsffwC3xiGMSA1JhnTQy6pa1LiizdQArekVUiuw4FFoM6o42RVdhbNTd3kgE8QJMRdEbKLc",
  "key40": "257mmVvBGv2pdg9eiuJqUKHThMJ568UjNXif2pgyVAk8VoLnyhXpbnCUujLxnisQ9HFFnT2PadkxZkV4zZLNKL3k",
  "key41": "3zZyTpwynAVb2DsttBmQ8pAw7TepfDRcQf1a23qeyCXbtLXBRa8TuRsMv2r8UF1dZBC6BdYMM8piEr7qf8NPza3t",
  "key42": "3RbVjcGZLAifQpyULrf9SKoTGBm6QAaTo2eEHU7qEqAtVHxQgfJ8Pc1dJ6VPfyas2CngEm1dK85M4HrW83q5jxB8",
  "key43": "638BauJGJgiqiRngFGawES9Yfh2dedwLByLEAyKSWoFvdGt37pJjWKQoFsjTEuBjXJVH6ncxPE7uWpwW9syXXDun",
  "key44": "5XZNqfYou9JdH7fLetDnnhdgMXEwujSEsLwUcoLVKinUXpzSpCiUQAxXFHUwsv6AcjLKiN41km9hsyzqKgC9Lgjx",
  "key45": "5FSXdpRxYuMabNKzwaQJZoYoTmc47T3em8cwDVjSpUWdxksFVAUy6B5me8bhm7uqAEpTw9oqEqcWgiYf4rMPUTt3",
  "key46": "U2h3M22AJhZa7DHuP4KBd9x4cU6n8M97n8ogCd5taU4dPE9161eCWpehjLUGU73mGHRquMdbqC5MheuKL59Jmqw",
  "key47": "58S7AWvekgpFMb5KZ8sRi3HuJJt6wD12NALgoM9SZnBRq3MdHtmBRLvRv3wb79nVd2nMYWzQ1RmuNvnLJc3yoSTG"
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
