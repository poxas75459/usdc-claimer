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
    "2mpqBDfe7oZVjyA11TNMrfqvpiYhoyTuSCsvVaSsau93qT4haG1MgsPFLYzwoeVTFBbt7oYX2CgoqNkZbpUBXhZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqWjtdyQncWaAek1VaGL9kThghP5t58dEurMEKgZ3YTj1j8L3dn1ATpMcaBtrSF8cNPmgbrgVuXfigufAqe594n",
  "key1": "5ZEKUB9ncNwiQZRV5yy1rAUhzKehySWw7kQTEVhSJ1To9Wf9hidkhFaEgzHt6pnDqYaer4PTNb936FSyS24HiUsm",
  "key2": "KPwJQwmGFvwdMydUC8jWHRk8kczdZ4duLpqGQXvJ2DPUYYVFf7VwuPCQvhk8avPfn3y9L3nawfazk9sGegQF2GC",
  "key3": "3uyXE8b83TR6Z3j2EcntQN6QeoMNvLhLCK1hr1aNobd77ZCPqxseY9PdWJZ2NobRzNHS2GWewE4ehiHq5LNcmUdH",
  "key4": "3pv9tF1VyrybJbpsyqBDKLXuFHyxU2GWJ9QisgrUKyYUZWpKw7wFhj63sJRtyrbyZcmNdTpWXsTua6r14B8n8yKD",
  "key5": "4qeDHuH4zurH19yJnwe5pM5uch5L1EvVbTfixUrPteBF6K92DWhWdgw1bejRW8EogzGQpC6oD51Vpo7wRxtF3qiw",
  "key6": "4vEoLRNGTHH1m3ue1pGcekXDAfXq4YRE5hXqyAqXoZPPDZpwX6P2srFANPSbtihVuNBouwGJ15SBShZnTezq1zYu",
  "key7": "jSeLXEEM41ahhR8pR86z1nMuomx8DReH8wMCru7eR7LfSXJSVgmQSZNFPddieGQUStnehSfoFHdwxor1uXnVJV7",
  "key8": "4MuNdesneKtxxxPk2RG7K2KRzvgzeULfZ3zT6M8cgkwqf8xMe4wRmTQ7FrYbfpisd6Q5JdGPKbhbNA5UuRgxkcuy",
  "key9": "3ywh3VLFJ8GAQoFRmeNrLXn4JjQnKjJrc61G7ReLBAJaTwsvLyLN4FEoHaYwZZr1uyFwKq3ySUJqgHGgTDis9tz6",
  "key10": "udDPQXLQsyS7dYwRnLvKLH5ngdpqYgTKo9GPEj1iNNmMkgHhctRFtF4w7dpg4oSwe9Z7UpQPbmTSRHkzZ4AUo5V",
  "key11": "4ffuXKa8DXCGU9adc8FKFUttYQoPCqm1LfWvzqM9rVt9RUynpdLeg2hgLcdB6T5CHNS8FkgedyGW6KxMxgqdRDLn",
  "key12": "2LFWzHUx7pnENeKNGRCFX415SYS9bsZYfe8pziQnH22yy7wcDKCQZC6r7dhHfjNvWNGzY7bV3RDFW8vYRPHUv3mB",
  "key13": "gJ5MNV1t4xBgooqLkzJTNGBCs1CmBn1mXDBpnUP6m2578nqPY1nQHbTjk2cNrbVQstyyCU5epZMJVH5zhXmCs3e",
  "key14": "52613cGPMVkXJEGbBuLZufhUedUuGMcuomUY29oCHjW3dyoc9c6As4st9gANLA1SMk2eZ8kSB1qd8a4VAprdZq7T",
  "key15": "5ju5N3bSfzdNv69w1p5bnVcQ46urwmXjtzQQBauS2RB2iRhynUKhcyaQxHwEWLttPEYLKEhNR4GRzvTeDziQmwXR",
  "key16": "2rifyR5cWFmam353MB3kXcRHrdiqgaXvAd36c3D1dMKQ5wia9hxAtY7wHnV7dLdWWU9f3MPe9BkMuVyrG9uKVVnb",
  "key17": "4sECs3H7H3Ct2AAnzdQyp8476zsdqApieXEvxYBGmxf4MrviWKg1tQpJWyV23pkwQy6btRQ4toWbKCpRxd2AWBft",
  "key18": "3tzyw1cd6x4mHFFkur9CJc6b1BFZ4S4B5hbNEBe9KkirjiMiidiqCwkPujAd9vkBvbkkEpJjVNxqjcqRtbJ9bDhd",
  "key19": "3xbrBQW5ABYBmoMbVS9BeBTG5d2DAnk9eGsFPXhoZHD7xqEow6e5BSd75VVTK11bTqYXNSdaS44LnvKr2MZba37e",
  "key20": "3BLNBEqVRZqM9nLX1DwqXmZtatyoMzX77K66ksdj2ExyqyegCR4rZcmSxf3225jG1ptPxv7ecPWigzn1rbrzqzdx",
  "key21": "5axHHQqbfkvTTuF3xcBRgnT2CBqKhcptyth8hkhrJStYMQHatcpWVSXTwrvajMmgMUJhuaVEU6ZWcnwF35imPHAJ",
  "key22": "34UJRnAcTW5gfghvaQpAtrNFVr2MKZwDBjwCbHyLcMrqdmKTfJHtiJXEYrLVwkHe9Y6XMTXbNmhKbAPE2ewT2bC2",
  "key23": "2A8gzCg1ucyGYf6puhCmvb8fFvJmk2577MXMDHRgWBzvxcgi85WuibCGuH4n4tqBaffEs4dixegKmFj7YH19kXdV",
  "key24": "42zvoZ55KrvastVFemkDKRXr8HYFBA8nNWvGvoFtRtWgFHKSqVb74wbQZQhv8VEfXFcDMD6vFVyXFtPjGrzqsgQ5",
  "key25": "2GoiAwVMeDvyTc8HkH3ijaPBAE8S64Qwvhxb7jvpdJckwHA2gdjA4PtGxqtwA1F57wFvw6uoFL1YcWEQnwdyszjW",
  "key26": "5vEuwbMAC26mXWuETS5SkjqAVXNvSgyMhFLiqCkjAUQyvjjSdtj9dfz78SpxUKLcYeSH9HiqdRGsyBQfupL21nxN"
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
