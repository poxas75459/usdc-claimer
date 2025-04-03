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
    "3ejG5aWbKCWJnTZCbVp4M4fNtbWobmLkPdHUMpZsqND6G8KtrUQdGqrSibg6dH2BDkzri2ZtWF3dc8uSW2F4Ccdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWu1jiGN1rp11cTV9jQLyCiDmLRQh6XJY9vUzPog5tKskKKNtGHrhB6uFZokCBZTK2XnLqYnZxhgapYRnoJwDwA",
  "key1": "NrNmiWhbv8XbZkMC6tYKjA1qKCjqZ6iS32sgPP6exAmVyb8dua8TqwzY7RhgfEUkgbtQMq6aCUCv7kHVieSdQXt",
  "key2": "NzF6cZiW3oao69zEdqNaV6iXz46ZakwSDk4d8Q9UxayxMDeY3zg8Z4TkekknX7GSCBXQjHa7g4UP9rzUjT1HUgh",
  "key3": "1SZkcDHY9LfKSEb38FgDFXtzxyC26nmFk2MTjGUjo7TEiKNcr7SyLJrSVFS1pLbwD1HFRkTxMW6tUqMDmiysBKd",
  "key4": "FRAHNaUQcJaMLoGikUji7uNxdFFj6PqNDxVQyfLnqqJjrEizfHWTR2uk6RxN4Z3nc2bCwfbTHyi6q6YzdWpYtf2",
  "key5": "rpmKAEMG6KPh1XEYobwKBqnxw4NPJq3NvvtdP3R8yK5YAQuKJKa8jmhSxfZNWB216XjNR4F1zZA3HHkZza5iZnh",
  "key6": "3wdGy88ArMxySWbeyJtrG9PVZysESmqY8afMEj9sq3xCnga4A7UgfeQb4hUqVE3pEqSEz1Yk8ALnzn8Pv3EHQoUK",
  "key7": "3AFoauhLSmHsPA7dUiEGZpYtwUGANNKZbAy2MfdkhVVcNZJXU4uDBDPZWBwXqvDs9W9SpJmZwopQD6m63bvyQuAG",
  "key8": "4WftCSFy4d9ftGBX1M4R5cimpxCNmCmBQzLHWwnr62Jih3JRQVMuR6aGxDj5ubN6qG3WGe8od2zVYNsu21wgVq7a",
  "key9": "5C43XxTPMxLkzpo5ZAHyXCDMGfiwvWyKFvN1AokPmNsivx4k71kvZ4XRobWuM5dsL9iwda4MJWwgaLbzwuPPxgrs",
  "key10": "4tTQC7QjAH25Lah3RJS5Eg5gjRZyzx2ntv6HLCSCKqKg3749in3pDPDzZ43sg1PT2jgmRAgoooiVBThFXjTQJM1H",
  "key11": "3f6gJ9KqhPUbUnvYDpPWfrByn6E8Yh5RqHYmzxeZu7T7w9MKMyPqpz2DSbBj2jLdLC7WDnhY5mPa5jvtxApW88b6",
  "key12": "2iuC2fNBNKRiHRjswxCGrCZopRZ1Da8wTf5Q46LLiN4agkvXZFffcJyAjwwTjbgwrhsPoFPbe81tjFPudfUUbMjD",
  "key13": "4DkGKYRyAs1L3hNKKz6dzNz8fEG4j2K5ePpSHtBskLFGNitWS3X8Z99E9t3LuxeEEf9L86LXSzEeHUHAWUhYkJu2",
  "key14": "5ZHUCDPTd7JUuAJZDiP2ynwWFRT42SqxnRw2Gh7HS1yvc9tkSCR8frrcA2kum5jZCtSkQsjiaBxyW5CNLKZGc6Dn",
  "key15": "4n4MACTk5sxJLzbsJDum47ciVmbuTpisKKRNcSXUhX4vZLmrLKfUgTDnpR5j1mSRHcp1ka7QYC2QXAHoRLDHJN7H",
  "key16": "2wJzP8hCwoNB6wjTNtiZcK1XfTFrmJEzaonesZ7XkqypH66uA9z4gRGomkP6dDULcTUv6XLDUHXDPEpZ4fBjTyTK",
  "key17": "UTnPfuVvG6VxpELA2PEazSUULTC84TsaEmv4964piwhvgGj9kU2DzQT9w7t6E5TJKhxRpjAJfxG4UBrHx1bEtjy",
  "key18": "2V8sMGtkaCiVmtnURz8uJqEhEcB7aWT1qktoe1Ch6DZHv9aAJFTDQJfa59FwYwn4B5XQCSW4NjFaE5RdBEqa1eAw",
  "key19": "5pm7BdMZi3mPfJpqf7LUgDaL1o1y4Wjy4UQzvESkZGLrneRFRDpJmeTJeWUhYEzpd3cbfwMivtuDmXNtnfqaUZ1k",
  "key20": "55Q2naYy8xCsSBCA7Gxrk5ttUJxt27GXxCdJd82ShtKUB1KB84zR8pAJGiApfJZb3uwxi7e9ttDX5xvgX13pBg9z",
  "key21": "4FudZSLczHvCXKPxGCjiDWopPUwpAmvGMeHPZkq8joJNfkMSgMuwrVVMNA5A5bzzhTiXV7rCsPmca55VjooAZgim",
  "key22": "2tAfJh6qJkcnoi5VTNKsFDReZVZZWD9U8a8Xd7KdsAhL9xq3s5Sg2axde2W8jFYvkmud5tmmA9P4AWvWPJ1r2s95",
  "key23": "3Ber68Ae8nHqzcEFnH2H8j9nGmgdAohaiAAPjw5JLc5t1QUk3Yhcf62CzRax3iahvnRnV4Vs1UvV6Htei3HvzfnM",
  "key24": "4qkxwQueoGTLevwot7g2e8SA4vhgVd4ZHDJa2d8Y1gspXg7vSkYpFtLshcs191Z5YLtabjDFwdXe2J7dadc3tCc1",
  "key25": "57GLMjWg1JhEkkTytj4pyrsJhdz3hX6khurxXZvEft7D4MR3CJpcMyAh19FxXqzYzaMCpoEabyJ45p85M8U9QUNx",
  "key26": "3zcMcdARWoenEzxb856oc86zengfXRPWLzoCNibhEpGbGhWwKym6wKznLVedQ1X2WoCxttCqbAS38WhDBnKhBBns",
  "key27": "3L6sjm6e8ZcPZptc3Qi9V1zaT2YcEfTLzEbRZANbtJKzM4x4mMoyiYg8nfZhQhJq1TDsGtLibwNVJgocJNHhC2S8",
  "key28": "BMQ7VvYyGdjivANNUtLhRtE53wKrpsQKxnBiZrCN5FS42eCWjhnYcvSUhtQ9Y1oKqFAtY8VEu25QWBBpa7Qwzpg",
  "key29": "3Qk8VAaSmTWsedZapMECUD2JkkrvMzpsSga8jZ3dNQcmHR6sCDHceDtgTeUnRhEWJqEFdVjjbJbdjUJ1zeyUuzAf",
  "key30": "3wUrafwmdWon61Ap7wGtn2pYdRJxGyC9yXv88pJjv88TzirNAj2Mqt11CQwepoSakgwR5fXPU5r51eEP9Rs7Rexb",
  "key31": "1e9kTqEhAyDRxAVwHqNc3M2ZUmDgkm8NZbCX4tK5JN9VsPnxMCQH4Pz7jhohRyfuL49fZ4yMbxze2UC3sk6X9bF",
  "key32": "4eJhRAxsTkZJH7GEhXmYN2wpvqnV75PxMYRYDKeN611HoWuxiCxPm9Dfkzn6MqviB98483NPLLSHimz3DU6s2rsL",
  "key33": "366LADfZjwBFsdsNebuMJJYjEZ4fXTmxgjkoAfFMqo3i2BMEaU2J1FxrSPfzof9JqxnQ7bVPkwJ3zouQUaWkabj4",
  "key34": "2F6gLzy4VnDd8shZfZqDLYGWBiD8sEAckEUYiPgxBSYiPBbskjQNbjuZt2gN6ZrKkaEed4NEDgL82G3syBfTFtWZ",
  "key35": "4o82PeYVVKUMKzjJZQGPDFX5cbjmFu8n7ApERB6LZn3pJCtQCBK7arKLtBymBx7RUg4WB7RS1NFN5ao5nZyzTfmf",
  "key36": "qawnL1ssNu8Q7u8sFdDbVZaZqoNvfmEJLJCPEkzbu2MnW8dfCAcCZ1ZN2NyChmw53RXauGfG8QFSpdtYoPUiQTu",
  "key37": "5Mgixdw2tsyo34B2kJYiZwRD4Pj48B6Ki7takYCZisvwK7g3w1bkXhLTWDmkM4V7gfawnojxNJ5sQ8hTWYiEJ9Sf",
  "key38": "CQoyvJxguv9stwcbGMF8foQrzrhir2ko4iQ9qLZP94BbdxvmGxpMkMKjHpouavMPrPCPHZM15mGM6E4nkGvv5x6",
  "key39": "A6bcgKAFUggggubiRq5v2WJY2oeSKm3CZqBwMGLvqqBHrcviG67wbkYrzFGfZTkmwuvjpjgTVDQJRseqVFgCFxu",
  "key40": "58nCZTKDt4DBfkoic2wtYCKrzv7g1eFxT99ZwAVP3FHdmA4AXDdvzHqDZ2vdxhWRhUL9AG8QzNTCcbK9aKqJmCKB",
  "key41": "5JBKeiCANhs6KsmsEnc9xevAj8biQSji59EvADgraqEscTScMaNNvtbvKj41qkZHdzPNzErNSi26SbNgTVdwpJYA",
  "key42": "58ncKzsEhHYkt1aYBYCPh34ucWKNcg8oLMPZ5syKxxTeoerWGdyHVKiKtTd88VNiMkntPUMbAFXnrFUu7b2XnT2Q",
  "key43": "Yr2hJ4gHRzVky2Uqe2DXkgJmethQ2urQ6T2eS6Ee7mqdFdPsdon6sqUCHyXL2De9J8jNChwWi8pzfRd1RYsaSqP",
  "key44": "3frzr95c6bekoLpG2CLXGyYn5Ei5vGijUgWDe1jTkW1Ltd1JPb38DFLcjGwTpZowUwAxJ2cpbaJwba7LfgNkNDML",
  "key45": "4YMj9zS1GbWZmREoaPLckQjZWswqeSZKTxHF2T6NvJhwqnPszeqnfoCSsgwKYoWRkbawdkKeDDUXbya3hH1hZgx4",
  "key46": "21YBKZoXfvGUgrFjj8ouFMSDoxmtV6AxUvZPxpU4d6VoebkRyo1ax88Y6N3UaUVU1TcJiNA4upMJdkGyHNRQbnvz"
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
