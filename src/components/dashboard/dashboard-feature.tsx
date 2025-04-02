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
    "3kYdGGcvbNBgPZnhhcoCXeMQYZ1fSEKNgk7XHvU4TwcJgzmsHMVVQPt5jBBMfa8agD9y2ZE9LVKjDLq3Qvsa2mEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbGX42gmbSbFbgbZrqAtVF896cyTLVH4z9RjqeMZdW7YQWm27uBp8XbMkPTvh3nm72m3UrFzxmDqhAkkWFwd6Qi",
  "key1": "5s9JZa8i9UUdoWSiBNUqkV1qMKbW1sNbQfTBmmtCy2AedY1BmK7XzmgSi5djbpjiWk2Des21KJ7PGGEYDoPf2fr",
  "key2": "L9z3DVd1MHn1qZ83NRdX2WYs2dKFhPiPH1HJupmEuy562b5kqWnFLL4P3iGQiRhZ3ZWZiHbFimtQB1PH3Coakg5",
  "key3": "5fB6MZX5n58z7dxUNX14YZ7BiPgaDLStVVm39E23oCXaYTMjVkvvu3yj8uAdqxyGRZwsehsbewtia2DLndyVQyE4",
  "key4": "4PdRfrbLjSEqj2thU6ksKTq2LWgsWgxWz144dgiq3B3shD1PLWfAEz6wbi6Q7eY3qgfJK8PFknvdeH2ZEwDXGY6q",
  "key5": "4FYPcKfapW5vcmNGMbLEWMG6bYDQ65Q2LhFks5jYqgPTrq8Urku5FtDsoQE3cfWLLW3NVr6gZjJQhfeRjZZCexJK",
  "key6": "4y5JzLhVnEFa4Ke7Pf3AgozUdihx11ugY6i4Gb5tYi3TiE42AZzHzRQcjmzx7LLvbamDyZybu7ZkqJcNhE1HGfza",
  "key7": "52CtC52UeJ2mCf99wenBaZJDdmshW9cnurtawjxiKV3TbHPUdrbrtRAeH8hYvNBAT12JBQB5cB8xF58gjcN6dDcK",
  "key8": "2hxNy1HdGCw6eX14w18cUVSYFWMpGGpwBVuhA8X7yYpAY4Z8TWf1KjwnkFRbrTcgdp4iML3wsuNkYJquagNcypE3",
  "key9": "aCq4ZFCYqgBPGPiL7A4fxufiqGPpCw8tVmm2WK3tUQsoGYBYFwHjxTj3tiEBNRwtJzekUmynDkB11R7dfc2wCBc",
  "key10": "3GhF47URMUGmneYPHnk3f4zyT9AafwyvDZZgwK1kuvqhJpEEkmW4JCj8gk5RBDM6Qs54Q7Pt4g5Td8skKoWZ2pXT",
  "key11": "5nUsFmHj2RLJVVEZHcdoG6QAGcev4JkQJoYFsYBRZNK7BGs7FcJPBtFip9Nq4bLCizvUDbKznusKLiWy7g28RHr4",
  "key12": "3HGBTJBDsds2bwCdFvHhmH1tKPnsRcR7Cmkb4yeR8tPD8cZD97GSHMLFpNqMBaANZ189t7eCP5MCKAmtLcPN6jG1",
  "key13": "4m3621Wz86WNuEkEVTQgKfwyzcbazthoVqmdaGNjoMoXSotpCwEyMVPSRzQPdw5DoevyqczytF1dyW8XtvvKnuNt",
  "key14": "5uET1SNy8cu8dwK7G6wLBrc8nbMVajJ7aypQUxu7QxYrhmsh5tztDep28TQer56zvnQpscXvpicqicpXrd6cabhA",
  "key15": "4KVL9GbAxgJ66R6za7snWArLiNb3GwA4cGgeKPAcbu5WD7NvYP2LbPzRTwrq3Ah8vPKMcmT8ccxf4hy87REE7u2K",
  "key16": "5F9R3TtWZZrMeKazwWVsvVdDnN88Qk9pWjZVDpADccVufrHKmXegX71jXpJiaSSPwb8Sf8LjPiyUEFszRx1ZLHxB",
  "key17": "5pEXZBxyk58nZCLtVR9ZH4bVK1uds68fGAq9za8YuQriDdqXq5rwF4NS2C6kF1fyexyk1CJXX9XSZ5j5LccDHwe4",
  "key18": "4BuqWmXDMHvNhHTdcwu7E2VdGWyLKKgS7pnoQvCCDvkoUmTpEvaZXvGCDG8e4ANnEBb1vN2ByhAsiWFjBAWK2hde",
  "key19": "3UWuiVqiWK352tNq7wuoP3PusSXN6AdWnfmg29E8SRx452GnDLV7xH7Z2h9ioV2eCU9eCGLLQaniWstwAt57UuGk",
  "key20": "3zUpFeLiW4BwZm35xAeVkA8P7g8o8NGJSPVTYhxiuStfnbkM7os9fLXb4HrXWcybL3KsH8zMCnHRyPvFMQiiVq33",
  "key21": "5vmCnRKnJtNhyh2q545mUWTBFHLseAZEk8qKESFJRncfeBgACfSEAWfoS9W9THZyXtFGYViLvo8gSpqb1Sifi76z",
  "key22": "5X7tkMYmjKgXMS3NjebrJCdju3v5Vf41cdrw3hzy2pCEPcYRi1aLNVZ1KNAzB7cKXxdpDnptKMEsWfDL2UeUnBtF",
  "key23": "5xakVPUDcTvSUNdVjvPPVNKoqy3TfymNMW5a3jUWr86a3qYkAwjV31pmQBAeYHo5VcihDM5fQfC8KG7HZc1KEzFx",
  "key24": "25mCAJddfYiAJWJeq814jF9uboVkgUutxKJiKu88nFaS7uQZvVAVgXJYCpzHdTk6jdmxtG9vumF121xFsL9Giq4V",
  "key25": "2WoyqQAKKjRR3LTbiPifovY1X2kzuRnr4nhN5dqkdm1Lk5mrGc7Qmp7w6KsQ9xoSkAHQ7RFX6fXaxh2nJidFk4Mj",
  "key26": "2T7rsMDoxWBrUhVG1HfAk1M598jEKa4cuDHn9q6d5Xzxsx687A5MXtj1Eio3PU3SY86T5fzVVRuEeCburt37WNL",
  "key27": "3NCdLtcquh4MHQq3i9s8P2VE63jnchZvyv6E2bAgLzegTZVTmPZduyiVKbkmThFmpa9i4t9QPmEKA2Qnrmjh3DWa",
  "key28": "Vup9aVcqrgtEVwQZGZgsmc4tt3yE5LYawTWoZdBQMjP918mT9XmnUspcjrz9f5gRfBKPPAXR2pawhKsk4oGT1cS",
  "key29": "375WvwSEjn8c57R9RvJizkTveiTiwwUjAyH32pGBDnid5c5KDurk2QBrLdXaA6UrfsHipYLWwRPnDHyyz2j72Car",
  "key30": "2LTv6PV6sW8c2zyQiHErnp7Kv7oTr49W99wx4zpYd2JwfiqZTNJgV1bELupz8CYfxL666fnRujL2NsMS72DmJSBV",
  "key31": "4Va62SUnPqEEfAshgU2AaWqEE2BdG4z9K4qh88edzFjo5Utav1qB9YovqqUJvqtWuV96qaEhMc5qmC44YuacmAYw",
  "key32": "wiwwMVp5jA55NhwS2iAxjjaLcb3xxHPWPEErLdeXwmwraFJWUqoaLjcLrGy4kw7yrUxE2Vywf11VxTnhCtjAxD5",
  "key33": "4b8mucSnQUzBBQqU4GosTUyUoEjj4ZJhsF1rWym655ALG3HqmzWnt6HWKwmgeCsEGNdzh1wa37H6p4CPqe4QGB93",
  "key34": "4EVhQeLPdVKQ5mXUYFpcwuXUuQnBXNAFYpFeyMV27HM1WAbNq32kjqyfb16PjpWN9w4u3PWQdYyxs4Lm1biwgfrh",
  "key35": "28ivoK1gZgX3kBBRDJdW9VA15HNRjN2pvH2fTSh7aw5JQ3zDetzKcTZrqqWGuhehamqMi4DSV1b2zoYwQVJC9JMC",
  "key36": "47pbratoVNcaJogMveNGUp6FwUijY7uwjCiqsADn9d88HnASToUp35PbMNhkz5akTobofx2iAgcfDK7z7aDJW28y",
  "key37": "3KwFBNrqCZ4HsJGLvMckfs5xdbS6SyrKzdNjmfroq6mBffSJCcoSBWcSdfvqBFnhgpz64gyUXxhb6j25xvmWxy2r",
  "key38": "5qS1Y3EF4fWEraWKyGYg5GdCq8sSmuj7jP9FHG2VfFjKESR7oN8NqHqYRu2FXGXRz3Rj21QNwV3LN3ZZmpbv5Uwo",
  "key39": "3PsvrJ5Knze3dHwum22hoQB3V1HcGRwvoXGvmQGhD7TYGx3SahhDFp2wERP37LrAZ5oeAe2y62AyordnViWP8b4f"
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
