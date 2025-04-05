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
    "2qpEhUgvcsjznq8izdvtfag4GJkQrfkcXHTcyGfgnzG9VvS4t1y3hphzg6CVRVtQpi45uCgM4mYq24isFY6wucUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEsHXNd7yha2bWr29YrxAXpBMBRFuBaSGVAavCCkEe3jbrkXe14io7G8ExAWGche8sRiBMEmgCAFcNnP7Q32mT7",
  "key1": "37aGhbNUjcvr5Rq6bzAg7RAwiYoQMRm3hix3iFjk9FVfH51hAiV25KDQKmenmofpBVS5CUVjSfK9456nXYPEqDBP",
  "key2": "3x76ZPwd6vw7bcyA4zpzFQq8YNDpMB6XcEWVeVVLuLMW94BgX3YXYxLgqZUBoMtNigXozZ7Pq7awkpckMSL6FRyL",
  "key3": "4osZRiq2wsaJWsNNLr5peirvQVoEe37NMBGfeEMtf83iYV4DowgrGbCWPeenjQwRYNBXeqqKDaXePH6jbu3gmRm",
  "key4": "273eiRDtiTTU9LuvLuUJ8iqSs3GDwFLSgRdW1k9hbnEcUu4iyo1W8VMcjPZ372bojxpXYqY3YW2QXZRZAmYfN2Qz",
  "key5": "3kyMaxE3aJB5VazxLLh1Z6RXMAyCWNjFL5mhyPt5Vn3Qz71YnSKMVrHDc2roVbSoTpYYbcKNxeKUEdMwqcx9Cpzs",
  "key6": "3Fq5vcX31My8GdzkszNZ3bZ3vHAY9b4wWWYrzFkGfsd8pz82KmvDfCXSN4NBqYPQvZPG2CuBoGWMqKzgYW63Ss1c",
  "key7": "25YQ7ErZ7DrqRArA7esPAVhYuxgbK1zUZtnmWpZcwELYaFQZ4qtA8HX7gUQ5niwks4ot7JbzWXgmBzoKYH3pnUmS",
  "key8": "57T4QmHu9iT3M4MAM5DFLZMjH6T3DvLGZbAQyR29ByRWtRdHLbeRbHB8hkhcXe6JNidCjz9Nd8t8GN8HwUyhMXgX",
  "key9": "6485T5GgPXdQRotmU9WH2i1N6JoFnqqoF1AJPPk2FEY2S7Lt9PSq3wkQ6t3rFMGbf7yj4ZGsS7REDYQQQ98YXR4P",
  "key10": "5pKRYuinzDRijdUsJ1yUJhTYxKKXMrqRr9Jtquwh3QjWbMJKBxNJ2by6vKmE29WpQ3hjuucP3fbz5xUkwnxZcRii",
  "key11": "1jsFeE2gJMVWa8HHm6Hp1LrFjMD7DKBiJ5tq7KRKRsyNBDsFMh7Mv3aKnWsy3CSdCfYqBLec5Bk8Ruyxp8ampud",
  "key12": "jWh6Z5GWqvxCfLiBNCjQf3JVm12rSE5EpZQaDA4R9B7dmjYtRffRRPhmGNdD1FgNLGKwpgyxQumAGuQcf1WFkUR",
  "key13": "5mGHya3YsrniMLRL63rCaC53AR3BWuYrLY8V2UoRwwhgWpiuxm2BjACoPAovEPvwsk4armKEvQJZLCp73mHiQo9f",
  "key14": "3tRb2YfCJ5xsspiNgWCvcDbpf4jDMTvJ9fbtypyDabdFsUDD7Yukki3uVN5GMNjSbDTUawgYhnBoRokAXSe5Z1iC",
  "key15": "MWHP8G8fbEzicTsYLdR7i2B386yoCXi3Cs4kN9RghYe64fhJtyhUkGJDyb7a49votGcdRLRFNhV8aGNYisdBBEE",
  "key16": "4oZhsZRAPPvzpU6vXCXbNsm1o5YghoQM9MQtrM1SkoxsvKbfSzecJApnYhteaYGUjWkEvi6vWmxFnTGJ4yjJ6Ruu",
  "key17": "2RG1DM6d4e66r51ECZDw7RkmTbELyvcE2auPTncsJRKd4pPTftXbb31SbGhYYYtTtgiEf2K8Tjm9ryeSYhZNb7hL",
  "key18": "2R2M8nQhFLiPXbq91X87UQcZFmgJrcMJ4hcS5XcC9aCvfJvnoAvqpX1TDePTKG1wH8CwvtCQZ7KvWsvdUHG464fk",
  "key19": "3Hm8pWTdo6YV4k5uBYSoTHPYggfxSe5AYBdKcqTYg5XKMkbDhdw6jHJHxNWMeK2MaLkfwXqYcx26F6SPhTzFJVhg",
  "key20": "2LbJcg3zvep64ka8xPWRyaNTAS1vgvarfAeYBeAJYksPfjxLtrdrPcSKP3NtSfeknoG88J5xfdi1wSiKNLJQbJ2r",
  "key21": "5yJU1FhoKZJ7NpFP1xTRZsPbp4GvMecyHWCuTfWANzgmzXSWmaXaoMKbz5sGUjvwSpQ3r8sPxngSLhW8U3LjK73E",
  "key22": "3ChTkYBmVdMhABQLyAARrHMhhit1yWwzCvLVt81rW4ESSKbD3P2bsJ3vjE3p1F4Z4pUpG6EwtR8Ue7Z4uAXQCRaf",
  "key23": "4Hia7TPdUqRTi4DCjczxQoG4GBXT3yNPATQ1Qj3N1RUEnEZnKrDvo4AWcpstPr15oLpbL8NscbecHraknbxyX55M",
  "key24": "rym5TdB4ww5kYNasmrMtJBxKfVFvCpmLqm1LhDSR9srPTMygbAGUU78iNPxE8o8M9HMVHGK2Mz7u5am926ZhAHP",
  "key25": "5UpG8hjNNZWHiiJ56YMAmDS8BxvHUGDZgzZ325rYtxc9qVTT5mwoxY61om9UTVZoXyaQLXwuNtGt8yht7AStfbbd",
  "key26": "2NdA1A8wWCpr3aj58sSsD7BhvHfBvLZXLCFwyYSFv6zBcfH49tPp2wJS56TVjoyRHYWrheqTyAFYLGchTSrSrgza",
  "key27": "64ZN3qf1ZZcejFLspbDAHsVR9hHeGEjMURgK7c2hgUpNPLJWGxApbU87GxQbTZjhE5fn2TRhnmfEtTQJv6LttBxe",
  "key28": "3ompy8jCj99zQyBJRUKWo7XJ6BLVgfENxtY5KHxAAgz8gnCcbRPXAJ9YM3kBLWf5xAf6Xm2ep5AE3F7R7vr1TgaB",
  "key29": "4WtxQX5bmucUscTE9Ex2QVc5zCuDxYKe1yycHfw7JsECXBGa75E8peNG6UcoMJRJSGLNLmmxuuFtaaSUdjjkWwCb",
  "key30": "3fY6ZMvrGZuv81zUA6A4XjU1q3Frbz46bk6gWLDGkFhakbchkAuByssXbBz4ezo8deUZBARG3ayjHDQE1Epus8cm"
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
