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
    "4T8sk3rzUHnDNs5UwB73tb78f5hiQ87P3uxY5C6AZp8Ar78waFA2hsv4rxLcxwPMP16wp4D9YBSMTDe6Ns19bt4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fgzaVJVBeL98Q1Nu2pkwF3w8sRzgTQQ9pHF6C1CrcL2m8HhnSM4WNnRncfb5vTocS4b6DPuX7vWsYHCCn6kb2r",
  "key1": "WWzyUNctb4tJbS6FJdZWfeUY3hswGpVTz8JCYJdbgFati97DPffAwpUXbo4p23RZndqcdF3irvzCB7Z93RqkF9Q",
  "key2": "hZKioArGdtzoL7c4gr7EDePWCMfA9Spgto7tbVcJs5n4VmCmBCmd4z55EUeLTKQ1CWRskTEm2wpqhhGoWA44MHQ",
  "key3": "4whZQvzb2RebrR36UyJX3gBSBqBXxqh7tsPrJxUnqsCbj67gf8C7qwqbgm2QWJPWc1hsQvsTRQe7z7g1dqidVVRG",
  "key4": "2TrXqEvTNrCAgbcksS2ri1iTWgyEzanH9EzyqwLo4Rsn3wJfH9QXeoGqjpuZDUSeUUnYUUyv8HFejkqkMsfU77Km",
  "key5": "2rSguUAksHLzFnRpD5n5WQbjUXemYLaisc8brYkBLowk3xYheWwBKx4aV4evXpmrSD4ZB5NMW4Dtpdc6ELdGPimx",
  "key6": "3dVYSpv6qr5fNYLuy9fcF2AF65D7RTeY3AyhmZevAeEXJwxMpHNfv7pqjygz7QdYLAcTUYhSb2G4FBKrtzK3ZDC6",
  "key7": "37sc5etXGDzqrjneCZCGbfssyD6GPEaRiUPvvLzkYV13zkTxCPmaCiCPr1AGLttqUhtcb3pcL6TVyupYphfvjr34",
  "key8": "2bUqCb6aouzXATqbPMFXyoR9UZh4YToUuxpk3Z2Vm3jwH39sMVygaQ3syjKu5FgpPGC8QZz7XKANzsBs3FR2v4AY",
  "key9": "3rUMH5GqNw7EoNKVSCHccyiF4XHtRY8TCF2YkxpGXEyRzbo2n4ZGQoKMu7tuiHASy3PQikjdy4DYcsyrVdYLpdTA",
  "key10": "3PQnU4hovmam3EQKE2AUbmY5RSJ5Qy2os6yniTz4TucYVbqW9DJ6mSeSHNqj2y8ZKpycYrD1f4K7zcy7K5852vBb",
  "key11": "4iLgdiTVch2YNkAWMjjirpLhbq2zprmz9F86nRVoQv2JKNWZTJ7YbKern2dEfN9b6NNzR5qV16Zr8g7JWvQEadZ2",
  "key12": "59JDpCEBow7W3aBR8VCXkP2KgKyZZzCMAaBYX92WyYSXHhYz5MgfMdZXRL82SBsq9pf59emTAUJG1diHz6L5br3z",
  "key13": "5V5PS7WVByUX7YwNQHi7kgRxSYoHYDXaQkJdXazkLw5rDCM8LVP4pQWec9r9gSXnegpdqnTUzMbLNHW6zA7cxEhe",
  "key14": "5zWGHv4MjcJXiPs865JUaZPo4JJybTHXBkRAtF3a2HT3i6skq6PaBGmseG9qAAe8Fu2BZU9YmRvDQhKMAXmunzJk",
  "key15": "4TbHpTvHDUKZtfsxRHWf1rrCW7Nqkx6sThuuVYdGjDhbBsoB1xACyXn3Bk1WaNmQMx8DHXvWF3DJpRaj215Lw58B",
  "key16": "5yYCVSrTsecqzR9va2jqcxMgD6wLLqkeHJKFzW6qMqz4HEAZZgoz9HXrJmbvVNnyCEjhYPgEbYKi8BtpyL1UFNUo",
  "key17": "3Z5W7CXJ8ASTFPZ2JrsqMMvK16T6UgRVXDNu3qXG6iH1LYAXkDDdAmw1LMrMmheF5D7uT7gEXsMxzhUWrdU41WYn",
  "key18": "2fEGyYm5BvBQk6YnBQpiQ689AnZJmsD3ZAzrtDf2HeuhDR3xMU1kEGNPWEFkxaDNu4bN3z6Kk89sPxi8bnRmxAGw",
  "key19": "2Q9944VoTK3FTG4UVbbAEiBEZUCtQJ2nAeSysmnKLvWxnmJgmbZMQm2QQvGyqugPRyhKo3UYGYUfyv8u9qJWh2vZ",
  "key20": "5e886s8xdr8wSpBmpvN6FFujpPpKWh5UKH9A8gUwP1FZ32nMkyb5e2xyvDDzNSn3qMse6T4mxuoDNga1uQCnqcWs",
  "key21": "5JpLq2HJop5BHPcK5FpafD6P3n5jkP8dTGXZsEA1PGfPK9ZTfm62Gieb8ZaE1yhYeKS7C8B3NbzmuDBcHkvqkL7W",
  "key22": "3RH3u92sMPQUaNWeqz7TLR8Q2hV6pUpK7NiKwZsNZE44fbp3NTAqKBn9BcAStkzRdy68kJKjjX7DUfrnjAxPwKH6",
  "key23": "2PLbBL16u488NHES48eb4cF1FMWZJy83grvNFgvDzmG94e4Eozas38SjwEqWvbrYaxtMPDy3b1B7uKiUx4UEpheZ",
  "key24": "3jdm85FhU3czHBT5nJB9QxFtvagci7QKWo5t22hnB4BaXn92N4xf6SCNEcTeR1AVNRHeKTNZX9w9k3wuVnjtCjQB",
  "key25": "2C83LihDu2ybKtF8RmiGW6ZRcGeBJjq4zw5e3BG1fqQ2sEfBScJ4giCuJbiGo3eGkWaorfmzfQpZZvnN2PZUsuE4",
  "key26": "46PsyUFa2197MSWEQtPPtAgXbRHPN6PBUfu6x3bgB5dmKq1wGMXNcfN8DCJ5UmKvay4PhUaru1DB2NC31htASp2A",
  "key27": "4YQgYkzjoz6LKYc4VKtUJN9Mk664it47XPssfyrzQYiooBHMFWYJHjTsUSgFTZARqNUDFigGKLkZq2yQWGJzc4Sc",
  "key28": "43EMeRbcgCEdQVaj2HHZavj3X72mDQWkaCLRx11sgkTGGficxGineQS1YAVcxd4N2NchCCXe8mDxFsmBNpNbFmhf",
  "key29": "3pU1c8osDpA9Nwua7YPaDN7Y4mxCX9DGK7cUdwQfifDxgBBwqBYynjktDrjZ7JAiVQppXU4YfUpUmLE2fVnE4hcM",
  "key30": "GRX8yDzLdHKFRyT47psPsRuGKBeJhMV14R6N3SKXvSmhizmyBMpWuSzhiJBoqnJqQaX9rVeMitpQmjt2ErvBHUS",
  "key31": "BQpd68jYjQqtyy8VQbN1JyLYTSLXAjXEDgHkUrzTpZwMqHYcXE7Q1b8JtwwoSdCzbyryt3YkCwPCEcpjBvHNJhN",
  "key32": "3jNMNZ16JsX6eqh87gLeQ88dQ8eR4JxrvEwZDcWhoFVeTqWJNbJGDkWo3uxJGfcprCQjt5uYXu9ajbYvn3sFWNts",
  "key33": "htgkTAaqLVCey1V5bwqNZ1s7tFcAGAMtGSQexWDWHXyXM6MYEJk31kgWcze6eXMMytVVdJLBsqY3NiexgBZgmDd",
  "key34": "2Hq2kAn69KUNCpqvtxjTtmy4EH79MkGQyUSKPhQB2kh3XxjWu9oLRXkrT8KcztLRRdQ3RSfmRFzLxA5QTZjW5KoA",
  "key35": "4DpHME5kG8F6SVv8s9ZEHRA32UcogESnuLM65tJmbQot2B7HUeRr1ywq6PvzhyU8WZkDr1gCuwY2Dbj8URcyomLv",
  "key36": "25up6GeEfrUxe2jYXjRkJvLYjY7gFp4euKR38YcxrB5AfSxhoBvo1tnMEiTTwbinLy94sDyHwa3mjtV53GSEMmsU",
  "key37": "5JB2DusDLEBZX2a4a9dAbvyW6rPaeMpeQkFQP5JQXtLAUumKaJpKCLsB6Go3MAsrS3trCB7P4fFyJHrNLvpRFwXg",
  "key38": "4Mjdz8jy4RK7gGvefZcDyve9bps3YSNWrVJWCcVHF6Skxyt8RoWhut8TFwSjVAuKMaZQWGWbjhYwKGQFYejeTMRF",
  "key39": "Ms6hikGbQvWhJMMDqk8bQVRWv19ZiLCriXcGXLHcdSrU8xYSUEodskY4MESmySMK96YrRLsRBXijCUzSqPCA2mJ",
  "key40": "5Dt14AZLFciG14CVabdQNQ8LT2yaTs23TKRbwoUQj8ESGaatmghT6hMhemFHAa1fB6vHWkcUED7WbvfTQeEDyGq5",
  "key41": "5LW2dzaknLCJGbqHoRtsjmqF4wPxRN4juNHfaTUSZrrRvkm9iK9Vf5qNitpCREUSB8RxTUhqXFVuYuBB5f6TgWrW",
  "key42": "P7FbYFAWRudqUwp7x8uhqkhfiCc4MY1nq8vbbqqS3TetGDWVmt3GMp1ScjVtHkyVSKbvVmpT2tAPj8XaajAQ7fp",
  "key43": "4yxam4W58yvPcWvCCfKSWahSKEq7iZwiBQwfrH3bJ7pYmSxxdRc65Jq7oks4JZrfzTBtCm9wHqZVrdGR5Nq9y39b",
  "key44": "4iii8K9hGW2U2vRrFAAjAPcUbe5FfqBgV1FBbD5MiGvWUSqgxpQSXR9hikvFEAUDQWs3obt6j4dAa1XJUpKQ5cSG",
  "key45": "491sN4Q6N8nrjPt6FeSuhvWwEHnMd7bB5kLbq7c1mm8s6JdyCZbBAGe7GAa1xPoLsjWmLCG55gWTXwUTwu4nGjMD"
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
