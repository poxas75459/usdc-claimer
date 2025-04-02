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
    "3KoYxcASJT9KEAN9MWpRRp3d8wKdy5e9QpGNFjwLy36CyEduPXLYw9zbSU9TMpXUQemuY8NLzxVCEqeLJiJc7qWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "351WzD3L1Tmvgsy9DebteNzjJyw14L9UjpAcd7cbzTE8NXitG3NE6q8pR2oznzNXF9VnN9sPt4qkNCDMwurLYvb7",
  "key1": "5GStgmz2C1ArCpk8pr4Vc18L6YpHZFg2BSrXTETDAfSZfQX2Sg3emQAUnh12YRCk7nvA7baSrer7mFa3NVBqEm7D",
  "key2": "5LJBCEnco1j8W7YDmbuVkGprPun2YCFg1vBYbMQfG5morUE8qN1yhAVtsMAicWDnKce1ug4oD163zpnKYuaUBFag",
  "key3": "42EmdBJWNKTJLJTd7KJkgM8hEaKJDV8hjjZq54pedaBX8NG61vTyLLqSXARv3TR6xjt5BetNUwmVyb3BMa2kvthP",
  "key4": "3SggVmHJkupsHZCXJKqsfqzrAUbnRTX7Bnsyq7Z6DWgk75q8cnmQuurhVcx29uRoK9DSjhJ5XiXG36FXnQbg9hfh",
  "key5": "AQ3HRjaPow9oRfFhUtb8Y5FMMQKeEeGLHisb4iBoFXbzxgmrhC9rGJR9oLFukAbvHjCEJqCLtQ7dDyPXHsBSVrA",
  "key6": "VWVoWHc8WbUuTbwMKbU9g2zShsH4EMBuoXZ1zcQnNLy2NByrMVh4tfDXjfRevCF4Y6DNCrv373C9XhyaoWEbYqt",
  "key7": "5wEBmsuW5mAUn9X3eNM9MYQcUVuevbewEsvjTceGkM62YyXKJX41cR5rhrLiSQJhEu84yvBaoZ74qCQMKjG5nhc8",
  "key8": "2fckJsy6cHK7498dZ5UaPtKkWHiGKpEbb3b7i7LHnfyNkoJXVJLJUanhiKab4S7R8TUChnj3f2YcKbjGFv9EgRzu",
  "key9": "Cckxf9PMJ6f6hKcCFGu7wsdttAMMSmLfYmp9pdNwvSqpnXw7L1gBgbCv35TGwuUKCrS8Nw895wnFQEv3EikSVGN",
  "key10": "2LT5kdvKsGQQEhRLUsJrEU798vWCVZgAJnVq3qnxYFwccT1xSAZXRxncbWuPxGFirvDSUCoDVvhYvm9NrQv6gAvT",
  "key11": "4mkfH4havf8Z15NZNHyWdejhR75e34E7EJNAC6bmeVvG6eKyYShmYzT9aJaEHUc41vjdkWfuyxGqGLCRHYL3ckV7",
  "key12": "4LndpQpbHMgW1YRQL62yt7X5nvGLmLqp7wnBAWssdyt8kXViDKfX5jX1qBULu5jBYnaHvypn3RPdU2ykNU27M4gK",
  "key13": "5NihJyDjYvQr9iW1MjUKpxsXgya9PBciZBWgeveB8aeREHX1kCxTnnuXjq6txQXwZbHQDZY3nHMmcyTx6Z5zn71X",
  "key14": "42MmCQtEvFAujxNkPPpELkybjLhbP2CzapYhL9p2eTNoUtQReiPWJTpjQjWkgsNACMz1HrbcZPcEPhi1zsLDZ7rt",
  "key15": "5WYdF3CuodcbMgW2oou83MHTdz55bN3JjNPnN34uEJV62eCfJ6VHskvgPEVRxr8G9L6Mv9opbQYn6z4mepb8A3ZT",
  "key16": "21nugsmm1DoN6nHh4whXMPYGJDNF5qLmBH8fKsdQe4f8JwyFJGUcm1sxDXayw1qQfacJhJ6ig5LJifW76XoFkmty",
  "key17": "vyiWjUMhGoJXVuAyiAkznzETW52phBhp1bSBkPaneZMHxBb5ho8nEFpuQ3p9YdNrFLNoFuAyFCzEQdzwKG2NEdE",
  "key18": "3FtBTNsCs34AQm4EuAanfRwLjzMVJkMQYPPxbmvs6TNWK1Nw3WNZp8RCV6Afonx1GrCk7mYvTgzSqRjMmdwmevKP",
  "key19": "5AbjTh4xU8LXM1tQK1bD2rPqKemwmRVx67pWQkBy64dTYrxt5rMDzJVGuwsR7NWhZoJpgks3WQj8N3xq5xm2ENST",
  "key20": "4HpnsKP1dysHrCKLZUpE8GTLFvS4bMwZvdptxZ45YRku79XWFLLPnc71JYMv5EzeHMKLj8wgCGsikGTs3QcRYgo4",
  "key21": "Cnc4GMruRSxQNmvZa3kMyAKZsdz54teZLgFL6LL36XTUF9owEBFUDBXWPnbFCj8BejyYz4dvDyqkym5EKG7qkBd",
  "key22": "4wLra257FWQTwegi9oYioXzdCrk6W2w1CUYj4C7zHSRiM5AFwdjdeiU9x7eVs9xZgwDUoNLS5gmcSTQ2zahCCivN",
  "key23": "2YTUaDLz1XoYTrFqEeazRNVAfb6YGvgQPBPePDMM7NsoY16AHeBmHguVDYNCmsCkiR95ApN1XNrqd327VvAbxJK5",
  "key24": "3AwXm14Ce1922FZVRAB93K2KHV4rdTocvu4ofpz4w5mAeRCefzMfmDxuCce8pShp1v7M3PESxb3NjK1AhuCEJRyV",
  "key25": "63vuUX9GwsCeQrgzAChb2JufpkHuZh3AVEw6av7AnD5UUYzGxZbF6vHVtAxQqhkoi9Rv3ZmzSUvYexp8mBurE1Ab",
  "key26": "5gBW8gWRQzDUbiEaMXemMwdz91yb69i98pZBi3qCSzVPBrzXiWPWuMbNrV72oCRWHpHvQj3zgMUrtyduUACPyn7w",
  "key27": "2pFzLwsVzrY7VR8fpKC41Cz2JPxNJAhfVhMiwmnSpsG9STZCZU5or6FbcyUi17zhyYaRkCX8JzXHKJYA81ecwic7",
  "key28": "HTuTzytujLJXJHk2aeLpbT2civAsvJAvmoWVLjNftdpWhqfHjy8cx382yn5sy4YrfSEqVHQW5L6fYpvfm5Uz2Uu",
  "key29": "2jFTr4iEhc72KFu83BcYxENTnoE13F3EQPrKc6XZw8hLgtiokAdjtqputqDd4uUmmXdSrpnCGBSLE4SHZALXn7J1",
  "key30": "4YpuRRVYYoevsL3D57wU8FQvzhJCZFk8doWiZXH26FUAHrREhaRaTCaqym9MStTRkAYeUZxpTXAABH8AisQemgqw"
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
