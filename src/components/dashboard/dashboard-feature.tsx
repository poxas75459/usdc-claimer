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
    "5dnwFFAxSh4bGbadYDDKs9ALtVzp2G1pnR79Bd6Km1LQuXbBUns9C2jJ9BozpzYFuMfPr2HC8q4CscVPkKaBTxSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bs6dcPkw5YcG3y5skEmd8TGQuFkb7poC361a44EyAvR4CA6nr9JmBCwS6KmBFsZA4N2SvV2D2AWsCnn4hk5EjmY",
  "key1": "5h9w8jhCEjRFBL5EbioPK54XcWxQmA5cabF1ehntd3SNpUNMCxYwtmtweRvGvcvCGBu8wAHHjdsPVuPxpGZiJLbH",
  "key2": "Bn7EshnJ4Gqu8a7ZyFY1jr9XAayM8A8hz1AApm126fMFFxcYm6TQCw73hCsZqJv6WAD7uo4pLq4KjVdTsLnzX5u",
  "key3": "47Pi7omiXRxU2AKM7ycucxsoCnZWWAGokR8Z7UK18T2YBDfhJTud93PZRMfiLUjqrPrsAsLPA8q9wXqcSmBcnLnz",
  "key4": "4Pzmcq3SUQAn1Jj5eAnixZ6wmFU1v298VdhCwC8EfBrt9Jq39FjRCypTC1zA3neHJz4SkX2LPjwEkg1vjaDMxQc6",
  "key5": "WKKFJJfad7BbYrANaqFGfu6HspXjxFrpHqmi4sn6u8jifGBJ5Jb8uALHk9AHD7StPpht7KVBDfjSwy9ZxrcZj97",
  "key6": "2E2nHLrTNfhsQc8TiMHprGUfbpM8KhjM4T6A26Hqr1rUJB7u5Fjhhhe33NeYYgb7GAEusmgjwPhaQRzuDSVnDB34",
  "key7": "5JzeBtEWtDA17DR5zqx3XX7H2nDgV97xysmDTKQBeUpwkxbVNmXiJF7MUphgoSHqDdJcbGawrFwdTAREMer8yRGf",
  "key8": "3eECfMoDBcSFu87JhFiZncp5oENpsDGvULQGG4WcLbAmmjrptyK1G9aV7WKb1mKnmdbBhx4Qbpy7frsbGGAADMX2",
  "key9": "2X2qJ9Mwe2dq9MG3oyuidBGjmHusiKKEtcHT2x6FLDe7eqKiCi7N5hzQ8RzrrUwjUFyK96tNjThMM3CdZ2eTV9xa",
  "key10": "oZY8GF5oqtKPTWSTUWiDZkTDzmtuq5btMvnZqLwsGn2fSEjkGTKwwXx7p5QVHuJZy2iqoBn1KRPzZMszLbiEAQT",
  "key11": "3MZSDZPjznt6EAMdiZE7wNaHRDXFfpTECW2p97n5G4CDagmzf6TmyK6x4Dbnpx494wWzRe6uxH78W8fmhBkhL5ZX",
  "key12": "2Hg7ToNMchBAFVeTzjetaTnY2dSMneyxo1VKQKRMXk7zqLkq3HgDgxsm1qhDDi4jcZpE8uXHJ8QSBdv2N26nytZq",
  "key13": "pe4mCfGwYCDn47c4djhjHG6Pkjo7TL3K8saGCcXUSFbd36aPwNr5kjEf7YrvYdKtiFn8erE1phC9kzcACwvuf9v",
  "key14": "5Z7oACWsqkuv8PSSiGoQhXaZhX9DoF4Gvmx7ekwkhd9RbTM4NDSb8QiaKNH9Y8tNeMQfYZa5gBkkYvdm41QdxgtM",
  "key15": "2Fw6Jx6C6i6HGgtcn2QQvK2BHZrs58iQTeYquKgLK5CS59GmHKH7jU5cm83ZNSvZje7yadzsSm8XX8YjvZ3DjXRP",
  "key16": "23hu4FeAFeZYpDTwNjsvtNQMweagp5wwmTnsq4JoHH4THqCAJSYF8T8mPdQCpgehtDuDBqcQyc4BTBH2uFiTbgc8",
  "key17": "4JGD6SSmEPUQyLFmPKJHM1ZoujNRscQoJvo1FDgev7ZvKDvmmuqMvyWPfPVmJ8YQvwh72CZ7CrkPYbhMX9GKpmgx",
  "key18": "YEMHv8FA3jWUdyEVkAnX6ReGrpPPDk9fYyEKd1x1T7qpa8UpjanH3a63MqX9m32Vsz88SKc3jmsHosnqaSvgXnv",
  "key19": "2fdvX1KwPn91RLSCg3VFRrFxNosRQYeu8LU6ZJXwSYd4iTbb27xnDyhFb9KahUNS7LdLuhyByE4f7rwAH6uD3HyX",
  "key20": "6D6HAkKGz2GVzVCcQxSa9GT9GSLsZZqM9zuUrzuggM6JAT9mZn3TCvmCueKYfz2VuNMhMSMJRHyr1NGbr71q5FM",
  "key21": "4UeiTVL5uYRSiD1hFJj8HYsnx4bBEn9B8Tf1AfvZGHM6GogBmDSUWLrWq4CspMycTXcT5auKgfPZ6xz4mAckFCNU",
  "key22": "BeGZaDaMEjFa5fC17WYWPt2CJAAmG2g11MeWjtUTqrAjVHjCPEMBnKdWqfoTDKEJrN3iqPAgk97MxwqYU3ha7Sr",
  "key23": "5dRE3iGFTLwaUNVXqMUgzaHoe8hA7f4x69RGAWB8ckPJPczeHF2Q7dYWocA5pS2Dcx1dS6mypZG1BN78rSVuNvVj",
  "key24": "446mnA8zjVahDYGBrmKcBZEpCm2DtEfwkMRzw8gguPQfeRN2H7Zsyj5u9WnivBsycNHud4VA1kTjgN5CJ4cPdt2z",
  "key25": "2nt11WcFbCgd7DVL6P7iVoqDN19JJQ7zx4p2wphx9pttCgine9Gnir8VJxA4qP69tdT788nctwXKjLSqXsjcnGJW",
  "key26": "gkoyke4KkX4EWkqNBZTCmnNnq2bPXk1f9foN6ffHa1cK3p5SCMiDzXK8exmJpdy6hMNaGosFn9gJGSda95ypRQd"
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
