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
    "ugaKW9qKKBg73npAgWDqGozybUQFjfPgsZnXLdBrUSBhMMtaEMczgqKpqW9Gu6qFzdMPywwGogDaKhLwFVz1QMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mig32Vr1my1a38Nj65yPh2Z1rd6dpFdWodYnDPegjYt2NFCRE9GmQ3TpxC6HY8AAJPrFc8o2CJWfoUpAHjHaZNi",
  "key1": "5dwmMVE93ZF1n5YbXGaFT7MJsLXjgQQTZqUXzJDHzZ9HGFTK81ac3zK5BcKqXtqW2fTUoYcKsDVaLvTX6cZN3BHY",
  "key2": "DabaiBBxWVYN1uNwNg1Pf2BF8GQqNHA3E7aJVgeZrTegG7tgMRCoeFzhjA4vL3G6cMZKvC9V7awQCtoWPBqs51g",
  "key3": "3UXYerP41KXaJpPWccXQ5d8R4pJBxf91xT6NsehnBh9WKEUNtDERnZZ1Rj5XgRnvwz478ECJJwrsxQsJLmNPg9Xb",
  "key4": "326tomdbKCK3roRmZJCuTJseUABRnTpZVSWcnAuxhwT5xj7Vky7gUDV3VitFBQBNNQYoJtPN9id2qXh2vaVswV3y",
  "key5": "4ZFZgiDdJ2k4gtgw4GUvirgV56TG9XcCQg9fK88wbptujXbSrnRBzfiQBoeoeanLzZAEbTTHY7dP5edJ1HiQxDBn",
  "key6": "42SFy8SjpReu1yeZJ77bS9UHfH7TdqM2yDAoPGairbTUuQsyt7DAUACGwQQjji32SvwNGA5jZRtoNnv9yKGXTFfi",
  "key7": "2VMR8eLgedb8fPnvNBY3otVoT6uiKvw5TUkPfd5qBxDYdGcezQYcqBxaMKhPrHL4YqyE8gYqR2ETBGPJF64jmu8P",
  "key8": "cAbQhgeCBNR2mZE4WaPmvLYiW951acgJSv27bG7n41wkBv4Wr5JzDiGsLu9x8xoDfXZQsEETQJx1P8ymBkpRsgS",
  "key9": "QS4raUzYC5jLPAFZMw9GD4XoGK5esHEwjPCjMYVGB6PhSq6YWLGqTtrEZeL8wjp1uEKU29ujyvJvgyexBS9uu6c",
  "key10": "YymNw5qUMtGvfQ7C1PPhhzUS1dCdvR7yuh62bqQNAVW73wDfsxCKyWdZomZ9Fnspv2zmxrkDncoKsBkJntXuKAk",
  "key11": "tK2PQFdbGuVDyXa5X3ttgjat5rxVzvycsEmPeZcMa8Hjmjj8PxPwH1aTtTHXRzhur1egG8obi8dbeEG3d36bU4P",
  "key12": "425hxQkcdmCoDXYQKE5Sj1WggbhWgK64i8LJiXuMXooyiN9txu6JTw5xq6CSs8Bp74AfoWULikkx9Bpj1CxrHYjU",
  "key13": "3ewVGM4xwEUAdkrVNaND88vBCKSP5uLVuzHJNbNExGhJsuhBtspdrYEEsM8QRYffBZwPJANaW2E7kozV1VMGPMMm",
  "key14": "28bx3z858WMHcitV9ZdiL4ymeC6LvtBnDTimbGix7AEyjPa8ka9ixqsg8ijcE9Up4Qy5nvPWBJgkX4eE3JxHEUCU",
  "key15": "629DzkTu9u9LqLe2cY6oFQr3mdpKQn99JS18EPoEYy4RqgLw5ydZQu97A8fVjFqCoWykt5g141qT18ypTeAARfVR",
  "key16": "2jAATRBtAe8zDqm4dGXQDu3qFa2cxSUd1dKyF5ongmrFSs4hbEfBJvmLymEpZibQFW7yPVsXVyJ6Kbi3EKgAqnSz",
  "key17": "2UXtAQCbyVLdjwNhmfxcJu7YhNw7e5VyjzrKUq9XVy7jikWQsCRM8rL4LpbG7AwRMBU2qoEsGuxADF11YqiN8SGa",
  "key18": "36xXryaPk3to4C9EpKrSoGS1TVoR86heRWiivbh8671A9JNrHStKea6kiEbWSqPUHc6GFLARcNdbNkapzSocRHMy",
  "key19": "4FW2YU4Md1No2CpR6yBgjcVsdNNgwdmWxy9RWfDP6uAwEgqSuj5HDPMgoZi84wiJWCpG3Tt3xrwoN9iXX1YkW3Jm",
  "key20": "66Wha6WsXEUzc3SWcPVLozePfiDRjErWsZpA1Tq97D1WUGu2x9EEMPgtdQHDNZtKt2hbaJYcuynbQrgLwV12JBEs",
  "key21": "48bb25aTikB8mZbT7vGYPNPfnvD43uUVm8kVZZVjnpWhqLSHrZnsqwsXobtrVUiJ1RnWJLzqFwVf99A1ku4heZXC",
  "key22": "2xjgXehhxQxLnZjEH3X3gWoFxKwEmnnQdfZb1LRfTFDFo7rJdTeGvBu4EpGjmP2giUF94BxWdyz7X1nMcqngpgRT",
  "key23": "3dTH7wDfaxE31UQMVHGpfrxNWj86zNbna6PFF2ENAcPeGgtL36FpG6UvQMDabFLZBDF5XDKcgg6PFMkei83YV7DZ",
  "key24": "39ia2jrHMQPeSE97jYrp7iJHeveNLKLBvgpLktcqKW8TqJZPC9DPHSvPRJ9cRGtzLRmu1rWkedHGJcVxRg4riUtc",
  "key25": "4KLwLPTkkGg3c8nQkS9CJofmNPgq9jz1ALo6L4GVzLXQvqyCCJxaUBUAk4jNLeeNvzgWLAg8G8VscSRGxKRxRg3m",
  "key26": "54PztHogJksH7hyiVsW6CNZxU6Yv3Fjwp79bvSz6owJ1hS65jWyhnHKvKstJwfbDW1iZZYbfLADtkfSeHg1S7K6E",
  "key27": "myZeXFWevWaFjpJg4PdsMC8v3vuGgtRLbSfYp5bkQwvkPMwBv5oAG8chyqnDTH1vRPpbKtYKGkDBjd9wd44jPU3",
  "key28": "5AG8KPpzmYTqSKp5VHDrmYK2UfhZXQ4QeRwrNTq9878qwscpbCe9aTMmzwuAJSPUEqZtnc8guhsNULqHZsvapWTc",
  "key29": "2MwPVUBqUGu4DaLCgx4p86Yw2oAjQxkA1afigTMuerawLzFWM4wu5gDsHN3fQnsSEd9svCLJmdT1tgNyuc1cNajj",
  "key30": "38xNoBy7EGwwZWRai2D5upQLZaEVUmxAiwESQq6Mb4Wm5B51fkNtorj1w6mK95995Gn7yrwe1uW9d4ptJqxC2rUm",
  "key31": "qYM7HK6CahKh1sqPoiof5xRUPtbD4Xh8qmjPiS481EpLei9SjYbjnHp1ozsjQJsnPbMX7U15QbC6g6ghDLHmySX",
  "key32": "5e7mWuUJjs5eHWemYmhAP1xSLw9gn4iFV3Ybd4N3nvEvk3NiUqdgTDB5QU8aAapUidDxHrZUqYb6un5WenaF7Ebn",
  "key33": "55sckQ9NAznxmEdVzMh4eoV8U5FwuMJqATxzAbfPyq6yADjVd4vtQNu63nUFiJN55QAFdSEMqv4Ww9c9F11b8rx4",
  "key34": "3gwKTDFQ5SV5ckr53aCkueeMmqeKpPLPEJE6L4fWPGoE4uDr5ikrszowpcSo3XabM2ger4Ty5mhreGjPFmstcJ72",
  "key35": "5ebGy1Lj9Ejdosyoyiyrgip5uFjuWsVZetpEqEiwEZ8Laj1dNPwS1KUYzwV4jqHGzw6Ac6EcHDJDcJYznsdiaW1i",
  "key36": "5LvoTkzwF6PHD4SkhL2eVNyd9Nczi9KdDBpuss4W4Eg5VoRwn54EGesAuN7of5BYUrK7Pdpqgx8uEAMfyJcjuwH8",
  "key37": "4XUihZUpSimTCzvFVHVVmh2Bwpsr84ug1YKBxkaNpsWPiXrvosRjcJGgJPLENuq6izKsHDQ4eTvFCmFowbZ4syE8",
  "key38": "2ZBYfUa4tR4YV5eiLeaMRufyE8bABGv1AMqZ1xc97p8RzjSkevaEqUsU3iHLLrDUZcrrfrXF41SY75s7dTLFvX16",
  "key39": "2NRZfKoKg4wop7hi9R7YaJjw6F91ooQN1JnazNztcUDNC8EVvpMZ7WwR1v779b2FKj4sDxL9GY9CmVnmUAKfQ5yh",
  "key40": "3ebKi1XWsJPWoYw8fgmHQXDLwu4Y3HVGpWV3C7RoEusQD2XSW7wnNPDXa6bWEsz1PwvKqcdh7gNCZMJHCDMsXRvs",
  "key41": "n6LxWCV62BDpnBqCaTL6fwwaKUWXB1psdi2Kb4mq5Qm6No9qsMjYyuMvweNQC4FHDb2HK7RXPyqfEBsnDNqtpbd",
  "key42": "DAbx3dR5KyW23FN5dXj1xNTGugGtCGDCEBCYHBNZRdCk6cXdE4Dj4GNmh1SfnXY8gcYQsNnH5jGYUDsJfRcrKec"
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
