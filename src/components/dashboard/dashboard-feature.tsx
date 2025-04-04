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
    "25nQeFd6LegURbH41X8G4aitjajV1ffLL1LE3YFvU9Bx4tJeTFGp9PieyjcummFiULQEru4jtRFECMsYi2wSxPxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5reJpZhLjrD7ouwS9132iAtttCWXMCNAXhzPc3PR7xivy3odD7qLQUSgmBDh3NMhW9g19fnUG6XXCJvkP5sgV2vC",
  "key1": "aLPfEaBEStyeX6spmt4XEe85fch7r7FZ21REAqAiJ1JQQmudJyUN5oxYUVMNDs2UK6DuMm8UhNiBVGbgyUTyn2T",
  "key2": "5bqh9HeFBY9wHEUARm7gj9kkDcBVggvKrAqAJ6RcsHz25aSUx8M9ttECSM3WCAJ43GmdZKvc4XuvbHchkqR4x6qi",
  "key3": "2cQUg2cbTEhDFFRNyAsuHRUkhUDUZgLoyViPD1FPNJ4zSkJk55Ry84KcjztDy437NCmh2obpqqbnmp3d1VFABynF",
  "key4": "QGGC3Rz1je9aHzg5DoJNh6veeGdYAzc3R7J5XHPHCMzAP8HL26iqyaFRU1ge8YzUhYC2RHWgB2djbC6ofYcCADJ",
  "key5": "61hFXqv3VeMWKogfHE3X4jnBR1wf48QePkWMFUJNkP1MdgvBeArUVLM2G4ixroRvLhMEZCR7bNwqCF8obmYuEJkQ",
  "key6": "4wR8empWGBGuEx5RVo3g3KWTVk3UBb5udBg5km92eZyVtGMM7erf87NZhgcop5TNAFqrjhMp2D8Kam3CP9yrmJMw",
  "key7": "5eZPzB1o6XqiCAuCgA9K7LjC83MNVb78D61HetcTmBkS5hMtDUMrFGgiWSeCr8QkLP5kybMk73mahTRJR4FMihnW",
  "key8": "4h7ZQ4qpLMAos8QHYDfMCD8a4jsZHpa2EvGjhvXD1EetbH6DgnNjVqufWxhvsgsRrmheN1CrTrgpGUpZM5eKVCWP",
  "key9": "4RBXyQ28UmHumxBqPpzXoqFHxCXyv35uGXJppUV8SL9hUjx5S4NKv7AQBhuepKxgddAbb7BvdaxWN9MCfKmUkrTR",
  "key10": "NMT73yaAhKgPtHrds21d2imdpZ589RWuMEXtJ3YRZLvYEgcHcQGEhLWNDeoz8BRxNms6xCdkUveh4xDHwfbqEzy",
  "key11": "2h7PeTWaYGRGMBNfmSmmkFLcAN2MUtEyXRCbbtcLjdoe8EwguHiudPffXTPHSgTvCioPnMDrmoLtz9uQPtJSNTzQ",
  "key12": "tkGEyiuDrNwTT7VAX8KScsDAEDEs4XoA7TfaUSLVzdqLMytWQZ4svUhMW3qkH1RYtQuBRA85hHuAtWJ47jRLr3K",
  "key13": "45kVPvtFGK3XdquvYvcaUCNPxkC2TwC82QAdWLjxCUnWrCdYEcGdQ55Nx2Sqeu7miR8WG7eTASY3cBnu8pPGAGZX",
  "key14": "x3GKUy31feEYD5ciAwbaPG4Vby4JbDD1T8cL8q35cSG6ncENGV6ZnU4Dzmee9QGXbpnNaYTdzrdMMYSqhfkhkwv",
  "key15": "3DZHgyzeoXvmCrAABa2vzrSsE4ajGzzxETvojg1U9CErx74zT1G5568JtdsZjJvcky1uVFWvog8x3p2D6JPUxHHT",
  "key16": "5ujq1CeBQCRdw1FAE3Ph1njKVM3kpeu635N3mwNaL9YjcMBaK1PYZ9gxY2NXL21AtQx83C21bPGCmG3yfs3TEK6T",
  "key17": "246nwF8WL1bJqbRCJpKgQWMcS6pxBcuEEHZP4KHUJ2f2RmBYsfgAQwW5zVoxTKdUjPUrz2PsFFpcsbinsqRxAA9c",
  "key18": "4cvifj5aScyaJEzmNB2m5ZuDtzqKwTqKUvwTvm5XoeR312ZAiSidFSai7EeauDduyJgY9J4g4PwD4r9BpiLxngFk",
  "key19": "2jV2LT1AUuHzehjkk9bsubWWC42FidnbEfwLRLraZ7LTttt8SPfc3iE1SkuCu1ecpumBUrCrScEDxB5AHuspqdnn",
  "key20": "ngJtm3AbAe2n6vn8FucvWSm3z36dxedsb9b1HQUwHaZznrsrH7GdR4ZbTDLjGLzjWn3Tm449NXGPc4th3jLRvD1",
  "key21": "3FUVUr7Y1dME1yGt3vrkQNLUoSgAJUWSEguDKRCZ8y5QchhcDi7doAw7C2yQaNrX5uhXTRfniVEFjPArrRMhwqto",
  "key22": "vaqCt1r2yHeEqT14jtoXLhcAAHSTgkS2tbJB4knYbbC1RhnJ8gmvWAyD62mSumWbZA88PAZAr4Ms3V6hXqAyjKA",
  "key23": "24v2VCd1vaDGpiGc9mQ8gzTi2YLu3YpRn8EbdNEVpa4hvsMCNa9fX2ZgtoFcNXmA5hsU2Cbctxhi7ouioC93qJ8a",
  "key24": "UmHrDseuKa3Cu1cBwEZqH6UpyFUGVtd4vzmdFPWDtmfJPAj3Xgbnbw3USpWoRwjEH4CTvGVq7QcjaqJU2Xvu8z5",
  "key25": "5vFXiEbeNye7crAXuDCQGYrJ9e1zpEMXRnqLSUsC51eCH93nyKV1ezYC6jY9c9yyTkwQRRPxYCaRfFG6aoHgoPxx",
  "key26": "2JiNF5meuHRUN74fygE3Apof7889Nq5rhBCthqAvyZQ41MMEs9H7LQCoSqBBUbyJycNqD3WwQwyFjQHxDC79LYCa",
  "key27": "22ezLV4rbmBbuMtAeucU3oe9vmay4cBAekJmR3v3keDtfFnvbBiM5QLwgaxVnLsG59udTc7FFVroWmAUfHV3SyZS",
  "key28": "QkmzQq9PZdeivNRG3UcqjWynv2iaoqgGPNGuWaonfP66ZKJ8ZwAjFjZNdGmj6yTwyGwfzY14oDNHzduRBFKMifn",
  "key29": "5VHMNvkDY1uRj4zPMNokZtuiT6VeLotJ1fjS3iv6XLpRjdzCHjTFj2twfSpx5XyV4txMFuu6RUNhbTCSYJWBmZhS",
  "key30": "4Z8d2LnG78saPx8VJVPLrv6gYAd44TX5cfRwKQU4azN5XJYu62aN5mRAUtkKqE5nEhvsWfBbMmqzdEuacPTgNC8",
  "key31": "jkmaS1kWNTBhmfVtiahT3LDwKu33u8v3nHxQvYSuoeo83WD1aMxzuDFz2pMmqv3vftGwMmpbn9NFxnrLCcEZvMS",
  "key32": "4H8ZMmBrmUCiy4833euCyGvYN27LzZHsGoYaF8FydEbwMGsuQyHDFLvmtimdc6bd2E1xeo8KAPb1Fx5YaP51MXRm",
  "key33": "4cW1SAA33NdBqZLKSpA9WueqEw7TiFKpD6kNFjBjDoaWLJmfcFwaQvSW8DgTHJBThiQ7cgrA4fFYPzxAqhayLbo5",
  "key34": "4AXxMWHR7WDRxPWPLni16trfzWFGrBbnL2ZkugS9Acd1ym5Y7X2pk9Tn3RcFrGkUBVPyK4kBDo4bBoy1cJAc3xZf",
  "key35": "h323Yn5g8z7Q6K71PuRK2dQt5LfRjppmSXDhGTQFMbXrYeK7f1tpRNvqwwPNZpquEtuupBouyWUumpHc2mNxxLs"
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
