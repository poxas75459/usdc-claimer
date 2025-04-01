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
    "3GiHsZf7yZ7s26AoBamHW4Q6UADM9fwCUSqK3eFm6MLfAkrRyaX79fePszxHxdct1qHNbLtQ37a8awNxAs8jnfkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWRpEgbSRRHxGJVbnQs6h8ofDVF76JrjDWfQ4AfstGb9iw7xj5BVYQ7HGyQ68LUSgGEAzRqm9vnXdX8t7Ew1HV3",
  "key1": "5a9mNor36tR9GEQVjZfaiv84bhPrT2sXrvvc2E73Jh4YiBF5RUg57Z3QSJ5QUe2M4f8yoVw395YWfYcowfV3nyTX",
  "key2": "6g3ZEQdxQbE8iq4fMJn28gpT1wt2egV5mukrbCTf7ocwUgfTpEJ8h2dDhmzhvvPsLWwrWVvaZipJ5KxehKgrh3t",
  "key3": "weiNhQaiyDW2o9kr5fusudmBxDpQVn6wQEeSS2K7s7jDjZZM23de8oFHAtrtcecSDHRgYKUBDoLXR9q97V8Qnme",
  "key4": "4K7erYkgkU2Pi1JSsj4Wr6wryiNuZEcypdZq2L6zbmQAZw1RzZo57VkhnzaR76MtuRJJ2cgAMkhzYNBxpkKso84X",
  "key5": "2sX4mpvd7SRAjBQnNxtEvAJzMsxRiaX96qfAobmDQNxWbeQpbhWN8CByNVWV6N9VqQgUVAvcDeAiiWo3MoeB3vrf",
  "key6": "5JnCoZvFnrsgprN7cGtRktfGEvvX3v3P5sXcCgnL9WfHKbuXHtqEs8sz6vzaPyQEzQzwQH6bd6qxPeL6T7s8t1Hc",
  "key7": "3UTe3s3sWb8EFfVjUZNL2B9evi8MfRnfe5WTf2vC8pY5n5UfkgBZ7TQ9wXRSZFM5g3ywqrn9npYTXBDckSDaWh91",
  "key8": "5hcT2fndeoQVQp3iebDQRbU173GdmG3xjvSeDYStsgyHVofVjJAtgnAmkTjqrb1z3YPvzH9TrENeCpyCSz6WUJVQ",
  "key9": "3zjr4ttzf8U4rQa8AcCzhL2FWVnRf1kW8mi5AoVETxvC2EBLh1zVfxm2sosYPE5KitQhFoP3LNgmDc47MZQcVuvw",
  "key10": "X2nX4BgyQoh3y9Ha3RaYbiXkUsUWF6TXeitrYNfqR8JbG3cMpEfiYtrX6ScyXVvQokJxeGCMmuSzrVhSEAhS9Vk",
  "key11": "ThakZmjopmXyAdU4oBj48cacKCvyJghjcyAxgwuLpdV9isKFV4VFn5D6XBrTti8QuSH2Wa2eJPAKAZGXEsrpzRB",
  "key12": "5bcazPvmVyznawUyibyCsB3frpFR4ksrUzrcNCsKqsp7AQ8hiBHY2EAkhZjtgFtM9n78RuLCAYCHLSM4ThWPGuaW",
  "key13": "fqqBgXDCkurt5cLoqwwB1KDfcV4J6awT99rpDa3MhAkvWJJvP2WefYwmQfw35rpfFeYpbWDE6VUnMuY6xBsYwUV",
  "key14": "3TYVnmu26VuENa67VgbvL3pyeTeuJJwEPWh3j9craSWvo9m1LDaGW1SQVCztML9oD8rBFXYj143MBjiQoMt2q2FF",
  "key15": "2sPZsBtCoBzLWoaFRVMA6TYHYAgt9hbNJpmcvupZZsqHvnfXjL9rDi9Bbwz64GRvzNisPv9EC5qjEymbVbaQ3GLd",
  "key16": "2mqwup1eDXqx1Y7EfC6Cj1rrnNzrRrpnTYRLTmWUhPkWayHZaiLgfVXLFCXAfSmKGGqAVgKVDgG2vgKuxB6J1vMC",
  "key17": "t51a2K1gcSs5ZMVw4LvaRNY3kfBQ4v76s1pyFK74qVDobUXQcKSAsb2wLbaFVrWdupNB2nnYAkjgDveYzrFhfad",
  "key18": "54fHEnj7VkpuBX37mWdrDGHXKJE2Ga1jYrKc4NRJvzvZBYQ44JJoNbYYhBPygwTFLn7asxR5m7sMTdBUNoyPBdij",
  "key19": "RqfhB2vGpqXpZUe4JtTSTCX4RATMqZcc7CHsA9ekDHzTT5gjqim61eTQMi6QuCJCxx9dnXBctoKPMLX4QKnUCKP",
  "key20": "2kLC53Us9mr1RLiNLL4zgisZNdRSQ3qPucV8doQRkqdsX3L4ocgjz5hEcNWDN1nVkV95acwW6BRTn7DHLdtqgHHx",
  "key21": "592BRtCMFrnRibaPo7gWjksy21VVX82vGH3CJTvAbh9eRHxZw85Jhs8nnf9T2tb9NRtyhRnyj43rJ2L9Q6XXbDZG",
  "key22": "BsAnegdxaWwXnuqBvdJF7NRg6a8mnEsiyapWA6ruFcbW24KhWDLpEemaSWNPWZzqtzwdauMbtZkzFaXEZ7Msfvt",
  "key23": "3B3ABpSzCeyKi2uuxrx9LfKVSFmy1jYYc25HwqTV6gh2KzcVdjJ6ue46KkJBDzk8LvMKVgv6UN31TWBXbVBwfMc4",
  "key24": "BFbsXNw32fjE2RJh5MG1ZBuU752Z7MYDznGhZ7JCYU1sjek9grDymyK5yTKKaWED6gfefUhhMhTSc6tyJPJYMJ3",
  "key25": "3TAGDU79iAFZZnSdLNZWFPAcUeHbymaSJrJBokgqKFGjs2gWHBSVhYMPouHnNvvSU7ur4DXnaKUqnXAeGKYz6pX",
  "key26": "36eRDpDcNF43Yoh5xee9hWDx7w5ArfiUEdDiwwNJCU4XbDp68kktxryKQS2dq8vtHGFcasqEJR7GVvbrgnuvmnVP",
  "key27": "5DoFFqMDcKUyXJgnBQShfc9aeaeTXiMycV84iayFo7qa4aSS9xWf3hBaAPSU17RJDv24X1go5m5vZTgWZkKmGLBs",
  "key28": "252Kaq5nFyvBuBLpuzuDgqs26Z4AyeAVeGvzSqsMGDGbuWQcWFjkFj8GPEKaMLZ1py8zaJkvVqa2iVydCBUR31Ws",
  "key29": "4S6i5pd6kVi9tcyCosZfAs2ARm7U5Z8JTLj8ZQgpdgAc6zckBaiYWZZoEqHgeMjicejWW3RFCQvmPsEJbcWKHUoh",
  "key30": "4RLCR8zzf4QcbvuZSNeNVwuTY3uinq4cenzRcF7BGN6HWpmr7jeaPhL7kUf7atZHw9aBNK1923DaYbE1GmSp2XVL",
  "key31": "49shSG7RtVkUyA1S72BiDaJA855fE4GDLFGvBv2sxY1D1nfq4qD5oiBQYhRoCa9w7C6TXK7auswh7XFwe1Hj6gXd",
  "key32": "3Zzz5GQ5H4gBWS1n5qtWH9EzNvvHk3q6UZ3uv55Ys5diUPKKLB8ABvafRSL9gtyoSTMSFs3xuLqEw31kfcAaLSLk",
  "key33": "iWWQfdt7uJGUhzwJ7sZSu8TLVyNGhKmnMPf8RAapxvVixoMkmrQU4xGHHKMWmYJGiyJRsK7a1R7Cu9y5sLLNDbn",
  "key34": "55SjGgHJhMwmBsZ3Mv3uNejDxT9XPugxSZCTM4S6iii66d1BDfcjwD9EtyfBfKfiGNGVa7ncaQ8iJtG9zP2sGVYF",
  "key35": "5rMAtq3eDr1Anx18rHiVQ5qGfEqtVNRKtUxyLqXoxiQM7Pgdyg8FqhFJ2Y4WGVmznNfUFoE4UhezR87jfYBUzkUh",
  "key36": "66oEZy1TN7B9DaLoiUka4rFtqVtAXU6w4zTgyBMtq34Vmh6GGkJ9TTbaJRPcLAfdNVv9sDdaGfzjq16WohBqDbAj",
  "key37": "49GD6D6CMRZJF6c8SYHCTTvF5qxPy3gZLH9svaqDUJpEKjeURdndMYePMhBaPqq9BQymCFvqL2TPRP3Te2S8VcdW",
  "key38": "SDShtcHxgjPXJDN5bTzDMbamAPeHmgzBtDAFAZnDkSRNVKQR3TeEsryJexUcNaqSbtmyGptefFyF7b24Ydd8NTo",
  "key39": "4FMA99WN9FCXH7dCYyrD8WBmHhQSpfrACiibebmVECgDYn9qgHJBRN1iS41oM2f1B549GvKxgTV3cg9W2KWg78L5",
  "key40": "4soYxKYxhkakgq9tCNfkk2jiu2r71PtvtsFT6h8nw3zqqds5Ut9tmTCw1Dm6gRAgw8W74YZoy2kVuSW3pM8TzPTM",
  "key41": "NndRS3WxRywAPaoacTyLheWYwAzLQ2FSJoJkSLBd4N6Nsh2PQCgiKmx7AZicVs34KZStF4y5mb5HGU2WPNZWZaC",
  "key42": "5ZERHUtWAc8LA6YJ8v87RrGKD1EcrxjjetNHgXdhgog2Wif3CRehfw5zVnNmLvmKE1NouGK1sofL2oScwajae6Ff",
  "key43": "23E12erRvme3i5r3CgbjNk5Hfcq1pd2b3nnQ7ATyissqyKxRD9tCZdFfQ9iwLEkchf5XEnRzV8aSRdTDqzoH429j",
  "key44": "6786XxHmY6C3xRKkeihyuqjvYvoHZacK2GqLzVKNJkTQLMKUmrDjm6CX5ZfNet2NqHTU4hQHALEJo4AnBm5LUWe9",
  "key45": "jhvbK51xNTXeJkSokRLtgSNwUDRu22v5JvK3ubjG1xgGvxxgrn2WMHp6TMLt5uZvWKLiJFTyHaAyLuw68dcU2jn",
  "key46": "3nD7NTAeZq2kpPNWjfms5DsPfmDgsT5L4m4FoTLC9wseQEeUiPAdY4eFw65N2hSGttR9MLe2CgaSAXRv53zM7uxU"
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
