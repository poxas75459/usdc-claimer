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
    "3LtW3FY8cJB839Zdncx75ffK1ooWd1SFnHE3FzXi5ah5Hcvz1eq3VGwcmiaepdqqkYjnfN39vXrVpS8QSLHfiQHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynNiwA1QKEFcubB5aftF7uU24KEKMpNb2NNGZ95UDL7mBQfgYzB3sD55ys32xqLG9H5dQKsHkPzsADvN9RDfd6R",
  "key1": "64zBnWPvAxeANPxftSX7fHTTamDjaTgyBPaufQmKkDcKPE16V7rhwsazEgSNgYKq2M2bdosf4GExioZR2xLbP7sE",
  "key2": "1gim5owq6VorNd1oeqsPQCzPZpKHtvT1FibcjEtzPeKoZrAqsq9GzLnBQ5oCSniQuaoV6DoPuUdq3yui6ji2gM1",
  "key3": "4Q24vtk9TMwaowcgNxvHhUdrUPqVrDor5kMmJ9LuX4cSVjxxJi9HKMhUcPuwTvZwc8G8tp16eMJkR3zeup4DRmxn",
  "key4": "66QiRSfPAYF72SbGzPzoAguueeNovEyeMPK1qfS4TXNqHekdsyPGQcQJapb7ytR9kUEfh783FB464GqPRCZvSJRY",
  "key5": "6vtNnhNJZLA4RwQmDLXUDRsrR3AM7UzJyayiuuVzqr3d5BeNWrLAdnBra3PRfWPCGP76NR2mb871BVGVvjGT7tY",
  "key6": "24XXHoLNZRWsifaaz9AzobzLa7xjWQXZeJnwANCD92QzeAFhgV6NJNoFiAw3ptqafNe4zGPqZP94ghDWFN6xJtdR",
  "key7": "4rhzQm25bbYEhRPvBSv2rcmyYNDjzFWai3UMZiqhDN7ida39eJFrukmpvCvRFbdqKq21nH4u4RgVspW29pMADuyk",
  "key8": "39CvZX9TQRHcACKDUtBcv6niY8hRkwqpDxUzmYD4cm3TTRNPwBB2Hq9nsrgKi4HeDZv9ETRhD3iz8QMULMAVbpfU",
  "key9": "34wKhi75Xj6uJMUAZLKJVRXDSiscGWNTwAwW6TmN3dmAWhVgFb8P6sChW8fWKjiK9boYjR4USZXbSMNK9N87E31T",
  "key10": "31eBFUD4rFkL7wq1ZmGnroEGHrb7qNDRZqhqacog6s5KGeBo1pzisgEFp6eRPC5QdC6XgCszxMuBvWRhfYnuqAyK",
  "key11": "5NA91p39DDzkkT1pzLouxUA8hFGwnksJ5CMxWFufdYaCXmCwUU1czTW1hrEYmbQpbeyw9Vk6495pW9SEWTH9URDu",
  "key12": "2ZTYTRpTCTHi2yiUFB1srrLzCsVyW7pgZ1Qpd1vzNEUdm3M1eU1RDk3SvN1tuHxPFo6MXKbCvstrA2MNknB8eycG",
  "key13": "42y9saZjo3b3ymcqjmSUHpx5hNQfsX4Hik73UGHpbASyRY5ao2V9x8635LoprBtMTwVj97FLrRKxZ5KuNZt4fx2w",
  "key14": "8qk1EVgNkRKE8rZ3hqf1eQWFVJRkZn7gB5xTn1KbrD2zsqYbWaTeV1D5Bfg9M3wmiAbc94JfohjN5H9wGuofXXa",
  "key15": "xXoAYtieCzCLkt5zfrerRvTDPYxSfP9m3xfHhkwtVXtc2yXA5ZsyzkCQwSWRttkh2fXpwv7GZHwDczERBn4N2Rq",
  "key16": "4yvzRXXy2kyTm6veoJeWULnjXYtdELAQpFx4VCBzBcCgKuRfdvFC1vCsZeah23z3UvQKvBLCDLM3NFpThq1CpWDE",
  "key17": "VDZezdXkPMQxHyjLw5Uw8mPMzmY7mv6R5e3PnwmphSFn5JHhdKkRTSBBXPhKHkUepniXLSLUjHGzaYKYmTCL3fG",
  "key18": "3EpMwQobQxivCGN3gtwExHYLTP5nSkECaR53zv2Q8HCvYMe9Yfcsrjs7Mw8XMUrGy6e8qr8GUyS7FZWxAaayJj3H",
  "key19": "5sXcuFUMF264quqVpQ6b8EVA2vQMAQ4AciBdyci97FJtXEgmgLyK7tiZSUEaHSj13XzaQ4qjTeWCMgb9EoqYno7W",
  "key20": "4GY8kgEimkBHGyZ5FBLs8NULJbkXdwBMykcWDSvJzea2y8VZ262CYQ8k38fJRtxqw57CMC75VBvMuir7moJG87cq",
  "key21": "2EdCvB3ZxVSAkGMP4rpJkWBjyc3DtDWQ7JugR3VeqwnsC9FGr1mUxwA4oMfxMbsPhmaJvVRYwEbUXJX4Cctitgyj",
  "key22": "5uZwWoFmUvoX9WKpV3xSywRtcmCBpvLzBzG5jZVGb6t3RNWjnADi7zNXa4CFqLiAvYCBFLtoDm5VJuduYj9BdETM",
  "key23": "53HdZQgmoWEpt5iWyQVv93gR4dJZJVAUu2pAs3ceveiJ8we2t1syjXXNZQivcXgsX5gvKfzov6ofzjgyXnxJWLUR",
  "key24": "2hbwP9RAk4FmN4a5SDepRra8imLpc1qS7NKGvy4u7NQgroaDjKstq28TrcjsurXov3Bx1pKviZDm76HsER3tLLv7",
  "key25": "2Ndng25x4hn62rTG9ynYcLVGGUWjEEkcRYin38mdKHLPXMeihczqZh2ocMWSmK5ZBpx7ewK7ihuA27iC5vVNqyV3",
  "key26": "47pxBDpnSg8iBLsFNa4jy4nwFTRA9145eoETXoJqR3rg535P8mXL9G4ZVMvr7NQChZhDTYTpUdvxQ1S32t8BzCam",
  "key27": "n2BUkG18Dx1DK3mEbicgpqCTdmdC4KJNtxE3WnhF7fTSQ3BqkFAHTVPTf8kMJ2SZZuHn29QmhMWP8GgVC3M9hcD",
  "key28": "615yHrCKgkb4nu7coPpKEHpUZYdiAzyvTQ9AxV6UkzvxRxfVBVbgGBjR2xuCvnVNFcdnTWbjFW4wiFn7SRbxVpK2",
  "key29": "4LKErHZq8EJG6z2a1zwTLCryuh5mpjEQykLMzQxrBnhmwSMvbq65ECaub3p66WypeCR5FKMjBuGALWFTV9yYrYST",
  "key30": "LRoL9ZGL3d7zWQibtjRcMdYpgzgiXm4XSXXhFTXquzMtwEZejk9YLvogpfgVn1WtfNmtM1sy7kD4ginK6czjAYG",
  "key31": "5fpkdDSiVZrmaa2mddpg6MCVy3reXPyaDWBPBN7Uk2PEVksUhD6q9aSfHcUjaX5Yjrt5Tx2YMzQiqqcfiryRB4xN",
  "key32": "4sc1gUuivdNTqpzqwVS6ULCAknWQ3xY6XjQPmn9XonZBVyBpgQNPhyRpQ4GSiWuzPQ5eVndyPdivtZKLV5ydk6be",
  "key33": "4AbxnkbkjfDuSwwmLhtdWWHyC9ivY7G4cgdqia7j9uGDBP3sQBSr1zHpgLboXsAFF3HVZ1PwQ5uNRY5rgECkoNXB",
  "key34": "65txZc71hHPqufVqkXkH5iuNdunV54MZ2YpgotvPftVePVxFNPcTYsEwKby8vrggAqx4msLPVhRMUik2NSB5a49V",
  "key35": "2tNN7qe8REii3epkVmADaUtHnAcWKxr3VdmbPvbBvRwJfDKto83t7MjrNWsJJRmMKsznacvtcGq9JCWnc3TAKDB5",
  "key36": "471WntaBZccGhjj3ad12N6Q4XBBiUh93uKd7obJCje3cBAE7Urbyz65S9ZVWVZxaTEbopTJXGFNTwPbBCv4wo5We",
  "key37": "5XRfiuQHRF2nomD6FuTFDHbVaMbzRisLetbPdjcuRBDg1WqZVczMJz6fy1kh3EBqpxRVazemfnDugkxhaeBxscrc",
  "key38": "37Q3w5LjksqUfmvvxnEfbaS5JWaJWEfwuaTvUgK5kTRZxeqjLbmR6ZqsTdKrFXiP66A6SwHnsY3ug2UJwNipLNnm",
  "key39": "ExKSHXm6fAMrLXLPjdCj27k9eXtsN5WaTPWPAoiVZ4XN3HsyY5bGAja7ia2YUcBrsTDcbZqB7TDCBXSFwVhdZpq",
  "key40": "RX6AdPt91m2Wgd7dRgB1jRs4QmLsD39DGqJ5evVHH659WfvrwhRH8vjMrt5Ymqw7F9DPQ7J6KjnBG7aWrb4jJCq",
  "key41": "2oajCXMLXmUXuoBWdG5tYoqwMxPrsgZuXXbqtetvw9raoLrLScoJsa6d9etHp8iBq7SSTUZSg12b7evAQt3vtHLB"
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
