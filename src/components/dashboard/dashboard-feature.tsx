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
    "9k7emLDBDY4dZph5pbRY52UQtnKjFnnmLYmgoTCyDwcFXyMxPg8wSXQtQKmTxBeSa3JGeG9kQfyYqaLF5gRoYfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66e8Ja4svzmZQB9NLc8yshJEuVJHENkyoxevxnA6TAjiwFzS9Btnr3QbinQ2L8FQcPwWCWX9bZQgFRyKqNGFGDQQ",
  "key1": "4ZACRSgvVoShGjAsD4HbaTMXffVnxX3AwWVMBwraT73V721axwMaTb9NBxcVggdsKsZHWKo4SKJk786ZmVdLWie2",
  "key2": "fwX2qroyh5gT65Z1wkyfydMprYdA8peXTPVEf2E3HSKqTza9gpXeNzNZWogLzKPWceWXhSTkjRvNHsXZ8u3RyMt",
  "key3": "5vmdie4k39mWC3wFduJMbjLMCZfMXFX8hE3Z5pCjAsnNEQNrZi3hcCtB6fdqj6yiAUwL9FuC27vqPWkhdmCSNBKy",
  "key4": "Uo6BSt6UAtFksVNsRJYop767GdgsrMzCEDSE3PzBDV79yNWMma3zNJhGjoHqkkqp6A7Xhu2ADAbmLC6oXkFBotz",
  "key5": "3bP65YM96dVofMjQ4ngXvGCaUkRsiHYCtyRVYDtF3oniF76YjqQvPSzDZqBDf14Wjf5CEhoy24AwPUMoeTk19Tdw",
  "key6": "5hWyAcUW43tHLqFHuJ8vjg2dMdBUNtPkrXKVSRq8hrtMttpetk4qEE539Sbv4A21nXtH6hDJpnpa4uMneXh8kmT1",
  "key7": "a1YnJk6WoPqdZqAhgaEU7x6CkagfyU9ZAPDxgULALqTmAC6oeK9wVU98cwBCyUpBcZ8goGMBN3ju2oyMvqzYkDt",
  "key8": "2h6T8C2BPUwL6KMcd9z3xgQJLipxVq4QtLE1xaXVLNrUvNcRAALwUcWGQ83iUynkFdrW1VDwW3ZiXHFvy3U6yRaT",
  "key9": "3MHHANSE5xFQVX5GNJk1GGPMtzKWNGt8NU33sPxqS1CN2QBQfg4DQLeJn6mbSi2ncdmmGAeGTtz5o2p22D6aG4Pt",
  "key10": "5BWghVVtnaYdnDbabFa1VaFgymyTLdyJRraFixARVjyJAfrH7vhKVTAgpdAZiRBK4LaR1G3RtuJswb1PDh4PsJVF",
  "key11": "5aN59jDyZN1eGVfUwTbHGvTPbZJNjgLvmwevNbTXiA5adNidbBs8R9k96o1N9e6RYmm2s3eGs2E5y2BM4sMj5zba",
  "key12": "5AdRovUvgc8fDr6ereF7AeY8siMSmerbPyPaK4PQzbBZhakPyEbcZQjzQGpDuuaQf92AcdHTXvVnKF31rs7ytaep",
  "key13": "B5fYevG3YJzj12EbVhcxZGLEt1LoWj869qongVamNFkMdwqHRqMTuvnYpSU73i9P4wQNuVWjZgzyoDZJYyc4VpV",
  "key14": "A3pZpRXR8iPBAF5m13gDmH6hpp1aSQD7i1hFCEJ5njxPT6Sg7gyuxH3Ane15EjZcAHnwhUoGGQBV6ciSZ3ffKhz",
  "key15": "4zyCQVRCMALmnSmoV7TBrcSw3fMJLQ77NRgeKDSonGsH9sHyGhrdBdWhAQNRTkFahwcHFBa2d7ZoqgkdsPN4RE1Z",
  "key16": "xS6w7Hg5bKcMHA7MmUhCH5BCi3ZTdNpevcVnxMqVYz5LcCfDrA3tMrBM2nxE4LWkg3jJfAnKpU7QyVEv9LqJzxM",
  "key17": "4JukBDrsrjDhEqwVydRd6gxvk96kffmTKwySg97eFUW9HgZdsA6kfoNJk4wVHoNL7nx8sjCVgRxNr88qDkKMYAPv",
  "key18": "14wP1AsxMHgdXQqyXG9JXeVYQUMPR4148w4oe7ZFgR3V9QeWqR8Ecek8qk23UAdtgJU69U6BZZfKpMj2bbFdSQn",
  "key19": "4vgBFzrMsFFfwmVTAaxveFLVfURY6YswXJCX7bqZXzPKPFRWMKR73zff8zhhHSrE5ifFUF6vTG4ESCbf1o5SL7p3",
  "key20": "551XP4NdB9g73uUtdzw6F5wyibVSaNPVUPSXuh6gbb2Ge3T5EmehDqSbcmtJBjRqFfC6PYcw6vzfQmBrLFs2gFGE",
  "key21": "4tiYYyMYhud4sAyn8MYJoucQNRTx3Z2XSDzfH8wkiHueFxYT9tQGs8qVNkYSaF1YdNntcnFytmtt7PXVUrUGQ9eP",
  "key22": "3HdrrYQZ2FoejGFFiP3vS3FrDspEByWmNezecDc4WUobvHGbfeUxcZLUe2DirF4HrWreeG9Zvz87jBg2XcCpWwSJ",
  "key23": "nAqiadMTbUHHJ6sFSVfCZP66WhQMXJktgc9LkH6LfPpRSFR1nwKhM6UXHGCb3LjfxzCBAaLTN8RRDJQEDcia7dR",
  "key24": "26jWrt2Pqkyaeby3g5wy4Bux9qFYfhRQAYn5FumfsQsCnxHx7T7h9vWBqiczsBNwS8jnHsa9RzgqWTb5qNZaB4x9",
  "key25": "58S6u8Kf9VLU56wCFpVadvt392v9qoqsciAZdTro8EvMrJKGsT4Jhj6aH7U3sNrhocgT1uKdriUdY2RZuv99MunN",
  "key26": "ZFBv113GKykAvb9GxVYbK6bBXGFGwvi7oDK1msQhAofx6uYD639h65SbhF5zwpPqXa1VLxazMoMDrzd3zty29R6",
  "key27": "Kxwu4PA1jjSjwus13Ln1hhMDpCZ6SQ6hFPHJerTaKWQFPCjsju7TN57KAm31VLfeceYCr4G9Gms7kCQRp25HJAd",
  "key28": "5yu5FMZjbo7nsUueXNR5ftsDjVPfi4uuq4bE5zzCqsigsZfPq1Gjb2bWUPmhpRtT7QVmdffyuHDHLGWADtJi4rkh",
  "key29": "ih2cu8UJBKfeH6qPiwfx4S5PbDehSmHWuQV4Pu9qGWQNUwsFf459XRAyanQmhyMTsKN1oW4ZBehSm38J11zTf3M",
  "key30": "67Btpw238EQStupZaHPgUnsnyq9zVrgrP23zVNYAjd4PgW6Nmj1DzQtn4uC5ahXdVHXBvakWngFVzNnJCY6e2VHE",
  "key31": "4ZVsD9n81w77QJcgopgDoKEmgBm4AP3NmKV75MKepWSNM1cwNcJU1VzxYYStB1yhzRozikLonchnM168hmVRgbay",
  "key32": "2pcuMSni18MZT8sWheyiQtSrT81CjYgDAYGvXBm1cAofUAwh2jK53z1NQTkZMkRK5yUybVDYC9zASfT7kRkk3yfy",
  "key33": "vj9p145mHS4fEsaNWho1cs4KJQFbzeBBhi9Fyd45RgkrvdJtiqL5B5KPxEpX1x6b443ZBzVXN29ZjqqvJGfz1o4",
  "key34": "3bbysNPgPDsF4BMNxndhXhVkKALUaAoLkmRcKitRsMEw1BCTE3ZM2c8K62QjzY4dFQC3BZkbs5cohG9z2EQj1Eqi",
  "key35": "3SE7LLhcGRGFHUmZhEmhFYB4787iDYHatkzHio36QHWSngMGPewtAkBPvoW188FuakhfN9BARkEP7oEjp79p5U6Q",
  "key36": "2FkDL6gmgwntGFhTmHH1vhbMuAoomk62WFXYNKfiq9p4jBG8yfwSWF1TJuhi8uP4kFZueNP5B8uv8SYzkdzvhmJ9",
  "key37": "544Aqrd2quruejFn3LNPY1fSs7RNpsu4GPx72VosyBxLbHcdQ8pbooTwXJwqNTizpMBf6WbyTqEmecoDnzPY6XzP",
  "key38": "4TLWsN3G7VanJ3JkwXzEZQSKWtMJUvKwBTQb9B1ZF3vP2dw9ULMNXiVYq16zPXjugc4Xcp8A2eAqNbWv9Rr2LD4j",
  "key39": "gGmDkbgh2U4vPbxfsUzZgvYDyb4uTG4TpT1HVZxRc4VaJaf7Bs5Ko9ifgtpagpbht3ny578NFZjo5ixgT3mbnfs",
  "key40": "dWtMfv1vtotVgxBqrmB2W8zJxgKtugmykLBY7mupXTL5TbgfM3X6T5WrHno4eU2sj5meQUS55bJXCoAqAkecUkP",
  "key41": "3tZwooi9SyMnPMw7AQaMH6ryR7x9uRVfgQU7mEnedPvYy37PyYbdyJ22XcUBUdqb2im9didYx5rp4ptor87eWN4F",
  "key42": "5cxWioXtADaNGLkhDrEfra8tCtukjMfyBD1t4BfbrDSX7cuAyjKMBT9FvCdtjEmVyYmVThj39LpjERSFRE5eEDpq",
  "key43": "DtJumQzrF4fRoi57TqmAtsrEsFH54qEgycXeJdeqxnwm8JjytUnX39kChQT3CY25yKGA1n7sp7PYWCuGUND4nvX",
  "key44": "5ZZLbyXw2sf7iTRqTypcPVxsRhiMNrjCxzZ9CpHewmmZkwxH6uXXrDXgdY2hZotrpugLS2SRjtnmVghnC8dHDYmo",
  "key45": "3aE7wG5G4DHas3AQQ5mrLLs5xtJuWMPmADtJVDRbXVfr1htsSJ2RuwKXRBgHP3zpaLy5TBMMBpBEXRq9npeChb8T",
  "key46": "5iMSSx1agNpaADErjBCbz6hXvuTCxxY3ShijTsGrTtdgCfHEDzn8HNPBk2tK3yStQV8o3sjk2o8ySBwxkPcEqdbx",
  "key47": "2W3xoYGNpiPwPFa9JdK9kseJnpNjDqiKJYbt47bZyG7eecXoKXjk99erZV8XtexXcFU4b57R2DjuBieqHe4U2AbA",
  "key48": "4vh1hMYfDAotPxavyssk8rZtQQrMRiEbW44aW8Qzkgt9cFvjQ4bJHou28chRSxR1KJsrYzRLKRjokb8BF7Fu7q5g",
  "key49": "2RYzPTXmuCg14XFkBdv2SkrJ6gXrxiuf1M3e5pBfBcysLHpFeJxRKAa1yomDNVqsBUtJ6jHefqvExWhasqrGNGZS"
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
