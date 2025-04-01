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
    "5662WNTMULvfFK1ZyhovQTbUMRB5A77sEQ7Y8mSUQx4bL1FRPDcR5q58UsyJhvrNdSCWAvRZuVUViqE8vFtmV47W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CvU3ycxJeSx8ypzABVymozuZjjELtbzhaVKME6gi1QQUPQW4LG5BHsNSg4fCJV5VCpoTeEMmp86GgeCH235rXPa",
  "key1": "2satuNfeWcJzUtTEJM4EmJiNJUgMnT5nLe48TNEm5g5WWaZLfUia7oJN6zRXckcNHfCU3r6eVULnQW5AYQkad4mA",
  "key2": "3dgz6EGSwLKhQrdsS9aBvFiKzLEFYjUukrumx1cSbVcNZtaCmJB4E5iFex3ebvHkAdkfN78qi84ZDdCcTfabAzhh",
  "key3": "4RQyzMgngySzv1dqnJzR4AEh1cQcMzvuzF3umtkY5sZW7oXJAym7tKR6kLuK4AheNN3JNLN3sqbc8dEXx1a5UKEW",
  "key4": "3EjaXt9FjECRE56hg6AAm4hwByPLpyJ28D7oTS6oSRwWZdQCABgQ7psBsDxPAFhy1SvW4nVQDYp1ASy6jVbzznUG",
  "key5": "3dPWahDXyFKqW12e4UKFJtRwdoLpXMQvYVixVc9MHRAoa2odJn3X3thSqn8QE4bdidrrWS4Y8oPuqyhFXJaAoufM",
  "key6": "29QUwdpqQdefjy6ekKX9UrhsGnpM5zWtPf1Rv72unRJbMjxJaxF1jVEFmDUPoJcZDkWGm1sjikEBtLecyTWPRaEh",
  "key7": "2beWv1B3g4pX3xR91h2TfHZWtMJdQrGtnjiGuGVBkjza9DqMjrhJVdwb1TBgxBRWjEeswWfrjTBrkhv1CwSmYgNV",
  "key8": "1MdL4PGgFKnfuepEUJvHUQtnNCkF6Nch3Uw8p87fACkcQ63oZDDjdkyMXAHjjdzLXsdkkuozztPvfSRjzfVyFsD",
  "key9": "3AWeb2GnH5zK2qhffjTFfufnPZhDMXbSsktuivFSKDgveiWpQuYLkW1FEUj9isDdvffn67jPPcA2h8jtk8pBSM2B",
  "key10": "2wJhHmiVACwPbkL245cMXb8zeyb4EWxaG4g4ofpwd8MDbmjJcap5TdfLy1rVvXk629iz7eSM3BMgZGN8mAxNLLs2",
  "key11": "5s3JWRfNRbgVtrjgQ1LN4Lrd2gn3X6EcpcTgyfawMZqmy6jvQiYBu3SqjJJ5y6meHjsNnrPPecFMg2mCYYLZHP4V",
  "key12": "beQ3t7XaU6NBEaAMJ2xH45GqhEw1mfSQRGFQz4qzhqm66CWZuAprCMyj567xH5AWX9i6Duqw1SEzvfZRTecbp8N",
  "key13": "UtrHGp3m8W9pnnMDphGwikQ1ivuaRoXerLxMswnrtyXMHn7pszrxMKLS4UkX4yxqEnNHb1nrmNPcdyMQo7DqVc6",
  "key14": "5ksctrrS9uoA8ExhAAkKysJyyg9tbEwo9b7KQtdKrtWYdTTsoKTjVVZ9q41RQZrXoLtvLe6LhtrwGfj4MxiMoEXA",
  "key15": "2T5U1JVHYyqk4mctNxkAAVTuMz8mV5S7FXUwD7DU446bcTYdVi2eehUUWMcm13EMwBNTCktZyR3bwLuLPrgV281K",
  "key16": "37hPpGTdxJnmC2sXDm2L1ARqiVmT82RgtSUWYS4JzXnVnJG5tdHN6rdCoJ744rCoTou8sD1VkM8BzWxeDg9mAnVi",
  "key17": "NMRD5s1pV7rrvD2hy8vTR55MzEWVRzFs4Rm7xdgpQhJmQcpcWfd9FHxZa7Qpn2MjgGZgZihv6Rsvjm9XhHHFdbW",
  "key18": "2fcGmfheADXJevddkYuSK3Mo4upPgoy9kuvdhoGm1ZU25CmhDV7ZjLbV1ahU8reHAEgDHjbnZ4dt1NJUCpFdu3Ja",
  "key19": "3pMBt82FbNMctpBmmF3ZTHfFn8JzY35M2W9XCEGR5j8jTLzcU6kfEpwrodjYqFKBV5rz5ZVWXBcDNX3EwrQWqy1d",
  "key20": "4GDqj7diQxbnyo9eXtC8bavrSptRtz3BeVfH4n3b855BMZMGDN8grkUrPSrb8CJdkuZmU9LRrHyfxG5gbrYbDuRD",
  "key21": "2xs5rLWTb69n8ZTwsVXyaDRZ9Jk9LByrN5mY9fFcrSYTpEgkMcMJARdAfFyrz6D9Vds7cxikSQr63e51knrQfBZ4",
  "key22": "2NEGnVW51xRnnVLjfuVMmDtq1ygKmr9v9KGNV48f27EsGG98dgWpRd2sBPVVdn3fsJXSVa8a1PcQAUTauf61uREf",
  "key23": "2jAmqAceHJ7eDPGyXt7pH2svQqBXKYfWiLuShckWiDthCi7skWdsB6LTgVQ8iTvnNca5HaJwVmbPUXXemYKCh1DZ",
  "key24": "5UqjEwozcbiKPu3JmkCuXDiB5FAoy53NdetVosuAGcXXNH8LyiesouQvcmVpgT4burNRQJ31mdT6QDEiG52JQ9ma",
  "key25": "5THWQTMxoF1hLbipUVe4Bc9nypeZZzaspu26JHGNauzbJUELthbMFiJ87HtRJreANTPH6dGftvjnZ6jDphNPCdJ4",
  "key26": "38fSSxiL8HXoR8959SmNoQF6j8FKXPM5y5eKDHRGgRtgWzNjLboYNr7my9Y99kUu8GUBN9DrLmbYavJTFQDkFf6K",
  "key27": "2mo1tAmGttuNwjaBwgH2ncaGk5Q5267MEgJBWrcjBQUFs5sL2hbYBFV5LmRvYzCDmWvqWXfe9UdymcEHJWCvK8y9",
  "key28": "febTb5icVFYTq7efNg1GVERhBYpqRsZo4S8Xmix8aAQbkT62KHHYXdRVXxkieAuxk91g9tP9BGv538yJAWYt2U4",
  "key29": "5Kb6Qd4psnoCmDEcy7J7vc3AEVnToCz9z8WV46bF5BYBV3Rc3xTHYLCcqmva6E8d55sG7WbqC4himniznFrY6beJ",
  "key30": "B8NEULNMfS536R28C9fUN3mp3Szzq7udzk6wNKDXSMURUpTzrBc2LfWqxVaJ4RiYX1hu2V5b4YgDj8eceakBcfp"
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
