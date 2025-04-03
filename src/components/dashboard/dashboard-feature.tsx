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
    "45u47veiXYmf833DiGRtEP7RQHBmmW78npgKbJ9gkZX8HktxgY1quLQKmwhYCtQusgfYRTNs8DLfv3kktunuQyWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J29DmQvffgEBSEypnBtx77STwBq4oFHSYFhCV4NGZB7zSi3AxuNeQ8TJKxD6h5hWEHfVYu4cWRgHVK5ockqE2Ds",
  "key1": "3woyfoFbNkNsmMmCcShzvdwhcwBBuNp8RDvHx644T6XvaYSfPfxDpU5cB1ftJPaUCqbzbBgVScZLudSuPRfq4jaU",
  "key2": "4hjLkVijannvZj9u9rksdE7c2dHWzBY66cr9JmqTAPcQCj2hysyafSCTpCKiABuRUcQT2VzXWRTDg9sSL9YcDydd",
  "key3": "2bMnAChsrrYhRmti4K2emFuoeVSzv88wHVjt2CDHmQF1pZVYgT45scmq9Z6SDKhKX2V6KptqTvvTN2vgyNc6YoKD",
  "key4": "5dy6j5KsHd1azwBmhbUERMzNMUBLXbKYpdQmWyZ2uyk317mYKVHrmk1PRWmQhWfSuCo7bqn5uSJ6AurXpMUTSeKM",
  "key5": "516hVfn17evXat5xPcm8WMCj2mz9f6fBCsgHjQAcQrc6vePw5374fCJd5p735g4PheDQhTaeGyGDTnQ9UXiywn7i",
  "key6": "2XBVxuzHHZxFzASv5hQwih3wqvvkyX4EPVawvAbdkeiMVYojdEoNYmEQmFUDEVHWGq7826TDd9uXBMjx2MAhGh8w",
  "key7": "4BgA2qKvwbLTWbAYeKvBoJ3ZfcGHkF7WuUR4EVmqLdYhp5Tpko2UzKPqdWZNkCaxoen25E9LEb56UhsQMswjt8L4",
  "key8": "5sWM14ETmEGEGcRRWL1AHNxqbRc7jpMJfAArJAo8hqjweYV9hVhCXE9XXgWZs96kuyiLYfHE7W82ZEQvSngGDbLt",
  "key9": "2RY6JoBaRS94fC4MasJqTV63ABhA7qn8rTn2nZXgWRgS57VRigQXNeXNJ22uCSwsuj1m58JMXkg41YAFhVzipSx6",
  "key10": "2xWegaARAuLrzejwbsu3QCSdLYiJEEDEYgeDdF7D6oiEg9vmxwJ11P1xCfiKfEvJuFtjRhd3SwoJAAaasNh827dx",
  "key11": "3fsg3VRkEMTZgvkq3S7yuUvXn8E2T1iuPtT4zdG8N8YohvdKyzMzqJudkkoivYqiFqBqLrAoEP3fz2qCYsn3BVkK",
  "key12": "54BAMXG4HhjZ9rWPTKxVwsqRvCTZ92Q8uGkHaavFV87BrxeLgFX6JGS2VZiC2w7fdAXNS39qtgxpnZSGWkNyYB5V",
  "key13": "4fTn7u7Spn6o5xJC62z4w4g4Fk7C7e1gter1As9G2xreKnPHH3grAkZzu5kNfZcxdn3fpHYmh4P8xYdb552M3sme",
  "key14": "qinzrMiprLtAFDzcMLE5XkcY5SdF7AZAg6psg97yznUNTT2qb5JgHdES5R1Lmk4Ba3WGkyJJD7iqwywJi3N5EvX",
  "key15": "2ndieC2VDwX5wJeAFvp1v7jZMZuPBda2JYd6KgmdPv1c2mYFJK3VM7UCJz5wEyCwvPKHngwR5xF5uhdVfXmi7Cem",
  "key16": "5rNUhC8K5JNbsiyz7w6LJda29w9FmrJh9T68fupmzxDQ3zzYpFGF1NbP1R5ZjxioMNoKcyVAbwAMdy7krZrBqawL",
  "key17": "58S4ocBH2Y9o9iHzSywztWYcpRr4H1ttpviBDfqhZkvK7tiP1PqkuC9ShSv9v75UKRzVKKuFyDPQmwR73QCPDqB3",
  "key18": "38brzoAx63htxmhs3r47D5UwTymyJm66PRvMqYymSQT2QwYqNbFBskKftDqLmzfN8auBUVHmyRUtF598BtjeEpAG",
  "key19": "dScMCYForiyEqCVZnvG2ULiUsAPiEV5VDNP8KTj728BLpdxftRWpkQhzSkuTmxicBy17NN9WKhfmQ7HMu6cxL2p",
  "key20": "53va2xKhirn2kAW2B9kFXxbrgXJLQ2r9RBq6K1GQKZoCJR1zDvjiXsrcHwHWrnvrUGTsvqG21WKpBJKJPfNa3mvv",
  "key21": "4Xbt72BUb8NoEP7pmXC4yu7kV7upaWV8k5xhFErdiXap8FBTaBtMsZM8yfPqEqscwxkvzFZku71qpqiYykdtJrLC",
  "key22": "5nkJQT53yvqmim6m9WWct4Aa2WxJwspdEHTWECZUyxibfkoAFgRKX4taPFiuC4DcVYpGKGvznSaye5WBV5sNMp7n",
  "key23": "naWZgHSEsJJATpm2rFrzbeNyfTYKpm6FPLeZZCCc9PgQsNVbxEhVw4HuybLBDm25wjVYfXfu9kXwbC3UkWVeQAh",
  "key24": "5g1gm3xpdb3Ms4UJKvXfFCzWPkkZjTTZS8e48v7KWfDt7DVrfc7A6hemE5FWPyU153Aw1KoZBv6mF7X6dXMNdDWH",
  "key25": "RrxiyPE7YctnNqNAnkh5sQqrHQCCjtSn46gAjVxmm2Az8UVokCAfiUxargcTVy2251ZCKEuw4ru2pk7HRW3oA28",
  "key26": "2m9gxFtA2uz97f1azEf3aNXE5jGcdWguj6wuedm6XAWyuibuhjuhMot7VrFdEKNYEMUxU5jayhmU4bWuCyZvyDtS",
  "key27": "3s9dHsTahTtUbe29GV9osxBP9mYWffNBM4XxGfFSozcxLDogpwEBtypxnXkFy6Lwm99CtV6HCr9ECJ5Gp7eCryo",
  "key28": "62mtDZnmpAsX3JV9HWLm5s6LBhXuPNQTxFpnAqtQYmU3CtPmdEroj75HxWcbTms4hMSEYRuJnUzh99umQUgUe21L",
  "key29": "5HXSVooj6M63cuAPzmbb8P2QEipJdzcB8Hmt6uALCnUgaPoXPDL4rbBi8CnbH8F3ZbBdbFBQ8JJi6vWbA4Dssvfm",
  "key30": "4c34qV9AQp1QYETxRNKNdm8sxvQxKMW9Sgj6CSHXJ2Q3u8PitcSq4e3eoR5uUW7bWkSbiiUmoNBf1L1tgX6xiLqT",
  "key31": "21y1zTb6n3sVvJRPdHPEzgWwnX59TW42dCPjXtQA9ziH2AUiKThnc5EMsKezbaLST4aZYFp7NoHhXFkJR4ofVH9Q",
  "key32": "2BZPdcUV2cD3Hi4TJzaGcB6yGq7fhzbNU5WMosDTF8vq3R89JUHPFB6ZhU7Zy51H988UEFBtJuQUVJJeymsFbyKu",
  "key33": "4B5ZD5brt8uWBnRAGKig75pUkSUrdNENU4mfmWHhcxthrKgZb5pGAtqNApG8Ci2mwcq6NB1te3D7HB5x5eTbV476",
  "key34": "fPUpGqTP2M5dqLB4c7MiyJQkEA5AWY1XfFp1bRrQxXaxBR1gtCJkmNDjXSQvLhRNuBeQNyjubVsiUJTrYUqc84z",
  "key35": "4w5PsBCpXzqbyDeixCaBBgwrMKUgGnNAAur99k9daTb2qBbWhZZgquACxtUB7p39QvcUmsHc9azNBNPQe2ZWuToo",
  "key36": "4mioCtwYdgyKfKy2PzKiH4pBQmpe1YsScZsjScr1X8sfi4SMmF9DbVZopW677A1H5NFBVyd44PjJBZ1rU6pfWjuE",
  "key37": "4FyzaBPDwho1SXUb8M2AYYh6ktJif7BkSw9AA7q2QuMR1VQbj64nbb1EErnxPYFkhfx2ca7miZwzDTiqB4bKFG8k",
  "key38": "2B44233hgVr5QLmdErKoqmpf9oPkzJMnw8cKjc534fCSFrR9kC7XoV9oHXKzcmXYEkbZkCigq3odF9hoFvGX1w4t",
  "key39": "tCm9quYYRW3dfw7NgarWjsLDNqDmtWTAhnUfZf4qtqjq1uxrs26CWcNru4eoD6gRcg9UQqDJaAUvdhMHRCKmQ9N",
  "key40": "hTCN2J4dyDVp7AH5yhceTb9JUJEHTms37ShAZu5JckGnpZb8Ba61yf7NFe3tWv3DJQ9fAftpr5NAgudhgFRUQ9J",
  "key41": "5nuFzUyFDzND59SPzSCeXhkU1QVN49VHEGFUrRJriUcPDSTDAqEaFCCFEEvPhYWrqnAQnWytgdcaXTAuRncKUf4L",
  "key42": "3161qCk6KpmYKmYKhWJbeW2SnsbLAfhBWfaBNh4oFHBEhPcsLCJk4HdWkBU6p9j62WDNQvmYeGXVukC14in7TH2v",
  "key43": "4FDGrButWELd4S98qDLmQZK7kyvgMbiNm6ZgXGu6S8ksyMnPAoUZMfU3Fx1fbf9g3o6Q6y54QpqbjSBSgototMfF",
  "key44": "27QTiRR48wmeNXeo7a1s92RMFgzhD492asQJTDJAkHMV42T2KubvVjoCD7McT2iNXXnJsb91ndyXrq5cdCq1oHJp",
  "key45": "4UEfYtRfoVKfsYnsjPtPSh7ahSvtAceJSM8datPoQetmmXEaG67wqPaSyENzABWzpKTNjdQYLfeAseWc5k289D4e",
  "key46": "4fEz7zppUAKxHCjHbSNEw6qrwME6TxqPGrhVL9Y9vmug8hGDWphsZeXmHRte1rkHvbsPNNTX7kFVzaAjDCfhrGZ6"
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
