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
    "22bkM2E7JEw5cRGHeW7BZiL7q5cSZ95qYs8D6m16Ns2mSspiC4MSeFV3GagJGavexPmkL4hjYRsgU2YKhGPAf2LP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDW2ptGYnun6Gwk9D891rMfESFzJvZgV7tSSjfqHdWHUEzyRvYSmr4PDEe7ZCvhstbBX8QQVFE8nxmhUt1THvBr",
  "key1": "5MmW4XufVCLAZXEH2TzLHuyFQYWXzmt5eRzNSk6FLB8ns9q65heD7nwger2hvyo8thjozW9YryTrcP3yqz7PSyt6",
  "key2": "4DHR4NbmU4ZenRikKpfGcq8hVsnwxvG88D9DfHviESvETksUdgZTP3kay5qhdrX7tjMRkJKAMJj1wmbB7yxLAkko",
  "key3": "4DiZpd1zXBZaBUwZt2SHyP1D39QqoEWi2N3H4YQQV2YriuvVcK83LtM3T4LGaDVCXQCdh4K4r4Wi3RjigbDvJgnz",
  "key4": "4bg8o89kHn2VSQrSzyjFqKurpx3MuoexbKa4YoMrtDEBNK9PPXciEAhRp9egmnUx2hKv78GXt1eqh9DbXMKwox3c",
  "key5": "5rf7ATeVPmXh4hpZawPkm1RyCszEtYfbH78k1zQuQcWCv4BVvRLaJnw9s5trpcMY31HPKwxvZaynXrxzsiRZhZND",
  "key6": "1RzSgdtJFK1p7Wh2wGCJioLL5Lh8nN9Z88URGgSgwDMWssgudthu8P6Z1T2MxgPd5j1onBhmjroWTrRrTUhVGNg",
  "key7": "2eRofx7GV5C1LZpujB2J1VLTBR7auQ9wnW5iaveLmhTcFenvBpaZQ1YiRjnoK894xwfGa6fPiDPUbf7LQWEUy51D",
  "key8": "49EkH3tSg3fhbuhMH9usJKW4JiyKeZRfWQLeTFkEfnEUowUnDyBZY4Z883H8kwqG9Gf3WKCmMwsa9TFCGSGARiWz",
  "key9": "4pQ8xv2wnds8XKxewBToVTpJGY3MDRZkDLsj9NpR751rkd56J9mRMZKDDBoz69n3VVX9ymntgp97fBoAmud1drno",
  "key10": "2KGqmrJLkXQM8eaDNXfczVQ5m6kXfd21M2RyMoDtZ3ySz1Gsynr9cwM7AM9GXKARuo9DPgXC7s8oozKFcJwy2ay3",
  "key11": "677KEZoZ2TXjc8FYiMF9dunWF3BSRCdAnDnqNr2H1RMmNTTPcU23MJHqvhe2GT7Kk5dfL9NkDR9ry2mkPx6LD5v1",
  "key12": "BUKQneyn3n6K3vKrEPUcAbfAMSJdfQD6dARVY44zv3pNb1e2cFoyuVrXnqSsmnEzEfj1rJeKj7oAGiUd48G2HdK",
  "key13": "3YqRo6MChS9QTEzuB7Hrgn969XQLur7BVcpbqJNdK1Qguyg1i6BsQ5kemhUTPKxi89mLgGsUMzwhXgdwqLBQyXWt",
  "key14": "5QfVyaxpvjpCXdoC3xNi5T5X3sBTn5PTg7WoMPGGvPLyUnfMpWdM6S9AW7GXjJf33Pa2SutDKbh1F5XvQ6mfEa2H",
  "key15": "4qidKHfijhv52hgcKm8ESDVSvCPpxeTk6ZAHHTwi53G7cMKXEu5eN7STJ9u2h6hgsqDvBgECNHEGpjSByc3NXS77",
  "key16": "2tZWyxGzGT6R8QoH6HvpPJzTt4Gc2tcUqevi4oBG2yCkpSg9pNLs6qQet4YXmV854VdMyd4K377nkuHXJ7oHYoB2",
  "key17": "3JnmAB4ZrTdyTYtPqXxg79baqk6mL41xBzeBtuSKL9yG8a8c6RySAYawq2QLxLLUyf739j38JWz1CF4ddcrVHSjR",
  "key18": "4keL94wNXoEWXAgmjYHkeenfJSeLazNBpvnPMbWXFxMVdKaaabmpdBjwdJ8ic2B8Jhvns8iyVDcaGXowzJrh3Mp1",
  "key19": "5WNqpZfQUZJZSVSGNqfRdmnt921BQdUsLgDudbgarq8BnMVJzHkLSFHUDmDS3LrwaDSr6ofjskDLEG1NzoEddCtf",
  "key20": "31G1L4H3suzB6bw57sA7xyzowvAZbJnMpdrUZHVFSdkdn7Q8jJZVQ1WmNgXgJdUH13Roy89n7ZWbcFtKyJK7Ere8",
  "key21": "3TPFx6wshxBAa6KKapN4HdzkAJtHC3zBtM72fLLmQvs33CNU5X7VhhT4JeRoATEJhipfWuZ8Eg9KTo2jBfsmRK6",
  "key22": "2rkNZG4u6EJeLKDJRyTJunzUwGQ186WEz2EUqiaeXZGBf911UYJPDw5mcx2QtD2hNmRRzkCTBvJzJsjtJrotbf2m",
  "key23": "4nywknoDtYaqSfbwGEfXsiVbeY6uCS4k5NwJ3Cs9bZFPWXYYsdpGTLNvruKxRmj4jEpgAVDyZSo2Azc6LcnMFXxR",
  "key24": "TxGDtKQVXEZDWpto6orAxY8GC68gX4Tc51ThryopGrgcJe5fAatSH6rUGfVfRRGzn88PTrghn716gSjx62RC9Tu",
  "key25": "GucqXbg11pL5Nbq341DobURwJC6GC6nBgrLHwY6DyXVCmWHRqXREeG42iU483U3n1amRWrmKsaSHUhBxNx9z5ph",
  "key26": "4XvgVihcAfz1r5LTCgGrDRdGNTTyd23cSDNhEgYthqTME42ohtDN7ogaQ8bvRWdSXWVh2QRPP4HaKBJaGKiRrk6t",
  "key27": "38ZR2Ea4xN3WqMchXtbJ2vr72UDL8a4CWxU3YLcqJoYd3GeWFchtyd39E4TB5WAymzRJdEH2n2iJXfvaGnRZDr37",
  "key28": "5vtqf4sMhy7YojFuULzWEX7dDDj3Ci7wpSJPBrEh727cTzgEr7J5SCNyAAfbd5wWhdZekUbSPp638sDBa2Jn7QAb",
  "key29": "3wXoJ3Mp2wWP9Jsch5QQzPgfsoo3xCrKeLu9tt6KuqnXUfZ6uLdNxN3Vq1Rxrgx95yaRAL5tyrXFk5QjgwxNqJVY",
  "key30": "3tKu9sM52PEdjJHUUrQ89VHzHepRNsQgZyDCeiJExoNM6n4Knf77yXQoZNzmU3SE6ArtMYBe3yEE9gKQiFYGbFJC",
  "key31": "2e44jQuupXrPUYggtuDXtzpMqwWUG9UrreCbizcTfppH2ML3FjMdFFvY4EFE4mvfTAVzie53roezZgiu1Js3Xrxn",
  "key32": "5ueS2zzFWvEVqNJMtHRmR9MPUSTdGWbAHye9UdscMq6JwqBhHv8q2ScnMQuPsTypFzVeZhPw6f4w3JFkidmuMhRu",
  "key33": "5tWyVAxFLxw43x278XJKtgUcyVazbgQQ33gJY6aKjmk4e8FvG154Nf6RkwajrZUNwjEjbXEucFpe2STgXBJs8AgV",
  "key34": "2MAL1MKhPiWvKyp1TzmTf7VTsWS57o25z7Ufj22Dpn3E36SSpWDTaNJBZVAwtLyt5BeLzgEhF7f8b6x6fge4xKd9",
  "key35": "3iXSzCu2bXNWmB1dACFNvDhfr9KpoexpNLjpiNjCdPSBppfSwFkL6cgaXn2HsKcVCWcpkJ2NRqU1Y3tBWGep5b4q",
  "key36": "2tPZTWqJrhwQhunbYKXuoMJ7cA4wQ5ZB37GKTxX92Rjweeen2bpqReQiuanMEEgG6RKj1XBR1nNHD6tyFiNYNhAW",
  "key37": "5Nqwzvth3W59oJFTj8EugbbFC6GaHcBN33bsJUpqFfm2VmVWSPGQ99Jgw7PmsYnZ7xExQDeLbbQ5kxHRGQsXVDRG",
  "key38": "Tb2kMdp2qLXicSaZDLBs7eMLbZjnstcCsXCSJea41AFZ9W4djPcNqzY4gq8654FG6m8oS9yvxa4RN67sPJdE9vK",
  "key39": "YTh2sy53dTVpJR6PFMjc8rogopaQiubgS84EqXccGvRN9i8rJ1Ded52yEvWdRAakLmsYzkgnbvK85r9PSAJ17ym",
  "key40": "59tj9U3rysvoc4De3iFohkGcqFdaWZG9LxJuJWmJT7JFAzUQfPXUwNjiF2PXKWwKHXAjuKrujZDpge16tWKwMCbc",
  "key41": "JFeTARCV8RpiPbUZhSWTYSSoAG8d2gQnmBBM5VWffb7UBUjF1csMBs2iDzC5MEfkkZiZ6wdQriiSe6RWWLm7UzK",
  "key42": "58qW9DpTm3ZZoYPi3VdVRBZPbjyZ4iamNv4xg1YKe8vgoCuXHeaB2aVCZsv7xDKf1cMPD7RmbwyUBtkwfgMU6rUV",
  "key43": "PH4VJvSYhet1PbZsbRkpmXVgRZBwV6CJm67FfHezNXiAAGWiaBJ7gzRKvGqeQobh6xGpPqvYp8J5BLC4PQzUQ8a",
  "key44": "Wc3qyuJXNHUzBqTTkTNsqFGZ2vZ2PhEUZvDuM65PGbvVam7ZWZbpvPEj7Ge7PcKeTcgcPWaTa4usyFD2x4mHirn",
  "key45": "5UyUEUkSpt498aoqFQgW9i5oQrAHmAqaionDgH5DTSkQ5QwBB7gMQSWiAYAJjdwScHitkyk2ozYJc4U9pxSifTs8",
  "key46": "37SCiA5WRaeGu2MrtEqr9cGo26nH3Jt9w9CawCNn76MSmUKk1D6Z3WyMCM5UUK1zByPj9PFVdpAV8TxrjH7Z3Upf"
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
