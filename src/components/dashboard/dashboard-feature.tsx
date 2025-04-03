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
    "5mdPuXiwiHeGPgTaUGFR1rL94FiVHYaAQPBsZVwAecuAMJDrtU9KzPJR2QwTCjwMZk6kwpDQfuFph2ippyR1egFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtmRhpGV8AZvJd7WqPGZMs9GJhXHUsmLAvHk8Tm8HeZGrqe9Fg1rTnJdBToDiGhjd46x93VqukYcZQpve9eiL7W",
  "key1": "64JuQde43mDiMHwxUfWTU7tY4gfUGorG8DTwVKTR6eSwkpYdMeGt9feP7VFh6NZpExkT8JNrC8Cs21UmVkdnWG9s",
  "key2": "obJDqiRHM6ZahWvNBn8cbqJGcR84jwev3kz818FhTUsGc5MRNSzD7WKSvX7GR2CgMNX15ULfxZ6w7dYUkqXhiSd",
  "key3": "4J2qsAojJQfGa5ok4FcxPxZ2RgewHs9xdgeCK5qCfW1ZbK5pTXTaAa6mzWDNReaSezkba8gyntY6bqiqoPhmmDFa",
  "key4": "oFcKgviDsHRhizBUBQDZrfLoWrKYTw29yA4FjzjPe5JFJ6EAimCUwRVYxgx4fCZDbFWUduLoG4JdPCWNdGrzuxm",
  "key5": "5qPoztLe2sRse8mGhXrMZX8vH5fNYpUKKgakgXJJiUXUv5srNaZ1JWoVYSgsrtt8kC91UpMmevJKpnHXcTgds8ck",
  "key6": "nRz4xvevbyDoeGBG9VLv7Ea6LRCpqEWq7JMFcmQpRt3urp7MBfb7rioqFBa2BtMU9UVivj8pWWJmU1oehVzBywT",
  "key7": "4vrFFDdbbVGf4D5X3WLQLqTHYE71VKBcVY6HsYEW34GeFT49daRPxDzxCEUFtqx3Xoc7SdAEp2PYnzbvUZXDqoMQ",
  "key8": "5jojRUdx68bPGcq6y7oM65nxE3xPxD5eKfsSePqrfeiobetFgd9ktknaMpkFVegdqo9MtAGtCgLcmyVK3stRKHHn",
  "key9": "nmNnWh442zmbxWCXmRSNq5quJV4B6RtFVJg7Csg3q5eokKfWgsNzfPrXz27TbqVCD2Nn2DtNcBmfUR43LqpjLS3",
  "key10": "X7JPk8H4o5i54GQpDtvDEQwU6UBxtW7VmgczPnrGPWJREw4gXXhFLTn4CMKkAwmSHGqFz6GsVbRyx6GyhYquCDs",
  "key11": "2Gi89GxfPJA1oBx3pwoot1qMpxWsH8jL7k91coQntswyC46vFhX233Hjo5iRcNg9fpycHsvMfYC1mfocEjWjqoUR",
  "key12": "2HGKyWY8kFpev4458N5uCMU9CL59GMUQDVRGTjoNEnrukUxTqU7qDEdtgJBFfqraogTbspyuJEH3YuyWeqaSiLMK",
  "key13": "h4VqcTmjPTCffVpxqdzhNh5xckEd3k9zHEMYC1ggDVgHhDrTMGex8FDVZWKWx7D4MsFnGGyfN1Ce87xLTXwJCRV",
  "key14": "8fdG9VBSq3xZMXR4pvAHxsA6bt88jpc7eW8KeT7fRYhW2MVYkvLzjJiNVGdXZseZA8rc3s5wgR1Jjmd2UF27SaD",
  "key15": "3pzsMFBawKojGjqXuBtpZ5Pn3CfzP98e3T2a7miUY1ncBaGgfcTQUYcz6BHAtAoTJe42XGFPjw18dCxMG4bBkR1y",
  "key16": "5YC8R4uknR8EeXULHKq7dk3AJXL5ymvgXvDtGy4kyVc4Kp3ANBFbLnNTQk9WHYB4JsMvv2rBE991136PBAwHjCFo",
  "key17": "U4UXZXPXDwGWNMVQfuvzTDr2UQ3AVzHMq4Kd7sRv4c9iLFHPVw17iuQwN6ukPABQ63jynznu9LhttSbwbs3ND9P",
  "key18": "rzQehB8R5eNg1U78z4ArGrGkPAcGu7kH2ShNZg1hPJf2txHsx4z4fVZXzUNvk637yLHRtduMQU78BR1UZQMvmem",
  "key19": "5sgmGPtCkVBVSZ8AL1M2AVQEByGc3AmRP9ReDUgD1S17c2rvmy3cCMNFPWyAsxsF5A22MAwu74pu74Jjouypbfia",
  "key20": "2cKNb3qu6wJuh5wVuT3NQy6yVRNeLsz3wfPtPBt3gG8yd8iMegTza6p9fZpqCf7ujKzB3gGu1xnnLjJGMiKKhgLS",
  "key21": "2QP17sAnqDWzXmPeJEBdKeqsz53hUsxKdEgjEDS7ivDWqNQCh3e3wYRrbqKic7Hm6yF4D85bzU5kFkDCRu6QcqHS",
  "key22": "4YDQSkTj7i99rPYm56yHtjfj85kSo73pgSYHhHE8dpiPoDttcN8iB6AZQRmzZyXTShS5AtP6Nt89mocqnCLPw2we",
  "key23": "282k7x2Fb8da2Rcovxd99jEwWyctioas1zbwgr9KcbvxFyxRdmhGVkVUoFckZYp6J5iqmRxxeJTCc9uszCGtqaMm",
  "key24": "L9KGySnXiphrHmTuvdjxEQv16UQYPrSQ7oVEBKd21Bv9Thhqi58ECHZgB5288ePs77CSDHmawqgvoLhJbtPZqq4",
  "key25": "4oGvUGd2CrjBCDdHBXosoLqm61UxARpMzRQ9wf9URRN3ruNy7VoJoNUygRQ5YfsXVpjoAGAHy63myjoz4jDS4Hrj",
  "key26": "eudSwtK4d5wwDXrtb9mcuMZVkHq9eP9wehmiXSfALyESJJ3HAEDcf93DvMNcTXN6PcZEGaLoe9Yet6f3MtXELFF",
  "key27": "5QsZS2qVLN2GHcWLSbZowRta1yADoEh2fcw4fSL6nGALEsWAhYNvFobuaM2gBsR7iyAGxzwptK889aMyiyGiGBiY",
  "key28": "2ARKYE2LyU27kek9MvkWgPcr6iwB1PgzE8cM9HbW7TEByYz3F7CBpFB1hoQBGmBhAj8CVKRh1agaayzF4d879KCD",
  "key29": "oZrnfa2XzaWjW6B6LUSzQa8D2A9WYtuCGPF4WBm1xefL6N9tPM48j7dLctzxCzyLYmPA9v2vMWFoVodoaHBj3Yu",
  "key30": "YtrWY9C3WBx8azKKJELcbgJpFnJT52VHVECyefb92GN4teztvqZ3o7iCHxiuWgVMMnUBFQCkXP2eM9R5kkBZFWo",
  "key31": "2X6L3dfZaaYFNG9yAUqrXKFSx7ueoxGcuSLnRPtefg4ZmeF1ga8Gp4HAevgqUA9QZ4BPgJuyioHLMcDd4ziun62q",
  "key32": "2s7SvKZDJtdv9dhc1dPFj5hLyeHc5kafrHMqHJmryJVY8KVnHWfnNJjK8vqxLVufiqkrtsg3ji6KsckYbn1DBeMj",
  "key33": "Dkov7C4AxJhU8Wt8CHYjciHNsSYBb8hTUY5CJJgpPriJNWMHSnF9Cts1Xx9CBBsB5KrxpHA3qLugLWrodQ7qrML",
  "key34": "sRrtE31uHhDLqdaqsZXHeuV1gb7kKBXxc548S5BnM1cgCLqsnsyrfsvuGDAtCH93njQyYUQkkFmS82HoyabQDi1"
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
