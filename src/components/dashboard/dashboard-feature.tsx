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
    "2d5koCUGNPwMjnF9VSj4bE2SytoUu2t2A4GeBH2iP8G2GSAZXfXMi7cJX3bjXeyBNzwmor4ZZrAKc2S5uyKBL4ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1AQBdUzw7Z8QsPfua6MfCNhWTGbNCFFb4KD4vRit7CmU7TCq3BEhFj5EjyQpB9he8cBHHih282Un16qHEeLvKn",
  "key1": "55XiTcrt7FkondnsKAhLa1pCsHvNrzmrXK8sEE4jZL8KXFxxRHa43eL1HPmXCFDCNZnLMfZwMd6WsCPwGeyQKLT3",
  "key2": "63rC2RRmdvWmpZec4DjLDXFamWyVysvv3XuVBzB4Z3wAXbNbFn8nC3exiyRkes78h9JsgqdgQWMnhZRp69dThzuV",
  "key3": "2cYsBfAzmxzGhV2rErsXcRWY8cbUu2tqwTgpGMobSbdxTCXrXqDi9zWMeW3PKwRabdkF8vPQnaQewqPWHxNFuwnp",
  "key4": "Wb6sPsCAUDALauuWU5fERpzbKFKA8EzcfJQLgGaQX1DQuUSpvCdngvZhUX7h9mWmVHWb7WmgQJUzWDGqzuU6Rrj",
  "key5": "5xtxJxLsSXdy9ci6af7RAf9nSsfHH5X5XXmgeghfJEvnzVk6GkkxX1M2errHxATAMvkynVp1kiWmW2kC7qMHxsUq",
  "key6": "26JBp7xsfWRYvfqSF7axNzw256RD6BCEtRaHLDmturrGSf2RHMgqwRMXC3WbBsQiweQ1gQ4pjkBhuzmoo579BFup",
  "key7": "2ANADfeVsy1hHfNzJgsUenWbDBjxPA8kfoZXdp155LSv4PdLrSVzPGYfBjwpKPpxBxU4GouS4RaqPHPnAGWrDLP9",
  "key8": "3WAnkMu5CorfyBnVCYz1Cjdxrq8fvrLCj6GM4265zBa3wnfrVUALevSHB95eiz8WZmhca3WQpLYPK4RWX6UWPDL9",
  "key9": "65gNW9VZuP4qECi2eQhgiopohe4SdtQWz9RNcL1cjnVVNqDckqsSrQoP6EZRhyDYKCHPVc6Wdf6pYR2knEUZLvyC",
  "key10": "6hEm4zG6Hk3RLf2Fa9sJz8aLhE7K1C98KAyFoMJvWmt1vh9QHrJyjo5kvSVGmvyF22je42VV7ptcRgenr98Q7ef",
  "key11": "R8g9sjCsTWqXaWUK6PJ1eK4ShrEki9wehARJ2xXcQ2WCdTHXoeGFpAZtRHxMurWgcCr4r1pwaxkRdxMZ5h2Ztvf",
  "key12": "88dfUVnty5nkt4iCxskwZQRokMQPr1MSHhYL4izJrnkmetvJ3e4Ya31rBtbMFBCQVMQMYUvUhrsHuz5vpPqiCUL",
  "key13": "5G8W8ySRswxcWHqF8vejQ8DkmbQDVhcYuMdS1NZfAXREr6jtXpGMcUdzsfwqWrNPZgCxfx6UqQXSHtu6jYRNxNMY",
  "key14": "5qvnGQjZpUhbM1oFrCFtgupn48LvhH7h6MoQAavHWAW54gtUezySUTMmbUiHDmhiKp1Lhsez3Ly6VTQs1K3Ef4Jd",
  "key15": "2scfqjz9SGKZrSuHQkz3CSgtcWYrpoh7o5ZXxgS8D9GG12qi2awXJer8cP3owgShhQfSqTNwm2GhNpH17Ph3uJVN",
  "key16": "4VxaLD2JKdG5SkeBETHZd2LPHNQspJkKhtTKiiztbjZ1YQQWLPcfmeVCeKGH7scj8jiBYjUCa2M3nNrUTDeXScJT",
  "key17": "22WCGXMn6f65m8W85LGQu2v2cUiFFdRvDjDJSpFCFjnqZcB4wi3bQcmtdQdzr3LuQasUKRsnav8ywpvamfhNxiRV",
  "key18": "uvCKHsqmHSDVKunGHgKDSDRR1cRJCM6niqKDTUmhCrqQZGNfV1LPRnL6VrPFQm5aa93XJmJELKBcGs5N8LQUcgQ",
  "key19": "3tK3SGuvmemAWE437diLMFNwwdHtef46vNWAX19dGgcD1YVDgoQtM6Ss3e22XENEW1pw1SoEJirACSbKe9oDSGjx",
  "key20": "4Lyxg2tfH8wC7pcutD7CeRb7i5P3xRKq4hkyz4UBsD67NhRvxgg5PViXTas5rjXRMkU2xhuHYZhzWwsMzZVb8C59",
  "key21": "4uAXxSgQ3MUtTYkfyNhBPeHS6FLata7UerDsYvuMa2azzs4TvZ3MSjCYhFUjWgYwJmNhRT4VPBgaUDyceLRxopvJ",
  "key22": "4DQpWnHVCtsAKgTR5wUoi8GkbisSU9m89vffo7kAaoyRMHr2ECkX7352V9yqEGfejhtzuTUSba1gLycY3zy75qZ3",
  "key23": "4djuBKSLLTobLbB77H11q8RjGMCyPKUKnUBB6EddsNXm6CeAgZi44xRp3mMhTrs5dkBe7JBJFP1YDGzyVjDkkdWR",
  "key24": "2kGQGQGBJf2LhwSf8PdbBSjM7nboSaTeTUQ87FeLt8ovkm8wzjLqpg9wFGVd1t1vm6PCPgCGoacKjxUwfJcGGo4t",
  "key25": "2hF72YLxgC6H3yGKmwKKhP5cLFEGHnmA1wYxBqcZceq4DARC1TnbaqQodUH8US26LcNiGWduikm9FyC9pewRse2d",
  "key26": "63xpaKR2EDYDnMsBHCm6xBDvPaPU6NHSJ8vVy7ir6om1EGfbZoVN2QLrnHQHBffRf4TnprmbVks5d498iXPW8vpM",
  "key27": "52KcwzDPR2DcMLZvrE7wzfCK8uFXZDjNHXEWL2FTYmWXpP9zvZvP684M6s79r4hnJeQdd88JEeL8iCT779yC3kQS",
  "key28": "2FgEh9b89Rhikjaatouye7KSWatf9ydNYcQZPWeJ9Z6UyfAcBYf81u3A7zP3xBUWt1AnxoWZssiJsUNNrgVync4i",
  "key29": "xTQRpEXrFsK1DVw5Kz9ezXW8mSbX2mDCoXhuHtp3bwwJSJH9XbDya2AXj6abWeQgS6gEjUua5tHew2LfJmENwjz",
  "key30": "oS1ofFyX6ncjRQ1UZ1YAEtNRpsiaAw9QSyNruhUyCaoih33GUfh7Go5wMpBCQsQdVpUM5VohAZvYoRpZktLe5ET",
  "key31": "4DS6goJKnm69GY5WVNhixft4xFzF24RRsdX33Exp6dg3ss9NFB9ohTPQJHdZLJpEvkRsxWKRupN65Riov3Lk8RB6",
  "key32": "4fwWNTVT8r4SyzQ4RCKVNrM6ZP9w4wGw12zmX69hMWo2Ue7N2eq7SLt2YUH5EftqktijKe4iwpphrU4Uhq7sCbYv",
  "key33": "2sEX1wfvGMN97oETLWdbK4XJk6e74pCdjcugxxTnqkYXJSF9cAiYKNYk27A76yf4up7r5D9eku1j9p92HZUtxhY3",
  "key34": "3kAsixg6w1y3NqAN4bHpBHuggkrgTxKmfSotmsxS5HPWPBrbFW8q2fmbbuNHKVCrX2oKBZjPV6GPXjDLKCAbeBVK",
  "key35": "3DNUuMtmRVFKY96y6EcAEQA3S5Ys84HvQxABw5XmvssEbjj83Qc3Pk9z6TNrdjT1EFkc1XMyWr9xjL6nppf2j6nD",
  "key36": "2Sa56Zkvbp6TKj6vhv6bhFknW76dPqP8hTgdoyB5KzxPU1b7Pev38rAfE8TLCJN6D2ZmPXhAekJrZXENZ81gw52t",
  "key37": "5Za2b5oEj7XcktvXRTFPCBMNmWx8W3CNuSwCandfFdnAJhf9SCyAKZiwb17oQAZtostmaWNuEy978rVBmxP7VdSb",
  "key38": "2N2mSmEXtCfPkPYiAqawix59UCXPz7ijBpgG9YVqwmqQ72nbJqSMTWDMDY1VuZ34TDdkEPSdi8BEvxi7CwCvn4h3",
  "key39": "4HipUuTmyxY4TJyCDeq4oq9RiJYBS7FAUW4nxTxPPgoKdCZkWqmJTqJSFWacKJM4tobMLBhcZnSLYfGpxrVoDf4L",
  "key40": "2ZQECce78tuDFo5tu143a6c5SBHuMRx31kHm1Vzq8iimPZwEz15c29JzgfQ9uNiq3eUzdGhMBHoqsc8ZrPUxCMLZ",
  "key41": "5gbGhT6zgXHwKaMxpfao94ru5wZ8iEtdFWFbRqSDeLExaMMCh86wfY2SqqDB1sXKLnV956kmgSYdh8szieEReriC",
  "key42": "Cv7ZH7P7Mt3MJL5zWetv6c7DDHnqqHDSWQMCDVtGLFPF7ZmzFCV9hCdncQLZ4mifpse19Bzrm39osQo7L3BbfEX",
  "key43": "57tySF18vbGuA3es3z5dMrtvxpcGLtRdm6SpZensuHErRdte6Zv4P2DCLdsDNvW8QAzPCkcjXZfx1P4UWeWugrsQ",
  "key44": "5YJL8qVxvazLM6qej2zSYiHQynq7Ti9GzjcKfwGAUfD1iQmjJs4pVxr7hpURdZYSpHy1R7w2iT3YMpGcheikTGrQ",
  "key45": "25DkpTPD4P9sC9sbdhx9AU5epKwt4HXzdYaQHK6D2W8QjEWLSXkXjjKM5THd8mqokwWNrKJbNG6YpAebeZUyfJoE",
  "key46": "5Zjzh9wTHVUDgRZrrpHdqXSPK8C5S9AWKbB94BYsYkXxK4YBizA2vjK68r2fBvH6oaahZYgDuhsNGyB3hB63tBSB",
  "key47": "3C3ab2TkFVM7djEHCby6hqiAwA9KAdwkWhCDC2jvgYfUn5QNBDVHVR2yckVYaxrqXrMgyHGLJUkeKJTvn84Q6jcN"
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
