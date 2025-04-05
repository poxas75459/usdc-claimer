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
    "4AKuRV2UouY4gKKPMYNsCLbLvCBkWbcM6NznFZDe9r9Wu1mb1mW15CoU8C8hWdYp1egcY1TsXCYqb7MZZCrTpSsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdanB6ekiQhkJbV8dLKttSwBRsshYNnYK78DZEWzLK81wPwxAsxyEFArQNriLfVwBrSmrCHVAKTK8HPFotvtayh",
  "key1": "2xRjjeLDzntk5vg7XBN6FKHpALgvs2GmBVpMxPZaVwWyyXRTmwmbRbfTTrtaBMUQD2zSdqqimmsyfnWbATycfZka",
  "key2": "4Chi6NFcwZngFuZULLgu2iY6FZ6gaHYA5FhKV3KtJy2MtVbs7XDzqf8dXEu4x2FvsLh3PRTwzVe7sSGpQGkAxUdF",
  "key3": "3mhPpHuCVy3qsziunbbjF2wZ2Q7VXVQU1YP9FimGeYicTDmCEAYrVuxjAVeHMaS3XiWhQqD11ubiwyYzMz6FFDa9",
  "key4": "4qQ9K3qXLYBK9pJMhK6sEQLFED9CLLsvL7HgDPX8eFafZCuu5YFo48gjc4m2iEPhWwyS4YZwMWThhmGEpbZjehDn",
  "key5": "5sumw39mar9XbWZhjnASxS6DP6iTg96eF99EbJ5DHUeNwt9BUV4nuiZ2E4dvwGBg8PvMFm2N1T4p9GAneWJqpXEz",
  "key6": "41GfxRDvdLFmqPWU1sS1PCBj1yJRQexKXb9uDqM7ZfGdmz1QqSAfBDLNCcFBNFH79eLLYb2kMHnn4ttFi7m5a3vb",
  "key7": "4WYdByzdTHXqVRfkTXi56mUtDxLa4DFNj6xV6apFtcDupRrBxGELaGtLEeD2qiVz8dXyS41o4WpgfuK1S9mpTaqJ",
  "key8": "2tcuXDi8wwZ6ZdX7AsQhmSznz6uUZcSEsNrpST3jVVfEWbdewqGr3my9a1WAfsWPsAK82Ns3UY6X2dpbuhPyq14r",
  "key9": "oWJ46XUse8vPY1ZkEfXok1bZjHpxLs17P4VDBvKxGfrMquFMK2cweiBk1vg5fCxieFA7kmfezNx397YcCgdDStu",
  "key10": "2GXRw6KaU7Ajx4trhQAtyHgCjLcZeCrH2Bsk5VeEedj21nCSMJST8C6Efxu6JT3RzN2G3VWcXzC9GWYAdQZkF3S",
  "key11": "461hSL5wUJ6tGLzFy5brjvCvKQdyQmL1xco3BzKTjkoYo7tH4yUpiZVHySXgGsgunTsjSwisfetoVrtAMxsjDYvz",
  "key12": "58KbCumhd9C3D4N55ShKDLUdWPgJNZuHjjKVD6TuVawiKcqg1Eswf7dbbBbzDUHEdxfLWzjcPd7F9RYrS2YQqEVP",
  "key13": "62oEGQhBGjgXXudUDSr7b9igSBuvNTmxzUNq8jAgPzVm5QVdDpRTZRpqCtQ3hsJG4MQsGBxvmZRp3PZnmAzktw71",
  "key14": "2gSUk1L3uiRHCmfh2tgKgxXpAPC4qh98d25dpRsBJ9MHpUkXK12okNBszooin5o2X98MeamCco6QPoqW8QUmYtkZ",
  "key15": "3nK8h8KV44Kx3LejtYV1txbzVQ9fstocq6vQPEWhQm2VMLLCZ4Q13L19DsYTAZjCk3KZM7cy178Xe4oD6DPgSHFC",
  "key16": "2UUK1RrwVdnrZRXondDzV3NHwB9PeEB8dXrsaan9KHqkPamVpLPitrDircX53n2QN3nFRGVA5u67EHaas18nJmm8",
  "key17": "5oWuirwAyYxCRCsBZDRHt59bqdWVTaUwbnS7DDETffEh6ZZdPGGWH4UkGwLcoimwWazrBjoqXuNyTC5fmUYJByNp",
  "key18": "4ZCzqs6L2xtLcAtoALkdj3K9ynBDv2nRekYZjwH69F1njZPwQ7ndFq3hNCmrZurLdvQJfXoCCtfXEHftRYwjwwpq",
  "key19": "5HwL7TrZ1aB1qTQRUNooKPmWH1ReP3rKkCNom278rSALYwmx3SeDVrxfQo8KDuWEDic3xTMiswppxRaMC1LiFPgi",
  "key20": "2EzrQFzTA2kNMX4Zg1VsBkDyH5J9SAwdXUhgisGGPcyuvBSvxELQg1TAeYB74uVjZfZ3iKFAuevYJbSUrjRbkUGs",
  "key21": "5gvSbWewhebRqw3a7Lfgb1fpEqKxSQN4K5jYLjbNgHAT6BVX3kMQiqhkSgsGvphFsxZwBh15KPYV5q2vuuVkfAyi",
  "key22": "4orBFtSf985iXpY7CB2bBwXVLvdxDfawrcywxrpY9dfPmmjdsDEC8jhqe6LEauC7fBQMDGdExmkUHEd6sYLNUzeS",
  "key23": "5te18CsUieGDwBgs4JDsdttrsZgJKGMPbQ2hsuEABwqD1LfpHL9SzC54wXUTPi1pHgiwSwBHL1328AD629NNsnDn",
  "key24": "3t2Udn7xGsms4tyuLVEzcLEM6yb2EftxZJiunqXpqy8t7AdqG4iYE5StaY8RimK9x1cY5zAyUBJpAFcMXQUDG6bq",
  "key25": "W5CbRafe1Ce1oCJ6McfjMYYwyLzXzWLGPvxULb7e7ixSfTk7ySe7xpv9o4fHQyPpjZKJCNfDuiRSPotDkkX32nm",
  "key26": "5KY42iXcQpXmXJLUsgzauRGQMnV8F5TgxtJ66tv7zz7PmS1CcX6mHHSxma847NRFLQsmYVq84qFVgikD1eZvcdkQ",
  "key27": "2fYPen9R1ti8MhMKJRR19QjmBgr8997XYXBsKsyMyNVSDeZnMA4fT9GD7mkAqahRFpVx2hCKXsRZWp1e8U2Aqvos",
  "key28": "3qyX6uXdwpESVwrLmG6WcuQgPEuw7jGDHDJJFeau4mhFoAQGpkyo8yuKFnNecYrfAF8vtDZNpaEConm4HBwA8c9X",
  "key29": "2AGmb838aBQAVAqFrTSMnEqbiLHLgFi1UCYmwXay7yjzv8GE4ThhbojCc6by5sHRYo2Zuxau1kHMvs2AiReXxqP7",
  "key30": "UgdQ2WM9LCamhnhzraHxECJicmY9s72kj1wpW9ynxm3mVUz7V15JE57NqYFXcyMtkEdhA6tUncNZgyWkDBpXSMz",
  "key31": "3zEfSzAKUNmwohvunpeeqxkcWmchNmhNLCR3FQK7V5B5hsedZWMU19rSTAronL3c7qNcPLoRCnZBUSfiWzPbir3B",
  "key32": "39GvMu97qsuLfNh93UkyzsR6ARCmsYNE4W2dyLJbogACboaBNDyCSJYcvEUZda6pCYkWbjwYVnQH34rcHWU92Uz6",
  "key33": "BbKDmfMGa3fPvWXPzfwBDcwZzuubA9thfdEVMajtupEkysV2XinyegJaoMvtmLuzJnfUUtP3fg6hTPPAQMtcf72",
  "key34": "4eQ8Wb2Ni4S9K6x26CWvAQJ3JAb7iTo11pRidtfjFaoFUYwbhiVyujyYaQe2iKkT7xMpgPLxaXjixPXkTsqSbJ97",
  "key35": "66sbLyrrSgYQURQLEKbkuyoYMM6X9LJS24qn2a617h2jZp82cYYDiLdKZcrACbx76mMPVnbCFjSEDKjQqf3CrLG6",
  "key36": "3DNJEtoX9gj7raySBGJuBLK1HoEUPBWQFeBCavMHENNvSPu2KEWP9KvUCNAGquZUry2nkVemqE4sHWrm9jZ9aQXu",
  "key37": "DU52dHKY8eEwZ7wx7abGBib5H8Hwjg9vT1EyqPD5TcU5kypaCz226WD4wtPpkWdjPC4mEdvHbyQqJ7oxH4eF2Qh",
  "key38": "36azcELbrKQYHSpbtvaCvGWCuZpSZtXQ3hcU57roWAVmQtngW9h6WmNjBg78ESU3T8UgsWMwfLd6NAWux57C4hwn",
  "key39": "49Q3qwazmHy1BvwGF2dMjtbvgUZvUFipHunPDmERXxVEhySbqksnrcvpg987qYkc7FC19hMXXtJDexw9eFEr4oSM",
  "key40": "RpggYkLZsHd7V2csMi2uV6WMKVgEFv3y9q6QFYtiJBk3FKXpKY6FGZWyWPiDo6XCP8scVVsmMBZ2Be1hQdvUS4q",
  "key41": "3WQJScjuDTPbQjxDEVX8XPhacxDep6mKTAnVqXHtEqbLp7Zm7g9toeionF5hJpDzpTU1BnSGTJp5rfwUfPQeDrU5",
  "key42": "8LVvEwDhPPdtS8mepiwq5Jvfz9GsDuJF16JAsosTRYQoGddwSQa9LLxiSMhk5phd8gNRbyHmdm7jEMNfoV5iWVg",
  "key43": "1TbwXow8dbRFnPgH74vMT2B73G7qgF4V73ua7XQ6X84EznUuMB1Ufs2rpdBxVLQvznUo93E2kPShYqnV6PNkJVS"
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
