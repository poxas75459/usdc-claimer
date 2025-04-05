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
    "4qcrAnQcJsGRbwfQXXmG6EVc31XVhieQZfQnBHDw1qnxPf5VY935LTvCeXTGJBSGfExdN6H8tYz4WRsnG7gBEewu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JL3LXC2D71m9Q7B6VppgbcuHEzfkW4d4Y57JzV9MH2z2DjoCahRPDe54xdKYgXkgrFdECur33aXCopgnXxHipQj",
  "key1": "4THhFxAtmuBenpmHGzYpmGNo1TA3WcJmF7zoexZjVmwfEU57feRG4mAXVA1bRWZFGgMhsQZ5R65WCx7i25XyUtNU",
  "key2": "64Pfm3sMnEirCaKD7orFYg6pBap81Tzcqf4DVc6dVfkEBq6LgngQ7mq6NTBgc3qzYS1tdofVyjANW7Hbgu6xeksx",
  "key3": "2zw9vgLC5joREtZuEGErriVh2A7zKbxzHnZqhWU9dZDwpya6iww713syXTKdWZ2VTFLychodPYdL98w576rtHWRF",
  "key4": "46u2ko8HQy6unQvAcb9pj9VjGXn7J1H9xEhkYggmWVyqivGc2ixP4UZZQ2wsU2V7DE6eLBRmLhXfjTXv9jAJmPXe",
  "key5": "3dXPK3WwYNBut2sgtxh5bx7M6VEpGjG1JTbjj1DD1ZRdNmVhoJtCorVzNjoCfYvUzd7WamgxE4PoVhUdGsejM2U7",
  "key6": "43eFszSmgaupWg9divtRk71JPwsx2qmJRpqrhLwAGXx9zUVpREKwJWWpAZwKN8ndvTYPtqiRFebWFkp6RT8rd9Ue",
  "key7": "4A6QGndaMrN5kqoyDRu1mofhT6mRp4yo2tVpHeon6RVzQ7JQLMNp3gyErdSeFyVCDFxEyjYhWa4fX2V78JmwoNWE",
  "key8": "5Q6uLN2LJFq7pQvnpqNtXmx3CxFtCE1zNipXdqM8nqfzx2qtMur7WENowibJhTaFKhyPf7DxcR5b9mCT2KhLXdNm",
  "key9": "5mjwJz3k6CVd255cdsRf23mXNv1QNKssDroDqpHa1D5VXSrGZmcy4j8nn629SwGwfTCVEQzpcoqeNe73FEc68GhE",
  "key10": "2Z7wUG2jqRt1ZwoGN1gSF57D7HDaeQ1oj7YcXo3JWrHRFwFtx6ytqY749YSQp9NEwovrnKaMLREatXoU6Va22Ht8",
  "key11": "3gnwCBMbVSo4dUfMpbemTVa3pe4AyX7rb5FuLhVHLkfq28zMC1Bq92ZXN4hGim8EhLRnC8AjQTFTZA8dfPcDFJrA",
  "key12": "4HNUkTXriiFyk23ahdaVvZwuF2x7EMijuSX9A2uYKuniLJtKFcmPkTVYUSjf9mYfpXorZwFYFSoYgYwvTGBmG9iR",
  "key13": "5zSmZt8qKhdk35RtdmcwT5SN9MV71T7AGR5Fwihu2W82GE3XBUewzzrFurRvvBnn7jMyLykoXtxa2QmHRbzgYNcS",
  "key14": "xQ8FeocYN8HEAYSWQ9B4wSbgMHkZgKBAETkQU67yiofEeDUVqu8mBeaCgvHHHyvT8Hbuz1FwnoZ7zcmQozy8UHK",
  "key15": "2474w7JfBWCrVJHyxuxfXA1Y6eZiRwdpJk5u1tewpdi6vvyYyS4BEEJB8f7gMMHnK5YbDxzGhdrwnRxWub7E7JBr",
  "key16": "47Sxyp4LYfsLNSZQThnWsEfYFJWMYuPTvQK84UWDC7pqyAgqKP4uzRoMWkxJ3vRmjtmmmbQTR6fp7HcMmT6faCD2",
  "key17": "5c3Gfys3yT3E1e7ifhV62bLe6LSj3PoCMEFE2KBkVKKwpniKumNc9HqLqarayutR2jqW1P9NS1m38QzMgh2mo92N",
  "key18": "2hKtNQ5NyNsvQUgh7Yj6eyyHPtkkk2okbFtYfj1vY2kQG1PZRPS8ovMfz9QAxk12zYFZLSYtnyv7bPWxLBQSc2QY",
  "key19": "3DR23q1VddDPwqbGn8K1GgMr14EdHmBEa11Qtc2cJMfgE9jSPS72tNdMNLt6HhYWDizssAgpNUJEH1QE96KHasaS",
  "key20": "5dsfs8mHivosxs1QcNbGNHWd37PAUXTFJrF4qwyzU7jpRww9sc76gZr1LNASYvstzGRGchtLtRqXHFm4q4CLSSeb",
  "key21": "5t65qi3BbUwdQ6cfgad9KgMv7oHVDZfbJvsZ5L8Jtje61hFzFNejKX4aEXV9hkvHLevPw3hDrddyEVZnA3qjbWtQ",
  "key22": "gZrS4N8oTxhebhQvad82dL4KvJGDmiAkWUi27xqV2n8gpeQ2hk5siVTVut6WUaEtZ7aLWPd35M7phhSaYMyVD8K",
  "key23": "6noeYxY2TeVYMnJmtdW6FYcCq4j54CuTE82nLUtKvw1Qjpr8p3mGjA5LFZfSDYc3qCPoBCqwr7iV9K8txkcFGoz",
  "key24": "2uDq2v4GKNfbHdqVYgRvMvFePrTd9gDTdnTRVbakxXiypzbLqVbkxFByLxr7Lqi5Jw1TrqzNZk99GKVXgzxbMFeZ",
  "key25": "4b9aakBdSnGnVxHebPjGh7tB1Shb9eTkD6qstUV4uaUe8M6VgLPLvJheAP3HDA9k1PRdNJswSVCfzuaHuaWpZgtv",
  "key26": "2wxqHuJHsdyotURaZvq19RhXJfbjJTvzP4qR5iVpPyNLZEWf2NhKQ8Sw7MXcqu2axdFpepREdy4d7rjNDufAjcTD",
  "key27": "Ldr3Q8fhRKYHFSLZvMkLtVy73d1XVDFDU5Cg3U8LNc2uoxZ5qKaVfMFcykYupac1sLcR8FVxwwd3s8UUT4DNJWi",
  "key28": "3jLtaU28Mub2A85n5dScqJkd4qjxoj9i6dxiDSSq2Mw3LjqwpnFZmJ6j66PiLPt5qG8r6cMXiUev62Rn5443QPyp",
  "key29": "5SgYWmvwBPEg1cPPTgdsY6rAt4XSRsQDo1etUPN7txNKFXmqwJ3tyUt2v2qmPnMiR2NhGm412fAA6P6cSYMP3P2P",
  "key30": "4mY1xreeC7W2rofNBj6mYSpVey5JmsXeuxog5W76NVEZvHqnfYS2MMchYAeTyLbfe11KuJCDtt33Tz4irN1WHbEv",
  "key31": "26fYrncnrVnGrisrm5FnT6VhvsYBBtBFZAKwHJ21jBgRjzZ6RgQ7sE43id1hZ17fWTjnNq6zHp6hHVmMMpxqrurh",
  "key32": "2YJGifApvuHBw1rZLiSpCi5LyzD7BGYCs58WuCY57j3EgiG63Yx7gFEUbEo66aSJgDcKFm1ZRtGBBfPEbMkinNBu",
  "key33": "zWjJ3ED5nLsWMLrFHmAh6b8HdR1bX49qdAgno4tULAtymXCzm6sYkZ5BFWsj6ELoXmV1hk1H6tnkR72HK3rFuHz",
  "key34": "P6CnS41W3VjoD4CDhiX8B8dnZoqTt9dF6Gmng58AaHb2TzNgEw5uFnCyGwkx4oxWJcfqhMB6WG5HvL8tkJ95fct",
  "key35": "2crUHSSmKdd2Mk7WkR1fbbegRr9rCx6VjzkEw1f8Judwhdr5GgYtvPG2BdzUZhnGSq2DFHpFX6otjEa7n5hP8dF5",
  "key36": "5s1jwJdYrvupG4c2v53iYq2Ps28WJn2dxmwwKBSamdXcmK4NyZueBHNv5uzGyFvAkP6x2kCkGoY7WdBWBLhKFWYc",
  "key37": "3VPHqRww4yvEte9TFLR5iL17iFXY9Xtg64ifS3aVFmwazEtaM2Z3pr4VLFxPnHzzodBPcGfL4AwDTCwQJFjPCd87",
  "key38": "5a5aihCX2zd7Wx6ZGUDqqco4pNnoByRdukXELusFujtuqxrzkTtBmJnJQqcwSDZLyVGA9UJuJ2nELhu9bsJTmxJi",
  "key39": "uQUz35z7aeSXMRcWVvyT1zhuGeuAMGTSxMMa8KoRCYSVP9vxkRQqURgQ2P7GsXDQba1qRjpXgkx9rwKm66XL29X",
  "key40": "kzbAqeihrhp3bPAk8WKFXU1gGm8FPAxapAtrv8NdDo2KcKM5XdBdh8dpUPKAdS1MPLDRAceeHvbCtWt342A7AXj",
  "key41": "4YVWCamBcDEJU7EnCJ17Q76q1MrcR1p9yP2HeREJwShAnfmENAWCunM6w9uEyLu7KAZTLs5bFpNenc2wt2tzP7Hr"
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
