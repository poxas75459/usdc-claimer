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
    "5SPR7gNSCuMtfCnsVeXXypoCQC56rjgPXvsWegNp5CLmhkirnXVLYmMX4doQYsj2gx5JtY8P6engqYtJ39XqnqZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GriZyRJMdme2gH3GLbX6UZPobJu9q5WukoBD2jzWgyTzKMQeUMQoUzAePADpNfevWcwWQGHiHGcqYDJXaraXtk",
  "key1": "csXxLDrrvr6nujoBzByHsLHEUkH2rZ1qZcCLrqX3gifeAnCsPKMK6huGy2aCc4js6HsFTrtT9yj9TxYqTVzQxWn",
  "key2": "65KBTNRRSqF3gxfykv8No1DiunqD2xoiUvtTGbKcsXXnchfHKKhq9Ff69XZRFxDu45QsubB1Ds8MCe5H2rjgC1ee",
  "key3": "3gpjETmTdXxamSQGoLcZYdvNmkZbw9QvN5TyqF8M5vfRz5PU2CePZ3w87zb2zGTzWKKmioAYmcvV8DxkWaTxHB3Z",
  "key4": "3JFDSE9rNdMfMtH3QcX1E3NgjCjHPHYK2kpzooiyGBFWPKZLh6dNwfaGsCU9hiPaNnTPFA8AA9RC1xtJBfsMs9V3",
  "key5": "5RBJvYKw1u3QnVLijngtAE4LhxZXvAtYW9WLkfYQN17VzkN6pNgqBBWRSvXeuAJLNjHJrzTmCwfnXm8Msd7pPYcP",
  "key6": "gYBiXrPALYkxthwfbUoz2neTbhYkPLYRP9WArKdcT72TudvGdpVfRNP9wiZ2Gm81rZtS2NJrAPpRfjKupX1y3r2",
  "key7": "yyiJvgBCXMj3uF45vgHkyj4kfWSPfZ6w49d1MrpECLS6bCeGNGBFVvJchD6XBLWq9wTN1VSSgaXeANxsVYQriL9",
  "key8": "5JRL8mo4CrgiAVoXd76Uo1iEFrjuhbN5iTnJS15YNHt4Cxc2d6mmSWEE4qi6tVcS97mUWw3wrdCgcYKD7GYGZMFy",
  "key9": "2uxrYyUrCuQffWgL1PxXHu2Bj14tRagz1748mtFcHzFg5wPKz2YAbeyCWkvEMKtXkLWjRhdM81JYazi8vwJiBX83",
  "key10": "3gREDfBdXWhkaUF8q828wANixbrT8JSTQnobzF9DfaBNuvvXgxAJ1QWEJvUL6fpAzQxbL9j5irVfNqtE6Rb8UDPU",
  "key11": "2SptkkVK2z3KguLxGHP7zAJqfgwNwH8uXMf1ja15NJWT6eDKbxUWRdGpqJTTc9pdrnAQFisJW3bZe4Dzh1PBPxS7",
  "key12": "pGzEpSoPWE7E1QX3RLb29pQ7uNdQ32EN3C4tqziEC6BXTmV4UDEKDpeGzRB5rnK1V7xo5UPLUPGK8Bo4LdXq51A",
  "key13": "FVQ12zP8P2iHF34Q8Nb9dyMvcvURQb5Yq8vAoZC7gzp8usZDLubcKwiFTrNyu2JHj1eCm5PvsDwywEntgHovbBn",
  "key14": "3ZTXnMZdpaapdBgkpubCmHn4tRaqoYVxWCHRpGH7V81sGsr4b6U2y9dpBGCN6otJ1CWX3hgLF1GPQRuohC7vRdLx",
  "key15": "3p5aNpxAVJePU2X8gCN8pMB92yrMdJDJyAkm3LFVvkwbtqWWS7i9jtgZdiVaidnQ3wJbH96sVYLJmhE4Wb7uYSQw",
  "key16": "5HQfR8uvi7ridP8XqeaQp4FyGdheTFbYfp6oGidFfDx8DxaDj4uG6PTsxkgBQPVHEkGpzynh3xwUSPE7QuqWRmwn",
  "key17": "52eMQPjjkD9FNwdfSyjhyWhS8LijSSCWaNg6VGoAxeaq8PNh8fhhgSHUYgpPEYzSRT8FNok8R6RuBTMWxMfTpsUh",
  "key18": "5Ynq66Bw5N311xyxd8iQtGixyU2cjzr2rgKodGf5CzrouvWtTrakEt9y8yWagXUVgUuqcwUVrL1F17Kozoq3hbKJ",
  "key19": "48kCi9XMgDtN41tVMtyQH63AvWRvwtGRF3PqwEJ5nKhjmkkqnz7UgvLNoZ54PtDvJf5i1zutVaoikbjLb7ZkqnXj",
  "key20": "3j3mzo43QGz7KYkuG8VDDHci1iTbCSEQZWwaocCKuZMevDNqtogX5YxxN2Po4wUfJfgLiUy3N2SiGqQFcyhb3nMQ",
  "key21": "4Nk9jfnhE37u6sbd4DaNeCqd4dudqM2mf4eob1om5xNo13kcRrbPeRWyq5p9JG2ka2E5fXRQgiZhQKRQUbdcR3Ry",
  "key22": "5pvGm15AoqBCo2R1sEXPgvMRogANAC6VYnhEcj3KqAzAoRT1n9H3nmdVGjjcmf3YmMp6YXCe4ABPahnWvmwis1dj",
  "key23": "3p4L8opoAum62gun9r6fdiXh1Ser9vvZ33vwsz8xyM9TLtCYR7GdkXEgmYjsWKU7h3PgzyXaHr51qEsB3zS4djh4",
  "key24": "3EHM3x4FMGZ5fYjBR9KLP7BqhzQhUrSRBRyveC5NpjvoeTCpTSvmTvjiknqsV3FCpgw2iSrjFeSZktM3oemJCkdd",
  "key25": "2RbXeFbKYCofnr1eGgTviowu1tAdf6Pe2dB51p3YKE72Ekq8Wb9QSC6naE5DxqFCsVdnFmFQjRzAUZUGM3rU8Pra",
  "key26": "2V3PPMqsPn6aBHmdv7ZoGRiqBddQTA4f96qF92AyptHa3162V9R4m5goskHsGrCb4gnD3ZZzXv3ZEQPUp7Ljxw8j",
  "key27": "3HfYinWE7XrtT6iFt9DeVVUQyf8WeS4qvdoE8hxiz6NBpQ1xQ8Xv28ocsEcWYststu3zLa8qyD3A8EfRrE8zPQ8t",
  "key28": "33stVwrDprX6WvVzzgTpDPdGjcj7PVjsdSCmkgXy28t6M3wc9yAUFUu8bJD5FJn1Li3xA1yoYKZbKQ4r49xtWPJG",
  "key29": "4gBSryoe2HdW3jVtKqwexMfUv1MSgALT7ApkXHNb1VnXgo56dEYSuSPp4mCL8o27YsqNLi1xZnvm2SWeenWmnr3j",
  "key30": "2UqSJSFZizVcSLyWehQF6azLBj5RgidQxUFRoNMc7g7481ynQJq5N8D9Cnm9BrK5HiTyAeotEXYWVwG331NtuE3Q",
  "key31": "5zirFcSK7YZD7asP5fKtZ9VzZ6s9n6cPsqMJqr4aaj6j2JK39rdtXDUkiX1VGLg9Yu592BGtHGtttW3avBUSnhpC",
  "key32": "2sgsThmigqxa2jYoBDhx7N2PE9krwjD6w9tSs7FxUqSBjypzugd32NnrBvuftz1S59FoLudwU1FMaw3gDitDhTcd",
  "key33": "3RbjmMYjifU8mQBMgLx9Hk6CbyLF6BLVoymCy54qyPXwREzDXhgDBKfsTBBzaPjzbKJsEQkYqXhziJaeRi3tMJSo",
  "key34": "4VSQAHnDNWq2rAW6EAWvohQZLZRsj49sygmSXUVhVBC1qSTZsjqiGRekmsetT9zZDSC9YzN29mc4zBLm8m9ECKpa",
  "key35": "5Qxa3GenWgwd1abxUVAm9AY1dYykN7UZVZTVCLzxBDnid6YSGx3vBMvaWXTxpFDB3BvknD8XW1GvZpcc7DSdfWWz"
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
