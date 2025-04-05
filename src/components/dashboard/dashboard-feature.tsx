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
    "nPskx32MLdokJrjJRz9F5A5CkZwVkePb9zwoXXeawUFrcVKivTmoXXjYZutjvdCj5QpjcSx6KRAfoPYQpAmW4Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dtC6u8cUG5MeVHdWo47dpp2iLgFUU9He88TyijeECp9tnPJuUGo886XypverAPi58Hrkam4tQrfdUJ6UbaKwKrJ",
  "key1": "8TuBGE4B1u7c8KB94q1i5FjcS21Ngtt6Nm3jeEmN9pJg67PMWtoWLNLcx9GhC7Uun7hkAebhDTKgY811HLVpkNL",
  "key2": "4pe95jTX7845NmAQfKL9ofZzN2RVgZD8hCmAQDZBe9JJpRubNAViW4uH29wwfmQDw3v4qhn85LoR2pvKcYwxB42n",
  "key3": "3BLn2F5MK7R7Fh3ouZcJSvU2qjqsoAohKjRh58SgAt9fzvzHEj7DoQX6kjRWFH92YnHMJnfFePjf2BdRoPFFJeKN",
  "key4": "3W18J9816GSMtuWksxyFvfxurvDRGkXfHxnoW5dQ6NKkQDpC2HFLcP3aA65sLCuWhs8msXmXXgUSsFQufuYZvsUr",
  "key5": "5XqMyuS3iwGM6KDoTNJMNhpKNvBhBa5Ma9SRv71iEySXwcTtLaPXMKYX9HkihrXGN8XC6ZuTm3cghGrZSvNDXN2h",
  "key6": "5Z6payhLJ5YwcVUfTBWqdpqarYsUA6fEhnbtvDmDTx8frEkKxAHvPTGLxx1DCERXJHBiJsjVNwqRhszrjMdNFvfu",
  "key7": "3HFJyxobWiS3TyWPi6znW3iNhvJyD7weESiocUFAujVcmTEF5S97fJrsPjZepufF7L6tfJcPSaRcMj92Pxw4WoS9",
  "key8": "5ToKAMcDbFajEhdPAUYBLiEkwMTn97snPxjvaFBnEqSio7ANDFPQG7VkTtCwg3vNLyhCVqVGAfauasgS6YyTesG9",
  "key9": "4KpbsLCBHxec83R3CgVPVSSPWdTy9yhgPuBYhgF78b5nhKcdLL1wxmG9UgEJ3ByNhDd4wCo1BVnfDQUZWMMc6EZM",
  "key10": "51HuSJxU1VX4agEy5qQfNDtRHvazAAHqNgXrBi9NktNtCu7aRexJNy5rLPrxMRisg5TW1rkPv1mYEAKU8KpSLq9M",
  "key11": "3XpRHmXs4FeYnCAKmZWnyf98tUpad7jwf8MKLkUwMeywQB9DptmsW2BSHATtE6ddmbsPuqeE5uaLaHRcnPr9KMrc",
  "key12": "4UpzWUZWgWaVaadGbtuzNP27PfDfXdLzL8vS1VHdXUcteyZPHufj5xmUZ9GSW3Lb4QNfjo66voUH9LXk76FzZxqk",
  "key13": "22Qoyt3CtkijHYdYjGs7NeS5arzzdW4TrSsKKf9r1q2ZhRfJF8yy5jCzKY6okX9L1dZz7zT7Xbr1FdyoQK8JFwQV",
  "key14": "31DYNkUqKVWjAfQKWHopdnTBARLRDytLVGLVBbGq2WHFcqvHm8oMstfrZdbKqhZPQccp66EcpMauwE6fgCh4vGpw",
  "key15": "3ShrC7KUyzru2LyWUhe1R1qQTZqyHt5oRQbjbxb7T5UQmYTguTnnWXz1AqAtT9fEAkrjuPNdXavMLwhTF8NvgQnc",
  "key16": "2p49tbj4L77dmNDYgvHZEeG7DyTZytK5mfdChWzuNmzj13RYmENmo43GuCWJgW3koyW9DxCiCxdVLoXb5J5LpY6k",
  "key17": "3BosRX1fd6JqB7ML6hsDeCWFyr7kA5eXMyBg2hA6jSXvnJVg1oyQxzbtp5jeZ9doEL2uXn4kFRT4ALm2SYgxUSkE",
  "key18": "4pYP6MRXWUzhLigvTymsaFGjRwzRZJybFYhFuskQP3YncWFfuSFjfzKhCgFYuJivFsLvRvjsHiKeTc4fXwCvji4r",
  "key19": "3mALUz3yNEMUNqVoVXnG3FMkwffKqZdHrAvmhd5rLb5r1Vsc2atRAskZh3uap5kh6u3QT7BGipiyCmxkuFpnpcST",
  "key20": "YY3Zyf5AHx3CCbHv2VMdhqPxTKSct6PxSFYRKtwm8x1eb3Wha1f7Ymy4591yRHNJEgpqYKkKNuBgpLWu1BauWp5",
  "key21": "3Y9xZrouotu39U6KmEptpEANb128BNfg4qwkr64yE58Zh4bqwb6HhrGKXMTeyFzYL9nbEDZwwCypm11nC3rYywkM",
  "key22": "4AtUHyNqiehi5pRwTJRE2RWi6zPPjx6vAjy7VH7NjVUeG6jshsANzEkyQFkmBP8h7XT87dGWZruJSmxrKFiKArCz",
  "key23": "H43HBDScgT7zVD8Sf81tTknxNDEv7DonuuxocNTwYnntsZ8x76r8oNsAcXAn1FJULWU2APkAZhL5Kv5QgHS6cYJ",
  "key24": "4p8DZTQU2idWzXMKPxdx2vTHXqa3h7F3MVBF5ribrPNdUE61nLzcMkwvhTn5chKAeEt6x2KkM6A6U6Q4v7JsEdbp",
  "key25": "3Bg67KxkifY16Qu4Bq7QXDqFAmxArDSCAn2jn7aTEUDJqTQEgESSsBu7CgpN77jZAXP7strGmks11KbXct634GBu",
  "key26": "4gTUMPcTi4TAUrznMvGryCtiSKs9VxHwMeWC5fb6rWD5j9WwNqbxP52oQxbqToVHGVLBJdMpZtK66f4RkLXP4nPT",
  "key27": "5uaMubZNvpHy8T6M9xUFBtfB92NSBf6sC7riwoGQYQKRFc9CSKfBxgWePniKyFP8va7gSMSDQQhyCAoMJZZDpDPW",
  "key28": "2wVuikpddWkDDNL1Dd6K1z5Yw3Yv5BtJnAf5zAtEqHAKo1fr7ffLWEndmfihBjxL7mMjpes7VZfwuvM4ZEZE5yrZ",
  "key29": "2XkJKn6TuG9u6dhbij1RD9hSmPSe7J1zgiCQuWhufNGUaTMkBStTnbEB2YfNfA2cwiVyx55wardsiyxHELVzGbJ5",
  "key30": "4sYZbNtN9NmHCRUDPNcvUPpCtEVQRHcw9vMAMzSZzjfy6etDAUgS4wc7uF2yEeqMuph18bsVD63AcgsQR5Zzwmqe",
  "key31": "4Hv2yGyjKwyWRqhgTeHn7Z3t32xXeCvZp6sFBd3xJvGwDTTMHrAzoGe3473cdMXP1RiZANkU8NB1mWSBAUQRJEGK",
  "key32": "3hRFxSNUcgobgoe8pXAb7hYU2GBBCaUhVCvDyEdbfEmHYDQPSnmEZd5AHZXvx8k6yB9pboCQeZgXCjYbkHNQ5KDj",
  "key33": "2zwfBpS9MW1r5rKV2WLvAoBQ5L9gDXmMGKzb6js9EhqKptpfqMxf68UtNvHpALZ6DQxTyZ3SLrtrtaR3ZagL4LqF",
  "key34": "4kGQ1BhmtBF49q2kTCG6MgGDPDgSqq2z6F1kqk44vx1ntRyT4otDy6iSZ2jMgkfBSZVv7Cxm9Ko3EZXDZz1eX78G",
  "key35": "sA9E9CbNVkNA9SUxfsVuqjYHYPxAGJ6jm7pgrrmUFndeTcmD1ebgsSo5WCh1vyWyvxkTtBaKpSaMSeAGHufnL6W",
  "key36": "3Nx5zho6vSA4uA4xVk6sD5w11nyW6YXiGfmixPrfpwPPwn1RypXsc8bhjbWRHFPzfSdrgiXWsHNXJy8ceE3Wpn7P",
  "key37": "2MpnLUUSxgEB3FbTBtd983vAZ2BsaFypV6DfkbwHSe652eyswsLGnnxDv1kic6HuYgtxSXMxfzirRLeZkQUCy7ov",
  "key38": "4A8vi9BTiRi3aivy7cHc3RWQexeKJZTkcFqj6u2Wi7XXb43hMrMzbQdRW8iMEhQZ3TtEuB8NtAv7Br2B7egct5Vf",
  "key39": "GTSkm6Q2SDByinaNy5ZJ46xLSKgw3uZwTUgK3Ky6yKtL6RVtQJGdNNKif6ZD9MMMuVuPJb2G23Hm6GWkAr3HSds",
  "key40": "4YFQrGNQqYiMkJinptMNGoF57mpgUiWtSxhmxe6aBzyAJDyGmHD6hw2ZnYju7rBusoHAXgzwRyPgZu24tF589CYj",
  "key41": "2hAV8gnVEx6MEU94rhJE1iS9or4uTNQZ262aq4QHY2rRoPYZzDyKf4cDzMcLdcdSRUkBsqK1kh2ZXwL52NxHD1xt",
  "key42": "4pTJEdX23ocDQidJhiQg5opZMBDBSU3jZXjHCbJJx9kTpFyzSH15PpdtVkrUAXJWLpuM4Zf1FML9JfCULM4r1UbR",
  "key43": "3TZsWeLnU2mL8LyhiZCZUbstTDe7pa7LuHMevLxdctgkopHVzgDa8Tx7zSoUPPsdQGk2a812EAbARVAWUruCvXYz",
  "key44": "5QrjBFiYxpR3YF3PCU8n4cYgififF7wYAbTgJqLQk51agZ3XdqEL8TeLN84VNqdXmjyg6qSziJ6H2FERX14Cmbko",
  "key45": "5r8SyLzDBMtRyUcudE6rXALEiyYf4GU7ruKUqBSo4UsXSw73yVfw2eXX6XYaViAdyUu931c8y74bvHJSFg1ceurr",
  "key46": "4dr4mfG5RyJjzNHbCuNs57i1uLtaS7yKbU7NANqA3eoUJjpYoCzuzAjSNJJdvsWZucbxmD3bB5kJdidTEqiMt5E9"
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
