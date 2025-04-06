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
    "4dmKPM7kNEv8CUAeMuyrmL6TmBiXtuGzptDwHMwnAMExmhiyxP3dcUs38A4t2gHeBWDzNbv684RPjSLZKQJjwvG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQDnwnz5neem6RXmBATioBghUmLpYsxRLpQDEN8rBqzMZgTvP6ACeMddcPcXdwM3MqcbVcHTHX2tcmEN5di5eXd",
  "key1": "8UJp3mhHjs6gbeBEV8UXCcA4ZEimG3M7FRgeLhE7Qh2iu5gYiegRkreh1RFep2PidvPGKw8KvAfRuykh1kJWk3z",
  "key2": "3rSd6v1Pop36DaE1PwpRBvxqGB1ctfpwzGs5A9ZjV5MwPTfkvmKfwHHuHp9Dp5rsQqNJGgekqny1EZtpsAMCzS9C",
  "key3": "4ksbuCM2bgo7FRiRCoM9db47G914mVmfrJRPrfXsTPtNe3WSgjpypPmhhjCh2oSY5kEwLk5CRbtiTxXG45cUxuio",
  "key4": "Je1copmDCxoKKJCThcXtNHahTt9mcRShXczGZ6Dv6XTKj36qC5ar4QaxSHWXK6KJD49vTqHzBCnftT994xfViXe",
  "key5": "2BvQwZaem9Jtubxq73PdniM4m7PK58KQApk74FLzpLJGCCK4ydr1APKdt8ebHBdKuf5TQiQZb37jeTgxhiqvFiAD",
  "key6": "3G435Cb1fcYQATYa9UXhmL1LuQV1ZsAGdZ612nuXujsxUZutz18CXcELkhARevH81hGb9B3RSfK79wdT1YEodBBu",
  "key7": "4aULF2jRaxN8MAbrgqRQ8jeTJxzWzjaTWuM7MorgGnLmA8H7NiRrRBtUXTJ99nCP3DSGaLgLhtDatvJkkK9sd4Z2",
  "key8": "5kTtEZoqvdgfuB7vbNAafs6FKDvWPtonqJ4x78MZZeJF2KjrN5ySDjHgL7qZvoGzzphdM7ztBLXXwJy5TfFq7yUQ",
  "key9": "LDJPDfo4NYyPu2sTzBypcvxHQ9vhmPmraaXLh7nq5pk2TGT76zmwHzp98iBWn4BLAX8QmMVCQjLy1cVmjjKhKk5",
  "key10": "B8ffoW88jS1EeqF7PbEstqzfB46n3y6JioiJWWHtWLnEPRhr1UJLMTxjE73baPQMwNX8PknoAZn5ViTmPhEVuuH",
  "key11": "tFHMiwuiLTXqwexuNncPerqpvLibRsdJK26UcNDEthhH9XL4VSKCgK4uCcPjKshFsQrdLaZUf3EPaNuJcopggCn",
  "key12": "3ECUY1U7VJsG5AuTFbCN5U7LCvCgAthH9vxJ7Hs3JgunA9ng95qWSrbVz3zk14h5TBcCgL3KacdKPupcSfLgf2Qx",
  "key13": "2rawHEEhpFqwAvV2Vi8fcmye47EbayZMs8h4FQEu747yQtqcdySSE7a4WVrqNhjn5TxAq4BjogUAs94hkE437UTm",
  "key14": "d1N6GgVZgN1ugSEbzaMCJ8GkpviG8MBwQwkW6hSPcRcAooHCs9Cu1ZDNzKtZQ96aqaaDADSZZGqR16gdG1oUprb",
  "key15": "5LTPE6d1G8D3LBK9Acr4qasuiFWoPFXudyXqWnsDgxCtabFGLpscHEiMyaYYRSQJDtjxKgLEWeCqM1AVJrWHK3zh",
  "key16": "2UQyZpsRjXtSYp1R5aubuCvcENsnc6hJYKtytrxD25FjVh6W3TqR35iPxsVYg6aUsKxGFFidfpw5skQnKSE4smP7",
  "key17": "5TAVGr9gPzBEduj6GmptJ4Asc5CfJ5N9qC6E1mFniC9HAPhRDEU12zhkeGV5HbGR6DLdJiFPw2u8veWL7g2JUNns",
  "key18": "2FwRTfuYBCAXFoUw5hd9QMm3nEkT4nRfz4YTGW13BNMdq6VvwyrsDHtWnTvn5eu8juPXtWPzaHXUD4pmWQeihSyQ",
  "key19": "56PhF5KKBh4Y45NvNRyFktR2g4uFcxSXHMjqMeSfXMEBnsKo1AyBZ9jy5mBvreESfpUvtzymkcKPGKMcFC943Dai",
  "key20": "4EVYNAD5PukCWDDqo2oxWBvSKE7bn5iL4nPczSZgSduqqay5se2yWTBybqdv15V6eQEKQBpAfr1Aa5VkMzHGQzxG",
  "key21": "3UMZC6atdfwBj39HZCwctofSwjEw9gEbBiEWHgUsvJ3zEGXgNcokbMtVt9c6kkHNKbpBm8Usq6AK3JpCUxM9m3MT",
  "key22": "3bFEQLhuaLpoch8g1VaBKsLvLuyhhUKRiPnj6xD5Z6XwGp9R5ceLvY7vtHbcj5oDz4aNKMae4BoetzA2dG2GHjrF",
  "key23": "cJ9TyfGwcfHxPAAXUMoLrr55Jra4zcBRZ1fR7UXheGbbgHjUmFPJpmoh1wbYRorBRSoREjAmeb8qic7JyFnx6Av",
  "key24": "33uRrpvQzRPZx7hYLEvs7xawgJzjZSD4UtgHeMPhnpF5SPMJFtbKXtyPPusTFoXGHmC94mwex7Lo9wVBCbEUXqtu",
  "key25": "2NavVJG5Dn7NDx7URzj7KZQLdA7vVe1j25AYyi4LpikeST3wJdhXjcFsRYEKbCjAF26hTnBg9Mj8X8Zh7CZRRdds",
  "key26": "5x2eRj7zQMoW5XFqaMPx9M3eSV4GNESU5qo7wEstBDkCZoRCnWoFHBCvJE4sK6MYEKa5vJ2Ra1P8KW5ToKsCy958",
  "key27": "5K7fD8T66TuKbGyXwv2NgrVLdkHpacCzvWKid9zR73QJ8G7AMYZuE8QjZqdQEWKSG1DtJvgeUGLHVpc3Rh91Zjdt",
  "key28": "FRxLHY5bPNSt4G1vkrgAZnqtTEzfw4xyhhMiGw6crL88qGsPugGpSJ6PdJZfRMohWvSw2NXrwpok9tAvyNUSqtL",
  "key29": "4giTJL6MHERVcPqgV2x9urbKdv9UySBYRY8n83SLRBGQTfXM3tYqCvA4p8f86E9pZG7gUEgu7nz4cxgukCFmBQpq",
  "key30": "5gpsz33JWJ9vKtYBbVJQYFE6QC3uNZRykhX7hMnbPCUnZ4ykFRBcMFEEqpz5wuQRHJa2wYycgLMRiihuzij2nP9K",
  "key31": "3fKDRRL24q7ZdiQewkrk67y415xSpFmrRjieE82wzsyXj2K7PtSxAyfrT69KWAWXZ9GpPDmxr3itYkuh2ipRn6MH",
  "key32": "3HDFnoQk45FDN3XtPPutgRPqa8HtzysPhAzoMZrfgFh7ZVTMW11Hvyetjcd5iBQEaMi8X3Rx2fKReLPd5unowmUN",
  "key33": "2d5ufQwpCpu638hpA1wPCcizAZv5fmoHGYzk3fekALnx5cDJ9YUB8MwRqMXw5Bt1AarF4tBB993PFWDKQv2WgJeK",
  "key34": "2ZSCikW74jSdeaHUSJDmD6uE6wagqtdkmVgad5MthRrwn1v26V7KArvjwueYx74AyJfwgd7zdZqGVwwXpb8pbsEW",
  "key35": "2Gm29wzaqDEjkfLfcnLodrW3aUK9A1zcGFNnwgagfJ1yds3RVEYHEDAhnsKtQcNrQpsSuU38SKApmaXSa2LbnPkz",
  "key36": "3KdT9qCbtgEfDQXAJzGuD14XKHfMtgSFWNjvJCPdog11rQomUkrbbk5svNxb9T5MBEcfBaLkMaEv9aSEwBTuKXCj",
  "key37": "4bE2vwPNbgag8TvBAusz1oHBgzdXYG7LXNvHKoKJhDqTTvDRvMzCujuaBED3ycy2TxbkmvodeQYoTF5FM7HqqXmT",
  "key38": "q71BAqg1skWqjLKq2kQHq9BmGAWEVNL8hgpKQ1FBkuePwKQiGTUP6SECZXAnEcPFFWMZbN6zR3yMpN5aH2CQVWL",
  "key39": "5g5kFnkyYv5pqLT3BMGZAgGdPXD5bAVwF19XATruEkJFgJaDbMBbbQz7y7TE3PVK3KLqhwVWDdehQdYfDjs9nngm",
  "key40": "4uhpGWEPfUYNPWLNh8CW7bmbY7ohpxo4iZxgt6VzrL7HXVFCqVWGK87zTd8NKa2a9rSWRwdkaTrsGTdU3kcsnKEt",
  "key41": "Goj6tg3sPTbTqyEitbRJWhmqbMLcPPd2dXhgAi6uLhmf2qou43fiF8tBTz8MRj62wA4fm3coHhKV6R1DbfaeNwv",
  "key42": "3EtV2M6E6xVt67ocQdSsRYjDz8DpSmXXi5AxvXUArfnohRQ81QaqZKPPahLHfb1338jKX2qE7Q3Db2nWqRxuAGKj",
  "key43": "4aWYtsBhGD1c6SvZCUK9QKup2Xshx5weTMRBFkSN7jTeE39oncKGASWe1n2BmxXBDXE3vZYM6TvmCcA7iKfWiWfG",
  "key44": "33CsEZHcw3R4pcQ7yno9zwimerEhCLsGSuPEFg2VXw2Naf8LzjyLxERj7zX6S9vbpersD2L4NznxvzrJUKgfHmCd",
  "key45": "3NDBYqGXsBWA3u2FQGvbMq4jiXNUFNdhQAZGuPaHcFdCGwEhkcFDhrbmNHwNGMGFcjrnE3h9GEhvoCdTkdask96Z"
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
