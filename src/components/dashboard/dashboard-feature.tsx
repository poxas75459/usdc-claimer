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
    "29kVCpAkT1RttECiQ3ap6YJTaVKc63vyRrvpcW1nMs1vPHDN44TfU7HuatZsVBgXkB3if2VZVEqKf1JxajjuLJc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rtDkioBb2c4fg1Jn5eyqdzXDAvXRezJtjXSct7rkinov4t3R88Dt1vNMj7ZpuHTfh8J3pMPFKPeHnPF72sJeA7p",
  "key1": "2u8DvTNXagEtzsivaocJDUkRbiUJn5aYmZp4V8zyAnzk3x1Q4FZHBLTuFviieDGm9ZjPkf9AZu81yAn7pHsvxe8Q",
  "key2": "2kx4bDTspvzi3wf46fngDywDSkAuCjrLaHy3cNwXAssx3cCy6jhgxLn2T4AQ9gxKxmsMPJZEzeYin1C2ihQmLWK2",
  "key3": "5Juc96dfyLruKYYW7iup7Hh1Hp2bwhjwT4bTE219LsySYDcPGsGPkHx7GDKKuCix4M269zoW1Q8C1zVHgpwkQurF",
  "key4": "3mcsDPqDS79LWjPNh7WHr31MyLEue1LXTWWhMBDjQWJjAyq85XfUbkfgez5hpPXURENEqoh8vq3mCudKCRGxM9g8",
  "key5": "6NLfjzmTjq65mm3KPQUrTy7Dp9ytGJVbJFnVJVmtnoNAJ3amKAZssH4J1A2caiBYKYypwcV62RXcdEDoL1KDkKh",
  "key6": "2qxcaetsSnERWWjgttbBrENF1RKnJTUe8LKkV6AdJWdTycBfwRTpVLZGZEaZGJci9TV86XPuJUnAbDfbL2ANunZb",
  "key7": "4LTkp3JXyHhvM5f9akhXm9eXRxpcLeKGmPUGKLiEiajKaL78vGkTsRh4P3DXrQVmrrAPbYk9PjcgresD1YYjZrZR",
  "key8": "3TuSVRWprW9YjdwHxmZqiBH8nqNjchDQ6VNBX7TQT3Pft5f4cttijPhX3NvkfWkKxiENP9RZcRc7x8yacBZNKAd1",
  "key9": "4NqJ7SWksgCadgkB9NyuCDWUcPc2GwGJKMBCXrg4Q4UuXBVXuNZxZhUuR9CihPwhQK7uLbRH1rf1fStvuHwQkmM",
  "key10": "2YFLrrX8iw1PqWmpTr7L7UsHHSeqY4uj6JX2PRNkhDC9wievftrSsigYsHbgRyfsLyCCzwvXwgE7S8xjVPLa5yX2",
  "key11": "4aQabspq4XKyg1FsMy3NA3GGk6mgGVX4782D1TdvJoBM1otVk1Z6KR4VNLT45XRJVzKuUu5p1cwcozzbGAj5dmro",
  "key12": "4tBncXRjyPkVhM5ajd7Re3jTu7cTLrqGWHprvAKvY9V1MTkvCLbWxuDN2fbFfA6v55TnyxBF6qGvD585tHV5NCwN",
  "key13": "4X2gpxiQu1YxqpB6uW4rayAx5U4MGLLjC98cYvUxXezXdC5bjZn8h8EvnTAvuKbpBbSD71e4oS2bzts4K9qUzXDq",
  "key14": "5qRjRKt7ADyDVzA1YFhuM7Z29paSDAisDuuyicu2RwDyHCMXT857vJsrEFNUUEu9xeMwR65p4QCrF13LMUfkaLx4",
  "key15": "2CuHo1fNj8Pz72NSG8PMrdQZr6Df2n6FtfvzyYGsagY6yReLVNAJFCG4buV6v3qpE9KSUkuZs2rRtVz97ga6GEXi",
  "key16": "46nH1izCv84y43XRK2DKfpHJpHMYYDNYgqokwvTwfsU9EUNdqh7jm8JXkiffgb69nhVFNLYDt3griPUuG4Qkybhy",
  "key17": "29RxJAFBpkGFkQeud25sC7gzFqeryssh32buSEy6vxcJiZupQ6r38Pd1iRNH5b6bYnpXtN29SVgvQSNyCWt88jcH",
  "key18": "X9AWuUBGk6GAAeMaKNMWWrvUxf3dFvyZYH4atQYEiBSZ8RHc5hCD3Ye69PYu9AthKWwhYQkqoFwdDhe7sGJ3zRm",
  "key19": "4m1Qfe1xTpjqP4yP4tb3YQwxEzBeu6HimwkkpoxVhFzLwTFXjtV5J64pNNXqZMc6EtitxU3846CuHD8gdNi824ip",
  "key20": "36HeYs8s7e8LDeubn8xb4JYCAase9Rh9m5RuiqFm7LAs4cxbit8kRHE322C5H1cwQbZaeDjrbdidrKrj9NubYtVA",
  "key21": "2Jqup8GkJgHbzMRpdfddoVbyZmoEaEwF2VFrSCuG3LfpPZbzFJEfmBcSQUWCqhTN84ZqNXgeyF7bG25noWY5XNUh",
  "key22": "341jUNp4SDfjGLNLYewdgTjDfjLG7q2WsV2ECMXh3jRWLQXohacqwK9Zvixe2KtS344Lhy6jUX1hMh8Wh24u2aRf",
  "key23": "2joM7BmqU2ncm1P3oG4ktdGWTYdgGMTxFmZibYScjbkK5yWk1RNGHpxAzsd1wzWLnYprDX38GeJgRoXLPbx8BKce",
  "key24": "3xm2ng2qyqE4nqQZDXBXCWtbWLHCwekfM7bDhRdqtghvSwJkc2L31447dZTNK96svvvincmgaG2z8YYtni7DvDTz",
  "key25": "2ecvD16jyppwMLV8gKmzzrAGH9QbuSg1HtEszKzyN4nC8QWCwckUkodVJGsfiBK21TXu85fWrZQ3LSLnNPQsqLpV",
  "key26": "3Zt7zV2i6eXqPuJzT1apyvrndFzejWuQEz179Wy7At8HzBBdAmyZpKxPpiSiyRyZTm5yPYzBbXoPQUNByDyMG1pb",
  "key27": "41Hr1hWkT8HkTCiEs6ZFuwp6i7txx7fJcU4soNRMWG97qB9XTpVyCXwvdNfQ9pHsBs5emasJPbeMKD9eBenBDfPQ",
  "key28": "5hDv2rRmZUAXpGa46gij3qBVJxy1mQf8W6PGyZKQDHZujjop5R1q6SufFiDx9cBFjgoMhTEFk7uqUiQHhPJzSSXv"
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
