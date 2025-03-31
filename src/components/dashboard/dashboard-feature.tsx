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
    "593XHPKpUwJurJK3crFWZ9UoYQnWoazjFDsBKPERZfxK6aRqX5ZeEzSK5Jm8KW5HWKJYYRpDXdc7mt9n3UxtCy1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZPddXcR7F64KuNdRsgaoXG3KjoGNSTi9KdbaADNsCEvtwMZ8upvgTRSbTb8dngqAZVspGr4nhNAk8bGpHvoBoZ",
  "key1": "rBF6bKSqPwHJQVVAcMWyDF5eTGiMKT7nbvPDJh5KCzAwjZECH82sKXqpGuK1PXSDhebCUT3q3oJLUoJFxJXzErC",
  "key2": "mMQw8QGeEDGJkJkTVBCE8nDWqroQ4QnPE2NH7RHmoFem5PAdiF3g34cLds7Sek8CZZXmWTgLZnMnpysbAAhg59F",
  "key3": "3vfXU6XCuU5hWRG7jo8J5JJ4BXZ4YY4atK4ro65sjy32MhToxGrrSUXvSWgXXAtJoVRu1TDYMQE2QFNwTo9iyx2u",
  "key4": "hJq5DP3FAP8uoFn2rJ5fS3qMngHvccUkDamYPoPuJ4fK6Rs6aFXubjU9RngoTjBZvaz6Yc8dG3d5JqKut9doRAB",
  "key5": "aorgcPEtwxwFJqgxvUDEqic7fJ1FPbJxHkuFS5AWJWi2uWS1QBWVJAupqT4wBv8zCa8oXPiZ3AhnvnoznB1vi6p",
  "key6": "2f7Uxm4gchBiWyzpfSPEywhLPqJ5ojoaePmohBtMwVrWyZH84RzTRsWN6BJ6bKNa6LdHXr9fuQ6dGLHUoy7ibFAM",
  "key7": "3PvKt9jrbUojdyAiNRvbNe1c9Yk3u4iV99cRfisNXZzZw1idHrFZZvLV94fqqGU76EwRk61PKURm5zK3GGyM9dzJ",
  "key8": "27aPaPxA8UDibNKeYchoBLkgMjgTceExiRWQajRkCZ1pRViXMvebUXwmqnwgtz1co2fJX3tEgG56p1uSu8qjt8oE",
  "key9": "CHdSyWb95z9wzD3Gut4Ee9N7YzPL1iW9smiHJq4z43Dx2YfrUNEnvGfKz53wCFS6nPd5Y33rWGVLwuMUAJuLhDR",
  "key10": "kseyQEY7W2wUaPnLWHEyemcbbVnYk6LgzAKibBd62irxFgYkjyJP6BWErEEHEhWTNUF7jKeMYwJRGwBz7Frbz9L",
  "key11": "35sbhexvQrjg7xLpPJMKguXcy43gbbJyXFjkhQg1d1s9eTWHhZ2AtmBxyg2h9uRvP2s5tqX6F9i86aY6ewmR7qu7",
  "key12": "y799fp9AEMGFpfgZMpvCiwVZZBx9VTMerdU79Tf6RU1VLLxrriHE6C3w93eRykE9sMeNbYDkCyoc5JDt78PxNXR",
  "key13": "3cA9W19hHhVoayhkfF74GHo5xBFak3HoSSw3T72YtMCBb6ZCRkEMZwoAiYMqGkFhEk8M4mZGgb5wdLZJwn1jvECp",
  "key14": "42mGoxXm6FArnbptwiatCijxEtvgyzJjpoo91Ja2rb9LZVw9hepDPg7NjRTQBNXsoJNJzQipFWip6Myzbv6LTcme",
  "key15": "4jukeS5EgCMzXdmWJep9uhcwM3CQkUP9BFTukM8p4uSvD3Yf7DEGDzNW6gnJ3xBqfyoSEgrjE71sM5mWBf7ZJ3ZL",
  "key16": "siAukeSyznmVqpUgVxoH5ZempXFPW9JZNiHiLYwBHpb4N4djcg3bCctqhNoBobUpr3NRUzXYrXaaBogyLPYwQdr",
  "key17": "2h8kEFJqYwEfy7YqWd3Nmdgxdg4RnHEiksSWXFuBVoCsK6o1hid1CzGnamAR4iN1FqAk1rVjkvhNbVdjwuNcgcWM",
  "key18": "poWtbYNibzz6afCQw4LRUyrYoCqCgweuvBzNsT3eSuxRbfGjhnntF9zZg2EVKqvarcQfeH6Zs8wzukHf6tk8Bwk",
  "key19": "5zjhmDYJcjeNx7kdnLSC7HgjZapcB25J4jYfPtRfkbLafXekaXFZmdLFZi2GtbbizZtJsKGrV2fbHCqfpTUu2q1L",
  "key20": "2zakCzYXDoon8STx9fV4TYyHWA2FJBXD7urUEZ8ovY9u69Qu6XNVjCLL1gBvUQX15fBPLF6qyBoMGRn6Z41MYo74",
  "key21": "2owuYUh3DcWnhSgL9pqzne8GYerCiohNM48mqVsiisSynqvCh7aT8z7NQ2YWDeKyFFmXGGoK2YpZhrPW2bgm7yuq",
  "key22": "oFAMxbqpugaY3crUJTTj3nf5UriUEn4fk8uTZZ2Js96JSrtmHv4E3TPqhKG9JHQCQHQLbTtAdf76MM9uwoZ1yMr",
  "key23": "2dSSRzgNNtukFj9ahUrvJoy8pXmB9ToF18zqCGP9EBDPpJHgSkLYoE6wE8jGEKZUe41uryStwdvCKZcH4jFH6tdL",
  "key24": "LnBo9ofXcjxy9ogbr6X43Vibjgw7cPWTGQwkRBtzSUMgwNdNJJmX1HrVHnsRtREq4gJiz72fwutkUTnuhWaYa1W",
  "key25": "L7tcVqwArWvpMG7TnAWkgJLFeoAPeEYXDZxKgQAA8ABMjda1XcquL4BUBh46dFX1uPSUhSNawq9WuNJ4BfoWePF",
  "key26": "3tSSjxPNXtLtcPYsiHan629brUSfXZJEsFPJzotAtbLp2GXpeSsXzGCHg5Um6vZC8KNV5QTS17CH39Fqu57JFUUA",
  "key27": "2L5NFvN5PbKA6HCu7DmJPURQdMJRbntiMR1gfVghWEMB6188KxPu1dbnJ4Qfg2MTmNzjq2ZUX5Qaf9SoXsSWvWsn",
  "key28": "4RXVhGp5FzUXw6CAPEHPNY7oCuWXMY1ZwV5CZCbw9M718xnWouxZg6kG1QuLkDFmZfdMZ1M7RRU8QdSaHUmv5Xws",
  "key29": "3MTyiWZJEFnsojPeJQEGazZMJjkP9QdgxMK2jAahimzGq3rhFhQvLx85gBLQy5BPgHSjQsL2emUZBzJdZ2mLRHvr",
  "key30": "XsYDUtCmkQgjQCbNMdgijAwgqaAkPJeaYUQvRok52e3p2Fv9zrwduq5PdzPBtHgBmkrbNhzZV3YeqhNNAbkNHXC",
  "key31": "eqZTzX4eFaVoMjaQXakPH551yiuFVQLS1RqXjvDiakhj3LPoBv6wmADnycx2bjVdxQPPR72sxi254xd1NDQDZ7x",
  "key32": "31Yhw4cJGofDfTYDox7yAmRrHKRXpsjjmRoFaN4ZLif87r9BQiMXiVgeVbHKnLdHt3srm4Kvg72przFj5BRHccL",
  "key33": "gTiGqu76raRuwdoAgY5P6WWocPh5u3DRgoZhG3auu9GN37MQVo56YZw1PoHsvGQKWewRyaX4wvTLguwpxkEqtiF",
  "key34": "2bRS1CwjperZnTUiJci3cKvz6xKceuB3SXDCos9f3Em2JZRDZKFqkcmMv5isE16BaKpuLhikmmz41Jf9J3PWqRjp",
  "key35": "26YckbFyUpLbwcjMBU8aQPd8LBBGE4FWiHCCbU3knCSrX1vU4muPoyxLdjxXwYu7GAeskAfhTKdxVCpqupsWDewt",
  "key36": "2McrM5NnC4ccQrgewQhLq89ZLcQnr3d1YyJRx6ZV2PNdAFseyUDN8UqRpSvQRNeyzHvfBdwNPU4VhL66mhwpKE12",
  "key37": "bMZ65bsqnnF2Rf1Bm2n8NXCepQdjZWqxucjVgQxrqGv3sfEEJyy5WWqhMH6Y6Aowz1rfdZxyMCr6eNarvrM9Q2s",
  "key38": "3STxRJeUo9SwQts5J7RbXu97eL94ZJw5QnSAAyefVS7nBRUzQNdu2HsHrPuKaUApZqvtcqe4XoZ9ATZDJ49qvWSW",
  "key39": "5GFgptP4E5KT22BPQbDRw8b5hfjzsvrxLdFTDVojoPYGe78Ku5h38fuDhAsqQnz2bC7JMesSKXzU1ikwtuKtCSrz",
  "key40": "5eLFy2goqW8g4DPwJX47UCtfR4GzVzaR79S2HHDRNMS3Bdzzs14a92BmsRdAxUzjUHzC1j4osSGsFJBCpjJgWRUe",
  "key41": "F9gxQirxDkvgsnWK2XfLhnZvsMTxZB62ajJkmFJBGNuZY5nPGvwz812Pe7LRa1EWV3qtzPyeufSuQGamYuMAuyW",
  "key42": "4VLapm9J9NRZzY6nMde6tgmbu2Yyq7RrKUfCvJebvLcFgebf4uASgGaunhE2kUM1YG9FkGtQWHVJnrR8UvhpotRY",
  "key43": "2za689eHydb3PiLWmaRQM4wvesbtf7gAeJkBh9Vh9fC8RsVk7yGCGyB7s3nAsgmDhqCGNag411YpBZoifV2HA9eh",
  "key44": "2xtFCT7fgzZYXV7AXT2gE4eJRs2Xvx5MbgM5fE4iQDnMYFVZHKhr5eAdJsqTbKseSXaHgdKAjpWkTyqLmeX4VFHf",
  "key45": "5iAr1HMLVAbU5uQUZ46a5s8LB7tuQoo53yJaB9KbuPfF14rPnKCVjhRnrQBVBvqcwH8fatfrZqTt8uwb1Qcjk17C"
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
