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
    "swgQKoca5Eaev2LSL72uUwfz8NnxJobggW1MesuFabWDxxG6EESL1BXQt5B4AAqc9zJ35pGQNEAEDX3xkJfC93k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2o8QMmiNum9DkE4hCaKiBEnEsCffdVbHriyQvqXcV53kg47QxxvKDWaPeKFt5kT5Eyr3gnx5xTxwDSQQEnxz3j",
  "key1": "2V1RoFFX2EQTnp5LrEBFx3FAY3rWL6yL7Au7o4GBdHvHAMRo1WyKF1CgNkqGFNLWWiqMPnKthxE7ZVS2bX3sp9Tt",
  "key2": "2LkqiVEFvohtpLm8MNuJzR8PHp9LAARMVfa7L6caYVqKvA6yazK7NLcpY7fueBnqahBrn1dmo8gFxvhrmYg14pqk",
  "key3": "5K1esgB8mFuXSgCADwS3Uw7bihgc51jzTn4BUqDjcnf3GoStvPS7FXX6SFjNgGunN74Fyei2EayfqpDDbhoKc6UQ",
  "key4": "5VdHTmJg3wyj43cBJ4AuiZ2tv2gXXGUgcKYNyoBmoWMjzR6zNugdAZqXogpZ8UaaRQi34fqFLPF9rYByz4eHzMbz",
  "key5": "2YSdKSiWX1iZWn51dhoG6UDzgfPcYFrnYF3YnLK6vFpVfia6i3GxzP5SrTmwDv6TN4mWFbPsTPsyY2TMcffZ87Kb",
  "key6": "3KjJ3U2uigK4VDMcsiuyt6BEBrFg2YUY3jff4J3G4NWXcYf5tjugYNX4kg4acNasz4qTAnn5qen9ECxFUdfQhQGz",
  "key7": "sBmjmMQD3ZSrwQXbxc7L3FcTTxN5QQvvkZDqJ2e9E7L6EeGQiRfyvUQJFiQ3xWPyufLoBnXn8PLdyWmpf1ePkPJ",
  "key8": "2aVYLFRQCn8Cibv7SHRcQRYaVbYQWnr9UZjLkbc4KmiaHPpjQng2H23gmRbR8kFEDTx3udsgWGbBx1FiMHxgGvvd",
  "key9": "azqyHsbJFFki1QPCWFz41RAxD6Mbr1CPBG1H56hd9go1cbBimJHZo4phgV3SBJ1HhpVbW51LvApHcrENCZYKFkJ",
  "key10": "1n5c2xpV9b13Wjwzp7gR27KVjijhJinSaHKw9Vx1cpwCeewBeciBtvjkHn3zCQZ8bC8gQRDoVPApQwe2vPnMLjM",
  "key11": "5SVGkL9CBumbJ4medvTNu7gRyCQ4PS1UHRgatgPEYMHHjCeNoosj81kZA3uXyXzPFL2sckth7XTBU8JvVczxuKsj",
  "key12": "3vbY6oUSoWLK1XhHTD2eCY9F6rziyU2gDUd5HkLsoCa4LyXk9VD5Kt6HcAAeSucXwCBZxLHrSaMprPqmRTeBVPtC",
  "key13": "2HaWhAYAgPdWe74xSZMBhRPSRGG9daQFkytZe6L2mV9i4rBx9pHLc2eoEbp5tKhDZLjjGndtvbpVrdSsbm3RiCde",
  "key14": "46wNqGUqW15Bsn6HYC3Z2P3LfUZ5kk2ysRT93sT28z2VTq2R9bejEQiyhS6fZVA7gGEkQ81qEV6BJnt55Bgm4nSR",
  "key15": "2qTZX6SpmmY3vYzPcZTiJmw1zQqb4zxUPyfWyHSA2TjU9STHq9Rmgosk66aEHA87Cn1yqmVBPaRp5vNeoUANKMcK",
  "key16": "5N1XMSeSMuqGCMbA6wwr9E5RLub81vgPLaCTTsNneSAUZZ1suiQ1C7B6WZAreD2XraH6Q2QCkGMenFdafeBKMfwx",
  "key17": "3RP72ndHh2N98dT1oK1x38G2fNwSW8JfaVg6U86h5CbfXXzP8gbQVJTUnjQpQh1cBRGw2b95S7yR9jyzUfDnsYFc",
  "key18": "3zkdExLmuRUs5MKsaFkEf9L4c4LXy7gHPuUix4sMbxxwtuBvDAaRR6eLBfnp8yNHBtjabam271BHiH6dKsiXdFM7",
  "key19": "ScrN8YdRvxBdLU5sAeX7rs7GbadShdem3cfpNdcgvAbgnhT21yUHxGD1byYfxkrK4nkdviuRVq4CNCY12zZwggh",
  "key20": "59iubFwXgMpvoXQ8jFLgybyp3VSVReDeNqrRyyAsUpN7yDhnTXG6W9rJW6MLuCWxg7vr1Bx8Lqe3PbrHYK3Jkrow",
  "key21": "4ftwDpkUiLaMUm6U8BQKzW7t68mFE53q73yhvXc37jajR52QuoeMwBJ8VwzQ1ewNXr1P5L8qyp6F1Te8QqAknLu7",
  "key22": "5bwCap99Mxbx2imrTRgbht7T5R924cr4RLjkGoM6cFspM1VHsUZtxMQZPEga1Dx9J5vkic23jpDb32xe48EKcb2V",
  "key23": "TDGuZvf4ri6V9QkXrPo4zAeXS1Q9cfQwJpEtFAL4cziai8WHihmLVbka46KudvK1WbgJxc5wYwhb7tvKuTTRSnS",
  "key24": "RfQWYRfaccZuVehjCGtUDPfWPmpSffx9Ck2CaSGZf1YDC2LNzEZtazZ6y42ygYEXmPvqRExCxwst1rH9Wf3oZsJ",
  "key25": "3DCh5hrJ5MJFyupW59hkza3VfbUX2HTbgubDo2NcrvbUzD4Zxirk9Z6ch6ikGwthuP5oFPG9Ecnzc2yucQ1FgKc9",
  "key26": "2F7XCvLhEPLc9KYtjSVv8SqwqinhNtroWFK73DbXgkbaiipx26vocbvLY3peH1HLLS9PpUjrCKquiVTaC28w7VTs",
  "key27": "3dvVqvcQrTEE8sfka2i2gbks3VKM8ic5qUgqYMFryWy78ZNh3nj6sawzEVvpCpXwq988RGtMUyCKRaZf2KY3wAF",
  "key28": "2P3jFNgJ6n2SXXXvzF9EAXDhf2U5PbbcQjWyssQnjbmvJnBuKqJcBh8DPW4GhXNdDgboCo83poAGXhefmSeoBYxf",
  "key29": "5t7U2nFtQmwnkR8ady8BGByR2WTTnQSA3rn8pqwqexkjaVDFQ8bf1LTNFN6TEpjPGBzzWcxykpDtdhVP6NjrJowo",
  "key30": "471cfTx1QZP2966PmjFYiwrWnZDxvfaSnd1ZYDAJeCn9gMvhAgeQvSoHbwDkV4Fv2bP5fK6yweuzcDHyBZqC8huf",
  "key31": "5SoNFBx6sxS9QF2xXzWmr8gMPW4LbaNYrfYLWzddyBHEExdzxjzhC2bmz77JjCKg4DWPLVJFFfnJSBrb4BfuNwV8",
  "key32": "GETdzUTvhUkREJk8kxSFtFHN7uQ8NT1JSju8SBPymqTu9PRzCfnfCD613ZjFDwje5HVcE1HmD5hFdt4XHZaXWLp",
  "key33": "4JRhDMMeFuB6pVa2FBzjwjKyNYnHk7hpaCYTxwWDtnYsfMmGjf2d1LEHysH6rSpmtfSJkoMUWA2iR3ePTC4cEqon",
  "key34": "4ZZ8xkoERnBmHsghyd2HzYNFV2auu5RVxqtpfJ7hCYmNkKf6bgLPoXKHhiGT2NqvBKgGP9QqsmLfkLu4FTTwdo5u"
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
