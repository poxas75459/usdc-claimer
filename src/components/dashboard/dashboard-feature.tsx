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
    "41bNU975yFLSiyeN5D8evVwgihMZRcRHaS4wRqotv3makaf5zX565uhbtNHUnWfBBRwvRbwAnCCcpnK8qiBYxCht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ba33j8qrEjrH2PDvNCJoyqctFzUm8A9v6417KcBioxnXf84AkvNCPLjthThRJq8ELfAsxUSEY7AM7BuvdSHdL9",
  "key1": "3ybF9SkjtFsCfq1rUgJh4KAcQz6iYY96bwsTLhqhASw23wUxw3Ts4Cc8oSbq6HaeFx3nZEojtBCkaY83hgoHfNbo",
  "key2": "3LvesuRJdp6fzbE6P4TcxZzEei4v89mNj1kdmuEndhp8cdt8XBZEobT8diN2eKv4v9rKDHYEMHU7LUcMMZEkkEgj",
  "key3": "3BnQiymA9jazSFdbfzjkvsCDkZLRXTsjVitmoYjFXeeVkvFVNEvFAxRa4gX5Vci269wbsvahAv8TQuUBQAtEopVj",
  "key4": "MawaxAxPMiwty4RHxJBHxugdsnEDKaZ2jzGkBmxs4v8h2sxK8RrGNVn9qQKMUyJPGStwPJpfD1yRCw8hc57BQFQ",
  "key5": "42tQVdM9XhJwKZrUDuKEGvQrPPP2p5wqXteeCsEeRBBhjQ8MXmMWToDVocbrBCj9nQyNT5g3VUPwniy3XmmyTBGR",
  "key6": "5ojbNGiXdwtBPHGYxWqJpfo3tmQtD3CjvVQVsDQ6SWQMdSx55sCdPqpg4bbQwxcBJY18t7MfkMdJE5NjLNHBAfdh",
  "key7": "amuhrqY2fjdVTZyMBZFsx14QWLBECLtSWQbdH8et2bWNiC8vfdjXkpe86ZmGnQxF6SifEJ3JiyB3xv73y4z2Fds",
  "key8": "5N1ZR9m7wjLqNdinvwvejUmyBtuDbcgWMND3WBByZBboBdwp8XwjojQxLapFNu2C4vsCLiq5iKrNQerjLmHkvcPR",
  "key9": "5uUucuDvgMj5ei32a7Sm5xdjwF4EwG5PKfiUFB6d24FC3965bjivhBNDfwSa7XXKPo4bo4XzTqY7x1a7ZPCanm1s",
  "key10": "4znmeQGe1ENBHBjTaJAuf3Ln7utirbjogk2o5Gjer7S7MmEBHVt2wZU13y8i6RerNy3Rt7k5TnTfQwKVpT3fZph1",
  "key11": "5VrT3mzVTz1ckuZdZycVL4HvUv5kYZ5eEGHVSfc5yHU8T6LgNytzrLrPnTAXnwKSBdX9XVbViQnmQnspyfxD6gU9",
  "key12": "4fgMxXoTfBMuwhJpzQMG9YRQFLJWA6HifQ6k8QHH4Vf8YMDx4UuHxFw18C2p4F9jmieH6EtJ9eLu3S6khEAh6ADu",
  "key13": "5748f3fbA9ujLRPfgBx8cCWiayZ1oTKgipx4PrC9M77pgRFD7Sfw9GAXhwM78FkpdXY9aNt1SM7yYybBwSYj9qS7",
  "key14": "59yHRUvq5TfuExyWjHLspsMAu83AnjRm2HhxrhqhXg7rEodcozayvi6uW6mhbtjNNm3QQz3z4Yxb32uLowFDz3M5",
  "key15": "4tDfz6EuaS6okjKJoE8ECw943qt4tsAVxnSec2wZEmuq66R3gSJnGnnfFVDUpCmo1rADNt61bSs2raeu2kBa74yy",
  "key16": "59pdwHnb1vrWj18vuBDSNnGxyKSYzd8mMEL4DyeKk5x5RkfP2bpXxB3YL4LsdkVUyPn1y4WxH1dpP4YJBXDuuNJt",
  "key17": "SQziyiiwLRLgsZoyhmwF6tEi9a4HdrAMDihZZUY9e7HW7Q8z8X1aNg6pUPAHFSizPFcD2hcBEn5KwrsJgUUZ9Cz",
  "key18": "2aexBJYticMVeHSKbez2Ezwwpi5jWgzWkrxUBeDyi6eB2r875aZ697TLXjf5WiLcDD86ecAE5JQQBvJ19KKuK7hu",
  "key19": "2tCPGxscbmwudpyUo7g3bUXDGBAFBC4vyU9y79yV9xQ3SGFGHfYF5K5HUkPzezm6xtDa767aVMFy2HCgvicFAcAS",
  "key20": "5E2myYEzCg3UdiwE7Dj5jzocT9YNZTX2TyWd2FYhhs2aQBzSX6TiPWBkqmeKT7zXExTYGcZdhZtQrgPvpimygFZ2",
  "key21": "AVxewgtFotLveKYA7z6KZNY9JkgJVMuJVV2FWq3xL5vh1vityi6R3PnvqKHfWZ2wFMc3aGyuoBVpRN243nbmww9",
  "key22": "3eFnAbtEV4czvAXAKXZm2Qfgtej9iFq9kiTg5PZ8BjG2dEJbNKjwAVvZEUrcec9eWW54hcrauL5Gfd9mBDyFe5kZ",
  "key23": "5FpUgEAq7kKNPdmkriUkKURUcwp3viFWzwYxM9cL95dkcdpCGu98rZ14gWHr3TswC8JG851NqMDHAEwxLhZe9NcF",
  "key24": "2Vo7jBwLH25kPtuMGGKgNtgzabvVYushWmBred6LQqUiM3se6GVgGi3QvRiASFekx5X2KBwdJ9mFDTRjeJ1GQqYz",
  "key25": "4namqFrWp8dojYxaetB8krrxy4DEuWxLSff2T2kzKJB21yceVgvRtxP3ewKBQs2d3XbdWzndeBbQyn9eFfCDnanA",
  "key26": "3YXJHiuFTfubSwpYTCmuZufo7EixvdG32422Fky3QUE5PdZb26HEX88GmY2vwHQy7dgrKEePw9DTTgVdRHQhEtwF",
  "key27": "4a41XnJ389528ZS3YvpiZtkCki3tapCDkRRVZsRTMhx9nbXwQE7YgY6mWD4Y1fyBBpLnyhG7VHoPqWtt4Nm1AScZ"
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
