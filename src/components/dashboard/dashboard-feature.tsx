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
    "5zaenC4GYhaHksstYo5i5XtzsbxjFDUa4NQcTMeYRQ4TJyiV9HhER2hhabfoCfGxPUXezzKtxSoGwjoAwsqppL8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57292nTUn62NtXh6g2GYsjqirnxEuvTLv6WRCYFmQkdA2ZPFzoikXMPBAJhwZEPapGDSmakXbGmpqngEpx66xoW2",
  "key1": "4iTz1HUagsNsJapxBb2qG6MKXcTYrGhtvnLuFu7yZZZNpkuj8qa9ieEwpf1MNy23FRwvEBYRVdvetTdtZkP4shyB",
  "key2": "4nmiVbX41F6XqYrgFK23Lcj7G1qDxR7Zo5jjtPobeDa2bswF5TrB6txqPA4mdugqWRbdxYD4JfGSQHaojhHrT1in",
  "key3": "5FdVyyuHPserM3S7jjtJy2sbHYqbTZoZdaqZhQmBxP8VMgQ4wUzuwZ3kCcxj5dS5VnpSLZXbfxNodLcq9Ng7fhXM",
  "key4": "23fdGas5yMR8EHbfYJktfiHR7g2hmhxRHT6hdyjEY2edDZojXutQqnMT3nDKx5nG7vVbVs58sbbTdynsY7TCtViG",
  "key5": "523BQec1dwSpu8XmuppKsLy8Wqf3Hc9DexpffeV4EKTZdAbELf2hSPfWMsPUPha3WxmjHBW8vVAnnPa3xJTzZvhu",
  "key6": "2tswnEELbJd6tVbPNnpEZ4jtkMEabTdcFN8oDcce2iR8orwhrpPDVCWZY2mwnv5PiL352hSAXwqLs687mDoJeETd",
  "key7": "56c4vZwhixGc9PfaCyXfx54A9LHNTaicejYxMZcEEScBBW5vrZH23hhdBz8W4gwsYuqcw7SNQ66JvBpfHew9KuP2",
  "key8": "uYPyzkHpau6MqEMPwKW4hyQzwcAbuZc13fov3MZpr1UC9spFB2CmvxdMvYdnapmab4j4sMg9n2qG7t5X7EpXZtd",
  "key9": "5oWDBKmz1QdJ69RZGCENN7jPRfRe3uGJN3D8nXaxbMPmyGzydciK5TbAhdS2okcFvoqQ3NrHpwLLTFd25kk54HVG",
  "key10": "2HkRKuVfoiLdEhnPXpAcxoJCKQL37RVVftawJzA3wsfg82iyWKnLhztCHUxpZmRoxTwCX66f1jKAUq8wx1TfcYA1",
  "key11": "G6CDHTDjR385V2teKaraS2wjWGmUuthrhYgam8Q29RsnsVuDKXwFiNoXUrjoPJWtQhS1Hq7t1B8oum4GJ2rjuZC",
  "key12": "LVuHYoCT27JtzQg5jaAsGZpF9LEq8csAx4eT1QQe8p2U3Zy6Z5PVgW8Q4v2qx49mtZp85MYfijcNDyP1S85mUVt",
  "key13": "58DZZ9KBhkB5To5XHNWMwmJdrUsUTVeikYFDrtFVCzBStTHyGzBW4xh9ibC7LgjDPyM3TJ2oitYTwPt6q7wCBgvK",
  "key14": "34ohUwTJcZpyHLxfjesJ87Q1FLfh9Y7Huamur23aYZaHYk1thfxVaQWpQA5gAnWyf8984etmqojgQpYFY4X5YRVB",
  "key15": "542pJoghu17Pqp8by71ZRbmHVxbbf4t8cy5riF6VXyKULzQFKGfbBJX7GowAn4evu25ZMReATaLZT2rQhY64UzoH",
  "key16": "2Bgidtx64TXDBhKYhxp1EFC3dE6Dur13xZvC1xaURsXpx7wYnd1uDgEC9YnqkCVQFcWHPekTceEAcacphxms7Mer",
  "key17": "5QgjDSMcFFCnmEVqB1LE1E9uEKebfUqjPEuUodiZ5vLPNPaPsXp6JtXKNsoxcuf1SC9xkHSMz4mWa5zcyoGy7o27",
  "key18": "3jgumBR5VsswgUaFPStbowK8ovqygfVpsr7CCrg59gVvvVALNbnKsunr62Q3fCbrHfi92BJgVsLttM3rAmVPrnbx",
  "key19": "4F9gDpFpHS5o7AgLhZrs47hSNxNgGcwGVwxVUpvdjJyU1f5DaUcGygdSip1pDbHp2XUMTjAB3X1C41CSGY1YN38S",
  "key20": "KaFAcPJ6QDU9YX7baVL9asV5u3jwsxMgALAw2RubG6oRc43HKDm33VAGgzDgHcYqWLQJX7edQUWbRChNwAFvW4e",
  "key21": "35hV8ZwP5J4mRHKhTtWVLTmdKrZ1kayPSnGb2XzNo4bQkuEBzpddbreTFH4RiRzjM3YZQZg1uvPSpbrmThJmhZN4",
  "key22": "3QtUFygmv2Qk6Mja8kAd1YUBXWJvrhaUYBnLWpQUj1vzKi7oLWUChN7U8zCCs6E8DEuNMus5pbqUh8n8QtSVa1mX",
  "key23": "8Eyx9cd6avoag5iR48ihiSUJ7iAbCLFjaxDH89kSJaKYS85XgpsM6DGdvE7QPvcrnJXK2njxQAgRYyHRdoGSpkt",
  "key24": "21zAFXWJvqK4Dp93gua8R8BtLdjQznpRKaPrgN4B3wnu6iok4ZxbHBwsYtqrFx6XWeMmS5PpidTHSAiR68kQqSCF"
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
