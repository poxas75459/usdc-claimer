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
    "47UgoSmurKAEQGECArDopfNBfT4YTcGDm9VhshaZfTAaXHUEsvsWrQ8qmGE1hgU3Shge8BVwFmoSsPMinAAsTCnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJeynMa79CxByNDVFcvsDVAotrZGA5dgqjwrDw3Zf84v6fJAg1eVpWRbujJVFgyEceBinKBqWMd3rPHhxXUa3Qj",
  "key1": "23QvUwQEouMtZq7bFDcRoswkSqdLJnwUVKK4VxcGExugjc4AkNC3tpgcFPnz1rpHGWS8dUv9faRLWWc2xXmnYisQ",
  "key2": "4CqgQGivu3z81vXyUePfGxH8m2DPKJV32VGDny6ujbGT2n71uewm5TZhhk2ARgUm2ehmK2v9y4A1XbrZD9hrZDQr",
  "key3": "68PGnbao6t4F573qmk8xfAyR58Axswv4UpHz9te6NxfD45mu7omwq3JQQnG3rupsDtWWbG46yiyCTXyVxDqYNbd",
  "key4": "uV4cZaomAjjm9DNq3bgYvAWHiWwVjCcwYQNRJHD3RQ61tGKfyNVyjftE18btNYPDbeC5b4H4KBh2yFTgHp6pQnn",
  "key5": "4b4Vo3zDrzdpQN6QSE2WLDuGxqJ2bbWHo8e2TQ5YJUx44Ak9aqAwcsoiRZ5AFWs3Qpzrdwe5GzPqDMyVkHPkgQ9H",
  "key6": "41cyvzMnEopvbViKoEy3j5hT72aG8kG4oJVBFjbtWbbfdCneuZDGTbptb9H7LcMAB2Lc4ut2QmWnrkH26KYpSnMq",
  "key7": "2ufzFyRKPEqh3LKMWfEonxsbUniZMfR4wNUkNY8NH6wLqW7R1iAouUSgp4tEMxXYkbSHzcFc2UdRhXXkiah4okjm",
  "key8": "4hUksmcYPYc3SkXZGSiK24n4AyWAbazCgAf6qReXNNHhZ9ydaNufCMRbPXpxSruxw3LGoWieQVRbGgEHRv1UBDr5",
  "key9": "4TFWSH44TuyRD1mpUbbF2yYNnd2yVcMbWxqm2CVCmXP5dC2LgZxNTtdFm9qmFcDJEygE8cDtExxefx6GcKEcpLyp",
  "key10": "3pZqFG7SSgRAkgBGQfE1gPyf3Jfcm7wr67upkTGc5CUUUbGNSBCVRKYTQDno9KZ6oV7RVCsWYSWFiFwwrEv3RwyZ",
  "key11": "Xs24K8wjuHMscsncuK6cWsq3jrRUX3CB7m4MPVD3DErfEZW7BjeDDXqaaXh5GK4TJTnfWgWs8Jnu9sW7NXhN5DD",
  "key12": "5Bx6oSzvy5LfJZBnpYFrFDXV6rCQsfmkinLBLjSs3hpzrweQmsoPxSSkcLwQSwA8cCYBRXpWxWLQfNfn69vukqk5",
  "key13": "Bjf8emLrUa5ui3dpaLZJBpsvdALQRAaaqGi1tcNWNqipDURknmC9Q6nWCda28JSDjk2dHDwd2AG1aWVSKt1iW8h",
  "key14": "h4CFpYkzP9BEhLnXkNzRYAHwK2KN4RviRLHLc5nBGiK3oYG8ASwAauD9Go5TiTmmFoEt5HyZYukuSwr6zNDijgj",
  "key15": "2T7tu6fzSpxyZR7jx1yj4HG8WbHVfUDLpDbeG3KjSawcp223SPb65NU5bZGttSKWLVGfPz9y9iH1BEQNeXUy5qpy",
  "key16": "1Vah3dJENS3K4QAYg9gPCs9DGjGapMdSNgWyA9abbHtme4ebJUKWaj4qfLZiDt7qCgBL5sf1PCVp5WSSdAJAnbD",
  "key17": "5seA8HEyKBdZvfkMWCVgWNC4JdKKuRb3mZZwHo9KcZdiroQujNk43PUco6mQJCcY9SGLGJrHLawfuNF23MnPMXjG",
  "key18": "5M3ndfmV6HeQrBS6MMGBPnmQwGwQHy8jSjmGxmiEQg9axqYSntcVxuw3sAvQB2mEfynWn9mLNGMQunnJfYcMkuY3",
  "key19": "48xLEKruPN4FL2hygHUEctXEYxZ5rFMgjPkaYeKPs4AKQiT3UWFH5TBKA7adcWpeL2MskUiwJpxWMYEDqNSSukaU",
  "key20": "3tQLMW6mZbTLT3uoqsnujsgPqGKBujytup3HMhjwxVyfZ4rLu1Vjfz52VtukguMJrfhPnLvFL5bnAvdXMcCWdy3C",
  "key21": "3hsbFJMugYbZcGpphqBmLuFR2CEpHvNY3TEgPEKd1GkWaCaVN9tULmx9rubYx3vnKonicvVM3uUZSwPvUR9HDuuj",
  "key22": "4P79AK7Ry54TEUwRKJ9JW5U8YHM8LHmqySEUtz73ZZHs7VLRRnsU5u1dToQCtWMSAfnJoLxi5ehWGbYdj3iCoz8h",
  "key23": "3t596yyM1ktRXKGLHCdVqjxv7wXbcAexrp84aVLySkctLs3bYAwzm3P999KJwZ9Rkw2RYb2TavKk9MqiQsp6q5n6",
  "key24": "2vusEzMurNZpBVK24Btcs3aHgsUipUkWqCwSmf1bnQW3yMmqKBzFmBUKeQnkJN5p2Upezh1p7gKnPRw3ihyn4eJA",
  "key25": "3tzMXG89HHq6JMbrvyTcUfjQrik3ft7TXg9R9ytJgYqtbySGMxU1ErZHvzdjHkELQWYm2B3bqCRaNQNHqYiza6jp",
  "key26": "51RJPhnhupp1hfsAdSzLkk2K14ss5pmhK7Q9fXBRcwZ2EuytCe1tU1vWP44CZFe793T2cCGDyZcres7g6TDjpeoo",
  "key27": "3xP22KGTpQGa2C6NxCmaLkpeC3DySHqV4huDAg235FXFeKSV64aZLBjGVPR85QDFqi4bq7Y9tUzJ1Rc2n6TUtRPk",
  "key28": "2sg1xjy8cajYFxwwEhnPnVgGhFiF1KXUzVueF58LbaKgYWQGZEWrrE87bM5V4phegDCzzSEsZthgieruqXpHaQna",
  "key29": "TFQANfzM8Kh3LGDoBnjTDhTUVuDeo3d6GszU74Pk49gMnPeE6XEQmx1gU3NUZ3eiUp9vWNPJdxrUtMBRhxbdMtD",
  "key30": "3LHUgXVyPAEnfMv2oBc2y7LxH3THVshqDdVwhhxwXVi29msrggtmdc6Ys1Za5TUVix4sFPBv9SsyJCS6FL9s9RgU",
  "key31": "2qpXwRZxBFdtFLjzBJUH6n22bNUQ59ebGADTm6HtMYLwHwYo8gNNhM5ZoYD1fNKdS4sr5c1H9dazpPQ1FA6kGxWw",
  "key32": "5b5VMEYH99gctXpobCyhj7bakXiPxo3QxaVor4xNWKq3Q9cRvEezzZuX8qsckmMDjfQdF9xSeM2wznezwqJgvYvU",
  "key33": "WHi1dEaumKmf7Vvtwpzv71t3uGo7iBVHpVFzZGprEwqkcaCXvo7m3tyfJsupPSds71t85twJ1mqPUUfD6KSwbPT",
  "key34": "3rBgFQ6wXtSuTBzTiAD1t5SHs3PhEUsXAmXBFvBzkpXv9MAdQ424takT6SKspSdL6A1b7icxutPxC9v8TSMtiXGf",
  "key35": "sPmPE6Gmfz99BzYG3Q7Zr2cYLsTQcoaFjwJtofQRkQ4abvvq6GaasCuZWq6H5uB6b4qyHuJKqdSCNuz9QdCZKQA",
  "key36": "4otL9umBmZYZ7tkFt2ie4gRV2Kns4RXzYofQmFfsZz6Po7Y7Nb1mHwbVPzr5TTSNxnDxji2tocF39jkpD68RiXA4",
  "key37": "5MQ9ieXarZ7TTR8PgugDYn9kASHn5WujCMPLYwCXRXTNrACzMV3CrePPJ9AdZ7Bw5kCwKbo3Ur1aHP8NGYqyWSGG",
  "key38": "22Z5VEbvuspbRUFrHYxFWpWBnNh31bQ211t8ur4k7t2pZyWtwkU5VSemcbthDQYGqUhqAuWzMbdMf4423ivdDmes",
  "key39": "4c7gcFE2SNZ2hdgUdyELUR97SZ6xqHMyqjJi8Yyv6weNVUSvHwxt3LRZHVQgNPu11qxAjuNNhbwF6yRzttnLsvDY",
  "key40": "41c2r9WzUGR6wV6QcEXkJ3pAZoZPfzCtJb1xhS2iUNAnGjd7UXhLbxcgyT7gfjEtipqDjWKZddV1TgFHLfPghkFx",
  "key41": "62XMBBqBhbCRCuigUDBxb8pVvYVuuvbHmkNGGV6u1crzfLSzsrvEYUpsQh5mTcrKjkVKUdB6cdULmPY6ptkVHgw4",
  "key42": "5q1m1tjAAYUX639zTJhPhz3ThcWeDjsR7atkHxK3hygkJryuh6m1zzwy5hVY9Vv73kTQBmJ2BfokFbb7Q7pi2b3c",
  "key43": "3KJnZ5tJc1Zx4dJ6H9vf9DoXpeUYipFYQCFaSzTtYy3HvsXQBzE3JXqE7JxgdyycJtturZu59Qkqyhnuz8BME44L",
  "key44": "5LiqPC3r2uwnfBZHjVVuEtknj3hezuYzu8GxetbAMGrjWKwHkuDAwYJPL6Boexh5GW7q2j1c22eyYKNyvtfE4xXA",
  "key45": "FaFcxsCqeEtZ5tXud3Jirhj8CjyzWRJY9po3vdkq1R2A6Ffn1d8NW7XM9nezKAov4N38EWUwdEjXCEAE3bo4HkE",
  "key46": "3bmSwDLxTsQZGYBFG9fWnNgH2493datHRGcq62wyFiNc6avtGMK13LNn9AXtMzSaXGXCogU3WyqanJnmYn4ZiSmG",
  "key47": "3kPcumQeZn6iKWMtBvGBqe7Qn4brniTUjYZVBNHHAQBkLpdcc42Ec5Nz6mApGtRjbMJW4HGZthrSCpRr3nZvmAbe",
  "key48": "tdgFGQ28yix7TYpw1zJFKFRVTsTLoUJtJj4zaysQqgv94DixekDWUeHfBpNzRsJWyphyCd4tYepAbnZhvSZAjD9",
  "key49": "2GikWK2j2qjecVQBytzt1DadhJ8B3P3aCxWPFBnqGa9Wi78mba5e3Ui7J8qkVpKEDec6WTYHJc52fBFWbTTGz4Gv"
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
