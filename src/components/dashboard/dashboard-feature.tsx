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
    "58sGKzU7Z915Q4T1D4qq8CjLKEy11vGgv3YfVCPS5gHD8Acg3spf15aJfbDAKqc77RgAJrzUfp2Xexkd6DBVHAoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EUDDXNrA4bVjnAke94nFUg27idhk1NesVs2oG5Dr2Jr8TxuD4HYUSGHmrYjiJcPLFXvsrned9vSGz9tR4QtsPgD",
  "key1": "2thjQuPcH21LxRxj1h2fhD4XPD2xfTyQYadNXpEW9HLUmQsndspRYjT9ks2gCKgTgQYv3ssHwCkTm3RgwjCVrp3X",
  "key2": "gRvdSiF89yqJosB7NdhEY4sbJQxy1TDTBFuxWwPsg7Cgcv6MiUiKmwRd1dx5Gg4iaLQR68CaAdj52jcw2CG2cNq",
  "key3": "4tXQozN3gSaNbGMLSYhVNGM2qSiezudssoZeRoBpA4UnKpTKvmUS6zs6V23M1FXoAbvN2ZGP8uoP8t9Rab4VZUR",
  "key4": "aub7DSUyKBebMMQDagXp9d6J1NeEsSSC7j6iVhaz8uxP2JvtenqyTMaf2FwBn5dnJJhnH6HadXtBzvsMCF2JsC9",
  "key5": "54mW8GKeuejbMHgooyJqr2vqx3wrZgiFD97fihqzskoPBuCzg77ggWG4ya4boLwyxGuab1LBiwAYQ6T3vRuyPRZG",
  "key6": "3yWysUDz9j4FewPUrTwGvCtRa89fx9HtedxrXwcRazPBMrvHizMm4wfzzQvPM8dGfFE3AG3k57U4uD3eFZwxsDH2",
  "key7": "4L9q5erJ3cES28Sq4JXLhTiZVyNRMnieCaquWmMdxvhYQdDS2RXdpL4ySs1hVEAiKmU1iHYpaKkMDqu7d3Lyt2ve",
  "key8": "5aD5RsSCzTzruhncfdkqeCv9zZcNKFSTrWVDnA13CTkwg6xYrMobY1HcE66PrVcimAn4x3hei3PoU1UUHk8BWXpb",
  "key9": "3cFWLdssVGz6ztgjxhvvqA6199bUnpHJBefZhLZy1XfAkssGw8wWrmSRt9cTPhBhC7kszHKee9tx3CnRQLTcmjME",
  "key10": "3D1AN4HHGBfiWHrWTtmbA352ssFLsLpEz3VcyG3mLQEz8hAe33Qd8Tj8CWrjWHeAmz8UUyG4rmwLcxpFXMMRJQKF",
  "key11": "TQdEBuzrSRWEoSywySCioTCekGwuAafNxFcqhgVGCYxk3mtCbZb6MMTn6nZpze3jCko64JET6PyHLyazM8S9aSE",
  "key12": "2NpBA2FHG1xWxGxzNwu9qnrsP5Xmc8cZCWprTzev4dQBKjNpEkjFZCWBjohw8TPvLcSYfLemjGeaVqXbyvJt2wz7",
  "key13": "2xKRzYXeg3w6YnToQFawnhAthGE3wCU9i3wfxDmdKHehaGVs4uBWdE8X8PNNkPm8GkCyBVN23TnixQMRDAEEYJbL",
  "key14": "2E6kH36nsB3mCCtFb9VU238cCrX3AGwBSx6qvmHiTi2rY5SmpqFyGNjvVeRsu3wrHcuwqPmzbgebrGBGrtst3cvC",
  "key15": "tv1tufEbarav37EzEXJw5FntwyfEAYgkc4da2zkQGTCFN2i6GdSfx4855wt3AUWrNGvjGYkxAfSaq8DEKSHrqDQ",
  "key16": "26fxEetcawYKzMR5B8332PjqT3yummhV2Lppcq9YKAUAxY3aS6gHfgFARz3nEwGms69MWrX1nAXJLF6ZWUe1oytz",
  "key17": "3RspGkKLtbAPAu3er3d9LZW4GKdBPp16D2aew7uQzGG7ni84d9iPav4v74BCC4qugFomxShTCD8uPu4QdNBRpox2",
  "key18": "2kXrynru715xQaYCZmCx8joawBQLKUCsa5gcMSMY8KPx9NweU9UdWvSgrw5qVoQLCQnyPV726Ux9QVBwzF1RJtp6",
  "key19": "5nQqKRsydtfTj73YcxTz5Qu2ng2nRufkqGpYcDB46RALtPU8GB128oaXCqR1W3jJMfmPTNzz89HEgAtEYB6V8vJX",
  "key20": "55xxAg1GnAe1baB5Z81fKjzTt8pnaEQYyGQ3itVgLWGzsQNikGCu3xmrEyGBRyKKrW8Khiu1R3Y16Tj92cJmtGuc",
  "key21": "2dgLnysxdceMQNhpf4BTAGCgTo2oQ9DJneHYf4i78c67Z79zC22wos3hQaeRRjjEwTcM5u4QLYRB2ZeTuyiwgCgJ",
  "key22": "3HaPB1ZvSxsM6mwQz1tyw1JjMX3J4H9oz2Qj6zY1Fa7AXPfenAT8kB1oFSyu4hnrBryzjiRkZcHbnkSB5wv9KEAe",
  "key23": "5Wo5BZJ7qYt3J4LBLjQJa8sjUy6hMavjxYeJWQRXWdccMWjAHXDBCb5EGzwidSQyrvpW5eDMd1pnnWSxmhB5PdPt",
  "key24": "PDnna5gik9jqvAiHjbRKSXe9C6e8fEM9KrVBCsvzhgRrbcwEYzWVPLz6RxScaJkAmrdYW59uh7WSvTeJ1gQuB4D",
  "key25": "5PexiNDWFNT2Spw1VQnrSBSraPytdhepRL2DeTJpXCqXLfPAXEHYnNw46kXhrLJNU8npPmz5AbFRpgJFnwTXQUEU",
  "key26": "3to2AEu5kZwhDp5EFFx2adKgh3bEryCBbC8RR1WZBGLY42iWMGjhL29igoTnZb6gQbNpDmyi5arbL69bxvTrJWqJ",
  "key27": "UtwxK9q7uaejh6od115Xp2Dttn4W7LhLBpFkb3N7ctbDjeDGZH3Vyvs8VLz3N2T5ZL8ECRQhLjYPW3cJ8V7wtz9",
  "key28": "3kdgGxpo5kCThZqU6f2zSRFHfPwFZtMJ2bZ4V6t7zUCvCLn3nv8FjY2yDLioToX4RLTsSor8JqbkHDjoXArCPvHM",
  "key29": "2u2oPTofxEDPfttcWVbxrg7NjBVU8GxpNniWWaEgrkmJJHL1f7LrHvz9GTj3vbMG7pZqW6XQMymN3vio6aiGUCkL",
  "key30": "4GdB3aGxHBhxseGrNZjnPxKC889bbc78eRrLJwk6ZEd3QbERjWJFQZD5LxeU1GD4rSAffmiiipb7EJVbx2FrspTa",
  "key31": "2P792nG2yi5gj6dhBGgVH1PpEHhcvrEngK622fAd8zKWHKXZvxP3g8dqN4iaikRd3hBuSTEyEXWF5en181uFdqCb",
  "key32": "5VrScYPzEVEnxfrfFzMGDernGSWUZ3dehtFYBaMQXxXjfJGxSefF9cyQ7fU1irvB27te9MwpXfZfBVKfckW7kgiQ",
  "key33": "5eBq9J15Ldv9hgQ164TYq5box8gSg5YFyiRCUCgHb35PKTUL1yxoNv2s3FrwCvuZjGMQg3kf66kh59W4m34fnAmZ",
  "key34": "4bMNme84NfNUSkxZVbZzCBJPvkhTjjS3WUxWcDgbtdVCKmXtEkqQVHSAfcSzfui18HXucuHu6zhBzHy2gfnGRj54",
  "key35": "LJtKDgjLCeZoWJGdkeB5K3EJHiESfn9YZNB3BaQ3mbXY6J5bez3Hs4RkPewq1GP1XN4x1Kjz6GgR9aub3fWyRfU",
  "key36": "33HiREbXtMtbFn8U784snjV6xBqUN61ijCBhmbYzhPDav6tPUSQJ25EDgjdfbkta3PFsiKPaV4ki8DKWbyCKqCvK",
  "key37": "3HZKVaAA1vzvgA94q6nsqJfQ1L418Kb9NEsdQVqRQ9WVvVqPVLgzAqptV7t8iF6XFLFNXxw6dtUDquFPgijKvwrb",
  "key38": "5KKK6TUmVWrvRZSUQxjpcMdz9qvYLKDRhE61U8u6RR7oYskpuU936MtGG3Vd81TUJWLmpGgfCmv9gSpPdK6HrWuY",
  "key39": "21exHprmLPBrRQDbmgw8Mjb8Xxm4WX282vtLP22mTsXF168C7A7CV6fYGSf5iN3RnbioZH8xxNZKA8dwF3wY5TAw",
  "key40": "5bjUBE7FKudRfqcogPNgHwtpVkboB5KwnLgx5iEn8H6HVJC9qkqgfUaFHm6u3Qoa1zLwHUpB5adMvuTuwxHsshT6",
  "key41": "3DXuoeRes9S5vRH79KSDSTaom6CtYEzmmVETLVZpDJoCfrPDr815FEVYeK4dsY2xcoEGWGy7pag5jDBgdETFQEtE",
  "key42": "5ugr7nRp9x28SdmpJgKnX6dtUaXFPntyYN5krDJCGbboGKPv4iSn1crUoR5CnfDsvFKThvN4ZNWPCRx6tnXRZj3Q",
  "key43": "5qpv9zMc2uLxk24PgYcd16v3n2cNzYguiAKzotydvdVH1Hq6BGNAZSsXP8TTNxaR7q2KnQ1cCypSYjhTDeDdKbxL",
  "key44": "2e7gNnMkiBs3VHne6rYnVQrvE9xh3xZKt9F4ngj6hLiv13dtRcuNjTbeRyDyjhLt2VeFGTuMv658A7UsrKwtQHTH",
  "key45": "4YQRYpwDqMRM51uYHgVcGYAYuKRSkbQNt4XsNbeEyPkznpmz3QubPJu3iyrBVpRydwHPXm5hQgAi9fj4innps5ro",
  "key46": "66FKfsDkWaHerwenZmxkDw8Wgtah4SkC3dxNyN3f5FqypPQtnFfM246tCmFZvCi4h2MQKwH5t724qFPQ35qHW8xj",
  "key47": "6Edxqq5pBogVqWxCEBKJHzMiyjGhTzT7FQFGMPmrXmuxWtFQR4i8ed5Ri9b8poiNk9NzsbdrM4XbFqdb265xdcw",
  "key48": "52sf8xYwrAQ1jcFUjQHJ6Dj8PevH2LMzXp9hkUZY1LNduKtfSJa2xoCnR6gfoY1jjLJZaDyN5RxAWk9nSFby6s6h",
  "key49": "HnidoXBDLHpc7eKzVFC5QHm6AHq4zahAEqSXMVgNhG8GBkF9hiKK7Tb1e8nbY6wv1gs4ZHFni6cUwcXpHz4HHtV"
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
