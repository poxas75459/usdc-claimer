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
    "2tJ7iGS8MkZbF4VdQAPtqggpV4nv4r8WhnDgjwH1AAmmEQednGiBhYRit8rKhSXQ7go87oKVuemmkx98CnuYFStC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RcDiMkWw1CoqtugKBbTCaiF5RVNgi9uhyNmNjVjZmoE1Luv1jVAbZJanZt3w3re1mw6BaE5D9sE7S1A5Fxg1oaZ",
  "key1": "324kiLQ4JSMtSHTjc7aemrDPNnsAkwVmgZcRmFD9Z5EQduDwdKjwqyyeF4MCn3X53SkVc3PdU6iURFWHHWbQahVm",
  "key2": "4kj3ErxJwRdGUG6GFsi2FaNj4m3KKQjLihVu2RT4h8mUm3iTamZYfU9nyjVsBiFxYnCRDvPSXTycRu9PVbApPYsQ",
  "key3": "582nxrKPFHSrU4Mg4tscAHmG4k2zxV6vhVfxqYK8Jvywic9WJWdvNX7qFMcpeTx3RANTbWRkV6kgMXS7pPpn4Ljp",
  "key4": "5bZCDsmGFYkFUnj91zC5vyJabMER7zWRgoqt72ht1uZHRdwnmP17UNnauNSgA4rqyoufaFhgkk8EoVWhMx5wLzUV",
  "key5": "3gfJkzwtVvBpvnem999cRVk76D8zicELSz3gPodKsTDhJ4cUFabcQs8VUpPecD3piYcneuRngvAE7RUvkXY1kVoa",
  "key6": "3oj8gExWXDe1v1xhoXuVEPowpQWroZCkTJzxEp6v3VLkYh2XCEpyaLDC8wZZenzJua59SZKiNefdYseiJr6h8AMW",
  "key7": "2rrfoXo5jVqyeiBQEeT69pVuvanr5LeqQLH9MTjZmb8HzCSPox8kuNQ8o716kBTszTHj3JGYgQnsXkFeKMveVDie",
  "key8": "3ypKTiUh3M4fNYU77HyZrNKMiLWpb49WoXTQ6td6z8hDjzYKB5fTswKG6Skep6J5YJfTuLGonBdXDJya4XMpWtZg",
  "key9": "4PNTcKmR2UtRJYUakv2AR6TPvgU5HNwWrJ3eVVaPGpMLmTeAaZ424ZGfBj9bhQgjJqEqdN5YJ5nouDYFyvq3Ljyq",
  "key10": "3DCpCCiF8LBkH3pwACucVSQ8dt3KRbgZn6gbRwFypJYSMckRcG3eawDgGPEZ94PBVC149xe9hiVyTDcnPecNjjDB",
  "key11": "hpXzhQpRW4FePFwBE1JNEsYy6DaT9qz2f42FdAkRUbjvv45iXmah2poLB8fUpnrqo7ToE6B1JejAA1gJNHNbxHp",
  "key12": "4yXXftd6ydgGcrMVUXSvKihVjUj8XeexUC9PrMAzMGa1J29pdHAzfNjmhK9RB4moFKoXXvgNG9JPuQxj4FHPs8rT",
  "key13": "3wxoJ8Di4GHfz5Z5qkj8ghKNfmb5fgYhnBg7qQBYH7W6SxTYAbZoUd4epPWPWbeePzVqft76Phj3Rih2hfcxAMzc",
  "key14": "42WW4SKsW9SDXyVCMFdYdBWByjE7Yin3XfYU1m4nZJtgce6QmUeiXaE5grr3hedKXQPE1hUuRHt1R8HjmhBPbg3G",
  "key15": "4STrp1g6PEjqvRrLYRomX6HuDyCNVjWRcyqVPGHr2xExT3URcTHTDJMxudqkFzRT4GXMTTNdSBpn7Kq8ikiorcKV",
  "key16": "2oXUGW8wNmyYpFbR5jCrjqafSgEeLCGFCADshdgyGTR2Kad6Ljh5vepvGSNiEfMqbNu9mzuW2VCd4RW6Jq1tHfeM",
  "key17": "2WP5LkLpcAwpY7nqTTpGFApBrbMjwqMGzPKEEVuBLR6UUKKapas1E61HF2XgEEuBJpLwKgjuQgLg7bHVWVN8ickj",
  "key18": "3DuQdWFTzWUfChuJwBpNWcvvzbUHxaTBxGDoz2xHt7UPvgrmFwgMk4HFXXBrPFMAXEE4B49wLH7mCdqPAWkkQXfy",
  "key19": "5Loqseid7ELUQfYdytJp3ZTiJgZ2j7C72BQfDcahEKwn5ZEGmqBgP1P8mf27b34fA3BW1NNEVW4nYeTjAzJEsCVM",
  "key20": "4r3sdnQn2yPv3wmpLwzwNhYgKg7jtxxFtioLiGDa8wNZiQtUEVVhR8A3wLhuhfxyTh3Quzz3867gbfKW88341Nfe",
  "key21": "2o3yZpF28HhpzcGgFM9EJfnR1CCN1qYpQwUapMKwLQXaDsosB28YjKs88jKBTWFUtKQA3PC9egR9kM5UNKjwNtid",
  "key22": "3auNYxWotCtfBy1AWxs26PDufTASJvv3aenQQ8X7P5uXGCB3PsswTMskaXDhYBK95QWreSC52P2Afo7DqBTqg59g",
  "key23": "2dxy9pUxUodkqiBY1GwXhpep9W9JFT6nL1kKeKouMu2j6cs5T8phKwSArEsiPmWPMKXQnauiMx9YBs9oDxRE6dCY",
  "key24": "3NufYFYzvcfbuCdhjpn9Z9ZNUnCTnYETaiJs5dG3dRZbu9qzUWxUZzWXY2oHeQUeWg8Hp14twZLjCgGLhduqQsSm",
  "key25": "3VibGtEqzSTJPbRqorYS5d17HspGLQMoRTSNtxB5PYtAQAbstsAN9yAQYTFf1kJoLfneoE4cPify1xx6idSWj5NS",
  "key26": "43dieXT5johNCiUqWsrQDdybZ8kAqFWuMPDBTEQP5Z4NN8pKMq8bpa3pFfryfjLfh8rh1huAD77DLgYfUPZaz4CB"
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
