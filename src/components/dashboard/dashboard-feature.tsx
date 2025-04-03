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
    "fEqgEo2iP5nBavjF5PZNvRahwo6RJA6Cyzzo2TiqTgBVab8rydsSai64vRvN3fTdJPzgjAWbDPpgoRsZFqFWMdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTrTKVxeLWWVFzKx4zsaSNn3mSJkuDDgb59tSMHw4RwHEHfRtXV9bnMmXhpKtcUp2Gfz3sKFi58sQTHiRtVEjTX",
  "key1": "jBedfMtsbZzhHiVoN6wdwjQuMFYfB3xuPXc7kmuqjyEKtVY5e6rnXwQ7G1jZTmZAfcQy5yVcm9JWQBZZUGE64Ss",
  "key2": "4fTPEX5YZun5MYQzvUJt1AESyNXVbG3VBMAbdXtJ1NHyuce1zvquTHhBdzbJQwFGDqFQkoEJLotFWn1qnc17Seq7",
  "key3": "64xZ1V7poBJPPrSw2QUFNHFTdyhH4Z4YXbrpro1JkRr3VWET3gTYeUQv35dnSApsuQwQRJHgffeBQa62i3eBit8u",
  "key4": "3YK2UYavNcuiLyjJbK6iVwnFvVTDV7YdGEFTd29PRiYTmu5Xeyx4oGhoRK9wrNmQg5DbDGRowAZfvaVPc9EVozK",
  "key5": "2N5XDaz63bP9dAn2gvWk7dFn3bCVcx9LpY2YcnMe3qCp5Z5D1UAcFhmBGsWiDjBeDkeALahhW2bKqbhaJErVm3R5",
  "key6": "296QjAuzJvbzVg8UA4uggSQt7xY3HDgWXVqgQjFj8TP4cdNsq9oWqzMR4U1CDrNGqw4ygGkqYhp2wjVVgPUym2mk",
  "key7": "3UUiqaYbny45dQqXVGg5x9mRXvhDVWgxxsSB2M8QB5myo8W95EVRBfTk1xRGtCCW7cHSGNtGgWdUzpBJDEhswS9k",
  "key8": "cYhJVo1Aq6fG6G4zfyZZsgY5WdiWH4VwkzGAXPLeknbStEtZtsrUiizVxU7UHK3grKPpatrcBJCAQ5CBqDxzyty",
  "key9": "2G8AeJHEyCfuSyAK6SNjxLV2fDd6S4pwvbHuX3iHXoBsWMpeZ9rypkGunRYwdf8YATDAWAAVqZ5rp9784cn5vjgZ",
  "key10": "3eNGbsfR2pySNRc2f4cQLDt7LBE9fghJzfQZMSz74oXmhQCcCcJ7T2Xmwhiu6vLAxatFgJrbUfdXGbRMzQxyiLyT",
  "key11": "61fZNGmteFQr84zMqLgtGMriymjmLjGpr1iJbLSoN1RqQzseD2AF9zuxdHP3KKiSGLEQiCsMWiieW3MUAcPEkMoi",
  "key12": "2cR9mPnvrHmYPwuofXqea9CrkyQLBskSTgwkNrKwgLsNvRv43FNhpZbEQsKmkry9gXdCro4eLtT5tTmTd6nh4MaZ",
  "key13": "9ngezGHqUZ22ghR7bX54taj8EDLyRdWWCYmoaYzmNqANStDqC2oz4tKds4u3z5sudy3fNAqRpfMBrGmDSouFreh",
  "key14": "1D2pNLc6ExuVgfugHFSnF7sKfLKYF1Ps68Fe7AiiXwUWiR3QcWJY8tNXVKTyYEUsGkdmPS5ZKnBBiqodo2HP3Eh",
  "key15": "4BbBmQ5wo8tWJLdza1ALLx7nA9BeJj1ExCRQeSrWiA9s4XiEZM7DogisJFUmSdesbr8nUiRrHRpE54HwzkrEP4sn",
  "key16": "2cQenZqk8EEnQPwhNfje4KKUKVFv5zBdywRg93QJeX2eiNy7E93TDZGzgmN41xPDRTpQh8RA3APPFYpMpK4EhuEQ",
  "key17": "Q9cq8rgy6qneMYKDXkpbSeNkEwBmubUSatVK2jd5W48oHANFwnzX2st3hwTnww4kW1XuPxmyjqUVAkPsZu5Z3Yu",
  "key18": "3SyX3gXCdfHDqYm18xTwVZtNPzMBetaSErNaCpSu5UtiQXJLSStoNWAmuCo5zHs6ZUFrMKS1CX3FQC6QwkByNJ1r",
  "key19": "WFpndpBNcZjAmQtzMeWwX3qjQyMfJNhYdmMZVyYdqFzX5DjucvgMu6YdpAPbmxkgXgr5DWLtgdmwkZQ4jjvBCdG",
  "key20": "5SW2uvRq9cc4BpVChoJJAw81f2jNr8rPKaPj45y8qFa9iHMPY5tybzTT4c3JpmXH1PVmHBCGCcMX6cRtoXgCmRz2",
  "key21": "3RaReB3HZtjXP5yRLYqw9zejw5PDjaumY4PCvgv38EnUZywuCxdyCwmryEDWBjxfDGCJerppn2YsBE8vMmNWWmXL",
  "key22": "3pMMKo8g7kqVDTziMgAnMZCfUj7cPyefMAx9LPcaVpzXQxaHhwxFLB4KTg1fihNruAQJ6vxVXL2kevHu6Us5hTr2",
  "key23": "634Xnk3t1jeRRPzebrW3gZNtvMCYQ4TdTmMEHYNXShgsft7yo9z5o52HefjuvnJq7YNHiY8CLF9MQhvT1WuYHaQ1",
  "key24": "4SGR3McpkuQ2feJfu7xpcshv1xLksRkCKbE4g4aA4HEpSeqBWGVxjs5EKsUVuafJCkvXgZfSZXoRQYma15v9rBze",
  "key25": "2qA7JJ21ERv85LVxmKX57citA1vUYK1C849ZhFXzACoD3XG2pbpFHbtD8jfgyteYMVnwAhAu7uwUkuTM45nG5EL1",
  "key26": "5o2UheMzHt5ZEaDLM1Q83Erd37cFFpNv4z3s3f1kywAVffixz2ePcc2wfvrg9hh2ANQNTrzqfuL5zP2FZ4ToqHL5"
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
