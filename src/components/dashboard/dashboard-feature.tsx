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
    "5vVPTAKWrg8JjyoEF3w9iyG7sQwxAhUdEA4169Ju655zLT5zjb71ZaNJAhxva54gJuPm7cpQv6HwBoaK1mykCoEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9s466M1e7fpTVX5LMnbT7B5QwJf4Su2tLkLcLQLBa1SPe8BSiLc37A9ymDVTccNG9QvDWnaq7pNgNUJ8w43vsb",
  "key1": "5CP2JDwHfx49wEKjV43yyEedP5V6FQvqLxq1t8Bhe8qzNhn3QMHYMYvrNUizxsV4w6anjMDVe6HXAyvWqQsLTPqi",
  "key2": "3mhTccP9L5EgjRg83JhrVz12Az6j8NNmHZxMkGNj36m2ZQgiDtKufC3AY1RRBCmWkymaEJtjPtCcjzJLia8qpeWa",
  "key3": "3USS5VzKjCCZFvEY4sq9NxuTrhvFsfA4mBAB5Pc1qfVesqeK24VDtg4Uf18ikwGJmfaHPUN6eBTKLgL7VSfpJKz9",
  "key4": "476w1UB8oQY9NGTqiAwmb41E1reBeg5XZ5hNyNFjg2GDwvF4b4yHLTGwhmyknxqEHDnEvCSVNnTQ2yBTHHM6NQ6L",
  "key5": "5ZeFGDSuT8UDrFg7eDFXLFVKbwvo8eY4XdkrMLqAg7TJH4MY2feeTVjq9SnUDZKb5SfTL9HQzh8gazggcUycGko1",
  "key6": "bpkL6x3GWoi2Gx6dkx87J4pWHjfM7AerPLeEstGxBcQ2gL9XXXU15KT9YZhkVFbsscvgtupfAGmNgk2qiYZwtfA",
  "key7": "2ehB2G7goMp52a7TAx3H3Gnk5LXkvc2jWKtzz6Tts1iEg4Mdt47rSug4J5zjhb1thrBmGWymxqpeeCJfaoFbuq2Z",
  "key8": "Kr5KRRyJHuGny3wVU9SNvQ7g2xZtT9sqQGuiqBFUQYdVtJqTUpyDwnajh2nGDkELeUExuseX5GAMi9BT5kgWdSw",
  "key9": "37LkfGoXc6BPoNWm5eTD6HkRe5w38Fx49yhNdyg1PRHN6se6BXDJzUKqv6ijdNgoTEuZPuaSTDo4AJGZTmUpFEFv",
  "key10": "4jerHk12Q4RHcQUXQmVRkGUW1ojsbKTXfgdhisP4aqkFdAhY5DXp2AXDD6pDSVAEwNecfsQ5W5AExcybtdVSD4eH",
  "key11": "65bjtKt3XHpMNY1vi3VyKy3i6pbxiueuohLEeDPRXVmYuPitLq2UY8dyG6VJ8TofUKvA6D7t4dTNi57ePzSWWaUL",
  "key12": "5ACaQ4QHNeEjB3r6xXn8cEBfGAUqxZMuSwBVedMNNUGP4XTcFRvVKybbQNXA4EfzpmJJZGMfinXXDKAQMwYGfqZ8",
  "key13": "5jke3XkeFfrg36PGaNrA8uUTUVtbc3GqBuWbYK8bLoLv4tV5XToUpzcHe3HcwzNdvVXRhZoWZFrkRwr2uvnDhZZA",
  "key14": "4NqHHaUeEHT5bLHHcDZyR35BMBhi3VAxEAbs3DFxbrxkuhG9811umRSbvMuWstATfnrQwRDHQ4NgzszZ5r733MxB",
  "key15": "15auodvjZRRGojPRVhv9Eb7C7vVRGqNpRKgjB4JTeWWdotLEyKsZP5GbnidVUwJidrQ5RwpY6mWeHwSASPykJSa",
  "key16": "57tLEyP1x16HDiH45jMd37opLogY7EgmFVRmZGguYw2nsJ6EUwo9KrGq9YQv61TmACg9u2m2vQyRF2y8gtjVZwBy",
  "key17": "5WBWQeu4NsN5B1dMMMppAYFZWqcLPHVJkUGSAQsYRdScnaWYaLi4xbux7Rk8ccWyWqXCfMusPDqeh4NByHT86K8B",
  "key18": "617JDFLKqvAPFxizPc9C16ydiGafecWvKU3pXQh7cCH1pYEAyigWCHVKXkG45mtjSDpX26qGtxGXpmY9MEedsNQu",
  "key19": "gat5ZwbSDr2aijbuFW784EQPa9GNKCs6mBTSeoAx5zWdGXnPoZLeFLSMsB987MC5cAYMywhcbHDtQkQ2FQCba7a",
  "key20": "BEt637HkBdVZSjLRLCQuVcQoPhyjTavBABpzxLUXrRqqkLHP8Z7ScfX1Y6ujPNpZRFCGG4qq7iwnuiF1GvdiQeo",
  "key21": "5PaTWoc43MB1ErYNoJUQwrvaaYJRdqPCxv5tm43R2efrGB6GMmBb4mC5Zk8pzoFGC2vEFyPxyvYhxWuRfBetg74e",
  "key22": "449GYG35tQBQcUi6gj7pU6xkBydSEApLBMysTnH7XdYo7gTPJNEQdaVGt9KDxd5opvmYHVJ2ptPNNYB1XSW9ZcYX",
  "key23": "3LsNKhnFnAzfknPGZ5qmuptELupz7CC8i52F97Cgwhw8aGTWmi8xc46DUSfWi7fhFqxmpR4vXUVVN7wQRumzuLbs",
  "key24": "9BfXU1cizD3JxMoseV5XiZqTy3ZkzSmcycxyQbZAV8P3h82MfTh2txN9iVSbwJZHfd9VrkFyf2wh6u1scD5E4yi",
  "key25": "5LdwADckUySpLj9GprqoqvKuYAmVNaYhJLSstDzeAjN6ipdobhrNdapaLiLmVNvCpYnyheq2sLec4LMpSK7vMU3q",
  "key26": "31f3H8afrTUXE3FbfApgiWSSprN2dseuua3efZSnkat7Kvxqo4Uxj8sTDK2yZSTbMLSCyVbyUP5Ygt7PoFKjpWDx",
  "key27": "4CyhAbPGv93HLKUTAB5y4Wh4rjMbLtyMDNrAKKSfhDb4in2MsLT3ezFfSvUqBHGHT9ANfy6XScZs97BBwbfiA7a7",
  "key28": "35ChWh6qPECuVBV3jvjFZt7ot3zKyXcAbUukd58TKJh3hgDnFu6Q8M4DH6cRB3msMSEGK9gyezVM7mh4skHeeMTH",
  "key29": "5Fb3ka8tHbNYU2uSzi1Lt68iZXnUg2gPK9uUwBmSibfjSfLD3gK877UPmRUP4Z6STuykvo9baQkRDwhZyYaeWSWN",
  "key30": "3cmZBzU2kM91WKfbxRsAotpQ3PWv9CHQC8NXEiB1uCLvoH5SYPpPPrtgFXLjFBJUwgsMwNMDe8AqR9SfsbcfE71h",
  "key31": "3hB7Sov7DcxLCWyf46JohqvZZsXXspZBUgqk3u7gPDxLZxvyoC98V2Spqoqt1vVp4afXorxCzX5cJX7kcCMehomR",
  "key32": "2EU7rx1TSiZTBaSfSdXcUsbbwYWqrx6bNxJseu4HeLU1RjoPEjyi5oG7KsU158xxSYVarkJvszEXZbi4ALsYQQwR",
  "key33": "3heZea8RTW7GNiYAAtJRCBTzKZpUfN3hyVLk2PvFLRo8KPdL8CgX3N5SsYseLZgmAYWfRSMw9W7ftt9fy6vd5sX6"
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
