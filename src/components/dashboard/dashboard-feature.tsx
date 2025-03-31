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
    "5yE9QAswVBLm9UFiPYiiZb1zKdK47X2Tmvo4pPdNjSPKTsq6sJ9JMp5hLB65gu7HtEo5zXDMS91EHe9qT6EQ1rwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZzSBovvbXPxbw8s5TYwnq5UoUtc3SXXceCx6eqbUukkHFV8aNFUsdAqaafTbfzdtPnHtwt3nbaHnJQ7kbcgZ16C",
  "key1": "4skMT3y53ReEmo4LgdbQx5dyUMix1mt9BmGScZ3ore5mVqFsnzHCXstoLdHTZjoS6y8fxz52drYm4xaoKowr7JvY",
  "key2": "YNv6zi5vaMtU8bc4xH5zyNR85PkuJqj7PPNm2g8wzfBztbytTsSaV8iWhQZgjKsZTp9TRhJKWPyhMgdiSybrRaM",
  "key3": "t2MhzsqUQmfPfJEMCHQ53UDdoUTAwpWxcYxkWpdNTLDAwiQESmfx82D31FSrZw4VBQFmtKrEb4NDZLX5pVNexqW",
  "key4": "3ZdDsrGzyiJyTTDzxBaC4Nt9yHwPv33DoAJsCYrWYUxdHxtGkT99M12ZnK6qkDDhBRF55isEkiyPcFgajufShxXi",
  "key5": "51wpqavVtHW7e21v1YzrKDaxyMJHvzPiRC87NCBG4hxJTc9V1jLc1cN1GLDBkAmnd5wf65FYFpVkj47MeMDZu5yq",
  "key6": "2UfZNmzdCiUG7d7kQcVW7Yo99WFvwQDjAjdAVzgAfwUyYb8diS5k6GxYDMRm9n4dZEnz7E5S32pTTSuMgmRznVMg",
  "key7": "5z9wcRoRNNRHKK2oD468BJCvM73FcQ4vhrM8yfvt6m8yppfVDXozPhoGokZx5w6776w9Jra6FChzJWx4x4Prk8NS",
  "key8": "3eLZKk4iP85dodpEZETueoQb6ku2nofvoESAptPtUf2xo4WsCEbSmhMTAjCxoUtqZwdRpmCKtRLCmiwupvigxb44",
  "key9": "3k9TmnucwwAm7bRPJYdsiD23imwdyJdCBTVFWDJhNtDTJcB8BLoJiD2SuyygMeV5RJ7hysrx72V7rvQHmgUjVXXe",
  "key10": "Rw9wyFVtyNxNoFbunVYboeVrGgDiQs2DaDjFq5iLedgKv2cCGoe6gJowRRbk6nY8ifw4aumsb7hyTYWt17wAnEx",
  "key11": "3ty8pc7TwZMbhFNiYULmNtjmCkRHg1s9VVDrRNFCcKY1QCQXV3JYjR9UEmFC2rActkoCrJgKEMFCLD6RsCwCqv4w",
  "key12": "2ASAXCwwGAxiMg5xPM5wToutWeJFh9P3Qn5FCEbnMH4MoqYAvbJiFJ3qznDVEfkKzmbCtqLhkkJsQ5UFm5ioKeWU",
  "key13": "4xcwDGxEWzGDAxsM4kapPTbPcEkKwn8gt3BJkn23bLQLd6b6nkAV7jSBaUQNupNZyQD7kDnswHqaaRu9JNuqYe71",
  "key14": "2EUmHh8VR3UpjnzBdYR9Tqgu1pCXRWAhnTksqo6Qvn14HhBr38XnCZZbNWyW9UQGTdVoMMBuos3ynLdVAT65o6Kg",
  "key15": "3Cefo8WjDfMVMEpcAesiVyaYmRMgr8QcPbeFe8SL4tSUJxtrytJKeQjf8K3LQEeAiESZYbxdy3fVHLjoNQPHEf2S",
  "key16": "1dTDXRbZ4Ls4wE8T1AYvHV2XmkcbbfGKAVDLdev9PxJmnwY3bp8UWw4atvbq5qhJjcmp7eevY2BJUTBedZk6gZ3",
  "key17": "2BGtk6o8ueqHTVhsgycGcQqjeLAT8EmebWLMrLRvdvRiDMdzjLVrspqdKjByWuJmmdnw4ue8FDhFAhf9aPHPpuuT",
  "key18": "2zPVHwEFv9rYP7SXmSMsNi2GW6sMb9o24S1oUDzNe9CAFK1PsH7HhPjWmN1nPSHEebPttz1KFEFGPCz5x8J46kcn",
  "key19": "kpMwvHPUewEgrQMEAB6ABGSLdoopBF2RwERsZgNfUvifdBPVcndnV4vMUXp44iGN8XwJ5ZBL2CsYWujfuFyM9pz",
  "key20": "4p3uohTVEx6vdXZPuFcRufUGR6n2yWpWqzcx6TnVL6S8aMLLbtX1EpwWkrQXPCCTD3gg8DqRGN5aexVZsAhxgHLm",
  "key21": "qsNP832E9jSkjj3yRqPdT1SR3of5Etb5gqTiAfYBSRkS6MNL5J6j4WxXU54FndC4WRz6CDmCVeX4f8KL2L9HKcT",
  "key22": "e2Kn4SmoXuBdczdubr2RSgYhnRsxJGjgK5VyGqSZ6SpScxekaGeVB2BeTL7kdcwaGGcYVYgtY1WwZMG5T3wgwPd",
  "key23": "2Ghi2AmTDquNBQQRUKoG9CDSopACYXLcTGUhVG7b817jLLC4fQX9fTk2cQweazg26wGrcNxH9FaMkTR9WjF4QDna",
  "key24": "MTd8CpapXqHWZoo6fG4QJZrPB9itrWmR5YusTNdvHyNyfYJ3XbPJChNpeJmurG8PqJNwZrKGy6DnRfjjMTf2jbJ"
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
