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
    "5Pf6Pi4EqGgX7LjAndTm4sh7ZhBmXQNnyzDgkLNEquMnVT21gNhoJupADKA3Ns3JujLkkqViDHVdsFamiW3NAftN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3USS8Rep4MBtxcJqEJt9bNvmBMsaMrdpN5BbguZLDkUytqxZRZMUxDfpqyz3JQWAQgj5a3HptFTYjCYoX6iuMnvF",
  "key1": "JuCqXATG6Em2g7nsFLbUMrzVLTGqDj7U6Y4No3pFtam5xTxGvzXLW4VCkFmxnhpsZsbtBdFnX21SDHbq8CedNxM",
  "key2": "5jHYfsgGNpWXgNUZipDrFfDLLeKE6g3MkT69up3m21XJgWNHdx19wcF7Z4xMJKWpc7pzDhDDm15z2XYbpMrCLehd",
  "key3": "qLMn66pMin9vffYpD6D8a6Mbovf1zxSz4D7BJZKiPkxpugnzZRJdkoBneDndLYc1pZtNJazy1BJNu5Lu9m2njTt",
  "key4": "4akRwrrc1CGU4jAKYFJ6pV2zNgqqapgUa3DpecT9fk7WTsKMxpBCZa8yjgP2z5j9Gip6joHdURCqGSiy6YGf15q9",
  "key5": "5CeEsAS8qM9XrVQpAwFiAtGyYhkDzYi4EdR6BVkD7FQMzWhbrKCVPWZy94mYLXFDTrccsENxMPNysfTbLhHC2rhT",
  "key6": "5U6UcXsS6F5onGFKakCDDtBk38o5U3sJP3GfpyRzS3vYkbr9VeHhvsggc3fQFdMcW3uRYQaZmApguDvUufJ4tsXs",
  "key7": "2avFMfjeWKqYWvVZMrJ6433cCD1c9sFzGg1XZHesd4xgp7XHve1ptU7GwEGnLvj9J6k94uh8jmqRuoBNGa911QYN",
  "key8": "2e5HokcEv3WcaWXnDcsnWFaF8F7VN2a9A4NjvCB6qQoC3gLeGvnfeUPuwaSam7WPMGU87vPH2pwpQmo6kmSFVP36",
  "key9": "4dD55f8N1GxBFfPa1msvaZeb7edapYFEwjwApavRhycpPcov7uUtgh2587yZ88N652J1hVS9MwXqB5Cq6YLi8Qxw",
  "key10": "54finsjHXBF3M4ZJYSxTaWK8DvvxuuvW5qayq6pvH6WaK7wukLn36Y4tuQfy9cBrdnkVSQw2NznCb4Wx97yj74jA",
  "key11": "3BPaTbTS7Fq2GcN4pHW6sGGR5EYV1VeuAhq6B58qLSjupqdiFLjgTp264BpA1De4nLZmsNumQpgTnNJaVJRBtG7m",
  "key12": "6TUUr9f1Tfk9y4UAX7sqFCVekZUqBrR1fPgrQCohNMLHdPcqSPq4KpfBShUV3XAwWKZJiNbXKofZf6MRUyEA7LP",
  "key13": "LTjXWehv7upXYH1aBLKr4uLV8d5Lu9SwK37f1Y8ZVApV1mYw5uEZ9zBbn2BPijrVVee6xgwuQdzWEjnRZtpbADn",
  "key14": "UGHRE8W2qYbKrAKm7iBbkPNWyjL7Lr5kpuV7bzw1YPPXqTYekYfCbAnxWWDYeQ1syzbxHLCoxNBmwqyTxtjRWv8",
  "key15": "4wc8mi5vnewb7RaU3HKZQZKGDNZ8qXgWe3SzY3Aprvmd1G27NJ4NNY62YjU9eFruEsZ1sYwMu8vhXWTxuoJNf9MX",
  "key16": "XeQ1z8qjhWJTvVwPW7c6g1rdigS1fvv2813jW4d6Tm9QcKyTMzCFryXm47JMUo3aJPXNLVUGY7YLHLd45VRYHVo",
  "key17": "2pPFbvgcfsJWnG3xdA6xMnVtCmtCvYv2ouBiqvdQ88zAnGuAsSavQ3HzHAUhbMmzNDrwcmS61qt5hRQAtgfbh2u7",
  "key18": "4pxf21zPXJTxTrbVS535j3VYZj7mATweBwZh74kgSnTuHn9zZJwiwk615isVZDBQsEVEB89Jbe1JMB1Ui76a86ND",
  "key19": "3k9mM48ez3yYcaydwjp16Y4X8CA9UJpVxwmWcBZnFZejYqqy1wZ5aoHK19Vy7hLz2QAM8K3aNsQgx7gg7z8NgAyJ",
  "key20": "4RasuhuxwrVDKDhJoMu2GtYMNSXGKuivoV2WgqKxzWbw6K4WoidSXcWP1QJXpvfQXj9nerQdeFaTdb86THpmxjxW",
  "key21": "5bsc39cU3MngyVsRF87RKtbsAmEwysJ3YhZJJPtWN57TwhonrMqFNzA1v4LNEUKekxTsnKxrSL1d9vnDcRL8ZmzN",
  "key22": "4Y1wW21meTLeGU1e8ZYM53s8xuRwsH7Nchnst4KundpRc1zRdmLSAWA9ns9nAu16CBEh7UCfgcwa98usbpMs3hAN",
  "key23": "65HxqsSiYMSXhB8PTCprWzpuZ8wTE5c9cC7CFawW8yXsLVeYmL8v343zzsB4A5Farq5KT3rESjCZ3tca8kweR22Y",
  "key24": "4n7bBTLKSkZrcmXPUT2iDt7rdxNCoR4ihsV8FDkbaybYdwrCPKDG7K4Cd8fZGgRs6pA5EwrSMKVroraKHevB6DjJ",
  "key25": "5H86iHtTvNTdp7QcYGxGyxeTth4utmtW3uSFkwE3hsvy8fCJkFsPDv9D78ssVmkH7xgUzrJLidPBC7yoQzJwcnja",
  "key26": "2gtq8MzMYNn1QRwvJQBSvxk6coPHrboz6ceX4xVuyHgwpfExka9iRFtihqYnP1CTkyYYGJtzMAQPGiwEoKGEdNkt",
  "key27": "5UtcxQf1Ak2kUyjmAuCDyqhGPpCQPYMpenDMf7iEnTVZqirL9dzstBmKEPeYhhEzAsApwmQ9bEWZfyDtneveddBX",
  "key28": "5xhJJeaj4NRRXh7uXeLXXTFW3ARkYBo8agpPe9uKLzpRaq4rjzrNAPt6JFsPF8mwMaGmqKDNYWUKdLJiwXBrQyhY",
  "key29": "64NxACzRARaoQ7QVVBTWAZmQsBZyzzeVTJk19ESLeyqB9o5TaKdxngaqVxxnTzAx2NTXYPcF2LM2cN6qZA2bLXYS",
  "key30": "64MxATXujSsmXDMiQ1DYWJ6LCrzdVF98qcfmj7FZLKeQASZaMoqjs2LqKzuD7jvjCWTZBPhyRrtAA533UnJXdHnU",
  "key31": "621kAtFQBomkvvXjwY7rB6qJwPhZpd6HKFDRpYvAaYY4h47KJ9QA2oQHx55SK9dRj7MjjDMGgmrqSVmw2DwzAbCx"
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
