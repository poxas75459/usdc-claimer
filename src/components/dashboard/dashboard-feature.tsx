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
    "4yH45DPieEEX3j3yrUW2UQ3tS8EZtvWJUjDe6Wrvk9WR78tmHTMEQm3pRnHrSgfoJHrDQbcDaG25JSM3a29QPva4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e3gKgNeWT8KJ6Ap49jncQsg1qJ9BLnop3ZEMcNsUpXcKSWoJxHamJdqjHPAwQaVA4J96VKprdradaxDNwv9YoFW",
  "key1": "58QJfGHDYBitFHApz1bRYo1cqzLvxYrmfDCfczzergPmiArJAEbSGb2DqZZysC6yZtL9ydyY9eZPDtqe8FtLv6cS",
  "key2": "4SvawYaPh2rMBQsd8Kf28JAiKDP185ZNP1Q334SieFtuuKughxzAz5mgXEh64hB9VQaK9ApkQC7ycWuipx5w4oPF",
  "key3": "49Fmz4E7N4KNvySbyeQazVkun5ezXPfTZbkaHTqu7unNDGtiLXCp2sQuiDST12HqM8iVqxwomNYF2xA1mQyiTEED",
  "key4": "3bssdywTcpZg8MVbati8CT8tVqiJ2kFJRSD8kD2cmBFF8c43fCJKzqc5FJ7Q7iN1G48MMQY6K7Dz4hVfhrrHahAK",
  "key5": "2sZi3sSRtsAPRUXV3qQ6MRozmvyhhLMUNNZ45V3qLYuH9fF1kUawtiwmFFwhcpfYP2689yttmFn8gEx7n2WSvhMU",
  "key6": "3Yk6kihZq6V3icuyg3VJJuDyb4EbwHTYpVcnFm8m9rnQpmNtQHq2Tyb2xHi6Ye1y3QKR8W1hJgBSkTejY7A2qmBG",
  "key7": "WNXJXgJk4QQbjgXdpV3EMLMuueV3kHSZ5FHMCWsSNY75b2rCFHjNVLZUnHJYYDHcGDV3FEJqTgZ9B8h7icEfSJ3",
  "key8": "3erCxhjtrEyRajDGWK2sGKH2ARsg9W5wMm51CXUSxgRf2Z14ywLUmxuZrqtPwRH61TN2zNnF9ki7TufaYfBQxf42",
  "key9": "4xZxvcgHDWdoG1Rzf3eM5vGNiGWSZ5xop9siYyHwBTLm1CBcgAGy86k8yLuN1PvMnoE9gKRGX6ZzbU97gtb3Vm7P",
  "key10": "3sQ3ECMDnBTJMya4zSur8zjvprNzbipkVJyu7akY9eb7ZkJw242WBKVET6oRTFMgof48qDtz9vE3ZdQgUATe5hd5",
  "key11": "24YqFTfEQ5KBk1Q7DoVDpvzkAuGozxdhkYWZL9vDGDCD2DvNb9tn7iJqMecx1EZwRp2bHRHJzkPm3R9Qk6KPVNFm",
  "key12": "k2FngR9h6Y8tnNN9wSVMypjq4VRuRwneqECt5852jJdqkc9MUVQWBkCM3WvYiDSBKQmemH48RHE37WCJFRAEEoE",
  "key13": "4cBghcMLWMzUDdo7YFsuan3iBBSqBmwyfdvda3DrAzWTdQHyj4xq81GZgNbQp8NockrvQjYyYuBWePXj7N6YZAVc",
  "key14": "4bMm5HvuctmPbGJXQLnUS8JpGJKcYbrAZoFuXhMnWiBqExY8Zf2WsE5HBFTRGD8PjYbJgngaGNfJuZWDwgJ6Udge",
  "key15": "3cjeYtB5SQkWZzgJqVJww5XEwQQ2LmHfcza4Pi3tftgf7S7EJvD4k2hK6RZmEzkERkeGtzp5K3o1fBR45GGEpx4N",
  "key16": "5RyMkpn1znkpDUNWsvA9YucEgdUb7P5vQZ5bEQRq5CUBmtmcmTK6EP1FoDFSCyUQEnPr5BrnMVTWnmLUAgGseipG",
  "key17": "4m46Ng9UqbSweyicWdgLpPnxpWj1ZhPemWcHktpUCm6sfkGecTgzkppfjgyYETjwYw3up2AqDVdCvDnmRFphxgKU",
  "key18": "1y8L5DjcdKqamvTdarGzAK7rsDqu5nUhJirR1YupcYZn7cj5YrHAYYy3jxsDZ5pWot18WSXyFvPTWutAwqA7sxP",
  "key19": "3rwJMgpPHMZvDw2552jGcjCrFqnLjMHm662N8iDJiWRfKxFQumA73SnsosF1ajTVz2wQzpcSqPuL81hhMWJRjYZH",
  "key20": "5m5WfkRFTJkKrNSCK4pY33iEudbRX2Dx8P5zw5cMpRdNChwVbrY1XGSSzpWN6Mrj1obTaWiG8Pviep1N43uyGUip",
  "key21": "4ipKtrHnXHnNcaaciVmV7XqEg5AeWzmgs7gw5YYy6MqkKMQddMgCJvY4jSJUiGGc6KbbXP2ckEY3FqyV3N5n8zbg",
  "key22": "3bwm4aj4o3Cx6aoBb5QddYHNszr8Cv7tE6USjTeZXxX9WAsHwBvuGjG2ubdrfcqJyVNXhwec9CWeDXeaiQuks2Td",
  "key23": "4uNmT4fKQuE3VuGNHv6T9TMLCYDyXTqnxQ1RuR9vpjxNKkLCHUAHSnyp4eKcKaUYuw9ifPLPS1P9s31YtMtutN4Q",
  "key24": "22KPWW3pD5LtrV66Jcieq3reDGy5mMwHMufsMCV9aPGuojtNLVFoe3xdQcWnGYGVRthSEhPtUFmXU8TgXnAdXVop",
  "key25": "2DcN4exvHu4ZY4oLsLFN3efnjGTJ5Rd8eCN8XmTKuc11HywSKVxRQGLuRTDV4JdvwPgLCmS6LacxCTskzxBgnGar",
  "key26": "4uPT14bTQFU3i4CTi9LU3HmfzSDjnD1dbAb9gbhUi17dfAH9fcJ9JDDfxzM4eZiUz9c3hqexmSAumMS6bAWBxbNG",
  "key27": "L3TSoGUapqkNYLzCRS7AbU1BUgA3JSokUEQDQbWhzDJmmvAmztNtAnjaNzFsM9ZJxUJESMsJkFGGmkApE9YeXeC",
  "key28": "63eMUHmeKyvWYPgDENyThNgWcuE3GEttFFxqJjURVKisb74CG7arKNBo8PH2H2HxTn14MUhcPm2f7vSYDKqpCBMM",
  "key29": "2h4rabnBSfxQJTvpCqKkR9nCwZTRu1jk7DfhWNAaGsrTXUYpaFG1QwkDdpjLCHRbcgmZVcm48VzhiHSoQdQYQAhQ",
  "key30": "3CCvNtcDrjKhm5nieqfXSJabcNmcEY2xmmoGgLFJoZ1fobC1N6aGWJ8DZN1SnBaa9MPoS2AZKWPsmyzYpUspwmej",
  "key31": "3t4AMCEvVjz3ZRwH81YgLiiWUQwfEsC7Nr4Fzdf2wKU8oFuzLb3vsqq3DUnfodr99KWgDtLPffctLNvo4EFnQaNM",
  "key32": "66YNkB3JyaKiQdqcDWPZNTPuztCBC5ezTnbmr1L4KGrVXan7dadXJntphRBrSuPMykTTPFNsBWLMwJtapCWgkcSV",
  "key33": "3NV5XwNFhLNJUragbnparEkrud1moRFXWtYSQGxpZq49f7dovF5ZxortWAsumb4x5JRwAv581yjACm1eE5pHtzJ9",
  "key34": "2knVU1cWtDQr8tV1oQZ7zGgULGr3efwsFyohj8LohnRU5rw8HTT3WDTkAwMTHawJQEWmFkeKtAs9wxPFgJkaXbQU",
  "key35": "4hdPMwB4DKS8uLZTiuB18CzdZoFfnHotFGBspwdmRdf5JVZEoX4NeEAD4dtvNGfamyJiWo8nw7roSbGzJFCTGhug",
  "key36": "5YQdA8EcwWM4QKKwYAeZ9jToeyrH4ezaYy4kXe53RkLNPJc9q8oNszfyKs3gp877fppaayGosqsvahwQvsDxKTRg"
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
