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
    "3wZgidHzEGTtBiJtaxcHJS65ohtfg2eCs6UQj8BDckvUJLPuABPipotW2g8jzEyPrbaC7u18RVk1haACMd2wtiCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSj7dnNp6XhpYJ7HmGFqw9XefYg6n46SK5HZm1WQ25eeKQSc57zhghjxjfFeZHxPQTAep9rkNHUYRZ7UM1kN2R2",
  "key1": "3kkvyBjesJ1mCwbYeX31xgktf8fcZg9ox2rA8NoPpmterBtFLXL9qH8niYUX8YReeCSqRnV3LRUR9d5RAtnqYQAT",
  "key2": "5ogyp4WsDM7UWsHsyh2Ukdtd9FUcq5gvCzuLPfPCGnY3MQBE9u2YNq9DxDxmbRoN1Ab4J6iNsNWh5Hd2LJ82KoQH",
  "key3": "2x3QWCo3ySGYo7UmGKNb47hSGmXjdixATuxYyBZo5BTqpiEHprt5zsVeYTdebUxERYE7apG199XqFw5vjgk4nuEW",
  "key4": "5FSY2DKw3L3v3hjG5ExQjxDtRAJvoS5L7doHqaPFmrYHVEsVwW9S8NxscjGc3ncULN6MvLD8rXQBqDLxQyys2Tcg",
  "key5": "3pwTA7imkRB6Z897chEGALKMM8K2GzhJorNk13GNLbmsMatSVRnPxvgDbXig9HRSq5JxeQfbofAwLQtXTWFXLjj4",
  "key6": "2APkPQQLVxqPDTbL52foCDJUz7b89Gw81MC4SfcfZbsgVg8rGjDRsbKsgiUzsGsuVEmuuuFsCQZyPP5A2dCCssAi",
  "key7": "66px22ezFWZDaeJdLwF6PkTNG2KDBUWiZTMm133wvedK89pPBomBXwZCqYvEFuknEuDPbP9RbbtqbhnmGr4RQnxb",
  "key8": "KYutmSFoe1U2rbgMeSF7AQHVeeQCfD5b6yfcdnn1rgofCLNcR5mYPDBpNfGgxgqxt1H4XuugJetqgRvdDfFEPKr",
  "key9": "45JcFAsUC4fg19KoPFHmYEb7HSkFpUSZ2CnenTgQYsANsW9F33mV921kxwQWjtQSnd2Diqotjtfb5wqrY4j4Fv4F",
  "key10": "3A6YdzBViTHNSEuWX9FEqXootmGyAamhNmTHRhFhKANp8aJtZNxkPUt6oRA74bMWZviJx9Cn5uXBLYH1Xbzfhqgh",
  "key11": "2Z9pWzdtjgXwnipNoe9jyT9rDrRAuAci5cx1Pos2TLCzmSxShC9a4UfMGhGeA6TQZ7FtwZQ3d9tWSUyWRsQ25qPJ",
  "key12": "53kFy3zTbhW7PiYqd2GHS2zGAP7AuvktPDosBJZJK4Up1Wrogc7sSmz2RShwUA2tVTHFLiaE4pgVrrCcs1S3pHhC",
  "key13": "3nPeXb8hSoz8NbMR17ZFLGWper3wtrvZ3kmhuBFWUWgrHMUJkSyGKPxSNZnzPVqzvDGtMv23qycR6xHCapzUG7aE",
  "key14": "5cBjzjPDEUgwoiuEjZx1muz88Wd8JZMnzHeXFRdtBEKcoN9m41L5F3HiBUCjTUKJrfyaUHiv8QKhw2NmPjLoANqi",
  "key15": "4TV2AYfxSaVVZFGKrESnaVPzj9b9pfDkomBD44TD3oLwNtvX5eUV1Si8N4FoDMnTA44fpNeCWMBT6Aq6oUAehVS8",
  "key16": "3mfMJhZPU6aUN966NHduz8WWQENGZZsa42LZ67BBBKKSiFN5gRuHBUHHN3GT3iStc7A1ANVDUiEWHmJf25TFCtpx",
  "key17": "gxEuzRjxQ128kADVwa9TAM5tn2xG3gCrNgspEBbdWt1YhcAybRnb6iEVELCYQPSbRboySqqXR7J7mCCiokJwGvh",
  "key18": "5erRwZq9aYYZvtkUBC7o9jTLyQF57bZ3P2dRoj65tN8pvBwP4T14D6iHJuJtKzGitVgvvZSaYsfan51kFpSAt3BH",
  "key19": "57xLiZ4meEravxerX23gExRaaHc6KucQ5NdxKFUeihis5Fm5oWo9YtF1cnHKkjeKUKkgQbx2uE9LYFT2GkjA36tA",
  "key20": "4H3FtcC3YcqJjdYXPEWwG5985QTAg1TwsZozvXtVb1nT8prokvF4drLyx5ndEBJ68ZHGWE44a26dPVYME2yjntfn",
  "key21": "ru3wva9pvyeAGKNAp7vXEBs5cjQTNywsemG7P6PUB2zyf2RvsVReY8KLy5cAdLPWVx7ap812qige59Tmnbs6New",
  "key22": "3tohDsSfZXGFoEAxUvJ1Sr5tUYe3GzrCbioDs96uCRqky7k98mjbg2rFNTkCaUpcahYHKvhwaQQ5HEoZheowz21W",
  "key23": "3kS5UkpCgUqCrohmRsXQomA1hFbYnULs3NUK2pKkmryJuY7gykmSFGz8FEnHaoNiLcFFaUbrNs8hVTfq43B4XsuU",
  "key24": "63nCHgf9tgMTJdtoEAnZRedjb7MWJgnaj5WY8Uqs4AUfJ8Msn29KX1r2YADfcWjHiFTZ8AxyrWti7dJVhzGbJzmj",
  "key25": "3p1psH8qgLGaD7TDBeF9FPzVxVTxfjbV21XP2yF3rAdFqndpFQYbrki8mCejQNiXGxaT5fu7mScguHntGE35x9re",
  "key26": "wuTJe2SCJTV3dhgoXfg7XyTrm3cAyfcHm4piLpPL8VdB3fEbA3UNdAuRRgqTWLj6rZpLhmjSCUTYZaTZBF1KKEY"
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
