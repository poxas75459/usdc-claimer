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
    "2kzh1835tGgv6iQGCWUeh1qNWNjTotAqVDyHh2FqXBibwEtZ8dcMvaREAb8qeeVE28rXUZpkZKdgqP8YkP4mUApS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TgmJYU2yvihWH1wXWJ73uiwy3k2ptfGSMTT6DfaBBJ5rnJJM1PDK6gKDCKtvMar4voJhdRXL2SrVM9E13ruEWaD",
  "key1": "5wiG1uyso1U36MWydsJfCpEaKNKiK8RgLhP3YawWQpqGr91vKbMaGDyUt1Tx2PuXDRppk4kQkj3b34D2YvFevrFH",
  "key2": "9AWo6EKpTXAnfPoFe58dELj54A8TVAxJ3DDLR8edWZBVLMT73wzKfxBBhuVFmfj8DCyNso3D13AKh1mokpM9ckY",
  "key3": "2cB2FPwRt1CADiXwsyYMkwZhFdM1Fa8QDQV7zKUXX6XvVmaHtt2Ntq6jdK5kTpXyC9yFGUrf51scphoPQbt6vwts",
  "key4": "2dE1VJSFtBmbGXUKiVcT3HQN74YZyvSB9s5PPVwaS26BDBAS1S6HHgYcu4AyW9gVQxViqamPRcCckuyKo9R9iRiR",
  "key5": "5CD9XZATGXPiy7Bc8CSmNtBEcRDHdramLTCryBcTUXoeNzo3jTgXGvjnL5YBf9qWWbZZayWbzJ1fF1mZjC4VgQAK",
  "key6": "3828CND8847921LgpzpDaTs9Z6w6TP9znxn2efZ6zepaWxGqqhjYZ7PQ7zgGpsgAXpDg4Cu1vaEW47kguQkt7eGs",
  "key7": "3wZj5Qgb8GYTSn8BAzvM5xteMfJwguwZpW6qpBDzKR9aJrm2UQfp6ibpyLt1NFbMYRw5wPsNFhLHzSEHomVHjTTj",
  "key8": "4EiARDUnefT8mMx8yXngto62abDkjV7HA9XAEXU1FiTn9hWAGSGiNTf5ffagPpAvK7xxs1eLMQm3gXKyxm6BbHYy",
  "key9": "5QaWiWcRCf7mtHcdPFcdUxKampYjYNqTfq6ErMsqK8djS9uorJSiE6P9WuyJxnviMnzz59bDgk1yb1mFu496j5Dy",
  "key10": "5sSJZoxLH9xdrFwUQBa25M86qJ55wM8WiX12Sfj1adFsD6xLwkbhETrMMTFMjkJpaohkquKu1DvVZvX7JFkM6Xqp",
  "key11": "45Abf8gpenWtr5Xw1qaf75L6EWFPDEmG2VMe3Huo8JZ39h5RfrqTrVZr83r51yW5QWDZkTiPEMPRzST4V3te2T9v",
  "key12": "3gtiwnKzXcVoYtjGAKxWUB49Ae34Fn8W649RYry9W6EHVa5AnwqFyKKypqtonkffdSAcfzjhZzqHSahTtxnqTRrF",
  "key13": "5uqfGLcRZ76stncW3sQH2Fp8Jz53iJag1zrbi9Pyh93bLPupkJ5ojSDQnZjmP9EvPb2D9X8gbxwskF4BkYNYWADa",
  "key14": "3jvnCDkxyUeXpvg1yZneWmTGppPLVoYmJdZYjM5T8YfVZwvFaVbMQxV5pJ3c7VMgVpbBMebyebm59YAWZYSnwh5W",
  "key15": "3nkB3tgseth29jAPcKCh6GVLxn4Y1fmqPwMf6gKxzrwGmsToTmzJDy2yWgQsuR8SbyDYj9bGD1rgvHUkD3eeMFqQ",
  "key16": "3hfBeqq1tTRD8QMmbp7yWAP3DAPiHFezw3K8HKuKRNTufiydWv3v5qvPPTjTZEeQyGNfGiR8DPYftWuc5u4YKtuk",
  "key17": "4ASXnacu8aeuNktBNc7GCr32YfVSNssnNWLpoD2yLD9sp9aGgWf3LWs63a9uVpTwrmFe63ZaJZ8VqnJETNsNhJk4",
  "key18": "3op9g56f1jCVxBz9nxavLZfsHpR2jtze1CUS7BcWzpwTiCRJw1GwAcRZNgkYT7nC4PzzJ5H3nbDPPCj5EU4CJRFd",
  "key19": "5euVSxiDJX3BUf6LScytvbdZe7YzcWzVqmeTCCJLnLJbuRQRbwEtBJTsizzCW984M1S8UahrMbMb2XbtizqucP1j",
  "key20": "4Rsy4rzmxkZZwULwodDzz9MDnFa1soSQpgHRzFuHFZFzdwJYf5LoQ6rejiWF4Mh78ywbXi6hQV15B2a6DomSQghL",
  "key21": "4jsDpuE6jCG3qEkwNWZomEA6rFGQSHpfQigSBJpNXNDFNAUWh5mxsN8LtF72AbgmG7b9d943Q4vfw13veqSvifFD",
  "key22": "4avacioiTZQWXn1WvE2ULiFGcimJ7fmFpDNk8HKwRtdjXPTVkYcdApDCXeKzfxgVyNWP5Zw9DWYadvTR7rBihwNe",
  "key23": "3muNjhpzz37UD25CAJhFY3U4zAiLwgS8N2tG6qg3aJuGzk9bowUui1jDwNX8pu6MVCcA368FHi65N8CHVetg7MSo",
  "key24": "2sMpCp2RHrYyJS316dP9sbcG6WQMopXzq34F8TAxegatxQPMrc4Ac5JturE3HsvQgSuYrxXicnBjSVeTKLzd5nUb",
  "key25": "M8ctBgSP31tZw835gknsKReEQkwiTs25Vi76NDxx3nHN7Z8AQuRJtaA9ysuuyEGfBEqxc3AcD9WotjTeTLKEaSA",
  "key26": "2cqBo5LY7YMPj8CYokyBme2QbdikK9dxVLzGFxTXzeM9ZpKFodVxktmPMgtHrwLDQX6GV6cu8g3Fc25ALfjtxFdP",
  "key27": "4XP6eeRCjjVGszgSVzuXF1WB7sScxfqp7GNpHwPh8NCsmwdMaZWRVq7nouBNzg7XY6VtTCzPcqGjRkpKNk22bSuu"
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
