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
    "3xtaFGnzzdvPzp1fLfVpqeo8t16TDhsZfrcurcD5EevLv76WwzrA6hDWfrmkb5ED84Pg57qorbXRM8QUhEsHAxjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skYLfQd16aNjK7SEFtY14KZ41sDSYUxC7coJ59vzvBxuAZmPJGTcXZQkLETU3bcbtiZ4PtF6BxJUYWz7BsMXMPe",
  "key1": "2u8fnhENiXjf6zt139bAg1Sk9xSvpAYfre5MoYaJd6PXR1u4w84LrHm5zq1q3gbE5ndLoneXHuSnqJCVTNWhKDyS",
  "key2": "5MjCmByJWsPMAwYU93nFbURyfMLK55WXvU1gu6ErRPpB5DCNz72LVVgnD8BqnSzCgn69SwGHg8gUQC2CDi8kNouB",
  "key3": "3sZWh6xbWN7q1S8HVDR1qa2EW3NH1S1jqaAPXsezd6xo5ME9XiX3L7aAWcPaz9gBoFq43jxANZm2X2aNZXQWBsVQ",
  "key4": "5gyGgLAPkE6QytdVADJkGGwqYGGg4kBVhghSyHY74NDfmieztFa2CjRrPBdfrjeAbT8nqbgxqsAe9fh1jXa1kMe5",
  "key5": "3RArz5arG9TF3EHhTRK6aNUiBDTCmB71KFPZPGxzLR1MCNR6BtuRTkV7Z6h4shVumVV4pumM6jMtHdewj2k6UFHn",
  "key6": "4TqW6UHpAuBcZdMGcRfJE2gPMZS5iLfnLmR8toKeVb9Lam2Ag9WSNgudUqKGZuM3mywnNyZc63trZP2VVEyvcPMT",
  "key7": "2UyapASJopAK3EQDBD8iqgamHxmNqdzWerKijdsBsYpyZnBi1DZ6nVejZkv27QVjd6RTkotj5aYgNELXe8MSsgrY",
  "key8": "3mAcMWgcniJSEETFPJS9ufwKajvNqfJeHQqmCCcBorfJikZKyLAkSGMaP61MSpknNeBh4W7Ym2Hgmuf1py5MTfDS",
  "key9": "65cujiwBJWcHAz1NQQZmgzZ82AZbd2NCgpBc3pycDnPupV7tNd5FLf6fauuFPnbC5kDL9Cwxr4ynXSLsdWEjWquB",
  "key10": "2feEXcsyCEiAhJfewDjp99t15wp2KFveq9f6mJo7TgvsY7L3WzDDXeJdmxSugDxvkoFiwbpfXM3d92QKMyBFx1h",
  "key11": "2VKWRnEq38hvRXsVzxg5v53NLBP1PxgHXC5rgRKwsoRT2kDKujqT76NAgTXfQxZ2ELSZ4DRvRCi5MeKz5dgUaRHr",
  "key12": "3REJSb5RhXnQrUcFSe8oTpBjoAkBixPw1QrNf8aEwwuxwCwsa9ipfhDMkYBvBe3DH58SCft54ecX9y4Rc84hrT3",
  "key13": "4eyyDjzCXw8YJvPuJfZPD62fVsFDcmfsEcaHembSr4mA6LKadrwtVZSwGPMULizzfaLs8v3nG5JdTSGVMANS3ou2",
  "key14": "613EPiSbHCg6g2M78Re5jfthbnvh9wwyyaMpTCvQmiWsWeaX2AekhnUrx7V87drjhpJqwp2i82Y2MaymM2Ep1fpn",
  "key15": "5gPFGvkzXz6SZeryawaXzTLsvTJhoBksoDagYvGG2pVLBL4vbt96pWFcNJQDdCprxCCjdXiVb6WDW2mY3Ttn7318",
  "key16": "25L11RuhQvqACx7PQZ54StB3W27wG6PucBh88t1PEK7FCj9A6FLKba6VQTb2aEUNXAyHx3hxEXTjufm5bTZNrcG4",
  "key17": "357izpkkHFusmSy4omCV22yUvSgVqhzn14jguP2xUG7YCgxkvxcGwscwXKBazb8VnmFCyRt7QBPN5xKQdFhpPMeD",
  "key18": "555kjpUEGM2Rd6D8GfTYvhSsrc4SyJdswa8qJdGSteokcBneudo3JJTw8BgzqMiejWB7PidgYgdNgkSYBx2w7QeN",
  "key19": "4maQuv71kpxQwYmnfTWSmPVD5vQUGCcdNc8Zedkdq5yZaCeCcM26Wpa66L9EdFmEeo6U4j2WpSrddNZCKn7ZNsb1",
  "key20": "27DKUsZDPkzj3VdL8Fq6ExCPtWYtyyLdjvUQ7JeWxX2up7rsTzqsVWXfQsmFE39DSX1xCUkffWYPuv6sujJnrBPi",
  "key21": "CNmhog5TKPa8wUpPe8bZZj1pzo8r2qZLNPAT6UmxwXeHMHLzYbnWtXkMojcTMS3HwQjaBb5iy1VbvqrBYDAUAWy",
  "key22": "3fqS3MCCwGheu7PKcKqX9BvcLVjzT9TyzBpvJQxQviLfkJjb2AEkPrLZTEpDQFouVUPN8EiKrEguQqptg9Pq1ecr",
  "key23": "2trAsKq5yrotAwUS3JUxEiBPpTQdo8fYJB5kddbyC94b2ApTwPJe2ws6h1FkN7cxJ44exBfymJifsAeLSELKPmvW",
  "key24": "3tk9frzc8fQvGLhUXFBZC5Za45EFgY4vDUcL6UDD2TwBHM6rtJRaMsTkhNESgLKVLQa5jLiQG3m2H8AdHexj498D",
  "key25": "C5MSrk8KX1555fQES14Q5m1cdwjpN1iL63qc6LbXEmsXSUo6VcdsjssEktd1Ap4MYH7BfpSJXmFAWuQ7PYiFt9z",
  "key26": "65UTisx5N1iT7sBCNR61LLKTT71CwvyQEDdcP3dTJZ4gTQUM5Dj4GjmZ6E6CFH53R87wzDQj9QsDRhcDy66V6urx",
  "key27": "BHBZJ9j82kgF3eseCF2B9SCEoeYcPGVD3v81XNHRriTgkgQuui8gKKKidP1tJDx1aStK3DMjKus5vBZcgH2sqRu",
  "key28": "PSLbyCYVk4CKesUVH672Jn5mVNsP4oAgW27GoLtBq7UWSUd7BvtWDJ4Rfqt6oPg5PLx2mZeegawDHpj7u6Wfm1T",
  "key29": "3Gpe2SuPkZXDt9qCdoWCQyFzDxThDxuC6mBNv2m1yqbYvSN71NgaJ6AsGwa9XHANTQ1yYMvzxn3kpzT9ZpEeoWaR",
  "key30": "2Y5MbsCBS8CRwhAgn9oNaDDEAYd2vPvu4g2dU9xiewZVeHBv3PpRrMfyN3KBK7H7VRLRGjdtA1q64fQ6AbvZhNvh",
  "key31": "188vNsamxfmo1zgSLhBhZLcDoKqiSfJfBGToFhrNC1KHfHoezR6wHsDrxBQYVRsYzRRya2J2b3eK7UPhVDnuby2",
  "key32": "5ot7u6UqKCGgvx5fYG89r5Gwe78SrR9gtnYiWfk7RvP4WRuQoXmsjfNGZDqpL1gV2skeLLectwr8t8mbcug2DBds",
  "key33": "3iJyFBzyNs5ARMk5y9p94qeNedqxRSHPyYv26cVZ2pnixXyosMU9jzuXaTipWd9KUY2iWxGHYt5Xn8H6gVA8KTs",
  "key34": "31fo7BVAhhtJjBqekjvsUoAF5DbbWdaBMksUTR7cadBgp1pvZ4UG8ciPmF2km6aSV25J1xVdC6yTcyzmzch46twp",
  "key35": "UhPLz8eGa5W7MbkYXNEdkrzuJC2cLZWgAZZqkz7tc3EhN7qUNTZwe6aC7wcCdzEhKnd6dyUszWa1rbUGmCcGciT",
  "key36": "4kN2bqfvBkUN1k6eRF4gdrkhHUfh267JR8LKZizpSCRCqwxK14KDNNmgc1xefZkVvPZZU19nHQUvDPWq6vF8xWk8",
  "key37": "3cLwCwiQA5zqNupFKGNUufu5A3C6LtFbBWSPkg43jeQ9hH6cvqCEzjpjPpqmvke6sahJzzeJZzbdNvm2vv4UCkrL",
  "key38": "4KVdNdUgWsScc93BG941u8kpTwgKjCxoNfGAFnzaTwDTdpTsnqCbJiXtXxLfJe4Sd8y18AZi67p7FbYFuCGqLRCo",
  "key39": "aqi6eYaQBZCJ9URbv8pMDekrLv1NFiDGtDqg3fkv13CpSVcNfTyE9qXY367DqZWKzzuT2d2aS4oczuRPonZexUV"
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
