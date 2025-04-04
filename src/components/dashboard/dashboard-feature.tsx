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
    "5GmHYhHkKBwPSR8kC6VtVgZwfmAGuNTcRLBrLjU4hrwivBKcKSziFoFRJa2fd2MAgXohZdYXskwD63wNeW3HcAjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTbkThB5t2nyHGykxgY9gUHYhLu68FcRWdwcUKv7RYXoqrMERyZWHBEmDpcGG6H2x2Fw8iRg8vezRg2aD4CxDxW",
  "key1": "4uHFcqXKBYN7jYBADptc1qms79KfcbF6u6YQHGm8HvufQXH8Jt5VfcZDmeeWoVUa6TiTt5PEESt1rjFFYPEBtpSX",
  "key2": "5pmJqjspSnW64v6zpdyL2DX9p1HDd1fcHwz4Ba3eTrMp2upyLATFkF7m6YC6a71z8VqmiNZ3xiwgw7bQfNzDYJF",
  "key3": "ACiLLsvjFTtzYeE591YnKRajnipQDudWNXLahiiUfUHZYDHYwv9aBMkAoZ8Nt4fX3dz3bAKymDTTsGwF9FMbF4r",
  "key4": "u1DfYZdiDVgj1D3X4CTe9wFsAfD1ZZAxeyHcLZuAbWDazpNwxW9bnhxZt51rv739QgckZCvMpVZQ8JwgLdz1pzg",
  "key5": "63hSe5nr1oXXgmKbSmUncYdKV46S2V8PZpPrvca3CGF9aJ9ESC3MWoTfYH1aVGWhedVhX3hAhPyEpAcgGVTXCX5t",
  "key6": "4BjpF6UvL5W7ndacKDuDzC2Cz1L4gUN1F1sATayjkmzuxqD5PQGr8snBWxazeTsshWdPQKEkresBoVMyn5S9Sk1p",
  "key7": "59QPXXoqZRvQswdwcYuoNatJek66vVXYJCWDnMPs6FDjn4Xxo1jfjXqaTpkb1zEterGmvT3UUnAviWnmpJfSu7aV",
  "key8": "5H4PFLZH92CSEvGkwWqxkA8LthZgf9ySGX65D5187uATLYF65TaSnJAWvLM6h41ifAbjfChFF6NZRenvdYByUTCa",
  "key9": "2mgYrvWJhq7dYympc4DB8Ag6R19mWu2AuDZo6PfVDhYkBhYfbsvp8aJLzDM847AvvK8nWd2fEjuSsDNxHSLYWJAp",
  "key10": "2kgbnR8452XT4ZogPtwwqnttZHHEQYhiKt2AQQtgvG4ikHC6tpS2QGyKTMDJaSSANaLnagRtpSHMMH5zkgYBC5xK",
  "key11": "5xgYa6UZJFDuvD9JRmNiKXdNdYrpNyHp8SFprWv8ZCanCedihNJBLEGsF1o3QMehuxTLAvE5p5kHCrAP4FVCR2JK",
  "key12": "6rBk8XwHkcY2jSEdFFGJDCtw4pq9dr3TnG4MVNLNj7GZyGPMc4pYKqyseaVtq3goay3cLd3EBsdowwASEUwK5fU",
  "key13": "5kMnTbXkm1rFjXAPA6P6SFtPNGA1ZRquKcM4P6UeWEQrC6y56ZoA6GaivtSoCAvrNfsYsVszLXtgHw4D7DpMDiWE",
  "key14": "2HvpgYqU17nNCjgDY77mUGiRzD4WbDMGzD9o2dRKh5u8yt9GSpDS8ewpNt1toiikTfrcZd4ujp5navdTPKresfQ",
  "key15": "44AUfApiXoKdG7vncK1Wxv1jHvgTFetcp2xCcaU21byd9Ub8YeNk4EGNVD1M6Li3FcxMdVrm8NdmdCLAZYZprfZg",
  "key16": "5qqbuvi87MUsEAfJ5A4BDgiqb1y28hC8pBz2DJW3xxg2jcJw7o59Lprm7TmFqhE4ZbCenazN1gCqAuvF7V9nzDNQ",
  "key17": "54v5HUb17mY8aoDv3Ut9JAg6nAySCoGNyAXfum4YZEJjCKwCSusvFunkw6jNk6ZHa2JDdhTNWuepupusJAn1y3Ha",
  "key18": "2EzNiAK8DJ88grLkoPYFqm1T317nz7DnXxXxXuZ7j3D2YLQENDt2k5XWKTYHuwRLUQri648zPiW17sSXqG6YpRxE",
  "key19": "3fUbKBn5zatDKfAF8JRPuS38WBGzRapKdUHf3xMaN4CSvHTUG5NUFwTjX4bTEhshKzMmBcWbjp32NnPxXta4jHSX",
  "key20": "4ztk5yVbQ51yAumjYd6WGDrJH8URh7RZzUdBZ6mjxrA8q7SxNjNrdSjU8jQdTgV42kj1T6A8ufwvHSU8vKMUHMbc",
  "key21": "5HjByXVT5FF1psjE75vgsvjswNAdf5x6BwDsxaLjfR3BTM7YrYteY3Z1Kwo6SVm1nBUKxDcctsTDGMDbwu1ZKnF6",
  "key22": "3bm96CL95sSvJa3LS1XCQ1kMWuW7BzMKUGdPDACiub2aJSZ8SHMtDwm567iUmpUhSyHhWAyQcJM5a7YpxigeHWXY",
  "key23": "3bpGKePT72mYdZgEPgrymMWhgfNkd5PwjaN5Ng293AGDgwaSjjQvb6dxdmu5EpG2iCXG9a8ubguNUPu1MaZ2NbEd",
  "key24": "31XXQjULBeLRzg5HcHNUukWNFwkZ5V9apC82mtob18MdVjHBaNAwggbz8qbhbyDXompeUiEjtPMG64Rh3iPbQ1Wo",
  "key25": "25fQ2cvb4xRU5F8wduZ2jN1SdcgN46hcV8W3sRNCcaTzdmU8hhnzzbcbCYfbsmUvyqyPh9FpE9xgaCbKWeqnxS9D",
  "key26": "seNkrKoJzKQHKWu7mtE27A5tbihNrWUMRL1eRBnNUi53uLdNHA9ehA8etuy9SM367uZBaRg8a78TVKM8KxJ7r9g",
  "key27": "4ENk4AnDQQMfaCZqMnxWBoJbz8VmpQrZWhW8mPvBuH6Sy5LZCezkUNAAt8TFQfeMNFTWzFPim2mEyoGTwncSyAfA",
  "key28": "4AShgniPgqrsC7cJsrCbJbMF1Qo8uqCbRQmfaZWwdSX42CGE41nq9zyfut7jWMBUSmaS39U4hWk9myWLWxAr5sGJ",
  "key29": "34A5bL7rXXQ2vVBn4FREBNacdAHBPf4EHoW3aws5a1F5fCmm7RKeCsKXNgDaNAtNG46M2BBsPVjsoEAtedA7KDb4",
  "key30": "43juH3U4qPgAQpTGcaJ4nBC4Yma3efxTb6c6KM1wCYhxJeVxZut7Qtu6CNo6MH6QMVqyT8LdjpMFDvWZyP25wXLP",
  "key31": "4fh959Ls31r2TdjUS9wD8ZqV1z5kGUrToxxB9pKLwJr1TFC7WCPemg2QDAjvjxymP7RBexyrRg48Ve6V8NB8c2GV",
  "key32": "27MWhdksMyAvRLHXDGaP6ZYdminUYyQe1JSfWAbamTbH7ZpdGqdp8Syo6x2LbA1cg6v3hYjCtsF9Mdyny1mkd7dP",
  "key33": "3GfMpQKMqWyy1oagWKuDv2zM2hz8dPEmajxe43pu9FeWMpBcjpGgfnjhfCajJeaddCJEPdy12Vc7iC7hpB8vCgcU",
  "key34": "UxmmCXNAuRpd1HJAhtUa42Sz3PdQ6CLXN23Tzfhn42oau2MEkppc6zuu9YgB4RVPqUrkxXwuYGjMQnjgeSReRvT",
  "key35": "2ibrapjEUPptCUtuGVH1NpLuX8ZUtm37Fb79ztxwfzo5sLot4HeFX3mj1yPLWXEJVU4738MrrKtaiwTUpV5DHZEo",
  "key36": "57zzjNFpqwBoTzqZ96DWSXPtp4KypFZN6GDa7GJuE88zV8todCDmV9YenZei4etKKbdXqjc86A4CXNsp74y9rcME",
  "key37": "3hdvi2wbvGi94soFGY3cQjiKXJvDSRxZ6CGqj47ecL4CgoAZ1dcRodWc7GFS2Zc9sfsLBzScvUBUQTSrvi5Hnm3T",
  "key38": "5zSqbRSpnYMyeXbJRKebn52dWXEpXahCvucB59p4nfTAqisQrMVU9RN6SpQ4i3BZihCddj3ZVaArJyD83JGGJTD9",
  "key39": "2LKJXTZN7mGxQmaHw9thbaE43d8PxUfZLmdbjjDttgPFtFBWtxi14QJACXXb1DJ6HzKa3Tng1APH2nioTgzudu16",
  "key40": "4vGQYmdQUj5SUbwZwVpLj7z2MGHAQWkPiVxLL2DPFHK91EoVMmt58KVtY5E6XLB4NSy8QHKjC55Q2JHfaKaUjzLo",
  "key41": "KAe8raZA4UjtbXyUuyheg1KGS541ciApRxWcXG13wXGhuZ1UrQ7J6fxxn3RbuX4h5zBVapTJrfgntwaR4aRecPU"
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
