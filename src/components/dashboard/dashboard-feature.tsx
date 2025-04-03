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
    "4NYYFnGSsMoMYxNNu9rhkJk9VNUL7oore5dxAHxnffkK9BB7A9D3f6F4ZD5FtSn1oNmrGFHWFDEEfr7dJdiqRe4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kxuSGjr9yYw2LG2wWBcajGNUmcZWHGRLTMrGU8kyn7FoTN313hk594Vs3s5AsM1kSnwceW3nrXT6tR8n4D2Fgid",
  "key1": "5r3ewGwVhymG3DHXVgTKQq7atuSmQZNr6uZjPQSBtYXzQeqnfzBTuKRnPoncdW6SczmMhgAnisMu26Kw2a2Fo4bx",
  "key2": "2DGzdwaHAWj6EHwwgD26VMH6m67uuy4iqZbV9oGnmpRjJCcFMZ8nwpj2mRtbmPKA7nGtPzxy2Gmv4fBBympBLwkn",
  "key3": "2VtHfG12x8ciDB8J1bDoUZRxP7GwXLaabfvh8AU651xcaq6LdpGQ5dPASdzdnQGbpNAGnBSxj6V26XasjKwi4the",
  "key4": "4WxvjoooXnXbLE1sWLGsRZnDZaJQTVsdtL9XMGDZh1heY1xWB9wM3ZwNAUCGD8KCub8MuZ7P9pZB3cpcLfypHyvV",
  "key5": "3cHGPQX6CqqXJxSndskimXwbujBRHz4nr5YrzBwFMAtdM6FPbK8MbGCXLNwz1zP3CEpKA8nApn1QX4qvjrW79qaz",
  "key6": "3UmFfJC5DuQ3pWQxmaoshjBmP8kxeqMiRjqZUfMu34WY9hmBgnVXKuZJjhUEQU5fMDicB2zYtNJo3xVKE3XiePQM",
  "key7": "5AUcWs3PCCZAW9gCPVnTSdWtGB3ejpEvuobxMDNkztT9z92BKpHgX7i3wmV3oeA3aUD44hG1hsjevrFah7NvGe5P",
  "key8": "4cJdBKYbdFjjozYxgmGeXmxwVpbzc1BpwU5dWY6zCuz8w4fhT13DCKt61EaWez9JonSCLMo2kqkZRfzAZMqiXZq2",
  "key9": "4WtriyMB9vHZTBeJL5pjuKMb1QpmVGr9tXujjS72MMB8WxHHz4iEgitZnAykzqTMXXhNc2bekNx6VtfNf4jty5Ln",
  "key10": "5Ndpr7uk7M3aHrnk72QpdxBMqK6fFpbhzZppPa9hfiA8f23GXA5PAPuYGC99rDQDkgVSnyJGTgHbQiWnHXt1XwRn",
  "key11": "ST5teyEaxuJVNBFtorsGavvvAiFqbF55WThPhUX1oZsapMnQXBArmChg77Vg3PXTspEqhXQLX8pSXFZVYDeMWdZ",
  "key12": "21AQMyqWfRpSGDo3ncvVwLbsvXuNDZyKktLAUcGRZxHvY6cAA6tSgjnWxKfRpQJytYtE2yP51CX12r7DUtkYbLbn",
  "key13": "5Ykktumm9gDLgaJ8gHTrThzHYHKvpjfe9beZDQ2TA9ertayHEsokj6crTk8phb7JK4hVnMo71Xqx3yKh7jp9UnDa",
  "key14": "4k2jbCs1RNLEcYSFTBYifogTWgZr61zpg9XG4kCDHRdJB7sdxyMr1roApREioZJctQzrycNGNXrK6MUKapS31qLz",
  "key15": "3s7LZJs5Ns3PwZXgxAKnRtpfdk8tb9sZMfTaLDgAmi1GspzzuJfZFvY4iSqYZV36Sy18jq4QiqeTZ4K3bx2LL3J8",
  "key16": "2wok2BJnbUeT2fyqNivog9DGjF7F5VMDpbDc97tFTM4Q88w7wo4HgXQYm63SY4VAEAesih936tTYPnLJmJ7zfZBN",
  "key17": "2NooLe7LQWVRga8cAM34axGLgJ42A1stzW31gWF3XGfoMPNPCJx2G3j5TF9QLxgvNS3biCg1D6puhRx4redbvpaj",
  "key18": "WRBSSqgLhwz8YwpgNZLNC5AbSCrHUfTDpL5hY4yq8phKbEyt8jm3ENsbwTBAoi7iVjtDywtUrB2KtxvuSe3zn2o",
  "key19": "4V4Jehf494A5fqpNmUbYzaWER7ueRKxwKtqtF4VMPApAQ4grh2jrWyfyxwuDHiXWP9YEeYgnhWzJwkQQkZUGKj2o",
  "key20": "q3yGAoz1yMZYCoNZw2b7ny8b5kB2LBLMu6V5UkPzLnHjqHPqJdZ2PnT7jy2PuvXfox57YPQ11bsrqbzPhqgZ1oW",
  "key21": "2YqmEoDbYGMw3X9P28R72oYkSq1TBY4Etfxtp2tcm66BE2BXZUpUm9L7b2vaWVABAoHoCKGgt4F2rwXDRv8NZBe8",
  "key22": "2YDcWd1LjcaTXmSMM1Nqj9Jn6LfEbUEefVvMwW9WnWCab49gkiumDhEK5MqycCyhvUHtkRKe8WKd8dZv2mTouiD4",
  "key23": "4adCFaXt9UByKDojgijf4KtxoV1h8wChAEgx4oaY67AcVGa4YHEDayCmYcvpCWD5VxMPtJPcPdHRJ2NvF7ZScCHq",
  "key24": "5Yh3uriy12dzovDeRAzEr9jRdSt1yCvVJBkPUwR5F9r34Wf6Pcj12vkzxNUyTMFQyH4hYUmspLJnbqtsnFdyZW9c",
  "key25": "4UeXVdxQXcZoqnpQHw4kGE4KGvgtw5FuixhHFAzPVNxaqmaegaAn7QtDdLybm7pntCzo46Bznjme3E6C7vBwkdBX",
  "key26": "5SU4z4VHsLf4NSYrTPAB4Ahw4Twm48oQvkDWMNmfvvCanboTGMYsijBzJ64qaUgBcBVKeuKDibJACkoF3QFm6Dtx",
  "key27": "2CMz9A6GqLS73d8C7DFnBEsA2SnFygyDKdfJcB4ZHt89PpXhpbVjnD9m5naB6s336jfjG4UGY1LGSw4k6q1hz49",
  "key28": "4xArVYFqNddt5wLjnwngvbv85tCm6DhHNRfXBBmYwWWFP14fE1rHfhYge468FV2gFS1L6fsS2cR35ebcBKYjQQhs",
  "key29": "5mpAv1uAdDpcaJMnJwWx62qTKtdLKBRSJi9z9pbYhaHWyYx9uc1R1KHUG8LfnkHnyeLATPUKy5upPjj1q3kcxe2Z",
  "key30": "3xNcn5McW3AHSCX1bboRMgsQR4KTGfqa9fNvxmSQHq1d7D7fGu2aP2hBoBi4AqkK3gMEKt18xxNwf4x8wStCfe2u",
  "key31": "vxraB77x1sB8hDibFDif1Q7XuJBT1QdQfrMGa69RiNhHpQaxHDUthrxNQZrhNaRWTaqAfnVMQ2Q1XTFNbvFDLSJ",
  "key32": "2EUXR8CPRVw1NPVY9VSdN9LVeLqLsacJGsVA4gTdu2EopdCzWKNqC2MsyCqEJkmuwGKhkVgpxreZ3Z8YZzJioLGF",
  "key33": "3DFpWWPe1pX5wQYWcfUBHdNd9vsoPbYmtRUU8sFpMR8VfCqn3XZwDmwXQ6ctNpak2YcD1vBXYTfmKZRhmWwTjHKp",
  "key34": "465aN8PW8wV9Eorza2sb3y3Mj2ThZdx7ki2Twf3vpgyn2MQXZST7u76ADk6PJ48ycA1ic1rBANTrBmdYCACS2SHD",
  "key35": "4qyv9ByxTSZZr31mYWYXRomwwu8r4NxVJXf5TK282FhSByY8G8TmxjxhesxPqr2WhQ7kqazJYDo78zUTfm2P5bzh",
  "key36": "3dV91UkJnuukWCx5q91YGjmGtujH2nybGPjMjRCBkJQVQL7Nw2LpnMtNp6LBXTKtrJp8T1CjzaMrQ9ET8VeYQVBk",
  "key37": "5Z7kN95AmkgYRkHdeqCKGTTJaRs1dY4Mye9PXFMzzkt97hufLHfpa69pRe2H7MNNuEiNHGChatnBo8vdG1degWnd",
  "key38": "45RgXYuTKAyEmSme5L3gMMdrjD5MY16EeemvuFC6MypdeAsGTvSsDt4UCBcBhGtC1gb3K6tyLrDq2Mkaq3oFFD3b",
  "key39": "4hQ7hdMxsKNeGr7mC3a9EgYi8KcM3kg7yP9heRyPM8mSAM6jBXaqF9EkzvrF4qbwkvd3VwJRkRXxzKgcG6uvdzWQ"
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
