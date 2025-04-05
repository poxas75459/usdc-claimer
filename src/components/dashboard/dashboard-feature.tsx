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
    "65QDDUDTdEAnUoptXNybxbiR8namJtihiFDGt8TpmQ75v5McLsWkD181N7QmzKNvRngvkaU4adnJFfuGZQxNfCnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5skVGWkRiCLPUPrtAAbGwQLXJiJEW5gtxpvoch9J3gtT9Ubov3FPY9zyq5yPeMLvSdmBipi79rbPMG2NLofpuUQv",
  "key1": "6cWVNgAGMoW9wRRP8VUAjokuNCVSxQc1kfDDR9JJVJApBkvyMgenj9KQpf2DaVfFMKH3SRBxDRXDDjGYTM6sdMk",
  "key2": "5encpySpXfZDNQ994AGhyNfPwtTAMWtsmWJk9ZsJtdLFSUEGG2zW4Rbaq4HVmg7piWKGz3XpbAtTog3P3hsskCmw",
  "key3": "4n3PFjtEFJwMSw14LVKtVddpvC8s15KnvyKimtyCVnmcdvaxtTGVWb8CRJFMqRh7awLjYY6V3dMJrMmy7kTXgvNK",
  "key4": "3xpLGkdaDE7ouHJtFa6YYYfCmyMG4LiiJEtf4t52xi1ELLCapybW5TdDyyJe38c7R2b1W6GtopdNBTQMfFPVMq9H",
  "key5": "23qq9FGvcG9Z4d7VFXoSH5mtgDtcn7zZ9QD1rVUGH5hVvi7181SJTpJqDGBG7Qni5F4sBq2FFxAt2PhD2ZekgNQX",
  "key6": "rVrpsmBSr7yKxbGJazEbDTRuHia5Guo3ExT6qHvQQJRqA2T7MAKnrxqne9cwsakdaqv9UXbSthNQYmmmSWnCWCr",
  "key7": "62SLe7hC4ESn91WDF1PqXbkAP8rNKo1pLfNs2YTknCH6bPZN4NGswKBDtgtw8Y7zrqdQKP5YpL755Fx7kNREmRHc",
  "key8": "5wNioW2TWp2ncVeTu5h18UCitS9uCpp1zxvU7FqKxsrjVrE6DDUgL9Edn591QAqLAmf9mcnAZXh6ddbEw3cHep7B",
  "key9": "3gPqp5J1vnfv1PC6jo6KE4ANN2W81yLEDcWpCe9bVUN4rBk6CRqaEX7fi8Enw9aafZXm2s9h7R3KH2G4ToxVhYwG",
  "key10": "5yfxrCSwzmwfvngu1XdoEFxiG6UYSFV1UAC6NUdVgzLpxgqxU82CurZ4KRVXHZYgj7bKwpFnwkDn3AYEWLxZGuEu",
  "key11": "2VTz9ibzEGfW4ADEUd9gTdS1vLZY4kuBHF1BcrtZzz5jadKNQ4KYoBRSM8gUtMU1mbkDBTxbUKGjSJneN5XipnZU",
  "key12": "65mgSu9WBWf7TVMnNVhbQpYzcn9GVHvczpjT72mjvqGSzZB2xi6qfLKkeZ9urT7H3xXKzwH1y9LGLTCew4UY7uJR",
  "key13": "tUWS5fwcZAmkKPZ4A57xMp7pRDb1rqSJpogn2crsdqvTA4gWWxQvNzFMa1UrveA7krcUva5GEbBgN1e4BZa8dVN",
  "key14": "5ovxHeUtx3jkLTeYJb7f1a6XYCHZ4Lj5UmUxhBNtcxXuezPoqU9npBhhaj4kd6oKs8cUQ2vdmbwgJchjCjvXUzSx",
  "key15": "5pBJjL91ajWg11dEPt4dDgJGDTErosFtGQ9nJUQ5yF73dQqz3RrMg1TEAraeg9XN3G6awYtUEvAjK1e4sqM616oJ",
  "key16": "3GE7HQTCfaySRnTXWB49Tghp4UmMh9eb7bSguGttz54SXngmpmcq95gighQncBNpN1nwRnt2iMK6RMVuSZ4WU1Eh",
  "key17": "Ag52SrFX3Hwi9D4VCmQD6w3kgU2PkM7MnNgDWmrGrHwCdnW4yEJYr2VwMLpyJYjtYYKN4FpotkZGdzbKqQhGb3Q",
  "key18": "6U1Qa2qkQLjNiDLwiB1dFsAqgBbyWf1kc6nQ14EHvvRDUeDST1ZMLSHGpTNEEUK1EVYdjvC3CakA7KV32XtqXgn",
  "key19": "i1VLETecCPgBcAmJgLUXSkCauLVtA1dBcwp1ybk4tAjvxb461nB7LYywtLDRVLQ7RoDq5UQVx7gEFoL142NrzWA",
  "key20": "44EoYyNCYdgf1xwp1aTW63gN7sGkoiLmzXSKuRgSSYgezD2NUzGCpJRcbpg6WxhkDCeHaAuYqbtY72XXnKF3na8c",
  "key21": "5u9azP8WuUzR3omuPgYUwoAcYvDzaKU4FZ1UQkEwhcwn4ksGiEAhyRJEjbyLgNzb6UkVCWdrZPh7KGGiHbMM6sw3",
  "key22": "2TM79UwCBr3wa8coh8oWg3WbVRGsqkWQ8jY2TjvoGeV1GRbe5vPpqc1fMZL4PJ9QTfb61gCjv7BW9KFkdk1qFeZY",
  "key23": "66MhJedGJnVgQfnhQutBqhxYYexcSibQabeKDTM2UmLjM9qS8DXdPjzxsXGyc96pHbuy6b7V1QCxPrjTUGunosCb",
  "key24": "2Vmh1iXWK7UGJGNuffrs8EJ6E3bM6yidrbt8PUsjvA4UStkmpTNyCnMxYqpHYZQZxqAzCsP7x61NAxp6yuxYCuoH",
  "key25": "4MvdhrkLG8SuEkvUHQgu4aYCKoH5mq3TgXM3tCMNPbp1qdwhezvE9GH91tAQRrUvE9mM8nB1bfLQzV6qv5vCHNvD",
  "key26": "5DWMGnwi41fxtrcd2c7FYpPqjZGf537tn6srobouR2bp8xU62mWronZTM6Fzy592gZ75kJDYAGZ1f9b3gVKTvLuv",
  "key27": "2ssTRkb4kPerpUU7cLqPvaphiM4QcE2xz3CYcVPi5p5fQHT8ZCEnzGj1ZDXDdHVpRnKp3i5sM2fKsF9N7312MPtE",
  "key28": "43xQ1uU2LdDa9edNryVhv91rhUNta9PZRsD6ueCuVCrYcMLqNGESFYfK4ff8UjChm35z2LwVm23qh58N2n7Tx1BP",
  "key29": "2SUpBqBGTExBrhsiKZFsZSjx2YfSwGWegzes9FBzBYVKfnRf9QKHRzQ1BVPkBo9fzo5WXz9Vta52f7CXByke7mdG",
  "key30": "3PpcAXQUs8vGvv4PjHpcyu3FY7qSfFjVrRwLeaUBBq263kg6TvoP3JA8WT4Vm8hzXK4QHG41S9cu7W5upTfrPc6G",
  "key31": "DHixjYRG7rVbUNLt56q4ecGdkP5x4RuvSFZv5siZY4LvezQvdzw5uGwzhsE69N1y1X1nWyJ8QW83cmYCNCs1XkF",
  "key32": "4sD6VVWXmArtcWnXLFep4SxBNQTwA1nhrbwtYpM2mBNjnQNb53xNJ21xkVFjFAhLngXansXpUV441zajNWF89zve",
  "key33": "9MbahRTNvSVNWps8oA23A6kZ7V9sNDrwGsXAkWJG8hFmNFYJ6mmg5JoqaqxqAJeaqhg6nxrR8D3Pd4Aogj9s2K2",
  "key34": "kApNaPGi6FQmZa2xfCzAtrMBtVPwN5q1poNp7coi9KSA8bmPjNbJA2LApQXYyCBubcTN9uDf4pJgPwgXxu2TENS",
  "key35": "4tDPjRvfVJs2y9CjHQ83Mi897TK5ZfsQV1NbVo6N9t1KTHAe2yKvMG1DVJGKJUKXfvUa7nDwxfn69J6mND2sCDyp",
  "key36": "2nx8yXxt8WJYBsVfthiNXvDzjubGvEMCbe4Z7MDTws4ScG6u1ZajQ9P89BTq1gEgtJv17FebTNYMwANLZnTY7zTn",
  "key37": "5gt2HdmmJ6JY297dtDffUZ1v5r8GDnDozRTzhDVxM51eNs67sqt2uLsouTzmL5N2sAYfLc4QxbsX7jJv67EeogKM",
  "key38": "2zfyJUEUu6LNHqZkHeZtC27sER3DCYQQ3zps99ypCfWLJFyWuJi6sBQbLYNvHQAQppf7f7zSLa9VRb8bSRMM58Cw",
  "key39": "56AJc1T497NWisYLkjxqH3EbgtA8TcyVijF5WjBydPHLU2S931agiLbrygU4MeMSo8FK2kt2xETXG7CjK1yhs2vq",
  "key40": "4DWw5Q5NxBeLyDZ8JgKRLMCji6tp6DkeuZ2Qv5stuSNEXzaW1FWWJEvda1ujKahVCpkYVbpB1xMTzMxAsifLa9d3",
  "key41": "cyrt2wvD2rdqbs9HeeSrKcgujm6BTyGdxzpcnMsVWrh8tTBbPxDmXfcThNoL1b7rFFtHgLUcT6iiD1tgbeQagTr",
  "key42": "2DVB1WZBdCLhneJG3zvr9N8aXXTHsyqbkkPxTYCocgBMKBqduXtKja1oJVTxDTZnPocvrXPskmjESuLfxUR3SCtB",
  "key43": "7otLzPf5yBFvkeg1Z2oGZzZTYJ7DEHwVrK7xsDFnQK3M975ocszEjkMGVekW1eqjdKVUPBA69NgjLbm15Q3xbG1",
  "key44": "3XZz9xbeHEDryK4jEH6q2Y56Aiw9a96gQfWCjDMrW213HNjyaaSi17RocsauRxUdtMc6YWAZXSoz7BMK8e7nexLH",
  "key45": "T8qtmKYJBScCUdpU9vxozjxCZVNGjcy4A51p82jzWqZb9SMeeF2wa8R6ZrhmKoHCFQCaCT1WeoWNb9i1Yr5FrvT",
  "key46": "3pxbABaaxRTWpBiejagu1juCNdfptbp96yzNWJcpkmkZ8ffY58dggPHMLgY767F9eGWB1kSH2SMPZBr8p9PVcPKU",
  "key47": "6pdzKiWmdP9QZqMB6dbd5mPV3n9sPVC9hE7oofTXffhS82aMBYMdLwbHvKLDuyURXKxbdugd4m4cPasVXnCNYgt"
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
