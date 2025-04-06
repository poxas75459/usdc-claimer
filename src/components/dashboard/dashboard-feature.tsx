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
    "3JZVcU4HpHPrNTCkwbPZns8PXKrsHxjJJt4Q2Lfg65e6mDu45vGESgNnLv4VLqFtVNNLKpvZX3pvEtWX66KmTBxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AifuLQQDLzSV4SZpuoJbBscEKSbp48EvhitxZ3DGCDY7dJ7MBfDKGCYAC2JaojjDAhZJ5k8rnVFSe3QvJrzfy6",
  "key1": "3ArLUXyueTYstZ3ay9iScHBx8oLGEvZyibc8NjZZzzUy6dk1VDFQJeQzL2bd2emZNuyxgbWrNr2oMgGsQaFSSRu8",
  "key2": "4SSFA6zei8CTZV3jrxW542VbmBLZetcRSK1CRjxmUzdXE9YJoCiisuQ2XTMXYFQoTvsauggvqH7XzxiAnVrgj1KA",
  "key3": "3Kh9VpTwNHZUmt4HcbJBvZ3qrzEXpSsW78PYbhaaL817z8AERfYBNJFKikyVMsjkSB5bNngooUYVoEuXUoSV9irg",
  "key4": "2Ny26LGU4GASkzTmShwnqkdH4MAedUBzzcsKtCSwfCQH2ArPvgPf9aa834sQAr3cZDvY2GYfM8p6jNiMPWomJcgD",
  "key5": "5s6QiLwpPKQDdmvqhkawGCshHsSrYHLnkhJNUuLhDEUx7Da8bn1PoxR2UE5iiviTEQsgbdMr1NeZkJUtudLDbg2M",
  "key6": "5P1482zsxhBhReokotcA61PZ1WCnPCJqiDRkRNtzDcVGmsGyiHEE5XRAMZhCgYPeL1PS9ax48VtZHk44ZmCTnyoN",
  "key7": "3TepBLpnLdLkaoWnb5mxZ91zi7q5WZvYtgjfGkBix9jY4ridpRqsGpsvrhZWNcj99WuQf3C3ip3ZkzUh92wHk8wr",
  "key8": "4hS7biZxPkadCsvCM7hHhF8k7tBH5UTnZL8PdxbW4UdcMRGxHgfSbVr36xKEgJLnVgZPzpHqBSoUfyCqJrQJRCeq",
  "key9": "4eVJobJEydSLJBak1hov87QKr1utQEgB6JK1UWjfTNk2QBQAnk4F4EFDCeKcXF8VorWz3H9bnbAyHxeg7Hg9tAxh",
  "key10": "3gQymr55UjSSmeoRzDn7Ccjqnc1Jdp6iRAwPms29FyQRcCCZHrZ5ycDzDAcg6VHKKJgcziC7zbh4f7xBzzvwLvZS",
  "key11": "PHwC1NxZSvRdXHJ21sJJFhgfTVWQKoNHWhFAVs8RicvY1sCCqgmP1LTfTXNCXGznRC2kA2HaRC7NCZyK35ifTb1",
  "key12": "5CYX8RnmA6kv3FnvfrezQcvRZDFdRDRJsrN3NoCg4Vjw38wEvXV1fGDGE5jrUcruXuUMYBYGHznaPMAMCVgLXdP1",
  "key13": "5WSAjYgpKCMZJpddstECZgGTuvF3PxAZWGhW8cDFcXdexXSZgYoMgp7TNAdLazfJq1q6jAkxoP7vMgqM3b5t3vhm",
  "key14": "4D5WNn5gQa3qmisBFeivUnYHp4ZJnzS5RPamrbwRpF8Aj9rjcKTprEL2TBQiReAUKTqgpVdtWNoaAPXSkpij1cgo",
  "key15": "4M6Y6SJrGdiu13MLgWbFpbDLfcwD7Ci1DWQ535k4H6qUiaJYaFEeEwkVFFiUCcJ91YrnHkUc6eS8thuWe6eND23A",
  "key16": "2d9kFQn56rRcdP8oXpxtNTQVZi31St3xdvgZaewgQhHWubXMFqK8pd1fRG3sbBcPJLTPKp5m8Jjfjt9wzxztBKn",
  "key17": "4qy91xFXX51r1Q1Hm9aR45atZht2SFvtsJpsUe6r3KRLvKHdo9HM8Ma2n9oeRKm7s9eDmYvxGWu7AYezseX1Pz7i",
  "key18": "5z1f26aHFvY3HaQie5BfMKEf2WxixxMxfzoKMFALDDvmSyfSL8ZCLAJ5QL9enbXpSSZhpRo5u255ekBtHqCTvzPF",
  "key19": "2c3zhJ28EWeNJ79LEYsnDXDgY3UUvnufN8szV6f4R152AiLZPkaUfoKH92Y4ejs1UqiMxyDjNeU59dqS1XVqSZMQ",
  "key20": "4agkov7EC5Cjjen5iNgFGDeeJZGYi835qLa2oKm22qR9YpAtxpA9daSwgjKLiGhou7GHKvikpm5KSDai7dT1Z1Jg",
  "key21": "4f1n1XvNAKJxcL2yoqM1cuaEpTTv2aP9N6J3hzLW62AgV4VoiCpKUGyF2YSsB3njZRq5KFgtfQLuf2XDWYdrUiBb",
  "key22": "5cHJm1ic7yQSXJNZrqFpvgLRHtR5kqnuJMAxGU7fSBBRYpSmcLWtMSjWTim6KDb9KAcsbufWgLPWCw9dMbec6VLX",
  "key23": "2NMBC64Xs3hfJ6HhNr5x4mW9YEpUr8AM3BVHTVo2t4Xa3ij9U9rTx6TzqjfGo3z3ujpJjG9Jo8p3Sj9qbC7KPekQ",
  "key24": "2CYdJvxXLjzpxEp9j2ztCiMVqwzoX51CekxHtLj7Dp6an68PN4j8XrWYRsKhUpMLMRRLbgeJhx9Ng8EurxUU2Ykn",
  "key25": "65GAB6XxDE6WQT5sCA1e4k9n8Y5fp4Dw4GPGUsrdRZUeMJmbvQ8g3QNk5ZAHM47181EmcEpHiiEFjFFXbdthLPcL",
  "key26": "5uWmVef39s6o8BDM7bSXPBjhEuLbd84LkbmHTGZgKJyEXFJZQNdtZofzZqhL3rL6Hp5U3HXYbkbE5REMGc7BKnTe",
  "key27": "9nMDfdzPYEt6bBbHRPwv8cGhkn2sHKLoWX26jubxSmQ67odPuTSLfRQDFQzmwu2LJGtssojb1znYMUjUvnebMko",
  "key28": "5u96yH8ZD3TMNrCUy6KbNA4P3WUBeNeDhNhPLYxFKVtb998tYvPMuVg9DJb7jUZdY8tmXpz37uWgMTvMVVs7jRCe",
  "key29": "5DEnvjKFBDTdtZzQM9gpRngMqqBakKkpC48oBnUQVU1sHe5iVoWkQ8nhWZJL6kvkba4Q9sCD2eBEWpoQy77ZWoVy",
  "key30": "5WrnTDvFDy7rjDqAtqXcuiUmggbbqAih6Nd2nZhpFjkX2C2XeEvZSCDWS7uyLw5DF6ndKhPTJEA1kfcvGbPzVtLz",
  "key31": "3XVKkgqSM3X9mvdWkELbpFgDkAtWECBgHQDtUBAVnNyZMBoVDupVgRqtAqtfTCJ6iTTbM1WwH6yqnUH4mbNWbqHY",
  "key32": "5D2HisFSZNqm9J2YLUQHn7KSVpz88BdawDTv4K5bv13TsKVo5T7LBU6fwPjW62ebdpWQoiLvujor7gWUY6kpcZzD",
  "key33": "ycG37CsW1auBc8tcoNcAhz9jfz7uhmaBA2QJMN5nBAZ3vJTENMdHrZPFiMZmFZpxbacPLWEbrvskmn73uegqkvj",
  "key34": "5W7HePuUr5KXHBR7qxGaqXdPMhwJNQc6gLjbJcKzt9dZfPiWz31prBnys8gjJ7gbDjqzLrJeuNpstNe75KU46nYH",
  "key35": "4VuzEGxcUJEfbydA9DAwotFeF53866F43HF5cRxgu1QoW9uijT4xumFQpnwXLXei9LLNTGvwRppS3CbDL6eP6CXe",
  "key36": "CCfpTHJPLt5GVLamdm2XymkrE4rBVdFYhSUKwaWUhmKer2TTbHBRww2y4xY891QQgJJBQr6MkN7pzmHzKGBQksG",
  "key37": "HxcPAgQR37CngafQboChKv1uhn73MXSCE7v9Z7Kiax1Z5mEdkf44nnCLx7fXU3P4Z7Zuw7ZRWmPmdFwPRmaN581",
  "key38": "2cTpbBVsRD7sDb99HY5Z5YgB1C2UKJCcQ5yEZtr3LeBZY7qsby21TJHAwqwSdvyDVmtHRuKE7pzMsBFN3cJMDp2y",
  "key39": "61e9ZPHyjWx3z682WfaGjByLghKfA5u8piWkqu6n4prbYKxZwtAJZVLtPcEnEJptuUjQUnVhAFif6kVFNVwFGPr7"
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
