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
    "3zP4Zrcnp234kYhik9BJJPuXBbTMvaKEVvi3eHyW2BXmpSuQEra58YgAeuNGddUa6sntwGRVYnEz9Nrnt4JiFJ54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ef4xffcFnPZ7uzHWBPEfLTsc6sKRrx7PTTBuUYjahqoMzZ5efc6NuFPCC2JVojATTEgPkro6gdiGXf2iyNfK691",
  "key1": "21mjYCtDHKGL4CWaGGLXnzLgnuSNS6yak3wKgd6E3DNQK6ycsYiXjE4yn2NW254WTDQe96RCYtv5myiJW1fRJHns",
  "key2": "RtYkVKBKiPA1QDwt83Ybt2CmR3BVMutfhpZMFCvt2Ut3mXdx9zK7fqcT7qScdoKK8xJdwuwGjifgBxyK8fAVnMK",
  "key3": "5bs5T7h15tpnCDE2Kw4p5Kmef4tKDX5hBzuWnCzQsQ4zpjD7VZmiERo9N5eqoRSbgNURBhF1a8CQaAcW4k6ZdzTX",
  "key4": "38xc5m6eYHFbENdkHqsYWYTneKkM7MVUNzgzsKi9coh4E8fX8sCNw2oknFqnWeuZktJdg6uqoTatJjQT75kp8dc3",
  "key5": "WtKGqxjYJHxX1HuAASgKZEDfX1Pma2CXm57kLtQbENvDKb2eAESVjR2sPrbWiMjfEUxi9DiYCzovscqHuZDZJ92",
  "key6": "5Uy5WzfvWtiC6LBhW5zZpt6vp4FdqNPJumXad9ZF8aFhk1rM9N3KYZjzHsJCYxJ4dj1KoPhnZEZgrTeqXNN49Arh",
  "key7": "4nxY58cA2KU7FaS3KB74sCTPAqXRMfzktfHYXTmQxh7kfi9e1LQj2s1WJeVQMGm8zwDepHQguo7Wi4azaGNPe3J8",
  "key8": "3Wgny6RPD7UEHztSbwKobkB7n8NzRoPz22gEV9ryJ8ggaQj7VNf1WsWABjgJpAVSfZ1VJVrFt3tLs14MorDVsS1M",
  "key9": "3ErGtzmuFbiz8vA6C7sZd9Yrf9vDKcsPG1GLDUAu3ijMtp1u86VRMzpjPnRAYL3qPFqNy4m48RNpmKi5zFL1rutH",
  "key10": "2MmG8KwRRhjC1ASaq2e1Ekm1iFnQHqM7gDApNJbEVQFMNnVes1RkosB9h39dNcPCgSyrFQATtP1oPVp7RAxsTnDk",
  "key11": "2aJc7Yp8VWcYpyr3wjBJYJ2YYWisQ4MMQUFmgGpZe4drgidUvSNDksk2Z6wpSHgh8sTwh2Fw5y2SUHCG14EbUYox",
  "key12": "59BSY66u2PLeE8PS6VZC1qVEGPU15XdRvWBwwahjb1Wc7cfEiSLFCyMeKW6vXarswFq77vHJR6aSU6KLj88UUkXK",
  "key13": "5eQCvWbid5i1jh8a7yVpCAQViNQAebpBQeXJWxHCPeL1qXjffcrVzdKotvBqquiamQttF9rEgRnPrSGsUpvDidAu",
  "key14": "3FYg6A8Py4TLodEpJxs1sJhMqPmDvEoyAPcqE6d8Px3xoQNZsCYkvsdYX9RrceudDP2v4o79866S95ctW8hDEcRc",
  "key15": "wmbxstpeF9oX6Bx5SvBUPuRUfZDbtNXMQxnFs9Y3gCWFV58fnAhH2vhW8DpDSSxjPqg4wEW9Cd2TZozFwnQ2wb2",
  "key16": "aEnmiR21pp8kt3FGVjMJs5VzkvxXXYzrG9wnU87xWHbct8p3A7mNVer7rhKvsq2bN7tg9mz83xE48ieXzzqe1WV",
  "key17": "animBJQxKCgcgPyHcbREqgE83VVpcResCDYs8XycJePARXB9nKJBcBP1kNvfX8XRpv3pDg7F2YKN67itH2aDr2x",
  "key18": "675JqsG81p4ftKK2jtghpr6MxtvkkXQUDzg2755bKRZQqGN8gkL5RsbE6UYQKtP1p2YC8AkN1MuRYihU5PLrCitX",
  "key19": "51Atzp3cJfrpwu3ozECdEZBdAa8Q9WmWwkRLxNHhTuVVy1HbgWiRVVwm7Qvt3ickY2cHNnwk6vk7ojFX2pGNsvLk",
  "key20": "34Kjp2dU4sNAb2xHM3aBPGLdu4i7kafDZkMwZGuscnSEEQ2jakGVmpvmh7uodfgFDWSqUdUwTDx97pXBzVSnoL9x",
  "key21": "5ZwgfG1kt9f3miye6kp6Pj25yv4xcowkS23S7UTdT9cPuYki1h5sQGaEe6sH6sYj3RwxNJbnDRyiMCnnTWyKQy6P",
  "key22": "2uZyp2befHGcTYVF94rcWwK8GGa5RF8dD1eNAPde4X83fzBHicuofUkaF58BrMpNh1ZgCU8xPrVitdvKpRNCzpca",
  "key23": "3ecNTEK6gQjkPFFYHLYaJodRNHWdQ7sufX3FnZngVKkiKrDvk3K5QF271EKH1PKGuGB7CZy9J3mBoL1F5ZoZcLCi",
  "key24": "G81XkTR4b9te4EkSAqWQDVs5QTPkhZWQN2FqgiLbMpPk9mMVQDh7CTBf6KQE9t6bEYVhWxxtiUmLyB6byApVWJM",
  "key25": "2YPzA4NbJpbqyRxvHbNVhXGpcJm7wAco9HCMqYNtRdTwn7so1Ayw8pW3iDnGNTSmNs5rj5VKYgNpVpcJwNWeakcE",
  "key26": "34inw4vbAjLBMvF6ecS1HExDxgMcfWYKKTZErohhiR9MGMqVGQAoo8gBwc1wndg2TS92tk1BGr8iJ2kvKtHNNufF",
  "key27": "4SPny8e8Z2dPCQW9bscGDkDFiccrgf39LpGhKRRuopHnEN17B5MvevUnkxsZStUh92t6WAE6fMLh4LEoz62QsYaY",
  "key28": "5WANWbuusM39sKvjutFivoUekxe6x6Pzbto3BygAPoXFNozLdtAm79rKhYFw6vTbjBGLdH1BPNwt4MpsCJqR98pr",
  "key29": "25EXXbrKsmXqSw8SqLDbNmRUMMfqcNeyFAgoggmqyyKyjgu3f7p8bDhQycuZf5AGPXYByS5v5GLf4k5KXGFRyB3u",
  "key30": "5PFrdXMfTfbbhx6kVNcReUZZRdyupwU6ZUAFt7WmbYvRjBs3B7jWineQRKpz16dmjrtuz61psQRTWkscSZbyzz6a",
  "key31": "q2r68c7gHqzuJ5Ym9q7sSvrnQGymrBkqqsgbhT7852P6JubQKMswfCzwGAW9oWqjqWXeGEr82kQVmwApXnFZMad",
  "key32": "2avaxEYTLDniFNXh34FhVbfjwbwUKt1mqTtdEGyBqirwBZdQPv3zrioCXzY9JGTBV1mPKTVL2QZehrxxAVYkovmG",
  "key33": "2P62weanxLtToUFfwqsmkxe38uyWajgbYZtVe1thsrjGXx5PzR7uhkEDVSy6snqc4kWEda9VFxcPf8C97xQUHDcU",
  "key34": "61NGaTQv6cf6BeWdiz5tJLbU6QjCMvssc6Vyt4qXEokCDLnVBkUULaZNgGrDauiEuxQDR3Wk43wxy347htJh2vS4",
  "key35": "5dHcuATk8hPacnK616b7d7KPTwdiGc84BEbcbP88KWRdKAoDQYQT5wwDsGdKXwiKbcybsRdxh7YFLPHqSXuc1jFz",
  "key36": "3SKMeKDzV3sx92CRQLEHwAdSHBRADYcZ4obWvSy32Gysy9t7nA2YBE4egF3s1Gwa73Ed387E85SYBA6Gj7ZfF9Ke",
  "key37": "51ssF8VGMufRv74vFQz4x8YaYxbVzv9ZfHgkPAmqa1McX2DzHJKGyVcbQqkEa6ewAT5MWbgDAmwi4AQ28ZXEnpT6",
  "key38": "395pVvJdCnk86Xk1GG7Yonz8P3MibirLJCwGNguxt7YH8P5xZktbGwJn2caSti3JkuGAS2wD7GJm5mSsLozLDd8h",
  "key39": "grcJwBwkbDGXLAfezaskgsyZNCFrXRCmnF3ndU82j3xmeU3dH4qfUbZxr1ASyJk2kW5xPPYfsBbUXBEVc3LfUfQ",
  "key40": "4Bm1anaB8CaTKuzLG7hBerGJNz5xNxhtCaqvPhDuakZ4g9YWLFf2ZHwwbgvScK74UCLFC4iU1wTPLziAsXUASCNN"
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
