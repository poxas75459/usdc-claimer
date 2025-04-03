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
    "3ugMPwKR7LXJAG4vzoCUEsQ1PRshvgpLqGCYrtR1KniNMB99ZTUayuH9Q1G32iSvcfiguwzVK4joaNBHCyw1JpR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V9nb9sijiMnnoRBasBpcYrDk3cViFbUEw8CpNvNTDS4EyQAxajD7GMBw2A84URuLd2bCLvcUWQqDbdBmdFXxXdT",
  "key1": "5aybhsr9wXdX9x1YEvC6voPsW5EBJCydoF4aQDGWUt24X1z2KE5UPSgcw9XpRittvdYzQr2Ckp5YXCmk4bxtceEe",
  "key2": "xxjhmengcQR4GtzYb1txGQ6h9HrptKwoTbudJQjYCW8o2jLpaqiWiYaJbjBXWhsUQfWppmvZz2WKX2y52toi2UA",
  "key3": "3WMWKQayj5vCNnEE3bpbCVCq5ChDtyen3vPJ2cBos8bdFJfFGG5PeMcUxAG3ak8gsYnfVns47RbLyCGZRxyKLY7N",
  "key4": "dhwsRi9fbbTpAbFUS3up6PFBDv7YD6TeAQ2KNsZMQepKArkhroqAWWgk4ebuMizJaENsRGLwqPxdyxJueFeAExY",
  "key5": "4njeqwoZcJsoQK3pNKf8W6AE29EJ7gY1B4StjybKVmdWM6sDn7ymDravjLyhGsYRcTHNKwykFErSfrEZDAfLgqkD",
  "key6": "5k4GQpr8tbkMXNCpkxnFMXdGJh4ozzVN6RjGtMRvmXzZjuLPNoDCHRAQ1jos4sCF9zMW8v1sRUeSgmNtPqL7pWKG",
  "key7": "5oFgBLPWfaRL5DsoKdCU7JXKadSt6eo397SaPPrg94FmDS9rFqPK7PfxWohJfQ71CsrVn1G7hnpwSCLaMe7Dd5zX",
  "key8": "ictMf4zZ2DNep1S2hZ6xbTycWf8nPgXV1bgm1CgxR6RhNE2YewUhx4r6S9qzXiZyDmqjmWarJXruxrodZskiiuU",
  "key9": "ijvTw1R4pk9u8SQ6QRBKZYaNZpLfSuuLsvEPbmQFHpxPYo5hAD1mQCgezF5tNYqdxGrSRF6j6zhL2bHhPv9YEJa",
  "key10": "3SApYZpGSrzjKDXKdMvxAX58wCcm77rSU4E2j3Jm6Ko5g62JhPYRJqgFXkYjHBQ4PxPhDP5ij3MjXDGfLtYdLJUk",
  "key11": "4DJyH7K4dLPA9FGMnAfqpiuNvwcBKNCFbxcFiyEr2dbPNc7vnMswpoMZgxzd9hNzgiTW687vypHcfkXaVM1VpoA9",
  "key12": "2WpoCSN1rVA6DgrE85fw68ZT1GKPgA265sFojXwm8GRWjush4kRkZkVfvgkpMFYxHpHdpNScA4v3mtpRiAErhx8",
  "key13": "2Ajb9yPVxsZbnGQbS4F4RG6yKz5Q6AUtwdGyqYpgzTxENp6ri6qfe5YeCLxdozmkr9FDd4UykyomBxSanMJJJ2B2",
  "key14": "ytocYJ611cKMPNdjPJTC52LRsTnKYF15axGJUdLD2WfedajXdFnnP1vzGMRC3cFx4ZekWvbXDhWV6DhwkXiM1mz",
  "key15": "2sdV2AZ1pWemZneV2KoJT6EeeskY9ovY7veZCxp3W3Rq1fFErtFqaN18Y3yZhipNpAtLhhLqELYBrZd8nNoRiAD8",
  "key16": "5L7P5QxQjGRyQSnZkNUCssnTnDF2FfEokENw8FfGTYHtiwNg3j7JuXzZRFWpgPFGFaEFymq4DpDyaHiiJwXRVNWR",
  "key17": "5xK2qhUFyxmt1s67HipStqxqZjaASQUDRQ54fU1enHUaNE4c4FRwwUJ7LBcNSuHgYRqHfG4czyRu3aN8WXHVtX9t",
  "key18": "2fsFYeU1FM1xCuimEymdSi2oXppfahWN5hkuoX8wQWCPePrCSbFpAKu7eSW3uXZZrWEyUFuEdPz9TQfdsisSZLhn",
  "key19": "JqhJb4hEPfigsTLZd5LemcuEHc9yXfiqmHHnMCLw4iXRAZavCPavDSBaKMLm488xqMLTJaGinKaPKTH38WujTwh",
  "key20": "3SyuPfe34x5JSd2fUtjeQLK3zEWLvUjchepY1GfSasFSFXmc235ezb7AtvMu7DcAQ7p32n1QvR3ajEFSfWBPu7vv",
  "key21": "5G7MyGmVaQvwtGTFGfRsFaW97sBQzAeUFUXrXwZjgiuXoD51dJerr8Rz1MdjE89QVCEntfrrX7zKYrLb1QCfFeEc",
  "key22": "34DSVvDt42BhiZ6MKtDaaoWkcHSgw6tXKzJHbQus8jnMSgjBGLahuaMvsWJqzNm1T1wRg54v4Y2o1i2D6VM2UW3g",
  "key23": "5ppiVfEJAT41nbFq3VHRrCG4nKcRvcyHHdAA8AJKyCQFyXd7CTXFMbjCuTg7mgKXG5CFm5xmboozKH7GL8aXGQ23",
  "key24": "3m8WPcr2bR8DtjmDoDFzRbToTPJBvchPiMSJXP2GqSaLtdpmYuqgA72N1aRe1LhcaUTCHq8CQfagXQAZ3qXmBMJK",
  "key25": "2RYZyND8HxqKvE9DPL1Mg6deGjCQ4KsZZw2nPh1JbakHsxbaCjWkHDPHhYotDea7HdLfQiaQr7fpheRChqjJ2n6Y",
  "key26": "3exNNup54fGktbpD4i1f2pDiYnykCfuKfFu9eiberqnZaUExZT3TKHVVXaViebZVcAkgStk1X8hVMAEYH7muRZGm",
  "key27": "XUWezA63nkx7c96fotPXfXKRKn3XYxXsr4SUe9pdXk58TqKjSGSV2cLYZGhUg8SFt8H7CGoHbCB7RB97787scmy",
  "key28": "5yrmhLiE4pcM43AS31jp1ihFqDLLsd468xnY8mbkh5WKB8Qz8dZ6XsuGCthVWRjdyW8qdNK7XiexqyVXtkLZvdKr",
  "key29": "51tPEkNwt5HbLnuKJWFufDiWcxRtnSU3ts6QcJYBL5kWXLZC7VWhK1BXqrABtV9vgp9ruMgYvHvsoKp9MtKRvyiQ",
  "key30": "jBgNZFPdnJNMmA5nUiSMhgdbU3DHCbxKhgLmCdZTNKi2ZEoPJeRbMdXa2nSPDWi7JVSaAj4a3EMP2fcKFMpEW6C",
  "key31": "4VTr2EFuACd7UZWqcSkxGEicfuF5i3cMBkCCoeJop9gKWhbqTuy5qLpF5SxEo2BTZrEMMiYPVFChR9ZqyUVMQoBC",
  "key32": "BTnYybWuXedVZ7J1SHY9dUWGFzGHAW5WmKnW3KTDhcLcC3KgrcmeveyZmJMKCRoqdpsVQbR9ibb1xNH1e7WTK9y",
  "key33": "559Em4ocMfUE495KqEPKMs32saDLgEXmbKo7kt9SozoVSj8CHE7f6oXd9Svc9qmKaLYpURAs9QsSRhvoXNwwDxVM",
  "key34": "5KHFjsLSUqKDaoW5YKnVBxciR1brsPSMHEdJhMTAjNkd13Uq93jAniyN6aCvWMLHoJnVrwGUUA5UzjvW19sXwLPt",
  "key35": "5paGRsxssrXCnKnjd5Pa8mp3BF7oWrRBtdnwxxaFmWi6icVQQLKFbLXrVJAvx7DrvWBmCnyammUxRicjzjoGTLgG",
  "key36": "22WsDxCchFHSueozxL1Eh7uZ2k2aJr654H1JoEHMZHRqsTjoQhxF4F49ijPn7wSkyXTb5KnH3LaKYNmmUPH4m8u9",
  "key37": "2XysTPeGDzjGuybLbHzsgpx7AsrbGH5zT4iidzXGun8meF6RntEkzsoXa1FmHKmL8JkM9VPZEiutxtN2yBGakXyF",
  "key38": "3hKTaT6Awge6bwMqxs3PU7y1fRqAWTt8K2BTK48NPYiVWZoEtiM4ctbcAaPt2yFz4FkJaYrqaq1SjMY7mtEiK2kY",
  "key39": "3HNoqzgYZ1Z24SVFqXtznkadcGLLfHeC2Pb71YeTAh3n3nMcrj69uSqWCqb9RdTmjdW7fQqBJ3MDXBNX75bh1gB4",
  "key40": "2LMssT5qRRdwepNjDyoqQgFCEVAQrQ9khfGdPemvMxfkMjYzdkd1uMihssoR7rnXGEorV7RfS5Gs9t8KKGojv9wV",
  "key41": "3KiA8j6PNDNiFDtXgKGCXQhxRb8cJRBUYeW8FP1NczLCVDdoDjHsN4nGwhweDMDtes7E3bkwg49LgD7Tddwm2AYr",
  "key42": "43LE8z7U6TLC72g7TzGt13HdRUdLki6My7e34QEMRFa29nfctsTtgDxiqVug4hgs4eQigFGfWuRvtjXonbXSHVwf",
  "key43": "5jC2jsqLNtFPkpx76emWSQxXfMEXNDj4xLd2FBmoWJYLiuwBbW7g4MYawgZDSWFDZtzwoJLHNEYcZpZjFeuRgjHY",
  "key44": "r9KYzZNfVM9aF7y5YxaSGkUtJVLA3ePNBALuU7azk9TzvYrTPAFbrUPCstSPpKTKtPeMfiqcdGGddwkCsfP7mqh",
  "key45": "4kCMaJAvkWr6YCdLrh8Qvqu675o84smQzQGp2XekUqCueiT6JwP7QJnAKwhcXVoN2khb9KAL8F326mj4LzMEwe7E",
  "key46": "2MNMa93jdsdnuTtQpJuUi6cnXyoX4HXWt3fZtya2JmyBSEqF78Km9bqJzg6VRFBZuZor2TTgW8JmCbr1e7oP6ZqS",
  "key47": "BM5NeRnbtJUnnxon1X4TkHQgR7e1TiWDvGPfZcNQiDWfvCmao1Rvr3H8hpybR3x31V6HmgVkbT53YSeMXCzf8ft"
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
