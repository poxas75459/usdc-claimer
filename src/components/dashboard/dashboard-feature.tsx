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
    "4WGsKwu2tLX2hCvXVhrSZEzSb65bNBUcX76wNfrrfJNv1vLjk9wY9GkajsWwx5Q1YbUoo7g4g1zaPWiQYu9aJG4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1UKX48SkCYpD6BvUPa3VqVhDFRrmt14zhKTc1TeAWiAwFZUBzspzpcgtcZ2fS5j3AhKkWfGhogAxZ2YgNJhQQ",
  "key1": "XML2YcqurNDmdCP8Qorpcxa6duQwnXTErA1Fmfp7JhjVHUx2DH4k1GbwxRMba8WMoebGfNizqK2USVRVRqRc8Cv",
  "key2": "1rqujkXxTPaaa9fuEX1fXys9ueHgA8q1kV662YrfiswLFsoLCByZccenhQ4yR8FaATFmM7LmuyLd27JTouddfHC",
  "key3": "5YqbW79X4PEQMwZaNiT27973HQp7JeSHUDb2Yaaj3ghU4KnBTGADJkxjRw5v2fHVU9FHmdfC5814EXUTAeBwj6co",
  "key4": "2BG5UQDKe5z6Sp2P4m2MRaGdi47GiKexCMstLgw5Sh1ABTDcexVmhVyxLtbWULhpM5wAJ9zH3Vdbk5JhvokemMHT",
  "key5": "5fDV72nP5ifG9PZEf4dPq8qqGQvHmFS5cL5edF8ot6ekwvvzikavv7acNdCeUhVqWrfrbWfHGpPLysrqjEi9NQ9j",
  "key6": "4DCzFaY61jato61FzEcPNeS38gLXKPr5Zpr47akTcWq2A27SiMQESeGCJxGfFkDqMjWUMtpf41MUYrCVugizKuuX",
  "key7": "2gPjW269fF4wvQXKQbsQWCNCCFU9QMW9duGn76PojkzfpgVZrw6Bs1dBAKoTSGf9XqwbReNbXq2ajqo2Rfd2Hgtp",
  "key8": "3ZB4bZ1X91r64yYZfAfWbF5a1TwjgN79jxQAGsr1VDBBvRCdavJE2k4SGVF3p3bEmje4BPGkwdnawLVwU6kgfw7w",
  "key9": "5FX9eTVvrorJiABM917gJPfxsn4SVH45k5iUZc9cxLj5WpSYQhHoDJZbHT9cSSm3t6gAqSLEJYFK8Ax1psrnarGr",
  "key10": "CwB6p4vC4v9gE6RpUPPThwi49nsZd9NpQhYBy79mU4r6wYoKaaY3BEf48siLfLUNQsHeDBLqqeYJfpS6QHfXxhH",
  "key11": "2vUhX7UPoGAVKiQbw3pWh7wYAT6w2bTomWTGFpvdZURGq1n9CxTu86esG5k7Xcx6nsBeW6B9iSRHo3Gt8xAjAv2a",
  "key12": "121S4qMSgVb1S1RrgwNQyGi8a7hzTRkybiLcJU7QDvvbhWrN43eqfVojE15E4uGXwxYsQvNUExG2ohRLJ8wumc41",
  "key13": "4mp6bZh6ceAzdkXux3DSKyHzakPziLovqU5zEy8nhPec1pCidQ9tud9Dg3KwdpJmJMZ3GcR5hMCG3LpTibiuGfuY",
  "key14": "2u4TvVTmMRcsCTwkK3iRS2F1b3ocuak4kJTW75XZm4krYMwQqzydEqD1PZ1JeiYzavse7zp12Dv93wCaYRTpHnBK",
  "key15": "53vTQNHyfPMpHNAVud6oHrdaktGJpCxa9ZHVpZfv9ey5NKAAchYvZJgJnZJD7K2277RkT7oJXXZkzqtwebqegvmG",
  "key16": "355M2bujN6Bhm156VYPeYzus33XCvSWaYXrSDcyWZ3XNFUs6EFJ2DkjrQ5iunCqzdMg2hPwJ4CWVyzpkVPfjQ2F8",
  "key17": "52j2wRi9JG2WAxbMPK8yKoF9dMazsvQZkHLWYqRSNv1ArBZRB7DrMq2u2opYkKHKf7ocRMgEHbZhcVpWHXt95wPh",
  "key18": "4j1DffxqfgYagZTfwRbrx85whMSsATVoJd6C1S5JzX6HE5RJYnbnxTNTnPDmo1A8HPCASiaetQZ2J36fMuUumUnM",
  "key19": "5vfxpx9Fg7dAc41kqsBhyf1jRhkAwGLaBd9fr8iAPCH9bPgPPoMyi18nD9Az5EaMrrZaqgrrWo5hBtUgySZ1FbjM",
  "key20": "31sAeEnQcYdJ5iKm8rfeWg6uHVQidLvWFtfGq9HhRxiXPVFRS4rao8Q5VAb15QGAvehHdY7eSupScZA4TMcXeNdU",
  "key21": "21Zpt1hA8mQMJRhJFn7aU9Me3KdY5vM2dW5kYqGwsZiNd6QaqaytLCuPiX4b4BFHFDKEeCqYRmKrsXGwxH4e16LX",
  "key22": "5Td6G6qNpn3AkLJZA5XXKJbvMosQkxWUJhR6uo1F2LuvEdKRr5qxoyKekJ3U9K3Zxpyv1U7HX1RcC56NKVzCNbvR",
  "key23": "vweKLZBQQ8tbJg5RUj9tV6sbGhrGeAquaNxUirhkcMNNKHP2yEMm4yHe93nPUvw7qWzxzeihWCxYVimeRLcz8iS",
  "key24": "4WaZXbp6moSLMjuBQHGxo2ycmCnfwvZ4UbRxoMrFMeSMB7htVTftDfqRyT1GfmsEsKJhkbdd4hZ5TPWwDYkySQSR",
  "key25": "4u4G6AmZjX1KuHC5KuzWEuPcbi9mVqoaL689nhwK6h7qqcKgifobnBkoRGg38DHm7BCM9aoeBYqpAyb8Wvidq1MA",
  "key26": "RfJmzExBQXUGyM24GftXCkoWxcSQXt9kkAmuZsdBtVBgjmDSBTRXwXL7kfg3Kgm3GnLJGcj7aKCP14MzHALFgAR",
  "key27": "5ZJ3DkHTyxZFKGq7BaTrWKgAbEfqcH7LjmsqwinDebtYCJ3FW4WhqdFdVw553TrSMGirM94RZnjPjMaFBjZ6vVkE",
  "key28": "32m52A29b436ppFnXbWaTWuf2Agv7q7jpC3tnikBdis9dujmJMFU58wiPFZeghGZYfMm4Kbs7KnRSSYP7XtBzkPa",
  "key29": "3QFgQUTtR3xpJoSb6mQL2Cu7qALnXUVXdS1TgjmA8xyGnC6s9fQdvADAHaYdUFCxmBtyNgbYTqAnPcTUxgN16Ybk",
  "key30": "g9VpL1Jz596YRp6uq8gMNieNWwcsDUSCLKQJGMG9Ah7RW4QdoitCBi1gi2SNyoxD1eoNVRpWTxUYFLoAZmoLDZ9",
  "key31": "4s2S6kFiWYP34heZq7LCRJUHz1cd6e2PL6rjTLaSf1NVM1VWMr1QsmJKpKa1Vme3NpBx8sZGyicCk3gLBsc7Bp1p",
  "key32": "2RXiXH3QBj2VAyaQH1zVvw4jRgW4mb1n8FnvtEXQCAgdwF4EXmmzz8psYDfQs1YS6PG7YXy8ZYS3NSbUvxTqr23L",
  "key33": "3MuCEA9nJRWjg1qcFipUW6Usuu8bDqUuvHBXY7txU8hAwyBfU6zhWHRyWHq3JuEL9ZkF23GcByM24U7w4gq2ukL3",
  "key34": "3gBCit9gF37tKfcy1P88WHy1jRZKJFHvovmXq8UdfGLZnYy2dztiCjYYiC5c4tv8fVoajrCMLDXGBwDgFd8sQrct",
  "key35": "36dxVSj4w3fGHEbJZVKPswMVRpReUrD7RfyYKsno2QeeMbFve2pMdGnR9k3KMPSn1qmx3uSoGQWEu3VFgVt2tGd",
  "key36": "4VVCdidr3pdVAFmfE6Ss63j8VxEndhrcHV91rgDnFKB3Xv7yNWcioyZBKmx35QhrYcHN8pbyRteDBmRhZpz6EZn8",
  "key37": "q5uMfoci7JiCCYtd91n5X1pCFnZbn7KjA6BXdTcoCFsoMpsg6yKWQK2YcfWZmsuYLmod1aur4iuWdSB6BJdrCMU",
  "key38": "3FpkbUdbKzCSPV2wkuWD4iHf5xkE4Dvj2QBjE3o4Qj38rNJ8Ft3sSQJRD4aF13EjRbBTBJQtGrdoMJMUrLm1dVc9"
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
