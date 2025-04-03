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
    "5K71rTwtnvcQYAvSYrh6AQSS28e7bRhDfjaCLib4PgmCbdgVnnLcqpkAWsE4chdRVzyRViCDxP6JtkThzdCbRcrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wV6SfUHnqVJSwNr7fTREoeUUSGbNz1bNZPyj5jRGRDYsFRTA4gvDQdyJs4mG5NjtbvkqvsfwxXJ7dbm256jMpfH",
  "key1": "4xfyfy4eYGURVYvo4GNh7pkMyRVZeeMFhFXfexLVEi4MYeBqe4W8A2w11p8NKLzZHwfE4m3CnJJADRaf1Nu2Er24",
  "key2": "2QYpYdRxxRwJ9dzn2J44nUx29qeFcuWQYEgGaBsgNdkZLKduJ8zp98TrGxentRxaYANK1uGCgnupKjnR3oavzazE",
  "key3": "4nJLdmef61fUNwVseHEaewemjTeg4K8uPzmBEgtketYReiY8r8eeREtDTTw4GmsV9dhBq8LywwPkPeGJjJjSvVkf",
  "key4": "4R7fUqoPck7wxmhcBfhnivSvscJHNffSqVT56vbVnDy1hUSDK1aeWw4jZcbKdybwrMp7XRQ39hfiHZpHziAvuFna",
  "key5": "62yZfpvVbvKHJEumtc2EFBbSkYMYtFWwNjjENpnR8mBqwFaf63CQQNAxdTgzKzMuVH6oLnC2WdUykQhcQfmF6K1N",
  "key6": "239SKc1P2CeXE72tfUSDByu7b3rFav8dqvsox4FgBo3tbG65xNJJiefwM9pzSC5R72XRqH4tW9BVi4N6uDn1VtW8",
  "key7": "4BwgxAn2PdZcPmjZw8M27mNnkStvtqVfxq6LPuUKUdEj9GcKCGdxUHXHAoEPyzoY5cy2KMiP23eEfNyiyKRXGqE3",
  "key8": "2njnjzdmG6eKvpUn6r9ziPKUAMYKLSbngBT2U3BSBJjuDTx5sfwBH9Lx1XRzzbiUXmnB9RbqNpiB1PqncM8uGCcm",
  "key9": "5rSn9sjA6GaxEtye1f9XCeByNhSGbMoCV578yB8ZQpkSRw1SxNa2pGz3sU5Nj3GVEQNFPcydt4JE1gTP8XshEHLq",
  "key10": "2ZR6TS355oMJarx3oQaLtwsGwBaFD2p61mUc88pcxbBWXfCGpNyMHb1qqKHFfy3bVHosR21hciTGVUDpTCuS2rMw",
  "key11": "3ftdEs3FCaKoAi2mL1wpyMTXeJtcKxhisFfM5MXpAkG5oFGuYUrKo96VFNNcPDmPbmT5a858TBCEgKUDUe5ZVD3T",
  "key12": "28xWHZ9PFmXULTnHMJYihC5eJVrct5dS2APSodF1NrRqSTw7pfvc5EgEn4xjvFJ8Yo3HpLRTv6PN9ETTG5y8QB9E",
  "key13": "4DqEWKvvdahd6fJ6awbB2RSMVhSyAsofeT4ZHAdFSDzzF2gxRHunG5o3W6Ey3aJJFCvGyTsDYaf25ggcqXwxmdmw",
  "key14": "2hEizAfKYw99MsSrK6y2wV8MVnQtihYYciwrE1UtPFiwo5yjejzEYqDTkAAaio1Z94S3nYJjugNtRrUWNeorwYsM",
  "key15": "4gVRz57dXkuDv5yM5LkCmjx5BtDb3DKkJtgfYBQZHr4Xa4FfywZCNMQC1FpAi3bdFREZWmXVmouJPg2hURg7g4b5",
  "key16": "3gsD6585gT3hXeQ1YYX2r3DXEBv3tcvL3DC5McXh1bUrU9CuVzYin4XrtQtmRQ2imBTZokbyRNyK6QG4SBp4oiM3",
  "key17": "3zxwZpRcGitPdmuzMhuWx4FEFhzqMaM4YVFUw8NFatxn6HfbY2MD8wMBgAv7FspSmS2XZDwu7PnfU6rQ7fXzdfj8",
  "key18": "5C2FQ1mGWFmWgErGP1htvt5M27Rug4FVvRnNF44zMjZH9QG7FHLFQHiL4KafhZqAT5kicbttFR1oECHhFzx532fu",
  "key19": "4xHQHmw4zbaESu5z92cjBKbdNQwu3unrSGspB1wS6VXguFskwAg2yqaSjVLDVvZjbhW7jenw4Mn7nj5c9kaY6sWo",
  "key20": "2CW7zgKWAJJ5h2tEkVoxLuW5fArpzFxeruTPCbWUq1QP9Zt5L9KoiBq3fXKRyHQcuVjQyV514zZtWje1FgHz1KHS",
  "key21": "39w1iDmtAweKbH2bmJx6KP5UWbEH1C3dR3NtLpBUvioUYpzNgb5QJyEntnsx9VUnETax2RhitRuELEwUkPPhsgGh",
  "key22": "5ACSoSf7kxtipnT7xieqTSYoTJJf95SADmFpqjvfvaaAPvoMZYoQ4j5ywP4pxYsmkqXuuDCYVoUkKT7HnDnP5SBx",
  "key23": "5AWJbHNqiZ7eVFY61jMrPpK9tcMcyDL36F2Suxf7ME3811nmA71QDeYbuxEFwjR3vJeUhfvMASazFY9Zv9zm1sHC",
  "key24": "2pBSY7oLNNorc2KLUuP2WAEBmUtK5b8m2HQWy1uTDvhEjiAeYqA3uxck1LMfaioB9scGaMyxkAHTmQsHsMUnXb4d",
  "key25": "PfDgJDZ3B5m29bNm8hKkW5AUcZQQr2ycdXYuoXkQDd1ccLue3RFKw6dZGSZQSo6mihyPbT9uYaQWKH75yhrhz3G",
  "key26": "4dwyxu3D1z9f2iikLMWhsLyP32hpmiLKVKAwAHbvXaNgVRn8s6bkG9VU7vUssWEjKkNN5gBgXJo71QYF8JGoH5Ns",
  "key27": "51DV8dDk7wcKSrH7P2zRVrXeyfbzp6o8uP1h4bWTBNukiQ5iSgVViH2EmNF9MZypWZSzmgNB3RDveP36nrVHcuBc",
  "key28": "5pacuCbCdijm2w5TZu4NTYHm9GUzMe549jRVtCaQ1h2NA3kQLb83k2QszhsKL1KEhKWK6wmPR5GY5X1ZXHxzGmtN",
  "key29": "4vM3zv5Georxtr9a6hgmEX4Lfm44wcFXU6nPZMHD1Vs1EPMMRaAfZ7LBukxS2LjVVtrq6SqwWHDuxn7QzdPnbT46"
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
