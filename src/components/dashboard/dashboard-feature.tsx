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
    "AZTeg6TkEYC9thdQLwxvxpJqYJnzHZV882FPpuV8WwQXp1yxN79jzK2jPDGYkE8rcBBAuqf9Z7LSiJWbasy6kTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWA17h6q2jfxPW7UwimC74oo1nQobXHpMGphMvvYMGXG2fqznL63BQBa7K1CFPt1pWj5dwYX4ReeQWdtqXStoHb",
  "key1": "2NVYW7r2AmkGCTGHd37YzU8jPescxn4CmP5XTDKe6VtdmB1zgxos4wnwrBi5jun851WN8pBDXqdFomsYAyTDtApS",
  "key2": "5qDNqSEGp3bij3sCgCmRBXwLLCpHaavw9NWW2KTsarbG8tLrvwNKnS2tAiH1dF289A4Zs1nfPBHvaAtxiDB1HCko",
  "key3": "q68EzwtpUUb32iJmvG9FgHunBmSWi9DaSeCa9qAyDu9tvfX4EkDKHb8twbtxq1XJKsmVBjjfgKpuSHofc59NTvw",
  "key4": "S8wTAcsRfRVx4Mrfj1vEiVvmVxteLpqhA5RmzRU98B1zsJd8Ah1Wr1sarmV6CbFj94AcerszFbfzS5tNjAwR4je",
  "key5": "5tziXY1Lqn9nLdjqCRpKC6wuRRpAhW2wTybg912ZSbjocLmfRzbBVMCi8JA9rEVDEiV8tv6H7TwZMprBJB7HuJd5",
  "key6": "kBmbX1fUBo7aAgQhnhv99uveyGQFvQrNMUV7Jo82ksykJwp5ceww4J7BjPyku4dH3bm4Yfk6pmGc3Ehaeob881k",
  "key7": "4nbVAw69U1HFpqMjmXrxeabnMKEvhh6BtRvfbWBnUqmULuyhzTyHtnAPyEZu45GrtLNoZbEhkVj5YkKLuvaVhDUP",
  "key8": "2kkaSHGJetAtiotBTG5n32ogJmyNJj13YbgdmdnpLdCYEARXkpMJHCg3GuUorX5vheNsRArHqe1n9JvjZfcT9v8G",
  "key9": "2kSW8ULLNTrMdzwbTL6FLBixA5a2Tu4k4bTVbq3uM8di9K1hUePJfsEKRN2vhLR6E348fN8JiyBdY7SNoq82TX5Q",
  "key10": "2jjYHSsEyPEvKB2qxd6AjzRV71guvmkq4Fdv9tqTKqFdbks1mhSKPp3Sn4qUjs1sxm3WXboyHDbvfrP9iAm4KA1L",
  "key11": "5QHSyYoJUZGATMAZDx5pmGQ1JdcizuGgp8xs5c6AWCbgsLVGY8GiYaUtuD5ETiMqJGhGG8nUGU1cgo2URgWiHpZc",
  "key12": "2zQ2MNadtGj6CFkV9mC3YQZXaG9PqHBmkbHCps5Jmpk5xG8bY7hErwCRKK1iwLvuXMZf5VSkB3bb2mhGoTrvj7zD",
  "key13": "2xRHi2muDUxHpS27eb6nzHSjW21PfALhhJSrFJ7R7PZXtdHtYXTxtYdWojcu1ePiCU5Evid6xwTqNzcv1dxJLt3",
  "key14": "4gKakxAS14GqXUvRTzq7MW2dHecVN9ouvetd8P8CwdxvfuVTrV2jZNVEWfYnkUjojzuwEHS1tnVB5p4oQsvPetvt",
  "key15": "3S8E1VDHHw316f96ftAMVqktNFvTdUDfMud74etdSmgtVqVkgtpkgocsLKUe2Dhnf7J4T7Dr9Y1hK8iFNacM3mB5",
  "key16": "5oNRxpsucydtLDeNGVVrgqziFAf146BvruLXnQSRP6ubQ8wdyZ7oDj51Fu926N7Ybd2ygT9CntnQe88yFdadVkCW",
  "key17": "53nMxf5FYadG65HKR4rUnqig1Ks9hFJpvCEteq5XpawAeq34tL2sw8rr2kKvgPBRKnLpeZAYD3JB7nDx4s24A4Nw",
  "key18": "4bXv9SnzmVkPgB4DAxMbaqa24TorC5wAnMjtToCdyNLWcXRSfpEXQ1fBBWFXQwzWLkHgNmkKEiKjXgZ3stu1Uzt6",
  "key19": "Fvq4VQwJN9PJK1Sxe2eE9ZA2hH8SRZpvyMYm9RkQbVWcycF2WHjkATuwYevdydcwyVntEfq2o34crQ4xHDHdMvZ",
  "key20": "337X2rzwSZt1zUg3kJ1aqYw6wPtSkRMh2snaTJr7FETb2NaBBJ2STsmAmzLFE3iZaMZdwWD9TYAXNCZXktdKpq7V",
  "key21": "4EFLdMDcRrGZ8HA4zKi7bKbf5uerfQ9HAe7fPra18n6onsEtNi1nF7cEScKo4bLQUzaHrWrQvHdE83HtgfLq7gAr",
  "key22": "3sbVzBCQjwdRse4EUgNxV1KcfWHfWAKNcpCNwZQZDMpTUGNsqWDhtUTp2y5HPsqvE91TtvaqtAr9HrZWjGR9GZN",
  "key23": "AoBGwQatNcGwZY2xfgTvffPgMn2NPq1F9sSikJ7hVe2rvwGL7hbDqxiBDBjdHg52Gxsi9o78GUFAbz58u7eiE1P",
  "key24": "2UrFgMXBDUdYdKkHFFT25yNzacUqF35HwWqu1pKVQRxFmWYaS9fZNUSwFHzFMSiriJaUDs3LEDkZRuhvEpFqN7A9",
  "key25": "44HrxiHx2sWw4nYr7GRhkjN5XprHBu1uTihT7HWwNczzTRvZWGAXtsY2kdXxkk24YtC769oU18ZstJogpXMDBJkk",
  "key26": "nU5yye8RypVux2BaBqmEYjyiiRXaQVNDDJgqWPE1xsvvJJ7D8ZJB2NVivQbTdm83oEHfKDzUg7YNn6zkmN4AmnS",
  "key27": "55qngZiUnLQKz4M32aV5DEJM4oacA5XDnmNP6iX7Q2z3bqn5qgSbdJ2NsszZDbQsiYTNNjsSdveLSWQix89bxiBn",
  "key28": "2YKebqjMixnuA9aNN9KTNqZQ7oCMPqjdYb6SNT7dYtGm3kkhjyUZgYzFaz26LZr8pWx2ihVsrnXYpPob8aa2Tmek",
  "key29": "46v216aERC7xktXeRukCtZDppMsZ7FzirXc98UJKZiC8VvGdRqtTAEhpqgZoiaEkCGEyoPwNDsggvqybx7aiZULM",
  "key30": "5DiUvwWNSk69FohLAvSYzsHXAsbUSNTmJ6wafxrG2AaueUCPV8yBYQrDiuUb9Tk3G2rqHTAjvLUKBDdq9z48dZ3p",
  "key31": "VCwWWci3m2fMcaES4NxCycNaet6nuJkLmbhtGeJJJCaKmuptGxQg1g4tSuJVrGPvStiPfPrwGNRESvhADDN19uW",
  "key32": "4hSufWNFJR1qYNdueDieMrxWteXD4J4be84JtyrN3RQYyfvy4jqM5oLhjpwpbmDCvhhnLGbRJeAfsoMNx4eykraW",
  "key33": "3UWng4HovZXfgAVd8sbxxVfTsqrkMhoVPWEPtgqXA762uxXJWhiTZfqLZmPWLznRu9VzLiHmmVZnCJTf6xnQsFhv",
  "key34": "56gvpRU5uFgeSE2RvKojuohevEXq3t5998zEpbW8mmfX5AdukKvz2tDFsdC1myhiRFTpM6666NtypKX93bFFUZ5d",
  "key35": "2WjMAKZZUHek5sg5bVxUZBAsL5VsDYHw43FDmKkYcoUqGXYjxmVYdM81k1UFuBK2Pq5Gadxtq98VZee7UKc6noam",
  "key36": "5R3YP2nrYG7G9JBmvqSWzt1up7Xi6cUNZD7We8Z72u1sPZBHDUxzaRuMENEdrEJbmBQZG2xPBQ6LEpqLvC8TEGwp",
  "key37": "5b8jFZAdnyVYMNfvFvoEntf8jpWUGNgLFkjjHFqFsbNmwm9MLw4L6R8BnCqkS3xwn5ZctVQkC5vnUk2L9ibGhhvD",
  "key38": "5NoPn73BTQfVrqd7ABjk9rFWAfbD3UJspZ6w4TEVmEb12VmM5aHUCL5XjXbD2CJjzJ5Lxz29WdqcaUWU4wkF7EyJ",
  "key39": "619pEDrx3E8qmLtdv32Xgog74wGn49zFybah88H3LH3rYoKvyuMW9PAdKQggyYroWK7zozYgrNM8MueSDedifBEk",
  "key40": "5KHtexS3faz9TQb48ndmo8qPfsyF7K7CWfYPeQAs1f13DA3RSDNJeXXN8mmY7eZNoshXFrck5oMrWHrDsPNaXZGK",
  "key41": "K73ur54SLRCTyoQSDF1yE63qgD8SP8WGemhhxpmqr2ah8dFLdo9ygUVYMxyQmnSCVeWiegPpwCHQgMSCpiuXLcV",
  "key42": "LWPZwUCUnG68sN47kamKJ5Rsk6h4jfV6mMbASCLDDZJzn8MYa9RE2AV6fUxNQ4Tacj8tvpN4jB3ssmEX9vEGwou",
  "key43": "4ATWHgKH6bdAVzuNiN4eqEo1drvk2m5gWPx5XNjbe75xMS9gaYMZGomU986Us7QZ9DNZ3fWyeN36gskyfUjQnKE8",
  "key44": "5vL4kH69cBVE9oD3MqDiwCEnQaAkxfGGp1JBX1K365gMkXjZ8TDeWCAwtymJ5RiKezsjWmmSp5Cgv5xTKLSmaHwS",
  "key45": "58ZxYhbExHBv1T5azbfCncJN7rX9S3SBn39WkhegoK2CUyo74iFbhnj3Ca9cwWjfAHwUr3cJBKKEEpAMavWZWSeK"
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
