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
    "65PPgd8RHcpcVWyREEoNyy3P47F9Fm7gtnbdVPZqab1gBGqBLSf4d1p2XodhyBrT5pgAyTaBFbQpkQmV7DdqJkeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8xBriMvg8JD7dmxBt6Jf4q8WRAaT7GGSxe3FRtcszDdWZ8kQtZRVJzP5Aw2U84GHQpphzRFRiuK4sRdzigimwY",
  "key1": "2neoxTb6ic6YheeBPXKohfZjWpMd4ipgHNGz3pA5Fg8icpY4eTncV4puGUincjvCD9kT7w4PeCDYVhcU6fGyHn5G",
  "key2": "2Rp2Rtx1EYNWqqK4aZxPwvT9VUDyHZ9u1qfBzvckifw9uVXkdXWmDmLL6MyfB6t5793J6LwUADCYqfF33DTqiac4",
  "key3": "59a3j2GGbXGqdVwLAz2nKwXTm5njCnRW2XZQc9dWpXBYVeXAqa89yVmdfkvAJwtnLAQMeVYEDzKu5Yoppq3bc5Ma",
  "key4": "ag6i3bq9peWzJmNa8w8MpiN27UiGiS8khEbPq7HqPJfsLS75G1b8zX1jwYWtNes1KeYWTSh1KmGj4wkuptdEFza",
  "key5": "5Q4NzoLdJDvtmzQerSh3RahVtzghmvnsrosgqtXsc4xBB6KyvSkHyRRwByBiN2vs2Kdth8RmT3GQcLeDs3wSyqDN",
  "key6": "3kRdJTMaABf1xvcBTfzWpU3DYXpFyPsD6mb9sUyxU4GNaKkunE1zGu6j77ad9HzsjeX95pF8kVXLf1jtZgGpNHLC",
  "key7": "62YwFVRuQGBSRPd4z11XQkPykWyvnhvPWi9oBr2bjqzmQCBDYU9Rs2rakPiXYV6NXzvUVCYqMPzRHCDv5BfaEqRH",
  "key8": "59eHMNzo983tSUPUSZJgi5Z2XpUP23XKrUTrDVZSZLFYs1K4raNXvKgexUmzddcSSc2NLFoBoW76FMuzEDqmREdc",
  "key9": "43J666TGua23NkhVhfKnQ6aB9qFkfbPfq1E9puaeJytKVVbveLAFo769sMsxeg5PCyQmSQSxsnrohg3sqwmBdmdg",
  "key10": "591gabeLYJLH8cvBuf2PwGoZBjKf86UP6YvRiFS115hY4WUaMTctgpTNjyuCzWs2umhVZv4r9LcgTWjH7HHH3eBj",
  "key11": "GC7FRv6ieaXXCYoWFywZG51cZeGdCzF3LZBaaLFh81B6CpK6sb1AXo8oRxip1dMwiqxAbpK8a67RaxW6KELK496",
  "key12": "2aSTWPWgeY7grKVwDMd4TCQorPkMxTpRBJXmuFhSGUR26QUULSDB68JFiEYkmeA7DgBChMXrzw58PjFMqxjPUBs5",
  "key13": "4rMB2HptpzH63uqJFjPkrRARnvr3xmdctb4KzDDLSWM9aXPB9mmhWZrgxPPPLarASrLUYcrRVGSPpkXp9Efub6qE",
  "key14": "ugDrUFZktFhToRLFsaar9FtzwkKTNTXkCEhi5a8BBeD5WvStFcJRHcGYAwWvcYS5Nn68wgB4sgEjjCtfBMriph3",
  "key15": "5MUwRZLmTBEha35YYw1v8bsSjtsC5yCofRGQB9ahSQzGnB6znXJWFDzAjGuHGBbwXqF5eiSvsSTBjuwdmvz7MGDq",
  "key16": "4oaZn34kz5CiQNxrcGVtpFk7pm5HYAvCFoDTcYxya74UE9UHAh1kPMopz6v62mb3Kq7PmAtuU1NJ75zbWWnf7doC",
  "key17": "67RJyLbQ8NVUWExAFVDxrcGn8bbHX2W1LHYGttbmh325LYhCZ1T7ZSXRsqhVNJS26bGGdK1LX1PrcSf9NgkfGrFF",
  "key18": "3MJ5Dof4EH185Tue2EgFvQ3fm6Pxe13TMRnfpBhCt9co62TYjvZiAvcSXJV1ThdMt11u3MEQrL115WVmz9yJyJP7",
  "key19": "5VytZZCg8qLa8f316kPNdBFaJVxQqk1zR1xg9T7CQ9pFc4dSqQRy3dEuuwQRAcUD1L3cDVvsRyD32SkpABVxMcWu",
  "key20": "5WkPWDB4AQMzyeYLSynqADm4sU8a3yMvEAziG9TnrkhHzfG17iKPcR3TcMPAuEc7sBsw6PR9AZ4toNntkuAVd923",
  "key21": "36Tf3Tr3UR4Q4mTmEjHLzoMMod2XV75MTzRqq5tg2ZXnR1LSGfXA6M6JPgYTbSBC8i3GMpAn4r49ZTcHkCB1x84B",
  "key22": "3uj6XwGxLqwFZnE1QA3oGLFw2KX4oVgqFfEQ5MFQNKzZKkHa1vvB6cNtfhUQTpaGZt7GXCkX59yhw2Pe14CY2sVU",
  "key23": "kTWCp5meKSfhjGnaknAndtC9jFusGiSWizezPmZhq2rry1DLhRaKKGhd6vc1VXk4Le5eH8hW1ys5zZnvzgP4QzB",
  "key24": "4S7dugjtmV69xm1QiiFh63y5VenXrsUM9iVRxbZPGT6XohqjG5stZ2C2KAvmo9eWmGFJrRgG7mbQvyCfxgASKb1L",
  "key25": "4KJP4hwRFDqy2Qt5EnMCvX7iYievacdWvQDasSdsCaSY8qr91xbn98X7QzVsLeutjnzSQ2mUtcmDuLsm85KJC1kY",
  "key26": "4DwqzF8CoT8SQiPmeNKUDzPhzNodciPF2JZVBpoYghisrSfengYvtbrGR62DMvXgjmtsS9SJgTYWMYoPpCtxKKNu"
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
