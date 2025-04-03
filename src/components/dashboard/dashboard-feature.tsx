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
    "4Bzds2DmSuMgt2XGjQbuXkjdpKXJAcZiqg47B4wrwePtNsuxk9Xe9wqGDR9pzs9L8g7cwo3xxqszE2MCaHYERJku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxbcoVmhCehCx8EgjnioSDm2FbW8Khqx4VAXZ2BKG4nURWGXff65VLusLUPeM8JGg1RzVxCx4cwYPqdJAV5GYGb",
  "key1": "2mvYaPNAhUJcwMQrwZQUR9v71JrNvnJtXH6pudwS4bso6E96cDJeTe7iEqBY36E4pttdeayHKvb1T26LoxpTaNcS",
  "key2": "3WbTfRjL45vFfXxk9uy99jtfWm5s9F7pcR4tCnxFFDfV6rvnXK9XKSewNMc6sEVgwjKuXZur4bnc6o5zMVkBAsWK",
  "key3": "46uB2N51CuL99W4oMfc9phshv1kTovG1ZkFCMT2xubhZQyRgwNfAZx986tVwcRTxfToRBtrmt89MdEFnW7SMk5CD",
  "key4": "4zUUhwtHRUYbwK4iRMYHQMw7J3eBinxpM2jFFDWvsKeFSTHF9tyDDuA8e3qjcdHhJ8nDb2aU8jr1zoJCtErkjj9W",
  "key5": "5hipQpetpctPV1jXE2nZHBGSwmTr4h1SWAUR6H2CE5nQa94P5BpRxxcToQs3oe2mf5yYBgYyTuBBbovP9cthtAZP",
  "key6": "5p7VitFreaPHGJTxVW4zN3N53j3PgrxKf1Y3nGvdQp1adkFsFitiXFR9hsaZ5VW9H9fjaEk2By54yfqiNq3TGEh2",
  "key7": "33kLdkWbKTsqMybMFeShc9BiXPfZKZGAc9jssRCMm52hvZukgFqaTSou5XFdmA1gCwVSbGCa1sUe1XTfZFfGXxKb",
  "key8": "3rzXRH3BUUMvwAcv2CMaJ38CxWPCTZaXhwkLzk9nG6dkq9AeVsWgwQ3f4rZhhT1T7rxbYkySdvUbevxSenjYEo4B",
  "key9": "Wp3Zu3njQLJELPhcqk4AA1xdgjmgdTzLvMYay2f5z7MBuVab8sDiGTkMyiAN9z9ixRGUzKFYsrcYsNQMFZSxfUb",
  "key10": "2wiZxyCCkjHo7ngnAD8eRMqce4uxjnsEFV5iqU5Vz4fy84ZcE7c9PYUoLnteWc5FwjQfHzpDnSoSp5J5ECjrx5rd",
  "key11": "4PR39N168oxom5FhN8JQe4N5TvhmwiYXS4RDe2mWnPuE2CNGDDtNK1ZFuTqS7NKgnT8eGFCTuEfU2rZFs9BA8bmr",
  "key12": "eic8weFErGfSgDqND3ksnACddZ5tFpwwWgQZTYY9aEYNvEKGLRU975w91ytFVVmz54mYS2bzNiiE3zftjfX5EAC",
  "key13": "25Zs1voeqeSFmZWue3aNFBg6NK5cbPCZQhZyqb6ooRt6EEoRaXTFQcTHLTfoTqULBojaYrZEhC4oqnepfnsBt2HJ",
  "key14": "3Ac5vobF1VQzX8SvopzLGcevZeVwJLUVKwYo9HYExUzuksRPXraGwEvR62B8kbgr9jZG9bVbj5C649JJBmcg47zw",
  "key15": "5bmSKWaR3oxN72ecQb7Cr8AttqfC7yi72DUaw7uKkDqb2wcoW4NeW8NBx1FoHJKXzM754oNR7VSVh8UZKkdBL11n",
  "key16": "3SVG8vXGGVaJTFYN8MecMrtALAA62aoa7KuVVBVLwQFFzXvtVRg9fiFBnoBtdRnyaiZeDWLQ69DZxhfCwKvQC74P",
  "key17": "5LVjyLYLHWRnFzKZRioFBdzGpDw9HWstB3qU3SZAS3AgPS74pHbvtz5zwsbK8uXYqAWMKkY2aKMvSLt7NhTHG9fy",
  "key18": "3M6D2ZhWMQhwBppZsainPtiZovC8ZZ6KdCm6gYCmFgTygVYarmpDnXM4Qqe5yr7DY8U6159qaB9oEJGhkhz9qsa4",
  "key19": "3MoKuMFh8t4p4A3uAbLz57k4ueiojvZqRtVtZi9WMAmeaE5GqU6yA35miKP5DmsW8anm8UdsPwPTCq6CQGyA27YQ",
  "key20": "4HccMEZ7Epqtq83i5yRap3FKD2mhR1x51ro2rua3BSjR6x6y37GpAyQLHaNAvEvUTHLucwcuD4a3cPbFA6yFAaui",
  "key21": "2XTXpGHMapnfvP8HvXZ7bmbgbna8ei1XBaAeA3YVMQqamfpSVGFcRGCgZWhp2ih5RdtMkSeLKCrrqRqAVc9hnuvR",
  "key22": "4yyq5SoguFmqWrFU3w1p9tDf9f2whhU5XcRF2fUJGVQ9az5K1pzXe6onHXbGeyoC8EkQiMS3JTTyDWSpguCe2G3C",
  "key23": "2jAbxz9ikTGEQa32uv56nXN6ebHXNx6bjPiKYsBahW4PwTALUfg2iVkqPaFUnxX6j5mFvAfgguYgwnNVvk77d2us",
  "key24": "5TPAfPzjsMkd453tENckYnRvJzxiV7BmXAJeRaQ5uZv6EDuXRthFR88GSZ2jgyzhSKqigsBFVk47XGA7xCeBbB7H",
  "key25": "kxJ2LffzdanoZJSRtdWq9eU7d5NNocZxScWEuSYz5LYVZo2HxQgmEooGJhg3XmpA8gu2NZW2ejWcScNfNz4f4E5"
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
