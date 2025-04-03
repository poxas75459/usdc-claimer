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
    "3XhRGEPkGWGYKor5pGNhpnzPNTntsZWKCLjia7Nc4yufbkxu8bnX528uNBUYni7yznxv5hnPhYJDPLu7o7kcN8Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxYMh6upmPncMrKRo1XC3E7XXp45k29e3EN3KAcH5VvYuv4fQ6pEMCocGXtUWYbWLxQu1GrGrdoRW11EQcSppg8",
  "key1": "H7Lf5xPQ1cTLikxMAkbv3JNz4Uwu1h5Kj8MMM84H3io5Mo11og5DwevVCZzYw8EfsQxFaxAEbZZuxUvyGWnjVTa",
  "key2": "n3fV1GNgGK5wdBN875Zjx8anWuoFT8tp7pWQLtNmZ7cjksXECD7qJ7XgCmdnbPcdGPUnMjwp2FX8e3KJjckEFh7",
  "key3": "3MwJ6YG1Mc48bQnKKkbdmtvoMtykdwiPTmZTpmQgjNUPDNwR7R3DJJJsNMvo4p3dfM6vZcP1eQVUotc49RhfEFN6",
  "key4": "5dzH3TPbQnbqLGfPu6mwva7ErLJKiHsex7qhZNzd7rQYGKr6GnVcHbBCNGetmAN1zHSpgKUc9D7EjtRNjpnrWgx",
  "key5": "36JmGky8VZuKeD7vce71XBj768jDwXxXB5TYzqYEsBKqodmifjw7H7qWfaDuCEcEDnpnn11TsZ6hC4uNL9QjmNXS",
  "key6": "W3oDnupbRqLx7Gq5tdis2odKZKjrhzX2kGv6Q11K76PQAYGE8seAJgy5VaJymHJnucYHQ6E73cLGNcSB8x8ndyU",
  "key7": "4rRUh8HYmHc6eDtSazXHvKVwMHuNmZqCwhfsrPop6ftMRmdU2w8sRZShGPVheyS6PXHSWV1syuyr7HBYv59256SM",
  "key8": "4ff2qry9osAbiNo2quxvg2noZUFd212qR77t8nhfSqfn6Ud8bjZmfzoYkxt7ZCTZuohcxuP7GoGjLFrFWNHMvdny",
  "key9": "2NXcLpVuVHnAVKQUZGLUwoi4tyhfmWUQS6P1qxMEbxtx1J7v9WcEwFWtPjxgAoNUky266KeXUP1q24EmoQwvAMnC",
  "key10": "368YTBWnSbn1DS6gbAt1a4FrhFtzfuiUrnMDFfhsZzF6fTrhWKdvx2uFniqUctH78uCZaTqj6JM5miatXy7W4Ee1",
  "key11": "35eKH1AW1qarJXQoGghvDfcZiAZ1QxFTBubYohzDdgrV87kCZCTcHNVtoEo1bTK1Sm45dNLU3Rg6DXj9NLLUmi2g",
  "key12": "4uThhHoG4otoHfD53UbkVkY6pSkg1cRXiEPUHcpwL6DhQ6UUcLwj1VMndV3JoFBRDxFpNFtt4TmU6TH6x3agxvGV",
  "key13": "2jerKbuyjMLQLvakJ1wZLratNaf1SMZtNG3rUXpypSyP25aWtubjeJktiUg53Z6wwEQe35MRUeXtwHYu86uLvN1k",
  "key14": "bUmqSW3veYvXqXVmXJ75LXYCNxHQqLh8Bv6xdKqFC5PgDzRfM2spptY9aWhVjnoXpTw7SDhYUKvS31jQ3Jb4qGE",
  "key15": "3TZqn4djVTdJDLTwwm5oLcXZ1nvMCm2QnwHqnjMZJLZuinYVc3Tvn8sgdYe78poYURx8cS8fPoruohjdbPo65j94",
  "key16": "4vT2TutJFXFCsfcA8jneWnPPkoNTMWwcqESQ3JMHXhKWQSe8fBFzpYcHynrTmBRjn93W6WQrycGSgrBwfrzC4Su3",
  "key17": "2wpMM1qWaQRZJK6xzMESTLBSyAQYfJHw7dUvuc2vCVFmJ69r4CdQttvJPzpoUYKWQop4c1h9RSDGpM5bnwfNZwX3",
  "key18": "2p3UCyFc1go8TKts6xJzGk8LoK5XMgE9uktd3oqBNq8wRQmT2iinGYGKEyWJMc8jqsJh7RqCcnSfGDWu29EEyjvX",
  "key19": "2zmXtWp7U9f6fDGBsYB5PZUCNbWbTntVjJn7VDSsUgByTNDiGDzkLV4TUw649UTTfZ5DFwVCaP6JQ5uKDrR5Mtsx",
  "key20": "4RM8h344yXKnAQmUqJyVSicJENq8NiF1rhFNkhcgzE72oUTB8AY28Kra5LdBCtRkbDSqy4MhSgNEQF61VrTucUwP",
  "key21": "4vZahCMk3qgQ4ZVG3j7juBsrNR89iMPmmfxN2jwsp2VLDMM1KVwg1HatsY7Fys3abzFNwKpeD6U6gYtNUYXZ5rgC",
  "key22": "3czhFHXh1VqBEnkF7QwNni6xHGbZbCp7KaAksRf8zszyhFkcCnUnegtbyocsGSqeeC98zbmFEzsrtba8f4rq2KKZ",
  "key23": "4XB3hhXYHKDZLEt6VZ4oDo2ydpNcreRiSCxr2yjyFrcFkSFX7n3JDzRfsxvKuc8G5UEVoTSJZX7hUptQ9tECMbid",
  "key24": "KyJ7sw9EdVU92JYjuSpiyheFZqMQTVXPnAXJt23BTKk2FBWF38EG7GEtPQ5xWNxfR9vqoJSHzCNGHoJp5hK9aQZ",
  "key25": "4KEoVmE8ELm9cd9n9gNb6hWugB2BazX6F9bK8ezxMCh8gvzNyBZb8SrukzSnnvRGWHCxvYRGgCxocSdTUpbqiFYr",
  "key26": "5z4C18BMbbzakBx5TMzZckzYzvU3puNMqKCyPuUnfzACVMiChQq2L4ZG5wnuFKuXYF8YYt5sTkCTU5KXYizve8qr",
  "key27": "2TBgThXg1eB8mx3QPEKq72viSozod32eSpYmFaJTQe9cq8rGhk9jyuaENYh2ryHudqVXWJSSWY5jgNUiyNPtH71K",
  "key28": "2APw6Ewx8ej6T67Z5LogM19YY7wge4q3jEuuGrqQWuHyU2x4SGpSjGTSc9Tum6uFg2rtYL8uQvyi1EXcjsXzPwyc",
  "key29": "5vFYEMAYG9nYJsKun4Dqt2SiZ2NrcMzGcq2u6LguzeXMtog7DqZp8teZzMdnGFvxAGsgWnFMXnCapwoDhPjmCuT8",
  "key30": "4Z6zKJ5H9un8zrC73qWWmEbxi8bC2RpX51kzqakZUfxPCNnvgNdRJB8neMTW88g4ntUu4UL7PshryJ3WY6Af8pLi"
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
