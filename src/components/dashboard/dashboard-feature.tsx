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
    "3dhSonCsNBWTqUtxgLSQbBcDdk2RTxko6ERfTFxn8rooBBBApRPkBd9h8oksofiEgv7isrWb8qg9HcM4MeET9Wnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sQyMXDeDcTKN1mnxDcTGXVNJFS6EZM833CnL34dEJnUgeUMtEjcWVJ32pJzbDuT6Psk5kLgUynSvnrTHqBcabH",
  "key1": "5tACAGstYUAREAjZhjsGfU5vWMxE3qs6yHkGyah4C9sBYyxqGQ1rAxozUdkPoaHneFKoXHHD6cfeCCfFcLq7ouuy",
  "key2": "21UxZzXmhatXQzNeJxcsXvYcevFv4LgHHoiF9tXiqLzywoK9HngXJ4bjCFDrPasMhXMc7Btd1YoqtMZyZAQX6pdU",
  "key3": "3otwWJ5dXHUvugtferZUYS5LCUdWKvUoAyfnmS3KL5F3v11SRXQEJihd1ZdAV6r2CEfdSFAa5ATaSg2PjHguDqMU",
  "key4": "3wqn4gpXbJJGaLDFMVKdC2fxBbGZLeAy4bM6A5VPGW2CiWeZrU9Yv6fSimrLwXUTgrZPgk7u7ecGA2Yc1AHELzSb",
  "key5": "5JJx46yZ3g15HeGSHFbMzvoC7psL9Fw8hYraiy4BDaM2gYipcjNwQvkrUszVhWusjoxKnjupMKxpCvjvb9TJUNkX",
  "key6": "66V8ooj3cUtUhp94CsiGL2ZP8kLTarbtJe8dUoTrFtncwqFTxAGg7B1xYsTnT4KqyMCuwAt3PZuyd7JKrZmEj2qV",
  "key7": "42ZhW4pEs7vpiyofBrXAaA2kL1b6b2vhsV23semLypPfEw87TBYAPVCDFsttKHSpTg7Fwk1XyCFJksvzCJvBfHfW",
  "key8": "AiiVhMkDReLREHdCUYKFmiJwymE7QEsF7Gneatd6r9oWJ16MtKwfweijJ9V4La5N19B3DDSSu7Z4VLrGBjxrmmX",
  "key9": "3sacUdjf2QxMr7J8UPV6eYbfK81Lp57Jw9sLEUwujq83LgcPk2CDcaLraHB88gCwkqp8dM7sAWD9AwgBdqj1ywZQ",
  "key10": "33KYCTFqZYq5XtwiDvRteuu2v82UhiuZyZYFmQtZYLauwWYCMKXRbePDfrUy4beH8mC1hfqUPmw5YSTCTiWPbbkv",
  "key11": "3LVbFH3DNgVimaFE3A4jAXyqZpgfajh2DBzovZ81M22hbtyV5cFcTDxMDeF9n62Dui73sjszg2QeDVwh2iYFvcY2",
  "key12": "3z2L1UVmM9x6vXV1E3rEJtNjjS2yDHKFBEpUEXCrsBXZQnvt8CV9gCdTVo5UPckdt9XM6XPa2j24QpFWwb5kA3wS",
  "key13": "4fMgFGCt7BVLd8tKMSbkTbUTCZHUnkAeCLhpe4cpqJ8DgRohBEyDgAoef3uyjEJspKsv1a3CDEYNMttDGgWvaQc6",
  "key14": "3Z8HvnZ8LwQMvbmoNQaSLVfxJJRTiVG147jysy4sg2GD4DaJW4MRkTm2kFEF9Gi8xQGwnmBityNFmfFAssptLXVN",
  "key15": "4cyurHB3RESgvEqf74hwokwRGkkxU6csi685ntjMem1Mkm2aByp4yuZA8LFEjL5sKN7DjcQdCqm3aRC2f6rN6Ede",
  "key16": "3zxyEJbeqys9QW8CjE7wbkkV5P1NbsthdxZj2djucDecA22UvC3FboqMiiMP3n6WxiXadaSR8pEWwMDgygt87QXE",
  "key17": "dxDnZUWqVLsubSsWj6edjsooAWEhci65X8XJ2cU3WQejdC6nQtsSwAGMvVUT9a2c8komADnu4R3TEQS7VNVTjEc",
  "key18": "4wBrffU7uEirZZMa7eEjxibWqobXbRUA2XojnqTrjLLp5MgRb9MvjSMEgWKCK22chYWrjakvuu7ofe5aUXhf5Xz7",
  "key19": "4srtHdztwQLU1pJMQKBMaCx2tSa7iRf2GH2po6HWM7v9RGbobu8WiaNHMGEk1fZ3hYu59bF719Y1nTj5DVAa44WL",
  "key20": "4LcBoBvXktBkwpkLATEEXWngEAqv8asnxjD67195A9M68we3QaSW2stWUPcccGpeiGy41dQWibpNLpzZH1dnYAC2",
  "key21": "623z4uthFyu8BpRiQAKoWkgtvRPVuKex33Gd3yGYrpnRHxZBzfwk4D7s9BNe3ihwG4DhvFrjZdQ7FB2DHdCfY6hQ",
  "key22": "2gkQ8Gv2f1XVYKzUNfvipWzCzATKFuknfw3DDK9Xxkk6429JDvvDD6o8wwu4eAsRmNE2aNMF8mtAaxMn51Lobsch",
  "key23": "3UujLqjbsoXe6yxDRS2wFVTbo6orBAYWwcHUkArVEMaWQCf4d8FfKtvkUGvBKpKXgP5si11zfp8PmBrVv9dy2pBd",
  "key24": "5BajRvBDnVnBcH7L68jPg9zS8FSEz6T22S8bB5xttygrFCUjDDp2bjL7JbhrgyaxH4taoQEPmcDYE9sbMcjGuNXA",
  "key25": "2DvoeU6S897vTUvbLwWsdnh21zzba42B4Vmyn9Ks5AsLMLeqzSqjdA2YyrPBjomMpBoxRL8n3WZjYkP73cRi7XHq",
  "key26": "4BqFy2K68iiJqZtoJr3J9pjikwuFY1SwFzQN3cJ3KEY9pmkafukeyBnG6pT5hLtCUq68Q432z5B39j8nNYw5BY57",
  "key27": "pe1j5mShSnyYfiy9cuTwmPr8CPnAQpyorNZbDcXg4ar2GPrhEkY5VwKXCMpM7fN1t4Dp4q38cTVfmKixz1RPAEJ",
  "key28": "XGRXBmmf5rMhQf12EZDkKobaC1xXDbpfPLLDqCmTqK6BR7SGabWdmZ7KyVDeDUbQvnyZDkFXFsf2AiYXC7xq2TJ",
  "key29": "4FzDhGmrD8XKVuMd6uhpkTKCKGEqkcvjMWsjpsBdxYDgFP9PWpdMEmjERz7mCm6U7seEY8TpJ9fNjrmg1SGkAKrC",
  "key30": "4D87nxAzVvjjt6z172pRogUoHJrAtmv2ugiLvQmKhYvrm8MPjtS7tCi7n9n6SeygbSu317efWTPLBUN68ZRM7mhc",
  "key31": "4xUnCBmStmty1aELfZgjF5ztJ15dDuGt3dd8Ng22dNGuV8XrRmUWWWyoyUkLtWL77odkmNstKyrBkRB2yFh9rUzq",
  "key32": "5ka6kTCNPNLepdrfGA2dsT8mywkcuhG9uEUzyY1gdTyLVCEj4FBZeNGwmfLFyHUSMGMDJBhqR6pQSRQRc2qqf42a",
  "key33": "3kxwaKPRB7SBkVW45SVteXvEh8TPmni9aHgwQBBNmrivrAttfDUNxfsBeeWYPZQsYP3pFYRJd4bE9f7dcWKWLaTx",
  "key34": "5BZfASvHCcsXuRRHC5eya8VU9rVq7gHcftEjcWh8PRa99bVPjeghUCpVQPCFGUkiBectbj1TU8ZupG2u1QABfTdB",
  "key35": "K1LZtzFyq4nQ2NEb2F9StAihs8DPRNwDqLC3Sedv2XHhPSeyTz3pv5gZ5SMqiNBTMa8BFDpenjcW8GwYwD2j9bA",
  "key36": "QrJjvuwMUDEw8139PCUPcTd81F5ebDELkWWud5UZF4qyyNghVEv55rA97yGjmbEQdmSGMCXg47VMQe9GSFLvBQc",
  "key37": "5LPfK4L5L7GnPkxpZNtiRDaphpyyy6kGDkgxBnRxuY5VkfWorrStVqWdToEMeRKEc5K1ub9rcY8AZu7gAGcYRVQ8",
  "key38": "2e2RkdvvNoeCyrRLsDBPJwCkGbqhdq7WXRHSPEk91XPZ2eBk3GiJ61iUFrBAku527bqkfR7TKF6qCP3Wj6LUgLDD",
  "key39": "3SQPP1ajxxL7qv7Q6qaAyzVkzwP4xrRTLMY48B3Fcoait3LZPPh1e631z3PSZgePDXaEq4pbUYGJLPBFmAjh9GwT",
  "key40": "4jrvuSw3jXU7ASt14HaE8NT65YsRutbU4tispiRjogSXCC1FWrYRKVC2TafFomsDc9ZZ1fSXW6mFCLDmPDNXh99q",
  "key41": "A1SHnCFdfco34UnPkuaMWZB793Mupo6kUDVucz1BC9k3eH8VsGko4EJqwDwyRMS2hvFM7QZjCbnxacKtCtBRX35",
  "key42": "3P73xDKmLow9g4wYRDMBeDuLLB4Jbduzs5NV6y1zapJQU8j6wWiHke9mgkpTj6rTCqZhn7dGD4v9vCw54ahZTtVH",
  "key43": "267kAbAcuTWkMzJ1Bqj7EZ2dGZR9uRo5cqGcNGrG6EixnC1UjpBCn9gLj4LutLu25uvnX5W1NQk7jqqu4iGYqSk4"
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
