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
    "4moZE9gBAfBbgu7o8JYvxoXj28rFBJ2QepxRynqZrBvaTYtUhKZY5LHCkA3YDEZ7ZDvckPxky71KXVNyi4AzFz1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LYLWv3954iHmDYcuzacWbnZ7fdyUsgbvGJWW6Y7So3ZXMtH2DGekhQBHXQbTHsu5CCJNYdTAV9Kzb8utaYLyDH",
  "key1": "4h7QZE6SkNCUrWnehWR14eqZRmN3AV2oNNd4sMwZJuvB71Mbcxt86PFGRc4BVJQHF6kTTv3oUkKFFjTgEKoEdtdZ",
  "key2": "YDXLBz4FNRBDVM2PeXaGaX2LxhBicJtrSM7kXYqhJoWKQ4yVVnmxUaN876xmUQFFryT3A2MjSr2R7sumJPbtA35",
  "key3": "46ycWzJTCdh8fSyPwSRPFXFxLgvMWM4y1oykTZq7Jyrvm1Y5XJkgH3LWy1dywQDyLrYMPLaswn8iQkW2kP6hbnrJ",
  "key4": "3ZUsQ87FVL8HpXjBdLoJnvSN8NFatN7jbU66DwV4khvDKL4iE6XZD2qRjMTRPRA536sR7rdUzNT8ZKJPm1iJfb4S",
  "key5": "3G9qwPra4Ua22xEGr4u4QwMc45vKMoDQKeq7nLVrVX2rUAwgZxFPFwk86cjphBjaS9dk5TwSFC2NToFogDvU2TmK",
  "key6": "3E24j62rD81my3HFxwnk2tgRJvT4Cqb4VCwmgkgNPzEBcesK79j2QZrEuPDokNRdQ1UAQ6bAVBGZ7pzyHs458gps",
  "key7": "4XtD8CUnREyuzdkW3vkR1sqwSdi7HEdcvCXQURBQC2DUpuxsq4qHucAMfpDVW6FhBpdH6Gi9b5h8DdpuCNw2DHuV",
  "key8": "526K9pAaTiLCW525g81Kgf3tw5ik9Ymn8syuGgWQECk8PBkNEdLEXonakmJHxuWePxZdMZH33hGyuADCLCkf6L14",
  "key9": "V4oSULiEEK9SMtXzVPcKu1uFXRvrL6kfRznBdGExPFoqGVcgZztEWsK1fFHKbVe1YasvZpqKaWN9V6kmDBjABJi",
  "key10": "f3YTzjirdeUqiqN8Ac4E6oRA5KJj1MP5PT8o59PYDDc2AnXLMuDHe2uUbTkgPTwdFM3JDP3XkwB6n2EXqeyFAmq",
  "key11": "2UE9CBLSrS3V2yxBe9krZ1j45fZcbfw9B9MrPGP3tYDqgMa7wdhvHd7Ar85i8DjmHjuYz14EwprKHLmqhV35UPRq",
  "key12": "3r1ekB6hHsuhHcJgmxX4kirmbQooNf7WcpsB3sj7K46U5SGxFQhnX9x352gwmGX6NRxoKTSxm8RDgUjtadmr8HwE",
  "key13": "4juvFPMqviuhqxiJCDWxSzmpz3VJSPPrRy79m2dd2AKhDLpnmdgbM435NPDdxeAA5x9C3iyukNt2kCts9nhK4DTG",
  "key14": "3hTCU7hUcjf6dCMbHBR1SPKdNBDWohovoEBt4S1WpPQYKEC6URR9KEugWsDDscHrMBig2oqsx5rDJjrqfhhKXV2w",
  "key15": "2zYqTv8E6NrhsVMdAPFpjYjpAuWF56DfVCcmH8J5LtsfAutqXP8u1iTkDrxLijfhA9gf1YHrNHRNNt1h9UH6LKu6",
  "key16": "2AdhqKj7BtK3JEL4jhcb75e2yvuwVB39UhL5b8vz1bh4qPGmyCUjNk29195UbvgRjRVUzoCDda4YrqkP6tG1Pmvh",
  "key17": "4Sw6HfkqBZfpMSMSvUxpnnKqy7Fr4UAM4iyL5PumJCvqNf7WqSzmm42uVT7cRgxkxm823AtqeXr2G7q9tKcLffuK",
  "key18": "2m2CVZx43iQShaDpPH7kdNmgQTU8r8x5sakqodyRshH2nhhV74PfSxexAUwGJjuqvgypLJhSxYfZ5o2xC8KS8MT8",
  "key19": "o5ajgpdp1SpWaajU2QRjpdCykmKAmR856s2cTdMtm4Vgh6Zdz7GDteXZ1QAVxmJVfvQgWJybkXFAWueU9iZ6agq",
  "key20": "2ypskS5D49wnSWo5AEJCqosd3Ff4zg2aJAqF9FtdNZ9xjApKk9Kv9NdEkPwQQgkcwdRRi3Cjk25CFHMZSN8Sx9N8",
  "key21": "63N6cQZP7ftK9bYKPmiyfXhd18dHQ2PU4sz6Mz3CrAPsA6dPzSssPuS2LrXHm1WJwFL3u9WQZ8jePDQDPavc29Ss",
  "key22": "67ASa9jVyi2upugWLcF1MtyjnJAQEMMbuE1otyGbwZvA6gX2f1gQjWo9WkxMdpYwGK2VhmgFC5vRXV1WroVq596r",
  "key23": "637s8xn8pvGGLbKyKjCr51dRoSpPnW5aerLKGV1ZCRysAr3HdmH3Tgrut7YU5qo9596hJCxBic8NS4RnRpqVNEAo",
  "key24": "2vgsx9Bqq5hjCWShs6Uue5ifUNRPuFpSSFVQAyMrRwUiPQATQquNq5VJjDuBCuhhY2pp6gHyzR7A96ipACxgdH23",
  "key25": "4bRmK3SDU441Jcds8wRA9WSvtf5wAjBAvwz7Hq4aBWpVsgh3ajymTxtqtKY5s5QsL1Kf8xLTS9sDR3YMe5xAsaLV",
  "key26": "2xrJbhFPxbLDDEB6ocD2UvT3q89XgpGTyQ1KYQ2mtiTsrkeqwPLFTg6GgMWtRwGCz9WNt2N5nSQLMZbTqXam7YX7",
  "key27": "ps8NqTtgQoPhgeRTF5Y5uPGoANa2K6WeZgsK4neo8oD6NcXFWtieHNcVZ9bMYUG7hHGYQydwemjCLhuRMwM8GnN",
  "key28": "2js65D2KCnyJ73pvNK5tBrSqEEM6avXWH2Ljio4fpCuBM9yAYgS76ZUx57Mdr2c3QQ9GS1jZQwxk8nS7TZv78mX1",
  "key29": "2F1hciTF412e6NEjNcvUkE6LKRqrujfTRsyWRbhnxZ1bWLRMUVM9GBBPB55jtnGf1nYGUga1qrponeLAkccj8ZFZ",
  "key30": "46iWcFeu6kZM1aryFEf8usfuVb9jtFe8U7eAeGR3gjjpd6GeBRZyAESvvxyb3ovkqnvjrnJJsA7RENjwhVHckNv8",
  "key31": "56SYwSwCSeN1F1nuyn45EjtK2X42SAepoTSiMdgNz1sbKfZH3LLcDUosLa6oCWp2EP94Wpf8kNoWzhGHm6PKguC5",
  "key32": "5gzQAFsoRvL4H923tDvvVS5YBPFec9DT2CMmZuTXXhNdcq5PRpgV3HpA9dVkxGq1h533Y4Wq5Ssuo4xtN4bcJj5J",
  "key33": "2KT83P63MYb6jd5o2qgB6XcmGhkZDY2uTtEfTtAckNXQY5tN3eJw3ZReMQ89X9xf6dGVn8qCv1HVDaW5BkHRi95",
  "key34": "4a4aE5gAjT2fVu6MPMPkhx3mQ67Tfz9TVNEt1SCcbihMfckhpK1THzkAdcYcHoKVGsBNVSBfYhfaHvyFX11nEKW1",
  "key35": "62xo4qy27628Eq6CHqXcRy412RW1CMBPAYnB93sESHC7wnGhHJE2bNmJoHmUGvWUkFWZ38VmBFqXoGRfZqVKE5BT",
  "key36": "4rSagaquVW7t1u1Fqx4fBaWKu9aH4s9d66GwWL4HuwAq2oQ9ZQp2X2cPs7HPA7HgrdWCNdG7pyUBvuL7uHE6fFW9",
  "key37": "5BrYAPUMPD3nikZegNCsQk2b7KyMFR26uR3VAQsRzcFn5xiPhepxXfmzKJCySUKj5JghzoRQFwKEtawe7EaQovC3",
  "key38": "5S4bBWfb5gbJzqaDjXsMeBUkw5gbkfaAormEHkvdUJ7n1nCNd5Hs4CzCqL8sg3H4qwZgizZDWYQon5tn4eU6C3AV",
  "key39": "4wH4CuyiKfD9c6uDMrg1SbfhM9SQDrycfvHYeR2JnNzqGzhESr1nujaRCA3fJky5YFxHDwugFyDniyBecsYjfQpE",
  "key40": "4AvR2CPhSG8YqYAV3rmXgLGiKwDRdi2D7nS3ygJrdH5UAREJXr3mAwR8mkFds5EGjJDPH269DACC51ehkn9CspFA",
  "key41": "3doCE2DBQmYF4wcGM7ZrhWHCWTSwKuXUJNHdwiLvQvp8LEYuHVA33FAn9cVmGQmFCRDSQ6zm7qT9sDUgYsdLPutz",
  "key42": "4Qv4CFMPF15GcehJEx4TDzR9MXe75VfUc8MXoy14H3LPxmF8nEXtdw9wm1CE3T7EH1oLabUEYpNXxqS4pPayRLEB"
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
