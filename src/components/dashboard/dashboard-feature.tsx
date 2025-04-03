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
    "3RctnCqCtJBRnAWdbsMDF9jegwhaZwcWugKEncq73b5S4W8EgopSUA4kQYV5CfkiePNyXB5dWHWhKeFUJGLLXoPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mM57ZKF39vGufLSrswvPSEypwqRCKRK8GLpZbcvCoDgD6Vj53von1JRHnkZE1nprPKaNMmhJekLgF6cfKAUJ3wN",
  "key1": "4ZHMozB934mVs44Z5UNprGVy9SwBSrKV5rcvKKkPw2rbByPP2xKk3o58MfWhXuX2JLJvaRQiRpCHrvXpjaa2mM8v",
  "key2": "4NcXiooxaSBNogZsLsEKKY5BMNyBvSAqPUcyHP5m7CbXEmDWDpGvKrb2T7goYaMNsZWwaRxKR2bcJXoi7ySHqM4Y",
  "key3": "3RaYvyaBN9jRBUqPKHRhQjLgMBwW9GFYXCYWYu3i34jaLiPj31BFyWrNoBtCyzpawfw373Db9hQSEiQUBgJdcPyu",
  "key4": "5dfrzSX4APWathP1BC95nZvznW53yaYYBSe8A9czpPBvWpvaRb5NShyta1GkS38orrLEPBgy1XEpamqiCgtKn4X9",
  "key5": "4SFPrssGUM9pciY8w3yW257dkBzuhqwBgvzTCh5PNUtFyam2HrUHyRMnboG6JCweTYxwVqknaXGKR3u8GfmpBnh6",
  "key6": "F6XRMwQKPVxjV393V1cm6q2z7rp4os9kVktzB2c5Exnzo6tcN3pz1MM3Me94CjYB1a6iinswA7RKpvyqB35sxcq",
  "key7": "2fJrRybqjTRPoWoNseTSNf3iVL3B5aWkovhqf6o9hPQCL8AGcL2ET1Y1VPW9MrSdcerjbgaH1GWPMPv86FpnEMkT",
  "key8": "3W37DoKXejPtg1wN6iGJxrwCAhR9LJmssAqEsrRRuZf3qCeFqgtJ2SNLNEeFiNQqUYrHkEkNqjynLGNA8cyAwCFH",
  "key9": "3ooWp99Xfq6mixTwivfWfjnVqiq7MLzrxGP3iYEE7uD2iAL6wtm4NWUxqbQRcQ6DkTgydp8b4SYaZquPEYfM9BmR",
  "key10": "3z34mTrY2djrHD52CxgQXBoneJPqnKSsLwqUD36SYMQCqwBoCju5J1N1oWEmtdVxQJDRd1bKmFHEiehimwJ8gumF",
  "key11": "Y5SJ1Q9tjfSmevjZ9K8DEBFSFL8HEEDsT2dQ8QyCZgwEtAaanazErcpv7GuDAWwc5HW2PKz1sRic5sC7c2M7VuW",
  "key12": "5C6uGYmyBysj22Kv7eydubwcpQfSfd4baKiNmV3MHxassrrdwJ3onQh2djdFkEQDiiuut8PuXVFb5A2DKrUiqYdP",
  "key13": "8vn3ikUWKtt7Cu4SawYWS4vxq4Vonoz27yQvEajwfeMSp2zys612MinCgi8mpGyoTH5kN3ifQnJ8vapqLgcGTM2",
  "key14": "43midshGF3i9cnCwL3U9z47mNzXAX4GrcNRAmTTmdFHe63ot1byHyUobxtQk5cKW19t5GaxqLGszNofdHcwRT1pH",
  "key15": "394MsBSpR6WSQA44hpae6nKAsEGAY2of8mZxWpNZYrnP9RkrALHTg4waxxA7aYPg8cTv3ah63tjrSgBjAGx1u9uR",
  "key16": "2bnGfJzLFutuQ4CFy9HVnaN4RyM9t8FmN2kTwp9oJzaD9kwar8e34tuuZdiySHBMWhHuK42trPDYvvEeYijADvMK",
  "key17": "587APfN9BRE8rkAfaD58tK8t8fy21CNPTLhgu5sJviQRZBCstfdW47H9TDKgj9G6ZnsFyA6hPCMdN8k4fVphGoV2",
  "key18": "2MBLfhUtkaSayk9PrwBuU74ux5NeQgYbZGcdMaTrY9mUE85jHkVR5c5JBvFCB1hQRzfAyaSyAsQKCt81vAd8ftXA",
  "key19": "67SNj6MTiu5Sh79hm23LAZjUH4qVayQugU9sQ8udJPhEFPqLF87ZnbY1qMbeCQU8EbjAz24k3EmHdvDXoZW69oRp",
  "key20": "3zhAZhg1smPffEHtGwsWKZ2ETH817faVsBcRsbHLe9Cp4JovcMA2bF3mCPFd13dyoMpZcGGvFkSWkqTiYfixe8N4",
  "key21": "2d9qw4TojDzov5EDvofNwaRou1fjNRfgXDsxCkdTskuwNECscBj3TeGSisoddY1avCiQfiASP8GMRvUgznYDc2Mi",
  "key22": "5vnk95ngxHvfYJwz4udKDSBAGCCA2drNWYNZ5hU7Kt12Uqi9WzmZeUZtZSSXC6EmBtD6aQk9ebRXYTif6FiA71oe",
  "key23": "2aVQAgxZcyyiaUkRBzGMX6egQWgvEQ7U6BcjAWPoGAHpvmZb2fCst2w1iTmJioqGg6Pso81gj9F4CeJFuvyCtCyf",
  "key24": "26xwvyVApnQRmZXhLmiQwpVZ9YpiDqJsrLVj8L4WU5VcDVuuSUGNWmyJcFeBV5zkaa9y5sgvDzxvBwSYZtzGa74o",
  "key25": "3F5r6zwKMHrnw4KqPkuctQnveSWaqYWr4V5BBnVFmcx71qd294vYfEajyRsLmrvsYYmFfH2H6x2h8AMUJpwnA9cr"
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
