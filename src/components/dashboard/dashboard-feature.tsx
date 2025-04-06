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
    "KnUaFThnEMCWdAguvWcdTMGqsR5oi5gT5TPFUmUhrzrFeCc62X1FuefR3pcHuyXeVBWATrReXM4j3CU5yZW5GkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xL1vtXWmR4Hp6Mi1cQjTbMe73YszRRBTKhdyscV4fUy3NKRs4fCaqhxrJ9H2JK5g5A9PEavpNaTm4jbn5JHWrMP",
  "key1": "QEuyyADYUa5VmMeKVokwdgAdfnytUii4G9k6DtJgXJhsxPh5qjQNCzN2BeNBiXVBB8aeNENhqQsZMwX2CF9Mm2T",
  "key2": "4KjuNxxx7HaS4kDTFQMt3o9Pf8KcbiL3oHRUs9fszgSXaWcH5YX8ghjKLHSMHBF68DrLrVJvAxzwN3asffh9tGqA",
  "key3": "Vq3cvMZZqX4aayLppNVwCrvupS87A1gVrnT7q5i8WNjj79UakhjHFcfoc7MV9yvu7oESnfLUzYuNhBq5MnDwWKH",
  "key4": "4za1DfjV7XMjhYnADL52XT4nPHSiGk44xb9nMhFa7q2osDmnUcyWDDp89nkLmQfDfRqXPbsKxQ4TUbMzv7reXtaf",
  "key5": "4XH3YGsby1bZS9YSzfeDajVLoeJcwuYuGUKDGPMd5PkTxngKQBsGYktaipyXSe69DyAqiQyek599SJDApHGpYNKw",
  "key6": "48SqTrNHVawYSqApy4kWLXrid7JiCG2B5ti4U9n5fWHi1bCC3Qinte2CiCva4Ec6qtpen5Kgtsp7pEHAsDBnxUFy",
  "key7": "FtcfqVB71sDnVRDKLU4vgywovnx4wddkGo6pfHJuyKpQaW21HPjt1WQ6pS189YrPfEXeZbN1ZhKV6wKUgrk6jnN",
  "key8": "2VX2Uv4hb9CNfYZNqQJDPfcfBqWHQBTGQjJgNqRwaCMYZvJybYsZ3ArKrkuXrfwRNcMfE9uM2NaAo9qDFgT7aKQ8",
  "key9": "3pKYCXpA4ZaumcarSicSfpBxfchy1HQrEugcVEjWK2Aou1TWPkErvSdMtDwhwsmwauPy1DT6yVS2j6YXrmCw1tfJ",
  "key10": "3FGLAtWHgrwNXF3tuaELWvQUgtKgRnEQBR86zjkVy9SPgug7v12crhS6ZG9q7DL55afBhu1dDTqhHbSLW2gZcCoE",
  "key11": "3Fer88cuJFRMJGdfsYXkcK4aRNLU7bxgiiPBVzHPBoHXJJDkwdgBBKoeRg8mR5p4VeaqJ3Qm9SkUjkoS2WhTHaJM",
  "key12": "26wZd7C3W9zfSwTLm2byvcV2LrFG86hioBdws9tf5uor5sTB37Qn2To67vzw55CAHPSgwzt3sDB8LXMcDAjM6Mtu",
  "key13": "31vGGQyz53QoDmCmz7DJutynqxERhoS5fo3sAfAHmeVcCsLK1BsYZ55CpNq27RQekrcQp9e46eHTuAcGzV2vvjTS",
  "key14": "2cUkA795qSkH5iMj2RZRSVZGXioNYd5xMAxHMdVm5faNyXB774MBteRsQtXa7ktBQfP1SZUciRdeCfxnggHeanze",
  "key15": "48BqCi998dCaLjGhsyrhmVSiyspdvL9jKTuMWd3rCH6zRwf7dsxsujyjG3ZgjJD2wb6eEhzTJhbUjBM7sS2Z21YM",
  "key16": "mcKgmfdNykyxFC1CzTBThgGS3DgdJ2yNmVGmNUDPrTxyh8Pfb9gDCdHcaYB4h32qp1fCWRnjZs6YEP1H586zYbP",
  "key17": "zB3TTZtuHrPy8YYqvMM7E1nR44Q9pDoA5pwBzHrArgxg6Q2r81kjFVdvjcPXc4TzkdMAFPu3BioLetMioaqeGBD",
  "key18": "iWRAfUmCxzUz11AdTNxjoX4BE18QzcTM9ZsGPUQWVQXavBgtPYdY3UGwSS9dzBtQyWk9UiMu2BXo1fGH7Usxcf8",
  "key19": "35nJbGqkkukCwpJagbYxueSupLfEnU4GVxZrhKSUiMMsGr2w7JQntR1zhp8kD8HanXzPi9wZazxQk4w66h5un38x",
  "key20": "2S14acNFdiUPrJSsV7e1VKayAtYMQMovipZLqx2H5bYRpkLQmsSbsaPXUvS1tYcSu34gdFqeSKAfx5j3L5oZbK3e",
  "key21": "2sP5ft2MtAFsEEyGLTFGf1emnHStamwwoxJGdnESSCFJsq5ruE6B9vBW5wbY51WUdEsUjUsXnCiKwHxQ5xBDUKRU",
  "key22": "4FugzmFdMnrpqAzTN3GxN9equHubZWSPMFD94SkgBWqexgzPSGvnNSVgJj1ioGHuLWpAK9dGdZhX8gnALzHqo6PY",
  "key23": "4ci1mDaX6xESKfbRARpcPXti47NsVH39Av61oJZCDzTVApAnzF5ca6Ksdh7DXJk1LPwemc55GYiPFz7HTXvgBY1o",
  "key24": "4w3RKGVbpF7iQn76z1QctG7D4T9EzKVUHphK9LHsLj2oq2QvtUUNwpe8pkjfW3tNxf1y97e5tNJWyJgr1izVn8z6",
  "key25": "65dwU95y7rxbapD8gYegsNVWxSZ18bMZe2gqeZNJBh1CzTD3JAfwKFQeWDxc4XUS8fs6S43Q4ghDCNVgqNCzodPN",
  "key26": "3q9UsVhJjc8reapDLsGfULM2ixvp8bEFCGPe1eXQSSMbA8JmsXBcpJj86dNWQG3JMqv46zPA92GDfThdrz1AC6Xh",
  "key27": "L1d6rzxyMGV2JAMnuUPveeEZWyqmdeDuMzr8pJiYcYadAZiqh1yKEy8qFS3byKrXyJ22weGFrRCo8zQUvsExcoZ",
  "key28": "3eXkWtdQ1dU4JnuenBiRbjCnuTCW3uCei6Q5JN1G3J6nFZN2bWULtwmpagVfuWLYSaB4Nj62UYYVCzS48DjxceHw",
  "key29": "3GkKiuNYrwGDtJNS2boLVckTVQUCNHD76yRGEgRrCpraPyoxoyM39nerBAFvLFnhKmmWsUVhJR2qYYFo6g9CdxDW"
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
