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
    "2U4cK6Jxou98XMDEfmtb1CTjiK7ymej53dWvniLqegZZbHvDjb3NDDmupmMWw3izHHxGpi3FpKFeNw4xAx9xPu7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYoB7eeBzeb1otDAfnXjzh34GiNdDsCkucc2rkPnmt4L4fqMCcQGf2TimrnqxjtVYrogECqxy876WWGnwPzmAN6",
  "key1": "vNcTQ67YwC372UAqSY4RJvbsGrWKsdEhmYfQgQfKH3ittriBsVLchsRvQxC7BMTrToqr7cXJL1pnCgLfTFG3DKM",
  "key2": "4mAPGKEcmiiEnFJYmr66So8zXNAYeXqKzQE14PevV9xLu4NzMMnc6HzkzYondzVxRHAKKDts89nL5JVJBPQTt3Au",
  "key3": "3nkPLMxfyfR2s96MWW9KEaNtmGrTJY98DvohHn9pSarJc1dvQBBR9nM1uWoVgFNmwyoNUXUd6xWztU3FCEpvpUqN",
  "key4": "4P9tdpncyrUu6ZNaK8asFB5i1MqimSUdm2jDWBUnGqFNyZirEhuWtJGbmQnym6AAguWvXmkuZR3ryGoC9GVQbKDL",
  "key5": "2qC8eyTXoeHxzYeFWCpax8nmuW92zJijp5si4oU7shyAgXKAukWMa5gxf3SdZrJg5aKa3ma3v7QwT7x5aiWJCGe6",
  "key6": "5KAaHqSBhEw2wTUNNBHq4Z8KCdyetmnBUAvKjqSxzhqkVQpxn8bVwht1ESykzRLgF1yfwT5kyLyDat6Sp8jw2EV8",
  "key7": "b1hXDr4mtQBGEXfvwiore8rHbR5WJGkmFNQ6nf2hMeWoGNRagx7ncu94XV9j4okydpj6DbnpSchGmWQoFGNjLGm",
  "key8": "5ir8KVfd3XoxMWetYKD5EsK5z6Bt3RECgXDLQC7LDmRwtt4yGjoqQkJVax6aABgPBiNUez9ZkdYrR6WPU5yYJyNz",
  "key9": "exS2BdTf6REqQ5WQAMpd7gjTtepqBkxjhRa6qy3MufapTNY8ofCp81cLTojSbJ8XD9krSH9AaAsN9GC7exHF757",
  "key10": "2SbdQoRSTTgJGwgo5imPa835H9avjRJSK8G14ZRHJpEN9Arhs515npSnFdpEaN8gFVTHTKn9GpNx8F1fs6T4nqR2",
  "key11": "21eWW7iR1mE6xivJub85bP64enL7ft6rtUcZJK89JqN7DcJ3Egjc2CnP5yXEuBJfPqTCG8v7oivKUHn9J7Un3Liz",
  "key12": "5YhKGG9NFPNoMewyLGpKWJTPaaEoqLWnt74pGr8tEAksfwQ4HVNNhp6Jh85gbyhjaALbgDwooSMkRHsZMEm22M2A",
  "key13": "3kzEMCNHan76gqkTwEWu7qQjcQ9HiKjtRdof8xyaVxVrJ9Uh378jFT9vLoz7oi4eKCeGT9Tuq4joTfjp64iw8JDk",
  "key14": "yDKvxsPk2SEnwJSK3ifW38hZBhJWCeTEyfTyS87ZnSFmk8t5NLJQWhU7JbF9XpPUMASLTDYLqVJNkMkcGHyyQxw",
  "key15": "4vpwPWBpd4GNc7at1JkRfWFULSupimtFVsntHW59varZ78YC3RiFhyrMnkRaozY9Uwe3wd9sJme3QfVBcmwqsgTS",
  "key16": "2PaD6ekicun1kfPAsEqPH1qRAQqUdfUbxt5mWkWbewuSHqs8yczwSu1wFF9ThcN3Rk4gaAXZ5dHG3cnFwsrLapE2",
  "key17": "4wBhjJ8v4WWSZq1e85825tqikvQKijfSg2tAS8Z1qNNQRL76pd9ziXpGajgFwjeGXc5VSjXAKmZVfmKZPSup8nYg",
  "key18": "UYL9JZpw7v5ZMbsXRypREmULF1aZUqPo8z6sFzafNa8iMhJGa36i77eNN18Z4aXLah6YEuDk8o4HvE2VCBxz8zR",
  "key19": "eiaqowP4iPHV8BPV8vyZBwQHD65bxvRfktxLe9FXZWu7xzk6BdGqgN9dq1AiufLEntbLF3AU7FrTa1rhuePRnaB",
  "key20": "2n8y6EGEmNS2EdQcj6a7SFqnqWyV1yYinJdZ5e9v5Y2j1GsQVi238byJ22t2vjw3AyatE1WDyZqZfiTg3wz18WGe",
  "key21": "5Ui5qb2wdTDKWcECYsL5BQ3R8ttEZmpw22awti49KjvrdoFvxC3hQZtpxUyAoBXnPLdizQsJNMnE5BTPgSqDnfxo",
  "key22": "5aeoscNYGa9kEVTzb8Q4LLe15vWmkSsZWEUgBniRcouRBBHioBLdkDhe7sTcyLDRpDxFNphs4Z1npVXZYdutwvBc",
  "key23": "5YcaajTCh4REsRzGm7f6tSfet5BUvEtb25nJNv1qCLuMjVEaE5fG3rxEpkLM6emeREKeGrNFeDGiAdDkeUCLREiu",
  "key24": "hvmLzbZWeft6qBairEBtYGnjTZW5J23oM85osuwRWKZCmLa5WDQAhszsHVtSDB4ToxKJeYNc38Hg49MqoAxaSkf",
  "key25": "2j6uef1m7taKVna3QtWVVg61AwFM2XAHqonWe1AYjyFUtxvjaELfagsjn6ihAmhZ6JhxnYZV9U7C1s8gage1vGKL",
  "key26": "3mSuiDtvZdMHVaNBDmNTrpJHLghE6jEzbdFDthq31PRyz9cKMLrqNzmCxpBZXAHWPGPjwKAow2NEoieohCJkrLrN",
  "key27": "3HvcLHKPATTbyd1w9Gz2j2JjSVdbq6FVAJotpfQSuN2zwaHx15i4CMYGKzd4p3w9WMyQmhGQopcw2MRbQZRX53T7",
  "key28": "5ofhhfNXYE6fL6MRe3uw1QvrTy1Y3Us6xXnJm4uCF6A1425KeX4BYXW2Xzerac9m8a5x7daKxdD1MHc4ziWsyaxs",
  "key29": "3Ku1XUUQCHMcqxEVVDrSaWJsUWHsqx8z3S64inHjpSAUnCegNAbVoohbn71rytCq7kHqYJfMppkmeRCNyY7JAmth",
  "key30": "8GWDTZFeAdqnNqb8FkTmmbbWH1KZwPZhZtxPVRrALR5Z2XGouL2QgAEghxGpByAY8bu1vydZa56qJSfRpN32pRo",
  "key31": "36fA9fg7ym4Tj6hymWxRU5Chk5KVXiPMtCfRLT7eu6wJHr23c9pdvAAeg2YvrUsfYUToGhAELD2iBcrJmivwQ8Am"
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
