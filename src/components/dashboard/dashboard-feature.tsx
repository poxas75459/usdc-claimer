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
    "4qmwrw8s1JzFMcqgYNsZUiBY2gtwYLg7Lb6Tqh1CBpgrkvBJKmGt2LBdSp42bp6o2nian91YjuXXm5PWcK1iVHmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5NDPbCLWHxVjnsR8AY9U9q6yiLvY53jhaxzPhYMvkgdx3jUosu9aL2Yjv38SwN2LTut9uHUKYsL8bwTS8vf28i",
  "key1": "3LnhANpE2Goc5Vb8R5pHi8vXzkH9zEMt6ApwFX5VzyJAhB67AvUj6fZ7AVcPFg3CuFPUSFBc4x4wzgBWku4mMGZY",
  "key2": "4Hg79EM4SRoadLpD56jx8sLeMpEYnP6DsxZMgm75aJZb475QaFAtQPpMcSQrmpuU7Egy4vCb2Sb5cZWhKJvewFgL",
  "key3": "2mXvDuRZgU7w57FkK54tN3k9zxEQfS1tXKVvbQcJ73aTtz6zKbF8vVRyh7yW8VNkfKsMV3LxmBMJvz665sDNBerT",
  "key4": "34qC4jv7zAWHaSsWDDfjMFBbmY5y2c5mUyKgWDohpxNx5iWMbvdmfTuYZMG7upxQAbHdoVJkUWXbdmPNZfyfrmrS",
  "key5": "5sCY3g71M5fGrvYxrMGfYE5g5ZAZ1RppQUZs7LXghZVU7vVZomWggZgnWHhRHbzUn7YnEqfbr8dDc1cP42JoFBgq",
  "key6": "4QrrP5aa3fzTMQM8FeetDQftF6Pw7Ku1Y8ZmvNNwU1q5FRk5ZxaMou7a4DigTj2zG3a9q5MrX3QFmKqnDQmNjLoW",
  "key7": "4oYso3W8PhKYPArEx7whqYxYpSwHofGFpwxd2FmhnLsyJDWmNncujLoSJy6RKsyXA8swJnzP4cmFYbGBURyix6Lz",
  "key8": "2CPexufo16JsesYwcej25H19DJg4Fe4rYj8ypY748Jc2PHP8Szs2bk5vSDZZNCJtZispsfsKdccyjfP6gZVVe1Cn",
  "key9": "VVb3WTJTq4AkydKvYZRQiHNHgpMTtwjWjPe2DRxMT9uzvGPP2hNC1RD1tz5ZQrCvL4GVsnoNrWUxSiCwqD1MNtf",
  "key10": "59iKN8UBEfzYnBXMFUKM6SNEhQs1dV1KJx3SeTi1opDwV2dZjmKMkKWRu5nSAJcXfcDwjwvyih2BXnZND8EX95xa",
  "key11": "zyrASfgHFJH1eRJUpsM8PDzZUr1xwanZxG9X4enG8PqNDCRjFA3wWmAH1e8xF8fdV5fcYPZTnbpv6HTbnSuPtBU",
  "key12": "3wZrNEjKqkuz87uQ86m6Q1Wh9FK8weKsAtxRDgTyGhEC6YAqk9Zcqp1a75EkGhQTPhh29JAEnB62LZwbeX7CCzgT",
  "key13": "3x5JKZe3AZvTp18LkTHgvkRUggP9VTJsFu3z9XNQmTJ59dcSa4R1wUrthoeWp1rwGA2Q8Lw1W8V8Ysgrdgt5Kzxj",
  "key14": "5G7o1ZwNq9kHjJvyinioVybaymcVUJ8JvwWU5CkziYMKbjiuFVZ7VBnY8vfQo9sNBThPYkL3hWsaHCkCt5EEt14C",
  "key15": "2Dmsf2NCZob5EG4kZoMkpmeArxemTQKKGmBX7dUT9RYcQ9rs8mBPgGQXmSQyw48zmjZ5CGMdjQQAWjrh9PbUnVJZ",
  "key16": "27PsRfrwPg1Tnra29m2qbvv1sXsXRn1UQfkacTHupU2EqSBNvdwDN3JHSYaeS2r79iyqSNZL47PFJ9GhaSzsFd7p",
  "key17": "fXUoqwicFYtvRvFmHYBH7yaAzQoDtQM7F5VgEJ8Nw8o9pGAVDtTdazgRFGHEjrQxKDQc9xhRibjiNsXuKb9DbM8",
  "key18": "39xM3yDi4aFpdqKRSXrguNi4BHccqSDTDBH8uaVmnFVpWmo9eEhRAWr3g8TKViLKas75yFqxkYZ9LrLMxpwRQfoq",
  "key19": "2LTMq3qi3GK3bsoPqREjLLYnqdjrZcSjRJrTcEtBUS6yy6iH123aTZed5nKycMJ2WavWHoXjw6RaAEzsaR15XYAT",
  "key20": "5bAsiyfzuHzDR5S5XMAA9JpT2GVBqonWqZQpM6QN1o3M2hee2VPEagJgaoXHTv7bK8mqghJjZg223ovDQ8SXiAm8",
  "key21": "zxpX9Kcrnkxv2mLSzXsdpT4yTSpUe5ukDPUU4T1jSSSPgwnkhMRgGaopkSmJAQFm9bXLSzHUkAqMKXAF4VsdgeB",
  "key22": "YyY5ZUhNJTLuTkv42cmEdixbsi4WRQxBL7oZ3s9MiSYh3SGGR9zrvakyhUxJPysifMcv6bxiw8MfAA3sZW9F4Gn",
  "key23": "5CphHhWwLMTRaSscAV6dz9aLUEB3FkmuzKvmSswwwigzErSUPCmTjZmZHzDcQMhgjMWyxGnh8prvWpP8W4jaWWZG",
  "key24": "2fjyNzQ12nwsXgnr1d8CXx79g47hSQifeCVoVyss48cRDatYyHmDZ8ufmvw63WypW7wrHaSNCVp3D4ULkxQNfiYs",
  "key25": "4og5xEZv36DYQkW9cEhK2XG3JvGZfAQFtuCDL7fvBJXXvqkc34XaSBNpqwCVTG6DAULpwLjhHc4R6DX9oG6dyz2t",
  "key26": "3BHyKDQ1sk55gjwQWhb28fB54inXhxxtwEzPCCqm4Xt63e5kqeqd6pwrfnazr9zUcN3bCLaAjANgMJKn2Cv4Rmj1",
  "key27": "XrnwiKwZcVaSHnWpxJyZMfp539ibmmybLZDw65t8Pw35EFqG5aSJbEZAwPzK7TPZhQFLYyE7R3HJvcwBWfRtAq5",
  "key28": "63hQYGhMM1vwZMnaiPWrLF6wS7GredQy1rJhAKdKBgQBPtFBytkigJqqYM71fGQ5tKW7sRkvsfuXpYqQGmQsc59t",
  "key29": "zbEDCo2Kt56mguSwebkcPtWvitgakw4rAvYHsk6MmDd53dP5FBPNnCU1XwymSABEwJsQXKT2FQf6BFJS6MXhQPV",
  "key30": "5ZVt7fnirXA3vHrpJBT6X8memFnYXmoCcQ4xLHZQ5KDTqsqjzxJepMmkHYBzzh2AR7uxbcvEY3o1RVBm1SxpCv8g",
  "key31": "5VCwgwvWB9XZqCScJwG4rw8mEPu8tYBZ9SPphh2vgf27kPTXu9bWqLjM6buE3EmohqP4tVBDR8eFqJ35AjEnXcbV",
  "key32": "2m21RZpP8WD9UwnZi2pQ6AqrhtYARs6mAguVBt6PN847HQCRVbswQC2vcAJaEvW9BbWjKhNnSjbLFLaGR2fdTKff",
  "key33": "4N5NzHCWm8SaHqhWkwvqhmbWRskzxKpNjKf2wCbRgj13dVCBpVSd6VRuzorPV8adqgauUn2SC4VXhUv39zMZMwxo",
  "key34": "5pz2FNw47GSdT32dtTtGtBnTLgBtXDDbK8E7QwAHmM5PRakeASCLiUcX81UfhoDNtc7A5MZmdDD65VWHQNbnXb3h",
  "key35": "21BQUNteWes3TkpjcjRxSbMNzHe23t3QYR6Vs8CRB3awWjTpLh8NKGMuyQyT9aafYWVkAtdct7waZeYz99FCGdX7",
  "key36": "4ZHu2CcxR2AJv3APjxhaBJ9F8FnC8Q4Q1yR32dgYNkdQ85xPV5MGWB5aFFNQvAA8sUiGG7nFvQEtprDkvhtLugk7",
  "key37": "3rjgYQfxKrNENapDmBE78sFEkdAGKtuuBpJR9RrwUkVNo3U7wbXg3E1TUM6VsubsyKAZqycCvrSZXGTWXfJ4s7EQ",
  "key38": "4KtCWrZxPFsw1TaXiawWiSTRTezhZzp2ERT2yDgMNcn42w6BoaGKKUzroc58fCqNHTJUwpp7jxLX6J9GFr8hReeC",
  "key39": "61nGAijvL5P4wFg35KbdduyKvupUcXsyvsiNBV98GU7esKxqkmxKT9spAK4RjXQtoa5FDpz7hV4Qz8sUVUPqzh2y",
  "key40": "4mdadEjRwohSnmdM1rHtJk6PM6ov7jXjTaK7Q8a5PCgE6SenhyDp4mUhWhNYAqwEU814u7dvqCSkHoehQor8bWRd",
  "key41": "3rJ1bCDoKQNwtjdkC5DQrKNhaf3n6bDWrUDgm7Q4LZ3h575njEVewPj1jGnn4GNSADyK2hqFms7U3rmKoV7cW5ML",
  "key42": "3VgwK5a63FpeBNHrJYDe6U4fqoBHTPUCXPnLTynXKiw3wK8nApgnrWUN5zmP8YLCmJMtKB5fAHXigCe4vpNLYPQP",
  "key43": "41jRwTXoa7YbATMKDBxbAsVhWFiiDYAVgp3gBq529V53hordSmN7BagEQwhynQAWZUDErPUFzmHVMpBBhPYeVVgY",
  "key44": "3xX6WsBmQEf148WSfaN8uuTReVbLKANKvyECVuvy8FgcXg2Cad7sTht4ft37XdpXUzHrj2GUBK6eTCYuDY9MChrX",
  "key45": "57EnEbfSsaAsDNFmSVNVi8WKgfxHPLgrY4dF2qtjb1DCpZKnEmrnsQMHfeJyFhFeo6ZA6ojMhzBYnPvpDYvPVjWf",
  "key46": "3vR3v7HEmrYhMb9vGBhCyt8p7RtmPXq2MLoq9kf1U1qmjRtJk5LZMEdixygD9apRsqeD7RHpKwG7y6gDgb3GfBnM"
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
