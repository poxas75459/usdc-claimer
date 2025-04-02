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
    "3RnK3dMFSahkBpuGQmhPuJCW7Q6mtA7d2HpkrAanj2UChEPjpYGu7DYE4K4Ux6nKfVptghCc2cbi419wqoPq5UEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1FXmPdbkEcB8xUymMRiq42XiMkCHdHt6HidJR27rboB1AguGiEMtfu21mzJDpCho4hiiwbJJuPBHM7aGHNswy5",
  "key1": "5E1PqUA22BRVvUFfV9VSf84eoEzCDPbUPAceckrtQrRit7irE2aUdapwwSwCPMbjtfNyfBG43u95Tu43XUe32CtL",
  "key2": "5nqunJcyvU2TSiVJyT1UxLd9WbDpvBiBgYunfbkj97xkuMfwXw1xf7VeDhb1GkG2kaev1LMqhZk4pAAaGWbbArUq",
  "key3": "k7orZesQLkEXL6TuuNAZUey4hXYN27rLtYdmDfgt73o1MTcAz5Dt8waNE8Ln34d4CdS8f3JZycLuiPqYKR94jCR",
  "key4": "64yhtsYVm9DKfsu3182BN244FWAe7TrpyVExDTwtYAxqg6m4qQiZf5xQhSyyvqsktbVBR6dnvXkT3zFkUVLdjhCF",
  "key5": "3cBEtnvJ9C2zyZ6yudeEdx8BPfBQoudTtfiK3oNXEvEMCiRfQxU6zr2pC3xZ2hJukeN2okXwcGEpQDkaZ7dkrrwE",
  "key6": "5UziXSfRcY7KyG3JdeCVA56UJ8TPzWCWTxCwnDEsqdNK3WuD44xStt5UAct4gtBH98tCtyffr8UKeXy8683SBF27",
  "key7": "5uPoaci8H1pktaeV2TPFDvyUBZbcEyQL3TPFzku6VrEzTK7YJKXYEiiH1GdSeAJfsnXGyCauGxPqmZXoRmqHXqXk",
  "key8": "5PNpoeKpSAKm6KePJifeaVVwHNYHdWrRKXdgKCV2Vs66M8FgC9QT3Wz3B5xREUKySkVNhga4NKmNidjLzMytD6qR",
  "key9": "QcwwpVUUnZXx1RJNKaFzUSbnYBDDi8rP3AR35x2SHSiF9cTC133AqhcnZ1kqdUTqzLrHST9JLhhT81q2N4MtdzF",
  "key10": "3TTmL7bEp5hR9wBtFTAN4g9guAjjKGwLw9yGE6VJPqA3nYTV66Xu3B5wGTVLsBDpjts93CuAxJqW6LmyHVtJdZng",
  "key11": "42S9Nf3b9dfAqqzetkMNtGQNS853JgY72om29bdcF24L5cMKEhtGY6zBEvUttNKPLH57sJPYLQJHKQbjkZJVoYBN",
  "key12": "3RiUtRoKuHcsK1sHCzZznNEUsyxN2ckdbWZehewN2hSzLDykhRApgxvKaHAxaiHPCz16cYnpoAJM4MxnmFSLUcuC",
  "key13": "5jnDtzqSJardbS15TzJQK9FesZ8yRUjKUTh6oq1zcebyHRd4fgtQSPmz2D6njmfegwFKAUSqkjCmgV5BuF7tShn4",
  "key14": "3GqqRyfSriHADxXqzKTTgtm161xyTcugWLYKNnLPnFCCCnkzXkpgHiD4U2TBh5wqAHEyupFBQf7ddUzqNfwUTcNn",
  "key15": "5qAnjvq2Ne9bfUF6p3bMkBHf7EV3C8ooAeUaUQdA92ZzdzWVCDPQNJswP5oSJ3LLL77dLiY9Ya4AP92e4EZceyET",
  "key16": "5U97b5MFe6k4E6vbBgDCWoWPAojSMJ1a24dHH51tfPFviMdeNc7xfo9SCQNDXtATAfLRKYc8jMCUf1CYTCnPexCu",
  "key17": "8p4PUjutu5MQxZcTrbTULt9BLuVWMCNcJPPSjEMWSnMLnL7hXtTdVFgmupmLTw5hQChzaYMuaYy4aiJfhE8Rjwt",
  "key18": "4r6xJyJLDVA92RYrE32vtJEADMdrjCqnysRVWs9AUcD3MKeCBWHRVcrqanb79kMvfFm6PiWeAnpfZHcKvjzUQmNt",
  "key19": "5i2tjvfyRJGvbdWvJebCt2pQJh7iSWkF8cCYy2o6TXTj2frSVAavweijhhX2NFjk48NEXDZXqt68rr7ghs56iHMU",
  "key20": "2HjmVTNiHrew16ykxGNSxaHHUfaV4HwyBQ7LvJqBYPcB6iUuMcjcM1UMCHTQ8i2ZiR7zqyzjTb3U5EoUiN7epraL",
  "key21": "5MkPHqevabX6rAtC45e7YYfcavnVKrSc9YfzDJjDh8t8nWW2SkjK6cqLH2ySfqvyw7VYy6G1qVVxmESoiDa8azM1",
  "key22": "3j4cudHznn1XLuvGGX5AcUYbikGerpTbfaLcs6ymDhiYZcokkMZFmQHqayjaJQxg4sgR7zjkh2nhH1ajANfNge4Q",
  "key23": "4UNTuFF8Ss3go93ditELa1jwax5LoCDHXfDePtfrXpTDh9uftoi8PXjarRVHVfN6b3G2HjVdPSvdgJw7EB2xb9ys",
  "key24": "5LLEfEUeqiwajSMii8qUdYjAexKQasN4QPeqkkhHhicvHpgdya7x5wqBBGSeH4PovPszRrojnHZTb21dwh7E3nW3",
  "key25": "ByL4D4DVWPnFhqu57ZGxQabndFTAbhhT43T5ybRLMZhJsggkM82MRQa2NqGWSEJiHBNW2vSDjg5ViihaRAAr4rb",
  "key26": "3hyGSRCctzoZiQRXMCBZZ2sRNk9TbsB3XTqmtwHxgcymhpcjaExR8y9yChe9uK5TXNEuZhjaU1ieGhyVyz2kHqUc",
  "key27": "4qYdy6qgamVd94bhySSjkaWzXWEW7Cx4p7dSvXYR7NwniUDPEautuHr7dY74adNBhjLcfcEySGkntsowMjS4yLhC"
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
