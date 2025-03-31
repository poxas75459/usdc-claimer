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
    "2sDhsfMQUH9YQU4M6DdxJCi9sb3HAedrEHpDzLNhMPQRjiGbD5MfzPw1sgxfAHwsK6nJwQ6jfoYsqT5FC4hGdXz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mi7ZNfq8jjS4SXvsudWZPZDV2A3sA61n93pbQEdcEyaP2ajKrBQsp8zZzFmMpwgSD79tpcmUXoyauVWcuNW8nN",
  "key1": "5bwi5uKhkb2zaQfr9GGfRNrr61xf4y6mF3p2MWmDg9eZUNttFfjWXYmc3bXMMCPqihZk5zxLvmU1B3gE15nPc7QT",
  "key2": "4zdMLpwuhyAsMFUekAuqasW78iKXg2MAKYDPuSTdg1cG5kW1QKCTmVWJvjK8JWHUxZqPoXtnc4b6DYSWtJMJgQ62",
  "key3": "89n8MvTafjuHjerNzTpDUFN93nDJhph69LRUHQzQEcrD1jBQ8cd4mvBV9gDhDdJBuPc6hMSeLHUQFQCk7Ag7RYf",
  "key4": "4Crzk4o9cUQXgC66o1rj4tyLE7AfPCzFF8c7PjLhGd3ZAC8BTY67USESvP5PDhhSMJZtip9wDaMxr37uaXewPUa2",
  "key5": "4pXtUbbPqiuAEkEdufV3Kcpv3BJXqrCfRmQRareSKLR7nR5KqoiyTmKdwM54epyNUvc82hARx1QL6FJjZK6gu7LU",
  "key6": "scAx6j5ZW2R2k5qAvFy9krvzjVqSq1FomXSfTM9sE3rLM9qYnkqUCkZvb79CHaxTvY2nTn5JZohEVNg8DkJYxDd",
  "key7": "4YKLzcKggbzu24eHxU8Ty6jJsrjCcLjbTMqkgSrBoxn4Ao4KRcRRUpbS6rkWAyZKS6nwk7xwE9wJL81p3UjcyGpc",
  "key8": "42WUnVNUZ5Nox16sy1uPmbsepYyYErPxE19KVYpiX33g7TJ2YS2dYnXRFaAkf714hCjQDWBvUWe1H4YL9nV2cVtX",
  "key9": "5S4g9pgZnKaYQk3sNxidfYgWcRVm4yLJ8y2g9G5Fqo5k2BTa9JA69RSGDxEP3puzWB4EC1fq2V7r9WjrSedTyh5D",
  "key10": "KChjA5eyySZqiSDXfYTKTqWSGmPda3DENyyHh8f21mbTsiWDMe7SZvKs4PWridRPxPEtXD7RW6sh3ngkUAEzff2",
  "key11": "2wLqZUxSAVvhvFfqCTEySGBCTURSYj1kY2mEGApmoqPszvPe5gtiKyXpUCzWQgeUxoGDQL2L3PR5TF9TWkto2zhM",
  "key12": "3dmLQdwAUES7kgcKvufoUk3WKS6ac4b8mg21u8wy3CjYMvZHoRLVxrkHwGmu3fCAsjkMoRJo1YyyCiQJJpBoN75G",
  "key13": "4jvqdMyPBwRMwE9Hx81SmbgJXww2qbJ3zP3es75WeLTBoNqyJyNNNzrqYRBu7Mh5ybWPy5d6KHBYxd9d3wsfJbnm",
  "key14": "3JqwLJxsTv8izHug7wLKK5rwMH8NCNLcdmm4ZMFwyGyC7WXwKnwzyZC3NNAYF1JDMsNkqms1dqggWEyueQqzY4r5",
  "key15": "5SuSRfzXJwkWnEmqiuhrQG3tyqHDPQE3tLd44sQbrzA7nqYCxWDAMhxWmCX43ornYodA2vS4dDPgox2MAJ8J7Uqz",
  "key16": "48q2iLaJR76BeueuuPNPcyGhXuf4w7vnGtxHz8PG6ipxAZUdr4Z2mWNNq9iwYWZyoy7b9oZraq2tPsvzB7EozNYu",
  "key17": "3uRYirW1gtxMMGnrh4VyMjEbdJYmenui9Kcdd6TR1CdRwBX1n9gNLvQxAxqDUoKrBZF3LjxD3jT9A7PYPmxqVpKJ",
  "key18": "3smx6ThxzDtqn1i4USkiZFQZye7gapgfpY9bMGpTiiVuwzgG4vyNWSirM9GDG1QiNY9conBmbyicmZzSUesimkkP",
  "key19": "2Es1dzvPYriPJ6V3FNVg78UyNTvXFLFkwAHTNRWWPRXPKBewFShQJbLxN3AmJ8mr8Jysrej5Yy1USB1cgYfQdCUh",
  "key20": "33hdh1j6fnb7kMTffgk4FCiwyq91q1VmLSdb1MESRUGEESXYJiQXgRejjQzT5QkbybE8cqiAhrSbzroZts9NrEkK",
  "key21": "333Q1J3JSyvdDxdbtKYTqpJVfb3PnfwgSuAQdnehHPDfkR1hdsAsD3D76VGMX3BKRiY6UcSnMMbBf7PEtDSgmohX",
  "key22": "3k38z4ocW416ExxPrQpQtRsXLm5uqJkk2kxAzayXimuHSYiiMDecKWr1wJJKpj2nFATWH5614Mt79AKuiEAcnRuR",
  "key23": "28xqMbvHvWjHtEf5FtER9THc7a91DWsK52XucvTAhYTTuD2UbpmvFoYvnFx7ajrVHBETyqMZijGQBuQT96HtU972",
  "key24": "hzKPndamZBw5riuW7Z2UaSePCJ9nycAajU3WEUBZaybhAvKJYQZht7sWKthP1jnQdP9VkeYKUsh555dpEg97cFX",
  "key25": "43LHUJXGLATNqKNnSv5z6GrPjqXcB3Kya9DjDY9uUPdeqCaRabL5Fc6ioPEBwTfPHivLf9A9EkyKTRJP3cqPFKMm",
  "key26": "65X9DNToZQGuWwonGcPAKaxq9gdfoXtKMqAwY3H8bEkYR1aAHxobW9wK2R7udVghAXuLXhFh88XCiJVyttUQAoEB",
  "key27": "4GJYe3rKnTecCbsv9XCdcyKGVBqvdrPtTp4maZ35KhVtxZ3z8CzsN2Y7aztv2j8RwVXLPTF4oe74SK2uF3Hgm9ZH",
  "key28": "5p4msWCsHCRNRzcxTcTq51XFsQrCq4BqobcphVmJdoNP2h7QNmes377tX7tpahi9Ma1cFPi6Ri6aWVRkEwkvL4kB",
  "key29": "4AKCLELfrpSed4UpysTrHYTuvhHAFneKbx15Dpbu7AWVFRBsVf7i4NhuSi936z2VgyLUuBhjjSqyuhgAti1XPb1m",
  "key30": "3z28XgYYX77dmrPQhoA6YQbiZpcwYWu8exk8YGJQqTgpcByjJuQxs3k2MSSa9hLcs4XL4fAgLgyBNo6SVyXXDAFe",
  "key31": "46MKx9QFTixZdnmvSskj3iLWHfcpVBFYMzYuaJa9zyTJidqvmzrw1VXCw7PkW4ozfxgAFQfzP3v58UjQQjbZjqt1"
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
