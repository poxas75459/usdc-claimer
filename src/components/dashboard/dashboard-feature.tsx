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
    "5WfVgMnqMUVANvTDzZFGrS3fztktFQ3E1BS4BL7pA9V3G1YvLX7rn1c7NeceE8ahEZFtaXwx2gW6P7vazMTwep9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ur3U7dz9b3sqHBPoZijfiTADP1RZZD7dEuqqxt8Mme8k1XjxAr3WYBL91d52tEKk72FDKj3pi7zWyeBRFsQqZFW",
  "key1": "4Siisg9TFDgarUTeuRddHMURACd74JkvoceWj6WjsNfgbxjraskbanTurs28JZh7P5qnE1R8pgRZc6MnH3YUQNZ2",
  "key2": "4Q9vFAu5K4nrjeHXKaCcDG37exHxARHKCueuZdKNPG3hH6RDyh5BWmiLwQxhNVA8kLa6oqyt4WDoi9ainntz3QEo",
  "key3": "2kTfBRoibAVYccFKhpcLZZkxuKYNYFPtzEjoJuaVPdSWss4xahc6YnWcVXGVJhgks4hwXvs1Sx8PUWFuPf3mosGX",
  "key4": "5RoTD7mLcvcFFmYB9gchYyyHUsn8b6h2YU2fXeqMeF5ZDbs7QdNV6sunDaGBop1dbk4BU1kWa4CJztaSXcCNzXB5",
  "key5": "5SqJ8c4HfB8oKtuXcWMJZ1UTSHoDBFc5CzU4HZ5xLLSTkGFY8tqzK3Cnn226BcJJGw2dAXLzeMKpkPQugVuL4Aeb",
  "key6": "24rmmbH7v2s8oynTEV8d4rVC79pk9CujjrFiFA8H1wpFiaB9F4xy2mdwJxZG8m5ugggZf7TKE8bhCvms5uTZdo5o",
  "key7": "3hNWWCiWAzodfzkDrwv65PZjxHTnyZsMuogR5Cad9t3knPLGxHLyaYuK1NRd2UXjeqcCaBUDBj9CbJVduQ9TmRKF",
  "key8": "2Ctg8fBXVQsivpT6HDyh9G3b3NSRQ2yTMx6m6oG4tGYPZPW74pyA3SSrJpdewCWFdQSUCUHpuFnPCS9u76ui6McX",
  "key9": "2LcpCEGxaPogtKbdhhPZY4ko3BNpq5d2c8cbaE84qdxCicDLqf7Jfe4i1ww5vagFyw5skCFt1eRvpWxjUYZgKs4S",
  "key10": "4kqTfVw1UAw2nsR8UcbEGnj2sFjRzrjqMRkqkbajQCMbE4kKRwqKJkVnUUC3o92eUTaDC5Cfhr1EQ9Bq8NKXCfzW",
  "key11": "2MojtjvJH5UTK4G8ev9JXmMSc1MKyrVBFCsuBMhi9EXRwcRDtjKkj7Q3MTPZmsH1BKriFtKNoR6BByTap3HfacpF",
  "key12": "5LEzUKWbqqMzDddW6D1PFzohLVrpAeBpzuxdMQFJ1JGR9m1Tb14gugVJCzhSwDHnm61opswQ6bPNw2S9v8Zeh1FG",
  "key13": "5MZoLaZiiBFfii57rXFRXZMg31oSF5LrfFZsUayfLyk6CnEjaenpxbM2bnXUovHnsu8aJNrYR8HHMn7kowYGNcr9",
  "key14": "2Yzi8zJyZvHGkWES1ANv8ya8DWeRoqkCsKwPYrRCTx8m1gCKLAYiD4G7NSg4PA2DXsBZdYf5jkEX9zr9JFd9fttu",
  "key15": "5gFaExgzzNmuTBBer9pkTBcWGhrqiedLCG3KW1j48H52eN18Df1b2sJoaZMqwoyAaXN1iAP9zpLttJXuHh7Ro8PN",
  "key16": "2TosznYUgyNXtYLkPfuKi4i3L1vSVjyjLAtaY3WF2KcUBSsEi87cDzjwBYGHqTXq7h3n6fURjdYpbZHigKa3zN1M",
  "key17": "5oJgPjwJeBrsjX6jatSgbsSQXC9dhUSVgwHydpwsZhhBoKzsWVczYt2oZFUHkKfF2HqjcS1Xu5i3itHNWoVqqSn4",
  "key18": "3zUJb2n78r5eh8MftURsuPhZw3ShfGWq9L5UzHTpTP8xioMaLFcN9u1gAK4DQtLCNhCQkdG5LVYk8A7rd5XaJQFQ",
  "key19": "5iPWmBJXWon4axq1J1RKUSUzytpVUWgd6JTFTSWQ3XLkwtBLALTCv68Qdzu7UCi8RcvcREhM2xWSYD3AS1VA2Cdy",
  "key20": "2WLpBwrvZjfByJay6f8xywtmLzkFCdFuFyPsLwjThQN5KycaphsnLVR43yb36gUC2upqisq2Mo5vxmBhU4JK3UA9",
  "key21": "341xtEFLTuwvekizkhm7ZcXg6sc9dBE3SvkiJBi4G4mddaaso8JrmmK9xxgaxEZei5oKwt44S5E784HxCzyL4fDZ",
  "key22": "4dzJGocmyxN83E52FwFSsrKbBdRgxuAB5D1miU8N1kLp5RDB5rPoCSP74sEfoXffYmb53Uomnr5D55B2BaSP1Wge",
  "key23": "6q9xEXpAFbHnL21kjiMa3Ef9ZJ83bCXUbG6qLscgUsSvhLpFrdSnAc5xkXHVvpgxRXaqgXWLCuBFLtjQJmfTDk7",
  "key24": "2DBwUaE3wm7rhga6pgPnJJ8XYpjSArcsogw1VEt3V9gnYnZTR4MPEQEbr2W6o5sXrgfBXmz4VT8W5XnwQZChpPCR",
  "key25": "gEKLheo9drKtqzMh92HyjjgUqYGVYo3LCriHMbtKq99V6JyU6bTjRiPw8jjx5XULpaD8NJxCQVpxjf9LjK46396",
  "key26": "5VV7PKeibEUCodY1Rfe1oCwQ16KPJb7a7RNrAeJQrpwxrd2mjXuNmMuSnaWzo6rwRPirNaqHxNgAr2xjkUUD9CQV",
  "key27": "4TiFernmpDf92pHD38KnqnAMWMAyyaDyBT2HzAwFY9iJ2V5DMVu4Aqie7Frr2vBjnHzifYeTkyETdf9HvGpVw5bX",
  "key28": "4yrV9qYxGgLta6YTpAzT3SaqjxDSfPpv1uGoTgZkjsFLuXKEnUU1QTysnbt79MDBnQFzgqWdrJpE6BYwy8RoP8xm",
  "key29": "2qqWwREajw7sMAccoGvmqMseDoHRUnx6kLbt4FtLdST92WZb73Brzab2suPYdVYAxdyGxYkneJuqkigw368c1Btt"
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
