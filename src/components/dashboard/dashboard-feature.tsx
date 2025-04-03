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
    "VEi6ricfj8YVWfYKrRHLohNCrw6PjsfR1cR5rNZFaSMdy53N4oF95X7nB11wWoPYj1R5EjX45m7pEkmVhKwJxgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLiPFztWUF5LjJTtfmMH233oGrRDg2oHNRQAGxaHxgtExQgJazRgQvnKjFnpoc5NLMQo8H9LtbqBPip4hbKYMkj",
  "key1": "4RgMhgaarN6ArTcnxs5cgMWW1UEf8vtgDKf36Bqe2ahu7BAJEHkec8TagPNm1iKabHe11LiS5JBXD1SWj5w2F3az",
  "key2": "3LUtQm5NQP9JAjSZgjt6JAD5ZBA6jcoLum53iPaq3xfb77PRuaFmoidY8ocdeWRQov8eRoiXh81Rwhr8a5Lwi9Ab",
  "key3": "3FxigCEVpHD6tm3KehDUtdubi1mAm6CP8BewHz4eccq9AjNPFzNyyFwH2yJKzrytec8ZqL7Ra1HghP9WrAVsoeQN",
  "key4": "s4pTDcFnuvVMRGGQ87dSkhrwTzFi8C9FEaGJtTbtLskuA5BcYyU7RRyozpEGGPjZVqw9nXCBRqPDVuhKpYYKx6T",
  "key5": "TpZYa1WWdCUJycpjesVBhHskFBnj5QJUBqhWKseTQMpCjPjbxKYX6gJQtWQKVTv1aCcAWLbFAL56rSfS6AmT4KH",
  "key6": "4G1ycEW9THXuHaRCBEdTxMzoG8CvZX4MdFqArGCzMixcQBHnMogsdBkvtHin6EFR373o9sk5dGeNybuRkxqTzkhs",
  "key7": "33VBfYVJcaJLDyQ1GkQ41TpMXcXcBddL9TswR1zKubpZSngovg2nJxAnGpB7dBt6QxGj5jyBj5wjL3qnTuZa1Pa4",
  "key8": "41cmgLH19zfyT4ud7DzHueQQokceCLt9WgkqK8BTuFbC6M9E6mYXnuj2kFG6cPaT8wPwEokJvCG1n11Q6FodwUXC",
  "key9": "5w8zNRqgKNmHk1LP29ciSrBbjgEjSsSCgTtF9pZFhLUSshNqASFtiSc2CZojGUrkaxfXR2f2joBaphYfv9cicNnt",
  "key10": "5yYC1W5eZVHzLsMmUrbSRnLrtG39n1yZtL7VessqVmi8WtNsudCjHbeVptQ9y43nsy8Be3Sxzvw5nQeoHkDFUa18",
  "key11": "xLgeysG7SxSf9T9vGDexdxTpt1ZCBvSXDu4r1xbqFfzcp9iJWaPLvdnaSrRghTRznr4A19BAmcTXjJita5juPxY",
  "key12": "yfmKH6LmFoW3ycEGtwbbSMY4Vdi1VgR1uZ5yQNaiZZ3huU64gyHWbh2eRSauPVip7Z81kBgmtoZmiZVrfG3QZE7",
  "key13": "59ZnjnvvKKgiKfsg3WvoYyTk7BEWYQTdtUFTDVWw4AvdwWGYqtXYx32zJUn1ZNuL9qRiPgV1qL52wEW2QGRSRJbd",
  "key14": "2ZC5Ffq8T7fZRBMbegR7hkaEyjhtYZeJku7ANSCGZDM5ubhiVBMeBwQVyyt8QfyKDS1dVJofFfD82PUoSEbj4exo",
  "key15": "36U7747Rppe7yjD7t2qdKNvvTJ9RpL4Gao1TBKCHcL9G4NhqnBDibbTkiRAXf3esr6qXuDb6LFzLjp4fv5qkRq5R",
  "key16": "2DfJKYUUmgQrzx1twuWjFe8GgKa8AZvki3di4h1gmPHPNBgQ26ww3mS1BR8QzoDppLaN6zwYyRJNuc5dUTX2CyBv",
  "key17": "21N1piwYz1Yz5VJzQJMrbHBM86hYoktCFGJXvkrJeGXP2YDQnVapBQG9E8BspSprGzjEj2yBzREBxyMWwUmzUgNK",
  "key18": "3Mxnj6osN4DiJ59okpFURq8hL7w3JKWFpvA5irzAJvqJ6mii7vnk2iRETrkzck8HpWXzipSUwCenBL3zaa3SCB26",
  "key19": "4it25LbJDiHRgLzWh1CcZSUADyTjofj27b2KM5uavjAKMqRUorg6e4aciUgAU3PVzUTTCUdAg78yjk1tSdW79q7s",
  "key20": "4tnCURRkeTatpPqaBLY6G9jx5dtTnTHkzyseFd252SdRKKWX4NRNTD7itE1TdEWXt9TH1jKbWukwGzs2y4oEaMcB",
  "key21": "48qqeE1RhrAo6aBtybq7UtkZbFfyoJqtQJxaaQHzhFZtKCwYBhHz58TBYVoWNT45Gh4f4HsuC87dgKZKi4HDQ29A",
  "key22": "3xqTcqHBESrLTxQqLtkdk81WgJYQXZFBHaTzh3LsfsvUXqH3fnXDu7xC6wXyfUKg1bWPYbi6Z3EWFTyhwyGmuzxo",
  "key23": "2dzbFs8niwFVdm5fEr2kCLZpocSAffvxXUs4R2NMuSbajjovqR6D2GnQGCLzT4Axpf87aKwTaLEChKmdbeWq49R2",
  "key24": "3aFrNSFTG3bcVHs5ZZuNWicdykjbJJJpzyqLFKNjyy9WDSBwuqW2roayrXd5RESaA3nSDYWR7Zz4iL8Kh5hSqJqk",
  "key25": "aBt9m12aYMoWd9eY1QdHkAWoRyWRPq27MfFiQXWW6jZhT46s47Z3g64tehZ3aPeUv2nxxYCoj1MJgyautPVD8yg",
  "key26": "2ry3SDaz2zewKrAtu9RHrrwK913tXFNvpuprCVN1hst6DfAS8VmL1pgG67ERDHqaPQakgVmmAFu7LBMS2dZJAYWi",
  "key27": "4jRRwN3n4yVUq2sUS2nyJX8KZg9Un6vnYy2w6wFz3RGZ7PAmeW88fEtG8J2A4nwirA8PxMCydGKAD4TYEzCYM5k5",
  "key28": "5tSc91jA1U8AqWWZVQjFfbDExg8p54vSsXY8yhKYxpYbxusxQHY2YmubK8V1HTBNUZF2dZyiLZM26LLgemL3c1zH",
  "key29": "2wyJSa7NC7N5ZYLmAJB179TC3jGjtLkjScsKUcm6HkgcXn7D6jFimRdi8i5busLqqcsRa4JUp258zL5oRezc1Ax",
  "key30": "3goryPquNFCF4NmFo5pV45tkqXh69KVYBQgvM5m5EvqmeME9u3U8rmL6FH8g7BRioLUcoxqGB6GCztmBJGhW5bnQ",
  "key31": "5fcarY4Ve94TggFcDzVpDbt3QZzwH97TkdoXj9VdVJoL1Q7ZpAJLwSoH7E7c6tRk6XfubF3Ari7yqLhmimkDDx58",
  "key32": "4cWdS16ZSn1R9u5c4jGGPLA591CFbZAx7MhFPvuiCTAwjvBHS3fSR8B5Q7zCFVBFpMDgkn2hdiGUq7K7c7gmCckM",
  "key33": "b1b7tvdSmtXPzUQQSYrf9ojkyFTRjzb75cd7RQ1TymhgnZkx6WK3HW21PpMXasArieFh8nUNr7sRSEFP1MqPJNc",
  "key34": "64SToZtKrdCeEDXg1GvZzpicmDD6JrVzrDdpLETG2vzyNNCQU47ii8yMbw4shLFd8fkThFTwg1EqmouRMRWCpemg",
  "key35": "4sMfUqECcBKVsAjYZhWbSffxpBwSa1w1UVGwTHScAuUwYDkE58yc9AwduHfWQGRJ4zSNw7ufJwrfV35UJSVFW2QK",
  "key36": "2fxU9p33kD7x9JAnAa81YcvoBQ1c2XpNhXo6CDrUMKcQkZ4634kAL6F9XsAkWAeWcWRn3XuyCj76eRQwc9UwvRuV",
  "key37": "4zwtGZ6tmaD6F5Ezi9Lp6n5cAFdHa8JBxM1TvP94cPcvNohkZPgMWjiGHiCz6rcrhLjWMCM6mLA191Z7H5LFmyer",
  "key38": "31WBjaY93Wz5JR7GN7u1FMG8DwKV6DEMyPs9m58kQG79HLhH7Cn8yNmhsmz98L67akP8wcNKwjeutbMvTGuBkGvu",
  "key39": "2TQu8PJXezaek4nJTekfS2reXJyaszWVhpXKmngziY6K6DcXq1hYXJ9GotpNECx8ZBCAUF9EhyDqCkwKtsheyHQQ",
  "key40": "3U5i2nNuS6Ns6A7R5QZ5giLB4Hek7SHk1Z8GRgm5Nf4Zs1matvvYzL8iJJoDCoDXijGASxmttcbQhQzzUVaqn58d",
  "key41": "2j7BqibEuMkT5QGCXTjUEy3Ziio2xm7gtzWRsDu3ZK4xTzfDzP4Pm2WJA7miTBM38MbZbMMF9Z64HpBDc26zJsA3",
  "key42": "5ZcWfN1dRgEM1fFkeFJ7n2cdNWziqmJvaTacQcEnkCV7aLVSgxLeNfcMbtXJUYvmktvonGnCaEJz1rcWgqA2ZfAV"
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
