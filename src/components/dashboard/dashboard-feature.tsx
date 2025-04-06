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
    "2KqYtFmSUYzvhUevDgwiPP1auDjegk2ZFFQPSFm45cNBw292DV7b58PCwhNwBtVSqjhT5GBaZMhHkmM9pP2AwMer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X57nwyzrshAwmZUvZhaWiCGU1TR6WxohmSauzCbCPhYkoPxCJdnEi22RpZVN8tPYAjp3GianprgWz2ZBpZJuusk",
  "key1": "2pMfTv2VKoRo4g7DvT9psKnsSAr72wTrCrja3QgXyJvBzbqhTggy8yPduxGVPf2CmVACiqfzTTpgj88xszALJ1e3",
  "key2": "KjreLZNWNASyeSmc5FzZ2XGfFFnZut3oLDEAgjUBHfdaZXXQxFUUGPgLdbWMYLBddHvXmnDCjDXqMNRYY3LEoUD",
  "key3": "4dfBfEKNGU5KFtPMB3Fv6WuAQgwhwLj34rC9E5os8VubCLJVcwzL8CJNsV5ZYWEKGSRoW5PsKrLY7wemcb7CJmFz",
  "key4": "4fbpaQDbbyWeubVMi1ghAYMYMmqwkk66ga1y77Azn5vpf16QCx3G536eVEPA6pRcKAMWQZ5oxVGm84gcWrhciKpc",
  "key5": "4x74HRoWXXMAuDEmjPXvAhACkdo5zUNfdUaCHZeaLmTeEmh1HnDSLE2cksAWufbsJ1oMjNWPLMWGZsjh2SmPdCDU",
  "key6": "dvHi2GHRVwXCbH4J1hePy1cqMcMdFXRTRv8cNJs7LP2GcWN9wPV2jQPwfgpKBfKMW7y5j13ihZnbDjFheT3uzkR",
  "key7": "sWWgHyvGARSAujBGBGj8x1p3MzGMorsid2uSyNmU28SoPAqsQnD6LdaSsaUkcYqSxcHp1rTgH4FKT4yp8xcwv4s",
  "key8": "WdJrHzk5ebYqJ8hGmiHjVVK22YkB4UPez5HNUUfS45d4rgq7P36dTf8aFTEpAj6RfKzC7imZKvZTo4kHMLvxjiD",
  "key9": "54uuvS2yfrV4QzbgY3nK6k1p7CgeTGtrhun75F4QeVLE12Nwech3UV4S3Kvp79iJWrE4PoRGFNZqgiGiqMnDTDR6",
  "key10": "PfEquHSopSyyUMgTR6b8xStj9EsyUc6vur2KDNVj64wV8zuc6DJLZ54yqubah68z4WqtANLmGu8v7WVzwXV1row",
  "key11": "3DBDe8KyaJoUuGJUiesfinn3emTDFgiPNJet66sn3TEn3QX6CQ2bjDCaW5L5gfFh7cjnFRQEAb4DjrR2KQFkR8bh",
  "key12": "2MGeMaw1Lpw2wm3MfhdyS8M29KP9gSSkFPqRLDkJHQP8aNhcExH6T3zCZ7U8Ga7HVGvYsU5kBmSpgsTJMbZfsDk9",
  "key13": "5b8Tis8QZKMVuSj8Mff182ymG6V13v9mnWw5FBSRJLvNf8b77xRKFzzYryEF9NE67PUpwE47PwAG8hco462x3VRi",
  "key14": "36DVLPSdmfTwGBjAprb8hz1DU9n568dUqZDdXogWpsEAjzFjiqviNXDxuFhmPtjeNXJ73cXEF5oJipNiknrXTH35",
  "key15": "5s3KSgr6Ja9BXVSjsCKT72ChEUAEF69bYpmmusnGfe3BLi1HEwzqBp5BMA7TaqdHGR7pGgbsreQBxDjremJwqnXf",
  "key16": "2rci96euqw2jgY8wWZLfkoo8nVFD6nspjop1CEYT9fSAkW3niNdYjxaMA9etpJRcCY1bttpvhbtvdArjLPYnXgA7",
  "key17": "5iAxHwTVLxhEN6FFhfpahL7FPtKfsQd93JWMgm3FnGLmpgYm8p4LpN394rTpwmvUxcrLfRgHJMss94YtSPZiuTok",
  "key18": "5TFunmxk7VYihFigURmBVv6LLF7HviTKFMy7VyhQ4e5QBCh4bEZVcgkFLUa6516JgynjHbqJ4ELqNKVduUCd8dN4",
  "key19": "5cdHXYwhcGF5e15LdmEY1j4TkEpB54GgmhWK1xnkeo39Lj6f9kr1yp9BMd3BifHx8opb3CW2HSHyY8Vx69Wu41St",
  "key20": "3KKZZxWFpidS5W4qau9aEZyk3rDbDAPPUkZg7wikpJXjwgtsZPQdguwcEkwTwwBYJH6UQ1nDv4HFBCgfVfqARtfT",
  "key21": "mipi4KAxTHDDMvQaPfyf7rkYhsxF2BvZafvkUEfiN4JLU7yH1CTVkePAFXXYTwd5EjLqyA97LsVdtHPQfnsmtt4",
  "key22": "5c6DzsC4ksvPECUS8K7d573CqkC8zjuAfiwuZPc3gbXtf9N3G3cnCjaWVsWK4oqP1zKQ1JdNrbj2mUDjcZNVr86x",
  "key23": "2uwNq6HUoZtyPipVqRtBMB1Z9NUXNA1bt2fTF7cuYHQPopRuN132mXN6og1e1aThyRgHVzgXumsDY29b2XyD9NqJ",
  "key24": "44boabdAd6Hmfzgp95vVPqqGMqUSjNSG9E77PxqAHL6f5i4PuXEKVB91F1RNWuTq5aM1Ki4TfX9DLkpn52FbxyVS",
  "key25": "65hUzFLpSqoWzTY7hCzgfgwBq5MnMzd6hhAgfhN7TcthwYqwZr6XFzyeXKFNnWTB74ixHMimzdYFu9AB4g196jPS",
  "key26": "5dF8fEXgQyRkTqxoS1yWYzoSAjRhskuyDG8ZF4DBWzUoNXiTPycW9AP6J4eiiQyhGanqMmT5K4sCtPSJE4664imw",
  "key27": "4DPpQiLp3ZoyCU6G9PLCtsvf3BKDE17QjS3u1tsyobU2NuaW9Ni5zp13uUkgBBhr2jEdECqJby3uC5cCuUoCanZd",
  "key28": "3QEVeYod4D58pDzx3QeKfV7RfCTcsm34KgckGKSxqNY9Ks59iBP1x42tnHGh8usZduKGkUjEMWcPF69sjw8XXwTe",
  "key29": "2WmtQJSdRhm9Y6S5HEQXRcXeN1N8GGBhJGLNtVtmYhnAVyoMJb4B2j9VxRCYZrma2b7phe27ECUxXbzpJ9nBHaAS",
  "key30": "4KfAhyU2JSK8iqkvL1rxq3XudZmtYkGarfTSpy8C5c1CvZ9udY3L5MfKMrDb119ccMRTMaWyDaxw6epLsCbM5dbE",
  "key31": "3gwPSWrJtUdYhRaGx4zVKVJr2Emtu95y3aC4nkogTyCkrsLitWr463WBgrKRwDcW3hBLbcsjNhR4MAVM6VFQ96pt",
  "key32": "BZRVd8uEnTcXP23w5RieJsrFWvS3JVr6766Nf1L2jxQPa9LhU3hcjD2JiyaVeZHeQMBQHvnRG4PUYNixKPJw1wT",
  "key33": "3HeRmknxVz9NhzR5T6BVVUWUuuWKZu8zbddV8FtNJbVp5DQw7mwv8p5qiSmVnTSdjTSSEERGqxphq17n4Mtwa9hF",
  "key34": "3JihSLSm9T57ksgcoDEF1aAfZbwJCJbL4PAgqGdLHiEVra7JecEzodnp2MrGvcC7uRCHGwGqG7Q4Di7Gf9rHmtaM",
  "key35": "5Ewp15oNep6swVvxhzwLBv3RvJKrviZet3Uo5n9oXM9BdPhVjnNBSLrcxdDi5aV1zvmripVQQbBRR6moGhMfq4FD",
  "key36": "3rjUpcTL2CSR4KSFuZmPwQ4s6XZ29xrwJ5jgCMaA3ApUpWoNmyBsU2N1WgQjnoELKDNseHRprP8pW8pKAEGDFW7r",
  "key37": "gQuEHuxRjVSfRJ7e8rt5Y4cnPsUcxcfxEgp4bs3qAkPUxYCwMj8zZX59j4Ck3hQXfz4T7Fc5VnREGsncXiPUZsN",
  "key38": "3mQBepW239N5j9KXZMgoCVcGL63UxyjEPAmmyM4f3GRm4iY7fizFWtELTixSZjxg9iPyuUsUhYhEX61SAmLxDRLN",
  "key39": "4o55estaGVqus4R3hK5Rg2qFrttfaD1u1tW1J831jMWycFQhZkw4NsnZx9SH6QSbToMLfWCyrANP6anRW9sKxqAj",
  "key40": "59eo79jvTLtFL1iDpcc6HPiHFSZcLhs5H2btbT5u8NPMk7WqwE2t4ADS3U6fSK4YsCP5EeKDNHkCLRs8VcGNzmwe",
  "key41": "3grVhAvajQiD1xohrBuGoKQ7AJ2DXfv1gs4mgTTzLNxmqcBUBpau9vsemxbKwzMcpAEDWGmeibqNoxwgEysiXENY",
  "key42": "4oZdcYrjhpcZt28sLb33gke8agEBjxiHprSbziPNndbrD7dBmwzXV5Z3bmLUrK93nzbZYsm5YYsiwYPk3MJQzFEa",
  "key43": "2mrtuJqnUNNWNfsTTna9MpxfdWZEubfn6ZJrEHgoFTohpg5cZWQaqcZhvYwyj71jL1ba17Xa9LdTRCu9opBykwRw",
  "key44": "aq9xvtqn2UcGg7JjLJmHMAiiPsij6tmo15mtQNxgvu93Gb5X2Hk5x7YbMtvJssf9MXVbwcpqQoPVwWT2M4ZaZD8",
  "key45": "3zJT6WWWmdfHkBvmbTcNt5bbgkyd3X7TtE1GEWmiTifFwbzhbVBjGcckZ7L6vg4Z9vbwz6a2g3N3rJRyxjxR5KKD",
  "key46": "2BF8Gt2K361bgvBvPjgFyySM6azZECidYQZKyW2sk5KMRQfNKsYrRoWNyy2nMpvEzwtdfbHCzhkc3dRZuHgtgqWV",
  "key47": "e6FxDPU2gHzbdapABTVf9FYQN4v4Q2uaf9ZfPAMqn2VpFM446y7XNzs8deuUVDBK6HRzHL5JiohvsghdhnzmGs4",
  "key48": "2wotzJVun2AdjCD5CV2HcUKt9zA5ARhjWf8tL6iSHeMVFMLJPVgieHP4FYwoeNb3k1kmmNM4vyACy9XjqnT1fsKa",
  "key49": "5U1LbeFYSWTy4WgVp7GxL7HHMp3Pp8huVrmsbzDS1CEA6eoFzEgrFpBAAZWwKT8gmQ9ThHREjvy6pDmSWLXogaid"
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
