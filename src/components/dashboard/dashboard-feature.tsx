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
    "5dnLJSeaxPzQpYt9Bxsv4w3nnRzMozyuuxsqV3fN2g8t2Tb1sknWSptxfJj1BQ7yQpwqqgwjtq4LWPKQ5EM47jKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39c5d2h5ZS6iShLNuKQWoD7q9DRGJGEFn755otqsQP7yWUrTEnTKgFavKKN2pJgoY57uLmoeKRACf8aPNEmSwECM",
  "key1": "3Vq4WVweL4BxtNM4Zp9XAorDWEXRbBvh4wgHk6ZNbppwcaRksafqoo3vMEHtcvkJC9VNE8BWhPHULBMvJ7GSmte3",
  "key2": "2jnrRjS2YsdHGQVN8indRoqshmAEgRQooktuqWBkXdSuBRSjbcydSLmgHCpeNS9edZUMKesd6Rib5CfWSr6bBhGC",
  "key3": "2Jqqfps1tbPUNtaYJCArSLgAVNBa5scmKGMM5dNLo3RniEECnp8WNxrCy3wtUduzbhQXKcmuEAHS9kmm5BAVyMr3",
  "key4": "2U6N99Ekmv9fDFXsKPmnC4mPXQgJ4xG2EC4XmvL1MowFSj5Zfm1eJs4NsQm4pN2seh1fCnqFWC4Ts6bRkbx9qsNj",
  "key5": "4CZYdTkQfu784iTSrf7e2QtMYgEwEDJqX9GxALNh6VEWr5Uy3R9dn71GJpBiJmFoFVQw4fW1yZ9bis1WXwe2MgQy",
  "key6": "3kknCumj97DLqCoSjTwHzigT2mQQ49eaPpHUTeSineqGhPmox4wzwpKBzNxg924L4v6zAYWV2WBvnaz2jXbA1EUf",
  "key7": "2brz4Mjnwxm85xnTQvE8685GJo8cNLoQwR2SehxUzXnz3wGdzfSwE7vrUkrKe7LiVFTfVtdEj1nXd4D9STAin5Zh",
  "key8": "MQk1rnkWd1zgicKHKsshhsEba1rxuxrmfs5ofcWxjf1xyTGJmr6LHnyqSry7QfsbzaVmdNEz62nDLzMPCBZNLPJ",
  "key9": "2bM8WPMEEhtCDmWYfRZpPPy4XfE1wR2UXFK5rARtLKKGNNhXrB8npz3Pt1s9MebZjYz26GjsErpQYRtkKKWfQCNh",
  "key10": "3JbfEr1yyx3L8vJ7NghPnrB6kq6C97SMZmpDtdyZZXNRr9aTdwy5Aqfeu2Rg1eTBA8FGc5NRSyiWjUeV1Yac4ehV",
  "key11": "2Az4xHWyTxNUX5r8fdSyEfFHAuoYjg5gmTUwHcPGsBcmyTwaJ92fvx7grb6PrMNzyoPFanvhyNepVwXmrBXtZyGr",
  "key12": "4aG5d4v8QRtPqseiyERaHybZnzmMuaZktccSZrmHiGypKRE94LFAa9WQL8wpxRfimW4EHwqYHBkqw6XrpihAfjSr",
  "key13": "2iLJzYwcWCEWcx54HKTZDpQB7n1nbfaAgdo9FJHzU2sRPFwmeyvUGqs4bPJLBLPCpUkv3JF9Fb1E6Sooqq2oCta4",
  "key14": "RFhUdpFBWeYDDs4315BNaGU5wxjYEQAhA4fz6eBJ2vNPpiUUC6x6BZuZrgNdfxEeCoMswK1DNGQnn7BpbPSR5Q4",
  "key15": "4DK72DNWG5ZW1is5coDL1WqCW7U14Nwh5SodHcff976S6vhdXgwfu358an6WrjDobFwL3W8roumFa7rHw4ppZvHR",
  "key16": "5QzFd3owNr6FMyt3iNS8nf64DJAcBzoRgkuZ2PgfAWZTJvJ8A4yjKTVksQVwSc9NPbLff9QT5EH27tf5egrp6QAA",
  "key17": "4FAasmp5ASumC9xb7tHC22VynpCjQsajLFeWY9dZNVqx727KDgPBFxDMEaqCvaK9DGHxQA5Wjoy4m7Y6DUa3zw7s",
  "key18": "5N66awzXtjo1fHXCAwvyLzXBgkrAzbDgsAUaPrMwgTFbF4B1TcW23FnZQMQiWgydCFBMijnJ7QKh1G3pAkH8eZ1S",
  "key19": "48YfueJitwtbNxbuJJUoSpdTEUgQu5UeRVtWMzPScTMLisKBpwVsjfBuhrVUA5LUFnwgV3dZ8N2WR1x9nFDEuGoY",
  "key20": "4XJNmDA4PxdoEyYVmZHxtjP9DC3VZrntSH8F9o8kRGSbVrgenxxNrt2z1odcXSjAgDaqFZPhtf8WSa4JBWcGeMfV",
  "key21": "5aZxEC1VYGgSi2T8TbjiWSpDyF77Ln4h9DDWRYpFHhynArz88UHAumGR9SoB1Eq1U5Js1HZvfn6SoNhERGVBvD8m",
  "key22": "rx1uF4gtBwZksJWn3oqnJD1PHfGNQ3DC56SsbGdyTH12gZHhH3Jd6dyZRhKfa32sqiEvBtGtcoUBeFPQjGHhVCi",
  "key23": "2GPW1ATdkMBdWpLQdGpFseL76nVwotEUfhhsru3V36EH7oBzzf5EWWmrFLQ9r79j5bBbjM4yFdhn7R2RbFdn6RJB",
  "key24": "4X6apTBhNUze2zMDwnSdXx7WvsTph9veMxnKKAKkEeQNqRFs9DYVyZwBMYTyTwtNCakDs3tZ6FAkuEqS5J8Mi6BK",
  "key25": "5GsVfE22rvmMmTKUDBxQ78UwqxcMXFENEyCuki4C69bCafHJ9wM4Ewmpfx8rPrCDVGNjwaj9LZHgKGBspEWkNX4j",
  "key26": "p8vbj86coN67wTEnKdqUtYqMJBTGztsfBa6GutzaqUfK4KVeEdJDnqvtzFvkfDDMFmasvR11aTFpf1iWnWmh2PQ"
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
