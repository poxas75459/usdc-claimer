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
    "5W4qGMCorKa1zDuWmhpATgtPKQhxvjx5Gn44MKfNb2Pj1tQCEgubJGHPAZ3yKovtsToA2A8xiNEbHSAmWYhwZ3Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FVsDYCUf7s3otBSMfEua2YvMp2bzGRt8qvnYUjEeXNrpCZrQqCGbNRfFBR3ZfiMLnjt3aCuj4YeN3av1UoTQrJT",
  "key1": "25qf291jtDM5vhw9tzTJK3nkmXFNDyAjZtDZoVU9kBWERJ1M6TtMDfhZZBr1N4CJt74Wog9vY1B5PLEn3jLsTHuV",
  "key2": "ijHWdkKhUEbVXJX3bHY4THP3M25Q3ta9jfZThNdcihqbn1Je81avzbZbEqsA2J5hNBX6thaNWfAojxZiTyJZJsH",
  "key3": "2xNjj7o3T6WrvEf6uPEz67cEJ9Z4pi8DtA8cvgJpzASYAsSPQAotwu6kQdLmX5TJg9UNbDH4TBr1weE412gsTstP",
  "key4": "5ueBsLC5anWfEmHxFQLgQxd4eEdWzxU6xmVBtPTKAdhm2V2yKtGyL1LW1NzhG7HW4QNs6AdSb4QU9rPe7qZRUNHN",
  "key5": "36g2addRSU7MKuL3c4c4ewtVnawzznrfujS79TFMuXJGsEdXFT59C5kfZJRKc24seogiw6sXRxBy7aJdLfFQhWfM",
  "key6": "5r6unnmDoFWMPiPRhTiit8naZttBqPtPMqsa1WCqAryzPd5kosoULkK2vbo5krwEuCiFxSFxo3WTHXHUqocj9pr6",
  "key7": "2aaEChdNkv4eqUeShCXYB51ZLV6bc2Gvmdsqoe1wLfUNMo9d5y6o5bGQvx9H4U8jPsnTxv3HGf1d8LiyWRYrTmnP",
  "key8": "4iJhZZTfc3B2y93a4zbqmjsoc1ZubuQMw2UqtvAKLpv4jV8Vji79NCiGFJbwDPpByuE2HZJmmMwtWYeT5BvkjSKv",
  "key9": "3mukaRubu4bwW4M4F4VZV6SJGFD13DJf9jEoFxcTwejVfub1jhZVqSpUnFHi1TUrz1GAQ8T4jLhGksG6bqjZixdC",
  "key10": "2SGymELvWpGtta61Ra5NWgMfbnSrLTtvD46mfEDKLQZcLEp6o2nUmSj1rpmbJfrXHwGnojCy7qS5yy1CP8AZ3YVj",
  "key11": "4RZAPVS5mMXjsUEGh4TVgJukADVtby9CskXtYhgLRzLcqNKEuiL7fCcJbeLRscxrFZXyWQWdHeFZ4eRpwU7YKnvr",
  "key12": "5Wy7xtfouthTLFvc7DtzZY33YoDsPmqSprrzA3mP31KvrhaSxRAmepZKVawkSFCNpnuXnht2vtcez8GkhCS19xbb",
  "key13": "4rzENnTnwGMyRf3Db9HbJGPUncjktrNgb1SsPBqZpotjwuQmP25gLP37K6LRJHFumAGbFXj2nQDkDiayspCXxRwh",
  "key14": "oLPCYMZLeUoJTuHHZoHLKKNALDsvxvZ84B2c2cn9b9xjUdbUhSVmpKMRVyW1xfAqTMPTfz8i2CzEw8CJcuFtzLx",
  "key15": "3AZTRQjkGcmUfiHQvfGcFpoheSnWU5pZHFmwTapz7f6dZuUoj5DZ8KXG5dQL7vyZNoeRkA8JsyHSKS3Lnp2ouivt",
  "key16": "5kinhWHJJTjoanNmE9dV3q6i2BfxjzamxQebG3bjDi58h3eRKj3utL3e43WEvdnvfGLN4oVNVNsTu9kWzYcsHFUN",
  "key17": "5DEVpF1cpcp5P8xBkyt4GvNhKzXAENh7vBtgngunJpWxfCYTC4VoDgDNzHyTroFVwZFDEGvAXX2bLLbyuxm9R8gy",
  "key18": "4UhKWyJQWK9ugGnoJFUrDLbSxHxTnsctFxZKG5XJ7X4anG1WKPWeKQQXvMnPX16JQWZ4qHiZHZCUgb4oYpBJ72UB",
  "key19": "2E3KWqmPanvrfwuWNZQGbD3A9dynKe3QyHTuYZMHLELv6chn9a6QxgzJGcrRY8Te6WtDwuNRtuG5dVdqb8HJS9q3",
  "key20": "3rrpba4vmWiDN9LqDMo7BpEAnjm6aYagx3VCNvQXmWhRLHoXmXjv4AhFN6YnkLK11sxPRDpxmYrJgMUKRxsqyg7M",
  "key21": "4AshMFC1ekv9gqbLWmJYgcMxkNbMwJ3ng9VNitK4YgpP5vHt81s2ntWu52U2ZFwApDhv8Jj59DmEfpcNhqrz5LmX",
  "key22": "3Sfin9WFFpJSWxhuNuRaydN9XcxtyKA9646YJ5XCBJWVn6CiB65dnV78zivKggv6oqQRAEV39XQvvijcQ8BEGvaD",
  "key23": "3QfC3PK8oE5dbqRmgr9nZt1JHga2KmaihrVRtiprX8uay59hv6GtwuBogc5btWt4ioFschzhTQs2QxrFXqREe9sb",
  "key24": "5qxb5ttMcu3KotJJiT4fFk5UCKKorg15piT5YWsLo5eGeQth9UVmfwb1iH7Z3cvvr39TqNw5uK3kouRq4vCWuwzL",
  "key25": "3DjsZRsLap5JRHCQGA4tbQb6aWVvQDQKBqDP1bXvMiC5Mq3UiRz8ZARYRqrihW8i4FTaKwCAiKivBjhAYN2pXa3u",
  "key26": "99uRVPWwRrME6GeyMunqh21kALxxykws7qVTpjS82LUXQyhBdegTfB3q3ctdWfCUqNfNo2WMTpHKA5Wnw4DnDCT",
  "key27": "3hfucNrNbnQvh6EAwJLRFHvPShzTdaTDzfgcdRfyWRip3hXmpiptmTYTUQaamkvYgfrz8dUj6PWNVryNqrtBMaSk",
  "key28": "PBDRLLtGf5eyUWvo5CJG4q59uqd4tFEDgLdf4Unk4pgxeuLz3y3q5T7DEkuaY8M1f69r6t1dYXZLScXQ9N6go65",
  "key29": "5dY8zr5Y9bkmcQHky4dXxgPvnkj9KBF9iUanFpmkKJU1U5U481jPRuaN1EpKpwYCzAyAG55KCnWKiAGDJEwxKHjd",
  "key30": "5x4R8nhmRvdvTRvuEfVDPw9xckNCXEi3RG1MXpfYykeVh9csRZorFmgr3g6M2PhaDmQZMYKAzn73pJZvzhmb85K7",
  "key31": "4LvQXUcJACHiTmhTMz1u1s8dpR6NwZiUUKNydKU69z2WNuGUxRnZGcqLTHxWJkKQ7LqJf7fG2tH6beuz46EQR8Cx",
  "key32": "5ufGRcwrtYCBdf4WoR5vSy76gLdpEHxDPgZ1G3PL5h1aQNkz8UCvujdFVsZaiVso3oJko5YzkTgr7vH1bP7d6UYj"
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
