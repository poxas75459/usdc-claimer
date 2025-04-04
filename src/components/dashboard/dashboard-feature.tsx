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
    "SJtoT6Wx8zBpeapV5SqZXvs6CMt79irQpfMTeLcDZLmhQ2S3NbA1vZDyY5K6nDJgFXJ9JyBG9xMEFVA8dyTggpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bfuStYZ42qgVTE7QwcWnTKJN9ydscH6gRVhxXXckzDg5mTjUF2Vc9fFBaDrBz6ZnrbttDHN9ET86Ft97ihFcSPr",
  "key1": "nTGpcFGd2i74fQLTFjKiVtsrdLz6vbM53swbqjusJ3aRMirQpgnCUWvDdwNgRsfuBsEWyAYPtxzvQcetD3dNgR1",
  "key2": "3WucmFNCLs718XJKpWBAMqTqE63tWwLmAqkD2NPYqbKn49tv8N6DVnHhk3tARgvuWK7mPRcPT8uhVok5gaoaHCHW",
  "key3": "gVsiYaZLesU1kcWm6FJ9bxLjkbs6PpaU5X7uQow2Dg953vSJpqEDmwRtXfA1CfzCvCxh6r3xhefbbs6KbbMdfrH",
  "key4": "3VAVNznujBmu5ZxWLzbmNMdsgCotz7Lub5gg6DV3WrtWWLcSbLpXFn9t3gVUFqfB4sWX1vda5C9mDmybLTpXdYBo",
  "key5": "Gv4WrXnFD18ZudwSvWYBdjnM8LFaf7dgjHdyV28Mskpp2aagzCfJNRNcXdh475EWNfrwewwRDJjJW3gxkPrzRNp",
  "key6": "56prVkpXH13iQfUaupWohQNTAKRT1QNWYXXk15tEQEjeBkyCDcbH7yj2zsyFDSvV7apb5gA6baGY2sUjsvD5Mg8U",
  "key7": "41qf2hQaWT4EmjL5QPQwJhis1Vf9U1Dp6uvMG3WcGsMsnzuasrvkB3KzQNauA9suEpGrJo7uuyXJEvLyxuM1XkSd",
  "key8": "5BZi9PBXNxosLbN5JZSy9erAcxsYHgTCnB6iLXxReLsFJYm4qJ2rggBdZgZtnwHGckF8mtHmEaVG6Q8FJ7HAexUE",
  "key9": "2EQm5FKwB6STAqwgrxzSwynP2fhuELaiX4aF5dYNMurddcAxnre2UwgB64RuhrVeuvqdF1mhto3qPDw9cELdMsT5",
  "key10": "4TgBe2N6tE21391BZu87WhBkahvzJcY3jxHfrkohLQf3DnbehmBxDEReZypoXCNGaiLtmHMTHkzfjpaDWQKWM5Vy",
  "key11": "62cAqTM3pNd7E9ZshX4gTg7jqGLqRqEYFbyVvXcbFkhYf4oUatvtEHwwzWEx9V7tr5YkUZHXm2TFN2E4afR5NfFP",
  "key12": "5PJgdBA1V5BQ2F2wufmsrbMVjsFpXZrtvr7wq4peSXXUndtPydxqwHYxmVjBCv8Jkfz71i3PWm5JCPSfXv9jb81d",
  "key13": "2QjnENET4jWhjvFGnXTSV7wT7DtF2DceHuePDAmo3cHuwfSek4GFGJ4Y7eHTMRfJsZUAQXJmoYxzdLrSMrixXvo9",
  "key14": "4SkjW8t3DD2WZXXGc9nbMxkfWiqcJa28dt6oiFCeC7NQ77BMF94CskeUEQdvb7b22WN52bjzK93ELqrG2wktnXAW",
  "key15": "a5hMVhrD4destLibW4giBBSXnV1sJ7CBukgv67tgGxTaYF9vDJ38bsYaZiF7NWgapr8d8YMzFQw1nP5C8wP1pr7",
  "key16": "azEo3nNcpwUrdTiZxXQDhebQD41Bj3bP9CBzHfKf1aFroN8hP5vcHvnwUC2GD54KPGCKcubF72ZBad1GDK2a8LL",
  "key17": "3Ho1DTB8W4KCnjsjawQDQbziWbBdXKj4Zvf7K4ug7d7YQnS2bAbLikAPT1Vtr5cH1H8o2hFRcM4EnYXRKdTVjyKR",
  "key18": "4wdkRCeis7ghGsJ2tUJ22f5rssLcSshEbmukQTMVaG2YWGzh53zL1TX5FEtASwV19J88fmy96GfnR58Eh4VJbnNh",
  "key19": "31hth2UyjCBBNPRZrpqMh4zBH2xGJaFG6LidRoKAvovfz68mQyyouyGHwBZeGzwakTJwpDiBT3WZDxDtsmQhDmAr",
  "key20": "5rvEEXWceaKLmv4ZJgShthZgsTZZUojTLJKmbi2tnuLpdamXDWhvpund24qKiruYEbRi8c6EwJYVQmjpoW9AvRRd",
  "key21": "3gugXbqdoLE3EGgqcsSBGniuwnXKmUBKGnYJwqnkJ7fqQRaXQ8wZCfVCwK7tWKkRXB5GqeTZ8LNX52pi5GVbp2gA",
  "key22": "4oECgL94CWMViiuAsAH3sCvw2hYx9oHpLovXHt5dU8ePEpL8wFPuebNQseSaaUXzLno5dUXrhcz8WcYWtu3vNEuh",
  "key23": "3HW4gUnMYE63eQgTijzrXKjv2MSeigtDcNRoAibRPq1FmtiKN4gG8mFLcLnUvWj7ztrd9bfmTxW6BzmHcmsfscoV",
  "key24": "25XSpmEo5MW87YNE3PUby8ccyUHPWH68k36CRiUF8bbhAg1V8DwQDHS1778B5p1gmKv4PEXk49HskFaHt9Cm3GEA"
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
