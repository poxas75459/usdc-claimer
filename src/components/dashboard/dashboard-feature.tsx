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
    "z6nUSyn8MDx8QwmmBwcg1k9ZVenRFDbgcGtsDv1VcSTeNU99s4N9fEjBpQxH6gU1AiC9aTJAKF6jq9hAL9UPgoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mt7CqANBfZUHixDq6XvAocvC8XbWhbiZ2PXJyQk9P4ZeGNgTLgCjRPYRQMMyWcWrHZndKXjjfrpo9cVnuX5bMBq",
  "key1": "5UQYoKbLM6xyYa5TPdSw5huknF5jGwgLr6ByR4oqjBRo6ATxAerqLEMDuxioiprx2bnt75fmqtVdDhrqVzZ4JuiS",
  "key2": "H9ZomBZxownzA6VGK34NyjtaVtrciJc7BP2NSLDCw6LVfES3Yb55CYvfEebYyRu6FsiF7fKEHRVJBTBeAequZF7",
  "key3": "3QFMMTxmcscc1HzECvXy1iwzimhF9Vz2YMBmg4TugKRjrJ8DBHmPJTqQfdfq1mja8vfzzM3dcPbruiKpgRQyEM3W",
  "key4": "3DXtDgsndNHV7FrhFtXWGxR7ZwRrJLKtkSRByKwxfjGFu5FCaSnigbtiHfRjHe31XGide1UbTuw76jLCCoMEiQSQ",
  "key5": "3jjYnwN7KgSHMXPCMJ8CyHJJZsnCpHwWtReSvYJvsVsqbx35BA3juSJqR9hZA4ig1JbXarjveAz3JkPfSxaYDsHP",
  "key6": "38Q9y14tGME2j4VSUss23w77ScAvnqufaQqpNSeUdzjJcGhivvRjxZHJi5bDTYzjZ6aPZKZm3vERsvJgimSs16u8",
  "key7": "27ZVLEjpVDQjun85RmdR2vR8xtiqFMQKCUmVbEeguo7opAcMbKtM4uYGAj7RgrxgTDFrsTwbeskYwtNZ9mvyS514",
  "key8": "2G54ecqm9KDJvEVW5nmaRz9gTmEsv724EJndKnREoAqjj39TLyVrWGuZtRG3jsrDweYZrNy3ArzdZnyZs4GHrFb9",
  "key9": "56ijjaLAz59THh15wXBGFdmMNVEEve19K9eAj2Sg89qR88s5jhTQuiyHNKV1gWLaW6zduR7U5ppbUSnk12CSZbMN",
  "key10": "5VXRRYSJsXG7kFH6ovqs6dYsRaHbY3mx5gHDomABAXYB4HG58ezNtuczt7qdEd7NJTNi9797NRUSyuA1JaV1EPw2",
  "key11": "3A5rN3rL6x8GFqRTDNrCZh8ra47fRZWTWChUakBuk29ET7wGFTvE5wJMbBkSKwHFTFxU1iizqYcDw4KvpgyPEvUT",
  "key12": "hEZNYSiDCHUj7imP2GsYjDdUga3KfRRpBHtwpVj7ZcqnJmpqWGbEtRyPyugWo4RYcyeF5W3JHSZakTyQjLPFT6q",
  "key13": "3ZrRHRDdrY9W43srsstqLx1WNRYBxEzqN8557kGyNB28BvdXnbU8y5YNr9bgJjkocv39stMDrcJyMAaki9jQcVN2",
  "key14": "NgC7dvKKCn3gsvyMM7S6GQhES5bSpdN9Jt2f6dNphEB2M2TbDzqcwfBJ293uLn2iBRQmSS3Er66wnexZmHPSQ9w",
  "key15": "3wYWCwY21NvUdBbAtk9cUNbFkiwLuZMEhs9e5twtWR37tuU1hkp3BhkmywmhrKEPj5JgdjqUxvpY6t3NUscoRikM",
  "key16": "c8YwVFTq2aVRGnaAhffFgBhLnYRRkbYXSU2Jg6u9C16Lv3mCRJDe1J9ZoZ6ZRXEjjfqhE2LHF2EkMg7PCJGXNmQ",
  "key17": "5kVEifeSca2rBR91LpFwbYdeDS4GdWUeFuPqjR6NQS9RRzL56cor2UCAT6MicHbGJmaxtfSZZacTdxgJ7KA7fwZP",
  "key18": "5Z11ifNP4NUDpNvV6vksvv6rLFy2X8c3sWu2ea38ykwptCgvd35VuddrsPQqaw1nvUVrFLU3eWU5f9ML3yVh9C4P",
  "key19": "5fb71fiXuZfYrk2YSEnU6FGMJzMooM1EN1EFcNStDkRWfwmT2L8JmrcmhTqigfFW4e8gAkFTJCLfc3ia5mdfEg4w",
  "key20": "2yX76atXfH7aB1XFYVdYBRRuWuxBksXMDAc3n4xnTufgMEcMcRf3c3YdYpGRPTMikVpRCTanoW5PgUJ4VD1sAEkp",
  "key21": "39BSrzNjKhRNXPmVh6w7BJS8MMLWgvi9NJu9QvG7Dufg7rAka8rRM5w9aQjTYnNYvvZGSpZE167qUtdzBvEApPnm",
  "key22": "5nzV2HL8kh1yD2DPCGPBYgeHTJATaQyKw7R44t1D43J2swuHUqU26vKY6NrwRR1UtVaWxCkEvBN9agKKM67fzvds",
  "key23": "2WshPeB7RCUd68ypC2NQaVhsjhiAgUKqQkQ6CbwWkioXqU4XsL4C31LEsvckAoMhe5HKqGxTd1TQkPVKcXpj3YFo",
  "key24": "48SnNqaKfF2DbyDLXp4SFHUzRxF3VKZFz7GXhJq6yG5L1uXVdvUsqykjLuVQtxJx6qr9yrTYAgNPWqXsaaEtKcMB",
  "key25": "2BkVVA6XqcPdcVxqXpRsz5mPy5smQzN94jmDSum48fc2E5EFE28BQNkEeW7BZb3hX2vSquc5aA7omhDKEp9tYE4f",
  "key26": "5UDkyYppqkoyc2XhKvMNxCetza1R9KYvh6cLHBudyeCJbre9AQz66tydxhAatbFiqg4zhX5CHRfkxYaRETSM77S7",
  "key27": "3M8ESR3uxdFbZdL9H5yV6Qvm17ZBSEbtaoi1jfVXzzE5K9Bun3nYmfW9RzN7XTEdRcxDhtGw8tMs97zrBpLg6obB",
  "key28": "3sQGK8bkhnXV59QQDTahigGfzzzGMdwBxUF1VVjZSkRgJ3BEPmdknGxjVjsDNPxBRA8MKCZaEcsAYc2kdJFdRoXM",
  "key29": "2HUwBtD1asHTyqQyG8zhxpkvgg5RUG1W1dhDCS36UTHopJqsZAZ6vCgxg4Mtnh9M6co4a1dxG2mURoXzY21kpyLY",
  "key30": "4p4FqNx5wqYrWZveTtTnSrxecnsPPME6ycRm2kZN52fKQnGMhXuypLae4PE2dJQSR8UcXd5Mb7MMcHNHwgVpvfMY",
  "key31": "4Xm5godm747C3BewLox9XMaWW2fj2xUqxeh8auK7Eoh1GL2oKyHF2JjB5ZicBckugSiDYD2nF6abozZizTAkt1K8",
  "key32": "5uY8ee6nkmRiiQXYQ1qFbF2vz2hvCY5KFd7xfDCzEQFPjUH3JL35ZgSj18yz1R4A7FoiurTParMBWMgYLHgRqR4M",
  "key33": "5nRFiW5dBsuCsY42zBG7E5MuXigSHTx9NMsb66n8PZhQYCdZFJFSskoYLJU3CHPUB2jNvSmdQHitDGJkBB1rgMQd",
  "key34": "3CKwPQsQtPGCzdzygwbLQXKzJfLQzjhkofQcjR43Q8tkAdTFe1UqinHRiQKJvumeFS3dC4i59fgCxgZE8X3g2P1b",
  "key35": "61dZ2aUVbpUAZoeEaW3PiUWoEX4dh4fcJTfEeKNgzfKd1KAxb9DRc5ZrbFf3Qxeyj9u3nXwhNPD1AJwheJ38EEgp",
  "key36": "2MWDPnyM2BP4kg951doDrQFuGpozUCbv5N958CZUe6drqUyfszaDwdM42Wbg3nY6xpzXxMpaVE2fHJXBAi1Y3f7"
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
