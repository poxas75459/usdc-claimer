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
    "22fmd8amkbbrM1xUQE9QYobUy2nHFpbm1ARB8ihedwJXs4HvAVa48a5yrLrjthFYEWzfiNvyUciDcAiwcNVuhASi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYr5Pu41ZU3Q8WSbFs3Ws2UdQF6ac7svrPY2BKCFRSTeih4zFjoo2zknwdabt86iMjwUZm2MxgjCdBQCRyuSmM2",
  "key1": "2hgcXAkT5q2U8wcwTviXPtD17gxC4dZTmRTcBAuc55yzZjyRqwqjA7Bf2hrtkefFMwUzEN3UYjBQyTbs923J1BgX",
  "key2": "4P2NSXrJbT6P4vKXyxt71EswreAY8EDui5kT5YeeaJcCH8ryBR9oNXQXzhAUAHB6gDRj86jTuKVZS2JU9EecE1p",
  "key3": "4tyfSd5q62fyaJGr5wUqt179PmGCHSoZzawB979hM791eScE4F8TRijSNmhWpT9NUnDT1s67ivFF2SfsK7wX6Fmj",
  "key4": "4wao4KSJLQqAMPvftnWKP2WRBM7qE5feD84Atx9QQP8fnjJP4VpDZSrDBGDHwL2LWf75zhqDAH3gsPMAGp3L2Fgb",
  "key5": "3JKYRuXN1AiyufPi8KYeUDjkcSERWM1nF5m8cif8wt9sYU5CGororQnuxbtWMCdeti13JyXMvkcNLPnSghSmYudN",
  "key6": "jEZFriK7PiCriWpjfLXe6Vy6HhVn2JzcbswAKsL9kWckd4tpTfjwDgp8pweHZt2Bez2Eyd7G4NTh5Gc98sDo2vY",
  "key7": "4KrSVokVhjKdxz2rxz69SyDUszSqFV5NoYh1bUhYbdMrwz2ZnKCc12CCBDMiyLoBYjHECADs2L7HrnXaR4jWnbP4",
  "key8": "3gY8i4tqsBGv9fbdpj4efsm2Pev42YE95EPhHBn99Mr7gjhp2s4g532RPJACYAXmC3u5kbbiZpTUXvCF7d8jEnzT",
  "key9": "5p3snsS5LLTa3X6NYmZnNbqZ51sB2U7bqUnMhb4i4E3eLDnb3Yw5oVrQiXF7GyzGjqPFrs5G8hTNugctpFStSpVH",
  "key10": "2rR5G4fyhJeresV2a9XVDv2G1H63bPBRDkFMhcUkDVFWCehZQHSYSggSMsf6V4YxZ28EaFtdc5E6FpNAre3MiCqv",
  "key11": "4rJHkgsMhSUdCfsRnyth4XAHfQqLa3fq6uixHjhZRsodNP3m8MgJwXSsQHwjAdkXTCLyMUcdVF1vVd5C4oXSonvy",
  "key12": "4q3YWvhcB2sjRwE6eDLH42ddetnQtuQwzrHTzMhhpgzuxA6YUojYgaBTfoBtDo9gP1DYnKChGMAXMMntSGedzimC",
  "key13": "eMtfwo165gMW8AtcpwSEyqezatUi7tVz9hKKbgJmHV56UZJBXZzzAtGeHkMX6AKD1a8UR8fGzSEbiEJDPmXdCga",
  "key14": "5YW742N2DShj5FP4j7CTCxqScm8bU9JJfMZggDSYXuSCAjy8sLpUkWheQq6wEPtYVpiiqt9N56pjgL6GSbvAG8Xi",
  "key15": "qXz2jPHQSqMMVxbGCHn1EvNnWLwj6MVTskvBUjue18Rq8nucomddbuZaQ9ejANWDNvrwLywq6maMR6zr3FQxQMV",
  "key16": "tT35uPjkYgffibyy2JZFxPtiidHfLt51Jxg9kz9aABVkNjrq5wdmDu8S6RaQqSHn2erRw21CtZwbLuVgBvm42Cz",
  "key17": "EjrWZXTVE9APdZ22FHGzt8rXnmiACQDC5pfSZzUxn88RHPxLtKvURXGBiPi5zx5esrkmJMH31aaq6nAES22tFor",
  "key18": "3EyArK6e3uototXpXXfFcrjZ7UNdyj86kQE7w6Dh1BumBdNuJUYPh3g2LABSaGEmGvHMEmpNCntUqJJvn5ugwYsZ",
  "key19": "4b5smTv36AE6ZWoRb8pqhB6DnkuiE6CHW6837uKMgcoNBFZHPWUxhFoYmoXpo1GEtrnKC8FtCqLaHKrtTwWL2C3x",
  "key20": "aE36qsaF4YCSdGd9PSYa4gFeGvdV97BP6T4pS27JPiyTkXahajnmag7EQKW7Lt6JcwVUa1XwNEvzD8KrxjiuWbD",
  "key21": "4My2qQefpiuBtB4K7SFnZCx8x3YviL49ZnFbwzrTigccX6fMv7CUXahnNHzA7Vr1PWq5UqBqm6efq5NRViG48DYT",
  "key22": "3JecoirTeRCpWKtkgXMqUWCASJLVVVs3vaHfvpk5hJENWTPAWYKW3zh6zZppTf9RtsAWkNZxCTP95K1LJsLpB9q8",
  "key23": "cNiuvAEB2D5s4wb6w3n2RdYnBneZknHqUTkznSQGnEpXNyqptmev4i7VSP1YWw6CMAxZ3vjszi3Rt2fFz141QKH",
  "key24": "bWzC138fhVY5hi7YSe5gk7m53C1T6xky1iGzxy5jCicJH8JicU9wYr1otdHX6oeV7EDv4s6AmHCGkBnD4t1CZZk",
  "key25": "37zq1gjKka2ADxmnvWDVouYBBjLg5arzPfXMnNW19rfRrsseYJh53pgM5pMJB9UuiZeH1VqVvS9kqpwsGovJ9k5a",
  "key26": "2hTTsPETsNjGtapLhGqgfJydmVgWFnp6Vc37a2mcmQbed2LQBbjMLpdWi6AyMZDNy5dMFsyHg4VkoLpFk6SBb2XM"
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
