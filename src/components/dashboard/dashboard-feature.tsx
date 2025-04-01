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
    "cySVzcf44Xhe7JnT9oqdfaddo39kFT7msZQcjCr2UbbfanhP6xwu9CNX3V4j1ZFMQhyGPNd3JuwioBmyYVnnfh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pedFm3ut5ftM8RNQg3vfL5sbdqYrHPHwaKVrhrNX9C3QUt7HQwEgckMX6VEgzVtdSwB4P71b9ojps5b2az2bDa9",
  "key1": "3bnsc9XkJm24eDNAX1p4ULHvvheh99gD6D5tTmWWRCxsphqUBxPm2KEJvPRepfFdKNNh8exPHMeiCMkp4egDZ444",
  "key2": "4vK6iuCWKyQAox7TPtr95AiQyuSDwUXxDXLAQPhads9gs1RAexqbm2wUh7REN4dnXa2vNhNYzbDHaPeTjzi6L9jr",
  "key3": "2GwvsJP62hN3bge5gv9Q1Y5erg7ZfBFEwRMcspQVhQkizjQ8TrKXkFpPbn4oK9EeF1gG7cNdKGTk4surLfg5Gwfz",
  "key4": "kSFto9h1QX2d8vpVTAF6vqdB2BKfzbhiZtnXNuRpTiLNvxrfLEq4v1HaPTrTsuiedFrMRemWbHNDmVFczPS2UhW",
  "key5": "2EVk15epuu2rzKCgNQboQZzevQEpKA9fRQrxGnFrswTE7YAKYZb5hZoZuj6YfdB4EZcRwL8zdnXDxjUvpqrfyGMJ",
  "key6": "2b1T5FpUnEYXbEN2NzR1gAEqh2bzEngUbRoPPkGgE34C8UrPcRgGmHYkezFxwSvu6x8xKXZyXVGF9t1ime8iTRFm",
  "key7": "3Hadnpfs1Eqey2j93eVqn1hkMy69CnqoFnGjRbb4em5NimQusSwVPZX9FrBG9Jd3eXCxCHfAjCfYLj8vcxe1Q2ez",
  "key8": "oYWajFiJAFJUeQcPwxtdjRZx2JZRg249WMZz7y3z5PjiHjtRu1nxEKZnsFfL39TwbzDQMi84RNRfAnPVW3Tuonz",
  "key9": "5jyJ6sGU2EpXv8NJXxst4U3C64r4SSZq8h4RKaphuKcMjTF9WXr1GqaMfA9Kb5VdsQfbRERNauZNq6U3mmzjQbm4",
  "key10": "3uMAt928HHQNYsEWvmUkj1fa9uKYtdCEyL1kjuQ61VnrSW8X3j4yJqwkGhtRVcd39r54GLTATUfBXppYV8DuGzQH",
  "key11": "3YUqDeUuq2D9Ci7ZUUEVyJWo2DFEyUriApt2tqHWKHXSfcmMa6MxebCPzY1SsBEAaLLdtb5sDZbRYyLH69RH8j4h",
  "key12": "4eVz38XBiJkuMmZnoppDQZ7cZqikdKrnALPmSQeKCGHyZABoci6cgZYwFgDyhLE6ZSvHqw3gE82FJyVcBiJmJXSW",
  "key13": "39iw6HsVQimUbpu1HQCEY34ervupEgsoipAjwNyy7P988RHeNk7w79Q6Ud6kiYADJxyS2wA998iG51djH2LRMQKK",
  "key14": "4KpXmiGwjHpyodbfCPwf2YdZaxMqtVEecehk9xsmdgzSfzt37Aut98GdY7ktxDCzXpKBYLKycBQsqsvUnssadrMW",
  "key15": "5pEcqVSavE9cr43ZWoiaQqkEmNq1pczbi3R9yTbCginkqptC6A2JTy8LNSXGQkxU7CFk9y927ZbUx5XRszFJi5HU",
  "key16": "5c5eXz8wKK4FZ57wPkW2oEVphghp9numP4tArHs9QgZRTsS8Ty6gMdQxEGvCTFZLKXnDn3XBspsJxN5TjwWTz7ER",
  "key17": "STnoNF3NkWPeq6e3cA9Ev8tHVMb2NBAuD9EWaL9RsB3AmKecdkgSbhgABCPaot4XtqYbNXJDCc8F7c9qoeryQXR",
  "key18": "wgxLsRFven1GviriMpW5tNLCZ3AaX5GtkDL2fgtZzEYH4zLSsgwYnpRWXrWLKbv3pQiMrHh4VYLDaPjYBxaYkJC",
  "key19": "cKK4zEUfZbri6EVRToks5LSF91PQxZL7ci7QZV6Fh2YH8RcQ8sKVM92ESpyEbeB583bgMhosNnbiz66aRpRW5Fz",
  "key20": "29GBM6UeWxyVBDqoZPSLqGhvkHjpag7pMjPixiRzhHRrDU9sq6YPv4X5uYjqLUPdpQigAV5J1jrcjPfyvJB5gGsC",
  "key21": "5Lkm23mtysHqEX5krJ3RRfW28ewWBeD32XLD3fUzMBcwXtmegRNkrceR5ShoTVi1PCDha6xvQcZbk9odRbbWvzHS",
  "key22": "Mf1Uq1aSVQ48bwHZ7jmRiLJNyXQD9St8ozvRn2hzWMfWceY6bSbQKJZp61jSmS2r2d3yDsfb88GxQvrDr5kB4tN",
  "key23": "P26FC11maN4moUUSUowjZWrQeP1YQVy7fwhqqB1asbwTn3qkf2zb3U2QBUPaHBRBCpYYCtxkUWCFFYBDaJQMPve",
  "key24": "5on1t8wba7QonoCnNhagsF1vkjHjC2MakuPYRfgjmn8TuYaUJhA5yV7WkbDUJsoDC8RSKALmdELqCDodx68znJbE"
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
