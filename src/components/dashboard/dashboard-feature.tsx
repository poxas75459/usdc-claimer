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
    "2b7CrDBdfZENNgZUBm2AdHsx64i7wryZMu6BG4pGMCf2ZNdfVwhozEisy22zfVFKzJrtzek6fzPoeVpWWLTBNkaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sep4itLW9uDW4TjDixLmFfv6XWnfVGpsvw6CB34K5K4jiDdEQMxHGscnVEuk9thybLvxEu2s6fSeuPowZjANNUQ",
  "key1": "4GFasmw2Kdq2VCJASkN7DVxzcLdot9jqG7DFdsiJJdFHMLGmBBBhiHV1ke5uunfJSe8pwa8hB3BpWNEKR3HXNvBJ",
  "key2": "2HEMTCHruHLi4yw5rq9bZbzmHZkyrNMMSWvVmzLzfE6VCF928JdWkFt39crpn1sroD62hxm71w83jnk3zxenVkkV",
  "key3": "4A5QK92WGU9rruXkJ8v81FF58AonHDFeLxNyzhfthkWjpCHWizYfVN5fwit5AU3MhA9fxdgYTNhbxhx1UYWX7KCp",
  "key4": "2m32T4fhWswMMBNUD8KsUKAqsSJPn5szMA9m5UPPhR28LX3sJaq6GVxhGRBrrNv3T99nBtRpphAYX7XqAytwP4te",
  "key5": "3gJVmKtqPzhJ1rY94nve2XS9VPQyb43RrzMGT767UwFQpL8cwbqnFAQpTgDVnyU67FrX18kbUEPdanY2itTM668o",
  "key6": "46cukaBXRQ28mLJ699tJkSivxVi2YaefySAJ4BnnYD9MWx2GwEdEkwhmrmgazbfx2en5bfVRJV6ehPvU6ugoGuah",
  "key7": "5CSNjEjqKnZpWZivib8tLhncEdixcP6SuBJ2siXQT5uAycJw8EV66bCK1upjZAXriT91eMJ2V4gKUTxMVTtnKbpw",
  "key8": "3bbX7JcXPzWN8T4vu5AeK7Hg3cp6JJBiRigdvQ4zWJ5LsbV5pueHrMtSqxbJvAHQcEQT3F2PgYooBcqxyyLqU6de",
  "key9": "3bZ6rPEDSvf1xqXgM6vWpuAmtuXFezdrSXCQhWAw7RxY6rbYcvWwKxrnvnyufduvSnXuKZrhgWn6dnNkUy2hpCin",
  "key10": "1oCgWXHi2eXopTprTRpeHNjm2cZghxmDxiAJuWxuKuaWnVZNTyySKtts8TkzdKATuKkqP7BF4xTbJWmfP6SDYjX",
  "key11": "3Tpbk8BP6HUCVM5n6pDH47PbUC3miK3EL38RhPSUqESmy68cmsBqg2xqX7NpeGLCW1T1dnaqD9iapycpLrYDCih4",
  "key12": "5ZHxip7ns49jMNpWKvH5kNC1638cxZfBqL1xucbuKsUAAmW25JcvYx6XhLw77Fz92GypbsxDSC5e2FF1iuytLFru",
  "key13": "3gxVV7s1sBJowMRCmfEC2gT2wi2iYbbtWCucqak9xLLfZpgFJbDH1aW3ygJLtPDVhpAeYaXpsEBJXwM93h6WKUqT",
  "key14": "5FucHMUNYMb2uYYi6GMwhAy9MBn1LzcEMjWGSyVZZXEopnahFtVhNyMoDRVQmBzHW1NGPWRnvJmN7pNVuYBLXeKy",
  "key15": "7NSFgpgCm3RugoQrxndSnqaJTFfTD5EhZAgKYihoM5vQGCogo7RagxfFX3kX6FZTmYbiHnxNqQoDSYYNvKFoYtB",
  "key16": "2MCWoW25suC7djci5VWSZ5hqH6p5kUvQaguLcAxMyaaLMZWNiun34rGQezFVghY7vkBi81GdGJjFhkYq69DcYp34",
  "key17": "5wF5SykmKx9EDJLm6GSeELS6FzAPoQx3nfFRNEFmfRqxGuTobaoyWAdaqzb5psYNYDxdSy2q3tDHpZd6xADsem5j",
  "key18": "3LGJ1TFssWWCgNKxB6Vr8eZVKX9JPTZ3b9GWgaFbKfLXK8AewS85mTyP4BTCCchxmmUPy9s2i73UxXawifSS8HS3",
  "key19": "2cBLqgzzBHdcwFzDiobBWGc6cvwa6nx6MNZwLo28bJjqLwUc7U1R1tcdDsDhp36mGVMGLM7SgYpY5cHP6pkbGETE",
  "key20": "2ci5ud2KgGXVAEksoPxFUp9VoC3SSZp1Sz2mNsiwUaauzs76pb6qmMZDDwJ3cPKreDqyJCDggyybqq8MpG35yoHP",
  "key21": "2fQHr39PB3rzS2G54ABn4ZS286ufjMcMhFLeiEo3Cwwb1sNsZ3BvUSAEdwjwUCfCX4jJZyfv2NS1LJuarmZypte4",
  "key22": "4dBj7CXa14BgaqWDKAjJHgu4kLCoJcpdgMQZeAvwUTrnpPZvn1D4QuAb59XujUc6tZKiKPku5wyrdfuWLHNe3Jru",
  "key23": "2YQL5bYHtY6GFHzrQMjnsajdg6LgTVxTujon7h3SF5KDNcyqntM1rza5qnjk91d2wWKuQ4wkqC6xDZ2Ghup5GycS",
  "key24": "5dmzLn6sZXj42EVr5AsymjqpFK8z7Ua73zhqmCBRKocgR3KVyLVGTuGfwqr6oYx3bWQBdwnHc5mAjeTccmNTJ8Hp",
  "key25": "5RVhU2LWE8uFacXHayY2q5CFTj9km3Z7cHwP58b9hDHs3mBxCiawEhTrLztkiW9nvXY6VtAoVVGU1NwhRapgrtMm",
  "key26": "4yCxvd1NZ6waKHWJDJ3uofPucE1GKmbMnA1PhhWvcpEXxNq7odiLT1jDDKGzZ5CiCHDSfpsQCzVsF2r8BvsH5Jyy",
  "key27": "3hAjhs568rx2xKNN7KffzBUufBd3EKYwoD8SnYCYxnmz7iaVX4JgK7Gg2oZMJAZ5rV6FdpsAAXZyagoVzspkzWUu",
  "key28": "SFpxK5eYfs4UfiHr3xKp5W5yxcywvyrRtxKNykWN4CarVx6wMeB4veqR4K52TeqJWDTYsKMjhSzDCRiCyL58bvW",
  "key29": "2BATGgjGnWXhcGy7zobJjtSiDRPnbRMXniRuAakgC3C8WqeoAHs4pt8eSHA48LRxywoGqjXN4nUH2RmAYsb1REmV",
  "key30": "2JqvWNHWJGTwutExsuEuKgM6VKC1BRjTDEZ486NH1owqj3HhksTYu11ecHxHntAAZJ4Uksp7QGuDwxbRub5uRfDs",
  "key31": "3rS3gXFAAJ4CFgFhuBwDgdnL1ZP1BasBK1ptjEBA3VMUqsZhCkJbaUWSz9DtidSk61VGCY24d14SY6gbv7PFbMHR",
  "key32": "2DNPa5y6BJftxnhq8UrKNnKKqbZyJmywm8SjAcy7cK4SEEW5b2DNCPBNPPAWJ122A2NisHeHbVPdRuVRwdxjjrfk",
  "key33": "2gxvfqxBYVXUdNVDgUkgqgEDj7ctNXdniTREcAoeULtnXB6XNEd5yj8ZoiXdjXACFus4mzbV5ZJKKuxP2MTzAXQ",
  "key34": "391ZhDPszwhnuQ2dPHgWQyUf9k1GV4FySmVsMKZfWXFrpFeReWsjn68GqJEd7gUrhw98UnLBh1P6Rj2HbkWoPxSB",
  "key35": "45NAmnrwnWfNfM94juLydj7FuztSzNQmmQG5MvCJMHWeqiNx8RnqbEMJttM7iptrz9A5UYU7dgUai1DFtTkGMFcU",
  "key36": "5wC56TFHry8xtx1uinNdYnuN8iBmvfVrAenxhkvrSeYptHfcyYiM1vejjn1gDidtPVm9UP6kLxxS6fC2KvCnADmo",
  "key37": "4TgWugfbCRCeuznxwFLyL8wqfPZt8nBJCDFhqSara4KpdKb89v1B7mrbzmXF4RefGXjiCfcFMAWkpFYRwGvgREcw"
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
