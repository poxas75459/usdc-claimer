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
    "4SE2AkC39GSFWebtHXUEXQtcmC5oajZ4P5rJCJDc8sZLcFVyG4mDghr5XxyGuhveje81mx4nTA1aygeUU7tYbe7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfdcLRuR62tELM3gCd4rzhzNZoRfr3peSyj9uxzUPF74m6chrxpSpU7HD2KAM73r9WAzFxyojNR2MmmiJbJUnJ7",
  "key1": "3K9JWZki1HTeRJrBEag5Fy6MZJQ48VXit1rFi6iJN1mwZN3d8QZTdkfPrPWnmV7Km6qdDUo5wpgZTC24iJzGTsHB",
  "key2": "UfrDZjQfwuTTwpZY7kd4hCGme3iXmLhdWsiXHRb7DzNp9YG9MCoY6ELhRoVLTz1QmVKoKJTVbayB5f3327Fu8iM",
  "key3": "5WhL17E4KMVSX1VUTaL2rLzckjTGzg4D1g3QzEsx15sR1T8odKZGmUYdDciHG2VKgupPEbgJwDDxDaejZLaBdXnD",
  "key4": "2kEcaY3GjRvvCNjpQAZbxfJEzmXpzejrAtPuh8VDAHneVs6EWirWJPHVhfDEzCofvG9hjx8FssicgJku5pTeXMGf",
  "key5": "3XPUndQUJ3LcxpAdbRgn8ndeV4RuAnHixa1SZw1z9hG4ZaifPd5PLuqfR8WxcKhsQXeXCfWToAmmCskpQgNh6tdc",
  "key6": "4Z5hyZykUYocVUHxMtXeXytwDha4p6cxzJjNCpbEWUVx1A9x2gXnN2zLooDxTe7eTfBnR3iEeMcEy3Qi724qXGB6",
  "key7": "2E8NQN4xQVvwkgxLpP13woXjDUW1WABpCJxHdNbvyHsojKET6Gp9rx1gfJ3Xjsu4phTsPbqaWsYu6sWkrrnCTRd3",
  "key8": "221Bm6RrMNyFzB3q3SE47NgdQzDr6rXwjA4etcJ1zPaYZWxSduRJzvTafgigrjy1dw1ijmhcoBUh7A95ZvxKCAxa",
  "key9": "336UEvCrSjGfCzUykXEghuDGY3sYnc2b3hKTzr9wrPFDEWrpSZXdU1ZFx6ZqNnQqKUU4XTjtJPQvCxuSfBhSVWuS",
  "key10": "5KDDUDEbRUHv7uYv9XowC6Pz2gcAWCUbCc84Wtr3MvhVMhBexsbfUrWR7d4RZCWVTbSd6jBu5iLN5Jt4edz7A8np",
  "key11": "2kFyJRfFhrrD2jpergyPgmbBbgugJtdtTvxyP48pL6Rt4RcAAn6EVhx2XNy9fUd1Kx7PUxdRGzU4rGbQ6zqnjvTR",
  "key12": "2E11hqiXYQJ7JpCkKCDttxzXEN7JV8L75EYMd49RwvbyRv8vHhLWYVoGXJ4n1T87AuAiWKFpt7BGakS44zvE8Xp5",
  "key13": "3eZH77nCS88fHYvDRaCSyM1Ys47JCsCFwPWmNYKzkKPQXwEDXggUNBXwVptzHk9GtPk4aWC5axWtLjbGLQ8S9Afq",
  "key14": "EX2Yg4FtX1cFviuohAWEJ1vZcPMGvGudoXPUdfH1ksxHboJN8gjEinozVcsHxnHBV17HLD6puq9Ge2HANAktLmT",
  "key15": "3FD7EvK5deRApUG13DekecyhqF7edMNZSkjbYuJDACktWr3ZLjbV4dhQBYeqU13iFhrkNGiw7VKjEKZ1RBYoSYjh",
  "key16": "5TeDKtrMKT1k8qvGzmGrAoQQZQZyayQkUb6yrjBWc13ed57krAp1jeyhY1wkQW74NRHfjp4rByMmX7kS7w3qb4Hs",
  "key17": "kphEoQcEQvn3WV1KZ4TSbiSE8qVqgPwjEXGXQtyvLudimUMjT3sw2ydVqtj6DvvNAd7XtxpytKJnfNsbUkR8av9",
  "key18": "2RPFxyw5edYkkhPrQEA5UhCNiWnxmspGKSGHAqgGBKcVDSMFAtwwHhxg7SuaQ5azANUinqeg4VDuVdfR2zgmZvLY",
  "key19": "3PLe6rEKWfpqj2X78njmGYQfWhXh4EMws6EGKUwhkr2tVXNuHnbqKRQTBG54VpMNU9q7xFEjTaXNduodhDRQybc2",
  "key20": "5bLo89rnfYvB6RDQC2MkqpzTDXPZYfuBCLw7SzrBdPtR6VPH2e7mUXq6w2owSRHpUGLu1z98YzE6MMRpTMHFu9BY",
  "key21": "5Ph9w3TirEa5CXCHVmga9gghiLvPtPXnpGE1XS9Fir15Rf8ZncHS2skWMkBoXh8d8uJrQJrpPNDogJGSYh7ayTKR",
  "key22": "5Judq2fkxd39diJ9HeVE5CDXyojGAwS1uTuETGSP4fBpz5dvB6n2CZWG1g3JWtjPfeYWZewzyaXcyi12tvRz2PNX",
  "key23": "35zA4ybTCnUX2frUeKLSRCv2imsE3Nv7HBDHUUuum8X6hNTJMgLEX1H2yWizYtYRV8WP3Nc2U9RCHwCF2Sji4pgM",
  "key24": "647cdKBPuJ9CMG5QtqEecnwcReywXKwLv2JUr1aHfJtCZaK1n45RQZfWkjDPButkqFYUEaG3YSCbs9hd7qncKJcm",
  "key25": "M7SY2Pt89vh5PBy5axEfhArLARK3ZdjSD51XqeHiM8ajyC8sCTX26tjYVZotSArRVKa5xPFKMUkKKjeyj1cC16f",
  "key26": "5HkiE8yKATDx4SmEoQj8wTidZJnUV5bNqyUCFgkJ6zL8PzvPpEm5Q2Ky2eBGo3NybmZUppP95foETnZCkwFGGVEo",
  "key27": "5L7SRLCZLDhzDnhPCPgsWyhAzkYCibr687PNaivDFuRNrx2hvE3JSQMKq8TH35w66mopgpKhhtgBvd9qg3K2rXXB",
  "key28": "3XRZVcGbJzv8sMmsvyzZFFVkMKJcxL3rKSex4pHdjsvJspz9KekkrhBNXjjRXHV8bALowvbA2zemfG1eVr4iaKWS",
  "key29": "1hL7bussrWPh4gpBtpmLuNzTZy7oxWV7nHKXbNFnkR26meGAiE9XzhdAucfwAfbw1XitLkdFL4SpBDH6ifENwBE",
  "key30": "62PG7C4mJUBkdLLF3XZD2kpH85Eku2NH5YUCTHzpz5m7yQKWNXoNcH65uEXGCTdHfisyEUR8CeK6NjARrfDWz2uy",
  "key31": "5YzWHTrEf3mRNGbbwBob8Cs8wCzuBMLzAQc2SRnRf9mNFm3kfvLobz16PVJUQgb8sSJMCU35Bimx6avpCs2DWRm6",
  "key32": "55tmFJxQ7iWbZbQsvzYKRQB7WSCmqPoUuYJyFAX86TsQgP9WuS9CR1yV2WLFtBzZUZovJzuSCWuVofwUsjaab3Sy",
  "key33": "3B4WgxZmy1K3DJdTBChu7uqhVid6qGUFtqM9boPnwFXfAFn4oc7pHhEDVKEDXMmxNUwq42qfxxNnF5K9Lox8MWs8",
  "key34": "2u1pKdMgikHXB11oVyHw87AtXPCu5XFMsRmLXvZ9zaAThKzUM5S36WEvxVKH7yvqQZYWurLVQaa2mX2rQ9uuEpAz",
  "key35": "4yok9oVZGxSwXGnRdfgbqtt6DRj4NbfcVxs9S3k973LrVH2UHTUqtdg8hDqwxYW98hEtrvQERzMp1PP1A8xaLGou",
  "key36": "3pkzi7way5oPmqMsmRNtraaAkUbqxvt5ZPuu8LY9JwyymtjeKWidHwWV2HsphsNC9DVru3W4r9bXTgJ8G3tsEM6Y",
  "key37": "39Eqnuc527AbxS7BUvLUrrCsu19iSBjdkYZf1cTjZMDZaf9n9narvHdHXFJnRBAZaqm8SDvqLTajxyx6SMkgtP1m",
  "key38": "Ba91YUugy5fcQdrq5g8PdPz8tkd8A5JVEvhiqmu7oTRyrqVJecUWerYcZ25VU5NtnDAkLrAaqxk63M12e4zXEkc",
  "key39": "3bLKR8rzeGZeB9X4ZKVwdQSHBqeJu8TrujJEWsCioLesud7KS2f6rwWWk1tnsndCbKontrFojYRHZ9K1HjiJwxzY",
  "key40": "SffRpHWjTDtz5bxarjneGgDJMmyyy9kHSTJSBeQR7G3iQQbEq7Y6V7tyasuA1SCwvrxeCCnL5XzbbK4umxE8opK",
  "key41": "4KzwFUTfBykYHG2hVrakTP34AwbZo1HviYoQbhhaUGdJF9BAKxPkBAfSkz9vjd9g5uDhg86gwvoxWUWmGsS3Cu8V",
  "key42": "4DKv3P78S6b6MJkoTjCGwPxNLW6keQoLDatTrqbcoEgGbGtaH27xdsZaWVkgSK2yFkjeTgJ2kUEBG72ADijPeWmm",
  "key43": "MKUqjHRtm6WJ8DjqqTR3D2MSA1MSa19CLjmfQyf4pvw7NsjDPMhVakc8r3MJ6ig4cCoDrvJWySjDHgSc3riEDWd",
  "key44": "5inhgN2Ubd2mrE1sQoMKFBnvh3a4BFkhn93b4AEdgZAK6bsvRtnmziomJiu3g1ozXHitKgduNbFeVKgwDya33M8D",
  "key45": "5f3r5QJbd5YobdeUe8VCMK4F4EvEhAovKXnorz7hhrKBXCypJjJjZ6n7U515Qw76dnXLYUnfN7mUsSXhnAjKuvum",
  "key46": "2CAZMuR14hrTTwjYYdvF6PQZTBkh3CEujfz4RzrLXRPEw4o8UncRJpM38UWbFjH9AmeViYrbhjoUbYXFvFdUggXZ"
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
