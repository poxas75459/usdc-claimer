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
    "4fJYmYR5jb1hedMaHhXErwDTLo3XbPKCvYJGkuGFk2E2CB5mhiH2QcoUw1JeURdKTFEAUsMBj5Fqr4TDC5zqKEsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2FFo1oNyWjDCfjdAG1C24jT9EJhNZxatmiAkDyao2rscfXkecD5dcawNNxEPFXeAqS8pqQ7nCdCTE7Y6o6eaNF",
  "key1": "5GjhiVgHTf6THtAgekHsGep3jedadf4QvWNbAPpBJTn8pg2SBSJ9oPHgApmBbTEMEiUeGGLw2cJxUa8G9YzGMCB4",
  "key2": "y3HBugPsT11K1XPyX7SuQtufx8L2TMafs6rFDSW5mtNRXh51uxCDQ4UeUaxG4W7z16BN1bcZvrJ4uQvammhi1a3",
  "key3": "56n4c7wcbTMqynRR6kShTvAYJacZUStH3ZMVHZzaVijBvpJ6doHaN36vTUFbtxa8uTW9bqLq9qtHVmBELdrCEQTo",
  "key4": "59LPbz1nFnUyezGNB6LqLkAzSPNcDnj3m2VpxjJK1h4pQHkZmFcEQkGHwXzUSVrgQwDTL3Wr5ChoVajMHGaPXAYq",
  "key5": "5Bk3kWwH3NbhC8B1n3Tkmm3BoW3k8ayr32PCBLWShz7qi5hMCPbKxzVZfEx4nZEFREmtCsgUfMXNFTcTJiSQ3PdF",
  "key6": "58BTd5UmfYshZMvgPDNUjEa1efzdKTZdMhmiMZniSUeHmgPfP9sdXhCBbS3V1DpiQmPTcXwBNnLXvFHyZC1cUd1Q",
  "key7": "618yF4Up9a6LG4MNAmeycSeHoGPmprgeLLzVBHC3Qd58QWHMHCtcTGDM5QafNn9xULV4zVsuuUJW16f67cWZ8gdj",
  "key8": "b26YAcoYTPwpoMxapU3jPT7CTsBMrZfdK39h8VPS3eByVfnu2T1kFrSLejh4opR4cDMZyr1UyQGF7BjLGVammJ4",
  "key9": "sif3Vu95Hsrr2TVS3vUdNZPd3du5FZrtGa4rR4HXww7Pr9fWadotiT3MCxQoZ1KsVoLYbWKXrWrVvXQ2T3t4RJV",
  "key10": "Bf6uUb7CApxvNWPhjXA8bCbM23dGrNQyprL8F2q56fAP4tcUvViNjx27HcdeXNA5qdSBQSMykY1UKqqKCWBx9rB",
  "key11": "d5pGDN32VLAzZ9dUJsRgXscXAYYNLs82e4nikhvMvQLicscbSac9WYvTXUMuNjbSTgRBaJynGg3232CbqfPsGZy",
  "key12": "3H4wLEwDt1AZJTKXefEgQgyQkpSRpSGrN8emuRwxnBPxqg2SDvGw367wqWLxFY8mKV9J18QuCiDVWSboB665RwYh",
  "key13": "pqxziea2pPdpPxSWByovELBGbreAWw92VAydhAeERrjwu8VtqQuddqW3L36Go4nz83FdZfmvTNcr3qWRoAJiKW2",
  "key14": "4svtcvYazc3Nm22hD54WQr5EUu7APGa4EXtMxRN3qr9hPtRAywEfzceSCbipRpgRooD7Vxp6Z73c146G56XFVVgU",
  "key15": "g475RjcqATQxonhhCt7nthYnio2G2g7JtN1WsPjoRz83xhqqrbrmd44gtRi5SWEnHxvXM9gz3ykcMLb8n4KFBCX",
  "key16": "5SFzQ4vrMnwxcjZoUTyLtjwXpaqXKWNFotYVTCEjrSJXiw2FxCf95VtxMq921ib3cjFcfxKUVttHgV8bSDM465sk",
  "key17": "29V7NQL6n2st7YixxMbhPbpaTZG58X8UD7f26dHsW7Je7TnNpQ5KmAETfToYFmu8837WGLc2VKmrqVdLMR7ia2Yg",
  "key18": "4zhtgTVhDDtDsKSZEeYRM6oD3i79ebcGhScGayxngN5XN4JF3ozDi5jCQUpjfV1N49TiHAmqz18HRNH2CvnCcYwv",
  "key19": "55rjkJwLcWLPD2sdoUqGGqsyfTJzCZzwzMtYb3witGKc2yqgsqxtHY5EkVeXiTTKGD7WBLwbP23dQpRZStRDpcZk",
  "key20": "3eMevAcrHTEbVa5GEEdatT1knX1mm6kqxyCoNnozkQEThYvpYZ65pbt1vBNAtkd61MNCdN9zHJ2q2YDjrGr7AovT",
  "key21": "J9hteGmCwaPoZ6tCTREWCAMcDD7gwhk9osmX3nT3tsGQpFQNpFQLkP5iHCRz5JEmtExREUn4zefs4tM6TVo2EfM",
  "key22": "5BNNzCLrgdce62czUpZLcsGBgypShQzEpfFtgvMCuxiap5NLMMuYWGLT6GkJDpMjpZzikAoqytich4NoYHHSXQeF",
  "key23": "5rWvwn6ihWDBNFvSUEMsZbr19VapodXU9mfpTAo8mD3imog2f4qbMciHRJa5QARfkshJ4imYKSoLvwv6pY4SoazX",
  "key24": "5aw4YrnFpHyLFizb6g8Tpwr4BK7FPDTKARLXjykdDjJGihTd4rRgTS7Fsum1Sg3Ybfjmb2HFsP6AmFNixGrZCCXG",
  "key25": "4N41fFFf2fXVbK43sY4LPfAvovBZztMd1LRt7DMeqp2QvUHRRkQTHgwHkm3WAcGdRUsuyRnVx5D6JzKMUFR1JSLs",
  "key26": "2D8NXTfQAhCCiKkYot7M9sHH3t4VJTPUjSxUyDPB4xRHnwqE3hYy4abgLmRsaZaqruQv8w3Nvv6k548vXNpsbZRp",
  "key27": "5zKVh4yXewjM1V2UWn9i9BzZ2YXcnzSP3NY4HYgUNg8oteqWg8ftJ39ogxoNjKrePw3vE3MDPoxhzCwNmHtyBTHm",
  "key28": "24L8XMdzFbRBtZaUtPeceBXx5nqRW3ruiJ3kqyzLBF6z5ouaX7u5zPtBfpZEnMc8Rn5jdumY2wB4rr7hAtUULizt",
  "key29": "5d4DEguBNYxUzKQQRU2hGeePhWUZGdbTH5Mv26ErqxjcYtoKNDXHb3kgdWNNxgJ8NyaariwN2S8qkiK895yyYZ6q",
  "key30": "36RBTGRRTC3sKinBKzfGDpjRNNLRgu2saMNJj8Lfsag43FeiEWmjLgaoBGJnNWZebW1dU2JmP5wknDyugTF3z94u"
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
