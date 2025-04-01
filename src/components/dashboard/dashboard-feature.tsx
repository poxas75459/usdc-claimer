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
    "5h2b2SeTjhTvXfiqRkyVgvtNnr6dR1TvErz3AfpKHQD39tN8omx2vbxUTGzv43mt77hJDqy8wPnpP4ouTHU4hUig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aY8XTSe5HypaEW6SfVDXoDWwfeBLNiatLkFYboBy791T1ePrMFXYb9tVhWiYF2ECFQXrCCfXPtqzyUAufHKJB9W",
  "key1": "4H2E8iL2cexCM1x48iqNCGGr3YGzVP8UsgbbBsBQxJ19KfaxX1jcNvWrpR2M7jzeys1nq1ieoRcVEXGJ4kVYF56x",
  "key2": "2xngeWSY1485sp6dEdhDpBAwMkgYpkUqhew72oYcTRfjDs5xznm15UfQHGkVtQW7ppJUbfEWmdqFaEGLuoNVr9jv",
  "key3": "5nirYRoh1DJkHCmHSHga4T9FH7cUL4yetZr11kqmfrZmDK1t5PcX8AUW26SCpJ2PhApd22pED5ME5sxX2sNtgL1C",
  "key4": "2WWhxfPCV99E2puXdX62h8o6pbdt7xTY7MHE3XPzBPr4f14vaAiBkpJR8Yj3haANa6ncY4k7fNGi9WR3dmLDx1zB",
  "key5": "4YxEtJDVBfABECLczG4yLj22BAdYANgBxHrjjiGjwRDuoMeghjVx3LExYb3yo3AFHXvtbS44oMxQQFvvZZt44mM8",
  "key6": "3CWjpXpv7XjLDQejLQrng5ryDNRJcgL9zap5qm3hsMNyNLRPKnjHBpFqKNCqdT99XQBcsKKCz3TouhNFZuuMAbc8",
  "key7": "N8tpLYMffYKygV9Az1UWhcXgSt4h6bnouQfuBAYprVmwuD8w2piHT3yJvrEHzPBhioyXuB5EHknpAvMRP2j8iqQ",
  "key8": "5szVbpL4jnjKPzCmHbnbMLodK4vBAZsD7wZid95J95TGjDGNaVaK7iz2zDUTahQiy59NAfx3LQG72P9kP3mb3SvM",
  "key9": "DPZPwS3Ng19ns1KBe8UQQxabaaurogfVJfez2NGkBomyTaAKGVYwMmLjxCnH8SPBcXJ1ceYLg3myuVtjar4N8wi",
  "key10": "4PjxoHaHz2rYCeuvGXpJ5TrHSxMLM2CDFir9d1d2gBtJq3Z5oTeh8kcqFxWwcgrEQfEXc4RrhuBKq5veU4j4GXKR",
  "key11": "2HSZV7196ThJwtzcsZ9HMCPfBc1r74zrFLiBEEex3L4Pa6VgKNS86A7YgZZYDuWpvRZNAoSjeXGKqDwMZJtswENF",
  "key12": "5WXT8CUUxMungG3NoZ5dT3xuKAk5zzwZ4WM1KD1t1poHYUtsA9KXnDbB2V9B4spayZboriaHgLf5MUnJm4v1RnQL",
  "key13": "3Vn3ZuvPW8JQJV2kPNSggkKi8qXzhngcErpCLn4kkyjA3PUvy6RQdMjPPuHMoLi7s8qqyw4x9ARqdYdaqGzFsm2u",
  "key14": "25FwMh7yUP5hgPh1JjMYJ8Tw6bmK2eLdQPj1E97DrtLYeGepFN7BPhEmfMYxTxRJjGbVMSS2KhS5L1fCYMgk8R8B",
  "key15": "zk1eKwzuyTqYdPe5ukpqR7EKrMHbgoevD83dcdNaz1WVAnPUTK3MqEwPvJ9d9PBQHqqokQxLHWeSEk6ggHL3UyB",
  "key16": "4EYqGfaqB6PNmXSM2XW2zYzMJnQ7uUHgAsZVGfWjQhVP8n4dTF3JJ4EKFJcvEiBBp9hGYWChJsgS9W14ewVpErmK",
  "key17": "aREVRReekD1V9qhxJMBL6ZpPjeoid8Eu81jen2jay5SzPUQJZuJfCx7usrcBKiBQUgqQFijHx2NPhnXCQ4ifduH",
  "key18": "3m8v8Z1KkCvsZ7iRZq714uAJRGF4oinGBsGfkN6B6vcZJjWs49cF5pVRe4rJ4qBaqWN4DSybP6KjJ7yNBPksDqhN",
  "key19": "5avLhrvUJ6dkc2zAaueJWxzYghxP8NJeA3CEDSSdYAkdnAsCVPexzg9apB4TJcNvVgctVFfCXMdwzAbrq1tww8G4",
  "key20": "3dUxfH25G28n5H3idw6GTkeJjsaxcurs5uof4aBMUL8jF3FrnXGTwHXJZwbJxYUqTHWjkowTtPEjeSdDcDaY6JyK",
  "key21": "2Wh9aQyQ19cEWegajwNoAeUCetzuwE6eRB5VsFrji3osDRWMGzXMQVUy13XDEjSYrkfyD4g13M2pxy2qNZEj66x2",
  "key22": "5u9S295gU6YFy9ruXkDVFJkU4cfp3GwN2xYxqLNXps24rMZo82Tjpf1PfRngunZ7vrdDqHUdrdWE7vAVmbnFqpNa",
  "key23": "3RmFE5oNgp8VV8TCabuVCENrevy2nkthUQsibWnTKzmqcZViSnCyfeHjCSykfEqvcro8HJt7WryCBQGDmgmbbdoS",
  "key24": "2zDwBaLwQjX6WW5dGYgoncv4dSwJDAzdn7Sd3MGYBHvK7jB1yU5p7rv4Ue1ozAESa8kuFMABqi5TvrHek4dddaBp",
  "key25": "QsUCRVCghKjqEhsw7qrz4iFeW5XCCEXu6v6HmL3Gy9ycB52vEx2GpUV13xYHVgTv6UtSiHteEhaXSEANz1iFLPR",
  "key26": "2dAHDWJcxDx54UVVzF9MkmuX53fQDrTVkpsSzKEtkX2qpPPHVNhtXK4HFzfjYNzW9rPv7ZebtV8kvrv44JqN4H7o",
  "key27": "3SsiznybZ55iowwChABfePcD8KhzFGriSJf1YwskCixwh4uGRyStHwrDEYh8eTcYDHXu5v5aJPwq2hurr3tUzau3",
  "key28": "3GjTg6gzuQMPzASvMZdxgjycMDdcUgmv9taMCLeqYJhduSbWvW4epzBZzUb1kaCMrttvzFUGssYeB4TzeQteHLkN",
  "key29": "4JbJqVEScaKes62v5gpgCAEnDPw8AahUdkb8wWUmY9Ay1DCdGc335dNEpJdrnt5PBXFEt5xsJSVcBB7ENFsa1kr8",
  "key30": "394iFa7vjFjfsXSjWbVTWwaG1U4rMMstcL5f7RogcFZM2QmxqknRvqBF8AC8aGBoHFpn5CXo1isUSFhXxjgvDCaR",
  "key31": "3R4XQY7P8GXs5hDzSzWC9bE48t25o6vDDcBS5MAyx3DuTFqdKa2LEST9RgGPTo15YRqDLV8PHnXgvPy17fCCb6N5",
  "key32": "53xY2yMeMiH6bd5yavTbxE4kt1ArtgvNjqovWZH7xUULE9jkEdp9k7qdt5rYycyQzPjJwnbvkL1MZfsNbS2YX5pF"
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
