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
    "4UEnTJ8AL1f7X28auak9AApsJYBJaqdaAfHDMb9nUyabBEvdmqsPMdCD26fxkiSE8HuFrj7S9yNk1BudJxiVTdbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EHthnpATRG585cb7Qtkudsw3d5E5Nbg7C32fkuVNTqBntvbJpm5BUtKbp1RNbQm1ULLFAg759Fk5E5c3Du7Wp15",
  "key1": "27sN5eXMLJMKjACtVUs9VK53bwP61ziaHNBq58CumYQrHfjiehHhuHefTWqauW8qby9LM82WRgPmD5QoYqhbn9dv",
  "key2": "5ZbdZGkNWsJACc5JyPatysni9DrLDyULonLsmpT8kCeDibsxoRR55dnjoF9hAdt4YDA4n4ve4r3mCyspFqqrbbm3",
  "key3": "5hWGRQu3GipMu5Hig2hqUFmT2ZKbQUQhCjqhTAAaU7TjHDpgN67rHxmJdavFNzC5Y4zf5R7NChvhMDSRzAd2E8TR",
  "key4": "32uAPQvbQ6vV3CAG1wVBYbheYbyf1zAvL8yRw1XWXo8Kwkthc4jFfCbyAXwHksxA5awRn35Y3MSMP5H1qc1CmNPo",
  "key5": "5eCTX9KRWJpiMLfs4Qph8kULSMLVpBD2uHxzK5RfSQfBU3zRnGkaHBmEaUMAtR8m7hpHciVgkTY7Y1iRJEpJiFX7",
  "key6": "3oG7SKoiDjahJ5ozEUW6LcVvGGF7BGgptKNwDyZEDvr7hLkMj6j9zPfN6imn82vZyicVME4PggQ1nNfDsWF6SB2n",
  "key7": "2ioyJzGJTUkrSpPEXkToATHmacEWzT1Dy4sAPJ1M8eyJqT2uBsY9yaxAZkYCirvHbSfMZZXGSb7GnbzXMZjoxWha",
  "key8": "56Y511xHu3GixFwR9wqhXn3APAgqCF8XtX5wE9LMjHZeLhLUcX3A1Sk548649x7aQ5MRCPNHmFaueJ2W4tbJzBLL",
  "key9": "4SYBgwui2B94f1pE3sYXJw28GP9dGnT42GL8HmKYUrMTsqWDpr2a5LAJSmEV9cVPqzXqycY1DzmjW4e2ENcEreSg",
  "key10": "2rFKqC228rhZvkadLTZ3Sqpv4wmXwyNVUskAGyciG5RMoUycEMJAGBbT7bAJN8rfwmicZaUhU9xdHhac9Ahg1gYC",
  "key11": "a9J8ojvSiGVdghTYYB7u4EoJWtr1aYtAUgvkiFTRNNub9gcoyKpzAFutaNw3VpuZqnwbVgkyz4b3pJenV9QmNTY",
  "key12": "31zjZ8eAZZwPMi36SBjbhpkuUC1tmmn6t53Cp4s5WxqSVbpxixmwhQZaL1HEh5ZEcgSQtT8WDq7FdrJBZxrANA2F",
  "key13": "2TH7dX9QbNdFFqVtQVwpqDBQ4LErwJuZwx4KicXzFW1s5ZRwyatV9qEqscywZixdiqcem2bMLSQtM7PxeCF3zhdK",
  "key14": "4SbNV31MEp4UfFtQaBQDPBXRmGYD5Rttbc7dzwf7YbDmToicQrNw26kQ9e5BYS2qtbPjdZxy4Zj9q7edWe5N2Qa",
  "key15": "3RTVcX7uGK15KpzVgt4khGSyoNtSakjaF7or7wrBnr2D5iYkzDAiAYegHnvR76xtsCxrsGU5a6Ghgmc22okFYRHk",
  "key16": "5Ht8Y7PnqHkGaNeUzpwePEFTt2DN2VUbGKJ3p82Nv7ZrwmDdM7wjvrsQaFhN4NRNpGVtW2cxuY6YNLpxLozWKWkx",
  "key17": "kcQR3VgJxw3U4SNe3CSNWY4H4nx4MZ8rc57JCKG2Gw3GPL28GNdWLZe92ub6q1Ww3qeLpDUTNkczrWJ5nzwt7bA",
  "key18": "2Rg2ESNHougUAhMx56qTdHMhwqr6ey9dLJJTkQYFmApugS31ZLaqWtRkeAbKVMVLMgde9q3KQ43aqWiVzcWA2Hw3",
  "key19": "4MFRMphc16mFJtYDodaobxVA8VKXHEB5mez2SRYvwn3cWTMER3X1Em1iTK1TuMAua9Xw4ELbpQrZ28pMZ58AQTqr",
  "key20": "3mPx3YKrmPBzFiWaYehwxHricCY5LFFKHob5dP21JiDHHBVoH7kdWLZzunPXKa7sWujBsRA38FcUe1SGkeGbQUP5",
  "key21": "feru9WJeKLqpairv7zJXa47kWLAm2L721H46XCx2fr3d1zJJisiz168vR7rX9WtjneBbw9ufxi3ayr33iGsB6Fk",
  "key22": "4eTLxmnwzNTTmh9dvAmSFidVVz6B2n5H67iVThXsUjCtqRQzhawnMTkFT9S2tMu45mE5Nx3pX6gGp1zJizCMwM6z",
  "key23": "4adRfRaBeMBEjbhMco1Svih3fg7R3ruQVCCtDGdgm1PVdEQovekXWpz6RQDZENcqQb1p2ZS4GaXQBXHMokg7xA8f",
  "key24": "4uAW5iputq6uDYBDkENotBLyKSN5MLdHhnmAVnwT4VRBjet3MeU2pB4TQEhm928oYa1bFp4uJK2bxFTERVDNwr2C",
  "key25": "o4QUU7eGEjQ1yWMKSewqFvSwwTSBgdK22TQQwKw4ct4ZivLVq9nRN78MuVYcqSuutndhR5ayWkX8S44VPMjL3kx",
  "key26": "4b2Q1xJ9dmXF7j9KioZPEq1Ks7rRKkLUpLV6kTb6NcKoC7tL9QpvJ8MXcS5REPBTembjd62YUCH79Mg9jV4i4DoD",
  "key27": "32FoSwUVMMbhYX42YqpjwHGQFSq6DF1MZPEGEpEocT4LV9fUqvBXRYTZCrePW47YLhHUY91APqJEkS3kcw3GHTKN",
  "key28": "6ZA94V2cQuWnAYRHPZz1jbTwtoUjisDN2PiAGezWnieGQS9k45H4CHTBaTkZndWiV1uboNDJqhBRE9qNS1tanhj",
  "key29": "3Sht2Rdn2a1fqAKBes421mEkEtyrDqM9ztEF9GE3kJsxYuA6WtXgkZxtDSYfMK1mKokDXparNYuzdM4yfuU2hmt9",
  "key30": "3HNFpZgTQUDJfMKUTmGzcWFL3Ewad43mYFATujZdpanwBe2mx3w3LqwBUUJrpwRHsrmcrHsQgd1RWqSzAgTHan33",
  "key31": "nkHdNLoBD9VqvgMyXbGZyVDKStD4QyGc7tTXPSCspUqsX1iGQPnXkGua1atFLQBWtsrk9dQaLZpNmpRc18fztYH",
  "key32": "5UnGfqFfvtNUBzfh9MTBxSGoe9meVTjCFKmVwqXxLdGdUpEZQMRrdGzdvFwP1fv3crdVbnPvzwMjLhH8kx8Jp7Lt",
  "key33": "4ncqVoAESzNpgqovrD6LDvAMFKViZWCwcsYiEjmaFNyriigCCNtkATGAyDZ6i4NmsfLiftfAxjPmKcJQ2poQV3sw",
  "key34": "25ZaQRDSCtrRdw5szGhbe11dMAgeyp8Vw3VdsdJn8sMq4TZafkdCdkjAAU81NhwMEAZxgatMPLcuAiz8aDGDdM9M",
  "key35": "5Ztbo6RhHAYAD3FykA32KkbnHHhnVxWz6GSUEtRbSuukmj2u6hLkotZMiRQ5XoVviGeBUL1BCHJhdteeNjTbPX76",
  "key36": "66wukbf1fZp3ZjsjFSz2Be5tEAZTPM4UiDhtn22BBWUZnqK21ncnaLKjjSAwAg8LyeNi6AVt2NNqYRNRnvFno3pG",
  "key37": "2qXQBZgC4kgt1W9C6PngrXQiFV8FfvDZRwUHJKFz1shcLVNYhYQU3hXan9NEzbopYmvZv75m5zWE2nYa6FMrcZDg",
  "key38": "4KFHPHgenmnD4cmDoc6WpWonPQEfM7nnid8TEuRr1PwWiBYJKnmCBuohUGYp4YECmKA194TUFdbpmeCSipReLShE"
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
