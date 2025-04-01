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
    "VkjLssxT8pTWQ3SbT23UHLtzYv1TAMcNbYFDNGHziTkVUYUQ43uaM475myfLTNkBK55xpGJBwGjFHsC7uGQC1yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptsVto1dZpwdkL1WFvqi6k4VkW2CE5N7T5NvgQPfQyVax9tpLqwKBCKaqMpGVWBkYDfgvazjexBfgn5vrB5JeHN",
  "key1": "XDGR1e44P5BJJoTbCmoTiU2Nh6w5CnZct93np4NSGupaCcpQKn84ob1wfJtTL4TSQpxNkJa492TVghwqtqxZq74",
  "key2": "4taNi9HBJ4VifBH3zq7XZmHUGTUfE2FhvNxQ2dw1muvLtCq2uL3fWKskHd6xVcQuwpwUvJXpMi5Sf7DtyxXbMsDN",
  "key3": "65f4DVyajUfMbnCDPnifipGAFWwTP6BoceGzL2AUfRi7TCnCdSw4M7bEwH5r17R6tmXDsnDyS6jB8632KbCd35Gd",
  "key4": "G25ESUWqWYsS1fge4FSVqnhJ98DeAnFkcXtoMUu1KQ7NpNVTchQddR1ngEDtgodKCX3PyWRnoJ1HgbKDg23tYVy",
  "key5": "5KJ4G43FpVnGYS57SvQtFxyXCSd1mEMDsq8YoCd9vBSERsakzPA3rN3dpx3Ej42CuyhqFVQydWG1WRKVc9h6WtYj",
  "key6": "5XHFHzYofTAQWAtnxpGSUidPT72goJYhNyjnbtubP79QidojmaUjPaBAd3VWUNcbBCT3G8q1B71FuD5vHPpA1ZUU",
  "key7": "5MmPaz1pU6tNyLVefCeCJCHmUBLQMrEHDVxJaP47LyvwCq4hVFCcacbuJa4cj7W1vXhA5zxEMLSQgjU71c1UrSW7",
  "key8": "48TtdSHS3sKJmFkJhx9zzYo9C12mimyY3mVXFGnqksjHurP77mR2LcWb6jXKgVoT8neVqMyzjiwFojwgzi1YQC7e",
  "key9": "52j8FukwFC66Y49aXV41ym1o7rXvqUMG2z9etgydDd7dxrzZQbsSPEcdSHWdkQXbeXVuukgZDt6MSmLGMHnHu3DL",
  "key10": "61gDZz8fNTGPbuUiR1UVaDPnZnFaNsEvWZ4FkG7tyyjxJh4Whc331cwmjf7oVfNUgkpL3PTtr9CdNWkXiZpwKi6d",
  "key11": "5Z7nFhF4n5FxcnCBTPTLpQa6Kvf9k6vhBZhz4njoTcrJijehzTtLtzU8FdXD4JXYYNwbPD21B5Soy6hwZdd9LssM",
  "key12": "oYGjqt7Wnzbk5kBfmMyaisxp4DjsK3YA7QY1RCQLyUE12H499nrBwrWg5zCdyVXP4a9HvcRV6ixmkBJNVhRaCRk",
  "key13": "3KixnsMwgn6TC88s85fF2YwjjnqVRkGVBrP63ZjidwS5qDQQRHWqixjQJDtMmC5UvbRvdbrWUTN4aYYfLNeFWVcG",
  "key14": "2V8KueHx7TDcn7khTej95DThnwMZ8ssULyUEWGciscbZ8AQJwzeGR6AAwchRPS9ceThAmhbo6pSVAsyi7ZUQstks",
  "key15": "PF4DC4uQNtM9rtG73cpt6nwAGgMBfYxCNSSe8DGE3B3AzDnTpdyxJ61N7b8gmV3dMu3c1XA1UzQsdRSLqa35zb5",
  "key16": "5HTLGQTwDrJmMyb7tfx2siJdH73inCPHEEFv1tRkDJXqR5PuGpdHFR9ZLA94Tv3M5JwRkhJVcHi4xNXFxvQSGaoz",
  "key17": "5AcJgaMYEM65YhezTncghJE6mM9Hgv6VG6MPiapcyLpMQUSg8g3Ky5CXZFseGH2pN5sAxSNr1hEdnhgeTGnGnebh",
  "key18": "2khbqfzXH5mzuCMbRn4ng5Tizs3TNXGZwDXX5Qeth1aAUCyE4pu8d9nMCATDgaHVLRMP862SPokivcRBGEBYDdeT",
  "key19": "3EZ3EiSk2tfiZoemfZZYka11Nco5PEFKbaE6zQ8pUc5xqZDNADiDeavRtj2LGjP3thZTbjQLLD5EiqmCDNHDY8ZH",
  "key20": "wM8KPCYuL5TV6JMikdxsSVbEZH66ygcgeVMARd3QQift59qbEHseU7hjSq8p1ADLWn8LekAPjnLQ8L2rAAZEFoR",
  "key21": "39gouXmg6uxkKTaoKTTak7dJ5tq7FhZ2ugab2azAvt6kiiwJTbxmnaKgB2RSgZTZcacXpzDxu67rYGGj61NBhma8",
  "key22": "2Ngi7HJ7cdvcq3eT13YtrXnsVRVLDLV9SYzfjTriUhSS7G7o87h11jLiLLX6mcrTVVvSnFEM62FXbbs5XzBXJD56",
  "key23": "RT4AknWojwkhFdnHrDykFc5Q4BnHacP7QvvbXHGtaG1yMwmsr6N1BcE2xsCvzdMPz2V8Y4LBgN9FH1PwYrysVsM",
  "key24": "4CKxpE3fH9coGzQ9Cx6VVLEgXN3BT7hL9q98Gb3dXGPTcdy8Bi6efoL7ojqqPGhCuWD4CxQLV6H9gnRR7PCABxto",
  "key25": "4Awm1KJhCkEBfzNGsEJG9k4RuzmKWJ2LR6Czb7zCxdC2m8ksK9T1VYLX4MfFxfQUHa1G6PQHWqksB5Mb6rp35bdJ",
  "key26": "3hxdYb1EwpKLW9hdpJk7FKN6RGLmxjevUHiuk5h8uoquWuzfaKkdS7cQcfuED4PTsGywDCQQ3Fw13SosrXPvoGoz",
  "key27": "32rPT8wWB5QmKtX2Uh7JChYX1px42cg2wSuRAQxcPsmfurZzyGsVKaZ9wW6jHgrVrEeHMjsGzCJx3gi6hHzZgzt9",
  "key28": "3EH2s3rroccomWk32vHjgp5VhfjV7zrLvuQ7ojcitQjMVCpM23QmkUzhoaJ2yg7M1ARx9daXMNbREUAoWWLbuyo9",
  "key29": "596ULr9UkLsRHt9yjDtP19yPKuMJBueV3UKr5NRe6Pi8kfGF6NNaDWMp35mT1oFBnYRii9z2wTi9x85aGU3aozDo",
  "key30": "3yhKpbYPXHLBaGnC8DTdhpcz2cx3UuLxnEPWg8oF5cvbBXuWZv1HmWPGwg3xqJGzgUe2jxJxNWu8NA1kPV3XHc37",
  "key31": "4oFLy1e7XgeXkruiXVpKvsX2dHMPasaziSAeH3wRVbD6mjbmfiwB8dgE1yncwAHU5sf2Juc197sGzLnC8AMaajag"
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
