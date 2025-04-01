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
    "3Z9HS4xFcUv9qryMyGG1r7bMNCug6DuqMKDJ8GJPXTeby3Eq4NZcqCELqgkp39jYJjhEhRM9DUdQWWCdP5AkQx2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYRpgwLYxWY5DNUgrtbAJrgeGpZCrVQnzxY5wVrS55JUtCjkRo895Mi55WgpitJBrCKszoRqDSKpDMm9vd2KXoj",
  "key1": "5YmgVsPnv6w5e4RaMMftKoxXqyWseBtr6bBbVZeGXrrogKDKxpD1N8Cm7hjvZcvt62fJcZUjsZwQfotm6Zamkftr",
  "key2": "3HTeWqiVKAL7TQkXbLPMnAdM5XaFM8VZarZD3dvjauak7UKUymwLxqjXQisqvezg59u5eZXnv3UH7nPu46a2345A",
  "key3": "5VqQzBmWXRsJ6TAQhJ8NdCd9GtEWxZ7EKH1WA57ayG65TazjCPofjbcAsYvF9MxT2dVcCXTdRi3TT4TQg8PHB2HW",
  "key4": "4k8HzgM79rufmYhZ87tCds15BSANASSuf1Y8ARBYfrJJKGHXUnzpq3ipH9kyL6JHCEsTLM14EW5Cz45HGwsdUmhk",
  "key5": "5V4DFNP47x4pyPhRnX6d25LqVrUXY4Udym18nbo9kaxhUvsMuiD2e4L6qTyjWQHsCHJ543qhtyf4w2JQWjsNo8Af",
  "key6": "4voqQXnSV28TAFuX75Ff1qd4kAPkjWrX5CJT3jpPcAGJ1NNP9BXzuLobLg5gW5PVet67uztoPob1rN5PPYiEDDGc",
  "key7": "2n4CH1LYPAJvVBAaKo7H3PmyGZWPEpj12GQFdrCVzZtxVbnCMsCVGnSRHGxi5UY1x88Cen5kAN3gAdkiLi4fxitA",
  "key8": "4qJu4ffCka7CUwHqZnCjsDJTeNvFPb4oDiD6VGZ4SiWPentbs4vSbLHMdPpQWExPP7kVVrpqbMoqv9NSWGZxLaZH",
  "key9": "3LCCxwpawKhS3D5j9CA8tNUessS5K2haRUvVMh8AANNS9vWvzpqenSPDAVujToRfmnYXEqwyDR9BLYkaSkCsdZzA",
  "key10": "3fBCnqzZLanP6Xt2Jp2MDiQM1DEBkdbwPYyYj8HvizpYvd6TV7jsTpnddhnaBFiU8FbyU1ghaywiEGKVpC1GvX6y",
  "key11": "5jY9o2vTTtVwvjK8QnFQ3zi5ovqLs4hN7fmbFFWU2TpjNN9TDUVdJb269MLTDyPX8S6m9r1e7pWALZmiYhtBhHqy",
  "key12": "58dED82kVG6rL6bRZWH3LPuYXLeXua7VeYzTpdhK4BxqA6xuMRbdbR2sAEz3DuSiyfwa13rJM5nMnA5xtGitStiG",
  "key13": "2vEPPNfBtB119sFuSgmVN9a4aY6NtxoMgqay34BLsLW6q12J8smw31zA57G6dusoxHszYjy7WnShLQwLPawbixpW",
  "key14": "c4NWwpuwNMTNaXDnz1Hn6ZBa2vjD2od28Bcnk3x8cBSMYnt33SQvePXgHtiYPtjri7vMAVVdC3DcGK5xggH8tnj",
  "key15": "3HtWgmZsPxTF7QNtw5ihgUdYVRZAeKvmBsFwwtCBaJTadDNQn9rEjFtnLNSU8TCXyEWcHFzc7UHGVSHfRrBzq1Wi",
  "key16": "5e6djL35R6zjQXSoQrUcLHjFJrWN3NTstYB5ThepUqeZGv2rPKvgLA2EZ9tnfuDriDny52h5NFywWfTexjhQGutD",
  "key17": "4mtb5Hx8wZWh5e822bLxETo4HFtyd9Vcth28PWvzmyRD8BUjSGPDe1dKspgqkqLV7qkvm1fnvYveQvck3CQH5GC6",
  "key18": "2kdf139uWBy4j9DXyHjiVeDbQLyZrVJCtwbfTBWkoPLYXHGhimz3wFAr6pvAb3QdR3r9ri5MTPq8SzVJiQuwU7h4",
  "key19": "5fFmv8uiZJESbH2SSBmtPT7w2wnGHmxUq4No6uWU4erPNdefjnmfFuQ1gM2WxFAYqwkrthYxtXdnrSeUr6tQM7bp",
  "key20": "4zeNAzkMS6ayLcnhyrp5m8FtXHFACXyLoFTd15ALE1WA68vdtMdi6X126otSr9qwUHfjTNQEK9ojJPECqmQQFs6P",
  "key21": "5KeCFSLAMhGqLCJsXjSt8wsmRfKLn9DJSX13yVuQHZGNuH69VnQGjFd7kCQuNqKdSmGULVMLBUnv7WwYkCf43QRK",
  "key22": "31RmgjmGemYuUGX67meFJ3YfvSBKYNirU1PcWtyV6rbGhVHfcUsU7N6ymWHjQ25bfn1SNdKYdK6yz4tTBxK76XVV",
  "key23": "4PD8aEHCN2wjiB3WVrdms2TRx5b3tpYxXcQNJigvpqJtMoe3SXrnAPYKazFKBGrs1LUJQ5oGGJZyWQSt5oEy42t6",
  "key24": "5ndhhMXG3EUXYt3PMkdedRNGWrtD82ZxiasiCYuF6W4pkL7y66yvuwTN11EgPW71kvdweNpUhT7TmHB3CNKr64Pr",
  "key25": "4eBnqRaupw3aG7sDGBiDMR9AxbbnPdpbMpGCcGbsQVVjorvYUMfrQwmqS2PwbAMQLbRGVhSWJLuNQNgA3j6Hbyda",
  "key26": "4fuYNXeASdrBZp8LKAy2hHjGa3W9ge8uH6LDVozmE8kZNJBiadBUVz86yAc6SjPTDAS4joduEueu4CiyaneDkGyS",
  "key27": "5jF9qH23RA5xthGa4tTLcWLDNpTnH4snZge6bcQLNr2EfBndqXKa3ad6AMrJirL2Q97RHKXeftMhZdSyP9qmCaLR",
  "key28": "AoCqn1aLhHKpDDUezaCFZkg9hPETEvQWnRKKvp8vCtWw7ANbrBTxXaQcWdQkyknC4A39BKQ8paqz8YKmdqvWSb1",
  "key29": "4zwqXN2nD8E2RLCqWGoX4MSNB4GgvhoPPnthVw4n58D1Y62hX2JZ5CXFWdwCLJmjDeXgPG1DZt2k93R8dSVLe2DF",
  "key30": "4dmjXZ3smxdLrUyDTVZRQauqxYfZCxamn6Edx7KNKfwCSMGv9sAz3yVvEmWpW5HWheERb17kHgLit3oyt7bkBgSc",
  "key31": "4J32R8yL35aQSEqWssVS7rGPnYHe9UNayNzDXMgq6V4fP7mEpSxReGSEMPEDfJ4283eRWDuqLDoNWhyp5QFMhH4e",
  "key32": "tFZyNjk9dtmWZ8E3XKAn9diiHWNXrRqvycdiTKdYANApRyNJqCCe4EccVSSREZihwCSTjAQNuJMLNBK1FuE9QeT",
  "key33": "Hpk3rz6zxjHHMZXUgsyuDYb8WEG1PNgWj3NSwq6utLG2XCrKKjgrbc37Zby9rsUB6a8pxyAP1C33QEro3HfvTUo",
  "key34": "434h719UKiaGyDC7aHLNhoMEJ4aKvd7PNpwbPbfC2CFsV3ucCBN6DQL2XuwVvJgSi9HRUebv38YvTeWDLuVcsgaD",
  "key35": "HZJNvJFnrQMre6bfCQ5cUNmqh9Prap2GTgNKEuBHu955A7T6i2TFA7q1BJZBbwxG5kSkcZqWdYSsHJrSaEqSf6Z",
  "key36": "38tX7NN67K4oWuWJqnzcoiqsTAdSr2cRK91tUsSZtcKYajSxeGyZyGYrCagHtF91t2TZ1vTP5uo1w4WFNNWPYGV8",
  "key37": "2kWTp5SA3hxpUWqEQhuYcyTaqn3QkJbpzVDezUMbZi4g1nS3Go8cmeNVVuUBhJwu2ghh9oDUbuk2ucfYMCXtJmZ1",
  "key38": "3Mn92HpDAha3HJX1RbCXjkW18kczC11hbjwpTPLZLttLfdFQzBdBzLN4xk3wXoD4JqSCiySNJA65L9tkT1fgjHd2",
  "key39": "4hF3tGzFohgv4W2JVYo84ge7oGGByvnEPF5Ysdy2UNXmyvpt1Gk4zQwAKSmi8eQ1aDQBZAQDXQRNvNUoy7LLt9wS",
  "key40": "LjiAqnBkX44jFkLGxSxxKKnXq674EC2avmEeVjcVsjqNGpfjbVqYLRbLKn8CUrsksDxVfkv3c1n1U4Q474zVvxH",
  "key41": "2pQqDPtwWSij5Z2mF1Uwo3Un4Jp1pzQKrmuKT2CDAzNs3ikJF2dWzT3zbGCrh97nFY2nrP1ywvUh3LUxMZUYuCNP",
  "key42": "3wjAFmEaGyCADeYpCQvwnAX4GU6gNyBH9RBYi5UTZYweNKbayb7qPBJhTw7yYpLP35xZDDdA4nHDVUpK45yT1PDb",
  "key43": "4on3V86irCjzxqUAeEZc3KGHUYbrVvKetxLYreuZb5fwiNiwjMXoJAxo8H42YnKGbQvMbxnFBV4amZPgtDq94qk4",
  "key44": "4rp2gv5HzJpNc25SgJh87ArdVWtKnVwrXsQpoDKTyNBmiwzBtfDvZQ1rX2svHBHdBGStnsPEFnxvxbjeZLRuoonE",
  "key45": "4X3SmPzvwCPxqERLXB7WAthKw42YXVhj5S6nvTHmPSnSLTDBzJXNXSgD81b8ocSz7CnAVsMn6pdxp4PE5kgS9rYP",
  "key46": "2uF5DacKxgL6hiByvBLpxZR4KYpTKYQ7tPdhMkYzcg1Q9dSXptGhbNHrffrwfyk81XfHbj9mb2TTqEhkLaEJXUX6",
  "key47": "34SBZPogj4Yq14hMVmqQe49yTf9LLVLsznVB7oQaaHAmbCDw3FUG3LeuFeDRVkDhuRn56fJyfethxaYaP67QvQyY",
  "key48": "26zifdw6CssEUKBNJwCqXNAMVVTeSc35zzjaPmMqJTG1v6NWUE12KMueUZvLVKhHXJzuD8QYVFZEdj4hoS2rMBq2"
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
