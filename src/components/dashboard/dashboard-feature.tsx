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
    "59JqG5G6PTxrHioK8pT8suUAjzQUEBd3MdQZt5Y7AYRnvVK8rcH3aUDtag3Fmzehz5XJPNWxaJ4G1dZ6KggHLkzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29i6rNyJXE5RMCePPkJqPr8GcBMWrpgAhNFkyiFSfgL1ixCEJkrDfAztEniXMAJU5Dd44D4oa7gi4TmwSXGaUrgi",
  "key1": "4yBJ5Y6rxJMVGCjo5DsagDq8AJPANLFR3aTWT1wzfsCFg6x9FaVNtUy42S6uLebk3n7cbauC2165BJ9f4MkP7hoL",
  "key2": "4cbor5zuSFypktrjS5CFx12uKdFMbvt9SCsyUGpKH6AMuQGn7EvAHsbMRhkGtDqKcPRb6oHaeH5nLY4K9v552yiM",
  "key3": "2RrWqHn3PFZCMhvNH163fmUsZiSqhSxAWZf67F7gimA6YEQQdckg8xreyGNSnYTJUpp2mEbG5koCy41N2gd7Beyc",
  "key4": "3LaivF1wZGtU3aR1wzVhctVQtQcVx7X3rqC9VqfM2mMsZdFwb9D97q39DF62rCwN6prmz7U9TeQVu5bTiJz7uTDj",
  "key5": "4Fkd8DwQmvoFuuJcv4ukosKaHxjD7vTm5DtwSQGpp1UX88u5B5StwvBHajCzpsgJAG8ozNf55XF4cFb5F7D6sfZH",
  "key6": "4JaN8Tt4qiPyuBFjh9n2utr6EaU6u6iHTd6VPayUJvaMVSUQZiBjtdUWqMtAHVirxwaSoi3FjwG9nxixmwjudANs",
  "key7": "N1EQ4YbzCrK3xMHnqdmNr86Qgu7qXrC6zrwmGT3z1kCwUD6vb4nNqQqyDpuYTqjbbDaVRVyQNptkTxBRWsASHAF",
  "key8": "mGs6xzQEBckQQe5VtvHQ8YCmjczsTMn3t9G7XC8XUPZSKbYSF5eLZNzxqaeUSoAi9aETqWBMruSuoFiTyZ5xtfG",
  "key9": "4FJrUdmaKQsaZh53YYzA6r5WDMYLwr8iu9M5dAFPdmr8gcaHkmNi4vybGPbfepTQWDfyQpJFhTbLqvDPC2pxsoWu",
  "key10": "2kPJjLH9eutEjxtmE4XcbaDwDpcfyEodXBt59tsMjLzXsHsnTvBjCHJWkctpaNaXjtBHcNWhi3yC8fRUqytNBbG9",
  "key11": "67Mg8Jx3Z1ccqBiFXaN8GPGWwvyQ3iemK4ELEYinrqk6rbTEBJsdWxuJrh2AtGF5jur7GgiAw14neCQmrPW3EL28",
  "key12": "21a8J2yJmnDmvc6hyF5vQCfKgcQmgd4Sge9EJ6MSEh4ni2e9NpkdJ4TThKfyDCWzUAztw13YGRZymWNut5L5sLSQ",
  "key13": "BPjRqnkG9EdgU3gentpRY4J54CEA6ggUQbe2UJ4DubbPMKZmxCoeYMxZ2MzJs8DHTCs1ppA5tCwA5YiC2HXco7r",
  "key14": "5DNJEyTBiXdyq6jhL6SqeRhksC2jYZtd1BxxrXPj7dqEAWxJsBZJfAz9w2qRnwS26GGZdJphCmMjrug58LQpLaAM",
  "key15": "4B5XkCAQAXPg8iZadefNs4ekJWsTJvm2XQQP8YExPxxNqXW3vAG9JgX9efTwdoDqGcUn8zjwD4AwD8u1Fc4qkeaf",
  "key16": "4i6KDtj7xCJtwJ19e1U1nbSZTvHDJPQELEX9G23exx4FQYfn75DMiq7XTA5Dsn72gmrDCwyynKGqy54TkQ5MyKDH",
  "key17": "2nxCbPxp7gYMHf3ecegjQhqMaPvHruKjGiiZgML7doNJB1D9sLBpPU7wJFQ3QWhxugtUJY2hYBvi4RK4Jd6ZUWMb",
  "key18": "4csbT53a5yMM4fSgoESxMeSLBoLv8Y4neoGNFEzCvysmAWEaFe1dkE7QT1dNMeoXDCiVYP5Y8N8nWCt4iqNu1dgh",
  "key19": "sSwZwapP4D4BVmCKiDPzHSWqJC46rtb8r5mjLmsBFDHWYkvsqAofrxBA7KP7bhEkwXEhRLDuWAzH2bR1YdiDFiC",
  "key20": "4YaQq6CaqJS93CDZMwieaEtgmZpsx8X4GqcDYffvpBnyASnw6VKnqna1WiTbxC4L7aWtxxvpMRnKRred36YeuU5Y",
  "key21": "2VqzMpbUdz2AmJKEUUpP2epJtukjhYU9ZY8sb3wA2i5pQ2X4pAWYW9KEDjRs73uR3dViMm513XBT4jYYRkBydSad",
  "key22": "58cAGrc1ze5gdkXnGoPRuwEMP52MvUhRdpVjtFA7oWhCmkATqExKuhXFCuamF4qzvyRCf6Wox4Je3Djrk9MamkX7",
  "key23": "5YJZv8vyPs94rASLJdCUDxhp1qFKdpJ1AR1iLURxoZjfBf4qiyPGdbZWzNioDURNmGpG8Bb8xbRNUiWezFSCHXWo",
  "key24": "4MRv8bongGKf6rWNN1EuQPPUVe12zscxQ5QzF7tE7xfzLVn9YighCaL3KSFwR1bC9UYeaLdUpZ39wX7RRnDAHQ7r",
  "key25": "44CCMP8FAuuXEvhV5HoAVgBdpwEy2ZAqKd6QoieQ5g2PzL6yxQbodL9juQSZijdwAKAKvQNJRaVY56dtZzFgNGW5",
  "key26": "2Vb9tFS4am7Hax48xhhFmck2Dp1bSd91h9pfXs7yogTs316DdyvtQwNZ2dQWPdUmSkjMkC6C3zUgxfEc3ZprwonQ",
  "key27": "5o7aQZjmLFx1x6vFzHkfVLymp5LXL6RNMgCvt7WYrQbgz6qQZhuBNha2cXpeW81tLTtcE67i3nwf65RoK7nD9LkB",
  "key28": "3fREZXUwb9hKk6mufS8j2JTqbza7FNFkToAjGndfAVHQGxzyxFjDBgTmzZMm4GEamabKkSoJ9eQUREnchRJTk8Lw"
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
