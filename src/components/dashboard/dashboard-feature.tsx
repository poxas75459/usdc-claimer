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
    "2hiUnEUZA7a5mCvo2ZPpSGJiMLzcNXiXsYeQyXii1eM3SzNQ5sK9EAyjDUT4ayJebtofrg9D38QVnUfnhUmhunvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTjKWyBzEHGoFyjwvXAN3hEUwtpuuseZHQzwAjMZ8oJF2mstLrQww9U4RD1endbmEue1Xwbrancu8Q5LUpeYmJ5",
  "key1": "4uQtqknpYGu95uAMKovwDZF8j7bcp3rFYiNCnN2gawvkGsNdmb2JVh1qvW6EDhtkUsNU7s4P98sx8o7Gi2tiRduY",
  "key2": "2v5AE5QQdxE8cKiYHm3fM37m3yB7bNf4ageq6veBGLGa6wzmccPJavVaQQiRzJ6iEiink6sAxazAFUaoJhk1Rgq3",
  "key3": "JjNPxDAEAg3xmUg53VoTqmGkyvorMw3RDYehPngqZ56C8nfe2xfDC3WF7djbfA5WiBv6sWddjzLTBfHo7iB67Eu",
  "key4": "5Xa6Q8mhhFaZKZsXDgxgNxS7nEixPCXQ1nd888xh9uk326SgHcLyjmkcmcy1V2mSpPoiKT7sgypA5x1ny4NtGcA7",
  "key5": "2MQL3MPv55warjdD9Fdp2h7aa9yNrX2c3J9uPmmz9xerh52V4XdgJmsfKRM32BdhHR58wKeKzT21jZW57vcPBonH",
  "key6": "9tyrf5zQBj9M4EBGQLP5hraKyRX5jkUQLENdUoVYA7MqbSJkHy4SQXFHNPzcPdD9ZYTbLP8Vj9yJpQEDA2vLEB3",
  "key7": "5Wrgsv7d4riMCKSZN7BxyJHzNx6nUcP4kC6CUhQ39AQqqpxPx5MaYtuWMxn2p15Kz94V9WZiwHFfDg9JqBnGirG1",
  "key8": "5MyHkNLtPeH2Z51wo8fSe2kAxYbBo7S28GqFwFqr9buXV5jSQ7SerovADycBfx8BA2vSeaxii3bYPQwYNhZs5dQ5",
  "key9": "38vXJ86u7CL2XCmeywo9WgCmB6irjCh4un6Zqd1jZvJxrHg7d2nCRjyP3rTECvv4ckW3jATEgCmNbjxkGZjzeouo",
  "key10": "2yX4AvntpSddQVTCHgGpKT6qeRB4aXTkEwhisJyQTCgg5wE19E7feJRC3XxuZ747NEQqhzkF8AtyPfsCTQkWuZc3",
  "key11": "kTbpNTBFMgNcNGyNp27wHwit8CTVxdPtQvST5v5hRyweRXU1Dv7JdKzqmQ1oFU9Ssbf18XR26q2A72xMLqFCg97",
  "key12": "LEhnNbivpzAXm75Y8GWjigbACNbSQy3ZWKPUv9sKBjqyWCN8wm7EEjdcf9e3Vxf1EHuHDJLmYVZdAdoPVHnhshw",
  "key13": "36UWMMEvhNGRadzJZokLAAoS4JQHy1Q6iteELiUoZ3B21hyHG3yXJcqhBK7sg7wiGWd97B3HUBB1LFMtyoYoAX1t",
  "key14": "2ym4XyjZPwe6ovd7xVQGQjnSfAxcTARRtbkc6ixqr7AUq83yR8RssnU1UzxcE4fNAFZoGdNEYRTGVPrrQW51e4Rg",
  "key15": "RBf9zRmb2pF6T7A5hWqb9jioMNniRzcg8qxhCrTas4vtkNTA7yzezbC2uomjsTPaJGvXfErvgd6R8hZofWTeT6f",
  "key16": "v7roPUyuFqG5LywXvMGrJhA9skotKunWVA3evcMTKzTe4pzPgNpJTFGN65XGkpsCiequjxENdjaoYGcQHPaRmmb",
  "key17": "3A2h6Se1ynLdA4mAJDF9HgrhUBRZECRqJrZ7YMSpB386XozFumSsWRCu4MkeimeEqYUQuP3JKZP675VgrEqyoByd",
  "key18": "2HsTYSmBGjXJcNuxiU5uCGs1Joz8qrPVzBaKAjh8F1oXHWKYrwWeNM5gwdhvypDfCWfhBQBsBgjVAfPqVdtegJNk",
  "key19": "5DHNGEw8TWkSbkyMe1EgdLbiXAeCF7LSoCfRBimZXFwJm2fXDmAVsHyQaw2172NP9eiyDtfGauugTo2Rqf7B1t8m",
  "key20": "45gPiyRYB1meDP9zLjx8agcDMcXqZfcxZ88A5wj7Y5hGvoSFJcWDGgHk3ieVMdzrXybZBT2ejVdmA5SM6quF3sp",
  "key21": "cxRbVkTTsDRoTp3GAUatLyuFi8BERGQL9EndTvdrrHk8bBvAjGEPdH5LWc6sa5sGvAhQUtWwx6DtrBV18A7pPMX",
  "key22": "gAdKVkcBDXjdj5YJuxQ4nhEiFZVeP6U6sRP51v4Rdwmn6uEPVWeaYfn3gsYfSmvZWst9euebBJdEa6UVTsBDj3n",
  "key23": "3KtTRS7zQeGxiRBvWJioPFKEVKyiuDvfX4ZrpvgW3SwzFDFqD5MmryGF3cQmtV5rKc2E6MhDRe5ndP6qXG2bvkYY",
  "key24": "45GQpswQbK4vebucqEXLk4E7byhbDZP6g2f98V6q8HDyycydjruKNJjAbhr57Ps2oy5fxfYfaR4CUjeEdGeLcySs",
  "key25": "5DKMAnQPC85T8euAJAQthzqybDKZZBnmcyACRduBv79dGKSoqNe3P3f6zuCcNpGMTRpJPf6gPhdsPmzHBc9rdUEh",
  "key26": "3Lk6y9h1N1xCEoqw8EZcBvs2F1wtwFWinvmh5ZsE69GmC5KapqbiAhKo6qiwT6ysSuY2VmQoPpuPx2EQeyZTE4WN",
  "key27": "v8mVq3vMkoR51C4LgCGoWMAYnhSRtqUcMwpPne9pnVQXJEK7zK1jtudoLScWvsqRVbbiYLLjj4qRwNLCkiBRoUo",
  "key28": "YGLPSHPXyB4LeiQPgkynPzp45SKBScLyGYdbsF1VAQwDGuKvxxknSC3awc2CM3vcGtMWoF7KmWWYmfcFQ8V2jTu",
  "key29": "4rt2xS43XVoBkg1RgwyWusAzbpw3HVb7sg1KyUzpxvenw4wGf2zdZqNH5pESY9eQBBUjNVhuY9huugCefp7TNw88",
  "key30": "3mdkY2SNnPK7ktLtpV768V4WUsnmpHe29riLCuiZVc1SVeLeqty4vUJaywRGRaw43rzDEM354awajB9vjnVq6r71",
  "key31": "EYumgqQRfmMdJG3EVxhS15CmWsoQ5maWemBrb3BLdydPYmauxfVjRNJnfXgznPsMuEMnF5LWdxEW1QubQanV2E7",
  "key32": "4WB6Ff2pg7qpKrBPy6Xxj8aNnfw1P8n2P98N4F8DxPuZ9RtmynBWoktyfP5Mh87k9NPuuRvq55jxKjn8LVjbht1t",
  "key33": "2SjeZXuZQtvhqjgsXnwsyNwNTk8EX8KjJtv6JerHmfgE42kVAJtNGAUFLt1ZhZgotGuxEpS16gD8XRXiEZsMyC6i",
  "key34": "3tKWHB81hyNMTmtjy2ypG4112GcisHBo7u4XVGDbW9pnCz4KN1QK1PzZxtp3KxH5Qfe6TSEbgcwpB3SMfoCo5AXZ",
  "key35": "3ygZUvVEGujyMq5mcxJDpzz8RE2uw1ErEyFtxdYyS49ESKUe23c9juPAHftR7cbb6qzM1GwRor54ab3eyvivqBpX",
  "key36": "3dX6k8vbGDk8dsPmnz14tex6reghQ5XbGL6LyBrcNFevPRkmknbbNqYrTQJ5mqG8TMJrzhVkKfnsZHMwihhbLryR",
  "key37": "3DYLWpYrHFPF1XCAYnRoysKkUjfv26Vg24JbcALHZ89MxuPW8DSwzWEikosW9XRP1kGsNRwg9N9MeG1bXR2exC7U",
  "key38": "5m33Hj4gHUnd4tmpYMvZHZn5rD7gRsQPJb413qcf6nZE2RzRgVHkkrdWMcEongBd1hExN5pm1PvHNMLVzLAnJhWX",
  "key39": "4ye2btdbmAq3TVbaznVxrCXmnxzeJuDCk61UrmgBZn4p4Fqv6q8fyUja7XL35TVEipkrDz8kRsXdY6Jav2Pid6eR",
  "key40": "2gDP99WLJhfVUGnBnJRc75hwnVCaVbHe9xSUrPXejfaSYErcMkNz1wTYgMK6WKfaCXuw263RUvBa7X4Va2Y2XuPz",
  "key41": "4AJbvJtuosMn1NrFJgLNM9Yr2W4kRoDWMAb1E35WycGJXp1ejR1sNadFg2m8tYfGzrjzSLypz9YoczNup42zfaB3",
  "key42": "3tdKFVxgusxsJU1aZSCBiNbyaV5KiMRgtNBHjPX4t7jQkBK8FgXm9VkVa7MyuVJT8igp8EBjSZs5D2yR37DZ31ES"
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
