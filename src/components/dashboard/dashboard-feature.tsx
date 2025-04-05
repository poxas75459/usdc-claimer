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
    "TQKJPYbhM4fiGCUgcT1aSrxMkvUKdgcfq9utwkMGX1SmqXBWnCZZLzZ9A3xhEmT2cPkVKdEJsJ4xNNLQWUBLoJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFQZY22v6dQe3CiqCfMae1KCNFBuvu3qQ8Akd8oYMfzuUh5Gk5c7o66Qc5LLUD8cbSEibbLpcPesJsTrUGDN3Jj",
  "key1": "3uZm3gG4b1Fpgto6T6ws59QqdEFGxLQFJhbZi6fth6TXojxB6TB3krfjBns1WqhWpZPshDWCYNswkCEB6aZx6tbp",
  "key2": "2fUxWpjGryJBQY7DyhmvKyBF1tTdASyAKYuuVaZGaWgAuVEM3QWoBGXxzqGHv4bbFjrUfpLjabws1DJ2yajK7oVx",
  "key3": "5Zzae4q7GLyLYd7PPatfPSsQEGgtHPgn5fBH8PPiqRJubvwjjsiryND23z57gUAgtT3ABC1QhTCP4jRLQjarzVj",
  "key4": "3eDhLKpgxP5wdHX8APJxrRzGGwEgLUncrYHecW2wQNN1QysHYWGnA7fJutoQUWxkHNmbUBiK2Ug1joBf8XNxvb5H",
  "key5": "3EteT6BbeKc7QRsuWHBGcP4pqpVmpFJm63xf9i3ZHGigsr9nMMG6XxBsrmrSkye5CFpgyumk75GsBPdmQX5RHfDd",
  "key6": "rAQKgFrMFGaDobtLd1KUjbYJ9rzv5MysGL9DgPPe85RNbAdjNoqEurhvVuEesw1AjZSthojFMhkuzzjRx57Hqew",
  "key7": "3bXQpx3NXW9G4jDH3ovsCYeYC5z3SsaHyhchJtBJjLawG53h5ZrDmQdj17iUBqvFMcHy1rnGf6KGP28h7gRdHY8Z",
  "key8": "4iPyzoEUk9mDtw2dzneZDsnPr1Q1As9rc97gQsqnKo4rEyk9setMhc1LP9FR1yQzYbUGRufXHQHzTL2p9BFCqNM8",
  "key9": "5dvepwTBBcfhCKgdFcXETkcbe87YM5S88KzgRrUKepAiBGFQSEoCi47EvidHVFLTD73HRsnTbkpzNvZhE7Eg9n7L",
  "key10": "5p1JshshYef4A5MhPegUtFSSXuUB6Ntp4rqbARVHiGyyaNEZ29QbF37vUDTst49aezf14ZJPzHNxX3dRVWCeCjLG",
  "key11": "3W8Vq4NsyTKy3nzWLLNHS5pEwnQuf2LF44i7qq59KSB6yvNWitDTQY4WxJBy8ryXsV3DhzjrMeQPrG3M6QusXgv1",
  "key12": "5HMnLXvBn2Uux4BNozboqoQXLEwBimu8PNtVxCcEWU3bJYFZ1Br3jeBhSpJB84a4ja8v9KJFxGspkN1RKwft9ZGR",
  "key13": "5hEUTkfQCmvfkR34hetENwMMamdk3VCLtWfWHLJ7k4emccedKuvEUi3akYtsGCmKA2bun4fB5zq74Pd8s5q88j9C",
  "key14": "2zNe6F7cCD91wyprujYLAFHfRTd7XbDEtn2MGsTboNd41dsmVRkY7mxnkvNd4KraoXkTmc5Jvg5Fr9seRymShyxr",
  "key15": "2nf9LM6S6ErPCWYH7k4qy3hTzMtRSmrEHzmh4MMrerN8HVYigF3PxhHiDKXq27gpFZW46DrqQoFQUYmgqcMSDLPu",
  "key16": "3Dje4gsenLFH6JjoXvrNF6dwqRVFLA6kMpNGShY1KE6SzNfgJYQkVknRm7qiXf2g1jDodKFkY1xGRWm1zCjLAuYg",
  "key17": "bJ73HzzMASwK7vvFuwu1Grw5FSHzN52YsJ3NaTYtkAiuzDcN7atGC1RcEbPWEpQfbiP5c7RHkLEUzVUG26vfnpL",
  "key18": "GNvtmbXmaC1TzggauYG1Lgrx3kVtjK3QoHJB5VA4ajZUbYzQXif4BRyrgXycp4faYC6xWDP58FUPfMcDDrQauw9",
  "key19": "5q3m4Rp9zwwvPvYN5YuREhhdgjWrLNgJje5nHT4uNxmNXZit4N9xo15AWNRTN2kDCLuxcr2zp16zqxs5upBmvxcq",
  "key20": "5je3mXqHzdsKHraFLcgnyE782tchmP7KQ3mEkpHCKRaGXoguVDk8sejqXHrhF9GQ9KVDbjWzEX5tXLRQgaHH5zLJ",
  "key21": "WLuANaBVVkYGS98nmbf1cujs44k5RWMys6AEemmbzWCqcDSyEyDAXR9BQHhXmoFieXGTYEnzhvx6a9mfsyCKAgi",
  "key22": "3DgeSUy9icZRPBGJr1F4VXv3ufuc17eVT3QZPKCCeYRk7FoChBGPvFLFqdJmRe5qaSN8KrQyrJ5TjgGHznMWDZDb",
  "key23": "2oMgjkWchtNf3zFQ4qEYTA5aB6E5MGBMKBbSDKwbf1VJKrhuA2E8H5ZU9vo2Zi5ZrStvjcE4uxYGqezo2ay9vFzs",
  "key24": "4EDC33PjrAaHwqWfA2267fLVpN4DkTBUNzPBvx6FTaAzBwVvHAy6thXYoKPs1698Ba1nviXtAinoiagHFrf3H5AK",
  "key25": "3oi9ytqEdYRGjS57B2BdxwGbBN8xehSf3PHjYvaxaiRw4qRE1ENFHbb9cCE9Ke6Y9xJGRvDyC7iPxK3knybssYTZ",
  "key26": "53xQAZeexbi6TLzQi7TFYJ3fwkx81KYntoCP9M5enF8e1e2vN8UjrGPe4amRoJHk41pS8rAYs45zsLYcwU6mF3mJ",
  "key27": "3KsWHtcSXaxbhS4oHj9wV8EbC4wrBW2bpBFaPsECkQFzAYL1bxRTFHVMFvyoJdi85AHJGeq1X24JPHp1uGpqT9Qz",
  "key28": "43rZbBy7fpfxKoAHBSNPo1DueC8HyBxPi8StwARzJAoyRimrbXViyDM3pjAAxDwz87Nk9gtRHJ5iaPv28vCuRTiV",
  "key29": "3nKKMSGxsHdnEXYVaULn7igLPzjo3CfWMfsGHA5RDhUrMsJvmJKdqHFnfKLRNbVigz7RRWB1GxUAaobxPHw2UgwM",
  "key30": "3Q611HMgZkS4i1Sa7vBY76otPeV94Ggxz3smrJWKoT6qBNs3C4m3R59aiCHeRfuGanJyn75t2y71Uhxk3FhZmb5G",
  "key31": "3pYe54uWzmsromNAud5ZgFj4LVKFncXtQoDJS7EWo1MvHUpNeWYdLfzPu4dtj6kSxZhKKzjduPcL15LLXqRkPB7v",
  "key32": "3TUvEYQkY2X81PRf7JWeCTRT1R1SBbLF4hGbMHFh83PkrW75aVVLTvwvCB8PZA7eXrosXdFQH7zYK4U6cvcg5dEp",
  "key33": "2z21Jxjk8GaqiTJW1Yv24piyiABync5q6hM5ugnXz7qgNBPt17Yq5YQSFY5Zkz2bhrAC3syTzmDkhYtm4q15dDfg",
  "key34": "4GdxM9PTS5W7yE5kS8TZzesEdgeGmPSxGLF6jYT1Ku3f3F6V6cuUE2FHtHBYUo6oCmzK1tQNBgSewjqJ767ZLF8V",
  "key35": "3ynqNAdrhsAqsbF3HsDoZhSZ1QXDYxn1Y7y3evEj1Qzbyr7Nh2JajSU2iGncnYJLUNFYKkymaszdmnH7pBnmuqpH",
  "key36": "5UFzLcAj9zyduGP7a65EpgquFBvDipGCjM9q5FKprRFkFM1t5oN95GbxxFRn6WmF5ParpuH2N7TNuT8RMLdLLBay",
  "key37": "2B7SY4cnSZJsrL52MqLYtdeNnVv5yBbCj7r6bWrabbo6r9MYzbsjfQajxgUhieR8kvPRmbG4qJgFDndVtV4aupMG",
  "key38": "3DnQ1teN8QCUNPBrwCJNtowSbavCvQHgSXhFk5uXDSJaf8WcyYCJQs1xvpbeQk2aPSw5zJuSLGyJotcHgGqTCWte",
  "key39": "5We2gV7gSjkGGPvTcKd8mr3tkXkMWD22BgGQ3pKa1eXMkt1D6MoZNicnRnkM8uj5E8m7Lh991bvU5vHDZgxCQ7tv",
  "key40": "4mUSjJHxxVaKox1i5wgDtzmnbirVrAC6ykiSkSVPhXyWfJTZe3vveiBgfRbtcyRdZxSHbJdMJbuL8tgSjwSry1tg"
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
