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
    "4To4meC3ygNeHq9wBcMTpjwk8RC5MCjX63nCtdLpsg5f4pK5VgsA19kgc7CcWwakyXJsodchEGu8xfCicGzUdN73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bCormNJ9T7ndYUkkgTu4RQzA4apoPCcY2aXjMCfzQkEcnBUQN14ZMG52nhE4tzwr7bp6N6DXE8AAXiZdMjvKms5",
  "key1": "61kXTvYHQGUGVey7TcSFizXE74PVv6UiBh3duyV1vmuGEgupBn5N2x8ud9yk4fmsogxrzAWBwadgWeLdbxuUvTaB",
  "key2": "2zdDAiz9MdPkaVnwPEt5rjhMS3JGG8RRQPkYMiAsXkUQR2dLRNBHsxcwEgJQ6ypFF8BuE4jt152xHsTAzjMwYr1U",
  "key3": "28Z5uqasFNKiU7aakv5T5TrRj8LSaoabjn4EYyweffcXRKeCtZGw7BE9TUiEZAfPr6PQ3HUQXAkD4q6anHXtS3ED",
  "key4": "5WKsAU7pGpLLfVcynhCm4hSTgDndhw3z7KhGcKsV4rFg3MUKo5F7e6PcaZb2aE9HAGcBuFwchNjh4P6ChW5ikJSV",
  "key5": "5h6dqLdskXtXWtLqDRtZg1REkqty3amwSiuYV5hnbNMMmMW6QnujS5kZz9hP7sbuHarMFzytaa9dVfd7tQJdhw1V",
  "key6": "srbGxNYN9asjB4BE1FzJNAZQsiGoQe9ZHvxfKxD1EK25DVg6MPVXQf52Mi986H8UT74twKxftiM9zRa2kMQhgws",
  "key7": "sbUJfRyB5rr5Ec2nQMuy47vUgMZR4Gx6ZEaqtkPHxMMXAEEtdw4gCTzbTe3Wv3kDrQXZApcjtcKNLaNrMBgKdph",
  "key8": "2qhYE6TjQnDyeG1VRkUSjwzhe1vf5gDjuAhiJHN1NB8Di7jWxm53NbBGcrhJay5SYfwZ5XnqHCawBhkoc7saTu7u",
  "key9": "3sHYeH1enuha9tBQPDuhBp35Y8hK3dtoDFqvdG98AwawZH2epABWgHEhwGK2KUqEMAxuLGkXuw3QnMU36z963Lp7",
  "key10": "4GkkuM5rEs5P28zDQo6AyPU2m7FCSLVVgNWXAXc1mZx1RL6GC6NX9UQ2GfeEUK8hDg9u6r5LN2imtAetDG7CULUF",
  "key11": "xvhbPpJ2H3Y4X9VnwcMuEVGm6tU71vsgTTBEYgL9aLALGWdkmhq9GGcnNbwm4ni4Y5J9LUV7vZuGAUFk1m34sBP",
  "key12": "3sVKUifSHoyseKL6Y4VFhFvk2QVbMnSJL32YvrW5i2cadoqjHwpvebiMi32DVA3aHKZ46b8tEL5QKWL2jiE4CuEw",
  "key13": "2GsqwKosKbP31Z1banhY5HrNWegTDXNRy2rGM9sRSGV1cmzbgkp9r6G54sux999MhqdppVJz3rGxEHQPLdhYZB4H",
  "key14": "34Hh6YmutyuEKbDqk6EssFgQQxacsMHve9DjREWxC6qQN9cS1v89trbik2wzk9yHnkb3jtzjESeHWNxmkXifMX2R",
  "key15": "Y58sXCiVTZ1Y7aLNpCT1L1KpRnr7wKkNy6qc5qnMJ9jP9nyC5hryEvLetyJ3qahGyAypGg5UtP4PJNY3sKRCZwz",
  "key16": "2QXrKuU3SdHbQmTsknjUmVtgMLDWC8Tt9ehEHB4G1JdoJqJvH26hsm6Y2fH95QxqyuHmpu2EVqFAMKXhhhzyy8W6",
  "key17": "T38uP97nStMhKsCzRqcxCi8mPw4Kv3FDxVgzyKEdHDLiihxiSLpPBQeC8BToQVhUiE8ipZvYetrmLQoeNyEmR2G",
  "key18": "xBRu7JG6hcBsGvyQoXDFvrmp3HNoDzFUKLRFoS5VPEHZwkZL9YddPHs4XhCw6BVNHjKHmyEvUzjso1dyw5tU99Y",
  "key19": "3ujvCJzQsgt6ssdhmMGu5ENukfHkFtkV4meL7jhbf4PJnb5jv6Fe9aJhZTWvqHKJYxQcCRFMsMQFzf9FQXShY5cw",
  "key20": "49gDQmQphuGb8amP2YnY291XafXWQR4dnM5j6NoYXywZktZh3ocFUVK55yxPxHsFwSA6drQzMpVruzw13WyPWEJR",
  "key21": "3zermNJnm47Dd1JdVEPQkHDBZ83BevkiCsG3SCM9eAu6AJxZiv288sPruBhSjTyNeEKggpFuJ9SSSEwWkJbgwdeS",
  "key22": "2vgHGfWyQWC5D1aWaLzr4T8kBakJyvKwFPg9Xe1L5zZhZjm6i4KFoC6nDkuz6AqteGKomDb5CXmqQwg1Da1fzLvW",
  "key23": "hapvWtAvQH49hSyKsWCYiFaoczhtqxvratgqqWhmv48AkChxT6DMzKKSMnCy5gyvvK3PsVi25hk1eouvmmiGDTf",
  "key24": "jVuSXKCDHS7UjjHLK6o83hJ9SCpy1o97vJgcnq5YZ2jrjZ5sgVDLtZU8uzkMkLTN1KeCLWbcCJ2CSyzRcVAfZs7",
  "key25": "3QB5qSippkFKweo7kwg4xwLyMgxAisxvM7bjnVcDqZkhtLpC5rDdcANLHQ6bEptEtQ31DNkEQYXE7Fxv1qw5kD5p",
  "key26": "2wPVvioejiF74qkS9pfWF3tqDAW9ArmuZ7dKAhHmsXwg1wg8HCrySC4g4cgXZeNo85EcEL2uTH1i3foZySk9edSj",
  "key27": "5MFRbiBu1G1F74cGF5HHSyjBb1Dp3jjaTLkzJFjFZ1qBtjNAzUUiAbHEQjU7Xsk7HKKJL8Fsx4KyzamM6P1UmTfc",
  "key28": "3cJvqyYthft7ho8GT3khVAG93M7ME24jTs5ABe9HDBKdjEUcmyr7VCycDRoKKCrpqUTws62KTkAVU6fmdFPynstp",
  "key29": "3dYfxuW6y9pYhce4CGtEM4Ts4paF6YeMHw6WWX3RGimV5WiKyRe2gZrU1RAXu6XgUSX3QMYBitZu4hpVEufBf1CG",
  "key30": "5s2kLgAfQ8vCMwjrDgePPMjtp627qK26nBDCiLCVr1U57fWmAKLWKvXtigvqFHwg6MdescscEntVkAS5H6yDCaTV",
  "key31": "31MAsGHuu4Hngaac3cC8EBWsoRLwMZ9WKv4DpMe8YVjAPf4PjTq91cAAxVb4kM1NQAZ5QMKBjwWUTMXmjCXyUdDN",
  "key32": "5WBvvzxFXQTTphekLy3Mqx7atC53QGyLFr7dSajpqUme8PapScuv9UNL2J7WqpNhDLXTmN9M9PfyxeCmCZztojTk",
  "key33": "4Pef51Z7NJdZg48hKfLpMCM7zHBXi5i1pqQEUiZLb8Fdswptdw1rHxrzYNUFfLKigJvt8EZFFXRuiTdaKz8k5ULV",
  "key34": "3XyHstshvkQyA7uvWFxe2aFwNAZDi67auuXKni4yBstHfkhXLGQJvx4vkSX56zUCTfbe7qHtsZm5dKnPZALP4GP3",
  "key35": "4ntdH4DSRU8mUCNyn6hjk1n7aVaGaL3y5S14X7nmbqWLf8x1tDVbRje4zjiuEHsM5mo4fDRCoEWr5DYaE7daZPwh",
  "key36": "5VXtBnWE44bx7SLrNWgKDpkhwJj87oSdVxk9qC74NLz8poV2Fhamqc4cnH9WNMFL6DyqGFZcWsxBGSTdMsDLwVh",
  "key37": "4kwE1RX1Uq7ncQrCwKgRWSqutDm2yPaCVdPkam4rQ7BiuTVrXjjAdVZJqCMzhU9t2dihJnJEcrobN7pdqUWC3TnW",
  "key38": "2TRQ9Y8wBix4ZYrZerekPU954XbMkHNotZ5VUXBHiSCZ1Scwdneb8hcvwxJtxSwfr4jtLDsEx5Cb38L2sekFVMd4",
  "key39": "2NHVcwrahe5HmgTKCPPFsfAsUKJBs4miWWTU6xj9W9QytK9nTYmpAAFazkjDB3pvMZZ3u9ofKtuVvzQYSyvzyAch",
  "key40": "4eLzunWBx7KxG7qiYQaC2U5U375DuHQvqn2sRthJSZVjrCufwwZJ6qL8ARiuS8ZwS9cTrmx26pjUd9YUpQRjkPeq",
  "key41": "5MwJCwab9PkVQ4uV5FcY518XP2HdwCL96SVL3YsNWafPh7T3fGtbDtmdnpmH8jZhZf5sYMDupf7xtszU3Po1MsV8",
  "key42": "jbKabCHmBveu4n6SUvHQJeeFeP7CvxtU4ns7Zd4dxZUF1c2p4PScvPdKmaEhTUrfwuyLV5Zd8bdETRns54ZxMP3",
  "key43": "2HncVNwb5LUjKY43ZQdgypXCwY7fPVQRKfTgMrDPfqakVahGNCchvur6frUxFsVMLo9wk2YgAt1BNFuuRHg5cag1",
  "key44": "3qm5WJZCrAVUoEde5DmZTGeu7mHrRJFu5PJvyTqrpdynqZKhB6zi3KtoFzdMrs4BTU2E5UWz7SF9rxTj4WK7GQu5",
  "key45": "4DCGKBmURfzUpzGzxWcSjC5vbtFgY2Wh7C7poTzYo3ALjNEnFm4ZpHh3txJm8piQ283z9GUtwSyrgP8LgSyJ4Fd5"
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
