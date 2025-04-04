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
    "3xXWGWTJK7TcpQZe3L2hrXiZF4rW2vhrfzEX2h4L2PvW9TMP44FfQLpyxnMb6vnPXsN3MjnKm3JnhA35zfHp2ERv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KkL82icZi8woYMq6MpPfKcCocTu4pg6FpQvtzeozBQ9MgWMzh6KnEmidagvzR1NA29ZqDfatmcNt4vk3ZweBnVe",
  "key1": "2RqWbhxyYCeo8kPVp4n1pPhzaayDnmJspYumxNapatwL2hkK5oT5hUxxaD2rVjDYzj35GVtGuamzhsGMyVbmSFqz",
  "key2": "2rsvZxdx12Bvu7G93sJrqdiQAwGz88yHG3Dwoe28beeb1F29nqzbdfBK2taseSd7bEsm8AEWwjEEB26Y8VGYyRt3",
  "key3": "3fHNs4szByqMa1sVtjJV64jQPTx8z3LyuuMEERWsw3WB328Kh8pPm3ApXuWj9h1AvSJyiJ97RpcisaidJiEc2fMz",
  "key4": "5fRpNvj31rTQEXyMfadfiGh1J5w14WW695N8XCP5zFPutLiAhuKF84mPw4Hr5H9nyu4yKHWaA3f9GyoDdGVdj29q",
  "key5": "5TEmceAgH62T6vufSN7utXhGN9rm49Xs2o4ze7FdET2MNCGXa1xeE2LMWcsUvwFBym8Y71AeWL3jD2hW787ogkWp",
  "key6": "4jHzDuWA2JbfXwMwDP1H1ZaxqhBnbPXgdaRkyzFVXWRkVEX7ErHgVFi4HB5ANjgXzBLyffFeXDaSbRfueundLxue",
  "key7": "cCwWQgdBWvn3GYFo9L2DZ7FxvDjPS3Rgs6uMiakv1ECM1VEGoinzTqAgbsWLkzS61N3FffxyxkeXgh5KuuA3DMo",
  "key8": "3HoJxJwfoYMVFKVMUjyQSoX1ndLRgUDHJ2kmrrQYNq1YEBaYBYX5mqjq1JHmSZeLjrvyaxKvzBdHyJuKGCpQdEz5",
  "key9": "5zmgE48fYUVBRZ8CbqXW63YWYpFjHsyTWdGsC3BQa5rLKnsdDKHGgrKmR7PQsEBYpm7crG7KYyiM9uT97f74wR3w",
  "key10": "3AhW9W5c6xRaGbQ4AyKrDYmJiM9UgD2dSqAAeUxYDDqZoVEmVpSUjx3zkzw5T2v9q8c446PKTQrNu7cJirucTnR3",
  "key11": "5ASc92EQCyyund68XBegFjbjhiPQsK2J3crJc17V1gG6Sdst48o2H3EoXceQksigcVrLEgBNiSV6e1S5JXbMLSWy",
  "key12": "37UdJ3YQ5xTQ1R3Rjbx1GwHMCL7goWPhcRnKi3pechrasVQ5oBGTWBbi3NqbcNz69dVq8T3peXd6wmL8XKNbzDZB",
  "key13": "2CfWDnGaixWSKqrye7KkshZ1Qmg3cdtLBycKVujW8i36BzjoZKs9jpyKySAbFoc3jfaGmzgVa4PiZ9fvF7nERie8",
  "key14": "4guGtSXDwXBbdbnHoQoDGZnnsYQ2BrnTc5fqZjy8asoEyosaJCRBHiEQ8PqRbvQ23YpQTcbgh2F5Yq9RDf8s8W45",
  "key15": "5LNQmnLqkiNyi5cBMXC1Kvo5LJLY2sNeQ2DP8HMTCbh2S6pU6jQV9jAZMWGk35X9dAzQ95tKspSM3fFyRbnkaZwz",
  "key16": "SraKTz9xGbs5mCP1MEJzKJeiSs2QJynJiei1vETjvVx4L6ir7zLPnaqKZA1bk26VAzS1WB2jVgncDqLLW2GmRZC",
  "key17": "3RSggoUo7DNnNUH8S2KNT37kwCWEyHj1AbT4y9Z2kLUkkpnCMMcztRpyMsUNBCgD6JNKDoh4K3DcBPMchSAcjYyY",
  "key18": "27hC2fj5YqjPdbJPXgfiVXH7njoRLjQu5oNeAAoqsC8HLW4ePnZY2D84wozmV4nzg6Fu6kiq1YeyC5u1ymcZdr5d",
  "key19": "BGBtNfFpLgQX3bJzMpEDJriDjwCHWLyNKRUajmAhbYwiY1yiYwHdgX3KEtLy3Nm5YGGDk66ebbMeZWXnNcS8VHP",
  "key20": "5Pppui42H42f5TSxu5TnYhwz3keDDdHeo3v7tjszJfQBV7ZgCr9rTZtpHTxh46s2JiPsTLHv2aW3uSHXM5w4sXUk",
  "key21": "2XE7fcopaVJkK2CQjqUPJD9agnZm7s2ta9ATvQk4w65nyXGRxS4eDJFSMcKRavmZJoaVmtmBAf1zKCmYiWGzTztC",
  "key22": "2PsEDrxAKKQBE9EK1dqnw3Xdh5ePeA4yoxSBVbpnFfScjhbGCnWrWjP4ZGFrZ8TKQzMhViycCzCAm6hthV3Jc5vy",
  "key23": "3pcwmWYxmvSmtEHyvMBwynG5WmoLT4VHm3H56byN5LwS9X97h1VchP8MP4gADpQczvPzSwATZDdtLrh1gxCRHCds",
  "key24": "3TUmNygpMayJ1Gka2drEx9oVXU8rKNDygTXZrC3Esq3H5PhU8otXUGYAiGbSwuMwcoPfqb3tMPJBcEDnBfB7Xsdq",
  "key25": "2HxLs5MrvuMATMydh6bhkA2BYnV2JmQYmJ9es1UsctDsi4Sif9vYb64r2kH85FNpvxtR2b5auBpnmAHYyf6BepSp",
  "key26": "4j9qk896V4HX27zzqYwVFv2pecDH1RmCfAKb4S4aVB9GGbZuYUcFi6xbKSKco24CZD6Gfzi4iqM1SfYg3DFEv5gV",
  "key27": "2dSVU7Z9WKdzE13pE6GNn7miy1EzZxVa3uzCAWEWYjp32ZoBxvu35p4fkSCoCypE5YxeopNUeNGF2hnKeiZ3h99j"
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
