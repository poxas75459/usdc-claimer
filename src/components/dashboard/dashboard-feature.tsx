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
    "h73XpTNotRkfvTuw1wyB73Z9P9GuYh74BNXs1t6UUZ7KggvYseM5ch3kW91iBJ7cW9DKsC4zV6Hrbz7YmwHuFLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5re2vqDYcaf34uKkSm5ygpvENe3Qiw1hd1JEHzPWoxkdfJubmhyYVaB4kb9jfwuxmmztbHrEYC5jehuVakP4q7eh",
  "key1": "2AJyUaefrbZLVP5PPvgqjPVXxwFjuo3so87yrP54SzYhEpnGbUSSzYA9VG2DWGcFa1k1FdgEU2Fe5NFAJK7oWPGc",
  "key2": "3UCTnmtxgtGU2tqAAYthrWSV2DYGZ1aZJdKkym5qEiViWSMFNxnz9xET7Z3mjS6SnFvzvLL1JF65fCyQrne9soJc",
  "key3": "5U9qTA194jifcohZE5u8CFPhSveqpB3jEZpjyK46cNJio1d1SYCe822Gma9h4ytyd37iMAEYFS1C3PVb7kGCLX3V",
  "key4": "JXDSxaNyGYHH1ckzRu3hbgZXTbdH1dm1YUPy5bJhUar6zJKRQreyVXfz4RhTYSvH7QztcH3ejPu3TNjNJ56TscL",
  "key5": "3wf5VCvu1P7Cb6Dkwo7WPr3y1BgNWhN6TQHbuBzLmHXWKAotJrVhyt8wsymx1XzUSWgitEtECcgr7HYx4zu6XMce",
  "key6": "3Vby6xZFiJV6F8YhbYPZhb86HGSCSMEALwEvRF6ZBz8xuMAxpNWqqiX7AD44xhRH2MT4VbzAUyN4YkG5fv1dxNTE",
  "key7": "3rTDxWBL4bunU7riikP5TQMhzmvN5qtZdGDfnxHqgKLuTxfpgXvkdpDQ3D7cS5kcBamjit3qe4r4BpPHS1dufTXu",
  "key8": "5k719WNuw5uf2NRBpWj9co1gdogSHQYpgJPrEFHc2cUcMusefSuywQDxL2i82S8KubMVt14QwfRuw823xgP4z8E4",
  "key9": "4k6nS2iUHovW7rkRYjeRPMrZ2TKbySGK2LAWw1xYRmW2cYW4bKSV2xW7YbXuGAuihgd2TWarBK6tcu1XUNejMTTG",
  "key10": "47s3mFQaVghmQT8bdQ1CRZiM3AfW4dDaBbGpcCSsixydQYoE1VzMuwhTgviruHSsg9XCK5rtfJVAtzgtJ3ZJEdbd",
  "key11": "24VapCKab11ZprbJVcpAEwB3w2QGgqd5jGEBZeUFAbabhZQhHFdpE4FgHH6jYR1FbsRHVnSz1HkmVX6ig9qbApu8",
  "key12": "3M7zbmBPeP6NP8M8MZWsYycxTQme8ak9GSXAmmeCvMW5jJp7UhW9RBxtDizyPaNtoVSnbKcqWtvXnpi28S9BoBhc",
  "key13": "41VHT6e6NMRgahURuWM7x4bPFZxWC1dXy7YmDSEoxga9dpd2KFTs1jJNqgEs8r9V7Pbt5DgU3RQJA1uND13oX8hN",
  "key14": "3iEGpTUzh3vDcU695SXGTxCCradFfwbrB2mNNsW6dUX7RQ36fKCaDfSCQNRt3XYohJDxeQjYmph3ZSN2wXdNVP5C",
  "key15": "481PfnCqE4guixGjKayjquzUowNS2U8yywTdh3SYqTiRezistycjJ8Vuj98SEnfLCyg4oh8XghFBtHNFRjNdZj3Z",
  "key16": "kfHhib4eC6kepuozC8h4MTgWGYvDrsk3AHqpxEKcm3Vqvdq6cvjFiRzom7URJZEebFdUo8gyBzknWHh5DxyBrvP",
  "key17": "3WQUABJ3ab4QUL48bH4msKGmPx3tRjtwAGhXr1soGjMfBkF4RaegLj6JYVqGADwE3dncUbjkvUvpEF6PtNpdBsS7",
  "key18": "2DWj6MVj4Y3FDtNrZSxx9RFUCJwPsu6qqa4FTStkFnNErz3G3V3QDUHkGz6bz1BFkGphYtYsvGaWcY2Hrc2Z6Mtp",
  "key19": "518ZPvB8mhxtLhyd7iyfYwndFhN3kXZkTGDtR5nwzZuitsVebDgs8QsuUyss47B6ApBUAwfLmQ1ztoe3cyEZyP76",
  "key20": "4N4AMNMyApom8VRJZskXs4qZ6gbTYRT36cYmxyMUxM3szbyoPZQmnXPgTx7Szd8Me5z3srAkDv3JScmbH2hfNTnN",
  "key21": "24UzHrGMPNHsHSKR6u4dswwU59ERkWJL39zdDAzAg715S6FY6GXEHxAFqb3yjpFLkzRa79zW9HPyrJV5M8Z4rig7",
  "key22": "4Z3N8g2QaN8UsuyUsDoEtqQWFkdxSbYaFjBAUG7D718XnbVfeH75pX5UEtJqL8yZULjAVDoNjLyTNgYEyiduTTMr",
  "key23": "yfWAk49ucFf52QbJVvSYSfb1QxZHGdQun9bL5phvfgx5FL3vTDigQjZCDbrgg5fdrAnbsMg4mvDsboNhgLRCULD",
  "key24": "5VxitqWMxPwfJdmzuHZirgchTqMk99dA32GroUXUBxWshkj9rZYiCxRMpT2zLdrY1SMbhwS1eXkAmQfuqTBVtWbA",
  "key25": "2fcwhpfYE4VfhkLvJhGp6CGYWCTva7wN6Ve4Uy1kkQGQF2YfqYbd8K1Zmexzwjj92md2uJHMxEho2nj6QdijGgfK",
  "key26": "2KUtDR2FRzZyxjABHmRNMRmTdkQMCo5CUgsV6wGWYMsLg8ApL7V9dqpomWWPPi6ahWbpAwKgxnKH9eCs6r5aNrMZ",
  "key27": "3MbgdcZKk9b1NZj91JrJLkRsv23Y7g9MmswSYLi1GmKR13oBdiW2Quc6CUvASDiU4JzDDUxFkH6BPJuwcedFvSA6",
  "key28": "2cXexhWqdaQHbEkueMhtxSr9UM75XXcdt9gnziFtHZUHUxtSrpvnqiGKGQG6GgtcSFLnqqDr6YFBMzLMmJXSP5W3",
  "key29": "34K1aaACt2MRdFygpgCoqiqS7QwA2GQZYAdMNR77r2ZZUxgRBFasvYLYAeWCbrDN1Kot1vDVBPFFESbJK3omBFjv",
  "key30": "5NiyuUdyeG574PUA6HBKpgW5zx38yPKiS4SFEmkPsMZMpvtTkeXiu3ip6yaSyVCaLQteNLEmBFFo1GiMooNqCp3s",
  "key31": "pPdwx4dqxemckxfFBmE9RkZQ2wNVoowoGGKu2MF7KjTQ8f7ccAdeaXMBKrtVRwfGR4BMU67DYA3mhCWTpExuVVU",
  "key32": "529qzPh67QojTTd1SBBUiFs8REdpfJdLigmjgEVwZV1HcuQgmvHLFRgFu3f9N4JkEDhJ18azG8mJ6EG5cCpd1KuA",
  "key33": "4p5kijZqVveKihq9jFYEdvksxfyZFu5XpnriZRRLQExvh8t4DpEzDQ5HK2Z16SUYusoyHXRG9cAPmJVuNnkTmrSe",
  "key34": "3FBaPVoGUrKm6389dfy77QkoxXMndXcXMEnWjaQz21uRoXfpNPrC4bvQHS8jwXg9pdVbMo3xjrcbyiTgEYuwxLho",
  "key35": "TJT2yys5wmFVbxw3mHxfuTgRfKS2sV7fNHbFTCvfbnh5NsL2uHPUyF6DZXz5MVZtPut9ihEYUWYWbpmsPeDCvPL",
  "key36": "56mJ8iD96nBSPKJJiTdUPXPSzuv7zMt3MKd3vQ8jxJFkAhzGskswqzbuqyZH49qAoWYmxf41Zejk5wpn3cVWdd9B",
  "key37": "4tnwmXW1r3kgnyusmtKRtZSoMEKMsPHx56QcmPWiUqRu7r3cmZBHqqUqzeri2qfuUc8TDeAn6XwZy86ysmywvYRr",
  "key38": "31A6EonjWdS1zRZaanKXNBHRXZg8HvSixEa4sz8fCiRGzEAEXHn6daoAxyrV3wqWWDMNWuvfhrcs5pT4CFzvQmWc",
  "key39": "37n1ghv2LVeVQKHYi3vgfNybJyVzofSbVtsGeK3YxH7Mna4ikTdT39gAd8YYextbA9orMZmkibhvrEQ7EciuJJXR",
  "key40": "PGBPxS4c7EjBaFHgVC78f6hggfiJUufa4MATtSJuSdBSpwGRtY467Vsq2AULUK8Ne66gUfYpE3dnALimjjBsbne",
  "key41": "4XWmzdCNrdtfH5ZZTsZCYdLGKdHkDfkioqQ8Mwo8wvENfab3y1XzFnJpSmPmUbM8pRbneQMHZMFiyHpcENeytyYW",
  "key42": "66qqFDC9UKoFQV9w5G1CzoMjHRRjwAXPLvEWqBAt6W5Pba1KeZBYpecuLtANnWkiTDxFgG496KZuh53z9AE7PY7e",
  "key43": "36uY7Xw4xk7dVCsANSjVMSJBTMYb1snZx6Mp77VzNsov3f3ctixT5AR6dHu8epRecht7h9EHiQxDr2ER3Ba1Xe8F",
  "key44": "5zVvFj1FnwEKpnbABToopbi9PcEZ8BCX8zaT64quxyZXZQD91JNsF5JQth3LoqH2mubMgrjcLqxPthPwzeVyJ6Ty",
  "key45": "4SDDAr9rfa26HZVdn6TUPkLAPxL4mvd3KUSixZCfPUPXqg7HSDxufCm2UDpTh9rXa9pRG2teUWzJsqbszEDBTdDj",
  "key46": "3UAG7JEcCW7aDJDjCtvdkas8DYPRG5VKQQxCpangKMbvKVfUAH9Xp8kpaxMeq5Grs7yk1g5GtjzrKESBcQBeWf6N",
  "key47": "3aKVcyrwRapxvoB7ZuR1Lrmi3nnVFG5CJF5wWumx3gFgRSdxQ5Sjic1hcZzRAPt7KywNHDwRszt8VRae4ytqxYz4",
  "key48": "2WrUPAWmcEk7xQKzudZfcXwBpL1F7rhtnbN9uKi36grEjrjQUpLC98TVcXGGkqEWvRgAMCkk4iAt44nNzT4nbcvj",
  "key49": "585qxDTN6schZwQ9eb3vYSu4tLvpK9wLNegNAQ5dKuAEq9jq5zdane11tUaToUGAt2CnBEUafeJ5xk25gBNvbEjJ"
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
