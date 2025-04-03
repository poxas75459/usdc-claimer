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
    "ZpTMDeqdnRsGHHm2AGQtH5Xebk7RxgpwGRJYbjuFJXE46FeMCiTGbDkgTqkbyXC1SRvq8fxW24v5NBHYFm65iR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfW2nwnhBUmfPKLx7Egb6gvqBpsA1B8Gn8JpFn5MUxSRHUzVti8vBpdYVQ66tL8muGSaTZooGAw1Jat9hsVEY3H",
  "key1": "8t6cE8qhkmTpy6wcF78RWfHzXNBzt36uzKJAWocU6i9h7Twj7UJhK2THuZv7HKESaCN2uFLdDVP6vCfZhRUm1BU",
  "key2": "2zxjnKJhHeH8cwKTJS9bnTGELoXejKkGjUeNnrqYdeEqd7LN1WqWPQV4jvr3QH9WgAbTuUgpR1hPRVGLp7s7A31y",
  "key3": "jdWdb5gJK2YsH8Qoma8qnoGA9nYN5uTLk6VGydEquegdgMo1KFrgSDoh2Qz5cWjdM6sniSZxcYdcuek4EQs9Gg3",
  "key4": "27UmnZfmcgkrDqCLLnPUvNyjVNvxFFpt6a5hDXuyjFkAYYdZmNQpfdwGhFwmEADhJ74Rf7A322c7kcXAPnwoG4KD",
  "key5": "2PCbgnM7kQjTxEwQUxkq7b6X8v2cD1YAzPU6iFRfrtPqUhkgfSo7fPrMBwBQfWSRHk8kzNADxzL3kBSA1izeTCx3",
  "key6": "KrJG8d3XUb8utpehHNzYk6qXGVoCrq329P8m7pqiAJVDWz563YYEuXk3gP8kijjJojypkmJUUscAUHhUToEHk5G",
  "key7": "2vQutTEspv43TPyuyMyBhf63sdwduY32acfXBqRgUptCjQ9BEmMXNZsmPSys7UL7XBzs3p5zw1rQbDRTV1ZFCYeG",
  "key8": "5pQWs6Ep28TMH6MUDpEnvDc9Ssp8RuZ9bMpVXRtF8tt2vrmQxtbGcz61b6NXG3fpTaQUumrGujFbypkEips1tScY",
  "key9": "5exyat7CevZsmEajZUxJRPqfx1FabSsiwAY42iURP7eE6P1m8mH9ikGS6VimzUbDGJ65Dxd7reejtpJ7iTZ4YiPX",
  "key10": "2GDxepb321ddXqPgEdbZKrhXNP4gqQjwbmDQvwk4KncQwgWyADYGqD1ij19adezSMQaCafCzcvAzQpKUx9uSsy8J",
  "key11": "2DAwJfahBXRQg74sbADqg3RezTaqdSfgkd4za1KKK3nU8pAKg5tFwouffMz9gVW3cULCE7Kkee9yZYHXusp5RqK1",
  "key12": "2TSxNnurvC4fwh1wAeHcgS9ZcpCMkziL9hVJaUUWQHfn8P4cKrypTngCg1v7zwJFQ1GguVYSoB6THHquK7UeRnY2",
  "key13": "2G9va42oS7bXDDcgm1tJmacmkm9MbLot79xk9SU6AynmWfJQyNf1fgU8yUUP254bacJ7CJqkHjZkmb6deeNdLFJs",
  "key14": "2coPfDhtCjzgKV3TgHK5Eiv2NhaJACVzTtZGQSfuUXobW9fDgCa1D188c3YNsFkCFamu9aZAM2eSeRYJQANRFx5P",
  "key15": "2oLMfY3fxPfwfWTjGXMB5TfqrofnyCfZG8UYbo5ACbN7NraeLX7BgsRs9Bt6EXgWuYEDjcKSY2162Ec1DAcc6Eum",
  "key16": "2tGMz7EosCxCQVEu9TuJZjaQYwWMjQq3UaonXMsR9gTG37KofTcAquFhPkfPySNGjbyUyoEJdHogtVbNR1W3o3by",
  "key17": "34vP93jL4N8EcH7vbaeqBPfmMm54PsBxqpzuip7qV7dPcEuL3AHGqJMNXx2CToDLwZLXjnJdXJRbgMAsdLUQAoVu",
  "key18": "2HQSt5AqVi7kusSbWn8YPvpKcKhAnz1hqhc5gMecYuhizkRjj5MYssBeecVVMkp4Ng3cEv5LCShGJiVHNFXFGGok",
  "key19": "4pM8vF2KaYM88LSrSWxzWypnw8kdznfCb349Q2yGpsa5c4ATX4fqCJtpW1fDKa8SBzTe25rwmTfrqysfttyF4gVW",
  "key20": "4kWa6Z9Fjk7Vom5WmqqiVCaEjMwcxmPM4vUuL1Pk4YZ4EokhYTcaNDn6uKtsi1dvyYks1yos1PFLxcRRG3veecvk",
  "key21": "5axXYPrGH3Wbt6nNG6KVxCbUHTysEVAzvrHyjybQRmYqTtwZUiNwaeietuXLcypaZ5dsW3e7vKGJLoXHYu5CK3BR",
  "key22": "PTmDrTCK3gogW97bbZJhuTXxC48zdD1ydNn2xY3waRG37xSCoLVJbdzrmhxuZzsmY29uYZ69gCgzTNk1hxVUwwS",
  "key23": "HpWDHxbJsWTxBoh7JRcZJqbBnoEN72zmT2gundc8umWLWURKHpymorXtEhxUuCmRrzcdD6PcEJyZzjEqRHfSPSw",
  "key24": "5Cv37F9iTZSGdz1L28WVij4MKfZ8sJ2EF23vxexcPZvWvXzFYo9Ws3VGG5idhVGP9MTubsBvQVFTpsezqcGtMYLw",
  "key25": "4m4k6c6nBzpodht2pKJBSBfzRsWk1aenCq2E17ibpPp3ftz8x766ebn9Hdb1GxGLH4sSrvCF8s3cdTijDG7NMhfz"
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
