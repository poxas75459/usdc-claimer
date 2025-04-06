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
    "2HhX656uWeRgUAtQG5fDh2u3oPcEZ1ugy1oRHhgTgxugQw4rsnCbuWDxYQRCKRoMv4zEGJ4duAK7BsHpSnx9Mmtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khcfm71GK4qsNqMBHTPhMK1TGWe6KAd5HscShXW25YGAjzTypqnpwnP3522TXEn4iTa9ivvod8oqgPsxvENTkXm",
  "key1": "5FQB3MghXUGvpX94HuypnSwy7jtai4AmwMo9cDAmaYwPaFvsponbChRJCqnDxQ1VHvFNas3XtKX3jHy6ze8wkBV6",
  "key2": "4jnjrTpDNPQzavqMCT5qgwt6AqUy7CND3aD2SfsB64AoaHFuheSRugNMoHGuSSsoUTTxwEPHsdB1ZAprar4qKpND",
  "key3": "566tCtGcCbXfirDuo6zL7X3iNcVSUEyxT9e8CC7gpuytTG22HeotS4gNnSeAT29be5tWRnVjpHkhZMbqR5krc5iY",
  "key4": "2PdstLKJ5v4GLEFM1hr6X8DTicSb2Q62RwyfCxzewtQbvyUJNhUiTSMFmqBZPkNX9guWiXU59ZVKh8zjwwgF2ZCV",
  "key5": "5PLfWK145Rvc2oHz5e9q3gMZ6th8Rtc6AdAKegPzjoMRg8hp3kzQjotTNK6vvtcLm1mkjkHT7xv7kq4bJot5moW",
  "key6": "2GdFkPXJY7M8hsSBYHrU4MH8Y8UYMGFAJvFsNL5gaog4j5KLoaWsQLuQJdSML8azzUQTsqkDPwHiyqpYtSXHgswQ",
  "key7": "3f9nrG3kYRvnSoxWPYCf5aXomh5FbTLcbz9vxQx7rbRA2orx6j2uxsYHiKyKtibiHH7oEMtZEAjyuPNKwq5FSW7R",
  "key8": "WDvnLbGsFZsGqECBmAa3dFT7NvDCzZJ7i58AVR63bdDERJYbT92GbeheyKREvzNyMS7j5B4gSGHWrzbiBBALqUM",
  "key9": "3qhPAeCUUFXxrsX4YazMHqwqRJ662WZXduFaF3wjtBKNWZmEMTdfNGLQm7jRx44mbtxN3HyRWgA5xXkfJyVvRrmE",
  "key10": "5zS5JuNdrPtcdMUcWHt4XoaxZH6tUrsG1yHVXQb6hDP4KruP2zSWMKnuqnKzcnf6EecN5fMM5xNfFjWudS5cXP6K",
  "key11": "59c4SCqrTVRg8dNKBT2F2V4jGRMzPL1RD6Hw5aNr3u8UYNDUm6QkrssnakWqWMpncrYpwL9uX7iuaSgWQ3hjrZfT",
  "key12": "edModRGYqZrG43b6zzax3d9RPhRidkwELb2rHNf4V1sCx8RxtuZsLGNBkvAMxY4R3QW8ZPMh8gk9jb6CFic5E1c",
  "key13": "5oY63D4foTicofc8C42K31DsPkm4fiDbSEnWeGWQpoGhPqQKCohtxUWVAPjbTgYzdv1f8fWPEEL4F3tejj44Er9n",
  "key14": "4BY83XVF8WyDmd91jvGpeLGriwCkLvrE1bmZAKat5aSG6ye6Lmr99hhRwAKCC7xv2NZhb3orsSrJJaRWuM2mjRoA",
  "key15": "JG9vKsTRxCT3nsuPYssjtH8WdRcRdVdops6ypHMx7iSCaX8xuNZuBZjpa5A3PTxC65WG9kDUorvrLLERpNw3K6A",
  "key16": "VvvFHzGTAqBF4jQuC1Z1zn4Mja8NGiensQYGmESDvhzboLpyRuxJzpZCELDJqX6tbGLqUM1kbCfxTnusDBjAeSV",
  "key17": "5NEYfLrKzno3jzRcpptnCbsNznYfebhXoESu952S2hqEgxajt8oYigRnUkUaabkSRyuiLHcPU6BjET6jUnUQ6Sp1",
  "key18": "4y3BSWNGWkttFzRder7Z5kL9szb9JiGqhf8fTpAybsJBc5Z7v5D17BNv9cuMuuCeE1uWLwvTj939rdBd2sXmfLWc",
  "key19": "2smscGQyfoKKoNX6h2gk7mRSrQvBQ9xSNQmPH2Q3G5pi5CwkKbnXxfVM9GpvyuaKX5f6pzBjjg8HsrhdJcPQjUFx",
  "key20": "4efAie8o3UMRxUgiGoobPk28sAiQ6WmqWeZd7Er79b5sntoaqMWPk61CN2Vs35YEmSLyWwXEgm3WVFSMqHsxahzj",
  "key21": "518Aq5ADQZyqNTbd9T834bmAN5q2zsFuyCc6rwwJKSPf8MAvETXBnWc5XmszVLNjuQvAM93ghtZPFxXnEEgHAgd6",
  "key22": "MpzzQ1pgv495PXj47hiuywsPLHEz1pEgKYkoP5NhDx5fAJwzxZJ8uaGUWYX83U2aaX3nLu4UfgER1Uk83vGy7dJ",
  "key23": "yX5Y4A5A5BBNK4nq35TsdfNS7poyzGGk17A7LSmHFcwXbdsd9u2VvzrY8qmRgTDV7L9sqctGZmUcXnEuG1nLJ64",
  "key24": "9AjWiAp9HSfGGdwf5kgzJ9Xh93AoGninnFsVa6N6d3Qdt2k3MWiJrPF4x2cEKac2RGiVecXQhJpXpbA97b993zi",
  "key25": "uTjg6RMjUsoKkwy59d5YkiHrnZfbQcZx3YW7M4eKRpTir13BkpjMnQbkZXN1zdtZyPqAeNfoy4YxQfiGEUjrTNh",
  "key26": "4cVW1F7FHooSFPhu66MT5Hzj7G9d9HiPvkCtG2GrdXByhAcr3akxKAG8CTtTnsV6QZ8igqT36hHCj7suFZGTZSma",
  "key27": "55hBqxUn7kYUWnsv4uqkNzwCZYbjqh5gqqyDWvkoK2YPtVLq3nH5jTnReaJQsPByuh6tZi9zUue6gCfRLSUc1dwB",
  "key28": "2mo9cVGji3eabqUTgVgFLUMt3GZ9ntC4ZxsceYWDn1ij3eZb8z1r6nL7S5w1Q3GFUmaXsPyqMCmnu8VGDzL3hrHr",
  "key29": "5Gnx8EP5Vf28MFBpriJmzAdC3c1mzcBiwEDwdjXpANiYscuSEvLNC7ToqKsMVHaNteyvX9H8PTDgepm5ZCxuqtqg",
  "key30": "3Kryk8zEHQhNUUbBuXC5prAtdbxnCvscJReTFyXL8kVo9rnjf4MDwLt4YJ9dc3VvkkgqaheLJ6juMKHcNTdVpxQL",
  "key31": "4BTSGruFppVBuUP7c1SLdjLXHNn6KtDQ7r99zKdE9BuRfTjVAuzD1Ur2hTkinQeQddHwcSEHVAUG43Zz9MCiVnpo",
  "key32": "2rwzShdr2oQ2ngXqRSRnyNvUhYNvjM6eohFtSMpGgb6tibTjrZK5afCaqMgAYnZKqbgTKvVNUrm8dHDkMXFnV8Nn",
  "key33": "3u25CwwqtLKvfwSVaUJFH8M2nWyhpECC6osVDqXamUZg2iBYUbCjUrkob4WiwJDzpN4XPiA71XqiL6CRW76SM3RU",
  "key34": "5CgrVf8n37DQ6UMggyS6fmuYeWKq7j2q3QYoXyAxTsbePvnuwYWGDnN26yYqV3ALgK7zdNCrtJgrPE8gfyZBY845",
  "key35": "5sScHb5iH8bT49g6bc7BHCVBNdkEQincwrB1jFdLXnkNehdan2LWFx38E7yS1yz4Q8zwyctMiGdik36xW1MDzrQv",
  "key36": "3E6iUHBkNQfUhrGQnb9nDff6YEir1r3xrW836M5HBm6UWoa6MRyzcC82oYGpxn6UgSkvFE6Y2NeNPVYrjLS81ba5",
  "key37": "UhAzowQzhJKJrMPCEZyKDgoudiFb24RRxF12ziviwm4j7zj2qjxqP28cbjjT4hfxiZhDTNpDxxJFEqFdbfU9x1p",
  "key38": "oAKMvAfYQMn4uFRebivqWR7cd9XANMs4Sib6WPfAxebcrHhqNYSvRiJguXPu2F54wUijdRvTe5XSFb87DtbmBze"
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
