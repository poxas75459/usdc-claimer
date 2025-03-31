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
    "5FsT3XVhapBZG5vUYjvmXY3KDyPHYEawnobxR2EbrmYCq4RvaykG7HBEa86LrDQMa1Xh5HogW6bE2NrkfoF8sGWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVCU1EAFhoZp8Cg3Pu7QNHrpXesjueKBzMa1ZJqMx6i2hdjXVficQ16p9GbjJXoCPqdvAnvq9P1BHfMBiqqNwVo",
  "key1": "4JCWbe9744oKwTquS6aGYhFnAqGphjrDLcxSTSJTUzm27otLsoYD8fqfyJ7Eip7ALBCunHAREbia9tfzH1USKTop",
  "key2": "3Lg16fp996sARM6rPbdRU8hgSv2T7zdN2Cmi8XcfTL9EB25PQhYEpDFQ5JoZmbbntCd8CAn5JBfSyfKsXVPpT7o5",
  "key3": "5xnDtBHYaumSEtdQZmMYCxqqY7fXKC82Dow7A9J5MieLU5qrznXjMKB9vg7sx3u9QKi8AAnMfgUoty3E28cL8kJ5",
  "key4": "2uWEfVQRNeRWeWfNB74jrdcnoQrHYTJ664mbNYhHvt8NWLk2oKHxd5zmee5v1KkGJ2WA693grUhFJQq3QqU2kfXq",
  "key5": "2Ea8rWMCfie2ZSjFt71VXPrsvVmSUcPwYtu3AxvVmjxRQ1bJaDciqXyWcdypDYK2WUWyt9Ekz24bdKRERs26xXgA",
  "key6": "4iCE6oo2wvCawYJxN63jEoWU3s9rDAMHdwmYXUnqsNNJx9n75KkHJiCLhvBhsQoPPpjRFbvJroNp39xTC6uCCeGf",
  "key7": "2XzVSJFej4AXhxj8JjjjocU66syvdPisGErauJLRm61NS9xSvH48PYf7vjHKcRiF7K5zsra1BecT8uZw9rYr1bJk",
  "key8": "5skZjtb1UpFGQpkAaPFcZK1ZPzDagG1Xajkh1VFGFis1aH9AR38PAuWwJ5LGk8uffpBAwCopHrLoAr2AA5uPHHxm",
  "key9": "4WsBwXticG4Zc5CQPHPfvLJN5Tw2z1Waw7oNzxgjFGVUPSukjxUvyYVNFQgAxpWuCsDfJrkMEdB6ARTuMRU3UKnq",
  "key10": "5GW4g1JwQaifLUUwytdGTZXU6CLmTsKNL2RxajSstMAVVpLLBj1uDMLFLwpjjihwtLN93C7GHfjTSQW4ztidNrBm",
  "key11": "2UsR3txRVBZ82LL5jnd6dDUY9oM8LyCm976aAzvoGaoXNoEUEiznWK7PqM7eAcfG4LHCjh4RhPnJRfhTj4MWJyhp",
  "key12": "2wYhTqzzDMbSwXJ1cEaTkQ4q7pFtKnyM7PUVEeioJH8JQVaykT7iG4AWmpkkSz3XP4yNH1bsEwLP9svkY26fKtTT",
  "key13": "5C7xjwGaMvhc8y7jK4cWXbnWp8byp3o13kBqe4yhopk8yxoJhYxGEaSoJKiggh9ePk2W81RQTBZaZX1v65hFnYD3",
  "key14": "3VfvUp3MNeP2EPFd1tHnjUjoQkWa2t6Abk4a8cGNQxtDDbAZUw5SMpdhhZMEX23iFboQpmgsLWCEXUnSSALJdWWR",
  "key15": "RyxiCU5mJBfomzt947g5cXYsrrqpdeoMt6D2GzdZ3sxpzT3HbQFfhK3m7TB4sFxTsvSC2U1zX1q5CvYZCd1i7VZ",
  "key16": "5Req2CFM4Q3U19kiNdpmaScijppGARoKWxCHUZXz9Roiuq6QQkZZ5HQGo27qC6LFY8N4wpBdXb7bDkpdB3wTKBgD",
  "key17": "3vSCg2XPgo1wg8niiyqFWWJKE8gCm9KWub1Nwn6hQmKgPcZRNNPd56VbBKastc7JMo4JJvn7QSg2p8UKQkPHCugU",
  "key18": "64U7P8QtoYGqfF96FyKpZz73d2MAhG4R716ZTFBtU9SrLT14bTS8BSD5rxYvWbRNmhw6fT7rfz5DPQduhhpzN2vP",
  "key19": "67CUeuXtmXZvHhtQqAqhm44r3pk1cmxTugsnDRRVEnXBLdAJ3SZBTZF5Sy4QjuPLUipEDYk9bsLozoqjJDe7aRPM",
  "key20": "MNsZKFcRWDkznVJ9knbbAGTLbUbeohmQP9w4sWebnSuoLgL9GC3LZEe6CL8MUBugPVE9rRf9jwWGW8MVaYQX2Ma",
  "key21": "3BqcZNEmzAmxoWq6b2totyZr9hq1pwQd5ka2CouujXwuaeTZjgoXQfrbRoibBrKd5T2cg18mm15mmphhidGcTwvw",
  "key22": "J8TReG3Uhc77f8rstyXz8WoYxoqTG4Q66iQX55STh34VeQ1BnQFk15SA9aSCF2hLVPGAwJy2HGhZdGLP7cKvMSz",
  "key23": "LFxtYyaXHunzL8kdDqhn6cTQy7Rcfk5bqEJ22gDzXYGo6RX9RLD6Y9w7RHcPo4y8pX6ZdbrvButoeyBMXsbm8Go",
  "key24": "4PLTuMWg7m8tB7i3oVv46nNJ7DCcRGQnbc2vtL1GntjDxhaxryier2YrHsiAXGyYE7HWHSfN3RU12Z6bfr5VSPXE",
  "key25": "5Hx9Jtmt5joN4uGvqSCspbJj1U8ixyHy4FZBW4ehhMzDbHi36hyuwKCk6gmPcXK5cHnnceBQEV32xU9rVaiSEFpC",
  "key26": "2UsvPPiFfSRQkYdpSgZ1AXcRnjWj83d3fjK1QcyhXpCSro4bHhfm8jE6Ky5Kswu8SC5zhAsf9btFXwXTxQJFohm8",
  "key27": "9y6u5RU8KvEkzmdHZ1cWZFKGwVPrrviSLD6mFoa5huQc8eEFGALCyqRMptp5xaZ91c1H1PMG3MBgL2TMbzkovED",
  "key28": "uCpEfUnZ28WuxBuzg9f2khTJk3ZMqhGzgMKEQ98SDoU1Y1mYgTQJyTpFHw8W4Gad9sZC8T1VwnFreu3T2MiLyse",
  "key29": "2srEDgZSDX2x6nNBu1XR7ty3yZaDWFhWvd12RNkLhxuwBu8c7rCBxQcYPTLDUUtiHtbyiezAmRyzbBmdwe593k7h",
  "key30": "sRGy6hQhwD7pE2ZPEHT6GQVhhPJCAXNQnjTFwYKXrkSBm4Z9gMrCft7KAiT7Bn4yf6rEhhCq1t41rwHRLFSNFn2",
  "key31": "xgsvxRCmcRdj4i6QvXN6vskiyh2xJ5BzQ2WRWVA59qWMEEadt8sPDFqe3kZ5evGFAUNVhQDeCzAVofTfEM4QipG",
  "key32": "4NCK1PsjFy1KXkyEAj34r3gM1ZCFy3cLVdDpaEX7gFJqToVwBid2J8mBaGqgw91kU88rS443MPSKz7HewEm76S6e",
  "key33": "3ymg1MK6kwxrysZun3DkGKgeuNrSVem6RK7WVyk1eHPuWdzBJjV946bcqyKtSwvK6oYasw2LoFpHMKUX9YmMWEps",
  "key34": "6M5XqLkKSpR92EVadd6YvQkzLnn8mmZnepbsgjwa3HsYqnDC4bJZ2twigqQnh8y6yvGgnYp4JhFUoaRK5qUhXaP",
  "key35": "5VoQaeg9uxYrr3YZ3Q9yyfmEHhYhVQMXGeMoanGYX5iLT3yYDYqjcKFC2dotDV7kHH4qeCCVJk9fG1NEfSK3PQdg",
  "key36": "47m8GXAEESZBYcMCNGhkuzPkiRayoiyfxfp7HUyUreQ2tpbx62Bdb1QGZt1pa2N4Q4ygQevWsvNueEM6sKA5WPVs"
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
