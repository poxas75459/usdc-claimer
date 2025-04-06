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
    "2hHYzMghP1Mtp61UJRmEMgZahLLSk5pzAW1uEVnp2VRnzA3L1Qu2wVcj4HkKM6kGcKznkC3H6meW6rFCWNq2UWhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPBcPuEvpVg3cunXx9hJM7M4xTzGt2nR96HrvFauvPGu5yjMi7H6fxJjS1aFcWXEuAZTerzjyMXFTZetxVXav2b",
  "key1": "3uEvPtLA1qw3ycHkdBtfYvoxeuMENkx8bHT8kXB38BzwRk2dg7crLuDGCxAxNjhAXCprSskDVbgC1tmLKg1fWuyA",
  "key2": "5uwt8KieeAS2gb5kv9WWVqtPgC8NQAKr25uaADzq5FDDRxB9c9PGxSUMJjxFyL6BPF6CrhqWL1y9ybjEhz64nw2Q",
  "key3": "2QE8LZpcTcMnyFcvzeZcFFdXBtfNTviHgB4ZpDdB4YtDnSzeKMVS2Ac2kkFc7durnUNMg3uVQzKguRd246YGCWMK",
  "key4": "rtGhXUdh4ViLbCGuaKj6nk8jdsYefV6bbRg5jA97Z7VzAVHuBjyHoTJNrUMgad26yeF8sajRPjVkVJp4BLPD7b7",
  "key5": "pweoqvdM4PetDD1P26RMsWkoFvytGP4ekYWrSeMnCXGJSV3tqtkgt9mSGj5wXTSESQoLMEF2AZCDwmsJEocm5a1",
  "key6": "CCseb1YMUvPZH1AejpUHgd6vnUXKjb88ymrZrURx8b7asfkLL7YDvrU1mx41LCLECzWHa3eE1pCPvYP1EeGXEey",
  "key7": "5ESw2TgjAFVf9zBx3btR4C3yDeYbYQyqG8GGgL6bCuQCFnPdopcjtiAE8x856tKowSwb8H4VUoQYDB2V2jdq3bBD",
  "key8": "66ACqmhfYrWRKfb54R8dezz8HHBAoEV6rsKeE3YNomjM9JEfdspMZA8cZVGk5uyTGKbnp9qexE5eyp3GGUibXyud",
  "key9": "3ZScCDW96v8Jgs6spopAxJzTr4NyV8jNnwQQW5NCLL13fyVfRbnAWP33QwpFa5wHgStsGSeBDY4XxVeBMXyU7hzx",
  "key10": "4HDhxpWKnk9BB2GjtsXqeLUx21g4LGqQWMr3HqF8HVJRbaGcMFBAj5ZadpJsfMLSeG7C82kTXC3u8EybiPNtLskZ",
  "key11": "4yvuiFBsnMXwyK8K58FLmr2ujj71pguH9mJwnnm22ELmrviY85cYqz3wZz8m5z5ConGmh4xEc7KrzTfh8MqxYtjy",
  "key12": "rL6evVmWDN8P3Wt3LJsecNPH7Um5oCiLAR2S1L7xZftxvqFvTWxyHaYhXPKQucXmn7FGzib8Q12X4cKV491HQ61",
  "key13": "5oY5pBgDzXjFBTSd4m71fEW8QEk6ghiqveHovLV51vg953hcxLPoqoh5bzkjC2Lf9Km17dVcP9A5L9xyaMaNqKBM",
  "key14": "639cruHqso41cPQm9MgQuEaBbfemYAP7Y8PtpBNHLT6tjKV5Bi3qZDifYPw9zSht3gKQFzddYMg6TrK6uSVbSysJ",
  "key15": "2z9Jp7JgB6jeemVhHQTFdwRJ3AnHGJoR3dbQjY8aAw3epTz3VwwrxtxWKWf41mTsaKckB69ZFyoaNrGVVmrHctKE",
  "key16": "48WHuCv8e4QuyXbpUGuaUAUUBByJpbiqjqQw8HspkqaH83LKeaWDV9miXpx2kGBKt1MGZqC8ksqX7mP4EUbg1Qed",
  "key17": "42diAuRmJapquk3Z4g9rTBvTGmdo3GxERxMhuJKWUqkBZA7DWVBhCZoF8MLunboeuGvF74Q6sa1DiHHmec46PQVy",
  "key18": "5gh2xNFTUBEpFQFMLkwQ5YCgnSoUWgT7EWMdTQo7mPf5Kc1cbXEtQL2gLK93nqXpkYD2mnCXJ3bYQ7uyiPQKqaTx",
  "key19": "3Mruy3seVScijmxYoDuRS7KyWXzwEZgMAPbvLyJZCsPa1XHjrU93bwXaJzPcM7MrVrFQMfpARAwguoYoNDsPNv6y",
  "key20": "5dqjRxJ6i7xZGt9YnjghVNf2k8asv56cs4sasAq8WvL1GaLfqQFQUULKifEP7CoHdvahuvQcAhvPApcCSjWTLnpP",
  "key21": "2ikP2zdCaaKn8HDezm3gTQFZ1CoCRL6xAfK7yXFFQjDUWftSAVwugahDTUND9SpucBfT93KGEUTQGYzuxxG4S54x",
  "key22": "3wcsowuFvHc28QBm6Z93baCzUocFFuovDGJuJKX5ia5GKJc671cxgCgJBvRaW6budERK1TRM4pzLE65TwSyppmgF",
  "key23": "64Pb9HjqkifQ3qgqCvoLusQaKbxrJEddHPjEJggWc5dQa7anKf9tgpM9EvWVMDTAo8pi4SseCg2xuBgh2tWRD3sH",
  "key24": "5BDoS3PREJ7n1iTst2tCrDcyvDdNMv4MVHBbLsvoJzkB9bWrwfm1ZYKrmnk2hpyr933wTxbrVEsgDUT5CjTiWcqe",
  "key25": "3XaZdmZrpqf7CfS6jm66d7rjN9P2JJapRVmYcQVpwGU6qBJgdxo3uMf7zmV4NnAteQxdrMFzLeRAh7CiEgAmzbB3",
  "key26": "5eQ1QZHSq56DeJPGJjnpRLaTot7M5FAHrRSZw8WvmCr98JgSwK57rNQNP9aYs6qiFQu6dbKUtXDBYgfzznBXpxsx",
  "key27": "qFcaJmKdRZhNmNXpjRVtnHZoKMZNzUY53cpZabvVxF9o23Q4hteFNSTytBix2krU5VFz79qfu8HYbbVLCQm9Mgr",
  "key28": "2XjJr53g4BTrzUJFF5dJ7k2vBj9kz5GKVEPaNhir5QjLX5dXjePSwcNC6DyTZvWbRR46a8FMsnqh2NCytwTxeKRG",
  "key29": "3isFFMY16MwN2kzcLFEWgW5dPFqSYLQvMPujnkpiXWBJEUkKNgghz4BB8YVTGqVs4TEqJM63S9knk9Bi9ooCx6NV",
  "key30": "3NJsvuhyLKmC1eH73xjWnvPGPWYbEQQ6wPMdu2i7HygjMwsrbGsJBdKp7cQdEUxMFk6h4UfHv5DUjeZyE9BdhqNu",
  "key31": "3AhfB6qmjxECsyJnaEJm5ccLskQ22GyEERPMxXS32nVZKhehfjLi2i8MLUvCtdmQ6xmh7hQohLxKtn4VXimbXoiK",
  "key32": "AH6vFe1dXJHVyRmn1nvPTmFp3RyV6ZoQTDYYsVYzkibnZA6Lewz1KS5wYbM2naHRjqRhdE3yBjPHGPWXCWzciEw",
  "key33": "3ksF289xdqsUtc2wcFbqEnte1PstmFzNjVHJpEwVAgbfRTJVXL7eJNqwweM26E67ZeusAzenxaw2AAMhc3s1Fjt5",
  "key34": "5unSufwsJn92WrqBVVuM9xnfVfv7kxsSUKTc4P6GnbsSVrS1uvRPyPurStMLMSeeVH6RfdZ1mvT6G1xPsrjHQZxk",
  "key35": "55vFSEPnmey72sdSWWVT3V6o2yEqxN4rW23d91xotKzsSJaSjG8u8HoVyNFS79MpBsmPSpv1sYQxUJ6mAq3W8FCo",
  "key36": "21SQXA2H5pNbPGX5W1VKki12vKpyxicFGCdpJVWunB26hYgAEJDd8JExNX5KLzztHH6V6Pkj9eejoy7vRkTtBzJq",
  "key37": "XjMiK8y1KAxByg279i7uCuAcApu5ETehy6DkA4ApgHgPZNyQLdfW5KUYRSjviyXsDdBKmie1vyGfKRuYvrGuK7n",
  "key38": "26m5AYFE1FARniTswgw1ud68nu81L7FTmtQzTfwD4r921gmxCt6wMXnTa4BGJT13g1Fp8pQeECq6SH5ULnTwxbfB",
  "key39": "3w4TbBTJu1SAsFqgh7HbGD3qCpmf7U2UChNGaBm555QevTNjiBotdyBg1zmuZuczdTxCkJPAzLsEkuaBPaYKyVtS",
  "key40": "3V6j6HraQCZ7bVoYgCRYBuqZBVtv652KV5yq8NvE4NvKY38skWjA6Lh2b42rBTDMpLEXQPpkNvf6J5ZDuCGp9PJ6",
  "key41": "5tJTZw8cCiZPKyd75jGVcwAodqo5QS1KwdnZK6z4kJ8wCGwFuLtzwDJ789XC3pTuMwNwtKofQCrehkUu58FZGV26",
  "key42": "5dxL8yF8oG8KmbG2KickSMx7DjA4iGNaRRebcYR5oGGy71Sf68MctBRCMKKPFTt7zCKKb2j8joNXk4uqZuKuRMRp",
  "key43": "4ZzvFdcvMzoWpoD1bsUfgtoUW1g3rXjJSXrbAsouYLzKsw1cWHqmhqkFKc5utUFqjH3e1TruW2Cx8nJcJAxT8WzT",
  "key44": "2cFBfTRJFSdXeyAuhwhMhp9RKrcRhMhBDLqUycwD8PcvCojpbL9mZuSom9fQipb7bDTR1Q2P9JvqGGUnBards3JU",
  "key45": "3vrVB9S8WN1X1LGMHaVZrHWawaZ6r2nKxBFmA8oKPVKNKwmrHb7JyPZdotRdgKV8FHA2oBhZDFrWpTo8V8UwsWM3",
  "key46": "4TqUGwCU7tJBuYvJjw7zcgiuFeDgt5AKsk98MXXDdx3EqSxxZ3DEZ4MHnAjFiUVPHjRmEaGudRhEVNjrPmhSYRhm",
  "key47": "3GqpAtFT2JNuPi8A3yVa5Xauko1VQKkYs3PWx6fnngCmtUB7XvBUWnz2LLqYZDNLELaNvFF3jhq2VTWjCXyCKZd5",
  "key48": "nN9C3qo12cDroip3GWTASd2KvjASQZDQ4hcrZL8LeHBZsKqETonxFjsufvpLrdBfB39sJ7yRSFeeAZ6b81554k2",
  "key49": "2cNyfqQf2p71FvH4i7yxskycyz5Kv4ipS6MqpdKGdp6Z4fsvuEPJ4ZT7Q9wxV2nc1B2bcxGXoNSpygsn84Zz4MCs"
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
