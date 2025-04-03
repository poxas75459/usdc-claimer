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
    "3oK3a4A8bdDpNAt78tcUMWwTnWCPNCu6Au6KbQMD8zbhBD8hWj6T5b4m6SygiRtdD2AwA8tGq3LskamtyWmZnBni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TcZq6N4oEFny5GerK7dhAoQoQU4hiFrvpYspescyUgpMYpEKWAv9zg71ZzqySvWWs1aUF8ch2bRFLaSAdxYVUWT",
  "key1": "4GQweTZS3W5UEdZUXRnpunGaEfTn3mULbc5EuQvJXiws46z1M8LCbjURY34PJLvukmoFrGUQnWDJTBfJY3eJVxSd",
  "key2": "2ciFMAehgkZtdCVYVeyQvBYWVvi1LopoCg6GKmnNhC8HGsyT8VizVQTVmskh6gqXqxoXJ9fWfVhdLPYnMZ9JkoWF",
  "key3": "VQyz4j4AhkqPCQZSmNsCx7vk3GHYZQJi2gQN38YVUwu9rrvqFzhy3UdMkZjLwbThDFf8YiYZTKunD4oSnHpaHvW",
  "key4": "2Jzj5WBw9JFfURFvV88da8s2Ukd3YVCpbDUpW3vUajypsCDcjjpZjwTPmPoFm5itAk9eTwwjqoM6j767Qb3TUNKK",
  "key5": "2cJpyfu8pZNF4XHESwq2cZeXDTgfny4H9eckDffZKWyiLzUsik3L8VySJQZzxcaPG6yNLDitZKryQUPqejYobgEM",
  "key6": "5NrnhH1TQ3ZdrVZniWHjm1WTK4ho4QwaUGsKy6imCAYaS3FnTy4K8Uaome9aN6ZevWb7bRFngujVvCT4Zdb5BDk8",
  "key7": "5EkzsZxLzqKG8YHCgpHo3xh32S9DpB2PxbmxtnTFSLX91KE2iqrEPQd6v9wKocCE2zGY29RAkVknmUt6pgdmYkAo",
  "key8": "5dgHBBCLk8398BpvXKwB7mZZ4pvNHGeGLLetKEBStUG7Lxe3rmGFjJe4UmvfKzwaBrgonf8eUFoAK5bk1ufPMyfS",
  "key9": "272G8xcRrZs1HXipWSudDUieMnE5La3usyWYtryMPxVr63JXBLPNEf33vWpSUptNjQkgm7zNwhYzsmH1rduxueia",
  "key10": "PZzjsUWvjVn14nwCimGFJkeE5Qkp7rzqJt5cAjqnKXJgxteZJSasEasW53S4RU3ReB2aqvYRJDQx4P98Qe2NzbU",
  "key11": "5jM4vQ9CGuq2qh1pQ48srY8WkEFjfkfJMhM63myYnphnnnAR3uRFtcPTj6q1Z6LyKo37N7c2eatT4uS2PFKXy53p",
  "key12": "4FhjHfB3fcXhwzSF4wFCSFB8GWfZHtQaHUekXRHdhTjkYiVA8yu2JTZ1eB8JWDgGuXbfegnxAHL72gtn1noKT65L",
  "key13": "435Nn4QN48jzN5JcexUgLx7HQE8ayBHdq4VWTM2JhgVJc8xgHeAAyj14siTVcBNi41SCrENKdsDYpkeQFWY7WyJt",
  "key14": "3hrH4uC3RD7ecnPwZEGHp1BPBTWAkzHmLcAvXW3PH8geuA1HuwdptYM7QFRUnPM36GqxKosoQvxET2R9gHRAB15m",
  "key15": "39exh1i1qFcyjfyShdak4HiiHXED3M6jRQck9b6A1JQivtxw7imo5aYCSgkRb9xdPgVmYDDoZb9BAe3r8c8GDsMH",
  "key16": "5wJ7TiqqYp8KwH5zbuoL7y93YgZPWsMFdnNfZGmuNhm8YbxijBBbkrkT13WvVeWCQQ76DtrshciYmbt8nymCtxqW",
  "key17": "2LNFRNf6wkU9y8G1Bfan7Y9JVCfmJPBXUMbKyjhnkw9rV67NUiYTrFpyAvTMsG61cTUwp1rdiPugsorkHxKMSUw",
  "key18": "gcczNuzG9WypM7jenrgVh69UjasGDmY6u97YexG5TWGsSDNVvwWMQ64hpVrqsUUB8HhbgG3BeRGC94wmFtTjxAh",
  "key19": "48kBdM4nnN24VJDf7fW6QpHGJUv4uTQYgtaEUHF95zP5db1woAxgx6KQ4MfXjijvh7fEaLNeuux9HGdH3kFD7fL2",
  "key20": "37WNpkK26fhDWMLD1EF7b2zFoFpDhVMUSu5YVPgbFMSpT3crgLqAmykxBKAmyDav7fiBZY78rJmyFJhePUbU8XxR",
  "key21": "g6jb8YT9vdvoTBfzUreTrz77LLWhuGoqLxzZerWMPYCLJYxH5dPJy2BE4jMBJ7xSdMyaShM5rqjKDKX5LEf6obS",
  "key22": "4CQCWbdqNeQiQy3aDoGeyH5c2jGppad5UQwGoXj4g8zTDeX8yYKK1MJGnoZn74hVKpKUMSHKWwUyiWGEWyS5wC7E",
  "key23": "3Q2LTzpjH5zPDZUujeZ59VcgPSux8YxQKZsP6KKfr9pUNMy653mcuzuN2oTAYFkDLS37ZTXFpfWN9vC2ZckKXFoQ",
  "key24": "3PprMw9K6SuZM3TmdqfgfT7ELBY4irSMRzywQJ41EssgVjhZ5RjncDoL1iU5HACdvwqbJck8qvT8Tn374PZBZccS",
  "key25": "URCmmQZfxLPEnmXfjLhGXZPS9Qx1G9r7QKWjMQ6Q1dTUTTAPAccJ3oRb93zxhCGuzGEvZBUbnpLgjEANezStnfh"
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
