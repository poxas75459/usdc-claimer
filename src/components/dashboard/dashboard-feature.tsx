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
    "5qevVfREdhVZEKceeVFzJ2ap2xfVS8tQdnD9ZsnomtzEPT5sV12jGh3FhTehXonmynqQKENXt2oz1nzSY4MV7hK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TwjzkK9QyRbg2ZakCFtuDr7trbRi5oeoF3jrcdvVRevH3WqsdRw9MP5YAmxp6GogSuzbhdqUFEZb5BEFrz93t7P",
  "key1": "22tM4vnBqTA77QLD9HjPN7Ki1jXUHhwBS8vWi7S4h6x22MC45fYFJCEAUQBHUF6D8g4tk3kmdgqJCsE3PBaTEthk",
  "key2": "5Bvfrzyg1ZQAtykqQiN2VcTzwVuwBrMEzobT4kdbwgFzVnc32sHDx3V1jSXHHDVWQqZEYcsAP3k2xYrFQaJt2N2W",
  "key3": "oVWUsJxehygFwg7M2XoPa51PTtgYvzxq4xnLbQ2G74ydw9Z55MePfeRV76hs2hFAeXwfiATn1FLns9j4n474C5S",
  "key4": "AyQP3ffJqSby1ZSkFFivJRnC1uZbTYQnVkWdNrvmQigRioQAUnn7R5AEEMpyxaLZsUMvShim77eMLToHQRk3TgJ",
  "key5": "3guTf565p9WiZigKcQNwdytC4QxENpUK35Ni6BdQkvkmjLyzrMPdnTNUd7fVP9Ey1tbhTRhVoyyT93kwkEKsLk2a",
  "key6": "2NiBKSkrPMzYK2jEqVVWKPKv5UcdSpXes81iipF2kqu9sDD5dNDUQFtkPkoYJokP43xHNxB6rbx64UiHCEwTQmVH",
  "key7": "aMv2UbtcABESK6LXATMc2qNNEvu3SKAsKMGJZ1HnDoW5tUk4FBh6tfnSj8F3R5gDuWCvBzAhcfNJZjF6BCM1USV",
  "key8": "4s5dZjgTEKiobp5sVkuuAyV2s867t6ZBiH8jNMNWxtZ6Nrd8taTB2LLRZ6NPFCzGFZpc1WYCdNbyuTmAz618QBcD",
  "key9": "4Fny8paZyV3HswukU9CGjoEieTdSavWfji1nzuqeaSdkGfygyMtTeHkqecnvPJ3a75Q8LyGbrgXcDDXq7GnerUex",
  "key10": "4qsJEpChy4ywVVGS8bMs6GypyU1qDGFFF4wucaWhNvpJjQowprZoE5BEXQnorpwiFrxxreh9LdGpyBPi8fJG9rVb",
  "key11": "3YRbMdj8QYzciZYpXXRMyf7vHNKjoZSPJ3CMwrQqZv5ca79ypPAKdiFZXkJ4eHaF6xDz5z4CJVSUQBNgEKwaGFq3",
  "key12": "643gCxC1NmMpkvFiJCgZBu2uiYs1GzpWRnKYYKQZXugrVsgQ4jhA9EKqidmpM8r1av9MyiajEFS1BUUA4PDASfFu",
  "key13": "4dWjcK6WokbUr2cfJzkYJ5ubCwQs5fphF4vrXmED6tiRo5SGavbMsGAfZjbNxxJCeV2qCszhPLuTzKKjaYxHfht",
  "key14": "3oSucGuut8XAs1AGC2QGLp4eKQkPSMk2zuE5Tbv1SyBSLXtM7Aw3YdhTnbZKu3ABcDn2XajeDYKBhJJ47XqnDr5o",
  "key15": "2Tc3SbFYLAcuv8RBWk5k8G315uMsMnAaxxzMyeC5kHH7TTgjPCiZw6r4dWCM2rQPdqgTM4h9yymheYUdTRwF4uHJ",
  "key16": "5s3Wg985MCXAh45ZGuGLkbH2qsNJsm92RNA1KPwQr2H3xkzNQhX6sKLpkhbnw5akABPhgCGfPeWSJ9eHgEmYN3Jy",
  "key17": "aifpNRcVVc6CnMbdDDqSNTPuRWmw1dvHHBaUezJHdcdJVpK3Bc9CwhZvqqFtGPdjJirCkXJWKS9XCUWpFL1XFEE",
  "key18": "24ws4ky2Kkeaeq8xrfwH5BQ1buMuJVkAgCitkb9gcTjqRNBoDp2HQroaUafBD7fTGTx9MKdZFfCiCucvdH94nsHp",
  "key19": "nwa7fjWWh1FyxxntDGBPknziJQLkH21MEyEPciEnRQkooJTFDwCDuvTyGTqi3CZhBkqrbks8C8jJXqsMWNJkv41",
  "key20": "3ZdYJNpbCyvsqFcooyLwZywZEgCKqgimX4HVW7PGvnzXBCxBJHTwbUC1eGx2rmmXPjJPzseZJDUoUzFkLZEWfgqs",
  "key21": "5zRSbWHJSTnvpdtW9M558UFZEvQXr8oxCRtn2apTyY6yH6Xy7uMajYdnr1gWS43zRR8ugddXushdGLQzLHjs3dRG",
  "key22": "3WVdZsXMcVL6vAeMvNjzYcKkzW4UoTzumXjAiLWQ4JdvBepCsgoEcjumwnCZkC3Zp1KA3jbJ9eAryu8H8Fy6Yw14",
  "key23": "2UEHk6Hyf19YAbTBnu5WfBhFpxzTygSr5dSHZzzSUQc4mEwmw621wotooGTntqD6K1YFRhZ9LfiwrjRAYUEc72mk",
  "key24": "HLKGSNzXCfyqpNK6rjwogKM42dA2qTYkGEwC7drh2AkwyWXWNPKUPz5Sw5ZrSSjeYYE8tk34npCY1pxJXfGByAD",
  "key25": "imVAtCCP4TNJzwA9SLA54pCYSJrNy8r6GCHtebi6J4yQLonnQbCfbCSKfCDyr8jG3z3z1B3oaNHnhG5fCyrL7pp",
  "key26": "4GQNDkCQwS4kdm1Qxu9viZ79B4bEF9A7ydCgzex77snW4kD2g8x2BBp7257scydgm9MwbCJvbRpu7QbAFChNasEf",
  "key27": "5VmCy113M9yhqDsa4QjNkaLCh3eEyhSYDeYoDQTZpEaLrbBgx1iYEDTMJy4NJK7KDXnMtDmAkvPMYBSnsQBn8DMm",
  "key28": "4m38RBHFMHfX646G4TNBxh8FbVMDKExyhFghFrDXn6LDRy9RCUzGqNSokXxc4SGB35jAHYp51Wx4mzSkGUfafxWq",
  "key29": "4rLEZ9tSFecyrWEjDPHuVBvxTcXqH5gK5EF1pMp7Pd46nHvjnT8HmU8ghbMQNpPETP86bwLbU3yZ2YGemAcUH57Z",
  "key30": "5U1ib9sduDnJzBounAXJp5MP76a8uH15YjvernciETQqnDdx6Sai2SgGYcazjAF79tUZTDRhjysvgoAfwsryUhNP",
  "key31": "4aujYEEAH45Yin9yuYCYPBRHbAfRsj528vXRcCX8PPk2cgTC6QzeFANXZsqZeiQvwqKJX3nEu11zAUPh9NMs3XPB",
  "key32": "5qiHgVWyqUyiryFwg3R1NbqCQx6bWxqLMNVQmt19G4kifkzEcq8sN7re73ZCWi5jiqL9ZQ1ysSG1RNYK7gSeseWm",
  "key33": "2yX1Qgf7v89uwF3fps1cRGwtzQrxsMDQMKkHy3xhsDtjaTKssk7SkLAVWj2C68JHuEAZp6chPJS9n37ZLnfGTSpp",
  "key34": "5Ln58JGwGDpvxwpyFXL39s5itYnchsKvGTc1gL4TXGqobZ8dtZ9dAXriBjhZbpHEA3qj2ZtCS5Wftf1Mp1Kcp3Uk",
  "key35": "5SMBBe7j1xAQccnSX3AzESdZefZXyNW39j83TcoEZDVrGQGhYvNKesYvibtYvnetr6mCkbJyye26MMRQvJJHMv9P",
  "key36": "4Gkf9QD8qVQucHagMM3DiMkWgdMoLL8AhbhjmroMC7oe2A59NmaqgznKxZpTTKPbBRKQpMBDCeXEqJsGRTUNK5Sj"
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
