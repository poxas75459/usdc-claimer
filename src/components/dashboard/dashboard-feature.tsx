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
    "5ht1BJRtZdd8U7RSfqc9VSJnmUXrL2XocrwY6JrAmYPKsLuoHW3xAoZSMVbayoR66EUHMJFofpY54k2yyc9A2oRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nrh2YWaRGKypXLKwn9ob7EBjk71CPP24tuvZgTgsYAo47tiX4jaJq7U58Pg12bjc5GxTqgb6nNGTxbuRPHD35fB",
  "key1": "5sabaCm5A5xXwagxy587e6TqMYj8XZfz5Z8KAAosSgrtsY3jh3kwQKHmNuu4VAnkfQ9A1oSZaTLgPFvFdeTvmtW3",
  "key2": "3Nj4dD56wG6fK3fE8RNUMAqgeCzQvDvD8XEVS5UgjZHLaMMf58e4H9Eujc9wKidi2ghBc4ZdYaSoprKWKdWo5koY",
  "key3": "4xyroPtktuEA3EZDMVWZUjZRwaXXG7WYavijT9b6bxdnDpbpmwyekP4WHdn7mmaN4APPYyYjh7puFwxHyHjY7RaX",
  "key4": "3mojaButYfzvdeTaVyWevXP44cYmx77cVzYBSVjB2VaJsL2N919THHAUBPobmVj716uvxBbwh49STsTYczHm4UtM",
  "key5": "4AKftKHkCnZQqJe91bTLS9X6U9KutEyQTiBWqU3UwsFioXaC9JCSadnBxmNnSHYwf2uGoNS3XLTuGzLPnj17JFX4",
  "key6": "4za7TGbaubZawAMZVh3Vm81uzfJ7DNADKirpkegCEkXtHvHvHpVrxWy8n9La7QVZJeRN6dMizwds1QLPzvSGbamC",
  "key7": "DSXyYVgVPreMLJ2ADQBmkphza5dQYWicjMDzJb451geqmCCWPYYMdmSHia8vSjftBFSqvxgaX9NdwFMAaBGm3By",
  "key8": "3FjBdkU6od7DXBfE958QfcomvuNSjbxEzn1Z7SJdTKGsv13Ey9EvMeJYCzqx5TLmuJuEKTG8m8xZcERSYhBKCdXx",
  "key9": "qbHJNRCNdP4RZa913VHhZrDdQvMQ3vfEQPhCWg1GKMRkNPmXxib2tdtaPaJLrZ3zzmZeNxMFSmvhvQh3p5A22Fw",
  "key10": "4NYcpCMoWqKRzSAQndJtCMhrqFbUxVyjXvQvmSQZC2Qy9Zx91iLANwgGgRM29BCcNPdQhNFFuZLaa4bTWsWB1ah8",
  "key11": "4fY12ka7zsW9RqngDcwBc4WZujnWT7YRXFVambMLNPapC1cAEdGsCKF1Nfy7MZQgnsVcqXo9osavA2vBvXtqtBtg",
  "key12": "erc4sL3m6BRgBvgxbFoLzhcsvkyS2P2Td83CHwvkSMGPj5wekDhFPBfeAwR872pBRCixsZsgZUmAYZ73Vs6q55Q",
  "key13": "5RfiggnEHfCnMqXEEcr1ci7eK4EvQuFaAkgCUTBMNdkEcxniKbDF8RWaUqb46xfQ68my4HBxsPXhfeDvfN2afPMv",
  "key14": "5CtNaT8B1yeDu33XToT8JZebEPeqMbH9FYim1tWfnRdM5GbVTbrPgt2Wuge231mG3sKWyS4HYHTAP2XQ7MPrbqr6",
  "key15": "3hZMFfaiELFfFtTd7FEHJbDCHbv6jCRtZuq2fTsohsGyNrAajSpb4hFtxBrmAPoyjET5DXpDFAg6bmEUjqGj8tws",
  "key16": "51C74Cgv7WbJkPgv6v3Z1fnfN7NviM5nGJXVg2Esi2jyrjHAED1RWJzTGsJEFj9pEEV53j1XXpWMErQgUjCtBWPL",
  "key17": "42S8pd62sxjyiQVrUEm8vzW9vwk2FYFVAvzxWKZxg4v3rgDyJXPPkxCXquqeWvvBRQdKdFBnaKBcV3kvPcwKq1nq",
  "key18": "5WX9WeboHeZ2sgsAiyKZCg1J8xZKJGKhZm37utCmik5BEtv8rTPrjxjB6UpiwTzpd4rJWZsyzoZGUvhCxQZLZ8PP",
  "key19": "2xpPn8y36ibcMWFqNd7bENeV8yGv7br93ECJ4rbYKWtxcVYdiixybUqsBzNJeWYBcSochh81F9FvyYtWTuSJ1kE2",
  "key20": "4cyK4MTAfeGaeEcdSSBXEeh1X2u5pd9if3MuWhfbVQ7czdvmMBbv1yoPd9iPGHS1b9VmXgwWVLV3C8QHujVBm1Wb",
  "key21": "2siWeVcF7iZLJHgLaVQE9BFB1L19icRKg6AA7XMi4Ajggk6jE7HtoUWqewaPSxYFMEW79tnz2krCC96tgCuKLi2A",
  "key22": "4TeL23d3edVFD2f2773Bvj1MURY3bbegkg2PDRQDnvpSP3uUPktHWBkbNMnjKgSZTxpJhGvUYX67KqpP4kX1pcJt",
  "key23": "2UZKyPCsjoWbt42KqH9BWrwNzrsmsLcX3jUMhxepWHd8jzNzScmX6hEuTqo3XuY8ZjFD5T2RbiF9S4qrpyGRTUUJ",
  "key24": "3RFL4b2ta96ZXM5KfVwHc7JM9d2MYviLjwhVSd5bUuLb8kvzwWDyYNKhLqBQ5pwpTRf1Uh8PFi89cAs9wa3SeYhc",
  "key25": "43nftsyNP7sdUbw6NGD4SMpugW5UQb52DHrrm962hExJnVmnRC8A1Jh9pyzQkWS8qCgJ5PxPNKKHE7mJnBkhGPfd",
  "key26": "5BJsweJEwBtS99dWQKAQ9akFy83Wtg1frNyZWXWepoyZX3fhZPB956Fj1ucASpL3rS8ghgztF6qMrGjcdAR71Vu7",
  "key27": "X3iBLatodyWzPyCorwueZSvANQjJ7EMkR1vLMt5sNP5TwFjwFYXV7EPUeXUUknUceBtqn9YBgdXj23yvKviXQeT",
  "key28": "4GNdcrKpm8YWJtBKFAT9EiDdD9FnUtfbGh4zgLc9pouCgdXYqzWoXedWx8QYQ38ZyVdmt1tAgtEazisFNBfQeLK4",
  "key29": "4jobmXGsJsaTTUA4a5sJ1PDTQtUjdqgLhgQgcHQJbujBT3eT2bAcXpjN8E6zgiShB5ESjM4sk5vGq1viJkRgLnjF",
  "key30": "2c5usxyXns9e9BZH1SJLFRmef5AV4rGjCfEenYbkdiqgtiYqzifER6DiZ4ahJdGr2ncgR6Di2cUVDcd4HRNpbYC9",
  "key31": "2qSg72kkuzkUN62qeP8qkmNByjmmjFiEfYuTAYjsF41CBQVfuDxLAb4uQsrFfiojZgeFw5mdNaemTpnNZgu6gHnq",
  "key32": "34P6XhgvAfiQENupeieCh2RCxes48zrptzM3qSjuDhZCkaTpg1fw8BhUHzZSRtusivRrRbVE9tkAwcjBHkTJEyGi",
  "key33": "im1TqQ72jJgTLEDxBw3jqLnfQ1uvwBQvrk8zkrLwzcPty4hoPEKsaodo72mBzBDemRekh5ZebsWYZnjc13Ja8yH",
  "key34": "2aTdJZwK4JGpmFEop2m3a4Jm2Mide4ZbRzxpFFT7XxEBbeN33cCzgSY3bfBscMnSatS8xhgFpZcZ2N3qmjuEzMBb",
  "key35": "46pu1bVDFcnw5Vn3MM8z6eqJXvDC6rc7cNbcVT4u3GK7uKpAB85dVqdxsCVJ8Vvv5kX64VdcPozBEXp1T7bT8afR",
  "key36": "41UUmd7bxGw8vtexz2669AowNNcjB7Pw5qwNqy41Wd7Pme5QocWhnWAH1GxihyRyyQxyqaHfDhak9agJxhhT44SB",
  "key37": "ZxY1Nj7rRSLMXdScEcfXLfBuC9bDCCRhYptEpn7xY778hVi9eWPJumDKefNKmFAWRZuAHzyUhfgnhuAtGegtSrP",
  "key38": "5dYFXmewfd6pd3andSsReywYVegAuA8iJjo9WyAYEi9bTbqDQgjJg3ojteGhpJd1NaA917KTCDmvBcdHsCX4VjJF",
  "key39": "2pBDBRjUtm3fKQAbvmJMGaeHm5NKpbsbQqJMNwttkjUtJpDtfsRsFCht6HNTb229xcZD8bcRYZdXLUzhEiEYw4Tk",
  "key40": "3y3ozaoDdb4MMfhNvwtZyeLDDnqXFAQGy3MedsrbsxMU3TVroi1PzBsXfm7rLoJeMhpK9amivBbtdQ7o2g4bgLhY"
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
