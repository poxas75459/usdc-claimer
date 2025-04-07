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
    "auFFWxMpFt4a1ca3dLgwNpzmvN84b4SNj9bNZM7zBMqS3X6JcniMocEx7hnnfq18qWS3mzqy8VNdKUXdApajXXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eti1mf9DfBcYLPLF66VT93QscHT6MwzzxzJmqa2sMJ8ws1EnCMwQWS2XVTuqFYMaScHypmGPsXQpuZuoRPS9DHX",
  "key1": "4JcHziHgqU1i2CRT5zbTX3RPofp2oBuFLuCuV5q1hBfPZZqekwHxH1uumix9xZnhQVGeKQM2diq8Yk8xuTUhyAbW",
  "key2": "52Jdd8m7fXToRMc98R4vpn3uv5CRrQo8cuqJb67t3HYBhsMqPT1xDhz5ikkbZHDamafzQFdjX1T6F2dGijF5n9qg",
  "key3": "43Q9zdbkdMv6CyEjVpqszfWiZtT3FHEybz2XVEuvrLioRudVrzkNhWc8uTDhUWBBvfnDax9bXCaDBp2zgKKUmwCY",
  "key4": "26gjm36QHntz6ZmTLqoEiQBDYCxhumHFX34CwTE3Ri6GKUWbVKrQ3Vo7kHHJmR6mQuGRYX7mZySVKNvkG3oXEYTd",
  "key5": "3v26NXzkt2W2FRo9iQWp5Q4F8Y2LWskC5wBy48eMg8ceNTNWuxPfmBCwA1RrP42hBBjkuJ1AXfosgScPcv3eMQY9",
  "key6": "2XWNeQAEWjGwW6iz9X9w3h5qHiprKwQDf4T42H94dCAtLNNpAp8C2dey826jfjwovd4ncHg8di2NRRqknZAoQrth",
  "key7": "H3cgsYzBHpqb49w3QrnGDKbGxpLtaoJHZxGZPYC6vyTwC5poge82pAkuhMaW64N274dz2ZDurJmettTuWeX2nY2",
  "key8": "4UCVRoSAPz3kBnxsAcTcxYB3zHDuVZkMiyWENm5KQP34vrJaRkL6QsiFU72rkx9iApo6zkxUoD3boYWHJ7AAj9NS",
  "key9": "2wnuTymjkNLUt68vZTUgEzUhB53azMpMNqazoTiGbAuiYsVD35uBCfoiek1pBVwkGNLyTDAufSFvCjZc9nyt2i5a",
  "key10": "2ThhSPXc2aFsRs4xfphE3qiL11pfiMZf4ejV4vfHGarW22qSFEvwHGKjtdewGMir2WQRofNvpkaUED4VaNGjHaQ7",
  "key11": "5gyPAnwDAJtVirvyCMyvZWHdV19jhqtyxE1Bex5RMMZpzx8EeNrevrCJsjmsvf1NnZ7EAEQu6Yyw4iMNFPZG4mzi",
  "key12": "aijNuoc2apzbPEq23NwRHei9Fdudg2wuvzjwNtvfruyBDGthWfT5N94cNf8SkdA7qJ7P6Q2Kj4jM5FkujfmiXnX",
  "key13": "46Pc3h2a44c1EvSjNDPNjx4NGRUASvXBbpiWpqSeuycqGrQt8zjni2WhuJ6sLpxVWw7jtda7tXpdqwSegugKePUP",
  "key14": "2CptySDNSwtcTWH72KrMefo4VHBFmvbK7JQjJNkPKYfqV7V4afUXuaAZHNmuHN42KSq3kW9jh4K6iWXpih1kXPWk",
  "key15": "h8B3R4odcZH3ijyBEuwznGqe2ENRuexZNwCiYyA52kQMGsyFP4mG5Tcenz9MkvLJwEvb1GDSnkSQCnctxR9FzcR",
  "key16": "2igW7Ym6QFDzxNNcYGHA1ATHsMWZSndbckV33Vn4FpMejTNM12YjDmUi8m5uYHB8pz6S3qw879gXiaAib6go2MMn",
  "key17": "4126m4CykiE4ecjgZaANGGqVH88gujFdquh9QJit8PiJ2f4uZFnB5NcVxoRkHiCxDKW239EQT7FsDQZ2zAnuEvm4",
  "key18": "rmRVMbQTqFvQYVsXMkdJSMRHAe972rDrjpFtrQB6awwvpJFqBfsuZcah7dPexFQhgQGQJANmKupzWPZiZ7JbGs9",
  "key19": "3zSkrU3uckDDtyhC9hdgR8FouX9XAsxBdNB1jHwAtZB3gwxTd6hiQxToSk5Rmr2QbXkd4e7ciHf1hnXFwjPWz1nL",
  "key20": "5xAoJubruxFLiwBC4jtaG1Xye8THdx2kBzcuyQShGUpf4LUSniH6omUhwmrnMEgy72s7qJW1Rr7Y8BtgVXW7XGD",
  "key21": "5TAgJcPrcXSYP1na1rie5zSyegvNxny2EEpS8du99oXcTX3S5ZFJ2eRrkkYinKTNAmThgMVujBnaAJQSjDqEHpYW",
  "key22": "4dVUxDZfwvk75xVvgtcQDbRwZcJQUoyo4nJZNb3LciEoNi2332id2H9ijnE3k1yigrVvaEVu1J4DxiKeV6CzYdsd",
  "key23": "vdWPZvcdvSaui7QxQL2VzsJyoCgp1anYmeiC7K7UKDXnFjpJCFP8nVrjg5bF3CBf9NHwvBrkUY52mJwk1DMXN6E",
  "key24": "51iYdcTnW3XP2ycswgdtqaS5eg1RLJwA3MqSVWTr2bEgxTPAfCowmjpfLyQY96ATQC9gf4WuwiqXo2YhvXm8e4DP",
  "key25": "3W7o2HDFy63FnWkfbUA6FXVev6mY1Z2QQPgUYkHLmZqS7RSD5uRA9L5xTjbxsbCc4sb9mkjoApR3LxmLJisU3TD5",
  "key26": "2iZnCjPRi8yMGVNYsUfLf1eWSUCJs8gUnopMLrpZqoVugW11RBn5R1TnL97ouWviWxVqoWNTwH3ZuAxocM9Bq8eM",
  "key27": "4sZqJmgB9dmLU4KG6nXUxqn8q1JdbgXKb4qn8vpe7LmdHNWJ4xsJM64opFDyY3HWCV5ohT88NKhKiXrAnuibfHz2"
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
