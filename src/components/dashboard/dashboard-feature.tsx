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
    "2ZUJb4NhzcgJbZwnG13JNKLVuy4yZaBBd751XRuW2JHsCcCQW7TD4Ehs6HCbMMwb4FbE31XfGJW3Hwg9eNRMtr62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ajYKv72DhgkDu8kuPvvGyxjQRCTA4kPP2V2yciXdNfz6RsnVug2QjYUehnc2wevsL2Vnnk2nJ36b1qZUxgSU2c",
  "key1": "4Nf2473885jTMjR1fkPXBXu1NGFsjEngX3DQyNGgJabFpfsjXHGDfBF6oWGFXDWsocyJRY18YUgWmmcCzU1U8SJh",
  "key2": "3vUhDYH1RwrnJ4KvoekuT3Q28m4BpBAHGkfDasTTPU3odmpt8na4gtDkGjGyDybdrW4pz5YyrhhgedNQpAWjbvp2",
  "key3": "5p8Cm5cMXJEn4WpUMzBiJRbFbsMiiZ3UnMUDWzvtDvER5wrZ8sqKACTeTYGqbEiviunB7HkQ7vjgWPPbcet1uKtD",
  "key4": "5XjvYefn41WSmVEp4Z4ZpPsd1rsJoPouVeBj99crbNDp6UZcsa1MkKc55hsb8FRL3j45yAvEPwKmfN4SzWHL8ZGr",
  "key5": "53tYwwimAo1bHLjdXW8y3QomDXK2rNq3acuGo9sLorSB139KbjoaimLMRsAHTsm2Ay9ie1Qvy2prgnF9sQGRLScX",
  "key6": "2iSTFZqhusNFmuXoYAd1XD6JSSBp5r16QwJc3PsVN9kMxZawHEdAuCaxzjXmFBYcnDgUNBYKxjKSyKYKVnLs8qiD",
  "key7": "3aZ1GY2vjDFGYjhq2e9CL6bZmg5NT5iZNHq6SDZLcuB5a4MngQnqHvwq6VTt4QKQjriVXvQg7sNkxk5HBXi4RCh9",
  "key8": "5yy4c7n3vzLozSnsNYH6CsVuYX8NcXuud638pbvfG2zDs2ykGiSReLsVF56ovWUzB62THZgeKJVQxARsbVxBcFLF",
  "key9": "34HcTzCXgw69dQJp9TjymaqbbfydQKUVFT5dS3Zypp1yJ5q4iju1agrFc66NnkMBLTzjc6JHix1rksTw5JSwz5gB",
  "key10": "5GQ4jX6XdupQ5bbbqVdUYHyWfiXiTUcccQuNbUdFYgPCLKtLS4YXUEKbGDLbbdKAh4ddUJXnEBVHkhgLK8vASrdh",
  "key11": "uR1sKNANfbwRcMauepeN7D6JQcwKnEn3AX6s7wDiEFfbgncLrxGnUTpz1tjWsR5s7QNt42Z6BB6svh8Ud6Fu9Gk",
  "key12": "3b9R6KwnzZLfx73acFy5dvyuQuhEt1NfnWu3FLWbbvrP61TezCcvmfuzTQKXQFtwmScQPCSgdUiPVJZsQeCF3LnK",
  "key13": "5Z1jdUHUE53jY6X4EQY8L2THmcXgjG8eQMUnPmmsfevAjFe7u5fY2fQ4Zwmc8znr9YJafRU4cZNyMYSqgovsooDh",
  "key14": "4ksiA9bc4nw8qHtDKbeHvytLHJ9zmgeWujd7jjGNJuSJkkSNGqQRDjaiEfKR5LTQJLNcvsSii2Z3erHaER3h6hNk",
  "key15": "4MdAEz1XdUBK4JVW2F8La6zLmzUjKRak5Hkq58Vm8vy8WdQqbWKVtwric7eHQrW5x6j4y1Je6WT4uWHz7W2TPDXv",
  "key16": "2aBg38pk4W5advU2rWrZwsN7JdgcY6cPwsrAhHBS9ANi2ChdZSRHc47MUWE7Yvhk8MSzfvmh9J7K8xdmwU4ZGfWL",
  "key17": "aw2YEo4UNfEvG3i3WAx5FzLP5qQ6UNtqFXDcGA3S1T4FCFXpw1p7EZZYM7TeuQFjy7GRnpuiQDkcL52J6Ry18Li",
  "key18": "4RAEnJHH9oxj8XmyuLg5RYKxwtjarWuGdJP3oN35nc6FYqEy86oATYTecJWVwDbtCkHhPsJRPSH7acxYG2YLEbAg",
  "key19": "53ms51sYrjq6uc3peHU9yg96RPSWCxsvC3vEmu8sRrVzW8WNjQN69zF9ApqFg9BHrWUPWoWjdzVRYzmocFAZLSMM",
  "key20": "KQBeqdpuRm8ovRWH8dVkMSzVdrmWjmA12ibfXqRBTcNZ3aJksGe7PuAZ16EGuYcipkbLj1g6y5oym5rP65Xovt4",
  "key21": "2qqr48VXzxLFFrbSh2QMmvMPpAJB1RMJDKbhJZbnwJgDnLFTZem4SunCPVTjKsihs5SQ1baUPSALeeNxJ31updwF",
  "key22": "5EFXqyeJsQcsbaA2d1UqjYjwWohUoE5DzpT58FZcWWC5pMeXyj4hCsc5ckYmKe8XL5sABkrq7bT2eXKq1CWBwA3",
  "key23": "4XcGfyJ2nTbcChjpu6zYeok9CYE4oMWuS9RsN81s9BgzKSnEMLr6K87fttdxqbZuQHWqJ1scu8S1ruKCdnHxYzSD",
  "key24": "4R7nrrrMb6yspXduERZSHr1daxLT5SFa4AYEmof2ALYQ2VyQc4pcHYMNSq1w3TcfemoFYqhEgTYd5DC9cN3Ht11x"
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
