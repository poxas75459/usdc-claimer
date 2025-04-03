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
    "5xRSGGyJiNwbT6gdB3VTBSrDvjXaN3m1oYubptKDRyBw4dzpbEQCnaPNdmUAuzHVwfEdxr7psChL8W6c9Sp1UueK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFtKWH7DrEkuFLJSW8pxcFnjMFUC3yGtTj8KFykez3VavzFLYcgPzyfchqkDp1hSGBsoZyVsZbALvNkQHbdHLyZ",
  "key1": "2SHSSyfhHcghmj6Jkv35EdQDNByJLX4hak3qwh8XgYWVJFHtrs6EnpfQJ1diyT3v8s7wtkJfn5pWb1PoGJkY5gW9",
  "key2": "5hAb7dGXDZtuSvpS2BfUqjvNBFbmDFXYqTYF1A88gdMZ13nRCTGnT7HSHabML8jaHr7BdyckrD4ETomWpXGPRMvP",
  "key3": "2KYdsUU6Ag3WyymX2AU7GyT6zpHW9NWBZMe4G4iUx9FV9kSvkU3kZcT5CHFoMqP2LPhFNHbBkPTsxcsS2rRNRruq",
  "key4": "5E62heSFcopm7s6EVihiMMRtPJEvp7Y2xpZE2k64DMQVLCUMZuBDmyLHXtiiWc2QWwzotPyGoyS4fNUcTb38jdgw",
  "key5": "2W9t6qdSxsZDFe8yPzp3omccF38NLWR2YsYhMLxnQwNhmN6PxU41ujLqKVEYtq3HGAH57mrvfwHUUNNzNr4CQ7z7",
  "key6": "2fytEvrLuDxdpHRwYr8ts75eBoXL5P5DXXXaNHQ1Zp8RJ4dS4yW89q2efe83RMc2je51N3QdmvE24dLQQRczeAfX",
  "key7": "2XmZFBm1LwfXr9MUsUzA7akgjUBm55zF69HMHnSaGkEfpnENj9xiGSBpMmpVQViyLGDzUfxVcyvAcBqubKce76gv",
  "key8": "4XPGEa3899pq2uLF34iA7Q9fhRgjc25Tjt1rjk9ocAf9oFC8eBWjg89TpQ72LHSebusT8hfxKc5EaR1X2fWeV8yX",
  "key9": "3RCqKcYimtLGA2sb8hEXDWyPBFEuVCyWoC93dos9KbXj8LFwCERqsBRZDzAnYS8ZkXF1tBV2hcXV5zJKsWZMbzQa",
  "key10": "2vYiTf1aK5junskMFLBJKWWh4SohpASnzWJtgzDQfRg9haGoi7XYfzJ515q6xqaAtDYmyDhanoeu3hKpvqc1fGPg",
  "key11": "2tsQy6Yw7sniMED5tUu8hS4gGuvv9qwGiBW4QogaFbveFZ7vky95NDzZGLVB5js52ECvgmUf4ppJteQqmU6X89HX",
  "key12": "3RLqzz84iFQJQNSRmsaxw3gyVetWbsTT3hwnKLaCyQRequKLGiP7M1H1G7m5tfN9i1NAuxe1xaLGNhFp8AgRvDLm",
  "key13": "2PJfCMQTeq7vvcuXDPsWkGrtXsJG6X3PSRsHMQ1VWZkUZYog3VttPpbX8CHgYtcdeRPSd3Kr28QuMmAgSPgvktzE",
  "key14": "4h6wQaMXLLSV4VeDX4SsjWKtM9f4LMro3ppaXRJrko1rXKgbd7umGXgeiCTVrwRRvXRRkQcjkPYSG7ktWBFQYS5V",
  "key15": "RJDHpTw9NhRjgTGEpR5RFU2DG6FqPkR8Q23SqmndkhwJGyZStGQLFPSE172dQjsjrVvHw43gNMXy42VPVTqFsrD",
  "key16": "2EJRiKHqUYXyrrt5pj7LfW2SMpLbXAid2NdgksZmcbySk5x7z4mSBgarvjHHTj7eKV9J7nmCsEDL97gCwzfRDUFi",
  "key17": "2CXRkxw6tYcWd8B7BiL6NFPYixy6upM8A8PNaGXMzdtQayj81ZR6QwCyzxuZMiDiDd1eepngQEn1YnY6x8TdZh4R",
  "key18": "2tMUipiEvuEcQMXASKDfbQTcrqBnDHBvkL8S84coikhLZsDprkDEMoRwLs7uMH8Fiwxpo7pnqyjCdmTwWqoVHVk5",
  "key19": "3VYwoPcdBXYqpPZr2hfnF6U8FkCRyJSxHcaAAa9WkHnYQGmvF7KE7znBpBXVcXdqC6o2h4GpiDVSshNZynbTqqLQ",
  "key20": "3oDSveQRVnG7C9jhDRPqeNaVYqmoiHW3Y7jF43bLSHZgNrbCyLGgMEvEWJCn3xSJnjGphAbZG6g8nXPEgAsBEbTj",
  "key21": "a4uSbdKQEiTMuE9BTJmnMmq31oUqiwNbegZLdct26z4sEGjw2WKd8yhtBCNvrUQC7X5X8DVgADS1JpnrSTQPcCt",
  "key22": "2AaGakebBdfGaBsJew3TXQUAzibgfoFmgus5DCtdwj5em2QbyRBVSk7xQx2SacfjhqGfM68wmC7pdK7C3wZVqh8g",
  "key23": "55qUJzMYV9wfctU4yx2aNR4eBFVH1kx4SNPjDRv4tpsVeQdej8eaCywgsjfBBm9AXwy7UWVn3SVqMN6efeVmR9ND",
  "key24": "3bLx3eMGSLV65Ndkz1qkqaxqsTLqT4YV5tfS3PgJbkHXtuyjAKeuDaM7WqWYmLFbasjngTzBNxwEYC8Q1XnvhjPm",
  "key25": "BVkdeSYWWQGAqoqMQWo4WTgXNN28GWfhwMefnmsgBnFihWauJjL9qAPTeRTUF1BsKWmR7Hmo2CTWmo7eReqpX99",
  "key26": "3oGREWoG4C8Kejo7TjzFSZfsgTyeQMuYXskeWVUh6K34TsMVx6FAorKPVCH32sMxbSDZ4TB1DoWKCffCgTFz7rLS",
  "key27": "3yngQqQeR8SqNUnVvPLN94nvEwWS6Eht54sZhgCtkWX8YovWn611jmcFeEJR11729ZhTgDBTZSHKESLcYrMsD27r",
  "key28": "4JErRH4eZxEdvxGTZa53Y5bDpoa3h1Vj4hxpEarUYGoUx74sd27bvx2h3HVeGg1pgb48EXer7z58W2c1CrpL7EVp",
  "key29": "4R2prxuhCEiTEGdBKWV17Ghsov2YX2KiJYjQA46ZFUASgaiJwtuU3NL7gqyoF72CW9GmVVPoPu6XYTryMkBswmkh",
  "key30": "wnzduj1zeHmqZCk88wuKbmBCEoa3zTjCHLQoNE2XXxuBhLDLZkKpfesp82zgXbquov1M6CVrSqJLxsidELT1KMx",
  "key31": "3iTwo6mPCNuXd1w34GqHLscvS1oGVNE2xJnonDAsw1xmgBZPxqztDRQCjtKVBjQcoBw2z27jd6CzPDRMaCrkNKmF",
  "key32": "2xvpKUJxCeSmH1oXd7LmygYHXoby8Nk7p8KLBULH2ci4XoMzxTCoBksn344ButPAxW95EhwRu4JyVg5YMSanYaww",
  "key33": "64emTMx6AXzCXy17uTg2pv7E2s3dNQ2NkYjF4GVCitbpeLJWA9KHARn4FAFvy1aQfTqRzRh6UMgrmkKDn3SPMtoM"
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
