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
    "sNgviEbBtwJcFyhfe8iDnMVSVXcFCCS4fMngvRHk1UVpAPbKH1ReAEQHgb6N42hH6ET82bAYwPpJRi3hE7gHiqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Eb8UwYGGgtdmChrS8gzHrcXMbTtqqHDTZ3GUkkjzcx5xnVpA21q38ZiCTxb797nhtWxwutup6mgRAcT1HT3Med",
  "key1": "hu3hAUBuEcPMKEjfYhfiK9TmyZbgqWnvymYgvAHy7RywkubrzcKpa1PytxphB7tdEg52B82utpAiziJCVqBeMDm",
  "key2": "2XyUEjphwitzCV97x9mRvnpGVh4MQfP3MT9j3eGngEDriKYPX5hnoZXiT3iww5AsQBz54ze12fTfLDR6dwiarzjH",
  "key3": "3HmJsmNjYJAiXJTA5sCUZ4sQwMMJtVuRB8QHoxRntJDYL42n7ALxDefbnBB7LYNqjfZVm5LFJXeETvnMivjeLsGj",
  "key4": "2fAUxCNfu7tCKnRSo1pRfYvddX7BXGoJTNvdcuvyUdDb11oNnZz58AytMzW9RHPkm75NTdyFVCrxm4zf5dj4Szp9",
  "key5": "3hjfQg2o2BsEhUsTPnEtWpaKy2eXGHdAgYPyQPEH8x4hh2GJasHLfaBgPj4FsHVkcy54qY9C4GAy5F3RWEG3RjuV",
  "key6": "4Xc7hsJPDHhCtX885qZDaiKcLV8PCdymTDhgU12hjLeBFnH3Kt4NEiGmuDwYntXrYfaVxDgb8J1wZPpcnxYEgRjU",
  "key7": "VBxDsErGe3Key5Pcwi82DUjnDzgVTwGUUq5oKCsLpAWqjwuxB7fqqPed8ZWQ43fUjmbKJk7m3FEE24D9UW5jPD4",
  "key8": "33mUPKpX8AurxWisdbutvzSvJWFz3HFWce4Pm1hx4JFzXx8SwMnyZAaxrUCKAJqBmEBXByDGQA5U3bARiY69XYXt",
  "key9": "46dr2Fa1f2N6Kp56t7cRkDAsKpbrYgko1WYkdfnvEHud34tWbfgZvzbhaEeJ5xzWhd4TTA9wJumrsHqLBTXt5D38",
  "key10": "3AV3gquPqFZgJD1otFJvYqvrgnHcyPXKz2VDLC8hwLZZsVKq82hVKpYrbC9y7GxnHHe3fizWppfg3FH9KsiGz4jk",
  "key11": "tYrpAkYBLG6SyWhkSghXdLtK1YCki2B1RE4CHzu6AWCteUNoDo55KHyQ7gTqXMN32zbjGuXQvopfrDJyePjb92W",
  "key12": "2r5R4LTNuyfT1xG97o6H3FNv3u4bHt6gWKT4U9Ga2H8RinTJXwsUy43pogj9s13qmzCfZsFjggFh6j2G4EJubzu3",
  "key13": "4pT1YKnE79yV4WEVPceUyRtkP7ZzT5s4eKUgpjWr7bFk4PHQWv49ScUKSoKuvhtWUeoS17Wqt7MhqdtABAN9k91a",
  "key14": "3hXi9gdK4fyWGj1cEEmHJ7hfDV6sDmfMb6LBNVW5fmiJL9UByGjYXER4q8hmzcz78duTiQPujRDF6Tfb41ub1ua3",
  "key15": "3ypzHkkxwqgvZXb19K4uVfXVbQPrQ7cqPpM62gEXhb5TGQAiCHP6sSmQ8TsUpGU8gGrprFLuTtWEMKkskp96eKtM",
  "key16": "5FoZugnLGywMiaR8vgqyQjZQThzBxztnTA3gpe9GSKSbCWKnMZB8HfoBHeeheNb5qZNouvYMFhJnL7Njks4dR7kY",
  "key17": "3nLN73jtmz5ESX6UDzvcw9RerL5uPGHqXwsAx1asXHNA8KF1H1dg5qCZM15HFQ4wGH1atUurcV5pzdyZUr68zCSi",
  "key18": "5szPtCeRe2j1i6CK72ofZ2geF3uCb3FAEkDFKf7SY4v4jvXPxVFzhzpLa27rB6jD4EpgeHiHx8Au711dmeM8mYnY",
  "key19": "4uwVSFFvtYFgHW6XCHE3kH2nphRpiKwJyjgGNds7xghm6rwa5s3hcU1YjzJhcNdTnwjxmaUzDHBsiaCEKwpUGEVy",
  "key20": "4fWLnoH2QUeeYkMFYr53xQ5Z5ctSYVM3bhy1yVuJ2CzWGm5vDnc9k5ePY7Zep8ofxXeW16zNgyDUagbDiZhsaMwC",
  "key21": "3YGz1RdvxVUhLY9CNdTX7K96rhcuix4jzYA1Tf2Pra3BiLRFQAumuxJHzHT3vNwZzTXMYFg23kTcSJxJ94MH4zxv",
  "key22": "3jN9WJ31KDqtQfEVoPPyRYt7e3GM9ZSufiAfyoNxSnJQ8zyFygMunPJN2bXVJb9S2BkKhYsLpu27t1XfSEpGuwUu",
  "key23": "4bmABJZtqJu4zqK83VmmZG4CZDBS9xZjcma3oVem7hmxMikFHYbsRZnspwx9CAxRCLpDQs4CGyQW1MDWYCTNCiTQ",
  "key24": "gY9Pdy2reaXvPF7FNGQJiVEUHZCQN7L2vKb2EnhNiXDWEcWzkPKW8wTGRHJP9N5vPP6uoYDJYQvkTSYYdGVJbD4",
  "key25": "WD9dyYpm7LvN3NXaSz7NgvuY3fZWc5tapVvpwtbX2HDdTno3wATzHM7VZXCWD5D8RsKbkvvniMaV9FwTb3CqNUP",
  "key26": "2ezRvKqTCLrzGDD1gjP7945koVQ6zT1pZvP1QM68qpENpPwJQKxbbemCgZC1bZavQcM7S6AcFqqtwQEbGDNHkq9f",
  "key27": "3sMjdBrr6sUa4Xgc3LSeRR4DYDj7ZZzuk1WJDc9AqFrJwCdD6sUxNA6Wt6pDZDe1ursLLbaeDacizibWBr7uv4Q8",
  "key28": "2qhRB5t91U6C5C4wnUgNXCpBrP8wEgntNxGuMSY8nGL1RSiVwXFkDPi1wxUUUzZk4MB5bnWYfHzMM8C1n77aqWc3",
  "key29": "5T5nxegXQu2KSSGpvWdKgiyNfB5UTMHhmSxqGRmW2AHA55V6V8UWZQgYbVSXhDHq27BRYuH3Y25x4KEQPz8vUgeM",
  "key30": "5rmDFmzKFi8XsAsVyZ26UGsR3rSeeidVpPvJakk7NZLxURhqDER1RD52qb9npWAJ6Gv7RUENohfegz3EpqjvbNxB",
  "key31": "3p3u8AnLKx7BPkisxAsduyMss59A6z3H9piXiaYpnvL36mzW2TcW5dASUXTGnpuQ4iy7CA5Wd94EAgiK99MHD8hU",
  "key32": "2RdJgQN9WXyJYQatYn2CTd6Ca9EVUQogLYG8sMMqx1XJK8Dx62taPsvuoxGZnYh5HGs4Mo89w1aCtcHNab8n9HEa",
  "key33": "599R6rabngntg5v34Lj1ZJ1UtMLn9fYYSa4WN53vRRomH2aw5nMbDP6WikG1QqbSSSRTQZznvjVvg7aMmS6Zj4Bn",
  "key34": "3PZqVux1TTL2B7fuQqGLamgbap2Vs8q5uUa7ZXWP7XMma2ughszcq3gcrSGPLLpVh4oAZes9WwVFahEjYShJMbZM",
  "key35": "3cKuQShNKWYebKpGVnfv4iKQ7TJ4Et7rufycaU9WmLbqxciVkCYtRLV3LLGqvJcRxk3qS3fcD17GcbVYf3hvbXjS",
  "key36": "4sfkXuhhMKZNhW1qZf9ggDnc2241hDpNwn2CdEVAHmVVRGR9J9mYxqBdnuLAhPNSNV8LTM98AhvsMpaaRaEkMm7L",
  "key37": "5LyCW4so6EW83gP3rZq7WMG2m8oX8U5X7z6SZ7nqo8o3Zbjuc7ud2foLnNkzGpHPNvKXH74jwNtd2BFY89wLMFhy",
  "key38": "2Qz2nohQQHdB7HskTPqLoD7MMCcps81frKqcqBW2fVPWpgK6GMhbZ2ZDfVAwzSDhStcFNZBD4oAqyRuAJzf9PDKa"
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
