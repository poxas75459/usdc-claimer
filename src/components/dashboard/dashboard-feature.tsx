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
    "5sKBPKYnfkNrmcaU6X2k79zS39fRh6X3to3ztSssihk6DuELo6DQcGRftaGMqucTmjcwTN2cCPHvxJmjiFoV9UEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zeAynSbb9yo6JC2WJ1GJJyNktx9eZvqCCkhng9DNGsv1gy6SErgdBrvVoY6Diw5cXdT239Bxz1seaMhgUtYWdv6",
  "key1": "TbvUYGJDB6BRbVb9M1hiXNjvuXKkGFbtVvh2fHarADVup9R1rnAJUY6amvFBCS2qCViJgQVRsScno5RkHWeusw8",
  "key2": "3Srw9coDSPT8LQHNcrAyUE46bAVxN7GNroJz91N3hDVg9Xc9Gv7EgBtzbby78YEKrzpE3ktWcTcGAg2zk5txDpZY",
  "key3": "5mB2wDPCQp3jwQ1DKB8m6KTtFBvnHSRpbmb768EtZowTkam7jPEWZBd9ssVqQAE6TcX4Fb58a8oskVoLr8Bs3tKL",
  "key4": "57JFKtprGzErP7F42jy9DidDknikphpJqHHJb6CiXPJRvUHairkHgYNZzda2RiQot6gsECTftRdNQSDN2stvubYE",
  "key5": "4roY9ctkdAzq6GLWjzmBzaUHpbw9vcmMTYit6GunoqeQBmMcV8A6L1gX7FLK5gyHAgno2knnqWDFsGzz5yuWgFXD",
  "key6": "iayv5gNwnwF8SZdxQwxV3MxAqTEaHteZJ191nEXwkkeNAngJTdYrfCqsMC7BiXQVEnq4EpbkZe37shZ1mEc9wZY",
  "key7": "3UcpievUF1Y6ije6NUzcTEosm9KmsTMtYKeQkUSG9WLavqEDpUpzXUXmz7r9sWqEcxHjwV1HGyBMuesBujmwjV6q",
  "key8": "2dpGTaSX55kCEzUxiJLETFfHvdfvsXJNzA2T8AGLqMQbhowCnmH7ju2hMwkopUARUWrpcDDmdApJu8YWtxMDPxPa",
  "key9": "5SakBuhoNxHUDV58r8tV5L3z6XrX5JL6nuV5BpsGAEv6b28STBqi1eGNRhSxcmHaaVshFTZZFJ6f8LAV43V3bDXK",
  "key10": "2KV2Ciq8MB1kQvkKuH7sAUzZFTYGMCKyRTUdvWyn41aRCJPw5JtRMKUqYhPDHWoseKhrqqsypP7d5tHMba3DZhMb",
  "key11": "5NeoZTqUpDtZoVbNha2WQwa8eG9P7fFRtYkEyCfkLA914VZUCKXSRD6f58R57yJt6CeosdWceyurL4iUveVQNbPf",
  "key12": "BaUhYdmZ322mcT2RnyVruCT7SwKULZSemU7EYXKoQDhqaWuVtM8LxUTnj7v2LBqdquDVwJxHFaswcewGz8dF7CM",
  "key13": "664RYA9nXsB89gVvjGQae1syMkJnZRoBgTnqp9Vb2ELP6JzQs9Eb76FZ8oQNtmmd6igdbWQc3eGLpkZbJZPcHtew",
  "key14": "4cmJUwQNDKMCb4BUprbHTpKDmhFuhxhrSXebX7xjkU7jYNvg7LumkuiESeSefAbZ1E3t17sy4EeMrn4fVwgJFocG",
  "key15": "4SZGGufF3En8m7Y7pDoZknBRHz7yaWvDPwZUXmwmDH52xSTDfZSXF4V2tHT9cLsN6xzNffkF8rSMst6omKfc8iUp",
  "key16": "JQUHr3xvKHDeCXe1WbHMVkiJZACoR6Yt11MKe6nx4iiH4oLreEYZZRteXm1eD1pwZfJ4genbVkxiyy5FSPa329T",
  "key17": "2YSHNusgbe869YzxdPPg9HkFPRxW68NT7xwhLehRyT8m4Dt9RrpDLiHXvmmZeCHSThbWGNsXzaMap16cdwW7RLRa",
  "key18": "ksr5gL7KEKPLzDEvjhcr8xvq6vx8y5XNeeKjZMFW2MtZdotiLFdSqBTKh8kNT9MYF3bVx533smLLT1PR3iQvjHu",
  "key19": "254FH88LBbTMJ8JssNcabEw1w2M6Vhgs4R53nRT7pJ6Cn4PQBcTNRLFLWTz5jUHmCWJFAH7aox1SAhqffEsY5ujv",
  "key20": "5ip3ELJVAYd1Y17MJjvJTgjGMdoT4DWZ9pU1cvY5zZt3Qpr5MAa1bvLzE5TqRw3PiyvLZGJmqicWaHd4PyS21RLS",
  "key21": "32P6Vu8bAAUDbY7o3Emtu6chV5LBW4Gr9MGW4guZFeZHE874qEcNNkPDUtHy7KLVDZPSf98DJaS3U5WFMSx9H4aT",
  "key22": "4XXYpAs6mjhjSwTHr8m2ynqKSN8r5FBGUGr7aw93gbbmXXnYLWttnrFbUSoHrMaGqr2HeSbMUEaFPoFiuegNRDS6",
  "key23": "43yZJG7a64WBVqScRrEioXmxsrGyd76qzgpnWUyeSECH3ShWCM6EsuUBVmSujiKp6qxzW6BMfktgXKBcYveuxr8m",
  "key24": "3ACpDEyBwHeyD5ga3aqTe7BPepNnfeqCMKMNH7Cicu64NvZy1tDHYAKKfrctAQ1mJoHPb4mmFT8wvrhGbnuZsEwy",
  "key25": "3d271C7vbPbK6fKwQgFbzvr381yCHD53cKU6LZABSXcSeDLhoGpYwix82u43MZNFu2WjbTpbEH9dsRMUCp3z25WF"
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
