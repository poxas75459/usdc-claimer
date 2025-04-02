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
    "2MfR5aeg4DsuRMHC4qPWLDXMXTiWTNqoKpWUrepvcc3SqePrWHQkbtsMBM5gto4kpADK8B1pdM1GygZGcsQC2nnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wh529HDpBEEw3mmHjdyAYDkEab1SWn2Sk7PtLVrJdpAVgytmHsG4fbfgDFzvxJskwTCVWmZjE6b7ffLZiSwYFzk",
  "key1": "5Q2pP4fKrwJ46xsbszkaMBF7XBshvy3x1qejyZx3iiiwKzuPPvNFfo87Nd79WTMqShukSdrMYg44xB9rBMs3uxm6",
  "key2": "5U3KtsTHYKA3YxhouNoUcDGrkujhRWPzi4nZavkZkB7NEfsWSAKeZ4QTPzon3Qk4SAyHCL7hHoa5MWN8MNWrweDQ",
  "key3": "5i4bceUoijPDRPBC4K4ssyCNANyySRiYs6sW62PibVnWbrmh2nBWeCTNTNfFbrZxkrMGQoigsmPvjNqAPAW1JGTZ",
  "key4": "31965xGQRy8QVUWz2KvG6nhpchhKeZebckxiDgEpJgGzFWrN6jri6uUnkEMcHDne8GBJirqdu3oZFK8Y1r126Ajs",
  "key5": "eL6XGeKHPvp9TiXbcWXQQ3Z12EvQnedN3HPRfeLXWea7vdzsHwvgz1ws2pLy9L1xsX763ciTML833t67Hq2ADG2",
  "key6": "amdhfmQtVAUxq9UVFnTsgYMyLkJ953GoZFAMgtz4z2RAW59WdTCmbkx3U6ZMr9FPi6ccg3npiQ6XeyE8kDtYJZr",
  "key7": "5vr5QGBPzber6fLroRNEFqZBXZBWykgxdEhi6MsxanW8mDMLdAqwfZqLfgFBECNTDkqV6mAQETkzaRoJGdiE5XMy",
  "key8": "35eKtwhAVk8XF7d1A1SswVQ2gzEXMiUqUAbQ1H6W8pBFCRTQoM1nmDqX2fdPZ93RckXQw3Fydg45rW24ipWGRtA3",
  "key9": "61UZ8B76x2caN7Z2662LzfUMXa4YpVuHg92AmyHPchnYPDuu43AcTe2Du5E3WDuQUbNwUC3WxAr6Wa3azNqftqEJ",
  "key10": "PZNfYa6VeLBBsVwhSpnvq4vJDsQ5GaayENpoksn56BwoSiWjef9kye8XrZ9m57Dw6JRcWBE8dr4qEdtoyzw1KGE",
  "key11": "4wjqeHQ7TMyfbdMBDnje2SuQpAacrxTKA6DtJ18bDEup9jZjKx1bS5XWAoU1CYQkVevEyS3Xx1B9Q57qBSPvbC38",
  "key12": "5oj4QM62uemy92J2BioVNMrWgYXQNbUSBEPAdbte4b78JWxsx9H9oMtJVGVeDaw5s6C6NpokNFDdRRWNLCGeYEBj",
  "key13": "5fHjBtPPK1QSeX4f8813MWedFsuGN3qoBhR79B5XfbFUXBnsGu2ZCRMySKL9xNcnkumup89jQj3qmTCAdxKJJCLT",
  "key14": "kUqeBcnLMayj7qUwsiRnJ6aZgxWGaD3DdQXvpKS4qQFfaiARcPpHyPGpXMXz7vmkPdh1pHCZanp2C3tALm6UoNf",
  "key15": "2bnTXkPeDX1JdbUbjGjxyLoFFnyfKuBcVKYpc6vHbdgm93rFdQbt2DPhKw1pTCSgBEqkq4paWkwDqgG7fFgv5kLV",
  "key16": "2Tnd4j6G7tePNrkN6684o5TRg4tUquLz72trzkMkvr2CRR1LKSiEeFSY5YW2od1Eu5Bq3F11ySUf9jnPdCPLX1XK",
  "key17": "zARTBCYwY4JeSffRXtsnbLfcfKjBDgqUHWBE2sLQ1G2txifxmL6ZkZiomEWimQDDkLnE1RJjLs3wpJxcho4wCcf",
  "key18": "4oLetBM2aorX7dq1yVfXxmQ6HXhMxPwhsmCxMMkEuAo5dB85mWvitHRAJXZQWnEv9wFcqyfLMw3zv2pi6m6Cs1bE",
  "key19": "4cWV9UFU9pfcWw3J8Wq6e9g7bgbrsqMReBJC1f9i7CgbedrNdpjVEtUuvS9dtij5i7UUj158eX7jnAExhchLZubz",
  "key20": "2WKBVw3nEre7gjaTGLBcnq7CYnSwsb6vmswm496C86g5q83MZ1qJ6phw1CJ8DvMGn7YJnrm2Qg9RsTCNDrecoxpp",
  "key21": "5mPYLtw17j6TTup2WwpZ3po48f7im14iCVF4BDkPUT4M3fnWCW3oUj622pmvPagUeEa43jyDbU88381Z6CRQv4zF",
  "key22": "4qWoCb1o1Xj7eA3NCs36rpApuSvr696aUnvn4fykaALnM15ozptPHqmL8G5wZCFZvk66gV5jeC1vxWLfPkGaeNWt",
  "key23": "3JVuaqsqhwKfKAVUn7e7KVscBZkMBYsBWAuHiAvKiZm95ErFhiGVenEbMjqGiDRLqdXadEq169MrWSQrBak8ARTj",
  "key24": "4jJVubmco2FWJ6unt79bv7mTgV4QMZFefPB8wrWqeio7ypvUNKrwPynosEVWfBAZ1zKXwF6nxFDrWkFrGQjGp8AW",
  "key25": "4ikQLvtWWxgG19skFifsmZ9vsC2zq3gz67KntGdo78TvuchCCGxfr2U6p2N2LBE5EWMQHiQcf2jBC7mKdYfT4qJM",
  "key26": "5JxpDimL8Ga2hBfSTn7vnANpk8WQHy9Pm2eEK1rUHnevCLXD5JE4mqALuJyaR6NQj9ExM6fnFxhcMhz5LmhFiZGD"
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
