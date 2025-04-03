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
    "65rV3i1UJ3s6fDQFNJsmygrqq59Badtkp6uophfYPh5Dz8RS1gq4t9pE5K9jJdtQzzeN7F7L1ZRggjZdgz5KSegp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y6VgKfusPzsUBxRhbR5eSd5PCdCFze5uWRhtee6ZRbVT4sv9SGoVTr5RL6HTtoDb66pTGqiDV9WzrYrWGWyvktN",
  "key1": "4cYcfR8S4vDPBS1s4vQxA91271a4f58nZwmsRW8fW5mRy4RZ4RFq9j9wmtrXmpGrahRasLqT8TVGhRUESZvnedq2",
  "key2": "4wNuwRGUmGK3LsYkv9UxnkjpV2nbxpAAerom7dAFiMuFQotHH1uWhTbL9TVE4an4LM83VHimRn7x7JMqtNi7ERAx",
  "key3": "Euq1Un2sCF6yKW1yC1X2AfdjqG52XTCD4jPoFHigZRUdJ7b98ntZqtNaTZ4wBMJkiD3Qor2AovBF1Hwtap8P8E3",
  "key4": "2Dbi7ubMnwGB7Ph59eBqoxMFfpNK4aDsUuFw16MWMyQ7khGyEmQHmt4K2u3dfdeMyNxh9PxEosxF1WWBSt9RKQXU",
  "key5": "4SjKMaAvVL4rRBXp9Uz48Ho8jwVewByqBNywaDG6rvyXgyLTGdCJ9GgdTDVEFEfBakio9uc3PdQrfEXHH3pbBZDD",
  "key6": "BU2Q79GcxNfLfdSWyV6CARNRHu7aH6FW5XJeeHf3ZUeD7P3HmHvXxawJ24bugYtUhW9vExzQzCgkLiRbeBCbqae",
  "key7": "2ZmM56FPGQCug72UqeaFaSnBncFjtovEAoL5fzLvF1maUzNF1gg9oWBhESdTWzpowKZRruLBTcEM6LK1M3Y1bwch",
  "key8": "51LqrpFM65vmCis3HH5rGNbxA262oLex7YbvgFUnAKHNHFQYKkL8ASpwek6FA11YtMbAPJYm7FFvAjdp4m9ftUhK",
  "key9": "tPsDY8dRUTTQwtPYYmAdnMxopqwmCQVemmLWpx96Gma1KKbHNUBHXSCWcESa3hTwygGpp4sw4eHwxnYDwWN1wXF",
  "key10": "2rq7sPdAvrcU6UMjuGUPFcciEfRGwftvLYBoSZPpRKHgGKdwyZCdrTmVyuJStUDPFom4rrmAJgC2nM7sxHfVQvkp",
  "key11": "4MdQvzoPABDByC6jkS1NocGydwfpapCb5u91rAjvZNGBVfmiU3edCnjCvKTYWMM8LGTU75bfi2JL9tkyHoYrbcwM",
  "key12": "4T77V2ZrAjh2APkPMmZGvMvtucQwsoRGAaPrxH3vPdkdcL5RgomjobAPUvJawCNQZD8Bjb3BryXorwmMhY4DnBuk",
  "key13": "2RUevWwVJStdYF7GVe4TRqm9MBYL4BYcaPqbRxxWaKwHPwFtQHwLywdqpT4NYFhqn6X6fJjiYRP9YdA2tcVPzrvT",
  "key14": "2oWo246fDgetdKZTXCo9F316UqeaHyN4p5ngjnMHbvyPZxaEbvs8sLTLzi5Y5GtXnFUXsrRmujqW8QrFL7guY67F",
  "key15": "4gLJabNvoiLmSsSise8FFQxYwXAyoA625eqP9Yw3EeRa65Hs4sthDMPdKq6DUSPhz2wumZoFqNEnJ5GN3GeWJ9U8",
  "key16": "57kMAfM1h74azVztaxNRxCNzhA8EDWy4mv39JB4FkTL3Mh4o8dVdadVKi1XeULEDjWzJn94Xga8neG9EKYRZHEnt",
  "key17": "NKhpWuR197Duddo2hYe71MrbL39Jcnu9ADjvRN6ontwa2xwo1NSCGGTHmD8YBfZzwTbGarhL2HRKXDg1bRznkpG",
  "key18": "2bNjv6nJK6cxAaCgc7H8RBMGdifZj419mfGw1JgWLcqT8dbkH2srEmYHj5kqt9AWMD5rqKH7LhZHcCyHzk125oG",
  "key19": "Upsa45w1ZkgaaL7k23jw2v4VcU3XRK9KyCLPd66EbP46iPAooZgZVQXxqHvUZ81HgUC44AhLXU8upsmpKVZPWTY",
  "key20": "3uHbXGCJDVaT38dEvg7DDxNvyozp7WYyumsA4rSc1TNeUsASDTbQ2mKZPEixiNHKxFCxrMzEsGmc5nNdBzPBuB3X",
  "key21": "5cF6CwqwtaUfqzst2kHG2QoXbvw5AivntHBQRr9zn7pCtqhHmVK2cEQ7sDhRaz78Xat6gYninJanseERa9DXstGX",
  "key22": "3pe5AhhGnEoSYjpmX1sZBKGDavCBbhY4Vatpm54vmT5KqQHL4VjFHXDLRUEhAvLfG28Yp2uEgvjuxDam27KPXc36",
  "key23": "2wEYnipcg7i7nv2LubLsYV3oNy3qyFhZPbAGh6mJuEDousytboidunD5GWFQQq5DZdEieHPHvCGErBv1nBdy6kmz",
  "key24": "2YZUQS3ki3BhssidkqafWQDq2jadJ2gXF9GzBu8yPFNad6Cm84bkW7WCYih5C7ghLabJPjizUzhdyzaJWwzAT1ED",
  "key25": "7n7S3vVYjRMGymam4JNetW3TDtq7REfxtHBYL3FE2KtzW8nmX8XvLrajPtEwoukG4FFfuJ3usxUEFYD2EA62Cf3",
  "key26": "R4qucc1H7BsdPLYWrJm98V3C7TMtgjcsN1a2ttdmrYckrERpj13gXgU8uVjpbEnwSPb817kFZnzDK1AbbTNpqKd",
  "key27": "5e3BnFM9NDCTwJTmqdf1SyGViJimZgmVqirkN7CYHNYWr1SpdCBbW3Trr9fQmihjGDX24Ug4ABTK2uedjrwxaF99",
  "key28": "5pn8bwSPqvgGSf8nuP5BHxp37UxbA6rkZsf4fNLuEAuWxVEu7RRVg8aHgneGa6NdeP6Xoq1jU8FDLf1odk1SuBf8",
  "key29": "61DgUEgSSrRoS4drebMH5NxcKSR3K2JoWi4FfZuckoTSP1b8enpyuw8pZzoGeNz6aP8vTbMg87scFiJPsw42mdra",
  "key30": "3ddUGei9Z2Qg1SJDBeu9r8eBbKwfCvykS3AADkKQb99ok6rbRyYShGnFAmn92hKHTn3xQNhye1jurwLHnRydFTuT",
  "key31": "4QESrdxLMv1QECuwGE2WHnUzAWq2VmUbyB9rdWS8q4tEWqn3J4Aw8bUeQVLZyHFvABWc25HMMKLHTBbTs6qtuiv5",
  "key32": "2UA9TyXggoa2fodshzxrkgMzNsYRLHRM7CmfZ4VFkhFUncz73tQLeY4VDPtWqKb3k2QFsezUhqScGcRcJkjbr4cA",
  "key33": "5iW2TSuLMzrMdZAgZ3o9kqGcjeWzRKRSsbhcg1W37zVSbrTfi3fjwFHprJC1sQy3oWPHSwDjQow1Si2NqXWAX2wq",
  "key34": "tbG29HNRvmf6b98m2wbPh1ewzpE54t5H2jzK6HGwjXCQBSfUbDhGnEgWE6dkhWTc1tB1PrLDFd1GMoFWA3VWTE7",
  "key35": "3Z6eprBSYPjHkd5j79UwXhMuV7q1P7tLx1L9zCATU4GYHBhBBsqst2kJTfJ3RELS1EDFAE2XqhmzZaab56RHZCvr",
  "key36": "4woWR3QrWk7p4PJ2pHh9cW3ssWDUKNd8xVxpLdmY6dG569S6egeNXZdoJh9vn2Jb6yVmd3vJMcg8mqRLdLXBahsd",
  "key37": "2hmkDGT3rJhivW9NxjGZTxLLrS81Lq3hpdKkL1x3tEuP5YUoZUdu11YmburzfECq6rW9VpXDHCen6GbCFVT2JzBb",
  "key38": "4XJGWoCjP83jfSM9R16hHiSVq7td83TkH11mK9RBj2Pu1XPjNNom5PDUJ7Xpsv1EJqERagiCu4mEGg7JymyWGwFh",
  "key39": "5Xv7gFYYQkSpcdno9KRxLWChK6C7SPWqQLLu1gXAcgUsdPrUoDCYoF9wftjMrqZh8cy2dGmprXT31cz6fJTJHBLQ",
  "key40": "5VSx2M8jwXz9APu5E7f85FcU8k3iXxkk4L86X4ppAwcWkktuMoiL4pAnq8HgVrkCCnddAVMEKo95gQACAWc8BFMz",
  "key41": "5Fd3u6Du3vKFubvXkmZxycmreysed6s5rUuWCDbEkc6rqGfDWz2GfrUabSwNS9ddjWgmdsbTXDu2sqHYA2u47YGu",
  "key42": "3y853RWmYBjBRKZHL4XVaEEbW915fg4qaXpc81UeperPtpgLpNZ5kyGJYWpAtMDmuGob4KPKDwayuQyvRXp2CM9M",
  "key43": "idTRKKjX2cv6pxkP9XVU26SDbmscetvAv4ZN1hUsxuYwyyAfhEsryYGFQ9w5eeBKS4pNKKxAzM26RsHKpUiLyWc",
  "key44": "3eJXFCRgz81u1e4z9gEFuaJWbLWdCuoEWLti8pNB9FoN6vf7PTNZb8gAmMmHYhs1vTgP5BiEsMpJwqbfd1EF7sdg",
  "key45": "2CacVhMMgHwzvKnCinCt3PgqSbWikCZs5v2guyfn6QCtBMsJfyjRv4HWh2UG1rkpapZXsG3fnUW5faYZ5ZDCJrZJ"
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
