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
    "3z1q4HBeq79vzdyGYA1mmSC6NmFcLy7wCJjATwQffersf4rNWFTgLwTq4YffFpxjPhnpo2qfP9uWokKQNnGzsEaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azaDBsaXGsPpRaf3gLJsAqMVYfE3a8md4dXuK9UGZHMYSqSJ4k24SSwMgHGH49JBGHy3v1XTpzBhrmrdQ23x5XD",
  "key1": "3o6URCQrJyNDPm4dpjRbnMkfpuqr3TScxW9D443uxTYWSmXmQ4wTqfT2tNBTmNzG6UDQp3mnNrkzEMhn3aP1J1oW",
  "key2": "3eGMAVzt2WXgkx3hEfbk5PfH7XAECWyNX9okLLBR62WjvX71EbYvJY7GGexposps1uyiawPuGsU2Yr32SpHajgMy",
  "key3": "44EE7sBBNnSrokEScYaKMHk1SooQjj8aktLpiRgXBWhZkZYfKnGzBf19waewvpYHJC6nW9Fv4EMwGoHAyDHUkGje",
  "key4": "2EWCdq7ADJbbP6K3DMtXpH4DgUafRKvBYGbkHF8epfd7kK7cAq1DfCssuqf887YMwSe7ebi6p2EMi3enNfcwFjiB",
  "key5": "5EbvKf1ppAnQbhnwzHBbEFgWqSjhx596WEqDPqBGbyGDuoMHNbUkz2peGY65LpCfP5HcRy8RcsWDzTYYHXPXBfdB",
  "key6": "i6mwzkRMnxDcfbJDHRjDVc9Hz86VZTJSGEtR9hmxysr1QkrPZrUqQmyi43G3hxaM8KjnkxeNHMKMcVcqNen7wDV",
  "key7": "4PErZd3HnyeNCT6gPVTcfrXLfk9AEfzDnkFtcDb2TZf4M24eqNEHTcmHzCDAu3t6R66LVFmk5rsSV5RDXpKfpM7R",
  "key8": "5j4fn5YCfQ5gJSMELqDx6CeCgtcVVhNu8BEBtVEMWwNiLdgUoTmYvW2VTbV8oLehVUyvqpsF1qKpCPdyYjEstgSJ",
  "key9": "37nJyRHvcGjpfBWXcqLbdmb1bmxzMgGRS6kT43my8dr5wfVjBEpG1KgPufSTaJgXmkizn68bN5e9QW4vuyNr1MAr",
  "key10": "42RfjdxV4LiH169DUBkCwV3WeHJbtgWiFtaoDiYEzyzhzcUDV5rUND3EFisZMSNpbmqKoSK5878kswtE9ZHSDumv",
  "key11": "43xUpVBKz8i5LXp3A8uAH6Xv6WQHZejsWw1CMyWtSmuvCteZGNUdCpZ7sYUmhPavkMKCaazb2h6yptJsM94UhTad",
  "key12": "4rKgEBjQA114oDj1GpMNUa8sbDZnsmKUPHu61c5DeNEMFNgK3UbJc9GwH9TtB9q8Nf3Mdj2m6kuLnim9K4ow16Ew",
  "key13": "5yyEWH79yJBN18vk6F4mTXVuMuvbPhu6LFe48PfkLs2NcYsXizfv3uTTVEP8wfmFb5ixPyAdBXFMkv4LY1oxd7Dj",
  "key14": "3gpwnD6uzsShGTvNDsMtLVtLe5x7ztY19Y6J87jJddshxG7UWUKDWyKVpjMCQxvAz5eBoSpyZupfxp9dyswMKuFy",
  "key15": "2LcCm6dFaz8u6x2T4eFdou4xKJu9BwsUgEP3d8e9d6sJnYQgzD8SdYu4fir9Yo8KKZrBsfd1A2Sd35DJkhEnr5mk",
  "key16": "57cjS8sBeLjcUgARcHz5jjvWeULVycCBgXWtxgLB65tTHaYeotLbM1jXWfqSyucesDoKYeDbaVUty1qDeTayzG65",
  "key17": "52p9ckcFmC2bPgiS3VoebYc1R2qBvSbaWehut652deZWmgqcUy4pkp55T7Gu9GkPXKL66KRyRVvEj6egLAWzQbF7",
  "key18": "5E6pEt8cvT6byhdXV4ygREdBc7UKgMFbeWuojAdKm2S6NJGhxWvaQe4y64vpLHemtH62UqKiuzs8WjbqMGxzkcfp",
  "key19": "2cATEVNE9SvgqiM4t4RQ8Ki3SyQy7biPQd2sxSgqkoNbQKwNdfjducapVraUiBCEiXw6mBx5ZB4szPfp3QcqQ9FY",
  "key20": "b8FzzfpsHrtgx3davUteQFjHvNC5gJURv2aa2xwiBMNF1qWF1i98Raq9vGH4H3GnRPRtCvnbumANTNd8R8fB956",
  "key21": "23DAiXoViDHfgfGwCWWFrtVr7c9kNab6SWE2N2tkJoqHpotso3pzDb3YVvgftnnVFFoSsGWNkFz5HN7gSxL9K6CN",
  "key22": "2S2YSf5qxyx7AkvP8YnaeKeX57DmfrHKtRw3CB1wVEMt9iKubajJWcfth9LQ26raMAYnowHLLcyQbdZBgcRGxwi6",
  "key23": "2G4MCnehDz8ryvu914jdjPW4QnbNgocLMiMeDRwxi4P7BnPFdQ9NUES91mnj7jhNA7eWnKdc4dNf98J79X9US4fx",
  "key24": "4ZWdXAwZTiwU1BuZ13JSug3sRHGYVP6W9w5mJdMfgCkcBYTtmkCwaaUWey68jpefDVt7v1aMpA55mbCbBfkzHaDb",
  "key25": "26sXTT893e9CeiLzbzgyv19pp1tgsJboxvW3FNJt16jNB9Tsq9ovbE6Pzbf3R1jKdccDGVTFCtg2EkuQUjVGLfhx",
  "key26": "5kZUAhNxXgwHm7QJJ5EmwEvtWfaXs5GPBRBShAJaGiMn9sSrU2s6YpMH52z536Ljb89hpo57LLdPXjniVNzMM3Fj",
  "key27": "G3nfJExaJqHBFNtnX86cHVVXdv9QrJsw1GSG18RKobTC2bYADbygeR4kQeBoNoqdZigiVxVdiYReLV3hBr21k58",
  "key28": "44D17tFXVWPBZyQgEh1GxThvJmbadBFT3wYoA6PmKenqEy6g63EHwGFwsZ176ms67Sp28PUY8gyWo2u39V4ZvkbK",
  "key29": "wCWkRF74sTwyQK6P6nK2xyexPaqo6WdqdQtHLngK2Dt7qqeNn2cK5JS5ZHHkHrC8y7mGSE7b5LyLAkzNcR3ebvJ",
  "key30": "28KTstNVwise8iCezQBPZDWSTgVwy8VCWsoAfrMJ2gzBZBtNoRWj8YdHCNGPaWnMx1UPSzJ4D4ha8i5LHLH4xVLT",
  "key31": "4HbNiniQfB5531kFGPfG5DncuZRTWXBatjRKKTroJGXbxquDaQ6AYcoCnZyzsgxuQ8Km9W1vwQB8awCfku7DTAry",
  "key32": "3uH8qN1VpRL3V6DibDkSfX4MRa4rzzPTF3n6NPohTzUbZdy1NVHNXU1cEzB2vuX1Kx9XDcMnPnriqGp3xmVSZ3M1",
  "key33": "5D6Si9j41EssYt92iTgTZ19krE2aS3jJuzeuj3EcobcSNSaEMDZJhdprEnNwnSe9FNRTKC1ZjswTbGiHSDfpGeae",
  "key34": "4BPCnNMEsQMESRmQqkN5LZ6Ff8xx85zzE4LF4QqSbbc4inysMZj4Hrjm9JbQVS9gVeL1oLLjVWbcMeiLCHTUFGPN",
  "key35": "8zpKLboh1xU49eq7sCEJ5hXMFXkPnnsvZwjvif7wGxadQVs4t5Ggq832833etN79PDw2MurNo3GJiCoeYGzJ2Lw",
  "key36": "FiNQ5cW9LVUqCuiKYxTVA1cyQw7iAxTG6b4jrAfwuqG264NVZXbtRctZouvYkq21hBwHSG2isBPwXQbXHziHAqL"
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
