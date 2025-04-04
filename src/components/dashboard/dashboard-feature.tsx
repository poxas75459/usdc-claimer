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
    "g8qiqhaCyMgfDJi8x8qmSahmcQFJzPSzfDnioXa7RggszMVzKLAY217cfDHXVgSDoZWQk7uU4ibyUpTYg1MiwrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KF7f89qLS6BgNiAivejVeMEEEfevU4a9Q2HnxfkU2PFTHUMcpBagMuE4h6wSSjHs88Np2iFSfPaAthrWLPM6xLt",
  "key1": "it4xKpFNiMTqmVvZMorharvZChx4m4tSDPLympaeVADZwkVKNfpUk2HnYhaowqkTVnH51y16QQhxgCM72FE2RBb",
  "key2": "27BxqNEJ62vrMDjcvRHXFmPvtJdLmARCUSBGvYNd1HLbh694QvF4CbdjLMSNneJh5ECpE1CxHcPpRvvt5XrzGQqN",
  "key3": "2yL5agX2Bdz5yTdmEjv6H1rJhadRythrnRG3qdPdFg5gfMnVDHvwoyzWPcJ6MG4LsoPfVEse8ows2QtmUnHQ18WU",
  "key4": "3YCv7uHfiEZwKAJkFYVQ8Vv5CjkpsqqixqCJ2C2EjKi7o1kUeHrAEZp3PqAWHspCRfxZAcjfofjR4mC3xaoV6XHq",
  "key5": "33f8rShg4V6KQn9WpvDyWKGXeooVbYYC6e6rLABDcuVwa5asHpaPLELBH6zVngrsQmwVfcucCoEfKVZqLMaTg8up",
  "key6": "ioqc1Rzi2xJSBnFzhX6az3AEMqvhdeStaX5uJtk8zgGR75qanwJxZSrn8kR9e1CxLoC2UoTGSkxT7hhf9HJWBHf",
  "key7": "64d1Yhqd8hj5xeNeuMjjN3zmAZPmHFj5y381DcKS6CzVVuj3fe5Zz8sfGL7pBo1M21c6JaNj5Dd6s5xUkAb9i6WT",
  "key8": "48VyGf1925acr53m44PohcGzBCi67xftRPJkXZYiJXakbx7iX14TQp7GvDfiYQ6KE86Ubb3URJJHH5nPyU6sQGzw",
  "key9": "2KTJ7rmHm8mzJCcuujSrYsp3Ejvwh1dcSsKcf3f5ES82qkgiwBS5BCEUTVFrLyjx67qMdtcG2XMxZvLFkS23649a",
  "key10": "2WByLfBBhVQQS8ZyQBMbCC4epXi6dCbcHuSpkYA6D35T2TwRsctsBxvr1ELJDJZrQqdGXV7nif76xndnQwRjtQXP",
  "key11": "kLgwCyxPKCHnCXPAjxGbyVyW5kfc8nvFATCrrkEBsZgqWXzWa66VbagHcue6Am5cWpJ7QB6mjH4AkUxL94rpWcY",
  "key12": "4Hh7zDfTf6asQjnqe2obYn4SCAn1QHNZQccD1TA7rtM9QsBmYuzEWeiWmS6ZWcb1ZbJWo1KfFhgkYCB9xbX8zfaF",
  "key13": "5LZnyAk9KJhEqNi2PuQieitarV6FDo9tcaPT8pE6aC1zNfMrYQFts6jpV6xfHcZYcZHCFVarYvqjQ42inj6HABr7",
  "key14": "4r2MKDWVWYpsRSLJbBh9ZikGEaS5dPe9qWAeCtdNdqY9qsEvm3ELGk49HpYbcuyQb7Q4JhowVGBEKHwyYYPjywpK",
  "key15": "3ef33k3fDhi4Ky1D9dMXx5QDwRRLAS75x6TmVGvTPV26RZa98Eu9xpsg7r8Zumhrz3decS4BjkYT8MssTYTohAiv",
  "key16": "3svFqnTbrxivhb9gRQSQRnfEU5wLpPvCFmJdtBd2MrQkQHb6tZobPpoqdUo9zHx5VxCPAp7vLKWcDowfuaUQz53C",
  "key17": "4BvV2GycroAsCHY7QDAyhXh5raejtUB7aKdtvD4WstdncEDQar6w689AEMgfTf4ckcKwYCt7EKevcGzaPacwfAqh",
  "key18": "qYCrQr1peScFSez7Q5iZvTBQ66vYA7TLSBS43NpqbogRgNwVRHSQTVZpZj43JW7ASD6XFJ4r1Crgjgic4vjVTcV",
  "key19": "UBE6p9PqUpykBq9tcM55UDgkdMermEfGXzdi9taCcrKJef6qENChgN93NRix91HqAnAUvGnvGq5QJLT9oXk73Qt",
  "key20": "5EaF7jUa1aqSEtgB2R8T879ZzUwTsaihCzyPQNqfZ98kkQ6LSrfLaTo8WZvqFkaVTRLUppEBaUQYDm5Ej4M3qAng",
  "key21": "BWfVLGdA6R56MLxtNcRugdz56Pf9b1wv1v9kg4ijFJrAuoLaswgZpD7uFjM3tpGK2M5KqbjyW7aMgbX2Lsyw8bw",
  "key22": "2vWRFHLSGnRpHYNwEK8Rgiu2xgunJeURHhT8Z4V4Ybz3vYt3H2HkMcnTUNhrUQY4jMroMMEXNZruBgqW39Nyp599",
  "key23": "2atyQmc6uqnZz7pwga8tRud6BzGiUrbyKE2gRkKwBz25eEFULr67MY4M9CVXjwuaYaNRL6HAiaVMhvhkL55BXgi1",
  "key24": "y9pmha3yKhg3Mqj5y53Y5J1QoASZyPK5HfpDQ8VrtEcq1ftPYcVPrs8ZyZZPu5MrpJRA69acfWGwFsZsEpqoZbK",
  "key25": "2Vzspsr875DV7YqDVcasLrWSxw7Vb6QQMRFtM8B7NDV4pEMP3Cu7at5egWiXDcyZvXXWS8u3uY2sCduWnkxUuJW2",
  "key26": "5Sz7QKgqmtv2Dhpyg4zjbPsDdNaTHpDoLYLnBBpNaHKSyfaihWn97v5SoFhhsLja2orM8KtvsUJbcKjtdXkgfdio",
  "key27": "4yyZDXmBy6FuFNdYCqP8k4y4sQUAKgsvCNZRfpyEWq8vPVkppkZMTKk5dQpfAMj6t1VxBEinQKKH6WFtkKjcJCn4",
  "key28": "2Tr1ZVKmBomZWukpnnoh59tSqYnJ9WnTHPw6faN2sGwKjhYFgX8dR2XwadY5amUC9iBF4x7oUhXLmdjAMca7N5c4",
  "key29": "4xEwXrEWHnYsZ4u6vMe4hgjrV41svCpFqYsDyoKztWgvsGJqYqPSitETGnf8w757TXLoutEhaxnyGau3Fxduinqv",
  "key30": "BJZY7KL6hkRw7ern68BaRNfSea961dgExkC3V5Rkyu9RbiEJjZfWuTs5dfHun1Kr5mgHsYk7F5AbCnLYizocUFJ",
  "key31": "41iADAae3JCw81akASHNT8t8r8Z5rafJvmS9zr3NHNCC39D4aZ53bN44Q3ydKUJWV3VysJSLxZHH9ZVbQSqWtW9w",
  "key32": "3MxuYWjJJXFsdcgshQymi4L736dfmWHq5xaCQq9uFH6RCz2vvsbfAy2fTeXpKmtdXhLpK67iFkZP1XbaS9ByXcPx",
  "key33": "3e7EFzf4RLWtz1m3RigNpA2u4gPtoZ9hWpa6rvBEQCAwsa8edEumQeoMCT44A9AQDGoXyfj4wacHh6zpebqCQzAu",
  "key34": "4sX1QMGJMVaMsXFdbxdbKqsqdzAnmgr8FrPdv2BnerMKAfujS6DLatwYaVdNNXdb2HkV6DKSwrneGUmSMnnSQLbT",
  "key35": "NLiGydoQMs8FhKQYnDz1c4YfSS8PFoiHUPHTLGmVWUsQCJVESv3bUTNTZbN3e4s1yiQdtX1chRy5R6tPcTqHrtV",
  "key36": "4iRU1d5GyLU9ZmtECEK6hE7wnCVzjxkXPem5Lau4GCZu7TnrZkFbrsmXbn2aAmYsZ8jKWYx5RYwPU56MstUAwx1L"
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
