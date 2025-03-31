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
    "3RPk5acSK3m9LWEzY8RdwqyRapQCpnNYcK6W9jme3NjmjSCVQ4oFBeR2MKqJGNbCLGkhymQCn9fj1JJXDKtuEoH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UagB46ZnUgycfxbRhLY1QsPmd1GQBfBYHJqSgbYVk1wg3UKbQVUduHbQ5xMXC7Pqey9eXiUC3QLPFYqrLXQmY5K",
  "key1": "5RMDKeSokcqnHHox1muP9jWZVM7LpFdVyUfeoumq5Uw6v7kRGfWFn2euMHBG3ivDUzhGWYyD5iWP7e15ZqrBHzkk",
  "key2": "4eToKde6jzd4Tmyi3DBq283Af8SBoTtSai12c5arGPBFy2uMaqDi4DeQo1cLY9zRayneLqh35cn5C5ZtJsyjVoVG",
  "key3": "uNsmbfqSu1gc58cc9yxf82Brt1CNXNo5WjmEh9yCLUuHkVo9a9riZPZXmzDkLuecM5Ra7XWsQnvdR1HRPqiZQf3",
  "key4": "4Z8VxufuCMSRbntnj8Kg8hJ6LLUrx8QWTbqw2AzqNrCq2PHyZYbxy7EnayJsYByZ5XqtR7xkm94Yibdp9B5EP2Cs",
  "key5": "5ds4Dm5Jx4mXQZDJiBjerQaJPTQui66v5QZgQSPckiKVdp1AEWeB9LyiBmDrXVLFajyfR49LZAAWcoy8GpznRWxd",
  "key6": "L2VgKBVPbXBAgiESMjhfBjeq8P8yPQWB5U1VwTrJm5iU7ok9UH2ED2Bf5noE4e7pBgc2mQpLC8dznA91WE7fazf",
  "key7": "4zYo2Sr4xya65bh9FYDuiwEyRteEiGACzod2wbcDqCZijfAgirtE2WkWY7yzyCxKtZMn4L1NhNAYBrm4bPjVziq8",
  "key8": "5WDsCovF4LHUkvkwFvTWbXzkSXQ4tEwR8QCaGZmW95kjuJHvoiro4eoorSqZNRt3sQE4CNJNeUXTN5KkGR9jbBkt",
  "key9": "3FsAzyJC4QLgDPYYCWi2Apf7CnpeYEijk3aJa8r7yRvKroS6SCwg4Qq38ZGDUqKawFa2hgiMj9zRZP9r115E1Y5L",
  "key10": "5dmehEFhLW1FVLQgC6asHfQRX7WmtjHuCnyMAEooSGRYwFYTd1YKyyTxRfGxkjLoniPMX3Du8ztfhxkrbGT2DGEN",
  "key11": "5pG4Ns4ibLniDe9GJmsjjaBL5qgLHHgUeP2rZegVBgTtWNkyHdikYaLT9ULJa7tAqdseDWqd61iyaFVN2DBUF5HN",
  "key12": "4fvUUPquD6dNCFDGKBRWgF1isw9X7K6LDN1N2LbZERRWnHDNbJKK2ucpey1MSVfdLF8J7fJ35VnykusBENVr9RpZ",
  "key13": "2AU1qPT1BKjKXJJaiQCfq372LCH7epWrGCAmVp5zCkpVwj4HKraX4wsqFKbk3r7najyGAFhADHm9oQxHo337nyF9",
  "key14": "2LGBvaLcmt6RZmAmXkDrAqiyBicPaYsSZRt4gEzEitaJejymU9EtGNzGuJGaaNsSiSMLyvaeTfEGJZNYSnvoP2wP",
  "key15": "2A3Kgy3J82gfvvvYfDGNDFoHCGK1zGMGVAApeb1H3ZUVrfDBYE9iXmR2yW2ZabwbzuQqVkjwZo23M3ux5tiXMdb5",
  "key16": "3rjstB83STTin95rLFgZkF7Yj1RNSxCdQqHdFdDu1JrqUCeSWgsiPrgXepQYKoBSyWWMmg1vV78cEpGMmen2MdkX",
  "key17": "2gAEhk5gfCPpGTy7zAypLpXVB6k1PZ5f5RQVT4ngaCuRfhnoiPyNCaPRSDekNfGWwbNdbnsAXHskTg2BGEWvGkc",
  "key18": "2LZnqyG6TRaJRThUr3awCbUYXHtvVjNt3WMjjZYUS3AuAvXakUGiroXzeLYrYVUdrzThjTh8FmTi8mhtwrEk3wWi",
  "key19": "3ksAGWLvnsMC7Q9KPApcG9xQC1A4XVrxRLagJsxK9z5X6UoUo3gLZvuoht6U9vdjUVPjLVDWu6mxXB9Y4qkFoYUH",
  "key20": "5a8GVw7Cxt1UgRw6QpbufgTJjbXNorho65ZNGWz2wbPzXb6VEgQXz5QX8auc4GuSZj2itLVRkMgVebx76y3pSgvf",
  "key21": "4Lt7eM4Cq54EHKcrXpq1bWogQesfTxks22igJaVgdBZcXU6TrfER2YfaFwKSsruofWwCF4TkF9Ca7TCMrPDwGAKB",
  "key22": "5ftVyY14QhxS34NbppVxp4YbfLxoj17VqUMCnSrpnZh99stHaVPwegJwsJpxRWM88CAxJjY41xQSmRieDe9cw7Lk",
  "key23": "uAkXaxbZYfU7v3hU1Kq7BB3GPgrKrzi9uTnNaG4ZfgZwoY8i5HPaLmChaG1mtqm6b1BTQDTdoTMRvyzx6t6aZmB",
  "key24": "3TkKDQZobPhbCnyrtgYARQm1KJzkKXSrEJcxMtWs7Pte83GEsQE3NSDsNTtGrvxbZJyJzc9wPNqzPDE2Ed2EkrpR",
  "key25": "5jTtA6RH4kmkWk47APTCYbYZU8fsqTc29CN8ocZzNKwWYtH2V3FWx21dT7A9E3MLDhUV4jMaqB5TipRKoS6WtneW",
  "key26": "5SYDersxpjWB81XQdS29BW7uJt2xuFwSkSyNXBbC9zkCX3jU2r2y6QtznQ29vcdyQPCv9CTUfwj4boewRiC8hnJq",
  "key27": "4ZFiaUhpwPXX2xEkJ9pAvGhwXQb2E4AQtyrHK3JaR8cARvCZtsNiJkc23XNo9ZmooVa5ftaU96skvVtxmBfaFctU",
  "key28": "2eMPwBtu4C2RQHgjAaR6pXDwT2hed5CxF3RZcVGNSkxreKKgvP1AZwsn671r2JaUfAr6TEQtjGDVTQAUqdrmC8vi",
  "key29": "3dWNDafFtUEbVWihpPPJGnPUEo2Q9eywUc72YQaP8H18Hi8QMTA16CxZZHccgwwmArkWVBWhMt8YNnf2cu49GDPs",
  "key30": "4PjmEPrn15c4KKfwV6nabDygrXJjHgUatLh7zwWaMQjsJvHSpNU4MYUf3GL9jgKRLQVVfPfjJGKgnEVKPCtt2Wx9",
  "key31": "KCpRNNDz16SCP2WGpD4pYsvRrA7CvLvnWbnZ9NWF4Bn3aSadvcFgyJA3cx3tKdLkPcjSe54LJ4AAaNdu61r8iEU"
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
