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
    "4C4VS2wnTfsGsuHKz7HYhwRwHvciAkFZu7Dq55QzDngXwupWmsWmBoEhUr5X2bKpnAGVH21dbn2tXEFUWAQeAt4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44NZKzDaYoFtTzYaf3sFLPT79G7dL19E29Lz3SAjPhLeNZDmx8jS8J8MaPnTmgkuGq7hrUin8Wp33DedB3gWqZbe",
  "key1": "3wGULTA4qsYs4U81AtUDg417CWDydvtq31cwWxpMj6xXtZYJjZ537VGVFzsZeRK6JBvR9JPJH4tYadoExxbkV7aR",
  "key2": "4rhGyGYw4fjMaUDxPQTbkLZ6C35dM71su9ksJtURayfuTL6K1bL751Fsw7kzLu1V2CASvG4uWD68Xj25viXSviQ3",
  "key3": "4cMWR2LCWRQ3Jtdk2oXiZfdMr5zh7vrD3V3MQf8zLUij6GxmNVSHmRWMydDw2MEMj7EASYF5JvvoYiaWoQXzsWZ3",
  "key4": "2LUentH8PW3C6RrpUvpicxdUgnQASmJa149y9hWTnnruotcys59FdnEGfuSZhntaCsA76QtsPL7q9sgAYqF8muFA",
  "key5": "3yKCZ4hoc2GVCKCS5eazUimmvovq6Z8b725vvaj68cVh2jVhRD12A9bQNfAWME3iN2SnciknhcTmRVRowkqviLj2",
  "key6": "5z2BgN34oyyfPCFdTysmY3T1P5xzQRMQHC3PEQhwoEn5VqkygoSu9YmKQ6xphrkpEqpUWtfyFxKJAS9AEMS5LJkF",
  "key7": "4fUpq6WukMkQeNN2DVuTcDgMjsppf7YhyF4wehyog5n5de3BnLa4uULJVMDQfVdiYaL1R8y4iXJwPzKjY9XU1CZQ",
  "key8": "wMWeRfsXGwemtg57U2tUGqNnYx1sjo6YZaaw29gcukkX8XQC8ToKivi1qfgfrAbcQpbu6sPctFTNkoUEy5Yg6qJ",
  "key9": "4CX3ubdFNpkSsuPtvgpipQCE5i2eVEfcJvvDLAGxeq1ndrGjTYBoB5YX5LL3zMr8PnTzTPMVDRJXaD3XxaMk8PPt",
  "key10": "3NLrYRAuBSrupUhkjW7PiyWmzA2bnkP1JaBNcVGpn4vvX3VDbW8LZa8Cbpbjum6BLwRFrEBoczVPTFJ4KDYABvn9",
  "key11": "44ZDNdMChNYyVtn2J9YmBxnneasWkY4Xs6qDzNTo9XwCeAxHVmshC5FY3Cwo6UUQeJaXV7wrYvTEp8JFNG2XVRHB",
  "key12": "dQh6DU3B2WSWxvCmLhfzkdNbyueR6c3ewumyM6LrVF421WFBBB56jvxX63yPUzz1q9x7hQxeWJH56YHvF8QbsaP",
  "key13": "357wphZnUGAMWVZbFxc743rbiSbVRKoYCLiPCuiXJG9EY8LBD1JRM5gksj324QU1LrUgnYnDa1EuEo1rjZNtc3Hy",
  "key14": "59HfSrqpvdyDZBDrnHZWn9WMXohoSPyaLSU65vvQLJ7DoeoD7bFC4V6WUQTmX8d2dersSfKcbnxg8rwAXnJJEUoM",
  "key15": "2KMHV7MtXiBXHHbC68BmsxKfNJwwRX4hXZQTdSvKJqx1coww46TDWXSemdSAMXThbewfndamuayw12fcRBpGJpY2",
  "key16": "9fNGuKhAMrLCeKqtsR7LUzEjvoiK6cCUnw2KJDRrbj88WicUx4WbTHZ9eUXq3KiMnszP81PnavvDGgPfqYYhxtX",
  "key17": "369MCfUXrN1vtU6zSGkLG9B475nQ1YZJWkdTAr69d3yHHvrxNoVqySu9a7rRxosCLJDv1DcRFACEZVhBiQ5izsCw",
  "key18": "3JQTRADNywDu7r8MKPgVS74kydSP8bSgqnjELYASuMe2cwhjkGHxt5PFeTQxV2NJvgCgKSiSA3y6XavULMrzd84D",
  "key19": "5KhcbdveDsMhM3gLPVb8yEExL6CYbSWX1NusUPfvRJ6EwVR3tvX3j2ZrKpqcMgnaMFo8yfbnduA1nwCMPpAv5oed",
  "key20": "4w8ZRGydo6bjY7SmrsyPQ7YFirkSW7SbJKpVqgyErSMB7dJ9APUeAVBV4erJmEFL65voVxE7NKE91firymAbR8Lt",
  "key21": "z6KFghEdupQUy2LPXNtTo1Rmw5AbuUXUgV4skJReiGTTHUh4SmHieVexKXXof6gUS9BeEuxwAWLYeJUrf6jMkF5",
  "key22": "3s1oE4iNz6qhoeMSsvYjNSQD41HTcMcRcykgBVVNR2AkjTJgWP6rE7Pk5JCuasZquXkAiLAeicWCEr41KTs7SAtV",
  "key23": "64XeqTy814E75ey7q5eP3bKLtPYBRWt4jhmDogXErPruA5oJrZhX2WUA3n4weQKCezdj9JevtKWAcbUv3NVP2zSN",
  "key24": "2tGumYupuAKh7aHQxYsmvTFQUG8SenfqC5Jgj4D4y5oWJ1m28ZNLfpBbZvoS2ZnTbu9EsrtsFyd2wUVti4agMQ1b",
  "key25": "2EsrEZvsXXgNfKjbSCa4wWpmansrRhNVWJcrWFyRRCjhuiDqkLe7qj5Tn2hus4w31MYmpc7jwm4VjBEAbZtom6xN",
  "key26": "P23k6eWGMkdcppCHwF2tK3RzAc2LJksADF9uh48SXPmYh6QZN9HNFJDPpGLHciKuia9fDLSFoGX9w77M9eZBNEZ",
  "key27": "27HdNZbfBF1SrmWYxB5YRTXcVogLtaujkLD5yp9CAy8LSvWtTaWv7ZiqFZMtDtCQ7yGceCqXNmeUrZ6tM9VzJ4db",
  "key28": "4MxRAEwrJURV1a6DcVQey4aHbiuCxAYzjxtsShwRS5vo2v5snd8JtX3N3LSxYoFkmAJeUdrmb11M33YVvMVeoDgQ",
  "key29": "23XRvo2f8CDhQnNf2XFzfHyJrLAkzvh2kGt5Q8BLMKC75Z53QyyxKkSiJZCRV7QZ68RfqvcMUcsrGjxfM2MuZGCJ",
  "key30": "3rEb2h3PrwTV3owNSssJ72Ax9qm6FvvCHvFyw4iELijUGuSSV3c8tbc5LdsokCPZwRPB8NMaDyJcccX4Vvbo8eFc",
  "key31": "4j5uSSRgmDg517QWbkniFaT5cQExrM49Uvf712Bv5z4ntm8ARBBKXgwKrCaiDGQxjGkUb8hUCKDsoGNiRKVAwJZ"
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
