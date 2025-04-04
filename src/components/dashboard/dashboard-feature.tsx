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
    "3LVzznsgSHWQ31VDa76g992waLDavxdGmXdovFQHfeDmjQMVnR9YWd9gSQSLVQu2Crqpfu6ypkbQV2RTHY52e7PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TJXaPABW5S9YCW28Tj4gMTTtakGJTWPeMni5FtgVHS6LFkqKHMcw63QAqT4BHmrnFToMJg2agTHGkuxpMwZ8kbt",
  "key1": "3JW6fkbt2uhoqcxX5buL44dKytCTr84X7LRiKDUSsVNcacm3GZ32GiAcDzr3Z7yYSGANVpKrx6wzeEsrFwjB2aP2",
  "key2": "yFWUxScGjbYCKoXcYu8CG2mMk6doAdYxLshAd684wW2eqUQZU7dF6CmhkRygjCq6dC8e1yxFcVzXcYztEWT1imL",
  "key3": "2eTYvWY2FFDQVfcsKJjZbHjMYEBWmeuz22MVe53pk8zqVo1qEMbJdPw9uKVhkeM25LdWVtYjFuhsPEEMmFf6dkod",
  "key4": "45XzN3ecSpqmB5d1YWqtYnJQfYxkFNpJxKfht7ovtzFVkz6raneL2Zhv2WjHv9dQB1VeyJut3Ns5nMnA8tiknK55",
  "key5": "5j5ZRoZgNTvWmVXGcGPngMLfpTgqMrs43vLw61euGxsaZ7aY6JNSSf7MdoeGvpsPrDCDePhvfHZ2atgE8zoMmBVF",
  "key6": "aKn5Y7sdPfpumSNKdudFGUQK3nhu8MoLG25Z6dPyGgu4mwuCArFw6c1WA6Q8ari1gD2kBxdCTZWrafVE5EWaSRH",
  "key7": "5oHFPRmsfUmQ5Gdr96HJPUxV94psYLwJorKyNJ1kxESxcRF1dN8Zhmu8Hj8uAnZseY8RGPV1jxSvCn52zQKRJeSw",
  "key8": "59cyXaqQ5Vb2e3Z281z24EJ7aDdVM5Q8Mvq9Jf2FU1euN9NjHrmrM5YvBeBbTcxrxyq2rkfmErdXZrcpj8K4rjy5",
  "key9": "2e3K9sTYMbm7SFoh6fbSikyee81DpEoXkcxKrMdzP7sSv47cCCSppsbtk8afRrybiTxUA8nEBTTPtkiNkQ3CVmVP",
  "key10": "3v24EHkReqzQV6aMFhWgCqJnj8Tm7kpja6SEjpXgDGHXzCDgJ9AmQ7o5JktKLgyPqyKYFbTevxeEYK2tFutyNBTs",
  "key11": "2kvTy2kNs93wdBtWVLRZtKWG2QsHNL4cPwAaMfHPD2LkUnoqWgonhrSbu24oVQ5MKiKjs8LG4wSe6NKDJPTku3Pb",
  "key12": "4nx1fiZ5jxRnhaJcdw4LvSHAPHiitqLR8StvpYK2NcAxC2YKBWhtgpdKe5vFjDobomHRWFhWqvQzN5H7KDnmRBBQ",
  "key13": "4ZpcSMccLmmyydEW15YQJvwiwSKyagsxaMozqtcMXXVyp4NtsVCAjTpmWPx533SQi3WmqSC8JX64QiUpqRjMXFj4",
  "key14": "4Zg5hp2MUYB7P8aM4LW5Ge7L6KLrqjYQ6XxZLcHUBzj42BjLRHAbjMK7U2PkRuhRbbjELGkHWrE1kFLpBpk4FU9h",
  "key15": "2gYKpzZpUyknf5Lq3mYYVTDE7KG4kWZNA1LtmXJVd2bVo2LdCMzNZHHWZpVmggPk1NovfbPuV7fcbrfFmPJrNBes",
  "key16": "3MH3Zve4maqJBbnQPH19jDMvKCAaWKJPShqCeAMu9oEGKUSf7P6QcZaP2HAhYwCcPHGnfTGGi13Kzrw13CzCp3tu",
  "key17": "2ZKJwh5a9GBk4TiWUW3cxZXTFuErDP8SpH8n2tkWo8a5dQMvaEF4dNrihDJckkLLZnXv3MM44UvYYqFfSv19xAjz",
  "key18": "2WSTT5MmrHyGNFQXaungMFCTALNbFHgcVQH7rokyvRWDT6Uac5V9nXJt4SWFLXrXgtm6zfPoH4H5cQHMStM9kUdY",
  "key19": "3aJgAEgfyhwQDPPB1Zk7LQ8dB5Xtbh5UvZanyjfnpVZk3TdxHycKfTdmpbreixbvggZq2GT5z4aTp5zyqy8Xyc8R",
  "key20": "66sjFfPrASTT96L2Pptnu5UY9DWYKDdS8MrYngU3f39LAhVGYaSb3W1zxJekBz1R9YAsc69dA7XqZ5RtcxLuowGT",
  "key21": "3rnmr6JFdGKu5crPue6zcp1bXk3VfUh4LCisTn54emt1nw7yQsCxgU3G2Qw3pYatAbBRBgvcdCzc9dJTETCh8cfx",
  "key22": "uWqJY2K8zsA7XNDXdePmeZ6PEy6tBTP3bcP8LTf7e1rH5JzhXay3wjNieWSvpYGVc3iYk6pM5k4z8oqrK7iLQfL",
  "key23": "5k5s11gvt6ds4avyBRrHuPtvCeb9kVEbMKikbJstTP8dLuBS238spuoBRVVrQfEKMasXFyxsX3S4BJp7tHHoZy4Z",
  "key24": "5gAu1gt2HwuhfCG8VnT78GUnhzLm8HerQQPX7xGzSREnEGETtnXVeFrTERTH5BEYTZjhvf8E35gnp8ZJ5RQBJHVG",
  "key25": "MkGcUUUjm9Ts6FdNNMgiT5puHLa9cKNiLFY2AMTJBY6mphu95L7oAC4QQsVEmyNYq4KyzH4JrbrJuioXFxm17vM",
  "key26": "48fJQEqjPGzQENCi5NF8CYp2bEF7mHPoxp4anKxHg7Dz7pg1EysqXwTvmhb8VKo2KARD42kB5oungXqk7V9EF7Zf",
  "key27": "4wy2WCWjtJnZYsMPBGi9gbACxPaUzJSLMMcyRtkUkQhAJgnnDMwMUmjGTHVJWypuK7M288jWNuJ3epFXzqCN1Jsa",
  "key28": "3fEcyZdkFuV8nQGnFKcxATAwnmBqytPLp9pquUVGNfisQjB12hK6fk3gy4PaM641Jk73eMLAwiEN99b2EcdePY7i",
  "key29": "2qiuasGLaLUR1Ci3c4AUNkmkXUkD8XkCJrUNP1kJniqF8Rf84G87d2eWac1NQznXW6JsnrHgfYUWyq3scQB2LzvK",
  "key30": "32KtPwS7NvmpBVLj63By2qvWd4BWmKZKRvSBsSVEBoMYcTTuhAhv4wvYUDiokVW6qgmQfvMdMWiqGuAiHxqCz8Zi",
  "key31": "2exnon64TnQa2UwwnoVqmRysUaoH3dMHeVc5BjV5iuFEoPJao1au39MEj5BGZbGct1Ca17ehhRVCPDJQgsFYaHaH",
  "key32": "5PNcSUPkTEfW713g6eycGS4EZX2geWF2SNNwwZKY5XghwcL333625EiKf2S1ZRu8UZ2eTz69bzkE5AA8XLUVvf1R"
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
