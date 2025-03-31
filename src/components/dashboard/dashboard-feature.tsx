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
    "5MwU3bhzp47HWkteFYT17YMCaUuRqvmRkKBrhTG6kiTCnAMQeMZJQ39BPoHRMd54xXfywY8buJV4YqYxDS17sRjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfFghs7TsCuqw3xzNybEKnF2do3h7u4pTWqgMuSbFf1UdSETZXgFq7sddkrioeLx798Raiwtst8txpgoWV7KMao",
  "key1": "4QRVn34Pb69yU6wALYVT1dsCz6xHNFCKHgV7Mn4BCd1rpYqA4i9G9yRswhdPxpAUhfgABh1RbDcezrDLYQdjRVoJ",
  "key2": "455M6yRBhdatR51P791FfEYfouu5pBUfvqzNU1rro1hNUM12Sa5CsEg2kKCnbBotrgqXguwskbsaox2HyUwwwxCa",
  "key3": "5MUzza2H9dKR5PHyARbQ1LY4Xn7WeZGkC9k1GSszcU63MNF2PrXpdettfmjjCgz6T2Qoe5j5jE457qW8GMK3bdvo",
  "key4": "5CdhnZhRVGQyiZEz1zwEywuxcoR5TSyvn9rgwR3geCsdw4svF3SJupbvDrSjPZHvhPZfopiS7KbqAQkPM9nK612F",
  "key5": "4t4cWbK7ZsFgXZFnZoDvonFcqata3jX7EHSuYHt4uBaJMcWmFHaySM9UNbVGonGXkrfRJodYoYZxKrh58uNkLbPs",
  "key6": "ZVmDHJqHMo7zSMqPWqtN4Na2CWBuyEgb8kh4tZdopNVQXvqfcVGgQS9sbjmt8QUT1dvb63wL5ZiuCKzMjDAPAm1",
  "key7": "4K3hdFGMAqUAJfwFkLjk1dmRfpo7XNPibm2KHyBZQkombCj5sxw485Vyv6fGR8A5bqMjtScCptw6KmbnDnHvm92Y",
  "key8": "2mXZmg9nKtPnxiSeWNmCZh59MYxuABqmqxyGaCQeamctCMWdkV14SPioL26jxpoTiiVn8xHAhPJTtmxMZ8TnHhsA",
  "key9": "5eJyAA6Lp3o8SLHV9txeUMUvv2oR9riEcFm632N9QrZBMKyXt2U3CTSoyCkDk2AzToiEdGU84LcLmcikgi9u9fC9",
  "key10": "2E8KZPaNQXXrpkpx6sRPgvAxU3FjRPrQCkfUU2ehVvx648jjji2aYyFPMM7gLUX26uBBtLd5T112hdXNRVErTETQ",
  "key11": "5eyF8QkPc18rsg9JmbkJvrU1TWVEMzJCHKNbfZ3Re76xHJwmEF3Wdjf5C9RzmHKX6A9yvVpELwesSA4P4skVyQgb",
  "key12": "5quiwCgsV78wfamaEx2X94R8QNkQgPX9D9xLJ1naDVbVa5r5j5oAGD1RcGMwBg6Qg1nNgjxicc6wfyHE9U8vqVn2",
  "key13": "2ycnBZsNgof6kPWd46PF6vjBn7rWjRNtfsfA3Eo7amMCta2KvaQMD4gpnCHaYhmvaWDykcGt6WJLEGgtYCuxrJN5",
  "key14": "2aHc9AfrNZaVmsjCJFNUMfFwLW9e6Ycm13AZEDNEddper1TUtpHybeHRwHWivFZwebkjsd3A5XzxU7YKiF9tvBTD",
  "key15": "2p2WUba4pvzf1LUhzVXQJYWHUHupgaQwJALGRjeYLHdiDvFLYJfne1BPCEKntmMj2zKWP8i9XZsdd2Xm6wd1HAfT",
  "key16": "PsXQpaUasqJaPQwT2XWCMiq4gVLFQM2F1CUKVGVPVxnUiPrqJoDYyNJUNurAsk9T92VyNrx8masVFYLy9suieWN",
  "key17": "3MCRMRhsX5qoKKdhi2mdJqHRu3er1jso4nnxRZ6hFhHW9Fij7d8opeZA4fDRTdxFVdVMR7esGWAXb9k4K4Yi3R5J",
  "key18": "3y4GtMpHj3ZM1Zj39ASYbdf7LJN2Fon8s5E8xRcbeoWYSAAb2s1xBpq3YSKRj7xPi3bcwBurLFTJoasb8PjybSwG",
  "key19": "49F9vmssp1qkiE9P3bBPqm7S45ZkKMSmAbLAr97wbDmtzXwJf2psUiewrpYCBrhT7UGvf59wms3T1gurpUbVv8Tu",
  "key20": "3kPngDcwm4YuPbbcxvCxZfUrrwMEwB4ScewYypm7tf8MEK6r1QixS6C8Z7vDqxgkWEuxjU1fiDkk2b48W4H3X9fy",
  "key21": "nhfYuYY5Ag1g5drqPQWR2mnu2hUi9q568Y5zrQUi9LpYbAoXSpaP5frkcfSQQwDU21n5VWrwMz1H4wXjQLxB9bx",
  "key22": "4HTN2FxVnbC5zLV5zUAcDF6zTwtMTf6aKwF7WvXDJikfzi1bnTHBCLzhx771g34avKssVpzGTXoNrwpxc3PppbhM",
  "key23": "w3WLXXGkgxitg3h9S3X2SAyJDWAuKgKw7FwQF77mewXeL4pyzRggvkpUvqoia1LBhChxZLizu7uuA2cqGMpZVPG",
  "key24": "66o7bqRvdaGkZPdk3L9KmAaThmWwVhUJR4mjrs1oUqZBLh7ZWFNLpAenJwCtoH1yNZJrAiuBaBa3zTDXY4snSidD",
  "key25": "4LnPCsBMMNUDtg8xLE3BQ61Vtm76i8W6aCGDjum6f62JNDexaTVRC8Sn4gfRLETmX53WFkuzGkrRq41J3M6dPgc8",
  "key26": "2vwrdczmRDXrqhvRxMVruF5bb9xYREiuAKLY86LK26K8QGVMgPQBixVc4itov38SPfEzsAzvDc14Uxa4ygNkwtbn",
  "key27": "5Yy4pbihF2YK7ukFRxQB1VMXy4GcsGPK4L8Pt7XpJyX7iWhMhsTCFx14D1YsgYP3MDJ9e8BD7pmPNhLj5mnFiCn",
  "key28": "5vicWx3tdUDD8Z5y6dXAo5Rs3r2cjj25dhRFPGAjPpH48BoRXXj6rcX5buAdmEmPSNmjz3r1asMdrV9wa6Aj4Hxb",
  "key29": "2QJV8ddv1JpPfNchjbDkyVsMNXz8eAHyqxCJnK84goEStPm2afq1SR1nXT15ky3jZGKqjM8xghQeRhRkr8xafb3D",
  "key30": "666s88GePkYdcBTFdu9tegGDcP1Nd9uUctuHCfhPmEahqmd4b6NX4wpWwiBx4sUFKwsXE5H3aUyoXPARNduSHx9R",
  "key31": "5Z1AQTeStBgGBtCmWDu7k7dZC6gQPZuL3RzoW9ZogXc98MKe5eGGZ9MUApoZLnR5mdrmWBeBsuoJKHuyc989Lem8",
  "key32": "28xZyLbXenoPnDbRNEzLGAWxDbGsEt4Et15uMsR6bgGw1PGfU7UfUxdgjQWuN8PiE4xBDR4VyQ4fiD19C6J7ovxG",
  "key33": "3ma6sJ7WNRUiGmAgQYLe6CvdfPvnPktwceDPc8qxfXnu5L5SMaSr4dtRhYoP9dBDw5EgX7mrWHQtWfh7QWe2KMNq",
  "key34": "61XTpiMW5ZSyqRNVXBp7rHMHUe4YJSAb1Ed7H29Pnx1uqMnjuJ4vjm8YqjDRRJR4USHKSsxLTWP4mJGAHjLV5Qip",
  "key35": "fdpJqqsxFuznTpHY8QLzd8Mf6UhGmB9eCRoQbPn3G6y7YtiYaVE8kCQ52DefJQnKytzkMX9TN3Eu2YaLmvsqKC5",
  "key36": "5ML2cV7KvcPYA2NnqkQKi1LMtRMc2pVtKXdCFshDpv5VsKfKYq3wfEvzdguHFyMpPqvAcbTtJWFudDcRAx8v1byH"
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
