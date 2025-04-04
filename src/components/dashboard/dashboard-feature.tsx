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
    "28JaiybvUGkrQMRarFfdpff5k3BFWyVAZnB1xx2MNjPd9PtSoXjundR6EpReLAugSj2WZKiiFBtCnDJQ7Z4MXg2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbtxVtc8xWURMEvy84QpHSNovWUuZP5LqCKEYutQw9qivgsnB3DAq5MA5Uem87CtWnEqE8V8DMPd5uM9cRtchQU",
  "key1": "4wD7eytni69yexKgnFtTPTrY3bhu4DvFfK1NQeYnrtwf1YA8iWbfi4LG2Ha3vwt8qmHXwggJ8u5mQUuCV9Rqgkf2",
  "key2": "2ipfKy8sMmAV8ksCCXBJKUXhgLHAmRPMoSQ56evxVFVTw1uRQTbaKxMRQ6xKX9q3CM5qL7EEfLTgY95hieULyQC1",
  "key3": "CDRioUAywgzHjXVmufw6pfnJ1eN8L43agNkouGtShrmogDMdnJpRmZF7xf4oyKxbiwfo4iBVYF8t6bUNu5wWq1o",
  "key4": "4jMXUpGykfS5xJgStTFgavvd5t1okVWxZMvze8ckVgCVsKcdSZLpouU3hcLTJu5MFMkrHDpzqi7zAHdhCoy5B7g1",
  "key5": "5MbyqiRjaNcuqJ2BEYgsqgGuSDkz9mfwW1Riy6BSXThiGrZmREHtBGPbTRn5AWN4dFN6YTy6NGPHAd2Brv1JfeLD",
  "key6": "9hLtVoSmPfgqmBwXwt3Ncq9vme8nGRfrZAPXEwUv7SyhprJme7GTmRGww7URaSuWHUo3cfKeguNhsdbJv7P2r3e",
  "key7": "js2ExjFiqypLBoWmcH7WAAtc3kRmE7dZ7tf7EemdCKoKMm1XTZ5SdJzU1BbJrUSXxK1V1Xgnd555HkuPoM7qWnK",
  "key8": "5EU18AbcrAjbQRE2uZQeJfgW3bkcKk6NfxRdZwW6aoBysGMcm4vJ4XrAatYdxJ2DWKNZ5HGisreh3Sxrbquosq4n",
  "key9": "AF8WZysHtjcceFL6XHKfq2TH5pWaVT4BsWnhMT2qUnhSPyAADBTv1gWJ7SxSFTe9w4m3CPYTDePA1TddK1aqvwb",
  "key10": "5TDdKh3jw7R4HPBJSiavtSCvhcd3z2WWZvFK5oPQssRZGs4S26m1KHabWHLjxx3wGBRjtceSRiwmyiZK9cjJNvUs",
  "key11": "Vmhk5V4RXxNELVJD1RzpZ7PhHYpejpoxWPAuNJRFnYtR1uNrt52qWh5K5uF3kQy9SQRZ9R6Y6ZZ1k56dYhUy4Za",
  "key12": "5e52sATYYTNLdXS1FHc9G6yJQHLLU5wq3ZoEKinAr53cgtbQFQwMWrNz63cDV2SH5NfG3R8wZzX4F8Qmt9C2cSQs",
  "key13": "2shjgR4tpdhAdwAvzoND5wSUi9raAPoqjqAa4F5sX5Da4dJQosYZydRjctHVUhiHth2MZH5EzAgjhq5PFHueurLZ",
  "key14": "5EP8wVwmZuoCy63xH2SABkRD6Ga57HMC3XNQ3LtpvLp5KJWHbRYhvn53oHXWXq15pNS6H7xSDqLdpCJ1boSx3RdG",
  "key15": "4CP1XpBGZ5Xz6jtkhKgzjYeyqt69foYhjeURserQtZ2qDq2NpDB8Fp9nMyZ8SuY74szHtFUNXqAqwKpmUydkafPV",
  "key16": "4wJhHFz9oDrTMZAbsJirbgrUz3A4NjvRzoBbQoTsrjGYobX6yx3ekBgNCufb4ivFq7Lsz8R7ius2wwiJyerCMwsp",
  "key17": "2hid4yzVzATSrakGK9QKCwSsY61dP9fhUr8UVPPfCW2mdrMsuiMpiEq6PE7P82mJ9NQWnGKzF3rgomuK6xcsC2mm",
  "key18": "5hFVzHTyxMAPNh7yVbuEUdfq5cLHAq4b3EHY7UsBNeGdMfRYFuPCWtFmh5AcXvUqRGxVvmqPFHXycmWRYiY75Moa",
  "key19": "2ZX1erGyBMskaUckb9vymAQFD2BTPkNZZQrxjrBhT3uwehqb1PTRBEAhbbNmG4RKXDpeHDpfcbWHoi5YbitNrSBK",
  "key20": "4sad23jc69PHtFtFj3VQ5gu9YSQJkgDDBRv3iPGmPdSiTqurceGshbCgXnna42dM8Nug53KiKtAhq5meEbna8VkP",
  "key21": "2bXXjZDY6Jzhomwsk3aYGacjvUHmGuiAcmmdoK3zATHyyf34p61dypQ7eBYc2V2SMjYdaycqEENpLDkAJBU2yEFq",
  "key22": "2v5Xr1eieStpoXGJynvq1ZCLtqko6douMUxu4az9zkfTUJ1dc9NLtxJA1YKZNqLLyffY5sXspf31Yao3YV1BA9u7",
  "key23": "hP5ZrkxAeGnqo2SESBTk8aASpMkf1ZvipQCeKw9kuVTJAx4ocACuhP94upm5GynrfC4NXApFA52MYZnfj9zh5Ls",
  "key24": "5FThbxwexvD9KM9fP15AzQCe6F9o8wCpicpjPy9xeTDusU5MvNYbbbpZ4qWnKW67e7sDCnxtVewj5GHeR77deWsj",
  "key25": "5ZzQyBQHysspXhZ32qHsjbw6je2ziDauJpFpPudJTB6SefetGdWBC49tVtiwVioLGeiJnx2So7WiatVdgmE8TxU6",
  "key26": "4YizfwZqr83eTSzQ59WpAwuEP2acSbFFhP1ENGGVFHRoNPq3KTfdgJVNVZepnpavz9YZwBmuNNq2HFGQDdRVMx1D",
  "key27": "4NA1LY5xWPdyX7pmSNZAtrAPtPJMBushsQnQdPo2p2QnzGqW7PgqEmHC9BXdXerGSzHQTQJfAuUXbvF2Drk1p49u",
  "key28": "2j2tQE2PjGbawkayghcnpXBVcK6HAPm7PGV3QL6sYzipJnUdWhHcvDgtSVgHmi6T2ge2MmAqUUYkvYoSaDPiuzQ1",
  "key29": "3iGK1wJNRqxUXgYXRsb8mCLTy3RkZzi6wU2nonWfGHj5yV3YtYGEKaDT6DRz9iA3z4UrCkpwY5znmEcivCZtYKRN",
  "key30": "5PzuCACYoK6YCx6edg5UTJ3Pi7amishdVJt681RfU97SaABRkuAkcJKYi9aQepnYBWD3YLyNDoCLeDXELVFnkc4N",
  "key31": "2JCtDNEN72QNPvPLU66CEFhxpJK8mWxXT9MGP8hV86CRNyHba8E5iswtEamWnhNdMGgiMBEwyuDdNbZwcrTe47KX",
  "key32": "2MCzCqrRhsiRmVE7HtzPeoqNwaE9qXTU35pydFLsq3x5BNwwkCxa5UuhZhnWncWqYtDedE3adrqAkxZEpkEPRNkS",
  "key33": "4nba15YNBJUPBMoegXXNyrJZHojWj8jduQpFiK7iJ6WeFEcN8Us96maBiSUakxJmZZ319QxYHxjFNi5VTid3YhR2",
  "key34": "5wiFRy1tV46MvqyYUMVEZ18aqhMFk3gZ41eiv1d65Y6nKdQARXh2YigNP6RvxPtbEBWGbEMz5Yfu2MCbq7ysfars",
  "key35": "2iCphugYcGFGQofdJ6PRGfTRWBRnzAzWwiiTfmNc8hntEt2XQtrQTSBiUfy66eaoD4j6R6QQLvbesCzxw8PoKUVa",
  "key36": "K65dZQjbcNbgdnyavJ7w3JJLakmucthbSQUZ4BX1Gkier77mBGqRSajhCLbLiYM7i7QWj57zbBuu5BuzCy9rQhs",
  "key37": "5rUX1VpKDyXhs6MXK7TQUaydyvBBc5VfNqYguPC5gUz6mMpg7AVueYyMYm58kXogsmRYMvfVMUCZK72PCAkWNnpC",
  "key38": "2uDgyTh6N4sPZYN46okwwhb6FXeudiuFBbJyvdeZAbLw4AAbLK2Wvf4BB4PGxLKtnyzD3cgJ4UHnZR8aXg2MiuoZ",
  "key39": "23hqVcorYk26pH9x8gvwcfW4AMGsP1weKN2r34HyCRhmAmvUpS3TYuhVfFquxV4eApWqxr1nt3Pp6ha6C3bScBgx",
  "key40": "5FrLDTvRupcerZqredMsJXPoy74bWbsvXXxLuuekFRhDGbfxwGpBYUaAXQPuJ36aSdUGTpAVQvz6zMrkkibdDmdb",
  "key41": "goS9qVvgrFjLau1cJnK83bYEpjMEr14M7db7YAMt3qaHHQV7pdxJNWiKTHDFfYRqfs5QNdxx8tmhkhkj2YdbzN4",
  "key42": "3JLpusbs99D7NUe8fmv3s9pToeTJMhqgs8ARw8YD6mgBfDrDoKxu9roHJ3yCdBLLoDMZMsMXZCpzUhcehgHxgLpi",
  "key43": "5fH45DMEtg3BUAhXtHsAr9c9eoiBkUa5aNCnu6beitZsssFyGGSqnALAgUtfXP15DKX6mffc75hDxkhootYnF89D",
  "key44": "4jKfa6T2PUYSEgk6iKL87kdN4NNCGzC99bmy7sBgFgDdSynWjQ14tK5P74186bQtkYHa8e3khR6bqH1MV8oFZYw1",
  "key45": "4Nw76DukvBkerNbNWTCFapT1YarczA5BSi9Xf8BCbV8AdLqcDLPguJ2d9Sko6HL72MmoVzTpxmn9tmvmYWCk6FLW",
  "key46": "4z394zEgoCUS5XmKxs6j232nyuqyogkvvJrLqHPXAmz8KDKgmUakN6usjie7pb9SectQVmpDb3kWTFRR3KQbbbiD",
  "key47": "XN6D7RbX5cYZUqMAZGaBHSmzG5tFt1qS8QhiatyovRRmRDsLdk9VzGLRY3PkD4QbFQbH3BpHTBkvCvfX5RRrQgU"
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
