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
    "SSGwqmzBxcatZQjYZxM4umY9DC5xgneFLXWV6t699cNHdX4nQqn4DxyZX9RpnPS3cqBbgusUXnb8qThNr3uYeik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZR4c5nXUWq1S8bFEbJfUf6cyPhiUxWyiCsCnckQUaBLKcya5kqqPnFYs4w4Pvvnw2epUZ7PKq6RkKDpbbXPuR3J",
  "key1": "4npMT4MTLGytE2MJCZAxdL4gFS6EQqPdKYvAdSKAXYRMMg12V58UnGQsKGm9fozD2kBH6B3erGUd27Bh7q8wZPFS",
  "key2": "3X9gBimXsAgmZ5fq78z5sP43U9CwpYGKhoAQx3apaCTXWmXwiGXpAaQMwN72ttDsBjGhma2LYnXGxnq2JrwGZVjt",
  "key3": "EY2opnbmh3CiC64oykiSQ54WKPYsxFVUZncSRzyQNho2z1v1T5y3Eo2DLm4qLNcm9s8kwmddz6LAGpxK5DmTfZJ",
  "key4": "5jwxu9K4SkSutJ8CDNRHTgWprtiBi7Fbt9Ka2fwQsSyZSCNPACQw2rHRH2tjPMa77dkyaPki3yJGVDJyZNbCdycm",
  "key5": "E83Hwt8DVN8VruZxy87D38gVWNNwn2LxuFqDUZbtNmZRLpD3EdZZUKUrcBvCnZLVCdH1heiHorfmDQ5JLDftG2W",
  "key6": "43TRrq6Ude7ae71zn1ZPSFyHq8ZoYYJY7zxBydppKHVyyZdPv7xAAwzSh649Fx917rYRLLPR7VTQ7DC29hLSAhrA",
  "key7": "3GMizpdV35zbrDVEcMGoj8KngJG8FJ6xEF1E2cAU6dtVm27MN7xsi6FiFr2Kqi6j8TQo9mUs4aMf9KYC8T8LPvGe",
  "key8": "61hZyZ4cSyTdBMaM1YV55FYKEtvKNPCHDw4W8GMwz3BXE5W6vg6LfKFNsocEgFrgL4tey9Umezrz9iHGQ1RT66iF",
  "key9": "2BCxu4u3nbCqJPFLDZWnZrJZ7WmQsXWeCAEyqbFVfqA9QBMPyaLdZcMjVC6QogosSm2pYLRsdYAzGkX1tpGAgSH2",
  "key10": "5sAPxnfCKFniqVp4ZKtLM8wXPei1X1SSaxS2C7CVPqW6P17PFCapW9N8gudVrKkKH4dPmNsNCBc787wkbATEjPCu",
  "key11": "3bibXqGZQ3KhAHjxTkecuhxFWpjk1Z29o98nnouq6c6dW8xMw2pj1Go3XSsqn64pZdckstmxGRHZGZkn7BNw1ieT",
  "key12": "4RAJfxKEuAwucEawPrKDUmoMtSwxgYNRwRrz8YwCbKGSjLqAyS9eg7y9bVRFdSBLJZJYTRNwzrBwnzHBt4CRvAA8",
  "key13": "4HUabHEBviT7SUPaprxmRUGAsw3ofqne8XARoWwp2WjMjFZRanR7NmmHgRGHqihSLCPvfYmgqYiwQgRshsMynqvx",
  "key14": "5T3Tra15LNmK2zRYknZfxQd3f2Tr1bPuHtE9DtbdJd5svcDb9H9SGhBdjv7edjSQRLgoHGN5puShCqjGfWMzz7DQ",
  "key15": "2APsGyXVE2drPUBHcqDZDFaNgS4xAFmnvj6WYTPx1EQozVpMLvSyfPaThP5JPfE9QgjHxnCwqTvoE5dt9rcKXgU5",
  "key16": "2R1EVzKH6m9n6xusYfUNCyEX5Br5qbArXn9dJxiKvS2RsBSww4TkX16wyPx97VhtHP3xUuLWiUWi3tDQ3ttLaWQd",
  "key17": "GGAigCSMgPwx3jHWwHeSuk4ArUXdjN8FUB9eLfULS4Wo3Duq89izDJyLTTGsNCNq1amiAZzNRPF29Kxt7Upeikt",
  "key18": "2F4iBri2MwtPpJiBXoah3gL5CHEPcMbBJxzQzvvjc6NFxzXccDau9HbJV8c2CeCxHUc5Z8A8Ektw8cz3tNt3xzo5",
  "key19": "63fv82HwHWjDUgLnyKoQof17H7u9V1NDJLJie1vruSWo26VAD6wG8Di7wD2FY4aTuwU9ezYEaPxu5VbkzwRk2Ls7",
  "key20": "47NeariKn7VRsaft1nAcGXqz5sSubu1b1jup3JtmgVB5C9xLtNmHPLFcBd3BNfc9nBf2Jc4sXrQjF1LHydXj4BSG",
  "key21": "5q6RfMvf9H4nu6a7VuaVJ5JBRTFxqqijLY3EbNGbxGdjwdUejgdncYXHeKQefq1FNTdGs8YNS1NkW4J14cJsSjLX",
  "key22": "5AsF3APRsUky65f6Nb3agVF4xYsbnMkmp7WaG8TcUoc1jw8MFes7LdiVAZ1YYFcZQELhq1PiP55AT8jDfB11VcU3",
  "key23": "2V1KSnMZLr6fzEq5fFSpd4138XQieeW9kKa7yJutiTbAn8Uehxj5ospG79DUsicoxHgvEaFhqVBfYwNvcoE6GQ1p",
  "key24": "5ZDWZwAgTtEGJ1WSaVC1UVmAAFh5ptevzM94MYPzE8RFWui2pujGCFkWHkyH8wGsWC3wT4NrjWEqfQoTdK2ueAGB",
  "key25": "cLyAaiSPsWST6PZuMmh5BQ3N2DPvYzAphnNo81RpGpR8HZmECKBzMdUVrup7DiBC1dHQUZ8VdfX6WYLFUgQk6Qw",
  "key26": "M9xBBdh37J3UAD94h5hpNytaXNaD9okpbQoQHBgruK8s3TiqosSBvWFYHcTsoT4fnar3UrBqWRRDVs7ya14mBH5",
  "key27": "2oLtFeqTsFanufsPnSBPXbwtJb1C1cEPNFBTyyG8A3iLwCELNjcR2MbhBaSzLuwWivhGuDjgfChzZNf7e7t5j9mF",
  "key28": "4wE8kRmYL6Vstcqe1bfE9pw9sLSVZQzPToht65zb18MydTMeip6EzQaSMvNSp7Lhn9GXbjVNa9JVVGc7AY24j1oQ"
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
