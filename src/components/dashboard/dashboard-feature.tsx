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
    "chhf7Jq4Y6bHJRoEcXsgnJEU3PitEXYqHwgbGLD9R4WEZwQfVxTTWxWMxGQKkWvNRoy1cjDiKQ7HjwnXVo559J4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Heo9wSzbJ22Z7LHjVydmGjXMuH2AfzZbqcGMRiz8undwvm5kLxC2DZidwwwVoavQo5jXTXfcLgP3SEypSzZDD2y",
  "key1": "qv4KG2p1kP7Q4vLyEwEX9eoYhniJcSPQnjnt3UsBk2QshBSYiy6Xj2aoZ58N9DfhkNzwmiuhDCR228UHbtbQJyD",
  "key2": "UqAfp3apjk7wtugQtxje6oRTft2W19zTo6juurqVcrBhDUHzk6vpoXUaVPpvMA9XN8rt8rNhcC48dwJxwHuUrD3",
  "key3": "5NE6jPfVPnM9vHfSrkvkeYGipgTngUf9V9gTMdMzeDKH7nzbePaytSUssGzF83NPCCcrodwY4vihdSyuR1CPgB2G",
  "key4": "2Rgc3RHxMsBuUbHN2ir1nLSN84EY64ceALyVD8Jds2ysGnPjKCsnXHbEyw1G9uykXYtgW4d2jneUCfCxgvT51ZnP",
  "key5": "FqMutdzRtAP3wi39BeFH6q2z6EnHx6s44mBSSSKc6nhr2aDXeYMRLP5Wub2Y9SWrvqcixNr4Wu3W5bXQpZLYtfg",
  "key6": "5CsXfMSqWdqUJPYkS1r55hymYZ32NPk958z4XstrKqHRVEy2Npo4QjrnHNZcd2WmaBdFH3eykKJ1QLKeuqbTW7dr",
  "key7": "FvxLcbxJ6Pus1oeVaBkoMdN2Atudj85TsiscHvB1gx8f4NjpjJsUQX77WjAaUkv9KDbnwkwrHW6wBSzwojuekd2",
  "key8": "2eBkxW7qH4HTrcM9feLNGmHQEkL7EdG6ix73JBXQXLaUGML8V1Ru6AhRE2VRFdS8kP3K1ZTzR88w5jx1HHSeK4tM",
  "key9": "52YeFP2gHF4N2eFy7cRKoiqtY41t9rH2s9piNsHpMFRvVy6Z81PbGGLcfnvUakx2RZARXSd9drKQbLCUGrEafDa9",
  "key10": "5PjxrcSJPbwuKNTHFCtujVqKBUpZsw2ZDYgC7M6pr9L3Mg4TxNVTAPJXWWaxt2TiQDPBgixdqVUd1jbxXUBEtKZq",
  "key11": "3HTVM3TmvrGxF8gKK7nKsEtRwNSqcTiuJ9dgef9kJ15uroZGhvhAMcvgoJ6BRSGSSzn6mSoo1YeaFxDZBpeDweGx",
  "key12": "wxcqKrB3gsadvSZ7B4ihZMLKttNyqW43MJcRNWGJwWjVuYjKdoPk24t3CfP91EcwJ4SDEhgLo1QBUeapYsSnqsj",
  "key13": "4897qPnio26ayv3TYvp9ooKFmirNtATyCR4sAF94V22abHwgq7Yz4uSBYddXckFwg8mYnBjeC2HsGuQvf7CmRgyS",
  "key14": "3s2uh5kdg2GsEVabxYTvYj637hX21hzvKvCb1BdwxftXHdGR7Dg4uifgpPFJYp92NZ3Qpe1qVxopDM5GneGKknDj",
  "key15": "qg8vcEgGXaZHB7qZZW2EHY4R2exoynj596MJG9vXzR7gf89isRPGHaDkCz7wnvzEK6bLUPhuVy58x5cvUBytR9y",
  "key16": "531hgsdrWqDtJhnv85YNmn1hVtBqzF5gWogo7aQuPTPwkavKy7rt4vU9k5rPhZXMFDkSfsKSKxPLemaivbhqZXRw",
  "key17": "2yfE7qo2Bdun5xzmLKzHCgFN2zYSzqkmzJCdYX9wxxXb9RweKWxJ1BeHn7jb8nNvdqhe2grSiYEH6YVJ2BXg2Gdt",
  "key18": "4UYkT2o5fWs8qErjeza7bcTE4zUkjZ5pLpctT6uX77h85yPkDG9sHcTCZoFeeMuC9i7B2HyaE7JvgxwZxDijpRVz",
  "key19": "kjFUYj2qbr37bDkGrPNHxf9mnhEgLWvDn8kTY9iyyGoPeBFxiFb1TybEFy4CfU8xBa97CaazkiN8qHrZGD2cPj5",
  "key20": "2S5p5pxHBFA9d1QeLN1pZPmYvhQJndm7fWTTKjAF28CMzvAgo5tSAxeq1vR4XDsxgyrU13A6MZqLE4aJjn91hEhD",
  "key21": "4TbiFFgiwVaFQYMNRDmmaXUf5NBRUFUX2HwbTvMAngc6fpUh6zVE89RbdFEu6KaKGbwGGcQAHqCk1iXEBKGKvr8E",
  "key22": "4jC6cAyC9YL5yuVXG2rN1xvySU2bpqCXWaYN68j52crssCLFnnpT3ujhw6kytVKFzirHdKUxiT5Xw44Aozz9bvkh",
  "key23": "3FZVcuK76wdE23TzwHiuxARJDUyXGG7LUuzHErjCbT6mEDJSy2gDFaGqVe6xx9UfVoWaKHY7fNgjiUswsr2tfVUX",
  "key24": "4MhAQV4NQD3Ggpkqep22Y4ghBLerP7QmfWwkJUWAvwQ2CK4rzLyWWYpiEy8LMCiVtsxQ2Y4mv7LRJ771h9cYfNkK",
  "key25": "5Aw5heGxdehs4Dsn77jqX9xrtd4axsUzQoYQy7pNbyQQGAw996FEsMBdGYVCPBfiqD18fNomaSzs3r15owJd7yBj",
  "key26": "5rQxEVBVP5ameqb5X6TM5wFFXAwFNzaQqrwjCWTuzUzB4dDtP4aHywxx9fs3zH2NdRffX8Wx1WhrxdJ28Xr1eRmZ",
  "key27": "3jnBp5mikhj9NwWMGoeeYGkwQswbhHoyjY8fe46jg9DVYPATJCsofwhVcSJdc8AFijzK9WY31KmfJjoHtMj16K1J",
  "key28": "278LTRX1jP1QkX83t3kwZZBAoGzEhFFmeEarCM1rxCdPhfv8e9NHp6C4ksgxEPyfvwu5RRRCRZcbE8uY5WBUiCu7",
  "key29": "EJEdNvwu1qTPvZMFPm4tzNCJCW8WywLdDRvqUJtVCJM8Yw2nzRCAYfdB8SydvFCwM9ehJ1VEcgYukEQ7ZryBN79",
  "key30": "3DwgUVEgk6LyWdRKYNTAVWgma1iau93NtmHHEYPLZgWUDWN6uukwA7YgYQBdp9ikmC4nNXGvwjpVdEiaL2455Ygb",
  "key31": "41FNLMTVrcNZyNJEVRr7Eda74XvvDGn1dTwmAo2V5np5zCBoS5SV2NcL4WMbzi2zQAcbskiRW8JBtRVjLom9ph14",
  "key32": "4TTEKEV8ym3MGBVJwmJcKvKLax2dAX81SL74RzykLFVUDJsunLJZRqEnqwpUUZRgRN4kre25KPwnrjiPpy5UZmFt",
  "key33": "2bFvwT8QSGxLFgBMmS3Z4YKVqDVHt7s91Wvhp5gLke8s7gCyahFVp4bfnY9y4C4YKDNE21AQFQnx1MxZ8Yg6B74C",
  "key34": "3J8pbBm7iB4ax1b9p2BbpbML5bxZMd2UZzrpWax2eg15StXcr6s52dsfqJ9xHQyXZRxjbvhqCqoeSmVX9gEw3Le9",
  "key35": "391S1wmLs7HhSsCVM4hVprGh86kTqXJLHiqakTv22QH2Da2Mc1XaGK4cK2spbCiXhmLkkCUTMHFxP8JBWBzutsUQ",
  "key36": "XnShgaF1P7XrnwVZsU45nuurZCsDqzDnUvtco8vUACTG7gGfGgeHhgd27Zb5wKW7mwkpEhBjapssEgEAKAkm64c",
  "key37": "5dq8zTVQNxd4eYSQpBUFFim4dhE2wsk2oHS6DxM5XEPHwC7ooYH63haLgctfVeUnUon8rREufnmTH3EG7b5sgUAa",
  "key38": "2VzmDzfBomu2MTQuemRZxfYGFBDEEu427mzLew9fBR1mjPndn1Mzmcx7zDnogjf9SGHyBgX3ZVbRmpASUfanwXHC"
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
