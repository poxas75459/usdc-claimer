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
    "4LwhVLDeSAEKzJcL6NyWPNvoXToGp1fJ2SGS6PCVDwGfp8cxEJRUci8HpFHfFKyLuhM4QV3LrNFN7WQFY87uHiou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1i9VVz95CPHBjzx4GsTCTHoHCNxKkS3x8mSycUntcQ72BeWAtPVu4jcXWdUbatgHTm64gaxuRXJYDLTkeHszwS",
  "key1": "5sAqBNDD1nsxkEGk8hsARG7BxRwY1Txq87gafN5V43iyqeRy7vERaQ1LkdwzofDMkrdT1v1zdZce7DUt85WtjFYR",
  "key2": "tS7EPPeYfyZwWSXVvMZeufnqLkqW2MMVge6NvDSUjVYRC1rMvbyaTsapRM7vCHpxp62S718266pxrTKzujMfvHS",
  "key3": "L5ywamEfL5kHqKtw6TDPriB34hiVzBLfVNSeQ8oX8oQmThbPj47nt4ppopsnXWrFahUcuuNikFG6W5WakKu9gZG",
  "key4": "5GJXzN7GV8A8gVspAwMkMAxf9t7mF857P6F2YX8MnwHjgJf6rivFrTpvotSrwzezb279ZzTDCrH8SkcZYjLnkuXn",
  "key5": "2cYFg1Wpq43pvnbqeMPRQFxJrY79BDGad4yNoRo5gpEAeSuSCKphYVdTiWnjM8BPcHWLuru3MSF3Y18oLTkK6m8j",
  "key6": "2W7159pDMxJ8syRnoxGTd645cWFJvgq6Dg11BnUW4D2QvbRpuxNM47ppmuLV5JzgemAGqWPaKZGFwAzXt9Y3ogUB",
  "key7": "2y3j4dvEAefc8xxSSdDkaiNGerdAb6QNNWDnxnhyV1g7EZE2DbarQUkR4rGpetQprNGSLjnZcmWU6mRv2iqrPjhJ",
  "key8": "vFfXcCMZLwd8MWSA6SKkBm76aNjmSi7MdYLQkp7MbFxkLKDzmXb8qhi6LioBz3qMytRyQbDikM3gnPpfPg8egiH",
  "key9": "32vVuRtpVUKpoTXqXBWfKXfPYw6z2BFMTZXSEk1cy44c1Nt2gNAQTj2otTAGLLVDDbDYQKHhx3kgFy8DbFd98u29",
  "key10": "4pjXKxcf3mGB9sRLjQ4d5Uu2yywiwfdBPzfB9ZKBN4btBZMCUwj8hng8nCsNevD74yc2u5WxspAVG3JkBLhqFziv",
  "key11": "2mBSY9ugxRmFT8A2SvumjETjqX3XKLFH3tTmSzptT83EieZvLMm7fKmqp5juQpwt8MkbpdMtJzJ5BUjoDiJ6AXet",
  "key12": "4ed3ABss7zXPQxFDq8Pw3qqGwB92aT1X1CKryUdm1TMoBxKXLvd34TRZ13EpYswmEHJki6FUCP3r8MbuLGVSPLSW",
  "key13": "2dvKZxbAdNybMbpJ6D1U4P1agPy3zoK5JbSHR2QCkwPd5PQE8XkHTaA8ESijCzxxbnTyEG3ZZpwULY21t7WuGsk1",
  "key14": "5GJQbFHkGheuyDgQyzdUtZfWWtzTvpRk2DYGM7GBcqqcFUmTaC7KcL1eaFNPZgN8F1iWtW5mUFH6nyJL3CSq5Yu7",
  "key15": "5ufLaY9V5P61b3NVU3WTgM3gYzx3TWZkzrH4DiBezPYF6sHXEvGDGgdzRvpe5cGLK35Wm5WwxHr6mjPZg13RmfYo",
  "key16": "3PxxaxMr8k25z8Y8uHyBAcjdQJ9N2bRtNHvPPHQfKfjqv53EmrP5Gm5XTfJNNydFGePxay7cMjFSe1UaG6uEd4nd",
  "key17": "EMLmTSXp2Sc1Ga9hU7d8A973dMecQQWSzeE81T8QfDadVyVCWu2sNwZG46TZTZczcWpJPUegzsTwT8bicEM7WNE",
  "key18": "3JVg1CPSxvqUytuoGGwxCrkw79dWZDFN8cdwwj83XymavJxw867XMdbRz9ELAosegqsHGn2LuKReDhMAF9Brvhq1",
  "key19": "64ZQBf1feFaKX1ityD6vRrrPs43h4yoEPCDUFmxoCZijNT2bwvNNkMPrHbxezRGdtbvi9CgVnNDkD2XpCUHrmH8A",
  "key20": "4b8p9wJtXnH8J3cqFAAVBUFuAQhYpgwqUxAA6GwpgPAcamzxSTbTvHuaXWgFCowEFxesqBDFgRADSgq2ACzQfx2L",
  "key21": "TjTHWDwJJJDdrPNAMJnUENTfSVW1KUzeEcPQTGfu1rD1A8tdMEumvuCRXoxsLGHnSPjD1cgqcvjGAsxVAZZzWW4",
  "key22": "59DuDerBFAMA2XT1aCY5XLt7ThvX2UiE31oFWsaGegrBtFpLgy1qRnRShB5QHbKwumRPUctUbpuc7sZXN1QtCCk1",
  "key23": "5GWYr3DfKAniJVqAUYDydQPJkKpEvxjj8vY3i2Q5KiByUYMRQ5ZaZgZxG5wMi7DFryTHvU4WAUcBHUhw1JJBVU2L",
  "key24": "3GyNbiEuUfT6DwKFu2EuePHP7MntXwhY5jKrGyucwaCgtFkKYZwp31McUdXw36Ecq9ZmHjpTBF2tozTuboaAck7E",
  "key25": "38Pnt8XJ7brghuh48i2Ec1AWPv1dBd7xmZbCFJQYjYCXgB9isn8rQdRjeMTn3DxVFxP95D2FQ9j4QAH9rUpDZKVH",
  "key26": "5n8dx2XeNBcYr4quxEQfgvrwAgxzEcwQET1Xj5ZPrHijCgJ7uH8uw1rsougfe1Brwa3A6g89igT7BzADR93Ju1W"
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
