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
    "4CMFfnY81DqwcFeEjxxHgWfoUT1G3Q9CZ3pb16XcHiYCR5XQu8foQfb7Dd6ky9qpv3AfanDXunqje1aKsC9YmKG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHNvK5Ujn3Us8JhoU4WkSSBF2DjW95nM5pqZqRC3jKdRRKqGdaf2wQ3R6s1iZurwxpGwfhKeZCX2xobwwjifWMZ",
  "key1": "2styjaWtpMJqGon9wceypETxVkXNEzKJw257QfPsfzFodXDygucsgCSArbxegLovVEwxDeXjKa8TRwXvkKkgMMWJ",
  "key2": "3qLnwrn1UMFBQxpbjzJQb42VJNHY5ss1iERmfxtDpMutVX9A2rMmjgoMQuqTWGKr5UvQHnZ35ce2MZbAxVkUESAm",
  "key3": "4pD28ZSbZGkQTEjD25Cctc2WFuafyKXTydtiCA8fQQ6ZsnzHGP1mz7AE9G4VrD1kAd3KtYWiSZDQkmLJiTJyKjdi",
  "key4": "4r686NJzprPbUiHKdaSxEdGDandtx5dUjpbyuFrL72yxYB3XzNBenv9s77hKXfZ6aCeRTbDfcg5SwwieHfKJX2xV",
  "key5": "2rAM7kRJjit11ph3N7bAd9RgRU6T1s8VVkBvnhM9oGCE4nikYhYFLoBA3GJ3NLSVva1gDYRuTzZSUCcnZNLmVsaK",
  "key6": "2aMVkVch5W4uphgPZuUSKxVhbezWrbzTV4AA8iU8n5vxzGiVBvZ5n7mNQ3JYKrSKXMYyZSn6n9dAfWM9xd834ycF",
  "key7": "6VvM9AeTV888s7BkcBvndVad7NqLSs3cih47WgoJmEezem4oD3xRN5mmKmayYzBvPzzuVmkJv5z7WRanmPcZGTh",
  "key8": "34ymz4C3rfy2oDUVca8rK4DF57X89mC29pwe1ZM3cPpVU69sFJPNc8vEjq928dkpVtp56wxaagTutuZ66dY8CNs6",
  "key9": "67dgpcmnDX93YN7sYn7uPBXE5nFsjLEmSzE3AoQSHRbbYwm3uPomTkuX3wguNeipTdThtFiWShZdaWp6jDW38bhy",
  "key10": "5RNEzK1b7sdcMJbCodvuK3bvmUsTZ1p5JLLakH58iLoU6eWzN5QAoPnCkXgtJkrB8tD3jtyLLaA8YSsTD1qKvjwC",
  "key11": "5QndN5UdJFk3dW5Ac7ddMGRnUUwjNnToxvD9hxD8Wr9f19pjhwndpLEuuJjnNE7UKU1PRKZiruJ1VRN1Z6PnkAUC",
  "key12": "2LNyrvPzNnKi1p96v8ehdGPtmYFtLybmfFNojGJAfUid6UVhhKDT6Wrcf9JWkf3tBuHvLG1PEmnaUAEX1GJMvYow",
  "key13": "42EsfTvAeyqukWjtAihGaE1cMiy9Uqk3Cx4mf2DD4bC8KBdx9RFzxTHUaAn4ys9ADZeP4vYGiQfb6GywsuRCkYKG",
  "key14": "5xGUNTuWzGoi6SK7VuHZmhEyBiEVCf7mgAgDYqt6QBUqZpm8wjWTtzqVMPtHsWodGapwtrWzjCPcpvviCZpc2ie8",
  "key15": "5oKoqMezx3PNK1dJJy8K4zx51ptJrP4KAGEMzpB8tL4VLGm7iuMLx7SH4jF6FCeFbuWgeLbeXuaw5DF3DmJRJcW5",
  "key16": "cKNxhs3H2sJ41gkEyy7SYECg9AWvsU7NbR8V32DvP5rZZDK3urv4xU54aKksbEKgNH8iRiFqng3Upa5wCchDNGb",
  "key17": "3R1D36wgkUYYdcC9iekC2w8exyzVV4rE7kDWJiySrq8e7YaDjktm4AZqJSs4ptd4NBXghBWoXhdSJCjNtGkLNFDx",
  "key18": "3MKmicJnPDTTexR6R7nKiYXaZnEn1hBM5eta9knLAKpTSen4jb34ceLZQ8PgCBVLaz3bAaMTzkcDqv6s8Ws4Paj3",
  "key19": "45SKunq9EU3jn4vF3NWvbQLJ5jLSanYeEtYVCWrddMtSHAqbeRAE43ymc716yWyqQr8z5heNShNkbax16xTXCfhs",
  "key20": "3Ybz551TuvZK9gAZbhWk45EAZg8E5DByHnhoHJkKv3T2MxeAFwnrYwCLkNUEguT5p3FwHxJhacRj33hWmnrzhAvF",
  "key21": "58ToQPU4mzGYDCf1fTHNRE3cD9i5EEau1gk4xjapR1a46tYoD2pc1Yg4r61HiwHHUDJYE8ZSWE4EJ71dJGg5wtmV",
  "key22": "4CSZ54av5KtkWx5oS9cyyQnt9QNsBBycHLVzaVQ1h8hX7bnp6H4mPCd2kjBv8Kfm6d712ELAAQMwxnyevyvajwsK",
  "key23": "651iQV7GVsS898GAGH1o1P3o1YcebHtYUeJwScytLYKWGfTstPCuaiqzz8GUGXND3NZE6N3NSAR39oE94ei6piF",
  "key24": "3A1ogd8qVGvXHaadNrCgwyvgnUJrkRLeyZ22PMbHvZdXbM8hBKhKdCivZivHdKNB28qeKRDTEeZooPGePEKWJ6r8",
  "key25": "cCTdE3srQPDeRMmW5Zctm5TFUM3UR4uWLzY7vQME3E5bi9AXWDRU1L6t7LQaiot19DFETwjdubekeCYFfQfu8Wg",
  "key26": "36EnV3cpugWzxdhasGzJVbK9YSapQSAMHyM5TxgAN5gXoA1oGTHc6gd8vfYXAsETChdCGFngoz5BtqrXAoVAXUAR",
  "key27": "4za2tcYmCmANnciNFqFKQgTiLsyiwEnNnKmSyT6uk6rdd7XAWF1xbXnQCoUTk3YjiQJEVJ8GVkNuyyS6wsBazzoS",
  "key28": "5Z4QNybYD8x2iFuwXEWM9CbpFDk4bM3qcW6YfSiKakMzwC2sFHMca8tYX1Ao9rG3HFLv5SHbCruGRaLzbi4pyUwK",
  "key29": "558v8osXiimJJKQwtvw8i4KLzL8sGJppdiQzUJ3aHXCGgjYjmK1vkTG66wokiZzj5znQmgLwUL1a9wo1m9aqfk7L",
  "key30": "iXmAGAdhkf72y1WEBJxgbyyPGtBUFtASqSTApVb2TaeG6p3koSh5ytDcsMQaMt27Pn5qCHHwPJfJDHMfRV3HwfJ",
  "key31": "5afa9AmJ538DU7pcqxePoYkdQzrRcwViMxp3WZrzXv8UFwi17BQJgAwsnNRUBqxRr8w6841n9wsPUQQr1J17FLN7",
  "key32": "3drDey4okHuxfZCPQ4qPSi6ibXMqEdqgUnHAmJxoZhytp9XYKfofDx9Ct5EMptErLxDmfmbi8oFHsAw6XZKJKK5i",
  "key33": "5aHLGRTQbNpJJUdpn9k83x3TQSrk6YjugSiV19MJVYPSqMZVhvz1yK17dKj1qjcuXmEDvoyTvFkmMPEsMisXNFmG",
  "key34": "48nn1BcqSyPrVRwj5JW7FYd3ZSvLuyQhdUpWVfYNAFbVTSrunKafN2ZuxvjR8eYHs9BKw3RmgH4nmva92S1ddqT",
  "key35": "2edoiutGrhRmg6j5TUq5RjEhbnuPrUihkp3CMZxMth2VymhnMQjM63bptbZaWK4D6boFFPMEW1ThnxXFpCULgFzn",
  "key36": "5hic6c76i9CcAydwMaREoYaJjKFR5RLfgKXfGT4cnDtZTw7BoUaKyS9JdPYpMMvMiUttmUpw5Tx1RVJr3Ffy7sXW",
  "key37": "5mv1dqwLzkJ9j69AantyN1a2oKwdZ6QYE9xGh2jaXyhJA1VwmeJYtzsgyTvaXUuQL3AaXqx2dpv55azXFvpgVQRA",
  "key38": "3j27F9Tn5pDhdmKWMMweDieErdFsWuvctaHcjRfy9X2r9vtjB3pNaf2Yp4opF6j6Rm5NqzjA9ViwiPECPzrShcDA",
  "key39": "3fhFPZt7McSzGu3imDDBVj7geFosREbrihXi3sbEDENEKevm3BvS86Y4k9WG3ttAHHnrckjBHYpYZNfX4kc2JYT4",
  "key40": "5Ad93eKLUF9VgQTy1rb3kWNZ3qQwGPL1qUat9KcKzME4Md2SRD2UfExB9EG59ZJqMDW6f39m5wKhN5DxJ8BfyVt4"
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
