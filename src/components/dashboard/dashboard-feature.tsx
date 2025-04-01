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
    "37RmMCvQ4bWaEYpyvvWKAqkYDdnTa7tvRSBmCS9iP4hSvPtYhGrhAEz3yj8maCwyDyoG5PPDsKkBK5a2bBxpikpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b65BvU7HxryDeVoV9BK8quytdygRRv8r2Ep9sinUM847PrFU47knBe18Wrv44o5H6pG2yTuECGZiAE2UzXDPVjx",
  "key1": "25XSWB38913p4fX5wHQSV8VbS3jSTGpKvrA6SPkeVu5kAAQFJ2FQPvu6aRNGz8LPCwjSLegDzJvoMWm81jN4hbPb",
  "key2": "4tFZAu4MMRkPmPafaLpHmF7MMe7Af7eCxW6bNHqXmw9xvbrCBy4wcY5r5ummbjo1gz4CQaSEvpPZjS2AMh6uuiv",
  "key3": "2J4NF7Tyevb34nymEsVfbogCW6brzPAzq2CaSTPcPkA9MgWvdLXS9XcCJruaZnaSqMYxMXya2iJLwU2pBEcGt14F",
  "key4": "2KFoWHjaJ4FByjzMDrFqL52zYo2dnfWphVNrnntNBYDB4P13fUQgRbiEUhuyBKwip1L5SouCq5joMC2LiEFU7DLb",
  "key5": "4qZygyD7zVRm6Lf4HG2ZiMzL4nHozuz8dgq5diV1NwxsAMMXtJJMgM8ADTvkz8nEwxmm1QLtNUuqH35fZPq8L79p",
  "key6": "2gPUdGuAxCVYCCVMdaCFBhtDMYyp7wfLY5KvzMZ4UZMc8pM4SvjuRPFb2sbiJBR46gUAbNbLwc1U6Xk4at6fMt7J",
  "key7": "5kC3PKbBYC3CioPz74BLgkt9fzoo5kWr9S2vvMNjg9TohnzPXokwU3HPGfz5BoECK2Mnvx3gdc8Ej4fwS6jsCzxv",
  "key8": "4gNwAPRXkPhb9Z1zmopQsQHRKwRTmKGwSRrZ4gj2zjCjdn6oJtGbGwBKkGk3DVAJX5cyTcR21rm6PFM14P79UB55",
  "key9": "f7AUqpmXxtnCJ8NnUode6ZxGdkV2yceJoo6SW7tksZWHhXGXewVNeT5mYabEPvsfuFQeBqVQGDD1XCRnpabyef9",
  "key10": "2xaGVNCswdrPJTV7ND3QC3Vy9ETp3uRrUXcsZGSeaFxjXpj9a1hPDaCLpT5v3S3VWQZ1Zv3LxyTxseo8sNqtEfe9",
  "key11": "5s9nii932tnJvqj3u3aDyRVSWCackkRtFL2ek1koANCuaLttaUp9Aq5mWLM6zZxhWSwXD64SfF2xf5n8QZQzjTDz",
  "key12": "4KG3uZtshdCwqAm8PR3hBUqYAFUKdyasNztPpqnEiKQWaoDScxHwzNTVfchyP6Ri4hNppV6cFFvtWkagFa2xssyB",
  "key13": "XRUZSFrMeEpaijdzWSqRoH6DKsKC2mY88HyZN4dtQgakMFNdw518Q4mS8HC9rW6v8PtSUkV7EpH1DFu9ZRryhtY",
  "key14": "4hwWq7JYqucupXS9rrXHVDgzfX3Cmhe2piaibWgQhhm5Un5iaRyxBZtmafsA2kRpPutvJXumdiQchT6WRbD9yN3g",
  "key15": "He18Uqy7BHVqPp1iMcSdVssFwwwSVrMH7ZSfuQgpJeJVmaGS4n7UcJz7p4ahzjF2zRMR4Dqru2pcgFgjzteNC2G",
  "key16": "2zTuon3prKTnYJmX5EV8xFZrh6iQUH4NHoGwRkh1zQL522VW8pGWAwgWog2vj9aGa61jfeJsY6LRe5kvqFJZJCmY",
  "key17": "4i8Ly1DVv6jkHoyX55WPayQkFmwAb1qn5ncxKMfKffPh8Q7nyzPRJqYwmMCRYSa9VA4nD7mnnFyHFGBCQbcy1zKM",
  "key18": "2tAU8pGFF4395BxDrcZtGCaSzFnen8BBjDfM554dgGmLkV3YDbHwXJtq2iJcu61Pdj2WvB3uyjMaT4tmM4MeZSMb",
  "key19": "CACFp4r3cn3TqEkLfYBAAY5AsimKEycyZ4VUfPpDMJqfGtFnZMBQKJmEKKu7K1A2M6XMpJ13F9Q832cdNTA54oc",
  "key20": "3syJ9SeZ134bzy9vVXaBkNcxYMqK4mrHVXxban9PMTrj6jAV6xfQoRDRazNeV46foy6RiVoZFMBzX1wPkEnwGJ3J",
  "key21": "4uyyX95jYPYZaUHqgo9udmMKsz1Gg8iquK5D2E9STajCnQL6qYCuh6sPrjuuuwWZVuKxEUHMCocbuRfuqYijXR6k",
  "key22": "5ftC8WbFfizBMt7nSNrEQw3G2VE43JW4UKpaMbkG28sQEmpRd2Lqryb3kd7WfJaLRMavPXkvaruj6Ddkx2NLybQj",
  "key23": "4YqWkizVrNoGCWWUQ6DUB9WA2FnRZMzd6EuxHXdv4pf5oM4VuEnFKBTrhqHksks6FqgWpSKzS1JqqjHzGKBjwnTY",
  "key24": "3SgFSWFFEiMYRVU2Dq1HQW8W4o9tapa2AAosDRNqHTNk9FA7Y3G3nQ6hyyePD7r2dGhiZAx1puR5BY4MnL1rB5E5",
  "key25": "54i3QL2mSQawwb8puMjvWH6KTAVhbe787uL34ePazvwowZuaoE1Aij4vXXV1Uwd6CP6iWQxcbcx4UMtpeWvm4ct1",
  "key26": "44usUXU5pgzGNs4yDNshd22Ahi5YscVQcYP1UpVkdvLQxjPi3Sm1V6G25hCjdyYtgHgvhuKpMfkYXydCuPZ8TqaQ",
  "key27": "3jDJMZnV57PcmK1Btqrt27EQLFme6VMdYVmfk3DHqyC2pPrMNqfKZQYwAvfirLzJKaHXgnRsUW7E5DUZy95KSrHg",
  "key28": "3u9wgH6s6Xo7mW5uNxAeW5HyMmfK8kd5UrK2jbnVsxjoJbWNcWWSAXpSPxKhNksyLQmp24EAHntu3j3BQSwSxQPt",
  "key29": "2LVzhat8GtqmaXANyc2T7EjTmDnzJUzMMe4V7TS9Dvt1Qon6VeToJru3uGxQ4qUqNJfWvWAC17xt638qFDkudrV2",
  "key30": "PsR9bP5ZTFg5u5WnsGAUXUCvqsZeqb69ix7PruWJajLJfRrs6vFRhmpYM8jjirR1uAYquKBpVykCro8URuUahrr",
  "key31": "5fsk4CoEaCzdyVsj62ck3tEFDcbH7phU1HU3M2PDvSjAAoMhmVMvyRhHunDsoT5JNfyMTwGen1512kDehmFFCFge",
  "key32": "4aSgfPw4b2JnJt83mZmuhpVFbYNBTvdA5Cznzk8r7BghNDRAm8kwmyBgtzWcx6xGQhEeAS3N9Kc6mUYeP5R57GQG",
  "key33": "3wgz98SYx6G65UN1acwzpeXhfABkZbeMPvnU9uLwe6Cu2Ayruj3zrkWVh3dhE8NpKT6ZsvQifE5CMH99GNxmCppG",
  "key34": "2Qi5YwhwJcNrHWr461wv2s7i1iLHk16Dn4eMgQvoBGnoZYbiUT8tjeSsuJ1MxZ2eZXmfNqXSeoPoJESQc8hD37FU"
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
