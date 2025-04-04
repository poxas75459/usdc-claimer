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
    "B9oFFBqn5bU7ztxCz8n6ce9fanwu1qaTWYtTzbgzmnpMc5gEeyLnLW99EVdsHpcst7A1vqJNJBSAw5sLrXDkGGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7NEHo4doC6vpYy2eqp9HyCECbiQxupcniYvWepxKUjkfMnSQfaCMAppjn9x6AVMVzXFYYLh1PTfnNBdBUdgWTi",
  "key1": "5Mec3nC4d6KJjriFFjaxBSUCQarutULzdcxFtjaGuCmm3e6B1J3Mby1DoZCtj5M8a5MXeBz8WaxEYR61WmKicJoW",
  "key2": "5DvNhKMVnpEpu3JA3FnxveLtKmQQRLTaRpCwPBHWdjksfuqfQVfE1DW44CgLpiuzcbYy4bBww3YFjGNjr3wpxRVX",
  "key3": "3LWU2QLrti4F1X1pbdjz6zJW4uuAs8xLQA759nui1fjNZytKY1J39Bzb4iFqiVdbte77M3VpS4Vo8EjiN8hQ6BBD",
  "key4": "3GDnQR1FkQ3WVg81yK8d8NWvUzJdN3RmYBsGCAo23Hzw6ixKLnPcdDfRMRUQWRNZAH4BGhMjc9yGugcbEt5j1GYt",
  "key5": "5eAfvmcGmRqSADax8xL8o9j561Ejdnh93tzX6qXGLpAAw4ytJU34QWnWp6ZCrYCod9EAQVM7qE5zXp9W8JQGJniJ",
  "key6": "395pf6znQRMa4aWNmjsQVjcBnRNiWVVC118fquSEXa5pxnb3FUaWK3mrCiZ58pSfDA5cDoY3HFLDzRNWrUd1e7mA",
  "key7": "3p7jM2Hk1f2buSXVoM1kdwN7F3fx6cDeLi1cdGmZzhsufUoT4xPLuy4pkhzeX2BmU5BhD6K5udXh8jvU4uMkrwos",
  "key8": "5NaL7W8Hq2DEWfLGkVGw4ctMv3fwN5MwtCjfVtH46YFXttiwjF7NhtRR8ZfgZgwJd4N5D6WkUJ7WYp7wzefEqXMr",
  "key9": "3JN7EyF7ebudsCnknxTWyEmL73ivyNFcVtYZy27D6BbWrMFxkfgJ9d492utrQG8rF4K7sj8U41cUAMWzRxbvxTBV",
  "key10": "5Rd7ADU7sB9WZMBmfMy6PeKL6z3UauP4YCNNwcMc8PW4VEQMNsmBs678agjbhSXsy5ZBoo9641ciAtJShPuK5Mvz",
  "key11": "4n1GPuZa1faGk7AaiUGKdrDaSBmiX4Gr48fBnTVcTB8LbQg5FXtXFF97LjS3UFiZqng1j3BMbyxHUnv8bkV2nqRj",
  "key12": "66vV5KEHuQENKSvcv3iJnEo8XKEvwR6xny2U9AT9vSNN6uwEPWictxVa3Ah9RhzcbDqySJKQWLT1KaudSjZCLBAP",
  "key13": "bXAYNrHJWAhFnAMUrMF171CL5q7RPu7se3GZQeJpxV53ALewxjZft56FcUj75Z3Hz9fBuPjUGGFN5mHkqAyJx4G",
  "key14": "xnUtyUmSktTpkRPjeC2KYJK3HWqK4J64zyEQmo2dMyAg6fEJGm7jLupKiD44M4q2cxx1V7YrnQqGeGc3bxZPaSn",
  "key15": "2isvhPErEnC8BzjnF2s8VEbn8sCiMiT7Xzdi2sZVWyQWystu8zNSkSV1ShDDDBaFnU4BzMUmUK7GQdJnRtW3Yqo7",
  "key16": "3kxdiKzMQvn4uLdxBcgayFRY4N8EHxD8SeJQsRCqgA61d4CpGEf73Gy3sDp3VLduwLUWwYz7JGJ7R9zF3aN97jun",
  "key17": "4Mm8DJdchVLbUkxmUX7EPWwAdMQPH4L9gPuLPgLGL9kwJqTTeh6BKVyk9jnENwY9QVyaDcNaqoFshX8hCxJtkumb",
  "key18": "4nKfGrH4Nxpo5j9fBqKaAB3bexZHCVh7WWsFncLmE6kL1tyHyiAwSeWiJyW5K6oWr7HkvSZ2MQs9XvCjjSBQRdSk",
  "key19": "hxHweKiTGPgkCsJWDNTRygAKmXochTZQvbKgh6JsYzbCReyjga19CCYidwQevTSRYNQE3aTn2hCS8g1mb26GUzq",
  "key20": "2RSq2CrdDsvJMhkxfeNVN62xaj7AqtysmyrionPd3ZaLKCKvQLaTLBt3qTqEqj9ZVWf9aetGACydWXENR2u7aRzn",
  "key21": "3ofF4nhiCSmdurAGJTyXdYxZFtz91Nno1swq44UqngxeB7AmJZHijkigvVUosFQiR6GVgWLSpkKAE1zbKHin8uyX",
  "key22": "4NaQs97FYNVJAcq4cYTnURjL9VBTGjXiSmY1AQzuENN2tiRarktQEeAJ9srSc7XtszPGiz1FURMFk1t8vPZDa1Sy",
  "key23": "4QVgbqvhncKnxZjgc7dEDBW567HxWLKFTh9CNTJKdadFKecRgRj49Kbz8AxH6EsNpZopAx6UczonNq8dxgPX2YXc",
  "key24": "5N4jxCYzDVr94epQN3j3dPq7eTpaeebXQHB1EtGoxRG81mooEp2uSC86uLDqdKz7unQU3h1vQsQVxeSKtJkQGs6f",
  "key25": "4CrUkiPSBfSTN1moVpYJoPhSVFduq6LHzKAwW56Nn9Xxnx2nooRM6Q66oqw1X6RRRY697kw6MuJdzYkFkVD1hxeE",
  "key26": "2awPz6wtj2r28r7VatPDZMxZaXxcmA4VKoqVy4nYgb1KGu4p1c6wjzoCg2wuKZSU4bddrFQXTaZrMTrrqidAxyES",
  "key27": "RazjhGf18pJzdEK8mWzfkgzd89iCr2g3m6n7NxAnXB64QvH8j2CZKpTAuF8Uq2tnZa5gQCSb8LdT4k5zgYUAqsf",
  "key28": "42MsgknNYAJc3ze2ScAGq6TaqwTqJMLmGtLGiMgDufMBQQDvAVz8ffcEq4MA6MszMkkDL7VBHA8d7s2Un1FFuN8u",
  "key29": "52obwkzZN7Z2mGEe5pdSAfs2k1vAGq3t5xGgqoFjqKhekPyRW1WetDr5h7FmE6TUy1rXxJ3diWyogkSe2wGMXxZX",
  "key30": "3H3y7k3YWQ2hzZ2YLfS9PJe8RjstCoKguB4mTLYcUGoT8DMo6zuBB4bmwQuEyG6w67PcuTpwmd7Jy5Fqt8ZuCfri",
  "key31": "48eTF4akEq1tQmQ8XreGEftBbbkkjT6SZG7NvuvirnHNuSFxfYcHvGchGEEm9GQza3YkzrNSVzHhQ5nb9ozipP9W",
  "key32": "QFZZU5VL1PNHS5Dut4ZRYEjRLpt4BnmMi966inYFDEc2iG6bHNeGavCT8UDa32xJHMMZZooRJCfWjJSMPB3io2G",
  "key33": "4B9C2HSqTDwsDfuPgK3HJ6BgH5SmttKr2T5KvNpRKqFhE5UcZBswFkVcAgx7DcTfj75b7Jxkzx1VCfJ7AvU84JMF",
  "key34": "4zKYzU8K1MWmzGf2DaiWZkSSA5prwhU5PEHPqyWc3SHK5QQTckUjnaBHBX9WFnGioMFUdNHMKSgugrYiT3YDqSSy",
  "key35": "2w8hZVnmYT1xaY9qwBd4fSCUB7Lg7ZPA6R6ZEjY8m8qNYyLdPFpirNcHYwPqBCNuJ9jJm9A9V9heUKwuiPatj35T",
  "key36": "5f1nU2FGmhY8ecBZyT3rGWtEoqNmKsrYjSqjZbrihHeATECZci5Ku1ZizZkfkGpHetNzpKTFkAGkEFTh3xS2Wajt",
  "key37": "5UcAxU65ps9K2snEs3LhgWEinAkKidhsN1NuAk8M19f7XaSAmuKnbhooZZi83SEExoQzGBWfBbxqqbFACUv7FDmX",
  "key38": "4cLDQjriZf427mbq4uLAq3dX3Ngoaoj8bpirJaRSu6Rp3jWU3HqudpNQYNN4dTRPieHvTQPxiAiBecCmGxSPFHnQ",
  "key39": "5Cfo6QaF5LMpYE6SFVR6YnEYGPNAvnfx6qw3zLFhpibcPTH4bRJFu8SNLNLBFqjywC4VbQpvDFvbhMbnxi1DtAXN",
  "key40": "4GRoJJCFHqoNR1W4PC3uqHzDrF5zfugPk6wf2iUwGHB72Fau2pJMWeuN2MFbqtP6xPJityapvRi7pVqadX237rKg",
  "key41": "4Ri2yiiGKWVuxhz9L3XR3c3XoesVGupeoJXhT8SjQkvFgZz76bfEk2HTe1nun1GgCNxYM64wpgvTJkwRc2Z2sB22",
  "key42": "3e4WQ3hvnB9FLnWtssDg5NnoEUVkGNKSy2ZLHtJZvuWpdEry7qqxCXssChcJ8pBRzj6GBwGk2KBdbkDbm7GuhR3i",
  "key43": "5Bd65x91RvVSGCaU3ZHpvSmQ9vegMbCXaCthnx6HLf1gpzGhUbaNDLZtfaCmDhBugYpmsfQccty73Rc6bQDwzjL5",
  "key44": "4brAfEmA9nho9sMWaFFLF1dY9vw8acJe3PYvExpp86Yiuvb5wPpTcbhHmV4yTCQnxbZqvxedKyMvs8HLErTfSqSA",
  "key45": "2Sc789kqJgbqucVFnSoHqDkbacaBoLJDvNKnN4Kh4CDkZBgGxwhQBRoSzi73TcF1zYKz6WxhzHoEmbhGtnGieS7G",
  "key46": "5S9AnK4yuDoKdP1hxoVCJeg7niLEsvUrMdrMevbgW8NWLGy5oSbUfVVLPJT8d5pJebNxwFRQH3HEP6Qc3udASKXo"
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
