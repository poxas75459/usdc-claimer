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
    "37FTF2NDQghwFC6ZdBvk89WzDuxaunpps2vRgeuvVkLAXN4rscHtTYLMq4Nj6GbkZPcXNg5VWNbQh5sk9cgN12Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geP8o44SZRLs92tP96t7EbQYbYGqs6xDnm6kEdcXwHGoZKYd1zQxTcf5uaTNhx8fxYrLwGVQXMCQrRCbXMQ8E6R",
  "key1": "56pRemccezRizvmYTQkpq1vbpRCZr7iaq9nana3CP3YAdnLKjg24Y7WWVrpoN8RwA8ZdVEiqkCWobQTWk2pcski3",
  "key2": "LLm73ts2rEDRowtNrKLoVSFWRa8zSTxFNchsz8z981fhVFpoRY5o7QthdrPUGu77XsEGepKYBMBzkJ4Crbv1Hxk",
  "key3": "31NXndL1yZqC2x3XmMgN8eAk1GxTiQC8P8Ei1zh1Mze3QpAhJKDqhG43cz1HFznUBA5U71aHEwtKoAjSdeND7oeU",
  "key4": "5sPcLodrE49oDY4ZLJoddjbdHnqhZSmPJjFrQR6PxkdyFm7Gg6X7zth6jHvxAjrjqXtGgMeBSWTgnRN4qJACkHpx",
  "key5": "2sR29D1EkBJ3NJtWk284BhCgTLXywixjvT1RLonV9uafqcUMqQ1t5X6YZNmbxLcAndZVMvors8GKKfvdtRAcrJft",
  "key6": "2sWpeVVoYacdX7uUskvPNhiboQ4PcQBpKxeGEBodxVWjiM7eHBgWspeSji5FcZJGJU28oKCQwHHDBQHJNG4GHaFs",
  "key7": "sX2hdnAfvo7ikShg7V9zDcuGVTtabDsKTsEHMcwDW6uPF1W1meSA6AXCeSAWTbWy21DpdXTRBRcswHAzLJAMWhD",
  "key8": "3PXT9akDhr8ZTrRt3EixFc3rFEYm55Rzi3sMHCggLdZ9iNidnnncNjXUZEoVZTUsr2CYB87GVoYPH5sqrNCKhmkH",
  "key9": "4eN3AfuasnS7by92G1HoPjh1zSMp7nrAitJ3ip8ib8rr4zaNaFJuFYZC5LtegaCWMbujZRHKbW25WcCHoSfyNr86",
  "key10": "3v3DSJiASmPrJNcB95PmVVgKEa6vam43QfYrGK6ruTSAwhXD66kYCuwDk8fnLVJ3zeZ67cxAjqhFxJnCE5NiwLJt",
  "key11": "3Uif7tTTbBAnhD9x4dNscYHTPjXzwRZVhGadZwagw9etbXoV5dk9SGAyPWKXPNihuG5o6EQATAZt61nLEy4WKyPm",
  "key12": "4MdTcZvRRYkB7xusZzeSBnJqszUKUhuFTfc2uQyGHp3HNNKL65Rh6zL57JbtxNHMQqiBYBrGTFZx8dkmNz5rEjzg",
  "key13": "5teVZe2ivw5rtDDcV8ytEBcS43eCvFNNrk5GHw1jzthFwU2RUTFeX73cHf8C4MUcYxHBP11tFkPYBHuPVKsVjW8b",
  "key14": "4YMjGg5XAAvJtb3X6YNgQAjiCxMbCGaEsEdf2giEZC4qceJKQdaf2zz3ADQmtdEMv8EBERtJaN9UQ2WLvcA48BCK",
  "key15": "2yhUnFDkwAmxgSq2iureQqF8cQmjYRi8imk8SWgkyuRapC5uvf1sfx9TuKh82ZGGQk8EnYC6ourZkCqFciKan3TV",
  "key16": "2sTxV7zy2nt9gM1VdhipsKWWGQU1xgbu3TwRBQbe31VbgFGr3LrJwxGsRW2QTsjFkH4KTjfyKAfW84yQFSd6eZx1",
  "key17": "44uCpmy22jUZmxCAYaZJUfAkW1QcLjqhCpkwzAn2EThTvaiCrQSWJQuW4RWmnTKUBPVUe1pyDwHjNJJ63GsJgHXv",
  "key18": "2XbXADS39PRNudcu625FTWBB9FVXsQcuLvPoPBCTSTSWxwfADtnMjzmPPvZYYWiXym1R9szUc4Spqz3uprqhFtTL",
  "key19": "3Zyzcpkks15gyAfUK81GYjNgwQavAVD51KQCqPfqYADyZtTnvSCakV8yvzg3etREqMFwkRoZkCh9cu4HTkjHTFXH",
  "key20": "5dUAath83T8q6S6HRLZUG7LuT61EZXSNteBjrgUmfbnG39y4Vx7cDExzyUUHVpm9fxkCMQCoTiE99Q3scBnDoL2a",
  "key21": "3i64w5XSVBCpcrybKFLgCCdj4bue161wYXDZmC8HGuUuUchKMrTN8S51ovXpg9ntxbCdZSzyS4uSSeeZDJyyrd7W",
  "key22": "2FMVksN8n3xGm1GPL8xcHipQA6ob5sCLGwaAiTrK2feN6kbYW2gz4DozCV6RFbjcn5YMw5bA9HJ77fQepszwXbom",
  "key23": "3MXcv4zoVjDwW9qj3E7VhQQor6RpVC2swjRS4am6jHip8gN1VYKVyGJ42DLuzHbPXAFsW23Nqi6A8rCoZVdVDTQe",
  "key24": "2wDKe8yfb97y37s7Lc27DHdp9N92X19neyaxmxjU7K15HAnE3GGy3jEK9JQvsmKpF3YhEQmC6mY5EGu6LdnUSx4C",
  "key25": "3q8VzsnxiDXKZwAWg8dpRE86FCSGovr4c5iadU7juPB3JYaUgRmx2k4iD5zP3noJjQjQMA69DynbRfVxeLce5Yom",
  "key26": "4Rnr45ikECctyGUJvGaaSzDsYWweKrKRP6YsBYhqCYSBQmWkqX6vpkUWXgmk6qzo1SjokXw7FitcmhkDY7ZrU5mG",
  "key27": "4wtqQBKUXcVZSAqDpuP7RUNmmw8Pi53FPEk96rNTHQ8savQeb8f9ptwZH7GTtmHP8piRn5cMy67xy7M8GShYU7LD",
  "key28": "3Z3EDVovy7ErRw5jz4hLLSEKNJyWcbXDxEBJrjoEVQoQskikUmzg8A126K5MuUhYVVUvXgPTKV5vgiZMb6SGPEzF",
  "key29": "37Ur89dmfyPh18yye1uMtT4R7FYkSfmC75XqV6SyyJWQ6oeEpq4HE7vifjzVKy8XHSYAbfKcXJbfRJamN27bM9ne",
  "key30": "2jgYJM3EQH94S2xjQSY286KLemw3br9tz5d18U7V6MkWKpdx1VVSKHo1AsVfhjiGBDyNs6UaqTBTnDuurvdFVU8E",
  "key31": "4KmgsLFdwKd3chmHGENGdATu8jAbCLf8BRY7YjcaV7QyrqqYrj3XHaJM1upf3bafMoscavecLMetAUU5ebWkhpMc",
  "key32": "ca3SdPukdcd3Pi8HHsr32KVPSpjKSiMQu68ySbjcYqwoFSQTB7CgPHQXeJUDd9TbHfhyyx3DjJJwdVSA1B8FvWn",
  "key33": "4s6qtp1vp3K65VztFVxphDgJukNKnyXgnLYMLWdm4hMhhCdtWLhBPP9cbsjHJwjWCWPya3mxHFrduFFVGWUVYkqL"
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
