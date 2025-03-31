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
    "Mwxe44P3RXbMBYA4HvwvGe6kg1P4qGMQAnXwPvoyghLUAjSpp2QEPYJNxGk6CsJFuXVz1W6zWSArtsqcYNGC7Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXnFvcEcGGHWip9WH6Sf9YFGzr9G63Yv8qk2EX4ur4UZsES8qGgWMvRqBQAPULuMNEihF5ReKkNcNMCaMpzUoHe",
  "key1": "2iJH6rMHJkNiv7baQ2YkqQHRHvQpSRJmPi1mMek86KXyTDDTzwnh1d8YvDZCDiys7HpsHPBmWh3yYeVs37SGxCbb",
  "key2": "5NbLW1aYvUVjzJnQYHvLYqRUCiFaxkb79UC7jQfWsY7u8741sbbHtK7HaBoPHvgtvT1qpCowzJECmkDAGUGu26eh",
  "key3": "321AAXiJAQyWvepyviqTHcXUi9PwXgtjWWa8k1MwNLGtn4LwjKC5K44efbTGtaEFaoFATK3HgtDF7ZgrxhStt1nz",
  "key4": "5YD6o1LbLr2X4LwNHFaT62y3N4jyH6nXS21qAzfu5NrwbWMo62UmY4WCon1AwgQtKjs6iKB1wjwttgVhqaK34op1",
  "key5": "2KifvBMMKYFwEtGRztAxPfTrR4WTwzBkqFAM54TRJbx2pHzBsfpBE6VqUhdftfEKVK25o6GH8bCakd9ie6Evpej4",
  "key6": "5Gz5Ya4UxTQovizM5XJb3qsNdtr7R2Pi9695yVPA3vD8gkHZNKvsSFkr6Vznc95aoprP7WzeuqRQeTGae1ZcTT4x",
  "key7": "3QJEpxxf9GnYGKj4oWnryu9Tsq6MwbNmEg67RYzGaBHH37J8SEe9QVMfgJu3iPWcsKCLS4hbFabjm95nSs9BUDZ6",
  "key8": "4KW1MC9Rh7dP249re8AP1juAaK5EW7vj35hKVEaFtgR8tM6HG73RSsEsiwMv1pQRfCgkZYs2PeNqHRzjVfgfbZ1A",
  "key9": "3JJbxxsXqPZeWGkZMcR7pdF8jQ57TruM3rRQvJ9DVibXdYJ8B9gms8dcvDv7wiSrvdcAg3fgF4mVD3JdE9YajCo1",
  "key10": "3wFxCn9meuAj464zAdYRgof8Ypb5JTyHdxFWYkRWaywZNUgaUc85KdyTtAiy68CPiugGMjXBoaxvUTHtfxg34dkX",
  "key11": "5T6gADhxhzvivTuMoJa5vR6Qx38CwhvdACA4VKDwTvHpUC191GJy43Pue5jmm5PNcbovbQMEiz86rhA2whRfPqgn",
  "key12": "34BvfNPLntF6dzwo5w2N1qXiRDPrKS3eLyB7fxiNAyyzUpsAviPdrU4c3pYYSD2VhUYDBgMMnY7ks2b1Yi1JyLBp",
  "key13": "519N3LNXQNjxnas81jKFK5oeoYpjEpGWsQ9P4PYu81YXw6XdjaMCptgwCkRVLcmqJGrFYTGejWzjfyp2JXUX7FXP",
  "key14": "2wG1FzNUjSiTR4dSnVxdzgEd2afjKnoxmxjPfvP6BX5xWDt1CEBtFmN3XpNsJmjFdKonYKQEPtNhm32WDyHEgqY3",
  "key15": "31RxwQRMrAWQzqUbybQ4sL95urb2TZ6nnhFmcu1Tp6ZZwwQbU7C3jnDzBMCGA5JnkJ7KcicfucRpSJchZBwqpJEi",
  "key16": "3b7cSsGTo5gezbAYx2F59Pw3rP2QZ4bPT4jm5XV1QxXPASHuD2pSjdoQeoABqobMJXmivLpCj4oPdeSuSPBYAqsj",
  "key17": "23AEgp9iHYcJ8JMkuZKzV3bsNWE9x7jHLUNUk27Mqa4H8aHy6BUtCUpLLojGQULY12wsHwxUeiNucsYVpiCAMja7",
  "key18": "2Ru5f5grGaboePeehjTongWtUVHQbKHZLxa1ygK47JU18ZjuA6vBJk5urFNcNKtwJgyzBZ4kHajgdy2pAwWK3kcv",
  "key19": "5rFxt3UMLb3nRCMZMSfggL5JrysShRrBNsH2oRH5PV3vaYRKPkevb1uCqaUo4qYDbnKaGmktr4WT9dn2tCaTxsUo",
  "key20": "XYEcDzNvXR1K6ifRQSYvQBznSQwDwwcuS7z1udbY2bvzwM3tWGyhdSnUuNBEFDNhaLGXvfHe7jQyCpPKUAMufDd",
  "key21": "CCUQR6ZFSMuhicaZyQrN6Voi31ufEsxF84Zd5ttDUfi3C59yYoQyro4W1NvD8LvXG1bBcx23CBt3GaS5UUD4kL5",
  "key22": "5gtez5ExUon5xWFvmo6kACPMgvaALHfuXXxKGcUM2X1DpVfBkM6tzLSb9ngPie6xJkVyyVsoQhJY4vYtvBVqakd3",
  "key23": "3UE2f1ZS1X9hvrgjBVNpczGwfVzWUSeeEbtMA47p9Sm6bxKPKUi6ErmMSdBDpp7gZXNLfpUrFCKGCHMVzcVqydCx",
  "key24": "5vdxAPK3g67r4KnTNrdGzeE3wFLpaGD8hqSUCDGhyJDKKYemKqJhKCU4V26mk9uny7syqRX1ex3yuBRiPT4kf2kP",
  "key25": "3JHsxjPHdG9aMgdPA52oAzWUxHdh473FrL5Cm2axWF2NvAd6Wf9XeLRPfNts21Y1g8kqWVfY14CRW8nnkgjeWDaA",
  "key26": "bsF2tKGvWAmCCDP5BVsYXWsT3qBfWb5uQFPQZ8kQZSHUubMd79Q1tNiv7Whyv91PNpSYWvtx46tUDJDfckN26KU",
  "key27": "sxcTA5HkxA1NXVJDTULbuKV4SqG6Gk5VVHMqJA45wNBG5RTYCu8DFSHJt3SQR17Asz94XPXMrCSKujv6wuLjnXW",
  "key28": "3T97HBomiHMG1cg1wT56DhFWA1aHCLPPY9dzzUWV23tdd9QpXG6T4BWAaPkPJ4V4k3yKd433dGww1JJAzUm7jhXR"
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
