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
    "2irj6eQj9n3ss9aHqspPPkMsZuyEyKTscSwfd7u6q1ufpDJ5QKPXMdaVKiP3cxqYPQBKyWusFZrWxzVKhFtZ6bYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M32A8rbeS3eyCAhQmEHUaFxqow8KLw3eb8swVwYdGdETYjJs4L2fwEnUWMRM4QfbjAdVKhcwWzXoFFgU15QHR2Q",
  "key1": "5wnteVWbawqYem3yRJBs2jLxFeNattWD3eabbZhiS8jKT8JVgWb7beWEhhumjBRYvszcMesptHi3XzxtCmfJGcYS",
  "key2": "32pKc1F8j5tQaVRdXJRhJLJQqvnoVgiTaMTMuJbvEXkhdfvXLGxUtS1JGcUDzpLtcpR7wSU1SaHPiFvPTWCUMr4f",
  "key3": "5MZHsuUD2y86vKdJWodoe2hKCbskzpurLp7V2BRiPZmXXmMgjTUMStvS3NQCWzGgzY4ECG1yHD2X5kgw8jCitnEm",
  "key4": "Cqfk65TP4ARSg2QNA6wAcywXbePtX2o6rLV3zhKfakyHa4GVaxW156CrL3pTTmVEkWsfpB4TBB11rGbEC8uoJRz",
  "key5": "4L22AseuT2Yfa4B1hpNpFfvLSYWBH3tE7royfHiiLTbp2ouraNqtp4Wvt9yN1EAgNocSeF9XiwA61Jx9knboBiWB",
  "key6": "2haS4s3dqNFuMaee3tiwqzwGc7KXkWqkznf8PTGnth8Bcdg1bYAhW2dtx1nxwDWvRrWB8nU1z1utrWbxsopEPndH",
  "key7": "4mMnxK8xaa2GAXTCfQhw2JLEwqjt3EUxcYNXP27B1YdmeGfK1HNKiodQ3wmNEcSWPKQ19WYmX8AchZtMtTyNe1o",
  "key8": "3r8f6Z9yt2TLvTbeztX8esKw7LY5cujnRCKRfhB6rbJenQYBzeR3uxT32mfcDYD7C55BXrd4VcjzATJ46Bnyd4dq",
  "key9": "66PZWr1xV54pUkd4FndeYMad4SZkJfNVx3MEAzBZgF126xLT56fZUCeK5fmGpkYPkRLLqSScizBTG7HXScAr5i8s",
  "key10": "4cM2CMHLmQvJPrSaMvyF63gJXL74en9GjM4k8B8pg6ZgLLm9b4FEWmGCAoNwQD9YeR66Nz8fhUderStRu1YLqPGM",
  "key11": "DgU8Fssenwdz8RYYKnofpeTpMz1dNa3gFggM82ATvBwwfTtp7P2fbQzutFnYAA5hpVUoNjetFvrVbEcNS9JBpiZ",
  "key12": "4kQboWo9YuspxiQGbTVrv6zDu2KcVcRD8FZvmQihXWExFGVcNBtM4xFc1co1No8VUVbmn32E4uDkGqWvouff89DR",
  "key13": "TLg6oryLJYM6KbPcqiBWjTN98d5exvfe9KM6uL2qZzWSd5bPcHqdsbUntJ9KKLLRnkYMBEXhH7yZBs8125vyCaE",
  "key14": "3te6NMcsN7EXvfWPSoZKLp3uv61A2vyTSSPBTaRuSkraZdnsXegPxE3VrZvSGo4v5Uvd3YiRuVarUcfwkgVNyYLb",
  "key15": "2ZyK2pJ4nrP5zN2ztQD9UTo3LhqhtDH6PvMh2eW3JmKsajgbXs53oMowAhDfAV6QbCWhLosBGx4PUACziE7j3hHf",
  "key16": "4VjVwdzCdPC2h4C1Y4Swa1rc4jFCnXDiUHE55QbyGaAD22EhxS8ppPhuXjPq2vGFJ6DB3AaUYAz1SLuKTEgVBbdm",
  "key17": "2fojm6Q3iebd6D1vGsmTtAgCFiECvrtuisAeJ1YLdC8yGpAMhcUHLeKGkmskDjaeWwJGvS9uj1GqhNSa417sCPW1",
  "key18": "4SSN2oTUw1yQMebiqb5UgHnKzg5wqzTqBMJfY5vAHLSst1edBEU2iQ1ELFCGqcSJ9sPQJ2di2H2NTCeTYuvf7SMS",
  "key19": "2bqsqdDfPF13roMgRhMwGnxoGi1zhD4WWTbFAYuTJyTFCqQ6wN3y5gXD7imtu6R5TAuEqr2EERsppiSAmLSY2RCv",
  "key20": "5eKRChSLreSDq7Eh9hAQ1NyTbw1rL5EzLZUVqd9zzSktBneXvdUj8HHiedjYaYbuLqMHbWnUYB1tR7nBkuPB7Yr3",
  "key21": "43t82barKGcLFc8a5dgKMpyNGDGCqJwrWZ7SKB9EHGz2UAkFsFFb2cNwppKRs4125EcPfvxz1PAm8k4zsviQusgN",
  "key22": "3Lamw6svLZGn5yzA7P7V8uXSzj93egRvoP5Tx8wUC86hCEgi6mhb1sK7RyAoy3pZ2Bb548njMKHponS7arvks7bP",
  "key23": "3k3h7hRFzDg83G4SRynBjivE9vU2qQkGpkEVP4FvTMrkzskPQP67gaiMTP4bBEWK26yf9sULLsQSSHy2vEA2sAJa",
  "key24": "4LuunKYjkWEuJdQvzHioSVXXey54Rfgy4CkXD39BLFjjqwoLBjz1cQU6rC1MdKCJqiV7iSTgpX56mrB6Q7TFYVv2",
  "key25": "4dD8ULefHxfL1rXxmW5y7gL5qjippzuoSWaYco9vx3So7bhb2u7UWdrzsZxCSkn2wnX3UbeJKFL6EuZEFe75irCJ",
  "key26": "49yXycP5xf5Z8HQ7w1GMYSmExctjkgxkLx19XaaBjb5LUziUAA8mi6vaKABMrWBFFQRot2eBxmtHYJNoppx4mozs",
  "key27": "4bF4cpBLEXp5iV7cVHkExnXv4oDW1NiGLGbpHznoVbq6z4QdEDtcQrJVF2ZkLtNnn8DDZXFkd9Hvy7jBrWQK4WXA",
  "key28": "22fuCfgYhSzNAyosf651nbYCFXxio6VUms4LUccaocJnMA8nJ2rveZiCrc8dbmohQVoNjmNBXHuEamhUy41qYo88"
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
