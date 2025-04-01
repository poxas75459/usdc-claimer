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
    "4jNGgLuncPV3utSJ3SFRanv7rfgecka4mPrxxCtj3vJBmQBmkqEkyNKncDcKdCfXbLmwtXBeYy7eEobRiKUZqjdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dgCFMCB6hUFyQw6gTEQzj96dtddkcea8KJtWCdi87QuEKf8Bm6cp178reiMzynk32UMeBioWfjLJRapAhREzFbE",
  "key1": "4CR2xVNmTpyBdQxx73RJvwPjWScsDbDSpWDMVL5R7HGb9U18bNbssKJWyAfnsP9rYADs7P2ETFWkwQgvo3vLRsB6",
  "key2": "54wHVSJomTb72d4VpGqutaev5VigVnC6L3DEXcNCDaPEczuhQQ4DmPdzv5bHYCjXENrPDqBmVHE9SoA9hqUQSxrM",
  "key3": "3fu76ArVqqZ8vs1YUVzAJNDpBudFmP1vwmmzU6zzApTeyqR3F9vFpkAqPEr2GHBr9woCNH8Z7mxAq6C5ehnZEcwc",
  "key4": "2BLnsjg5skCQ8SWnUQM1wjXqpp6Pcj8Dj8RoT7eWVNgMmcVorTbrMpPw6FudzYEs7aEkUcGzNrcWnP4ftotwjn1M",
  "key5": "38cqwdqCuebpJFwxkoqyY8xFFrbpCBaJdQ6A6FifTWKp9qQEs3dhR7Qq6zFsUiBMk3D4XKC6X3Ey58qPnhBd6nze",
  "key6": "2facN37j2ydAZcE452b3J4JUwgza1R8zZ7zsFLND9E2WvpvyTgTQbTzrgmP8rvSBvjokwqZZr4dM5cCZo9GMV9F1",
  "key7": "2xmuAhhr1x5mz8TSuEetauJkLiDszujdbmQUVeMoExpPv7QdRXU5RCYuG1Xkybf5eghLnxozbxx39PAEW9fszGua",
  "key8": "2q85gdFoY2sVQf2uYK99YfcSEjxUq4UfmNd3ZRLRs1jv8CvnsUFEuxohKjC7zhDFxeuEUsLaETLMiwSgXaJ3GuUy",
  "key9": "MdhauaW1SKv5ciwG1XtjjnYx7d3rY4rjDKfZtNqnyfr1VWC5kCfDzWRQmcymqXCgU3QQYLLXKV96yWhfKuamc5H",
  "key10": "4SH2Bx62MNGAgj9Zn18qyJz5Q9xRgsmqhrP9GSNE1drppSUxhvihugevGhZ8ANYkXeqhHywiLN4A8ShqKdBZxxAZ",
  "key11": "24Us6CeTUjNTdbqbK1gTMZbeJp7HegwpDZ9ue7L94hcJ4DYMXa9NRPwFnReqScJKLDrV5q62NaS5LhWsmHfPreoF",
  "key12": "3GwktaiDX38V3HZYpFXAHsaKo5qGKgduB8EeHWoHufsAoLQsqxJMtSokXNod4hP69zsZxgFunNnSTx3TG9ub91gs",
  "key13": "3BwtJ5hQPZkH1AF2ZmJDvnTWh7U9K5nu1jqjU96fkavxa4kJ9VSw7Pco4VY9t9eraiwKG5X6vpjQUvbPLzXXRBoj",
  "key14": "3Ff9F7WmnAPckWUj8LisgWyWZ5VmGbNRxFn64oRawuGhYyPU14BJbkmSeASihZ8vGWFZvMzqD1FiUoJkacjXnY7T",
  "key15": "4Lr2ePaSCbKn8q9SxjSXkuVWhJfZ9rbsjWUhbut2sjpTfUJJfAGb3hJkyui9r88ETFPmcsJDCWqBkuaifQN115TP",
  "key16": "nC8RvTB5dkyENxERjqBLjmSdPxVjm1Z5tJD6sDyt36YJtDDrUaDL115Nn12YBip3zgwjD6Qs1PdNAwpQZwRMXvv",
  "key17": "4edhXE3qXBStRsAwPtbg69pY4WjPVtra2eKqWJTiLUn7KmMcif6qssxepewYY2ErfwsEzgwwgUZ9AnXWj8k54qJR",
  "key18": "3YxusJ1gE4o4dCzVyEKKHDNgsxVRMNcQKNjuDxcZGCcMLkvxBx7S9CsyuweEUWRw5RHq87FvPdz8ehMF8VTmJFVy",
  "key19": "QRUEEyFjpjoAV6iwqpu1sYRaYeNhvnQ5HEkaqYnDe4mcGxedoQUWWsjZccGLkgikBSYrBTLfAkKKT3sQSMMnbUE",
  "key20": "3dbnu1kGXVMHztt2ANJq2YGGm4TEGfzbvwVDXbHN8K11egL64G4YL4Vis1V8jnUXqG63RCRuh7hLM7yS7ZVCCtFT",
  "key21": "nNmPxMiQHTrp9b7RUnvdMZzrcw8KiJSNEzhkqDRsbch8NmZVQ7LXitCEWm5DeGceNvYuzsP2biUrLPUHHZGWdz8",
  "key22": "4PyNwPji4mjtLcLk48MqBSi73N9kreknhhnvGw58gP28u2YwaJo5pzmPpKeY4CbKsxV57oDhrBPbg96vKQhspU33",
  "key23": "wBXAmQmwjLsrN9NxqGpmAT2MNhfEnFh7H45mT5ogn3Yz5wPrJw4HmQrZi7tQDg3Nd7Yo4e9B2gH4ysnF1HRAcVt",
  "key24": "53J5qkojnRApjTLBNnckDC7goiSiCsinaQDi2CdeLsqvyYxkNQ6arvzRK6C1vGG7kqYZM98StD6ybDNbSPiDioXY",
  "key25": "4saYKMjCXsMda4Z5st4Fwr6MqWvjDYzBunGs8w6WKK8d2rKr7cSUapNcMkMFMhXz22YGCgrCHJFk9Gsawz5wPiZg",
  "key26": "4purWa4ER1sfQCEVTAQAu3NgRRosNsjBkBu81kapNmCrXkxC6PvjGPjWVfGcnMUPFHJfXUrukr6nq9V3A5s8g9Qg",
  "key27": "3PHJwArDDRB14a6oUEJ2Tc46E7voHdXnpRSZLNxtb5PfBJ9aGuEVNtnzhDtNGghWE1cRUGRQ6kHVJ54J45B86rTS",
  "key28": "5zShZnFX82f7s4RonkpCQ1y5A6Xs5FRLCaM2npLBxnTo5D3ea17XgAjXoFDiow6qTPXYJqHTM3s3miB4M9ESwA8T",
  "key29": "2ZK8h6de1nagmtzV8Qub1ooNHPogu3hmBnMrfF1pxJ4Khhz922CmAGuetJ4Mg4oCwup3KmpKZVGznNzLLADL5oqt",
  "key30": "2KsMy9LYTUVFoEqmPFQpNWpHy6pE3WYkSK6BdwJLyWsh31HVV5eXwKDi5p17Upv1jmD8g8tpRycpFWH52Znwz5rk",
  "key31": "5hFMm6UkJFBnxDKNwZHwixuaZqANUNoGGacCDE3by3WE34ytx9XNZCrJ4ugVNDvQjT5g1MLeiD9uqnZRrMhfcg7N"
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
