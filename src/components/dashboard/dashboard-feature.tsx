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
    "2Pe8XmAc9bb7V4W968XeBReikTwHqryE7xxRWniAZhK2d8L1Z2VY5rPiJe25fL4UAryCj4FmydoPvsZxM2KwH8hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UpkDJ1B1wRaKeCGcwSPPokPmhdGa4rspzoVo2QTFots1Ye3Ez6EXjVwcSyVsadXmV33bx6dLC2YouH8eCCDB5Yt",
  "key1": "4MoSC1SNza5pUyuW4K1eQmqFkJPyFeqXnyAt1Vafeyj8kCNcgvsnAzWdBXNnm1owYcsuh3a3ruAhWzQ438oWwgio",
  "key2": "3xK6J6ggTYe2MDoXyW4MUjGB8KKJ4HUhZXKKNVdpsCVxwxxiZ3uv9HEysPXbY2wWUwCSnQRtzqJzuNswbWagURNx",
  "key3": "2CUK8tfbhJzc4CuYhy3NR3v4MNmTvdF2EfjX1HiHeQ7Wdk6yHWZ1HjnuQcXunYXpXU27kNpaK9y5NcH3SiNzMDeV",
  "key4": "4obALHsbUgUAeFqXpoGHHryvnDsqowREyLtG9PnR4C3JXg96YMJAke9DD27cTbRLXpGYhgfH2JZTDdZdX2RGAcEC",
  "key5": "47RpZqFTmPYSYwmb14HgLSo3ME6kV9JdK89gtu44NwGyyX68s56aeQMw6r3wVStZ9AtBv7Rh65p7AbU3Sqiut1Sh",
  "key6": "2uys4gLrRDT5Qk4hvL94RQ7so2wK2nTQMoY1KpcK7QbcHjg1gzHnhjmYyo67cv7ujXVfKhkdZgZqrS9ZCMVgMHeg",
  "key7": "2Wd2Ez4F63pBAmQKmWpuVdiJekAvud2THaTiLyFa7ZkirhuUX6bYT9SH6rxZrNc4UdEG7hYTNi7vURnuS1kyefKZ",
  "key8": "4umbejs7aKki1UFRKckzBEf7crKmXptRYgkn8HgDcWVRxWyMuSdTEfGaeVDVqqdUJPdNsdFYXEqZB6sXDwcWo9q9",
  "key9": "2WWeDAfFbaz6xG3FteX1G5Xr8EXRdqR7qXhidvTRw9vmC31sPDQ5SgaPSxme1vee1zELRQSb2wJo4D274tziCGDn",
  "key10": "41FmYC9tMboEgn1HQRpUi4pYEuv1wUuKe6HcqEbec9p6mS1vCjrces1btAfoazMFN7xy5jG2yyqHKNKpKYCkvoZA",
  "key11": "2UdAAsUsrDnw92LnZ6caZZEu4zmvYG9YAUo3mMBd4Jofd9vQzvccyGXo1pyevdLperUiNpRzLoJ5bV3nP7yJPkJk",
  "key12": "vpWFX98babQo8A6cqBCf2S92yvcysgx7uZX8pDKnXE3wL9Mw6nzw8NRg5ZXPzFv7UYQKBbH3mVsgXkrVszSZGZe",
  "key13": "k2AUjxHiJRKJ4wzqQ48qew9TpsrsEucQnZ8LBJmAyDuXxsGC9rcKjhQCaYN4sD4AGVbPos4D9VyZSKvupVQ4GRh",
  "key14": "54WVuoJKoMutLs1Ay5Tec1V8FxJwUbX9MnPBc6Z3iERpQR3ij1fhZrYmMn4Gr2bjySxzoCkg6NF6Fsf36RfRApGS",
  "key15": "2NnybgvsDKM5hhRvFe765nMiXwaSrKd7rxXeELoo1vpMZT38k6feoFXCdRW5nKYPMW8TcdkXjYtTB9zBevUNLdeQ",
  "key16": "3KBW82V7FWSdXmhWVi5u59CkGCc6jAUVs1bi3w8F1WzMbPpN4tC9yESsFva4kSb5phBtCYwoy8dLP2jHyvFnoJTZ",
  "key17": "2nuY2XhmPm7K3LgcuqPwByXQgcBdV2tYAKhQDn7kKSLePWXAtA7rgnE5GTedpfcXHstwPbkjkNQZv6ZnbhuBon3r",
  "key18": "2wNPtoDNcs7WzjLLkm1SwtWicQDJkusN3rMFRtKYe1MCSYivCWXm3Q6scRRD2L4E6e5H6aGhWjmwp1Zaaz4Tc4mn",
  "key19": "ZJ3FJuNAeTzca2iT411mUtwKES9pdCuzUukHJfdwsth8vyU2zs6znksaii5VuYGHJRbxDM854wXsFRRBmj4rvck",
  "key20": "2pJR1bCvet9oNtGM8V1FNbNW81dL5MDUM4rQGf4f15EhE1r63JMN4oeESyy4aMF6PCZyejUkSNDfgRvmbb4bNXaQ",
  "key21": "3Bz9i2Eni3MSkH5kN72r4NCSSunvMVjo5Rk2kFWNAn6Mn6PJwZ9csmdVoiiLZoGNSjdKdryjo9rkk8GVcQRCA3hd",
  "key22": "3gcPUqTp1u23Bo1xYtLYnMPZgLs9xkymQBn5hZQbYE1UL5jidsQJL8zkCJLinm9a3TbVNVocA74rkoJePmEVVUAb",
  "key23": "5fBSqLwBUpaLFhZVbJF8aUck49AwDTproSFjN9ifAzr5CeuBC34To6we97w2oUfpDeq5rWBdSZqmiLcdGxsDy6aj",
  "key24": "56aD2vEzPJiHSLevu2RUmjX8W7bvijuF5P7Jq2GzvCRb3gkkbEq8PSmPWYUz724i8DunbAKxxVo1Xd6F2MSaqQN1",
  "key25": "4n3QHNwaJcADobgjrNiPAhPV8JnWWj4b9Q4eSXNndp61arz9bCh5sjVpD3LJwMR8Yg61AWqk4teSk7fKUdszvJPT",
  "key26": "4jWWAvpYScTUG2K7d36GcpEkrjqJhbK9D3WtbZ4Ym1R5pRDkDfBHAoUyiJHNLQhZy3nsuX1L6RWJLpPKZHKDXqYJ",
  "key27": "4GoL85NwgwrGmSyo3XEt6BYMKunQYK2UwmoTKTdCuf2YoAoehhhZyEVVpjd1ciXi9rQb21YSTx6AKSfHtryXzk3g"
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
