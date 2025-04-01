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
    "36xpuMTY6trZ1k4AWihayYu46QjG1nwrEs2sk8TaXsH1yJsdmkoocLr36sBVigVRPmHnXFF9kT28cdfSSxu3nSNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v7CLbyvYmokgoKwL4MkHHLjYeZ1bZx1J4fWKRXM6ky7gBtZGvrC3H7sHF3P3ks2jviEacakp67aYHowhD5nQ57R",
  "key1": "4n4AGT1q2Y7WYcY3zhwDywNzE72HP8TRYMnMHsk3QAb4c1uoCJLssgQVXNhUJ3JpU3V6exGtHFU66iWADUSgpdow",
  "key2": "2zYQSdLAgcmUQvZji2FiVkVskctrFA7mvbj4FG85EFVnnEVus2Ts6GhMHvAm2k5hqKJapV8zsjbDhJS7CyeBftNN",
  "key3": "2S2PLEZefjoUa4WmXqkoiFNR839DXUKzCEEnhnCpEgmZYXedvsfUWUewLPXFYTVAR6gfo2PAAckNeqEkoqD7hqhF",
  "key4": "2jkS8cwTud1GuKqxBsMUrAQLoaoF5B9kbe4dZxxKRh88iFXxhSm5vhMHCgtq8DYtbeqBS6Sujr5ya4oScARA3Ge9",
  "key5": "5kZAvaEQf1enEhvCSE9vALRhZ1ZtL4JKXDkVSai1heQHM56kxh1SCuamHwMT8wz32RqK3kRNtQXYcAd2zV92iC12",
  "key6": "K1garFnmKbydLUsEemXNC4hWnxLrrDCC9kLr9o8yBv3DV1YAKZjmDyobnaZgsWBZibB1pJjn6eqj1AwxAmFncUD",
  "key7": "23HD87a8AdxxcockUxDSbjcWwwRP2VDnpEue6awnUqci8g4AeQgvoP8QTdDXFWNYNKqBaefkcHZDgZrXjsEPHB1X",
  "key8": "4aqpJuGY6ES8ZGp5k6wKA9b2RYeJnMGBsPmmxKxhZJAYAUwp5prXhmHqZMsmsKheGezdNzk6cB8kgbKahUQP6Ucp",
  "key9": "3GDQsToGRwabPvuNao3n5PacFie7N3qVz4o9S5Zw7fWtAYfRYiwXQ5pQhvXB4FXAnZzKKUGuxFWNnkSju76rZjWM",
  "key10": "2aLK3Uf8vjtjz5LHprmNTmcVV1DZsCz6oEhSqKjMjjrz8HVGhUSw52nDJmvswHN7UDfmmM82Uh67qy7UPnmxQdPr",
  "key11": "5zs7KSCuJBKyzGQkCeADbBTGnU38BKNeUjTvsrDLccoHyTx7g9Ca4FQoGGigycAWd7n2vdUdP2SwVc4aB7UWqA5Z",
  "key12": "iXnoffiLxCYWD1hddv5fqcr33S2BFVtFuZLwptu5d2rANQ3ekNfLnpV2XSv18Myg8cgrpo7Novqb7SmwSkipbrR",
  "key13": "58rGtgpJMKiDuwJJWuWdz5TC2Bc5gVmFBH1HCJeHedPzT9Kbm2UenMhSysFYSrCoE8f44c3fRc3reujiARAdzYWs",
  "key14": "btvez3YDxq5zARhkSpV6QuNbS9QTMgQ4SAzZx2epdZbSxiNhjnjtX3KtLrf8XMNbirG63XyFNiydAwanUzafUVR",
  "key15": "4eEnCRmvdV6gLdpfgjG7cW6FE1rKWtUy5THa7ptrJHPc4Rv6Yw6Ywm5bdwoYvMTPxur2KxLuZXu6cayC8EuLZBt6",
  "key16": "5Hv8PPPbbVNuHvbnvaRsn9k67C9yFXShswDr8g39qcxRoM6bGbsn9KC4twCt8dRq5DmiPnodfBQn6cQ2EFZ7oDV",
  "key17": "3BfvFBx23gSeCVcj7h46NAaFwep8i4hZYajNjGs8xsCuS9otSJGaQNVe9ndpRj2gCSieqzKbQqf8ePQh6CCTfVCk",
  "key18": "5K9tavHhMaRfwGmi5DTq9VDnTvcKXaXQ4jkqBftCGH78TreNpFpMwpfuzgyFtDdNFCyGawkkHCBS19ZgtGaygvbw",
  "key19": "62Nz4yoDfAKKQg6fUKTXTyASqv7WfnZMNdzAXhsqy1G1jo6FzbmBYpJj46oj1juwUDzVJ4iqERLk3NtE5VWyJLA8",
  "key20": "3mffycYUAqL1Y2uEepej2hKecfvTARqXzLEX3rg2ukaz6Tvyx8t7E4t4GDp12JiTiFvNwncfzoTLqFCcWhzMmv8k",
  "key21": "A8CvB6GubBmc62FEbYRZVbfH1WctEiAJK6nVPazk3dXUzcNuYPD4McL6oDH2wdhicBe1zn1fTKy6ReAGJjJuzhG",
  "key22": "3DYY6NBhxenxkkmfpGWQcYrioZ74QahKtDvibKQyweh72XLoXguJvQQStEkDejkfbZKNw6aAxwd1dkUM93cv6a9X",
  "key23": "5eizwCfZTSvrQgVXEjJtU4dwF5gf16vLS5BRMXmnvR2YtGvPqcqvf26zjZXJcsMV98ai2kRQLLPbCawKVzVQdBqY",
  "key24": "27MzRLZtegzEm8ET3ouK4Fyy1h95mYTLBptqUA9agBZs5zJjCAE3bpnAtoHcEFa694xdC7TRXwMDrKJck7JLojhy",
  "key25": "3X2Vck1RwbwZVxFXRYacu4BgNdccV4FvavA4bSKbdgTyHmKyG6WWteY5aJWrpnyySbSqz58KKegkoNxZMfg9HU4z",
  "key26": "4uxDyT1Q2KXtQmdvWxGoVMJcGa5ZuSfMt9z4sJkV3JmdwqWbjydGAgAar9A3EDKboM9PeAnYDbpeUad1mTViXmdh",
  "key27": "5vosA7tZFYWzvtQF9sqjW63ewTZJVzmfm171Qcn7dUGTZFmCcsYpnhXne17tqQ5dPS2BpsWu6TDy7juR8FoDMhnS",
  "key28": "m8i2ajitwR6r5EJvTKNu4PQFJmU1yicE9c1C9umN8PwnCz9Zt6vbTPQPXXxWQm8VAuoVPxBRZgA8cCw3ETYw3Yd",
  "key29": "3pY5YA7p38N55hDgqfmWnbYVrddB3tAPRuTd2L4RSiK4R8H3e2Jsb2LMfxuvJcJqaJVKCRkEHQ8ANDiBBsVvcCGF",
  "key30": "4ywpR8rRcvy4PGF4KXqQK41Fw6Z9PgTV6BbAbdrfC91gzh6jKtoSoUeD8WrjZ79WNSMQBYrMeBAB7iFpSJyFHQM6",
  "key31": "53yXcNq6q9X7BfR87zyv1BN5ATzdp4ud5bVfnxdhGgDXpkxnLh4QwZmrHUXeRYf4g21PcqDyKA24puQwuyc6wfTA",
  "key32": "5wD8HFjyUqSmsJ9yaXjgapARK8mrZqDnV99cdADzovMfqoujBXFeQSg7w3qpFN8vN8GLgJpM3urQKNerrZbepFM7",
  "key33": "2zQbPzVp5Wy9eBBXBL8J8jchYsM1imvmgbSnG1TtpzjUFjgXTnpGn8qWq4xZNW4XXW2zvz7UirSsLcTJEXZTF82x",
  "key34": "4pV4NW8HzMcgYveczbFeM2vZiS2Fh37H8Nvy3KcYkpPyfcFn8AbZwkfSaahoCRGnd4dCNVx4Kxmn8GKLfkARsaFK"
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
