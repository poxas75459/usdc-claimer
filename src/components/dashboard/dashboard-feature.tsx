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
    "27nDmCqzCduR36ja1hdcBw8nUxXmj4jPGTPm1AZdHf13t9t5qvjhoEBpgehu7TkDBxYwKFKtotCSyAHe5mRAvPkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ac8Ley1XTajjnsFEKco4zDfvNNQ3BBdsR7eM7PbcfYSVvJRBzER4fcm6Mf8GyYZuUduLz5YDqm8z1fztzeqcF7n",
  "key1": "2gHGCRkkwpjB63hpJhtkA3rVUJDEwjRij8EauLi7aoz4kcjscY2rSVrdnaiyMxPerSU61MZVy9LDk3ei9de5F3jh",
  "key2": "4QnYLHJ26DhTVVu3XG3nb7cwuG18926nBYxKzGHzxBfpZrsNPvhwCJvwjUopgA6jAjyrksLAVvLquALa7vDfosH1",
  "key3": "3GUpqb7wDSLMRNaVm9QHyXcVLZnu8qyeXK4FStA83jM1ezfWfTogCNk2q2eBjantuV6pvV6ZatUhuSdewq3KCDLL",
  "key4": "3Gpq7ua4rDcFcEEQN3UFxNp6xUZXHgLCGejFK8N9cSBzBgp4E6rjrGoM5SjJ536TKpXpyNs1rBap7fcKsn6pUizD",
  "key5": "4922yUgURCsdhhWsMjJeA851Knj2zKbm1yKEwBSWcPZvL2riB634zKj75BSHzVYXxZJBXQcUEAPFJQteCcM9x2yQ",
  "key6": "24yZ7QRa3ebi52Z7LghnMqBdAn7rkdmXbVK7ci42zVHTS5BCsYPuGKcQAgqfuk3hMT2gCVFEKEvGhmzvvxWF3RKE",
  "key7": "5MpPYXsuP8snNX8fQc3PUYK5J8Ldt8jag2k1f8EapYuUQGkBTRuUSK8VpuWXVKCKSM6qYyZ2Cy5zPoGShNVkXCY7",
  "key8": "64iGP7NBJjewVB4s1FLNg566CaA58fJVc5FJz736xrv8krtxbVnwrWAXjwmuFd35GZ8b1N8fH3rWmjXExD5VtCdH",
  "key9": "mtsoSjoELg6ESKbjHz2q7NcXgihMMjbWwC6XykGBgv5gbwusQdpMt9gWsJBMrQD66YyuCQjFuves32yMr5wFFSk",
  "key10": "32s9ag225kfsRfALbAhKJn6Q5rhMWBx9mrodGbAuzCGZ8XR4AGnh5bd6yPf3RChvPS7RMWqAsLwptNAHG4QBchfd",
  "key11": "65utbzbgAuGYimpEa6WDgnkQWvjxxBey8vJB1GUjUgv6t1VSwH28GuSCR3kJ9gMgkdGJSerzkFyqy1RoNsbmo1F3",
  "key12": "5bDCqC5t35gVQrxTkaKXUegDPDGjv5BS3xscfyJ5eTJVUKz8aYe5BX33PUoh8h65GvRfh54kGqw5nKsWtAzwQDz2",
  "key13": "4ujwFokpnVHcYe89QE59o7ogqg5uEzi2TcHMEQopAqk43YB1rJuSu4dUN1jZjsLWia84TWTamTAKDyDGtTxeHhTM",
  "key14": "3vs1jJnSSYJwReRfW2apLzcbDdmZQUBttNmef2RZsoFHPAd9rTbcgaQ7Eriz2Z21CtUc1N1abAuXGEEGR42ZcGF",
  "key15": "2vcDkc11pfHXSuno9JN5zx7DFCvxvmjy8SivtHyiMacM5GrWrJTLAZUkmSDQhjyrTBGUYy8gBLRr6uhHorpBoMxC",
  "key16": "5n1Sd8MNWrSzsQNkhRAu9Ggnms6VgpLMP2t8sS7SHrDyTgygjVED2jjyouwgZjaqKHebz3Lkmd3X4kcxjqA5g6cZ",
  "key17": "2RBq387r6kPen9FuR4b4vGqkbLpQB35iVPVPBRRxviSgbQKYbwxyfiMG4gfQ7375c5pJ5VamLG9oXH2m6JFmKmCy",
  "key18": "4KTmT6khBMRGPwEZndn3CrQPpTgMKBe7YvoYVjxf2pjt4RDfDh4ZKKqWg37uFU57LDm3F71xiZdYHJxTkeV6U1Sn",
  "key19": "YN9ELAC3a52i5CuPxG5y8CjLRq6hQTzGoVjWdigyCBXRwdZ9aJjsv94QAmWT8ombSZBJmoEZ3QtLfywVAXkzdJ9",
  "key20": "5WZWVbadGpMmdYT5UZQzmXyw64i4m6PYjCUMUAtmJ1L7bp6fk5vWtPYvi1PcsZ95qEE9PzjE3vjLeRB85JuBJLGD",
  "key21": "4GpPJVCxx6ZQMrp7vNvV7D1AX8uWeKHBQUsA8hmfwJyoS59FoFDm1HEtXFqkeP1e7EQbjyyUy3wgNPjh2KfJgWac",
  "key22": "4yn4sFQb5uDVgDdDArxqy1wPwddnXECruP75KA11S1xWzm5s4wfbGJcaZDkwNVYppduhuXNZqJTKsrS5zeqNa13f",
  "key23": "4ZfuRnunaCKqaWEjqZs6UAcVvHjRzR2Lt9EhnNq7rb7gD5BGoracRGBbFHpT6mRh5wbENSF4iS76afDod4wi5aQv",
  "key24": "39GAcYALrumspteA2RQqb3JjgiuC2G1ZwAVPdkpT6m7mXqrNYRy8shf5BjK1eQ2GMyjgcHx8SipZbVcNvzfGdAcd",
  "key25": "24vnNrHAdCPyMEPyWij9wjZstq7xys88E9pcmSL11onUV55YQcGigvPAqN47z5t64ZAs5vZBsfMty4D3ma2AGwRa",
  "key26": "8AutgTZQr5xT5aEc57uRMBivqhodKKagi7Vk36NrMA1j7GawcVA1Xgt5kNy1CV3LYBfmhLFSy9qWvfMpgNrmTRg",
  "key27": "2AJE2iWwE5inReigaq7fYaFa9wy9sbvzcz1ihcWDt9bn2yBze8qZXnQF85SmyG3vt5YoBRoRKPxcSZ5djybt3enN",
  "key28": "4SCjqrzUbi63Zfa92WjvFeZ1yfGEErpkEwvvZdzCtvVrAAMsavbdbBhBfjcxWSUc4xUZXTzPcQ9mKvVg6RRqA27p",
  "key29": "2zE2f2fEUbanzsNUd2nLQkRdnNJMgBD9PwegzbZ2FGNWmQQB1Z6kDvtRCXbucfB6DrfgBK6DFRDxRCsz1oUZVLFC",
  "key30": "44C1xc9L5mhaczgGFGvrfPvi4Cn72FK9MsfZqVJVLxBfSfbbAnuNC4ecWMYL1ZHtrLQPTQkkw2wTt3xXSK1zkfi4",
  "key31": "BhFQJYqJHNFASjcpRv4zPBwpxwCyRuMKpqmTrbRBbKRZYL41DXwLUbNHUtipzASDTE1AcBZWYYRsXHjuA9YFvjW",
  "key32": "5e4YLcfEnFWJJTVFKtFjuWgLJiPQ9vFVU7FFG17EpHUiAYH69gykuDt3ecCUbBa43tKHuDEu5BeBVVAfpEW6pgv3",
  "key33": "43CGKUWnjYSkgABKawz5fDMVBgBaTkiTLHPkuiZLkU5XpAefnokYwjZEQ4mB9gvKCyxKWyvTpn4GUeMxPhpKwj59",
  "key34": "B7EbuDxLUCXVps6SLzgWJiA8iSZyWCV3QzumLGnBEHDSX2bbW2qoTvmVvE5CjazPRcvYvvbmoVecAUdfFsghJR4",
  "key35": "4t7A2PVsg2ucYCAoJjhbAXQh1tstPDPVjCKFz9ZggoJGXErm1AY7kHAcxfRtVzupKt2wPCosVsvYUa1mLKRXTqsS",
  "key36": "66oes51DYKfer8PLJjTSEp9C79RtXAft2Yom5wsTEfxoSkEHwwdsRYhcpZwbbr8PeLA8Vr37c2rb58VHBizdrn77",
  "key37": "5nDk4p9kHuQNoxoGmpHHagkhUQ3i64NBhjbYnvy3MUvxUBCLWk9L71pSNPhJM6fy4omqctKwpvXQ19meLhubJ7fT",
  "key38": "4m4rWUqp8jnqCTSTrBuuJRrgzfCHYbL6t5dg1p2yPo1wHt1C4USLh575QxZu73FqTakAZkbA8xpQ28TuerdE22N8",
  "key39": "4tmFZgGi71NUr91xDJSPpXgHgcxpDkDqUbNrYBGVnu36xJViyrUURZuTSv71Ech5Lw9VCtGVsHCumCBBup2WhbK7",
  "key40": "2Qqu3BwWpxuy2MAaHSi8ojiekRQ1656Ktv5ivtT3ayPwnazGcfibDWpRYkHi5Qk1Ysz4m6Sw9ib4WHCw3CTc9QxU",
  "key41": "rLCzjEKKY1pUwvHs6X8Cw754FAokksQdSSCVXp73WwAPtrKLoxWQ7KortnZw5neeTjmhxapZKYzd5Ma5EVjasmW",
  "key42": "5ya9sQx6xVafdPeznDGoT1Mc6dyhTDiCcfvSuaMEPd1kPEYVvJffVF8vLsLWeQMk6uwU2tDpG8auDVVAz7FA1Pci",
  "key43": "4iPLvFiVbL8AtxFCUU2EwwCYKg63q8mKbfzSG9AznJEVHQ4GxnTuCfu8aUhUKrKREBGjSNycQ2fz5snAknxd4ASe",
  "key44": "64xYJ6WHsQ1GvNQMWRWudz5ECkbLMGGyKY4ubcBPaqtc96Dq3Nrye9rDrB5k4Wk739Pdd129K3bmDFy2vvio4ur7",
  "key45": "2f4ZZ2vHQJLKiYVifRZqWr749R2mJ8S2KoRj2TxJuCn96qaGGqh5RjjAjWkotxvrQ9B5JWgjLGFJRtx9KqhkYwKE",
  "key46": "pBiNnRzrK8FKJZC5bLun4P3eEadhCPBzgUMBVhpJ55mQvKox3F4eSayNSkoyv3yXnFib2wPcxHbXvkTYGWmVcye",
  "key47": "SzVDxAtthwyw5pWBY23Ja4WzPsNausArUqmfb8CpSCBVhe6PeP2pzyEVrewV4z7HyEEYoE76jJXsQ4uh1NhjEG3"
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
