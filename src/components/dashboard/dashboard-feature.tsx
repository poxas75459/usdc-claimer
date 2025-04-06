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
    "56pkeVrYpuTXd7bHGkwxAvvRtD1nASJdCS4GeRKqhCCf5X78MchmKyFUbHrPwoZh5QU257fPCWwVW3soKTaV6Ae4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62g9b2x4TmDAVpGp75vsSrV5XTrTPkgadBxQbkU2KDibuGMZGz4tH6XFDSigoiJEqcJMv9yBnhVvFWegRZqybvWj",
  "key1": "dLgTDsczptWqzprD2D373YYaxmHHA7E1wDcWH29J8kYYh9vWkhfdnRiYk6SvYfRCmSwmsRVpqnt2QuKK58YzCbh",
  "key2": "5S8cL88jrgdpZWhyMQCNPokMQyqh36w1JssJqCmLrSX1RE5mv7VgxvhzcitZGXdzdVKozVQUvjZZmAY7WDio2cW1",
  "key3": "5nr7z82BpSkNZsjCnEmRAsN3dUQzEBf9rnAEXPGwZJ5ERurRefuBDLrSobjLFyLiXPmJHZhuXLgyMN7wdDEmXgwE",
  "key4": "X2ThRhR7TtFnU83UmpNV4J5Lomyis6KhXjY1uGp3Etb7ZcsTg1f6WVpNoCmsBvw2HpMMbofXu9K3V7i3ZVpEuVD",
  "key5": "3KNRteEmxiAT249FhbjLE6UxYQe5mx2Gf5YxuEB9AubSk7iTmJ7GhkAcFHqxHyth7qht7SdNjNkbwiJnXMnMX5DS",
  "key6": "2cCg2zVouAzQWKNZCjz8bYPSgJiJaSsWFqvUeeH6Q7F4APZFe3y7ySTE4XmkG6EztqiFfsbpBJStRZDYsVRLP4hK",
  "key7": "4zxxTVioi9z7Wtu3nWfm8mntptiThQFS4VXYakvAvFaUcNQhM1reoTrLmXzLdr79nTGCHmizQsk4nU3jbRgwFu4A",
  "key8": "5xzrYEoVXTZr6v2giPpLzWtcTMtkD87Dxzx9vZGaXRuqcbEoEnCzFZZiQHzt1W2cWFCGfSHtoXJbbRagxYwLNtrF",
  "key9": "3ZQ9ZZxAQPaXen2ZY9GqdGCpMESsUgX81PFYdNZqGNCbpTyN2khA1L1q3VcTDwHGa7gvoeNU7vqc9iwB9cVk57s2",
  "key10": "2CkCAfYJw9kwkUpp85p9AfjgiaeBPD7EvxdG4v36wgEvxmcoAqSkV8YqdapDmo9WeQj68BMcu36Qv9Dvjdm2o8mM",
  "key11": "51hfrDzXjEYANzU3GnMM5TzK2QHTDfUXb6pd67u98dejtmXUpWUi8xFySiS2rE163dwHYVFapgiBgQUdRfomdSUN",
  "key12": "52FMmVwCSAzj1KaGCvvTqwVfbJZ3pQY9gSVaaWzbPDxAmvjNxQ4BzzKkkHEaTUmEkrBxpFednLW1SR1YoSM1oQv5",
  "key13": "57vV2SBhtyxsshnfynpX5Ss8QXYxLM5h2oGhsBSngHzQeFyxjc5XuvL8JojmdZvBN5yXMNcdGHJc8YBW5VxJ4Emy",
  "key14": "4Phk2CLn1wSLH6Xhp2a6yydjM4pegfJRsax6KxSG89fWo7XmmEV8emzozVE2yYR8m4iij9tXYeU5cAM2ejVnJqdh",
  "key15": "5DzBSnnydUyTj7woMTiP8CnuLDM2VUYWhfvEf38x578PzFcPwSb1DsVvUiJpF8uYTKNoSuJRj7zExSdS8NGemuvm",
  "key16": "MpJEgx3XaRZoDQyS8yvAHb7YvhFVrg6vyuqCmR1oEegwDxVeFyyNQQkTx4Qp2KNg8A9g1NBjUVXksg8eDNodcGH",
  "key17": "4XG8VLL9kwfSNDXqRnm6oKS2gqDWGEj7cESKr7xNhHnwyjedRG98qMRDhpftYywnzgAvS5qfQXnreUsCkdvZVzHF",
  "key18": "aEXhbmwfSintkPXVPsx1guUXuvzq7d6AqhYrobRkBEAjfUUQz8rmQwCGqBpmo859a3dikFRGzv63qrp3tR88MtE",
  "key19": "2f5fsNDYx69hpuGLtMwxJuy3Vb27LCAjE7tpVXGgtfjwbuRjhqbDYtvmeAGJddvz1HnwYHK4iAa2BoQLwSph7gdq",
  "key20": "nLVsE9mhxsEiXNXE6FFBsWBNwTagCJopAzVTfnHeSyenhgHqGn2PFGVskFjvW9Y95ZPq2RYjPgWriczRXtRu2Wi",
  "key21": "V6et4TRforsvBL8sVKRKtzpgR3z3GapxKGRFhQbpfhTyh8NgrGFWD98GwoLB7zVbsbf8nPNdWEJwfQWXUyBE1U9",
  "key22": "QyFNYKGTnaxqb6ELTthe3W2GDUTVQQYjR3Y6TsVpUJm6Qpa81hEXZpB23ZHJnoPX7NbBxvbYwbHgdoJs4P3sSxj",
  "key23": "4eEpKTaZZauRGH7rs4XuQXZqGwQqQbPCF4UHKfoZB3uiXcfEoHeQsMPopL46ajAGFkWBE4uEWh15Ldf5P3Lwsy3X",
  "key24": "31bV5SWgbXfHw6sTPiiPk15KdX5KAsTfLW7asquXYqL7kbZa7h1vWmh7z2rKGu5ys2gLnmhEXLkRtZRaTfoWyjyD",
  "key25": "48aMfgP792MqsPdNhFtABVEDXTMo8gxvPeiCzJkJC8fuVsqVdktapuHsygA6XoeFbKmP9R4qofAmao9hYr7ohdVZ",
  "key26": "2BwMC2RM1udKig2t86R5SL9JSFd1kirGi4c8BvKAxFEMfoHv7jcNziqMUbYkvp8bYbhcwpLVA1EovYSWusiK3Waw",
  "key27": "25PV84giW6UvmLf1qeyEMrGxpayTvMaLUxQzGTpHyFeABjKaNHSVEWyqBsD1vuhuXXHmsM5kLgMPCiFXXszfwuug",
  "key28": "da4dnU7Swh42UCasGMCwbzdGCXbsEqRpnZSTkeAifXNtPfsT5kC3Z2kNz3GV9piJnu8aSwmhcsmTbghrau77cDT",
  "key29": "2942yE9zYWf3dWgifsfc2sVrdvkxc3tpGkDbqFxMuVq6kPQXHx83GBeM6dxmu9JyB6CD5rES7r9gKhFCwYUMy4Yf",
  "key30": "rCeHYH7RXjXuNvgVkaFsfT9oHyBtMoLifh2yxAQTiAwnzDjoHNRwxcoPcqGLvgtU6CNgCmoZuYReptb4tbG1U5i",
  "key31": "26exoGz7Kq6NoQag4WZed96n72KgNTk35ysWvkxjfZTyT9VaauGsNtS5gFWq75ouD9Y3jaqJKS9YiwGbY7QqnjEL",
  "key32": "2mY3EKscfDg3XWfQy8cVajeTnfYAzdFwXdgrjWEtZ4sRXPJpbqT1uqQ8TshxWRmAhZKqMnpUgPH54M6Eo3uTBj9o",
  "key33": "2irDfoci7WQdux87NxnQJCy4AcHxwQ2oENKyFB2Sy45HHMZCZodxLiTipktgLEiJ4ExmR42GPjap5eCGhAUC4TVx"
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
