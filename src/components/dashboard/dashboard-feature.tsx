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
    "3ad2QZ5hpB5jaLz68SXU1UYnaApdK5wPeqHCr1ZrUXnmcmxJ8FKmG3onb9is6NmCCDvQQH4oiJevCCxs6qxDmhJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbSRM6SGZRhLzDHuPeUzjtsS3u7vjnNgABuMLkrX83mar3Uud7pNRLhpd1wpweXvB9qdr5evKFvKP18SRG3k8Q6",
  "key1": "3vsXrBACustLBwzTaDYZPu8Bo8hXHfHQCwFaAfzgMqMSpiFmRgP1tQNuXNNDbiqF1cPaRukpZE6Frkpd19ytCqp7",
  "key2": "38cgr7sHy7zzPuhcsq9KFMk3cc6axqfyW1GmBN62VJRqdngMpSjY4CHwNHKoggaHUmg4xkS2t7zF4wSPyhBs2ii5",
  "key3": "hpLpPT11KrNuoMNErrUvU4FFhkJFvmAPR9eJni2WzCT2qaxxsQ1Txcr71R8mZzGa8XvDmBshqFcsHrEmEo7BbX7",
  "key4": "3LZWxg3BE8UinUsjriVv4HMkC9yJzXTvu1ATS7sx7hqrXcQ8wR9Ye5FSyntYKPv6FTAKLD2gnhw2A3d3dXT2LYij",
  "key5": "4r3MBxjAB3E6KxoPs4TSTYcmtxq4AjSJ2UcoW4vpwpTpEkp1XbWbksQNUnmc9uajHBZBwYbJRpDR7FotAQTeyXSG",
  "key6": "4cwfMBchN22n1v5hiySF7he68xDLEQAEWTMuPPJXDjR635R9S5Uo1FEFTadRJMsN4vwMuR4X8oH8TcWHs4DZdgW1",
  "key7": "3faXkkqUXmgnZsS3hFimdT6Yh1cP17EJSJ6gPKoQf7JnjrkfEgi1AqNcyAji624bRqBH3q7st57ZS7sUn6Va2Jec",
  "key8": "3sqaMFfWJFjpJ4qB2jdzrqv9xGGTEGxiZ79dVKezFhZzdPeqQi4mrKfG55TuQKQux5KM6Rsz9p6YA4jAgc9oMRRN",
  "key9": "vtaGfuAVAiNj7Qc7cSjhcsDkPMU5GhFSwE365LojSQU8yGksCBjMUk3gKjmqbww1o26Qwmoqo4KM8Yfup9EeL84",
  "key10": "3hdDgxkd2ftzdHXwN9Am4VBz5bZ26gqiS6rhPVunuWwGoT4hRa8HfhFVmEEu6znD5ugVURb7ySTHC1yBGizGmrYb",
  "key11": "3jfXaqwCqAyYNEGERGFWyLxbzh9D3hZjy1wEa5F8THvGDcJ857EaeQaN89WtkyjEf1sQiHeZUL4Vw15hRufgKs8Q",
  "key12": "NLpr9JNcdHPwAM8KQSakPCxBz8EsqCXgiQDYL97wTa4mLAHP9sWKtcor4KWbNcGHn9rj27baz2d42YxGsLdLQXJ",
  "key13": "1TNXPNqm6TaRfCiFBFY44M7JqRMbobA3Czjz3jarqk2y4SbPt1atQCPHr2tgtEwmAwEfr11H8ZeDB1s2Rf5hano",
  "key14": "4Aw9PzfVbRrUgFp1UwbbZHqkh6rgnD7nJkJNkwMV85jF5uB5dw2XzZ5jfbvb32DhAUQZgeEt1vR8PStLJGBXbqsN",
  "key15": "b6FiGomCSGHr11MUqkaejDgDaKJKuCJKu5vF3UMtPbrGmNxNGnuSBVxbN9RUqvaN5rEVwVhy9YrYVYqtCZ4Lnnz",
  "key16": "2xEdYFSqjw1YEKjSXtEBwLPVYm4PZ5Hjj8xH1JZpfYb4yS39KCUeTSrRDJ6rzTvvHnKzS77Px7E9QfAe1S1XFbmg",
  "key17": "h4PpeXxkGzTMUTPUPE2uvuTYvWBgEM2h1gsPbiq4Qdv9BX5DA7uajhRjqbEaifv8L9cXec7HXHGeBEJ5a93NWsq",
  "key18": "4TtQESSp6sWr2BiWVog8GX5y1DW3EjddMWP8N76nF2VAWQ4aekvXGQ2X79wwQXhyTDosBXFj62oQ5mbDGHdQR6oE",
  "key19": "3DfUr6HfxWpPET1g9Qi5aZH6SDNSBFGf1uVXjwmgiWV25f3rU1YQWteNLqWHHKY25CpehyVm1ifJGuMJ6kStqKwR",
  "key20": "E7BaxL5g5XsShQZL3simRqiLSRDCb3Fg7XLhB8Egg37xHZfeACReMYAT3MQRTwLAY8Yz1kf2rmqnFB4XXPRjytp",
  "key21": "4vsznHns5DLFx7VQ2UpXC8pRRy2bkgXPMHZWyTRaPFtPegBcCEegg6xqUwF3LtR9o6o7GnDQoRoACy1kqn6qzurS",
  "key22": "2Z5GB8pB4xCJMxzueJnm1q68EnVo72ZoVs4BQfGdJrzJ4QbCB5s5Jyf39YfE69wyrddTksrQP2Ui5qSQeSqZatUp",
  "key23": "3HWPb2e22RSg8XKDkA8vaCCeGF7jnVocUXxhrESyuaKq5BsL8auSjpaCuYpiZcYRPNhkraEjFC7ng7RLhyjF3VKk",
  "key24": "5a9xxVHzsPWAfK821regwgCsZv6eiW9Y8RDbd5VaSrL7MaDcLQxeoKZKCHcW1wDG7KyZZS7hxxkq5pPu1bCyPo1n",
  "key25": "27X3o39ehFzmoeqv9bmWVpM34KZxUoZMJGhnkZDhYtjdGaTipTRZN3KxWMAkEW53zngCX6H5P1eM7NMYLtDR68K9",
  "key26": "47N76A2dCLiHizUvDTErQ3VeWpuyTvdFBmVcdqijwSR9zkAQ7cEhmxVGyrwHgti5G141kJ4sPfXSx1jkgYJmw6RC",
  "key27": "4uLfUvKtCHnuNgpj14pFCmxkuJmvupFy2zejh2yS95xTdrW7CPcT6UmhZyBxogUQ7qYQ1quFZYb84buupg3g3emL",
  "key28": "3gC7XNJRtUV6Qz2RwdLxXfrLNZhiTAP2UZGXxVJURU7mP75zWVVGLnCE9uc3W2C6Zkhtb7pa9QZKCo19Z6yh6Qyi",
  "key29": "CRqJ5BHJAabTLX2xvjmCb2tADB2EWHGY8XyCYB2cDtaAssNFNesBo1pKTCVnDDPVBsoC2vfhNGDaPvsJLZnfogM",
  "key30": "4KDLZfwgXvWJ8vAFJtGRqfjTZdhfNASBMgceGXk1Yi5ixCFeamCwWZb4fT5ZvcDHwvn6XkyLgWZY25RDtXLPViQq",
  "key31": "2d6kjVkqwwdvEoo2HCDuD1spdqoEaR34fhFYZPYKwP1sFaS28Bn9Yj2CH867B4gCb49GS2k4U4W5kW5uwR71wRwm",
  "key32": "3Vq7xXJArKstvWYDWdAQRN7jghpKu7LSuqTUgTpyVCt2hYhkGfgypTTGZC3UY9mjpRAQP3dtGFZnysu5KJBS23iV",
  "key33": "5HPNN6V7tf5LHeZVXxZSercbEQHycmjJ67SfVAEHJZRrVVGphAyP1A2phtf9wstLCegF3b57Sko3S48TyzgRhDTN",
  "key34": "3rK5pQep6SXqR6QqJSZdDyGY6BsGdo76HDXdivq7j7dbkqWt1PPhvfqqLbJBwMC6v2BD9yijmd8cQnjLjGPob5nB",
  "key35": "qUr64LQ6E7UrikeNf1c3f9zq7YuA3Ust9NixC46NaFZib7hqP8MWsh3wAcSNNuFneGrm5bmZwRVkAF788o7pVcQ",
  "key36": "3Nh4snzmNug4Eja577w96fgRxFTYrtZsyMH2ofL8haFWtPCAtXaTwsV3ctzaXvGs4vwqT5KjdtxHyfQGT7PAe51F",
  "key37": "2XPCYn7omfbpKMWxbgGTD8jjzisRdAPwchzGuckRUhVF7q4NcsnhXj7jeD7rDj6WtfWGZKvZ3yUDgkTGtoUnsynJ",
  "key38": "KKHuSAGnoP8ZieKuqosRPBc7QNbLQZye2t7vdjA35E5KrEn2VvaADD7huk3HueYsToXmFf3T7tz7nfXCkhFewZL",
  "key39": "3TByc3we3MDanrimSFHLNsi9sKJyHrFv8uPTVH4br74zyWp1o2SwQsXwnSCK6ybJK583gB4fqZPJ5PCpgt5APwXB",
  "key40": "5QKeow3j3Wp11TcdSzJ34wzCrCHA1UXWK4heDWf7CiKZGQnazCTwendpqZTQGsF9J8ze3nNFZJ8qRHy4oqdprWV9",
  "key41": "4CYMgcr6u1PRBoYRraGoFTPLQuVrrkmF7vYxogw1aZCWzrYifBC7q9HKKqCt8wrNBGVCZV59DzTZbzPX4EfUiDG3",
  "key42": "hUCkRVZaKDexFVYk3GXK1bcs1n9XUmeBKm6dxStj6UPYm9QwAT9qGcen24Y7JJtrPfDZ6obmFxQp49pQPFH3VhB",
  "key43": "2SxNM2uCwxmLAsDuRRQnkSGsW3Gfpdir8yWQqi8gW2CxKb3H1zWXQqqRG6SCZwiKKZhBCNYQ6ANWUGE1KKRMbT86"
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
