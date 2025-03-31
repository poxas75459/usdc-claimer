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
    "2wwXTrzbRwos7ezbDosJFV3hdVpadkTTyEi8vkWDNUpJpZ2BCcMMF3KnsfBJ7aN8DGa4Eamk78rEN9YL9dBFmaV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkUJrCwgQq24Pm2QctsunSmTUNnkxxgxiumevg1zYTG1b5XWTfLz8VWMD5d9iaxTDaYYXUjJkxcL5v3pKVs2bRe",
  "key1": "5RqgkCVcxmFqFQwLrPNdZ9yXKZVnsrB3SFVGT31zCTXfZw55Ce1CwoMSeDDKWriJPV76hfEFbYwByt6kRwUy3Kne",
  "key2": "5kUbdR9knv5UYafvHSsYLJSq336GUZ5rPpPKdEsmyafLA5N856vwmTVAgfD3gLYJpcdLMJypcQxvVHLaQ13k9Uva",
  "key3": "2aPdTR4WuNF2egVVP72MwYtNVhjXV8rPfbVMPraLn435GvyBcsABNNLbi5U8pdJLE9aaqbfbVPGz2Zs3xs7vp8Nc",
  "key4": "2fVbCkMboADwdpMfS72KP1wYbrwQGrz2LddhWTQFjNuyAqhduxwHNUxFoEoMeW2qmPMmZsYTrk4CYdFRXvxBR8th",
  "key5": "4cXg9CtPxVx6nMhZuRtzcCwuNwAqhU9uuESLyngik8rsxNoN2ei19ob348RBjRcAnVDAPTZCZt2ZsEwUoSMXxvqf",
  "key6": "22q5TngF5n3atr6nS5jgjvy3iCFuD3T23bDY72LcTYrNeejAbbE92v9R7ot9Vzd5BETig8ZiW8Jbb4P2L5wvWhZZ",
  "key7": "2xUk2nagYXkipB6sAPLwimND8j8dwWSpT2CAeUPxPrJ9F8d9hSLAu9tziV13W7na48yo26fvLLfzK5aLtMMgYzGM",
  "key8": "2LPGhwhwGQCR3p8xCsNo5zeNS5WK87yL1is7PBv7QcHXSfTGrBwSRMNn81EL39vcvALGHzioNiJFbDof7Hzsc3bN",
  "key9": "4XQwGPQnCyY6nLAFKBQJybXhDSz6v4Uo61K656pXTFzcS189xuBYcwNyGov1gceT3f2KqxgrJD9MU2r4zab311Uy",
  "key10": "38psuyTdZhtUg4TiPoMgzkwWkUyYR3CjdXwc878CbN6vFBGQStrR1MMRWq9bmr7DJDmfFXuq8f3LPMzmPMA1EaLb",
  "key11": "2g9gsoWuLPTQBRvPuRPWiLfjXWRuHhez2gUyfd3BihUtL4RCJAc5wZRoD989F3FyZFdgtvj4Zxr3Y92Uhjowssyf",
  "key12": "4sn6SM4XZAKAYbjqzuRNVqi1yjfi7U35u8w7xXG7vBujqU6iEAqovXvoCyzUDYT1uKRW1JhbHXDdr7xQH2EMrV65",
  "key13": "3oypfREmtGnkLq82JqAK2tkJQZqKuFcnk9cjW4fBmdckL6q2xejWyWAc1bjF57tUpovTR1LF7rJ4mAXhdfP27CQm",
  "key14": "53aYsTgnFrFcPhhgFogVZes4dJYiwarGR8MwfUN9BNfr3EtTYWUUT74v3TFP77L3pfuNpHVVKkEE1yhBgpDzCc4",
  "key15": "5QThjfRcrz3Zsh4wDSvXgGs7t6Gx86iWsq9eXnLGcS2nb5iqsTR8bMkaMb8BUViNkDbeR2MRSFNqufYZcHZReo7Y",
  "key16": "23B37d7NZni357Ds2hfPAnVEjYigtRFie8s7kbSt93toKdzynonQLwVtEYrk5WKDqPGT2QcgBFujDc4td371Xj5G",
  "key17": "5cXAbCKyLKcDKNrP7mPFBqjSnN2oZeJJaQppzLf1qbLb233Uwe2nH7sLrqSTWGv58EAmkUVphGKk7Ao9m4QzbuU3",
  "key18": "3ha8Co9Tva2UVPczmgquJ35pJkGJBaQtvpSMDLHGEwv2JWMAwWA2KqL9ugABT5JejZiF9BQqV6DHKgBdofE1m7ef",
  "key19": "3dWozmSpe7emeTvTd5QdDMzU5ipS37z8C9xX3iVqgyp9gF1JxwuCuQY2J8uMSzrH7wy1nCocaku4GrkZysnePX4w",
  "key20": "37ixs4YkDt9QFye8Bko4xUL82HtGC1FwtoZysmSSvZRGJbEJ7NnJqaK45kx4EvDySYcVAtBSe6hE389yEvtEq2rz",
  "key21": "3oMNnLyABoM7iB62tmHj9MgKbu5odxuFyRjyMDFpuZGQbff8pxdTfrrqW9An88DxkVpKRqbaJAAB43hMYvULk6qD",
  "key22": "362ScSDGSEi3ZMkXVCFqnGoj1rybkVzcmP9g7N3SSeVk5Buobf3aDNPR9R3FnFULUSxaJukLgDCJvHAh1H8xKn6b",
  "key23": "F3ypMu5WmuNNa92ohGdqfe84EgcovnABT8vvTqLyGTtNm9jkVMf8ZRCU6XZuqbNE7yfJmwSYJo6M5btHA9fVzV1",
  "key24": "cnwSYgxWk7LUjXS2mVMJV8UTvrp9SUX6EQarCKe4cFjCaF4x3bn1GGpnrGXQKurweVXSZyNhqH6Vay8MQNfwmfL",
  "key25": "4ayTVYDtxJ1GsqmMJEMUNDHtFKeGPXLJhaHBr6Hk2xko8D2FHt7oNv4MrtgWEuEHCdTtPYk4Gs21iAqMaDfSsfAE",
  "key26": "NEyqFc3LNnLdYRXeArXjo7iptWHAdufYs6vmsYGL2DcMVaQiqeijG2joLdBjnVD4wvvemSM1ALhFBB4SYYaVvSa",
  "key27": "4bZjS1wy1RRviPkKKxiqDwBfPxQ1Tpp8dyPmnqT2jULQWkyzLacGp1zHxizaVxJxn53nenSJGyjyUsGR1RYZLRaM",
  "key28": "5APq9SZGTLfFtgFNo1tU7uGGLkyFYibzaKtb2MovK9X9iu2tikUNTSeJYnxFDYtDcYsyy9iJwi1cpbW4PPFfS4De",
  "key29": "3PqD4mnNrmUPBSPZGEAULorPp67vuUhFxzGsg18UrJuSqqrZ1DnoYLP9yB6xZqdJzqUSb5p8JNHAo6vjq8pvMYPs",
  "key30": "4psUphvUtmXB6FmTgszsZ4zMtsUgZt3pVAZmpmyLy5b3QZY4VRP4B2oodA4qPTzm8zMykCMhVGtwqPwUTus3R8kH",
  "key31": "2DUnkQL3mdevCeJHWGcnvQ1dayexyJiT87gTSouHwGhu9TXteB7rvzoYASBQMfhjHrfVmLMXVEfGePUxwdCxeKXc",
  "key32": "4Wstser5ACCNvisSmBYvxAAThLugBZNZAMYwQykR2pQXcJ5Gu8MUMha3osUhjKdvesS9UmdMPWkY1tBjBB7vKa23",
  "key33": "2h7Zoy7MvPqbch6Ugh2TPKEhX1TjJMjiiA1ndrtpLPhm9reuHWSvgAqFhMfzmPuL2K2KaC3WYRT1JYfpYAY8ecUy",
  "key34": "4E9drqnZqumEXrT9fWzRVuCvDHFwJxvP9B22D8QAYaSMZiSw6wEL9gESFjxb7eqkGc2JEbWRkfa74M4WuFEDzuyq",
  "key35": "2FJqpTYDjLdQBVoRtnEqde6SeY37JHCnTskvxcKRHeLHfpEbKiquc34RRcA4V9oHhCfKGrQRdHRjSCYixoKtdBAS",
  "key36": "5p3XuvhMooqkBfo67uTczUAKDySwDVkE46f7UXJ1a4R2h6SEvE56Qfd81kj4FpKfUTaiN7Q1VCETVU5fJVZbSZB3",
  "key37": "AY22S8Z5CFofYwYUcnMz6qcR3UekAq5oAoAU8MSjzgNhTf9S6Kr1dYt1gHgCMdJtVTtjcbfnQQCTAN4pKhr5Cac",
  "key38": "3cRW1QJZDTkXhugtfKaLAutWWNzzen13gUExvfQwJb7Ldwsrmr9eQ25FcCgUrfjAzpZxwmgmLmSR7vRvKu7FCpgr",
  "key39": "RmxoyZXKqYc3wJJwXwppp68nVMkrRnzM3AfXGaN1P6tLYTpV5tjM646HADXqG2VvTDCWkeseG1aYydNneytdiqa",
  "key40": "4Ux8zAZ4b9ucvQK2w1rCdyk5UzXkxDWErYWcUATAu1JcJ8CK9VsAxPQj6stkZYWpNJ4BzHq8dQmeBjGai992tQeN",
  "key41": "dLfxbppw2aDT1xGxUpCKr89tyjwhku983kCgCE4yW2pP3dc7DaCAui8atVj45DUvCZrhMisyxWoaMUuHh4V4eNY",
  "key42": "27zxxdnMgRKxqg7gqTEjc6az4yskM5VtSX2z5Kh26a2VwH4o628hUph2jkbG14f6LFeqhH2pggku7vbAWgr28f7Z",
  "key43": "3gogsxSzobe72GyWoabi9j18UcpWKa1ywZckJauGMCJnJf4gQxfYFjTPPDy7o3EvFKL8kLUwiXFRduPnKVDoHJtQ",
  "key44": "3CBAgdiLrghP5kgitABatfgBUwNtQVG6SvmYuaZZbd1pX62wxs2haKZ2inB1Bj8pZaeBi73DTDPrV8STPcUFrBxh",
  "key45": "2RdSramxe5mP4euEC7dZasqsG5VJXeXfp8yv8RekAHvNLEWazANdawxz1NzXxy16QtEyaYT77zzK2wMQ94PoYUBS",
  "key46": "3poR9LNKrYqvffLMdSoXuea9DgdChtB7rtFDNJV2kuKGMbBQhUg8uCcZuzRbt1sdSMMUjRLS8j2oXn7WueZmNpqr",
  "key47": "4fNkhrG9uwxYESYxAWsoFSSVLaBBys4A1TSjVrGhKe1kvCqQMDuodmvhCZnNFWwCGnRp3QRbKRfr2BwCarhdxCM7",
  "key48": "eUvraY7pSArrfkBGkdHYkroYrXc2GY6JVbNV2ZBYg2k9A2sHZXQ6ygK5ogbkuSRzE2vmHMazb1PukKGDhC4TXxP",
  "key49": "61UzHpWYdbKuT7aSwd4cxmQqYNAxuTxa4ze2Qc1PZf6Wr94Yp7M2rjRJmANcf2QGqXv27Dtc99V8LPUAk288zo4z"
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
