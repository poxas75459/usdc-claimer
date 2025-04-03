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
    "34akXr2iudWtBYHnjZXTPdoSjKN8HyvNXAbPPmCndrxPkQsNcCstRutFqQmo2Qqr1VSSEKDMG449y9srgpWHfLPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdHfX3BG9PN33rutyvaf9XBtDWFr8rG2Bg97ufx7DgDJ2ReiewWjYL6H4qJdYaZb6FDZehirZ5YScrSMRGzHoC8",
  "key1": "4SXe6XH6PtoKcHzwcVFYN2N5sQAZaWFMMFeXPU3BeKXX36LgFP3Pc6mESAcCrLhc4KoJzQBg5NJ3zurrCjfT9S3E",
  "key2": "4qgJHhvUYiU8BxqTNhMzZ7GhVXH6eJ2rKWdiEJCw16Mjxd7uJAoTPsAg536ndJziJ8ZzpvxmgdtNTDZ8UQUjHTH5",
  "key3": "3jm1CPDzJusjthta6mHPopKUXUH5CWvAsQfFKeD9ah1g6e4DCzMtyuRW69kMcAyQe3mGQtaeu7Kbv9JbXNhMGNSW",
  "key4": "2cetZGYynerAh97Xp3W54EKUJTUwXsyqo7fESw5JEVKvBpdHtHkn4eGJA6dyVetJ3kofcE1sZB8FP83u2Fp3SphK",
  "key5": "3qfDw7QCuoGxUXymWmUn95Jn1jC32bz6ZYav6a98cnjTNG9pgHby7E2AxKmnwsazvar9Dy4hHHvJeiF6YhV843HS",
  "key6": "a7b8n4tk8EsHSfhp8XVYVusiU5NMCZF1ZxdGZfA6iAaQwm8AtdFZ93BpD8s3v9gHHj9w6Pj6MK61fgFTZguftyH",
  "key7": "MLWS8CEDiwkcqeL7cvogk3PMfgFpFuoExw3pDa71JQi8PvKXDe8Qc1Qaneq73BELh1wFEK3NftGmi4kd8hKrQMp",
  "key8": "474M1CXKkfYqG9YAg3i5QrJxmYXV5prpoDc9XUme3aB97tgk4YcqRgDx7mCLS9BTpYiqY9Gi7z5EBzLEDSXkXi1i",
  "key9": "5Ld4hLkhEqXsBj8cpBGqbioKRBV3XZcXMU4ZXVDgLTjUfe9KtHEqR51nZwbeaLWfch7n9qtoD6uvSpQmX6Vss4oY",
  "key10": "3EZzo6q2uXDXQ4GkB6Z8BwJLiyiCNrtk3VpSi4GVk6LJczFtizxBX173c4XPWQpptCsck7SQg4Twu9TyNuf3buYz",
  "key11": "5Jdi9XemiwA2WX4Z43zvf2PEs75BG187uhTwYvT3cW7K8h6kDMXBYR2ECzq868UH33YNev7nuVVrhVnkh7sSWWDZ",
  "key12": "3BnkFfjy7SjtGL9ygnBCsMZ16vUFprEs4TCY1LcD7gUX7qq1aUn7fHeYhWvpJnZ5e4DKLX5vsyNPvJeqpqv5Q3t4",
  "key13": "3xQ4xydDzD2dwbv1BrggJz8m2zMtTzySysuXK2mVxDvFrgSMBUjdPWsGygNF8UkBgF8DAY9vQRdg6zfEQmTredPM",
  "key14": "3cgmq75iqVk9cFjEuZ8yuWWt2FjW2gHiPYiMAsFtWeV1wMQW1EEGJweFP5VYz7tPZEirehek81dGdVmgUcEVL5ti",
  "key15": "5eUDyi2xf6HbW8wonkzutuEBkcU1PyynerBxh7B8TCRZddHFhie95G7biZ9if9WVuNMpqBu2orsBYRb5n5xSqyZU",
  "key16": "43ni6EngL18YxCrmDCbxCuwV5NMS3vM1yk4vbs8TegtboGn1wLSaW9KU89NXdmy9r4tehDj54WBjuTZY6c5a9PNt",
  "key17": "3XBUMa6bJD8v3Cv23n6bq58S5sYzRhwTyuM9D8yBJQjhQMxji8C7w1UsdxFVfVBGJEUSWuL6h83ghGaNUW5asVLi",
  "key18": "iyMvrScZvt8Ki6TLrYrxdfQeiMyNKqpBF5d14p2aQ3Y5H7vpJ3tFVicFh5Zo5Ch537zhQUDQVw6ic6NMNkN3w8M",
  "key19": "53jYqpjV5R3oZPzCG4kUq38vYweSehmiPoyTuUqqNWPhrkhe8JJpGEGe1hvqKEn2Pf6RzzLQvzEuUNuntZ45snPQ",
  "key20": "5qQ1D3AhFZEJmKWZ15NwXZUXV3THd6HvPAAbERzpZZtH1yShWiJdukMLhQ9i5EV37Z6TiXZTumRtXSWZ84EPucb9",
  "key21": "4AnJu7NnVvnrAHmJEQQ2vrnopzKGxrKeB5RygfScuYGCvrGoYi77MV1VdjXQqgioFyUd3Lj9bjwG2Zjs758SQRKv",
  "key22": "2BLsf9zS8AFbrKvkyRVmNZTS7wSiU8PzMxsjXCwLCAUmuVdfwNsEUciAYQ1q8mRKFZ8wDgfoGjdvmqnrSG9Wbu3t",
  "key23": "4UqC9ZmYiS3td2atW75XPnHv8oq8zyQZgLFjbVc5zVjDGieoJqjkDdmGUBU9AYQjGAtjixhcSqBLnakfKfevpQz4",
  "key24": "4wRsBWY1ktGg3WwgPJFbASXcRqG9rvLMQNGHkPxTkzPJrn7BHmRoHjhk6avGFBP8Mdgiy5pww5WCe6MScQ2ChAee",
  "key25": "5cWYUL4CYCZ4iXCGQvtN7vKHho5eea3snPXNuseU7cQ1GdV6uVTTiyVHWsMZ847JDdLii2EKmThSyL57nSTrpXbg",
  "key26": "3iLSW1ndWHnVtdnCpte9yBTfN6dmg66WYYsbJJ3FKE1PfstqYudjUPxdXoNyap8LB7pmABh11nx92ZmQQ3w8v5JE",
  "key27": "RvgX5Jun6zQdaw9f4VvvTTBZ4XEd2Q6BsHqtJWtArxHegZLcqnsdHS7tctGFwSjvpfNfFTATzakDpaxQeaFu4ET",
  "key28": "2L2TMhGdfkbWfyvFrVC8UgTMRYoLRBfeNP9nmyumJEdFZVbCeKLCstDcnhoksxtYKg7ubofPKzmgy3JwTFzTgfS8",
  "key29": "63xVhrrzRvbuCsHuPD28DZ3YmnXNfnJ8c29SNStn26YQu4HwKEyJdBsmepWkXRn6Rr9C3q2bpLXY96GeUaCcpY3X",
  "key30": "2MbTe41oiXne7hi99MezwrRPVPPmbsJSnssqvvVCdV6D73QP2TjvFwQSBp2CX6ZcBGusYbmGAeJ5FhyoDHz9WmFX",
  "key31": "4WAhZxY8XaERHs2VkW2oRpUMwZhcKSeEgRP8DCXwVTVt9n2rWC5Lc8jkuyg196dX1dbFJ48x8fCJgiCHjKXhPrer",
  "key32": "FMDurrcjjZvRbTno5TQwPyUNvtKiFyL5dU2o3bUpHbyJk1JyXeVPHnbu6raV61NafyMaCh8pwuihq8MLGcD7CRp",
  "key33": "5ojhWD3XSSSzk783ozDZXUTCfobpzhdcN3oGjuw1AmYYaAB5eVzaP3YoibccP94f7LkHtpQfxT4HGoAFXe4Nm5KV",
  "key34": "3BrYamsSFpUy3sE39XdRcoMvg1wv42DrK8oAXyNfN3tAj7K9fh5KNCAft5mwHdBb7pfXgSVHc4CNQ31Ww4B87UsP",
  "key35": "24MkaXGsxHwaWTdwkEB1cCSmj8e41oFHEB88wConToMoqf38YXsjubUjFxLZUcZ982gTSDqMnGzrKeyLvz6Embmc",
  "key36": "3C2VvyUfbQ2Tp6UTcFRu4YxLWJWTtP3YkuadML287jo5pVEpKqcbm2MdFP99jDRNM4XMJe3yNSPrCbFS9LvqqNXx",
  "key37": "2QdbPCeoUb4XAGF7kRTUvY48wmZPEzfF1EoHKkHtoVnbRzsZs21HV9ehEHED26BNrhFzDzP8FoGcmBZWrFJFnpsW",
  "key38": "53owUSK2qrfbBvQjfKGTmMh9CvF1YWU6kAF6B9Wj4tq1bfsK3SEXPT2VrTbixw33DpsrGjJPUxiTqGc6i9UEnmFy",
  "key39": "v3vqmLsoNfApKcdqLTUNpdy15ZfYYLRCXxNEQ84GeS35ygERpNCPfKycixAgaEjm6sW5qoX6pq65dyXATDh5eSr",
  "key40": "4AyvhzYvWeV5BMEVDkyn3aBhdccnextWadKtPJ4nRf8sZ1AKPbm1FPsZ4TcURcPkFqgoyqSisKeQJTkFcGsaHZm",
  "key41": "4x92zzmKGtwdLAD5yYpEkCGVzUi9DMY4oeoP3P8Uj66Me52mmG1DD9EYhr7TSZphz5DuYD5FeHUWpDNv88auSrfX",
  "key42": "5uksQPLHDe5DQSEhGdWbJ8XMpQDxCAWnA8cN1cjpsU449n3ZA4q5x4hnuCnz4TwFT5Ujq7ZBM8F6zt94n2A4TmKp"
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
