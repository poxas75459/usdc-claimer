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
    "5QGTLAgXw3fgGHxRSViH2EiareM25HpM9zKEqs3QBH1cYYBzFZYh3FHKcgZ55UPaL3L9j3u4Ac7Q1jaVPvnEjSCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26iEJmmuM7VsjG33BqjSosWKaWkzbA7e1B7v31h1BWrZV9C2hWyWHtLVjdLcAtkWveYsbzbcfKr5tzCkBG1mTtqE",
  "key1": "4zdDcgFCyYnmR7o9XqWYFnx6v3rKXGpmgUaa6gtgxiEF8eF6PkDXMSjbKLJWgn5Gs3WAHoYL7vRf3cavgZGLrAY3",
  "key2": "2kquDvZANJVqJp3yGgbWAFn9u3RUgtN1sVjj3S2xwDAxJrH7TgPafHKyFJAdHBFA9JZUASVtm2DBPdwtLriHU5Zp",
  "key3": "CqrXe3xhsMfF9ewV9kv7F6RntWrKZ8shcWECSu1VtwZVxycivDhdS2H4BfAqB8Mi84gnSo4doz3JtLGyJKESQvQ",
  "key4": "4qb6fEJvA7Ks33jE8aq7VmS9aToryNc8Hbg5mJLvRh1m7aEE5GzjwRjngA1rKyrPF3FB4ZwrDGFSfmbPCNDcFL3u",
  "key5": "4BihBRuvN8c6MkjWqv1RYbSM1cyEch9edPMcK2FFD4EcJGWJ4LBdXiwu1QF3wEZJCycgiZ6KekAxFn4Bv2n41Eqt",
  "key6": "3soYjunqfmMs615Ykc72Ak2MLsZDiij3kQuyMTJARcAqD7PNpFicVSTgDw9MjAW7KEeC1bYiLDCBKbRreiK4L5Dr",
  "key7": "3NehFGUoZx4Zv93HEY6kBVp5HoTg4bBwzpvs2YSygdjM6NtRbNNfnkDMCBaRQ5N8FgEeaaysNRiYiRdSyzhdKCjX",
  "key8": "3s2YGjP95rviMvwpPL4oozzqmqUZkqF7yjTtmhA7onBryQZ1DycfwytghX3K5m19UBRiQzYry8f5NHdHgzSEJ5wp",
  "key9": "24Efm6GsHfoMn1X9m8h24terywfkSVGBzgpC63dhpMsA6qXKAXNgn9y8tTJkEWASZM72Cd2VA96pbFo4vvUCEEC7",
  "key10": "3jnUe6QtT37LgHiHqjBp9vTqVSWHrh1nnhNs9kKGk5opu5rMxS6eoViRVFY2UUtkejwzS4HGCYpd636sZaVK4voW",
  "key11": "wJcjd7AGP5Yg6WDrYoovHD7CiZqREHjEkuU4n2AsyXhu45QzkB1Jzgff9GQK3ufCKno8n8oVGTmQkFaiPrYeUFE",
  "key12": "4Bf2u9iSioSK1g9XeWboxihnuBULSBsKW3smiS5kWBFuEYoB7jvMxBjX55CugXFrrsAzHzYgEaubQj44mmrTJkRY",
  "key13": "QE7g2YCkpnoqMD8tprHtFofGB3pHfDNU2MHoSu4wjM1mzoqCpjtsSCikEamkgx2pcYMvWgFdTkaV1EoS85eHsvu",
  "key14": "BEZx8bLAo3Gi45dvWshbzCE86fJpW3eijGh3MVQhD2nTHttgEeUU3w1dcvsjbfmPQBV1GZNRqztVjf8mpwCWvT9",
  "key15": "5bRUv4tZHAGUCPvYigLRhGtkAj9TBZRkwSscYK4ZZDDGucGUEnqfpZUaiTMq3UqKBBNdjkTRLHrzbAG2WwBHGtKg",
  "key16": "3R15icwKgSmv5XWwpwsr5FELjj3qkatMEL4NepjT7WWPXMqYP9fzF48iU26hVDYBfuXrfxfwWknHNRXQ3sxBTFK",
  "key17": "21mqisTQ4Gfab12SRcpYKUWqJ5ZMG4aENj3KSFFX8dQXkfpm9x6mzGjZkmPh2E6vfVi58guE75KzZyjTogq5He5p",
  "key18": "2JEVdcxTMFk59nXmsYzxb6qeJDcpM4wrqXAPpZC6gTf8XKhLkaJRNNjW9vh3jT31waAsGJUzY3zgFCndAzDcceAw",
  "key19": "aPaGrPumwYQATi2EUPgSxLXnYPUV1J4yuX18GMXEnNNbYzpunyiUYirHXafVYXyZokeoQxaBdrE7ZXQxLAYSBFZ",
  "key20": "5hWfGovgy8XSqVVrRViVGZvMrMjZ1qkkFi7Xz8ctErV6PVAxkHjJ28P9JosrjsutRqhKJjLAuEtiXB1Dn8S4oCuK",
  "key21": "2iDE6KR2xk7LGc4CKXZfdyCzQEFKv4Kqks6dRfshsxNmhmTNoNKgMk25yyQ14MboDyRGSXxgbCFXRtVF2cUGzWGe",
  "key22": "g78GbMHkcNoHT2GSBVbSmkv8oZH8Qx1rStTM53cKAyTBePEHyHTKw1EzBjpzznLdpk9pMXYhyyL9kEZWYCximbK",
  "key23": "342JeEpyYLueeR95w9thbfLgiei8fpNZkuS1WsjZZfvBsUxvDP1njFVJZfVpvdeeUYZ1ha6VNX1YmnDZo1ZEcU1Q",
  "key24": "QtqPdmZRtG5NzeGhnU77wCJ1Dja3sqzP3PvH3pZEdPXPimrrGi3r6QsY3CSUrATXkokoWgy994tPsEENpJW762Z",
  "key25": "4mbQdd2mvmRLZKSkJFhRNQ5XxykqZZ7iFyDdZP4w4ZzSPBRdbWZxPYKvNWBvbRwsGi2UhzwWTDkQWtJKyEdhZqmB",
  "key26": "2kEyVYHehUotjMBVuS867jzaRPteaG8fVfpt175zVitnqdGh3CEZxjrepyWcUQF9rB7LBiYqfbagpsjZs4JeFQ5k",
  "key27": "3Bgvhh2iwwqnzQhJExH8bBKBn8R2U39e7nSfA4GjuH65VuBRTmykVL8M9GkN9ncwHk5sK3mJtpAgs88QGcNGYS44",
  "key28": "2MFYiPGJ2QkVPgc4VPAA4tY5isU6JHbrXxM3NhmfntCEFFJpJQ1NtNvJo8MVYSuUcGh8d14TCk1fEZtYyRDJuMwg",
  "key29": "22h2hr6D8i682tV7vcM79EFQ3SZQZfCHL3zUn61EwULRhuG6H75QGT3LKuyzrqk9YCgBqZVQHgkkg2LxUYWngYpc",
  "key30": "8SE1FuV27c1t7o8oWWjfnygMWgW25xc5yjfaY1ss27oMTVFnPNoueZ7EYbokdn2uXZcLqPtehNJNJzYJL78o8bv",
  "key31": "275natWaEtEcs7HhxofD1JbR8Xf78u7181LqaPiKYAhH8dsfu6XW1nW2Z61yKC1PgFp8THGWGcSLNiGwPNT5Nz5o",
  "key32": "RgxdYFBJdZ3EsoTEmV7Ci9WPj9VMgyJBa1nDg7ayLRD4GaV6Hvz2STqMZ78vyDqFC3LxZYrT5Sp2DDRpE6xiJ6M",
  "key33": "3G2rAYfxMwP4ahmd6av9Ukw3LoSQJo1LtXWkwdrBRhxYCGuE7Zq4iTsicikzZ35zjicvSmzSXsWVKQSkZkhUnYiC",
  "key34": "NWdWr719sB7jjBHqz3urbaWnRJmxj2o43NFYr3mfuzSbES3EVazWkcFtEiH5ENaLTKyWrBTJ2sBEmchNPWhZFBH",
  "key35": "5zoACT9JWBLxCkyLzv8geEb73tKxTidzqbMyYJ7xLuTF347YSHLZxSpvqjpgFfnJRceLgWxTxoVwc69sZXrSr8Zq",
  "key36": "5xQBhhWQn8SpCAJeu3s4WtFxRhCEy66Mxc1HAKt2Qq3CyWN9nKvdqXv1TDdR3x7uBxKFFAWH9rLX98s6iuitXDiH",
  "key37": "2w3oDqsd8e77P9LuLQTdLijnZTmgsdUEvAYUCzyWFaATbkt9sLV8cGDt7VhjJbbgtiySmfFELEmejavwrHpT4My",
  "key38": "3zQo7D15AuP4BBx55PaXgaQ3eg7bX5s7jXJ8efNPGHS2QNHCjacgfTHrBFBhZ3VXhkodYyacUrTeGanBDHPKmakQ",
  "key39": "86h2ZWL5p3pkBDySeH72Rh82Pf9H9JatGXUsKmJJ9J89mER85gFAuY6gLfYfwGeHrYX4wM9HYuPAtX7eG5jo532",
  "key40": "3aqpqGsffz3zfwbEERXdMkgowKgkXFULfxcdEJ1sCg57Dg8UQuyzZrqMQBU4smMN9WRqyN9okxBoVreZNCu9giLd",
  "key41": "5pU3E7WqT1u3DY9zukeWgEarvztQcDp4cHuQFGo4xtwteKTkuimZVewg7cM2BW1BUavh5TkX6mhQfthFUr9vw3QX",
  "key42": "4cENUipcx5yENSafo56sTkFVhGs2NjvwPQnWR7onT44Z2vSGR33uuMG5vzGbqhcu2kEJy5QFhZcaGVw7C4X6Mafk",
  "key43": "2Wy9ggm1m4i2fo3osVrMScUdwKhFEWXE5jKodxoakX7WgJhHK5NRi8Kyf3aMchniuEmwAswcCxcioKrggoW8bwZq",
  "key44": "51WcjSkXJma9Cm5MfgzYi8xWCxcnjDcWvHpaSQnHKnVudpV9VqCvcTPDsSuZX5iHdzwLUD2itWbLxazfc1XGuXbw",
  "key45": "2UzRgvkLwsgWfoWS93u9YkWJXfj5juegyJ6YPVQ6xQY2Xy6Eb8HXyhpQcRihKhNeuNyR4pHhrs6fFgiPsuoy3XKS",
  "key46": "hubRmkLKDnu6xiQF5guUR2uJupU1gvfvN6m1LfZTFN2TjjCHYMHhvDy4YBjGwBbbtfo9dtFsyAH9zfSeQVVZPwF"
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
