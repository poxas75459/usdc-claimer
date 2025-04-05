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
    "54v2yk2AT4cZwW3p7GfoPgCGGE5WkNQ5FB6QV9M8R3uNKKAHsQcX3nrtBhVLVhimqSU98rg2Fh6iPNoQa4qK2ugo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52n4wLw7yv8TiVpWpH8govqJKHp9v9thJme9CDQTUnuME96T6ww4rhGHbi82iCwC1UMTJcoqd5jbiyAjN4V1pqB4",
  "key1": "5eDseZvCKpvzNrKFzDFM4xdZCs45Uou1Fn5PXppaPmjkxwVUajXCp5EvUaDnyKBn4z92FJzoahUQc4GhwhCM9V6k",
  "key2": "KAz5wvcCuFreLt7rkC7k5rgoF6xQufd7eg5J5EYkYtFWbwgHNzHFv4H3i48dNJWwfEQwzkfp6gKZBXv8FVUKHVA",
  "key3": "Pj7PuVMUGDnhkwUwTwB8eH51GpLjRBbnRmBF9QMhA1qrtrmfBtLDBp1qWDfz1zLHxGeakuf9Dj5ZhoRmkBG2W1q",
  "key4": "4Aap6x5Z5ULr49vAtcW4njnobRg1JB2jcTNcG6Jxy66jqckohsvE2GWJyV5h3BGKB51GtV4FukhF6WmApPautu2M",
  "key5": "5MTaVdvRR32ohRCZ4Nhtbrp7jF5ibFFwke6HJBzkyva3b1w7TZ21HgdTMdTtJ67xt9vN7ASwiQpzeq5qXRSbpnYn",
  "key6": "rSMK3ZZCmxgCcyxZtftB5VLVfBPe5v2g17vhG4Bkca6JpXxVPTejFAaQqnojJyro8ZYsoYXtyCV8svMMt7yEaab",
  "key7": "2DXBvzoxrfgDUfHvEy8A8yXbxQv4ZRYqApgZa3ZyjgmJuy9k2iyXsDgWfoQJ7hjLW8BmWqU2mkSn937FBwPZVDRJ",
  "key8": "5zNveoCfBonfKHm88cpYzPS8QijoEeTqoDzt4hbCxQdUQzvJqgsMP9JdR8B5bCXmouqpTaBPrfXFoMYzCZEk8f7y",
  "key9": "4CH29VmwkCGK4n6DsJ38taugJ1CcThNw4NFGqd91n2LtuhR5aarGqZngrK17yiwnP1aspCePRZcRYQkiYLXXStkJ",
  "key10": "4XQakCUr8bJSc7PnRxNPpokGzryftqZfZkD39uYDRs7SymyPcaKuuEUg8jXbfJSBKtbTrdCgu2cCqSVzBiQhfqaj",
  "key11": "2AQhLVQFZHyAxfiYmurzn3WoEW5FdgjwcaPurXVnFJJSMB3Z4mzRL9TnVMnCWM4Pneo5ydhVD3Df8fDHoVd8dFXr",
  "key12": "3qUDcJyJL1JVFPNaFcNrm3e5e1ZzvRpBBBPfmmkDUXrNKpS9G98rb7PKS7K1adR4xU77L82ZQD28Zbd6Bmq625e3",
  "key13": "LiBtvWk7iU2DJ7ZNtfZWFhPSBJXqz5qH3G2Y6NzmU1tJ61fYFQYB2W9Di7VwRFMHHBNHUBDsFSVuouDq2UanyCW",
  "key14": "51FxKDZ9E3Cx4WyNiF7HyKQjnxV3fuKqrgczHt3eSVtHDQy9rb6EgtX2sxUkmcuWohwbcR3JpFRYi1FhFVtXacVN",
  "key15": "45Zcf1usmjSJ3UR9e9d72LxVS4WHbgbbkWhryY7hHLXSCiHcqVuePcnhorzt2bFf7ZppDHuDFfhjiRRYpYKjG18H",
  "key16": "39wBeSGRWTmxWa2PpJ6tDKdj6D4poZ1cNCX6h1Doqd5WgFPpF529fEUUsrjgL6vzmGX8zYt6gNixs5gmKfHxdK1o",
  "key17": "32DQAn5o6CeFMXcB7FWw9pzS4Aox1Z2dcrQSWYAJRqtHZbVHshCWMgPswSmfUrPmac8XkvWqGxMoxvUiXhSv8r4T",
  "key18": "5VcxrEjY2XubDmsNjoN8PDkDYrYN8SMJFBRwNG46jtB4VLyR5A1ytLXkD5PKkJ3CysPQTGgk3ToTuHzCsi1uocBG",
  "key19": "3y4LUoB7EL6aBpWxJj6hGoVjTEW3vcVRJbbJz9M712SLBCqzt52oLMA8W4fVRMVCHog3BgDJuMcsnRuC7aLL4vUb",
  "key20": "21uKNMwX9bVbuauo4f6BqPGC2WS5xstX7729N2fa7iEgMEojs8udfegCjvvPiJyCyajjtofx5kuS7i1UMM2nFcgX",
  "key21": "4B5wFrMi6YQ9k21pKVwcSSHh5mUn4cmsL6kzVLVvMD3eGpZDTaw63LsifdqhAJCWfvEV56KrPEqm6rBGGg1TTawa",
  "key22": "2hok4V8FqEEsHueTBfRMPUdCQoj6em3nmddXvSuZqBFH7scNQ3cgTYEF4cVbiTUT1c81PVvzwUmF9sJyxK1RUQ4B",
  "key23": "3yALk7So88QURsVCUsf9MAjVU7pKcGepBGaMkWUyzqQajPHdm8WukN5T2xkhTJUAiRz1u5kXu2mnnLNvnRN2qUg",
  "key24": "3bFKcvajipwGuWv24MvjsQzXMWnofPxmFLrCXutE2qoVQLcwLuW7Z7ptWpNNP3GrojaqS2oUFtzj6sbKMB8ZNWyP",
  "key25": "3TvnJd6V2U8pqrPVD86ukFxyRRB2esTAYVLqAJkpKGExNxfuzS5TNFcfnKYGsVPJvGnCGfrDehteDPBduNzSJWop",
  "key26": "2W7WQ9rUPfkotevKeUkdYmkRRQXjfzk1F3MQqxvY3Kxumk8uM6tRYts98RHPTZxiqtMsb8ULYJdt1Vd2JHbXhjp2",
  "key27": "2fhewJ3ahM4Y23xj2fuQNUw2nPwNQYrmwAnZtS489a7B5Qzutho7UEpMv4g3QyUXHYBjDpCFxXhAX76en2n5cAtM",
  "key28": "5P1veq9EkhkXx3NoHuj3nRExxim4hNnXwK38aZ3mCyEAN5u4mDSxrDbGJWbRbmdmnELek8YgHFTNhzzr1Qjqyq7f",
  "key29": "nefMWEcdxoNa5ZEdXyc7TKqoFciysEsX6PBEts1jNaWfy5yhmDerLCCdPzAumwNdMmqsHB4Nx7qwNDFXqNgM1Tr",
  "key30": "5VA4aqWchxYtn2xTW3McJYXKH66X7inocx9nznU9CdzPojTHeoA17ktahUXshSAtUuh4f3XbqTZNCnuSnrD2ea97",
  "key31": "2Mmd3vJGVgdB9zbdbGeZT74ouWZCVmGfdzraA5MT13ve1DnsxNh8N1eyCprEounhWcjjTUzLvjpyhCcTmBXvSc6c",
  "key32": "3trt1XeUNMLUHNENVgJsaeSHCheXGBJWzb4b9N6DFTXPp2KwpsDTBkePk3gqLVNBMgHLcExujxWLXNPtw7Nv3Dya",
  "key33": "3fL2iiinpkDwFfLXyFspggUvzPJXn1FeKnT7USHvo7P8rqU32dvtmBmmLN3sYeTwVZ7ekXXabHLJ1ojuBWaX8RNA",
  "key34": "axEKm6u3psM3Ty1xXZqMcEtzpzmWXkZN1AeVEPhPfwkQ296SnBpGwqyzxUkTHQSSKxXGWC3Snrun6Mnjq1LFCfk",
  "key35": "SpvhqbhURGc2Ay5a15BDkg9WejGbASeXmSEq8pZ9s8W639dPjMYH9ESVvB3pU2LZUTaNfsYLcfiKfkN7i8e4Qs6"
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
