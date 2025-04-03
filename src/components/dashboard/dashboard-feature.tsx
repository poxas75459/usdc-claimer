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
    "36VPiBum6QzjNQRRBBDQjbVKsN8aWeED8WscU3LwidR4BAnChxEj5jB5bcJeKtpWq8gKSzSY4xioV8CPhHdTQns1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apD3v7WM5TtMPPTnePNLGwy7FXMcS6iGjSbCMDkRg2hN3EPRBDaBSSgYc8y5QExqUa8wudnHcdu1ZNxt2ov5KYp",
  "key1": "2J8gxYtiijy6FX29gNYttVBtkXffNpjbC8KQpVVAiFdaXGFnRNSheYQEneLXeVYRdUuq2fuSRun64fLYrbH6EcNM",
  "key2": "2NhTxhrRXvKQvZmWQbjGL5bGeWndeDDgknTr5snXRozbpMoBwDBq6WCMZTgttEUggqkYkFFSPhosGRN9KW7S9uCV",
  "key3": "3KhSJp8NnrLP4WJkDZxX4yuM6enNpf5nvfCa3HBkuNRbeX65jPXGxPWTN69huA6RMCSjs9vXphGVqD1gfmAyN3gq",
  "key4": "34BtxHdHYsFjyTSZeRCMcjRCUTNHpfeBN6Dz7hzKi1JEgto1gCanS4KFoEJWLHZaK6Zj2RzjWcBYD1HULiJGFmYL",
  "key5": "KLzBEp6jHTH3EYfktRUqT9Ym9DL1ap9KeJiNK7uxDaUHAgsPPsKB3tP1Q237nw7t6tfHPPnLaSnhtrNEpiGknoY",
  "key6": "SS2WUNXqXHdcRZp1SpuuNjNq8UXqEYpvB1UzZUNLs4rEdvchLX1EGcFKwzZx2AmPwL4aVX2YTMSxZ21ubxRVeTt",
  "key7": "5AaNjYni5acPtwWxMUJdykbHvoBFXPeEs7P3W9LUZm8FogiYDsNuSTLJRqMf6XAuvF1ZCu8kSTzSRSXg2SvXCu6R",
  "key8": "28QtLwRjW4g838E4pqVsi3tiAWzsrrawejUJENL9TDaXsaarXTo6yHsYRuF1UoxCHs9Wab7P77dHbUKa13E7yz72",
  "key9": "2B7KKTchG4aKLy6ySrMKcjxBpZ3aifRPqqmAhEVu3ZDLcixWGaFoStVXTxV2pUA7BPRkR6R5rPdX43hN2BgMeLY2",
  "key10": "EoUaM95HCaxiyKmFCauft2LiW5ece4ZvAKxaWk96x4NXHnCgUDA3Dc8gfaUMaaqeAUGhBCxAWEeHeLunvGumREN",
  "key11": "2oFAqBnybgh5AxzY3rJqDwDMySZwZbtkdN8CCzGiHsVTvYY68Q1A8rwx65625Y5fypEw5gQSmpW64jVTtq2CAXSE",
  "key12": "2eD6k4GMCvjGEhbk3cYvEg8Lr47NbcFTNk9DtgzE8sb5WdTupak7BQX6TCCYfb6aAB8SbvXiUVZFDMmEtb8D8iiR",
  "key13": "35tb6jex4tSta8LjnhceVtLBm2NvbS5zmhQRqJJj7hUnqb24bKFc4KM9xFHyUEkkcAYmxfptgfDAm5jpyAArh3S9",
  "key14": "2VV4ijf4ggpch1L3GMPUuUX2gV9rZCRQAqwMbgcBa5VEc8vbevnLDFKGi37b712j4ZesQhex9aRskd8si8Trc2Ne",
  "key15": "23TMgcSok88QqdtWXMYMqtsbmnM174Ywzx22uAm6iuw7MceftNdFnjhVkvP8yN78QqA9k6NdZyCU9SQymAujEKhX",
  "key16": "4cy4d57jrx8NcaXg1BGDbEz4jMND517GxFDgY1BXv39vZXSxTssGo3oks4HWZQpSvSJ4MsgydXQPWr9L3fpZHrUP",
  "key17": "2Mg8N4DMF66cpWkEwxdw48371L9QEtKaBbtN5hhcung8Jqn2HsMw4XLdSt7bg3GjMumUDKVQaVUd7MWvSrE6grrZ",
  "key18": "5M3yH4pT8JL3P78Nk1yt4kqSCAy53gq5NVaAVBWJDHxiCfMUh5yxHyeJ1fvnKzQFkM6TAkphcAQVSYXqp2sjW5bZ",
  "key19": "czZc6G9Gg5MFUAE4rhfXsGjdB4KbCWYMWAthC14y92G2ALDsp2QthJYZbgbxpyaA4TNeojZpCm4MhWWnSNKrQej",
  "key20": "4dZujFfGusqN6w3FViFWCPiy9yFc6Zfoht9sUtHT5oV2wE48PB5JcmMVzppFuSEWhv8RAPrc2bFvPMPHYfKHyyka",
  "key21": "3PiXTowrjJZ7e7H2H3v1iwbbdEKggB34GmJEPDKmwSK9PN8dy1U7UoC1xtk2AGjW5C1QDqQkE5mwBNgNYwesU6k4",
  "key22": "5RgfWHMGMu6D235fw2SfiFKgyX1W9PVvwGaKS1onDCUh2evX8ncsYNbhAaJFg5hXwvzRDnUZViZji4hEFvrcPexp",
  "key23": "5wh2iLHo7wzWSH3WVjFQawzP7cgY6JLvtEjRLHcuDs6Ba3uDwfE6eyrdPDyVkc8ESVMX6q4QvyTPdAdpPHJYGhZg",
  "key24": "498c89nPDbokJngxvj6Vmfc9xmDpqZT2W5bddtEXodMyeqvo5pAt4M42cNQkwXevq73cqjXN3Pc6v9aq2yo7yjNi",
  "key25": "664qH2qbpCKJTJbYZ3JkXjCtZ5PLDGMTTXmBy579mMGKybS2P5wXoeEZZYFW9tB1qUxTNmoSmxofEboHjvMZ16KR",
  "key26": "4s6DNg8WnbY9SiKmefbAXJCcnwutJbmDfbq4kgLdBvNtumtwbN7JN2auDFwrTehVohf2WpMdqpAKaKzNe177q9CT",
  "key27": "4Tv3gFkSpP9Sdpg4cVJAjTsvoFxjP39LGHe5QHUkpbRmupJY5RmPcCAf4azLMHmGfPfsZ6G4RdEEAYvgXW891cAT"
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
