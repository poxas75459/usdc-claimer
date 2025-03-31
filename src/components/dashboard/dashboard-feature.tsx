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
    "35Nns9qLtj4g6bhakriD37YQZWfBb9P7DWFCBEep15xoXiTFyPhEE9TC8xskLg2kxDMVayu134A7Pbc3aN9CVKKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YvWe23t98W1PQsusDULX22SPtHF7JR41cfSMBoCWkvv1Z4PMQafDqSMAUDN4b6Dpyws54AhhsiZi8WutP6sYKa",
  "key1": "56NoRaxxXrYhxk4j8YUaRQZEqwkZi76o8nEkJgcfK5QgEjwF9G22STRt8Djf1TEAen7C8NqbU6Jpp5nhWusmKHr8",
  "key2": "2EGgaTrQLFcHVNJCXrywSwF4z38suKRg24SKehY1h8CWHc7fqxpKEAYvGUsM9NkA33e8QPiKL2UHKLiScxEbfyMb",
  "key3": "47ZLX7zKuGVxJZXZPmf822r1TiEfizyx7kHAW17uteXkrebenGK6R1YrXKKJPGWiWymndaKRjrAB8iWPVaMKC3cB",
  "key4": "38CKZKh5sdtx9dWPn5zi9AcCFtRP6HzbX2fxhkK51Ni4b4GhxyhPrtoNME5kC9UipsMSsqdbevqpsexkijNTMRyF",
  "key5": "64etbQVRvFv4dzTj3omnLhMQvrkzoUPd7WaAr7ZGAoRZgHCRgPypEorUqQQHJZgQi212NcZrAouXbYVYKt12Tdyw",
  "key6": "38WjwbGfMSmDJYrfqy3me3whKANTb52LssCjYQhoEV2mVvCAMBdwE57zz1bM38xSeYxKuGfUaTM1HL9TTok6XjKd",
  "key7": "3HaQSpztVNnvUqnB6n7d784K4LThvjcKY3XUf9TvdDYp5vPt6sZLUvdJxzJ7nSUaBY4aa3d85K7kXe3C2AjuPXFx",
  "key8": "5Ai8pWD9DyfSguTDmiFHvXkXqEqnqFbx3hVSzszTu4wP9r1oUCYpWBTsoyKAxrzLufDD4mcKTEX2BM4d4YqD2dxR",
  "key9": "4xEG2DYCHwS5MvjU3CzoXSCNz3Z6hwswXQZSUm3cuHuwCdzA9zVgcMsmpCfANiqMGRBdfyEWs1cU5Vh5zwAw3JLh",
  "key10": "4gFnkmQoCVk5qBiG7CJ4vLRrVnhtqnmZihbf7EMYaD9MS47DJvafoqvmHS4RZqJU6kWqnPdwVNCadu3jHK4UouDp",
  "key11": "4g5FAVK7oiSAApdzh9wVhqnzT3g2A2Ko1H8NKvEqqYZvbQ6osvQWfgGqSNGudRpWrqk47w76Y21SqEy2c2XXxZT1",
  "key12": "4SXiKP7ZGvNbbb64D5duBzXVZPxe8pLyroFDiHgbWVo2ud5WGFFMbYGnsScLoyXtMpzbtTof9bvXmaEYjYnCJ9Pc",
  "key13": "3w3tYCJaQxbZQSketWvB6yG5JcsvYdNhmgeRa29Y3S6E4yQPkTD814YikSmfkhqm3HKTWn1aWHSLKiQGZgAza33C",
  "key14": "48SZw9NpNCjK15k7nHJzpdY7SqNmd7Du4B3dcaT571SNQthqsnkSRn7pC8NW1a2gi5nQtGAXissF7szoPEuiuY1h",
  "key15": "vV7XLeKUtFyqfyubKYAYG5koVkfYTFiCH3mQomGj7WRyALUkmiUJrvSBYWbxnNzwbpKiRY6PLPhz3GQefTD9Hn8",
  "key16": "dX6B15TTvU3d3tehvsyinsgFT3dAJMhY1VfNkJiUU2pToMUx5LypZwvap3Luu5vYfVj9rESnhokKicUC2suW8BT",
  "key17": "61rwWYNs1ZoteqbXc2iaCaKWD2YPDK8sjRaZsMXJWTx8rqPVe2wHao3RhZ4RekS8bPSZ929PvoVqsUQJYorV62UC",
  "key18": "hioX4tFJD8x5vEudjtzqqxs9rvNquHNuDURnyEZGWLt7gyLrdhFK8LS7ptDwLhfn4UMueVCeku6RDy5B9siM9NA",
  "key19": "2p3ddH4y8uyg5UdZqjd4Ky4YBCVHWZJSoj6jYHGWfzu32QpBwhzBipfV9kCHfy4ZtZF7rxdJDyyJ8yiD7AStSRLL",
  "key20": "3fYnmmmbAQTP6rCemKm2nWHgbTdUSwfgr83gKZaPvjd8vu7QAU2PXT8AMdZwKo5D7M1FPofya3rTWxc2rTim1FjM",
  "key21": "2odU8PJ5ZwDCTgQybavu8ZzHu7PrR1FTNtvo2ioEdj7kQVkbMZ2hN5C3B1pQ9NDcKGUF6ktXAWJFw2QipKbjR9Sv",
  "key22": "333bUKPV4Gas5cGp6RrX5YgXsJysAUtQbM55kAE2by7Wkz823yYyX57MVgweykEHiVRgF9ATg7bszyuKAcE5sxZS",
  "key23": "299riaX2yyeeLkfQgHSfAJey3TuBYtsXg4TLfEka4Tdrm3inucZk2f1ETArZskDtqMtzqGU4ByBYCdgYJXPhNBYZ",
  "key24": "4ieCyTEkVNLocYXk9rLHNYsQ62SMxqFFaxesZou7zTSLWZEzYVEYeutG4p64eB7cdS66Nib17KjJPty4afERrjVk",
  "key25": "4vTe9K9tDajz3CqfEYqr9PmokeHBQ94k3a8dwbQVu8PbiNVu37eyZMoD1F1GwfBMkG1PaWAdLTXdfgpL7QNoUh6S",
  "key26": "63s7KbWSC1GSfDgAuZLkDQUi2TFFeXXZB5di1sDaULGUxDUpoSXbJsEqZWTaFqLwvvQdPyiANDtqTtsjdzuz4G2K",
  "key27": "4ECvUUfpwb5kFSH3YoS25ZLN2ctZVRdv35T6v8LBrPDB5kD696kF29pzznEJLLoB8WPG38bpjr7mbbBoR6jqkBVU",
  "key28": "5wRdH8qyE83J3jXZfyDnW34XoNApKno2BbASkzLn8MCZGoCB8THis7CpUyBuNVKZr1BagWRgjetQvdNfA7U5F7pH",
  "key29": "551Dy7ERXBJMXxhRU6RuonEbp7okp3561PcG7THHASSpVSUQXyrbAxiRKXjJwe86Bpwcq4E4n4cb1uoR6D5fr1DP",
  "key30": "2FzucDXBo9usdSVBxsC94kwQywvvh5uYx8iPqsC1xtgF91i911vYPm1izfkaufoAYV4rntGgg1b1uYriXBYdKEVR",
  "key31": "5gjPwzv1c8FLz5TfWCr1LsfL8vfvaziyy56LNBytVj3QBERvpkJBRQ6RcENokZCTaPdyvqQvLjCg97CzsDnBErXz",
  "key32": "4pFD2DxfGKYiX8NXywPasoQPSTNrsaResnZnmQBQxDmJet5VPaFvi8wbinwj4XrgBc5it6NXBNLHESJFH2BLmof",
  "key33": "2dFv9VRcvwnzaBsCQqaTYgUpSMADca92J4XW1BhGVUXj6QYW2CRhpkwcgRQ4S6xX1UmfL3r8p377nE8DXic5UvGT",
  "key34": "4Q2rDuiHp4vSyWnpKTANGdD86GxvTUWMxe9YdqhqnimLAcG8rC9nN2jnQRuKitUXca1NuT9QNfsfaT6TRQjtKRwG",
  "key35": "23mv2xiDDoFBZPrAVvEnYWqgQsARB3GbhBpbAHzy8ztsUi1tfZSmPneKuqzoAFSBTu7J2s5WXujevngQnDo84Kia",
  "key36": "3qBFewWU5WLDHfihXj8orYCfXVrVgHQnW84omW7BdtRs1sHzhY3CSHx9B2oKD3KvvYad41caac3tNREDvWBQM6s2",
  "key37": "27gYiVEjHJ65iRz66tV9KQvmoH6RzwFgSyaF7RnziAESi51ny4JX8cj6RGKuJKwRcgyRo14SFToiiaK1cHK2oDNC",
  "key38": "5ics7Fz6RvHz8kFHWRHNdvpLMvAPe3bHeUMbQdqZyXnKDHwcH2ZyLiQ9uug2maZVBDGCa5UwsrkD85CYviY5qrcN",
  "key39": "3E5ERiDAzhW79CYgAgzXvx816EAMSguyaCTjcGn1sNV5aocN7e2t6iUXkt2FAF2z13keRxoHZ24k9hYV4njyAevc",
  "key40": "3AnXLXZKAD4ojCXUt1wng9Tsr94wVkadUvUCJfYuQWx6jKmhZPbAxoibbkz1eYqSnxMWF8hWxm9eKCeTdMfAbRva",
  "key41": "kRLTRf5iNqaERH67mGyvLkVUSojoNeWGFZbCm8ydHeL9e11YxA59PDcPduSmXLSa47NAovgkPRy9TQQ1qBrU92o",
  "key42": "2r6FhtWDZDRWyUW3VchbK5QYEpVGiBRPm7N78sUiC3LQx28SKGjNNKDixVZnEFCmSUEeZcLxriVzaihCJPiDQMhz",
  "key43": "S4B9sFhfq536WSddxCxRMxWUEBz5cNTohHJNm4NwwJ9T3WUXGAei7F5j678nWRZNmFQ68gw5YjxcLHyfjv7Cd2D",
  "key44": "4XkfMNXANYysgNPx8mojWxJudkgm9gbAPDS1bguRgvpcDp6qyx6YDSumfrx9RXTmAM97QXKSHXbwYfazW6DL4U6C",
  "key45": "3tYbHigeBipPCX6DJiuTgrym5GTUshTMZyqAr3j5kkuySFBGNyXQHi468QRGLLPG5SsNyNA6s3p2TdktXg3Yuxu9",
  "key46": "4EVaRSAbyYjfYWbk435B4Vv5PhxhUGuYH8TXb3LZz1afLNvYJWqEYbRVfkczPUwKiAZZZqdsbe2NfcQsvK5yuKjU",
  "key47": "XnVqK3CejXwyKS9Vt5CG7AyEV8bP9RFfWtitPV9uB2K7NT1vUe9HZoqrEuEgK5MPFGzZQy2KtPVsqs38zzQKGiz",
  "key48": "5uznvq8Km9oWUXbQwtYc12Y7fYDMQX5taDb9SQZ7TXSdR8kjpFTos1wkc8QkCreZkUNpZnni9y3pVfHX63RpDL3c",
  "key49": "5v7GRbcLxQghfT4WG7ucV8dSGgn86mVDXYRjJPPDjE9DBLMaG4fL6w7F7wmY63Mv6Qzsak9S4Z2bRH8GMccsuui1"
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
