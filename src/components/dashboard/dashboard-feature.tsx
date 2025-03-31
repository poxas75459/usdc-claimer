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
    "8z21tcUBS7cNjoirCWbXGiDCpnBoVnRCvsWqJewhbaXKxdDQZ6DEwvM7HzHqTnNAeC5U1NgEbHCZ5jwdXHezxmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWCtmbfbFksZFY9vwsApf2NUX2RiKwN8R7BMD2Ue5XSLxo5wRb3BXuRLfmjLnJjX4j3wdqH8bqg7YGCc86KJrJB",
  "key1": "4WEYuSRx5mmrQ8Qr955ihhqppPDQrFgRPzpW7sbRxDn84MUHCocYCTy1SSNqnXMTpsi5g2Z39Ln7J7dfB9Awqq5z",
  "key2": "323EsHYvHDbYZQJNoqq3a6VqTKXQhZAmpq7fctLqdMtHXfg9vEXxxA1Z3V8oFyxR7qSGABoSoG3Wax2HeSdc4v1u",
  "key3": "4PTLswUFbH3zLWbiNMVLRyZ49tKZSyz13Sr5tpWcARfmA2r8oGPBNkSUdFW9tsF2akQYm3ebyr9RwvTe43vDPKnk",
  "key4": "syB3ggsKgzL4RCPPKx5KB9o8JhjrB2FpeUuFw2fjzVGhDTG6g7XzNRPu3oJVGEfFRXZ57MKJ2C4rzfVtNwARwep",
  "key5": "4qckvYz6ZMTHUNsmHeEEmQyzdWkff2L9RSDWV73pEf6bibYUuymx7ZBoh3uVbcKCHQLnT1kTu8nmC2JK51P1yThE",
  "key6": "3Uj52MsfzWxMgjMwJPjqEoCkjKj2ibDim9FipSsM7eWM34rsbm9JkMUM55yCiSNJwFnLJGQsMy7QyQFM8tv9PWCe",
  "key7": "3fR8ToB7FDtmifBoLo3zLgTkWvaCyeKfCEm58G7WYdS2SUSzHth2bakHREf22NPfsFr2v8cFV9ELhTG5mL6mb1jQ",
  "key8": "49PZnkRDMjgPHEYN4BSdPqZKJgjMe4twFmmX1jNHF7Vc3LfGyy7PGPnA8WD8K9vrLRdKAZ5ewEsjiHzaPhtzS7k3",
  "key9": "3XhDnyPap8aKHBnoETBA1yXLagG3sfbL75pWLzkM6dguH74MjUavAooC3c3Whb4FeHx15R74Wkhpy13sMkdbPL6w",
  "key10": "55Rwp3mkg8CAmS12EG2s5AcPgeBDrpT7ds9yzNYPazuRJHYd2MbwD7drHubdr4WuKynu4UsqvcaFYWU3mobr5dg4",
  "key11": "5cBdvQZZ9BDDHkP9pPa6p7JUKbzUMdQiQt8k8bswqGdFnGhifyeRWsxbTrrdk92t4iYaGgGbnewLb4SMfaanVTZ8",
  "key12": "3FLcf8FMMSc5u2U9FT7WYsVWuG1dzLqLyf59519KVKeoQkiEZbhntWkJzg8KcCUCNog4A4ZuQUyXviXrwPVRYSkT",
  "key13": "2BK21czdf39xpC4uBjy4ywhtao4hDU9Meo1AFPyzfyjh735YtWA58tL3G6ycir6rZWCC26t9x7ZFeE8F6ZmwtUtp",
  "key14": "4PCyoENEB7sd6fTNLoP4ibeTs6tBVZXxn8Y3VYvPb38tFtFtCXEkTEVuRvJgr4iQsrGS7CLu5arf8pEepfYMkM4C",
  "key15": "4FiyfNJ9y67x2unxYkJ1Wy9jXNFRgYjXHDbUxAr3G9hktLE1iAPFUfKfcnRjbz5XyDarf6994qjkA15HG7d6Jqos",
  "key16": "syviAjF3hvt5aU31hZRw5ULLdGJNZVpVENT5RT1chia2QEcCjgpy5xGMdPL6Ho3QLgzvuAfgc8KoDb3qXkFctgx",
  "key17": "4P5s7cDP7VjnoSXyLqbwTLLyK25Cxn2KdVLd3aQVH39nFXSaAgRSe7kAafcLs8338vi96wsduyMojXRhty8EUSdm",
  "key18": "4PFKQg9NbpHdyADMFPv6CMfLCsDvkDYWmN1y99jVaFw8YmdydHMuqSz6N9sG8qQPiufTZxXE5V7jzvV5i1VGPgXq",
  "key19": "5Wmk9oWTyudS18ADrzbHpEtEPTDTPDExW6Xk2R8ASsjutxKprpx9Th9m1ApMdQ7ze2NXhJLZ8qu7kBQZjjZw29VT",
  "key20": "4RoTjPLGDaR2L2Ks7EVbJzqgaAHNaSb7wE8UHEb96RUbj3QH2CjXd2H9FBxhw3PQvGRVdU1dwAvqn8C6sJ88vzgw",
  "key21": "67hGCsPyzawTztJMG4oHpRAPz5gZbtJJKvDXDzPW4jMySW4aPJY8wis1BKm8fyu2Ko8eNCTDYJWtsnMTso5ityUP",
  "key22": "2g1LRPf7n3K2hsQ4d8ynYuh9WJ96W9BMg18fEP9QRA6WWpiSxcKoEBQHik8w2Mp7d7KJh4toYyF9FQntVFD36Nef",
  "key23": "5UagWG9KueLijSctqgMdgG2MWJ14UpdBkxd4Uu9MAjySwoGBDYmubSM8pcfSNeWS4X6DYxtatrEVX4beVDJPGRj7",
  "key24": "655bTqM9pieWgZti5HsS4qvy4K4qYi6fb7Uwgd1sWK5fyFu6DJtWqFqkmpN1UxG5LmPjYmWaXgs2biczN8DCcBin",
  "key25": "21abdZJPhv1A8Er7b3vV2ax6HmTX4bxNxvVerKyLXvgPfm5ru1qCWjeM1N7BKSaKDHHnfqPenjAjuecfFct4pdPv",
  "key26": "5oHLMPPArQnrJLEe6b5PVHnwEBhc7hJ2SJxR9akquD65d1aMyARDr6LHyq4W37txyewKEu2QXtMYUYqJSCUGCrCp",
  "key27": "2tV3i5LDLmZfQXiVaUTHo8cDGvwLSogvTa7bkNeRegJXwX5Chs6AzLpyDFnh6skD4b38VDdfnBNSW8uUXUkvidQ1",
  "key28": "4B5qycboY1auTH2r6VYxVcoHw1nEXJ4zSz94oHNGsTeF2YnndAKM34ZdB4T2vwatfX4YVqSFeJWWs8P3xF4kwqBN",
  "key29": "3dtyn57g2sbbQX9oSd9zeNHLbpyzdA2GkEGkS6pgmEoMgdpRMbEyzYVSi1Cao62cxT8dXJBhZoYGiuA85M4fxxEN",
  "key30": "4uNQJAYJwvLhzEc1tuGvJ17rNyPnBK9H2gXkSozm67kxgUfBRfHX7haoEPznLaJpEBZCo1w2iiRPqpDWYUmZkgkP",
  "key31": "33ZBMfNCkb2ozaBj4CMcPgPXV9gu1D6TAv6y8nfCJLAs21HYZrMhRfbDHp8R6p4VYRe4m8tpceaVnxyu4X7hQAud",
  "key32": "5rs4f1oB8osszzVAZFo4pHNXFRPn42mqpEpZsUET8aW5d6Y5xZKHSASuizF5BCj9wmd1m8ipUN9zoVYD2B5q4Kk7",
  "key33": "4z4X7SWCwK8ySwL2CN3enpzCaka9EDLyGEoNE8xQyvNgMW3ncGgWptxZoyuavV2qb6B7fkedZ5ANWNP2nqGLrHwF",
  "key34": "54ApDxSjP3zv4KYd46nuMmzSWd2gf5t84dnsvJEDawhexmvBGEqhCbW4mekPRcgc5PXHM72rY9v89Wqa4SBnQsAm",
  "key35": "izVCQmUqGRA1NDqdz7aVk2MoYVoqPDZgUb8qTM6CY9meFp6oht58wAN8u95ohoQn6MeMPKY5BcocWxbEAXWksFw",
  "key36": "5LcdEZ66GrpGACoFVDMfkw6fC257yz8e2iMoCEbNUTTcPpwqonGmsBq2qDoacDNbrc5R1oFMdaEpMZCmrbfNx2Nf",
  "key37": "5yeqchkQ7fRczvt18xCygbjM6TmSuqkpWdUimJ5vng4TCUBqS7M9TaCGCYoc41VRWWLK8noXHoctdw8qZX7VZcKm",
  "key38": "3JHCmZhudZztVoRBt6zfHCGEVJPXZMqFhk9KPmH7twDFM4UvhgVmRHKpTLhEu8oqfNkkHTkFsNb9FjoCvu1CLxq",
  "key39": "3ArHhev5QAeCMSVQXo3fYfEHwJXhCFaXGFpW7Rh1RqESsmBE1KgVcEJgoC3LnyVYrYwDDS5ti6nBF3ieZX5Z1H82",
  "key40": "2fHcb1rhcCU5m5TeudgVnmYKveaqzSHxNyXF5svo1LKQopK4UWkHfLTfsgoB3LdXYmZgf1sZppZBNm4j5zMyL4UP",
  "key41": "57gM8ZZCKKEVeFSqDP4Fub5Zy6gpVeimV2HNZXSsLgU9ppgisbY7EehR4epw8GeEehhWX1AiFRiTMt4bqPygFn6F"
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
