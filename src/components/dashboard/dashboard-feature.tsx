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
    "4SUxB8126LShbtPVqi21NSAkM9VqauQGoEyPwxnZUWkGSPqeWVV1QDWio9QWJ54hLEnXU8QieYUdbCwAjHuWy67W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKN2WsofApsERWeHkw6jdeThADf9gj1yAjzpZLtzU4UFTNTWVdgHwapKbGBUAvnJMfCLn4uyw4gTGWiCPeLMVyM",
  "key1": "58ipsQ5MFT8AgaGseFBEGgLscqkJzy5kFFJBqh85GzjhBknECHBU2dYByED2NVgcgqCgK5e4KmZqvFQTdZQLWycD",
  "key2": "218mjV14gwDPTX7pdz4CSDci1G7zgSeBJPMgue5BKCoP6RAiQ2qdpk5LDKZY5TbNpoaqNuSFxBtXdTA9pQ72br5K",
  "key3": "5JL1Z3HSBFFc5P6aQTcrkE5VebCKGAGcfsqQNGVadoudJcytAYYK8w7uas8RofmBjYrCucwMachR3BERkrGMiaBE",
  "key4": "2boDut7oHEfcpRqeTHtxKjTmH7QqyVcjH3XsEQYr61NCVqoejFKnYkBQgmmYS3jRpqniQ5c5uRkAq2A3evAhHctu",
  "key5": "3R5ZRYigjh8GwmcpRmMPfoJ8MqS2byLW6ApGjuZSHYyv1mach9P6CEn7G56x4JcLWMwiUuTuMHfdSZJDQwp3ELeG",
  "key6": "3B8zyQVtX3oK66f16pCXuDxVvQhZhQWF26ySq8q7nukxxvyxG245jxv8BFQ3tcmxEaCPKeV6hYETCapfEAijUMcr",
  "key7": "2V2BWXmzuUKCWrGRLo5kETFreLuFDawkqZUrRN5DBcUJvRz8jSSKQKnb2Qvn9X2VvH34KeVoN5KHGtH9imGz15ai",
  "key8": "24iJYKzYfFVuBNCM7PbqPiVirdJKC7wXA56tkNcLZdVNkUCit9BYfA5qjjYb4Urm58LAroJWy2SkfGJz75KA2VRe",
  "key9": "xYGhJfQbyjyxRnfYijejWrnBcX3xDH1LLkKAPk6SiyxwoJzQmwGG6RhPtGE6EKkdjdFTbhdNDcj156uYyrxthDa",
  "key10": "5DstGgKaL17P3TjbdZqwPN4zxLEPmGo3PUK1JNsD7HtXWbbWr58cr3mzXZ8jwjd4PtBLMPzRJApq5kx9qiTAZsqp",
  "key11": "3rtWpqz26vcsNi3hHpDcup6Q44FMrbptbbPLBKgnF4Lmedw3rG66nEsf51rkmcNzmrWy38dkUi2om6KiUa7SaTjv",
  "key12": "4mPtBRgUrMtFHgxUWAHQ3Er1FjPhJgenZfPwBbRMGsURchnRyUXav5vE3v3piy6JnYELN9DBBbXNuDD4cXtoPaqD",
  "key13": "32BxRSkpacKTBohs8YAMUUpawdQuQtA9jPE4W1PVnynZ5P5rgtu6A8T3G73TxrVG8orSuS5R81bYDbK9bZ24YkSx",
  "key14": "5yHmfZ7SRGMTe2PQ9R6JA8a6yTmg4NR2c8MaXsJu98Uw4L6PTcWm63c9o5vCMsyKPqxKVXg9qt87ezAeTmDqrjhk",
  "key15": "5M1xH8u7sNm5UWEdfg3Bkpt5iV52bRfGuxgKTC6v76uoZj81R1UcLTqS1W69K4botW6PTdcgX7Mq2ymMVBE7cPyH",
  "key16": "4P8Xk6xienvMjr6mPa2BejqWXnsn7U3StGXkvQvpYkzVD4iRwyerXGFufmiFJgXozzYW4kJ2uWsunPbofF6dNRVz",
  "key17": "53T5xWHAvhk7vBgepTLyb1ChzNAE1uyWFHxCM8jUWr6Zzvd69jmNnaFxBBLod8WoKr3zovfanxKFhnmvZMWtPDWB",
  "key18": "44iqbyaW3WsVM227mTki9yUeqAaA1s8p7yyAP3ATN42sjZvgTcYw42eoke19dXsNxNWv4Ppq5SCbfcJ2Hahsiqcn",
  "key19": "2ynPBAJZn9ctGHoFcUFEG2wWgKcwiQ8uH7Nn4QP7CK9ChixQjnCCzJE13Ux5HKcgXf74U8qp6aviRxAYwKWEXbEm",
  "key20": "3a9xenzF91vwM9MGZPFTiCSrNxtgyWCFcskHAtCs6KJNDYJtXHHDg47a1zRqmXCU72Yagu3eyrH5M8TPB4uNcncB",
  "key21": "SkyLycCgJZN9teZrNEG9K5958vck8g9eZicVCBp8b4tTNjTBVaHVmhjgmw1T7Ab1fCMH1QYQdDkDUf2cfUGQxrs",
  "key22": "4nk8cTFXHPWk1A6MHouJ4rn8g15mR3J4vvLiLPNyPzdbHKrrAeNZUpSWnFKDim83FYwKQ35YeirazS6zNckxZuZn",
  "key23": "4UJD47wcjisxCwG9uLAgeofrtsarkvBk5D6pMBUMcAxqdsRm4eUXeFM4bKXUdi3j9B1p1UR7zLVRrgoyh28g6GBh",
  "key24": "42WqS7DBrFLcqZKi3eEkwijLkkhnLGquJX5XmZWHSw1tJKNfYZeVv2rFb6jpZDqZaYZbimsT5iN6PSkaAYuy3joM",
  "key25": "5sJGuhTbQwEPxEQLyBhYNRmzeNVt1cwkWcVmh3JjxGmVbhkTM24x8HYCDYgeKkMKSgCCqLca3GKNf2yJxpp9juFL",
  "key26": "39mXrd7fcVPmvdCqWuAVyg3gmsNoCdh2eTC6rUJUCcsqVGwLuPi52s2Mi2TLSerFGuQ7TV1oeXyHP3x1UQUzpKQq"
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
