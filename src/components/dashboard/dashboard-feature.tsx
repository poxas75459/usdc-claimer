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
    "WA6w7da17GwEzYvubJx3wHkHUWvTut92KUUHHy1BL3yZVr6JtYaVaPjLUtsFUaA5M2zkcqS1uTakD3vSQm5zDNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bY67pudQ2G32GewjoxJMPByu3E8KqeG4xmvAVwZtwLJwi1aqxqeSduapdfCC1BGnNjuwTeRJcpw5miikuadnS6w",
  "key1": "2BEqfog5gsGX5Ytjz4kny2YchumJTYeD7znvHkH6iCwm39y9si72Qr7DNAgMLXdYrcCwnUrGSSgApLN3vhjEmM2S",
  "key2": "2oB7DiyJSKFNpKSwbS5doPKAtjwoadCTuTqYk883op2qyc3Asnr8dUorhHkrYXMoWfbpkkMrdzjqxQQ5HuRewH6F",
  "key3": "5cLRhk5yPcoKaKTt1zUGKmbebT4tiULG7Swhfjs3M4MoxXMKdsWPJNpLhBf7ZsLAG3X7cAdWJvxcBYN6iquMd7Tg",
  "key4": "oNQGcGaNGrLbkHkibfXv9QfsHo5qxKoL6ayRpZth1mDTo5fbR8pLjy7MDrkUSzRgUtHZ7rpk4dZ5Xp4RvVx3G6i",
  "key5": "5oQDHT5XmRUiqApWGKeCgFKmk9LKJoTdctAeZjJhu3CC3Gr2FRcno4jU5RmBadyp3zXGVpDB7hFT8vPsr4h7ZNhW",
  "key6": "2TEiWcv4vpLekQobmn4DKJGjG2hgDwaDahGUNySse5iSxVCmJsXxgPohmCdYkUR7NJ4NNpBbbBywDs3SDZWZHEPm",
  "key7": "ziuMfX6YrxuN7g3YYtWCxWeoZD5zH7uP7wqZsRR3aaUmXYX12NqMyRTPMQk2Znz15Tz8zXLDQiwcpc6fN379Lne",
  "key8": "5b5RBfzAvWGKzxnEhXpdmiRPaHvCXJe5GsaE32cwMhiZa1Ewst5ECWimaGJSDyuTMbJKmV9MyWGRDwrW2cafrF7U",
  "key9": "3Zns2bez6YcbAtAcwMn1xahzfpvcVxeZjduHRBnpZfiBPPYp34UkznRD6N5ri96UDqSvCxBQzGcwda6HPjP9Fb8W",
  "key10": "3KHS4ciR9H45YuTmunufTAVogfRJ6U49MwKf2rHGwZ6Emap1FTQyYe8B9dwqdupjKertvcba6zG6XcJekSPnVNNK",
  "key11": "4fhjL7CuEUsBGCwGohdUJb5b7paenYUztZfdTtKvtnUq7bzATUzyM5Y4Yp9fNiL89KQYUGfANmWDtwpKqeWbtWPh",
  "key12": "2hfkG2z4RVqbrHezzMF7fgN2sodRFV54XuYPpP7VwvfZXbbW13QCn494KJdZr8Av6phmaKHgQhA96EKwuBjPvE5t",
  "key13": "3u5kwHvcWhbV73J2PgHKGjapBAWZacuMCTv63AFbsgvnaPURMjbgw83w1k2EXcnNLWbRi4WTSAmKUj9XXQfvbYxQ",
  "key14": "398CoAbnU4zSBAD5AFUhYJU3TPhECyH4XxQucf65AJmUrhk34GrtuHZMzXKT4FboHEomtyiPsfdHtXeYaV7qUR4G",
  "key15": "55cbfjqXHEwGBR5Ybb2JpXmtxfRWX4cGYQuWkgSFcycZop5wHUsQLtSyFvE2vhUt6eG3A2wnXvHBbhS6xqo5bfsB",
  "key16": "3Rah6arPBUmWDc97FnzL61AHembizHCjUc55tSqMZK4Tf4MLskYhhWhXeEjQJDfe9ByPhd6tASVGEdJbpqNxF96y",
  "key17": "5v6tYZxvU9ukedfWdSCDyhpSbtRkVqLYaiDFivzQ1pTG2R2LaPczUtuxJdEZiziKpEoWoR6EKEatLuA56fWmevje",
  "key18": "5TExqauqW6PRMxvVSdHHnqAdZfwVAnMaJqfGPmD7cPCA3AjKmidvbYRmmMPVfWQVVvkiB1LEbTXUbToCbor3aEoQ",
  "key19": "2mLtcXaSp7jUANQ1ELCroD4AoytxVm1wamh4tVC7nz1iZF7VzZwQN2bBRkagP4pRE77rfuko3rEkXdLeTehNQmH",
  "key20": "5cs52JCz6DzJmwvAr4jdWHLChcxr2KV3t7CbRwbok6J22YuUKxoVwW2bG27PNvEaYPa44QrgQfqiRQNZyiBCcLFB",
  "key21": "3BvMu6orEysFGuCYdCak4oeHVLczPhCytPSsQtPwP965dZrutdgbF2mcaFBvesrz8zFEW1keKrF26jDzxUaEk9RZ",
  "key22": "4exVrX8p9paRTJqKNhcptgLCz9Bh6ZRLdKF3tzBTLrqBguPVRcTst3RGk115iz2CDPnVBswuJADwkxgzYWLTnZ87",
  "key23": "4Nwv1eb3HmLaX7ghpNppehNZkLLvLYDiHDzdhV6brDudtWp8wARDv8ZTdn77qwHmWk2ucsJAkLisxfpYwCKRozgE",
  "key24": "2fkVRyzogBy6LFQVnN3nmJ29AKWCiQB6ySRLQMu3Zj9N6tcyD1rXm9evt7yHLhZaNrV6UDwgEaw48HAVy7gkCwse",
  "key25": "3Vr1EiSw3hPDn918DCuYTQm8gBiHP3RMDmgnmAgQJmsAT5CMvo3rYt6vKPFFPVLPVKMJyybrRWEcfgHHSxCMEKXw",
  "key26": "ZQ9LJpXMpKma1mD5LZB4PDMcpg72EPk6ntuiPTJh9MameWYij1yqHeyPn1eq8DNwiu42o2vDQ6Cc3GXeKJ7onu1",
  "key27": "4WS9RmSzrRtMNLgLnJDN7H1xGUcV7tX27ZH2H1yYeT3PsdUY1F1Wyp487WDuhMKiP4iKrwSEirEEDfwiAMmnKmtj",
  "key28": "5bix4N8o5WCruuCu7ThZr1XtRWQSoxxZBtSmNqdW3hj56nPvtDDy1ZJDfaoAzneKS1Chq9dRpTyoRm5zLMX8hNJv"
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
