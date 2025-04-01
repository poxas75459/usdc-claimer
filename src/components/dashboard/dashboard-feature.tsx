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
    "53ihL5jqGTsnwKYNhGgdodRKpuf4H9QLftmQK8Xv5GDx8VhooAq1meD4k33dKvxfMLy5pwUvLj8iYzn6GEfCD4n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNAmCwsQ8ELcmoe84B8ogbYkrCGLwgTnBRpgNdpA62NX7uAey5QHUiV4dc7gFZT7QnePAAkgSyfcbZfgwPcdpm1",
  "key1": "4Q6Az4HcTk2s5dkDu2CRPVhfXYmbMjxRreWpC8i58o9Nwm4zLhVQEqe8Nn9VUg8jBvDqYFADY6f2SpEeCsbwyHQ1",
  "key2": "2xkVkst8HtuFqpfJ1G7c6kJCmeMrmD8qZ8gcEdw5p7QfWwJ3f2DUk2W1cRf87eYJK97spSsPcRffikyo2fEuibcf",
  "key3": "63HzT4esV3kvg12ToEFaMBq5Mcp4zcwEyDgpQwXWSjDGXAnkaK3y2Zaa6Zb4yMUExwNJrerBcxu5XEt4UBzthDHL",
  "key4": "51PPmDCdE5aBkkM27uYZWtbqPCD2vqFgDnx6k2NmBkFnoCMtU7rLJhsiXGvq8n81VZJXpVkWJh71qDn8tAupz48p",
  "key5": "3VVkTJsiQAgqVMMghYMAV2F9Rgu3cWPgvCAb7uSisnohHcfGow7C9UZ3iXgVw6TXGNgVdtBRdZBsVecVQzg4JgbJ",
  "key6": "23FWGuYoRLzW55cWPi7W1NkarbaDAmsD7Rjxsg91UW9tbvZYZ7xTAio2Hd4xK1aDmfxzdVsVeDSdJ6aj48cj3gUE",
  "key7": "3xDhLarfRW6sdReqpWvyAHZ5eFish6T5eXupEqMP8qfkcaFBzYbrXk7Ctitb21zSjQJzAUqgB9ArwuRAdxHuQwjA",
  "key8": "sCqAraUJGevK1EbTFyMEgMkHnPjEwuougwoVsdqYEYBFRUToa9hnCthCSVzAZScDB4E8G4x4w1GMmZJJq3RRJuB",
  "key9": "5exMrCCdkmfp386e52B57pEQWRoATe3LPRdoZurNiM1rMMTd5rJFRVPVxwBj9gh3TL4a7s9SgnuftWKDEBH9mGkE",
  "key10": "2uucimSUR58RwBsBQnoppB3KPN9Heu9tS9SE9oVuFzZV96WLjUPBDKoAWqQbu5onS5PW5EWx2iMcsAfyS1sm6KUj",
  "key11": "3CSo8wTS8aUCXKVqHm8PSKXH6ZBYb8PsFryE6iTGZSYTPgNbjP3aot1FuDPc2vsgKagfrhkMLZR6evrEMebMNeMc",
  "key12": "3hR8csu9TJgKnN8y9d9etBxaT2f2JKzfYjYb6vHeG3nz9jVFN5ncEWzwU3cQGSp7KbAgg9gWR31vNbk7xVYDtnTD",
  "key13": "4qhyYUYe314jd4rvKFqPzgUVhKZ6Yvfk472AjhgfRxZY3D6EAZ6udJApGdErWsm4GG852D5Lf5QQLmX72EtknToM",
  "key14": "Rm6F4VGkR3RsrMRyUdRLWhMtX3FCQGB5ceq51YBcCKBFAeVU5J8tFApHxZQzQsPo6zwv4kDJWowNPpnWfmCbSQx",
  "key15": "3QvUSHU9nSeD3VLnrctDFrBK1tp8Qtf79dMzi3YfXYXASHEk6XmJosdGcLXMD2W5ZT2QvK1a92qosWzjt1r2GqiC",
  "key16": "2jxhU6XSQLxWMXA4bWjUT4c2M8yB5kuRcuLdgJKQaKbwLLedg319Nusn3GSvM9j98niM773Axnm3wH6P9HD5dF9v",
  "key17": "3TwiuEkMWHQpFRa7RLSv6DYcGAd3TQUUiBHCSr875nsdDXffHnSzQBag4WzPFs1Qz7dMddzKd3vW5Hqb8YQvnmWr",
  "key18": "8oM1MZu4wNprQVcb27s7AFPqzWpEG2XerwoSn62g5wYvsVEWDfSW6iPPE2VpoxawDm3pQkKJbMMMeBMzPSsp5oo",
  "key19": "2N6s7k7yCYKkrCBMsWtdo4Xf3Udq8BXyzmRzGydYGREHmJjsZzsdmLGUgoL3itwYG71YqZ76ykUx8z2vUfoRa6Hj",
  "key20": "tKcZNbNJh5S3C4hfzAFEoMjRBDiep5MiQLCBn263WgJyjcSM4JgAwaGjWEwTVihM5SDyNDCLtjFVeyZjZE9N8Lo",
  "key21": "Lqs3TSbShWRcyvQsfvsw9Wtw7BwVrSGLBPHNWjz7TN8xQw94f2tUPBRK8uvLRK7Wz8jBMkAKWFfADjnLfY9rKoW",
  "key22": "219uWVuan3uBcAzdMZeYwdrunABJ8kyUMEW84qivfWtBNrBufvewEjgiFdnvn6K2B4ZNiayv4m9HRPPEdbNtQWjH",
  "key23": "3KYYxsu1hNPVSieiUxLji4AH4hRRapx32wWRPT68WHnrPUgbNUzEc5D557EpfdNScQh1xJ8VHVvHG2YnHGWWjGkj",
  "key24": "2YkRxitSkgMZL51nuQFEJmUiSPYrrJZL4ZMEW2H4w9riKgqyvJever3tpF6EAseoZd5QznUiEqL9T7CDXRWcTrbD",
  "key25": "36Q4cNH985c93WcJGNqcwXMQQQiMJBiHHm9gRKftx4DhFXdwrrc4VwifQj47s4dYbJSzoAadKGmzruPFRAov1nGv",
  "key26": "4nqzC1kvGhHBmpRD1FGyfsMxweUGs47ChM6Jd5225zd1YeY8m6ez4wbMaxEWfubTi3UZJGLXpTyxDf2RCurj7n8u",
  "key27": "3xVm3ZWoJ8GUmuzZ1vek88zdCRRXoWZWADLv7x2PuRVcGrgWaXUb3kgZceX5tqKQgHxpsPbqWXeT6VAx57B2BAcB",
  "key28": "jLRNZqHQrRT2YnxV114Ec7ymD3nSWhJHj4bCa3jKDFoVuyCp55AA51Y3WCSggF32QiLVD4TKQfPA5nHQrW7TVHw",
  "key29": "5dL2YeTKpJATvSVYUyPLYmqLUHjS1oRht6oFuTMeJVteHYNzBHRyQgin3BQhbH5xw7Bg4wyFAQEQJGE9RZqbK1Zy",
  "key30": "3v6yUQYuHwgoVZPKs3B6whvkCuvzyLnVFpVAFMb6P8cq3XV6vDwT8UoAxZw71cFKMik2RLMzjddJ38wcz84PJwL4",
  "key31": "2CZFhiknb3CXXQ7tEtm2M4WDxMeBAtAw5JGTJeF1L8dXE8t2XCebuU2ia2ShPcJUtdQpEE8i29hPPHghWNxhWdup",
  "key32": "CQhUuiZmY3fsgynGSqeD94CBPnY9f2PUNZrX8xeRvbXBmtkiC779ihUhNPxVjhbqT6nPKrUmDrffqmx9xAMH557",
  "key33": "42pEkNr3ParAD31jywPZdNQKpixD53biXsvsQ72y8yA1qRJEwMiY6pXuHQQzqKx7QzsC3xWQSBAgFcs6ZKvzjCTX",
  "key34": "5krQ96YVcQjaHhJbiGFu21pdsa2zCmE8NzErf7zFeRzDmvGoRexWE6jCbzKPaSKUuG9GE94Y4cgaoHdg3nKEGUN5",
  "key35": "4s9KEPkXN8ZKXV6HoM8JYBvniuSv9jBCh6vG9VyZ9oDSR7rqHLEFcwe8JzpysSWpa2bz1WLQp4RUWZSKZJ7siVPs",
  "key36": "5jPH3PWLvdXkc6zNnmzG5YzpP7ckdpsDZdhxAn4aPwKVPTbQ83CKkin4qSyyhb7zHUJ23KEtiGuoD673B9yQwQtR",
  "key37": "2UxPRnQA2ygEGVamQdpoYmra6bLj8GNCw3BzapuymJ87Q3WZWYCduLkBdA6eihFqs2fePZQfR5J7nfkgenQk4744",
  "key38": "4SYuuUgDwTtcL7ejriD7sr3Z2HWqDzNycQ3DQpty6jxwU9ddgHo4aH7Pb7GzB72cUhS9Zju1xEb9PVDYt8dFgK7J",
  "key39": "38LCaQ6gtuieKrHDNTmqP2casoK1x2YrPLVto1AGiemdChTMuUtH4qisGCzHFL5R4fBN1uRxPTEew91v4SKUwgqp",
  "key40": "5MmGFJ1ZTYGTjSeHAWeBBzYf9Bs1R8111mZHykGLm6J55VTgCK34acE9CdmyQ4XiSDJ1J9WwuYRpBwaEQSxdDpBd",
  "key41": "5qePhXKqAJ1kWLss5B9xEJdPA7KHtgo6ayuSsP1jxi2YZPzbW3sFtUHMnWjr3Uj38UZJBXf3xDdYTot6JZhbvrvK",
  "key42": "4r5MvaABaQjU9HjwAwT1wasAgaueXiRZQEL2pJ4UL72h8KWpwwq9GmYXmJ61ugEhYguVvNf4MAsqLr4fDqfMQRFt",
  "key43": "4aZuKek1Fk81vKEjqXsD6Sq7p1bgy4Lc5qqnKkMEcdESfoc6fwfXMij4aoggfBc6j2Gm7KPGZPGNYW6mGMzrEaN6",
  "key44": "3Yio7VtQe8t1FR1GmkdtPkSoLwYThMBrAHYUanyqBLAqfd2Cyj6ekL4mn46MdfXPYAQpuPfcmBx1Wd5gtqnpBfsC",
  "key45": "3yV6fDvyhRMxrpZGhyfcmRsvevrS2FSbhLFZZWe8YQZy64PRgqnpgcLSs84pfC8VmQygZcFmVQU5WotfwYorJvjE",
  "key46": "2ZTB1VZx6jyQMBqqjkua759R3Bn5Ueuko1k4NEL65HTwxSqpKsZaVZcn35PSV614pQhzvTRPAQ8T7YMaASGwj6Ku"
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
