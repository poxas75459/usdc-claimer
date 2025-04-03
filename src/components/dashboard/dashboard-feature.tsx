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
    "5EGTiwYyiZQopn4DMXk8TzPA2evNqyFNQLcEN47CMwc5RXqQGgt3KkckpxWR8K96k5JHSkYxB7CuvtJf159M926R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWZtTvNeedcy2yo3m9KfDuvovAn8pAV4a7bNaLScuHzo7jiinVvwV1FqKKn2BS49e76Hdd5NWh5AV17JuE31BDY",
  "key1": "uEXg5hyB5APW5jMfHAX9pHWD95y7QNRG9jjq6ct8WGC2wurqLirrMp8ZhsB9NiCTzbmsx9WJAoa68b4XVMjzB5h",
  "key2": "KJN8nCXikBB8cswS7aBUBgQbg6H4wgzuhvxWuPcpmgNtw8f5NdYZ29FQXyvPwTiosXcqdoo8DVgfnJX3tPxt4rL",
  "key3": "RXqsNSS2SVLQR9RArz9divtNj8f5HUHqHqnWJoAtzT3NBr9ZDQ4vENmxXMhrFV3Jx7je6v3BGbuJnkXAFGfnQM4",
  "key4": "3yVLNaKWCR4BqiuCWFFqJwYpW3Qgjv78gJghQKmWRfEtBFPKA8zQ8crbM1UPPpJtQTnMZ3ojazYWqcj5H3jWvuee",
  "key5": "3iVRzvw4Bdny4tMXPtcWu6Vkycyh7gKKVU7gdaLx7wi9ZmqTcrPYxfKwiVCPtiDwe61TT4FfSHhvzfTKgvt2kLNs",
  "key6": "2XbkUUF296Cn7JPHx1bXzgg6RdEh7hTYeusKyLiPKidjg9ttEiWMS5fGsz5ztRjsQVheVjjTPs6X3VftasqNevgM",
  "key7": "zTBT3taudYghdkbu1smwQsm7eoEyN2pG7oGa2mKaszBSh5ig2jNvbHVBrrXrNhs55oxVC9Q7yRF8SdjT47V5WH4",
  "key8": "5PHyaGUrwJzxt7uyU48Qx96Uejp6kfi8xtmSpHbKPy4j8jGbJwZKXrbmcD5FivWirhXghatM65KHNfNvxQcfAs4m",
  "key9": "3gUHS5gbYXHJTKcjbrMhbP6K9SoCSBX9guNRMb1CCQj7X9yqf2ZaZhfjqEVNUVjeKFyLiD7KShJcsAcuvL1Vgxer",
  "key10": "5QTLy1YjbDswUZXDkt1UFTG1ny1fsTkMVCfUYgEzhBMmWYJYyWuWf7L8H8rKj3gnkHLrNBk5Gv9AS42VXjWECrBB",
  "key11": "53Pgo4Vs7kqzwRwQ4H2abpHptFcGCuEYsfi7mnuifWJNMhSwQU6QBcEees6SVt8o3VeZgaP9gudrHKsyKogbLTeA",
  "key12": "4nnCpDF63JvazHBNaeJHop9mXqDTAv1J4hy3LuxbCbipqi9N6UczAhHeLNAxVAZhjzXGgfzuWBTgo6M6G3GLvAdM",
  "key13": "4ESGDEJB3cpB1joWu3J3QU27zzXLKedfDQoeK6tLtsTDpFrMQAyFrHZhcPzYLPmjSmsX7PPZwEaoePDLZqJDC7hb",
  "key14": "5NZ8sn9Vje7oAMzuqhc6sQ8PkK47n7r3d56EVc4a94saSWHQ9GFAtGQEUfbu9k4Z6R9dtVYvsrV7yVURK9Z6pPky",
  "key15": "5jtuNvYQ2gsfHRLUpcXi3rSWgLNtpTpSvj5YdgDWiw8Xn4TbFx7HzBzaErvtuLFtwwLdWt9o3HhNePuenCkGFihN",
  "key16": "5wpqA6D5QveLv3y2tWL3zgquHo7XzsAVWhbE1236JCGY9E4fjomS3wjHY1iq3Q3Nexej7qfXSmt6vLwD6tpAMZ2D",
  "key17": "2CJx1HteQsNn9v9hebrBtz2wMuzFidfPbUDXAMx22fvdJvESt7LTvcQDYTaA9rcMtkmtHasEwn7KjJVBrsegddAg",
  "key18": "4EGsAnxdjnUrgBktcHB6rqxZWgaMwWh7Lgr9dFXHkdhnVhUvimkML1GJ21QxpBQLGCaKREGq5JyDB8bqvUGFQui7",
  "key19": "2dF4WX6Rz5DUCqPa1im3SzbxSJUbdgqRAYJTwF4UeomkYxydDSZSFXMxRrGRSNiwDppGj5oPcVE9qcRLb12qBWD4",
  "key20": "obTHpebzDsnUU2x7uzDZ89CnsvGWZ9ED4GYaVZpD6PCSug2JhGvL88VyqSixGPabZ67EuR8WEMh1pmWcdwmzqUb",
  "key21": "65m1d7ZB5fKv7aUHySRCyb2D3aKVYipYhyvuyHi2Xo9sEDjppTUSjCcq4dMacvx7noeUGKWbCgVe9bQUqRnod1Kn",
  "key22": "CEtfrLrrd65rviUJH8C36Ug8H8ULKMyHAf2NmBzUFhkkZrZHSq7akebsRq5Z8wUoLxc9hiT7fjyPsksPzU6gToK",
  "key23": "meQPZGqNNDZGFr6vkyGmo5rryjRM7t9M1z6SeYAT8C5mzizGYiMjQu6oEjgmJoJRzaKnZiiALf2RM4YJwA8gT8Q",
  "key24": "5eXHnfd9UKZjp3dPNF7Ca3cnWraLMtiZJxwMf1tvLzA2KYFyy7wSBSPgXjgCoPs2NRofRG4K4iMBWuiPKYAby1iZ",
  "key25": "5HU2hFB32b4MpBrdCg7wVGA2xaJyAoTJbdY3qu7f3HMh2ofGQ5BRKJxnHFMm1voTJShbQ7drX2VJedqGvQTW4cZa",
  "key26": "5PDjWgBEZ7EssJqTRtpmrdJAMnijY7cpvfM2SVyZ9ySMDyQKfP1Sgfx6aX1uCDLrNEJP3rqnXGYMpUQfzLFzxkfF",
  "key27": "oCXCUPQXb7T4RtZRt9iUwM4pqzi6Mb73UaLbMpa7USZ1Rioc3vaNgD51pU8T2YmX3pZXzJj2EEUv3gq4HU1V88g"
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
