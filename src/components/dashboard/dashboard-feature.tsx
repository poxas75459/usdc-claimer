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
    "tEvYVCif89MTXdS3HJSKk2mVcjbkjzucTZECucUzVkVTKCQewDYRzHUCY5YoC8bdj3zGXtCLfpWAYSFcAXRhGjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38oRy27UL9C54qe1jqHJ2361uM6eKQGnNTrdGowvfYUccEW8xxfktEECsWNhJyS18wnBDW5121kQ7fG6oUw5KygL",
  "key1": "YjkV3jRZnM5X6neV1WDdUgTFriPZGe3qrsWV4rm17HPj7LBvy4hkgUbFLWTjnRWMuHG9WJfCy7KUpGMh18Xwpe8",
  "key2": "2y9SynhnFDZQLJSg7bp4dPYcjREPXuvwxrAs7bkPJgnZDtWJGpk4DTNbZrwuqaRUR9TjDfEfduBZNQUNHvSdaBes",
  "key3": "2SGeVVuoehupY9wXsKexNug4rpiDzMdoLTBGMTidF1tpM1aMf36fBLv9dCv6fbYc5JmSp2UEwykWeLCtQbGpqJ2P",
  "key4": "3GYzto6qMHH3hTtP1ZPCCaQUpdEHbmkmgh47qRscT6nxMx4ynjoqnjUhFVRykk5GwE7QomA5Gp87HJhpZzPxmf9Z",
  "key5": "4zGeMhx7USVzPFUe8Qs9yAnGb2dRHTGsiimokrNQbbajLxRFSmgsn3c1kKbR4yocZAhgubz2thSZayjnwDTjRpki",
  "key6": "576dJ9Ks7z5Zh4WeVg3VTkmwBuRFXuoJxcDQZ2hDo2Vq5U2La96UNUvMCmBrv9dkprSNeCr2RVbEwxLobHRfr9gc",
  "key7": "29vn2EpGzYvS9XUaAd9wykuvo6oiEz9w3LBCTyiQXaFKoAEFrzKLmAoBobjzAUVgcEchuVv9UhpY6eXxVuXKkkY4",
  "key8": "3ZBSFUwSK99pqurHGkTTJajxtpJwW35DuroRHGTCxF9NkhMxnUJ1umEEDLGEYHTHmMgiT6zU12hkwLsPm1PCjmdU",
  "key9": "4CVCi1jKr5GBwY6iEcAMNTt1uxV5MfhisCNaGhWYQJP7encidLBvjepPzFgc6DBko11uWucYRmxcdRGpWpZrnWZB",
  "key10": "2TSxfjNCSovuzN6uGMt2T9Jc6YjhtxA2XLMTzDoo8aAikjuFw6s7hGRYWADxx1x19UgB69yDt26zMPEjBMw84woj",
  "key11": "YpohdNWnC9BxvtPsjLorFsKRASX6r1ch52Bj9xa2QtbEoDf7tQwEuuGMtH2oSTWxjrD4z9ua2bam2DqErdcyfS3",
  "key12": "3Vn1rrDwTC1wBchyvb6viQayptMCaQ3gkJ4YbN8jthTvRAYbeED8BZEuj7SMMtmpdo4hcZJvXJRFvERUBB13d15t",
  "key13": "3qFMiL5mPQdsi51bD9UVkex3xjjqc7uwtwL1g7KMbLY4csXu5or3sB6BgpSFAr2f7dLwnu91XJEfqDbeWKMqxj5A",
  "key14": "5dyMZStyhAVXzXfEe5WE7w2d5VBj9iX4UaKPGm6MdKBoG1mdcSPGXgJHD7ouhc7kdWzfofZ4VTmU213Lu3Fo3hML",
  "key15": "2V8mtZuFReYMCjrXLxcJnv4gYQn77fRxPsQ29uWu6dufnG9YpdPwVfjdThJJNZXi9oSuMfWSePyvgcHQ34m6vywR",
  "key16": "3P4mmkGrRaKJrTEERnXZhYAonJ9PjkvpTkTQkQdfG2CfemLGTGgVHDUsgbmjqQKdVMmnwTDyPeLq2UoVRfZJVHP1",
  "key17": "5tmvP6jVfgPFYhpEdMriYgk5pa9pjesTGrWX5kwNrvrZKmgNYU3X8WXkbMhM5Hfe3gokCfXpQUiXTs4KTmXtTcbr",
  "key18": "4z25cKV6PL6J7c2YSjT1yPjjMK55LznaAQQWZLkGDPBxR6V44XuFsfzbdpmRnnyx2sepectyjBbVSsP5c11RXMgC",
  "key19": "2E5G4nPHmX29f4jtpoVVdFMJvm9K2daMBNgmAcmyEVae7Y2N1yM2EX9wQk47LS5mC8AzRYnYgVFJaqqmgGc9ZdAJ",
  "key20": "5EGqXppFxyin4rWLtNdw1zucgLheeedYGZui7pxkydfv7Ef8ejn31qShK7upLaHtG6E7eve52JcJ3UjUHvKKp8GV",
  "key21": "U8DkhVpPHa9WjgZEmsVHafGyn9f6knzVb22VXVuYuA98g2hikHJiQqVnt4zZcSaySkFB49BxppTTZnedNNyW141",
  "key22": "4qyJaAu3hKiNmmgq4bptNHuPvvTuj3k8sRJhpc3kTYpJKsWokmkTDiyb5zmdctH4rFa34tWHuJRDzifbTuj2Tx8C",
  "key23": "3isQre9oZ4RyYy83ix4EQjXcgA3bT16XoZHaApYeyXk6ttXXCWSrrB98ePDKKQid3DnC7McwPREqVQKcbxzSZiab",
  "key24": "rZDC5LxsucbqT1fSe6mp6sFD8x1xSgwfMZ3GCCu2xBVJQj7aoTxJnJxTdkKZ2ukfPshYvvcck8HDtTnzcUUgdPE",
  "key25": "3YudRJpSc4VYeM33YhSy6rsEGMW85SzcjhAFe9NCpbw6AHWSa32rDqYM6zqNppDDGmBE5GbF6fiSeaMtTVouWd4F",
  "key26": "5xbL7Ah319N4gascLixtfuDzYr11A2Wvu7VWfbJNmgn1Z3WReQojvHHrMA1M3dMk3hWXbwvwNCMMrcMV6mj5ViK1",
  "key27": "tohaiPDqaUxdvXbP2XSwGZmWkKg55mCxLDomSejf4JpsbvYAY6759stYu23mDyL5V14zErjRTqn4umg3ogWWnRt",
  "key28": "27TpSroDazdiFrgLnu5p2SvUCmcXxH9nv5QLRRSNCKwPW65yqaDA6C3LeBBJdiDm2iVDvhQ6EUybKtTWQnb8nUQz",
  "key29": "2gABb7DofrE7kgGAkP9Q1fTRcdt8WqM8rBbZmaLTJ5UannejiTfoR7F7TVewG4n2qabiMbAzcwSgaB5ky5keJSWB",
  "key30": "2LVC4PYJuHh8HUE4bHqGWZk4mBVwVmSwsq4jRdEQYXjAE7aN1DYjxSQxvyvCCyJbdKdPnSwGXqun4PDiivxKhrvk",
  "key31": "22ZEf69VDWJMKCP2j6MLuCtNcJ8JdRN9KctTd5EvKmJCCt5sg41kYcVXUqKAg2iUEVH9ykje722KBnfZvVDeSQjw",
  "key32": "4Fsu6ivKag8qaZQawgEdAmdHeF5pSbtqahEv35PqfuSyK3brXHwos1J3vVUGDCb3f6iMdSicvAyRo4SKWN1L2RcC",
  "key33": "veXycLJPpq1mtP293HA59nkmcPw7RP8iGjjqkWXeyE448mBdQPWzu45Pbj5tiA2rHjV2rUokYrf69JFvRi5VE2B",
  "key34": "iCMZY9SNNJV42MgVWVGZpAH2S1JexScWEL7HXhwZiTVsRBa9M5UJi7awFHM1yMqBDypZ65GNrm8oKq9frn7pnWW",
  "key35": "MGaVn4dhAgYGo2NkaiHyX1ojeX4keQ3nk6wTviqZUc5NcKSmqEnemYFgU3zyJnAaxZ87TXZjfTzg7gu9qcH8iSo",
  "key36": "4FUfYR8xoUirqCkeQucfY55rnHwJ2fZD4bHcVoArpu8xzxs7owsiBw6jnVNpVbbyjGJLrCpxEJdgaMGyaioWdpRg",
  "key37": "4QQymv8Uxca4LsBBj6FLV3bzGbJYgNiVnqSMq11Ca759bEj4pwFUrPbDqrwZGavJP26RA1E9JP3F6gtbq6vV9pq9",
  "key38": "4BHMTN9Vhna8SAYpM9KRuAbVwjwF1yDZQMv8HKbynmucdSRD8edThSxvBm7NGpkQ12bPQcoJVa9SMm9jkfzN4vdU",
  "key39": "5v9cgqDBaLXweLYxZk1c5PBEp8xSE8ED31jKWxcdEdyKhoCgr2sGoc8FrZPGKmnupf422bDZ4PNX3LbHZKvcxNQ1",
  "key40": "3hYzUta9risZeVn6BGcpqGJ7bx2PNBXftdjNY9jyjCfraKwyghtwBZKujJ8BtjFcfgkigH3h1DgoJaewGSyVYwZt",
  "key41": "2SpRCMNWgH9KXL4fy7CqweEQeEG46nhfjwnV7XNZemLVvgrSro2Rcnk15seKLmKSF9NkopKyGg7rQc9PCXnMS3Ds",
  "key42": "4uazd76jQr7i332hd4hjda3v4TQ5omEWnu9JogZSyPLBHLm1Uc7LZjaEgcXPtmM6hLvoCVCvc665m34TMAD5oxhw",
  "key43": "3pUvDvsGy7HZ1SezBd1vqNe2vNDCapPryfipe3K4DCfSbuqQ1zzqZKaD9VBLxv5kTM4tADqfGwRvhPcNwyEKAZpC",
  "key44": "5D5zXDhShjcBVCArEpefVidnLnBFjBavC5LLT5WyJeHiUB6ZkRnBBRjXs2EEv6f2Bxr8TSCZ8YJ8CNhsdGDerZvL",
  "key45": "5MSzy7GpGFWVmgWQVgGkPm7Pz7xaCaKdJx4YTNnthMqBCiK8FTeBYKjSBjWiLkYLefvFRSfoqoCEjbhAkiVJXixZ",
  "key46": "2Jfm68QBguom6TuTKkDax3XaE1YsCnDjM6eLWTUMtN18VEoDCM84GArYGKz6BDTTSPzsHPQF9RTDH3x8T7tQ8YN",
  "key47": "5bjpCjWXZcdhWoDn2zKkknWNgtNkE35bUv1fbFEtu4Yufgyskgh9dxUajxhZcQWid3KWbubFanu8ejv79C5YD7rt",
  "key48": "5uFQLXzNoF5guAq3o4cbmwYEU5yMBAx6aMzPm1HMPG16NiyXXZ76t4ufmQjnG7DFEdBMwQXSaQHnYvmuNGYYZiw3",
  "key49": "5Mu9UA2L2NZC6NXUJSnjbiEi9Qx6C7q2NKvoR5hVNs6K6QMfXG4VFWBuBohizDVFCVfMsv68TLN2J5zBkehaFvjv"
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
