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
    "hXh6nsTFhpDtq4YGAVp1LZ9brczxttMpjmwkL5FEZ7kAheSYS1NPtAW919szvF42oJ2Uc1APNTZcjvmnrUXQ2cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kpvg6n491dBos1oeztJkdR52wEh5Xfu464mqhNFSjk1ZBQ2bc81AvYXduraxeB7gjGHgFp4ApzJvjPc1vyeiwZC",
  "key1": "3LbiBX8np5FVN1cQ3Hpa1SyJ4Ef7JW3TBFpHDwbkYGeHfxQFbgZX4PU9Bbh4jHSn7BRQatXe49TGhmS7bdu9NCfy",
  "key2": "3XT4AmdX9pnQYKXcnLKfyStDLL27pA8tH2NUhVAc1F2FwsyqKvXBuwFEBvTVam6ePxCTLq88MB6Wr9occEWCrqHP",
  "key3": "3KcieFSqa5MeREFvoBAyaJs54UUV2ifpantmRvC8wvp84sJUJV9QW8cB1XGsuLwW9Bu1ekwS3JKEfX2H8BzBkooM",
  "key4": "27KYtN4caRD8XKPQuN69G4QUBDYwZJM49W1b8tN47rky5Z5qzocwVXvy2xKmJWGKsn7f4dFcVUd63k8qMicCshzv",
  "key5": "2noUfQeaYs9ycE88Fien9JfwFV6FWXkr7sqzrSRgxBdFPWxgeu4M4dx8Tdbx3mA1oTfng1dmVoY3j1A2oGb2Bjos",
  "key6": "3avTSkGCpAb7C55u35EVvDMASmujZtkAeGj2hjjobrPSHdh1jwmiy58Z7n8omAvduceFFNPtbzMVCeh4gUscMy9U",
  "key7": "35bZYyaq6hHtD2YDvQ3ojkoEBuhgyvB3UmTMMpEKBD2LjJHX22EJAG5crttdcmKqzfpmqvb9C7i8uT8vKQos3tVE",
  "key8": "4UCq8QkdYQiTisp9C7bDzwMVQPDcFCqMTesT3xcyMJRAikaj3P1V46vdZhLqb1n4mBx2itnq15VrFhjyUBZ6RhQJ",
  "key9": "4kTJech2wLH8Gz1pi1TDGB51m1KEdk2unSofqaWj6wEX7hWPQuwHZZh3LKuhS46pkbhhVL2VDPZ834SMh1j4nr3h",
  "key10": "3zzQLBFfEhukYmDX41udTq93xWd3hM8ed6SN2cynqo43xbqJMjGJYfSKWxtFNeRGePYEE8YTTy6dhVuSpDCxs1yX",
  "key11": "44mrY1gYvZH3A11fsN1ADpXTA8nQsxW5mqADKboRspNw3yzT158PX3PT7fc1Hdd8GDBwViufGnByp7qZRktiz6D2",
  "key12": "57Nu6N5KsWnSpgx6HrdSuBzGQHLfzC4Qgtmm8Wd2AXCRzX5qZLKMW7t344x5u7ENRPg7XkGNDAJJMhpJsr5vhV6z",
  "key13": "5sEgaXRSe1TkwozpDq2DBfzdA1VSdnwJDe6TmSFJ8w5GtfvJ23vWSbitpoiCAcN3RSyznRoK8EccKT6EuqZ6rgFA",
  "key14": "2KxWtdAEjeBk8HffyCsWFCuKyDhNmGKJXqs3qUGd3Tafkk7qfZUtPYM28YpfdB54sLL5kvkejBzBHUF1NpW9oCf9",
  "key15": "4b2fFoGg5pXemUccQzquiWX9e7NkR5em1jMyd2AguErknkxRfPmdAh56fwBDKj13Fka4YWSbkJJ9z3uXirSmKBpC",
  "key16": "MHTja8Pz5sAkKV6hwEgvQLVftwDZcEQgNATHsMjgwLMdzsnLgxNJUTT9PahLmC3fhf2x7jBs4sweKn379UEqb9U",
  "key17": "27r7xXHg3R6iCtKZT4b7sk65eST2SGKVgtqBaRVjuagUugsGTGqHSxWgQ9DpxTH84xv5RqUNEUJCnFN3d8APRfsK",
  "key18": "3EPAWnfqcyHLq4EbGqAydVXAFZcH3nfg8Asbgv7Avq5LjB3vixiXzmzYsEUtzq7NWBFpiQy1ecVb3WnGezcrd72c",
  "key19": "3tBZ1b3ReFdKjTK37ugnVHXLDSfpXZkaCk4EMfvE1hcJxhPBXMfV7jhXGavPU2Cf1vwmGQrAk55govzrD92GZK7d",
  "key20": "TAxqpURbv7tsmAdC1B8XqsTMUMCKmyfdwfa8Y4eyijRtjw5K6qdrN7gnowR3iS7b3WxzQZNpc5pVVbqigAF3tjX",
  "key21": "4vR5cCEttFB5RnopcQ8UCiSdt2i9ErSr1Knju43f9kVV9MdBVbexgf45W4wRgqDeoSJdqWka9fBkFaAphRs3VQWw",
  "key22": "58Zhv9gbbJvX4qsAYnQjAfZoWtrg3y8erxudfuFJwLnVqRmzUrM15bNcdiE2tid34YsqMwWsz7rpEiaBgq3AG1ca",
  "key23": "4oXax9svjCDM4ej5VzcTmeKKuNkCgBjam6agXAF887a2VQXZjshYF8Ac1DgVHLHhwHG9RBmB72A4YBZmXNjhEa8G",
  "key24": "5AD9DTi25fomqE3PUUBuP6tpo3soTHqcvMYyydGw6GU2ef5Avr2mE4f39YEp1uWTfn1ieAdQtoyigaHQuyr5UdLR",
  "key25": "5gyjEgEtz8Px4cQZUfpNByHseDNKWfnQwqFb9a6jewpDL63uAFUZr8DE8hQHVJfD9fVZpzfnZnE3KoBP78b5Q9Fy",
  "key26": "3Q6vhZH6nT24qvj8pRQ1R3urzbWeLeR9zWhhELdyw17Aa6xDpnvrN4XLZ8nLpWAv7dyKK7VAQW5MG3bmT69PPZc1",
  "key27": "3UD5hKELWbHbywrmzA1XDDTFZKjTdYAn5Ngnt3pA8JS1r26cu9pALpYVWJjeL5g7f4ETcgaa7b2vvnFTewqifL1x",
  "key28": "5n1NHsCK1bkEnhYpso2KDUPkLbEJ5eN2YQqpj4bLTFcaCSbtXz1hQW2e77TRHC5Q85vmJpoZoTAuH82x6Hzjf9DX"
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
