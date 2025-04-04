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
    "2mACqZsh1RSaxeyQaNk116S4HSUhDEAxsLsTJ5XMELZoSQjvV5SLShG71j6jNdcwLZENFb2T5B4QbA4Gyq8kDLLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cv8ax3UNBcQx1HwKtHbgCfaydNSoroeTqchNfHPknhQJSgL1N51cG7DvexKc17Q8XjNaQE7hQBpCQqQMz2acoXf",
  "key1": "AuRPcmk9SEmmzGiXhwhRfAmTcw4XPvdejXht6PQzQreEM9UQfpb6hNNoVZ7gzrQdMADNkJrh3KvxmGmRU7v4jTi",
  "key2": "3hUCFgTR6PnYMUXvhaLRWjU1gybL5jTuS3Nd9N2wFimRxEQp84UkKFoaUafTecXRzPaTJfsrXYFor7vYrNDVgkdR",
  "key3": "39yiRAK3gmi6fkj317wt6LNTqesAGF6iAXfrHRDg2oYuKEP92pQCSpRym26uB4UYXFq4NhegWzhk9RiMjfU775mA",
  "key4": "pcZGyFyxP6jUazMRuyLTexAU2XziFx9AdivxEyPCHmemHr8n4xabpvtu79WtfbYjme8n1dPhxsAFKWezDTC8c6d",
  "key5": "4FQCZVxm7BD1MyH9bbFrESS6s64xbF5V8mRKsDWa8TKtidT62TnY67VPzPT94RnVRQehqhhAd9YFso7ULLACgaRk",
  "key6": "G8FDuM8dN8KTonV6f2mqtakdYRT6ZuL4Gd5oj2MzMc6VS1tNt37pcUx1eznsQ4FpNYSyc8QF2wp8SQ56LJuasuZ",
  "key7": "5oQEQPuokD4PVpgEpxAfSs6cqFop4B281HwQNpmy2gjt9V869S4xGoXWYy8Hz9wcmchcia5U5Q4yRqFffffseeAY",
  "key8": "XfcrQtp9HevtFSJ9RoPgorrudFCiCBGCnrWsfin4g3gJAdA4uPWN5DSBrCZ6CzgJNU4zCF7NeSTqeTPAuTi7E8o",
  "key9": "3BYpsbK2zNrhAXJwc9nSZPBejepqPuvwxz4JRBgVniQ4qgzbSMEmgF81zGCgVu5xurvF6YrLyMWUYLE7soMRio5K",
  "key10": "474D67eRHtR1yRgapbkznzpsGMSrfFBPLRqF8i6h8nt9vbLUSWaXAtGu7S4UGbfcXMjwt1WJfzzK7Fw73yPKmq44",
  "key11": "1zwhCjVUdrXHG6yH4N3WD5DJj4fGYeXFjJzKSPP3LGVnz315N1qoEEVQYub24HYDLoTeHGcuJaMSbowHdSXnhC8",
  "key12": "419h1j6woDfc9GVjRE5WNV7jY1JsryhU5rioY6sBBG82vBNoDtzLGeqybQAqQy1tdn9ZuzCscxv5SK7rpEr7LYY2",
  "key13": "3ECkpPMZAGeeBrurey1NrH1kQNHTvD8QKwZ8oDzvD6x3RJyvGJ84WgJMctm4XCoQY5zPqThEu4wKZrCnxGcaySXT",
  "key14": "3HGrw2ZDPwcxy8RbuMWKrC98fv2ZmBiwhwgwBu8yVuRSMdAV8vzKZkejDxVHBY4t1hupqQq9YdVGXBquWeAGkZBv",
  "key15": "varndsfn8JuDcWKE3BEMgYcn1JiTtZ9BPpJpY6u2Tk2hqgA8rF8UnYMNAkcAqwpJW9wAA4AKTohoKFi9Zyx9V7A",
  "key16": "3M7DKPrBAuZKDy4aJcFUmnVvYdhWVmDMQAT2bqWp2WQMde3F71JiC5wPBDuQpDDdTphZ7Hw79LZjHpXSkjM9EDsK",
  "key17": "UaQta1xMBEpecd7SzReazEdtxGZcH2w2fb1SEsfpHoJscqeMoVbwLmJupdzyFcXNLseHdbrPe5phpwwekVv9Gg2",
  "key18": "2fmqudqk8RoiANyr6WRHXKmBHvkkTkBoeU9a1YDNB6PsyeDmPw2pKCvFqkx9cYiwA1SUnLGybdzeM4XVgv5ujHLv",
  "key19": "3Y2w7Y8ma3aeaPPB9JpzBmT7GrciJxA9EUZegf1n7V2nkKs57UfYbW2GY8ugkqnGwCeHvYbtTDHU8KZiSt5oCFyS",
  "key20": "3qSuDCCxAJ8jePCGYwjdz6Jvy7XJr9Yf6VmtMzS727efgxtf1k7vViTnrjjq2eAYAGQQbiEqAtLvqxjsH5bGHAJx",
  "key21": "5fGXbJPKGujmK8Pj74LVFgDY7q3ePAC1ZmsPnsqJUjY3hGcit3inHC36ppkbKRMFa1eZ6Lz2DXgTkXCd6aMzkrcm",
  "key22": "oVK12dPZkSTSwfxwMzGQBkW81BSQtqtck93N8HRP5DZ9bJr2ARUVyabknnQ63ZbLGqXJENsnu6QjjsXDcDtnfpd",
  "key23": "5A1rz8TZQEcZgvdbVJn5fTi5PpmVAnjkPykKzjDV1HpwBCjSyxie5Ph4qsXmhdQHowyYUnXYVM1Arggi8UrPXd9D",
  "key24": "3V8J4vQ8rSPQuyME7M6WDBHH79d3BX3t56UqbDFdHryM5D4iYNNKKMCrqAM2b58vvvz4KtHmvEs45EBuf2iMziGE",
  "key25": "3NUqYLW5EuoAtSxSftPZWGUFKcCT6DYvf5xs2J3Tt7ApNsPe725GxKLnoLsFga473oZTEKPWTPG7ki9HQTcPeFux",
  "key26": "3k3AcEArDmRHur1dnvfkd7pdB5qfEwjBeT9utdc9XV1Egmr6PKxVgw9DnMEYkU5ht4AQrsoYPzvZuCsb68QVyDgv",
  "key27": "3HjWarhraJEarD8bKQt8d7jJyG6X4KbJxQp18DCkRKRWmM7QbCi2yTTWiPU18fqq4EAyF1nzSJ8efSn2LxY8bYwF",
  "key28": "3W6xPRibYKeYHw8bVduYcW8qAXnRt3kb5wASRwrdLzqnbZS2hTYFRLR3owkxhLYPGpxTNSSG9Jg6VMrGKfQSkzsv",
  "key29": "4jRRyorfj1CxppnZvhDKavFnVUbQMSw1d87DSPytfVEw7BRGcCBGwppqijSQUAagEaT3CG9BWfWZrnhS91Vu5jGB",
  "key30": "2ooGxwkZZFQM6aw9SJjEAQSu3c2Mj56CEmUoFiEXvMWidchnqv3aET5wZDzQy7N8kWiv5osEooM8NEFwnsRSDrAg",
  "key31": "4EH5S8eiV19w9q9wsed8Wra9qVBhtroKR2d6bKcPoXqz4FrrP8t2BcU5fFLPM4HC9Q4vnmt6mtQGk2aSfZ8TRNqy",
  "key32": "4cab4pfrFFHZ2f93csJDztZ83iCm5aJaEDGPM4XessKJZTek7nzNSZQZ1KJMsp3du2mA51a81jLwa6hhZnXWro5o",
  "key33": "3PwEwp8uQaTSnNseALBJ4eu1Bc1BTjY6rEVos2j8YzSkRkKMwYEhVmiDVaqCuaTuittt7nCHJezDPs4RySUVgGiL"
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
