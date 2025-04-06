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
    "4ngiW2aUJSStdDZ9Uv8BiJmpkxzfMifuWN7KrxgPi6PmBeDwgQeLPzVY798GGCkopyfe89xuYBre6Y45iwhKHSzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xfSDmniuQ4DnUqMdixUb7LCgQyJgPRp5E74AuhpSEW8a4QGiswYdq4kT3sLCUT2owFi7JkA6SAGhRsi3DUmfpas",
  "key1": "3qxgPg6WLpeYTnPUixughdyScUcZGfugyVgvcw1WDzX5AGmii7JMKBNjMdqK6Xqui7ZoyzMBTbcXbFFviuxD2K1P",
  "key2": "5S1TN78RP2K9vkgxhT5pt7NkPcPfZiW3BJtUBYEVoWuSNTqsgN8PAuE19pyeeudYWp6VT3D9Wpv1GEBRxsSYpCCW",
  "key3": "EKYrsmRQbXnRARah839eCbZUXFjyzWPp8z2w8FpLEd8QrwWe8yu2d9iTLtddY8D542RGKa41ynsK6itPwyQy4Ct",
  "key4": "52XZZc51kW39wkYJqFypaip5GLCTqVfVh8yqdV554KvP1VBYmaZBAvfXSAaXQiqHPuaUnirn8X35MSZyShPu8WH5",
  "key5": "3FCy5Hy9bBARAR1kxfzZ7fiLCGErb5MMsL9ZtjcftXvKBt1cy6inqs2A43hYdLuxGBMFFPBVbhvuYf7KwTfKXE2X",
  "key6": "jf4euvg8uR21Qgij4zfTakHJPZi9N9SoafpNx5tGZJG8qhyBbS7B45QAdPCAiouYQebL2GTLWnb96tCombNkrZD",
  "key7": "2yzMTfZGvQA6reSXXQSvyMvXkBvYB3F2VUREHP3Bm431CsnUAEL6AXi14Xfbu6URsJjDQUuUrGv3a2VvH8k65EvN",
  "key8": "5mVnHaHdHWRqkcrq4bt5fE1C5LmbCusdoUvwPHQAfzjW1ofUyFtxdLezD9ztLbHBzi4J3tgFsNsQNyfsuUANr4q1",
  "key9": "En5afz8LMT1sdjqPKJn61a7qjyBGMb6yRnpnP84Z51tFjKNzoEYiGsJEb5tGwCJrjqMUJLahDPA1StYx8RbB1y3",
  "key10": "CcvrCqKmeYRpw4a2wwuz1ZakB37375FzEGRuVjMbNyLukauJK5fPJpAjgPbbbCidtgoSsYWx2WCHi49xdz2P5Uu",
  "key11": "33zbzw3CANw8uZ5hbSiB1Ct9py6uurpsijpX3NvZgYo4myFARAZ9R6ZjfBvBnVdt95UTYo7jSLupRurRtwE6E1Cp",
  "key12": "2cgtKs5FJQGbapuFtzxK69j7FcjQspXoeByq4UKP7NGevMZ85XQdjUooJphZEg4QRsuEeiW6G8TQ8N9H2tDXhaoV",
  "key13": "3LMXKGg4F82J8qsZ5YbvjA8Sr9bYTzz4Xuu3NMt8Mpck6ySGN8crntQ7CrQRviks53W2SYNXwbD6XrvgtED5fPVT",
  "key14": "nEqYXMPYUyoYLPaJUo5XZ41NgVZzDSEuVjZz55kMgz8JxCZ5M6XEG5yz1DoGzx92z4u4dDyhWkHB884fTuMCqNL",
  "key15": "3RtNW7a7aSEWWH3Z9LY9FNgij9Cx3f7J8owmNGgFR56wpQewFYh9WYesTH865rHbAmEqXsr5iagBNujPvR5d6ncj",
  "key16": "2FGLUK1qXpjby3tP2hUQz78eLPLZzRWSUgwC3DhX5hQxdfDVQJ2vgov4Nm23aZrcsTpiqeehxxGoz8RDxkHu8rrF",
  "key17": "E85H7x2q4aTUWURAUT7R44rRuUt4WP67y7S83ik9VDdLRJdgbHMYJwq2Gj42vgCSp4qtNAYC383fH4hBGGLy521",
  "key18": "2KM4RW9MZUahrGLUED4KXtRMQzoxJ9bABkxPuZLNREjMihM2w6HBqid4N5fd7qieoHb4nTBD2P5DYzs4v2ZHn84L",
  "key19": "5L9FCVNP71rNUnbKwu27Gm6Pu9U3dEpW2pWBMDUgPm8tQhsL6SJLktFQY4PGNnbx4kGHpUYMUSbaS7kqyGZDjPbj",
  "key20": "66GtsEhdEfbLHWrCvEqkptgEsTLp21Rui3u619v2duhmAVbcwhmYk715RVLMx5Ui4pLadEFnfEJNZ29xtS2qj3KN",
  "key21": "5VQEFQutb7BdPFyquzxZCE5M178r2xvUZgLuXdP4NQgTXGVAzn1zevBFRyYXwvetTK5QX6Y6LWog4SF43M1wPSDv",
  "key22": "2yFWQBS4NsHr9xSosNENHqxpULkNty1vknPmsQ3wbsshFC2idDMHHSo6cvmzr8mPKVHVitZCi2Swup7bfq7x4muA",
  "key23": "5R2RzgDBvrxWXpvrWez13zsrFrY8ANVjPnTKsy3x6quQfcw9FCvDhsAwrdCBjEGDKggiFLbZsdHKPtz291xsqoBA",
  "key24": "4syM1UrgjmoYrF6dsw4NSbBYJp5f5LJovMExHUiKGN4xxaEGLEgNB5K6sm88dLtxPLXrj7xqcAnm8g9gMAqaiZjx",
  "key25": "5snzKeNp3BefTgfy8buLohuyoncXqHPpY1mQApvvgR4aGcFd9RyriC5rt4NZ9PitXnnXK9iCJsABZwycGReU4YSu",
  "key26": "5xyv5qjxR9hJpiXDPggYJhApvKW8aAXm7uVcgr2HYj6PCzdHqFsNJxPYDmd9BrSNdAvktV7kMpuTbmff2dJLAZUU",
  "key27": "xquGefokNwZ4eekubKddYzcYVQHNcjEf9pnQXxxkwkdRFLveYuhGorEE1xkJ4VuCrg7AgxQR5WiXJ9JdpnSxhoy",
  "key28": "2Xi4hsDHKvVG428uftV1skLz2rcaQcXmwrgcW3pJhc6fiDHSSq52KHpzQvLL65JuxvkkSCqR7ifDtzhpavehehUv",
  "key29": "583Y1dS9SVZQyGDkzH6cqQNXYX1L76dqjbSm72aqWj5BbheYJ59Cp88UMaHLwyM6ES2AocB6BS6pieemjEWW2bRD",
  "key30": "Ga56Y2XFuCExTcbbTsKTFiqiPuZ4q3fTHYdq3ZHApFLuVrjejAESv31SezCBhAf2dt6rVoikpDrAjQ3MgfbHApQ",
  "key31": "429ZUM6iAcfgmAmGWTvYjF5fv9smHweLFH3n2ZUV8rdCBAfGC8eD8Whm57KQPnjpreNLMt3M1fAxt69CKKnguYTP",
  "key32": "aLcWGJZ53D9gCVAP4LLYAmJ9KpoLdMRAmNQ4om87UkpHDmFj5LyfSo2QpVZvcZfZor1G7UZ8V6UCWAT94hz2551",
  "key33": "3e77y5WsGHRPRVv9u7tW9p78ySZhn7DkiWubLnEwqkcEygVNkCZV9SFJ3kTv5dAgwCTt5oyUD74rssAmjka67aa6",
  "key34": "3dVAZrf4RpQd11k5rhLFGPx3kdaF9zPTS2gg68WX5tL73iUobHoCfQHYExYXp1JZ3wfK1aCkjVzu9htZBCr6uT1",
  "key35": "2Gk4kzoBitR2bwMmCvX81RWc1Q1WR2jCeeykpmE1s4roeh2iofbpcLj5npEB1S7dMFgP2oMJjDHFGVPQAN9JmZVa",
  "key36": "Lb31ts1vwoLNadoqjjcLn2onrbiPq6wXc6Dx6af4NiwcVaoRMCiiNX1jXjY8Su6DTdQmz3WpyP3pFL5zvUSYpzB",
  "key37": "yzk3t8eN4Cujerv8drnc4iHDSY754wGJ3yspUQuvKFNMt3gkRRQ8QSiBDroeA7jiuV52kjVGJAu7mmz19w4kxYG",
  "key38": "22QgiKDc2MuBPfW5fVdF6HjnhwD3WtpBgKyJ6viqRWPkbVdW4SLFWSfyP6G2vm3RdQHWpyKzeTK3SCsdGfvrQn21",
  "key39": "3EjAWfsNEL2BREsRXgBoYyoHQWPALE9eTAeC5JRLswPxhbeoT1xvpmJvX6s4TS1uehK1c9Z1xpm23xCsFGo6io9w",
  "key40": "5Bkieiy1YrEsKELV9wFE5v8ZX1egxb3QMFrRK8aDgumYooFD8Qo1TPTzsucnQXZd1GePBA7UeWM33Sxn8ueDoH6X",
  "key41": "4yYufDTBCdYdjWth8FwNXGVu5JdPenaL36koyivc5vdPLgNsWc7M7E6Xxunz98vkTjKAqpZsWNEjn5usujt7gCnF",
  "key42": "3w2dcKKvemF4eBSzeo3FNuLEVBfHXXrJY2CKSwTzatVYpcfiZaAi6UcmSveZ5gpwwsHERVzNbTixuM6fiu2oSc3N",
  "key43": "4SeESsRBRwsodU1UnmG6DvQqnNowFojPwCiHfhBzSKPEmfJC4ebdvJKhgq3hMogQGvCw6UGs7cZ6JEi337Stf2cu",
  "key44": "4muewkKKd4L1Wa4YeMpc2ByPDbwatmc65LcDbDKoVyamQEgCZoHgwuDowmeJzhMVYvrxzKQ7MLpdkjH1XqbRtukG",
  "key45": "5wsSMDnU1FmifBrtXTS2D1YRZV6DjFZ6ng4HJnBvCcy37JbrUtgjkpB49M47r9EBsQVq9t3ZzeU1fyB3vR6gHtL1"
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
