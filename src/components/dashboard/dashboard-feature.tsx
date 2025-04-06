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
    "2SbSqnHp9KtsDjfjNk6kuHiZpH8MSigugsb4RDbh5j2uq6JtfcwNFBdpHpjejtLtuVdL5VTkrr7BYc8whsMEABoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oycDEX9Lg5rWZqL9QY1oN36NNxZA3sWkdoh4QXTBCRcRhSfrxFwmFvDUDBXnmexeVdickmxxvJoP1GzKKEMbggV",
  "key1": "2XmfhtT72xqXkdtTDToFunSLU3beeyGW9M4apqWdd3dHqB3vfUk7ZQLmzZaweXMfgVsAVJgPdo2hBxLfvTzokQVY",
  "key2": "61btUZYJmxibLBsnC4eECdUrbnMW7hzgwZwmZnmsj1XFKiqHWfCvWzLFT239Mutz8k56Ws75wokMCqEJZQwMCyiq",
  "key3": "2kPZ7cfcQFEYbGYqHKgtyC3eXnzzQpexLbYxM84zDfc6erZzEmDUkoUZ3BwVkNPUZqvk3NHrwJfbBZ2WASCdt2qn",
  "key4": "4RKeVQW5yYQEMpr6sZJGArpycGmVZ4tmEisfuqxnUghYypg5suvZiugL2Y4ZjUT81CWKz11oghUwrq2kuAYEQvQd",
  "key5": "2bY9ZsHJ4DNQpoukxknHgGACCLGqMrF1gka1JpgsLygRLXW9KeRTEZJPW318rQwpRQ2K5tpukrKWMmk31kYhudCn",
  "key6": "3sM4yajenJavfveN92wu3n2zULcPeVJH3dHEkZdRKeaR1dwdiE6WiJ26Svg15wYHe9hiWTBHKWWCgEtDpGbqGha4",
  "key7": "4QrQozF8rRSaEpxd8vyr1zZR7jJ5jMiijGEyp54n5L2itvQDes8XVEJGRZhjKnqzqsAxrubAY1qDk6EWP9hd4s2C",
  "key8": "5ihv9kBWNMwmjhddjZYTPmCt1Pr9mHMJRshRmquMcjTGojYXSgv61Mhv2UfyqgjAXDa67BjueHNZi1JL7cyXSJ8m",
  "key9": "4r9TzvTu5yLBU8n7qg8auW8XQykMcp3d38TjAQd3mtSHdHybokDhAv9EbEGufAdWLRMLddiUMAnX3z4Cbnq4X9uK",
  "key10": "qciaacRU5uhahud3jbzioPwwzsfAf1q67pqvQzzvjFFDnQWW58ic7gEgDDY4MQaABu9m6pXMmkqDRaj5ckX9cSi",
  "key11": "PK45pZMSWPUQK2pGA2zJSLpyrTkiwy3YDrRz2ZBQj3BDdYfJfDXBemE8UYRpWCVyMMkxPpbVvugxcXyfYLdsd6z",
  "key12": "4Q6knALQauetQZTzYJ61c7UJYAECQcazzopt2vgTAZJfR1WcvYxN2DuqM7Bsrc4a3j3Y4S571C76P1FfTzrcnhNV",
  "key13": "5BoocvKaPMrBHDPAdRMgGtDTSqr6Rz5FhwZ5eWU8ddXBiqXwh23udqbhnqQiQXrz6gPB6WG1hA1XQSTWaczPLCXb",
  "key14": "2dGfQ6f7xhPVWsfeRSDX6VTvqaTzSUkMNFZuhbei5SZDDufHSUeZ8FVJ7jfXJareviaz2DoSYKzVqwL47KYfZk4t",
  "key15": "4Em5ysSioyjfDiQUDsLsxLg3kVWZYKVwzg9czpPjwo5Fx2qfD1YZF8We7gbhuaC3B6qa8CpWno9NotqRoW8DaDqH",
  "key16": "2RcCZAeTymdETz6fq4ANtvSg8zDhBGA9m81LMEXx9GQcWJUMG8HbCvLuLF9iVsW1K3ksMLs5SGZpFFyUg7oPtPfc",
  "key17": "2WBDCMeYpmBHPN2fxLQMB8AWMkDDRPMvNrndfaEkK7HcM1VxJ6NPaj3ZVM2n5Nnbjt75w6DASnPjMuLMZ9YhKYn1",
  "key18": "4cgfpSieiSkYF64wR6kGcJEcaWABcJoQLqWoLyZFxrb94msc7YCc3CCAeBKRE7Vz8h54oFrRN3A3fWs85aC5uZ4u",
  "key19": "5bgfyWTQGYLWcK1oqTn1hoczDxaecVY6KdvqKiM5hXGTF1NHQVMhY1zQ7VqEcKezsHV4T4gsWcf7MuefCuATK3r9",
  "key20": "3Rh4xQLuXqXcGDdAnYJwBUGRan9ZPoVMAgTNgaZJ7fZScF6zH9zUdP3wz9P7Nhxwm6PVcwDDCtyfocxG6JT8CYbr",
  "key21": "4ZTz3AjLK1Dn8uftW4zjYCPBpX1L8d3kC3bUhAHcHANT4m24FLFh9zYfWCxwAcfithJakWXnc1pxyG5fQSG2Laa",
  "key22": "3Bhx5Vbe1fCj1AWjhTSBevEChyXaXXE2Lx9w3yDW5XNTanQ6DQJ6Dn21f7kzE6qdUbiBPmBbs5mL8NZto57KTkvM",
  "key23": "44JhxRaW1yXg1W14D2KyMSHAgAEszY8Az3it8vPhgoinZqt2jyKxkH3BDaL29yYihZUBdiSDeLqWpcEf8GXQng28",
  "key24": "4HArUPRCRRApKcYUfM2Fkm9JuoMmVYgqgeFhBVMzAuTt8yVmiscjpA96Gk75MxYhFq1KL97R9Tkv4eYUVCXJXRf4",
  "key25": "2XpLbxYpUXwufw6dbQCyCjzZhDRLjr6D3YPs99ZLcKnefwkADhgp5KyAjP2HECjPn9KZgWiGULU7v54MebdpeNFY",
  "key26": "XrfnjGC8T27hiQz6kxtFZS7azV3UjXyZ8pZRk8nqchTcufhLS46A8LvwTESg2H9unA9Vf31QbLZcUPZ897mtqXa",
  "key27": "5mknZeFXytBCYSgv2Kvnwtyg91bhLWiA1meBAcKdE6x9akazPVSFXgvjL44pFYrWhtzYbFoudKCQgJFNxJAggvRz",
  "key28": "5vUEevpSFvNqPCDzGDnDNfbKnMuTQ4VebvpuNcT9odugt6ryvYrj3FYw9AEg5AtkgHu29Zty9uLB2Va9FSVL5DZY",
  "key29": "XyVNH25ks5smN9Y7ArKk8GhkjTXTyU99gm5nZsXViuqMuqLC7SxXekSZjPiPnjWzZYPgFSe4JMqf3acndZcFJRU",
  "key30": "uGXZ6U9D9rLcL927LaB2yhDLt7VLYgYrFJyZvs8APH58JRn8GYhgr76fvQ2ntC8HxuGW1US9NmDCtrfS6tqXVQy",
  "key31": "4C25ZXmxafJg8J6TtC4AqsVcMBAvYXvYJwYDVutgtLNAbMzmgYRBvi3ebwh2sxxcegJ9hAn199ZmKqqfQeBndz3w",
  "key32": "4FGtgyQWrD4Lcy5Uq4qQV6HSUS5YBvaJUE9fnctHFs18FGNkzzGbCk44M6z6NhjbCUAy6kBYb83JttGExz1q9koe",
  "key33": "5NSCN96wQRaWhWZJ544WPf5PjzVa6kWdcx4pu3MZePhRbCRWKhR1bzq6misAgfSADiJKUYsQVgAEAwHF1cCkU2EW",
  "key34": "4JfJujhFyVjkfM5kgUZxakRNo2qAp6U4tTMvw2ibHyZQSA4sRcXXucWT7etMySCVMegmfSVtxcLmXF6W4auWJhwa",
  "key35": "5QABfNsoyAvC53waxuhz4H3hmEpS1WRHCAnoeZPSVz7ecDdRnBZDsPANGBJnoH82xPARJ57pU4rYiqvvz9tNxqGT",
  "key36": "35A2JaAgr6jXJA9hu8AXCjVtWkpLNAeQUVSBFKkJ5W7vrMAS37RHhURbXjSVNLWZXKriYmHCSzBH2ft9oocK5geE"
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
