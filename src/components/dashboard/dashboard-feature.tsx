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
    "3Bpqm8gfjsZoSyKuhoiB85uT3d9r5dXpxDAwnTQiMgbw3xdEYftNScDszAuQSjVEPWuKnsu1Wo8kUEoeDUZpYxh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3jFX8qWkYHyBh5pWZYmkuPr5UPq53tyYLiWTgHZfKQiTGe5hAJdJS1TFhLBrM3Y4T1hHVh5RsXWLKcUfx5XY3z",
  "key1": "3UscsXPAaPMZJeqnBayx9cxP7eska74rHWYjiedr4GVJpcsmmvfJrA4Tjq51McdUVCxD1CYJRG8YeC5pH6s9X4Ku",
  "key2": "56ZP7yqkgXSN3wdmG4u4TFNcLLAx1522L2vnALk8ki36GJMgxMkN4Q5Sxy66MdaBR9K9rKajVyyQWBkKQgMWF4Sr",
  "key3": "5XbgKBtGNqaHLdfHsSi12TFDjW46WgwMiBmkArPaFR7bNWJuQDdcji21LeUnvxhv3rsheUxDHT8VcnB45uNXHHs9",
  "key4": "bGRmM1fX7e6ndRBKamYD6w84BRj1wgWEVGJwdgW9Ny8wNSxhpXwUxY2ipbsxyW2YLwELKC3vNSAZze4GqgqWDgQ",
  "key5": "5tbmwjoyq2FtyDCAqU8mamy93rarszSpXQkYSvdn78acGRoXUPjqE4HhA8ehurDk95tpsMfuerEuWCymW8YTKwhj",
  "key6": "oh2zQmdbeva2gTuVBJsNpwT1RQ2Mh6s8b7g4HPW5gx8reGYaBgEUZZCE7bfduV8UkNdn97rE8zCb6MPbfFYZumQ",
  "key7": "5gVtjoXspUrs8g2AMi8uDVEFSpcbnJY1puQohozFKnUzsR89KHkoCk162Sgo8jihitm75VU58U6cQTCRs9GCEzbY",
  "key8": "5Xr3D9eY55eUvBAVQkpG8i51GSZMDjmpjJE7z3MhE2zSUZuoHZAgC4CSQ3ARsJz5UXrW1bjKW895bqFS4Yr5p6hX",
  "key9": "2tuA9viXrPTSguuESp1gdVzUsyoxV9p43XPummZQyr9i9R6jgsSqadSrUQhhDGSa5zb24WVrB1U7PHDFXNf6RUji",
  "key10": "5SC9AharDAkTGDQzhXFURQ4HPacK3hXknx87EAc6v4QQSTjcpAvWg4B7Tc82B5v4gXg3VwZtYu8cAHyN2iCncABa",
  "key11": "27FLK5rEqeFt3M8k1FQsFe2Gfos9AN8wfEQwi1v7kAPCy4GRLJnvVgzmWBT3xTtWHBL7UDAmu3WTcXJsWkVVANRR",
  "key12": "wcupxEZrzkK7czwi9RQYMoryV73XXQdVAKS9pcTUGd5ea2pbV6bpMAVXUECTAVmjctUyoSmnwEpKtVjFTFwGR6g",
  "key13": "2j1VpMt1KZaySJLsBccjzyPdqe4NBh9Me9wo2pGM75tnZxVnkWz4vy5r36DxnXQD7puNfotaW6QEprfXT3j15qcb",
  "key14": "3pMqiJYk62dUpUFXHvPVvx7zxQuYguKKjVTiPoBzVsnHwBpZbW5wfR15dUFdxndPpNpuLtwuBqi1JtDykcs6gVbL",
  "key15": "3rW14uQyL6qyjUdqaZXFXVUZLDpq99snN2vxmVtnyPv31CfXXLRiJfK1BJX9pcsuph98gMF2tDhwX7hzz89mJcHP",
  "key16": "2FYw7A5XbDsfujbzL3uunTAXdxMWmBDqdUU69Kxy8psvfHtRWjQHkWFMKgaed5VWhapfqTtYDCZQvkS9rB4gJFVo",
  "key17": "3pf3GpBX6v4dAqDcQAi12uDTo6V5GeFYRKHxSNdsuru4cjEmeYeq1qMevSj9PBBtW3qXXuR2eBNjpgZajDhTKWby",
  "key18": "5tLZ2VWwxD7DXRkoxH19zqZP8bCAXDirGx8uDeQUk8ZNDEEEsxce2DuYJVZTZQCy31SwHokLjkfz7pDBsjwxJeqt",
  "key19": "5vV7hy1qHLin9n9ee8GGJd9c8p6A3ni4qom8Pbzx19QU3aVAY9D3zvwAj2iwEdUuQPEe6UZoxDY8vBUhNVUZ5FV6",
  "key20": "3r53WcbQVcGAZcUuQRB9gHrvymim1Zgq23TWskDJAfsXD36VpEkdHLK7Wzi2gEPcnHPw5hZX5KL3YfhVAasyvcmG",
  "key21": "cDTs8RLoriFKSvbArcLZRX375uLniX1d8FzTSSuLLTnFbfjGb4rsN7ezvoBd24AnmxFa9yn3t8qvYXmm23Byj9M",
  "key22": "dLrLKM4i3kRuh5LdHvrRiEN5wxNYxC1isBynQGtuMHD42Ri6VrDvcTGnShAd7XGFNDopJnNrdMqyqhwirRAxGdi",
  "key23": "tFE2zdtPqmiiYL58EqTriYkCy5awZqRwDWY4XE64aRkz1GJUHSQALt2qBZ7UzVscGtzgytAFn6AouVq3twFBdGC",
  "key24": "2h8JY27vQ499GEm1sDVkt9j2tqxKETeMxoPRrhGmc5Ps2XEVYWpwKuidyt62fFANEMRvrzNoBH78YdRyn97btXmD",
  "key25": "53Hbn2EJQQcbMFmV97QDjQxUE5YARLN6Kf5JMASXcs5u2JdV9wHZgvMqhb23J9VAqJh6vg2imrdTjtiKtLkJKaQw",
  "key26": "2JnQJdQcMnK7ndJgRtksCZJGWy5cwuv4ZAWD5oWU9wFsoXYNPccv7iJFoetYVZegVK4fShmHe3uiiCnD2BbacqsG",
  "key27": "mJui4QBVaysfttKH3QJMT4BwS7qUrMkrbpCp1Sf1LLGSAcGqn5sEyFyfJEN8PUCzswmsy66WTHn667KNXQ78Hkd",
  "key28": "2wqBS8zJRJZshA93oWqWgd3HcqUYfAXprxUtMY9cTrBCZMEQBDrk7fRUC4eZjSA4NojP9FQGqxh2N517htoFzP2",
  "key29": "4xTHDHHdHway2EWqWgKvJbtb6dkHjRwHcxETXfGGQ4pnmhoitxTrFd6p386EQs8k5WSZVPT452VPcKLLJQ1NxK7T",
  "key30": "5KmdL6EeVrAke3tW2m8kJpWxKssMzFCs8917hLKhbHXedXWzkDPCqfGfoLRhTALAEnXY5b6ECkeFTQd1291bWoL1",
  "key31": "rQUSdSFzNTUtXeYKK8q1okW6nMZZKaUCPBpYKvUqKuGbmmYt8Qhwm2YFUXqxwgDtASkNwP1CkTwtPkvWehF7NvE",
  "key32": "vkqG1YEwJKufXScHgkapczCSsf7BWxgyA41G57YjzmpL2954X8WM7qYyfe3ziGzMFaS356JRC1PMLHHviSqhYoC",
  "key33": "hzbXNAkDpQxeujVxyrxJm4isDp96jgRzC26d1qS8vyZvtaucLLaFr63RHW8G8jVZ7jbhDrXwb5uWCE4DSsGZGex",
  "key34": "2kGQbD29LYkUTGyh1tgnNXR32XsZR6XC4mgVMJytZskB2rLkVK2uVZ7ChWWNpkgmTr2jMtMmygnC9AtZnp49Sey4",
  "key35": "5g2YP8h7tKzuawYdMLD5vNMC6cXYZ4Z6ZpEgYTNYuooifp5sm7uTtZGya269535kKQkfcesnZzWQc4kAswqdrQdM",
  "key36": "2R4F5HYLU7dKDARdM9EVCRmXLRwmw4zPu2KFaipCHNVjQjAzqWFiuFctXLYYDKUYWhf9GacUMQX7yfTzEG7DC7K5",
  "key37": "8edCddnLrMXoVAfnu7C1WjJToefBc9JiHYavqm2ysPWCU2aA11BnpvaYb3Bqv7GzHaz9G5uzK3EF2sbrCz56bdN",
  "key38": "5PP8TiVNKCAzxWKTG7p4xzt63vR1poYcS1yP1KHz1gyxxddkGizun3mj9aojXT1NZsXSMzahXVYSvRv5itTdTsuL",
  "key39": "2poNp19jSCac77EdtFodcxYkZUvdQTJx6gHY69tSn5vDU9RVh1FPv6YdHQruFoTsHtga36xLHhrLw8arBNbYwAQ8",
  "key40": "nNWQ9YFGx5XSFFwjBL7eVS9qHqZbjQjG4gzRJE4WV7JGmctS2ncLJmnHJvv1cgLjoAJnLjvh3c8S4pVi2kXJEDi",
  "key41": "567CPDpkh1ConHa8c5PBEnbQX8psmouep7u4jUSJMygsheM6oGnU2yUhKiyzTgnTRud585WtboyNEMkbftUqRCCX",
  "key42": "YLTmX56vbrMzoZGEScZptMLxRNMoxtivB2ukyjC9N1nBXdWdHjFbAqLbxDBiftXy797PXqD1TQAEGyfdhuFA4vx",
  "key43": "452FJqc4F51uYePCKc3yokDyQKUT1tC6cNfjchdrH34o8p9GGd8sgLHrriMVusVUn2NSmZtb5Vtox7KK24tp9odU"
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
