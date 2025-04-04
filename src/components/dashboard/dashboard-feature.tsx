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
    "2jTe7qEMpHAZc7JdXR8ssUHEx6f6v3dGSgUdUhYdEHzLC4wm9PbF6NvqtQw3Pttq6sQH5y98okrSabgrcH5VmcDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674Physrn1CHx792vL1jiUdzSU8Bd2XV5t6PxLaRdNKih8m6eLrSviDPEGAGD2x9N864T2ojc1iLUsAYsSCYRRBB",
  "key1": "5iCwbHrUHCyW4uAmxqgKuP8eixA3B8zKB6eSMH2MPAwP4TRbwhqKiWsFDbMUzjpn33wcjKUTvyoo1ReVvwHXMtsd",
  "key2": "5dK67bXhhCsqw183p5sEXzjCNuZZRPS8XQocp77CiPTHsUxtqGJnRnEFDTt9JoeaVdQWj4vLnnk5nbBW6vfBwnAT",
  "key3": "5RCPR1ni2XXXTiLAz2xNwJQoBvRMg7GU8YiVFWN2RPS3WAK4LetA543kaPMh9nkTihGaCXkzAjNWKSHMB719Ca13",
  "key4": "4MitY4rwEBfQaDzRUukEXKohc9f8yCUiPE24VWY2tnSEpLdEn1t14an8RWYxWHtQuiF3hA9CgCAFaWy16JUbAXNf",
  "key5": "3Kn34V8E8ZJs5tpjFxbqNskjFkSPKo8K1xhFhnDx8kGurXaZKAddi7NM52EnXFNaBJdp82AMYmSHz1MmtC7Ewnn1",
  "key6": "2FJekkP4p5RJyqciimeUuhXLoYhCRFQ3wp2inAfDp9Q6g7g9wwo8itmCmSPi2grGzNoH2FSCUaPwntcvYhwviuiY",
  "key7": "2CbYuRmFY6fPQ75Q94dMVrDf4N9B48rKy2CGHvWHwYg5CT5CTQEmdN4Qadw1YXW6yrmwVLjksYL6S7ptjoUDVDvu",
  "key8": "5CEuCaaPWgjDMRFDBW9H4GYTgoToXzQW4XspQTDEptHYWAqF3pcSde4iNzTXNQghyLtHTRUXkCJThp8aoxoesBno",
  "key9": "45oVMyvUKA7jBijyXEkj9dgyyPNpqFWAie3CzjgJm7ctT2zz6wCU7zeNxzVd5MpVCifnJkFcXXSqEZXhf4tp1Qr",
  "key10": "24eVH49o8abpbCrZkffNAp9kcypGudsruW5B6tWU6pwbEjusGdSNhrzVxqyHcC9HvZRbzhGXQNJcRY52UDefCbeD",
  "key11": "2upRe2Gvk5VPvbAzBVNmVfKfgL1MezcuPSvyfPQxj5nf5dBM1LFXb1EwcUpVPmKqh1UJPnYEwAVJrKVpThgGBd59",
  "key12": "2ZQheqCo7C2LXBazCqG95f9PAdXfmzocuBVmz4azMkfaUyD1Zeqev32ev1Hptq79WMBgiJkV7hunngASrMxsK2UV",
  "key13": "2LRYSB7egEWp1D6Rs7zzULxMBizhDoy4pzxcn9BjSF8kPkdJjAossnwNtCoUxZHqQmcNG44xtmaVbqJV6gE9mKVt",
  "key14": "5om1smosBM2p7dBFQ6qYZ9LdGj6kuA433ELrDYLK3iqRz6A8Q4mgWsjrsLtbsvJstp5dr8eeB3kdap3r7MU5Vgiy",
  "key15": "3ZDL4m8wd1UHnSxpVwjRmSnKZmPiFpRaCjBM8SpStJgTYSAgcKZUT8jpMJMVc79dTyr4yF5tJRtrMyEfe3swrdXR",
  "key16": "XuzQCBAvK19E29APpxaJp2sNdEAMkQELtLJsqTTwJV5X3t92a1r6qvNUfooSiy9vL2rZb89NJyXyt3syveUEC4p",
  "key17": "4vmVEyaGqgKNc7afVaYRohV9XVj6gD9tyQTjT9uvnKvDzHGvUCfQZ8zs5aGCM1HB9UzjBC2AjsbQvMtV94x96dVt",
  "key18": "4Lqh9urxaoAEKWPAaMkmqSpFLTBVWGoKSNzzFVU9AKM13QhFgfgjjmgjdpdQGyv2d59rQpqHL63C8sWKbdL31tSw",
  "key19": "TbfyShY3sASgQu2KUQGddab1kiW4cpijbycrkkr3PEdrCLuTT4aX716a45kv4Kc6vLUbBDRCj3z8uEFWtZKgdC5",
  "key20": "284cnx7GjPcLQ6KqLg5o3wMfodmmCotRnr6pRxqFr5Ypbh5sP18Lm7se68yEhUs1zLsbmceJTUtd7b94GsE15cQR",
  "key21": "2GdRs27MzTMHtGMnuB4Q1G12gZC6WW2Yz7QMR9SjqjA3YediDwrrSNS3skYJyKbKzBm3Pvhx42oHUdjpikAR1CuW",
  "key22": "3gU4Va6xBZGYsYK6GYhEzn2jq6UHerVKSVrYRi3DJJy2rQg3ZmrWzbFz21gGZHaezYfb8w4NyfxpQGEFo96mKnxm",
  "key23": "3ZRbWU1rJ9FEwKw4YBZBja8q9Kiu1ZxBoALjraRxUMMvxPFyhD8pzJ9ujsqejMhcd3bFHuRQxepVAVbJyX5jMV1n",
  "key24": "3nKRQoUSapJBPybHbYGgjneMNfUXckpeyFToGfLpgErh4PpHZzqS6skJN149AkMZZtp8JgG3iXiRBxj7DSzUQMmb",
  "key25": "2v7Vb1Rp38MHysQenfAtnbxz7Kykqp4w8zNMWVskRvuzNsreGWkbL7kqWvpbKx8fiS7aT6PBgizGW2rL3TbFsFmF",
  "key26": "3zvbYAKix1fB15nnnkjyEWWYadNiGyWcfNvnqoGCqQcuoWv8SCuoaygcr34TA1qMaKEsidXMC2WWNK3P449hqi2S",
  "key27": "8HBX3B2atR8G3UdhopTGjncn8AUmFrQN2zRZeXrWeFLuW7rCweuGiFFvtw3udXYRCnfefBpS33anJprn2Y4n2gv",
  "key28": "4hq8LRp7h11hpMdwArMwTTfZEzNhUzDhcaNFjfd14UH4dhJRnRuVgGYDKDVJwHTrtei6uHojwmu3y9hfovpyNaVA",
  "key29": "5bjdnEbEKD8VCDLeGBZozH3SwxvuL4xtY1fN8yoNWsQvWa7EsQtmrtKiymg47QtbE5wb3BdJNZJ1evb7JegYmemA",
  "key30": "422E5RjQKnhU4jpM2v1vWjV9g3aVsGF3VAJuGkQikSn5TbYgG4ZLjuGPRUD5p3bikJ4e2sdGWxMSbk7zpgadHzRk",
  "key31": "3pnYkmkhj2JgnnP2DGBGRgkQXiLYHpfRd39qm3sPzYnwhhZ7WWieDvX1HCbHBSTK12Lm8H7kxNzwFztk9krKWPQy",
  "key32": "45AMCD19dwTbPEzsnFx3tGKDFzLo6ZahpoybM1hupHwHmVBrVWyvgf4eHgBRtbXjibJkn7o1qMpKiT6oA7x4fHDC",
  "key33": "4ZU6RFbdutSLnXvQkeST9phyPqrcWySWP7DXt67wpoS8pBtsfbEWPtmLASBtZtG8VKwpSxVFfipc1PF9CM8hNF64",
  "key34": "3yXu5rtSJw53SrN89mkjmoVG4aUPnSfXi2xdV4HgRGN51Ucq12fJHaoNkQoT77UgVW1YZmp4boGsPDxDihuHhugq",
  "key35": "3CVby44fCKsXQmwQko7qjHaZHEt1c7sSwZFS6uaUK6HzDbsa46Qm9xArHyzi3LbK3c2rMmxziVhwVEXf1QgH1JGB",
  "key36": "4D4aMqaeRRbtvxM6VPRjbJ5mKrgenXEfW7otBfGnFDKKGwZrfUJwDFwjD7FVg9k3Ubs47ZVYb7d5AqQsqrXeq5G8",
  "key37": "3tMzcY1S98jxUUVdYdsucaYfuYZrzdQfYaJsTP8CnNTFX7WzirPFBPL48dmNwgyN8M96SCdKFYLk9E2jvoqW3zEw"
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
