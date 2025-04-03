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
    "3HX8ZCRZKXXW26tuZvPwzrAXLokUyw4fU7BbMrdMn4Y2PP6BUZgjdxAPUZJQeEwiPd4vHW9h9T4jeGPw9ybNY5KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKtArKD3wf9Fc4fu3hiHZ66rhggG7AHHVkkBPwZqdx8EY17pepfJGxwpdZhuVjvr7bB8w3q9JAY85YqFGyGXiLv",
  "key1": "2yqqm7mbjY9rBxkpdwJ7avqmXFpFUz1PQV3vU3wHUPdEtTUZuNExxmEeE25WJFUF342hqtQYtSC9UkbSa22nAEzr",
  "key2": "2ymGrsis4FVSY667peeLHkXA653RxrZhq3wtifVViacAbDbKKuPQ24QnY48peL4DnNED6TvioaTwvUdbPfwPU9UK",
  "key3": "3WoDJGR77vEmcUs37QQMeELYt8sEJmgFLFJZduYX4ELZYjDsi5PPYMrs2yE5So3fGV4SF7uParsh9rG4jtc2cAFS",
  "key4": "57aRR1zBvXy4Q5soCkLU9d35CxvEJLWxYjn5ZVwzqP3RvQd6PLeFRmVvBeLVaqo5AVXsXHrwcHeV5W4JmvkdMgCD",
  "key5": "2Jc7oHmXUt9NthqHnhEBeJqBQuzvTizcA9SvMTqDw3XYJu8E3LA6vW7GMBsRewQ875eCRkcX25EpcKoNaUNTFjB4",
  "key6": "4JKCwnBgBd4pGj4Kw5buR3fartm3PA7JmuzDD3dQt3TFuuvXwAFAT8nvgXaAii6PKsBbvJXzEZn54U5D9artuJhk",
  "key7": "2woSAM61XEAZzCka7e5YHtCXfh1vgCEvnUgAVB8tivxqyFoJDHY7EshdrqQn8LADFHZRtVvpobuT1DVjshmK3iBg",
  "key8": "3xCu3aq45ZRKvBwFe6Q7VZ1UQggidKgp9QNiSFKxBZqEdnY5QjXxofpvjN8NJYUdTmzMVZFmsxLB7DLvVxnZhfNc",
  "key9": "2HXhiMGCMQizBECsAkRNkifV3uD7uXH5u7fWGY28qBVcvcowjbc2ybCykyqAMsCf6RMUDbMdwM6JbvzgoFRRWtkN",
  "key10": "47hGXC46A7qxCrNKfcgMQvPRKYDFA5kScGP3d4BKCyWHwEMpvS7L87Ajqn1Q7jyQfe3yTUGdQvmHtdwKSUUKw6dK",
  "key11": "57JSV6b9h29Md6NFyfkdjkdufNqo8cKrhauBnLh4mF3z353YPgzCjP7ujhpMz6CGTmi1vbNuqdvciWSnAqN9X5yV",
  "key12": "4c8hhm4q7PXi82UgFuVmMXoBjbAnZkLAZ9GF8gLtow2U2tceTbWL82eH7tm6mhpDsSrj9TAzEfu1ECfX5PUuvETh",
  "key13": "3hHHbyJtzJV6dGuBwf6XihUTg2qPzKbdbUNvSib4cEo8BvwBzBxpP8aPL2V5Se9aDgnRv1eCYmXH3LzcvWL6NToV",
  "key14": "3aaTb2mGHpuTmA2nvYEPLHYuBxVWVCjqomiR5TWzBQYuNjLdxnoVViYYwS438ZXJ5jewTkh4XoTCS1A9sqqVv4s8",
  "key15": "65Pu1PKuwSLZVX4R2tBCzmtT3StUH4zXDYCqpFBR7kzKddR8kBF2QaBWdee3NfCxb313CyoaSnuRvGuRPAGFRjJT",
  "key16": "3hLU7eWoiQCavYqN3p7RsNhkphzW4yWbJmzvFrP6SQmZnp1FjezHsJMoUDdzJBZYbSzuVQo4dAGsYZ2P1tmE1rRV",
  "key17": "3ueecicBCH29WSCzPjksUP7DmTBo8X3BHpPes5ogRBR8GnJK4qqDAeV9hXRKhaKnSmBtmwPuBQgA6xz2m29UpfXc",
  "key18": "FFxaDukZkBK1bx3Bjw4m5PL1DCs7RhJhFGw13zFZMwnBiDCS5j7rLrrTmB9xaHvhZdAuKRDQ787hgJ2v4bHgsQv",
  "key19": "554VGC1knq1DrzTBvhyyMSi813SQMh79TaTCiVxoNy3yFZ9LVBERKkce4QUvWudDidjs85sHDwCUXcBvY8e4g3aZ",
  "key20": "3b4EsPxDsg2Prgxy6a7nrEHoMMfE96LLDNz9U2qD861QKC6GXhG4HhAiufbN47Dbpv2HfyZ2tTvBBeL6bpRia3vG",
  "key21": "AeSDLgt6GkVnPkVaK9xCuhj1HguEvjCQcLeDrB7DYQBgdei8PBa2LnM6xGhjjMvscmCT7XyAmfrkhf9jcfsm4T7",
  "key22": "5DNBYvjiYBJZXdwFN6t7cM68PUyuBTgoX7Tas5sbfTpR5R6JZH5L1aENCPeMh5CZqLHiJ5z5AZWku61wmJbWjraK",
  "key23": "2AZcxtnqrffJBzBkZVsvcL3AswJy9ZrjQ2pf5JvAe66pneezhdMv55FQCPGeU55LzgTpVtH4A7EWqZmbBuTJdSK5",
  "key24": "5xxEU1BHjxYBrVHuzWgz3v9UUCb4gtv3JwoeuYgehRvN5MwWPffokhU7bxFvY729WHoFMUPkXjWcQ5hM1sCSXUsH",
  "key25": "UL1F8FaFo76C8oEtgaRoQSLYQZeTfoKco9ge1gfm1BViWNRaWt9ZShWtwHEYSgVZXYHyN3Y2rxNCnHGhFfLi3S6",
  "key26": "57K9yT9b1MhXeiPrnosFEQM6GK8L2ebFzDetnbTicMBZWhKvzREiLHyxo3qVribijUgHvSshkP1JzbgJdqZTsY3M",
  "key27": "3oHBgwPzerDnEcFzTUwdqfKbZizurrTs7nmSLLhsEr7UgDnTwmMXUzM6WZix2QXskNXEoauFgeAoHrbpvzzBavty",
  "key28": "2jkBCCgeYTWpRXs1C27H9WAyapw9igqzAbq5N2UYE3u776a1T3w6XZJJZrtr7iB3LEuTXmJ5qXmHWJh7pAihdjya",
  "key29": "3gFhw9G2yD9iu5mJMbAqTz7vvtwggHXzUiytt1CgKB2cgW6wsyz67r6E4kqoL35fzk3YSBVq5pRUQDebZahU3AjN",
  "key30": "3e8QiMEr2GeTQWqAxFrh21mpKyF9UfXJGzkbB7qDPXoDS997UuZeNq5JMi2iKB2KMQNdRQ7oj4GrdEbdfYbMncPZ",
  "key31": "3Yi4zLuCQ2yFhcHtX7yxa95nmkV3PtNp8DcNRoUeeYiyzwFumDF95yhdh7a5xrGDwWeQUY4m1fG4qXposmqhnUHs",
  "key32": "3JUQK5XwduCA2m6QH8bnR7YsxjJcogFypRvzMNWm1gbe7VjFL7XjBamgMpaSBrPeV1KKCpspGLLFA4HRNVuxPgvg"
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
