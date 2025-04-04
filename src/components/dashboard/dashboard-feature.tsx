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
    "5DCwbVwUchXCnSvdUxF9ZWkQ2e6HwA7XhZhTzgUPg89bB9W6bLAbFKG2EAc5miYg6xSUzM8gS4dd7YWNr8NvHFnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYAf5UUYYWcrDmSoNJrwMWB4omFSDu4Z14MfDv2A9fYP97ykTVbp7kNKWcBW1UD7Lc68j9hzBuCFUPn2YZtf4Vk",
  "key1": "3zBer4JnVb9gdt1ZsTSF8jMcyHqVtMbq2orRdbvzNobSbJu6FzncqvABmyftYUyGCMDPDEpsZY9YN3UCjiJgxCGU",
  "key2": "7SFeX5higwruk8DWZUEtuvdWNe5xKC69d2QdJbgc9hvgx4WdHj2fhEVyzZNkcLx9y6Pn12TxBkSN9UVjLsK4UfV",
  "key3": "4onqmXcDoMiiLWqn5mypRJuAm9Jgx3rT9GbDTxq2furSmAbxgMYj4kxkLmWpHfhPwENv4A798VekkUjq13KZ1Jwx",
  "key4": "5KoytQiDxGTgvWDGREUCJPA6FQNB8VAWVjAYw1daeeiT1K5CmWT167QToqFumySdZUr7KNt9B1n7gcErPfTA1uvJ",
  "key5": "5xGw1qisU7PhFzRfyYuy2fqcoShFbECwFjbitNA4mqaPaaDUK9yx5u55GmB2Nit1BDdBTeckRQYNhPA9rN95By7G",
  "key6": "55NV8y8SxPNogb2Ps1467X5mTJyTF3JTCbSRe4mBbSxGrNNCb64EfLCW9ZhxwYvTuhreJ9ps3gZRyR6C2aG31dUq",
  "key7": "5TZNVKYep4ELzN3yTZZxU5k7zXjSau7hAweLZPzkUEqWfasg4uF2GnugYd8K5nPiika4A3Ttzi418Lt7RKYVd4TF",
  "key8": "5pucMyKxSqeEgdnQ5ckvJoRdrsSj8msLNo76j2BBw4UMDzjdyVkqD4pcvZJ1tNzD39wo88MUqiZBngjbh7RUrtqb",
  "key9": "zu929uRWrjZTiYF3ygS7fmsrGbLW6tuM5UbUsaCzSnwUi4x6daVGvct4m61dUexpwCNFgH3ybJcCcAfuwCE7ZSN",
  "key10": "ZELegWq3C56r7Cm6gz7sWebc93eyb7WihWPn7dj2yfBcfFXyJYrV1vpPAR5Gt9FBwn3KLr9qkBhgrpQfXNEWFyi",
  "key11": "2AzVhw12SsjFW5JtwdhNfGaeBbbQxfjEM4idnacgLid4sEa4SMS4LznDNAZwyye3fdy7CAdxHM9HSUhXkZB5QvWz",
  "key12": "4w3MBGRQ5BmhQcdZWYkodYkJKoZKokHojmZ6xPsFVjZMD8N142gsxG21CH9iijokkhiupVB2vwLbh25pSCgQSAQC",
  "key13": "3iKF5ufzHhqtPabCfifA7GkcNng3uVg5CR9gMQs5ej9eCfv7GfZcv78xAoFvxR62UHbQyna4iJvofqEQPk7CnbPj",
  "key14": "3ARgjzethBQiRaWxC7SYY85tGBGe9s16Jzz58wdfq4VnSQUSawG3sQrbUeuoG5p84Tyh3BBLmUsUgxgHSBYSEk3R",
  "key15": "vf79SGikYttLp2X3F6NXcHGyqA9wJHeFJJD9hsnrvkH9jXF9fakK4GjRbvgm89RNgoyK2Hni54xnYnG6MReS4NX",
  "key16": "52LhKQJCzq31YvLHrno867dkzakQ1M3p1obHPjqUqaE2GK7iyHSqd16eWp3vD26ywaGmv6XWyzNb8mFjnpCfgWk3",
  "key17": "PrWPufBuLnPPsUbCGJmCSfcWgZhwVx4QMkvpm82zYJCN9Ljwb39KyyYa2cddMTpBcVPtyoW4UAYaNyjBckAjKoo",
  "key18": "4UPvQBSY7XVLY9mc1d7mpRqKXvKP8rWQv1vpEhioGvf6xK9rT6QyoSEvPePpnZ5j5AicysrbZrctdLhUnfUGu1JS",
  "key19": "4TBYdHEir2LAy2W7DKL8WeSsfWZRDM5HqNNzjm8zNoDwhXwoApCT6gktb7XPcyP3J6uy3zXG7t8NvuQeRJe4JcgN",
  "key20": "wBSJbdt4ak9PAXDs7EwjVDET1iAjvYukcGzaPV3SbLunLdozzJKt7B5tdq3QEvfFim5w9tqnADuiRayomVrdhH2",
  "key21": "382TedrjJri1XibYEcEswXtfUZCaagUJHwhgR5umPv2rMcKnAVQfFsykbecCWWwtfHz4VoiC4y6vzmxJTdpLtnXH",
  "key22": "3j27iWCANSTVQ23KXfjmLrHoVrbRtmSB6HteJgTcu2MttTXaML5LKxmxjHoEWq88tCUKNiLAE1TKMfm2LCkJvvN8",
  "key23": "5n36BzpopnyahiAzoHvzwfM9HMTC6CHpzPQnuM1nVQRA56rL9RewwEUhDQyH7JGqCVporXWmuAsT4WDX1CGt1mXE",
  "key24": "67QD3WKjxKbECRg6AM4VrycknppPpZWaAV8Ciwt4P5Xab1dpQN56MufNkzeGZ1N6K6uycL4kYDqaBqwdLURHDXx4",
  "key25": "3pLp44ePCGbTTsNidBFPvXvnMLsfSwDkccoUKy1yXV78T4mkLzGYCzDXZRbiTijoqW8ZEUScf4U5tVdmUN94JxhQ",
  "key26": "5mWh7kJvwq9MaY4eD6R8MN4iEyWmT2AZ7PzrZjG8SHJLyiepQ8b8pLU3ax7acMouZg5yaCxcEja8NAt35DZ1CE1m",
  "key27": "5ErNdnckrKhB5q2kaHRwjDiU6A87FCVB92VfU9eTRpSF4eQGfnigb4DfAv9Uhv4PBBjUzHq87jtDNXee4Ns5BDNA",
  "key28": "4zUmPUbKJKSpz8JY7eEcNKerkdCcj4QbwLvmSayMi1ViLPC3FMdBJQPHGtdEdjnNguEBs8smMyirELTYehqiJ4sZ",
  "key29": "3Tcpsy5K6UpPoXiX5fMR153XMYb88yU1MxUxN4G1riZs6bKqCsvRfahHbPcEwtbHEYHbgUwFSYmezw3qmwCUWbYs",
  "key30": "xYThvpPKaxsFjw5J5TEiCRw9SgTCWVAeEvmkM83Di3KH5J4V8kqMayaeh9ddw895nT12V4bC3Enuc7qeuRECjdx",
  "key31": "4Lab7woswDKFbQBimbBAKUXvQd8u3Rcfrbhopd7uaeHyxFDyRUpCdhNVfyQoFC9Lm5ZMfe3sChs2FmwtiYM3nhhX",
  "key32": "p65uzds3NPWjDAAKuWvq9s9YYH6edVptR3RuaF5eUcS3NtexctdHn2uemXYyPQE4KJAQpMVUGfNcJuhp22hRoSC",
  "key33": "4tiqsdXZniNENAdDqHJJKnBhs2Vj6HCF6JsqqiGgY1nF6xgA3mercZs4KNNfhezkWzP9fsvCiCVhJH7bb14x5gfz",
  "key34": "cdDMCbZ5JRDQQnY1sQetpCxz7aH32iGpUTgbXqYxKkdqejvZx7KRJZB9946J9BTCPVNeF5PudTBLerePRfpgP6Q",
  "key35": "3FcEtzWsLzXqWXznkeRGexTTqwbh39cmtgMEaxcYcNrXNEL6CUzM8BQxVKXi4bxGLXx9iPpKCKkmEfy4DbnnKsdD",
  "key36": "5HEKtpvFG24m9M9P4dFp672PLqxCuXkqucQFuZwPKhs1xXrVAGV5z1YymjDNQRCi9wu81oWhBBgc8TJwE5NyUqUP",
  "key37": "sh9oNqkTxVbRagicJKED7Am8GhEgxjDpPw1mDd8db6wA98Ants8pxvrk9dCnrBo7NAj25KPGu7FXxPhUAfWjra1",
  "key38": "4ScCLssUDtyTD7MSjdriEGFLzmAsJ3UGueCECr2GtkUcx3j4ZuF8XPhDySRDUxdLRAjoeDJr76KN2Jztf48CWpTL",
  "key39": "sZDypwYsxXbP5vnfsVVqrK2vuDwYF6Bh3rxk28djdFcrURXhosLbdAQnxZdBiWK7gYituwJ6jmcDi3WUFAbiCRx",
  "key40": "4MhRm9VzusAakouDGUHvsd78XmHMiTrE4hCXX9f9kQveruhE34n3YjdJyM8XDN6QHUYvKGDJuAhze9zfw8SC2jc",
  "key41": "2SQJ4LKCG1ze8bcmZWbEPewnvZUFJPqvgL64NEa1e372DnQJaydM4RJBnSN5dfD4dDqi8VSwfzBsEBcxVY9XAuB5"
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
