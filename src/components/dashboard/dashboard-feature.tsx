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
    "pehXd8fueghjM9jSsiKmRfkWSa9BJVtBfQSCtPzT82ZjbPCkS2NeMxNdntn5MmdX2cJxXs75KkuMKpaLjb6Yyo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6UyPejPxcKXdN8mnDXNW4D3FbAXuvb1MVBUME3PFpFob8hnELdBYXkfCbjv4Jt17JKTukpwv8VmBQ8TbViGL8V",
  "key1": "j7qAD2xXyNTV4UNAiVDn2NAYaWrXQv4gTavTvqrJznczGRRzfVFS8qQS95zbFbn58634F4svWqe5vj2we98Wapq",
  "key2": "5tW4iiXcrTd3WrMu9T34MGjM5QJT4ULLbdNsA3GbMyStc9QWwjo7CGdGSB61dbYC5iqevPQPVu4CmpQ89rciodTt",
  "key3": "3gzjoEcGByBkpmAFfLmh9hgLPXb7Bte9P5gCwisbo85iLqJ2g74qYXud8qnqowMkFMY1hk6rjJuxMvwNVvh64CxA",
  "key4": "5JCi25YRwfAwV6kWeiP98yTHBqDx3d9D2FBNTjpFYdHP4z4biQCFv12r7p9FiwUcCCnLA9s8Cwgn4PmjN6Lq8bQe",
  "key5": "MitcDDGz6ha4EGWnAZWc7n9QaMvd4rsCWe6cyHuaDyjCS3HBfA77WsuHPQjR76BjYAGEjFys8Fi1sYMsx4wZDD4",
  "key6": "4NsEueXJdyoQ8G79BQma2zKrNTLJ3wJb61TEn3MpdnfWvmxDF4PDivz2obSY9xxzhbru7M4hJDeLefApUTpJ6Kxe",
  "key7": "5KCjNisRsHR1QX3on542wArGQd6VR5Uej3qnKaaeUECeZp9t5XZXvNrijtJxgb9CVezWCShVwwoqtPmkPYKjpydS",
  "key8": "4f3D4Uc1x32A9V8knL7Ezu6eAzV3d4Q4BeCJS6iQ2pWFFw1gBg4T8i12ysUAbiMnk42LYLwask9n1riicYt4U4Q4",
  "key9": "2DVYKrfmaMDfpvzFnUa541WtGc5KAWAKt83JJyGm4iFhJdNhTdsGzrM1cEptNWxAXBnswR6B5MoTNDqJZgz4DfD4",
  "key10": "oVkQRa9NwqKs1L2nYJLtNhA8tK2zDz1VQgyQpzAEFeGxQsaAAmBawKvSZzE4HLU3JNn936dsZ1SAYqRt7boR9EU",
  "key11": "4PeEwvHCMuVFNDTHhBFz3azPGW48rMkzLmgmhoZoTeNGE6kScik2JTFaZ6ty9QfnhtHJqPGc8jwRSjSVF4q7edtv",
  "key12": "3PxYgSE8zRBUkuJLfR6ummsLvWEFPLKGxYW56X8wdcLGHuuhUAapgiLu1DC3d82ymgA8KsoZ7PHn1ZvXTiZo5WSk",
  "key13": "4f5tTYcuW9NMksSCLRRnzedoUBz6smJ5beVi3Y7iMFkTRw3ebYhgf2UBTgdSSZ89izsgj5zvwZLT21QdibrkpZ1Y",
  "key14": "3UeGkjVRWD7uTbZoBdSsxNr1Ko2idt4f4pME75wz9HPZH6dJgnJm57V8iZSDTxw2nmCQzFc1DwAgmUpF5xkoy81w",
  "key15": "2Bx8rsdTKehE3qTBoex9ueiYfmzbone5aAQjB98Krfcr3JwpYBiQ24jynF3qKo8n5QUiSgdFyMkf5frcrq83K2pD",
  "key16": "3heg2rGvak7cEsBSmW4jPPdVY25AGBMSwVCLQt2ALu2VhPZnTTWGc8VmzPSwimNoLRMsJftj1HbwqAsXdN66xgrb",
  "key17": "3T7L9xUksefRhMcCJs3MEZf1joBDitRcYDTPH9aW3j43nWPFHvDNs4QyEFDMBoK3FTU1kd7Rgu1McAtZuVpzndc8",
  "key18": "3avMZ8CcHHzUke43stbZqLY132jbhAVCmVUxque7jR7qSnnMpzczHrmys3cjg7Y9k8oe4VEPt2ZkEgdDo9SDv1W4",
  "key19": "4iMbnQoXPnBhNTrrGZVCTnUU9WNzWHSsKnTcqf6StVnPxHozZQAutJgsyJYMCkd9PvDMiMkEDZ2U68E4Eteo1qK6",
  "key20": "DYh1bwonGJe74pYVweaNmSeXc4V8wF3w47v7u749vCcDYK35Cgv34eUXSctv268X2C7TkHAncAWKToGRtNG53uF",
  "key21": "4EAdfWpRC72NBQh37sArHbKPb4N5Hee5u8N9nzJPYFkR4JyE1VSE4aMHXqBviTECzBqiMWCKQE2fmKmz41TiwX9A",
  "key22": "5vRnH5mct5VW4NAKBt3qPtL5xadAr9iaeFKqmmfJcyMP5xkdycQocwoB7fyesyBq2SpG3mxCWdqzk3Bp4Bb63kVB",
  "key23": "4jwN8NM76aRKX3hoGbhsJKW54yTjckAfYrZgZWQuvVfJ4vgEr7fiSnRY2HYG2G2nVsmqqG6ERJwuDR9vcazixxQ2",
  "key24": "4FVRpLin7kg2dQNmXLARUSzjm7AX6NfP9XLwxwAXPd8wqk4KVPyR4q7B91aQLeTqazKijk3fP6i4kT6HN6EiaK2H",
  "key25": "47gXf72hizLM3jRoMPpqqmVDzBp2LS4jsRADg8GmW5otf72TME1qxNDuRvAAcsmVkMNnCSYgeV9BBrHYXF1NVme9",
  "key26": "2yJcxPQ6fz3MuL7tLQ1ymXyaH26wDvMN1FM5qW9ad8RUsvV7bUdStC5XbwapD4k6WrUYwArZv71T1gr2t4CynSUZ",
  "key27": "3fBdqvAUNyCNwPaJBNvzGKeAcCTBCMENrhDmA3J4BjyQUy4gdbANue2rduUEdBdxUvDCBdJYidRr7j5HNe8KNpkA"
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
