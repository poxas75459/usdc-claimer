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
    "2Go25cYDgASnsvdNjv1jhRmKgY1diwRKMF1bZ99pwBYoga4JJBjamZJVM2F5e6XwW5LfnFAH6JTyCrPTyGdxakrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJyGa2evD7bbQWUFinLgq1ksCPFoKyeT9uGEco4f1itxGa7FgnpaXDsFZFoCMW6xn4FZ8A6oQFinwjUzZaUJVAF",
  "key1": "4QUkXf3h5qq9hd4haT3RAoNUwHhJ6TJApK1XmmYKeEK5TzhnoQ6brrtBSJJrSzVYj8DABmQtc7YMH8brtQ8eSSmP",
  "key2": "Z337FrYAo8GbZBQCzzPq3Jf8A2rgLk1YAFSag97kTeEvfwE5rGZZ57iZCRsqEB5FH3NEXQiCkTrdEJBfP9p1qJe",
  "key3": "yQxB1ZDXLYBN5jZrPHXoogzZQudtn6VU1PsQf6vdW3dFXk4XdsreLVkEr8Uh75ukVT5UAJrDrBhYAcxZmi66x3k",
  "key4": "8mtStZCHaKuuNVQE5ZEra54h9mKpJU1qj9HHjBNEUxPVcTgXPyAZnuSJXP1QCSTFMinXMMH87E7Hz1q9knWVRUE",
  "key5": "2Tnc3iBVQJVtzH52GXtxxChM23fRQdSP2xd6FxdL8K9k45WXqD2YLUfpHY4DGSyGbuPove2XEkMNMBNW5BQQhooN",
  "key6": "562bfN9HTwHg63mvHQhaKUQ7ShmZQnT48piyh8NTkT4yjcYtmdFbfNAHVSPB26sDp179XqLX4PwtAVadQPCWVpte",
  "key7": "5RiVKEiNz1xcx95NxWN59czWnb2WKKnCJ5LarCaTtvGf1izHErsDoML1ktVWpKLkxmmYNW9AwEXsHinNRPa3J9kS",
  "key8": "1wUMqoAf4Gw1qMQWRuT48ctpKAB6Jt2jUT1WgVvufyLnCuK1kH6N1gACKmgD1tQWiahaSg7FZXsTaHdogPfp3hc",
  "key9": "T2XyVPRmYhNGMLoLqAGkfNjxyamMYmnFCdBTqAgcPVzK8vzuVA8eqnxxC6LHMQz7ZGEpdJH6q5ThWrWWZAXxLg1",
  "key10": "3Sdtwhh4zTkr1m4yyyC32zvCGavsD8Vk4xe2HHbEt2vx6rKYcfGcXLxdH9hhVJPDdhPEXegiiJUzPnpznL1XP5Jx",
  "key11": "292hup8onDcg7aRmjdizPKdRHoQrmL8RiMJhDjSJv59yp94jg1vJwpsR8eMhnE2NmiVi1SWThjcXnUHQtm58ormt",
  "key12": "58AM2eThJhrD35xr18im7wYidjA5ThHaFsEzQfc8AJYt35KonoMMTbkpseTfxyj7so5orZaXSTQfatUSpnF2mReT",
  "key13": "3R63jmN7hCEGPapQ8CdLLNaroc8bRf1A9GD4zKGiNyD5voLuMMbHcWRtDpHauYdgbiwgkTPUxeZ9X7tVS2DZHPCV",
  "key14": "5aZeDVP2Q2eySTfrQYYdBZKbF3ofm8SjvuJqvEX6baNnxCVR56PSspezknh4E4EWLS2pWS6cVADbZyyDmLBxTvRo",
  "key15": "3Ae5icwF9gzPGqicgPoVwdu2cn5y81Nxha5qaUigsVPXpibJgFoGMBJbkVJigXdkwEJiAMhY67VarVAM3UtNA18Y",
  "key16": "HjQqcFb3cyGn63YWTyPFrf4nc2XbhLRN75F9FBGQMzPFohv3qe4GAoonvdYHq87bFxkCPhwsSUMuCoUjFQoUB6k",
  "key17": "5fgcHPkogfQPs7kDTE2GG5PYcRuzzLfnjEPXwBAkRNFVCoDPbHj33ShqVr4jsg4LfRbCwKNmbm9HJLnzXXrUMSij",
  "key18": "58CZVzjonVZ71ya9CF8nfnmsXBopjrtH8mr4xh39wArr7csHpWZ3HTcmbdak15EhFFgvT68sUExdCvKDZe8gNrz1",
  "key19": "5f7TESjTG4MvY7crDmYXMHorWqshgJDDPu199qDVebxk4hAB7qLFP3VL6eNYsvNj4YsYQDjPEi6SaQkTBZzJvPBH",
  "key20": "3u9WmLS9Vi1cmZSudzKm3EqqohA2i6qN3sFYY7PYsnHF4iPvtcKwF11mj2V1CBj23y22iMag1fwiBhRyRsbQxJXc",
  "key21": "54Mq21fwR4y2sHn1V3K2xskxsXo86pKtgCLqPmSTUbHwy8Ly6JgZ6Tv6Nz7xQcmmavGD7f9Gpcg7u6XpPvVVMxGo",
  "key22": "3nA4iVxWfKwht2zsNSYWXNmqdj2V4cnk2T1MZT5Z7BjDCm2JGuEaRCLhDFPWMUCsmzPsTnK6RxnHe7aD7etYVUhb",
  "key23": "WYnMwW49jUwEdXFhWo46V3Jio85Ae6EH6wxTe3F4WZt1XYQEEYKc6GsuqrfuQjKqQjjdiRkzyyQ8pCXFtuDcNc6",
  "key24": "4SgvMGrq3DnsYkGRYs5bU8dscKvVURXUDRXbn14wKond5F6BKunMXvdhCFow4TzYPqjaZ33AFoNHmowTj3nynALJ",
  "key25": "2ABuCpAScp1BBX2WjQRFMyxtxVmd8vmJtH9PMqtLqt3N4QvGHfTsdaP1pm74Fqw1QqcSpkSFYbCYrRAQ87eqxYzJ",
  "key26": "26samUiongbdhWBHCFKqiAUq3PHcC4AkpkLMStWqZDXKewMnfYEkbxkLXADE1jsbbRPEcrdok9kaUf2X8vqVt8ix",
  "key27": "EbQkh5ozG4R9rmK3NEUUZenqC8V7Z37uXsnAmUUBMogTf7NNcaM25z1JGH4wKnrb9jRn8Pm6AXJn2oXUUg3bbhP",
  "key28": "3mZSZRt8HsjRoSFgXomt1FuyLKZFSuNXitwkWDwEowdPcKNf4rt2JcBneoCuvJtQUWpnUXPStiszzgxcwgs4Vv7h",
  "key29": "5jjL7TLBSSGx2RwpBRvLqD8KVKeibdnirbmYRmxFzZf2cyT1jZJ5oeFoP7vDUnLRqudmYvwbuYMbaQ59rrVme6KC",
  "key30": "2vZeex4gdxvFxmpiENMssDzFpbqujKxjahryvK7w6KkL3NWVvFp1HZptMVPNvViqs7EsLgg9TDfC9kf4WWhmVPZP",
  "key31": "64zGtQWyv3QtokfcxJpTdc6WD33vMBZRoguc1gpZibCtXLZjz9cS7SXHUdh3eU9GyFGEW8dkmFQXe7jfv2bMMaZV",
  "key32": "epLzm4aUffNcSWk76bJSprRyNdZ5bARw8tRHyxbVeNvMJKb4aFUW5FPF3i6Z8uA3gwUaRUYs46Sd16bAo4SsQva"
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
