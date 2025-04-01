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
    "3QmmFTtRfBczmjrz76kVGdr1yDxmJg4RP93mUzvrkNLixnphaWhxFGSHWpa8Uy6LXRtrFbj1LBPJzNwsgeUEJWq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofCv2bZEzE62cyr3S5LZpZD7dZve2xGEW3krWwyiiiogiBzUm7wsveT4wWGDPQVaZDu6e47T3NkghQb1wRA7gsM",
  "key1": "2dRzkcr8C1qDzRwnAxq5zghHtpJqnD4peTeuDFtREpKMqpGdvbG5KjGYEBncQyhcGDkuAqdjWbPrCg6Zd5yA9QH9",
  "key2": "52hU683pPw7j8n7MnwYbwDFgSxUMwBVDQ7Vf5C1spAiSQ9vZSrsK6oaB1bo6nvAF5psWQZU9ERzqRzQ8y64SHxAC",
  "key3": "4XJ4ENqngvzXvE9Np9TEadcQWTU7aYWbvgDA4gKNvwGV7jCUuTpf2q8Zvjh32HCNBNHvDrfrXCk2gPRNaCSP6zw1",
  "key4": "5qG2UtT76tmpJaLzW79yK97meoG1RrQKbgDEyGifEmXjmRNCBbN5av5WR2YZ9eN5G7UtZc8gVeXn4k8a8SU3bBsr",
  "key5": "2WGaR4PmNzcwsp8269qRxN4ZgbpkAa9z25BR4dvZawE2qAjkrqG6WTShFudTMSPsKMHue7AW43dh5DvkgLv5gRoD",
  "key6": "5dXpo3GSCrdDVdMzgXwncyTmFJq2zuheE5fLoceu4oT6AeTHs2awEZ4AVaNMrnMLp3Lfg2pwndp1NTbqBCVSyc7E",
  "key7": "ArFMiXW3HrLJpjr8fKChHh9GxfDDyRBwKk3STbBEDN1SZcE92tgJ4A8yyiurcupDSfPZ9fENotGGkLb5ufNWymU",
  "key8": "3mitjJxZahKmhzwgG7aPMUXiVnAULSBTHmiHWU6BQV7g9nZaUR83AynoMBHtxVMdiM456NH63z7uaqP9mQ5rLB7D",
  "key9": "4mfuTzRxts7XJAcStJ4jBXbAivvRc2zFHBdm4qTwSfb183ZEZApnjTTj4QxmSPSL8bYBBqfuJHb1QitA5o82Ej64",
  "key10": "4vK986kz2MpeJm43GoGC2WV4r9593nPrx9xU88jzbzxiZMfCAFjD6oL8akzbMY1trtvVDvh5Qh8QSxfsEqFtHUKZ",
  "key11": "52YDXZZrAn7GB5j2v8h5Jrc5YrEt2pc1XjTaMWngv7naEWNpt5Qt3zj4mxWep71wieyG5UDAT6vaQbTXftVPVGyy",
  "key12": "25ViHLJKWy7SpryNvG5K62ik32kTsBGmVQ9b23QatySqzXquu99Vy6eKwf5y1eFN52e9Xhyceh7mEDA5CY53Cv1g",
  "key13": "2ooS8vfCDx2fU78859oWPLUKU2nJfHGXBLnyijhLcTo2ydbb4AEuH1a8cN2bRNLV5UjCPVXbxb2t9M2o1ux3Rz5F",
  "key14": "WyXmKSbZMZ6pKr2fz9Xpi4pV1S38vuj55YRWRLJUEV3YrXa5qSrdrEupZNGsZZKmBtHf4BURRyrG5Jg5gNisRas",
  "key15": "4om35xDo3wDcjZkCz4XdPk7bCdeyWZMqZ4GtjS3f4bDADLPVstKKdgUetLDhuMvsCr2gDAkHTvSjFnLKkJDpfpEs",
  "key16": "43Q3QDJX9Np9CNJ4euYaxi5FFBnAdFiyQ212FM4rZXnB3GwAoxyxfF5KoxUWr1iZkyWcxCT8eVeWhrRABRuFTecE",
  "key17": "5c91F1Lm1ji4tAPFyAyPED1bkUmYUcnvgFgutqLTvESHGTyjfYyjNBCPdKcKwHjQWpQMj744FM3xxrmckPpf4kqG",
  "key18": "64BpsvcahSHUdB7bQUh16izTTVdCLceZBE3T7wB1Ljk3wSWMP7XqT4oSZo2kBA8TcdEZgFZkXwEWkmmVEQs2Ubcw",
  "key19": "3g2ciWkMYPznprnEKwdHDQy35NoF4pRHzm3GwbEFtg62LPENjFbyAteh3PPeM9pjRuCz4WqKqdLZY4FDgjg8tELT",
  "key20": "5xiq66keVgxPn4DNMx95XoiQJ2Ho6GwhuaHjgRi8FufVv5qoCBck44fA2bsrHMmSK84AJ13zFHYGEJwxqUyTiStt",
  "key21": "2aixAwuCUBK7JiepGnN5VRXFd8U5ateHcSSzj3BqdZBdaLV86VmjMoKS7f1LTBkZMZnpcyUa5fNPdGtNcaUjYAf2",
  "key22": "3t5oCW9bQYRDKmexdP8DHpVgbYWw2nDq6SF3dttC7Hc2otW96bdDx6CZRD8Q7CsG5ykHraVhyBhFtFdV9uBmjuLv",
  "key23": "27Zuz1mmwx6GyErBrfi7vgQShsE8X4jtTy8cBob6uLWBM3fz7MQGtteMYpAbJHfTYxi1q93PSbxLn7pqmMqMiE5W",
  "key24": "4uszkyYZCoyPJKV1H12KbSKZdzheAsgwtvEPZBCG3AmHgiLidSFePDaXiKgw7VnuMCXkp6nmgt5ksnSS66gw3wU",
  "key25": "2vYwHMLSXjQ2fea8h2twNpL74SPzLZZtim4BXQHFaaZRkBshCkQnrB4yoks6nnEYBuf2dphc75mJG66kz11fpzNm",
  "key26": "56eaJfJpXSjnFjZuLJn2yGAHn2FNcz11MA512g4SKwC9x8dLhksmDSaBZkJwB8q93GCSJbdRwaysh41gRspjXvoZ",
  "key27": "2ko4hMHA4Joq9rEsQaBYVi6h5H8qZNGD7w9UdYBQ9c7M2dmT3vXfetpJJC9J2zUvzz1Hc1VaHTWDbQyPJQtjPQbG"
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
