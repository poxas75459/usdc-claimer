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
    "2Ps6nKfDbkCf7LGmFMsHFyFpQ8iNygJS1e4GFbp92e7XqfNEqqu5XrurvF6KizQ2Vvgx1RiFWhkWhhSgwYR9GvLk"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5kjHs7GjaKnuDUaSCpU5EY1MwX1S8hAW3MEoFMhfqFGiZJ1DLUssX2VkyUKhzyMaKnrqehCZRUXFWoA7CkhF8jSY",
  "decoyKey1": "47gzeAc3JvC8Ndnrdm7Vw46mQHhaGfH57i3HA9XoFVv9aAVCMeGKye2fvgTxBubhkj5adhcX3cGRthN2fC5bR585",
  "decoyKey2": "3Nq8QHze4ai1on77UVvJRwZmT7ommXKbS4W2xwy7hY3o3839h9G9eoTUCSJSkVhjXS5oJT35U9ZtFTcgYkfNeDra",
  "decoyKey3": "3BBF5yPtU6TAM9rFRrQLptbitWBKX5wgCNw1t4pMH14AGHTDTsP7nrSYD2xzM9cRRiGpY64bjgaTk1jwGZH7WB1a",
  "decoyKey4": "2rUrtCAx699CUYbKog2e9HhA1T3hjKEBad2VnHEYxpmtMEZX9xgKirsgeF3WUWTYdQBfZ7D3ovJb4bc4GQr9mzM5",
  "decoyKey5": "51v2Sm7hxjwvyfwRBXJfy9ZyBzz9qU2rNrHqumJoLsvwdBb7MR1rCqDEeNVPczkurh1dnp4tF5ts9VFS7DQDRBwE",
  "decoyKey6": "5eWcqKYxKGrkx5FheZ2d6Q3pa6uqKXwPMPbH3RTmgaYu9XWuAzpbANpiHKsK7EWj1ifY4hgZZyhy6naQJMfuyDzm",
  "decoyKey7": "4Aa9WHfG32WtkAHvtSkw5U7nMHUgH9fndRuFEBx5pC5TqQbxBqkAfM32ZHBQvFTiwxkDuQ8V9i4mtMzp4g2Cv68x",
  "decoyKey8": "3985LZXnACffB3haGXDUSHMU7Q17GJWK6i8g7u2LQQ95K2jdHbvSktr3Pw6Ld9uaiwPiJrAqBZBUEeXwLVQAJsUU",
  "decoyKey9": "52vCjU3UTPSxNvhp3xBdCybMvmN2QoEjyWeT1FYoDfKutinRxrcEbEWXbPLTw7uVfuGsSbHqXBrhgGMgMgsfG7Jd",
  "decoyKey10": "4obvrTPKmyZRQqUU91Y31J5HPrhpHJr94WUi62yezGpcDzpH9GFuTDnrNnFhVwzLDAWA72YqiudGRsJrYAtVdKdT",
  "decoyKey11": "3xCSEnPPEebRnWMmJSJGqJJvYogq9QrrjcCtPgsD1JbvBUp3pyU5pPzX7j9yQ96SCinL9ZZe8joN69c5D3Mqeyay",
  "decoyKey12": "2s792Se9rRWwBebKMRx9hTiXP3ZzN7wCFZGczFkXVok86q2DRDTATXpgT6u9NyfdaBh3dz7Upv5CdtaqE7cZ4KTk",
  "decoyKey13": "SDMKGyPtGjxBk1ESu8PcKnba5FqpmbLGWqaHPqE5kNjAiK8QZafVo6heyfomkXihTZnM3ZMSGrLRqYZZCYZEQBK",
  "decoyKey14": "54x5HVgbtZKLEvtJiibz55C1fNLE5B21A6i1LBe64ny3zNPTNsq5Af17APaTVaX2UBpaWBhhVn9qCnVv8EoU6boZ",
  "decoyKey15": "3o2CbtgKRNTwGCqpoMMiUHfJMtQY1siJjEFrHtpiRdHL6HKUfiPmDQr8Z2884cNk6CcLK5ZPyBcUHDQtxjm7GqE3",
  "decoyKey16": "436R9QhjXKj4jxf79pU5hs6ku9vByfLsvEnTzEDmzCrbNYhz237pS83SbCEtfYzpT5LwV9xFsiVvd9i3xtQgPeBn",
  "decoyKey17": "2ix4Zw4pQc9mtB68sukb68FZvCq652epik59JPbmhTkuJdx4Z8yrDp6hdg5J5HTvHvMbbQ9MK4fwmxj48TtAkGk6",
  "decoyKey18": "2HGBiXYBpMhQJT9tkNdA37acxDJa8w9YdisE35HfxwCYTtH7PnGu6kisohKAKLyTdkgbGXyRfJVu6Du96hsDYBjA",
  "decoyKey19": "5FG2wpendkrgKeKLcXeHDVfoJahrEzgmbhPY8tY14oGvrYafqDvJVjG5qUEhpe7kv3m4T5FzPMwf4PNnAd97yJMd",
  "decoyKey20": "44a16VdqyCBbZCUSUQr6TtFtNT8BEpDLQXcb5Sfb6RcnNp9jAHJLbCc9Kx4MQ444PJHEmx1C1rUu2BwxM92Epub5",
  "decoyKey21": "k37aVuso1vLMNfq4MF7a1WQC5bVNRyFwy4nrPCkPyw5EhFwifjjpQJANHF6dLSVBtsU9vFPP1jXgEEQkmPuFUns",
  "decoyKey22": "5YQmnqGpPuCmfqacjVS5VB43gtiZwYVFxctDekyaYVgSFy2QJcqr2epgSDK2HH7yjCyHvyor7HuM4NYChoMMudiS",
  "decoyKey23": "3Mq4ypaPXET3QnVcn17ZkECw236nFoRNhrJnn9JYQyqAitzMh2UWsWAR5utYdVYXsvsH9WaMG3WffHsY7kE8mQMU",
  "decoyKey24": "2rD1XwSRbRQwSkZfEmtJmeabRP4fS1owoBBXjwiarLLrnWGd8goh38ZJuKTC4wDDXkKCr6qozu5egapsFKe43e6o",
  "decoyKey25": "5FxbE4fLYeUQcAHeDvPC5tjpGPmsgXjUMudVvRYEm4xU7LXp9aFZnTTLARMupmdTvzpBJ8LJBovBPconMBkJAVQx",
  "decoyKey26": "2cFEmuYTafaNLp4Fvr7fLHvmpXgw7qGCEdoCLgJCxr2PTAG8iLfe9BNaUn2VXTqLKw7GeTEzbYGEp7JZ8mdC4a3u",
  "decoyKey27": "NZUy9J6NhRGQ5doLU4WpmhEPBrZBVLDtYgBFjZeM2cat8REwDakUQ8SwK7fYuXZfejVBqECVy8Fox6LJ7mSoNKY",
  "decoyKey28": "33h4kH3BwAvxb16M21Ugpo2tFEDSSKYjpLbJqy61t9d7WF2bfZBFz1WmtSR6TcFUF4dCRHHV8uq8o2ntHpq4vL7V",
  "decoyKey29": "5FRUSWBbacGjhhCKp5pWFTCdCGt1PUbC9GoXrdSwHGXVCxPjRwwcMSMXvpwaJqL5HvZ56VZg2C4xcCakxMaNPuju",
  "decoyKey30": "3CCxCaMFGEJamKYtWDyum62SMAKf7rhfL6p8g3J2uBvDRnKp1tEE1Lv6KJtiJYhpYdG6P4SFqMUzgkT8HsAK4XwH",
  "decoyKey31": "3DA15XCn2ME7UwZy4vX8sW2JSQhnXysGR3C8sM6cexH596rGBVoGxwXE99FczUFVhKHGCjjQ5qPWntKabw1Jq389",
  "decoyKey32": "3a4CC8z54EqneDL88cvtGbTtiCpPwJyhKugm9cuyxJPeUNDFkFQGXCs9QBERUnqCyMmTt5izSt6ADCzR4iPwnff",
  "decoyKey33": "2mEKSLKQvHzFEKJmctEKVejL9Epime6ZKhJDt9DKKVwou7BPFDCpDps2gMZbTja1gsonKxMp7N5BgfY6RDQ8EYDQ",
  "decoyKey34": "5N7ZHkjnzbPiavccCkfTSBLPVfFRv4MC2WK7ftZDvxXyg4ceS1aoMGLTT2fnK9AQUuxY7xn193huYhc9jUSAGJVt",
  "decoyKey35": "3TeRHNwVBdRk2woCZWZEiWym2kKJPcLZNRxtHErZparzncjVZjyxbgzrWyKSfD22FSwaUNg6aMZh3VMvMHwWhKme",
  "decoyKey36": "3Wbq2iPK49Srm7mwYbkyBicQMuJqpFCwMYkdjdLHCbWeevcEhKyv94BBTQWkmvyrevhYMPe5jL4ssRnLQTFcKGfe",
  "decoyKey37": "d3HeQfsPbdHy7KsxVDJS2YUf2xWxsXy1iABNFvuMKFL3WFKizjTqMBwzsQ3g2ktPLho7EzKDLFGiHgkPRwfrFjH",
  "decoyKey38": "4C6fwYsSHg6Rqnxzeix2i7E5ZaMANSKEJnr2chP373XFUUsU9ASQqH3AGXyGFWx18No8KayTHLuB2hTjdFHPrHwj",
  "decoyKey39": "3kW37rdMtjEvqBCv297UWvGXcVwvUS3rXmwPXATMebqeR34ckSv7GzLgKsUVFZ4HxGEGwh2gLqKCgkfDXf3LVNHR",
  "decoyKey40": "5PoSP7giNfdKsyGRYm3o5x1z6ZunjCJRoJpSoRiH8KzhKhSPip3BqgFj9FjcYWnqPksoWKxMSodM2PTv8akrtUa6",
  "decoyKey41": "5g56qDTGqMVzcdHEkknCDoCTNMJvyrmrUnjKYKUkGX52nwnbgnRCEsXrWokEJokDTBCjgHSXne6MZeTR9KEKjX2k",
  "decoyKey42": "4tpB6SSY2Y3QwmZ4gv5iHTXGTgt6H9snWBZsnYxaeZTEauVhFjLFSc5pjBoEcedUkStpmfMtgFCBGFiRTuYkBro2",
  "decoyKey43": "miJuykZkWWZ57g21Es9b44oUSsS2333uLd9Tdhh8J2awEq3nT4pNix7EUnzwUr2dyNg6SQk71GkDtpW2DnU3QAY",
  "decoyKey44": "4CC4y5ti6Hn6XxR6wLGhRcjHceKi88ssXNiSmFzkSco3ox2VKG1ZXDJ4MNMo6VshjxuoCDSvhvKSeDrVEKVoN8FU",
  "decoyKey45": "dQmCWka1g5otUGb47ySV1ni3YWuMSiwihxpmM46txp2SrptmTEPKZTFzgz5EWntehgdtdbpBgXSyCxA8FJe8Y71",
  "decoyKey46": "2N7NSHxZGAJZVdaVFw1LvWou59R2ZUzHj4X3zdrnLkt6bBhn79PnA4aB7rbQfuGDFneNjYsPHZpLR9s4DyDL96KA",
  "decoyKey47": "3oe4EqX6D57NWsZyzEdmWTSxtYeEUFxoVkRBtNS1UEp3AH8tyZzUMcPH67AHbDZPCRxJv3a11ohKmzj1mYBmoMvM",
  "decoyKey48": "4TZPnW7E6SX3grjuGsWzhJzePe7V7yhpVV9FDiHLv5WS25dRBXpKRRCr1WidgFfX5p22sGgWxLtdGiprd5LfLW6X"
};
// DECOY_KEYS_END
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