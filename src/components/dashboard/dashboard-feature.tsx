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
    "qWisEyx7X7GJ5KZZbdpB9qKoy3zemyoupvHnpeqicrSjs2jW4bagnq6tDCofcsPn8VwXptSYJKiue1yqZ6WWSm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSnYTw2JtcPkyATpzwhdfyisSGtguicbocLpu6FRjHc2JUVFKzw8hSHCTZhoAX2kUqySyqFFoJBoS2MQDdrGcDz",
  "key1": "3DeEAup9aFYPJfWSBX2UrzGr7uY9L1st6aRpLQc49iTzWLXK3i24XSr1xFMLibB5haGfPcfX8kBHWfd9aDbK1pru",
  "key2": "5snXMpN1R5any9YR1eAKPZETRwAm3GzGWg75nH1eNJZMkv8KFjgoYHpYkhbntdbQAq2tfzBosSt5s9zvHbDA3cyp",
  "key3": "5TQQuC9Ly8UafGx9uDVtk3YCSFU2JKbs5BujrpXAQMLqsbGhj3WFeMT4P1yeX2Zfg18eLMM8CnA1izvrKBGNjw2N",
  "key4": "58QTRhaWZQngd4zyn8fdtP4b7qahW8m4yv8hzBQv5V9X8FmUJpdpV4H5Kwkh4FnLvkurZUJBYvjRUguXMfHu437T",
  "key5": "Nks9YbHXexDhUidSeDSiWMN8HuupKDar9GnaaLk3htw793aDKUAyXAPuigF934ztC3mcQUgridnQSwvHR3JVq5b",
  "key6": "2Mhsq9r4MTsEBiHfiS9yZGWQEAcTE3UrwnvozzYfed573FfgBhtxpLttyssssHg7CUKdoFy8hf5faw2fMnMTosSk",
  "key7": "Kc9C5sx1kPyBudLoUNkL9k9N5WnxBqWw46ziDAN6a9iK1U1YjzafYsJCVsTaX1NhWE4i67Nf7TbbvP6rrYHdLqj",
  "key8": "HaVeucD7QxYiV8hFzMtq4jTQWBNRS4N7HfTyLy59y8cqzHad6kcqvLXZVHB6HNqbndgg2Gn1gfrdai6QZAp2HqE",
  "key9": "67RrUfN6Z7N9rrwyT4tVv6dZLTB4xy1GP89FmZAB6PEmCrJGSaDEdNmNB8TwFppuTxeBUbLDGsL1EfV84esjFgJV",
  "key10": "3Q54XTdQDmfezYqkfMCvTQXo1t26FDn5SNTNDHHnHMVpVvXc6xKouDqjaUkqwYXSmYo9c2KwJRY5cqVEFC8fJXes",
  "key11": "24sP4UGBtcpTAjGjSNGBJxrGiv82dLA4z1ifW1LvaCVcJeSzfrWsaFbZRV8bsEMYkatVzTezB8bNedXvCho562SD",
  "key12": "2o18aAMyrGmANJRM1FPfjrk96dWTfdg6VcAWiEj3cYaNB6Ltoe5BSnzFBb2eqpkpG8TRA5GJaG2PmKFaxeiKnpGz",
  "key13": "4UAprLk6FdyF86NmLf1wwdYqEFKaCNJKz9xn6bPngbY3NDhigDw5eEKFFQJEgAcSbncSJLcdPynkxjENBWwbyCYF",
  "key14": "u9PXZGRq1nWgzzM84rxDcSrtH8ckpUBkTNJj4Hu3BRton9oQgQaLrpHhv44LSEWyiZ1s7FBotUxpdpjooH34GNP",
  "key15": "4fNFNFbkqgJM9taNndYMKwyB6sMjgcuoDvrZimNDAXaC1X71zBePSGrsUbqx7MCM4UdK3cxQ7eSUbVWGFZATzWWW",
  "key16": "43VQfDqH18AvoHVYSBFojMHB7jQbZTdi19WwjuAecLQemDyMpsFgan7BGxLqJf81QBu3q7ZgqCHJhWKDZb2kjPei",
  "key17": "5JWLesh859nY3wstymvJ6g8m3Uz7UjsT4Qxw3tw8Yu5reLyLTE9Q9Zfbotc36DPX3WZsdLwkbUYuMVQpCrVkD8GH",
  "key18": "9fW2aH5FazNDHpAix8fENrZ53cGjdWdbcjSTVotC9DSzgh4o3yWiZ69w7M1tAVpcNYDG3DUmzz4borno2eexYD3",
  "key19": "pSR586PMjYWzdX9WUPBtD1SYtyfpdTeWxhVeKHP5rYDzqqbZwv4JqwX94ew36YjPpDZYT8MyGqZrZA99wPPrRTp",
  "key20": "od1B2rTM3F5yRAzS6wjTvpqvCZMnvzrm1swmuU4u8mvrBxcGYr2aUSngDsntNU2RtEqXuSdY1ykpEAV66yXGwV6",
  "key21": "2Lj5EJkjH42Fy6mmbVQGmCZDfXxftYXCFqvyde6BWNWgMkZ7T3VURs9dyoUhrxdYqqqgHACS9GWdFvh8sycynr2m",
  "key22": "2dMDXKxm1KXn2nMTePShNcazy9tMgduCQayiEdod7rpJNRybor7kSWWYSWZwcfUwYUbjTsMUunF7rcHWakVoutDx",
  "key23": "5Y3PzmStTmXgPkKVE9JukmZ8KNpSLW82DLc5RF7szEFsD3ACte5DYSzTWrLpwnUQNN5ec11S72RSwT4gQhHDbkPP",
  "key24": "55zpsaYQVFv46eoSyyRKuKANqnV3gcaidRs2Wttuxuaaf2o2486kBYdNUXZbmHoxR8c3FCSZsDBxVRthcC82AUwb"
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
