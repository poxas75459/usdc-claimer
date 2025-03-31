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
    "2HrYKUmBjVNKCArbennrGj5od51h59puLT2GsZ7VB86nReHJPQbH838p2trFA1AU1vKLoZc7xhASL6b6BFkFLcV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWVkgJsoqnZSe5DjSjDhkL9UuyWvifxBo4BPmFAJGxgtnmxkap8VnBRyUHwjE9GRdHcrracswmAzT2CNfQvx57",
  "key1": "oy45drssfmwEq7h1L2Dm42f1cc6kXRub7RWwhYzY3aK4oPdXuBXg1HRvP8yMHRC2T2MgFKdQt3cL89uR7YhdGjw",
  "key2": "36bhFWoNCgveTXd7n4y4Y7JBJSSzDenCwX55yq9LiYCC1kvdsy7RStLmCotb7KQrVpWZZYr4Cif11Fy6kMk31kB1",
  "key3": "2x9T5LiozrHC21VvA38YHh1CwcMYiSbTVnnnQa3sroi5mMHojfEUtC75VZPo965jjL2mcgYA7pvmzPQLWuVnbKxw",
  "key4": "2Yik4cfkkfsYG5ppShBo9A5wKoJs1u9xb8L4JEHcNqH6iQ2bnLwUtkbJsyZaQQGn38aMBHMFDmi1r2Q6NDSWwMfA",
  "key5": "oukrUbP7zUH4HnvF2Y4jZicPbSkw2WfftQAarifsJhLcRZUokZWEwQ449GmdBLGgYbxXXJXx6rmbCej1bkdjQta",
  "key6": "53sP1MCfrn6BzfrXwYY5Ss489zyedgxEGupbPbr12AwjZRbjqaon6hnPKEtQ6Whzup9FwqAUbp39X1Ax1V8m8aLa",
  "key7": "4SJoznmkAErNFxoj6iBNiwrj5x7ahvimZ4qBF8REHZfv5ErFZdN1jzXCjUBG28wdhMS8JoJGzjs5qqVppVfeoS8N",
  "key8": "3bc5PJdkodbQb8f9xcS73C931x8MdQze6botDYc6f1C7jyjUeN15sgzidr9ZY8LsdnNA9PX5pgJ5NN2EvJUgGyHd",
  "key9": "3MsZMH2XopVBHcQf7HH5uznHujNfCs6CUrGhKYNtsYiXzuQG17xw76LWDXqwRfW39vcKuTbZby3FDw49Vfpkwzir",
  "key10": "2Py3ChH1UsbZSazjGk91GvSCuZUwMRGhu7pvneBdsH1MCMGzDBhunbsDFhWUVDXun9QyE4XbFUyM1qK6KH29DxB5",
  "key11": "2jqLDhTMuNY86Mfxt7tSwhRu34ZZpRFa73Fhbowr8Z9eFPbN9Vm9TKcN24hyXKt77vVKTfawN7qX95aJ2YAUR4Pw",
  "key12": "5CuET5gYGmgcEMviHaEfWNsCTquxJEXi5urk2PvXrWRv5QfR63koNsdoLHF9YsfijgL6cEo8CXNy8EJZ5HAjfJa7",
  "key13": "3WH9aJsvGvTZM915MXLN5ySrT7seZeCCQ5sJyNxvCfMEBihbQtuMuhTh1GcPsjs126kjtVA7rTDdTQ2h81XJ35tr",
  "key14": "5u6WRQKGwYBVKGpgxv4wWmBipWoDuyYwv5XJGdRAARgnyNXbMaEgqsfdeNVmK4Ce5qEp8eroGhaoA1vyTHA5guSU",
  "key15": "36SGeJzR5syWs2GBKuBPRbnqpC7Tq1qU6Cr8BftKGUKC2MZRfZcg3tYVRmKdnB4NpQxR8mSxAba6wYicKNBdGcS9",
  "key16": "4mStLEVWW8qkFghZvB6krJRHrtxMN8hTqvhB61W76x8yMJnpaWhbpTsEqxts4aAfuGzrXXXbvobqoc8JC71xsuGJ",
  "key17": "5EUaZ5K4PQuxsbdTRpgzzmpg8rGRHPHacwov1JXvTCSyTVkQ3LMSK8aPu1i9sBgTwJuDvEKYB8dccWw9K84T3u2c",
  "key18": "22KfT2Asr3c7FboeadqNvfADZPgAigS2C3d4Mt7VrjoBgNSsH6PHN9ntiLAwBKMTySaf1FKX19bi4rhMwjmsuZ3C",
  "key19": "34iyyH2QmHiKGpyt1HnCwK2gdueuLskQY4HRNyKk3fcCdfqz5BEY28vCruTby4AZHUkJG5ZkPk22MuV5riKN5Czj",
  "key20": "2uEsm5Cw63AJwC2kCCK1eooRaeVCt2p3bbUZZa29wWSCVcBN8ZsnPwpTrzvFS62aQ9ENB3dYgU9jmXNq2PegAXyh",
  "key21": "4uAVrFuPLUh7NNEPpTphPDxAda7eU9LL5g6118Z79G6FsaWQec6XE3frGYBfP363qLaXMHcNJcnBzPBg85FJhHye",
  "key22": "22ULnWyJtiZg2CuiA1TmjU4S9WPJ743YcA4jFBKTjFbqd7cjZrsCNFnKnfGM6CmdU6JaZ5dgxQc4x5cZypeTH9pi",
  "key23": "5sJbD4HA7z2Wid2dvuCF6oHpeV8MKj2c6KMaz5KYUWtn93oEEQo4TQiWLRv2VxhitHmAqeCwnPhhqx4kcGL4XjpC",
  "key24": "jTmzeaMfuDfiUw9NQ8fXS2KpkJTFTVS6NxpGaX7f59kYdvhVLXnKRmhgfD5xHYAdCiJsLWXpFWkJg2c2GGJMqoq",
  "key25": "5ph8J5ZfPmmqhkjKhm2Hpg5HLL87xumBcjrdsD91s5ee1M5mrQe5y4Pvsv2SMAegKDsW8hme779gNVLkhcZxNYhi",
  "key26": "3de4V4DrAyAtZLRFU8P98WavXgwonJfoEmZqv9bkyEy1EimUsGXDPvzHAuPzCGEmxhQAKi6HQiz1o1Sdgmt6V7Y8",
  "key27": "387x8iAmxYpjqdS3QaBgPe7b3Udr4gyrcVrUgUVBXBDR3US1Tob4WTmxEjgRGC9TwD2temjPanrwqjVTT1X7eQcK",
  "key28": "4FLxp7cKX4XJpn6zmpmPVpKxgo8vFyYS8edzviF4ureAU2kUsmTdvLB6kzus4P324gprc8hx7LBpmBeGQZHMwxat",
  "key29": "5ir7KsJor5t9qwiNZF8EgJfa36aAfVox8Qx6yHs3hX7FJ83TJbpnXo8eAGaxMgepEnAQVb8xDaLjstHfaqw9i8JZ",
  "key30": "oryCYeoFjsVqFTK774neSED4nCQR7mk7YpQFsUZqM83QDVErka5VhNgcqFNVFrZ8PWYRMzoUCrFHRn3yKN31Ebm",
  "key31": "YpE5EerRdN7xEby8Sjx3j6bSAowbYS2ser9qKisWoSRXPTCoDALw2TmbE5aJSYMS4dcKMiCQm1webxH1rz7sGcs",
  "key32": "3KAvcUXKx83UoKYjYeayVoLAhsw8udMiiJFFKG7JstjJCw5HE3b4w3AB1x2SsgpeqS2Y6rycpLSWUHh6qgJhpW9r",
  "key33": "4UntkUqYnTvVyfXYyLEKzbYKitFo3FPVpYg1dMKMeEL7kGkcpgULhSNGBhuxmUf8FigdTX5uruDnFRvhtH14E6yG",
  "key34": "2QLLEmRFvikjRMQHgQeWziNeZaszvorgEG5EL3iXkbrarWaka75k79mUDKJdQYB4wEgbsiaus3xoKSuLUM3AVoAv"
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
