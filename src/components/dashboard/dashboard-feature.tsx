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
    "43tRKpqH52ekTDfFFTRGJxbUiUgqhB7K7xdtnmXRB5hmyTSsZHyL5nPHQWAZWVZ3bHn4vhTU546oQSXzYLRqWsCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifMGdXVZSLXJzgT42kG3vdGrgYpWCfZTyESogAg2SL8US7BnFbT55Dniv5TAjKpYCKW4yoEfVwV5ZeSXP3UXASA",
  "key1": "4HRhGiQp5skz3bTvwuWqssm4BBLkdwyXqNyQNNaHwQj1yGLbywHE7zri8C5JyurbSqLQW5PoS2Fyhf9fs63FWPYJ",
  "key2": "3bWJMfuhpuJLPN7dxXkKKYohrDwMJmM5nZ3WB6m47YzEUVkNVjqjfz9ppPqqy66bZM3DShZTuMi3LtpiBfZPKjMa",
  "key3": "4f3f8XswiLt5j1LAJp1MALdKLP11FhFTb7MdZ4AAUBMaxRHKAc9AWYwnfoTX6aFcZmtvArAH1HiDcdDNT1MAGLD8",
  "key4": "26Am1KuPf21tgjhnmWzQPU2pUK9sW78Cov1AvDKb3wEigKntA918NCuZBAMFVWjSPskRKvVpSBQUaRACUuVp7uoY",
  "key5": "jtwocTDRRgrY1w6v6K22u1rtCSBriVr7qkUdQRBsveUdjZJa27DWxRVJRNBPHZYTKW9TtD2xQ39jyuLiW1ZGeqr",
  "key6": "4X35ePNkzHwpJFc3LvSNWx61DGxU4qD5A9CkDqm12KdinQhzHuWQdvW1ipinZbzptDD7PCx5wGuYZwoKoFrReSAw",
  "key7": "5Wppxea6svHeDttgM1qnTYZGD4s88AkhNV6f5oX7UgpKPFSai4ALxdcXgnzCzSbAH3zjN9nnzESq6erjU8XLoRnd",
  "key8": "5uAbehXrcjdzysiKsjGKj2ykp2zNdF6Zz4hRUM8tLhpwpSjMktxgM6nWKAL4v8P9sQeV7Pw3ZE1t5Qu6FYA1sHfo",
  "key9": "5uHvqpPjwNPP8eBpjjduKU7w3MtpPn932V4Dajz4F9mMbCwRHKFqSBicPbK6JQXzeZQJ5UCw4tAASqChBzUz7iqT",
  "key10": "2bUtWiF1cyLG2FtVy5qK8tM8Y4iM76JdyPdjWDHTdxoohLVpDvGwQqkSTjSbjzPbqPQGegMpbyuQR4u75VDhix3C",
  "key11": "31qmUHWYpdwgr9eGXDHpSin6ErkXGGjDm8i1PsHBXSZGarXu5FNo7wx15npNChg6uZ8zLRJRzJQLAsgv1P9fKCbw",
  "key12": "CSk1UZJhFLBQ9hmj3mDdVHF24vsUKE653fyrXe29Lz8GNvMnXWyAob6VSWF6KECvfouXLifTfHinT1PMU6ZuZfQ",
  "key13": "MkpvERgPEALS4zXZPe6ZGn4msxm3fMthLz2sS4GaNigWTfm8kk77dzbWubFz6ewpWkNm9d2Ed1BvRFNSqJFwWiN",
  "key14": "3jWSiPdCfVvtDRYxeHiZzJFNpbGS7XjviAQdjAaKAKdNJwUvGEwxyYejReat1CRGRNEkr2HuoUnVXnrnP9Ftv8h7",
  "key15": "48uakRXVr7CweyvP67x4jvWwBeWjtd6KENutipCGtSfj2uD5onXbTJVoHBSqwSUWE2MXmYKdjmDwkN2VSr947pzJ",
  "key16": "vrntjrdjh97aEJa48fLd5Q7uVz2fWiZqc13awE7CjYj36WEBTzvBrqbc2hTfq4dkWJ4MQJXm19zsFpZAAZ47o86",
  "key17": "4AoFJhbNzjwPUZUR5EQyCPabgNK133WWTm1Gfher8sLzGzySAq8QeH1pw8FvvvZW7J7rdrCrDabMuy5ywRCxX55Z",
  "key18": "3unxFTdEjPcBG6mzprpnUbxTpRJyxMFsfuFRppeMkKH212GiioaKzkLQsdHn8E6cMhhg3znQxUvuZF2kgmucKivG",
  "key19": "3MJAu1tz7suXr4gCUfiarPGWv8M9U4hK4LNE9DxmQcxfb6uBe8tXLhRugb78MLNFN7T6j8iceFL9crfQUemfZFmC",
  "key20": "4xBdQJfsn3N6cShAs8dx25E4cNWGmsfZEguNsANdJ5Pu6Sbcsz9NBCXjqCjVSSPZ75rg83JgaJ1pjLYr2r29QaCi",
  "key21": "5nQRAwTpp1KjkdkJjwu3CSCy5NusaNnnz6tKgQaCN6ZnvBNHZVmph8i6vmkAK8qsJ4kWnUWuBhAtFiNPx5nR2Fqh",
  "key22": "2XsaiF8MCWuTGATafXPet4yW2kHYqtVvsj7jjUXLi66MzQaNvF4CXaCSxRVbHs7hSv1HhtNNeKDx8jT7thRhejzZ",
  "key23": "2GKDp7GWP2ZDrn2pUSFpYvFNYiRV4CBmokVpKs9sa4nKnFZ9Xnwkpz4XPgUASvnRHr9PwG1CZgYRTQzSWVVhTX8u",
  "key24": "4GrGnWPXuR7rXxaJp5wC1AnNhzxfRW8hUmwZunSnfmiMfXkZHpHQe41M8uvBKTfheP2mA7fLq3LwTqpJfpdQgnZW",
  "key25": "YWhGWHWZ3yYTpT8jApNq1kuJBEFpxkJ21zC69nT1yK18LsULnx6qWTau8rvUT7qfwUe2czsJn8aZgyK9kAkJxBy",
  "key26": "5CijNR9f2ThfzyLhfDLqebFYWCAb3N4SQYZUYTAv1UMhGo989t9Ygc8K17F47mqjysXR1Cihwzt1qiwev92yfUna"
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
