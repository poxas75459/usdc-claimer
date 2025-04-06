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
    "3NYXk3qLqBvcMvu9q8HEfV7wFRcmg9eTGYz4aBoqNnjUDTxG5CKg8ufq934MgM8RCooRs6tZC6sxLnU1bRjURG36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mznVwzniSuvXArfeFignDxYSjweKc7HrHNGZ8iNUeEvFC8P4wfdUijrcjKGdDEFRV9u5RSrwrhoJg1sUEkw9QGH",
  "key1": "3dwr4LP6M6cchGFaEJJ6Q4A86RJrsFmKddstkag8x2isY49219bNkXvon89zPaXUmNqh8BnLWmQLn6rxQixTWJXf",
  "key2": "5xaDULL1kC16iVwforwUCRqgFpECypAtDyuQ4yJoxjESBmMDFKar8xgTnucN76E8w8dE3i8Qv3nxebdb5R65AAY1",
  "key3": "3yYaBp5xjQ2L8fKFBunbThP66dDFxZxzCBRCs567NhkrTXwM4EiAbS1byFdSom61V7mDHj8VZ1hxRDSpSfUyF2nm",
  "key4": "23e9VJg1UsPwccoKZwkmzU2in3JkrZvTMAL9VA6EkMvqPfXXkpEQQ3fUHDhvThCVSKbZhEhHQ4eSGAC6Nyf7aJkX",
  "key5": "3aen5pQNoiCMiUkAeWkrNtNDwtxWz6VuJ6Ba3NePcs9h3bJxD5FrXEETd8uUDSShEECi8ujGbyL2XeLQAfXKYy3j",
  "key6": "3ZKmNqzJTjrT2vSh4MQtrc2T9DmkfXtMYXKED2mSTW8QTQ8twzxAy3iecS2p6zWq7h1vG78jb8f5VZfzaqyXLsjL",
  "key7": "ifKEo2ofmSYA4Ebz2nUpyyjeYPbv3WqSkoaJX21Rt5J4dEMiwbZ5YGktnzHHaPtnR3g45iUV9Laa6vnFZgUhUN2",
  "key8": "3e6hSBieX2crxvJtid1jDiULRRf79eqaE7SWDFCUt21XUN1Tw61VYgNdFt2uJDzpGjBJ418g6vaNDzbvb74KP8TD",
  "key9": "22zrNSTkP4szxXhmZV1wuDB52tucWcM83YcN5Rto3fsHdEfErGq5C1GYBC3FNa1kLTf9uceEC4JSySPBZxifZkzt",
  "key10": "S6eL6EQDY65EJPdu2bmo7owogncS1hUy7yvgCvNHqNCeZpzaKK1XLvEgB1UJ3u3QQ7sUzgBnZwsV2fS2XkH1b27",
  "key11": "2ZtyDUZwmH2Wnj3oiyStf7MjyrGFMucuWbSAXdZrAwiDCcnS5F9UYx7WuwHM9Tr7HPbC68BroYdZkhoECGrbQNkR",
  "key12": "38wZDjVBhBrLXBQMXj4uWYBDc8twY9S2NJCWo6bKdDWuy4GTeeKKC1G3t11sJbRj5gVZ2QJ2EPD4koBnM4D2omEF",
  "key13": "3Mxjk6V9MLisejPNcWZpEcfnQZ1Yn12CtLNxuvdgxHyczDY8BSGcqxF1qCwRgNveF56gtRoFmDxgToVR9uyKmbda",
  "key14": "aDe2wsWVS2d1iqsLTFpf8nAYRNHa21YDmRHeFDTKycrwrhajN9VD88RA9oLZAu5zvszTyiEKv8TUKgvuDd1886m",
  "key15": "5XPCzEetsJZneRVacTxWoArSxEATKPyvZ8GadvQLDZpmRR95t4gRJPy8ZZBDieKoExaqoE14Qt5Ub2JHMVeD3SWo",
  "key16": "5DctkNvvGyg9juHR88Nea1W7tcgSpG5LA36ZwjEoFbYPViosv9htWTj2Fq3PKb2f714cq1KnW1roJSUX4JVGVu8t",
  "key17": "3KtrDRbNcUTgm1TCA92YGLRZzcFbveqkRxK3RsB1wxwwZQAr9JwkC6LjSPTqXxaKAYjBrfkuY7pwLeByDCZZSQmh",
  "key18": "2cwkSpbgQuwnLN17cDVn5vk6kJcL6vB5bDvMxbP629ZMF39CxgNTFQRxMMGPSrSe3212NJSuGbjGut8KBGg3G34k",
  "key19": "6JttdASs8g5vxq88piSC8yZg1GjLHgqcFqSsD8HwowejoLFvVv2pGUzDL8UiwHTGfawua5Aofvw8C3366WJVAng",
  "key20": "5a8rH9RxfoVHsJNbf32ucKjZgb5P1pFADPnXVSHTgHR4e1mUMzdNw52TEz6BtdEYgrK3zGyYgF2y5kBvKBnfdxBr",
  "key21": "5wNnJLirDus6Bi4WXjJvZMd2ZmE97w3Qod6uzjwfBjnfdfc2h4GogaVfoSid1hJVE5f2K7Eaivt1m6wwrQ1VcapK",
  "key22": "26SbsRBFyo8QYHVQAuGD3SdUSJNdj6cBykAHUCrP7rpbkG3vQVNkADEDG1VLRLuUAjQ1wLh4ab6FD7nEHyLL1bt5",
  "key23": "5AtAC8ZS69CbbLzpH6Z4yKf8JwnrfkBNLVYvmQmoJnF7zrTVK1TF6nVRtAFQvxysAUAKLTzu6zfxvn2bncavyA4r",
  "key24": "3BX32WJp9wu7BW61epZKXL6zsTRbW3bSdpwA8p6DTY3ZGvCPdxUVmpG2hkvA6o5zAoSX5ph4YvhYETbuoTPt3tim",
  "key25": "63J1YD6198u8e5beZPGHzk58F1aXw4CUQaXmM69b3u1gS469qZYpcGri4FqKhX34UiMivW5J82ui9ToaTdrrLq8R",
  "key26": "2KjpK8gKtysTqVNDMcitSJFBe1HkLckiJzYpHJBLqxLNURigvYcprSiF4bs3WoeGnQk6PcshBbteumP3rUk4dWSd",
  "key27": "3nr3xRD6vhyWczBKhN3jNeh8yhr3DAeManAJDMcLCHcJHDmvTS5byGvM74WBEbVeYciJmSdYqYYuoqgdhTZdrUdc",
  "key28": "2U15hHVVA1c3SgfhuKNRgwQcRfbdciJLS46kTTBNxH4qFxC1KoS7p4WWHzCWWgRQF17jdvfHq9darQn17yLFY4x5",
  "key29": "2fKVkt6vKjPsCTUuaXbGnvQfFdXttpwQmCHZTMFHxPz3WQ67Qy5ZJYka4xBGwAc34qirzi3wyA5Ue6M9d1hm5bF4",
  "key30": "4fuwwbjc6pAzJw5V6gcRNarLG9acffRyc9WNXFr6tggeXoMxPyNV6K4P4AbbD7ZTD7YtLSAEng5Q9mpqi6xTeCv8",
  "key31": "4kCi2xQ3z38KSQqEKi7pddyufMKJwNXGVZK8GrFF2GzRXxEjt6dmcn8AxotVUrmsa1Ye1oWFurZPugPkwqkdHpva",
  "key32": "2bqKjXaQjCchBzPBZbdTJqYPLCJRUVQ3CWW4hAErcL72rcvHq4wN4CrsEryZPqCNv78i23uQa9aoKiVNmcNRQfxR",
  "key33": "2wquN5mn5CNkJSvPt63kZxwGPoKHTzGxeRBuDDvfHM5ix3BZB5yD87qDkttQUv1bVHkQqo4SyBwoR7qsTBVbTaHq",
  "key34": "2hxcMfw6mv3DXqos1KVLeZdNfWU3rBFvFoebangtncePLZu6kwKmK3j1imLFCoSMTfUDxfwZf9Hs2mNyfULmKzHc",
  "key35": "3rZTfXLwpgmgZH2S36xa5w2jU1zW8Bz3pcjFLcVDAhAFECfXpH6crP6ezPESD56qrdvRgRcTW2FJnupjit1pdPs2",
  "key36": "33PJqgDQYYB6WCHj3DX9vJhAQHN5eA2sP4vMXg2FD88kdPC5xh5t4swc3Nx1JbaKu42bidzHwat4kTSxYiUaVkvD",
  "key37": "2pmeazo2dcQKSMqLuQhywAQjf4hRo4RD8h5jPTuV1EU9XTXbUKYdoUbQi9oTn2maR3s4vLemWUeAQeDHPZK5eBpK",
  "key38": "4BKm8HJ6hWCaBRvcu2UjtcQcSfUk6MEkCVxe4aQMQcJoc9Udx92nvDMCyUN3WDXjMWEroMiSyKPqpQC1sZJnZ49z",
  "key39": "3XDFdQfrFf1p8wCKiLL52zXSvuBzb99FuutQBtttgAvZqezGhyJdEebnMCJzJ6rwmNXxeYRU9g2ADjDA3pYEsdsD",
  "key40": "5vH4tZpqpFuUPWsUxahqV4cH51aQHP2CevzduHcVf4HFtft834aSfN2iNhbrz5n6X3yTGeWyB5NxAaTgC7CJJxbx",
  "key41": "heVFTa397WggWVZtiv2nDjmNDJZ3DrES5YXQJXcEV6omD26NGJDLTYwvMYjPTRj53yUeFM8ryzV4w39MkspyW3L",
  "key42": "WZWzibeBUQ6RqvE1ZL9hPmdUbyg5WZu6CzJpm9Fe9ZikkKvUu9XwU7rqfs11ZUvpog3VVX2uTQ2yXsPCvz19zqW",
  "key43": "2MMc3T8NU4cApKPdZasa2WGbPYLTF3CyAJ1wRdZYsUS3GQH9rXNtF9dPA8AzfhV8rufBVvNqGiUegj8HrxRFuuMv",
  "key44": "52upwYaC3xYfafpawGZahmPunMnrUYvzfAp5gL6iDGoaRk7o9XPeRFY9exw2ew88vsGvVnhSAKX3wYcmuyVvSVJK",
  "key45": "33TATM3cgbTBFufrBp16MYJhhwLtwi7eaBgNq53N3KB1FDkYk5sx2ooLxTVPgsDUGDCudRjVhsBi5NaGBNVPZyBU",
  "key46": "9cyBnkWT2t6S4pdHJRTdDRNxzx6tTpGK285fQyFEkVW8nKjA2K94BAc1B1JCXks8aBRB1uBH7tEABQuMQhFSuoR",
  "key47": "2ra7JHMEMFQPmKgf5aMJmf5xKQ25HPzUXxCVf69BuaCXRtVtxBXcrDgS4yZX2ehjXSmhpgSNd6qUXi4DyPGa5htu",
  "key48": "RhgJU6tM7ccR5LjKbErdYcZ8SXvHUiHyqDYgRHtKDdEREVGGMMxH3zJiRuJAh3j18yH5gWbxShEwfwrBDNaGH6G",
  "key49": "4iFrTqgGFDXumx6fdJBTBKLLbsJobwDKjPKpSvoWkqroUEsg9wEeDMi6UA9a8wieZj5F1N1xDiZ2KouM6AbYttRJ"
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
