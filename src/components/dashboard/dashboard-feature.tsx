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
    "24QDRjQqVD7uo5BhFi4zk3cP38Sv4jEFBhXY7xR41GxMHU6HnEBt7SZectQhHomE8pCTXQLVjYqanjzLo4pgzYD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhkQX6MkQVGaNVTZ2eYfUJ4pJszdjrnAoyrtCSimgykpctpYp1ZF89LdcbPpZ8Z9Fvx2EZLoRry4KR92NRneU46",
  "key1": "2h5f887G4zLweLCYLVjfNfCyV8Wk6F3teEUisFoE5VuwgQ8WWykaD9QQsRJLrA1QqPdKmgsDKfECSrxqZpSoMxV5",
  "key2": "4kNdR1tynmxbzdeMTKTLMpzAk2MTeastX3okxYKZ8vdeVnGQL2QbUyicXw8vzY9UYYcTH3ZdMcxfXSa3GHvRWadj",
  "key3": "5D3Dby7yfXTkXayS8Dv3379aPEs6n4DfsMaitDZxirzFinxcTCSTddQFoQVva7xyqm1LGVeRiaUmu5K6iYBBdLTr",
  "key4": "2wXf6SwnxTVkoS2uzxG1TnJgMBMyUhxJyqHADZWH4n1Z82eYJ67NGHch4GbWkkY4PrHdQR9o5oULLqhDB2GH3Jpt",
  "key5": "4XYd1ZNFhtpr3bzDFnCw67tGa9VJkJvaBiH3Lx8CU8gyrhRaGafT4EqkWTv8Vx5SR7Zsf9Ppu2FryggadKjK5d4e",
  "key6": "2PtM7VeX2T8AxnbgWgSY2qUJeYX49syJbxpiwzwfouVXsaKecbVJ3wxYbwSFJumwrgxKUVE4ujW4PUduMWBcXL68",
  "key7": "3FXZu19S5jmkJ6tfcrXsj7wiVuRGvrx7Z9DryErzCFiYQnp6LB6wWcPpjALkqSEvs25fV8dD9r4AaETy943ikTqh",
  "key8": "2HaQjYn91hhHYTSbaEBrZ95vGf2k3Xim2PLHm5pbam8XHZJ41K5mehDDaE16bqVnuP1tout5QYHrh7c1UmutELJw",
  "key9": "2T4pC8hfErsp1y8WvkueHG9JphvTpgJTZFqLkE633riboYjNhe7v1omZNb4kss5StvCGEJBxGiMFvbpRbH9x8ori",
  "key10": "3KZvca1CVLzUvCoLdfHNWW9mKdwp7wVRLp82pCn9Bj6zMiEDhmKSwTVMBZ9JeL16xn1kv5X4T5cFCBTfpYWW6AR5",
  "key11": "2x9Vkd6qbyaiGYGmRuPLV4Th8Svo32WNuyKZ4bE9RPNBnvmJjcSdM8i1Gcg77kkrYFs9EwEjFGYk3LcEAVsQpo9T",
  "key12": "2Ut5kwMxndeZed6TsYB6fYhjEqwfLYY6J1JXTvdtDwPKcAcBGUscQ81UCGzWhruGKtDCyD6csu94sCyFAyREAioz",
  "key13": "26Bjj4NJig2mhYuVcye7438wWJLjNdjBpGWF7giWMKctsY6FqyY4iNz9FX1u9eBAzTZedPgEQvTweVxZvemDF81P",
  "key14": "5F726hkMnxi5yKknGTzdGm4S2UTU1kNBemPG1yrxzpLGg62GZmnDxsrBhPqJrektXZEmMfjeMf1uoLAFuBujZ59k",
  "key15": "5TEpUoXyeJh5zxbXet9iwdp8Wz2Q2UY2k74QrA3V5HVPGxqvUPn1RaXuAWDWGqVxq4BuZKSRTy24or4ZcKbjJSYg",
  "key16": "21cFvDPn5sK7Q3vtxLvsk48buLsVece5FSYK67YY8oahUMViF9FEHawMxbr4SAnNVTuibeUsw7BCZo2PkNNv7zf9",
  "key17": "3rGedpaLh65k27Xez1RrPxbUQNJojNYu7AD7xvDV2Cj4RHZ3a7hR2AZw1hTeKzZsM9NMixLTq4bNHxroshYDY7nP",
  "key18": "2o7FtJqpxcT6yKsjVbF6rpUjq7MHTZnDAvsXfeqXc6DZLKGfhZ3smtqC7ucZE7muAcQxjzrjjxHFPyaqYV3tL9t3",
  "key19": "627g9ppcQFoB9ayPoNsG29oiei3ckadjH2qUsHXDeBCJ4LW1aRkwib3PKTaytz1Ks85T3Z1RuN6dkquP8aqmJP4i",
  "key20": "5N45enokYDAwhVP8FFYArk1RoiS1TwGT3y1NenUp26Cz2ECTd1A6U2kkUBWoqbgy7B4jcgaRWgzdnTwActPjmzu1",
  "key21": "4augKAeJWqsnW1Z85WtciRJc8KBtdaju7bJE8tULB3or3vai2urwrqs12FVAwUEawqVNSsvXZBQ1W7YoAytfsDpJ",
  "key22": "5SHavH4kbHVBYhe5upej9aEpkFkychmb4YjRCaXJoh8eqNVhYDXQ9KbDhTZmWxmqJCpuBF9WwxG9iEUEx3c1DVLB",
  "key23": "5Hdr6sEU7Do5UtoscgpucAe55yyvJ8DUmucvCuQDDn1fSaJjDgeqjK3R3B4LkoGF9oA1tVuLPnuAKhaSxyJLJBHv",
  "key24": "5ZMgajSHa3bjwDHBK332PenYjJ4c6QDXMof5hNR5XhUonNP55dhe21yWiN2ucinPEYAvTK3GndvkFsBaHt7b3w8k",
  "key25": "3cwqJxk8ozCDqxW6QZqan9B2QqL6sNxsZNjDvXLBZDNybBCV5KMayNwdW88BY8pZC6b3TbjXEFw2BA9vyxLPawv2",
  "key26": "cFr83nFCsem7QSoyF8iZghomWqwaMqtytmz8c2kcWsnVQ6LLZqcZmXTh4LxPyM8Ljj69VTQg89AZZd1t8T8281E",
  "key27": "2ZKYLydNMDiN23wCX1PuWAfzxMZsagZt8wshvy1PoVLiWQ7WxXnpniikJtQUGckPiVCd51imagmkhNtHUKTWaKDT",
  "key28": "5LdV8PK3x6Sa9UpXZPUWL9AcHfR4QvW6BZJsRabRNXnPh5JVCGMUsfC2TrcVgBji4F6sGMK6rYCkzpbYPGh4M4Tw",
  "key29": "5yGqtt7N8J73DvrMYz39snrFFwnhZUHubtUQJDBonqwpLsmPzVSkqKdScr5GtaB7X7cGzxx9QHhZ6cNNwV9wsxvK",
  "key30": "PhSy3m6FXc8GhJ3AJqW76uZfev8tAV8ZgDbN1XfCzmadiXLnbe24mhmgrvYFzYLDw4bJzD6k3U26bFT6DsrfcZK",
  "key31": "2XJ1s8tXkVj9CCiFC3w6xCM3Yat17BLLtMAJ1wHhfbqjsfSMUnFbQueYs3k5vq2kdSCi3MUZQLxCAxzaXMjmmfGv",
  "key32": "34F3KFmz2Uaa59qfm6X4bSBD9f9Wkd5DzomocWYUDn5MsRwb7V9trah4MQD5uAxKckqYBLUgmr9fvPwNZgM1Nkne",
  "key33": "47G9LJHQVRGhBKHxyaaV4GLctcLfi6bWzGGm1PRGmG3GDZGRWy8FSBrqNU4f84sGJazV3khvrDWhoHvMPkqKz7nz",
  "key34": "3E9ZbN1cojm6fLsFT2WjkeemFdKYbHcZ5Lmh1VaaPzRDhorPmkNpA9LyFYQqDNzFjdAAydaSb7rqN1WKZmbqRYAC",
  "key35": "3NQUNrfZXyzocPV8ZFB6RKrumDRNGYdEf2fyZnAt3FuqtKCg5BvLoWbdJfZfdcdhCFMXMvkb7DigFopa6cJennSJ",
  "key36": "3u2N4E9xvdHEUPt8e63MVhsZfhZJoBhWxWdwUPCdiTnHts2Qtfsdm48KT7FdzA5ioN6uu7xRYemM4BF3qBZn72Ea",
  "key37": "5x4xDrXyeHWdAWGvxNGz6VidmsGx1YUkHEyKoijeMQ2zuWQ2hD3TzGtqsdFa1wVWBGyeSbEEVHvnr7gSF6XJ2wZG",
  "key38": "5xvELxcVTmrz49hV44Ccjb8h2xcphiaTNDCWSPgwpjWEHnNmBLneuGyiALRTLGc7Lgj8SiHPi8ZV2H7YigNLoxAE",
  "key39": "3h8dcn9N77FXSPeze1FCQD2i5TdVfwU3exMG21abigfPP6nMbTgyCMfovVaDtCJ4EHMoSQ8AtN5v4g48bgKVZxwC",
  "key40": "NK566VS1adrP2KncDdgwvjoFjyWV5Rx3o3yscS783FLvYD3LAhtf1sy8c5eC9Frz9PWNV5SgeysLpuCccpGwUh6",
  "key41": "4twbUBJBQkzjFuioP4MZNWNZSHBXmo6ea2bWUnmeW8ZUk2mujv6zrG7ZkkuWoeXFUqCh9uN3ikCtKwArSD3nLqtr",
  "key42": "334LNnGxdgws2R4trGbZiRX4RpwogmXaJok1ywUggVctTNH4iydc7hRNqEdgpUDSFHXX1KxVkZPYwiv2X7ZjQDM8",
  "key43": "4F7TM1FSWWeduVxBWRT2Pt1tdXAEuHFvHWEXySWUHqX2uap3a5ypLxn2sRFEpgwptAdavx7CJXZR8vnV4n31cPD2",
  "key44": "yYKoUL55bmJnisxjTdiwtfMDZPdtzRPvMAzXcagQZZNM1uKLythi79fHdXhm5dk8FBosv67c6ngMCJGrNniPJ5N",
  "key45": "45eVMJADp1U5PHakzfrqijjnPgTwrsrMTU2uCTY95BMZEqUcxGicSrUoTaiGeTJdK9RuaJkyJz9CK9CLgZ7VY4WG",
  "key46": "csgK4UKpn2W2SKjR7qqcYdE1AC7nzcTFJD2d1tR22nprJrW4dGPbb63wf9Q2ouT936iPiFfgw1siLqLkXzwwDgm",
  "key47": "2EKyYE5YL7KSbXoa3C5nT51HkskfkkbQvjBfTFbTpeJ78zzjeNSZQKGSKWYc2kaaeYVZS1Kc654AK9bXxpLJWiz9",
  "key48": "4bKrkVXJJmRQ1LGfj51xL5PD4nNSdqNy6uSy1LY5QWYGxWMJ3E9es68WKVdSvroSFoqERL1C1mrtwuTZgrXm1u1L"
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
