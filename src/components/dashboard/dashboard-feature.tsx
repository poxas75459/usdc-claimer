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
    "3Dd2RPaRKh9Rkq4DRcUxzCwXnj2AJYvRBTesXVjtLRasjYWy315Aj4nuMAhmfDvMdxitMXvX73vezRUecnWYgLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SoMd6o5SDL64bp1gf524VwYGxmswkdkwtmFgMJaDt85UgFSbjDxFZDBa32rtvVUtiN6Lswwhw1HgxPbmJXWdkZ",
  "key1": "3FPPTdtmAFgjizjPQdi9qJ3ZSLQVX8k9nKpz87Ds2tyL3zWUk3cf1h932R43NUUZzTREFSK8iS1kszgFLFSA4HFH",
  "key2": "5F4FXRzB7ktvSbSC3SpW2Ccjp8ZUpHoRQvQmyubQEQYCGzHh6iAFMuLwZwWwW57yTsobwkZ97N5ZjrowP91FSxKQ",
  "key3": "4TZWqHzPmTGKitGG6LXbm8pKkxx4yaLPDhyiMMdigZUVBQsE5i9wFvGhoAP1YUvUHCNs2TPwzEjxunSUdWebH6LN",
  "key4": "3W4XjM4AnLXniQWdo5NmqJyQvxfC1BPmJFA2jaJRWivTtnr1fxTgPd3YPhqjK1HjUcPhxCgBRDiDecgkA81AcMZz",
  "key5": "2JUogzgJRJJjUkTmnTKM2ifbxmYUzjhekTDynVUW9mawhpuWfXVKmK6LwhJYY8vpdgaVMkr3sjn3wS8x2iiLRnWx",
  "key6": "2BwNJjepQU2nR55GUENmJcju9hSswuEZQrPtKGpk3aZGZath1poDxta4xm2tdDHNodoYdNcjPHLLbVM5vPqLrWx1",
  "key7": "2pUpv6cvZXsx7r18F4L1M4RPAXXUoTK4g475SJUks8RAsszy1RhTV5oSdxfRz6PHHJR8bJyXWbojqcGAfyfxuZbE",
  "key8": "5spXrcxJNfvYtmpWfEJU9Kmi1LpqBGYmkZcWoBHqYgCZEYV1rmVeyqidFAcgxRuBeezyBLP6zZxFgkB4adB7Xi7g",
  "key9": "64CjQV9mHjSyesbL6gtQXKPEGNaf5E7dABHMcyMMHkQRDZbVBfTzpmcSU95G7TrDhK9CMkXcQMZoTLgC3CayVvBK",
  "key10": "4JmXEtn2vL5dwf5c7ypeMEybKEfqQnJ7rMvtureDJL9AM2tnShR5Nqg4KgUs1MGG1MVtq8ck9JFaNVkdqBb2ZH5C",
  "key11": "5iTZwjZrdvtqTDVdyfVGCSDN89pxGAgRgkjv8aRaoK9adb7KGnSJKoJP7yrybYKkgqW1iUyy9RL3ppajHMnYnu73",
  "key12": "U81WZynb3NgCeVuuVhXzrFgeDWanMiUPZp8xBbtSs6iuxqyX9MDKwYonKfUUPFwx89zP1orbqboX7ub8QvjMo5e",
  "key13": "3cPEYmVJZRsVPGV6rmNPetDMt8ZPGNQo3zgSPc9BY4XsDGas2nUcZvwF9coysaWKu1SbQGQarpja3JvPDgdaVrag",
  "key14": "4pMoHDNpaAg3DX397RrXPADZrSmfUYN77SDh6E6yScgRhs9iMdQNwwAfpV51WtHeMi92X1Kbc3CvP8V1BVadoLPx",
  "key15": "5PsbGNV4PEqbu4MNMuAgPN5gkuUX2rzbWhd86CkGYKQQpYjSzGQVC9B4x6Jm5BpdYX1UTEk3SuMEKu7w4LA7N4KZ",
  "key16": "Vf6PFzMcoyX52uuSD9SiCJSw64uVvchM76w2M8etKxzJLZZJbCs4UYuU8ZsCangcvhFDuRJyfYcqyVMfZxkkkEe",
  "key17": "4ymFPxYrXh4Pj5D2haxBdSVs2jM9L3vYmLaStBBPYLssWVhk1vjnvsR6wiHFTkP6wS7WgaKEdgz3HuTJt3iVU44N",
  "key18": "5JsaSakYYutAxTxVGMu63W53M1XfdQNX4i6gHGQ3zhYRhaen3eAN7Ckt8iZxxuCi7fLAu3Xoh1ihyPGfF3TAm8Wm",
  "key19": "3XCHXc4McRu4vsPdCsSw98Awn1C4s4LQTmukVmpcDVsAtNPboRRA4FWND7LP9cs3fYoFjRBTLbR5i73T14Yo2RsJ",
  "key20": "19sfqgUkfLEDDesaJkyvZcTtLT7m4Tu1xCmXkjmyVrEjqSv9Fk5Sjay5dSSrn1bZBv6R3QcKPVeaEB3oVqmW9Ck",
  "key21": "4bUGnw14rztiRnyQ3cESUABDA7nAgemVrkCsMYsquogZJt5qrbteheNzaKRJaMFq3nvuAX5j3Fhxbmdfa3rzRL8y",
  "key22": "4FSVWcV7pkuasNkTQiQ1ZBjKihH6SP4NvggGkTXfgcY2JVVq6Z63tYo9aWQ1H6Y2CWszYnjARe1FKwQLNPKRShtg",
  "key23": "5WhDwWcTq1vgobwcobC1zUreYCriVqpDDHDkbx3UaAYmH1saBVDNazgTb97rRgUNNRNqTGMjRkHfRixtgPR9BpnB",
  "key24": "5iWUm5pz2ThLCTksczgG6CZtucztCLxQwPmDD99PgbZYS9RzxxA2LsUcdnacemgQkfr2yJeoYrpbBR95eKFcnQu7",
  "key25": "4d22CQeSGKASryTrSW3sXQySDxZtSdrgAgbhxZrE11wgwXQRB1YMN2Fv3WcqUoF2WcZojYarDoAkR5XE6NuhyNJV",
  "key26": "4bii6Pt6a2AMtpWApgc5gP29HfgLPJ5zaEbHLgvWQcSWz45Qma7DdgWCWZ1o7q8gbxdDfG6updsCHryGfqoLRhvL",
  "key27": "4vRLMiW9iBkX8Cg8GADh8PYcQXPE9Mzym9fFD8CqHBxmPYxxBP59zHV3c6cwtZ1fUs29FYWxzZiveEY8PgUyLQHd",
  "key28": "66P4U9P7UfdaBgi4Vz3F5MZB8s57PQdpV2UxRr8JoEbZKsW3LvWfAxo2ZenC23vZaE17dXUX2RVEntZDUde9sBJE",
  "key29": "3UJkv1d9tpCCP3hNmv21FbLWtqeahhnUTm5qKfd6jtcTDPjwGDLKCPBQi8XMja9He16J77EbVhaovL7dbeEMBqq2",
  "key30": "5UCS97F1K2NVnu7DfcCpPsmQNxypvfX2d5iiDXZBmX5Wt4waYvRktLfpvMxfirQvN1hq2VhTodzf6mHWdnv7GX98",
  "key31": "2xhCzi4wi31Xzt23vP3ViWmM3xfdh98JxoPq76Ns32eW9xVwWFD4RpCKECGLsnnvWiBgontadvyFwJM4WNycjzcC",
  "key32": "2fn41MjGEc8u3oyhkPzHnme2MEuQ3kMXHzkjkXzEcchMmFGDFuNj9g67br7oAVSW9AE3rArRKm1FiyXKG87hKpQ7",
  "key33": "2dMn3ir7DyazeHi2xwTFRuopFxiaRUVZyeFnZugwa81dZA5cQMaJWG3f4eTL12K3CnS61Q7bzEZzZok4Mh3Y5SQJ"
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
