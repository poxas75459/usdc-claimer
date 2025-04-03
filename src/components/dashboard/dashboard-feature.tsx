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
    "5jSrHh1khCYmgwzzMVVKyAwaYcKVtVR16Ka1n3oRNfbWqFPER89AcqEJrWbAKCEFEMSorXFLhNVeNzYSQjuspoB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uH87HSberEe8h6Tnr3YHxSmmJiHGZYA127FUJjkzjt7qJiemg1yjv4foCq8XShxPKeJC3F3nriFrert1rwJADJK",
  "key1": "5iqmiNWUC19vGXnutCBWBG56zXDL6JnSkcmDtbMzDBjba294SxNugHcLUEhiDCoXYJCDFNP1dKMKZv5iu5i2gsSw",
  "key2": "eSRvk42recH8a9HkGZqqrVCPatCQvsdD9FYwT9kqqzMAqR6FQDe2DQrEp8VpSq9neBszVQZ8gyQWbVV4NnW2HKq",
  "key3": "5MmiEPwAFrWRjiWTBQ5vgAUEo5KcE9cEM4U6FWa9zUxV3TgxzBswi5DE41bx7ANCWfoCKdAx7fDh91rXNPoWYokU",
  "key4": "4977ZdGyMF4LEFTRwaBUE7mRa1s3NqL4E5LCPDaCYpAbrDRb9XVFhhWFEE6YPpvXbvPd9mS59FdBJHSixVrSksDy",
  "key5": "4bRdWoWJZUqAsBTbgorE3z4igbp4aZdiAooa5nF7BrLeZWUGxdnV2GJCtCrQYUYb4ktynPEpFmVC3uTA2oBKk2At",
  "key6": "3yetzGLVPqDaRs25GUdFeMZDgYHs4kcY2Sc6had36nLCbt7QZzymiXffxdkocbYxBhzSruFwHUQqR8VUc5zvE9Us",
  "key7": "DGkDLvSP7UT8UdRVrZPcbamRihuSszxUazGNNMmc3zxvdjNHQPWHCWWoLDxwD6vQnAzDy6xfUTTmFfsCip5QkDw",
  "key8": "3ZzqsZLXzomxqrZgFq7j5Fx5yYCmLeBhEYi8wJwLvsRC4MtmgqcxfbYV36LRyDb7WwcGkMEsRjZNEGwEWEaB8XGN",
  "key9": "3fdHMX3f7kwqRmsBmUm6hXPdFfK2yG2ZAbneMok2ZJ9MayFj8tmMKuytrkAMEH6s1L2gfQi7GCWhCFA1nGJt5ouR",
  "key10": "EuxnwBW6ypwSN8KHRbpL2xES3buQoNQqqinKcrZ9jHoCSaLDXMWYibGhzqAhAWtDRYzyh8kAJcRgoPEbQX5S76x",
  "key11": "3fvvJJixgyAFDjkorLN2DjbdXMkPwvoTD4m8aRVZimnfPpVFwvuk7v3ybBAPuGLPG9gRTG1oNkk81A7x91cJyBZw",
  "key12": "3kPyCHTKHmTSJJU4eN6kiZuJ8UBtE4wSXh4yErLL9h9RRGGCkswVgNxaATj82ypSzhPmYBkTkiorqLxdHxPzfkNu",
  "key13": "5HAY2KT7CwDLRT888gaoLGDYxxZGWZNxLxJHGAarDTAnkLv74WGi1YKsN7jfX2fvSJCnoiqrgz8mkxcGfiG4kRUN",
  "key14": "44pAm8MuWP3b9QncVJ9P5oks9fu23GPbfPqbxsMxzsfXxAqgFSoRNTHs3iznGjkWVAiFnLsypJRYnJUZNTfwPaqC",
  "key15": "meDSmZf4hVg4gfaRpWQ4ke5nT37XHSwoGWDLFKeeSxHB5BiLMj5Zwm4joCmprTxm43WPm7BJLdRsD7pghZzMMWE",
  "key16": "47fEqc3qNZtk1kqEEDAm12WLxy4Qf4edbhLFYHuCrhaRMjHZ4nPSboc33xhrUyP5xWfQYGU4fbfGghJTF9uby7Qv",
  "key17": "4nFVwjtZDU7tgPax9ZB11xn7oTcrCBRj46MCygA8KHqcLRSXYE6Zmrd3cSfUPJKyNSuqea6MyZanUmoW8nZTrYMg",
  "key18": "3HTgYi7VsdELrS3wcRwxr3JguqrSxtnhc39R1MrGL1WvJZB1SzfTLgh3qDdVbgf9kGWRwxZWKEKYLVSkssDHmPHg",
  "key19": "3mHX3Ts3g4ehSxzXz47pmsfUQiJVAbAqdVFV87X95J5b931TJpjdGw5kTxJWupLahsuP5tBryaZVoZW94LhMUPrZ",
  "key20": "4jrXbZpYL6JuoVPqKd6smg6ZuKFRu3f1kJbD2HK27d1XkiCZBxPtw2DakNH8ACEGdmQajMiamJze1aYjrKiXLiWj",
  "key21": "2QXS6nnWzA8Sw1EQyW7xMg86HxPBJB7WfWJMnLwxQcxiq9WasU6HqoX4GrUBBuzNWcWjyvSbSLejHjGD7F2SZY2t",
  "key22": "66rQNxJ7KmDMDTkaN1kCDwn4ErBQEP7wBKtgEuc7LN6cqPXHxP1GSb7Gd37Jh2RUdLTMg72Z3RT3yLek8fkPnjEr",
  "key23": "2uMuMtxsXcVoH8nhdbW4wwQ1AEQsMUtm9pXpQjidxkR3KTcGSUCg4VGHW5VSZVJ8ex2YuoKb76Wteb6aFhPixRL4",
  "key24": "2EF3era9NXfwMB3PEHmpNVh1MdnsAJ5TzkUnjvWrsDs2FBwhefH1qRTonVffaEHDDFJQT5iNPEYkDzKMTGNdZxBa",
  "key25": "EAzVxbpeBdjAg5RXeYKL6gK3qMgTQnLBzEGc89CJXZKjtfsLUN3TkC1cbH8mVgdTo3BgLu9Qjrc8pRyiHTp7fkU",
  "key26": "2VGm9VZQLo7Fepwcg9UbePQLcDeDyrdAnb3GAQ6pYifkNELzBrawQb196jBGtaGeZpd9biaYgDBBJUJCBLaRUfSr",
  "key27": "LENHksGZpRiTP44EF2XiMGCE3KteUGPuXThsWxJHHfHgz2tiBwv7i6f8aKbmruS4fqH7DhV9oULbg6ZzKWYaKgZ",
  "key28": "2uWZNSjYYaybcVJSdg98CrWFs2rACpv7fdCDh2rTurXn7UEH8HwSAJKAVFfvmjuC6SkLethjLBwWo3PJWLnc4g6y",
  "key29": "GPKWY7NFYkjB4iyamgsY7BxoYRcbrjbNLsXRbYwkjihSaTACCyHgDEgJZVw8pVXtSCenManwN54p9L2HnxmSTA3",
  "key30": "4oPoqdCy7xuqoMpisSRtA2R6xzwEhKUNWaKR7botWU6N3oJWdXp3WHHUgfYHVC9wxYBESTbZDpH57EZETT3ZExAQ",
  "key31": "3YkV2pEpGBsjgxpCVMbD5FoYh2tyCsnaV8gtxVDdj5d8wHRTPwNDUHeGfkGtfqF5JcEjqQzAheciZqrMz33ovria",
  "key32": "3vwExfeYEajDMapZgbXKinMSmGbDwCjLifyTUiGdnMKYb9z5mqxzoZjMynwuc1JJ1TQVM2QmtuzeSh6bmeeQKoFH",
  "key33": "5FCxdmgnrMjWLpGuTi8rtzVGdT1KZqtq72jHfmPAVAgEfhJNsKCW7p9fn7mj4NmMHq7chkjHkcgSCZKs3kRT8eSs",
  "key34": "wvPQjVRmYX7aWNimbwiVzWoo7sVfx3J12ZGD23aSTgMvx9friX47XkVbR6NtE3BRPCCLQVJUc7xAWGM471SGTpc",
  "key35": "2r7WQzr4SPL9oKQ8eCPL1dixyfdrRsZxkFGKCqDVVmguZUXigFQYbdwjVdGTwCfoooh9eNertS8PreEQ6upbCLN1",
  "key36": "3jTHgMRLSia8LjJPTyvz7iuFqCHNnwuK1ZW6gNm9gXh6BfhVedwx1zrxUB37RohfzhBXuvKzrPurkiBP2f2FxhuG",
  "key37": "3bhSDfm3XZUVEud8v4LrBaA5fUsAocqcHsiLLyDHndeE7VoPrmdR2aHejToJfDa5tcP4jkCiyaaBxbWMVgeJzd4W",
  "key38": "9VXsxZsZtnXkxywkExnyTvtgFN7KSqC8WzAeHNZbZcwLRb7FRDw6Sg4z5XHxesL9S9nkQyw8Cr9wJUitBRKjFLE",
  "key39": "5dkPe7PXChoboaxvm4BEkNMnUbyKJwPjN13RYEiwTeANHUVdWG4gCC2ngpPNFEGrbX15WUTh1VfBEcuUmuia1v8x",
  "key40": "2xn6yhv9YcagpE1wAnqn8HfNqPky5vdeNzdUWgRdi9CWe2RFoUFvTfEzAqBPXJg8pVHEXgCYizuV9NXbMhdR3qvK",
  "key41": "5vP3d8viMP9VUYoqpLfE44wPmXcSdsz6hHQ1ZMpE7VMoBLvVU2Ro6bBzgg1A5WG8GaiMkMunZ5DR2RYQJ2QikbaQ",
  "key42": "2gPdrwS3u3RQ2JZXELWrqXiQ3LsJmWY5jo5Ud8jAGYMeuKTD2WSrwpCgp2WBsg1HJgJyRRp4or1YtFLxBDpCVjGN",
  "key43": "5RTvGwZdCH5nRt46g7rxsXFzzZDJt5zYuZo7ijJtaA3vo2MCWC4eKPpxy48hJeoA4eCCZJGkRKNkX6weSabRVh8G",
  "key44": "3TZmW37NG4LiTrnd5fFLY7BP1JngtR22J8WRbKzngy3e6Qe5RWqngBpa6kh37piUEBYgGw8awvSda9SB1ynzuRqi"
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
