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
    "4gePaDjcux3tYTKfpW79Bohu46RQktBqHV3cNMPonekGHcJpHYGo378R42PMtiB3ifCzN6exoMDPVXPXKKpvML81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqYsVbbBLgpn1emrtod5asdK9LtdDtwz85neV66wAAZeSQ3myWA259pydJnfMSzhxYymrdDrSs3ps9QXSYopjqE",
  "key1": "5YWEkQNX3hHqRhGrvxQYzYr3NfYFRSo5Fgo8mipfT2AbrYm3r4mieoWHGQomn4HGwcw79qJ1hSDs1oUDjLpRoRmP",
  "key2": "2QNtmU7cize3gAP1soBqsgChPh58awCs5EzvfREa4dzEijuncUxsdt8WXkLBXpzHuVmG5rzybzbPcCX8MEdNMEHj",
  "key3": "3fFzj53NXvqGRCX6c1z5n7vb8YbfKZkrLHeLY2CLWv28w2bN4Az5WDDbphppMvBVDEeEZ9vr7J5Nt4JdbtTcoU5c",
  "key4": "35XAGvHwvArL5uLkVZ9bPqBaybGGbSBHmTnmrgXzfuX91JCun47z7jXRFXpydaK1KBQa8ocJNEeF4XEuBhXC6CBM",
  "key5": "5G7kJK5wob33KxDDRdy6xtwdyzQAyEigY6Jjs4RDpT1xM3ZYsnbsis31qVfs5jU53ZHrEAnbNYsHSE4TLLsrZYFi",
  "key6": "55KFaqU4TqmZocanS2sU4zC2Uqfn4bVLNKkgZrqCuHcj4TeF7US8YpQybjsUAoYuAPkbwrS1YMKoQ7te8te6M2vA",
  "key7": "2453mdHcPLivgVwuQtUgtxZ8Wu1AuLd4bYBHH8ny9KFxG46jmETdc1XkPHa1tbV8iGqTjjKbMG5cC42S5LXg8cwY",
  "key8": "2k7u1SkCVUAszDzZg4J5CXDUd1VroWFKrVCtFD2PCpnqeYdKJyhV7riAnWQgRJqZ4RkFmC8oTUJTkizjUtS27UZt",
  "key9": "3mCuBTeBFSvomfvw7nZGPpyjFBJkM6nrf6j2t1AmkGizLLrwgDdzkmvdweBj363caoQ89ji6ByGdrtAo7FpL97dU",
  "key10": "3o4hRNEdVkAa9u4dcdTWkHfheyC3FGwgfR5NpoPu5rtMedjw2Qnkg4BJGPyVwWHk4vj6wSc1fF5PFxEHTT6CDEfQ",
  "key11": "XSj4JEt2fSQ1z3DRvW7WVkLt231z9Zt3SXT7XS2Dcyo5NavbRa4FLTsHfRDFmotje6Miiripz1Kqkz6vGMHEnwh",
  "key12": "3aVgWngLLMVK9yqhyB9MvgP9oC1kyk6vYDzrfxyUAqgjKLDtFn5pXQAtwRgjTKniNYBrwww3cM7TbPbS7bMofLf8",
  "key13": "5ZdU9tmoJbgaKmpqMQenJX97CrTRc5DZ4hAsLQoQ4jCGw2GiKHYkvca5mok15PcCVsDgwfKrynrHB5p52Z1uKFwp",
  "key14": "58fRj7u3Ty6ZNWo3LQQbdcJirhbYi9Pj39Ziv9WWsqcbpvLpTTgE7NLpBf9rcNsXCfAHhTCr6am1vyLUhvM8swoz",
  "key15": "5LWjRgk2UdNJxFswpHCoPLRBwh5qbSYTsCxzKyBNhgWEjGkRqRVUuucXokU2pGYXFiqn5mo4NoMXHLnBNqidbvNH",
  "key16": "4v1CNJzoy194xZjVpXebtnCg6r1bU3NWeaNVrpd8MjT4bbSawmVjMhZt3GCxG5rygVLZ7Vvw6Zd6wgQSA88syqHC",
  "key17": "3upSehKWpJfSM7rPSaeVDoBcDPZrpyoV8ZH8gqLsC45HBkXZhk2Gri3N2B2geBUwfSD7XHY1qJeokcyHuRKcjjid",
  "key18": "4M1S1tNPFTn9c2Jp6rJHfzz3aZfTenVFJdJoshnMfGJEo93Xij7Zc2B9anv6y9scA3hWz76ZuZYdCSckjAEKkAUC",
  "key19": "35Jn3j81vAWjiAwvJBa1U5ZDDQkYgEAeLbvMyHJwSx6sH527TzmFYhn5mdRkFtGJNsrpXvr1jjMi8EkMfFqf6p1p",
  "key20": "23cpXLuZD1EX1nySqmDVuvSjAvjoXZrqV8QncLGcJGp441xCQfYv68h2eF5zBYT6anKesgLEWo5cujmmxLprZUxd",
  "key21": "2zCuni4GprC6VQ7ehih694KNdrrkoGVnrsPBbBgTe1HqJ78hV1kKmuu82TfCLrFjkkjMfc3TQrd4gq4JGWxhMZKw",
  "key22": "3vWMbHgJDsZ3EiN94isLVU3LXCiKUJ7AaopCAyT6WYd1cd8pZFvdJakRDHSKdxZ8vsPXUs44EezMZH6USRqwq2on",
  "key23": "5hsuXkfRHL7bvusmZx6tJ55yiHX94ZY38YEA4oLoyLA1tjseQpTLAdorUy9ajdPBvJC6wyJCowLEztJ9q5qD1B9w",
  "key24": "2vGWQEUHPkvUhMbiRkmkwqcxHodaivkYx8UEQaY9gStvVBQ2mgrKEh6hiumwqr9dRVwWgLVRjDhKum2DVLpZvRC9",
  "key25": "41F7c5GSRckR553bgt55TbLitGMd5wDxLHnZzesWExhqtHihzCWevDXjv3P98hKNQJZC43BSKWGkQzG8faofRff4"
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
