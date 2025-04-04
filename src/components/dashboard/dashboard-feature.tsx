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
    "43fLcCLAjaqnyWwGehmtWJ7ikJxf33pnmD1T9NU9JyWSsMcRwJvXi3XKaHmV4GVUPGCpbqHPedm9Ne1LEzkbRibZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWDXVCqfXfYTXokzpKuuUJ81R1P6nTAevoAYTGPzooHfgnyhP6BA5gTa8wT1DzNs8Hri9cKt3ze21U2UBhQRB28",
  "key1": "24P9gWdQC1h42pwPzX4JTXLYbtqpFmsdyqERRpWaY5LC9n4hMRCcQEyh6v5qTaHNs1Ls5KHs7cg1rHxPjmNMYrR3",
  "key2": "4GFbDNckBk2axsbs2ficnJTBi8EN3BDNykXtLBJHUmN1UXKDnScES5bH8A4xTEbThbHdBzVAnnHxt9ruTY2hQ1en",
  "key3": "3Li7EdHMxfSGXKSCGMsY86dc1jPe9hw7RohLJU7B9wSyVwUSCC9MppyZubq2J8dAsaztYGVy36fU9Db57DXb5gTq",
  "key4": "5FTytpAcLv35XvwAsBDNn8yAsR5a7UveqGGmZfvYo2tA99H7HB635K5jjPu8TwarseL8ga7GvaCrTn8XCm4AAurE",
  "key5": "3MNmVBuZVi77eUd3DvFHmEvxprapcYNkEdUiV8NhiUEHZTiPcBMC78cnMB9Xx6f1ayMybcoKb9ZGoeb5ej7y16KY",
  "key6": "3tPjuDxc3zYmjnDqqBKrws6RKjwXURFsUDEVdxSABKC8S9TSK3mtqR5TuHZ9MYQJzaq48tHLAuETQg1SeBjXrpqP",
  "key7": "dg21asn3ZyDrqF1AtoyoGd7Wq2rX8DgokLQam515oHn5PZDvPLBjeXDYjBV4H54FnTjFbbSVW1w1YRA5Qa3p6ox",
  "key8": "2K2MB8nTxXMngUbcBspV533fEjRhJnpdbbRgcJSab9jg7XXzNLNpzWTJVagc9h8LSJLaMb6S9Nk8qdXQFLsbXarq",
  "key9": "4VfvxdwsdZEz7hp6BndSk61CzxAtEDzExxtX4y3nFL6beeabm1eYKSSrxo24oUUtEadH2qxzEKsqyCVmmB2Cuyx",
  "key10": "3vgWq8cAxj8o8AjHoo9fLs77Fqpznn4HXZVr8QWhAxjJYSbzSVQqvXJDruEvHp5ewncZHk77si8XrsZr7BwXaFN9",
  "key11": "VY5sZcVJoNKMDKZoPvkyJAodgbExEECD7ANcezs9vtCRxeFnMRM8CZTXgKs3fU5cVJfuHwhXhhPptEFKpNjny34",
  "key12": "5uX5bzD2r3QUtdtA1kRbJ49hD8uhQf7yxP8VUf1y58hRAjdHG8MLM8DwuHK72abuwSazQuiJ5v4YZVWFzHNtWFjS",
  "key13": "RqfBCJxVH5U9uqQ4aNifXQvezS8Mb5dKR3LcaDuaYNsvimZMqrjbbtdY16aRrwKzvTYiFZfB5H4mFbH6xu5chCY",
  "key14": "PXXg8Wo2P3h89zhPWMo5XLsx4ySmamzC8uPXZ3pjMR3ihrdcbkuLAKWGmnpkdygpHRZoBeknZsdVjsetji6oV9S",
  "key15": "2fHpZya85BWTR43FefLh73VpGBoE7gUEYfLFVpoDT44agPkPzrNbZ2Y7phboQRNhHEM4tjsEApxtWTXXEE6Xozgz",
  "key16": "5SeY9HF7uPbpUarfmAFr6vycFvdJe3kvcnexwAFg7Vdzk9t2eSJwdNTptDWXeEX1WkBHZaNETwrxCrHVAv47zRes",
  "key17": "wnHAansdn1mc9TyBYYvwaML52e2oQ1Xfgvcq6PKGi7V7zWtL91AxLdaTpMjvGkmL5pFuPieoU6Ceov5R3CmKeGi",
  "key18": "5ZeTYHy5cPBtpN7dAfrTpZfhW6y91AiEcCxH4725gmHEizEkZdvKkmj7MW94NPQoPYC27kdjQfMMWiCJrZLjDqjr",
  "key19": "f7iaLYZvcEVFhLMwYbBT3t5iLgyRwCvH7o3umqobrs7c2uYG5kj8ExXk92ZafLAxhXB9H2NTe2HwYJ52AfkWnCH",
  "key20": "5WpowybxB9CpV3Y8aDLbSsAXAhrT4Q9Enmv8akfyQJCJYpDFargjKAV4owphR7eVgWWPZDysia9F1iWJVgWovFNy",
  "key21": "PFZ6zwbPhvQSEJZeg11zWsz2NfjSD9QkMkCEQh9DmRuSgYPMeNyNLMXc4vR5j9Gh5vemkaURQN3WDixnZG98ptX",
  "key22": "42kPsenDb11hHj9E1fdcL94snD51dwvjogVa7v46s7ci3uNg1ZuPuookzodqXsTfiPyFWvSPtLKrtPoLAmmtnVwG",
  "key23": "RSmmpWrzmziCnTZSrzKx8SfWURigw85kDAnS1LhMFvdVmFCx3XSozUixgVswGM6bywNPwbnV5oCA8CE2H61zS2r",
  "key24": "5q8gviAmCEMZcnwub1egZ9ycwfi4gCQ9aqXWHSpAiJAQnaqt26ieKLRuC4HSujBNyAg8PCU4HCeeTHfwpxMAzc1s",
  "key25": "3MjNeK8pNqf1ztoQ56dk7ePwhF4qDzrfgnyv1n3VhLp5svYE2k48gvMqGT9851yRKACLL4uJfjp4nzwphcVTunkQ",
  "key26": "2kazNCxXJ13AVaWQC6gaQ6DJyXC2r25k5SCAZNx7LePPDdJNRSRhxcGQD9LkAojmMh8ozcw3Khd6b8BStWoGgFJu",
  "key27": "4hQsdaqj8DiddYcRHsdnfJyxAAVaQi6ZJz4GQH8vYZkNfqKc6C6fBAsQAWdbZpGPKVmKzbh4qdTXUjmiiS97Tgby",
  "key28": "4ceWbBgKv3kViG73qndnNEJn6ue5PTiWcbh4qvkWCHWQNA3urcicgpZs2wtTP74j3QiCTzYn2zaU8QbedTPLZP1n",
  "key29": "54mzUX61etRnL5miY2fkEbYt5TcR5FueWH8ny77RWXLSvSwkzqsozMmRjbufUPr8CwuBbTegLd3wFvjc29Jsh1Pk",
  "key30": "LZDTCBkfCyxo2EPWLqySXMCh4UDFbj5DsCHeV85tgYYPMjeC4wKVpYUDcTWzaXpBnzgtsdXro2mAhb6g46EorWW",
  "key31": "BnJ7nf9HSQMKaKnnBS5L8T5HWKrigvggAbiNrhWvnvwyvfNHZagT4WZPwyKdnwZr2eXei2yMjxBfUHiCE4eJHs8",
  "key32": "GLwQ8vSA51EKrUzwan1JTFDMcr3sViA9iHUzhxuBVd6FwJtSWKdggGmBG1a2wJg16rSmxM2onAkFKHpoJpKRtaV",
  "key33": "3DkeNR19Ni2prNVE2kZk3nCvKn43xeRhEVX3RoKtcRTtd14qhhqVbLQxPQW8pzQ1NR79PetGS7sW7kXNqcmZqKJv",
  "key34": "3WFKwMrVdTRxVc7iBLFSAs92b73MkAH5n8shbkFvRKnxxCeQ25iyo3GUmccfR1j28Y5UrSY94AjfDBGsTjnUSwJd",
  "key35": "MgngSetQNwr19i5HTh9P2u8xC1g1xCFpk5Wds4RpfeCAnRLhw7p5aTsxSadbtaDCvAAkbSFU3geLhKCk7e7nyNo",
  "key36": "4ir8dGYrEuQq6xw5tX9WgFZHh3DrvVa2853r9pAXJonSo9LwuvXyJH7wMMFCLCdSVxqhy9SjBCD8tjp55xA3gZBU",
  "key37": "5kyuZrG1XUCmEMNvgZGsaKyBGZpYbujK6dV1eqcm6dYwLtsPj56RmQ4WgSvWcaQZ79XEJa9h7PFYwsDfj3P61opG",
  "key38": "4GCvNCrrnJ3Dhja4prnpEtJYnteqFQM6gC2YEoNbFYpqajRvt8xi1ti8dpNjVZWs4LFQvcRbh1hzYx6czX67rNY3",
  "key39": "3R5GEUcWX3vTQX14ZCTmaDB12MtWgJ7svNxVH21tgrAeHSth6EAQeE6iwzoPJDfqzigZcKgC8uNiXU1ov84F3hRZ",
  "key40": "3bNUpu3tejtVmMLTyQzTBbj6zYLZkGmXttnJQwoz5irzvrgcdFKQDyNx6gJs4yKbynuqghdmxteZ9T66se9QkJD7",
  "key41": "eCV6rQEo7oYKuBXtwEt4hUJvcypoTKhHNE4DwJP7mJqD9r1Szqf1E7qL5Jbhn2p9YbiTrpHrgmqUfeKXZPW3U8o",
  "key42": "5yKAKzUBBX9wDifUWcQNmgLV85sHu7WJdiRk8iYcftrtd7J5iq2p72Bsg7mjt7Y41cNmzZwLB4zMrWHKE6fhfzRJ",
  "key43": "67NeLvYaG3Xf75LmNJRiN7NUrWc6Yr99v6Cex6bhzxuoMcFC5Nc1qo3ikKeYHNwgbHQZ13GBKL2mgFeJG8gMu8Vq",
  "key44": "5v9HhGhDh4HB8f3k2EBVBNBuz3DLoAgx4Wdq1eTtGrF9e11nku7pcEjKKdn5h5WZTUqP7kKjhFWr9hdVM64yD9u1",
  "key45": "5bCZeLkshdYXieZoQYDDY4u8kxoQyERCeXZLCqDBgw2YUUusetsamWnysAusE7TKhzVasmwU87ZRUDd9qzx6LGea",
  "key46": "3dNsYDXtQSgJ3nENad48cVRvWFyVa2EqN4u456d2fGedB1yz2r3C2YUCdmJ7LFmZWhC2P9VZELmWaR1z6s2Txgq6"
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
