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
    "2BCyowiVSxXjPTqNFye5SAiUXvMQu8i6JDipmmJFT3TQ2yg2KDHNpUwWuhyUDURGNBSDiAt5V39veaiG8Ftrd1F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpomHt8goLu8WYvGiQUL2eX5Pyjys78UEqSmgsNqGwA4LDYAD7JwxSYkSk6LkVsGhW8CXGLK1wnEUy2QRQESDj5",
  "key1": "4E8aVuX4UPGpX7RpH1xZdpq9kRyy4bW5HkWKKjB2PPua2QnXBgy7B5JDX3vvLAQofNBcM9K4jEtPTzpC5SXCvAHz",
  "key2": "2yZnwuv6iVaLhRQPfb7XPdNCL7e1rK67eJAArs4GsHT81abHToHmwZJfWCcAqFAbvUgtVcdjwYYwihAZ7Y7Mc3dZ",
  "key3": "44jdTC57KHQrUTjq4swPe58F5vQsST2E4RyyHeYn8HmMji9HNCcFWY8AMdjhjiHysQfaQkUyXoiKr1fsaA8vkZmN",
  "key4": "5qiQ7apJ9JZNA7FKvRGsnF2Qn2QDVzMrTrHk9oaW9kNdVfdmbfDRKuES1Bw7XXoXAPy5dX7LXubUp22yXuya3Dkn",
  "key5": "46ECUmcZB1fG7yxbFDdzSdU8Hcp4rVrBtjVN4qcR6noJuPXFptYn7qL75NppDrV3mJbhB2XKRuWuhEDEkw7fW9Bh",
  "key6": "43hTji42RDuTWyeD8v8BmLERZWrhsM3chd2cpS18uy26DR7fHk9d4sD5ZhjiV5XTqXpNqsK8apc3VkCJYcRjU54X",
  "key7": "4dqNCxZGKev5KwXUVh8k3wkm8c9wKbE6B4SFnuQv69Briq4YBjiC3mAScEmP2YhZtdMWdGjWAcdZeTQw7LAk2Kk2",
  "key8": "4ptupGWY3UKN724YfzA5s3fsASKtycMjfw8AQm6oPcxTF62jxq6gUSk8m746Qe4UhrpqxvWArbPoKqsetv8aX8pp",
  "key9": "4HZyr9stiHiiB86zTnUwvwktzy4n26MnMBihpcNaN2DF9UQRitUMJ59ZBoRtNMMpwuA5Fft17QFw19PpwHSAgsYA",
  "key10": "2bYM4PGUCETKNu38THhcUtfPTcbpCa5g9sxZkunoVvQN94eCM3VviHRzm5x4VzX6hFHzdWkSYF1MBMgSqNWFtQ3L",
  "key11": "4Gztt3EpG8kv1mXKvCaNzBUCcuodu2a15pzDTLeN2Xki2tkCvKJoTAkKNv2A13dsW7aoay681kTiYRz7b18WsHNh",
  "key12": "Yck2kPoh8tjBeYC4kzT1TG823D4CfFvNFh3QUXNwN3rQjNAhn7VtAAfKseKuZH2Ptx4WDTDqDY3asxUofHK9xBJ",
  "key13": "3a8z9KkyGf3VitiX4wHfUJDhEMS4a4yFu9cmjTdv6uX9eVxfRVkHfD4GtbefqvtfEfncyrHBbT9NTD5WM4UiGtuo",
  "key14": "3pvuofxbncP54A559Ur9gWA6LH7yLJQhYAxH4Bxjt7AS2FyVgBYjYthPgdq4PUZ61ehSMGtFoA7rUkx61vGi7Fv1",
  "key15": "2N6pFi9VS5SNXbgnEsoznr6TbSQvgynDe4iq5PjgQm7zp5XUd2AXKGRHZR83fwJYKDJcLpwpVtHotREbo4v2Mkou",
  "key16": "4jkH1825bgLLRHhKrbfbCAP8zaGi3KurSHRYDNnvi7QMMdwy7WxsnBUxVJ4jkF6dvH1N41UGyHt1kzNxnWzNJN6B",
  "key17": "3qphGttavG5vCnmjjjB3JFTJFXunGu4RWLMwRjVEPGWCCPTw2hXwGrdxtCVEXbyea3yttrtPEqhT9XXQnrafBKT6",
  "key18": "3faADjEaYc9zrLYpLbpLRK1R3SxC23ehSHK1EVcSTZF3Qb6nptXvaB8vjaVqsGqynddFWKUrx6KzDDAK67tq6jcR",
  "key19": "4CZqgvzGj7SP3PVvGbvFoJvxSNm5KSyWWL3V6jAsqtwtkedLeRPv7QFx1TMFFFsodQFSoLMz81fLXPx22G5CHmnk",
  "key20": "WaVeACv3S4iKH92fNqqVEgNdNojc2jzhuvu1AaXBArHzfzgBPADQAn9aPmhEf2CPDZVUnUsYdvan4Jf1XPY9Mvt",
  "key21": "kQbnnyS9ipM6CyKtdcBLiPxngAVfonCQmiS3LMcyJVJ4JmSAKWoNymKCSMSVTi9hA5MiDQjBShpseEGFqaBdLRd",
  "key22": "286BXHov5WNbTmNCpoXLJcaH7qdqeBYtuL3UCiUv7YtBfUmQ72V4od3Ub1jPQo2LBDZSvxF1dz4HA4RVFdtfEy1P",
  "key23": "2q3AFpGdhDV1oQXTE7UhzWavxmGRvSuyb47hepbbvbrSK5CQyvr5Uqpgqua3XBTYWqGrDrBESsFaQ3aTGYSsZ3Lq",
  "key24": "awHP2FCRD3GEYDfNkiKJZ4Dq7bK14r7LykNpaQFrHqNxB7eyjkLMK7LrvNdii4PPTjUVD6UGNjGGfpuYSithzmF",
  "key25": "3EwJK7451tT46te3XJVddt3PvDNDRApFcxnjUoRHvQY8MkgeAyJkhJ4Bx6kHMgetC89dwcaCJ5ZiVRqYgsKj8sBo"
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
