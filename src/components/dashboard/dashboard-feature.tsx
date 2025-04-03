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
    "4M9bDfRfgBQTxpXi3wUZyZvY2f8GWEWvhg1HamJvTfYUvUQT7VRyU6tiRYXpWXgyKMKMHg13nKXr8M9CKVjDc7mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFiEhCDYi8rMUo1XzuQ1DexuVuEbfhhnVXsnf65WEwkS362Adp7H1v4wqY4JeZbdMPwm7QFYdgtxHsb4arpSLGZ",
  "key1": "44ar9V8L4M5TJ18CcpK9LnFMK8siAaWPmJsyKmvpc8DxhWbTtEnTSfoWXkdfocTS7uvwK1Eo27DoBhSQKfChd2i5",
  "key2": "4f76L7sQm52xbDrZeSgNZNx8exvdVSoaxnzsbMEFJwfKX2YoYajLgAthVbnnNKdFzJpnmgd3Bdtez2QBwNEWn3jf",
  "key3": "MBKSRnARAixLPUrjZv6XYCPGJbobYGa9ajQbRYHMoxXKC6SqiGPWNoqoNyWurKkRgp7hy9TAbaivxKKiD24veo5",
  "key4": "3vUhQkvcPxs51Dq1YwykaVnLgVLF2a9wV3owCn6g1GY4YEDWQttZ6uviwSFs5fQ8ux3Pn8DLrfwLa7De36vTss1u",
  "key5": "2yz7fKKdCsSGNU416jKY27eYains7pcpF8iJ5wgRSm3Axx9gAuF6P3MDGpqaQ7W2vUSTv9a2LA5TsegJzqWiycDn",
  "key6": "1PE8dwbkyuuvV86AzS4BLJfph7zsr6iAvxdeTLz5Px8CSZ6kgMPo664AFfaQg9PnabAZKiDHg8odwMDcxHCE4Bq",
  "key7": "3VkP76sYodejWZRvhQc6ya59P1vmjhbxobKijEhJEuoutakRWMPD4394VPVsii5eG97xGWkYbviL5Sz4aTc4wRHo",
  "key8": "39H5wSsyy14g1c2xt6hxyAyqVSme3dRZQgwSiowoNmTi4jgrUeYPgCaUP223jbVsmzEhmqYiXbgwXcBKtY4dhvEG",
  "key9": "3mVQqUuwRgH5NxCnyDo8eAYHdmqL4kMZwZUUBjEamhqw6qLGijQXaKZ8qAGjETYk18UHXYmadLBRrJ51UKfBtLvN",
  "key10": "QbBvWY8oFHtBMYWE7maFposaxox3H9FDf7EVRiEGqMYeNbue8ouTST1jFFqHsDNkNvPaz5KZkW74bSvqmq81LwZ",
  "key11": "4Jr5bvxwnD68HGDuZ1zQxNRZ3MsACcjgkPi54TCt43FZrQ42XypupGee2n6ecBq6wWJX7gypgEqjZE9RKrSK8Kfz",
  "key12": "4RcojZuPxiPhpY9PFyyvhvSwuk2RdpCbE4sh9gSptb3rhTQbGaQLTzJU2439J6TQttx8GTt83mFGqVeZQ6bPbnQY",
  "key13": "5Jq2v6thkzBRjt7TEm96QBF1pdS7HCceqxMNEbpttD6vMiLsULxPhRV7tC2T3veF1Ac7mPxJBrFrDwR3QydiYU84",
  "key14": "3xCB4njhvtLv1skm5ExrACN26NFcgwrVLYhwFgNywdHB4RSKxqtesQit1zzQgHH3BVhH29guPX8mhW5QZ2rt6aR3",
  "key15": "3vyNxXyppQy9C4VsfkS369WpV5284auJPNnnpz4Xx4uxY1ztqnFRqYaNf6HFXWkm1kRkgoYK5e4nQAGJbsjjf5vM",
  "key16": "1UUXuVfr5rQuow1ZVFaN6js2qM92Jzfi73vAcBuzoptd1t5jR6T9jMwBrSHBrUYfG3QqvUKYQ2xFhx4gtDd5spm",
  "key17": "3PzCHboezgRuCp2WDT3E8VeJcSuxCoP2oymNcBF7sjaAtHpn7BGrNDXLFfBiYJUZGwUapCVJ3bmcKBJ7ar82uB8F",
  "key18": "EJ2nZVQQjFTK9M4XGQ1GfombtaGftzMQSbSDR7tJ5ZMVuZGvEtr4x8u8rQxr5Vn6x6BgkuDKNU79Rh7ALe2fW8Z",
  "key19": "y5NJpjrEPcmyBUavrJrxKGcjjrvv541GkDWwXxnbnkoRaVQidkDX7kLvHRCmGxycP7gkSiDk1yapQQ6cP3HhHiP",
  "key20": "3jzPbKDrTUd1utmCui9Qb1K7fuvkQajFtHCQ6ZfAVzh26wkJ28TJRsMEDCX2kLiKdvBeKrb2V31BNMSUWKxQaVan",
  "key21": "4uhFj1VFmkzWHQwx5RquJwQAggKd4aVayyWMv7VC25N5WYNSHczfrzoyUL55kg8z3ytoBsQA7Fu3F5b9ci2RDQK5",
  "key22": "3h9Bnes8DWA6bMqx9622k5Po1nirYjKEycaA6ptuiEQ8826mRNCaDGbf29tQaqHnTfZuXqH61VXRc2Eyay56B5eJ",
  "key23": "pZJfy5Z5yL6B7KNUWpysTQ9eHJBS6PNmSex22rkhcUv7h8WJZEycqfwexqWsEWi2WrBhoWMhDT8FkcpckzyZKZi",
  "key24": "8GuzeJirov8Yz79Pv6pvvhGeRYFALJ2mibiznUsdmeLDRJNUzJqwDLNjiqELgAEBdXMoCzDnLc2wJmFAXjrv44m",
  "key25": "cQyQAh1JXgwyTUtaKaRUYNL9oDDhbKYyRE8QfJAikd1nTWzkgVyW3sudgMCTnxYuYexgRwvGZ2A2rNXQSfdAgvi",
  "key26": "TZynJtmXjUTBJhTZLtXirmtJQQuxyhF1M9nJBWzrAnEGtaKTK5YHSH9s2qFNv46RZpHHAtgPKaPXeWJMNni3xMu",
  "key27": "3Qr5dXHx67m7M41YmC1ABhsYefRMCsPrVTNWKK3VvF6Xtr9dfrhw5GgYivVM1HRAbwdFgrdmRkrUDpSSRn89BCJE",
  "key28": "3Fcee1yZ6JqxJDNjV52eD49xhaM25rKnYUYPnj6CWHAFJd4Mjt9obp71wZp1u1KFzRZZSvuAmgeLtuwbbSmvnri7",
  "key29": "3RuT8c1dzbwLeyBuoUBrANErYSUAsVRM96RhZTf3YVvruHX9kTmD3HJ5VsEhJbtR2Gfvp5WWVnjeLb9Pj3ySMaMF",
  "key30": "4x9Xqno96yKUVarW7CV5j6exQrVW5FeHAaVxRZMtRQfNao49CAUkaXp1SiPz1g3bXAystgwXoU86LFn3DuaEoUwK",
  "key31": "53sijsfTf1SBq6bNws8f8mQKRe8v7arZviAqs49YDWj3NMo65YRH1M2fEu8ErxDKxAxJBg7Virjea6yF9mDqiErQ",
  "key32": "3mAzMsiuoGddt5Y9PacRVkY4VdqJwf3NsEDV5hJj3WzWjyUSPbo8EcVRJ5a5b285VZZqhRGQuaZdJ9nHRrJTBztb",
  "key33": "5N11AFoWB3LFSzN4qXq1DnXhjezxYTa3ubyBaHZyHVQk71rG2PHdyjgHr1pNLenV7uaiDUeDMpeF8jdsRUehkZS4",
  "key34": "2BxG7BHvaM6gnXJNV6N3CHfAdY8gD5w4wu2jiY764adLauQievLYCwVwWtwC3fh5pqxC34Syyg8QyE2NnbpLC56u",
  "key35": "3SytcfMJ5cS5eshUwafSzuDGT9KYXsnLN2qc4QkSrSUQyQfhiC1yCGniF5EBi1qkCzKSmeT7swfJge895LbLD1xJ",
  "key36": "4NqsQCf7Gp2dz4x8M55fkxg78Kobq8Z36gPRPhkcH8HF8Pv8T5hF67jMmoPdVb62xrbQW8E1cETtVoE8GnDscWFk",
  "key37": "3KrWjxxyGJEQPoDfhaQiC6jTHram7a98jQooU4o979TrisiXahQqqrRPyYmTq11iTNquSx78Q4AHKHSJ1JHhw8ka"
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
