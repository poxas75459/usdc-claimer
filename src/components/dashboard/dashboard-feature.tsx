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
    "41yoHWZ6k89mReW8YbLLrkE3fRFcUzmXL1oxigmhLYitNF5QjFTKsrwssaGTLsuEfp9JfWhmRcjET9rKgmmmZMDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47NMjtgMKqYM4LG2fzAb31t5GRNFX6hP9nr5nnufEHDbV2ry1iaSB3pibU6AyTDzL1y3B9wyhZ18qTXRL8usteA8",
  "key1": "3VAXfRXBx9Y5KYP2Gfzb1bv1sHFswddTAhy7BWjhJt22iBxdFpFYFA3BXmHwSUFA8Kv8bstMqMJGaznUQbDgy9eV",
  "key2": "3ZfzUp1teRFSYDRpV16nSMrV9c5959MdCBfPn2FSgNh8p1facaNuzWgaMB448QJ9QnECQRvGSt5wHYgpbxoGFdRb",
  "key3": "GsG1SEcsL71tckqYVEr36UVFj6duosQgHYABX7nLbbEN4TRYhGJnWAcufJtKuGZ9n7HHgrF5M7mEjJcNpSBmGD9",
  "key4": "YGdgyMsPivQG7iHou5ttGh1QKfXF2sVv55wUxLBhYSD9wDJPgqDN35bTxybMCZrs5PgFscKdPd2ZBZgPfbCQGr3",
  "key5": "5NrckDKdJXvXef9xTu2YWmgpfaDNVCSUx6WJsZcChdyxN9pYXmVpDoYycDTzs4R6uAe42RAxNZy1qkrcgukCMhXF",
  "key6": "3uMUEzHUugxJmK5VBE3LoCzRRcdx7emtTrhYwAHgAs6p6jGWVvLpehinzhj8QF7QsgkkPHszQNsgWUkSPt1TTjEZ",
  "key7": "5NMczb23UmALynsYBR8Hqf38uGJAaGwKYT55ku2Qjs1uenp4GivvVx3Jvu5AgBPA4rhh7NoBfaKXf4sLinikPZRt",
  "key8": "4Myj6yzG3KWH3NkcY1tAgGjVBnMJLsd3HhiXxz4Qdxm3JJgr86CC2hJgND6PamEAY4juXz9CZPMAen7eiUrsMZDg",
  "key9": "9aGE735xJDGBMk5KC52NEWyAqFNwziLH7p58cKZ4WVzWT76X972y9UsLdQUgXmcYARRdjapQNoguMcTacwDKZAK",
  "key10": "5ErQgLJ2dxi8nDJFAT3F2itxrjx2q8qjMxYQYD1VL49MEJsbJ4ZNNYG7VMcvRwEWkxZVGFx5citjKfthD6pKsB9u",
  "key11": "dZA8qNKKN3vHuMzwk27Um2UnGWsNxYgjNCm31PRWNm6M6ZT1kRGqtqLFqWZRRLGRTFUnbTfJdYCfjdAKgSTYiAs",
  "key12": "4BKm1EDtosoxyFd5S4PdRc1PcSsGZCeH2HxNaUSyv26PXxNmqaDeQdKZNiT6SXnLBbMFk6VewDZMLrdvepXyJrgv",
  "key13": "Wr2iw5VMXFAo8395TzQPz2nhTe2GRoj7t5thfHRn8X55i4Up1kQEeJRebNt67iL8hXKdcJNSJb6hsf8MWWdNkuq",
  "key14": "5qPfcbf88GZZaw7k4wqUzhZJNPZgYJHXLw2ZoyJnCbTKrKeT6pBf3ZEqB5ZHJZNWeNucPpxQDbVcwLXtXpybbhKo",
  "key15": "2hR82xkrzEMDeraaK5xAv37MroHJC6HgMnVwX1Rz2YXLgKidJZKiM6N7PQHmFS37rZrhBnSdDR9vJ1VFVwoxf2mr",
  "key16": "4cr3sVbuKRZMCv9LJVkYySZthn3X7gaguh6kYp65gdievgnssL7mRJzM7iZwjQdL956kriLRdX8skBQHubHuDWYo",
  "key17": "4a5yAfGQvM6tzPzxiciRGjwSgBJu8fGmwa5YtD991oxgRMKsMag6netyatyRamttJTMr9G2Ko3qoQ9NjTBDKbnJg",
  "key18": "sg87GfwSxXJ8TeWLveboNEhoDzwzWH5cS3NVLNgZ9wzCp124GzYAk8jcP8DDydpMjNVnpDyAoNKr3dZkp1B65x4",
  "key19": "gcALrU3F4BTfmTbcMXPEW57xX9fpLwbPArJBUdUdkLmTnGcjP4kuAkU7Hrz9skmozyFrN2SUA6Gr6cEw92TdJrt",
  "key20": "2FSS7Y8UTJXadtnCyUXMQyxbnMuG25Bf9iaNiuvdU5Cky49pd2JDzG9nQ38ZgdrHawBLquBPNy9upXnQUmKcBG2o",
  "key21": "4YH4mSdmfEc27rmnpBsr2Audd1ayzgB4AyN86RCqgQf5k1WNE3hY1p8DPDfAV68tNvAGcZfZkzC7WX7xPAc6Zihf",
  "key22": "JTw9pjtKv7T4nBokGXp7KXNCjrWCGC3tzTguH21qP5HjSsyVUmq4uvHiRyF9ZJgZEi2hqvUkEXRScjPqVKpT5e8",
  "key23": "3pMwDwQr3iRVPWx6s1ZdUoH11RorcfXrH8f3eqN6Vaowz6TofUDgNFDHx41sLxVQZbnEfZzrg2xeymdd5csWdBnu",
  "key24": "5vXj9EcNLXHpcVodqNdPvxHuKEhntRwhWrJsPGf4QvFeHHSv6r3Hozfm2PpqDgV97TDmuVRYLLiamRXTF6eQmaHX",
  "key25": "53MXUSfqGYAfiyFqYpPfoQBfCfjc72RgYaqtb9Di2ZqrRExsyhdbczbYZw8Qo9VcX2CEqiVD58kvzkMsohdx5RuZ",
  "key26": "2AvRog6wBCJzZXmwbZyvNGDjELcqeUdagtZrgDeg8CKFzfyZoB4yjDnv5QQwxdqXRYPeRJjhwwtacDBEjVV7h4kE",
  "key27": "5piB37KMvpQmrvjU18AgmPNU3f7awXd8Zfhgas3emLRzHcV7BhevMrAhP4XTV8RwqyTs2ESNpYPVoBa2itZbTCr5",
  "key28": "4ivLgQdLviiMGUQtUFkbTQdKPBXnT7Lcctqyek2db7jucXEbZSR2FLqLezTLb7tBrZdeRyyNhetFFHyxwAGNeG4f",
  "key29": "6FasAckbcXzvG1uCfiC51tiXt63yAb83t91rGt6VToSWWubrvvcz8DqCCyVeG2N7v76KYPNZBhrYXZ8egcGhufo",
  "key30": "2jsWh1M95nd4QkzGWAbDS2enKNA7YSzTMhQBJDmBcXekMSh64atdHVNkbsgQ85XA1vY5NAcKiheZuHur3EFWK6dT",
  "key31": "4TQJaccpCcQJ4vA95WKwa9yyBZYY63dRaP9f7qNpVuttGHmvPp36ihAbdanaWjtnAjrdCEeBZta8cCbykK2o2wNW",
  "key32": "2m33jRaX45bbZRSiM9ShK7c1GwkqGF9zHLFBoZfkoWbhfFeyuQZ8vpxiC9LNLwqw4Aed4CXAgo4FjTwWMt7d5hfb",
  "key33": "5GH77s8UJ6AEuMt7rfWQ47FPhYaL7sw1a44CoKbkdtdc8ngdSdVD25jMjchK5TxT2j9kXS4MRZ9nxGGLeAZCVybT",
  "key34": "MDLEKYdvbKtjnc6Pm13u3LvqMY3bFCZWnWshaeqMMa4MxcX5kuyiiJnKUsLRwhipyhcvxekPNW5Fb4yT6uH1pEY",
  "key35": "A9uRgukFU6SkS5Fpdz8ZDYxjS3sqVpVftcXeRKKiGTnB6ChLty5D17qc7qu4qB4PHw7E3gpr6tqAkn5Y4bU1bLV",
  "key36": "48MPXUsfjYainqjbaFQ6N6FCbeZys6iqo1b5jdUgC3zNWHH53v69GX3Lpx57bSZUzNbnFnfDzYqXpxukVAibAy2f",
  "key37": "25hoMqqN1pcXBeJx5UsqWa1Jwfx5CK84hTYMu1fJU5PCps4Ad9WcuhEFaDnH9W61F27ZGhr8WNLFKjJAssKZhspU",
  "key38": "59yF5CgcC15v2bYLnSG1HFPLEeEeDKYSu8wFzYHRJVrooUhd2nuoi2ZQJ66ebo6FwM9sMwbWb9wMFXhFnBbtJhrQ",
  "key39": "3CtBcPmx7YxY8zQgoXSUbL1bcVhLT6ToazPinSLutTv5fERMSdruAX3ZChFvaQGFd6iHTpkKw6Jq8F8Bz3STU4MG",
  "key40": "3E9MmyLUGGqLx13vviPC8XquCbWdQ7JiAuttFhyLXUTKiCqHvH83HD1ZYpAtGwgKwSzLRaYBmUFbSoTP7sERxpxa",
  "key41": "P7oKvvTakYXqim2V5JvjA86QxZAGqq8WEB4MsV5hZXWHKjwAve4HuExNCYMcMWXDCCAwzXvEZKvFkm8dTP7o1LZ",
  "key42": "5nxRjf11umhsUQjeNuguan22rmTCEQcEKsGD8t1ET7Kx4oYCMRSVnhTueGG2MQBh8UQ9C2Mthimp63Nqx77FvfED",
  "key43": "2eMfWm6X7ogXCmGSBLFxkUXZq2aY1K2T5zX3tph8d564yEqFr9RVa8CQiYFbApzn7ZhFzQTMMZmsB3ha3f7rUNWP",
  "key44": "2rTQ6oJx8S7PhTSYTFuNSZnXXMN3XyzNMLXB9uTPB2C59XvnmwdwRPQqjMzZdEX4qd28WexkR3i8PLnvKQWtRQh9",
  "key45": "5dcGJxiZmoETcm5dU1GcorfFt5DDoujUXhL3gVRG466qoFX6KBE5A3NUmGFFmTtAYKUjW8NajbxwNUMg3YfpnoDd",
  "key46": "4GQm2BD5FAmmWSufpaUgjRLsbNSxpjgGFZqFX3uinSxcMBNUo8yS1Zvj7VXQW6s8nycQhEy1KAKdAUr93yqUJorU",
  "key47": "4kewMibtiSMWBWmvfnvPF6xQiCvTJHcPR67qS3UWUvWc8aj777FNmaZDPnwGFgXQd1zm6FL4pSKAUf6b2Sh3WtNe",
  "key48": "5Sa9nHJWi6EyTkLeAmUUPRhmmmqcQtgYRLFLEvRL24xSK87pgmEqnhWURn49Ewb5SuRWkLMvvFgm4yeJzyDW6mVV",
  "key49": "4EYpDPv23EMHoioCcK8YRZ7cTVp4EpcF9rrhKk7LU8hVVRYo6So3NwDSdVne6hLtytGNkt8d2pfCqRBURi7G9MG5"
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
