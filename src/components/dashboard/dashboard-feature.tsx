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
    "3iSQpSCEzQMXHvMCC5QCRACQG7ZxvGDAxSrbsZgJGqzix2vDKUEfDFrXXooVMWrzp3oEi4i9HuuE7ch8FgXUnsst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E73qKfPCN7tPpY6eQ6U8jBmMbomL5UA7KdSVqetHWW9aSWdy61mkRuRhungU1jd4njFzg2rVvuwC8JRx8nrywmw",
  "key1": "32WpP9T5KcrRapaptX4Uxn856YtwZeHyLWXNL7c8WsyhbZChX7x9Nin2NjjBi4uSqAcWt4yE6pM86VWW8boN31ne",
  "key2": "66UPw9BY9wMa2Mg8gojL8z8B5fDiRXUw6psLDup3icUA73WCxqTm4kMVRcx1Pcffuc9fqvJ1q79bsCWv1zy9c7CD",
  "key3": "415L2QQmtfHiTNdRJGGRmKCpZZGeM18Pma3XSgN5V14LmbJbA4tdQtjonahwbYyK16sDEwfRtUgYBxjvVijYfbof",
  "key4": "43tpM8QjTw56ZkrSGAMwaiJEVSjTUhvWri8WM4KzKHPKVHP5BaNYHaJs8EHQ89XegVrv4LCdsQzqVvqPi6AP1zEj",
  "key5": "33urs9ngVKnizd3jxwihh2DcAdSSPGdQmWzeXqqAqMCwiXmBHwJXWGU6AGxL8u1VinbSRwY5QAjeoXRq1tFSXZuY",
  "key6": "5uqZTgEVYNJrhxrNSHoq8hseSexTVv3YRbbHdm26gft5V3rBLaxejjbEUWJPq2L1o3ecWkVJu7UcrF14nc95e5LW",
  "key7": "4fV5bNcHhvqkhDta7YfjiYUoeHH3kpFYds9BZDpa5usvaVLjpm5fkzgoUQ4317j9yDXBHP1kQ8CtzQCWmvgsmY1Y",
  "key8": "2NoMuGQ1a4SRZN6gtg5GWQkPeZedpmhwdu4z1xYQq3MUgioDhf1UTfEb2D5ehq2BERA8UxsBm8ybij85XqC9ETnq",
  "key9": "35ZuDeeF5EkvC8mpmzmKvq4dfpgquj7RJegtTGmfABSg6YKQEQ5SEoA7TABWPMu4L6WRLfoWSuyjP4fgk3zLTxvZ",
  "key10": "nnQG4d8ftqSx6DjHfC9CXrgRWCrQqcvY3toV9Vc83PBXLicEDmG5ctq34eFkWoBPJUZotjDXbNnBFyEtUyvxPDY",
  "key11": "3i4YBbGJukBBtTcKeBf9h7exZA4SXcii9R7HCxRt7RXxcExmFd9MLmoab1vp6ZtAU3R3Vh1vgx2jo46n6FQYPwsJ",
  "key12": "4b9nJJktBwuvuCWLPLWVhsUg8N4oDo4ZUgzwB2BJhMwLvQ3YrnP5s1S8rLbUb5A8dbiVGrmTLcY7Yro8LgRVASta",
  "key13": "nnGgBByVJyt5HKZgiznxbUjH837qX6DKwg6akUmmnSWsEg3cfFmUYqNHfUfhvcXxt1S8TYH6z35M1iRN2f985tZ",
  "key14": "45Z7WuSx78g7mgkbYzqm2MvwRUaSpXdGSGZK5AkKhX3cr7dwJ3yM8bNx3gfhAbMviyozi6VP6tejGYNysT4bxQU7",
  "key15": "34LgyTVqh9uhjRUpxMnzZeQcQFa7E4y3DfRjvHCWZoy39fVFP7NWfXv6RePG6g5Znc1shRmXL3iReB3DYdqwj7G6",
  "key16": "JJ23ha5HGDinuoXkVCfvSgkovDFQpr6ofyUoHgNkFDdwNduauZ2PcRQWTEwewUpcoryJkd2WbNhfvLDF7UJNXxx",
  "key17": "54emQtKsFkEkpRVUJbM3uhrZe6Zj6BygWm1288WbMe3a6cAbktF2E2HHa8dLi4Zn7UqaggaXtBNCRdSF92rcDAoS",
  "key18": "2xZuTZexAsrEXmKBWWcSBkF33tapnsmuZh1sK4sVFpF6TFcDiMEATmjHwjQKnYEAsTjkrnpqc7xFSDDhgrSM9Q6c",
  "key19": "44ZZXSRfAEEnHavjnfswDU6kvceqmJbaVgiVY5a5ejr1m9TKjspPjCDvTuxvFphC6GRESKsxrk4ChecbGvVaNUXe",
  "key20": "4GGwLknZkGesxyp6CQMWy8GdDJiyeKMKBRLpCmDpcajcy1k5odxNGaJv8SVUex7RVqtyrjcsG5xi4tFFGoN1ceFr",
  "key21": "CJodSbXN75AZ3m7cUPbGqe7AD2Mj95KSrY1cva9etCity2YMxxsm9eEz9AVa8ryKntCcS2hjVXtJhBoRZzdvkLD",
  "key22": "4qrWqkdWwo7BABDaqES1VvV1yM3RhBE3ZZprgHQUkgDyJ3LJEg6miqM8NEcf7K4eJtN4fxb3enxbyY6z19QxMgJd",
  "key23": "5hYTr14dqMpN44rvZbp3GW3h5eaayKtf8kFCYUk5ox1Ubz9sHhGr2osMfmAeouh4CMNq4EvZkhxQ53EeBsjP8DHv",
  "key24": "Xn2nuNihAx7tSPhjk41uNkrq45isb6QfkkETjDeipM7r8eKZjqdobXFvGfrHVJAsUQ2XRRmQnVnUwgcZuvVwu2f",
  "key25": "33zd1XXnR7DU89Mqd85rFDeSu3k74Vwzeq9ags1inRMuxDtX9Zr4hSDLWaebxPZWZUWLuA8gBZR8JhMZ9RnKEXUE",
  "key26": "3Czv5hvDEkzJsUWc7FCYR4h7JuySQ4tJEdoNJcqbKgpfVP4EqvLsQyzkkMoX7YXQZbrpof3k9TZizMJpN7c73GsY"
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
