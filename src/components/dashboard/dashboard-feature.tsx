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
    "4CZZ9RmXdodPD77wNod3PUv5Y714G2sDoBmjvHxYP2QwCEEARR75UZgGrAmsYf7jFghpcPQtZJXPvGS4xSi27z2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2zHAArWVsKRSNSqvXWyhmYWwMM377oh4viKntsm16r8G9Hk1eCUqhPUbi1HaNzMT653VTP1a3mmx3GCwuC9QBp",
  "key1": "4gk5NcCcoBmwpKxWCiDc42d6XBiT7DwejHGx3c9xa4xA1k6wHFg6TpmX6HnzpGPpg5MwqKLW2hTpvWocvViojmbp",
  "key2": "5LyBdrNQzFdXNQ9a81Kh5NwsKZhKPV3LVXezuz87mPMCZKi2EKEP5pF3pf3Ud1aMEgPvr6XhJwTaL7cPMs1KzDLD",
  "key3": "4LjMzspPCjAGnG4GvcTDxE5vhxJ3rTyVSpYHDKksSJYYP7MuFkM34yKLiBShkx1sLHeQ2EBrTGhxLpbuC3RPsWG6",
  "key4": "4tTCR3ZhZxQ1AhZca98XuhXND9AVsDt8VeTzjdvCFgEYogv7phByRKv2arAumGcQCRhX3nM2JitYzVdr4NEnZNh2",
  "key5": "4hgqRhn9RLPuu7afCPkv2164eAVobZ62CsG2P6xv8SwS3Wo2ayyzQYZsAaWnu9HadF2koufhqPN5orMJjezthDpx",
  "key6": "4i8EfTvXAPFqwsHstmqrALvCsMbydGkuy4rqcA6S2BAzBP2zYXHbz53UoEhFmaAzArXbEea6jL6VeFuizhpEtU7D",
  "key7": "5czMmhHiwVbSVmfFHTzcrDnNsdB7kMvubKdWjKozijVnizxGtUZX9zL5aCnPQgMD7CMRy5dsVNab181KHvXybzpi",
  "key8": "wUubj3EBmkWXUyDo5UPJczNUgFX4zL5ivPncvh1wWXJVUKMXc6Ep8wwxN9dtFrUneC454JCCUiuA7wfj1Xf5sZ6",
  "key9": "46Rcee2r8XXnCU165y8ERC8h9WedKdHCvwMXTKz9YfrdjXwizY3SA8UXBschKL39NNrsGe5L9zHRYaLKPiJx8Gsj",
  "key10": "3x8tkJ3kP8HdxT8UCxrSkkx3uiS9dyvf2xQQTnXJLd1xZX2HdV7CySnGybYMcwtmV5qg9KXzp5rWgPyGqzLAR9Ur",
  "key11": "2Hhbnq1aAyi8pViUF76w2yTZKdc9bMBCVUtpoZ4AnNpMG7Ro1PuzgVJwsypsDAPM87wUsycdKkcjquy8F4JbgCkM",
  "key12": "3GfJL6i83xx9PadrCS1ACmDrcgzqzRomva5XR6uN7oe47YVpVPsuwzUqzGFNghtfapuvznrRvroH1NDv9s6TT3cB",
  "key13": "5akb2Fdg8m2HEnv3PfxP4Mr9NapMZSofWqhFW2e57HXzbEzia38b124ZrohQxtfMqPJxm2d9wJwcFjrbhmiTeACE",
  "key14": "Quz4eSpmqHjC2cAbekAYtNm9H6MmqJMm7BuhSC3S6T2JfxjePSbmkJvUiRtcxXyfLfyarD4VMQzLmx11BpHyPem",
  "key15": "2y3sd56yqqkLBwCYRfpyQD6bQxN4iL27RDYr1s1APLjTdyGyhi6hwc3Rh2nFoSmg85CqEzm9o5Jg1k9UAypyRJNT",
  "key16": "243DDnEgXVbhtbsJDiYqYadK3RaqWvBAbBisei93wqhZt1ZnZhKhNcCoSM6T9gYSMhYGgofRcRkUR313DidzD1fN",
  "key17": "4yvMZzxhwfs1mFY8FZd9TtfKMewvkbMhtnT1SsrK2xiP39EBmaPf6b8hLkU1sdJgy8FonrL1Vqv9c8U8LikWLjwK",
  "key18": "4bADKijYpoB3nZeLk7Jj6Xtco8LCitRptmun6SDVnauD8xQwRujR6cM3EUaDiVq86PCASA2vdv6E5AaLUFbBiDta",
  "key19": "2syjkoGrtAS2UuZm2AFAnpafwmEw7X7SjG2vxGnPCpYJyDTvaQbwdyhLRisULjpmihpJfvSkPTV7U81bWVCLz89D",
  "key20": "2Su7MG3DTjj5ZKyGxPbmkkdu57aPh9sRzFjci9DCsG2GGM2MuiCFw6aLNfsLPJe3jyuoKNZHKCMfdTLijhehQVZn",
  "key21": "3zDcLTpuoy5uHWT7VRVZRKtqANv92x192dGWgexpF4xLRcQmVkYWNJEz5YrMDc98CRVyeiyAtbi37C9gZCP9LWbS",
  "key22": "3mGQpN8Muo4ZGdN3NBN6sb4gxiQRUsLXvLoFUa4WLTc77n9TGoSt8XMvHzfSxCow1qVzKwyYGby7mPF2qX7us9F7",
  "key23": "3fYUoWhhVffhiQBDX4Wpuh19os5bx6NGETcUKL54FJUp2rpS9xrHUG7EhWFGuChxvFHDPZEFeyXuEx8tSJvYxcnh",
  "key24": "3RKaSGZdkksLQ2SmD9KX7ZLxAFUYnE5pVrEVvA8ZxbTaWj2R1c2kGTH9noBNFZ2XpioP7prhg9L5TVvU8DKn8say",
  "key25": "3rP4kBcFAeJRS7wEEm62VekAcrG1ks2fZZP6enESufyFkUTw48ZPtmgj2VJdb85HbM5n7Xeqck8R79uni2mQ4h31",
  "key26": "5A3bwMDNyf5m9H9b8oeHPZpZeUr4pgUNCXZq5kkavHHispgyKfTjSTbpMPaabNs9USMd2xFVJH2xPSRL5pdvTbjY",
  "key27": "5zVAA4FETmWWacrazhXMtipf4gLbsfcKHxrAswvEVRxZdcFXspqhDP123WiYCBR4vweMyQCgzQuanusJZjE2BjuM",
  "key28": "2RRqBKSxTKPhautAAC2C8udeNmzahVjbxRS4SxGrNf126ruo41hHH4apuM9rhrLJwxi2jAVyfuJGjWMTsx36wtjn"
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
