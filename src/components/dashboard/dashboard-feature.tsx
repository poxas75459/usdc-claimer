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
    "2FjUzcndBRFGNPNRHsEcY2nUoBNYfDj4DmxYBqd1sgugxGHrTQyk8eriYNKEAULUDwsuzqeJCcw6rdqV2CfZy84N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxbSAxUxFSJMiGsNNgcxVpfNwmAnMHR5iWMLcknmnbXmqNNt1iXBX4eyCNNJVs9cANG2XENya1w8LA8y4XQEYSf",
  "key1": "pJK7rKmThAHUtrrpeHCtcGRiLrfb6fvxSgVBSXmXrXpsr15yXFgahzrYdQqRMdTNA9zk27XBjG7sJTyenQuEv1g",
  "key2": "fRjXBaR1wLp5oS3MmCkjTNrHsxMmZE8d8FLbt29Wa3Vzt343DHYVSknSPMoRsTHrbP7ESnyz3UP32q3JVdHu4eM",
  "key3": "3AGVgckM7d2KHKdUiknyk3RDCBAL1oQCSHraTVmj37o2bchFRu7GqCLnYExFvM54Dezb9LuecsXvLn6qiUecjzE4",
  "key4": "277vpxsuvWrPrTdYm2NQ6ymQbsxU613SzStpdkvuqXWgeEmrBq5ZLxg3VYEQSqA2fh1eZAAUqF3VPCQ91azbVdtW",
  "key5": "3hDWZTtnjWahcgBvsUqVPrVkUHrQhb9gPb77WiNZJWhV6HYk4HsEaTEADWhYSVD9ZJyS3tEEvkqa3WoaTQz4ryp2",
  "key6": "57wPwjvDH1TcEN7tQewQRkhXm9UCeYbuW4iDGUsnvMx7i94EtDdc2CEUV9fWV2cCzR7XXbo47DKRZbR8aoTZbjhK",
  "key7": "3MqfToaZKjCZnSNYmShDNH6CRNqExeUZKkUTmv9wYsk9ntnuedGJRRVjmAewBZi3962o2GPp27ecMcBzZf4qrtjy",
  "key8": "5HjsnSkfD7PGvQ75THdmwyiga8AGoCM9uR4j5JQ5SnEqZGac4h87QLdGEFbfycTpQW9oz2o3M9JWr2QjzXXRQuGZ",
  "key9": "2ZYzRtkMYzeLWyiu7qbsbQEUAWHqVBiJkyERmJpArUz6g4pP25qYvuWeNqkSMoZWQQBwhDCg7KZbZ8caLFCBRjFq",
  "key10": "2WBznvtnnsKu9R4zBiS5hawrpHjwNEMU6cge6DPuB2tGYjszekhHwB5E4nfMtKojZcbXCfHmnEJgGiNcbiFBeTyZ",
  "key11": "Jq7FZjxPgXiC1DEJuvCAx1WobUi3XxYwqbPEwcvkAjeXHAeKA9hXbMg7C7TRCRNAsPYTfgPf5NM1w53LQXpvpB7",
  "key12": "2PwtCkiK8SQHqT5yoadrW1gXS9Y6vbVbfs149HB5hmrvB6dZLeinmKysm8aQbgissLY8S9c6cr8uZKmg8JRRXKrJ",
  "key13": "227FWJSX8bUftpax9LCmZWF26DJRS3tt5jtJcPMT4qqgD6ZbT1TZjA1u3kQ77mn3yP6Hz1LnkhGtjCBBewZw9D9q",
  "key14": "SCZN3zMq9VK5wsmzYo9H2i2d5sXH8FykqxV9w4jR8NW5xFiEGrQBh2y2PtANKp8Rhsvu38hx2pE4Q4wNRWdQuDx",
  "key15": "4ZvgvWzpVaaan7oZKvEuNwtwWJUSYxQBtRTZV4fQ54ixk7QqX1dFJv5GozAfjAknMBd9wZ5a43TZumEFU2Ykv2AP",
  "key16": "3JhmqLCYkuMHDRGc8d7rAeHTkRpppFhaqhWcwCTntrPY9P7rYxo9P12pYdvxMLY7Eww1MZo7fckTxhuc7FKio4M5",
  "key17": "565ZHhoL52tfam3UaiEsqVSwmtkxVhBYgSexyGEkoBXfCJAPVQDoz81xqcH9iT6nuQHdVbCWdi5tPYsdhmRSusas",
  "key18": "3j1tvZMW1PFWCrTmUTArf4jHgCvqxJJwyi69dzpwRAxDweGxUEsRZfKb9hh2sgm9FdF8KmQcX4MhG3WjdEkJ54is",
  "key19": "pXEGKrKAPwJeqyYMveuzeW7GESo4bHRC9DVxNti8iWmx2PYujpN2126AzKGaZAVw5Gh1pHqNETXHy6XApn5jcux",
  "key20": "fWPNPWHUuYfpHVdQqTnPHnxiPKj6WK4FoyYkdxvzSPjwZbpTPvovjGZym6g54D7nynhSYe8NMrcvQqYXbYdxK6a",
  "key21": "25NQtDHqt7EAeCVyrSZ2bG6iHx7sBpTMwSC2uedqieFaEAqTM14zxChUzSFtraFBb9Wj9ULrgKbtidJZhftLentp",
  "key22": "4N8KfMyuaY3HuUDDJdzktm4K18QbCdmyiBcnRFbgAiWZoR2dTCst566XTJRHqK8xfRi3EGr7Fa1HqrhYWShiBKox",
  "key23": "5cd462E9PznzfPzh6aCWTpNjGgMZpoZkc632sZZ6MMEcwQF1USJrLEEf1eh29X6MgT4ZMqtWgBESyAWmMfciDnzp",
  "key24": "5UcSEuF7M2firiWp9nxdg8cU1TYZdPPRgTnpLWJoPkUwgfKcapM6TThYaTttiGbefhaEjhBcJKUUfesu4iDiCTRW",
  "key25": "2KungvitLqUrvg1bTMzWid8E9iEAYEwx5nV5sf7AWruxkrZRyGNmm2mWTez8a8cKie55wGb6tP2XBD4f6yp22sGD",
  "key26": "2XP1xnzXEDu7bRc8e8Ggh3L82rTwUM2sAWtc8cff5oYUMkNMzSeKtqgYqUrjBZtTUH1aqcg6qURS4X6wjxGMjZHx",
  "key27": "4k2y9MJHThRqMWhz3SDsP6n7JMJ2JuaxLS4sUCMw3qi2zhKEQUCiVA1CNKEXnFVBYEDrkQdqn9w73NAuwLiU4WEF",
  "key28": "qZqQMx3fbuN5vDSrK3WiKtCp8aeHBTS8mn9ZsJUR8XsvDja99meAEL8cBBFWFprsi3Z944u1cpvK4kEpbu3nzpk",
  "key29": "X3UrLxZyURxNS71wsLfCyR7dzWPxVkYfd5EX1ww5SXKrG7kYHfJp93fmQumrCpGM7U3ZuQPRuB4cNitouDHo9t1",
  "key30": "2yjeKp2DmAUkagnvFPfzuoCPjNGeYzJyqSDA3uMMpQshqY6eDA8rAq49aGi4VBb5VWBfLRUpAe33sQdH1PkvzNHQ",
  "key31": "4VtxjkowrzTZyWs5MmbBKa3AUeGF2ZRqqnYQvdMHM5yXTsdAMrdaUeCKkcTU944qXokYm1r2txNce6TmN1Ymziya",
  "key32": "4WjGhjrKyrxFiZzFxEHsjwwegou7hq8REnBowYykhzKsVkeSzUvhZCtjvsfeZSDtrEpv28wxu8PnekGyVdVnjCSr",
  "key33": "3mQVqjL4619VoqvziFVc9Sd4XSqJ2Pit2vexVRZKFeq7iY4zCBSAjJfmKwZ17GUyT5tkLT9u6cb3EaBA1rJnZEHx",
  "key34": "55ZkJGZoL9FwWMku5zVstfQPZCewgn7uXVVnoU4Giy9FX9PsJxdpitHnfmcwbwSQVMvqu7HH6xBquBVKP6K91HcL",
  "key35": "29Uei4xGLX8EWyREbZL8KC1uLhBf5GKs5ChcJj2kfZ6HcNfsFoSjFY8FrCpcXzDVQyXtzb7VFGwaSqTViipWiPag",
  "key36": "5PbkCGKyh1raddc6nHhUQjNHEef8Wn41prSptuUu1oaafcH3DdKMSJ91vcE4Xt9wVEvMw9HsqrAeBzQrxTHJpVmo",
  "key37": "QDj2VnjEy3L62jvED4JMJukYGQ6fgJHvCwa3doT5Sq2mKQzf3pLdMZfjFE1D8UtzgQcAdRZvm7beFirhHgm8EAo",
  "key38": "5PErsYHBFHMqTJ3V2xSUVX73Hv1ZaqkVJaJwfTtL5TkQBtgJB6LiLoTAJJ8GpxQLhULqBVc5WMGd3AypB1VEp9xw",
  "key39": "4uMUuMxjseqPxtqFDMj3sVv6BjvzY98a9F1icVFumD9gtfPDnkQUSnQp6p9AAUdYJtMfdHtUycmqFsVTM8bm7p4U",
  "key40": "4f39rbxyvCRiK8aUy9Pcy3CcQcveVqmdpjEtuSbQuDWabiW1Bhy6DesmLvMxomNHvpRZMnKWfgejLKaTonGjK8u2",
  "key41": "2yQNakPWwpteSAiFyg3b8385VjMhgJWDMKntRCGe3hefEbyYBg1M4frVkSJj7DnTjV4zgqBnXdvAtrtnmhyLSqLu",
  "key42": "2S8Y4Z6dx4r8sBv21Cy7ZTFFqNCXVC1zqFSwKNEDF2JpMtvRYBA7jpZTaXNC1eaYXE5syHJeGTYvJV3mdKGQrcuQ",
  "key43": "3Gqq7k4fikM2DNtbFsGvoahJV8ihyVuwut9FtWyvevm5K2vfNLUwi3kZ6QsdQXAoLw1UA1HHUM1gWm1eUfXrBXtm",
  "key44": "2ayYhZZvxYgvDUZtjAdAUjksH2EQdeELLhDvnU83rTzp6s5L61Dhag9iLgkcjXVgTitkBbY14RGk62XM8gxhhkUa",
  "key45": "33hNxHfAkY5bCXuGS2oVEEB8Ghtc6cyNvgiyZ9xZjA4mZY7oaszR2KMjYXWnsPxWo63ECizK1tkYa87roB4jth4g",
  "key46": "4TcJt88kcD9C3DiepYix6H2vBmqwoesye9TnbNt7RBt2HX9qhG7wBECzJj91fG9rmYDmfe8oeDL3vdoGkVvUfZG8",
  "key47": "3b82anMSG39vHRPqm6T2UArQiPMYuevJ2qsGQzwNDPd6zxn8Ni5XXCUpawZPv4ChEB3TZCJkiEbh2cf35ycH2nCi",
  "key48": "4ukk83Hz4u44TMRxGY5YWQHct1i3Ss13Rp8UVGLJLLMzmtYxWsEdUkNDJQJ9sp7ziiEXdAm827hUPKwU9YdnMFD9",
  "key49": "2TFyfmDXGNqyVanj5xF7DTR5DNyZxCtYj3hsogJiVm4NHAoccLv7tkjxNvAkNYX4eYJMTrjLSYVWNcH2UAYkaa2Y"
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
