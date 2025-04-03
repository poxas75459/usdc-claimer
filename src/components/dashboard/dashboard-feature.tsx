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
    "HZC8vV7acWvKfkXgWwCVgFgSM3UJg1mfF9LV9D36CssVYGUV5sP5qANYxPA9uHiHNxFTFyQaKmCEpzdRQzyNfWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwcHG5bDa9k1HFs95sCNfnP7d2NrL6CLKmh66cZsz2CUY29ReN8DQ1no7X18RatxixkC43r1kkWdw2qP1oD5m7y",
  "key1": "YDG3FHACB2dPzQscaVX5TuPstgZLSpuFJLywb4F8UrGf82aUuEv4XGmVx6Tqdf7cKpzKRLFvpTBedYAptcfjYHj",
  "key2": "5St7cTyMLxwJ6gSyfPxfeoDbH1BFjNz4VyCaxWzuQg5pQU81ExfcA4DQbV4vZXQX4zNeNf6NAE6YpXPqY2ZtCEr",
  "key3": "3b4NvVdfiMagW5rASEnnEdTrgVxEahkoM8WVSfXm4RxVJA5sW9RT5kotFjifBMRMpqwjtzC5j41BiaUZm5wGLwos",
  "key4": "3kE1igEfBPCczPcd5C6iUuuf6zf1xNijWS5kZ1yQHJWpLeetZcY9WqVC83VsJkLTeCkhUVK5F42bmQ4ALeNwpcsk",
  "key5": "55e4NJkdMaEynChPWXJivhzyEUf4DAMmap6354sqJV1GMwYsKAgfQZ68tqpiT3C75Zo6uruy5xpcqW4hSYJQrjXL",
  "key6": "5Cckfg9CSMq2YfMbC7tLNaK1cqx8w8nyM536TDd9drogwjygRTtyiM86yR1nD1GRJiUnkAvAyDYbkdJhX4f4YRVm",
  "key7": "21T4Unoxhuj3KAUTt8NDxfPNwsXJoNimwec19jgyfQ1VN5BTjjGA8cHkDS7wofiW7YA2K5Ji6nVjNathAW4Nhp6i",
  "key8": "3dLxoKF9bmdHArmtWuf75DXMxXEH4zhGgF3t59WwroAZ8ZRaHZLUxcT1u8NokxxoNVWrudBmt8pQCLYBdEAThp4W",
  "key9": "2XjdFhKrfGEF6RyDwkGwvQeeAKLEKVLMunaay4arKEnwJu8zSKp8zXFKLEhVEj7ft5qJGEdzBA9CVC29aNEActo7",
  "key10": "2mkrzFhC4te6ZQoLQZUJA5hQZRoTjvYEgwzdXweegvSD6xhX1JTbReE2U4m36PJHbJVUm94FwJQbvutN3wL15Rcx",
  "key11": "2HU7953y1QpBJmh7yJZWiGg4a4876MgAGShFK9xqJAFxweRZfv8WJfVDDu199X9jWNFysfFpVa6LjUUEEu2GVoSx",
  "key12": "5CsP5GSQxtHxd19BLPmneB1zscLEYLikcZaVevFvPGT5CZcETEZi3457SEy9QTpPRLifUMcgJ2k3FDis4Wca7qSU",
  "key13": "22UvyV81zUZnNiGueBzjRZScda48Vmtj5b5qFXPaVWoE3mrvVhUFAzscbVUVJ2YzbFDZot4PUEtGPwqJcL1qqBoN",
  "key14": "NndFmmd8cHh6bikeFPG2RJ6nSGboFsdVaExiV9RYpAiLYuTW9WFoSDJmVtG8LAb27UM4qJswyxho59ZsxB2qAg2",
  "key15": "2Tjus1ABGXkv5RWbsx37JY2BjBqNAaZoG7WpSgyS5xpe3cYbHb7w7pdJ2ALUW3RTnSVt3Y9Uw8VstoTnApj1BRpT",
  "key16": "52uuQZw7oZNzX9ogYW2sTXBxJudoWZeAnZKu62jC7FR6qWVut67cGCA7GwrcoHVQa7WmLtRG4LjAmAE9kHA1rogQ",
  "key17": "NGk6uHzEi8obvh3oBKpLGPhs7ZQWj7q9qBaeZ4fryACRQkFGEZcP4hMWmMrLHud8C2XnhvfXQ4jErXvgi1SwWQC",
  "key18": "2EpDdr1jS1BsSSN3zpiH7qB6uweypDYNqSMoLrXHo5XuL5kXVNwkshTdtnbq2eHxy1ZeQRTypTWEhA1iiQttgnmy",
  "key19": "4gVTBpMFV1cjqH8GA1XfUq2BaHMWy4TYSTTmbddQWBW6JrsDqYD3xGntbHGQVotQjonepR9RoybaBLJrT1ev1Wgd",
  "key20": "3EsdbAjrUhA2HfQ3WAMvKuBXDFRnAV3Lc7g458ZV4UKFQmPMWuksE5cYU3jv2UJAboWW7HpaBxYVGrsen3QSGtK",
  "key21": "2RMchwZ7Jq58nhZnVKhsoMJGxeqGAvEuLfKKBr7XdRwarkXqPbXJ2DbKmn1qBLnuxyU35JQfuy5rVU8E5QJp1MNp",
  "key22": "63MLGFKFUrT1N5xiEg7jT5XAfPo6wcjKyiEw8RuWpaxS1e6ok84ZXGYgG1ztEGT2RdJHVwMnyF6FtnxtUJRpCznV",
  "key23": "2x7Y3JJ6E7FS8D3FdC2347zwwR3p6t2wLRSm4pJHSTZqNsDm7TvLdtEy6nJCJP8CzH7xzRjZjVuXpmtwz9fE6xUN",
  "key24": "xrj66dSyhZPBVbG2yT99ofsR37rAU6Qw5hK8WbXeg2RmXgUwg23j6ianE8HzCTs3HHTrXssWJfwRiMNSPg8hjpr",
  "key25": "4ppTVB7wRob5gJMLFC5cdQhFttHgoq8LEr764mva6wJyWhSneNY9EUS48xgTSPWTjC8PKcF6CtaDTWUuJNKFM4eT",
  "key26": "5FgEKdkVJ4Bn8aVZi9CyEYxPZtoqaZi1Qd8QJx5uRP12j47NvwSA1LXJ6wGc7GPke9r2AH6aYCrvt3nGDGbMNCFg",
  "key27": "3sUQjwW52ebTMxrMPgrpeA2WXygue25eWvK6Knq18rS5xaPfErDwcbwCz5JXFoCnK8T41KzJADs3LGK8pWjzLNHY",
  "key28": "24vSUkRYN47EPEN4HBU7qkK7HYUUCTmdjSBzt2pvCeeeVERFx8BomZAfgx2bdxsaxRQG3BhsJQBtdepTzWp2zpN8",
  "key29": "3zXx4WHSo4W7te86bx67RUdk9oLUNFo1jcUQ8yPZsUundP3pXJh5MaRHiCXa8pv7KRVwSF3pCgCQkEHUzJJGA6Cm",
  "key30": "DoFqECUTPseh3msh1P4iD8eg8kMVxPwx2EceTUCiCsSs8p6uq2iuo1bsp5x2SxSUVBKmF1XcHuX4noF6LgbT8fJ",
  "key31": "Sp65PQDTWZvW98B3YgWmhRAJNkGgtxDdm4t2EZnNcbYcfLhNuPPzwmQPTMo6nPVxGJpggbeWr76otX1JGZTh2JR"
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
