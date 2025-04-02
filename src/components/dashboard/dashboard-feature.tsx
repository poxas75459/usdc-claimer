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
    "m2ACXBsLcaPD3dBGEMjELmKWcdaMKAEuhcGFBJBsfuASDscaHYyJye4WYukVGU2BcCjpAqBaJQV4QxB2PQu1NPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdQSnbVReCKP7f8MsF4oqqxi3KrLArw1WB5kojdsCL3HjY4FNPeJYDf59E2Ezs29JNG8P32uHn6WxhY7r8Uo7f5",
  "key1": "4QM5tEy8jxwnNtqh6pcZe7kt14WWtasmiuEaVtnXn5wN8xHVFRQ2osB16BPQLFwH9B5FQjbRHRTovpVoY7k7XNQ5",
  "key2": "2mGZ6QzSrt2Tu2sFKV42yddttjUpmayyaobTdPg9MzRCgvh84eYJfx2CHotMTsouehUgGU7NbPuuvSmPVGzcRjKS",
  "key3": "3NJPjF7v7bEzu2vjWgC8WEzbRsexNqCK5cmaww1xpnkU7m31tvHrnYrVvUHvRQh8RGGDNZHxLHKfSeYCFxU7wsjq",
  "key4": "5HnDtGMALqCghGwFvdngegetP9uzAQdhLExpA5vtBDFy4ind5YVahCkcgC1T81vdey75d6gn26gW8k6HUpajX3my",
  "key5": "2EpVWL4dKG9NcfkW9RvyTaDb56KWdgbwCj45fPUJX9NjZX5KaMBrNrTUCVHJPwVdmFrNRUkhnX4vi7ZHsRjm5uJz",
  "key6": "2YVAxj8VWxqXmoKCkawvRPARgpH9jQTfCBozGSjU8J5TrYeuroZyj4eNRVYeK9aTBpkmekRtfrDqcWN9kjJ2Lxd6",
  "key7": "4sbMhmdCNuGgQUxKS9rYBiGYTs4dhTBRu7CPZeamRqgKW5cmrbYB8CDjniA6jvcr5XKTsE2B3DvtJknP5UMaxJKm",
  "key8": "3giX6s4v6g2TVoQrWzMzDwsrJzdt3H63q773F94pjeBSNTmgfKmdM2L3VrtioyKyCax4RdwqUXuCPsYrxxF7EuT6",
  "key9": "5hhBXqT2ayqBcC1H3W56Y1XZEsy3yyoKALbt3Dd5kcm2tFaKXzR9roWUAJss4oWN3bhYtfRX3aC66osjLgxE9Ewa",
  "key10": "4RCSkjLeFR8HUsHinsAfmtLi5imCV9u6Scm1S7fVR1nrtr3tcDemyQkhon3eHPUad8CHFygmoXRU3cHADjCbKbye",
  "key11": "hPWiSsednZ3ar6XXsLkvUhuP9Q2Ged3Ve3YiR6XuaWEv6aR4DB38KbostpCAaYnHpCYLY6RJ2JuFCyocUhHJWRF",
  "key12": "5xae5CeJCdA9qvMVZELd1MNvtBKKqDnvtLXdQmrr9rw7WrHN9BZBjnsXDMYJXi5RqrETSBsjumkjMCXbbvPgP7gU",
  "key13": "5Lr83ti9VQ9vB6AUVjAAXjBERYYNxS9Saz1XCkTvGTpbtbqCcjogS11y63ASGdJRaiH2cRDhs3iZq2na6zsK45z3",
  "key14": "2hWayKNTJ6Vv2K8K7bRnUV8yzgRf8Z9v9Dbo61beoWdSMPca9XviYe2aZ89oQEhdf7Wn8sc6ctG1VVYUUdhsDToJ",
  "key15": "4VrUwqDj4msHSR2UThsYiJuucpJBSsjwAHYJLy1y6DzJKizamZ8BuZrotQjoGEM79GqgoMrcMaZ4UCiSbcBs4ecZ",
  "key16": "2j4zKXRVqxn72rmZDqXHU8GwfQc1m9LKMeANVVJLzRth6G3bJGkDJVdrHb9T5yaHpjzYM5B7JK8Q8UULuFgPxA4M",
  "key17": "2E8sykyNPSTvLPkw6MFubG7Pz16ywWCf1rnqPAVCSYrfZELz6t3mXeobvdcCF3gUDaS85KZ32TWMTaZGNW95qPCf",
  "key18": "5cwMAXHyaxyPCp9bJS8hf1QcABCcN7RTPfLzKmWNorXA16Gh5aCaWpfPSizVWoog4KHSBWuMMYNC41aBDJcR7oFP",
  "key19": "yv6M1Byf4c7gMNSkavtPGaMcoBBwRKXxnyTRKiCvyV98AbuWMrUtYGB8xB8JzHAHDWvRU7YMBCSJReKd9oPJhG3",
  "key20": "Vp8g8Lf3QTsorzrn2LTZPd7hYTbJScDej6vPzk4NWHosy9ri2D1G8ohNtgLvAxopByGW2zCrXUzVG7i14GAi7Wr",
  "key21": "3F6mxSwoYctvhZR5wEfyGN1KC9nqSmTgUxAuaMkaNpFAuxDMLV99XB6JTYhxwduMCLTtVoh9LPdKpZLxkwEK38tS",
  "key22": "3k1UjuTcswX7Z6fZX6UWCMtm66x3jB7RL8tCkTJjt5Sa1aeCda1Y6BwA74QkFmWikajpnB45HLGyLjBPcNLzVE8C",
  "key23": "3iCbDNLQAGCDFzZiRuyUAkTB7yskxUf4CxMVK4uDYHEhXwUyCpZbDZFHW7fviYjBQv9ErH5RjyLUS8dNq3NnPFq3",
  "key24": "3aBgETARfMvNFRqhoxpKsQRvwWqnbLA1uVpZUw4FSPR327E3xRvhDPZqjWMKwVMnWHGugmprxwq7vZAs4KJbevKw",
  "key25": "5Do5PZG7PJtDbAQnu1Pfngk81Xe1SxnaSh6DggmWNkC3ok9pQuMvJVDZDwiBkfAUFLvCq4UeSuX5x4hr4zqiywVH",
  "key26": "5f9houRPxLVmo9SNpaUosTa87YmiNEnHm1q8WqUpL7uTYMPDoRdcRBgCGwKy8gmPyPonyFbBhUQ8TYMoi9LGAG6j",
  "key27": "3bZzEuSgjQEYAYch6Vx819bY1XCuDcX5xpgnf25VeZdr7D4mh42XKXWMazQ5EBF7GTjHmSpdNb9CiWvjpCnXUxAT",
  "key28": "3YPXGwUkCuFdeAg1QPQoZFW3T7YP1PEaTwFLgMmmB2ytrqpHssHu1cJiurRYXG9Z1LJWHyshZsQCDcUEiHQT7bKo",
  "key29": "42ZMhAuLj7qyZF9yp6dt1Lm8m9DT8ZNiaEfKpfi5jB7SfHvFTYJUKBRyphqnCS2rJkfyjtdFASjdivisr4DrKE8B",
  "key30": "2L776JpWehUZVx5g4o4dJyuV75ttcfg2QRNbCLj7rhAQhFF7mPtG1b3QEd2LAaQ5vGzieQHa1YGseAvqnWNNjrp9",
  "key31": "5ajfSqub7XdfCJi2wtMfsLGxDvt6EpfWJtyCfjQEUYMVZVfuZ21BfV8X8kQfXv29asp5xpyAYXH5FcX735wLQMkC"
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
