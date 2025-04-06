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
    "nZN6L48AnogUoobxTZatnWG2kcsnGoHsx33szo12nibA6g2xNXjgkHTTZJqANPqvfyMwAzpKciw3iJtveJcyeh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fbLifgT5GCSB2yBaUGe2UmCxkwYCAqFyBLzW7RtaFB1tsKtMfSQqqqB1ac3tpVqzkD44grJteukLpy9ANMg1HhW",
  "key1": "3pn8FPZMv6Qhu8iHPuaveLDNdqKsJZy4n7vrXrRvRqrgFyb5V9wH7HimCoJYhfZeXFZwqbXu7A5zVLU7oiTenXkf",
  "key2": "DvZctp9RMueC5pLAuA2ZbdCb6sMDztTGb2EcUZ2V7vvpcdcRZr2PHUzysZk5MQ3Ha6pVnmHeVwf5XCS4L1oLRE7",
  "key3": "31eUykLgMrpjggRH9uwfRBUfkddwaDzSz8ixvcMFjognvwEiq5tw4ggXDS77vXYSHHozH7ub7ES74uDvFrMiiUwd",
  "key4": "5inAabvK9PTswXx39sfUZ7xQLcGdiz46hxbfKDdwX2xGAVspNnj6gPfvkJCTvsUQpVtdBi3vYx7UpSMiZj6LaBZ",
  "key5": "4m8DfencwYm33cX16ia873UZEMqzgYMU9S9BJEr36bh7YpoUwwGtMKhhFnyXQh3V2qid5ERokMtKU5JZseRRasJn",
  "key6": "121nWKKxauRf3z1xeR5zxjyVCXUNF1zpmVw1gS4oyZP5SqWFTVAwjXeLLtbu6SYgxEzFSXA8YQm9wckY61wcq6JH",
  "key7": "tpH5NGebqtre7GGL3cDMyRDAuDWwVaex43N1jbNgS6FzwmCwCPfKfikeo4VHW3zFXdDFGvSrmqniHqh2Pv7Uj8y",
  "key8": "ocEQeAcecLsv5GYU2p47XyYmzifwi1CBSjhb7SPJ3LEBfDBZNSZDxEPmRt732aDpMHeSXKh7EavYFYBiu5Gyd7t",
  "key9": "2ohQWQYZQNr7BxVabKGhJc7y5mx2Dcm5P4yNA4XhD6QMUgRT7iDczcnq3vvNwvwYiEgqReunZAn35bN18ZwikThc",
  "key10": "2cn8YNTjEjpwjUXB2mt37sRhfbHmUtDRavodCLqRzXpRh385xgY3hbnJdNRjGpVKzEUFVddEt74nPZ1GgaVWYWAN",
  "key11": "4ognENoTPAA1Q3bQbjKdLLeem8eRf2x8VygVFa33ffcMjaHncufMv6KH51oFsipnagNERwvuCzAHxVGaLYBxHaq6",
  "key12": "4QubiPh8Zaw6QyME6gPbqkfGuSjd55wNVaxpfTQQLn7oeDKoeytKPd78VztaWVTBuv2e6rFSwNZdEubT4wmFMWyq",
  "key13": "4FgQksqnt6i2yyL5TkhEvhSYJ52Nxr4R5BGDo3KJqynp7SxiEN6CTTtEpeeBQVP8eF5fMxdAPqKXmheCtrZP5dnj",
  "key14": "2nPKnPGQRjBRdrGqf8GxXjZQUcH9CME5BbgY5guA5rpTus2kRzyNFJCs5u9BgH4RXrJFLtDkUKdcjipD3r6WXC2G",
  "key15": "5R2322QS84drzC7KYQhn1s3mHt1TqqQwCRXq3DitAza9zL9cjKwLCdnFUWSPs6j1C8VXbq8cohgYmFGn8NFvbZJe",
  "key16": "2uUofr72EU5ZvQVGnsYo5SNGzaqPnfxw8nokbcU3ddzg6Cs7dsHYX8hiu11feTmzfTU4kQHk1MzPDNvBQW3vUev8",
  "key17": "2gS16jrfhJewZdfeGJLH51s7mfXvg2W4rKLZk2DEks9vfAMKWRxxgb38XCdAeHEBcsNBtxucXPiSLnboyv9WEvE5",
  "key18": "9qJPWjMVdRk7c2dcWWQcA1MLQH1PEskz7qXxCp4czQbBeSBtScH51KyQRpwcpNnfjyZswtUdh3cQe2AoeTKP9P7",
  "key19": "5h3cgqjG9QXBqZBXe4e14LwfyPYM1iLdVB3cPQhyuCaEmvjMETZpt4RCmoW1ZV9FpAVAvg2BTeA8Z6v9rNt34GUR",
  "key20": "5gJgtbKikjx9o6cR3VCDHoMreqGRZq35x7KtHNR8ouruy7b4WMnw3xKpwv9VPWBAfVuhTYFH99f8MobZSZk4GkJR",
  "key21": "9m2fRShB38QDV4Q5jEEq99wdzUeGXKwMMpe6ZPKiz6Aa1NUaF3VxtKtgnAjgwiNxeJotmE5yZYnfRh4N5GLWAHT",
  "key22": "2LTXuBMhQBKw81vSpBSTGPXpRF9ZAFnWncY8VuvDfo3LVEV12sbNPm2QskLAT4oLKHYNpfhaQR1t4mbuwWCSb14d",
  "key23": "3pTobg9bFnSLoRpfucUDb2q5aa3bWwv4P8fHvtg5jBJ3pv5jR1VydV74knGjv6e6iVWnjzXtvnU4e8bBZDDUQPGC",
  "key24": "34eXaMBjFA8qNthcVAheNFuvKUWam3HPb9kmWYAPcCLEZZQtkunKGkAtjNMs7epWMPJAnk6JGG44vxXHLkuJ4eSk",
  "key25": "33W8UY3vbB3pKELKGEUdUZAAU2YjcBQfcGYHZ2Q79h4S2Ggc7J8hBDge7Js5WPFcGoPDfyAEZzfuGVBJAvQ99G3b",
  "key26": "4FVsHWMU8gUA8AH9d3f2iLb5nX4a9HLY7tME3JDp4Uis3VtdnTvvaLLYY7diVp8M4DFuMJyt5eiZ2U2e6bezrUsa",
  "key27": "5Sh2Kmh5ZZ426iAk2uvq9CajMMTeaGfLcgPWKNrHeeeRi3Tfn9uAbFp7ujuwRTYqqU1azhV7PX53yWLhNiQ6YuL3",
  "key28": "4RJMakPgtjypya3HURZAjwFLndYvuCtqR6Zj3eizSZv7KQxRp6qW7EcM8aiiX7eo9GJ85dLNVh2eTsV3ra4Nr8kZ",
  "key29": "5gwgTowQas8Q6nUuTm3A5xpVoN2KsNB6qtXKXAf7k6xKbv6PPi1XnfqpbQADQLGKvq59942jynFxHXbYumdQ4bsW",
  "key30": "2kHtWsHrr9tVFv2LW8to7VPwapNFug256efTffKSUwT6GEhR6zhRLDZVRe3qLdWZVRaUUWixeGBN8bPxj4tUXnjM",
  "key31": "3hB6XsNd8mqR1i7zD7JSUti1WPzH6TPvzHLCjE6zHMsL5DtzDggaNZQXMpM5xV6uZ5FHzX284dCczWvRortv38ZN"
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
