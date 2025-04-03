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
    "5bZCTTyGSG7SahR4XwZM5ZYdYp2vtqD7umgAf14nStV1igYigs96iwcSxEeL4cREzGLDfBbiWsjzAqZhdNLSUGdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JN6xkj3v2tuDzVzj3L3Jf277bUhJyGzrmaGr51MESMc58bQwzAZzQqskSfHbJjX7icwGwpZs981cCffoaTEciBC",
  "key1": "AJCSTMuwEgQjioR4HyvqCXb1CPGV13Ww4au2BvECjaB6W8wSnTKym821E6NsMWzwitfPwxb2P6iSazyWxtfFRKu",
  "key2": "4PUMFPSraA6QvXvCBadLuHkQJR82g9QhJJH3qK8eAqmmRHKBat5X8Z6RwNCnS1jgaRgoywHk42v4HRxi8JkHQNUG",
  "key3": "4CSkin5fW4FEetdVtWRb7WvaKqckUdU75XTGsM75hqa5p3dBwCKD6RmKytbjrCj6D4muFbBnSCQQHGfYgFPa2xEC",
  "key4": "2f7f8mFwPGWj3NzJZc8VCYMDgiWP2s9HSzjrzcBXFengbD9Ee5HcT476ZSNTuUiEsRMQAHDJwVveoEHT6GKRVEAn",
  "key5": "2rc2cnxXpVXeaq2KxVtqzFtnAysBJQcQZmroxfAndJ2cc7qvjzCYvZ6B2JBMTajC3tfzqN8UbrDg3SRFmL5i94ft",
  "key6": "5VipjN1tezS4XbL4U1ejXx7Wvr9bb2CaSt6uqUXfSoPn2AREDUME1dKyZn6hqp6DDKyhy2QxxSPfoRZJCvXKWFcS",
  "key7": "geJmAgQVWABx3JU1jzKSKVuhq6cGFj4o9jiehKEBDkFkDhoEpbyBWYRtWks3ehw5CP3P5AR52qjLguGoSmMX3tC",
  "key8": "2VpMZisdkU6uNhQymrcDceHTbMJPYtBxLG5ffDg4Ls9vjwQ369xUbd93NNzNFGS5Mwaqc4ZMxo4kJgX3ETCVKa1s",
  "key9": "4Vx8dUGYZZf8J7JhyjsTYYHh3xBASkfLB4uGRQKoJsGXcFtVPkzymA6FfYV1eDePTA9cA1GNm5Fov1TwnrXE1Xt",
  "key10": "5vpKUEsfJ5AgZ6crbgDEoHmo6KtZ3nmmm4H9afQvC4swbqH2Yjh8fcVYACFRAEzgnPapBqX5L95AkhWbQbyUQHtn",
  "key11": "4DSeSiRvCkHwvEv42pmjnPdo1wUtLy92PvxDLJJRftzJN3aQaaNfNHDBMVRtDFpYfP8uGsfmmXSzjAwQkJGbtiez",
  "key12": "5MSUGoUUcZXRX7Rk2AaoQE27PpSHvQZJWfouvNGYSeSPwvGH5bG9jNxVA8K6w2RtVZ9AyTSiF1kVbZCzKdJYqHLM",
  "key13": "5JbkZgDjNUh6YHa32ykLvjPLkjEygSTvFjm5ELD8nzBxpKPwDgizJocx6stR8fHg12UFC7RyBExvkNEQWVhkUfLo",
  "key14": "z1fqm8vim3dKakM9CDAwjPhPwb1qmFMFdaEaNLo99EAGvt8iTp6csX7DbnD6Z5kwVHki4RSc4TwdjtBGTMUMkfe",
  "key15": "Ab29SuAD4yURU8NHEwTTz5ytB7ZtXTDTyRAwgruRSnuL4DXumfo1jJ7P1veevUzdwg4V5CbeHQ9tEvi19bZgFQd",
  "key16": "uz7GU9QfvXhmUzLcCAs2ZAGXBhLTneAbzG9H4k9hLs1x7pMQo7QHdc2gb8Udrgk6H9eXWb5FjYSvtLBT36oGaiE",
  "key17": "3Zqo9zGK6mtPton1WZUrvksPAvUgAK64DfUjoimThuTrMFWYxu38ozN8x8ZoAcqHZKWtQXRLfQyT33n8s8SpD4aR",
  "key18": "3GGksyJ8UMcsFrzLsG8JFDLuxs4hThDYejLMrZA5eid1zVsPkRgbMsGf372tadaZEqPeQPsTpMzje293YGYhSM8W",
  "key19": "4rWk4t3TnTxZqqmdmhBjb85rgqU57b8v9AQLWBaKMAL7QZiRTPXD6qtJ6XMjfV7WiGACvhM6DFrqYRAGRedCcgym",
  "key20": "5UhWookGt8Wyy8x8qdwkEUxdEXzrSkidpK3FpMivCz3dHHN6tLku34qWWBh1fK1MmVc5iL6yVoDF29oqsseB7T8u",
  "key21": "42iWLHD3nLiRRPCfPpLChGsPLPD54CBijJbMpqcmSNSp3f7PFi9qS627LWgiY7fRgm3ZYtyn2TytBYV7DTriWgaW",
  "key22": "2JqKyb8bhkduLUZbnN1khyknENgMmKHhugLhzQZr2FTqiVZkMnszJBPRnBh1Dkb9Ffm28Gje5zFLN5JcGGdg57ZL",
  "key23": "QS91fqY23wuqoLxctZQJwHGBVdDjG6sXK6ehJV3yddKJXqvHse3HvLXiUGRqvzDkyLCm6jyQYwq3rPYt9CZPYdP",
  "key24": "KstEau8nbAi5FevWj1SjvFnB6aq5sJwKpCr64rH4K9Q5JKnVNh3ARdrBGCPsN5QQhh7hLd5LrkXAyXN5gpNVZRn",
  "key25": "2K9fJfM5goFodKevpu14YyZ4TdPSbRW1tEWJNC1uMvCmngoSs5UdkZfpaBu1RvF4MgY93JpPgNyGBHaWzhUv652P",
  "key26": "37GoZ4JVaxK6nzxZH3foGjU6ZicDKRaoLxHfGKHK6K5p2jjppHE7uCTj3s1UCeSGUdg7dELhY2rUw3JoVFYJ8JTZ",
  "key27": "4bGJ6SGZ7VmPC6XT7Z3KsSs76FLmSDiSEsYnzT5dXPP94CoPvLNGvWE9XDJcntM2KxGMQgcjYiWjZKXaB7RkQSRJ",
  "key28": "3P7WUBxBpq8UzQB4cia34yZz8YahcG3tp8xP1ZDLbaRgxofjYgc8FDDp7r1cx9tRK8YHGx61n6EcWE3oLqKYakE",
  "key29": "2rYnRJLK6pfCQg7W7rrTWjVtWCFcEF1BKPigWLY9fRyhVpLcFdqbSk2waiBFcFF1QAuDEtSDxkrkaAu9z9FkgsCs",
  "key30": "2rsuvmA17HMH4qS1UCkeJ5DPghFB6bjZNF4vpkWiZ5cvdb8YSttBSZokJTxhDFcnCL79uCsi2jsPTWDL1ivc3vwJ",
  "key31": "zs8G7Gt1451dxBCBxvxbCPYhrC6JTYGFG2EwJS5XkSFhaT619Hvau6goU3ez9MptZQ3HjLFadpoVLRQHYZPj9Pc",
  "key32": "2GBLHKjNF4cdsrYXXsg68fsRaMxZrrTB7FLwYL2Wo5EHJjjpUYW5uoAHykpkjqGzSbakDG7mgV7eqgPgrrcwb2HE",
  "key33": "5FANduPXkkApxEqj7YaTwiogSQdjLXggoNdX32GH2Tce1spaUEteN6VzHjaGvhgGK6mpZwfEqRRE8XjRhkFLa3kR",
  "key34": "JKMBTk1Xe3X6ghTkgHLFue9YAChUa4VctFZtB16BrTc4w9rJNXyHbwi6i9BcPjzmbMjbmkLH9kwzN4rSUrD9Twu",
  "key35": "Q6une4xiyjYjp79x6nMjt21r76GrWaRcsXdu7nd35mxGX4Q4w55HUDfJVcpXnYmvGX4aqKr5QXpPiUeacaFvbMq",
  "key36": "kpcS4dMmW92ibrNst38PcZRXckPGq2jEWCxrn197LDt2i2DDupEsyRfXC98hWu9iUfhVy2xBCezL6T8S7J83Y7K",
  "key37": "5YVPVdaoZz2QtPx9Q17k3HBKFqPbAGKeMj9fZNt7oS52LinUJicEuHikJUHvcHifRFbr3iCwxv9HSDJi4j6g7wGL",
  "key38": "UXPkUQVz5rj7bPFptQwwH1BzCzZ1UdZqvLKp4JSzEAngaFTM7ikJTANPbdBD6mvgeit8mjPwe98haMJoHkfZXyX",
  "key39": "3Tz1mgeZL1QHFqBh1bZJ8ZHDCudVyMGPBd42HKJfix41zEphWaxtNCrAsjxZtZ5DpMGe6NSkdFYui9p9BZYMHLce",
  "key40": "5N4KMCfPYsPiw7ypPf6qCc2i7cPjbXvirYozoQznBtPTuuJzewGtbtfTLyXGVjankeRZE4DSrCMYFWiUFLJm9dTD",
  "key41": "7Hkz1uzynjsDT6FX92BpRuDXA3ePLm8g34EN8H2C6XnAWqYTbwHuY2AhxthAsx8UhMb1zkBoKARPsMQHWna547H"
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
