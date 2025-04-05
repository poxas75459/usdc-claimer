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
    "5K9FSpNBsB3jQeduxUdjs6YWvUGatjDa8XtDcj344mfx5ZqJBNoWzhWNPztonpPYaGuos7ZTvnpJ34uKpRjYwgFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFgsjPbckcxuDBYmazgyG8MkY9PUpRZ1FTkj67vAZTsRgq29jhnhNMu7Yb8LNiW4NdRXCabNPmvt4nntPe4xYjc",
  "key1": "2p5bcYpvGz1E1Jh9Guazy3C2i72TSCpnCTEFpQX4T3evMgh8UnebdMNTS3HmBAp3FPg1XTgJJwGZNcKXC13mwxwZ",
  "key2": "3M6Kvb6qqugf7Y2XhNRk2EmRruT5ND4JKvC1tvs4uprTptQNyrfrjFPGEBsKrijy4T5ibbcxPTHSwgbFKRP9zDf3",
  "key3": "5mn8JACATXGYXzbWeXNU1E6yAWn3CXGVuhDM9Jd3KSN3f6cSVhXpcM3ttnp2Bf1qLhyVo48SZZxKN24QL74HtPaj",
  "key4": "5f6ZYTHRR3A65EEKQ1m5vhMPJBT9iFqTGVpcKQpeUr55D3nEnEcan3b5KmyY9nSzb9oGkxi4HS1wUTnqAGuUHGRz",
  "key5": "5qqCRbpg8M6rPQpaEbPRiBzsTibzmk354U7G5juiHBxQ66NzewAxhzEMNVfXuXNX7yCaDm8HJVUd3q6VfQRjVhEx",
  "key6": "4M1VpbQEa2pB7iziyU9YpDgoD7ki1fUjjXkGZPQpW2K4e8GA9CNQwtc29T4KrX3GwSZ3uhep26TBPmMSDDiGgp41",
  "key7": "4YMKZ6oP2KS3abcayMMhe4mShp3ZqZMyF4YLhiMptEqECha5rJQtAuiEeb3FcBP8wUgAgpCtCHViJTBFqAarWb8v",
  "key8": "3MuAAbgpw3Jz9GatDUkbmqRLKiW7HExYFBa53KTKGkMibEbxLHmPZ5X2Ap5ncPBEwVm9wm2fgnMZdsv74s9xaGaT",
  "key9": "52CRamhfsHwL6aeHKpHjzezxSaS94V6S8D8rNYky3DARVsSG1b8w9JToZWcdJoPNTD8Cjizbfbgk5XgFiNg86999",
  "key10": "21gwEENZ7WckVMcx6WoHp3CYE3PGYobBf5h18rH1xrGUygbKH5RfJ33jZE4dzxzQChAijxEFUsc12cFLDtzgNpGu",
  "key11": "4nNmjg6q7PAgyvQLLXdijmJrZwQEt4NPBLgyULYaoAZxiVzZySWSQLgf7KRPhEsRM4wKpE3bygTSHNdPseUTEvL4",
  "key12": "321hYCP2xJXd3UuFBCr9ZTbh2vBM5rpx4THJmPb5hfBBh2tfsHApX6hk2vNkD79zBpoCwXEm4brS4NLmYZ3JWPWm",
  "key13": "45EufRemut44jiBB12ye9vDz8V1jwVtCL9xB3Z1REwiQXU63Xsjq5nWhYUwc4U9xdRRFmJAPfvoVa1q7VzJv4tWz",
  "key14": "2T8rm3Q74kpgNdnj1sVCF967w27XLsgV1jEBxy7bZhzo82JwvyLYS8p4LN68CdWuMSPiLj5Q7suXaXrJzQVtkcHz",
  "key15": "UPvbhVBvQq9JZ86Mp4b7iVgxyEpJj2HmEhNH9CwXZTxaCxPKHGAAENMDX69EZWazdnzNmWyxBJ1GkuXMXXC4Pt4",
  "key16": "SN1LKGz4CaYn7dHBe2eZ68u8wwe1GAu68pwABGGGHaCf1C5cJqwjmxW3SKipn1g9uQejWD9oZvX9o7Abc3aDGUe",
  "key17": "5zckqPadWoscGb4nesRNqDPDrtiSvPiuYxtRVTDW4KiZUCyLu1HYRPW4MLVFtB3dU2ihi73ZA4M9AQpPvkNW25dZ",
  "key18": "5DKBVeabqk3oEnBtL8RE8f3CKFb31rZ4v6xUWAMJq2HCFnmSbqkMKrX3wg6dqH3uU7Cqa7gfdYVyi9AicUH3Htij",
  "key19": "5kMp1HGmJNpxbAXTPb6CU5XWkw4AeKfr41dinZLLiokovTzFiMtEtS7rfJhNR2cVhb2G11MgHDUrRjvmis7XCVaZ",
  "key20": "4v9TPSSiTx1Twikh4DbWMQn4voMmVfBRkAhsZ9StBvE4Kqb19ubvxkkbzZAg7rMw9B9EmtMR6AgVgWMidm7JSooJ",
  "key21": "32dVJAA9znaNm1udFhU7uJCSH4gQqcDEgVoiVK8eixSSFhFm988ksp8JYhSKU7KX4AAjvwfzZAFLp99X4ianqQQK",
  "key22": "2feHpAFXXQYo6i6ZsgTeGAEKGdeMF53udFP7cX6issjDKV1VzWn8XFLKhv3vW6TkYDvqqegJCAf6tpSq9V9e2muH",
  "key23": "3czDb8fHksw1mpZLeNR59jW16K8i1BADLZj3ueMeVWVTpifGMKHqxS5kfCqE5pWE4XwCcb3RRNJXtVMXvQLpYm9c",
  "key24": "2Zd1Wizm6kHtyEufHpCnHTgLatEyUm8f3JJVCSL92RrSdLJoh6Xrr3dVZTuyLXhrR15Xgi7gbMhALuzkSRYd3T4o",
  "key25": "4Y86DeMYRKK3R6HKmB8CLxMyVkL82f19ZQYYgsKMdy9bF3aecjhSj5vHBC8MsQBEyL554sPRvPNvZHgRZqHz6CbX",
  "key26": "4vbhZhjSys9e2tkkCD5x8cFgN49vRrnxp5Cwx9KFxd5oviucvDq1CUApRihATEQ1ujUqbXwjtr2RLxY3kaWWeriT",
  "key27": "4cepskL5Jzv9X1i5y4nuksZgvPkwETwa5GtA5XswUdbAdcf4iaop7PxMWLnbwxghihYi8S4V2xQdCtoBk8uGrrvg",
  "key28": "3eETUXFvCVduscgZikK2cQTzg8MkZShVdvt2UEq8QEAh38mng3TAPpSqX5SEbf5atNwP5MUwzgCVA9iZkfa9fuWQ",
  "key29": "4m6PXR3DoDKovQM3JVHmL9zECkomH6aGWuUB1J2SeM3mihaxBGBWWawYvjCJrkbyayn1BzsYKArp7oNfbBfW6DBM",
  "key30": "2KNh4eXKrHJvGFfiTuiZcHE6TSJdFqGrCqwdnjwFxtDxVYkNT4KLxidZq1VEJvqXjoobTxEmrbLo7MYPkMHJuiTj",
  "key31": "24bae93XVpDUyUSDdTV4Tc3UquHrCaCUcjnJaUqJAmgrQNkDTxsKXBJ2xwdsmzrfkEsZVtTbZ9suQEg2rxQw9Vmm",
  "key32": "2JSVU7fJHQoZdR67t1a7U1Z91J1hBnaqRZYFeBerp7McZD8Dt7owdDciYk5GEx7Bksye75TWgCX2EZh1oYEMcQp2",
  "key33": "5WeWQqxfnMRhEB5sdUPnQ2WKjMA1WmLoyeorG6xj62zrHkuA4jFF5HJsRU91F5KyqJ5UxXawHDii1yJkcGuXTNxj",
  "key34": "DrpxHTeBm9s8bxomdtmdSHgMbTiPqGHZAgwQy34nS6mkVtgAqtKL88s4JC6ri5TcikzGPGQuQUZ36Uft3UMtAc3",
  "key35": "2Lb8k9XeRbt3HEs6speCQX5izvmzaPw2vyKnN5VWy5d8FSeJPiA3aQdSgWaEZj8WY85JxEgfurahuHEnRxVi2HZW",
  "key36": "xNVx5CJJpeMF6ioAvnEdbB9Cd3vCLUYiunfD7ziRSJHgxmGgRnMRKzYrriSeGbaBavd6HFZrrjxa1SB42WhgA7A",
  "key37": "481hHd9q265mE6rW9p5NCUw1iWNjCuKjoFBG7tgBjHpZtzpWzD3FzQnHfLqhf1dfUUS5pY8ZeUjVsds6pCfdqw1g",
  "key38": "n9sgwW9ZxMZzVrm7kSjuowTm9EYch9Ng8gYM2RrbV5gjRSp8282Th2B2SsdQmK8ryWmjuFbjRAvjdQgi5EEavRW"
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
