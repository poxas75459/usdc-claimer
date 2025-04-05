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
    "21aXWQ31A2WyhsbbeFuGepCRWRSFK7m8Rzfc3VZUx6w6hixohiY46QhW45r7i6kVEz5GoevKKp2diraqaeA6rdLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unLpSXGgarYdP7BzW7jTXv8P7ht9TAJn8arYbRm9sMHjE4qPm8XAYzDVur2Fi2z1DEHUZNskB12eWJV6niE1i2N",
  "key1": "5CRVDbxxDGNuuCdpw2N641cp7JvZ9NYb8Fay5s99fsgYf9mm299R4owazTw5PD3duynfjeTtUWFZaCpZUU9TEYfX",
  "key2": "4JPxpeHBwWcd2pokUmVF5SR3tMC3DFcEWxD2wjLM6ikCgJCtaoKrZh8SpdvrnxvVwchceFRxPucPj7CknAUfKaJc",
  "key3": "2XCVg8JDWLE4HqHLMfzJkZ9NkniRsdshvxYUKykoVAGzoLYjWPRXcmPRW4pey4W5qAxKopsS65EeAT71E1c2ga1Z",
  "key4": "37vS4u3U9rf7TYpFJcSeqwRnw3nNAxHJfL2yB3HoVAvrCdkM4kLUzeuXaa9jg9X3XRQSbvbNwKqHQcZkiPBoqD6z",
  "key5": "3vW1pNkdKkKqV5sNkvSiwa5roK79erRbruADdwjvrTPAK7jptJxKUHScLyN11mrGHdiVAEB8AdV1DR44DZs7JB4D",
  "key6": "5DaaowmvHJZiuwpduDozNxmuu2iTvammdWAD5j4cAvPeYpvPMVAztaiJNjhqW4fk7eVWwiBBVYPYZQsGotVfdiQx",
  "key7": "4bkpUoNbVfFFLhmfR4G6Adgs9x4RAT7uAzb5Gw75XkTi7a5ndi1ViS9CgkYH2xWdNRqcozqTA7Zot2qQvcajaEVc",
  "key8": "NfzYEuya4qP1BPZ92EpVXQCBtEb4XF9LbrRwZMWHe8LnnF849MVqao2eYdPaGBicaQEnV49fCEJd3BfUSHV57w1",
  "key9": "3ASSqLvkBqN9UKxSYHEzEgvudc8U6aPatMMsetRLPCN41qnFUZ69o95Q1zeGX6Siipho5H6gf7HtwspHnNrKNDej",
  "key10": "3UzDpVFffo74ybmkTaVDgVKFcDqh6U4jC8XFJgkLYHScisXJuxWwhJaCNSKG2uyamtmyACpwGDbHxvQEU2ZnXatj",
  "key11": "59X2fG7WPKxyLJKsucu8SduFpoCGQdqzfx6CyYcU2oPsMips7Ej6opn6tzwNDTvwDqN5wY3SYZjkHqYWgzz3Ah9K",
  "key12": "x3pDDyM1d4R5J1w95Tz7j1i5bbNGoofD2G6hsRvcZx6AovaTXPQNRetMUCmEJr8xndrB63V9ceooWU9szY5G1yL",
  "key13": "44Xh9AePFFQSKC2zYPABRmk85TWmLBwM6C6WqK5FeSj6S8SNZoNk8ZtG7TpJfUCRSVZBAhkbrzPqnGdpCVPkVuMr",
  "key14": "3CsyYr82pQ5rZmHkpHReKJcyo4sCRnqxrhnoAbS5CX6r9qoy6tKCHrv85P7h3rV4fqdjWgw72sjdXc2ewavKKaMk",
  "key15": "3fDmSE4Cow2BtXz78Zoa1SeDArp9edWfwqEv2dYNPdbiyeRXWZFwiYG11FJrYWjnsFFBEn3xpk2efoFFnM1d58KD",
  "key16": "2wSC5wViAv855Q2GynQMsmifLwWiTEwk5PMea99K7hWUfrAneK35LzGRt2RDjVsTNRqQfCXgBMM1caFNdbwHviQw",
  "key17": "3fZg8Q3Qe1ee2MbyhANtv7wx11oTT6WyJnHCQ5fTAnLU8GGCE3r7y7QTSKj7KUVz1NyDp9pUX6dSiH4WzjVLbc5Z",
  "key18": "4Yn5SykgPJpyeqdu746FhC6R9yxG2L98eZKkxjdxB7Ch2qqL1GffQwfGp4ntPbqabC81TiGwMj3iVjqdv7ra7Zoi",
  "key19": "3pBqxrxyfBqnrMYtzz1xZ8PcooBrDrZY6HftF4qifufRkGtck5r4cSnNMNTFYSb8DhTUZHfSagFRf3nKWAwUbEHq",
  "key20": "4YxGji2f3HM1MM9PErv1qxKhjtwGC8hFCxZNytxaH5dAdPEtPkif5dRX9wkqoFS2X2i34H1EFkwp1RbZ3HeKP5sz",
  "key21": "oUzya9Ubbux8oGaNSHi8JbtphnnPzrcH8uDoinE6XuZbhzDjhjwArMDcxRMBzh58NAbUjxDUh95ebsWjMfKWswC",
  "key22": "4RLPAGNJXBmwUJug9PVtNgtXsx2c2eRb5CVzu1LECGM36rM51kVEzV58CT84t4nfJx52np98Pk9TSL7YbsteMt6V",
  "key23": "3GtMhCfkE7a2WZoV2eNrKLVtLWNNr8VPUCZoqUaD3HUR8gVLukcutQ7oA7n7s4QKJXmR3AEcGD3rBEQ128z4yBfd",
  "key24": "2yznjFPTdVmZcpUihgGzYRnJm8hqsz4biNMXPU7iYv2kZztQdaDSC8jsKrkeEwda1yNXFi8Fz4xHr3YbrFLiDU1z",
  "key25": "3iHPF2SKGY1zPk73Sd7Hjuh4ijEa1Rx3H77uSaKgG6DXjU1eSNm8AYV8BMNYPMwjWLdAnYGEeKMBFft3V7h1HAYe",
  "key26": "GvZuUDzzfwmmGDEkYn4CQ475A5rJX8Q7NJsK7KYmNtycb7cBwcKgXckCTHQVCtvGPttiRhUMZCKU7eUXAreuUG8",
  "key27": "3XUMospDUxQ55obUjjaCj6QpewDUGYg3zeeo9mwjzunVncaoZG3m8bnN9B8SerZeTd3B85ZzcPbMkH9Hafz1jZJY",
  "key28": "5HESH1GCQyz2dgBPnPexQ5dyAmaUTYigA4mG5YFPxgXPoCT65LoR1NkJe3Y75gRzcScecT5A9AoQZXpS3CtyPTKi",
  "key29": "gkPTmYwUiXGYUdLW8E4r6vkdTw7Kp6LekX8depnWHpUdV851nFseZAsVHaxKngxuTBbKVRSKNzoNnkKRrsbztWD",
  "key30": "1yS3acFdW2ts4x3uai57JucsbXwVLfL9vpevquC8rTJCeYYgpwgAr6y9oibY9cxRPL5Frq5fGxgWFeDMsNGyfpD",
  "key31": "3iRimaCPoT7LfwqVwkHPkaj3d3zo69ymqEfFfaRi4xY9dnNk4t88exQ5gmwZWdMzwCpYSQiueZwfVCkfPR8gA4pH",
  "key32": "4rducafoEbA1rjPJ1k5fJ7dKDBy4QBVng3wcZ18tUSP2kdrzxyUDSoE7Hx5Epoc3WgmiDoYzxZB6hTqHDWa1MdbE"
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
