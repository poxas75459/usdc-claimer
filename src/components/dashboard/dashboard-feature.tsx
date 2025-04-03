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
    "61QF2evYEa5SZ1iJnGfiu9iFJQ8tNyU7ThjGqDgh8zhSsz4WxzD2Wyobu6kd9vrDZCuExuKQwLfunh7JoekbHFiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1336uYNbZKT88HvKdckbypNQjCAyLhF9RhEgBzxLTMe3DfpgCfaBTq9DY5F22yNC6Er5vs3jfe6JxzwgdvitsS",
  "key1": "2yRpnqXWbZFqdhgUCtJ5MWdrvGeGdzWxE74c6fTF1vZQm6H1p7r5j2dfUcW1UjW7VXd6xy73ohDs2TQRRYgcpm5B",
  "key2": "Jnjzre2nQpYvpVVovsJ2yxBtS65e9dsnwTTnEM2Q3uvbqUqtag6UQ9ieD673nkkek5K8WbEFtnz5BDA1J9A2Wkd",
  "key3": "3F9vnq624CfbPtWt8Zws2oRtBUmc5YQDKTubWpU1pai2EBVEnRjDuKGzQmSg6piZeeeWjhrks8fZ5foPEW18p5ra",
  "key4": "MpFGfwkSdYD99x3VDQip5SZiNjdiwN7RXwkwSiowDV8282xVQ58N1B5FSdptJz9tHEx1CDYFU3rGpjxeQvMrHMV",
  "key5": "3Ag39aeCD3mvboyrCJtJoz2gWC6X5UwiGoRCYeoaWKoDvNDpEagRrPrW3ZkZ9KvNEWRjfqdAjjUSxmXsXF6UbDLz",
  "key6": "419wz3VZCi7WGqy4y6XJKxLp1uq5tiHNggfadiiw9Y6nQMuf6y6EQN6Kn4AeCjDNohbuVaXyUp2axbsdkvSis7UZ",
  "key7": "uQQ92fFYc2JmTZQEsZzGE9E8X4bP46ipRJ4t2PzhaKsMYkK1giKjEkP6x5D9oLCRaUXxn8HsGmLZSF5rr9L6S8S",
  "key8": "XtEttzrte7AdTknKXVCkGt4Ko3tjGfvr3wX6ri7vugekhT58xXWqAEHwGVitukG7kZzkttiWXekukgm43uPhkwH",
  "key9": "3Xv7zmC9jKmhf93Mpg3jwxtbPVDCXD7vP9T7N6T1NmmCTAzRzigaxazP9b7B9QW6rVb5kftevGgVGAdKxcARXxzy",
  "key10": "3ieXub4KJFAyBfVkJdKsZDdic5FsmvdoKRCWMAVrXsxhgqANXT7bu2Jg6gk8Kg18fFef378wcyDyWmMXzXE4b7FT",
  "key11": "2zSbsCGdUbyNha9qXSb5R2CrBXJ1LVfjTH2yCqpQhXj5y68EWRr4x2x64VpREf1GEM5LQzBth52DuYW4iBj1WY3u",
  "key12": "64SX4zUcVpNUf2Zbnyh8qMyEQ7Y9wezMJigiv67Kkkow1wxzsnE7eaPDsx4LUSd1teL4ZDbGD1Kf1Xe1Wt8r5QmH",
  "key13": "LMLuyNbzQZGXsggZHBmV54UMaaGUHCm3v6QNwieAG4vMPEzQvhfQMDGmpwwpiRFPCiQTXroUSCWgKStbWyiCt7H",
  "key14": "5vZ62rHMJfYSUY3jo8i6ExpieeiLA2yPEYeVFFGHcpgTuZb6LxixMZEdyPRbjRCPZtEqx4DByiWrkgeTP4GKqPJu",
  "key15": "3Xbs5fSw7HkgpfYgf2K7WzTALwQGMxQkawGWuGsGEEYQ9NtnThoSB38pxhAp3DsMTE9LtGYroy8actrhqKGKGMCY",
  "key16": "J9sWv4DpGGGJMeQjta8ibEsEkAnUgMWJYLKZ1HAqk2X3FYPi7eeFYWzKvhnec3GmknVeL9ANuhZDjYLbZfu7zxD",
  "key17": "5X19pfdPuMARiynTiaQ6vqL6DbXNFyUnaZhvpR12qMSxhMTLr3ocVqSU5Wbeizkw9L4oNuQR1oCtPS1yKLtCVdCx",
  "key18": "5wtQeucvRbXiYJqXAmEqGZxKnPkjnQNz34a6JQVgyUwGudeyTvpqcb62K6efPF2Eh9kVZrAyYUmYNxBYSLhYaMZ1",
  "key19": "65UoLkVyVpT2hZKaeHWgnyvQGMXJWNfuv7sopJD8Snqyhj5XPepFkZMfzoqSVmgeSLYyMVd2QPe4VDokHucd8LkN",
  "key20": "4G9WahrLCtPdz4C3BonJfK3qZ3mrNqHZYJSTTtmMmpNJvkxcw3NwH1vZimgJ8kmDbCoXHnjQvAaKdXoTmB3qoadw",
  "key21": "2L1sjVYGVQmzTpjre9BEobmshdFxJvKyH2bCs5D3NEd3wzjsXBZYBRzZsu7XKz44crkA8hVqHXKPauCHjHmFtzrw",
  "key22": "485gR4qcs5WDmxPLp8dJ4z13LU4b2vtnL1y9brmxbKezeovC1faqzosQLxejq85J9Zxfs2Gxaz6rMz3SjCzS2bcb",
  "key23": "4jua5bC6nzzNXKJgcvrCDKiDNDWwTggg8hoewio2Q81vcN7n9MnH31mkLkAdqLFoyUmby3YNtrTnaLPYAmhiHjBV",
  "key24": "5Mq4GD1XetL1QiFARciDnyihgG7WpgWNzbbzEZZdZKAvJjBgQpPaomj8zpRHpr1Pwe5R23WgGAsdZMSmvWPsNyRn",
  "key25": "5ZT2hUq5y4HbH2oL1UhMTHNs2DR2it2LiPuoq5rsGvMgH37gvfn8Xwof7xUxX3LoC4B1qhef4W12A1mcb8E81csX",
  "key26": "2SxLykinZzEebqc4AsTQAhR4SDx9HfjGKbWHoYo6pyxaAALsVFh2aSLGhZRTY45zE2uHCQcW8AsNnGUaNtXabXXJ",
  "key27": "awPHQ3uvGurNPihYofvQebraxHPAAidmZkU1h9dL6R2Z2pjvyLxXAYsJ5WMBpnSWTgYbrGTb1kriTu3BY3VnZs4",
  "key28": "3X4VkCBf5VU6yQB9tuqCRudLkrhLCEsu3Kk6NQdoYRoWA1V7JT4dYSDEJ6baFhmW3NQFy9DQZhPAjmb1sHwXHBjh",
  "key29": "pm1LJK9YJSnqC11yaP4rjR5s876MAzNx2hjkxThte8SwXY8W6KbMZ9ia9EjcE7kE7RAtii2TezaGmUmCAAcKRBw",
  "key30": "65i4RhCCUaeChftfX7mU2vrE4RYEdRTtRAYBkkLF3h84rfgwuFSTDv2sF8RkVrrVARxTaXF1d7U16jZJdYuKBC5w",
  "key31": "2mNVecSmdWHujKNuKB9gqZMTi3CvsPFJMtP99yUV8NKoDwNNzY7tEUzaqTXHYAFV5KxY26KpX2WJsPoefXYgtsx8",
  "key32": "23EFq6rE9wv68QFDyTuwbiPh7yF4i4AnSPBBjK1rXAvJioNMwQYqShig2cbWZkmmdeP7fpozBBy8dE74XwAgGXKY",
  "key33": "3x3qTx4RXujyGpXcx4muaqwKCjuQMV4v2P6gv8Mn5tJukCgzHrEJ5dTpt6D9g3nUb4fMqHNN61T4w6Lu4MWovpHd",
  "key34": "3iPEmxE4D7LcTC6QsWhehjtxAa36Rev9WLU7MU7PHWFSUnjasC8iyNrhgi4SRSbjvyrYJVe8wASgnFydJHG2PX1",
  "key35": "5Jf763w7K6xJcLv6CxbqiFW6LUZ7PgGT636i3SnFQQEGpmoRYAPXh1v3uW4peV8WnGDdbyr8y65nFHGi2sAjsHnQ",
  "key36": "4DsW8KZQLpHduX84ydNHAbH61kGQjABGbPM6tadXmGshYsSARtZF68yfPt7HB8yR7qxYRrAqxgzJoDHztCe2ZsL8",
  "key37": "kssM1hWEPaHKwRgahF6kT5BoC2ub1b3FDkuf3GGEzz7yaHhKTqfmvzikYK4FxAXgVTjVvT8s6ed5SQeLrm4SCx9",
  "key38": "GAFHvYXz7qPzybffVTPw1khyehwfs3jFMF4noEtXMVbexeXmAjVghDbMWxSqhcrwE1soF7DPy2CUF1JazSb55n8",
  "key39": "2wqUELxTrXfNnFwBYCjxKKViVLQJ21t2Yq6taYRAKD7C1jMUG8QXBzEHk72xUuB9d3XGFyzGAqvz3NKNAzBH53LL",
  "key40": "2rzncpvJStqHbJ954LMSF65XZged3bPD1gNwSAvZTgNbZs2oUn2WKyy2acqXcfmTiyNQvhw1U7qTuaEcYLCuJV54",
  "key41": "3ZtaQ5kEUJpGk3y8F3mMsisMtgbqbgHrVC1qdDbuzz8oDVCMoKg3jYCPwiZeKyj93SYWdekUn1y6k7pjFMDsKrKp",
  "key42": "4ubPzhimXx3hj9HikZwcZxz7ooAuxdb9LMwT3oTBPmvjfx8wDs7hTkvJtQUfvqTkBddk7Kg5VwM9p8QFMWvQckbq",
  "key43": "3vLKUYiWjcZGWFptsQvCGNe4kuNcmyZp531nrhixwEE7C4i177sJHGgHJSUANGBFiAYqyYpUvXPnHwAqWaJR434s",
  "key44": "37J1dKv1uzFQ4CiTFSUHrmvwtUcKnVGaAUh4pSRtGR4DsMb4jCH41uRMPrTVrk3QM4vLDHNpLhnG7wfgL4rybhXn",
  "key45": "3e7gr8P9geAYGFcGPNtwdhZjSYeyHEaBTYRjMhECpmazc7fm8z9GCoMAWep9X9KZXxFFgzxYSseWbsTNcoHNHK4r",
  "key46": "2J1AajNihoCnc58GjLTiy23N26gqTmXQ3yex5ja3iQEnCg8WVqyocmg7Szb8tP7Lt7Ko7HnNUev3AHwHvY15SkvT",
  "key47": "sb2jkpdRnKG4bPNKu4iFj2xSUGmCDFWG2gR1Luo4p5kPDEqkHi9vv7CAqBgMtxxTPKSUjovY2yJsPcvhj2WJ3cg"
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
