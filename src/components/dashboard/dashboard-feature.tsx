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
    "3NnyrKTVbr4bGPGGSzowCKqadEJc5AMUREeZoNDzXET2actPJwpJ7V2m4P24tFzeWkjxLHZqMfrxMLDbErHk9CVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ExTG9c764MS6aCf4sXa8cN9zxgj4cGbn2TMELZ1aRoML4wj7wnFtsXZKncFxN9PyxxgnHJ5bpLhC8PYaKnY1xJJ",
  "key1": "5pT3kY5UHgncsTqVNBJU6dupeMHp5CaNR9gfysKhjdvUC6z2YfEKNvNT8HNcB7oa3E4EzBeLaK1FMiBTpy29Dx8m",
  "key2": "48DUXwp6AWPFs4QKSemZLCtCJ5CnnynV8QeaFH7mStNBx5aubo4TmEPQximhaoeSfk9Vjox29JbiHzJeNg17fyvj",
  "key3": "5XredrHNWNhrbdKk21g92Srh28t2ofVBAu1cfzrN4awThWPo4ZUAnuut6ntiGKhDcWvz5dL8Y7q7Fsq8uW1o43BV",
  "key4": "5NbZsCGnX52c6uuxPxYrWC1G7ySgxpenh5Qn1Z4yRYhKXpBVasvk49q7154mMQcM94aYPAXyJDQbeRxqeQHP4Rw4",
  "key5": "2uTXjT3qSsHsqcL436VS86dGGnyXwMARre3CTvEcHK8QEdYSqkFfMPiEFceSweAxne1fkK5aL91aFnEfjJgTsLvJ",
  "key6": "2paXSJVCVQFSRCKQVh11betohaeimBowZrWsE6SbunwATzs2VwQTcJipt3XXwRTWTZ945gdLBJ3JR923KGPnCNj4",
  "key7": "2XXYFegZAyseFH7nETFsCEriPHaXRzUJymp3MW11zNE6sRAhx9JHvxaxhKidJmVhksrQ9vJPyHkAWWvYzy5p3iCn",
  "key8": "2FrKubgh8wYVEX5u6b3sdQ9NT1zyog8shkqRHDK2tE6E7TruhMcX43NoRQcqSnNDJRvVeeAq6QZ73wCVqssyMoKh",
  "key9": "3fwmTTYvgc4F1W2siVzG4E9mcyuA8iauu4HSnyf1FHkE8maQPmHd158x9K8vJD6JPP1vhka82A3ZgvhwqghwbLMa",
  "key10": "2wdv2SbjgyEFLmpc9L3hzqwe7UCkZoWaWoVu1FPDzSVLFq3pdg3q2xRSuYf41cetQzTAaw5JbaZCFUZHSYLb7com",
  "key11": "5eYPc32iFCPq8nma5JpZ754Udtz2DgYZxLXAp8ihRY27tq2RjMPoCcRZZuYwnT9XLqsVG8dWtDixx2eY22k4Hube",
  "key12": "4Ae7Csy8WasfWsd8qCFwqWveap2GS1Gt1ZuQaTfyg1XphTVvoVAeKWri5zStKtNP1H6Lnfina8MKuVmswtwFk6Au",
  "key13": "5tLBWhHHN2Mq9Gwk1imBLcsnXAXAqjUtEhX4CtbpkfgDnHTZiUw6vkBGWgmgAzYRACK6xkTf56W4KCqTAw9qaE9S",
  "key14": "2LPsGbpdvTVUzMsvZpqviWUQZDmtuNWM5ow6AsrQ2cZqFyVUQYadz1qkAdzS86GT8uDDhSJBCrVEDZTMae4rMmMF",
  "key15": "3MtDKoJzTJzLSAyxTYqzgrKAUYshVRfKuAKabV4exnVzxhopUisK6hSfJWRkFALksFG78p8VKZDtKZt4KtGnMXUr",
  "key16": "4NCsEJpYfNF7btr3f1s3CXsPmpTeDxkEZY6n9mR4CtctyZPRSgEuVffLasQ7YuPejCM4c44mQ9wHJ7DxbLu6eJgv",
  "key17": "56Wd8EnfkvWHvUKYoQ9xLp2D7vxdwAZ9FRwTAuxRYVo6BYnPSu8KsZgvMQtZaAwXdd1iTrZcJEvxD1iJEqmhUA3M",
  "key18": "5BX8At8pjk9ec13PasK2bpimBzszZTsDhnpfR3JvnYHA3CVWeNPoBgKbKjeVzs3KxCPa1GZfkJ5DSxjbzu7n3aZy",
  "key19": "5NHsRM2NVsYGVh5w6ZoWkET1xhXZFxqaq6QPnZcQT4MSG1M18brjE8jqMjCKFtvhCrATvzLeaMTNBXuT8T6qG69p",
  "key20": "3jHL28ZjMbkLBARS1qiFmkUVmJQZTiMmBmQsnmgQHEdDHCZo9toxeh82miGyjMJjKAuofT7WLVa6zru62Gs3r6Qd",
  "key21": "g5beAU347zv6cUTwpK69m7max4PFpB9QhFBrXouGKaSmYaKVTypXyczRWTEVQrYcXorDXsczZ6GfbEtdVka7E2B",
  "key22": "24jCpoau1cthwPchBSX4FNxtAs75XxedxF2wQokTp7qYncsT35eb9GkE2njiL8Uh2v3bWVHEYVP1qSCkgXp7yU2a",
  "key23": "4rfnVCLA1DQgT6DqEQ5r7d3NFa4QXmnrpErQheSAinWb7LReE5vbrH97rNsxyRcYuVZ2mwUXm9PEKPQaAmT1Sn7i",
  "key24": "5BDZEiaQszjwzweujiLveedU8K3j1aXmA36VyhXWFyx9EZKQu987P3dJctmxD4CNAFzjEr3JjQwvCmpeht8UVJ5X",
  "key25": "5pfVUXiKTvuxvk3YMJZh4WQ6yGAciwxppByVif7G8sf2CRzEMbHVnsfhJCrMc1EeL9Kqko2yjWDCYut3nJoDVQCr",
  "key26": "4cdUR6XYGnR6A9rp6YRg6Rp8m9tE3xgrYgWxo8wA1fS1U6fQ5FQ76UWhNWbvSgKQojYyHq6kW3QxDu8BDdHcocur",
  "key27": "2orWdpSGVfBNNjfoKPEiB8x7YFYMTsZ63ANmJ4HLv5NZvWw3uRcJZifzNq6yAGrXeWzgvNujewwtTerAVmwhex8a",
  "key28": "iSSGwxRqi6CX3V5rUJuuqsHodcj5aphVpeBd45bxyFdRX9996PbrBdaCfujGWZUNHH49heqHjVw4QHeEi6sd4om",
  "key29": "4bcSzdgBgvmVY2Pkwi6Vcm9tXp2t1sNYvCjGkwRheQKjR7dft1UNKmz8ef2PmaJEup7EoqPT26oSSbrSdwfqdxFr",
  "key30": "4ZqvjUFdCBjMdyCADc3GCksDAYbP5BvS5A1LWs2Swisw9rVxvXsHwz35FEhCZipynuKQnJ7RX8Thydg4AiAycaSG",
  "key31": "3h31DVxm5KCxBiVXnWg66VWZw1dhvHb5rAZzmnR68KNG4gT1pBRK9MAMhwDK3K2A9Sa6fPhVv8KDYuSQC3cAoYuQ",
  "key32": "57w73Uy1qCkf5AZXp7mAvWYpMSp636R7mTSBsUPAYhh7LjyTRo9B64eSXA1a54g96BD2h4xvn9mL5iAGr4xMQZGT",
  "key33": "43Do3s2EGerJpot9geXR13M5UhxLSTg9Xy29o6VayPCQaoAQarTTRYVPGMqcwreqPJ9wJQn7fKV7JkdYhGQbVQS4",
  "key34": "2UA5YtGW1v6iX47u41iDZqwSeGZHhExXPC5CMMrJX4ftHVy7YAQDTj8ZvYM3J75ncn1ssS6bNxaUmYNH5fxVPeej",
  "key35": "2vFc32Jv29inZZ2RG2NdBhUKsF74HVHfcGhd41irUKBRMz7VuojoZeXx5bPYuGTRXqpjomBjvkMwCcdGZr42yKjN",
  "key36": "3deeCUhxraVRLMoHx1d7nB8U9T8ejhetwXEqEPxP2uqNB9AXxg6C7n3ADjXEDQW6TE8dFXVfN7ARJGB9JQBW2gjA",
  "key37": "4V5sohDxh9GE8wR8ZSAdKwcXHt4Wz9R1fS6smQFnYYZTaUXYVHPh59YvF48rXHSZqLjUYEbVRyCtr85mcJ5DohZc",
  "key38": "JbBxAxTMU3oZ4ia5MyHWwA1FiLPVaRQBKex1VnDRQghs4rd36dQwJuNmvg4CHALJJgyeicdj2y1TnEtF6D3gTjS",
  "key39": "39k9c8Gz8kDaTKcMtMWszosyNRpTKJUWc9RBuDxJuCD2J6bKGjYqFxHXHxicQpz8hxajW1NXUmGjSJooSx6qps6w",
  "key40": "UF1b9mTWsFU2fTC2sZhzkJGxuJijWMwdmTdErAyS2caQuoZFPdLTvN34evxp6LTCt4Sb3cNLCTiTTukNbHbzwoR"
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
