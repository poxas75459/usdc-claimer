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
    "8XZnkx1nyXjExwcgh5Pg6uSZ9nv35ztfC9R7mbdyGKn9gB72FPu8vFxXBTKDN6y7ZvjP8uKqXBANPy9eZCzyPDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8NsCNegwZQesZ8M4RSMBuP3bbhQaHtVqw3ACdd6YprxFLBugfsWGAPZ1HCLXPUugiL6aU87y63phf8LJiCkQY2",
  "key1": "4w1MKRqohcy7rmCe6XeLNowPuUKYHVAvb4xXNF74SrhkFUqpY1S8GbMfqNsjZqgCi1cGAhSgPvTDy13EGBVRq5Bu",
  "key2": "4xSJhyLDjerwEkQ8bTztm2bGfJdrG62J5UTtVkQVij7a6PrmuuwXo3XMQdhLJKNQv1WvapYNzvEamYznj6a3jCo8",
  "key3": "2quWBdQrFoA2QrutPTfTJTwkoMtMmwk8yiaeAEfsCyBkHsGPmUyc9KCJRsUaRUbYsWFUgDo4zyaTXfC7weyYKro1",
  "key4": "aAD22oCny51A3Pcco5wN12ijYRG2RzfPjVqhNjvoN89Te8ZjWJqUW7QMS5RXvZAjA5DqnHJNMzx72YyvZNnCxiJ",
  "key5": "5AZUgP3bMxYRSn9r1weVGnoz5phmtsRUjYXzQZTis9U5RCEpDEo7uL2fekya3c9hatXafuUWA32tbWW58HEBPdBC",
  "key6": "5UaR7Rzk4Fred3y7E4WNTiYX2hhh9mwS6PB46L9BcPyncty6odvPnWbjk7WnMDnjWDB4pjT8LodrsA1RU7nsFe37",
  "key7": "37SvKW1G9SZH6N3h32LY2XZSenM6WDswwhsScDuqqi9ZC1mUTFcikgjqfH9YDyo69THMCmkkCRmUU1biYgdMvTyT",
  "key8": "4SZkUk3WRD3aXf7JucUTbnYFDGL5SESXhMhe6SpZe8NDtjCx4BxPbdEdkWq1yK7ss5mRwNZ32gW5STvSUpqyeT4E",
  "key9": "5tYDe4hxu4pFHAx5YoF9unCP6nNqqdnH53qAksNbzdnhbit6ViaL6nuNvUjrvirJkoHnXJFEas1LENJ4aM6tbZxv",
  "key10": "24Kb2cPtdJaVgwvf1it1vJE8yWHGXKwVQhKJ73qP4AqwBzmdv8tMHDF4gG4TGELAF9hiUAUNCSsVA2FmWVgjuHKc",
  "key11": "5pfwzGgsqGzzCf5rH9BnQVzPMuEz8ogiUCrJtc4oqknAG34tZ36yPREkcRMzQ6cBxLhBYYbxr4ppLdXLYbXa77aX",
  "key12": "36a2GgDavm8fiPCnxn7MDr2DLzrrYdx1kDVLj6ekiVsmzbFDS99kmjxDXP4qvcAAvqf7sfGPsFbL6vtLCFEcTxRp",
  "key13": "47tErfXN3m7UcSCBRzjPepqfqoNaw85p3Ae4QQ5LCrX7ur99BR9K3XkJkjBygp2tdG1gxtn6x3oWUfbot7CAtAqe",
  "key14": "595jTLXhwGyx44WUeuKFErPC6Rt4sQNR7emw4QX5E3utBiz7MjM7T82jz1k5vuHvPavJnAmMvBuXfkr3uZa2CYtS",
  "key15": "4iyjp5MTeQALMpuWdJZXRtAsSSyC9awfZEis2gcYWfickUVM3zQpS9QavLshMGw5VYJEGb3mhbzmoEBgmQovpAWS",
  "key16": "9ncFetBDZXxQafCWLTRhjkFXp9FA3QfJnUMS8fAbGTGGk4UYbdKt1DM2eQZ538jwpqDQq1N9QwVPonoXjEnhh5b",
  "key17": "2trWPrLb9Xu6WexMHzEmwGfm5b3HfmpqWwMbzYFGKNYDq8k7CjQZPbktkEYdTMZ1R2zE8HQzCMviA5xtSAivqogQ",
  "key18": "3xXahMpScidb2eyyCT6J6Nrpe1mC44CLLzzibwyXZm3EEtNxMC8pCdSQc4QkBsQn643ezNq3erGqQEHTsBM8zsni",
  "key19": "3a3Uey5D6WgCeprpFqLU8njvPiBxJyAcjpunsocg9ffeqbsamPyJJeH21to2cZaYajuKmB21iemUyUxsUb3tzhF9",
  "key20": "63N81x7pQDxVSgZvcV1UiPPAQGjytZLSUQ4cpqR9fNU9BkYsE4EH2QvHTZJMbSdnpMbEMc73ppRsQdC94KkeZV19",
  "key21": "4HQQ4dkqT56E4Rc5GDwX7bJMgaoPyX9ShD3BNksFbvYDUMjw9iTjsVV16wyWjyUwKCWrSiTCUvaGFFr5t6mvQexf",
  "key22": "2paxSSQiUaSfnUd8fAiwEU9yAbGJRJeW1qDLyGuKpptPzeFEcb4GBjsFKPY4yRxaCmvkYZT1ERenjsePfWhrgTYJ",
  "key23": "5V4Xc9k9M9zK7AezxnhRFzFDXycPuzxESL6sNCR5FcofdKazbD8jCTWbkmbifvsaizWUVqSQBuzhFHonCiDsRd8Q",
  "key24": "4Hcvf5Lxm7fYR4fY4DDwK4XHwUKCkS32KZbG2trSBMzLF2Ky94rHUNtnNJgiRaDsaqMAMeXW3f9ymQbgQ1dhpsEC",
  "key25": "3qX7a7GCssHxLAbzZyUG3xcMX3nWf8D8QuzLCtMJhCFoYKmVt5NpHmJj9AojHx2dEadSXURWqvYe6aYS1Ao1Qyqk",
  "key26": "3NeWQZzrzYLLuteSfxTMgJPtvHwB872zwzYk5NfUyUNzWFZsV1mpqt3x5y7pAC623D3sHzKNEvCtxmLt3x7QQX1g",
  "key27": "2jGzCe48DACsgt265t1Eio6F4HarDD1PwppoNVfidKRB8BAZ8K3uArM51drQQ1z35sEyeDr9v18R7o69VFakfyqu",
  "key28": "Z8Mnr8eVZwR1HKtsHvRnfQ7hEsgZu3iF1SsVA7gUBCMhX5ciR65rQ8qeBwBn4X8zj9y3XPBzLNUU2NZY1XtDvVf",
  "key29": "XfYWwAbYuENJN9zc5NxPWsFb4Cs3eUkVW23aNyehsnZ8TQAtmtCKfGXiPE11a1Xgx31besqsLJkqxBubbHs2w5S",
  "key30": "4CjxUykeaUk2x3QGA2iU9smGp1mnuJWBh5PbGRzewqqXdGFmbhMnGXTJXfahWQi3jz1Nw4EYkyy3sAzcQSQK5ppv",
  "key31": "8Fmwn2JjkTZZyUZzaWZEqLHZTAfaz4RXRw21kHKMDxKpWTHMNe8p9yiKXSPxy1PQ9jU7DpFtWhqhwYHY4YrBcWt",
  "key32": "6aUo6AswhE4Sr45SztXCYn2KZVMc88LRBZ3T3sVEsgyRu74AJS3E7W7zjh2uYF88VqhxP4fBMZ9GHxmLw5xK38W"
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
