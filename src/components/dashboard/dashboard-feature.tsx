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
    "5X414bTFycTfsM8S6tbK4ABxrwRo1PRUNKg1FiiY3Ad417aEy9pkDyDczjspHrCsk5kn72FQZc6Ndj2gMPXJN1F7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XSPGk1ozmwbUQwo5gtFMaQPS1qEQkdZugzkQnBTGiRvQZRZypp8ZXWSRZVxHrAS4vPDa1BbvhMCQModhe9ik3vY",
  "key1": "3TMi9kCgYFMWHWyWPegcqGFk7d4xtoUjCK2REjaFxmyGTmpkczHPn1pN7XhMHU8fPMAvnL9J4ooi3uwLkAE6Pihe",
  "key2": "3fvtgB1s2rEjZr6qjjSDUR6cZgTaCmEDUZFjtMvmiem69RmxapdXMp6EWzD7GSfLn9X5njvyNcQTecReCEUMNuqn",
  "key3": "3ddRJiMezDto6hb3hfp3WJfpUCJqRhAXwWDhGkfAXxcaiRZobmUmhZVVA21iMCTkCcmVtmmH3E4QjxQLu9sou84w",
  "key4": "5kVdEkwrX4WX6M9DCzLdK2yoXPMx58cgFRqthHes8NFh4HCzZvv2NvrE5ZCDVrSPRNfs4XyyZmxjBurHQrdUreTc",
  "key5": "amrEZyR5mp6Tfn3EBUNce5aqqcR7e3NpKKBwSkoSith6YMHGrRtZpAywDvPPVsjSnYAL2dpmWZa7qAkEhKzzf9z",
  "key6": "457Mvwn9zhibHTJSsu8oa6BFZFwwc8qY8Ha4JeZHgxJuztLoMFRaYXg2DvR8EVBaJtZYMAjeyRfDqGvoaBjDHhNZ",
  "key7": "3iyq1kdFP7aJkfCMaapDUXcLbJjpcpBQ93F7UuhCEr4M6i9JnDQZSDnNobjjXXn5Avi13tiTj9iK91jg5M3Rd29S",
  "key8": "2DrkLnMXDNqGYThL4zGeiucoPxWAGjudZVRgDg8UiFEvDau1EU9LqTTsE9rpgjJj3KEiHzmxqrD4XPng2kkSUpuE",
  "key9": "3CWUKaCy2cdvDWwAAu5gj5Gp3mdC5df5a9xMFQEj6N3YEXTprbDDgeszbmqZxBpGrLXWf4ReNqCKgr9oWTjX2Crn",
  "key10": "4Y3R7D3AJghTBJXxb2T63ppHUxHhayi4vfQ6Vo7oLUsTaHGMyUqSxKLq87nX7z4zz5WBi3S65udC6Jvqu4hndrkC",
  "key11": "4dSQrsRiuus9ruSGGgFrsaqkPXabuBmBJ3wPxkSziX48tPu6R5v64rcEgkcg7bideSoRm49GUjKYvftjyjcZXmXr",
  "key12": "5SHbKPrfyrAmuvKXXPmNFFMCfPcABPAuAmeYgkdaQYcAihCuXy4EkQrzcA6kTjQA7J2MbRnZAFpNiz7wNySShNUG",
  "key13": "hfbRTJhXhZYmdSsNGH8uQYLt33qYw6SNQfe87nepkXTZepgGsc46xy7c1uZmAnBZBysDrjf2DRAFTPsqdh81BEG",
  "key14": "2tJ6Eoz666A2ETWjKmKL8qMKkbMKEUQnDuQVJ7fHHj5sj1RcxzYK7wKk6YqX6fL68bdndrWMmvk9eeXd7MzcUe1X",
  "key15": "3NBG3sjrebsw7w3UwWzt1V6vnHWYz9MUmiQaNPFD3yQfwSm7JBuDGVD9pj6t68mB3TSY2GJ8jvhQ84Z95RdivHrx",
  "key16": "565P1Z2KPmL4quqWTW8BMVFEoM4qCpsBiQQVzzxxkFCAyDEDfYuPkFdMzBtkk5WydQdk4KZWXrGsEusaqqT5ZofV",
  "key17": "5RQas5ta3g4b8i25mC14hXi3oZfRtvik1KnEUUPjNi4hu81ekSHepGoidcASWD6h1s524Hgep5iqLK4vN2Uq2H2L",
  "key18": "5745CLxgD8hoUyeAx7iJ2p68SyBG2sBYemV7MHu83hmJP5VwUKjMfk5vidrbUZs5apbQuC8LUo7WEP47HTQ7yrxc",
  "key19": "2osgjevatYY64wYjcn6vMeTEMv5SnHCacXV129Zc2Jr1Z83YAzzYdbQR5kJEiKqsPzuDtPaAg867vz6RqtZph2J1",
  "key20": "3FE2dxtgf3sBHdmjUvDjAQ2CViosXbRRnKAwRJwhEhyJzDe5ZvTV2LsU48p1qrdLNiYz9LtU6sZZjaj7zWydrZzx",
  "key21": "51P99rxUZcyxs3hyWeNV9u3NR9ULy7k2hhW3xXqpWASXnJJsnQ72zKUXdJbwgCeoKEsSUNjPndvSk6vFYFyXfGkj",
  "key22": "5puZRySjtebsQPXKoJaeHstcSjNnpj9HbKSaXgXqgz7NadEAs2GbMu5KG9yY6gujfsRKY3bkpGsWaP4QpxndworL",
  "key23": "2E1FsNMrxY89ikEi45LAuz1za8nudaCaRYx6RcULSkKQQKSJAf8GDnYSCmdn8M5ohPpT9627MNeTPQFjbSx3yq5c",
  "key24": "4H1JJaqyCCDhtBUcHjpGh1DqFf9bQCuJuygZ9kFmGYb7gTnzHGxy36VFfGboTd3BNZGT5GnKQPMjLgmBjR3hW2Y",
  "key25": "2ajbAeyXL2SXDFr6YZ9RYv3uuYJBRADDxYRYKbLqjm9JYe7zFDr9EPXLQNkWoGsK6EcirdtXuMUVYEu9unc6CCS7",
  "key26": "32YBz4ZNn5n5tXnz6L12D87Aw93jxmMUFEsC8wBfdvfkiD3GEXMvHnpKzSfNtHihpdwwPQEtuHWMitTNEHivjniC",
  "key27": "2zHqhy3cag4LShiJdtct95cHMkqLGuXxxpXYSm5Ywzt2KhuU9JQvpN7nwkSDLQpv8xWgez5dbhaf9RAWpDX7kWwi",
  "key28": "2N8LbgnVnnqqdqhADn35Fn4r1iGUU4yVoosF3sxiG9wGdTWSJr1cW1ryqqcQHN7X45ppi12pcnpTq8PHpdP9vYa3",
  "key29": "4wmwsvFM6kSLg5psrPamWBADHEspbhFCk7VTUupP8c57wt22GaTKjGiVj7hCjTQF79BVnwTGDomTVRydUYPgL9FY",
  "key30": "5ud36Tm61vVzdybVj4B3RdmKgU3isTz3rx5KrPyqwDB259KaiTvRducRhwtA6U7o7sfzutw8YwxNsYSDKboR9Pr3",
  "key31": "46EdeqPxoPFSexmgweE7ehVVXdwauenCnuViooaowZeYxLAYwBD7jfpnjfw68MvMHnDLJpG2iyDAHSpVAyH5QZ9j",
  "key32": "5ihm9n2Ru6RW5KWmdERmHVEFLhWWMh2UjbYsoD36nTU86MRiUV1P8Jy7Do3rrz9CUuedx2kRdBRyEgpHdvehQjBA",
  "key33": "5xXC9sfGa2iDdskdS7YfRDreDMx23abSGy2MqnSBArNCYp2jYfWsUbo7cNBzC6kFU3hy5P192q9aUZahHo3vUcNA",
  "key34": "65fuf3DGRQitW2vWYe7w2fiTWqcyL4yDy2bfnJqYnvq6YHuLbpce4RsrJBs242dQwPm88rx23kF21W5fi8kG93m4",
  "key35": "569PN2rVrer4rCmRaKT5gbtgDsiQhEeacP8bnpzrRAFKVVgLw7uuoRGkWHT1uq1UfGVeUnGbhxZLL6YsK2E2o3dz",
  "key36": "5chtsHsAMZR2Se4hhWtHvVkFidsjHk73jyMa45xM32fzGRZKgAGGK6bN8HkhdnW5pn4F5qN7y4vbGmKZUfdHToiz",
  "key37": "2KzenqQqaY3nzHnva3b8TaFA2c9z6YzajT1KUpoiEXU8M7jcLaLvtcsebK6x9s3rgzRBQ2GZ7JmoiTF9o8kEs1tf",
  "key38": "2sTHWWF3haD67cZtZzwAAGyExpwnynvoW7rN8TByucGLhxJEBM7o3wQPVhcDZRZDBnwyCarNYmK5LYt164A8F4Rp",
  "key39": "PqbuxZ6g2zo4ZTcS7pKcrUtyjvL7vvzcn5T8JC1r7YBjnKRVgD8Uf45vH1G5hjeg34xCuHmSmHPBxHXTXZXoLnP",
  "key40": "3gthMvPXRmX1SW5hHCD1ggJnyJFgNoNWJKDceu5cd9qj9G8oqzRaVriGjFZ4rVju7MX8iWV1TEPnuGvddRZyN3LA",
  "key41": "3JZEbNMS4q7SZnyCGDh1fm2UcY8u4KGnWMbjJ1p6dAP5n7yPnK4GoF4AhQvH8caUuNs3GgeYJyr4S1bm9Mc5Yc8r",
  "key42": "5Kos8iipCqGqJaBf31Q8tCGww2bhMVdEhokPzg9WByhsNZpAK52vZ7zhvTxiJF3KMyBwEpJPnmEN4LKFZBSyBx8Y",
  "key43": "2Wms2G53QAXNc7DvvmH9bBkkokeorZskXQ6mVd31DJiL6kWijEEeXtr5fdUA3PnhBvvyg5Zp8xf7PhZPZQdka3mh",
  "key44": "5wBGSV3BD7kAdztmdZMaAfiFpgZC9itcPynyp95PSJpWFkk9ccpgDpm3H4mdiBQ9ACJcW9VsbqXuWjc9WbxZ938Q",
  "key45": "4WUcXydpbVzdxB555ZPaxERXsMna7H1HeTdvcJuUcxA95v165nGierJ6E4yfuG1CtRfAjFsZGSzQofo1bvmdNBiu"
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
