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
    "3QGyeJu1otfzmHmMjRLnVq3ipoUmZo46vTBNpPzBvJUFk6WwzAz2EeF58VeBRk4ihUs4UKeGunTEPdrgykAv3TX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kahj6nS5pPNefvp5xs29XbgiaYesbeUDeqM5vBQ2zxTFKkzAC2cz1in4z8rNmxMDauo4q2B1qFjGJHeCqtp8EVz",
  "key1": "5G9gxkqm9ZQQvL6bkeQRqaTEsYuhsQcx778Tc8h3SGwmBPe3nww6ScXxvBnD2L58emKzc6zD5Uz9Bc2kHvuqWNgB",
  "key2": "2eGq764cjQucXAr8mWDtANNFFXK815zGn6uy4sCiJi1TrieMzcuNcqB3RbFRbUnMs5gghBLGW8mQYN286DBcuKbj",
  "key3": "5RBZsUjXu8KsP8jDrXuVFPW9GbiTsRqFPHxoTsaScwLvatY1vDRxdt5MRut9DyfHMDtCEgejqQoCKH74JCRtGGK1",
  "key4": "5j4rwzTMR7vGX3p1hRen7VsL4L19UihpQcKrBAwEXwkFGFhtmtVsutJHTQ6DgfC9cAYgV67jj5Fdja1p2b6cz8dQ",
  "key5": "4ZNCBeLi5XkWPiiaqjbHPLiWzfcBnFfiHALosEKg5fGNabhEz8jaXP5S1KijD5cPsn6Le1Qi7ShkTWfvU3ELrrjt",
  "key6": "sTxDzj4f3wTKsWXoF3BW7sCEHPKHMmvW376zqzvD7QL3q19SoTFNxLpWtZfjJaUoJotXvSqFXhPzTcMYs3KtEzd",
  "key7": "3EUig7BJU9jRs8MxPDnTaYsgooyD6uN2kKUJpCZDnDXNW1noWGXcoBCN83kBDtugBGaJcwTmKv1WNRPySmv1zuub",
  "key8": "bL3DetqUAo2sWqAJYVcz9UmxonAxVNvLHt3Q7F6jpYpPvxS1rz5HnjoPSHxDg6SMtGqmfsNoVLkbMEhS4pQqdQx",
  "key9": "Axxgsjz3Z6CLThFdznL9WgQN9jB4cvrM7mrAUt94NTF12KHNRyt8L9jU4hGSRg3v3jAvVJC8p8wsiM4CFvNFrSe",
  "key10": "KKudX9Fwjr6MioZY3qppgz7Ke5wy1NHeiTBStvNVovFCP3cDRJ11EpuACbV3qEvJWWgoMJgJV7HE7Bmq5QfYiJg",
  "key11": "3qh2bXQnBn7pGamntDQo8E4oxvh1mjpBv5X7cQpCn1xRSXAAPJm3XmTwip8sFhce6BzT3CzSEXJm9Fwq8MRQVhtz",
  "key12": "5hJwrzKp6YU8thkeGeKTiK9KzEKjCSwqGQDhmqq8KW75dzw36t4ZyHbPDeBWkUY6Qn33uBazVGeddz3aLaQG1ZPm",
  "key13": "5jrMaYXsZQooH7nymydBBxGr81rqErxxLwLgvEw6AKZkTrMwE4MjNfLuBVvooZZqhk3qdw7X6eBQMB1NyNKVtRro",
  "key14": "44F7M4i3Jv12CWViNHTzVfHycx8sthnKJnL1NheMhbctwyPdHW5SbRdvRyCEgfa7HYsx67MErnEn7HioGVpQgfxu",
  "key15": "xXtAJPCREPtk3pZf1uR1gZ3uKNRX7vZH93Te8P8cwLCYdABuFb2Q2oLoM4iCFfnqPQVD8eZdrCupbpx48TRv8D7",
  "key16": "4HaHDHpbgZA3NfHcranG7zc9q6T6LeDBvuGrULCpQxGJyj5WKj2poAY2KUGSxmbV1NGTwJ3rZJAUXQzux16FB3VG",
  "key17": "5Ru4WbRgsb3eK3NaT4FUcdtmKZ8wpvqHAqrQJUgeW1tDnH119hWYoV7eTUrcpKbr1DzVZDxuFnwyFggkMrjx7oju",
  "key18": "4R44Sq6YvApnhSVtNo6S4nFGKdMrMc854RJKsphum6PpziwdqNusJBh6eeR8BNo1PUAbMqomSg1gZNbB62cEKJZJ",
  "key19": "4LrPJuHWMwfYDS1JMrLNyVicLj5v4QFdSyZavGpbtCUKPUKG9E2kgi7sKNxJPzUHLhcMcykz7Zf32jgxbQVKrMe8",
  "key20": "5ks9gjg6M27cqfBKbGBrjAdKoWrRstUb4FR5zUQpNqsYohTwZ3gLycqYfygfY3zrqaxMCwiFKLPDbaQqV4a1RYdv",
  "key21": "2wxVNb7VnKaVbm1f6xJCrTZ9powrYqZZGPNr38L5LS4iBXZqr9i8bkfBMeXPQmpbLKH2Z9t7FfLfosGMGkmENNgr",
  "key22": "49brDKfbjVqPCS3WbdrWCfCRvtzNmP5N5Cg6FExrRRtJvKBhB3as8FxZk6N8stgpuJYtxrrFza7V16n2RYYtoWE4",
  "key23": "BDBZzmhjNjkzi5tZMYPXYmTQH18L39ntM5dMG1vbUjxZZByggYNjEhJYfYr2KQLP2oKWJkU3W8wFseJ8v5c5uvj",
  "key24": "2BFmS7kaH5a9siDBXn2LXiUwzC8FBpEg1XEYz524fM7FfBxD7dHmRifpCTD22AXWmbjGdXeEZnPUgqRzn8QZ3Q1r",
  "key25": "NpjcPpQvBk9jwTVTPm7KGcD2rNjG9Wo2DRgfgSNbXaua7zdEo9akDon7drndJ9bJ3cKN3UK1AqksBN6tokZykeK",
  "key26": "2QJ8z4K5TmKmjhmusfq9hwTLQV1ERTXYHdQenUpuQsF8YeqS4C8vU5NjN76ycvmPEE4AR16oYp97iq2AuN8wPYbq",
  "key27": "3Z6Q8EXfpqdokkAwHUVAij9JE255UtLJgzqe6J3YKPhneLxYRPWKWG3bcxtqbH7Y7irN1pc3uHCR4MvRqmgA5szo",
  "key28": "2hDpQuJdpUfogdsj51286MRiSkA6qWsKJZjvjj9eQuDayiz1NeHzV6eyQvzzq9p9XPj52Cr344dDREkVaRm8EqEK",
  "key29": "4oEYXdkfMhoyyXDXaqiy9yXxw5VUxMgZk8Q5adE76tCtYrnUCaNoqug6RSHoW1Q5wWJbvcixQKbBagH7zKGLQZaK",
  "key30": "3Dd8Bi5AjhJck5TMhUM7GMwbXBdqtDpcqAQxf69onkQnNc914ieFVokmvhmeRSQ7HmpgmvUD4qDRNLwANWZpZHHb",
  "key31": "4HziiDeWWUhfbBQDAvusJKvyscFvsuZBg8yscEVtWWY9bVtkyQND9Lut2kYyn69k5yWnkCY6Y5fjzUYEP1oeydWL"
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
