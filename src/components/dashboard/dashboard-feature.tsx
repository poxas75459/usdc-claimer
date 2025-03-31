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
    "35QLbPHXFAZDEowbhjLtJRXxov1yrEjcM98XWape56kUNDVNUT5FRgTYZSnaXPwffKFeAA8mgoacR7SfsEev7NmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UDQsexrwtasME6cpH2gpfyX358e7sZ2EJpYAsZd9zNyo2kojiNtbQw9wWUnFTGQN5XL1cyvCXjf6wcLFYatdRxo",
  "key1": "5z6YUKNavQiurQ3QEqvFU6MwuCBP1bB1xJPfczQ3kCHzrbtUwPxVcThiEekrYLmABeKhXfeWPgSvYaUvGzU49s13",
  "key2": "3hR929Kz86HCya4Nf4cSLbag9qWcQBSQ2i1ozaByv9MLTRP2txmQvNAs57dgjgPJ8MY9aAEHdTuDnHMnr5xwqF5F",
  "key3": "4fQbFzssujy9NNPboZsisGENznw3WyJV725SS3NJPhyb7nFr1eqxnGRHYtiHx4cfGQPN5B2kMikYcpxwEFYz6hz1",
  "key4": "55AFHqYFLisGGgrFaxPzNEoaHVpvi3SnD7D7h5dZdh8vzurScMNVV7EnRXr72idvfo9SiNXgPTznJjKKQkeSDfiL",
  "key5": "jV4Z97jyesW4Qt87C3dmkrN7e9Xgca9BLNPFaeCJd3RUQVGc2fqz5F5YU6e4t37m9qiqdgTUxSkYjs634tvnrnk",
  "key6": "t7BNgGpb9thN868QZ2m9i8k93xDqGUnjGrFUTyFa6iSzyk1dWusY1421qernWeyeTQXJdK8BpbGsifHBis8W1NK",
  "key7": "36J9DLWRbhwMyYCZc7cDm31YiDmRmdfibsQxzVEMxHCU6VN9bsdaGo873qH9Mu2Vqvtn5Ldjj3dcLrGCFXWyjHLx",
  "key8": "5tHqtTa8aziWipHwe8Xdsi16gK1G7JZXFbog1qAbEH2mUDoGTowo5TUPArw3X4iaEBWuCpZvHSChAJqpCip6EyLt",
  "key9": "2XzizmFfNV8GoY6HdhWCvi1AKhP19du5koJQYZAfsBH8CELTotpsFb7HKPNjruYcEcSxFfaG5NXRME4mK385SY8X",
  "key10": "5YovzfQioHp9aXSCyfwsUtE11Ld88EJQnwUjfXDFfr4zJdL7G924PYkMShPkguH4p63mM3ZZ6b9r3uoSacCBLzdy",
  "key11": "4wVvpu9fu5cB1oARobRXsXheaRyUDenK4drvftsx46gL3TkZj1h36Twkf6cy6nv9caAoQrj3mxFcMadMbCe6kEmJ",
  "key12": "2KqG92GVPdNtxAbJcqRH925qGEkk3LSYggyC6A4iEN3oU56XRGx5VEZj932icpghmLEY3CVHJ3FEStcwzVsXFGEo",
  "key13": "4E7WBAKjVUqY7j1K2Ca5xLnPjS9KFBAxffhJNcstrbrRJEuA2kuca51U3TZYokkoRrotCgCNCsrXamKGBRq6SVtB",
  "key14": "CTxcbxFq4ePEuuDR6cEt2hTwAL5Ud1Hqn8SiCEtaaXYxVEWCieu5Nu29zN5FkZrKHcrLQXuwrmkCWm4h6NuctfT",
  "key15": "22CggqpTqt8xZE7toGhdarB5FUMn63DwYhZTVmrTiZtDeu1DNdJ6Tw4ZFk28fVvYoimGAtUe5zq1MUb2ngRgWWHs",
  "key16": "5Yvh11as71JZJWui3tCLWCNdgJN9QoZCxwukhU1wuJaN1WbkN1TdUEgteMyajgJSsVVHc3QBKhue9u2rKBvvH3j5",
  "key17": "2HYQ5SfqzhnuTdxdwTkWvuqtze6TZ5uGhLrfJDrYYzAux6DPJk5LzsM2Cc1DFfgta84kYxWGpqJgmmUPWz8KDqwT",
  "key18": "3nKGHdXGowVETdEFSsoAcpMqGKbr7PLWdJA5cSvgDfbzVsudSqZ3vL5oBYVGhdCBQTUmFBiyXrZVQ76pX5N4Lvet",
  "key19": "3988ov1itpPeARHKHdWuice6ZoL14st2GMRydwtbfs5ZDvMJCtmQwV13yr36kgadwzbHoXTcANL8jLcuucfQbjV7",
  "key20": "2YqLxYJL55zToNdE8ura6aeNxCJThUiYi7URHKbpgzVpjBHuMQtoxwxwUngusUhHrudS8NQ5TbaJdgEcJToze4B3",
  "key21": "23JK2P7gYfNhJrxDeFD44s7cHZ4j9bMCwQ6m9Lcsz6fJEaG7aq2PLqu5YHe2Nin1QwBoUi3BuohbS9GV4ETuqiHv",
  "key22": "rWWuJXVt21zfHUvpjRfU7FkVrkYAiQQap5QtYgEiVr9sbvkabjqcPixyQ3dgrF53QPtUuSUX64MkRDVrQXsnw9U",
  "key23": "2MHMQ9FNi6QjyuKZWxJFeC7Rv1UNaFqTut3ax75g7wmhjvrhZrNamEVxxTMra7c7izDzsckyuXwhz4umyXPCW48y",
  "key24": "4DEqvfJkP9EzeSuySKpWGz6rF2Um5BcJEs6yWfkM7Y3R4ZsedZ8BGiXraSfwyhrf2EWY48aLZCJB36JR1Bz12otc",
  "key25": "2exxQYehWdGeAmogJXZUh6U49MRYbsioGCKrD9UTB3k6HucLqJthdE9C3ki1i4XKYzneYtj9W1krWdFiC6fghtTk",
  "key26": "2JQHfBrYY77gLQ2HJNVmTz2ccWfQrueTVPUYnUSLGLX9W7sKJY2TX8LEnm2BSczTUf9r57eukN39TLbzRxSXr9hR",
  "key27": "2EUKoAswZr2dktZHX6L5mMuaJtWkJWNvGyAhgaixmHQRY6j86KmRyGg2kGeLEnG5js2XcyA55mbF5AfTKC6nbg2J",
  "key28": "4e95vPAwgkJGHK7BeRnbtGZQHNKDHEVWmMdYy72xsa9Mr2y8Ucx5367pqhJHaXqqbdso3ko9dwB2yiYpNdB8o1kM",
  "key29": "2VLDKwMpthkKKbAecVTPET4tuCJTfeqzVZM7sCaweibMpvU3yL44XyN9uVunf5NWA42DD3HPcyjjhDgeZGzD8TdY",
  "key30": "UA6SWZbBA9TFe4ghhzj6xGUcFgzwR9oKLeuoUJNtMPAcwTLH952YS1jmWxSua2bGZEoMhvZUzid3to3eUJzjmZB",
  "key31": "3mAqnZ4KacGVYj8fzhHsg9PJdhjyTouAvdbS2pq7vaeMXWgCj5BydEvmZ2jb34eyBjansYCLe3vqVKx2WkzZEns9",
  "key32": "HLXscVr4Uz7eLeaouK8rPPTQMnDc9ooVvf86LTeT9hLfECAXGZ5PDzdVtFpGk8roMWQd19xbhGfvvaPRChxz6QL",
  "key33": "3f3miro4WMkTrjdj7XNJv68icZYK428wuS1dit4isUF8bmzqrvj1m2Sy5xx85HGvjzKDPJZc82vXGtHmoGDVqHgH",
  "key34": "4d6nEpUQkhqytc6wSrUBRE1Aii8fNV9RM1u5b8XVJ8HDsLWVAUjn75aai6y6mnDpu7f1peYC9Jo2wicSf4AaYMZz",
  "key35": "2JEXB6Rf1iRjm5EcFCw7TDMVB64UN5oigFuRufDUFUAreRNWz71KzgMbPHnMN5SgTUXRsGiLvfVe26VTNMdobSbg",
  "key36": "fyLzL3VYFc3xcSULqwtP34k22nmaqWf23XR4NmDfdH8qod3EdzNfFK4kYyxcXpF8SdVFkbEjpUfzPsgSw82T53x",
  "key37": "43kprDku9NXh9mvWjv3NtFWyV4eHVWMwfGMsGF16YYLGJAHh8STzGUx3yFSJ8Phtxmhj2TW9mScQTRtUrU8yYEbs",
  "key38": "2zcq5b36DbukC6fujmWry8ZoxwfjX28F82KGR5fX7wGGDfKTMJDmYmJ7tQNXuGRHTYHMYoABp9n66WFKHXGxYTLX",
  "key39": "oRFVkegTAqxr2QUzy6fiNCyjpomjbGaqpea52kS5NTug4h5QTwk6WzAWXPyWHwi9f5uT3A58kdhDuGtPreVKr9s",
  "key40": "56ekqojutJqeLDMK6HKCeGpgjQoTm1bd9kUMrGTrgVptrLqSiuYr6tyX39sx2FAE2GVcGCfzmiU3pL3dQ4fzPk5o",
  "key41": "4bEk3DCSDV8ebhU63JCnTQ4uQzu5uqEkYYPkFvjHJFUq87Egu7rg8WiP1hWuTjBSLc8FVDcRVih3rSQMBZT6YBz9",
  "key42": "25KBHrg3gx1WEXEtUSC6hnYLtiLCHtwDzjo6rGyZRdykCzCQ1mRXQQSBG7hKTzA29yqzDnyUkqqboHz7WZSyeKzm",
  "key43": "2QP2ApX1jdftXmUiTcGPtZvya37X84hc3ds37j7he9ypKVv4A2sJC98vBPQWyVR6U75yMeh8f1k77AQACg2yaRNc",
  "key44": "43p6WWmBLXmjMfHSjJtAuNT19uFwEYF7pnibYzTNhiFW1GzTftqPUmiR2ibegHTP1azrRGaskAdM9N1Mk81V9Rp2",
  "key45": "UEuzSADT9NQNxFWPkFwJvFMTD4qdtcY2C5rHa8MWazPEsmd4no74mvk46sXxwi67KPGdsN6V5VJ3xoogZ2cu5Qt",
  "key46": "2gTuGpo9FU1rzQr14TjEgHqWf8siebMrw5XTwBUPrTwRwaLUAJvaigqGw22cxe2xrY24pSDwhDLcHK479BTS11SH"
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
