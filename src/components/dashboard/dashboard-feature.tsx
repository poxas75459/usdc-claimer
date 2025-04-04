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
    "4EHaVGvzhmvLUqJigB6BTRvTKaZkP2zYuY12iEAHEzfdT9A1FDjsX15TmRyqu7JMQJqBLuyrCJ9kms31vMq1gerk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8ayyEbnqqV7Y4TzY4BXS5jhMHAWXVvqaYGjK35g63svbfvXWD94LwVeX9Lhw8dF9p3FZCLzFb6kUJChMVcasWW",
  "key1": "4o19VPq5AgkVqAg8ouNXbBdxcRgQoj13jdFYKk2PQw45XJ6ciHT7refd6hzisBjarfyC9VcD7sR4tkhHEdqy4GhE",
  "key2": "4aUXrcPJ4YNmXjTXmWEPmeuDb8c9mdzJXNcTVmmoghrMs7toY3Mw5PnxvLx7T5iGWXXn3QYNSB1hX6txsdaeMEMt",
  "key3": "3BfUf2hoXq9HGVgqoCcmMxTmmsHYtrNrEiKx8icobE39DJrxmz54nvx1CafGSJmGK9Tab62nd81sgwpQnXQ37BJ8",
  "key4": "3mfdRgZDLhRguXiks17WhynhVwP9C8mtbJyDQCMawcQmj6NB91UqbjW1jZqHaHHwVz8NcpRE86wc9hWakL87vHQR",
  "key5": "5tskNL5RNXrFiA4cQouDCBL3cMq4eqqzCoXNQKDh73AahxKVmPZNacr8szsxe9sApUhUUiuqw9WxgFNVyxvHkJVK",
  "key6": "4b46vduEDGHPee7RJ6AowphQbsdhuUa84RXb6vgB7cqcej8xSqFrTGkcrRQJJKvtvPKvXcczyW927GHRodKinBdo",
  "key7": "4XinwBYQPkzqbDDigDc1MJdgasjMn8xxnKTuUCYW2dw9Qv4pSiAspVxEZhPWeFu8Pxm5Yi7xFmxdzs5LRtXa61kJ",
  "key8": "3szfEpGFW9Co75Aiw8Fcc2gxQjkH3xjpVuD8mZoFZus4PrkWpJcwJSCNwYfkJ6ShyL4nEPJW5MdDLcGd1qiHW7Zc",
  "key9": "3KHXaB8KDxX5FEZPSzseR8fKagi3H5ziZsX5YBdUpqoCQdW7VpuxrovDVUUKyf45eLznXZMwH82ChSq73B24nhY4",
  "key10": "ctriLL2VcuS9MeEvHh3b7S5t8u1u7kyMccM2at6fe1WY7gDZeqBnoxDZHUX55yVM2psAzZNTtgtqpzWEh6mb6JS",
  "key11": "4dzR4Sj9i4E4b4J7etnjUBgSgFARi398nxxQ2MVEgXGEsifZfmWADbtNrmgTxKN1Pao6B2x5N3RBCCs3m57NuxNs",
  "key12": "T9rcdzdw7N1jQzsUNXAGyEQLfVWmufMcwr3s8VcWXBEDAqv9LPeVJGRCXBsrFE7cRZXi23Khek9tgJjAViNQjXt",
  "key13": "34BX3qMVsYV82yjApbVEtbsFWbFfiGchukhGgDBxqPaUd4GPeqgg66QRCi9XP2DSuk9q78b6GmN6BHgAm4mmp3Bi",
  "key14": "3ybzSfqdiwRBspP8NCmSokPe38pMYvC2wPwiFKEcS4KA4iYpSmX9L5y3dW6BcW1WoG1MKAg75LMwR3ktnKRSboNN",
  "key15": "2PugviPhYC9U2cigjhfXQvXNadLkbDhg86jGAngvEnQGYYu7JhGvoeAexxPGj8p4vjEPPCKXQ9qTpGvLKzqeurPX",
  "key16": "3vp24PJEudAUGQ3r9uybMC2X8TiAHyjGgtXGhY8yAh2tWK85yLPHP5KMqbnWMD6knzryPDTkjsQJtjsMmHv7wa8z",
  "key17": "2ZymdoNFBCiFpAJpBnEhd6maQ2d1bpyuCXnrzHvyAbp7cGHMGZdfgnyRcRK7LTKGioNsQueT8CmCqrKfBsdmgdYL",
  "key18": "2f96pvqYLZNg2RuTF7i66YJYruWxJs8m7SjgQHQKDr2iDtXswh7MN7PeXXBypJNfkAobKioyTvVqEgfyWg5amgFq",
  "key19": "3eTi38vSAJ8JR7tzGrpm78wLWjTmXzNQ6qbixVa7GF6z2cTFZ6zABieMAN7k3VDGhTLSPNJKnYBAaACTKrrH3inx",
  "key20": "2X8CnGdzC3EXUKLQVXfnc8qEyotYAyb5H5yDZ2dnoxukethbGxpzMvM4vy4QYhKBFWasz2RTC5exFRzow1zZq1EP",
  "key21": "a6PtfqEtGEw4gmaGjCoaqdz2aTBwGrykpnWcJAGEtk9fM6vmUp57RzC69p2Y5gx4Ty1xJnWw44XneDrYeMdi7n5",
  "key22": "RpeN6StgegGi2H7WX2gx3fLFRG47eXz6nqnXSJ58NtoSP8PQ9usHy8Fn5br9pGD9E2XVK9NKbUUimXuNBCuC1Yo",
  "key23": "5nBbT3gfRsPEssLGE4Nw9ppxMoqv1XusFTiQm24PJd4wA29dC7RfJbzMTJSPJam2AFUXtTzEMxuwxxv3rRa351fm",
  "key24": "3gq4s7yWA19huEeHZoBPnkaRcoeq2VzSnzVun96ckMzwkrGdiAjRzT8Wqq8A5f7RBmchkC6zSQ7JT817S14TyPo1",
  "key25": "2zeL8UmV8UQrZQme8nmzm3HY9vK7o33zGVjKFSyQ35o27JNG4QhDqZ9JyHSgKpDxtQhrm5h8mf68P6vxvYtJSxVD",
  "key26": "EULNY3KjPK8mm6rkYbirMi6qDShZ87LHqZuNPwomi2d3RqKCC1ttN56pHb2d14EEJ1yqH3j8nGHC9gTqraNWp6U",
  "key27": "2LNVAHUZPETvHatmFgnGdYNeZk2vjRDfSYgLiBaxMRaTZ6nmr5xubR5SPuNoR2ahGT4B1sndnxsM3FQRiuPAdEC6",
  "key28": "cKK6VBWt4LpbHxcHss2sgZfbeMTdrVjdVJ5tKi5T33BX61xZByycckt6PupJbh1gCKt9LHoWauY9fhZaDtyNcxy",
  "key29": "4ZgBNkYBYMQ3WHVMbEAumnpWN1orNgptexBTxhUmKEgrYnBMnYYuNkKvSJuz6meJa26Kkbmemfju3Sfc1xr25BkW",
  "key30": "2eZTEAybrsCx22MT2FgAj5mdm66Bidx5oxjxerSfQURFkSCKcW9G8qfkJsQnQuv4aDUx6fEjMea9yHKW8WgCUsHN",
  "key31": "HpdsmrDsTWftW2wedEUsVCQWXKe3bC1yVjokED6XgUeTfyKRTaed6CgsAXwsU3PkQ3r1xdfoSMpBwEGUp6rtyJE",
  "key32": "3qxtGeYb3GPpYUT45iVNFAJw1oM9WJY9YCqtdch22FTe9qB5GDs1yEh1ayUSm4LrNNsB4hb5yi7n71v6bEV3nyxt",
  "key33": "7NgKdic3Xa7RPGxEnqUzWNzCvGLmkX5bAEcw5vGjWjbSz5TieBwEfbyE3tVL7pmBiAsZmRinuNCJQr1FmFy73GS",
  "key34": "3D94e8PNSkC1TPHiWgeYtsEwrqWBEdh1yFw9QzNEP6HmiQqRTCP8kqjFA3HCRFDTL2upxfiH18YJUf5HUGh8RwkJ",
  "key35": "5TVG5F13wpcjuDB3MkZihjXEk53dwkTfPVtbvxCm8LEacbantFuApPMBBLfbQFDmaieReYk869Sk4kj8HgviFomN",
  "key36": "naPVXtHZC17pKxWwbUrcrknDvaHjkzFpwjA3NyxPiT9SLFgRrRJYpp3n2fE26X2DewKkbtMXnGBiALQQwWCzfhK",
  "key37": "3xbQPUPxDSgNVxqed2dRTL4NgPdopQeca9gFJg5gQzh1pAGGpEwreZMQnpz6m3q6JVMbDHNtnTJK8pGxPsWMDCES"
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
