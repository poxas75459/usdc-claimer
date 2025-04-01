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
    "3unzvw3gh1ajbKUjE7Frq3dpXq74sPJTQkG8LYcZmUkUGHGYUvfvdTRPmZAS5gJWz5ypq75eLT99UPb6MwepG7Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfQoamyYzfJASNRydkAjGvrveK3dUYjbpFoBEJYgjsJyMCj3KmD4G4ge9p2zmWPfunbDefFv2SthzNjCjpC6jun",
  "key1": "KQ4AFAXZgo3jXemYoLSB6FNLm6MPfTc8qYHbkrXLUDQqLAeq3mtSDXnvec4NcX8yYLDNvqcLkXec2rpe9XsinRU",
  "key2": "4n4C95oBXRfhj3RpKXnUR54AgwKmkrhGGawsrmYvNAKACtaWi7vnGspu6hEfSJhsZU8rXud4aBGYKZnkAjjyi2Z6",
  "key3": "28xymrnF4yMvX23qkyd3DkitYAXArXCpcpiqyPnhKcQhoPB4KHzpdMMWjUsrRHo8M6QGRiy9pUsK7goSEXCcnRX5",
  "key4": "ienY7wLbRkqEmFWMgob2LbimfLKgnpAarz7sgaj6vjGx4ZqWoKYD9Q3WkJk1N3sXWpDzfPCWTe28A9icxvkJvwc",
  "key5": "3oS5hitKEfvqfLjM7VxoPbvqVk86zAfW74J83BeXvCvjSvDgdpSJbncKxM8TEHbozGART7BT664Lr4EicAmDj8sE",
  "key6": "3GiEU6BnkLoDQvm6P6x4dpsaZogBgUEhAPVZqEMXDPadGVJbceqXMhtyrVAzN6HpZyBWWABrU59CMBoRXX9gvzZ",
  "key7": "Lo9F9R9vSi8Gs5AfHv1Ur3ShV9TTusKaky68VectjCNxYePJDtmNBCXpPM6SXWHYUqFCPz8f4e3jnuv5GcxsZZa",
  "key8": "xakGs2CGgajiWpZg9aXDA3pmej37nia4HpgQzMC94RHhgtAjKBsnVAWN3Jehmcjg3jpxbdqWQC5aJzDR8JGcr8i",
  "key9": "4eR3FrasrUF6yVfDmo7GaGePteY6oks3LVzLP84ZRMMQBLiuJKKDZPYKzsttZgeJCzu11swLHyEWgdPhaC1xACY",
  "key10": "39iyqWQdoeurWa2ZqW1hrR9NXmr5EEzUVyX8AxPgV8WDmD41syjvD2ehA3tQawJFqCsxZ5jh3ZZSPovtu45Kz6VX",
  "key11": "5MptbMgNCRnytqaMMdcNdWQkNcW6FD5d15VpfFj57Ge3WpranxXSaxDeQAF3Lb6f6wwytEjfyPpEocQCuBc5F8mC",
  "key12": "5RietoLFtptEniNyHPEgMSVLMFXj6WqeY1eEWQjs5jRY52wfYGUANWA4jn3Xac4UKnzdie46YhvYW4WjAMJp4uEq",
  "key13": "55oi55oaK3ZnDMWQHCdg2MzyNhb5xZvQ4kcKHaMuPoVr6qXwf2WEVtfoMfJvfn35QxhpdHFrs8uKJCPBUwP7RUET",
  "key14": "TPZcbkC8znTkvdf8JF4rn1uWtMZDCYMhsVDFvEkuK7mvh8htXsJgoeeBRKFrxwii1R9EZwZLqDgwfGPiZ5mp7TX",
  "key15": "qzgMmRR54GGBfY8LZjqY9bP3URW25eMVnJ9fvX6JF5Mb3HtzWYEN1UyAagPbHcopVewgW9ck1Tnbprc2R78uc4y",
  "key16": "gMzrM8zotTbnAsy6fVNoVDTsku4tUFZbugJf7LhmNS455jGywnAooTQbbPpabU3YtY8U1kh1cUnbPTfX26effb8",
  "key17": "5bkPa18wwmLZBNkQvR83yfRXGuBt3WZEe7SFw4oGWxgPiAzDuchNNky2V6iMgfSwjWRS42F9UVGr5g6brTcsvkZu",
  "key18": "yftZvbgQbHUj9JLcGerdNrquboffHygQivfhpe4joTvPwtJyLWPTZGaKt9XYtyQzyNBwMabgJLeJaHxoPiNfi2n",
  "key19": "KSrWCCCj774XmhQQuBbZQpD3Cjb8VKbTz6H6hGGpnAmBJuedvg1UQbWh2sp6ksJECA4uoJadgJFDs9trHQ3hcBS",
  "key20": "3pF7TdG6Nh8hz7oQ5x9itnUbLdVPypX2yZDkcMcSqW1Phh384h8qeQFeyVBzdganTZbb9UCEAfeUeicezXX1fpoG",
  "key21": "56UbRU13hiSqqiWzExcqv4qTrR9BnT8n97ATMEn3iw3WgtdTASPjtFdggbad92jxmCrefMyCAat6TET3U9u6bD57",
  "key22": "2aTgmFJjWhMcYTidR3epDXgiMHzHSow2P39GY2B1ytTPok5tfN2bBYZNSTQVbTZwYroK4yfjnZzVjZPmgpqnaCcp",
  "key23": "NvJXpfBuMZmwhojiwYVJbrjnskznMPSAAPFCWw5e9qY7kTXfMDubhrJu8ajc5QTdjbktKTAVFXk9uFzkKu349BD",
  "key24": "5K22zSbA5poQa2GEwRtooy2ZnGY1S9nBU5uXhaGZzUDHnVto9Q72QVYBycpyYaJZh2AQmpeo3msoGuZzgjK6pPXn",
  "key25": "55jQ3KXqAnJse8gsCnYga6fUexsPTJtrSYynZtGPk43nz3c8HWmUCTvcuoLACcUtBj6gxwUv7u77W1PgpM5y2WCE",
  "key26": "5ffWtgsbLgTFXc9zGg1cmZ41nQsK45mx3pis6mHHPr7BWG5K8Kxm4dD5GCEN5Y1jqsMqYmd44so12ym35ioZvGmK",
  "key27": "5eE3Srx1yED687wCSxJcWukSJy2vQNXQtxKyei55bkWgVN1tD7U2fVMdMjpzJiyAPrmN5sciWGnXXkhk4N6prxdL",
  "key28": "2cG9CgpgoGbf4LUizEfcJvmWHbyzC2PcFUgttWCKGdrZccHWBwP4zPuiT2pWFYyxRjGqeMkowoeNizRFP6HJqcEz",
  "key29": "K6GSVBvbNVQeXDgTRXr5ciGX3WYxKkcdG8hEDVTjcmvHBRTndCeNQtpzwWo2B4CSDzMDDJb6bNGCBMm1r6KZVcY",
  "key30": "5rvjHPRaXqzdZyiLDsvA2uZMAsF26UaHjw9RCEa5pqCix9BRt8sBLbxCDSZqK63Ys4XZpmxzuaPJ5AFQFy7dQ98k",
  "key31": "mR6F8nKJqCaC4GCPKiHjWA4vY5FKSHKtCqnJXfMcdE8pyRFn5rdwsUnP339Pihg54f1mHLRzWkuDFFwnGhnuvU4",
  "key32": "3XTW6goeexPv7mCnuEwWcNYRrt5pVAns938Hw6qEP7dMpcHvCPpFa2A5qQFb3drUUunsqkghyveGDqZeV6ASdBBK",
  "key33": "5gu89qXCRYufCeT31WCQMX82ruYX4wpPuRHCtUChbJmmfDNVEF6cksckSeXL6kzscBV68kzag5tGGomWGQ5hjCDJ",
  "key34": "2MTkwKvFJKWxBkCdorh9Aw21N4MmKRWFkoZ2oCNak62s7yUpPyyYefvxP28vAMV62tWTkEdD9whkERmERN63bSuW",
  "key35": "k9cGUNre3mfWxF39imSQgt87zF3myXuCkQ7Y55Wq4PjGRQV23bc4DWH9Y5ZPcnmY34g31A1d6nNK7eKfywQUg1U",
  "key36": "5SEXj615ecgD5y3BX7n4mPYvLPKJQeZCCegYiyh5Yk12DgyBEpgTiMjvpBgWnGDd4xkxKqxUsggTB7t2N1wCHJmE",
  "key37": "W9BKyzUHSYwi7LSNSvVCq5Vj4JBnuUw6bMiVh24ywEx9ouTwjYC4RUhkMBtca522CGtqRK9N7DLFpcfNHrwEo7y",
  "key38": "2CrSxNC7mHj8KrNE12q3tPzNe1V7chBWjf1Rm8yae7MDQLAVaSbVyDdedStWDFGvnDMpaRX8xRSwZu9L3odNFHSY",
  "key39": "4vdVLVsb23Ncs4vqacCyX82CPzJet5Tb4YWhW2TGD7jUGH6G3yR5UsEtUQo7gxk2Xs8NYei7zCFqkJRQmJrcn6XP",
  "key40": "5geQhmBFbxJugk8tRoLksTX14z7UqDZhwcCKrtmtadv7GhmVtjxCntSpqpj4dabbCJH1TS4m9SXLrpjXQoRoaPEZ",
  "key41": "5KZ9idsLcZ6qjA2v42NDCJk5Sf4YGshvENJwUqfxghBiTnaubvGTecdAtpwJ9Z3ZTXuvmg9BvC4fYnGQe5A1coz3"
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
