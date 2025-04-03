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
    "52fHkQAb84ZxCcrUSScyjJcJFSuMXyMDJLfmDTNSyg6cBB8qjVeSp69Gq5azxJEyZBhZvm4zThg16MiBzCATvmWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Togz4sYWfuQP3jRuWg4PLnBF5DtYjgakhoxhiMsjYX4bsy7VBj21XdL1LcR365XavwCPBf6R2LzSKejrq1fRv3o",
  "key1": "37W18vNJCYHe14GSVkuW7ydyP8kh7agYuk6Mb9xHoMqxXBMsBFiP8nzEFfokRpRKLM7EiGzWARKrv9ws3mnfezCB",
  "key2": "eKRm7gSm1Y3PHrgXt1winfrM7mMWjUiuTx86WJB7oPsQsQHwJMdx34Y7cLCq4sLkRMuCeHkupi6nKRR1hdE9QF9",
  "key3": "3CACrEcpsWAzu4Lp5qGyXhG4C9Fb8JYh22YJWsCxzEsSWcku7TB3CXRSWUnuBLRe6zame4gXmRBd4d6riPa4onqz",
  "key4": "3GA55mzJrkRBGggDBXAY2zFHj2n37qDP34rjT642F9qvemaqtzUXcr1sKQAD1bctN39ocndDmHZswAXcKqY6RwsK",
  "key5": "5KhSoHyptRCbSAdiWMcikbpFCLXXqo8tn8P1v28K4XiqRyFKhgMTpBVtfrQEGd27QBCYDmsGutnMhsJM9grK6ehd",
  "key6": "2FER8AqPBGVdhLR1kpMLKrkZBURdxgxaAsyXxAEBc4CiF2HNjJkU9RL8sv7RWhzxgttQvT8ELPhQ8THSwS8B38QW",
  "key7": "4kR2LZcf1DHMjU3UfHk2sVy3U3wdMX8i32mUsSDruxr3k7FZ1omjF1U1AFf3xePTuRNj7CWPXicQsoTXJm59MuBZ",
  "key8": "3A6fYuVSzs9G2tWyHbns32xPCfbUPximLdvrDbnK1DLb9S5ThuaCBgnnh82kb7rqUNbybREsLRJ1yqqA9noL5JFU",
  "key9": "5FYzJS8gf3dQEgZFeNjMytpziscB5jtAX4MHiYkiz2cprT9C1ZEZ73u8sj72sfzf3pJAg5L49TaBq9w2P5yfUDt2",
  "key10": "2T6YWeTtZYb3UVL3EVF8jktjVhErAUND7zwmbFhkCdQqjpgtLM4R1ynjskMeacdd9xCweRnKeXqZPiHg4PYfm69P",
  "key11": "23EP2cnun9Y51MDYCXx5Sq1CEiYExUqYenPVmwL1tsDkLg3eJjW9moU78WymGzoSBNyHEgnSUp6mCMLLeD4zx7Kn",
  "key12": "4ds68qDKJYP7E5VdCH3fFU42539cVFrUUXUwtox5r794p4Lze9FzeXH2qTnjiVM4cHjDv5f1wDQWdUzjBRo6YxXi",
  "key13": "4zXrdNmw7sPiQj5KR3JxGomr2PYsNVyCBGEvikSKP8QmfyodH1V7oYfZ5piqd2ZybAqUvcdG8QmDqHrAYQXpWGvn",
  "key14": "4DyYEvb2hUuXZV2sJtEfPgkDAg2vTb8s5HErQXcBiznZ8zfPJEyzPWzDm7TJPipbenZKEs5S5VhPLdQkvuxPV6k9",
  "key15": "26fo5B5Lqa3LDYtkg3wc3vJPTJCHYyae62ySZ9UXT9f7gzPnfavNbqRHfWySnNwRrwGyBR6mkU9UYLQww3scLvx6",
  "key16": "3umMKtpy8jZpcE6V7im8JpHmAa6sj2WhbgXGJ4JT9sHb9tPxoKCFRtFD6T3Gg6kLdvBy6c6UcdGUgoSPHeMQwdWJ",
  "key17": "M8eH63g2p28MSck4fhUXEXfLszkYj42BVnYnYZy6siUeFSzsfCyC33QppViJZQRvQrBjABoZY31qnAiZZfim21A",
  "key18": "Uzd62yuK1vZ2iLYcpsBqarRsFR21bL7qiSCcaC6kNcWgfxS7PAZxkS1qexgVtpTvZDZg3LYSKrweqSyKES6sVPj",
  "key19": "3sMfasyE6gbXx42ybvrP2kYDQG4gkuA8sxX4FsSC8P3M5Zk2id6MS1or6CX7cwDKUm8ziLvj8neMkgK7Qqkf6SUr",
  "key20": "4Wh27qAJy2Sd8vCkAfmTyWkg9W5JMakfpYdaxn9sHmhGR1Pi9AxokGSoDjfxdoXkSFxRFW6gYCkErW1nMnNJh7um",
  "key21": "hQBDS8rJv5BZ8RHiSNYZpAAGhhaJKYy7eQb6NTDNsQX6NAGbditEFdD5N2DPJMC9E9xeUCFDUFVRhK4STm2T6y7",
  "key22": "3TxyERHF6br4NBH78EaqCDcq8u25Yrbf1rx6Jb4RgtJat6dpwr6Zneh8LV2s2u47SSj2EWgJJJYAfEeoToDXReoi",
  "key23": "3BYHV1J34NGf63tNMmxsQZCxrnDXMLzfsxF9WCWwf9RF9nLkM8UnvXYF89tEEMpA7jXxMp92eqHs99wJXFBfdySY",
  "key24": "2nKAVpt2XVw6fWGzJ34qnKxqpbZ1CvqC5sYU2smshSTNegDYfewUut2kBCYANqaGMaFVrQtq8nNFfD7kPkC7Xad7",
  "key25": "5K9ZLX1Uk5u1xbXoGDTyw6Xk4p4rsFTftZkYWRwrfaMNTCb9eDN4zzzv9pd8mqoyHyFr5erTzbQ9rLvLV5bB9JBs",
  "key26": "64ybWC2hg92R9GcS81XWTf193vXDbrDYL6kDPSTVJCDAxe1tFc5Jsez1GvLmzbaYVKqSqBbTLdBALd8utDqYdW9e",
  "key27": "59TYSLRrA3qEbNMrs7W5ZpanWG7XJDESWLLdyVFwKWfPcnajLYETGuvW1ZPgP88TSK1Gsi6Yqk3Xa57YhquTyiwx",
  "key28": "2qvTMUjonHxf8L3JirjLFfK64oXGYcLQe4x5X3arXspRqjeAtwvP19aSgtJ9b5VU2o7rF4Umyjdd7VnrtwU7xhvi",
  "key29": "3q2r9Xj9sKEpKLpnYM9S5PEBW6H78v42QDjNhRHKPhFAABhnwnByfWs4eK9g45h9Zdh2jfbYrr2ZWKAiZpF6GAPb",
  "key30": "59iAHczxHNr27oPr4jmdYQC2s2HjAEhY7vm2ZpAMHJ84pQ7LUcXzMHTvSrsZYdeWmkur8RCdkih2TjtzWwYjnnyP",
  "key31": "4m6HPJ1XRmc5W6bouLBaDWVTVznczKHCZ2ehyd2XHnpT6rT8NJSLbPPM9JG2Z3ftdn2n5oDfi3EbMKa5Gco78MX7",
  "key32": "2ZDSKeJPz9vX3tHuxqHHqxuoTHjPp82PxmNQfoVTmvvmaL7SPkXjV735VBMNuocJBjSUj2pPzi6hzktK9nrvhS5y",
  "key33": "2JCMRyYj16wZvYXcBYjpoHG8Yd6zyuac46H9MajQXUErbu3ps66QZFPVc5GuR45SBKqoSiKiHpKwhDdQs94xCLCw",
  "key34": "3Q2hJEkMpGU74XJPn7SMNvGHG2ecjTapyyawLb7pDNWQ4bt4M8wBWKbL4oXJoijbJt3KaLutgToqBftWWA7AXEz4",
  "key35": "5p5toXD7jTV934LSuxYkAruswbbmN1uyV6HCeCWQ6z6JdtW4KfXmBWf9SgBjS62HeSc5E6idD1yvocDpTeW47Jrn",
  "key36": "5kNNRJGuS6qQnigvSjmsJ9cyMrbK7afxMfp8yHT1DTrzjcqwriVkx3PxBfyCchcZPFbWE8RbAsYtv9gnwmSZNTRs",
  "key37": "sVnyXkWoYeQj9fgX9x6KabFJCBGkeVTNUWP8QZzpLqByW2caVDQY9uARmCn8SqP2DUq3k8qsRNofwFiVnncSLSA",
  "key38": "638eTF6pJXZouun67rd88aWq3CuRgnWJ6Pkt7S44SYH3rumog9xcyw2b9F7nzxZtyZVGELsV5ZCMBXEexaikBwmp"
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
