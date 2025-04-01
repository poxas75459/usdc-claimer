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
    "3qh8GVmVA3BuuGQiBgArnK4tXYbpayCVVRBbAohJXJZgxBSsNJdtp51hYuHTB1po74cmQKcf6DsViych2SW9R1RG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2DvyDfRtr4nzWsyMz7Y8uzkWjRrz23XmXLSACPwKFkKnmt1ypkQ7cwVXTRureAqSqbNQEZ1yju5ZRaNt7zZsuc",
  "key1": "4NLUFzfsTRK9xpkk4VfvzZSVSehxLWwYeWP2CQKgXYsni6xVfuebYmaJqi8BXkmbgB8cvkJHZehpkBuRMui4bykJ",
  "key2": "5Yb8goCRyon67zAvtUtNT93qSD2QAL8aWrhRgB4qQnLyY9fUZbfkSiNsvGhiL6N1aWP7ukuKJPLQFeY9F5h8SaMg",
  "key3": "4arjAK2GANTm5xRw2e5vUb3mfmHNrsg4ChuihJJeFsEZzihbGusDwZtUhyVuRC33mWXrEYnNzGaW99UsetbRhTiS",
  "key4": "2UC4ygeZfdsgz5YvJcgkqdX6y88DwERoVFx52NET6UwTxpQ7FkmQJwXhs9cVsMGmHoZ8XS8JAWzjV5MW8ZmtF9Qx",
  "key5": "4SVBUxrJuPpVvMe1frXPfjHKMNFPtXBE8ER2XTBy3GDhYvSQdjAh6ycuYduLZVXPF87diPRa9mokrv8dbzATAth4",
  "key6": "4CwmzDpTXJeCupqH8ruvu642oodtigcqsFBeQKTyfHZpkhWXpVLaCM5cqFnhazn6fwr5BCcy5d2d2H4ZFaPPEQtU",
  "key7": "2JiVxhnQQoyF2sb3A3b5D9tyBZL341kNm7TytJjvfJKFciQ1XewBC9QzQtNGJ2tQXci1kvtGHqfXpH2fHmf7aQxV",
  "key8": "5ahU4gkHS2Ck9pvPjy4kMi6dHZsrAo1Dv8EFr6w3qo5NBiWYfcW1ea1pRMW4R2iWm3br3ytGuqY1uegiibmshZKF",
  "key9": "4Z2oZWoNPtEvULnJvAKR5jXAtGysNmyWobfK5JBeXpmNyDcdpvNMmqPnzMwQJzHK9TwjC7TRW3seEGKPmyQ9bbyj",
  "key10": "2aPC6qVhBxfoJoNYiRDCSoQc6su5SdXG8dZ6KFQ1xKbRSAUuZCCrGkxNX8vbXTScGL8VRnztS5UQJsZKi2WLcnoH",
  "key11": "2q763Tx2htxry2N2CqacGs5wkmKtHzp1EWbeGJ4S7YSDsKRGcg8aQddaRHiH243oGBAjZxuECNv8DkmixHmYgVfp",
  "key12": "46FTWw77eTTsUpiPUgUoefcDDbEGDTcwFyKfypoX8D44BJLkm2Y8dLqYttJ7dCkPwn7AKY1DooDbCFa4a8xM98WZ",
  "key13": "4qy6KenEbortg6931mTwtHNApGcAdnshpsPPhTCRB3XRzG3J1TaGDxcq5bdvjGXccLwzuM9FL9AGcPf8iqDjYzZR",
  "key14": "5neRiVHTWokYa5pKn7oifFWHzXh7bwj4MG7DjQUMcgcvtEVpTdsHRwGVS8TLNBh8WGfmiC48T1Uv9ZbgpUaQ47JR",
  "key15": "4LmNQYue6p1trun5cz6JDGiEfAHGDAcrMBWqrSf1SzumT5bPMmJULKZx5EmEr23Xri9Ctw3XgM7DD4VEqbhnuztA",
  "key16": "23m5RfQtA9FAaKqX1uT65eQH8boC1s13Jy1AurbLT4wiKUjzy7gFbNBeHb2uu79x7hnKkiRdBYVx4AJirLeqVMv8",
  "key17": "4pRzVijFZz3wy9FRU1arSTjet4XHP8n8SWhJYMY7CrTDhcKKpuNDSyL1C2YpzQAoWBvysz1N7v3dMCP9sLThB8rC",
  "key18": "iVvtmh1J6XEQitV3dQj1AYe8X9FEMffaAAkMh8Agjg2WDJu85GatxhgH2FkV5pZ9jf9V1CuEfShvaAQUUxNLp4T",
  "key19": "4ZchpqYeng4CthsMP86tsn8csWvFBLFvarAvyt7noVDkcg359jXPL7KgsuoZtfMxHrMakBib8A9CcNNv1iGwVJq8",
  "key20": "5eRkJAka1hDPwi53VTvRft2s6hLiPdhWDUN4FKqBRxkLeWWhnz26rcZbBvxoLt17GKjgyonx1NH7gXvug8FFWRWz",
  "key21": "AFgAiZyeSEXkdqaEF8kXLfQwW7MEVnciWSH3GKpLbunuCzEtgx4DdnNFZeQ7pKBrVAbmtwQPEceJHrA1jzPGZpC",
  "key22": "sA7t7MBh9P27XzKN2AiRXWofpuRfhiLrfJcYZ1YB9nBghNURE6WCbfDYfb4x4yWasTCsMfcNyipNt6vSaiLrUBf",
  "key23": "5ArwaiXh8FG6zr95MUEM6CBSokHQC83D1acRoYzHmvZJTqdZtjLcJWYSJrGwoi221HDoHaCvSus4w8TiWHKFzbgR",
  "key24": "2dxpXT74NdyvZXLYASK2Z48WbfzUZqgfqahfTtj3Chr2AdJTCoadGBYcjBB6A6QxaUyM6xKKn3y34PUaduF1CXs3",
  "key25": "3JmkcvZFhZZKN639xPgRqJXgZVfVVxrdEk4WRyXHD2NzLZuhEu5But9kmW3BMs3oPyXTciGayN2bU6HHaU4TGUWX",
  "key26": "4NxT4YNptWFjWfy5W3847PLBkzKY927EjX3Ubg53fkvio51TxV2fvTTTrPBoXwcPkZ4WAgpgsPSQL6NYnBLsuzpB",
  "key27": "5JiqP1dT5fad3Ye9JkgwB9cY1ds858P8wBukpNbmWpUu6rbRrGcxHESiQN4rKLjoh41TaWFaUB9DkT1bJgc4ewfZ",
  "key28": "4LFRqQG4mgEAAbbXNHoPELwxpWY7MLnA9fBkL5cuhh5BQsCzHrK6UHfw5TUChHHg3aiA9Z286uyLX4EAHSUntwpm",
  "key29": "3ksYLwfSYPsuDiTSNBUMko2yHXuPfJ36MKwxfC6tHRYfaY53Mbq4Y5eFhR8wGhAjbH3PfAxihHB9483oQZCVfSzN",
  "key30": "5SfqbVVmfzJETGX9GQ9XUfKwPK1Nz7TAsDRiWdL5pq7qzftNdTGdtpQZBaKW5Bkywafbh4oPsWxDqMQzV6JTnV29",
  "key31": "oznfRJWxFFjKEK75mezm4da9Li1At4QYvP8k3C5xi3ZcFdZ94aey4FqTBNakwURqVS33L2eXzyi693AxB99Qo8q",
  "key32": "4yVUrqk8XxJNBj9G7ctstTRrhQ8FkVi8vDjURB1XEzVL1aTnnweoBSPZD67v48biDj9dPuyNhcPdjBFPZM3x2Zrj",
  "key33": "4td2NDHm6J8jx3KS9P5JRBrb8N6K5K6jCRfDpmTnKdPV5tNob5sECcQa1goi5LrRjUUefmyomu6rnY4aPn2QVfcP",
  "key34": "5gy4LpCTxt2beMt8vLnKzKuCnscCXeEBvp6aW9BiEXv4uxUGtWdbM53CPkVKiohfWdEppbkqx9VHrV7ESB3ToM2F",
  "key35": "2dkLafFYwzPxtX7gwSUKjN6iJi8Bv2drPmtn7X2FyKXKfxt9imVjATJ5gACsky2vHVh4LavHG2vH114RBWmTYH7r",
  "key36": "5kuWzkh8aqjehL3RccVqFf5gxJebX8tF4CVU1537nqrSbqg2yihuKGuhRcoeBkxvHiqYD4HYmJVZNPuK6tA2oXjj",
  "key37": "2x5j4hNRMwCVuGrT2gyxU2HJdvzyGi5cefFDjzw19ei9ZEhHv2UDQ6hMAqo584YB1A6fzeyPond5p2mnS1ULrQK5",
  "key38": "odNvvPycbE1EFCp9bMpsqMwDBrsdpSppMf2CupgJNjtmiEJk1GXxRX5jQqYpjGPetczNirLZhHA77svxyHSUisD",
  "key39": "21c97JLWWi8aRbr8SUPXjrczK3gfbtqaUuWfnc5gkmUiGzW5bmMWTSvBF8CamZvVuTpQReFVJ1BqRKbrYDbJsDjp",
  "key40": "3QTGyqvSgAgSRLPGdD255zgxpuMDF6ucmdpMsudoninKVsuRaVuU5VrCM5gbf9cg9i54xsQL2MdFdiuv7DrQoozX"
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
