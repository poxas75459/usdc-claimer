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
    "3a34L1ThHoLnCgFV1hL5SaRb1nB4LGJT8uW3PuPmnLfP2hNbJ9UY5Bu2rPy1wzW71D5VDnA51E2cKvtE821X5Q9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpktvcPBG94ETpdTPCSRNzdiFEvYv1VXXspVH9vbT8mqgHf4ANBBbFvx4TpW7QoCFn48euFrM9nsPoSoCcZUSot",
  "key1": "2jUKD6q8iphMZY4GczdQERpmV9muFTRfM86HaPk4LjCbSG3pZG9RLJo9GB84TrcVpAQ1VAWyp6sRQpgvGdNBmyow",
  "key2": "3VVLJDtcoNxvergkKhyQhkPFKnbGdv5QP3qPgomhm7faMmzN1YB6A1c7go8RYxohWMJFNmS21wB4Wt3D3YwGtEcQ",
  "key3": "29houWoUo6xqJhDrNnPMdSjzz3pGf1ryDMCoxDJmED83EArpgP28DqtMmxskL4DMApZ93XjcyMv3c21ok1fJQaPN",
  "key4": "PESWxPcuhK2fSvHhAv1v2zyuAaE1wgs6n63bpVdkQxPtidjT3FDeek9iFNbALTdUQvGweLWU6NHX2GwhHf5FyaY",
  "key5": "3K5MBhYihEQyKpxFoh2qA6qodPTLsb2ZD7kXHwSU5LkEQELxqNdmPbAqoJFm3mxS6cYZtPUSpNN1sXUfYRDgHwWT",
  "key6": "38w1tHqDNBW2rnNmhKpHGdmFhUNeZCvbn6rLxgEdEe8tpiPmF3bAJgGDi9onpmoorQ8j9XGsp6cXFBUseQLrAUKD",
  "key7": "3XoKq5gdx41epVqKJ6rZyc6FuVFjuB4jzw3a6ZsYhxZtwdXggAsuHXsknAhPeS7T4Y8Cu7kLZTEJ8wLvcNyTU93L",
  "key8": "e2EChNGmtrUhTPCqjDsYZ2LHB6Egx5RE13r4roQbQprpvj1Edc3Ck6t5ecWTg6SyLagVp48ykSJ2GhAVJYFWukh",
  "key9": "42K1NDxWLHVT2M9jeTU2SjYimg7RsMkwyhLL2gmabppHVNDBVnu3TsmyLcWNoxehVsZupMgaA6AiPNNu9LAVr8QW",
  "key10": "2S3LUvjjXdWv8ms91YphxGqp7Cz5sF7YepzNamSSeKo7FN4iZKSiGgoSxiiaAjAs8DeW9T471ZbmmXiSuLhe2e7b",
  "key11": "4HP2LBNxiJLff59sUQaFEy9aUFUSAHzSbNCDWxxQ1gtWRDUYjHoETUmiho84ETGX3U3bRBUu9kQRHbAdiaRvL9Kr",
  "key12": "4CQAmjag2TP3bKBRSUfzuYeQzx6VfXcjroC7B4dZhVkGHKDxvC2Vb7c8M4z6ppYtUsZHqshYRN3XVZjkAyaPszUB",
  "key13": "2Y5mHB81ZydPafghc8yiLWKrgszFuFsLFFRfsfd51E2aWEpXKWp94Lzi3yuLF4hiCvAjwWjKaEqLaZyMBs4LtGho",
  "key14": "3epJP3VZ1j2SGttiV9LWuz6jVCyYaLctfNyfe6Reg4xnBqRfGpZS2pYgwSg8UStoiCVFgwkJ73awUSafZS8oAwEU",
  "key15": "ThMF2JQ3R4GQvsVrcpayMrgV1ZQiHe2noY3rj2mtgUZAUkmwdRckFj9TvtHN61KnVSa2TQfCmrzt6Fbyt5KsQFN",
  "key16": "4krGdVATejNxtuoD1nJpvrzAutReDY9Ami8M3ciFtZVyUj8B13tuZSv19ioyoRRLjJfNMNCkAKZUHiAt2XHXR5fj",
  "key17": "2NNSqr5x6DUpTAsQFP3ZDk9CiYDdot4ykDTAcYMcGEdTJS8dws151gUfRHi8jxQR5cxSPBdLP8WksSUperveCwuP",
  "key18": "5xhJrXhC8PPci1SkpphUpS7TH82enTjqpXAXEAKxvvQck96gTeVh7FeiVzqfX1RSYc95femqkKjSuVFwK7voHRv3",
  "key19": "5NpfRVpRXZYJZowRmKVZAwm1wiEdnXDNujZjsyuuUH14ovqRHj17gYFwKbC8NCWXW9EgyfYs5K23ZSLaPEgYT4z5",
  "key20": "4D142Rni7B6aiMoABdb2VZzcEqvBM5VRXS92BmU2RagWzGeVk85amUgMXPtMtU2Q1Ly1wzTho8kf7CzvYSZRrBLg",
  "key21": "5G7V3WBkuMzKKqTyqxN4ahEuCJ5fFUXPof578EfeNAxvvS18UcWHsgj9FZoe14cDvSJDarTA1oSJPiEDE6cTJAf5",
  "key22": "4Poo1QVStrZDDsn1F9FwZqPBviQivLxZEwbYT43EZyhwDUkNTCA9az9HnRYvxVrzcDzicEQK8oAqZNqXRr6CCjqQ",
  "key23": "5redUEm6KMUb3PngXu9xww9K5sXhnedFX9WWX6D6tMNjtWmTfgp2NDhbG8TKG17hn2pukpyMHPC8RsSZXNFWaX5g",
  "key24": "26eDVxrvygkYvxDPBa8AVUZSEz68sJ7HvhNm5NZ6SZ7e2wPpv3M45RRU4WQaFqhRbCXbAiCbHbCrPh4JJY9aopY2",
  "key25": "cwZ7QHnMujtpmusAEtFTXe4byEXHNLarYsbbRiDKzjoLFjcX4J2EXvdQ364JW2jzWtU26fMbFxawdLwzyoS2sNw",
  "key26": "3THUVufaLnEGdZHDDHGHWhmebpS3tsrc6UuX2ALdgh9fjV9aE1ya8t9J7X3EtynX7jiqAJa4Hvzk53QQAq44gh1e",
  "key27": "4sBmhayhzZ5P4Dn8hGcapyZFJhPPKEZJuUWSuL6N5ekfY9bRucuGDhtc2fzv38kt74KPunwA62QzVAXZuQPEEoCD",
  "key28": "YfVAfoaMZQ59TeHAs995AFnBFWFBo4Fp6SoVboGmZEioCbKiK8Bz8snXcBivgkBZkywNCD6azgZeSKLRT4SDHTh",
  "key29": "2Bg8RXNw2Jc3BgTHxUPwnjXiSKrujqj9MjEEPv8AC3GtX1qcchrjHzvFAZtCnKEZokoNemtL3yLYcP5K6KpRmczX",
  "key30": "4G1D7T3cvuoGo7b4KmgcX6YZ8P7QVPbGS77cy92VEEtqidxFQyBpdUkNghVmyZ5EHGWhwL9wFLb2hcjXHKZaQPhC",
  "key31": "xsCgRfXwP8KQwGbF88bzsVZFKY88FQZjnV515E1rAe6t4rcwk4kRAtVU22BcA3fWWexNo3QXTCGoi4RsuSppBgx"
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
