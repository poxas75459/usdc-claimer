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
    "35xqyVMJ14SLs2pDCHXU8m15dTqH4x4q9e2vahkhAFtKjPFej2jmycozJvCvp6q2SqxF1maygtWGPLA4P6v8jZ2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AvXaNQP3UxfH9LUYmBcoopphRd46HuT2fWKBszTcdiSccqsBG5A4uh7KtSpxxWAiamx7UZL4WQspXNneuVr21h",
  "key1": "4ZgxuRmNbaFJnTbL82C7tuh8bRjqB1TLdBkb1YdD4Gu5LivoJCr8xFTyYbWFZULBydjTbhzVwvCXRccAUkBgWkZF",
  "key2": "49MiPciLhVUfh6o4QdMPVkbRzuozjFUY5nGPbeMKMKuw7EGa9pMqbYTX5KGhGACzJpUtX6X59sKGHuGkLzK47DjM",
  "key3": "3r4h9JLdHHzvh8sAF8KRh8BcYk1Q5kCn7Q6U2PcwCkdjhvknhUhg2yGRhaKskMBvm4DcnUrgQNMNLbu28jwr8Aco",
  "key4": "5XvaLb17a7HMubu8AFotYwCKFdyxifonooScNVWoNcJmh1e1Dz3zx4iETwnW198hWwGJrckioYkyAYEp4mDZwt7R",
  "key5": "4HX5if5ELCsumEJdMYTZRNoDvE8J1qkezxv4z2fLt8HyF1soZme8KwMUDn2pxYZLPNdxzbNj8QgNdpCcxVthSG83",
  "key6": "5uJQDJtEyU3uH4rjbSGoXCiV3CDenu8Ay19YjwmNkcgRWLXViyktXVccKNhi6DuKJe2o6ZsdHCkUvnsQHQG1zsQU",
  "key7": "4zrB26zvzERykxdeory7ZzUqNJFtAPPmNUaisrjzsDfwUgU3UmxHbV3cmmPD6cUiWX5jkKnhtqAwMKqQddkkuKr3",
  "key8": "252AG5ce1qzUwAUYvMLzdsFJUepumgKHpUmCYD8GHqQZ39fZFd3cJACJVo6875QFmB9Rp6uZuYkBfeb8eqpC6UoK",
  "key9": "3JADPVPZGvVksrf7JwqHgeUuJx7edPcpn8jGGbiiXGCCiqgv6amWaEhFkqfNCbFDwUnjjVsh6uaRd3Tcdb4wdH5v",
  "key10": "5d8D4aCvbExETdHym5ciZmPkXdeguBAtBNPbpTiFLBpAbUKy9aWdStgLATSbjAGqqhFgyvB7dUg3UamarfXeRBVA",
  "key11": "4TPNuPfQAcyA1usJsvHSebnqDKbEykWCHgMBo8RkFxMoVz628T2QM8vP1t1SXEssxGzMuFYeNhVQy3DneRUuRond",
  "key12": "3XKQC95yBBS5wL5fnXUr6tFBHGbqpNiSAU4Bg7AQk4e7ivLP5wMfFpHmP7k6hVgh8ZLjitob1VTiLmSr9cMVwDcE",
  "key13": "wFgDPXinsX3kn62N42VUDgCUokbJn7nCcqAHYERo4L2q2RoFYGA8aUbTPtX7xtYa5PoapE8ERDPm9xW8tqcVUyt",
  "key14": "2jiNQ5r5vAm8Pxz3VQxGYyhocR5xbCTn2MxjUo5AfjtEhUUfmdq2tXzxWSvmgTtttvzkjbgGQQVoShPadHUoRwEW",
  "key15": "sdcGENk8UrRUwZDEUDLRhTnfw33qyGvsiGFo28nBfrmvSGfzXxY6BLCh7HWEk19JgQURFx8t3RyKPHybdJmbLnn",
  "key16": "4J4zEFntVv9Pt85tWfRCu94HPL9LHDCkNQX6j1nQSbSHVnWaREwmmVwbtoC4LfQMXP34ChEbR2foadkLkNDjWsPX",
  "key17": "4Yr9xdCHfuqU91vj9Q9Pufe13bV1sYtQJXT9fiB428qFsSpXgjybYGbs6VSdRAbug5vgX6EwQpwKpavdn4KqvBns",
  "key18": "3yCMt1GmxDngCnUzk8AhvQ9NDedEXrrR9gV2PcCBDpwZNi5DP53Xq8T7wnP1dYpBigVBDLUDe2GQSvfmu4n1goYp",
  "key19": "4vhKmfKRYveZKRs1UQ1JYGaCW1hkoMaAfD9w87JW8h4uPBQzURTckxemK3pTbyjX3aurYGvnbJM2QgQT9Bhi6hGN",
  "key20": "4NVVpBfGLEVm3VqySiKzJj9vbTywGkKxoiemnBKPPZtvii67HkVJPbaMiqv6E5G16dt64XFD8dmbGUCnGkDUxox7",
  "key21": "5CzfTjK7r7Mn7JxuRmRpbuJcBfskEbBq44usd7ZovS5JkC2dcPMo882fpRpGQm2a21KC4cvACLHdt5PK7fDsm3kE",
  "key22": "4AK6jzGGcAmCbdqQ2R6dH7hSAjpzivzEgnn7XdsNrgmNmEnhKepjnnFd4i3MwmcRkXkQwCNjJTbVrcdxpd9MQjTY",
  "key23": "4fxjK8sGtKakQM4RVoYJKtcr8sRzo8JCyxJCNeD4vQUpsvaMosyKyAzwoFRoY74EbKLR2pbMm7apWjrJiU73DvYf",
  "key24": "61rKkbrpJ4fcM29zQ2XEyHsfShJtU4ZhbSfx98gQNkALLPmAc7fKK3X87ZVafP779Fs28Hf5SC4sQL6zJnMX32jZ",
  "key25": "2CDvKsHYzVYCaQ4rzmRPWkGLE7sqRRtsNwUk2ZUQ38MFbC2QKVRitbRDTSJs5mmVUAxavCcTYhjALbAbo54gPxi2",
  "key26": "5w3h7H1pCa8X4xE9UATGsDPrg7YWECks1z8tbRXtwYSRmx28MhvYnLbUfoVEkqWAPhkhg6yBx4SiCgKzd8YLj3XN"
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
