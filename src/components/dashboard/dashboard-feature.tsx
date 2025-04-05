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
    "2eXho9offmbqiJUf5WyxfbC6bg6fr7ar3WHLtCQUrctnsrzQyEfhTGtXV4DAzjQ7hSP1GZXPeZMp6RVSnJuVxGU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuaM4BFcM72MtqTT73JTmZizDzJq1nqkzemDZ9XNncBBLTW6HLR9Gxh7CQ1gGFkerJdj1VkaXHUYcMAZmre9H1b",
  "key1": "uiqagBcDShvNpW7fNZP4JFhuanSZKUDegFXzZoGJGKkiPvRiRMTgAn2VNJrkNVGqbRoAXJJt5maXwCHgroBXaGn",
  "key2": "4bHUqtoiARQYHBde9KXWs9Uk4o8okAJsSS2Ghkh1UmVXCgfjUq7JQEoSMgH2XYAzzgB2wztD1u7Xfm67Ko5YgQ3T",
  "key3": "3AWVKTEYStG6upehgpwUFTxPMwafv1o6gFSjhdFinL3wtx4REdnVRk6DuzeC7ipxDAkedVuefhU8eTa3kauEo4wF",
  "key4": "3wQsbxwsPZNnpqX65MHMxyvmVTB7tWHpBxpeqXmbRKURZQFEpD4MmdSq3gbLb4bq4yPQhBZY4fazTgcJoAyqk47P",
  "key5": "2GcV3ZYRtK4SaYLSZ2Gs7UnJQts1cffrMo1F17WfYuyrwGfjapXqrHKE6KRzBk7WNvyviYDJ5uBv1qQ2f7drgX5F",
  "key6": "2BjaskVP8EAARYkCXVQWjWhoBWfwih7vXAgn2oGpPD44tVqurRZXFi8PApAuspKAHt7fuChcbhFF1AuvarLFZipV",
  "key7": "2Bujq8L6e2PedWQsit8LPjV4hxCxYo4yZEy7esYjP22zopCcUnWqMDA8ckidKumojd1X5kTmH2D48xSdSBuQdZ16",
  "key8": "4ZCWyBTSyHctax9BzttsXzRTVF6dHwapv1PKEifzYAW4kGxytxsn1jnLWsemftdSsxmVuMJLzTJZPbt9TjiEt2Jg",
  "key9": "4rJJxcbPrtURkBeHUL4TPsLDGcKvP3tE1PrYq2We9jZEVevVXwD5C6EWEbNCjUft3HGhDxY974Egrif8eW33rB9n",
  "key10": "5J8Qhp5hoM9EFZ6aDhgNN5PaRFXwDZcSrcwp9M3ir8bhEVEhZ2rB6odw6G1p1y8De2uPKBs6FLkJPgM5i3CFNCgW",
  "key11": "4V8dA23yhktje1iY3GqDMAuHycXnBXjY6Vrj6TdWcjrSE4A8Dn7cY2qQrBZ8gwH2SUnHjHB5ccDzQ8SGDp6XwESs",
  "key12": "2EFpcPE88qazGXoiQQXsY7NZQohtYbt9Vgv83FmNUs4MqQWkhfsRvmFgFvVp85iWT5FsW9MmuHwmZs7j715NsMCb",
  "key13": "9uYwR4uY6sjJv7mVhGxDan8VzE36cYsTNGypUPEgS125NJHjwJVvv7VtMPcKTsaLhbCZHFpErmRxysqnacUo1XJ",
  "key14": "4dFHpPdGcFGfMG2oXUJPcrtrfEJKK7AbHvJjc8WKh1pxWjwPi3EofEHVYyhqKBQfpkv3jD5dxMgZnXKwbCPTi98H",
  "key15": "2kVFv2Et49NSREojtxj79CXgvt7Pvxbj1A93ujKvU736TKQTuLrc2wQ1Ly3mu5h7S8FcpG5fzkJD2XHUWSswrVQK",
  "key16": "HY4Gi6gcv38QD8WqJFrjtxe1y8UbQygpoS8Y6yCihxrzpviMH1Q5KN3kVov3Ac8DEiMYeciJYFLco7o4PFFmoJD",
  "key17": "3TNtvnCQ7jK9s5gCa3Fdp6Ci2CMS1S8ofFkTPRob9rdX9av2w5MaxA2Wh1jbBsvYsbLmKqyMBjphcWWxyg1Gcd9G",
  "key18": "2ZRYy6w1nonvrsm9wXDCrC3vSrav5ojaaYpeqT9Kz6p9qa1JaAe85rE9jYyMwfbpiRhiUv9Mqt8HShS5kUDeGw1s",
  "key19": "5kaaXYzdjNKGqT8DCN8KdKuSKqmfvmEv7S6JKd7RkDrMBWSMSFLnhqwumENZ4wHhZ6yEk2FCR5dbNZCWCE6Lg1j6",
  "key20": "FeNvAvbm8nrJB6p6uzPfgFbd7YpdYYufWk55d4PhsEfvdhmpbmePn1d5eP1y1aupCDGpqCFqd7b1HVDjgRfetvi",
  "key21": "MzZqG4JyRZG4BDtVjf9ELNSG8n8WZWBpa7bwhRTTJWdS7uB3cLGe7FmAXwJoYfvr3QsMZwcKDoN6VcKG7RAh2am",
  "key22": "N21D8D45P6CqAWwqDe6BS59FMCWAnmGoEYq7sU4CztbhSbBbdGePaKWoBXtH2yFRA1Bokt42NEmcGkaKieiD11L",
  "key23": "4AdxiZivJ3ZkD6zDkqCSXL892bpxWA2zvCRZNE8P5rYGm9JcrcbRbaft25zAAPhfNjFcBfcATXhHWvGdauR949aA",
  "key24": "4AkVkDptQaauMEGqKzx1fJghPi3tnK5Fogy4QgQKGakHfpjqjbqho4ScWQxtLUt9U1ziWjCVCNa4BE74rY1HYh6i",
  "key25": "FGBmJK6dpNH7U3zFEELLBwG1hfG2PNw5R9KTuFkuoeQA33vp7zS539nUUYc3bdEcg1fMFKCU6PeLVu613acy9zS",
  "key26": "4rJQnbe8VDKbVuALU87GgmMsa5YuigeQ3ijbhTKgo7ZXeZBWUiChyKiLcFUAvUupRorHp9Syi5oAdfwqUxEscvwG",
  "key27": "3Qk4ECLU6SBEaQ9JisCnDNs2RVZYWrUNdqJUetPZy9kt9b6hg7WTcJXKPmgDo5ddumVPc2HYuYfmWPVQ58ifuM8B",
  "key28": "3bdUzr9Egg3XwfudW6hz6v3N9s9j5jz1wvfNY2TgoQAVG6PHSKpzi1xo4Gj1ijoXJtgwisQ4ddB7sFkH8vxM5V3M",
  "key29": "3r61ipLLtQJTa26cmVptEhSXtzWxUPXmsP21zX1FhKAmdqYbWHL2hHf17vo5VewhvAZTSmNdwzbfpD1H595nzju6",
  "key30": "2Q3pnnXPt2fTMTVQT7xFe7kNp5TiDBjaGitLxVFRahPDhBJEa3BYFYN3JfAfh3iT21G1WxXGuBDvjhRb24z5yy1o",
  "key31": "yE872D3pd3tMTSEwau6nDxHuYAqBLgrGb4Zwpq9CM7HV5u3UT4ym1CmXzw4bVYzAaXzkFu9nFuER7MLa2y79Eq8",
  "key32": "58HTzFQFrj3TdjJjJYJcczLhN1PJqajfjvTGvbTSgWQixyfT7H3Qk2eyLPVqouDDoZ5HRZPNCn194kvCKVxska3P",
  "key33": "2mXUj2GAFZSNySqyervy4iMweLobVSvKWDJywcVMubBZm7G38XX6LWxiZsnKhMyZPZUPx9WqZwYBs9auuJo9YFpF",
  "key34": "5sKHkrrs4SHhSsXNwswqCmHTSEUxevhddZr4Lu4zhVe29QFgnnATKfCYdhTV2voU2oBkfaexA3AetC8pe6Y4Dnoa",
  "key35": "5U35zfWuUQAKjZpjCoWvnVpbfQfdf7xchfMdt2KhC5cECvCZPfNvxCS6oSPnP5d7bhwp75aL1NNmVkGKAB6kw3oR",
  "key36": "3ki6HU6amtcXjY6qa98uap8465WY1x5yHbjV9hP484VJdcq8vFo2wzK8XEU8akgG1DQ7nZV7T55UcnHb2XxqcUGN",
  "key37": "4J6QFBg41HaC6pdm6fRMLPfDFzXNUji2KUrerNym6pVKrg6EbiwDWSxwtJttyUw6CYqYNaZw3uXe1cfB2LepLtoC",
  "key38": "3wX75DzgUgj4AUFPLLJHigdjbdXXaVHpMRckoE4KHVYbEgZW8WuCj6ZkFNwLJkJ3hcBAYs91GWnhahp2ZgzsL8eJ"
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
