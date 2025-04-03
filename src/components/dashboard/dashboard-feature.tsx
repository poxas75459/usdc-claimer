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
    "3NaBac4zLPoM9eU8mf3RQTu6Gg4nWVN5bwKfVTYo3wSmtzkJD7KDz3vbaDrpKEv4i1uZShS51SXzZnYd8UqfwLy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLGvRy1Vzx92eecc2weX9fHnAazJo4sGYdJWJKuD2zM5k861XWX6nKmJo6K34wfb1csajyxbpo6PEEz7T2w4Ujj",
  "key1": "2h9LHajUsE1iLLRPPiu8HbyrF5X2W7qraZXTKN4mwiVgSdhhhj2xrQH1GqauoGXuAhpFdhBQyxJQuqY98S3V2UEJ",
  "key2": "3vLN7KVzXrHXyogcXoKtpG7MTi4ezDT6RU1CyZiAwwPTwwiNNQwVqT9VjJ4n299Ea5FAcTqyeoi4jfY7mBimNmXN",
  "key3": "43ac2ZapH2wReBz7SvLhMdECRxUEZDPK9o3YireA13bGUKQ6ymgLKY6a9f3BjfnZ7wKjpxGb2bS6DiFrzu39edFN",
  "key4": "2gkPa3mcHnqz82ns1cNanSbBuUv6DknkcDDdMSxCSitcvHNEoWVUWe433Sqyt9dN15JHiCayLkLT2y5jpKFwzRDu",
  "key5": "4SRyruXGPjrvhRgJC5pdp2A3kTG7L4GfBFVkWvggG92niNodHpwSU81CDWoNrXZdx7aNpvUfF18EAvUhZJ5GA4Fd",
  "key6": "4apQqQxjhjxAaVnauGgKP7rtYA8xuhoXvErQM1VVjMhNbhkWDnHbWYE5hgh8ZqtSqrd43F1wm8xh2ZG9StfWDzi7",
  "key7": "3kqRfBtj38jRpaLiUQJFuGBXudGL1MCRJdkswMBSKNfunuiVnokNLapBu9SLwgXsjQFgcLe3HV9DN7k8LeY3wj5q",
  "key8": "z9799adsUFS4saXe1oDD32Yrtgs3v5Sz3opXWwrCs4pjWTKi1J2BDxANfs4mzQGe2EBchQdvoxTHYsX3BVUpWS2",
  "key9": "4rF8ruGDtmDnxRcs5UN8YFrqhcF3xGC34h2gXRzCfTZwUHHVY2xdhDTu5tWbAj15x9syAgQAJEeF9fasSGWfRUcj",
  "key10": "4Ki7WBtpyCAoyTN19bbf6c9rTDzu6vt65ATkREhBCWBSWH6dCeHH53J5Rd2m7Gr7cwGqJVHuicvTsi7gFGkVdCB5",
  "key11": "2T2mFYUZ2ZkUZWQcZBwHdDX6M9Azp6humQS26CGvzxD9Fx8qWW6qdYA7utwcRiwvRs1RgHYeydAZr7hKjm1NQCC4",
  "key12": "4MeZ154eekoJnK4xEosrf9ZozFbMVtU9V1yMzFkJHs7xTuqtrjyfBrMeuWVjexcrpyBkLWR8fnH1f7gsmypiKHii",
  "key13": "5u3ZDxDNBjm5LZyhEbnR3QPC8qiyZ7fCGrQ6zXFrvZdCzrpDTRDkyucXonksw7FovhfKCSSwQfE8eBRAvT5NXCiQ",
  "key14": "5bHDKXHjDq2Wwmg1tKgkf9jX6jeduamvCYQGpS19tZwAGvn4nGzGZ8gt3u56vKSf5BpTPaJo8Hgau7pTSygTMfFz",
  "key15": "2R1h5zyZ2nkTSkCHegge9hNTNrbkqotURdTTxzYePWtQ9eZkssVdNHszEtuXhF8MuGoaGtCZcRiduDBqo8HmP5bU",
  "key16": "3onuaLf8TAnnvPj4YHNRmrEJXLzDvTVVMQNyeSNj7QYPjW89npvG6Bqe8b2VQnMAhCV8CvAJiBN7mcNFvcnjToRu",
  "key17": "3QbSsJKbWBKivrKVU94huCHxqoW35He2Yk5KFQYZkC4EhHjMV9zZE53UD39YbUK77g6Hqk5jWJXuDRA5CpdGunfs",
  "key18": "3A9a7aDk8ahk8VnruTXxBDaKe3WJC92AgjP3h3bi87XB9iv235DwwrGyhVDpA3CmkgQFxmPY1eqo6Af7ECUZ2Jgd",
  "key19": "3ynMJKVhnxs2QyoUSapqpu9S7tXgibE5PsPsVex2tgj8TuWKiKkN6QPvnQaeN1WKVdjiTSxq1xDf5WzomTro6Z9v",
  "key20": "5E9WELq9Fc8QKpXEhWCAEwqmEQqZnK3198bSHDyxwZnMT3dU9qwNuMPgz1F9jdSZhaLZfBRnEQvNnj4RsFtBCco4",
  "key21": "53oVgzsCgdZxct3G1xUkg72rbTT2upph81ozeejGA5jtPmC25HhcNLW4qAZxNkLxQb3R8K1iXmuYSQUFSFPPoFLf",
  "key22": "3rkgEr7CMSL1mL11KDsDa7Z9bJoYS9QJhuJ1sNfeoabgDuTxuPfoBAWR7h9LRjfVEyLvGu9sQySGiBvpXs1CxHWC",
  "key23": "2WAXMMSX8R4XZPF58V5dnAbrRAKJ7hq9NQiYBiEHRX89DVWGrwLRVLvDKsk74KvUFkLLyMv3xCtYG5d7MdV3pmQr",
  "key24": "4M6f2XiboGVHKnEJWJ1xxZ4GKYiFVMgE9tStAt2w2dttgEYYiUCWnCBN2w8x3Vit6Yfp7RqiLUhn5udpfxAYea4A",
  "key25": "5kmxbNewAWq5LpBGMcrpmM5smaniSPCz2STvhUgKM8WgQZSvunEfY9QrSzGgsAKoRegUJW8cp8u6qA9AoCS61ks5",
  "key26": "48XufB6nBMcf75HB6rNH9PzLo6JYxQchQNrkJMx9734LQ9bWeMwPDrDSELXnyj7YQpUh5wUnoW6Kskibsu5roTAq",
  "key27": "3yFqQK1qpUqfKUmBHmHuQEiQh115bpEMzMsQmP2S6TP1BaUBagREdeWN3ZKcDmM3GcUEkeqTbq9KbBa24iWzVfyh",
  "key28": "4xiFbsmmDFk7DSboJkjyiy6pVBB2jvscWa4bgi2uyeAtieGFgxdbN8EqxbcqhuM9YrRMiogPseYAT6ZfmWreiH1a",
  "key29": "4aWGTaLYzkku2AVubnDDKxnxqgjSR2DtapdvDKmtBW9bmR23m8vvvgmMfxLaqV876vhCDCs82Lh8r2S2NBUue9Rc",
  "key30": "2LTtx35BSp2ZoMWFiXPNboJZAYEnhPc3DqftioHm4nUgqQg6yzT3UKUPFtT94jYyYwa3BQm6D9aEe1oQqFg6exbE",
  "key31": "34jZ4E5wzAbUMhnnEFy95UCmuADe4MF1CfWG18ZmG93mxniqViwZsmVjnnvqiD71T26fqaUywbJmMjTgDZc3v5kw",
  "key32": "4vs8eehCmDnax6zQnf3cGnPTuMMvAnLhuxSRFjyaR7RyBLsUBjgPVFwd9VYn1VcLUQM6RS8XkqyR86LRDWCRKboi",
  "key33": "3SxobYgthMU77Nehsid3AmN5rpQtWayUs2583RoDN8csC5nVMapcE1PtfnMn5WqZfiSYpERQND6sX12cRhiPUFPA"
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
