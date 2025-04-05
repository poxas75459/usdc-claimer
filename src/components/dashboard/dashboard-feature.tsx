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
    "2dfSYTNnuUqUyqbqHeTa9E5GLi8nqmD6LdqkCV7L9XuaatpKg8BnntfKcFuqy1AuaV1iDwCLZJHSyXsZY6C1HGBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXc158iKiPfnwdxZApnC72njUmeVvSeVEd5SY5ryq4eQMTnTR4Fcvjgoz21nUz3c8Yw22fnAfNjeHroDgsboq81",
  "key1": "2ue6V8WP3NRTjb4wNBfV1b8SumwzX1fKrX1BZjyGE7Q8P6v9yY2XxRJZFBVjJzvRjxAvQeHL1R4Rq1GaKTtSYvPR",
  "key2": "GVwhHs6xc6hqJfYRq8ynSwZG8QJ2i8Q53enA8WiSeG7UnWUMGGeUHinagLpzmWWoRFxh8oSutLWiNoah6M1zeKk",
  "key3": "5z74BwcBDa7dDLi18oWGDUN3FrevNSZQ79kvMXxVEBTo54hLfDpuQeVcrofqUfZDuTMZEwU77r6XpwhbPci6YVEU",
  "key4": "3DhiQ3M3hJuWaSfQFzsj6SQWY4wpcw3iDeCf5Ug75pZBSNJfRgnK9uTzNWxFT5atgBe9nQmHA1vZVhUtEprAHhkS",
  "key5": "5u4RptMQAmscjom4asx3gviUv4FjKNdiHpev2Sq3f1w29g9PtyRRxhNWnobdkTQ1axX9ZVKQNTLQjLpsqhuRQh7e",
  "key6": "5vusD4Pb6mcFh3edcai8TJ7yeq6L6SyJh2FYKGUX2RjJfcpaaRoJSHBLsoPas62ScF7UbukJNATxEGgwSjgSkStR",
  "key7": "5ngRzrw6uk7pK8fDXqbWb9wMa6f6ovfpi2pzTXtY13BQXU2EVeiSURwUfQ8fXn6eqZtHaW2GhUeUquxsGX7Pbau7",
  "key8": "3T3gEFPJMwvQ4NBNaot8fhCZ8a4H7r88itSAtu1mt3R2gzpNz2VCHT6VvLHDm8ZYHP8gVdnquZjUSHdq2H7dMZhn",
  "key9": "5MjtvWfEwaCZXdfSXKf2PLgg7f6C36588a2284hWeNatm3d6F22NXHMZswRsLmg6DmowEXjpyvAvQQ4Q7uuex3ac",
  "key10": "52NZeLJQziQuQ4YBRC1J5AcF17PYmp2zN5snKNMUAU794X9JaqYX35j36R6cR2JN4hy6YJ88bazb6P9xwKtEZvzm",
  "key11": "2QV3e5ypRpPjHqxrZ6Gv87aTZmKuyZwjLqqQk47LPkgiJC5W4oqBtQijf1mU8sP55oFc8CcyNPi3oV1XU3DUbVNy",
  "key12": "21pvUPgD719zXF8Sji1CY9saSD2zYGGn4hL1UHhmK4ev4Y1smyd8SfEn3hifcuWV5aE9TkGhDzHYGPf4vsx577DC",
  "key13": "ZzWS19nfr4HZsJ8TugaF7gAHDMHdenxDNGQMnp4TAQzi3AN1tW3BSJsM8rS3jpQnKFgVfrMJZA9cRvhjxsy8ym8",
  "key14": "2KQKKcojfWgZcHumyLgXBH8TEcahzzKzNPZZcRhCTEuDsa1EeaLRYvAjHP8CeKyiMGrB9LDFTwEzY9sHXQBVUyc4",
  "key15": "4jdoMGVSn41Ni6bbqx7UHc7VshwGb2TCQUjSqWNxeGgAb9xB98HNT6GALEofJLDr9jrHQtzxi7NrpwqfKFoHmYPY",
  "key16": "5iGuGhzVVjJEnVv2dV9gE4KBXj8Zym4jFaSxW1x137zjNHBvShNhzA3ZAMkVENg3NZQ4BtWoYCNr9NQZ7khsXgys",
  "key17": "5pGHZ28ZcHqeCBdcfMus9EKa1pA1pk5mWPnCVRSYXpK2DHWJFa9BwJp5rQAd45hpaaYsLUDzqkuCabXc3ShEB27S",
  "key18": "438Upmcbv51xGTE7a8wzmwyVLt8ZrvEB6FfLhMoU4zsPc5jQYKYfRu8Ua6Ut7CwJuPkoPa8wnNCbFTuFYXxF2TLn",
  "key19": "4fYXcPmhphgxGBCDnqUrHyCGzLqxCKWhcjo3qCXSDEFHfuFFyrqz4RRJg8DmZXY4Ga2BwUxmrk11mcWuZLtrLUH8",
  "key20": "63pyHgvMzp6RKJhtvNYkm5fWBtBGAnvWJQQZ5rpeALoyAEYmqxPT42oUaZ1TnUVjXKHfqU4cm49Xbadcedct5NWx",
  "key21": "4ixJi9xxFM3EpLuTkKQHUenrVcr8TzF5Ms95JhybPUeT8AxaK5KE93pQfwBjmWkkykBp8Hi8iVyorZ8Rd4LSJhNF",
  "key22": "3uKtf69T9NSDXxm3gGX4ZczaN4CDr5xKYBkoTn4MvL3b7La9VWA2Qf1iuSjGNsfeP53M3CG9NCh6guBR65hpWrRx",
  "key23": "3NGFM4eapfRoyFBZ7yoLdfpUudxdSCZ6y4sRVd7PqS7mWUujH7ubrN2xxpgYhNVTg1tyCvvTUaHkF4J9eZqrxpsh",
  "key24": "4Qh3Lepgms2Y1PsA1138DFmnugVuttPcakyPxamLnWiZ3xdpAa3qx71FnT12srmUoJ1i2P4k24CiWwUN9VgBeXQr",
  "key25": "fougxNWVKKNaF8WGi5bJAphR3tJhbYGKBVpw95MCmsB6eYwoSskwupvwJCh3Kwu2QdvtMbFatTNwY8FW2WkencS",
  "key26": "9cb69kuzr6kzKSg7nn5ih3KfNWukhTsjVuhgWwtSc2NVrt13AMp43iJeHxeUbGtXDSbTWQiiA7TK7pGgyxsCuVc",
  "key27": "3zRvx2nqfDMpUi6hAYmako5dBbg4cuN7JYUuyv3FvvUSsmnyDQ5FTESCUTEipb4uUXzNmv3eJvpFv6hDDpdYpyp9",
  "key28": "3fcrND1kztH2QSLe4n5rGarpMq8DqspxJX225uu25FkHaAN4eqPqi5fiYEjvdZS5J4skUUKsprMN37Vwmgex2jWZ",
  "key29": "4QeGXpPoC9yiXpngE7uouZzyiLL4pWZQKxyzZod7cbx42Ju7QdBdYGY7GYtbjj1MVCddnPHSehDcJoC7FTPaYcE9",
  "key30": "24QvkRaFJRzHPm6qqpghT5n555WZEG4C5Bez9WUAMDKSgHsAE7eRzGnD8XuaVmGWcL8nfUtV5T8B5d2NNQJz2dMb"
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
