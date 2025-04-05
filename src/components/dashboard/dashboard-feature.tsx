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
    "3eSKmvsm17FpeXS8Aq2ZrqJNwug7mJs9cNbeb3JyWEA2c1GFZGmRihQxpzSGWu3KkVJANh1nQm9w3vPfAJgbwVF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWGHSs7dcMidGRb5dX7xbksmAd3uAJCP8fHg6DipeFiXkvgC2jUBwVBmQqM3dR1vi7M3wP3kB5aBMKrm1qJLFjx",
  "key1": "4AFF4DemR2Cpq21dkogYNix16iWk1N3PCC3JsdX6C5zcmnoBFZ5dq94S9hG5S1qxfzcQm38F5Ehmx1N25tdsNji5",
  "key2": "4xkyJS6VHSW8aTwrmKNfjzazSpXk1qMpFgS4Pc9BuYumwSVQ4K1wTPxzrAkMDCnsTuWHrv4uGM7i2p9xvHFoGFBa",
  "key3": "PsxpiFWBgn9JyfPTm236UGyC12YFuwP4RS2u5wjA8DYVSkRCNLdSt2BqB3ZZFcSrhweGWg7yBpb1uzEk7BUqtUr",
  "key4": "kkEnG5yMKdq2THyc6RxCV3XJ4PiiXUjFucm6vKmvtbZ6iWenpy8iVJuFR38Mcvx21CZpoBksiC4mJ27WAiC5Jxb",
  "key5": "cpWFfpb876J2mis3PYAgoqfG5QJmyMrFyXsuGug2iHp1pEy2LChnhUx9wLRSRDaWrtNP5BVkH7amUzzqzc8myNQ",
  "key6": "4PMsGuRtTd1TRRfePzkrGufd1dBSC4m7iqNhJ9oXT2RgStNjaEZcDzXFDus18L2SJBHorDa5H4FFsjezQKghjAoj",
  "key7": "22Mc4w2JVk5dkMuhNCL7yD3UpwCNKxCbfr8hAKUSwiQJ4oVGZoMyfm6VAV4ESFY9bGsj2Ch99WefLefBGKjQuhp7",
  "key8": "tK5Be74kX9tsGcy6bDjJHe9jhxvwANfyzuGMD2CCp74pPKC5jF7zS18xBbHA5dfKue5ecd2iBBybzJXyYsvaARg",
  "key9": "632PRhfonFq1DiZGFgpSLxQXyMMWgA9kGnHD2tVSTVGosmQK252TvPfPzc9WZVCa99sVRuXoCAWhSoiEG1Ef1vQB",
  "key10": "3vqxr5H18BirBStB1eCcxqMPnzWhvNodpUrCsLV6aKduLjSxj3cZzXPFHS4Uf7QHLgxb9bE9gRWUSJCTEnjuLSSA",
  "key11": "fLRuB4ccGhKfGp5bv11ym281a1ctVLzCUDXphCUNZobzC11AEw2RjrPkVeEV5NNiukbEPsdawLRFa1nUboWxiAg",
  "key12": "2ygnCuoWJPtXbJxX8WsEek68bwRFt8Vw6QcJbLchwSearQyyoj3pRVgSVXeQDC7HdtmBPr89HDLvkxdTrTWMFWN5",
  "key13": "4z4SGDMCsMCywWRiSXJmmfzge3sdHSRBk6azdzT99397QiTCefvBetZ4b6cLBNzmiGHwG7FP3vvemkMac6jtzhnR",
  "key14": "5SoE4wjiSTqm2VBR9i8m6NQawZHRNqoAYSiwVdnqRSs3DgFN952yiBaomvia6YRJRt7vqcwmpSQyPM1CYsJfdRU",
  "key15": "4gEvAZb2mWbUQQEkAJ25UvPXpYkVP5xtm2YmrdxXMvxDfAdXm8nrbyQKgCs1erXDLZQgnTULdfM59pZY1ExrdDbB",
  "key16": "1CXTGiYk59pFChf8MwFrEff2NsJTDWbG1ogr9agz517dPs5j2bCx3YyVsoKEe9hF87Fid3fHxAoKGzeigq3NR4d",
  "key17": "58eTW3Gc3vf51dNYv9Ebx97aCgahCqF7jk8qCGWci5Yb31PsnHSefQZsQUuwGS24vRaV4sbZfawWxKYLagqKe2vG",
  "key18": "5EDuEqTGC3QvoAJgpGU6CbyY1ENzjXEG3Z3rvzvns5pmLNKefgyGqLbkn3H65SXviwhnCoWNqiFkuxtKwYVzLcsn",
  "key19": "jhUyuZ7CV2E2H5hZwkEwi6JCPUHYZsWUpPaXe4RNXHfsXEhdL2SBnESEho3V482Ag4g3TmCUJjxe8vNNdRKFchp",
  "key20": "66bfCSsGC41SEdsJYzrqAxVYWHaRY4hbvka4pWhGP4yETUm42p9jTcNirx8ueXpfziZ7VVRV8BLt7wdvvt5ABXnr",
  "key21": "2UCrv6pPKFpwgtLie2EVrVpuzkoiVHWQwgAurLRLXTRiVUUkLZms3BXYBR1YKLYh8KbcTZcwk5JHwoTtJFFik4MX",
  "key22": "5pMENQDhgqJ33LqFRmcRVcnHYVf3bBSERQLz7ocsDijnPRHLX21NRo1QU3umKRuYw5yVV8CyUtDKee5jvNCNvgmv",
  "key23": "2Wz76gWqT32Jio8UeRDD885NyNAKurBum7LMQzQfAJgtFFAgFMa6GWdmvtWCjzD9JwCi7txqqk2d64vtDxLrGS7g",
  "key24": "3cAuk1A52QuUAuuY3STgvGj6NHMenof8S3aBb3Rwy98wwSFz3HTu2qwQoe4NXo6bXMNwhcAfqWXDkP1foPH6K7SQ",
  "key25": "3dLD9PVubsqjHDmQyS3Jkg1ctLuYusRFJ1va7nnUDe4ArntNU7mezxUCXkFxa3UDmkdfNnHdTcjiMLrLkBVSjD2h",
  "key26": "4mSFx2o8BQBiv1mWB7qWQHQQgU9xPiez59k1mmfh4uj5xpCdNzBnPxMcFTQRGny4fV9fVfgCWF4fonvqHfjbwPZx",
  "key27": "51Vjb9VTxkL8zLZP8AYUgyaVaRt5ed9Hn8noVswGSRT2igiy3ChUMvCeiCctGBB2vgPeGYemCAy4i9CZ5jMRNR5c",
  "key28": "23DP4KC6St35vQ4xBswjWzrxcoY6Trb5yt5iWaTLTCifBdBysM2SyfVF4nFzbP4JTxt6oXYKFmKSmNXEkpKJfK12",
  "key29": "hNNVVGrh17p9a4XfNHBS4AyQn8zUV63wotVhMz71yvtwDk99zdNyigmJTsS7NsNFoKWZPEFUtMX6n9GoTtqbrRJ",
  "key30": "XS3hKpAZoUyb7wdcUCNPCjU8TS6wx581yKPFj9GSjd5yc7hWne86kjJfoYuHPWwdHiBpqQn9eYXmVs7ucRfRMZe",
  "key31": "2ihptDhaiTW1x8faqxNmp6i9awYGXeBq9818QmNNEB7M3cZeHdDyyooEdsButhr89EdJfk1rg2N4DsindoDfszAf",
  "key32": "4XyMpPENpeaiFN8GQGrehgmQWnkHoGtEaCysFjQy58kDkFa9JUnp5bgsnMxr7E7qJk3aKPHn4EB79bmvD564Vfdj",
  "key33": "2mvtoAD1o7KkDMUJXxQZxcgXQLpQ32cWbHhcBwxETpUggTjjCC33nY9k9kzc1XJFLKMaCzuE6rLmthyi15BrUR94"
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
