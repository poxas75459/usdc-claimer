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
    "5cqkvUWZNmbb8R8xYrdeJdwoEkZRFzzJAw9GeaXCDJKciEDEFdeHs73dP7e7kMtTY8kPGUud16W7SjdJd58rczCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbJimZrYqN3q1qX4aoo7eG82ESGfKthQXfTQkrUPEEw5S9cEm94E2j7o19XyPYFJ6mXJsk1pgYp8mE6QFzorr1m",
  "key1": "4ZBR9mtFWPL3aG8jvd1Y3UzCBbKePXq3gYWFmCjRCAozpNceuG1HR65Jw9obaa9h7vsp3KzkdFFr1LUpVPiZhcGB",
  "key2": "2oMwwh7DYhenepRo7XbUSpq4ADBV3JcTK1h7JWybVBYMBeb3R4nwXWC5w79gR2f6E5k4F7yXzL34RHc7dxnBjcvV",
  "key3": "pJPR6ckuvqFKNXLxc1oZaCre83i65jtnBGQewNtgx1vQEX3d8P2f9w9SQyLpwsQ6XpQSqanbiRVujH7Fguf6jY2",
  "key4": "4aqGvr3iYKaogNyxMTu8JRaBTgqSFBU62iTNJUMTK9okHWN1hakCQJA7KpbLUMz4hSQKiBisEccwerNxXmzEuugk",
  "key5": "5evfChoUC6JTrHFSZL9KB5ZUJG6KHdStrmb2SfKRyu95zensTaNaXScydXx53i9VKhin4vGHjhzGjwPftM68w3ri",
  "key6": "bJ2dkJGfMMeNQfbZnKgQvswsvfdZNjzyycuVWBr6umY3KH3NpVego51F7Bf2xEqMmxo43zLsdBMDjNkUfV4ARrk",
  "key7": "4ySz6w3UrcFTfkHXQkKEQXwfSueus1Yrwctr959KmfvVGaRmETgijzSuuQshoQ2KDoFXnBNm8UsoptnQrBrr9J9c",
  "key8": "3XVRtmRuf3vDVHLa9XQn6fP94tRd9TarKqTHrXiM4nKPvrrD7B7iVT9RzPBY7w5kmPLVGt7raE6xPvf8jiZHYjQX",
  "key9": "3BJfj5RFEZvZ7fi2pVdhiMcNJsZHG19GmaTCv8Qyj7Bf5E7qgC4EJhEDX8arCj7tKo2QQSDrk7scRpWPCTbxq8Jj",
  "key10": "4QC8RHj6VftMkkRbMGsHxRs8Ys3eBya4MbuWgZBKa4XGap6an6k3DH1qW5TsWnyeehUviUVfEjrPvcUQViBbvyLP",
  "key11": "2Um6EMfpjhNB9qeR4bKZSCNbNZpKQnVJVTo1aVpcaTS23zEvJMPtgBqNptruky78Bk8cWL9zK1mWUVDEbrTJzQqS",
  "key12": "5A6Mh7XTP6d9Y129hevKYw9vNWnEVg1EBfn4o4BKVjfEFeHpv1QguhnNZRXZVzT2G4RwMB4kFSRkFwYEop9GjLLb",
  "key13": "YatLFbe8FgFXcT4Yv3bcphPxzm5jQwNp1o3JuLCK8AKC5L2ow64jBQFjjMcSRsZrEK3FUeiKfyRCwYNUrGavDwV",
  "key14": "J1RRqEbvpn4JsYtMek38DNhzNcjSQLhJCJgk2MowxqKzrtykpLqpHU17ag3jzdXpBfAGbojWnWshcosUxVbrGAp",
  "key15": "2wmFaCoLLMhQiMKWx9DnAA1RtAcbuKvB1FPAqe1AMNWxuzGMHtk1htYgZEaWDzbWWyBtfi5wD6mG1hTC54GJsYHs",
  "key16": "582eNijPk9yvu4WcRJjDmK8aqvVckrPT6Z1E22uCzyERqr1qbtDpqcjV2z2BWZnL4sqsqo5GqNgRYdZUV8WeE76s",
  "key17": "5cHfDxaJDxmdP3PXaWhRiZ3VzJ4UzgLS2S7TG2tbuJvffQX4QmTYTgqhQJ3ZRXPCrnTD72DKAxymYw8WQu2rT2CP",
  "key18": "5ot7osPdZPSmVQU42cNN1YvYhMgJjQR9VbjRPUtSAuPJsbjab8JFthAL8DPSWCCPVijgU12vyKZcfcEuqrYQaCQy",
  "key19": "5BVTHLMmQ3KPyCNTiVwi1vspLCvJhqVzkBu6Bk4teTtahDLAHTzVHgmi2xwsRQXpEsdzamqyZR8AR96eCdySEN2H",
  "key20": "4GWmbPRX8MrnqLYNjZEJZgdTbYne4dSjRoy1n1yzMcEntpK2w6QyMTPKNz51RqYmBYyJDMZouCekaV6kTr5ZMLZC",
  "key21": "4ZummsXAGkZ4nXDDyEjUdrCzVYbXsNQHN5naWtaYf7f8BobMszzZycoEXhADEgAuHwyjbqvk4szx3q2yRe7teppq",
  "key22": "21zQpKVA6xarqPMi1suxkUCn2okby2uCRDLXio8jA3VpAEDz3yhGKvddHbTr3YDiJtk7tywEpawrvdRH8i33tGiV",
  "key23": "3DPVMHq2CrQqQ5RW3dZd2CTuyjBWXnV7qagVhvzvDutqAaLv9rdfnXbxfv693CFb9HQXbzLuTk1P4R1jbhrhLkkS",
  "key24": "5ipsB5AyxH8YjghU2xWG26CMW5h9T8dnJdwtkabv7LYHMHgFmLkJVfnuURwk587uBfRT8dm96Q9JBeJF4626jwcM",
  "key25": "QVcqrF6PrsSM52CE5Zg5DWZtDeVMPLd1hhCFdctpGNmksajT8zUsHwy1du8ieoLVDW5abRdrusY9DcnumU4NQx6",
  "key26": "4B36MFc2Rocyz3cbYrAHcRXs4YiZD3KbqpdXmZjNptqDZvmCj7v7mF7CcaLrA1HtBNjRE8SKNJbUPFddKow5Jt5i",
  "key27": "5TtXGXTD8MNtU74mZ2CQcbu15BeK9GeYNrBR9rqSnzvYCyNfPyukfv1e598PUF1uuACniWrwZBdDjEqLANcsVE8T",
  "key28": "X17oqpkSDzjVdgtKXrr1Hqm4DJsYRJwQSRN1DchBriyuNE7uMiiuLFNTiSVbarRc33kgfMPcVr1669jdtWWg2HY",
  "key29": "4ZKDhyF3rXgqkRiRLT6U7XPPwMZZzw2o7jvnC3yjrfm2AfTSSj8RhR8YV7Ae3NwrTyyk7TFtX3GC9HD6Mu2qQ6Ch",
  "key30": "2h6faX2BMPrqdUJS63XrR22gRVvp7q6pRdw5osvPTPELuEHHVETYze28nW93LTTEvEP4QxZ7YkYsp3gNXhXvziGA",
  "key31": "2ybWN8SnA7uV9iLzuiR1Ru5dBXJrkUbVVE6XfSrHkRrPVinXM6oSnuPgorQg6vngFq7q2AS7xe8rAtPe6ib2BCp6",
  "key32": "2kawYvo8txKFG8H8tZQDFycbwGmZqxG1tJcpmGMqDf69ECaB9E8dqaZCtEXQ2bV5PDx95cEAZVGYzgF1EBcryNRW",
  "key33": "59fehmoj5yzrwe8xwQUggTHTryYRHRfPJJoPY9H1GVcrayEndGcPyKPgWysKJLd7p7VnEwUATqZZCUjMKFdHSRrU",
  "key34": "38SBGp5sZJjDBWtkjaf3U24WB4b3kL2HNMn5jd3qeqL899ZBa2ddkxvqccv2HVPAGvNm25TvfFR72JjL5KxpzkNu",
  "key35": "5G8qcyrpPfqXr4aYyX9iqSkoDyvRiFs51mZbMg9YtbetFcfK457pX4fJEcdZ12nPUwcYSJyFHcT5mgU6d2VMmtp6"
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
