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
    "3K8pTD6PFuabhmN8v8wcW3Jgk9WRjPu9k7xSf2LwVyFzuURhasNeoLCbF1VVKnHLRMuoAdkNtWSjomvTxjKBKWjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1ir5Ti8ZMG7r8jYxGxW12DtqB19pPRZ6dVWtZcWwfCdkC9wqU8N1GHU76TRLioFPiApmbL1NQDybSZ8MPwWEUc",
  "key1": "5BvQCPVYLJukAsE1ZK7MEbvQCix4Rb4kZ7mcRpXCsz82hFedeSScdtuFvorYoCsxmdHSBZ4qohew6KJFxFSvBBby",
  "key2": "8UrsZgid9oLRD164rPDY8KaMWBoj2ynDnkhzV1mzoFhqgGLRvSmdnUU6eszHBoV3wt56zaeKZVTVZrNqR6MW77V",
  "key3": "5MoxYTFMeQVE7PDQgCEUciNNtC598M8euNCbJ3TdntMYtm8WxiMdTt2CLUpPsEVqoG1VQ8iqjwj5uNg616oybUZQ",
  "key4": "33hVgN1MiLZVmws6RkM7LjDaS95U3gwVTyTYVSynwJ12fvV8DJZYBYyAWLamju7PdTcWsgtNFmGvZxUCAgkAoHHb",
  "key5": "qvvPcZBe5GwYdJwTK7Zmmem2cE7AwD6hZNYNn8DSk3p8kL94j1qu9fZmeqx4QAJmx2jHeFWcsgMsHuwyia2FCKV",
  "key6": "2eeDRZwghD2aPH6crXG9qCn1DzJJnSdY6oSfffEYhJUP95WdsXeAW97wfVV925dgGNSdn7TWBY2UzjiZ4P41jgqS",
  "key7": "4sLtdp7eoeoTfCu41Dq2AqoT3iKvPDveBchp73EwzaBEQ73CGzyRPthMipyHQBEPVdNWJwTLquFgNyykf9d5f2sf",
  "key8": "4PF8vPQGPYFBCuJkFo3PYn7jb3XWoRfPPyMVmos6jiRGGcHZ5JUTvMT9bgiKXh2bdi3JKqRpe2PFCFmrm4p1FbJj",
  "key9": "qZjxL9TmugUZAqkk5ARCPpwFdz2TVcv1zaDSvLw4LGgHVGCuWEoxK1V5B8ZQ9AB3zMU9a2JTA4tvT9ZnBgr8Mnr",
  "key10": "5bV6JEmrzgmQDUYz6mfGWSoAZjhAmFk2kmmfRztJeZk4RAnnqWiEMgrpXohbXHyVq7rp8CVLaFfzYKXHBGHZQ54Z",
  "key11": "PbJ1nvnKcNjiBEPDoCc47vT7cBYpmyGo6N4V3tNZyxVMd2YmZsTmjfD8ZxE7iofHswMFRHEFu56D4preFjNhXcG",
  "key12": "5S7L3HwUdiatTemYBhzyX54kT3nafBvEssswC4oGRhm9bgFsNQ1yH4J8mxYYU6tMJw49dyJvSLbbz6RV8P6SqjwY",
  "key13": "5g5QpDKpSZwKvpd5TYYhjDCJBCwCc1FuWA5bEcsdBkPL6RaprAJpEZBLdNZPZ4p8NytswnbkQf11AhfZ2WbNkDwE",
  "key14": "5GRaSMX3M3CAcnWteCcd5FTaGBJ8CA4PJ9tGmc1CHx8NwmqsuayABi54qAMsECCF1KkiT4STXHfLNEc1RFF58vj2",
  "key15": "4cV4FbGz9Kufq1RxhdBXSwFfJGzgYRULRWYJXDQqomxdMugaQexKrkz66zLKxEFefsJ4Ac32VBuSU3e3pc8xHfS7",
  "key16": "4geKkLQ1rCwNM7BNLGauFxYgJNYoP731rPyjBcAQzCGHB8FcbsG5yBNnN8v64vCSzko94quALqmprfs36akHrWzq",
  "key17": "2cC5BQ3TCnGMGXMBRvV9pe84eHr7WtArb3JzXEy5jDjXWWM7Qz9y2g5QB2RxvvYpVADp6euALqczDQTnSPp4rBn4",
  "key18": "3jtCJUqtTLCgHvj9pT2jj5QiT5nuPQtw9jTn8SCu9i9X9zZGUjAmMLUMbzdFLQvpfg93in7srFTP9Jx1JH9xH9Y1",
  "key19": "27wzFFxjN8mtU68xEwqpFtPBuxWzCSiJcVQHjs6zhhUmrvKPgVTN6mj3a5ixDivccEAg5rcaJ6hZjBRLVjFYxp15",
  "key20": "5VoKNrcfetpcCghV9aXmLg7kZZCRwGGUhip1XF6C9SwB9xTPFhjLLiqDHH4mTdn6y4cTFH3noD9NTTQQunFfNLMe",
  "key21": "2JerY1fsQU54jMTbx4umapwQRgHiTdhwnW6bfRady5wyX1gHjsuJrquC15fi35neXvARuJzkgvwVe5XzBNAVyNAo",
  "key22": "4Lei8DkqZJEute7xH22o66yDstkh6AHbqVnTnbruiT4NoaYaWqZJCs4ipaH8sxcT8UHeWawJuoyafzR7iVkouHdH",
  "key23": "2Kds5265LHZ9hwfDUSGZVhn3JEFN9if8wZn5o4F3h9M1YaVNEc5iZKBc7YGwgGXaAwqJpBr5EEzNNofFRs89FwR6",
  "key24": "4Hq7zTPLmiWKnNc8Q9hMR71xihvXup38JGhv5hETPQagmrEC3eXiHLyNUMbv9Zcinygwf7A3A8zRFV96ZVxJr1Ze",
  "key25": "2gLKbMmq1de37Y5eUWg8Q8SKTQiy4D6LMPNC6eKFBnY72v5MwY4BxtpFvket6GGBoQP2XrHVAS4xpxBbMWXDJoBE",
  "key26": "4heAuY5wqo9NEHh1E9XUrRQTXxz8kqYMujY87j98rn4PFm4VDxNTxd4bcrktgMK5yctdj2RBN6CWK9ConhTz8MMm",
  "key27": "4Sza3pSm1wW3m7PqpUdFyhkCJFq387Q76AN6BnKrc4gFhgqWbhH1qF1Y6xcL4kEAtvBWNamxVVCqoqCq87bV5qBh",
  "key28": "2ddPNJ8GSM2GK8ST6f8VqEaHooYPJB4FsRKjD2esEhAQpH6NVF1sVMDm5SLpjmi7M4Yg5vEUG6WHiJGCXsU9eqph",
  "key29": "3RpZQ14js41nhoDWheorDhrXSKHrNerdyoiEf3gp9h9BCSvamSXSqofujpK7xzXoR1mDqFv2FAzttNAFQHfUt5HL",
  "key30": "2GBYQSyKCMrv3KB7bTwwiaw2dHZyUy3s3Lfy4ykfkttLa3ETocuRUaVrZpc5iFt2CwJGCrrjJVxXBhG2Zuq94fQN",
  "key31": "B8tn4uqbPw4BXEf6AT8ifCnvveiNTBUzgE5viNCNBH7ia3cA9We4dWM5qcNoKL214DyGZaRt9FDeqMxMizfh8Vx",
  "key32": "4u9iwD1VvsqvK2fHxCCATZQsAtpajnzjZ6FifE9K5DpLnbEsvXKAw4UYqWTiz3pPpyG64wvvJB6QjxHyTjZSjVVX",
  "key33": "4jDHBCSjCWsupFFYpVJyAdbDNs4ufWHdUonj6KFaSEv55tQs7neS1gkqSjWFthegqLv8jgcGdDVEDfCXVPWtKMxn",
  "key34": "dtEGw7EMMazT4PzWoZgUyRtqXPLts4VAHDxWFxAA8FSoFT4BuSqp467jpSoE5ctCFsGqVWQL17FGid7J5fcM1SJ",
  "key35": "2WDQLYibbBQubxt8xpBhFaQFfbXP9DNqzKQa4R9tJZWpgABmZYhGXev6W8L78PmuJsV5RBAeceEAeTkf33hjrKG7",
  "key36": "42r8czKCijacerg3zesoKLpoym5HbB1cXxzqc3yeoGwd7dxjtNy8UJ6c6tT4PnbcatTUNtK6X3RgSB45Q5subzCe"
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
