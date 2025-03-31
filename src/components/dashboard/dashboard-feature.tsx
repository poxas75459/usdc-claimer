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
    "AuzZZLJmKwDz3ALp422cYUWHBMS4dEZ9qireCgn4KXFK9LmRoGt51oN4fS6yp7V4ic6Q6LVXsAvWsmJVWNgVjCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugykdNEZ967HmGmHdW5Uh1ghCSV3Sj8tGvC8RuLKcmCBtD2Y3gxRXJ7RJRsntwk7F6GPVMzPFQEdjwDPkdHCryV",
  "key1": "2r62kFhX26RJ7gJKvjfNZQNm2SL4JeM2CPhxEWNQ7S59svXavt62pas63qnGt5vfzuNEuJ1eTvZDX3yt4eLM3noj",
  "key2": "FEj76RcDbXpaQzeBnGocPU2AtbMr6yZVYCxTAuFwPC2UtNMqgWpiShD1LUX9oeDvMHscmgYeL9DGdCzKJCzhPJM",
  "key3": "4mXxKUXtMAYJoKFZsP7cT5RAgizd9njEaiuZjvVf6SDvAM9ftcGQnW3TGTMWzQ8TDk7W3ZTr5r974jhm31hWVS9G",
  "key4": "2M6U3LYqFAgZHwvSGFWh1DxoGxa2eh8AaqPbvFz1epYB2ErXN8Ea8s4cZUm6meAMGtEgRYuq3em4SeZqFjevnbfB",
  "key5": "3hcxejZ5ZQvWPJjkwZ4oM3VEZw586YK6hCFfaiQtDf8q2oUVBfSpTTqo72q9DHsAV4K5WrwrMstVDWjW3eE19ptw",
  "key6": "24SkeWFfiWrSZ1j9UPtGQUDJcZrzW8msBBgxdbuzPAfLSpoUc4QTGbYZfK7ecuReqjzKeBU3K8Mjre4Jo1AdqKb9",
  "key7": "QDSEgzc51inE7uRkNJggNQcn4xosKq56i1p2uLq7UPW2Yq2BcMGCiP4CEHVbK55yWBCy8QSbejA4nBCPeqfTj7t",
  "key8": "5vVuPZ4FqHGgckXPVCaiUmcUYGPcj64z2rxY6iMrjUmcFRX9hKxEMAwGFpaUVGVHuD3tjRb9Nrcmw5P5SVFTiy84",
  "key9": "39x4HtHPdiA5yZNWMVJobimVyMamSVsCatHnuotahYwQuyT6s6SX2HfBi7JuL8oYVHGdpTVwnqBdiCGt4BymZd1H",
  "key10": "5VB7MDk7rmzGQgqqeNro82Nia7WU6whDkDqdbQaejzHSkBRJUpAZuMEWKMwDmy7Ums6xiABVT49D3Y2ZvFfNR1bF",
  "key11": "2TZwM1P39XJ5KnGHiX2RhUxzMHADxXFaQAr5CnkxYfVFcsTVCUHx3gkNzJw7uZapRaE348oZfbeYm82iHVX3bVWY",
  "key12": "2Dzbh6U7wZHivqHEeDZGe5eDXWKyKogMWFpyYpGDrTk2ZQErjVfqugRSGK9vTBZBkR4mamKavSAhRzTpx9qZ9Mnn",
  "key13": "2TovYPGy5ufjagc3CCfac1SdxsPJdQZeLayskUHWAZQqeB1LDCB5hWUz8vFtAxuBvRaGNCThHWU44UeLe1Uh8k8C",
  "key14": "67NJ5E1GaeX6SuepuSECvXpXtHHhUs8Zczb5eo5XwRJp41krYKsBPSDMSrRtPsprxxjmLxZ5ZD5fNz2xgkKWpK5t",
  "key15": "5kFQqUq1bEPfrkVVNMx8yEwAVoHNmDf5xEaJjX3yKQBPNVZhBMcCLLC6mu5kYXtYbFWys8LKhujYuMwz53Zk2L4k",
  "key16": "4JceWvUua2BpRyaMXrZ7Ged2XzP18LQvGVPdGjyBEpUiWBzowiC5PZQpSgEz5dP2DNYSp3YBoRcWLxHtFFTUfny5",
  "key17": "5Pf3XDwTkt3p8qvmVRrS15o32qr199WW2EV97yk4TwG5HKNNvf26hWs1F35kJHtXrUTcoHTEGSeoo8XXiy1GzJ3Y",
  "key18": "3KMaAjoLHqQaEYZsTNiJq3JXpJq4kkiUFRxvU6XdHzHC8GUsbj9B66i3WRCQQCT76Es6nzBabKrD5XYYnDLLgdEX",
  "key19": "4ynyJ67miKNyXi5fvTHsU2qYozG1yKZsF9P9BxjEGJzjKYggTS8DCHbvJPbh15CesY7hwnJXfFZsujNKJjzFHpgE",
  "key20": "4yhvG93ArfHVWgPwAh24RWeCcHxYCUnJD3HD7c4xCaE3GBdjiQjp4CV8uoy3dijhv5boTE594QdShMsbFJtjpKhw",
  "key21": "4VSaDPpVrZFrFz6csZdikSqQkXaFY4x8L9NcmRhWa2pNms3xWZxJEY2a1HH4ARZ9L8pqReMaPjHJzhu322FHC6j9",
  "key22": "2B3fUwS9pwzHYDQrc9a1HUts6aEEcf7pyG8t2kwbXyj2Xr5gnhZVn2xympCq9Srr7FYbaBrpfuc474wqh39yvPBX",
  "key23": "5h8uFq4kHf45HFEht42r1xdCnxuxcEds6Z6hD2fk1RRW5ybURMCXYi9iuQHhDHPv2ezskpx6nPRpxvhyoxUXy68T",
  "key24": "4KH4hC8MKwJ3VhpY6kLVUGwHmimyM5ytUfdCAzGATEnDSZENCKTp94nmznBydC5bNKjpoZo6vsHvWGGNkFEcsicp",
  "key25": "2amqVwUZ7PjSxXrEBizC1wDYidtbWctQeu6NkSRrniF1CqkZJmJto1jgTvPsCoAtr5P4ZMunanEa49Cu4iGtoBdF",
  "key26": "wyQA3xi8VU9miZPBeiCqVJPd1WKiWKRptYcvn8eY5f8Ni9XT6D1g3k5nCHKHvXT8MNCmovKnRPCJPai7AK4xWwc",
  "key27": "55U7ymA13ZGBP3ptXQmuaXT83DvqW7hWgieHfmF6HhTw7ioz1eL69jYptrgBYfW17sXdzkBMs5S5dhXkXhUUpKJQ",
  "key28": "3HnSCPD3RZnAoMoVK9dTKbZ43NZgVU8Vg8xS7EKYNikUEYBdDyfQ2megaru13Jt6DWvzkxnyQk57WAJjCZ8jMsuw",
  "key29": "2V2j8suxV9qusUzU7HLQfVaAxYEVa5nUmbpz2fPyM4zqzXnSTsGwfuYoyPue5fzGPGmPiB54mSfuBBUGBPWbgQT6"
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
