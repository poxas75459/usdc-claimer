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
    "3TDQSg4pE5vSK79FBy5JJ12n63ZScqJoYG5wcbRsrhYRv9w2D4TfvQYmzVpFi8TWyb5tugesm914KZmfqthUzGqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPxSSgsuEosBV2JiQb9bkz2cpcFYyxX7D1TsXf2R9DoT55abNvFhPFzDhAJ4YTpFRnCJZYM41VpkGszVCQycUZL",
  "key1": "5v4epK1iXMcKUMVEsD3mkWxqvkXjaJah9WC3g9bag3M2BnzCsjJ73MUrhnP6S3C9yM3JG1eknZtigVHxwChQEcAE",
  "key2": "ABWbPoSVsQjznesrjCPqnBmsX7zGU2BEbeYJUkhwStuRgUnWE7aWNChdPDjEAZiBd3vSSq4Qv2zvNeMuaY6GCa6",
  "key3": "5nW1f8p99trpM7gLXp9kXgcxw829paHtZPszVt348ckzkLfvkXvwxjWYGeobybirtop4MHahfMXcYK3awHyBMQHE",
  "key4": "ca9wHXp1MNchnXcvXU2D46hbXUYoLnNJCPmFsWVLuEcRsFUCoqjuujiSx8KtSF2CQNzYqghUMyT3TyNNKA8XzfH",
  "key5": "3VJU9zRVV6hoZeGUBgxxknTvUxXuTvocUdWkReLtNuFzHkknoLKUMAUhqMytkaUYfPG7kTWnfwNeBFsAXJJQRCZj",
  "key6": "4W4j3unrc8nYZkrNiKgd1DUcvsuyQgum6b8SRaEAV783nkppCRwfpmMYtu76VoUD1YkVui5YzK9bcezxMvdGc3KW",
  "key7": "pCGYtBNwWrxRG9pPGwAv2ABqwiwroAqyFoG1D538Pc9boZCGquX6zNW6YJKaQuLHcWpvBCrjkzaoJFevCHwYrgL",
  "key8": "3dnE7uvPGeqqtmZS94hY7CXpThoYCVhcbRALg2ggmXSv5ewR1J3SmamDZHsCDHPeHPCRJEYDaWXi9MqC6zkDsfzh",
  "key9": "dFGuB9eDskCEaDudBZczwwgeAWkEStz1A4RXc7SEBQLHWX99AcPMyh8k2TCBbwq4L4qTEZaYm1ZwASivGn55QGc",
  "key10": "2Lr8BYJYjsQ6vvqtr2XU6q6gCtEVcJssToq5KN7TVWE5osS39apvSVsoLhaT1xgKddCRATsJ5AvvfX6ZrtrrY2v8",
  "key11": "7j3M8qDfce4Z22WmxhBUj59AqWFrWQJugVFpiyC253z4fPhQ5y8twGEFGAHie9KrfRz7Umz6VxUEDxT62zBXyXh",
  "key12": "3TZ59Paj25YbzaBBeqYbnjaqveVkKD1sJhjUGPTc5CqVufKsDQX1GKJuepiZ7nt3JGDaHa8o7vLrSq19ceLxHBnu",
  "key13": "4ZxEzXXAGFFCJREcjgUN78RQEniwHFU55G6CjeShH7K2ysFr6W8iZ9W8WMSxy2uitgsJwXinK4yEoNmJ9u8iRAAp",
  "key14": "3cBsGbUT2GULo52FmUZ6eLPrGm69MawX3vgutmrCXRWWD9AtZdJMocB91yMa9KFXmkekKwg8FapSHeQckKqeuQcj",
  "key15": "4NqWSfDLcviag82xCUEsBfBVRCm3kvb5RiKnJKhhfuTAPHyQZdreShqZfZh652Y6UcqQsn4v4vSVTGcQhJDQthWg",
  "key16": "2VrPVSaNon6VVuP3fXEKPujDBErPJLAvN8dj3BkJ1Y4D71BgD5Hqrist88iNFY7UxNwKjL8GNoUzQ8qecoorZzfM",
  "key17": "2Hf1WjE6LBvCRoRsrR4MgYJjUaua3p1PrLw9PcfTJnuB5rdjcVLqc5sZAFNFMzD8CAZx71FEULmDXFRyUdTzEsxP",
  "key18": "3UDCkUw6WPCtAtwso1XSP8MvoCoRWt85EiNsFJGEWfgqfyky18TEQospxahBpNBRd1LrB2AUdt1puuTth7iemtHj",
  "key19": "3DZkaRtLGGDzFudtakufUXSHJKY9myY1PQjAQC63HEfj7e1Aa3PvJ3BRpnatSCP5TTssAZTABXwaH6r7d9QpwN2b",
  "key20": "gWHgQw9JyQNrdqXdX964igrjM9bQjQpzywMQoj6qTHdeZ3dPzcxjWF6r9yVHFB9e3rpbnJkBgiBemqoboj17XoC",
  "key21": "26u6CHy7ACKaYYMr64mNMjkT58khzRt7MYQzUqC5PWimCNkuDNchAWatj51qxrtFRBMJ6f9t7jtbBTBxN3iFcjYy",
  "key22": "4Jy4HVKhj98zL4iQ5CqnrTB8LSwwWAorMdT7SyuZ3koh6cf8xMJhgzTLEMK6kVB9JZa2t1sjYecw4gpM1Z4HPD7G",
  "key23": "vNa4cha6nE4Jkpjat5s5x439LyCX9xD91q21hSEL6quKuVxazbuMvFsV2XDjTYf8nobugf8t6b5HUokwDzBD3nR",
  "key24": "4FoXTqyCPnhwkpyMybP4BZByXRr9AnVKp4W5cZbLEVR1oXupj96vyGN1sJ2bp5NXNjWhYmBLp2UnmpPd37Je87UF",
  "key25": "3ZNb7Ebu6h7J8nZZFG7oKxpq46K9tgtD2ba9p3k4N2xj8h1y9LjGWSzP4PxF9cp7YvqAzDBUdnzG67zDJFtNSPWu",
  "key26": "3dGvy2dCESgqrD1ba3QwnCEjA33UrgZ2N84sGUAGLw3TTT8gU2E9k5wntztM8jKQPsHPiq8pVX9pHiekeSDvGPdy"
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
