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
    "4xeB5QegP8AeBQYku2KjaXXZyVyC2YnHZccAED7HGTUoVFt3ZsrEQQPfqnjEgTBPd6TE8wgbamqryHqXp6ddwJRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FiRvZPhe9YEqBP2dzcagEkDjH1jYFanLTPLUcpgqbMEM532rpdRytr3TkTMoPifoBRPMnZjwYyqojnUFoQpXg27",
  "key1": "R8yEEkeckmmFg5L4gcRYs9uG1kTPVbuMX3zFoNcZJJU3zSubd8FA3cwXb5hi4XnWiongnuiQQmvv3LQ44Bb4Kz5",
  "key2": "4B8DGNZC55roFnYNQdQtyV3t9AZYUS5Rb7RDXawnUUXmeU1LgvfAW5zLjjSwW7Lspe7MskhiCxXjXfpbSYiLseVM",
  "key3": "YFmukLyFWicFsstdAx6wSFdcJS2cTJeWPAKyAErWBAEqq5BvFDdtj94HvyPmBTPtm1dTfBg6EsKKctKsMjer2GW",
  "key4": "3nLbgrEy82iX3WiGGFZ6veueAjYa3mxtFjtEAi2NJWHyTq1714ubx3i9dq6cVyVkicLzKRyvpcnGez1ramfhJ9SZ",
  "key5": "ofK2Tzr1fsdTZ9ezmFMkqbudmYTyJ2QLMrSpdgUB1Vuox9PvZbGn7NpAXVMfm2Gmg8oHsevJJS94BgdUuiNr7UW",
  "key6": "21ch7dmUBunotfHB4SmMvaKwSYrEVGmPqQzLuUbf2zmd3HKBe2JH4qCiwSooUEWnWjQ46K2cmDHUUB899GUHhgzi",
  "key7": "Z3uiV6D9XM9FoCPRoer3QVdsz85Dw5aFqPyyi2bUhLw4AUhCNPmCvkdS3ozrCaRySiqyjPVcG97unC9FMuD7LWw",
  "key8": "gHtgAGUyThFco5CtBVPZaEWbPnnnaBrWfKFW86JVMFV6aU3wiWFUho4i6E3bjoZRJbKT78kn7Xk1LbZ7ee8xbMM",
  "key9": "4CLd7y9iaMjotWDLpcFTKzoXFo82QBnTLxk55dWUgR44iAWaDwf5ZBa5jYroJ2kUm4NQYUrGf4AWSNJZhdWSYotK",
  "key10": "5ndthTTBLN3TLguhizNCQ5ChtFhjAmUG8MQqPz4UvSTm6FXaZtjTZ3F4u1G24XxgytDdrqBkUAvVYTXPBL9k2QeZ",
  "key11": "66fep8VKgXzXa8MZF86FcxrUdmPjkQUehFNwvFSuPgeATe8R482zUPyygiuhWATwxwaXxWZCc73NoAPSJFcZ3jbw",
  "key12": "3EnoYu4QfSp3s2zh4U25gP9DLiqZP954RKJ5zajWDvzmRg9Lf6LMYhCLjV1sJQdZdfjoQ2gTMweY233H5xUcp53F",
  "key13": "EkctK4NMooiLrSXM84kCR74mFfPSXKvPUXdCMQafK5eLmbhbXyf2ghSwX7wdZ3Ge4MfXB2WvLMTz4Ua2neZz13x",
  "key14": "3bkz7JeXnu4oYiFjQa8RFeHwY1TNhjo45i66LpMkkWfcrEajmXG65PPF3d4WwxPPGqgKYi8mwyZJjuQdT4jp37ia",
  "key15": "5XGr52C3FoBuoW5V1FyNH3pm4oAS5aj9qxU1NTSMZv4kw8ukQjfqDZWb2KupkwA1dUL5pnrv7i2vT6BLhWtxx7q",
  "key16": "2HrVKrrcUCydA44kQxF3PhwPicrvbP7VUb3wMa5HYpLFPxZ2PNMczH81xGNMGZPanqXwkqRNdU3iASKsBz18bEbr",
  "key17": "3FiEo2Z4tixRueVmXvkZiJvWCvvvG32JHH6VDgaRdVcnfxhkU5FpGNnSsB6jnCCLUmC7uZRZ4xn9UG9Exa6rPqR5",
  "key18": "5ied2zmCtnuTa4QMVKKhRHz5jpVxJFsfTiVdNcvmc7RcN7TNQDhgFDdSbgqWFPscCPxU2WQuYb1Bs7bJZE89suKT",
  "key19": "Lz8XER4rVLVkqrhcprahauTTzWFBwhBB3Q5BH1L4YcFz8dZjGx2FfjuBWsZUk6h6KZz1Ub12b1P4ytn1DMqfR8R",
  "key20": "122b7GwZGREfabvzgHC4rQpU11ztLXwXCfQUCW9BSTB2HnLw78QSmKJ7QWCXggKEZXfT1PdEMohoLVa5bGdTrQCE",
  "key21": "VgCcu6fHYkqxScp8Nat5Xwo2h8w9aXKCvbRc5t7TycAuPwm3MzB623YuHgBiuzWqwuA5TLmLUp9ViaWW46AYjcK",
  "key22": "4NRF9pmSm6E9569nGTfGHtt2ALynJpy2BjUgzPuUernT5HKnRMo4XMc1KcQakfrKuZ4Xxi3xGte7Zx6PJjEhdbqF",
  "key23": "5kCYVKm2f2etUSzMk7Kc5DnBNdsjoJJiLDN6b2dmKRrpmrX6hohEx4ehbzmmsArjnPuXeqNbNmJKPkw6x4j49Mxd",
  "key24": "1m1G5mFM3SnWWnBf3uWvVxUoJM5YGJ2YnSUMxsf9Vf2dGuzzMs7ftEmdDck5U8DjFV9HbvtDoZcsFjwmryJHdd8",
  "key25": "3scdzZmEFosWx4G3ofK4vfddwaX8jFDGhpLcuvxchUzwvEvLHshgY83Zr5p165xsJPmhk2yxA2pit2pineYVg9Wb",
  "key26": "52WMvqk8cSxT7UxgF21NH6ZsvwPELdYbcRyf96kZiB7Ze3P6m5dpUo7DJoMQG8a3UD1ajHgvfYmrhKySKdkNB8Kb",
  "key27": "4xHwtPJQgNh4C5Vy2Aj1RnnQXpxouazh2WksfJwPXK4RoyfLgEjzLfNmvtsqrSYo8u9xV9iXyE9rcR6F8X7Q511S"
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
