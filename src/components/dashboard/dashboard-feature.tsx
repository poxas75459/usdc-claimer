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
    "4Sr31EhnUAqR6mZ1Td7kztHm2nfUZxrbyREppa6hz8oApwnfechv5UR7VAxurR2QXzEKH8royJWQ2wGqyYSuZ5iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5d8meSPk3bx14N4ZJw25TmQpZ6MbBVE2A7mdqnBEAVGVYddDzqqWY55YLWWF1bHBFLrTszqzRRCAi2TNnsxeUB",
  "key1": "3ah2nX8V3zL5vLzQqbCbRGvaZusMtykKkDYE4mVgpRcR3kh5Rozum12gMvbFJmki3vza5AUymNLBnP1iL9CyB3kA",
  "key2": "2MB2aieS88dPgWZYYDVWGexYhTcWK3KEnPCQ17V6gdBrvqwUhu4CHQj6j9L9EBU8Eq2KC1fqpabHfHmpv6DuHrdC",
  "key3": "4pCEdiiNhXwp6KNeFgcdBzbDcg7o6ckHAoLX6F7nFNviqwfQbk526SNm1rTngL9N2WyGGEyG1x8S1tJaWt71naUw",
  "key4": "5StWKBy2eJCabP35WqnvhBDgvVgYYJcM4JwwAUiXo8uZZ9qEAfVX6CGgfmwrs3QQCi7Ld6xgJcPcM1fY9hh1Y79i",
  "key5": "65abL4iwSpeTewjBxvWhoJnWQuHNFoyZ1oGFKQR7z3Gd2sHNhuSyTpqEbFH4oswe4S7Sqz3HpPQJKSBvL1Dt13sU",
  "key6": "2LDtmrETQsQUQBf7ptYbjwZmq3RScXeVZpadiP5wRkwTxnVJPQHbKChMU31uipnC3PEvULDC9g5cYVff2gCN26Jj",
  "key7": "5QS24pVAJUGZo3124qy3umyNapeLznyPiwax3zUzSMeUhwmSYpzcWfUTsUdK3ukJiZFiWPk6SaCtgHkYgYgxdWLw",
  "key8": "3xJMKxjgLpA1H3gKDcPS8gmPYFQ3BYKYb5zLH5HarsguXsJQ4SGCnEQr6Fjvsg7LxTqsYk2SSpG21AyMJxrTH5B9",
  "key9": "5hTxbuBr5DUVxt1YjawAt8PaSveHaMTY2NiCc8kboXjUT3SwmKxsunvbqNWx3FrGeTXPY5Exo2u8ByxDP1GbQ4YS",
  "key10": "2QPnkMDwxsqRG6D8KQQAaGRodBHAmW9pKJ8dsr69zRbFmKFaDz2JVAZUnX3pvo9JswXd463aLuSJKr5VCzDHUNzu",
  "key11": "62JLv9yd1fsMYB6E4SDZK1tcKD3nY8Wo973qnLrzWnByfC5iUM96fxfWMrvpv2konMmQnHSDxBsnaJxocwaeVcPu",
  "key12": "RXE42jrnaavmJYTycFcyKGuB4U7RwsnMpzcie79UzsvKs27riZKvrg2J4Pv57sXQ8tesYPaDkjJ6BssmXUGUq43",
  "key13": "nw9ibTJop6TJcJcFNGwfwiJLDHeJrUAo9Qx7sRbBYTYPwJ4Goayqfb2pMsoUT4imf5aCe5bS9uSEFYk4VZBwybr",
  "key14": "ZhN1LKAgcLZeqZYERezkdC3S8KGkK3SBm1JNSZi2s7JbqtEW6XyUCt9kh9Sg1tFJtep6vfxczcxxD4safDhuK2m",
  "key15": "2Sicoe6DBY8KgGyCWfWRH1zj5xwWvfdhN3XCmQRSbVeVVQFaqp8fPrVRqvMBQyrp4uK5A1XKzBw5P39mqW387gtf",
  "key16": "38jVgkBjDp634WumwWS8eHZYmxgDoR2kxwfEcRBtAL9ttuPkwbNH1iNpD71U7wCg1TZV3R8LbVTJFfsWxkrQbCvM",
  "key17": "XyKhz5gXc5mSK6rYhbuQcKYUBPhXoJC2vPJurLKxMyk2jq65mc97Du6FsZxeqpmPo9x1rRthRNtmrDqJ2ZxNY7D",
  "key18": "2UWB49jh8YgignZVemif1p5QUqtKLNvxjJPMvdZxkwtEwfyGBUsYiW3qY59YYKQ3d2Esb2CLaHAz6LtBpMVpZBiV",
  "key19": "3AB38VU8mZVPhaXER6r1W14vVoTVxpesBiFeyvakNbYbc57gSFrQWozKdLiS4hhxiDS83NrUGktoJoGyee7ZrsQ6",
  "key20": "riqWWRLnn6GNbtXHKqD3bss2x7NSnapJ3cbxVRLCE2F739YNCLUUqkffGkcPb3epNvhpuGDsGb8R1t4bCt6fWto",
  "key21": "56gBDMA69TRHNnJLJbKbNBHfCi3RByFyouzVxwrWbX847aaBkfx7rP1mhQT8s9NjocoH6HDajmRyeTVa9y38zSMF",
  "key22": "gNvSpdht4oFwiUNCKUnsrP8JMqNFNMYS8qC9fFdm19oaiSWrsuJKcCMrpRKD7bZF3dMw3Gk8Zr5CzUvgsVezp8x",
  "key23": "4AvD1Tuv2bN91wvAShaeER45rVBFFMhP153iw9ki1Tyk3KjmARPFt2WXgQ2fVayWjinfpP7mob6HMAXL1Tb9bLew",
  "key24": "2BrvTgMCNwNwfPfBWXFxyrn5pStpXxnZvVHU58Z58pNWBR891s7f5M6RGXMTBjHea2SoeDH4e3uCwwTe6KphEQcp",
  "key25": "yq1ubxDWJKNJQ3wUpBdmoNCw4izw8MezLJgDsDD38ZcTCRr4HbMSmF5dHdkgReUDSgKGqjCvo6vYeSXKxA7Y7HX",
  "key26": "4PRodLjZ3nbcgZCUXfANFC9451XFCnkhvSDbrKXrESzmucaRYKTeiFUZbMZYupyfFuSe5wYjhQinT3dfXk4ZS4W7"
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
