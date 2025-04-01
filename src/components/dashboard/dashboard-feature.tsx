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
    "5vwdUYatQXZ5ZvPuHVGS1ifirBTzPn1DNN2PokeFDSxU5okvfZoFV13nUYEGkkJEkp2C7cnJx8qxJqqX5un9RUqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ddPJAJoHoFWWvKbQi9MVRBnSsGb52272RYKZ5LEVy99b7acGduqtXYpge9BZ4Zv5rB9Sv4SCitJgUv45hLGujZ",
  "key1": "4vjs4deBPXdnPWAPxZtN3fHbYCMLGQH727EnsiUvS8kg94D8fzgh4rpyh2KhCp3NrHX3L3j3zeATEZTxjm1HB1pu",
  "key2": "5bNbXVMLafomsAdKipb3k1s4KCtzZ4zoai47JakRFdp77gpPSYgzevLKyqP13eqVda52dHmQKuFSLuxFgpRyf2Gm",
  "key3": "2NhtcSoAwpyrj5vyjeV17urtXT3XVorewFcFiy2vK4VzMkT3hp37PNpAHCR12MxFtu8GqXqEHedsuRYa3j5TLyfz",
  "key4": "5ZdNCjU1sn1ZT9dacpU1PaooFUeLdYNwcfaq8KgxbupcCd4Xh342xMxowzSdcC6qezSgM2FutvqohM5vrGXnNojQ",
  "key5": "oBjdsLVz4rBpFtEwVZ8z6edCbmjZZwRaGAZcXbCHRMUHnPnrhBumCRtyEopLkqBLyvFnaypxbuPaJigrG4TzLrq",
  "key6": "5M2sA3SWwoLQFrBLrKPdzfEeUG9vnzuH4EAn4UsG7dZFdb4FUNr1zZ9VLwiK2diJB8bDe9ze7As3pmf1wUXxkNBy",
  "key7": "3V8yPT3h2Dh1jJb1kxtyHBriAg8zXeA9VXimv3Bo577QqbXAnzXrnVhFSoy75JEnq3p1f2zRHcgxU88J7wow9oWD",
  "key8": "5y3abr3w65aLyKiQCKEdo1dh9V1Asq5ccs5TEAaMNST2HTKbWEmW4gafNVdDN1rEKtVDJYtp7yDHzkeWyHi5E1PL",
  "key9": "4aEn7F27TwJoYf56XXhbmGojL5X3v7Ugr6k9rxadeBjKDg9W1TcE3HKgw9zGJrBV5EEwQ7ABXDgWr2PDt2Zv9E2h",
  "key10": "d4y7PjBgw5DMNT5uUdUbsKBsdj3rbBt35BagG29MENBqLpT25qYeHEKSUoh7D3u9fQMq3hpEqRhTJ15gmeXCggq",
  "key11": "EWjFzQzQZenmbsonFEozsg1MtdP1j2MUzk5t2w2tPs6UvgW74JNRN7e3MGo8qfiDNBuBEweNYEnPJFiQpfdWskx",
  "key12": "29fGqzyXFiY6ZhWQP98TGDnbr5jFNTbCJnAnsTYdDaxxvEQM2YzQc6xZ6Kq5uWBi5FsESoc5xjiE6z8sKKMW6gzB",
  "key13": "2grqAV1FWHFE6y4PUJba6vHWRhz5YSzkXWxHFJBnXyqm8jhqXktjaVFbsHsmUecV47cuU9F1AW2mAnSkCyeBL4Um",
  "key14": "2Tp4tEc5kRpU1qMeSBP6hAUoA2mMWBmsGyvaLqZquAUaFz7Bt1ayQ9u2eAxCB3fqAcuazXivvwsyybV3QLnjNzFq",
  "key15": "5kxiSTH6fKN6vLKhXwGwVBbyJcDwR5Uw7ucs7hm4TtrPLs9GRZ4CUSZrGjNCnmfbY1uBPXYaXNUjWNXFtnyvSS3V",
  "key16": "2XVRc28zcCZ6mS3ZbCL5PYbGGavoGh71dDFhYuba68Q3mKmWyn3xtT8BBQ88w3uNNmhSMSC5wLWfEVQVw54q1Rsg",
  "key17": "2oqkqqduALsX2cwFPmnhwTEp3SZ6Z9KsU5vgucH9uFhADJcTHPaWF8iVvNqEcKKDdLEhTv7f7i9YvRnCFDBo8DJg",
  "key18": "4iXTt7N5CS22m4PS3chKBBY32sNvZPZ7vSykzyQjbnqqeFW9ZfH3mfBx53MQPH1tAtPa7M7YBc7A8nEefcHNho5v",
  "key19": "4gxYEeRRoBhvzZNBeKJppxr5mwURf4TkRyu2AHbyGdbaBC5NL9pRPhC9wLJ16nqGNz7kwsMuGdcRfmdBaN4AGpW2",
  "key20": "2iuCEsJtZ771v5DjNnudT9Hqx87TacvsVi4cp92pYAuu1hUDS7mYd8tgzG85SJgYXVywtSg6LRDv7EaVsPFA5k5P",
  "key21": "4CN7kX48ukeEccAP1fxPPJ6CLwtJRsUdP8UePmZ7grFPoXTS8o3mUECCwkJcN7yCF21UAJLmEphtjsmgWv4pFoHz",
  "key22": "ZrTG6h4KSabBBKhdRbQ6KDYUCmnPHbUK9coCcmNoZytPd1U7UCvrM6UQuStBRxs1KA25ornkDVnjZCDzYHPm3ku",
  "key23": "DcaaiurKneneSFUVTa5zyWLbH3Uj28L1eRTyesg6xepgtMQMDJgmXwfVGg3UbWGeBDUxBjy6sKxKp8g1dHsXX4T",
  "key24": "DX16ddrc16Jm3Kyk3FwDeJ7wMbtpQARuE5ViFQtd1Tv6DhJ3fRgvfmp38AqmtX1iAvduzj6KjKT49SQ6X9Kdvqg",
  "key25": "2F9otdEuieZk8zB5izuGwLCW2uz1a89yvbDunt9swzhfvHJtjpt8yRGvNWbJJQuUuJAtKzkqdhWg5bsnv7SdUgKp",
  "key26": "55kA1nnixCG2Le4m4yiXK5fmhZs1fPbPf9PXQU3uWmPXpwDeEZiMA25XnYqzZq5SwWcRC8GnEp4He7duqDxFVvjB",
  "key27": "BNJN2gGwjuuxJ6evPi4vWJdPbJBURuSbiapbNmV1xj2x3yuyNLJwVUseF5RKwaYzsPRoWSHZo1LgioyxKUPpJjg",
  "key28": "4C6kUQFPrjWDzrjcMHZJzYDnDbjrSns7n8xhqtoWTw9oim5WWPGCs9CwwLXitY5JCrJFGB71KmuDWjQP4VjURPma",
  "key29": "TDsmWwMp4AXaCDRkL3khdydZ7nFTygDrTLnCwt1kPaT5U3nDGJ4yNqjcfjdHoNTARF6fHcKVEgX96KBEntjpZLK",
  "key30": "5PuXrQojmYtH7YuXYvDUgtsGj6tuZdug3ikhkPDFVrT7cYYHWBspR3zXABbYWm94r9YzQmPaoLxBgcPWTnvqsNYH",
  "key31": "9M5WGMrRq6zjWBhsiMQoooaZMHXSD9HTdubc96eYR65W1CYW4StzF3QHSP1Se6sfV1T1PEt4gjVMvUSBNu7mCjM",
  "key32": "iXffnjGsFvLjLxSLnsR7D2eQMoecKNRwDxrZnp6ijwHMkXP9GL3geB1qMQKpqtzYeUXGcNwEpLMXxXJ1QeT6446",
  "key33": "41w1FVCp3ssUQoZ2enYbGKYjfsSG6VmeQiJswz37uNvDXw9dGXLNZkvpvCVddy4UAndqdyQSDb8HBa62a8J25y8X",
  "key34": "371RTa4qcPjBg6QefjQv3nm9PQzbQtENU9fawMSC3rt6ai3fPm92Us8NMg68y6Vh7b9MicWYSa5oKctR1Bc93srL",
  "key35": "qHTcWEMcTk3TXFDLMc1A8U3WpiaDqVy7DxSX2pPT5a4iAK8Yn641F6jEJN7pVx1yhUEKPmGX5Dn8SUhbpCBMfdD",
  "key36": "35spWucnAhAVXC4h9hPGqYBKTPVyFwHLj2fk4eegPM1oYh14sYoXptj9aNEmcCeMvJAVfswgEjDXJetpUs1NVKYi",
  "key37": "S8n7Xp2dcdN22hCx1JczzdL1ywVFwPxSUF9BCoEjhFMiTSrtjoZirAR5WGnZhHFPU24vHhKWTQpskPAtyFTbcUk",
  "key38": "N3Njjf6F2Hxvyz5xs75ddgvHa9eTSor9JeQxcxckiPBdSSva5VEBKwE3fiyfqqX22TGeHUqTe4kFR7pQHorBq5G",
  "key39": "E6wwGy448LvfREqakZ3Lc9ScZmezz8jbfKgmoBWyejLGDUeRUZQyLQYiWk9BmfsvZgrqmKEmK2jejX4TR4hHfUu",
  "key40": "2ZUZNKs4BLcr8tfjAJSVjgWLQPoc36vpB5w7wvZGK3gKo2cSNSTZCKG6TMqBTJdEAfr5QymDfy5hyL7T6RdTXum5",
  "key41": "7vDSTJiUdArUWFvuGtBpwEkvyY7psrAPp4Y4yzk2pTJV4kPpuyAiefjjexRQDcc4vDod6dtyQ6vb5qX2VZHn4Yc",
  "key42": "4owsUeAmB7e3HR3Lp7wYo6ztTXid6vZcJWkKrVDR7348GVJTevUQ4y7Fcf2Jhh2cxcV9QDPRf7eVjRVM8s2Dcjj7",
  "key43": "5XLH24mZZyNC3GeSo5T2pQZMq7q4Xsti3yrV1RHLhadz2nTA9e2ueoHrFTFo2Zw7mTXvJzeemEBQ2M7H2bC5zSe4",
  "key44": "3ajG2iuzwBdkujZsLLTK2fQZCdLcPnJk9XEqF7B36mhSUPE6o4jMuSbmUPbFVgQQZV78gt45rM9okamhq6sKXy55",
  "key45": "3Y6bvpj4vkLdq9DagTJ8uJXyn8TnggVSLjnAkVxzQVrVc9mHYEq69DoyZutG8PUFfXG3FPw8i4VUTQ13ziKRb8zt",
  "key46": "4dgy7niW6XZtjjifwoge24RGtLVNFqWuymHCFUAezYmsjm42YBNTVgLvAgeMGwfTZgGmBPZ54EJsBR2kSfKPG49J",
  "key47": "3a2B6EbfWqBpK91cvPMnYPNFeNSxH8FRLYM2jbjG9LGPmbubmRs23NfZQKGKqF6NJyShCoxaEkaC2zkvwxittMGS"
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
