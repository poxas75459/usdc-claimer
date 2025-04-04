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
    "5VEdLv2shbtrV36qEqS4i8gWPjtniDpRK3uinATGfbLtqRPmwiZ6xaBgUsR7zHQzRp4mSHMZDK6AaDPYxuWbNP4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZuDptRitKb7xzLpHAiyoa8nYWdQXE8Mfjnb2gij5kHTQX4XQdrGuAu7XqLRLrGBC8ixBJHmtMEk2X9NsRXTkcQp",
  "key1": "5ATmHs1bsDnx65LUuhiqnR6gtsPxHGoDnHHuwGeXx37eQBSX4fqzYAW7Mwq88gBB2M25cpXuXxmr1rrcCnfj3pCm",
  "key2": "3oErdByPPVSBHG7WgXsZBLmBvjcFa4G8GHNGiycTZB4H4Q6oMxCcieBun6R9DyK6JwMtTJh8K1PxFeaGJVuSCYfs",
  "key3": "M7h87DKVQnkF5sz77vL1XKUTZprjvSxqd4v3dHaTLzPj1pQoFD1hM5FAnZaHsCoy3uqLBu3rnZpnC5X6ME8sGGa",
  "key4": "5eXFWHnHzywq7xRRxgFwrLPDhd8yQi4eVam7vNEZ7LDjwrEit6NKkLUNzWRgtpkuLzk361PxGBh49L6vmFQnWfJM",
  "key5": "5b5y2XsUMMNHjQk1pZJ7KWS21sZQXWXNPaLxDqFKYrUrGYABiw8kFjhXR4JJSRsE4aHKzzjoCRnWox7SvZCdZU7a",
  "key6": "5Q4GRQamw6kYW3N78xmWGartqakpPh5LpKbPErPmULtiTKv32C2rTBgJeszmkDY46T5v74PP41tjJL5RN7QJy4bn",
  "key7": "iHY6E3uFPdWTvBxq15VrWbdE8CCVKHwZ7xgPmR5sY1p5N3mcsZwdKTkTPK7byX2G3eKrdSByCoo1F6DtChwFtJj",
  "key8": "2CeqWnbpqKKMPDyjQA2iGUXdiqY1AbQP4raxbeZJDGeRCgvdQAWravcDbbJ8Q4ARnvxayd5Dfoe5uT1eQbCMiS6e",
  "key9": "5aEFyWotjyrdc2z91axoKMkpd9W45KU1DLisLJZBUvJXQJoPatW51Dxw1PPYsJdXimmhUzakXtHHQAPPF1Kx8bdg",
  "key10": "qRfj4BURqRDqaAuuMXcm2jPFi2rpGu5xd1r2NN3nVLm2BJEsYLRTNKYQytxBh6DorWMkqTc7AVYcPAtRzrrYMoq",
  "key11": "ssHojGYTDiGrA4AuUrQvvU2viM7QD2vn4WcU5TpenUeAk9UV5vLv3cDJ22w71Yg9Tqgs6CW1E5n99igxPYYr5oE",
  "key12": "64KZCQBqQuJ3tQq2oLajND6sEfdzZNhXeHiVc3eAWgfuabS6bAwHokZAewNfyR3kmqoYoM7A19WnjsLyXTRQdT21",
  "key13": "3KoV3qw1YwtX6ccyE8VK5i9xrf6DtM1xuXyP3USmMvxdFacnKkxKPqthsczraEefwGB7FuLHaMVtvD8zB234cmz3",
  "key14": "3LQmcAqzL3arJ4vCdANLWKEiQUpnbZAe447dFkJFoqpPdDLnzb33WVR4kdRJuQifAMyQawVySYhTPA6P9vMD2YRo",
  "key15": "3HijPNvs9csVAbtNzBRZtaGH5nV72dfwSfEPV3Pvk6AK3Q6C76AhpRe12botDCxmHCxYSUu7hEg933AvwneqbVuf",
  "key16": "24U61Lw9xgeWUcstuptgHPrUAaiekpXTn9m5HUGyFvnkZUC17hEVg4xW6Cv5h1guMYZrABL9nKZVBzwZpdcY2PJc",
  "key17": "54WqmRq1UdPDV4dQZHh9e4C7CMueKBd3toGXUfjtPW9MGg1zkKc1tLVuLvgGF5or2GBS5bEZ2qdpJJiBWTTEaiRm",
  "key18": "3boRU4gdTYrCeBtobm6UBVc3WxWPKS4JHZtyYXLxdobeTDwnvAv4jM7fUfHqD5NdFHC238LtA8KnN8Acgt5bMCmE",
  "key19": "5c9ZMyfVCTPFJdMjTnnKDsApEQvokcxzX9Js14dkm1ZPhwWZQgcH97St9MyKuNFqxyQVgcxuWp3rxbPZ9YKTx8o1",
  "key20": "56hR5u4e5FU116fGCWrrzcnvWWaVkZDJgc7vfPWCD4evGGWMVEg8jvJrHLrjQfzV8oPLYbkwhEBds745FAKDap16",
  "key21": "4hACTkMCkuQCAT4KitA8v9oJ3AS9chtbymvBzFhQ6YWKMZG6j6tcqERVca46PTPYuN8cWpCxav6munHYAtGy5DKJ",
  "key22": "4U45qxYaA8nSr9BKHcyX9M6Ggm6D9VwwvS2DMHpyErhE4FYFqdbFGGEQS7UDC2D7ieTx9vbnZRxF3kweThryr5Dq",
  "key23": "2RvREDpWf6Bc5rbkG7rwdNA7ubQSo8wCnYAfPLtJExWbyvTNrnQF67PWmFCm8zUNa8js4tyK6GnaE1Yuk5kZZ578",
  "key24": "5yRmmFi59mtnJFyN1WdetPtKjv17XWrhxHDRqJZ61bcHdBYBS8qhmsba19qnAdhx2ohsVgaRgjfBdCzSedxAkAfe",
  "key25": "4pUGpZh64gwQs7MpsbUhFnjjuDySQsGLNAK4ZCN9hTHrzwmqubdwHeKcEmRvMK5M5A4TZFR1RxSDRmNJUGwEmLY9",
  "key26": "3Q36Ea357Xu4sm3FKWzxv6daMkd8gptQ1geabb7kFpuK3kR3g3Cj73c3FbuBV7dhYZVXXVkfrATnw2r24dP4LC8p"
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
