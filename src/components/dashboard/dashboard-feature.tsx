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
    "42qTFGt36nGMC2PQZNtkPtZHVnDutRR95EpxYx5q6SCFupABcfyP8kLninaP4svcbHYKsj1gvEpmWA7unUa9phHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axNzuVPyHeUNdRDZU2Lhx8sKfLDrpbUEQiwjzELRQP5EvZtKwaQSt5n8LrhqBfTF3FmFrcjJsssvr1iq9SpJyaE",
  "key1": "5iN81riYatZg6y1uezCUhU4gX83UrnCsHRhtvoGJi2UdRp7Jvx5oG5T71tVTqtT3UzULNkHY2Ea2dyp5VyzK63wZ",
  "key2": "vHWWKtJ67k12y7LBqTGtr6zHufumC1uCEBagLZKDzaRggb7FPni1aARpMVoyqJH23q5GctiPa4sT4EvjedNw3Ej",
  "key3": "2SondgKLLkPdVBDufPaZ2uJ4WnnAM8AsPw5QrA4PjrBEWKCAGKxpmJDie1Q8PF7rDZERkw5uaU5aXJ3pbZTepk9x",
  "key4": "7e4iegQrDpW9ExH4CPGNsvs7XRktszmsqwwDaX74bt4qZwu6WTgpBfxxbH2Pq1H1sdP7mDVcDAeyCcpoip37SL8",
  "key5": "5n7ipTLeGstvFiLpRT5NrB1KZSmADFPzepJXYRKd1Cq7ARKg5HA7nZ3w3EBJcvLHU6osUhB8kB187jj1i3ZdoUt4",
  "key6": "2FuWJZkETTDy8Wa64uuGGRhu9Zc7Jg1TkmQAVsw2sUbRoaW8Yas7s3iY6cqE1LtLtipHmDqy8wwAKtsq9QZxpihu",
  "key7": "32zUcekThKWrJt57oPfgh4E7ARLzcSs1R7vezECpJdSE53caA5e1e9ipxSeju1av88Wi3yqgPk8KVmij4XoqzWcc",
  "key8": "26CaaQ54ufQJjBAYKzL7ozoRqBFBVW3fJk4J2FQMbwHuEjmAD2C5oWegs4tTMxwuELoPRZ7PYCL3vmKYNRNrSA2R",
  "key9": "2fjUdNvUp9wEEfDK16owKS2gwwpUyzadKDqw4eTZ9gjnn4Ppv8NsfLz4qE26RQrNAV6EXhiaYCxX7rgxQDVyHzRo",
  "key10": "5TGEtTiCNQZPq9ySTTJVZTdBs1AY5q1cWp2mAt49S9enqZLj1goBzU9NK48Gp2Dp6XhUZQ5N34Nj3FrEthMAEfFR",
  "key11": "2xm1rFXC12pskus8UnFY5kW2fYUtKKcBGpUU4Ains2wf2XyxXB6MGh3gpLgkfyw2un9WJ8yFtBVN34JdSS3XUSjM",
  "key12": "3r1bZiWc2jcd9TTfwHN7ggjW1SNow84burDNikwCoBUNELAvbgcyERjoVJByUuKu6dBMip8LYg9CH3bD5ZDvCUrR",
  "key13": "3CGsGPu1ynzYCHKfJWvWU8qYkmDjzxu6aWX9L9N9Gv8iRdYtUxvRXhxreVR7pob3wFxeYxymeG4afxfmJa561S7i",
  "key14": "5b57WnqACgjsok6KHg4Xd3V5q3oCVEvpBj6vpvwTZU3Zn3J5a1TWqQoGxFGDV5f7xv5JzXB6Ka6KUufyhoBxCoZQ",
  "key15": "21B9UMfcGJMDF8X7W4QESeR2A5UcnK8RojmVNKpeavDNERAgKuaGcyRMTgTjpqQz6XL15mibBksXCVGiQKx6KWBv",
  "key16": "67igY5iRr2wBw7yjrjXVzRivvfVftB34VeDqGfgws3efHKvy7pBKULeMS3JZeXDMCWc582AwQLzNU1QzYUHNK8f",
  "key17": "Rjt32aHNofhX9k8KyQSb1AbcCjgWBK2tsmmwG3gKFPdHvkpFBLMqFMAhJbiE9C4Rtq8DWMmg5Ahn5KkxsMKuxwV",
  "key18": "5ZWBFzJeuY15e2HRuwWSi4TiHQc57Csqty3DVcu92Jrkj4PxeDjeJ7trhA2Xsnc4kxupxxXpfGqMoqTg7GbCaiqx",
  "key19": "4LPRccQFffBgKCj8BdPTjCsAHmZTxaX5wpzk9WYGqj5jcL7xQegNWCHv88eeYHgAX5fgVUtufjh2sPsoeFNvYFod",
  "key20": "478npzbiUoLefXzgiB2JfQp2rcujmhuSLCbJt6D6aAqjcgUU6MvquaJPvSfpEeB3nHBNexukmZYV1z5psEbcm94S",
  "key21": "4TDpgW2b8WXwtTBt1VDHWbPZfUVQromb6Te5qXkuwzJzK9P9jTkbmZJ8vFjQFTKwEPiZwsLaHpFSVDa6JL3HMimZ",
  "key22": "3Wb15D7HHF4vvgNDJvyox7nJFwvEtFRUgWUiRWAmQ4vo5ot8aRVp6hvzTxbZeYMNia4849QfMaYoUQj7iCwQwUuN",
  "key23": "en5cai97eBhpsjPqNNv3A3pEWRG8QU4jTaHkx7tvntuGJS49CdbceisFqUGM6pwWhwaorMe86Brsw7MWg5PL77z",
  "key24": "2qdwgifBgQK5RkgtHQmgwYGUX5es1q4Vk76tWujacxYqCQXj1CqfS3ewNdxhFQ3hLwUP8eLAqWVCYdoiuCzkcBnw",
  "key25": "Nm4CNhjc6WwUP51KGr3asMq9qx3AAzJiPR3dmuFcCnGoZq73EhkEUF5PfeGG8Vica44PS4rw1tZcaWApN7gd3wL",
  "key26": "4nNu13pdj9ZGEserwtfKn6t4GauPHhi92fqtV7Dah3VqJ1dtXUhVqTCD93x93p2uoJ9NFKFKjjhd8DGc6eKQUGDr",
  "key27": "5H5gYEL3c4Pcx2EoGn5133EqRTzNdmbdf4FpfVjxG1E7h3RdcCQxwwJQsMehC8UXMkeToRjhPJ2pzMsB4PCyZ8Di",
  "key28": "3jwnxzjnFNJQYgASVQX5EALUWT8YAkngjQiUsY1NQS4mjp75NdgH1dpWMqUz491G6xjSSBETJ1YujdRjqH4GN3W3",
  "key29": "2Eb5wANTUh4Jm9KyH3gU4nGchwyrhBeYbpkWGMxF5ZvCLeipSkS45Lx4YAGDpnos1h9Q4sG8GtTakrTjcRd4Bn6y",
  "key30": "5JBa2mS34UY2o2ekuUWoJQ5nNXPrncqBPCPG9KoVypgjCF3TAdFMzayaFmxV1sC6bScFGaLmuaqXX5UNLWsz3NHR",
  "key31": "6m1aTN2xGKtZcWvTvbSAEnYQLmRBFATWt6Bkn1AuumhX3CFrEt1yXHUWgyhSq2WoqQiXYrA2WGDeRHJtwaLhCQa",
  "key32": "yNDopduMaAv3uDsRSHikUrt163uJAzuVSLDqM5EWsnh7QYPyWE5XHwoTwBL8814qAxYLArXMBhrQdcSQU3Npan1",
  "key33": "5HN88wSxmgDPnSwKiknibxsMZcrNNnxKjwN8PbJSZENxcQyDVbJummmztfCbkymbvxz17FvUjwG4RjAR2gAb9sXx",
  "key34": "2fatXuNqC4JeRUG2d2BUX3LZhTPeGzTLVGJ4qNjmoZbF1YwSUZcTmm54hHL11e8Q3qipBwXL4ESJm93GripbpP38",
  "key35": "35dQgCWZVifJJe2QcZFC3nfmpp3dYkfrinGHGfwmpR8JVijQfw4475ur4RKPA34YPAZ73Ef7JqTmH6uEKKtPXW4",
  "key36": "236amxDcqVvEamRMLNugdqqxtSqsRWYYNqo7TjdSjKqTik2Ff2oY4WrEzkCZdRKRFqvvjnKoBopV1xhBRSHG9QRL",
  "key37": "hGJdiarpTHXiycvogjr2Kjq7CtzFsb2ckZMeQsj43ZJzWjCfcH3RpMhXsvsJ3DMWjBYxCHAqvzLttw1o1jyASfM",
  "key38": "5wZ8XXswycSydfBqKhQwaM7yy9a14HhhJABJVXmdcuzQ9qYAwWXSJjqDfFndTBCRKQDBT2yW9Z35cr6NaUK1GSj7",
  "key39": "5iizUEVdN8iDjgV8uWU9q54DFDYyaDvfzxEfyRzU1TcfwQCuzYsxV7LmMdhtVhdgBcoQaRCSsyLBeGLquNfMM8Zv",
  "key40": "4cnef55ESVANqbUW7wqdSfh99QKrFsH7nhhuRugRoprDUzkaRzJ9VRBNbxWw2v2kdk9t3PeKzfbYbjHDAwUebJx3",
  "key41": "3hi4wr7oeTYe4mgjuau2qUmNLMMUtu5ZXinLGyZqD2Z4BLqCdeuc5Jz9AFSw4yzoZ93ccY86WFQV6wQLSoSVXbri"
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
