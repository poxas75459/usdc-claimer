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
    "pKsTZeZchuEi45NCB8QfH9v4aA4TynJ3qzPk6JeXPvzD6PgVG7DqspRDJ4S6WrpW2bYXpnFiw53byN5hGwL4uRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWVoDPvWnFCbygsyu9UHXPEcL4TZErtkVFK8CnpoxdxaPUmxFBisAZS2m2LbCDvDw3uMxEnvBVmFBnrtJpzg8ua",
  "key1": "8RXMtM2KeMYb2PVpyx1Xt6fpGSmeevAa8XRSfNJSWapSvwo8o4f9ChfrVr9e8E3jhhjKrpPJVUPTrMVrDULyx7B",
  "key2": "2kY1DFhvzttVx2KRWC48C7jnz1RrDZFwhJKE9fj3T4BYqxbxhjhzXQZBgCYq5wv72nEuxbfFtD9RUxrYwL8JREhg",
  "key3": "5jAqvv3qnGAgra56uLEtkTt31eHvWbk97CGkuH7sAUCCrryBg6nEpjtnmtsqxv3tW7zPdXacg5Gp5rNQMtMo27f6",
  "key4": "3ob8dniztMRmL3BNTmde1NBK3YWEobXXMHcq33JBfjgpksGNkQ2LkrhPbLuUkMXe4faR32cZFfJojkQbG6sb1bqD",
  "key5": "47eiT3dBD8oFbiyjT8UXyJSuQz8NWYfBESKkXrGBfCr9Jjny64VrEFRiiNYfwyavbf1mVYvLs2YJmxgGo3Bgm5rY",
  "key6": "4KisRSFYfCpmXNBtaG3QV6geUkTJsphqS5kVdTKwiqMWyxdLtRuwe8wzeWHBGgEDVVgcwgRho5Ag51wiWqU2Pu9L",
  "key7": "44be6gKR2NTnK3vCFjntBPJYRaCE8Mb2chgTMzMa6TEuDCachhohXS93D7hgrUBKp9VTeByGtP9zcLuMrkbm5KnQ",
  "key8": "gg1GYELRyakxUvoDA43soSGMXntwK39UEjD9fLLpTosxFaGeiUDB6W8xWcQgUkzk4jPaopz8ochXiPzZcGegyEv",
  "key9": "3ZrL33GasfmXU6D39TWbxQCL8METp4NpgPTaJbqrGevxB4uW2L8F9YmuY5tcAjgkfPmY589p6DMwAHh6AHXYTuvN",
  "key10": "52Kb4fbiKuhawnhAQpcVeGC6p9QG2vM9BH3tNWUJT5KtAU8yUmswFkEkXtBTe6Jg5xRsBzH1oiCVstj1ZgtU61hW",
  "key11": "dDDxSaSagZAZ72AbwbhDLDexuKxnpFY9ZXnndxEkYX9VqPdJmSQYt9Lq9TCUm9BzkD2cC5hoFeg5q7TtAGixUtN",
  "key12": "2QQRKoDk9xPHowNVMs6Crj1jpKaErW4N7VYMq2Yoh2pWrgofMhshZqYNg2zFY7WU5PCWYT6GJxUSVwDeV7ux65Q8",
  "key13": "2i2CofqtDNAw95sFLv5VCnC6rfpwNtPwoQung863b3n1oB5BSJxgrqd8waukRAokpuvBp6u7fXoeBa3HezKhQjwg",
  "key14": "5hjJGdMX2FR6ZeJ1ZRQhwc2Z8d6TXNMpMeqXj81taC7xktaqihwVuaeNwFhra6wV3y18Bv5U2KSLh6uKZ251o29A",
  "key15": "5f6NMUh2SJgvjvaBuQrRAfy5YKbQGQZBjfWiQgbFCu38rzQkbdMBfWR6QkisbpXTamxxdajPCuWoTcWf3ga1t5GY",
  "key16": "3ZNisEJ8oiJqz8SkcicHtyFACMsXXY66fTfWghy1CQ9fvDH84oRNgQWJddGWN3C3V8fbmaFgL1jXeNPgAiNPkCuX",
  "key17": "Vc15SwsnSMvrCk6NJBwEnfNxppDbFcHsuVKkKYYGaKZCS3Z4kAjSwUqfrNDTR8cjBvtkoECAWPke8CMNRADXmJt",
  "key18": "4qtT5u9KVBRM51JfknSBxtsRemicXivHsn7oRtbZP5SQ6T2Y7B3qoe3tWcYbFh4vT3LwmwszWqU1CVQeQjyzikt4",
  "key19": "5Q8pqjh3o1QQWNmTQLNfBF3SfNTNE6ZyEkDB5LkAVvDxb9GFAxBRTrnYpamnow4XoCiPo3Jc46VgWf7jbWYMydDE",
  "key20": "4dK1L7qFmX9GtU4Rt31VJPmMJoV24iNKxPndUfubD69igFNS5EQ9n4oMn4d2yJoAvwxKLnabmBDZAJtzvDcuG9Cv",
  "key21": "66SprCXhcH5QCpWky1TQGSdTz1TB8UMMG8ABxzD3JadztLZWrhyfVrN3LyQphSnfLoyJhekJ3vEpvYbh6rPZJU7k",
  "key22": "ug3wRHZWsp7kyTbsWV1LN8NgQhqzCkp5Jnz54bQYJ8coyYhqEdmjATd2KdWa9Ybx5u7nFi8pJdSzcLufeeNRqyW",
  "key23": "5sjRxsEitGhnXmoErK18fbkoynLZ71vxUkj1ucRjakxdJJiM7p7o8NUDDvtCnZz8hwwBJAxKCn8YY3Y41D8JhXLw",
  "key24": "3hmMfzqgD2brybDUsr4U5PkeU3xfz2gqNp3JQaHJhWfmHemZLu21oVN5QPW85mS9ntdwY536Wuq5UXvfyj1Yykrj",
  "key25": "2G28J4U2ruRh2GsE7ASh2FLXQzCSGzJz43xwxEm36QyW3GyaLC7EhpD85nV3msGpqsENFNJf31ygy1nuurGsfH3f",
  "key26": "YT6dfCAQPz3jfk9yD2NaSpA1YdeLJGempYjKwF3XqTGMXFoXHDjQwjE2djPCjHZaamrBsLxki13zSRsyXQkhyRD",
  "key27": "454JggU4NSthCFFj78XqT44YJ2nWxSuTEcBtNzMQ2ewnqaFU2K1znXsc74vLcSCC4rV7o1fJ5mbxEQgWqqqKttJi",
  "key28": "3fL7GiV1LCupASRZmifFKoh3Sk95i1wqY5dEqxZFEnnSg2Q87HAVijTwGuh4XAtwYttKFRzGbfFBeXGDnWYu2oq9",
  "key29": "3hmgWK3uHFx9m2haeqvEZRyYhuNezQAbf8VvQpuq8txWg8ek26HvQ1Js3UmS2DmqgQgM1vFbvexoVsRrpbunaC9q",
  "key30": "5DbeTAn8byGvTJXMmx3frpfjqdGtuCHNkKpbVQUWdhVzm9c43FHce1Mz1kotvAKxi26x7dtbbdqXG1QhAdF8hmvo",
  "key31": "Wu4vU46BYvef2tA29zccip7b2zms8pQny4Q8qDPZZQvvadTd1XXooXY8tbXfY2fTFjeqwn6JuweRT2WGLyqkiXM",
  "key32": "2seQX3xVrb919cDxqFKowpQSTKrjJcQ2nCp9R9CxtXEvLP8V81wK4SAKuYNN67nNQn67VXZeSMAEv77DiqtTB8xa",
  "key33": "5xdq4UpDRc3RHwBYbXDzUJujtf6zthYLnW8eXmgZWHf8JhFcKU5FBYRE4ACaZDAwnjjBAMSSntFJKJ7kLPVuMHDP",
  "key34": "2BHn5rvV5mF8kuoMuDxwNiePUPYPUKyHk8ti4NySQcyAbTkr1FTJPdLr1LmtLifMtmxSe83ncnVq3Bsw9CHwagNV"
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
