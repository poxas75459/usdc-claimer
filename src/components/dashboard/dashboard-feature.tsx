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
    "3ww9VeXTPFEkQkFqqV1As4Q96p8rxHeL3AoJGs8J4RWtWYnbxEUxNSSGBEWMmgXUtybmcoMEXqx1yAJnyHs8WRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqbSf55j2M2Xwz8r6hz3dMp7mJZHnqB6RQDUwGPxbK1U9UP1X4M2V7JMKps2QpGUMmDy2zeSfgzVrirEZ73aPS3",
  "key1": "3EdE8pfScXPN4eQ8WTWqaPvMxgtj9cmt1HUbbyTfZVeSoKR9R2gXeLfVFdJmFzm7326Q1PNKJyD6rPNXMWShkedC",
  "key2": "4okf8eCWvqetY48FikfCFetDLjtk6KFN7bfCu92YSxT5KG76FUWbuHjsVPVo6tSqyYQ1Mpmhm3sxuAnTZHeE6d4Q",
  "key3": "3gb2LUtT6r5x7sfsfwaKzuvk1qisXfh6pu66FcfcnpKusg2hJ2iZnkRVTB7cUgV2m5rgKMMWdkrsJeosyPG6hac",
  "key4": "2CtAswoeGBKHrPHaQ4sGZJjYnbjm1J6uP2v5vfyxPJXMiCaax3FJyvkU4Cb8FYHsmmBTp8uDsjBE8Vk8gKMYt4qi",
  "key5": "PhqhGegtXDNKWXKzhUFfcPnfu723T9SnoLG1D5STN3FiVNfJDPX774uaJYggUpdmw54XKUuuMX6d9CHE4LtcZB4",
  "key6": "5sN7t35uhXDHMdUTnTSKZdbRvihqqYa4GSA5bvbfgfdenKhKojFCPVv85TtHu3rBREHveCQNTwbdCPYNToTowBGG",
  "key7": "3c4DEayhFaG6h8eQNtKxt5ckyoKqzpMS8Hh3DQMJfA9Gv2UJP1YNTeh6sxXJQT1tkHbWLU3SzePCPj4BGnBFj2Br",
  "key8": "258GDkGynCjbmFDj9Jkx285WtnQWDJV6EWLiFtyVcFvn2MquZyMkN6h9pCzxa1z288Yq6CMC63o2fnk3PXdBKBsL",
  "key9": "22tDakb5StEsyFYKPuvpB7Nkdi2q5BLRwhQ7TmbQTS7g9S9vUv69kFqWeGsRJPfjivh5WskEqzyP1L3zGoScTZkw",
  "key10": "2SgSupGKZTxs4U7CWn1T1cw7Ro5DYqHp3VSzWVphjEwRaNriHiqUJXWq8anxVkjKjddpmiWMGZUB4kkjsn85QrPF",
  "key11": "5F7uP1dCVCA8phZ4FurWrMXSC8By7UAaRmWWXADEKquW8ZLfh1eiTBQB9VTKAaGCsz7t8j4wpWMN1fV3VDNWZeUK",
  "key12": "MXf7MPvVpQoaNYWVZw1MyeztZxRrpmevaEKLb7GyPQUrjh2ZkfGmWstv2k9iuQhxhmwJAG7S7rZ8q9rM3jGRSay",
  "key13": "2TXAnjgJZvRui8iBm2ouXbrHw6o73L6WW6yKdA5R58ovgH1S5ZQtN5YwoXmFjE859BSLTt2Vn6CVGZATvMqGv1zZ",
  "key14": "3qcAnguq8Ud5weu1ArZWrwyStjkpCoAYMBswCUHewecPhMGFYBRQfQYSqS5gXa744JVWkfNaJiGickd4Sh3LhkER",
  "key15": "392Y2gJFL8RDHWU6vh3sdU2EcLt1qiiic7C1xGb7cMc8ezmF53JcyNmxbjtPuDFYAseFDeeRz16yiRARgA1epyCB",
  "key16": "4fJ4qpj1v58YhgdYaj16LvGdRdc8qrmLDhkKwgmn3QABsfPF98G3rz5ZEvwWDQmcSU1zZxQXLNJe27biV4H3NkeF",
  "key17": "57aNd8rZapaGRszy5BKLDsPW2AyknwnddERiBCqFRXGBmo1Zg2vamL6kxL4GejUWJoYFd2exkq15KFNSDxE3fmBa",
  "key18": "2ho8i7B5axpVb5ug2WoTakAW6C6EqRozyvFQ97DdfA4hBoZxayFouKvJyCw2tPbzHKxEQSJdXcnx3oUhUYcci2Qz",
  "key19": "2puSf5oXhaLEVeocV3M5HDZQyHFYUN58NiraQSW4DQQfwRLRk5FL8BuJ5JdVXytLhhhs28gSrKtu3dgLSizP5kvA",
  "key20": "2fJBhoacW5krTWyW4YytfWYWH1TeYa5unmViW931XubZtRi7z73LpMeixqWd1WSorwqPPUWKRECoDeBZrkRAYPgu",
  "key21": "5SbdE7h3eM5mTN8aE5PAWFfaqNHRjsZkHVsLZip4cDTon8mkEhzYfnifRG3JeqMj88NPe1YUUUQatzyLCgUmVHkh",
  "key22": "3ZhvNpyQva4iVEWXq9q6h8Qm4B8TgjbbUoJ1T1R5BEYgKQJeTwqeFLgr1fEW8aZseodp1aWzEHPM4nTK5et1kwPy",
  "key23": "2nBASrjTEwbVfqWKAtYFp6GJmMsLagSyc6ppAsrhKwpCfmmrgbLkBzrjaXDZCeJtVBgxRziuK5DEZSTutsvqfZWP",
  "key24": "5bTuiQLL7RWMayQiwVb28m6TdkJyBrNFe2FVgWJVcuCFsweqhVNqqDtr1woGYJQJGtiPeHGhmW1NfLYHXTD1u7ko",
  "key25": "5ZCdQJyZuY62jcdNPbTkPNbZLSqWkjsMma9TryjJ52MMiKQPMhyFmZsAUo4pboeWGnJUKCwYRJ32ked1kGJjoUZt",
  "key26": "5gbYvdB85kbPwSc26F3tRXvjdmy3vkT2vZQsBfoozyMNkBz5sN5S3gFqkmJBs9YKijj4DczK35D1GN4684HBAxAi",
  "key27": "ZznoCZhxQuLKc2Foe5XDcjwqQQPS367SpyV1aHcgVx3M7ASwjsuM7uZUqZPdj3kizhbh3r3rngBsmUKbXvikeGM",
  "key28": "5Qz3XN7b9uuAqhd41jbb7TsW4HJk4KGAPiqJ61VYeJRaViX3iuH9HuYjVR9jqeaqToYzsNQwQbDytPnZQfoqQY3j",
  "key29": "61zteyUK7j6NGoej8SuVzipWNXdKycb2jnPtvfNcKad4iiFXGqhsxsJGNfcjo3ELny5ajyxagaFxqzJn611SzjhS",
  "key30": "23XEMDLngq66PWxKrR29Bi2QKg8ffBCdCj589M6k92X27cchEsx4By1ydgbDA32icXLcS1j6rJL85pWc3MaorXuP",
  "key31": "5tULEJfiPHyppRi4VL16wr46CDGk1GuCnVxmuyZZcAZhjVkK1wjKqxM4RZoTm3eY24CWjZk6YTiLNiYaw1mzSomg",
  "key32": "9UwyLMR4V6tptC996n6TfmpEhSUQmUET8tc1K5Pzuh6MKdPB9TKbq5gTCzURun6vVVCG2tHDqmFr8hAFabiTAKY",
  "key33": "5C6WpTYFgasUj1GuGwDuGs6vQSMyaM4jcMumFKxwRD6wW7bmiVLeTVKu31zhhPe6b9SAYAu98EL9nqARkLJXcoBJ",
  "key34": "5DXpiGrroeVo4iW1QFPrjAymc1AX6zsAnNgP3eQ1iXX6sVmWU35ZxJpGHEWXXXdSqp4fCEj5rgtJbtuc5yz3aAPp",
  "key35": "4q8J2cziBaGwm6RYRdev1sLxrQjLCJPY3F1MfFVx1YmaGSZzP3RU4oxsiVT75gW7DYtY4ikVH94dAswqb8J3UpsQ",
  "key36": "2EURXVrpsnt7xz5DU8zxWcpR6oorbT2ATyrqXrebHvajwgSxGL7q3kkJ1awZCnHr6ehbCSnDCsTij2exjmjrkbnT",
  "key37": "5dEeu1aeGYdfPyWg1Pq8YZSswwuXwq8Rsz7JADDjeAxiTaRf2YnYAuivfHSDiP9b2NwjHWyoXEWbqMMijQz5o48g",
  "key38": "4CRoDnz74bQV467awLCSzgN831nPvJtZWnaSN8PTi9eFUkUreea1RD1LxT52w8JHSTRbWckZPJWJDNkp4CTgcsq4",
  "key39": "2Z8xYzkwU9AHr6q8kqwUGPyGythxgV2hPiTnMgDGibPyvmmQhg5EF5rJrgMcsgpUofR7L2rtrsBLEfDnGrum2gDm",
  "key40": "E4gEYdFw7WdDp9mkacSUwtaY47jqbaqV8WJWHwkoo5zJuQpx4zjz6fz17CSchqkn1Uu5bbTzt7ihAp4j66Hdxpy",
  "key41": "3PEbp35J9ZKiuPRcqQk9P5ae1vYmA1DK2L31PL15XgkweHeinjoCmmWuakebVvkomSpwnV8ummVLgh6fwEcaeL3B",
  "key42": "3he4RattYNsEMfinh3JygPfi4yLfJKgpDiQzWUfby8QFLoJSyybYorN3WU4am1hJ9o86vjmGZ4R5npd3k6fCgzvA",
  "key43": "65ct5328kSw2ZUoEhnWd1mvQwDLeBJiqqhVvPrp597S3tAQ5xwQb22PYHLp9U2kvWjojos2qzRwH4AZCLGCj1keu"
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
