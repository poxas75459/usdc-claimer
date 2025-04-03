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
    "4RsEMQkFt22LQiC996wHCqgG8uWuyW39SqieMDwezP4efAXgwp3XzZa3vMBv9S9NxYYDbo2MTZMai648ZynBDSsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrSwk3aPRQpo3ufRpNBtpm8XgoVhRFpsMmZjBG7cTZMCvJPf8k87RiYC1TN3iaam2sPWy6yidCxiiTBMEngi3RS",
  "key1": "5y6RFhRUKpN8p5N3rMvNCvSChLB9PBHKzq6QyPBbuZ75HpXF758PAbE3bNXF2Y72ok6yZ9ZRvK6MRLtXzQCSMkbq",
  "key2": "3jPYhHnzfcvzYmVBp9csbpsgP4mbh9tz9uDmSNFKXYU5kdgfuRXpuNUuw2cYjTg9C1qaDJmJLc1BpCysQMcp3FrP",
  "key3": "56GhpHFw2qY6xa9aBwRgPzXX3L5e2QagbJ2QUJgfsUGBaMS6nBNHdejuNRrQwHoEkQTxvzXwuJEtPDTJwq4Rbsj1",
  "key4": "53HUPFxnqk4kmzABDN6HUKAieefBTy3ykpeosbaD4caJXAYWAn2aHnyn8sML2gkkri6QQs5mErSvN95iY7k8b6Mq",
  "key5": "2ashZCzHfTe8A6VkVdxGEMcu6UGDMU4iPpb5fYSTkKAqfsXV39iWXMt5BCfboHXThFaZm5qw1RtZGAbPsNUMKSCP",
  "key6": "2cFasAFo5BVTNoHbLyajTHwKieac6E4KELXLwQRMNzWGbs6gLGrVHfKA5FNbFxnR6qLwNfzQqzerScaXtBR98F8K",
  "key7": "L1wWnDZtCUPKJvbiDyrthBpiL5uDmNg4KV2843yH2zx3n3jGwQRpeMp44spsfZNoWTjWD2XwrM7CSP4XvEfspSP",
  "key8": "39YMJRwnb3WgdKJkCnnKf6BLKFJLESBKQhk3K7qHkA9epbNSL6zxK9xjnrVRDbqLBWGgReo29vx7TAhYYBCzSec3",
  "key9": "stKqBqXRAu1g47DzMDj94siLajYvmiZQGGzewPQE9xMbwnRGqCBbzwJjo5HzLUKNQk6vd1kFP15xKBmpdyzLikL",
  "key10": "2MrhErDB4pmuqQjUZ3LcdBF6zmM96AM951u8bZopsruCAQuozJdPMieaYfazficzCAJ5HaFGbwUeL3RVRyt6VsNn",
  "key11": "4zR4WitzWRVRtesAPAshyfnB16giNzCVeQHAakFpzpvShzk76WkpTtu4BpudtCMDPaXe5rqMxjfs2qnagcMUewEn",
  "key12": "dgnwzpaQaaK8mNEGd4NNMUX2JR2hUagAAAn1aT6BeHGa1kUX34CLRhHy4pwCzWXrmWbx3KdeEQhr79TTpzGTQQN",
  "key13": "5ADD6hS1QLhSX88vun9VE3b1dEhmg1MnWJwh15F8fCE2vSG1ReNAR5mGSqxnS33q4Qcdf1HSDqyCefsN9e5HciBK",
  "key14": "4Ugurhz1nx1LbZjST7UCjRn1SgcrSYkyUHvqK54ofUAuuXFFUivrQrgBnmhSf6vWaJfCYnmT9n6NVBoHm24NJzre",
  "key15": "2fj928u1aw38HLBSENXGUw6vRXh2Vjcuw5LdY8SEWiXKQqhft1saJR1z86NGpywYFZjWqnWiMxN94KLc6CjJ14zi",
  "key16": "3ovotANPxwNmLRd93zuwUJcL3v8U6hGnrLYsKMDJ6sbrpYC7aRYi5zki6VpHQ4NXjHDzz4WyP5hmD29gnR9rQBad",
  "key17": "P9QfLgeFE9gWUZbBUDWXzkwiDCSzCgMssxKVBJc7REESdRZGDwj3FS77mED5npFTe4Xyp4SQc4TXjWxSuanebWU",
  "key18": "2VH29etcNtVyjcaca92QJpuPNJr5B8b3kk5hSL6Jo3a4quwbCuHCsoVRmzd1SygERExswsMH2CZgj2yLYct8CDiB",
  "key19": "2hAiz97sCVdbhjfyrJgtgpJde8QSwpm9tDKDaZefS9i6VvoSUgfJRuDtMpahKL4bK6MReW1h8UFebrnyYipCwedg",
  "key20": "2DbLW14RTopvWHUrL6anDPXrrLC1VN58YjJQfiT8DkuJ7jvdu7EmBYoWNds1zhxp4ibT7iVrUpbNjFFjroisLxvH",
  "key21": "3TVD1VHM1j5xpLc4MNqHsTHQJVSpJ4uJ4xtBFpGABhy6MFSaF5Wt84CmcA9Znh8FhpsajPV6VV6u59bBmd6Q9ejF",
  "key22": "2RtxNd1PSAeLhixKWcJ4jEaTHtvhbcmDBxGpGsYf8mLZ57Xk5katidLaHav7h3S6xMxiDY68nQGioRe1KSDAADk8",
  "key23": "523nxUwhZUXutpwTr5PZCJx2BJU6nJgqusRrp3TLnRKX4MEwGGrwsvUqntFPA6aXzkRxYakHuDspKyUeynLKE2YT",
  "key24": "2Y6XhLDTDKkFJAPV9siYFMLjPMsQehheuyY9NJbYH2tdnQSKfngW4sgFk6f5mpvLNVoTkoj3qdchu6ha4GZdvmqL",
  "key25": "3xf9i6MNuNHhEW4T59Zq9B5q1AdTFBYuzrsJ7g9sBwGzEUkXRScpSGN4nfvMiSkesKHFcS3GaQTK17GuWmQgSEUr",
  "key26": "P4KZGCLqzKuRX1CDKZbbKbRQnw2mhoPMXRB9jx9CGHgUKXpnCADpfvKyrjScFaBae5c7dCtgAWhGaWmp74esrGS",
  "key27": "5tsyTqnHDpFwDwb4WsQXEffWxXYqEBtnbn3dXXhRpBfboSsJ4c29WAAMjnRBXHV9DWqGA9cxuZLpmHZCJTm5ATrA",
  "key28": "2MctGonG5WVcNMfuMHCBHxqaWhHMFmC6whPG16idEZ4YroBv4UW6Qh4WG4VoecCg2Y89bzeNPr7Awp4V92tVJLU5",
  "key29": "3gpWeWhQLZnDkL6RDy5W6anHYJPAzTBqPQZkb7UyF92B9jnqnbyHDmi6ovUi22SYYS2gM9vfGyfUQzjTbnKa671L",
  "key30": "59tZyW86kgefaKgczHaPr7PYo5nUtafvBXWHUY1Wqhbe6SfkJYTH6pEGmbCtUnZrYccviEbwjNg5XY6HZwZypsZ1",
  "key31": "45mmVGHEEfKT8QvnULuYvNUh51n5oVFhWUhSfnqKQG8bSQkaMrDXb1gG2u5macweRG84Y5v8HR5gbtbh5LBqytGx"
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
