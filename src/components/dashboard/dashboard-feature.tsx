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
    "5veNEa6tXpJfTmHU2HcpZB3Hctm2UBBCNSto6p44MiRuhy7mFYsvnaefzeoF2T7xg7SuMkaGE9RnqeJcGg9B7xCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ThKDga49pkcFNqHEDBscckNjYtbRxTsTmKibnqDVcKHSghPSBe8MbGp2NsrfEP6qX4wbZTBgAzUYQsemV63pSSk",
  "key1": "5BF7DcDZ5i3wruCWCgoTFi5hcJUkPn2j5xUBUWAUdgpZCu6r2FREdwzcEB6QqbGR5SDCYD6xuytbKQKhdBLhhR2n",
  "key2": "2bwjrZdZY7CpfrXa5FedvuehztztnAv2L32nMBGdpVAXDbvpU8Sj6Rw9vXYz6X1Ezdcd72DpJqtQrZBRmRuSomP7",
  "key3": "2u9X13yNJMcctUzyoFcqmAngKkjptCJVhtqJhx9wZqdzEE9nBE28kPJ9scxbdtYBE88qR5b97Qfaujn1QZjgbU38",
  "key4": "31biYYGDSz9Qvoz7NKieqmGWyMK1PhXLaFpck3bNXGXgi95NgUwMHA6fwFSzhtCzvbGBmx1ef8rWUvq1m7qpEXpr",
  "key5": "5N3SC6WbrmDMQKL8jhYooR8FFV99kpx4irfQ71bc5EhdqjBHKKArUShxbKNcAfNi1o9PxAb23UEmoxcrQviAf2VW",
  "key6": "u68btDxMHQtTM48GHsX3W3RUHfNTdn52q7TQxBfZw4z92dyEY5zhypLVd1HsV5YM8TY7UsRXfsAicFbLVQq9XSc",
  "key7": "5PYiQ7bkuKQEerGkc5KUNMiE4HnDKXtqoEyvtCTGvQs8uayJMSo5ahnaK2FaPYLfeBusebdB7Ak9rKc2FabdDmbz",
  "key8": "EDot6PNL27jwuGNH1GgxZ1XwJ2Xq9TtSxXCUp9jX2EZQRYUV8ngktMHFnMjbMpCZqmaURSKRAVyp4eNcbWKhf3J",
  "key9": "24MNxHuVNTYDu7toScBzYCBaw9YXBkj8h8AhmGR6XeHNLdkGUh6Kinke4xmPMZHQZR6ed54xhgGt8gqRj5GWp3Wr",
  "key10": "525Q1nH8tQ8TSyuv4VgZbebWzhY7wGPQnEevm3cXLtML8Y2fyNPnuyPudMs8FyWArmZLTWMU7SZRUQUwj1AnkK84",
  "key11": "63LjsKH5shUkcMQfQvHykDGvUapWW1qkgQ2tA45yvAmqdfGeKLe7Rt3YoyEd1BqmxPE9rDy7GJxGf2VzLEbDjNFt",
  "key12": "5wheh6QKAn9THPWp1Y8LhjWKxYGTHfLaM4SoPBGJvG6kFSfRakGJn2jZcXENjCdDap1WssSX5qtLkzNsrXxBSAPM",
  "key13": "3GBDV3WW3319Gr3ammLk9638k1bzsRwMzQPdvZrxAL2nGoc5xDK3rACZAxiTa4pKv2ozSgrfu9s51sWqVyyYSyoE",
  "key14": "3X6YCG96S2xznFSagqRFkbZg5eppgWhvM1ZPKRKGfE93AqA1EeyMCg5MwTeTC4rR3qcsXfQhYNmhefykUFSnYfZF",
  "key15": "2R5zmE5ycBf8JpSN9wDwdwXwYmN6BKgDLGBMqfPj1k4zjxNZGuTUPrUxpEVMKjpNjT53UAW7ChrkVoafjxYho4Km",
  "key16": "22PDavJ4BHumhzUFCAnMsfTCKH8EvmmRButuPVXJW9gVfKDtCdQseUHPJeY6UJgxaXdwNz7hAj7hBCY8RqAWzewY",
  "key17": "mqPEgt8baj7TxcmNP2Q7RDqJSg43wUseKGe5RUnGBcY3RLgxVairGAFSbE27wYJiaXhSZ5V3Fi4AssRynZAStZP",
  "key18": "2UNw56etcyHHpCJNgJdfTRKAqvJZGHmzTwcTmY42TxaebTYwAsvtRp8NUmo2sYDe6nbdX5BH8CxpBFt1j9F1YS2",
  "key19": "4jVPiN6VUCaHyeCZ3AD4FXTGN7zD7ZYniMFSdKfotyLG5vC9iv1SnLG4zDPLSCdyRiHTZ6Ug5dVkecuV372uieYt",
  "key20": "4ygfo7cnmPYWhRjumjvuhroKrbfUrhqjeZuDghV6RcJ4eAXb9CxRV3yjqQSFiTLRXDnbr5pvqZXJbBerZVcTkKVs",
  "key21": "4QVF9XRYsq4VsGdU7Rn1t2rk6YV6UdWqgPnzzKKLQQs8yCqrhh7AcmmxczX17ToAFAqYoUHfoAZioDScGYS7Sek7",
  "key22": "3g51wGxBcL7nPHZJRikPeejzarrmM3MsJU68gfm6ZKKBFoTdmGBhrzPxSozqWj2TUFC6MG2nFy9ZnosZRzQJk6aG",
  "key23": "cGZfsFSRLrCveZEVVFDHgSq8WfDFppcZfkc7546otcefXHr4oGupdCwpaR65WHgBVKgbS35eJ5fUfzfb7K986zp",
  "key24": "4aRuBHYpex2ztS8tVfeMixt7GGzejrJz7zwqsDDhA2fyuL9DDsyUV7RTg16PSVVwpwBf8Gz552wk6hGApvHchwFA",
  "key25": "rN6gYLGHzae4h1h9KLmBWLTXhbyn7attFeZRhZBjrA2EvUZQPBP9cCGnYM2jMCY1BXtjJBa16gwHNcEs8kx1oWh",
  "key26": "eZ2kZzAxDKtRVLRKUNCw3sc28scddAH4H2HkkTdPZubfsBxcqxD3BAiWQueW5k2PyCLaWd472PAoW6Xu4jCSpk2",
  "key27": "25Fn2ypeGpZD5Fa163Rm9xGm5EJt7bLQfgzpszmpbAtdTNQG7HK863caNaSJSNKuNbtyQszreRiDTWPWiBamkGvL",
  "key28": "4k3K9uz5nE7penQpqRZWr94k37rMTwhyTb9jU9a7j553bBwogEkbFhzbSBoEskXmZuuxcaUktAUzXMpESZHV9X3F",
  "key29": "28qL8gW79xXRSaD7yAMeCoYM62pUZePasYz8kRHTARUyjWGscuhW8RNcwznS138J4bEH87XyG75391vFDU4ecKWm",
  "key30": "2Smk76GUP7Z6AUeLLD4ktpeTtmNQMprKVPVP2ZiFF4LH2Vm2FRpHivWmmXwf65DHqouLe4vVDbpTziufiiGNvWzB"
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
