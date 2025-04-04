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
    "8H9G4gE4Ge8h679uFMbZhBy1tf37bB7YPRP75N89CCq4NmVpaGXgLPceoFfxk6Q4wqYXKMRC5RtvUBnwJVu2aX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BkJun4a5VSrC9i5AY3D1QFx6kRg6vA4oPuPrgqCPozScGRn3v6WvxjQet365jMW2UDiXcZMbHzcQFYvqzoaFtfa",
  "key1": "5o9Ufsqd8UTBktFT2U9moxXQfRHQVdMhoU1W44ugid9qtHcA4iuVv3VFkQFezXWT5dcAiGpNBBQBRuuYg3PcGSAG",
  "key2": "4Aj8ZYwydXxadJ6T3pzMNSkTqDtzzT4QE5H53m1PTG6DKk8NkZH735v8WKj1mNqp6svcD8fdVFZkStZFCptG2dfE",
  "key3": "5jjJ6pdD1KaTdQu8Fh1yXPRG6vHs5Kf8KQ9Jsys34mtELuyjxvVMXDnydQq9nDpfoeTVz2FT7UB3LX8aQKxLw9tY",
  "key4": "ZWWxy7YWmcN3NCDk1PeVhvS5TMN8XaeSznwM9D9X1FZwurRDVJqPUZRU7TsYP74BsHG2drXkRRAYNhYtBFCLeyE",
  "key5": "2BJ7zSez8b1LpPasNDjZ5XdLLan9XJ51KBDECUHFb3HGFnNAPPmPZnjy3bxsWwSQwe2EwknpegcHvn6sh1UJMV7y",
  "key6": "5jxKeXJPZPYxek8yyUH7Cx1xyhEpaEZEWAWgwp8ncfMSWDCE3xTrUyCEjDGAnrd9VTux3VZtknsJUzH7FkZE5XwM",
  "key7": "5q9179gvZEm4ur7qzTnAYDN5pNPMyagjPxcqarZ4vQz698hRyrHTQ1ULDv61aCijR3w4MDRxWQqCKAiffNGbkjnW",
  "key8": "2jTtYpUFT9CJ41uCL5BbV6EXmpBnyVxisv7jj8o4DzaKJokmJD1AbipojsBzfYjgctynfpmrakmHxDnQPrcwdZPX",
  "key9": "3YFFyuDatQhbUKwopcMKgrbq3MQeXvtU8Qdo9PoFW8h9tTHKncQvgw6H181dxFwrdvgbgtvfaFSnqvvdgDcsREdm",
  "key10": "maUfP396rzb9WN3NLoiM9y5s21wh4WwHNi87n5FpNQ7Uovo7cHguZVrStVWnormSTSBUAHkSRU5QAxzbySrsWJg",
  "key11": "3bV7B2MKXFkXiveMz8pqZnJW6CoUY7zUc8jngyk6nnjpX5f5gArTUVKrUrwD9U3v7a5ax8rYDbEyhxLgwSS2ntxL",
  "key12": "4AdwwEX22aKGsyxW5Bd8PhZsJNhkrKxiLvBRRFSB6W7FtrLivGyJ8gPwVRQbZ1knxXLwJkvhxqYVSFenTCbiVcMy",
  "key13": "5YmfgCB3zE3awefdeWp7tBwNt37KgSy2TWtsCo1TtsEYTtAS3sVa8kykdDSwTriPvcyHRioz4sHuhL2JZeZcc7fx",
  "key14": "4QBmE64k1EzDSY35tmdi4SEbT1qDzoBv2zRGMa5YtDop18dqYJkeuPQNruq3iDQ31adDkWRpb3gDheps75beEKTF",
  "key15": "5GjEQ1JRzi91ski6PraNH8ahpUrsL19rCrknnj5UPUcNGFmnEQCdPSHq2jMcavFhJeBmTNX761GomMKRD77QsYyK",
  "key16": "NMvEH9w9tPZcQ5VrMaivMDrpJM69aJPMqdq4mAc5UGWti76SbZSJw8iVNjpUvM6nDeVdHY9t1iRdALNm7D6eHwW",
  "key17": "4nQcAtsi7u8jKUYy1hUXbLL9pr6VfvP1nT6BzZFBRMBCXwdyAwNxgVi47N6CcQaUckzKcBmKZq2CxcypR7eCarCX",
  "key18": "46HQeyu6BhFbpKbFLRLDedxR2RkhXQkC6ja6mgEuTHB88fSv3pChJW2ByyFVWi52dZ34rqFp6HWhZwxkHu7SeEM2",
  "key19": "3tDyAoYzWie5ETCR2qrfip6qX7L4gdL7qYNKbqPjHwwR4FAM4GxiSxHm3kvshJ9vHVcmFwhAHxz4n2YXZPLKMpHS",
  "key20": "3fCfMpL8NuSWtc52DgekFdV2ePLfLBYoJJcoQPccVpabinbk1FU6cn54DzwTpiDSXWzYhst8fxN5yt9KgUpWPRr7",
  "key21": "3eG9i5K8UvDqyNyzvFi3Yn2Eq5q3etXCeLqorDJswVCGEFPyDdv2F6YCtAR1Qi2uhepWfp3dF7mQthMTsVCna9Hr",
  "key22": "4Dv3k6VKMZecFWtsNM6xFWJ4Asv3coCpmXWZu4pvroJC8wWSVndURLAaCVcigavbKASbdELLPjK5dkGoxcLcWxqC",
  "key23": "poCkJmVVUVX55tVvpguTRYhcaLWcBVe8aYGi7Yya5SBZG33jq1HccbEUpgMwbR4CfQfrvpYL43Fzr7VqaA2hN3b",
  "key24": "2JjsqpVAdLXazfiZDb9cftgqczG7VRYoiLbhkM1CxBUAzdeAgZh4385WiJUWuhijVwt2rswSk8Vofjr2Gc9i8C3H",
  "key25": "4U2Mv6W1vt2bGaxkgZtBqKhkxZPK77skhyyznAAwEcEAsoDd9DscWXdNLHMzeytiU8i3wEWVoHZ3RhLyBL2CVbkq",
  "key26": "3RD6VBEXq48bGFm6wSmbQ41vPweJsNDaiDyKULRH3Xec83Gtpd5DeZcL1tMnCykySC7vWbBE5jRR22WwwdMocPoL",
  "key27": "3ihiokZy8kpws4sLMWAaAL74ckUpuqGdNHJ1fsAXroZKYfyzCnPFR2eukcD6cMnW5QkHTf57Q75dEjvnHqinAJXe",
  "key28": "iXo3gHCyuZU5MuzESPQYEESJuNCtv7ThUziANeKAeCfsjoXmCq3RHE5B3HiyzV8vh7RcXCzWtqXMUVGm6R2Kh6C",
  "key29": "4DM4LPuNbpa5DXsH3F8funLUcrL8RdZrDK1nkMrZPHH8K64Up6SonzpZyxxK6WUZJL2n7dgj6h3engpqGZJ8nDUx",
  "key30": "5MHWBDkxeRiAi3FvT6xPiKGSeCWK5fH1HJnGWtfCJVJiHhpRzkpSRhxySisAFeRVXQpSbPi3ujZTNSzg6z1DZPSg",
  "key31": "5f8ZPdKP7DH1Y4PFsa2RbRe2EPVQabxchKWLL8rd7G1Qj7or7KZrLJVQTiNoSAybaqfUYD9pckHUUMWs5Dw9FcCR",
  "key32": "59R7B5QUjSTeU3dptt2Qum7mT98kZBduBQu7oMhGxqZyKHPyP33knsz6oyiAMn2amsAK7Wtmo2nsesVYzFpZjzGo",
  "key33": "9VxwTbRqMhcM6fQnKo5X2MLhNgPFRXxd9cVToJsmjFLudyATK5QeZDUT4sQFnHawHyPp9CgoUvyiEGqKv8Gg57K",
  "key34": "3KM9B7WPwCaq3Bsa8DaEcissRZejHhoHzWDN2wV6RjfcydZg77iPZYgJGL5ivPr2VVp4Fh9gLwRwygE3F2P8F383",
  "key35": "3kmMh67NeCJfpZ5MSEno5nxL4McnLKGnT2eFVepyuEkEYjMBUnjFUkTKU3U2snk9k7ETarJcYLPF9fZZuJibGqpj",
  "key36": "5MwmECd3H1Pnx4xyHWUz8sVDz3D5pmd3JMfyPDgGwqS8GBLvAfH93i25MV5t5Ws9xx5LqDpiW1ZeEukaWn1mbdnL",
  "key37": "4vkYcGEoTKxkBymTmhW4BVxtzi1Pezdb3TrzKiZpS5RyoT7e3mBWyAXF6vVJADEDFjBkrS9oJ7e6Mm8gLBmjWrQv",
  "key38": "3CNLnwVfWfYrau9XF13MApTSSwy4kxi98zNj6fw21nY64G8DnBXVaGipVNZypKQ5orCRkXLVvCaUXy9SbziSyQQr",
  "key39": "5jBchyKoriVwXAyqJrFMSLjmGXx2SW1hvr8NRn3DGWuNQn6gGXAYaGsjfT96wJnyjmzNr3emqQhAhgJiYrVbxcps",
  "key40": "2o8jkBGf892izXKPfAq4Atwm2o1jjhjTNEXpWNvmHtUYFci9yA2qih48zuqXz72WG24v22kNpGaFD1tN3djy15t7",
  "key41": "4tfMnCnFQiFsbg4JZ6bETsTcmbcg2DUDZ3jJtx4s3s3adbTdTSvHMhon2DvndDANqQyptMv6NP32crCL32LoVmcU",
  "key42": "3pcohL19keuWhoEkBi6Lh1W3EV1aMhBGebWf31cJzPwR7Q9b8tngpeKq3LdjHRBeQ6sLhwvZvG5Hp3efpdskeEgB",
  "key43": "CypQpCD2S5A3jUnGn9omvWQtccLfNKpkGxYgMqYu9DRcnB2r9XSRY1aBZpx4ukR3uWwKf9AiFkD5Uk8pYoUEPZL",
  "key44": "3KVNp7XNg5qLqLxn6TDMh3R1WG8uCDWP8sum3X4Amw3tLZSGGyswRSjUpodY5PUJGN7vjggQNq4JfT61huhNTsG7",
  "key45": "4m4Br1N2i6YrWYQUQhUQkFw7t5oeBQj3PRpSKCqpTQHeQZrSkDAgcVRiiEGiU5kgwi3QwhGANoWmfcQ4kmNHqHiu",
  "key46": "u2ud1Mht25SF3rDHekd4eUXNT2Y724c7F5Wy9bM328Ma6FEKXsvpcA33XjLQUDbc9kqAo9dUC3hiCfASCypFfva"
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
