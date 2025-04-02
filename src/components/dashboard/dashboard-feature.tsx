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
    "24B732FADnTunwX2EvmtWANbv8FXeHdQmfA4uHQQ4AWUsZD1nLaYHwjCVW2iHom24ncq6hZeyf7osG9mqvR86ejR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LG2HZ1SGnGtERTeAdmiLDPDaRc3HFPMUAcWUWk2gKswKEcFpsUmbVxZHYRFRftnztG959pvNCCGU8scbKq5PvC",
  "key1": "5Eokh7HGqMYVP5Xxtwvad9KGJkN7wzaQZqvDfGM4Hypp8WcM8ZudpxDcVZoQVnktLMfWTSJ2FvpHH4zyBQTR6P4J",
  "key2": "a9BoQSpecCm8ZohtMKnK7D7NcqzLF3dttZ4RHnPUtikVzBXUTUy5nEBFNUdqtGVuVQsrHGQV4zPYtZoLVzn5yhG",
  "key3": "4CMNyRCZEhXWznvKgjZVeuQhHnBEFxH5pcxzEZUN1D8n3e7ZRsivuFEw1sGsoVrcLbEZcbXCFxPKnRFUUENxSa9u",
  "key4": "4Fb1jnSC1Do8uvProN3ABjQ85EV1e75acMZSdNTibmurQKn3xQ9dShKVYrxVTBTmzPkwXEp48M2ZsrR4cREP6R4A",
  "key5": "5MU7JkJ4wV8t2vavQ3iJYYHuexj4yD3z9dNY3JcKAkcxEHyWMvcJqZaXzEYoxtqQUjbUzFyCp8jbhw8GvSJrsChw",
  "key6": "3pV1qBZKndtygA3fsyUErNPk7L8Tyy6qRD5Kpb8cwrjNU16cyYQwFL6onGuZ87VX4a56SHjzs4DTUmYHGHr1W2rW",
  "key7": "3hyA2c3jP3PJ1mH8hZY3mRaP2LWjtdgzvtX6yCdz8zAFWqg8pz8EB8GgU1nN9DAm4iLLGaKEx2tBmojRtcrm42J",
  "key8": "51632jZufHQmVcGaRcP5p47SGTjx3neAhdbXLhZbRUx6BdJBaBo6yrvNNoSD7zMmxjpPY7F6A7uZRUPuuvJvCi9P",
  "key9": "2McRXznxPs8WQ7FkoTev9JrjyaMxgaNtJXeU4J1AXdw3qH9uqocZLTahQpbphTU4eRuHhaLooG531MXZr3hz1cc2",
  "key10": "A1EyZTbfq943KvNa6wff2XLRQZvoorEwNFULibiJb1P7DZJJKNwCjMoGYwL47JHKWTF5Tm2z7hznNtEx4LyBDxH",
  "key11": "eBCHTMbsRUxVHXAdCGTpcgRSc8tK6QA2YEiAPTa7Wr8PtzsXytJw9qdabfZpuENXUT6vxWPniDwF962UvNHHWvv",
  "key12": "2twF6esvNw4UmfBdup8aEPsVcToTHVNRV4j7MxDek13v9t19jyg3uSwE4wBSR2FuQB6xmqxB5T9xukkB18xR8E3x",
  "key13": "4GXd2NGiHszDegEHiYikAyAQX89VeFutEynb43ssNZE8CAJ5eQBpE6Kec8qsZ76WEyNLs2fARHkywcWRkfuVRZYr",
  "key14": "5p6WDYZjEJgEJPX3u7Dp3QW5NXXTWRGZRk3NBf363MnY174EMkgihMBUCBE2MnXzgFeje5k1f963pj5n13rzmMpU",
  "key15": "34YypZeH64uYUB6qNUrB5B3Z1KxP4MM31NfAc1toLT3GViG8DfCdwUB6QQtSPUbMEochyRPdakJo5LXDdxhwiSm4",
  "key16": "KjVvABjA4x6ssLo1PoejbP1G8RfkQ8yXQs5VeU4BQFni5NuAxm7aD64fQBTK4XkhccCD7WWn4R48Vj9B4dNGm2u",
  "key17": "hmzzQqCdhi1VxT3BWQUsAp7C38V1js3TAwEiDXSCR1AqUNaDRuF4uBdpnTYeLwnk3csEdp33tgpdC3cNuv6uh1y",
  "key18": "2QyFdkfsAimDiDcCLbE2JzKpx7uXp9LwfBMbKDESXPewz6mXiqhNPSVMprLzmAG5PUqryHGhdQJSUYVW47thx4gK",
  "key19": "4WujtG6LhCQMdE1iEpCFfatrosiaSPBNZv4gKi6SvAGf4gPp8tUA1QWFjedXgQdhW2tkWH5WytgHxjkDDi1e9Fse",
  "key20": "2w7PVN7k5ADVB1dtNei8g2ZYCHCBWL6Lmh94BB19ne6S79QAk1gqEjoZtdFz99G7581iqQ9aZJgAk38SFBrA7ca8",
  "key21": "3QMWzGntDQUQmY8oAQZ1eKM8kjEcC6qmxoHCB6CWSjMfTpo6zzyXdq773EPxJAoogphDuTnb87XU8o5zJ7ePskPa",
  "key22": "KPRcmmQ81ggBtK8ei1kxrRmqvcgF2h6eM7CMVYreDKkpFQRVm85SRZMqkTuV5yVrodM8zp9MgMYKCBiqCWaDYkh",
  "key23": "3neN5pNq9nGbtLknPPirpPqH7T3YFMX3krExpEK41xFU2o3okSdsEfH7Toj7WemMsG4zjFWvwwCcbEUqMWBTHxzA",
  "key24": "4HbdgQwJGHH6Ma1BL5zEYtX3vnsfzDe1ZczN8AsMJUptvCU84zFoBL2CVd2xtgjH3HQJFDfGxyy5p4NRugVxho4q",
  "key25": "CRY5kWJZdado8vD4GyxRAbdwDJ9e8Y16NLTmnMTUe61XXirEyFvbmnduQGHAYzqP9yKMghKZFyQy2udCmw8YxSj",
  "key26": "w9HXaWCLNCahycrnfQF6T6u46yLReqsoACL6vcuPoPaftShGpFZWiMMeNqorWu92NnYqYSMBtjeeNPHtxp7exAQ",
  "key27": "4NKfSJy6nTNVJNfnDumNahQsWjijd1hBN4MMvHrokG3QTkVeMwczN1RmCitDektTc5uzdSaQGvJqAaruZbwZQqeK",
  "key28": "4dEyj62YnikAPj4QmptStscmgzrHbBYgogPpCPTyRV7v2tFut2sUFUkJ7Z5Kpnsw5eVdGjV7mV6ijo7nYt7GqJf2",
  "key29": "44jZAZpVYWnPr9RXAMZ38CVid6cvvoBV5nUV2qftpxKuEzFSNPhTNKzFDJyykwYN9ddCwbDq7JXhMcQXC7GsCPZM",
  "key30": "iQXHYRZ2YERb55ueAh9dWvwKg1ztpdomz6sqqxZ4D7wuYhRpZr2wEQ98NqUzrbZhv8cvxvmBmVgVdfysY9zsK2x",
  "key31": "3KtnEpoPKu8c2sQ7bwzskq5ALmteyhUTy1u23c7K6ByjwCjf7PE6GEJQJwJACYsJmYVVyeqMvxs8bgwk6XZ8obsW",
  "key32": "3SLfopPXbcF4B9zn72cRag5HD66NnQV13eD9am3pTN9x4EFbKYbFWKSeg1RUSFo5v5N5PA1icco5tDxV96wuh2po",
  "key33": "vMB12YQAcShvnQs1j6tK5jf398ZWAyzbhaArYGyxcgf9RdNQGh11N1m8scdFoBpXTLui1aA1c5E9AdnYVkZQAu1",
  "key34": "YG8TroYndrY5AonyXN378H5kdk1U4BGi7C1qjC1cYESorVdLM9QAVUArWNHB52W3BaLuxichgGte145dpTotT5j",
  "key35": "4sPxvtBBtuLEX1WXCMzBfEE4d1VuRG6xwNyuYR3FLsLQwwes9aT8Zx9HmDrFiDrjL8HUgKbKhpbeto4UbDH7qy66"
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
