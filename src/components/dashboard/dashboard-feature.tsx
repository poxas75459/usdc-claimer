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
    "44b4phasLjSUsGY42g5CZQfGeyidC7fAgeoBL5h6uJfRa6xtEnrE9Ub3mRcC21EEhktTfpZMTDaVuus7Y4ZMPXVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sp4SUQWDcBHFz3rrSD3PpqEc9PtW6bQfvLfgnMETUTNjqEw78ghAaqx6SwV6HPvQJpVAvsArpGqZj4QXbpTw8ow",
  "key1": "JAyh46HRuAv7LVtiJ5R8pEgRjcMSr5CYvCxw1NoM5G4aYs5j7cru2aNc2SmrKsvw5HXQtLe31apQ4zQwbtrUrtj",
  "key2": "3bHEdAekyrSMpjpjP71r5CPQfxqHFfM9nBvjbP6b8nrS41x37fcLr6kaSUQiqtBoHZRY5S9PH4tGQY4msAYfo7S4",
  "key3": "4aMXb2u5cDVYJ79deST9sqBLPzJjP3qeRT1FyEsyb4hQD9Nmdy9znja4h56sszW4y51bbPTDLDd1i3dzBXKSP6Ti",
  "key4": "34PWmu6fBzzPav3ixs1ygy2DgQPftGT67bs1TNiu5HE3mJWMFeCAXpWo7GfKhRUzfQsmq2SjovigSWmvZbG8isHS",
  "key5": "2E5nT7CzuUVuZG3XNgFvXDJYCB1gR4qrwbvP43qmhwdKAYjrk5MWLc3dFGmcz7ZDbRTvfnMCpSEsDo3k5PrX78cs",
  "key6": "2u2abJao56HcvXFSMBp3xkx1iDcnxFkwuvgDhtLoCqsrmZQGAfQXwicFYgD3YZWmevseZ3qWthox1Uoah7s1WMvm",
  "key7": "5gkbMxryBTxMo1GVB8FoQYQmj5GEz7MfVtt6chMGJnBeoVA2ZrQpN2oETaYSLef3GxEmk4diWZ9QENs5M47trNL9",
  "key8": "56s5YbzSVeuhWxVdP4ytwxiAgLxcEsqswzbiAgNF5rjyBpNDiGayn1eHYHT9buF83AoAhKy94qYUfe7WQWBTozcV",
  "key9": "3Jd7zAzyvX3LL6u4VxqBgrQQfhzqqW7RE7M83oJnDd1bhRRvHphEF3LvEWLMVfeVD9a1bVLsXMTT7hCMhs1mGcGL",
  "key10": "2pmRxHtALiw7wdNzBFwnFH1TNpU9EqTWz1qipy1Jk3JsuyRU4WaS8RWQQCEHHMuYEh6XEt74n92RKpprPQGCABGY",
  "key11": "36ugFZf7RvKzE49aJXW9V1N617kdmxb4Fkphm6wzbudjwvXaKnjjNDTpNGrfJLJdNthF7Bu47gWZRWrksCtaN7zC",
  "key12": "GX2am2pDteeGLCDgjpnbipLj8eYgynAfD1d616gak6gsZZ3eijSXumBdFRvDByUN7sh4LWSZFpXsSwfF8TGjUBP",
  "key13": "JP5ESNd7hsGy9Qn1AtbVwQNEHYYsQBSD6sj3XLK4XW2Etc1jd5DpgLZREqG69SXEaedNsLFr5BmNw94gFL4XQWv",
  "key14": "JJ4CCmvKG8QETfL8kQRRWKBada7nkcjBiMBpGqzoBgdnbrAKehSyGRuXPhEDSQPq826pYbUqKHUZ75quFpMHhPR",
  "key15": "4AD4NUDiAaxFafBw5VzGWJCMV5A88sji8JBGyS2okhN74up6KKZ4feuqjdtKWnUxMqFVJUP7DAFdPoBXugB46e3b",
  "key16": "wdAC168xiZjLbeGCRBfkuVsP8FBJ7PvAmoDTdvojXfkGN9h5vEe8wbwjNMVZnRDNvXU91AdkgwSEXkZB2b2dtZD",
  "key17": "2TDPWMeUqjqEA6vNci1VPEGSu17cE3ZtzMhhjPJJVfeJYJNeG82HkmfFoPCZkyd2uGT2MgWhxsY4wqz3n5MnyPeF",
  "key18": "3tVJJoBWSwrergaU1jA8FhiZQaBgmBDoZPF1cSPNnbp7LYiFx3SVCG7QBcLJLRWXBwxmQFrW9UT7hRVscNGmesdk",
  "key19": "3KjDMARLMcGGE9v4PfQovvrkrWGbXqfmUBiBEPupNdAcETyfH7K672da3rPj7ytPq1w5KZdBS9xmBfa1ZnQhsFTc",
  "key20": "2yT7sdAGTgjXbHoJ4Bsn1EB7hhjefDdWXc8csZrQpwRktz3t3k6YchReSxGQhYf77oHbY7LLPiBeHKirs1eYAu8m",
  "key21": "5WUfMj9ZcEEX5MAWCwq3BmrgSchYmgysSNc9v6791etJD8bsNZG3o95ZGfBD3U243CK2EHxQSchiUVBkcQ7kVRMd",
  "key22": "667VdftcQQxqEsVkbUWYjxpzvekEUN1UXb38xipQG1EVEELGZK96rJod7MNBd4vHVid7PCs3F4poQoTTQwTzptj6",
  "key23": "MdQczQbXSVEqaSZzJS8J3QEEMYRTEagWwzzEx9qQWTxp7RAK8fAWbvyp9jiz7J5DNe4inpRgfj5hcQQtumeCaB3",
  "key24": "tw9AD3wY3svzNmw876zVRju1VKTP54tMmCxwzGF1j3RWwCRtKsfTk5iMCjdPyhZJPycNjFaGeJGfupKwM5fFNLf",
  "key25": "KUuVhCZWoQ9NoFaDoQB51Pd8SpvSpCcVzUdXKiiEKBv2hBrh7FUPAeXY6L5PwhBLGUodxwrPmSNHCkV5ML4Em7Z",
  "key26": "23zdqwgA2zgvui8Du7biBJJBBCB9cPSDc4yKEqaNJJukcTgvUogQ2Wq6URoFsHZPZezAoMMcSKf1EASqwm8Rfe8i",
  "key27": "5aEaaBkVPzD3RffZpaWCh22ptQDFE299b4nxoTFmYbYHuF5TuwHikLbuDK9SxzXQJ7jin9UkfkKt32Q5cdiNCNpK",
  "key28": "2ehPCnbczj4GejzV24DBmZ1bd5outuDEBbuznPXWGV3Jk5vJ9N73LQmtQ3MsBFtfJ1p6Gu7VXTaqRyj5bHgyzPiK",
  "key29": "G5w2UkDaSPamXbzXKsParmKZssLHNEKM1GaF7hypXrXuXRtQQ9rt3f58NRBDoHN5esJNiKDmn2mxeBxpjA3oYah",
  "key30": "3jKp22p7AZv3T2mVPiLiNNsge2qC9mXmYAbo7Qkvs3UzucBnfSg1pgZFkUTN4MJqrjdURfjTUkb9x2oL1RzLN4fp",
  "key31": "3MroUjts4iXxs7mR95rJJJAV68PbmwwxjjWgiz53j4MtfNiDXKUr7SYA61byBFjNxW5Df6PXYLPyczfuPx51gAhy",
  "key32": "3n8iFMjeNrvQVwX5cWs6a7HGkKuwTYtnhihAc1DcNzzMK9fZVuzo8G49eqt3MFyz4oTrz4Vjv9Szt5hpV3vG3dPL",
  "key33": "5d9ky29BGGv8n1f5SHUdzi28PHd4GHTtF68iVGVBJzcUj2XqbxGSKkzDixcG8G87pS4fDrTXqzFBzVwHy77dmPAQ",
  "key34": "2wPbXrTG2LptFXnuNcARSsa421NDgicoyBVUUhGvrGpvseu3uz1YS9rne2SHWmAaBdsdEZuhrpuz8ShZEKL21Nk1",
  "key35": "2AMZDxLvHT9wEGHcNFixYmxMyHWkutu13ei5Jh19Zy53PvPtV3c6qhnfWavVNsfPS85CQgymm4ch3fRD8zLcqkj6",
  "key36": "5AjjpgHZdmDTE86bDKsr1oiuVKrYKe72vgt4zVUFJ5mNyXCoEH5KwA3vZ7zYz8kj7pZcrtLELQmRSNA4UBmQSH3r",
  "key37": "5Ug9aYN6tAUoL9ssP4fMTySoPtx9h7z4KtGrxJQtm5yDtXjLWfSMpJ61kKeCGqZx8HXZTD6HvnSjcxFQsD7x5JWm",
  "key38": "3VYSNnc7J7vjyXVbyuCYFnj7vVsFuXgZ7Km95qtBBgpXKhcYfygKVJYfDEUavABDyD8V91AzjvVx5dxXGkDF1PEU",
  "key39": "5BHUJBvMxkUNUfJ6CKMZCw9SsA3oPC68jH9TEfcRwFVjYbfMopSUFFg8gPpAgrMBmqAAM1Pydwpm8E6AKA61REYc",
  "key40": "62txPHm9HfkLF6AeV3Ev99YvwzjNY3hEvQBu3oGGMuSTTdG16srsYwKFbTne5iRtxdPaNBz5diRw6nkA5Fa9KLQB",
  "key41": "2WezR8PbWsvGctAn4QvRwjaX4q4vARP61KjCMtpFBL3owLm1Sb8XioTSuKRtSVrJ7tvkJi4yMy6rvQ3J5b3uFSLb",
  "key42": "3QfrAmoPApNYDfsiwQUvf7iL51yGrPqcJjWDCQ9hAryVcHL7bCwZX1qmQAr1FQbqwNG1mUgydsseAvan7yY9vSqo",
  "key43": "5dwQgw7yCS6D5Dwj3LyAp4iiQG5pP8dj2s9NNrskCJpLbxPZ9yC2no4fEmcLSG2b1NJxrbuf4Q4Y6ggMhiCz6rLz",
  "key44": "4HnSuuSpqVtpdQZaSLabvWQrMfsC2nE77EUs9pHWZXJS1okEUm2cMKfnb25CU1Ux65SbhyXPcwV5JTDdX8GDLn8b"
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
