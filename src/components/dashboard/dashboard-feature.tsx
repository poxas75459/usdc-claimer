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
    "4D92f3XcPYf6a4SqRZYQoKMPy59xnbXehavigQv599ZZJ8iZojPVombUa5isfwfohkTamfU4EaNR49swruFHcJcr"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5UcNxWU3oTy8HNu7eoZ2bCJQpSHTfRr3AhxfGaHpYc4bCYyrRfvw2nrC26HFXUAYJpXRXXve1BW3NjxcC1o9PmLC",
  "decoyKey1": "3G4GnRwv9tx2eERy4AA7Zt8qdeQWx55zNmJidVdcQUpUQuFVSw5ATDKq6ep4e4Z4CNFBqrMMdh3Gde3z5oUeKD1x",
  "decoyKey2": "2sB2qTnccU5FjBWQ7dmi1LDjRVgovMvvYoRybrTp74k42T3QyXakc9U8qYTFBctPpN3VjprJhoCFPjMMLWUL6HMC",
  "decoyKey3": "2Y5uZmHScNPZDJRpABAQQLpcrtgDMxoqsizEJuFotD5P59JnsRGAfhUqEKJTvi8SF6RdKhK1N7ipQWsTDDUR9T4o",
  "decoyKey4": "3kXQJPRhP5movHXU4a72Sq5TwfTE5PTUYjW1c5P27pbjbvWKmn939yqD8LkFMj1yR4hwsZfv24fRyXobjGKA6GEo",
  "decoyKey5": "5Bh7qCoDHQyJrYFMGqtiUVn184eJFPwA3jkArXuCTy6XubaFAczBGzGdRtYabqQLN4LAR4e7EoFrJ4cyxvMD3EoY",
  "decoyKey6": "3GmYQRCTxAmZwnwud3TYQ3xBCLpLXjfVMnAu6yvoL3bRmd2YB3s9w7JZ38nsXSGpTVcVzZ9UvU8p2eT7MEjWSWFU",
  "decoyKey7": "543T75uXyrFp7zqga9D19D6NEGbNmKbdCEwhWf2ub9uuRTVu4XUHZeghxK2VUU4F99bdQou45w4apU1B83EZg7DZ",
  "decoyKey8": "Ta3CxJ3YAgL4hkUXmSbKa8YqGFHAvpcwMWvGg1DwCNkXVsqjMQoFd2jXwn6vm5ssMdmTLtmZQnZ4awbJFaPxRvE",
  "decoyKey9": "bykkSwtQwS5aB61v4KBPmjVR9nq5w6x9Mj9ybd7KV52VTTpafpuJZViGM7mSUdVhfLHUyWi19T8tAy1Y1qsHVrV",
  "decoyKey10": "AXymxhChiKfZcA9t46Whg1bsRCK1pfN4TRyrafSi92t65FLqWSzLekEdtutvCFfVQvmE7mVv4dZCQm5ahxt967e",
  "decoyKey11": "3kb4vm4N9hxhoaMi5tDRxiof8UoTRuTaqrhSwTjZbdkaZc6jRVdchys3uWDiFYQcHpmMpu8eS8QvBNf8Vqwc4BCB",
  "decoyKey12": "5tiPcBSjfqhBRgZrM8mUm1hQrBE12hyPna3StQYE192C5RGAT5n3SrdMhyyTZcowfh6dC4RMskGXnz5Af4khWzfr",
  "decoyKey13": "22AVUUCdEi9mec17egnoPAvnorS5LaNx3NMNNrKRw6M6FpxtP8myFhJaTPh9wtx2J7NiqzQpHnEgT69cnvdgY8RY",
  "decoyKey14": "2VJauAitrivPNLwyKt47mG1QzGbsJGsYT3ParPjKZHyZj6WQVv3fmv1RV7w8dFqp1Dd9dEZm6ADWJZi4f8uuHwer",
  "decoyKey15": "3Z7rX8ziHwivhnGFP7JgZZNZtkqvbieEy6JSsJjRC5jA1skidxTMVN9WYFpDPtCKrnBWpr7wSRMxqYnqpf3wD2m6",
  "decoyKey16": "5WLFZJLyBoQDk9isHX1giz8o7wptRVUkrtN8xmUVABN29sDpREjr2sFrxPJsRSk15Fx2jrduDMHJorKCT4tRyuCq",
  "decoyKey17": "2dc7EFtpcDipXYMTwaZgkDaKWBjyDSR8EY4V5Vbe5gTp4sdxfn5RnMWyfMFsNJh76wk9cUUYmkNUzWnady1V1Tqf",
  "decoyKey18": "3wAeygHMPtg37S42suuimwmkotfVQv3m6Yx139NAnraFoa6KkajYipQpCck91seopmRZq6JBuR6Api8eAUUJjJ2w",
  "decoyKey19": "3X7WSastx3iZ5a4g78Z2u64LkzYVLyzKe26J6Ac1pqjJXfrjeWZbah9fCdnHnSkC91b3g31bA6gPedeSVgiWkFmU",
  "decoyKey20": "3vWQMWHGavkZanD4Cf2LVEAxatz7suqesdfo4PFeXiV4nCApFDMF8kaZ8syitt5nvgWfjWmeu1wLRNdnXj8YoA2A",
  "decoyKey21": "3S3m7pJ4suvGqFUg338CcYbMCqQ6RHA5iWoRZt6wKK1rYsxNVgoMzNVz4ghvMziAmyZHMVcDZjiUE82oN2xWe2Ah",
  "decoyKey22": "3awu2BMdB1GRVfz7BYpuKmvZCRPv9Ldw7vQZhWg49bykhmA7XmXwHZ4pFGYe9PVfwifdakhJsoa6UBmLzCSWnTrk",
  "decoyKey23": "4fNnN8AuGGjVpfyrTEU2Azx1R84XPQdMVk4r6Y9qoCmQEaC9rbh6HmoVXi2unLuN2s8GdhceoK55ruoLK1dpGmKj",
  "decoyKey24": "5m4xGaa5rNUrsw4nNE9aReqFS9hDH6NWbiiDxMz1VyyhDGsCQYvGDFGsC19Np98JtZQYvyrMy3iSkkssxpENYMKM",
  "decoyKey25": "yEQhWWQr1RcXRijUyhJgdJxV2KdSPcUQQX7BxaFMgFs2RAfGVeLLrf1iMJpoAkQzk4PgV8booFbb4h7eibGmZbX",
  "decoyKey26": "2V5jbdLt8ag2dakFJqpYB6yyeArHDH1bmDNPXcEZKZ66zeyo92JJchpNgpTBbS9SYVRBfSrJ9CHoHTtTPPBZVdxP",
  "decoyKey27": "3NL6rVnygcgJH84vcmg69F3ovJFbjhbgLt2AXSZ6XWe9aHgvLKPcAne2YisozYfQHttY6rMQGfwaLnihL9bKaiGR",
  "decoyKey28": "3j7Drwa894jg26tqagKwudcrKb1GiAJkDqPwUB73Wj4SsmPhCnLKCjRygTWA4VpuiuPgVQgDLR8bJVM531Drp8ME",
  "decoyKey29": "316St3zFCPEobYm95QLke9y5f1KerXewxbmdRXAaBmY1JegnZxHw94eREUXowyq8xBpPPp3D41hhRzFgKKe1RvPp",
  "decoyKey30": "Q5gWTCgS2ZTXN7kiHa2UpqTHrF9sykALVBiYHYRArsm4hoBQ75vaVVTY3LMh4oHcgCZzCG6U1nFLF8RiHNJ1fM8",
  "decoyKey31": "25h41XkY8aEkvF8xTzbk4QErPZ4BDQMGupRSd5X6RwBTSJfqAfeJi4nvVNw2vGNH6CstkS5y4ESpBQ6n7jhZ1nV7",
  "decoyKey32": "5HhSyy4PMy1TTnEHbhCzKdEPxWV7FP3pcVRcfMLqoLYSeQhBCQozxJTFC1d1MkWysJBczFiF2Qv3bHaR9ti9giRA",
  "decoyKey33": "yzX7Vm5LCXNGKU6eUMn44Xd3aRum4p5smnm5QD6Hb1zeN7NXpuNMUdfcrwtF6u2CMGuqkCcrfspyW7HQMRiMxeT",
  "decoyKey34": "622FcDob2m3iAZNFzBSrKB1dZVC6MBMBBTYV75EKGaDPZJQbwWzKfjibCi71wFtkgLfLsMmYgfGDQA7kYeF1Gea3",
  "decoyKey35": "3bUmsNH51V75xM3rF12763nLuv2mLnduTaBaT2fZdTzDapVtV9RDwyPxPAqAABZ7aT4KSuXsVByugAJXjzHEXjcM",
  "decoyKey36": "5zqcdTA5ytsdEnu8VwJGYp1vSqM3CKJUPJwQxdTGcTH1GjGGfsUX3Yrs66M7A9SVhHiYMRWF3oUfb9ksdCzfj1fV",
  "decoyKey37": "2bXc1zLgqYnxRaZqeCMSQ3VQPaV9JAGAWFihvurmW2rJx1iSDdEjcRown5dLogTugLEFCF1U9JUfdkm9jYRivxgL",
  "decoyKey38": "5RL8nWTanJskPdHR2tgGYz1bjjTsa9A7v53PYhRYntnKzVMzGFx5fp7G1dPQ8m5tGaj6TBpm6R5SHy7Ko1iFGgsm",
  "decoyKey39": "44F5QQbhmpXteTfedNpNjmqhv7H9HXnivcJk9CoKktmu5C2EWwc1mHP5ujrLzmtwEcJRHttTXPZLRjUr6zQxofZh",
  "decoyKey40": "3MwEcquxUnbeSsQi8AHKZEQQjBtVjmForiFSr4HqzA49UAkbNjf5CPHNXBXtP6dMJdPUDyBqqDTn2iqqvakb31ch",
  "decoyKey41": "4qFsysbj14t3PTC9PYaT9muTkXbYmusafnAmdzhAn3JqwtkLNsKaTSMpWP3H4TDxdKpEJnENMZwztNCLVjW2Jgzf",
  "decoyKey42": "4gAkhPWzpEVMWk8tk8toAYxgthExaxKbUrExQnCurMcJrKsgLEUQhN9v6g9KsMNbF6tAT14kCbwUvQGhKQTAyqft",
  "decoyKey43": "26oSF2H2N2SzB1qXa7vaf4P5bNGQj21bn1FzXkfobyATGtmqau2G77P7HANY9fpgirnnE6K2Qj8vwa2fCFa6ysSf",
  "decoyKey44": "3URkn7nv92hdcijCDUphyRQuHBUCmAzSwQ1vxxERLkLSJpmDmMiJEEX95YjFzKxDMNiNLdDzRVkDcvf5twSj3g2D",
  "decoyKey45": "3EwEARAQnFKpeFqLFRzh9TVEukssqoPV53Z6f3AsaTq4RuSUC2Ho7yJsRDXZHLjemhQtecMA2MkkrFkyRpWYyCWU",
  "decoyKey46": "3a2V8tntYipkYpKD577EWvqn5pTtvqhHuEG2Mc95qYWToHLeTBwE2jqY7YJcGeXC7njoGjA3QS7PDRSq1bmLnoc5",
  "decoyKey47": "4FfDJfJKZPzDUd8WotU8S9KHhgpeTkEgJ6HyvSTkxksC3cXaZwnGuzxB9XmRu6BGMNVEYoftEDiYsxTc5VXWLqtM",
  "decoyKey48": "5PvhfME9hNYAsepMp9pXYuasT11x2fdxZbcRTXPnkc2k37SiaDYHviiHsqxXGB6svSbWtpge16RHnTaibEytRvbB",
  "decoyKey49": "tNMgRbJep8mptSpTzoeZ4kdzpjL6TT8LuEFajNDGWQ2NDgjmpNd9kPtjocf2S1XpTouQN5httaWTGmGkyjw3MEL"
};
// DECOY_KEYS_END
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